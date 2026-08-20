/**
 * Build-time prerender pass.
 *
 * Renders every crawlable route to static HTML so search engines and ad
 * crawlers receive real content instead of an empty SPA shell, then writes a
 * sitemap from the same route list.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const CLIENT_DIR = path.join(ROOT, 'dist');
const SERVER_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead({ title, description, url, siteName }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return [
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDescription}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDescription}" />`,
  ].join('\n    ');
}

function applyTemplate(template, { appHtml, title, description, head }) {
  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );

  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  html = html.replace('</head>', `  ${head}\n  </head>`);

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  return html;
}

function outputFileFor(routePath) {
  if (routePath === '/') {
    return path.join(CLIENT_DIR, 'index.html');
  }
  return path.join(CLIENT_DIR, routePath.replace(/^\//, ''), 'index.html');
}

function buildSitemap(routes, canonicalUrl, lastmod) {
  const entries = routes
    .map((route) =>
      [
        '  <url>',
        `    <loc>${escapeHtml(canonicalUrl(route.path))}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${route.priority ?? '0.5'}</priority>`,
        '  </url>',
      ].join('\n')
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

async function main() {
  const server = await import(pathToFileURL(SERVER_ENTRY).href);
  const { render, getSiteRoutes, canonicalUrl, APP_NAME } = server;

  const templatePath = path.join(CLIENT_DIR, 'index.html');
  const template = await fs.readFile(templatePath, 'utf8');
  const routes = getSiteRoutes();

  for (const route of routes) {
    const appHtml = render(route.path);
    const url = canonicalUrl(route.path);

    const html = applyTemplate(template, {
      appHtml,
      title: route.title,
      description: route.description,
      head: buildHead({
        title: route.title,
        description: route.description,
        url,
        siteName: APP_NAME,
      }),
    });

    const outFile = outputFileFor(route.path);
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, html, 'utf8');
  }

  // Vercel serves this for unmatched paths with a real 404 status, which avoids
  // the soft-404 an SPA fallback would produce. React Router renders NotFound
  // from the URL once the bundle loads.
  const notFoundTitle = `Page not found – ${APP_NAME}`;
  const notFoundDescription =
    'The page you are looking for does not exist on this site.';
  await fs.writeFile(
    path.join(CLIENT_DIR, '404.html'),
    applyTemplate(template, {
      appHtml: render('/404'),
      title: notFoundTitle,
      description: notFoundDescription,
      head: '<meta name="robots" content="noindex" />',
    }),
    'utf8'
  );

  const lastmod = new Date().toISOString().slice(0, 10);
  await fs.writeFile(
    path.join(CLIENT_DIR, 'sitemap.xml'),
    buildSitemap(routes, canonicalUrl, lastmod),
    'utf8'
  );

  console.log(
    `prerender: wrote ${routes.length} static pages, 404.html, and sitemap.xml with ${routes.length} URLs`
  );
}

main().catch((error) => {
  console.error('prerender failed');
  console.error(error);
  process.exit(1);
});
