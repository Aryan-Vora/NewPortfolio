'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import { AnimatedGradient } from './ui/animated-gradient';

const projects = [
  {
    title: 'AI-Powered Receipt Scanner',
    description:
      'During my internship at Squeezee, developed a cross-platform receipt-scanning application using React for the frontend and Firebase for the backend, ensuring seamless functionality across devices. Integrated OCRSpace for text extraction from scanned receipts and parsed and validated OCR results using a Large Language Model (LLM), converting unstructured text into structured, accurate data for storage and future analysis.',
    image: '/project_pictures/receipt-scanner.png',
    link: 'https://github.com/Aryan-Vora/SqueezeeReceiptScanner',
    technologies: [
      'JavaScript',
      'React',
      'Firebase',
      'GCP',
      'OCRSpace',
      'OpenAI',
    ],
  },
  {
    title: 'Hand Tracking and Gesture Detection with AR Smart Glasses',
    description:
      "Collaborated with The Digital Camera and Computer Vision Lab at NTU on a real-time hand tracking and gesture recognition system for AR smart glasses, integrating Time-of-Flight (ToF) sensors with Mediapipe for precise 3D hand reconstruction and interactive capabilities. Through optimization efforts, the system's ability to simultaneously process ToF depth data and hand landmark tracking was significantly enhanced, resulting in a 60% FPS improvement from 15 to 24 FPS. Additionally, developed visualization tools for hand tracking and depth data monitoring, which streamlined debugging processes and enabled further system performance optimizations.",
    image: '/project_pictures/handtracking.png',
    link: 'https://github.com/Aryan-Vora/handTrackingArvora/tree/main',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'],
  },
  {
    title: 'Pokernow Analytics Extension',
    description:
      'Developed a browser extension that enhances the PokerNow online poker platform by providing real-time analytics and game insights. Implemented features such as tracking player statistics, win rates, and betting patterns to help users make data-driven decisions. Built using JavaScript to ensure seamless integration with the PokerNow interface.',
    image: '/project_pictures/pokernow.png',
    link: 'https://github.com/Aryan-Vora/PokerNow-Analytics-Extension',
    technologies: ['JavaScript'],
  },
  {
    title: 'BiteRight',
    description:
      'Led and worked on the frontend development of a recipe discovery and management platform designed to provide personalized meal recommendations. Managed the project using Agile and Scrum methodologies and designed the UI/UX in Figma. Built core pages in Next.js, including user authentication, recipe search, filtering, landing, custom recipe pages, and ratings. Integrated dynamic features such as personalized recommendations, custom recipe creation, and a structured review system to enhance user experience. Used Supabase for storage and Deno for server-side logic',
    image: '/project_pictures/biteright.png',
    link: 'https://biteright.co/',
    technologies: ['Next.js', 'Deno', 'Supabase', 'ClerkJS'],
  },
  {
    title: 'Platformer Game',
    description:
      'Created a 2D platformer game using Processing.java, featuring multiple levels, custom physics, character movement, and level design. Developed interactive game mechanics, including obstacle avoidance, jumping, and collectible items. Added background music and sound effects to enhance immersion. Designed challenging gameplay with increasing difficulty to keep players engaged. Focused on smooth performance and responsive controls for an enjoyable player experience.',
    image: '/project_pictures/platformer.png',
    link: 'https://github.com/Aryan-Vora/Platformer',
    technologies: ['Processing.java'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-10 bg-[#0A0A0A]">
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
              Projects
            </h2>
          </AnimatedGradient>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <div
                className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: '#60A5FA' }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
                  whileHover={{ color: '#9CA3AF' }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: '#3B82F6',
                        color: '#FFFFFF',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
