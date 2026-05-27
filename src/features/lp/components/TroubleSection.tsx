// src/components/layouts/TroubleSection.tsx
import Image from 'next/image';

export default function TroubleSection() {
  const troubles = [
    "体育会系学生にアプローチしたいが、接点がない…",
    "効率的に多くの優秀な学生と出会いたい…",
    "自社の魅力を体育会系学生にどう伝えればいいかわからない…",
    "採用活動の成果を最大化したい…"
  ];

  return (
    <section className="w-full relative z-10"> 
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 白いカード部分（下部の黒い帯を削除しました） */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            <div className="md:col-span-4 bg-gray-200">
              <img 
                src="/images/thinking-person.jpg"
                alt="悩む人" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8 p-8 md:p-14">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
                こんな<span className="text-red-600">お悩み</span>ありませんか？
              </h2>
              
              <ul className="space-y-6">
                {troubles.map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 bg-black text-white flex items-center justify-center text-xs rounded-sm">
                      ✓
                    </span>
                    <p className="text-base md:text-lg text-gray-700 font-medium">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ★ここを変更: StudentTypeSectionへ繋ぐ赤いリボン */}
        {/* -mt-6 で白いカードに少し重ねることで、一体感を出しています */}
        <div className="flex justify-center -mt-6 relative z-20">
          {/* drop-shadow を使うことで、四角形と三角形が合体した影を作ります */}
          <div className="relative filter drop-shadow-xl">
            
            {/* 帯の本体 */}
            <div className="bg-red-700 text-white font-bold text-lg md:text-2xl py-4 px-6 md:px-20 text-center rounded-sm">
              その課題、体育会系採用イベントが解決します
            </div>
            
            {/* 下向きの三角形（正方形を45度回転させて半分隠す） */}
            <div className="absolute w-8 h-8 bg-red-700 rotate-45 -bottom-4 left-1/2 -translate-x-1/2 -z-10 rounded-sm"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
}