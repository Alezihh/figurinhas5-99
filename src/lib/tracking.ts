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

const pushCtaClick = (payload: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "cta_click", payload);
  }
};

interface NavCtaClickParams {
  cta_id: string;
  cta_position: CtaPosition;
  product?: string;
}

/**
 * For CTAs that only scroll the page (Hero, after-before/after, mid-offer,
 * social proof, sticky bar, final CTA) — no plan has been chosen yet, so
 * this never carries plan/price. Never fires InitiateCheckout.
 */
export const trackNavCtaClick = ({
  cta_id,
  cta_position,
  product = "aesthetic_stories",
}: NavCtaClickParams) => {
  pushCtaClick({ event: "cta_click", cta_id, cta_position, product });
};

interface PurchaseCtaClickParams {
  cta_id: string;
  cta_position: CtaPosition;
  plan: string;
  price: number;
}

/**
 * Only for the two real checkout buttons in OfferSection (main_offer_basico /
 * main_offer_premium) — a plan has actually been chosen. This is a distinct
 * custom event from InitiateCheckout, which continues to fire externally
 * (Kirvano/UTMify) on the same click, so it never duplicates it.
 */
export const trackPurchaseCtaClick = ({
  cta_id,
  cta_position,
  plan,
  price,
}: PurchaseCtaClickParams) => {
  pushCtaClick({ event: "cta_click", cta_id, cta_position, plan, price });
};
