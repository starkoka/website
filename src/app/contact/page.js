import SectionTitle from "../../../components/title";
import profile from "../../data/profile.json";

function SocialIcon({ icon }) {
    if (icon === 'twitter') return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
    );
    if (icon === 'github') return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
        </svg>
    );
    if (icon === 'atcoder') return <span className="text-lg font-bold">AC</span>;
    return null;
}

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle
                title="Contact"
                description="お問い合わせ・連絡先"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="card p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-4 gradient-text">連絡先</h2>
                    <p className="text-sm md:text-base mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                        ご連絡はSNSのDMからお願いします。
                    </p>

                    <div className="space-y-4">
                        {profile.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card flex items-center gap-4 p-4 group"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                    style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-accent)' }}
                                >
                                    <SocialIcon icon={social.icon} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{social.name}</h3>
                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                        {social.url.replace('https://', '').replace('http://', '')}
                                    </p>
                                </div>
                                <svg className="w-5 h-5 ml-auto flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: 'var(--color-text-muted)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Profile Summary */}
                <div className="card p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-4 gradient-text">プロフィール</h2>
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={profile.avatar}
                            alt={profile.displayName}
                            className="w-16 h-16 rounded-full ring-2 object-cover"
                            style={{ ringColor: 'var(--color-accent)' }}
                        />
                        <div>
                            <h3 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
                                {profile.displayName}
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                {profile.affiliation}
                            </p>
                        </div>
                    </div>
                    <p className="text-sm md:text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                        {profile.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[...profile.clubs, ...profile.other].map((item) => (
                            <span
                                key={item}
                                className="text-xs px-3 py-1 rounded-full"
                                style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
