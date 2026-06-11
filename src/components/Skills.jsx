import { motion } from 'framer-motion'
import { HiCode, HiBookOpen, HiLightningBolt, HiCube, HiGlobeAlt, HiCollection, HiCog } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: HiCode,
    skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript'],
  },
  {
    title: 'Core Computer Science',
    icon: HiCube,
    skills: ['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    title: 'AI / ML',
    icon: HiLightningBolt,
    skills: ['Machine Learning', 'Artificial Intelligence', 'Data Science', 'Generative AI'],
  },
  {
    title: 'Libraries',
    icon: HiBookOpen,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Web Technologies',
    icon: HiGlobeAlt,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Databases',
    icon: HiCollection,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: HiCog,
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 px-4 relative">
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <cat.icon className="text-primary text-lg" />
                </div>
                <h3 className="text-base font-heading font-semibold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-sm text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
