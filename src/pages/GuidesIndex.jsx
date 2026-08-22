import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import { GUIDES, GUIDE_CATEGORIES } from '../constants/guides';
import { TARIFF_YEAR } from '../constants';
import { formatLongDate } from '../utils';
import { itemListJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';

function GuideCard({ guide }) {
  const { t, locale } = useI18n();

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600">
        {t(`guides.cat.${guide.category}`)}
      </p>
      <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-slate-900">
        <Link to={`/guides/${guide.slug}`} className="hover:underline">
          {t(`guides.items.${guide.slug}.title`)}
        </Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
        {t(`guides.items.${guide.slug}.excerpt`)}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-400">
        <span>{t(`guides.items.${guide.slug}.readingTime`)}</span>
        <span aria-hidden="true">·</span>
        <span>
          {t('common.updated', { date: formatLongDate(guide.updated, locale) })}
        </span>
      </div>
      <Link
        to={`/guides/${guide.slug}`}
        className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800"
      >
        {t('common.readGuide')}
      </Link>
    </article>
  );
}

function GuidesIndex() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <Seo path="/guides" />
      <JsonLd
        data={itemListJsonLd(
          GUIDES.map((guide) => ({
            name: t(`guides.items.${guide.slug}.title`),
            path: `/guides/${guide.slug}`,
          }))
        )}
      />

      <PageHeader
        eyebrow={t('guides.eyebrow')}
        title={t('guides.indexTitle')}
        lead={t('guides.indexLead', { year: TARIFF_YEAR })}
      />

      <section className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-[15px] leading-relaxed text-slate-600">
        <p>{t('guides.intro')}</p>
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          <Link
            to="/guides/how-ap-electricity-bills-are-calculated"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('guides.linkCalc')}
          </Link>
          <Link
            to="/guides/how-to-read-your-ap-electricity-bill"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('guides.linkRead')}
          </Link>
          <Link
            to="/guides/how-to-reduce-your-electricity-bill"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('guides.linkReduce')}
          </Link>
        </p>
      </section>

      {GUIDE_CATEGORIES.map((category) => (
        <section key={category}>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t(`guides.cat.${category}`)}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {GUIDES.filter((guide) => guide.category === category).map(
              (guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              )
            )}
          </div>
        </section>
      ))}

      <p className="max-w-3xl border-t border-slate-200 pt-8 text-[13px] leading-relaxed text-slate-500">
        {t('guides.footnote')}
      </p>
    </div>
  );
}

export default GuidesIndex;
