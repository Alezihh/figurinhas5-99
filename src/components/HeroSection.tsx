import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { trackNavCtaClick } from "@/lib/tracking";

const flowSteps = ["Escolha", "Adicione", "Poste"];

const HeroSection = () => {
  const scrollToOffer = () => {
    trackNavCtaClick({ cta_id: "hero_primary", cta_position: "hero" });
    const element = document.getElementById("oferta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVideo = () => {
    trackNavCtaClick({ cta_id: "hero_secondary", cta_position: "hero" });
    const element = document.getElementById("video-demo");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden pb-8 pt-0">
      {/* Social proof bar */}
      <motion.div
        className="w-full py-3 bg-foreground/90 backdrop-blur-sm mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <p className="text-center text-sm text-background/90">
          +47 mil pessoas já fazem stories que chamam atenção. <span className="font-bold text-background">Falta você.</span>
        </p>
      </motion.div>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-48 h-48 bg-champagne/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/20 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide section-padding !py-8 md:!py-12 lg:!py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/60 rounded-full mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-foreground/80">+15.000 figurinhas para seus Stories</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-5 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Deixe qualquer{" "}
            <span className="italic">story</span>{" "}
            muito mais{" "}
            <span className="text-gradient-gold italic">bonito</span>{" "}
            em segundos
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Tenha acesso a um Pack de Figurinhas com milhares de opções para academia, viagens, estudos, skincare, maternidade, fé, rotina e muito mais.
          </motion.p>

          <motion.p
            className="text-base font-medium text-foreground/80 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Não precisa saber editar.
          </motion.p>

          {/* Flow: Escolha -> Adicione -> Poste */}
          <motion.div
            className="flex items-center gap-2 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {flowSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-card border border-border/60 text-sm font-medium text-foreground/80 shadow-soft">
                  {step}
                </span>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="cta"
                  size="xl"
                  onClick={scrollToOffer}
                  className="animate-pulse-border-slow rounded-full w-full sm:w-auto whitespace-normal text-center leading-snug h-auto py-4 sm:h-14 sm:py-0 sm:whitespace-nowrap"
                >
                  Quero acessar as +15.000 figurinhas
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="cta-outline" size="xl" onClick={scrollToVideo} className="w-full sm:w-auto">
                  Ver o que está incluso
                </Button>
              </motion.div>
            </div>

            <p className="text-sm text-muted-foreground">
              A partir de <span className="font-semibold text-foreground">R$ 9,90</span> • pagamento único
            </p>
          </motion.div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-rose/20 to-transparent rounded-3xl blur-2xl transform scale-110"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.img
              src={heroMockup}
              alt="Preview do Pack de Figurinhas Aesthetic Stories"
              className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl drop-shadow-2xl"
              style={{ imageRendering: 'crisp-edges' }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
