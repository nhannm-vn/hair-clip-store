import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import { ZaloButton } from "./ZaloButton";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-24">
      <div className="reveal">
        <p className="eyebrow">Kẹp tóc & phụ kiện</p>
        <h1 className="mt-4 text-4xl leading-[1.1] font-semibold text-foreground sm:text-5xl lg:text-6xl">
          Khám phá những mẫu kẹp tóc dành cho bạn
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Thịnh Phát mang đến nhiều mẫu kẹp tóc đa dạng với nhiều kiểu dáng, màu sắc và phong cách
          khác nhau. Dễ dàng khám phá sản phẩm, xem thông tin chi tiết và liên hệ trực tiếp với shop
          qua Zalo để đặt hàng.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            to="/san-pham"
            search={{ danh_muc: undefined }}
            className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-7 text-base font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Khám phá sản phẩm
          </Link>
          <ZaloButton size="lg" variant="outline" />
        </div>
      </div>

      <div className="reveal relative">
        <div className="overflow-hidden rounded-3xl border border-border/70 shadow-lift">
          <img
            src={heroImage}
            alt="Bộ sưu tập kẹp tóc và phụ kiện của Thịnh Phát"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-soft sm:block">
          <p className="text-2xl font-semibold text-foreground">18+</p>
          <p className="text-xs text-muted-foreground">mẫu kẹp tóc đang có sẵn</p>
        </div>
      </div>
    </section>
  );
}
