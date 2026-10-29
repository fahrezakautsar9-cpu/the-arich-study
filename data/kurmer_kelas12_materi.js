/**
 * KURIKULUM MERDEKA MATEMATIKA & FISIKA KELAS 12 (FASE F & F LANJUT)
 * Modul Lengkap: Teori Terstruktur, Trik Kilat & Pembahasan Bertahap
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
    ],
    "subject": "Matematika"
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
    ],
    "subject": "Matematika"
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
    ],
    "subject": "Matematika"
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
    ],
    "subject": "Matematika"
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
    ],
    "subject": "Matematika"
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
    ],
    "subject": "Matematika"
  },
  {
    "id": "k12-fisika-listrik-statis",
    "number": "01",
    "badge": "Fisika • Bab 01",
    "subject": "Fisika",
    "title": "Fisika Bab 1: Listrik Statis (Gaya Coulomb, Medan & Potensial Listrik)",
    "summary": "Interaksi elektrostatis muatan titik, medan listrik, hukum Gauss, energi potensial dan potensial listrik, serta karakteristik kapasitor keping sejajar dan rangkaian kapasitor.",
    "subtopics": [
      {
        "title": "1. Hukum Coulomb & Medan Listrik",
        "concept": "Gaya interaksi elektrostatik antara dua muatan titik:<br>$$F = k \\frac{|q_1 q_2|}{r^2}$$<br>dengan tetapan Coulomb $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$. Muatan sejenis tolak-menolak, muatan tak sejenis tarik-menarik.<br>Kuat medan listrik (gaya per satuan muatan uji):<br>$$\\vec{E} = \\frac{\\vec{F}}{q_0} = k \\frac{q}{r^2}\\hat{r}$$.<br>Arah garis gaya medan listrik: keluar dari muatan positif ($+q$) dan masuk menuju muatan negatif ($-q$).",
        "quickTip": "TKB Titik Medan Listrik Nol: Letak titik yang memiliki medan listrik nol di antara dua muatan bertanda sama selalu berada di antara kedua muatan, dan lebih dekat ke muatan yang bernilai lebih kecil. Gunakan perbandingan: $\\frac{r_1}{r_2} = \\sqrt{\\frac{q_1}{q_2}}$!",
        "example": "Dua muatan titik $+q_1 = 4\\,\\mu\\text{C}$ dan $+q_2 = 16\\,\\mu\\text{C}$ terpisah sejauh $30\\text{ cm}$. Tentukan letak titik di antara kedua muatan yang kuat medan listriknya sama dengan nol!<br><strong>Solusi:</strong><br>$$\\frac{r_1}{r_2} = \\sqrt{\\frac{q_1}{q_2}} = \\sqrt{\\frac{4}{16}} = \\frac{2}{4} = \\frac{1}{2}$$<br>Karena $r_1 + r_2 = 30\\text{ cm}$, maka $r_1 = \\frac{1}{1+2} \\times 30 = 10\\text{ cm}$ dari muatan $q_1$."
      },
      {
        "title": "2. Potensial Listrik & Kapasitor Keping Sejajar",
        "concept": "Potensial listrik adalah besaran skalar (tanda muatan $+/-$ ikut dihitung langsung):<br>$$V = k \\frac{q}{r}, \\quad E_p = q V = k \\frac{q_1 q_2}{r}$$<br>Kapasitansi kapasitor keping sejajar:<br>$$C = \\varepsilon_r \\varepsilon_0 \\frac{A}{d}$$<br>Energi yang tersimpan dalam kapasitor: $$W = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C}$$.<br>Rangkaian Kapasitor:<br>- Seri (muatan sama $Q$): $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$.<br>- Paralel (tegangan sama $V$): $C_p = C_1 + C_2$.",
        "quickTip": "TKB Kapasitor Terbalik: Rumus susunan kapasitor berkebalikan persis dengan resistor! Kapasitor Paralel dijumlahkan biasa ($C_p = C_1 + C_2$), sedangkan Kapasitor Seri dijumlahkan secara pecahan invers!",
        "example": "Dua kapasitor $C_1 = 3\\,\\mu\\text{F}$ dan $C_2 = 6\\,\\mu\\text{F}$ disusun seri dan dihubungkan dengan sumber tegangan $12\\text{ V}$. Tentukan muatan total yang tersimpan!<br><strong>Solusi:</strong><br>$$C_s = \\frac{C_1 \\cdot C_2}{C_1 + C_2} = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\,\\mu\\text{F}$$<br>Muatan total: $Q = C_s \\cdot V = 2\\,\\mu\\text{F} \\times 12\\text{ V} = 24\\,\\mu\\text{C}$."
      }
    ]
  },
  {
    "id": "k12-fisika-listrik-dinamis",
    "number": "02",
    "badge": "Fisika • Bab 02",
    "subject": "Fisika",
    "title": "Fisika Bab 2: Listrik Dinamis Arus Searah (DC) & Hukum Kirchhoff",
    "summary": "Arus listrik, hambatan kawat konduktor, rangkaian seri-paralel hambatan, analisis rangkaian loop ganda dengan Hukum I & II Kirchhoff, serta daya listrik.",
    "subtopics": [
      {
        "title": "1. Hambatan Kawat & Rangkaian Resistor",
        "concept": "Kuat arus listrik: $$I = \\frac{Q}{t}$$. Hukum Ohm: $$V = I R$$.<br>Hambatan kawat konduktor homogen:<br>$$R = \\rho \\frac{L}{A}$$<br>di mana $\\rho$ adalah hambatan jenis ($\\Omega\\cdot\\text{m}$), $L$ panjang kawat, dan $A$ luas penampang ($A = \\frac{1}{4}\\pi d^2$).<br>Rangkaian Resistor:<br>- Seri: $R_s = R_1 + R_2 + \\dots$<br>- Paralel: $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$",
        "quickTip": "TKB Tarikan Kawat: Jika kawat silindris ditarik hingga panjangnya menjadi $n$ kali lipat ($L' = nL$), volumenya tetap sehingga luas penampangnya mengecil menjadi $A' = A/n$. Maka hambatannya meningkat menjadi $n^2$ kali semula: $R' = n^2 R$!",
        "example": "Sebuah kawat penghantar memiliki hambatan $R = 5\\,\\Omega$. Kawat tersebut ditarik secara merata hingga panjangnya menjadi 3 kali semula. Tentukan besar hambatan kawat sekarang!<br><strong>Solusi:</strong><br>$$R' = n^2 R = (3)^2 \\times 5 = 9 \\times 5 = 45\\,\\Omega$$."
      },
      {
        "title": "2. Hukum I & II Kirchhoff pada Rangkaian Multiloop",
        "concept": "<strong>Hukum I Kirchhoff (Arus Titik Cabang):</strong><br>$$\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$$<br><strong>Hukum II Kirchhoff (Tegangan Loop Tertutup):</strong><br>$$\\Sigma \\mathcal{E} + \\Sigma (I R) = 0$$<br>Aturan tanda putaran loop:<br>- Jika saat menelusuri loop menjumpai kutub negatif sumber tegangan lebih dulu, maka $\\mathcal{E}$ bernilai negatif ($-$).<br>- Jika arah arus $I$ searah putaran loop, maka $I R$ bernilai positif ($+$).",
        "quickTip": "TKB Rangkaian 1 Loop: Rumus kilat arus pada rangkaian 1 loop adalah $I = \\frac{\\Sigma \\mathcal{E}_{\\text{searah}} - \\Sigma \\mathcal{E}_{\\text{lawan}}}{\\Sigma R + \\Sigma r}$!",
        "example": "Rangkaian 1 loop terdiri dari dua baterai $\\mathcal{E}_1 = 18\\text{ V}, \\mathcal{E}_2 = 6\\text{ V}$ yang saling berlawanan arah, serta tiga resistor seri $R_1 = 2\\,\\Omega, R_2 = 3\\,\\Omega, R_3 = 1\\,\\Omega$. Hitung kuat arus yang mengalir!<br><strong>Solusi:</strong><br>$$I = \\frac{\\mathcal{E}_1 - \\mathcal{E}_2}{R_1 + R_2 + R_3} = \\frac{18 - 6}{2 + 3 + 1} = \\frac{12}{6} = 2\\text{ Ampere}$$."
      }
    ]
  },
  {
    "id": "k12-fisika-medan-magnet-induksi",
    "number": "03",
    "badge": "Fisika • Bab 03",
    "subject": "Fisika",
    "title": "Fisika Bab 3: Medan Magnetik, Gaya Lorentz & Induksi Faraday",
    "summary": "Medan magnet di sekitar kawat berarus, solenoida, toroida, gaya Lorentz pada kawat dan muatan bebas, induksi elektromagnetik Faraday-Lenz, dan transformator.",
    "subtopics": [
      {
        "title": "1. Medan Magnetik & Gaya Lorentz",
        "concept": "Medan magnet di sekitar kawat lurus panjang berarus $I$ pada jarak $a$:<br>$$B = \\frac{\\mu_0 I}{2\\pi a}$$<br>Pada pusat solenoida sepanjang $L$ berinti $N$ lilitan: $$B = \\frac{\\mu_0 N I}{L}$$.<br><strong>Gaya Lorentz:</strong><br>Muatan bergerak dengan kecepatan $\\vec{v}$ dalam medan $\\vec{B}$:<br>$$\\vec{F} = q(\\vec{v} \\times \\vec{B}) \\implies F = q v B \\sin\\theta$$<br>Lintasan muatan yang tegak lurus medan magnetik ($v \\perp B$) berbentuk lingkaran dengan jari-jari: $$R = \\frac{mv}{qB}$$.<br>Gaya Lorentz pada kawat berarus: $$F = B I L \\sin\\theta$$.",
        "quickTip": "TKB Aturan Tangan Kanan Lorentz: Ibu jari = arah arus $I$ (atau kecepatan muatan positif $v$). Empat jari merapat = arah medan magnet $\\vec{B}$. Telapak tangan mendorong = arah Gaya Lorentz $\\vec{F}$ (punggung tangan untuk muatan negatif)!",
        "example": "Sebuah proton ($q = 1{,}6 \\times 10^{-19}\\text{ C}, m = 1{,}67 \\times 10^{-27}\\text{ kg}$) bergerak dengan kecepatan $v = 2 \\times 10^6\\text{ m/s}$ memasuki medan magnet $B = 0{,}5\\text{ T}$ secara tegak lurus. Hitung gaya Lorentz yang dialami proton!<br><strong>Solusi:</strong><br>$$F = q v B \\sin 90^\\circ = (1{,}6 \\times 10^{-19})(2 \\times 10^6)(0{,}5)(1) = 1{,}6 \\times 10^{-13}\\text{ Newton}$$."
      },
      {
        "title": "2. Induksi Elektromagnetik Faraday & Transformator",
        "concept": "Fluks magnetik: $$\\Phi = B A \\cos\\theta$$.<br><strong>Hukum Induksi Faraday:</strong> GGL induksi sebanding dengan laju perubahan fluks magnetik:<br>$$\\mathcal{E} = -N \\frac{d\\Phi}{dt}$$<br>Kawat konduktor panjang $L$ digerakkan memotong medan $B$ dengan kelajuan $v$: $$\\mathcal{E} = B L v$$.<br><strong>Transformator Ideal:</strong><br>$$\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}, \\quad P_{\\text{in}} = P_{\\text{out}}$$.",
        "quickTip": "TKB Trafo Step-Up vs Step-Down: Trafo Step-Up menaikkan tegangan ($V_s > V_p, N_s > N_p$), namun arusnya mengecil ($I_s < I_p$) karena daya listrik kekal ($P = V I$)!",
        "example": "Sebuah transformator ideal memiliki 1000 lilitan primer dan 200 lilitan sekunder. Jika tegangan primer adalah $220\\text{ V}$, tentukan tegangan sekunder dan jenis transformator!<br><strong>Solusi:</strong><br>$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} \\implies V_s = 220 \\times \\frac{200}{1000} = 220 \\times 0{,}2 = 44\\text{ V}$$<br>Karena tegangan turun dari $220\\text{ V}$ menjadi $44\\text{ V}$, transformator adalah Step-Down."
      }
    ]
  },
  {
    "id": "k12-fisika-arus-bolak-balik",
    "number": "04",
    "badge": "Fisika • Bab 04",
    "subject": "Fisika",
    "title": "Fisika Bab 4: Rangkaian Arus Bolak-Balik (AC) & Resonansi RLC",
    "summary": "Karakteristik arus dan tegangan sinusoidal AC, nilai efektif vs maksimum, reaktansi induktif & kapasitif, impedansi rangkaian RLC seri, dan frekuensi resonansi.",
    "subtopics": [
      {
        "title": "1. Karakteristik Sinusoidal & Reaktansi AC",
        "concept": "Tegangan bolak-balik: $$V(t) = V_{\\max} \\sin(\\omega t)$$. Kuat arus: $$I(t) = I_{\\max} \\sin(\\omega t \\pm \\phi)$$.<br>Hubungan nilai efektif dan maksimum:<br>$$V_{\\text{ef}} = \\frac{V_{\\max}}{\\sqrt{2}}, \\quad I_{\\text{ef}} = \\frac{I_{\\max}}{\\sqrt{2}}$$. Alat ukur multimeter mengukur nilai efektif.<br>Elemen rangkaian AC:<br>- Resistor ($R$): arus dan tegangan sefase ($\\phi = 0$).<br>- Induktor murni: tegangan mendahului arus $90^\\circ$, reaktansi induktif $$X_L = \\omega L = 2\\pi f L$$.<br>- Kapasitor murni: arus mendahului tegangan $90^\\circ$, reaktansi kapasitif $$X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}$$.",
        "quickTip": "TKB Sifat Rangkaian RLC: Jika $X_L > X_C$, rangkaian bersifat Induktif (tegangan mendahului arus). Jika $X_C > X_L$, rangkaian bersifat Kapasitif (arus mendahului tegangan). Jika $X_L = X_C$, terjadi Resonansi (sefase, impedansi minimum $Z = R$)!",
        "example": "Induktor $L = 0{,}2\\text{ H}$ dihubungkan ke sumber tegangan AC dengan frekuensi sudut $\\omega = 100\\text{ rad/s}$. Berapakah reaktansi induktifnya?<br><strong>Solusi:</strong><br>$$X_L = \\omega L = 100 \\times 0{,}2 = 20\\,\\Omega$$."
      },
      {
        "title": "2. Impedansi RLC Seri & Resonansi",
        "concept": "Impedansi total rangkaian RLC seri:<br>$$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$<br>Kuat arus efektif: $$I_{\\text{ef}} = \\frac{V_{\\text{ef}}}{Z}$$.<br>Sudut fase: $$\\tan\\phi = \\frac{X_L - X_C}{R}$$.<br>Faktor daya: $$\\cos\\phi = \\frac{R}{Z}$$. Daya rata-rata: $$P_{\\text{avg}} = V_{\\text{ef}} I_{\\text{ef}} \\cos\\phi$$.<br><strong>Keadaan Resonansi Listrik ($X_L = X_C$):</strong><br>$$f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$. Pada resonansi, arus bernilai maksimum dan impedansi bernilai minimum ($Z = R$).",
        "quickTip": "TKB Daya Maksimum Resonansi: Saat resonansi, faktor daya $\\cos\\phi = \\frac{R}{R} = 1$. Seluruh daya diserap penuh oleh resistor!",
        "example": "Rangkaian RLC seri dengan $R = 30\\,\\Omega, X_L = 80\\,\\Omega, X_C = 40\\,\\Omega$ dihubungkan dengan sumber tegangan $V_{\\text{ef}} = 100\\text{ V}$. Tentukan impedansi dan arus efektif rangkaian!<br><strong>Solusi:</strong><br>$$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (80 - 40)^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\Omega$$<br>$$I_{\\text{ef}} = \\frac{V_{\\text{ef}}}{Z} = \\frac{100\\text{ V}}{50\\,\\Omega} = 2\\text{ Ampere}$$."
      }
    ]
  },
  {
    "id": "k12-fisika-relativitas-khusus",
    "number": "05",
    "badge": "Fisika • Bab 05",
    "subject": "Fisika",
    "title": "Fisika Bab 5: Gelombang Elektromagnetik & Relativitas Khusus",
    "summary": "Spektrum gelombang elektromagnetik, postulat relativitas khusus Einstein, dilatasi waktu, kontraksi panjang Lorentz, dan kesetaraan massa-energi relativistik.",
    "subtopics": [
      {
        "title": "1. Spektrum Gelombang Elektromagnetik",
        "concept": "Gelombang elektromagnetik adalah perambatan osilasi medan listrik $\\vec{E}$ dan medan magnetik $\\vec{B}$ yang saling tegak lurus dan merambat tanpa memerlukan medium material.<br>Hubungan cepat rambat cahaya: $$c = \\lambda f = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$$.<br>Urutan spektrum dari frekuensi terendah ke tertinggi (panjang gelombang terpanjang ke terpendek):<br>1. Gelombang Radio<br>2. Gelombang Mikro (Radar/Microwave)<br>3. Inframerah<br>4. Cahaya Tampak (Merah - Jingga - Kuning - Hijau - Biru - Nila - Ungu)<br>5. Ultraviolet<br>6. Sinar-X (Rontgen)<br>7. Sinar Gamma (paling bertenaga).",
        "quickTip": "TKB Jembatan Keledai Spektrum: R-M-I-T-U-X-G (Radio, Mikro, Infra, Tampak, Ultra, X-ray, Gamma). Makin ke kanan, frekuensi ($f$) dan energi foton ($E$) makin besar, namun panjang gelombang ($\\lambda$) makin pendek!",
        "example": "Stasiun radio memancarkan gelombang pada frekuensi $f = 100\\text{ MHz} = 10^8\\text{ Hz}$. Hitung panjang gelombang radio tersebut di udara ($c = 3 \\times 10^8\\text{ m/s}$)!<br><strong>Solusi:</strong><br>$$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{10^8} = 3\\text{ meter}$$."
      },
      {
        "title": "2. Teori Relativitas Khusus Einstein & Fenomena Relativistik",
        "concept": "<strong>Dua Postulat Einstein:</strong><br>1. Hukum fisika memiliki bentuk yang sama dalam semua kerangka inersia.<br>2. Kelajuan cahaya dalam ruang hampa bernilai konstan $c = 3 \\times 10^8\\text{ m/s}$ bagi semua pengamat, tanpa bergantung pada gerak sumber cahaya maupun pengamat.<br>Faktor Lorentz: $$\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} \\ge 1$$.<br><strong>Fenomena Relativistik:</strong><br>- Dilatasi Waktu: $$\\Delta t = \\gamma \\Delta t_0 = \\frac{\\Delta t_0}{\\sqrt{1 - v^2/c^2}}$$ (waktu bergerak terasa lebih lambat).<br>- Kontraksi Panjang: $$L = \\frac{L_0}{\\gamma} = L_0\\sqrt{1 - v^2/c^2}$$ (panjang menyusut hanya pada arah gerak).<br>- Massa Relativistik: $$m = \\gamma m_0$$.<br>- Energi Diam: $$E_0 = m_0 c^2$$. Energi Total: $$E = \\gamma m_0 c^2 = E_0 + E_k$$.",
        "quickTip": "TKB Tripel Phytagoras Relativitas: Jika $v = 0{,}6c$, maka $\\sqrt{1 - v^2/c^2} = 0{,}8$ dan $\\gamma = 1{,}25$. Jika $v = 0{,}8c$, maka $\\sqrt{1 - v^2/c^2} = 0{,}6$ dan $\\gamma = 1{,}67$. Sangat menghemat waktu ujian!",
        "example": "Sebuah pesawat ruang angkasa memiliki panjang diam $L_0 = 100\\text{ meter}$ saat di bumi. Pesawat kemudian terbang dengan kecepatan $v = 0{,}8c$. Berapakah panjang pesawat menurut pengamat di bumi?<br><strong>Solusi:</strong><br>$$L = L_0 \\sqrt{1 - \\left(\\frac{v}{c}\\right)^2} = 100 \\sqrt{1 - (0{,}8)^2} = 100 \\sqrt{1 - 0{,}64} = 100 \\sqrt{0{,}36} = 100 \\times 0{,}6 = 60\\text{ meter}$$."
      }
    ]
  },
  {
    "id": "k12-fisika-kuantum",
    "number": "06",
    "badge": "Fisika • Bab 06",
    "subject": "Fisika",
    "title": "Fisika Bab 6: Radiasi Benda Hitam, Foton & Fisika Kuantum",
    "summary": "Hukum pergeseran Wien, teori kuantum Planck, efek fotolistrik Einstein, efek hamburan Compton, dan hipotesis gelombang materi De Broglie.",
    "subtopics": [
      {
        "title": "1. Radiasi Benda Hitam & Kuantum Planck",
        "concept": "Hukum Stefan-Boltzmann: Daya radiasi $P = e \\sigma A T^4$.<br>Hukum Pergeseran Wien: Panjang gelombang intensitas maksimum berbanding terbalik dengan suhu mutlak benda:<br>$$\\lambda_{\\max} T = C = 2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$$<br>Hipotesis Max Planck: Energi radiasi tidak dipancarkan secara kontinu, melainkan dalam paket-paket diskret (kuanta foton):<br>$$E = n h f = n \\frac{hc}{\\lambda}$$<br>dengan tetapan Planck $h \\approx 6{,}63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ (atau $4{,}14 \\times 10^{-15}\\text{ eV}\\cdot\\text{s}$).",
        "quickTip": "TKB Warna Bintang: Bintang bersuhu sangat panas memancarkan radiasi dengan $\\lambda_{\\max}$ lebih pendek (berwarna biru/putih). Bintang bersuhu lebih dingin memancarkan $\\lambda_{\\max}$ lebih panjang (berwarna merah)!",
        "example": "Permukaan sebuah bintang memancarkan radiasi dengan panjang gelombang puncak $\\lambda_{\\max} = 500\\text{ nm} = 5 \\times 10^{-7}\\text{ m}$. Berapakah suhu permukaan bintang tersebut?<br><strong>Solusi:</strong><br>$$T = \\frac{C}{\\lambda_{\\max}} = \\frac{2{,}898 \\times 10^{-3}}{5 \\times 10^{-7}} = 5796\\text{ Kelvin}$$."
      },
      {
        "title": "2. Efek Fotolistrik & Efek Compton",
        "concept": "<strong>Efek Fotolistrik Einstein:</strong> Elektron terlepas dari permukaan logam ketika disinari foton berfrekuensi di atas frekuensi ambang ($f > f_0$):<br>$$E_{\\text{foton}} = W_0 + E_{k,\\max} \\implies hf = hf_0 + \\frac{1}{2}m v_{\\max}^2 = hf_0 + e V_0$$<br>di mana $W_0$ adalah fungsi kerja logam dan $V_0$ potensial henti.<br>Intensitas cahaya memperbanyak jumlah elektron yang keluar, namun TIDAK menambah energi kinetik maksimum elektron.<br><strong>Efek Compton:</strong> Tumbukan elastis antara foton sinar-X dan elektron bebas:<br>$$\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$$<br><strong>Hipotesis De Broglie (Dualisme Partikel-Gelombang):</strong><br>$$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$$.",
        "quickTip": "TKB Kunci Efek Fotolistrik: Frekuensi cahaya menentukan laju/energi elektron ($E_k$). Intensitas cahaya menentukan banyaknya elektron (kuat arus $I$). Jika $f < f_0$, elektron tidak akan pernah keluar berapapun tingginya intensitas!",
        "example": "Sebuah logam memiliki fungsi kerja $W_0 = 2{,}0\\text{ eV}$. Logam tersebut disinari foton berenergi $3{,}5\\text{ eV}$. Berapakah energi kinetik maksimum fotoelektron yang terlepas?<br><strong>Solusi:</strong><br>$$E_{k,\\max} = E_{\\text{foton}} - W_0 = 3{,}5\\text{ eV} - 2{,}0\\text{ eV} = 1{,}5\\text{ eV}$$."
      }
    ]
  },
  {
    "id": "k12-fisika-inti-radioaktivitas",
    "number": "07",
    "badge": "Fisika • Bab 07",
    "subject": "Fisika",
    "title": "Fisika Bab 7: Fisika Inti, Defek Massa, Energi Ikat & Radioaktivitas",
    "summary": "Struktur nuklida, defek massa, energi ikat inti, hukum peluruhan radioaktif, waktu paruh, serta reaksi fisi dan fusi nuklir.",
    "subtopics": [
      {
        "title": "1. Struktur Inti Atom & Energi Ikat Inti",
        "concept": "Notasi nuklida: $${}_Z^A X$$, dengan $Z$ = nomor atom (jumlah proton), $A$ = nomor massa (proton + neutron $N = A - Z$).<br>Massa inti selalu lebih kecil dari jumlah massa partikel penyusunnya karena sebagian massa terkonversi menjadi energi ikat perekat nukleon.<br><strong>Defek Massa ($\\Delta m$):</strong><br>$$\\Delta m = (Z m_p + (A - Z) m_n) - m_{\\text{inti}}$$<br><strong>Energi Ikat Inti ($E_b$):</strong><br>$$E_b = \\Delta m \\times 931{,}5\\text{ MeV}$$<br>Energi ikat per nukleon: $$\\frac{E_b}{A}$$. Makin besar nilai $E_b/A$, inti atom makin stabil (puncak kestabilan berada pada inti Besi-56).",
        "quickTip": "TKB Konversi Satuan Massa Atom (sma): 1 sma setara dengan $931{,}5\\text{ MeV}$. Cukup kurangkan total massa penyusun dengan massa inti, lalu kalikan $931{,}5\\text{ MeV}$!",
        "example": "Massa proton $m_p = 1{,}0078\\text{ sma}$, massa neutron $m_n = 1{,}0086\\text{ sma}$. Massa inti Helium ${}_2^4\\text{He}$ terukur $4{,}0026\\text{ sma}$. Tentukan energi ikat inti Helium!<br><strong>Solusi:</strong><br>Total massa penyusun ($2p + 2n$):<br>$$2(1{,}0078) + 2(1{,}0086) = 2{,}0156 + 2{,}0172 = 4{,}0328\\text{ sma}$$<br>Defek massa:<br>$$\\Delta m = 4{,}0328 - 4{,}0026 = 0{,}0302\\text{ sma}$$<br>Energi ikat:<br>$$E_b = 0{,}0302 \\times 931{,}5\\text{ MeV} \\approx 28{,}13\\text{ MeV}$$."
      },
      {
        "title": "2. Peluruhan Radioaktif & Reaksi Nuklir",
        "concept": "Inti tidak stabil meluruh dengan memancarkan radiasi partikel alfa (${}_2^4\\alpha$), beta (${}_{-1}^0\\beta$), atau foton gamma (${}_0^0\\gamma$).<br><strong>Hukum Peluruhan Eksponensial:</strong><br>$$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t / T_{1/2}}$$<br>di mana $T_{1/2}$ adalah waktu paruh ($T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0{,}693}{\\lambda}$).<br>Aktivitas radioaktif: $$A = \\lambda N$$.<br><strong>Reaksi Fisi:</strong> Pembelahan inti berat (seperti U-235) menjadi dua inti sedang disertai pemancaran neutron dan energi luar biasa (dasar PLTN & bom atom).<br><strong>Reaksi Fusi:</strong> Penggabungan inti-inti ringan (seperti isotop Hidrogen) menjadi inti yang lebih berat (sumber energi matahari dan bintang).",
        "quickTip": "TKB Kelipatan Waktu Paruh: Jika berlalu $n$ kali waktu paruh ($t = n \\cdot T_{1/2}$), sisa zat tinggal $\\left(\\frac{1}{2}\\right)^n$ bagian: setelah $1T_{1/2} \\to 50\\%$, setelah $2T_{1/2} \\to 25\\%$, setelah $3T_{1/2} \\to 12{,}5\\%$, setelah $4T_{1/2} \\to 6{,}25\\%$!",
        "example": "Suatu unsur radioaktif memiliki waktu paruh $T_{1/2} = 4\\text{ hari}$. Jika mula-mula terdapat $80\\text{ gram}$ unsur tersebut, berapa gram yang tersisa setelah 12 hari?<br><strong>Solusi:</strong><br>Jumlah periode paruh: $n = \\frac{t}{T_{1/2}} = \\frac{12}{4} = 3$.<br>Sisa zat: $$N(12) = 80 \\times \\left(\\frac{1}{2}\\right)^3 = 80 \\times \\frac{1}{8} = 10\\text{ gram}$$."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.KURMER_KELAS12_DATA;
}
