'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { AnimatedGradient } from './ui/animated-gradient';

const skillGroups = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        icon: '/icons/python.svg',
      },
      {
        name: 'JavaScript',
        icon: '/icons/javascript.svg',
      },
      {
        name: 'C/C++',
        icon: '/icons/c.svg',
      },
      {
        name: 'Java',
        icon: '/icons/java.svg',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      {
        name: 'langchain',
        icon: '/icons/langchain.svg',
      },
      {
        name: 'llamaindex',
        icon: '/icons/llamaindex.svg',
      },
      {
        name: 'scikit-learn',
        icon: '/icons/scikit-learn.svg',
      },

      {
        name: 'PyTorch',
        icon: '/icons/pytorch.svg',
      },
      {
        name: 'Pandas',
        icon: '/icons/pandas.svg',
      },
      {
        name: 'NumPy',
        icon: '/icons/numpy.svg',
      },
      {
        'name': 'OpenCV',
        'icon': '/icons/opencv.svg',
      },
    ],
  },
  {
    category: 'Cloud Services',
    skills: [
      {
        name: 'AWS',
        icon: '/icons/aws.svg',
      },
      {
        name: 'GCP',
        icon: '/icons/gcp.svg',
      },
      {
        name: 'Firebase',
        icon: '/icons/firebase.svg',
      },
      {
        name: 'Heroku',
        icon: '/icons/heroku.svg',
      },
      {
        name: 'Vercel',
        icon: '/icons/vercel.svg',
      },
    ],
  },
  {
    category: 'Database Management',
    skills: [
      {
        name: 'PostgreSQL',
        icon: '/icons/postgresql.svg',
      },
      {
        name: 'MongoDB',
        icon: '/icons/mongodb.svg',
      },
      {
        name: 'Supabase',
        icon: '/icons/supabase.svg',
      },
    ],
  },
  {
    category: 'Software Development & Version Control',
    skills: [
      {
        name: 'Git',
        icon: '/icons/git.svg',
      },
      {
        name: 'CI/CD',
        icon: '/icons/cicd.svg',
      },
      {
        name: 'Linux',
        icon: '/icons/linux.svg',
      },
    ],
  },
];
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-10 bg-[#0A0A0A]">
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
              Skills
            </h2>
          </AnimatedGradient>
        </motion.div>

        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: '#252525' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 mb-3 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={skill.icon || '/placeholder.svg'}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all"
                    />
                  </motion.div>
                  <span className="text-sm text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
