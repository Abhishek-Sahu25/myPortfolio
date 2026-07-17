import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = forwardRef((props, ref) => {
  return (
    <section className="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I'm Abhishek Sahu, a passionate Software Development Engineer and Full-Stack Developer 
              currently pursuing my B.Tech in Computer Science at VIT Chennai. With a CGPA of 8.78/10 
              and 2+ years of hands-on experience, I specialize in building scalable, user-centric 
              applications that drive real-world impact.
            </p>
            <p>
              My expertise spans across full-stack web development (React, Node.js, Express, Flask, FastAPI), 
              AI/ML engineering, and blockchain technologies. I'm particularly passionate about applied AI — 
              building end-to-end pipelines for OCR/NLP text extraction and deepfake detection using pre-trained 
              deep learning models.
            </p>
            <p>
              As a Technical Lead at Fraternity of Young Innovators (FYI), I lead a 10-member engineering team 
              within a 100+ member innovation club, overseeing the full software development lifecycle and 
              mentoring team members in modern development practices and AI-assisted tools.
            </p>
            <p>
              When I'm not coding, you can find me solving DSA problems on CodeChef & HackerRank, 
              experimenting with new technologies, or contributing to open-source projects.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>8.78</h3>
                <p>CGPA</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-wrapper">
              <div className="profile-image">
                {/* Replace 'your-photo.jpg' with your actual image filename */}
                <img 
                  src="/abhishek-photo.jpg" 
                  alt="Abhishek Sahu" 
                  className="about-photo"
                />
              </div>
              <div className="dots"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About