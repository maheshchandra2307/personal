const GA_MEASUREMENT_ID = String(
  import.meta.env.VITE_GA_MEASUREMENT_ID || ''
).trim();

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/i;

let queuedPath = null;

function isAnalyticsEnabled() {
  return GA_ID_PATTERN.test(GA_MEASUREMENT_ID);
}

/**
 * Loads gtag.js once. No-op when VITE_GA_MEASUREMENT_ID is unset or invalid
 * so local/dev builds stay unchanged unless an ID is provided.
 */
export function initAnalytics() {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    if (queuedPath != null) {
      const path = queuedPath;
      queuedPath = null;
      trackPageView(path);
    }
  };
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
}

/** Sends a GA4 page_view for SPA navigations. Safe to call before gtag loads. */
export function trackPageView(path) {
  if (!isAnalyticsEnabled() || typeof window === 'undefined') return;

  if (!window.gtag) {
    queuedPath = path;
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
