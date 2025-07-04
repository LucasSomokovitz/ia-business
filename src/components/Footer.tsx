import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/11c891f3-3e7e-47ca-9d4a-c0dcb54ee9a0.png" 
                alt="7 PRODUÇÃO" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-lg leading-relaxed text-lg font-light">
              Somos contadores de histórias alucinantes, mestres da câmera e especialistas em transformar ideias em realidade. 
              Sua história merece ser contada com a qualidade que oferecemos.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center mx-auto">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/eltonprodutordigital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5547999928103" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:7producaobr@gmail.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="font-medium text-white mb-6 text-lg">
              Navegação
            </h4>
            <ul className="flex flex-wrap justify-center items-center gap-2 md:flex-col md:gap-0 md:space-y-4 text-gray-400">
              {['Início', 'Nossa Essência', 'Serviços', 'Portfólio', 'Vídeos', 'Contato'].map((label, idx, arr) => (
                <li key={label} className="flex items-center">
                  <Link to={`/${label.toLowerCase()}`} className="hover:text-white transition-colors duration-300 font-light">
                    {label}
                  </Link>
                  {idx < arr.length - 1 && <span className="mx-2 hidden md:inline">|</span>}
                  {idx < arr.length - 1 && <span className="mx-2 md:hidden">|</span>}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-6 text-lg">
              Contato
            </h4>
            <div className="space-y-4 text-gray-400">
              <p className="text-sm font-light">7producaobr@gmail.com</p>
              <p className="text-sm font-light">+55 (47) 99992-8103</p>
              <p className="text-sm font-light">Blumenau - SC</p>
              <p className="text-sm font-light">Segunda a sexta: 8h às 18h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-sm font-light">
            © 2025 7 Produção. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
