import { useState, useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'  // Make sure this import exists
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    achievements: useRef(null),
    contact: useRef(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop
          const sectionHeight = ref.current.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero ref={sectionRefs.home} />
      <About ref={sectionRefs.about} />
      <Skills ref={sectionRefs.skills} />
      <Experience ref={sectionRefs.experience} />
      <Projects ref={sectionRefs.projects} />
      <Achievements ref={sectionRefs.achievements} />
      <Contact ref={sectionRefs.contact} />
      <Footer />
    </div>
  )
}

export default App