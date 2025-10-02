import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTheme } from '../contexts/ThemeContext';
import './Skills.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Define your skill domains and the skills within them
const skillData = {
  labels: ['Programming', 'Data Analysis', 'Databases', 'ML/AI', 'Web Dev', 'Visualization'],
  scores: [85, 90, 85, 80, 70, 90], // Your proficiency score (0-100) for each label
};

const interests = [
    'Data Analytics', 'Machine Learning', 'Artificial Intelligence', 'Natural Language Processing',
    'Predictive Modeling', 'Data Visualization', 'Business Intelligence (Tableau / Power BI)',
    'Full-Stack Development (React & Node.js)', 'Database Management (SQL, MongoDB, PostgreSQL)',
    'Cryptography & Security', 'Cloud Computing & Storage', 'UI/UX Design (Figma, Modern Dashboards)'
];

const Skills = () => {
  const { theme } = useTheme();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
        grid: { color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' },
        pointLabels: {
          font: { size: 14, family: "'Inter', sans-serif" },
          color: theme === 'dark' ? '#A0AEC0' : '#4A5568',
        },
        ticks: {
          backdropColor: 'transparent',
          color: theme === 'dark' ? '#A0AEC0' : '#4A5568',
          stepSize: 20,
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const chartData = {
    labels: skillData.labels,
    datasets: [
      {
        label: 'Proficiency',
        data: skillData.scores,
        backgroundColor: theme === 'dark' ? 'rgba(138, 79, 255, 0.2)' : 'rgba(107, 70, 193, 0.2)',
        borderColor: theme === 'dark' ? '#8A4FFF' : '#6B46C1',
        borderWidth: 2,
        pointBackgroundColor: theme === 'dark' ? '#8A4FFF' : '#6B46C1',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme === 'dark' ? '#8A4FFF' : '#6B46C1',
      },
    ],
  };

  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2>My Technical Universe</h2>
      <div className="skills-container">
        <div className="radar-chart-container">
          <Radar data={chartData} options={chartOptions} />
        </div>
        <div className="interests-container">
          <h3>Areas of Interest</h3>
          <div className="interest-tags">
            {interests.map((interest) => (
              <motion.span 
                className="tag" 
                key={interest}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: '#fff'}}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;