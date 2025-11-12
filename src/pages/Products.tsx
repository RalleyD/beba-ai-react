import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Shield, Users, TrendingUp, Globe, Heart, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';

const Products: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const clarityFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'RAG-Powered Medical Simplification',
      description: '99.25% accuracy in translating complex medical information into plain language'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: '8+ languages including Punjabi, Urdu, Hindi, and Gujarati with cultural adaptation'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Evidence-Based Nutrition Guidance',
      description: 'Mediterranean diet protocols personalized for dementia care'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Bidirectional GP Integration',
      description: 'Seamless data flow between GP assessment and patient portal'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Family Caregiver Portal',
      description: 'Comprehensive support tools for 700,000+ caregivers'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Complete Service Coordination',
      description: 'Connect patients with local services and support networks'
    }
  ];

  const marketStats = [
    { value: '982,000', label: 'UK dementia patients' },
    { value: '1.4M', label: 'Projected by 2040' },
    { value: '£26.8B', label: 'Annual family care costs' },
    { value: '37%', label: 'Receive zero support' }
  ];

  const clinicalValidation = [
    'NHS-compliant architecture',
    'MHRA regulatory pathway',
    'NICE evidence standards',
    'DTAC compliance certified',
    'ISO 27001 quality management'
  ];

  const governanceServices = [
    {
      title: 'Ethical AI Audits',
      description: 'Comprehensive assessment of AI systems against ethical standards and bias detection'
    },
    {
      title: 'Seven Pillars Certification',
      description: 'Certification program ensuring alignment with our ethical AI framework'
    },
    {
      title: 'Policy Development',
      description: 'Custom AI governance policy creation and implementation support'
    },
    {
      title: 'Training Programs',
      description: 'Education and training for teams on ethical AI practices and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-blue relative overflow-hidden">
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
                Products & <span className="text-beba-cyan">Services</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transforming healthcare through responsible AI innovation
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLARITY Platform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" ref={ref1}>
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
                  <span className="gradient-text">CLARITY</span> Dementia Support Platform
                </h2>
                <p className="text-2xl text-beba-blue font-semibold mb-4">
                  Bridging the £42.5 Billion Care Gap
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  CLARITY represents a transformational breakthrough in dementia care. By integrating 
                  seamlessly with GP-facing risk assessment platforms, CLARITY creates the first complete 
                  care pathway from diagnosis through ongoing support — addressing the critical void where 
                  37% of UK dementia patients receive zero post-diagnosis assistance.
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {clarityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  data-testid={`clarity-feature-${index}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-beba flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Market Impact Stats */}
            <div className="bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-blue rounded-2xl p-8 sm:p-12 mb-12">
              <h3 className="text-3xl font-display font-bold text-white text-center mb-12">
                Market Impact
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {marketStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-display font-bold text-beba-cyan mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Clinical Validation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
                Clinical Validation & Evidence
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-gradient-beba text-white rounded-full font-semibold text-sm">
                  NHS-Compliant
                </span>
                <span className="px-4 py-2 bg-gradient-beba text-white rounded-full font-semibold text-sm">
                  MHRA Registered
                </span>
                <span className="px-4 py-2 bg-gradient-beba text-white rounded-full font-semibold text-sm">
                  DTAC Certified
                </span>
                <span className="px-4 py-2 bg-gradient-beba text-white rounded-full font-semibold text-sm">
                  NICE Standards
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {clinicalValidation.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-beba-pink mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button to="/platform-demo" size="lg" data-testid="view-platform-demo-btn">
                View Platform Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GP-Facing Dashboard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref2}>
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-beba flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-900 mb-4">
                GP-Facing Dementia Risk Assessment Dashboard
              </h2>
              <h3 className="text-xl text-center text-beba-blue font-semibold mb-6">
                Gilly Platform Integration
              </h3>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                Advanced clinical decision support system providing GPs with sophisticated risk 
                stratification and evidence-based recommendations for early dementia detection and intervention.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-3">Integration Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-pink mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seamless data flow to CLARITY patient portal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-pink mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continuous outcome monitoring and feedback</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-pink mr-2 mt-0.5 flex-shrink-0" />
                      <span>Population health management capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-pink mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced diagnostic delays</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Risk stratification tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Evidence-based recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Patient referral workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-beba-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-time clinical insights</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button to="/platform-demo" variant="secondary" size="lg">
                  View Integration Demo
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Governance Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-beba flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
                AI Governance <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                BEBA AI's governance framework helps organizations implement ethical AI systems 
                aligned with our Seven Pillars. We provide assessment, certification, and ongoing 
                compliance support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {governanceServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button to="/pillars" variant="secondary" size="lg">
                Learn About Our Seven Pillars
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;
