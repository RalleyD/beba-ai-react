import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-beba-purple">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Brain Logo */}
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-beba"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-beba-purple flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-beba opacity-80" />
          </motion.div>
        </div>
        
        {/* Loading Text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-white text-xl font-display mb-2">BEBA AI</h2>
          <div className="flex space-x-1 justify-center">
            {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, index) => (
              <motion.span
                key={index}
                className="text-beba-cyan text-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
