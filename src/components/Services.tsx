import { Button } from "@/components/ui/button";
import { Camera, Video, Mic, Monitor, Smartphone, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Camera,
      title: "Produção de Vídeo",
      description: "Capturamos momentos únicos com equipamentos profissionais e técnicas cinematográficas avançadas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mic,
      title: "Produção de Áudio",
      description: "Qualidade sonora excepcional para podcasts, trilhas sonoras e projetos audiovisuais.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Pós-Produção",
      description: "Edição profissional, colorização e efeitos visuais que elevam seu projeto ao próximo nível.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Conteúdo Digital",
      description: "Criação de conteúdo otimizado para redes sociais e plataformas digitais.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Produção Externa",
      description: "Levamos nossa expertise para qualquer local, adaptando-nos às suas necessidades.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Galeria de vídeos antigos (copiado do Portfolio)
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

  return (
    <section id="servicos" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
            <span className="w-8 h-px bg-gray-300"></span>
            <span>Nossos Serviços</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight mb-8">
            Transformamos
            <br />
            <span className="font-medium text-gray-900">ideias em realidade</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Oferecemos soluções completas em produção audiovisual, desde a concepção 
            até a entrega final, com qualidade profissional e criatividade única.
          </p>
        </div>
        
        {/* Apenas a grid de serviços, sem tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isProducaoVideo = service.title === "Produção de Vídeo";
            return (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                
                {/* Learn More Link */}
                <button
                  onClick={() => isProducaoVideo ? navigate('/producao-video') : navigate('/servicos')}
                  className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors duration-300 group/link"
                >
                  Saiba mais
                  <svg 
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/portfolio-completo">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
            >
              Ver Todos os Serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
