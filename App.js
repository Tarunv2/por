import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tarunthakurk2@gmail.com?subject=Message from User&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    alert("Your message has been sent! Thank you for contacting me.");
    setMessage(""); 
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <h1>HI EVERYONE</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        <div className="hero">
          <h2>Hi, I'm Tarun 👋</h2>
          <p>
            <Typical
              steps={['Frontend Developer', 2000, 'UI Designer', 2000, 'Web Developer', 2000]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/Tarun_Resume.pdf" download className="btn resume-btn">Download Resume</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/tarunv2" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </header>

      <section id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer who loves turning ideas into beautiful and functional websites. I work with HTML, CSS, JavaScript, and React. I focus on creating clean, user-friendly interfaces with responsive design.
        </p>
      </section>

      <section id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Quize App</h3>
            <p>A Quiz practice app.</p>
            <a href="https://tarunv2.github.io/quize-app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project">
            <h3>Weather App</h3>
            <p>Check weather conditions using OpenWeather API.</p>
            <a href="https://tarunv2.github.io/cloud" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project">
            <h3>Password Generator</h3>
            <p>A password generator app to generate strong passwords.</p>
            <a href="https://tarunv2.github.io/password-generator" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </section>

      <section id="testimonials" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"Tarun is incredibly talented and dependable. Highly recommended!"</p>
          <h4>- A Happy Client</h4>
        </div>
      </section>

      <section id="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit">Send Message</button>
        </form>
        <p>📞 9805337080</p>
        <p>📧 tarunthakurk2@gmail.com</p>
        <p>📍 Rohru, Himachal Pradesh ,171207</p>
      </section>

      <footer>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2025 Tarun | Made with ❤️</p>
      </footer>

      <a href="#" className="top-button">⬆️</a>
    </>
  );
}

export default App;
