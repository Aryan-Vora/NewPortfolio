'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedGradient } from './ui/animated-gradient';
import { Spotlight } from './ui/spotlight';

const Hero = () => {
  return (
    <Spotlight className="min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="w-full text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Hi, I'm <span className="text-blue-400">Aryan Vora</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
            Full-Stack Software Developer
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-400 mb-8">
            I’m a Computer Science graduate who loves building projects and solving problems. Currently working as a software developer at AVO.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="https://github.com/aryan-vora"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 p-3 hover:bg-opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                fill
                className="object-contain"
              />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/resume.png"
                alt="Resume"
                fill
                className="object-contain"
              />
            </motion.a>
            <motion.a
              href="https://medium.com/@AryanVora"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 p-3 hover:bg-opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/medium.png"
                alt="Medium"
                fill
                className="object-contain"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aryanvora1/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 p-3 hover:bg-opacity-20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain"
              />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Avatar section commented out
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <div className="relativew-full h-0 pb-[100%] md:pb-[75%]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse" />
            <div className="absolute inset-0">
              <Image
                src="placeholder_user.png"
                alt="Aryan Vora Avatar"
                fill
                className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </Spotlight>
  );
};

export default Hero;
