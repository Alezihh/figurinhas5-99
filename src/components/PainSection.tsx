import { Heart, Eye, Frown, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: Frown,
    title: "Stories bagunçados",
    description: "Você posta, mas sente que algo está faltando. Sem padrão, sem harmonia."
  },
  {
    icon: Eye,
    title: "Perfil amador",
    description: "Você olha para outros perfis e pensa: \"Por que o meu não fica assim?\""
  },
  {
    icon: HelpCircle,
    title: "Sem identidade",
    description: "Cada Story parece de uma pessoa diferente. Nada combina entre si."
  },
  {
    icon: Heart,
    title: "Vergonha de postar",
    description: "Você deixa de compartilhar momentos porque \"não está bonito o suficiente\"."
  }
];

const PainSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow text-center">
        <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
          Você se identifica?
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
          Seu Instagram não reflete quem você{" "}
          <span className="italic">realmente</span> é
        </h2>

        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Você se dedica, tem conteúdo bom, mas visualmente... algo não funciona. E isso te frustra.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <pain.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-foreground">{pain.title}</h3>
              <p className="text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-rose rounded-2xl">
          <p className="text-lg md:text-xl text-foreground/90 italic font-serif">
            "Eu queria muito ter um Instagram bonito, mas não sei design e não tenho tempo para aprender."
          </p>
          <p className="mt-4 text-sm text-foreground/60">
            — Provavelmente você, antes de conhecer o Aesthetic Stories
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
