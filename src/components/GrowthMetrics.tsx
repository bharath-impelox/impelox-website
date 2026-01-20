import React from 'react';
import { useTranslation } from 'react-i18next';

const GrowthMetrics: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl font-bold text-gray-400">X</div>
        <div className="absolute top-40 right-40 text-6xl font-bold text-gray-400">+</div>
        <div className="absolute bottom-20 left-1/3 text-6xl font-bold text-gray-400">X</div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#0040C1] text-sm">•</span>
            <p className="text-[#0040C1] text-sm">{t('aboutPage.growthMetrics.tag')}</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t('aboutPage.growthMetrics.title')}
          </h2>
        </div>

        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Top Row */}
          {/* Card 1 - Tablet Image */}
          <div className="md:col-span-4 rounded-xl overflow-hidden  min-h-[180px]">
            <img 
              src="/images/tablet_card.png" 
              alt="Tablet card" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 - 1M ↑ */}
          <div 
            className="md:col-span-4 bg-white p-8 shadow-sm min-h-[180px] flex items-center"
            style={{ borderRadius: '5.75rem' }}
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[#2970FF] text-5xl font-bold">{t('aboutPage.growthMetrics.oneMillion')}</span>
              <span className="text-[#2970FF] text-5xl font-bold">↑</span>
            </div>
            <div className="ml-4 text-gray-600 text-sm">
              <div>{t('aboutPage.growthMetrics.supportPlatformUsersLine1')}</div>
              <div>{t('aboutPage.growthMetrics.supportPlatformUsersLine2')}</div>
            </div>
          </div>

          {/* Card 3 - Tablet Image */}
          <div className="md:col-span-4 rounded-xl overflow-hidden  min-h-[180px]">
            <img 
              src="/images/tablet_card.png" 
              alt="Tablet card" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row */}
          {/* Card 4 - 500k+ */}
          <div 
            className="md:col-span-5 bg-white p-8 shadow-sm min-h-[180px] flex items-center"
            style={{ borderRadius: '5.75rem' }}
          >
            <div className="text-[#2970FF] text-5xl font-bold flex-shrink-0">{t('aboutPage.growthMetrics.fiveHundredK')}</div>
            <div className="ml-4 text-gray-600 text-sm">
              <div>{t('aboutPage.growthMetrics.revenueGeneratingLine1')}</div>
              <div>{t('aboutPage.growthMetrics.revenueGeneratingLine2')}</div>
            </div>
          </div>

          {/* Card 5 - Tablet Image (Smaller) */}
          <div className="md:col-span-2 rounded-xl overflow-hidden  min-h-[180px] relative z-10">
            <img 
              src="/images/tablet_card_single.png" 
              alt="Tablet card" 
              className="w-full h-full "
            />
          </div>

          {/* Card 6 - Blue Gradient */}
          <div 
            className="md:col-span-5 rounded-2xl p-8 shadow-sm min-h-[180px] flex flex-col justify-center text-white"
            style={{
              background: 'linear-gradient(97.66deg, #2D58D9 45%, #BFD7FF 100%)'
            }}
          >
            <div className="text-white text-5xl font-bold mb-2">{t('aboutPage.growthMetrics.three')}</div>
            <div className="text-white/90 text-sm">
              <div>{t('aboutPage.growthMetrics.globalMarket')}</div>
              <div>{t('aboutPage.growthMetrics.countries')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;
