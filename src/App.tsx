import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { ServicesOverview } from './components/ServicesOverview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostEstimator } from './components/CostEstimator';
import { ProcessTimeline } from './components/ProcessTimeline';
import { IndustriesServed } from './components/IndustriesServed';
import { InfrastructureTech } from './components/InfrastructureTech';
import { VisionMission } from './components/VisionMission';
import { Roadmap } from './components/Roadmap';
import { LeadershipTeam } from './components/LeadershipTeam';
import { BusinessImpact } from './components/BusinessImpact';
import { ContactEnquiry } from './components/ContactEnquiry';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { LegalModals } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';
import type { ServiceItem } from './types';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Pre-fill parameters when user interacts with cost estimator or service modal
  const [enquiryService, setEnquiryService] = useState('');
  const [enquiryVolume, setEnquiryVolume] = useState('');
  const [enquiryMessage, setEnquiryMessage] = useState('');

  const handleOpenQuoteModal = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleRequestQuoteForService = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    setEnquiryMessage(`I am interested in detailed pricing and operational setup for ${serviceTitle}.`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillFromEstimator = (service: string, volume: string, note: string) => {
    setEnquiryService(service);
    setEnquiryVolume(volume);
    setEnquiryMessage(note);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#252B35] flex flex-col selection:bg-[#F28C28] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Company Introduction Section */}
        <CompanyIntro onLearnMore={handleLearnMore} />

        {/* Services Overview Section */}
        <ServicesOverview onSelectService={handleSelectService} />

        {/* Why Choose Shresth Warehouse Section */}
        <WhyChooseUs />

        {/* Interactive Fulfillment Cost Estimator */}
        <CostEstimator onPreFillEnquiry={handlePreFillFromEstimator} />

        {/* Our Fulfillment Process Timeline */}
        <ProcessTimeline />

        {/* Industries We Serve Section */}
        <IndustriesServed />

        {/* Infrastructure & Technology Capabilities Section */}
        <InfrastructureTech />

        {/* Vision & Mission Section */}
        <VisionMission />

        {/* Growth & Future Roadmap Section */}
        <Roadmap />

        {/* Leadership Team Section */}
        <LeadershipTeam />

        {/* Regional Commerce & Business Impact Section */}
        <BusinessImpact />

        {/* Contact Page & Enquiry Section */}
        <ContactEnquiry
          initialService={enquiryService}
          initialVolume={enquiryVolume}
          initialMessage={enquiryMessage}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Dark Navy Corporate Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuoteForService}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Action Buttons (WhatsApp & Quick Call) */}
      <FloatingActions />
    </div>
  );
}

export default App;
