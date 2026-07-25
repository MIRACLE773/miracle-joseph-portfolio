import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Reports from './pages/Reports'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App