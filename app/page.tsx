'use client';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
