import isabelaPhoto from "@/assets/isabela-photo.png";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={isabelaPhoto}
                alt="Isabela Ferreira"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                ✨ Conheça a criadora
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
                Quem é Isabela Ferreira?
              </h2>
            </div>

            <div className="space-y-4 text-background/80 leading-relaxed">
              <p>
                Me chamo Isabela, tenho 22 anos e atuo há 4 anos na área de Social Media. 
                Sou formada em Marketing pela FAAP e, ao longo da minha trajetória, tive a 
                oportunidade de trabalhar com grandes marcas e artistas de destaque no cenário nacional.
              </p>
              
              <p>
                Já desenvolvi projetos para nomes como Banda Filhos de Jorge, Ara Ketu, Yolito, 
                Durval Lelys, além de ter feito parte do lançamento de músicas de artistas como 
                Léo Santana, Ivete Sangalo e Carlinhos Brown, entre muitos outros trabalhos 
                concluídos com sucesso.
              </p>
              
              <p>
                Muito antes de atuar profissionalmente, eu já era apaixonada por stories bem 
                construídos, estéticos e elegantes. Antes mesmo de existir estratégia ou briefing, 
                eu já criava figurinhas personalizadas para os meus próprios stories — por gosto, 
                identidade e estética.
              </p>
              
              <p>
                Com o tempo, percebi que esse cuidado visual poderia ir além do meu perfil. 
                Foi então que decidi disponibilizar minhas criações para ajudar outras mulheres 
                a deixarem seus stories mais bonitos, organizados e sofisticados, sem complicação.
              </p>
              
              <p className="text-background font-medium">
                Hoje, compartilho esse universo diariamente no meu Instagram{" "}
                <a 
                  href="https://instagram.com/ifs.daily_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ifs.daily_
                </a>
                , unindo estética, estratégia e elegância.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
