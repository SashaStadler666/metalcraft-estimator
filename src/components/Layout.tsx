import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header onQuoteClick={handleQuoteClick} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <QuoteModal 
        open={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}