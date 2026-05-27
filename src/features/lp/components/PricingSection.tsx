// features/lp/components/PricingSection.tsx
import React from "react";

// プランのデータを画像の内容に合わせて定義
const plans = [
  {
    title: "スタンダードプラン",
    price: "30",
    unit: "万円",
    taxInfo: "(税抜)",
    features: [
      "ブース出展 (個別エリア)",
      "学生との個別面談",
      "企業情報掲載・告知",
      "運営サポート"
    ],
    isRecommended: false,
    theme: "light",
  },
  {
    title: "プレミアムプラン",
    price: "50",
    unit: "万円",
    taxInfo: "(税抜)",
    features: [
      "ブース出展 (優先エリア)",
      "学生との個別面談・優先案内",
      "企業情報掲載・告知 (強化露出)",
      "運営サポート・採用ブース拡張"
    ],
    isRecommended: true,
    theme: "dark",
  },
  {
    title: "カスタムプラン",
    price: "要相談",
    unit: "",
    taxInfo: "",
    features: [],
    desc: "ご要望に応じて\nオリジナルプランを\nご提案いたします",
    isRecommended: false,
    theme: "light",
  },
];

// リスト用チェックマークアイコン
const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingSection() {
  return (
    <section className="py-24 bg-white text-center border-t border-gray-100">
      <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
        
        {/* タイトル部分 */}
        <div className="mb-16 flex justify-center items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest text-gray-900">
            出展料金プラン
          </h2>
        </div>
        
        {/* カードエリア */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative flex flex-col rounded-xl overflow-hidden shadow-xl transition-all duration-300
                ${plan.theme === "dark" 
                  ? "bg-black border-[3px] border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] transform md:scale-105 z-10" 
                  : "bg-white border border-gray-200 mt-4 md:mt-0 z-0"}
              `}
            >
              {/* おすすめリボン (プレミアムプランのみ) */}
              {plan.isRecommended && (
                <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden z-20">
                  <div className="absolute top-6 -left-8 bg-red-600 text-white text-xs font-bold py-1.5 w-40 text-center -rotate-45 shadow-md">
                    おすすめ
                  </div>
                </div>
              )}

              {/* ヘッダー */}
              <div className={`py-4 text-center font-bold text-lg tracking-wider ${plan.theme === "dark" ? "bg-black text-white border-b border-gray-800" : "bg-[#2a2a2a] text-white"}`}>
                {plan.title}
              </div>

              {/* ボディ */}
              <div className="p-8 pb-12 flex-grow flex flex-col relative">
                
                {/* 価格エリア */}
                <div className="text-center mb-8 mt-2">
                  {plan.price === "要相談" ? (
                    <span className={`text-4xl font-extrabold ${plan.theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-extrabold ${plan.theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xl font-bold ${plan.theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        {plan.unit}
                      </span>
                      <span className={`text-sm ml-1 ${plan.theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {plan.taxInfo}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* テキスト・リストエリア */}
                <div className="flex-grow flex flex-col justify-center">
                  {plan.desc ? (
                    <p className={`text-center font-bold whitespace-pre-wrap leading-loose ${plan.theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {plan.desc}
                    </p>
                  ) : (
                    <ul className="space-y-4 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className={`flex items-start gap-3 font-bold text-sm lg:text-base ${plan.theme === "dark" ? "text-white" : "text-gray-800"}`}>
                           <CheckIcon className={`w-5 h-5 shrink-0 mt-0.5 ${plan.theme === "dark" ? "text-white" : "text-red-600"}`} />
                           <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 右下の背景アイコン */}
                <div className={`absolute bottom-4 right-4 ${plan.theme === "dark" ? "text-white opacity-80" : "text-gray-600 opacity-40"}`}>
                  {plan.title === "スタンダードプラン" && (
                    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 11V3H7v4H3v14h18V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                    </svg>
                  )}
                  {plan.title === "プレミアムプラン" && (
                    <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  )}
                  {plan.title === "カスタムプラン" && (
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.99-1.2-4.24 0l-4 4c-.58.58-.91 1.36-.93 2.18-.01.83.31 1.62.9 2.22l-1.36 1.36c-.59-.59-1.38-.91-2.21-.92-.83-.02-1.61.3-2.19.89l-4 4c-1.25 1.25-1.2 2.98 0 4.24l3 3c.71.68 2.17 1.25 3.42 0l4-4c.59-.59.91-1.38.92-2.21.01-.83-.31-1.62-.9-2.22l1.36-1.36c.59.59 1.38.91 2.21.92.83.02 1.61-.3 2.19-.89l4-4zM10.88 18.23l-4 4c-.45.45-1.01.27-1.3.01l-3-3c-.26-.29-.44-.85.01-1.3l4-4c.3-.3.72-.45 1.14-.45.42.01.84.18 1.15.5l1.05 1.05c.67.67.67 1.76 0 2.43l-.71.71c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.71-.71c1.33-1.33 1.33-3.49 0-4.83l-1.04-1.04c-.32-.32-.49-.74-.5-1.15-.01-.42.14-.84.44-1.14l1.36-1.36c.3.3.72.45 1.14.45.42.01.84-.18 1.15-.5l1.04 1.04c.67.67.67 1.76 0 2.43l-.71.71c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.71-.71c1.33-1.33 1.33-3.49 0-4.83l-1.05-1.05c-.32-.32-.49-.74-.5-1.15-.01-.42.14-.84.44-1.14l4-4c.45-.45 1.01-.27 1.3-.01l3 3c.26.29.44.85-.01 1.3l-4 4c-.3.3-.72.45-1.14.45-.42-.01-.84-.18-1.15-.5l-1.05-1.05c-.67-.67-.67-1.76 0-2.43l.71-.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-.71.71c-1.33 1.33-1.33 3.49 0 4.83l1.04 1.04c.32.32.49.74.5 1.15.01.42-.14.84-.44 1.14l-1.36 1.36c-.3-.3-.72-.45-1.14-.45-.42-.01-.84.18-1.15.5l-1.04-1.04c-.67-.67-.67-1.76 0-2.43l.71-.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-.71.71c-1.33 1.33-1.33 3.49 0 4.83l1.05 1.05c.32.32.49.74.5 1.15.01.42-.14.84-.44 1.14z"/>
                    </svg>
                  )}
                </div>

              </div>
            </div>
          ))}
          
        </div>

        {/* 注記 */}
        <div className="text-left mt-6 ml-2">
          <p className="text-gray-500 text-xs font-medium">※価格はすべて税抜です。</p>
        </div>

      </div>
    </section>
  );
}