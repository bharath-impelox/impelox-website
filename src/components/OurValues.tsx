import React from 'react';
import { FileText, Network, ClipboardCheck } from 'lucide-react';

const OurValues: React.FC = () => {
  const values = [
    {
      icon: FileText,
      title: 'Clarity Over Complexity',
      description: 'We value clear thinking and simple solutions. If something can be explained simply, it usually works better.',
    },
    {
      icon: Network,
      title: 'Respect for People & Time',
      description: 'We work with empathy and professionalism. Everyone\'s contribution matters.',
    },
    {
      icon: ClipboardCheck,
      title: 'Build for the Long Term',
      description: 'We focus on quality, sustainability, and decisions that make sense beyond short-term wins.',
    },
  ];

  const lifeAtImpelox = [
    'Young Teams With Real Responsibility',
    'Direct Exposure To Customers And Real Problems',
    'Open Discussions And Honest Feedback',
    'Space To Grow, Experiment, And Take On New Challenges',
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Our Values Section */}
        <div className="mb-16">
          <p className="text-[#0040C1] text-sm mb-2 text-center">• OUR VALUES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            From inquiry to resolution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  {/* Icon with light blue background and white border */}
                  <div className="w-12 h-12 bg-[#EDF1FC] rounded-lg flex items-center justify-center flex-shrink-0 border border-white">
                    <IconComponent className="w-6 h-6 text-[#1B44FE]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Life at Impelox Section */}
        <div 
          className="border border-gray-200 rounded-xl p-8"
          style={{
            background: 'linear-gradient(103.46deg, #FAFAFA 0%, #E9F1FF 100%)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Empty white space for image */}
            <div className="bg-white rounded-lg min-h-[300px] flex items-center justify-center">
              <p className="text-gray-400 text-sm">Image placeholder</p>
            </div>

            {/* Right - Life at Impelox content */}
            <div>
              <p className="text-[#0040C1] text-sm mb-2 uppercase">• LIFE AT IMPELOX</p>
              <p className="text-lg text-gray-900 mb-6 leading-relaxed">
                We move fast when needed, slow down when it matters, and always aim to improve.
              </p>
              <ul className="space-y-3">
                {lifeAtImpelox.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1B44FE] rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

