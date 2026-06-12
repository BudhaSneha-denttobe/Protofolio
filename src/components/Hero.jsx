import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { Brain, Cpu, Sparkles } from 'lucide-react'

const floatingShapes = [
  { size: 80, x: '15%', y: '25%', delay: 0, duration: 6 },
  { size: 50, x: '80%', y: '20%', delay: 0.5, duration: 5 },
  { size: 40, x: '10%', y: '70%', delay: 1, duration: 7 },
  { size: 60, x: '85%', y: '65%', delay: 0.3, duration: 4.5 },
  { size: 30, x: '50%', y: '15%', delay: 0.8, duration: 5.5 },
]

const floatingIcons = [
  { Icon: Brain, x: '70%', y: '30%', delay: 0.2, size: 28 },
  { Icon: Cpu, x: '20%', y: '55%', delay: 0.6, size: 24 },
  { Icon: Sparkles, x: '75%', y: '70%', delay: 0.9, size: 22 },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-light-bg dark:to-dark-bg pointer-events-none" />

      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `linear-gradient(135deg, rgba(165,148,249,0.12), rgba(240,171,252,0.08))`,
            border: '1px solid rgba(165,148,249,0.08)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 hidden lg:block"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium text-lg mb-3 tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4"
            >
              <span className="text-gradient">Budha Sneha</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
            >
              AI & Machine Learning Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mb-8 leading-relaxed"
            >
              Passionate about building intelligent systems, AI-powered applications,
              machine learning solutions, and scalable software products that create real-world impact. I transform complex data into actionable insights, design intuitive user experiences, and deliver polished software that helps teams scale faster. Whether it's AI automation, predictive analytics, or full-stack web products, I focus on solutions that drive measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium flex items-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 glass-card text-gray-700 dark:text-gray-300 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <HiMail />
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/BudhaSneha-denttobe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <FiGithub size={18} className="mr-2" />
                GitHub
              </a>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-500">Connect with me</span>
              <div className="h-px w-8 bg-gray-200 dark:bg-white/10" />
              <div className="flex gap-3">
                <a
                  href="https://github.com/BudhaSneha-denttobe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sneha-budha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="mailto:snehabudha470@gmail.com"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <HiMail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md h-[560px] rounded-[2rem] border border-white/10 bg-white/10 dark:bg-slate-950/40 p-6 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
              <div className="absolute left-10 top-8 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute right-8 bottom-10 w-24 h-24 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative w-72 h-72 rounded-[2rem] bg-black/5 dark:bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(56,189,248,0.12)] flex items-center justify-center"
                >
                  <motion.div
                    className="absolute inset-0 rounded-[2rem] border border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  />

                  <motion.div
                    className="absolute left-12 top-10 w-4 h-4 rounded-full bg-primary/80"
                    animate={{ y: [0, -18, 0], x: [0, 12, 0], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute right-12 top-16 w-4 h-4 rounded-full bg-accent/80"
                    animate={{ y: [0, -12, 0], x: [-8, 0, -8], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute left-14 bottom-16 w-4 h-4 rounded-full bg-primary/80"
                    animate={{ y: [0, 12, 0], x: [0, -10, 0], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute right-14 bottom-16 w-4 h-4 rounded-full bg-accent/80"
                    animate={{ y: [0, 12, 0], x: [8, 0, 8], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 text-primary"
                  >
                    <Brain size={96} />
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
