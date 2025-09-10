import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import siteContent from '@/content/site.json';

export default function Institucional() {
  return (
    <section id="institucional" className="section-spacing bg-gradient-metal scroll-mt-24">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {siteContent.institucional.title}
          </h2>
        </div>

        <Card className="shadow-metal max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              {siteContent.institucional.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-sm text-muted-foreground">Projetos Realizados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <p className="text-sm text-muted-foreground">Prazo de Resposta</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}