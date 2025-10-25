'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Acasă' },
        { href: '/generate', label: 'Generator Hilbert' },
        { href: '/about', label: 'Despre Aplicație' },

    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-2 group"
                >
                    <div className="w-7 h-7 bg-blue-500 rounded-md rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                    <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Fractali Hilbert
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    {navItems.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative px-1 transition-colors duration-300 ${active
                                        ? 'text-blue-400 font-semibold'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {label}
                                {active && (
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 rounded"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none transition-colors"
                    aria-label="Toggle mobile menu"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col px-4 py-3 space-y-2 animate-slide-down">
                    {navItems.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-2 px-2 rounded-md transition-colors ${active
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}