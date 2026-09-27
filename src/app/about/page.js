import Link from "next/link";
import SectionTitle from "../../../components/title";
import Tile from "../../../components/tile";
import SkillCard from "../../../components/skillCard";
import AtcoderTile from "../../../components/atcoderTile";
import TextWithBreaks from "../../../components/TextWithBreaks";
import profile from "../../data/profile.json";
import skills from "../../data/skills.json";

function HighlightCard({ highlight }) {
    const content = (
        <>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "var(--color-text-muted)" }}>
                公開実績
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                {highlight.title}
            </h3>
            <p className="text-sm md:text-base" style={{ color: "var(--color-text-secondary)" }}>
                {highlight.description}
            </p>
            <div className="mt-4 pt-3 text-sm font-medium" style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-accent)" }}>
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

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle title="About" description={`${profile.displayName}の公開プロフィールと技術スタック`} />

            <div className="card p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 md:gap-8">
                <img
                    src={profile.avatar}
                    alt={`${profile.displayName}のアイコン`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 object-cover flex-shrink-0 mx-auto md:mx-0"
                    style={{ ringColor: "var(--color-accent)" }}
                />
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
                        {profile.altName}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">{profile.displayName}</h2>
                    <p className="text-sm md:text-base mb-3" style={{ color: "var(--color-text-secondary)" }}>
                        {profile.affiliation}
                    </p>
                    <p className="text-sm md:text-base mb-4 leading-7" style={{ color: "var(--color-text-secondary)" }}>
                        <TextWithBreaks text={profile.bio} />
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                        {profile.roles.map((role) => (
                            <span
                                key={role}
                                className="text-xs px-3 py-1 rounded-full"
                                style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }}
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {[...profile.clubs, ...profile.other].map((item) => (
                            <span
                                key={item}
                                className="text-xs px-3 py-1 rounded-full"
                                style={{ background: "var(--color-bg-card)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {profile.infoTiles.map((tile) => (
                    <Tile key={tile.title} title={tile.title} description={tile.description} />
                ))}
            </div>

            <div className="mb-10">
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">公開実績</h2>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        公開プロフィール・成果物・活動履歴から拾える代表的な実績
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.highlights.map((highlight) => (
                        <HighlightCard key={highlight.title} highlight={highlight} />
                    ))}
                </div>
            </div>

            <div className="mb-10">
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">注力分野</h2>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        どの領域で何を作ってきたかを短くまとめています
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.focusAreas.map((area) => (
                        <div key={area.title} className="card p-6">
                            <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                                {area.title}
                            </h3>
                            <p className="text-sm md:text-base leading-7" style={{ color: "var(--color-text-secondary)" }}>
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-10">
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">技術スタック</h2>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        ★:チュートリアル程度 ★★:多少の開発経験あり ★★★:開発経験が多々あり
                    </p>
                </div>

                {skills.categories.map((category) => (
                    <div key={category.name} className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--color-text-muted)" }}>
                            <span>{category.name}</span>
                            <span className="text-xs">- {category.label}</span>
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {category.items.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    title={skill.name}
                                    description={skill.description}
                                    iconURL={skill.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">補足スキル</h2>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        競技・ロボコン・情報発信など、技術スタックの外側にある活動です
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.otherSkills.map((skill) =>
                        skill.type === "atcoder" ? (
                            <AtcoderTile
                                key={skill.title}
                                title={skill.title}
                                description={skill.description}
                            />
                        ) : (
                            <Tile
                                key={skill.title}
                                title={skill.title}
                                description={skill.description}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
