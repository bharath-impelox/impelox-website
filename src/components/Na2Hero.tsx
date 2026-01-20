import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Na2Hero: React.FC = () => {
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
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotate: 0 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 3,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
    hover: {
      rotate: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
           <span className="text-sm shadow-sm bg-white  font-medium mb-2 p-2 rounded-xl">
              <span style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }} className=' text-white rounded-xl p-1'>Na2</span> {t('productNa2Page.hero.badge')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('productNa2Page.hero.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('productNa2Page.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('productNa2Page.hero.seeInAction')}
              </motion.button>
              <motion.button 
                className="bg-white shadow  px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('productNa2Page.hero.talkToTeam')}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual - Product Display Frame */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            {/* Background with abstract blue wave shapes */}
            <div 
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #E9F1FF 0%, #F0F7FF 50%, #E9F1FF 100%)',
                minHeight: '500px',
              }}
            >
              {/* Abstract wave shapes */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                  <path d="M0,300 Q200,250 400,300 T800,300 L800,600 L0,600 Z" fill="#1B44FE" opacity="0.1"/>
                  <path d="M0,350 Q200,300 400,350 T800,350 L800,600 L0,600 Z" fill="#5375FE" opacity="0.15"/>
                  <path d="M0,400 Q200,350 400,400 T800,400 L800,600 L0,600 Z" fill="#1B44FE" opacity="0.1"/>
                </svg>
              </div>

              {/* Product Display Frame */}
              <div className="relative p-6 md:p-8 w-full h-full flex flex-col">
                {/* Flagship Product Badge */}
                <motion.div 
                  className="flex items-center gap-2 mb-4 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-[#1B44FE] rounded-full"></div>
                  <span className="text-[#1B44FE] text-xs font-semibold uppercase tracking-wide">
                    FLAGSHIP PRODUCT
                  </span>
                  <span className="text-gray-900 text-xl md:text-2xl font-bold ml-2">
                    Next Action (Na2)
                  </span>
                </motion.div>

                {/* Main Product Frame */}
                <motion.div 
                  className="bg-white rounded-xl shadow-2xl flex-1 relative z-0 overflow-hidden"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {/* Browser/App Frame Header */}
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 text-center mx-4">
                      impelox.com/product/na2
                    </div>
                  </div>

                  {/* Product Image Content Area */}
                  <div className="relative h-full min-h-[400px] flex items-center justify-center p-4 overflow-hidden">
                    <motion.img 
                      src="/images/na2_home.png" 
                      alt="Next Action (Na2) Product" 
                      className="w-full h-full object-contain rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Na2Hero;

