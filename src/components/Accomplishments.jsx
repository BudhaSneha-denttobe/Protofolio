import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { HiStar, HiLightningBolt, HiBadgeCheck, HiAcademicCap, HiCode, HiCube } from 'react-icons/hi'

const accomplishments = [
  {
    title: 'Gold Medal in Mathematics Olympiad',
    description: 'Achieved gold medal for outstanding performance in the Mathematics Olympiad competition.',
    icon: FiAward,
  },
  {
    title: '2nd Prize in Entrepreneur Walk and Talk Competition',
    description: 'Secured second place for innovative entrepreneurial ideas and presentation skills.',
    icon: HiStar,
  },
  {
    title: 'Top 50 – Smart India Hackathon (Campus Level)',
    description: 'Selected among top 50 participants in campus-level Smart India Hackathon competition.',
    icon: HiLightningBolt,
  },
  {
    title: 'Participated in Quantum Valley Hackathon',
    description: 'Active participant in the Quantum Valley Hackathon, collaborating on innovative tech solutions.',
    icon: HiCode,
  },
  {
    title: 'Technical Paper Presentation – SITARA 2K24',
    description: 'Presented a technical paper at SITARA 2K24, showcasing research and analytical skills.',
    icon: HiAcademicCap,
  },
  {
    title: 'Coding Camp – NEXORIA',
    description: 'Participated in NEXORIA coding camp, enhancing algorithmic and problem-solving abilities.',
    icon: HiCube,
  },
  {
    title: 'TRIX Event Presentation on Real-World Problems',
    description: 'Presented solutions to real-world problems at the TRIX event, demonstrating practical thinking.',
    icon: HiBadgeCheck,
  },
]

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="py-20 lg:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Accomplishments</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accomplishments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <item.icon className="text-primary text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-gray-900 dark:text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
