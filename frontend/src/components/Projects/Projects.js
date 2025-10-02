import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal'; // Import the modal

const projectData = [
  // Your project data remains the same...
  {
    title: 'AuraSight AI',
    description: 'A full-stack web application that provides instant, AI-powered screening for Diabetic Retinopathy (DR) using retinal fundus images.',
    image: '/aurasightai.png',
    tags: ['Python', 'React', 'TensorFlow', 'FastAPI', 'Machine Learning', 'Web Applications'],
    stats: { accuracy: '80-85%', performance: '5s', impact: 'Trusted' },
    github: 'https://github.com/Vedantraval2444/AuraSight-AI-App',
    demo: 'https://aurasight-ai-app-2444.streamlit.app/',
  },
  {
    title: 'AetherChain',
    description: 'A full-stack data application designed to provide intelligent insights into a global supply chain.',
    image: '/aetherchain.png',
    tags: ['Python', 'SQLAlchemy', 'Streamlit', 'Docker', 'Neo4j Driver', 'PostgreSQL', 'Data Visualization'],
    stats: { accuracy: '99.1%', performance: '1.8s', impact: 'Data Insights' },
    github: 'https://github.com/Vedantraval2444/Aether-Chain',
  },
  {
    title: 'FraudShield',
    description: 'This project is a complete, end-to-end machine learning system built in Python to detect and explain fraudulent financial transactions in real-time.',
    image: '/fraudshield.png',
    tags: ['Microsoft Excel', 'Charts & Graphs', 'Slicers and KPI Cards', 'Conditional Formatting', 'Data Visualization'],
    stats: { accuracy: '99.8%', performance: '0.1s', impact: 'Transformative' },
    github: 'https://github.com/Vedantraval2444/FraudShield-Dashboard',
    demo: 'https://fraudshield-dashboard-2412.streamlit.app/',
  },
  {
    title: 'IT Job Data Analysis',
    description: 'This project presents a detailed data visualization and analysis of IT job roles, required skills, and salary trends using Microsoft Excel.',
    image: '/itdashboard.png',
    tags: ['Microsoft Excel', 'Charts & Graphs', 'Slicers and KPI Cards', 'Conditional Formatting', 'Data Visualization'],
    stats: { accuracy: '92.8%', performance: '3s', impact: 'Data Logs' },
    github: 'https://github.com/Vedantraval2444/IT-Job-Data-Analysis'
  },
];

const categories = ['All Projects', 'Machine Learning', 'Data Visualization', 'Web Applications'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectData.filter(project => {
    if (activeCategory === 'All Projects') return true;
    return project.tags.includes(activeCategory);
  });

  return (
    <>
      <motion.section 
        id="projects"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Digital Creations</h2>
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10, boxShadow: "0px 20px 40px var(--border-color)" }}
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          closeModal={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Projects;