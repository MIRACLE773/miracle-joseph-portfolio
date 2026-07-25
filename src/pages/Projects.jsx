import { motion } from 'framer-motion'
import ProjectCard from './../components/ProjectCard'

const projects = [
  {
    title: 'OWASP Juice Shop',
    description:
      'Comprehensive penetration test of the Juice Shop — a deliberately insecure web application covering all OWASP Top 10 categories. Findings included SQL injection, XSS, broken access control, and JWT manipulation.',
    tools: ['Burp Suite', 'Docker', 'Python', 'Nmap', 'FFUF', 'SQLMap'],
    findings: ['SQLi', 'XSS', 'CSRF', 'JWT', 'IDOR', 'SSRF'],
    github: 'https://github.com/MIRACLE773/juice-shop-pentest',
    report: 'https://github.com/MIRACLE773/juice-shop-pentest/blob/main/README.md',
  },
  {
    title: 'VulnBank',
    description:
      'Custom-built vulnerable banking application. Assessed authentication mechanisms, API endpoints, and business logic flaws. Chained multiple low-severity issues into a critical account takeover scenario.',
    tools: ['Burp Suite', 'SQLMap', 'Python', 'Docker', 'Postman'],
    findings: ['SQLi', 'IDOR', 'Broken Auth', 'Mass Assignment'],
    github: 'https://github.com/MIRACLE773/vulnbank-pentest-public',
    report: 'https://github.com/MIRACLE773/vulnbank-pentest-public/blob/main/README.md',
  },
 
  
]

export default function Projects() {
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
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            Security <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-3 text-text/40 max-w-2xl mx-auto">
            Hands-on penetration testing assessments demonstrating my methodology,
            tools, and reporting capabilities across various vulnerable targets.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Projects', value: '2+' },
            { label: 'Vulns Found', value: '30+' },
            { label: 'Tools Used', value: '12+' },
            { label: 'Reports', value: '4' },
          ].map((s) => (
            <div key={s.label} className="bg-card-bg rounded-xl border border-white/5 p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs font-mono text-text/40 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}