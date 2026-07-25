import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'ALX Cybersecurity',
    issuer: 'ALX Africa',
    date: '2025',
    description: 'Comprehensive cybersecurity program covering network security, ethical hacking, and incident response.',
    credential: '#',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'ALX Software Engineering',
    issuer: 'ALX Africa',
    date: '2025',
    description: 'Fundamentals of software engineering including programming, algorithms, and system design.',
    credential: '#',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'from-blue-600 to-cyan-500',
  },
 
  {
    title: 'ALX professional foundation Certification',
    issuer: 'ALX Africa',
    date: '2025',
    description: 'Industry-standard certification covering technical skills to show where you fit in more and best practices.',
    credential: '#',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    color: 'from-purple-500 to-purple-700',
  },
]

export default function Certifications() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
            Credentials
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            Certifications & <span className="gradient-text">Badges</span>
          </h1>
          <p className="mt-3 text-text/40 max-w-xl mx-auto">
            Industry-recognized credentials validating my cybersecurity knowledge and skills
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card-bg rounded-2xl border border-white/5 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} bg-opacity-20 flex items-center justify-center mb-4 shadow-lg`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cert.icon} />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-accent font-mono mt-1">{cert.issuer}</p>
              <p className="text-xs text-text/30 font-mono mt-0.5">
                {cert.date}
                {cert.status && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px]">
                    {cert.status}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm text-text/50 leading-relaxed">{cert.description}</p>

              {/* View credential */}
              <a
                href={cert.credential}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-accent transition-colors"
              >
                View Credential
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-card-bg rounded-2xl border border-white/5 p-6 sm:p-8 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Certifications', value: '3' },
              { label: 'Labs Completed', value: '50+' },
              { label: 'Hours of Training', value: '500+' },
              { label: 'Active Learning', value: 'Always' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs font-mono text-text/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}