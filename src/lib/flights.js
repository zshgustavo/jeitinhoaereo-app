import airports from '../data/airports'

const airlines = ['Aero Sol', 'Latam', 'Azul', 'Global Air', 'Iberia']

function randomFrom(array, seed) {
  return array[seed % array.length]
}

export function generateFlights(originCode, destinationCode) {
  const now = new Date()
  const base = Math.abs(originCode?.charCodeAt(0) ?? 1 - (destinationCode?.charCodeAt(0) ?? 2))
  return [0, 1, 2].map((offset) => {
    const price = 650 + (base + offset) * 23
    const departure = new Date(now.getTime() + (offset + 1) * 3.6e6)
    const arrival = new Date(departure.getTime() + 3.6e6)
    return {
      id: `${originCode}-${destinationCode}-${offset}`,
      from: airports.find((a) => a.code === originCode) ?? airports[0],
      to: airports.find((a) => a.code === destinationCode) ?? airports[1],
      airline: randomFrom(airlines, base + offset),
      price,
      departure,
      arrival,
      nonstop: offset % 2 === 0,
    }
  })
}
