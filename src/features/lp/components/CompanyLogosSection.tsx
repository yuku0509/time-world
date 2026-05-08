// features/lp/components/CompanyLogosSection.tsx
import SectionTitle from "@/components/elements/SectionTitle";

const companies = [
  "TOYOTA", "MIZUNO", "SONY", "NTT DATA", "Asahi", "Recruit",
  "NISSAN", "KOSÉ", "Kajima Corporation", "Dai-ichi Life"
];

export default function CompanyLogosSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="過去参加企業（一部抜粋）" />
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mt-16">
          {companies.map((company, index) => (
            <div key={index} className="bg-gray-100 p-4 h-24 flex items-center justify-center rounded-lg border border-gray-200">
              <p className="text-gray-600 font-bold text-lg">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}