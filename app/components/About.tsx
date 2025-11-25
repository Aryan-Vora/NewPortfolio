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
            "I love building whatever ideas come to mind and enjoy turning them into real projects. I'm always working on side projects and try to build out every new idea I have. Coding is something I genuinely enjoy, and I especially love seeing my ideas come to life.",
            "Problem-solving and finding creative solutions to complex challenges is where I thrive. With experience across different technologies, I'm eager to keep learning and contribute to meaningful work.",
          ]
            .map((paragraph, index) => (
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
