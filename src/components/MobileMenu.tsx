'use client';

import { useState } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
                    <div className="px-4 py-2 space-y-1">
                        <a
                            href="#about"
                            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#facilities"
                            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Facilities
                        </a>
                        <a
                            href="#location"
                            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Location
                        </a>
                        <a
                            href="#gallery"
                            className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Gallery
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
} 