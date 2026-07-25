import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Message from Portfolio*

*Name:* ${form.name}
*Email:* ${form.email}
*Subject:* ${form.subject}

*Message:*
${form.message}
    `.trim()

    // Nigerian number: 08103133944 → +2348103133944
    const phoneNumber = '2348103133944'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank')

    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-1.5 font-mono">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-text placeholder:text-text/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-1.5 font-mono">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-text placeholder:text-text/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text/70 mb-1.5 font-mono">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-text placeholder:text-text/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          placeholder="Security engagement inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-1.5 font-mono">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-dark-bg border border-white/10 text-text placeholder:text-text/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
          placeholder="Describe your security assessment needs..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'sending'}
        className="w-full sm:w-auto disabled:opacity-50"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Opening WhatsApp...
          </>
        ) : status === 'success' ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            WhatsApp opened!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send via WhatsApp
          </>
        )}
      </Button>

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}
    </form>
  )
}