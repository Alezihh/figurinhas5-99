import { Check, Sparkles, Video, Image, Box } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const bonusCards = [
  {
    number: 1,
    title: "BIBLIOTECA DE FONTES EXCLUSIVAS + AULA DE CRIAÇÃO",
    description: "Crie suas próprias figurinhas usando fontes que ninguém no seu nicho terá, destacando-se instantaneamente.",
    value: "R$97",
    icon: Sparkles,
  },
  {
    number: 2,
    title: "TUTORIAIS DE STORIES CRIATIVOS",
    description: "Transforme stories comuns em imagens que chamam a atenção do seu público, se destacando no seu nicho e aumentando suas vendas.",
    value: "R$97",
    icon: Video,
  },
  {
    number: 3,
    title: "+100 FUNDOS PREMIUM PARA STORIES E REELS",
    description: "Nunca mais perca tempo procurando fundos que combinam com sua marca.",
    value: "R$67",
    icon: Image,
  },
  {
    number: 4,
    title: "COLEÇÃO DE FIGURINHAS 3D PREMIUM",
    description: "O tipo de visual que faz seguidores pararem, olharem duas vezes e pensarem \"como eles fizeram isso?!\"",
    value: "R$47",
    icon: Box,
  },
];

const nichadasItems = [
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
  "E muito mais...",
];

const universaisItems = [
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
  "E muito mais...",
];

const YouTubeWithSound = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldPlay(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl shadow-card border border-border/50 overflow-hidden">
      {shouldPlay ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LVljMU-MBnQ?autoplay=1&loop=1&playlist=LVljMU-MBnQ&controls=0&modestbranding=1&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Stickers Demo"
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">▶ Role para assistir</span>
        </div>
      )}
    </div>
  );
};

const BonusSection = () => {
  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedSection>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MAS ESPERE!
              <br />
              AINDA TEM MAIS...
            </motion.h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Para garantir seu sucesso absoluto e eliminar qualquer barreira que impeça sua transformação,{" "}
              <span className="text-foreground font-semibold">
                vou incluir 4 BÔNUS EXCLUSIVOS que multiplicarão seus resultados:
              </span>
            </p>
          </AnimatedSection>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bonusCards.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <AnimatedSection key={bonus.number} delay={0.1 * (index + 1)}>
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 h-full"
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.p 
                      className="text-sm text-primary font-medium mb-2 font-sans"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      Bônus {bonus.number}
                    </motion.p>
                    <h3 className="text-lg font-bold text-foreground mb-3 font-sans leading-tight min-h-[3.5rem]">
                      {bonus.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {bonus.description}
                    </p>
                    <div className="border-t border-border/50 pt-4 mt-auto">
                      <p className="text-sm text-muted-foreground">
                        Valor real: <span className="line-through">{bonus.value}</span>
                      </p>
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Para você: <span className="text-primary font-bold text-base">GRÁTIS</span>
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Nichos Section */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              São mais de <motion.span 
                className="text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >10.000 figurinhas</motion.span> para os mais diversos nichos
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Nichadas */}
          <AnimatedSection direction="left" delay={0.4}>
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-primary text-center mb-1">
                Nichadas
              </h4>
              <div className="border-b-2 border-dashed border-primary/30 mb-4" />
              <ul className="space-y-2">
                {nichadasItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-center gap-3 text-sm md:text-base ${
                      item === "E muito mais..." ? "text-primary font-medium" : "text-foreground"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.3 }}>
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="border-t-2 border-dashed border-primary/30 mt-4" />
            </motion.div>
          </AnimatedSection>

          {/* Universais */}
          <AnimatedSection direction="right" delay={0.5}>
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-primary text-center mb-1">
                Universais
              </h4>
              <div className="border-b-2 border-dashed border-primary/30 mb-4" />
              <ul className="space-y-2">
                {universaisItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-center gap-3 text-sm md:text-base ${
                      item === "E muito mais..." ? "text-primary font-medium" : "text-foreground"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.3 }}>
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="border-t-2 border-dashed border-primary/30 mt-4" />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Video Demo */}
        <AnimatedSection delay={0.6}>
          <div className="mt-12 flex justify-center">
            <VideoWithSound />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BonusSection;
