// Type definitions for BEBA AI website

export interface Pillar {
  id: number;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  color: string;
  visual: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  marketImpact?: string[];
  clinicalValidation?: string[];
  ctaText: string;
  ctaLink: string;
}

export interface Founder {
  name: string;
  role: string;
  title: string;
  bio: string;
  vision: string;
  image?: string;
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface DemoScene {
  id: string;
  title: string;
  component: React.ComponentType;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface MarketOpportunity {
  metric: string;
  value: string;
  description: string;
}

export interface ComparisonItem {
  feature: string;
  without: string;
  with: string;
}

export interface ClinicalEvidence {
  metric: string;
  improvement: string;
  confidence: string;
}

export interface AnimationVariant {
  initial: any;
  animate: any;
  exit?: any;
  transition?: any;
}

export interface TouchGesture {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}
