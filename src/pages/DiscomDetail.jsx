import { Link, useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import Button from '../components/ui/Button';
import NotFound from './NotFound';
import {
  DISCOM_COMMON,
  DISCOM_PROFILES,
  getDiscomProfileBySlug,
} from '../constants/discomProfiles';
import { DISCOMS } from '../constants/discoms';
import { TARIFF_YEAR } from '../constants';

function DiscomDetail() {
  const { slug } = useParams();
  const profile = getDiscomProfileBySlug(slug);

  if (!profile) {
    return <NotFound />;
  }

  const operational = DISCOMS.find((item) => item.id === profile.id);
  const others = DISCOM_PROFILES.filter((item) => item.id !== profile.id);

  return (
    <div className="space-y-10">
      <Seo path={`/discoms/${profile.slug}`} />

      <PageHeader
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'DISCOMs', path: '/discoms' },
          { label: profile.acronym, path: `/discoms/${profile.slug}` },
        ]}
        eyebrow={profile.tagline}
        title={`${profile.acronym} — ${profile.name}`}
        lead={profile.overview[0]}
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profile.notable.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {item.label}
            </p>
            <p className="mt-1.5 text-[14px] font-medium leading-snug text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          About {profile.acronym}
        </h2>
        {profile.overview.slice(1).map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="mt-4 text-[15px] leading-relaxed text-slate-600"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {operational?.districts?.length ? (
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Districts served
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {profile.acronym} is the licensed distribution company for the
            following districts. District boundaries in Andhra Pradesh were
            reorganised in 2022, so an older bill may name a predecessor
            district.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {operational.districts.map((district) => (
              <li
                key={district}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-medium text-slate-700"
              >
                {district}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          Which tariff applies
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
          {DISCOM_COMMON.tariffNote}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          So a {profile.acronym} consumer is billed under the APERC{' '}
          {TARIFF_YEAR} low-tension schedule: telescopic energy slabs for
          domestic and commercial supply, flat rates for most industrial and
          institutional categories, a fixed charge based on sanctioned load, and
          a customer charge that steps up with consumption. The calculator on
          this site implements that schedule, and the reference tabs show the
          rate tables it applies.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/">
            <Button>Estimate a bill</Button>
          </Link>
          <Link to="/guides/how-ap-electricity-bills-are-calculated">
            <Button variant="outline">How bills are calculated</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          Paying a {profile.acronym} bill
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          Payment happens on {profile.acronym}&apos;s own portal. This site
          links to it and nothing more — we never collect payments or see your
          account.
        </p>
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          {DISCOM_COMMON.paymentSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        {operational?.payUrl ? (
          <a
            href={operational.payUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0a3d62] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d4d7a]"
          >
            {operational.payLabel}
            <FaExternalLinkAlt size={11} />
          </a>
        ) : null}
        {operational?.redirectNote ? (
          <p className="mt-2 text-[12px] text-slate-400">
            {operational.redirectNote}
          </p>
        ) : null}

        <div className="mt-6 rounded-xl border border-red-200 bg-red-50/70 px-5 py-4">
          <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-red-800">
            Watch out for payment fraud
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-red-900">
            {DISCOM_COMMON.safetyNote}
          </p>
        </div>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          Complaints and escalation
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          For anything about your own connection — a wrong bill, a faulty meter,
          a supply failure, a category correction — {profile.acronym} is the
          only body that can act. There is a defined escalation path.
        </p>
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          {DISCOM_COMMON.complaintSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {operational?.helpline ? (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-700">
            <span className="font-semibold">{profile.acronym} helpline: </span>
            {operational.helpline}
          </p>
        ) : null}
      </section>

      <section className="max-w-3xl border-t border-slate-200 pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
          The other AP distribution companies
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {others.map((item) => (
            <li key={item.id}>
              <Link
                to={`/discoms/${item.slug}`}
                className="group block rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-blue-300"
              >
                <span className="font-display block text-[15px] font-semibold text-slate-900 group-hover:text-blue-700">
                  {item.acronym}
                </span>
                <span className="mt-1 block text-[13px] leading-relaxed text-slate-500">
                  {item.tagline}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="max-w-3xl text-[13px] leading-relaxed text-slate-500">
        This is an independent reference page. It is not operated by or
        affiliated with {profile.acronym}, APERC, or the Government of Andhra
        Pradesh — see our{' '}
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

export default DiscomDetail;
