import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerLinks = {
    [t('footer.product')]: [
      t('footer.na2Platform'),
      t('footer.crm'),
      t('footer.projectManagement'),
      t('footer.contactForm'),
      t('footer.calendar'),
      t('footer.pricingBilling'),
    ],
    [t('footer.industries')]: [
      t('footer.healthcare'),
      t('footer.hospitality'),
      t('footer.sales'),
      t('footer.insurance'),
    ],
    [t('footer.bespokeAgentDevelopment')]: [
      t('footer.bespokeAgentDevelopment'),
      t('footer.chatbotRAG'),
      t('footer.workflowAutomation'),
      t('footer.aiSaaSImplementation'),
    ],
    [t('footer.company')]: [
      t('footer.aboutImpelox'),
      t('footer.careers'),
      t('footer.blog'),
      t('footer.contact'),
    ],
  };

  return (
    <footer className="bg-white" >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <img 
              src="/images/logo.png" 
              alt="Impelox Logo" 
              className="h-12 mb-4"
            />
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-gray-900 mb-4 text-sm">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright - Bottom Left */}
            <div className="text-gray-600 text-sm">
              {t('footer.copyright')}
            </div>

            {/* Connect - Bottom Right */}
            <div className="text-gray-600 text-sm">
              {t('footer.connect')}{' '}
              <a href="mailto:hello@impelox.com" className="hover:text-gray-900 transition-colors">
                hello@impelox.com
              </a>
              {' | '}
              <a href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              {' | '}
              <a href="#" className="hover:text-gray-900 transition-colors">
                {t('footer.scheduleCall')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom dark gray bar */}
      <div className="bg-gray-800 h-1"></div>
    </footer>
  );
};

export default Footer;
