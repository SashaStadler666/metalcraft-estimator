import React from 'react';
import { Button } from '@/components/ui/button';
import { useStore, getWhatsAppLink } from '@/lib/store';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

export default function HeroSection({ onQuoteClick }: HeroSectionProps) {
  const { brand } = useStore();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-industrial opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-industrial text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Precisão em</span>
            <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Corte a Laser
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Tecnologia de ponta em fabricação metálica. Corte a laser, solda, dobra e fabricação de peças 
            em inox, aço carbono e alumínio com a qualidade que você precisa.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Tecnologia Laser</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Qualidade Garantida</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Entrega Rápida</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="industrial"
              size="lg"
              onClick={onQuoteClick}
              className="text-lg px-8 py-4 h-auto"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Location Badge */}
          <div className="mt-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Campo Largo - PR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}