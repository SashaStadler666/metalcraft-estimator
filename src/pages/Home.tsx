import React from 'react';
import { Carousel } from '@/components/Carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Wrench, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    title: "Corte a laser de fibra", 
    desc: "Precisão CNC para inox, carbono e alumínio.",
    icon: Zap
  },
  { 
    title: "Solda & Dobra", 
    desc: "Estruturas duráveis com acabamento superior.",
    icon: Wrench
  },
  { 
    title: "Fabricação de peças", 
    desc: "Projetos especiais sob demanda.",
    icon: Cog
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Carousel Banner */}
      <Carousel />

      {/* Services Summary Section */}
      <section className="section-spacing bg-gradient-metal">
        <div className="container-industrial">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em fabricação metálica com tecnologia avançada.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-border bg-white p-6 shadow-metal">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <Button
                      variant="industrial"
                      className="w-full group"
                      asChild
                    >
                      <Link to="/servicos">
                        Ver Detalhes
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}