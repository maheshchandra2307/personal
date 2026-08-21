import { useI18n } from '../../context/AppContext';

function SectionTitle({ children }) {
  return (
    <h3 className="mb-2.5 mt-5 flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-wide text-slate-600 first:mt-0 after:ml-2 after:h-px after:flex-1 after:bg-slate-200">
      {children}
    </h3>
  );
}

function RateTable({ headers, rows, note }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-slate-200 px-2.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 last:border-b-0"
              >
                {row.map((cell) => (
                  <td
                    key={`${index}-${cell}`}
                    className="px-2.5 py-2.5 text-slate-600"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-2 text-[11px] text-slate-400">{note}</p> : null}
    </>
  );
}

function TariffCard({ category, name, rates }) {
  return (
    <div className="rounded-[10px] border border-slate-200 bg-slate-50 p-3.5 transition hover:border-slate-400 hover:shadow-sm">
      <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-amber-600">
        {category}
      </div>
      <div className="mb-2 text-[13px] font-semibold leading-snug text-slate-900">
        {name}
      </div>
      <div className="flex flex-wrap gap-2">
        {rates.map((rate) => (
          <span
            key={rate.label}
            className={`rounded-xl border px-2 py-0.5 text-[11px] font-semibold ${
              rate.tone === 'free'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : rate.tone === 'high'
                  ? 'border-amber-200 bg-amber-50 text-amber-700'
                  : 'border-blue-200 bg-blue-50 text-blue-700'
            }`}
          >
            {rate.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function TariffCardShell({ icon, title, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center gap-2.5 border-b border-slate-200 px-6 py-5">
        <span>{icon}</span>
        <h2 className="font-display text-[15px] font-semibold text-slate-900">
          {title}
        </h2>
      </div>
      <div className="px-6 pb-6 pt-4">{children}</div>
    </div>
  );
}

export function DomesticTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="🏠" title={t('tariff.domestic.title')}>
      <SectionTitle>{t('tariff.domestic.slabs')}</SectionTitle>
      <RateTable
        headers={[
          t('tariff.h.monthlyUnits'),
          t('tariff.h.fixedCharge'),
          t('tariff.h.energyRate'),
          t('tariff.h.customerCharge'),
        ]}
        rows={[
          [t('tariff.domestic.u0'), '₹10/kW/month', '₹1.90/kWh', '₹25/month'],
          [t('tariff.domestic.u31'), '₹10/kW/month', '₹3.00/kWh', '₹30/month'],
          [t('tariff.domestic.u76'), '₹10/kW/month', '₹4.50/kWh', '₹45/month'],
          [t('tariff.domestic.u126'), '₹10/kW/month', '₹6.00/kWh', '₹50/month'],
          [t('tariff.domestic.u226'), '₹10/kW/month', '₹8.75/kWh', '₹55/month'],
          [
            t('tariff.domestic.u400'),
            '₹10/kW/month*',
            '₹9.75/kWh',
            '₹55/month',
          ],
        ]}
        note={t('tariff.domestic.note')}
      />
    </TariffCardShell>
  );
}

export function CommercialTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="🏪" title={t('tariff.commercial.title')}>
      <SectionTitle>{t('tariff.commercial.catA')}</SectionTitle>
      <RateTable
        headers={[
          t('tariff.h.monthlyUnits'),
          t('tariff.h.fixedCharge'),
          t('tariff.h.energyRate'),
        ]}
        rows={[
          [t('tariff.commercial.u0'), '₹75/kW/month', '₹5.40/kWh'],
          [t('tariff.commercial.u51'), '₹75/kW/month', '₹7.65/kWh'],
          [t('tariff.commercial.u101'), '₹75/kW/month', '₹9.05/kWh'],
          [t('tariff.commercial.u301'), '₹75/kW/month', '₹9.60/kWh'],
          [t('tariff.commercial.u500'), '₹75/kW/month', '₹9.95/kWh'],
        ]}
        note={t('tariff.commercial.note')}
      />

      <SectionTitle>{t('tariff.commercial.other')}</SectionTitle>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-II(A)(ii)"
          name={t('tariff.commercial.adv')}
          rates={[
            { label: '₹100/kW fixed', tone: 'high' },
            { label: '₹9.95/kWh', tone: 'high' },
            { label: t('tariff.commercial.minMonth'), tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(A)(iii)"
          name={t('tariff.commercial.fun')}
          rates={[
            { label: t('tariff.commercial.nilFixed'), tone: 'default' },
            { label: '₹9.95/kWh', tone: 'high' },
            { label: t('tariff.commercial.minMonth'), tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(C)"
          name={t('tariff.commercial.ev')}
          rates={[
            { label: t('tariff.commercial.nilFixed'), tone: 'free' },
            { label: '₹6.70/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(D)"
          name={t('tariff.commercial.green')}
          rates={[
            { label: t('tariff.commercial.nilFixed'), tone: 'free' },
            { label: '₹9.95/kWh', tone: 'high' },
          ]}
        />
      </div>

      <SectionTitle>{t('tariff.commercial.tod')}</SectionTitle>
      <RateTable
        headers={[
          t('tariff.h.period'),
          t('tariff.h.hours'),
          '10–20kW',
          '>20kW',
        ]}
        rows={[
          [
            t('tariff.commercial.peak'),
            '18:00–22:00',
            '+₹0.50/kVAh',
            '+₹1.00/kVAh',
          ],
          [
            t('tariff.commercial.offPeak'),
            '10:00–15:00',
            '–₹0.50/kVAh',
            '–₹1.00/kVAh',
          ],
        ]}
      />
    </TariffCardShell>
  );
}

export function IndustryTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="🏭" title={t('tariff.industry.title')}>
      <SectionTitle>{t('tariff.industry.general')}</SectionTitle>
      <RateTable
        headers={[
          t('tariff.h.loadRange'),
          t('tariff.h.period'),
          t('tariff.h.fixed'),
          t('tariff.h.energyRate'),
        ]}
        rows={[
          [
            '≤15kW / 20HP',
            t('tariff.industry.allHours'),
            '₹75/kW',
            '₹6.70/kWh',
          ],
          ['>15kW – 25kW', t('tariff.industry.normal'), '₹75/kW', '₹6.70/kWh'],
          ['>15kW – 25kW', t('tariff.industry.peak'), '₹75/kW', '₹7.20/kWh'],
          ['>15kW – 25kW', t('tariff.industry.offPeak'), '₹75/kW', '₹6.20/kWh'],
          ['>25kW – 75kW', t('tariff.industry.normal'), '₹75/kW', '₹6.70/kWh'],
          ['>25kW – 75kW', t('tariff.industry.peak'), '₹75/kW', '₹7.70/kWh'],
          ['>25kW – 75kW', t('tariff.industry.offPeak'), '₹75/kW', '₹5.70/kWh'],
          [
            '>75kW – 150kW',
            t('tariff.industry.normal'),
            '₹275/kW',
            '₹6.70/kWh',
          ],
          ['>75kW – 150kW', t('tariff.industry.peak'), '₹275/kW', '₹7.70/kWh'],
          [
            '>75kW – 150kW',
            t('tariff.industry.offPeak'),
            '₹275/kW',
            '₹5.70/kWh',
          ],
        ]}
        note={t('tariff.industry.note')}
      />

      <SectionTitle>{t('tariff.industry.other')}</SectionTitle>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-III(B)"
          name={t('tariff.industry.seasonal')}
          rates={[
            { label: '30% load × ₹75/kW fixed', tone: 'default' },
            { label: '₹7.45/kWh', tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-III(D)"
          name={t('tariff.industry.cottage')}
          rates={[
            { label: '₹20/kW (min ₹30)', tone: 'default' },
            { label: '₹3.75/kWh', tone: 'default' },
          ]}
        />
      </div>
    </TariffCardShell>
  );
}

export function AgricultureTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="🌾" title={t('tariff.agri.title')}>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-V(A)(i)"
          name={t('tariff.agri.corp')}
          rates={[
            { label: t('tariff.agri.withDsm'), tone: 'default' },
            { label: t('tariff.agri.noDsm'), tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-V(A)(ii)"
          name={t('tariff.agri.nonCorp')}
          rates={[
            { label: t('tariff.agri.freeQuota'), tone: 'free' },
            { label: t('tariff.agri.urbanExcess'), tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-V(A)(iii)"
          name={t('tariff.agri.salt')}
          rates={[
            { label: t('tariff.agri.nilFixed'), tone: 'free' },
            { label: '₹2.50/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(B)"
          name={t('tariff.agri.aqua')}
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹3.85/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(D)"
          name={t('tariff.agri.agroCot')}
          rates={[
            { label: '₹20/kW fixed', tone: 'default' },
            { label: '₹3.75/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(E)"
          name={t('tariff.agri.lift')}
          rates={[
            { label: t('tariff.agri.nilFixed'), tone: 'free' },
            { label: '₹6.40/kVAh', tone: 'default' },
            { label: t('tariff.agri.freeLift'), tone: 'free' },
          ]}
        />
      </div>
    </TariffCardShell>
  );
}

export function OthersTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="🏛️" title={t('tariff.others.title')}>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-IV(A)"
          name={t('tariff.others.util')}
          rates={[
            { label: '₹75/kW fixed (>75kW: ₹275/kW)', tone: 'default' },
            { label: '₹7.00/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(B)"
          name={t('tariff.others.genp')}
          rates={[
            { label: '₹75/kW fixed', tone: 'default' },
            { label: '₹7.00/kWh', tone: 'default' },
            { label: 'Min ₹50–150/month', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(C)"
          name={t('tariff.others.relLt')}
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹3.85/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(C)"
          name={t('tariff.others.relGt')}
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹5.00/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Temporary"
          name={t('tariff.others.tmpGen')}
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹10.50/kWh', tone: 'high' },
            { label: t('tariff.others.urgency'), tone: 'default' },
          ]}
        />
        <TariffCard
          category="Temporary"
          name={t('tariff.others.tmpSub')}
          rates={[
            { label: t('tariff.agri.nilFixed'), tone: 'free' },
            { label: '₹3.75/kWh', tone: 'default' },
          ]}
        />
      </div>
    </TariffCardShell>
  );
}

export function OtherChargesTariff() {
  const { t } = useI18n();

  return (
    <TariffCardShell icon="📋" title={t('tariff.charges.title')}>
      <SectionTitle>{t('tariff.charges.dps')}</SectionTitle>
      <RateTable
        headers={[t('tariff.h.category'), t('tariff.h.dpsRate')]}
        rows={[
          [t('tariff.charges.dpsDom'), '₹25/month'],
          [t('tariff.charges.dpsSmall'), '₹25/month'],
          [t('tariff.charges.dpsOther'), t('tariff.charges.dpsOtherRate')],
        ]}
      />

      <SectionTitle>{t('tariff.charges.recon')}</SectionTitle>
      <RateTable
        headers={[t('tariff.h.serviceType'), t('tariff.h.charge')]}
        rows={[
          [t('tariff.charges.oh'), '₹100'],
          [t('tariff.charges.ug'), '₹300'],
        ]}
      />

      <SectionTitle>{t('tariff.charges.meter')}</SectionTitle>
      <RateTable
        headers={[t('tariff.h.meterType'), t('tariff.h.charge')]}
        rows={[
          [t('tariff.charges.spMeter'), '₹200'],
          [t('tariff.charges.tpMeter'), '₹500'],
          [t('tariff.charges.trivector'), '₹2,500'],
        ]}
      />

      <SectionTitle>{t('tariff.charges.misc')}</SectionTitle>
      <RateTable
        headers={[t('tariff.h.item'), t('tariff.h.charge')]}
        rows={[
          [t('tariff.charges.appAgri'), '₹50'],
          [t('tariff.charges.appOther'), '₹100'],
          [t('tariff.charges.changeSp'), '₹50'],
          [t('tariff.charges.changeTp'), '₹100'],
          [t('tariff.charges.inspect'), '₹100'],
          [t('tariff.charges.urgency'), '₹200'],
          [t('tariff.charges.resealWc'), '₹25'],
          [t('tariff.charges.resealCt'), '₹100'],
        ]}
      />

      <SectionTitle>{t('tariff.charges.grid')}</SectionTitle>
      <RateTable
        headers={[t('tariff.h.plantType'), t('tariff.h.rate')]}
        rows={[
          [t('tariff.charges.convCpp'), '₹50/kW/month'],
          [t('tariff.charges.rePlant'), '₹25/kW/month'],
          [t('tariff.charges.rooftop'), '₹15/kW/month'],
          [t('tariff.charges.cogen'), '₹25/kW/month'],
        ]}
      />
    </TariffCardShell>
  );
}
