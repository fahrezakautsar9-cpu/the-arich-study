# The Arich Study

Web belajar Matematika dan Fisika dengan materi, latihan interaktif, catatan kesalahan, simulasi, dan cetak PDF. Proyek ini memakai HTML, CSS, dan JavaScript tanpa backend aplikasi.

## Operasional tanpa biaya aplikasi

- Situs dirancang untuk hosting statis seperti GitHub Pages; tidak memerlukan server, database berbayar, atau akun pengguna daring.
- Styling dibuat saat pengembangan, lalu hasil `app.css` disajikan sebagai berkas statis. Jalankan `npm ci` dan `npm run build:css` setelah mengubah kelas Tailwind.
- `node_modules` hanya berisi tooling build; browser tidak memerlukannya.
- Ikon, font, dan renderer matematika masih dimuat dari CDN publik. Service worker menyimpan aset agar kunjungan berikutnya lebih siap digunakan offline.

### Menayangkan lewat GitHub Pages

Repositori publik ini dapat memakai GitHub Pages pada paket GitHub Free. Untuk menerbitkan versi yang sudah di-merge ke `main`:

1. Buka **Settings → Pages** di repositori.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/(root)`, lalu simpan.
4. Tunggu workflow Pages selesai, lalu buka URL yang ditampilkan di halaman Pages.

Panduan resmi: [mengonfigurasi sumber publikasi GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Build Tailwind tetap dilakukan lokal; jangan mengubah kelas Tailwind lalu lupa membangun ulang `app.css`.

## Privasi dan batas fitur

- Nama panggilan, nilai, progres, dan catatan belajar disimpan di `localStorage` pada browser/perangkat yang sedang dipakai. Data tidak disinkronkan antarperangkat.
- Pengguna dapat menghapus data lokal, mengunduh cadangan JSON, atau mengekspor rekap CSV. Cadangan berisi data pribadi dan perlu disimpan dengan aman.
- Penyedia CDN menerima permintaan aset seperti font, ikon, dan KaTeX; profil serta nilai belajar tidak dikirim ke sana.
- PIN Mode Guru hanya menyembunyikan tampilan di sisi browser. Kunci jawaban ada dalam berkas JavaScript publik, sehingga aplikasi ini tidak cocok untuk ujian rahasia, proktor, atau bukti penilaian resmi.
- Sertifikat dan rekap cetak adalah keluaran latihan nonformal, bukan dokumen resmi atau terverifikasi sekolah/lembaga.
- Versi lama pernah memakai Google Apps Script. Menghapus integrasi dari berkas proyek tidak menonaktifkan deployment Google atau menghapus data Sheet yang pernah dibuat; deployment lama perlu dicabut dan data lama perlu ditangani di akun Google yang membuatnya.

## Cakupan belajar

Materi dan bank soal untuk beberapa jenjang SMP–SMA tersedia di folder `data/`, tetapi kelengkapan dan kedalaman tiap kelas/topik berbeda. Kelas 11 merupakan pilot aktif yang menjadi fokus pengembangan; jangan menganggap seluruh kurikulum sudah diaudit atau lengkap.

## Berkas utama

- `index.html`: struktur SPA dan seluruh view.
- `app.js`: alur aplikasi, profil lokal, latihan, rekap, serta backup/restore.
- `features_*.js`: mesin asesmen, materi interaktif, PWA, gamifikasi, dan fitur belajar lainnya.
- `data/`: materi kurikulum dan bank soal yang dikirim ke browser.
- `theme.css`, `print.css`, `app.css`: tema, layout cetak, dan utility CSS terbangun.
- `sw.js`: cache offline aplikasi dan aset pihak ketiga.
- `THE_ARICH_STUDY_MASTER_BLUEPRINT.md`: gambaran arsitektur dan batas keamanan.
