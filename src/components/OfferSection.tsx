import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Gift } from "lucide-react";

const offerItems = [
  { text: "+150 Figurinhas Estéticas", value: "R$ 97" },
  { text: "+80 Molduras Elegantes", value: "R$ 67" },
  { text: "+120 Ícones Minimalistas", value: "R$ 57" },
  { text: "+50 Divisores Femininos", value: "R$ 37" },
  { text: "+100 Elementos Florais", value: "R$ 47" },
  { text: "+30 Fundos & Texturas", value: "R$ 47" },
];

const bonuses = [
  { icon: Zap, text: "Bônus: Tutorial de uso", value: "R$ 47" },
  { icon: Gift, text: "Bônus: Pack de Cores Harmônicas", value: "R$ 27" },
];

const OfferSection = () => {
  const totalValue = 426;
  const price = 47;

  return (
    <section id="oferta" className="bg-gradient-hero section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            Oferta Especial
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Tudo isso por um valor{" "}
            <span className="text-gradient-gold italic">simbólico</span>
          </h2>
        </div>

        <div className="bg-card rounded-3xl shadow-elevated border border-primary/10 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-rose p-6 text-center">
            <p className="text-sm text-foreground/70 mb-1">Acesso Completo ao</p>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              Aesthetic Stories — Pack Premium
            </h3>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Items */}
            <div className="space-y-3 mb-8">
              {offerItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                  <span className="text-muted-foreground line-through text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bonuses */}
            <div className="bg-accent/50 rounded-2xl p-6 mb-8">
              <p className="text-sm font-medium text-foreground/70 mb-4">Bônus Exclusivos:</p>
              <div className="space-y-3">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <bonus.icon className="w-4 h-4 text-gold" />
                      <span className="text-foreground">{bonus.text}</span>
                    </div>
                    <span className="text-muted-foreground line-through text-sm">{bonus.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">
                De <span className="line-through">R$ {totalValue}</span> por apenas
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl md:text-6xl font-serif text-foreground">R$ {price}</span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pagamento único · Acesso vitalício
              </p>
            </div>

            {/* CTA */}
            <Button variant="cta" size="xl" className="w-full">
              Baixar agora e elevar meu Instagram
            </Button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
