import React, { useState } from 'react';
import { StoreProvider } from '@/lib/store';
import { Carousel } from '@/components/Carousel';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Institucional from '@/sections/Institucional';
import Servicos from '@/sections/Servicos';
import Produtos from '@/sections/Produtos';
import Contato from '@/sections/Contato';
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
          <Carousel />
          <HeroSection onQuoteClick={() => handleQuoteClick()} />
          <Institucional />
          <Servicos onQuoteClick={handleQuoteClick} />
          <Produtos onQuoteClick={handleQuoteClick} />
          <Contato />
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
