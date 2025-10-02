import React from 'react';
import './Navbar.css';
import { useTheme } from '../contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-logo">
        <a href="#">
          <BsCodeSlash className="logo-icon" /> Vedant Raval
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="https://github.com/Vedantraval2444" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ravalvedant24/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
          Resume
        </a>
      </div>
    </motion.nav>
  );
};


export default Navbar;
