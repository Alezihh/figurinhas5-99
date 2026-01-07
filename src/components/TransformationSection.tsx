import beforeImage from "@/assets/before-image.png";
import afterImage from "@/assets/after-image.png";

const TransformationSection = () => {
  return (
    <section className="bg-gradient-soft section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm text-foreground/70 mb-6">
            A Transformação
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground max-w-3xl mx-auto">
            De Stories esquecíveis para{" "}
            <span className="text-gradient-gold italic">memoráveis</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com os elementos certos, seus Stories ganham vida, harmonia e uma identidade que transmite exatamente quem você é.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before */}
          <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-muted">
            <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-foreground/80 text-background rounded-full text-sm font-medium">
              BEFORE STORIES
            </div>
            <img
              src={beforeImage}
              alt="Antes - Story sem elementos"
              className="w-full h-auto aspect-[9/16] object-cover"
            />
          </div>

          {/* After */}
          <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-muted">
            <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              AFTER
            </div>
            <img
              src={afterImage}
              alt="Depois - Story com stickers elegantes"
              className="w-full h-auto aspect-[9/16] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-serif mb-2">Harmonia Visual</h3>
            <p className="text-muted-foreground text-sm">
              Cada elemento foi criado para combinar perfeitamente entre si
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-xl font-serif mb-2">Identidade Única</h3>
            <p className="text-muted-foreground text-sm">
              Seu Instagram passa a ter uma personalidade visual marcante
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4">
              <span className="text-2xl">🌸</span>
            </div>
            <h3 className="text-xl font-serif mb-2">Sofisticação Feminina</h3>
            <p className="text-muted-foreground text-sm">
              Elegância e delicadeza em cada detalhe visual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
