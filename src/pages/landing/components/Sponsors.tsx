import React from 'react'
import { ShieldCheck, Landmark, Truck, Cable, Globe } from 'lucide-react'

const sponsors = [
  { name: 'LSMT', full: 'Lagos Ministry of Transportation', icon: <Landmark className="w-5 h-5 text-primary" />, bg: 'bg-primary-light' },
  { name: 'LAMATA', full: 'Lagos Transport Authority', icon: <ShieldCheck className="w-5 h-5 text-info" />, bg: 'bg-blue-50' },
  { name: 'NURTW', full: 'Transport Workers Union', icon: <Truck className="w-5 h-5 text-success" />, bg: 'bg-green-50' },
  { name: 'TechCabal', full: 'Media Partner', icon: <Cable className="w-5 h-5 text-ink" />, bg: 'bg-section' },
  { name: 'AWS Partner', full: 'Infrastructure Partner', icon: <Globe className="w-5 h-5 text-primary" />, bg: 'bg-primary-light' },
]

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="w-full bg-white py-14 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink-muted">
          Endorsed & Powered By Mobility Leaders
        </p>

        <div className="w-full flex flex-wrap items-center justify-center gap-4">
          {sponsors.map((s, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 bg-white border border-hairline rounded-xl p-4 transition-default hover:border-primary card-hover select-none cursor-default"
            >
              <div className={`p-2.5 rounded-lg flex items-center justify-center ${s.bg}`}>
                {s.icon}
              </div>
              <div className="text-left">
                <p className="font-display font-extrabold text-[14px] text-ink leading-tight">{s.name}</p>
                <p className="text-[11px] font-semibold text-ink-muted leading-tight">{s.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Sponsors
