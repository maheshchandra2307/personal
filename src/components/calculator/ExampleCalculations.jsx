import { useMemo } from 'react';
import { tariffs } from '../../constants/tariffs';
import { calculateBill, formatMoney } from '../../utils/billCalculator';
import { useI18n } from '../../context/AppContext';

function ExampleCalculations({
  category,
  unitsList,
  load = 1,
  phase = '1',
  note,
}) {
  const { t } = useI18n();
  const conf = tariffs[category];

  const rows = useMemo(
    () =>
      unitsList.map((units) => {
        const bill = calculateBill({
          conf,
          category,
          load,
          units,
          phase,
        });
        return { units, bill };
      }),
    [category, conf, load, phase, unitsList]
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead className="bg-slate-50">
          <tr>
            <th className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {t('examples.units')}
            </th>
            <th className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {t('examples.energy')}
            </th>
            <th className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {t('examples.fixed')}
            </th>
            <th className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {t('examples.customer')}
            </th>
            <th className="border-b border-slate-200 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {t('examples.total')}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.units}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="px-3.5 py-2.5 font-medium text-slate-800">
                {row.units} {t('calc.unitsWord')}
              </td>
              <td className="px-3.5 py-2.5 text-slate-600">
                ₹{formatMoney(row.bill.energy)}
              </td>
              <td className="px-3.5 py-2.5 text-slate-600">
                ₹{formatMoney(row.bill.fixed)}
                {row.bill.extras ? ` + ₹${formatMoney(row.bill.extras)}` : ''}
              </td>
              <td className="px-3.5 py-2.5 text-slate-600">
                ₹{formatMoney(row.bill.customer)}
              </td>
              <td className="px-3.5 py-2.5 font-semibold text-slate-900">
                ₹{formatMoney(row.bill.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {note ? (
        <p className="border-t border-slate-100 px-3.5 py-2.5 text-[12px] leading-relaxed text-slate-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}

export default ExampleCalculations;
