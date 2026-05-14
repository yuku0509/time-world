// features/lp/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    // ★ポイント1: flex items-center を外し、上(pt)と下(pb)の余白を明示的に指定
    // これによりテキストが上に寄り、下にはカードが被るための十分なスペース(pb-48)が確保されます
    <section className="relative bg-[#0a0a0a] pt-16 pb-48 lg:pt-24 lg:pb-70 overflow-hidden min-h-[700px] lg:min-h-[1000px]">      
      {/* 1. 【 View / Background Image 】 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/hero_with_stadium.png"
          alt="スポーツビジネスEXPO メインビジュアル"
          fill 
          // ★ポイント2: object-top に変更し、ランナーの頭（上部）が見切れないようにする
          // lg:object-[80%_top] などでPC時の横方向の位置を微調整できます
          className="object-cover object-top lg:object-[80%_top]" 
          sizes="100vw"
          priority 
        />
      </div>

      {/* ★ポイント3: 【 Magic Blend 】 画像の下部を黒背景に自然にフェードアウトさせる */}
      <div className="absolute inset-x-0 bottom-0 h-40 lg:h-56 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* 3. 【 Controller / Content Area 】 */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="max-w-3xl">
          
          {/* メインコピー */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 italic tracking-tighter drop-shadow-lg">
            <span className="text-gray-900">体育会の力が、</span><br />
            <span className="text-red-600 text-6xl md:text-8xl drop-shadow-xl">未来を創る。</span>
          </h1>
          
          {/* サブタイトル */}
          <div className="inline-block bg-black text-white px-6 py-3 transform -skew-x-12 mb-12 shadow-lg">
            <p className="text-sm md:text-base font-bold transform skew-x-12 tracking-wider">
              体育会系学生と企業をつなぐ、成果につながる採用イベント
            </p>
          </div>

          {/* 実績データカード */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 divide-y md:divide-y-0 md:divide-x-2 divide-gray-200 w-fit">
            
            {/* データ1 */}
            <div className="flex flex-col items-center px-4 w-full md:w-auto">
              <span className="text-xs md:text-sm text-gray-800 font-bold mb-1">参加学生数</span>
              <div className="flex items-baseline gap-1 text-red-600">
                <span className="font-black text-3xl md:text-4xl">15,000</span>
                <span className="text-gray-900 font-bold text-sm">名以上</span>
              </div>
            </div>

            {/* データ2 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0 w-full md:w-auto">
              <span className="text-xs md:text-sm text-gray-800 font-bold mb-1">出展企業数</span>
              <div className="flex items-baseline gap-1 text-red-600">
                <span className="font-black text-3xl md:text-4xl">300</span>
                <span className="text-gray-900 font-bold text-sm">社以上</span>
              </div>
            </div>

            {/* データ3 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0 w-full md:w-auto">
              <span className="text-xs md:text-sm text-gray-800 font-bold mb-1">内定・採用実績</span>
              <div className="flex items-baseline gap-1 text-red-600">
                <span className="font-black text-3xl md:text-4xl">多数</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}