import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is Urbanpulse?",
      answer: "Urbanpulse is a mobility intelligence platform built specifically for informal transit systems like Danfos, Kekes, Okadas, and ride-hailing services. We capture GPS, traffic, occupancy, and route timing telemetry to provide actionable planning and yield optimization data."
    },
    {
      question: "How do you collect data from informal transport like Danfos and Kekes?",
      answer: "We employ a hybrid data collection mechanism: (1) IoT GPS telemetry nodes installed directly in cooperative fleet vehicles, (2) crowdsourced commuter route updates synced via our PWA, and (3) mobile networks signals analyzed using machine learning models to map transit flow patterns."
    },
    {
      question: "Who uses Urbanpulse?",
      answer: "Urbanpulse is used by three main groups: (1) Urban Planners & Governments seeking to optimize infrastructure, locate new terminals, and map bottlenecks; (2) Fleet Operators & Investors wishing to maximize revenue yield per route; and (3) Commuters wanting to predict bus arrivals and routes."
    },
    {
      question: "How does the AI model process this data?",
      answer: "Our cloud-native AI algorithms process real-time telemetry packets to: (1) predict waiting and arrival times, (2) identify congestion hotspots, (3) map optimal corridors, and (4) provide yield predictions based on historical transit densities."
    },
    {
      question: "Is there support for offline syncing?",
      answer: "Yes. Our Progressive Web App (PWA) uses service workers to buffer telemetry and crowdsourced inputs locally. Once internet connectivity is restored, the buffered packets sync instantly to the cloud engine."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="w-full bg-white py-20 px-6 md:px-12 border-b border-hairline relative">
      <div className="max-w-4xl mx-auto flex flex-col space-y-12">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-pill w-fit border border-primary-deep">
            Questions
          </div>
          <h2 className="text-display-md text-black font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-ink font-medium max-w-xl">
            Everything you need to know about how we collect, process, and analyze informal transit mobility logs.
          </p>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx}
                className="w-full border border-hairline rounded-xl overflow-hidden transition-default bg-white"
              >
                {/* Question Trigger */}
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-display font-extrabold text-body-emphasis text-ink hover:bg-paper cursor-pointer transition-default"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-lg bg-paper border border-hairline flex items-center justify-center ml-4 shrink-0 transition-default">
                    {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-primary" />}
                  </span>
                </button>

                {/* Answer Content - Uses accent-yellow as background for high importance content block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="p-6 bg-accent-yellow text-black border-t border-black text-body-md font-semibold text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
export default FAQ
