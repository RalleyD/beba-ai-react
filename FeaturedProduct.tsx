import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Globe, Brain, Database } from 'lucide-react';
import Button from '../common/Button';
import ResponsiveContainer from '../common/ResponsiveContainer';
import AnimatedSection from '../common/AnimatedSection';
import { useIsMobile } from '../../hooks/useMediaQuery';

const FeaturedProduct: React.FC = () => {
  const isMobile = useIsMobile();

  const features = [
    {
      icon: Brain,
      title: 'RAG-Powered Simplification',
      description: '99.25% accuracy in medical information processing',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: '8+ languages including Punjabi, Urdu, Hindi, Gujarati',
    },
    {
      icon: Users,
      title: 'Family Integration',
      description: 'Complete caregiver portal and support tools',
    },
    {
      icon: Database,
      title: 'Bidirectional Data Flow',
      description: 'Seamless GP-patient information exchange',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <ResponsiveContainer>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="slideRight">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-beba-pink/10 rounded-full">
                <div className="w-2 h-2 bg-beba-pink rounded-full animate-pulse" />
                <span className="text-sm font-medium text-beba-pink">
                  Featured Platform
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-display font-bold">
                CLARITY + GP Dashboard:{' '}
                <span className="gradient-text">
                  The Complete Care Pathway
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                The first integrated solution bridging GP risk assessment with 
                continuous patient support. While your partner's platform identifies 
                at-risk patients, CLARITY delivers immediate, culturally-adapted 
                health literacy and family support — addressing the critical void 
                where 37% of UK dementia patients receive zero post-diagnosis assistance.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                      <feature.icon className="w-5 h-5 text-beba-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  to="/platform-demo"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  See It In Action
                </Button>
                <Button
                  to="/products"
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual Representation */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <div className="relative">
              {/* Data Flow Visualization */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                <h3 className="text-lg font-semibold mb-6 text-center">
                  Integrated Care Ecosystem
                </h3>

                {/* Flow Diagram */}
                <div className="space-y-4">
                  {/* GP Assessment */}
                  <motion.div
                    className="bg-gradient-to-r from-beba-blue/10 to-beba-blue/5 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-beba-blue rounded-full flex items-center justify-center text-white">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">GP Risk Assessment</h4>
                        <p className="text-sm text-gray-600">
                          Identify at-risk patients
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </motion.div>
                  </div>

                  {/* CLARITY Portal */}
                  <motion.div
                    className="bg-gradient-to-r from-beba-pink/10 to-beba-pink/5 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-beba-pink rounded-full flex items-center justify-center text-white">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">CLARITY Portal</h4>
                        <p className="text-sm text-gray-600">
                          Immediate patient support
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </motion.div>
                  </div>

                  {/* Outcomes */}
                  <motion.div
                    className="bg-gradient-to-r from-beba-cyan/10 to-beba-cyan/5 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-beba-cyan rounded-full flex items-center justify-center text-white">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Continuous Feedback</h4>
                        <p className="text-sm text-gray-600">
                          Track outcomes & adjust care
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-xs text-gray-600">Support Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">80%</div>
                    <div className="text-xs text-gray-600">Med Adherence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">-20%</div>
                    <div className="text-xs text-gray-600">Hospital Admits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">7 Days</div>
                    <div className="text-xs text-gray-600">Time to Support</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-beba rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-cyan rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default FeaturedProduct;
