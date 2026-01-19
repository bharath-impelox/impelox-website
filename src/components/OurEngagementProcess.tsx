import React from 'react';

const OurEngagementProcess: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• HOW WE WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Engagement Process
          </h2>
        </div>

        <div className="flex justify-center">
          <img 
            src="/images/engagement.png" 
            alt="Our Engagement Process" 
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurEngagementProcess;

