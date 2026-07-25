import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Web Security',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    skills: [
      { name: 'SQL Injection', level: 90 },
      { name: 'XSS', level: 90 },
      { name: 'CSRF', level: 85 },
      { name: 'SSRF', level: 80 },
      { name: 'JWT Security', level: 85 },
      { name: 'IDOR', level: 90 },
      { name: 'XXE', level: 75 },
      { name: 'Command Injection', level: 80 },
    ],
  },
  {
    title: 'Security Tools',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    skills: [
      { name: 'Burp Suite', level: 90 },
      { name: 'Kali Linux', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'FFUF', level: 80 },
      { name: 'Nmap', level: 85 },
      { name: 'SQLMap', level: 75 },
      { name: 'Metasploit', level: 70 },
    ],
  },
  {
    title: 'Development & Testing',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    skills: [
      { name: 'React / Next.js', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'GitHub', level: 80 },
      { name: 'REST API Testing', level: 85 },
    ],
  },
]

export default function Skills() {
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
            Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="mt-3 text-text/40 max-w-xl mx-auto">
            Hands-on experience with industry-standard security tools and vulnerability classes
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card-bg rounded-2xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-text/60 font-mono">{skill.name}</span>
                      <span className="text-xs text-text/30 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIdx * 0.1 + 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-card-bg rounded-2xl border border-white/5 p-8"
        >
          <h3 className="text-lg font-semibold text-text mb-4 text-center">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'OWASP Top 10', 'API Security', 'Network Scanning', 'Reconnaissance',
              'OSINT', 'Social Engineering', 'Password Cracking', 'Wireless Security',
              'Linux Administration', 'Bash Scripting', 'JavaScript', 'OWASP ZAP',
              'Wireshark', 'John the Ripper', 'Hydra', 'GoBuster',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm bg-dark-bg border border-white/5 text-text/50 rounded-lg hover:border-primary/30 hover:text-primary transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}