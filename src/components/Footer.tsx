import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Coluna Esquerda: Logo + texto */}
          <div className="flex flex-col items-start">
              <img 
                src="/lovable-uploads/11c891f3-3e7e-47ca-9d4a-c0dcb54ee9a0.png" 
                alt="7 PRODUÇÃO" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
            <p className="text-gray-400 leading-relaxed text-sm font-light">
              Somos contadores de histórias alucinantes, mestres da câmera e especialistas em transformar ideias em realidade. Sua história merece ser contada com a qualidade que oferecemos.
            </p>
          </div>
            
          {/* Coluna Central: Social Icons + Navegação */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-6 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/eltonprodutordigital/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5547999928103" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:7producaobr@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <ul className="flex flex-wrap justify-center items-center gap-2 text-gray-400 mb-6 text-sm">
              {[{label: 'Início', to: '/'}, {label: 'Nossa Essência', to: '/nossa-essencia'}, {label: 'Serviços', to: '/servicos'}, {label: 'Portfólio', to: '/portfolio'}, {label: 'Vídeos', to: '/videos'}, {label: 'Contato', to: '/contato'}].map((item, idx, arr) => (
                <li key={item.label} className="flex items-center">
                  <Link to={item.to} className="hover:text-white transition-colors duration-300 font-light">{item.label}</Link>
                  {idx < arr.length - 1 && <span className="mx-2 text-gray-600">|</span>}
              </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna Direita: Vazia */}
          <div></div>
        </div>
        {/* Copyright e contato centralizado abaixo das colunas */}
        <div className="text-gray-500 text-xs text-center mt-2">
          <span>© 2025 7 Produção</span>
          <span className="mx-2">|</span>
          <a href="mailto:7producaobr@gmail.com" className="hover:text-white">7producaobr@gmail.com</a>
          <span className="mx-2">|</span>
          <a href="tel:+5547999928103" className="hover:text-white">+55 (47) 99992-8103</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
