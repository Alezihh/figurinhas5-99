import story1 from "@/assets/after-fitness.jpg";
import story2 from "@/assets/after-fruit.jpg";
import story3 from "@/assets/after-gym.jpg";
import story4 from "@/assets/after-lingerie.jpg";
import story5 from "@/assets/after-netflix.jpg";
import story6 from "@/assets/after-pizza.jpg";
import story7 from "@/assets/after-image.png";

const stories = [story1, story2, story3, story4, story5, story6, story7];

const StoriesCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-soft overflow-hidden">
      <div className="container-wide px-5 md:px-8 mb-10 md:mb-14 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium tracking-wider uppercase mb-4">
          Inspirações reais
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
          Veja como ficam <span className="text-gradient-gold italic">seus stories</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Mais de 500 stories prontos pra você usar em qualquer momento do seu dia
        </p>
      </div>

      <div className="w-full overflow-hidden py-6">
        <div className="flex gap-4 md:gap-6 animate-scroll-left w-max">
          {[...stories, ...stories, ...stories].map((src, index) => (
            <div
              key={`story-${index}`}
              className="shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 aspect-[9/16] rounded-2xl overflow-hidden shadow-card border-2 border-background"
            >
              <img
                src={src}
                alt={`Story pronto ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesCarousel;
