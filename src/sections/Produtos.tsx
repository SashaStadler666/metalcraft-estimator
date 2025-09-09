import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Wrench, Cog } from 'lucide-react';

interface ProdutosSectionProps {
  onQuoteClick: (product: string) => void;
}

export default function Produtos({ onQuoteClick }: ProdutosSectionProps) {
  const products = [
    {
      id: 1,
      category: 'Corte a Laser',
      name: 'Peças de Precisão',
      description: 'Cortes precisos em chapas metálicas com tolerâncias mínimas para aplicações industriais.',
      materials: ['Inox 304/316', 'Aço Carbono', 'Alumínio'],
      applications: ['Indústria Alimentícia', 'Automobilística', 'Construção'],
      icon: Zap,
      features: ['Precisão ±0,1mm', 'Espessuras até 25mm', 'Cortes complexos']
    },
    {
      id: 2,
      category: 'Solda & Dobra',
      name: 'Estruturas Metálicas',
      description: 'Fabricação de estruturas soldadas e conformadas para diversos segmentos industriais.',
      materials: ['Aço Estrutural', 'Inox Industrial', 'Alumínio Naval'],
      applications: ['Estruturas Industriais', 'Equipamentos', 'Arquitetura'],
      icon: Wrench,
      features: ['Soldas certificadas', 'Dobras precisas', 'Acabamento premium']
    },
    {
      id: 3,
      category: 'Fabricação Customizada',
      name: 'Peças Sob Medida',
      description: 'Desenvolvimento e fabricação de peças customizadas conforme especificações técnicas.',
      materials: ['Todos os Materiais', 'Ligas Especiais', 'Materiais Importados'],
      applications: ['Protótipos', 'Máquinas Especiais', 'Projetos Únicos'],
      icon: Cog,
      features: ['Projeto 3D', 'Protótipagem', 'Produção seriada']
    }
  ];

  const showcaseItems = [
    {
      title: 'Chapas Perfuradas',
      description: 'Perfurações padronizadas ou customizadas',
      image: '🔘'
    },
    {
      title: 'Flanges e Conexões',
      description: 'Para sistemas hidráulicos e pneumáticos',
      image: '⚙️'
    },
    {
      title: 'Componentes Decorativos',
      description: 'Para arquitetura e design industrial',
      image: '✨'
    },
    {
      title: 'Peças de Reposição',
      description: 'Fabricação de peças para manutenção',
      image: '🔧'
    },
    {
      title: 'Gabinetes Metálicos',
      description: 'Para painéis elétricos e equipamentos',
      image: '📦'
    },
    {
      title: 'Suportes e Bases',
      description: 'Para máquinas e equipamentos industriais',
      image: '🏗️'
    }
  ];

  return (
    <section id="produtos" className="section-spacing bg-background">
      <div className="container-industrial">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em fabricação metálica para atender às mais diversas 
            necessidades industriais e comerciais.
          </p>
        </div>

        {/* Categorias Principais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const Icon = product.icon;
            
            return (
              <Card key={product.id} className="group hover:shadow-industrial transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Materiais:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.materials.map((material) => (
                        <Badge key={material} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Aplicações:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Diferenciais:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    variant="industrial"
                    className="w-full group"
                    onClick={() => onQuoteClick(product.name)}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Showcase de Produtos */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Exemplos de Produtos Fabricados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {showcaseItems.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-metal transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {item.image}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-industrial rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Desenvolvemos soluções customizadas para atender suas necessidades específicas. 
              Entre em contato e vamos criar juntos o produto ideal para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onQuoteClick('Produto Customizado')}
                className="text-lg px-8 py-4 h-auto"
              >
                Produto Customizado
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10"
              >
                <a href="#contato">
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}