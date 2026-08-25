import { Link } from 'react-router-dom';
import BillCalculator from '../components/calculator/BillCalculator';
import ExampleCalculations from '../components/calculator/ExampleCalculations';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import FaqSection from '../components/content/FaqSection';
import OfficialPayLinks from '../components/content/OfficialPayLinks';
import { TARIFF_YEAR } from '../constants';
import { CONTENT_UPDATED, TARIFF_EFFECTIVE_DATE } from '../constants/site';
import { formatLongDate } from '../utils';
import { breadcrumbJsonLd, webApplicationJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';

const EXAMPLE_UNITS = [50, 100, 200, 300];

function DomesticCalculator() {
  const { t, tList, locale } = useI18n();
  const faqs = tList('pages.domestic.faqs');
  const path = '/ap-domestic-electricity-bill-calculator';

  return (
    <div className="space-y-10">
      <Seo path={path} />
      <JsonLd
        data={[
          webApplicationJsonLd(t('seo.domesticDesc'), locale),
          breadcrumbJsonLd([
            { name: t('common.home'), path: '/' },
            { name: t('nav.domesticCalc'), path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
        ]}
      />

      <PageHeader
        breadcrumbs={[
          { label: t('common.home'), path: '/' },
          { label: t('nav.domesticCalc'), path },
        ]}
        eyebrow={t('pages.domestic.eyebrow')}
        title={t('pages.domestic.title')}
        lead={t('pages.domestic.lead', { year: TARIFF_YEAR })}
        meta={t('common.updated', {
          date: formatLongDate(CONTENT_UPDATED, locale),
        })}
      />

      <BillCalculator
        lockedCategory="dom"
        heading={t('pages.domestic.calcHeading')}
      />

      <article className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.domestic.slabsTitle')}
          </h2>
          <p className="mt-4">{t('pages.domestic.slabsP1')}</p>
          <p className="mt-3">{t('pages.domestic.slabsP2')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.domestic.teleTitle')}
          </h2>
          <p className="mt-4">{t('pages.domestic.teleP1')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.domestic.fixedTitle')}
          </h2>
          <p className="mt-4">{t('pages.domestic.fixedP1')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.domestic.examplesTitle')}
          </h2>
          <p className="mt-4">{t('pages.domestic.examplesLead')}</p>
          <div className="mt-4">
            <ExampleCalculations
              category="dom"
              unitsList={EXAMPLE_UNITS}
              load={1}
              note={t('pages.domestic.examplesNote')}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.domestic.readTitle')}
          </h2>
          <p className="mt-4">{t('pages.domestic.readP1')}</p>
        </section>

        <FaqSection title={t('home.faqTitle')} items={faqs} />

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.payTitle')}
          </h2>
          <p className="mt-4">{t('home.payLead')}</p>
          <OfficialPayLinks />
        </section>

        <p className="text-[13px] text-slate-500">
          {t('pages.domestic.source', { date: TARIFF_EFFECTIVE_DATE })}{' '}
          <Link
            to="/ap-electricity-bill-tariff"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('home.linkTariff')}
          </Link>
          {' · '}
          <Link
            to="/ap-commercial-electricity-bill-calculator"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('home.linkCommercial')}
          </Link>
        </p>
      </article>
    </div>
  );
}

export default DomesticCalculator;
