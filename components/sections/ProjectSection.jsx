import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectSection() {
    const { isDark } = useTheme();
    const { language } = useLanguage();
    const [selectedId, setSelectedId] = useState(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    const getText = (project, key) => {
        const englishKey = `${key}En`;

        return language === "en"
            ? (project[englishKey] ?? project[key])
            : project[key];
    };

    const selectedAchievements = selectedProject
        ? (
            language === "en"
                ? (selectedProject.achievementsEn ?? selectedProject.achievements)
                : selectedProject.achievements
        )
        : [];

    return (
        <section id="projects" className="min-h-screen py-32 px-6 bg-transparent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7FFFD4]/5 blur-[150px] rounded-full -mr-64 -mt-64" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.p className="text-[#7FFFD4] font-mono text-xs tracking-[0.5em] uppercase mb-4">
                        {language === "en" ? "Portfolio Gallery" : "Galeri Portofolio"}
                    </motion.p>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        {language === "en" ? "My" : "Karya"} <span className="text-transparent" style={{ WebkitTextStroke: '1px #7FFFD4' }}>Works.</span>
                    </h2>
                </div>

                {/* Grid Layout - CUMA UNTUK KARTU */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative rounded-[32px] overflow-hidden transition-all duration-500 shadow-2xl cursor-pointer" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
                        >
                            <div className="h-56 w-full overflow-hidden relative">
                                <img src={project.image} alt={getText(project, 'title')} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute top-4 right-4 z-40">
                                    <span className="text-[9px] px-3 py-1 backdrop-blur-md rounded-full font-mono tracking-widest italic" style={{ backgroundColor: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)", color: "var(--accent)", border: "1px solid var(--accent)" + "44" }}>{getText(project, 'date')}</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-5 relative z-10">
                                <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded" style={{ color: "var(--accent)", backgroundColor: "var(--accent-glow)" }}>
                                    {getText(project, 'category')}
                                </span>
                                <h3 className="text-2xl font-bold transition-colors" style={{ color: "var(--text)" }}>{getText(project, 'title')}</h3>
                                <p className="text-sm line-clamp-2 italic font-light" style={{ color: "var(--text-muted)" }}>"{getText(project, 'desc')}"</p>
                                <div className="pt-4 flex justify-end">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:text-black" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- SECTION EXPERIENCE --- */}
<div className="max-w-7xl mx-auto mt-40 px-6"> {/* max-w-7xl biar lebarnya sama persis kyk grid project */}
    <div className="flex items-center gap-4 mb-16">
        <span className="text-[#7FFFD4] font-bold text-3xl tracking-tighter italic">//</span>
        <h2 className="text-4xl font-black text-white uppercase tracking-widest italic">{language === "en" ? "Experience" : "Pengalaman"}</h2>
    </div>

    <div className="space-y-24">
        {/* Puskesmas Babatan Item */}
        <div className="group relative pb-16 transition-all duration-500" style={{ borderBottom: "1px solid var(--border)" }}>
            {/* Header: Title & Date nempel kiri-kanan secara proporsional */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-black transition-colors uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                        Data Entry
                    </h3>
                    <p className="text-[#7FFFD4] font-mono text-sm md:text-base uppercase tracking-[0.3em] opacity-90">
                        MUTU FASYANKES — Tangerang, Indonesia
                    </p>
                </div>
                
                {/* Status & Date di sisi kanan */}
                <div className="flex flex-col md:items-end gap-3">
                    <span className="px-3 py-1 border border-[#7FFFD4]/40 rounded-full text-[#7FFFD4] font-mono text-xs uppercase tracking-widest bg-[#7FFFD4]/5">
                        Freelance
                    </span>
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                        {language === "en" ? "April — December 2025" : "April — Desember 2025"}
                    </span>
                </div>
            </div>
            
            {/* Deskripsi: Dibuat lebih lebar biar seimbang sama judul yang gede */}
            <div className="max-w-5xl"> {/* Lebar deskripsi ditambahin biar gak kopong */}
                <p className="text-base md:text-lg leading-relaxed font-light italic opacity-70 group-hover:opacity-100 transition-all duration-700 pl-8" style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}>
                    {language === "en" ? "Handling 3,100 medical personnel compliance records, I applied a double-checking process before final submission to ensure every entry was accurate. I reviewed data completeness and consistency to meet the validation standards of the Mutufasyankes portal, ensuring smooth reporting without revisions and completing all submissions on time." : "Dalam menangani 3.100 data kepatuhan tenaga medis, saya membiasakan proses pengecekan dua kali sebelum final submission untuk memastikan setiap entri benar-benar akurat. Saya meninjau kembali kelengkapan dan konsistensi data agar sesuai dengan standar validasi portal Mutufasyankes, sehingga proses pelaporan berjalan lancar tanpa revisi dan selalu selesai tepat waktu." }
                </p>
            </div>
        </div>
                  {/* Power BI Bootcamp Mentor Item */}
          <div className="group relative pb-16 transition-all duration-500" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                  <div className="space-y-2">
                      <h3 className="text-4xl md:text-5xl font-black transition-colors uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                          Power BI Bootcamp Mentor
                      </h3>
                      <p className="text-[#7FFFD4] font-mono text-sm md:text-base uppercase tracking-[0.3em] opacity-90">
                          OUSEAN DIGITAL SCHOOL
                      </p>
                  </div>

                  <div className="flex flex-col md:items-end gap-3">
                      <span className="px-3 py-1 border border-[#7FFFD4]/40 rounded-full text-[#7FFFD4] font-mono text-xs uppercase tracking-widest bg-[#7FFFD4]/5">
                          Mentor
                      </span>
                      <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                          {language === "en" ? "June 2026 — Present" : "Juni 2026 — Sekarang"}
                      </span>
                  </div>
              </div>

              <div className="max-w-5xl">
                  <p className="text-base md:text-lg leading-relaxed font-light italic opacity-70 group-hover:opacity-100 transition-all duration-700 pl-8" style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}>
                      {language === "en"
                          ? "Served as a mentor for the Microsoft Power BI Bootcamp at Ousean Digital School using a hands-on learning approach. Guided participants through data analysis and dashboard development using Microsoft Power BI through practical materials, dataset-based exercises, and ongoing learning support."
                          : "Berperan sebagai mentor dalam Microsoft Power BI Bootcamp di Ousean Digital School dengan pendekatan hands-on learning. Membantu peserta memahami proses analisis data dan pengembangan dashboard menggunakan Microsoft Power BI melalui materi praktis, latihan berbasis dataset, serta pendampingan selama proses pembelajaran."}
                  </p>
              </div>
          </div>
{/* Audio Checker Item */}
        <div className="group relative pb-16 transition-all duration-500" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-black transition-colors uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                        Audio Checker
                    </h3>
                    <p className="text-[#7FFFD4] font-mono text-sm md:text-base uppercase tracking-[0.3em] opacity-90">
                        DERMA AESTHETICS — Remote
                    </p>
                </div>

                <div className="flex flex-col md:items-end gap-3">
                    <span className="px-3 py-1 border border-[#7FFFD4]/40 rounded-full text-[#7FFFD4] font-mono text-xs uppercase tracking-widest bg-[#7FFFD4]/5">
                        Freelance
                    </span>
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                        {language === "en" ? "April 2026 — Present" : "April 2026 — Sekarang"}
                    </span>
                </div>
            </div>

            <div className="max-w-5xl">
                <p className="text-base md:text-lg leading-relaxed font-light italic opacity-70 group-hover:opacity-100 transition-all duration-700 pl-8" style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}>
                    {language === "en" ? "Responsible for reviewing and validating audio transcription results to ensure accuracy, consistency, and compliance with established project guidelines. Identified transcription errors, labeling issues, and data discrepancies through a systematic quality control (QC) process to maintain dataset quality. Provided feedback and necessary corrections to improve data quality and ensure all completed work met project standards before being used for further processing and development." : "Bertanggung jawab dalam melakukan pemeriksaan dan validasi hasil transkripsi audio guna memastikan akurasi, konsistensi, serta kesesuaian dengan pedoman proyek yang telah ditetapkan. Melakukan identifikasi terhadap kesalahan transkripsi, pelabelan, maupun ketidaksesuaian data melalui proses quality control (QC) yang sistematis untuk menjaga kualitas dataset. Selain itu, memberikan umpan balik dan koreksi yang diperlukan untuk meningkatkan kualitas data serta memastikan seluruh hasil pekerjaan memenuhi standar proyek sebelum digunakan pada tahap pengolahan dan pengembangan selanjutnya." }
                </p>
            </div>
        </div>
        {/* Data Analyst & Digital Marketing Intern Item */}
        <div className="group relative pb-16 transition-all duration-500" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-black transition-colors uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                        Data Analyst & Digital Marketing Intern
                    </h3>
                    <p className="text-[#7FFFD4] font-mono text-sm md:text-base uppercase tracking-[0.3em] opacity-90">
                        PT. GAIVO SOLUSI MANAJEMEN — Tangerang, Indonesia
                    </p>
                </div>

                <div className="flex flex-col md:items-end gap-3">
                    <span className="px-3 py-1 border border-[#7FFFD4]/40 rounded-full text-[#7FFFD4] font-mono text-xs uppercase tracking-widest bg-[#7FFFD4]/5">
                        Internship
                    </span>
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                        {language === "en" ? "February — July 2026" : "Februari — Juli 2026"}
                    </span>
                </div>
            </div>

            <div className="max-w-5xl">
                <p className="text-base md:text-lg leading-relaxed font-light italic opacity-70 group-hover:opacity-100 transition-all duration-700 pl-8" style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--border)" }}>
                    {language === "en" ? "Focused on analyzing website performance using Google Search Console and Google Analytics 4 to identify trends and data-driven optimization opportunities. Involved in SEO content management, keyword research, and article performance monitoring, while also contributing to the development of TrafficSaaS, a SaaS-based Web Analytics dashboard integrating analytics data, APIs, and AI features to support data-driven decision-making." : "Berfokus pada analisis performa website menggunakan Google Search Console dan Google Analytics 4 untuk mengidentifikasi tren serta peluang optimasi berbasis data. Terlibat dalam pengelolaan konten SEO, riset keyword, dan monitoring performa artikel, sekaligus berkontribusi dalam pengembangan TrafficSaaS sebagai dashboard Web Analytics berbasis SaaS dengan integrasi data analytics, API, dan fitur AI untuk mendukung pengambilan keputusan berbasis data." }
                </p>
            </div>
        </div>
    </div>
</div>

            {/* --- MODAL DETAIL (DI LUAR GRID) --- */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        {/* Overlay Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />

                        {/* Modal Container */}
                        <motion.div 
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-5xl rounded-[40px] overflow-hidden max-h-[90vh] flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] z-[110] transition-colors duration-400" style={{ backgroundColor: isDark ? "#0D0D0D" : "#f8fafc", border: "1px solid var(--border)" }}
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedId(null)} 
                                className="absolute top-6 right-6 z-[120] w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#7FFFD4] hover:text-black transition-all text-xl"
                            >
                                ✕
                            </button>

                                {/* SCROLLABLE AREA */}
<div className="overflow-y-auto no-scrollbar flex-1 pt-12 md:pt-16"> {/* Tambah padding atas di sini */}
    
    {/* 1. MEDIA HEADER (DOKUMEN / VIDEO / GAMBAR) */}
<div className="w-full bg-[#050505] flex items-center justify-center relative border-b border-white/5">
    {selectedProject.file ? (
        /* KONDISI 1: JIKA PDF */
        <div className="w-full h-[50vh] p-4 md:p-6">
            <iframe
                src={`${selectedProject.file}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full rounded-2xl border border-white/10 shadow-2xl bg-white"
                title={getText(selectedProject, 'title')}
            />
        </div>
    ) : selectedProject.video ? (
        /* KONDISI 2: JIKA VIDEO (Buat Prototype Figma lu) */
        <div className="w-full h-[50vh] p-4 md:p-6 flex items-center justify-center">
            <video 
                src={selectedProject.video}
                className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                autoPlay 
                loop 
                muted 
                playsInline
            />
        </div>
    ) : (
        /* KONDISI 3: FALLBACK KE GAMBAR BIASA */
        <div className="p-10">
            <img 
                src={selectedProject.image} 
                className="w-full h-auto max-h-[45vh] object-contain rounded-2xl shadow-2xl border border-white/5" 
                alt={getText(selectedProject, 'title')} 
            />
        </div>
    )}
</div>

                                {/* 2. INSIGHT PANEL (PENJELASAN) */}
                                <div className="p-8 md:p-16 space-y-16 transition-colors duration-400" style={{ background: isDark ? "linear-gradient(to bottom, #0D0D0D, #000)" : "linear-gradient(to bottom, #f8fafc, #f0f4f8)" }}>
                                    
                                    {/* Title Section */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#7FFFD4] font-mono text-[11px] uppercase tracking-[0.4em] font-bold bg-[#7FFFD4]/10 px-4 py-1.5 rounded-full border border-[#7FFFD4]/20">
                                                {getText(selectedProject, 'category')}
                                            </span>
                                            <span className="text-white/20 font-mono text-xs uppercase tracking-widest">{getText(selectedProject, 'date')}</span>
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black leading-[0.85] uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                                            {getText(selectedProject, 'title')}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 pt-4">
                                            {selectedProject.tech?.map(t => (
                                                <span key={t} className="text-[10px] font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-lg">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bento Grid: Challenge & Solution */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-8 rounded-[40px] bg-red-500/[0.03] border border-red-500/10 space-y-4">
                                            <h4 className="text-red-400 font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> {language === "en" ? "The Challenge" : "Tantangan"}
                                            </h4>
                                            <p className="text-white/80 text-lg leading-relaxed italic font-light">"{getText(selectedProject, 'challenge')}"</p>
                                        </div>
                                        <div className="p-8 rounded-[40px] bg-[#7FFFD4]/[0.03] border border-[#7FFFD4]/10 space-y-4">
                                            <h4 className="text-[#7FFFD4] font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                                                <span className="w-2 h-2 bg-[#7FFFD4] rounded-full animate-pulse" /> {language === "en" ? "The Magic Solution" : "Solusi"}
                                            </h4>
                                            <p className="text-white/80 text-lg leading-relaxed italic font-light">"{getText(selectedProject, 'solution')}"</p>
                                        </div>
                                    </div>

                                    {/* Achievements List */}
                                    <div className="space-y-8">
                                        <h4 className="text-white/30 font-mono text-xs uppercase tracking-[0.5em] flex items-center gap-4">
                                            <span className="text-2xl">⚡</span> {language === "en" ? "Key Achievements" : "Pencapaian Utama"}
                                        </h4>
                                        <div className="grid gap-4">
                                            {selectedAchievements.map((item, i) => (
                                                <div key={i} className="flex gap-8 p-8 rounded-[32px] items-center transition-all group" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                                                    <span className="text-[#7FFFD4] font-mono text-lg opacity-30 group-hover:opacity-100">0{i+1}</span>
                                                    <p className="text-lg leading-snug transition-colors" style={{ color: "var(--text-muted)" }}>{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Recap */}
                                    <div className="flex flex-col md:flex-row gap-12 pt-16 border-t border-white/5 items-center">
                                        <div className="md:w-2/3">
                                            <h4 className="text-white/30 font-mono text-xs uppercase mb-4 tracking-widest">{language === "en" ? "Project Summary" : "Ringkasan Proyek"}</h4>
                                            <p className="text-gray-500 text-base italic leading-relaxed pl-6 border-l-2 border-[#7FFFD4]/20">
                                                {getText(selectedProject, 'fullDesc') || getText(selectedProject, 'desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}





