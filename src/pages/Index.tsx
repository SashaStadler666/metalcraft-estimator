import React, { useState } from 'react';
import { StoreProvider } from '@/lib/store';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

const Index = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleQuoteClick = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setQuoteModalOpen(true);
  };

  const handleQuoteClose = () => {
    setQuoteModalOpen(false);
    setSelectedService('');
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header onQuoteClick={() => handleQuoteClick()} />
        <main>
          <HeroSection onQuoteClick={() => handleQuoteClick()} />
          <ServicesSection onQuoteClick={handleQuoteClick} />
          <ContactSection />
        </main>
        <Footer />
        <QuoteModal 
          open={quoteModalOpen} 
          onClose={handleQuoteClose}
          presetService={selectedService}
        />
      </div>
    </StoreProvider>
  );
};

export default Index;
