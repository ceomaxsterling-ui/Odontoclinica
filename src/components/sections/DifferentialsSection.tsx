import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Monitor, HeartPulse, ShieldCheck, Users, Award } from "lucide-react";

const differentials = [
  {
    icon: Monitor,
    title: "Tecnologia 3D",
    description: "Planejamento digital avançado com scanner intraoral e impressão 3D para resultados precisos e previsíveis.",
  },
  {
    icon: HeartPulse,
    title: "Anestesia Sem Dor",
    description: "Técnicas modernas de sedação e anestesia computadorizada que eliminam o desconforto do tratamento.",
  },
  {
    icon: ShieldCheck,
    title: "Biossegurança Total",
    description: "Protocolos rigorosos de esterilização e controle de infecção que superam os padrões internacionais.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Equipe treinada para acolher, ouvir e tratar cada paciente de forma única e personalizada.",
  },
  {
    icon: Award,
    title: "Garantia de Satisfação",
    description: "Compromisso com a excelência e acompanhamento pós-tratamento para garantir os melhores resultados.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nos Torna Únicos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos tecnologia de última geração com um atendimento que prioriza
            o conforto e a segurança de cada paciente.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100} direction="scale">
              <div className="group bg-card rounded-2xl p-7 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
