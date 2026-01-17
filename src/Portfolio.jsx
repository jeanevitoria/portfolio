import { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Habilitys from './pages/Habilitys';
import { FaArrowUp } from "react-icons/fa";
import Fab from '@mui/material/Fab';

function Portfolio() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const habilitysRef = useRef(null);

  const [showFab, setShowFab] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeHeight = homeRef.current?.offsetHeight || 0;

      // Lógica do botão FAB
      if (scrollY > homeHeight - 100) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }

      // Lista de seções mapeando ID -> Ref
      const sections = [
        { id: 'Home', ref: homeRef },
        { id: 'AboutMe', ref: aboutMeRef },
        { id: 'Habilitys', ref: habilitysRef },
        { id: 'Projects', ref: projectsRef },
      ];

      const scrollPosition = scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full gap-0 bg-[#101016]">
      <Header 
        activeSection={activeSection}
        homeRef={homeRef}
        habilitysRef={habilitysRef} 
        aboutMeRef={aboutMeRef} 
        projectsRef={projectsRef} 
      />

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

      <main className="gap-0 bg-[#101016] flex flex-col">
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Habilitys ref={habilitysRef} />
        <Projects ref={projectsRef} />
      </main>
    </div>
  );
}

export default Portfolio;