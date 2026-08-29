import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import ContentLanguageNote from '../components/common/ContentLanguageNote';
import Button from '../components/ui/Button';
import { APP_NAME, TARIFF_YEAR } from '../constants';
import { useI18n } from '../context/AppContext';
import {
  CONTACT_EMAIL,
  POLICY_UPDATED,
  PUBLISHER_LOCATION,
  SITE_DOMAIN,
  TARIFF_EFFECTIVE_DATE,
} from '../constants/site';
import { formatLongDate } from '../utils';

const SECTIONS = [
  {
    id: 'what-this-is',
    heading: 'What this site is',
    blocks: [
      {
        type: 'p',
        text: `${APP_NAME} is an independent reference tool for electricity consumers in Andhra Pradesh. It does two things. It estimates what a monthly bill should come to under the APERC low-tension tariff schedule, and it explains — in plain language, at some length — how that number is arrived at.`,
      },
      {
        type: 'p',
        text: 'The tool exists because the information needed to understand an electricity bill is public but not accessible. Tariff orders are long regulatory documents written for utilities and intervenors, not for a household trying to work out why this month cost more than last. Reproducing the applicable schedule as a working calculator, and writing the explanation alongside it, closes that gap.',
      },
      {
        type: 'callout',
        title: 'Independent and unofficial',
        text: 'This site is not affiliated with, endorsed by, or operated on behalf of APERC, APSPDCL, APCPDCL, APEPDCL, or the Government of Andhra Pradesh. It collects no payments and has no access to any consumer account.',
      },
    ],
  },
  {
    id: 'who-runs-it',
    heading: 'Who runs it',
    blocks: [
      {
        type: 'p',
        text: `The site is built and maintained by an independent publisher based in ${PUBLISHER_LOCATION}, as a personal project rather than on behalf of any company or utility. The publisher owns and controls the domain ${SITE_DOMAIN}, can change the content of every page, and is the person AdSense and search engines should treat as the site owner. There is no editorial team and no commercial relationship with any electricity distribution company, equipment vendor or solar installer.`,
      },
      {
        type: 'p',
        text: `Correspondence of any kind — corrections, questions, or reports that something is broken — goes to ${CONTACT_EMAIL}, and is read by the person who maintains the site.`,
      },
    ],
  },
  {
    id: 'how-it-works',
    heading: 'How the calculator works',
    blocks: [
      {
        type: 'p',
        text: `The calculator implements the LT retail supply schedule for ${TARIFF_YEAR}, effective ${TARIFF_EFFECTIVE_DATE}. For a given category it applies the published energy rates to your units, adds the fixed charge derived from your connected load, and adds the customer charge applicable at your consumption level. Where a category is telescopic, units are sliced across the slab bands and each slice is priced at its own band rate, exactly as a DISCOM billing system does it.`,
      },
      {
        type: 'p',
        text: 'Category-specific rules are implemented rather than approximated. Time-of-day categories split your units across peak, off-peak and normal hours at the load-dependent rates. Agricultural categories with a free entitlement convert the annual per-HP quota to a monthly figure and bill only the excess. Minimum monthly charges are applied where the schedule specifies them, and urgency charges are added for temporary supply.',
      },
      {
        type: 'p',
        text: 'Everything runs in your browser. Nothing you type into the calculator is transmitted to a server, stored, or associated with you, because there is no server-side component to the calculation at all.',
      },
      {
        type: 'h3',
        text: 'Where the tariff data comes from',
      },
      {
        type: 'p',
        text: 'Rates are transcribed from the published APERC LT retail supply tariff schedule into a structured dataset that drives both the calculator and the reference tables. The reference tabs on the calculator page show the same figures the engine uses, so you can always check what is being applied rather than trusting a total.',
      },
      {
        type: 'p',
        text: 'Transcription is a manual step, and schedules get amended. Where anything on this site disagrees with the tariff order or with your official bill, the official document is correct and this site is not.',
      },
    ],
  },
  {
    id: 'limitations',
    heading: 'What it deliberately does not do',
    blocks: [
      {
        type: 'p',
        text: 'Being clear about the boundaries matters more than appearing comprehensive.',
      },
      {
        type: 'ul',
        items: [
          'It does not produce your bill. It estimates the energy, fixed and customer charge components. Electricity duty, meter rent, delayed payment surcharge, arrears, security deposit demands, subsidy credits and adjustments for earlier provisional billing all appear on your official bill and cannot be derived from units and load.',
          'It does not cover high-tension connections. HT billing turns on contracted demand, recorded maximum demand, power factor and kVAh metering data, which this tool does not model.',
          'It does not accept payments. The Pay Bill page links to the official DISCOM portals and nothing else; every transaction happens on the DISCOM’s own site.',
          'It cannot see your account. No part of this site connects to any DISCOM system, so it cannot look up a service number, fetch a bill or resolve a dispute.',
          'It is not legal or regulatory advice. For anything binding, the tariff order and your DISCOM are the authorities.',
        ],
      },
    ],
  },
  {
    id: 'editorial',
    heading: 'Editorial approach and corrections',
    blocks: [
      {
        type: 'p',
        text: 'The written guides are original explanatory material, not summaries of other websites. Where a guide states a rate or a charge, that figure comes from the same tariff dataset the calculator uses, so the arithmetic in a worked example can be reproduced with the tool. Worked examples are checked by hand.',
      },
      {
        type: 'p',
        text: 'Some things are genuinely uncertain — the precise threshold at which a particular connection must migrate from LT to HT, for instance, depends on supply conditions specific to that connection. Where that is the case the guides say so and point you at the DISCOM, rather than inventing a confident answer.',
      },
      {
        type: 'p',
        text: `If you find an error, please report it to ${CONTACT_EMAIL}. Substantive corrections are made to the affected page, and the tariff dataset is updated when APERC issues a revised schedule.`,
      },
    ],
  },
  {
    id: 'funding',
    heading: 'How the site is funded',
    blocks: [
      {
        type: 'p',
        text: 'The site is free to use and carries third-party advertising, which covers hosting and the domain. Advertising has no influence on the content: rates come from the tariff schedule, and the guides do not recommend products or accept payment for coverage. The Privacy Policy sets out what advertising means for cookies and data.',
      },
    ],
  },
];

function About() {
  const { t, locale } = useI18n();

  return (
    <div className="space-y-8">
      <Seo path="/about" jsonLdType="AboutPage" />

      <PageHeader
        eyebrow={t('aboutPage.eyebrow')}
        title={t('aboutPage.title', { name: APP_NAME })}
        lead={t('aboutPage.lead')}
        meta={t('common.lastReviewed', {
          date: formatLongDate(POLICY_UPDATED, locale),
        })}
      />

      <ContentLanguageNote />

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={SECTIONS} />
      </article>

      <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-8">
        <Link to="/">
          <Button>{t('aboutPage.openCalc')}</Button>
        </Link>
        <Link to="/guides">
          <Button variant="outline">{t('aboutPage.readGuides')}</Button>
        </Link>
        <Link to="/contact">
          <Button variant="secondary">{t('aboutPage.contactUs')}</Button>
        </Link>
      </div>
    </div>
  );
}

export default About;
