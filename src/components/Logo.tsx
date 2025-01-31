import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center"
    >
      <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">SC</span>
      </div>
    </motion.div>
  );
}