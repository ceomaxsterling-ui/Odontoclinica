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
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M32 4C24 4 20 8 18 12C16 8 12 4 8 4C4 4 2 8 2 14C2 24 8 34 16 44C20 49 24 54 28 58C30 60 31 62 32 62C33 62 34 60 36 58C40 54 44 49 48 44C56 34 62 24 62 14C62 8 60 4 56 4C52 4 48 8 46 12C44 8 40 4 32 4Z" fill="hsl(220,100%,55%)" />
            <path d="M32 10C26 10 23 13 21.5 16C20 13 17 10 13 10C10 10 8 13 8 17C8 25 13 33 19 41C22 45 25 49 28 53C30 55 31 56 32 56C33 56 34 55 36 53C39 49 42 45 45 41C51 33 56 25 56 17C56 13 54 10 51 10C47 10 44 13 42.5 16C41 13 38 10 32 10Z" fill="hsl(220,100%,65%)" />
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
