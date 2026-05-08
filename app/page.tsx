// app/page.tsx
import Header from "@/components/layouts/Header";
import HeroSection from "@/features/lp/components/HeroSection";
import TroubleSection from "@/features/lp/components/TroubleSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 作った部品をレゴブロックのように並べるだけ！ */}
        <HeroSection />
        <TroubleSection />
      </main>
      
      {/* 簡易的なフッター */}
      <footer className="bg-gray-900 text-white py-10 text-center text-sm">
        <p>&copy; 2026 SPORTS BUSINESS EXPO All rights reserved.</p>
      </footer>
    </>
  );
}