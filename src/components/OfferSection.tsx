import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Gift, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const basicItems = [
  "+15.000 Figurinhas Estéticas",
  "Acesso vitalício",
];

const premiumItems = [
  "+15.000 Figurinhas Estéticas",
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
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
              Oferta Especial
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Escolha o plano{" "}
              <span className="text-gradient-gold italic">ideal para você</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Basic Plan */}
          <AnimatedSection direction="left" delay={0.2}>
            <motion.div 
              className="bg-card rounded-3xl shadow-card border border-border overflow-hidden h-full"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
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
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm mb-1">
                    Por apenas
                  </p>
                  <motion.div 
                    className="flex items-baseline justify-center gap-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-4xl md:text-5xl font-serif text-foreground">R$ 9</span>
                    <span className="text-muted-foreground">,90</span>
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pagamento único
                  </p>
                </div>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://pay.kirvano.com/a0eb71a5-e20c-4c21-b1ba-b07478e3a578', '_blank')}
                >
                  Quero o Pack Básico
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Premium Plan */}
          <AnimatedSection direction="right" delay={0.3}>
            <motion.div 
              className="bg-card rounded-3xl shadow-elevated border-2 border-primary overflow-hidden relative animate-pulse-border h-full"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <motion.div 
                className="absolute -top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-b-lg"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Mais Popular
              </motion.div>

              <div className="bg-gradient-rose p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="w-5 h-5 text-gold" />
                  </motion.div>
                  <p className="text-sm text-foreground/70 font-medium">Completo</p>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-foreground">
                  Pack Premium
                </h3>
              </div>

              <div className="p-6 lg:p-8">
                <div className="space-y-3 mb-8">
                  {premiumItems.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.3 }}>
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-foreground text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="bg-accent/50 rounded-xl p-4 mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Gift className="w-4 h-4 text-gold" />
                    <span>Inclui todos os bônus exclusivos!</span>
                  </div>
                </motion.div>

                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm mb-1">
                    De <span className="line-through">R$ 97,90</span> por apenas
                  </p>
                  <motion.div 
                    className="flex items-baseline justify-center gap-1"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-4xl md:text-5xl font-serif text-foreground">R$ 19</span>
                    <span className="text-muted-foreground">,90</span>
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Pagamento único · Melhor custo-benefício
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full rounded-full py-6 text-base animate-pulse-border-slow"
                    onClick={() => window.open('https://pay.kirvano.com/d9d54fef-077a-42a1-9c35-312d5398fb3f', '_blank')}
                  >
                    Baixar agora e elevar meu Instagram
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Trust Badges */}
        <AnimatedSection delay={0.5}>
          <motion.div 
            className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-4 h-4" />
              <span>Compra segura</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Zap className="w-4 h-4" />
              <span>Acesso imediato</span>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OfferSection;
