import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Formulario estático oculto para detección de Netlify
  const hiddenForm = (
    <form 
      name="contact" 
      data-netlify="true" 
      hidden
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form>
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const urlEncodedFormData = new URLSearchParams();
    urlEncodedFormData.append('form-name', 'contact');
    urlEncodedFormData.append('name', formData.name);
    urlEncodedFormData.append('email', formData.email);
    urlEncodedFormData.append('message', formData.message);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedFormData.toString(),
      });
      window.location.href = "/gracias"; // Redirección manual
    } catch (error) {
      alert('Error al enviar el formulario');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {hiddenForm} {/* Formulario oculto para Netlify */}
          
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.title}
              </h2>
            </div>
          </AnimatedSection>

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Campos del formulario... (mantén tus motion.div actuales) */}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center space-x-2 btn btn-primary"
            >
              <Send className="h-4 w-4" />
              <span>{t.contact.send}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}