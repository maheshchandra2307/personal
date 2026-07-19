import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import PayBill from '../pages/PayBill';
import WhatsNew from '../pages/WhatsNew';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pay" element={<PayBill />} />
        <Route path="about" element={<About />} />
        <Route path="whats-new" element={<WhatsNew />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
