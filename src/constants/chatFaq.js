import tariffKnowledge from './tariffChatKnowledge.json';

export const CHAT_QUICK_REPLIES = [
  'Domestic rates',
  'Surcharge ₹25',
  'Which DISCOM?',
  'How to pay',
  'Agriculture free',
  'Helpline',
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
      'palnadu',
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
      'To pay your bill:\n1. Open Pay Bill and tap your DISCOM card\n2. You will land on the official DISCOM/BillDesk page\n3. Enter your 13-digit Service Number\n4. Complete the captcha\n5. Verify the bill amount shown\n6. Pay via UPI, Net Banking, or Debit/Credit Card\n\nTip: Pay within 14–15 days of the bill date to avoid delayed payment surcharge (₹25 for many domestic/small LT categories).',
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
    keys: ['calculate', 'calculator', 'estimate', 'bill amount'],
    reply:
      'Use the Calculator page to estimate your monthly bill with APERC FY 2026-27 rates. Select your consumer category, enter load and units, then tap Calculate.\n\nAsk me about domestic slabs, commercial rates, agriculture free quota, surcharge, or reconnection charges from the tariff Excel.',
  },
  {
    keys: ['unofficial', 'affiliate', 'government', 'official'],
    reply:
      'This is an independent, unofficial helper. It is not run by AP DISCOMs or the AP Government. Payments happen only on official DISCOM/BillDesk sites.',
  },
];

export const CHAT_FALLBACK =
  "I can answer from APERC LT Tariff FY 2026-27 (your Excel) plus DISCOM / payment help.\n\nTry: 'Domestic rates', 'Surcharge ₹25', 'Agriculture free', 'Which DISCOM?', or 'How to pay'.";

const STOP_WORDS = new Set([
  'the',
  'and',
  'for',
  'are',
  'what',
  'how',
  'much',
  'about',
  'with',
  'from',
  'this',
  'that',
  'have',
  'please',
  'tell',
  'me',
  'my',
  'is',
  'of',
  'in',
  'to',
  'a',
  'an',
  'or',
  'on',
  'per',
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/₹/g, 'rs ')
    .replace(/[^a-z0-9.\-\/\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
}

function scoreKnowledgeEntry(entry, tokens, raw) {
  let score = 0;
  const hay = `${entry.title} ${entry.body}`.toLowerCase();
  const keys = entry.keys || [];

  for (const token of tokens) {
    if (keys.some((k) => k.includes(token) || token.includes(k))) score += 3;
    if (hay.includes(token)) score += 1;
  }

  // Phrase boosts for common intents
  if (
    /surcharge|dps|delayed|late fee|25/.test(raw) &&
    /dps|surcharge|25/.test(hay)
  )
    score += 8;
  if (/domestic|home|house|residential/.test(raw) && /domestic/.test(hay))
    score += 6;
  if (/commercial|shop|office/.test(raw) && /commercial/.test(hay)) score += 6;
  if (
    /agricultur|farmer|free power|1200/.test(raw) &&
    /agricultur|free/.test(hay)
  )
    score += 6;
  if (/industr|factory|tod|peak/.test(raw) && /industr|tod|peak/.test(hay))
    score += 5;
  if (/reconnec/.test(raw) && /reconnec/.test(hay)) score += 7;
  if (/reconnec/.test(raw) && /reconnec/.test(entry.title.toLowerCase()))
    score += 5;
  if (
    /customer charge|service charge/.test(raw) &&
    /customer charges/.test(hay)
  )
    score += 6;
  if (/meter test/.test(raw) && /meter testing/.test(hay)) score += 7;
  if (/temporary/.test(raw) && /temporary/.test(hay)) score += 5;
  if (
    /ev|charging station|electric vehicle/.test(raw) &&
    /electric vehicle|ev /.test(hay)
  )
    score += 6;
  if (/religious|temple|mosque|church/.test(raw) && /religious/.test(hay))
    score += 6;

  return score;
}

function findTariffReply(message) {
  const raw = message.toLowerCase().trim();
  const tokens = tokenize(raw);
  if (!tokens.length) return null;

  const ranked = (tariffKnowledge.entries || [])
    .map((entry) => ({
      entry,
      score: scoreKnowledgeEntry(entry, tokens, raw),
    }))
    .filter((item) => item.score >= 5)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) return null;

  const top = ranked.slice(0, 2);
  const parts = top.map(({ entry }) => `**${entry.title}**\n${entry.body}`);

  return `${parts.join('\n\n')}\n\n_Unofficial helper · Source: ${tariffKnowledge.source} (effective ${tariffKnowledge.effective}). Actual bill may differ._`;
}

function findFaqReply(message) {
  const text = message.toLowerCase().trim();
  const match = CHAT_FAQ.find((item) =>
    item.keys.some((key) => text.includes(key))
  );
  return match?.reply || null;
}

/** Strip markdown bold for plain chat bubbles */
function toPlainText(text) {
  return text.replace(/\*\*/g, '');
}

export function getChatReply(message) {
  const text = message.trim();
  if (!text) return CHAT_FALLBACK;

  // Prefer FAQ for DISCOM / pay / helpline intents
  const faqFirstKeys = [
    'discom',
    'apepdcl',
    'apcpdcl',
    'apspdcl',
    'how to pay',
    'pay bill',
    'helpline',
    '1912',
    'service number',
    'district',
  ];
  const lower = text.toLowerCase();
  if (faqFirstKeys.some((k) => lower.includes(k))) {
    const faq = findFaqReply(text);
    if (faq) return faq;
  }

  const tariff = findTariffReply(text);
  if (tariff) return toPlainText(tariff);

  const faq = findFaqReply(text);
  if (faq) return faq;

  return CHAT_FALLBACK;
}
