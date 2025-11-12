import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import AnimatedSection from '../components/common/AnimatedSection';
import Button from '../components/common/Button';
import { 
  Brain, 
  Activity, 
  Database, 
  Users, 
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';
import { useIsMobile } from '../hooks/useMediaQuery';

const PlatformDemo: React.FC = () => {
  const [activeScene, setActiveScene] = useState('gp-assessment');
  const isMobile = useIsMobile();

  const scenes = [
    { id: 'gp-assessment', title: 'GP Assessment', icon: Activity },
    { id: 'data-flow', title: 'Data Exchange', icon: Database },
    { id: 'patient-portal', title: 'Patient Portal', icon: Users },
    { id: 'family-support', title: 'Family Hub', icon: MessageSquare },
    { id: 'feedback-loop', title: 'Feedback Loop', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-beba-purple via-beba-purple-light to-beba-purple text-white py-16 lg:py-24">
        <ResponsiveContainer>
          <AnimatedSection animation="fadeIn" className="text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">
              The First Complete{' '}
              <span className="bg-gradient-to-r from-beba-pink to-beba-cyan bg-clip-text text-transparent">
                Dementia Care Pathway
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              From GP Risk Assessment to Ongoing Patient Support — 
              Bridging the £42.5B Care Gap
            </p>
            <div className="mt-8">
              <Button
                onClick={() => setActiveScene('gp-assessment')}
                size="lg"
                className="bg-white text-beba-purple hover:bg-gray-100"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore The Platform
              </Button>
            </div>
          </AnimatedSection>
        </ResponsiveContainer>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-20 bg-white">
        <ResponsiveContainer>
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
              The <span className="gradient-text">£42.5 Billion Gap</span> in Dementia Care
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { stat: '37%', label: 'receive ZERO support after diagnosis' },
                { stat: '324,000', label: 'patients undiagnosed (34.6% gap)' },
                { stat: '700,000', label: 'caregivers struggling alone' },
                { stat: '£26.8B', label: 'annual family costs' },
                { stat: '90%', label: 'of NHS costs from preventable emergencies' },
                { stat: '7x', label: 'ethnic minority case growth by 2051' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </ResponsiveContainer>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <ResponsiveContainer>
          <AnimatedSection animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Two Platforms. <span className="gradient-text">One Complete Solution.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Gilly provides GPs with advanced risk assessment. 
                CLARITY delivers continuous patient and caregiver support. 
                Together, they create the missing infrastructure in dementia care.
              </p>
            </div>
          </AnimatedSection>
        </ResponsiveContainer>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 lg:py-20 bg-white">
        <ResponsiveContainer>
          <div className="space-y-8">
            {/* Scene Selector */}
            <div className={`flex ${isMobile ? 'overflow-x-auto no-scrollbar' : 'justify-center'} gap-4`}>
              {scenes.map((scene) => {
                const Icon = scene.icon;
                return (
                  <motion.button
                    key={scene.id}
                    onClick={() => setActiveScene(scene.id)}
                    className={`
                      flex items-center space-x-2 px-4 py-3 rounded-lg font-medium
                      transition-all duration-300 whitespace-nowrap
                      ${activeScene === scene.id 
                        ? 'bg-gradient-beba text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span>{scene.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Scene Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0, x: isMobile ? 50 : 0, y: isMobile ? 0 : 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: isMobile ? -50 : 0, y: isMobile ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12"
              >
                {activeScene === 'gp-assessment' && <GPAssessmentScene />}
                {activeScene === 'data-flow' && <DataFlowScene />}
                {activeScene === 'patient-portal' && <PatientPortalScene />}
                {activeScene === 'family-support' && <FamilySupportScene />}
                {activeScene === 'feedback-loop' && <FeedbackLoopScene />}
              </motion.div>
            </AnimatePresence>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <ResponsiveContainer>
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
              Capturing the <span className="gradient-text">£42.5 Billion Opportunity</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: '1.68M', label: 'Users Today', desc: 'UK patients + caregivers' },
                { metric: '2.38M', label: 'By 2040', desc: '42% market growth' },
                { metric: '£26.8B', label: 'Family Costs', desc: '63% of total burden' },
                { metric: 'Zero', label: 'Competition', desc: 'Only integrated solution' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {item.metric}
                  </div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-beba text-white">
        <ResponsiveContainer>
          <AnimatedSection animation="fadeIn" className="text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Ready to Transform Dementia Care?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Healthcare organizations, NHS trusts, and private care providers: 
              Contact us to pilot Gilly-CLARITY in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-beba-purple hover:bg-gray-100"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-beba-purple"
              >
                Download Clinical Evidence
              </Button>
            </div>
          </AnimatedSection>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

// Scene Components
const GPAssessmentScene: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <Activity className="w-8 h-8 text-beba-blue" />
      <h3 className="text-2xl font-display font-bold">Gilly - GP Assessment Dashboard</h3>
    </div>
    
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h4 className="font-semibold mb-4 text-gray-800">Risk Stratification Tool</h4>
      <div className="space-y-3">
        {[
          'Cognitive scores (MoCA, ACE-III)',
          'Functional assessment (ADL/IADL)',
          'Medical history review',
          'Social factors analysis',
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-beba-blue rounded-full" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border-l-4 border-orange-500">
      <div className="font-semibold text-orange-800 mb-2">Risk Assessment Result</div>
      <div className="text-2xl font-bold text-orange-600">MODERATE-HIGH RISK</div>
      <div className="text-sm text-orange-700 mt-2">
        Recommendation: Refer for diagnostic workup
      </div>
    </div>

    <motion.div
      className="flex justify-end"
      whileHover={{ x: 5 }}
    >
      <Button icon={ArrowRight} iconPosition="right">
        Send to CLARITY Portal
      </Button>
    </motion.div>
  </div>
);

const DataFlowScene: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <Database className="w-8 h-8 text-beba-purple" />
      <h3 className="text-2xl font-display font-bold">Bidirectional Data Exchange</h3>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h4 className="font-semibold mb-4 text-beba-blue">GP → CLARITY</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ Risk assessment results</li>
          <li>✓ Medical history</li>
          <li>✓ Medications list</li>
          <li>✓ Personalized care recommendations</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h4 className="font-semibold mb-4 text-beba-pink">CLARITY → GP</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✓ Patient engagement metrics</li>
          <li>✓ Symptom progression tracking</li>
          <li>✓ Medication adherence</li>
          <li>✓ Service utilization data</li>
        </ul>
      </div>
    </div>

    <div className="bg-green-50 rounded-lg p-6 text-center">
      <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
      <div className="font-semibold text-green-800">FHIR-Compliant Secure Exchange</div>
      <div className="text-sm text-green-700 mt-2">
        NHS Login authenticated • SNOMED CT coded • ISO 27001 certified
      </div>
    </div>
  </div>
);

const PatientPortalScene: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <Users className="w-8 h-8 text-beba-pink" />
      <h3 className="text-2xl font-display font-bold">CLARITY - Patient Portal</h3>
    </div>

    <div className="bg-gradient-to-r from-beba-pink/10 to-beba-blue/10 rounded-lg p-6">
      <div className="font-semibold text-gray-800 mb-2">Welcome back, [Patient Name]</div>
      <div className="text-sm text-gray-600">Your personalized dementia support hub</div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        { icon: Brain, title: 'Understanding Your Diagnosis', desc: 'Plain language explanation' },
        { icon: Activity, title: 'Your Medications', desc: 'What they do & how to take them' },
        { icon: Globe, title: 'Mediterranean Diet Plan', desc: 'Cultural recipe adaptations' },
        { icon: MessageSquare, title: 'AI Health Assistant', desc: '99.25% accuracy support' },
      ].map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-3">
              <Icon className="w-6 h-6 text-beba-pink flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-800">{feature.title}</div>
                <div className="text-sm text-gray-600">{feature.desc}</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const FamilySupportScene: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <MessageSquare className="w-8 h-8 text-beba-cyan" />
      <h3 className="text-2xl font-display font-bold">Family & Caregiver Hub</h3>
    </div>

    <div className="grid gap-4">
      {[
        {
          title: 'Health Literacy Resources',
          items: ['Understanding the diagnosis', 'Care planning guides', 'Communication tips'],
        },
        {
          title: 'Burden Tracking & Support',
          items: ['Zarit Burden Interview', 'Respite care booking', 'Support group connections'],
        },
        {
          title: 'Practical Assistance',
          items: ['Financial support wizard', 'Legal planning checklist', 'Emergency contacts'],
        },
      ].map((section, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold mb-3 text-gray-800">{section.title}</h4>
          <ul className="space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-beba-cyan rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const FeedbackLoopScene: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <TrendingUp className="w-8 h-8 text-green-600" />
      <h3 className="text-2xl font-display font-bold">Continuous Care Coordination</h3>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        {[
          '1. GP identifies risk',
          '2. Patient receives immediate support',
          '3. Family engages with resources',
          '4. Outcomes tracked in real-time',
          '5. GP receives progress updates',
          '6. Care plan adjusted as needed',
        ].map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-beba rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <span className="text-gray-700">{step}</span>
            {index < 5 && <ArrowRight className="w-4 h-4 text-gray-400" />}
          </div>
        ))}
      </div>
    </div>

    <div className="bg-green-50 rounded-lg p-6">
      <h4 className="font-semibold mb-4 text-green-800">Platform Impact Metrics</h4>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-green-600">&lt;7 days</div>
          <div className="text-sm text-green-700">Time to support</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">&gt;80%</div>
          <div className="text-sm text-green-700">Med adherence</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">-20%</div>
          <div className="text-sm text-green-700">Hospital admissions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">-15 pts</div>
          <div className="text-sm text-green-700">Caregiver burden</div>
        </div>
      </div>
    </div>
  </div>
);

export default PlatformDemo;
