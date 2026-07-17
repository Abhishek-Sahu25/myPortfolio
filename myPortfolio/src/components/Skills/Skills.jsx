import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaJs, FaPython, FaJava, FaHtml5, FaCss3, 
  FaNode, FaGit, FaAws, FaDatabase, FaDocker 
} from 'react-icons/fa'
import { SiFlask, SiFastapi, SiMongodb, SiFirebase, SiOpencv } from 'react-icons/si'
import './Skills.css'

const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 88 },
        { name: 'Java', icon: <FaJava />, level: 85 },
        { name: 'C/C++', icon: <FaReact />, level: 82 }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 92 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3 />, level: 90 },
        { name: 'Responsive Design', icon: <FaReact />, level: 95 }
      ]
    },
    {
      category: 'Backend & API',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'Express.js', icon: <FaNode />, level: 85 },
        { name: 'Flask', icon: <SiFlask />, level: 88 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 85 }
      ]
    },
    {
      category: 'AI/ML & Data',
      skills: [
        { name: 'OpenCV', icon: <SiOpencv />, level: 85 },
        { name: 'NLP (NLTK)', icon: <FaPython />, level: 82 },
        { name: 'Pre-trained Models', icon: <FaPython />, level: 80 },
        { name: 'Prompt Engineering', icon: <FaPython />, level: 88 }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'Firebase', icon: <SiFirebase />, level: 80 },
        { name: 'SQL', icon: <FaDatabase />, level: 82 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 75 },
        { name: 'OCI', icon: <FaAws />, level: 78 },
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'Git/GitHub', icon: <FaGit />, level: 90 }
      ]
    }
  ]

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skills-category">
            <motion.h3 
              className="skills-category-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {category.category}
            </motion.h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (catIndex * 4 + index) * 0.1 }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-level">
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (catIndex * 4 + index) * 0.1 + 0.3 }}
                      ></motion.div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'

export default Skills