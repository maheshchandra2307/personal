import { useMemo, useState } from 'react';
import { DISCOMS } from '../../constants/discoms';
import { cn } from '../../utils';

const themeAccent = {
  southern: 'border-blue-200 bg-blue-50 text-blue-800',
  central: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  eastern: 'border-red-200 bg-red-50 text-red-800',
};

export default function DistrictFinder() {
  const [query, setQuery] = useState('');

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return DISCOMS.flatMap((discom) =>
      discom.districts
        .filter((district) => district.toLowerCase().includes(q))
        .map((district) => ({ district, discom }))
    ).slice(0, 8);
  }, [query]);

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-display text-base font-semibold text-slate-900">
        Find your DISCOM by district
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        Type your district name to see which company handles your area.
      </p>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. Guntur, Tirupati, Visakhapatnam"
        className="mt-3 w-full rounded-[10px] border border-slate-200 px-3.5 py-3 text-sm outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)]"
      />

      {query && matches.length === 0 ? (
        <p className="mt-3 text-sm text-slate-500">
          No district match found. Try a shorter name, or check the district
          tags on the cards below.
        </p>
      ) : null}

      {matches.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {matches.map(({ district, discom }) => (
            <li key={`${discom.id}-${district}`}>
              <a
                href={discom.payUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex flex-wrap items-center justify-between gap-2 rounded-[10px] border px-3.5 py-3 text-sm font-medium transition hover:brightness-95',
                  themeAccent[discom.theme]
                )}
              >
                <span>
                  {district} → <strong>{discom.acronym}</strong>
                </span>
                <span className="text-xs opacity-80">Open pay page →</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
