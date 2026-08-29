/**
 * Lớp truy xuất dữ liệu sản phẩm.
 * Hiện đang dùng dữ liệu mẫu (mock). Khi có backend, chỉ cần thay phần thân
 * của các hàm dưới đây bằng lời gọi API — phần UI không cần thay đổi.
 */
import { categories, getCategory } from "@/data/categories";
import {
  products,
  getFeaturedProducts,
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
} from "@/data/products";
import type { Category, Product } from "@/types";

export const catalogService = {
  listProducts: (): Product[] => products,
  listCategories: (): Category[] => categories,
  getProduct: (slug: string) => getProductBySlug(slug),
  getCategory: (slug: string) => getCategory(slug),
  getFeatured: (limit?: number) => getFeaturedProducts(limit),
  getByCategory: (slug: string) => getProductsByCategory(slug),
  getRelated: (product: Product, limit?: number) => getRelatedProducts(product, limit),
};

export function searchProducts(list: Product[], query: string, categoryNameOf: (slug: string) => string) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((p) =>
    [p.name, p.productCode, categoryNameOf(p.category), p.description]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}
