import beforeImage from "@/assets/before-image.png";
import afterImage from "@/assets/after-image.png";
import beforeLingerie from "@/assets/before-lingerie.jpg";
import afterLingerie from "@/assets/after-lingerie.jpg";
import beforePizza from "@/assets/before-pizza.jpg";
import afterPizza from "@/assets/after-pizza.jpg";
import beforeGym from "@/assets/before-gym.png";
import afterGym from "@/assets/after-gym.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const transformations = [
  { before: beforeImage, after: afterImage, beforeAlt: "Story sem elementos", afterAlt: "Story com stickers elegantes" },
  { before: beforeLingerie, after: afterLingerie, beforeAlt: "Story de lingerie sem elementos", afterAlt: "Story de lingerie com stickers" },
  { before: beforePizza, after: afterPizza, beforeAlt: "Story de pizza sem elementos", afterAlt: "Story de pizza com stickers" },
];

const TransformationSection = () => {
  return (
    <section className="bg-gradient-soft section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-12">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
              A Transformação
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground max-w-3xl mx-auto">
              De Stories esquecíveis para{" "}
              <span className="text-gradient-gold italic">memoráveis</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Com os elementos certos, seus Stories ganham vida, harmonia e uma identidade que transmite exatamente quem você é.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-12">
          {transformations.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Before */}
              <AnimatedSection direction="left" delay={0.2}>
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-elevated bg-muted"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="absolute top-4 left-4 z-10 px-4 py-2 bg-foreground/80 text-background rounded-full text-sm font-medium"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    BEFORE
                  </motion.div>
                  <img
                    src={item.before}
                    alt={item.beforeAlt}
                    className="w-full h-auto aspect-[9/16] object-cover"
                  />
                </motion.div>
              </AnimatedSection>

              {/* After */}
              <AnimatedSection direction="right" delay={0.3}>
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-elevated bg-muted"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="absolute top-4 right-4 z-10 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    AFTER
                  </motion.div>
                  <img
                    src={item.after}
                    alt={item.afterAlt}
                    className="w-full h-auto aspect-[9/16] object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { emoji: "✨", title: "Harmonia Visual", desc: "Cada elemento foi criado para combinar perfeitamente entre si" },
            { emoji: "💫", title: "Identidade Única", desc: "Seu Instagram passa a ter uma personalidade visual marcante" },
            { emoji: "🌸", title: "Sofisticação Feminina", desc: "Elegância e delicadeza em cada detalhe visual" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <motion.div 
                className="text-center p-6"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                </motion.div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
