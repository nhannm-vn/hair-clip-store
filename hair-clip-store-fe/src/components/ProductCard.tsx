import { Link } from "@tanstack/react-router";

import { getCategoryName } from "@/data/categories";
import { formatPrice } from "@/lib/site";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/san-pham/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="aspect-square overflow-hidden bg-cream">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <p className="text-[11px] tracking-[0.14em] text-rose uppercase">
          {getCategoryName(product.category)}
        </p>
        <h3 className="text-sm leading-snug font-semibold text-foreground sm:text-base">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">Mã: {product.productCode}</p>
        <p className="hidden text-xs leading-relaxed text-muted-foreground sm:line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-sm font-semibold text-foreground">{formatPrice(product.price)}</span>
          <span className="text-xs font-medium text-rose transition-transform duration-300 group-hover:translate-x-0.5">
            Xem chi tiết →
          </span>
        </div>
      </div>
    </Link>
  );
}
