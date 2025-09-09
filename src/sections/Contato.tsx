import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useStore, getWhatsAppLink } from '@/lib/store';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import facilityImage from '@/assets/facility-image.jpg';

export default function Contato() {
  const { brand } = useStore();

  return (
    <section id="contato" className="section-spacing bg-background">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para dar vida ao seu projeto? Nossa equipe está aqui para ajudar 
            você com soluções em fabricação metálica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-metal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      {brand.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefone</h3>
                    <p className="text-muted-foreground">
                      {brand.phone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-muted-foreground">
                      {brand.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda à Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                className="flex-1"
                asChild
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                asChild
              >
                <a href={`mailto:${brand.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>

          {/* Facility Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-industrial">
              <img 
                src={facilityImage}
                alt="Instalações da JJGans Metais - Equipamentos de corte a laser e fabricação metálica"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Nossas Instalações</h3>
                <p className="text-sm opacity-90">
                  Tecnologia de ponta para resultados excepcionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}