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
      },
    },
  };

  const mainImageVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      rotate: 3,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
    hover: {
      rotate: 5,
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, x: -30, y: 30, rotate: -8, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -6,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
    hover: {
      y: -10,
      rotate: -8,
      scale: 1.05,
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
            <div 
              style={{ 
                backgroundImage: 'url(/images/middle_bg.png)',
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }} 
              className="rounded-2xl p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center"
            >
              {/* Animated background blur */}
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

              {/* Main Image - na2_stats.png */}
              <motion.div 
                className="relative z-10 bg-white rounded-xl shadow-2xl p-4 max-w-md w-full"
                variants={mainImageVariants}
                initial="hidden"
                animate={{
                  ...mainImageVariants.visible,
                  y: [0, -10, 0],
                }}
                transition={{
                  ...mainImageVariants.visible.transition,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                  },
                }}
                whileHover="hover"
              >
                <img 
                  src="/images/na2_stats.png" 
                  alt="Na2 Stats" 
                  className="w-full h-auto rounded-lg object-contain"
                />
              </motion.div>

              {/* Floating Image - na2_team_of_agent.png */}
              <motion.div 
                className="absolute bottom-8 left-8 bg-white rounded-xl shadow-2xl p-3 max-w-[280px] w-full z-20"
                variants={floatingImageVariants}
                initial="hidden"
                animate={{
                  ...floatingImageVariants.visible,
                  y: [0, -15, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  ...floatingImageVariants.visible.transition,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                    delay: 0.5,
                  },
                  x: {
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                    delay: 0.5,
                  },
                }}
                whileHover="hover"
              >
                <img 
                  src="/images/na2_team_of_agent.png" 
                  alt="Na2 Team of Agents" 
                  className="w-full h-auto rounded-lg object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default NextAction;

