import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const controls = useAnimation();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
      {/* Background overlay with optimized opacity */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center"
        >
          <motion.div
            className="mb-12"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/uaf-logo.png" 
              alt="UAF Logo" 
              className="h-24 md:h-32 mx-auto mb-6"
              loading="eager"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              University of Agriculture
              <span className="block text-blue-400 mt-2">Faisalabad</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transforming Lives Through Excellence in Education, Research, and Innovation Since 1961
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full w-64 sm:w-auto transition-colors duration-300"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full w-64 sm:w-auto transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Scroll down"
      >
        <ChevronDownIcon className="h-8 w-8 text-white" />
      </motion.button>
    </section>
  );
};

export default Hero;