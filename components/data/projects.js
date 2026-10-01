export const projects = [
    {
        id: "01",
        title: "Medical Data Entry Management",
        category: "Work Exp // Freelance",
        date: "Apr - Des 2025",
        desc: "Pengelolaan input dan verifikasi data kepatuhan APD untuk 3.100 dokter ke portal Mutufasyankes Kemenkes.",
        fullDesc:
            "Bertanggung jawab penuh atas akurasi data medis skala besar. Mengelola migrasi data dari format manual ke sistem digital nasional dengan standar validasi ketat.",
        challenge:
            "Menjaga presisi data di tengah volume tinggi (3.100 entri) agar sesuai dengan standar validasi portal Kemenkes Mutu Fasyankes, di mana kesalahan kecil bisa menghambat penilaian mutu puskesmas.",
        solution:
            "Mengatur manajemen waktu sehingga laporan selalu selesai H-1 sebelum tenggat waktu.",
        achievements: [
            "National System Compliance: 100% data terintegrasi sukses sesuai standar akreditasi.",
            "Precision at Scale: Berhasil mengelola 3.100 entri medis dengan tingkat zero-error.",
            "Operational Efficiency: Mengoptimalkan durasi pelaporan dari manual ke digital secara sistematis.",
        ],
        tech: ["Excel", "System Compliance", "Data Audit"],
        image: "/img/mtuu.png",
        accent: "#7FFFD4",
    },
    {
        id: "02",
        title: "FMCG Sales Analysis Dashboard",
        category: "Data Analyst // Google Looker Studio",
        date: "Feb 2026",
        desc: "Transformasi ribuan baris data transaksi FMCG menjadi dashboard interaktif di Google Looker Studio.",
        fullDesc:
            "Menganalisis tren profit dan performa wilayah menggunakan dataset penjualan barang konsumsi tahun 2025.",
        challenge:
            "Dataset mentah sangat berantakan dan berjumlah ribuan baris, menyulitkan penarikan kesimpulan wilayah mana yang paling profitable.",
        solution:
            "Menggunakan SQL untuk querying data spesifik, lalu Power Query di Excel untuk otomatisasi Data Cleansing sebelum dihubungkan ke Looker Studio.",
        achievements: [
            "Efficient Data Querying: Optimasi pengambilan data menggunakan SQL untuk efisiensi proses.",
            "Interactive Dashboard: Stakeholder dapat memantau performa bisnis secara cepat dan akurat.",
            "Monthly Automation: Sistem otomatis update data tanpa perlu pengerjaan ulang dari nol.",
        ],
        tech: ["SQL", "Looker Studio", "Excel", "Power Query"],
        image: "/img/KarirNex.jpeg",
        file: "/files/KarirNex.pdf",
        accent: "#00FFFF",
    },
    {
        id: "03",
        title: "Luxwellness Vitamin Shop Prototype",
        category: "UI/UX Design // Figma",
        date: "2025",
        desc: "Perancangan prototype toko vitamin online dengan konsep clean design dan navigasi user-centered.",
        fullDesc:
            "Membangun High-Fidelity prototype yang fokus pada kemudahan navigasi belanja suplemen bagi user.",
        challenge:
            "Informasi nutrisi vitamin sangat padat teks. Tantangannya adalah menyajikan info tersebut agar tetap enak dibaca di layar smartphone.",
        solution:
            "Menerapkan Card-Based Design dan Visual Hierarchy yang kuat di Figma untuk menonjolkan info penting tanpa membuat layout terlihat sumpek.",
        achievements: [
            "High-Fidelity Prototype: Simulasi aplikasi interaktif yang terasa nyata di Figma.",
            "User-Centered Layout: Memudahkan navigasi user dalam memilih kategori suplemen.",
            "Responsive Design: Konsistensi tampilan di berbagai ukuran layar smartphone.",
        ],
        tech: ["Figma", "UI Design", "Prototyping"],
        image: "/img/luxwellness.png",
        video: "/videos/figma.mp4",
        accent: "#FF7EB9",
    },
    {
        id: "04",
        title: "Indonesia Earthquake Visualization",
        category: "Data Visualization // Tableau",
        date: "2025",
        desc: "Visualisasi peta interaktif riwayat gempa Indonesia menggunakan dataset Kaggle (BMKG & USGS).",
        fullDesc:
            "Mengolah ribuan koordinat dan magnitudo gempa menjadi pola bencana yang mudah dibaca secara spasial.",
        challenge:
            "Format data BMKG & USGS sering berubah. Ribuan baris koordinat mentah sulit dipahami tanpa visualisasi peta yang akurat.",
        solution:
            "Standardisasi koordinat dan magnitudo (Data Cleaning), lalu membangun interactive dashboard dengan fitur filter tahun dan lokasi satu kali klik.",
        achievements: [
            "Interactive Mapping: Pemetaan titik gempa dengan kode warna kedalaman (dangkal/dalam).",
            "Annual Trend Analysis: Grafik frekuensi gempa tahunan yang menunjukkan pergerakan data secara jelas.",
            "Statistical Insight: Visualisasi distribusi magnitudo untuk identifikasi wilayah risiko tinggi.",
        ],
        tech: ["Tableau", "Kaggle Dataset", "Data Cleaning"],
        image: "/img/tableuu.png",
        video: "/videos/kaggle.mp4",
        accent: "#FFBC7F",
    },
    {
        id: "05",
        title: "Financial Recap: WiFi Business",
        category: "Management // Finance // Power BI",
        date: "2026",
        desc: "Transformasi pelaporan keuangan iuran WiFi dari catatan manual ke Dashboard Interaktif Power BI untuk 116 pelanggan.",
        fullDesc:
            "Membangun ekosistem monitoring keuangan real-time yang mengintegrasikan data pendapatan bulanan, status pelunasan, dan manajemen piutang dengan visualisasi modern menggunakan Power BI.",
        challenge:
            "Kesulitan dalam mengidentifikasi prioritas penagihan karena data pelanggan yang tersebar, serta risiko selisih perhitungan piutang kumulatif hingga jutaan rupiah.",
        solution:
            "Implementasi Power BI Desktop dengan pembersihan data (Power Query) untuk standarisasi format mata uang (Rp) dan pembuatan DAX Measures untuk menghitung pendapatan dinamis per bulan serta total saldo piutang tertahan.",
        achievements: [
            "Visual Priority System: Mengidentifikasi daftar 'Top Penunggak' secara instan melalui Stacked Bar Chart untuk mempercepat proses penagihan.",
            "Operational Health Check: Rasio pelunasan terpantau secara persentase (93.1% Lunas) memudahkan pengambilan keputusan arus kas.",
            "Modern UI/UX: Menerapkan desain Dark Theme dengan rounded corners dan shadow untuk meningkatkan keterbacaan data bagi pengurus layanan.",
        ],
        tech: ["Power BI", "DAX", "Power Query", "Data Visualization", "Financial Reporting"],
        image: "/img/wifi.png",
        accent: "#7B2FFF",
    },
];
