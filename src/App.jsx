import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    // Add smooth scroll to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App bg-dark-200 min-h-screen relative">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
