import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import JsonLd from '../components/content/JsonLd';
import PageHeader from '../components/content/PageHeader';
import {
  AgricultureTariff,
  CommercialTariff,
  DomesticTariff,
  IndustryTariff,
  OtherChargesTariff,
  OthersTariff,
} from '../components/tariff/TariffPanels';
import { TARIFF_YEAR } from '../constants';
import { CONTENT_UPDATED, TARIFF_EFFECTIVE_DATE } from '../constants/site';
import { formatLongDate } from '../utils';
import { breadcrumbJsonLd } from '../utils/jsonLd';
import { useI18n } from '../context/AppContext';

function SummaryTable() {
  const { t } = useI18n();

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead className="bg-slate-50">
          <tr>
            {[
              t('tariff.h.category'),
              t('tariff.h.monthlyUnits'),
              t('tariff.h.energyRate'),
              t('tariff.h.fixedCharge'),
              t('pages.tariff.notes'),
            ].map((header) => (
              <th
                key={header}
                className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u0'),
              '₹1.90/kWh',
              '₹10/kW/month',
              t('pages.tariff.noteTele'),
            ],
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u31'),
              '₹3.00/kWh',
              '₹10/kW/month',
              t('pages.tariff.noteTele'),
            ],
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u76'),
              '₹4.50/kWh',
              '₹10/kW/month',
              t('pages.tariff.noteTele'),
            ],
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u126'),
              '₹6.00/kWh',
              '₹10/kW/month',
              t('pages.tariff.noteTele'),
            ],
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u226'),
              '₹8.75/kWh',
              '₹10/kW/month',
              t('pages.tariff.noteTele'),
            ],
            [
              'Cat-I(A) Domestic',
              t('tariff.domestic.u400'),
              '₹9.75/kWh',
              '₹10/kW/month*',
              t('pages.tariff.noteHighLoad'),
            ],
            [
              'Cat-II(A)(i) Commercial',
              t('tariff.commercial.u0'),
              '₹5.40/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteMin'),
            ],
            [
              'Cat-II(A)(i) Commercial',
              t('tariff.commercial.u51'),
              '₹7.65/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteMin'),
            ],
            [
              'Cat-II(A)(i) Commercial',
              t('tariff.commercial.u101'),
              '₹9.05/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteMin'),
            ],
            [
              'Cat-II(A)(i) Commercial',
              t('tariff.commercial.u301'),
              '₹9.60/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteMin'),
            ],
            [
              'Cat-II(A)(i) Commercial',
              t('tariff.commercial.u500'),
              '₹9.95/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteMin'),
            ],
            [
              'Cat-III(A) Industry ≤15kW',
              t('pages.tariff.allUnits'),
              '₹6.70/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteFlat'),
            ],
            [
              'Cat-IV(A) Utilities',
              t('pages.tariff.allUnits'),
              '₹7.00/kWh',
              '₹75/kW/month',
              t('pages.tariff.noteInst'),
            ],
            [
              t('tariff.agri.nonCorp'),
              t('tariff.agri.freeQuota'),
              t('tariff.agri.urbanExcess'),
              t('tariff.agri.nilFixed'),
              t('pages.tariff.noteAgri'),
            ],
          ].map((row) => (
            <tr
              key={`${row[0]}-${row[1]}`}
              className="border-b border-slate-100 last:border-0"
            >
              {row.map((cell) => (
                <td
                  key={cell}
                  className="px-3.5 py-2.5 align-top text-slate-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TariffRates() {
  const { t, locale } = useI18n();
  const path = '/ap-electricity-bill-tariff';

  return (
    <div className="space-y-10">
      <Seo path={path} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t('common.home'), path: '/' },
          { name: t('nav.tariff'), path },
        ])}
      />

      <PageHeader
        breadcrumbs={[
          { label: t('common.home'), path: '/' },
          { label: t('nav.tariff'), path },
        ]}
        eyebrow={t('pages.tariff.eyebrow')}
        title={t('pages.tariff.title', { year: TARIFF_YEAR })}
        lead={t('pages.tariff.lead', {
          year: TARIFF_YEAR,
          date: TARIFF_EFFECTIVE_DATE,
        })}
        meta={t('pages.tariff.meta', {
          updated: formatLongDate(CONTENT_UPDATED, locale),
          date: TARIFF_EFFECTIVE_DATE,
        })}
      />

      <article className="max-w-4xl space-y-4 text-[15px] leading-relaxed text-slate-600">
        <p>{t('pages.tariff.intro')}</p>
        <p>
          {t('pages.tariff.sourceLine')}{' '}
          <a
            href="https://aperc.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            aperc.gov.in
          </a>
          .
        </p>
      </article>

      <section>
        <h2 className="font-display mb-4 text-2xl font-bold tracking-tight text-slate-900">
          {t('pages.tariff.summaryTitle')}
        </h2>
        <SummaryTable />
        <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
          {t('pages.tariff.effective', { date: TARIFF_EFFECTIVE_DATE })}
        </p>
      </section>

      <div className="space-y-6">
        <DomesticTariff />
        <CommercialTariff />
        <IndustryTariff />
        <AgricultureTariff />
        <OthersTariff />
        <OtherChargesTariff />
      </div>

      <p className="text-[15px] leading-relaxed text-slate-600">
        <Link
          to="/ap-domestic-electricity-bill-calculator"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          {t('home.linkDomestic')}
        </Link>
        {' · '}
        <Link
          to="/ap-commercial-electricity-bill-calculator"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          {t('home.linkCommercial')}
        </Link>
        {' · '}
        <Link
          to="/"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          {t('home.linkAllCategories')}
        </Link>
      </p>
    </div>
  );
}

export default TariffRates;
