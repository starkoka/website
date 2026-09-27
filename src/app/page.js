import Link from "next/link";
import profile from "../data/profile.json";
import SocialIcon from "../../components/SocialIcon";
import TextWithBreaks from "../../components/TextWithBreaks";

function HighlightPreview({ highlight }) {
  const content = (
    <>
      <div
        className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
        style={{ color: "var(--color-text-muted)" }}
      >
        公開実績
      </div>
      <h3
        className="text-lg font-bold mb-2"
        style={{ color: "var(--color-text-primary)" }}
      >
        {highlight.title}
      </h3>
      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
        {highlight.description}
      </p>
      <div
        className="mt-4 pt-3 text-sm font-medium"
        style={{
          borderTop: "1px solid var(--color-border)",
          color: "var(--color-accent)",
        }}
      >
        詳細を見る
      </div>
    </>
  );

  if (highlight.external) {
    return (
      <a
        href={highlight.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-interactive p-6 block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={highlight.link} className="card card-interactive p-6 block h-full">
      {content}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-float"
            style={{
              background: "var(--color-gradient-start)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float"
            style={{
              background: "var(--color-gradient-end)",
              filter: "blur(100px)",
              animationDelay: "1.5s",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in-up mb-6">
            <img
              src={profile.avatar}
              alt={`${profile.displayName}のアイコン`}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto ring-4 object-cover"
              style={{ ringColor: "var(--color-accent)" }}
            />
          </div>

          <h1
            className="animate-fade-in-up text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ animationDelay: "100ms" }}
          >
            <span>I am </span>
            <span className="gradient-text">{profile.displayName}</span>
          </h1>

          <p
            className="animate-fade-in-up text-base md:text-lg max-w-2xl mx-auto mb-5"
            style={{
              color: "var(--color-text-secondary)",
              animationDelay: "200ms",
            }}
          >
            <TextWithBreaks text={profile.bio} />
          </p>

          <div
            className="animate-fade-in-up flex flex-wrap justify-center gap-2 mb-8"
            style={{ animationDelay: "250ms" }}
          >
            {profile.roles.map((role) => (
              <span
                key={role}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "var(--color-bg-card)",
                  color: "var(--color-text-secondary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <div
            className="animate-fade-in-up flex justify-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-3 inline-flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ color: "var(--color-accent)" }}
                aria-label={s.name}
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">公開ハイライト</h2>
            <p className="text-sm md:text-base" style={{ color: "var(--color-text-secondary)" }}>
              公開情報から見える代表的な取り組み
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {profile.highlights.map((highlight) => (
              <HighlightPreview key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/about",
                title: "About",
                desc: "公開プロフィールと技術スタック",
                icon: "👤",
              },
              {
                href: "/works",
                title: "Works",
                desc: "成果物とコンテスト実績",
                icon: "🛠️",
              },
              {
                href: "/timeline",
                title: "Timeline",
                desc: "経歴・受賞・活動記録",
                icon: "📅",
              },
              {
                href: "/contact",
                title: "Contact",
                desc: "お問い合わせ",
                icon: "✉️",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card p-5 group block"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3
                  className="text-lg font-bold mb-1 group-hover:underline"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.title}
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
