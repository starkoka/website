import Link from 'next/link';
import profile from '../data/profile.json';
import SocialIcon from '../../components/SocialIcon';

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
