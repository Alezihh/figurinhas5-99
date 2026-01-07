import StickersCarousel from "./StickersCarousel";
import { Check } from "lucide-react";

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
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            O Que Você Recebe
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            <span className="text-gradient-gold">+15.000 elementos</span> prontos para transformar seus Stories
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma coleção completa, curada especialmente para mulheres que valorizam estética, organização e elegância.
          </p>
        </div>

        {/* Stickers Carousel */}
        <div className="mb-16">
          <StickersCarousel />
        </div>

        {/* Product Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-accent rounded-full text-primary">
                      {item.count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <p className="text-3xl font-serif text-gradient-gold mb-2">PNG</p>
            <p className="text-sm text-muted-foreground">Fundo transparente</p>
          </div>
          <div className="p-6">
            <p className="text-3xl font-serif text-gradient-gold mb-2">HD</p>
            <p className="text-sm text-muted-foreground">Alta qualidade</p>
          </div>
          <div className="p-6">
            <p className="text-3xl font-serif text-gradient-gold mb-2">∞</p>
            <p className="text-sm text-muted-foreground">Uso ilimitado</p>
          </div>
          <div className="p-6">
            <p className="text-3xl font-serif text-gradient-gold mb-2">⚡</p>
            <p className="text-sm text-muted-foreground">Acesso imediato</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
