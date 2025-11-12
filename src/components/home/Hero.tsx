import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import ResponsiveContainer from '../common/ResponsiveContainer';
import { useIsMobile } from '../../hooks/useMediaQuery';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-purple">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-beba-cyan/30 rounded-full"
            initial={{
              x: Math.random() * (isMobile ? window.innerWidth : 1920),
              y: Math.random() * (isMobile ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (isMobile ? window.innerWidth : 1920),
              y: Math.random() * (isMobile ? window.innerHeight : 1080),
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <ResponsiveContainer className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-white"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <Sparkles className="w-4 h-4 text-beba-cyan" />
              <span className="text-sm font-medium text-beba-cyan">
                Pioneering Ethical AI for Healthcare
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
            >
              Responsible AI for{' '}
              <span className="gradient-text bg-gradient-to-r from-beba-pink to-beba-cyan">
                Healthcare
              </span>
              .{' '}
              <span className="block mt-2">
                Innovation with{' '}
                <span className="gradient-text bg-gradient-to-r from-beba-cyan to-white">
                  Integrity
                </span>
                .
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-gray-200 leading-relaxed"
            >
              BEBA AI pioneers ethical artificial intelligence solutions that transform 
              healthcare delivery while upholding the highest standards of governance, 
              transparency, and human-centered design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                to="/platform-demo"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                View Platform Demo
              </Button>
              <Button
                to="/pillars"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-beba-purple"
              >
                Explore Our Pillars
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-wrap gap-6 text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>NHS Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>MHRA Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>ISO 27001</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-[500px] xl:h-[600px]">
              {/* Animated Brain Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-80 h-80 xl:w-96 xl:h-96"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Outer Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-beba rounded-full blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Inner Circle */}
                  <div className="absolute inset-8 bg-gradient-to-br from-beba-pink/20 to-beba-blue/20 rounded-full backdrop-blur-md border border-white/20" />
                  
                  {/* Brain Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-32 h-32 xl:w-40 xl:h-40 text-white/80" />
                  </div>
                  
                  {/* Orbital Elements */}
                  {[0, 60, 120, 180, 240, 300].map((rotation) => (
                    <motion.div
                      key={rotation}
                      className="absolute inset-0"
                      animate={{
                        rotate: [rotation, rotation + 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-beba-cyan rounded-full" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Circuit Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 500"
                fill="none"
              >
                <motion.path
                  d="M200 50 Q 100 150 150 250 T 200 450"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M200 50 Q 300 150 250 250 T 200 450"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF1B8D" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0D7FDC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF1B8D" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Hero;
