import { profile } from "@/data/profile";

export default function StickyOrderBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-background border-t border-foreground/10 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-3 grid grid-cols-2 gap-2">
        <a
          href={profile.channels.kakao.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center bg-foreground text-background text-sm font-semibold rounded-full"
        >
          카카오톡 주문
        </a>
        <a
          href={profile.channels.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center border border-foreground/20 text-foreground text-sm font-semibold rounded-full"
        >
          인스타 DM
        </a>
      </div>
    </div>
  );
}
