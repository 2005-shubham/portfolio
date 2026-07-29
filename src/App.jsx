import SmoothScroll from "./components/SmoothScroll"
import CustomCursor from "./components/CustomCursor"
import Background from "./components/Background"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Background />
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </SmoothScroll>
  )
}

export default App