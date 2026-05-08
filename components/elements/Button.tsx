// src/components/elements/Button.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function Button({ children, href, className = '' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center ${className}`}
    >
      {children}
    </Link>
  );
}