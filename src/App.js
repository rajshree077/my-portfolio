import React from 'react';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Me />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
export default App;