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

const COMMERCIAL_CATEGORIES = ['com', 'adv', 'fun', 'ev', 'gp'];
const EXAMPLE_UNITS = [50, 100, 200, 300];

function CommercialCalculator() {
  const { t, tList, locale } = useI18n();
  const faqs = tList('pages.commercial.faqs');
  const path = '/ap-commercial-electricity-bill-calculator';

  return (
    <div className="space-y-10">
      <Seo path={path} />
      <JsonLd
        data={[
          webApplicationJsonLd(t('seo.commercialDesc'), locale),
          breadcrumbJsonLd([
            { name: t('common.home'), path: '/' },
            { name: t('nav.commercialCalc'), path },
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
          { label: t('nav.commercialCalc'), path },
        ]}
        eyebrow={t('pages.commercial.eyebrow')}
        title={t('pages.commercial.title')}
        lead={t('pages.commercial.lead', { year: TARIFF_YEAR })}
        meta={t('common.updated', {
          date: formatLongDate(CONTENT_UPDATED, locale),
        })}
      />

      <BillCalculator
        allowedValues={COMMERCIAL_CATEGORIES}
        heading={t('pages.commercial.calcHeading')}
      />

      <article className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-slate-600">
        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.commercial.catTitle')}
          </h2>
          <p className="mt-4">{t('pages.commercial.catP1')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.commercial.loadTitle')}
          </h2>
          <p className="mt-4">{t('pages.commercial.loadP1')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.commercial.logicTitle')}
          </h2>
          <p className="mt-4">{t('pages.commercial.logicP1')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.commercial.examplesTitle')}
          </h2>
          <p className="mt-4">{t('pages.commercial.examplesLead')}</p>
          <div className="mt-4">
            <ExampleCalculations
              category="com"
              unitsList={EXAMPLE_UNITS}
              load={1}
              phase="1"
              note={t('pages.commercial.examplesNote')}
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pages.commercial.diffTitle')}
          </h2>
          <p className="mt-4">{t('pages.commercial.diffP1')}</p>
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
          {t('pages.commercial.source', { date: TARIFF_EFFECTIVE_DATE })}{' '}
          <Link
            to="/ap-electricity-bill-tariff"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('home.linkTariff')}
          </Link>
          {' · '}
          <Link
            to="/ap-domestic-electricity-bill-calculator"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('home.linkDomestic')}
          </Link>
        </p>
      </article>
    </div>
  );
}

export default CommercialCalculator;
