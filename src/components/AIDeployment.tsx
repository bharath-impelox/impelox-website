import React from 'react';
import { Check } from 'lucide-react';

const AIDeployment: React.FC = () => {
  const features = [
    'Custom AI Agents Development',
    'Chatbot Integration',
    'Machine Learning Solutions',
    'Business Process Automation',
    'Startup SaaS Development',
    'AI-First Transformation',
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Deploy AI Tailored for Your Use Case
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            80% of your requirements can be streamlined with NA2 and our other sub-platforms. If your business demands systems designed around your exact needs, data, and constraints, we can deliver that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              80% of your requirements can be streamlined with NA2 and our other sub-platforms. If your business demands systems designed around your exact needs, data, and constraints, we can deliver that.
            </p>
            <p className="text-gray-900 font-medium mb-6">
              No generic workflows, no locked-in platforms.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#D1E0FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#0040C1]" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card with Blur Effect */}
          <div className="relative">
            {/* Blurred background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl blur-2xl opacity-50 -z-10"></div>
            
            {/* Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-sm relative z-10 h-full flex items-center justify-center min-h-[400px]">
              <p className="text-gray-400 text-lg font-medium">IMAGE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDeployment;
