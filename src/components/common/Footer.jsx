import { FaBolt, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { APP_NAME, NAV_LINKS, TARIFF_YEAR } from '../../constants';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white">
            <FaBolt className="text-amber-500" />
            {APP_NAME}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Unofficial APERC {TARIFF_YEAR} bill estimator and DISCOM payment
            redirect helper for Andhra Pradesh consumers.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Useful
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-500" size={12} />
              DISCOM helpline: 1912
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-amber-500" size={14} />
              Independent / unofficial tool
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-sm text-slate-500">
        © {year} {APP_NAME}. Not affiliated with APERC or AP DISCOMs.
      </div>
    </footer>
  );
}

export default Footer;
