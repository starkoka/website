import SectionTitle from "../../../components/title";
import Tile from "../../../components/tile";
import SkillCard from "../../../components/skillCard";
import AtcoderTile from "../../../components/atcoderTile";
import profile from "../../data/profile.json";
import skills from "../../data/skills.json";

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle title="About" description={`僕${profile.displayName}の自己紹介から技術スタックまで`} />

            {/* Profile Card */}
            <div className="card p-6 md:p-8 mb-8 flex flex-col sm:flex-row items-center gap-6">
                <img
                    src={profile.avatar}
                    alt={`${profile.displayName}のアイコン`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 object-cover flex-shrink-0"
                    style={{ ringColor: 'var(--color-accent)' }}
                />
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">{profile.displayName}</h2>
                    <p className="text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                        {profile.affiliation}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
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

            {/* Info Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <Tile
                    title="所属"
                    description={`${profile.affiliation}\n\n${profile.clubs.join(' / ')}所属\n\n${profile.other.join(' / ')}`}
                />
                <Tile
                    title="経歴"
                    description="2006年12月14日生まれ\n\n2022年4月　木更津高専情報工学科入学"
                />
                <Tile
                    title="受賞歴"
                    description="Kloudハッカソン#4 優秀賞受賞"
                />
                <Tile
                    title="大会出場暦"
                    description="高専ロボコン2022/2023出場"
                />
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">技術スタック</h2>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        ★:チュートリアル程度 ★★:多少の開発経験あり ★★★:開発経験が多々あり
                    </p>
                </div>

                {skills.categories.map((category) => (
                    <div key={category.name} className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
                            <span>{category.name}</span>
                            <span className="text-xs">— {category.label}</span>
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

            {/* Other Skills */}
            <div>
                <div className="card p-4 md:p-6 mb-4 text-center">
                    <h2 className="text-xl md:text-2xl font-bold gradient-text mb-2">その他スキル</h2>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        技術的なスキルであったり技術スタックの補足
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.otherSkills.map((skill) =>
                        skill.type === 'atcoder' ? (
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
