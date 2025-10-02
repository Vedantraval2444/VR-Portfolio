import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <button className="modal-close-button" onClick={closeModal}>
            <FaTimes />
          </button>
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-text-content">
            <h2>{project.title}</h2>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span className="modal-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            
            <h4>Key Features & Methodology</h4>
            <ul>
              <li>Developed a predictive model with {project.stats.accuracy} accuracy.</li>
              <li>Engineered a real-time processing pipeline with {project.stats.performance} performance.</li>
              <li>Leveraged technologies like TensorFlow and FastAPI for deployment.</li>
              <li>This project demonstrates expertise in end-to-end machine learning project lifecycle.</li>
            </ul>

            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;