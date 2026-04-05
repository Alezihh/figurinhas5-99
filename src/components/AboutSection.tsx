import isabelaPhoto from "@/assets/isabela-photo.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-elevated"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={isabelaPhoto}
                  alt="Isabela Ferreira"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </motion.div>
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.span 
                  className="text-primary text-sm font-medium tracking-wider uppercase"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨ Conheça a criadora
                </motion.span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
                  Quem é Isabela Ferreira?
                </h2>
              </div>

              <div className="space-y-4 text-background/80 leading-relaxed">
                {[
                  "Me chamo Isabela, tenho 22 anos e atuo há 4 anos na área de Social Media. Sou formada em Marketing pela FAAP e, ao longo da minha trajetória, tive a oportunidade de trabalhar com grandes marcas e artistas de destaque no cenário nacional.",
                  "Já desenvolvi projetos para nomes como Banda Filhos de Jorge, Ara Ketu, Yolito, Durval Lelys, além de ter feito parte do lançamento de músicas de artistas como Léo Santana, Ivete Sangalo e Carlinhos Brown, entre muitos outros trabalhos concluídos com sucesso.",
                  "Muito antes de atuar profissionalmente, eu já era apaixonada por stories bem construídos, estéticos e elegantes. Antes mesmo de existir estratégia ou briefing, eu já criava figurinhas personalizadas para os meus próprios stories — por gosto, identidade e estética.",
                  "Com o tempo, percebi que esse cuidado visual poderia ir além do meu perfil. Foi então que decidi disponibilizar minhas criações para ajudar outras mulheres a deixarem seus stories mais bonitos, organizados e sofisticados, sem complicação."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {text}
                  </motion.p>
                ))}
                
                <motion.p 
                  className="text-background font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Hoje, compartilho esse universo diariamente no meu Instagram{" "}
                  <motion.a 
                    href="https://instagram.com/ifs.daily_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    @ifs.daily_
                  </motion.a>
                  , unindo estética, estratégia e elegância.
                </motion.p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
