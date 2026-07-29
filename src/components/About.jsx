import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-800 flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
  I'm a Computer Science student with a strong foundation in{" "}
  <span className="text-purple-400">C, C++, Java</span> and{" "}
  <span className="text-purple-400">Python</span>, and a growing passion for{" "}
  <span className="text-purple-400">data analytics</span> and{" "}
  <span className="text-purple-400">frontend development</span>. I love
  building things end-to-end — from working with{" "}
  <span className="text-purple-400">MySQL</span> and{" "}
  <span className="text-purple-400">pgAdmin</span> on the data side, to
  crafting interactive UIs with{" "}
  <span className="text-purple-400">React</span> and{" "}
  <span className="text-purple-400">Three.js</span>. I've also worked with{" "}
  <span className="text-purple-400">Docker</span>,{" "}
  <span className="text-purple-400">AWS</span>, and{" "}
  <span className="text-purple-400">Linux</span> to deploy and manage
  projects, and I enjoy sharpening my problem-solving skills through DSA. I'm
  always excited to learn new tools and turn ideas into real, working
  products.
</p>
      </motion.div>
    </section>
  )
}

export default About