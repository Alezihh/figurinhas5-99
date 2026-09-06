declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export type CtaPosition =
  | "hero"
  | "after_before_after"
  | "mid_offer"
  | "social_proof"
  | "main_offer"
  | "sticky"
  | "final";

interface CtaClickParams {
  cta_id: string;
  cta_position: CtaPosition;
  plan?: string;
  price?: number;
  product?: string;
}

/**
 * Tracks CTA clicks that only scroll or open a plan selection — never the
 * real checkout. Real InitiateCheckout continues to fire externally
 * (Kirvano/UTMify), untouched, so this never duplicates it.
 */
export const trackCtaClick = ({
  cta_id,
  cta_position,
  plan,
  price,
  product = "aesthetic_stories",
}: CtaClickParams) => {
  const payload = {
    event: "cta_click",
    cta_id,
    cta_position,
    plan,
    price,
    product,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "cta_click", payload);
  }
};
