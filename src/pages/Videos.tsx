import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Vídeo Promocional 1",
      url: "https://www.youtube.com/embed/fefz-CuCalQ",
      type: "youtube"
    },
    {
      id: 2,
      title: "Vídeo Promocional 2",
      url: "https://www.youtube.com/embed/ialji2ry1-w",
      type: "youtube"
    },
    {
      id: 3,
      title: "Vídeo Promocional 3",
      url: "https://www.youtube.com/embed/wx8E11AqS3Y",
      type: "youtube"
    },
    {
      id: 4,
      title: "Vídeo Promocional 4",
      url: "https://www.youtube.com/embed/KLEWsAb1bZ8",
      type: "youtube"
    },
    {
      id: 6,
      title: "Vídeo Promocional 5",
      url: "https://www.youtube.com/embed/9RDhZ6OmIFw",
      type: "youtube"
    },
    {
      id: 21,
      title: "Vídeo Promocional 6",
      url: "https://www.youtube.com/embed/jA4WqdHIdsU",
      type: "youtube"
    },
    {
      id: 22,
      title: "Vídeo Promocional 7",
      url: "https://www.youtube.com/embed/f1y2FI8XxbI",
      type: "youtube"
    },
    {
      id: 23,
      title: "Vídeo Promocional 8",
      url: "https://www.youtube.com/embed/L2lGp24D8hk",
      type: "youtube"
    }
  ];

  const driveLinks = [
    {
      id: 5,
      title: "Vídeo Drive 1",
      url: "https://drive.google.com/file/d/1uqapoASFk6CrTGkRg-Kz4n7E7iPEbYDb/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 9,
      title: "Vídeo Drive 2",
      url: "https://drive.google.com/file/d/1TzwmbGbGK9vAr25TA_JxbGRHN1pKX0Xd/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 11,
      title: "Vídeo Drive 3",
      url: "https://drive.google.com/file/d/1sor-zpT_jeEQiyqMugwLfcBHGcmNhkYr/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 13,
      title: "Vídeo Drive 4",
      url: "https://drive.google.com/file/d/1f-OQBAQ2ZIguEpCmCcG7XvYGzTB-1a7H/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 15,
      title: "Vídeo Drive 5",
      url: "https://drive.google.com/file/d/1htScB54Rdpm0yfGKoeyiy6CXTCtPt2YC/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 16,
      title: "Vídeo Drive 6",
      url: "https://drive.google.com/file/d/1nJd4akc2vUuvXybFQyS3rj0qkERx6sF8/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 17,
      title: "Vídeo Drive 7",
      url: "https://drive.google.com/file/d/1rNRMIHZdxL1M1Jt8Qd-LlCKtd5r_JiUm/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 19,
      title: "Vídeo Drive 8",
      url: "https://drive.google.com/file/d/1bdSVjIY_qIXSUz1HHh01P4cwxnzPqwty/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 20,
      title: "Vídeo Drive 9",
      url: "https://drive.google.com/file/d/1WWzsd3nJj4On_wksi1GbvoyiJrrNwTvI/view?usp=sharing",
      type: "drive",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    }
  ];

  const socialLinks = [
    {
      id: 7,
      title: "Instagram Reel 1",
      url: "https://www.instagram.com/reel/CZaYD7shDnW/",
      type: "instagram",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 8,
      title: "Instagram Reel 2",
      url: "https://www.instagram.com/reel/CZ4hTg9sfwH/",
      type: "instagram",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    }
  ];

  const otherLinks = [
    {
      id: 10,
      title: "Vídeo Squarespace 1",
      url: "https://vuvuzela-pentagon-9cb3.squarespace.com/videos?itemId=rge6zsulzmcoov0i25uzmfrsehlvel",
      type: "external",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 12,
      title: "Vídeo Squarespace 2",
      url: "https://vuvuzela-pentagon-9cb3.squarespace.com/videos?itemId=0yzyx9g0y64e1cxmm4iknkdzgb1adk",
      type: "external",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 14,
      title: "Vídeo Squarespace 3",
      url: "https://vuvuzela-pentagon-9cb3.squarespace.com/videos?itemId=a138bwfhn69egi30u843kjrso777ue",
      type: "external",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    },
    {
      id: 18,
      title: "Vídeo Squarespace 4",
      url: "https://vuvuzela-pentagon-9cb3.squarespace.com/videos?itemId=0n3lwgep6m3gojr85k3whuayjkmx7i",
      type: "external",
      icon: "/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
    }
  ];

  const LinkModal = ({ title, links, triggerImage }: { title: string; links: any[]; triggerImage: string }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <CardContent className="p-0">
              <div className="aspect-video bg-brand-gray-100 flex items-center justify-center">
                <img 
                  src={triggerImage} 
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand-black text-center">{title}</h3>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {links.map((link) => (
              <Card key={link.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-brand-gray-100 flex items-center justify-center">
                    <img 
                      src={link.icon} 
                      alt={link.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-brand-black mb-2">{link.title}</h4>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visualizar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
            Vídeos no YouTube
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-black">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
            Outros Conteúdos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkModal 
              title="Google Drive" 
              links={driveLinks} 
              triggerImage="/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
            />
            <LinkModal 
              title="Instagram" 
              links={socialLinks} 
              triggerImage="/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
            />
            <LinkModal 
              title="Other Links" 
              links={otherLinks} 
              triggerImage="/lovable-uploads/737ce262-9a76-4d86-b357-9c9d0e5ad463.png"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Videos;
