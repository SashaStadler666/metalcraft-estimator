import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStore } from '@/lib/store';
import { Award, Users, Target, Shield } from 'lucide-react';

export default function Institucional() {
  const { brand } = useStore();

  const values = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em cada projeto executado'
    },
    {
      icon: Users,
      title: 'Experiência',
      description: 'Equipe especializada com anos de experiência no mercado'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Tecnologia avançada para resultados de alta precisão'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Parceiro de confiança para suas necessidades industriais'
    }
  ];

  return (
    <section id="institucional" className="section-spacing bg-muted/30">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a JJGans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Especialistas em fabricação metálica com tecnologia de ponta e 
            compromisso com a excelência em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Tradição e Inovação em Fabricação Metálica
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A JJGans Metais e Serviços é uma empresa especializada em soluções completas 
              para fabricação metálica, localizada em Campo Largo, PR. Com anos de experiência 
              no mercado, oferecemos serviços de corte a laser, solda, dobra e fabricação de 
              peças customizadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso diferencial está na combinação de tecnologia de ponta com a experiência 
              de profissionais qualificados, garantindo resultados que superam as expectativas 
              dos nossos clientes em diversos segmentos industriais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com os principais materiais do mercado - inox, aço carbono e alumínio - 
              sempre com foco na qualidade, precisão e pontualidade na entrega.
            </p>
          </div>

          <div className="relative">
            <Card className="shadow-industrial">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Nossa Missão</h4>
                  <p className="text-muted-foreground">
                    Fornecer soluções em fabricação metálica com qualidade superior, 
                    tecnologia avançada e atendimento personalizado, superando as 
                    expectativas dos nossos clientes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center shadow-metal hover:shadow-industrial transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Localização Estratégica
            </h3>
            <p className="text-lg opacity-90 mb-4">
              {brand.address}
            </p>
            <p className="opacity-80">
              Posição privilegiada na BR-277 para melhor atendimento à região metropolitana 
              de Curitiba e todo o estado do Paraná.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}