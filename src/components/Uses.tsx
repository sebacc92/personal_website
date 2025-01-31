import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Monitor, Code2, AppWindow, Cpu, Database, Code, Wrench, Globe, Server } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  description: string;
  link?: string;
}

interface Category {
  icon: JSX.Element;
  title: string;
  emoji: string;
  tools: Tool[];
}

export default function Uses() {
  const { language } = useLanguage();
  const t = translations[language];

  const categories: Category[] = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t.uses.categories.workstation,
      emoji: '💻',
      tools: [
        {
          name: 'AMD Ryzen 7 4700U',
          description: '2.0 GHz with Radeon Graphics',
        },
        {
          name: 'RAM',
          description: '24 GB',
        },
        {
          name: 'Operating System',
          description: 'Linux Mint 22.1 / Windows 11 Home (64-bit)',
        },
        {
          name: 'Logitech MX Anywhere 3S',
          description: 'Wireless Mouse - Graphite Gray',
          link: 'https://www.logitech.com/en-us/products/mice/mx-anywhere-3s.html'
        }
      ]
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t.uses.categories.coding,
      emoji: '🛠️',
      tools: [
        {
          name: 'VS Code',
          description: 'My main code editor with custom theme and extensions',
          link: 'https://code.visualstudio.com/'
        },
        {
          name: 'Cursor',
          description: 'AI-first code editor',
          link: 'https://cursor.sh/'
        },
        {
          name: 'Warp',
          description: 'Modern terminal with AI capabilities',
          link: 'https://www.warp.dev/'
        }
      ]
    },
    {
      icon: <AppWindow className="w-6 h-6" />,
      title: t.uses.categories.apps,
      emoji: '📱',
      tools: [
        {
          name: 'Notion',
          description: 'All-in-one workspace for notes and project management',
          link: 'https://www.notion.so/'
        },
        {
          name: 'CapCut',
          description: 'Video editing software',
          link: 'https://www.capcut.com/'
        },
        {
          name: 'YouTube',
          description: 'Content creation and learning platform',
          link: 'https://www.youtube.com/'
        }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t.uses.categories.frontend,
      emoji: '🎨',
      tools: [
        {
          name: 'Qwik & React',
          description: 'Building high-performance user interfaces with instant load times'
        },
        {
          name: 'TypeScript',
          description: 'Type-safe development for better code quality and DX'
        },
        {
          name: 'Tailwind CSS',
          description: 'Rapid UI development with utility-first CSS'
        }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t.uses.categories.backend,
      emoji: '⚡',
      tools: [
        {
          name: 'Node.js & Express',
          description: 'Server-side JavaScript for scalable applications'
        },
        {
          name: 'Python & FastAPI',
          description: 'High-performance API development'
        },
        {
          name: 'PostgreSQL',
          description: 'Reliable and powerful database solution'
        }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t.uses.categories.devops,
      emoji: '🔧',
      tools: [
        {
          name: 'Docker',
          description: 'Containerization for consistent deployments'
        },
        {
          name: 'GitHub Actions',
          description: 'Automated CI/CD pipelines'
        },
        {
          name: 'Netlify & Railway',
          description: 'Modern platforms for web deployment and hosting'
        }
      ]
    }
  ];

  return (
    <section id="uses" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.uses.title}
              <span className="ml-2">✨</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              {t.uses.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {category.title}
                  <span className="text-2xl">{category.emoji}</span>
                </h3>
              </div>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    whileHover={{ x: 10 }}
                    className="group"
                  >
                    {tool.link ? (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </a>
                    ) : (
                      <>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}