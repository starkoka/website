import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import EmbedMedia from './embedMedia';
import SectionTitle from './title';
import Carousel from './carousel';
import { getActivityDetailEvents, getActivityDetailText } from '../src/lib/content';
import { formatTimelineMonth } from '../src/lib/timeline';
import styles from '../src/app/inner.module.css';

const WorksPage = ({ activity }) => {
  const body = getActivityDetailText(activity);
  const events = getActivityDetailEvents(activity);
  const images = activity.media?.filter((media) => media.id.startsWith('image-')) || [];
  const links = activity.links || [];
  const embeds = activity.detail?.embeds || [];

  return (
    <article className={styles.narrowPage}>
      <SectionTitle title={activity.title} />
      {body && (
        <div className={`${styles.detailBody} prose-custom`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>
      )}
      {links.length > 0 && (
        <nav className={styles.detailLinks} aria-label="関連リンク">
          {links.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      )}
      {images.length > 0 && (
        <section className={styles.detailSection} aria-labelledby="detail-images-heading">
          <h2 id="detail-images-heading" className={styles.detailSectionTitle}>写真・画面</h2>
          <Carousel images={images} />
        </section>
      )}
      {events.length > 0 && (
        <section className={styles.detailSection} aria-labelledby="detail-events-heading">
          <h2 id="detail-events-heading" className={styles.detailSectionTitle}>活動記録</h2>
          <ol className={styles.detailEvents}>
            {events.map((event) => (
              <li key={event.id} className={styles.detailEvent}>
                <time dateTime={event.date}>{formatTimelineMonth(event)}</time>
                <div>
                  <h3>{event.title || activity.title}</h3>
                  {event.description && <p>{event.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
      {embeds.length > 0 && (
        <section className={styles.detailSection} aria-labelledby="detail-resources-heading">
          <h2 id="detail-resources-heading" className={styles.detailSectionTitle}>資料</h2>
          <div className={styles.detailEmbeds}>
            {embeds.map((embed) => (
              <EmbedMedia key={embed.url} title={embed.title} url={embed.url} description={embed.description} />
            ))}
          </div>
        </section>
      )}
      <Link className={styles.detailBack} href="/works">Works一覧に戻る</Link>
    </article>
  );
};

export default WorksPage;
