import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import { APP_NAME } from '../constants';
import { CONTACT_EMAIL, POLICY_UPDATED, SITE_DOMAIN } from '../constants/site';
import { formatLongDate } from '../utils';

const SECTIONS = [
  {
    id: 'acceptance',
    heading: '1. Acceptance of these terms',
    blocks: [
      {
        type: 'p',
        text: `These terms govern your use of ${SITE_DOMAIN}. By using the site you accept them. If you do not accept them, please do not use the site.`,
      },
      {
        type: 'p',
        text: 'The site is provided free of charge, and no contract for the supply of services is created between you and us beyond what is set out here.',
      },
    ],
  },
  {
    id: 'service',
    heading: '2. What the service is',
    blocks: [
      {
        type: 'p',
        text: `${APP_NAME} is an independent, unofficial tool that estimates electricity charges under the published APERC low-tension tariff schedule for Andhra Pradesh, provides reference tables for that schedule, publishes explanatory guides, and links to the official payment pages of the state distribution companies.`,
      },
      {
        type: 'p',
        text: 'The site is not affiliated with, endorsed by, or operated on behalf of the Andhra Pradesh Electricity Regulatory Commission, APSPDCL, APCPDCL, APEPDCL, or the Government of Andhra Pradesh. Utility names and acronyms are used only to identify the organisations concerned.',
      },
    ],
  },
  {
    id: 'estimates',
    heading: '3. Estimates are not bills',
    blocks: [
      {
        type: 'p',
        text: 'Figures produced by this site are estimates for information only. They are not an invoice, a demand, a quotation, or a statement of any amount payable, and they create no entitlement or liability of any kind.',
      },
      {
        type: 'p',
        text: 'Your official electricity bill, issued by your distribution company, is the only authoritative statement of what you owe. An estimate may differ from it for reasons including statutory duty, meter rent, delayed payment surcharge, arrears, security deposit demands, subsidy adjustments, provisional billing corrections, a billing period other than one month, an incorrect category or load entered by you, or a subsequent amendment to the tariff schedule.',
      },
      {
        type: 'p',
        text: 'Nothing on this site is legal, financial, regulatory or engineering advice. Decisions with financial or contractual consequences — changing your sanctioned load, migrating from low tension to high tension, disputing a bill, or investing in generation equipment — should be taken on the basis of the tariff order and advice from your distribution company or a qualified professional.',
      },
    ],
  },
  {
    id: 'accuracy',
    heading: '4. Accuracy and availability',
    blocks: [
      {
        type: 'p',
        text: 'We take reasonable care to reproduce the applicable tariff schedule correctly and to keep the written content accurate, but we do not warrant that the site is free of errors or that it reflects the most recent regulatory position at any given moment. Tariff schedules are amended, and transcription is a manual process.',
      },
      {
        type: 'p',
        text: 'Where anything on this site conflicts with the tariff order issued by APERC, or with your official bill, the official document prevails. If you find a discrepancy, please report it so it can be corrected.',
      },
      {
        type: 'p',
        text: 'The site is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted availability, and we may change, suspend, restrict or withdraw any part of it at any time without notice.',
      },
    ],
  },
  {
    id: 'acceptable-use',
    heading: '5. Acceptable use',
    blocks: [
      {
        type: 'p',
        text: 'You may use this site for your own personal or internal business purposes. You agree not to:',
      },
      {
        type: 'ul',
        items: [
          'Use the site for any unlawful purpose, or in a way that infringes the rights of others.',
          'Attempt to gain unauthorised access to the site, its hosting infrastructure, or any connected system.',
          'Introduce malicious code, or interfere with the operation or security of the site.',
          'Impose an unreasonable load through automated scraping, bulk requests or similar activity.',
          'Present the site, or any output from it, as an official communication from a distribution company, from APERC, or from any government body.',
          'Remove, obscure or circumvent any attribution, disclaimer or advertising forming part of the site.',
        ],
      },
    ],
  },
  {
    id: 'ip',
    heading: '6. Intellectual property',
    blocks: [
      {
        type: 'p',
        text: 'The written guides, explanatory text, page design, calculator implementation and site code are our intellectual property. You may read, print and share links to pages for personal or internal use, and quote short extracts with attribution and a link to the source page.',
      },
      {
        type: 'p',
        text: 'You may not republish substantial portions of the written content, present it as your own, or use it to populate another site or application without permission.',
      },
      {
        type: 'p',
        text: 'Tariff rates and regulatory data are matters of public record and are not claimed as our property. Third-party names, logos and trade marks belong to their respective owners and are used for identification only.',
      },
    ],
  },
  {
    id: 'third-party',
    heading: '7. Third-party links and payments',
    blocks: [
      {
        type: 'p',
        text: 'This site links to external websites, including the official payment portals of the distribution companies and government scheme portals. Those sites are outside our control. We provide the links for convenience and do not endorse, and are not responsible for, their content, availability, security or practices.',
      },
      {
        type: 'p',
        text: 'This site never collects payments. Every payment takes place on the distribution company’s own site or its authorised payment gateway, subject to that provider’s terms. We are not a party to any payment you make and cannot process, trace or refund one. Always confirm the address bar shows the official domain before entering any details.',
      },
    ],
  },
  {
    id: 'advertising',
    heading: '8. Advertising',
    blocks: [
      {
        type: 'p',
        text: 'The site carries third-party advertising, which funds its operation. Advertisements are selected and served by third parties, not by us. Their appearance on this site is not an endorsement, and any dealing you have with an advertiser is solely between you and them. The Privacy Policy explains the data implications of advertising on this site.',
      },
    ],
  },
  {
    id: 'liability',
    heading: '9. Limitation of liability',
    blocks: [
      {
        type: 'p',
        text: 'To the fullest extent permitted by law, we exclude liability for any loss or damage arising from your use of, or reliance on, this site or anything on it. This includes any loss arising from an estimate that differs from your actual bill, from a decision taken on the basis of information here, from the unavailability of the site, or from your use of a third-party site reached from a link here.',
      },
      {
        type: 'p',
        text: 'Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited.',
      },
    ],
  },
  {
    id: 'changes',
    heading: '10. Changes to these terms',
    blocks: [
      {
        type: 'p',
        text: 'These terms may be revised from time to time. The revised version applies from the date it is published on this page, and the review date above will be updated. Continuing to use the site after a change indicates acceptance of the revised terms.',
      },
    ],
  },
  {
    id: 'law',
    heading: '11. Governing law',
    blocks: [
      {
        type: 'p',
        text: 'These terms are governed by the laws of India, and the courts having jurisdiction in Andhra Pradesh shall have exclusive jurisdiction over any dispute arising from them or from your use of the site.',
      },
      {
        type: 'p',
        text: `Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
      },
    ],
  },
];

function Terms() {
  return (
    <div className="space-y-8">
      <Seo path="/terms" />

      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        lead={`The terms on which ${SITE_DOMAIN} is made available, including what the estimates are and are not, acceptable use, and the limits of our liability.`}
        meta={`Last updated ${formatLongDate(POLICY_UPDATED)}`}
      />

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={SECTIONS} />
      </article>
    </div>
  );
}

export default Terms;
