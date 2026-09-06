import HeroSection from "@/components/HeroSection";
import { TransformationSection, MoreTransformationsSection } from "@/components/TransformationSection";
import PainSection from "@/components/PainSection";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FirstOfferSection from "@/components/FirstOfferSection";
import ProductSection from "@/components/ProductSection";
import ForWhoSection from "@/components/ForWhoSection";
import SocialProofSection from "@/components/SocialProofSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import StoriesCarousel from "@/components/StoriesCarousel";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <>
      <main className="overflow-hidden pb-16 md:pb-0">
        <HeroSection />
        <TransformationSection />
        <PainSection />
        <CategoriesSection />
        <HowItWorksSection />
        <FirstOfferSection />
        <SocialProofSection />
        <MoreTransformationsSection />
        <ProductSection />
        <StoriesCarousel />
        <BonusSection />
        <ForWhoSection />
        <OfferSection />
        <GuaranteeSection />
        <AboutSection />
        <FinalCTASection />
        <Footer />
      </main>
      <StickyMobileCTA />
    </>
  );
};

export default Index;
