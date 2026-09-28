import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../../../components/title";
import AtcoderTile from "../../../components/atcoderTile";
import { getActivityLink, getActivityOverview, getMedia, getSocial, getWorksCategories } from "../../lib/content";
import styles from "../inner.module.css";

function getPreview(item) {
    return getMedia(item, item.previewImageId || item.homepage?.imageId);
}

function WorkRow({ item }) {
    const preview = getPreview(item);
    const event = item.events[0];
    const overview = getActivityOverview(item);
    const link = getActivityLink(item, event);
    const isExternal = link && !link.href.startsWith('/');

    if (item.type === "atcoder") {
        return <AtcoderTile title={item.title} description={item.description} profileUrl={getSocial('AtCoder').url} className={styles.atcoderRow} />;
    }

    return (
        <article className={styles.workRow}>
            <div className={styles.workBody}>
                <h3 className={styles.workTitle}>{item.title}</h3>
                {event?.paperTitle && <p className={styles.paperTitle}>論文「{event.paperTitle}」</p>}
                {overview && <p className={styles.workDescription}>{overview}</p>}
                {link && (
                    <Link
                        className={styles.workLink}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                        {item.homepage?.linkText || item.linkText || link.label}
                    </Link>
                )}
            </div>
            {preview && (
                <Image
                    className={styles.workImage}
                    src={preview.src}
                    alt={preview.alt}
                    width={preview.width}
                    height={preview.height}
                    sizes="(max-width: 600px) 100vw, 200px"
                />
            )}
        </article>
    );
}

export default function WorksPage() {
    const categories = getWorksCategories();
    return (
        <div className={styles.worksLayout}>
            <div className={styles.worksHeading}><SectionTitle title="Works" /></div>
            <nav className={styles.worksCategoryNav} aria-label="Worksのカテゴリ">
                {categories.map((category, index) => (
                    <a key={category.id} href={`#works-category-${index}`}>{category.label}</a>
                ))}
            </nav>
            <div className={styles.worksSections}>
                {categories.map((category, index) => {
                    const items = category.items;
                    return (
                        <section className={styles.section} key={category.id} aria-labelledby={`works-category-${index}`}>
                            <h2 className={styles.sectionHeading} id={`works-category-${index}`}>{category.label}</h2>
                            <div>{items.map((item) => <WorkRow key={item.id} item={item} />)}</div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
