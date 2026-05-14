// app/page.tsx
import Header from "@/components/layouts/Header";
import HeroSection from "@/features/lp/components/HeroSection";
import TroubleSection from "@/features/lp/components/TroubleSection";
import FeaturesSection from "@/features/lp/components/FeaturesSection";
import AchievementSection from "@/features/lp/components/AchievementSection";
import SupportSection from "@/features/lp/components/SupportSection";
import CompanyLogosSection from "@/features/lp/components/CompanyLogosSection";
import TestimonialSection from "@/features/lp/components/TestimonialSection";
import PricingSection from "@/features/lp/components/PricingSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* 画像2枚目を見ると、Heroの下からFeaturesにかけて暗い背景が続いているため、
        main全体、あるいは必要な部分を暗い背景（bg-blackやbg-[#111]）にするとより近づきます。
      */}
      <main className="bg-[#0a0a0a]">
        <HeroSection />
        
        {/* ★ここがポイント: TroubleSectionを上に引き上げてHeroに重ねる */}
        <div className="relative z-10 -mt-20 md:-mt-80">
          <TroubleSection />
        </div>

        {/* TroubleSectionが上にずれた分、FeaturesSectionも自然と上に詰まって表示されます */}
        <div className="pt-20 md:pt-10">
          <FeaturesSection />
        </div>
        
        <AchievementSection />
        <SupportSection />
        <CompanyLogosSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />

    </>
  );
}