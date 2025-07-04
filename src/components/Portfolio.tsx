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
            <div className="text-4xl md:text-5xl font-light text-black mb-2">150+</div>
            <div className="text-gray-600 font-light">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">50+</div>
            <div className="text-gray-600 font-light">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">5+</div>
            <div className="text-gray-600 font-light">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-black mb-2">24/7</div>
            <div className="text-gray-600 font-light">Suporte Disponível</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/portfolio">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 group"
            >
              Ver Portfólio Completo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
