import { Award, Users, Calendar, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, number: "10+", label: "Anos de Experiência" },
    { icon: Users, number: "200+", label: "Projetos Realizados" },
    { icon: Award, number: "15+", label: "Prêmios Conquistados" },
    { icon: Star, number: "98%", label: "Satisfação dos Clientes" }
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-400 tracking-wide uppercase">
                <span className="w-8 h-px bg-gray-600"></span>
                <span>Sobre Nós</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                Sobre a
                <br />
                <span className="font-medium text-gray-100">7 Produção</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                  Somos uma produtora audiovisual especializada em criar conteúdo de alta qualidade que 
                  conecta marcas e pessoas através de narrativas poderosas e técnica impecável.
                </p>
                <p>
                  Nossa equipe combina criatividade artística com tecnologia de ponta para entregar 
                  resultados que superam expectativas. Cada projeto é tratado com dedicação exclusiva 
                  e atenção aos mínimos detalhes.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-3 opacity-80" />
                  <div className="text-3xl font-light text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe 7 Produção"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
