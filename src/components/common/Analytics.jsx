import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '../../utils/analytics';

/**
 * Records a GA4 page_view on the first load and on every client-side route
 * change. Does nothing when analytics is not configured.
 */
function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
}

export default Analytics;
