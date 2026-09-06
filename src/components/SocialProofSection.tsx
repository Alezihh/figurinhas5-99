import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/tracking";

const scrollToOffer = () => {
  trackCtaClick({ cta_id: "social_proof_cta", cta_position: "social_proof", price: 9.9 });
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
};

const testimonials = [
  {
    name: "Mariana S.",
    role: "Empreendedora Digital",
    text: "Meus Stories nunca estiveram tão bonitos! Recebo elogios toda semana. Valeu muito a pena.",
    rating: 5
  },
  {
    name: "Juliana C.",
    role: "Criadora de Conteúdo",
    text: "Finalmente meu Instagram tem uma identidade visual que combina comigo. Amei cada detalhe!",
    rating: 5
  },
  {
    name: "Ana Paula R.",
    role: "Designer de Interiores",
    text: "Economizo horas toda semana. Os elementos são lindos e super fáceis de usar.",
    rating: 5
  },
  {
    name: "Fernanda L.",
    role: "Coach de Carreira",
    text: "Minhas clientes perceberam a diferença imediatamente. Transmite muito mais profissionalismo.",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
              Prova Social
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Milhares de mulheres já{" "}
              <span className="text-gradient-gold italic">transformaram</span>{" "}
              seus Stories
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja o que elas estão dizendo sobre o Aesthetic Stories
            </p>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "5.000+", label: "Mulheres usando" },
            { value: "4.9", label: "Nota média" },
            { value: "500+", label: "Elementos" },
            { value: "100%", label: "Satisfação" }
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <motion.div 
                className="text-center p-6 bg-card rounded-2xl border border-border/50"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-4xl font-serif text-gradient-gold mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={0.15 * (index + 1)} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-card transition-shadow h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic font-serif text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-sm font-medium text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="cta"
                size="xl"
                onClick={scrollToOffer}
                className="rounded-full animate-pulse-border-slow"
              >
                Quero acessar agora
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProofSection;
