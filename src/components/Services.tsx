import { Button } from "@/components/ui/button";
import { Camera, Video, Mic, Monitor, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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
    },
    {
      icon: Video,
      title: "Showreel",
      description: "Apresentações profissionais que destacam o melhor do seu trabalho e marca.",
      color: "from-yellow-500 to-orange-500"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
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
                <Link 
                  to="/servicos" 
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
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/servicos">
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
