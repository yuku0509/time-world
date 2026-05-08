// features/lp/components/TestimonialSection.tsx
import Card from "@/components/elements/Card";
import SectionTitle from "@/components/elements/SectionTitle";

// DTO型を使う (データの定義はここ)
const testimonials: { rating: number; title: string; comment: string; name: string; pos: string }[] = [
  { rating: 5, title: "想像以上の出会いがありました", comment: "体育会系学生の行動力や粘り強さに感動を受けました。多くの優秀な学生と出会え、採用に直結しています。", name: "製造業 / 人事部長", pos: "採用ご担当者様" },
  { rating: 4, title: "効率的な採用活動が実現", comment: "一日で多くの学生と面接でき、採用活動の手間が大幅に削減されました。サポート体制も充実しています。", name: "IT企業 / 人事担当", pos: "採用ご担当者様" },
  { rating: 5, title: "ミスマッチが少ない", comment: "事前に企業理解をしてくる学生が多く、入社後のミスマッチが少ないと感じています。", name: "サービス業 / 人事責任者", pos: "採用ご担当者様" },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50 text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="出展企業様の声" subtitle="TESTIMONIALS" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, index) => (
            <Card key={index} className="text-left flex flex-col gap-4">
              {/* 星マークの表示機能 (Viewのロジック) */}
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xl ${i < t.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                ))}
              </div>
              <h3 className="text-gray-900 font-extrabold text-lg">
                {t.title}
              </h3>
              <p className="text-gray-700 text-sm flex-grow">
                {t.comment}
              </p>
              <div className="border-t border-gray-100 pt-4 text-xs">
                <p className="text-gray-900 font-bold">{t.name}</p>
                <p className="text-gray-600">{t.pos}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}