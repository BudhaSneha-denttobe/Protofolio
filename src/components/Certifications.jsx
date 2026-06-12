import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiBadgeCheck, HiExternalLink } from 'react-icons/hi'
import CertificateModal from './CertificateModal'

const certifications = [
  {
    title: 'AI-ML Virtual Internship',
    issuer: 'AICTE / Eduskill / Google',
    imageKey: 'ai-ml-internship',
    fileName: 'AICTE AI-ML Virtual Internship BUDHA  SNEHA 670154.pdf',
  },
  {
    title: 'Foundations of R Software (Gold)',
    issuer: 'NPTEL IIT Kanpur',
    imageKey: 'NPTEL-Foundations of R Software.jpeg',
    fileName: 'NPTEL-Foundations of R Software.jpeg',
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL IIT Madras',
    imageKey: 'intro-ml',
    fileName: 'NPTEL-Introduction to Machine Learning.pdf',
  },
  {
    title: 'Deep Learning',
    issuer: 'NPTEL IIT Kharagpur',
    imageKey: 'deep-learning',
    fileName: 'NPTEL-Deep Learning.pdf',
  },
  {
    title: 'Cisco Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    imageKey: 'cisco-networks',
    fileName: 'Cisco-CCNA Introduction to Networks.pdf',
  },
  {
    title: 'Geodata Processing using Python and ML',
    issuer: 'ISRO',
    imageKey: 'isro-geodata',
    fileName: 'Isro-Geodata Processing using Python and Machine Learning-certificate.pdf',
  },
  {
    title: 'AI Primer',
    issuer: 'Infosys',
    imageKey: 'infosys-ai-primer',
    fileName: 'INFOSYS-Applied Generative AI Certifi cation.pdf',
  },
  {
    title: 'Introduction to GenAI',
    issuer: 'Google Cloud (Coursera)',
    imageKey: 'google-cloud-ai',
    fileName:'Coursera-Introduction to GenAI 4E7FGH11N91J.pdf'
  },
  {
    title: 'From Builder to AI Architecture',
    issuer: 'IBM SkillBuild',
    imageKey: 'IBM-From Builder to AI Architect.jpeg',
    fileName: 'IBM-From Builder to AI Architect.jpeg',
  },
  {
    title: 'Data Structures and Algorithms(Gold)',
    issuer: 'Smart Interviews',
    imageKey: 'Smart Interviews-Data Structures and Algorithms.png',
    fileName: 'Smart Interviews-Data Structures and Algorithms.png',
  },
  {
    title: 'Generative AI Foundations',
    issuer: 'AWS',
    imageKey: 'aws-generative-ai',
    fileName:'AWS-Generative AI Foundations-12NEW20260610-31-r98qek.pdf',
  },
  {
    title: 'Introduction to Prompt Engineering',
    issuer: 'IBM',
    imageKey: 'ibm-prompt-engineering',
    fileName: 'Edx-IBM-Introduction to Prompt Engineering.pdf',
  },
  {
    title: 'Strategic Applications of IT Project & Program Management',
    issuer: 'University of Washington',
    imageKey: 'uwashington-project-management',
    fileName: 'Edx-UWashingtonX-Strategic Applications of IT Project & Program Management.pdf',
  },
  {
    title:'Cloud Technologies',
    issuer:'Infosys',
    imageKey:'infosys-cloud-technologies',
    fileName:'Infosys-Cloud Technologies.pdf',
  },
]

const orgColors = [
  'from-purple-600/30 to-pink-600/30',
  'from-blue-600/30 to-indigo-600/30',
  'from-emerald-600/30 to-teal-600/30',
  'from-orange-600/30 to-red-600/30',
  'from-cyan-600/30 to-blue-600/30',
  'from-green-600/30 to-emerald-600/30',
  'from-violet-600/30 to-purple-600/30',
  'from-sky-600/30 to-indigo-600/30',
  'from-rose-600/30 to-pink-600/30',
  'from-amber-600/30 to-orange-600/30',
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certifications" className="py-20 lg:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card p-5 group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${orgColors[i % orgColors.length]} flex items-center justify-center flex-shrink-0`}>
                  <HiBadgeCheck className="text-primary text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-heading font-semibold text-gray-900 dark:text-white mb-0.5 leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">{cert.issuer}</p>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                className="flex items-center gap-1.5 text-xs text-primary hover:text-accent transition-colors mt-2"
              >
                <HiExternalLink size={14} />
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  )
}
