import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const services = [
    { name: "Corte de Cabelo", price: "R$ 45" },
    { name: "Barba", price: "R$ 35" },
    { name: "Cabelo + Barba", price: "R$ 70" },
    { name: "Sobrancelha", price: "R$ 20" },
  ];

  const testimonials = [
    {
      name: "João Silva",
      text: "Melhor barbearia do bairro! Atendimento de primeira e ambiente agradável.",
    },
    {
      name: "Pedro Santos",
      text: "Cortes sempre impecáveis. Recomendo muito!",
    },
    {
      name: "Lucas Oliveira",
      text: "Profissionais muito capacitados e preço justo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-[url('/hero-barber.jpg')] bg-cover bg-center relative"
        style={{ backgroundPosition: '75% center' }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#020300] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Corte com estilo.</span><br />
            <span className="text-gradient">Tradição e atitude.</span>
          </h1>
          <Button
            size="lg"
            className="text-lg bg-primary text-background hover:bg-primary/90 mt-8"
            asChild
          >
            <a href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Gostaria de agendar um horário.')}`}
               target="_blank" 
               rel="noopener noreferrer">
              Agende seu horário
            </a>
          </Button>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Sobre Nós
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              A Barbearia do Zé nasceu em 2010 com o objetivo de oferecer cortes modernos 
              e um atendimento diferenciado. Com mais de 10 anos de experiência, nos 
              tornamos referência no bairro, sempre buscando a satisfação dos nossos 
              clientes através de um trabalho de qualidade e um ambiente acolhedor.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="p-6 text-center bg-background">
                <Scissors className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Nossa Galeria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['galeria1.jpg', 'galeria2.jpg', 'galeria3.jpg', 'galeria4.jpg'].map((img, i) => (
              <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                <img
                  src={`/images/${img}`}
                  alt={`Imagem ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Depoimentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background">
                <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
