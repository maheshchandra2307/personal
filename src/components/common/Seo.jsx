import { useEffect } from 'react';
import { canonicalUrl, getRouteMeta } from '../../constants/seo';
import { APP_NAME } from '../../constants';

function upsertMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

/**
 * Keeps the document head in sync with the active route. Prerendered pages ship
 * the same tags in their static HTML; this handles client-side navigation.
 */
function Seo({ path }) {
  useEffect(() => {
    const { title, description } = getRouteMeta(path);
    const url = canonicalUrl(path);

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', APP_NAME);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
  }, [path]);

  return null;
}

export default Seo;
