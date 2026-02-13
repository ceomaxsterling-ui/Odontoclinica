import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group animate-fade-in"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="w-14 h-14 rounded-full bg-[hsl(145,63%,42%)] text-white shadow-xl shadow-[hsl(145,63%,42%,0.35)] flex items-center justify-center hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7" />
      </div>
      <span className="hidden sm:block bg-white text-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        (11) 99999-9999
      </span>
    </a>
  );
};

export default WhatsAppButton;
