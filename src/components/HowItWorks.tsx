import React from 'react';
import { MessageSquare, Route, ClipboardList, Database, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    {
      number: t('productNa2Page.howItWorks.steps.step1.number'),
      title: t('productNa2Page.howItWorks.steps.step1.title'),
      description: t('productNa2Page.howItWorks.steps.step1.description'),
      icon: MessageSquare,
    },
    {
      number: t('productNa2Page.howItWorks.steps.step2.number'),
      title: t('productNa2Page.howItWorks.steps.step2.title'),
      description: t('productNa2Page.howItWorks.steps.step2.description'),
      icon: Route,
    },
    {
      number: t('productNa2Page.howItWorks.steps.step3.number'),
      title: t('productNa2Page.howItWorks.steps.step3.title'),
      description: t('productNa2Page.howItWorks.steps.step3.description'),
      icon: ClipboardList,
    },
    {
      number: t('productNa2Page.howItWorks.steps.step4.number'),
      title: t('productNa2Page.howItWorks.steps.step4.title'),
      description: t('productNa2Page.howItWorks.steps.step4.description'),
      icon: Database,
    },
    {
      number: t('productNa2Page.howItWorks.steps.step5.number'),
      title: t('productNa2Page.howItWorks.steps.step5.title'),
      description: t('productNa2Page.howItWorks.steps.step5.description'),
      icon: AlertCircle,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• {t('productNa2Page.howItWorks.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('productNa2Page.howItWorks.title')}
          </h2>
        </div>

        {/* Steps Grid - 3 top, 2 bottom */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Top row - 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {steps.slice(0, 3).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg p-1">
                      <div className="w-full h-full bg-[#EDF1FC] rounded flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-[#1B44FE]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom row - 2 steps, centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div></div>
            {steps.slice(3).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index + 3}
                  className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg p-1">
                      <div className="w-full h-full bg-[#EDF1FC] rounded flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-[#1B44FE]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connects with Section */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-6">{t('productNa2Page.howItWorks.connectsWith')}</h3>
          <div className="flex justify-center items-center">
            <img 
              src="/images/na2-communication.png" 
              alt="Communication platforms" 
              className="h-12 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
