import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-column about-me">
          <h3><BsCodeSlash /> Vedant Raval</h3>
          <p>Data Science Student passionate about transforming complex data into actionable insights and analysis.</p>
        </div>
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/resume.pdf" target="_blank">Resume</a></li>
          </ul>
        </div>
        <div className="footer-column get-in-touch">
          <h3>Get In Touch</h3>
          <p>Surat, Gujarat, India</p>
          <p>ravalvedant2444@gmail.com</p>
          <div className="social-links">
            <a href="https://github.com/Vedantraval2444" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ravalvedant24" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:ravalvedant2444@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Vedant Raval. Designed & Built with me 🥂.</p>
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};


export default Footer;

