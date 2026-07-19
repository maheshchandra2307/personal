import {
  FaExternalLinkAlt,
  FaSolarPanel,
  FaHome,
  FaBolt,
} from 'react-icons/fa';

const OFFICIAL_URL = 'https://pmsuryaghar.gov.in/#/';

const highlights = [
  {
    icon: FaBolt,
    label: 'Free electricity',
    value: 'Up to 300 units / month',
  },
  {
    icon: FaHome,
    label: 'Target households',
    value: '1 crore homes',
  },
  {
    icon: FaSolarPanel,
    label: 'Scheme investment',
    value: 'Over ₹75,000 crores',
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
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-12">
        <IndiaMapPattern />

        <div className="relative max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            Whats New · Central Government Scheme
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
            Visit official PM Surya Ghar website
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-2.5 text-[#0055A4]">
              <Icon size={18} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-slate-900">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 sm:px-8">
        <h2 className="font-display text-xl font-bold text-slate-900">
          What this means for consumers
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
          <li>
            Households can apply for rooftop solar under this central scheme
            through the official portal.
          </li>
          <li>
            Eligible homes may get subsidy support and generate their own
            electricity — reducing monthly bills.
          </li>
          <li>
            The goal includes up to{' '}
            <strong>300 units of free electricity</strong> every month for
            covered households.
          </li>
        </ul>
        <p className="mt-5 text-xs text-slate-500">
          This page is an informational highlight only. Applications,
          eligibility, and subsidies are handled on the official site:{' '}
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
    </div>
  );
}

export default WhatsNew;
