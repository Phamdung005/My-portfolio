import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const navLinks = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md border-b border-blue-600/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo - Sử dụng tên thật của bạn */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#135bec] rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <span className="text-white font-extrabold text-xl">D</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block dark:text-white">
                        Dũng.<span className="text-[#135bec]">dev</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="hover:text-[#135bec] transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right Side: Socials + Theme Toggle */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-4 pr-4 border-r border-slate-200 dark:border-slate-800">
                        <a href="https://github.com/Phamdung005" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#135bec] transition-colors">
                            <FaGithub size={20} />
                        </a>
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={handleThemeSwitch}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                        {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer text-slate-600 dark:text-slate-300">
                        {nav ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${nav ? 'translate-x-0' : 'translate-x-full'} fixed top-20 left-0 w-full h-screen bg-white dark:bg-[#101622] transition-transform duration-300 ease-in-out md:hidden border-t border-slate-100 dark:border-slate-800`}>
                <ul className="flex flex-col p-8 gap-6">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                onClick={() => setNav(false)}
                                href={item.link}
                                className="text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-[#135bec]"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;