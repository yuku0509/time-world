// features/lp/components/TestimonialSection.tsx
import React from "react";

// 画像のテキストに合わせてデータを修正
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

// 人型アイコンのSVGコンポーネント
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default function TestimonialSection() {
  return (
    // 背景をほんのりグレーにして白カードを際立たせる
    <section className="py-24 bg-[#fafafa] text-center">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        
        {/* タイトル部分（料金プランと同じ斜線デザイン） */}
        <div className="mb-16 flex justify-center items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-widest text-gray-900">
            出展企業様の声
          </h2>
        </div>
        
        {/* カードエリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            // flex-col と items-center で中身をすべて中央揃えにする
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              {/* 星マーク（赤色に変更） */}
              <div className="flex text-red-600 mb-5 gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xl ${i < t.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                ))}
              </div>
              
              {/* タイトル */}
              <h3 className="text-gray-900 font-extrabold text-lg md:text-xl mb-4 tracking-wide">
                {t.title}
              </h3>
              
              {/* コメント（改行コードを反映させるため whitespace-pre-wrap を使用） */}
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-8 flex-grow whitespace-pre-wrap font-medium">
                {t.comment}
              </p>
              
              {/* 投稿者情報（アイコン＋テキスト） */}
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