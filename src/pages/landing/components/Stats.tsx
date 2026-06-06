import React from 'react'
import { Landmark, Compass, Clock, Zap } from 'lucide-react'

const stats = [
  {
    metric: '82%',
    title: 'Lagos Transit Share',
    desc: 'Over 82% of daily commutes in Lagos are serviced by informal transit. Yet 0% of this data is structured for planning.',
    icon: <Compass className="w-5 h-5 text-primary" />,
    tag: 'Usage Rate',
    iconBg: 'bg-primary-light',
  },
  {
    metric: '₦4.2T',
    title: 'Untapped Market Value',
    desc: 'The informal transit sector generates trillions of Naira annually. Investors lack access to route yield and fleet demand metrics.',
    icon: <Landmark className="w-5 h-5 text-success" />,
    tag: 'Economic Scale',
    iconBg: 'bg-green-50',
  },
  {
    metric: '5,000 hrs',
    title: 'Annual Congestion Loss',
    desc: 'Average commuter loses thousands of hours in traffic. Governments lack flow data to plan road investments.',
    icon: <Clock className="w-5 h-5 text-warning" />,
    tag: 'System Friction',
    iconBg: 'bg-amber-50',
  },
  {
    metric: '35%',
    title: 'AI Optimization Gain',
    desc: 'Aggregating GPS telemetry allows AI to dispatch fleets dynamically, lowering wait times and boosting yield significantly.',
    icon: <Zap className="w-5 h-5 text-primary-bright" />,
    tag: 'AI Efficiency',
    iconBg: 'bg-primary-light',
  },
]

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="w-full bg-section py-20 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Header */}
        <div className="max-w-2xl flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-pill w-fit">
            Mobility Friction
          </div>
          <h2 className="text-display-md text-ink font-extrabold tracking-tight">
            The Cost of Blind Urban Transit Decisions
          </h2>
          <p className="text-body-lg text-ink-soft">
            Nigeria's cities are moving rapidly — but urban planners, transport operators, and investors are operating in the dark.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-hairline rounded-2xl p-6 flex flex-col space-y-5 text-left card-hover"
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl border border-hairline flex items-center justify-center ${s.iconBg}`}>
                  {s.icon}
                </div>
                <span className="bg-paper text-primary text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-pill border border-hairline">
                  {s.tag}
                </span>
              </div>

              <p className="text-display-lg text-ink font-extrabold tracking-tight">{s.metric}</p>

              <div>
                <h3 className="text-[15px] font-bold text-ink mb-1.5">{s.title}</h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Stats
