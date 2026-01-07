import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Gift, Star, Crown } from "lucide-react";

const basicItems = [
  "+100 Figurinhas Estéticas",
  "+50 Molduras Elegantes",
  "+80 Ícones Minimalistas",
  "+30 Divisores Femininos",
  "Acesso vitalício",
];

const premiumItems = [
  "+200 Figurinhas Estéticas",
  "+100 Molduras Elegantes",
  "+150 Ícones Minimalistas",
  "+60 Divisores Femininos",
  "+120 Elementos Florais",
  "+50 Fundos & Texturas",
  "Tutorial completo de uso",
  "Pack de Cores Harmônicas",
  "Atualizações gratuitas",
  "Acesso vitalício",
];

const OfferSection = () => {
  return (
    <section id="oferta" className="bg-gradient-hero section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            Oferta Especial
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Escolha o plano{" "}
            <span className="text-gradient-gold italic">ideal para você</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Basic Plan */}
          <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
            <div className="bg-muted p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-foreground/70" />
                <p className="text-sm text-foreground/70 font-medium">Essencial</p>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-foreground">
                Pack Básico
              </h3>
            </div>

            <div className="p-6 lg:p-8">
              <div className="space-y-3 mb-8">
                {basicItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">
                  Por apenas
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">R$ 19</span>
                  <span className="text-muted-foreground">,90</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Pagamento único
                </p>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Quero o Pack Básico
              </Button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-card rounded-3xl shadow-elevated border-2 border-primary overflow-hidden relative">
            {/* Badge */}
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-b-lg">
              Mais Popular
            </div>

            <div className="bg-gradient-rose p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-gold" />
                <p className="text-sm text-foreground/70 font-medium">Completo</p>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-foreground">
                Pack Premium
              </h3>
            </div>

            <div className="p-6 lg:p-8">
              <div className="space-y-3 mb-8">
                {premiumItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Gift className="w-4 h-4 text-gold" />
                  <span>Inclui todos os bônus exclusivos!</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-muted-foreground text-sm mb-1">
                  De <span className="line-through">R$ 97</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">R$ 39</span>
                  <span className="text-muted-foreground">,90</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Pagamento único · Melhor custo-benefício
                </p>
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Quero o Pack Premium
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Compra segura</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
