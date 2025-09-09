import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useStore, formatBRL, getWhatsAppLink } from '@/lib/store';
import { MessageCircle, Calculator } from 'lucide-react';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function QuoteModal({ open, onClose, presetService }: QuoteModalProps) {
  const { brand, services } = useStore();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: presetService || 'Corte a Laser',
    material: 'Inox',
    espessura: 3,
    area: 0.15,
    quantidade: 1,
    mensagem: '',
  });
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (presetService) {
      setFormData(prev => ({ ...prev, servico: presetService }));
    }
  }, [presetService]);

  const calculateEstimate = () => {
    const materialPrices: Record<string, number> = {
      'Inox': 320,
      'Aço Carbono': 220,
      'Alumínio': 280,
    };
    
    const basePrice = materialPrices[formData.material] || 280;
    const thicknessFactor = 1 + (Math.max(1, formData.espessura) - 1) * 0.06;
    return basePrice * formData.area * thicknessFactor * formData.quantidade;
  };

  const isFormValid = () => {
    return (
      formData.nome.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.telefone.trim() &&
      formData.espessura >= 1 &&
      formData.area > 0 &&
      formData.quantidade >= 1
    );
  };

  const handleSubmit = () => {
    setTouched(true);
    if (!isFormValid()) return;

    const emailBody = `Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}
Serviço: ${formData.servico}
Material: ${formData.material}
Espessura: ${formData.espessura}mm
Área: ${formData.area}m²
Quantidade: ${formData.quantidade}

Mensagem:
${formData.mensagem}`;

    window.location.href = `mailto:${brand.email}?subject=Orçamento – ${formData.servico} – ${formData.nome}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Solicitar Orçamento</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
              className={touched && !formData.nome.trim() ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@exemplo.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={touched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              type="tel"
              placeholder="(41) 9 8888-8888"
              value={formData.telefone}
              onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
              className={touched && !formData.telefone.trim() ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="servico">Serviço</Label>
            <Select value={formData.servico} onValueChange={(value) => setFormData(prev => ({ ...prev, servico: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {services.map(service => (
                  <SelectItem key={service.id} value={service.name}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="material">Material</Label>
            <Select value={formData.material} onValueChange={(value) => setFormData(prev => ({ ...prev, material: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Inox">Inox</SelectItem>
                <SelectItem value="Aço Carbono">Aço Carbono</SelectItem>
                <SelectItem value="Alumínio">Alumínio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="espessura">Espessura (mm)</Label>
            <Input
              id="espessura"
              type="number"
              min="1"
              step="1"
              value={formData.espessura}
              onChange={(e) => setFormData(prev => ({ ...prev, espessura: Number(e.target.value) }))}
              className={touched && formData.espessura < 1 ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Área (m²)</Label>
            <Input
              id="area"
              type="number"
              min="0.01"
              step="0.01"
              value={formData.area}
              onChange={(e) => setFormData(prev => ({ ...prev, area: Number(e.target.value) }))}
              className={touched && formData.area <= 0 ? 'border-destructive' : ''}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantidade">Quantidade</Label>
            <Input
              id="quantidade"
              type="number"
              min="1"
              value={formData.quantidade}
              onChange={(e) => setFormData(prev => ({ ...prev, quantidade: Number(e.target.value) }))}
              className={touched && formData.quantidade < 1 ? 'border-destructive' : ''}
            />
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Label htmlFor="mensagem">Descreva seu projeto</Label>
          <Textarea
            id="mensagem"
            placeholder="Ex.: peça em inox 304, tolerância ±0,2 mm, acabamento escovado, incluir dobra..."
            value={formData.mensagem}
            onChange={(e) => setFormData(prev => ({ ...prev, mensagem: e.target.value }))}
            className="h-24"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 p-4 bg-secondary rounded-lg">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">
              Estimativa: {formatBRL(calculateEstimate())}
            </span>
            <span className="text-sm text-muted-foreground">
              (sem frete/acabamentos)
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="industrial"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className="disabled:opacity-50"
            >
              Enviar Orçamento
            </Button>
            <Button
              variant="whatsapp"
              asChild
            >
              <a href={getWhatsAppLink(formData.servico)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}