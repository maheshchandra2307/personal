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

export {
  formatMoney,
  calculateBill,
  buildSlabPreviewRows,
} from './billCalculator';
