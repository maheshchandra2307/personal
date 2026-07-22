/**
 * Converts AP LT tariff Excel (3 sheets) into chat knowledge JSON.
 * Usage: node scripts/convert-tariff-excel.mjs
 */
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const excelPath =
  process.argv[2] ||
  'src/personal/data/AP_LT_Tariff_Rates_FY2026-27 (1).xlsx';
const outPath = 'src/constants/tariffChatKnowledge.json';

const wb = XLSX.readFile(excelPath);
const entries = [];

function clean(v) {
  return String(v ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function addEntry({ sheet, title, body, keys = [] }) {
  const t = clean(title);
  const b = clean(body);
  if (!t && !b) return;
  const text = `${t} ${b}`.toLowerCase();
  const autoKeys = text
    .replace(/[^a-z0-9.\-\/\s()]/gi, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3);
  entries.push({
    sheet,
    title: t || 'Tariff info',
    body: b,
    keys: [
      ...new Set([...keys.map((k) => k.toLowerCase()), ...autoKeys]),
    ].slice(0, 40),
  });
}

{
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['LT Tariff Rates'], {
    header: 1,
    defval: '',
  });
  let currentCategory = '';
  let currentSub = '';
  let currentDesc = '';
  let currentNotes = '';
  const slabs = [];

  function flushSlabs() {
    if (!currentSub || slabs.length === 0) return;
    const slabLines = slabs
      .map(
        (s) =>
          `• ${s.range}: Fixed ${s.fixed || '—'}, Energy ${s.energy || '—'}`
      )
      .join('\n');
    addEntry({
      sheet: 'LT Tariff Rates',
      title: currentSub,
      body: [
        currentDesc && `Applies to: ${currentDesc}`,
        currentNotes && `Notes: ${currentNotes}`,
        'Slabs / rates:',
        slabLines,
        'Source: APERC FY 2026-27 (effective 25 Mar 2026). Estimates may differ from your DISCOM bill.',
      ]
        .filter(Boolean)
        .join('\n'),
      keys: [
        currentCategory,
        currentSub,
        'tariff',
        'rate',
        'slab',
        'energy charge',
        'fixed charge',
      ],
    });
    slabs.length = 0;
  }

  for (let i = 3; i < rows.length; i++) {
    const [col0, col1, col2, col3, col4] = rows[i].map(clean);
    if (!col0 && !col1 && !col2 && !col3) continue;

    if (/^CAT-|^TEMPORARY/i.test(col0) && !col2 && !col3) {
      flushSlabs();
      currentCategory = col0;
      currentSub = '';
      continue;
    }

    if (col0 && /Category|Cat-|Temporary Supply/i.test(col0)) {
      flushSlabs();
      currentSub = col0;
      currentDesc = col1;
      currentNotes = col4;
      if (col2 || col3) {
        addEntry({
          sheet: 'LT Tariff Rates',
          title: col0,
          body: [
            col1 && `Applies to: ${col1}`,
            col2 && `Fixed charges: ${col2}`,
            col3 && `Energy charges: ${col3}`,
            col4 && `Notes: ${col4}`,
            'Source: APERC FY 2026-27.',
          ]
            .filter(Boolean)
            .join('\n'),
          keys: [col0, col1, 'tariff', 'rate'],
        });
        currentSub = '';
      }
      continue;
    }

    if (!col0 && col1 && currentSub) {
      slabs.push({ range: col1, fixed: col2, energy: col3 });
      if (col4) currentNotes = currentNotes || col4;
    }
  }
  flushSlabs();
}

{
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['Billing & Other Charges'], {
    header: 1,
    defval: '',
  });
  let section = '';
  for (let i = 3; i < rows.length; i++) {
    const [col0, col1, col2, col3] = rows[i].map(clean);
    if (!col0 && !col1 && !col2) continue;
    if (/^SECTION|^TIME-OF-DAY/i.test(col0) && !col2) {
      section = col0;
      continue;
    }
    if (!col0) continue;
    const blob = `${section} ${col0} ${col1} ${col2} ${col3}`.toLowerCase();
    const topicKeys = [];
    if (/dps|delayed|surcharge/.test(blob))
      topicKeys.push('surcharge', 'dps', 'delayed', 'late fee', '25');
    if (/customer charges/.test(blob)) topicKeys.push('customer charges');
    if (/reconnec/.test(blob)) topicKeys.push('reconnection', 'reconnect');
    if (/meter test|testing/.test(blob)) topicKeys.push('meter testing', 'meter');
    if (/tod|peak|off-peak/.test(blob)) topicKeys.push('tod', 'peak', 'off-peak');
    if (/grid support|solar|rooftop/.test(blob))
      topicKeys.push('grid support', 'solar', 'rooftop');
    if (/application|registration/.test(blob))
      topicKeys.push('application', 'registration');
    addEntry({
      sheet: 'Billing & Other Charges',
      title: col0,
      body: [
        section && `Section: ${section}`,
        col1 && `Condition: ${col1}`,
        col2 && `Amount / rate: ${col2}`,
        col3 && `Notes: ${col3}`,
        'Source: APERC FY 2026-27 Other Charges for LT Supply.',
      ]
        .filter(Boolean)
        .join('\n'),
      keys: [section, col0, ...topicKeys, 'charge'],
    });
  }
}

{
  const rows = XLSX.utils.sheet_to_json(wb.Sheets['Quick Reference Summary'], {
    header: 1,
    defval: '',
  });
  for (let i = 2; i < rows.length; i++) {
    const [cat, fixed, energy, remarks] = rows[i].map(clean);
    if (!cat) continue;
    addEntry({
      sheet: 'Quick Reference Summary',
      title: `Quick ref: ${cat}`,
      body: [
        `Fixed charges: ${fixed || '—'}`,
        `Energy charges: ${energy || '—'}`,
        remarks && `Remarks: ${remarks}`,
        'Quick summary from APERC LT Tariff FY 2026-27.',
      ]
        .filter(Boolean)
        .join('\n'),
      keys: [cat, 'summary', 'quick', 'overview', 'tariff'],
    });
  }
}

addEntry({
  sheet: 'meta',
  title: 'AP LT Tariff FY 2026-27 overview',
  body: 'Tariff rates are from APERC Tariff Order FY 2026-27, Chapter XI, effective 25 March 2026. Ask about domestic, commercial, industry, agriculture, institutional, temporary supply, delayed payment surcharge (₹25), customer charges, reconnection, or meter testing. Use the Calculator page for bill estimates. This app is unofficial.',
  keys: [
    'aper c',
    'fy 2026',
    '2026-27',
    'overview',
    'effective',
    'tariff order',
  ],
});

const payload = {
  sourceFile: path.basename(excelPath),
  source: 'APERC Tariff Order FY 2026-27',
  effective: '25 March 2026',
  sheets: wb.SheetNames,
  generatedAt: new Date().toISOString(),
  entries,
};

fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
console.log(`Wrote ${entries.length} entries to ${outPath}`);
