import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PayBill from '../pages/PayBill';
import WhatsNew from '../pages/WhatsNew';
import GuidesIndex from '../pages/GuidesIndex';
import GuideArticle from '../pages/GuideArticle';
import DiscomIndex from '../pages/DiscomIndex';
import DiscomDetail from '../pages/DiscomDetail';
import LegalPrivacy from '../pages/LegalPrivacy';
import Terms from '../pages/Terms';
import Disclaimer from '../pages/Disclaimer';
import DomesticCalculator from '../pages/DomesticCalculator';
import CommercialCalculator from '../pages/CommercialCalculator';
import TariffRates from '../pages/TariffRates';
import Faq from '../pages/Faq';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="ap-domestic-electricity-bill-calculator"
          element={<DomesticCalculator />}
        />
        <Route
          path="ap-commercial-electricity-bill-calculator"
          element={<CommercialCalculator />}
        />
        <Route path="ap-electricity-bill-tariff" element={<TariffRates />} />
        <Route path="faq" element={<Faq />} />
        <Route
          path="apcpdcl-bill-calculator"
          element={<Navigate to="/discoms/apcpdcl" replace />}
        />
        <Route
          path="apepdcl-bill-calculator"
          element={<Navigate to="/discoms/apepdcl" replace />}
        />
        <Route
          path="ape-pdcl-bill-calculator"
          element={<Navigate to="/discoms/apepdcl" replace />}
        />
        <Route
          path="apspdcl-bill-calculator"
          element={<Navigate to="/discoms/apspdcl" replace />}
        />
        <Route path="pay" element={<PayBill />} />
        <Route path="guides" element={<GuidesIndex />} />
        <Route path="guides/:slug" element={<GuideArticle />} />
        <Route path="discoms" element={<DiscomIndex />} />
        <Route path="discoms/:slug" element={<DiscomDetail />} />
        <Route path="whats-new" element={<WhatsNew />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<LegalPrivacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
