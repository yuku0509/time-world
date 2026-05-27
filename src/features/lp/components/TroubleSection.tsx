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
    // 次のセクション（白背景）とピッタリくっつけるため、相対配置（relative）に設定
    <section className="w-full relative z-20"> 
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ★変更ポイント1: 
          次のセクション（StudentTypeSection）とスムーズに地面で繋がるように、
          カードの下部の角丸（rounded-b-none）と下の枠線（border-b-0）を削除しています。
          影（shadow）も上方向にのみ広がるように調整し、下はスッキリさせています。
        */}
        <div className="bg-white rounded-t-xl shadow-[0_-15px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 border-b-0">
          
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
      </div>

      {/* ★変更ポイント2: 
        赤いリボンをセクションの一番下（bottom-0）に絶対配置（absolute）し、
        Y軸方向に50%（translate-y-1/2）下にずらすことで、
        2つのセクションの境界線上にピッタリ跨るように配置しています。
      */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 flex justify-center z-30 pointer-events-none">
        {/* pointer-events-none を親に付けつつ、リボン自体は auto にしてクリック等を阻害しないように配慮 */}
        <div className="relative filter drop-shadow-xl pointer-events-auto">
          
          {/* 帯の本体 */}
          <div className="bg-red-700 text-white font-bold text-lg md:text-2xl py-4 px-6 md:px-20 text-center rounded-sm">
            その課題、体育会系採用イベントが解決します
          </div>
          
          {/* 下向きの三角形（正方形を45度回転させて半分隠す） */}
          <div className="absolute w-8 h-8 bg-red-700 rotate-45 -bottom-4 left-1/2 -translate-x-1/2 -z-10 rounded-sm"></div>
          
        </div>
      </div>

    </section>
  );
}