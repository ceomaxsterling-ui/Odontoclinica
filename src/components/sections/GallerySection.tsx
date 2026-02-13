import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Paciente há 3 anos",
    text: "A equipe da OdontoClínica transformou completamente meu sorriso. O atendimento é excepcional e os resultados superaram todas as minhas expectativas!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Paciente há 2 anos",
    text: "Sempre tive medo de dentista, mas aqui me senti acolhido desde a primeira consulta. A anestesia sem dor é real — mudou minha vida!",
    rating: 5,
  },
  {
    name: "Ana Beatriz Costa",
    role: "Paciente há 1 ano",
    text: "Fiz minhas lentes de contato dental aqui e o resultado ficou tão natural que todos elogiam. Profissionais incríveis e tecnologia de ponta.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Paciente há 5 anos",
    text: "Coloquei implantes e a diferença na minha qualidade de vida é enorme. O planejamento 3D me deu total segurança no procedimento.",
    rating: 5,
  },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="resultados" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de Sorrisos Transformados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Veja o que nossos pacientes dizem e os resultados que alcançamos juntos.
          </p>
        </ScrollAnimation>

        {/* Before/After Slider */}
        <ScrollAnimation className="max-w-2xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border aspect-[16/10] cursor-col-resize select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              setSliderPos(((touch.clientX - rect.left) / rect.width) * 100);
            }}
          >
            {/* After */}
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop"
              alt="Depois do tratamento"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Before */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop"
                alt="Antes do tratamento"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: "none" }}
                loading="lazy"
              />
            </div>
            {/* Divider */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-foreground -mr-1" />
                <ChevronRight className="w-4 h-4 text-foreground -ml-1" />
              </div>
            </div>
            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-semibold backdrop-blur-sm">Antes</div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-semibold backdrop-blur-sm">Depois</div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            * Resultados podem variar de acordo com cada paciente. Imagens ilustrativas.
          </p>
        </ScrollAnimation>

        {/* Testimonials Carousel */}
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{testimonials[current].name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full w-10 h-10">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full w-10 h-10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GallerySection;
