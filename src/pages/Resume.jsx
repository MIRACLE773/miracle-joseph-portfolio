import { motion } from 'framer-motion'
import Button from './../components/Button'

export default function Resume() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="mt-3 text-text/40">
            Download my resume or view it directly below
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/resume.pdf" variant="primary" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </Button>
            <Button href="/resume.docx" variant="secondary" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Download DOCX
            </Button>
          </div>
        </motion.div>

        {/* Embedded PDF viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card-bg rounded-2xl border border-white/5 overflow-hidden"
        >
          {/* Toolbar */}
          <div className="flex items-center gap-3 px-6 py-3 border-b border-white/5 bg-dark-bg/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-text/30">resume_miracle_joseph.pdf</span>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[500px] sm:h-[700px] lg:h-[900px] overflow-hidden">
            <iframe
              src="/resume.pdf"
              className="w-full h-full border-0"
              title="Miracle Joseph Resume"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}