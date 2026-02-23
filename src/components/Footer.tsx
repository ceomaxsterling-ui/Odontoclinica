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
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M32 4C24 4 20 8 18 12C16 8 12 4 8 4C4 4 2 8 2 14C2 24 8 34 16 44C20 49 24 54 28 58C30 60 31 62 32 62C33 62 34 60 36 58C40 54 44 49 48 44C56 34 62 24 62 14C62 8 60 4 56 4C52 4 48 8 46 12C44 8 40 4 32 4Z" fill="hsl(220,100%,55%)" />
                <path d="M32 10C26 10 23 13 21.5 16C20 13 17 10 13 10C10 10 8 13 8 17C8 25 13 33 19 41C22 45 25 49 28 53C30 55 31 56 32 56C33 56 34 55 36 53C39 49 42 45 45 41C51 33 56 25 56 17C56 13 54 10 51 10C47 10 44 13 42.5 16C41 13 38 10 32 10Z" fill="hsl(220,100%,65%)" />
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
