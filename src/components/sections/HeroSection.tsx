import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  { icon: Star, label: "+5.000 Sorrisos", delay: 0.8 },
  { icon: Shield, label: "15 Anos de Excelência", delay: 1.0 },
  { icon: Sparkles, label: "Tecnologia 3D", delay: 1.2 },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,62%,12%)] via-[hsl(220,80%,20%)] to-[hsl(220,100%,30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(220,100%,55%,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(220,100%,55%,0.1),transparent_50%)]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Clínica Referência em Odontologia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Transforme Seu Sorriso.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,100%,70%)] to-[hsl(200,100%,75%)]">
              Viva com Confiança.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed"
          >
            Tecnologia de ponta, equipe especializada e um atendimento humanizado
            que coloca o seu bem-estar em primeiro lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("#contato")}
              className="rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              Agende Sua Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#tratamentos")}
              className="rounded-full px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              Conheça Nossos Tratamentos
            </Button>
          </motion.div>
        </div>

        {/* Floating cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
              className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3 animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">{card.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("#diferenciais")}
      >
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 text-white/50 animate-bounce-gentle" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
