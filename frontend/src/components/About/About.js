import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m an enthusiastic data science student with a strong academic foundation and practical industry experience, driven by a passion for uncovering meaningful insights from complex datasets.
          </p>
          <p className="highlight-text">
            To me, data science goes beyond algorithms and models—it’s about telling stories with data, understanding people, and building solutions that create real-world impact.
          </p>
        </div>
        <div className="key-achievements">
          <motion.div 
            className="achievement-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(138, 79, 255, 0.2)"}}
          >
            <h4>B.Sc Computer Science</h4>
            <p>Specializing in Data Science at Karnavati University</p>
            <p>CGPA: 7.61/9.0 - Expected Graduation: May 2026</p>
          </motion.div>
          <motion.div 
            className="achievement-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 229, 255, 0.2)"}}
          >
            <h4>Work Experience</h4>
            <p>Data Analytics</p>
            <p>Gain Hands-on Experience with Skillfied Mentor Kickstart My Career with a Real-World Data Analytics Internship!</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;