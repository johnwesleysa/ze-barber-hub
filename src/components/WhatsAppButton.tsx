
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de agendar um horário.";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};
