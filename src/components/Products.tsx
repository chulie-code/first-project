import { products, boxOptions, formatKRW } from "@/data/products";
import ProductIllustration from "./ProductIllustration";
import BoxIllustration from "./BoxIllustration";

export default function Products() {
  return (
    <section
      id="products"
      className="px-6 sm:px-10 py-20 sm:py-28 scroll-mt-16 bg-highlight"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            오늘의 라인업
          </h2>
          <p className="mt-3 text-foreground/70">
            네 가지 휘낭시에와 박스 세트. 마음에 드는 메뉴를 골라 주문해주세요.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col bg-background rounded-2xl border border-foreground/10 overflow-hidden"
            >
              <ProductIllustration
                slug={p.slug}
                className="w-full aspect-[5/3] block"
              />
              <div className="flex flex-col p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <span className="text-xl sm:text-2xl font-bold tabular-nums shrink-0">
                  {formatKRW(p.price)}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                {p.description}
              </p>
              <p className="mt-3 text-sm text-foreground/55">
                {p.notes}
              </p>
              <a
                href="#order"
                className="mt-6 inline-flex h-11 items-center justify-center bg-foreground text-background text-sm font-semibold rounded-full transition-opacity hover:opacity-90"
              >
                {p.shortName} 주문하기 →
              </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {boxOptions.map((box) => (
            <article
              key={box.slug}
              className="flex flex-col bg-background rounded-2xl border-2 border-foreground overflow-hidden"
            >
              <BoxIllustration
                count={box.count as 4 | 8}
                className="w-full aspect-[5/3] block"
              />
              <div className="flex flex-col p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {box.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold tabular-nums shrink-0">
                    {formatKRW(box.price)}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                  {box.note}
                </p>
                <a
                  href="#order"
                  className="mt-6 inline-flex h-11 items-center justify-center bg-foreground text-background text-sm font-semibold rounded-full transition-opacity hover:opacity-90"
                >
                  {box.count}입 박스 주문하기 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
