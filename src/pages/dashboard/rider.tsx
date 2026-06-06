import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MapPin, Search, Navigation, Compass, History, LogOut } from 'lucide-react'

interface RouteResult {
  from: string
  to: string
  wait: number
  fare: number
  available: number
}

const RiderDashboard: React.FC = () => {
  const navigate = useNavigate()
  const [origin, setOrigin] = useState('')
  const [dest, setDest] = useState('')
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState<RouteResult | null>(null)
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'searching' | 'assigned' | 'trip_started' | 'completed'>('idle')
  const [simulatedVehicle] = useState({ type: 'Danfo', driver: 'Deji Adebayo', plate: 'LAG-491A', eta: 4 })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!origin.trim() || !dest.trim()) return
    setLoading(true)
    setSearchResult(null)
    setTimeout(() => {
      setSearchResult({
        from: origin,
        to: dest,
        wait: Math.floor(Math.random() * 8) + 2,
        fare: Math.floor(Math.random() * 800) + 400,
        available: Math.floor(Math.random() * 6) + 1,
      })
      setLoading(false)
    }, 1000)
  }

  const handleBook = () => {
    setBookingStatus('searching')
    setTimeout(() => {
      setBookingStatus('assigned')
      // Simulate progress
      setTimeout(() => {
        setBookingStatus('trip_started')
        setTimeout(() => {
          setBookingStatus('completed')
        }, 5000)
      }, 4000)
    }, 3000)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-section flex flex-col font-body">
      {/* Top Header */}
      <header className="w-full bg-white border-b border-hairline py-4 px-6 md:px-12 sticky top-0 z-40 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary text-white p-2 rounded-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display font-extrabold text-[18px] text-ink">
            Urban<span className="text-primary">pulse</span>
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="bg-primary-light text-primary text-[12px] font-bold px-3 py-1.5 rounded-pill border border-primary-muted flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Rider Account
          </div>
          <button
            onClick={handleLogout}
            className="p-2 rounded-xl bg-paper hover:bg-hairline text-ink-soft hover:text-ink transition-default border border-hairline cursor-pointer"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl w-full mx-auto p-6 md:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Side: Ride Request Panel */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-white border border-hairline rounded-2xl p-6 flex flex-col space-y-5">
            <h2 className="text-[22px] font-extrabold text-ink tracking-tight flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary" />
              Where are you going?
            </h2>

            <form onSubmit={handleSearch} className="flex flex-col space-y-4">
              <div className="relative">
                <label className="block text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-1.5">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4.5 h-4.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yaba Terminal, Lagos"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full border-2 border-hairline rounded-xl pl-11 pr-4 py-3.5 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-1.5">Destination</label>
                <div className="relative">
                  <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-teal w-4.5 h-4.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ojuelegba Bus Stop"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    className="w-full border-2 border-hairline rounded-xl pl-11 pr-4 py-3.5 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || bookingStatus !== 'idle'}
                className="w-full bg-primary hover:bg-primary-deep text-white font-bold text-[14px] h-[52px] rounded-xl flex items-center justify-center gap-2 transition-default cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Find Routes
                  </>
                )}
              </button>
            </form>

            {/* Route Search Result */}
            {searchResult && bookingStatus === 'idle' && (
              <div className="border border-primary-muted bg-primary-light/40 rounded-xl p-5 flex flex-col space-y-4 animate-fade-up">
                <div className="flex items-center justify-between border-b border-primary-muted pb-3">
                  <span className="text-[12px] font-bold text-primary uppercase">Route Found</span>
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-pill">
                    {searchResult.available} vehicles nearby
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-[11px] font-bold text-ink-muted uppercase">Estimated Wait</span>
                    <p className="text-[16px] font-extrabold text-ink">{searchResult.wait} mins</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-ink-muted uppercase">Fare Estimate</span>
                    <p className="text-[16px] font-extrabold text-primary">₦{searchResult.fare}</p>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="w-full bg-primary hover:bg-primary-deep text-white font-bold text-[14px] py-3.5 rounded-xl transition-default cursor-pointer"
                >
                  Book Danfo Seat
                </button>
              </div>
            )}

            {/* Ride Status Sim */}
            {bookingStatus !== 'idle' && (
              <div className="border border-hairline rounded-xl p-5 flex flex-col space-y-4 bg-paper">
                <div className="flex items-center justify-between border-b border-hairline pb-3">
                  <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">Ride Status</span>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-pill border
                    ${bookingStatus === 'searching' ? 'bg-amber-50 text-warning border-amber-200 animate-pulse' : ''}
                    ${bookingStatus === 'assigned' ? 'bg-primary-light text-primary border-primary-muted' : ''}
                    ${bookingStatus === 'trip_started' ? 'bg-blue-50 text-info border-blue-200' : ''}
                    ${bookingStatus === 'completed' ? 'bg-green-50 text-success border-green-200' : ''}
                  `}>
                    {bookingStatus.replace('_', ' ')}
                  </span>
                </div>

                {bookingStatus === 'searching' && (
                  <div className="flex flex-col items-center py-6 text-center space-y-3">
                    <span className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-[13px] font-bold text-ink">Broadcasting ride request to nearby cooperative drivers...</p>
                  </div>
                )}

                {(bookingStatus === 'assigned' || bookingStatus === 'trip_started') && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold text-[18px]">
                          🚌
                        </div>
                        <div>
                          <p className="text-[14px] font-extrabold text-ink">{simulatedVehicle.type} ({simulatedVehicle.plate})</p>
                          <p className="text-[12px] text-ink-soft">Driver: {simulatedVehicle.driver}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-ink-muted uppercase">ETA</span>
                        <p className="text-[14px] font-extrabold text-primary">{bookingStatus === 'assigned' ? `${simulatedVehicle.eta}m` : 'On Board'}</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-hairline text-[12px] text-ink-soft">
                      {bookingStatus === 'assigned' 
                        ? 'Your driver is heading to Yaba Terminal. Please remain at the boarding bay.'
                        : 'Trip is active. GPS signals are streaming to UrbanPulse AI mapping portal.'}
                    </div>
                  </div>
                )}

                {bookingStatus === 'completed' && (
                  <div className="flex flex-col items-center py-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-green-50 border border-green-200 text-success rounded-full flex items-center justify-center font-bold text-[22px]">
                      ✓
                    </div>
                    <div>
                      <p className="text-[15px] font-extrabold text-ink">Arrived at destination!</p>
                      <p className="text-[12px] text-ink-soft">Total telemetry data logged: 4.8MB</p>
                    </div>
                    <button
                      onClick={() => { setBookingStatus('idle'); setSearchResult(null) }}
                      className="text-[13px] font-bold text-primary underline"
                    >
                      Book another ride
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Route Map Simulation */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="bg-white border border-hairline rounded-2xl p-5 relative overflow-hidden flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-hairline pb-3">
              <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wider">Live Route Simulation Map</span>
              <span className="text-[10px] bg-primary-light text-primary font-bold uppercase px-2.5 py-1 rounded-pill">
                Active Telemetry Node
              </span>
            </div>

            <div className="w-full flex-1 aspect-[16/10] bg-primary-light/30 rounded-xl border border-hairline relative flex items-center justify-center overflow-hidden min-h-[300px]">
              {/* Virtual Map Path */}
              <svg className="absolute inset-0 w-full h-full text-hairline-strong/60" viewBox="0 0 500 300" fill="none">
                <path d="M50 240 C150 180, 300 220, 450 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                {bookingStatus === 'trip_started' && (
                  <path d="M50 240 C150 180, 300 220, 450 100" stroke="#0c513f" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                )}
              </svg>

              {/* Boarding point */}
              <div className="absolute bottom-[40px] left-[60px] flex flex-col items-center">
                <span className="w-3.5 h-3.5 bg-primary rounded-full border-2 border-white shadow-sm" />
                <span className="text-[9px] font-bold bg-white border px-1.5 py-0.5 rounded mt-1">Yaba</span>
              </div>

              {/* Dropoff point */}
              <div className="absolute top-[80px] right-[60px] flex flex-col items-center">
                <span className="w-3.5 h-3.5 bg-accent-teal rounded-full border-2 border-white shadow-sm" />
                <span className="text-[9px] font-bold bg-white border px-1.5 py-0.5 rounded mt-1">Ojuelegba</span>
              </div>

              {/* Simulated vehicle marker */}
              {bookingStatus === 'trip_started' && (
                <div className="absolute top-[170px] left-[230px] flex flex-col items-center">
                  <span className="w-4.5 h-4.5 bg-success rounded-full animate-ping absolute" />
                  <div className="bg-primary text-white p-2 rounded-xl text-[14px] relative border-2 border-white shadow-sm">
                    🚌
                  </div>
                  <span className="text-[8px] font-extrabold bg-ink text-white px-2 py-0.5 rounded mt-1 whitespace-nowrap">
                    DF491 · 45km/h
                  </span>
                </div>
              )}
            </div>

            {/* Travel stats */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-hairline bg-paper p-3.5 rounded-xl">
              <div>
                <p className="text-[9px] font-bold text-ink-muted uppercase">Wait Telemetry</p>
                <p className="text-[14px] font-extrabold text-primary">Buffered (PWA)</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-ink-muted uppercase">Sync Latency</p>
                <p className="text-[14px] font-extrabold text-primary">12ms</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-ink-muted uppercase">Packet Delivery</p>
                <p className="text-[14px] font-extrabold text-primary">99.8%</p>
              </div>
            </div>
          </div>

          {/* Ride History */}
          <div className="bg-white border border-hairline rounded-2xl p-6 text-left">
            <h3 className="text-[15px] font-extrabold text-ink mb-4 flex items-center gap-2">
              <History className="w-4 h-4 text-primary" />
              Recent Ride Telemetry Logs
            </h3>
            <div className="flex flex-col space-y-3">
              {[
                { route: 'Yaba Terminal → CMS Bus Stop', date: 'Yesterday, 06:12 PM', packets: '480 packets', status: 'Synced' },
                { route: 'Ikeja Underbridge → Maryland', date: '4 June, 08:34 AM', packets: '890 packets', status: 'Synced' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center border-b border-hairline pb-2.5 last:border-0 last:pb-0">
                  <div>
                    <p className="text-[13px] font-bold text-ink">{h.route}</p>
                    <p className="text-[11px] text-ink-soft">{h.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-bold text-primary">{h.packets}</p>
                    <span className="text-[9px] bg-green-50 text-success px-2 py-0.5 rounded-pill font-bold border border-green-200">{h.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default RiderDashboard
