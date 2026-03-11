import SectionTitle from "../../../components/title";
import profile from "../../data/profile.json";
import SocialIcon from "../../../components/SocialIcon";

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
