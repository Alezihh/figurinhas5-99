import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackCtaClick } from "@/lib/tracking";

const SHOW_AFTER_PX = 500;

const StickyMobileCTA = () => {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    // This only scrolls to the offer/plans section — it never opens checkout,
    // so it must never be mistaken for InitiateCheckout.
    trackCtaClick({ cta_id: "sticky_mobile", cta_position: "sticky", price: 9.9 });
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border shadow-elevated px-4 py-2.5 flex items-center justify-between gap-3"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="min-w-0">
            <p className="text-xs font-medium text-foreground truncate">Aesthetic Stories</p>
            <p className="text-xs text-muted-foreground">
              A partir de <span className="font-semibold text-foreground">R$ 9,90</span>
            </p>
          </div>
          <Button
            variant="cta"
            size="sm"
            onClick={handleClick}
            className="rounded-full shrink-0 px-5"
          >
            Quero acessar
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
