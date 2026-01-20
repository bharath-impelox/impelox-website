import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CounterAnimation: React.FC = () => {
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    const animateCounter = async () => {
      // Smoothly count from 1 to 10 with smooth transitions
      for (let i = 1; i <= 10; i++) {
        setDisplay(i);
        await new Promise(resolve => setTimeout(resolve, 450));
      }
      // Wait a bit then reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDisplay(1);
    };

    animateCounter();
    const interval = setInterval(animateCounter, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={display}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1] // Smooth cubic-bezier easing
      }}
    >
      {display}x
    </motion.span>
  );
};

interface BarChartProps {
  activeBarIndex: number | null;
  setActiveBarIndex: (index: number | null) => void;
}

const BarChart: React.FC<BarChartProps> = ({ activeBarIndex, setActiveBarIndex }) => {
  const barHeights = [40, 70, 50, 90, 60];
  const completionHandled = useRef(false);
  
  useEffect(() => {
    if (activeBarIndex === null) {
      // Start with a random bar after initial delay
      const initialDelay = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * barHeights.length);
        setActiveBarIndex(randomIndex);
      }, 1000);
      return () => clearTimeout(initialDelay);
    } else {
      completionHandled.current = false;
    }
  }, [activeBarIndex, barHeights.length, setActiveBarIndex]);

  const handleAnimationComplete = () => {
    if (completionHandled.current || activeBarIndex === null) return;
    completionHandled.current = true;
    
    // After animation completes, wait a bit then select a random bar (different from current)
    setTimeout(() => {
      let nextBar;
      do {
        nextBar = Math.floor(Math.random() * barHeights.length);
      } while (nextBar === activeBarIndex && barHeights.length > 1);
      setActiveBarIndex(nextBar);
    }, 300);
  };

  // Different shades of blue for each bar
  const colorShades = [
    ['#1B44FE', '#5375FE'], // Original blue shades
    ['#2563EB', '#60A5FA'], // Lighter blue
    ['#1E40AF', '#3B82F6'], // Medium blue
    ['#1E3A8A', '#2563EB'], // Darker blue
    ['#3B82F6', '#93C5FD'], // Light blue
  ];

  return (
    <div className="flex items-end justify-center gap-1.5 h-16 mt-2">
      {barHeights.map((height, idx) => {
        const isActive = activeBarIndex === idx;
        const maxHeight = Math.min(height * 1.2, 100);
        const colors = colorShades[idx % colorShades.length];
        
        return (
          <motion.div
            key={idx}
            className="w-3 rounded-t"
            style={{ backgroundColor: colors[0] }}
            initial={{ height: `${height}%` }}
            animate={isActive ? {
              height: [`${height}%`, `${maxHeight}%`, `${height}%`],
              backgroundColor: [colors[0], colors[1], colors[0]]
            } : {
              height: `${height}%`,
              backgroundColor: colors[0]
            }}
            transition={isActive ? {
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.5, 1]
            } : {
              duration: 0.3,
              ease: "easeOut"
            }}
            onAnimationComplete={isActive ? handleAnimationComplete : undefined}
          />
        );
      })}
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  
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
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-[#F6F8F9] py-20 px-6">
      <div className="container mx-auto relative">
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
                      <span>{t('hero.title')} </span>
                      <motion.img 
                        src="/images/hero-visual.png" 
                        alt="Hero visual"
                        className="w-20 h-20 md:w-24 md:h-24 transform rotate-6 ml-2 flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          y: [0, -8, 0],
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3,
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }
                        }}
                        whileHover={{ scale: 1.15, rotate: 8 }}
                      />
                      {t('hero.titleFor')}</span> 
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

          {/* Right Visual - Product Display */}
          <motion.div 
            className="relative flex items-center justify-center w-full h-full"
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
                    {t('hero.flagshipProduct')}
                  </span>
                  <span className="text-gray-900 text-xl md:text-2xl font-bold ml-2">
                    {t('hero.nextActionNa2')}
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

                  {/* Demo Content Area */}
                  <div className="relative h-full min-h-[350px] flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src="/images/na2_home.png" 
                      alt="Next Action (Na2) Product" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Productivity Card - Intersects both sections */}
        <motion.div 
          className="absolute bg-white rounded-lg shadow-xl p-4 border border-gray-100 z-30 w-[180px] md:w-[200px] hidden md:block"
          variants={floatingCardVariants}
          style={{ 
            left: 'calc(50% - 100px - 24px)',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="text-sm font-semibold text-gray-900">
              <CounterAnimation /> Productivity
            </div>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-5 h-5 text-[#1B44FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </motion.div>
          </div>
          {/* Bar Chart */}
          <BarChart activeBarIndex={activeBarIndex} setActiveBarIndex={setActiveBarIndex} />
        </motion.div>
        
  
      </div>
    </section>
  );
};

export default Hero;

