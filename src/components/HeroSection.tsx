import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-champagne/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/20 rounded-full blur-2xl" />

      <div className="container-wide section-padding flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/60 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Pack Premium de Stickers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 text-foreground">
            Transforme seus{" "}
            <span className="italic">Stories</span>{" "}
            em um reflexo da sua{" "}
            <span className="text-gradient-gold">elegância</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Figurinhas, molduras e elementos estéticos prontos para elevar seu Instagram ao nível de sofisticação que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="cta" size="xl" onClick={scrollToOffer}>
              Quero meus Stories mais elegantes
            </Button>
            <Button variant="cta-outline" size="xl" onClick={scrollToOffer}>
              Ver o que está incluso
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>+500 elementos</span>
            </div>
          </div>
        </div>

        {/* Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-b from-rose/20 to-transparent rounded-3xl blur-2xl transform scale-110" />
            <img
              src={heroMockup}
              alt="Preview do Pack Aesthetic Stories"
              className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
