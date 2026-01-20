import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProductSuite: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };
  const products = [
    { 
      title: t('productSuite.crm.title'), 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#1B44FE" />
          <circle cx="12" cy="12" r="2" fill="#1B44FE" />
        </svg>
      ),
      description: t('productSuite.crm.description')
    },
    { 
      title: t('productSuite.projectManagement.title'), 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#1B44FE" />
        </svg>
      ),
      description: t('productSuite.projectManagement.description')
    },
    { 
      title: t('productSuite.contactForm.title'), 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#1B44FE" />
        </svg>
      ),
      description: t('productSuite.contactForm.description')
    },
    { 
      title: t('productSuite.calendar.title'), 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#1B44FE" />
        </svg>
      ),
      description: t('productSuite.calendar.description')
    },
    { 
      title: t('productSuite.pricingBilling.title'), 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#1B44FE" viewBox="0 0 24 24" style={{ color: '#1B44FE' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#1B44FE" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1B44FE" />
        </svg>
      ),
      description: t('productSuite.pricingBilling.description')
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
          <p className="text-[#0040C1] text-sm mb-2">• {t('productSuite.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('productSuite.title')} <span className="text-[#1B44FE]">{t('productSuite.titleHighlight')}</span> {t('productSuite.titleSuffix')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('productSuite.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* First row - 2 cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-6"
            variants={containerVariants}
          >
            {products.slice(0, 2).map((product, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-12 h-12 bg-[#EDF1FC] rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - 3 cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {products.slice(2).map((product, index) => (
              <motion.div 
                key={index + 2} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-12 h-12 bg-[#EDF1FC] rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/products"
              className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              {t('productSuite.exploreAll')} →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductSuite;

