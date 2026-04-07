'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import profile from '../src/data/profile.json';
import SocialIcon from './SocialIcon';
import TextWithBreaks from './TextWithBreaks';

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handler = () => setShowTop(window.scrollY > 400);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Floating scroll-to-top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                style={{
                    background: 'var(--color-accent)',
                    color: '#fff',
                }}
                aria-label="先頭に戻る"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>

            {/* Footer */}
            <footer
                className="mt-auto"
                style={{
                    background: 'var(--color-bg-secondary)',
                    borderTop: '1px solid var(--color-border)',
                }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand */}
                        <div>
                            <Link href="/" className="text-lg font-bold">
                                <span className="gradient-text">kokastar</span>
                                <span style={{ color: 'var(--color-text-muted)' }}>.dev</span>
                            </Link>
                            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                <TextWithBreaks text={profile.bio} />
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>
                                Pages
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    { href: '/', label: 'Top' },
                                    { href: '/about', label: 'About' },
                                    { href: '/works', label: 'Works' },
                                    { href: '/timeline', label: 'Timeline' },
                                    { href: '/contact', label: 'Contact' },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm transition-colors duration-200 hover:underline"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>
                                Social
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {profile.socials.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                                        style={{
                                            background: 'var(--color-bg-card)',
                                            color: 'var(--color-text-secondary)',
                                        }}
                                        aria-label={s.name}
                                    >
                                        <SocialIcon icon={s.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                        <p className="text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            &copy; {new Date().getFullYear()} kokastar. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
