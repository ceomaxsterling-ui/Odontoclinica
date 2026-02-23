import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#hero" className="flex items-center gap-2.5" onClick={() => scrollTo("#hero")}>
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M50 8C42 8 36 12 33 17C30 12 24 8 18 8C10 8 4 15 4 26C4 38 10 50 20 62C28 72 36 80 42 88C45 92 48 95 50 95C52 95 55 92 58 88C64 80 72 72 80 62C90 50 96 38 96 26C96 15 90 8 82 8C76 8 70 12 67 17C64 12 58 8 50 8Z" fill="hsl(220,100%,55%)" opacity="0.15"/>
            <path d="M50 12C43 12 38 15.5 35.5 20L33 24.5L30.5 20C28 15.5 23 12 18 12C12 12 8 17 8 26C8 36.5 13.5 48 23 59C30 67.5 37.5 75.5 43 82.5C46 86.5 48.5 89 50 89C51.5 89 54 86.5 57 82.5C62.5 75.5 70 67.5 77 59C86.5 48 92 36.5 92 26C92 17 88 12 82 12C77 12 72 15.5 69.5 20L67 24.5L64.5 20C62 15.5 57 12 50 12Z" stroke="hsl(220,100%,55%)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M38 42C40 48 44 52 50 52C56 52 60 48 62 42" stroke="hsl(220,100%,55%)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Odonto<span className="text-primary">Clínica</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button onClick={() => scrollTo("#contato")} size="sm" className="rounded-full px-5 font-semibold shadow-lg shadow-primary/25">
            Agendar Consulta
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo("#contato")} className="mt-2 rounded-full font-semibold">
              Agendar Consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
