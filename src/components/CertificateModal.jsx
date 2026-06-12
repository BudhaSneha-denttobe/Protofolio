import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

const getCertificateUrl = (fileName) => `/certificates/${encodeURIComponent(fileName)}`

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null

  const fileUrl = cert.fileName
    ? getCertificateUrl(cert.fileName)
    : cert.imageKey
      ? getCertificateUrl(cert.imageKey)
      : null

  const isPdf = Boolean(fileUrl && fileUrl.toLowerCase().endsWith('.pdf'))
  const isImage = Boolean(fileUrl && /\.(jpe?g|png|gif|webp|svg)$/i.test(fileUrl))

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <HiX size={28} />
          </button>

          <div className="glass-card p-2 overflow-hidden bg-dark-surface/90">
            {isPdf ? (
              <iframe
                src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                title={cert.title}
                className="w-full h-[80vh] rounded-lg"
              />
            ) : isImage ? (
              <img
                src={fileUrl}
                alt={cert.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <div className="flex min-h-[24rem] flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">{cert.title[0]}</span>
                </div>
                <p className="text-white font-heading font-semibold text-lg mb-2">{cert.title}</p>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-2">
                  Certificate file is not available yet.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 text-center">
            <p className="text-white font-heading font-semibold text-lg">{cert.title}</p>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
            {fileUrl && (
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Back
                </button>
                <a
                  href={fileUrl}
                  download
                  className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
