import { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Habilitys from './pages/Habilitys';
import { FaArrowUp } from "react-icons/fa";
import Fab from '@mui/material/Fab';

function Portfolio() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const habilitysRef = useRef(null);
  const contactRef = useRef(null);

  const [showFab, setShowFab] = useState(false);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeHeight = homeRef.current?.offsetHeight || 0;

      if (scrollY > homeHeight - 100) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full gap-0 bg-[#101016]">
      <Header habilitysRef={habilitysRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactRef={contactRef} />

      <Fab
        color="primary"
        size="small"
        aria-label="add"
        onClick={scrollToHome}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: { xs: 5, md: 30 },
          backgroundColor: '#262633',
          zIndex: 9999,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: showFab ? 1 : 0,
          transform: showFab ? 'scale(1)' : 'scale(0.8)',
          pointerEvents: showFab ? 'auto' : 'none',
        }}
      >
        <FaArrowUp />
      </Fab>

      <main className="gap-0 bg-[#101016]">
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Habilitys ref={habilitysRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}

export default Portfolio;