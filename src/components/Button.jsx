import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5',
    secondary:
      'border border-white/10 text-text/80 hover:bg-white/5 hover:border-white/20 hover:text-text',
    accent:
      'bg-gradient-to-r from-accent to-accent/80 text-dark-bg font-semibold hover:from-accent/90 hover:to-accent shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5',
    ghost:
      'text-text/60 hover:text-text hover:bg-white/5',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}