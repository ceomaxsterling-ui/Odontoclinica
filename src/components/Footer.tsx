import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-foreground text-white/70 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M50 12C43 12 38 15.5 35.5 20L33 24.5L30.5 20C28 15.5 23 12 18 12C12 12 8 17 8 26C8 36.5 13.5 48 23 59C30 67.5 37.5 75.5 43 82.5C46 86.5 48.5 89 50 89C51.5 89 54 86.5 57 82.5C62.5 75.5 70 67.5 77 59C86.5 48 92 36.5 92 26C92 17 88 12 82 12C77 12 72 15.5 69.5 20L67 24.5L64.5 20C62 15.5 57 12 50 12Z" stroke="hsl(220,100%,55%)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="hsl(220,100%,55%)" fillOpacity="0.15"/>
                <path d="M38 42C40 48 44 52 50 52C56 52 60 48 62 42" stroke="hsl(220,100%,55%)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <span className="font-bold text-lg text-white">
                Odonto<span className="text-primary">Clínica</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Referência em odontologia de alta performance. Tecnologia, conforto e resultados excepcionais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#hero" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Tratamentos", href: "#tratamentos" },
                { label: "Resultados", href: "#resultados" },
                { label: "Blog", href: "#blog" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary" /> (11) 99999-9999 · WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" /> contato@odontoclinica.com.br
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" /> Av. Paulista, 1000 — São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 OdontoClínica Premium. Todos os direitos reservados.</p>
          <p>CRO-SP 00000 · Responsável Técnico: Dr. Nome Exemplo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
