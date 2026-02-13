import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    title: "Estética Dental",
    description: "Lentes de contato, clareamento e harmonização para um sorriso deslumbrante.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  },
  {
    title: "Implantes Dentários",
    description: "Implantes de titânio com tecnologia guiada para máxima precisão e durabilidade.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  },
  {
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos modernos para um sorriso perfeitamente alinhado.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop",
  },
  {
    title: "Odontopediatria",
    description: "Cuidado especializado e acolhedor para a saúde bucal dos pequenos desde cedo.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
  {
    title: "Próteses Dentárias",
    description: "Próteses fixas e removíveis com materiais premium e acabamento natural.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
  },
  {
    title: "Periodontia",
    description: "Tratamento e prevenção de doenças gengivais para manter sua saúde bucal em dia.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
  },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cuidado Completo Para Seu Sorriso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de tratamentos odontológicos com as técnicas
            mais avançadas do mercado.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{treatment.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{treatment.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary font-semibold text-sm group/btn hover:bg-transparent">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
