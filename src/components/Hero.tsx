import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5 
          }}
          className="relative w-40 h-40 mx-auto mb-8 group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          
          {/* Border decoration */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
            <img
              src="/profile.png"
              alt="Sebastian Cardoso"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {t.hero.greeting}{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
            Sebastian Cardoso
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          {t.hero.role}
        </motion.p>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-12 p-4 rounded-full bg-blue-500/10 dark:bg-blue-400/10 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 backdrop-blur-sm transition-all duration-300 group"
      >
        <motion.div
          animate={{ 
            y: [0, 6, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </div>
  );
}