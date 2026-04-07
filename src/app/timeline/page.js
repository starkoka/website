'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionTitle from "../../../components/title";
import TextWithBreaks from "../../../components/TextWithBreaks";
import timelineData from "../../data/timeline.json";

const typeIcons = {
    life: '🎂',
    education: '🎓',
    contest: '🏆',
    achievement: '⭐',
};

function TimelineCard({ event, index }) {
    const content = (
        <>
            <div className="flex items-center gap-2 mb-2">
                <span
                    className="text-xs px-2 py-0.5 rounded-full text-white"
                    style={{ background: timelineData.typeColors[event.type] }}
                >
                    {typeIcons[event.type]} {timelineData.typeLabels[event.type]}
                </span>
            </div>
            <h3
                className="text-base md:text-lg font-bold mb-1"
                style={{ color: 'var(--color-text-primary)' }}
            >
                {event.title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <TextWithBreaks text={event.description} />
            </p>
            {event.link && (
                <div className="mt-2">
                    <span
                        className="inline-flex items-center gap-1 text-xs font-medium"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        詳細を見る
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </div>
            )}
        </>
    );

    const cardClass = "card p-4 md:p-5 animate-fade-in-up";
    const cardStyle = { animationDelay: `${index * 80}ms` };

    if (event.link) {
        const isExternal = !event.link.startsWith('/');
        if (isExternal) {
            return (
                <a href={event.link} target="_blank" rel="noopener noreferrer" className={`${cardClass} block`} style={cardStyle}>
                    {content}
                </a>
            );
        }
        return (
            <Link href={event.link} className={`${cardClass} block`} style={cardStyle}>
                {content}
            </Link>
        );
    }

    return (
        <div className={cardClass} style={cardStyle}>
            {content}
        </div>
    );
}

export default function TimelinePage() {
    const [filter, setFilter] = useState('all');

    const events = timelineData.events
        .filter((e) => filter === 'all' || e.type === filter)
        .sort((a, b) => a.date.localeCompare(b.date));

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <SectionTitle
                title="Timeline"
                description="これまでの経歴や受賞・活動の記録"
            />

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                <button
                    onClick={() => setFilter('all')}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                    style={{
                        background: filter === 'all' ? 'var(--color-accent)' : 'var(--color-bg-card)',
                        color: filter === 'all' ? '#fff' : 'var(--color-text-secondary)',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    すべて
                </button>
                {Object.entries(timelineData.typeLabels).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                        style={{
                            background: filter === key ? timelineData.typeColors[key] : 'var(--color-bg-card)',
                            color: filter === key ? '#fff' : 'var(--color-text-secondary)',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        {typeIcons[key]} {label}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                    style={{ background: 'var(--color-border)' }}
                />

                <div className="space-y-8">
                    {events.map((event, index) => {
                        const isLeft = index % 2 === 0;
                        const dateLabel = event.date.replace('-', '年') + '月';

                        return (
                            <div
                                key={`${event.date}-${event.title}`}
                                className="relative flex items-start"
                            >
                                {/* Center dot */}
                                <div
                                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 mt-4 z-10"
                                    style={{
                                        background: 'var(--color-bg-primary)',
                                        borderColor: timelineData.typeColors[event.type],
                                    }}
                                />

                                {/* Desktop layout */}
                                <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full">
                                    {/* Left column */}
                                    <div className={isLeft ? 'text-right pr-8' : 'flex items-start justify-end pr-8'}>
                                        {isLeft ? (
                                            <div className="inline-block max-w-md text-left">
                                                <TimelineCard event={event} index={index} />
                                            </div>
                                        ) : (
                                            <span className="inline-block mt-4 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                {dateLabel}
                                            </span>
                                        )}
                                    </div>

                                    {/* Right column */}
                                    <div className={!isLeft ? 'pl-8' : 'flex items-start pl-8'}>
                                        {!isLeft ? (
                                            <div className="inline-block max-w-md text-left">
                                                <TimelineCard event={event} index={index} />
                                            </div>
                                        ) : (
                                            <span className="inline-block mt-4 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                                {dateLabel}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile layout */}
                                <div className="md:hidden ml-12 flex-1">
                                    <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                                        {dateLabel}
                                    </span>
                                    <div className="mt-1">
                                        <TimelineCard event={event} index={index} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
