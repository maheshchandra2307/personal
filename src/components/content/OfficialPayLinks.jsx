import { DISCOMS } from '../../constants/discoms';
import { useI18n } from '../../context/AppContext';

function OfficialPayLinks() {
  const { t } = useI18n();

  return (
    <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
      {DISCOMS.map((discom) => (
        <li key={discom.id}>
          <a
            href={discom.payUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-blue-400 hover:text-blue-800"
          >
            {t('home.payOn', { acronym: discom.acronym })}
            <span className="mt-1 text-[12px] font-normal text-slate-500">
              {discom.redirectNote}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default OfficialPayLinks;
