import { profile } from "@/data/profile";

const channels = [
  { key: "kakao", emoji: "💬", primary: true },
  { key: "instagram", emoji: "📷", primary: false },
  { key: "naver", emoji: "🛒", primary: false },
] as const;

export default function Order() {
  return (
    <section
      id="order"
      className="px-6 sm:px-10 py-20 sm:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            세 가지 길로 주문받습니다
          </h2>
          <p className="mt-3 text-foreground/70">
            가장 편한 채널을 선택해주세요. 메시지 받는 대로 안내드립니다.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {channels.map((c) => {
            const ch = profile.channels[c.key];
            return (
              <a
                key={c.key}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-2xl p-5 sm:p-6 transition-colors ${
                  c.primary
                    ? "bg-foreground text-background hover:opacity-90"
                    : "bg-background border border-foreground/15 text-foreground hover:bg-highlight"
                }`}
              >
                <span className="text-3xl shrink-0" aria-hidden>
                  {c.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold">{ch.label}</p>
                  <p
                    className={`mt-0.5 text-sm ${
                      c.primary ? "text-background/70" : "text-foreground/60"
                    }`}
                  >
                    {ch.note}
                  </p>
                </div>
                <span
                  className={`text-sm font-mono shrink-0 ${
                    c.primary ? "text-background/80" : "text-foreground/50"
                  }`}
                >
                  열기 ↗
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-highlight p-6 sm:p-7">
          <h3 className="text-base font-semibold">주문 안내</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
            <li>· {profile.schedule.cutoff}</li>
            <li>· {profile.schedule.bake}</li>
            <li>· {profile.schedule.delivery}</li>
            <li>· {profile.shelfLife}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
