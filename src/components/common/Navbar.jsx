import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { APP_NAME, NAV_LINKS } from '../../constants';
import { useI18n } from '../../context/AppContext';
import { cn } from '../../utils';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-600 to-orange-500 text-lg">
            <img
              src="/logo.png"
              alt="AP Electricity Bill Calculator"
              width="36"
              height="36"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="font-display text-[16px] font-bold leading-tight text-slate-900">
              {APP_NAME}
            </div>
            <div className="text-[10px] font-normal uppercase tracking-wide text-slate-400">
              {t('app.tagline')}
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-amber-50 text-amber-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-3 py-2 text-sm font-medium',
                    isActive
                      ? 'bg-amber-50 text-amber-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  )
                }
              >
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

export default Navbar;
