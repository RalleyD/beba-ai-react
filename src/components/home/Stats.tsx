import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveContainer from '../common/ResponsiveContainer';
import { useScrollAnimation, useCountAnimation } from '../../hooks/useScrollAnimation';
import { useIsMobile } from '../../hooks/useMediaQuery';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const Stats: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  const isMobile = useIsMobile();

  const stats: StatItem[] = [
    {
      value: 42.5,
      prefix: '£',
      suffix: 'B',
      label: 'UK Dementia Market',
      description: 'Annual care costs growing to £90B by 2040',
    },
    {
      value: 982000,
      suffix: '',
      label: 'UK Patients',
      description: 'People living with dementia needing support',
    },
    {
      value: 99.25,
      suffix: '%',
      label: 'RAG Accuracy',
      description: 'Medical information precision with citations',
    },
    {
      value: 7,
      suffix: 'x',
      label: 'Ethnic Growth',
      description: 'Minority dementia cases increase by 2051',
    },
  ];

  return (
    <section ref={ref as any} className="py-16 lg:py-24 bg-gray-50">
      <ResponsiveContainer>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            The <span className="gradient-text">£42.5 Billion</span> Opportunity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Addressing critical gaps in dementia care with AI-powered solutions
            that transform patient outcomes and caregiver support.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isInView={isInView}
              delay={isMobile ? 0 : index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            37% of newly diagnosed patients receive zero support. 
            <span className="font-semibold text-beba-blue"> We're changing that.</span>
          </p>
          <motion.a
            href="/platform-demo"
            className="inline-flex items-center text-beba-pink hover:text-beba-blue transition-colors font-semibold"
            whileHover={{ x: 5 }}
          >
            Learn how our platform bridges the care gap →
          </motion.a>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
};

// Individual Stat Card Component
const StatCard: React.FC<{
  stat: StatItem;
  isInView: boolean;
  delay: number;
}> = ({ stat, isInView, delay }) => {
  const count = useCountAnimation(stat.value, 2000, isInView);

  const formatNumber = (num: number, originalValue: number): string => {
    if (originalValue === 982000) {
      return num.toLocaleString();
    }
    if (originalValue === 99.25 || originalValue === 42.5) {
      return num.toFixed(originalValue === 99.25 ? 2 : 1);
    }
    return num.toString();
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Gradient Border Effect on Hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-beba opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Stat Value */}
        <div className="relative mb-3">
          <div className="text-4xl lg:text-5xl font-display font-bold gradient-text">
            {stat.prefix}
            {formatNumber(count, stat.value)}
            {stat.suffix}
          </div>
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {stat.description}
        </p>

        {/* Decorative Element */}
        <motion.div
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-beba opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Stats;
