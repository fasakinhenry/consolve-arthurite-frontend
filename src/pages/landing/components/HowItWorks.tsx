import React from 'react'
import { Map, Landmark, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'For Planners & Cities',
    subtitle: 'Optimize Infrastructure',
    icon: <Map className="w-5 h-5 text-white" />,
    iconBg: 'bg-primary',
    features: [
      'Track spatial congestion in informal corridors',
      'Identify high-impact terminal locations with AI',
      'Generate automated environmental reports',
      'Audit route capacity dynamically',
    ],
    action: 'Request Planner Portal Demo',
  },
  {
    title: 'For Operators & Investors',
    subtitle: 'Optimize Yield',
    icon: <Landmark className="w-5 h-5 text-white" />,
    iconBg: 'bg-accent-teal',
    features: [
      'Analyze route hourly demand & earnings capacity',
      'Deploy fleets to high-congestion, high-yield zones',
      'Monitor driver behavior & transit telemetry',
      'Audit fuel-efficiency and transit speed indicators',
    ],
    action: 'Start Fleet Route Analysis',
  },
  {
    title: 'For Commuters & Drivers',
    subtitle: 'Optimize Journeys',
    icon: <Users className="w-5 h-5 text-white" />,
    iconBg: 'bg-ink',
    features: [
      'Predict exact waiting times for Danfos & Kekes',
      'Share crowdsourced traffic logs on key routes',
      'Access real-time navigation alerts on active paths',
      'Earn mobility tokens for logging transit queues',
    ],
    action: 'Download Commuter App',
  },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto flex flex-col space-y-14">

        {/* Header */}
        <div className="max-w-2xl flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-pill w-fit">
            Mobility Ecosystem
          </div>
          <h2 className="text-display-md text-ink font-extrabold tracking-tight">
            How UrbanPulse Unlocks Value for Everyone
          </h2>
          <p className="text-body-lg text-ink-soft">
            We bridge the gap between fragmented transit operations and structured analytical insights — collecting raw telemetry to power smart dashboards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-hairline rounded-2xl p-8 flex flex-col justify-between text-left card-hover"
            >
              <div className="flex flex-col space-y-6">
                {/* Icon + badge */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-pill border border-hairline bg-section text-ink-muted">
                    {cat.subtitle}
                  </span>
                </div>

                <h3 className="text-[22px] font-extrabold text-ink tracking-tight">{cat.title}</h3>

                <ul className="flex flex-col space-y-3">
                  {cat.features.map((f, fi) => (
                    <li key={fi} className="flex items-start text-[14px] text-ink-soft">
                      <CheckCircle className="w-4 h-4 text-success mr-3 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-auto">
                <Link
                  to="/auth/register"
                  className="w-full bg-section hover:bg-primary-light border border-hairline hover:border-primary-muted text-ink hover:text-primary font-bold text-[14px] py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2 transition-default cursor-pointer"
                >
                  {cat.action}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HowItWorks
