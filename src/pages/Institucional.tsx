import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Institucional() {
  return (
    <div className="section-spacing">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Institucional
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa empresa e nossa história na fabricação metálica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl border border-border bg-white p-6 shadow-metal">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Somos especialistas em corte a laser de fibra, solda, dobra e fabricação de peças sob medida.
                </p>
                <p>
                  Alinhamos repetibilidade CNC, prazos competitivos e atendimento próximo para os segmentos industrial, residencial e comercial.
                </p>
                <p>
                  Nossa empresa está comprometida em oferecer soluções de alta qualidade, utilizando tecnologia de ponta e uma equipe experiente para garantir que cada projeto seja executado com precisão e dentro dos mais altos padrões de qualidade.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="rounded-2xl border border-border bg-white p-6 shadow-metal">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Fornecer soluções em fabricação metálica com precisão, qualidade e agilidade, 
                  superando as expectativas dos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border border-border bg-white p-6 shadow-metal">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência em soluções metálicas na região, 
                  através da inovação e excelência em nossos serviços.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}