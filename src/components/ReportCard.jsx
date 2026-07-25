import { motion } from 'framer-motion'
import Button from './Button'

export default function ReportCard({ report, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card-bg rounded-2xl border border-white/5 p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-mono text-success uppercase tracking-wider">
              {report.type || 'Security Assessment'}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-text">{report.title}</h3>
          <p className="text-xs text-text/40 font-mono mt-1">{report.date}</p>
        </div>
        {report.severity && (
          <span
            className={`px-3 py-1 text-xs font-mono font-bold rounded-lg ${
              report.severity === 'Critical'
                ? 'bg-red-500/20 text-red-400'
                : report.severity === 'High'
                ? 'bg-orange-500/20 text-orange-400'
                : report.severity === 'Medium'
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-green-500/20 text-green-400'
            }`}
          >
            {report.severity}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text/50 leading-relaxed mb-4 line-clamp-2">
        {report.description}
      </p>

      {/* Stats */}
      {report.stats && (
        <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl bg-dark-bg/50 border border-white/5">
          {report.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-bold text-text">{stat.value}</div>
              <div className="text-[10px] font-mono text-text/30 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Findings tags */}
      {report.findings && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {report.findings.map((f) => (
            <span
              key={f}
              className="px-2 py-0.5 text-[10px] font-mono bg-white/5 text-text/50 rounded-md"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        {report.pdf && (
          <Button href={report.pdf} variant="primary" size="sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Report
          </Button>
        )}
        {report.github && (
          <Button href={report.github} variant="secondary" size="sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </Button>
        )}
      </div>
    </motion.div>
  )
}