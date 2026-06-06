import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Activity, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Hero: React.FC = () => {
  const [routeQuery, setRouteQuery] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (routeQuery.trim()) {
      setSearched(true)
      setTimeout(() => setSearched(false), 3000)
    }
  }

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 md:py-24 border-b border-hairline overflow-hidden relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0c513f_1px,transparent_1px),linear-gradient(to_bottom,#0c513f_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center relative z-10">

        {/* Left: Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left">

          {/* Tag */}
          <div className="inline-flex items-center space-x-2 bg-primary-light text-primary text-[12px] font-bold px-4 py-2 rounded-pill w-fit border border-primary-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Track 10 — Mobility Intelligence Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-display-xl text-ink font-extrabold tracking-tight leading-[1.06]">
            Nigeria's informal transit,{' '}
            <span className="text-primary relative">
              finally visible.
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="#0c513f" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-ink-soft max-w-xl leading-relaxed">
            Every day, millions of Nigerians commute via Danfos, Kekes, Okadas, and ride-hailing. UrbanPulse captures, aggregates, and transforms this untapped mobility data into actionable intelligence for cities, investors, and operators.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="w-full max-w-2xl bg-white border-2 border-hairline p-1.5 rounded-2xl flex items-center justify-between transition-default focus-within:border-primary">
            <div className="flex items-center flex-1 px-3">
              <MapPin className="text-primary w-5 h-5 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search a route — e.g. Ojuelegba → Ikeja..."
                value={routeQuery}
                onChange={(e) => setRouteQuery(e.target.value)}
                className="w-full bg-transparent text-ink text-[15px] placeholder:text-ink-muted focus:outline-none py-3"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-deep text-white font-bold text-[14px] h-12 px-6 rounded-xl inline-flex items-center gap-2 transition-default shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Query Route</span>
            </button>
          </form>

          {/* Search feedback */}
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary-light border border-primary-muted p-3 rounded-xl flex items-center space-x-2 text-ink text-[13px] max-w-md"
            >
              <Activity className="w-4 h-4 text-primary animate-bounce" />
              <span>Analyzing telemetry on <strong>{routeQuery}</strong>… Real-time data found.</span>
            </motion.div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#dashboard-preview"
              className="border-2 border-hairline-strong hover:border-primary text-ink hover:text-primary text-[14px] font-bold h-[56px] px-7 rounded-xl inline-flex items-center gap-2 transition-default bg-white"
            >
              View Live Dashboard
            </a>
            <Link
              to="/auth/register"
              className="bg-primary hover:bg-primary-deep text-white text-[14px] font-bold h-[56px] px-7 rounded-xl inline-flex items-center gap-2 transition-default"
            >
              Get Access
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex items-center gap-6 pt-2 border-t border-hairline max-w-lg">
            <div>
              <p className="text-[28px] font-extrabold text-primary tracking-tight">85%</p>
              <p className="text-[12px] font-semibold text-ink-muted">Lagos trips digitized</p>
            </div>
            <div className="w-px h-8 bg-hairline" />
            <div>
              <p className="text-[28px] font-extrabold text-primary tracking-tight">2.4M</p>
              <p className="text-[12px] font-semibold text-ink-muted">Daily telemetry packets</p>
            </div>
            <div className="w-px h-8 bg-hairline" />
            <div>
              <p className="text-[28px] font-extrabold text-primary tracking-tight">12ms</p>
              <p className="text-[12px] font-semibold text-ink-muted">AI processing latency</p>
            </div>
          </div>
        </div>

        {/* Right: Telemetry Simulator */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <div className="w-full aspect-square max-w-[420px] rounded-2xl bg-white border-2 border-hairline relative flex flex-col overflow-hidden select-none">

            {/* Header */}
            <div className="w-full border-b border-hairline bg-paper px-5 py-3.5 flex items-center justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider shrink-0">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping" />
                Lagos Core Telemetry Node
              </span>
              <span className="text-primary font-extrabold">Live Sim</span>
            </div>

            {/* Map area */}
            <div className="flex-1 relative bg-primary-light/40 p-4 flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full text-hairline-strong/60" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 220 C120 180, 200 120, 350 100" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M50 220 C120 180, 200 120, 350 100" stroke="#a7dbc8" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
                <path d="M200 20 C200 100, 220 220, 180 320" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                <path d="M20 120 L380 280" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>

              {/* Danfo */}
              <motion.div
                className="absolute w-8 h-8 rounded-lg bg-success border border-primary-deep flex items-center justify-center font-bold text-[10px] text-white shrink-0"
                animate={{ x: [-120, 120, -120], y: [20, -50, 20] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                🚌
                <div className="absolute bottom-9 bg-primary text-white px-2 py-0.5 rounded-lg text-[8px] font-semibold border border-primary-deep whitespace-nowrap">
                  Danfo DF404 · 42km/h
                </div>
              </motion.div>

              {/* Keke */}
              <motion.div
                className="absolute w-7 h-7 rounded-lg bg-accent-teal border border-primary-deep flex items-center justify-center font-bold text-[9px] text-white shrink-0"
                animate={{ x: [0, 20, -50, 0], y: [-120, 80, 100, -120] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                🛺
                <div className="absolute top-8 bg-ink text-white px-2 py-0.5 rounded-lg text-[8px] font-semibold whitespace-nowrap">
                  Keke KK189 · 20km/h
                </div>
              </motion.div>

              {/* Okada */}
              <motion.div
                className="absolute w-6 h-6 rounded-lg bg-primary-muted border border-primary-deep flex items-center justify-center font-bold text-[9px] text-primary-deep shrink-0"
                animate={{ x: [-140, 150], y: [-60, 60] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeOut' }}
              >
                🏍️
                <div className="absolute bottom-7 bg-primary-deep text-white px-2 py-0.5 rounded-lg text-[8px] font-semibold whitespace-nowrap">
                  Okada OK077 · 65km/h
                </div>
              </motion.div>

              {/* Active nodes label */}
              <div className="absolute bottom-3 left-3 bg-white p-2.5 rounded-xl border border-hairline flex flex-col space-y-1">
                <span className="text-[9px] font-bold text-ink-muted uppercase">Active Nodes</span>
                <span className="text-[12px] font-extrabold text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  1,842 GPS Devices
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full border-t border-hairline p-4 bg-paper grid grid-cols-2 gap-2 text-left">
              <div>
                <p className="text-[9px] font-bold text-ink-muted uppercase">Packet Speed</p>
                <p className="text-[15px] font-extrabold text-primary">1,480 p/sec</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-ink-muted uppercase">AI Confidence</p>
                <p className="text-[15px] font-extrabold text-primary">99.4%</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Hero
