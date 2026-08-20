import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import NoticeMarquee from '../components/common/NoticeMarquee';
import HelpChat from '../components/common/HelpChat';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <NoticeMarquee />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <HelpChat />
    </div>
  );
}

export default MainLayout;
