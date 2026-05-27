// src/components/layouts/StudentTypeSection.tsx (※パスはプロジェクトに合わせて調整してください)
import React from "react";

// 4つのカードデータを定義
const studentTypes = [
  {
    icon: (
      // トロフィーのアイコン
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M19 3v4M5 7h14M5 7c0 3.866 3.134 7 7 7s7-3.134 7-7M12 14v7m-4 0h8" />
      </svg>
    ),
    title: "強豪体育会所属",
    desc: "全国大会・リーグ等で\n実績を残す学生が多数",
  },
  {
    icon: (
      // 走る人のアイコン（＋スピード線）
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="15" cy="5" r="2" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 22l1-5 3-3-2-5 4-2 3 5 2-1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 14h4l2-2M5 10h3M2 14h4" />
      </svg>
    ),
    title: "やり切る力・継続力",
    desc: "目標に向かって\nやり抜く力を体現",
  },
  {
    icon: (
      // 上昇チャートのアイコン
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 14l4-4 4 4 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 14v4M11 10v8M15 14v4M19 10v8M16 6h3v3" />
      </svg>
    ),
    title: "営業適性の高い\n行動特性",
    desc: "課題発見力・提案力・\n突破力に自信",
  },
  {
    icon: (
      // 炎のアイコン
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c0 0-5 5-5 10a5 5 0 0010 0c0-5-5-10-5-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10c-1.5 0-2 1.5-2 2.5a2 2 0 004 0C14 11.5 13.5 10 12 10z" />
      </svg>
    ),
    title: "事業成長について\nこられるバイタリティ",
    desc: "高い当事者意識で\n成果にコミット",
  },
];

export default function StudentTypeSection() {
  return (
    // 背景は白で設定。上下に余白を確保。
    <section className="py-20 bg-white text-gray-900">
      {/* 全体の最大幅を広め（max-w-[90rem]）に取り、左右の要素が窮屈にならないようにする */}
      <div className="max-w-[90rem] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* 左側: テキストエリア (全体の1/4〜1/3程度の幅) */}
        <div className="w-full lg:w-[28%] flex flex-col items-start text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 tracking-wide">
            出会えるのは、<br />
            <span className="text-red-600 text-3xl md:text-4xl">勝ちにこだわる</span><br />
            学生たち
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
            競技に打ち込む中で、ビジネスの場でも<br />
            成果を出したい学生が多数参加します。
          </p>
        </div>

        {/* 右側: カードエリア (残りの幅を使用し、4カラムのグリッドで配置) */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {studentTypes.map((item, index) => (
            // 黒背景のカード。角丸(rounded-xl)と影(shadow-lg)で浮き上がらせる
            <div 
              key={index}
              className="bg-[#0a0a0a] rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
              {/* アイコン: 赤色と発光エフェクト(drop-shadow)を付与 */}
              <div className="text-red-500 mb-5 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">
                {item.icon}
              </div>
              
              {/* カードタイトル: 改行コード(\n)を反映させるため whitespace-pre-wrap を使用 */}
              <h3 className="text-white font-bold text-sm lg:text-base mb-3 whitespace-pre-wrap leading-snug">
                {item.title}
              </h3>
              
              {/* カード説明: 薄いグレーで少し小さめのテキスト */}
              <p className="text-gray-300 text-xs lg:text-sm whitespace-pre-wrap leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}