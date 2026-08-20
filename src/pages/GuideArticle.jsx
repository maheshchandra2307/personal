import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHeader from '../components/content/PageHeader';
import ContentBlocks from '../components/content/ContentBlocks';
import JsonLd from '../components/content/JsonLd';
import NotFound from './NotFound';
import { GUIDES, getGuideBySlug } from '../constants/guides';
import { canonicalUrl } from '../constants/seo';
import { APP_NAME } from '../constants';
import { SITE_URL } from '../constants/site';
import { formatLongDate } from '../utils';

function buildJsonLd(guide) {
  const url = canonicalUrl(`/guides/${guide.slug}`);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    inLanguage: 'en-IN',
    dateModified: guide.updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    publisher: {
      '@type': 'Organization',
      name: APP_NAME,
      url: SITE_URL,
    },
  };

  if (!guide.faqs?.length) {
    return article;
  }

  return [
    article,
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ];
}

function GuideArticle() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <NotFound />;
  }

  const related = (guide.related || [])
    .map((relatedSlug) => GUIDES.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  return (
    <div className="space-y-8">
      <Seo path={`/guides/${guide.slug}`} />
      <JsonLd data={buildJsonLd(guide)} />

      <PageHeader
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Guides', path: '/guides' },
          { label: guide.title, path: `/guides/${guide.slug}` },
        ]}
        eyebrow={guide.category}
        title={guide.title}
        lead={guide.intro}
        meta={`${guide.readingTime} · Updated ${formatLongDate(guide.updated)}`}
      />

      <nav
        aria-label="On this page"
        className="max-w-3xl rounded-xl border border-slate-200 bg-slate-50 px-6 py-5"
      >
        <p className="font-display text-[12px] font-semibold uppercase tracking-wide text-slate-500">
          On this page
        </p>
        <ol className="mt-3 space-y-1.5 text-[14px]">
          {guide.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-slate-600 underline-offset-2 transition-colors hover:text-amber-700 hover:underline"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="max-w-3xl text-[15px] leading-relaxed text-slate-600">
        <ContentBlocks sections={guide.sections} />

        {guide.faqs?.length ? (
          <section id="faqs" className="scroll-mt-24">
            <h2 className="font-display mt-12 text-2xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-5 space-y-6">
              {guide.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-display text-[17px] font-semibold text-slate-900">
                    {faq.q}
                  </h3>
                  <p className="mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </article>

      {related.length ? (
        <section className="max-w-3xl border-t border-slate-200 pt-8">
          <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
            Continue reading
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/guides/${item.slug}`}
                  className="group block rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-amber-300"
                >
                  <span className="font-display block text-[15px] font-semibold text-slate-900 group-hover:text-amber-700">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-slate-500">
                    {item.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="max-w-3xl border-t border-slate-200 pt-8 text-[13px] leading-relaxed text-slate-500">
        Want to try these numbers on your own bill? Open the{' '}
        <Link
          to="/"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          calculator
        </Link>
        . This guide is general explanatory material, not professional advice —
        see our{' '}
        <Link
          to="/disclaimer"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}

export default GuideArticle;
