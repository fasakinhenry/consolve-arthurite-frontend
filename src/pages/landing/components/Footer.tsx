import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-footer-bg text-white py-16 px-6 md:px-12 border-t border-hairline-strong/30 relative select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left column: Brand & description */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="bg-primary text-accent-yellow p-2 rounded-xl flex items-center justify-center transition-default">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              Urban<span className="text-accent-yellow">pulse</span>
            </span>
          </a>
          <p className="text-caption-md text-white/70 max-w-sm leading-relaxed">
            Urbanpulse is Nigeria's premier mobility intelligence engine. We digitize raw GPS, traffic, and wait telemetry from informal transport networks to power cloud-native, data-driven cities.
          </p>
        </div>

        {/* Middle Columns: Links */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <p className="text-caption-md font-bold uppercase tracking-wider text-accent-yellow">
            Platform
          </p>
          <ul className="flex flex-col space-y-2.5 text-caption-md text-white/80">
            <li><a href="#about" className="hover:text-accent-yellow transition-default">Track Focus</a></li>
            <li><a href="#dashboard-preview" className="hover:text-accent-yellow transition-default">Interactive Sim</a></li>
            <li><a href="#stats" className="hover:text-accent-yellow transition-default">Mobility Analytics</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col space-y-4">
          <p className="text-caption-md font-bold uppercase tracking-wider text-accent-yellow">
            Company
          </p>
          <ul className="flex flex-col space-y-2.5 text-caption-md text-white/80">
            <li><span className="hover:text-accent-yellow transition-default cursor-pointer">About Us</span></li>
            <li><span className="hover:text-accent-yellow transition-default cursor-pointer">Research</span></li>
            <li><span className="hover:text-accent-yellow transition-default cursor-pointer">Careers</span></li>
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-4">
          <p className="text-caption-md font-bold uppercase tracking-wider text-accent-yellow">
            Track Details
          </p>
          <p className="text-caption-md text-white/70 leading-relaxed">
            Built for <strong>Lagos Mobility Hackathon</strong>. Combines telemetry sensors, PWA edge caching, and AI engines to solve informal transport visibility.
          </p>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption-md text-white/50">
        <p>© 2026 Urbanpulse Inc. All rights reserved.</p>
        <div className="flex space-x-6">
          <span className="hover:text-white transition-default cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-default cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition-default cursor-pointer">Developer API</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
