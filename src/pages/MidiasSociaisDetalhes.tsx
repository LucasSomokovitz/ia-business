
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MidiasSociaisDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  useEffect(() => {
    if (id) {
      const itemIndex = portfolioItems.findIndex(item => item.id === parseInt(id));
      if (itemIndex !== -1) {
        setCurrentIndex(itemIndex);
      }
    }
  }, [id]);

  const currentItem = portfolioItems[currentIndex];

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    navigate(`/midias-sociais/${portfolioItems[newIndex].id}`);
  };

  const handleNext = () => {
    const newIndex = currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    navigate(`/midias-sociais/${portfolioItems[newIndex].id}`);
  };

  const handleBack = () => {
    navigate('/midias-sociais');
  };

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-brand-black mb-4">Item não encontrado</h1>
          <Button onClick={handleBack} className="bg-brand-accent hover:bg-brand-accent/90">
            Voltar ao Portfólio
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              onClick={handleBack}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Voltar ao Portfólio</span>
            </Button>
          </div>

          {/* Main Content */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Image */}
              <div className="aspect-square max-w-2xl mx-auto bg-gray-100">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 text-center">
                  {currentItem.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-brand-accent font-medium text-center mb-8 leading-relaxed">
                  {currentItem.impactPhrase}
                </p>

                <div className="max-w-4xl mx-auto">
                  <div className="text-brand-gray-600 leading-relaxed whitespace-pre-line text-lg">
                    {currentItem.content}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-brand-accent scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    navigate(`/midias-sociais/${portfolioItems[index].id}`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MidiasSociaisDetalhes;
