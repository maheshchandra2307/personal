import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Browsers restore scroll position on client-side navigation; reset it. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
