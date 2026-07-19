import { cn } from '../../utils';

const variants = {
  primary:
    'bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-500',
  secondary:
    'bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-400',
  outline:
    'border border-amber-600 text-amber-700 hover:bg-amber-50 focus-visible:ring-amber-500',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
