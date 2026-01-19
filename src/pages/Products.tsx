import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import ProductTabs from '../components/ProductTabs';
import ProductDetail from '../components/ProductDetail';
import ProductsHowItWorks from '../components/ProductsHowItWorks';
import ProductsCTA from '../components/ProductsCTA';
import { LayoutGrid, ClipboardList, FileText, Calendar, DollarSign } from 'lucide-react';

const Products = () => {
  const products = [
    { id: 'crm', name: 'CRM', icon: LayoutGrid },
    { id: 'project-management', name: 'Project Management', icon: ClipboardList },
    { id: 'contact-form', name: 'Contact form', icon: FileText },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'pricing-billing', name: 'Pricing & Billing', icon: DollarSign },
  ];

  const productDetails = {
    crm: {
      id: 'crm',
      name: 'CRM',
      tag: '• Reimagined for AI Execution',
      title: 'CRM',
      description: 'Centralizes customer data, tracks lifecycle stages, records every interaction.',
      withNa2: 'Auto-updates, auto-follow-ups — leads that go cold get re-engaged automatically',
      standalone: 'Track customers manually',
    },
    'project-management': {
      id: 'project-management',
      name: 'Project Management',
      tag: '• Reimagined for AI Execution',
      title: 'Project Management',
      description: 'Organize tasks, track progress, manage deadlines across teams.',
      withNa2: 'Tasks move forward automatically, deadlines are tracked and escalated',
      standalone: 'Manual task tracking and updates',
    },
    'contact-form': {
      id: 'contact-form',
      name: 'Contact Form',
      tag: '• Reimagined for AI Execution',
      title: 'Contact Form',
      description: 'Capture inquiries, collect information, route to the right team.',
      withNa2: 'Automatically routes and responds to inquiries instantly',
      standalone: 'Manual form processing and routing',
    },
    calendar: {
      id: 'calendar',
      name: 'Calendar',
      tag: '• Reimagined for AI Execution',
      title: 'Calendar',
      description: 'Schedule meetings, manage availability, send reminders.',
      withNa2: 'Auto-schedules, prevents conflicts, sends smart reminders',
      standalone: 'Manual scheduling and reminders',
    },
    'pricing-billing': {
      id: 'pricing-billing',
      name: 'Pricing & Billing',
      tag: '• Reimagined for AI Execution',
      title: 'Pricing & Billing',
      description: 'Generate quotes, process payments, manage subscriptions.',
      withNa2: 'Auto-generates quotes, processes payments, follows up on invoices',
      standalone: 'Manual quote generation and payment tracking',
    },
  };

  const [activeProduct, setActiveProduct] = useState('crm');

  return (
    <div className="app">
      <Header />
      <ProductsHero />
      
      {/* Product Tabs Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto">
          {/* Autonomy Indicator - Top */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#1B44FE] font-medium text-sm whitespace-nowrap">With Na2</span>
              {/* Toggle Switch */}
              <div className="relative inline-flex items-center">
                <div className="w-10 h-5 bg-gray-900 rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-[#1B44FE] rounded-full"></div>
                </div>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Standalone</span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Now fully autonomous
              </h3>
              <p className="text-gray-600">
                Great alone. Unstoppable together. 24/7 performance across your entire workflow.
              </p>
            </div>
          </div>

          <ProductTabs 
            products={products}
            activeProduct={activeProduct}
            onProductChange={setActiveProduct}
          />
          <ProductDetail product={productDetails[activeProduct as keyof typeof productDetails]} />
        </div>
      </section>

      <ProductsHowItWorks />
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default Products;

