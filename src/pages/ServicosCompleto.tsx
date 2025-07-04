import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Mic, Monitor, Smartphone, Users } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Produção de Vídeo",
    description: "Capturamos momentos únicos com equipamentos profissionais e técnicas cinematográficas avançadas."
  },
  {
    icon: Mic,
    title: "Produção de Áudio",
    description: "Qualidade sonora excepcional para podcasts, trilhas sonoras e projetos audiovisuais."
  },
  {
    icon: Monitor,
    title: "Pós-Produção",
    description: "Edição profissional, colorização e efeitos visuais que elevam seu projeto ao próximo nível."
  },
  {
    icon: Smartphone,
    title: "Conteúdo Digital",
    description: "Criação de conteúdo otimizado para redes sociais e plataformas digitais."
  },
  {
    icon: Users,
    title: "Produção Externa",
    description: "Levamos nossa expertise para qualquer local, adaptando-nos às suas necessidades."
  }
];

const ServicosCompleto = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
              <span className="w-8 h-px bg-gray-300"></span>
              <span>Todos os Serviços</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-4">
              Conheça tudo o que oferecemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Soluções completas em produção audiovisual, áudio, pós-produção, conteúdo digital e produção externa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicosCompleto; 