// types/lp.ts
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  count: string;
  countUnit: string;
  description: string;
}

export interface Testimonial {
  rating: number; // 1-5の星
  title: string;
  comment: string;
  name: string;
  position: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isRecommended?: boolean; // プレミアムプランだけ赤くする
}
