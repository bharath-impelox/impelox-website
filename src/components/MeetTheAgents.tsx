import React from 'react';
import { Calendar, MessageSquare, Bell, FileText, ClipboardCheck, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MeetTheAgents: React.FC = () => {
  const { t } = useTranslation();
  const agents = [
    {
      name: t('productNa2Page.meetAgents.agents.booking.name'),
      description: t('productNa2Page.meetAgents.agents.booking.description'),
      icon: Calendar,
    },
    {
      name: t('productNa2Page.meetAgents.agents.followUp.name'),
      description: t('productNa2Page.meetAgents.agents.followUp.description'),
      icon: MessageSquare,
    },
    {
      name: t('productNa2Page.meetAgents.agents.noShow.name'),
      description: t('productNa2Page.meetAgents.agents.noShow.description'),
      icon: Bell,
    },
    {
      name: t('productNa2Page.meetAgents.agents.leadResponse.name'),
      description: t('productNa2Page.meetAgents.agents.leadResponse.description'),
      icon: FileText,
    },
    {
      name: t('productNa2Page.meetAgents.agents.registration.name'),
      description: t('productNa2Page.meetAgents.agents.registration.description'),
      icon: ClipboardCheck,
    },
    {
      name: t('productNa2Page.meetAgents.agents.verification.name'),
      description: t('productNa2Page.meetAgents.agents.verification.description'),
      icon: ShieldCheck,
    },
    {
      name: t('productNa2Page.meetAgents.agents.reminder.name'),
      description: t('productNa2Page.meetAgents.agents.reminder.description'),
      icon: Clock,
    },
    {
      name: t('productNa2Page.meetAgents.agents.escalation.name'),
      description: t('productNa2Page.meetAgents.agents.escalation.description'),
      icon: UserCheck,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0040C1] text-sm mb-2">• {t('productNa2Page.meetAgents.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('productNa2Page.meetAgents.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('productNa2Page.meetAgents.description')}
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
          <span className='text-[#1B44FE]'>{t('productNa2Page.meetAgents.customAgent')}</span> {t('productNa2Page.meetAgents.customAgentDescription')}
        </p>
      </div>
    </section>
  );
};

export default MeetTheAgents;

