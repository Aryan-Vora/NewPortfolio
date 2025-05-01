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
            'I’m Aryan Vora, a Computer Science student at UC Santa Cruz, graduating early in June 2025. I love full-stack development and enjoy turning ideas into real projects. I’m always working on side projects and try to build out every new idea I have. Coding is something I genuinely enjoy, especially watching my ideas come to life.',
            'I like breaking down complex problems and finding creative solutions. I’ve worked on many projects using different technologies and I’m always eager to learn more. Right now, I’m looking for entry-level roles where I can grow my skills and contribute to meaningful work.',
            'Outside of coding, I enjoy staying active. I spend time at the gym, play pickleball and volleyball, and like to game in my free time. I’m always open to trying new things and connecting with others who enjoy building and creating',
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
