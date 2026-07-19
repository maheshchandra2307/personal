import { useEffect, useMemo, useState } from 'react';
import {
  CATEGORY_OPTIONS,
  HIDE_LOAD_CATEGORIES,
  tariffs,
} from '../../constants/tariffs';
import {
  buildSlabPreviewRows,
  calculateBill,
  formatMoney,
} from '../../utils/billCalculator';
import { cn } from '../../utils';

const STORAGE_KEY = 'ap-electricity-bill-calculator-v1';

const inputClass =
  'w-full rounded-[10px] border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)]';

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function FormLabel({ children, required = false, tip }) {
  return (
    <div className="mb-2 flex items-center">
      <label className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-600">
        {children}
        {required ? <span className="text-amber-600"> *</span> : null}
      </label>
      {tip ? (
        <span className="group relative ml-1.5 inline-flex h-4 w-4 cursor-help items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-[10px] text-slate-400">
          ?
          <span className="pointer-events-none absolute bottom-[110%] left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-[11px] normal-case tracking-normal text-slate-100 shadow-lg group-hover:block">
            {tip}
          </span>
        </span>
      ) : null}
    </div>
  );
}

function UnitInput({
  id,
  value,
  onChange,
  min,
  step,
  placeholder,
  unit,
  disabled = false,
}) {
  return (
    <div
      className={cn(
        'flex items-center overflow-hidden rounded-[10px] border border-slate-200 bg-white transition focus-within:border-blue-600 focus-within:shadow-[0_0_0_3px_rgba(37,99,235,0.12)]',
        disabled && 'opacity-60'
      )}
    >
      <input
        id={id}
        type="number"
        min={min}
        step={step}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border-0 bg-transparent px-3.5 py-3 text-sm outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
      />
      <span className="whitespace-nowrap border-l border-slate-200 bg-slate-100 px-3.5 py-3 text-[12px] font-semibold text-slate-400">
        {unit}
      </span>
    </div>
  );
}

function SlabPreview({ slabs, units }) {
  const { rows, totalEnergy } = useMemo(
    () => buildSlabPreviewRows(units, slabs),
    [slabs, units]
  );

  return (
    <div className="mb-[18px]">
      <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-600">
        Applicable Slabs
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr>
              {['Slab', 'Rate (₹/kWh)', 'Range', 'Slab Cost'].map((h) => (
                <th
                  key={h}
                  className="border-b border-slate-200 px-2.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.key}
                className={cn(
                  'border-b border-slate-100',
                  row.active && 'bg-amber-50/70'
                )}
              >
                <td
                  className={cn(
                    'px-2.5 py-2.5 text-slate-600',
                    row.active &&
                      'border-l-2 border-amber-600 pl-2 text-slate-900'
                  )}
                >
                  {row.name}
                </td>
                <td className="px-2.5 py-2.5 font-semibold text-emerald-600">
                  ₹{row.rate.toFixed(2)}
                </td>
                <td className="px-2.5 py-2.5 text-slate-900">
                  {row.rangeText}
                </td>
                <td className="px-2.5 py-2.5 font-semibold text-emerald-600">
                  {row.take > 0
                    ? `₹${formatMoney(row.cost)} (${row.take.toFixed(0)} u)`
                    : '₹0.00'}
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={3}
                className="px-2.5 py-2.5 text-right font-bold text-slate-900"
              >
                Total Energy Charges
              </td>
              <td className="px-2.5 py-2.5 font-bold text-emerald-600">
                ₹{formatMoney(totalEnergy)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ResultPanel({ result, hasCalculated, onCopy, copyStatus }) {
  if (!hasCalculated || !result) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="px-6 py-12 text-center text-slate-500">
          <div className="mb-3 text-4xl opacity-30">⚡</div>
          <p className="text-sm leading-relaxed">
            Select a category, enter your usage, and tap{' '}
            <strong className="text-amber-600">Calculate</strong> to see a full
            bill breakdown.
          </p>
        </div>
      </div>
    );
  }

  const maxCost = Math.max(...result.parts.map((p) => p.cost), 1);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="p-6">
        <div className="mb-4 rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-800">
            Estimated Monthly Bill
          </div>
          <div className="font-display text-5xl font-bold leading-none text-amber-600">
            <sup className="text-[22px] align-super">₹</sup>
            {formatMoney(result.total)}
          </div>
          <div className="mt-1 text-[12px] text-amber-900/80">
            {result.caption}
          </div>
          <button
            type="button"
            onClick={onCopy}
            className="mt-4 rounded-lg border border-amber-300/50 bg-white/70 px-3 py-1.5 text-[12px] font-semibold text-amber-800 transition hover:bg-white"
          >
            {copyStatus || 'Copy estimate summary'}
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-[10px] border border-slate-200 bg-slate-50 p-3.5 text-center">
            <div className="font-display text-xl font-bold text-slate-900">
              {result.units.toFixed(0)}
            </div>
            <div className="text-[11px] font-medium text-slate-400">Units</div>
          </div>
          <div className="rounded-[10px] border border-amber-300/40 bg-amber-50 p-3.5 text-center">
            <div className="font-display text-xl font-bold text-amber-600">
              ₹{formatMoney(result.avgRate)}
            </div>
            <div className="text-[11px] font-medium text-slate-400">
              Avg / Unit
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {[
            ['Energy charges', result.energy, ''],
            ['Fixed charges', result.fixed, ''],
            ['Customer charges', result.customer, ''],
            ['Other / minimum / urgency', result.extras, 'orange'],
            ['Indicative subsidy value', result.subsidy, 'green'],
          ].map(([label, value, tone]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-slate-200 py-2.5 text-[13px] last:border-b-0"
            >
              <span className="text-slate-600">{label}</span>
              <span
                className={cn(
                  'font-semibold text-slate-900',
                  tone === 'orange' && 'text-amber-600',
                  tone === 'green' && 'text-emerald-600'
                )}
              >
                ₹{formatMoney(value)}
              </span>
            </div>
          ))}
          <div className="mt-3 flex items-center justify-between rounded-[10px] border border-amber-300/30 bg-orange-50 px-3.5 py-3.5 text-sm font-semibold">
            <span>Total payable</span>
            <span className="font-display text-lg text-amber-600">
              ₹{formatMoney(result.total)}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-400">
            Slab-wise Energy Cost
          </div>
          <div className="space-y-2">
            {result.parts.map((part) => (
              <div
                key={part.label}
                className="flex items-center gap-2.5 text-[12px]"
              >
                <div className="w-20 shrink-0 text-[11px] text-slate-400">
                  {part.label}
                </div>
                <div className="h-1.5 flex-1 overflow-hidden rounded-sm bg-slate-200">
                  <div
                    className="h-full rounded-sm bg-gradient-to-r from-blue-600 to-amber-600 transition-all duration-500"
                    style={{ width: `${(part.cost / maxCost) * 100}%` }}
                  />
                </div>
                <div className="min-w-16 text-right text-[11px] text-slate-600">
                  ₹{formatMoney(part.cost)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BillCalculator() {
  const [category, setCategory] = useState(
    () => loadSavedState()?.category || ''
  );
  const [load, setLoad] = useState(() => loadSavedState()?.load ?? 1);
  const [units, setUnits] = useState(() => loadSavedState()?.units ?? 100);
  const [unitsMode, setUnitsMode] = useState(
    () => loadSavedState()?.unitsMode || 'units'
  );
  const [readingFrom, setReadingFrom] = useState(
    () => loadSavedState()?.readingFrom ?? 0
  );
  const [readingTo, setReadingTo] = useState(
    () => loadSavedState()?.readingTo ?? 100
  );
  const [phase, setPhase] = useState(() => loadSavedState()?.phase || '1');
  const [dsm, setDsm] = useState(() => loadSavedState()?.dsm ?? true);
  const [urban, setUrban] = useState(() => loadSavedState()?.urban ?? true);
  const [todPeak, setTodPeak] = useState(() => loadSavedState()?.todPeak ?? 20);
  const [todOffpeak, setTodOffpeak] = useState(
    () => loadSavedState()?.todOffpeak ?? 20
  );
  const [result, setResult] = useState(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        category,
        load,
        units,
        unitsMode,
        readingFrom,
        readingTo,
        phase,
        dsm,
        urban,
        todPeak,
        todOffpeak,
      })
    );
  }, [
    category,
    load,
    units,
    unitsMode,
    readingFrom,
    readingTo,
    phase,
    dsm,
    urban,
    todPeak,
    todOffpeak,
  ]);

  const conf = category ? tariffs[category] : null;
  const loadUnit = conf?.loadUnit || 'kW';
  const hideLoad = HIDE_LOAD_CATEGORIES.includes(category);
  const showSlabPreview = conf?.type === 'slab';

  function handleCategoryChange(value) {
    setCategory(value);
    setHasCalculated(false);
    setResult(null);
    setError('');

    const next = tariffs[value];
    if (!next) return;

    if (next.loadUnit === 'HP') {
      setLoad(5);
    } else if (load < 1) {
      setLoad(1);
    }
  }

  function handleUnitsModeChange(mode) {
    setUnitsMode(mode);
    if (mode === 'reading') {
      const nextUnits = Math.max(0, readingTo - readingFrom);
      setUnits(nextUnits);
    }
  }

  function handleReadingChange(from, to) {
    setReadingFrom(from);
    setReadingTo(to);
    setUnits(Math.max(0, to - from));
  }

  function handleCalculate() {
    if (!category || !conf) {
      setError('Please select a consumer category.');
      return;
    }

    setError('');
    const bill = calculateBill({
      conf,
      category,
      load: Number(load) || 0,
      units: Number(units) || 0,
      phase,
      dsm,
      urban,
      todPeak,
      todOffpeak,
    });

    setResult(bill);
    setHasCalculated(true);
    setCopyStatus('');
  }

  async function handleCopyEstimate() {
    if (!result) return;

    const summary = [
      'AP Electricity Bill Calculator – Estimated Bill',
      `Units: ${result.units}`,
      `Energy: ₹${formatMoney(result.energy)}`,
      `Fixed: ₹${formatMoney(result.fixed)}`,
      `Customer: ₹${formatMoney(result.customer)}`,
      `Other: ₹${formatMoney(result.extras)}`,
      `Total: ₹${formatMoney(result.total)}`,
      'Unofficial estimate only.',
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Copied!');
    } catch {
      setCopyStatus('Copy failed');
    }
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_380px]">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center gap-2.5 border-b border-slate-200 px-6 py-5">
          <span>🧮</span>
          <h2 className="font-display text-[15px] font-semibold text-slate-900">
            Bill Calculator
          </h2>
        </div>

        <div className="p-6">
          <div className="mb-[18px] rounded-[10px] border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-[12px] leading-relaxed text-blue-700">
            <strong className="text-blue-800">Telescopic billing:</strong> For
            Domestic and Commercial slab categories, each slab rate applies only
            to units within that range.
          </div>

          <div className="mb-[18px]">
            <FormLabel required>Consumer Category</FormLabel>
            <div className="relative">
              <select
                className={cn(inputClass, 'appearance-none pr-10')}
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="">— Select your category —</option>
                {CATEGORY_OPTIONS.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400">
                ▾
              </span>
            </div>
          </div>

          {conf?.type === 'tod' ? (
            <div className="space-y-[18px]">
              <div>
                <FormLabel>Peak usage share</FormLabel>
                <UnitInput
                  value={todPeak}
                  min={0}
                  step={1}
                  unit="%"
                  onChange={(e) => setTodPeak(Number(e.target.value) || 0)}
                />
              </div>
              <div>
                <FormLabel>Off-peak usage share</FormLabel>
                <UnitInput
                  value={todOffpeak}
                  min={0}
                  step={1}
                  unit="%"
                  onChange={(e) => setTodOffpeak(Number(e.target.value) || 0)}
                />
              </div>
              <div className="rounded-[10px] border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-[12px] text-blue-700">
                Remaining units are treated as normal-hour consumption.
              </div>
            </div>
          ) : null}

          {category === 'com' ? (
            <div className="mb-[18px] mt-[18px]">
              <FormLabel>Supply Phase</FormLabel>
              <div className="relative">
                <select
                  className={cn(inputClass, 'appearance-none pr-10')}
                  value={phase}
                  onChange={(e) => setPhase(e.target.value)}
                >
                  <option value="1">Single Phase</option>
                  <option value="3">Three Phase</option>
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400">
                  ▾
                </span>
              </div>
            </div>
          ) : null}

          {category === 'agri_corp' ? (
            <div className="mb-[18px] mt-[18px]">
              <FormLabel>DSM compliance</FormLabel>
              <div className="relative">
                <select
                  className={cn(inputClass, 'appearance-none pr-10')}
                  value={dsm ? 'yes' : 'no'}
                  onChange={(e) => setDsm(e.target.value === 'yes')}
                >
                  <option value="yes">With DSM</option>
                  <option value="no">Without DSM</option>
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400">
                  ▾
                </span>
              </div>
            </div>
          ) : null}

          {category === 'agri_free' || category === 'lift' ? (
            <div className="mt-[18px] space-y-3">
              <div>
                <FormLabel>Location</FormLabel>
                <div className="relative">
                  <select
                    className={cn(inputClass, 'appearance-none pr-10')}
                    value={urban ? 'urban' : 'rural'}
                    onChange={(e) => setUrban(e.target.value === 'urban')}
                  >
                    <option value="urban">Urban</option>
                    <option value="rural">Rural</option>
                  </select>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400">
                    ▾
                  </span>
                </div>
              </div>
              <div className="rounded-[10px] border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-[12px] leading-relaxed text-blue-700">
                Free quota is evaluated against annual entitlement of 1200 units
                per HP. This estimator approximates the monthly share as annual
                quota divided by 12.
              </div>
            </div>
          ) : null}

          {!hideLoad ? (
            <div className="mb-[18px] mt-[18px]">
              <FormLabel tip="Used to calculate fixed charges. Check your meter or bill for sanctioned load.">
                Contracted Load (kW / HP)
              </FormLabel>
              <UnitInput
                value={load}
                min={0.1}
                step={0.1}
                unit={loadUnit}
                placeholder="e.g. 2"
                onChange={(e) => setLoad(Number(e.target.value) || 0)}
              />
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="range"
                  min={0.1}
                  max={loadUnit === 'HP' ? 100 : 150}
                  step={0.1}
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  className="h-1 flex-1 cursor-pointer appearance-none rounded-sm bg-slate-300 accent-amber-600"
                />
                <span className="min-w-[60px] text-right text-[13px] font-semibold text-amber-600">
                  {load} {loadUnit}
                </span>
              </div>
            </div>
          ) : null}

          <div className="mb-[18px]">
            <FormLabel>Usage Entry Mode</FormLabel>
            <div className="relative">
              <select
                className={cn(inputClass, 'appearance-none pr-10')}
                value={unitsMode}
                onChange={(e) => handleUnitsModeChange(e.target.value)}
              >
                <option value="units">Enter total units directly</option>
                <option value="reading">Enter meter reading from and to</option>
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400">
                ▾
              </span>
            </div>
          </div>

          {unitsMode === 'reading' ? (
            <div className="mb-[18px]">
              <FormLabel>Meter Reading (From / To)</FormLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <UnitInput
                  value={readingFrom}
                  min={0}
                  step={1}
                  unit="From kWh"
                  placeholder="Previous reading"
                  onChange={(e) =>
                    handleReadingChange(Number(e.target.value) || 0, readingTo)
                  }
                />
                <UnitInput
                  value={readingTo}
                  min={0}
                  step={1}
                  unit="To kWh"
                  placeholder="Current reading"
                  onChange={(e) =>
                    handleReadingChange(
                      readingFrom,
                      Number(e.target.value) || 0
                    )
                  }
                />
              </div>
              <div className="mt-2.5 rounded-[10px] border border-blue-200 bg-blue-50 px-3.5 py-2.5 text-[12px] text-blue-700">
                Units will be auto-calculated as <strong>To − From</strong>.
              </div>
            </div>
          ) : (
            <div className="mb-[18px]">
              <FormLabel tip="kWh (kilowatt-hours) consumed as shown on your meter reading.">
                Units Consumed This Month
              </FormLabel>
              <UnitInput
                value={units}
                min={0}
                step={1}
                unit="kWh"
                placeholder="e.g. 150"
                onChange={(e) => setUnits(Number(e.target.value) || 0)}
              />
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={1000}
                  step={1}
                  value={Math.min(units, 1000)}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="h-1 flex-1 cursor-pointer appearance-none rounded-sm bg-slate-300 accent-amber-600"
                />
                <span className="min-w-[60px] text-right text-[13px] font-semibold text-amber-600">
                  {units} units
                </span>
              </div>
            </div>
          )}

          {showSlabPreview ? (
            <SlabPreview slabs={conf.slabs} units={Number(units) || 0} />
          ) : null}

          {error ? (
            <p className="mb-3 rounded-[10px] border border-red-200 bg-red-50 px-3.5 py-2.5 text-[12px] text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="button"
            onClick={handleCalculate}
            className="mt-1 w-full rounded-[10px] bg-gradient-to-br from-amber-600 to-orange-500 px-4 py-3.5 font-display text-[15px] font-bold tracking-wide text-white transition hover:opacity-90 active:scale-[0.99]"
          >
            ⚡ Calculate My Bill
          </button>
        </div>
      </div>

      <div className="lg:sticky lg:top-24">
        <ResultPanel
          result={result}
          hasCalculated={hasCalculated}
          onCopy={handleCopyEstimate}
          copyStatus={copyStatus}
        />
      </div>
    </div>
  );
}
