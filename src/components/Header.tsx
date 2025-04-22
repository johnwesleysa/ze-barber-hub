
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Barbearia do Zé</h1>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <nav className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:relative top-full left-0 lg:top-auto w-full lg:w-auto bg-background lg:bg-transparent p-4 lg:p-0 gap-2 lg:gap-6`}>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
