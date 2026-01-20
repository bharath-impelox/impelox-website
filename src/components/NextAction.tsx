import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const NextAction: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 6,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
    hover: {
      rotate: 8,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, x: -20, y: 20, rotate: -6 },
    visible: {
      opacity: 0.8,
      x: 0,
      y: 0,
      rotate: -6,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
    hover: {
      y: -10,
      rotate: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section 
      className="bg-white border m-[40px] rounded-lg py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className='text-[#0040C1]'>{t('nextAction.tag')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('nextAction.title')}</h2>
            <p className=" text-gray-600 leading-relaxed">
             {t('nextAction.description')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/product/na2"
                className="inline-block text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{
                  background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                }}
              >
                {t('nextAction.exploreNa2')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div className="relative" variants={imageVariants}>
            <div style={{ backgroundImage: 'url(/images/middle_bg.png)',
               backgroundSize: 'cover', backgroundPosition: 'center' }} className=" rounded-2xl p-8 relative overflow-hidden h-80 flex items-center justify-center">
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="relative bg-white rounded-lg shadow-xl p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-center text-gray-400 text-sm">Product Image</div>
              </motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-6 opacity-80"
                variants={floatingCardVariants}
                whileHover="hover"
              >
                <div className="text-center text-gray-400 text-sm">Product Image</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NextAction;

