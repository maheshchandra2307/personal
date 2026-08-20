import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import { GUIDES, GUIDE_CATEGORIES } from '../constants/guides';
import { TARIFF_YEAR } from '../constants';
import { formatLongDate } from '../utils';

function GuideCard({ guide }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600">
        {guide.category}
      </p>
      <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-slate-900">
        <Link to={`/guides/${guide.slug}`} className="hover:underline">
          {guide.title}
        </Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
        {guide.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-400">
        <span>{guide.readingTime}</span>
        <span aria-hidden="true">·</span>
        <span>Updated {formatLongDate(guide.updated)}</span>
      </div>
      <Link
        to={`/guides/${guide.slug}`}
        className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800"
      >
        Read the guide →
      </Link>
    </article>
  );
}

function GuidesIndex() {
  return (
    <div className="space-y-10">
      <Seo path="/guides" />

      <PageHeader
        eyebrow="Guides"
        title="Guides to AP electricity bills and tariffs"
        lead={`Understanding an electricity bill should not require reading a regulatory order. These guides explain how Andhra Pradesh billing actually works — from the arithmetic on your bill to the process that sets the rates — using the APERC ${TARIFF_YEAR} low-tension schedule that drives the calculator on this site.`}
      />

      <section className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-[15px] leading-relaxed text-slate-600">
        <p>
          If you are starting from scratch, read{' '}
          <Link
            to="/guides/how-ap-electricity-bills-are-calculated"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            how AP electricity bills are calculated
          </Link>{' '}
          first — it follows a single bill from meter reading to final amount
          with a worked example. From there,{' '}
          <Link
            to="/guides/how-to-read-your-ap-electricity-bill"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            how to read your bill
          </Link>{' '}
          helps you check your own, and{' '}
          <Link
            to="/guides/how-to-reduce-your-electricity-bill"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            how to reduce your bill
          </Link>{' '}
          works out what a saved unit is actually worth to you.
        </p>
      </section>

      {GUIDE_CATEGORIES.map((category) => (
        <section key={category}>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {category}
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
        These guides are general explanatory material and not professional
        advice. Rates quoted come from the tariff dataset used by the
        calculator; where they differ from the APERC tariff order or your
        official bill, the official document is correct. See our{' '}
        <Link
          to="/disclaimer"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}

export default GuidesIndex;
