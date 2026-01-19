import React from 'react';

const CareersCTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/na2-bottom-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Decorative wave shapes */}
          <div className="absolute inset-0 opacity-20 z-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 640" preserveAspectRatio="none">
                <path
                  d="M0,200 Q360,150 720,200 T1440,200 L1440,640 L0,640 Z"
                  fill="white"
                  opacity="0.3"
                />
                <path
                  d="M0,300 Q360,250 720,300 T1440,300 L1440,640 L0,640 Z"
                  fill="white"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-[#0040C1] text-sm mb-4">• JOIN US</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Build Your Career Here!
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              If you're looking for meaningful work, supportive teammates, and a culture that values your professional growth, we'd love to hear from you.
            </p>

            <button
              className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-base whitespace-nowrap"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Send your CV →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
