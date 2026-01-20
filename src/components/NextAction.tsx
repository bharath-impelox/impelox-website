import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NextAction: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white border m-[40px] rounded-lg py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className='text-[#0040C1]'>{t('nextAction.tag')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('nextAction.title')}</h2>
            <p className=" text-gray-600 leading-relaxed">
             {t('nextAction.description')}
            </p>
            <Link
              to="/product/na2"
              className="inline-block text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              {t('nextAction.exploreNa2')}
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div style={{ backgroundImage: 'url(/images/middle_bg.png)',
               backgroundSize: 'cover', backgroundPosition: 'center' }} className=" rounded-2xl p-8 relative overflow-hidden h-80 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6 transform rotate-6">
                <div className="text-center text-gray-400 text-sm">Product Image</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-6 transform -rotate-6 opacity-80">
                <div className="text-center text-gray-400 text-sm">Product Image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextAction;

