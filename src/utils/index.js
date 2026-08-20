/**
 * Join class names, filtering out falsy values.
 * @param {...(string|boolean|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a date string into a readable local date.
 * @param {string|number|Date} value
 * @returns {string}
 */
export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value));
}

/**
 * Format a date for editorial "last updated" lines, e.g. "20 August 2026".
 * @param {string|number|Date} value
 * @returns {string}
 */
export function formatLongDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export {
  formatMoney,
  calculateBill,
  buildSlabPreviewRows,
} from './billCalculator';
