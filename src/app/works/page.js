import SectionTitle from "../../../components/title";
import ProjectCard from "../../../components/projectCard";
import AtcoderTile from "../../../components/atcoderTile";
import projects from "../../data/projects.json";

export default function WorksPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle
                title="Works"
                description="今までに作ったものや取り組んできたものを紹介しています。"
            />

            {projects.categories.map((category) => (
                <div key={category.name} className="mb-12">
                    {/* Category Header */}
                    <div className="card p-4 md:p-6 mb-6 text-center">
                        <h2 className="text-xl md:text-2xl font-bold gradient-text mb-1">{category.name}</h2>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            {category.description}
                        </p>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item) => {
                            if (item.type === 'atcoder') {
                                return (
                                    <AtcoderTile
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                    />
                                );
                            }

                            const linkUrl = item.internal
                                ? `/works/${item.slug}`
                                : item.linkUrl;

                            return (
                                <ProjectCard
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    linkText={item.linkText}
                                    linkUrl={linkUrl}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
