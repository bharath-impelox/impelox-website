import React from 'react';
import { Calendar, MessageSquare, Bell, FileText, ClipboardCheck, ShieldCheck, Clock, UserCheck } from 'lucide-react';

const MeetTheAgents: React.FC = () => {
  const agents = [
    {
      name: 'Booking Agent',
      description: 'Schedules across multiple calendars',
      icon: Calendar,
    },
    {
      name: 'Follow-Up Agent',
      description: 'Post-visit check-ins and rebooking',
      icon: MessageSquare,
    },
    {
      name: 'No-Show Prevention Agent',
      description: 'Smart reminders, at-risk intervention',
      icon: Bell,
    },
    {
      name: 'Lead Response Agent',
      description: 'Instant engagement, qualification',
      icon: FileText,
    },
    {
      name: 'Registration Agent',
      description: 'Intake forms, data collection',
      icon: ClipboardCheck,
    },
    {
      name: 'Verification Agent',
      description: 'Insurance and eligibility confirmation',
      icon: ShieldCheck,
    },
    {
      name: 'Reminder Agent',
      description: 'Timely, channel-appropriate reminders',
      icon: Clock,
    },
    {
      name: 'Escalation Agent',
      description: 'Routes complex issues to humans',
      icon: UserCheck,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• PRODUCTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each agent is a specialist. Together, they run your entire customer operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {/* First 6 agents in 3x2 grid */}
          {agents.slice(0, 6).map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className="bg-[#F6F8F9] border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Last 2 agents in separate row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <div></div>
          {agents.slice(6).map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index + 6}
                className="bg-[#F6F8F9] border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {agent.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-600 text-sm">
          <span className='text-[#1B44FE]'>Need a custom agent?</span> We build bespoke agents for specific workflows.
        </p>
      </div>
    </section>
  );
};

export default MeetTheAgents;

