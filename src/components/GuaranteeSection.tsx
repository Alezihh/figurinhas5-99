import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-rose flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                Garantia de 7 dias
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se por qualquer motivo você não ficar satisfeita com o Aesthetic Stories, 
                basta enviar um e-mail em até 7 dias após a compra e devolvemos 100% do seu 
                investimento. Sem perguntas, sem burocracia. Simples assim.
              </p>
              <p className="mt-4 text-sm text-foreground/70 font-medium">
                Seu único risco é não experimentar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
