import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, ChevronRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/useMediaQuery';
import Button from '../common/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Platform Demo', path: '/platform-demo' },
    { label: 'Seven Pillars', path: '/pillars' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-40 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 z-50"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-beba-pink" />
                <div className="absolute inset-0 bg-gradient-beba rounded-full opacity-20 blur-sm" />
              </motion.div>
              <span className="font-display font-bold text-xl sm:text-2xl gradient-text">
                BEBA AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative font-medium transition-colors duration-300
                    ${isActive(link.path) 
                      ? 'text-beba-pink' 
                      : 'text-gray-700 hover:text-beba-blue'
                    }
                  `}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-beba"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
              <Button size="sm" to="/platform-demo">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 z-50"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden safe-area-padding"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Mobile Nav Links */}
                <nav className="flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`
                          flex items-center justify-between py-4 text-lg font-medium
                          border-b border-gray-100 transition-colors
                          ${isActive(link.path) 
                            ? 'text-beba-pink' 
                            : 'text-gray-700 hover:text-beba-blue'
                          }
                        `}
                      >
                        {link.label}
                        <ChevronRight size={20} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="py-6 border-t border-gray-100">
                  <Button
                    to="/platform-demo"
                    size="lg"
                    fullWidth
                  >
                    Get Started
                  </Button>
                </div>

                {/* Mobile Footer Info */}
                <div className="pb-6 text-center">
                  <p className="text-sm text-gray-500">
                    Responsible AI for Healthcare
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Innovation with Integrity
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
