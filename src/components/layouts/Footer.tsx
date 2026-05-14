// src/components/layouts/Footer.tsx
import Image from "next/image";

export default function Footer() {
  const copyRight = `© 2026 SPORTS BUSINESS EXPO All rights reserved.`;

  return (
    // フッター全体: 上下の余白（pt/pb）を少し減らし、横長の帯（バナー）の印象を強める
    <footer className="relative w-full bg-gradient-to-r from-red-800 via-red-600 to-red-900 text-white pt-10 pb-6 text-center shadow-[0_-10px_30px_rgba(200,0,0,0.3)]">
      <div className="max-w-[90rem] mx-auto px-4 lg:px-8 flex flex-col items-center gap-8 relative z-10">
        
        {/* CTAコンテンツ */}
        <a href="#apply" className="group flex flex-row items-center justify-between gap-8 w-full transition-all duration-300 hover:opacity-90">
          
          {/* 左側: 月桂冠と文字のブロック。横に並べる */}
          <div className="flex items-center gap-4 shrink-0">
            {/* 左の月桂冠（反転しない） */}
            <Image
              src="/images/footer-wreath-left.png" 
              alt="wreath left"
              width={64}
              height={120}
              className="h-24 w-auto object-contain opacity-90"
            />
            
            {/* 中央のテキスト（横長のレイアウトに合わせて行間を少し詰める） */}
            <div className="flex flex-col items-center justify-center text-center text-sm lg:text-base font-bold tracking-widest text-white leading-snug drop-shadow-md">
              <span>体育会系学生との</span>
              <span>出会いが、</span>
              <span>企業の未来を変える</span>
            </div>

            {/* 右の月桂冠（反転させる） */}
            <Image
              src="/images/footer-wreath-left.png" 
              alt="wreath right"
              width={64}
              height={120}
              className="h-24 w-auto object-contain scale-x-[-1] opacity-90"
            />
          </div>

          {/* 中央: 巨大なCTAテキスト */}
          <div className="flex items-center justify-center flex-grow">
            <span className="text-4xl lg:text-6xl font-extrabold text-white whitespace-nowrap tracking-wider drop-shadow-lg">
              今すぐ出展を申し込む
            </span>
          </div>

          {/* 右側: 矢印アイコン */}
          <div className="flex items-center justify-center shrink-0 pr-4">
            <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 border-2 lg:border-[3px] border-white rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 ml-1 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* コピーライト */}
        <div className="text-[10px] lg:text-xs opacity-60 text-center tracking-widest w-full border-t border-red-500/30 pt-4 mt-2">
          {copyRight}
        </div>
      </div>
    </footer> 
  );
}