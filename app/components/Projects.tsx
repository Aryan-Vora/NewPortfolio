'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Share2, Video } from 'lucide-react';

import { AnimatedGradient } from './ui/animated-gradient';

const projects = [


  {
    title: 'StockSentiment',
    description:
      'I kept hearing the wild stock calls on WallStreetBets and wanted to see if they were actually giving good advice. I built an app where a user enters a ticker, and the system pulls Reddit posts related to that stock, analyzes their sentiment with VADER, and compares the mood to real price movements using yFinance. The dashboard shows how the sentiment lines up with the actual chart which suprisingly revealed that the community is so reliably wrong that doing the opposite might be profitable. The backend is now on Render, so if you decide to test it out the first request takes about a minute to spin up, but everything after that should be quick.',
    code: 'https://github.com/Aryan-Vora/StockSentiment',
    link: 'https://stock-sentiment-eosin.vercel.app/',
    image: '/project_pictures/stocksentiment.png',
    technologies: ['TypeScript', 'Next.js', 'AWS', 'FastAPI', 'VADER'],
  },
  {
    title: 'Hand Tracking and Gesture Detection with AR Smart Glasses',
    description:
      "I worked with the Digital Camera and Computer Vision Lab at NTU on a real-time hand-tracking and gesture-recognition system for AR smart glasses. The project combined Time-of-Flight depth sensors with MediaPipe to build accurate 3D hand reconstructions that could support interactive controls. I focused on optimizing the pipeline so it could process both ToF depth data and hand-landmark tracking at the same time, which raised performance from 15 FPS to 24 FPS (a 60% improvement). I also built visualization tools for hand tracking and depth data, which made debugging faster and helped guide further optimizations.",
    image: '/project_pictures/handtracking.png',
    code: 'https://github.com/Aryan-Vora/handTrackingArvora/tree/main',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'NumPy'],
  },
  {
    title: 'BrowserLogger',
    description:
      'I got curious about how much a website can learn about someone without asking for anything, so I built a page that shows it all in real time. It displays every small action such as mouse position, clicks, scroll depth, keystrokes, text selections, focus changes, time on the page, and resize events, along with device and browser details like the operating system, screen size, viewport, and language settings. It also reveals network-level data such as the public IP address, rough location, coordinates, ISP, organization, referrer, current URL, timezone, local time, battery status, and cookie support. All of it comes from basic JavaScript and public APIs that run the moment the page loads.',
    image: '/project_pictures/browserlogger.png',
    link: 'https://aryan-vora.github.io/browserlogger/',
    code: 'https://github.com/Aryan-Vora/browserlogger',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'CinemaBlend',
    description:
      'I’ve always found it tricky to pick a movie or show with a friend that we’ll both actually enjoy. Letterboxd lets people track and rate what they’ve watched, so I scraped that data and built an algorithm that looks at genres, actors, directors, IMDb ratings, release dates, and plot descriptions. Now, two people can just enter their Letterboxd usernames and get a list of movies and shows they’ll both like and also haven’t seen yet.',
    code: 'https://github.com/Aryan-Vora/letterboxblend',
    link: 'https://cinemablend.vercel.app/',
    image: '/project_pictures/cinemablend.png',
    technologies: ['TypeScript', 'Next.js', 'OMDB API', 'FastAPI', 'Python'],
  },

  // {
  //   title: 'SoulSync',
  //   description:
  //     'A personality-driven music discovery platform that matches users with songs based on their unique traits and characteristics. Features an intelligent quiz system with over 50 personality questions, where users answer 12 dynamically selected questions that adapt based on previous responses.',
  //   code: 'https://github.com/Aryan-Vora/SoulSync',
  //   link: 'https://soulsyncmusic.vercel.app/',
  //   image: '/project_pictures/soulsync.png',
  //   technologies: ['TypeScript', 'Next.js', 'Spotify API', 'OpenAI'],
  // },
  {
    title: 'Github Vulnerability Scanner',
    description:
      'My team and I built a web app during a hackathon that scans public GitHub repositories for vulnerabilities in code, dependencies, and executables. It uses the GitHub API to fetch repository data and Gemini-2.0 Flash to analyze potential security issues. After the hackathon, I expanded the project to improve performance by making it faster, reducing token usage, and enhancing results through a reduction in excessive context, while also improving the UI and overall user experience.',
    image: '/project_pictures/github_scanner.png',
    code: 'https://github.com/Jeeevii/SecureAI',
    demo: 'https://www.youtube.com/watch?v=f1LCjcX3dho',
    technologies: [
      'Python',
      'React',
      'FastAPI',
      'Next.js',
      'Tailwind CSS',
      'Gemini',
    ],
  },
  {
    title: 'Pokernow Analytics Extension',
    description:
      'In my first year of college, I played a lot of online poker with friends on, but I was new and usually lost. That inspired me to build a browser extension specifically for the site we played on that could give me real-time help during the game. It analyzes the table, shows the odds of my possible hands, and calculates the chance that other players hold something stronger. I published it on the Chrome Web Store, and it now has several hundred active users.',
    image: '/project_pictures/pokernow.png',
    code: 'https://github.com/Aryan-Vora/PokerNow-Analytics-Extension',
    link: 'https://chromewebstore.google.com/detail/pokernow-assistant/kbaibgafcamlpfbhklaigpgemgoifdfe?pli=1',
    technologies: ['JavaScript'],
  },
  {
    title: 'Platformer Game',
    description:
      'Created a 2D platformer game using Processing.java, featuring multiple levels, custom physics, character movement, and level design. Developed interactive game mechanics, including obstacle avoidance, jumping, and collectible items. Added background music and sound effects to enhance immersion. Designed challenging gameplay with increasing difficulty to keep players engaged. Focused on smooth performance and responsive controls for an enjoyable player experience.',
    image: '/project_pictures/platformer.png',
    code: 'https://github.com/Aryan-Vora/Platformer',
    demo: 'https://www.youtube.com/watch?v=NyL2scv_29g',
    technologies: ['Processing.java'],
  },
  //  {
  //   title: 'AI-Powered Receipt Scanner',
  //   description:
  //     'During my internship at Squeezee, developed a cross-platform receipt-scanning application using React for the frontend and Firebase for the backend, ensuring seamless functionality across devices. Integrated OCRSpace for text extraction from scanned receipts and parsed and validated OCR results using a Large Language Model (LLM), converting unstructured text into structured, accurate data for storage and future analysis.',
  //   image: '/project_pictures/receipt-scanner.png',
  //   code: 'https://github.com/Aryan-Vora/SqueezeeReceiptScanner',
  //   technologies: [
  //     'JavaScript',
  //     'React',
  //     'Firebase',
  //     'GCP',
  //     'OCRSpace',
  //     'OpenAI',
  //   ],
  // },
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
                <div className="flex gap-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Live Site
                    </motion.a>
                  )}
                  {project.code && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      View Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
