import { categories, getCategory } from "@/data/categories";
import {
  products,
  getFeaturedProducts,
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
} from "@/data/products";
import type { Category, Product } from "@/types";

/**
 * Lớp truy xuất dữ liệu danh mục & sản phẩm.
 * Thiết kế theo mô hình Service Layer để dễ dàng chuyển đổi sang REST API / GraphQL backend sau này.
 */
export const catalogService = {
  listProducts: (): Product[] => products,
  listCategories: (): Category[] => categories,
  getProduct: (slug: string): Product | undefined => getProductBySlug(slug),
  getCategory: (slug: string): Category | undefined => getCategory(slug),
  getFeatured: (limit?: number): Product[] => getFeaturedProducts(limit),
  getByCategory: (slug: string): Product[] => getProductsByCategory(slug),
  getRelated: (product: Product, limit?: number): Product[] => getRelatedProducts(product, limit),
};

/**
 * Tìm kiếm sản phẩm theo từ khóa (tên, mã sản phẩm, danh mục, mô tả).
 */
export function searchProducts(
  list: Product[],
  query: string,
  categoryNameOf: (slug: string) => string,
): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((p) =>
    [p.name, p.productCode, categoryNameOf(p.category), p.description]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

