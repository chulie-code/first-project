import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-12 border-t border-foreground/10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-foreground/60">
        <p>© 2026 {profile.name} — Home-baked financiers, Seoul.</p>
        <div className="flex gap-5">
          <a
            href={profile.channels.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href={profile.channels.kakao.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            KakaoTalk
          </a>
          <a
            href={profile.channels.naver.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Smart Store
          </a>
        </div>
      </div>
    </footer>
  );
}
