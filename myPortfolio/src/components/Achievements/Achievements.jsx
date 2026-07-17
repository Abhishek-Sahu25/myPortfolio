import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import './Achievements.css'

const Achievements = forwardRef((props, ref) => {
  const achievements = [
    { 
      title: 'Oracle Cloud Infrastructure AI Foundations',
      description: 'Certified Associate in OCI AI Foundations, demonstrating expertise in Oracle Cloud AI services and solutions.',
      year: '2025',
      type: 'certification'
    },
    { 
      title: 'Prompt Design in Vertex AI',
      description: 'Certified in Prompt Design for Vertex AI Agent Platform, showcasing advanced skills in AI prompt engineering.',
      year: '2025',
      type: 'certification'
    },
    { 
      title: 'AWS Cloud Fundamentals',
      description: 'Academic coursework in AWS Cloud Fundamentals at VIT Chennai, covering core AWS services and cloud architecture.',
      year: '2024',
      type: 'certification'
    },
    { 
      title: 'Competitive Programming',
      description: 'Active competitive programmer with consistent problem-solving practice on CodeChef & HackerRank.',
      year: '2023-Present',
      type: 'achievement'
    },
    { 
      title: 'CGPA 8.78/10',
      description: 'Academic excellence in B.Tech Computer Science Engineering at VIT Chennai.',
      year: '2023-Present',
      type: 'achievement'
    }
  ]

  return (
    <section className="achievements" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className={`achievement-card ${achievement.type}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="achievement-year">{achievement.year}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
              <div className={`achievement-badge ${achievement.type}`}>
                {achievement.type === 'certification' ? 'Certified' : 
                 achievement.type === 'leadership' ? 'Leadership' : 'Achievement'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

Achievements.displayName = 'Achievements'

export default Achievements