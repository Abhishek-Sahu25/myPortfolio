import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's build something amazing together</h3>
            <p>
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started, think you need my help 
              with something, or just want to connect — feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>stabhishek7@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8696450283</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div>
                  <h4>Connect</h4>
                  <p>
                    <a href="https://github.com/Abhishek-Sahu25" target="_blank" rel="noopener noreferrer">GitHub</a> • 
                    <a href="https://www.linkedin.com/in/abhishek-sahu-84895128a/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> • 
                    <a href="https://www.codechef.com/users/abhisheksahu25" target="_blank" rel="noopener noreferrer"> CodeChef</a> • 
                    <a href="https://www.hackerrank.com/profile/stabhishek7" target="_blank" rel="noopener noreferrer"> HackerRank</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

export default Contact