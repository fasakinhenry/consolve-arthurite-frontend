import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="waitlist" className="w-full bg-cloud py-20 px-6 md:px-12 border-b border-hairline relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-4xl mx-auto bg-white border border-hairline-strong rounded-xl p-8 md:p-12 text-center relative z-10 flex flex-col items-center space-y-8">
        
        {/* Badge Header */}
        <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-pill border border-primary-deep w-fit">
          Early Access Waitlist
        </div>

        {/* Title */}
        <h2 className="text-display-md md:text-display-xl text-black font-extrabold tracking-tight leading-none">
          Ready to power Nigeria's transit mapping?
        </h2>

        {/* Subtitle */}
        <p className="text-body-lg text-ink font-medium max-w-xl">
          Join the early waitlist to gain API key access, request planner dashboard integrations, or register your cooperative fleet nodes.
        </p>

        {/* Form panel */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full flex-1">
              <input 
                type="email"
                required
                placeholder="Enter your work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-ink text-body-md placeholder:text-ink-soft/50 border border-hairline rounded-pill px-6 py-4 h-[64px] transition-default focus:outline-none focus:border-primary shrink-0 cursor-text"
              />
            </div>
            <button 
              type="submit"
              className="w-full sm:w-auto bg-primary hover:bg-primary-bright text-white font-extrabold text-button-md h-[64px] px-8 rounded-pill inline-flex items-center justify-center transition-default shrink-0 cursor-pointer border border-primary-deep"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-cloud border border-success p-6 rounded-xl flex flex-col items-center space-y-2 max-w-md"
          >
            <CheckCircle2 className="w-10 h-10 text-success" />
            <h4 className="text-body-emphasis text-black font-extrabold">You're on the list!</h4>
            <p className="text-caption-md text-ink-soft">
              We've registered your email. Our team will reach out with sandbox API keys shortly.
            </p>
          </motion.div>
        )}

        {/* Short meta helper */}
        <p className="text-caption-md text-ink-soft/60 font-semibold">
          For agencies, NGOs, or researchers, contact us directly at <span className="underline text-primary cursor-pointer hover:text-primary-bright">partners@urbanpulse.ai</span>
        </p>

      </div>
    </section>
  )
}
export default CTA
