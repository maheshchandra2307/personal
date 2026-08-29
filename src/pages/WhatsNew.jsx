import {
  FaExternalLinkAlt,
  FaSolarPanel,
  FaHome,
  FaBolt,
} from 'react-icons/fa';
import Seo from '../components/common/Seo';
import { useI18n } from '../context/AppContext';

const OFFICIAL_URL = 'https://pmsuryaghar.gov.in/#/';

const highlightDefs = [
  {
    icon: FaBolt,
    labelKey: 'whatsNew.freeElec',
    valueKey: 'whatsNew.freeValue',
  },
  {
    icon: FaHome,
    labelKey: 'whatsNew.target',
    valueKey: 'whatsNew.targetValue',
  },
  {
    icon: FaSolarPanel,
    labelKey: 'whatsNew.investment',
    valueKey: 'whatsNew.investmentValue',
  },
];

function IndiaMapPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 h-full w-full max-w-md opacity-[0.18]"
      viewBox="0 0 320 360"
      fill="none"
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#3b82f6" />
        </pattern>
        <clipPath id="india-shape">
          <path d="M160 28c18 6 34 18 46 34 10 14 18 22 30 28 14 8 28 18 34 34 6 14 4 30-2 44-4 10-6 18-2 28 4 12 10 22 8 34-2 14-12 24-24 30-10 6-18 14-20 26-2 12 2 24 8 34 4 8 6 16 2 24-6 14-20 20-34 22-12 2-24 6-34 14-8 6-18 8-28 4-12-4-18-14-22-26-4-10-10-18-20-22-14-6-28-4-40 4-10 6-22 8-32 2-12-6-16-20-14-32 2-12 0-24-8-34-10-12-18-26-16-42 2-14 12-24 24-30 10-6 16-14 18-26 2-12-2-24-8-34-4-8-4-18 2-26 8-12 22-18 36-20 12-2 22-8 32-16 12-10 26-16 42-14z" />
        </clipPath>
      </defs>
      <g clipPath="url(#india-shape)">
        <rect width="320" height="360" fill="url(#dot-grid)" />
      </g>
    </svg>
  );
}

function WhatsNew() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <Seo path="/whats-new" />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-12">
        <IndiaMapPattern />

        <div className="relative max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            {t('whatsNew.eyebrow')}
          </p>

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-slate-950">PM Surya Ghar:</span>
            <span className="mt-1 block text-[#0055A4]">Muft Bijli Yojana</span>
          </h1>

          <blockquote className="mt-6 border-l-4 border-blue-500/40 pl-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            &ldquo;In order to further sustainable development and people&apos;s
            well-being, we are launching the PM Surya Ghar: Muft Bijli Yojana.
            This project, with an investment of over Rs. 75,000 crores, aims to
            light up 1 crore households by providing up to 300 units of free
            electricity every month.&rdquo;
          </blockquote>

          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0055A4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {t('whatsNew.visit')}
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {highlightDefs.map(({ icon: Icon, labelKey, valueKey }) => (
          <div
            key={labelKey}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-2.5 text-[#0055A4]">
              <Icon size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {t(labelKey)}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-slate-900">
              {t(valueKey)}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 sm:px-8">
        <h2 className="font-display text-xl font-bold text-slate-900">
          {t('whatsNew.meansTitle')}
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
          <li>{t('whatsNew.means1')}</li>
          <li>{t('whatsNew.means2')}</li>
          <li>{t('whatsNew.means3')}</li>
        </ul>
        <p className="mt-5 text-xs text-slate-500">
          {t('whatsNew.footnote')}{' '}
          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0055A4] underline underline-offset-2"
          >
            pmsuryaghar.gov.in
          </a>
        </p>
      </section>

      <article className="max-w-3xl space-y-6 text-[15px] leading-relaxed text-slate-600">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('whatsNew.howTitle')}
        </h2>
        <p>{t('whatsNew.howP1')}</p>
        <p>{t('whatsNew.howP2')}</p>
        <p>{t('whatsNew.howP3')}</p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('whatsNew.billTitle')}
        </h2>
        <p>{t('whatsNew.billP1')}</p>
        <p>{t('whatsNew.billP2')}</p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('whatsNew.applyTitle')}
        </h2>
        <ol className="list-decimal space-y-2.5 pl-5">
          <li>{t('whatsNew.apply1')}</li>
          <li>{t('whatsNew.apply2')}</li>
          <li>{t('whatsNew.apply3')}</li>
        </ol>
        <p>{t('whatsNew.unofficial')}</p>
      </article>
    </div>
  );
}

export default WhatsNew;
