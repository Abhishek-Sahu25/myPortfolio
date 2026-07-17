import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaBuilding, FaCode } from 'react-icons/fa'
import './Experience.css'

const Experience = forwardRef((props, ref) => {
  const experiences = [
    {
      title: 'Technical Lead',
      company: 'Fraternity of Young Innovators (FYI), VIT Chennai',
      period: 'Mar 2025 – Mar 2026',
      icon: <FaBriefcase />,
      achievements: [
        'Leading a 10-member cross-functional technical team within a 100+ member organization',
        'Architecting and maintaining the FYI club website using React.js and Node.js',
        'Conducting code reviews and establishing Git/GitHub version-control standards',
        'Mentoring team members in React.js, Node.js, and AI-assisted development tools',
        'Coordinating agile sprints and managing stakeholder communication'
      ],
      technologies: ['React.js', 'Node.js', 'Git', 'Agile', 'Team Leadership']
    },
    {
      title: 'SEO & Web Development Intern',
      company: 'Webji Hosting Pvt. Ltd.',
      period: 'Jun 2025 – Jul 2025',
      icon: <FaBuilding />,
      achievements: [
        'Created and optimized Google Sites and WordPress pages with SEO-friendly structure',
        'Improved website visibility through Google My Business optimization and citation building',
        'Applied on-page SEO, keyword research, and link structuring for better organic ranking'
      ],
      technologies: ['WordPress', 'SEO', 'Google Sites', 'Google My Business']
    }
  ]

  return (
    <section className="experience" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-card-inner">
                <div className="experience-header">
                  <div className="experience-icon-wrapper">
                    {exp.icon}
                  </div>
                  <div className="experience-title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="experience-company">
                        <FaBuilding className="meta-icon" /> {exp.company}
                      </span>
                      <span className="experience-period">
                        <FaCalendar className="meta-icon" /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="experience-achievements">
                  {exp.achievements.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <span className="achievement-bullet">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="experience-tech-tag">
                      <FaCode className="tech-icon" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

Experience.displayName = 'Experience'

export default Experience