export default function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink">
      <span>{label}</span>
      {children}
    </label>
  )
}
