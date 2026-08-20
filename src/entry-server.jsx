/* eslint-disable react-refresh/only-export-components -- build-only entry, never loaded by the dev server */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppProvider } from './context/AppContext';
import App from './App';

/**
 * Renders a route to static markup for the build-time prerender pass.
 * @param {string} url
 * @returns {string}
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppProvider>
        <App />
      </AppProvider>
    </StaticRouter>
  );
}

export { getSiteRoutes, canonicalUrl } from './constants/seo';
export { SITE_URL } from './constants/site';
export { APP_NAME } from './constants';
