import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, BarChart3, Database, Thermometer, TrendingUp, RefreshCw, Layers } from 'lucide-react'

type TabType = 'congestion' | 'demand' | 'telemetry'

export const InteractiveMapMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('congestion')
  const [time, setTime] = useState('08:00 AM')
  const [pings, setPings] = useState<string[]>([
    "DF-901 (Danfo): Checked in @ Iyana-Ipaja • 40 km/h",
    "KK-204 (Keke): Entered Yaba Terminal • 15 km/h",
    "OK-880 (Okada): Speed alert CMS Bridge • 58 km/h"
  ])

  // Clock ticker to use setTime and update virtual time on dashboard
  useEffect(() => {
    const clock = setInterval(() => {
      setTime((prev) => {
        const [hourStr, minAndAmPm] = prev.split(':')
        const [minStr, ampm] = minAndAmPm.split(' ')
        let hour = parseInt(hourStr)
        let min = parseInt(minStr) + 1
        if (min >= 60) {
          min = 0
          hour = hour === 12 ? 1 : hour + 1
        }
        const newMinStr = min.toString().padStart(2, '0')
        return `${hour}:${newMinStr} ${ampm}`
      })
    }, 10000)
    return () => clearInterval(clock)
  }, [])

  // Simple telemetry stream simulator
  useEffect(() => {
    const interval = setInterval(() => {
      const vehicles = ["DF", "KK", "OK"]
      const locations = ["Yaba", "Maryland", "CMS", "Ojuelegba", "Lekki Phase 1", "Ikeja"]
      const randVehicle = vehicles[Math.floor(Math.random() * vehicles.length)]
      const randLoc = locations[Math.floor(Math.random() * locations.length)]
      const id = Math.floor(Math.random() * 900) + 100
      const speed = Math.floor(Math.random() * 50) + 10
      
      const newPing = `${randVehicle}-${id} (${randVehicle === "DF" ? "Danfo" : randVehicle === "KK" ? "Keke" : "Okada"}): Telemetry logged @ ${randLoc} • ${speed} km/h`
      
      setPings((prev) => [newPing, ...prev.slice(0, 2)])
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="dashboard-preview" className="w-full bg-cloud py-20 px-6 md:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-pill w-fit border border-primary-deep">
            Interactive Showcase
          </div>
          <h2 className="text-display-md text-black font-extrabold tracking-tight">
            Explore the Mobility Intelligence Hub
          </h2>
          <p className="text-body-lg text-ink font-medium">
            Test the live platform capabilities. Toggle the tabs below to view how we model congestion, track route demand, and process real-time telemetry from informal networks.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="w-full bg-white border border-hairline-strong rounded-xl flex flex-col overflow-hidden">
          
          {/* Header Bar */}
          <div className="w-full border-b border-hairline bg-paper px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-display font-extrabold text-body-emphasis text-ink">Urbanpulse Analytics Engine</span>
            </div>

            {/* Time Stamp Controls */}
            <div className="flex items-center space-x-4">
              <div className="bg-white border border-hairline rounded-lg px-3 py-1.5 flex items-center space-x-2 text-caption-md font-bold text-ink">
                <span>Refreshed: <strong>Just Now</strong></span>
                <RefreshCw className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <div className="bg-primary text-white font-bold rounded-lg px-3 py-1.5 text-caption-md border border-primary-deep">
                {time} (Peak Traffic)
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="w-full border-b border-hairline flex bg-white flex-wrap shrink-0">
            <button 
              onClick={() => setActiveTab('congestion')}
              className={`flex-1 py-4 px-6 font-display font-extrabold text-body-emphasis inline-flex items-center justify-center space-x-2 transition-default border-r border-hairline cursor-pointer
                ${activeTab === 'congestion' ? 'text-primary bg-cloud border-b-4 border-b-primary' : 'text-ink-soft/60 hover:bg-paper'}`}
            >
              <Map className="w-4 h-4" />
              <span>Congestion Mapping</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('demand')}
              className={`flex-1 py-4 px-6 font-display font-extrabold text-body-emphasis inline-flex items-center justify-center space-x-2 transition-default border-r border-hairline cursor-pointer
                ${activeTab === 'demand' ? 'text-primary bg-cloud border-b-4 border-b-primary' : 'text-ink-soft/60 hover:bg-paper'}`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Route Demand Yield</span>
            </button>

            <button 
              onClick={() => setActiveTab('telemetry')}
              className={`flex-1 py-4 px-6 font-display font-extrabold text-body-emphasis inline-flex items-center justify-center space-x-2 transition-default cursor-pointer
                ${activeTab === 'telemetry' ? 'text-primary bg-cloud border-b-4 border-b-primary' : 'text-ink-soft/60 hover:bg-paper'}`}
            >
              <Database className="w-4 h-4" />
              <span>Live Telemetry Feeds</span>
            </button>
          </div>

          {/* Interactive Screen Display */}
          <div className="w-full p-6 md:p-8 min-h-[400px] bg-cloud/40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'congestion' && (
                <motion.div 
                  key="congestion"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Visual Map Simulation */}
                  <div className="lg:col-span-8 bg-white border border-hairline p-4 rounded-xl relative overflow-hidden">
                    <div className="w-full flex items-center justify-between mb-4 border-b border-hairline pb-2">
                      <span className="text-caption-md font-bold text-ink-soft uppercase">Lagos Congestion Nodes</span>
                      <span className="text-[10px] bg-[#dc0000]/10 text-[#dc0000] font-extrabold uppercase px-2 py-0.5 rounded-pill border border-[#dc0000]/20">
                        2 Critical Hotspots
                      </span>
                    </div>

                    {/* Vector Map */}
                    <div className="w-full aspect-[16/9] bg-cloud/50 rounded-lg relative overflow-hidden flex items-center justify-center border border-hairline">
                      <svg className="absolute inset-0 w-full h-full text-hairline-strong/60" viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 180 C150 120, 300 200, 460 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                        <path d="M250 20 C250 100, 280 200, 240 260" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                      </svg>

                      {/* Hotspot 1 Yaba */}
                      <div className="absolute top-[120px] left-[180px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-[#dc0000] rounded-full animate-ping absolute"></span>
                        <span className="w-4 h-4 bg-[#dc0000] rounded-full border border-black relative"></span>
                        <div className="bg-black text-white px-2 py-1 rounded border border-hairline text-[9px] font-bold mt-1 whitespace-nowrap shadow-none">
                          Yaba Axis: Severe Delay (22m wait)
                        </div>
                      </div>

                      {/* Hotspot 2 CMS */}
                      <div className="absolute top-[80px] right-[100px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-[#ff884d] rounded-full animate-ping absolute"></span>
                        <span className="w-4 h-4 bg-[#ff884d] rounded-full border border-black relative"></span>
                        <div className="bg-black text-white px-2 py-1 rounded border border-hairline text-[9px] font-bold mt-1 whitespace-nowrap shadow-none">
                          CMS Bridge: Medium Congestion
                        </div>
                      </div>

                      {/* Hotspot 3 Maryland */}
                      <div className="absolute bottom-[60px] left-[100px] flex flex-col items-center">
                        <span className="w-4 h-4 bg-[#02c27f] rounded-full relative border border-black"></span>
                        <div className="bg-white text-ink px-2 py-1 rounded border border-hairline text-[9px] font-bold mt-1 whitespace-nowrap shadow-none">
                          Maryland: Clear Flow (48km/h avg)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Node Details & Metrics */}
                  <div className="lg:col-span-4 flex flex-col space-y-6">
                    <div className="bg-white border border-hairline p-6 rounded-xl text-left">
                      <h4 className="text-body-emphasis text-black font-extrabold mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-primary" />
                        Congestion Hotspots
                      </h4>
                      <div className="flex flex-col space-y-4">
                        <div className="border-b border-hairline pb-3">
                          <div className="flex items-center justify-between text-caption-md font-bold mb-1">
                            <span className="text-ink">Yaba Terminal</span>
                            <span className="text-[#dc0000]">88% Delay Index</span>
                          </div>
                          <div className="w-full bg-paper h-2 rounded-pill overflow-hidden">
                            <div className="bg-[#dc0000] h-full" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                        <div className="border-b border-hairline pb-3">
                          <div className="flex items-center justify-between text-caption-md font-bold mb-1">
                            <span className="text-ink">CMS Bus Stop</span>
                            <span className="text-accent-orange">62% Delay Index</span>
                          </div>
                          <div className="w-full bg-paper h-2 rounded-pill overflow-hidden">
                            <div className="bg-accent-orange h-full" style={{ width: '62%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-caption-md font-bold mb-1">
                            <span className="text-ink">Ikeja Underbridge</span>
                            <span className="text-primary-bright">30% Delay Index</span>
                          </div>
                          <div className="w-full bg-paper h-2 rounded-pill overflow-hidden">
                            <div className="bg-primary-bright h-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'demand' && (
                <motion.div 
                  key="demand"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left"
                >
                  {/* Left Column: Yield Charts */}
                  <div className="lg:col-span-8 bg-white border border-hairline p-6 rounded-xl">
                    <div className="w-full flex items-center justify-between mb-6 border-b border-hairline pb-2">
                      <span className="text-caption-md font-bold text-ink-soft uppercase">Transit Peak Demand Times (Hourly Volume)</span>
                      <span className="text-[10px] bg-primary/10 text-primary font-extrabold uppercase px-2.5 py-0.5 rounded-pill border border-primary/20">
                        Peak Hour: 07:00 - 09:00
                      </span>
                    </div>

                    {/* Simple Bar Chart */}
                    <div className="w-full h-[240px] flex items-end justify-between pt-4 px-2">
                      {[
                        { label: '6am', val: 40, col: 'bg-primary' },
                        { label: '7am', val: 90, col: 'bg-accent-yellow' },
                        { label: '8am', val: 95, col: 'bg-accent-yellow' },
                        { label: '9am', val: 80, col: 'bg-primary' },
                        { label: '10am', val: 50, col: 'bg-primary' },
                        { label: '12pm', val: 35, col: 'bg-primary' },
                        { label: '2pm', val: 45, col: 'bg-primary' },
                        { label: '5pm', val: 85, col: 'bg-primary-bright' },
                        { label: '6pm', val: 90, col: 'bg-primary-bright' },
                        { label: '7pm', val: 75, col: 'bg-primary-bright' }
                      ].map((bar, idx) => (
                        <div key={idx} className="flex flex-col items-center flex-1 mx-1.5 h-full justify-end">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${bar.val}%` }}
                            className={`w-full rounded-t-md ${bar.col} border-t border-x border-black`}
                          ></motion.div>
                          <span className="text-[10px] font-bold text-ink-soft/60 mt-2">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Demand Insights */}
                  <div className="lg:col-span-4 flex flex-col space-y-6">
                    <div className="bg-white border border-hairline p-6 rounded-xl">
                      <h4 className="text-body-emphasis text-black font-extrabold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#02c27f]" />
                        Revenue Yield Analysis
                      </h4>
                      <p className="text-caption-md text-ink-soft/80 mb-4">
                        Operators moving dynamically on peak Yaba routes saw a <strong>32% yield increase</strong>.
                      </p>
                      <div className="bg-cloud border border-hairline p-4 rounded-lg flex flex-col space-y-2">
                        <span className="text-[10px] font-bold text-primary uppercase">Optimal Dispatch Corridor</span>
                        <span className="text-body-emphasis font-extrabold text-ink leading-tight">
                          Ojuelegba - CMS Axis
                        </span>
                        <span className="text-[11px] font-semibold text-ink-soft">
                          Keke demand index: <strong>9.4 / 10</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'telemetry' && (
                <motion.div 
                  key="telemetry"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left"
                >
                  {/* Left Column: Ticker log list */}
                  <div className="lg:col-span-8 bg-white border border-hairline p-6 rounded-xl flex flex-col space-y-4">
                    <div className="w-full flex items-center justify-between border-b border-hairline pb-2">
                      <span className="text-caption-md font-bold text-ink-soft uppercase">Real-Time GPS Data Stream</span>
                      <span className="text-[10px] bg-primary text-white font-extrabold uppercase px-2 py-0.5 rounded-pill flex items-center gap-1.5 border border-primary-deep">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-ping"></span>
                        Active Stream
                      </span>
                    </div>

                    <div className="flex flex-col space-y-3 font-mono text-xs text-ink-soft bg-paper/50 p-4 rounded-lg border border-hairline min-h-[180px]">
                      <AnimatePresence>
                        {pings.map((ping, idx) => (
                          <motion.div 
                            key={ping + idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="py-2.5 px-3 bg-white border border-hairline rounded-lg flex items-center space-x-2"
                          >
                            <span className="text-primary-bright font-extrabold">✓</span>
                            <span>{ping}</span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Right Column: Cloud telemetry speed */}
                  <div className="lg:col-span-4 flex flex-col space-y-6">
                    <div className="bg-white border border-hairline p-6 rounded-xl">
                      <h4 className="text-body-emphasis text-black font-extrabold mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-accent-orange" />
                        Platform Ingest Metrics
                      </h4>
                      <div className="flex flex-col space-y-4">
                        <div className="flex justify-between border-b border-hairline pb-2">
                          <span className="text-caption-md text-ink-soft font-semibold">Active Bus Tracker pings</span>
                          <span className="text-caption-md font-bold text-ink">48,490/hr</span>
                        </div>
                        <div className="flex justify-between border-b border-hairline pb-2">
                          <span className="text-caption-md text-ink-soft font-semibold">Model accuracy logs</span>
                          <span className="text-caption-md font-bold text-ink">99.82%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-caption-md text-ink-soft font-semibold">PWA Sync Latency</span>
                          <span className="text-caption-md font-bold text-primary">14ms (sync)</span>
                        </div>
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
