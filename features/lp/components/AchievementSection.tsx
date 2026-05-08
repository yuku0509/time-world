// features/lp/components/AchievementSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

export default function AchievementSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 左側：テキストとリスト */}
        <div className="text-left">
          <SectionTitle title="学生たちの輝かしい実績" center={false} />
          
          <ul className="space-y-6 mt-10">
            <li className="border-b border-gray-200 pb-4">
              <p className="text-red-600 font-bold text-lg mb-1">【優勝】関東学生陸上競技対校選手権大会</p>
              <p className="text-gray-700">駅伝競走部・男子10,000m、男子ハーフマラソンで優勝を飾りました！</p>
            </li>
            <li className="border-b border-gray-200 pb-4">
              <p className="text-red-600 font-bold text-lg mb-1">【ベスト16】全日本大学サッカー選手権大会</p>
              <p className="text-gray-700">男子サッカー部・昨年のベスト16を超える快進撃を見せました！</p>
            </li>
            <li className="pb-4">
              <p className="text-red-600 font-bold text-lg mb-1">【3位】全日本インカレ（バレーボール）</p>
              <p className="text-gray-700">女子バレーボール部・昨年の悔しさをバネに、見事3位に輝きました！</p>
            </li>
          </ul>
        </div>
        
        {/* 右側：実績画像（プレースホルダー） */}
        <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center border border-gray-200 text-gray-400 font-bold">
          実績画像 (プレースホルダー)
        </div>
      </div>
    </section>
  );
}