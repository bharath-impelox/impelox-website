import React from 'react';

const CaseStudy: React.FC = () => {
  const results = [
    { metric: 'No-shows', change: '↓34%', position: 'left' },
    { metric: 'After-hours bookings', change: '↑45%', position: 'left' },
    { metric: 'Phone time', change: '↓60%', position: 'right' },
    { metric: 'Patient rating', change: '4.8/5', position: 'right' },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="bg-gray-300 rounded-xl p-12 h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium">IMAGE</p>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Header with pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#0040C1] text-sm">•</span>
                <span className="text-[#0040C1] text-sm">NA2 IN ACTION</span>
              </div>
              <span className="text-sm shadow-sm bg-white font-medium p-2 rounded-xl">
                <span 
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }} 
                  className="text-white rounded-xl p-1 mr-1"
                >
                  Case study
                </span>
                5 full agents and automation
              </span>
            </div>

            {/* Title */}
            <h2 className="text-slate-800 text-4xl md:text-5xl font-bold">
              US Chiropractic Network
            </h2>

            {/* Problem Description */}
            <p className="text-slate-700text-lg leading-relaxed">
              Multi-location clinic losing revenue to no-shows, drowning in phone calls, missing after-hours bookings.
            </p>

            {/* Results Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#0040C1] text-sm">•</span>
                <h3 className="text-slate-800 font-semibold">Results</h3>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  {results.filter(r => r.position === 'left').map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-800">{result.metric}</span>
                      <span className="text-[#1B44FE] font-bold">{result.change}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {results.filter(r => r.position === 'right').map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-800">{result.metric}</span>
                      <span className="text-[#1B44FE] font-bold">{result.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium mt-4"
              style={{
                background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
              }}
            >
              Read Full Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
