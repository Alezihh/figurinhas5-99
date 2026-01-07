import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TransformationSection from "@/components/TransformationSection";
import ProductSection from "@/components/ProductSection";
import ForWhoSection from "@/components/ForWhoSection";
import SocialProofSection from "@/components/SocialProofSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainSection />
      <TransformationSection />
      <ProductSection />
      <ForWhoSection />
      <AboutSection />
      <SocialProofSection />
      <BonusSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
