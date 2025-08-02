import { useRef, useState } from 'react';
import Home from './pages/home'
import Header from './components/Header'
import AboutMe from './pages/AboutMe';

function Portfolio() {
  const homeRef = useRef(null)
  const aboutMeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="w-full">
      <Header homeRef={homeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <main>
        <Home ref={homeRef}/>
        <AboutMe ref={aboutMeRef}/>
        <section className="min-h-screen bg-red-100 flex items-center justify-center">
          <h1 className="text-4xl">Seção 3</h1>
        </section>
      </main>
    </div>

  )
}

export default Portfolio
