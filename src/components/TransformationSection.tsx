import beforeFruit from "@/assets/before-fruit.png";
import afterFruit from "@/assets/after-fruit.jpg";
import beforeLingerie from "@/assets/before-lingerie.jpg";
import afterLingerie from "@/assets/after-lingerie.jpg";
import beforeGym from "@/assets/before-gym.png";
import afterGym from "@/assets/after-gym.jpg";
import beforeNetflix from "@/assets/before-netflix.png";
import afterNetflix from "@/assets/after-netflix.jpg";
import beforeFitness from "@/assets/before-fitness.png";
import afterFitness from "@/assets/after-fitness.jpg";
import beforePizza from "@/assets/before-pizza.jpg";
import afterPizza from "@/assets/after-pizza.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { trackNavCtaClick } from "@/lib/tracking";

const firstBatch = [
  { before: beforeFruit, after: afterFruit, beforeAlt: "Story de café da manhã sem elementos", afterAlt: "Story de café da manhã com stickers" },
  { before: beforeGym, after: afterGym, beforeAlt: "Story de academia sem elementos", afterAlt: "Story de academia com stickers" },
  { before: beforeNetflix, after: afterNetflix, beforeAlt: "Story de rotina sem elementos", afterAlt: "Story de rotina com stickers" },
  { before: beforePizza, after: afterPizza, beforeAlt: "Story de lazer sem elementos", afterAlt: "Story de lazer com stickers" },
];

const secondBatch = [
  { before: beforeFitness, after: afterFitness, beforeAlt: "Story fitness sem elementos", afterAlt: "Story fitness com stickers" },
  { before: beforeLingerie, after: afterLingerie, beforeAlt: "Story sem elementos", afterAlt: "Story com stickers" },
];

interface Pair {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

const TransformationPair = ({ item, index }: { item: Pair; index: number }) => (
  <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
    <AnimatedSection direction="left" delay={0.1}>
      <motion.div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated bg-muted"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 px-2.5 py-1 md:px-4 md:py-2 bg-foreground/80 text-background rounded-full text-xs md:text-sm font-medium">
          SEM
        </div>
        <img
          src={item.before}
          alt={item.beforeAlt}
          className="w-full h-auto aspect-[9/16] object-cover"
          loading={index === 0 ? undefined : "lazy"}
        />
      </motion.div>
    </AnimatedSection>

    <AnimatedSection direction="right" delay={0.15}>
      <motion.div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated bg-muted"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 px-2.5 py-1 md:px-4 md:py-2 bg-primary text-primary-foreground rounded-full text-xs md:text-sm font-medium">
          COM
        </div>
        <img
          src={item.after}
          alt={item.afterAlt}
          className="w-full h-auto aspect-[9/16] object-cover"
          loading={index === 0 ? undefined : "lazy"}
        />
      </motion.div>
    </AnimatedSection>
  </div>
);

const scrollToOffer = () => {
  trackNavCtaClick({ cta_id: "after_before_after", cta_position: "after_before_after" });
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

export const TransformationSection = () => {
  return (
    <section className="bg-gradient-soft section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-8 md:mb-12">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-4 md:mb-6">
              A Transformação
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-6 text-foreground max-w-3xl mx-auto">
              A mesma foto. Só que com{" "}
              <span className="text-gradient-gold italic">Aesthetic Stories</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-6 md:space-y-12">
          {firstBatch.map((item, idx) => (
            <TransformationPair key={idx} item={item} index={idx} />
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mt-10 md:mt-12 px-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                variant="cta"
                size="xl"
                onClick={scrollToOffer}
                className="rounded-full animate-pulse-border-slow w-full sm:w-auto whitespace-normal text-center leading-snug h-auto py-4 sm:h-14 sm:py-0 sm:whitespace-nowrap"
              >
                Quero fazer isso nos meus Stories
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export const MoreTransformationsSection = () => {
  return (
    <section className="bg-background section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-8 md:mb-12">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-foreground max-w-3xl mx-auto">
              Uma figurinha muda mais do que{" "}
              <span className="text-gradient-gold italic">parece</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-6 md:space-y-12 max-w-3xl mx-auto">
          {secondBatch.map((item, idx) => (
            <TransformationPair key={idx} item={item} index={idx + firstBatch.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
