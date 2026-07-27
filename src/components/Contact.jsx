import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ExternalLink, Send } from "lucide-react"

const socials = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:shubhamsharmaalwar89@gmail.com",
  },
  {
    name: "GitHub",
    icon: ExternalLink,
    link: "https://github.com/2005-shubham",
  },
  {
    name: "LinkedIn",
    icon: ExternalLink,
    link: "https://www.linkedin.com/in/shubham-sharma-ab1b3b312/",
  },
]

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    )
    window.location.href = `mailto:shubhamsharmaalwar89@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gray-400 mb-10 text-center max-w-md"
      >
        Have a project in mind or just want to say hi? Fill the form below or
        reach me directly.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4 mb-12"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex gap-6"
      >
        {socials.map((social) => {
          const Icon = social.icon
          return (
            
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
              title={social.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Contact