import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  "Home Office | Work",
  "Academia | Treino | Corrida",
  "Nutricionista",
  "Confeitaria",
  "Direito | Advocacia",
  "Esteticista",
  "Dentista",
  "Lash Designer",
  "Manicure",
  "Terapia | Psicologia",
  "Enfermagem",
  "Bom dia / Tarde / Noite",
  "Clima / Tempo",
  "Caixinha de Perguntas",
  "Elementos 3D",
  "Comida",
  "Café / Chá",
  "Cristã",
  "Férias / Praia",
  "Frases",
  "Maternidade",
  "Dona de Casa",
];

const CategoriesSection = () => {
  return (
    <section className="bg-background section-padding !py-10 md:!py-16">
      <div className="container-wide">
        <div className="text-center mb-8 md:mb-10">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-3 text-foreground">
              Tem figurinha para{" "}
              <span className="text-gradient-gold italic">praticamente tudo</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Mais de 10.000 figurinhas organizadas por nicho e por momento do seu dia.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-card border border-border/60 text-sm md:text-base text-foreground/80 shadow-soft"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.02 * index, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
            ))}
            <motion.span
              className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-primary/10 text-primary font-medium text-sm md:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * categories.length, duration: 0.3 }}
              viewport={{ once: true }}
            >
              e muito mais...
            </motion.span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CategoriesSection;
