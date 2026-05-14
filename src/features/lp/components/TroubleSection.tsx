import Image from 'next/image';

export default function TroubleSection() {
  const troubles = [
    "体育会系学生にアプローチしたいが、接点がない…",
    "効率的に多くの優秀な学生と出会いたい…",
    "自社の魅力を体育会系学生にどう伝えればいいかわからない…",
    "採用活動の成果を最大化したい…"
  ];

  return (
    <section className="w-full"> 
      {/* ★ここを変更: max-w-5xl → max-w-6xl (さらに広くする場合は max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            <div className="md:col-span-4 bg-gray-200">
              <img 
                src="/images/thinking-person.jpg"
                alt="悩む人" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* テキスト側の余白も少し広げたい場合は p-8 md:p-14 などに調整するとバランスが良くなります */}
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

          <div className="bg-[#1a1a1a] p-4 md:p-6 text-center border-t border-gray-700">
            <p className="text-white text-lg md:text-xl font-bold flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-2xl">💡</span>
              そのお悩み、<span className="text-yellow-400">体育会系採用イベント</span>がすべて解決します！
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}