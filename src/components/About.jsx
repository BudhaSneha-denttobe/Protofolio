import { motion } from 'framer-motion'
import { HiCode, HiAcademicCap, HiLightningBolt, HiCube } from 'react-icons/hi'
import profileImg from '../assets/hero.jpg'

const highlights = [
  { icon: HiLightningBolt, label: 'AI & ML Enthusiast' },
  { icon: HiCode, label: 'Full Stack Developer' },
  { icon: HiCube, label: 'Problem Solver' },
  { icon: HiAcademicCap, label: 'Continuous Learner' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-40 h-56 sm:w-48 sm:h-72 rounded-3xl overflow-hidden border-4 border-gray-200 dark:border-white/10 group-hover:border-primary/40 transition-all duration-500">
                <img
                  src={profileImg}
                  alt="Budha Sneha"
                  className="w-full h-full object-cover"
                />
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
            <div className="glass-card p-8">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                I am a Computer Science and Engineering (AI & ML) student passionate about
                technology-driven problem solving. I enjoy collaborating with diverse teams,
                understanding business requirements, and transforming ideas into meaningful solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-8">
                My interests span Artificial Intelligence, Machine Learning, Data Science,
                Generative AI, and Full-Stack Development. I love exploring emerging technologies
                and building products that create measurable value.
              </p>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:border-primary/20 transition-all"
                  >
                    <item.icon className="text-primary text-sm" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
