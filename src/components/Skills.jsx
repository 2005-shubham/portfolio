import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Server,
  Cloud,
  Container,
  Terminal,
  BarChart3,
} from "lucide-react"

const skills = [
  { name: "C / C++", icon: Code2, size: "normal" },
  { name: "Java", icon: Code2, size: "normal" },
  { name: "Python", icon: Code2, size: "large" },
  { name: "JavaScript", icon: Code2, size: "normal" },
  { name: "React & Three.js", icon: Code2, size: "large" },
  { name: "Node.js", icon: Server, size: "normal" },
  { name: "MySQL / pgAdmin", icon: Database, size: "normal" },
  { name: "Docker", icon: Container, size: "normal" },
  { name: "AWS", icon: Cloud, size: "normal" },
  { name: "Linux", icon: Terminal, size: "normal" },
  { name: "Power BI", icon: BarChart3, size: "large" },
  { name: "Tableau", icon: BarChart3, size: "normal" },
  { name: "Pandas & Python Libraries", icon: Code2, size: "normal" },
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

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 auto-rows-[120px] gap-4 max-w-4xl w-full">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          const spanClass =
            skill.size === "large"
              ? "col-span-2 row-span-2"
              : "col-span-1 row-span-1"

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotate: index % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.08 }}
              className={`${spanClass} flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 transition-all`}
            >
              <Icon className={skill.size === "large" ? "w-10 h-10 text-purple-400" : "w-7 h-7 text-purple-400"} />
              <span className={`text-gray-300 text-center ${skill.size === "large" ? "text-base font-medium" : "text-xs"}`}>
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