import { APP_NAME } from '../constants';
import { CONTACT_EMAIL, LOGO_URL, SITE_URL } from '../constants/site';
import { canonicalUrl } from '../constants/seo';

function organizationNode() {
  return {
    '@type': 'Organization',
    name: APP_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: LOGO_URL,
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
  type = 'WebPage',
  inLanguage,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: canonicalUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: APP_NAME,
      url: SITE_URL,
    },
    publisher: organizationNode(),
  };

  if (inLanguage) {
    data.inLanguage = inLanguage;
  }

  return data;
}

export function webApplicationJsonLd(description, inLanguage) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: APP_NAME,
    url: SITE_URL,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  if (inLanguage) {
    data.inLanguage = inLanguage;
  }

  return data;
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function itemListJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}
