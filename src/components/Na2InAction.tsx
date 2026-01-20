import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Na2InAction: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const stats = [
    { value: '34%', label: t('na2InAction.fewerNoShows') },
    { value: '60%', label: t('na2InAction.lessPhoneTime') },
    { value: '45%', label: t('na2InAction.afterHoursBookings') },
  ];

  return (
    <motion.section 
      className="m-[100px] bg-white py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-[#0040C1] text-sm mb-2">• {t('na2InAction.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('na2InAction.title')}</h2>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          className="bg-gray-100 rounded-2xl p-8 md:p-12 mx-auto"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2">
            {/* Left Section - Metrics */}
            <motion.div 
              className="flex items-start gap-0"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex-1 relative flex items-center"
                  variants={statVariants}
                  whileHover="hover"
                >
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#1B44FE]"></div>
                  )}
                  <div className="px-4 md:px-6 w-full">
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-gray-900 mb-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Section - Testimonial */}
            <motion.div 
              className="border-l border-[#1B44FE] pl-8 md:pl-12 mt-8 md:mt-0"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('na2InAction.testimonial')}
              </p>
              <div className="text-sm text-gray-500">
                {t('na2InAction.testimonialAuthor')}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Na2InAction;

