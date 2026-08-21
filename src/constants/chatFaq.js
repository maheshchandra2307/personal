import tariffKnowledge from './tariffChatKnowledge.json';

export const CHAT_QUICK_REPLY_IDS = [
  'domesticRates',
  'surcharge',
  'whichDiscom',
  'howToPay',
  'agriFree',
  'helpline',
];

export const CHAT_QUICK_CANONICAL = {
  domesticRates: 'Domestic rates',
  surcharge: 'Surcharge ₹25',
  whichDiscom: 'Which DISCOM?',
  howToPay: 'How to pay',
  agriFree: 'Agriculture free',
  helpline: 'Helpline',
};

export const CHAT_FAQ = [
  {
    id: 'apepdcl',
    keys: [
      'apepdcl',
      'eastern',
      'vizag',
      'visakhapatnam',
      'kakinada',
      'godavari',
      'srikakulam',
      'eluru',
      'తూర్పు',
      'విశాఖ',
      'విశాఖపట్నం',
      'కాకినాడ',
      'గోదావరి',
      'శ్రీకాకుళం',
      'ఏలూరు',
    ],
  },
  {
    id: 'apcpdcl',
    keys: [
      'apcpdcl',
      'central',
      'vijayawada',
      'guntur',
      'krishna',
      'prakasam',
      'palnadu',
      'bapatla',
      'మధ్య',
      'విజయవాడ',
      'గుంటూరు',
      'కృష్ణా',
      'ప్రకాశం',
      'పల్నాడు',
      'బాపట్ల',
    ],
  },
  {
    id: 'apspdcl',
    keys: [
      'apspdcl',
      'southern',
      'tirupati',
      'chittoor',
      'kadapa',
      'kurnool',
      'nellore',
      'anantapur',
      'దక్షిణ',
      'తిరుపతి',
      'చిత్తూరు',
      'కడప',
      'కర్నూలు',
      'నెల్లూరు',
      'అనంతపురం',
    ],
  },
  {
    id: 'whichDiscom',
    keys: [
      'which discom',
      'which company',
      'my district',
      'find discom',
      'my discom',
      'ఏ డిస్కమ్',
      'నా జిల్లా',
      'ఏ సంస్థ',
    ],
  },
  {
    id: 'serviceNumber',
    keys: [
      'service number',
      'service no',
      'account number',
      'consumer number',
      'usc',
      'సర్వీస్ నంబర్',
      'ఖాతా నంబర్',
    ],
  },
  {
    id: 'howToPay',
    keys: [
      'how to pay',
      'pay bill',
      'payment method',
      'how do i pay',
      'steps to pay',
      'ఎలా చెల్లించాలి',
      'బిల్లు చెల్లింపు',
    ],
  },
  {
    id: 'helpline',
    keys: [
      'helpline',
      'phone number',
      'contact',
      'customer care',
      'toll free',
      '1912',
      'హెల్ప్‌లైన్',
      'ఫోన్',
    ],
  },
  {
    id: 'complaint',
    keys: [
      'complaint',
      'power cut',
      'outage',
      'no power',
      'meter issue',
      'fault',
      'ఫిర్యాదు',
      'కరెంటు కోత',
      'మీటర్',
    ],
  },
  {
    id: 'calculate',
    keys: [
      'calculate',
      'calculator',
      'estimate',
      'bill amount',
      'లెక్కించు',
      'కాలిక్యులేటర్',
      'అంచనా',
    ],
  },
  {
    id: 'unofficial',
    keys: [
      'unofficial',
      'affiliate',
      'government',
      'official',
      'అనధికారిక',
      'ప్రభుత్వ',
    ],
  },
];

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
    .replace(/[^a-z0-9.\-/\s\u0c00-\u0c7f]/g, ' ')
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

function findFaqItem(message) {
  const text = message.toLowerCase().trim();
  return (
    CHAT_FAQ.find((item) => item.keys.some((key) => text.includes(key))) || null
  );
}

/** Strip markdown bold for plain chat bubbles */
function toPlainText(text) {
  return text.replace(/\*\*/g, '');
}

function faqText(item, t) {
  if (!item) return null;
  return t(`chat.replies.${item.id}`);
}

export function getChatReply(message, t) {
  const text = message.trim();
  if (!text) return t('chat.fallback');

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
    'డిస్కమ్',
    'చెల్లింపు',
    'హెల్ప్',
    'జిల్లా',
  ];
  const lower = text.toLowerCase();
  if (faqFirstKeys.some((k) => lower.includes(k))) {
    const faq = faqText(findFaqItem(text), t);
    if (faq) return faq;
  }

  const tariff = findTariffReply(text);
  if (tariff) return toPlainText(tariff);

  const faq = faqText(findFaqItem(text), t);
  if (faq) return faq;

  return t('chat.fallback');
}
