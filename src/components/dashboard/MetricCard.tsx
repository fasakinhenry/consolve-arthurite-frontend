import React from 'react'

export interface MetricCardProps {
  label: string
  value: string | number
  description: string
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, description }) => {
  return (
    <div className="bg-white border border-hairline rounded-2xl p-5 text-left flex flex-col justify-between card-hover">
      <span className="text-[10px] font-bold text-ink-muted uppercase tracking-wider leading-tight">
        {label}
      </span>
      <p className="text-[20px] font-extrabold text-primary tracking-tight mt-2.5 leading-tight">
        {value}
      </p>
      <span className="text-[10px] text-ink-soft/70 font-semibold mt-2.5 border-t border-hairline pt-2">
        {description}
      </span>
    </div>
  )
}

export default MetricCard
