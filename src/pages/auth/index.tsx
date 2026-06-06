import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'

type Mode = 'login' | 'register'
type Role = 'rider' | 'driver' | 'investor' | 'government'

interface AuthPageProps {
  mode?: Mode
}

const ROLES: { key: Role; label: string; desc: string; icon: string }[] = [
  { key: 'rider', label: 'Rider', desc: 'Book & track rides', icon: '🧍' },
  { key: 'driver', label: 'Driver', desc: 'Accept trips & earn', icon: '🚗' },
  { key: 'investor', label: 'Investor', desc: 'AI mobility insights', icon: '📊' },
  { key: 'government', label: 'Government', desc: 'Urban planning data', icon: '🏛️' },
]

// Google icon SVG
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const AuthPage: React.FC<AuthPageProps> = ({ mode: initialMode = 'login' }) => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>(initialMode)
  const [role, setRole] = useState<Role>('rider')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', password: '', organisation: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // TODO: connect to backend /api/v1/auth/register or /login
      await new Promise((r) => setTimeout(r, 1200))
      // Redirect based on role
      const dest = role === 'rider' ? '/dashboard/rider'
        : role === 'driver' ? '/dashboard/driver'
        : '/dashboard/intelligence'
      navigate(dest)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError('')
    setGoogleLoading(true)
    try {
      // TODO: integrate Google OAuth — fire google sign-in popup, get idToken, POST /api/v1/auth/google
      await new Promise((r) => setTimeout(r, 1500))
      const dest = role === 'rider' ? '/dashboard/rider'
        : role === 'driver' ? '/dashboard/driver'
        : '/dashboard/intelligence'
      navigate(dest)
    } catch {
      setError('Google sign-in failed. Please try again.')
    } finally {
      setGoogleLoading(false)
    }
  }

  const isOrgRole = role === 'investor' || role === 'government'

  return (
    <div className="min-h-screen bg-section flex">

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-[45%] bg-primary flex-col justify-between p-12 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Top: Logo */}
        <Link to="/" className="flex items-center gap-2.5 relative z-10 w-fit">
          <div className="bg-white/15 text-white p-2 rounded-xl border border-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display font-extrabold text-[20px] text-white tracking-tight">
            Urban<span className="text-primary-muted">pulse</span>
          </span>
        </Link>

        {/* Middle: Copy */}
        <div className="relative z-10 flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-pill border border-white/15 w-fit">
              Mobility Intelligence
            </div>
            <h1 className="text-[42px] font-extrabold text-white tracking-tight leading-[1.1]">
              Nigeria's transit data,<br />
              <span className="text-primary-muted">finally visible.</span>
            </h1>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-sm">
              Join the platform transforming informal mobility — Danfos, Kekes, Okadas — into actionable intelligence for cities, investors, and operators.
            </p>
          </div>

          {/* Feature bullets */}
          <div className="flex flex-col space-y-3">
            {[
              'AI-powered route demand forecasting',
              'Real-time congestion mapping',
              'Growth corridor analysis for investors',
              'Government-ready urban planning data',
            ].map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-[13px] text-white/80">
                <CheckCircle className="w-4 h-4 text-primary-muted shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { n: '2.4M', l: 'Daily packets' },
            { n: '85%', l: 'Coverage' },
            { n: '99.4%', l: 'AI accuracy' },
          ].map((s) => (
            <div key={s.n} className="bg-white/10 border border-white/15 rounded-xl p-3 text-center">
              <p className="text-[22px] font-extrabold text-white tracking-tight">{s.n}</p>
              <p className="text-[11px] text-white/60 font-semibold">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-16 overflow-y-auto">
        <div className="w-full max-w-md">

          {/* Back */}
          <Link to="/" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-muted hover:text-ink transition-default mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="flex flex-col space-y-2 mb-8">
            <h2 className="text-[30px] font-extrabold text-ink tracking-tight">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="text-[14px] text-ink-muted">
              {mode === 'login'
                ? 'Sign in to access your mobility intelligence dashboard.'
                : 'Get access to AI-powered Nigerian transit data.'}
            </p>
          </div>

          {/* Role selector — only on register */}
          <AnimatePresence>
            {mode === 'register' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <label className="block text-[12px] font-bold text-ink-muted uppercase tracking-wider mb-3">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => setRole(r.key)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left transition-default cursor-pointer
                        ${role === r.key
                          ? 'border-primary bg-primary-light text-primary'
                          : 'border-hairline bg-white text-ink-soft hover:border-primary-muted'}`}
                    >
                      <span className="text-[20px]">{r.icon}</span>
                      <div>
                        <p className="text-[13px] font-bold leading-tight">{r.label}</p>
                        <p className="text-[11px] opacity-70">{r.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Google sign-in */}
          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-hairline hover:border-primary-muted text-ink font-bold text-[14px] h-[52px] rounded-xl transition-default cursor-pointer disabled:opacity-60 mb-4"
          >
            {googleLoading ? (
              <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            {googleLoading ? 'Signing in...' : `Continue with Google`}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-hairline" />
            <span className="text-[12px] font-semibold text-ink-muted">or continue with email</span>
            <div className="flex-1 h-px bg-hairline" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

            {mode === 'register' && (
              <div>
                <label className="block text-[12px] font-bold text-ink mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Amaka Obi"
                  value={form.name}
                  onChange={set('name')}
                  className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                />
              </div>
            )}

            <div>
              <label className="block text-[12px] font-bold text-ink mb-1.5">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
                className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-ink mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  required
                  placeholder={mode === 'register' ? 'Min 8 chars, uppercase + number' : 'Enter your password'}
                  value={form.password}
                  onChange={set('password')}
                  className="w-full border-2 border-hairline rounded-xl px-4 py-3 pr-12 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-default"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Organisation — for investor/gov */}
            <AnimatePresence>
              {mode === 'register' && isOrgRole && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  <label className="block text-[12px] font-bold text-ink mb-1.5">Organisation</label>
                  <input
                    type="text"
                    required
                    placeholder={role === 'government' ? 'e.g. LAMATA, Lagos Ministry of Transport' : 'e.g. Lagos Mobility Fund'}
                    value={form.organisation}
                    onChange={set('organisation')}
                    className="w-full border-2 border-hairline rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-default bg-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error */}
            {error && (
              <p className="text-[13px] text-error bg-red-50 border border-error/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-deep text-white font-bold text-[15px] h-[52px] rounded-xl flex items-center justify-center gap-2 transition-default cursor-pointer disabled:opacity-60 mt-2"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Toggle mode */}
          <p className="text-[13px] text-ink-muted text-center mt-6">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
              className="font-bold text-primary hover:underline underline-offset-2 transition-default cursor-pointer"
            >
              {mode === 'login' ? 'Create one' : 'Sign in'}
            </button>
          </p>

          {mode === 'login' && (
            <p className="text-center mt-2">
              <button className="text-[13px] text-ink-muted hover:text-primary transition-default underline underline-offset-2 cursor-pointer">
                Forgot password?
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
