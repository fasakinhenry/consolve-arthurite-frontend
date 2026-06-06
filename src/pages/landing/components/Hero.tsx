import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Radio, Activity } from 'lucide-react'

export const Hero: React.FC = () => {
  const [routeQuery, setRouteQuery] = useState('')
  const [searched, setSearched] = useState(false)

  // Mock search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (routeQuery.trim()) {
      setSearched(true)
      setTimeout(() => setSearched(false), 3000)
    }
  }

  return (
    <section className="w-full bg-hero-bg py-16 px-6 md:px-12 md:py-24 border-b border-hairline-strong overflow-hidden relative">
      {/* Decorative grids */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary text-white text-caption-md font-bold px-4 py-1.5 rounded-pill w-fit border border-primary-deep">
            <Radio className="w-4 h-4 animate-pulse text-accent-yellow" />
            <span>Track 10: Mobility Intelligence</span>
          </div>

          {/* Heading */}
          <h1 className="text-display-xl md:text-display-xxl text-black font-extrabold tracking-tight leading-none">
            Nigeria's informal transit, <span className="text-primary underline decoration-accent-yellow decoration-8 underline-offset-4">digitized.</span>
          </h1>

          {/* Description */}
          <p className="text-body-lg text-ink font-medium max-w-xl">
            Every day, millions of Nigerians commute via Danfos, Kekes, Okadas, and ride-hailing services. Urbanpulse captures, aggregates, and transforms this massive untapped mobility data into actionable intelligence.
          </p>

          {/* Pill Input Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl bg-white border border-hairline p-2 rounded-pill flex items-center justify-between transition-default focus-within:border-primary">
            <div className="flex items-center flex-1 px-4">
              <MapPin className="text-primary w-5 h-5 mr-3 shrink-0" />
              <input 
                type="text"
                placeholder="Search transit route (e.g. Ojuelegba - Ikeja)..."
                value={routeQuery}
                onChange={(e) => setRouteQuery(e.target.value)}
                className="w-full bg-transparent text-ink text-body-md placeholder:text-ink-soft/60 focus:outline-none py-3"
              />
            </div>
            <button 
              type="submit" 
              className="bg-primary hover:bg-primary-bright text-white font-bold h-12 px-6 rounded-pill inline-flex items-center justify-center transition-default shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4 mr-2" />
              <span>Query Route</span>
            </button>
          </form>

          {/* Search feedback alert */}
          {searched && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-success p-3 rounded-xl flex items-center space-x-2 text-ink text-caption-md max-w-md"
            >
              <Activity className="w-4 h-4 text-success animate-bounce" />
              <span>Analyzing telemetry on <strong>{routeQuery}</strong>... Real-time logs found.</span>
            </motion.div>
          )}

          {/* Secondary Actions / Features */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#dashboard-preview" 
              className="border border-hairline hover:bg-white text-ink text-button-md font-semibold h-[64px] px-8 rounded-xl inline-flex items-center justify-center transition-default cursor-pointer bg-transparent"
            >
              Launch Live Dashboard
            </a>
            <a 
              href="#waitlist" 
              className="bg-primary hover:bg-primary-bright text-white text-button-md font-semibold h-[64px] px-8 rounded-xl inline-flex items-center justify-center transition-default cursor-pointer"
            >
              Join Dev Waitlist
            </a>
          </div>

          {/* Commuter/Operator/Planner Quick Stats Banner */}
          <div className="flex items-center space-x-6 pt-4 border-t border-hairline-strong/60 max-w-lg">
            <div>
              <p className="text-display-sm text-primary font-extrabold">85%</p>
              <p className="text-caption-md font-semibold text-ink-soft">Lagos trips digitized</p>
            </div>
            <div className="w-px h-8 bg-hairline-strong"></div>
            <div>
              <p className="text-display-sm text-primary font-extrabold">2.4M</p>
              <p className="text-caption-md font-semibold text-ink-soft">Daily telemetry packets</p>
            </div>
            <div className="w-px h-8 bg-hairline-strong"></div>
            <div>
              <p className="text-display-sm text-primary font-extrabold">12ms</p>
              <p className="text-caption-md font-semibold text-ink-soft">AI processing latency</p>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Telemetry Map Simulator */}
        <div className="lg:col-span-5 w-full flex items-center justify-center relative">
          
          {/* Outer Ring Telemetry Circle */}
          <div className="w-full aspect-square max-w-[420px] rounded-xl bg-white border border-hairline relative flex flex-col overflow-hidden select-none">
            
            {/* Visualizer header */}
            <div className="w-full border-b border-hairline bg-paper px-4 py-3 flex items-center justify-between text-caption-md font-bold text-ink-soft uppercase tracking-wider shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping"></span>
                Lagos Core Telemetry Node
              </span>
              <span className="text-primary">Live Sim</span>
            </div>

            {/* Sim grid maps */}
            <div className="flex-1 relative bg-cloud p-4 flex items-center justify-center overflow-hidden">
              
              {/* Roads vector lines */}
              <svg className="absolute inset-0 w-full h-full text-hairline-strong/70" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Third Mainland Bridge Path */}
                <path d="M50 220 C120 180, 200 120, 350 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                <path d="M50 220 C120 180, 200 120, 350 100" stroke="#ffedb3" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
                
                {/* Ikorodu Road Path */}
                <path d="M200 20 C200 100, 220 220, 180 320" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                
                {/* Lekki Expressway Path */}
                <path d="M20 120 L380 280" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              </svg>

              {/* Animate Danfo (Yellow Dot) */}
              <motion.div 
                className="absolute w-8 h-8 rounded-lg bg-accent-yellow border border-black flex flex-col items-center justify-center font-bold text-[9px] text-black shrink-0"
                animate={{
                  x: [-120, 120, -120],
                  y: [20, -50, 20],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚌
                {/* Telemetry bubble */}
                <div className="absolute bottom-9 bg-primary text-white px-2 py-0.5 rounded-md text-[8px] font-semibold border border-primary-deep whitespace-nowrap shadow-none">
                  Danfo ID:DF404 • 42km/h
                </div>
              </motion.div>

              {/* Animate Keke (Green Dot) */}
              <motion.div 
                className="absolute w-7 h-7 rounded-lg bg-[#02c27f] border border-black flex flex-col items-center justify-center font-bold text-[9px] text-white shrink-0"
                animate={{
                  x: [0, 20, -50, 0],
                  y: [-120, 80, 100, -120],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                🛺
                {/* Telemetry bubble */}
                <div className="absolute top-8 bg-black text-white px-2 py-0.5 rounded-md text-[8px] font-semibold border border-hairline whitespace-nowrap shadow-none">
                  Keke ID:KK189 • 20km/h
                </div>
              </motion.div>

              {/* Animate Okada (Orange Dot) */}
              <motion.div 
                className="absolute w-6 h-6 rounded-lg bg-[#ff884d] border border-black flex flex-col items-center justify-center font-bold text-[9px] text-white shrink-0"
                animate={{
                  x: [-140, 150],
                  y: [-60, 60],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                🏍️
                {/* Telemetry bubble */}
                <div className="absolute bottom-7 bg-primary-deep text-white px-2 py-0.5 rounded-md text-[8px] font-semibold border border-hairline whitespace-nowrap shadow-none">
                  Okada ID:OK077 • 65km/h
                </div>
              </motion.div>

              {/* Center intersection status label */}
              <div className="absolute bottom-3 left-3 bg-white p-2.5 rounded-lg border border-hairline flex flex-col space-y-1">
                <span className="text-[9px] font-bold text-ink-soft uppercase">Active Nodes</span>
                <span className="text-xs font-extrabold text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                  1,842 GPS Devices
                </span>
              </div>
            </div>

            {/* Sim Info footer */}
            <div className="w-full border-t border-hairline p-4 bg-paper grid grid-cols-2 gap-2 text-left">
              <div>
                <p className="text-[9px] font-bold text-ink-soft uppercase">Node Packet Speed</p>
                <p className="text-body-emphasis text-primary">1,480 p/sec</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-ink-soft uppercase">Model Confidence</p>
                <p className="text-body-emphasis text-primary">99.4% (AI)</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
export default Hero
