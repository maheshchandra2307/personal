import { useI18n } from '../../context/AppContext';

function NoticeMarquee() {
  const { t } = useI18n();
  const notice = t('notice');

  return (
    <div
      className="overflow-hidden border-b border-amber-200 bg-amber-50"
      role="status"
      aria-live="polite"
    >
      <div className="flex w-max animate-notice-marquee whitespace-nowrap py-2 text-[13px] font-medium text-amber-900">
        <span className="mx-8">{notice}</span>
        <span className="mx-8" aria-hidden="true">
          {notice}
        </span>
      </div>
    </div>
  );
}

export default NoticeMarquee;
