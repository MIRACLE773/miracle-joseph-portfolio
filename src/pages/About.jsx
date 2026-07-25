import { motion } from 'framer-motion'
import Button from './../components/Button'

export default function About() {
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
            About Me
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            My <span className="gradient-text">Story</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-card-bg rounded-2xl border border-white/5 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-semibold text-text flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
                The Journey
              </h2>
              <p className="text-text/50 leading-relaxed">
                My journey into cybersecurity started with curiosity — I wanted to understand
                how things break. With a background in software engineering, I understood how
                applications were built, but I found my true passion in taking them apart.
              </p>
              <p className="text-text/50 leading-relaxed">
                I transitioned from writing code to breaking it, specializing in web application
                and API security. Every vulnerability I find is an opportunity to make the digital
                world a little safer.
              </p>
              <p className="text-text/50 leading-relaxed">
                Today, I conduct authorized penetration tests, document findings with actionable
                recommendations, and continuously sharpen my skills through labs, CTFs, and
                real-world assessments.
              </p>
            </div>

            <div className="bg-card-bg rounded-2xl border border-white/5 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-semibold text-text flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Why Offensive Security?
              </h2>
              <p className="text-text/50 leading-relaxed">
                I believe the best defense is a great offense. By thinking like an attacker,
                I can identify weaknesses before malicious actors do. Every report I deliver
                isn't just a list of bugs — it's a roadmap to stronger security.
              </p>
              <p className="text-text/50 leading-relaxed">
                My software engineering background gives me a unique advantage: I don't just
                find vulnerabilities, I understand the code behind them and can communicate
                fixes in a language developers understand.
              </p>
            </div>
          </motion.div>

          {/* Right: Philosophy & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Photo card */}
            <div className="bg-card-bg rounded-2xl border border-white/5 p-6 sm:p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden border-2 border-white/10 mb-4">
                <img
                  src="/src/assets/images/profile.jpg"
                  alt="Miracle Joseph"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <span class="text-3xl font-bold gradient-text">MJ</span>
                      </div>
                    `
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-text">Miracle Joseph</h3>
              <p className="text-sm text-text/40 font-mono">Junior Penetration Tester</p>

              <div className="mt-4 flex justify-center gap-3">
                <Button href="https://github.com/miraclejoseph" variant="ghost" size="sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
                <Button href="https://linkedin.com/in/miraclejoseph" variant="ghost" size="sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Values */}
            <div className="bg-card-bg rounded-2xl border border-white/5 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-text mb-4">My Approach</h3>
              <div className="space-y-4">
                {[
                  { title: 'Methodical', desc: 'Every test follows a structured methodology — recon, scanning, exploitation, pivoting, reporting.' },
                  { title: 'Thorough', desc: 'I don\'t stop at "proof of concept." I chain vulnerabilities to demonstrate real business impact.' },
                  { title: 'Clear Communication', desc: 'Technical findings explained in language both engineers and executives can understand.' },
                  { title: 'Continuous Learning', desc: 'New CVEs, new techniques, new tools — I stay current so I can test what matters.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text">{item.title}</h4>
                      <p className="text-xs text-text/40 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}