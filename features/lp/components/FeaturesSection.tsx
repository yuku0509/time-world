// features/lp/components/FeaturesSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

// ここでデータを定義 (DTOの配列)
const features: { title: string; desc: string; num: string }[] = [
  { num: "01", title: "体育会特化型", desc: "体育会系学生に特化した国内最大級のイベント" },
  { num: "02", title: "質の高い学生", desc: "厳しい環境で培ったガッツ・行動力のある学生が多数参加" },
  { num: "03", title: "深い企業理解", desc: "事前に企業情報を学習し、学生と深くマッチする" },
  { num: "04", title: "効率的な採用", desc: "一日で多くの学生と出会い、面接・採用効率がUP" },
  { num: "05", title: "継続サポート", desc: "イベント後のフォローで内定・承諾までサポート" },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-red-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="SPORTS BUSINESS EXPO"
          subtitle="本イベントの5つの特徴"
          center={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-red-100 text-left">
              <span className="text-red-600 font-extrabold text-2xl mb-4 block">
                {feature.num}
              </span>
              <h3 className="text-gray-900 font-extrabold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}