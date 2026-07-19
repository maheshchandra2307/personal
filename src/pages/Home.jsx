import { useState } from 'react';
import BillCalculator from '../components/calculator/BillCalculator';
import {
  AgricultureTariff,
  CommercialTariff,
  DomesticTariff,
  IndustryTariff,
  OtherChargesTariff,
  OthersTariff,
} from '../components/tariff/TariffPanels';
import { CALCULATOR_TABS } from '../constants/tariffs';
import { TARIFF_YEAR } from '../constants';
import { cn } from '../utils';

function Home() {
  const [activeTab, setActiveTab] = useState('calc');

  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 px-6 pb-10 pt-14 text-center">
        <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
        <h1 className="font-display relative mx-auto max-w-3xl bg-gradient-to-br from-slate-900 from-30% to-blue-600 bg-clip-text text-[clamp(28px,5vw,48px)] font-bold leading-tight text-transparent">
          Know Your Exact Electricity Bill
        </h1>
        <p className="relative mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
          Official APERC tariff rates for all LT consumer categories in Andhra
          Pradesh, effective 25 March 2026. {TARIFF_YEAR} rates included.
        </p>
      </section>

      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 pt-8 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CALCULATOR_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px] border px-5 py-2.5 text-[13px] font-medium transition',
              activeTab === tab.id
                ? 'border-amber-400/40 bg-gradient-to-br from-amber-50 to-blue-50 text-amber-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            )}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6">
        {activeTab === 'calc' ? <BillCalculator /> : null}
        {activeTab === 'domestic' ? <DomesticTariff /> : null}
        {activeTab === 'commercial' ? <CommercialTariff /> : null}
        {activeTab === 'industry' ? <IndustryTariff /> : null}
        {activeTab === 'agri' ? <AgricultureTariff /> : null}
        {activeTab === 'others' ? <OthersTariff /> : null}
        {activeTab === 'charges' ? <OtherChargesTariff /> : null}
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-[12px] leading-relaxed text-slate-400">
        <strong className="text-slate-600">Disclaimer:</strong> This calculator
        is for estimation based on APERC {TARIFF_YEAR} tariff values shown in
        this app. Actual bills may include utility-specific adjustments, taxes,
        rebates, meter rent, or subsidy conditions.
      </div>
    </div>
  );
}

export default Home;
