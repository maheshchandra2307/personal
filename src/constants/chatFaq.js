export const CHAT_QUICK_REPLIES = [
  'Which DISCOM?',
  'How to pay',
  'Service number',
  'Helpline',
  'APEPDCL',
  'APCPDCL',
  'APSPDCL',
];

export const CHAT_FAQ = [
  {
    keys: [
      'apepdcl',
      'eastern',
      'vizag',
      'visakhapatnam',
      'kakinada',
      'godavari',
      'srikakulam',
      'eluru',
    ],
    reply:
      'APEPDCL (Eastern Power) covers Srikakulam, Vizianagaram, Visakhapatnam, Anakapalli, Kakinada, East/West Godavari, Konaseema, Eluru and nearby districts.\n\nOpen the Pay Bill page and tap the APEPDCL card to go to its official payment site.',
  },
  {
    keys: [
      'apcpdcl',
      'central',
      'vijayawada',
      'guntur',
      'krishna',
      'prakasam',
      'paytm',
      'bapatla',
    ],
    reply:
      'APCPDCL (Central Power) covers Krishna (NTR), Guntur, Bapatla, Palnadu, Prakasam and Markapuram.\n\nOpen the Pay Bill page and tap the APCPDCL card — it opens the Paytm bill payment page for APCPDCL.',
  },
  {
    keys: [
      'apspdcl',
      'southern',
      'tirupati',
      'chittoor',
      'kadapa',
      'kurnool',
      'nellore',
      'anantapur',
    ],
    reply:
      'APSPDCL (Southern Power) covers Tirupati, Chittoor, Annamayya, YSR Kadapa, Anantapuramu, Sri Sathya Sai, Kurnool, Nandyal and SPSR Nellore.\n\nOpen the Pay Bill page and tap the APSPDCL card to go to its official payment site.',
  },
  {
    keys: [
      'which discom',
      'which company',
      'my district',
      'find discom',
      'my discom',
    ],
    reply:
      'Tell me your district and I can point you to the right DISCOM — or open Pay Bill and check the district tags on each card.',
  },
  {
    keys: [
      'service number',
      'service no',
      'account number',
      'consumer number',
      'usc',
    ],
    reply:
      "Your Service Number is a 13-digit number printed on your latest electricity bill, usually near the top labeled 'Service No.' or 'Unique Service Number (USC)'.",
  },
  {
    keys: [
      'how to pay',
      'pay bill',
      'payment method',
      'how do i pay',
      'steps to pay',
    ],
    reply:
      'To pay your bill:\n1. Open Pay Bill and tap your DISCOM card\n2. You will land on the official DISCOM/BillDesk page\n3. Enter your 13-digit Service Number\n4. Complete the captcha\n5. Verify the bill amount shown\n6. Pay via UPI, Net Banking, or Debit/Credit Card',
  },
  {
    keys: [
      'helpline',
      'phone number',
      'contact',
      'customer care',
      'toll free',
      '1912',
    ],
    reply:
      'Common AP DISCOM helpline: 1912 (toll-free) or 1800-425-1912.\nAPSPDCL also has 1800-425-5333.\nThese connect you to the official DISCOM, not to this app.',
  },
  {
    keys: [
      'complaint',
      'power cut',
      'outage',
      'no power',
      'meter issue',
      'fault',
    ],
    reply:
      'For power cuts, meter issues, or complaints, call 1912 (toll-free) to reach your DISCOM.\nYou can also use the official DISCOM apps/portals for outage complaints. This app only helps with bill estimates and payment redirects.',
  },
  {
    keys: ['calculate', 'calculator', 'estimate', 'tariff', 'bill amount'],
    reply:
      'Use the Calculator page to estimate your monthly bill with APERC FY 2026-27 rates. Select your consumer category, enter load and units, then tap Calculate.',
  },
  {
    keys: ['unofficial', 'affiliate', 'government', 'official'],
    reply:
      'This is an independent, unofficial helper. It is not run by AP DISCOMs or the AP Government. Payments happen only on official DISCOM/BillDesk sites.',
  },
];

export const CHAT_FALLBACK =
  "I can help with DISCOM lookup, payment steps, service number tips, helplines, and bill calculation guidance.\n\nTry asking: 'Which DISCOM?', 'How to pay', or name a district.";

export function getChatReply(message) {
  const text = message.toLowerCase().trim();
  if (!text) return CHAT_FALLBACK;

  const match = CHAT_FAQ.find((item) =>
    item.keys.some((key) => text.includes(key))
  );

  return match?.reply || CHAT_FALLBACK;
}
