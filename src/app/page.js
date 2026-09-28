import Image from "next/image";
import Link from "next/link";
import SocialIcon from "../../components/SocialIcon";
import profile from "../data/profile.json";
import skills from "../data/skills.json";
import { getActivityOverview, getCurrentAffiliation, getFeaturedActivities, getHomeSocials, getMedia, getRecentEvents } from "../lib/content";
import { formatTimelineDate } from "../lib/timeline";
import styles from "./home.module.css";

export const metadata = {
  title: "kokastar.dev | 制作物と活動記録",
  description: `${profile.displayName}の制作物と活動記録。`,
};

const socialLinks = getHomeSocials();
const featuredWorks = getFeaturedActivities();
const recentActivities = getRecentEvents();

function ActivityLink({ event }) {
  if (!event.link) return null;
  if (event.link.href.startsWith("/")) {
    return <Link href={event.link.href}>{event.link.label}</Link>;
  }
  return <a href={event.link.href} target="_blank" rel="noopener noreferrer">{event.link.label}</a>;
}

function FeaturedWork({ item }) {
  const home = item.homepage;
  const image = getMedia(item, home.imageId);
  const summary = home.summary || getActivityOverview(item);

  return (
    <article className={styles.work}>
      <div className={styles.workHeading}>
        <h3>{item.title}</h3>
        <p className={styles.role}>{home.role}</p>
      </div>
      {image && (
        <figure className={styles.workMedia}>
          <Image
            src={image.src}
            alt={image.alt || ""}
            width={image.width}
            height={image.height}
            sizes="(max-width: 560px) 100vw, 220px"
          />
        </figure>
      )}
      <div className={styles.workDescription}>
        <p>{summary}</p>
        {home.result && <p className={styles.result}>{home.result}</p>}
      </div>
      <Link className={styles.workLink} href={`/works/${item.slug}`}>{home.linkText || `${item.title}を見る`}</Link>
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <aside className={styles.profile} aria-label="プロフィール">
        <div className={styles.identity}>
          <Image src={profile.avatar} alt="" width={72} height={72} priority />
          <div>
            <h1 translate="no">{profile.displayName}</h1>
            <p className={styles.alias}>{profile.altName}</p>
          </div>
        </div>
        <p className={styles.affiliation}>{getCurrentAffiliation(true)}</p>
        <p className={styles.intro}>{profile.bio}</p>
        <nav className={styles.profileNav} aria-label="ページ内とプロフィール">
          <a href="#recent-activity">最近の活動</a>
          <a href="#selected-works">制作物と担当内容</a>
          <a href="#profile-details">プロフィール</a>
        </nav>
        <nav className={styles.socialNav} aria-label="外部プロフィール">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name === "Twitter" ? "X" : social.name}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </nav>
        <Link className={styles.contactLink} href="/contact">お問い合わせ</Link>
      </aside>

      <div className={styles.content}>
        <section id="recent-activity" className={styles.activity} aria-labelledby="activity-heading">
          <h2 id="activity-heading" className={styles.sectionTitle}>最近の活動</h2>
          {recentActivities.map((event) => (
            <div className={styles.activityItem} key={event.key}>
              <p className={styles.activityDate}>{formatTimelineDate(event)}</p>
              <h3>{event.title}</h3>
              {event.paperTitle && <p className={styles.paperTitle}>論文「{event.paperTitle}」</p>}
              {event.description && <p className={styles.activityDescription}>{event.description}</p>}
              <ActivityLink event={event} />
            </div>
          ))}
          <Link className={styles.historyLink} href="/timeline">活動履歴を見る</Link>
        </section>

        <section id="selected-works" className={styles.works} aria-labelledby="works-heading">
          <h2 id="works-heading" className={styles.sectionTitle}>制作物と担当内容</h2>

          {featuredWorks.map((item) => <FeaturedWork key={item.slug} item={item} />)}
          <Link className={styles.allWorks} href="/works">すべての制作物を見る</Link>
        </section>

        <section id="profile-details" className={styles.details} aria-labelledby="profile-details-heading">
          <h2 id="profile-details-heading" className={styles.sectionTitle}>プロフィール</h2>
          <div className={styles.detailRows}>
            <div className={styles.detailGroup}>
              <h3>所属・活動</h3>
              <ul className={styles.affiliationList}>
                {[...profile.clubs, ...profile.other].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.detailGroup}>
              <h3>使用技術</h3>
              <ul className={styles.skillList}>
                {skills.items.map((skill) => (
                  <li key={skill.name}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillDescription}>{skill.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
