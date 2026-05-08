// features/lp/components/PricingSection.tsx
import Button from "@/components/elements/Button";
import Card from "@/components/elements/Card";
import SectionTitle from "@/components/elements/SectionTitle";

// DTO型を使う (データの定義はここ)
const plans: { title: string; price: string; features: string[]; isRecommended?: boolean }[] = [
  { title: "スタンダードプラン", price: "30万円", features: ["ブース出展", "学生情報ページ掲載", "基本サポート", "面談予約システム利用"] },
  { title: "プレミアムプラン", price: "50万円", features: ["ブース出展", "学生情報ページ掲載 (上位表示)", "選考状況のプレビュー機能", "各種サポート", "面談予約システム利用"], isRecommended: true },
  { title: "カスタムプラン", price: "要相談", features: ["ご要望に応じてオリジナルプランをご提案いたします"] },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="出展料金プラン" subtitle="PRICING" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start">
          {plans.map((plan, index) => (
            <Card key={index} isRecommended={plan.isRecommended} className="flex flex-col text-center">
              {plan.isRecommended && (
                <p className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full absolute top-[-10px] left-1/2 translate-x-[-50%]">
                  おすすめプラン
                </p>
              )}
              <p className="text-gray-900 font-extrabold text-xl mb-4">{plan.title}</p>
              <p className="text-red-600 font-black text-5xl mb-6">{plan.price}</p>
              <ul className="text-gray-700 text-sm mb-10 space-y-3 flex-grow text-left list-inside list-disc">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button href="#apply" className="w-full h-12 text-lg">
                プランを選択
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}