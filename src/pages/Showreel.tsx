
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Showreel = () => {
  const [api, setApi] = useState<any>();
  const navigate = useNavigate();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  const handleSolicitarOrcamento = () => {
    navigate('/contato');
  };

  const images = [
    {
      src: "/lovable-uploads/70694cc2-844c-47a7-96e0-39ed62b5bc51.png",
      alt: "Astronauta contemplando a Terra"
    },
    {
      src: "/lovable-uploads/2fb7263a-ef27-4817-bb30-d754e0deca90.png",
      alt: "Beija-flor e flor tropical"
    },
    {
      src: "/lovable-uploads/6388e989-90bc-40df-9875-38cc9afd130b.png",
      alt: "Jardim zen com cerejeira"
    },
    {
      src: "/lovable-uploads/cbb67cf5-cdfc-4180-b175-8be0a6b5e934.png",
      alt: "Mercado tradicional colorido"
    },
    {
      src: "/lovable-uploads/c57d26fd-73f1-4633-978e-22cfdb860bac.png",
      alt: "Farol ao pôr do sol"
    },
    {
      src: "/lovable-uploads/028ea7c6-de4e-442a-80de-efab9d0bbe24.png",
      alt: "Casa na árvore mágica"
    },
    {
      src: "/lovable-uploads/c1eed4f5-980c-4321-9054-1321ce090dd1.png",
      alt: "Geometria sagrada cósmica"
    },
    {
      src: "/lovable-uploads/cbab1ab4-f3ca-47c1-845c-c0936c557fd5.png",
      alt: "Carro clássico na estrada costeira"
    },
    {
      src: "/lovable-uploads/73a929ee-1b9e-4a73-9eb8-3574807ce96a.png",
      alt: "Cidade submarina fantástica"
    },
    {
      src: "/lovable-uploads/c6df5cf7-e17e-4f41-8af9-cca334b1a1f6.png",
      alt: "Cabana aconchegante na neve"
    }
  ];

  return (
    <div className="min-h-screen bg-white select-none">
      <Header />
      
      <section className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-black mb-6">
              <span className="text-brand-accent">SHOWREEL</span><br />
              7 PRODUÇÃO
            </h1>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Sua vitrine em vídeo para o mundo profissional criativo
            </p>
          </div>

          {/* Slideshow Section */}
          <div className="mb-20">
            <Carousel
              setApi={setApi}
              className="w-full max-w-4xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video bg-brand-gray-100 rounded-2xl overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-black mb-6">
                  Quem usa um showreel?
                </h2>
                <p className="text-brand-gray-600 mb-6">
                  Showreels são muito comuns em indústrias como:
                </p>
                <ul className="space-y-4 text-brand-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Produção de vídeo e cinema:</strong> Editores, diretores, cinegrafistas, artistas de efeitos visuais (VFX), animadores.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Design gráfico e movimento (motion graphics):</strong> Designers que criam animações, vinhetas ou aberturas para vídeos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Atores e modelos:</strong> Para mostrar cenas de atuação ou trabalhos de modelagem.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Músicos e compositores:</strong> Para apresentar clipes de performances ou trechos de composições.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-black mb-6">
                  Qual é o objetivo de um showreel?
                </h2>
                <p className="text-brand-gray-600 mb-6">
                  O principal objetivo é impressionar potenciais clientes, empregadores ou colaboradores. Ele serve para:
                </p>
                <ul className="space-y-4 text-brand-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Demonstrar habilidades:</strong> Mostrar o que você é capaz de fazer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Exibir a qualidade do trabalho:</strong> Apresentar os projetos mais polidos e bem-sucedidos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Destacar especialidades:</strong> Focar em uma área específica de expertise (por exemplo, edição de vídeo, animação 3D, design de som).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Chamar a atenção:</strong> Ser um "cartão de visitas" dinâmico e impactante.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">
                O que geralmente um showreel contém?
              </h2>
              <p className="text-brand-gray-600 mb-6">
                Um showreel geralmente é uma montagem de clipes curtos e dinâmicos, que podem incluir:
              </p>
              <ul className="space-y-4 text-brand-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Melhores momentos de projetos:</strong> Trechos de vídeos, filmes, comerciais, animações.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Trabalhos pessoais:</strong> Projetos criados por conta própria para demonstrar habilidades específicas.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Variedade de estilos:</strong> Se aplicável, mostrar diferentes estilos ou abordagens em que você tem experiência.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Informações de contato:</strong> No final, geralmente há um slide ou texto com o nome do criador, site, e-mail e outras informações relevantes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">
                Quanto tempo dura um showreel?
              </h2>
              <p className="text-brand-gray-600 mb-8">
                A duração ideal varia, mas showreels são geralmente curtos e diretos, geralmente entre <strong>1 a 3 minutos</strong>. O objetivo é prender a atenção do espectador rapidamente e deixar uma impressão duradoura.
              </p>
              
              <div className="bg-brand-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-brand-accent mb-4">
                  Em resumo...
                </h3>
                <p className="text-lg text-brand-gray-700 italic">
                  É sua "vitrine" em vídeo para o mundo profissional criativo!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-brand-gray-50 py-16 rounded-2xl">
            <h2 className="text-4xl font-bold text-brand-black mb-6">
              Pronto para criar seu <span className="text-brand-accent">showreel</span>?
            </h2>
            <p className="text-xl text-brand-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos criar um showreel que destaque seu trabalho e impressione seus clientes.
            </p>
            <Button 
              onClick={handleSolicitarOrcamento}
              size="lg" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-full font-medium"
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showreel;
