import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="px-6 sm:px-10 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-foreground/60">
          Home-baked Financiers
        </p>
        <h1 className="mt-6 text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-foreground/80">
          {profile.tagline}
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/70 max-w-xl mx-auto">
          {profile.description}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#order"
            className="inline-flex h-14 items-center justify-center bg-foreground px-10 text-base font-semibold text-background rounded-full transition-opacity hover:opacity-90"
          >
            주문하기
          </a>
          <a
            href="#products"
            className="inline-flex h-14 items-center justify-center border border-foreground/20 px-10 text-base font-semibold text-foreground rounded-full transition-colors hover:bg-foreground/5"
          >
            제품 보기
          </a>
        </div>

        <p className="mt-8 text-sm text-foreground/60">
          {profile.schedule.cutoff} · {profile.schedule.bake}
        </p>
      </div>
    </section>
  );
}
