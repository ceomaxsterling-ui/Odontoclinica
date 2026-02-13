import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Nome obrigatório";
    if (!formData.phone.trim()) e.phone = "Telefone obrigatório";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Email inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(`Olá! Meu nome é ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
  };

  const update = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende Sua Consulta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entre em contato e dê o primeiro passo para transformar seu sorriso.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollAnimation direction="left">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome Completo *</label>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={`rounded-xl ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={`rounded-xl ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone / WhatsApp *</label>
                <Input
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={`rounded-xl ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="rounded-xl min-h-[100px]"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="rounded-full flex-1 font-semibold shadow-lg shadow-primary/25">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full flex-1 font-semibold border-success text-success hover:bg-success hover:text-success-foreground"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Direto
                </Button>
              </div>
            </form>
          </ScrollAnimation>

          {/* Info + Map */}
          <ScrollAnimation direction="right">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Endereço</p>
                    <p className="text-muted-foreground text-sm">Av. Paulista, 1000 — Bela Vista, São Paulo — SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Telefone</p>
                    <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">contato@odontoclinica.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Horário</p>
                    <p className="text-muted-foreground text-sm">Seg–Sex: 08h–18h · Sáb: 08h–13h</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border border-border h-64">
                <iframe
                  title="Localização OdontoClínica"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6544!3d-23.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjUiUyA0NsKwMzknMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
