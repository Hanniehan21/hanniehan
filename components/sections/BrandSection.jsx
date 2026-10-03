"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const brandWords = [
    {
        id: "01",
        word: "METICULOUS",
        labelId: "Teliti",
        descriptionId:
            "Memperhatikan detail dan membiasakan pengecekan ulang, terutama saat menangani data dan pekerjaan quality control.",
        descriptionEn:
            "Pay attention to details and consistently double-check work, especially when handling data and quality control tasks.",
    },
    {
        id: "02",
        word: "ANALYTICAL",
        labelId: "Analitis",
        descriptionId:
            "Senang memahami informasi sebelum mengambil keputusan dan menggunakan tools seperti SQL, Excel, Power BI, Tableau, dan Looker Studio untuk memahami data.",
        descriptionEn:
            "Enjoy understanding information before making decisions and use tools such as SQL, Excel, Power BI, Tableau, and Looker Studio to work with data.",
    },
    {
        id: "03",
        word: "ORGANIZED",
        labelId: "Terorganisir",
        descriptionId:
            "Terbiasa menjaga pekerjaan dan tugas tetap terstruktur melalui pengalaman di organisasi, kepanitiaan, dan berbagai aktivitas.",
        descriptionEn:
            "Keep tasks and work structured through experience in organizations, event committees, and different activities.",
    },
    {
        id: "04",
        word: "SUPPORTIVE",
        labelId: "Suportif",
        descriptionId:
            "Senang membantu orang lain memahami sesuatu dan menyelesaikan tugas, termasuk saat mendampingi peserta dalam Power BI Bootcamp.",
        descriptionEn:
            "Enjoy helping others understand concepts and complete tasks, including supporting participants in the Power BI Bootcamp.",
    },
    {
        id: "05",
        word: "ADAPTABLE",
        labelId: "Adaptif",
        descriptionId:
            "Mampu menyesuaikan diri ketika menghadapi tools dan jenis pekerjaan baru, mulai dari data analysis, UI/UX, web development, digital marketing, hingga data visualization.",
        descriptionEn:
            "Adapt to new tools and different types of work, including data analysis, UI/UX, web development, digital marketing, and data visualization.",
    },
];

export default function BrandSection() {
    const { language } = useLanguage();
    const isEnglish = language === "en";

    return (
        <section
            id="brand"
            className="py-28 px-6 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-5">
                        <span className="text-[#7FFFD4] font-mono text-lg font-bold">
                            //
                        </span>

                        <span className="text-[#7FFFD4] font-mono text-xs uppercase tracking-[0.5em]">
                            Personal Brand
                        </span>
                    </div>

                    <h2
                        className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none"
                        style={{ color: "var(--text)" }}
                    >
                        {isEnglish ? "What I" : "Yang Saya"}{" "}
                        <span
                            className="text-transparent"
                            style={{
                                WebkitTextStroke: "1px #7FFFD4",
                            }}
                        >
                            {isEnglish ? "Bring." : "Bawa."}
                        </span>
                    </h2>

                    <p
                        className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {isEnglish
                            ? "Five qualities that shape how I approach work, collaboration, and learning."
                            : "Lima kualitas yang membentuk cara saya bekerja, berkolaborasi, dan belajar."}
                    </p>
                </motion.div>

                {/* BRAND CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 max-w-6xl mx-auto">
                    {brandWords.map((item, index) => {
                        let placement = "";

                        if (index === 3) {
                            placement = "md:col-start-2";
                        }

                        if (index === 4) {
                            placement = "md:col-start-4";
                        }

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -6 }}
                                className={`md:col-span-2 ${placement} group relative min-h-[280px] rounded-[28px] p-7 flex flex-col transition-all duration-500`}
                                style={{
                                    backgroundColor: "var(--bg-card)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="font-mono text-[10px] tracking-[0.3em]"
                                        style={{
                                            color: "var(--text-subtle)",
                                        }}
                                    >
                                        {item.id}
                                    </span>

                                    <span className="w-2 h-2 rounded-full bg-[#7FFFD4] opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_14px_#7FFFD4]" />
                                </div>

                                <div className="mt-10">
                                    <p
                                        className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {isEnglish
                                            ? "PERSONAL TRAIT"
                                            : item.labelId}
                                    </p>

                                    <h3
                                        className="text-3xl md:text-4xl font-black italic uppercase tracking-tight leading-none mb-6"
                                        style={{ color: "var(--text)" }}
                                    >
                                        {item.word}
                                    </h3>

                                    <p
                                        className="text-sm leading-7"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {isEnglish
                                            ? item.descriptionEn
                                            : item.descriptionId}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

