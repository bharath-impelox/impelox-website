import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHero from '../components/ServicesHero';
import WhatWeBuild from '../components/WhatWeBuild';
import WhatWeveBuilt from '../components/WhatWeveBuilt';
import NotSurePath from '../components/NotSurePath';
import OurEngagementProcess from '../components/OurEngagementProcess';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import ServicesCTA from '../components/ServicesCTA';

const Services = () => {
  return (
    <div className="app">
      <Header />
      <ServicesHero />
      <WhatWeBuild />
      <WhatWeveBuilt />
      <NotSurePath />
      <OurEngagementProcess />
      <WhyWorkWithUs />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;

