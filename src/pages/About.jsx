import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { APP_NAME, TARIFF_YEAR } from '../constants';

const features = [
  {
    title: 'Full LT Calculator',
    description:
      'Domestic, commercial, industrial, agriculture, institutional, and temporary categories with telescopic slabs, ToD, and free-quota logic.',
  },
  {
    title: 'Tariff Reference',
    description: `${TARIFF_YEAR} slab tables, other charges, DPS, reconnection, meter testing, and grid support charges in one place.`,
  },
  {
    title: 'Official Pay Redirects',
    description:
      'Quick links to APEPDCL, APCPDCL, and APSPDCL payment portals with district coverage and helplines.',
  },
  {
    title: 'Bill Help Chat',
    description:
      'FAQ assistant for DISCOM lookup, service number tips, payment steps, and complaint helplines.',
  },
];

function About() {
  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About {APP_NAME}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          An independent Andhra Pradesh electricity bill helper built around
          APERC {TARIFF_YEAR} LT tariff rates. Estimate your bill, browse tariff
          tables, and jump to official DISCOM payment pages.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-amber-800">
          This app is unofficial and not affiliated with APERC, AP DISCOMs, or
          the Government of Andhra Pradesh. Estimates can differ from final
          billed amounts.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-slate-900">
          What you can do
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/">
          <Button>Open Calculator</Button>
        </Link>
        <Link to="/pay">
          <Button variant="outline">Pay Bill Links</Button>
        </Link>
      </div>
    </div>
  );
}

export default About;
