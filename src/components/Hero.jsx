import { motion } from "framer-motion"

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-white mb-4"
      >
        Hi, I'm <span className="text-purple-500">Shubham</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-400"
      >
        Data Analytics & Frontend Developer
      </motion.p>
      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Download Resume
      </motion.a>
    </section>
  )
}

export default Hero