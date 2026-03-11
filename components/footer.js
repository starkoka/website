'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import profile from '../src/data/profile.json';

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
                                {profile.bio}
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
                            <div className="flex gap-3">
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
                                        {s.icon === 'twitter' && (
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                            </svg>
                                        )}
                                        {s.icon === 'github' && (
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                                            </svg>
                                        )}
                                        {s.icon === 'atcoder' && (
                                            <span className="text-sm font-bold">AC</span>
                                        )}
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
