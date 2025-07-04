import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "7producaobr@gmail.com",
      link: "mailto:7producaobr@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (47) 99992-8103",
      link: "tel:+5547999928103"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Blumenau - SC, Brasil",
      link: null
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda a sexta: 8h às 18h",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
            <span className="w-8 h-px bg-gray-300"></span>
            <span>Entre em Contato</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight mb-8">
            Vamos criar
            <br />
            <span className="font-medium text-gray-900">juntos</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Pronto para transformar sua visão em realidade? Entre em contato conosco 
            e vamos discutir como podemos ajudar no seu próximo projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
              <div>
              <h3 className="text-3xl font-medium text-black mb-6">
                Envie sua mensagem
              </h3>
              <p className="text-gray-600 font-light mb-8">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Seu nome" 
                    className="w-full px-4 py-3 border-gray-300 rounded-xl focus:border-black focus:ring-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 border-gray-300 rounded-xl focus:border-black focus:ring-black transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="(47) 99999-9999"
                  className="w-full px-4 py-3 border-gray-300 rounded-xl focus:border-black focus:ring-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de serviço
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-black focus:ring-black transition-colors bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="video">Produção de Vídeo</option>
                  <option value="audio">Produção de Áudio</option>
                  <option value="post">Pós-Produção</option>
                  <option value="digital">Conteúdo Digital</option>
                  <option value="external">Produção Externa</option>
                  <option value="showreel">Showreel</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea 
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..." 
                  rows={5}
                  className="w-full px-4 py-3 border-gray-300 rounded-xl focus:border-black focus:ring-black transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-medium text-black mb-6">
                Informações de contato
              </h3>
              <p className="text-gray-600 font-light mb-8">
                Entre em contato conosco através dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-black transition-colors font-light"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-light">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="font-medium text-black mb-4">
                Siga-nos nas redes sociais
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/eltonprodutordigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/5547999928103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
