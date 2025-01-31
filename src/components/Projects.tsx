import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Geounity',
    description: {
      en: 'A full-stack platform to connect and grow communities with Qwik, FastAPI, PostgreSQL',
      es: 'Una plataforma full-stack para conectar y hacer crecer comunidades con Qwik, FastAPI, PostgreSQL'
    },
    image: '/geounity.png',
    technologies: ['Qwik', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://geounity.org/',
    github: 'https://github.com/pactgeo'
  },
  {
    id: 2,
    title: 'Reversi Game',
    description: {
      en: 'Classic 8x8 game with a smooth and responsive interface. 🎮',
      es: 'Juego clásico 8x8 con una interfaz suave y responsiva. 🎮'
    },
    image: '/reversi.png',
    technologies: ['React', 'TypeScript', 'CSS', 'Game Logic'],
    link: 'https://reversi-game.sebastiancardoso92.vercel.app/',
    github: 'https://github.com/sebaveg/Reversi-game'
  }
];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.projects.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t.projects.viewProject}</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t.projects.viewCode}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}