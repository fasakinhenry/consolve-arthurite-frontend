import React from 'react'

export const Banner: React.FC = () => {
  return (
    <div className="w-full flex flex-col z-[600]">
      {/* Scrolling Marquee Strip */}
      <div className="w-full bg-accent-yellow text-black py-2 overflow-hidden border-b border-ink whitespace-nowrap select-none font-display font-semibold text-xs tracking-wider uppercase">
        <div className="inline-block animate-marquee">
          <span className="mx-8">🚨 HACKATHON FOCUS: TRACK 10 — INFORMAL TRANSPORT MOBILITY DATA</span>
          <span className="mx-8">💡 TRANSFORMING FRAGMENTED MOBILITY DATA INTO ACTIONABLE INSIGHTS</span>
          <span className="mx-8">🚖 DIGITIZING DANFOS, KEKES, AND OKADAS</span>
          <span className="mx-8">🤖 AI & CLOUD-POWERED URBAN INTELLIGENCE</span>
          <span className="mx-8">🚨 HACKATHON FOCUS: TRACK 10 — INFORMAL TRANSPORT MOBILITY DATA</span>
          <span className="mx-8">💡 TRANSFORMING FRAGMENTED MOBILITY DATA INTO ACTIONABLE INSIGHTS</span>
          <span className="mx-8">🚖 DIGITIZING DANFOS, KEKES, AND OKADAS</span>
          <span className="mx-8">🤖 AI & CLOUD-POWERED URBAN INTELLIGENCE</span>
        </div>
      </div>

      {/* Main Announcement Bar */}
      <div className="w-full bg-primary text-white py-3 px-4 text-center text-caption-md font-medium flex items-center justify-center gap-2 border-b border-hairline flex-wrap">
        <span className="bg-accent-yellow text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded-pill">
          Live Demo
        </span>
        <span>
          Urbanpulse is live for the Lagos Mobility Hackathon. Connecting commuters, operators, and planners.
        </span>
        <a 
          href="#dashboard-preview" 
          className="text-accent-yellow hover:text-white underline font-semibold transition-default ml-1"
        >
          View Map Mockup &rarr;
        </a>
      </div>
    </div>
  )
}
export default Banner
