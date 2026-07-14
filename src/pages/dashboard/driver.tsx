import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlusCircle, FileText, CheckCircle2, TrendingUp } from 'lucide-react'
import DashboardHeader from '../../components/layout/DashboardHeader'

interface Vehicle {
  plate: string
  type: string
  route: string
  capacity: number
}

const DriverDashboard: React.FC = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(true)
  const [plate, setPlate] = useState('')
  const [vType, setVType] = useState('Danfo')
  const [route, setRoute] = useState('')
  const [capacity] = useState(14)
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { plate: 'LAG-491A', type: 'Danfo', route: 'Yaba → CMS Bus Stop', capacity: 18 },
    { plate: 'LAG-022K', type: 'Keke', route: 'Maryland → Yaba Axis', capacity: 4 }
  ])
  const [activeRequest, setActiveRequest] = useState<{ id: string; pickup: string; dropoff: string; fare: number } | null>({
    id: 'TRIP-302',
    pickup: 'Yaba Terminal boarding bay 2',
    dropoff: 'Ojuelegba round about',
    fare: 650
  })
  const [activeTripState, setActiveTripState] = useState<'idle' | 'accepted' | 'completed'>('idle')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!plate.trim() || !route.trim()) return
    setVehicles(prev => [...prev, { plate, type: vType, route, capacity }])
    setPlate('')
    setRoute('')
  }

  const handleAccept = () => {
    setActiveTripState('accepted')
  }

  const handleComplete = () => {
    setActiveTripState('completed')
    setTimeout(() => {
      setActiveRequest(null)
      setActiveTripState('idle')
    }, 2000)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-section flex flex-col font-body">
      {/* Top Header */}
      <DashboardHeader
        role="driver"
        isActive={isActive}
        onActiveToggle={() => setIsActive(!isActive)}
        onLogout={handleLogout}
      />

      {/* Main Grid */}
      <main className="max-w-7xl w-full mx-auto p-6 md:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Column: Active Matching Request & Earnings */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          {/* Dispatch request banner */}
          {isActive && activeRequest && (
            <div className="bg-white border-2 border-primary rounded-2xl p-6 flex flex-col space-y-5 animate-fade-up">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  New Commuter Request Found
                </span>
                <span className="font-mono text-[11px] text-ink-soft font-bold">
                  {activeRequest.id}
                </span>
              </div>

              <div className="flex flex-col space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-ink-muted uppercase">Pickup Location</span>
                  <p className="text-[14px] font-extrabold text-ink leading-tight mt-0.5">{activeRequest.pickup}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-ink-muted uppercase">Destination Dropoff</span>
                  <p className="text-[14px] font-extrabold text-ink leading-tight mt-0.5">{activeRequest.dropoff}</p>
                </div>
                <div className="pt-2 border-t border-hairline flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold text-ink-muted uppercase font-semibold">Commuter Fare</span>
                    <p className="text-[20px] font-extrabold text-primary">₦{activeRequest.fare}</p>
                  </div>
                  <span className="text-[12px] bg-primary-light text-primary border border-primary-muted px-2.5 py-1 rounded-pill font-bold">
                    Telemetry sync enabled
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {activeTripState === 'idle' && (
                  <>
                    <button
                      onClick={() => setActiveRequest(null)}
                      className="flex-1 border-2 border-hairline-strong text-ink-soft font-bold py-3 rounded-xl transition-default hover:bg-paper cursor-pointer"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAccept}
                      className="flex-1 bg-primary hover:bg-primary-deep text-white font-bold py-3 rounded-xl transition-default cursor-pointer"
                    >
                      Accept Seat Request
                    </button>
                  </>
                )}
                {activeTripState === 'accepted' && (
                  <button
                    onClick={handleComplete}
                    className="w-full bg-success hover:bg-success/90 text-white font-bold py-3.5 rounded-xl transition-default cursor-pointer"
                  >
                    Arrived at Destination (Complete Trip)
                  </button>
                )}
                {activeTripState === 'completed' && (
                  <div className="w-full bg-primary-light border border-primary-muted text-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Trip Data Transmitted to UrbanPulse AI!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Earnings Analytics */}
          <div className="bg-white border border-hairline rounded-2xl p-6 flex flex-col space-y-6">
            <h3 className="text-[16px] font-extrabold text-ink flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Daily Route & Earnings Analytics
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-paper p-4 rounded-xl border border-hairline">
                <span className="text-[9px] font-bold text-ink-muted uppercase">Today's Earnings</span>
                <p className="text-[18px] font-extrabold text-primary">₦14,850</p>
              </div>
              <div className="bg-paper p-4 rounded-xl border border-hairline">
                <span className="text-[9px] font-bold text-ink-muted uppercase">Trips Logged</span>
                <p className="text-[18px] font-extrabold text-ink">9 Trips</p>
              </div>
              <div className="bg-paper p-4 rounded-xl border border-hairline">
                <span className="text-[9px] font-bold text-ink-muted uppercase">Tokens Earned</span>
                <p className="text-[18px] font-extrabold text-primary">48 UT</p>
              </div>
            </div>

            <div className="bg-primary-light/50 border border-primary-muted p-4 rounded-xl text-[13px] text-ink-soft leading-relaxed">
              💡 <strong>AI Smart Suggestion:</strong> Moving 3 vehicles to the <strong>Yaba → CMS Axis</strong> corridor right now could increase your revenue by <strong>32%</strong> due to peak congestion queues.
            </div>
          </div>
        </div>

        {/* Right Column: Vehicle Registration & Fleet Contribution list */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          {/* Register Vehicle */}
          <div className="bg-white border border-hairline rounded-2xl p-6 flex flex-col space-y-5">
            <h3 className="text-[16px] font-extrabold text-ink flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-primary" />
              Register Fleet Vehicle
            </h3>
            <p className="text-[13px] text-ink-soft">
              Register your vehicle to sync GPS telemetry and start accepting crowdsourced commuter queues.
            </p>

            <form onSubmit={handleRegister} className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold text-ink mb-1.5">Plate Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LAG-481AB"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-bold text-ink mb-1.5">Vehicle Type</label>
                <select
                  value={vType}
                  onChange={(e) => setVType(e.target.value)}
                  className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-primary transition-default bg-white"
                >
                  <option value="Danfo">🚌 Danfo</option>
                  <option value="Keke">🛺 Keke</option>
                  <option value="Okada">🏍️ Okada</option>
                  <option value="Taxi">🚗 Taxi</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-ink mb-1.5">Assigned Daily Route</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yaba Terminal to Ojuelegba"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                />
              </div>

              <div className="col-span-2 flex items-end justify-end pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-deep text-white font-bold text-[14px] py-3.5 rounded-xl transition-default cursor-pointer"
                >
                  Register Vehicle
                </button>
              </div>
            </form>
          </div>

          {/* Registered Fleet List */}
          <div className="bg-white border border-hairline rounded-2xl p-6">
            <h3 className="text-[16px] font-extrabold text-ink mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Active Fleet & GPS Status
            </h3>
            
            <div className="flex flex-col space-y-3">
              {vehicles.map((v, i) => (
                <div key={i} className="flex justify-between items-center border-b border-hairline pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[22px]">{v.type === 'Danfo' ? '🚌' : v.type === 'Keke' ? '🛺' : v.type === 'Okada' ? '🏍️' : '🚗'}</span>
                    <div>
                      <p className="text-[14px] font-extrabold text-ink">{v.plate}</p>
                      <p className="text-[11px] text-ink-soft">{v.route}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-primary-light text-primary border border-primary-muted px-2.5 py-0.5 rounded-pill font-bold">
                      GPS Connected
                    </span>
                    <p className="text-[11px] text-ink-muted mt-1">{v.capacity} passenger cap</p>
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

export default DriverDashboard
