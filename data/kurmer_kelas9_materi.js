/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 9 (FASE D)
 * Dilengkapi Visualisasi Konsep & Bedah Diagram Multi-Panel
 */

const KURMER_KELAS9_DATA = [
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
        "exampleProblem": "**Soal:** Sederhanakan bentuk aljabar berikut ke dalam pangkat positif paling sederhana:\n$$\\frac{(2a^3 b^{-2})^3}{4a^{-4} b^5}$$\n\n**Langkah Pembahasan:**\n1. **Uraikan Pangkat di Pembilang:**\n   $$(2a^3 b^{-2})^3 = 2^3 \\cdot (a^3)^3 \\cdot (b^{-2})^3 = 8 a^9 b^{-6}$$\n2. **Bagi dengan Penyebut:**\n   $$\\frac{8 a^9 b^{-6}}{4 a^{-4} b^5} = \\left(\\frac{8}{4}\\right) \\cdot a^{9 - (-4)} \\cdot b^{-6 - 5}$$\n   $$= 2 \\cdot a^{13} \\cdot b^{-11} = \\frac{2a^{13}}{b^{11}}$$\n\n**Hasil Akhir:** $\\frac{2a^{13}}{b^{11}}$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-pangkat-akar_0.svg",
          "title": "Hukum Eksponen Pokok & Tangga Pembagian Pangkat Nol",
          "caption": "Empat relasi aljabar eksponen, bukti visual pembagian bertingkat a^0 = 1 dan a^-n = 1/a^n, serta format standar notasi ilmiah.",
          "guide": [
            "Panel kiri merangkum empat operasi dasar eksponen: perkalian basis sama (pangkat ditambah), pembagian (pangkat dikurang), dan pemangkatan bertingkat (pangkat dikali).",
            "Panel kanan mendemonstrasikan tangga pembagian konsisten dengan pembagi 2 yang membuktikan secara logis mengapa bilangan dipangkatkan nol selalu menghasilkan 1.",
            "Bagian bawah memaparkan aturan konversi notasi ilmiah baku a x 10^n dengan syarat 1 <= a < 10 untuk penulisan bilangan makro dan mikro."
          ]
        }
      },
      {
        "title": "2. Operasi Bentuk Akar & Merasionalkan Penyebut",
        "concept": "Bentuk akar $\\sqrt{a}$ adalah bilangan irasional. Bentuk umum pangkat pecahan: $\\sqrt[n]{a^m} = a^{m/n}$.\n\n**Sifat Bentuk Akar:**\n- $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$\n- $p\\sqrt{c} \\pm q\\sqrt{c} = (p \\pm q)\\sqrt{c}$\n\n**Merasionalkan Penyebut Pecahan Menggunakan Akar Sekawan:**\n1. $\\frac{a}{\\sqrt{b}} = \\frac{a}{\\sqrt{b}} \\times \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$\n2. $\\frac{c}{\\sqrt{a} + \\sqrt{b}} = \\frac{c}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{c(\\sqrt{a} - \\sqrt{b})}{a - b}$",
        "quickTip": "⚡ **Trik Kilat Selisih Kuadrat Bawah:** Penyebut $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})$ SELALU menghasilkan bilangan bulat biasa $(a - b)$ tanpa akar lagi!",
        "exampleProblem": "**Soal:** Rasionalkan penyebut dari pecahan $\\frac{8}{\\sqrt{5} - 1}$!\n\n**Langkah Pembahasan:**\n1. **Kalikan dengan Bentuk Sekawan $(\\sqrt{5} + 1)$:**\n   $$\\frac{8}{\\sqrt{5} - 1} \\times \\frac{\\sqrt{5} + 1}{\\sqrt{5} + 1} = \\frac{8(\\sqrt{5} + 1)}{(\\sqrt{5})^2 - 1^2}$$\n2. **Sederhanakan Penyebut:**\n   $$= \\frac{8(\\sqrt{5} + 1)}{5 - 1} = \\frac{8(\\sqrt{5} + 1)}{4} = 2(\\sqrt{5} + 1) = 2\\sqrt{5} + 2$$\n\n**Hasil Akhir:** $2\\sqrt{5} + 2$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-pangkat-akar_1.svg",
          "title": "Penyederhanaan Bentuk Akar & Merasionalkan Penyebut Sekawan",
          "caption": "Dekomposisi bilangan kuadrat sempurna pada radikan serta teknik eliminasi bentuk irasional penyebut dengan perkalian sekawan.",
          "guide": [
            "Panel kiri menunjukkan cara menyederhanakan akar dengan menarik keluar faktor kuadrat sempurna (25 keluar menjadi 5), sehingga suku-suku berakar sama dapat dijumlahkan layaknya variabel aljabar sejenis.",
            "Panel kanan menguraikan strategi merasionalkan penyebut pecahan matematika: tipe monomial dikalikan akar penyebut dan tipe binomial dikalikan bentuk sekawan berlawanan tanda.",
            "Penerapan rumus selisih dua kuadrat (a+b)(a-b) = a² - b² secara instan melenyapkan bentuk akar di bagian penyebut."
          ]
        }
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
        "exampleProblem": "**Soal:** Tentukan akar-akar dari persamaan kuadrat $x^2 - 5x - 14 = 0$!\n\n**Langkah Pembahasan:**\n1. **Cari Dua Bilangan yang Jika Dijumlahkan $= -5$ dan Dikalikan $= -14$:**\n   Bilangan tersebut adalah $-7$ dan $+2$.\n2. **Faktorkan Persamaan:**\n   $$(x - 7)(x + 2) = 0$$\n3. **Tentukan Akar-Akar:**\n   $$x - 7 = 0 \\implies x_1 = 7$$\n   $$x + 2 = 0 \\implies x_2 = -2$$\n\n**Himpunan Penyelesaian:** $\\{-2, 7\\}$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-persamaan-kuadrat_0.svg",
          "title": "Model Geometris Pemfaktoran & Rumus Universal ABC",
          "caption": "Representasi ubin luas pembentuk suku aljabar kuadrat serta algoritma rumus kuadratik universal untuk menentukan akar persamaan.",
          "guide": [
            "Panel kiri memodelkan bentuk aljabar kuadrat x² + 5x + 6 sebagai total luas persegi panjang berukuran sisi (x + 2) dan (x + 3).",
            "Akar-akar penyelesaian diperoleh dengan menetapkan masing-masing faktor sama dengan nol (x = -2 atau x = -3).",
            "Panel kanan membedah kalkulasi bertahap rumus ABC pada persamaan 2x² + 5x - 3 = 0 menghasilkan diskriminan 49 dan akar rasional x = 1/2 dan x = -3."
          ]
        }
      },
      {
        "title": "2. Diskriminan ($D$) & Teorema Vieta Akar-Akar",
        "concept": "Nilai Diskriminan: $D = b^2 - 4ac$.\n\n**Sifat Jenis Akar Berdasarkan Nilai $D$:**\n- $D > 0 \\implies$ Memiliki dua akar real yang berbeda.\n- $D = 0 \\implies$ Memiliki dua akar real kembar (sama).\n- $D < 0 \\implies$ Tidak memiliki akar real (akar imajiner / tidak memotong sumbu-$X$).\n\n**Teorema Vieta (Jumlah & Hasil Kali Akar):**\n$$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$$\n**Menyusun Persamaan Kuadrat Baru:** $x^2 - (x_1 + x_2)x + (x_1 \\cdot x_2) = 0$.",
        "quickTip": "⚡ **Trik Jumlah Kuadrat Akar:**\n$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = \\left(-\\frac{b}{a}\\right)^2 - 2\\left(\\frac{c}{a}\\right)$$\nRumus ini sangat sering ditanyakan di ujian tanpa perlu mencari nilai akar satu per satu!",
        "exampleProblem": "**Soal:** Diketahui persamaan $2x^2 - 6x - 8 = 0$ memiliki akar-akar $x_1$ dan $x_2$. Tentukan nilai dari $x_1^2 + x_2^2$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = 2, b = -6, c = -8$.\n2. **Hitung Jumlah dan Hasil Kali Akar:**\n   $$x_1 + x_2 = -\\frac{b}{a} = -\\frac{-6}{2} = 3$$\n   $$x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{-8}{2} = -4$$\n3. **Hitung Jumlah Kuadrat:**\n   $$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 3^2 - 2(-4) = 9 + 8 = 17$$\n\n**Jawaban:** Nilai $x_1^2 + x_2^2 = 17$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-persamaan-kuadrat_1.svg",
          "title": "Makna Geometris Diskriminan & Teorema Vieta Akar-Akar",
          "caption": "Visualisasi posisi kurva parabola terhadap sumbu-X berdasarkan nilai diskriminan serta formula jumlah-kali akar Vieta.",
          "guide": [
            "Panel kiri menunjukkan tiga perilaku parabola terhadap sumbu-X: D > 0 memotong di 2 titik, D = 0 menyinggung di 1 titik puncak, dan D < 0 melayang di atas sumbu tanpa akar real.",
            "Panel kanan merinci Teorema Vieta yang menghubungkan koefisien aljabar persamaan kuadrat langsung ke jumlah (-b/a) dan hasil kali (c/a) akar-akarnya.",
            "Formulasi penyusunan persamaan kuadrat baru x² - (jumlah)x + (kali) = 0 memungkinkan pembuatan persamaan dalam hitungan detik."
          ]
        }
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
        "exampleProblem": "**Soal:** Tentukan sumbu simetri dan koordinat titik puncak dari fungsi kuadrat $f(x) = -x^2 + 4x + 5$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = -1, b = 4, c = 5$. Karena $a < 0$, kurva terbuka ke bawah (memiliki puncak maksimum).\n2. **Hitung Sumbu Simetri ($x_p$):**\n   $$x_p = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = -\\frac{4}{-2} = 2$$\n3. **Hitung Nilai Optimum ($y_p$):**\n   $$y_p = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$\n\n**Jawaban:** Sumbu simetrinya adalah garis $x = 2$ dan koordinat titik puncak maksimumnya adalah $(2, 9)$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-fungsi-kuadrat_0.svg",
          "title": "Anatomi Kurva Parabola & Titik Puncak Optimum",
          "caption": "Bedah komponen parabola fungsi kuadrat: sumbu simetri, titik potong sumbu koordinat, nilai optimum, dan orientasi kurva.",
          "guide": [
            "Panel kiri memetakan anatomi lengkap parabola y = x² - 4x + 3 yang memiliki sumbu simetri di x = 2 dan titik balik minimum di (2, -1).",
            "Titik potong sumbu-Y selalu ditentukan secara instan oleh nilai konstanta c pada koordinat (0, c).",
            "Panel kanan merumuskan formula titik puncak optimum (-b/2a, -D/4a) serta keterkaitan tanda koefisien a dengan arah kelengkungan kurva."
          ]
        }
      },
      {
        "title": "2. Masalah Optimasi Maksimum/Minimum dalam Sains",
        "concept": "Banyak fenomena alam dan bisnis berbentuk kurva kuadrat:\n- Ketinggian peluru yang ditembakkan ke udara: $h(t) = v_0 t - \\frac{1}{2}gt^2$.\n- Luas kandang persegi panjang dengan keliling kawat tetap.\n- Laba maksimum penjualan barang.",
        "quickTip": "⚡ **Trik Nilai Optimum:** Setiap kali soal menanyakan kata 'maksimum' atau 'minimum', tujuannya selalu satu: mencari koordinat titik puncak parabola $(x_p, y_p)$!",
        "exampleProblem": "**Soal:** Sebuah roket mainan ditembakkan vertikal ke atas dengan persamaan ketinggian $h(t) = 40t - 5t^2$ (dalam meter, $t$ dalam detik). Tentukan waktu yang dibutuhkan untuk mencapai tinggi maksimum dan tinggi maksimum roket tersebut!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:** $a = -5, b = 40, c = 0$.\n2. **Waktu Mencapai Ketinggian Maksimum ($t_{\\text{maks}} = x_p$):**\n   $$t = -\\frac{b}{2a} = -\\frac{40}{2(-5)} = \\frac{-40}{-10} = 4 \\text{ detik}$$\n3. **Hitung Ketinggian Maksimum ($h_{\\text{maks}} = y_p$):**\n   $$h(4) = 40(4) - 5(4)^2 = 160 - 5(16) = 160 - 80 = 80 \\text{ meter}$$\n\n**Jawaban:** Waktu untuk mencapai tinggi maksimum adalah 4 detik dan tinggi maksimumnya adalah 80 meter.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-fungsi-kuadrat_1.svg",
          "title": "Optimasi Fisika Gerak Parabola & Pemodelan Lahan Maksimum",
          "caption": "Aplikasi sumbu simetri untuk memprediksi tinggi puncak roket air serta maksimisasi luas kandang persegi panjang.",
          "guide": [
            "Panel kiri menganalisis lintasan proyektil roket air h(t) = 40t - 5t²: puncak maksimum tercapai tepat pada waktu t = 4 detik dengan ketinggian rekor 80 meter.",
            "Panel kanan menyelesaikan permasalahan optimasi ekonomi agrikultur: pembatasan kawat 60 meter dimodelkan menjadi fungsi luas L(x) = 60x - 2x².",
            "Dengan memanfaatkan rumus titik balik x = -b/(2a), diperoleh ukuran lahan optimum 15 m x 30 m yang menghasilkan luas maksimum 450 meter persegi."
          ]
        }
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
        "exampleProblem": "**Soal:** Titik $P(-3, 4)$ ditranslasikan oleh $T = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$, kemudian dicerminkan terhadap garis $y = -x$. Tentukan koordinat bayangan akhir titik $P$!\n\n**Langkah Pembahasan:**\n1. **Translasi Pertama:**\n   $$P' = (-3 + 5, \\; 4 + (-2)) = (2, 2)$$\n2. **Refleksi Terhadap Garis $y = -x$:**\n   Rumus: $(x, y) \\to (-y, -x)$.\n   $$P'' = (-2, -2)$$\n\n**Jawaban:** Koordinat bayangan akhir adalah $(-2, -2)$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-transformasi_0.svg",
          "title": "Translasi Vektor Pergeseran & Refleksi Garis Cermin",
          "caption": "Perpindahan isometrik seluruh titik objek oleh vektor translasi serta simetri pencerminan bidang terhadap sumbu koordinat.",
          "guide": [
            "Panel kiri mengilustrasikan translasi segitiga oleh vektor T = (5, 3): seluruh titik sudut mengalami pergeseran sejauh 5 satuan ke kanan dan 3 satuan ke atas tanpa mengubah orientasi maupun ukuran.",
            "Panel kanan memperagakan refleksi terhadap sumbu-Y: garis hubung setiap pasangan titik tegak lurus terhadap cermin dan memiliki jarak yang sama persis.",
            "Tabel rumus cepat merangkum aturan koordinat bayangan hasil pencerminan terhadap sumbu-X, sumbu-Y, garis diagonal y = x, serta titik pusat."
          ]
        }
      },
      {
        "title": "2. Rotasi (Perputaran) & Dilatasi (Faktor Skala)",
        "concept": "1. **Rotasi terhadap Pusat $O(0,0)$:**\n   - Rotasi $+90^\\circ$ (berlawanan jarum jam) / $-270^\\circ$: $(x, y) \\to (-y, x)$\n   - Rotasi $+180^\\circ$ / $-180^\\circ$: $(x, y) \\to (-x, -y)$\n   - Rotasi $+270^\\circ$ / $-90^\\circ$ (searah jarum jam): $(x, y) \\to (y, -x)$\n2. **Dilatasi terhadap Pusat $O(0,0)$ dengan Faktor Skala $k$:**\n   $$(x, y) \\xrightarrow{[O, k]} (kx, ky)$$\n   - Jika $|k| > 1$: Bangun diperbesar.\n   - Jika $0 < |k| < 1$: Bangun diperkecil.\n   - Luas bayangan: $L' = k^2 \\times L_{\\text{awal}}$.",
        "quickTip": "⚡ **Trik Luas Dilatasi Kuadratik:** Ingat bahwa luas memiliki dimensi pangkat dua! Jika panjang sisi didilatasi dengan faktor skala $k = 3$, maka luas bangun bertambah $3^2 = 9$ kali lipat!",
        "exampleProblem": "**Soal:** Titik $B(4, -6)$ dirotasikan sebesar $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0,0)$, lalu didilatasikan dengan faktor skala $k = -2$ terhadap pusat yang sama. Tentukan koordinat bayangan akhir titik $B$!\n\n**Langkah Pembahasan:**\n1. **Rotasi $+90^\\circ$ Pusat $O$:**\n   Rumus: $(x, y) \\to (-y, x)$.\n   $$B' = (-(-6), 4) = (6, 4)$$\n2. **Dilatasi $[O, -2]$:**\n   Rumus: $(x', y') \\to (k x', k y')$.\n   $$B'' = (-2 \\times 6, -2 \\times 4) = (-12, -8)$$\n\n**Jawaban:** Koordinat bayangan akhir adalah $(-12, -8)$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-transformasi_1.svg",
          "title": "Rotasi Bidang Titik Pusat & Dilatasi Skala Pengali Luas",
          "caption": "Visualisasi rotasi sudut berlawanan jarum jam serta efek pembesaran dilatasi faktor skala k yang melipatgandakan luas sebesar k².",
          "guide": [
            "Panel kiri memperlihatkan rotasi segitiga terhadap pusat O: rotasi +90° memutar koordinat menjadi (-y, x) dan rotasi 180° membalik tanda koordinat menjadi (-x, -y).",
            "Panel kanan mendemonstrasikan dilatasi dengan pusat O dan faktor perbesaran k = 2 melalui pancaran garis sinar dari titik pusat.",
            "Prinsip penting dilatasi: jika dimensi panjang sisi berlipat k kali, maka luas bangun bayangan selalu berlipat kuadratik sebesar k² (faktor 2 menghasilkan luas 4 kali lipat)."
          ]
        }
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
        "exampleProblem": "**Soal:** Dua segitiga $ABC$ dan $DEF$ kongruen. Diketahui $AB = DE = 8 \\text{ cm}$, $\\angle A = \\angle D = 60^\\circ$, dan $AC = DF = 6 \\text{ cm}$. Berdasarkan kriteria manakah kedua segitiga tersebut dinyatakan kongruen?\n\n**Langkah Pembahasan:**\n1. **Analisis Unsur:**\n   - Sisi $AB = DE$ (sisi)\n   - Sudut $\\angle A = \\angle D$ (sudut yang diapit)\n   - Sisi $AC = DF$ (sisi)\n2. **Kriteria:** Dua sisi yang mengapit satu sudut yang bersesuaian sama besar.\n\n**Jawaban:** Kedua segitiga kongruen berdasarkan kriteria **Sisi - Sudut - Sisi (s - sd - s)**.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-kesebangunan_0.svg",
          "title": "Kriteria Kekongruenan & Lima Postulat Segitiga Identik",
          "caption": "Konsep kesamaan bentuk dan ukuran persis dua bangun geometris serta kaidah pembuktian kongruensi segitiga.",
          "guide": [
            "Panel kiri menunjukkan lambang kekongruenan dua segitiga identik dengan tanda garis kesamaan panjang sisi dan kesamaan besar sudut.",
            "Dua bangun kongruen memiliki rasio perbandingan sisi tepat 1 : 1 sehingga keliling dan luasnya selalu sama.",
            "Panel kanan menguraikan postulat pembuktian standar: S-S-S, S-Sd-S, Sd-S-Sd, dan Sd-Sd-S yang menjamin dua segitiga pasti kongruen tanpa perlu mengukur seluruh komponen."
          ]
        }
      },
      {
        "title": "2. Kesebangunan & Proporsi Sisi Seletak",
        "concept": "**Sebangun artinya bentuknya sama, ukurannya boleh berbeda.** Contohnya foto yang diperbesar: sudutnya tetap sama, tetapi semua sisi berubah dengan pengali yang sama.\n\n**Cara mengenali dua segitiga sebangun:**\n1. Cocokkan sudut yang sama besar.\n2. Pasangkan sisi yang berhadapan dengan sudut-sudut tersebut.\n3. Pastikan semua perbandingan memakai arah yang sama (kecil/besar atau besar/kecil):\n$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC} = k$$\n\nDi sini $\\triangle ADE$ adalah segitiga kecil di dalam $\\triangle ABC$, dan $DE$ sejajar $BC$. Jadi $AD$ berpasangan dengan $AB$, $AE$ dengan $AC$, serta $DE$ dengan $BC$.\n\n**Rumus ruas sejajar pada trapesium:** Jika $EF$ sejajar dengan dua alas $AB$ dan $CD$, serta titik $E$ membagi sisi miring menjadi $AE$ dan $ED$, maka:\n$$EF = \\frac{(AE \\times CD) + (ED \\times AB)}{AE + ED}$$\nMaknanya: panjang ruas sejajar $EF$ adalah rata-rata berbobot dari panjang kedua alas. Bobotnya ditentukan oleh jarak titik $E$ ke masing-masing ujung sisi. Rumus ini hanya berlaku untuk susunan titik dan garis sejajar tersebut.\n\n**Arti simbol pada rumus trapesium:** $EF$ adalah panjang ruas sejajar yang dicari; $AB$ dan $CD$ adalah panjang dua alas sejajar; $AE$ dan $ED$ adalah dua bagian sisi miring yang berjumlah $AD$; tanda $\\times$ berarti dikali; tanda $+$ berarti dijumlahkan; garis pecahan berarti hasil di atas dibagi jumlah $AE+ED$.",
        "quickTip": "**Cek pasangan sebelum menghitung:** tulis sisi segitiga kecil di atas dan sisi pasangannya pada segitiga besar di bawah. Contoh $AD/AB$ harus dipasangkan dengan $AE/AC$ dan $DE/BC$. Jangan mencampur urutannya. Untuk bayangan, pasangkan tinggi dengan tinggi dan panjang bayangan dengan panjang bayangan.",
        "exampleProblem": "**Soal:** Sebuah tiang bendera yang tingginya 6 meter memiliki bayangan sepanjang 4 meter di atas tanah. Pada saat yang sama, sebuah pohon di dekatnya memiliki panjang bayangan 10 meter. Berapakah tinggi pohon tersebut?\n\n**Langkah Pembahasan:**\n1. **Gunakan Perbandingan Kesebangunan:**\n   $$\\frac{\\text{Tinggi Pohon}}{\\text{Tinggi Tiang}} = \\frac{\\text{Bayangan Pohon}}{\\text{Bayangan Tiang}}$$\n2. **Masukkan Nilai:**\n   $$\\frac{T}{6} = \\frac{10}{4} = 2{,}5$$\n3. **Hitung Tinggi Pohon:**\n   $$T = 6 \\times 2{,}5 = 15 \\text{ meter}$$\n\n**Jawaban:** Tinggi pohon tersebut adalah 15 meter.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-kesebangunan_1.svg",
          "title": "Proporsi Sisi Segitiga Bertingkat & Aplikasi Bayangan Nyata",
          "caption": "Panel kiri memasangkan sisi segitiga kecil dan besar saat DE sejajar BC. Panel kanan memakai tinggi tongkat dan panjang bayangannya untuk mencari tinggi pohon.",
          "guide": [
            "**Panel kiri — cari pasangan sisi.** Segitiga kecil ADE berada di dalam segitiga besar ABC. Karena DE sejajar BC, sudut-sudut bersesuaian sama besar. Pasangkan AD dengan AB, AE dengan AC, dan DE dengan BC; jangan membandingkan sisi yang tidak sepadan.",
            "**Panel kiri — isi angka lalu cari sisi yang hilang.** Gambar memberi $AD = 4$ cm, $AB = 6$ cm, dan $DE = 6$ cm. Gunakan $AD/AB = DE/BC$: $4/6 = 6/BC$. Kali silang memberi $4 \\times BC = 36$, jadi $BC = 9$ cm. Cek: sisi besar BC harus lebih panjang daripada sisi kecil DE.",
            "**Panel kanan — buat perbandingan tinggi.** Tongkat tingginya 1,6 m dengan bayangan 2 m; bayangan pohon 10 m. Sinar matahari sejajar, jadi segitiganya sebangun: $T/1{,}6 = 10/2$. Hitung $10/2 = 5$, lalu kalikan $5 \\times 1{,}6 = 8$. Maka tinggi pohon $T = 8$ m. Tinggi dibandingkan dengan tinggi, bayangan dibandingkan dengan bayangan."
          ]
        }
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
        "exampleProblem": "**Soal:** Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 24 cm. Tentukan luas selimut dan volume kerucut tersebut! (Gunakan $\\pi = \\frac{22}{7}$)\n\n**Langkah Pembahasan:**\n1. **Cari Panjang Garis Pelukis ($s$) dengan Pythagoras:**\n   $$s = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25 \\text{ cm}$$\n2. **Hitung Luas Selimut:**\n   $$L_s = \\pi r s = \\frac{22}{7} \\times 7 \\times 25 = 22 \\times 25 = 550 \\text{ cm}^2$$\n3. **Hitung Volume Kerucut:**\n   $$V = \\frac{1}{3} \\pi r^2 t = \\frac{1}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 24 = \\frac{1}{3} \\times 22 \\times 7 \\times 24 = 22 \\times 7 \\times 8 = 1232 \\text{ cm}^3$$\n\n**Jawaban:** Luas selimut kerucut adalah $550 \\text{ cm}^2$ dan volumenya adalah $1232 \\text{ cm}^3$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-brsl_0.svg",
          "title": "Geometri Tabung & Kerucut: Garis Pelukis & Rumus Ruang",
          "caption": "Dekomposisi jaring-jaring selimut tabung dan segitiga siku-siku Pythagoras penentu garis pelukis kerucut s = √(r² + t²).",
          "guide": [
            "Panel kiri membuktikan bahwa selimut tabung bila dibentangkan membentuk persegi panjang dengan panjang sama dengan keliling alas 2πr dan lebar tinggi t.",
            "Panel kanan menguraikan hubungan segitiga siku-siku internal kerucut: jari-jari r, tinggi t, dan garis pelukis s membentuk tripel Pythagoras.",
            "Volume kerucut memiliki faktor sepertiga (1/3 πr²t) dibandingkan tabung dengan alas dan tinggi yang sama."
          ]
        }
      },
      {
        "title": "2. Geometri Bola Sempurna",
        "concept": "- **Luas Permukaan Bola:** $L = 4\\pi r^2$ *(Tepat sama dengan 4 kali luas lingkaran berpusat sama)*.\n- **Luas Belahan Bola Padat (Hemisfer Pejal):** $L = 3\\pi r^2$.\n- **Volume Bola:** $V = \\frac{4}{3}\\pi r^3$.\n- **Perubahan Skala Jari-jari:** Jika jari-jari diperbesar $k$ kali:\n  - Luas bertambah $k^2$ kali.\n  - Volume bertambah $k^3$ kali.",
        "quickTip": "⚡ **Trik Perbandingan Volume Bola:** Jika jari-jari bola kedua adalah 2 kali jari-jari bola pertama ($r_2 = 2r_1$), volumenya bertambah $2^3 = 8$ kali lipat!",
        "exampleProblem": "**Soal:** Sebuah bola memiliki diameter 14 cm. Tentukan volume bola tersebut! (Gunakan $\\pi = \\frac{22}{7}$)\n\n**Langkah Pembahasan:**\n1. **Jari-jari:** $r = \\frac{14}{2} = 7 \\text{ cm}$.\n2. **Terapkan Rumus Volume:**\n   $$V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times 7 \\times 7 \\times 7 = \\frac{4}{3} \\times 22 \\times 49 = \\frac{4312}{3} = 1437\\frac{1}{3} \\text{ cm}^3$$\n\n**Jawaban:** Volume bola adalah $1437\\frac{1}{3} \\text{ cm}^3$.",
        "visual": {
          "image": "assets/materi/mat_smp/k9-brsl_1.svg",
          "title": "Geometri Bola Sempurna & Belahan Setengah Bola Pejal",
          "caption": "Formulasi volume dan luas permukaan bola utuh serta perbedaan mendasar luas setengah bola berongga (2πr²) terhadap padat pejal (3πr²).",
          "guide": [
            "Panel kiri memvisualisasikan bola 3D dengan lingkaran ekuator terbesar dan merangkum penemuan Archimedes bahwa kulit bola tepat setara 4 lingkaran datar berjejari sama.",
            "Panel kanan mengantisipasi jebakan umum pada soal ujian: setengah bola berongga hanya memiliki luas selimut 2πr².",
            "Sebaliknya, setengah bola padat (pejal) mewajibkan penambahan luas lingkaran penampang alasnya sehingga bernilai 3πr²."
          ]
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.KURMER_KELAS9_DATA = KURMER_KELAS9_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KURMER_KELAS9_DATA;
}
