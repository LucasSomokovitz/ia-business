import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NossaEssencia from "@/components/NossaEssencia";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero id='sessao' />
      <About id='sobre' />
      <NossaEssencia id='sobre' />
      <Services id='servicos' />
      <Portfolio id='portfolio' />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
