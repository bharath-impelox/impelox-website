import React from 'react';
import { Camera, RotateCw, LayoutGrid, Plus, ClipboardCheck, CalendarPlus, FileText, MoreVertical, Percent, RotateCcw } from 'lucide-react';

const ProductsHowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Contact captures inquiry',
    },
    {
      icon: LayoutGrid,
      title: 'CRM creates lead automatically',
    },
    {
      icon: ClipboardCheck,
      title: 'Na2 engages instantly',
    },
    {
      icon: CalendarPlus,
      title: 'Calendar books the meeting',
    },
    {
      icon: FileText,
      title: 'PM tracks follow-ups',
    },
    {
      icon: Percent,
      title: 'Pricing and billing sends quote',
    },
    {
      icon: RotateCcw,
      title: 'Na2 follows up until paid',
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
            <p className="text-[#0040C1] text-sm mb-2">• HOW IT WORKS TOGETHER</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From first contact to payment - fully automated
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
          <h3 className="text-sm font-normal text-gray-500 mb-6">Connects with</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/images/na2-communication.png" alt="Communication Logos" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHowItWorks;

