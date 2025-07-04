import { Award, Users, Camera } from "lucide-react";

const NossaEssencia = () => {
  const values = [
    {
      icon: Camera,
      title: "Criatividade",
      description: "Cada projeto é uma oportunidade única de contar uma história diferente e impactante."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Padrão técnico e artístico excepcional em todas as etapas da produção."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes para superar expectativas."
    }
  ];

  const teamMembers = [
    {
      name: "Elton Dudua",
      role: "Editor, Animador, Produtor",
      image: "/lovable-uploads/1c5a2f93-d02a-440d-bae5-dc117bf83bad.png",
      instagram: "https://www.instagram.com/eltonprodutordigital/"
    },
    {
      name: "Alex Narciso",
      role: "Marketing e Comunicação",
      image: "/lovable-uploads/5918123d-de35-47c5-b024-b63e4ebda2fd.png",
      instagram: "https://www.instagram.com/narciso_alex/"
    },
    {
      name: "Lucas Narciso",
      role: "Web Designer, Programador Front-end",
      image: "/lovable-uploads/9abcf4e6-cecf-4dd9-a862-5d18e895dc7a.png",
      instagram: "https://www.instagram.com/lucas_narciso_ia/"
    }
  ];

  return (
    <section id="nossa-essencia" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24 text-center lg:text-left">
          {/* Left Content */}
          <div className="space-y-12">
          <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase">
                <span className="w-8 h-px bg-gray-300"></span>
                <span>Nossa Essência</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
                Nossa
                <br />
                <span className="font-medium text-gray-900">Essência</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  🎬 Bem-vindos ao incrível mundo da 7 Produção! 🎥
                </p>
                <p>
                  Prepare-se para mergulhar em um universo onde a criatividade flui mais do que café em uma maratona de edição! Somos mais do que uma simples produtora de vídeo, somos contadores de histórias alucinantes, mestres da câmera e especialistas em transformar ideias em realidade.
                </p>
                <p>
                  Se você acha que somos apenas mais um bando de criativos malucos, pense novamente! Nossas ideias fluem mais soltas do que um malabarista em um piquenique, e nosso senso de humor é tão afiado quanto nossos cortes de edição. 😄
                </p>
                <p>
                  Na 7 Produção, cada projeto é uma aventura única. Nossa equipe é um mix mágico de criatividade, inovação e profissionalismo. Vamos criar, rir, inovar e, acima de tudo, produzir vídeos que vão deixar o mundo de queixo caído!
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">5+</div>
                <div className="text-sm text-gray-600 font-light">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">150+</div>
                <div className="text-sm text-gray-600 font-light">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">98%</div>
                <div className="text-sm text-gray-600 font-light">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/8a3397a5-799a-4805-badf-977596edbc0f.png" 
                alt="Equipe 7 Produção em gravação"
                className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-6 p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-black mb-3 text-xl">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-3xl p-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
              <span className="w-8 h-px bg-gray-300"></span>
              <span>Nossa Equipe</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-light text-black leading-tight mb-6">
              Nossa
              <br />
              <span className="font-medium text-gray-900">Equipe</span>
            </h3>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Conheça os profissionais que fazem a magia acontecer. Todos integrados com as novas tecnologias e IAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gray-200 group-hover:border-black transition-all duration-300 cursor-pointer">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </a>
                </div>
                <h4 className="text-2xl font-medium text-black mb-3">
                  {member.name}
                </h4>
                <p className="text-black font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm font-light">
                  Especialista integrado com as mais novas tecnologias e IAs
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaEssencia;
