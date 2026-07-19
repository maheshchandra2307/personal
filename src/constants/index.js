import { tariffs } from './tariffs';

export const APP_NAME = 'AP Electricity Bill Calculator';
export const APP_TAGLINE = 'Andhra Pradesh · APERC';
export const APP_VERSION = '1.0.0';
export const TARIFF_YEAR = 'FY 2026-27';

export const NAV_LINKS = [
  { label: 'Calculator', path: '/' },
  { label: 'Pay Bill', path: '/pay' },
  { label: 'About', path: '/about' },
  { label: 'WhatsNew', path: '/whats-new' },
];

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export { tariffs };
