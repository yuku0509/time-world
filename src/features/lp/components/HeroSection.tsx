// features/lp/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      
      {/* 1. 【 View / Background Image 】 合成済みの1枚絵 (z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/hero_with_stadium.png"
          alt="スポーツビジネスEXPO メインビジュアル"
          fill 
          // 画像を右寄りに表示し、余白をカバーします
          className="object-cover object-center lg:object-right" 
          sizes="100vw"
          priority // ページの顔になる画像なので、優先的に読み込ませます（パフォーマンス向上）
        />
      </div>

      {/* 2. 【 View / Mask Gradient 】 白のグラデーションフィルター (z-10) */}
      {/* 左側の文字をくっきり読ませるため、白から透明になるグラデーションだけ重ねます */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" /> */}

      {/* 3. 【 Controller / Content Area 】 テキストと実績カードのエリア (z-20) */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
        <div className="max-w-3xl pt-10">
          
          {/* メインコピー */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 italic tracking-tighter">
            <span className="text-gray-900">体育会の力が、</span><br />
            <span className="text-red-600 text-6xl md:text-8xl">未来を創る。</span>
          </h1>
          
          {/* サブタイトル */}
          <div className="inline-block bg-black text-white px-6 py-3 transform -skew-x-12 mb-12">
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