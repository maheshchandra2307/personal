import { useEffect } from 'react';
import { canonicalUrl, getRouteMeta } from '../../constants/seo';
import { APP_NAME } from '../../constants';
import { useI18n } from '../../context/AppContext';

const SEO_KEYS = {
  '/': ['seo.homeTitle', 'seo.homeDesc'],
  '/pay': ['seo.payTitle', 'seo.payDesc'],
  '/guides': ['seo.guidesTitle', 'seo.guidesDesc'],
  '/discoms': ['seo.discomsTitle', 'seo.discomsDesc'],
  '/whats-new': ['seo.whatsNewTitle', 'seo.whatsNewDesc'],
  '/about': ['seo.aboutTitle', 'seo.aboutDesc'],
  '/contact': ['seo.contactTitle', 'seo.contactDesc'],
  '/privacy-policy': ['seo.privacyTitle', 'seo.privacyDesc'],
  '/terms': ['seo.termsTitle', 'seo.termsDesc'],
  '/disclaimer': ['seo.disclaimerTitle', 'seo.disclaimerDesc'],
};

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
  const { t, lang } = useI18n();

  useEffect(() => {
    const meta = getRouteMeta(path);
    const keys = SEO_KEYS[meta.path];
    const title = keys ? t(keys[0]) : meta.title;
    const description = keys ? t(keys[1]) : meta.description;
    const url = canonicalUrl(path);

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', APP_NAME);
    upsertMeta('property', 'og:locale', lang === 'te' ? 'te_IN' : 'en_IN');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
  }, [path, t, lang]);

  return null;
}

export default Seo;
