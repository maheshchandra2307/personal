import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Button from '../components/ui/Button';
import { APP_NAME } from '../constants';
import { useI18n } from '../context/AppContext';

function NotFound() {
  const { t } = useI18n();

  const suggestions = [
    { label: t('notFound.calc'), path: '/' },
    { label: t('notFound.guides'), path: '/guides' },
    { label: t('notFound.discoms'), path: '/discoms' },
    { label: t('notFound.pay'), path: '/pay' },
    { label: t('notFound.about'), path: '/about' },
    { label: t('notFound.contact'), path: '/contact' },
  ];

  useEffect(() => {
    document.title = t('notFound.documentTitle', { name: APP_NAME });

    let tag = document.head.querySelector('meta[name="robots"]');
    const created = !tag;

    if (created) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', 'noindex');

    return () => {
      if (created) {
        tag.remove();
      } else {
        tag.setAttribute('content', 'index, follow');
      }
    };
  }, [t]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <HiOutlineExclamationCircle className="text-amber-600" size={56} />
      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-amber-700">
        404
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 max-w-md text-slate-600">{t('notFound.lead')}</p>

      <ul className="mt-7 flex max-w-lg flex-wrap justify-center gap-2.5">
        {suggestions.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/">
          <Button>{t('notFound.back')}</Button>
        </Link>
        <Link to="/guides">
          <Button variant="outline">{t('notFound.browse')}</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
