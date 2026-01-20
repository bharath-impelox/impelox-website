import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CustomAI: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };
  const services = [
    {
      title: t('customAI.chatbotRAG.title'),
      subtitle: t('customAI.chatbotRAG.subtitle'),
      visual: 'chatbot',
      dark: true,
      hasButton: false,
    },
    {
      title: t('customAI.bespokeAgent.title'),
      subtitle: t('customAI.bespokeAgent.subtitle'),
      visual: 'bespoke',
      dark: false,
      hasButton: true,
    },
    {
      title: t('customAI.workflowAutomation.title'),
      subtitle: t('customAI.workflowAutomation.subtitle'),
      visual: 'workflow',
      dark: false,
      hasButton: true,
    },
    {
      title: t('customAI.aiSaaS.title'),
      subtitle: t('customAI.aiSaaS.subtitle'),
      visual: 'saas',
      dark: false,
      hasButton: false,
    },
  ];

  return (
    <motion.section 
      className="bg-white py-20 px-6 border border-blue-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-[#0040C1] text-sm mb-2">• {t('customAI.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('customAI.title')}
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            {t('customAI.description')}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-10 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            let colSpan = '';
            if (index === 0) colSpan = 'col-span-4'; // 40% - Chatbot with RAG
            else if (index === 1) colSpan = 'col-span-6'; // 60% - Bespoke Agent Development
            else if (index === 2) colSpan = 'col-span-6'; // 60% - Workflow Automation
            else if (index === 3) colSpan = 'col-span-4'; // 40% - AI SaaS Implementation
            
            return (
            <motion.div
              key={index}
              className={`${colSpan} rounded-xl overflow-hidden flex h-full ${
                service.visual === 'chatbot'
                  ? 'text-white flex-col'
                  : service.dark 
                  ? 'bg-gray-900 text-white flex-col' 
                  : service.visual === 'workflow' || service.visual === 'bespoke'
                  ? 'bg-white border border-gray-200 flex-row'
                  : 'bg-white border border-gray-200 flex-col'
              }`}
              style={service.visual === 'chatbot' ? { backgroundColor: '#0D121C' } : {}}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Content Section - For Chatbot, content goes on top */}
              {service.visual === 'chatbot' && (
                <div className="p-6 flex flex-col" style={{ backgroundColor: '#0D121C' }}>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-300">
                    {service.subtitle}
                  </p>
                </div>
              )}
              
              {/* Content Section - For Bespoke, content goes on left */}
              {service.visual === 'bespoke' && (
                <div className="p-6 flex flex-col justify-center w-1/2 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-600">
                    {service.subtitle}
                  </p>
                  {service.hasButton && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/services"
                        className="inline-block text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-fit"
                        style={{
                          background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                        }}
                      >
                        {t('customAI.bespokeAgent.exploreServices')} →
                      </Link>
                    </motion.div>
                  )}
                </div>
              )}
              
              {/* Visual Section */}
              <motion.div 
                className={`${service.visual === 'workflow' || service.visual === 'bespoke' ? 'w-1/2 h-auto' : service.visual === 'chatbot' ? 'h-64 w-full' : 'h-64 w-full'} flex items-center justify-center relative flex-shrink-0 ${
                service.visual === 'chatbot' ? '' : 
                service.visual === 'saas' ? 'bg-gray-900' : 
                service.visual === 'workflow' || service.visual === 'bespoke' ? 'bg-transparent' :
                'bg-gray-100'
              }`} 
                style={service.visual === 'chatbot' ? { backgroundColor: '#0D121C' } : {}}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {service.visual === 'chatbot' && (
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="/images/chatbot-rag.png" 
                      alt="Chatbot with RAG" 
                      className="h-full w-auto object-contain mx-auto"
                    />
                  </motion.div>
                )}
                {service.visual === 'bespoke' && (
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="/images/bespoke-agent.png" 
                      alt="Bespoke Agent Development" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                {service.visual === 'workflow' && (
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="/images/workflow-automation.png" 
                      alt="Workflow Automation" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                {service.visual === 'saas' && (
                  <motion.div 
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src="/images/ai-saas-code.png" 
                      alt="AI SaaS Implementation" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Content Section */}
              {service.visual !== 'chatbot' && service.visual !== 'bespoke' && (
                <div className={`p-6 flex flex-col justify-center ${service.dark ? 'bg-gray-900' : 'bg-white'} ${service.visual === 'workflow' ? 'w-full md:w-1/2' : ''}`}>
                  <h3 className={`text-xl font-bold mb-2 ${service.dark ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${service.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.subtitle}
                  </p>
                  {service.hasButton && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/services"
                        className="inline-block text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-fit"
                        style={{
                          background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                        }}
                      >
                        {t('customAI.bespokeAgent.exploreServices')} →
                      </Link>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CustomAI;

