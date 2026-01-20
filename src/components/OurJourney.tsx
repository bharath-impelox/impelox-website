import React from 'react';
import { useTranslation } from 'react-i18next';

const OurJourney: React.FC = () => {
  const { t } = useTranslation();
  const milestones = [
    {
      year: '2021',
      title: t('aboutPage.ourJourney.milestones.2021.title'),
      description: t('aboutPage.ourJourney.milestones.2021.description'),
      side: 'right',
    },
    {
      year: '2022',
      title: t('aboutPage.ourJourney.milestones.2022.title'),
      description: t('aboutPage.ourJourney.milestones.2022.description'),
      side: 'left',
    },
    {
      year: '2023',
      title: t('aboutPage.ourJourney.milestones.2023a.title'),
      description: t('aboutPage.ourJourney.milestones.2023a.description'),
      side: 'right',
    },
    {
      year: '2023',
      title: t('aboutPage.ourJourney.milestones.2023b.title'),
      description: t('aboutPage.ourJourney.milestones.2023b.description'),
      side: 'left',
    },
    {
      year: '2025',
      title: t('aboutPage.ourJourney.milestones.2025.title'),
      description: t('aboutPage.ourJourney.milestones.2025.description'),
      side: 'right',
    },
    {
      year: '2026',
      title: t('aboutPage.ourJourney.milestones.2026.title'),
      description: t('aboutPage.ourJourney.milestones.2026.description'),
      side: 'left',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          {t('aboutPage.ourJourney.title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start"
                >
                  {/* Left side content */}
                  {milestone.side === 'left' && (
                    <>
                      <div className="w-[45%] text-right pr-8">
                        <div className=" text-2xl font-bold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                      <div className="w-[10%] flex items-center justify-center relative">
                        {/* Horizontal dashed line from dot to left (towards content) */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 border-t-2 border-dashed border-gray-300"></div>
                        {/* Dot on timeline */}
                        <div 
                          className="w-3 h-3 rounded-full z-10 relative"
                          style={{
                            background: 'linear-gradient(129deg, #1B44FE 0%, #5375FE 66.07%, #1B44FE 100%)'
                          }}
                        ></div>
                      </div>
                      <div className="w-[45%]"></div>
                    </>
                  )}

                  {/* Right side content */}
                  {milestone.side === 'right' && (
                    <>
                      <div className="w-[45%]"></div>
                      <div className="w-[10%] flex items-center justify-center relative">
                        {/* Horizontal dashed line from dot to right (towards content) */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-0.5 border-t-2 border-dashed border-gray-300"></div>
                        {/* Dot on timeline */}
                        <div 
                          className="w-3 h-3 rounded-full z-10 relative"
                          style={{
                            background: 'linear-gradient(129deg, #1B44FE 0%, #5375FE 66.07%, #1B44FE 100%)'
                          }}
                        ></div>
                      </div>
                      <div className="w-[45%] text-left pl-8">
                        <div className=" text-2xl font-bold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
