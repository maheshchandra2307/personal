import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import { APP_NAME } from '../constants';
import { CONTACT_EMAIL, POLICY_UPDATED } from '../constants/site';
import { formatLongDate } from '../utils';
import { useI18n } from '../context/AppContext';
import ContentLanguageNote from '../components/common/ContentLanguageNote';

const SECTIONS = [
  {
    id: 'summary',
    heading: 'The short version',
    blocks: [
      {
        type: 'p',
        text: `${APP_NAME} does not ask you to register, does not run user accounts, and does not collect your name, address, phone number, service number or bill details. Everything you type into the calculator is processed in your own browser and is never sent to us.`,
      },
      {
        type: 'p',
        text: 'The site does use third-party services for advertising and hosting, and those services set cookies and receive technical information such as your IP address. The rest of this policy explains exactly what that means and what you can do about it.',
      },
    ],
  },
  {
    id: 'calculator-inputs',
    heading: 'What happens to your calculator inputs',
    blocks: [
      {
        type: 'p',
        text: 'The units, load, category, phase and time-of-day figures you enter are used to compute an estimate in the JavaScript running on your device. There is no server-side calculation, no database, and no logging of inputs. Closing or reloading the page discards them.',
      },
      {
        type: 'p',
        text: 'The same applies to the help chat on this site. It answers from a fixed set of tariff and FAQ content bundled with the page; your messages are not transmitted to us, stored, or sent to any external language model or chat service.',
      },
      {
        type: 'p',
        text: 'We would rather not receive personal information at all. Please do not send service numbers, meter numbers, bill images or account details by email — we have no use for them and no ability to act on them.',
      },
    ],
  },
  {
    id: 'technical-data',
    heading: 'Technical data collected automatically',
    blocks: [
      {
        type: 'p',
        text: 'Like any website, this site is served by infrastructure that records standard technical information when a page is requested. This is inherent to how the web works rather than something we opt into.',
      },
      {
        type: 'ul',
        items: [
          'IP address, which our hosting provider processes to deliver the page and to protect against abuse.',
          'Browser type and version, operating system and device type.',
          'The page requested, the date and time, and the referring page if any.',
          'When Google Analytics is configured, aggregate page-view information as described below.',
          'Aggregate performance and error information used to keep the site working.',
        ],
      },
      {
        type: 'p',
        text: 'The site is hosted on Vercel, which processes this information as part of delivering and securing the service. We do not combine hosting logs with Analytics reports to identify individual visitors.',
      },
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies and similar technologies',
    blocks: [
      {
        type: 'p',
        text: 'We do not set cookies of our own for advertising or profiling. Cookies on this site come from the third-party services described below — Google Analytics when a measurement ID is configured, and advertising.',
      },
      {
        type: 'p',
        text: 'You can control cookies through your browser settings, including blocking them entirely or deleting existing ones. Blocking cookies does not affect the calculator, which needs none of them to work, though it may affect analytics and how advertising is selected.',
      },
    ],
  },
  {
    id: 'analytics',
    heading: 'Analytics, including Google Analytics',
    blocks: [
      {
        type: 'p',
        text: 'When configured, this site uses Google Analytics 4 to understand which pages are visited. That helps us see whether a guide is useful, whether a page is broken, and how people move between the calculator, DISCOM pages and payment links. It is not used to identify you or to build an advertising profile of our own.',
      },
      {
        type: 'ul',
        items: [
          'Google Analytics may record the pages you view, the referring site, approximate location derived from IP address, and basic device and browser information.',
          'IP anonymization is enabled in our Analytics configuration.',
          'This information is processed by Google as described in Google’s own privacy policy. We use it in aggregate, not to identify individual visitors.',
          'Analytics cookies, when present, are first-party cookies set for this site by the Google Analytics tag. They are not required for the calculator to work.',
        ],
      },
      {
        type: 'p',
        text: 'You can opt out of Google Analytics with the Google Analytics opt-out browser add-on, or by blocking cookies for this site in your browser. Opting out does not change how the calculator, guides or payment redirects work.',
      },
    ],
  },
  {
    id: 'advertising',
    heading: 'Advertising, including Google AdSense',
    blocks: [
      {
        type: 'p',
        text: 'This site carries third-party advertising to cover hosting and domain costs. We use Google AdSense, and may use other advertising partners in future.',
      },
      {
        type: 'ul',
        items: [
          'Google, as a third-party vendor, uses cookies to serve ads on this site.',
          'Google’s use of advertising cookies enables it and its partners to serve ads based on your visits to this site and other sites on the internet.',
          'Third-party vendors and ad networks may also serve advertisements and use cookies, web beacons or similar technologies to measure the effectiveness of their advertisements and to personalise the advertising content you see.',
          'These vendors may receive information including your IP address, browser and device characteristics, and the pages you view on this site. We do not receive that information in identifiable form and have no access to their cookies.',
        ],
      },
      {
        type: 'h3',
        text: 'Your choices over personalised advertising',
      },
      {
        type: 'ul',
        items: [
          'You can opt out of personalised advertising by visiting Google’s Ads Settings at adssettings.google.com.',
          'You can opt out of some third-party vendors’ use of cookies for personalised advertising at optout.aboutads.info.',
          'Your browser’s settings allow you to block or delete advertising cookies directly.',
        ],
      },
      {
        type: 'p',
        text: 'Opting out of personalised advertising does not remove advertising from the site; it means the advertising you see is less likely to be based on your browsing history.',
      },
      {
        type: 'callout',
        title: 'Editorial independence',
        text: 'Advertising does not influence the content of this site. Tariff figures come from the published APERC schedule, and the guides do not recommend products or accept payment for coverage.',
      },
    ],
  },
  {
    id: 'third-party-links',
    heading: 'Links to other websites',
    blocks: [
      {
        type: 'p',
        text: 'This site links to official DISCOM payment portals, the APERC website, and government scheme portals. Those sites are operated by other organisations and have their own privacy policies and practices. Once you follow a link away from this site, this policy no longer applies, and we have no control over or responsibility for what happens there.',
      },
      {
        type: 'p',
        text: 'When paying an electricity bill, always check that the address bar shows your DISCOM’s own domain before entering any detail.',
      },
    ],
  },
  {
    id: 'children',
    heading: 'Children',
    blocks: [
      {
        type: 'p',
        text: 'This site is a utility-billing reference intended for adults responsible for electricity connections. It is not directed at children, and we do not knowingly collect personal information from anyone, including children.',
      },
    ],
  },
  {
    id: 'rights',
    heading: 'Your rights and data retention',
    blocks: [
      {
        type: 'p',
        text: 'Because we do not operate accounts or a database of visitors, there is generally no personal data held by us to access, correct or erase. The exception is email correspondence: if you write to us, we retain that email in order to reply and to keep a record of reported errors.',
      },
      {
        type: 'p',
        text: `If you would like correspondence you have sent us deleted, write to ${CONTACT_EMAIL} and we will remove it. For data held by advertising, analytics or hosting providers, their own policies and controls apply.`,
      },
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'This policy may be updated to reflect changes in the services the site uses or in applicable law. The review date at the top of this page will change when it does, and material changes will be reflected in the text rather than announced separately. Continuing to use the site after a change indicates acceptance of the revised policy.',
      },
      {
        type: 'p',
        text: `Questions about this policy can be sent to ${CONTACT_EMAIL}.`,
      },
    ],
  },
];

function LegalPrivacy() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-8">
      <Seo path="/privacy-policy" />

      <PageHeader
        eyebrow={t('legalPage.privacyEyebrow')}
        title={t('legalPage.privacyTitle')}
        lead={t('legalPage.privacyLead')}
        meta={t('common.updated', {
          date: formatLongDate(POLICY_UPDATED, locale),
        })}
      />

      <ContentLanguageNote />

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={SECTIONS} />
      </article>
    </div>
  );
}

export default LegalPrivacy;
