import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import { DISCOM_PROFILES } from '../constants/discomProfiles';
import { DISCOMS } from '../constants/discoms';
import { TARIFF_YEAR } from '../constants';
import { itemListJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';

function DiscomCard({ profile }) {
  const { t } = useI18n();
  const operational = DISCOMS.find((item) => item.id === profile.id);

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
        {t(`discom.tagline.${profile.id}`)}
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
        {t(`discom.region.${profile.id}`)}
        {operational
          ? ` ${t('common.districtsCount', { count: operational.districts.length })}`
          : '.'}
      </p>
      <Link
        to={`/discoms/${profile.slug}`}
        className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-800"
      >
        {t('common.details', { acronym: profile.acronym })}
      </Link>
    </article>
  );
}

function DiscomIndex() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <Seo path="/discoms" />
      <JsonLd
        data={itemListJsonLd(
          DISCOM_PROFILES.map((profile) => ({
            name: `${profile.acronym} — ${profile.name}`,
            path: `/discoms/${profile.slug}`,
          }))
        )}
      />

      <PageHeader
        eyebrow={t('discom.eyebrow')}
        title={t('discom.indexTitle')}
        lead={t('discom.indexLead')}
      />

      <section className="max-w-3xl rounded-xl border border-amber-200 bg-amber-50/70 px-6 py-5">
        <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-amber-800">
          {t('discom.sameRates')}
        </p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-amber-900">
          {t('discom.tariffNote')}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {DISCOM_PROFILES.map((profile) => (
          <DiscomCard key={profile.id} profile={profile} />
        ))}
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('discom.historyTitle')}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
          {t('discom.historyP1')}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('discom.historyP2')}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('discom.historyP3')}
        </p>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('discom.differsTitle')}
        </h2>
        <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          <li>{t('discom.differ1')}</li>
          <li>{t('discom.differ2')}</li>
          <li>{t('discom.differ3')}</li>
          <li>{t('discom.differ4')}</li>
          <li>{t('discom.differ5')}</li>
        </ul>
      </section>

      <section className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-6 py-5 text-[15px] leading-relaxed text-slate-600">
        <p>
          {t('discom.notSure', { year: TARIFF_YEAR })}{' '}
          <Link
            to="/pay"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('discom.payBillPage')}
          </Link>
          {' · '}
          <Link
            to="/"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            {t('discom.calculator')}
          </Link>
        </p>
      </section>
    </div>
  );
}

export default DiscomIndex;
