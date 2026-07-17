import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abhishek Sahu</h3>
            <p>
              Software Development Engineer | Full-Stack Developer | AI-Assisted Engineer
              <br />
              B.Tech CSE @ VIT Chennai (CGPA 8.78/10)
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://github.com/Abhishek-Sahu25" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abhishek-sahu-84895128a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.codechef.com/users/abhisheksahu25" target="_blank" rel="noopener noreferrer">CodeChef</a>
              <a href="https://www.hackerrank.com/profile/stabhishek7" target="_blank" rel="noopener noreferrer">HackerRank</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 stabhishek7@gmail.com</p>
            <p>📱 +91 8696450283</p>
            <p>📍 Chennai, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Abhishek Sahu. All rights reserved.</p>
          <p>Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer