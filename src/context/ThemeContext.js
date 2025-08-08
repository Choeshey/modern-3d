import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const isDark = localStorage.getItem('darkMode') === 'true' ||
            (!('darkMode' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <div className={darkMode ? 'dark' : ''}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);