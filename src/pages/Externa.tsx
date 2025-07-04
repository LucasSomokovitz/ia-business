
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Externa = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Content Section */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-black mb-8">
              Conteúdo em desenvolvimento
            </h2>
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              Em breve você poderá conferir nossos trabalhos de produção externa, 
              eventos e gravações em locações especiais.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Externa;
