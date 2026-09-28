'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionTitle from "../../../components/title";
import { getTimelineEvents, getTimelineFilters } from "../../lib/content";
import { formatTimelineMonth, newestFirst } from "../../lib/timeline";
import styles from "../inner.module.css";

const filterGroups = getTimelineFilters();
const timelineEvents = getTimelineEvents();
const groupByType = new Map(filterGroups.flatMap((group) => group.types.map((type) => [type, group])));
const validFilters = new Set(filterGroups.map((group) => group.id));
function normalizeFilter(value) {
    if (validFilters.has(value)) return value;
    return groupByType.get(value)?.id || 'all';
}
function TimelineRow({ event }) {
    const related = event.link;
    const external = related && !related.href.startsWith('/');

    return (
        <article className={styles.activityRow}>
            <time className={styles.activityDate} dateTime={event.date}>{formatTimelineMonth(event)}</time>
            <div>
                <p className={styles.activityType}>{groupByType.get(event.type)?.label}</p>
                <h3 className={styles.activityTitle}>{event.title}</h3>
                {event.paperTitle && <p className={styles.paperTitle}>論文「{event.paperTitle}」</p>}
                {event.description && <p className={styles.activityDescription}>{event.description}</p>}
                {related && (
                    <Link
                        className={styles.activityLink}
                        href={related.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                    >
                        {related.label}
                    </Link>
                )}
            </div>
        </article>
    );
}

export default function TimelinePage() {
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const syncFilter = () => {
            const value = new URLSearchParams(window.location.search).get('type');
            setFilter(normalizeFilter(value));
        };
        syncFilter();
        window.addEventListener('popstate', syncFilter);
        return () => window.removeEventListener('popstate', syncFilter);
    }, []);

    const changeFilter = (nextFilter) => {
        setFilter(nextFilter);
        const url = new URL(window.location.href);
        if (nextFilter === 'all') url.searchParams.delete('type');
        else url.searchParams.set('type', nextFilter);
        window.history.replaceState(null, '', url);
    };

    const activeGroup = filterGroups.find((group) => group.id === filter);
    const visibleEvents = timelineEvents.filter((event) => !activeGroup || activeGroup.types.includes(event.type));
    const plannedEvents = visibleEvents.filter((event) => event.planned).sort(newestFirst);
    const events = visibleEvents.filter((event) => !event.planned).sort(newestFirst);

    return (
        <div className={styles.narrowPage}>
            <SectionTitle title="Timeline" />
            <div className={styles.timelineFilters} role="group" aria-label="活動の種類">
                <button
                    type="button"
                    onClick={() => changeFilter('all')}
                    aria-pressed={filter === 'all'}
                    className={`${styles.timelineFilter} ${filter === 'all' ? styles.timelineFilterActive : ''}`}
                >
                    すべて
                </button>
                {filterGroups.map((group) => (
                    <button
                        key={group.id}
                        type="button"
                        onClick={() => changeFilter(group.id)}
                        aria-pressed={filter === group.id}
                        className={`${styles.timelineFilter} ${filter === group.id ? styles.timelineFilterActive : ''}`}
                    >
                        {group.label}
                    </button>
                ))}
            </div>
            {plannedEvents.length > 0 && (
                <section className={styles.section} aria-labelledby="timeline-planned">
                    <h2 className={styles.sectionHeading} id="timeline-planned">予定</h2>
                    <div>{plannedEvents.map((event) => (
                        <TimelineRow key={event.key} event={event} />
                    ))}</div>
                </section>
            )}
            {events.length > 0 && (
                <section className={styles.section} aria-labelledby="timeline-records">
                    <h2 className={styles.sectionHeading} id="timeline-records">これまでの記録</h2>
                    <div>{events.map((event) => (
                        <TimelineRow key={event.key} event={event} />
                    ))}</div>
                </section>
            )}
        </div>
    );
}
