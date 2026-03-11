import Link from 'next/link';
import profile from '../data/profile.json';

function SocialIcon({ icon }) {
    if (icon === 'twitter') return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
    );
    if (icon === 'github') return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
        </svg>
    );
    if (icon === 'atcoder') return <span className="text-sm font-bold">AC</span>;
    return null;
}

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 animate-float"
                        style={{ background: 'var(--color-gradient-start)', filter: 'blur(80px)' }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float"
                        style={{ background: 'var(--color-gradient-end)', filter: 'blur(100px)', animationDelay: '1.5s' }}
                    />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    {/* Avatar */}
                    <div className="animate-fade-in-up mb-6">
                        <img
                            src={profile.avatar}
                            alt={`${profile.displayName}のアイコン`}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto ring-4 object-cover"
                            style={{ ringColor: 'var(--color-accent)' }}
                        />
                    </div>

                    {/* Name */}
                    <h1 className="animate-fade-in-up text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ animationDelay: '100ms' }}>
                        <span>I am </span>
                        <span className="gradient-text">{profile.displayName}</span>
                    </h1>

                    {/* Bio */}
                    <p
                        className="animate-fade-in-up text-base md:text-lg max-w-xl mx-auto mb-8"
                        style={{ color: 'var(--color-text-secondary)', animationDelay: '200ms' }}
                    >
                        {profile.bio}
                    </p>

                    {/* Social Links */}
                    <div className="animate-fade-in-up flex justify-center gap-3" style={{ animationDelay: '300ms' }}>
                        {profile.socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card p-3 inline-flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{ color: 'var(--color-accent)' }}
                                aria-label={s.name}
                            >
                                <SocialIcon icon={s.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* README Section */}
            <section className="py-8 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="card p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 gradient-text">README</h2>
                        <div className="space-y-2 text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                            <p>{profile.displayName}です。表記は{profile.displayName} or {profile.altName}です。</p>
                            <p>{profile.bio}</p>
                            <p>主にC++/Python/JavaScriptを扱っています。Web系はこのサイトが作れる程度です。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-8 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { href: '/about', title: 'About', desc: 'もっと詳しい自己紹介', icon: '👤' },
                            { href: '/works', title: 'Works', desc: '過去の作品集', icon: '🛠️' },
                            { href: '/timeline', title: 'Timeline', desc: '経歴・受賞歴', icon: '📅' },
                            { href: '/contact', title: 'Contact', desc: 'お問い合わせ', icon: '✉️' },
                        ].map((item, i) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="card p-5 group block"
                            >
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h3
                                    className="text-lg font-bold mb-1 group-hover:underline"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {item.title}
                                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
