import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Check, Star, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// Kirvano checkout for the R$ 10,99 Premium offer shown only in this popup.
export const UPSELL_CHECKOUT_URL = "https://pay.kirvano.com/33c6b46d-e64a-48ca-bfd6-f52bbcbdc672";
export const UPSELL_PRICE = 10.99;

const tickerItems = ["Liberado por tempo limitado", "Oferta única", "Desconto exclusivo"];

interface UpsellDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  includedItems: string[];
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellDialog = ({ open, onOpenChange, includedItems, onAccept, onDecline }: UpsellDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md max-h-[92dvh] overflow-y-auto p-0 gap-0 rounded-3xl border-0 bg-gradient-to-b from-white to-pink-50/60 sm:rounded-3xl [&>button:last-child]:top-1 [&>button:last-child]:right-2 [&>button:last-child]:rounded-full [&>button:last-child]:p-1 [&>button:last-child]:opacity-100 [&>button:last-child]:!bg-red-700 [&>button:last-child]:!text-white">
        {/* Ticker */}
        <div className="overflow-hidden bg-red-600 py-2 rounded-t-3xl">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {tickerItems.map((item) => (
                  <span key={item} className="flex items-center gap-4 px-4 text-xs font-display font-extrabold uppercase tracking-wider text-white whitespace-nowrap">
                    {item}
                    <AlertTriangle className="w-3 h-3 text-white/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pt-6 pb-6 sm:px-7 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-red-100 text-xs font-display font-extrabold uppercase tracking-wide text-red-700">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-red-600"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            Desconto especial liberado
          </span>

          <p className="flex items-center justify-center gap-2 mb-1 font-serif text-2xl font-bold uppercase tracking-wider text-red-600">
            <AlertTriangle className="w-5 h-5" />
            Espere!
          </p>

          <DialogTitle className="font-serif text-3xl sm:text-4xl font-bold leading-[1.1] text-foreground mb-3">
            Temos uma <span className="text-gradient-pink">oferta especial de upgrade</span> pra você
          </DialogTitle>

          <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
            O Pack Básico dá acesso por apenas 3 meses. Faça o upgrade para o PREMIUM agora com desconto exclusivo.
          </DialogDescription>

          {/* Básico -> Premium */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex-1 rounded-2xl border border-border bg-white px-3 py-3">
              <p className="text-[10px] font-display font-bold uppercase tracking-wider text-muted-foreground">Pack Básico</p>
              <p className="font-display font-extrabold text-lg text-foreground/70">3 meses</p>
              <p className="text-xs text-muted-foreground">de acesso</p>
            </div>
            <ArrowRight className="w-5 h-5 text-pink-600 shrink-0" />
            <div className="flex-1 rounded-2xl border border-pink-300 bg-gradient-to-br from-pink-50 to-purple-100 px-3 py-3">
              <p className="text-[10px] font-display font-bold uppercase tracking-wider text-pink-600">Pack Premium</p>
              <p className="font-display font-extrabold text-lg text-foreground">Vitalício</p>
              <p className="text-xs text-muted-foreground">+ todos os bônus</p>
            </div>
          </div>

          {/* Price */}
          <div className="rounded-2xl border-2 border-pink-500 bg-gradient-to-b from-white to-pink-50 px-4 py-5 mb-5">
            <span className="inline-block px-4 py-1 mb-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-500 text-xs font-display font-extrabold uppercase tracking-wide text-white">
              Você economiza R$ 5,00
            </span>
            <p className="text-sm text-muted-foreground">
              Preço normal: <span className="font-semibold line-through">R$ 15,99</span>
            </p>
            <p className="text-sm text-muted-foreground">Nesta página apenas:</p>
            <p className="font-display font-extrabold leading-none my-1">
              <span className="text-gradient-pink align-top text-2xl">R$</span>{" "}
              <span className="text-gradient-pink text-6xl">10,99</span>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">Pagamento único</span> · sem mensalidade
            </p>
          </div>

          {/* Included */}
          <div className="rounded-2xl border border-border bg-white px-5 py-5 mb-6 text-left">
            <p className="text-center font-serif text-lg font-bold uppercase tracking-wider text-pink-600 mb-3">
              O que está incluído
            </p>
            <ul className="space-y-2.5">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-green-600 p-0.5 text-white" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-foreground">
                <Star className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-amber-500 p-0.5 text-white" />
                <span>7 dias de garantia incondicional</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-foreground">
                <Check className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-green-600 p-0.5 text-white" />
                <span>Acesso imediato</span>
              </li>
            </ul>
          </div>

          <motion.button
            type="button"
            onClick={onAccept}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 px-6 py-4 font-display font-extrabold uppercase tracking-wide text-white shadow-lg shadow-green-600/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            Quero o Pack Premium
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <button
            type="button"
            onClick={onDecline}
            className="mt-4 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Não, obrigado. Quero só o Básico por R$ 5,99
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsellDialog;
