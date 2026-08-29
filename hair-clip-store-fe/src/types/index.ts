export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // category slug
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
