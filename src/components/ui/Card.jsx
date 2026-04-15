export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-line bg-white/90 shadow-shell backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}
