/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 9 (FASE D)
 * Modul Lengkap 6 Bab: Teori Terstruktur, Trik Kilat & Pembahasan Bertahap
 */

window.KURMER_KELAS9_DATA = [
  {
    "id": "k9-pangkat-akar",
    "number": "01",
    "title": "Bab 1: Perpangkatan, Bentuk Akar & Notasi Ilmiah",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "zap",
    "summary": "Eksplorasi eksponensial matematika: pelajari sifat-sifat eksponen bulat, pangkat nol dan negatif, operasi penyederhanaan bentuk akar, teknik merasionalkan penyebut pecahan aljabar, hingga penulisan notasi ilmiah ukuran mikroskopis dan astronomis.",
    "subtopics": [
      {
        "title": "1. Hukum Eksponen Bulat & Sifat Pangkat",
        "concept": "Eksponen menyatakan perkalian berulang: $a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ kali}}$.\n\n**Sifat-sifat Mutlak Eksponen:**\n1. $a^m \\times a^n = a^{m+n}$\n2. $\\frac{a^m}{a^n} = a^{m-n}$\n3. $(a^m)^n = a^{m \\times n}$\n4. $(a \\times b)^n = a^n \\times b^n$\n5. $(\\frac{a}{b})^n = \\frac{a^n}{b^n}$\n6. $a^0 = 1$ untuk setiap $a \\ne 0$\n7. $a^{-n} = \\frac{1}{a^n}$ *(Pangkat negatif adalah kebalikan pecahan)*",
        "quickTip": "💡 **Analogi Menara Pangkat:** Pangkat berpangkat $(a^m)^n$ dikalikan ($a^{mn}$), sedangkan perkalian basis sama $a^m \\times a^n$ pangkatnya dijumlahkan ($a^{m+n}$). Jangan sampai tertukar!",
        "exampleProblem": "**Soal:** Sederhanakan bentuk aljabar berikut ke dalam pangkat positif paling sederhana:\n$$\\frac{(2a^3 b^{-2})^3}{4a^{-4} b^5}$$\n\n**Langkah Pembahasan:**\n1. **Uraikan Pangkat di Pembilang:**\n   $$(2a^3 b^{-2})^3 = 2^3 \\cdot (a^3)^3 \\cdot (b^{-2})^3 = 8 a^9 b^{-6}$$\n2. **Bagi dengan Penyebut:**\n   $$\\frac{8 a^9 b^{-6}}{4 a^{-4} b^5} = \\left(\\frac{8}{4}\\right) \\cdot a^{9 - (-4)} \\cdot b^{-6 - 5}$$\n   $$= 2 \\cdot a^{13} \\cdot b^{-11} = \\frac{2a^{13}}{b^{11}}$$\n\n**Hasil Akhir:** $\\frac{2a^{13}}{b^{11}}$."
      },
      {
        "title": "2. Operasi Bentuk Akar & Merasionalkan Penyebut",
        "concept": "Bentuk akar $\\sqrt{a}$ adalah bilangan irasional. Bentuk umum pangkat pecahan: $\\sqrt[n]{a^m} = a^{m/n}$.\n\n**Sifat Bentuk Akar:**\n- $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$\n- $p\\sqrt{c} \\pm q\\sqrt{c} = (p \\pm q)\\sqrt{c}$\n\n**Merasionalkan Penyebut Pecahan Menggunakan Akar Sekawan:**\n1. $\\frac{a}{\\sqrt{b}} = \\frac{a}{\\sqrt{b}} \\times \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$\n2. $\\frac{c}{\\sqrt{a} + \\sqrt{b}} = \\frac{c}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}$",
        "quickTip": "⚡ **Trik Kilat Selisih Kuadrat Bawah:** Penyebut $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})$ SELALU menghasilkan bilangan bulat biasa $(a - b)$ tanpa akar lagi!",
        "exampleProblem": "**Soal:** Rasionalkan penyebut dari pecahan $\\frac{8}{\\sqrt{5} - 1}$!\n\n**Langkah Pembahasan:**\n1. **Kalikan dengan Bentuk Sekawan $(\\sqrt{5} + 1)$:**\n   $$\\frac{8}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{8(\\sqrt{5} + 1)}{(\\sqrt{5})^2 - 1^2}$$\n2. **Sederhanakan Penyebut:**\n   $$= \\frac{8(\\sqrt{5} + 1)}{5 - 1} = \\frac{8(\\sqrt{5} + 1)}{4} = 2(\\sqrt{5} + 1) = 2\\sqrt{5} + 2$$\n\n**Hasil Akhir:** $2\\sqrt{5} + 2$."
      }
    ]
  },
  {
    "id": "k9-persamaan-kuadrat",
    "number": "02",
    "title": "Bab 2: Persamaan Kuadrat & Karakteristik Akar",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "code",
    "summary": "Fondasi aljabar derajat dua: selesaikan persamaan kuadrat melalui pemfaktoran, melengkapkan kuadrat sempurna, dan Rumus Kuadratik ABC, analisis sifat akar lewat Diskriminan (D), serta teorema jumlah dan hasil kali akar Vieta.",
    "subtopics": [
      {
        "title": "1. Metode Pemfaktoran & Rumus Kuadratik ABC",
        "concept": "Bentuk umum persamaan kuadrat: $ax^2 + bx + c = 0, \\; a \\ne 0$.\n\n**Tiga Cara Mencari Akar-Akar:**\n1. **Memfaktorkan:** Cari dua bilangan $p$ dan $q$ sedemikian rupa sehingga $p + q = b$ dan $p \\times q = ac$.\n2. **Rumus Kuadratik (Rumus ABC):** Berlaku mutlak untuk semua jenis persamaan kuadrat:\n   $$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n3. **Melengkapkan Kuadrat Sempurna:** Mengubah bentuk $x^2 + \\frac{b}{a}x$ menjadi $(x + \\frac{b}{2a})^2$.",
        "quickTip": "⚡ **Trik Pemfaktoran $a > 1$:** Untuk $2x^2 + 7x + 3 = 0$, kalikan $a \\times c = 2 \\times 3 = 6$. Cari faktor dari 6 yang jumlahnya 7 $\\implies 6$ dan $1$. Tulis $\\frac{(2x + 6)(2x + 1)}{2} = (x + 3)(2x + 1) = 0$, sehingga $x = -3$ atau $x = -\\frac{1}{2}$!",
        "exampleProblem": "**Soal:** Tentukan akar-akar dari persamaan kuadrat $x^2 - 5x - 14 = 0$!\n\n**Langkah Pembahasan:**\n1. **Cari Dua Bilangan yang Jika Dijumlahkan $= -5$ dan Dikalikan $= -14$:**\n   Bilangan tersebut adalah $-7$ dan $+2$.\n2. **Faktorkan Persamaan:**\n   $$(x - 7)(x + 2) = 0$$\n3. **Tentukan Akar-Akar:**\n   $$x - 7 = 0 \\implies x_1 = 7$$\n   $$x + 2 = 0 \\implies x_2 = -2$$\n\n**Himpunan Penyelesaian:** $\\{-2, 7\\}$."
      },
      {
        "title": "2. Diskriminan ($D$) & Teorema Vieta Akar-Akar",
        "concept": "Nilai Diskriminan: $D = b^2 - 4ac$.\n\n**Sifat Jenis Akar Berdasarkan Nilai $D$:**\n- $D > 0 \\implies$ Memiliki dua akar real yang berbeda.\n- $D = 0 \\implies$ Memiliki dua akar real kembar (sama).\n- $D < 0 \\implies$ Tidak memiliki akar real (akar imajiner / tidak memotong sumbu-$X$).\n\n**Teorema Vieta (Jumlah & Hasil Kali Akar):**\n$$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$$\n**Menyusun Persamaan Kuadrat Baru:** $x^2 - (x_1 + x_2)x + (x_1 \\cdot x_2) = 0$.",
        "quickTip": "⚡ **Trik Jumlah Kuadrat Akar:**\n$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = \\left(-\\frac{b}{a}\\right)^2 - 2\\left(\\frac{c}{a}\\right)$$\nRumus ini sangat sering ditanyakan di ujian tanpa perlu mencari nilai akar satu per satu!",
        "exampleProblem": "**Soal:** Diketahui persamaan $2x^2 - 6x - 8 = 0$ memiliki akar-akar $x_1$ dan $x_2$. Tentukan nilai dari $x_1^2 + x_2^2$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = 2, b = -6, c = -8$.\n2. **Hitung Jumlah dan Hasil Kali Akar:**\n   $$x_1 + x_2 = -\\frac{b}{a} = -\\frac{-6}{2} = 3$$\n   $$x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{-8}{2} = -4$$\n3. **Hitung Jumlah Kuadrat:**\n   $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 3^2 - 2(-4) = 9 + 8 = 17$$\n\n**Jawaban:** Nilai $x_1^2 + x_2^2 = 17$."
      }
    ]
  },
  {
    "id": "k9-fungsi-kuadrat",
    "number": "03",
    "title": "Bab 3: Fungsi Kuadrat & Karakteristik Parabola",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "activity",
    "summary": "Visualisasi kurva parabola $f(x) = ax^2 + bx + c$: pahami arah keterbukaan kurva oleh koefisien a, garis sumbu simetri, koordinat titik puncak optimum, serta pergeseran grafik parabola.",
    "subtopics": [
      {
        "title": "1. Karakteristik Kurva & Titik Puncak Optimum",
        "concept": "Bentuk umum fungsi kuadrat: $f(x) = ax^2 + bx + c$.\n\n**Pengaruh Koefisien:**\n- **Koefisien $a$ (Keterbukaan):**\n  - $a > 0 \\implies$ Parabola terbuka ke atas $\\cup$ (memiliki nilai minimum).\n  - $a < 0 \\implies$ Parabola terbuka ke bawah $\\cap$ (memiliki nilai maksimum).\n- **Sumbu Simetri ($x_p$):** Garis pembagi kurva menjadi dua cermin sempurna:\n  $$x_p = -\\frac{b}{2a}$$\n- **Nilai Optimum ($y_p$):**\n  $$y_p = -\\frac{D}{4a} = -\\frac{b^2 - 4ac}{4a} = f(x_p)$$\n- **Koordinat Titik Puncak (Titik Balik):** $(x_p, y_p) = \\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right)$.",
        "quickTip": "💡 **Trik Subtitusi Titik Puncak:** Daripada menghitung rumus $-D/(4a)$ yang panjang, cukup cari sumbu simetri $x_p = -b/(2a)$, lalu langsung masukkan nilai $x_p$ tersebut ke dalam fungsi $f(x)$ untuk mendapatkan $y_p$!",
        "exampleProblem": "**Soal:** Tentukan sumbu simetri dan koordinat titik puncak dari fungsi kuadrat $f(x) = -x^2 + 4x + 5$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = -1, b = 4, c = 5$. Karena $a < 0$, kurva terbuka ke bawah (memiliki puncak maksimum).\n2. **Hitung Sumbu Simetri ($x_p$):**\n   $$x_p = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = -\\frac{4}{-2} = 2$$\n3. **Hitung Nilai Optimum ($y_p$):**\n   $$y_p = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$\n\n**Jawaban:** Sumbu simetrinya adalah garis $x = 2$ dan koordinat titik puncak maksimumnya adalah $(2, 9)$."
      },
      {
        "title": "2. Masalah Optimasi Maksimum/Minimum dalam Sains",
        "concept": "Banyak fenomena alam dan bisnis berbentuk kurva kuadrat:\n- Ketinggian peluru yang ditembakkan ke udara: $h(t) = v_0 t - \\frac{1}{2}gt^2$.\n- Luas kandang persegi panjang dengan keliling kawat tetap.\n- Laba maksimum penjualan barang.",
        "quickTip": "⚡ **Trik Nilai Optimum:** Setiap kali soal menanyakan kata 'maksimum' atau 'minimum', tujuannya selalu satu: mencari koordinat titik puncak parabola $(x_p, y_p)$!",
        "exampleProblem": "**Soal:** Sebuah roket mainan ditembakkan vertikal ke atas dengan persamaan ketinggian $h(t) = 40t - 5t^2$ (dalam meter, $t$ dalam detik). Tentukan waktu yang dibutuhkan untuk mencapai tinggi maksimum dan tinggi maksimum roket tersebut!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = -5, b = 40, c = 0$.\n2. **Waktu Mencapai Ketinggian Maksimum ($t_{\\text{maks}} = x_p$):**\n   $$t = -\\frac{b}{2a} = -\\frac{40}{2(-5)} = \\frac{-40}{-10} = 4 \\text{ detik}$$\n3. **Hitung Ketinggian Maksimum ($h_{\\text{maks}} = y_p$):**\n   $$h(4) = 40(4) - 5(4)^2 = 160 - 5(16) = 160 - 80 = 80 \\text{ meter}$$\n\n**Jawaban:** Waktu untuk mencapai tinggi maksimum adalah 4 detik dan tinggi maksimumnya adalah 80 meter."
      }
    ]
  },
  {
    "id": "k9-transformasi",
    "number": "04",
    "title": "Bab 4: Transformasi Geometri Bidang",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "refresh-cw",
    "summary": "Geometri gerak dan pemetaan: kuasai Translasi (pergeseran vektor), Refleksi (pencerminan cermin datar), Rotasi (perputaran sudut di pusat O), serta Dilatasi (perbesaran/pengecilan faktor skala k).",
    "subtopics": [
      {
        "title": "1. Translasi (Pergeseran) & Refleksi (Pencerminan)",
        "concept": "1. **Translasi oleh Vektor $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$:**\n   Menambahkan pergeseran horizontal $a$ dan vertikal $b$:\n   $$A(x, y) \\xrightarrow{T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}} A'(x + a, \\; y + b)$$\n\n2. **Keluarga Rumus Refleksi Titik $A(x, y)$:**\n   - Cermin Sumbu-$X$: $A'(x, -y)$\n   - Cermin Sumbu-$Y$: $A'(-x, y)$\n   - Cermin Titik Asal $O(0,0)$: $A'(-x, -y)$\n   - Cermin Garis $y = x$: $A'(y, x)$ *(Tukar posisi)*\n   - Cermin Garis $y = -x$: $A'(-y, -x)$ *(Tukar posisi dan ubah tanda)*\n   - Cermin Garis $x = h$: $A'(2h - x, \\; y)$\n   - Cermin Garis $y = k$: $A'(x, \\; 2k - y)$",
        "quickTip": "⚡ **Trik Refleksi $x=h$ atau $y=k$:** Ingat rumus cermin datar: jarak benda ke cermin sama dengan jarak bayangan ke cermin. Maka koordinat bayangannya selalu 'dua kali posisi cermin dikurangi koordinat asal': $2h - x$!",
        "exampleProblem": "**Soal:** Titik $P(-3, 4)$ ditranslasikan oleh $T = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$, kemudian dicerminkan terhadap garis $y = -x$. Tentukan koordinat bayangan akhir titik $P$!\n\n**Langkah Pembahasan:**\n1. **Translasi Pertama:**\n   $$P' = (-3 + 5, \\; 4 + (-2)) = (2, 2)$$\n2. **Refleksi Terhadap Garis $y = -x$:**\n   Rumus: $(x, y) \\to (-y, -x)$.\n   $$P'' = (-2, -2)$$\n\n**Jawaban:** Koordinat bayangan akhir adalah $(-2, -2)$."
      },
      {
        "title": "2. Rotasi (Perputaran) & Dilatasi (Faktor Skala)",
        "concept": "1. **Rotasi terhadap Pusat $O(0,0)$:**\n   - Rotasi $+90^\\circ$ (berlawanan jarum jam) / $-270^\\circ$: $(x, y) \\to (-y, x)$\n   - Rotasi $+180^\\circ$ / $-180^\\circ$: $(x, y) \\to (-x, -y)$\n   - Rotasi $+270^\\circ$ / $-90^\\circ$ (searah jarum jam): $(x, y) \\to (y, -x)$\n2. **Dilatasi terhadap Pusat $O(0,0)$ dengan Faktor Skala $k$:**\n   $$(x, y) \\xrightarrow{[O, k]} (kx, ky)$$\n   - Jika $|k| > 1$: Bangun diperbesar.\n   - Jika $0 < |k| < 1$: Bangun diperkecil.\n   - Luas bayangan: $L' = k^2 \\times L_{\\text{awal}}$.",
        "quickTip": "⚡ **Trik Luas Dilatasi Kuadratik:** Ingat bahwa luas memiliki dimensi pangkat dua! Jika panjang sisi didilatasi dengan faktor skala $k = 3$, maka luas bangun bertambah $3^2 = 9$ kali lipat!",
        "exampleProblem": "**Soal:** Titik $B(4, -6)$ dirotasikan sebesar $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0,0)$, lalu didilatasikan dengan faktor skala $k = -2$ terhadap pusat yang sama. Tentukan koordinat bayangan akhir titik $B$!\n\n**Langkah Pembahasan:**\n1. **Rotasi $+90^\\circ$ Pusat $O$:**\n   Rumus: $(x, y) \\to (-y, x)$.\n   $$B' = (-(-6), 4) = (6, 4)$$\n2. **Dilatasi $[O, -2]$:**\n   Rumus: $(x', y') \\to (k x', k y')$.\n   $$B'' = (-2 \\times 6, -2 \\times 4) = (-12, -8)$$\n\n**Jawaban:** Koordinat bayangan akhir adalah $(-12, -8)$."
      }
    ]
  },
  {
    "id": "k9-kesebangunan",
    "number": "05",
    "title": "Bab 5: Kekongruenan dan Kesebangunan Bangun Datar",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "copy",
    "summary": "Analisis kemiripan bentuk dan kesamaan ukuran: pahami syarat kekongruenan (sama bentuk dan ukuran) serta kesebangunan (sudut sama, sisi seletak proporsional) dengan aplikasi mengukur tinggi pohon bayangan.",
    "subtopics": [
      {
        "title": "1. Syarat Kekongruenan Dua Bangun",
        "concept": "Dua bangun datar dikatakan **kongruen** ($\\cong$) jika memiliki **bentuk dan ukuran yang persis sama**.\n\n**Syarat Dua Segitiga Kongruen:**\n1. **Sisi - Sisi - Sisi (s - s - s):** Ketiga sisi yang bersesuaian sama panjang.\n2. **Sisi - Sudut - Sisi (s - sd - s):** Dua sisi dan satu sudut yang diapitnya sama besar.\n3. **Sudut - Sisi - Sudut (sd - s - sd):** Dua sudut dan sisi yang diapitnya sama besar.\n4. **Sudut - Sudut - Sisi (sd - sd - s):** Dua sudut dan satu sisi di depannya sama besar.\n5. **Sisi Miring - Sisi Siku-siku:** Khusus segitiga siku-siku.",
        "quickTip": "💡 **Analogi Fotokopi:** Dua bangun kongruen bagaikan dokumen asli dan hasil fotokopinya: ukuran kertas sama, huruf sama persis!",
        "exampleProblem": "**Soal:** Dua segitiga $ABC$ dan $DEF$ kongruen. Diketahui $AB = DE = 8 \\text{ cm}$, $\\angle A = \\angle D = 60^\\circ$, dan $AC = DF = 6 \\text{ cm}$. Berdasarkan kriteria manakah kedua segitiga tersebut dinyatakan kongruen?\n\n**Langkah Pembahasan:**\n1. **Analisis Unsur:**\n   - Sisi $AB = DE$ (sisi)\n   - Sudut $\\angle A = \\angle D$ (sudut yang diapit)\n   - Sisi $AC = DF$ (sisi)\n2. **Kriteria:** Dua sisi yang mengapit satu sudut yang bersesuaian sama besar.\n\n**Jawaban:** Kedua segitiga kongruen berdasarkan kriteria **Sisi - Sudut - Sisi (s - sd - s)**."
      },
      {
        "title": "2. Kesebangunan & Proporsi Sisi Seletak",
        "concept": "Dua bangun dikatakan **sebangun** ($\\sim$) jika:\n1. Sudut-sudut yang bersesuaian sama besar.\n2. Sisi-sisi yang bersesuaian memiliki perbandingan yang senilai:\n   $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k$$\n\n**Rumus Trapesium Terpotong Sejajar:**\n$$EF = \\frac{(AE \\times CD) + (ED \\times AB)}{AE + ED}$$",
        "quickTip": "⚡ **Trik Bayangan Matahari:** Karena sinar matahari datang sejajar, rasio tinggi benda terhadap bayangannya selalu sama: $\\frac{\\text{Tinggi Benda}}{\\text{Panjang Bayangan}} = \\text{Konstan}$!",
        "exampleProblem": "**Soal:** Sebuah tiang bendera yang tingginya 6 meter memiliki bayangan sepanjang 4 meter di atas tanah. Pada saat yang sama, sebuah pohon di dekatnya memiliki panjang bayangan 10 meter. Berapakah tinggi pohon tersebut?\n\n**Langkah Pembahasan:**\n1. **Gunakan Perbandingan Kesebangunan:**\n   $$\\frac{\\text{Tinggi Pohon}}{\\text{Tinggi Tiang}} = \\frac{\\text{Bayangan Pohon}}{\\text{Bayangan Tiang}}$$\n2. **Masukkan Nilai:**\n   $$\\frac{T}{6} = \\frac{10}{4} = 2{,}5$$\n3. **Hitung Tinggi Pohon:**\n   $$T = 6 \\times 2{,}5 = 15 \\text{ meter}$$\n\n**Jawaban:** Tinggi pohon tersebut adalah 15 meter."
      }
    ]
  },
  {
    "id": "k9-brsl",
    "number": "06",
    "title": "Bab 6: Bangun Ruang Sisi Lengkung (BRSL)",
    "badge": "Fase D • SMP Kelas 9",
    "icon": "globe",
    "summary": "Geometri kurva ruang tiga dimensi: pelajari tabung, kerucut, dan bola — kuasai rumus luas selimut, luas permukaan utuh tertutup, dan volume serta efek perubahan jari-jari terhadap kapasitas wadah.",
    "subtopics": [
      {
        "title": "1. Tabung dan Kerucut: Luas Selimut & Volume",
        "concept": "- **Tabung (Silinder):**\n  - Luas Selimut: $L_s = 2\\pi r t$\n  - Luas Permukaan Total: $L = 2\\pi r(r + t)$\n  - Volume: $V = \\pi r^2 t$\n- **Kerucut (Cone):**\n  - Garis Pelukis: $s = \\sqrt{r^2 + t^2}$\n  - Luas Selimut: $L_s = \\pi r s$\n  - Luas Permukaan Total: $L = \\pi r(r + s)$\n  - Volume: $V = \\frac{1}{3}\\pi r^2 t$",
        "quickTip": "💡 **Hubungan 1 Banding 3:** Volume kerucut tepat sepertiga dari volume tabung yang memiliki jari-jari alas dan tinggi yang sama!",
        "exampleProblem": "**Soal:** Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 24 cm. Tentukan luas selimut dan volume kerucut tersebut! (Gunakan $\\pi = \\frac{22}{7}$)\n\n**Langkah Pembahasan:**\n1. **Cari Panjang Garis Pelukis ($s$) dengan Pythagoras:**\n   $$s = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25 \\text{ cm}$$\n2. **Hitung Luas Selimut:**\n   $$L_s = \\pi r s = \\frac{22}{7} \\times 7 \\times 25 = 22 \\times 25 = 550 \\text{ cm}^2$$\n3. **Hitung Volume Kerucut:**\n   $$V = \\frac{1}{3} \\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 24 = \\frac{1}{3} \\times 22 \\times 7 \\times 24 = 22 \\times 7 \\times 8 = 1232 \\text{ cm}^3$$\n\n**Jawaban:** Luas selimut kerucut adalah $550 \\text{ cm}^2$ dan volumenya adalah $1232 \\text{ cm}^3$."
      },
      {
        "title": "2. Geometri Bola Sempurna",
        "concept": "- **Luas Permukaan Bola:** $L = 4\\pi r^2$ *(Tepat sama dengan 4 kali luas lingkaran berpusat sama)*.\n- **Luas Belahan Bola Padat (Hemisfer Pejal):** $L = 3\\pi r^2$.\n- **Volume Bola:** $V = \\frac{4}{3}\\pi r^3$.\n- **Perubahan Skala Jari-jari:** Jika jari-jari diperbesar $k$ kali:\n  - Luas bertambah $k^2$ kali.\n  - Volume bertambah $k^3$ kali.",
        "quickTip": "⚡ **Trik Perbandingan Volume Bola:** Jika jari-jari bola kedua adalah 2 kali jari-jari bola pertama ($r_2 = 2r_1$), volumenya bertambah $2^3 = 8$ kali lipat!",
        "exampleProblem": "**Soal:** Sebuah bola memiliki diameter 14 cm. Tentukan volume bola tersebut! (Gunakan $\\pi = \\frac{22}{7}$)\n\n**Langkah Pembahasan:**\n1. **Jari-jari:** $r = \\frac{14}{2} = 7 \\text{ cm}$.\n2. **Terapkan Rumus Volume:**\n   $$V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 7 = \\frac{4}{3} \\times 22 \\times 49 = \\frac{4312}{3} = 1437\\frac{1}{3} \\text{ cm}^3$$\n\n**Jawaban:** Volume bola adalah $1437\\frac{1}{3} \\text{ cm}^3$."
      }
    ]
  }
];
