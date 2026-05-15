import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 py-20 sm:py-28 scroll-mt-16 bg-highlight"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-foreground/60">
          About
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
          작은 오븐 한 대로, 매일.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          좋은 버터를 충분히 태우고, 아몬드 가루는 조금 더 거칠게, 굽는 시간은 1초
          단위로 기억해두는 일을 좋아합니다. 하루에 굽는 양이 많지 않아 매번 한정
          수량으로 안내드리고 있어요. 한 알씩 천천히 음미해주시면 좋겠습니다.
        </p>
        <p className="mt-6 text-base text-foreground/60">— {profile.name}</p>
      </div>
    </section>
  );
}
