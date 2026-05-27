// features/lp/components/TestimonialSection.tsx
import React from "react";

const testimonials = [
  { 
    rating: 5, 
    title: "強い学生と出会えました", 
    comment: "競技レベルの高い学生と多く出会うことができ、\n即戦力となる人材の内定につながりました。", 
    author: "人事部長 / 製造業" 
  },
  { 
    rating: 5, 
    title: "営業組織の強化につながった", 
    comment: "行動量や成果へのこだわりを持つ学生が多く、\n営業組織の中核を支える採用ができました。", 
    author: "採用責任者 / IT企業" 
  },
  { 
    rating: 5, 
    title: "知名度に頼らず採用できた", 
    comment: "当社の知名度に頼らず、競技や実績に\n共感してくれる学生と出会えました。", 
    author: "営業本部長 / SaaS企業" 
  },
];

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default function TestimonialSection() {
  return (
    // ★ナナメの背景がはみ出さないように overflow-hidden を追加し、上下の余白（py-32）を多めに取ります
    <section className="relative py-24 md:py-32 text-center overflow-hidden z-10">
      
      {/* =========================================
          ★アイデア2: ナナメの境界線（背景）
      ========================================= */}
      {/* -skew-y-2 で背景を少し斜めに傾け、疾走感を出します。scale-y-110 で隙間を埋めます */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f5f7] to-[#eef0f3] transform -skew-y-2 origin-top-left -z-20 scale-y-110"></div>

      {/* =========================================
          ★アイデア3: 巨大な透かしアイコン（背景）
      ========================================= */}
      {/* 左上の巨大な開始クォーテーション */}
      <div className="absolute top-4 left-[-2rem] md:left-8 text-[15rem] md:text-[25rem] font-serif text-gray-300/40 leading-none select-none -z-10 tracking-tighter pointer-events-none">
        “
      </div>
      {/* 右下の巨大な終了クォーテーション */}
      <div className="absolute bottom-[-4rem] md:bottom-[-8rem] right-[-2rem] md:right-8 text-[15rem] md:text-[25rem] font-serif text-gray-300/40 leading-none select-none -z-10 tracking-tighter pointer-events-none">
        ”
      </div>

      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* タイトル部分 */}
        <div className="mb-16 flex justify-center items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-widest text-gray-900">
            出展企業様の声
          </h2>
        </div>
        
        {/* カードエリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 relative z-20"
            >
              {/* 星マーク */}
              <div className="flex text-red-600 mb-5 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xl ${i < t.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                ))}
              </div>
              
              {/* タイトル */}
              <h3 className="text-gray-900 font-extrabold text-lg md:text-xl mb-4 tracking-wide">
                {t.title}
              </h3>
              
              {/* コメント */}
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-8 flex-grow whitespace-pre-wrap font-medium">
                {t.comment}
              </p>
              
              {/* 投稿者情報 */}
              <div className="flex items-center justify-center gap-3 text-gray-900 font-bold text-xs md:text-sm">
                <UserIcon className="w-5 h-5 text-gray-800" />
                <span>{t.author}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}