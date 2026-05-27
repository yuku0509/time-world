// features/lp/components/CompanyLogosSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

const companies = [
  "TOYOTA", "MIZUNO", "SONY", "NTT DATA", "Asahi", "Recruit",
  "NISSAN", "KOSÉ", "Kajima Corporation", "Dai-ichi Life"
];

export default function CompanyLogosSection() {
  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <SectionTitle title="過去参加企業（一部抜粋）" />
      </div>
      
      {/* スライダーのコンテナ
        groupクラスを付与し、ホバー時にアニメーションを止めるための準備をします 
      */}
      <div className="flex w-full overflow-hidden group">
        
        {/* コンポーネント内で直接CSSアニメーションを定義 */}
        <style>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: slide 30s linear infinite;
          }
        `}</style>

        {/* 1セット目のロゴリスト 
          group-hover:[animation-play-state:paused] で、マウスが乗った時にスライドを一時停止させます
        */}
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {companies.map((company, index) => (
            <div 
              key={`first-${index}`} 
              className="w-48 h-24 mx-4 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-200"
            >
              <p className="text-gray-600 font-bold text-lg">{company}</p>
            </div>
          ))}
        </div>

        {/* 2セット目のロゴリスト（途切れないシームレスなループを作るために全く同じものを配置）
        */}
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          {companies.map((company, index) => (
            <div 
              key={`second-${index}`} 
              className="w-48 h-24 mx-4 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-gray-200"
            >
              <p className="text-gray-600 font-bold text-lg">{company}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}