import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-gray-900 flex items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            <span className="text-purple-500">S</span>hubham
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader