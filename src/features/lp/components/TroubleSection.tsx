// features/lp/components/TroubleSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

export default function TroubleSection() {
  // 表示するお悩みのデータ（DTOの配列のようなイメージです）
  const troubles = [
    "体育会系学生にアプローチしたいが、接点がない…",
    "効率的に多くの優秀な学生と出会いたい…",
    "自社の魅力を体育会系学生にどう伝えればいいかわからない…",
    "採用活動の成果を最大化したい…"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="こんなお悩みありませんか？" />
        
        <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-inner border border-gray-200">
          <ul className="space-y-6">
            {troubles.map((text, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </span>
                <p className="text-base md:text-lg text-gray-700 font-bold">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}