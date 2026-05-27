// src/components/layouts/ForStudentSection.tsx (※パスはプロジェクトに合わせて調整してください)
import Image from "next/image";

// 下部のカードに表示する機能一覧のデータ
const features = [
  {
    title: "企業情報の掲載",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "選考状況の公開",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "試合スケジュール・\n実績の掲載",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "部活動紹介\nページの作成",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "ニュース・\nお知らせ配信",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ForStudentSection() {
  return (
    // 背景は画像に合わせた淡いグレー（#f8f9fa 相当）
    <section className="py-20 bg-[#f9f9f9] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* 上部: テキストと画像の2カラムレイアウト */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          
          {/* 左側: テキストエリア */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              学生が事前に企業を知るから、<br />
              出会いが深まる
            </h2>
            
            {/* 赤いアクセントライン */}
            <div className="w-10 h-[3px] bg-red-600 mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
              出展企業の情報や選考状況を事前に確認できる<br className="hidden md:block" />
              専用ページを学生向けにご提供。<br className="hidden md:block" />
              企業研究をしてからイベントに参加するため、<br className="hidden md:block" />
              より有意義な出会いが生まれます。
            </p>
          </div>

          {/* 右側: 画像エリア */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <Image
              src="/images/for-student.png"
              alt="学生向け情報ページのイメージ"
              width={650}
              height={400}
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* 下部: 5つの機能カードエリア */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6">
            学生向け情報ページでできること
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* アイコン */}
                <div className="shrink-0 text-gray-800">
                  {feature.icon}
                </div>
                {/* テキスト（\n で改行するように whitespace-pre-wrap を指定） */}
                <p className="text-xs lg:text-sm font-bold text-gray-800 whitespace-pre-wrap leading-snug">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}