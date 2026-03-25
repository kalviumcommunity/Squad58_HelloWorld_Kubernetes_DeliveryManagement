import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
  const [menus, setMenus] = useState([])
  const [distanceKm, setDistanceKm] = useState(4)
  const [peak, setPeak] = useState(false)
  const [version, setVersion] = useState('stable')
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const flatItems = useMemo(() => {
    return menus.flatMap((restaurant) =>
      restaurant.menu.map((item) => ({ ...item, restaurant: restaurant.name }))
    )
  }, [menus])

  useEffect(() => {
    const loadCities = async () => {
      try {
        const response = await fetch('/api/cities')
        const data = await response.json()
        setCities(data)
        setCity(data[0] || '')
      } catch (_err) {
        setError('Unable to load cities from backend. Start backend on port 8080.')
      }
    }

    loadCities()
  }, [])

  useEffect(() => {
    if (!city) {
      return
    }

    const loadMenus = async () => {
      setError('')
      try {
        const response = await fetch(`/api/menus?city=${encodeURIComponent(city)}`)
        const data = await response.json()
        setMenus(data.restaurants || [])
      } catch (_err) {
        setError('Unable to load menu data for selected city.')
      }
    }

    loadMenus()
  }, [city])

  const onGetQuote = async () => {
    if (!city) {
      return
    }

    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({
        city,
        distanceKm: String(distanceKm),
        peak: String(peak),
        version
      })
      const response = await fetch(`/api/pricing/quote?${params.toString()}`)
      const data = await response.json()
      setQuote(data)
    } catch (_err) {
      setError('Unable to calculate quote right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <header className="header">
        <h1>Delivery Operations Console</h1>
        <p>
          Simulate live menu and pricing rollouts across multiple cities without restarting the
          platform.
        </p>
      </header>

      <section className="panel controls">
        <h2>Pricing Simulator</h2>
        <div className="grid">
          <label>
            City
            <select value={city} onChange={(event) => setCity(event.target.value)}>
              {cities.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

          <label>
            Distance (km)
            <input
              min="1"
              max="20"
              type="number"
              value={distanceKm}
              onChange={(event) => setDistanceKm(Number(event.target.value || 0))}
            />
          </label>

          <label>
            Algorithm Version
            <select value={version} onChange={(event) => setVersion(event.target.value)}>
              <option value="stable">stable</option>
              <option value="canary">canary</option>
            </select>
          </label>

          <label className="checkbox">
            <input type="checkbox" checked={peak} onChange={(event) => setPeak(event.target.checked)} />
            Peak hour
          </label>
        </div>

        <button className="action" onClick={onGetQuote} disabled={loading || !city}>
          {loading ? 'Calculating...' : 'Generate Quote'}
        </button>

        {quote && (
          <div className="quote">
            <span>Estimated fee</span>
            <strong>INR {quote.deliveryFee}</strong>
            <small>
              {quote.city} | {quote.version} | {quote.peakHour ? 'Peak' : 'Off-peak'}
            </small>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </section>

      <section className="panel">
        <h2>Live Menu Snapshot</h2>
        <div className="list">
          {flatItems.map((item) => (
            <article key={item.id}>
              <h3>{item.item}</h3>
              <p>{item.restaurant}</p>
              <span>INR {item.price}</span>
            </article>
          ))}
          {!flatItems.length && <p>No items available for selected city.</p>}
        </div>
      </section>
    </main>
  )
}

export default App
