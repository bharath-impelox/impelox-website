import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      'Na2 Platform',
      'CRM',
      'Project Management',
      'Contact Form',
      'Calendar',
      'Pricing & Billing',
    ],
    Industries: [
      'Healthcare',
      'Hospitality',
      'Sales',
      'Insurance',
    ],
    'Bespoke Agent Development': [
      'Bespoke Agent Development',
      'Chatbot with RAG',
      'Workflow Automation',
      'AI SaaS Implementation',
    ],
    Company: [
      'About Impelox',
      'Careers',
      'Blog',
      'Contact',
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
              © 2026 Impelox Technologies. All rights reserved. Chennai, India
            </div>

            {/* Connect - Bottom Right */}
            <div className="text-gray-600 text-sm">
              Connect:{' '}
              <a href="mailto:hello@impelox.com" className="hover:text-gray-900 transition-colors">
                hello@impelox.com
              </a>
              {' | '}
              <a href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              {' | '}
              <a href="#" className="hover:text-gray-900 transition-colors">
                Schedule a Call
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
