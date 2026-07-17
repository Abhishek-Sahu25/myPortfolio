import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = forwardRef((props, ref) => {
  const projects = [
    { 
      title: 'Echo-Check — AI-Powered Deepfake Detection',
      description: 'Full-stack AI application detecting synthetic audio/video content using pre-trained deep learning models. Features Wav2Vec2 for audio analysis, Vision Transformer (ViT) for video analysis, spectrogram visualization, and Truth Score generation.',
      technologies: ['React', 'FastAPI', 'Python', 'OpenCV', 'Wav2Vec2', 'ViT', 'Docker', 'MongoDB'],
      github: 'https://github.com/Abhishek-Sahu25/Echo-check.git',
      isFeatured: true
    },
    { 
      title: 'Doc Hive — Cloud-Based Healthcare Platform',
      description: 'Full-stack healthcare platform with AI chatbot, Firebase authentication, automated appointment booking, and OpenStreetMap API integration for doctor discovery. Scaled to 100+ active users.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'OpenStreetMap API'],
      live: 'https://web-project-six-umber.vercel.app',
      github: 'https://github.com/Abhishek-Sahu25/doc-hive.git',
      isFeatured: true
    },
    { 
      title: 'Image Text Extraction & OCR/NLP System',
      description: 'Full-stack AI web application extracting and processing printed English text from images. Implements a complete pipeline: Image Upload → Preprocessing (OpenCV) → OCR (Tesseract) → NLP Processing (NLTK) → Result Display.',
      technologies: ['React (Vite)', 'Flask', 'OpenCV', 'Tesseract OCR', 'NLTK', 'Axios'],
      github: 'https://github.com/Abhishek-Sahu25',
      isFeatured: true
    },
    { 
      title: 'VrikshaChain — Blockchain Traceability Platform',
      description: 'Blockchain-based traceability platform to authenticate and geo-tag Ayurvedic herbs from collection to consumer. Features secure backend with JWT authentication, Web3.js, and QR-code-based batch tracking.',
      technologies: ['Node.js', 'Express.js', 'Web3.js', 'JWT', 'Blockchain', 'Smart Contracts'],
      github: 'https://github.com/Abhishek-Sahu25/VrikshaChain.git'
    },
    { 
      title: 'AHF-v1 — Post-Quantum Cryptographic Framework',
      description: 'Research proposal for a novel post-quantum hybrid cryptographic key-establishment framework addressing the "Harvest Now, Decrypt Later" threat model. Combines classical DH with Kyber/ML-KEM-inspired lattice-based cryptography.',
      technologies: ['Cryptography', 'Post-Quantum', 'Research', 'Design Proposal'],
      isResearch: true
    }
  ]

  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card ${project.isFeatured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.isResearch && (
                <div className="research-badge">Research Project</div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'

export default Projects