import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-hairline py-4 px-6 md:px-12 sticky top-0 z-[500] transition-default">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 group">
          <div className="bg-primary text-accent-yellow p-2 rounded-xl flex items-center justify-center transition-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            Urban<span className="text-primary-bright">pulse</span>
          </span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 bg-paper p-1 rounded-pill border border-hairline">
          <a href="#about" className="text-body-md text-ink font-semibold px-4 py-2 hover:bg-white rounded-pill transition-default cursor-pointer">
            Track 10
          </a>
          <a href="#sponsors" className="text-body-md text-ink font-semibold px-4 py-2 hover:bg-white rounded-pill transition-default cursor-pointer">
            Sponsors
          </a>
          <a href="#stats" className="text-body-md text-ink font-semibold px-4 py-2 hover:bg-white rounded-pill transition-default cursor-pointer">
            Mobility Stats
          </a>
          <a href="#dashboard-preview" className="text-body-md text-ink font-semibold px-4 py-2 hover:bg-white rounded-pill transition-default cursor-pointer">
            AI Dashboard
          </a>
          <a href="#faqs" className="text-body-md text-ink font-semibold px-4 py-2 hover:bg-white rounded-pill transition-default cursor-pointer">
            FAQs
          </a>
        </div>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Country Flag Selector (Nigeria) */}
          <div className="flex items-center space-x-2 bg-paper border border-hairline rounded-pill px-3 py-1.5 select-none">
            {/* Nigerian Flag SVG */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-sm" xmlns="http://www.w3.org/2000/svg">
              <rect width="6.66" height="14" fill="#008751" />
              <rect x="6.66" width="6.67" height="14" fill="#FFFFFF" />
              <rect x="13.33" width="6.67" height="14" fill="#008751" />
            </svg>
            <span className="text-caption-md font-bold text-ink">NG</span>
          </div>

          <a 
            href="#waitlist" 
            className="bg-primary hover:bg-primary-bright text-white text-button-md py-3 px-6 rounded-pill h-[50px] inline-flex items-center justify-center font-semibold transition-default cursor-pointer border border-primary-deep"
          >
            Access Insights
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-paper hover:bg-hairline text-ink transition-default cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-hairline pt-4 pb-6 mt-4 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-body-md font-semibold text-ink px-4 py-2.5 hover:bg-paper rounded-xl transition-default"
          >
            Track 10
          </a>
          <a 
            href="#sponsors" 
            onClick={() => setIsOpen(false)}
            className="text-body-md font-semibold text-ink px-4 py-2.5 hover:bg-paper rounded-xl transition-default"
          >
            Sponsors
          </a>
          <a 
            href="#stats" 
            onClick={() => setIsOpen(false)}
            className="text-body-md font-semibold text-ink px-4 py-2.5 hover:bg-paper rounded-xl transition-default"
          >
            Mobility Stats
          </a>
          <a 
            href="#dashboard-preview" 
            onClick={() => setIsOpen(false)}
            className="text-body-md font-semibold text-ink px-4 py-2.5 hover:bg-paper rounded-xl transition-default"
          >
            AI Dashboard
          </a>
          <a 
            href="#faqs" 
            onClick={() => setIsOpen(false)}
            className="text-body-md font-semibold text-ink px-4 py-2.5 hover:bg-paper rounded-xl transition-default"
          >
            FAQs
          </a>

          <div className="border-t border-hairline pt-4 flex flex-col space-y-3 px-4">
            <div className="flex items-center space-x-2 bg-paper border border-hairline rounded-pill px-3 py-1.5 w-fit">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="rounded-sm" xmlns="http://www.w3.org/2000/svg">
                <rect width="6.66" height="14" fill="#008751" />
                <rect x="6.66" width="6.67" height="14" fill="#FFFFFF" />
                <rect x="13.33" width="6.67" height="14" fill="#008751" />
              </svg>
              <span className="text-caption-md font-bold text-ink">NG</span>
            </div>
            <a 
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary-bright text-white text-button-md py-4 px-6 rounded-xl w-full text-center inline-flex items-center justify-center font-semibold transition-default cursor-pointer"
            >
              Access Insights
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
