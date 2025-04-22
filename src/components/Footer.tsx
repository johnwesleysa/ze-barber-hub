
import { Phone, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">Barbearia do Zé</h3>
            <p className="text-muted-foreground">
              Cortes modernos e atendimento de qualidade desde 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Rua da Barbearia, 123 - São Paulo
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <a
              href="https://instagram.com/barbearia.ze"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @barbearia.ze
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
