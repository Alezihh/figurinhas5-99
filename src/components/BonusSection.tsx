import { Check, Sparkles, Video, Image, Box } from "lucide-react";

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

const BonusSection = () => {
  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            MAS ESPERE!
            <br />
            AINDA TEM MAIS...
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Para garantir seu sucesso absoluto e eliminar qualquer barreira que impeça sua transformação,{" "}
            <span className="text-foreground font-semibold">
              vou incluir 4 BÔNUS EXCLUSIVOS que multiplicarão seus resultados:
            </span>
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bonusCards.map((bonus) => {
            const IconComponent = bonus.icon;
            return (
              <div
                key={bonus.number}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-primary font-medium mb-2 font-sans">
                    Bônus {bonus.number}
                  </p>
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
                    <p className="text-sm text-muted-foreground">
                      Para você: <span className="text-primary font-bold text-base">GRÁTIS</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nichos Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            São mais de <span className="text-primary">10.000 figurinhas</span> para os mais diversos nichos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Nichadas */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border/50">
            <h4 className="text-2xl md:text-3xl font-bold text-primary text-center mb-1">
              Nichadas
            </h4>
            <div className="border-b-2 border-dashed border-primary/30 mb-4" />
            <ul className="space-y-2">
              {nichadasItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 text-sm md:text-base ${
                    item === "E muito mais..." ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-dashed border-primary/30 mt-4" />
          </div>

          {/* Universais */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border/50">
            <h4 className="text-2xl md:text-3xl font-bold text-primary text-center mb-1">
              Universais
            </h4>
            <div className="border-b-2 border-dashed border-primary/30 mb-4" />
            <ul className="space-y-2">
              {universaisItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 text-sm md:text-base ${
                    item === "E muito mais..." ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-dashed border-primary/30 mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
