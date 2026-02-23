import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Shield, Award, BadgeCheck, Building2 } from "lucide-react";

const certifications = [
  { icon: Shield, label: "CRO-SP" },
  { icon: Award, label: "ISO 9001" },
  { icon: BadgeCheck, label: "ABO" },
  { icon: Building2, label: "CFO" },
];

const partners = [
  "Amil Dental",
  "Bradesco Saúde",
  "SulAmérica",
  "Unimed",
  "Porto Seguro",
  "MetLife",
];

const TrustSection = () => {
  return (
    <section className="py-14 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Credibilidade
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Certificações & Convênios
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Reconhecida por órgãos oficiais e parceira dos principais convênios odontológicos.
          </p>
        </ScrollAnimation>

        {/* Certifications */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">{cert.label}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Partners marquee */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((name, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full bg-accent/60 border border-border text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TrustSection;
