import { FaBolt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { APP_NAME, LEGAL_LINKS, NAV_LINKS, TARIFF_YEAR } from '../../constants';
import { CONTACT_EMAIL, DISCOM_HELPLINE } from '../../constants/site';
import { GUIDES } from '../../constants/guides';
import { useI18n } from '../../context/AppContext';

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </p>
      {children}
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white">
            <FaBolt className="text-amber-500" />
            {APP_NAME}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {t('footer.blurb', { year: TARIFF_YEAR })}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="shrink-0 text-amber-500" size={12} />
              {t('footer.helpline', { number: DISCOM_HELPLINE })}
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="shrink-0 text-amber-500" size={12} />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition-colors hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <FooterColumn title={t('footer.navigation')}>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm transition-colors hover:text-white"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={t('footer.guides')}>
          <ul className="mt-3 space-y-2">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  to={`/guides/${guide.slug}`}
                  className="text-sm leading-snug transition-colors hover:text-white"
                >
                  {t(`guides.items.${guide.slug}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={t('footer.legal')}>
          <ul className="mt-3 space-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm transition-colors hover:text-white"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm leading-relaxed text-slate-500">
        {t('footer.copyright', { year, name: APP_NAME })}
      </div>
    </footer>
  );
}

export default Footer;
