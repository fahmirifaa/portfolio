// ============================================================
//  SEMUA ISI WEBSITE ADA DI FILE INI.
//  Cari tanda [ ... ] untuk bagian yang masih harus Anda isi.
// ============================================================

export const profile = {
  name: "Ahmad Fahmirifa Fahrurozi",
  shortName: "Fahmi",
  headline: "Fahmi meneliti machine learning untuk citra medis.",
  intro:
    "Mahasiswa Fakultas Sains dan Teknologi UIN Sultan Maulana Hasanuddin Banten. Saya mereplikasi paper, menulis jurnal, dan membangun website.",
  location: "Banten, Indonesia",
  email: "emailkamu@example.com", // [ganti dengan email Anda]
  github: "https://github.com/username", // [ganti dengan akun GitHub Anda]
  linkedin: "https://www.linkedin.com/in/username", // [ganti, atau kosongkan "" agar disembunyikan]
  cv: "", // contoh: "cv-fahmi.pdf" (taruh file di folder public/). Kosongkan jika tidak ada.
  photo: "", // contoh: "foto.jpg" (taruh file di folder public/). Kosongkan jika tidak ada.
  figureCaption: "Gambar 1. Ilustrasi peta aktivasi pada irisan citra medis (dekoratif).",
};

export const nav = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Riwayat", href: "#journey" },
  { label: "Kontak", href: "#contact" },
];

export const about = {
  paragraphs: [
    "Saya tertarik pada machine learning, terutama untuk citra medis: dari klasifikasi tumor otak sampai kompresi citra mamografi.",
    "Cara kerja saya: membaca paper, mereplikasi metodenya, lalu menuliskan hasilnya dalam laporan, presentasi, dan jurnal. Di luar riset, saya membangun website dengan React.",
    "[Tambahkan cerita singkat: motivasi, minat, atau target karier Anda.]",
  ],
  facts: [
    { label: "Kampus", value: "UIN Sultan Maulana Hasanuddin Banten" },
    { label: "Fakultas", value: "Sains dan Teknologi" },
    { label: "Fokus", value: "Machine learning dan citra medis" },
    { label: "Bahasa", value: "Indonesia dan Inggris" },
  ],
};

export const skillGroups = [
  {
    title: "Machine learning",
    items: [
      "Convolutional neural network",
      "ResNet dan EfficientNet",
      "Autoencoder",
      "Prediksi churn dan segmentasi",
      "Replikasi paper",
    ],
  },
  {
    title: "Citra medis",
    items: ["Klasifikasi tumor otak", "Kompresi citra mamografi", "Penulisan paper jurnal"],
  },
  {
    title: "Web",
    items: ["React dan Vite", "Tailwind CSS", "Node.js dan Express", "MySQL dan Prisma"],
  },
  {
    title: "Alat",
    items: ["Python", "Jupyter Notebook", "Git dan GitHub"],
  },
];

export const categories = [
  { id: "all", label: "Semua" },
  { id: "ml", label: "Machine learning" },
  { id: "web", label: "Web" },
];

// Kosongkan "github" atau "demo" (dengan "") jika tidak ada. Tombolnya otomatis hilang.
export const projects = [
  {
    title: "Klasifikasi tumor otak dengan ResNet34",
    type: "Replikasi paper",
    category: "ml",
    description:
      "Replikasi penelitian Shahin (2025) yang mengklasifikasikan tumor otak menggunakan arsitektur ResNet34.",
    tags: ["ResNet34", "Deep learning", "Citra medis"],
    github: "",
    demo: "",
  },
  {
    title: "Kompresi citra mamografi near-lossless",
    type: "Paper jurnal",
    category: "ml",
    description:
      "Penelitian dan penulisan paper jurnal tentang kompresi citra mamografi dengan kualitas near-lossless.",
    tags: ["Citra medis", "Kompresi citra", "Paper jurnal"],
    github: "",
    demo: "",
  },
  {
    title: "Klasifikasi penyakit tanaman",
    type: "Proyek UAS",
    category: "ml",
    description: "Klasifikasi penyakit tanaman pada dataset PlantVillage menggunakan EfficientNetB0.",
    tags: ["EfficientNetB0", "PlantVillage", "Deep learning"],
    github: "",
    demo: "",
  },
  {
    title: "Prediksi churn dan segmentasi pelanggan telekomunikasi",
    type: "Replikasi paper",
    category: "ml",
    description:
      "Replikasi kerangka kerja Wu dkk. (2021) yang menggabungkan prediksi churn dan segmentasi pelanggan pada dataset IBM Telco.",
    tags: ["Churn", "Segmentasi", "IBM Telco"],
    github: "",
    demo: "",
  },
  {
    title: "Deteksi penipuan kartu kredit dengan autoencoder",
    type: "Replikasi paper",
    category: "ml",
    description:
      "Replikasi penelitian Lin dan Jiang (2021) tentang deteksi penipuan kartu kredit menggunakan autoencoder.",
    tags: ["Autoencoder", "Unsupervised learning", "Anomaly detection"],
    github: "",
    demo: "",
  },
  {
    title: "Website company profile Dewa Tirta Lestari",
    type: "Proyek web",
    category: "web",
    description:
      "Website company profile untuk depot air minum, dibangun full stack dengan React, Vite, Express, MySQL, dan Prisma.",
    tags: ["React", "Vite", "Express", "MySQL", "Prisma"],
    github: "",
    demo: "",
  },
];

export const timeline = [
  {
    title: "Mahasiswa, UIN Sultan Maulana Hasanuddin Banten",
    period: "[Tahun masuk] sampai sekarang",
    description: "Fakultas Sains dan Teknologi. [Isi program studi dan fokus perkuliahan.]",
  },
  {
    title: "Co-author penelitian machine learning dan citra medis",
    period: "[Isi periode]",
    description:
      "Terlibat dalam riset kolaboratif, termasuk replikasi paper klasifikasi tumor otak dan penulisan paper kompresi citra mamografi.",
  },
  {
    title: "[Pengalaman, organisasi, magang, atau sertifikasi lain]",
    period: "[Isi periode]",
    description: "[Isi deskripsi singkat, atau hapus blok ini.]",
  },
];
