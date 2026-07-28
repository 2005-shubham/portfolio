import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[200] rounded-full border-2 border-purple-400 hidden md:block"
      animate={{
        x: position.x - (isHovering ? 24 : 10),
        y: position.y - (isHovering ? 24 : 10),
        width: isHovering ? 48 : 20,
        height: isHovering ? 48 : 20,
        backgroundColor: isHovering ? "rgba(168, 85, 247, 0.2)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
    />
  )
}

export default CustomCursor
