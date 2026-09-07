import { motion } from 'framer-motion'
import { LanguageProvider } from './i18n'
import NeuralBackground from './components/NeuralBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ResumeDownload from './components/ResumeDownload'
import Contact from './components/Contact'
import Footer from './components/Footer'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
}

function Site() {
  return (
    <>
      <div className="scanline" aria-hidden="true" />
      <NeuralBackground />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Hero />
      </motion.div>
      <motion.div {...fadeUp}>
        <Metrics />
      </motion.div>
      <motion.div {...fadeUp}>
        <Projects />
      </motion.div>
      <motion.div {...fadeUp}>
        <Experience />
      </motion.div>
      <motion.div {...fadeUp}>
        <Skills />
      </motion.div>
      <motion.div {...fadeUp}>
        <ResumeDownload />
      </motion.div>
      <motion.div {...fadeUp}>
        <Contact />
      </motion.div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}

export default App