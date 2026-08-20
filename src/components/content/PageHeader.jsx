import { Link } from 'react-router-dom';

/** Shared heading block for content and policy pages. */
function PageHeader({ eyebrow, title, lead, meta, breadcrumbs }) {
  return (
    <header className="max-w-3xl">
      {breadcrumbs?.length ? (
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-slate-500">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                ) : null}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-slate-400">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="transition-colors hover:text-slate-900"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {eyebrow ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-600">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>

      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[17px]">
          {lead}
        </p>
      ) : null}

      {meta ? (
        <p className="mt-4 text-[12px] uppercase tracking-wide text-slate-400">
          {meta}
        </p>
      ) : null}
    </header>
  );
}

export default PageHeader;
