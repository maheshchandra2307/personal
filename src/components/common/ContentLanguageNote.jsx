import { useI18n } from '../../context/AppContext';

/** Shown on long editorial pages that still ship English body copy. */
function ContentLanguageNote() {
  const { lang, t } = useI18n();

  if (lang !== 'te') return null;

  return (
    <p className="max-w-3xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900">
      {t('common.englishOnly')}
    </p>
  );
}

export default ContentLanguageNote;
