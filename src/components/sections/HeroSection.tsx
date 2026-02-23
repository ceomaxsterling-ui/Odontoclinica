import { motion } from "framer-motion";
import { ChevronDown, Star, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-smile.jpg";

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Clínica Referência em Odontologia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Transforme Seu Sorriso.{" "}
              <span className="text-gradient">
                Viva com Confiança.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
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
                className="rounded-full px-8 py-6 text-base font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                Conheça Nossos Tratamentos
              </Button>
            </motion.div>

            {/* Floating cards - mobile visible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md border border-border"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{card.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Sorriso radiante - OdontoClínica"
                className="w-full h-auto object-cover aspect-[3/2] lg:aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full blur-2xl hidden lg:block" />
          </motion.div>
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
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce-gentle" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
