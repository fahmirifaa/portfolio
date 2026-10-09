# Portofolio

Website portofolio responsif berbasis **React + Vite + Tailwind CSS v4**, dengan mode terang/gelap.

## Menjalankan di komputer

```bash
npm install
npm run dev      # buka alamat yang muncul, biasanya http://localhost:5173
```

## Yang perlu Anda edit

1. **`src/data.js`**: seluruh teks website (nama, tentang, keahlian, proyek, riwayat, kontak). Cari tanda `[ ... ]` untuk bagian yang belum terisi.
2. **`public/`**: taruh foto (`foto.jpg`) dan CV (`cv-fahmi.pdf`) di sini, lalu isi nama filenya di `profile.photo` dan `profile.cv`.
3. **`src/index.css`**: bagian atas file berisi warna. Ubah `--brand` untuk mengganti warna aksen.
4. **`index.html`**: ubah `<title>` dan `<meta name="description">`.

## Upload ke GitHub dan online di GitHub Pages

```bash
git init
git add .
git commit -m "Portofolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Lalu di GitHub: **Settings, Pages, Build and deployment, Source: GitHub Actions**.
Setiap kali Anda `git push` ke `main`, website otomatis dibangun dan dipublikasikan
(workflow ada di `.github/workflows/deploy.yml`). Alamatnya: `https://USERNAME.github.io/NAMA-REPO/`.

Hosting alternatif: Vercel atau Netlify (impor repo, perintah build `npm run build`, folder output `dist`).
