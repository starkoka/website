import SectionTitle from "../../../components/title";
import profile from "../../data/profile.json";
import SocialIcon from "../../../components/SocialIcon";
import styles from "../inner.module.css";

export default function ContactPage() {
    return (
        <div className={styles.narrowPage}>
            <SectionTitle title="Contact" />
            <p className={styles.contactText}>ご連絡はXのDMからお願いします。</p>
            {profile.socials.filter((social) => social.contact).map((social) => (
                <a
                    className={styles.contactRow}
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`X @${social.url.split('/').pop()}を開く`}
                >
                    <SocialIcon icon={social.icon} />
                    <span className={styles.contactHandle}>@{social.url.split('/').pop()}</span>
                </a>
            ))}
        </div>
    );
}
