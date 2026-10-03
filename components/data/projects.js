export const projects = [
    {
        id: "01",

        title: "Medical Data Entry Management",
        titleEn: "Medical Data Entry Management",

        category: "Work Exp // Freelance",
        categoryEn: "Work Exp // Freelance",

        date: "Apr - Des 2025",
        dateEn: "Apr - Dec 2025",

        desc: "Pengelolaan input dan verifikasi data kepatuhan APD untuk 3.100 dokter ke portal Mutufasyankes Kemenkes.",
        descEn: "Managed the input and verification of PPE compliance data for 3,100 doctors through the Ministry of Health's Mutu Fasyankes portal.",

        fullDesc:
            "Bertanggung jawab penuh atas akurasi data medis skala besar. Mengelola migrasi data dari format manual ke sistem digital nasional dengan standar validasi ketat.",
        fullDescEn:
            "Responsible for the accuracy of large-scale medical data. Managed data migration from manual formats to a national digital system under strict validation standards.",

        challenge:
            "Menjaga presisi data di tengah volume tinggi (3.100 entri) agar sesuai dengan standar validasi portal Kemenkes Mutu Fasyankes, di mana kesalahan kecil bisa menghambat penilaian mutu puskesmas.",
        challengeEn:
            "Maintaining data precision across a high volume of records (3,100 entries) while meeting the validation standards of the Ministry of Health's Mutu Fasyankes portal, where minor errors could affect health center quality assessments.",

        solution:
            "Mengatur manajemen waktu sehingga laporan selalu selesai H-1 sebelum tenggat waktu.",
        solutionEn:
            "Applied time management strategies to consistently complete reports one day before the deadline.",

        achievements: [
            "National System Compliance: 100% data terintegrasi sukses sesuai standar akreditasi.",
            "Precision at Scale: Berhasil mengelola 3.100 entri medis dengan tingkat zero-error.",
            "Operational Efficiency: Mengoptimalkan durasi pelaporan dari manual ke digital secara sistematis.",
        ],

        achievementsEn: [
            "National System Compliance: Successfully integrated 100% of the data according to accreditation standards.",
            "Precision at Scale: Successfully managed 3,100 medical entries with a zero-error rate.",
            "Operational Efficiency: Systematically optimized the reporting process from manual to digital.",
        ],

        tech: ["Excel", "System Compliance", "Data Audit"],
        image: "/img/mtuu.png",
        accent: "#7FFFD4",
    },

    {
        id: "06",
        title: "TrafficSaaS - SEO Analytics Dashboard",
        titleEn: "TrafficSaaS - SEO Analytics Dashboard",

        category: "Data Analytics // SEO // Web Analytics",
        categoryEn: "Data Analytics // SEO // Web Analytics",

        date: "2026",
        dateEn: "2026",

        desc: "Pengembangan dashboard Web Analytics berbasis SaaS yang mengintegrasikan Google Search Console dan Google Analytics 4 untuk analisis performa website.",
        descEn: "Developed a SaaS-based Web Analytics dashboard integrating Google Search Console and Google Analytics 4 for website performance analysis.",

        fullDesc:
            "Mengembangkan TrafficSaaS sebagai Dashboard Web Analytics berbasis SaaS untuk mengintegrasikan data Google Search Console dan Google Analytics 4 dalam satu platform analitik terpadu. Sistem memanfaatkan Google Cloud Platform dan OAuth 2.0 untuk menghubungkan layanan Google, kemudian mengambil, memvalidasi, mengolah, dan menggabungkan data performa pencarian serta perilaku pengguna sebelum disajikan melalui dashboard analytics. Platform ini dirancang untuk mendukung monitoring, evaluasi performa website, analisis SEO, dan pengambilan keputusan berbasis data.",
        fullDescEn:
            "Developed TrafficSaaS as a SaaS-based Web Analytics Dashboard to integrate Google Search Console and Google Analytics 4 into a unified analytics platform. The system uses Google Cloud Platform and OAuth 2.0 to connect with Google services, then retrieves, validates, processes, and combines search performance and user behavior data before presenting them through the analytics dashboard. The platform was designed to support website monitoring, performance evaluation, SEO analysis, and data-driven decision-making.",

        challenge:
            "Data performa website tersebar pada Google Search Console dan Google Analytics 4 dengan struktur serta fokus analisis yang berbeda. Pengguna perlu berpindah antar platform, menyesuaikan periode data, serta menggabungkan dan menginterpretasikan informasi secara manual untuk memperoleh gambaran performa website secara menyeluruh.",
        challengeEn:
            "Website performance data was spread across Google Search Console and Google Analytics 4, with different data structures and analytical perspectives. Users had to switch between platforms, align reporting periods, and manually combine and interpret the information to obtain a comprehensive view of website performance.",

        solution:
            "Mengembangkan TrafficSaaS dengan integrasi Google Search Console API dan Google Analytics Data API melalui OAuth 2.0 dan Google Cloud Platform. Data diambil secara otomatis, diproses melalui validasi, transformasi, penggabungan, dan agregasi, kemudian dikelola dalam PostgreSQL dan disajikan melalui KPI, grafik, tabel, serta tren performa dalam satu dashboard analytics.",
        solutionEn:
            "Developed TrafficSaaS by integrating Google Search Console API and Google Analytics Data API through OAuth 2.0 and Google Cloud Platform. Data is retrieved automatically, processed through validation, transformation, combination, and aggregation, then managed in PostgreSQL and presented through KPIs, charts, tables, and performance trends in a unified analytics dashboard.",

        achievements: [
            "API Integration: Berhasil mengintegrasikan Google Search Console API dan Google Analytics Data API (GA4) ke dalam satu sistem analitik terpusat.",
            "Unified Analytics: Menggabungkan data performa pencarian dan perilaku pengguna untuk memberikan gambaran website yang lebih menyeluruh.",
            "Dashboard Analytics: Menyajikan KPI, ringkasan pertumbuhan, SEO Health Score, Performance Overview, serta tren performa dalam satu dashboard.",
            "Automated Data Processing: Mengotomatisasi proses pengambilan, validasi, pengolahan, dan penyajian data dari layanan Google."
        ],

        achievementsEn: [
            "API Integration: Successfully integrated Google Search Console API and Google Analytics Data API (GA4) into a centralized analytics system.",
            "Unified Analytics: Combined search performance and user behavior data to provide a more comprehensive view of website performance.",
            "Dashboard Analytics: Presented KPIs, growth summaries, SEO Health Score, Performance Overview, and performance trends in a unified dashboard.",
            "Automated Data Processing: Automated data retrieval, validation, processing, and presentation from Google services."
        ],

        tech: [
            "Next.js",
            "Google Search Console API",
            "Google Analytics Data API",
            "Google OAuth 2.0",
            "Google Cloud Platform",
            "PostgreSQL",
            "Prisma ORM"
        ],

        image: "/img/traffic-saas.png",
        link: "https://traffic-saas-woad.vercel.app/en",
        accent: "#00FFFF"
    },
    {
        id: "02",

        title: "FMCG Sales Analysis Dashboard",
        titleEn: "FMCG Sales Analysis Dashboard",

        category: "Data Analyst // Google Looker Studio",
        categoryEn: "Data Analyst // Google Looker Studio",

        date: "Feb 2026",
        dateEn: "Feb 2026",

        desc: "Transformasi ribuan baris data transaksi FMCG menjadi dashboard interaktif di Google Looker Studio.",
        descEn:
            "Transformed thousands of FMCG transaction records into an interactive dashboard using Google Looker Studio.",

        fullDesc:
            "Menganalisis tren profit dan performa wilayah menggunakan dataset penjualan barang konsumsi tahun 2025.",
        fullDescEn:
            "Analyzed profit trends and regional performance using a 2025 consumer goods sales dataset.",

        challenge:
            "Dataset mentah sangat berantakan dan berjumlah ribuan baris, menyulitkan penarikan kesimpulan wilayah mana yang paling profitable.",
        challengeEn:
            "The raw dataset was highly unstructured and contained thousands of rows, making it difficult to determine which regions were the most profitable.",

        solution:
            "Menggunakan SQL untuk querying data spesifik, lalu Power Query di Excel untuk otomatisasi Data Cleansing sebelum dihubungkan ke Looker Studio.",
        solutionEn:
            "Used SQL to query specific data, then applied Power Query in Excel to automate data cleansing before connecting the dataset to Looker Studio.",

        achievements: [
            "Efficient Data Querying: Optimasi pengambilan data menggunakan SQL untuk efisiensi proses.",
            "Interactive Dashboard: Stakeholder dapat memantau performa bisnis secara cepat dan akurat.",
            "Monthly Automation: Sistem otomatis update data tanpa perlu pengerjaan ulang dari nol.",
        ],

        achievementsEn: [
            "Efficient Data Querying: Optimized data retrieval using SQL to improve process efficiency.",
            "Interactive Dashboard: Enabled stakeholders to monitor business performance quickly and accurately.",
            "Monthly Automation: Automated data updates without requiring the process to be rebuilt from scratch.",
        ],

        tech: ["SQL", "Looker Studio", "Excel", "Power Query"],
        image: "/img/karirnex.jpeg",
        file: "/doc/Portofolio Bootcamp Data Analyst Firnanda Amalia.pdf",
        accent: "#00FFFF",
    },

    {
        id: "03",

        title: "Luxwellness Vitamin Shop Prototype",
        titleEn: "Luxwellness Vitamin Shop Prototype",

        category: "UI/UX Design // Figma",
        categoryEn: "UI/UX Design // Figma",

        date: "2025",
        dateEn: "2025",

        desc: "Perancangan prototype toko vitamin online dengan konsep clean design dan navigasi user-centered.",
        descEn:
            "Designed an online vitamin store prototype with a clean design concept and user-centered navigation.",

        fullDesc:
            "Membangun High-Fidelity prototype yang fokus pada kemudahan navigasi belanja suplemen bagi user.",
        fullDescEn:
            "Built a high-fidelity prototype focused on making supplement shopping navigation easier for users.",

        challenge:
            "Informasi nutrisi vitamin sangat padat teks. Tantangannya adalah menyajikan info tersebut agar tetap enak dibaca di layar smartphone.",
        challengeEn:
            "Vitamin nutrition information was highly text-heavy. The challenge was to present the information in a readable and accessible way on smartphone screens.",

        solution:
            "Menerapkan Card-Based Design dan Visual Hierarchy yang kuat di Figma untuk menonjolkan info penting tanpa membuat layout terlihat sumpek.",
        solutionEn:
            "Applied card-based design and strong visual hierarchy in Figma to highlight important information without making the layout feel cluttered.",

        achievements: [
            "High-Fidelity Prototype: Simulasi aplikasi interaktif yang terasa nyata di Figma.",
            "User-Centered Layout: Memudahkan navigasi user dalam memilih kategori suplemen.",
            "Responsive Design: Konsistensi tampilan di berbagai ukuran layar smartphone.",
        ],

        achievementsEn: [
            "High-Fidelity Prototype: Created an interactive application simulation in Figma.",
            "User-Centered Layout: Simplified navigation for users when choosing supplement categories.",
            "Responsive Design: Maintained visual consistency across different smartphone screen sizes.",
        ],

        tech: ["Figma", "UI Design", "Prototyping"],
        image: "/img/luxwellness.png",
        video: "/videos/figma.mp4",
        accent: "#FF7EB9",
    },

    {
        id: "04",

        title: "Indonesia Earthquake Visualization",
        titleEn: "Indonesia Earthquake Visualization",

        category: "Data Visualization // Tableau",
        categoryEn: "Data Visualization // Tableau",

        date: "2025",
        dateEn: "2025",

        desc: "Visualisasi peta interaktif riwayat gempa Indonesia menggunakan dataset Kaggle (BMKG & USGS).",
        descEn:
            "Created an interactive map visualization of Indonesian earthquake history using a Kaggle dataset (BMKG & USGS).",

        fullDesc:
            "Mengolah ribuan koordinat dan magnitudo gempa menjadi pola bencana yang mudah dibaca secara spasial.",
        fullDescEn:
            "Processed thousands of earthquake coordinates and magnitudes into spatial patterns that are easier to interpret.",

        challenge:
            "Format data BMKG & USGS sering berubah. Ribuan baris koordinat mentah sulit dipahami tanpa visualisasi peta yang akurat.",
        challengeEn:
            "BMKG and USGS data formats often vary. Thousands of raw coordinate records are difficult to interpret without accurate map visualization.",

        solution:
            "Standardisasi koordinat dan magnitudo (Data Cleaning), lalu membangun interactive dashboard dengan fitur filter tahun dan lokasi satu kali klik.",
        solutionEn:
            "Standardized coordinates and magnitudes through data cleaning, then built an interactive dashboard with one-click year and location filters.",

        achievements: [
            "Interactive Mapping: Pemetaan titik gempa dengan kode warna kedalaman (dangkal/dalam).",
            "Annual Trend Analysis: Grafik frekuensi gempa tahunan yang menunjukkan pergerakan data secara jelas.",
            "Statistical Insight: Visualisasi distribusi magnitudo untuk identifikasi wilayah risiko tinggi.",
        ],

        achievementsEn: [
            "Interactive Mapping: Mapped earthquake points using color coding for depth (shallow/deep).",
            "Annual Trend Analysis: Visualized annual earthquake frequency to clearly show data patterns.",
            "Statistical Insight: Visualized magnitude distribution to identify higher-risk areas.",
        ],

        tech: ["Tableau", "Kaggle Dataset", "Data Cleaning"],
        image: "/img/tableuu.png",
        video: "/videos/kaggle.mp4",
        accent: "#FFBC7F",
    },

    {
        id: "05",

        title: "Financial Recap: WiFi Business",
        titleEn: "Financial Recap: WiFi Business",

        category: "Management // Finance // Power BI",
        categoryEn: "Management // Finance // Power BI",

        date: "2026",
        dateEn: "2026",

        desc: "Transformasi pelaporan keuangan iuran WiFi dari catatan manual ke Dashboard Interaktif Power BI untuk 116 pelanggan.",
        descEn:
            "Transformed WiFi subscription financial reporting from manual records into an interactive Power BI dashboard for 116 customers.",

        fullDesc:
            "Membangun ekosistem monitoring keuangan real-time yang mengintegrasikan data pendapatan bulanan, status pelunasan, dan manajemen piutang dengan visualisasi modern menggunakan Power BI.",
        fullDescEn:
            "Built a real-time financial monitoring system integrating monthly revenue, payment status, and receivables management using modern Power BI visualizations.",

        challenge:
            "Kesulitan dalam mengidentifikasi prioritas penagihan karena data pelanggan yang tersebar, serta risiko selisih perhitungan piutang kumulatif hingga jutaan rupiah.",
        challengeEn:
            "Identifying collection priorities was difficult because customer data was scattered, with the risk of cumulative receivables calculation differences reaching millions of rupiah.",

        solution:
            "Implementasi Power BI Desktop dengan pembersihan data (Power Query) untuk standarisasi format mata uang (Rp) dan pembuatan DAX Measures untuk menghitung pendapatan dinamis per bulan serta total saldo piutang tertahan.",
        solutionEn:
            "Implemented Power BI Desktop with data cleansing through Power Query to standardize currency formatting (Rp), along with DAX measures for dynamic monthly revenue and total outstanding receivables.",

        achievements: [
            "Visual Priority System: Mengidentifikasi daftar 'Top Penunggak' secara instan melalui Stacked Bar Chart untuk mempercepat proses penagihan.",
            "Operational Health Check: Rasio pelunasan terpantau secara persentase (93.1% Lunas) memudahkan pengambilan keputusan arus kas.",
            "Modern UI/UX: Menerapkan desain Dark Theme dengan rounded corners dan shadow untuk meningkatkan keterbacaan data bagi pengurus layanan.",
        ],

        achievementsEn: [
            "Visual Priority System: Instantly identified the 'Top Delinquents' through a stacked bar chart to accelerate collection efforts.",
            "Operational Health Check: Monitored the payment completion rate as a percentage (93.1% Paid) to support cash flow decisions.",
            "Modern UI/UX: Applied a dark theme with rounded corners and shadows to improve data readability for service administrators.",
        ],

        tech: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Visualization",
            "Financial Reporting",
        ],

        image: "/img/wifi.png",
        accent: "#7B2FFF",
    },
];




