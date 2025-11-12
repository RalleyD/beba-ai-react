import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Mail, Linkedin, Twitter, ChevronUp } from 'lucide-react';
import ResponsiveContainer from '../common/ResponsiveContainer';

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Seven Pillars', path: '/pillars' },
      { label: 'Contact', path: '#contact' },
    ],
    products: [
      { label: 'CLARITY Platform', path: '/products' },
      { label: 'Platform Demo', path: '/platform-demo' },
      { label: 'AI Governance', path: '/products#governance' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '#privacy' },
      { label: 'Terms of Service', path: '#terms' },
      { label: 'Cookie Policy', path: '#cookies' },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-beba-purple text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <ResponsiveContainer className="relative py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-beba-pink" />
              <span className="font-display font-bold text-2xl">BEBA AI</span>
            </Link>
            <p className="text-gray-300 text-sm lg:text-base">
              Intelligence · Innovation · Integrity
            </p>
            <p className="text-gray-400 text-sm">
              Responsible AI is not an option — it is our identity.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4 text-beba-cyan">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4 text-beba-cyan">
              Products & Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display font-semibold text-lg mb-4 text-beba-cyan">
              Connect
            </h3>
            
            {/* Email */}
            <a
              href="mailto:info@beba-ai.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-4"
            >
              <Mail size={18} />
              <span className="text-sm lg:text-base">info@beba-ai.com</span>
            </a>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="#linkedin"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#twitter"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              © 2025 BEBA AI. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </ResponsiveContainer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-gradient-beba rounded-full text-white shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
