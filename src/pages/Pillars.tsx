import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Scale, BookOpen, Castle, Award, Heart, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/common/AnimatedSection';
import { useIsMobile } from '../hooks/useMediaQuery';

interface Pillar {
  id: number;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const Pillars: React.FC = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const pillars: Pillar[] = [
    {
      id: 1,
      name: 'Clarity',
      subtitle: 'Governance & Accountability',
      icon: <Shield className="w-8 h-8" />,
      description: 'Clarity ensures transparent leadership structures, defined roles, and accountability frameworks for AI systems.',
      details: [
        'Structured organizational governance',
        'Clear ownership and responsibility chains',
        'Decision-making transparency',
        'Regular audit and review processes',
        'Stakeholder accountability mechanisms'
      ]
    },
    {
      id: 2,
      name: 'Purity',
      subtitle: 'Data Ethics & Privacy',
      icon: <Lock className="w-8 h-8" />,
      description: 'Purity upholds the highest standards of data protection, privacy, and ethical data handling throughout the AI lifecycle.',
      details: [
        'GDPR and data protection compliance',
        'Privacy-by-design architecture',
        'Secure data storage and transmission',
        'Ethical data sourcing and consent',
        'Right to deletion and data portability'
      ]
    },
    {
      id: 3,
      name: 'Fairness',
      subtitle: 'Bias Detection & Inclusion',
      icon: <Scale className="w-8 h-8" />,
      description: 'Fairness ensures AI systems are free from discriminatory biases and serve all users equitably.',
      details: [
        'Continuous bias monitoring and testing',
        'Diverse training data representation',
        'Inclusive design principles',
        'Equity in outcomes across demographics',
        'Regular fairness audits and corrections'
      ]
    },
    {
      id: 4,
      name: 'Transparency',
      subtitle: 'Explainability & Documentation',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Transparency provides clear explanations of how AI systems work and make decisions.',
      details: [
        'Explainable AI (XAI) implementation',
        'Comprehensive system documentation',
        'User-friendly decision explanations',
        'Open communication about limitations',
        'Accessible technical and user documentation'
      ]
    },
    {
      id: 5,
      name: 'Resilience',
      subtitle: 'Security & Robustness',
      icon: <Castle className="w-8 h-8" />,
      description: 'Resilience ensures AI systems are secure, reliable, and robust against threats and failures.',
      details: [
        'Cybersecurity best practices',
        'System redundancy and failsafes',
        'Adversarial attack protection',
        'Regular security assessments',
        'Disaster recovery and business continuity'
      ]
    },
    {
      id: 6,
      name: 'Integrity',
      subtitle: 'Compliance & Standards',
      icon: <Award className="w-8 h-8" />,
      description: 'Integrity maintains adherence to industry standards, regulations, and ethical guidelines.',
      details: [
        'ISO/IEC AI standards compliance',
        'Healthcare regulatory adherence (MHRA, NICE)',
        'International ethical guidelines',
        'Certification and accreditation',
        'Continuous compliance monitoring'
      ]
    },
    {
      id: 7,
      name: 'Impact',
      subtitle: 'Human, Social & Environmental Outcomes',
      icon: <Heart className="w-8 h-8" />,
      description: 'Impact ensures AI systems create positive outcomes for people, society, and the environment.',
      details: [
        'Human-centered design approach',
        'Social benefit measurement',
        'Environmental sustainability',
        'Healthcare outcome improvements',
        'Community impact assessment'
      ]
    }
  ];

  const togglePillar = (id: number) => {
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-purple relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                The Seven Pillars of{' '}
                <span className="text-beba-cyan">Ethical AI</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ethics is our architecture — each pillar strengthens the whole
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Seven Pillars represent BEBA AI's commitment to responsible innovation. 
                They guide every decision, every line of code, and every product we create. 
                Together, they form an unshakeable foundation for AI that serves humanity.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars Grid/List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-2'}`}>
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`
                    bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                    transition-all duration-300 hover:shadow-2xl
                    ${expandedPillar === pillar.id ? 'ring-2 ring-beba-pink' : ''}
                  `}
                  onClick={() => togglePillar(pillar.id)}
                  data-testid={`pillar-card-${pillar.id}`}
                >
                  {/* Pillar Header */}
                  <div className="p-6 bg-gradient-to-br from-beba-pink/10 via-transparent to-beba-blue/10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-lg bg-gradient-beba flex items-center justify-center text-white shadow-lg">
                            {pillar.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                            {pillar.name}
                          </h3>
                          <p className="text-sm font-medium text-beba-blue">
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedPillar === pillar.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-2"
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                    
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {expandedPillar === pillar.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Key Components:
                          </h4>
                          <ul className="space-y-2">
                            {pillar.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start"
                              >
                                <svg
                                  className="w-5 h-5 text-beba-pink mt-0.5 mr-3 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-gray-700">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Together these pillars uphold a single principle
              </h2>
              <p className="text-2xl sm:text-3xl text-beba-cyan font-semibold mb-8">
                Responsible AI is not an option — it is our identity
              </p>
              <motion.a
                href="/products"
                className="inline-block px-8 py-4 bg-white text-beba-purple font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="learn-more-products-btn"
              >
                Learn how we apply these pillars in our products →
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pillars;
