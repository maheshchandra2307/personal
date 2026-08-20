/**
 * Long-form editorial guides.
 *
 * Content is stored as structured blocks so a single renderer can lay out every
 * article, and so page titles/descriptions stay in one place for the sitemap and
 * the prerender step.
 *
 * Block shapes:
 *   { type: 'p',       text }
 *   { type: 'h3',      text }
 *   { type: 'ul',      items: [] }
 *   { type: 'ol',      items: [] }
 *   { type: 'table',   head: [], rows: [[]], note? }
 *   { type: 'callout', title, text }
 */

export const GUIDES = [
  {
    slug: 'how-ap-electricity-bills-are-calculated',
    category: 'Billing basics',
    title: 'How AP electricity bills are calculated',
    metaTitle: 'How AP Electricity Bills Are Calculated (FY 2026-27 Example)',
    description:
      'A step-by-step breakdown of how an Andhra Pradesh electricity bill is built from meter reading to final amount, with a fully worked 240-unit domestic example using APERC FY 2026-27 LT rates.',
    excerpt:
      'Meter reading, category, telescopic slabs, fixed and customer charges — followed end to end with a worked 240-unit domestic example.',
    readingTime: '9 min read',
    updated: '2026-08-20',
    intro:
      'Most people look at an electricity bill, read the total, and pay it. But an Andhra Pradesh LT bill is built from a small number of clearly defined parts, and once you know what those parts are you can reproduce almost the entire amount yourself. This guide walks through the calculation the way a DISCOM billing system does it, using the APERC FY 2026-27 low-tension tariff schedule that this site is built on.',
    sections: [
      {
        id: 'components',
        heading: 'The four parts of an AP electricity bill',
        blocks: [
          {
            type: 'p',
            text: 'Whatever your consumer category, an LT bill in Andhra Pradesh is assembled from the same building blocks. Understanding which block a rupee belongs to is the single most useful thing you can learn about your bill.',
          },
          {
            type: 'table',
            head: ['Component', 'What it pays for', 'What it depends on'],
            rows: [
              [
                'Energy charge',
                'The electricity you actually consumed',
                'Units (kWh) consumed in the billing period, priced through slabs',
              ],
              [
                'Fixed charge',
                'The cost of keeping capacity available to you',
                'Your sanctioned or connected load in kW (or HP for some agricultural categories)',
              ],
              [
                'Customer charge',
                'Metering, reading, billing and collection overheads',
                'A flat monthly amount that steps up with consumption',
              ],
              [
                'Other charges',
                'Surcharges, duties and one-off items',
                'Delayed payment surcharge, electricity duty, meter rent, arrears, reconnection fees',
              ],
            ],
            note: 'The calculator on this site estimates the first three components. The fourth varies by consumer and appears on your official bill.',
          },
          {
            type: 'p',
            text: 'The energy charge is almost always the largest part of a domestic bill, which is why slab structure matters so much. Fixed and customer charges are usually small in absolute terms for a household, but they are the reason a bill is never zero even in a month when you were away.',
          },
        ],
      },
      {
        id: 'step-1-units',
        heading: 'Step 1: Establish how many units you used',
        blocks: [
          {
            type: 'p',
            text: 'A unit of electricity is one kilowatt-hour (kWh) — a 1,000-watt appliance running for one hour. Your meter counts these cumulatively, so consumption for a billing period is simply the present reading minus the previous reading.',
          },
          {
            type: 'callout',
            title: 'Units consumed',
            text: 'Present meter reading − Previous meter reading = Units billed for the period',
          },
          {
            type: 'p',
            text: 'Both readings, along with the dates they were taken, are printed on your bill. Check the dates rather than assuming a clean calendar month: reading cycles drift by a few days, and a 34-day cycle will show more units than a 27-day cycle even if your habits did not change at all. This is one of the most common reasons a bill feels unexpectedly high.',
          },
          {
            type: 'p',
            text: 'If the meter could not be read, the DISCOM may raise an average or provisional bill based on your recent history. That bill is not wrong as such, but it will be adjusted later once an actual reading is taken, so a provisional month followed by a corrective month can look alarming in isolation.',
          },
        ],
      },
      {
        id: 'step-2-category',
        heading: 'Step 2: Identify your exact tariff category',
        blocks: [
          {
            type: 'p',
            text: 'APERC does not price all electricity the same way. It defines consumer categories, each with its own rates, and your bill prints the category that has been assigned to your service. Getting this wrong is the fastest way to produce a meaningless estimate, because the rate for the same 200 units can nearly double between categories.',
          },
          {
            type: 'table',
            head: ['Category', 'Typical consumer', 'Rate character'],
            rows: [
              [
                'Cat-I(A) Domestic',
                'Homes and residential apartments',
                'Telescopic slabs from ₹1.90 to ₹9.75 per unit',
              ],
              [
                'Cat-II(A)(i) Commercial',
                'Shops, offices, clinics, hospitals',
                'Telescopic slabs from ₹5.40 to ₹9.95 per unit',
              ],
              [
                'Cat-III(A) Industry',
                'LT industrial units up to 150 kW',
                'Flat ₹6.70 per unit, with time-of-day variation above 15 kW',
              ],
              [
                'Cat-IV Institutional',
                'Street lighting, government, religious places',
                'Flat rates from ₹3.85 to ₹7.00 per unit',
              ],
              [
                'Cat-V Agriculture',
                'Farm pumpsets, aquaculture, lift irrigation',
                'Free quota for eligible farmers; concessional flat rates otherwise',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A common trap is assuming that a shop attached to a house is billed as domestic, or that a small workshop qualifies as cottage industry. Categories are assigned by the DISCOM based on the purpose of use and the terms of your connection, not by what seems reasonable. If you believe your category is wrong, that is a question for your section office, not something to work around in a calculator.',
          },
        ],
      },
      {
        id: 'step-3-slabs',
        heading: 'Step 3: Apply the slabs telescopically',
        blocks: [
          {
            type: 'p',
            text: 'Domestic and commercial LT tariffs in Andhra Pradesh are telescopic. This means your units are sliced across the slab bands, and each slice is priced at that band’s rate. You are never charged the top rate on all your units — only on the units that fall above the previous boundary.',
          },
          {
            type: 'p',
            text: 'These are the domestic energy rates in the FY 2026-27 schedule used by this site:',
          },
          {
            type: 'table',
            head: ['Monthly units', 'Energy rate', 'Customer charge'],
            rows: [
              ['0 – 30', '₹1.90 per unit', '₹25 per month'],
              ['31 – 75', '₹3.00 per unit', '₹30 per month'],
              ['76 – 125', '₹4.50 per unit', '₹45 per month'],
              ['126 – 225', '₹6.00 per unit', '₹50 per month'],
              ['226 – 400', '₹8.75 per unit', '₹55 per month'],
              ['Above 400', '₹9.75 per unit', '₹55 per month'],
            ],
            note: 'Domestic fixed charge is ₹10 per kW of load per month (₹75 per kW above 75 kW).',
          },
          {
            type: 'p',
            text: 'Note that the customer charge is not telescopic. It is a single flat amount chosen by looking at your total consumption for the month, which is why it jumps in steps rather than accumulating.',
          },
        ],
      },
      {
        id: 'worked-example',
        heading: 'A fully worked example: 240 units, 2 kW domestic',
        blocks: [
          {
            type: 'p',
            text: 'Take a household with a sanctioned load of 2 kW that consumed 240 units in the billing month. The energy charge is built band by band.',
          },
          {
            type: 'table',
            head: ['Band', 'Units in band', 'Rate', 'Amount'],
            rows: [
              ['0 – 30', '30 units', '₹1.90', '₹57.00'],
              ['31 – 75', '45 units', '₹3.00', '₹135.00'],
              ['76 – 125', '50 units', '₹4.50', '₹225.00'],
              ['126 – 225', '100 units', '₹6.00', '₹600.00'],
              ['226 – 240', '15 units', '₹8.75', '₹131.25'],
              ['Energy charge', '240 units', '—', '₹1,148.25'],
            ],
          },
          {
            type: 'p',
            text: 'Now add the other two components. The fixed charge is 2 kW × ₹10, which is ₹20. Because total consumption of 240 units sits above the 225-unit threshold, the customer charge is ₹55.',
          },
          {
            type: 'table',
            head: ['Component', 'Amount'],
            rows: [
              ['Energy charge', '₹1,148.25'],
              ['Fixed charge (2 kW × ₹10)', '₹20.00'],
              ['Customer charge', '₹55.00'],
              ['Estimated total', '₹1,223.25'],
            ],
          },
          {
            type: 'p',
            text: 'The effective average works out to roughly ₹5.10 per unit — a long way below the ₹8.75 top band this household reached. That gap is the whole point of a telescopic structure, and it is why quoting "the rate" for electricity in Andhra Pradesh without saying how much you consume is meaningless.',
          },
          {
            type: 'h3',
            text: 'What crossing a boundary actually costs',
          },
          {
            type: 'p',
            text: 'People often fear slab boundaries more than they should. Consider the same household at exactly 400 units versus 410 units. At 400 units the energy charge is ₹2,548.25. At 410 units it is ₹2,645.75. The extra ten units cost ₹97.50, because they are priced at ₹9.75 — the highest band — and nothing already billed gets repriced.',
          },
          {
            type: 'p',
            text: 'So crossing a boundary is not a cliff that re-rates your whole bill; it only makes your next units more expensive. That is still a real effect worth managing, but it is a gradient rather than a penalty.',
          },
        ],
      },
      {
        id: 'other-charges',
        heading: 'Step 4: Add the charges the calculator cannot know',
        blocks: [
          {
            type: 'p',
            text: 'The remainder of your official bill comes from items specific to your account and your payment history. None of these can be predicted from units and load alone.',
          },
          {
            type: 'ul',
            items: [
              'Delayed payment surcharge (DPS) if a previous bill was paid after the due date. For domestic and small commercial services this is ₹25 per month; other LT categories are charged 5 paise per ₹100 per day, subject to a ₹150 minimum.',
              'Electricity duty and any other statutory levy applicable to your category.',
              'Meter rent, where your service uses a DISCOM-owned meter on a rental basis.',
              'Arrears carried forward from earlier unpaid bills, and adjustments reversing an earlier provisional bill.',
              'One-off items such as reconnection charges (₹100 for overhead LT services, ₹300 for underground cable), meter testing fees, or additional consumption deposit demands.',
              'Subsidy credits, where the state government has notified support for your category under its powers to subsidise tariffs.',
            ],
          },
          {
            type: 'callout',
            title: 'Why estimates and bills diverge',
            text: 'If your estimate is close but not exact, the difference is almost always duty, meter rent, DPS or an arrear line. If it is wildly different, the likely causes are a wrong category, a wrong load, or a billing period that is not one month.',
          },
        ],
      },
      {
        id: 'check-your-own',
        heading: 'Checking your own bill',
        blocks: [
          {
            type: 'ol',
            items: [
              'Find the units billed and the reading dates on your bill, and confirm the period is roughly one month.',
              'Find your category code and your sanctioned or connected load in kW.',
              'Enter those into the calculator on this site and compare the energy, fixed and customer charge lines individually rather than only the total.',
              'Account for the remaining difference using the duty, meter rent, DPS and arrear lines printed on your bill.',
              'If a line still cannot be explained — particularly a large arrear or a category that does not match your usage — raise it with your DISCOM on 1912 or at your section office.',
            ],
          },
          {
            type: 'p',
            text: 'Doing this once teaches you more about your electricity costs than a year of paying totals. It also makes it obvious which behaviour changes are worth the effort: if your energy charge is ₹1,148 and your fixed charge is ₹20, there is no point negotiating your sanctioned load.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does the first slab rate apply to everyone?',
        a: 'Yes, for domestic consumers on a telescopic tariff. Every household is billed ₹1.90 for its first 30 units regardless of how much it consumes in total, because the bands apply to slices of consumption rather than to the consumer as a whole.',
      },
      {
        q: 'Why is there a charge when I used no electricity?',
        a: 'Fixed and customer charges are levied for keeping capacity and a metered connection available to you, so they apply even in a month with zero or near-zero consumption. Some categories also have a specified minimum monthly charge.',
      },
      {
        q: 'Is a two-month bill just double a one-month bill?',
        a: 'No. Slab thresholds are defined per month, so a combined period generally has to be handled on a pro-rata basis rather than by simply pushing all the units through one month of slabs. Compare the reading dates on your bill before assuming the total is wrong.',
      },
    ],
    related: [
      'understanding-telescopic-tariff-slabs',
      'how-to-read-your-ap-electricity-bill',
      'how-to-reduce-your-electricity-bill',
    ],
  },

  {
    slug: 'understanding-telescopic-tariff-slabs',
    category: 'Billing basics',
    title: 'Understanding telescopic tariff slabs',
    metaTitle: 'Telescopic Electricity Tariff Slabs in AP, Explained Simply',
    description:
      'What a telescopic electricity tariff means in Andhra Pradesh, how it differs from flat and non-telescopic billing, and why your average rate per unit is always lower than your top slab rate.',
    excerpt:
      'Why your average rate per unit is always lower than your highest slab rate — and where the telescopic structure stops applying.',
    readingTime: '7 min read',
    updated: '2026-08-20',
    intro:
      'Telescopic is one of those pieces of utility vocabulary that never gets explained to the people it affects. It appears in APERC tariff orders and on DISCOM rate tables, and it decides how much you pay for the units you consume. The concept itself is simple, and it is worth ten minutes of your time because it changes how you should think about reducing your bill.',
    sections: [
      {
        id: 'what-it-means',
        heading: 'What telescopic actually means',
        blocks: [
          {
            type: 'p',
            text: 'A telescopic tariff prices consumption in layers. The slab table defines bands of monthly units, each with its own rate, and your consumption is cut into pieces that fill those bands in order. Each piece is billed at the rate of the band it lands in.',
          },
          {
            type: 'p',
            text: 'The name comes from the way the bands nest inside each other like the sections of a collapsing telescope: reaching a higher band does not replace the lower ones, it extends past them. Every consumer pays the cheapest rate on their first units, and only heavy users ever reach the expensive bands at all.',
          },
          {
            type: 'callout',
            title: 'The rule in one line',
            text: 'A higher slab rate applies only to the units above that slab’s lower boundary — never to the units you have already been billed for at cheaper rates.',
          },
        ],
      },
      {
        id: 'versus-flat',
        heading: 'Telescopic versus non-telescopic billing',
        blocks: [
          {
            type: 'p',
            text: 'The alternative approach — non-telescopic, sometimes called slab-based-on-total billing — looks at your total consumption, picks the single rate for the band it falls in, and applies that rate to every unit. The difference is dramatic. Take 240 units of domestic consumption under the FY 2026-27 rates.',
          },
          {
            type: 'table',
            head: ['Method', 'How it prices 240 units', 'Energy charge'],
            rows: [
              [
                'Telescopic (actual)',
                '30 units at ₹1.90, 45 at ₹3.00, 50 at ₹4.50, 100 at ₹6.00, 15 at ₹8.75',
                '₹1,148.25',
              ],
              [
                'Non-telescopic (hypothetical)',
                'All 240 units at the ₹8.75 band rate',
                '₹2,100.00',
              ],
            ],
            note: 'Illustrative comparison. Domestic LT supply in the schedule used by this site is telescopic.',
          },
          {
            type: 'p',
            text: 'Nearly ₹1,000 a month separates the two methods for the same electricity. This is also why third-party "AP electricity rate" posts that simply multiply your units by a single slab rate produce numbers so far above your real bill.',
          },
          {
            type: 'p',
            text: 'A third structure is the genuinely flat tariff, where a category has one rate for all units and no bands at all. Several categories work this way — LT industry up to 15 kW at ₹6.70 per unit, EV charging stations at ₹6.70, cottage industries at ₹3.75. For these, consumption and cost move in a straight line and there is nothing to optimise around thresholds.',
          },
        ],
      },
      {
        id: 'average-rate',
        heading: 'Your average rate is the number that matters',
        blocks: [
          {
            type: 'p',
            text: 'Because of the layering, the useful figure is not your top band rate but your effective average: total bill divided by units consumed. It tells you what an additional or avoided unit is roughly worth to you, and it is the only fair way to compare your costs with someone else’s.',
          },
          {
            type: 'table',
            head: ['Monthly units', 'Energy charge', 'Average per unit'],
            rows: [
              ['50 units', '₹117.00', '₹2.34'],
              ['100 units', '₹304.50', '₹3.05'],
              ['200 units', '₹867.00', '₹4.34'],
              ['240 units', '₹1,148.25', '₹4.78'],
              ['400 units', '₹2,548.25', '₹6.37'],
            ],
            note: 'Energy charge only, excluding fixed and customer charges, using FY 2026-27 domestic rates.',
          },
          {
            type: 'p',
            text: 'Notice how gently the average climbs even as the marginal rate quadruples. A household at 400 units is paying an average of about ₹6.37 per unit while its last units cost ₹8.75. The marginal rate is what you save by cutting consumption; the average is what you are paying overall. Confusing the two leads to bad decisions in both directions.',
          },
        ],
      },
      {
        id: 'boundaries',
        heading: 'How much a slab boundary really matters',
        blocks: [
          {
            type: 'p',
            text: 'Since only the units above a boundary are repriced, crossing one is not the disaster it is sometimes made out to be. Ten units past the 400-unit mark cost ₹97.50 instead of ₹87.50 — an extra ₹10.',
          },
          {
            type: 'p',
            text: 'But the marginal rate itself is worth attention. Once you are consistently in the 226–400 band, every unit you avoid saves ₹8.75, which is more than four times what a unit saves a household sitting in the 31–75 band. Efficiency measures that would never pay back for a low user can pay back quickly for a high one. This is the practical takeaway: know your band, and let it tell you how hard to work at saving.',
          },
        ],
      },
      {
        id: 'exceptions',
        heading: 'Where the structure changes',
        blocks: [
          {
            type: 'p',
            text: 'Telescopic slabs are not the whole tariff, and several things sit outside them.',
          },
          {
            type: 'ul',
            items: [
              'Fixed charges are driven by your sanctioned load in kW, not by units, so they do not change when you consume less.',
              'Customer charges are a single flat step chosen by your total monthly consumption, not sliced across bands.',
              'Flat-rate categories such as LT industry up to 15 kW, EV charging and cottage industry have no bands at all.',
              'Time-of-day categories vary the rate by the hour of consumption rather than by cumulative units, so when you use power matters more than how much.',
              'Agricultural categories with a free entitlement work on an annual quota per HP, with only the excess billed.',
              'Minimum monthly charges can override the calculated total for some commercial and institutional services.',
            ],
          },
          {
            type: 'h3',
            text: 'Multi-month and part-month periods',
          },
          {
            type: 'p',
            text: 'Slab thresholds are written per month. When a billing period covers substantially more or less than a month — a delayed reading, a new connection energised mid-cycle, a spell of provisional billing — the thresholds have to be scaled to the period rather than applied as if it were a single month. If they were not, a two-month reading would artificially push a modest consumer into expensive bands. If a bill covering an unusual period looks wrong, check the reading dates first and raise it with your DISCOM rather than assuming the slab rates changed.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'If I cross into a higher slab, is my whole bill recalculated at the higher rate?',
        a: 'No. Under a telescopic tariff only the units above the boundary are billed at the higher rate. Everything below it stays priced at the lower band rates.',
      },
      {
        q: 'Why is my average rate lower than every rate in the table except the first?',
        a: 'Because your consumption is spread across the bands. A large share of your units are billed in the cheaper lower bands, which pulls the average down well below your highest band rate.',
      },
      {
        q: 'Are commercial tariffs telescopic too?',
        a: 'The commercial LT slabs in the FY 2026-27 schedule used here are applied telescopically, starting at ₹5.40 per unit and rising to ₹9.95. The bands are wider and start higher than domestic ones, and a minimum monthly charge may apply.',
      },
    ],
    related: [
      'how-ap-electricity-bills-are-calculated',
      'aperc-tariff-order-explained',
      'how-to-reduce-your-electricity-bill',
    ],
  },

  {
    slug: 'aperc-tariff-order-explained',
    category: 'Tariffs and regulation',
    title: 'Understanding APERC tariff orders',
    metaTitle:
      'APERC Tariff Orders Explained: How AP Electricity Rates Are Set',
    description:
      'How the Andhra Pradesh Electricity Regulatory Commission sets electricity tariffs — the annual revenue requirement filing, public hearings, what a tariff order contains, and why rates change from year to year.',
    excerpt:
      'Who decides your rate, the annual filing and hearing cycle, and what is actually inside a tariff order document.',
    readingTime: '8 min read',
    updated: '2026-08-20',
    intro:
      'Your DISCOM sends the bill, but it does not choose the rates. Electricity tariffs in Andhra Pradesh are set by an independent regulator through a public, documented annual process, and the resulting document — the tariff order — is the legal source for every figure on this site. Knowing how that process works tells you where rates come from, why they move, and how to verify a rate for yourself.',
    sections: [
      {
        id: 'who',
        heading: 'Who APERC is',
        blocks: [
          {
            type: 'p',
            text: 'The Andhra Pradesh Electricity Regulatory Commission is the state electricity regulator. It is a statutory body, independent of both the distribution utilities it regulates and the state government, established during the electricity sector reforms of the late 1990s that unbundled the old State Electricity Board into separate generation, transmission and distribution companies.',
          },
          {
            type: 'p',
            text: 'Its powers today come from the Electricity Act, 2003. Among other functions, the Commission determines the tariffs at which electricity is supplied to consumers, specifies the terms and conditions for that determination, sets standards of performance for licensees, and hears certain consumer grievances. The important consequence for you is that a DISCOM cannot raise your rate on its own initiative.',
          },
          {
            type: 'ul',
            items: [
              'Section 61 sets out the principles the Commission must follow — recovering costs reasonably, safeguarding consumer interests, rewarding efficiency, promoting renewables.',
              'Section 62 gives the Commission the power to determine tariffs for supply and transmission.',
              'Section 64 lays down the procedure, including the requirement to publish an application and consider objections before issuing an order.',
              'Section 65 covers the situation where the state government wants to subsidise a category, and requires it to pay that subsidy in advance.',
            ],
          },
        ],
      },
      {
        id: 'cycle',
        heading: 'The annual cycle',
        blocks: [
          {
            type: 'p',
            text: 'Tariffs are revisited every financial year on a broadly predictable schedule.',
          },
          {
            type: 'ol',
            items: [
              'Filing. The distribution companies submit an Aggregate Revenue Requirement for the coming year — their forecast of what it will cost to buy, transmit and distribute power, plus permitted returns — alongside proposed retail tariffs and their expected revenue.',
              'Scrutiny and public notice. The Commission examines the filing for completeness and consistency with its regulations, then publishes it so that consumers can see what is being asked for.',
              'Objections. Consumers, industry associations, farmer bodies and other stakeholders file written objections and suggestions within the notified window. Anyone affected may participate; this is the formal opportunity for public input.',
              'Public hearings. The Commission holds hearings at which objectors and the utilities are heard on the record.',
              'Tariff order. The Commission issues a reasoned order determining the category-wise tariffs and other charges, along with the date from which they take effect.',
              'True-up. After the year ends, actual costs and revenues are reconciled against what was approved, and the difference is dealt with in a later order.',
            ],
          },
          {
            type: 'p',
            text: 'Orders normally take effect from the start of the financial year in April, though the exact effective date is stated in each order. The LT schedule bundled with this site is the FY 2026-27 schedule effective 25 March 2026.',
          },
        ],
      },
      {
        id: 'contents',
        heading: 'What is inside a tariff order',
        blocks: [
          {
            type: 'p',
            text: 'Tariff orders are long documents, but the part most consumers need is the retail supply tariff schedule at the back. It is organised by category and, for each one, specifies:',
          },
          {
            type: 'ul',
            items: [
              'The category definition — precisely which consumers and which end uses belong in it. This matters more than people expect, and is where disputes usually originate.',
              'Energy charges, either as telescopic slabs or as a flat rate per unit.',
              'Fixed or demand charges per kW, kVA or HP, and how load is to be reckoned.',
              'Customer charges, and minimum monthly charges where they apply.',
              'Time-of-day rate adjustments, with the peak and off-peak hours spelled out.',
              'Conditions attached to any free or concessional entitlement.',
            ],
          },
          {
            type: 'p',
            text: 'A separate schedule of miscellaneous and other charges covers items that are not per-unit: delayed payment surcharge, reconnection charges, meter testing fees, application registration fees, resealing charges, and grid support charges for consumers who run captive or rooftop generation in parallel with the grid. The Other Charges tab on this site reproduces that schedule for FY 2026-27.',
          },
        ],
      },
      {
        id: 'why-rates-change',
        heading: 'Why rates change from year to year',
        blocks: [
          {
            type: 'p',
            text: 'Retail tariffs are downstream of the cost of supplying electricity, and several parts of that cost move independently of anything a DISCOM controls.',
          },
          {
            type: 'ul',
            items: [
              'Power purchase cost. Buying electricity from generators is by far the largest line in a DISCOM’s costs, and it shifts with fuel prices, plant availability and the contracted generation mix.',
              'Demand growth and mix. More consumption, and a different balance between subsidised and full-tariff categories, changes the revenue a given tariff raises.',
              'Network costs. Transmission and distribution charges, capital investment and permitted returns feed into the requirement.',
              'Losses. Distribution losses that the Commission does not accept as reasonable are not passed through, which is one of the levers the regulator uses to push for efficiency.',
              'Fuel and power purchase cost adjustment. Volatile fuel and market power costs are handled through a periodic adjustment mechanism rather than by reopening the annual tariff, so a charge of this kind can appear between tariff orders.',
              'Subsidy. Where the state government notifies a subsidy for a category, that changes what the consumer pays without necessarily changing the underlying determined tariff.',
              'True-up. Reconciling an earlier year’s approved figures with actuals can add to or reduce a later year’s requirement.',
            ],
          },
          {
            type: 'callout',
            title: 'A useful mental model',
            text: 'The tariff order decides how a large, mostly externally driven cost is shared between consumer categories. Arguments during the public process are usually less about the total and more about who carries which share of it.',
          },
        ],
      },
      {
        id: 'verify',
        heading: 'How to verify a rate yourself',
        blocks: [
          {
            type: 'ol',
            items: [
              'Note the exact category code printed on your electricity bill.',
              'Open the current retail supply tariff order for the relevant financial year on the APERC website and go to the LT schedule.',
              'Find your category and read the energy, fixed and customer charge entries, along with any conditions or minimum charge.',
              'Confirm the effective date of the order covers your billing period — rates that changed mid-cycle apply from the date stated in the order, not from the date you noticed.',
              'Compare against what this site shows. Where they differ, the tariff order is authoritative and this site is not.',
            ],
          },
          {
            type: 'p',
            text: 'That last point is not a formality. This site is an independent tool that reproduces a published schedule for convenience, and schedules are amended. If a rate here disagrees with the order, or with your bill, treat the official document as correct — and please tell us, so the discrepancy can be fixed.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can my DISCOM change my tariff by itself?',
        a: 'No. Retail tariffs for supply in Andhra Pradesh are determined by APERC through a public process, and DISCOMs bill according to the schedule the Commission approves. Charges of a different kind, such as statutory duties, arise separately.',
      },
      {
        q: 'Can ordinary consumers take part in the tariff process?',
        a: 'Yes. Filings are published and any affected person can submit written objections within the notified window and be heard at the public hearings. Individual consumers, associations and interest groups all participate.',
      },
      {
        q: 'Do all three AP DISCOMs charge the same rates?',
        a: 'Retail tariffs are determined category-wise for the state, so a domestic consumer in APEPDCL territory faces the same schedule as one in APSPDCL or APCPDCL territory. What differs between DISCOMs is service administration — offices, portals, helplines and payment channels.',
      },
    ],
    related: [
      'how-ap-electricity-bills-are-calculated',
      'understanding-telescopic-tariff-slabs',
      'lt-vs-ht-electricity-connections',
    ],
  },

  {
    slug: 'lt-vs-ht-electricity-connections',
    category: 'Connections',
    title: 'Difference between LT and HT connections',
    metaTitle:
      'LT vs HT Electricity Connections in Andhra Pradesh: Key Differences',
    description:
      'Low-tension and high-tension electricity connections compared — supply voltage, load limits, how each is metered and billed, demand charges, power factor, and when a consumer needs to move from LT to HT.',
    excerpt:
      'Supply voltage, load thresholds, demand charges, power factor and metering — what changes when a consumer moves from LT to HT.',
    readingTime: '8 min read',
    updated: '2026-08-20',
    intro:
      'Every electricity consumer in Andhra Pradesh is either a low-tension or a high-tension consumer, and the distinction runs deeper than a label. It determines the voltage you are supplied at, the equipment you have to own and maintain, how your consumption is measured, and the structure of your bill. If you run a growing business, it eventually becomes a decision you have to make deliberately.',
    sections: [
      {
        id: 'voltage',
        heading: 'The distinction is about supply voltage',
        blocks: [
          {
            type: 'p',
            text: 'Low tension means the DISCOM delivers power to you at utilisation voltage — nominally 230 volts single-phase or 400 volts three-phase. The distribution transformer that steps the voltage down belongs to the utility and is shared among consumers in your area. You connect your wiring and start using power.',
          },
          {
            type: 'p',
            text: 'High tension means you are supplied at a distribution voltage — commonly 11 kV, and at 33 kV or above for larger consumers — and you take responsibility for stepping it down. That means your own substation: transformer, switchgear, protection, earthing, and the statutory approvals and maintenance that come with owning it.',
          },
          {
            type: 'callout',
            title: 'The short version',
            text: 'LT consumers buy electricity ready to use. HT consumers buy it at a higher voltage, cheaper per unit, and own the equipment that makes it usable.',
          },
        ],
      },
      {
        id: 'thresholds',
        heading: 'Where the boundary falls',
        blocks: [
          {
            type: 'p',
            text: 'The boundary is set by load. Small loads are supplied at LT because it would be absurd to ask a household to run a substation. Large loads are supplied at HT because drawing that much current at 400 volts would overload the LT network and cause unacceptable losses and voltage drop.',
          },
          {
            type: 'p',
            text: 'In the current AP LT schedule, the industrial LT categories extend up to 150 kW, with the fixed charge stepping up sharply beyond 75 kW — from ₹75 to ₹275 per kW per month for the relevant categories. That escalation is a deliberate signal: as load grows, LT supply becomes progressively less attractive, and beyond the LT ceiling a consumer moves to HT at 11 kV. The exact threshold and conditions applicable to a specific connection are governed by the tariff order and the DISCOM’s supply conditions, so confirm them with your DISCOM before planning around a number.',
          },
          {
            type: 'callout',
            title: 'Scope of this site',
            text: 'The calculator and tariff tables here cover LT categories only. HT tariffs involve demand charges, kVAh billing and power factor adjustments that need your recorded maximum demand and metering data, and are not estimated by this tool.',
          },
        ],
      },
      {
        id: 'billing',
        heading: 'How the billing differs',
        blocks: [
          {
            type: 'p',
            text: 'This is where the practical difference shows up. An LT domestic or commercial bill is driven overwhelmingly by units consumed, with a modest load-based fixed charge. An HT bill has two components of comparable weight, and one of them does not depend on consumption at all.',
          },
          {
            type: 'table',
            head: ['Aspect', 'LT supply', 'HT supply'],
            rows: [
              [
                'Supply voltage',
                '230 V single-phase, 400 V three-phase',
                '11 kV and above',
              ],
              [
                'Step-down transformer',
                'Owned and maintained by the DISCOM',
                'Owned and maintained by the consumer',
              ],
              [
                'Energy charge basis',
                'Mostly kWh, telescopic slabs or flat rates',
                'Typically kVAh, generally a flat rate per unit',
              ],
              [
                'Capacity charge',
                'Fixed charge on sanctioned or connected load in kW',
                'Demand charge on contracted or recorded maximum demand in kVA',
              ],
              [
                'Power factor',
                'Not usually billed on for small consumers',
                'Penalised when poor, sometimes incentivised when good',
              ],
              [
                'Metering',
                'Single or three-phase energy meter',
                'Trivector or ABT-class meter recording demand, kVAh and time blocks',
              ],
              [
                'Per-unit cost',
                'Higher, particularly in upper domestic and commercial slabs',
                'Lower, offset by demand charges and self-owned infrastructure',
              ],
            ],
          },
          {
            type: 'h3',
            text: 'Demand charges and why they hurt',
          },
          {
            type: 'p',
            text: 'An HT consumer contracts for a maximum demand and is billed for it whether or not it is used. If your recorded demand exceeds the contracted figure, penal rates typically apply. So an HT consumer manages two things at once: total consumption, and the peak at which that consumption is drawn. A factory that runs every large motor simultaneously for ten minutes a month can pay for that peak all year. Staggering startups and controlling peaks is real money.',
          },
          {
            type: 'h3',
            text: 'kVAh billing and power factor',
          },
          {
            type: 'p',
            text: 'HT energy charges are commonly levied on kVAh — apparent energy — rather than kWh. The difference between the two is your power factor, which reflects how much of the current you draw does useful work. Inductive loads such as motors degrade it. Billing on kVAh means a poor power factor directly inflates your bill, which is why HT consumers install capacitor banks: correcting power factor reduces billed units without reducing production. LT consumers, billed on kWh, generally see no such direct benefit.',
          },
        ],
      },
      {
        id: 'choosing',
        heading: 'Deciding between them',
        blocks: [
          {
            type: 'p',
            text: 'For a household, a shop or a small workshop there is no decision — LT is the only sensible option. The question becomes real for a growing commercial or industrial consumer approaching the LT ceiling. Points worth weighing:',
          },
          {
            type: 'ul',
            items: [
              'Load factor. HT rewards steady, high utilisation, because the demand charge is spread over more units. A high peak with low overall consumption is the worst case.',
              'Capital cost. A substation, switchgear and protection are a substantial upfront investment, plus space and statutory clearances.',
              'Operating responsibility. Transformer maintenance, testing and the risk of a failure becoming your outage all move to you.',
              'Reliability and voltage quality. HT consumers are often less exposed to LT network disturbances, which matters for sensitive equipment.',
              'Growth headroom. If your load will keep rising, migrating once is better than repeatedly straining an LT connection.',
              'Power factor. If your loads are heavily inductive, budget for correction equipment from the start rather than discovering it on a bill.',
            ],
          },
          {
            type: 'p',
            text: 'Run the arithmetic on your own numbers before committing. A consumer with a modest load factor can find that lower per-unit HT rates are wiped out by demand charges. Ask your DISCOM for the applicable HT schedule and model it against twelve months of your actual demand and consumption data, not against a typical month.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is HT electricity always cheaper?',
        a: 'The per-unit energy rate is lower, but HT bills add demand charges based on contracted demand and may be levied on kVAh, and you carry the capital and maintenance cost of your own substation. Whether it works out cheaper depends mainly on your load factor.',
      },
      {
        q: 'Does this calculator cover HT connections?',
        a: 'No. It covers LT categories from the APERC FY 2026-27 LT schedule. HT estimation needs contracted demand, recorded maximum demand, power factor and kVAh data, and is outside the scope of this tool.',
      },
      {
        q: 'What voltage is a normal home supplied at?',
        a: 'Indian domestic supply is nominally 230 volts single-phase. Larger homes with higher sanctioned load may take a three-phase LT connection at nominally 400 volts.',
      },
      {
        q: 'How do I know whether my connection is LT or HT?',
        a: 'Your bill states the category and supply voltage. If you do not own a step-down transformer and your meter is an ordinary single or three-phase energy meter, you are almost certainly an LT consumer.',
      },
    ],
    related: [
      'aperc-tariff-order-explained',
      'how-ap-electricity-bills-are-calculated',
      'how-to-reduce-your-electricity-bill',
    ],
  },

  {
    slug: 'how-to-read-your-ap-electricity-bill',
    category: 'Billing basics',
    title: 'How to read your AP electricity bill',
    metaTitle: 'How to Read Your AP Electricity Bill: Every Field Explained',
    description:
      'A field-by-field guide to an Andhra Pradesh electricity bill — service number, meter readings, category code, connected load, delayed payment surcharge, arrears and additional deposits — plus how to spot billing errors.',
    excerpt:
      'Service number, category code, connected load, ACD, DPS and arrears — what each field means and which ones signal a problem.',
    readingTime: '8 min read',
    updated: '2026-08-20',
    intro:
      'An electricity bill packs a surprising amount of information into a small piece of paper, and most of it goes unread. Yet almost every billing dispute can be identified from fields that are printed right there. This guide goes through an Andhra Pradesh LT bill field by field and points out which entries deserve a second look each month.',
    sections: [
      {
        id: 'identity',
        heading: 'Fields that identify your connection',
        blocks: [
          {
            type: 'table',
            head: ['Field', 'What it means'],
            rows: [
              [
                'Service number / USC number',
                'Your unique service connection number, the identifier for every payment, complaint and online lookup. AP service numbers are commonly 13 digits. Keep it saved somewhere.',
              ],
              [
                'Consumer name and address',
                'The registered holder of the connection. This is the name a transfer of ownership has to change; paying the bills does not by itself make a connection yours.',
              ],
              [
                'Section / ERO / division',
                'The DISCOM office that administers your connection. This is where you go for category corrections, load changes and meter complaints.',
              ],
              [
                'Category code',
                'The APERC tariff category applied to your service, such as domestic, commercial or industrial. Every rate on your bill follows from this field.',
              ],
              [
                'Connected / sanctioned load',
                'The load in kW your connection is approved for. It drives your fixed charge, and exceeding it materially is a compliance issue as well as a safety one.',
              ],
              [
                'Meter number',
                'The serial number of the installed meter. Check it against the physical meter after any replacement.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Two of these are worth a deliberate check. If the category code does not match how the premises is actually used, your rates are wrong in one direction or the other and it needs correcting at the section office. If the sanctioned load is far above what you use, you are paying fixed charges for capacity you do not need.',
          },
        ],
      },
      {
        id: 'consumption',
        heading: 'Fields that determine the amount',
        blocks: [
          {
            type: 'table',
            head: ['Field', 'What it means'],
            rows: [
              [
                'Previous reading and date',
                'The cumulative meter reading at the last billing, and when it was taken.',
              ],
              [
                'Present reading and date',
                'The current cumulative reading and its date. The gap between the two dates is your actual billing period.',
              ],
              [
                'Units consumed',
                'Present reading minus previous reading — the electricity you are being billed for.',
              ],
              [
                'Meter status',
                'Whether the meter was read normally, or was found locked, stopped or faulty. Anything other than a normal read means your units may be estimated.',
              ],
              [
                'Energy charge',
                'The slab-wise or flat-rate cost of your units under your category.',
              ],
              [
                'Fixed charge',
                'Your load in kW multiplied by the fixed rate for your category.',
              ],
              [
                'Customer charge',
                'A flat monthly amount that steps up with your consumption level.',
              ],
              [
                'Electricity duty and other levies',
                'Statutory charges collected through the bill.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The single most useful habit is to compare the number of days between the reading dates with the previous bill before reacting to a higher total. A cycle that ran 36 days instead of 28 will show roughly a quarter more units for identical behaviour, and it may push you into a higher slab as well.',
          },
        ],
      },
      {
        id: 'balances',
        heading: 'Fields about money you already owe',
        blocks: [
          {
            type: 'table',
            head: ['Field', 'What it means'],
            rows: [
              [
                'Arrears',
                'Unpaid amounts carried forward from earlier bills. If arrears appear on a bill you believe you have settled, keep the payment receipt and take it to your section office.',
              ],
              [
                'Delayed payment surcharge (DPS)',
                'A penalty for paying after the due date. Domestic, cottage industry and small commercial services are charged ₹25 per month; other LT categories pay 5 paise per ₹100 per day with a ₹150 minimum.',
              ],
              [
                'Additional consumption deposit (ACD)',
                'A security deposit held against your account, periodically revised to reflect your consumption. It is your money, held as security, and is adjusted on final closure of the service.',
              ],
              [
                'Adjustments',
                'Corrections for earlier provisional billing, meter replacement or a resolved complaint. A large adjustment is normally the explanation for a bill that looks out of pattern.',
              ],
              [
                'Net amount and due date',
                'What to pay and by when. Paying even a day late triggers DPS on the next bill.',
              ],
            ],
          },
        ],
      },
      {
        id: 'red-flags',
        heading: 'What should make you look twice',
        blocks: [
          {
            type: 'ul',
            items: [
              'A meter status other than a normal read, especially several months running. Persistent average billing needs to be raised, because the correction eventually arrives in one lump.',
              'Units far outside your seasonal pattern with no change in usage. Compare against the same month last year, not last month, since air conditioning and irrigation are strongly seasonal.',
              'A billing period much longer or shorter than a month, which distorts monthly slab thresholds.',
              'A category code that does not match how the premises is used.',
              'A meter number on the bill that does not match the meter on your wall.',
              'Arrears you believe you have paid, or an unexplained large adjustment.',
              'Zero or absurdly low units followed by a very large bill, which usually means the meter had stopped and was later replaced.',
            ],
          },
          {
            type: 'callout',
            title: 'Where to take a complaint',
            text: 'Start with the DISCOM helpline on 1912, or the complaint facility on your DISCOM’s own portal, and keep the docket number. Unresolved matters escalate to the consumer grievance redressal forum of your DISCOM, and from there to the Electricity Ombudsman.',
          },
        ],
      },
      {
        id: 'paying',
        heading: 'Paying, and keeping records',
        blocks: [
          {
            type: 'p',
            text: 'Payments are made on your DISCOM’s own website or through its authorised channels, using your service number. This site links to those official pages but never collects payments itself.',
          },
          {
            type: 'ul',
            items: [
              'Keep digital receipts for at least a year. They are the only practical answer to an arrear that should not be there.',
              'Note the due date rather than relying on the SMS, since DPS is mechanical once the date passes.',
              'Photograph your meter reading occasionally, particularly if your meter has been read as locked or estimated. A dated photograph settles disputes quickly.',
              'Be wary of anyone contacting you about a disconnection and asking for payment through a link or app. DISCOM dues are payable on the DISCOM’s own site; this is a common fraud pattern.',
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Where is my service number on the bill?',
        a: 'It is printed near the top with the consumer name and address, often labelled service number or unique service connection number. In Andhra Pradesh it is commonly a 13-digit number, and you need it for online payment and for any complaint.',
      },
      {
        q: 'What is ACD and will I get it back?',
        a: 'The additional consumption deposit is a security deposit held against your connection and revised periodically in line with your consumption. It remains your money and is adjusted when the service is finally closed.',
      },
      {
        q: 'My bill says the meter was not read. What should I do?',
        a: 'Ensure the meter is accessible for reading, and report it to your section office or on 1912 if it recurs. Continuous estimated billing eventually gets corrected in one adjustment, which is unpleasant if it has been running for months.',
      },
      {
        q: 'Can I change my tariff category?',
        a: 'Categories are assigned by the DISCOM according to the actual use of the premises, under the definitions in the tariff order. If the use has genuinely changed, apply to your section office with supporting documents. It is not a setting you can choose.',
      },
    ],
    related: [
      'how-ap-electricity-bills-are-calculated',
      'understanding-telescopic-tariff-slabs',
      'how-to-reduce-your-electricity-bill',
    ],
  },

  {
    slug: 'how-to-reduce-your-electricity-bill',
    category: 'Saving money',
    title: 'How to reduce your electricity bill in Andhra Pradesh',
    metaTitle:
      'How to Reduce Your Electricity Bill in AP: Appliance-Level Maths',
    description:
      'A practical, numbers-first guide to lowering an Andhra Pradesh electricity bill — appliance-level unit calculations, slab-aware savings, time-of-day shifting for commercial users, and where rooftop solar fits in.',
    excerpt:
      'Which appliances actually drive your units, what a saved unit is worth in your slab, and which savings claims to ignore.',
    readingTime: '10 min read',
    updated: '2026-08-20',
    intro:
      'Advice about saving electricity is usually a list of tips with no numbers attached, which makes it impossible to tell the difference between a change worth making and one that is not. This guide takes the opposite approach: work out where your units actually go, work out what a unit is worth to you given your slab, and then act on the two or three things that matter. Everything else is rounding.',
    sections: [
      {
        id: 'marginal-value',
        heading: 'First, find out what a unit is worth to you',
        blocks: [
          {
            type: 'p',
            text: 'Under a telescopic tariff, the value of a saved unit is your marginal rate — the rate of the highest band you are currently reaching — not your average rate. This varies by a factor of five across domestic consumers, which is why identical advice is excellent for one household and pointless for another.',
          },
          {
            type: 'table',
            head: [
              'If your monthly units are',
              'A saved unit is worth',
              'Saving 30 units a month saves',
            ],
            rows: [
              ['Up to 30', '₹1.90', '—'],
              ['31 – 75', '₹3.00', 'about ₹90'],
              ['76 – 125', '₹4.50', 'about ₹135'],
              ['126 – 225', '₹6.00', 'about ₹180'],
              ['226 – 400', '₹8.75', 'about ₹263'],
              ['Above 400', '₹9.75', 'about ₹293'],
            ],
            note: 'Based on FY 2026-27 domestic energy rates. Actual saving depends on which bands your reduction comes out of.',
          },
          {
            type: 'p',
            text: 'If you consume 450 units a month, cutting 60 units saves about ₹575 a month, and an efficient appliance can pay for itself in a season. If you consume 90 units, the same effort saves about ₹200 and most equipment upgrades will never pay back. Check your bill before deciding how hard to work at this.',
          },
        ],
      },
      {
        id: 'appliance-maths',
        heading: 'Where your units actually go',
        blocks: [
          {
            type: 'p',
            text: 'Every appliance can be converted to monthly units with one formula, and doing this for your own home takes about fifteen minutes.',
          },
          {
            type: 'callout',
            title: 'Monthly units for an appliance',
            text: 'Wattage ÷ 1000 × hours used per day × days per month = units per month',
          },
          {
            type: 'p',
            text: 'Indicative figures for common Andhra Pradesh households, over a 30-day month:',
          },
          {
            type: 'table',
            head: ['Appliance', 'Typical power', 'Usage', 'Units per month'],
            rows: [
              [
                'Air conditioner, 1.5 ton',
                '1,500 W',
                '6 hours a day',
                'about 270',
              ],
              [
                'Water heater / geyser',
                '2,000 W',
                '30 minutes a day',
                'about 30',
              ],
              ['Refrigerator, 200 L', '—', 'continuous', 'about 30 to 45'],
              ['Water pump, 1 HP', '750 W', '1 hour a day', 'about 23'],
              ['Ceiling fan', '75 W', '10 hours a day', 'about 23'],
              ['Microwave oven', '1,200 W', '30 minutes a day', 'about 18'],
              ['Laptop', '60 W', '8 hours a day', 'about 14'],
              ['LED television, 32 inch', '50 W', '5 hours a day', 'about 8'],
              ['Five LED bulbs', '9 W each', '5 hours a day', 'about 7'],
              ['Washing machine', '500 W', '8 loads a month', 'about 4'],
            ],
            note: 'Illustrative. Actual consumption varies with star rating, age, ambient temperature and settings.',
          },
          {
            type: 'p',
            text: 'The distribution here is the entire lesson. One air conditioner can consume more than everything else in the house combined, and is on its own enough to move a household from the ₹6.00 band into the ₹8.75 band. Meanwhile replacing five LED bulbs that together account for seven units a month cannot save more than about ₹60 even in the top band. Lighting was worth attacking in the era of incandescent bulbs; in an LED house it is finished business.',
          },
          {
            type: 'h3',
            text: 'Cooling, heating and pumping',
          },
          {
            type: 'p',
            text: 'Almost everywhere, the large consumers are the appliances that move heat or move water. Focus your attention there and ignore the rest.',
          },
          {
            type: 'ul',
            items: [
              'Air conditioner setpoint. Each degree lower increases consumption meaningfully. Running at 24–26 °C with a fan for air movement is far cheaper than 20 °C, and generally more comfortable. Clean filters, shade the outdoor unit, and stop cooling empty rooms.',
              'Inverter and star ratings. For an appliance running six hours a day, the difference between a 3-star and 5-star inverter unit is a large number of units over a season. For one running twenty minutes a day, it is noise.',
              'Geysers. Heating water is expensive per minute of use. A timer or simply switching off at the socket prevents the reheating cycles that quietly accumulate, and a solar water heater removes a 30-unit line from the bill entirely.',
              'Refrigerator. It runs continuously, so condition matters: check the door seal, keep it away from the wall and out of direct sun, and do not set it colder than needed. An old unit with a failed seal can consume twice what its rating suggests.',
              'Pumpsets. Oversized pumps, choked foot valves and leaking pipes waste electricity every single day. Pumping to a tank once rather than running on demand is usually more efficient.',
              'Standby loads. Set-top boxes, chargers, desktop monitors and gaming consoles left on standby typically add somewhere between five and fifteen units a month. Worth a switched power strip, not worth agonising over.',
            ],
          },
        ],
      },
      {
        id: 'tod',
        heading: 'Time of day, for commercial and industrial consumers',
        blocks: [
          {
            type: 'p',
            text: 'Domestic consumers are billed on units regardless of when they are used, so timing does not change a household bill. For LT industrial consumers above 15 kW, and commercial consumers on a time-of-day tariff, when you consume is worth real money.',
          },
          {
            type: 'table',
            head: ['Period', 'Hours', 'Effect on rate'],
            rows: [
              ['Peak', '18:00 to 22:00', 'Higher rate applies'],
              ['Off-peak', '10:00 to 15:00', 'Lower rate applies'],
              ['Normal', 'All other hours', 'Base rate applies'],
            ],
            note: 'Exact hours and adjustments follow the applicable category in the tariff order. Industrial LT above 25 kW sees roughly ₹7.70 in peak hours against ₹5.70 off-peak.',
          },
          {
            type: 'p',
            text: 'A spread of ₹2 per unit between peak and off-peak is a 30 percent swing on the energy rate. Shifting a shift, a pumping cycle, a batch process or a cold-storage pull-down out of the evening peak and into the middle of the day is often the largest single saving available to a small industrial consumer, and it costs nothing but scheduling. Use the ToD inputs in the calculator to model a shift before rearranging operations.',
          },
        ],
      },
      {
        id: 'solar',
        heading: 'Rooftop solar',
        blocks: [
          {
            type: 'p',
            text: 'For a household consistently in the upper domestic slabs, rooftop solar is the one intervention that changes the shape of the bill rather than trimming it. Every unit generated displaces a unit that would have been billed at your marginal rate, so the economics improve the more you consume — the opposite of most efficiency measures.',
          },
          {
            type: 'p',
            text: 'The central PM Surya Ghar: Muft Bijli Yojana provides subsidy support for residential rooftop systems, with applications handled on the official national portal. Some practical points before you commit:',
          },
          {
            type: 'ul',
            items: [
              'Size against your own consumption pattern, not against your roof area. Grossly oversizing to export power rarely pays under prevailing settlement terms.',
              'Apply through the official portal and use an empanelled vendor. Approval, metering and inspection all run through your DISCOM.',
              'Understand your metering arrangement, since net and gross metering settle exported units very differently.',
              'Budget for the grid support charge applicable to rooftop solar consumers under the other-charges schedule — ₹15 per kW per month in the FY 2026-27 schedule.',
              'Factor in cleaning and inverter replacement over the system life; output degrades quietly if panels are never washed.',
            ],
          },
        ],
      },
      {
        id: 'avoid',
        heading: 'What not to bother with',
        blocks: [
          {
            type: 'ul',
            items: [
              'Plug-in devices sold as power savers, energy savers or bill reducers. A domestic consumer is billed on kWh, and a small capacitor in a socket does not reduce the energy your appliances consume. These do not work.',
              'Anyone offering to reduce your bill through an inside contact at the DISCOM. Bills are computed from metered units and an approved tariff schedule.',
              'Rewiring your habits around slab boundaries to the point of discomfort. Crossing a boundary only reprices your next units, so the sensible target is your overall consumption, not a threshold.',
              'Payment links sent by SMS or WhatsApp threatening disconnection. Pay on your DISCOM’s own portal, reached from the DISCOM website, and treat everything else as fraud.',
            ],
          },
          {
            type: 'p',
            text: 'What does work is unglamorous: know your marginal rate, find your two biggest loads, fix or replace them, shift consumption out of peak hours if your tariff has them, and read your bill each month so you notice a problem while it is still small.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does switching an appliance off at the socket really matter?',
        a: 'For genuine standby loads across a household it adds up to roughly five to fifteen units a month, which is worth perhaps ₹50 to ₹145 in the upper domestic bands. Real but small. Your air conditioner and geyser are where the money is.',
      },
      {
        q: 'Do power-saver plug-in devices reduce electricity bills?',
        a: 'No. Domestic consumers are billed on kWh consumed, and these devices do not reduce the energy your appliances draw. Independent testing has consistently found no measurable benefit.',
      },
      {
        q: 'Is it worth reducing my sanctioned load to save money?',
        a: 'The domestic fixed charge is ₹10 per kW per month, so reducing sanctioned load by 1 kW saves about ₹10 a month — and risks tripping or a compliance issue if your actual load needs the headroom. It is rarely worth it.',
      },
      {
        q: 'Will running heavy appliances at night reduce my domestic bill?',
        a: 'Not for a domestic consumer, whose bill depends on units rather than timing. Time-of-day pricing applies to specified industrial and commercial categories, where shifting load out of the 18:00 to 22:00 peak genuinely reduces cost.',
      },
    ],
    related: [
      'understanding-telescopic-tariff-slabs',
      'how-ap-electricity-bills-are-calculated',
      'how-to-read-your-ap-electricity-bill',
    ],
  },
];

export function getGuideBySlug(slug) {
  return GUIDES.find((guide) => guide.slug === slug) || null;
}

export const GUIDE_CATEGORIES = [
  ...new Set(GUIDES.map((guide) => guide.category)),
];
