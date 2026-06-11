import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiCheck } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (submissionError) {
      setSubmissionError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const response = await fetch('https://formsubmit.co/ajax/snehabudha470@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false',
          _subject: `New message from ${formData.name} via portfolio website`,
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send your message. Please try again later.')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (error) {
      setSubmissionError(error.message || 'Something went wrong while sending your message.')
    }
  }

  const inputClass = (field) => `
    w-full px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5 border
    ${errors[field] ? 'border-red-500/50 focus:border-red-400' : 'border-gray-200 dark:border-white/10 focus:border-primary/50'}
    focus:ring-2 focus:ring-primary/20 outline-none transition-all
    text-gray-700 dark:text-gray-200 placeholder-gray-500 text-sm
  `

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects,
            collaborations, and AI-driven solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <HiMail className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 truncate">snehabudha470@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <FiGithub className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 truncate">https://github.com/BudhaSneha-denttobe</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <FiExternalLink className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Live Demo</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 truncate">budhasneha-website.vercel.app</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <FiLinkedin className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 truncate">https://www.linkedin.com/in/sneha-budha</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-white/5">
                <p className="text-xs text-gray-500 mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/BudhaSneha-denttobe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sneha-budha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <FiLinkedin size={16} />
                  </a>
                  <a
                    href="mailto:snehabudha470@gmail.com"
                    className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <HiMail size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass('subject')}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass('message')}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <HiCheck size={18} />
                    Message Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {submissionError && (
                <p className="text-sm text-red-400 mt-2">{submissionError}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
