import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

function App() {
  return (
    <div className="relative min-h-screen bg-cyber-bg font-body text-cyber-text">
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Hero />
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
      </main>
      <Footer />
    </div>
  )
}

export default App