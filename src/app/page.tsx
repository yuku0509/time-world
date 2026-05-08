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
import Button from "@/components/elements/Button";
import SectionTitle from "@/components/elements/SectionTitle";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 作った部品をControllerとして並べるだけ！ */}
        <HeroSection />
        <TroubleSection />
        <FeaturesSection />
        <AchievementSection />
        <SupportSection />
        <CompanyLogosSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      
      {/* 最後の赤いCTAフッター */}
      <footer className="bg-red-600 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
          <SectionTitle
            title="体育会系学生との出会いが、貴社の未来を創る。"
            subtitle="今すぐ出展を申し込む"
            center={true}
          />
          <Button href="#apply" className="w-full md:w-80 h-16 text-xl">
            今すぐ出展を申し込む
            {/* 右向きの矢印アイコン（SVG） */}
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <p className="text-xs opacity-70 mt-4">&copy; 2026 SPORTS BUSINESS EXPO All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}