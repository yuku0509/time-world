// components/elements/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  isRecommended?: boolean; // 推奨プラン（赤枠）
}

export default function Card({ children, className = '', isRecommended = false }: CardProps) {
  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
        isRecommended ? 'border-red-600' : 'border-gray-100'
      } ${className}`}
    >
      {children}
    </div>
  );
}