import React from 'react';

const OurJourney: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Started our journey in Contextual Intelligence and SaaS',
      side: 'right',
    },
    {
      year: '2022',
      title: 'AI-First Video Interview Platform',
      description: 'Developed our first custom AI solution for video interviews and Hiring automation',
      side: 'left',
    },
    {
      year: '2023',
      title: 'First AI Chatbot with RAG and LLM',
      description: 'Built our first AI chatbot with RAG and LLM with Pharma and Avatar AI for Customer Support',
      side: 'right',
    },
    {
      year: '2023',
      title: 'Enterprise Growth',
      description: 'Expanded into industries such as Insurance and focused on accuracy, scale and security',
      side: 'left',
    },
    {
      year: '2025',
      title: 'Voice Agents and Workflow Automation',
      description: 'Developed voice agents and workflow automation for E-Commerce and Healthcare',
      side: 'right',
    },
    {
      year: '2026',
      title: 'Full-funnel Customer Engagement',
      description: 'Started building user-centric AI workflows for end-to-end sales and support operations',
      side: 'left',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Our Journey So Far
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
