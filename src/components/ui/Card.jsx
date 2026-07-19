import { cn } from '../../utils';

function Card({ title, description, children, className = '', footer }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm',
        className
      )}
    >
      {title ? (
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-4 flex-1">{children}</div> : null}
      {footer ? (
        <div className="mt-4 border-t border-slate-100 pt-4">{footer}</div>
      ) : null}
    </article>
  );
}

export default Card;
