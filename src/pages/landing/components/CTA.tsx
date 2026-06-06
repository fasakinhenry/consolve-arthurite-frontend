import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSubmitted(true); setEmail('') }
  }

  return (
    <section id="waitlist" className="w-full bg-primary py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center space-y-8">

        {/* Badge */}
        <div className="bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-pill border border-white/20 w-fit">
          Early Access Waitlist
        </div>

        {/* Title */}
        <h2 className="text-display-xl text-white font-extrabold tracking-tight leading-tight">
          Ready to power Nigeria's<br />transit mapping?
        </h2>

        {/* Subtitle */}
        <p className="text-[17px] text-white/80 max-w-xl leading-relaxed">
          Join the early waitlist for API key access, planner dashboard integrations, or to register your cooperative fleet.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              required
              placeholder="Enter your work email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 bg-white text-ink text-[15px] placeholder:text-ink-muted border-0 rounded-xl px-6 py-4 h-[56px] focus:outline-none focus:ring-2 focus:ring-white/50 transition-default"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-ink hover:bg-ink/90 text-white font-bold text-[14px] h-[56px] px-8 rounded-xl inline-flex items-center gap-2 transition-default shrink-0 cursor-pointer"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/15 border border-white/20 p-6 rounded-2xl flex flex-col items-center space-y-2 max-w-sm"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
            <h4 className="text-[16px] font-extrabold text-white">You're on the list!</h4>
            <p className="text-[13px] text-white/70">
              We've registered your email. Our team will reach out with sandbox API keys shortly.
            </p>
          </motion.div>
        )}

        {/* Or sign up CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Link
            to="/auth/register"
            className="bg-white text-primary font-bold text-[14px] h-[48px] px-8 rounded-xl inline-flex items-center gap-2 transition-default hover:bg-white/90"
          >
            Create an Account
          </Link>
          <span className="text-white/50 text-[13px]">or</span>
          <p className="text-[13px] text-white/60">
            For agencies, NGOs, researchers →{' '}
            <span className="underline underline-offset-2 text-white cursor-pointer hover:text-white/80 transition-default">
              partners@urbanpulse.ai
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
export default CTA
