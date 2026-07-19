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
  return (
    <TariffCardShell icon="🏠" title="Domestic Tariff – Cat-I(A)">
      <SectionTitle>Telescopic Slab Rates</SectionTitle>
      <RateTable
        headers={[
          'Monthly Units',
          'Fixed Charge',
          'Energy Rate',
          'Customer Charge',
        ]}
        rows={[
          ['0 – 30 units', '₹10/kW/month', '₹1.90/kWh', '₹25/month'],
          ['31 – 75 units', '₹10/kW/month', '₹3.00/kWh', '₹30/month'],
          ['76 – 125 units', '₹10/kW/month', '₹4.50/kWh', '₹45/month'],
          ['126 – 225 units', '₹10/kW/month', '₹6.00/kWh', '₹50/month'],
          ['226 – 400 units', '₹10/kW/month', '₹8.75/kWh', '₹55/month'],
          ['Above 400 units', '₹10/kW/month*', '₹9.75/kWh', '₹55/month'],
        ]}
        note="* Fixed charge ₹75/kW for load above 75kW. Billing is telescopic — each slab rate applies only to units in that range."
      />
    </TariffCardShell>
  );
}

export function CommercialTariff() {
  return (
    <TariffCardShell icon="🏪" title="Commercial Tariff – Cat-II">
      <SectionTitle>Commercial – Cat-II(A)(i)</SectionTitle>
      <RateTable
        headers={['Monthly Units', 'Fixed Charge', 'Energy Rate']}
        rows={[
          ['0 – 50 units', '₹75/kW/month', '₹5.40/kWh'],
          ['51 – 100 units', '₹75/kW/month', '₹7.65/kWh'],
          ['101 – 300 units', '₹75/kW/month', '₹9.05/kWh'],
          ['301 – 500 units', '₹75/kW/month', '₹9.60/kWh'],
          ['Above 500 units', '₹75/kW/month', '₹9.95/kWh'],
        ]}
        note="Min monthly: Single Phase ₹65, Three Phase ₹200. Fixed charge ₹275/kW for load >75kW."
      />

      <SectionTitle>Other Commercial Sub-categories</SectionTitle>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-II(A)(ii)"
          name="Advertising Hoardings"
          rates={[
            { label: '₹100/kW fixed', tone: 'high' },
            { label: '₹9.95/kWh', tone: 'high' },
            { label: 'Min ₹300/month', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(A)(iii)"
          name="Function Halls / Auditoria"
          rates={[
            { label: 'NIL fixed', tone: 'default' },
            { label: '₹9.95/kWh', tone: 'high' },
            { label: 'Min ₹300/month', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(C)"
          name="EV Charging Stations"
          rates={[
            { label: 'NIL fixed', tone: 'free' },
            { label: '₹6.70/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-II(D)"
          name="Green / Renewable Power"
          rates={[
            { label: 'NIL fixed', tone: 'free' },
            { label: '₹9.95/kWh', tone: 'high' },
          ]}
        />
      </div>

      <SectionTitle>Time-of-Day (ToD) – Commercial 10kW+</SectionTitle>
      <RateTable
        headers={['Period', 'Hours', '10–20kW', '>20kW']}
        rows={[
          ['Peak', '18:00–22:00', '+₹0.50/kVAh', '+₹1.00/kVAh'],
          ['Off-Peak', '10:00–15:00', '–₹0.50/kVAh', '–₹1.00/kVAh'],
        ]}
      />
    </TariffCardShell>
  );
}

export function IndustryTariff() {
  return (
    <TariffCardShell icon="🏭" title="Industrial Tariff – Cat-III">
      <SectionTitle>Industry General – Cat-III(A)</SectionTitle>
      <RateTable
        headers={['Load Range', 'Period', 'Fixed', 'Energy Rate']}
        rows={[
          ['≤15kW / 20HP', 'All hours', '₹75/kW', '₹6.70/kWh'],
          ['>15kW – 25kW', 'Normal', '₹75/kW', '₹6.70/kWh'],
          ['>15kW – 25kW', 'Peak (18–22h)', '₹75/kW', '₹7.20/kWh'],
          ['>15kW – 25kW', 'Off-Peak (10–15h)', '₹75/kW', '₹6.20/kWh'],
          ['>25kW – 75kW', 'Normal', '₹75/kW', '₹6.70/kWh'],
          ['>25kW – 75kW', 'Peak (18–22h)', '₹75/kW', '₹7.70/kWh'],
          ['>25kW – 75kW', 'Off-Peak (10–15h)', '₹75/kW', '₹5.70/kWh'],
          ['>75kW – 150kW', 'Normal', '₹275/kW', '₹6.70/kWh'],
          ['>75kW – 150kW', 'Peak (18–22h)', '₹275/kW', '₹7.70/kWh'],
          ['>75kW – 150kW', 'Off-Peak (10–15h)', '₹275/kW', '₹5.70/kWh'],
        ]}
        note="Poultry/dairy/pisciculture farms: ₹5.25/unit; Demand: ₹75/kW"
      />

      <SectionTitle>Other Industrial Categories</SectionTitle>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-III(B)"
          name="Seasonal Industries (Off-Season)"
          rates={[
            { label: '30% load × ₹75/kW fixed', tone: 'default' },
            { label: '₹7.45/kWh', tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-III(D)"
          name="Cottage Industries ≤20HP"
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
  return (
    <TariffCardShell icon="🌾" title="Agriculture Tariff – Cat-V">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-V(A)(i)"
          name="Agriculture – Corporate Farmers"
          rates={[
            { label: '₹3.50/kWh (with DSM)', tone: 'default' },
            { label: '₹4.50/kWh (no DSM)', tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-V(A)(ii)"
          name="Agriculture – Non-Corporate Farmers"
          rates={[
            { label: 'FREE up to 1200 units/HP/year', tone: 'free' },
            { label: '₹6.40/unit (urban, above 1200)', tone: 'high' },
          ]}
        />
        <TariffCard
          category="Cat-V(A)(iii)"
          name="Salt Farming Units ≤15HP"
          rates={[
            { label: 'NIL fixed', tone: 'free' },
            { label: '₹2.50/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(B)"
          name="Aquaculture & Animal Husbandry"
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹3.85/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(D)"
          name="Agro-based Cottage Industries ≤20HP"
          rates={[
            { label: '₹20/kW fixed', tone: 'default' },
            { label: '₹3.75/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-V(E)"
          name="Govt/Private Lift Irrigation"
          rates={[
            { label: 'NIL fixed', tone: 'free' },
            { label: '₹6.40/kVAh', tone: 'default' },
            { label: 'Free up to 1200 units/HP/yr', tone: 'free' },
          ]}
        />
      </div>
    </TariffCardShell>
  );
}

export function OthersTariff() {
  return (
    <TariffCardShell icon="🏛️" title="Institutional & Others – Cat-IV">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <TariffCard
          category="Cat-IV(A)"
          name="Utilities – Street Lighting / CPWS"
          rates={[
            { label: '₹75/kW fixed (>75kW: ₹275/kW)', tone: 'default' },
            { label: '₹7.00/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(B)"
          name="General Purpose – Govt / Charitable"
          rates={[
            { label: '₹75/kW fixed', tone: 'default' },
            { label: '₹7.00/kWh', tone: 'default' },
            { label: 'Min ₹50–150/month', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(C)"
          name="Religious Places – ≤2kW"
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹3.85/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Cat-IV(C)"
          name="Religious Places – >2kW"
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹5.00/kWh', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Temporary"
          name="Temporary Supply – General"
          rates={[
            { label: '₹30/kW fixed', tone: 'default' },
            { label: '₹10.50/kWh', tone: 'high' },
            { label: '+₹200 urgency', tone: 'default' },
          ]}
        />
        <TariffCard
          category="Temporary"
          name="Temporary Supply – Free/Subsidised"
          rates={[
            { label: 'NIL fixed', tone: 'free' },
            { label: '₹3.75/kWh', tone: 'default' },
          ]}
        />
      </div>
    </TariffCardShell>
  );
}

export function OtherChargesTariff() {
  return (
    <TariffCardShell icon="📋" title="Other Charges FY 2026-27">
      <SectionTitle>Delayed Payment Surcharge</SectionTitle>
      <RateTable
        headers={['Category', 'DPS Rate']}
        rows={[
          ['Cat-I(A) Domestic, Cat-III(D) Cottage, Cat-V(D)', '₹25/month'],
          ['Cat-II(A)(i) <50 units, Cat-IV(C) <2kW', '₹25/month'],
          ['All other LT categories', '5 paise per ₹100/day (min ₹150)'],
        ]}
      />

      <SectionTitle>Reconnection Charges</SectionTitle>
      <RateTable
        headers={['Service Type', 'Charge']}
        rows={[
          ['LT Services – Overhead line (any category)', '₹100'],
          ['LT Services – Underground cable', '₹300'],
        ]}
      />

      <SectionTitle>Meter Testing Charges</SectionTitle>
      <RateTable
        headers={['Meter Type', 'Charge']}
        rows={[
          ['AC Single-Phase Energy Meter', '₹200'],
          ['AC Three-Phase Energy Meter', '₹500'],
          ['Trivector Meter', '₹2,500'],
        ]}
      />

      <SectionTitle>Miscellaneous</SectionTitle>
      <RateTable
        headers={['Item', 'Charge']}
        rows={[
          ['Application Registration Fee – Agricultural/Domestic', '₹50'],
          ['Application Registration Fee – Other Categories', '₹100'],
          ['Changing meter (Single Phase, consumer request)', '₹50'],
          ['Changing meter (Three Phase, consumer request)', '₹100'],
          ['Inspection / Supervision charges', '₹100'],
          ['Urgency charge (Temporary supply)', '₹200'],
          ['Resealing – Whole Current Meter', '₹25'],
          ['Resealing – CT Operated / Other Apparatus', '₹100'],
        ]}
      />

      <SectionTitle>Grid Support Charges</SectionTitle>
      <RateTable
        headers={['Plant Type', 'Rate']}
        rows={[
          ['Conventional CPPs (parallel operation)', '₹50/kW/month'],
          [
            'Renewable Energy Plants (incl. waste heat, MSW, cogen)',
            '₹25/kW/month',
          ],
          ['Rooftop Solar (net/gross metering)', '₹15/kW/month'],
          ['Co-gen Sugar Mills', '₹25/kW/month'],
        ]}
      />
    </TariffCardShell>
  );
}
