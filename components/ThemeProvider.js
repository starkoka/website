'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
            setTheme(saved);
        } else {
            // Default to system preference on first visit
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#140B0C' : '#F6F2F1');
    }, [theme]);

    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
