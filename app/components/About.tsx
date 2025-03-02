'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedGradient } from './ui/animated-gradient';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-10 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              About Me
            </h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            'I’m Aryan Vora, a Computer Science student at UC Santa Cruz, graduating early in June 2025. I love full-stack development and I’m looking for software engineering roles or internships that let me work on interesting projects. I enjoy breaking down complex problems and building creative solutions.',
            'I have experience working on multiple projects and am always excited to learn and experiment with new technologies. I’m currently looking for summer internships or job opportunities where I can develop my technical skills and tackle meaningful challenges.',
            'When I’m not coding, you can find me at the gym, playing sports (mainly pickleball and volleyball), or gaming. I love staying active and am always open to trying something new. I look forward to connecting with others who share a passion for building cool things and making an impact!',
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-300 mb-6"
              whileHover={{ scale: 1.05, color: '#60A5FA' }}
              transition={{ duration: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
