import { motion } from 'framer-motion'
import ReportCard from './../components/ReportCard'

const reports = [
  {
    title: 'OWASP Juice Shop — Full Assessment',
    type: 'Web Application Pentest',
    date: 'March 2026',
    severity: 'High',
    description:
      'Complete penetration test of the OWASP Juice Shop. Identified 12 vulnerabilities including 2 critical severity issues related to JWT manipulation and SQL injection.',
    stats: [
      { label: 'Critical', value: '2' },
      { label: 'High', value: '4' },
      { label: 'Medium', value: '6' },
    ],
    findings: ['SQL Injection', 'XSS', 'JWT Alg Confusion', 'CSRF', 'IDOR', 'SSRF'],
    pdf: 'https://github.com/MIRACLE773/juice-shop-pentest/blob/main/README.md',
    github: 'https://github.com/MIRACLE773/juice-shop-pentest',
  },
  {
    title: 'VulnBank — API Security Review',
    type: 'API Security Assessment',
    date: 'January 2026',
    severity: 'Critical',
    description:
      'Security review of VulnBank REST APIs. Chained IDOR, mass assignment, and rate-limiting issues to demonstrate complete account takeover.',
    stats: [
      { label: 'Critical', value: '1' },
      { label: 'High', value: '3' },
      { label: 'Medium', value: '4' },
    ],
    findings: ['IDOR', 'Mass Assignment', 'Broken Auth', 'Rate Limiting'],
    pdf: 'https://github.com/MIRACLE773/vulnbank-pentest-public/blob/main/README.md',
    github: 'https://github.com/MIRACLE773/vulnbank-pentest-public',
  },

]

export default function Reports() {
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
            Documentation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            Pentest <span className="gradient-text">Reports</span>
          </h1>
          <p className="mt-3 text-text/40 max-w-2xl mx-auto">
            Professional penetration testing reports demonstrating structured methodology,
            detailed findings, and actionable remediation — exactly what recruiters want to see.
          </p>
        </motion.div>

        {/* Reports grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reports.map((report, i) => (
            <ReportCard key={report.title} report={report} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-card-bg rounded-2xl border border-white/5 p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-text">
            Want to see a full report?
          </h3>
          <p className="mt-2 text-text/40 max-w-lg mx-auto">
            I can provide redacted examples of real pentest reports upon request.
            Reach out and I'll share samples.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:from-primary/90 hover:to-primary transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
          >
            Request Sample Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}