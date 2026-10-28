/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 8 (FASE D)
 * Modul Lengkap 10 Bab: Teori Terstruktur, Trik Kilat & Pembahasan Bertahap
 */

window.KURMER_KELAS8_DATA = [
  {
    "id": "k8-pola-bilangan",
    "number": "01",
    "title": "Bab 1: Pola Bilangan, Barisan dan Deret Konkret",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "layers",
    "summary": "Pecahkan keteraturan tersembunyi di alam semesta: pelajari pola bilangan persegi, segitiga, Fibonacci, pola bilangan Pascal, hingga formulasi suku ke-n ($U_n$) dan jumlah suku ($S_n$) barisan aritmatika dan geometri.",
    "subtopics": [
      {
        "title": "1. Ragam Pola Bilangan Geometris & Segitiga Pascal",
        "concept": "Pola bilangan adalah susunan bilangan yang memiliki aturan tertentu yang teratur.\n\n**Ragam Pola Bilangan Khusus:**\n1. **Pola Garis Lurus (Bilangan Asli):** $1, 2, 3, 4, \\dots \\implies U_n = n$\n2. **Pola Persegi (Bilangan Kuadrat):** $1, 4, 9, 16, 25, \\dots \\implies U_n = n^2$\n3. **Pola Segitiga:** $1, 3, 6, 10, 15, \\dots \\implies U_n = \\frac{n(n+1)}{2}$\n4. **Pola Persegi Panjang:** $2, 6, 12, 20, 30, \\dots \\implies U_n = n(n+1)$\n5. **Pola Bilangan Genap:** $2, 4, 6, 8, \\dots \\implies U_n = 2n$\n6. **Pola Bilangan Ganjil:** $1, 3, 5, 7, \\dots \\implies U_n = 2n - 1$\n7. **Segitiga Pascal:** Jumlah angka pada baris ke-$n$ adalah $S_n = 2^{n-1}$.",
        "quickTip": "⚡ **Trik Pola Ganjil:** Jumlah $n$ suku pertama dari bilangan ganjil SELALU sama dengan $n^2$! Misal $1 + 3 + 5 = 9 = 3^2$. Jumlah 50 bilangan ganjil pertama langsung $50^2 = 2500$ dalam 1 detik!",
        "exampleProblem": "**Soal:** Tentukan jumlah bilangan pada baris ke-8 Segitiga Pascal dan tentukan nilai suku ke-15 dari pola bilangan segitiga!\n\n**Langkah Pembahasan:**\n1. **Jumlah Baris ke-8 Segitiga Pascal:**\n   $$S_8 = 2^{8-1} = 2^7 = 128$$\n2. **Suku ke-15 Pola Segitiga:**\n   $$U_{15} = \\frac{15(15+1)}{2} = \\frac{15 \\times 16}{2} = 15 \\times 8 = 120$$\n\n**Jawaban:** Jumlah baris ke-8 Pascal adalah 128 dan suku ke-15 pola segitiga adalah 120."
      },
      {
        "title": "2. Barisan & Deret Aritmatika ($U_n$ dan $S_n$)",
        "concept": "Barisan aritmatika memiliki selisih antar dua suku berurutan yang selalu tetap, dinamakan **beda** ($b = U_n - U_{n-1}$).\n\n**Rumus Suku ke-$n$ ($U_n$):**\n$$U_n = a + (n - 1)b$$\nDengan $a = U_1$ (suku pertama) dan $b$ = beda.\n\n**Rumus Jumlah $n$ Suku Pertama ($S_n$):**\n$$S_n = \\frac{n}{2}(a + U_n) = \\frac{n}{2}(2a + (n - 1)b)$$\n\n**Hubungan Keramat $U_n$ dan $S_n$:**\n$$U_n = S_n - S_{n-1}$$",
        "quickTip": "💡 **Trik Cepat Gauss:** Gauss menemukan bahwa jika kita menjumlahkan barisan aritmatika, pasangkan ujung awal dengan ujung akhir ($a + U_n$). Setiap pasangan bernilai sama, dan terdapat tepat $\\frac{n}{2}$ pasang!",
        "exampleProblem": "**Soal:** Diketahui suku ke-3 suatu barisan aritmatika adalah 11 dan suku ke-8 adalah 31. Tentukan suku ke-20 dan jumlah 20 suku pertama!\n\n**Langkah Pembahasan:**\n1. **Eliminasi Nilai Beda ($b$):**\n   $$U_8 - U_3 = (8 - 3)b \\implies 31 - 11 = 5b \\implies 20 = 5b \\implies b = 4$$\n2. **Cari Suku Pertama ($a$):**\n   $$U_3 = a + 2b \\implies 11 = a + 2(4) \\implies a = 11 - 8 = 3$$\n3. **Hitung Suku ke-20 ($U_{20}$):**\n   $$U_{20} = a + 19b = 3 + 19(4) = 3 + 76 = 79$$\n4. **Hitung Jumlah 20 Suku Pertama ($S_{20}$):**\n   $$S_{20} = \\frac{20}{2}(a + U_{20}) = 10(3 + 79) = 10(82) = 820$$\n\n**Jawaban:** Suku ke-20 adalah 79 dan jumlah 20 suku pertama adalah 820."
      }
    ]
  },
  {
    "id": "k8-koordinat",
    "number": "02",
    "title": "Bab 2: Sistem Koordinat Kartesius & Jarak Titik",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "crosshair",
    "summary": "Peta koordinat René Descartes: tentukan posisi titik di 4 kuadran, posisi relatif terhadap titik acuan $(a, b)$, serta kalkulasi jarak terpendek antara dua titik menggunakan prinsip teorema Pythagoras.",
    "subtopics": [
      {
        "title": "1. Kuadran I-IV & Posisi Relatif Titik Acuan",
        "concept": "Titik pada bidang dinotasikan $(x, y)$ di mana $x$ adalah absis (jarak terhadap sumbu-$Y$) dan $y$ adalah ordinat (jarak terhadap sumbu-$X$).\n\n**Pembagian Empat Kuadran:**\n- **Kuadran I:** $x > 0, y > 0$ *(kanan-atas)*\n- **Kuadran II:** $x < 0, y > 0$ *(kiri-atas)*\n- **Kuadran III:** $x < 0, y < 0$ *(kiri-bawah)*\n- **Kuadran IV:** $x > 0, y < 0$ *(kanan-bawah)*\n\n**Posisi Relatif Titik $P(x_1, y_1)$ Terhadap Titik Acuan $Q(a, b)$:**\n$$P_{\\text{relatif}} = (x_1 - a, \\; y_1 - b)$$",
        "quickTip": "💡 **Analogi Menuju Rumah Teman:** Jika rumah acuan ada di koordinat $(2, 3)$ dan posisi kita ada di $(7, -1)$, maka posisi relatif kita adalah 'berjalan 5 langkah ke kanan dan 4 langkah ke bawah': $(7-2, -1-3) = (5, -4)$!",
        "exampleProblem": "**Soal:** Titik $A$ berada pada koordinat $(-3, 5)$ dan titik $B$ pada koordinat $(4, -2)$. Tentukan posisi titik $A$ relatif terhadap titik acuan $B$!\n\n**Langkah Pembahasan:**\n1. **Gunakan Rumus Posisi Relatif $(x_A - x_B, y_A - y_B)$:**\n   $$x_{\\text{rel}} = -3 - 4 = -7$$\n   $$y_{\\text{rel}} = 5 - (-2) = 5 + 2 = 7$$\n\n**Jawaban:** Posisi titik $A$ relatif terhadap titik $B$ adalah $(-7, 7)$ (7 satuan ke kiri dan 7 satuan ke atas)."
      },
      {
        "title": "2. Jarak Antara Dua Titik (Euclidean Distance)",
        "concept": "Jarak terpendek antara titik $A(x_1, y_1)$ dan titik $B(x_2, y_2)$ diturunkan langsung dari Teorema Pythagoras:\n$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$",
        "quickTip": "⚡ **Trik Tripel Pythagoras Kartesius:** Cari selisih absis $\\Delta x = |x_2 - x_1|$ dan selisih ordinat $\\Delta y = |y_2 - y_1|$. Jika $\\Delta x$ dan $\\Delta y$ membentuk tripel Pythagoras seperti $(3, 4)$, maka jaraknya langsung $5$ tanpa repot menghitung akar panjang!",
        "exampleProblem": "**Soal:** Tentukan jarak antara titik $P(-2, 1)$ dan titik $Q(4, 9)$!\n\n**Langkah Pembahasan:**\n1. **Hitung Selisih Koordinat:**\n   $$\\Delta x = 4 - (-2) = 6$$\n   $$\\Delta y = 9 - 1 = 8$$\n2. **Terapkan Rumus Jarak:**\n   $$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\n**Jawaban:** Jarak antara kedua titik adalah 10 satuan."
      }
    ]
  },
  {
    "id": "k8-relasi-fungsi",
    "number": "03",
    "title": "Bab 3: Relasi dan Fungsi (Pemetaan)",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "git-pull-request",
    "summary": "Pahami jembatan matematika relasi dan fungsi: bedakan relasi biasa dengan pemetaan khusus (fungsi), kuasai konsep Domain, Kodomain, dan Range, serta formula mencari nilai bayangan dan bentuk fungsi linear.",
    "subtopics": [
      {
        "title": "1. Definisi Fungsi & Syarat Pemetaan",
        "concept": "- **Relasi:** Hubungan antara himpunan $A$ dan himpunan $B$.\n- **Fungsi (Pemetaan):** Relasi khusus di mana **setiap anggota himpunan $A$ dipasangkan tepat satu kali** ke anggota himpunan $B$.\n\n**Istilah Penting:**\n- **Domain ($D_f$):** Daerah asal (himpunan $A$).\n- **Kodomain:** Daerah kawan (himpunan $B$).\n- **Range ($R_f$):** Daerah hasil (anggota $B$ yang memiliki pasangan).\n\n**Banyak Pemetaan yang Mungkin:**\nBanyak fungsi yang dapat dibentuk dari himpunan $A$ ke himpunan $B$ adalah:\n$$N = n(B)^{n(A)}$$",
        "quickTip": "💡 **Analogi Murid & Nomor Absen:** Setiap murid di kelas (Domain) HARUS punya tepat satu nomor absen di sekolah (Kodomain). Tidak boleh ada murid tanpa nomor absen, dan tidak boleh ada satu murid punya dua nomor absen!",
        "exampleProblem": "**Soal:** Diketahui himpunan $A = \\{p, q, r\\}$ dan himpunan $B = \\{1, 2\\}$. Tentukan banyaknya pemetaan yang mungkin dari himpunan $A$ ke himpunan $B$ dan dari $B$ ke $A$!\n\n**Langkah Pembahasan:**\n1. **Hitung Jumlah Anggota:**\n   $n(A) = 3$ dan $n(B) = 2$.\n2. **Banyak Pemetaan dari $A$ ke $B$:**\n   $$n(B)^{n(A)} = 2^3 = 8 \\text{ pemetaan}$$\n3. **Banyak Pemetaan dari $B$ ke $A$:**\n   $$n(A)^{n(B)} = 3^2 = 9 \\text{ pemetaan}$$\n\n**Jawaban:** Dari $A$ ke $B$ ada 8 pemetaan, dan dari $B$ ke $A$ ada 9 pemetaan."
      },
      {
        "title": "2. Notasi Fungsi Linear & Mencari Nilai Fungsi",
        "concept": "Fungsi linear dinotasikan dengan $f(x) = ax + b$.\n- Bayangan dari $x$ adalah nilai $f(x)$.\n- Jika nilai fungsi pada dua titik diketahui, kita dapat membentuk sistem persamaan untuk mencari koefisien $a$ dan konstanta $b$.",
        "quickTip": "⚡ **Trik Gradien Fungsi Linear:** Nilai $a$ pada $f(x) = ax + b$ adalah tingkat perubahan: $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$!",
        "exampleProblem": "**Soal:** Diketahui fungsi $f(x) = ax + b$. Jika $f(2) = 7$ dan $f(5) = 16$, tentukan rumus fungsi $f(x)$ dan nilai dari $f(-3)$!\n\n**Langkah Pembahasan:**\n1. **Cari Nilai $a$ Menggunakan Selisih:**\n   $$a = \\frac{f(5) - f(2)}{5 - 2} = \\frac{16 - 7}{3} = \\frac{9}{3} = 3$$\n2. **Cari Nilai $b$:**\n   $$f(2) = 3(2) + b = 7 \\implies 6 + b = 7 \\implies b = 1$$\n   Maka rumus fungsi: $f(x) = 3x + 1$.\n3. **Hitung $f(-3)$:**\n   $$f(-3) = 3(-3) + 1 = -9 + 1 = -8$$\n\n**Jawaban:** Rumus fungsi adalah $f(x) = 3x + 1$ dan $f(-3) = -8$."
      }
    ]
  },
  {
    "id": "k8-pgl",
    "number": "04",
    "title": "Bab 4: Persamaan Garis Lurus & Gradien (Kemiringan)",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "trending-up",
    "summary": "Analisis kemiringan lereng matematika: kuasai pengertian gradien ($m$), pembentukan persamaan garis melalui satu atau dua titik, serta kondisi garis sejajar ($m_1 = m_2$) dan garis saling tegak lurus ($m_1 \\cdot m_2 = -1$).",
    "subtopics": [
      {
        "title": "1. Konsep Gradien Kemiringan Garis ($m$)",
        "concept": "Gradien adalah ukuran kemiringan garis, yaitu rasio perubahan ordinat (vertikal) terhadap perubahan absis (horizontal):\n$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$\n\n**Gradien dari Bentuk Persamaan:**\n1. Bentuk Eksplisit: $y = mx + c \\implies \\text{Gradien} = m$\n2. Bentuk Implisit: $Ax + By + C = 0 \\implies \\text{Gradien } m = -\\frac{A}{B}$",
        "quickTip": "⚡ **Trik Minus A per B:** Untuk persamaan bentuk $3x - 4y + 12 = 0$, langsung ambil $m = -\\frac{A}{B} = -\\frac{3}{-4} = \\frac{3}{4}$ tanpa perlu mengubahnya menjadi bentuk $y = \\dots$!",
        "exampleProblem": "**Soal:** Tentukan gradien garis yang melalui titik $P(2, -3)$ dan $Q(-4, 9)$!\n\n**Langkah Pembahasan:**\n1. **Terapkan Rumus Gradien Dua Titik:**\n   $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - (-3)}{-4 - 2} = \\frac{9 + 3}{-6} = \\frac{12}{-6} = -2$$\n\n**Jawaban:** Gradien garis tersebut adalah $-2$ (garis miring ke kiri)."
      },
      {
        "title": "2. Garis Sejajar & Garis Tegak Lurus",
        "concept": "1. **Dua Garis Sejajar ($g_1 \\parallel g_2$):**\n   Memiliki kemiringan yang sama persis:\n   $$m_1 = m_2$$\n2. **Dua Garis Tegak Lurus ($g_1 \\perp g_2$):**\n   Saling berpotongan membentuk sudut siku-siku $90^\\circ$:\n   $$m_1 \\times m_2 = -1 \\iff m_2 = -\\frac{1}{m_1} \\quad (\\text{Lawan dan Kebalikan})$$",
        "quickTip": "⚡ **Trik Kilat Garis Tegak Lurus:** Jika garis awal $Ax + By = C$, maka garis yang tegak lurus dengannya selalu berbentuk $Bx - Ay = K$ (tukar koefisien dan ubah tanda tengah)!",
        "exampleProblem": "**Soal:** Tentukan persamaan garis yang melalui titik $(3, -2)$ dan tegak lurus dengan garis $2x - 5y + 10 = 0$!\n\n**Langkah Pembahasan:**\n1. **Cari Gradien Garis Pertama ($m_1$):**\n   $$m_1 = -\\frac{A}{B} = -\\frac{2}{-5} = \\frac{2}{5}$$\n2. **Tentukan Gradien Garis Tegak Lurus ($m_2$):**\n   $$m_2 = -\\frac{1}{m_1} = -\\frac{5}{2}$$\n3. **Susun Persamaan Garis Melalui $(3, -2)$:**\n   $$y - y_1 = m(x - x_1) \\implies y - (-2) = -\\frac{5}{2}(x - 3)$$\n   $$y + 2 = -\\frac{5}{2}(x - 3)$$\n   Kalikan kedua ruas dengan $2$:\n   $$2y + 4 = -5(x - 3) = -5x + 15$$\n   $$5x + 2y + 4 - 15 = 0 \\implies 5x + 2y - 11 = 0$$\n\n**Jawaban:** Persamaan garisnya adalah $5x + 2y - 11 = 0$."
      }
    ]
  },
  {
    "id": "k8-spldv",
    "number": "05",
    "title": "Bab 5: Sistem Persamaan Linear Dua Variabel (SPLDV)",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "grid",
    "summary": "Solusi simultan dua variabel peubah: bandingkan metode eliminasi murni, substitusi, metode campuran (gabungan), hingga aturan Determinan Cramer 2x2 yang sangat cepat.",
    "subtopics": [
      {
        "title": "1. Metode Gabungan (Eliminasi-Substitusi)",
        "concept": "Bentuk umum SPLDV:\n$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$\n\n**Langkah Metode Gabungan:**\n1. **Eliminasi:** Samakan koefisien salah satu variabel dengan perkalian silang, lalu kurangkan/jumlahkan persamaan untuk mendapatkan nilai variabel pertama.\n2. **Substitusi:** Masukkan nilai variabel yang telah ditemukan ke salah satu persamaan awal untuk memperoleh nilai variabel kedua.",
        "quickTip": "💡 **Kapan Ditambah vs Dikurang?** Jika koefisien yang disamakan bertanda sama ($+$/$+$ atau $-$/$-$), gunakan operasi **pengurangan**. Jika tandanya berlawanan ($+$/$-$), gunakan operasi **penjumlahan**!",
        "exampleProblem": "**Soal:** Tentukan himpunan penyelesaian dari SPLDV berikut:\n$$\\begin{cases} 3x + 2y = 12 \\\\ 2x - y = 1 \\end{cases}$$\n\n**Langkah Pembahasan:**\n1. **Eliminasi Variabel $y$:**\n   - Kalikan persamaan pertama dengan 1: $3x + 2y = 12$\n   - Kalikan persamaan kedua dengan 2: $4x - 2y = 2$\n   - Jumlahkan kedua persamaan:\n     $$(3x + 4x) + (2y - 2y) = 12 + 2 \\implies 7x = 14 \\implies x = 2$$\n2. **Substitusikan $x = 2$ ke Persamaan Kedua:**\n   $$2(2) - y = 1 \\implies 4 - y = 1 \\implies y = 3$$\n\n**Himpunan Penyelesaian:** $\\{(2, 3)\\}$."
      },
      {
        "title": "2. Pemodelan Soal Cerita Ekonomi & Belanja",
        "concept": "Langkah pemodelan matematika:\n1. Tentukan pemisalan variabel: misal harga 1 buku = $x$, harga 1 pulpen = $y$.\n2. Terjemahkan kalimat soal menjadi dua persamaan linear.\n3. Selesaikan dengan metode gabungan.\n4. Hitung nilai pertanyaan akhir.",
        "quickTip": "⚡ **Trik Jumlah & Selisih Cepat:** Jika $x + y = A$ dan $x - y = B$, maka langsung: $x = \\frac{A + B}{2}$ dan $y = \\frac{A - B}{2}$!",
        "exampleProblem": "**Soal:** Ani membeli 3 buku tulis dan 2 pensil seharga Rp16.500. Di toko yang sama, Budi membeli 2 buku tulis dan 4 pensil seharga Rp19.000. Berapa harga yang harus dibayar Cici jika ia membeli 1 buku tulis dan 3 pensil?\n\n**Langkah Pembahasan:**\n1. **Model Matematika:**\n   Misal buku = $x$ dan pensil = $y$.\n   - $3x + 2y = 16.500$\n   - $2x + 4y = 19.000 \\implies x + 2y = 9.500$ (sederhanakan bagi 2)\n2. **Eliminasi:**\n   Kurangkan persamaan 1 dengan persamaan 2:\n   $$(3x + 2y) - (x + 2y) = 16.500 - 9.500$$\n   $$2x = 7.000 \\implies x = 3.500$$\n3. **Substitusi Mencari $y$:**\n   $$3.500 + 2y = 9.500 \\implies 2y = 6.000 \\implies y = 3.000$$\n4. **Hitung Pesanan Cici ($x + 3y$):**\n   $$1(3.500) + 3(3.000) = 3.500 + 9.000 = \\text{Rp12.500}$$\n\n**Jawaban:** Cici harus membayar Rp12.500."
      }
    ]
  },
  {
    "id": "k8-pythagoras",
    "number": "06",
    "title": "Bab 6: Teorema Pythagoras & Segitiga Istimewa",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "triangle",
    "summary": "Pilar geometri tertua dan terpenting: pahami pembuktian visual luas bujursangkar Pythagoras, identifikasi jenis segitiga via uji kuadrat sisi, kuasai 4 keluarga Tripel Pythagoras sakti, serta perbandingan sisi segitiga sudut istimewa 30-60-90 dan 45-45-90 derajat.",
    "subtopics": [
      {
        "title": "1. Teorema Pythagoras & 4 Keluarga Tripel Sakti",
        "concept": "Pada segitiga siku-siku dengan sisi penyiku $a, b$ dan sisi miring (*hipotenusa*) $c$:\n$$a^2 + b^2 = c^2$$\n\n**Uji Kebalikan Pythagoras untuk Menentukan Jenis Segitiga:**\nJika $c$ adalah sisi terpanjang:\n1. $a^2 + b^2 = c^2 \\implies$ **Segitiga Siku-Siku**\n2. $a^2 + b^2 > c^2 \\implies$ **Segitiga Lancip**\n3. $a^2 + b^2 < c^2 \\implies$ **Segitiga Tumpul**\n\n**4 Keluarga Tripel Pythagoras Utama (Hafalan Sakti):**\n1. **(3, 4, 5)** dan kelipatannya: $(6, 8, 10), (9, 12, 15), (15, 20, 25)$\n2. **(5, 12, 13)** dan kelipatannya: $(10, 24, 26)$\n3. **(7, 24, 25)**\n4. **(8, 15, 17)**",
        "quickTip": "⚡ **Trik Hafalan Cepat:** Ujian sekolah dan ujian nasional 90% menggunakan 4 keluarga tripel ini! Cukup periksa apakah sisi-sisi yang diketahui merupakan kelipatan dari $(3, 4, 5)$ atau $(5, 12, 13)$!",
        "exampleProblem": "**Soal:** Sebuah tangga yang panjangnya 2,5 meter disandarkan pada dinding tembok. Jika jarak ujung bawah tangga ke dinding adalah 0,7 meter, berapakah tinggi dinding yang dicapai oleh tangga tersebut?\n\n**Langkah Pembahasan:**\n1. **Modelkan Segitiga Siku-Siku:**\n   Hipotenusa $c = 2{,}5 \\text{ m}$, sisi alas $a = 0{,}7 \\text{ m}$, tinggi $t = ?$\n2. **Terapkan Teorema Pythagoras:**\n   $$t^2 = c^2 - a^2 = (2{,}5)^2 - (0{,}7)^2 = 6{,}25 - 0{,}49 = 5{,}76$$\n   $$t = \\sqrt{5{,}76} = 2{,}4 \\text{ meter}$$\n   *(Perhatikan bahwa angka $7, 24, 25$ adalah keluarga Tripel Pythagoras ketiga!)*\n\n**Jawaban:** Tinggi dinding yang dicapai tangga adalah 2,4 meter."
      },
      {
        "title": "2. Segitiga Istimewa Sudut $30^\\circ-60^\\circ-90^\\circ$ dan $45^\\circ-45^\\circ-90^\\circ$",
        "concept": "1. **Segitiga Siku-Siku Sama Kaki ($45^\\circ - 45^\\circ - 90^\\circ$):**\n   Perbandingan sisi: $1 : 1 : \\sqrt{2}$.\n   $$c = s\\sqrt{2}$$\n2. **Segitiga Sudut $30^\\circ - 60^\\circ - 90^\\circ$ (Setengah Segitiga Sama Sisi):**\n   Perbandingan sisi di depan sudut $30^\\circ : 60^\\circ : 90^\\circ$ adalah:\n   $$1 : \\sqrt{3} : 2$$\n   Sisi di depan sudut $30^\\circ$ selalu tepat **setengah dari sisi miring**!",
        "quickTip": "💡 **Pondasi Trigonometri:** Menguasai perbandingan segitiga istimewa ini adalah kunci emas memahami nilai Sinus, Cosinus, dan Tangen sudut istimewa di SMA!",
        "exampleProblem": "**Soal:** Sebuah segitiga siku-siku memiliki salah satu sudut $30^\\circ$. Jika panjang sisi miringnya adalah 16 cm, tentukan panjang sisi di depan sudut $30^\\circ$ dan sisi di depan sudut $60^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Gunakan Rasio $1 : \\sqrt{3} : 2$:**\n   - Sisi miring (rasio 2) = $16 \\text{ cm}$.\n   - Sisi di depan $30^\\circ$ (rasio 1) = $\\frac{1}{2} \\times 16 = 8 \\text{ cm}$.\n   - Sisi di depan $60^\\circ$ (rasio $\\sqrt{3}$) = $8\\sqrt{3} \\text{ cm}$.\n\n**Jawaban:** Panjang sisi di depan sudut $30^\\circ$ adalah 8 cm dan di depan sudut $60^\\circ$ adalah $8\\sqrt{3}$ cm."
      }
    ]
  },
  {
    "id": "k8-lingkaran",
    "number": "07",
    "title": "Bab 7: Geometri Lingkaran & Garis Singgung",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "circle",
    "summary": "Selami geometri kurva sempurna: hitung busur, juring, tembereng, kuasai teorema hubungan sudut pusat dan sudut keliling menghadap busur sama, serta garis singgung persekutuan dalam (GSPD) dan luar (GSPL).",
    "subtopics": [
      {
        "title": "1. Sudut Pusat, Sudut Keliling & Hubungan Busur-Juring",
        "concept": "- **Sudut Pusat:** Sudut yang titik sudutnya berada di pusat lingkaran.\n- **Sudut Keliling:** Sudut yang titik sudutnya berada pada keliling lingkaran.\n\n**Teorema Keramat Sudut Lingkaran:**\nJika sudut pusat dan sudut keliling menghadap busur yang sama persis, maka:\n$$\\text{Sudut Pusat} = 2 \\times \\text{Sudut Keliling}$$\n\n**Konsekuensi Penting:**\n1. Semua sudut keliling yang menghadap busur yang sama besarnya **pasti sama**.\n2. Sudut keliling yang menghadap **diameter lingkaran** SELALU merupakan sudut siku-siku ($90^\\circ$)!\n\n**Panjang Busur & Luas Juring:**\n$$\\text{Panjang Busur} = \\frac{\\alpha}{360^\\circ} \\times 2\\pi r, \\quad \\text{Luas Juring} = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$$",
        "quickTip": "💡 **Ingat:** Pusat itu 'besar' (dua kali lipat), sedangkan keliling itu 'kecil' (setengahnya)!",
        "exampleProblem": "**Soal:** Pada suatu lingkaran, sudut keliling $\\angle ABC$ menghadap busur $AC$. Jika besar sudut pusat $\\angle AOC = 110^\\circ$, berapakah besar sudut keliling $\\angle ABC$?\n\n**Langkah Pembahasan:**\n1. **Gunakan Teorema Sudut Keliling = Setengah Sudut Pusat:**\n   $$\\angle ABC = \\frac{1}{2} \\times \\angle AOC = \\frac{1}{2} \\times 110^\\circ = 55^\\circ$$\n\n**Jawaban:** Besar $\\angle ABC$ adalah $55^\\circ$."
      },
      {
        "title": "2. Garis Singgung Persekutuan Dua Lingkaran (GSPD & GSPL)",
        "concept": "Misalkan jarak kedua titik pusat lingkaran adalah $p$, jari-jari lingkaran besar $R$, dan jari-jari lingkaran kecil $r$.\n\n1. **Garis Singgung Persekutuan Luar (GSPL):**\n   $$l = \\sqrt{p^2 - (R - r)^2}$$\n2. **Garis Singgung Persekutuan Dalam (GSPD):**\n   $$d = \\sqrt{p^2 - (R + r)^2}$$",
        "quickTip": "⚡ **Jembatan Keledai Tanda Operasi:**\n- Luar $\\implies$ Kurang: $(R - r)$\n- Dalam $\\implies$ Tambah: $(R + r)$\nKeduanya menggunakan pengurangan terhadap kuadrat jarak pusat ($p^2$) di dalam akar Pythagoras!",
        "exampleProblem": "**Soal:** Dua buah lingkaran memiliki jari-jari masing-masing 7 cm dan 2 cm. Jarak antara kedua pusat lingkaran adalah 13 cm. Tentukan panjang garis singgung persekutuan luar (GSPL) kedua lingkaran tersebut!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $R = 7$, $r = 2$, $p = 13$.\n2. **Terapkan Rumus GSPL:**\n   $$l = \\sqrt{p^2 - (R - r)^2} = \\sqrt{13^2 - (7 - 2)^2} = \\sqrt{169 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ cm}$$\n\n**Jawaban:** Panjang garis singgung persekutuan luar adalah 12 cm."
      }
    ]
  },
  {
    "id": "k8-brsd",
    "number": "08",
    "title": "Bab 8: Bangun Ruang Sisi Datar (BRSD)",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "box",
    "summary": "Geometri tiga dimensi sisi datar: kuasai sifat, jaring-jaring, luas permukaan, dan volume kubus, balok, prisma segitiga/segi-n, serta limas tegak, lengkap dengan kalkulasi diagonal bidang dan diagonal ruang.",
    "subtopics": [
      {
        "title": "1. Kubus dan Balok: Volume, Luas & Diagonal Ruang",
        "concept": "- **Kubus (Sisi $s$):**\n  - Luas Permukaan: $L = 6s^2$\n  - Volume: $V = s^3$\n  - Diagonal Bidang: $d_b = s\\sqrt{2}$\n  - Diagonal Ruang: $d_r = s\\sqrt{3}$\n- **Balok ($p, l, t$):**\n  - Luas Permukaan: $L = 2(pl + pt + lt)$\n  - Volume: $V = p \\times l \\times t$\n  - Diagonal Ruang: $d_r = \\sqrt{p^2 + l^2 + t^2}$",
        "quickTip": "⚡ **Trik Kawat Kerangka:** Panjang kawat yang dibutuhkan untuk membuat 1 kerangka kubus adalah $12s$, dan untuk 1 balok adalah $4(p + l + t)$!",
        "exampleProblem": "**Soal:** Sebuah balok berukuran panjang 12 cm, lebar 9 cm, dan tinggi 8 cm. Tentukan panjang diagonal ruang balok tersebut!\n\n**Langkah Pembahasan:**\n1. **Terapkan Rumus Diagonal Ruang Balok:**\n   $$d_r = \\sqrt{12^2 + 9^2 + 8^2} = \\sqrt{144 + 81 + 64} = \\sqrt{289} = 17 \\text{ cm}$$\n\n**Jawaban:** Panjang diagonal ruang balok adalah 17 cm."
      },
      {
        "title": "2. Prisma dan Limas: Konsep Luas & Sepertiga Volume",
        "concept": "- **Prisma:** Bangun ruang yang memiliki alas dan tutup kongruen sejajar.\n  $$V = \\text{Luas Alas} \\times t$$\n  $$L = 2 \\times \\text{Luas Alas} + (\\text{Keliling Alas} \\times t)$$\n- **Limas:** Bangun ruang dengan alas segi-$n$ dan satu titik puncak lancip.\n  $$V = \\frac{1}{3} \\times \\text{Luas Alas} \\times t$$\n  $$L = \\text{Luas Alas} + \\sum \\text{Luas Sisi Tegak}$$\n\n*Catatan: Volume limas tepat sepertiga dari volume prisma yang memiliki alas dan tinggi yang sama.*",
        "quickTip": "💡 **Awas Tinggi Limas vs Tinggi Sisi Tegak:** Tinggi limas adalah garis tegak lurus dari puncak ke pusat alas, sedangkan tinggi segitiga sisi tegak berada di selimut miring. Gunakan Pythagoras untuk menghubungkan keduanya!",
        "exampleProblem": "**Soal:** Sebuah limas memiliki alas berbentuk persegi dengan panjang sisi 10 cm. Jika tinggi limas adalah 12 cm, tentukan luas permukaan limas tersebut!\n\n**Langkah Pembahasan:**\n1. **Cari Tinggi Segitiga Sisi Tegak ($t_s$):**\n   Jarak pusat alas ke sisi = $\\frac{10}{2} = 5 \\text{ cm}$.\n   $$t_s = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13 \\text{ cm}$$\n2. **Hitung Luas Alas:**\n   $$L_{\\text{alas}} = 10 \\times 10 = 100 \\text{ cm}^2$$\n3. **Hitung Luas 4 Sisi Tegak Segitiga:**\n   $$L_{\\text{tegak}} = 4 \\times (\\frac{1}{2} \\times 10 \\times 13) = 4 \\times 65 = 260 \\text{ cm}^2$$\n4. **Luas Permukaan Total:**\n   $$L = 100 + 260 = 360 \\text{ cm}^2$$\n\n**Jawaban:** Luas permukaan limas adalah $360 \\text{ cm}^2$."
      }
    ]
  },
  {
    "id": "k8-statistika",
    "number": "09",
    "title": "Bab 9: Statistika Pemusatan & Letak Data SMP",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "activity",
    "summary": "Karakterisasi distribusi data: hitung Mean (rata-rata hitung), Median (nilai tengah posisi), Modus (frekuensi terbanyak), Jangkauan (Range), serta Kuartil Bawah ($Q_1$), Tengah ($Q_2$), dan Atas ($Q_3$).",
    "subtopics": [
      {
        "title": "1. Mean, Median dan Modus Data Tunggal",
        "concept": "1. **Mean (Rata-rata Hitung $\\bar{x}$):**\n   $$\\bar{x} = \\frac{\\sum x_i}{n} = \\frac{\\sum f_i x_i}{\\sum f_i}$$\n2. **Median ($Me$):** Nilai tengah data yang **telah diurutkan dari terkecil ke terbesar**.\n   - Jika $n$ ganjil: $Me = x_{(n+1)/2}$\n   - Jika $n$ genap: $Me = \\frac{x_{n/2} + x_{(n/2)+1}}{2}$\n3. **Modus ($Mo$):** Nilai data yang paling sering muncul (memiliki frekuensi tertinggi).",
        "quickTip": "⚡ **Trik Rata-rata Gabungan:**\n$$\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$\nSering keluar dalam soal: 'nilai rata-rata 30 siswa bertambah setelah 2 orang siswa susulan masuk'!",
        "exampleProblem": "**Soal:** Nilai rata-rata ulangan matematika 29 siswa adalah 75. Jika seorang siswa susulan bernama Budi nilainya digabungkan, nilai rata-rata kelas menjadi 75,5. Berapakah nilai ulangan matematika Budi?\n\n**Langkah Pembahasan:**\n1. **Gunakan Rumus Jumlah Nilai:**\n   - Total nilai 29 siswa = $29 \\times 75 = 2175$.\n   - Total nilai 30 siswa (setelah Budi masuk) = $30 \\times 75{,}5 = 2265$.\n2. **Hitung Nilai Budi:**\n   $$\\text{Nilai Budi} = 2265 - 2175 = 90$$\n\n**Jawaban:** Nilai ulangan matematika Budi adalah 90."
      },
      {
        "title": "2. Jangkauan & Kuartil ($Q_1, Q_2, Q_3$)",
        "concept": "- **Jangkauan (Range):** Selisih data maksimum dan data minimum: $R = X_{\\max} - X_{\\min}$.\n- **Kuartil:** Tiga titik nilai yang membagi data terurut menjadi 4 bagian sama besar:\n  - $Q_1$ (Kuartil Bawah / 25%)\n  - $Q_2$ (Kuartil Tengah / Median / 50%)\n  - $Q_3$ (Kuartil Atas / 75%)\n- **Jangkauan Interkuartil (Hamparan $H$):** $H = Q_3 - Q_1$.\n- **Simpangan Kuartil ($Q_d$):** $Q_d = \\frac{1}{2}(Q_3 - Q_1)$.",
        "quickTip": "💡 **Langkah Mudah Kuartil:** Cari Median ($Q_2$) terlebih dahulu untuk membelah data menjadi dua paruh (kiri dan kanan). $Q_1$ adalah median dari paruh kiri, dan $Q_3$ adalah median dari paruh kanan!",
        "exampleProblem": "**Soal:** Tentukan $Q_1, Q_2, Q_3$, dan jangkauan interkuartil dari data: 4, 5, 5, 6, 7, 8, 8, 9, 10!\n\n**Langkah Pembahasan:**\n1. **Data Sudah Terurut (9 data, ganjil):**\n   $4, 5, 5, 6, \\mathbf{7}, 8, 8, 9, 10$\n2. **Kuartil Tengah ($Q_2$):** Data ke-5 $\\implies Q_2 = 7$.\n3. **Paruh Kiri:** $\\{4, 5, 5, 6\\} \\implies Q_1 = \\frac{5 + 5}{2} = 5$.\n4. **Paruh Kanan:** $\\{8, 8, 9, 10\\} \\implies Q_3 = \\frac{8 + 9}{2} = 8{,}5$.\n5. **Jangkauan Interkuartil ($H$):**\n   $$H = Q_3 - Q_1 = 8{,}5 - 5 = 3{,}5$$\n\n**Jawaban:** $Q_1 = 5$, $Q_2 = 7$, $Q_3 = 8{,}5$, dan Jangkauan Interkuartil = $3{,}5$."
      }
    ]
  },
  {
    "id": "k8-peluang",
    "number": "10",
    "title": "Bab 10: Teori Peluang Teoretik & Frekuensi Harapan",
    "badge": "Fase D • SMP Kelas 8",
    "icon": "disc",
    "summary": "Prediksi kepastian dalam ketidakpastian: pahami konsep ruang sampel ($S$), titik sampel, peluang teoretik kejadian tunggal, komplemen suatu kejadian, serta frekuensi harapan dalam percobaan berulang.",
    "subtopics": [
      {
        "title": "1. Ruang Sampel & Peluang Teoretik $P(A)$",
        "concept": "- **Ruang Sampel ($S$):** Himpunan semua hasil yang mungkin dari suatu percobaan acak.\n- **Banyak Anggota Ruang Sampel $n(S)$:**\n  - 1 koin: $\\{A, G\\} \\implies n(S) = 2^1 = 2$\n  - $k$ koin: $n(S) = 2^k$\n  - 1 dadu: $\\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$\n  - 2 dadu: $n(S) = 6^2 = 36$\n\n**Rumus Peluang Teoretik:**\n$$P(A) = \\frac{n(A)}{n(S)}, \\quad 0 \\le P(A) \\le 1$$\n- $P(A) = 0 \\implies$ Kejadian mustahil (contoh: muncul mata dadu 7).\n- $P(A) = 1 \\implies$ Kejadian pasti terjadi (contoh: matahari terbit dari timur).\n\n**Peluang Komplemen:** $P(A') = 1 - P(A)$.",
        "quickTip": "⚡ **Trik Jumlah Dua Dadu:** Nilai jumlah dua dadu berkisar dari 2 sampai 12. Jumlah yang paling sering muncul adalah **7** (ada 6 kemungkinan: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1, sehingga peluangnya $\\frac{6}{36} = \\frac{1}{6}$)!",
        "exampleProblem": "**Soal:** Dua buah dadu dilempar bersamaan sebanyak satu kali. Tentukan peluang munculnya mata dadu berjumlah prima!\n\n**Langkah Pembahasan:**\n1. **Total Ruang Sampel 2 Dadu:** $n(S) = 36$.\n2. **Bilangan Prima Antara 2 dan 12 Adalah:** $2, 3, 5, 7, 11$.\n3. **Daftar Pasangan yang Menghasilkan Angka Prima:**\n   - Jumlah 2: $(1,1) \\implies 1$\n   - Jumlah 3: $(1,2), (2,1) \\implies 2$\n   - Jumlah 5: $(1,4), (2,3), (3,2), (4,1) \\implies 4$\n   - Jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies 6$\n   - Jumlah 11: $(5,6), (6,5) \\implies 2$\n   Total $n(A) = 1 + 2 + 4 + 6 + 2 = 15$.\n4. **Hitung Peluang:**\n   $$P(A) = \\frac{15}{36} = \\frac{5}{12}$$\n\n**Jawaban:** Peluang muncul mata dadu berjumlah prima adalah $\\frac{5}{12}$."
      },
      {
        "title": "2. Frekuensi Harapan dalam Percobaan Berulang",
        "concept": "Frekuensi harapan ($F_h$) adalah taksiran banyaknya kejadian yang diharapkan terjadi dalam $N$ kali percobaan acak:\n$$F_h(A) = P(A) \\times N$$",
        "quickTip": "💡 **Aplikasi Real Estat & Asuransi:** Konsep frekuensi harapan adalah fondasi industri aktuaria dan asuransi untuk menghitung klaim risiko tahunan!",
        "exampleProblem": "**Soal:** Tiga keping uang logam dilempar bersama-sama sebanyak 160 kali. Tentukan frekuensi harapan munculnya paling sedikit dua sisi gambar!\n\n**Langkah Pembahasan:**\n1. **Ruang Sampel 3 Koin:** $n(S) = 2^3 = 8$.\n   $S = \\{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG\\}$.\n2. **Kejadian $A$ (Paling Sedikit Dua Gambar $\\implies$ 2 atau 3 Gambar):**\n   $A = \\{AGG, GAG, GGA, GGG\\} \\implies n(A) = 4$.\n3. **Hitung Peluang:**\n   $$P(A) = \\frac{4}{8} = \\frac{1}{2}$$\n4. **Hitung Frekuensi Harapan untuk $N = 160$:**\n   $$F_h(A) = \\frac{1}{2} \\times 160 = 80 \\text{ kali}$$\n\n**Jawaban:** Frekuensi harapan muncul paling sedikit dua gambar adalah 80 kali."
      }
    ]
  }
];
