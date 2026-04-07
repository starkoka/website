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

            <div className="max-w-lg mx-auto">
                {/* Contact Info */}
                <div className="card p-6 md:p-8">
                    <h2 className="text-xl font-bold mb-4 gradient-text">連絡先</h2>
                    <p className="text-sm md:text-base mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                        ご連絡はSNSのDMからお願いします。
                    </p>

                    <div className="space-y-4">
                        {profile.socials.filter((s) => s.contact).map((social) => (
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
                                        @{social.url.split('/').pop()}
                                    </p>
                                </div>
                                <svg className="w-5 h-5 ml-auto flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: 'var(--color-text-muted)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

