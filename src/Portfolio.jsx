import { useRef, useState } from 'react';
import Home from './pages/Home'
import Header from './components/Header'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Habilitys from './pages/Habilitys';
import { FaArrowUp } from "react-icons/fa";
import Fab from '@mui/material/Fab';

function Portfolio() {
  const homeRef = useRef(null)
  const aboutMeRef = useRef(null)
  const projectsRef = useRef(null)
  const habilitysRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="w-full gap-0 bg-[#101016]">
      <Header homeRef={homeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Fab
        color="primary"
        aria-label="add"
        className="fixed bottom-4 right-4 z-50"
      >
        <FaArrowUp />
      </Fab>
      <main className='gap-0 bg-[#101016]'>
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Habilitys ref={habilitysRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>

  )
}

export default Portfolio
