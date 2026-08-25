import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import FaqSection from '../components/content/FaqSection';
import OfficialPayLinks from '../components/content/OfficialPayLinks';
import { TARIFF_YEAR } from '../constants';
import { CONTENT_UPDATED } from '../constants/site';
import { formatLongDate } from '../utils';
import { breadcrumbJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';

function Faq() {
  const { t, tList, locale } = useI18n();
  const faqs = tList('home.faqs');
  const path = '/faq';

  return (
    <div className="space-y-10">
      <Seo path={path} />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: t('common.home'), path: '/' },
            { name: t('nav.faq'), path },
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
          { label: t('nav.faq'), path },
        ]}
        eyebrow={t('pages.faq.eyebrow')}
        title={t('pages.faq.title')}
        lead={t('pages.faq.lead', { year: TARIFF_YEAR })}
        meta={t('common.updated', {
          date: formatLongDate(CONTENT_UPDATED, locale),
        })}
      />

      <article className="max-w-3xl space-y-10 text-[15px] leading-relaxed text-slate-600">
        <FaqSection title={t('home.faqTitle')} items={faqs} />

        <section>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('home.payTitle')}
          </h2>
          <p className="mt-4">{t('home.payLead')}</p>
          <OfficialPayLinks />
        </section>

        <p>
          <Link
            to="/"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('home.linkAllCategories')}
          </Link>
          {' · '}
          <Link
            to="/contact"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('legal.contact')}
          </Link>
          {' · '}
          <Link
            to="/disclaimer"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('legal.disclaimer')}
          </Link>
        </p>
      </article>
    </div>
  );
}

export default Faq;
