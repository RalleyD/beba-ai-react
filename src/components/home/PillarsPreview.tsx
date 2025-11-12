import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Scale, 
  Eye, 
  ShieldCheck, 
  Award, 
  Globe,
  ArrowRight 
} from 'lucide-react';
import Button from '../common/Button';
import ResponsiveContainer from '../common/ResponsiveContainer';
import AnimatedSection from '../common/AnimatedSection';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { Pillar } from '../../types';

const PillarsPreview: React.FC = () => {
  const isMobile = useIsMobile();

  const pillars: Pillar[] = [
    {
      id: 1,
      name: 'Clarity',
      subtitle: 'Governance & Accountability',
      icon: 'Shield',
      description: 'Transparent decision-making and clear accountability structures.',
      color: 'from-purple-500 to-purple-600',
      visual: 'circuit-governance',
    },
    {
      id: 2,
      name: 'Purity',
      subtitle: 'Data Ethics & Privacy',
      icon: 'Lock',
      description: 'Protecting personal data with the highest ethical standards.',
      color: 'from-blue-500 to-blue-600',
      visual: 'encrypted-flow',
    },
    {
      id: 3,
      name: 'Fairness',
      subtitle: 'Bias Detection & Inclusion',
      icon: 'Scale',
      description: 'Ensuring equitable outcomes for all communities.',
      color: 'from-green-500 to-green-600',
      visual: 'equal-paths',
    },
    {
      id: 4,
      name: 'Transparency',
      subtitle: 'Explainability & Documentation',
      icon: 'Eye',
      description: 'Making AI decisions understandable and auditable.',
      color: 'from-cyan-500 to-cyan-600',
      visual: 'clear-process',
    },
    {
      id: 5,
      name: 'Resilience',
      subtitle: 'Security & Robustness',
      icon: 'ShieldCheck',
      description: 'Building systems that withstand challenges and threats.',
      color: 'from-orange-500 to-orange-600',
      visual: 'fortress',
    },
    {
      id: 6,
      name: 'Integrity',
      subtitle: 'Compliance & Standards',
      icon: 'Award',
      description: 'Exceeding regulatory requirements and industry standards.',
      color: 'from-pink-500 to-pink-600',
      visual: 'certification',
    },
    {
      id: 7,
      name: 'Impact',
      subtitle: 'Human, Social & Environmental',
      icon: 'Globe',
      description: 'Creating positive change for people and planet.',
      color: 'from-indigo-500 to-indigo-600',
      visual: 'growth',
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Shield,
      Lock,
      Scale,
      Eye,
      ShieldCheck,
      Award,
      Globe,
    };
    return icons[iconName] || Shield;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <ResponsiveContainer>
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16" animation="fadeIn">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            The Seven Pillars of{' '}
            <span className="gradient-text">Ethical AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ethics is our architecture — each pillar strengthens the whole, 
            creating an unshakeable foundation for AI that serves humanity.
          </p>
        </AnimatedSection>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = getIcon(pillar.icon);
            
            return (
              <motion.div
                key={pillar.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-white rounded-xl border-2 border-gray-200 p-6 cursor-pointer
                            transition-all duration-300 hover:border-beba-pink hover:shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  {/* Pillar Number */}
                  <div className="absolute top-4 right-4 text-4xl font-display font-bold text-gray-100">
                    {pillar.id}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${pillar.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-1 text-gray-800">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-gray-600">
                    {pillar.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center text-beba-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Explore All CTA Card (8th position) */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: isMobile ? 0 : 0.7 }}
          >
            <motion.div
              className="h-full bg-gradient-beba rounded-xl p-6 cursor-pointer
                        flex flex-col items-center justify-center text-white
                        transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-display font-bold mb-2 text-center">
                Explore All Pillars
              </h3>
              <p className="text-sm text-white/90 text-center mb-4">
                Discover how we apply these principles in every product
              </p>
              <Button
                to="/pillars"
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-beba-purple"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <AnimatedSection
          className="text-center mt-12 lg:mt-16 p-8 bg-gray-50 rounded-2xl"
          animation="fadeIn"
          delay={0.8}
        >
          <p className="text-lg text-gray-700 font-medium mb-2">
            "Together these pillars uphold a single principle:
          </p>
          <p className="text-2xl font-display font-bold gradient-text">
            Responsible AI is not an option — it is our identity."
          </p>
        </AnimatedSection>
      </ResponsiveContainer>
    </section>
  );
};

export default PillarsPreview;
