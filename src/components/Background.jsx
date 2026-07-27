import { useScroll, useTransform, motion } from "framer-motion"

function Background() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
      />
    </div>
  )
}

export default Background