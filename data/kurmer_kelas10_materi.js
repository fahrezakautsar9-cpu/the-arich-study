/**
 * KURIKULUM MERDEKA MATEMATIKA & FISIKA KELAS 10 (FASE E)
 * Dilengkapi Visualisasi Konsep & Bedah Diagram Multi-Panel
 */

const KURMER_KELAS10_DATA = [
  {
    "id": "k10-eksponen-logaritma",
    "number": "01",
    "title": "Bab 1: Eksponen, Fungsi Pertumbuhan & Logaritma",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "trending-up",
    "summary": "Dinamika pertumbuhan dan peluruhan eksponensial: pelajari sifat-sifat pangkat rasional, pemodelan pembelahan bakteri ($y = y_0 \\cdot a^x$) dan peluruhan zat radioaktif, serta invers eksponen yaitu fungsi logaritma dengan sifat operasi dan aplikasinya pada skala Richter gempa bumi.",
    "subtopics": [
      {
        "title": "1. Fungsi Eksponensial & Pertumbuhan-Peluruhan",
        "concept": "Fungsi eksponensial memiliki bentuk umum $f(x) = k \\cdot a^x$ dengan $a > 0$ dan $a \\ne 1$.\n\n1. **Pertumbuhan Eksponensial ($a > 1$):**\n   $$N(t) = N_0(1 + r)^t \\quad \\text{atau} \\quad N(t) = N_0 \\cdot 2^{t/T}$$\n   Digunakan pada pemodelan pembelahan sel, pertumbuhan penduduk, dan investasi bunga majemuk.\n2. **Peluruhan Eksponensial ($0 < a < 1$):**\n   $$N(t) = N_0(1 - r)^t \\quad \\text{atau} \\quad N(t) = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$$\n   Digunakan pada peluruhan zat radioaktif (waktu paruh $T_{1/2}$) dan penyusutan harga aset kendaraan.",
        "quickTip": "💡 **Analogi Virus Membelah Diri:** Jika 1 bakteri membelah menjadi 2 setiap 20 menit, dalam 1 jam (3 periode pembelahan) jumlahnya menjadi $1 \\times 2^3 = 8$ bakteri. Pertumbuhannya eksponensial, bukan penjumlahan linear!",
        "exampleProblem": "**Soal:** Suatu populasi bakteri awalnya berjumlah 500 sel. Bakteri tersebut membelah diri menjadi 2 setiap 15 menit. Berapakah jumlah populasi bakteri setelah 2 jam?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $N_0 = 500$, faktor perbanyakan $a = 2$, periode $T = 15 \\text{ menit}$.\n2. **Hitung Banyak Periode ($t$):**\n   $2 \\text{ jam} = 120 \\text{ menit}$.\n   $$n = \\frac{120}{15} = 8 \\text{ periode pembelahan}$$\n3. **Hitung Populasi Akhir:**\n   $$N(8) = 500 \\times 2^8 = 500 \\times 256 = 128.000 \\text{ sel}$$\n\n**Jawaban:** Jumlah bakteri setelah 2 jam adalah 128.000 sel.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-eksponen-logaritma_0.svg",
          "title": "Geometri Kurva Eksponensial, Pembelahan Sel & Peluruhan Waktu Paruh",
          "caption": "Perbandingan kurva pertumbuhan eksponensial (a > 1) dan peluruhan (0 < a < 1) yang berpotongan di (0,1) dengan asimtot datar y = 0.",
          "guide": [
            "Perhatikan Panel A: kurva biru $y = 2^x$ selalu naik secara eksponensial, sedangkan kurva merah $y = (1/2)^x$ meluruh mendekati sumbu-X namun tidak pernah menyentuh $y = 0$ (asimtot datar).",
            "Kedua kurva wajib melewati titik $(0, k)$ atau $(0, 1)$ untuk $k=1$ karena bilangan positif berpangkat nol selalu bernilai $1$.",
            "Pada Panel B, pertumbuhan bakteri melipatgandakan populasi ($\\times 2$) setiap periode $T$, sementara zat radioaktif menyusut menjadi separuhnya ($\\times 1/2$) setiap waktu paruh $T_{1/2}$."
          ]
        }
      },
      {
        "title": "2. Logaritma & Sifat Operasi Sakti",
        "concept": "Logaritma adalah invers (kebalikan) dari eksponensial:\n$${}^a\\log b = c \\iff a^c = b, \\quad a > 0, a \\ne 1, b > 0$$\n\n**Sifat-sifat Penting Logaritma:**\n1. ${}^a\\log(b \\cdot c) = ^a\\log b + ^a\\log c$\n2. ${}^a\\log\\left(\\frac{b}{c}\\right) = ^a\\log b - ^a\\log c$\n3. ${}^a\\log b^n = n \\cdot ^a\\log b$\n4. $^{a^m}\\log b^n = \\frac{n}{m} \\cdot ^a\\log b$\n5. **Pergantian Basis:** ${}^a\\log b = \\frac{^c\\log b}{^c\\log a} = \\frac{1}{^b\\log a}$\n6. **Sifat Berantai:** ${}^a\\log b \\cdot ^b\\log c \\cdot ^c\\log d = ^a\\log d$\n7. $a^{^a\\log b} = b$",
        "quickTip": "⚡ **Trik Rantai Domino:** Perhatikan sifat ${}^a\\log b \\cdot ^b\\log c = ^a\\log c$. Basis dan numerus yang bersebelahan bagaikan kartu domino yang saling membatalkan!",
        "exampleProblem": "**Soal:** Hitunglah nilai dari ${}^2\\log 48 + ^2\\log \\sqrt{1/16} - ^2\\log 3$!\n\n**Langkah Pembahasan:**\n1. **Sederhanakan Nilai yang Mudah Terlebih Dahulu:**\n   $$\\sqrt{1/16} = \\frac{1}{4} = 2^{-2} \\implies {}^2\\log(2^{-2}) = -2$$\n2. **Gabungkan Logaritma yang Tersisa dengan Sifat Pembagian:**\n   $$^2\\log 48 - ^2\\log 3 = ^2\\log\\left(\\frac{48}{3}\\right) = ^2\\log 16 = ^2\\log 2^4 = 4$$\n3. **Jumlahkan Seluruh Hasil:**\n   $$4 + (-2) = 2$$\n\n**Hasil Akhir:** $2$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-eksponen-logaritma_1.svg",
          "title": "Simetri Invers Logaritma & Mekanisme Sifat Rantai Domino",
          "caption": "Kurva logaritma sebagai bayangan cermin eksponen terhadap garis y = x, dilengkapi visualisasi pencoretan rantai domino.",
          "guide": [
            "Pada Panel A, setiap titik $(a, b)$ pada kurva eksponen $y = 2^x$ dicerminkan terhadap garis $y = x$ menjadi titik $(b, a)$ pada kurva $y = {}^2\\log x$ (misalnya $(2,4) \\leftrightarrow (4,2)$).",
            "Syarat numerus logaritma wajib positif ($x > 0$), sehingga sumbu-$Y$ ($x = 0$) menjadi asimtot tegak bagi kurva logaritma.",
            "Pada Panel B, sifat berantai ${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$ memungkinkan pencoretan kilat ketika numerus kiri sama dengan basis kanan."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-barisan-deret",
    "number": "02",
    "title": "Bab 2: Barisan, Deret & Deret Geometri Tak Hingga",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "repeat",
    "summary": "Pola deret angka diskrit: telaah barisan dan deret aritmetika vs geometri, konsep konvergensi deret geometri tak hingga ($|r| < 1$), serta aplikasi fisik pantulan bola elastis dan model keuangan.",
    "subtopics": [
      {
        "title": "1. Barisan & Deret Geometri Berhingga",
        "concept": "Barisan geometri memiliki rasio antar dua suku berurutan yang konstan: $r = \\frac{U_n}{U_{n-1}}$.\n\n**Rumus Suku ke-$n$ ($U_n$):**\n$$U_n = a \\cdot r^{n-1}$$\n\n**Rumus Jumlah $n$ Suku Pertama ($S_n$):**\n$$S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (\\text{jika } r > 1) \\quad \\text{atau} \\quad S_n = \\frac{a(1 - r^n)}{1 - r} \\quad (\\text{jika } r < 1)$$",
        "quickTip": "⚡ **Trik Eliminasi Rasio:** Jika diketahui dua suku sembarang $U_p$ dan $U_q$, langsung bagi keduanya untuk mendapatkan rasio:\n$$\\frac{U_p}{U_q} = r^{p - q}$$",
        "exampleProblem": "**Soal:** Suatu barisan geometri memiliki suku ke-2 bernilai 6 dan suku ke-5 bernilai 162. Tentukan rasio dan jumlah 6 suku pertama barisan tersebut!\n\n**Langkah Pembahasan:**\n1. **Cari Nilai Rasio ($r$):**\n   $$\\frac{U_5}{U_2} = \\frac{a r^4}{a r^1} = r^3 \\implies \\frac{162}{6} = 27 \\implies r = \\sqrt[3]{27} = 3$$\n2. **Cari Suku Pertama ($a$):**\n   $$U_2 = a \\cdot 3 = 6 \\implies a = 2$$\n3. **Hitung Jumlah 6 Suku Pertama ($S_6$):**\n   $$S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 728$$\n\n**Jawaban:** Rasio $r = 3$ dan $S_6 = 728$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-barisan-deret_0.svg",
          "title": "Tangga Pertumbuhan Eksponensial Barisan & Deret Geometri",
          "caption": "Lonjakan nilai suku barisan geometri dengan rasio pengali konstan r = 3 beserta akumulasi jumlah deret S_n.",
          "guide": [
            "Pada Panel A, setiap suku diperoleh dengan mengalikan suku sebelumnya dengan rasio $r = 3$ ($2 \\to 6 \\to 18 \\to 54 \\to 162$).",
            "Gunakan jalan pintas pembagian dua suku: $U_p / U_q = r^{p-q}$ untuk menemukan rasio tanpa mencari suku pertama terlebih dahulu.",
            "Pada Panel B, jumlah $n$ suku pertama $S_n$ terakumulasi dengan cepat mengikuti formula $S_n = a(r^n - 1)/(r - 1)$."
          ]
        }
      },
      {
        "title": "2. Deret Geometri Tak Hingga & Lintasan Pantulan Bola",
        "concept": "Deret geometri tak hingga $a + ar + ar^2 + \\dots$ dikatakan **konvergen** (memiliki nilai batas pasti) jika dan hanya jika rasio memenuhi syaraf kelayakan: $|r| < 1$ (yaitu $-1 < r < 1$).\n\n**Rumus Deret Geometri Tak Hingga Konvergen:**\n$$S_\\infty = \\frac{a}{1 - r}$$\n\n**Kasus Khusus Pantulan Bola yang Dijatuhkan dari Ketinggian $h$:**\nJika bola memantul kembali dengan rasio $r = \\frac{p}{q}$, maka total panjang lintasan bola sampai berhenti adalah:\n$$S_{\\text{lintasan}} = h \\cdot \\left(\\frac{q + p}{q - p}\\right)$$",
        "quickTip": "⚡ **Rumus Sakti Bola Memantul:** Untuk bola dijatuhkan dari tinggi $h$ dengan pantulan $\\frac{p}{q}$, langsung gunakan trik: 'Tinggi dikali (bawah + atas) dibagi (bawah - atas)'!",
        "exampleProblem": "**Soal:** Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian $\\frac{3}{4}$ dari tinggi sebelumnya. Pemantulan ini berlangsung terus menerus hingga bola berhenti. Tentukan panjang seluruh lintasan yang ditempuh bola!\n\n**Langkah Pembahasan:**\n1. **Gunakan Rumus Sakti Pantulan Bola:**\n   Tinggi awal $h = 12$, rasio $\\frac{p}{q} = \\frac{3}{4} \\implies p = 3, q = 4$.\n   $$S_{\\text{lintasan}} = 12 \\times \\left(\\frac{4 + 3}{4 - 3}\\right) = 12 \\times \\left(\\frac{7}{1}\\right) = 84 \\text{ meter}$$\n\n**Jawaban:** Panjang seluruh lintasan bola hingga berhenti adalah 84 meter.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-barisan-deret_1.svg",
          "title": "Lintasan Bola Memantul & Konvergensi Deret Geometri Tak Hingga",
          "caption": "Pemisahan lintasan turun dan lintasan naik pada pantulan bola elastis serta pendekatan kurva jumlah parsial menuju batas S_tak_hingga.",
          "guide": [
            "Perhatikan Panel A: saat bola dijatuhkan dari tinggi $h_0$, lintasan pertamanya hanya turun satu kali ($h_0$), sedangkan setiap pantulan berikutnya ditempuh dua kali (naik dan turun).",
            "Gunakan rumus kilat $S_{\\text{total}} = h_0 (q+p)/(q-p)$ untuk bola yang dijatuhkan dari atas dengan rasio pantulan $p/q$.",
            "Pada Panel B, karena $|r| = 3/4 < 1$, jumlah parsial $S_n$ semakin mendekati garis batas asimtot $S_\\infty = a/(1-r) = 48$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-vektor",
    "number": "03",
    "title": "Bab 3: Vektor pada Bidang & Ruang Serta Perkalian Titik",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "navigation",
    "summary": "Bahasa matematika gaya dan ruang: pelajari representasi vektor dimensi 2 dan dimensi 3, panjang vektor $|\\mathbf{v}|$, operasi aljabar vektor, perkalian titik (Dot Product) $\\mathbf{u} \\cdot \\mathbf{v}$, besar sudut antar-vektor, serta proyeksi ortogonal.",
    "subtopics": [
      {
        "title": "1. Komponen Basis Vektor & Besar Panjang Vektor",
        "concept": "Vektor adalah besaran yang memiliki nilai dan arah. Pada $\\mathbb{R}^3$, vektor ditulis:\n$$\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k} = \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}$$\n\n**Panjang (Magnitudo) Vektor:**\n$$|\\mathbf{v}| = \\sqrt{x^2 + y^2 + z^2}$$\n\n**Vektor Satuan:** Vektor berpanjang 1 yang searah dengan $\\mathbf{v}$:\n$$\\hat{\\mathbf{u}} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}$$",
        "quickTip": "💡 **Analogi Navigasi Drone:** Komponen $\\mathbf{i}$ adalah gerak maju-mundur, $\\mathbf{j}$ gerak kiri-kanan, dan $\\mathbf{k}$ gerak naik-turun. Panjang vektor adalah jarak lurus drone dari titik lepas landas!",
        "exampleProblem": "**Soal:** Diketahui vektor $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}$. Tentukan panjang vektor $\\mathbf{a}$ dan vektor satuan yang searah dengan $\\mathbf{a}$!\n\n**Langkah Pembahasan:**\n1. **Hitung Panjang Vektor $|\\mathbf{a}|$:**\n   $$|\\mathbf{a}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$\n2. **Bentuk Vektor Satuan $\\hat{\\mathbf{a}}$:**\n   $$\\hat{\\mathbf{a}} = \\frac{1}{7}(2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}) = \\frac{2}{7}\\mathbf{i} - \\frac{3}{7}\\mathbf{j} + \\frac{6}{7}\\mathbf{k}$$\n\n**Jawaban:** Panjang vektor adalah 7 dan vektor satuannya adalah $\\frac{2}{7}\\mathbf{i} - \\frac{3}{7}\\mathbf{j} + \\frac{6}{7}\\mathbf{k}$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-vektor_0.svg",
          "title": "Komponen Basis Kartesius, Panjang Vektor 3D & Vektor Satuan",
          "caption": "Penguraian vektor 2D beserta vektor satuannya pada lingkaran berjari-jari 1, serta geometri balok 3D untuk panjang vektor ruang.",
          "guide": [
            "Pada Panel A, vektor $\\vec{v} = 4\\hat{i} + 3\\hat{j}$ membentuk segitiga siku-siku dengan panjang hipotenusa $|\\vec{v}| = 5$, dan vektor satuannya $\\hat{u} = \\vec{v}/|\\vec{v}|$ memiliki panjang tepat $1$.",
            "Pada Panel B, panjang vektor ruang $\\vec{a} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ ekuivalen dengan panjang diagonal ruang balok tiga dimensi: $|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}$."
          ]
        }
      },
      {
        "title": "2. Perkalian Titik (Dot Product) & Sudut Antar Vektor",
        "concept": "Perkalian titik antara dua vektor $\\mathbf{u}$ dan $\\mathbf{v}$ menghasilkan besaran skalar:\n$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\\mathbf{u}| |\\mathbf{v}| \\cos\\theta$$\n\n**Kosinus Sudut Antara Dua Vektor:**\n$$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{|\\mathbf{u}| |\\mathbf{v}|}$$\n\n**Sifat Ortogonal (Tegak Lurus):**\nDua vektor saling tegak lurus ($\\theta = 90^\\circ$) jika dan hanya jika dot product keduanya sama dengan **nol**:\n$$\\mathbf{u} \\perp \\mathbf{v} \\iff \\mathbf{u} \\cdot \\mathbf{v} = 0$$",
        "quickTip": "⚡ **Trik Tegak Lurus Dot Product:** Setiap melihat soal 'kedua vektor saling tegak lurus', langsung buat persamaan $\\mathbf{u} \\cdot \\mathbf{v} = 0$ untuk mencari variabel yang belum diketahui!",
        "exampleProblem": "**Soal:** Diketahui $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ dan $\\mathbf{b} = \\begin{pmatrix} 2 \\\\ x \\\\ 4 \\end{pmatrix}$. Jika vektor $\\mathbf{a}$ tegak lurus dengan vektor $\\mathbf{b}$, tentukan nilai $x$!\n\n**Langkah Pembahasan:**\n1. **Gunakan Syarat Tegak Lurus $\\mathbf{a} \\cdot \\mathbf{b} = 0$:**\n   $$(3)(2) + (-1)(x) + (2)(4) = 0$$\n2. **Hitung Aljabar:**\n   $$6 - x + 8 = 0 \\implies 14 - x = 0 \\implies x = 14$$\n\n**Jawaban:** Nilai $x$ adalah 14.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-vektor_1.svg",
          "title": "Geometri Perkalian Titik (Dot Product) & Uji Sudut Antar Vektor",
          "caption": "Interpretasi proyeksi ortogonal pada perkalian titik vektor serta hubungan tanda dot product terhadap jenis sudut lancip, siku-siku, dan tumpul.",
          "guide": [
            "Pada Panel A, perkalian titik $\\vec{u}\\cdot\\vec{v}$ mengukur seberapa searah kedua vektor dengan mengalikan panjang proyeksi $|\\vec{u}|\\cos\\theta$ terhadap $|\\vec{v}|$.",
            "Pada Panel B, tanda hasil kali titik langsung menentukan jenis sudut: positif berarti lancip, nol berarti tegak lurus ($90^\\circ$), dan negatif berarti tumpul."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-trigonometri-dasar",
    "number": "04",
    "title": "Bab 4: Trigonometri Segitiga Siku-Siku & Relasi 4 Kuadran",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "compass",
    "summary": "Dasar trigonometri modern: pahami perbandingan sisi demi-sami-desa (Sin, Cos, Tan), nilai sudut istimewa 0-90 derajat, lingkaran satuan kartesius, hingga tanda kuadran ASTC (All-Sin-Tan-Cos) di keempat kuadran.",
    "subtopics": [
      {
        "title": "1. Perbandingan Sisi Siku-Siku (Demi - Sami - Desa)",
        "concept": "Pada segitiga siku-siku dengan sudut acuan $\\theta$:\n- Sisi Depan = sisi yang berhadapan langsung dengan sudut $\\theta$.\n- Sisi Samping = sisi di sebelah sudut $\\theta$ (selain hipotenusa).\n- Sisi Miring = hipotenusa (sisi terpanjang di depan sudut $90^\\circ$).\n\n**Rasio Trigonometri Utama:**\n1. $\\sin\\theta = \\frac{\\text{Depan}}{\\text{Miring}}$ *(Demi)*\n2. $\\cos\\theta = \\frac{\\text{Samping}}{\\text{Miring}}$ *(Sami)*\n3. $\\tan\\theta = \\frac{\\text{Depan}}{\\text{Samping}}$ *(Desa)*\n\n**Kebalikan Trigonometri:**\n- $\\csc\\theta = \\frac{1}{\\sin\\theta}$\n- $\\sec\\theta = \\frac{1}{\\cos\\theta}$\n- $\\cot\\theta = \\frac{1}{\\tan\\theta}$",
        "quickTip": "💡 **Jembatan Keledai Nusantara:** Ingat mantra sakti: **SIN-DEMI**, **COS-SAMI**, **TAN-DESA**! Sekali hafal, perbandingan sudut tidak akan pernah tertukar!",
        "exampleProblem": "**Soal:** Pada segitiga siku-siku $ABC$ di titik $B$, diketahui $\\sin A = \\frac{5}{13}$. Tentukan nilai dari $\\cos A$ dan $\\tan A$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Sisi Berdasarkan $\\sin A = \\frac{\\text{Depan}}{\\text{Miring}} = \\frac{5}{13}$:**\n   - Sisi depan = 5\n   - Sisi miring = 13\n2. **Cari Sisi Samping Menggunakan Pythagoras:**\n   $$\\text{Samping} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\n3. **Hitung $\\cos A$ dan $\\tan A$:**\n   $$\\cos A = \\frac{\\text{Samping}}{\\text{Miring}} = \\frac{12}{13}$$\n   $$\\tan A = \\frac{\\text{Depan}}{\\text{Samping}} = \\frac{5}{12}$$\n\n**Jawaban:** $\\cos A = \\frac{12}{13}$ dan $\\tan A = \\frac{5}{12}$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-trigonometri-dasar_0.svg",
          "title": "Anatomi Sisi Segitiga Siku-Siku (Demi-Sami-Desa) & Segitiga Istimewa",
          "caption": "Identifikasi sisi Depan, Samping, dan Miring terhadap sudut acuan theta, serta rasio baku segitiga siku-siku sudut istimewa.",
          "guide": [
            "Perhatikan Panel A: Sisi Depan (De) selalu berhadapan langsung dengan sudut $\\theta$, Sisi Miring (Mi) berada di depan sudut siku-siku $90^\\circ$, dan Sisi Samping (Sa) mengapit sudut $\\theta$.",
            "Pada Panel B, dengan mengingat perbandingan sisi segitiga $30^\\circ\\text{--}60^\\circ\\text{--}90^\\circ$ ($1:\\sqrt{3}:2$) dan $45^\\circ\\text{--}45^\\circ\\text{--}90^\\circ$ ($1:1:\\sqrt{2}$), seluruh nilai trigonometri sudut istimewa dapat diturunkan seketika."
          ]
        }
      },
      {
        "title": "2. Sudut Berelasi di 4 Kuadran (Mantra ASTC)",
        "concept": "Tanda nilai trigonometri pada 4 kuadran ditentukan oleh posisi koordinat $(x, y)$:\n- **Kuadran I ($0^\\circ - 90^\\circ$):** **A**ll positif (Sin, Cos, Tan semuanya $+ $).\n- **Kuadran II ($90^\\circ - 180^\\circ$):** Hanya **S**inus dan Csc yang bernilai $+ $.\n- **Kuadran III ($180^\\circ - 270^\\circ$):** Hanya **T**angen dan Cot yang bernilai $+ $.\n- **Kuadran IV ($270^\\circ - 360^\\circ$):** Hanya **C**osinus dan Sec yang bernilai $+ $.\n\n**Formula Relasi Sudut Genap ($180^\\circ \\pm \\alpha$ dan $360^\\circ - \\alpha$):**\nNama fungsi TETAP (Sin tetap Sin, Cos tetap Cos), tanda disesuaikan dengan kuadran!\n- $\\sin(180^\\circ - \\alpha) = +\\sin\\alpha$\n- $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$\n- $\\tan(180^\\circ + \\alpha) = +\\tan\\alpha$",
        "quickTip": "⚡ **Mantra ASTC:** Hafalkan frase: **A**ku **S**uka **T**ahu **C**ampur (All, Sin, Tan, Cos) searah putaran kuadran I $\\to$ II $\\to$ III $\\to$ IV!",
        "exampleProblem": "**Soal:** Hitunglah nilai pasti dari $\\cos 150^\\circ + \\sin 300^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Ubah Sudut Menggunakan Sudut Berelasi:**\n   - $150^\\circ$ berada di **Kuadran II** (Cosinus bernilai negatif):\n     $$\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n   - $300^\\circ$ berada di **Kuadran IV** (Sinus bernilai negatif):\n     $$\\sin 300^\\circ = \\sin(360^\\circ - 60^\\circ) = -\\sin 60^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n2. **Jumlahkan Keduanya:**\n   $$-\\frac{1}{2}\\sqrt{3} + \\left(-\\frac{1}{2}\\sqrt{3}\\right) = -\\sqrt{3}$$\n\n**Hasil Akhir:** $-\\sqrt{3}$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-trigonometri-dasar_1.svg",
          "title": "Lingkaran Satuan 4 Kuadran (ASTC) & Grafik Tanda Gelombang",
          "caption": "Pemetaan sudut berelasi 30, 150, 210, dan 330 derajat pada lingkaran satuan beserta kurva sinus dan kosinus di empat kuadran.",
          "guide": [
            "Pada Panel A, koordinat titik pada lingkaran satuan adalah $(x, y) = (\\cos\\theta, \\sin\\theta)$, sehingga tanda positif/negatif mengikuti kuadran Kartesius (All - Sin - Tan - Cos).",
            "Gunakan acuan horizontal ($180^\\circ \\pm \\alpha$ atau $360^\\circ - \\alpha$) agar nama fungsi trigonometri tetap (Sin tetap Sin, Cos tetap Cos).",
            "Pada Panel B, terlihat jelas mengapa $\\sin 150^\\circ = +1/2$ (masih di atas sumbu-X pada Kuadran II) sedangkan $\\cos 150^\\circ = -\\frac{1}{2}\\sqrt{3}$ (di bawah sumbu-X)."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-aturan-sin-cos",
    "number": "05",
    "title": "Bab 5: Aturan Sinus, Aturan Cosinus & Luas Segitiga",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "triangle",
    "summary": "Trigonometri segitiga sembarang: atasi segitiga non-siku-siku menggunakan Aturan Sinus, Aturan Cosinus untuk menghitung sudut dan sisi tersembunyi, luas segitiga dua sisi satu sudut apit, serta navigasi jurusan 3 angka kapal laut.",
    "subtopics": [
      {
        "title": "1. Aturan Sinus & Aturan Cosinus Segitiga Sembarang",
        "concept": "Pada sembarang segitiga $ABC$ dengan sisi $a, b, c$ di depan sudut $A, B, C$:\n\n1. **Aturan Sinus (Digunakan jika diketahui sisi dan sudut yang saling berhadapan):**\n   $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$\n   *(di mana $R$ adalah jari-jari lingkaran luar segitiga)*.\n\n2. **Aturan Cosinus (Digunakan jika diketahui 2 sisi & 1 sudut apit, atau 3 sisi):**\n   $$a^2 = b^2 + c^2 - 2bc\\cos A$$\n   $$b^2 = a^2 + c^2 - 2ac\\cos B$$\n   $$c^2 = a^2 + b^2 - 2ab\\cos C$$\n   Mencari sudut: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.",
        "quickTip": "⚡ **Trik Pemilihan Rumus:** Jika diketahui pasangan sudut dan sisi seberangnya $\\implies$ pilih **Aturan Sinus**. Jika diketahui susunan sisi-sudut-sisi yang menjepit atau ketiga sisinya $\\implies$ wajib pilih **Aturan Cosinus**!",
        "exampleProblem": "**Soal:** Pada segitiga $ABC$, diketahui panjang $b = 6 \\text{ cm}$, $c = 10 \\text{ cm}$, dan besar sudut $\\angle A = 60^\\circ$. Tentukan panjang sisi $a$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Kasus Sisi-Sudut-Sisi:** Gunakan Aturan Cosinus.\n   $$a^2 = b^2 + c^2 - 2bc\\cos A$$\n2. **Substitusi Nilai:**\n   $$a^2 = 6^2 + 10^2 - 2(6)(10)\\cos 60^\\circ$$\n   $$a^2 = 36 + 100 - 120\\left(\\frac{1}{2}\\right) = 136 - 60 = 76$$\n3. **Tarik Akar:**\n   $$a = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19} \\text{ cm}$$\n\n**Jawaban:** Panjang sisi $a$ adalah $2\\sqrt{19}$ cm.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-aturan-sin-cos_0.svg",
          "title": "Geometri Aturan Sinus (Sisi-Sudut Berhadapan) & Aturan Cosinus (SAS)",
          "caption": "Perbandingan penggunaan Aturan Sinus saat diketahui pasangan sisi-sudut berhadapan dan Aturan Cosinus saat diketahui dua sisi mengapit satu sudut.",
          "guide": [
            "Pada Panel A, gunakan Aturan Sinus ketika terdapat sepasang sisi dan sudut yang saling berhadapan lengkap (misalnya pasangan $a$ dan $\\angle A$).",
            "Pada Panel B, gunakan Aturan Cosinus ketika diketahui dua sisi yang mengapit satu sudut (SAS) atau ketika ketiga sisi segitiga diketahui (SSS)."
          ]
        }
      },
      {
        "title": "2. Luas Segitiga Trigonometri & Navigasi Jurusan 3 Angka",
        "concept": "1. **Luas Segitiga dengan Sudut Apit:**\n   $$L = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B$$\n2. **Jurusan Tiga Angka (Bearing):**\n   Arah diukur searah jarum jam mulai dari arah **Utara ($000^\\circ$)**. Contoh: Timur $= 090^\\circ$, Selatan $= 180^\\circ$, Barat Daya $= 225^\\circ$.",
        "quickTip": "💡 **Aplikasi Navigasi Kapal:** Pergerakan kapal dari pelabuhan $A$ ke $B$ lalu berbelok ke $C$ selalu membentuk segitiga di permukaan laut. Sudut segitiga di titik belok dihitung dari selisih azimuth utara!",
        "exampleProblem": "**Soal:** Hitunglah luas sebuah segitiga yang memiliki panjang dua sisi berturut-turut 8 cm dan 12 cm serta membentuk sudut apit $30^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Terapkan Rumus Luas Segitiga Trigonometri:**\n   $$L = \\frac{1}{2} \\times 8 \\times 12 \\times \\sin 30^\\circ$$\n2. **Hitung Nilai:**\n   $$L = 48 \\times \\frac{1}{2} = 24 \\text{ cm}^2$$\n\n**Jawaban:** Luas segitiga tersebut adalah $24 \\text{ cm}^2$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-aturan-sin-cos_1.svg",
          "title": "Rumus Luas Segitiga Sinus & Kompas Navigasi Jurusan Tiga Angka",
          "caption": "Penurunan luas segitiga L = 1/2 ab sin C dari proyeksi garis tinggi serta diagram arah kompas jurusan tiga angka searah jarum jam dari Utara.",
          "guide": [
            "Pada Panel A, tinggi segitiga $t$ yang ditarik dari titik $A$ memenuhi $t = b\\sin C$, sehingga luas segitiga menjadi $L = \\frac{1}{2}ab\\sin C$.",
            "Pada Panel B, jurusan tiga angka selalu diukur dari arah Utara ($000^\\circ$) berputar searah jarum jam; gunakan sifat sudut dalam sepihak garis Utara untuk menemukan sudut dalam segitiga."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-spltv-sptldv",
    "number": "06",
    "title": "Bab 6: Sistem Persamaan Linear Tiga Variabel (SPLTV) & SPtLDV",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "box",
    "summary": "Analisis aljabar simultan multidimensi: selesaikan SPLTV melalui eliminasi terencana atau aturan Determinan Sarrus, serta lukis Daerah Himpunan Penyelesaian (DHP) Sistem Pertidaksamaan Linear Dua Variabel.",
    "subtopics": [
      {
        "title": "1. Penyelesaian Sistematis SPLTV",
        "concept": "Bentuk umum SPLTV:\n$$\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}$$\n\n**Strategi Reduksi Bertahap:**\n1. Pilih salah satu variabel yang koefisiennya paling mudah untuk dieliminasi (misal $z$).\n2. Pasangkan Persamaan (1) & (2) untuk mengeliminasi $z$, menghasilkan Persamaan (4) bervariabel $(x, y)$.\n3. Pasangkan Persamaan (2) & (3) untuk mengeliminasi variabel yang sama ($z$), menghasilkan Persamaan (5) bervariabel $(x, y)$.\n4. Selesaikan SPLDV dari Persamaan (4) dan (5) untuk mendapatkan nilai $x$ dan $y$.\n5. Substitusikan $x$ dan $y$ ke salah satu persamaan awal untuk mendapatkan $z$.",
        "quickTip": "⚡ **Trik Konsistensi Eliminasi:** Kunci sukses SPLTV adalah **jangan mengganti variabel target eliminasi** di tengah jalan! Jika di langkah awal kamu memutuskan menghilangkan $z$, maka pada pasangan persamaan berikutnya kamu WAJIB menghilangkan $z$ juga!",
        "exampleProblem": "**Soal:** Tentukan nilai $x + y + z$ dari SPLTV berikut:\n$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\n\n**Langkah Pembahasan:**\n1. **Eliminasi $z$ dari Persamaan (1) dan (3) (Jumlahkan langsung):**\n   $$(x + y + z) + (x + 2y - z) = 6 + 2 \\implies 2x + 3y = 8 \\quad \\dots (4)$$\n2. **Eliminasi $z$ dari Persamaan (2) dan (3) (Jumlahkan langsung):**\n   $$(2x - y + z) + (x + 2y - z) = 3 + 2 \\implies 3x + y = 5 \\implies y = 5 - 3x \\quad \\dots (5)$$\n3. **Substitusi (5) ke (4):**\n   $$2x + 3(5 - 3x) = 8 \\implies 2x + 15 - 9x = 8 \\implies -7x = -7 \\implies x = 1$$\n4. **Cari $y$ dan $z$:**\n   $$y = 5 - 3(1) = 2$$\n   $$x + y + z = 6 \\implies 1 + 2 + z = 6 \\implies z = 3$$\n5. **Hitung Nilai $x + y + z$:**\n   $$1 + 2 + 3 = 6$$\n\n**Jawaban:** Nilai $x + y + z = 6$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-spltv-sptldv_0.svg",
          "title": "Geometri Perpotongan Tiga Bidang Datar & Alur Eliminasi SPLTV",
          "caption": "Representasi geometris solusi SPLTV sebagai titik potong tiga bidang di ruang R^3 serta bagan alir reduksi SPLTV menjadi SPLDV.",
          "guide": [
            "Pada Panel A, setiap persamaan linear tiga variabel merepresentasikan sebuah bidang datar di ruang 3D; ketiganya berpotongan di satu titik solusi $(x_0, y_0, z_0)$.",
            "Pada Panel B, kunci sukses menyelesaikan SPLTV adalah konsisten mengeliminasi variabel yang sama pada dua pasang persamaan hingga tereduksi menjadi SPLDV 2 variabel."
          ]
        }
      },
      {
        "title": "2. Daerah Himpunan Penyelesaian (DHP) SPtLDV",
        "concept": "Pertidaksamaan linear $ax + by \\le c$ membagi bidang koordinat menjadi dua belahan oleh garis batas $ax + by = c$.\n\n**Langkah Menentukan DHP:**\n1. Gambar garis batas dengan mencari titik potong sumbu-$X$ ($y=0$) dan sumbu-$Y$ ($x=0$).\n   - Garis utuh jika tanda $\\le$ atau $\\ge$.\n   - Garis putus-putus jika tanda $<$ atau $>$.\n2. Uji titik selidik (paling mudah titik asal $O(0, 0)$):\n   - Jika pernyataan bernilai benar, arsirlah daerah yang memuat $(0, 0)$.\n   - Jika salah, arsirlah daerah sebaliknya.",
        "quickTip": "⚡ **Trik Cepat Tanda Koefisien $y$ Positif:** Jika koefisien $y > 0$, maka tanda $\\ge$ selalu berada di **sebelah atas kurva garis**, dan tanda $\\le$ selalu berada di **sebelah bawah kurva garis**!",
        "exampleProblem": "**Soal:** Tentukan titik potong sumbu-$X$ dan sumbu-$Y$ dari garis pembatas pertidaksamaan $3x + 4y \\le 24$ dan tentukan apakah titik $(2, 3)$ berada di dalam daerah penyelesaian!\n\n**Langkah Pembahasan:**\n1. **Titik Potong Garis $3x + 4y = 24$:**\n   - Jika $x = 0 \\implies 4y = 24 \\implies y = 6 \\implies (0, 6)$.\n   - Jika $y = 0 \\implies 3x = 24 \\implies x = 8 \\implies (8, 0)$.\n2. **Uji Titik $(2, 3)$:**\n   $$3(2) + 4(3) = 6 + 12 = 18$$\n   Karena $18 \\le 24$ bernilai **BENAR**, maka titik $(2, 3)$ berada di dalam DHP.\n\n**Jawaban:** Titik potongnya adalah $(0, 6)$ dan $(8, 0)$, serta titik $(2, 3)$ termasuk ke dalam DHP.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-spltv-sptldv_1.svg",
          "title": "Uji Titik Pertidaksamaan Linear & Poligon Daerah Himpunan Penyelesaian (DHP)",
          "caption": "Penentuan arah arsiran paruh-bidang melalui uji titik (0,0) serta pembentukan daerah himpunan penyelesaian (DHP) konveks.",
          "guide": [
            "Pada Panel A, substitusikan titik uji $(0,0)$ ke pertidaksamaan: jika pernyataan bernilai benar, maka daerah yang memuat $(0,0)$ adalah daerah penyelesaian.",
            "Pada Panel B, irisan dari seluruh pertidaksamaan membentuk poligon tertutup DHP dengan empat titik pojok ekstrem: $(0,0), (4,0), (8/3, 8/3),$ dan $(0,4)$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-statistika",
    "number": "07",
    "title": "Bab 7: Statistika Analisis Data Kelompok & Ragam",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "bar-chart",
    "summary": "Analisis distribusi frekuensi kontinu: hitung Mean data kelompok metode titik tengah dan rataan sementara, Median, Modus via tepi bawah kelas, serta ukuran penyebaran varians dan simpangan baku.",
    "subtopics": [
      {
        "title": "1. Mean, Median & Modus Data Berkelompok",
        "concept": "1. **Mean Data Berkelompok (Metode Titik Tengah):**\n   $$\\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i}$$\n   *(di mana $x_i = \\frac{\\text{Batas Bawah} + \\text{Batas Atas}}{2}$)*.\n\n2. **Median Data Berkelompok:**\n   $$Me = T_b + \\left(\\frac{\\frac{1}{2}N - F_k}{f_{me}}\\right) \\cdot c$$\n   - $T_b$: Tepi bawah kelas median (Batas bawah $- 0{,}5$).\n   - $F_k$: Frekuensi kumulatif sebelum kelas median.\n   - $f_{me}$: Frekuensi kelas median.\n   - $c$: Panjang kelas interval.\n\n3. **Modus Data Berkelompok:**\n   $$Mo = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot c$$\n   - $d_1$: Selisih frekuensi kelas modus dengan frekuensi kelas sebelumnya.\n   - $d_2$: Selisih frekuensi kelas modus dengan frekuensi kelas sesudahnya.",
        "quickTip": "⚡ **Trik Modus:** Kelas modus adalah kelas interval yang memiliki frekuensi angka tertinggi pada tabel! Langsung bidik baris tersebut untuk mengambil $T_b, d_1,$ dan $d_2$!",
        "exampleProblem": "**Soal:** Diketahui kelas modus adalah interval $51 - 60$ dengan frekuensi 14. Frekuensi kelas sebelumnya adalah 10 dan kelas sesudahnya adalah 8. Jika panjang kelas adalah 10, tentukan modus data tersebut!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   - $T_b = 51 - 0{,}5 = 50{,}5$\n   - $d_1 = 14 - 10 = 4$\n   - $d_2 = 14 - 8 = 6$\n   - $c = 10$\n2. **Terapkan Rumus Modus:**\n   $$Mo = 50{,}5 + \\left(\\frac{4}{4 + 6}\\right) \\times 10 = 50{,}5 + \\left(\\frac{4}{10}\\right) \\times 10 = 50{,}5 + 4 = 54{,}5$$\n\n**Jawaban:** Modus data kelompok adalah 54,5.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-statistika_0.svg",
          "title": "Interpolasi Modus pada Histogram & Median pada Kurva Ogive",
          "caption": "Penentuan Modus menggunakan perbandingan selisih frekuensi d1 dan d2 pada batang tertinggi serta penentuan Median melalui frekuensi kumulatif.",
          "guide": [
            "Pada Panel A, kelas modus adalah batang tertinggi ($f=15$); perpotongan diagonal dari puncak batang kiri ($d_1=5$) dan kanan ($d_2=6$) memberikan posisi eksak Modus.",
            "Pada Panel B, Median membagi total frekuensi menjadi dua bagian sama besar ($n/2 = 24$), lalu diinterpolasi secara proporsional di dalam kelas median."
          ]
        }
      },
      {
        "title": "2. Varians (Ragam) & Simpangan Baku (Standar Deviasi)",
        "concept": "Ukuran penyebaran mengukur seberapa jauh data tersebar dari nilai rata-ratanya:\n1. **Varians (Ragam $\\sigma^2$):**\n   $$S^2 = \\frac{\\sum f_i (x_i - \\bar{x})^2}{n}$$\n2. **Simpangan Baku (Standar Deviasi $S$):**\n   $$S = \\sqrt{S^2} = \\sqrt{\\frac{\\sum f_i (x_i - \\bar{x})^2}{n}}$$",
        "quickTip": "💡 **Makna Fisis Simpangan Baku:** Semakin kecil simpangan baku, semakin seragam/homogen nilai siswa di kelas tersebut. Semakin besar simpangan baku, kemampuan siswa semakin timpang (heterogen)!",
        "exampleProblem": "**Soal:** Tentukan simpangan baku dari data sampel tunggal: 2, 4, 6, 8, 10!\n\n**Langkah Pembahasan:**\n1. **Hitung Rata-rata ($\\bar{x}$):**\n   $$\\bar{x} = \\frac{2 + 4 + 6 + 8 + 10}{5} = \\frac{30}{5} = 6$$\n2. **Hitung Kuadrat Selisih $(x_i - \\bar{x})^2$:**\n   - $(2 - 6)^2 = (-4)^2 = 16$\n   - $(4 - 6)^2 = (-2)^2 = 4$\n   - $(6 - 6)^2 = 0^2 = 0$\n   - $(8 - 6)^2 = 2^2 = 4$\n   - $(10 - 6)^2 = 4^2 = 16$\n3. **Jumlahkan dan Bagi $n$:**\n   $$\\text{Varians } S^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$$\n4. **Simpangan Baku:**\n   $$S = \\sqrt{8} = 2\\sqrt{2}$$\n\n**Jawaban:** Simpangan baku data tersebut adalah $2\\sqrt{2}$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-statistika_1.svg",
          "title": "Makna Fisis Simpangan Baku & Perhitungan Ragam Kuadrat Simpangan",
          "caption": "Perbandingan dua kelompok data yang memiliki rata-rata identik tetapi simpangan baku berbeda, disertai diagram jarak simpangan tiap titik terhadap mean.",
          "guide": [
            "Pada Panel A, semakin kecil nilai simpangan baku $\\sigma$, semakin homogen dan konsisten nilai data mengumpul di sekitar rata-rata $\\bar{x}$.",
            "Pada Panel B, setiap selisih $(x_i - \\bar{x})$ dikuadratkan agar nilai positif dan negatif tidak saling meniadakan, lalu dirata-ratakan menjadi Varians ($\\sigma^2$)."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-peluang-majemuk",
    "number": "08",
    "title": "Bab 8: Kaidah Pencacahan & Peluang Kejadian Majemuk",
    "badge": "Fase E • SMA Kelas 10",
    "icon": "pie-chart",
    "summary": "Kombinatorika dan peluang tingkat lanjut: bedakan Aturan Penjumlahan vs Perkalian, Permutasi urutan vs Kombinasi himpunan bebas, serta analisis peluang kejadian saling lepas, saling bebas, dan peluang bersyarat.",
    "subtopics": [
      {
        "title": "1. Permutasi ($P$) vs Kombinasi ($C$)",
        "concept": "1. **Faktorial:** $n! = n \\times (n-1) \\times \\dots \\times 2 \\times 1$, dengan $0! = 1$.\n2. **Permutasi (Memperhatikan Urutan: Posisi Ketua/Sekretaris, Susunan Juara, Nomor Plat):**\n   $$P(n, r) = \\frac{n!}{(n - r)!}$$\n   - Permutasi dengan Unsur Sama: $P = \\frac{n!}{k_1! k_2! \\dots}$\n   - Permutasi Siklis (Melingkar): $P_{\\text{siklis}} = (n - 1)!$\n3. **Kombinasi (Urutan Tidak Diperhatikan: Memilih Delegasi, Mengambil Kelereng, Jabat Tangan):**\n   $$C(n, r) = \\frac{n!}{r!(n - r)!}$$",
        "quickTip": "⚡ **Kunci Pembeda:** Tanyakan: 'Apakah $AB = BA$?' Jika $AB$ beda dengan $BA$ (misal juara 1 & 2) $\\implies$ **Permutasi**. Jika $AB$ sama dengan $BA$ (misal teman salaman) $\\implies$ **Kombinasi**!",
        "exampleProblem": "**Soal:** Dari 8 orang calon pengurus organisasi, akan dipilih 3 orang untuk menjadi Ketua, Sekretaris, dan Bendahara. Berapa banyak susunan pengurus yang mungkin terbentuk?\n\n**Langkah Pembahasan:**\n1. **Analisis Masalah:** Karena jabatan memiliki struktur (Ketua $\\ne$ Sekretaris), **urutan diperhatikan** $\\implies$ gunakan **Permutasi** $P(8, 3)$.\n2. **Hitung:**\n   $$P(8, 3) = \\frac{8!}{(8 - 3)!} = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336 \\text{ cara}$$\n\n**Jawaban:** Terdapat 336 cara susunan pengurus yang mungkin.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-peluang-majemuk_0.svg",
          "title": "Perbandingan Langsung Permutasi vs Kombinasi & Hubungan Faktorial",
          "caption": "Pemetaan pasangan terurut pada Permutasi terhadap himpunan bagian pada Kombinasi yang dibagi dengan r! urutan internal.",
          "guide": [
            "Pada Panel A, Permutasi menganggap $(A,B)$ dan $(B,A)$ sebagai dua susunan berbeda (total $6$), sedangkan Kombinasi meleburnya menjadi satu tim $\\{A,B\\}$ (total $3$).",
            "Pada Panel B, nilai Permutasi selalu $r!$ kali lebih besar daripada Kombinasi: $P(n,r) = r! \\cdot C(n,r)$."
          ]
        }
      },
      {
        "title": "2. Peluang Kejadian Majemuk (Saling Lepas & Saling Bebas)",
        "concept": "1. **Kejadian Saling Lepas (Tidak Mungkin Terjadi Bersamaan):**\n   $$P(A \\cup B) = P(A) + P(B)$$\n2. **Kejadian Tidak Saling Lepas (Memiliki Irisan):**\n   $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n3. **Kejadian Saling Bebas (Kejadian $A$ Tidak Mempengaruhi Peluang $B$):**\n   $$P(A \\cap B) = P(A) \\times P(B)$$\n4. **Peluang Bersyarat (Peluang $B$ dengan Syarat $A$ Telah Terjadi):**\n   $$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$$",
        "quickTip": "💡 **Kata Kunci Logika:** Kata **'ATAU'** berarti operasi **Penjumlahan ($\\cup$)**, sedangkan kata **'DAN'** berarti operasi **Perkalian ($\\cap$)**!",
        "exampleProblem": "**Soal:** Dua buah dadu dilempar bersamaan. Tentukan peluang muncul mata dadu berjumlah 5 atau berjumlah 10!\n\n**Langkah Pembahasan:**\n1. **Ruang Sampel:** $n(S) = 36$.\n2. **Kejadian $A$ (Jumlah 5):** $\\{(1,4), (2,3), (3,2), (4,1)\\} \\implies n(A) = 4 \\implies P(A) = \\frac{4}{36}$.\n3. **Kejadian $B$ (Jumlah 10):** $\\{(4,6), (5,5), (6,4)\\} \\implies n(B) = 3 \\implies P(B) = \\frac{3}{36}$.\n4. **Kedua Kejadian Saling Lepas (Tidak ada dadu berjumlah 5 sekaligus 10):**\n   $$P(A \\cup B) = \\frac{4}{36} + \\frac{3}{36} = \\frac{7}{36}$$\n\n**Jawaban:** Peluangnya adalah $\\frac{7}{36}$.",
        "visual": {
          "image": "assets/materi/mat_sma/k10-peluang-majemuk_1.svg",
          "title": "Diagram Venn Kejadian Majemuk & Matriks 36 Titik Sampel Dua Dadu",
          "caption": "Perbandingan kejadian saling lepas dan beririsan pada diagram Venn serta visualisasi diagonal jumlah mata dadu 7 dan 10 pada matriks 6x6.",
          "guide": [
            "Pada Panel A, kata hubung 'ATAU' menggunakan penjumlahan peluang ($P(A \\cup B)$), sedangkan kata hubung 'DAN' pada dua kejadian saling bebas menggunakan perkalian ($P(A) \\times P(B)$).",
            "Pada Panel B, diagonal biru menunjukkan 6 titik sampel berjumlah 7 dan diagonal kuning menunjukkan 3 titik sampel berjumlah 10, sehingga peluang gabungan keduanya adalah $(6+3)/36 = 9/36 = 1/4$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k10-fisika-pengukuran",
    "number": "01",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "title": "Fisika Bab 1: Hakikat Fisika, Besaran, Satuan & Pengukuran Presisi",
    "icon": "ruler",
    "summary": "Fondasi kerja ilmiah dan eksperimen fisika: pelajari hakikat sains (produk, proses, sikap), 7 besaran pokok SI & analisis dimensi untuk membuktikan kebenaran rumus fisika, teknik membaca instrumen presisi (jangka sorong & mikrometer sekrup), 5 aturan baku angka penting serta perhitungan ketidakpastian pengukuran tunggal & berulang.",
    "subtopics": [
      {
        "title": "1. Hakikat Fisika, Metode Ilmiah & Keselamatan Laboratorium",
        "concept": "Fisika adalah cabang sains paling fundamental yang mempelajari materi, energi, ruang, waktu, serta interaksi dinamis di antara semuanya di alam semesta. Mulai dari partikel subatomik terkecil hingga galaksi terjauh, hukum-hukum fisika bekerja secara konsisten.\n\n**Mengapa Kita Belajar Fisika? (Intuisi & Analogi Nyata):**\nBayangkan Anda sedang menonton permainan catur raksasa tanpa mengetahui aturan mainnya. Melalui pengamatan cermat, Anda mulai menyadari bahwa benteng hanya bergerak lurus dan pion hanya maju satu langkah. Fisika bekerja dengan cara yang sama: alam semesta adalah papannya, fenomena alam adalah permainannya, dan tugas fisikawan adalah menemukan 'aturan main' alamiah yang diciptakan Tuhan di alam semesta ini.\n\n**Tiga Pilar Hakikat Fisika:**\n1. **Fisika sebagai Produk (A Body of Knowledge):** Kumpulan pengetahuan teruji yang mencakup fakta empiris, konsep fisis, prinsip, hukum alam (misalnya Hukum Gravitasi Newton $F = G \\frac{m_1 m_2}{r^2}$), model fisis, dan teori ilmiah yang terus berkembang.\n2. **Fisika sebagai Proses (A Way of Investigating):** Serangkaian tahapan penyelidikan sistematis melalui metode ilmiah:\n   $$\\text{Observasi Fenomena} \\to \\text{Identifikasi Masalah} \\to \\text{Kajian Literatur} \\to \\text{Perumusan Hipotesis} \\to \\text{Perancangan Eksperimen} \\to \\text{Analisis Data} \\to \\text{Penarikan Kesimpulan}$$\n3. **Fisika sebagai Sikap (A Way of Thinking):** Karakter mental ilmiah: rasa ingin tahu mendalam, kejujuran mencatat data orisinal apa adanya tanpa rekayasa, skeptisisme objektif, ketelitian, dan keterbukaan terhadap pembuktian baru.\n\n**Tiga Jenis Variabel dalam Eksperimen Ilmiah:**\n- **Variabel Bebas (Manipulasi):** Faktor yang sengaja diubah-ubah nilainya oleh peneliti untuk melihat dampaknya.\n- **Variabel Terikat (Respons):** Faktor yang terpengaruh dan diukur nilainya sebagai akibat langsung dari perubahan variabel bebas.\n- **Variabel Kontrol:** Faktor-faktor lain yang dijaga tetap sama (konstan) agar eksperimen berlangsung secara adil (*fair test*).\n\n**Keselamatan Kerja di Laboratorium Fisika (K3 Lab):**\n- Menggunakan Alat Pelindung Diri (APD) standar: jas laboratorium berkancing, kacamata pengaman (*safety goggles*), sarung tangan pelindung, dan sepatu tertutup.\n- Mengenali simbol bahaya laboratorium: *Flammable* (mudah terbakar), *Corrosive* (korosif/merusak jaringan), *Toxic* (beracun), *High Voltage* (tegangan tinggi berbahaya), dan *Laser Radiation* (radiasi laser dapat merusak retina).",
        "quickTip": "💡 **Mantra Mengingat Variabel Eksperimen:** 'Peneliti secara **BEBAS** mengubah panjang tali bandul ($L$), untuk mengamati respons waktu ayunan yang **TERIKAT** ($T$), sambil **MENGONTROL** massa beban dan sudut simpangan agar selalu tetap sama!'",
        "exampleProblem": "**Studi Kasus Percobaan Ayunan Sederhana:**\nSekelompok siswa ingin menguji faktor yang memengaruhi periode getaran bandul ($T$). Mereka menguji 3 panjang tali berbeda ($L = 20\\text{ cm}, 40\\text{ cm}, 80\\text{ cm}$) menggunakan beban yang sama ($m = 100\\text{ g}$) pada sudut simpangan kecil ($5^\\circ$).\n\na) Tentukan variabel bebas, variabel terikat, dan variabel kontrol!\nb) Berdasarkan teori $T = 2\\pi \\sqrt{\\frac{L}{g}}$, bagaimana kesimpulan hubungan antara panjang tali dan periode ayunan?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Variabel:**\n   - **Variabel Bebas:** Panjang tali bandul ($L$), karena nilainya sengaja divariasikan ($20\\text{ cm}, 40\\text{ cm}, 80\\text{ cm}$).\n   - **Variabel Terikat:** Periode ayunan ($T$), karena nilainya diukur sebagai respons dari variasi panjang tali.\n   - **Variabel Kontrol:** Massa beban ($100\\text{ g}$), sudut simpangan awal ($5^\\circ$), dan percepatan gravitasi bumi ($g$).\n2. **Analisis Matematis & Fisis:**\n   Dari rumus $T = 2\\pi \\sqrt{\\frac{L}{g}}$, terlihat bahwa $T \\propto \\sqrt{L}$. Periode berbanding lurus dengan akar panjang tali dan sama sekali tidak bergantung pada massa beban.\n3. **Kesimpulan Ilmiah:** Semakin panjang tali bandul yang digunakan, waktu yang dibutuhkan untuk melakukan satu getaran penuh semakin lama (periode semakin besar) dengan kenaikan sebanding akar kuadrat panjangnya.",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-pengukuran_0.svg",
          "title": "Desain Eksperimen Ilmiah Bandul & Grafik Hubungan Variabel",
          "caption": "Visualisasi pengendalian variabel bebas (L), variabel terikat (T), dan variabel kontrol (m, θ) pada percobaan ayunan sederhana beserta kurva analisis data T terhadap akar panjang tali.",
          "guide": [
            "Perhatikan Panel A: hanya panjang tali L yang diubah-ubah (variabel bebas), sedangkan massa beban m dan sudut awal θ dijaga tetap sama (variabel kontrol).",
            "Amati Panel B: grafik periode T terhadap panjang L membentuk kurva akar kuadrat (bukan garis lurus).",
            "Saat panjang tali dinaikkan 4 kali lipat (dari 20 cm ke 80 cm), periode ayunan meningkat tepat 2 kali lipat (dari 0,90 s menjadi 1,80 s)."
          ]
        }
      },
      {
        "title": "2. Besaran Pokok, Besaran Turunan & Analisis Dimensi",
        "concept": "Dalam fisika, **Besaran** adalah segala sesuatu yang dapat diukur secara kuantitatif, memiliki nilai (angka), dan dinyatakan dalam satuan standar.\n\n**Tujuh Besaran Pokok Satuan Internasional (SI):**\nBesaran pokok adalah besaran independen yang satuannya telah ditetapkan terlebih dahulu melalui konvensi internasional (*BIPM*) dan tidak diturunkan dari besaran lain:\n1. **Panjang ($l$):** Satuan meter ($\\text{m}$), Lambang Dimensi $[L]$\n2. **Massa ($m$):** Satuan kilogram ($\\text{kg}$), Lambang Dimensi $[M]$\n3. **Waktu ($t$):** Satuan sekon ($\\text{s}$), Lambang Dimensi $[T]$\n4. **Suhu Mutlak ($T$):** Satuan Kelvin ($\\text{K}$), Lambang Dimensi $[\\theta]$\n5. **Kuat Arus Listrik ($I$):** Satuan Ampere ($\\text{A}$), Lambang Dimensi $[I]$\n6. **Intensitas Cahaya ($I_v$):** Satuan kandela ($\\text{cd}$), Lambang Dimensi $[J]$\n7. **Jumlah Zat ($n$):** Satuan mol ($\\text{mol}$), Lambang Dimensi $[N]$\n\n**Besaran Turunan & Makna Dimensinya:**\nBesaran turunan dibentuk dari kombinasi perkalian atau pembagian besaran pokok:\n- **Kecepatan ($v = s/t$):** Satuan $\\text{m/s}$, Dimensi $[L][T]^{-1}$\n- **Percepatan ($a = v/t$):** Satuan $\\text{m/s}^2$, Dimensi $[L][T]^{-2}$\n- **Gaya ($F = m \\cdot a$):** Satuan $\\text{kg}\\cdot\\text{m/s}^2$ (Newton), Dimensi $[M][L][T]^{-2}$\n- **Usaha & Energi ($W = F \\cdot s$):** Satuan $\\text{Joule}$, Dimensi $[M][L]^2[T]^{-2}$\n- **Daya ($P = W/t$):** Satuan $\\text{Watt}$, Dimensi $[M][L]^2[T]^{-3}$\n- **Tekanan ($P = F/A$):** Satuan $\\text{Pascal}$, Dimensi $[M][L]^{-1}[T]^{-2}$\n- **Momentum ($p = m \\cdot v$):** Satuan $\\text{kg}\\cdot\\text{m/s}$, Dimensi $[M][L][T]^{-1}$\n\n**Kegunaan Analisis Dimensi dalam Fisika:**\n1. **Membuktikan Kebenaran Suatu Rumus:** Suatu persamaan fisika hanya sah jika dimensi ruas kiri sama dengan dimensi ruas kanan (*Prinsip Homogenitas Dimensi*).\n2. **Menentukan Satuan Konstanta Fisika:** Membongkar satuan tetapan yang belum diketahui.\n3. **Menurunkan Hubungan Persamaan Fisis Baru:** Menghubungkan variabel-variabel yang memengaruhi suatu fenomena.",
        "quickTip": "⚡ **Trik Analisis Dimensi Cepat:** Konstanta tak bersatuan seperti $\\frac{1}{2}, \\pi, 2, \\sin\\theta$ sama sekali **tidak memiliki dimensi** (diabaikan dalam pemeriksaan dimensi!). Suku-suku yang dijumlahkan atau dikurangkan dalam rumus fisika WAJIB memiliki dimensi yang identik!",
        "exampleProblem": "**Soal HOTS Pembuktian Rumus:**\nTekanan hidrostatis zat cair dirumuskan dengan $P = \\rho^x g^y h^z$, di mana $\\rho$ adalah massa jenis zat cair, $g$ adalah percepatan gravitasi, dan $h$ adalah kedalaman zat cair. Tentukan nilai pangkat $x, y,$ dan $z$ menggunakan analisis dimensi!\n\n**Langkah Pembahasan:**\n1. **Tuliskan Dimensi Setiap Besaran:**\n   - Tekanan ($P$): $[M][L]^{-1}[T]^{-2}$\n   - Massa jenis ($\\rho = m/V$): $[M][L]^{-3}$\n   - Percepatan gravitasi ($g$): $[L][T]^{-2}$\n   - Kedalaman ($h$): $[L]$\n2. **Susun Persamaan Dimensi:**\n   $$[M][L]^{-1}[T]^{-2} = ([M][L]^{-3})^x \\cdot ([L][T]^{-2})^y \\cdot ([L])^z$$\n   $$[M]^1 [L]^{-1} [T]^{-2} = [M]^x \\cdot [L]^{-3x + y + z} \\cdot [T]^{-2y}$$\n3. **Samakan Pangkat Tiap Dimensi:**\n   - Pangkat $[M]$: $x = 1$\n   - Pangkat $[T]$: $-2y = -2 \\implies y = 1$\n   - Pangkat $[L]$: $-3x + y + z = -1 \\implies -3(1) + 1 + z = -1 \\implies -2 + z = -1 \\implies z = 1$\n4. **Hasil Akhir:** Nilai $x = 1, y = 1, z = 1$, sehingga rumus terbukti adalah $P = \\rho g h$.",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-pengukuran_1.svg",
          "title": "Peta 7 Besaran Pokok SI & Rantai Penurunan Dimensi Fisika",
          "caption": "Diagram ketujuh besaran pokok Satuan Internasional beserta lambang dimensinya (Panel A) dan rantai penurunan dimensi mekanika dari panjang hingga energi (Panel B).",
          "guide": [
            "Hafalkan 3 dimensi utama mekanika di Panel A: Panjang [L], Massa [M], dan Waktu [T].",
            "Ikuti alur panah vertikal di Panel B: membagi dengan waktu menambahkan pangkat [T]⁻¹, mengalikan massa menambahkan [M].",
            "Gunakan kesamaan pangkat dimensi kiri dan kanan untuk menguji kebenaran rumus fisika apa pun."
          ]
        }
      },
      {
        "title": "3. Instrumen Pengukuran Presisi: Jangka Sorong & Mikrometer Sekrup",
        "concept": "Dalam eksperimen fisika, mistar biasa dengan ketelitian $1\\text{ mm}$ ($0{,}1\\text{ cm}$) tidak memadai untuk mengukur diameter kawat tipis, tebal kertas, atau diameter dalam pipa kapiler. Diperlukan instrumen ukur presisi.\n\n**1. Jangka Sorong (Vernier Caliper):**\n- **Fungsi:** Mengukur diameter luar benda (menggunakan rahang bawah), diameter dalam tabung/pipa (menggunakan rahang atas), dan kedalaman tabung (menggunakan tangkai ekor kedalaman).\n- **Ketelitian / NST (Nilai Skala Terkecil):** $0{,}01\\text{ cm} = 0{,}1\\text{ mm}$ (atau versi presisi tinggi $0{,}05\\text{ mm}$).\n- **Formula Pembacaan:**\n  $$\\text{Hasil Ukur} = \\text{Skala Utama (SU)} + (\\text{Garis Nonius yang Berhimpit} \\times 0{,}01\\text{ cm})$$\n- **Langkah Pembacaan:**\n  1. Amati angka pada skala utama tepat di sebelah kiri angka $0$ pada skala nonius geser.\n  2. Cari satu garis pada skala nonius yang lurus sempurna segaris dengan garis skala utama di atasnya.\n  3. Kalikan nomor garis tersebut dengan ketelitian alat, lalu jumlahkan.\n\n**2. Mikrometer Sekrup (Micrometer Screw Gauge):**\n- **Fungsi:** Mengukur ketebalan benda tipis (seperti lembaran seng, pelat logam, rambut, kawat email) dengan tingkat kepresisian sangat tinggi.\n- **Ketelitian / NST:** $0{,}01\\text{ mm} = 0{,}001\\text{ cm}$ (sepuluh kali lipat lebih teliti daripada jangka sorong!).\n- **Formula Pembacaan:**\n  $$\\text{Hasil Ukur} = \\text{Skala Utama (SU dalam mm)} + (\\text{Skala Putar/Nonius} \\times 0{,}01\\text{ mm})$$\n- **Langkah Pembacaan:**\n  1. Baca skala utama horizontal yang tampak sebelum batas silinder putar (perhatikan apakah garis bawah $0{,}5\\text{ mm}$ sudah terbuka).\n  2. Baca garis pada skala putar silinder yang tepat segaris horizontal dengan sumbu skala utama.\n  3. Kalikan dengan $0{,}01\\text{ mm}$ dan jumlahkan.",
        "quickTip": "⚠️ **Waspada Jebakan Garis Setengah pada Mikrometer:** Jangan sampai lupa mengecek garis strip bawah pada skala utama mikrometer sekrup! Jika setelah angka $4\\text{ mm}$ strip bawahnya sudah tampak terbuka, maka nilai skala utamanya adalah $4{,}5\\text{ mm}$, BUKAN $4\\text{ mm}$!",
        "exampleProblem": "**Soal Latihan Membaca Mikrometer Sekrup:**\nPengukuran ketebalan sekeping koin logam menghasilkan tampilan mikrometer sekrup: pada skala utama horizontal tampak angka $6\\text{ mm}$ dan garis bawah setengah milimeter terlihat jelas. Pada skala putar (thimble), garis ke-28 berhimpit tepat dengan garis sumbu utama. Berapakah ketebalan koin tersebut?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Skala Utama (SU):**\n   Karena angka $6\\text{ mm}$ dan garis bawahnya sudah terbuka, maka $\\text{SU} = 6 + 0{,}5 = 6{,}50\\text{ mm}$.\n2. **Identifikasi Skala Putar (SN):**\n   Garis skala putar yang lurus adalah garis ke-28:\n   $$\\text{SN} = 28 \\times 0{,}01\\text{ mm} = 0{,}28\\text{ mm}$$\n3. **Hitung Hasil Akhir Pengukuran:**\n   $$\\text{Tebal} = \\text{SU} + \\text{SN} = 6{,}50\\text{ mm} + 0{,}28\\text{ mm} = \\mathbf{6{,}78\\text{ mm}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-pengukuran_2.svg",
          "title": "Simulasi Pembacaan Skala Jangka Sorong & Mikrometer Sekrup",
          "caption": "Panduan langkah demi langkah membaca skala utama (SU) dan skala nonius/putar (SN) pada jangka sorong (ketelitian 0,01 cm) serta mikrometer sekrup (ketelitian 0,01 mm).",
          "guide": [
            "Pada Jangka Sorong (Panel A): baca angka skala utama tepat di kiri angka 0 nonius (2,4 cm), lalu cari garis nonius yang paling lurus segaris dengan atasnya (garis ke-7 → 0,07 cm).",
            "Pada Mikrometer Sekrup (Panel B): periksa apakah strip bawah setengah milimeter sudah terlihat di tepi selubung (6 + 0,5 = 6,50 mm).",
            "Jumlahkan dengan garis skala putar yang berhimpit dengan garis horizontal tengah (28 × 0,01 mm = 0,28 mm) sehingga diperoleh 6,78 mm."
          ]
        }
      },
      {
        "title": "4. Aturan Angka Penting, Operasi Hitung & Notasi Ilmiah",
        "concept": "**Angka Penting (AP)** adalah semua angka yang diperoleh langsung dari hasil pengukuran menggunakan instrumen ukur, terdiri atas angka pasti (eksak) dan satu angka terakhir yang merupakan angka taksiran (ragu-ragu).\n\n**5 Aturan Baku Menentukan Banyaknya Angka Penting:**\n1. **Semua angka bukan nol adalah angka penting.** (Contoh: $348{,}5\\text{ g}$ memiliki 4 AP).\n2. **Angka nol yang terletak di antara dua angka bukan nol adalah angka penting.** (Contoh: $500{,}08\\text{ m}$ memiliki 5 AP).\n3. **Angka nol di sebelah kanan tanda desimal dan mengikuti angka bukan nol adalah angka penting.** (Contoh: $45{,}00\\text{ s}$ memiliki 4 AP; $7{,}0\\text{ cm}$ memiliki 2 AP).\n4. **Angka nol di sebelah kiri angka bukan nol pertama BUKAN angka penting** (hanya berfungsi sebagai penentu letak desimal). (Contoh: $0{,}0025\\text{ kg}$ memiliki 2 AP; $0{,}070\\text{ m}$ memiliki 2 AP).\n5. **Angka nol di belakang angka bukan nol tanpa tanda desimal bukan angka penting**, kecuali jika diberi tanda garis bawah/khusus pada angka taksirannya. (Contoh: $4500\\text{ m}$ memiliki 2 AP; $45\\underline{0}0\\text{ m}$ memiliki 3 AP).\n\n**Aturan Baku Operasi Hitung Angka Penting:**\n- **Penjumlahan & Pengurangan:** Hasil operasi hanya boleh mengandung **SATU ANGKA TAKSIRAN** (mengikuti angka dengan jumlah digit di belakang koma paling sedikit).\n- **Perkalian & Pembagian:** Hasil operasi dibulatkan hingga memiliki **JUMLAH ANGKA PENTING PALING SEDIKIT** dari bilangan-bilangan yang dioperasikan.\n- **Pemangkatan & Penarikan Akar:** Hasil pemangkatan atau akar mengikuti jumlah angka penting bilangan yang dipangkatkan/diakarkan.\n- **Perkalian dengan Bilangan Eksak:** Hasil mengikuti jumlah angka penting dari bilangan hasil pengukuran.",
        "quickTip": "🧠 **Mantra Rahasia Operasi AP:**\n- Perkalian / Pembagian $\\to$ Lihat **BANYAKNYA ANGKA PENTING** terkecil!\n- Penjumlahan / Pengurangan $\\to$ Lihat **JUMLAH DIGIT DI BELAKANG KOMA** paling sedikit!",
        "exampleProblem": "**Soal HOTS Operasi Hitung Laboratorium:**\nSeorang siswa mengukur sebidang pelat tembaga tipis: panjang $p = 12{,}5\\text{ cm}$ (3 AP) dan lebar $l = 4{,}20\\text{ cm}$ (3 AP). Sebanyak 4 buah pelat identik ditumpuk bersama, dan massa tiap pelat adalah $m = 85{,}25\\text{ g}$ (4 AP).\n\na) Hitung luas satu lembar pelat menurut aturan angka penting!\nb) Hitung massa total keempat pelat tersebut!\n\n**Langkah Pembahasan:**\n1. **Perhitungan Luas (Perkalian Dua Hasil Ukur):**\n   $$A = p \\times l = 12{,}5 \\times 4{,}20 = 52{,}500\\text{ cm}^2$$\n   Kedua bilangan memiliki 3 Angka Penting. Maka hasil akhir wajib dibulatkan menjadi 3 Angka Penting:\n   $$A = \\mathbf{52{,}5\\text{ cm}^2}$$\n2. **Perhitungan Massa Total (Perkalian Angka Penting dengan Bilangan Eksak):**\n   Angka 4 adalah bilangan eksak (hasil mencacah, bukan hasil mengukur instrumen). Maka ketelitian mengikuti angka hasil ukur ($85{,}25\\text{ g}$ yang memiliki 4 AP):\n   $$m_{\\text{total}} = 4 \\times 85{,}25 = 341{,}00\\text{ g}$$\n   Dibulatkan mengikuti 4 AP:\n   $$m_{\\text{total}} = \\mathbf{341{,}0\\text{ g}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-pengukuran_3.svg",
          "title": "Anatomi 5 Aturan Angka Penting & Aturan Pembulatan Operasi Hitung",
          "caption": "Identifikasi posisi angka penting dan bukan angka penting pada bilangan desimal (Panel A) serta perbedaan aturan pembulatan antara penjumlahan/pengurangan dan perkalian/pembagian (Panel B).",
          "guide": [
            "Ingat Panel A: angka nol di sebelah kiri angka bukan nol pertama TIDAK pernah menjadi angka penting.",
            "Pada penjumlahan/pengurangan (Panel B atas), lihat jumlah angka di belakang koma paling sedikit (hanya boleh 1 angka taksiran).",
            "Pada perkalian/pembagian (Panel B bawah), lihat total banyaknya Angka Penting (AP) yang paling sedikit."
          ]
        }
      },
      {
        "title": "5. Ketidakpastian Pengukuran, Kesalahan Eksperimen & Pelaporan Resmi",
        "concept": "Tidak ada pengukuran di dunia ini yang benar-benar bernilai mutlak sempurna. Setiap pengukuran selalu disertai dengan ketidakpastian (*uncertainty*).\n\n**Tiga Klasifikasi Sumber Kesalahan dalam Pengukuran:**\n1. **Kesalahan Sistematis:** Kesalahan yang bersumber dari instrumen atau prosedur ukur (misal titik nol skala bergeser/belum dikalibrasi, pegas neraca melonggar, gesekan poros). Kesalahan ini menghasilkan penyimpangan satu arah dan dapat dieliminasi dengan kalibrasi berkala.\n2. **Kesalahan Acak (Random Error):** Kesalahan tak terduga akibat fluktuasi halus lingkungan sekitar (fluktuasi tegangan listrik PLN, hembusan angin halus, getaran lantai jalan raya, radiasi termal). Dapat diminimalkan melalui pengukuran berulang.\n3. **Kesalahan Paralaks:** Kesalahan pembacaan jarum atau skala akibat mata pengamat tidak tegak lurus terhadap bidang skala alat ukur.\n\n**Format Pelaporan Resmi Hasil Pengukuran Ilmiah:**\n1. **Pengukuran Tunggal (Hanya 1 Kali Mengukur):**\n   Ketidakpastian mutlak diambil setengah dari Nilai Skala Terkecil (NST):\n   $$\\Delta x = \\frac{1}{2} \\times \\text{NST}$$\n   Format pelaporan: $x = (x_0 \\pm \\Delta x)\\,\\text{satuan}$.\n2. **Pengukuran Berulang ($N \\ge 5$ kali):**\n   - Nilai rata-rata terbaik: $\\bar{x} = \\frac{\\sum x_i}{N}$\n   - Simpangan baku rata-rata sampel (*Standard Deviation of the Mean*):\n     $$s_{\\bar{x}} = \\frac{1}{N}\\sqrt{\\frac{N\\sum x_i^2 - (\\sum x_i)^2}{N - 1}}$$\n   - Format pelaporan resmi: $x = (\\bar{x} \\pm s_{\\bar{x}})\\,\\text{satuan}$.\n\n**Ketidakpastian Relatif (KR) & Hak Angka Penting:**\n$$KR = \\frac{\\Delta x}{x_0} \\times 100\\% \\quad \\text{atau} \\quad KR = \\frac{s_{\\bar{x}}}{\\bar{x}} \\times 100\\%$$\n- Jika $KR \\approx 10\\% \\implies$ Hasil akhir berhak dilaporkan dengan **2 Angka Penting**.\n- Jika $KR \\approx 1\\% \\implies$ Hasil akhir berhak dilaporkan dengan **3 Angka Penting**.\n- Jika $KR \\approx 0{,}1\\% \\implies$ Hasil akhir berhak dilaporkan dengan **4 Angka Penting**.",
        "quickTip": "⚠️ **Aturan Ketat Desimal Pelaporan:** Banyaknya angka desimal di belakang koma pada nilai pengukuran ($\\\\bar{x}$) **WAJIB SAMA PERSIS** dengan banyaknya angka desimal pada ketidakpastiannya ($s_{\\\\bar{x}}$)! Contoh benar: $(3{,}450 \\pm 0{,}008)\\,\\text{mm}$, BUKAN $(3{,}45 \\pm 0{,}008)\\,\\text{mm}$.",
        "exampleProblem": "**Soal Evaluasi Laporan Eksperimen Laboratorium:**\nSeorang mahasiswa fisika mengukur diameter kawat tembaga menggunakan mikrometer sekrup ($NST = 0{,}01\\text{ mm}$) sebanyak 5 kali dan memperoleh data: $x_1 = 3{,}24\\text{ mm}$, $x_2 = 3{,}25\\text{ mm}$, $x_3 = 3{,}26\\text{ mm}$, $x_4 = 3{,}24\\text{ mm}$, $x_5 = 3{,}25\\text{ mm}$. Tentukan nilai rata-rata, simpangan baku, dan format laporan resmi hasil pengukuran!\n\n**Langkah Pembahasan:**\n1. **Olah Data Statistik Pengukuran ($N = 5$):**\n   - $\\sum x_i = 3{,}24 + 3{,}25 + 3{,}26 + 3{,}24 + 3{,}25 = 16{,}24\\text{ mm}$\n   - Rata-rata: $\\bar{x} = \\frac{16{,}24}{5} = 3{,}248\\text{ mm}$\n   - $\\sum x_i^2 = (3{,}24)^2 + (3{,}25)^2 + (3{,}26)^2 + (3{,}24)^2 + (3{,}25)^2 = 52{,}7482\\text{ mm}^2$\n2. **Hitung Simpangan Baku ($s_{\\bar{x}}$):**\n   $$N\\sum x_i^2 = 5 \\times 52{,}7482 = 263{,}7410$$\n   $$(\\sum x_i)^2 = (16{,}24)^2 = 263{,}7376$$\n   $$s_{\\bar{x}} = \\frac{1}{5}\\sqrt{\\frac{263{,}7410 - 263{,}7376}{5 - 1}} = \\frac{1}{5}\\sqrt{\\frac{0{,}0034}{4}} = \\frac{1}{5}\\sqrt{0{,}00085} \\approx 0{,}0058\\text{ mm}$$\n3. **Analisis Ketidakpastian Relatif (KR):**\n   $$KR = \\frac{0{,}0058}{3{,}248} \\times 100\\% \\approx 0{,}18\\% \\implies \\text{Berhak atas 3 sampai 4 Angka Penting}$$\n4. **Tuliskan Laporan Resmi:**\n   Karena ketidakpastian dibulatkan ke $0{,}006\\text{ mm}$ (3 desimal), maka nilai rata-rata ditulis 3 desimal:\n   $$x = \\mathbf{(3{,}248 \\pm 0{,}006)\\,\\text{mm}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-pengukuran_4.svg",
          "title": "Statistik Pengukuran Berulang, Pita Ketidakpastian & Kesalahan Paralaks",
          "caption": "Grafik sebaran nilai pengukuran berulang di sekitar rata-rata x̄ dengan pita simpangan baku (Panel A) serta ilustrasi pencegahan kesalahan paralaks dan aturan pelaporan desimal (Panel B).",
          "guide": [
            "Pada Panel A, garis putus-putus hijau menunjukkan nilai rata-rata terbaik x̄ = 3,248 mm dari 5 pengukuran berulang.",
            "Pada Panel B atas, pastikan posisi mata selalu tegak lurus tepat di atas jarum/skala untuk menghindari kesalahan paralaks.",
            "Saat menuliskan laporan (x̄ ± Δx), jumlah angka di belakang koma pada x̄ wajib sama persis dengan Δx."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-vektor",
    "number": "02",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "title": "Fisika Bab 2: Vektor dalam Fisika (Representasi, Operasi Analitis & Perkalian)",
    "icon": "compass",
    "summary": "Kuasai representasi besaran vektor vs skalar di alam semesta: resolusi komponen kartesius pada sumbu X dan Y, penjumlahan vektor grafis (poligon & jajar genjang), metode analitis tabel komponen untuk mencari resultan multi-gaya, serta operasi perkalian titik (dot product) dan perkalian silang (cross product) lengkap dengan aplikasi fisika nyata.",
    "subtopics": [
      {
        "title": "1. Besaran Skalar vs Besaran Vektor & Operasi Geometri Grafis",
        "concept": "Di alam semesta, informasi fisis tidak selalu cukup jika hanya dinyatakan dengan angka dan satuan. \n\n**Perbedaan Fisis Mendasar:**\n- **Besaran Skalar:** Besaran yang didefinisikan secara lengkap HANYA dengan nilai (magnitudo) dan satuan. Memenuhi aturan aljabar biasa. Contoh: massa ($5\\text{ kg}$), waktu ($10\\text{ s}$), suhu ($30^\\circ\\text{C}$), volume ($2\\text{ L}$), jarak tempuh, laju, dan energi ($100\\text{ J}$).\n- **Besaran Vektor:** Besaran yang memiliki NILAI sekaligus ARAH yang spesifik di ruang. Memenuhi aturan penjumlahan geometri vektor. Contoh: perpindahan, kecepatan, percepatan, gaya, momentum, impuls, medan listrik, dan momen gaya (torsi).\n\n**Operasi Penjumlahan Vektor Secara Grafis:**\n1. **Metode Segitiga:** Pangkal vektor kedua diletakkan di ujung panah vektor pertama. Vektor resultan ditarik dari pangkal awal ke ujung akhir.\n2. **Metode Poligon:** Digunakan untuk menjumlahkan lebih dari dua vektor secara berantai ($A \\to B \\to C \\dots$).\n3. **Metode Jajar Genjang:** Pangkal kedua vektor dihimpitkan pada satu titik tangkap. Dibuat garis sejajar membentuk jajar genjang. Resultan adalah diagonal utama jajar genjang tersebut.\n   $$R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}$$\n   $$\\text{Selisih: } S = |\\vec{F}_1 - \\vec{F}_2| = \\sqrt{F_1^2 + F_2^2 - 2F_1 F_2 \\cos\\theta}$$",
        "quickTip": "💡 **Trik Khusus Resultan 2 Gaya Sama Besar ($F_1 = F_2 = F$):**\n- Sudut apit $\\theta = 60^\\circ \\implies R = F\\sqrt{3}$\n- Sudut apit $\\theta = 90^\\circ \\implies R = F\\sqrt{2}$\n- Sudut apit $\\theta = 120^\\circ \\implies R = F$ (Besar resultan SAMA PERSIS dengan gaya asalnya!)",
        "exampleProblem": "**Soal Konseptual:**\nDua vektor gaya $\\vec{F}_1$ dan $\\vec{F}_2$ masing-masing besarnya $10\\text{ N}$ bekerja pada satu titik tangkap. Jika perbandingan antara besar resultan penjumlahan dan besar selisih kedua vektor adalah $\\sqrt{3} : 1$, tentukan besar sudut apit $\\theta$ di antara kedua gaya tersebut!\n\n**Langkah Pembahasan:**\n1. **Tuliskan Perbandingan Persamaan:**\n   $$\\frac{R}{S} = \\frac{\\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}}{\\sqrt{F_1^2 + F_2^2 - 2F_1 F_2 \\cos\\theta}} = \\frac{\\sqrt{3}}{1}$$\n2. **Kuadratkan Kedua Ruas dengan $F_1 = F_2 = 10\\text{ N}$:**\n   $$\\frac{10^2 + 10^2 + 2(10)(10)\\cos\\theta}{10^2 + 10^2 - 2(10)(10)\\cos\\theta} = \\frac{3}{1}$$\n   $$\\frac{200 + 200\\cos\\theta}{200 - 200\\cos\\theta} = 3 \\implies \\frac{1 + \\cos\\theta}{1 - \\cos\\theta} = 3$$\n3. **Selesaikan Persamaan Aljabar:**\n   $$1 + \\cos\\theta = 3(1 - \\cos\\theta) = 3 - 3\\cos\\theta$$\n   $$4\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{2}{4} = \\frac{1}{2}$$\n   $$\\theta = \\arccos(0{,}5) = \\mathbf{60^\\circ}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-vektor_0.svg",
          "title": "Metode Jajar Genjang & Kurva Resultan vs Selisih Dua Vektor",
          "caption": "Konstruksi geometris penjumlahan (R) dan pengurangan (S) dua vektor gaya pada metode jajar genjang (Panel A) serta perubahan nilai R dan S terhadap sudut apit θ (Panel B).",
          "guide": [
            "Pada metode jajar genjang (Panel A), diagonal panjang dari titik tangkap adalah resultan jumlah (R = F₁ + F₂), sedangkan diagonal lainnya adalah selisih (S = F₁ - F₂).",
            "Perhatikan rumus tanda tambah (+) pada cos θ untuk Resultan, dan tanda kurang (-) pada cos θ untuk Selisih.",
            "Catat 3 sudut istimewa untuk dua gaya sama besar F di Panel B: θ=60° menghasilkan F√3, θ=90° menghasilkan F√2, dan θ=120° menghasilkan tepat F."
          ]
        }
      },
      {
        "title": "2. Resolusi Komponen Kartesius & Vektor Satuan (i, j, k)",
        "concept": "Ketika suatu gaya bekerja miring di bidang datar dengan sudut elevasi $\\theta$, pengaruh gaya tersebut terpecah ke arah horizontal dan vertikal. Proses memecah vektor miring menjadi dua proyeksi tegak lurus disebut **Penguraian (Resolusi) Vektor**.\n\n**Aturan Trigonometri Penguraian:**\n- Proyeksi pada sumbu yang **menempel/mengapit sudut $\\theta$** menggunakan fungsi **Cosinus**:\n  $$F_x = F \\cos\\theta$$\n- Proyeksi pada sumbu yang **berada di depan (menjauhi) sudut $\\theta$** menggunakan fungsi **Sinus**:\n  $$F_y = F \\sin\\theta$$\n- **Arah Vektor terhadap Sumbu-X Positif:**\n  $$\\tan\\theta = \\frac{F_y}{F_x} \\implies \\theta = \\arctan\\left(\\frac{F_y}{F_x}\\right)$$\n\n**Representasi Vektor Satuan di Ruang 3 Dimensi:**\nVektor satuan adalah vektor tanpa dimensi yang memiliki panjang tepat satu satuan, digunakan untuk menegaskan orientasi arah koordinat:\n- $\\hat{i}$ = Vektor satuan searah sumbu-X positif\n- $\\hat{j}$ = Vektor satuan searah sumbu-Y positif\n- $\\hat{k}$ = Vektor satuan searah sumbu-Z positif\nBentuk umum vektor posisi 3D: $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$.\nPanjang / Besar (Magnitudo) Vektor:\n$$|\\vec{r}| = \\sqrt{x^2 + y^2 + z^2}$$",
        "quickTip": "⚠️ **Waspada Jebakan Sudut Vertikal!** Soal sering mengecoh: 'Sebuah gaya $F$ membentuk sudut $30^\\circ$ terhadap sumbu VERTICAL Y.' Jangan menghafal buta bahwa X selalu cosinus! Jika sudutnya menempel ke sumbu Y, maka $F_y = F\\cos 30^\\circ$ dan $F_x = F\\sin 30^\\circ$!",
        "exampleProblem": "**Soal Resolusi Komponen:**\nSebuah tali derek menarik kotak peti kemas dengan gaya $F = 500\\text{ N}$ miring ke atas membentuk sudut elevasi $37^\\circ$ terhadap permukaan lantai datar ($\\sin 37^\\circ = 0{,}6, \\cos 37^\\circ = 0{,}8$).\n\na) Tentukan komponen gaya yang efektif menarik kotak meluncur maju secara horizontal!\nb) Tentukan komponen gaya yang berusaha mengangkat kotak secara vertikal!\n\n**Langkah Pembahasan:**\n1. **Analisis Komponen Gaya:**\n   - Sudut $37^\\circ$ berada di antara tali dan lantai mendatar (sumbu-X).\n   - Komponen horizontal (searah lantai):\n     $$F_x = F \\cos 37^\\circ = 500 \\times 0{,}8 = \\mathbf{400\\text{ Newton}}$$\n   - Komponen vertikal (tegak lurus lantai):\n     $$F_y = F \\sin 37^\\circ = 500 \\times 0{,}6 = \\mathbf{300\\text{ Newton}}$$\n2. **Makna Fisis:** Gaya $400\\text{ N}$ adalah gaya yang menggerakkan peti maju, sedangkan gaya $300\\text{ N}$ mengurangi beban tekan peti ke lantai (mengurangi gaya normal).",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-vektor_1.svg",
          "title": "Penguraian Komponen Kartesius 2D & Vektor Satuan Ruang 3D",
          "caption": "Proyeksi gaya miring menjadi komponen horizontal Fx dan vertikal Fy (Panel A) serta representasi vektor posisi tiga dimensi menggunakan vektor satuan basis i, j, dan k (Panel B).",
          "guide": [
            "Pada Panel A, perhatikan bahwa sudut 37° menempel pada sumbu horizontal X, sehingga Fx = F cos 37° dan Fy = F sin 37°.",
            "Hati-hati jika soal memberikan sudut terhadap sumbu vertikal Y: maka Fy yang menggunakan cosinus!",
            "Pada Panel B, panjang vektor di ruang 3 dimensi selalu memenuhi teorema Pythagoras ruang: √(x² + y² + z²)."
          ]
        }
      },
      {
        "title": "3. Resultan Multi-Gaya Menggunakan Metode Tabel Analitis",
        "concept": "Jika terdapat tiga, empat, atau lebih gaya yang bekerja secara simultan pada satu benda dari berbagai sudut sembarang, metode grafis jajar genjang menjadi sangat rumit. Metode paling ampuh dan akurat adalah **Metode Tabel Komponen Analitis**.\n\n**Langkah Kerja Metode Analitis:**\n1. Gambarkan semua vektor gaya pada sistem koordinat Kartesius dengan titik tangkap berimpit di pusat $(0,0)$.\n2. Uraikan setiap vektor ke sumbu-X ($F_{ix}$) dan sumbu-Y ($F_{iy}$) dengan memperhatikan tanda kuadran:\n   - Kuadran I ($0^\\circ - 90^\\circ$): $X > 0, Y > 0$\n   - Kuadran II ($90^\\circ - 180^\\circ$): $X < 0, Y > 0$\n   - Kuadran III ($180^\\circ - 270^\\circ$): $X < 0, Y < 0$\n   - Kuadran IV ($270^\\circ - 360^\\circ$): $X > 0, Y < 0$\n3. Hitung jumlah total komponen horizontal: $\\sum F_x = F_{1x} + F_{2x} + F_{3x} + \\dots$\n4. Hitung jumlah total komponen vertikal: $\\sum F_y = F_{1y} + F_{2y} + F_{3y} + \\dots$\n5. Hitung besar magnitudo resultan akhir dengan teorema Pythagoras:\n   $$R = \\sqrt{(\\sum F_x)^2 + (\\sum F_y)^2}$$\n6. Tentukan arah sudut resultan:\n   $$\\tan\\alpha = \\left| \\frac{\\sum F_y}{\\sum F_x} \\right|$$",
        "quickTip": "💡 **Strategi Bebas Salah Tanda:** Selalu proyeksikan sudut terhadap sumbu horizontal terdekat, lalu pasang tanda $+$ atau $-$ secara manual berdasarkan kuadran panahnya. Ini mencegah kesalahan fungsi trigonometri terbalik!",
        "exampleProblem": "**Soal Multi-Gaya Analitis:**\nTiga buah gaya sebidang bekerja pada satu titik partikel:\n1. $F_1 = 20\\text{ N}$ mengarah $37^\\circ$ di Kuadran I ($\\cos 37^\\circ = 0{,}8; \\sin 37^\\circ = 0{,}6$).\n2. $F_2 = 10\\text{ N}$ mengarah $53^\\circ$ di Kuadran II terhadap sumbu-X negatif ($\\cos 53^\\circ = 0{,}6; \\sin 53^\\circ = 0{,}8$).\n3. $F_3 = 14\\text{ N}$ mengarah lurus ke sumbu-Y negatif.\nTentukan besar dan arah resultan ketiga gaya tersebut!\n\n**Langkah Pembahasan:**\n1. **Tabel Komponen:**\n   - $F_{1x} = +20 \\cos 37^\\circ = +16\\text{ N}; \\quad F_{1y} = +20 \\sin 37^\\circ = +12\\text{ N}$\n   - $F_{2x} = -10 \\cos 53^\\circ = -6\\text{ N}; \\quad F_{2y} = +10 \\sin 53^\\circ = +8\\text{ N}$\n   - $F_{3x} = 0\\text{ N}; \\quad F_{3y} = -14\\text{ N}$\n2. **Jumlahkan Komponen:**\n   $$\\sum F_x = 16 - 6 + 0 = +10\\text{ N}$$\n   $$\\sum F_y = 12 + 8 - 14 = +6\\text{ N}$$\n3. **Hitung Resultan:**\n   $$R = \\sqrt{10^2 + 6^2} = \\sqrt{100 + 36} = \\sqrt{136} = \\mathbf{2\\sqrt{34}\\text{ N} \\approx 11{,}66\\text{ N}}$$\n4. **Hitung Arah:** $\\tan\\alpha = \\frac{6}{10} = 0{,}6 \\implies \\alpha = \\mathbf{31^\\circ}$ terhadap sumbu-X positif (Kuadran I).",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-vektor_2.svg",
          "title": "Metode Tabel Analitis untuk Resultan Multi-Gaya Sebidang",
          "caption": "Representasi kuadran tiga gaya sebidang pada koordinat Kartesius (Panel A) dan langkah sistematis tabel komponen ΣFx serta ΣFy untuk menghitung resultan total (Panel B).",
          "guide": [
            "Perhatikan tanda positif/negatif tiap kuadran di Panel A: F₂ berada di Kuadran II sehingga komponen X-nya bertanda negatif (-6 N) dan Y-nya positif (+8 N).",
            "Jumlahkan seluruh kolom X (ΣFx = +10 N) dan seluruh kolom Y (ΣFy = +6 N) secara terpisah seperti pada tabel Panel B.",
            "Gunakan teorema Pythagoras R = √((ΣFx)² + (ΣFy)²) untuk memperoleh besar resultan akhir."
          ]
        }
      },
      {
        "title": "4. Perkalian Vektor: Dot Product, Cross Product & Aplikasi Fisis",
        "concept": "Dalam fisika, penggabungan dua vektor melalui perkalian dapat menghasilkan besaran skalar atau besaran vektor baru.\n\n**1. Perkalian Titik (Dot Product / Scalar Product):**\n$$\\vec{A} \\cdot \\vec{B} = |\\vec{A}| |\\vec{B}| \\cos\\theta = A_x B_x + A_y B_y + A_z B_z$$\n- Menghasilkan besaran **SKALAR** (angka murni tanpa arah).\n- Mengukur seberapa besar proyeksi vektor $\\vec{A}$ yang searah sejajar dengan $\\vec{B}$.\n- Sifat: Bersifat komutatif ($\\vec{A} \\cdot \\vec{B} = \\vec{B} \\cdot \\vec{A}$).\n- Vektor Basis: $\\hat{i}\\cdot\\hat{i} = \\hat{j}\\cdot\\hat{j} = \\hat{k}\\cdot\\hat{k} = 1$, sedangkan $\\hat{i}\\cdot\\hat{j} = \\hat{j}\\cdot\\hat{k} = \\hat{k}\\cdot\\hat{i} = 0$.\n- **Syarat Dua Vektor Saling Tegak Lurus:** $\\vec{A} \\perp \\vec{B} \\iff \\vec{A} \\cdot \\vec{B} = 0$.\n- **Aplikasi Fisika Nyata:** Usaha mekanik ($W = \\vec{F} \\cdot \\vec{s}$), Daya listrik ($P = \\vec{F} \\cdot \\vec{v}$), Fluks magnetik ($\\Phi = \\vec{B} \\cdot \\vec{A}$).\n\n**2. Perkalian Silang (Cross Product / Vector Product):**\n$$\\vec{C} = \\vec{A} \\times \\vec{B} = (|\\vec{A}| |\\vec{B}| \\sin\\theta)\\,\\hat{n}$$\n- Menghasilkan **VEKTOR BARU** yang arahnya tegak lurus terhadap bidang yang dibentuk oleh $\\vec{A}$ dan $\\vec{B}$.\n- Arah ditentukan oleh **Kaidah Tangan Kanan**: 4 jari diputar dari $\\vec{A}$ menuju $\\vec{B}$, ibu jari tegak menunjukkan arah vektor hasil $\\vec{C}$.\n- Sifat: Bersifat anti-komutatif ($\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})$).\n- Rumus Determinan $3 \\times 3$:\n  $$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix} = (A_y B_z - A_z B_y)\\hat{i} - (A_x B_z - A_z B_x)\\hat{j} + (A_x B_y - A_y B_x)\\hat{k}$$\n- **Aplikasi Fisika Nyata:** Momen Gaya / Torsi ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$), Gaya Magnetik Lorentz ($\\vec{F} = q(\\vec{v} \\times \\vec{B})$), Momentum Sudut ($\\vec{L} = \\vec{r} \\times \\vec{p}$).",
        "quickTip": "🔄 **Trik Siklus Jarum Jam Cross Product:**\nIngat urutan melingkar $\\hat{i} \\to \\hat{j} \\to \\hat{k} \\to \\hat{i}$:\n- Searah jarum jam menghasilkan positif: $\\hat{i} \\times \\hat{j} = +\\hat{k}$, $\\hat{j} \\times \\hat{k} = +\\hat{i}$, $\\hat{k} \\times \\hat{i} = +\\hat{j}$.\n- Berlawanan arah jarum jam menghasilkan negatif: $\\hat{j} \\times \\hat{i} = -\\hat{k}$, $\\hat{k} \\times \\hat{j} = -\\hat{i}$, $\\hat{i} \\times \\hat{k} = -\\hat{j}$.",
        "exampleProblem": "**Soal Aplikasi Usaha & Torsi:**\nDiberikan vektor gaya $\\vec{F} = (4\\hat{i} + 3\\hat{j} - 2\\hat{k})\\text{ N}$ bekerja pada titik dengan posisi $\\vec{r} = (2\\hat{i} - \\hat{j} + 5\\hat{k})\\text{ m}$. Benda berpindah sejauh $\\vec{s} = (3\\hat{i} + 2\\hat{j} + \\hat{k})\\text{ m}$.\n\na) Hitung Usaha ($W = \\vec{F} \\cdot \\vec{s}$) yang dilakukan gaya tersebut!\nb) Hitung Momen Gaya / Torsi ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$) terhadap titik asal!\n\n**Langkah Pembahasan:**\n1. **Hitung Usaha (Dot Product):**\n   $$W = (4)(3) + (3)(2) + (-2)(1) = 12 + 6 - 2 = \\mathbf{16\\text{ Joule}}$$\n2. **Hitung Torsi (Cross Product):**\n   $$\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -1 & 5 \\\\ 4 & 3 & -2 \\end{vmatrix}$$\n   $$\\vec{\\tau} = [(-1)(-2) - (5)(3)]\\hat{i} - [(2)(-2) - (5)(4)]\\hat{j} + [(2)(3) - (-1)(4)]\\hat{k}$$\n   $$\\vec{\\tau} = (2 - 15)\\hat{i} - (-4 - 20)\\hat{j} + (6 + 4)\\hat{k} = \\mathbf{(-13\\hat{i} + 24\\hat{j} + 10\\hat{k})\\text{ N}\\cdot\\text{m}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-vektor_3.svg",
          "title": "Perbandingan Geometri Dot Product (Skalar) vs Cross Product (Vektor)",
          "caption": "Makna fisis perkalian titik (Dot Product) sebagai proyeksi searah penghasil skalar usaha (Panel A) dan perkalian silang (Cross Product) menggunakan kaidah tangan kanan penghasil vektor tegak lurus (Panel B).",
          "guide": [
            "Dot Product (Panel A) mengalikan komponen yang SEJAJAR (cos θ) dan menghasilkan angka skalar murni (contoh: Usaha W = F · s).",
            "Jika dua vektor saling tegak lurus (θ = 90°), nilai Dot Product-nya pasti nol (A · B = 0).",
            "Cross Product (Panel B) menghasilkan VEKTOR BARU yang tegak lurus bidang A dan B sesuai kaidah putaran tangan kanan (contoh: Torsi τ = r × F)."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-gerak-lurus",
    "title": "Fisika Bab 3: Kinematika Gerak Lurus (GLB, GLBB & Gerak Vertikal Bebas)",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "icon": "trending-up",
    "summary": "Kuasai kinematika gerak satu dimensi dari prinsip pertama. Pahami perbedaan mendasar jarak vs perpindahan, kelajuan vs kecepatan, buktikan asal-usul ketiga persamaan GLBB dari grafik kecepatan-waktu, dan bedah gerak vertikal bebas secara sistematis.",
    "subtopics": [
      {
        "title": "1. Posisi, Jarak vs Perpindahan, dan Kelajuan vs Kecepatan",
        "concept": "Kinematika adalah cabang fisika yang mendeskripsikan *bagaimana* benda bergerak tanpa mempersoalkan *apa penyebab* gerak tersebut. Sebelum masuk ke persamaan, seorang pemula wajib membedakan besaran skalar (hanya punya nilai) dan besaran vektor (punya nilai dan arah).\n\n**1. Jarak ($s$) vs Perpindahan ($\\Delta x$):**\n- **Jarak ($s$):** Panjang total seluruh lintasan fisik yang dilalui benda. Merupakan **besaran skalar**, nilainya selalu positif ($s \\ge 0$) dan terus bertambah seiring berjalannya waktu.\n- **Perpindahan ($\\Delta \\vec{x}$):** Perubahan posisi kedudukan benda dari titik awal ke titik akhir. Merupakan **besaran vektor**:\n  $$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}$$\n  *Perenungan Fisis:* Jika seorang pelari mengitari lintasan lari 400 meter satu putaran penuh lalu kembali ke garis start, jarak yang ia tempuh adalah $400\\text{ meter}$, namun perpindahannya adalah **$0\\text{ meter}$** karena posisi awal sama dengan posisi akhir!\n\n---\n\n**2. Kelajuan ($v$) vs Kecepatan ($\\vec{v}$):**\n- **Kelajuan Rata-Rata ($v_{\\text{rata-rata}}$):** Rasio jarak total terhadap waktu total. Merupakan **besaran skalar**:\n  $$v = \\frac{\\text{Jarak Total}}{\\text{Waktu Total}} = \\frac{s_{\\text{tot}}}{t_{\\text{tot}}}$$\n  Speedometer pada dashboard motor atau mobil hanya membaca **kelajuan sesaat**, bukan kecepatan, karena jarum tidak menunjukkan arah kompas kendaraan Anda.\n- **Kecepatan Rata-Rata ($\\vec{v}_{\\text{rata-rata}}$):** Rasio perpindahan terhadap selang waktu tempuh. Merupakan **besaran vektor**:\n  $$\\vec{v} = \\frac{\\Delta \\vec{x}}{\\Delta t} = \\frac{x_2 - x_1}{t_2 - t_1}$$\n  Tanda positif ($+$) atau negatif ($-$) pada kecepatan 1 dimensi menunjukkan arah mata angin (misal: $+$ ke kanan/utara, $-$ ke kiri/selatan).",
        "quickTip": "Jarak selalu menghitung setiap langkah kaki Anda. Perpindahan hanya menarik satu garis lurus langsung dari titik awal ke titik akhir! Jika kembali ke titik semula: Jarak $> 0$, tapi Perpindahan $= 0$!",
        "exampleProblem": "**Soal Konseptual Terbimbing:**\nSeorang kurir motor bergerak ke arah timur menempuh jalan lurus sejauh $800\\text{ meter}$ dalam waktu $40\\text{ sekon}$. Tiba-tiba ia menyadari ada paket yang tertinggal, lalu berbalik arah ke barat menempuh jalan yang sama sejauh $200\\text{ meter}$ dalam waktu $20\\text{ sekon}$.\n\nTentukan:\na) Jarak total yang ditempuh kurir.\nb) Perpindahan kurir dari posisi awal keberangkatan.\nc) Kelajuan rata-rata kurir selama seluruh perjalanan.\nd) Kecepatan rata-rata kurir selama seluruh perjalanan.\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menentukan Sumbu Koordinat & Jarak Tempuh**\nTetapkan arah timur sebagai sumbu positif ($+$) dan barat sebagai sumbu negatif ($-$).\n- Lintasan 1: bergerak ke timur $s_1 = 800\\text{ m}$, waktu $t_1 = 40\\text{ s}$.\n- Lintasan 2: bergerak ke barat $s_2 = 200\\text{ m}$, waktu $t_2 = 20\\text{ s}$.\nJarak adalah besaran skalar (penjumlahan panjang lintasan tanpa memandang arah):\n$$s_{\\text{total}} = s_1 + s_2 = 800\\text{ m} + 200\\text{ m} = \\mathbf{1000\\text{ meter}}$$\n\n**Langkah 2: Menghitung Perpindahan Vektor ($\\Delta x$)**\nPosisi awal: $x_0 = 0$.\nSetelah bergerak ke timur: $x_1 = +800\\text{ m}$.\nSetelah berbalik ke barat $200\\text{ m}$: $x_2 = 800 - 200 = +600\\text{ m}$.\nPerpindahan adalah selisih posisi akhir terhadap posisi awal:\n$$\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}} = +600\\text{ m} - 0 = \\mathbf{+600\\text{ meter (ke arah Timur)}}$$\n\n**Langkah 3: Menghitung Kelajuan Rata-Rata**\nWaktu total: $t_{\\text{tot}} = t_1 + t_2 = 40\\text{ s} + 20\\text{ s} = 60\\text{ sekon}$.\n$$v = \\frac{s_{\\text{total}}}{t_{\\text{total}}} = \\frac{1000\\text{ m}}{60\\text{ s}} \\approx \\mathbf{16{,}67\\text{ m/s}}$$\n\n**Langkah 4: Menghitung Kecepatan Rata-Rata**\n$$\\vec{v} = \\frac{\\Delta x}{t_{\\text{total}}} = \\frac{+600\\text{ m}}{60\\text{ s}} = \\mathbf{+10\\text{ m/s (ke arah Timur)}}$$\n*Pencerahan Fisis: Kelajuan ($16{,}67\\text{ m/s}$) lebih besar daripada kecepatan ($10\\text{ m/s}$) karena kurir berbalik arah sehingga sebagian perpindahannya saling membatalkan.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-lurus_0.svg",
          "title": "Perbandingan Jarak Tempuh vs Perpindahan & Kelajuan vs Kecepatan",
          "caption": "Ilustrasi lintasan kurir yang bergerak maju 800 m lalu berbalik arah 200 m (Panel A) beserta grafik posisi terhadap waktu x(t) untuk membedakan kelajuan rata-rata dan kecepatan rata-rata (Panel B).",
          "guide": [
            "Jarak (s) menjumlahkan seluruh langkah lintasan tanpa memedulikan arah (800 + 200 = 1.000 m).",
            "Perpindahan (Δx) hanya menarik garis lurus dari titik awal ke titik akhir (+800 - 200 = +600 m).",
            "Akibat berbalik arah, kelajuan rata-rata (16,67 m/s) bernilai lebih besar daripada besar kecepatan rata-ratanya (10 m/s)."
          ]
        }
      },
      {
        "title": "2. Gerak Lurus Beraturan (GLB) & Analisis Grafik Kinematika",
        "concept": "Gerak Lurus Beraturan (GLB) adalah kondisi gerak paling sederhana di alam semesta: gerak benda pada lintasan garis lurus dengan kecepatan yang konstan (tetap) setiap saat.\n\n**1. Karakteristik Mutlak GLB:**\n- Kecepatan bernilai tetap: $\\vec{v}(t) = \\text{konstan}$.\n- Laju perubahan kecepatan (percepatan) sama dengan nol: $\\vec{a} = 0$.\n- Posisi berubah secara linier terhadap waktu:\n  $$s(t) = s_0 + v \\cdot t$$\n  Jika posisi awal dimulai dari titik nol ($s_0 = 0$), maka:\n  $$s = v \\cdot t \\iff v = \\frac{s}{t} \\iff t = \\frac{s}{v}$$\n\n---\n\n**2. Membaca Grafik Kinematika GLB:**\n- **Grafik Kecepatan terhadap Waktu ($v-t$):**\n  Berupa garis horizontal datar sejajar sumbu waktu.\n  *Rahasia Luas Grafik:* Luas daerah di bawah kurva $v-t$ antara $t = 0$ sampai $t$ berbentuk persegi panjang dengan panjang $t$ dan tinggi $v$:\n  $$\\text{Luas Persegi Panjang} = v \\times t = \\text{Perpindahan } s$$\n- **Grafik Posisi terhadap Waktu ($s-t$):**\n  Berupa garis lurus miring (linier). Kemiringan garis (gradien / *slope*) merepresentasikan nilai kecepatan:\n  $$\\text{Gradien} = \\frac{\\Delta s}{\\Delta t} = v$$\n  Semakin curam garisnya, semakin cepat benda bergerak. Garis mendatar berarti benda diam ($v = 0$).",
        "quickTip": "Pada grafik $v-t$, luas daerah di bawah kurva selalu sama dengan jarak tempuh! Pada grafik $s-t$, kemiringan garis (gradien) adalah kecepatan benda!",
        "exampleProblem": "**Soal Latihan Papasan Dua Kendaraan:**\nMobil A dan Mobil B mula-mula terpisah sejauh $600\\text{ meter}$ pada jalan lurus mendatar. Kedua mobil bergerak saling mendekat secara serentak pada waktu $t = 0$. Mobil A melaju dengan kelajuan konstan $v_A = 20\\text{ m/s}$, sedangkan Mobil B melaju dengan kelajuan konstan $v_B = 10\\text{ m/s}$.\n\nTentukan:\na) Kapan (pada detik ke berapa) kedua mobil tersebut akan berpapasan?\nb) Di mana posisi titik temu papasan diukur dari posisi awal Mobil A?\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menetapkan Persamaan Posisi Kedua Mobil**\nJadikan posisi awal Mobil A sebagai titik acuan ($x = 0$) dan arah ke Mobil B sebagai sumbu positif ($+$).\n- Mobil A bergerak ke kanan dari $x_A(0) = 0$ dengan kelajuan $v_A = +20\\text{ m/s}$:\n  $$x_A(t) = 0 + v_A \\cdot t = 20t$$\n- Mobil B bergerak ke kiri dari $x_B(0) = 600\\text{ m}$ dengan kelajuan $v_B = -10\\text{ m/s}$:\n  $$x_B(t) = 600 - v_B \\cdot t = 600 - 10t$$\n\n**Langkah 2: Menentukan Syarat Berpapasan**\nDua benda berpapasan tepat ketika posisi koordinat keduanya bernilai sama di titik yang sama:\n$$x_A(t) = x_B(t)$$\nSubstitusikan persamaan gerak:\n$$20t = 600 - 10t$$\nPindahkan suku $t$ ke ruas kiri:\n$$20t + 10t = 600$$\n$$30t = 600 \\implies t = \\frac{600}{30} = \\mathbf{20\\text{ sekon}}$$\n*Kedua mobil berpapasan setelah bergerak selama 20 sekon.*\n\n**Langkah 3: Menghitung Posisi Titik Papasan**\nSubstitusi $t = 20\\text{ s}$ ke persamaan posisi Mobil A:\n$$x_A(20) = 20 \\times 20 = \\mathbf{400\\text{ meter dari posisi awal Mobil A}}$$\n*(Verifikasi dari Mobil B: $x_B(20) = 600 - 10(20) = 600 - 200 = 400\\text{ m}$. Cocok sempurna!).*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-lurus_1.svg",
          "title": "Analisis Grafik Kinematika GLB & Titik Temu Papasan Dua Kendaraan",
          "caption": "Makna luas daerah di bawah grafik kecepatan-waktu (v-t) sebagai perpindahan (Panel A) dan perpotongan dua garis posisi-waktu (x-t) sebagai titik papasan kendaraan (Panel B).",
          "guide": [
            "Pada GLB, kecepatan bernilai konstan sehingga grafik v-t berupa garis mendatar dan luas persegi panjang di bawahnya adalah jarak s = v · t.",
            "Pada grafik posisi x-t (Panel B), kemiringan (gradien) garis menunjukkan kecepatan: Mobil A miring ke atas (+20 m/s) dan Mobil B miring ke bawah (-10 m/s).",
            "Titik potong kedua garis pada (t = 20 s, x = 400 m) adalah saat dan lokasi kedua mobil berpapasan."
          ]
        }
      },
      {
        "title": "3. Gerak Lurus Berubah Beraturan (GLBB): Tiga Persamaan Sakti",
        "concept": "Gerak Lurus Berubah Beraturan (GLBB) adalah gerak pada lintasan lurus dengan **percepatan konstan (tetap)**. Kecepatan benda berubah secara teratur setiap sekonnya.\n\nBanyak buku pelajaran langsung menyajikan 3 rumus GLBB begitu saja tanpa menjelaskan asal-usulnya. Mari kita buktikan secara logis dan transparan dari mana ketiga rumus ini berasal!\n\n---\n\n**1. Penurunan Rumus 1: Dari Definisi Laju Perubahan Kecepatan**\nPercepatan ($a$) didefinisikan sebagai perubahan kecepatan ($\\Delta v$) per satuan waktu ($t$):\n$$a = \\frac{v_t - v_0}{t}$$\nKalikan kedua ruas dengan $t$:\n$$at = v_t - v_0$$\nPindahkan $v_0$ ke ruas kiri:\n$$v_t = v_0 + at \\quad \\text{...(Persamaan Sakti 1)}$$\n*Makna Fisis:* Kecepatan pada detik ke-$t$ ($v_t$) adalah modal kecepatan mula-mula ($v_0$) ditambah akumulasi tambahan kecepatan hasil pacuan akselerasi ($a \\times t$).\n\n---\n\n**2. Penurunan Rumus 2: Dari Luas Trapesium Grafik Kecepatan-Waktu ($v-t$)**\nPada grafik $v-t$ untuk benda yang dipercepat beraturan dari kecepatan awal $v_0$ hingga kecepatan akhir $v_t$ selama selang waktu $t$:\nBentuk daerah di bawah kurva adalah **trapesium** dengan sisi-sisi sejajar $v_0$ dan $v_t$, serta lebar alas $t$.\n$$\\text{Jarak } s = \\text{Luas Trapesium} = \\left(\\frac{v_0 + v_t}{2}\\right) \\times t$$\nSekarang, masukkan Persamaan Sakti 1 ($v_t = v_0 + at$) ke dalam rumus luas ini:\n$$s = \\left(\\frac{v_0 + (v_0 + at)}{2}\\right) \\times t$$\n$$s = \\left(\\frac{2v_0 + at}{2}\\right) \\times t = \\left(v_0 + \\frac{1}{2}at\\right) \\times t$$\n$$s = v_0 t + \\frac{1}{2}at^2 \\quad \\text{...(Persamaan Sakti 2)}$$\n*Makna Fisis:* Jarak tempuh terdiri dari dua komponen: $v_0 t$ (jarak andai kecepatan konstan) ditambah $\\frac{1}{2}at^2$ (jarak ekstra akibat laju pertambahan kecepatan).\n\n---\n\n**3. Penurunan Rumus 3: Eliminasi Variabel Waktu ($t$)**\nBagaimana jika dalam eksperimen kita tidak memiliki stopwatch atau waktu $t$ tidak diketahui?\nDari Persamaan 1, isolasi variabel waktu:\n$$t = \\frac{v_t - v_0}{a}$$\nSubstitusikan nilai $t$ ini ke dalam persamaan jarak rata-rata trapesium $s = \\left(\\frac{v_t + v_0}{2}\\right) \\times t$:\n$$s = \\left(\\frac{v_t + v_0}{2}\\right) \\left(\\frac{v_t - v_0}{a}\\right)$$\nIngat rumus aljabar selisih kuadrat $(A + B)(A - B) = A^2 - B^2$:\n$$s = \\frac{v_t^2 - v_0^2}{2a}$$\nKalikan silang $2a$ ke ruas kiri:\n$$2as = v_t^2 - v_0^2$$\nPindahkan $v_0^2$ ke ruas kiri:\n$$v_t^2 = v_0^2 + 2as \\quad \\text{...(Persamaan Sakti 3)}$$\n\nKini Anda paham seutuhnya: tidak ada satu pun rumus GLBB yang jatuh misterius dari langit! Semuanya saling terhubung secara matematis.",
        "quickTip": "Panduan Memilih Rumus GLBB:\n1. Tidak ada jarak ($s$)? Pakai $v_t = v_0 + at$\n2. Tidak ada kecepatan akhir ($v_t$)? Pakai $s = v_0 t + \\frac{1}{2}at^2$\n3. Tidak ada waktu ($t$)? Pakai $v_t^2 = v_0^2 + 2as$!",
        "exampleProblem": "**Soal Pengereman Kendaraan Darurat:**\nSebuah mobil sport melaju di jalan bebas hambatan dengan kelajuan $108\\text{ km/jam}$. Sopir tiba-tiba melihat seekor rusa berdiri di tengah jalan pada jarak $70\\text{ meter}$ di depannya. Sopir langsung menginjak rem sekuat tenaga sehingga mobil mengalami perlambatan konstan sebesar $a = -6\\text{ m/s}^2$.\n\nTentukan:\na) Konversikan kecepatan awal mobil ke dalam satuan SI.\nb) Waktu yang dibutuhkan mobil sejak pengereman hingga berhenti total ($v_t = 0$).\nc) Jarak yang ditempuh mobil selama pengereman.\nd) Apakah mobil berhasil berhenti sebelum menabrak rusa tersebut?\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Konversi Satuan ke Satuan Standar SI**\n$$v_0 = 108\\text{ km/jam} = 108 \\times \\frac{1000\\text{ m}}{3600\\text{ s}} = 108 \\times \\frac{5}{18} = \\mathbf{30\\text{ m/s}}$$\nKeadaan akhir: mobil berhenti, maka $v_t = 0$.\nPerlambatan: $a = -6\\text{ m/s}^2$ (tanda negatif karena melawan arah gerak).\n\n**Langkah 2: Menghitung Waktu Pengereman (Rumus GLBB 1)**\nGunakan rumus yang tidak memuat jarak:\n$$v_t = v_0 + at$$\n$$0 = 30 + (-6)t$$\n$$6t = 30 \\implies t = \\frac{30}{6} = \\mathbf{5\\text{ sekon}}$$\n*Mobil membutuhkan waktu 5 sekon untuk berhenti.*\n\n**Langkah 3: Menghitung Jarak Pengereman (Rumus GLBB 3)**\nGunakan rumus independen waktu untuk verifikasi langsung:\n$$v_t^2 = v_0^2 + 2as$$\n$$0^2 = 30^2 + 2(-6)s$$\n$$0 = 900 - 12s$$\n$$12s = 900 \\implies s = \\frac{900}{12} = \\mathbf{75\\text{ meter}}$$\n\n*(Verifikasi menggunakan Rumus GLBB 2):*\n$$s = v_0 t + \\frac{1}{2}at^2 = 30(5) + \\frac{1}{2}(-6)(5)^2 = 150 - 3(25) = 150 - 75 = 75\\text{ meter}$$ (Hasil identik!).\n\n**Langkah 4: Menarik Kesimpulan Fisis**\nJarak rusa di depan mobil adalah $70\\text{ meter}$, sedangkan mobil membutuhkan jarak pengereman sejauh $75\\text{ meter}$.\nKarena $s_{\\text{henti}} (75\\text{ m}) > \\text{Jarak Rusa} (70\\text{ m})$, maka mobil **sayangnya menabrak rusa sejauh $5\\text{ meter}$ setelah titik berdiri rusa**.",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-lurus_2.svg",
          "title": "Penurunan Geometris 3 Persamaan GLBB & Analisis Jarak Pengereman",
          "caption": "Pembuktian rumus jarak GLBB dari penjumlahan luas persegi panjang (v₀t) dan segitiga (½at²) di bawah kurva v-t (Panel A) serta kurva parabola pengereman kendaraan hingga berhenti (Panel B).",
          "guide": [
            "Lihat Panel A: tidak perlu menghafal buta! Jarak GLBB hanyalah luas trapesium di bawah grafik v-t yang terbagi menjadi persegi panjang v₀t dan segitiga ½at².",
            "Pada GLBB diperlambat (Panel B), percepatan bernilai negatif (a = -6 m/s²) sehingga kurva posisi s(t) melengkung landai hingga mendatar saat berhenti (vt = 0).",
            "Gunakan rumus ke-3 (vt² = v₀² + 2as) saat soal tidak menyebutkan waktu tempuh t."
          ]
        }
      },
      {
        "title": "4. Gerak Vertikal: Gerak Jatuh Bebas (GJB) & Gerak Vertikal ke Atas (GVA)",
        "concept": "Gerak vertikal di dekat permukaan bumi adalah aplikasi langsung dari GLBB 1 dimensi di bawah pengaruh medan gravitasi bumi dengan percepatan konstan $g \\approx 9{,}8\\text{ m/s}^2$ atau sering dibulatkan $10\\text{ m/s}^2$. Gesekan udara diabaikan.\n\nKarena arah gravitasi selalu mengarah ke pusat bumi (ke bawah), kita cukup mengadaptasi 3 rumus GLBB dengan mengganti $a = -g$ (jika sumbu positif ke atas) dan jarak $s$ menjadi ketinggian $h$.\n\n---\n\n**1. Gerak Jatuh Bebas (GJB):**\nCiri utama: Benda dilepaskan **TANPA KECEPATAN AWAL** ($v_0 = 0$) dari ketinggian $h$.\nKarena gerak hanya searah ke bawah, kita tetapkan arah ke bawah sebagai positif:\n1. $v_t = gt$\n2. $h = \\frac{1}{2}gt^2 \\implies t_{\\text{jatuh}} = \\sqrt{\\frac{2h}{g}}$\n3. $v_t^2 = 2gh \\implies v_{\\text{tumbuk}} = \\sqrt{2gh}$\n\n*Pencerahan Galileo Galilei:* Kelajuan dan waktu jatuh TIDAK BERGANTUNG PADA MASSA! Sebutir bulu ayam dan sebuah bola bowling bermassa 5 kg yang dijatuhkan bersamaan di tabung hampa udara akan mendarat di tanah pada saat yang persis bersamaan!\n\n---\n\n**2. Gerak Vertikal ke Atas (GVA):**\nBenda dilempar ke atas dengan kecepatan awal $v_0$. Gravitasi melawan gerak benda sehingga benda mengalami perlambatan ($a = -g$).\n1. $v_t = v_0 - gt$\n2. $h = v_0 t - \\frac{1}{2}gt^2$\n3. $v_t^2 = v_0^2 - 2gh$\n\n**Kondisi di Titik Puncak Tertinggi ($H_{\\text{maks}}$):**\nSaat mencapai titik tertinggi, benda berhenti sesaat sebelum berbalik arah jatuh, sehingga kecepatan vertikal sesaat bernilai nol ($v_t = 0$):\n$$v_t = v_0 - gt_{\\text{puncak}} = 0 \\implies t_{\\text{puncak}} = \\frac{v_0}{g}$$\nSubstitusikan $t_{\\text{puncak}}$ ke rumus ketinggian:\n$$H_{\\text{maks}} = v_0\\left(\\frac{v_0}{g}\\right) - \\frac{1}{2}g\\left(\\frac{v_0}{g}\\right)^2 = \\frac{v_0^2}{g} - \\frac{v_0^2}{2g} = \\frac{v_0^2}{2g}$$\n\n*Simetri Gerak Parabolik Vertikal:*\n- Waktu naik sama persis dengan waktu turun kembali ke titik pelemparan: $t_{\\text{total}} = 2 t_{\\text{puncak}} = \\frac{2v_0}{g}$.\n- Kelajuan saat mendarat kembali ke tangan pelempar sama dengan kelajuan awal pelemparan ($|v_{\\text{kembali}}| = v_0$).",
        "quickTip": "Titik tertinggi gerak vertikal ke atas: Kecepatan nol ($v=0$), tetapi percepatannya TETAP $g = 10\\text{ m/s}^2$ ke bawah! Jangan terkecoh menganggap percepatannya nol!",
        "exampleProblem": "**Soal Gabungan Gerak Vertikal:**\nDari atas atap gedung setinggi $H_0 = 40\\text{ meter}$, sebuah bola tenis dilempar vertikal lurus ke atas dengan kelajuan awal $v_0 = 20\\text{ m/s}$. Percepatan gravitasi bumi $g = 10\\text{ m/s}^2$ dan gesekan udara diabaikan.\n\nTentukan:\na) Waktu yang dibutuhkan bola untuk mencapai titik tertinggi dan tinggi maksimum yang dicapai diukur dari permukaan tanah.\nb) Waktu total yang dibutuhkan bola dari saat dilempar hingga menghantam permukaan tanah di dasar gedung.\nc) Kecepatan bola sesaat sebelum membentur tanah.\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Analisis Gerak Menuju Titik Tertinggi**\nDi titik tertinggi, kelajuan sesaat $v_t = 0$:\n$$v_t = v_0 - gt_{\\text{puncak}} \\implies 0 = 20 - 10 t_{\\text{puncak}} \\implies t_{\\text{puncak}} = \\mathbf{2\\text{ sekon}}$$\nTinggi kenaikan bola diukur dari atap gedung:\n$$h_{\\text{naik}} = \\frac{v_0^2}{2g} = \\frac{20^2}{2 \\times 10} = \\frac{400}{20} = 20\\text{ meter}$$\nTinggi total bola diukur dari permukaan tanah:\n$$H_{\\text{tanah}} = H_0 + h_{\\text{naik}} = 40\\text{ m} + 20\\text{ m} = \\mathbf{60\\text{ meter}}$$\n\n**Langkah 2: Menghitung Waktu Total Hingga Mencapai Tanah**\nTetapkan titik pelemparan di atap gedung sebagai titik koordinat $y = 0$, dan arah ke atas sebagai positif ($+$).\nSaat bola mencapai tanah di dasar gedung, posisi akhir bola adalah $y = -40\\text{ meter}$ (berada 40 m di bawah atap):\n$$y(t) = v_0 t - \\frac{1}{2}gt^2$$\n$$-40 = 20t - \\frac{1}{2}(10)t^2$$\n$$-40 = 20t - 5t^2$$\nPindahkan seluruh suku ke ruas kiri agar membentuk persamaan kuadrat standar:\n$$5t^2 - 20t - 40 = 0$$\nBagi kedua ruas dengan 5:\n$$t^2 - 4t - 8 = 0$$\nGunakan rumus kuadratik (rumus abc):\n$$t = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(-8)}}{2(1)}$$\n$$t = \\frac{4 \\pm \\sqrt{16 + 32}}{2} = \\frac{4 \\pm \\sqrt{48}}{2} = \\frac{4 \\pm 4\\sqrt{3}}{2} = 2 \\pm 2\\sqrt{3}$$\nKarena waktu fisis harus bernilai positif ($t > 0$):\n$$t = 2 + 2\\sqrt{3} \\approx 2 + 2(1{,}732) = 2 + 3{,}464 = \\mathbf{5{,}46\\text{ sekon}}$$\n\n**Langkah 3: Menghitung Kecepatan Bola Saat Menyentuh Tanah**\nGunakan persamaan kecepatan independen waktu diukur dari atap:\n$$v_t^2 = v_0^2 - 2g y$$\n$$v_t^2 = 20^2 - 2(10)(-40) = 400 + 800 = 1200$$\n$$v_t = -\\sqrt{1200} = -20\\sqrt{3} \\approx \\mathbf{-34{,}64\\text{ m/s}}$$\n*(Tanda negatif menunjukkan arah kecepatan bola sedang melesat ke bawah menuju tanah).*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-lurus_3.svg",
          "title": "Simetri Gerak Vertikal ke Atas (GVA) & Grafik Kecepatan terhadap Waktu",
          "caption": "Lintasan simetris bola yang dilempar vertikal ke atas dengan v₀ = 20 m/s hingga mencapai puncak Hmaks = 20 m lalu jatuh bebas kembali (Panel A) beserta grafik kecepatan vy(t) (Panel B).",
          "guide": [
            "Di titik puncak tertinggi (t = 2 s), kecepatan vertikal sesaat bernilai NOL (vy = 0), namun percepatan gravitasi g tetap bekerja sebesar -10 m/s²!",
            "Gerak naik dan turun bersifat simetris sempurna: waktu naik sama dengan waktu turun (2 s), dan kelajuan pada ketinggian yang sama selalu sama besar.",
            "Pada Panel B, luas segitiga di atas sumbu waktu (0–2 s) adalah tinggi maksimum Hmaks = ½ · 2 · 20 = 20 meter."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-gerak-melingkar",
    "number": "04",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "title": "Fisika Bab 4: Kinematika Gerak Melingkar Beraturan & Transmisi Roda",
    "icon": "circle",
    "summary": "Analisis gerak melingkar beraturan (GMB): bedakan besaran sudut (rad, rpm, rad/s) dan besaran linear (m, m/s), pahami asal-usul fisis percepatan sentripetal yang membengkokkan lintasan, serta kuasai hukum transmisi roda seporos, roda bersinggungan, dan roda sabuk rantai.",
    "subtopics": [
      {
        "title": "1. Besaran Gerak Melingkar: Sudut, Frekuensi, Periode & Kecepatan Sudut",
        "concept": "Ketika sebuah partikel bergerak mengelilingi suatu titik pusat tetap dengan jari-jari $R$ yang konstan, lintasannya berbentuk lingkaran.\n\n**Besaran Pokok Gerak Melingkar:**\n1. **Posisi Sudut ($\\theta$):** Besar sudut putaran yang telah ditempuh benda dari posisi acuan, diukur dalam satuan **Radian (rad)** atau Derajat ($^\\circ$):\n   $$1\\text{ putaran penuh} = 360^\\circ = 2\\pi\\text{ radian}$$\n2. **Periode ($T$):** Waktu yang dibutuhkan benda untuk menyelesaikan satu putaran penuh:\n   $$T = \\frac{t}{n} \\quad (\\text{satuan sekon})$$\n3. **Frekuensi ($f$):** Banyaknya putaran penuh yang dapat dilakukan benda dalam waktu satu sekon:\n   $$f = \\frac{n}{t} \\quad (\\text{satuan Hertz / Hz})$$\n   Hubungan Timbal Balik: $$T = \\frac{1}{f} \\quad \\text{atau} \\quad f = \\frac{1}{T}$$\n4. **Kecepatan Sudut (Kecepatan Anguler / $\\omega$):** Besar perubahan sudut per satuan waktu:\n   $$\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f \\quad (\\text{satuan rad/s})$$\n\n**Konversi Satuan Rotasi Populer (RPM):**\nMesin mobil, kipas angin, dan bor sering mencantumkan kecepatan putar dalam **rpm (rotations per minute)**:\n$$1\\text{ rpm} = 1\\,\\frac{\\text{putaran}}{\\text{menit}} = \\frac{2\\pi\\text{ rad}}{60\\text{ s}} = \\frac{\\pi}{30}\\,\\text{rad/s}$$",
        "quickTip": "💡 **Trik Kilat Konversi RPM ke rad/s:** Cukup kalikan angka rpm dengan $\\frac{\\pi}{30}$! Contoh: Kipas berputar $1200\\text{ rpm} \\implies \\omega = 1200 \\times \\frac{\\pi}{30} = 40\\pi\\text{ rad/s}$!",
        "exampleProblem": "**Soal Konversi & Kecepatan Sudut:**\nSebuah baling-baling helikopter berputar stabil dengan kecepatan $600\\text{ rpm}$. Jari-jari baling-baling dari poros hingga ujung bilah adalah $R = 2\\text{ meter}$.\n\na) Tentukan frekuensi dan periode putaran baling-baling!\nb) Tentukan kecepatan sudut ($\\omega$) baling-baling dalam satuan standar $\\text{rad/s}$!\n\n**Langkah Pembahasan:**\n1. **Hitung Frekuensi ($f$):**\n   $$f = \\frac{600\\text{ putaran}}{60\\text{ sekon}} = \\mathbf{10\\text{ Hz}}$$\n2. **Hitung Periode ($T$):**\n   $$T = \\frac{1}{f} = \\frac{1}{10} = \\mathbf{0{,}1\\text{ sekon}}$$\n3. **Hitung Kecepatan Sudut ($\\omega$):**\n   $$\\omega = 2\\pi f = 2\\pi(10) = \\mathbf{20\\pi\\text{ rad/s}} \\approx 62{,}83\\text{ rad/s}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-melingkar_0.svg",
          "title": "Geometri Sudut Radian & Konversi Putaran RPM ke Kecepatan Sudut (ω)",
          "caption": "Definisi satu radian sebagai sudut pusat ketika panjang busur s sama dengan jari-jari R (Panel A) serta grafik konversi putaran per menit (rpm) ke kecepatan sudut rad/s (Panel B).",
          "guide": [
            "Satu radian (Panel A) adalah sudut ketika panjang busur lintasan s sama persis dengan jari-jari lingkaran R (1 putaran penuh = 2π rad).",
            "Frekuensi (f) adalah banyaknya putaran tiap detik (Hz), sedangkan Periode (T = 1/f) adalah waktu untuk 1 putaran penuh.",
            "Gunakan trik cepat di Panel B: kalikan nilai rpm dengan π/30 untuk langsung mendapatkan kecepatan sudut ω dalam rad/s."
          ]
        }
      },
      {
        "title": "2. Hubungan Besaran Linear dan Sudut & Percepatan Sentripetal",
        "concept": "Tiap titik pada benda yang berotasi memiliki kecepatan sudut $\\omega$ yang sama, namun titik yang berada semakin jauh dari poros pusat akan menempuh jarak lintasan yang lebih panjang per detiknya.\n\n**Hubungan Antara Besaran Linear dan Anguler:**\n- **Panjang Busur Lintasan:** $s = \\theta \\cdot R$\n- **Kelajuan Linear (Tangensial):**\n  $$v = \\omega \\cdot R = 2\\pi f R = \\frac{2\\pi R}{T}$$\n- **Arah Kecepatan Linear ($\\vec{v}$):** Selalu tegak lurus jari-jari dan menyinggung garis lintasan lingkaran (*tangensial*).\n\n**Percepatan Sentripetal ($a_s$): Mengapa Benda yang Melingkar Tetap Dipercepat?**\nPada Gerak Melingkar Beraturan (GMB), kelajuan linear $v$ bernilai tetap konstan (misal selalu $5\\text{ m/s}$). Namun, **ARAH KECEPATAN SELALU BERUBAH SECARA KONTINU** di setiap titik. \nDalam fisika, perubahan arah vektor kecepatan adalah wujud nyata dari adanya percepatan! Percepatan yang bertugas membelokkan arah gerak ini disebut **Percepatan Sentripetal ($a_s$)**, yang arahnya selalu tegak lurus vektor kecepatan dan mengarah tepat ke pusat lingkaran:\n$$a_s = \\frac{v^2}{R} = \\omega^2 R$$",
        "quickTip": "🧠 **Mengapa Bulan Tidak Jatuh Menabrak Bumi?** Bulan selalu bergerak melingkar mengelilingi bumi karena gravitasi bumi berperan sebagai gaya sentripetal yang terus-menerus 'membelokkan' lintasan bulan dari garis lurus menjadi elips lingkaran, sehingga bulan jatuh mengitari kelengkungan bumi tanpa pernah menabrak permukaannya!",
        "exampleProblem": "**Soal Percepatan Sentripetal:**\nSebuah mobil bermassa $1200\\text{ kg}$ melintasi tikungan jalan datar melingkar dengan jari-jari kelengkungan $R = 50\\text{ meter}$ pada kelajuan konstan $72\\text{ km/jam}$. Hitung besar percepatan sentripetal yang dialami mobil tersebut!\n\n**Langkah Pembahasan:**\n1. **Konversi Kelajuan ke Satuan SI:**\n   $$v = 72\\text{ km/jam} = 72 \\times \\frac{10}{36} = 20\\text{ m/s}$$\n2. **Hitung Percepatan Sentripetal:**\n   $$a_s = \\frac{v^2}{R} = \\frac{20^2}{50} = \\frac{400}{50} = \\mathbf{8\\text{ m/s}^2}$$\n3. **Makna Fisis:** Gesekan antara ban mobil dan aspal jalan wajib mampu menyediakan percepatan sebesar $8\\text{ m/s}^2$ mengarah ke pusat tikungan agar mobil tidak tergelincir keluar lintasan.",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-melingkar_1.svg",
          "title": "Vektor Kecepatan Tangensial vs Percepatan Sentripetal pada GMB",
          "caption": "Arah vektor kecepatan linear v yang selalu menyinggung lintasan dan tegak lurus percepatan sentripetal as yang mengarah ke pusat (Panel A) serta kurva kuadratik as terhadap kelajuan v (Panel B).",
          "guide": [
            "Amati Panel A: di setiap titik lintasan, vektor kecepatan v (hijau) selalu tegak lurus (90°) terhadap percepatan sentripetal as (merah).",
            "Percepatan sentripetal tidak mengubah besar kelajuan, melainkan berfungsi membelokkan arah gerak agar tetap melingkar.",
            "Karena as = v²/R (Panel B), menggandakan kelajuan mobil 2 kali lipat di tikungan akan melipatgandakan kebutuhan gaya cengkeram ban menjadi 4 kali lipat!"
          ]
        }
      },
      {
        "title": "3. Transmisi Gerak Melingkar: Tiga Hubungan Roda-Roda",
        "concept": "Dalam teknologi mekanik (seperti gir sepeda, rantai motor, roda gigi jam mekanis, dan sistem transmisi mobil), gerak melingkar ditransmisikan antar-poros roda.\n\n**Tiga Hubungan Roda-Roda Dasar:**\n1. **Roda-Roda Seporos (Satu As Pusat):**\n   Dua roda dipasang menempel pada poros sumbu yang sama persis (misal roda belakang sepeda dengan gir belakangnya).\n   - Arah putaran: **Sama**\n   - Kecepatan sudut sama:\n     $$\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$$\n2. **Roda-Roda Dihubungkan Rantai / Sabuk Karet (Belt):**\n   Dua roda terpisah yang dihubungkan sabuk penghubung (misal gir depan sepeda kayuh dihubungkan rantai ke gir roda belakang).\n   - Arah putaran: **Sama**\n   - Kelajuan linear pada tepi roda sama:\n     $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n3. **Roda-Roda Bersinggungan Luar (Roda Gigi / Gears):**\n   Dua roda bergerigi yang giginya saling bertaut langsung.\n   - Arah putaran: **Berlawanan arah**\n   - Kelajuan linear pada titik kontak sama:\n     $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n     $$\\frac{\\omega_A}{\\omega_B} = \\frac{R_B}{R_A} = \\frac{N_B}{N_A}$$\n     (di mana $N$ adalah jumlah gigi roda).",
        "quickTip": "🚲 **Trik Gir Sepeda Tanjakan:** Mengapa saat jalan menanjak kita memilih gir depan kecil ($R_A$ kecil) dan gir belakang besar ($R_B$ besar)?\nKarena $\\omega_B = \\omega_A \\times \\frac{R_A}{R_B}$. Nilai $\\omega_B$ menjadi lebih lambat, tetapi torsi putar roda bertambah berlipat ganda sehingga kayuhan kaki terasa sangat ringan!",
        "exampleProblem": "**Soal Sistem Roda Gabungan (HOTS):**\nTiga buah roda A, B, dan C dirangkai sebagai berikut: Roda A ($R_A = 20\\text{ cm}$) dan Roda B ($R_B = 10\\text{ cm}$) bersinggungan langsung. Roda B seporos dengan Roda C ($R_C = 30\\text{ cm}$). Jika Roda A diputar dengan kecepatan sudut $\\omega_A = 15\\text{ rad/s}$, berapakah kelajuan linear tepi Roda C?\n\n**Langkah Pembahasan:**\n1. **Hubungan Roda A dan B (Bersinggungan):**\n   $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n   $$(15)(20) = \\omega_B (10) \\implies 300 = 10\\omega_B \\implies \\omega_B = 30\\text{ rad/s}$$\n2. **Hubungan Roda B dan C (Seporos):**\n   $$\\omega_C = \\omega_B = 30\\text{ rad/s}$$\n3. **Hitung Kelajuan Linear Roda C ($v_C$):**\n   $$v_C = \\omega_C \\cdot R_C = 30\\text{ rad/s} \\times 0{,}3\\text{ m} = \\mathbf{9\\text{ m/s}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gerak-melingkar_2.svg",
          "title": "Tiga Hubungan Transmisi Roda-Roda & Analisis Roda Gabungan",
          "caption": "Ringkasan sifat kecepatan sudut dan kelajuan linear pada roda seporos, bersinggungan, dan sabuk rantai (Panel A) serta langkah penyelesaian sistem tiga roda gabungan (Panel B).",
          "guide": [
            "Kunci utama Panel A: roda yang SEPOROS memiliki kecepatan sudut sama (ω sama), sedangkan roda yang BERSINGGUNGAN atau dihubungkan RANTAI memiliki kelajuan tepi sama (v sama).",
            "Pada roda bersinggungan atau rantai, roda yang berjari-jari lebih kecil selalu berputar dengan ω lebih cepat (ω berbanding terbalik dengan R).",
            "Pada sistem gabungan (Panel B), pindahkan informasi secara berantai dari Roda A → Roda B (pakai vA = vB) lalu dari Roda B → Roda C (pakai ωB = ωC)."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-hukum-newton",
    "title": "Fisika Bab 5: Dinamika Gerak Partikel & Hukum Newton tentang Gerak",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "icon": "activity",
    "summary": "Kupas tuntas penyebab gerak materi melalui trilogi Hukum I, II, dan III Newton. Pelajari makna inersia, penurunan analitis F=ma, aturan mutlak pasangan aksi-reaksi, teknik Diagram Bebas Gaya (FBD), hingga rahasia gaya gesek statis-kinetis.",
    "subtopics": [
      {
        "title": "1. Konsep Gaya & Hukum I Newton (Prinsip Kelembaman / Inersia)",
        "concept": "Kinematika hanya mendeskripsikan *bagaimana* posisi dan kecepatan benda berubah terhadap waktu. **Dinamika** melangkah jauh lebih dalam dengan menyelidiki *mengapa* benda tersebut dapat bergerak, berbelok, atau berhenti: tarikan atau dorongan apakah yang memicunya? Interaksi fisis inilah yang didefinisikan sebagai **Gaya ($\\vec{F}$)**.\n\n**1. Hukum I Newton (Prinsip Kelembaman / Inersia):**\nSir Isaac Newton merumuskan bahwa materi memiliki sifat bawaan alami yang 'malas' (inersia) untuk mengubah kondisi geraknya sendiri:\n*Setiap benda akan mempertahankan keadaan diamnya atau keadaan gerak lurus beraturannya, KECUALI jika dipaksa oleh resultan gaya luar yang tidak seimbang.*\n$$\\sum \\vec{F} = 0 \\implies \\vec{a} = 0$$\n- Jika benda mula-mula diam ($v_0 = 0$), benda akan **tetap diam selamanya**.\n- Jika benda mula-mula bergerak dengan kecepatan $\\vec{v}$, benda akan **terus meluncur lurus selamanya** dengan kelajuan konstan tanpa membutuhkan bahan bakar atau dorongan terus-menerus!\n\n**2. Inersia dalam Kehidupan Nyata & Keselamatan Transportasi:**\nMassa ($m$) adalah ukuran kuantitatif dari inersia suatu benda: semakin besar massa benda, semakin sulit benda itu digerakkan atau dihentikan.\n- **Saat Mobil Direm Mendadak:** Tubuh Anda terdorong kuat ke depan bukan karena ada gaya tak kasat mata yang mendorong Anda maju, melainkan karena tubuh Anda berusaha mempertahankan kecepatan meluncurnya ke depan sesuai Hukum I Newton! Sabuk pengaman (*seatbelt*) diciptakan untuk memberikan gaya penahan luar agar tubuh Anda berhenti bersama mobil.\n- **Wahana Antariksa Voyager:** Wahana antariksa NASA Voyager 1 yang diluncurkan tahun 1977 kini telah menempuh miliaran kilometer keluar tata surya tanpa menyalakan mesin pendorong. Di ruang hampa antariksa tidak ada hambatan udara maupun gesekan, sehingga wahana tersebut meluncur lurus konstan murni berkat inersianya sesuai Hukum I Newton!",
        "quickTip": "Hukum I Newton: Jika $\\sum F = 0$, percepatan pasti nol ($a=0$). Benda tidak membutuhkan gaya luar untuk mempertahankan gerak lurusnya; gaya hanya dibutuhkan untuk MENGUBAH kecepatannya!",
        "exampleProblem": "**Soal Konseptual Hukum Inersia:**\nSebuah balok es bermassa $M = 50\\text{ kg}$ meluncur di atas permukaan danau beku yang licin sempurna tanpa gesekan dengan kelajuan konstan $v = 15\\text{ m/s}$.\n\nTentukan:\na) Berapakah besar gaya dorong horizontal yang harus terus diberikan agar balok es tersebut tetap meluncur dengan kelajuan konstan $15\\text{ m/s}$?\nb) Jika tiba-tiba ada gaya dorong searah sebesar $F = 100\\text{ N}$ bekerja pada balok selama $4\\text{ sekon}$, apakah Hukum I Newton masih berlaku? Berapakah kelajuan akhirnya?\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Analisis Pertanyaan (a) Menggunakan Hukum I Newton**\nKarena lantai es licin sempurna ($f_{\\text{gesek}} = 0$) dan benda meluncur lurus beraturan dengan kecepatan konstan ($v = 15\\text{ m/s} = \\text{konstan}$), maka laju perubahan kecepatan (percepatan) adalah nol ($a = 0$).\nBerdasarkan Hukum I Newton:\n$$\\sum F = m \\cdot a = 50\\text{ kg} \\times 0 = \\mathbf{0\\text{ Newton}}$$\n**Kesimpulan Fisis:** Tidak diperlukan gaya dorong sama sekali! Benda akan terus meluncur selamanya dengan kelajuan $15\\text{ m/s}$ berkat kelembaman inersianya sendiri.\n\n**Langkah 2: Analisis Pertanyaan (b) Saat Ada Gaya Luar Tak Seimbang**\nKetika gaya luar $F = 100\\text{ N}$ diberikan, resultan gaya tidak lagi nol ($\\sum F \\ne 0$). Maka Hukum I Newton tidak lagi berlaku, melainkan beralih ke **Hukum II Newton**:\n$$a = \\frac{\\sum F}{m} = \\frac{100\\text{ N}}{50\\text{ kg}} = 2\\text{ m/s}^2$$\nKelajuan balok setelah 4 sekon (Kinematika GLBB):\n$$v_t = v_0 + at = 15 + (2 \\times 4) = 15 + 8 = \\mathbf{23\\text{ m/s}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-hukum-newton_0.svg",
          "title": "Hukum I Newton: Eksperimen Inersia Galileo & Kesetimbangan ΣF = 0",
          "caption": "Eksperimen bidang miring licin Galileo yang mendasari konsep inersia alami benda (Panel A) dan dua kondisi fisis berlakunya Hukum I Newton saat benda diam maupun bergerak lurus beraturan (Panel B).",
          "guide": [
            "Amati Panel A: bola yang menggelinding ke bidang datar tanpa gesekan akan terus melaju dengan kecepatan konstan tanpa perlu dorongan terus-menerus.",
            "Hukum I Newton berlaku dalam dua kondisi: benda diam (kecepatan v = 0) dan benda bergerak lurus beraturan (kecepatan v konstan, percepatan a = 0).",
            "Pada kedua kondisi tersebut, resultan semua gaya yang bekerja pada benda tepat sama dengan nol (ΣF = 0)."
          ]
        }
      },
      {
        "title": "2. Hukum II Newton (F = ma) & Analisis Sistem Balok",
        "concept": "Ketika resultan gaya yang bekerja pada suatu benda tidak sama dengan nol, keadaan gerak benda akan berubah secara dinamis berupa **percepatan**.\n\n**1. Pernyataan Matematis Hukum II Newton:**\n*Percepatan yang dialami oleh suatu benda berbanding lurus dengan resultan gaya total yang mengenainya, dan berbanding terbalik dengan massa kelembaman benda tersebut.*\n$$\\vec{a} = \\frac{\\sum \\vec{F}}{m} \\iff \\sum \\vec{F} = m \\vec{a}$$\n- Satuan SI Gaya: **Newton (N)**, di mana $1\\text{ Newton} = 1\\text{ kg}\\cdot\\text{m/s}^2$.\n\n**2. Mengapa Dua Balok Berdampingan Bisa Dihitung dengan $a = \\frac{F}{m_1 + m_2}$?**\nMisalkan dua balok $m_1$ dan $m_2$ bersentuhan di lantai licin dan didorong gaya horizontal $F$ pada balok 1.\nMari kita buktikan mengapa massa keduanya bisa dijumlahkan:\n- Tinjau FBD Balok 1: Ditekan gaya dorong $F$ ke kanan dan ditahan gaya kontak balok 2 ($N_{21}$) ke kiri:\n  $$F - N_{21} = m_1 a \\quad \\text{...(1)}$$\n- Tinjau FBD Balok 2: Ditekan gaya dorong kontak dari balok 1 ($N_{12}$) ke kanan:\n  $$N_{12} = m_2 a \\quad \\text{...(2)}$$\n\nJumlahkan kedua persamaan:\n$$(F - N_{21}) + N_{12} = m_1 a + m_2 a$$\nBerdasarkan Hukum III Newton, gaya aksi sama dengan reaksi: $N_{21} = N_{12}$.\nMaka gaya kontak internal saling membatalkan:\n$$F = (m_1 + m_2) a \\implies a = \\frac{F}{m_1 + m_2}$$\nTerbukti bahwa percepatan sistem gabungan adalah akibat langsung dari Hukum II dan III Newton!",
        "quickTip": "Hukum II Newton selalu ditulis untuk satu benda: $\\sum F = ma$. Pada sistem balok bersentuhan, gaya kontak antar-balok saling meniadakan saat dijumlahkan, sehingga berlaku $a = \\frac{F}{m_1 + m_2}$!",
        "exampleProblem": "**Soal Latihan Terbimbing:**\nDua buah balok $m_1 = 3\\text{ kg}$ dan $m_2 = 2\\text{ kg}$ diletakkan berdampingan saling bersentuhan di atas lantai horizontal licin tanpa gesekan. Sebuah gaya dorong mendatar konstan $F = 25\\text{ Newton}$ dikerjakan pada balok $m_1$ ke arah kanan.\n\nTentukan:\na) Tunjukkan FBD masing-masing balok dan tuliskan persamaan Hukum II Newton untuk tiap balok!\nb) Buktikan secara matematis besar percepatan gerak kedua balok ($a$)!\nc) Hitung besar gaya kontak yang bekerja di antara permukaan kedua balok!\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menuliskan Persamaan Hukum II Newton untuk Tiap Balok (FBD Terpisah)**\n- **Pada Balok 1 ($m_1 = 3\\text{ kg}$):**\n  Gaya ke kanan: gaya dorong luar $F = 25\\text{ N}$.\n  Gaya ke kiri: gaya kontak dari balok 2 yang menahan ($N_{21}$).\n  $$\\sum F_{x1} = m_1 a \\implies 25 - N_{21} = 3a \\quad \\text{...(Persamaan 1)}$$\n- **Pada Balok 2 ($m_2 = 2\\text{ kg}$):**\n  Satu-satunya gaya horizontal yang mendorong balok 2 maju adalah gaya kontak dari balok 1 ($N_{12}$):\n  $$\\sum F_{x2} = m_2 a \\implies N_{12} = 2a \\quad \\text{...(Persamaan 2)}$$\n\n**Langkah 2: Menerapkan Hukum III Newton dan Mencari Percepatan ($a$)**\nBerdasarkan pasangan Aksi-Reaksi Hukum III Newton:\n$$N_{21} = N_{12}$$\nJumlahkan Persamaan 1 dan Persamaan 2:\n$$(25 - N_{21}) + N_{12} = 3a + 2a$$\n$$25 + (-N_{21} + N_{12}) = 5a$$\n$$25 + 0 = 5a \\implies 5a = 25 \\implies a = \\frac{25}{5} = \\mathbf{5\\text{ m/s}^2}$$\n*Kedua balok terdorong bersama dengan percepatan $5\\text{ m/s}^2$.*\n\n**Langkah 3: Menghitung Gaya Kontak Antar-Balok ($N_{12}$)**\nSubstitusikan nilai $a = 5\\text{ m/s}^2$ ke Persamaan 2:\n$$N_{12} = 2a = 2\\text{ kg} \\times 5\\text{ m/s}^2 = \\mathbf{10\\text{ Newton}}$$\n\n*(Verifikasi dengan Persamaan 1):*\n$$25 - N_{21} = 3(5) = 15 \\implies N_{21} = 25 - 15 = 10\\text{ N}$$ (Terbukti $N_{12} = N_{21} = 10\\text{ N}$ konsisten sempurna!).",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-hukum-newton_1.svg",
          "title": "Hukum II Newton: Analisis Dinamika Sistem Balok & Hubungan F = ma",
          "caption": "Diagram fisis sistem balok terhubung katrol licin beserta penurunan percepatan sistem dan tegangan tali (Panel A) serta grafik linear hubungan percepatan terhadap gaya total (Panel B).",
          "guide": [
            "Perhatikan Panel A: gaya penggerak seluruh sistem hanya berasal dari gaya berat beban gantung B (W_B = m_B · g).",
            "Massa total yang dipercepat adalah jumlah seluruh massa benda yang terhubung tali (m_total = m_A + m_B).",
            "Tegangan tali T merupakan gaya internal sistem; cari T dengan meninjau salah satu balok saja menggunakan rumus T = m_A · a."
          ]
        }
      },
      {
        "title": "3. Hukum III Newton (Aksi-Reaksi) & Gaya Sentuh Normal",
        "concept": "Gaya adalah interaksi timbal-balik antara dua benda. Newton merumuskan bahwa di alam semesta, gaya tidak pernah muncul sendirian tanpa pasangan.\n\n**1. Pernyataan Hukum III Newton:**\n*Jika benda A memberikan gaya aksi pada benda B, maka benda B secara serentak akan memberikan gaya reaksi pada benda A yang besarnya sama persis, tetapi berlawanan arah.*\n$$\\vec{F}_{\\text{aksi}} = -\\vec{F}_{\\text{reaksi}}$$\n\n**2. Empat Syarat Mutlak Pasangan Aksi-Reaksi:**\n1. **Besarnya sama persis:** $|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$.\n2. **Arahnya berlawanan mutlak:** membentuk sudut $180^\\circ$.\n3. **Segaris kerja:** bekerja di sepanjang garis hubung yang sama.\n4. **WAJIB BEKERJA PADA DUA BENDA YANG BERBEDA!**\n\n**3. Miskonsepsi Klasik: Mengapa Gaya Normal Meja dan Gaya Berat Buku BUKAN Aksi-Reaksi?**\nPertanyaan ini adalah jebakan nomor satu dalam ujian fisika:\nSebuah buku tergeletak diam di atas meja. Pada buku bekerja gaya gravitasi ke bawah ($w$) dan gaya normal meja ke atas ($N$). Nilai $N = w$. Apakah $N$ dan $w$ pasangan aksi-reaksi?\n**JAWABAN TEGAS: BUKAN!**\n*Alasan Ilmiah:*\n- Gaya berat $w$ adalah gaya gravitasi bumi yang bekerja **PADA BUKU**.\n- Gaya normal $N$ adalah gaya dorong permukaan meja yang bekerja **PADA BUKU**.\nKarena kedua gaya tersebut sama-sama bekerja pada **SATU BENDA YANG SAMA (buku)**, maka keduanya adalah pasangan gaya penyeimbang Hukum I Newton ($\\sum F = N - w = 0$), BUKAN aksi-reaksi!\n\n**Pasangan Aksi-Reaksi yang Sebenarnya:**\n- Pasangan dari gaya berat buku $w$ (Bumi menarik buku ke bawah) adalah gaya gravitasi reaksi di mana **buku menarik pusat Bumi ke atas** dengan gaya yang sama besar!\n- Pasangan dari gaya normal $N$ meja pada buku (meja mendorong buku ke atas) adalah gaya tekan kontak di mana **buku menekan permukaan meja ke bawah** ($N'$).",
        "quickTip": "Kunci membedakan Aksi-Reaksi vs Kesetimbangan: Pasangan Aksi-Reaksi WAJIB bekerja pada DUA benda yang berbeda! Jika dua gaya bekerja pada satu benda yang sama (seperti $N$ dan $w$ pada buku), itu adalah Kesetimbangan Hukum I Newton!",
        "exampleProblem": "**Soal Konseptual Pasangan Aksi-Reaksi:**\nSeorang atlet bermassa $M = 60\\text{ kg}$ berdiri diam di atas lantai gym. Percepatan gravitasi bumi $g = 10\\text{ m/s}^2$.\n\nTentukan:\na) Berapa besar gaya berat atlet ($w$) dan gaya normal lantai yang menopang kakinya ($N$)?\nb) Tentukan pasangan aksi-reaksi dari masing-masing gaya tersebut secara spesifik (sebutkan benda asal dan benda target)!\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menghitung Gaya Berat dan Gaya Normal (Kesetimbangan Hukum I)**\nKarena atlet berdiri diam di lantai ($a = 0$):\n$$\\sum F_y = 0 \\implies N - mg = 0$$\n$$w = mg = 60 \\times 10 = \\mathbf{600\\text{ Newton (arah ke bawah)}}$$\n$$N = 600\\text{ Newton (arah ke atas)}$$\n\n**Langkah 2: Menentukan Pasangan Aksi-Reaksi yang Tepat**\n1. **Pasangan Gaya Berat ($w = 600\\text{ N}$ ke bawah):**\n   - Asal gaya: Bumi menarik atlet ke bawah.\n   - Pasangan reaksinya: **Atlet menarik pusat massa planet Bumi ke arah atas** dengan gaya gravitasi sebesar $600\\text{ Newton}$.\n2. **Pasangan Gaya Normal Lantai ($N = 600\\text{ N}$ ke atas):**\n   - Asal gaya: Permukaan lantai mendorong telapak kaki atlet ke atas.\n   - Pasangan reaksinya: **Telapak kaki atlet menekan permukaan lantai ke arah bawah** dengan gaya kontak normal sebesar $600\\text{ Newton}$.",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-hukum-newton_2.svg",
          "title": "Hukum III Newton: Aksi-Reaksi & Variasi Gaya Normal Semu pada Lift",
          "caption": "Prinsip dasar pasangan gaya aksi-reaksi pada dua benda berbeda (Panel A) dan variasi nilai gaya normal pada penumpang lift yang sedang diam, dipercepat ke atas, dan dipercepat ke bawah (Panel B).",
          "guide": [
            "Perhatikan Panel A: gaya aksi dan reaksi memiliki besar sama dan arah berlawanan, tetapi TIDAK pernah saling menghilangkan karena bekerja pada dua benda yang berbeda.",
            "Amati Panel B: angka yang terbaca pada timbangan badan di dalam lift sebenarnya adalah gaya normal N (gaya desak kaki pada lantai).",
            "Saat lift dipercepat ke atas, gaya normal meningkat (N = m(g + a)), sehingga tubuh terasa lebih berat tertekan ke lantai."
          ]
        }
      },
      {
        "title": "4. Diagram Benda Bebas (FBD) & Gaya Gesek (Statis vs Kinetis)",
        "concept": "Diagram Benda Bebas (Free Body Diagram / FBD) adalah alat analisis terpenting dalam mekanika: mengisolasi satu benda dan menggambar seluruh gaya luar yang bekerja padanya.\n\n**1. Komponen Gaya-Gaya Mekanik Fundamental:**\n- **Gaya Berat ($w = mg$):** Selalu berawal dari pusat massa dan mengarah vertikal ke pusat bumi.\n- **Gaya Normal ($N$):** Gaya tumpuan tegak lurus bidang kontak.\n  - Di lantai datar horizontal: $N = mg$\n  - Di bidang miring sudut $\\theta$: $N = mg \\cos\\theta$\n  - Di dalam lift yang dipercepat ke atas sebesar $a$: $N = m(g + a)$ (kaki terasa menekan lebih berat!)\n  - Di dalam lift yang dipercepat ke bawah sebesar $a$: $N = m(g - a)$ (badan terasa melayang ringan!)\n\n**2. Mekanisme Gaya Gesekan:**\n- **Gaya Gesek Statis ($f_s \\le \\mu_s N$):** Bekerja saat benda masih diam. Besarnya menyesuaikan gaya dorong luar sampai batas maksimum $f_{s,\\max} = \\mu_s N$.\n- **Gaya Gesek Kinetis ($f_k = \\mu_k N$):** Bekerja saat benda sudah meluncur. Nilainya selalu konstan.",
        "quickTip": "Gaya semu di dalam lift: Bergerak dipercepat ke atas $\\implies N = m(g+a)$ (terasa lebih berat). Bergerak dipercepat ke bawah $\\implies N = m(g-a)$ (terasa lebih ringan). Jika tali lift putus ($a=g$), $N=0$ (melayang bebas)!",
        "exampleProblem": "**Soal Latihan Terbimbing:**\nSeseorang bermassa $m = 50\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift penumpang ($g = 10\\text{ m/s}^2$).\n\nTentukan angka yang terbaca pada skala timbangan (gaya normal $N$) saat:\na) Lift diam atau bergerak dengan kelajuan konstan.\nb) Lift bergerak dipercepat ke atas dengan percepatan $a = 2\\text{ m/s}^2$.\nc) Lift bergerak dipercepat ke bawah dengan percepatan $a = 2\\text{ m/s}^2$.\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Kasus (a) - Lift Diam atau Kelajuan Konstan (Hukum I Newton)**\nKarena kelajuan konstan, maka $a = 0$:\n$$\\sum F_y = 0 \\implies N - mg = 0 \\implies N = mg = 50 \\times 10 = \\mathbf{500\\text{ Newton}}$$\n*(Timbangan membaca bobot normal 50 kg).*\n\n**Langkah 2: Kasus (b) - Lift Dipercepat ke Atas (Hukum II Newton)**\nArah percepatan ke atas ($+$):\n$$\\sum F_y = m \\cdot a \\implies N - mg = ma \\implies N = m(g + a)$$\n$$N = 50 \\times (10 + 2) = 50 \\times 12 = \\mathbf{600\\text{ Newton}}$$\n*(Timbangan membaca lebih berat, setara 60 kg!).*\n\n**Langkah 3: Kasus (c) - Lift Dipercepat ke Bawah (Hukum II Newton)**\nArah percepatan ke bawah:\n$$\\sum F_y = m \\cdot a \\implies mg - N = ma \\implies N = m(g - a)$$\n$$N = 50 \\times (10 - 2) = 50 \\times 8 = \\mathbf{400\\text{ Newton}}$$\n*(Timbangan membaca lebih ringan, setara 40 kg!).*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-hukum-newton_3.svg",
          "title": "Diagram Benda Bebas Bidang Miring & Kurva Karakteristik Gaya Gesek",
          "caption": "Dekomposisi gaya pada balok di bidang miring (Panel A) dan grafik transisi gaya gesek statis menuju gaya gesek kinetis saat gaya dorong melampaui ambang batas maksimum (Panel B).",
          "guide": [
            "Perhatikan Panel A: gaya berat W diuraikan menjadi dua komponen, yaitu W sin θ (sejajar bidang ke bawah) dan W cos θ (menekan bidang ke dalam diimbangi gaya normal N).",
            "Amati Panel B: selama benda belum bergerak, besar gaya gesek statis f_s selalu sama persis dengan gaya dorong luar (grafik linear 45°).",
            "Begitu gaya dorong melampaui f_s,maks, benda langsung bergerak dan gaya gesek turun ke nilai konstan yang lebih kecil (gaya gesek kinetis f_k = μ_k · N)."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-usaha-energi",
    "title": "Fisika Bab 6: Usaha, Energi & Hukum Kekekalan Energi Mekanik",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "icon": "zap",
    "summary": "Pahami energi sebagai mata uang fundamental alam semesta. Buktikan secara matematis mengapa rumus energi kinetik adalah 1/2 mv^2 dari integrasi Hukum II Newton dan GLBB, pelajari asal energi potensial mgh, serta kuasai hukum kekekalan energi mekanik tanpa rumus hafalan buta.",
    "subtopics": [
      {
        "title": "1. Konsep Usaha (Work): Usaha Positif, Negatif, dan Nol",
        "concept": "Dalam percakapan sehari-hari, kata 'usaha' sering diartikan sebagai kerja keras atau upaya mental. Namun dalam sains fisika, **Usaha ($W$, dari kata *Work*)** memiliki definisi mekanik kuantitatif yang sangat ketat:\n*Usaha adalah proses transfer energi yang terjadi ketika suatu gaya menyebabkan perpindahan pada suatu benda sepanjang arah garis kerja gaya tersebut.*\n\n---\n\n**1. Rumus Matematis Usaha:**\nJika sebuah gaya konstan $\\vec{F}$ bekerja pada suatu benda sehingga benda berpindah sejauh $\\vec{s}$, dan gaya tersebut membentuk sudut $\\theta$ terhadap garis lintasan gerak:\n$$W = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos\\theta$$\n- Satuan SI Usaha: **Joule (J)**, di mana $1\\text{ Joule} = 1\\text{ Newton}\\cdot\\text{meter} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$.\n- $F \\cos\\theta$ adalah komponen gaya yang sejajar langsung dengan arah perpindahan benda.\n\n---\n\n**2. Tiga Kategori Usaha Berdasarkan Sudut $\\theta$:**\n- **Usaha Positif ($W > 0$ saat $0^\\circ \\le \\theta < 90^\\circ$):**\n  Gaya memiliki komponen yang searah dengan gerak benda, sehingga gaya tersebut mentransfer energi ke dalam benda (menambah kecepatan/energi kinetik).\n  *Contoh:* Menarik kereta belanja ke depan ($\\cos 0^\\circ = 1 \\implies W = F \\cdot s$).\n- **Usaha Negatif ($W < 0$ saat $90^\\circ < \\theta \\le 180^\\circ$):**\n  Gaya melawan arah gerak benda, sehingga gaya tersebut mengambil/menyerap energi dari benda.\n  *Contoh:* Gaya gesekan aspal yang mengerem laju mobil ($\\theta = 180^\\circ \\implies \\cos 180^\\circ = -1 \\implies W_{\\text{gesek}} = -f_k \\cdot s$).\n- **Usaha Bernilai Nol ($W = 0$):**\n  Terjadi dalam 3 kondisi fisik:\n  1. **Benda tidak berpindah ($s = 0$):** Anda mendorong dinding beton sekuat tenaga hingga berkeringat, tetapi karena dinding tidak bergeser satu milimeter pun, usaha fisika Anda adalah $W = 0$!\n  2. **Gaya tegak lurus perpindahan ($\\theta = 90^\\circ \\implies \\cos 90^\\circ = 0$):** Seorang pelayan memegang nampan bermassa $2\\text{ kg}$ dengan gaya angkat ke atas sambil berjalan mendatar sejauh $10\\text{ meter}$. Usaha gaya angkat tangan terhadap nampan adalah $W = 0$ karena sudut antara gaya ke atas dan jalan mendatar adalah siku-siku ($90^\\circ$).\n  3. **Tidak ada gaya luar yang bekerja ($F = 0$):** Benda meluncur bebas di antariksa berkat inersia Hukum I Newton.",
        "quickTip": "Syarat mutlak agar gaya menghasilkan usaha: gaya WAJIB memiliki komponen yang sejajar dengan arah perpindahan ($F\\cos\\theta$). Jika tegak lurus ($\theta=90^\\circ$), usahanya PASTI NOL!",
        "exampleProblem": "**Soal Latihan Terbimbing:**\nSebuah balok bermassa $m = 10\\text{ kg}$ ditarik di atas lantai mendatar sejauh $s = 5\\text{ meter}$ oleh gaya tarik tali konstan $F = 50\\text{ Newton}$ yang membentuk sudut elevasi $\\theta = 60^\\circ$ terhadap bidang horizontal ($\\cos 60^\\circ = 0{,}5$; $\\sin 60^\\circ = 0{,}866$). Permukaan lantai kasar dan memberikan gaya gesekan kinetis konstan $f_k = 15\\text{ Newton}$. Ambil $g = 10\\text{ m/s}^2$.\n\nTentukan:\na) Usaha yang dilakukan oleh gaya tarik tali ($W_F$).\nb) Usaha yang dilakukan oleh gaya gesekan lantai ($W_{\\text{gesek}}$).\nc) Usaha yang dilakukan oleh gaya berat gravitasi ($W_w$) dan gaya normal lantai ($W_N$).\nd) Usaha total (usaha neto) yang diterima oleh balok ($W_{\\text{total}}$).\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menghitung Usaha oleh Gaya Tarik Tali ($W_F$)**\nGaya tarik membentuk sudut $60^\\circ$ terhadap arah perpindahan horizontal:\n$$W_F = F \\cdot s \\cdot \\cos 60^\\circ = 50\\text{ N} \\times 5\\text{ m} \\times 0{,}5 = \\mathbf{+125\\text{ Joule}}$$\n\n**Langkah 2: Menghitung Usaha oleh Gaya Gesekan ($W_{\\text{gesek}}$)**\nGaya gesek selalu berlawanan arah mutlak terhadap pergeseran benda ($\\theta = 180^\\circ$):\n$$W_{\\text{gesek}} = f_k \\cdot s \\cdot \\cos 180^\\circ = 15\\text{ N} \\times 5\\text{ m} \\times (-1) = \\mathbf{-75\\text{ Joule}}$$\n\n**Langkah 3: Menghitung Usaha oleh Gaya Berat dan Gaya Normal**\nGaya berat ($w = mg$) mengarah ke bawah, dan gaya normal ($N$) mengarah ke atas.\nKedua gaya ini tegak lurus ($90^\\circ$) terhadap lintasan pergeseran balok yang mendatar:\n$$W_w = w \\cdot s \\cdot \\cos 90^\\circ = (10 \\times 10) \\times 5 \\times 0 = \\mathbf{0\\text{ Joule}}$$\n$$W_N = N \\cdot s \\cdot \\cos 90^\\circ = \\mathbf{0\\text{ Joule}}$$\n\n**Langkah 4: Menghitung Usaha Total Neto**\nUsaha total adalah jumlah skalar dari seluruh usaha individual:\n$$W_{\\text{total}} = W_F + W_{\\text{gesek}} + W_w + W_N = 125\\text{ J} + (-75\\text{ J}) + 0 + 0 = \\mathbf{+50\\text{ Joule}}$$\n*Makna Fisis: Balok menerima transfer energi bersih sebesar $+50\\text{ Joule}$, yang akan berubah seluruhnya menjadi pertambahan energi kinetik.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-usaha-energi_0.svg",
          "title": "Konsep Fisis Usaha Mekanik & Interpretasi Luas Grafik F-x",
          "caption": "Tiga klasifikasi usaha berdasarkan sudut antara gaya dan perpindahan (Panel A) beserta perhitungan usaha total melalui luas daerah di bawah kurva grafik F terhadap x (Panel B).",
          "guide": [
            "Perhatikan Panel A: usaha bernilai positif jika gaya searah perpindahan (θ < 90°), nol jika gaya tegak lurus perpindahan (θ = 90°), dan negatif jika gaya melawan gerak (θ > 90°).",
            "Gaya sentripetal pada gerak melingkar dan gaya normal saat mendorong benda horizontal memiliki W = 0 karena selalu tegak lurus lintasan gerak.",
            "Pada grafik gaya terhadap posisi F(x) (Panel B), usaha total dihitung dari luas daerah di atas sumbu-x dikurangi luas daerah di bawah sumbu-x."
          ]
        }
      },
      {
        "title": "2. Energi Kinetik & Teorema Usaha-Energi",
        "concept": "Pernahkah Anda bertanya: *Mengapa rumus energi kinetik adalah $EK = \\frac{1}{2}mv^2$? Mengapa ada angka setengah ($\\frac{1}{2}$), dan mengapa kecepatannya dikuadratkan ($v^2$)?*\n\nBanyak buku fisika menyuruh siswa menghafalnya begitu saja. Di sini kita akan buktikan bahwa rumus ini adalah konsekuensi aljabar murni dari penggabungan **Hukum II Newton** dan **Kinematika GLBB**!\n\n---\n\n**1. Penurunan Rumus Teorema Usaha-Energi Kinetik:**\nBayangkan sebuah balok bermassa $m$ mula-mula bergerak dengan kecepatan awal $v_0$. Gaya konstan neto $\\sum F$ mendorong balok tersebut sepanjang lintasan $s$ sehingga kecepatannya bertambah menjadi $v_t$.\n\n- Berdasarkan definisi usaha:\n  $$W = \\sum F \\cdot s$$\n- Berdasarkan Hukum II Newton: $\\sum F = m \\cdot a$. Substitusikan ke rumus usaha:\n  $$W = (m \\cdot a) \\cdot s = m(a \\cdot s) \\quad \\text{...(Persamaan A)}$$\n- Sekarang tinjau Persamaan ke-3 GLBB:\n  $$v_t^2 = v_0^2 + 2as \\implies 2as = v_t^2 - v_0^2 \\implies a \\cdot s = \\frac{v_t^2 - v_0^2}{2}$$\n- Substitusikan nilai $(a \\cdot s)$ ini ke dalam Persamaan A:\n  $$W = m \\left(\\frac{v_t^2 - v_0^2}{2}\\right) = \\frac{1}{2}m v_t^2 - \\frac{1}{2}m v_0^2$$\n\n**Lahirnya Konsep Energi Kinetik:**\nFisikawan mendefinisikan besaran $\\frac{1}{2}mv^2$ sebagai **Energi Kinetik ($EK$)**, yaitu kapasitas energi yang dimiliki benda berkat gerak kecepatannya.\nMaka kita sampai pada **Teorema Usaha-Energi Kinetik**:\n$$W_{\\text{neto}} = EK_{\\text{akhir}} - EK_{\\text{awal}} = \\Delta EK$$\n*Kesimpulan Luar Biasa:* Usaha total yang dikerjakan pada suatu benda sama persis dengan perubahan energi kinetik benda tersebut!\n\n---\n\n**2. Bahaya Kecepatan yang Dikuadratkan ($v^2$):**\nKarena energi kinetik sebanding dengan kuadrat kecepatan ($EK \\propto v^2$), jika Anda melipatgandakan kecepatan kendaraan menjadi 2 kali lipat ($2v$), energi kinetik mobil menjadi $2^2 = \\mathbf{4\\text{ kali lipat}}$!\nJika kecepatan menjadi 3 kali lipat, energi tabrakan menjadi $3^2 = \\mathbf{9\\text{ kali lipat}}$! Inilah alasan ilmiah mengapa mengebut di jalan raya sangat mematikan.",
        "quickTip": "Teorema Usaha-Energi: $W_{\\text{neto}} = \\Delta EK = \\frac{1}{2}m(v_t^2 - v_0^2)$. Ingat: jika kelajuan naik $2\\times$, energi kinetik melonjak $4\\times$, sehingga jarak pengereman yang dibutuhkan juga naik $4\\times$!",
        "exampleProblem": "**Soal Latihan Terbimbing:**\nSebuah peluru senapan bermassa $m = 20\\text{ gram}$ ($0{,}02\\text{ kg}$) melesat horizontal dengan kelajuan $v_0 = 400\\text{ m/s}$. Peluru tersebut menembus sebuah balok kayu tebal dan keluar dari sisi belakang balok dengan kelajuan yang berkurang drastis menjadi $v_t = 100\\text{ m/s}$. Tebal balok kayu yang ditembus peluru adalah $d = 15\\text{ cm} = 0{,}15\\text{ meter}$.\n\nTentukan:\na) Energi kinetik peluru sebelum menembus kayu ($EK_{\\text{awal}}$).\nb) Energi kinetik peluru setelah menembus keluar balok kayu ($EK_{\\text{akhir}}$).\nc) Usaha yang dilakukan oleh gaya hambat kayu terhadap peluru ($W_{\\text{hambat}}$).\nd) Besar gaya gesek rata-rata yang dikerjakan serat kayu untuk menahan laju peluru ($F_{\\text{kayu}}$).\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menghitung Energi Kinetik Awal dan Akhir**\n- Energi kinetik awal:\n  $$EK_{\\text{awal}} = \\frac{1}{2}m v_0^2 = \\frac{1}{2}(0{,}02\\text{ kg}) \\times (400\\text{ m/s})^2 = 0{,}01 \\times 160000 = \\mathbf{1600\\text{ Joule}}$$\n- Energi kinetik akhir:\n  $$EK_{\\text{akhir}} = \\frac{1}{2}m v_t^2 = \\frac{1}{2}(0{,}02\\text{ kg}) \\times (100\\text{ m/s})^2 = 0{,}01 \\times 10000 = \\mathbf{100\\text{ Joule}}$$\n\n**Langkah 2: Menghitung Usaha Menggunakan Teorema Usaha-Energi**\nBerdasarkan Teorema Usaha-Energi:\n$$W = \\Delta EK = EK_{\\text{akhir}} - EK_{\\text{awal}}$$\n$$W = 100\\text{ J} - 1600\\text{ J} = \\mathbf{-1500\\text{ Joule}}$$\n*(Tanda negatif menunjukkan energi kinetik peluru dirampas oleh gesekan kayu).*\n\n**Langkah 3: Menghitung Gaya Hambat Serat Kayu ($F_{\\text{kayu}}$)**\nGaya hambat kayu melawan arah tembusan peluru ($\\theta = 180^\\circ$):\n$$W = F_{\\text{kayu}} \\cdot d \\cdot \\cos 180^\\circ$$\n$$-1500\\text{ J} = -F_{\\text{kayu}} \\times 0{,}15\\text{ m}$$\n$$F_{\\text{kayu}} = \\frac{1500}{0{,}15} = \\mathbf{10000\\text{ Newton (atau } 10\\text{ kN)}}$$\n*Serat kayu menahan peluru dengan gaya rata-rata sebesar 10.000 Newton.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-usaha-energi_1.svg",
          "title": "Teorema Usaha-Energi Kinetik & Analisis Kuadratik Kelajuan Kendaraan",
          "caption": "Bukti fisis teorema usaha-energi kinetik pada percepatan kendaraan (Panel A) dan kurva non-linear energi kinetik terhadap kelajuan yang menjelaskan bahaya kecepatan tinggi (Panel B).",
          "guide": [
            "Teorema usaha-energi menyatakan bahwa kerja total yang dilakukan pada benda selalu sama persis dengan perubahan energi kinetiknya (W_neto = ΔEK).",
            "Perhatikan Panel B: energi kinetik berbanding lurus dengan kuadrat kelajuan (EK ∝ v²).",
            "Jika kelajuan mobil digandakan 2 kali lipat, energi kinetik dan jarak pengereman yang dibutuhkan melonjak drastis hingga 4 kali lipat!"
          ]
        }
      },
      {
        "title": "3. Energi Potensial Gravitasi, Energi Potensial Pegas & Hukum Kekekalan Energi Mekanik",
        "concept": "Energi tidak dapat diciptakan dan tidak dapat dimusnahkan; energi hanya dapat berubah wujud dari satu bentuk ke bentuk lainnya. Dalam sistem mekanik tanpa disipasi gesekan, energi kinetik dan energi potensial saling bertransformasi secara abadi.\n\n---\n\n**1. Asal Usul Energi Potensial Gravitasi ($EP = mgh$):**\nBerapa usaha yang harus Anda lakukan untuk mengangkat benda bermassa $m$ dari lantai ke ketinggian $h$ secara perlahan dengan kelajuan konstan?\nGaya angkat Anda harus mengimbangi berat benda ($F_{\\text{angkat}} = mg$).\n$$W_{\\text{angkat}} = F_{\\text{angkat}} \\cdot h = (mg) \\cdot h = mgh$$\nUsaha yang Anda kerjakan tidak hilang, melainkan **tersimpan sebagai energi potensial gravitasi ($EP$)** di dalam medan gravitasi bumi:\n$$EP = mgh$$\n\n---\n\n**2. Energi Potensial Elastisitas Pegas ($EP_{\\text{pegas}} = \\frac{1}{2}kx^2$):**\nBerdasarkan Hukum Hooke, gaya pulih pegas sebanding dengan pertambahan panjangnya: $F = kx$.\nKarena gaya pegas berubah-ubah (tidak konstan dari $0$ hingga $kx$), gaya rata-ratanya adalah $\\bar{F} = \\frac{0 + kx}{2} = \\frac{1}{2}kx$.\nUsaha untuk meregangkan pegas sejauh $x$:\n$$W = \\bar{F} \\cdot x = \\left(\\frac{1}{2}kx\\right) \\cdot x = \\frac{1}{2}kx^2$$\nMaka energi yang tersimpan dalam pegas teregang adalah:\n$$EP_{\\text{pegas}} = \\frac{1}{2}kx^2$$\n\n---\n\n**3. Hukum Kekekalan Energi Mekanik ($EM$):**\nEnergi Mekanik adalah jumlahan energi gerak (kinetik) dan energi posisi (potensial):\n$$EM = EK + EP$$\nJika pada sistem **hanya bekerja gaya-gaya konservatif** (seperti gravitasi dan gaya pegas) dan tidak ada gaya gesekan/disipasi:\n$$EM_1 = EM_2 \\implies EK_1 + EP_1 = EK_2 + EP_2$$\n$$\\frac{1}{2}m v_1^2 + mgh_1 = \\frac{1}{2}m v_2^2 + mgh_2$$\n*Jika ada gaya gesekan ($W_{\\text{gesek}} = -f_k s$):*\n$$EM_1 + W_{\\text{gesek}} = EM_2 \\implies EM_1 - f_k s = EM_2$$",
        "quickTip": "Kekekalan Energi Mekanik: Pada titik tertinggi, seluruh energi adalah Potensial ($EM = mgh_{\\max}$). Pada dasar lantai, seluruh energi berubah menjadi Kinetik ($EM = \\frac{1}{2}mv_{\\max}^2$). Menghasilkan rumus jatuh bebas $v = \\sqrt{2gh}$ tanpa melibatkan waktu!",
        "exampleProblem": "**Soal Lintasan Roller Coaster Terbimbing:**\nSebuah kereta luncur mini bermassa $m = 200\\text{ kg}$ dilepas dari keadaan diam di puncak bukit lintasan roller coaster licin tanpa gesekan pada ketinggian $h_A = 20\\text{ meter}$. Kereta kemudian meluncur turun menuruni lembah di dasar tanah ($h_B = 0$) lalu naik kembali ke bukit kedua yang memiliki ketinggian $h_C = 15\\text{ meter}$ ($g = 10\\text{ m/s}^2$).\n\nTentukan:\na) Energi mekanik total sistem kereta di titik puncak bukit A.\nb) Kelajuan kereta saat melesat di lembah dasar tanah (titik B).\nc) Kelajuan kereta saat melintasi puncak bukit kedua (titik C).\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menghitung Energi Mekanik di Titik A ($EM_A$)**\nDi titik A kereta dilepaskan dari keadaan diam, maka kecepatan awal $v_A = 0 \\implies EK_A = 0$.\n$$EP_A = m g h_A = 200\\text{ kg} \\times 10\\text{ m/s}^2 \\times 20\\text{ m} = \\mathbf{40000\\text{ Joule}}$$\n$$EM_A = EK_A + EP_A = 0 + 40000 = \\mathbf{40000\\text{ Joule}}$$\n\n**Langkah 2: Menghitung Kelajuan di Lembah Titik B ($v_B$)**\nKarena lintasan licin sempurna tanpa gesekan, berlaku Hukum Kekekalan Energi Mekanik:\n$$EM_B = EM_A = 40000\\text{ Joule}$$\nDi dasar lembah ($h_B = 0$), maka energi potensial nol ($EP_B = 0$):\n$$EK_B + EP_B = 40000$$\n$$\\frac{1}{2}m v_B^2 + 0 = 40000$$\n$$\\frac{1}{2}(200) v_B^2 = 40000 \\implies 100 v_B^2 = 40000$$\n$$v_B^2 = \\frac{40000}{100} = 400 \\implies v_B = \\sqrt{400} = \\mathbf{20\\text{ m/s}}$$\n*(Verifikasi rumus cepat: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\text{ m/s}$).*\n\n**Langkah 3: Menghitung Kelajuan di Bukit Kedua Titik C ($v_C$)**\nDi titik C pada ketinggian $h_C = 15\\text{ meter}$:\n$$EP_C = m g h_C = 200 \\times 10 \\times 15 = 30000\\text{ Joule}$$\nBerdasarkan kekekalan energi mekanik:\n$$EK_C + EP_C = EM_A$$\n$$\\frac{1}{2}(200) v_C^2 + 30000 = 40000$$\n$$100 v_C^2 = 40000 - 30000 = 10000$$\n$$v_C^2 = \\frac{10000}{100} = 100 \\implies v_C = \\sqrt{100} = \\mathbf{10\\text{ m/s}}$$\n*Kelajuan kereta di puncak bukit kedua berkurang menjadi $10\\text{ m/s}$ karena $30.000\\text{ J}$ energi dikonversi kembali menjadi energi potensial.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-usaha-energi_2.svg",
          "title": "Hukum Kekekalan Energi Mekanik & Energi Potensial Pegas Hooke",
          "caption": "Transformasi bolak-balik energi potensial gravitasi dan energi kinetik pada lintasan roller coaster (Panel A) beserta formulasi energi potensial pegas dari luas grafik F-x Hooke (Panel B).",
          "guide": [
            "Pada sistem konservatif tanpa gesekan (Panel A), energi mekanik total selalu kekal konstan di setiap titik (EM = EP + EK).",
            "Saat benda meluncur turun, energi potensial diubah menjadi energi kinetik; kelajuan maksimum tercapai di titik terendah (v = √(2gh)).",
            "Energi potensial pegas (Panel B) bernilai kuadratik terhadap regangan x (EP = 1/2 k x²), sama dengan luas segitiga di bawah grafik gaya Hooke."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-momentum-impuls",
    "title": "Fisika Bab 7: Momentum, Impuls & Hukum Kekekalan Momentum Linear",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "icon": "shield",
    "summary": "Kuasai konsep momentum sebagai ukuran kesukaran menghentikan benda bergerak. Buktikan teorema impuls-momentum langsung dari Hukum II Newton, buktikan hukum kekekalan momentum dari pasangan aksi-reaksi Hukum III Newton, dan bedah tuntas jenis tumbukan lenting hingga tidak lenting sama sekali.",
    "subtopics": [
      {
        "title": "1. Konsep Fisis Momentum Linear & Impuls",
        "concept": "Mengapa sebuah peluru senapan yang massanya hanya 10 gram mampu menembus plat baja tebal, sedangkan sebuah mobil seberat 2 ton yang meluncur lambat $1\\text{ km/jam}$ dapat meremukkan dinding gerbang garasi?\n\nJawabannya terletak pada besaran fisis yang memadukan massa dan kecepatan secara serentak, yang dinamakan **Momentum Linear ($\\vec{p}$)**.\n\n---\n\n**1. Definisi Matematis Momentum Linear:**\nMomentum linear adalah ukuran tingkat kesukaran untuk menghentikan benda yang sedang bergerak:\n$$\\vec{p} = m \\cdot \\vec{v}$$\n- Merupakan **besaran vektor**: arah momentum selalu searah mutlak dengan arah vektor kecepatan benda.\n- Satuan SI: $\\text{kg}\\cdot\\text{m/s}$.\n\n---\n\n**2. Definisi Impuls ($\\vec{I}$) & Penurunan Teorema Impuls-Momentum:**\nImpuls adalah besarnya gaya luar yang bekerja pada suatu benda selama selang waktu kontak yang sangat singkat:\n$$\\vec{I} = \\vec{F} \\cdot \\Delta t$$\n- Satuan SI: $\\text{N}\\cdot\\text{s}$ (setara dengan $\\text{kg}\\cdot\\text{m/s}$).\n\n**Dari Mana Asal Teorema Impuls-Momentum? (Penurunan dari Hukum II Newton):**\nNewton sebenarnya menuliskan Hukum II aslinya dalam bentuk laju perubahan momentum terhadap waktu:\n$$\\vec{F} = m \\cdot \\vec{a} = m \\left(\\frac{\\vec{v}_t - \\vec{v}_0}{\\Delta t}\\right)$$\nKalikan kedua ruas dengan $\\Delta t$:\n$$\\vec{F} \\cdot \\Delta t = m \\vec{v}_t - m \\vec{v}_0$$\nKarena $\\vec{F} \\cdot \\Delta t = \\vec{I}$, dan $m \\vec{v}_t - m \\vec{v}_0 = \\vec{p}_t - \\vec{p}_0 = \\Delta \\vec{p}$, maka terbukti secara murni:\n$$\\vec{I} = \\Delta \\vec{p}$$\n*Teorema Impuls-Momentum:* Impuls yang diberikan pada suatu benda sama persis dengan perubahan momentum yang dialami benda tersebut!\n\n---\n\n**3. Aplikasi Rekayasa: Menyelamatkan Nyawa dengan Memperpanjang Waktu Sentuh ($\\Delta t$):**\nPerhatikan rumus gaya benturan yang ditata ulang:\n$$F = \\frac{\\Delta p}{\\Delta t}$$\nUntuk perubahan momentum $\\Delta p$ yang sama (misal dari kecepatan $80\\text{ km/jam}$ menjadi berhenti $0\\text{ km/jam}$ saat tabrakan):\n- Jika waktu kontak sangat singkat ($\\Delta t$ kecil, misal membentur setir keras dalam $0{,}01\\text{ detik}$), gaya benturan $F$ melonjak luar biasa dahsyat hingga mematikan.\n- **Airbag mobil dan matras busa atlet lompat tinggi:** Diciptakan khusus untuk memperpanjang selang waktu kontak $\\Delta t$ menjadi lebih lama ($0{,}1$ hingga $0{,}5\\text{ detik}$), sehingga gaya hentakan destruktif $F$ yang diterima tubuh mengecil secara drastis!",
        "quickTip": "Teorema Impuls-Momentum: $I = F\\Delta t = \\Delta p = m(v_t - v_0)$. Untuk memperkecil gaya benturan yang merusak, perpanjang waktu kontak $\\Delta t$ (prinsip kerja airbag, helm, dan sarung tinju)!",
        "exampleProblem": "**Soal Tendangan Bola Sepak Terbimbing:**\nSebuah bola sepak bermassa $m = 0{,}5\\text{ kg}$ menggelinding di lapangan ke arah barat dengan kelajuan $v_0 = 10\\text{ m/s}$. Seorang pemain menendang keras bola tersebut berlawanan arah sehingga bola melesat berbalik ke arah timur dengan kelajuan $v_t = 30\\text{ m/s}$. Waktu kontak antara sepatu pemain dan bola terukur sangat singkat selama $\\Delta t = 0{,}02\\text{ sekon}$.\n\nTentukan:\na) Momentum awal bola sebelum ditendang.\nb) Momentum akhir bola setelah ditendang.\nc) Besar dan arah perubahan momentum (impuls yang diterima bola).\nd) Gaya rata-rata yang dikerjakan sepatu pemain pada bola.\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menetapkan Tanda Arah Vektor (Sumbu Koordinat)**\nTetapkan arah timur sebagai sumbu positif ($+$) dan arah barat sebagai sumbu negatif ($-$).\n- Kecepatan awal (ke barat): $v_0 = -10\\text{ m/s}$.\n- Kecepatan akhir (ke timur): $v_t = +30\\text{ m/s}$.\n\n**Langkah 2: Menghitung Momentum Awal dan Akhir**\n- Momentum awal:\n  $$p_0 = m v_0 = 0{,}5\\text{ kg} \\times (-10\\text{ m/s}) = \\mathbf{-5\\text{ kg}\\cdot\\text{m/s (ke arah barat)}}$$\n- Momentum akhir:\n  $$p_t = m v_t = 0{,}5\\text{ kg} \\times (+30\\text{ m/s}) = \\mathbf{+15\\text{ kg}\\cdot\\text{m/s (ke arah timur)}}$$\n\n**Langkah 3: Menghitung Impuls dari Teorema Perubahan Momentum**\n$$I = \\Delta p = p_t - p_0 = (+15) - (-5) = 15 + 5 = \\mathbf{+20\\text{ N}\\cdot\\text{s (ke arah timur)}}$$\n*Peringatan Miskonsepsi: Jangan mengurangkan $30 - 10 = 20$, melainkan perhatikan tanda vektor: selisih arah berlawanan adalah $30 - (-10) = 40\\text{ m/s}$!*\n\n**Langkah 4: Menghitung Gaya Tendangan Rata-Rata**\n$$I = F \\cdot \\Delta t \\implies F = \\frac{I}{\\Delta t} = \\frac{20\\text{ N}\\cdot\\text{s}}{0{,}02\\text{ s}} = \\mathbf{+1000\\text{ Newton (ke arah timur)}}$$\n*Sepatu pemain menghantam bola dengan gaya rata-rata sebesar 1.000 Newton ke arah timur.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-momentum-impuls_0.svg",
          "title": "Konsep Momentum Linear & Teorema Impuls Pengaman Airbag",
          "caption": "Definisi besaran momentum sebagai perkalian massa dan kecepatan (Panel A) serta kurva fisika gaya benturan terhadap waktu yang membuktikan keselamatan airbag (Panel B).",
          "guide": [
            "Momentum (p = m · v) menyatakan ukuran kesulitan untuk menghentikan suatu benda yang sedang bergerak.",
            "Teorema impuls-momentum menyatakan bahwa perubahan momentum sama dengan luas impuls gaya benturan (I = F · Δt = Δp).",
            "Prinsip kerja sabuk pengaman dan airbag (Panel B) adalah memperpanjang waktu kontak benturan Δt sehingga gaya benturan puncak F turun drastis ke batas aman tubuh manusia."
          ]
        }
      },
      {
        "title": "2. Hukum Kekekalan Momentum Linear & Tumbukan",
        "concept": "Mengapa momentum total alam semesta selalu kekal saat terjadi tabrakan antar-benda?\nHukum ini BUKAN postulat berdiri sendiri yang dibuat sembarangan, melainkan **konsekuensi matematis langsung dari Hukum III Newton (Aksi-Reaksi)**!\n\n---\n\n**1. Penurunan Hukum Kekekalan Momentum dari Hukum III Newton:**\nMisalkan dua bola bermassa $m_1$ dan $m_2$ bertumbukan. Selama selang waktu kontak yang sangat singkat $\\Delta t$:\n- Bola 1 memberikan gaya aksi $F_{12}$ pada bola 2.\n- Berdasarkan Hukum III Newton, bola 2 seketika membalas dengan gaya reaksi $F_{21}$ yang sama besar dan berlawanan arah pada bola 1:\n  $$\\vec{F}_{12} = -\\vec{F}_{21}$$\n- Kalikan kedua ruas dengan selang waktu kontak $\\Delta t$:\n  $$\\vec{F}_{12} \\Delta t = -\\vec{F}_{21} \\Delta t$$\n- Berdasarkan teorema impuls-momentum ($F \\Delta t = \\Delta p$):\n  $$\\Delta \\vec{p}_2 = -\\Delta \\vec{p}_1 \\implies \\Delta \\vec{p}_1 + \\Delta \\vec{p}_2 = 0$$\n- Uraikan perubahan momentum ($\\vec{p}' - \\vec{p}$):\n  $$(m_1 v_1' - m_1 v_1) + (m_2 v_2' - m_2 v_2) = 0$$\n  $$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$\n  $$p_{\\text{total sebelum}} = p_{\\text{total setelah}}$$\nTerbukti secara mutlak: Momentum linear total sistem tertutup selalu konstan dan tidak pernah berubah!\n\n---\n\n**2. Koefisien Restitusi ($e$) & Klasifikasi Tumbukan:**\nKoefisien restitusi ($e$) mengukur tingkat kelentingan elastisitas tumbukan:\n$$e = -\\frac{v_2' - v_1'}{v_2 - v_1} = \\frac{v_1' - v_2'}{v_2 - v_1} \\quad (0 \\le e \\le 1)$$\n\n- **1. Tumbukan Lenting Sempurna ($e = 1$):**\n  - Berlaku Kekekalan Momentum Linear.\n  - Berlaku Kekekalan Energi Kinetik ($EK_{\\text{tot awal}} = EK_{\\text{tot akhir}}$). Tidak ada energi yang terbuang menjadi panas atau bunyi.\n- **2. Tumbukan Lenting Sebagian ($0 < e < 1$):**\n  - Berlaku Kekekalan Momentum Linear.\n  - Energi kinetik berkurang ($\\Delta EK < 0$), sebagian energi berubah menjadi kalor dan suara deformasi.\n- **3. Tumbukan Tidak Lenting Sama Sekali ($e = 0$):**\n  - Kedua benda **MENEMPEL MENJADI SATU** dan bergerak bersama dengan kecepatan akhir yang sama ($v_1' = v_2' = v'$).\n  - Persamaan gerak:\n    $$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v' \\implies v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$\n  - Terjadi kehilangan energi kinetik paling maksimal!",
        "quickTip": "Pada tumbukan tidak lenting sama sekali ($e=0$), benda menempel bersama: $v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$. Selalu perhatikan tanda arah kecepatan: jika berlawanan arah, salah satunya WAJIB diberi tanda negatif!",
        "exampleProblem": "**Soal Latihan Terbimbing Dua Jenis Tumbukan:**\nGerbong kereta api $A$ bermassa $m_A = 12000\\text{ kg}$ bergerak di atas rel lurus mendatar dengan kelajuan $v_A = 5\\text{ m/s}$. Gerbong $A$ menabrak gerbong $B$ bermassa $m_B = 8000\\text{ kg}$ yang sedang berhenti diam ($v_B = 0$) di atas rel yang sama.\n\nTentukan:\na) Jika kedua gerbong otomatis terkunci dan menempel menjadi satu setelah tabrakan (tumbukan tidak lenting sama sekali, $e = 0$), berapakah kelajuan bersama kedua gerbong setelah tabrakan ($v'$)?\nb) Berapakah energi kinetik yang hilang dan berubah menjadi panas/deformasi logam akibat benturan tersebut?\n\n---\n\n**Pembahasan Langkah demi Langkah:**\n\n**Langkah 1: Menghitung Kelajuan Bersama ($v'$) Menggunakan Hukum Kekekalan Momentum**\nBerdasarkan hukum kekekalan momentum untuk tumbukan menempel ($e = 0$):\n$$m_A v_A + m_B v_B = (m_A + m_B) v'$$\nSubstitusi nilai:\n$$(12000 \\times 5) + (8000 \\times 0) = (12000 + 8000) v'$$\n$$60000 + 0 = 20000 v'$$\n$$v' = \\frac{60000}{20000} = \\mathbf{3\\text{ m/s}}$$\n*Kedua gerbong bergerak bersama ke depan dengan kelajuan $3\\text{ m/s}$.*\n\n**Langkah 2: Menghitung Energi Kinetik Sebelum Tabrakan ($EK_{\\text{awal}}$)**\n$$EK_{\\text{awal}} = \\frac{1}{2}m_A v_A^2 + \\frac{1}{2}m_B v_B^2 = \\frac{1}{2}(12000)(5^2) + 0 = 6000 \\times 25 = \\mathbf{150000\\text{ Joule}}$$\n\n**Langkah 3: Menghitung Energi Kinetik Setelah Tabrakan ($EK_{\\text{akhir}}$)**\nKedua gerbong bergerak bersama dengan massa total $20.000\\text{ kg}$ dan kelajuan $3\\text{ m/s}$:\n$$EK_{\\text{akhir}} = \\frac{1}{2}(m_A + m_B) (v')^2 = \\frac{1}{2}(20000)(3^2) = 10000 \\times 9 = \\mathbf{90000\\text{ Joule}}$$\n\n**Langkah 4: Menghitung Energi Kinetik yang Hilang ($\\Delta EK_{\\text{hilang}}$)**\n$$\\Delta EK_{\\text{hilang}} = EK_{\\text{awal}} - EK_{\\text{akhir}} = 150000\\text{ J} - 90000\\text{ J} = \\mathbf{60000\\text{ Joule (atau } 60\\text{ kJ)}}$$\n*Energi mekanik sebesar $60\\text{ kJ}$ terbuang menjadi panas gesekan dan deformasi dentuman baja.*",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-momentum-impuls_1.svg",
          "title": "Hukum Kekekalan Momentum Linear & Tiga Jenis Tumbukan",
          "caption": "Interaksi dua benda yang bertumbukan dalam satu dimensi dengan momentum total kekal (Panel A) dan karakteristik fisis tiga jenis tumbukan berdasarkan koefisien restitusi (Panel B).",
          "guide": [
            "Hukum kekekalan momentum linear berlaku mutlak pada SEMUA jenis tumbukan selama tidak ada gaya luar yang bekerja pada sistem (Σp_awal = Σp_akhir).",
            "Hanya pada tumbukan lenting sempurna (e = 1), energi kinetik total benda sebelum dan sesudah tumbukan bernilai sama persis.",
            "Pada tumbukan tidak lenting sama sekali (e = 0), kedua benda bersatu menempel setelah bertumbukan dan bergerak bersama dengan kecepatan yang sama."
          ]
        }
      }
    ]
  },
  {
    "id": "k10-fisika-gravitasi",
    "number": "08",
    "badge": "Fisika • Fase E SMA",
    "subject": "Fisika",
    "title": "Fisika Bab 8: Hukum Gravitasi Universal Newton & Hukum Kepler",
    "icon": "globe",
    "summary": "Memahami gravitasi yang mengikat benda-benda langit: hukum gravitasi universal Newton, medan gravitasi dan percepatan gravitasi pada ketinggian orbit satelit, kecepatan lepas roket (escape velocity), serta tiga hukum empiris Johannes Kepler tentang peredaran planet.",
    "subtopics": [
      {
        "title": "1. Hukum Gravitasi Universal Newton & Kuat Medan Gravitasi",
        "concept": "Newton menyadari bahwa gaya tarik yang menjatuhkan apel dari pohon adalah gaya tarik yang persis sama yang menahan Bulan agar tetap mengorbit mengelilingi Bumi.\n\n**Hukum Gravitasi Universal:**\n*Setiap partikel bermassa di alam semesta menarik partikel lainnya dengan gaya yang berbanding lurus dengan hasil kali kedua massa, dan berbanding terbalik dengan kuadrat jarak pisah antara kedua pusat massa.*\n$$F = G \\frac{m_1 m_2}{r^2}$$\n- $G$ = Konstanta Gravitasi Universal Cavendish:\n  $$G = 6{,}674 \\times 10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$$\n- $r$ = Jarak pisah yang diukur dari **PUSAT MASSA** benda pertama ke pusat massa benda kedua.\n\n**Kuat Medan Gravitasi / Percepatan Gravitasi ($g$):**\nBesar gaya gravitasi per satuan massa uji:\n$$g = \\frac{F}{m} = G \\frac{M}{r^2}$$\nDi permukaan Bumi dengan jari-jari $R$ dan massa bumi $M$:\n$$g_0 = G \\frac{M}{R^2} \\approx 9{,}8\\text{ m/s}^2$$\nPada ketinggian $h$ di atas permukaan Bumi (jarak dari pusat bumi $r = R + h$):\n$$g_h = G \\frac{M}{(R + h)^2} \\implies g_h = g_0 \\left(\\frac{R}{R + h}\\right)^2$$",
        "quickTip": "💡 **Trik Rasio Kuadrat Terbalik:**\nJika astronot berada pada ketinggian $h = R$ (jarak dari pusat bumi menjadi $2R$), percepatan gravitasinya turun menjadi $\\frac{1}{2^2} = \\frac{1}{4}$ kali semula! Jika ketinggian $h = 2R$ (jarak $3R$), gravitasi turun menjadi $\\frac{1}{3^2} = \\frac{1}{9}$ kali semula!",
        "exampleProblem": "**Soal Berat Astronot di Ketinggian:**\nSeorang astronot memiliki berat $w_0 = 720\\text{ N}$ saat ditimbang di permukaan Bumi. Berapakah berat astronot tersebut saat berada di dalam stasiun luar angkasa yang mengorbit pada ketinggian $h = R$ di atas permukaan Bumi? ($R$ = jari-jari Bumi).\n\n**Langkah Pembahasan:**\n1. **Analisis Jarak dari Pusat Bumi:**\n   - Di permukaan bumi: $r_1 = R$.\n   - Di orbit: $r_2 = R + h = R + R = 2R$.\n2. **Gunakan Perbandingan Kuadrat Terbalik:**\n   $$\\frac{w_h}{w_0} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{R}{2R}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\n3. **Hitung Berat di Orbit:**\n   $$w_h = \\frac{1}{4} w_0 = \\frac{1}{4} \\times 720 = \\mathbf{180\\text{ Newton}}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gravitasi_0.svg",
          "title": "Hukum Gravitasi Universal Newton & Profil Medan Gravitasi Bumi",
          "caption": "Gaya tarik gravitasi timbal-balik antar massa menurut Newton (Panel A) dan kurva variasi kuat medan gravitasi dari pusat bumi hingga ruang angkasa (Panel B).",
          "guide": [
            "Gaya gravitasi bekerja secara timbal balik sebagai pasangan aksi-reaksi: besar gaya tarik bumi pada bulan persis sama dengan gaya tarik bulan pada bumi.",
            "Di dalam perut bumi (Panel B), kuat medan gravitasi naik secara linear seiring bertambahnya jari-jari (g ∝ r).",
            "Di luar permukaan bumi, kuat medan gravitasi berkurang sangat cepat mengikuti hukum kuadrat terbalik (g ∝ 1/r²); pada ketinggian satu jari-jari bumi, gravitasi turun menjadi 1/4 semula."
          ]
        }
      },
      {
        "title": "2. Tiga Hukum Kepler tentang Gerak Planet & Kecepatan Orbit Satelit",
        "concept": "Berdasarkan data observasi astronomi Tycho Brahe yang luar biasa teliti, Johannes Kepler merumuskan tiga hukum empiris pergerakan planet mengitari Matahari:\n\n**Tiga Hukum Kepler:**\n1. **Hukum I Kepler (Bentuk Lintasan Elips):**\n   *Semua planet bergerak dalam lintasan elips mengitari Matahari, dengan Matahari berada di salah satu titik fokusnya.*\n   - Titik terdekat ke Matahari: **Perihelium** (planet bergerak paling cepat).\n   - Titik terjauh dari Matahari: **Aphelium** (planet bergerak paling lambat).\n2. **Hukum II Kepler (Kekekalan Luas Sektor):**\n   *Garis khayal yang menghubungkan Matahari ke planet menyapu luas daerah yang sama dalam selang waktu yang sama.*\n   Hal ini merupakan konsekuensi langsung dari Hukum Kekekalan Momentum Sudut ($L = m v r = \\text{konstan}$).\n3. **Hukum III Kepler (Keharmonisan Periode dan Jarak):**\n   *Kuadrat periode revolusi suatu planet mengitari Matahari sebanding dengan pangkat tiga jarak rata-ratanya dari Matahari.*\n   $$\\frac{T_1^2}{R_1^3} = \\frac{T_2^2}{R_2^3} = \\frac{4\\pi^2}{G M}$$\n\n**Kecepatan Orbit Satelit ($v_{\\text{orbit}}$):**\nGaya gravitasi bertindak sebagai gaya sentripetal:\n$$G \\frac{M m}{r^2} = \\frac{m v^2}{r} \\implies v_{\\text{orbit}} = \\sqrt{\\frac{GM}{r}} = \\sqrt{g r}$$",
        "quickTip": "🪐 **Trik Rasio Hukum Kepler III:**\nJika jarak planet B dari Matahari adalah 4 kali jarak Bumi ($R_B = 4 R_E$), maka periode orbitnya: $$T_B^2 = T_E^2 \\times 4^3 = 64 \\implies T_B = \\sqrt{64} = 8\\text{ tahun}$$!",
        "exampleProblem": "**Soal Hukum Kepler III:**\nJarak rata-rata planet Mars ke Matahari diperkirakan sebesar $1{,}52\\text{ Satuan Astronomi (SA)}$, di mana $1\\text{ SA}$ adalah jarak Bumi ke Matahari dengan periode revolusi Bumi $T_{\\text{Bumi}} = 1\\text{ tahun}$. Berapakah periode revolusi planet Mars mengitari Matahari?\n\n**Langkah Pembahasan:**\n1. **Terapkan Hukum III Kepler:**\n   $$\\left(\\frac{T_{\\text{Mars}}}{T_{\\text{Bumi}}}\\right)^2 = \\left(\\frac{R_{\\text{Mars}}}{R_{\\text{Bumi}}}\\right)^3$$\n2. **Substitusi Nilai:**\n   $$T_{\\text{Mars}}^2 = (1)^2 \\times (1{,}52)^3 \\approx 3{,}512$$\n   $$T_{\\text{Mars}} = \\sqrt{3{,}512} \\approx \\mathbf{1{,}87\\text{ tahun}} \\approx 687\\text{ hari}$$",
        "visual": {
          "image": "assets/materi/fisika_k10_k12/k10-fisika-gravitasi_1.svg",
          "title": "Tiga Hukum Kepler & Kelajuan Orbit Satelit Mengelilingi Bumi",
          "caption": "Orbit elips planet dengan kecepatan maksimum di perihelium menurut Hukum Kepler (Panel A) dan kurva hubungan kelajuan satelit terhadap jarak orbit stabil (Panel B).",
          "guide": [
            "Hukum I menyatakan orbit planet berbentuk elips dengan matahari berada di salah satu titik fokusnya.",
            "Hukum II menyatakan garis khayal penghubung matahari-planet menyapu luas yang sama dalam selang waktu yang sama (planet melesat paling cepat di perihelium dan paling lambat di aphelium).",
            "Kelajuan orbit satelit stabil (Panel B) berbanding terbalik dengan akar jari-jari orbit (v = √(GM/r)); satelit orbit rendah bergerak jauh lebih cepat daripada satelit geostasioner."
          ]
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.KURMER_KELAS10_DATA = KURMER_KELAS10_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KURMER_KELAS10_DATA;
}
