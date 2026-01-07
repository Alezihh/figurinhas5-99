import { Star } from "lucide-react";

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
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            Prova Social
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Milhares de mulheres já{" "}
            <span className="text-gradient-gold italic">transformaram</span>{" "}
            seus Stories
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que elas estão dizendo sobre o Aesthetic Stories
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-4xl font-serif text-gradient-gold mb-1">5.000+</p>
            <p className="text-sm text-muted-foreground">Mulheres usando</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-4xl font-serif text-gradient-gold mb-1">4.9</p>
            <p className="text-sm text-muted-foreground">Nota média</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-4xl font-serif text-gradient-gold mb-1">500+</p>
            <p className="text-sm text-muted-foreground">Elementos</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-4xl font-serif text-gradient-gold mb-1">100%</p>
            <p className="text-sm text-muted-foreground">Satisfação</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-card transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
