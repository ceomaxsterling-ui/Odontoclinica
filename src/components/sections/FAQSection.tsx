import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo dura o clareamento dental?",
    answer: "O clareamento dental profissional dura em média de 1 a 3 anos, dependendo dos hábitos alimentares e de higiene do paciente. Realizamos acompanhamento periódico para manter os resultados.",
  },
  {
    question: "As lentes de contato dental parecem naturais?",
    answer: "Sim! As lentes de contato dental são ultrafinas (0,2mm a 0,5mm) e personalizadas para cada paciente. O resultado é um sorriso harmonioso e completamente natural.",
  },
  {
    question: "Implantes dentários doem?",
    answer: "O procedimento é realizado com anestesia local e sedação, garantindo zero dor durante a cirurgia. No pós-operatório, utilizamos protocolos de conforto que minimizam qualquer desconforto.",
  },
  {
    question: "Qual a idade ideal para iniciar a ortodontia?",
    answer: "A primeira avaliação ortodôntica é recomendada aos 7 anos. Porém, o tratamento ortodôntico pode ser iniciado em qualquer idade, incluindo adultos com alinhadores invisíveis.",
  },
  {
    question: "Como funciona o planejamento digital 3D?",
    answer: "Utilizamos scanner intraoral de última geração para criar um modelo digital completo da sua boca. Isso permite planejar o tratamento com precisão milimétrica e mostrar o resultado esperado antes de iniciar.",
  },
  {
    question: "Vocês atendem convênios odontológicos?",
    answer: "Trabalhamos com os principais convênios do mercado. Entre em contato para verificar se o seu plano é atendido e conhecer nossas condições especiais para procedimentos estéticos.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tire Suas Dúvidas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Respondemos as perguntas mais comuns sobre nossos tratamentos.
          </p>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-md data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold text-base py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10">
              <p className="text-muted-foreground text-sm mb-4">Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
              <Button
                className="rounded-full px-8 font-semibold shadow-lg shadow-primary/25"
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre tratamentos.", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Pergunte no WhatsApp
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection;
