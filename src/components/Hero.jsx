import { motion } from "framer-motion"

function Hero() {
  return (
    <section id="about" className="min-h-screen bg-gray-800 flex items-center justify-center px-6 py-20">
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
    </section>
  )
}

export default Hero