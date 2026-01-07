import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container-narrow text-center">
        <p className="font-serif text-2xl text-background mb-4">
          Aesthetic Stories
        </p>
        <p className="text-sm mb-6">
          Elevando a estética do Instagram feminino, um Story por vez.
        </p>
        <div className="flex items-center justify-center gap-1 text-sm">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-rose fill-rose" />
          <span>para mulheres que valorizam a elegância</span>
        </div>
        <div className="mt-8 pt-8 border-t border-background/10 text-xs">
          <p>© {new Date().getFullYear()} Aesthetic Stories. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
