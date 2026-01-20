import React from 'react';
import { Link } from 'react-router-dom';
import { CircleCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WhyImpelox: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };
  const features = [
    {
      title: t('whyImpelox.regulatedExpertise.title'),
      description: t('whyImpelox.regulatedExpertise.description'),
    },
    {
      title: t('whyImpelox.japanExperience.title'),
      description: t('whyImpelox.japanExperience.description'),
    },
    {
      title: t('whyImpelox.engineers.title'),
      description: t('whyImpelox.engineers.description'),
    },
    {
      title: t('whyImpelox.stayUntilWorks.title'),
      description: t('whyImpelox.stayUntilWorks.description'),
    },
  ];

  return (
    <motion.section 
      className="bg-gray-50 py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-[#0040C1] text-sm mb-2">• {t('whyImpelox.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('whyImpelox.title')}
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-[250px] max-w-[300px] flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <CircleCheck className="w-6 h-6 text-[#1B44FE]" />
              </motion.div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              {t('whyImpelox.aboutUs')} →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyImpelox;
