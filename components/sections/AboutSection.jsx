"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import LanyardCanvas from "./LanyardCanvas";

export default function AboutSection() {
    const { isDark } = useTheme();
    const { language } = useLanguage();

    const isEnglish = language === "en";

    const skills = [
        {
            title: "SQL",
            level: "Database",
            color: "#7FFFD4",
            desc: isEnglish
                ? "Database optimization and sales data management. Skilled in complex querying (CTE, Join) for precise insight extraction."
                : "Optimasi database dan manajemen data penjualan. Mampu dalam Complex Querying (CTE, Join) untuk penarikan insight yang presisi.",
        },
        {
            title: "VSCODE",
            level: "Development",
            color: "#40E0D0",
            desc: isEnglish
                ? "Main development environment for web development (Blade, HTML, CSS) and 3D library integration (Three.js)."
                : "Environment utama pengembangan web (Blade, HTML, CSS) dan integrasi library 3D (Three.js).",
        },
        {
            title: "TABLEAU",
            level: "Visualization",
            color: "#00FFFF",
            desc: isEnglish
                ? "Transforms raw data into interactive dashboards. Focused on data storytelling to support strategic business decisions."
                : "Transformasi raw data menjadi Interactive Dashboards. Fokus pada storytelling data untuk mendukung keputusan bisnis yang strategis.",
        },
        {
            title: "POWER BI",
            level: "Visualization",
            color: "#00BFFF",
            desc: isEnglish
                ? "Built an interactive financial dashboard for 116 customers using data modeling, Power Query, and DAX, covering monthly revenue, outstanding receivables, and a 93.1% repayment ratio."
                : "Membangun dashboard keuangan interaktif untuk 116 pelanggan dengan data modeling, Power Query, dan DAX (revenue bulanan, outstanding receivables, rasio pelunasan 93.1%).",
        },
        {
            title: "LOOKER STUDIO",
            level: "Visualization",
            color: "#4169E1",
            desc: isEnglish
                ? "Cloud-based real-time data visualization. Integrates multiple Google data sources for seamless and interactive KPI monitoring."
                : "Visualisasi data real-time berbasis cloud. Mengintegrasikan berbagai sumber data Google untuk monitoring KPI secara seamless dan interaktif.",
        },
        {
            title: "EXCEL",
            level: "Data Analysis",
            color: "#9370DB",
            desc: isEnglish
                ? "Advanced Excel for data cleaning, Pivot Tables, Power Query, and data auditing. Managed 3,100+ medical PPE compliance records and monitored payments for 116 WiFi customers, including revenue and receivables tracking."
                : "Advanced Excel untuk data cleaning, Pivot Tables, Power Query, dan audit data. Mengelola 3.100+ data kepatuhan APD tenaga medis serta monitoring pembayaran 116 pelanggan WiFi (rekap pendapatan & piutang).",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen py-24 lg:py-40 px-6 relative overflow-hidden"
        >
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7FFFD4]/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* LANYARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group h-[500px] lg:h-[650px] w-full rounded-[40px] flex items-center justify-center overflow-hidden backdrop-blur-sm cursor-grab active:cursor-grabbing lg:sticky lg:top-20 transition-colors duration-400"
                        style={{
                            background: isDark
                                ? "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)"
                                : "linear-gradient(to bottom, rgba(124,110,224,0.08), rgba(240,238,255,0.6))",
                            border: "1px solid var(--border)",
                            backgroundColor: isDark ? "transparent" : "#faf9ff",
                        }}
                    >
                        <LanyardCanvas photoUrl="/img/cantik.jpeg" />

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                            <p className="text-[#7FFFD4] font-mono text-[16px] tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity animate-pulse text-center">
                                {isEnglish
                                    ? "Drag to Rotate ID"
                                    : "Seret untuk Memutar ID"}
                            </p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#7FFFD4]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </motion.div>

                    {/* CONTENT */}
                    <div className="flex flex-col space-y-16">

                        {/* ABOUT ME */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#7FFFD4]" />
                                <span className="text-[#7FFFD4] font-mono text-[11px] tracking-[0.5em] uppercase">
                                    FIRNANDAAMALIA
                                </span>
                            </div>

                            <h2
                                className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter"
                                style={{ color: "var(--text)" }}
                            >
                                {isEnglish ? "ABOUT" : "TENTANG"} <br />
                                <span
                                    className="text-transparent"
                                    style={{
                                        WebkitTextStroke: "1px #7FFFD4",
                                    }}
                                >
                                    {isEnglish ? "ME." : "SAYA."}
                                </span>
                            </h2>

                            <div
                                className="space-y-4 text-lg font-light leading-relaxed max-w-xl"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {isEnglish ? (
    <p>
        <span
            className="font-medium"
            style={{ color: "var(--text)" }}
        >
            Firnanda Amalia
        </span>
        {" "}is an Information Systems student at Universitas Esa Unggul with an interest in Data Analysis and Business Intelligence. She completed an internship at PT Gaivo Solusi Manajemen, where she worked on website analytics and digital marketing. She also works as a Power BI Bootcamp Mentor and has experience in data entry and audio quality checking. Through campus organizations and event committees, she has developed teamwork and coordination skills. Her technical skills include SQL, Excel, Power BI, Tableau, Looker Studio, Google Search Console, and Google Analytics 4. She continues to develop her skills in data analysis and business intelligence.
    </p>
) : (
    <p>
        <span
            className="font-medium"
            style={{ color: "var(--text)" }}
        >
            Firnanda Amalia
        </span>
        {" "}adalah mahasiswi Sistem Informasi di Universitas Esa Unggul yang memiliki ketertarikan pada Data Analysis dan Business Intelligence. Ia telah menyelesaikan internship di PT Gaivo Solusi Manajemen, dengan pengalaman dalam website analytics dan digital marketing. Ia juga menjadi Power BI Bootcamp Mentor serta memiliki pengalaman dalam data entry dan audio quality checking. Melalui organisasi dan kepanitiaan kampus, ia mengembangkan kemampuan teamwork dan coordination. Keterampilan teknisnya meliputi SQL, Excel, Power BI, Tableau, Looker Studio, Google Search Console, dan Google Analytics 4. Ia terus mengembangkan kemampuan dalam data analysis dan business intelligence.
    </p>
)}
                            </div>
                        </motion.div>

                        {/* TOOLS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between pr-4">
                                <h3 className="text-[#7FFFD4] font-mono text-sm tracking-[0.3em] uppercase">
                                    // {isEnglish ? "Tools" : "Tools"}
                                </h3>

                                <span className="text-gray-600 text-[10px] font-mono animate-pulse">
                                    {isEnglish ? "Scroll →" : "Geser →"}
                                </span>
                            </div>

                            <div
                                className="flex overflow-x-auto gap-6 pb-4 snap-x no-scrollbar scroll-smooth"
                                id="skill-container"
                            >
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[280px] md:min-w-[320px] snap-start relative group p-8 rounded-3xl transition-all duration-500"
                                        style={{
                                            backgroundColor: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                        }}
                                    >
                                        <div
                                            className="absolute -left-[1px] top-8 w-[2px] h-12 transition-all duration-500"
                                            style={{
                                                backgroundColor: skill.color,
                                            }}
                                        />

                                        <div className="flex justify-between items-start mb-6">
                                            <h4
                                                className="font-bold text-2xl tracking-tighter"
                                                style={{ color: "var(--text)" }}
                                            >
                                                {skill.title}
                                            </h4>

                                            <span
                                                className="text-[10px] px-2 py-1 rounded font-mono uppercase"
                                                style={{
                                                    color: skill.color,
                                                    borderColor: `${skill.color}33`,
                                                }}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>

                                        <p
                                            className="text-sm leading-relaxed text-justify"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {skill.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* SCROLL INDICATOR */}
                            <div className="flex items-center gap-6 mt-8 pl-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-[2px] bg-[#7FFFD4] shadow-[0_0_10px_#7FFFD4]" />

                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                        }}
                                        className="text-[#7FFFD4]"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </motion.div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-[#7FFFD4] uppercase tracking-[0.3em] font-bold opacity-80">
                                        {isEnglish
                                            ? "Navigation Protocol"
                                            : "Protokol Navigasi"}
                                    </span>

                                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.15em] mt-1">
                                        {isEnglish ? (
                                            <>
                                                Swipe or use{" "}
                                                <span className="text-[#7FFFD4]/60 italic">
                                                    shift + scroll
                                                </span>{" "}
                                                to explore tools
                                            </>
                                        ) : (
                                            <>
                                                Geser atau gunakan{" "}
                                                <span className="text-[#7FFFD4]/60 italic">
                                                    shift + scroll
                                                </span>{" "}
                                                untuk melihat tools
                                            </>
                                        )}
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


