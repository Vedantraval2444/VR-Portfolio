import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/Web Development.json';
import { useTheme } from '../contexts/ThemeContext';

const LottieBackground = () => {
  const { theme } = useTheme();

  // We can make the animation change color with the theme!
  const lottieStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: theme === 'dark' ? 0.15 : 0.1, // More subtle in light mode
    filter: theme === 'dark' ? 'invert(0)' : 'invert(1)', // Invert colors for light mode
    transition: 'opacity 0.3s ease',
  };

  return (
    <Lottie 
      animationData={animationData} 
      style={lottieStyle} 
    />
  );
};

export default LottieBackground;