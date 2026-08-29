import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "./EmptyState";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="Không tìm thấy sản phẩm phù hợp"
        description="Bạn thử đổi từ khóa hoặc chọn danh mục khác nhé. Hoặc nhắn Zalo để Thịnh Phát tư vấn trực tiếp."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
