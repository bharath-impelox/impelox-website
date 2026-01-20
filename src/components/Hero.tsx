import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const floatingCardVariants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <section className="bg-[#F6F8F9] py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-between w-full"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {/* Next icon at top */}
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                {t('hero.titleFor') ? (
                  <>
                    <span className='flex items-center'>
                      <span>{t('hero.title')} </span><img 
                      src="/images/hero-visual.png" 
                      alt="Next Icon" 
                      className="w-13 h-13 transform rotate-6"
                    /> {t('hero.titleFor')}</span> 
                    {t('hero.titleRegulated')}
                  </>
                ) : (
                  <>
                    {t('hero.title')} {t('hero.titleRegulated')}
                  </>
                )}
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                {t('hero.description')}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/products"
                    className="inline-block text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base"
                    style={{
                      background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                    }}
                  >
                    {t('hero.exploreProducts')}
                  </Link>
                </motion.div>
                <motion.button 
                  className=" bg-white shadow px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base border border-transparent hover:border-blue-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.talkToTeam')}
                </motion.button>
              </motion.div>
            </div>

            {/* Users Count - at bottom */}
            <motion.div 
              className="flex items-center space-x-4 pt-8 mt-auto"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <motion.img 
                    key={num}
                    src={`/images/avatar-${num}.png`}
                    alt="User avatar" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + num * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  />
                ))}
              </div>
              <span className="text-gray-600">| {t('hero.happyUsers')}</span>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="relative flex items-center justify-center w-full h-full"
            variants={imageVariants}
          >
            <div 
              className="relative w-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: 'url(/images/header_side_bg.png)',
                minHeight: '400px',
              }}
            >
              {/* Container with rotation - centered */}
              <div className="relative p-8 w-full h-full flex items-center justify-center">
                {/* Main card with Demo */}
                <motion.div 
                  className="bg-white rounded-lg shadow-xl p-6 relative z-0"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="text-center text-gray-400 text-lg font-medium py-8 min-w-[200px]">
                    Demo
                  </div>
                </motion.div>
                
                {/* Floating card with chart */}
                <motion.div 
                  className="absolute left-8 top-20 bg-white rounded-lg shadow-xl p-4 transform translate-x-[-60%] translate-y-[-10%] z-10"
                  variants={floatingCardVariants}
                  whileHover="hover"
                >
                  <div className="text-sm font-thin  text-gray-500 mb-3">{t('hero.productivity')}</div>
                  {/* Bar Chart */}
                  <div className="flex items-end justify-center gap-1.5 h-16">
                    {[40, 70, 50, 90, 60].map((height, idx) => (
                      <motion.div
                        key={idx}
                        className="w-4 bg-[#1B44FE] rounded-t"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + idx * 0.1, duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                      />
                    ))}
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

export default Hero;

