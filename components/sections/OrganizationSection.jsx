import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const organizations = [
    {
        id: "01",
        role: "Internship Organisasi Humanis",
        roleEn: "Humanis Organizational Internship",
        name: "Staff Divisi Pendidikan dan Pengembangan Wawasan",
        nameEn: "Staff, Education and Insight Development Division",
        period: "Juni - November 2024",
        periodEn: "June - November 2024",
        tags: ["Leadership", "Program Coordination", "Data Documentation"],
        description: "Selama periode magang, saya berperan aktif dalam menyusun laporan administrasi kegiatan dan notulensi rapat untuk mendukung efisiensi program kerja divisi.",
        descriptionEn: "During the internship period, I actively prepared activity administration reports and meeting minutes to support the efficiency of the division's work programs.",
        // TAMBAHIN ARRAY FOTO DISINI BRAY
        photos: [
            "/img/ggg.jpeg", 
            "/img/stud.jpeg",
            "/img/adlaah.jpeg",
            "/img/humanis.jpeg",
            "/img/hhh.jpeg"
        ]
    },
    {
        id: "02",
        role: "CodeHub",
        name: "Staff Divisi Pendidikan dan Pengembangan Wawasan",
        nameEn: "Staff, Education and Insight Development Division",
        period: "2022 — 2023",
        tags: ["Networking", "Communication", "Event Management"],
        description: "Bertugas sebagai Koordinator Divisi Acara dalam kegiatan Seminar Code Summit dengan tema Menuju Masa Depan Kolaboratif: AI Sebagai Pendukung, Bukan Ancaman yang diselenggarakan di Universitas Esa Unggul Kampus Tangerang pada tanggal 9 Juli 2025, memimpin tim dalam perencanaan konsep dan eksekusi teknis seminar hybrid dengan lebih dari 100 peserta, memastikan koordinasi tim, kesiapan teknis, dan kelancaran operasional acara.",
        descriptionEn: "Served as Event Division Coordinator for the Code Summit Seminar with the theme Menuju Masa Depan Kolaboratif: AI Sebagai Pendukung, Bukan Ancaman, held at Universitas Esa Unggul Tangerang Campus on July 9, 2025. Led the team in planning the concept and technical execution of a hybrid seminar with more than 100 participants, ensuring team coordination, technical readiness, and smooth event operations.",
        photos: [
            "/img/codesummit.jpeg",
            "/img/peserta.jpeg",
            "/img/ms.jpeg",
            "/img/anu.jpeg",
        ]
    },
    {
        id: "03",
        role: "Badan Eksekutif Mahasiswa (BEM)",
        periodEn: "October - November 2025",
        roleEn: "Student Executive Board (BEM)",
        name: "Staff Minat Bakat Departemen Pengembangan Kapasitas Mahasiswa BEM FASILKOM",
        nameEn: "Staff, Talent and Interests Division, Student Capacity Development Department, BEM FASILKOM",
        period: "Oktober - November 2025",
        tags: ["Networking", "Communication", "Event Planning"],
        description: "Staff Acara Leadership Training Program dengan tema Katalisator Aksi: Gerakan Gagasan, Wujudkan Perubahan pada tanggal 14 - 15 November 2025: menyusun rundown, merancang games yang efektif, membantu persiapan teknis sebelum acara, serta mendukung koordinasi dan kelancaran pelaksanaan kegiatan yang berjumlah 90 peserta.",
        descriptionEn: "Served as Event Staff for the Leadership Training Program with the theme Katalisator Aksi: Gerakan Gagasan, Wujudkan Perubahan on November 14 - 15, 2025. Prepared the event rundown, designed effective games, assisted with technical preparations, and supported coordination and smooth event execution for 90 participants.",
        photos: [
            "/img/ltppp.jpeg",
            "/img/ltp.jpeg",
            "/img/ltpp.jpeg"
        ]
    }
];

export default function OrganizationSection() {
    const { isDark } = useTheme();
    const { language } = useLanguage();
    const getText = (org, key) => {
        const englishKey = key + "En";
        return language === "en" ? (org[englishKey] ?? org[key]) : org[key];
    };

    return (
        <section id="organization" className="py-32 px-6 bg-transparent relative overflow-hidden">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#7FFFD4]/5 blur-[120px] rounded-full" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col mb-20">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-4 mb-4">
                        <span className="text-[#7FFFD4] font-mono text-lg font-bold">//</span>
                        <h2 className="text-sm font-mono text-[#7FFFD4] uppercase tracking-[0.5em]">Affiliations</h2>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter" style={{ color: "var(--text)" }}>
                        Organization<span className="text-[#7FFFD4]">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {organizations.map((org, index) => (
                        <motion.div 
                            key={org.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <span className="absolute -left-4 -top-12 text-[140px] font-black select-none transition-all duration-700" style={{ color: "var(--border)" }}>
                                {org.id}
                            </span>

                            <div className="relative p-8 md:p-12 rounded-[40px] backdrop-blur-md transition-all duration-500 shadow-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                                
                                {/* Info Utama */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                                    <div className="lg:col-span-5 space-y-4">
                                        <span className="text-[#7FFFD4] font-mono text-xs font-bold tracking-widest uppercase bg-[#7FFFD4]/10 px-4 py-1 rounded-full">
                                            {getText(org, 'period')}
                                        </span>
                                        <h3 className="text-4xl font-black uppercase italic tracking-tight transition-colors" style={{ color: "var(--text)" }}>
                                            {getText(org, 'role')}
                                        </h3>
                                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
                                            {getText(org, 'name')}
                                        </p>
                                    </div>
                                    <div className="lg:col-span-7">
                                        <p className="text-lg font-light italic leading-relaxed pl-8 transition-colors duration-400" style={{ color: "var(--text-muted)", borderLeft: "1px solid var(--border)" }}>
                                            "{getText(org, 'description')}"
                                        </p>
                                    </div>
                                </div>

                                {/* --- HORIZONTAL SCROLL DOCUMENTATION (Versi Compact) --- */}
<div className="relative mt-12 overflow-hidden">
    <div className="flex items-center gap-3 mb-6">
        <div className="h-[1px] w-8 bg-[#7FFFD4]/50"></div>
        <span className="text-[10px] font-mono text-[#7FFFD4] uppercase tracking-[0.4em] font-bold">
            Archive // Photo_Doc
        </span>
    </div>
    
    {/* Container Scroll - min-w gue set ke 280px biar gak kegedean bray */}
    <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x cursor-grab active:cursor-grabbing">
        {org.photos.map((photo, i) => (
            <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="min-w-[240px] md:min-w-[280px] h-[160px] md:h-[180px] rounded-xl overflow-hidden snap-center relative group/img shadow-lg transition-colors duration-400" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
                <img 
                    src={photo} 
                    alt="documentation" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500"
                />
                
                {/* Overlay Text Tipis */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                    <p className="text-[#7FFFD4] font-mono text-[9px] uppercase tracking-tighter italic">
                        View Doc_{org.id}.{i+1}
                    </p>
                </div>
            </motion.div>
        ))}
        
        {/* Spacer di akhir biar scrollnya gak kepentok */}
        <div className="min-w-[20px] h-full"></div>
    </div>

    {/* Custom Scroll Indicator yang lebih tipis */}
    <div className="absolute bottom-4 left-0 h-[1px] bg-white/5 w-full">
        <motion.div 
            className="h-[1.5px] bg-[#7FFFD4]/40"
            initial={{ width: "10%" }}
            whileInView={{ width: "30%" }}
            transition={{ duration: 1.5 }}
        />
    </div>
</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}



