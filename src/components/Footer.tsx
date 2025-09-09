import React from 'react';
import { useStore } from '@/lib/store';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { brand } = useStore();

  return (
    <footer className="bg-gradient-industrial text-white">
      <div className="container-industrial">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">{brand.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Especialistas em fabricação metálica com tecnologia de ponta. 
                Oferecemos soluções completas em corte a laser, solda e fabricação 
                de peças para diversos segmentos industriais.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {brand.address}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">{brand.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">{brand.email}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Corte a Laser de Precisão</li>
                <li>• Solda e Dobra</li>
                <li>• Fabricação de Peças Customizadas</li>
                <li>• Trabalhos em Inox, Aço e Alumínio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com precisão e qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}