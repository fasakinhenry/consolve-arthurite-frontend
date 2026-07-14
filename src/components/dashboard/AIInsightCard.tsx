import React from 'react'
import { ChevronRight } from 'lucide-react'

export interface AIInsight {
  category: 'planning' | 'investment' | 'operational'
  corridor: string
  recommendation: string
  urgency: 'high' | 'medium' | 'low'
  impact: string
}

export interface AIInsightCardProps {
  insight: AIInsight
  onDeploy?: (insight: AIInsight) => void
}

const AIInsightCard: React.FC<AIInsightCardProps> = ({ insight, onDeploy }) => {
  return (
    <div className="border border-hairline rounded-xl p-5 hover:border-primary transition-default flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-pill border
            ${insight.category === 'planning' ? 'bg-primary-light text-primary border-primary-muted' : ''}
            ${insight.category === 'investment' ? 'bg-green-50 text-success border-green-200' : ''}
            ${insight.category === 'operational' ? 'bg-blue-50 text-info border-blue-200' : ''}
          `}>
            {insight.category} recommendation
          </span>
          <span className="text-[13px] font-extrabold text-ink">• {insight.corridor}</span>
        </div>

        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-pill border
          ${insight.urgency === 'high' ? 'bg-red-50 text-error border-red-200' : ''}
          ${insight.urgency === 'medium' ? 'bg-amber-50 text-warning border-amber-200' : ''}
          ${insight.urgency === 'low' ? 'bg-blue-50 text-info border-blue-200' : ''}
        `}>
          {insight.urgency} priority
        </span>
      </div>

      <p className="text-[13px] text-ink-soft leading-relaxed">
        {insight.recommendation}
      </p>

      <div className="pt-2 border-t border-hairline flex justify-between items-center text-[11px] text-ink-muted">
        <span>Target Outcome: <strong className="text-ink">{insight.impact}</strong></span>
        <span 
          onClick={() => onDeploy?.(insight)}
          className="flex items-center gap-1 hover:text-primary cursor-pointer font-bold select-none"
        >
          Deploy policy recommendation
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  )
}

export default AIInsightCard
