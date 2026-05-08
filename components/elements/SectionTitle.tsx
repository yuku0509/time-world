// components/elements/SectionTitle.tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <p className="text-red-600 font-bold text-lg mb-2">{subtitle}</p>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}