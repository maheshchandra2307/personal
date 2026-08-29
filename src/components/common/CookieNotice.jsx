import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/AppContext';

const STORAGE_KEY = 'ap-cookie-notice';

function CookieNotice() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Client-only so prerendered HTML stays empty (avoids a hydration mismatch).
    /* eslint-disable react-hooks/set-state-in-effect -- localStorage gate */
    try {
      setVisible(!window.localStorage.getItem(STORAGE_KEY));
    } catch {
      setVisible(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function acknowledge() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'acknowledged');
    } catch {
      /* private mode */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-body"
      className="fixed inset-x-0 bottom-0 z-[110] border-t border-slate-200 bg-white/95 p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl">
          <p
            id="cookie-notice-title"
            className="font-display text-sm font-semibold text-slate-900"
          >
            {t('cookies.title')}
          </p>
          <p
            id="cookie-notice-body"
            className="mt-1 text-[13px] leading-relaxed text-slate-600"
          >
            {t('cookies.body')}{' '}
            <Link
              to="/privacy-policy#cookies"
              className="font-medium text-amber-700 underline underline-offset-2"
            >
              {t('legal.privacy')}
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={acknowledge}
          className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {t('cookies.ok')}
        </button>
      </div>
    </div>
  );
}

export default CookieNotice;
