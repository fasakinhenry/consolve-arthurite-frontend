import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, BarChart3, Database, Thermometer, TrendingUp, RefreshCw, Layers } from 'lucide-react'

type Tab = 'congestion' | 'demand' | 'telemetry'

export const InteractiveMapMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('congestion')
  const [time, setTime] = useState('08:00 AM')
  const [pings, setPings] = useState<string[]>([
    'DF-901 (Danfo): Checked in @ Iyana-Ipaja · 40 km/h',
    'KK-204 (Keke): Entered Yaba Terminal · 15 km/h',
    'OK-880 (Okada): Speed alert CMS Bridge · 58 km/h',
  ])

  useEffect(() => {
    const clock = setInterval(() => {
      setTime((prev) => {
        const [hourStr, rest] = prev.split(':')
        const [minStr, ampm] = rest.split(' ')
        let h = parseInt(hourStr); let m = parseInt(minStr) + 1
        if (m >= 60) { m = 0; h = h === 12 ? 1 : h + 1 }
        return `${h}:${m.toString().padStart(2, '0')} ${ampm}`
      })
    }, 10000)
    return () => clearInterval(clock)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const types = ['DF', 'KK', 'OK']
      const locs = ['Yaba', 'Maryland', 'CMS', 'Ojuelegba', 'Lekki Phase 1', 'Ikeja']
      const t = types[Math.floor(Math.random() * types.length)]
      const l = locs[Math.floor(Math.random() * locs.length)]
      const id = Math.floor(Math.random() * 900) + 100
      const spd = Math.floor(Math.random() * 50) + 10
      const name = t === 'DF' ? 'Danfo' : t === 'KK' ? 'Keke' : 'Okada'
      setPings((p) => [`${t}-${id} (${name}): Telemetry logged @ ${l} · ${spd} km/h`, ...p.slice(0, 2)])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'congestion', label: 'Congestion Mapping', icon: <Map className="w-4 h-4" /> },
    { key: 'demand', label: 'Route Demand', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'telemetry', label: 'Live Telemetry', icon: <Database className="w-4 h-4" /> },
  ]

  const barData = [
    { label: '6am', val: 40, peak: false },
    { label: '7am', val: 90, peak: true },
    { label: '8am', val: 95, peak: true },
    { label: '9am', val: 80, peak: false },
    { label: '10am', val: 50, peak: false },
    { label: '12pm', val: 35, peak: false },
    { label: '2pm', val: 45, peak: false },
    { label: '5pm', val: 85, peak: true },
    { label: '6pm', val: 90, peak: true },
    { label: '7pm', val: 75, peak: false },
  ]

  return (
    <section id="dashboard-preview" className="w-full bg-section py-20 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Header */}
        <div className="max-w-2xl flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-pill w-fit">
            Interactive Showcase
          </div>
          <h2 className="text-display-md text-ink font-extrabold tracking-tight">
            Explore the Mobility Intelligence Hub
          </h2>
          <p className="text-body-lg text-ink-soft">
            Toggle the tabs below to see how we model congestion, track demand, and process real-time telemetry from informal transit networks.
          </p>
        </div>

        {/* Dashboard shell */}
        <div className="w-full bg-white border border-hairline rounded-2xl flex flex-col overflow-hidden">

          {/* Header bar */}
          <div className="w-full border-b border-hairline bg-paper px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-extrabold text-[15px] text-ink">UrbanPulse Analytics Engine</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white border border-hairline rounded-lg px-3 py-1.5 flex items-center space-x-2 text-[12px] font-semibold text-ink-soft">
                Refreshed: <strong className="ml-1 text-ink">Just Now</strong>
                <RefreshCw className="w-3 h-3 text-primary animate-spin ml-1" style={{ animationDuration: '4s' }} />
              </div>
              <div className="bg-primary text-white font-bold rounded-lg px-3 py-1.5 text-[12px]">
                {time} (Peak Traffic)
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full border-b border-hairline flex bg-white flex-wrap shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-4 px-6 font-display font-bold text-[14px] inline-flex items-center justify-center gap-2 transition-default border-r border-hairline last:border-r-0 cursor-pointer
                  ${activeTab === tab.key
                    ? 'text-primary bg-primary-light border-b-2 border-b-primary'
                    : 'text-ink-muted hover:bg-section'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full p-6 md:p-8 min-h-[400px] bg-cloud/30">
            <AnimatePresence mode="wait">

              {/* Congestion */}
              {activeTab === 'congestion' && (
                <motion.div key="congestion" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 bg-white border border-hairline p-5 rounded-2xl">
                    <div className="flex items-center justify-between mb-4 border-b border-hairline pb-3">
                      <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wider">Lagos Congestion Nodes</span>
                      <span className="text-[10px] bg-error/10 text-error font-bold uppercase px-2.5 py-1 rounded-pill border border-error/20">
                        2 Critical Hotspots
                      </span>
                    </div>
                    <div className="w-full aspect-[16/9] bg-primary-light/50 rounded-xl relative overflow-hidden border border-hairline flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full text-hairline-strong/50" viewBox="0 0 500 280" fill="none">
                        <path d="M40 180 C150 120, 300 200, 460 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                        <path d="M250 20 C250 100, 280 200, 240 260" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>
                      <div className="absolute top-[120px] left-[180px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-error rounded-full animate-ping absolute" />
                        <span className="w-4 h-4 bg-error rounded-full border-2 border-white relative" />
                        <div className="bg-ink text-white px-2.5 py-1 rounded-lg text-[9px] font-bold mt-1 whitespace-nowrap">Yaba Axis: Severe Delay (22m)</div>
                      </div>
                      <div className="absolute top-[80px] right-[100px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-warning rounded-full animate-ping absolute" />
                        <span className="w-4 h-4 bg-warning rounded-full border-2 border-white relative" />
                        <div className="bg-ink text-white px-2.5 py-1 rounded-lg text-[9px] font-bold mt-1 whitespace-nowrap">CMS Bridge: Medium Congestion</div>
                      </div>
                      <div className="absolute bottom-[60px] left-[100px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-success rounded-full border-2 border-white relative" />
                        <div className="bg-white text-ink px-2.5 py-1 rounded-lg border border-hairline text-[9px] font-bold mt-1 whitespace-nowrap">Maryland: Clear (48km/h avg)</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="bg-white border border-hairline p-5 rounded-2xl">
                      <h4 className="text-[14px] font-extrabold text-ink mb-4 flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-primary" /> Congestion Hotspots
                      </h4>
                      <div className="flex flex-col space-y-4">
                        {[
                          { name: 'Yaba Terminal', val: 88, color: 'bg-error' },
                          { name: 'CMS Bus Stop', val: 62, color: 'bg-warning' },
                          { name: 'Ikeja Underbridge', val: 30, color: 'bg-primary' },
                        ].map((h) => (
                          <div key={h.name}>
                            <div className="flex justify-between text-[12px] font-bold mb-1">
                              <span className="text-ink">{h.name}</span>
                              <span className="text-ink-muted">{h.val}%</span>
                            </div>
                            <div className="w-full bg-section h-2 rounded-pill overflow-hidden">
                              <div className={`${h.color} h-full rounded-pill`} style={{ width: `${h.val}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Demand */}
              {activeTab === 'demand' && (
                <motion.div key="demand" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
                  <div className="lg:col-span-8 bg-white border border-hairline p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-5 border-b border-hairline pb-3">
                      <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wider">Peak Demand Times (Hourly Volume)</span>
                      <span className="text-[10px] bg-primary-light text-primary font-bold uppercase px-2.5 py-1 rounded-pill border border-primary-muted">
                        Peak: 07:00–09:00
                      </span>
                    </div>
                    <div className="w-full h-[220px] flex items-end justify-between px-1">
                      {barData.map((b, i) => (
                        <div key={i} className="flex flex-col items-center flex-1 mx-1 h-full justify-end">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${b.val}%` }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            className={`w-full rounded-t-lg border-t-2 border-x ${b.peak ? 'bg-primary border-primary-deep' : 'bg-primary-light border-primary-muted'}`}
                          />
                          <span className="text-[10px] font-semibold text-ink-muted mt-2">{b.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="bg-white border border-hairline p-5 rounded-2xl">
                      <h4 className="text-[14px] font-extrabold text-ink mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-success" /> Revenue Yield
                      </h4>
                      <p className="text-[13px] text-ink-muted mb-4">
                        Operators on peak Yaba routes saw a <strong className="text-ink">32% yield increase</strong>.
                      </p>
                      <div className="bg-primary-light border border-primary-muted p-4 rounded-xl flex flex-col space-y-1">
                        <span className="text-[10px] font-bold text-primary uppercase">Optimal Corridor</span>
                        <span className="text-[15px] font-extrabold text-ink">Ojuelegba → CMS Axis</span>
                        <span className="text-[12px] font-semibold text-ink-soft">Keke demand index: <strong>9.4 / 10</strong></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Telemetry */}
              {activeTab === 'telemetry' && (
                <motion.div key="telemetry" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
                  <div className="lg:col-span-8 bg-white border border-hairline p-6 rounded-2xl flex flex-col space-y-4">
                    <div className="flex items-center justify-between border-b border-hairline pb-3">
                      <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wider">Real-Time GPS Data Stream</span>
                      <span className="text-[10px] bg-primary text-white font-bold uppercase px-2.5 py-1 rounded-pill flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        Active Stream
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 font-mono text-[12px] text-ink-soft bg-section p-4 rounded-xl border border-hairline min-h-[180px]">
                      <AnimatePresence>
                        {pings.map((ping, i) => (
                          <motion.div
                            key={ping + i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="py-2.5 px-3 bg-white border border-hairline rounded-xl flex items-center space-x-2"
                          >
                            <span className="text-primary font-extrabold">✓</span>
                            <span>{ping}</span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="bg-white border border-hairline p-5 rounded-2xl">
                      <h4 className="text-[14px] font-extrabold text-ink mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-primary" /> Platform Metrics
                      </h4>
                      <div className="flex flex-col space-y-4">
                        {[
                          { label: 'Active Bus Tracker pings', value: '48,490/hr' },
                          { label: 'Model accuracy', value: '99.82%' },
                          { label: 'PWA Sync Latency', value: '14ms', highlight: true },
                        ].map((m, i) => (
                          <div key={i} className="flex justify-between border-b border-hairline pb-3 last:border-b-0">
                            <span className="text-[12px] text-ink-muted font-semibold">{m.label}</span>
                            <span className={`text-[12px] font-bold ${m.highlight ? 'text-primary' : 'text-ink'}`}>{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
export default InteractiveMapMockup
