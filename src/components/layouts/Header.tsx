// src/components/layouts/Header.tsx
import Link from 'next/link';
import Button from '@/components/elements/Button';

export default function Header() {
  return (
    // sticky と top-0 で画面上部に固定し、z-50で常に一番手前に表示させます
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* 左側：ロゴ部分（今回はテキストで代用） */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-red-700 font-extrabold text-2xl italic tracking-tighter">
            SPORTS BUSINESS EXPO
          </div>
          <div className="text-gray-800 font-bold text-xs hidden sm:block">
            体育会系採用イベント
          </div>
        </Link>

        {/* 右側：申し込みボタン */}
        <Button href="#apply" className="text-sm px-6 py-2">
          今すぐ出展を申し込む
          {/* 右向きの矢印アイコン（SVG） */}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>

      </div>
    </header>
  );
}