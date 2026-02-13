import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Todos", "Higiene", "Estética", "Novidades"];

const articles = [
  {
    title: "10 Dicas Para Manter Seus Dentes Brancos",
    snippet: "Descubra hábitos simples que ajudam a preservar a brancura natural dos seus dentes no dia a dia.",
    category: "Higiene",
    date: "12 Fev 2026",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop",
  },
  {
    title: "Lentes de Contato Dental: Tudo o Que Você Precisa Saber",
    snippet: "Guia completo sobre lentes de contato dental: indicações, procedimento, cuidados e resultados.",
    category: "Estética",
    date: "08 Fev 2026",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop",
  },
  {
    title: "Implantes Dentários Modernos: Evolução e Benefícios",
    snippet: "Como a tecnologia 3D revolucionou os implantes dentários com mais segurança e recuperação rápida.",
    category: "Novidades",
    date: "02 Fev 2026",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop",
  },
];

const BlogSection = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? articles : articles.filter((a) => a.category === active);

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Blog & Educação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conteúdo Para Sua Saúde Bucal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Artigos educativos para ajudar você a cuidar melhor do seu sorriso.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground hover:bg-accent border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <ScrollAnimation key={article.title} delay={i * 100}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.snippet}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary font-semibold text-sm group/btn hover:bg-transparent">
                    Ler Mais
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-10">
          <Button variant="outline" className="rounded-full px-8 font-semibold">
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BlogSection;
