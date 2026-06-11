import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-10 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-5 text-sm">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href.slice(1))}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://budhasneha-website.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Live Demo
            </a>
          </div>

          <div className="flex gap-3">
            <a href="https://github.com/budhasneha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all">
              <FiGithub size={16} />
            </a>
            <a href="https://linkedin.com/in/sneha-budha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all">
              <FiLinkedin size={16} />
            </a>
            <a href="mailto:budha.snehabudha470@gmail.com" className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all">
              <HiMail size={16} />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-white/5 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5">
            &copy; {new Date().getFullYear()} Budha Sneha. All Rights Reserved.
            Made with <FiHeart className="text-red-500" size={14} />
          </p>
        </div>
      </div>
    </footer>
  )
}
