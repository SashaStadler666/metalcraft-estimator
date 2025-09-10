import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Wrench, Cog, ArrowRight } from 'lucide-react';
import siteContent from '@/content/site.json';

interface ServicosProps {
  onQuoteClick: (service: string) => void;
}

const serviceIcons = {
  'Corte a Laser': Zap,
  'Solda & Dobra': Wrench,
  'Fabricação de Peças': Cog,
};

export default function Servicos({ onQuoteClick }: ServicosProps) {
  const services = siteContent.services;

  return (
    <section id="servicos" className="section-spacing bg-gradient-metal scroll-mt-24">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em fabricação metálica com tecnologia avançada e 
            profissionais especializados para atender suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.name as keyof typeof serviceIcons] || Cog;
            
            return (
              <Card key={service.id} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Materiais:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.materials.map((material) => (
                        <span
                          key={material}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant="industrial"
                    className="w-full group"
                    onClick={() => onQuoteClick(service.name)}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-border shadow-metal">
            <h3 className="text-2xl font-bold mb-4">
              Por que escolher a JJGans?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  Tecnologia Avançada
                </h4>
                <p className="text-sm text-muted-foreground">
                  Equipamentos de última geração para máxima precisão e qualidade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-primary" />
                  Experiência Comprovada
                </h4>
                <p className="text-sm text-muted-foreground">
                  Anos de experiência atendendo diversos segmentos industriais.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Cog className="w-5 h-5 mr-2 text-primary" />
                  Soluções Customizadas
                </h4>
                <p className="text-sm text-muted-foreground">
                  Projetos sob medida para atender suas especificações técnicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}