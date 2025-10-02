import React from 'react';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >Vedant Raval</motion.h1>
        
        <motion.h2 
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typewriter
            words={['Data Science Student', 'Machine Learning Enthusiast', 'Full-Stack Developer', 'Problem Solver']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p 
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about transforming complex data into actionable insights. Specializing in machine learning, statistical analysis, and data visualization to solve real-world problems through the power of data.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">Explore My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;