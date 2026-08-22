import { Link, useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import Button from '../components/ui/Button';
import NotFound from './NotFound';
import {
  DISCOM_PROFILES,
  getDiscomProfileBySlug,
} from '../constants/discomProfiles';
import { DISCOMS } from '../constants/discoms';
import { TARIFF_YEAR } from '../constants';
import { breadcrumbJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';
import ContentLanguageNote from '../components/common/ContentLanguageNote';

function DiscomDetail() {
  const { slug } = useParams();
  const profile = getDiscomProfileBySlug(slug);
  const { t, tList } = useI18n();

  if (!profile) {
    return <NotFound />;
  }

  const operational = DISCOMS.find((item) => item.id === profile.id);
  const others = DISCOM_PROFILES.filter((item) => item.id !== profile.id);

  return (
    <div className="space-y-10">
      <Seo path={`/discoms/${profile.slug}`} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t('common.home'), path: '/' },
          { name: t('nav.discoms'), path: '/discoms' },
          { name: profile.acronym, path: `/discoms/${profile.slug}` },
        ])}
      />

      <PageHeader
        breadcrumbs={[
          { label: t('common.home'), path: '/' },
          { label: t('nav.discoms'), path: '/discoms' },
          { label: profile.acronym, path: `/discoms/${profile.slug}` },
        ]}
        eyebrow={t(`discom.tagline.${profile.id}`)}
        title={`${profile.acronym} — ${profile.name}`}
        lead={profile.overview[0]}
      />

      <ContentLanguageNote />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profile.notable.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {t(`discom.notable.${item.label}`)}
            </p>
            <p className="mt-1.5 text-[14px] font-medium leading-snug text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('discom.aboutAcronym', { acronym: profile.acronym })}
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
            {t('discom.districtsServed')}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {t('discom.districtsLead', { acronym: profile.acronym })}
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
          {t('discom.whichTariff')}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
          {t('discom.tariffNote')}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('discom.tariffP2', {
            acronym: profile.acronym,
            year: TARIFF_YEAR,
          })}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/">
            <Button>{t('discom.estimateBill')}</Button>
          </Link>
          <Link to="/guides/how-ap-electricity-bills-are-calculated">
            <Button variant="outline">{t('discom.howCalculated')}</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('discom.payingBill', { acronym: profile.acronym })}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('discom.payingLead', { acronym: profile.acronym })}
        </p>
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          {tList('discom.paymentSteps').map((step) => (
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
            {t('pay.goOfficial', { acronym: profile.acronym })}
            <FaExternalLinkAlt size={11} />
          </a>
        ) : null}
        {operational?.redirectNote ? (
          <p className="mt-2 text-[12px] text-slate-400">
            {t('pay.opensTab', {
              host: new URL(operational.payUrl).hostname,
            })}
          </p>
        ) : null}

        <div className="mt-6 rounded-xl border border-red-200 bg-red-50/70 px-5 py-4">
          <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-red-800">
            {t('discom.fraudTitle')}
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-red-900">
            {t('discom.safetyNote')}
          </p>
        </div>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('discom.complaintsTitle')}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('discom.complaintsLead', { acronym: profile.acronym })}
        </p>
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-[15px] leading-relaxed text-slate-600">
          {tList('discom.complaintSteps').map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {operational?.helpline ? (
          <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-[15px] text-slate-700">
            <span className="font-semibold">
              {t('discom.helplineLabel', { acronym: profile.acronym })}{' '}
            </span>
            {operational.helpline}
          </p>
        ) : null}
      </section>

      <section className="max-w-3xl border-t border-slate-200 pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
          {t('discom.otherCompanies')}
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
                  {t(`discom.tagline.${item.id}`)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="max-w-3xl text-[13px] leading-relaxed text-slate-500">
        {t('discom.independentNote', { acronym: profile.acronym })}
      </p>
    </div>
  );
}

export default DiscomDetail;
