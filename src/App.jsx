import { useState } from 'react'
import AppShell from './components/layout/AppShell'
import SearchScreen from './components/screens/SearchScreen'
import ResultsScreen from './components/screens/ResultsScreen'
import BookingScreen from './components/screens/BookingScreen'
import ConfirmationScreen from './components/screens/ConfirmationScreen'
import Card from './components/ui/Card'
import { generateFlights } from './lib/flights'

function buildCode(origin, destination) {
  const stamp = new Date().toISOString().replace(/\D/g, '').slice(-6)
  return `JA-${origin ?? 'XXX'}${destination ?? 'XXX'}-${stamp}`
}

function App() {
  const [state, setState] = useState('search')
  const [trip, setTrip] = useState({ origin: null, destination: null })
  const [flights, setFlights] = useState([])
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [confirmationCode, setConfirmationCode] = useState('')

  const hasResults = flights.length > 0

  const handleSearch = (origin, destination) => {
    const generated = generateFlights(origin, destination)
    setTrip({ origin, destination })
    setFlights(generated)
    setSelectedFlight(generated[0])
    setState('results')
  }

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight)
    setState('booking')
  }

  const handleBooking = () => {
    setConfirmationCode(buildCode(trip.origin, trip.destination))
    setState('done')
  }

  const reset = () => {
    setState('search')
    setFlights([])
    setSelectedFlight(null)
    setConfirmationCode('')
  }

  return (
    <AppShell state={state}>
      <SearchScreen onSearch={handleSearch} />
      {state === 'results' && (
        <ResultsScreen flights={flights} onSelectFlight={handleSelectFlight} />
      )}
      {state === 'booking' && (
        <BookingScreen selectedFlight={selectedFlight} onSubmit={handleBooking} />
      )}
      {state === 'done' && <ConfirmationScreen code={confirmationCode} onReset={reset} />}
      {state === 'search' && !hasResults && (
        <Card className="flex flex-col gap-2 rounded-2xl border border-dashed border-line bg-white/60 p-4 text-muted">
          <p className="text-sm font-semibold text-ink">Fluxo de telas</p>
          <p>Preencha a busca para simular resultados e reserva.</p>
        </Card>
      )}
    </AppShell>
  )
}

export default App
