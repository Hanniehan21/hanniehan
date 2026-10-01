import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const certificates = [
    {
        id: "01",
        title: "Sertifikat Internship Humanis",
        issuer: "Universitas Esa Unggul",
        date: "Juni - November 2024",
        image: "/doc/SERTIFIKAT_INTERNSHIP_HUMANIS.png",
        link: "https://drive.google.com/file/d/1Etu6LJEYYkvSIbUDG_WIat21geeRAFo9/view?usp=sharing",
        tags: ["Leadership", "Program Coordination", "Data Documentation"],
    },
    {
        id: "02",
        title: "Sertifikat Panitia Code Summit",
        issuer: "Universitas Esa Unggul",
        date: "9 Juli 2025",
        image: "/doc/Panitia_Code_Summit.png",
        link: "https://drive.google.com/file/d/1hHYr3tzwKTxARACMm7jtd3LIyYHumsgK/view?usp=sharing",
        tags: ["Leadership", "Critical Thinking", "Team Collaboration"],
    },
    {
        id: "03",
        title: "Sertifikat Bootcamp Data Analyst Pakai Excel, SQL, & Persiapan Kerja",
        issuer: "Karirnex by PT Ebiz Karisma Internasional",
        date: "25, 27, & 29 November 2025",
        image: "/doc/sertifk.png",
        link: "https://drive.google.com/file/d/1R8ohVGVm5138ndlixv0gEbQRlIrPNC-G/view?usp=sharing",
        tags: ["Data Analysis", "SQL Querying", "Data Preparation", "Excel Analytics", "Business Reporting"],
    },
    {
        id: "04",
        title: "Sertifikat Panitia Leadership Training Program",
        issuer: "Universitas Esa Unggul",
        date: "14 - 15 November 2025",
        image: "/doc/LTP.png",
        link: "https://drive.google.com/file/d/1Mdw6vIYV4qs90Q3fDcVxjbC301G0I9Ag/view?usp=sharing",
        tags: ["Event Management", "Team Coordination", "Operational Planning", "Leadership"],
    },
    {
        id: "05",
        title: "Sertifikat Bootcamp Data Analyst dengan SQL, Python, Google Looker Studio",
        issuer: "Karirnex by PT Ebiz Karisma Internasional",
        date: "19, 21, & 23 Januari 2026",
        image: "/doc/sertif.png",
        link: "https://drive.google.com/file/d/1_Aa6-bFERojOh4edYSB-wSAnUTUSdZpd/view?usp=sharing",
        tags: ["SQL", "Python for Data Analysis", "Data Visualization", "Google Looker Studio", "Dashboard Development"],
    },
];

export default function CertificateSection() {
    const { isDark } = useTheme();
    return (
        <section id="certificates" className="py-32 px-6 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7FFFD4]/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="space-y-4">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3">
                            <span className="h-[1px] w-12 bg-[#7FFFD4]"></span>
                            <p className="text-[#7FFFD4] font-mono text-[10px] tracking-[0.6em] uppercase">// Archive</p>
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none" style={{ color: "var(--text)" }}>
                            Certificate<span className="text-transparent" style={{ WebkitTextStroke: '1px #7FFFD4' }}>.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 font-mono text-[11px] max-w-[280px] leading-relaxed uppercase tracking-wider italic border-l border-white/10 pl-6">
                        "A collection of verified skills and academic milestones."
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-[35px] overflow-hidden flex flex-col h-full transition-colors duration-400" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/11] m-2 rounded-[28px] overflow-hidden">
                                <img src={cert.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={cert.title} />
                                <div className="absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono transition-colors duration-400" style={{ backgroundColor: isDark ? "rgba(0,0,0,0.6)" : "rgba(240,244,248,0.85)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                                    {cert.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4]"></span>
                                    <p className="text-[#7FFFD4] font-mono text-[9px] uppercase tracking-widest">{cert.issuer}</p>
                                </div>
                                <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: "var(--text)" }}>{cert.title}</h3>

                                {/* TAGS BALIK LAGI DI SINI BRAY */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {cert.tags && cert.tags.map(tag => (
                                        <span key={tag} className="text-[8px] font-mono px-2 py-0.5 rounded-md lowercase" style={{ color: "var(--text-subtle)", border: "1px solid var(--border)" }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Section - Dibikin mepet bawah */}
                                <div className="mt-auto pt-6 relative z-50" style={{ borderTop: "1px solid var(--border)" }}>
                                    <a 
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[10px] font-mono transition-all cursor-pointer relative z-[100] px-4 py-2 rounded-full" style={{ color: "var(--accent)", backgroundColor: "var(--accent-glow)", border: "1px solid var(--accent-glow)" }}
                                    >
                                        VALIDATE_DOCUMENT
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M7 7h10v10"/></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
