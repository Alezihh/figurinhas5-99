import { Check, X } from "lucide-react";

const ForWhoSection = () => {
  const forWho = [
    "Mulheres que desejam um Instagram mais bonito e profissional",
    "Empreendedoras que querem transmitir credibilidade",
    "Criadoras de conteúdo que valorizam estética",
    "Qualquer mulher que quer se sentir orgulhosa ao postar",
    "Quem quer economizar tempo sem abrir mão da qualidade"
  ];

  const notForWho = [
    "Quem busca algo masculino ou agressivo visualmente",
    "Quem não usa Instagram Stories",
    "Quem prefere deixar o perfil sem cuidado visual"
  ];

  return (
    <section className="bg-gradient-soft section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            É Para Você?
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            O <span className="italic">Aesthetic Stories</span> foi feito para mulheres que...
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Who */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-primary/10">
            <h3 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              É para você se...
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Who */}
          <div className="bg-card/50 rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-serif mb-6 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              Não é para você se...
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
