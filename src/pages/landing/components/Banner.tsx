import React from 'react'

export const Banner: React.FC = () => {
  return (
    <div className="w-full flex flex-col z-[600]">
      {/* Scrolling Marquee Strip — primary green */}
      <div className="w-full bg-primary text-white py-2 overflow-hidden border-b border-primary-deep whitespace-nowrap select-none font-display font-bold text-[11px] tracking-[0.12em] uppercase">
        <div className="inline-block animate-marquee">
          <span className="mx-8">🚀 HACKATHON TRACK 10 — INFORMAL TRANSPORT MOBILITY DATA</span>
          <span className="mx-8">⚡ TRANSFORMING FRAGMENTED MOBILITY DATA INTO ACTIONABLE AI INSIGHTS</span>
          <span className="mx-8">🚖 DIGITIZING DANFOS, KEKES, AND OKADAS ACROSS NIGERIA</span>
          <span className="mx-8">☁️ POWERED BY AWS BEDROCK · AMAZON EC2 · MONGODB ATLAS</span>
          <span className="mx-8">🚀 HACKATHON TRACK 10 — INFORMAL TRANSPORT MOBILITY DATA</span>
          <span className="mx-8">⚡ TRANSFORMING FRAGMENTED MOBILITY DATA INTO ACTIONABLE AI INSIGHTS</span>
          <span className="mx-8">🚖 DIGITIZING DANFOS, KEKES, AND OKADAS ACROSS NIGERIA</span>
          <span className="mx-8">☁️ POWERED BY AWS BEDROCK · AMAZON EC2 · MONGODB ATLAS</span>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="w-full bg-primary-light text-primary py-2.5 px-4 text-center text-[13px] font-semibold flex items-center justify-center gap-3 border-b border-primary-muted flex-wrap">
        <span className="bg-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-pill">
          Live Demo
        </span>
        <span className="text-ink-soft">
          UrbanPulse AI is live for the Arthurite Mobility Hackathon · Connecting commuters, operators, and planners.
        </span>
        <a
          href="#dashboard-preview"
          className="text-primary font-bold underline underline-offset-2 hover:text-primary-deep transition-default ml-1"
        >
          View Dashboard →
        </a>
      </div>
    </div>
  )
}
export default Banner
