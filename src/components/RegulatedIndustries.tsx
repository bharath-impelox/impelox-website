import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const RegulatedIndustries: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };
  const industries = [
    {
      title: t('regulatedIndustries.healthcare'),
      icon: '/images/healthcare-icon.png',
    },
    {
      title: t('regulatedIndustries.hospitality'),
      icon: '/images/hospitality-icon.png',
    },
    {
      title: t('regulatedIndustries.sales'),
      icon: '/images/sales-icon.png',
    },
    {
      title: t('regulatedIndustries.insurance'),
      icon: '/images/insurance-icon.png',
    },
  ];

  return (
    <motion.section 
      style={{
        backgroundImage: 'url(/images/third_bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}
      className="m-[100px] rounded-lg py-20 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container  relative z-10">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className='text-[#0040C1]'>{t('regulatedIndustries.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('regulatedIndustries.title')} <br></br> <span className='text-[#1B44FE]'>{t('regulatedIndustries.titleHighlight')}</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            {t('regulatedIndustries.description')}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto"
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl pt-8 pl-8 pr-8 shadow-md hover:shadow-lg transition-shadow flex items-center gap-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex-1 self-start">
                <h3 className="text-xl text-[#0040C1] text-gray-900">{industry.title}</h3>
              </div>
              <motion.div 
                className="flex-shrink-0 self-end"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={industry.icon} 
                  alt={industry.title} 
                  className="w-24 h-24 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.button 
            className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
            style={{
              background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('regulatedIndustries.seeSolutions')}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RegulatedIndustries;

