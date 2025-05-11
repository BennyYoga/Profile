import { themeConfig } from './theme'

export const profileData = {
  theme: themeConfig,
  header: {
    name: 'Dewi Sartika',
    title: 'Lulusan Manajemen | Spesialis Pengembangan Bisnis',
    image: 'profile.jpg',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://#', icon: 'bi bi-linkedin' },
      { name: 'Twitter', url: 'https://#', icon: 'bi bi-twitter' },
      { name: 'Instagram', url: 'https://#', icon: 'bi bi-instagram' },
    ],
    contact: {
      email: 'dewi.sartika@contoh.com',
      phone: '+62 123-4567-8901',
      website: 'https://dewisartika.me',
    },
  },
  profile: {
    summary:
      'Lulusan baru Manajemen dari Salah Satu Universitas di Indonesia dengan IPK 3.8, berspesialisasi dalam Pemasaran dan Pengembangan Bisnis. Berpengalaman dalam riset pasar, strategi bisnis, dan transformasi digital melalui magang dan aktivitas organisasi.',
    details: {
      age: '24',
      location: 'Jakarta, Indonesia',
      languages: 'Bahasa Inggris (Fasih), Bahasa Indonesia (Asli)',
      availability: 'Tersedia untuk posisi full-time',
      email: 'dewi.sartika@contoh.com',
      phone: '+62 123-4567-8901',
    },
    strengths: [
      {
        title: 'Analisis Pasar',
        description:
          "Mahir dalam analisis SWOT, PESTEL, dan Porter's Five Forces dengan hasil terbukti dalam mengidentifikasi peluang pasar",
      },
      {
        title: 'Strategi Bisnis',
        description:
          'Mengembangkan 5+ rencana bisnis untuk proyek kelas dan kompetisi startup dengan proyeksi keuangan komprehensif',
      },
      {
        title: 'Pemasaran Digital',
        description:
          'Bersertifikat Google Digital Garage dengan pengalaman langsung menjalankan kampanye media sosial',
      },
    ],
  },
  skills: {
    technical: [
      { name: 'Analisis Bisnis', level: 90 },
      { name: 'Pemodelan Keuangan', level: 85 },
      { name: 'Riset Pasar', level: 95 },
      { name: 'Analisis Data (SPSS)', level: 80 },
      { name: 'Microsoft Excel', level: 95 },
      { name: 'Presentasi Bisnis', level: 90 },
    ],
    professional: [
      {
        name: 'Komunikasi',
        description: 'Kemampuan menyampaikan ide secara jelas dan efektif',
      },
      {
        name: 'Kepemimpinan',
        description: 'Memimpin tim dan proyek dengan efektif',
      },
      {
        name: 'Manajemen Waktu',
        description: 'Mengatur prioritas dan deadline dengan baik',
      },
      {
        name: 'Kerja Tim',
        description: 'Kolaborasi efektif dalam tim multidisiplin',
      },
    ],
    software: [
      { name: 'Excel', icon: 'bi bi-file-earmark-excel', level: 5 },
      { name: 'SPSS', icon: 'bi bi-bar-chart-line', level: 4 },
      { name: 'PowerPoint', icon: 'bi bi-file-earmark-ppt', level: 5 },
      { name: 'Word', icon: 'bi bi-file-earmark-word', level: 4 },
      { name: 'Canva', icon: 'bi bi-palette', level: 3 },
      { name: 'Trello', icon: 'bi bi-kanban', level: 4 },
    ],
    languages: [
      { language: 'Bahasa Indonesia', proficiency: 'Native', level: 100 },
      { language: 'Bahasa Inggris', proficiency: 'Fluent', level: 85 },
      { language: 'Bahasa Mandarin', proficiency: 'Intermediate', level: 60 },
    ],
  },
  experience: [
    {
      position: 'Magang Pengembangan Bisnis',
      company: 'PT GoDigital Indonesia',
      duration: 'Juni 2022 - Desember 2022',
      location: 'Jakarta, Indonesia',
      achievement:
        'Berkontribusi pada peningkatan 25% akuisisi mitra melalui strategi outreach yang lebih baik',
      responsibilities: [
        'Melakukan riset pasar tentang tren transformasi digital di UMKM',
        'Membantu pengembangan proposal kemitraan untuk 10+ klien potensial',
        'Membuat laporan analisis kompetitor menggunakan kerangka SWOT',
        'Berkordinasi dengan tim pemasaran untuk pengembangan materi kampanye',
      ],
      technologies: ['Google Analytics', 'Perangkat Lunak CRM', 'Visualisasi Data'],
    },
    {
      position: 'Asisten Pemasaran',
      company: 'Bina Nusantara Computer Club',
      duration: 'Januari 2021 - Mei 2022',
      location: 'Jakarta, Indonesia',
      achievement: 'Meningkatkan partisipasi acara sebesar 40% melalui kampanye media sosial',
      responsibilities: [
        'Mengelola kalender konten dan jadwal posting media sosial',
        'Menganalisis metrik engagement untuk mengoptimasi strategi konten',
        'Berkordinasi dengan tim desain untuk materi promosi',
        'Mengorganisir webinar bulanan dengan profesional industri',
      ],
      technologies: ['Instagram Insights', 'Facebook Ads Manager', 'Canva'],
    },
  ],
  education: [
    {
      degree: 'Sarjana Manajemen',
      institution: 'Salah Satu Universitas di Indonesia',
      year: '2018 - 2022',
      gpa: 'IPK: 3.82/4.00 (Cum Laude)',
      icon: 'bi-mortarboard',
      courses: [
        'Manajemen Strategis',
        'Perilaku Konsumen',
        'Statistika Bisnis',
        'Pemasaran Digital',
        'Akuntansi Keuangan',
      ],
      description:
        "Skripsi: 'Dampak Influencer Media Sosial terhadap Keputusan Pembelian Generasi Z' dengan predikat sangat memuaskan",
      activities: ['Wakil Presiden Himpunan Mahasiswa Pemasaran', 'Ketua Tim Kompetisi Kasus'],
    },
    {
      degree: 'Program Ilmu Sosial',
      institution: 'SMA Negeri Jakarta',
      year: '2015 - 2018',
      icon: 'bi-mortarboard',
      gpa: '9.3/10 (Ranking 5 dari 200)',
      courses: ['Ekonomi', 'Sosiologi', 'Geografi', 'Matematika Dasar', 'Bahasa Inggris'],
      description:
        'Aktif dalam organisasi siswa dan kegiatan ekstrakurikuler, termasuk debat dan kepemimpinan dan mendapatkan penghargaan sebagai siswa berprestasi di bidang akademik dan non-akademik',
    },
  ],
  projects: [
    {
      title: 'Strategi Ekspansi Pasar untuk Brand Batik Lokal',
      description:
        'Mengembangkan strategi komprehensif untuk masuknya UKM batik tradisional ke pasar Eropa, termasuk analisis kompetitor, strategi harga, dan saluran distribusi',
      image: 'project1.jpg',
      link: '#',
      tags: ['Riset Pasar', 'Strategi Ekspor', 'Posisi Merek'],
      details: [
        'Melakukan wawancara dengan 50+ calon pelanggan internasional',
        'Membuat proyeksi keuangan untuk 3 tahun pertama operasi',
        'Mempresentasikan kepada pemilik bisnis dan kementerian perdagangan',
      ],
    },
    {
      title: 'Rencana Bisnis Startup: Aplikasi EduFin',
      description:
        'Mengembangkan rencana bisnis lengkap untuk platform edukasi keuangan yang menargetkan profesional muda, termasuk desain MVP, model pendapatan, dan proyeksi keuangan 5 tahun',
      image: 'project2.jpg',
      link: '#',
      tags: ['Rencana Bisnis', 'Pemodelan Keuangan', 'Pitch Deck'],
      details: [
        'Memenangkan juara 2 dalam Kompetisi Rencana Bisnis Universitas',
        'Ditampilkan di majalah kewirausahaan kampus',
        'Membuat prototipe dengan Figma untuk presentasi investor',
      ],
    },
    {
      title: 'Analisis Pemasaran Media Sosial',
      description:
        'Analisis komparatif strategi pemasaran media sosial antara brand F&B lokal dan internasional di pasar Indonesia',
      image: 'project3.jpg',
      link: '#',
      tags: ['Pemasaran Digital', 'Analisis Konten', 'Media Sosial'],
      details: [
        'Menganalisis 200+ posting di 4 platform',
        'Mengembangkan kerangka kerja untuk mengukur efektivitas konten',
        'Mempresentasikan temuan kepada kelas pemasaran 50+ mahasiswa',
      ],
    },
  ],
  awards: [
    {
      title: 'Sertifikasi Pemasaran Digital Google',
      issuer: 'Google Digital Garage',
      date: 'Agustus 2021',
      description: 'Menyelesaikan kursus 40 jam mencakup SEO, SEM, pemasaran konten, dan analitik',
      icon: 'bi-award',
    },
    {
      title: 'Juara 1 Kompetisi Kasus Bisnis Nasional',
      issuer: 'Asosiasi Pemasaran Indonesia',
      date: 'November 2020',
      description:
        'Memenangkan kompetisi melawan 50+ tim dengan solusi inovatif untuk transformasi digital ritel',
      icon: 'bi-trophy',
    },
    {
      title: 'Penghargaan Presenter Terbaik',
      issuer: 'Forum Kewirausahaan Mahasiswa Asia Pasifik',
      date: 'Maret 2020',
      description: 'Diakui karena keterampilan presentasi luar biasa dalam kompetisi regional',
      icon: 'bi-megaphone',
    },
  ],
  certifications: [
    {
      title: 'Analisis Data dengan SPSS',
      issuer: 'Udemy',
      date: 'Mei 2021',
      credential: 'UC-12345678',
      icon: 'bi-file-earmark-bar-graph',
    },
    {
      title: 'Fundamental Bisnis',
      issuer: 'Coursera (University of Pennsylvania)',
      date: 'Desember 2020',
      credential: 'C5G7H9J2K4',
      icon: 'bi-building',
    },
  ],
  languages: [
    {
      language: 'Bahasa Inggris',
      proficiency: 'Fasih',
      level: 'Lanjutan (TOEFL 610)',
    },
    {
      language: 'Bahasa Indonesia',
      proficiency: 'Asli',
      level: '',
    },
    {
      language: 'Bahasa Jepang',
      proficiency: 'Menengah',
      level: 'JLPT N3',
    },
  ],
  interests: [
    'Ekosistem Startup',
    'Transformasi Digital',
    'Riset Pasar',
    'Public Speaking',
    'Fotografi',
  ],
}
