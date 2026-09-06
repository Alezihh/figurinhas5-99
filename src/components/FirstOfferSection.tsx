import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { trackCtaClick } from "@/lib/tracking";

const highlights = [
  "+15.000 figurinhas estéticas",
  "Acesso imediato e vitalício",
  "Pagamento único",
];

const scrollToOffer = () => {
  trackCtaClick({ cta_id: "mid_offer_primary", cta_position: "mid_offer", price: 9.9 });
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const FirstOfferSection = () => {
  return (
    <section className="bg-background section-padding !py-10 md:!py-16">
      <div className="container-narrow">
        <AnimatedSection>
          <motion.div
            className="bg-gradient-rose rounded-3xl p-6 md:p-10 text-center shadow-elevated"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-foreground">
              Pronta para deixar seus Stories{" "}
              <span className="text-gradient-gold italic">muito mais bonitos</span>?
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-sm md:text-base text-foreground/80">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-1">A partir de</p>
            <p className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              R$ 9<span className="text-lg text-muted-foreground">,90</span>
            </p>

            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="cta"
                size="xl"
                onClick={scrollToOffer}
                className="rounded-full animate-pulse-border-slow"
              >
                Quero acessar agora
              </Button>
            </motion.div>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs md:text-sm text-muted-foreground">
              <Zap className="w-3.5 h-3.5" />
              <span>Acesso liberado assim que o pagamento é confirmado</span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FirstOfferSection;
