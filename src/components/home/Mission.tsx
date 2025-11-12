import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';
import ResponsiveContainer from '../common/ResponsiveContainer';
import AnimatedSection from '../common/AnimatedSection';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology that serves humanity with compassion and understanding.',
      color: 'text-beba-pink',
      bgColor: 'bg-beba-pink/10',
    },
    {
      icon: Shield,
      title: 'Ethical Foundation',
      description: 'Transparency, fairness, and accountability in every decision.',
      color: 'text-beba-blue',
      bgColor: 'bg-beba-blue/10',
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Solutions accessible to all, regardless of language or culture.',
      color: 'text-beba-cyan',
      bgColor: 'bg-beba-cyan/10',
    },
    {
      icon: Zap,
      title: 'Innovation Impact',
      description: 'Cutting-edge AI that creates real, measurable improvements.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <ResponsiveContainer>
        {/* Mission Statement */}
        <AnimatedSection className="text-center mb-16 lg:mb-20" animation="fadeIn">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8">
            Our <span className="gradient-text">Mission</span>
          </h2>
          
          <motion.blockquote
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 italic">
              "At BEBA AI, we believe artificial intelligence must serve humanity with 
              transparency, fairness, and accountability. Our healthcare solutions combine 
              cutting-edge technology with unwavering ethical standards to improve lives, 
              empower caregivers, and transform patient outcomes."
            </p>
            <footer className="text-gray-600">
              — <span className="font-semibold gradient-text">The BEBA AI Promise</span>
            </footer>
          </motion.blockquote>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 h-1 bg-gradient-beba opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <AnimatedSection
          className="mt-16 lg:mt-20 text-center"
          animation="slideUp"
          delay={0.5}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-beba-purple to-beba-purple-light rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Technology with Purpose
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              We're not just building AI systems — we're creating the infrastructure 
              for a more equitable, accessible, and compassionate healthcare future. 
              Every line of code, every algorithm, every decision is guided by our 
              commitment to responsible innovation.
            </p>
          </div>
        </AnimatedSection>
      </ResponsiveContainer>
    </section>
  );
};

export default Mission;
