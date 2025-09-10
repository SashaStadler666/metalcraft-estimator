import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { Phone, Mail, MessageCircle, Calculator } from 'lucide-react';
import siteContent from '@/content/site.json';

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const { brand } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    siteContent.navigation.items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-metal border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-industrial">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">
                {brand.name}
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Precisão em Metais
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteContent.navigation.items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/5 px-3 py-1 rounded-full'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{brand.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{brand.email}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="quote"
              size="sm"
              onClick={onQuoteClick}
              className="hidden sm:inline-flex"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Orçamento
            </Button>
            
            <Button
              variant="whatsapp"
              size="sm"
              asChild
            >
              <a 
                href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de mais informações sobre seus serviços.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>

            {/* Mobile Quote Button */}
            <Button
              variant="industrial"
              size="sm"
              onClick={onQuoteClick}
              className="sm:hidden"
            >
              <Calculator className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}