import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-footer-bg text-white py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">

        {/* Brand */}
        <div className="md:col-span-5 flex flex-col space-y-5">
          <a href="/" className="flex items-center space-x-2.5 group w-fit">
            <div className="bg-primary p-2 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-[20px] font-extrabold tracking-tight text-white">
              Urban<span className="text-primary-muted">pulse</span>
            </span>
          </a>
          <p className="text-[13px] text-white/60 max-w-sm leading-relaxed">
            UrbanPulse AI is Nigeria's mobility intelligence engine. We digitize GPS, traffic, and wait telemetry from informal transport to power data-driven cities.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Built with</span>
            <span className="text-[11px] font-bold text-primary-muted">AWS Bedrock · MongoDB · Bun</span>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Platform</p>
          <ul className="flex flex-col space-y-2.5 text-[13px] text-white/70">
            <li><a href="#about" className="hover:text-white transition-default">Track Focus</a></li>
            <li><a href="#dashboard-preview" className="hover:text-white transition-default">Interactive Sim</a></li>
            <li><a href="#stats" className="hover:text-white transition-default">Mobility Analytics</a></li>
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Company</p>
          <ul className="flex flex-col space-y-2.5 text-[13px] text-white/70">
            <li><span className="hover:text-white transition-default cursor-pointer">About Us</span></li>
            <li><span className="hover:text-white transition-default cursor-pointer">Research</span></li>
            <li><span className="hover:text-white transition-default cursor-pointer">Careers</span></li>
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Get Access</p>
          <p className="text-[13px] text-white/60 leading-relaxed">
            Built for the <strong className="text-white">Lagos Mobility Hackathon</strong>. Combining telemetry sensors, PWA caching, and AI engines to solve informal transport visibility.
          </p>
          <Link
            to="/auth/register"
            className="bg-primary hover:bg-primary-bright text-white font-bold text-[13px] h-[44px] px-6 rounded-xl inline-flex items-center justify-center transition-default w-fit"
          >
            Create Account →
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
        <p>© 2026 UrbanPulse AI Inc. All rights reserved.</p>
        <div className="flex space-x-6">
          <span className="hover:text-white/70 transition-default cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white/70 transition-default cursor-pointer">Terms of Service</span>
          <span className="hover:text-white/70 transition-default cursor-pointer">Developer API</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
