import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { name: "Grades & Ralos Inox", category: "residencial" },
  { name: "Chapas cortadas CNC", category: "industrial" },
  { name: "Peças dobradas", category: "industrial" },
  { name: "Corrimões & Guarda-corpos", category: "residencial" },
  { name: "Letreiros / Displays", category: "comercial" },
  { name: "Componentes sob medida", category: "industrial" }
];

const categoryColors = {
  residencial: "bg-blue-100 text-blue-800",
  industrial: "bg-orange-100 text-orange-800",  
  comercial: "bg-green-100 text-green-800"
};

export default function Produtos() {
  return (
    <div className="section-spacing">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossa linha de produtos e soluções em fabricação metálica 
            para diferentes segmentos.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-border bg-white p-6 shadow-metal">
              <CardHeader className="text-center pb-4">
                {/* Image placeholder */}
                <div className="h-36 rounded-xl border border-border bg-muted mb-3 flex items-center justify-center">
                  <Package className="w-12 h-12 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {product.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[product.category as keyof typeof categoryColors]}`}>
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm">
                  Produto de alta qualidade fabricado com materiais duráveis e acabamento profissional.
                </p>
                
                <Button
                  variant="outline"
                  className="w-full group"
                  asChild
                >
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-metal rounded-2xl border border-border shadow-metal">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de algo sob medida?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Desenvolvemos soluções personalizadas para atender suas necessidades específicas. 
                Entre em contato e vamos conversar sobre seu projeto.
              </p>
              <Button variant="industrial" size="lg" asChild>
                <Link to="/contato">
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}