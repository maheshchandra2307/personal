import { SITE_URL } from './site';
import { GUIDES } from './guides';
import { DISCOM_PROFILES } from './discomProfiles';

/**
 * Per-route metadata. This is the single source used by the runtime <Seo />
 * component, the generated sitemap, and the build-time prerender step, so the
 * head of a prerendered page always matches what the SPA would set.
 */
const STATIC_META = {
  '/': {
    title: 'AP Electricity Bill Calculator – APERC FY 2026-27 LT Tariff',
    description:
      'Estimate your Andhra Pradesh electricity bill using APERC FY 2026-27 LT tariff rates. Covers domestic, commercial, industrial, agricultural and institutional categories with telescopic slabs and time-of-day rates.',
    priority: '1.0',
  },
  '/pay': {
    title: 'Pay AP Electricity Bill Online – Official DISCOM Links',
    description:
      'Find your Andhra Pradesh DISCOM by district and open its official payment page. Unofficial redirect helper for APSPDCL, APCPDCL and APEPDCL, with helplines and payment steps.',
    priority: '0.8',
  },
  '/guides': {
    title: 'Guides to AP Electricity Bills and APERC Tariffs',
    description:
      'Plain-language guides to Andhra Pradesh electricity billing — how bills are calculated, how telescopic slabs work, what APERC tariff orders contain, LT versus HT connections, and how to reduce your bill.',
    priority: '0.9',
  },
  '/discoms': {
    title: 'AP Electricity Distribution Companies (DISCOMs) Explained',
    description:
      'Reference pages for the three Andhra Pradesh distribution companies — APSPDCL, APCPDCL and APEPDCL — covering districts served, applicable APERC tariffs, payment channels and complaint escalation.',
    priority: '0.8',
  },
  '/whats-new': {
    title: 'What’s New – PM Surya Ghar and AP Electricity Updates',
    description:
      'Updates relevant to Andhra Pradesh electricity consumers, including the PM Surya Ghar: Muft Bijli Yojana rooftop solar scheme and its implications for household bills.',
    priority: '0.6',
  },
  '/about': {
    title: 'About the AP Electricity Bill Calculator',
    description:
      'Who runs this site, where the APERC FY 2026-27 tariff data comes from, how the calculator works, its limitations, and our editorial and correction policy.',
    priority: '0.7',
  },
  '/contact': {
    title: 'Contact Us – AP Electricity Bill Calculator',
    description:
      'Contact the AP Electricity Bill Calculator team to report a tariff error, a calculation problem or a broken link. Note that we cannot access your electricity account or resolve billing disputes.',
    priority: '0.6',
  },
  '/privacy-policy': {
    title: 'Privacy Policy – AP Electricity Bill Calculator',
    description:
      'How this site handles data: what the calculator does and does not store, use of cookies, Google Analytics, and third-party advertising including Google AdSense.',
    priority: '0.4',
  },
  '/terms': {
    title: 'Terms of Service – AP Electricity Bill Calculator',
    description:
      'The terms governing use of the AP Electricity Bill Calculator, including acceptable use, intellectual property, third-party links, limitation of liability and changes to these terms.',
    priority: '0.4',
  },
  '/disclaimer': {
    title: 'Disclaimer – AP Electricity Bill Calculator',
    description:
      'Important limitations of this tool: it is an unofficial estimator not affiliated with APERC or any AP DISCOM, and estimates are not a substitute for your official electricity bill.',
    priority: '0.4',
  },
};

export const DEFAULT_META = STATIC_META['/'];

function guidePath(guide) {
  return `/guides/${guide.slug}`;
}

function discomPath(profile) {
  return `/discoms/${profile.slug}`;
}

/** Resolve metadata for a route path, including dynamic content routes. */
export function getRouteMeta(path) {
  const normalised =
    path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

  if (STATIC_META[normalised]) {
    return { path: normalised, ...STATIC_META[normalised] };
  }

  const guide = GUIDES.find((item) => guidePath(item) === normalised);
  if (guide) {
    return {
      path: normalised,
      title: guide.metaTitle,
      description: guide.description,
      priority: '0.7',
    };
  }

  const profile = DISCOM_PROFILES.find(
    (item) => discomPath(item) === normalised
  );
  if (profile) {
    return {
      path: normalised,
      title: profile.metaTitle,
      description: profile.description,
      priority: '0.6',
    };
  }

  return { path: normalised, ...DEFAULT_META, priority: '0.5' };
}

/** Every crawlable route, used for prerendering and the sitemap. */
export function getSiteRoutes() {
  return [
    ...Object.keys(STATIC_META),
    ...GUIDES.map(guidePath),
    ...DISCOM_PROFILES.map(discomPath),
  ].map(getRouteMeta);
}

export function canonicalUrl(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
