import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-blue-accent-light/80 backdrop-blur-md text-text-primary py-8 px-6 mt-16 shadow-inner-top border-t border-blue-accent-light"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-xl font-semibold">
            <span className="text-blue-primary">Notes</span> Resolvers
          </h3>
          <p className="text-sm text-text-secondary">
            Simplifying academic life, one note at a time.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <a href="#" className="text-blue-primary hover:text-blue-700 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-blue-primary hover:text-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-blue-primary hover:text-blue-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            &copy; {new Date().getFullYear()} Notes Resolvers. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
