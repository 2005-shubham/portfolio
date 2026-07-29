import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useState, useRef } from "react"

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
  {
    title: "VoteSmart AI",
    description:
      "A bilingual (English/Hindi) civic-tech web app guiding first-time Indian voters through the election process, with a glassmorphism UI. Features VIVA, an AI chatbot answering voting-related questions, a gamified civic-knowledge quiz, and a smart election timeline with live countdowns and constituency-level info.",
    tags: ["React", "AI Chatbot", "Bilingual UI", "Glassmorphism"],
    link: "https://github.com/2005-shubham/matdaan-nagrik-guide",
  },
]

function TiltCard({ children, className }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: "transform 0.2s ease-out" }}
      className={className}
    >
      {children}
    </div>
  )
}

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: index % 2 === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: index * 0.2 }}
          >
            <TiltCard className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-colors h-full">
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
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects