import React from 'react';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('aboutPage.hero.description')}
          </p>
        </div>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-10 gap-8 max-w-6xl mx-auto mt-12">
          {/* Left - Image (40%) */}
          <div    style={{
            backgroundImage: 'url(/images/about_hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} className="col-span-4 rounded-lg relative">
           
          </div>

          {/* Right - Vision and Mission Cards (60%) */}
          <div className="col-span-6 space-y-4 flex flex-col">
            {/* Vision Card - White (Bigger) */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex-1 flex flex-col">
              <div className="w-10 h-10 bg-[#EDF1FC] rounded-lg flex items-center justify-center mb-auto">
                <Eye className="w-5 h-5 text-[#1B44FE]" />
              </div>
              <div className="mt-20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#1B44FE] text-sm">•</span>
                  <h3 className="text-[#1B44FE] font-bold text-sm uppercase">{t('aboutPage.hero.vision.tag')}</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t('aboutPage.hero.vision.text')}
                </p>
              </div>
            </div>

            {/* Mission Card - Blue (Smaller) */}
            <div 
              className="rounded-xl p-6 shadow-sm bg-[#466CF3]"
              
            >
              <div className="flex items-start gap-4">
       
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-sm">•</span>
                    <h3 className="text-white font-bold text-sm uppercase">{t('aboutPage.hero.mission.tag')}</h3>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {t('aboutPage.hero.mission.text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
