/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 12 (FASE F & F LANJUT)
 * Modul Lengkap 6 Bab: Teori Terstruktur, Trik Kilat & Pembahasan Bertahap
 */

window.KURMER_KELAS12_DATA = [
  {
    "id": "k12-dimensi-tiga",
    "number": "01",
    "title": "Bab 1: Geometri Ruang (Dimensi Tiga) & Jarak",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "box",
    "summary": "Visualisasi ruang berdimensi tiga: tentukan kedudukan titik, garis, dan bidang pada bangun kubus dan limas beraturan, hitung jarak titik ke garis melalui perbandingan luas segitiga siku-siku, serta jarak titik ke bidang tembus.",
    "subtopics": [
      {
        "title": "1. Jarak Titik ke Titik & Jarak Titik ke Garis",
        "concept": "1. **Jarak Titik ke Titik:** Panjang ruas garis lurus terpendek yang menghubungkan kedua titik. Pada kubus bersisi $s$:\n   - Diagonal Bidang: $s\\sqrt{2}$\n   - Diagonal Ruang: $s\\sqrt{3}$\n\n2. **Jarak Titik ke Garis:** Panjang ruas garis yang ditarik dari titik tersebut **jatuh tegak lurus** ke garis target.\n\n**Metode Luas Segitiga Pembantu:**\nJika titik $P$ dan garis $AB$ membentuk segitiga $PAB$ dengan alas $AB$ dan tinggi $t_1$, serta alas lain $PB$ dengan tinggi $t_2$:\n$$\\text{Luas } = \\frac{1}{2} \\times AB \\times d = \\frac{1}{2} \\times \\text{alas}_2 \\times t_2 \\implies d = \\frac{\\text{alas}_2 \\times t_2}{AB}$$",
        "quickTip": "⚡ **Trik Segitiga Kubus:** Sebagian besar soal jarak titik ke garis pada kubus membentuk salah satu dari 3 segitiga:\n1. Segitiga Siku-siku $\\implies$ gunakan rumus luas $\\frac{\\text{alas} \\times \\text{tinggi}}{\\text{sisi miring}}$.\n2. Segitiga Sama Kaki $\\implies$ garis tinggi membelah alas tepat di tengah.\n3. Segitiga Sama Sisi $\\implies$ tinggi $t = \\frac{1}{2}s\\sqrt{3}$!",
        "exampleProblem": "**Soal:** Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk 6 cm. Tentukan jarak titik $A$ ke garis diagonal ruang $CE$!\n\n**Langkah Pembahasan:**\n1. **Bentuk Segitiga Pembantu $ACE$:**\n   - Sisi $AC$ (diagonal bidang alas) = $6\\sqrt{2} \\text{ cm}$.\n   - Sisi $AE$ (rusuk tegak) = $6 \\text{ cm}$.\n   - Sisi $CE$ (diagonal ruang) = $6\\sqrt{3} \\text{ cm}$.\n   - Karena $AE \\perp AC$, segitiga $ACE$ adalah **segitiga siku-siku di titik $A$**.\n2. **Gunakan Perbandingan Luas Segitiga $ACE$:**\n   $$\\frac{1}{2} \\times CE \\times d = \\frac{1}{2} \\times AC \\times AE$$\n   $$6\\sqrt{3} \\times d = 6\\sqrt{2} \\times 6$$\n   $$d = \\frac{36\\sqrt{2}}{6\\sqrt{3}} = \\frac{6\\sqrt{2}}{\\sqrt{3}} = \\frac{6\\sqrt{6}}{3} = 2\\sqrt{6} \\text{ cm}$$\n\n**Jawaban:** Jarak titik $A$ ke garis $CE$ adalah $2\\sqrt{6}$ cm."
      },
      {
        "title": "2. Jarak Titik ke Bidang pada Bangun Ruang",
        "concept": "Jarak titik $P$ ke bidang $V$ adalah panjang ruas garis proyeksi dari $P$ yang menembus bidang $V$ secara **tegak lurus**.\n\n**Rumus Cepat Jarak Titik Sudut ke Bidang Diagonal Kubus:**\nPada kubus dengan rusuk $s$:\n- Jarak titik sudut ke bidang yang memotong sepertiga diagonal ruang: $d = \\frac{1}{3}s\\sqrt{3}$.\n- Jarak titik sudut ke bidang yang memotong dua pertiga diagonal ruang: $d = \\frac{2}{3}s\\sqrt{3}$.",
        "quickTip": "⚡ **Hafalan Sakti Kubus:** Bidang diagonal $BDG$ membagi diagonal ruang $CE$ menjadi perbandingan $1 : 2$. Jarak titik $C$ ke bidang $BDG$ selalu tepat $\\frac{1}{3}s\\sqrt{3}$, sedangkan jarak titik $E$ ke bidang $BDG$ adalah $\\frac{2}{3}s\\sqrt{3}$!",
        "exampleProblem": "**Soal:** Diketahui kubus $ABCD.EFGH$ memiliki panjang rusuk 9 cm. Tentukan jarak titik $C$ ke bidang $BDG$!\n\n**Langkah Pembahasan:**\n1. **Gunakan Rumus Cepat Kubus:**\n   Titik $C$ adalah titik sudut terdekat dengan bidang $BDG$.\n   $$d = \\frac{1}{3} s \\sqrt{3}$$\n2. **Substitusi $s = 9 \\text{ cm}$:**\n   $$d = \\frac{1}{3} (9) \\sqrt{3} = 3\\sqrt{3} \\text{ cm}$$\n\n**Jawaban:** Jarak titik $C$ ke bidang $BDG$ adalah $3\\sqrt{3}$ cm."
      }
    ]
  },
  {
    "id": "k12-statistika-inferensial",
    "number": "02",
    "title": "Bab 2: Statistika Inferensial & Distribusi Binomial-Normal",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "bar-chart-2",
    "summary": "Teori probabilitas kontinu dan inferensi data: pelajari variabel acak diskrit vs kontinu, formula fungsi peluang binomial Bernoulli $P(X=x) = C(n, x)p^x q^{n-x}$, rata-rata $\\mu$ dan varians $\\sigma^2$, serta kurva lonceng distribusi normal baku Gauss dengan transformasi Z-score.",
    "subtopics": [
      {
        "title": "1. Distribusi Peluang Binomial (Percobaan Bernoulli)",
        "concept": "Percobaan Binomial memiliki 4 syarat mutlak (*BINS*):\n1. **B** (*Binary*): Hanya ada 2 kemungkinan hasil: Sukses (peluang $p$) atau Gagal (peluang $q = 1 - p$).\n2. **I** (*Independent*): Setiap percobaan saling bebas.\n3. **N** (*Number*): Jumlah percobaan $n$ bernilai tetap.\n4. **S** (*Success constant*): Peluang sukses $p$ sama di setiap lemparan.\n\n**Formula Fungsi Peluang Binomial:**\n$$P(X = x) = C(n, x) \\cdot p^x \\cdot q^{n - x} = \\frac{n!}{x!(n - x)!} \\cdot p^x \\cdot (1 - p)^{n - x}$$\n\n**Parameter Distribusi Binomial:**\n- Rata-rata: $\\mu = n \\cdot p$\n- Varians: $\\sigma^2 = n \\cdot p \\cdot q$\n- Simpangan Baku: $\\sigma = \\sqrt{n \\cdot p \\cdot q}$",
        "quickTip": "⚡ **Trik Kombinasi Binomial:** $C(n, 0) = 1$ dan $C(n, n) = 1$. Jika ditanya peluang 'setidaknya satu kali sukses', gunakan komplemen: $P(X \\ge 1) = 1 - P(X = 0)$!",
        "exampleProblem": "**Soal:** Seorang pebasket memiliki peluang memasukkan bola ke ring sebesar $p = 0{,}8$. Jika ia melakukan 5 kali tembakan bebas, tentukan peluang ia memasukkan bola tepat 4 kali!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Parameter:**\n   $n = 5, x = 4, p = 0{,}8, q = 1 - 0{,}8 = 0{,}2$.\n2. **Terapkan Rumus Distribusi Binomial:**\n   $$P(X = 4) = C(5, 4) \\cdot (0{,}8)^4 \\cdot (0{,}2)^{5 - 4}$$\n   $$C(5, 4) = 5$$\n   $$(0{,}8)^4 = 0{,}4096$$\n   $$(0{,}2)^1 = 0{,}2$$\n3. **Kalikan:**\n   $$P(X = 4) = 5 \\times 0{,}4096 \\times 0{,}2 = 1 \\times 0{,}4096 = 0{,}4096$$\n\n**Jawaban:** Peluang memasukkan bola tepat 4 kali adalah $0{,}4096$ (atau $40{,}96\\%$)."
      },
      {
        "title": "2. Distribusi Normal Baku & Transformasi Z-Score",
        "concept": "Distribusi normal memiliki kurva lonceng simetris sempurna di sekitar nilai rata-rata $\\mu$.\n\n**Transformasi Z-Score:**\nMenstandarkan sembarang variabel acak normal $X \\sim N(\\mu, \\sigma^2)$ menjadi normal baku $Z \\sim N(0, 1)$:\n$$Z = \\frac{X - \\mu}{\\sigma}$$\n\n**Aturan Empiris 68 - 95 - 99,7%:**\n- Sekitar $68\\%$ data berada dalam rentang $\\mu \\pm 1\\sigma$ ($-1 \\le Z \\le 1$).\n- Sekitar $95\\%$ data berada dalam rentang $\\mu \\pm 2\\sigma$ ($-2 \\le Z \\le 2$).\n- Sekitar $99{,}7\\%$ data berada dalam rentang $\\mu \\pm 3\\sigma$ ($-3 \\le Z \\le 3$).",
        "quickTip": "💡 **Makna Z-Score:** Nilai $Z = +1{,}5$ artinya nilai siswa tersebut berada 1,5 standar deviasi di atas rata-rata populasi se-Indonesia!",
        "exampleProblem": "**Soal:** Nilai ujian UTBK SNBT sekelompok siswa berdistribusi normal dengan rata-rata $\\mu = 600$ dan simpangan baku $\\sigma = 50$. Berapakah nilai Z-score seorang siswa yang memperoleh nilai 675?\n\n**Langkah Pembahasan:**\n1. **Terapkan Rumus Z-Score:**\n   $$Z = \\frac{X - \\mu}{\\sigma} = \\frac{675 - 600}{50} = \\frac{75}{50} = 1{,}5$$\n\n**Jawaban:** Nilai Z-score siswa tersebut adalah $+1{,}5$."
      }
    ]
  },
  {
    "id": "k12-limit",
    "number": "03",
    "title": "Bab 3: Limit Fungsi Aljabar & Limit Trigonometri",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "fast-forward",
    "summary": "Pintu gerbang kalkulus modern: atasi bentuk tak tentu 0/0 melalui pemfaktoran, perkalian sekawan akar, dalil L'Hopital, teorema limit trigonometri khusus $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$, hingga limit di ketakhinggaan $\\lim_{x \\to \\infty}$.",
    "subtopics": [
      {
        "title": "1. Limit Aljabar Tak Tentu (0/0) & Dalil L'Hôpital",
        "concept": "Jika substitusi langsung $x = c$ menghasilkan bentuk tak tentu $\\frac{0}{0}$:\n1. **Metode Pemfaktoran:** Faktorkan pembuat nol $(x - c)$ dari pembilang dan penyebut lalu coret.\n2. **Metode Perkalian Akar Sekawan:** Kalikan pembilang dan penyebut dengan sekawan $(\\sqrt{f(x)} + \\sqrt{g(x)})$.\n3. **Dalil L'Hôpital (Jalan Tol Kalkulus):**\n   Jika $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{0}{0}$ atau $\\frac{\\infty}{\\infty}$, maka:\n   $$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$\n   *(Turunkan pembilang sendiri dan turunkan penyebut sendiri)*.",
        "quickTip": "⚡ **Trik Dalil L'Hopital:** L'Hopital adalah senjata tercepat di UTBK! Cukup turunkan atas dan bawah satu kali, lalu masukkan nilai $x$. Hasil langsung keluar dalam 5 detik!",
        "exampleProblem": "**Soal:** Tentukan nilai dari limit berikut:\n$$\\lim_{x \\to 3} \\frac{x^2 - 9}{2x^2 - 5x - 3}$$\n\n**Langkah Pembahasan:**\n1. **Uji Substitusi:** $\\frac{3^2 - 9}{2(3^2) - 5(3) - 3} = \\frac{0}{18 - 15 - 3} = \\frac{0}{0}$ (Bentuk tak tentu).\n2. **Gunakan Dalil L'Hôpital (Turunkan Atas dan Bawah):**\n   - Turunan pembilang: $\\frac{d}{dx}(x^2 - 9) = 2x$\n   - Turunan penyebut: $\\frac{d}{dx}(2x^2 - 5x - 3) = 4x - 5$\n3. **Hitung Limit:**\n   $$\\lim_{x \\to 3} \\frac{2x}{4x - 5} = \\frac{2(3)}{4(3) - 5} = \\frac{6}{12 - 5} = \\frac{6}{7}$$\n\n**Hasil Akhir:** $\\frac{6}{7}$."
      },
      {
        "title": "2. Limit Fungsi Trigonometri & Modifikasi Cosinus",
        "concept": "Teorema limit trigonometri dasar ($x \\to 0$):\n$$\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\sin ax}{\\tan bx} = \\frac{a}{b}$$\n\n**Identitas Sakti Pengubah Cosinus:**\nKarena $\\cos 0 = 1$, cosinus tidak memiliki teorema limit langsung. Gunakan sudut rangkap untuk mengubahnya menjadi sinus:\n$$1 - \\cos ax = 2\\sin^2\\left(\\frac{a}{2}x\\right)$$\n**Trik Pendekatan Taylor ($x \\to 0$):**\n$$1 - \\cos(kx) \\approx \\frac{1}{2}(kx)^2 = \\frac{1}{2}k^2 x^2$$",
        "quickTip": "⚡ **Rumus Sakti 1 - Cos:**\n$$\\lim_{x \\to 0} \\frac{1 - \\cos(ax)}{x^2} = \\frac{1}{2}a^2$$\nLangsung kuadratkan koefisien $a$ lalu bagi 2!",
        "exampleProblem": "**Soal:** Tentukan nilai dari limit berikut:\n$$\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x \\tan 2x}$$\n\n**Langkah Pembahasan:**\n1. **Ubah Bentuk $1 - \\cos 4x$ Menjadi Sinus:**\n   $$1 - \\cos 4x = 2\\sin^2(2x) = 2 \\cdot \\sin 2x \\cdot \\sin 2x$$\n2. **Substitusi ke Persamaan Limit:**\n   $$\\lim_{x \\to 0} \\frac{2 \\sin 2x \\cdot \\sin 2x}{x \\cdot \\tan 2x} = 2 \\cdot \\lim_{x \\to 0}\\left(\\frac{\\sin 2x}{x}\\right) \\cdot \\lim_{x \\to 0}\\left(\\frac{\\sin 2x}{\\tan 2x}\\right)$$\n3. **Ambil Koefisien Sesuai Teorema:**\n   $$= 2 \\cdot \\left(\\frac{2}{1}\\right) \\cdot \\left(\\frac{2}{2}\\right) = 2 \\cdot 2 \\cdot 1 = 4$$\n\n**Hasil Akhir:** $4$."
      }
    ]
  },
  {
    "id": "k12-turunan",
    "number": "04",
    "title": "Bab 4: Turunan Fungsi (Diferensial) & Aplikasi Ekstrem",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "zap",
    "summary": "Analisis laju perubahan sesaat: kuasai aturan rantai (Chain Rule), turunan perkalian dan pembagian, turunan sinus-cosinus-tangen, persamaan garis singgung kurva, uji stasioner naik-turun, serta pemecahan masalah optimasi maksimum/minimum.",
    "subtopics": [
      {
        "title": "1. Aturan Dasar, Perkalian, Pembagian & Aturan Rantai",
        "concept": "Definisi formal turunan: $f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$.\n\n**Aturan Operasi Turunan:**\n1. **Pangkat Aljabar:** $\\frac{d}{dx}(a x^n) = a \\cdot n x^{n-1}$\n2. **Perkalian Fungsi $u \\cdot v$:**\n   $$(u \\cdot v)' = u'v + uv'$$\n3. **Pembagian Fungsi $\\frac{u}{v}$:**\n   $$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$\n4. **Aturan Rantai (Komposisi Fungsi):**\n   $$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$\n\n**Turunan Trigonometri Dasar:**\n- $(\\sin x)' = \\cos x$\n- $(\\cos x)' = -\\sin x$\n- $(\\tan x)' = \\sec^2 x$",
        "quickTip": "⚡ **Trik Hafalan Rantai Pangkat:** Untuk bentuk $y = [u(x)]^n$, turunkan seperti biasa: 'Pangkat maju ke depan, pangkat berkurang satu, lalu KALIKAN dengan turunan dalamnya' ($y' = n [u(x)]^{n-1} \\cdot u'(x)$)!",
        "exampleProblem": "**Soal:** Tentukan turunan pertama dari fungsi $f(x) = (3x^2 - 5)^4$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Fungsi Dalam:** $u(x) = 3x^2 - 5 \\implies u'(x) = 6x$.\n2. **Terapkan Aturan Rantai:**\n   $$f'(x) = 4(3x^2 - 5)^{4 - 1} \\cdot u'(x)$$\n   $$f'(x) = 4(3x^2 - 5)^3 \\cdot (6x) = 24x(3x^2 - 5)^3$$\n\n**Hasil Akhir:** $f'(x) = 24x(3x^2 - 5)^3$."
      },
      {
        "title": "2. Garis Singgung Kurva & Masalah Optimasi Ekstrem",
        "concept": "1. **Gradien Garis Singgung Kurva di Titik $(x_1, y_1)$:**\n   $$m = f'(x_1)$$\n   Persamaan garis singgung: $y - y_1 = m(x - x_1)$.\n\n2. **Uji Keadaan Fungsi:**\n   - Fungsi Naik: $f'(x) > 0$\n   - Fungsi Turun: $f'(x) < 0$\n   - Titik Stasioner: $f'(x) = 0$\n\n3. **Uji Jenis Ekstrem Turunan Kedua:**\n   - $f''(x_1) < 0 \\implies$ Titik Balik **Maksimum** (kurva cekung ke bawah).\n   - $f''(x_1) > 0 \\implies$ Titik Balik **Minimum** (kurva cekung ke atas).\n   - $f''(x_1) = 0 \\implies$ Titik Belok.",
        "quickTip": "💡 **Analogi Speedometer Mobil:** Nilai fungsi $f(x)$ adalah posisi jarak, turunan pertama $f'(x)$ adalah kecepatan laju gerak, dan turunan kedua $f''(x)$ adalah percepatan pedal gas!",
        "exampleProblem": "**Soal:** Tentukan persamaan garis singgung pada kurva $y = x^2 - 4x + 3$ di titik yang berabsis $x = 3$!\n\n**Langkah Pembahasan:**\n1. **Cari Koordinat Ordinat ($y_1$):**\n   $$y_1 = 3^2 - 4(3) + 3 = 9 - 12 + 3 = 0 \\implies \\text{Titik singgung } (3, 0)$$\n2. **Cari Gradien ($m = y'$):**\n   $$y' = 2x - 4 \\implies m = 2(3) - 4 = 6 - 4 = 2$$\n3. **Susun Persamaan Garis Singgung:**\n   $$y - y_1 = m(x - x_1) \\implies y - 0 = 2(x - 3) \\implies y = 2x - 6$$\n\n**Jawaban:** Persamaan garis singgungnya adalah $y = 2x - 6$."
      }
    ]
  },
  {
    "id": "k12-integral",
    "number": "05",
    "title": "Bab 5: Integral Tak Tentu, Integral Tentu & Luas Daerah",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "shuffle",
    "summary": "Operasi antiturunan dan akumulasi luas kontinu: kuasai aturan dasar integral aljabar, teknik integrasi substitusi aljabar, metode parsial Tanzalin tabular, Teorema Dasar Kalkulus, hingga kalkulasi luas daerah di antara kurva.",
    "subtopics": [
      {
        "title": "1. Integral Tak Tentu & Teknik Substitusi",
        "concept": "Integral adalah operasi invers dari turunan (antidiferensial).\n\n**Sifat Dasar Integral Aljabar:**\n$$\\int a x^n dx = \\frac{a}{n + 1} x^{n + 1} + C, \\quad n \\ne -1$$\n\n**Teknik Substitusi Aljabar:**\nDigunakan jika integran memuat suatu fungsi dan turunannya:\n$$\\int f(g(x)) \\cdot g'(x) dx = \\int f(u) du$$\nLangkah: Misalkan bagian kurung yang berpangkat lebih tinggi sebagai $u$, lalu cari $du = u'(x) dx$.",
        "quickTip": "⚡ **Trik Deteksi Substitusi:** Perhatikan selisih pangkat! Jika fungsi di luar kurung memiliki pangkat satu derajat lebih rendah daripada fungsi di dalam kurung (misal $x$ dan $x^2$), PASTI diselesaikan dengan **Metode Substitusi**!",
        "exampleProblem": "**Soal:** Tentukan hasil dari $\\int 6x(x^2 - 4)^5 dx$!\n\n**Langkah Pembahasan:**\n1. **Misalkan Bagian Dalam Kurung Sebagai $u$:**\n   $$u = x^2 - 4 \\implies \\frac{du}{dx} = 2x \\implies dx = \\frac{du}{2x}$$\n2. **Substitusikan ke Soal Integral:**\n   $$\\int 6x \\cdot u^5 \\cdot \\frac{du}{2x} = \\int 3 u^5 du$$\n3. **Lakukan Integrasi:**\n   $$= 3 \\cdot \\frac{1}{6} u^6 + C = \\frac{1}{2} u^6 + C$$\n4. **Kembalikan Variabel $u$ Asal:**\n   $$= \\frac{1}{2}(x^2 - 4)^6 + C$$\n\n**Hasil Akhir:** $\\frac{1}{2}(x^2 - 4)^6 + C$."
      },
      {
        "title": "2. Integral Tentu & Menghitung Luas Daerah Antar Kurva",
        "concept": "1. **Teorema Dasar Kalkulus (Integral Tentu):**\n   $$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$\n\n2. **Luas Daerah di Bawah Kurva:**\n   $$L = \\int_a^b y dx$$\n\n3. **Luas Daerah di Antara Dua Kurva ($y_1$ di atas, $y_2$ di bawah):**\n   $$L = \\int_a^b (y_{\\text{atas}} - y_{\\text{bawah}}) dx$$\n\n**Rumus Sakti Luas Kurva Parabola dan Garis:**\nJika dibatasi parabola dan garis yang berpotongan di dua titik dengan diskriminan persamaan sekutu $D = b^2 - 4ac$:\n$$L = \\frac{D\\sqrt{D}}{6a^2}$$",
        "quickTip": "⚡ **Rumus Sakti D Akar D per 6a Kuadrat:** Rumus $L = \\frac{D\\sqrt{D}}{6a^2}$ memangkas waktu pengerjaan luas daerah parabola-garis dari 5 menit integral menjadi hanya 20 detik!",
        "exampleProblem": "**Soal:** Tentukan luas daerah yang dibatasi oleh kurva parabola $y = 6x - x^2$ dan sumbu-$X$!\n\n**Langkah Pembahasan:**\n1. **Cari Titik Potong Sumbu-$X$ ($y = 0$):**\n   $$6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0 \\text{ dan } x = 6$$\n2. **Hitung dengan Integral Tentu:**\n   $$L = \\int_0^6 (6x - x^2) dx = \\left[ 3x^2 - \\frac{1}{3}x^3 \\right]_0^6$$\n3. **Masukkan Batas Atas dan Batas Bawah:**\n   $$= \\left(3(6)^2 - \\frac{1}{3}(6)^3\\right) - (0) = (3 \\times 36 - \\frac{1}{3} \\times 216) = 108 - 72 = 36$$\n\n**Jawaban:** Luas daerah tersebut adalah 36 satuan luas."
      }
    ]
  },
  {
    "id": "k12-keuangan-lanjut",
    "number": "06",
    "title": "Bab 6: Matematika Keuangan Lanjut & Model Dinamis",
    "badge": "Fase F • SMA Kelas 12",
    "icon": "dollar-sign",
    "summary": "Pemodelan kuantitatif dunia finansial nyata: pahami bunga majemuk kontinu bilangan Euler ($e$), sistem amortisasi cicilan KPR perbankan, Net Present Value (NPV), serta model pertumbuhan logistik populasi terbatas kapasitas lingkungan.",
    "subtopics": [
      {
        "title": "1. Bunga Majemuk Kontinu & Bilangan Euler ($e$)",
        "concept": "Jika periode penggabungan bunga majemuk dilakukan semakin rapat (setiap hari, jam, detik) hingga mendekati tak hingga frekuensinya ($m \\to \\infty$), fungsi konvergen menuju bilangan natural Euler $e \\approx 2{,}71828$:\n$$\\lim_{m \\to \\infty} M_0 \\left(1 + \\frac{r}{m}\\right)^{m \\cdot t} = M_0 \\cdot e^{rt}$$\n\n**Rumus Bunga Majemuk Kontinu:**\n$$M(t) = M_0 \\cdot e^{r \\cdot t}$$\n- $M_0$: Modal awal.\n- $r$: Tingkat suku bunga nominal tahunan (dalam desimal).\n- $t$: Waktu investasi (dalam tahun).",
        "quickTip": "💡 **Aturan 70 (Rule of 70):** Untuk mengetahui berapa tahun modal investasi akan berlipat ganda dua kali lipat pada bunga majemuk kontinu, cukup bagi 70 dengan persentase bunga tahunan: $t_{\\text{dobel}} \\approx \\frac{70}{\\%r}$!",
        "exampleProblem": "**Soal:** Modal sebesar Rp10.000.000 diinvestasikan dengan bunga majemuk kontinu sebesar 5% per tahun. Berapakah estimasi saldo akhir setelah 2 tahun? (Gunakan nilai $e^{0{,}1} \\approx 1{,}1052$)\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $M_0 = 10.000.000, r = 0{,}05, t = 2$.\n2. **Terapkan Rumus Bunga Kontinu:**\n   $$M(2) = 10.000.000 \\times e^{0{,}05 \\times 2} = 10.000.000 \\times e^{0{,}1}$$\n3. **Hitung Nilai:**\n   $$M(2) = 10.000.000 \\times 1{,}1052 = \\text{Rp11.052.000}$$\n\n**Jawaban:** Estimasi saldo akhir setelah 2 tahun adalah Rp11.052.000."
      },
      {
        "title": "2. Tabel Amortisasi Anuitas Pinjaman Perbankan (KPR)",
        "concept": "Pada pinjaman berbasis anuitas ($A$):\nSetiap pembayaran cicilan bulanan $A$ terbagi menjadi dua komponen:\n$$A = a_n + b_n$$\n- $b_n$: Porsi pembayaran **bunga** bulan ke-$n$ ($b_n = S_{n-1} \\times i$).\n- $a_n$: Porsi pembayaran **angsuran pokok** pinjaman ($a_n = A - b_n$).\n\n**Dinamika Amortisasi Sepanjang Waktu:**\n- Di awal masa kredit: Porsi bunga sangat besar, porsi angsuran pokok kecil.\n- Di akhir masa kredit: Porsi bunga mengecil mendekati nol, porsi angsuran pokok mendominasi.",
        "quickTip": "⚡ **Trik Hubungan Antar Angsuran Pokok:** Porsi angsuran pokok selalu bertumbuh secara geometri dengan rasio $(1 + i)$: $a_n = a_1 (1 + i)^{n-1}$!",
        "exampleProblem": "**Soal:** Suatu pinjaman dilunasi dengan anuitas bulanan Rp1.500.000. Jika sisa pinjaman pada akhir bulan kedua adalah Rp40.000.000 dan suku bunga pinjaman adalah 1,5% per bulan, tentukan besar bunga dan angsuran pokok pada bulan ketiga!\n\n**Langkah Pembahasan:**\n1. **Hitung Bunga Bulan ke-3 ($b_3$):**\n   Bunga dihitung dari sisa utang akhir bulan ke-2 ($S_2$):\n   $$b_3 = S_2 \\times i = 40.000.000 \\times 1{,}5\\% = 40.000.000 \\times 0{,}015 = \\text{Rp600.000}$$\n2. **Hitung Angsuran Pokok Bulan ke-3 ($a_3$):**\n   $$a_3 = A - b_3 = 1.500.000 - 600.000 = \\text{Rp900.000}$$\n\n**Jawaban:** Pada bulan ketiga, porsi bunga adalah Rp600.000 dan angsuran pokok adalah Rp900.000."
      }
    ]
  }
];
