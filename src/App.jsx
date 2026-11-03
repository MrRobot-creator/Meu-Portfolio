import React from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 h-0.5 bg-accent origin-left z-[60]" />
      <div className="min-h-screen bg-ground text-ink flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
