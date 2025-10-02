import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/contexts/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LottieBackground from './components/LottieBackground/LottieBackground'; // <-- IMPORT THE NEW COMPONENT
import './App.css'; 

function App() {
  // ... (all your existing cursor logic stays the same)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        setIsPointer(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const outlineScale = isPointer ? 1.5 : 1;
  const dotScale = isPointer ? 0 : 1;
  
  return (
    <ThemeProvider>
      <div className="App">
        <LottieBackground /> {/* <-- ADD THE NEW BACKGROUND HERE */}

        {/* --- Custom Cursor --- */}
        <div 
          className="cursor-outline" 
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`, 
            transform: `translate(-50%, -50%) scale(${outlineScale})`,
            opacity: 1
          }} 
        />
        <div 
          className="cursor-dot" 
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`,
            transform: `translate(-50%, -50%) scale(${dotScale})`,
            opacity: 1
          }} 
        />
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact /> 
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;