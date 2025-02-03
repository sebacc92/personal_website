import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Instagram, Youtube, GitBranch as BrandTiktok, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/sebacc92' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/sebacc92' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/sebastiancardoso92/' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/sebacc92' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/@sebacc92' },
    { icon: <BrandTiktok className="h-5 w-5" />, url: 'https://tiktok.com/@sebacc92' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.div variants={container} className="flex space-x-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            variants={item}
            className="text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} Sebastian Cardoso
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-500/10 dark:bg-blue-400/10 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 backdrop-blur-sm transition-all duration-300 group shadow-lg"
          >
            <motion.div
              animate={{ 
                y: [0, -6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}