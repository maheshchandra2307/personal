import { FaEnvelope, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import {
  CONTACT_EMAIL,
  CONTACT_RESPONSE_TIME,
  DISCOM_HELPLINE,
  OFFICIAL_LINKS,
  POLICY_UPDATED,
} from '../constants/site';
import { formatLongDate } from '../utils';
import { useI18n } from '../context/AppContext';
import ContentLanguageNote from '../components/common/ContentLanguageNote';

const SECTIONS = [
  {
    id: 'what-we-can-help-with',
    heading: 'What we can help with',
    blocks: [
      {
        type: 'p',
        text: 'This site is an independent tool, so the things we can usefully act on are things about the site itself. If any of the following applies, please do write in — reports like these are how the tool stays accurate.',
      },
      {
        type: 'ul',
        items: [
          'A tariff rate, slab boundary or charge on this site does not match the current APERC schedule or your official bill.',
          'The calculator produces a result you believe is wrong for a category, including a worked example in one of the guides that does not add up.',
          'A factual error, unclear explanation or typo in any of the written guides.',
          'A broken link, a page that fails to load, or a layout problem on your device or browser.',
          'A category, charge or scenario you would like the calculator or the guides to cover.',
        ],
      },
      {
        type: 'p',
        text: 'When reporting a calculation problem, including your consumer category, the units, and the connected load you entered makes it possible to reproduce the issue immediately. Please do not send your service number, meter number, bill images or any other personal or account details — we have no use for them and no way to act on them.',
      },
    ],
  },
  {
    id: 'what-we-cannot-do',
    heading: 'What we cannot help with',
    blocks: [
      {
        type: 'p',
        text: 'We are not a DISCOM, an agent of one, or connected to any utility system. There is no scenario in which this site can access, alter or resolve anything on your electricity account. Specifically, we cannot:',
      },
      {
        type: 'ul',
        items: [
          'Look up your bill, service number or payment history, or confirm whether a payment was received.',
          'Accept, process, refund or trace a payment. This site never handles money.',
          'Correct your tariff category, change your sanctioned load, or transfer a connection to another name.',
          'Register or escalate a billing dispute, meter complaint or power failure.',
          'Arrange a new connection, a meter replacement or a reconnection.',
          'Intervene in a disconnection notice or a demand for arrears.',
        ],
      },
      {
        type: 'callout',
        title: 'For anything about your actual connection',
        text: `Call your DISCOM on ${DISCOM_HELPLINE} (toll free), use the complaint facility on your DISCOM’s own portal, or visit the section office named on your bill. Keep the docket number you are given.`,
      },
    ],
  },
  {
    id: 'response',
    heading: 'Response times',
    blocks: [
      {
        type: 'p',
        text: `This is a personal project maintained by one person outside of full-time work, so replies typically take ${CONTACT_RESPONSE_TIME}, and sometimes longer at busy periods. Reports of incorrect rates are prioritised over everything else, because an incorrect rate misleads every visitor until it is fixed.`,
      },
      {
        type: 'p',
        text: 'Every message is read. If you have reported something substantive and heard nothing after a week, it is reasonable to send a reminder.',
      },
    ],
  },
];

function Contact() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-8">
      <Seo path="/contact" jsonLdType="ContactPage" />

      <PageHeader
        eyebrow={t('contactPage.eyebrow')}
        title={t('contactPage.title')}
        lead={t('contactPage.lead')}
        meta={t('common.lastReviewed', {
          date: formatLongDate(POLICY_UPDATED, locale),
        })}
      />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-lg bg-amber-50 p-2.5 text-amber-700">
            <FaEnvelope size={16} />
          </div>
          <h2 className="font-display text-lg font-semibold text-slate-900">
            {t('contactPage.emailUs')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {t('contactPage.emailLead')}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block break-all font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 text-[12px] text-slate-400">
            {t('contactPage.replyTime', { time: CONTACT_RESPONSE_TIME })}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-2.5 text-blue-700">
            <FaPhoneAlt size={16} />
          </div>
          <h2 className="font-display text-lg font-semibold text-slate-900">
            {t('contactPage.yourDiscom')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {t('contactPage.discomLead')}
          </p>
          <p className="mt-4 font-display text-2xl font-bold text-slate-900">
            {DISCOM_HELPLINE}
          </p>
          <p className="mt-1 text-[12px] text-slate-400">
            {t('contactPage.tollFree')}
          </p>
        </div>
      </section>

      <ContentLanguageNote />

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={SECTIONS} />
      </article>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {t('contactPage.officialSites')}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {t('contactPage.officialLead')}
        </p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                {link.label}
                <FaExternalLinkAlt size={11} className="text-slate-400" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="max-w-3xl border-t border-slate-200 pt-8 text-[13px] leading-relaxed text-slate-500">
        {t('contactPage.beforeWriting')}
      </p>
    </div>
  );
}

export default Contact;
