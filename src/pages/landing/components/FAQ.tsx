import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem { question: string; answer: string }

const faqs: FAQItem[] = [
  {
    question: 'What is UrbanPulse AI?',
    answer: 'UrbanPulse AI is a mobility intelligence platform built for informal transit systems — Danfos, Kekes, Okadas, and ride-hailing. We capture GPS, traffic, occupancy, and route timing telemetry to power actionable planning and yield optimization data.',
  },
  {
    question: 'How do you collect data from informal transport like Danfos and Kekes?',
    answer: 'We use a hybrid approach: (1) IoT GPS telemetry nodes in cooperative fleet vehicles, (2) crowdsourced commuter route updates via our PWA, and (3) mobile network signals analyzed with ML models to map transit flow patterns.',
  },
  {
    question: 'Who uses UrbanPulse?',
    answer: 'Three main groups: (1) Urban Planners & Governments — optimize infrastructure and locate terminals; (2) Fleet Operators & Investors — maximize revenue yield per route; (3) Commuters — predict bus arrivals and navigate routes.',
  },
  {
    question: 'How does the AI process mobility data?',
    answer: 'Our cloud-native AI on AWS Bedrock processes real-time telemetry to predict waiting times, identify congestion hotspots, map optimal corridors, and provide yield predictions based on historical transit densities.',
  },
  {
    question: 'Is offline syncing supported?',
    answer: 'Yes. Our PWA uses service workers to buffer telemetry and crowdsourced inputs locally. When connectivity is restored, buffered packets sync instantly to the cloud engine.',
  },
]

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="w-full bg-white py-20 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-3xl mx-auto flex flex-col space-y-12">

        {/* Header */}
        <div className="text-center flex flex-col items-center space-y-4">
          <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-pill w-fit">
            Questions
          </div>
          <h2 className="text-display-md text-ink font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-ink-soft max-w-xl">
            Everything you need to know about how we collect, process, and analyze informal transit mobility data.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="border border-hairline rounded-2xl overflow-hidden transition-default bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-display font-bold text-[15px] text-ink hover:bg-section cursor-pointer transition-default"
                >
                  <span>{faq.question}</span>
                  <span className="p-1.5 rounded-lg bg-section border border-hairline flex items-center justify-center ml-4 shrink-0">
                    {isOpen
                      ? <Minus className="w-3.5 h-3.5 text-primary" />
                      : <Plus className="w-3.5 h-3.5 text-primary" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 bg-primary-light border-t border-hairline text-[14px] text-ink-soft leading-relaxed">
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
