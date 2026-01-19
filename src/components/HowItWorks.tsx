import React from 'react';
import { MessageSquare, Route, ClipboardList, Database, AlertCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Customer Reaches Out',
      description: 'Any channel',
      icon: MessageSquare,
    },
    {
      number: '2',
      title: 'Intent Detected',
      description: 'Na2 routes to the right agent',
      icon: Route,
    },
    {
      number: '3',
      title: 'Agent Engages',
      description: 'Task handled automatically',
      icon: ClipboardList,
    },
    {
      number: '4',
      title: 'Action Executed',
      description: 'Data synced to your systems',
      icon: Database,
    },
    {
      number: '5',
      title: 'Escalation When Needed',
      description: 'Humans get full context',
      icon: AlertCircle,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From inquiry to resolution
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
          <h3 className="text-lg font-medium text-gray-700 mb-6">Connects with</h3>
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
