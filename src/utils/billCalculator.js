/**
 * Format currency in Indian Rupees.
 * @param {number} value
 * @returns {string}
 */
export function formatMoney(value) {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

/**
 * Telescopic slab energy calculation.
 * @param {number} units
 * @param {{ upto: number, rate: number, label: string }[]} slabs
 */
export function calculateSlabEnergy(units, slabs) {
  let prev = 0;
  let energy = 0;
  const parts = [];

  slabs.forEach((slab) => {
    if (units <= prev) return;
    const take = Math.min(units, slab.upto) - prev;
    const cost = take * slab.rate;
    energy += cost;
    parts.push({
      label: slab.label,
      units: take,
      rate: slab.rate,
      cost,
    });
    prev = slab.upto;
  });

  return { energy, parts };
}

/**
 * Build preview rows for slab table UI.
 * @param {number} units
 * @param {{ upto: number, rate: number, label: string }[]} slabs
 */
export function buildSlabPreviewRows(units, slabs) {
  let prev = 0;
  let totalEnergy = 0;

  const rows = slabs.map((slab, index) => {
    const active = units > prev;
    const take =
      units > prev ? Math.max(0, Math.min(units, slab.upto) - prev) : 0;
    const cost = take * slab.rate;
    totalEnergy += cost;

    let rangeText;
    if (index === 0) {
      rangeText = `0 to ${slab.upto === Infinity ? '∞' : slab.upto}`;
    } else if (slab.upto === Infinity) {
      rangeText = `${prev + 1}+`;
    } else {
      rangeText = `${prev + 1} to ${slab.upto}`;
    }

    const row = {
      key: slab.label,
      name: slab.upto === Infinity ? 'Above' : `Slab ${index + 1}`,
      rate: slab.rate,
      rangeText: `${rangeText} units`,
      take,
      cost,
      active,
    };

    prev = slab.upto;
    return row;
  });

  return { rows, totalEnergy };
}

/**
 * Calculate estimated monthly bill for a tariff category.
 * @param {object} options
 */
export function calculateBill({
  conf,
  category,
  load,
  units,
  phase = '1',
  dsm = true,
  urban = true,
  todPeak = 20,
  todOffpeak = 20,
}) {
  let fixed = 0;
  let energy = 0;
  let customer = 0;
  let subsidy = 0;
  let extras = 0;
  let captionKey = 'default';
  let parts = [];

  if (!conf) {
    return null;
  }

  if (conf.type === 'slab') {
    const sc = calculateSlabEnergy(units, conf.slabs);
    energy = sc.energy;
    parts = sc.parts;
    fixed = conf.fixed(load);
    customer = conf.customer ? conf.customer(units) : 0;

    if (category === 'com') {
      const subtotal = energy + fixed;
      const minimum = conf.minCharge(phase);
      if (subtotal < minimum) {
        extras += minimum - subtotal;
        captionKey = 'minimum';
      }
    }
  } else if (conf.type === 'flat') {
    fixed = conf.fixed(load);
    energy = units * conf.rate;
    parts = [
      {
        labelKey: 'allUnits',
        label: 'All units',
        units,
        rate: conf.rate,
        cost: energy,
      },
    ];

    if (conf.minBill && energy + fixed < conf.minBill) {
      extras += conf.minBill - (energy + fixed);
    }
    if (conf.urgency) {
      extras += conf.urgency;
    }
  } else if (conf.type === 'tod') {
    const peakPct = Math.min(100, Math.max(0, todPeak));
    const offPct = Math.min(100, Math.max(0, todOffpeak));
    const normalPct = Math.max(0, 100 - peakPct - offPct);

    const peakUnits = (units * peakPct) / 100;
    const offUnits = (units * offPct) / 100;
    const normalUnits = (units * normalPct) / 100;

    const peakRate =
      conf.peak.find((r) => load <= r.max)?.rate ||
      conf.peak[conf.peak.length - 1].rate;
    const offRate =
      conf.offpeak.find((r) => load <= r.max)?.rate ||
      conf.offpeak[conf.offpeak.length - 1].rate;

    fixed = conf.fixed(load);
    energy =
      normalUnits * conf.normal + peakUnits * peakRate + offUnits * offRate;

    parts = [
      {
        labelKey: 'normal',
        label: 'Normal',
        units: normalUnits,
        rate: conf.normal,
        cost: normalUnits * conf.normal,
      },
      {
        labelKey: 'peak',
        label: 'Peak',
        units: peakUnits,
        rate: peakRate,
        cost: peakUnits * peakRate,
      },
      {
        labelKey: 'offPeak',
        label: 'Off-peak',
        units: offUnits,
        rate: offRate,
        cost: offUnits * offRate,
      },
    ];
    captionKey = 'tod';
  } else if (conf.type === 'agri_corp') {
    const rate = dsm ? conf.withDSM : conf.withoutDSM;
    energy = units * rate;
    parts = [
      {
        labelKey: dsm ? 'withDsm' : 'withoutDsm',
        label: dsm ? 'With DSM' : 'Without DSM',
        units,
        rate,
        cost: energy,
      },
    ];
    captionKey = 'agriCorp';
  } else if (conf.type === 'free_limit') {
    const freeMonthly = (conf.annualFreePerHP * load) / 12;
    const billedUnits = Math.max(0, units - freeMonthly);
    subsidy = Math.min(units, freeMonthly) * conf.excessRate;
    energy = billedUnits * conf.excessRate;
    parts = [
      {
        labelKey: 'freeQuota',
        label: 'Free quota',
        units: Math.min(units, freeMonthly),
        rate: 0,
        cost: 0,
      },
      {
        labelKey: 'excess',
        label: 'Excess units',
        units: billedUnits,
        rate: conf.excessRate,
        cost: energy,
      },
    ];
    captionKey = urban ? 'freeUrban' : 'freeRural';
  }

  const total = Math.max(0, energy + fixed + customer + extras);

  return {
    fixed,
    energy,
    customer,
    subsidy,
    extras,
    total,
    captionKey,
    parts,
    units,
    avgRate: units ? total / units : 0,
  };
}
