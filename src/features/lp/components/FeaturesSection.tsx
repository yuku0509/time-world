// features/lp/components/FeaturesSection.tsx
import Image from "next/image";

const features: { num: string; title: string; desc: string; imgSrc: string }[] = [
  { num: "01", title: "体育会特化型", desc: "体育会系学生に特化した国内最大級のイベント", imgSrc: "/images/5つの特徴①.jpg" },
  { num: "02", title: "質の高い学生", desc: "厳しい環境で培ったガッツ・行動力のある学生が多数参加", imgSrc: "/images/5つの特徴②.jpg" },
  { num: "03", title: "深い企業理解", desc: "事前に企業情報を学習し、学生と深くマッチする", imgSrc: "/images/5つの特徴③.jpg" },
  { num: "04", title: "効率的な採用", desc: "一日で多くの学生と出会い、面接・採用効率がUP", imgSrc: "/images/5つの特徴④.jpg" },
  { num: "05", title: "継続サポート", desc: "イベント後のフォローで内定・承諾までサポート", imgSrc: "/images/5つの特徴⑤.jpg" },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-center text-white overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-3/4 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* ★修正ポイント: max-w-[90rem] -> max-w-[100rem] に変更し、全体の幅を広げてカードを大きくする */}
      <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8">
        
        <div className="mb-24 relative flex justify-center items-center flex-col">
          <span className="absolute -top-8 text-5xl md:text-8xl font-black text-white/5 tracking-[0.2em] select-none">
            FEATURE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold flex items-baseline tracking-widest relative z-10">
            本イベントの
            <span className="text-red-600 text-6xl md:text-7xl mx-3 font-extrabold drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
              5
            </span>
            つの特徴
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              // ★修正ポイント: p-8 -> py-8 px-4 に変更。左右の余白を減らし、文字のスペースを広げる
              className="group relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-8 px-4 shadow-[0_0_15px_rgba(220,38,38,0.2)] border border-red-900 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
            >
              <span className="absolute -top-4 right-6 bg-[#0a0a0a] px-3 py-1 text-red-600 font-bold text-base tracking-widest border border-red-900 group-hover:border-red-500 transition-colors duration-300">
                {feature.num}
              </span>

              <div className="mb-6 flex justify-center items-center h-24 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={feature.imgSrc} 
                  alt={feature.title} 
                  width={90} 
                  height={100} 
                  className="object-contain"
                />
              </div>

              {/* ★修正ポイント: whitespace-nowrap を追加し、改行を強制的に防ぐ。
                  また、tracking-wide を外す（または tracking-normal にする）ことで文字間隔を通常に戻し、幅を節約 */}
              <h3 className="text-white font-extrabold text-xl lg:text-3xl mb-4 whitespace-nowrap group-hover:text-red-100 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-300 text-base md:text-base leading-relaxed text-center font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}