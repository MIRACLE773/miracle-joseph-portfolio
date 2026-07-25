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
            <Button href="/src/assets/resume.pdf" variant="primary" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </Button>
            <Button href="/src/assets/resume.docx" variant="secondary" size="lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Download DOCX
            </Button>
          </div>
        </motion.div>

        {/* Embedded preview */}
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

          {/* PDF embed placeholder */}
          <div className="p-8 sm:p-12">
            <div className="bg-dark-bg rounded-xl border border-white/5 p-8 sm:p-12">
              {/* Resume content preview */}
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center border-b border-white/10 pb-6">
                  <h2 className="text-2xl font-bold text-text">MIRACLE JOSEPH</h2>
                  <p className="text-sm text-accent font-mono mt-1">Junior Penetration Tester</p>
                  <div className="flex justify-center gap-4 mt-2 text-xs text-text/30 font-mono">
                    <span>miraclejoseph@gmail.comm</span>
                    <span>www.linkedin.com/in/miracle-joseph-009b16349</span>
                    <span>https://github.com/MIRACLE773</span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Professional Summary</h3>
                  <p className="text-sm text-text/50 leading-relaxed">
                    Junior Penetration Tester with a background in software engineering and a passion for
                    offensive security. Skilled in identifying and exploiting web application and API
                    vulnerabilities using industry-standard tools and methodologies. Strong communicator
                    with experience documenting technical findings and delivering actionable remediation
                    recommendations.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Technical Skills</h3>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-text/50">
                    <div><span className="text-text/70 font-medium">Web Security:</span> SQLi, XSS, CSRF, SSRF, JWT, IDOR</div>
                    <div><span className="text-text/70 font-medium">Tools:</span> Burp Suite, Nmap, FFUF, SQLMap, Docker</div>
                    <div><span className="text-text/70 font-medium">Languages:</span> Python, JavaScript, Bash</div>
                    <div><span className="text-text/70 font-medium">Other:</span> Kali Linux, Git, Postman, Metasploit</div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text font-medium">Independent Security Researcher</span>
                        <span className="text-text/30 font-mono">2025 — Present</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-sm text-text/50 list-disc list-inside">
                        <li>Conducted penetration tests on 2+ deliberately vulnerable applications</li>
                        <li>Authored detailed reports with executive summaries and technical findings</li>
                        <li>Completed vulnbank  vulnerability </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text font-medium">Software Engineer</span>
                        <span className="text-text/30 font-mono">2024 — 2025</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-sm text-text/50 list-disc list-inside">
                        <li>Built and maintained web applications using React and Node.js</li>
                        <li>Developed secure API endpoints and authentication systems</li>
                        <li>Developed apps and authentication systems</li>
                        <li>Performed code reviews focused on security best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Certifications</h3>
                  <div className="space-y-1 text-sm text-text/50">
                    <div className="flex justify-between">
                      <span>ALX Cybersecurity  Certification </span>
                      <span className="text-text/30 font-mono">2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ALX Software Engineering Certification</span>
                      <span className="text-text/30 font-mono">2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ALX professional foundation Certification</span>
                      <span className="text-text/30 font-mono">2025</span>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                <p className="text-sm text-text/40">
                  📄 Replace this preview with your actual PDF embed.
                  Use{' '}
                  <code className="text-xs text-accent bg-dark-bg px-2 py-0.5 rounded font-mono">
                    &lt;iframe&gt;
                  </code>{' '}
                  or{' '}
                  <code className="text-xs text-accent bg-dark-bg px-2 py-0.5 rounded font-mono">
                    &lt;embed&gt;
                  </code>{' '}
                  to display your PDF file.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}