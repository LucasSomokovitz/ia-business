import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MidiasSociais = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const portfolioItems = [
    {
      id: 1,
      title: "Recomendações para Vitiligo",
      impactPhrase: "Cuidados especializados para quem tem vitiligo!",
      image: "/lovable-uploads/145e2d5c-5687-411e-96ff-cfe974dda529.png",
      content: `Recomendações especializadas para quem tem vitiligo.

Cuidados essenciais:
• Proteção solar adequada e constante
• Uso de produtos específicos para peles sensíveis
• Acompanhamento dermatológico regular
• Tratamentos personalizados para cada caso

Nossa equipe especializada oferece suporte completo para pessoas com vitiligo, proporcionando cuidados específicos e tratamentos eficazes.

Agende sua consulta e descubra as melhores opções de tratamento para sua pele.

#Vitiligo #Dermatologia #CuidadosEspeciais #Pele #Saúde #Autoestima #TratamentoPersonalizado`
    },
    {
      id: 2,
      title: "BBP Medical Valley",
      impactPhrase: "Um dos maiores condomínios especializados da América Latina bem pertinho de você!",
      image: "/lovable-uploads/4067450f-10cd-4c5d-b6e4-8e025389a000.png",
      content: `BBP Medical Valley - Um dos maiores condomínios especializados da América Latina bem pertinho de você!

Localização privilegiada com:
• Estrutura moderna e completa
• Profissionais especializados
• Tecnologia de ponta
• Ambiente familiar e acolhedor

Fale conosco: (47) 99921-0606
Site: bbpmedicalvalley.com.br

Venha conhecer nosso espaço e descobrir como podemos cuidar da sua família com excelência e carinho.

#BBPMedicalValley #Saúde #Família #Tecnologia #AmericaLatina #Cuidado #Excelência`
    },
    {
      id: 3,
      title: "Halloween Especial",
      impactPhrase: "Transformação que impressiona! 🎃",
      image: "/lovable-uploads/b8cb88cc-99ee-4586-98fb-f1281e4c040e.png",
      content: `Especial Halloween - Transformações que impressionam!

Nossa expertise em transformação vai além dos tratamentos convencionais. Seja para ocasiões especiais ou para o dia a dia, criamos looks únicos e marcantes.

Serviços especiais:
• Maquiagem artística profissional
• Caracterização para eventos
• Workshops de automaquiagem
• Consultoria em beleza

Deixe sua criatividade fluir e surpreenda em qualquer ocasião!

#Halloween #Maquiagem #Transformação #Arte #Criatividade #Beleza #Caracterização`
    },
    {
      id: 4,
      title: "Toxina Botulínica",
      impactPhrase: "Mais linda sem rugas e sem marcas de expressão!",
      image: "/lovable-uploads/cbb3415b-a3a2-4621-af21-3fbd3bde975f.png",
      content: `TOXINA BOTULÍNICA - Mais linda sem rugas e sem marcas de expressão!

Benefícios do tratamento:
• Redução eficaz de rugas e linhas de expressão
• Resultado natural e harmonioso
• Procedimento seguro e minimamente invasivo
• Autoestima renovada

Contato: (47) 99617-9609
Endereço: R. Hermann Huscher, 955 - Vila Formosa, Blumenau

Agende sua avaliação e descubra como a toxina botulínica pode realçar sua beleza natural.

#ToxinaBotulinica #Botox #Rejuvenescimento #Beleza #Autoestima #Dermatologia #Blumenau #Estética`
    },
    {
      id: 5,
      title: "Investimento em Saúde",
      impactPhrase: "Invista no maior vale de saúde e tecnologia da América Latina!",
      image: "/lovable-uploads/88767aed-bafe-4a88-a2fa-887046b56b42.png",
      content: `INVISTA NO MAIOR VALE DE SAÚDE E TECNOLOGIA DA AMÉRICA LATINA

Localizado em uma das maiores regiões do Brasil, oferecemos:
• Oportunidades únicas de investimento
• Tecnologia de ponta em saúde
• Estrutura completa e moderna
• Retorno garantido em saúde e bem-estar

Fale conosco: (47) 99921-0606
Site: bbpmedicalvalley.com.br

Seja parte desta revolução na área da saúde e tecnologia. Seu investimento em um futuro mais saudável começa aqui.

#Investimento #Saúde #Tecnologia #AmericaLatina #BBPMedicalValley #Futuro #Inovação #Oportunidade`
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const handleItemClick = (item: typeof portfolioItems[0]) => {
    navigate(`/midias-sociais/${item.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioItems.map((item) => (
                  <div key={item.id} className="min-w-full">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => handleItemClick(item)}
                    >
                      {/* Image - usando aspect ratio quadrado para manter a proporção das imagens sociais */}
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Content Section - Below Image */}
            <div className="mt-8 text-center bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                {portfolioItems[currentSlide].title}
              </h3>
              <p className="text-lg md:text-xl text-brand-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-6">
                {portfolioItems[currentSlide].impactPhrase}
              </p>
              <button
                className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-accent/90 transition-colors"
                onClick={() => handleItemClick(portfolioItems[currentSlide])}
              >
                Clique para ver conteúdo completo
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-brand-accent scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-brand-black mb-6">
              Nossos Cases de Sucesso
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada projeto é único e desenvolvido com estratégias personalizadas para 
              maximizar o engajamento e alcançar os objetivos de cada cliente. 
              Clique em qualquer item para ver o conteúdo completo.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MidiasSociais;
