import React from 'react';
import { Target, Eye } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Businesses<br />to Go AI-First
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are driven by a passion for designing and deploying smart AI agents and automation systems that reduce repetitive work, make decisions based on data, and create better customer experiences.
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
                  <h3 className="text-[#1B44FE] font-bold text-sm uppercase">OUR VISION</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  To build a future where technology works quietly in the background, removing friction from everyday business operations without manual effort.
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
                    <h3 className="text-white font-bold text-sm uppercase">OUR MISSION</h3>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    To empower businesses to run on AI agents by placing them at the center of their principal workflows, decisions, and customer interactions.
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
