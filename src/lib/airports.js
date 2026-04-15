import airports from '../data/airports'
import { normalize } from './normalize'

export function searchAirports(term) {
  if (!term) return airports
  const query = normalize(term)
  return airports.filter((airport) => {
    const haystack = `${airport.code} ${airport.city} ${airport.country} ${airport.name}`
    return normalize(haystack).includes(query)
  })
}

export function formatAirport(airport) {
  return `${airport.city} · ${airport.code}`
}
