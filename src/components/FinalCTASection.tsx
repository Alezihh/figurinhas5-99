import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-hero section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-champagne/30 rounded-full blur-3xl" />

      <div className="container-narrow relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/60 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Última chance</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground max-w-3xl mx-auto leading-tight">
            Seu Instagram merece refletir quem você{" "}
            <span className="text-gradient-gold italic">realmente</span> é
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não deixe para depois. Cada dia que passa é um dia a menos com Stories que não representam sua verdadeira essência.
          </p>

          <Button variant="cta" size="xl" onClick={scrollToOffer} className="mb-6">
            Transformar meus Stories hoje
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>✨ +15.000 elementos premium</span>
            <span className="hidden sm:inline">·</span>
            <span>🎁 Bônus exclusivos</span>
            <span className="hidden sm:inline">·</span>
            <span>🔒 Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
