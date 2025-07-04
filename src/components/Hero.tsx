import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/8b16f7aa-8bdf-4be3-927e-0c9230105bb0.png",
      alt: "Equipe de produção audiovisual externa"
    },
    {
      src: "/lovable-uploads/daf90b67-f47c-462c-9212-07f689d528f3.png",
      alt: "Estúdio de produção com equipamentos profissionais"
    },
    {
      src: "/lovable-uploads/e927963a-ae23-4da9-b110-c07a3d411122.png",
      alt: "Equipe criativa em reunião de produção"
    },
    {
      src: "/lovable-uploads/eecf8db8-5c76-46dd-9f50-e687be399af0.png",
      alt: "Estúdio de áudio profissional"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScrollToVideos = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicos = document.getElementById("servicos");
    if (servicos) {
      servicos.scrollIntoView({ behavior: "smooth" });
      // Aguarda a rolagem e ativa a aba de vídeos
      setTimeout(() => {
        const tab = document.querySelector('[data-state][value="producao"]') as HTMLElement;
        if (tab) tab.click();
      }, 600);
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
          <div className="space-y-8">
              {/* Subtitle */}
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase">
                <span className="w-8 h-px bg-gray-300"></span>
                <span>Produção Audiovisual</span>
              </div>
              
              {/* Main Title */}
            <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-light text-black leading-[0.9] tracking-tight">
                  Criamos
                  <br />
                  <span className="font-medium text-gray-900">Experiências</span>
                  <br />
                  <span className="font-light text-gray-700">Audiovisuais</span>
              </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                Transformamos ideias em narrativas visuais impactantes que conectam 
                marcas e pessoas através da arte cinematográfica.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-full font-medium transition-all duration-300"
                onClick={handleScrollToVideos}
              >
                Nossos Projetos
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-1000"
                      />
                    </div>
            
            {/* Image Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-black w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-gray-50 to-gray-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
