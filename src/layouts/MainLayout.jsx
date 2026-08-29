import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import NoticeMarquee from '../components/common/NoticeMarquee';
import HelpChat from '../components/common/HelpChat';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import Analytics from '../components/common/Analytics';
import CookieNotice from '../components/common/CookieNotice';
import { useI18n } from '../context/AppContext';

function MainLayout() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        {t('nav.skipToContent')}
      </a>
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <NoticeMarquee />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8"
      >
        <Outlet />
      </main>
      <Footer />
      <HelpChat />
      <CookieNotice />
    </div>
  );
}

export default MainLayout;
