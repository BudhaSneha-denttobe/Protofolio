import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={darkMode ? 'moon' : 'sun'}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
      </motion.div>
    </button>
  )
}
