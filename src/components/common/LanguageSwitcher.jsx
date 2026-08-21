import { useI18n } from '../../context/AppContext';
import { cn } from '../../utils';

const OPTIONS = [
  { id: 'en', short: 'EN' },
  { id: 'te', short: 'తె' },
];

function LanguageSwitcher({ className }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t('lang.label')}
      className={cn(
        'flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5',
        className
      )}
    >
      {OPTIONS.map((option) => {
        const active = lang === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLang(option.id)}
            aria-pressed={active}
            className={cn(
              'min-w-[2.25rem] rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide transition',
              active
                ? 'bg-white text-amber-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            )}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
