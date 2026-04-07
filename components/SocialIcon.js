/**
 * Shared social media icon component using Simple Icons CDN for official brand logos.
 * CDN: https://cdn.simpleicons.org/{slug}/{light_color}/{dark_color}
 * Dark mode is handled via CSS prefers-color-scheme by the CDN.
 */

// Map of icon keys to Simple Icons slugs
const ICON_MAP = {
    twitter: { slug: 'x', name: 'X' },
    github: { slug: 'github', name: 'GitHub' },
    atcoder: { slug: null, name: 'AtCoder', fallbackUrl: 'https://img.atcoder.jp/assets/favicon.png' },
    note: { slug: 'note', name: 'note' },
    zenn: { slug: 'zenn', name: 'Zenn' },
    qiita: { slug: 'qiita', name: 'Qiita' },
};

export default function SocialIcon({ icon, className = "w-5 h-5" }) {
    const config = ICON_MAP[icon];

    if (!config) {
        return <span className="text-sm font-bold">{icon?.toUpperCase?.() || '?'}</span>;
    }

    // For icons not on Simple Icons, use fallback
    if (!config.slug) {
        return (
            <img
                src={config.fallbackUrl}
                alt={config.name}
                className={className}
                style={{ objectFit: 'contain' }}
                loading="lazy"
            />
        );
    }

    // Use Simple Icons CDN with dark mode support
    // Format: /slug/lightColor/darkColor
    const url = `https://cdn.simpleicons.org/${config.slug}/1a1a1a/cccccc`;

    return (
        <img
            src={url}
            alt={config.name}
            className={className}
            style={{ objectFit: 'contain' }}
            loading="lazy"
        />
    );
}
