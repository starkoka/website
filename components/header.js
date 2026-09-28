'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import profile from '../src/data/profile.json';

const navLinks = [
    { href: '/', label: 'Top' },
    { href: '/works', label: 'Works' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/contact', label: 'Contact' },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggle}
            className="p-2 min-w-11 min-h-11 rounded-lg transition-colors duration-200 hover:bg-surface-secondary"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label={theme === 'light' ? 'ダークモードに切替' : 'ライトモードに切替'}
            title={theme === 'light' ? 'ダークモードに切替' : 'ライトモードに切替'}
        >
            {theme === 'light' && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )}
            {theme === 'dark' && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}

        </button>
    );
}

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // The mobile navigation is an inline disclosure, not a modal.
    useEffect(() => {
        if (!isOpen) return;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
                document.getElementById('menu-toggle')?.focus();
            }
        };
        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [isOpen]);

    return (
        <header
            className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
            style={{
                background: 'var(--color-bg-card)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--color-border)',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
                        <span className="brand-mark">{profile.displayName}</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>.dev</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav aria-label="メインナビゲーション" className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={pathname === link.href ? 'page' : undefined}
                                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:underline"
                                style={{
                                    color: pathname === link.href ? 'var(--color-link)' : 'var(--color-text-secondary)',
                                    background: pathname === link.href ? 'var(--color-selection)' : 'transparent',
                                    fontWeight: pathname === link.href ? 700 : 500,
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="ml-2 border-l pl-2" style={{ borderColor: 'var(--color-border)' }}>
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-2 md:hidden shrink-0">
                        <ThemeToggle />
                        <button
                            id="menu-toggle"
                            className="relative z-[60] p-2 min-w-11 min-h-11 rounded-lg transition-colors duration-200 hover:bg-surface-secondary"
                            onClick={() => setOpen(!isOpen)}
                            aria-label="メニュー"
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-center gap-1.5">
                                <span
                                    className={`block w-6 h-0.5 rounded-full transition-transform duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[4px]' : ''
                                        }`}
                                    style={{ background: 'var(--color-text-primary)' }}
                                />
                                <span
                                    className={`block w-6 h-0.5 rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0 scale-0' : ''
                                        }`}
                                    style={{ background: 'var(--color-text-primary)' }}
                                />
                                <span
                                    className={`block w-6 h-0.5 rounded-full transition-transform duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''
                                        }`}
                                    style={{ background: 'var(--color-text-primary)' }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-navigation"
                hidden={!isOpen}
                className="md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
                style={{
                    background: 'var(--color-bg-card)',
                    borderTop: isOpen ? '1px solid var(--color-border)' : 'none',
                }}
            >
                <nav aria-label="モバイルナビゲーション" className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={pathname === link.href ? 'page' : undefined}
                            className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:underline"
                            style={{
                                color: pathname === link.href ? 'var(--color-link)' : 'var(--color-text-secondary)',
                                background: pathname === link.href ? 'var(--color-selection)' : 'transparent',
                                fontWeight: pathname === link.href ? 700 : 500,
                            }}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
