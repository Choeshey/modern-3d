import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    // Initialize state from localStorage or system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = window.localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-200"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;