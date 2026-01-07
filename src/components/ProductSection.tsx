import StickersCarousel from "./StickersCarousel";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const productItems = [
  {
    title: "Figurinhas Estéticas",
    description: "Elementos decorativos delicados para dar vida aos seus Stories",
    count: "+150 itens"
  },
  {
    title: "Molduras Elegantes",
    description: "Enquadre suas fotos com sofisticação e estilo",
    count: "+80 molduras"
  },
  {
    title: "Ícones Minimalistas",
    description: "Ícones clean para organizar e destacar informações",
    count: "+120 ícones"
  },
  {
    title: "Divisores Femininos",
    description: "Separe seções dos seus Stories com elegância",
    count: "+50 divisores"
  },
  {
    title: "Elementos Florais",
    description: "Flores e folhagens delicadas para um toque natural",
    count: "+100 elementos"
  },
  {
    title: "Fundos & Texturas",
    description: "Backgrounds prontos para Stories impactantes",
    count: "+30 fundos"
  }
];

const ProductSection = () => {
  return (
    <section id="produto" className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
              O Que Você Recebe
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              <span className="text-gradient-gold">+15.000 elementos</span> prontos para transformar seus Stories
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma coleção completa, curada especialmente para mulheres que valorizam estética, organização e elegância.
            </p>
          </AnimatedSection>
        </div>

        {/* Stickers Carousel */}
        <div className="mb-16">
          <StickersCarousel />
        </div>

        {/* Product Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productItems.map((item, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <motion.div
                className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Check className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
                      <motion.span 
                        className="text-xs px-2 py-0.5 bg-accent rounded-full text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.count}
                      </motion.span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "PNG", desc: "Fundo transparente" },
            { label: "HD", desc: "Alta qualidade" },
            { label: "∞", desc: "Uso ilimitado" },
            { label: "⚡", desc: "Acesso imediato" }
          ].map((benefit, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <motion.div 
                className="p-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-3xl font-serif text-gradient-gold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {benefit.label}
                </motion.p>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
