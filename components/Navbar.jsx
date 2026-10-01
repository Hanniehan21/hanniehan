import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { isDark, setIsDark } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const menuItems = [
    {
        name: language === 'id' ? 'HOME' : 'HOME',
        id: 'home'
    },
    {
        name: language === 'id' ? 'TENTANG' : 'ABOUT',
        id: 'about'
    },
    {
        name: language === 'id' ? 'PROYEK' : 'PROJECTS',
        id: 'projects'
    },
    {
        name: language === 'id' ? 'ORGANISASI' : 'ORGANIZATION',
        id: 'organization'
    },
    {
        name: language === 'id' ? 'SERTIFIKAT' : 'CERTIFICATE',
        id: 'certificates'
    },
];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        menuItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const accentColor = isDark ? '#7FFFD4' : '#0d9488';

    const ThemeToggleIcon = ({ size = 16 }) => isDark ? (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    );

    return (
        <>
            {/* DESKTOP NAVBAR */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="fixed top-10 inset-x-0 mx-auto z-[100] hidden md:flex justify-center w-max"
            >
                <div
                    className="flex items-center gap-4 px-8 py-4 backdrop-blur-3xl rounded-full shadow-[0_0_60px_rgba(0,0,0,0.5)] transition-all duration-400"
                    style={{
                        backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(240,238,255,0.92)',
                        border: '1px solid ' + (isDark ? 'rgba(127,255,212,0.3)' : 'rgba(124,110,224,0.35)')
                    }}
                >
                    {/* Menu Items */}
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="px-5 py-2 text-[15px] font-black font-mono tracking-[0.4em] transition-all duration-500 relative group uppercase"
                            style={{ color: activeSection === item.id ? accentColor : '' }}
                        >
                            <span
                                className="relative z-10 transition-colors duration-300"
                                style={{ color: activeSection === item.id ? accentColor : isDark ? '#9ca3af' : '#475569' }}
                            >
                                {item.name}
                            </span>
                            {activeSection === item.id && (
                                <motion.span
                                    layoutId="activeGlow"
                                    className="absolute inset-0 rounded-full -z-10"
                                    style={{ backgroundColor: accentColor + '22', boxShadow: '0 0 20px ' + accentColor + '44' }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span
                                className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300"
                                style={{
                                    backgroundColor: accentColor,
                                    boxShadow: '0 0 12px ' + accentColor,
                                    width: activeSection === item.id ? '100%' : '0%'
                                }}
                            />
                        </button>
                    ))}

                    {/* Divider */}
                    <div
                        className="w-[1px] h-6 mx-1"
                        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                    />

                    {/* Language Toggle */}
                    <div
                        className="flex items-center gap-1 px-2 h-10 rounded-full"
                        style={{
                            border: '1px solid ' + accentColor + '55',
                            backgroundColor: accentColor + '10'
                        }}
                    >
                        <button
                            onClick={() => setLanguage('id')}
                            className="px-2 py-1 text-[10px] font-mono font-bold rounded-full transition-all duration-200"
                            style={{
                                backgroundColor: language === 'id' ? accentColor + '30' : 'transparent',
                                color: language === 'id' ? accentColor : (isDark ? '#9ca3af' : '#475569')
                            }}
                        >
                            ID
                        </button>

                        <span
                            className="text-[9px] font-mono opacity-40"
                        >
                            /
                        </span>

                        <button
                            onClick={() => setLanguage('en')}
                            className="px-2 py-1 text-[10px] font-mono font-bold rounded-full transition-all duration-200"
                            style={{
                                backgroundColor: language === 'en' ? accentColor + '30' : 'transparent',
                                color: language === 'en' ? accentColor : (isDark ? '#9ca3af' : '#475569')
                            }}
                        >
                            EN
                        </button>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                            border: '1px solid ' + accentColor + '55',
                            backgroundColor: accentColor + '15',
                            color: accentColor
                        }}
                        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <ThemeToggleIcon size={16} />
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE HAMBURGER */}
            <div className="fixed top-6 right-6 z-[110] md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full shadow-[0_0_20px_rgba(127,255,212,0.4)] transition-transform active:scale-90"
                    style={{ backgroundColor: accentColor }}
                >
                    <motion.span animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-black" />
                    <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-black" />
                    <motion.span animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-black" />
                </button>
            </div>

            {/* MOBILE SIDEBAR */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[70%] z-[110] backdrop-blur-3xl md:hidden flex flex-col p-8 shadow-[-20px_0_40px_rgba(0,0,0,0.4)] transition-colors duration-400"
                            style={{
                                backgroundColor: isDark ? 'rgba(5,5,5,0.97)' : 'rgba(240,238,255,0.97)',
                                borderLeft: '1px solid ' + (isDark ? 'rgba(127,255,212,0.1)' : 'rgba(124,110,224,0.2)')
                            }}
                        >
                            <div className="mt-20 flex flex-col gap-8">
                                {menuItems.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-left text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-2"
                                        style={{ color: activeSection === item.id ? accentColor : isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}
                                    >
                                        <span className="relative inline-block">
                                            {item.name}
                                            <AnimatePresence>
                                                {activeSection === item.id && (
                                                    <motion.span
                                                        layoutId="mobileActiveIndicator"
                                                        initial={{ opacity: 0, scaleX: 0 }}
                                                        animate={{ opacity: 1, scaleX: 1 }}
                                                        exit={{ opacity: 0, scaleX: 0 }}
                                                        className="absolute -bottom-1 left-0 w-full h-[2px] origin-left"
                                                        style={{ backgroundColor: accentColor, boxShadow: '0 0 10px ' + accentColor }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </span>
                                    </motion.button>
                                ))}
                            </div>

                            <div
                                className="mt-auto pt-6 flex items-center justify-between"
                                style={{ borderTop: '1px solid ' + (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)') }}
                            >
                                <p
                                    className="text-[10px] font-mono tracking-[0.3em]"
                                    style={{ color: isDark ? '#4b5563' : '#94a3b8' }}
                                >
                                    FIRNANDA AMALIA
                                </p>
                                <div className="flex items-center gap-2">
                                    {/* Language Toggle */}
                                    <div
                                        className="flex items-center gap-1 px-2 h-9 rounded-full"
                                        style={{
                                            border: '1px solid ' + accentColor + '55',
                                            backgroundColor: accentColor + '10'
                                        }}
                                    >
                                        <button
                                            onClick={() => setLanguage('id')}
                                            className="px-1.5 py-1 text-[9px] font-mono font-bold rounded-full transition-all duration-200"
                                            style={{
                                                backgroundColor: language === 'id' ? accentColor + '30' : 'transparent',
                                                color: language === 'id' ? accentColor : (isDark ? '#9ca3af' : '#475569')
                                            }}
                                        >
                                            ID
                                        </button>

                                        <span className="text-[8px] font-mono opacity-40">/</span>

                                        <button
                                            onClick={() => setLanguage('en')}
                                            className="px-1.5 py-1 text-[9px] font-mono font-bold rounded-full transition-all duration-200"
                                            style={{
                                                backgroundColor: language === 'en' ? accentColor + '30' : 'transparent',
                                                color: language === 'en' ? accentColor : (isDark ? '#9ca3af' : '#475569')
                                            }}
                                        >
                                            EN
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setIsDark(!isDark)}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{
                                        border: '1px solid ' + accentColor + '55',
                                        backgroundColor: accentColor + '15',
                                        color: accentColor
                                    }}
                                >
                                        <ThemeToggleIcon size={15} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}



