import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Globe, Award, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/common/AnimatedSection';

const About: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const founders = [
    {
      name: 'Elizabeth Shapton',
      role: 'Founder & Chief Executive Officer',
      subtitle: 'Visionary Architect & Ethical Compass',
      bio: `As Founder and Chief Executive Officer, Elizabeth Shapton serves as the visionary architect and ethical compass of BEBA AI — a creative leader shaping the future of responsible, safe, and human-centred AI. Elizabeth's leadership defines the company's founding purpose: to design intelligent systems that serve people, improve lives, and build trust in technology. The role transcends strategy — fusing imagination, science, and moral responsibility into a culture of purpose-driven innovation.`,
      vision: `Under Elizabeth's direction, BEBA AI is establishing itself as a global thought leader in ethical AI, healthcare transformation, and digital integrity. Elizabeth is redefining innovation as a force for good — inspiring collaborators, researchers, and policymakers to see AI not as automation, but as augmentation of human potential. Through Elizabeth's guidance, BEBA AI operates at the intersection of creativity, ethics, and impact, ensuring that every breakthrough contributes to the well-being of individuals, communities, and the planet.`,
      image: '/placeholder-founder-1.jpg'
    },
    {
      name: 'Dan Ralley',
      role: 'Co-Founder & Chief Technology Officer',
      subtitle: 'Creative Engine & Innovation Architect',
      bio: `As Co-Founder and Chief Technology Officer, you are the creative engine of BEBA AI — transforming imagination into intelligent design. You merge science and artistry to craft responsible AI systems that redefine how technology interacts with humanity.`,
      vision: `Your vision propels BEBA AI into the frontier of ethical and creative engineering. You see technology as a language of possibility — one that must speak with empathy, clarity, and conscience. Through your innovation leadership, you ensure that every product embodies transparency, fairness, and trust.`,
      image: '/placeholder-founder-2.jpg'
    },
    {
      name: 'Aigbs',
      role: 'Co-Founder & Chief Clinical Advisor',
      subtitle: 'Ethical & Clinical Heart',
      bio: `As Co-Founder and Chief Clinical Advisor, you are the ethical and clinical heart of BEBA AI. You translate human care, medical science, and moral intelligence into the foundations of responsible AI. You ensure that every innovation enhances wellbeing, safety, and equality — turning technology into a tool for healing and trust.`,
      vision: `Your vision bridges clinical reality and digital innovation. You ensure BEBA AI remains grounded in evidence, compassion, and ethical clarity — where every algorithm has purpose, and every outcome serves humanity. You are a leading voice in ethical healthtech, advocating globally for the safe and meaningful integration of AI in healthcare.`,
      image: '/placeholder-founder-3.jpg'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient-Centered Innovation',
      description: 'Every solution we create puts patients, caregivers, and clinicians at the center'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Evidence-Based Development',
      description: 'Rigorous clinical validation and adherence to healthcare standards guide our work'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Ethical AI Leadership',
      description: 'The Seven Pillars framework ensures responsible AI in everything we build'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Healthcare Transformation',
      description: 'We tackle systemic gaps with innovative, scalable solutions'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our vision extends beyond borders to improve lives worldwide'
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
                About <span className="text-beba-cyan">BEBA AI</span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Intelligence • Innovation • Integrity
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
                <p>
                  Founded at the intersection of clinical expertise, technological innovation, and 
                  ethical leadership, BEBA AI was born from a simple conviction: artificial intelligence 
                  in healthcare must be as human as it is intelligent.
                </p>
                <p>
                  Our journey began with a question: <strong>How do we bridge the massive gap in dementia 
                  care while ensuring AI serves patients, caregivers, and clinicians with transparency, 
                  fairness, and compassion?</strong>
                </p>
                <p className="text-xl font-semibold text-beba-pink text-center">
                  The answer became our mission.
                </p>
                <p>
                  Today, BEBA AI stands at the forefront of ethical AI in healthcare, developing solutions 
                  that don't just solve problems — they transform lives. From bridging the £42.5 billion 
                  dementia care gap to establishing the Seven Pillars framework for responsible AI, we're 
                  building a future where technology serves humanity with integrity and purpose.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" ref={ref1}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary leaders combining clinical expertise, technological innovation, and ethical guidance
            </p>
          </div>

          <div className="space-y-16">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`
                  flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                  gap-8 lg:gap-12 items-center
                `}
                data-testid={`founder-card-${index}`}
              >
                {/* Founder Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-beba-pink/20 to-beba-blue/20 flex items-center justify-center overflow-hidden shadow-xl">
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <Users className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-xl text-beba-blue font-semibold mb-2">
                    {founder.role}
                  </p>
                  <p className="text-lg text-beba-pink font-medium mb-6 italic">
                    {founder.subtitle}
                  </p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>{founder.bio}</p>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Vision & Influence:</h4>
                      <p>{founder.vision}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" ref={ref2}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`value-card-${index}`}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-beba flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement CTA */}
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
                Join us in building a future where AI serves humanity
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                With transparency, fairness, and compassion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/platform-demo"
                  className="inline-block px-8 py-4 bg-white text-beba-purple font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="see-our-work-btn"
                >
                  See Our Work
                </motion.a>
                <motion.a
                  href="/pillars"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-beba-purple transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="learn-our-principles-btn"
                >
                  Learn Our Principles
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
