// features/lp/components/FeaturesSection.tsx

const features: { title: string; desc: string; num: string }[] = [
  { num: "01", title: "体育会特化型", desc: "体育会系学生に特化した国内最大級のイベント" },
  { num: "02", title: "質の高い学生", desc: "厳しい環境で培ったガッツ・行動力のある学生が多数参加" },
  { num: "03", title: "深い企業理解", desc: "事前に企業情報を学習し、学生と深くマッチする" },
  { num: "04", title: "効率的な採用", desc: "一日で多くの学生と出会い、面接・採用効率がUP" },
  { num: "05", title: "継続サポート", desc: "イベント後のフォローで内定・承諾までサポート" },
];

export default function FeaturesSection() {
  return (
    // ★修正ポイント: bg-red-50 を削除し、文字の基本色を白に変更
    <section className="py-20 text-center text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 背景が黒になるため、タイトルも白文字・赤文字で自作すると綺麗です */}
        <div className="mb-16">
          <p className="text-red-500 font-bold mb-2">本イベントの5つの特徴</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider">SPORTS BUSINESS EXPO</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            // ★修正ポイント: 白カードから、黒背景＋赤枠＋光るシャドウ（ネオン風）に変更
            <div 
              key={index} 
              className="bg-black/60 p-6 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.3)] border border-red-600 text-center flex flex-col items-center"
            >
              <span className="text-red-500 font-extrabold text-2xl mb-4 block">
                {feature.num}
              </span>
              <h3 className="text-white font-extrabold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}