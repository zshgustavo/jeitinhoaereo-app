import { useMemo, useState } from 'react'
import airports from '../../data/airports'
import { formatAirport } from '../../lib/airports'
import Button from '../ui/Button'
import Field from '../ui/Field'
import { useLanguage } from '../../hooks/useLanguage'

export default function SearchScreen({ onSearch }) {
  const { t } = useLanguage()
  const [origin, setOrigin] = useState(airports[0].code)
  const [destination, setDestination] = useState(airports[1].code)

  const destinationOptions = useMemo(
    () => airports.filter((airport) => airport.code !== origin),
    [origin],
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(origin, destination)
  }

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-line bg-white/80 p-4 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">Fluxo</p>
        <h2 className="text-xl font-bold text-ink">{t('searchTitle')}</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label={t('originLabel')}>
          <select
            className="w-full rounded-xl border border-line bg-white px-3 py-3 text-base font-semibold text-ink shadow-sm"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {formatAirport(airport)}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t('destinationLabel')}>
          <select
            className="w-full rounded-xl border border-line bg-white px-3 py-3 text-base font-semibold text-ink shadow-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {destinationOptions.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {formatAirport(airport)}
              </option>
            ))}
          </select>
        </Field>

        <Button type="submit">{t('searchCta')}</Button>
      </form>
    </section>
  )
}
