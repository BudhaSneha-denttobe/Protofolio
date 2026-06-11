import { motion } from 'framer-motion'
import { HiAcademicCap, HiBookOpen, HiTemplate } from 'react-icons/hi'

const educationData = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering (AI & ML)',
    institution: 'Prasad V Potluri Siddhartha Institute of Technology',
    location: 'Vijayawada',
    period: '2023 – 2027',
    score: 'CGPA: 9.03 / 10',
    icon: HiAcademicCap,
  },
  {
    degree: 'Intermediate',
    field: 'MPC',
    institution: 'Sri Sarada Educational Institutions',
    location: 'Vijayawada',
    period: '2021 – 2023',
    score: 'Percentage: 95%',
    icon: HiBookOpen,
  },
  {
    degree: 'SSC',
    field: 'Secondary Education',
    institution: 'Ravindra Bharathi Public School',
    location: 'Vijayawada',
    period: '2020 – 2021',
    score: 'Percentage: 99%',
    icon: HiTemplate,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 px-4 relative">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="glass-card p-6 sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center z-10 shadow-lg shadow-primary/20">
                    <item.icon className="text-white text-sm" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          {item.degree}
                        </span>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                          {item.field}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.institution}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.location}</p>
                    </div>
                    <div className="text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0 mt-2 sm:mt-0">
                      <span className="text-xs text-gray-500 whitespace-nowrap">{item.period}</span>
                      <span className="text-xs font-semibold text-gradient">{item.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
