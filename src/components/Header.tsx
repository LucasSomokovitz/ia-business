import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOrcamentoClick = () => {
    if (location.pathname === '/contato') {
      const contatoSection = document.getElementById('contato');
      if (contatoSection) {
        contatoSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contato');
    }
  };

  const handleMobileNavClick = (path: string) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  const navigationItems = [
    { path: "/", label: "Início" },
    { path: "#nossa-essencia", label: "Nossa Essência" },
    { path: "#servicos", label: "Serviços" },
    { path: "#portfolio", label: "Portfólio" },
    { path: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/11c891f3-3e7e-47ca-9d4a-c0dcb54ee9a0.png" 
                alt="7 PRODUÇÃO" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a 
                key={item.path}
                href={item.path} 
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Button 
            onClick={handleOrcamentoClick}
            className="hidden lg:inline-flex bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
          >
            Orçamento
          </Button>
          
          {/* Mobile Menu */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh]">
              <DrawerHeader className="text-center border-b border-gray-100">
                <DrawerTitle className="text-2xl font-light text-black">
                  Menu
                </DrawerTitle>
                <DrawerClose asChild>
                  <button className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </DrawerClose>
              </DrawerHeader>
              
              <div className="flex flex-col p-8 space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => handleMobileNavClick(item.path)}
                    className="text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200 py-4 border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </a>
                ))}
                
                <Button 
                  onClick={() => {
                    setIsDrawerOpen(false);
                    setTimeout(() => {
                      handleOrcamentoClick();
                    }, 100);
                  }}
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full font-medium text-lg mt-8 transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
