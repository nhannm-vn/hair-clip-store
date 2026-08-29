/**
 * Entity & Domain Types for Hair Clip Store
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // Category slug reference
  productCode: string;
  price?: number;
  description: string;
  material: string;
  size: string;
  colors: string[];
  images: string[];
  featured?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface ZaloProductContext {
  name: string;
  productCode: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  facebookUrl: string;
  zaloPhone: string;
}

