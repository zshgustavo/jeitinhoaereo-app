export default function Button({ children, variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const styles = {
    primary: `${base} bg-orange text-white hover:bg-orange/90 focus-visible:outline-orange`,
    ghost: `${base} bg-white text-ink border border-line hover:border-orange focus-visible:outline-orange`,
  }

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  )
}
