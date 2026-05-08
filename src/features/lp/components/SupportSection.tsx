// features/lp/components/SupportSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

const supports: { title: string; desc: string }[] = [
  { title: "夏季合宿のお知らせ", desc: "各部活の夏季合宿日程と、メディア取材についてのお知らせ" },
  { title: "スポンサー募集", desc: "体育会系学生の活動を支援してくださる企業・団体の募集について" },
  { title: "アタリ募集！", desc: "イベントを盛り上げてくれる学生スタッフ・ボランティアの募集" },
];

export default function SupportSection() {
  return (
    <section className="py-20 bg-gray-50 text-center border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="各種お知らせ・サポート機能"
          subtitle="EVENTS & SUPPORT"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {supports.map((support, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-left">
              <h3 className="text-gray-900 font-extrabold text-xl mb-4">
                {support.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {support.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}