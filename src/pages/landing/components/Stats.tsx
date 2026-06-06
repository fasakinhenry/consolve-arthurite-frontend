import React from 'react'
import { Landmark, Compass, Clock, Zap } from 'lucide-react'

export const Stats: React.FC = () => {
  const statsList = [
    {
      metric: "82%",
      title: "Lagos Transit Share",
      description: "Over 82% of daily commutes in Lagos are serviced by informal transit. Yet, 0% of this data is structured for planning.",
      icon: <Compass className="w-6 h-6 text-primary" />,
      tag: "Usage Rate"
    },
    {
      metric: "₦4.2T",
      title: "Untapped Market Value",
      description: "The informal transit sector generates trillions of Naira annually. Investors lack access to route yield and fleet demand metrics.",
      icon: <Landmark className="w-6 h-6 text-[#02c27f]" />,
      tag: "Economic Scale"
    },
    {
      metric: "5,000 hrs",
      title: "Annual Congestion Loss",
      description: "Average commuter loses thousands of hours stuck in traffic. Governments lack traffic and flow data to plan road investments.",
      icon: <Clock className="w-6 h-6 text-accent-orange" />,
      tag: "System Friction"
    },
    {
      metric: "35%",
      title: "Optimization Potential",
      description: "Aggregating GPS and telemetry logs allows AI to dispatch fleets dynamically, lowering wait times and boosting yield.",
      icon: <Zap className="w-6 h-6 text-primary-bright" />,
      tag: "AI Efficiency"
    }
  ]

  return (
    <section id="stats" className="w-full bg-paper py-20 px-6 md:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-pill w-fit border border-primary-deep">
            Mobility Friction
          </div>
          <h2 className="text-display-md text-black font-extrabold tracking-tight">
            The Cost of Blind Urban Transit Decisions
          </h2>
          <p className="text-body-lg text-ink font-medium">
            Nigeria's cities are moving rapidly, but urban planners, transport operators, and infrastructure investors are operating in the dark.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-hairline rounded-xl p-6 flex flex-col justify-between text-left transition-default hover:border-primary hover:translate-y-[-4px]"
            >
              <div className="flex flex-col space-y-4">
                {/* Card Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="bg-paper p-3 rounded-lg border border-hairline flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="bg-cloud text-primary text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-pill border border-hairline">
                    {stat.tag}
                  </span>
                </div>

                {/* Metric Number */}
                <p className="text-display-lg text-black font-extrabold tracking-tight">
                  {stat.metric}
                </p>

                {/* Title & Description */}
                <div>
                  <h3 className="text-body-emphasis text-black font-bold mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-caption-md text-ink-soft/80 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Stats
