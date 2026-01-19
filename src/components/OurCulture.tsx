import React from 'react';
import { Sparkles, BarChart3, Headphones, BookOpen } from 'lucide-react';

const OurCulture: React.FC = () => {
  const cultureItems = [
    {
      icon: Sparkles,
      title: 'We Care About How Work Gets Done',
      description: 'We believe great outcomes come from strong fundamentals—clear thinking, good communication, and respect for each other\'s time and effort. We move with purpose, and focus on doing the work.',
    },
    {
      icon: BarChart3,
      title: 'Ownership Over Control',
      description: 'People at Impelox are trusted to own their work. We value initiative, accountability, and decision-making at every level. You\'re encouraged to speak up, take responsibility, and help shape how we grow.',
    },
    {
      icon: Headphones,
      title: 'Collaboration Is the Default',
      description: 'We work closely across teams. Engineers talk to customers. Product works with business teams. Ideas are shared openly, and feedback is part of how we improve—not something to avoid.',
    },
    {
      icon: BookOpen,
      title: 'Learning Through Doing',
      description: 'You don\'t need to know everything on day one. We believe in learning through doing, asking questions, and improving continuously. Growth here is practical and hands-on.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our culture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cultureItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Multi-layer background effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full blur-xl"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon with white background and gradient layer */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg p-1">
                      <div 
                        className="w-full h-full rounded flex items-center justify-center"
                        style={{
                          background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCulture;

