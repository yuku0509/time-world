// features/lp/components/HeroSection.tsx
import Button from "@/components/elements/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* 実際の画像が入るまでのダミー背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 z-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <p className="inline-block bg-red-600 text-white px-4 py-1 font-bold text-sm mb-6">
            SPORTS BUSINESS EXPO
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            体育会系の力が、<br />
            <span className="text-red-500">未来を創る。</span>
          </h1>
          <p className="text-base md:text-lg mb-10 text-gray-300">
            体育会系学生と企業をつなぐ、成果につながる採用イベント
          </p>
          <Button href="#apply" className="w-full md:w-80 h-16 text-xl">
            今すぐ出展を申し込む
          </Button>
        </div>
      </div>
    </section>
  );
}