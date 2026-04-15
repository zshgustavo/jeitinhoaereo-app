import { useState } from 'react'
import Button from '../ui/Button'
import Field from '../ui/Field'
import { useLanguage } from '../../hooks/useLanguage'

const paymentOptions = ['Cartão', 'Pix', 'Apple Pay', 'Google Pay', 'Cripto']

export default function BookingScreen({ selectedFlight, onSubmit }) {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', payment: paymentOptions[0] })

  if (!selectedFlight) return null

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-line bg-white/80 p-4 shadow-sm">
      <h2 className="text-lg font-bold text-ink">{t('bookingTitle')}</h2>
      <div className="rounded-xl bg-navy/5 p-3 text-sm text-ink">
        <p className="font-semibold">{selectedFlight.from.code} → {selectedFlight.to.code}</p>
        <p className="text-muted">{selectedFlight.airline}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Field label={t('nameLabel')}>
          <input
            required
            value={form.name}
            onChange={handleChange('name')}
            className="w-full rounded-xl border border-line bg-white px-3 py-3 text-base text-ink shadow-sm"
            placeholder="Jéssica Pereira"
          />
        </Field>
        <Field label={t('emailLabel')}>
          <input
            required
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            className="w-full rounded-xl border border-line bg-white px-3 py-3 text-base text-ink shadow-sm"
            placeholder="voce@email.com"
          />
        </Field>
        <Field label={t('paymentLabel')}>
          <select
            value={form.payment}
            onChange={handleChange('payment')}
            className="w-full rounded-xl border border-line bg-white px-3 py-3 text-base font-semibold text-ink shadow-sm"
          >
            {paymentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Button type="submit">{t('bookCta')}</Button>
      </form>
    </section>
  )
}
