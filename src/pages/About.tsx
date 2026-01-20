import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import GrowthMetrics from '../components/GrowthMetrics';
import CoreValues from '../components/CoreValues';
import OurJourney from '../components/OurJourney';
import MeetFounders from '../components/MeetFounders';
import AboutCTA from '../components/AboutCTA';
import AIDeployment from '../components/AIDeployment';
import ContactForm from '../components/ContactForm';
// import TrustedBrands from '../components/TrustedBrands';

const About = () => {
  return (
    <div className="app">
      <Header />
      <AboutHero />
      <GrowthMetrics />
      <CoreValues />
      <OurJourney />
      <MeetFounders />
      <AboutCTA />
      <AIDeployment />
      <ContactForm />
      {/* <TrustedBrands /> */}
      <Footer />
    </div>
  );
};

export default About;

