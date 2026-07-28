import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Server,
  Cloud,
  Container,
  Terminal,
} from "lucide-react"

const skills = [
  { name: "C / C++", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React & Three.js", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MySQL / pgAdmin", icon: Database },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Linux", icon: Terminal },
]

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl w-full">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
  key={skill.name}
  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -8 : 8 }}
  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.12 }}
  className="flex flex-col items-center gap-3 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 hover:scale-105 transition-all"
>
              <Icon className="w-8 h-8 text-purple-400" />
              <span className="text-gray-300 text-sm text-center">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills