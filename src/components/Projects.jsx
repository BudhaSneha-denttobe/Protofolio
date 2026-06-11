import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { HiCode, HiChip } from 'react-icons/hi'
import projectPlaceholder from '../assets/project-placeholder.svg'
import aiResumeAnalyzerImg from '../assets/sneha_certificats/ai-resume-analyzer.jpg'
import plantStoreImg from '../assets/sneha_certificats/plant-store.jpg'
import vacationPlannerImg from '../assets/sneha_certificats/ai-vacation-planner.png'
import studyNowImg from '../assets/sneha_certificats/studynow.jpg'
import greenerCitiesImg from '../assets/sneha_certificats/green planter prediction.jpg'
import careerBotImg from '../assets/sneha_certificats/carrer bot.png'
import loanApprovalImg from '../assets/sneha_certificats/loan approaval.png'

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'ai-ml', label: 'AI / Machine Learning', icon: HiChip },
  { id: 'fullstack', label: 'Full Stack / Web', icon: HiCode },
]

const projects = [
  {
    title: 'AI Resume Analyzer',
    category: 'ai-ml',
    description: 'AI-powered resume analysis platform that evaluates resumes against ATS standards, provides detailed feedback, highlights missing skills, and helps users improve their chances of getting shortlisted for jobs.',
    tags: ['Python', 'Machine Learning', 'NLP', 'Flask'],
    github: 'https://github.com/BudhaSneha-denttobe/DreamHireAI',
    live: 'https://dreamhireai.streamlit.app/',
    gradient: 'from-green-600/20 to-emerald-600/20',
    image: aiResumeAnalyzerImg,
    imageAlt: 'AI Resume Analyzer screenshot',
  },
  {
    title: 'Plant Store',
    category: 'fullstack',
    description: 'Multi-page e-commerce website for plants and gardening accessories with shopping cart functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/BudhaSneha-denttobe/PlantStore-Website',
    live: 'https://budhasneha-denttobe.github.io/PlantStore-Website/',
    gradient: 'from-lime-600/20 to-green-600/20',
    image: plantStoreImg,
    imageAlt: 'Plant Store screenshot',
  },
  {
    title: 'Vacation Planner',
    category: 'ai-ml',
    description: 'AI-powered planner using LLMs to generate customized travel plans, schedules, and recommendations.',
    tags: ['LLM', 'Python', 'GenAI'],
    github: 'https://github.com/BudhaSneha-denttobe/AI-Powered-Vacation-Planner',
    live: 'https://github.com/BudhaSneha-denttobe/AI-Powered-Vacation-Planner',
    gradient: 'from-blue-600/20 to-purple-600/20',
    image: vacationPlannerImg,
    imageAlt: 'Vacation Planner screenshot',
  },
  {
    title: 'StudyNow',
    category: 'fullstack',
    description: 'Learning platform featuring timetable management, task tracking, concentration monitoring, productivity analytics, and chatbot assistance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQLite', 'OpenCV'],
    github: 'https://github.com/BudhaSneha-denttobe/Studynow-website',
    live: '#',
    gradient: 'from-cyan-600/20 to-blue-600/20',
    image: studyNowImg,
    imageAlt: 'StudyNow screenshot',
  },
  {
    title: 'Greener Cities',
    category: 'ai-ml',
    description: 'AI model predicting optimal tree type, number of trees, and planting distance for sustainable urban environments.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/BudhaSneha-denttobe/GreenerCities_Tree_Planting_Prediction',
    live: '#',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    image: greenerCitiesImg,
    imageAlt: 'Greener Cities screenshot',
  },
  {
    title: 'CareerBot',
    category: 'ai-ml',
    description: 'Interactive NLP chatbot helping students explore suitable career paths based on their skills and interests.',
    tags: ['Python', 'Streamlit', 'NLP'],
    github: 'https://github.com/DhanaNusum/AI-Career-and-guidelines',
    gradient: 'from-orange-600/20 to-red-600/20',
    image: careerBotImg,
    imageAlt: 'CareerBot screenshot',
  },
  {
    title: 'Loan Approval Prediction',
    category: 'ai-ml',
    description: 'Binary classification machine learning model predicting loan approval from applicant financial data.',
    tags: ['Python', 'Scikit-Learn', 'Machine Learning'],
    github: 'https://github.com/BudhaSneha-denttobe/Loan_Approval_Prediction-ML-',
    live: '#',
    gradient: 'from-green-600/20 to-blue-600/20',
    image: loanApprovalImg,
    imageAlt: 'Loan Approval Prediction screenshot',
  },]
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 lg:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                  : 'glass-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-primary/30'
              }`}
            >
              {cat.icon && <cat.icon size={16} />}
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-light-bg/80 dark:from-dark-bg/80 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-3 left-4 z-20 flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-black/10 dark:bg-white/10 text-gray-800 dark:text-white/80 backdrop-blur-sm border border-black/10 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/10 dark:bg-white/10 text-gray-600 dark:text-white/60 backdrop-blur-sm">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-white/5">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
