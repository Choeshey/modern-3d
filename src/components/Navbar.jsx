import React, { useState } from 'react';
import { navItems } from '../constants/index.js';
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-[var(--surface)]/80 backdrop-blur-sm shadow-sm border-b border-[var(--text-muted)]/10">
            <div className="px-4 sm:px-6 lg:px-2 mx-auto max-w-7xl ">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="./images/Frame2.svg"
                            alt="Logo"
                            className="h-14 w-14"
                        />
                        <span className="ml-3 text-xl font-bold text-[var(--text)]">Kunchoe</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block space-x-1">
                        <ul className="flex space-x-4 items-center">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-[var(--text-muted)] hover:!text-white px-5 py-4 font-medium transition-all duration-300 hover:bg-[var(--primary)] rounded-md "
                                    >
                                        {item.name}
                                    </a>
                                </li>

                            ))}
                        </ul>
                    </nav>
                    <div className="hidden md:flex items-center ml-4">
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[var(--text-muted)] hover:!text-[var(--accent)] p-2 focus:outline-none ml-2 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-[var(--surface)] border-t border-[var(--text-muted)]/20">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--text-muted)] hover:bg-[var(--background)] hover:text-[var(--accent)]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;