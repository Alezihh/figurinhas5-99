import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { trackNavCtaClick } from "@/lib/tracking";

const FinalCTASection = () => {
  const scrollToOffer = () => {
    trackNavCtaClick({ cta_id: "final_cta", cta_position: "final" });
    const element = document.getElementById("oferta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-hero section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 left-1/4 w-48 h-48 bg-rose/20 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-1/4 w-32 h-32 bg-champagne/30 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 30, 0],
          scale: [1, 1.3, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-narrow relative">
        <div className="text-center">
          <AnimatedSection>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/60 rounded-full mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-foreground/80">Última chance</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground max-w-3xl mx-auto leading-tight">
              Seu Instagram merece refletir quem você{" "}
              <span className="text-gradient-gold italic">realmente</span> é
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não deixe para depois. Cada dia que passa é um dia a menos com Stories que não representam sua verdadeira essência.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToOffer} 
                className="mb-6 animate-pulse-border-slow rounded-full"
              >
                Transformar meus Stories hoje
              </Button>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {["✨ +15.000 elementos premium", "🎁 Bônus exclusivos", "🔒 Garantia de 7 dias"].map((item, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
