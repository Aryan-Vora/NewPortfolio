'use client';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useEffect, useRef, RefObject } from 'react';

interface HomeProps {
  index: number;
  selected: number;
}

export default function Home(props: HomeProps) {
  const childDiv: RefObject<HTMLDivElement> = useRef(null);

  const handleScroll = () => {
    const { index, selected } = props;
    if (index === selected) {
      setTimeout(() => {
        if (childDiv.current) {
          childDiv.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [props.index, props.selected]);

  return (
    <>
      <div ref={childDiv}>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
