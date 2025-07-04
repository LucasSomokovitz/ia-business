import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Campanha Comercial",
      category: "Vídeo Comercial",
      image: "/lovable-uploads/8b16f7aa-8bdf-4be3-927e-0c9230105bb0.png",
      description: "Produção de vídeo comercial para marca de tecnologia"
    },
    {
      id: 2,
      title: "Documentário Empresarial",
      category: "Documentário",
      image: "/lovable-uploads/daf90b67-f47c-462c-9212-07f689d528f3.png",
      description: "Documentário sobre a história de uma empresa centenária"
    },
    {
      id: 3,
      title: "Evento Corporativo",
      category: "Evento",
      image: "/lovable-uploads/e927963a-ae23-4da9-b110-c07a3d411122.png",
      description: "Cobertura completa de evento corporativo"
    }
  ];

  // Galeria de vídeos antigos
  const youtubeVideos = [
    {
      id: 1,
      title: "Vídeo Promocional 1",
      url: "https://www.youtube.com/embed/fefz-CuCalQ",
      thumb: "https://img.youtube.com/vi/fefz-CuCalQ/hqdefault.jpg"
    },
    {
      id: 2,
      title: "Vídeo Promocional 2",
      url: "https://www.youtube.com/embed/ialji2ry1-w",
      thumb: "https://img.youtube.com/vi/ialji2ry1-w/hqdefault.jpg"
    },
    {
      id: 4,
      title: "Vídeo Promocional 4",
      url: "https://www.youtube.com/embed/KLEWsAb1bZ8",
      thumb: "https://img.youtube.com/vi/KLEWsAb1bZ8/hqdefault.jpg"
    },
    {
      id: 5,
      title: "Vídeo Promocional 5",
      url: "https://www.youtube.com/embed/9RDhZ6OmIFw",
      thumb: "https://img.youtube.com/vi/9RDhZ6OmIFw/hqdefault.jpg"
    },
    {
      id: 6,
      title: "Vídeo Promocional 6",
      url: "https://www.youtube.com/embed/jA4WqdHIdsU",
      thumb: "https://img.youtube.com/vi/jA4WqdHIdsU/hqdefault.jpg"
    },
    {
      id: 7,
      title: "Vídeo Promocional 7",
      url: "https://www.youtube.com/embed/f1y2FI8XxbI",
      thumb: "https://img.youtube.com/vi/f1y2FI8XxbI/hqdefault.jpg"
    },
    {
      id: 8,
      title: "Vídeo Promocional 8",
      url: "https://www.youtube.com/embed/L2lGp24D8hk",
      thumb: "https://img.youtube.com/vi/L2lGp24D8hk/hqdefault.jpg"
    }
  ];
  const otherVideos = [
    // Exemplo: vídeos de Drive, Instagram, Squarespace
    // Adicione aqui os links e ícones conforme necessário
    // { id: 101, title: 'Vídeo Drive', url: '...', icon: '/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png' },
  ];

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
            <span className="w-8 h-px bg-gray-300"></span>
            <span>Nosso Portfólio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight mb-8">
            Projetos que
            <br />
            <span className="font-medium text-gray-900">inspiram</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Explore nossa coleção de trabalhos que demonstram nossa paixão pela 
            excelência e criatividade em produção audiovisual.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
              <div 
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="lg" 
                      className="bg-white/90 hover:bg-white text-black rounded-full px-6 py-3"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Ver Projeto
                    </Button>
                  </div>
                      </div>
                    </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-medium text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">5+</div>
            <div className="text-gray-600 font-light">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">150+</div>
            <div className="text-gray-600 font-light">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">50+</div>
            <div className="text-gray-600 font-light">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">98%</div>
            <div className="text-gray-600 font-light">Satisfação dos Clientes</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/portfolio-completo">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 group"
            >
              Ver Portfólio Completo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Destaques do nosso canal no YouTube */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
                <span className="w-8 h-px bg-gray-300"></span>
                <span>Produção de Vídeos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-4">
                Destaques do nosso canal no YouTube
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                Confira os vídeos mais acessados da nossa produção audiovisual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vídeo Promocional 8 */}
              <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5 group">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/L2lGp24D8hk"
                    title="Vídeo Promocional 8"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-black">JULIANO SANTOS - Te pego de jeito | Ao Vivo | Banda Completa</h4>
                  <span className="text-xs text-gray-500">53 acessos</span>
                </div>
              </div>
              {/* Vídeo Promocional 5 */}
              <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5 group">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/9RDhZ6OmIFw"
                    title="Vídeo Promocional 5"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-black">Viacredi Alto Vale - Institucional 2022</h4>
                  <span className="text-xs text-gray-500">39 acessos</span>
                </div>
              </div>
              {/* Vídeo Promocional 1 */}
              <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5 group">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/fefz-CuCalQ"
                    title="Vídeo Promocional 1"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-black">Educação Financeira - Como fazer um orçamento pessoal? | Ailos</h4>
                  <span className="text-xs text-gray-500">32 acessos</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
