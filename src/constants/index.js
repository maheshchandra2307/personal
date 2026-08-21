import { tariffs } from './tariffs';

export const APP_NAME = 'AP Electricity Bill Calculator';
export const APP_TAGLINE = 'Andhra Pradesh · APERC';
export const APP_VERSION = '1.0.0';
export const TARIFF_YEAR = 'FY 2026-27';

export const NAV_LINKS = [
  { labelKey: 'nav.calculator', path: '/' },
  { labelKey: 'nav.payBill', path: '/pay' },
  { labelKey: 'nav.guides', path: '/guides' },
  { labelKey: 'nav.discoms', path: '/discoms' },
  { labelKey: 'nav.whatsNew', path: '/whats-new' },
  { labelKey: 'nav.about', path: '/about' },
];

export const LEGAL_LINKS = [
  { labelKey: 'legal.privacy', path: '/privacy-policy' },
  { labelKey: 'legal.terms', path: '/terms' },
  { labelKey: 'legal.disclaimer', path: '/disclaimer' },
  { labelKey: 'legal.contact', path: '/contact' },
];

export const CATEGORY_GROUP_KEYS = {
  Domestic: 'groups.domestic',
  Commercial: 'groups.commercial',
  'Industry LT': 'groups.industry',
  Institutional: 'groups.institutional',
  Agriculture: 'groups.agriculture',
  Temporary: 'groups.temporary',
};

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export { tariffs };
