import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: t.about.experience.title,
      items: [
        t.about.experience.item1,
        t.about.experience.item2,
        t.about.experience.item3
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: t.about.education.title,
      items: [
        t.about.education.item1,
        t.about.education.item2,
        t.about.education.item3
      ]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t.about.achievements.title,
      items: [
        t.about.achievements.item1,
        t.about.achievements.item2,
        t.about.achievements.item3
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.about.title}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              {t.about.description}
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {achievement.title}
              </h3>
              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}