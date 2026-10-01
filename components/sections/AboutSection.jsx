import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import LanyardCanvas from './LanyardCanvas'; 

export default function AboutSection() {
    const { isDark } = useTheme();
    const skills = [
        {
        title: "SQL",
        level: "Database",
        color: "#7FFFD4", // Mint/Aquamarine
        desc: "Optimasi database dan manajemen data penjualan. Mampu dalam Complex Querying (CTE, Join) untuk penarikan insight yang presisi."
    },
    {
        title: "VSCODE",
        level: "Development",
        color: "#40E0D0", // Turquoise
        desc: "Environment utama pengembangan web (Blade, HTML, CSS) dan integrasi library 3D (Three.js)."
    },
    {
        title: "TABLEAU",
        level: "Visualization",
        color: "#00FFFF", // Cyan
        desc: "Transformasi raw data menjadi Interactive Dashboards. Fokus pada storytelling data untuk mendukung keputusan bisnis yang strategis."
    },
    {
        title: "POWER BI",
        level: "Visualization",
        color: "#00BFFF", // Deep Sky Blue
        desc: "Membangun dashboard keuangan interaktif untuk 116 pelanggan dengan data modeling, Power Query, dan DAX (revenue bulanan, outstanding receivables, rasio pelunasan 93.1%)."
    },
    {
        title: "LOOKER STUDIO",
        level: "Visualization",
        color: "#4169E1", // Royal Blue
        desc: "Visualisasi data real-time berbasis cloud. Mengintegrasikan berbagai sumber data Google untuk monitoring KPI secara seamless dan interaktif."
    },
    {
        title: "EXCEL",
        level: "Data Analysis",
        color: "#9370DB", // Medium Purple
        desc: "Advanced Excel untuk data cleaning, Pivot Tables, Power Query, dan audit data. Mengelola 3.100+ data kepatuhan APD tenaga medis serta monitoring pembayaran 116 pelanggan WiFi (rekap pendapatan & piutang)."
    }
    ];

    return (
        <section id="about" className="min-h-screen py-24 lg:py-40 px-6 relative bg-transparent relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7FFFD4]/5 blur-[120px] rounded-full" />
            
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* --- SISI KIRI: LANYARD INTERAKTIF --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group h-[500px] lg:h-[650px] w-full rounded-[40px] flex items-center justify-center overflow-hidden backdrop-blur-sm cursor-grab active:cursor-grabbing lg:sticky lg:top-20 transition-colors duration-400"
                        style={{ background: isDark ? "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)" : "linear-gradient(to bottom, rgba(124,110,224,0.08), rgba(240,238,255,0.6))", border: "1px solid var(--border)", backgroundColor: isDark ? "transparent" : "#faf9ff" }}
                    >
                        <LanyardCanvas photoUrl="/img/cantik.jpeg" /> 
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                            <p className="text-[#7FFFD4] font-mono text-[16px] tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity animate-pulse text-center">
                                Drag to Rotate ID
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#7FFFD4]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </motion.div>

                    {/* --- SISI KANAN: CONTENT --- */}
                    <div className="flex flex-col space-y-16">
                        
                        {/* 1. ABOUT ME SECTION */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#7FFFD4]"></span>
                                <span className="text-[#7FFFD4] font-mono text-[11px] tracking-[0.5em] uppercase">FIRNANDAAMALIA</span>
                            </div>
                            
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter" style={{ color: "var(--text)" }}>
                                ABOUT <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px #7FFFD4' }}>ME.</span>
                            </h2>

                            <div className="space-y-4 text-lg font-light leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
                                <p>
                                    Saya <span className="font-medium" style={{ color: "var(--text)" }}>Firnanda Amalia</span>, mahasiswi Sistem Informasi yang berfokus pada <span style={{ color: "var(--text)" }}>Data Analysis, UI/UX design,</span> dan <span style={{ color: "var(--text)" }}>Business Intelligence</span> dengan pengalaman dalam pengolahan data, visualisasi interaktif, serta perancangan antarmuka berbasis user-centered design. Terbiasa mengubah data mentah menjadi insight terstruktur dan merancang solusi digital yang meningkatkan usability serta mendukung pengambilan keputusan berbasis data.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2. CORE SKILLS HORIZONTAL SCROLL */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between pr-4">
                                <h3 className="text-[#7FFFD4] font-mono text-sm tracking-[0.3em] uppercase">// Tools</h3>
                                <span className="text-gray-600 text-[10px] font-mono animate-pulse">Scroll →</span>
                            </div>

                            {/* Kontainer Kartu Skill */}
    <div className="flex overflow-x-auto gap-6 pb-4 snap-x no-scrollbar scroll-smooth" id="skill-container">
        {skills.map((skill, index) => (
            <div 
                key={index}
                className="min-w-[280px] md:min-w-[320px] snap-start relative group p-8 rounded-3xl transition-all duration-500"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
                <div className="absolute -left-[1px] top-8 w-[2px] h-12 transition-all duration-500" style={{ backgroundColor: skill.color }}></div>
                
                <div className="flex justify-between items-start mb-6">
                    <h4 className="font-bold text-2xl tracking-tighter" style={{ color: "var(--text)" }}>{skill.title}</h4>
                    <span className="text-[10px] px-2 py-1 rounded font-mono uppercase" style={{ color: skill.color, borderColor: `${skill.color}33` }}>
                        {skill.level}
                    </span>
                </div>
                
                <p className="text-sm leading-relaxed text-justify" style={{ color: "var(--text-muted)" }}>
                    {skill.desc}
                </p>
            </div>
        ))}
    </div>

{/* --- INDIKATOR SCROLL (DI BAWAH DERETAN KARTU) --- */}
<div className="flex items-center gap-6 mt-8 pl-1">
    {/* Visual Line & Arrow Decor */}
    <div className="flex items-center gap-2">
        <div className="w-12 h-[2px] bg-[#7FFFD4] shadow-[0_0_10px_#7FFFD4]"></div>
        <motion.div 
            animate={{ x: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[#7FFFD4]"
        >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
            </svg>
        </motion.div>
    </div>
    
    {/* Teks Instruksi Aquamarine */}
    <div className="flex flex-col">
        <span className="text-[10px] font-mono text-[#7FFFD4] uppercase tracking-[0.3em] font-bold opacity-80">
            Navigation Protocol
        </span>
        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.15em] mt-1">
            Swipe or use <span className="text-[#7FFFD4]/60 italic">shift + scroll</span> to explore tools
        </span>
    </div>
</div>

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
