export type Project = {
    slug: string;
    number: string;
    title: string;
    category: string;
    image: string;
    shortDescription: string;
    description: string;
    status: string;
    technologies: string[];
    overview: string[];
    focus: string[];
    development: string[];
    contribution: string[];
};

export const PROJECTS: Project[] = [
    {
        slug: "shooting-range-v2",
        number: "01",
        title: "ShootingRangeV2",
        category: "Desktop Application",
        image: "/images/projects/shooting-range.png",
        shortDescription:
            "Aplikasi desktop berbasis Python dengan fokus pada antarmuka dan integrasi perangkat kamera.",
        description:
            "ShootingRangeV2 merupakan project aplikasi desktop yang dikembangkan menggunakan Python. Project ini berfokus pada pembangunan antarmuka aplikasi, pengelolaan fitur, serta integrasi perangkat kamera.",
        status: "Dalam Pengembangan",
        technologies: ["Python", "PySide6", "OpenCV", "Pytest"],
        overview: [
            "Project ini dikembangkan sebagai aplikasi desktop dengan antarmuka grafis.",
            "Pengembangan mencakup pengelolaan halaman aplikasi, penanganan kondisi error, serta pengujian beberapa bagian sistem.",
        ],
        focus: [
            "Pengembangan antarmuka menggunakan PySide6.",
            "Integrasi dan penanganan perangkat kamera menggunakan OpenCV.",
            "Pencatatan aktivitas dan penanganan error aplikasi.",
            "Pengujian fungsi dan keandalan aplikasi.",
        ],
        development: [
            "Membangun dan merapikan struktur antarmuka aplikasi.",
            "Mengembangkan penanganan error agar aplikasi lebih mudah dipantau ketika terjadi masalah.",
            "Menambahkan pengujian untuk membantu menjaga perilaku aplikasi.",
        ],
        contribution: [
            "Mengembangkan source code aplikasi secara berkolaborasi dengan rekan tim berdasarkan kebutuhan dan referensi yang diberikan.",
            "Mengerjakan pengembangan antarmuka, penanganan error, dan pengujian.",
        ],
    },
    {
        slug: "salsa-apparel",
        number: "02",
        title: "Salsa Apparel",
        category: "E-Commerce Website",
        image: "/images/projects/salsa-apparel.png",
        shortDescription:
            "Platform e-commerce fashion untuk menampilkan produk dan mengembangkan pengalaman belanja online.",
        description:
            "Salsa Apparel merupakan project e-commerce yang dikembangkan menggunakan PHP Native dan PostgreSQL. Project ini dirancang untuk menghadirkan pengalaman belanja online dengan pengelolaan produk dan kategori.",
        status: "Dalam Pengembangan",
        technologies: ["PHP", "PostgreSQL", "JavaScript", "HTML", "CSS"],
        overview: [
            "Project ini dibuat sebagai platform toko online untuk produk fashion.",
            "Pengembangan mencakup sisi antarmuka pengguna, pengelolaan data produk, serta kebutuhan administrasi toko.",
        ],
        focus: [
            "Tampilan halaman utama dan katalog produk.",
            "Pengelolaan kategori dan informasi produk.",
            "Pengembangan dashboard administrasi.",
            "Persiapan alur transaksi dan checkout.",
        ],
        development: [
            "Membangun aplikasi menggunakan PHP Native.",
            "Menghubungkan aplikasi dengan database PostgreSQL.",
            "Menyusun komponen tampilan agar dapat digunakan kembali.",
            "Mengembangkan fitur secara bertahap sesuai kebutuhan project.",
        ],
        contribution: [
            "Mengembangkan aplikasi e-commerce sebagai project yang dikerjakan sendiri.",
            "Mengerjakan struktur aplikasi, antarmuka, dan integrasi database.",
        ],
    },
    {
        slug: "smart-worklog",
        number: "03",
        title: "Smart Worklog",
        category: "Web Application",
        image: "/images/projects/smartworklog.png",
        shortDescription:
            "Sistem pencatatan aktivitas kerja untuk membantu pengelolaan pekerjaan dan informasi operasional.",
        description:
            "Smart Worklog merupakan aplikasi web yang dirancang untuk mendukung pencatatan aktivitas kerja dan pengelolaan informasi operasional. Project ini menggunakan frontend React dan TypeScript dengan backend Laravel.",
        status: "Dalam Pengembangan",
        technologies: ["React", "TypeScript", "Laravel", "PostgreSQL"],
        overview: [
            "Project ini memiliki konsep aplikasi web dengan beberapa modul untuk mendukung aktivitas operasional.",
            "Struktur aplikasinya memisahkan frontend dan backend sehingga keduanya dapat dikembangkan dan diintegrasikan.",
        ],
        focus: [
            "Antarmuka dashboard aplikasi.",
            "Pengelolaan akun dan hak akses pengguna.",
            "Pengelolaan data dan aktivitas kerja.",
            "Integrasi frontend dengan backend.",
        ],
        development: [
            "Mempelajari struktur frontend React dan TypeScript.",
            "Menelusuri struktur backend Laravel dan koneksi database PostgreSQL.",
            "Memahami alur autentikasi, routing, dan pengelolaan hak akses.",
        ],
        contribution: [
            "Terlibat dalam mempelajari, menelusuri, dan mengembangkan bagian project.",
            "Rincian kontribusi teknis disesuaikan dengan bagian yang benar-benar dikerjakan.",
        ],
    },
    {
        slug: "siakad",
        number: "04",
        title: "SIAKAD",
        category: "Academic Information System",
        image: "/images/projects/siakad.png",
        shortDescription:
            "Aplikasi sistem informasi akademik untuk mendukung pengelolaan data dan aktivitas akademik sekolah.",
        description:
            "SIAKAD merupakan project aplikasi sistem informasi akademik berbasis web yang dikembangkan menggunakan Laravel dan PostgreSQL.",
        status: "Tahap Pengembangan Awal",
        technologies: ["Laravel", "PHP", "PostgreSQL", "Blade", "Tailwind CSS"],
        overview: [
            "Project ini dirancang sebagai sistem informasi akademik untuk lingkungan SMA/SMK.",
            "Pengembangan dimulai dari struktur aplikasi dan kebutuhan dashboard berdasarkan peran pengguna.",
        ],
        focus: [
            "Dashboard administrator, guru, dan murid.",
            "Pengelolaan data akademik.",
            "Pengembangan fitur CRUD.",
            "Penyusunan antarmuka menggunakan Blade dan Tailwind CSS.",
        ],
        development: [
            "Menyiapkan project Laravel dan konfigurasi PostgreSQL.",
            "Menyusun struktur awal aplikasi.",
            "Merancang kebutuhan fitur berdasarkan peran pengguna.",
        ],
        contribution: [
            "Merancang dan mengembangkan fondasi awal aplikasi.",
            "Menyusun struktur project, konfigurasi database, dan kebutuhan MVP.",
        ],
    },
];