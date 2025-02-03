import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Configura tus credenciales de EmailJS (crea cuenta gratis en https://www.emailjs.com/)
  
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormValues({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Error al enviar: " + (error as Error).message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  console.log('SERVICE_ID: ',SERVICE_ID)

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.title}
              </h2>
              {isSubmitted && (
                <div className="text-green-600 dark:text-green-400 mb-4">
                  {t.contact.successMessage}
                </div>
              )}
            </div>
          </AnimatedSection>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Campos del formulario (mantén tu código actual igual) */}
            {/* ... */}

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