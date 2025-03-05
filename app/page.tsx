'use client';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollToTop>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </ScrollToTop>
    </>
  );
}
