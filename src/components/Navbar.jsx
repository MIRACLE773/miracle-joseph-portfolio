import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Reports', path: '/reports' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-mono font-bold text-sm text-dark-bg group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
              MJ
            </div>
            <span className="hidden sm:block font-mono text-sm text-text/70 group-hover:text-text transition-colors">
              miracle<span className="text-primary">.</span>joseph
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text/60 hover:text-text hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-text rounded-full transition-colors"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-text rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full bg-text rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary border-l-2 border-primary'
                        : 'text-text/60 hover:text-text hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}