import { useEffect } from 'react';
import { canonicalUrl, getRouteMeta } from '../../constants/seo';
import { APP_NAME } from '../../constants';
import { OG_IMAGE_URL } from '../../constants/site';
import { useI18n } from '../../context/AppContext';
import JsonLd from '../content/JsonLd';
import { webPageJsonLd } from '../../utils/jsonLd';

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
  '/ap-electricity-bill-tariff': ['seo.tariffTitle', 'seo.tariffDesc'],
  '/ap-domestic-electricity-bill-calculator': [
    'seo.domesticTitle',
    'seo.domesticDesc',
  ],
  '/ap-commercial-electricity-bill-calculator': [
    'seo.commercialTitle',
    'seo.commercialDesc',
  ],
  '/faq': ['seo.faqTitle', 'seo.faqDesc'],
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
function Seo({ path, jsonLdType = 'WebPage' }) {
  const { t, lang, locale } = useI18n();
  const meta = getRouteMeta(path);
  const keys = SEO_KEYS[meta.path];
  const title = keys ? t(keys[0]) : meta.title;
  const description = keys ? t(keys[1]) : meta.description;
  const url = canonicalUrl(path);
  const ogLocale = lang === 'te' ? 'te_IN' : 'en_IN';
  const ogLocaleAlternate = lang === 'te' ? 'en_IN' : 'te_IN';

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', APP_NAME);
    upsertMeta('property', 'og:locale', ogLocale);
    upsertMeta('property', 'og:locale:alternate', ogLocaleAlternate);
    upsertMeta('property', 'og:image', OG_IMAGE_URL);
    upsertMeta('property', 'og:image:alt', APP_NAME);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', OG_IMAGE_URL);
  }, [title, description, url, ogLocale, ogLocaleAlternate]);

  return (
    <JsonLd
      data={webPageJsonLd({
        path,
        title,
        description,
        type: jsonLdType,
        inLanguage: locale,
      })}
    />
  );
}

export default Seo;
