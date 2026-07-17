import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import RotatingText from './RotatingText'
import './Hero.css'

const Hero = forwardRef((props, ref) => {
  return (
    <section className="hero" ref={ref}>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="text-accent">Abhishek Sahu</span>
          </h1>
          
          <RotatingText
            texts={['Software Development Engineer', 'Full-Stack Developer', 'AI-Assisted Engineer', 'Tech Lead']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <br></br>
          <p className="hero-description">
            B.Tech CSE undergraduate at VIT Chennai (CGPA 8.78/10) with 2+ years of experience 
            building scalable, component-driven applications using React, Node.js, Flask, and FastAPI. 
            Passionate about AI/ML engineering and driving real-world impact through technology.
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.querySelector('.projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            <div className="image-wrapper">
              {/* Replace 'your-photo.jpg' with your actual image filename */}
              <img 
                src="/abhishek-photo.jpg" 
                alt="Abhishek Sahu" 
                className="profile-photo"
              />
            </div>
            <div className="glow-effect"></div>
            <div className="decoration-ring"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero