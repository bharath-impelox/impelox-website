import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersHero from '../components/CareersHero';
import OurCulture from '../components/OurCulture';
import OurValues from '../components/OurValues';
import CareersCTA from '../components/CareersCTA';

const Careers = () => {
  return (
    <div className="app">
      <Header />
      <CareersHero />
      <OurCulture />
      <OurValues />
      <CareersCTA />
      <Footer />
    </div>
  );
};

export default Careers;

