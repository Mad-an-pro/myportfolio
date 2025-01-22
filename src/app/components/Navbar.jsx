"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Navlink from './Navlink';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects", 
        path: "#project",
    },
    {
        title: "Skills",
        path: "#skill",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 shadow-lg">
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 md:py-6">
                    {/* Logo */}
                    <Link href={"/"} className="flex items-center">
                        <Image
                            src="/image/mad_logo.png"
                            alt="mad image"
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                    </Link>

                    {/* Hamburger Menu Icon */}
                    <button
                        className="block md:hidden text-[#ADB7BE] focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Navigation Links - Desktop View */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index} className="text-center">
                                <Navlink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu */}
                    <ul
                        className={`${
                            menuOpen ? "block" : "hidden"
                        } absolute top-20 left-0 w-full bg-[#121212] bg-opacity-95 shadow-lg md:hidden`}
                    >
                        {navLinks.map((link, index) => (
                            <li key={index} className="text-center py-3 border-b border-[#2D2D2D]">
                                <Navlink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Spacer to add distance below the navbar */}
            <div className="h-5 md:h-14"></div>
        </>
    );
};

export default Navbar;
