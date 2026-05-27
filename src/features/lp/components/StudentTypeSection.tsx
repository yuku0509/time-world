// src/components/layouts/StudentTypeSection.tsx
import React from "react";
import Image from "next/image";

// パスは半角英数字のファイル名
const studentTypes = [
  {
    imageSrc: "/images/StudentTypeアイコン①.jpg",
    title: "強豪体育会所属",
    desc: "全国大会・リーグ等で\n実績を残す学生が多数",
  },
  {
    imageSrc: "/images/StudentTypeアイコン②.jpg",
    title: "やり切る力・継続力",
    desc: "目標に向かって\nやり抜く力を体現",
  },
  {
    imageSrc: "/images/StudentTypeアイコン③.jpg",
    title: "営業適性の高い\n行動特性",
    desc: "課題発見力・提案力・\n突破力に自信",
  },
  {
    imageSrc: "/images/StudentTypeアイコン④.jpg",
    title: "事業成長について\nこられるバイタリティ",
    desc: "高い当事者意識で\n成果にコミット",
  },
];

export default function StudentTypeSection() {
  return (
    <section className="py-24 bg-white text-gray-900">
      {/* 全体の最大幅をさらに広め（max-w-[100rem]）に取り、大きな要素が入るスペースを確保 */}
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* 左側: テキストエリア (幅を少し広げて文字を大きく) */}
        <div className="w-full lg:w-[30%] flex flex-col items-start text-left">
          {/* テキスト全体を大きく (text-3xl/4xl/5xl) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 tracking-wide">
            出会えるのは、<br />
            {/* 強調部分をさらに大きく (text-4xl/5xl/6xl) */}
            <span className="text-red-600 text-4xl md:text-5xl lg:text-6xl">勝ちにこだわる</span><br />
            学生たち
          </h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            競技に打ち込む中で、ビジネスの場でも<br />
            成果を出したい学生が多数参加します。
          </p>
        </div>

        {/* 右側: カードエリア (ギャップも広げてゆったりと配置) */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentTypes.map((item, index) => (
            <div 
              key={index}
              // p-6 -> p-8 に増やし、カード自体を少し大きく見せる
              className="bg-[#0a0a0a] rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-transform hover:-translate-y-2 duration-300"
            >
              {/* アイコンラッパーを大きく (h-20) */}
              <div className="mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.9)] flex justify-center items-center h-20">
                <Image 
                  src={item.imageSrc}
                  alt={item.title}
                  // アイコンを 56 -> 80 に拡大
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* カードタイトルを大きく (text-lg/xl) */}
              <h3 className="text-white font-extrabold text-lg lg:text-xl mb-4 whitespace-pre-wrap leading-snug tracking-wide">
                {item.title}
              </h3>
              
              {/* カード説明を大きく (text-sm/base) */}
              <p className="text-gray-300 text-sm lg:text-base whitespace-pre-wrap leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}