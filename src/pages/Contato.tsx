import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import facilityImage from '@/assets/facility-image.jpg';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Contato via site – ${formData.nome}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem:\n${formData.mensagem}`
    );
    const mailtoLink = `mailto:jjgans@hotmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  const isFormValid = formData.nome.trim() && formData.email.trim() && formData.telefone.trim() && 
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="section-spacing">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para dar vida ao seu projeto? Nossa equipe está aqui para ajudar 
            você com soluções em fabricação metálica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <Card className="rounded-2xl border border-border bg-white shadow-metal">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Envie sua mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className={errors.nome ? 'border-red-500' : ''}
                      required
                    />
                    {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'border-red-500' : ''}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className={errors.telefone ? 'border-red-500' : ''}
                      required
                    />
                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      variant="industrial"
                      className="flex-1"
                      disabled={!isFormValid}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="whatsapp" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5541988511192?text=Olá,%20gostaria%20de%20um%20orçamento." 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Facility */}
          <div className="space-y-8">
            <Card className="shadow-metal rounded-2xl border border-border bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      BR 277, KM 105, 8751 – Vila Nova – Campo Largo – PR
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal rounded-2xl border border-border bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefone</h3>
                    <p className="text-muted-foreground">
                      +55 41 98851-1192
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal rounded-2xl border border-border bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-muted-foreground">
                      jjgans@hotmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-metal rounded-2xl border border-border bg-white">
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

            {/* Facility Image */}
            <div className="relative rounded-lg overflow-hidden shadow-industrial">
              <img 
                src={facilityImage}
                alt="Instalações da JJGans Metais - Equipamentos de corte a laser e fabricação metálica"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-bold mb-2">Nossas Instalações</h3>
                <p className="text-sm opacity-90">
                  Tecnologia de ponta para resultados excepcionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}