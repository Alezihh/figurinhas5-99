import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const GuaranteeSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <motion.div 
            className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="shrink-0"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-rose flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-12 h-12 text-primary" />
                </motion.div>
              </motion.div>

              <div className="text-center md:text-left">
                <motion.h2 
                  className="text-2xl md:text-3xl font-serif mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Garantia de 7 dias
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Se por qualquer motivo você não ficar satisfeita com o Aesthetic Stories, 
                  basta enviar um e-mail em até 7 dias após a compra e devolvemos 100% do seu 
                  investimento. Sem perguntas, sem burocracia. Simples assim.
                </motion.p>
                <motion.p 
                  className="mt-4 text-sm text-foreground/70 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  Seu único risco é não experimentar.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;
