import { motion } from 'framer-motion'
import Button from './Button'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card-bg rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image / Screenshot area */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-dark-bg to-primary/10">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs text-text/30 font-mono">Screenshot</span>
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />

        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tools?.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 text-[10px] font-mono bg-dark-bg/80 backdrop-blur-sm text-accent rounded-md border border-accent/20"
            >
              {tool}
            </span>
          ))}
          {project.tools?.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-mono bg-dark-bg/80 backdrop-blur-sm text-text/50 rounded-md border border-white/10">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-text/50 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Findings preview */}
        {project.findings && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.findings.slice(0, 3).map((f) => (
              <span
                key={f}
                className="px-2 py-0.5 text-[10px] font-mono bg-red-500/10 text-red-400 rounded-md"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
          {project.github && (
            <Button href={project.github} variant="ghost" size="sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </Button>
          )}
          {project.report && (
            <Button href={project.report} variant="ghost" size="sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Report
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} variant="ghost" size="sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}