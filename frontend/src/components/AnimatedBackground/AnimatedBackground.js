import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // loads a lightweight engine
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };
  
  // useMemo is used here to prevent re-creating the options object on every render
  const options = useMemo(
    () => ({
      background: {
        color: { value: 'transparent' },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 5,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
        },
        links: {
          enable: false,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [theme], // This dependency array ensures options are recalculated when the theme changes
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
    );
  }

  return <></>;
};

export default AnimatedBackground;