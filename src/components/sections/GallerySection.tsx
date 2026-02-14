import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const cases = [
  {
    image: beforeAfter1,
    treatment: "Clareamento Dental",
    testimonial: "Meu sorriso nunca esteve tão branco! O resultado foi incrível e o processo foi indolor.",
    name: "Maria Silva",
    role: "Paciente há 3 anos",
    rating: 5,
  },
  {
    image: beforeAfter2,
    treatment: "Lentes de Contato Dental",
    testimonial: "As lentes ficaram tão naturais que todos elogiam. Profissionais incríveis e tecnologia de ponta.",
    name: "Ana Beatriz Costa",
    role: "Paciente há 1 ano",
    rating: 5,
  },
  {
    image: beforeAfter3,
    treatment: "Implantes Dentários",
    testimonial: "A diferença na minha qualidade de vida é enorme. O planejamento 3D me deu total segurança.",
    name: "Roberto Santos",
    role: "Paciente há 5 anos",
    rating: 5,
  },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % cases.length);
  const prev = () => setCurrent((c) => (c - 1 + cases.length) % cases.length);

  return (
    <section id="resultados" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sorrisos Que Transformamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada sorriso conta uma história de confiança e transformação.
          </p>
        </ScrollAnimation>

        {/* Cases Carousel */}
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={cases[current].image}
                    alt={`Resultado ${cases[current].treatment}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {cases[current].treatment}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-primary/15 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(cases[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{cases[current].testimonial}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-base">{cases[current].name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{cases[current].name}</p>
                      <p className="text-xs text-muted-foreground">{cases[current].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full w-10 h-10 border-border">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full w-10 h-10 border-border">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              * Resultados podem variar de acordo com cada paciente.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GallerySection;
