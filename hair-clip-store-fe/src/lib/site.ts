import type { SiteConfig, ZaloProductContext } from "@/types";

/**
 * Cấu hình thông tin liên hệ của shop.
 * Chỉ cần thay đổi các giá trị dưới đây khi shop đổi số điện thoại / Zalo.
 */
export const SITE: SiteConfig = {
  name: "THỊNH PHÁT",
  tagline: "Kẹp Tóc & Phụ Kiện",
  phone: "0909 123 456",
  facebookUrl: "https://facebook.com/",
  zaloPhone: "0333681660",
} as const;

export const ZALO_CONTACT_URL = `https://zalo.me/${SITE.zaloPhone}`;

/** Tạo link Zalo, kèm nội dung tin nhắn gợi ý nếu có sản phẩm cụ thể. */
export function buildZaloUrl(product?: ZaloProductContext): string {
  if (!product) return ZALO_CONTACT_URL;
  const message = `Xin chào Thịnh Phát, tôi đang quan tâm đến sản phẩm ${product.name} - Mã sản phẩm: ${product.productCode}. Tôi muốn hỏi thêm thông tin và số lượng.`;
  return `${ZALO_CONTACT_URL}?text=${encodeURIComponent(message)}`;
}

/** Định dạng giá tiền VND hiển thị thân thiện với người dùng. */
export function formatPrice(price?: number): string {
  if (price == null) return "Liên hệ";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}
