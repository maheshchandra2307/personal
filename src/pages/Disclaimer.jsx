import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import { APP_NAME, TARIFF_YEAR } from '../constants';
import {
  CONTACT_EMAIL,
  DISCOM_HELPLINE,
  POLICY_UPDATED,
  TARIFF_EFFECTIVE_DATE,
} from '../constants/site';
import { formatLongDate } from '../utils';

const SECTIONS = [
  {
    id: 'unofficial',
    heading: 'This is an unofficial, independent site',
    blocks: [
      {
        type: 'p',
        text: `${APP_NAME} is a personal, independent project. It is not affiliated with, endorsed by, sponsored by, or operated on behalf of the Andhra Pradesh Electricity Regulatory Commission, the Andhra Pradesh Southern, Central or Eastern Power Distribution companies, or the Government of Andhra Pradesh.`,
      },
      {
        type: 'p',
        text: 'Where the names or acronyms of those organisations appear, they are used solely to identify the body concerned and to help you reach the correct official website. No association should be inferred from their use.',
      },
    ],
  },
  {
    id: 'estimates',
    heading: 'Estimates are not your bill',
    blocks: [
      {
        type: 'p',
        text: 'The calculator produces an estimate of the energy, fixed and customer charge components of a low-tension electricity bill. It is a planning aid, not an invoice, and it will frequently differ from the amount your distribution company actually charges you.',
      },
      {
        type: 'p',
        text: 'Items that appear on a real bill but cannot be derived from units and load include electricity duty and other statutory levies, meter rent, delayed payment surcharge, arrears carried forward, additional consumption deposit demands, subsidy credits, reconnection and testing fees, and adjustments correcting an earlier provisional bill. A billing period that is longer or shorter than a month will also change the result, because slab thresholds are defined per month.',
      },
      {
        type: 'p',
        text: 'Your official bill is the only authoritative statement of what you owe.',
      },
    ],
  },
  {
    id: 'data',
    heading: 'About the tariff data',
    blocks: [
      {
        type: 'p',
        text: `Rates on this site are transcribed from the published APERC low-tension retail supply tariff schedule for ${TARIFF_YEAR}, effective ${TARIFF_EFFECTIVE_DATE}. Transcription is a manual process and tariff schedules are amended from time to time.`,
      },
      {
        type: 'p',
        text: 'We do not warrant that every figure here is current or free of error. Where anything on this site conflicts with the tariff order or with your bill, the official document is correct and this site is not. Please verify any figure that matters to a financial decision against the order itself.',
      },
      {
        type: 'p',
        text: 'The calculator covers low-tension categories only. High-tension connections are billed on contracted demand, recorded maximum demand, power factor and kVAh metering, none of which this tool models.',
      },
    ],
  },
  {
    id: 'no-advice',
    heading: 'Not professional advice',
    blocks: [
      {
        type: 'p',
        text: 'Nothing on this site is legal, regulatory, financial or engineering advice, and no relationship of professional adviser and client arises from your use of it. The guides are general explanatory material written for a wide audience; they cannot account for the particular circumstances of your connection.',
      },
      {
        type: 'p',
        text: 'Before acting on anything with financial consequences — changing sanctioned load, migrating from low tension to high tension, contesting a bill, or investing in rooftop generation — consult your distribution company or a suitably qualified professional.',
      },
    ],
  },
  {
    id: 'payments',
    heading: 'We never take payments',
    blocks: [
      {
        type: 'p',
        text: 'This site does not collect, process or hold money in any form. The Pay Bill page provides links that open the official payment pages of the distribution companies, and every transaction takes place there, under that provider’s own terms.',
      },
      {
        type: 'callout',
        title: 'Protect yourself from bill-payment fraud',
        text: `Pay only on your DISCOM’s own website. Messages threatening immediate disconnection unless you pay through a link, install an app, or share an OTP are a common fraud. A DISCOM will not ask for card details or OTPs by phone. When in doubt, call ${DISCOM_HELPLINE}.`,
      },
    ],
  },
  {
    id: 'external',
    heading: 'External links',
    blocks: [
      {
        type: 'p',
        text: 'Links to third-party websites are provided for convenience. We do not control those sites and are not responsible for their content, accuracy, availability or security. A link is not an endorsement, and following one takes you outside the scope of this site’s policies.',
      },
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    blocks: [
      {
        type: 'p',
        text: 'To the fullest extent permitted by law, we accept no liability for any loss or damage arising from use of, or reliance on, this site — including any difference between an estimate here and your actual bill, any decision taken on the basis of information here, any period of unavailability, or anything encountered on a third-party site reached from a link here.',
      },
      {
        type: 'p',
        text: `If you believe something on this site is wrong, please tell us at ${CONTACT_EMAIL} so it can be corrected for everyone.`,
      },
    ],
  },
];

function Disclaimer() {
  return (
    <div className="space-y-8">
      <Seo path="/disclaimer" />

      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        lead="An unofficial estimator, not a billing system. This page sets out plainly what this site is, what its numbers mean, and where its limits are."
        meta={`Last updated ${formatLongDate(POLICY_UPDATED)}`}
      />

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={SECTIONS} />
      </article>

      <p className="max-w-3xl border-t border-slate-200 pt-8 text-[13px] leading-relaxed text-slate-500">
        See also our{' '}
        <Link
          to="/terms"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          to="/privacy-policy"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        . The{' '}
        <Link
          to="/about"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          About page
        </Link>{' '}
        explains how the calculator works and where the tariff data comes from.
      </p>
    </div>
  );
}

export default Disclaimer;
