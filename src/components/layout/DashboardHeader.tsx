import React from 'react'
import { Link } from 'react-router-dom'
import { Power, LogOut, Database, Shield } from 'lucide-react'

export interface DashboardHeaderProps {
  role: 'rider' | 'driver' | 'intelligence'
  // Driver props
  isActive?: boolean
  onActiveToggle?: () => void
  // Intelligence props
  syncStatus?: 'connected' | 'simulated'
  // Logout handler
  onLogout: () => void
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  role,
  isActive = true,
  onActiveToggle,
  syncStatus = 'simulated',
  onLogout
}) => {
  return (
    <header className="w-full bg-white border-b border-hairline py-4 px-6 md:px-12 sticky top-0 z-50 flex items-center justify-between">
      {/* Brand Logo Link */}
      <Link to="/" className="flex items-center space-x-2.5">
        <div className="bg-primary text-white p-2 rounded-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-display font-extrabold text-[19px] text-ink">
          Urban<span className="text-primary">pulse</span>
        </span>
      </Link>

      {/* Dynamic Status / Actions Bar */}
      <div className="flex items-center space-x-4">
        {role === 'driver' && (
          <>
            <button
              onClick={onActiveToggle}
              className={`text-[12px] font-bold px-3 py-1.5 rounded-pill border cursor-pointer flex items-center gap-1.5 transition-default
                ${isActive 
                  ? 'bg-primary-light text-primary border-primary-muted' 
                  : 'bg-paper text-ink-muted border-hairline'}`}
            >
              <Power className="w-3.5 h-3.5" />
              {isActive ? 'Active (Sharing GPS)' : 'Offline'}
            </button>
            
            <div className="bg-ink text-white text-[12px] font-bold px-3 py-1.5 rounded-pill border border-black flex items-center gap-1.5">
              Driver Account
            </div>
          </>
        )}

        {role === 'rider' && (
          <div className="bg-primary-light text-primary text-[12px] font-bold px-3 py-1.5 rounded-pill border border-primary-muted flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Rider Account
          </div>
        )}

        {role === 'intelligence' && (
          <>
            <div className={`text-[12px] font-bold px-3.5 py-1.5 rounded-pill border flex items-center gap-1.5 transition-default
              ${syncStatus === 'connected' 
                ? 'bg-primary-light text-primary border-primary-muted' 
                : 'bg-paper text-ink-muted border-hairline'}`}
            >
              <Database className="w-3.5 h-3.5" />
              {syncStatus === 'connected' ? 'AWS Live Sync' : 'Simulated Sandbox'}
            </div>

            <div className="bg-primary text-white text-[12px] font-bold px-3 py-1.5 rounded-pill border border-primary-deep flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              Bloomberg Terminal Node
            </div>
          </>
        )}
        
        {/* Universal Logout Button */}
        <button
          onClick={onLogout}
          className="p-2 rounded-xl bg-paper hover:bg-hairline text-ink-soft hover:text-ink transition-default border border-hairline cursor-pointer"
          title="Logout"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
