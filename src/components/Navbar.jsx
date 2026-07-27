import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`text-sm font-medium transition-colors relative ${
              active === link.id
                ? "text-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.label}
            {active === link.id && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar