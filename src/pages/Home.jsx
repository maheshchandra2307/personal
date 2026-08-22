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
import { useI18n } from '../context/AppContext';
import { cn } from '../utils';
import { webApplicationJsonLd } from '../utils/jsonLd';

function Home() {
  const [activeTab, setActiveTab] = useState('calc');
  const { t, tList, locale, lang } = useI18n();
  const faqs = tList('home.faqs');

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: APP_NAME,
      url: SITE_URL,
      inLanguage: locale,
      description: t('seo.homeDesc'),
    },
    webApplicationJsonLd(t('seo.homeDesc'), locale),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <Seo path="/" />
      <JsonLd data={structuredData} />

      <section className="relative overflow-x-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 px-6 pb-10 pt-14 text-center">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
        <h1
          className={cn(
            'font-display relative mx-auto max-w-3xl text-[clamp(28px,5vw,48px)] font-bold',
            lang === 'te'
              ? 'pt-[0.28em] leading-[1.55] text-slate-900'
              : 'bg-gradient-to-br from-slate-900 from-30% to-blue-600 bg-clip-text leading-tight text-transparent'
          )}
        >
          {t('home.heroTitle')}
        </h1>
        <p className="relative mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
          {t('home.heroLead', { year: TARIFF_YEAR })}
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
            {t(`tabs.${tab.id}`)}
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
            {t('home.howTitle')}
          </h2>
          <p className="mt-4">{t('home.howP1', { year: TARIFF_YEAR })}</p>
          <p className="mt-3">{t('home.howP2')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.slabsTitle')}
          </h2>
          <p className="mt-4">{t('home.slabsP1')}</p>
          <p className="mt-3">{t('home.slabsP2', { year: TARIFF_YEAR })}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.tipsTitle')}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>{t('home.tip1')}</li>
            <li>{t('home.tip2')}</li>
            <li>{t('home.tip3')}</li>
            <li>{t('home.tip4')}</li>
            <li>{t('home.tip5')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.faqTitle')}
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>
                <p className="mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.learnTitle')}
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            {t('home.learnLead')}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-md"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600">
                  {t(`guides.cat.${guide.category}`)}
                </span>
                <span className="font-display mt-1.5 text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-amber-700">
                  {t(`guides.items.${guide.slug}.title`)}
                </span>
                <span className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                  {t(`guides.items.${guide.slug}.excerpt`)}
                </span>
                <span className="mt-3 text-[12px] text-slate-400">
                  {t(`guides.items.${guide.slug}.readingTime`)}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="font-display text-lg font-bold text-slate-900">
              {t('home.yourDiscom')}
            </h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-slate-600">
              {t('home.yourDiscomLead')}
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
                  {t('home.compareAll')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-[12px] leading-relaxed text-slate-400">
        <strong className="text-slate-600">
          {t('common.disclaimerWord')}:
        </strong>{' '}
        {t('home.disclaimer', { year: TARIFF_YEAR })}{' '}
        <Link
          to="/disclaimer"
          className="font-medium text-slate-500 underline underline-offset-2 hover:text-slate-700"
        >
          {t('home.readDisclaimer')}
        </Link>
        .
      </div>
    </div>
  );
}

export default Home;
