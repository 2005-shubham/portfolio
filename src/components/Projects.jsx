import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Smart City Traffic Analytics Platform",
    description:
      "A full-stack traffic monitoring system that collects, processes, and visualizes real-time traffic, weather, and accident data across cities in Rajasthan. Built with FastAPI, PostgreSQL, React, and a Power BI analytics dashboard — fully containerized with Docker.",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "Power BI"],
    link: "https://github.com/2005-shubham/smart-city-traffic-platform",
  },
  {
    title: "Netflix Content Analysis Dashboard",
    description:
      "An interactive Power BI dashboard analyzing 8,800+ Netflix titles with a custom dark-themed UI — covering content growth trends, genre insights, geographic distribution, and movie/TV ratio.",
    tags: ["Power BI", "Power Query", "Data Modeling"],
    link: "https://github.com/2005-shubham/Netflix-Data-Analysis-PowerBI",
  },
  {
    title: "AI Gesture Interface",
    description:
      "A real-time hand-gesture visualizer using MediaPipe hand tracking and Three.js — different hand gestures trigger unique 3D particle and energy effects rendered live from webcam input.",
    tags: ["Three.js", "MediaPipe", "JavaScript"],
    link: "https://github.com/2005-shubham/AI-Gesture-Interface",
  },
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-800 flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
  key={project.title}
  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: index % 2 === 0 ? -5 : 5 }}
  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 80, damping: 14, delay: index * 0.2 }}
  className="bg-gray-900 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium">
  <ExternalLink className="w-4 h-4" />
  View on GitHub
</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects