import Button from '../ui/Button'
import { useLanguage } from '../../hooks/useLanguage'

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

export default function ResultsScreen({ flights = [], onSelectFlight }) {
  const { t } = useLanguage()
  if (!flights.length) return null

  const bestId = flights.reduce((best, current) =>
    current.price < best.price ? current : best,
  ).id

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-line bg-white/80 p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-ink">{t('resultsTitle')}</h2>
        <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange">
          {t('bestOffer')}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {flights.map((flight) => {
          const isBest = flight.id === bestId
          return (
            <article
              key={flight.id}
              className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 shadow-sm ${
                isBest ? 'border-orange bg-orange/5' : 'border-line bg-white'
              }`}
            >
              <div className="flex flex-col">
                <p className="text-xs uppercase tracking-wide text-muted">{flight.airline}</p>
                <p className="text-base font-bold text-ink">
                  {flight.from.code} → {flight.to.code}
                </p>
                <p className="text-sm text-muted">
                  {flight.departure.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  {' · '}
                  {flight.arrival.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide text-muted">{flight.nonstop ? 'Direto' : '1 escala'}</p>
                  <p className="text-xl font-extrabold text-ink">{priceFormatter.format(flight.price)}</p>
                </div>
                <Button type="button" variant={isBest ? 'primary' : 'ghost'} onClick={() => onSelectFlight(flight)}>
                  {isBest ? t('proceed') : t('changeFlight')}
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
