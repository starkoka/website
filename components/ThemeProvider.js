'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'system',
    setTheme: () => { },
    resolvedTheme: 'light',
});

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('system');
    const [resolvedTheme, setResolvedTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'system') {
            root.removeAttribute('data-theme');
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            setResolvedTheme(mq.matches ? 'dark' : 'light');

            const handler = (e) => setResolvedTheme(e.matches ? 'dark' : 'light');
            mq.addEventListener('change', handler);
            return () => mq.removeEventListener('change', handler);
        } else {
            root.setAttribute('data-theme', theme);
            setResolvedTheme(theme);
        }
    }, [theme]);

    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
