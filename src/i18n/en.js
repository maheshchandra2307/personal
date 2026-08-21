/** English UI copy. Nested keys are resolved as `section.item`. */

export const en = {
  lang: {
    label: 'Language',
    en: 'English',
    te: 'తెలుగు',
  },
  app: {
    name: 'AP Electricity Bill Calculator',
    tagline: 'Andhra Pradesh · APERC',
  },
  nav: {
    calculator: 'Calculator',
    payBill: 'Pay Bill',
    guides: 'Guides',
    discoms: 'DISCOMs',
    whatsNew: "What's New",
    about: 'About',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer',
    contact: 'Contact Us',
  },
  footer: {
    blurb:
      'An independent, unofficial APERC {{year}} bill estimator, tariff reference and payment link helper for Andhra Pradesh consumers. Not affiliated with APERC or any AP DISCOM.',
    helpline: 'DISCOM helpline: {{number}}',
    navigation: 'Navigation',
    guides: 'Guides',
    legal: 'Legal',
    copyright:
      '© {{year}} {{name}}. Estimates only — your official DISCOM bill is the authoritative amount. Not affiliated with APERC, APSPDCL, APCPDCL, APEPDCL or the Government of Andhra Pradesh.',
  },
  notice:
    'Pay your electricity bill within 14 days to avoid a ₹25 surcharge on next month’s bill. If the connection is disconnected for non-payment, reconnection charges are ₹100 for overhead line services and ₹300 for underground cable services.',
  chat: {
    welcome:
      'Hi! Need help with AP electricity bills?\n\nI answer from APERC LT Tariff FY 2026-27 (domestic, commercial, industry, agriculture, surcharge, reconnection) plus DISCOM & payment tips.\n\nThis is an unofficial helper — payments happen only on official sites.',
    needHelp: 'Need Help?',
    askHint: 'Ask tariff & bill Qs',
    open: 'Need help — open chat',
    close: 'Close help chat',
    title: 'Bill Help Assistant',
    status: 'APERC FY 2026-27 Excel · Unofficial',
    placeholder: 'Ask tariff, surcharge, DISCOM...',
    send: 'Send',
    footer:
      'Answers from your tariff Excel + FAQ · Official payment on DISCOM sites',
    quick: {
      domesticRates: 'Domestic rates',
      surcharge: 'Surcharge ₹25',
      whichDiscom: 'Which DISCOM?',
      howToPay: 'How to pay',
      agriFree: 'Agriculture free',
      helpline: 'Helpline',
    },
    replies: {
      apepdcl:
        'APEPDCL (Eastern Power) covers Srikakulam, Vizianagaram, Visakhapatnam, Anakapalli, Kakinada, East/West Godavari, Konaseema, Eluru and nearby districts.\n\nOpen the Pay Bill page and tap the APEPDCL card to go to its official payment site.',
      apcpdcl:
        'APCPDCL (Central Power) covers Krishna (NTR), Guntur, Bapatla, Palnadu, Prakasam and Markapuram.\n\nOpen the Pay Bill page and tap the APCPDCL card — it opens the Paytm bill payment page for APCPDCL.',
      apspdcl:
        'APSPDCL (Southern Power) covers Tirupati, Chittoor, Annamayya, YSR Kadapa, Anantapuramu, Sri Sathya Sai, Kurnool, Nandyal and SPSR Nellore.\n\nOpen the Pay Bill page and tap the APSPDCL card to go to its official payment site.',
      whichDiscom:
        'Tell me your district and I can point you to the right DISCOM — or open Pay Bill and check the district tags on each card.',
      serviceNumber:
        "Your Service Number is a 13-digit number printed on your latest electricity bill, usually near the top labeled 'Service No.' or 'Unique Service Number (USC)'.",
      howToPay:
        'To pay your bill:\n1. Open Pay Bill and tap your DISCOM card\n2. You will land on the official DISCOM/BillDesk page\n3. Enter your 13-digit Service Number\n4. Complete the captcha\n5. Verify the bill amount shown\n6. Pay via UPI, Net Banking, or Debit/Credit Card\n\nTip: Pay within 14–15 days of the bill date to avoid delayed payment surcharge (₹25 for many domestic/small LT categories).',
      helpline:
        'Common AP DISCOM helpline: 1912 (toll-free) or 1800-425-1912.\nAPSPDCL also has 1800-425-5333.\nThese connect you to the official DISCOM, not to this app.',
      complaint:
        'For power cuts, meter issues, or complaints, call 1912 (toll-free) to reach your DISCOM.\nYou can also use the official DISCOM apps/portals for outage complaints. This app only helps with bill estimates and payment redirects.',
      calculate:
        'Use the Calculator page to estimate your monthly bill with APERC FY 2026-27 rates. Select your consumer category, enter load and units, then tap Calculate.\n\nAsk me about domestic slabs, commercial rates, agriculture free quota, surcharge, or reconnection charges from the tariff Excel.',
      unofficial:
        'This is an independent, unofficial helper. It is not run by AP DISCOMs or the AP Government. Payments happen only on official DISCOM/BillDesk sites.',
    },
    fallback:
      "I can answer from APERC LT Tariff FY 2026-27 (your Excel) plus DISCOM / payment help.\n\nTry: 'Domestic rates', 'Surcharge ₹25', 'Agriculture free', 'Which DISCOM?', or 'How to pay'.",
  },
  calc: {
    title: 'Bill Calculator',
    telescopic:
      'Telescopic billing: For Domestic and Commercial slab categories, each slab rate applies only to units within that range.',
    category: 'Consumer Category',
    selectCategory: '— Select your category —',
    peakShare: 'Peak usage share',
    offPeakShare: 'Off-peak usage share',
    remainingUnits: 'Remaining units are treated as normal-hour consumption.',
    supplyPhase: 'Supply Phase',
    singlePhase: 'Single Phase',
    threePhase: 'Three Phase',
    dsm: 'DSM compliance',
    withDsm: 'With DSM',
    withoutDsm: 'Without DSM',
    location: 'Location',
    urban: 'Urban',
    rural: 'Rural',
    freeQuotaNote:
      'Free quota is evaluated against annual entitlement of 1200 units per HP. This estimator approximates the monthly share as annual quota divided by 12.',
    loadTip:
      'Used to calculate fixed charges. Check your meter or bill for sanctioned load.',
    contractedLoad: 'Contracted Load (kW / HP)',
    usageMode: 'Usage Entry Mode',
    enterUnits: 'Enter total units directly',
    enterReading: 'Enter meter reading from and to',
    meterReading: 'Meter Reading (From / To)',
    fromKwh: 'From kWh',
    toKwh: 'To kWh',
    previousReading: 'Previous reading',
    currentReading: 'Current reading',
    autoUnits: 'Units will be auto-calculated as To − From.',
    unitsTip: 'kWh (kilowatt-hours) consumed as shown on your meter reading.',
    unitsConsumed: 'Units Consumed This Month',
    unitsValue: '{{units}} units',
    applicableSlabs: 'Applicable Slabs',
    slab: 'Slab',
    slabN: 'Slab {{n}}',
    above: 'Above',
    rateKwh: 'Rate (₹/kWh)',
    range: 'Range',
    slabCost: 'Slab Cost',
    unitsWord: 'units',
    totalEnergy: 'Total Energy Charges',
    selectError: 'Please select a consumer category.',
    calculate: 'Calculate My Bill',
    payLinks: 'Pay Bill Links',
    empty:
      'Select a category, enter your usage, and tap Calculate to see a full bill breakdown.',
    estimated: 'Estimated Monthly Bill',
    copy: 'Copy estimate summary',
    copied: 'Copied!',
    copyFailed: 'Copy failed',
    units: 'Units',
    avgUnit: 'Avg / Unit',
    energyCharges: 'Energy charges',
    fixedCharges: 'Fixed charges',
    customerCharges: 'Customer charges',
    extras: 'Other / minimum / urgency',
    subsidy: 'Indicative subsidy value',
    totalPayable: 'Total payable',
    slabWise: 'Slab-wise Energy Cost',
    caption: {
      default: 'Including energy and fixed charges',
      minimum: 'Minimum monthly charge applied where required',
      tod: 'Time-of-day estimate based on your usage split',
      agriCorp: 'Corporate agriculture rate selected',
      freeUrban: 'Monthly estimate from annual free quota.',
      freeRural:
        'Rural users may have different excess treatment; this estimate uses the shown excess rate.',
    },
    parts: {
      allUnits: 'All units',
      normal: 'Normal',
      peak: 'Peak',
      offPeak: 'Off-peak',
      withDsm: 'With DSM',
      withoutDsm: 'Without DSM',
      freeQuota: 'Free quota',
      excess: 'Excess units',
    },
    copySummary: {
      title: 'AP Electricity Bill Calculator – Estimated Bill',
      units: 'Units: {{units}}',
      energy: 'Energy: ₹{{amount}}',
      fixed: 'Fixed: ₹{{amount}}',
      customer: 'Customer: ₹{{amount}}',
      other: 'Other: ₹{{amount}}',
      total: 'Total: ₹{{amount}}',
      unofficial: 'Unofficial estimate only.',
    },
  },
  tabs: {
    calc: 'Calculator',
    domestic: 'Domestic',
    commercial: 'Commercial',
    industry: 'Industry',
    agri: 'Agriculture',
    others: 'Others',
    charges: 'Other Charges',
  },
  groups: {
    domestic: 'Domestic',
    commercial: 'Commercial',
    industry: 'Industry LT',
    institutional: 'Institutional',
    agriculture: 'Agriculture',
    temporary: 'Temporary',
  },
  categories: {
    dom: 'Cat-I(A): Domestic (Residential)',
    com: 'Cat-II(A)(i): Commercial (Shops/Offices/Hospitals)',
    adv: 'Cat-II(A)(ii): Advertising Hoardings',
    fun: 'Cat-II(A)(iii): Function Halls / Auditoria',
    ev: 'Cat-II(C): EV Charging Stations',
    gp: 'Cat-II(D): Green Power',
    ind_lt15: 'Cat-III(A): Industry ≤15kW (All hours)',
    ind_15_75: 'Cat-III(A): Industry >15kW–75kW (ToD)',
    ind_75_150: 'Cat-III(A): Industry >75kW–150kW (ToD)',
    seas: 'Cat-III(B): Seasonal Industries (Off-Season)',
    cot: 'Cat-III(D): Cottage Industries ≤20HP',
    util: 'Cat-IV(A): Utilities (Street Lighting/CPWS)',
    genp: 'Cat-IV(B): General Purpose (Govt)',
    rel_lt2: 'Cat-IV(C): Religious Places ≤2kW',
    rel_gt2: 'Cat-IV(C): Religious Places >2kW',
    agri_corp: 'Cat-V(A)(i): Agriculture – Corporate Farmers',
    agri_free: 'Cat-V(A)(ii): Agriculture – Non-Corporate (Free)',
    salt: 'Cat-V(A)(iii): Salt Farming ≤15HP',
    aqua: 'Cat-V(B): Aquaculture & Animal Husbandry',
    agri_cot: 'Cat-V(D): Agro-based Cottage Industries ≤20HP',
    lift: 'Cat-V(E): Govt/Private Lift Irrigation',
    tmp_gen: 'Temporary Supply – General',
    tmp_sub: 'Temporary Supply – Free/Subsidised',
  },
  home: {
    heroTitle: 'Know Your Exact Electricity Bill',
    heroLead:
      'Official APERC tariff rates for all LT consumer categories in Andhra Pradesh, effective 25 March 2026. {{year}} rates included.',
    howTitle: 'How this AP electricity bill calculator works',
    howP1:
      'Andhra Pradesh electricity charges for low-tension (LT) consumers are set by the Andhra Pradesh Electricity Regulatory Commission (APERC). For {{year}}, energy charges are applied in slabs based on units consumed, with additional fixed or demand charges depending on the consumer category. This calculator maps your usage inputs to those published LT tariff schedules so you can estimate the energy and fixed portions of a monthly bill before you open your DISCOM statement.',
    howP2:
      'Start on the Calculator tab: choose your category, enter units (and load or ToD details when asked), then review the break-up of slab-wise energy charges and other applicable components. The Domestic, Commercial, Industry, Agriculture, and Others tabs show the same APERC rate tables used by the engine, so you can compare slabs without leaving the page. Other Charges covers items such as delayed payment surcharge, reconnection, and meter-related fees listed in the tariff order.',
    slabsTitle: 'Understanding APERC LT tariff slabs',
    slabsP1:
      'Domestic LT supply in Andhra Pradesh typically uses a telescopic structure: lower monthly consumption stays in cheaper energy-charge bands, while higher usage fills higher bands. Commercial and industrial LT categories may use different slab edges, demand charges, or Time-of-Day pricing. Agricultural and institutional categories follow their own APERC schedules, including free or concessional quotas where the tariff order provides them.',
    slabsP2:
      'Knowing which slab your units fall into helps you plan usage—for example, shifting non-essential load can keep a household below a costlier threshold. Always match the category printed on your bill (and your connected load) so the estimate reflects the correct schedule. Rates on this site follow the APERC LT order for {{year}}, effective from 25 March 2026 as published for this app.',
    tipsTitle: 'Tips for a useful estimate',
    tip1: 'Copy units from a recent bill or meter reading for the same billing period you want to check.',
    tip2: 'Select the exact LT category shown on your bill—not a nearby label that sounds similar.',
    tip3: 'Enter connected load or contracted demand when the form asks; fixed or demand charges depend on it.',
    tip4: 'For ToD tariffs, split peak and off-peak units the way your meter records them.',
    tip5: 'After estimating, pay only through official APEPDCL, APCPDCL, or APSPDCL websites linked from the Pay Bill page.',
    faqTitle: 'Frequently asked questions',
    learnTitle: 'Learn how AP electricity billing works',
    learnLead:
      'The calculator gives you a number. These guides explain where that number comes from — the arithmetic behind a bill, what each field on your bill means, how the regulator sets rates, and what a saved unit is actually worth to you.',
    yourDiscom: 'Your distribution company',
    yourDiscomLead:
      'Andhra Pradesh has three DISCOMs. Tariffs are the same in all three because APERC sets them state-wide, but the offices, portals and helplines differ.',
    compareAll: 'Compare all three',
    disclaimer:
      'This calculator is for estimation based on APERC {{year}} tariff values shown in this app. Actual bills may include utility-specific adjustments, taxes, rebates, meter rent, or subsidy conditions.',
    readDisclaimer: 'Read the full disclaimer',
    faqs: [
      {
        q: 'How do APERC electricity slabs work in Andhra Pradesh?',
        a: 'APERC LT tariffs use telescopic slabs for most domestic consumers. Your monthly units (kWh) are split across bands—for example the first block of units is billed at a lower energy charge, and higher usage moves into costlier slabs. Fixed/demand charges and other approved surcharges may apply on top of energy charges. This site applies the published APERC FY 2026-27 LT rates so you can see how each slab contributes to an estimate.',
      },
      {
        q: 'What inputs do I need for an accurate estimate?',
        a: 'Use your billed units for the month (or the period you want to check), pick the matching LT category (domestic, commercial, industry, agriculture, and others), and enter connected load or demand where the tariff requires it. Time-of-Day (ToD) categories need peak/off-peak split if your meter records it. Closer inputs mean a closer estimate—your DISCOM bill remains the final amount.',
      },
      {
        q: 'Why might my estimate differ from the DISCOM bill?',
        a: 'Official bills can include meter rent, electricity duty, subsidies, rebates, delayed payment surcharge, arrears, or temporary adjustments that are not always visible in a simple tariff table. Category mis-selection or wrong unit totals also change the result. Treat this tool as a planning estimate, then pay only on the official APEPDCL, APCPDCL, or APSPDCL portals.',
      },
      {
        q: 'Which DISCOM serves my district?',
        a: 'Andhra Pradesh is served by APEPDCL (eastern districts), APCPDCL (central), and APSPDCL (southern). Use the Pay Bill page on this site to find your district and open the matching official payment link. Helplines and service-number tips are also available in the help chat.',
      },
      {
        q: 'Is this an official APERC or government website?',
        a: 'No. This is an independent helper that mirrors published APERC LT tariff schedules for FY 2026-27. It is not affiliated with APERC, AP DISCOMs, or the Government of Andhra Pradesh. Always confirm rates and pay dues on official sources.',
      },
    ],
  },
  pay: {
    unofficialBanner:
      'This is an independent, unofficial links page — not run by AP DISCOMs or the AP Government. It only redirects you to the official payment sites.',
    title: 'AP Electricity Bill',
    subtitle: 'Quick Pay Links',
    unofficialTool:
      'Unofficial redirect tool  |  Links to official DISCOM sites only',
    jumpTitle: "Jump Straight to Your DISCOM's Payment Page",
    jumpLead:
      'Tap your DISCOM below to open its official payment site in a new tab. Keep your Service Number ready.',
    selectDiscom: 'Select Your Distribution Company',
    howToPay:
      'How to pay: Tap your DISCOM → you’ll land on the DISCOM’s own official page → enter your 13-digit Service Number → complete the Captcha → verify bill amount → pay via Net Banking / UPI / Debit or Credit Card.  |  Your service number is printed on your electricity bill.',
    footer:
      'This is an independent, unofficial links page created to help consumers reach their DISCOM’s payment page faster. It is not affiliated with or endorsed by APEPDCL, APCPDCL, APSPDCL, APERC, or the Government of Andhra Pradesh. All payments happen on the official DISCOM/BillDesk sites, not here.',
    complaints: 'For complaints, use the DISCOM helpline: 1912 (Toll Free)',
    findTitle: 'Find your DISCOM by district',
    findLead: 'Type your district name to see which company handles your area.',
    findPlaceholder: 'e.g. Guntur, Tirupati, Visakhapatnam',
    noMatch:
      'No district match found. Try a shorter name, or check the district tags on the cards below.',
    openPay: 'Open pay page →',
    districtsCovered: 'Districts Covered',
    hq: 'HQ: {{place}}',
    helpline: 'Helpline:',
    goOfficial: 'Go to {{acronym}} Official Site',
    opensTab: 'Opens {{host}} in a new tab',
    payAria: 'Go to official {{acronym}} bill payment site',
  },
  notFound: {
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved. Here is everything else on the site.',
    back: 'Back to calculator',
    browse: 'Browse guides',
    calc: 'Bill calculator',
    guides: 'Guides',
    discoms: 'AP DISCOMs',
    pay: 'Pay bill links',
    about: 'About',
    contact: 'Contact',
    documentTitle: 'Page not found – {{name}}',
  },
  common: {
    home: 'Home',
    disclaimerWord: 'Disclaimer',
    lastReviewed: 'Last reviewed {{date}}',
    updated: 'Updated {{date}}',
    englishOnly:
      'The detailed article on this page is currently in English. The calculator, menus and payment links are available in Telugu.',
    readGuide: 'Read the guide →',
    details: '{{acronym}} details →',
    districtsCount: '{{count}} districts in the licence area.',
  },
  guides: {
    eyebrow: 'Guides',
    indexTitle: 'Guides to AP electricity bills and tariffs',
    indexLead:
      'Understanding an electricity bill should not require reading a regulatory order. These guides explain how Andhra Pradesh billing actually works — from the arithmetic on your bill to the process that sets the rates — using the APERC {{year}} low-tension schedule that drives the calculator on this site.',
    intro:
      'If you are starting from scratch, read how AP electricity bills are calculated first — it follows a single bill from meter reading to final amount with a worked example. From there, how to read your bill helps you check your own, and how to reduce your bill works out what a saved unit is actually worth to you.',
    linkCalc: 'how AP electricity bills are calculated',
    linkRead: 'how to read your bill',
    linkReduce: 'how to reduce your bill',
    footnote:
      'These guides are general explanatory material and not professional advice. Rates quoted come from the tariff dataset used by the calculator; where they differ from the APERC tariff order or your official bill, the official document is correct. See our disclaimer.',
    onThisPage: 'On this page',
    faqs: 'Frequently asked questions',
    continue: 'Continue reading',
    tryNumbers:
      'Want to try these numbers on your own bill? Open the calculator. This guide is general explanatory material, not professional advice — see our disclaimer.',
    cat: {
      'Billing basics': 'Billing basics',
      'Tariffs and regulation': 'Tariffs and regulation',
      Connections: 'Connections',
      'Saving money': 'Saving money',
    },
    items: {
      'how-ap-electricity-bills-are-calculated': {
        title: 'How AP electricity bills are calculated',
        excerpt:
          'Meter reading, category, telescopic slabs, fixed and customer charges — followed end to end with a worked 240-unit domestic example.',
        readingTime: '9 min read',
      },
      'understanding-telescopic-tariff-slabs': {
        title: 'Understanding telescopic tariff slabs',
        excerpt:
          'Why your average rate per unit is always lower than your highest slab rate — and where the telescopic structure stops applying.',
        readingTime: '7 min read',
      },
      'aperc-tariff-order-explained': {
        title: 'Understanding APERC tariff orders',
        excerpt:
          'Who decides your rate, the annual filing and hearing cycle, and what is actually inside a tariff order document.',
        readingTime: '8 min read',
      },
      'lt-vs-ht-electricity-connections': {
        title: 'Difference between LT and HT connections',
        excerpt:
          'Supply voltage, load thresholds, demand charges, power factor and metering — what changes when a consumer moves from LT to HT.',
        readingTime: '8 min read',
      },
      'how-to-read-your-ap-electricity-bill': {
        title: 'How to read your AP electricity bill',
        excerpt:
          'Service number, category code, connected load, ACD, DPS and arrears — what each field means and which ones signal a problem.',
        readingTime: '8 min read',
      },
      'how-to-reduce-your-electricity-bill': {
        title: 'How to reduce your electricity bill in Andhra Pradesh',
        excerpt:
          'Which appliances actually drive your units, what a saved unit is worth in your slab, and which savings claims to ignore.',
        readingTime: '10 min read',
      },
    },
  },
  discom: {
    eyebrow: 'Distribution companies',
    indexTitle: 'Andhra Pradesh electricity DISCOMs',
    indexLead:
      'Electricity in Andhra Pradesh is distributed by three state-owned companies, each licensed for a defined territory. Which one bills you depends only on where your connection is — and, because tariffs are set state-wide by the regulator, it does not change what you pay.',
    sameRates: 'The same rates everywhere',
    historyTitle: 'How the three came about',
    historyP1:
      'Until the late 1990s, generation, transmission and distribution across the undivided state were handled by a single State Electricity Board. Reform legislation unbundled that structure, separating transmission into APTRANSCO and distribution into independent companies with defined licence areas — initially APEPDCL in the east and APSPDCL covering the south and centre, alongside utilities that went to Telangana on bifurcation.',
    historyP2:
      'The most recent change came in 2020, when the central districts around Vijayawada and Guntur were carved out of APSPDCL to form APCPDCL. That left the present arrangement of three distribution companies: eastern, central and southern.',
    historyP3:
      'Each is a licensee regulated by the Andhra Pradesh Electricity Regulatory Commission, which determines the retail tariffs they may charge, specifies standards of performance they must meet, and hears certain categories of consumer grievance. A DISCOM administers your connection; it does not set your rate.',
    differsTitle: 'What actually differs between them',
    differ1:
      'The office you deal with — your section, ERO and division are all within your own DISCOM, and are named on your bill.',
    differ2:
      'The portal you pay on, and which payment channels it offers. Each DISCOM runs its own site and gateway arrangements.',
    differ3:
      'The local network you are connected to, and therefore your practical experience of reliability, voltage quality and restoration times.',
    differ4:
      'The mix of consumers around you, which shapes local load patterns — heavy industry in the Visakhapatnam belt, irrigation demand across Rayalaseema, dense urban load in the Vijayawada corridor.',
    differ5:
      'Service processes for new connections, load changes and name transfers, which follow the same regulations but are administered separately.',
    notSure:
      'Not sure which DISCOM serves you? The Pay Bill page lets you find your district and opens the correct official payment site. To estimate what a bill should come to under the {{year}} schedule, use the calculator.',
    payBillPage: 'Pay Bill page',
    calculator: 'calculator',
    aboutAcronym: 'About {{acronym}}',
    districtsServed: 'Districts served',
    districtsLead:
      '{{acronym}} is the licensed distribution company for the following districts. District boundaries in Andhra Pradesh were reorganised in 2022, so an older bill may name a predecessor district.',
    whichTariff: 'Which tariff applies',
    tariffP2:
      'So a {{acronym}} consumer is billed under the APERC {{year}} low-tension schedule: telescopic energy slabs for domestic and commercial supply, flat rates for most industrial and institutional categories, a fixed charge based on sanctioned load, and a customer charge that steps up with consumption. The calculator on this site implements that schedule, and the reference tabs show the rate tables it applies.',
    estimateBill: 'Estimate a bill',
    howCalculated: 'How bills are calculated',
    payingBill: 'Paying a {{acronym}} bill',
    payingLead:
      "Payment happens on {{acronym}}'s own portal. This site links to it and nothing more — we never collect payments or see your account.",
    fraudTitle: 'Watch out for payment fraud',
    complaintsTitle: 'Complaints and escalation',
    complaintsLead:
      'For anything about your own connection — a wrong bill, a faulty meter, a supply failure, a category correction — {{acronym}} is the only body that can act. There is a defined escalation path.',
    helplineLabel: '{{acronym}} helpline:',
    otherCompanies: 'The other AP distribution companies',
    independentNote:
      'This is an independent reference page. It is not operated by or affiliated with {{acronym}}, APERC, or the Government of Andhra Pradesh — see our disclaimer.',
    tagline: {
      apspdcl: 'Southern Andhra Pradesh · headquartered at Tirupati',
      apcpdcl: 'Central Andhra Pradesh · headquartered at Vijayawada',
      apepdcl: 'Eastern Andhra Pradesh · headquartered at Visakhapatnam',
    },
    region: {
      apspdcl: 'Rayalaseema and the southern coastal belt',
      apcpdcl: 'The central coastal districts around Vijayawada and Guntur',
      apepdcl:
        'North-coastal Andhra, the Godavari districts and the agency areas',
    },
    notable: {
      Headquarters: 'Headquarters',
      Coverage: 'Coverage',
      Regulator: 'Regulator',
      Helpline: 'Helpline',
      Formed: 'Formed',
    },
    tariffNote:
      'Retail tariffs are determined by APERC for the state as a whole, so the rates that apply to you are the same in all three licence areas. A domestic consumer of 200 units pays the same energy, fixed and customer charges whether the bill comes from APSPDCL, APCPDCL or APEPDCL. What differs between the DISCOMs is service administration — the offices you deal with, the portal you pay on, and the local network you are connected to.',
    paymentSteps: [
      'Keep your service number ready. It is printed on your bill and is usually a 13-digit number.',
      'Open your DISCOM’s official payment page from the link on this page, and check that the address bar shows the DISCOM’s own domain.',
      'Enter the service number and complete the captcha to fetch the outstanding amount.',
      'Verify the consumer name and billed amount against your bill before paying.',
      'Pay by UPI, net banking, or debit or credit card, and save the receipt or transaction reference.',
    ],
    complaintSteps: [
      'Call the toll-free helpline 1912 for supply failures, billing problems and meter complaints, and note the docket number you are given.',
      'For anything requiring documents — a category correction, a load change, a name transfer — go to your section or ERO office, which is named on your bill.',
      'If a complaint is not resolved within the notified time, escalate it to your DISCOM’s consumer grievance redressal forum.',
      'A decision of the forum can be taken to the Electricity Ombudsman for the state.',
    ],
    safetyNote:
      'Pay only on your DISCOM’s own website. Messages threatening disconnection unless you pay through a link, download an app, or share an OTP are a well-established fraud pattern. A DISCOM will not ask for card details or OTPs over the phone.',
  },
  whatsNew: {
    eyebrow: "What's New · Central Government Scheme",
    visit: 'Visit official PM Surya Ghar website',
    freeElec: 'Free electricity',
    freeValue: 'Up to 300 units / month',
    target: 'Target households',
    targetValue: '1 crore homes',
    investment: 'Scheme investment',
    investmentValue: 'Over ₹75,000 crores',
    meansTitle: 'What this means for consumers',
    means1:
      'Households can apply for rooftop solar under this central scheme through the official portal.',
    means2:
      'Eligible homes may get subsidy support and generate their own electricity — reducing monthly bills.',
    means3:
      'The goal includes up to 300 units of free electricity every month for covered households.',
    footnote:
      'This page is an informational highlight only. Applications, eligibility, and subsidies are handled on the official site:',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'About {{name}}',
    lead: 'An independent, unofficial tariff estimator and reference for Andhra Pradesh electricity consumers, built on the published APERC low-tension schedule.',
    openCalc: 'Open the calculator',
    readGuides: 'Read the guides',
    contactUs: 'Contact us',
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Contact us',
    lead: 'Questions about the site, corrections to the tariff data, or anything that looks broken — this is the place. For anything concerning your own electricity connection, your DISCOM is the only body that can help.',
    emailUs: 'Email us',
    emailLead:
      'The best way to reach us about anything on this site, including tariff corrections.',
    replyTime: 'Typical reply time: {{time}}',
    yourDiscom: 'Your DISCOM',
    discomLead:
      'For bills, meters, outages, new connections and complaints — the only route that can actually resolve them.',
    tollFree: 'Toll free, all AP distribution companies',
    officialSites: 'Official websites',
    officialLead:
      'Authoritative sources for tariffs, payments and consumer services. These open in a new tab and are not operated by us.',
    beforeWriting:
      'Before writing in, it may be quicker to check the guides, which cover how bills are calculated, how to read each field on your bill, and what the tariff slabs mean. Our disclaimer explains the limits of what this tool can tell you.',
  },
  legalPage: {
    privacyEyebrow: 'Privacy',
    privacyTitle: 'Privacy Policy',
    privacyLead:
      'How this site handles data: what the calculator does and does not store, cookies, advertising, and your choices.',
    termsEyebrow: 'Terms',
    termsTitle: 'Terms of Service',
    termsLead:
      'The terms governing use of this site, including acceptable use, third-party links and limitation of liability.',
    disclaimerEyebrow: 'Disclaimer',
    disclaimerTitle: 'Disclaimer',
    disclaimerLead:
      'Important limitations of this tool: it is an unofficial estimator, not affiliated with APERC or any AP DISCOM.',
  },
  seo: {
    homeTitle: 'AP Electricity Bill Calculator – APERC FY 2026-27 LT Tariff',
    homeDesc:
      'Estimate your Andhra Pradesh electricity bill using APERC FY 2026-27 LT tariff rates. Covers domestic, commercial, industrial, agricultural and institutional categories with telescopic slabs and time-of-day rates.',
    payTitle: 'Pay AP Electricity Bill Online – Official DISCOM Links',
    payDesc:
      'Find your Andhra Pradesh DISCOM by district and open its official payment page. Unofficial redirect helper for APSPDCL, APCPDCL and APEPDCL, with helplines and payment steps.',
    guidesTitle: 'Guides to AP Electricity Bills and APERC Tariffs',
    guidesDesc:
      'Plain-language guides to Andhra Pradesh electricity billing — how bills are calculated, how telescopic slabs work, what APERC tariff orders contain, LT versus HT connections, and how to reduce your bill.',
    discomsTitle: 'AP Electricity Distribution Companies (DISCOMs) Explained',
    discomsDesc:
      'Reference pages for the three Andhra Pradesh distribution companies — APSPDCL, APCPDCL and APEPDCL — covering districts served, applicable APERC tariffs, payment channels and complaint escalation.',
    whatsNewTitle: 'What’s New – PM Surya Ghar and AP Electricity Updates',
    whatsNewDesc:
      'Updates relevant to Andhra Pradesh electricity consumers, including the PM Surya Ghar: Muft Bijli Yojana rooftop solar scheme and its implications for household bills.',
    aboutTitle: 'About the AP Electricity Bill Calculator',
    aboutDesc:
      'Who runs this site, where the APERC FY 2026-27 tariff data comes from, how the calculator works, its limitations, and our editorial and correction policy.',
    contactTitle: 'Contact Us – AP Electricity Bill Calculator',
    contactDesc:
      'Contact the AP Electricity Bill Calculator team to report a tariff error, a calculation problem or a broken link. Note that we cannot access your electricity account or resolve billing disputes.',
    privacyTitle: 'Privacy Policy – AP Electricity Bill Calculator',
    privacyDesc:
      'How this site handles data: what the calculator does and does not store, use of cookies and third-party advertising including Google AdSense, and your choices over personalised ads.',
    termsTitle: 'Terms of Service – AP Electricity Bill Calculator',
    termsDesc:
      'The terms governing use of the AP Electricity Bill Calculator, including acceptable use, intellectual property, third-party links, limitation of liability and changes to these terms.',
    disclaimerTitle: 'Disclaimer – AP Electricity Bill Calculator',
    disclaimerDesc:
      'Important limitations of this tool: it is an unofficial estimator not affiliated with APERC or any AP DISCOM, and estimates are not a substitute for your official electricity bill.',
  },
  tariff: {
    h: {
      monthlyUnits: 'Monthly Units',
      fixedCharge: 'Fixed Charge',
      energyRate: 'Energy Rate',
      customerCharge: 'Customer Charge',
      period: 'Period',
      hours: 'Hours',
      loadRange: 'Load Range',
      fixed: 'Fixed',
      category: 'Category',
      dpsRate: 'DPS Rate',
      serviceType: 'Service Type',
      charge: 'Charge',
      meterType: 'Meter Type',
      item: 'Item',
      plantType: 'Plant Type',
      rate: 'Rate',
    },
    domestic: {
      title: 'Domestic Tariff – Cat-I(A)',
      slabs: 'Telescopic Slab Rates',
      u0: '0 – 30 units',
      u31: '31 – 75 units',
      u76: '76 – 125 units',
      u126: '126 – 225 units',
      u226: '226 – 400 units',
      u400: 'Above 400 units',
      note: '* Fixed charge ₹75/kW for load above 75kW. Billing is telescopic — each slab rate applies only to units in that range.',
    },
    commercial: {
      title: 'Commercial Tariff – Cat-II',
      catA: 'Commercial – Cat-II(A)(i)',
      u0: '0 – 50 units',
      u51: '51 – 100 units',
      u101: '101 – 300 units',
      u301: '301 – 500 units',
      u500: 'Above 500 units',
      note: 'Min monthly: Single Phase ₹65, Three Phase ₹200. Fixed charge ₹275/kW for load >75kW.',
      other: 'Other Commercial Sub-categories',
      adv: 'Advertising Hoardings',
      fun: 'Function Halls / Auditoria',
      ev: 'EV Charging Stations',
      green: 'Green / Renewable Power',
      tod: 'Time-of-Day (ToD) – Commercial 10kW+',
      peak: 'Peak',
      offPeak: 'Off-Peak',
      nilFixed: 'NIL fixed',
      minMonth: 'Min ₹300/month',
    },
    industry: {
      title: 'Industrial Tariff – Cat-III',
      general: 'Industry General – Cat-III(A)',
      allHours: 'All hours',
      normal: 'Normal',
      peak: 'Peak (18–22h)',
      offPeak: 'Off-Peak (10–15h)',
      note: 'Poultry/dairy/pisciculture farms: ₹5.25/unit; Demand: ₹75/kW',
      other: 'Other Industrial Categories',
      seasonal: 'Seasonal Industries (Off-Season)',
      cottage: 'Cottage Industries ≤20HP',
    },
    agri: {
      title: 'Agriculture Tariff – Cat-V',
      corp: 'Agriculture – Corporate Farmers',
      nonCorp: 'Agriculture – Non-Corporate Farmers',
      salt: 'Salt Farming Units ≤15HP',
      aqua: 'Aquaculture & Animal Husbandry',
      agroCot: 'Agro-based Cottage Industries ≤20HP',
      lift: 'Govt/Private Lift Irrigation',
      withDsm: '₹3.50/kWh (with DSM)',
      noDsm: '₹4.50/kWh (no DSM)',
      freeQuota: 'FREE up to 1200 units/HP/year',
      urbanExcess: '₹6.40/unit (urban, above 1200)',
      nilFixed: 'NIL fixed',
      freeLift: 'Free up to 1200 units/HP/yr',
    },
    others: {
      title: 'Institutional & Others – Cat-IV',
      util: 'Utilities – Street Lighting / CPWS',
      genp: 'General Purpose – Govt / Charitable',
      relLt: 'Religious Places – ≤2kW',
      relGt: 'Religious Places – >2kW',
      tmpGen: 'Temporary Supply – General',
      tmpSub: 'Temporary Supply – Free/Subsidised',
      urgency: '+₹200 urgency',
    },
    charges: {
      title: 'Other Charges FY 2026-27',
      dps: 'Delayed Payment Surcharge',
      recon: 'Reconnection Charges',
      meter: 'Meter Testing Charges',
      misc: 'Miscellaneous',
      grid: 'Grid Support Charges',
      dpsDom: 'Cat-I(A) Domestic, Cat-III(D) Cottage, Cat-V(D)',
      dpsSmall: 'Cat-II(A)(i) <50 units, Cat-IV(C) <2kW',
      dpsOther: 'All other LT categories',
      dpsOtherRate: '5 paise per ₹100/day (min ₹150)',
      oh: 'LT Services – Overhead line (any category)',
      ug: 'LT Services – Underground cable',
      spMeter: 'AC Single-Phase Energy Meter',
      tpMeter: 'AC Three-Phase Energy Meter',
      trivector: 'Trivector Meter',
      appAgri: 'Application Registration Fee – Agricultural/Domestic',
      appOther: 'Application Registration Fee – Other Categories',
      changeSp: 'Changing meter (Single Phase, consumer request)',
      changeTp: 'Changing meter (Three Phase, consumer request)',
      inspect: 'Inspection / Supervision charges',
      urgency: 'Urgency charge (Temporary supply)',
      resealWc: 'Resealing – Whole Current Meter',
      resealCt: 'Resealing – CT Operated / Other Apparatus',
      convCpp: 'Conventional CPPs (parallel operation)',
      rePlant: 'Renewable Energy Plants (incl. waste heat, MSW, cogen)',
      rooftop: 'Rooftop Solar (net/gross metering)',
      cogen: 'Co-gen Sugar Mills',
    },
  },
};
