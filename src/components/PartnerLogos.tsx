import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PartnerLogos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section 
      className="bg-white py-12 bg-[#F6F8F9] px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <motion.h3 
          className="text-center text-gray-700 font-medium mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('partnerLogos.title')}
        </motion.h3>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-60"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img 
            src="/images/powered-icon.png" 
            alt="Powered icon" 
            className="h-5 w-[50%]"
            whileHover={{ opacity: 1, scale: 1.05, filter: 'grayscale(0%)' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PartnerLogos;

