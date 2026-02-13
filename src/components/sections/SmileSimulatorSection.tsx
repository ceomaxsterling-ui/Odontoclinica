import { useState } from "react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Eye, ChevronLeft, ChevronRight, Check } from "lucide-react";

const treatments = [
  { id: "whitening", label: "Clareamento", icon: "✨" },
  { id: "veneers", label: "Lentes de Contato", icon: "💎" },
  { id: "alignment", label: "Alinhamento", icon: "📐" },
];

const SmileSimulatorSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState("whitening");
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="section-padding bg-gradient-to-b from-[hsl(222,62%,12%)] to-[hsl(220,60%,18%)] text-white overflow-hidden">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[hsl(220,100%,70%)]" />
            Mecanismo Exclusivo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simulador de Sorriso com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,100%,70%)] to-[hsl(200,100%,75%)]">
              Inteligência Artificial
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Visualize como ficará seu sorriso antes mesmo de iniciar o tratamento.
            Tecnologia exclusiva que une ciência e design.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          {/* Left - Interactive UI */}
          <ScrollAnimation direction="left">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 space-y-6">
              {/* Upload area */}
              <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-8 h-8 text-white/60 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-white/80 font-medium mb-1">Envie sua foto</p>
                <p className="text-white/40 text-sm">Arraste ou clique para fazer upload</p>
              </div>

              {/* Treatment selection */}
              <div>
                <p className="text-white/60 text-sm font-medium mb-3">Selecione o tratamento:</p>
                <div className="grid grid-cols-3 gap-2">
                  {treatments.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                        selectedTreatment === t.id
                          ? "bg-primary/20 border-primary/50 text-white"
                          : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-2xl">{t.icon}</span>
                      <span className="text-xs font-medium">{t.label}</span>
                      {selectedTreatment === t.id && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full rounded-full py-6 font-semibold text-base shadow-xl shadow-primary/30">
                <Eye className="w-5 h-5 mr-2" />
                Visualizar Resultado
              </Button>
            </div>
          </ScrollAnimation>

          {/* Right - Before/After Preview */}
          <ScrollAnimation direction="right">
            <div className="space-y-4">
              <div
                className="relative rounded-2xl overflow-hidden aspect-square cursor-col-resize select-none shadow-2xl"
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
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop"
                  alt="Resultado simulado"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=600&fit=crop"
                    alt="Foto original"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: "none" }}
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10" style={{ left: `${sliderPos}%` }}>
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-foreground -mr-1" />
                    <ChevronRight className="w-4 h-4 text-foreground -ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-semibold backdrop-blur-sm">Antes</div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-semibold backdrop-blur-sm">Depois</div>
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold"
                  onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Agende uma Avaliação para Experimentar
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default SmileSimulatorSection;
