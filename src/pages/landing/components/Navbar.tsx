import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Track 10', href: '#about' },
    { label: 'Partners', href: '#sponsors' },
    { label: 'Metrics', href: '#stats' },
    { label: 'AI Dashboard', href: '#dashboard-preview' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <nav className="w-full bg-white border-b border-hairline py-4 px-6 md:px-12 sticky top-0 z-[500] transition-default">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-2.5 group">
          <div className="bg-primary text-white p-2 rounded-xl flex items-center justify-center transition-default group-hover:bg-primary-deep">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-[21px] font-extrabold tracking-tight text-ink">
            Urban<span className="text-primary">pulse</span>
          </span>
        </a>

        {/* Center Nav — Desktop */}
        <div className="hidden lg:flex items-center space-x-1 bg-paper p-1 rounded-xl border border-hairline">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-semibold text-ink-soft px-4 py-2 hover:bg-white hover:text-ink rounded-lg transition-default cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right — Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-paper border border-hairline rounded-xl px-3 py-2 select-none">
            <svg width="18" height="12" viewBox="0 0 20 14" fill="none" className="rounded-sm" xmlns="http://www.w3.org/2000/svg">
              <rect width="6.66" height="14" fill="#008751" />
              <rect x="6.66" width="6.67" height="14" fill="#FFFFFF" />
              <rect x="13.33" width="6.67" height="14" fill="#008751" />
            </svg>
            <span className="text-[12px] font-bold text-ink">NG</span>
          </div>

          <Link
            to="/auth"
            className="text-[13px] font-semibold text-ink-soft hover:text-ink px-4 py-2.5 rounded-xl hover:bg-paper transition-default"
          >
            Sign in
          </Link>
          <Link
            to="/auth/register"
            className="bg-primary hover:bg-primary-deep text-white text-[13px] font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-1.5 transition-default border border-primary-deep"
          >
            Access Insights
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-paper hover:bg-hairline text-ink transition-default cursor-pointer border border-hairline"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-hairline pt-4 pb-6 mt-4 flex flex-col space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-[14px] font-semibold text-ink-soft px-4 py-3 hover:bg-paper rounded-xl transition-default block"
            >
              {l.label}
            </a>
          ))}
          <div className="border-t border-hairline pt-4 mt-2 flex flex-col space-y-2 px-4">
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="text-[14px] font-semibold text-ink py-3 px-4 rounded-xl border border-hairline text-center transition-default hover:bg-paper"
            >
              Sign in
            </Link>
            <Link
              to="/auth/register"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-[14px] font-bold py-3.5 px-6 rounded-xl w-full text-center inline-flex items-center justify-center gap-2 transition-default"
            >
              Access Insights
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
