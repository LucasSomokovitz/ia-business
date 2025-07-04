import Header from "@/components/Header";
import Footer from "@/components/Footer";

const youtubeVideos = [
  {
    id: 1,
    title: "Vídeo Promocional 1",
    url: "https://www.youtube.com/embed/fefz-CuCalQ",
    thumb: "https://img.youtube.com/vi/fefz-CuCalQ/hqdefault.jpg"
  },
  {
    id: 2,
    title: "Vídeo Promocional 2",
    url: "https://www.youtube.com/embed/ialji2ry1-w",
    thumb: "https://img.youtube.com/vi/ialji2ry1-w/hqdefault.jpg"
  },
  {
    id: 4,
    title: "Vídeo Promocional 4",
    url: "https://www.youtube.com/embed/KLEWsAb1bZ8",
    thumb: "https://img.youtube.com/vi/KLEWsAb1bZ8/hqdefault.jpg"
  },
  {
    id: 5,
    title: "Vídeo Promocional 5",
    url: "https://www.youtube.com/embed/9RDhZ6OmIFw",
    thumb: "https://img.youtube.com/vi/9RDhZ6OmIFw/hqdefault.jpg"
  },
  {
    id: 6,
    title: "Vídeo Promocional 6",
    url: "https://www.youtube.com/embed/jA4WqdHIdsU",
    thumb: "https://img.youtube.com/vi/jA4WqdHIdsU/hqdefault.jpg"
  },
  {
    id: 7,
    title: "Vídeo Promocional 7",
    url: "https://www.youtube.com/embed/f1y2FI8XxbI",
    thumb: "https://img.youtube.com/vi/f1y2FI8XxbI/hqdefault.jpg"
  },
  {
    id: 8,
    title: "Vídeo Promocional 8",
    url: "https://www.youtube.com/embed/L2lGp24D8hk",
    thumb: "https://img.youtube.com/vi/L2lGp24D8hk/hqdefault.jpg"
  }
];

const otherVideos = [
  // Adicione aqui vídeos de Drive, Instagram, Squarespace, se desejar
  // { id: 101, title: 'Vídeo Drive', url: '...', icon: '/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png' },
];

const ProducaoVideo = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 tracking-wide uppercase mb-6">
              <span className="w-8 h-px bg-gray-300"></span>
              <span>Produção de Vídeo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight mb-4">
              Nossos Projetos em Vídeo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Confira alguns dos nossos principais trabalhos de produção audiovisual.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden shadow-lg bg-black/5 group">
                <div className="aspect-video overflow-hidden">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-black">{video.title}</h4>
                </div>
              </div>
            ))}
            {otherVideos.map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden shadow-lg bg-black/5 group">
                <div className="aspect-video flex items-center justify-center bg-gray-100">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img src={video.icon} alt={video.title} className="w-16 h-16 object-contain" />
                  </a>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-brand-black">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProducaoVideo; 