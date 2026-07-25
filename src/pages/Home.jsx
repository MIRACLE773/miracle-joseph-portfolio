import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TypeAnimation } from "./TypeAnimation";
import Button from './../components/Button'
import ProjectCard from './../components/ProjectCard'

const stats = [
  { value: '2+', label: 'Major Security Assessments' },
  { value: '20+', label: 'OWASP Top 10 Vulns Tested' },
  { value: '10+', label: 'Security Tools' },
]

const featuredProjects = [
  {
    title: 'VulnBank',
    description:
      'A deliberately vulnerable banking web application built for practicing real-world web application penetration testing techniques.',
    tools: ['Burp Suite', 'SQLMap', 'Python', 'Docker'],
    findings: ['SQLi', 'IDOR', 'XSS', 'Broken Auth'],
    github: 'https://github.com/MIRACLE773/vulnbank-pentest-public',
    report: 'https://github.com/MIRACLE773/vulnbank-pentest-public/blob/main/README.md',
  },
  {
    title: 'OWASP Juice Shop',
    description:
      'Comprehensive security assessment of the OWASP Juice Shop — a modern vulnerable web app covering all OWASP Top 10 categories.',
    tools: ['Burp Suite', 'Nmap', 'FFUF', 'Python'],
    findings: ['SQLi', 'XSS', 'CSRF', 'JWT Issues', 'SSRF'],
    github: 'https://github.com/MIRACLE773/juice-shop-pentest',
    report: 'https://github.com/MIRACLE773/juice-shop-pentest/blob/main/README.md',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Available for security engagements
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight"
              >
                Miracle{' '}
                <span className="gradient-text">Joseph</span>
              </motion.h1>

              {/* Typing animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl text-text/60 font-mono"
              >
                <TypeAnimation
                  strings={[
                    'Junior Penetration Tester',
                    'Web Application Security Analyst',
                    'API Security Enthusiast',
                    'Offensive Security Researcher',
                  ]}
                  speed={60}
                  deleteSpeed={40}
                  repeat={Infinity}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg text-text/40 leading-relaxed max-w-lg"
              >
                I help organizations identify and remediate vulnerabilities in web applications
                and APIs through authorized penetration testing and responsible disclosure.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button to="/projects" variant="primary" size="lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  View Projects
                </Button>
                <Button href="/resume" variant="secondary" size="lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </Button>
                <Button to="/contact" variant="ghost" size="lg">
                  Contact Me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 flex items-center gap-4 text-sm text-text/30"
              >
                <span className="font-mono text-xs">Trusted by</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-dark-bg flex items-center justify-center text-[10px] font-mono text-text/50"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-mono text-xs text-text/30">+ clients</span>
              </motion.div>
            </div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Glow behind photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[60px] scale-110" />

                {/* Photo frame */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
                  {/* Replace with your actual photo path */}
                  <img
                    src="/images/profile.jpg"
                    alt="Miracle Joseph"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add(
                        'bg-gradient-to-br',
                        'from-primary/20',
                        'to-accent/20',
                        'flex',
                        'items-center',
                        'justify-center'
                      )
                      e.target.parentElement.innerHTML = `
                        <div class="text-center">
                          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span class="text-3xl font-bold text-dark-bg">MJ</span>
                          </div>
                          <p class="mt-3 text-xs text-text/30 font-mono">Your Photo</p>
                        </div>
                      `
                    }}
                  />
                </div>

                {/* Decorative rings */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 border border-accent/20 rounded-full" />

                {/* Status badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-card-bg border border-white/10 rounded-full px-4 py-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-text/60 font-mono">Open to work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATISTICS SECTION ========== */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-2 text-sm text-text/40 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-3 text-text/40 max-w-xl mx-auto">
              Real-world security assessments demonstrating hands-on offensive security skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button to="/projects" variant="secondary">
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}