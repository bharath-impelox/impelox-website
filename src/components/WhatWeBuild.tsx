import React from 'react';
import { Brain, MessageSquare, Workflow, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatWeBuild: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Brain,
      title: t('servicesPage.whatWeBuild.bespokeAgent.title'),
      description: t('servicesPage.whatWeBuild.bespokeAgent.description'),
      hasVisual: false,
      iconPosition: 'top-left',
    },
    {
      icon: MessageSquare,
      title: t('servicesPage.whatWeBuild.chatbotRAG.title'),
      description: t('servicesPage.whatWeBuild.chatbotRAG.description'),
      hasVisual: true,
      iconPosition: 'top-left',
      visualImage: '/images/bespoke-agent.png',
    },
    {
      icon: Workflow,
      title: t('servicesPage.whatWeBuild.workflowAutomation.title'),
      description: t('servicesPage.whatWeBuild.workflowAutomation.description'),
      hasVisual: true,
      iconPosition: 'top-left',
      visualImage: '/images/workflow-automation.png',
    },
    {
      icon: Cloud,
      title: t('servicesPage.whatWeBuild.aiSaaS.title'),
      description: t('servicesPage.whatWeBuild.aiSaaS.description'),
      hasVisual: false,
      iconPosition: 'top-left',
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• {t('servicesPage.whatWeBuild.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesPage.whatWeBuild.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Determine column span: 40% (col-span-4) or 60% (col-span-6)
            let colSpan = '';
            if (index === 0) colSpan = 'md:col-span-4'; // 40% - Bespoke Agent Development
            else if (index === 1) colSpan = 'md:col-span-6'; // 60% - Chatbot with RAG
            else if (index === 2) colSpan = 'md:col-span-6'; // 60% - Workflow Automation
            else if (index === 3) colSpan = 'md:col-span-4'; // 40% - AI SaaS Implementation
            
            return (
              <div
                key={index}
                className={`${colSpan} bg-white border border-gray-200 rounded-xl overflow-hidden flex h-full`}
              >
                {/* For cards with visuals: horizontal layout */}
                {service.hasVisual ? (
                  <>
                    {/* For Workflow Automation: image left, content right */}
                    {index === 2 ? (
                      <>
                        {/* Left - Visual Section */}
                        <div className="w-1/2 h-auto flex items-center justify-center relative flex-shrink-0 bg-transparent">
                          {service.visualImage ? (
                            <img 
                              src={service.visualImage} 
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <p className="text-gray-400 text-xs">Visual</p>
                            </div>
                          )}
                        </div>
                        {/* Right - Content Section */}
                        <div className="p-6 flex flex-col justify-center w-1/2 bg-white">
                          {/* Icon */}
                          <div className={`flex ${service.iconPosition === 'top-right' ? 'justify-end' : 'justify-start'} mb-4`}>
                            <div className="w-10 h-10 bg-[#EDF1FC] rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-[#1B44FE]" />
                            </div>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left - Content Section */}
                        <div className="p-6 flex flex-col justify-center w-1/2 bg-white">
                          {/* Icon */}
                          <div className={`flex ${service.iconPosition === 'top-right' ? 'justify-end' : 'justify-start'} mb-4`}>
                            <div className="w-10 h-10 bg-[#EDF1FC] rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-[#1B44FE]" />
                            </div>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        {/* Right - Visual Section */}
                        <div className="w-1/2 h-auto flex items-center justify-center relative flex-shrink-0 bg-transparent">
                          {service.visualImage ? (
                            <img 
                              src={service.visualImage} 
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <p className="text-gray-400 text-xs">Visual</p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  /* For cards without visuals: vertical layout (image placeholder top, text below) */
                  <div className="flex flex-col w-full h-full">
                    {/* Image Placeholder - Top (60-70% of card height) */}
                    <div className="w-full bg-white flex items-center justify-center flex-1" style={{ minHeight: '200px' }}>
                      <p className="text-gray-400 text-xs">Image placeholder</p>
                    </div>
                    {/* Text Content - Bottom */}
                    <div className="p-6 flex flex-col">
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;

