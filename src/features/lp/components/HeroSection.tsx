// features/lp/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] pt-16 pb-48 lg:pt-24 lg:pb-70 overflow-hidden min-h-[700px] lg:min-h-[1000px]">      
      {/* 1. 【 View / Background Image 】 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/hero_with_stadium.png"
          alt="スポーツビジネスEXPO メインビジュアル"
          fill 
          className="object-cover object-top lg:object-[80%_top]" 
          sizes="100vw"
          priority 
        />
      </div>

      {/* 【 Magic Blend 】 画像の下部を黒背景に自然にフェードアウトさせる */}
      <div className="absolute inset-x-0 bottom-0 h-40 lg:h-56 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* 3. 【 Controller / Content Area 】 */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="max-w-5xl">
          
          {/* メインコピー */}
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-black leading-tight mb-6 italic tracking-tighter drop-shadow-lg">
            <span className="text-gray-900">体育会の力が、</span><br />
            <span className="text-red-600 text-6xl md:text-8xl drop-shadow-xl">未来を創る。</span>
          </h1>
          
          {/* サブタイトル */}
          <div className="inline-block bg-black text-white px-6 py-3 transform -skew-x-12 mb-16 shadow-lg">
            <p className="text-sm md:text-base font-bold transform skew-x-12 tracking-wider">
              体育会系学生と企業をつなぐ、成果につながる採用イベント
            </p>
          </div>

          {/* 実績データカード */}
          <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200 w-fit py-4 md:py-8 px-2 md:px-4">
            
            {/* データ1 */}
            <div className="flex flex-col items-center justify-start flex-1 px-4 lg:px-8 py-5 md:py-0 min-w-[140px] lg:min-w-[190px]">
              {/* 見出し */}
              <span className="text-sm lg:text-base text-gray-800 font-bold mb-3 md:mb-4">参加学生数</span>
              {/* 数字 (サイズを大幅にアップ) */}
              <div className="flex items-baseline justify-center text-red-600 mb-3 md:mb-4">
                <span className="font-black text-5xl lg:text-[4rem] leading-none tracking-tighter">15,000</span>
              </div>
              {/* 単位 */}
              <span className="text-gray-900 font-bold text-sm lg:text-base tracking-widest md:h-6 flex items-center">名以上</span>
            </div>

            {/* データ2 */}
            <div className="flex flex-col items-center justify-start flex-1 px-4 lg:px-8 py-5 md:py-0 min-w-[140px] lg:min-w-[190px]">
              <span className="text-sm lg:text-base text-gray-800 font-bold mb-3 md:mb-4">出展企業数</span>
              <div className="flex items-baseline justify-center text-red-600 mb-3 md:mb-4">
                <span className="font-black text-5xl lg:text-[4rem] leading-none tracking-tighter">300</span>
              </div>
              <span className="text-gray-900 font-bold text-sm lg:text-base tracking-widest md:h-6 flex items-center">社以上</span>
            </div>

            {/* データ3 */}
            <div className="flex flex-col items-center justify-start flex-1 px-4 lg:px-8 py-5 md:py-0 min-w-[140px] lg:min-w-[190px]">
              <span className="text-sm lg:text-base text-gray-800 font-bold mb-3 md:mb-4">内定・採用実績</span>
              <div className="flex items-baseline justify-center text-red-600 mb-3 md:mb-4">
                <span className="font-black text-5xl lg:text-[4rem] leading-none tracking-tighter">多数</span>
              </div>
              {/* ★水平位置を合わせるための見えないスペーサー（スマホでは詰める） */}
              <span className="hidden md:block md:h-6"></span>
            </div>

            {/* データ4 */}
            <div className="flex flex-col items-center justify-start flex-1 px-4 lg:px-8 py-5 md:py-0 min-w-[140px] lg:min-w-[190px]">
              <span className="text-sm lg:text-base text-gray-800 font-bold mb-3 md:mb-4">満足度</span>
              <div className="flex items-baseline justify-center text-red-600 mb-3 md:mb-4">
                <span className="font-black text-5xl lg:text-[4rem] leading-none tracking-tighter">95</span>
                {/* % は数字のベースライン（底辺）に合わせて配置 */}
                <span className="text-gray-900 font-bold text-2xl lg:text-3xl leading-none ml-1">%</span>
              </div>
              {/* ★水平位置を合わせるための見えないスペーサー */}
              <span className="hidden md:block md:h-6"></span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}