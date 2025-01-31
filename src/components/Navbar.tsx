import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Languages, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import type { Language } from '../types';
import Logo from './Logo';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const menuItems = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
    { href: '#uses', label: t.nav.uses }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline relative">
                <div 
                  className={`absolute h-full bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 ease-out ${
                    hoveredItem === null ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    transform: `translateX(${hoveredItem !== null ? hoveredItem * 100 : 0}px)`,
                    width: '100px',
                    top: '0',
                    left: '0'
                  }}
                />
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative w-[100px] text-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 z-10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-1 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Languages className="h-5 w-5" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('es');
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Español
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}