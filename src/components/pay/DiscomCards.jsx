import { DISCOMS } from '../../constants/discoms';
import { cn } from '../../utils';

const themeStyles = {
  southern: {
    band: 'from-[#2980b9] to-[#1a5f94]',
    logo: 'from-[#2980b9] to-[#1a5f94]',
    acronym: 'text-[#1a5f94]',
    tag: 'bg-[#2980b9]',
    dist: 'border-[#a9cce3] bg-[#eaf4fb] text-[#1a5f94]',
    btn: 'from-[#2980b9] to-[#1a5f94]',
  },
  central: {
    band: 'from-[#27ae60] to-[#1e8449]',
    logo: 'from-[#27ae60] to-[#1e8449]',
    acronym: 'text-[#1e8449]',
    tag: 'bg-[#27ae60]',
    dist: 'border-[#a9dfbf] bg-[#eafaf1] text-[#1e8449]',
    btn: 'from-[#27ae60] to-[#1e8449]',
  },
  eastern: {
    band: 'from-[#e74c3c] to-[#c0392b]',
    logo: 'from-[#e74c3c] to-[#c0392b]',
    acronym: 'text-[#c0392b]',
    tag: 'bg-[#e74c3c]',
    dist: 'border-[#f5b7b1] bg-[#fdecea] text-[#922b21]',
    btn: 'from-[#e74c3c] to-[#c0392b]',
  },
};

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px] fill-white">
      <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-white">
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </svg>
  );
}

function openPortal(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function DiscomCards() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
      {DISCOMS.map((discom) => {
        const theme = themeStyles[discom.theme];

        return (
          <div
            key={discom.id}
            role="button"
            tabIndex={0}
            aria-label={`Go to official ${discom.acronym} bill payment site`}
            onClick={() => openPortal(discom.payUrl)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPortal(discom.payUrl);
              }
            }}
            className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border-[1.5px] border-[#e0eaf5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
          >
            <div className={cn('h-1.5 w-full bg-gradient-to-r', theme.band)} />

            <div className="flex items-center gap-4 border-b border-slate-100 px-5 pb-4 pt-6">
              <div
                className={cn(
                  'flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br',
                  theme.logo
                )}
              >
                <LightningIcon />
              </div>
              <div>
                <div
                  className={cn(
                    'text-[20px] font-extrabold leading-none',
                    theme.acronym
                  )}
                >
                  {discom.acronym}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-slate-600">
                  {discom.fullName}
                </div>
                <span
                  className={cn(
                    'mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white',
                    theme.tag
                  )}
                >
                  HQ: {discom.hq}
                </span>
              </div>
            </div>

            <div className="flex-1 px-5 py-3.5">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-slate-400 after:ml-1 after:h-px after:flex-1 after:bg-slate-200">
                Districts Covered
              </div>
              <div className="flex flex-wrap gap-1.5">
                {discom.districts.map((district) => (
                  <span
                    key={district}
                    className={cn(
                      'rounded-xl border px-2 py-0.5 text-[11px] font-medium',
                      theme.dist
                    )}
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={discom.payUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                'mx-5 mb-3 flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br px-3 py-3 text-[14px] font-bold tracking-wide text-white transition hover:brightness-110',
                theme.btn
              )}
            >
              <WalletIcon />
              {discom.payLabel}
            </a>
            <div className="px-5 text-center text-[10px] text-slate-400">
              {discom.redirectNote}
            </div>
            <div className="px-5 pb-4 pt-1 text-center text-[11px] text-slate-500">
              Helpline:{' '}
              <strong className="text-slate-700">{discom.helpline}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}
