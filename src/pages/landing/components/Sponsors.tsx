import React from 'react'
import { ShieldCheck, Landmark, Truck, Cable, Cloud } from 'lucide-react'

export const Sponsors: React.FC = () => {
  const sponsorsList = [
    {
      name: "LSMT",
      fullName: "Lagos Ministry of Transportation",
      icon: <Landmark className="w-5 h-5 text-primary" />,
      color: "bg-cloud text-primary"
    },
    {
      name: "LAMATA",
      fullName: "Lagos Transport Authority",
      icon: <ShieldCheck className="w-5 h-5 text-primary-bright" />,
      color: "bg-[#eef5fc] text-[#004699]"
    },
    {
      name: "NURTW",
      fullName: "Transport Workers Union",
      icon: <Truck className="w-5 h-5 text-[#02c27f]" />,
      color: "bg-[#e6fcf4] text-[#02c27f]"
    },
    {
      name: "TechCabal",
      fullName: "Media Partner",
      icon: <Cable className="w-5 h-5 text-black" />,
      color: "bg-paper text-ink"
    },
    {
      name: "CloudScale AI",
      fullName: "Infrastructure Partner",
      icon: <Cloud className="w-5 h-5 text-accent-orange" />,
      color: "bg-accent-peach/40 text-accent-orange"
    }
  ]

  return (
    <section id="sponsors" className="w-full bg-white py-12 px-6 md:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        
        {/* Section Header */}
        <p className="text-caption-md font-bold uppercase tracking-widest text-ink-soft/60">
          PROUDLY ENDORSED & POWERED BY MOBILITY LEADERS
        </p>

        {/* Sponsor Grid */}
        <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {sponsorsList.map((sponsor, idx) => (
            <div 
              key={idx}
              className="flex items-center space-x-3 bg-white border border-hairline rounded-xl p-4 transition-default hover:border-primary select-none cursor-default shrink-0"
            >
              {/* Icon Container */}
              <div className={`p-2.5 rounded-lg flex items-center justify-center ${sponsor.color}`}>
                {sponsor.icon}
              </div>

              {/* Title Content */}
              <div className="text-left">
                <p className="font-display font-extrabold text-body-emphasis text-ink leading-tight">
                  {sponsor.name}
                </p>
                <p className="text-[11px] font-semibold text-ink-soft/60 leading-tight">
                  {sponsor.fullName}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Sponsors
