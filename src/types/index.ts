// Type definitions for BEBA AI website

export interface Pillar {
  id: number;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  color?: string;
  visual?: string;
}

export interface Founder {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  vision: string;
  image: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface TouchGesture {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}
