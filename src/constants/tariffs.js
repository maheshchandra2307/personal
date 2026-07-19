/** APERC FY 2026-27 LT tariff configuration */

export const CATEGORY_OPTIONS = [
  {
    group: 'Domestic',
    options: [{ value: 'dom', label: 'Cat-I(A): Domestic (Residential)' }],
  },
  {
    group: 'Commercial',
    options: [
      {
        value: 'com',
        label: 'Cat-II(A)(i): Commercial (Shops/Offices/Hospitals)',
      },
      { value: 'adv', label: 'Cat-II(A)(ii): Advertising Hoardings' },
      { value: 'fun', label: 'Cat-II(A)(iii): Function Halls / Auditoria' },
      { value: 'ev', label: 'Cat-II(C): EV Charging Stations' },
      { value: 'gp', label: 'Cat-II(D): Green Power' },
    ],
  },
  {
    group: 'Industry LT',
    options: [
      { value: 'ind_lt15', label: 'Cat-III(A): Industry ≤15kW (All hours)' },
      { value: 'ind_15_75', label: 'Cat-III(A): Industry >15kW–75kW (ToD)' },
      { value: 'ind_75_150', label: 'Cat-III(A): Industry >75kW–150kW (ToD)' },
      { value: 'seas', label: 'Cat-III(B): Seasonal Industries (Off-Season)' },
      { value: 'cot', label: 'Cat-III(D): Cottage Industries ≤20HP' },
    ],
  },
  {
    group: 'Institutional',
    options: [
      { value: 'util', label: 'Cat-IV(A): Utilities (Street Lighting/CPWS)' },
      { value: 'genp', label: 'Cat-IV(B): General Purpose (Govt)' },
      { value: 'rel_lt2', label: 'Cat-IV(C): Religious Places ≤2kW' },
      { value: 'rel_gt2', label: 'Cat-IV(C): Religious Places >2kW' },
    ],
  },
  {
    group: 'Agriculture',
    options: [
      {
        value: 'agri_corp',
        label: 'Cat-V(A)(i): Agriculture – Corporate Farmers',
      },
      {
        value: 'agri_free',
        label: 'Cat-V(A)(ii): Agriculture – Non-Corporate (Free)',
      },
      { value: 'salt', label: 'Cat-V(A)(iii): Salt Farming ≤15HP' },
      { value: 'aqua', label: 'Cat-V(B): Aquaculture & Animal Husbandry' },
      {
        value: 'agri_cot',
        label: 'Cat-V(D): Agro-based Cottage Industries ≤20HP',
      },
      { value: 'lift', label: 'Cat-V(E): Govt/Private Lift Irrigation' },
    ],
  },
  {
    group: 'Temporary',
    options: [
      { value: 'tmp_gen', label: 'Temporary Supply – General' },
      { value: 'tmp_sub', label: 'Temporary Supply – Free/Subsidised' },
    ],
  },
];

export const HIDE_LOAD_CATEGORIES = ['fun', 'ev', 'gp', 'salt', 'tmp_sub'];

export const tariffs = {
  dom: {
    type: 'slab',
    loadUnit: 'kW',
    fixed: (load) => (load > 75 ? load * 75 : load * 10),
    customer: (u) =>
      u <= 30 ? 25 : u <= 75 ? 30 : u <= 125 ? 45 : u <= 225 ? 50 : 55,
    slabs: [
      { upto: 30, rate: 1.9, label: '0-30' },
      { upto: 75, rate: 3.0, label: '31-75' },
      { upto: 125, rate: 4.5, label: '76-125' },
      { upto: 225, rate: 6.0, label: '126-225' },
      { upto: 400, rate: 8.75, label: '226-400' },
      { upto: Infinity, rate: 9.75, label: '401+' },
    ],
  },
  com: {
    type: 'slab',
    loadUnit: 'kW',
    fixed: (load) => (load > 75 ? load * 275 : load * 75),
    minCharge: (phase) => (phase === '3' ? 200 : 65),
    slabs: [
      { upto: 50, rate: 5.4, label: '0-50' },
      { upto: 100, rate: 7.65, label: '51-100' },
      { upto: 300, rate: 9.05, label: '101-300' },
      { upto: 500, rate: 9.6, label: '301-500' },
      { upto: Infinity, rate: 9.95, label: '501+' },
    ],
  },
  adv: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 100,
    rate: 9.95,
    minBill: 300,
  },
  fun: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: () => 0,
    rate: 9.95,
    minBill: 300,
  },
  ev: { type: 'flat', loadUnit: 'kW', fixed: () => 0, rate: 6.7 },
  gp: { type: 'flat', loadUnit: 'kW', fixed: () => 0, rate: 9.95 },
  ind_lt15: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 75,
    rate: 6.7,
  },
  ind_15_75: {
    type: 'tod',
    loadUnit: 'kW',
    fixed: (load) => load * 75,
    normal: 6.7,
    peak: [
      { max: 25, rate: 7.2 },
      { max: 75, rate: 7.7 },
    ],
    offpeak: [
      { max: 25, rate: 6.2 },
      { max: 75, rate: 5.7 },
    ],
  },
  ind_75_150: {
    type: 'tod',
    loadUnit: 'kW',
    fixed: (load) => load * 275,
    normal: 6.7,
    peak: [{ max: 150, rate: 7.7 }],
    offpeak: [{ max: 150, rate: 5.7 }],
  },
  seas: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 0.3 * 75,
    rate: 7.45,
  },
  cot: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => Math.max(load * 20, 30),
    rate: 3.75,
  },
  util: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => (load > 75 ? load * 275 : load * 75),
    rate: 7.0,
  },
  genp: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 75,
    rate: 7.0,
    minBill: 50,
  },
  rel_lt2: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 30,
    rate: 3.85,
  },
  rel_gt2: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 30,
    rate: 5.0,
  },
  agri_corp: {
    type: 'agri_corp',
    loadUnit: 'HP',
    fixed: () => 0,
    withDSM: 3.5,
    withoutDSM: 4.5,
  },
  agri_free: {
    type: 'free_limit',
    loadUnit: 'HP',
    fixed: () => 0,
    annualFreePerHP: 1200,
    excessRate: 6.4,
  },
  salt: { type: 'flat', loadUnit: 'HP', fixed: () => 0, rate: 2.5 },
  aqua: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 30,
    rate: 3.85,
  },
  agri_cot: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 20,
    rate: 3.75,
  },
  lift: {
    type: 'free_limit',
    loadUnit: 'HP',
    fixed: () => 0,
    annualFreePerHP: 1200,
    excessRate: 6.4,
  },
  tmp_gen: {
    type: 'flat',
    loadUnit: 'kW',
    fixed: (load) => load * 30,
    rate: 10.5,
    urgency: 200,
  },
  tmp_sub: { type: 'flat', loadUnit: 'kW', fixed: () => 0, rate: 3.75 },
};

export const CALCULATOR_TABS = [
  { id: 'calc', label: 'Calculator', icon: '🧮' },
  { id: 'domestic', label: 'Domestic', icon: '🏠' },
  { id: 'commercial', label: 'Commercial', icon: '🏪' },
  { id: 'industry', label: 'Industry', icon: '🏭' },
  { id: 'agri', label: 'Agriculture', icon: '🌾' },
  { id: 'others', label: 'Others', icon: '🏛️' },
  { id: 'charges', label: 'Other Charges', icon: '📋' },
];
