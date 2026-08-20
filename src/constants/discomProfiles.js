/**
 * Editorial profiles for the three AP distribution companies.
 *
 * Operational data (payment URLs, districts, helplines) lives in `discoms.js`
 * and is used by the Pay Bill flow; this file adds the informational content for
 * the per-DISCOM reference pages and is keyed by the same ids.
 */

export const DISCOM_PROFILES = [
  {
    id: 'apspdcl',
    slug: 'apspdcl',
    acronym: 'APSPDCL',
    name: 'Andhra Pradesh Southern Power Distribution Company Limited',
    metaTitle: 'APSPDCL Tariff, Districts and Bill Payment Guide',
    description:
      'APSPDCL reference guide — districts served in south Andhra Pradesh, the APERC FY 2026-27 LT tariff that applies, official bill payment channels, helplines and how to escalate a complaint.',
    tagline: 'Southern Andhra Pradesh · headquartered at Tirupati',
    region: 'Rayalaseema and the southern coastal belt',
    overview: [
      'APSPDCL distributes electricity across the southern districts of Andhra Pradesh, with its corporate office at Tirupati. It came into being as part of the reorganisation of the state electricity sector around the turn of the century, when the erstwhile State Electricity Board was unbundled into separate generation, transmission and distribution entities.',
      'Its licence area historically covered a large part of southern and central Andhra Pradesh. In 2020 the central districts were carved out into a separate utility, APCPDCL, leaving APSPDCL with the Rayalaseema districts and the southern coastal belt around Nellore.',
      'The territory is unusually varied in load profile. It includes the Tirupati temple economy with its heavy commercial and institutional demand, industrial clusters around Sri City and Kurnool, and some of the most irrigation-dependent agricultural districts in the state, where farm pumpset demand dominates the seasonal peak.',
    ],
    notable: [
      {
        label: 'Headquarters',
        value: 'Tirupati',
      },
      {
        label: 'Coverage',
        value: 'Rayalaseema districts and the southern coastal belt',
      },
      {
        label: 'Regulator',
        value: 'APERC — tariffs determined state-wide, not by the DISCOM',
      },
      {
        label: 'Helpline',
        value: '1912 (toll free)',
      },
    ],
  },
  {
    id: 'apcpdcl',
    slug: 'apcpdcl',
    acronym: 'APCPDCL',
    name: 'Andhra Pradesh Central Power Distribution Corporation Limited',
    metaTitle: 'APCPDCL Tariff, Districts and Bill Payment Guide',
    description:
      'APCPDCL reference guide — districts served in central Andhra Pradesh, the APERC FY 2026-27 LT tariff that applies, official bill payment channels, helplines and how to escalate a complaint.',
    tagline: 'Central Andhra Pradesh · headquartered at Vijayawada',
    region: 'The central coastal districts around Vijayawada and Guntur',
    overview: [
      'APCPDCL is the newest of the three Andhra Pradesh distribution companies. It was carved out of APSPDCL in 2020 to create a dedicated utility for the central districts, with its corporate office at Vijayawada.',
      'The reorganisation was driven by scale. Concentrating the fast-growing Vijayawada–Guntur–Amaravati corridor under a single distribution company allowed closer administration of a dense, rapidly urbanising licence area that had previously been managed from Tirupati.',
      'The result is the most urban-weighted of the three licence areas, with a high share of domestic and commercial consumers, alongside significant agricultural demand in the Krishna and Guntur delta and industrial load in the Prakasam and Palnadu belts.',
    ],
    notable: [
      {
        label: 'Headquarters',
        value: 'Vijayawada',
      },
      {
        label: 'Formed',
        value: '2020, carved out of APSPDCL',
      },
      {
        label: 'Regulator',
        value: 'APERC — tariffs determined state-wide, not by the DISCOM',
      },
      {
        label: 'Helpline',
        value: '1912 (toll free)',
      },
    ],
  },
  {
    id: 'apepdcl',
    slug: 'apepdcl',
    acronym: 'APEPDCL',
    name: 'Andhra Pradesh Eastern Power Distribution Company Limited',
    metaTitle: 'APEPDCL Tariff, Districts and Bill Payment Guide',
    description:
      'APEPDCL reference guide — districts served in north-coastal and east Andhra Pradesh, the APERC FY 2026-27 LT tariff that applies, official bill payment channels, helplines and how to escalate a complaint.',
    tagline: 'Eastern Andhra Pradesh · headquartered at Visakhapatnam',
    region: 'North-coastal Andhra, the Godavari districts and the agency areas',
    overview: [
      'APEPDCL distributes electricity across the eastern districts of Andhra Pradesh from its corporate office at Visakhapatnam. Like APSPDCL it dates from the unbundling of the old State Electricity Board, and it has long been regarded as the best-performing of the state distribution utilities on loss reduction and collection efficiency.',
      'Its licence area runs from Srikakulam on the Odisha border down through Visakhapatnam and the Godavari districts. It carries the heaviest industrial load of the three, anchored by the Visakhapatnam industrial belt with its steel, petrochemical, pharmaceutical and port-related consumers, much of which is served at high tension.',
      'The same territory also includes the agency and hill areas of Alluri Sitharama Raju and Parvathipuram Manyam, where terrain makes network maintenance and meter reading materially harder, and the aquaculture belt of the Godavari delta, where pumping and aeration load is a significant category in its own right.',
    ],
    notable: [
      {
        label: 'Headquarters',
        value: 'Visakhapatnam',
      },
      {
        label: 'Coverage',
        value: 'North-coastal Andhra, Godavari districts and agency areas',
      },
      {
        label: 'Regulator',
        value: 'APERC — tariffs determined state-wide, not by the DISCOM',
      },
      {
        label: 'Helpline',
        value: '1912 (toll free)',
      },
    ],
  },
];

/** Guidance that is identical across all three DISCOMs. */
export const DISCOM_COMMON = {
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
};

export function getDiscomProfileBySlug(slug) {
  return DISCOM_PROFILES.find((profile) => profile.slug === slug) || null;
}
