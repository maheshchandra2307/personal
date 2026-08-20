import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import { DISCOM_PROFILES, DISCOM_COMMON } from '../constants/discomProfiles';
import { DISCOMS } from '../constants/discoms';
import { TARIFF_YEAR } from '../constants';

function DiscomCard({ profile }) {
  const operational = DISCOMS.find((item) => item.id === profile.id);

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
        {profile.tagline}
      </p>
      <h3 className="font-display mt-2 text-lg font-semibold text-slate-900">
        <Link to={`/discoms/${profile.slug}`} className="hover:underline">
          {profile.acronym}
        </Link>
      </h3>
      <p className="mt-1 text-[13px] leading-snug text-slate-500">
        {profile.name}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {profile.region}
        {operational
          ? `. ${operational.districts.length} districts in the licence area.`
          : '.'}
      </p>
      <Link
        to={`/discoms/${profile.slug}`}
        className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800"
      >
        {profile.acronym} details →
      </Link>
    </article>
  );
}

function DiscomIndex() {
  return (
    <div className="space-y-10">
      <Seo path="/discoms" />

      <PageHeader
        eyebrow="Distribution companies"
        title="Andhra Pradesh electricity DISCOMs"
        lead="Electricity in Andhra Pradesh is distributed by three state-owned companies, each licensed for a defined territory. Which one bills you depends only on where your connection is — and, because tariffs are set state-wide by the regulator, it does not change what you pay."
      />

      <section className="max-w-3xl rounded-xl border border-amber-200 bg-amber-50/70 px-6 py-5">
        <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-amber-800">
          The same rates everywhere
        </p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-amber-900">
          {DISCOM_COMMON.tariffNote}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {DISCOM_PROFILES.map((profile) => (
          <DiscomCard key={profile.id} profile={profile} />
        ))}
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          How the three came about
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
          Until the late 1990s, generation, transmission and distribution across
          the undivided state were handled by a single State Electricity Board.
          Reform legislation unbundled that structure, separating transmission
          into APTRANSCO and distribution into independent companies with
          defined licence areas — initially APEPDCL in the east and APSPDCL
          covering the south and centre, alongside utilities that went to
          Telangana on bifurcation.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          The most recent change came in 2020, when the central districts around
          Vijayawada and Guntur were carved out of APSPDCL to form APCPDCL. That
          left the present arrangement of three distribution companies: eastern,
          central and southern.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          Each is a licensee regulated by the Andhra Pradesh Electricity
          Regulatory Commission, which determines the retail tariffs they may
          charge, specifies standards of performance they must meet, and hears
          certain categories of consumer grievance. A DISCOM administers your
          connection; it does not set your rate.
        </p>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          What actually differs between them
        </h2>
        <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          <li>
            The office you deal with — your section, ERO and division are all
            within your own DISCOM, and are named on your bill.
          </li>
          <li>
            The portal you pay on, and which payment channels it offers. Each
            DISCOM runs its own site and gateway arrangements.
          </li>
          <li>
            The local network you are connected to, and therefore your practical
            experience of reliability, voltage quality and restoration times.
          </li>
          <li>
            The mix of consumers around you, which shapes local load patterns —
            heavy industry in the Visakhapatnam belt, irrigation demand across
            Rayalaseema, dense urban load in the Vijayawada corridor.
          </li>
          <li>
            Service processes for new connections, load changes and name
            transfers, which follow the same regulations but are administered
            separately.
          </li>
        </ul>
      </section>

      <section className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-[15px] leading-relaxed text-slate-600">
        <p>
          Not sure which DISCOM serves you? The{' '}
          <Link
            to="/pay"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            Pay Bill page
          </Link>{' '}
          lets you find your district and opens the correct official payment
          site. To estimate what a bill should come to under the {TARIFF_YEAR}{' '}
          schedule, use the{' '}
          <Link
            to="/"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            calculator
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

export default DiscomIndex;
