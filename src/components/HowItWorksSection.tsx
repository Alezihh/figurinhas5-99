import { MousePointerClick, Sticker, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "1",
    icon: MousePointerClick,
    title: "Escolha a figurinha",
    description: "Encontre o elemento certo para o momento do seu Story.",
  },
  {
    number: "2",
    icon: Sticker,
    title: "Adicione ao seu Story",
    description: "Arraste, posicione e pronto — sem precisar de curso de edição.",
  },
  {
    number: "3",
    icon: Send,
    title: "Poste",
    description: "Compartilhe um Story muito mais bonito em poucos minutos.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-soft section-padding !py-10 md:!py-16">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-foreground">
            Escolheu a foto?{" "}
            <span className="text-gradient-gold italic">O resto é simples</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={0.1 * (index + 1)}>
              <motion.div
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                      {step.number}
                    </span>
                  </motion.div>
                  <h3 className="text-lg font-serif text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
