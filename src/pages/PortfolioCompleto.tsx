
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useState } from "react";

const PortfolioCompleto = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const portfolioItems = [
    {
      title: "VÍDEO INSTITUCIONAL",
      category: "PRODUÇÃO AUDIOVISUAL",
      description: "Criamos vídeos institucionais que fortalecem a imagem da sua empresa, transmitindo profissionalismo e credibilidade. Nossa equipe especializada desenvolve roteiros envolventes e produz conteúdo de alta qualidade que conecta sua marca ao público-alvo.",
      image: "/lovable-uploads/05d1bbf1-9e69-4410-84ec-301321557396.png",
      videoUrl: null,
      features: ["Roteiro personalizado", "Produção completa", "Edição profissional", "Trilha sonora original"]
    },
    {
      title: "PRODUÇÃO DE ÁUDIO",
      category: "ÁUDIO PROFISSIONAL",
      description: "Oferecemos serviços completos de produção de áudio, desde gravação em estúdio até mixagem e masterização. Criamos vinhetas, jingles e trilhas sonoras que elevam a identidade da sua marca e criam conexão emocional com o público.",
      image: "/lovable-uploads/5db22381-fde1-4e3b-b27a-ecaed7cb771e.png",
      videoUrl: null,
      features: ["Gravação em estúdio", "Mixagem profissional", "Criação de jingles", "Trilhas originais"]
    },
    {
      title: "PRODUÇÃO EXTERNA",
      category: "LOCAÇÕES EXTERNAS",
      description: "Nossa equipe de produção externa captura a essência dos seus projetos em locações reais. Utilizamos equipamentos de última geração e técnicas cinematográficas para criar conteúdo autêntico e envolvente em qualquer ambiente.",
      image: "/lovable-uploads/14d0a75d-d452-4fb5-82c5-6a03bf8610e1.png",
      videoUrl: null,
      features: ["Equipamentos portáteis", "Equipe especializada", "Locações diversas", "Qualidade cinematográfica"]
    },
    {
      title: "ESTÚDIO PROFISSIONAL",
      category: "PRODUÇÃO EM ESTÚDIO",
      description: "Nosso estúdio interno oferece ambiente controlado e tecnologia de ponta para produções que exigem precisão técnica. Contamos com iluminação profissional, cenários personalizáveis e equipamentos de alta definição.",
      image: "/lovable-uploads/804fcf5c-5ef3-4794-9ed1-efe0a1cc3706.png",
      videoUrl: null,
      features: ["Ambiente controlado", "Iluminação profissional", "Cenários personalizados", "Tecnologia 4K"]
    },
    {
      title: "MAZIN SILVA",
      category: "GRANDE GUITARRISTA",
      description: "Produção especial do talentoso guitarrista Mazin Silva (@mazinsilvaoficial), que já conquistou quase 500 mil seguidores no Instagram. Trabalhamos com sua banda @ei.anama criando conteúdo musical de alta qualidade que ressoa com milhares de fãs.",
      image: "/lovable-uploads/9ee5246e-eb3a-49e5-bf69-c42d9cd8126f.png",
      videoUrl: "https://www.youtube.com/embed/swwFYHP-k9o",
      features: ["Produção musical", "Conteúdo para redes sociais", "Gravação de shows", "Marketing digital"]
    },
    {
      title: "7 ATLÂNTIDA",
      category: "PROJETO ESPECIAL",
      description: "Um projeto especial que relembra o antigo quadro de Blumenau apresentado pelo Elton. Este trabalho marca nossa conexão com a história audiovisual local e demonstra nossa capacidade de revitalizar projetos icônicos. Conheça mais sobre nosso trabalho no canal 7 Produções.",
      image: "/lovable-uploads/47b051e0-b33c-4fa9-84a7-90fc1869642b.png",
      videoUrl: null,
      features: ["Projeto histórico", "Produção local", "Revitalização de conteúdo", "Canal 7 Produções"],
      link: "https://www.youtube.com/@Zecktron"
    },
    {
      title: "MÍDIAS SOCIAIS",
      category: "MARKETING DIGITAL",
      description: "Gerenciamento completo das suas redes sociais com estratégias personalizadas. Criamos conteúdo viral, desenvolvemos campanhas de engajamento e acompanhamos métricas para garantir o crescimento da sua presença digital.",
      image: "/lovable-uploads/73bda821-5a98-4440-aed7-5be573424455.png",
      videoUrl: null,
      features: ["Gestão de redes sociais", "Conteúdo viral", "Campanhas de engajamento", "Análise de métricas"]
    },
    {
      title: "RECOMENDAÇÕES PARA VITILIGO",
      category: "CONTEÚDO ESPECIALIZADO",
      description: "Criação de conteúdo especializado para cuidados com vitiligo, oferecendo recomendações e dicas de tratamento. Este projeto demonstra nossa capacidade de criar conteúdo educativo e sensível para nichos específicos de saúde e bem-estar.",
      image: "/lovable-uploads/145e2d5c-5687-411e-96ff-cfe974dda529.png",
      videoUrl: null,
      features: ["Conteúdo educativo", "Área da saúde", "Design especializado", "Engajamento qualificado"]
    },
    {
      title: "BBP MEDICAL VALLEY",
      category: "MARKETING MÉDICO",
      description: "Campanha completa para o BBP Medical Valley, um dos maiores condomínios especializados da América Latina. Desenvolvemos estratégia de marketing digital focada em destacar a infraestrutura moderna e os serviços de excelência oferecidos.",
      image: "/lovable-uploads/4067450f-10cd-4c5d-b6e4-8e025389a000.png",
      videoUrl: null,
      features: ["Marketing médico", "Estratégia digital", "Conteúdo institucional", "Geração de leads"]
    },
    {
      title: "HALLOWEEN ESPECIAL",
      category: "CONTEÚDO SAZONAL",
      description: "Produção especial para Halloween, demonstrando nossa versatilidade na criação de conteúdo temático e sazonal. Este projeto mostra como adaptamos nossa criatividade para diferentes ocasiões e públicos específicos.",
      image: "/lovable-uploads/b8cb88cc-99ee-4586-98fb-f1281e4c040e.png",
      videoUrl: null,
      features: ["Conteúdo temático", "Design criativo", "Engajamento sazonal", "Marketing de ocasião"]
    },
    {
      title: "TOXINA BOTULÍNICA",
      category: "ESTÉTICA E BELEZA",
      description: "Campanha promocional para tratamentos de toxina botulínica, focando nos benefícios do procedimento e na naturalidade dos resultados. Criamos conteúdo que educa e informa sobre procedimentos estéticos de forma responsável.",
      image: "/lovable-uploads/cbb3415b-a3a2-4621-af21-3fbd3bde975f.png",
      videoUrl: null,
      features: ["Marketing estético", "Conteúdo educativo", "Design profissional", "Conversão qualificada"]
    },
    {
      title: "INVESTIMENTO EM SAÚDE",
      category: "MARKETING INSTITUCIONAL",
      description: "Material promocional para investimentos no setor de saúde e tecnologia, destacando oportunidades únicas de negócio. Este projeto demonstra nossa expertise em comunicação corporativa e marketing B2B no setor da saúde.",
      image: "/lovable-uploads/88767aed-bafe-4a88-a2fa-887046b56b42.png",
      videoUrl: null,
      features: ["Marketing B2B", "Comunicação corporativa", "Setor saúde", "Estratégia de investimento"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const handleVideoClick = (videoUrl: string | null) => {
    if (videoUrl) {
      setCurrentVideoUrl(videoUrl);
      setIsVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
  };

  const currentItem = portfolioItems[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Slideshow Section */}
      <section className="py-20 bg-brand-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Slideshow Container */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[700px]">
                {/* Image Section - 2/3 */}
                <div 
                  className="lg:col-span-2 relative overflow-hidden cursor-pointer group"
                  onClick={() => {
                    if (currentItem.link) {
                      window.open(currentItem.link, '_blank');
                    } else {
                      handleVideoClick(currentItem.videoUrl);
                    }
                  }}
                >
                  <img 
                    src={currentItem.image} 
                    alt={currentItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Play button overlay */}
                  {currentItem.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section - 1/3 */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="text-xs font-medium text-brand-accent mb-3">
                    {currentItem.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4">
                    {currentItem.title}
                  </h2>
                  <p className="text-brand-gray-600 text-sm leading-relaxed mb-6">
                    {currentItem.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-brand-black mb-3">Características:</h3>
                    <ul className="space-y-1">
                      {currentItem.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-brand-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex space-x-2">
                    {portfolioItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentSlide ? 'bg-brand-accent' : 'bg-brand-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-8">
              <span className="text-brand-gray-600 text-lg">
                {currentSlide + 1} / {portfolioItems.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          ></div>
          
          <div className="relative z-10 w-full max-w-4xl mx-4">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-brand-accent transition-colors duration-200 z-20"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={currentVideoUrl}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PortfolioCompleto;
