import { notFound } from 'next/navigation';
import WorksPage from "../../../../components/worksPage";
import EmbedMedia from "../../../../components/embedMedia";
import Link from "next/link";
import projects from "../../../data/projects.json";

// Collect all items with slugs and detail data
function getAllDetailItems() {
    const items = [];
    for (const category of projects.categories) {
        for (const item of category.items) {
            if (item.slug && item.detail) {
                items.push(item);
            }
        }
    }
    return items;
}

export function generateStaticParams() {
    return getAllDetailItems().map((item) => ({
        slug: item.slug,
    }));
}

export default function WorkDetailPage({ params }) {
    const { slug } = params;

    const allItems = getAllDetailItems();
    const project = allItems.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    const { detail } = project;

    const icons = detail.links?.length > 0 ? (
        <div className="flex gap-2 justify-center">
            {detail.links.map((link) => (
                <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-2 inline-flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ color: 'var(--color-accent)' }}
                    aria-label={link.name}
                >
                    {link.icon === 'github' && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                        </svg>
                    )}
                    {link.icon !== 'github' && <span className="text-sm font-medium">{link.name}</span>}
                </Link>
            ))}
        </div>
    ) : [];

    const embedComponents = detail.embeds?.map((embed, i) => (
        <EmbedMedia
            key={i}
            title={embed.title}
            url={embed.url}
            description={embed.description}
        />
    ));

    return (
        <WorksPage
            title={project.title}
            description={project.description}
            icons={icons}
            body={detail.body}
            images={detail.images || []}
            other={embedComponents?.length > 0 ? <>{embedComponents}</> : null}
        />
    );
}
