import React from 'react';
import { Camera, LayoutGrid, ClipboardCheck, CalendarPlus, FileText, Percent, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductsHowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: Camera,
      title: t('productsPage.howItWorks.steps.contactCaptures'),
    },
    {
      icon: LayoutGrid,
      title: t('productsPage.howItWorks.steps.crmCreates'),
    },
    {
      icon: ClipboardCheck,
      title: t('productsPage.howItWorks.steps.na2Engages'),
    },
    {
      icon: CalendarPlus,
      title: t('productsPage.howItWorks.steps.calendarBooks'),
    },
    {
      icon: FileText,
      title: t('productsPage.howItWorks.steps.pmTracks'),
    },
    {
      icon: Percent,
      title: t('productsPage.howItWorks.steps.pricingSends'),
    },
    {
      icon: RotateCcw,
      title: t('productsPage.howItWorks.steps.na2Follows'),
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* SVG Gradient Definitions */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            {steps.map((_, index) => (
              <linearGradient key={index} id={`icon-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B44FE" />
                <stop offset="100%" stopColor="#5375FE" />
              </linearGradient>
            ))}
          </defs>
        </svg>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Title */}
          <div>
            <p className="text-[#0040C1] text-sm mb-2">• {t('productsPage.howItWorks.tag')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('productsPage.howItWorks.title')}
            </h2>
          </div>

          {/* Right - Workflow Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg p-4 flex items-center gap-4"
                  style={{
                    background: 'linear-gradient(90deg, #F6F8F9 0%, #F9FCFF 100%)'
                  }}
                >
                  {/* Icon with three layers: white bg, light blue bg, gradient icon */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <div className="w-full h-full bg-[#EDF1FC] rounded-lg flex items-center justify-center">
                      <IconComponent 
                        className="w-6 h-6"
                        style={{
                          stroke: `url(#icon-gradient-${index})`,
                          fill: 'none',
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium text-sm">{step.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connects with Section */}
        <div className="text-center mt-16">
          <h3 className="text-sm font-normal text-gray-500 mb-6">{t('productsPage.howItWorks.connectsWith')}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/images/na2-communication.png" alt="Communication Logos" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHowItWorks;

