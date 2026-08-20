import { useState } from 'react';
import { Link } from 'react-router-dom';
import BillCalculator from '../components/calculator/BillCalculator';
import {
  AgricultureTariff,
  CommercialTariff,
  DomesticTariff,
  IndustryTariff,
  OtherChargesTariff,
  OthersTariff,
} from '../components/tariff/TariffPanels';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import { CALCULATOR_TABS } from '../constants/tariffs';
import { APP_NAME, TARIFF_YEAR } from '../constants';
import { GUIDES } from '../constants/guides';
import { DISCOM_PROFILES } from '../constants/discomProfiles';
import { SITE_URL } from '../constants/site';
import { cn } from '../utils';

const FAQ_ITEMS = [
  {
    question: 'How do APERC electricity slabs work in Andhra Pradesh?',
    answer:
      'APERC LT tariffs use telescopic slabs for most domestic consumers. Your monthly units (kWh) are split across bands—for example the first block of units is billed at a lower energy charge, and higher usage moves into costlier slabs. Fixed/demand charges and other approved surcharges may apply on top of energy charges. This site applies the published APERC FY 2026-27 LT rates so you can see how each slab contributes to an estimate.',
  },
  {
    question: 'What inputs do I need for an accurate estimate?',
    answer:
      'Use your billed units for the month (or the period you want to check), pick the matching LT category (domestic, commercial, industry, agriculture, and others), and enter connected load or demand where the tariff requires it. Time-of-Day (ToD) categories need peak/off-peak split if your meter records it. Closer inputs mean a closer estimate—your DISCOM bill remains the final amount.',
  },
  {
    question: 'Why might my estimate differ from the DISCOM bill?',
    answer:
      'Official bills can include meter rent, electricity duty, subsidies, rebates, delayed payment surcharge, arrears, or temporary adjustments that are not always visible in a simple tariff table. Category mis-selection or wrong unit totals also change the result. Treat this tool as a planning estimate, then pay only on the official APEPDCL, APCPDCL, or APSPDCL portals.',
  },
  {
    question: 'Which DISCOM serves my district?',
    answer:
      'Andhra Pradesh is served by APEPDCL (eastern districts), APCPDCL (central), and APSPDCL (southern). Use the Pay Bill page on this site to find your district and open the matching official payment link. Helplines and service-number tips are also available in the help chat.',
  },
  {
    question: 'Is this an official APERC or government website?',
    answer:
      'No. This is an independent helper that mirrors published APERC LT tariff schedules for FY 2026-27. It is not affiliated with APERC, AP DISCOMs, or the Government of Andhra Pradesh. Always confirm rates and pay dues on official sources.',
  },
];

const STRUCTURED_DATA = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    description:
      'Independent Andhra Pradesh electricity bill calculator and tariff reference based on the APERC low-tension schedule.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState('calc');

  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <Seo path="/" />
      <JsonLd data={STRUCTURED_DATA} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 px-6 pb-10 pt-14 text-center">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
        <h1 className="font-display relative mx-auto max-w-3xl bg-gradient-to-br from-slate-900 from-30% to-blue-600 bg-clip-text text-[clamp(28px,5vw,48px)] font-bold leading-tight text-transparent">
          Know Your Exact Electricity Bill
        </h1>
        <p className="relative mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
          Official APERC tariff rates for all LT consumer categories in Andhra
          Pradesh, effective 25 March 2026. {TARIFF_YEAR} rates included.
        </p>
      </section>

      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 pt-8 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CALCULATOR_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px] border px-5 py-2.5 text-[13px] font-medium transition',
              activeTab === tab.id
                ? 'border-amber-400/40 bg-gradient-to-br from-amber-50 to-blue-50 text-amber-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            )}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6">
        {activeTab === 'calc' ? <BillCalculator /> : null}
        {activeTab === 'domestic' ? <DomesticTariff /> : null}
        {activeTab === 'commercial' ? <CommercialTariff /> : null}
        {activeTab === 'industry' ? <IndustryTariff /> : null}
        {activeTab === 'agri' ? <AgricultureTariff /> : null}
        {activeTab === 'others' ? <OthersTariff /> : null}
        {activeTab === 'charges' ? <OtherChargesTariff /> : null}
      </div>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-10 text-[15px] leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            How this AP electricity bill calculator works
          </h2>
          <p className="mt-4">
            Andhra Pradesh electricity charges for low-tension (LT) consumers
            are set by the Andhra Pradesh Electricity Regulatory Commission
            (APERC). For {TARIFF_YEAR}, energy charges are applied in slabs
            based on units consumed, with additional fixed or demand charges
            depending on the consumer category. This calculator maps your usage
            inputs to those published LT tariff schedules so you can estimate
            the energy and fixed portions of a monthly bill before you open your
            DISCOM statement.
          </p>
          <p className="mt-3">
            Start on the Calculator tab: choose your category, enter units (and
            load or ToD details when asked), then review the break-up of
            slab-wise energy charges and other applicable components. The
            Domestic, Commercial, Industry, Agriculture, and Others tabs show
            the same APERC rate tables used by the engine, so you can compare
            slabs without leaving the page. Other Charges covers items such as
            delayed payment surcharge, reconnection, and meter-related fees
            listed in the tariff order.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Understanding APERC LT tariff slabs
          </h2>
          <p className="mt-4">
            Domestic LT supply in Andhra Pradesh typically uses a telescopic
            structure: lower monthly consumption stays in cheaper energy-charge
            bands, while higher usage fills higher bands. Commercial and
            industrial LT categories may use different slab edges, demand
            charges, or Time-of-Day pricing. Agricultural and institutional
            categories follow their own APERC schedules, including free or
            concessional quotas where the tariff order provides them.
          </p>
          <p className="mt-3">
            Knowing which slab your units fall into helps you plan usage—for
            example, shifting non-essential load can keep a household below a
            costlier threshold. Always match the category printed on your bill
            (and your connected load) so the estimate reflects the correct
            schedule. Rates on this site follow the APERC LT order for{' '}
            {TARIFF_YEAR}, effective from 25 March 2026 as published for this
            app.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Tips for a useful estimate
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              Copy units from a recent bill or meter reading for the same
              billing period you want to check.
            </li>
            <li>
              Select the exact LT category shown on your bill—not a nearby label
              that sounds similar.
            </li>
            <li>
              Enter connected load or contracted demand when the form asks;
              fixed or demand charges depend on it.
            </li>
            <li>
              For ToD tariffs, split peak and off-peak units the way your meter
              records them.
            </li>
            <li>
              After estimating, pay only through official APEPDCL, APCPDCL, or
              APSPDCL websites linked from the Pay Bill page.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Learn how AP electricity billing works
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            The calculator gives you a number. These guides explain where that
            number comes from — the arithmetic behind a bill, what each field on
            your bill means, how the regulator sets rates, and what a saved unit
            is actually worth to you.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-md"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600">
                  {guide.category}
                </span>
                <span className="font-display mt-1.5 text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-amber-700">
                  {guide.title}
                </span>
                <span className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {guide.excerpt}
                </span>
                <span className="mt-3 text-[12px] text-slate-400">
                  {guide.readingTime}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="font-display text-lg font-bold text-slate-900">
              Your distribution company
            </h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-slate-600">
              Andhra Pradesh has three DISCOMs. Tariffs are the same in all
              three because APERC sets them state-wide, but the offices, portals
              and helplines differ.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {DISCOM_PROFILES.map((profile) => (
                <li key={profile.id}>
                  <Link
                    to={`/discoms/${profile.slug}`}
                    className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                  >
                    {profile.acronym}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/discoms"
                  className="inline-block rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
                >
                  Compare all three
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-[12px] leading-relaxed text-slate-400">
        <strong className="text-slate-600">Disclaimer:</strong> This calculator
        is for estimation based on APERC {TARIFF_YEAR} tariff values shown in
        this app. Actual bills may include utility-specific adjustments, taxes,
        rebates, meter rent, or subsidy conditions.{' '}
        <Link
          to="/disclaimer"
          className="font-medium text-slate-500 underline underline-offset-2 hover:text-slate-700"
        >
          Read the full disclaimer
        </Link>
        .
      </div>
    </div>
  );
}

export default Home;
