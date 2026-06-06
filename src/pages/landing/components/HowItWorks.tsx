import React from 'react'
import { Map, Landmark, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const HowItWorks: React.FC = () => {
  const categories = [
    {
      title: "For Planners & Cities",
      subtitle: "Optimize Infrastructure",
      icon: <Map className="w-6 h-6 text-white" />,
      features: [
        "Track spatial congestion in informal corridors",
        "Identify high-impact terminal locations",
        "Generate automated environmental emissions reports",
        "Audit route capacity dynamically with AI"
      ],
      action: "Request Planner Portal Demo",
      accent: "bg-primary border-primary-deep",
      badgeColor: "bg-accent-yellow text-black"
    },
    {
      title: "For Operators & Investors",
      subtitle: "Optimize Yield",
      icon: <Landmark className="w-6 h-6 text-white" />,
      features: [
        "Analyze route hourly demand & earnings capacity",
        "Deploy fleets to high-congestion, high-yield zones",
        "Monitor driver behavior & transit frequency telemetry",
        "Audit fuel-efficiency and transit speed indicators"
      ],
      action: "Start Fleet Route Analysis",
      accent: "bg-[#02c27f] border-[#02a069]",
      badgeColor: "bg-white text-[#02c27f]"
    },
    {
      title: "For Commuters & Drivers",
      subtitle: "Optimize Journeys",
      icon: <Users className="w-6 h-6 text-white" />,
      features: [
        "Predict exact waiting times for Danfos & Kekes",
        "Share crowdsourced traffic logs on key routes",
        "Access real-time navigation alerts on active paths",
        "Earn mobility tokens for logging transit queues"
      ],
      action: "Download Commuter App",
      accent: "bg-black border-black",
      badgeColor: "bg-accent-yellow text-black"
    }
  ]

  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-12 border-b border-hairline relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left flex flex-col space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-pill w-fit border border-primary-deep">
            Mobility Ecosystem
          </div>
          <h2 className="text-display-md text-black font-extrabold tracking-tight">
            How Urbanpulse Unlocks Value for Everyone
          </h2>
          <p className="text-body-lg text-ink font-medium">
            We bridge the gap between fragmented transit operations and structured analytical insights. Our stack collects raw telemetry from operators to power smart dashboards.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-hairline rounded-xl p-8 flex flex-col justify-between text-left transition-default hover:border-primary"
            >
              <div className="flex flex-col space-y-6">
                {/* Icon Banner */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-xl flex items-center justify-center ${cat.accent}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-pill border border-hairline ${cat.badgeColor}`}>
                    {cat.subtitle}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-display-sm text-black font-extrabold tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Features List */}
                <ul className="flex flex-col space-y-3 pt-2">
                  {cat.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-body-md text-ink-soft">
                      <CheckCircle className="w-4 h-4 text-[#02c27f] mr-3 shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-auto">
                <a 
                  href="#waitlist"
                  className="w-full bg-paper hover:bg-cloud border border-hairline text-ink hover:text-primary font-bold text-body-md py-4 px-6 rounded-xl inline-flex items-center justify-center transition-default cursor-pointer"
                >
                  <span>{cat.action}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default HowItWorks
