/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 10 (FASE E)
 * Modul Lengkap 8 Bab: Teori Terstruktur, Trik Kilat & Pembahasan Bertahap
 */

window.KURMER_KELAS10_DATA = [
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
        "exampleProblem": "**Soal:** Suatu populasi bakteri awalnya berjumlah 500 sel. Bakteri tersebut membelah diri menjadi 2 setiap 15 menit. Berapakah jumlah populasi bakteri setelah 2 jam?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $N_0 = 500$, faktor perbanyakan $a = 2$, periode $T = 15 \\text{ menit}$.\n2. **Hitung Banyak Periode ($t$):**\n   $2 \\text{ jam} = 120 \\text{ menit}$.\n   $$n = \\frac{120}{15} = 8 \\text{ periode pembelahan}$$\n3. **Hitung Populasi Akhir:**\n   $$N(8) = 500 \\times 2^8 = 500 \\times 256 = 128.000 \\text{ sel}$$\n\n**Jawaban:** Jumlah bakteri setelah 2 jam adalah 128.000 sel."
      },
      {
        "title": "2. Logaritma & Sifat Operasi Sakti",
        "concept": "Logaritma adalah invers (kebalikan) dari eksponensial:\n$${}^a\\log b = c \\iff a^c = b, \\quad a > 0, a \\ne 1, b > 0$$\n\n**Sifat-sifat Penting Logaritma:**\n1. ${}^a\\log(b \\cdot c) = ^a\\log b + ^a\\log c$\n2. ${}^a\\log\\left(\\frac{b}{c}\\right) = ^a\\log b - ^a\\log c$\n3. ${}^a\\log b^n = n \\cdot ^a\\log b$\n4. $^{a^m}\\log b^n = \\frac{n}{m} \\cdot ^a\\log b$\n5. **Pergantian Basis:** ${}^a\\log b = \\frac{^c\\log b}{^c\\log a} = \\frac{1}{^b\\log a}$\n6. **Sifat Berantai:** ${}^a\\log b \\cdot ^b\\log c \\cdot ^c\\log d = ^a\\log d$\n7. $a^{^a\\log b} = b$",
        "quickTip": "⚡ **Trik Rantai Domino:** Perhatikan sifat ${}^a\\log b \\cdot ^b\\log c = ^a\\log c$. Basis dan numerus yang bersebelahan bagaikan kartu domino yang saling membatalkan!",
        "exampleProblem": "**Soal:** Hitunglah nilai dari ${}^2\\log 48 + ^2\\log \\sqrt{1/16} - ^2\\log 3$!\n\n**Langkah Pembahasan:**\n1. **Sederhanakan Nilai yang Mudah Terlebih Dahulu:**\n   $$\\sqrt{1/16} = \\frac{1}{4} = 2^{-2} \\implies {}^2\\log(2^{-2}) = -2$$\n2. **Gabungkan Logaritma yang Tersisa dengan Sifat Pembagian:**\n   $$^2\\log 48 - ^2\\log 3 = ^2\\log\\left(\\frac{48}{3}\\right) = ^2\\log 16 = ^2\\log 2^4 = 4$$\n3. **Jumlahkan Seluruh Hasil:**\n   $$4 + (-2) = 2$$\n\n**Hasil Akhir:** $2$."
      }
    ]
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
        "exampleProblem": "**Soal:** Suatu barisan geometri memiliki suku ke-2 bernilai 6 dan suku ke-5 bernilai 162. Tentukan rasio dan jumlah 6 suku pertama barisan tersebut!\n\n**Langkah Pembahasan:**\n1. **Cari Nilai Rasio ($r$):**\n   $$\\frac{U_5}{U_2} = \\frac{a r^4}{a r^1} = r^3 \\implies \\frac{162}{6} = 27 \\implies r = \\sqrt[3]{27} = 3$$\n2. **Cari Suku Pertama ($a$):**\n   $$U_2 = a \\cdot 3 = 6 \\implies a = 2$$\n3. **Hitung Jumlah 6 Suku Pertama ($S_6$):**\n   $$S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 728$$\n\n**Jawaban:** Rasio $r = 3$ dan $S_6 = 728$."
      },
      {
        "title": "2. Deret Geometri Tak Hingga & Lintasan Pantulan Bola",
        "concept": "Deret geometri tak hingga $a + ar + ar^2 + \\dots$ dikatakan **konvergen** (memiliki nilai batas pasti) jika dan hanya jika rasio memenuhi syaraf kelayakan: $|r| < 1$ (yaitu $-1 < r < 1$).\n\n**Rumus Deret Geometri Tak Hingga Konvergen:**\n$$S_\\infty = \\frac{a}{1 - r}$$\n\n**Kasus Khusus Pantulan Bola yang Dijatuhkan dari Ketinggian $h$:**\nJika bola memantul kembali dengan rasio $r = \\frac{p}{q}$, maka total panjang lintasan bola sampai berhenti adalah:\n$$S_{\\text{lintasan}} = h \\cdot \\left(\\frac{q + p}{q - p}\\right)$$",
        "quickTip": "⚡ **Rumus Sakti Bola Memantul:** Untuk bola dijatuhkan dari tinggi $h$ dengan pantulan $\\frac{p}{q}$, langsung gunakan trik: 'Tinggi dikali (bawah + atas) dibagi (bawah - atas)'!",
        "exampleProblem": "**Soal:** Sebuah bola dijatuhkan dari ketinggian 12 meter dan memantul kembali dengan ketinggian $\\frac{3}{4}$ dari tinggi sebelumnya. Pemantulan ini berlangsung terus menerus hingga bola berhenti. Tentukan panjang seluruh lintasan yang ditempuh bola!\n\n**Langkah Pembahasan:**\n1. **Gunakan Rumus Sakti Pantulan Bola:**\n   Tinggi awal $h = 12$, rasio $\\frac{p}{q} = \\frac{3}{4} \\implies p = 3, q = 4$.\n   $$S_{\\text{lintasan}} = 12 \\times \\left(\\frac{4 + 3}{4 - 3}\\right) = 12 \\times \\left(\\frac{7}{1}\\right) = 84 \\text{ meter}$$\n\n**Jawaban:** Panjang seluruh lintasan bola hingga berhenti adalah 84 meter."
      }
    ]
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
        "exampleProblem": "**Soal:** Diketahui vektor $\\mathbf{a} = 2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}$. Tentukan panjang vektor $\\mathbf{a}$ dan vektor satuan yang searah dengan $\\mathbf{a}$!\n\n**Langkah Pembahasan:**\n1. **Hitung Panjang Vektor $|\\mathbf{a}|$:**\n   $$|\\mathbf{a}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$\n2. **Bentuk Vektor Satuan $\\hat{\\mathbf{a}}$:**\n   $$\\hat{\\mathbf{a}} = \\frac{1}{7}(2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}) = \\frac{2}{7}\\mathbf{i} - \\frac{3}{7}\\mathbf{j} + \\frac{6}{7}\\mathbf{k}$$\n\n**Jawaban:** Panjang vektor adalah 7 dan vektor satuannya adalah $\\frac{2}{7}\\mathbf{i} - \\frac{3}{7}\\mathbf{j} + \\frac{6}{7}\\mathbf{k}$."
      },
      {
        "title": "2. Perkalian Titik (Dot Product) & Sudut Antar Vektor",
        "concept": "Perkalian titik antara dua vektor $\\mathbf{u}$ dan $\\mathbf{v}$ menghasilkan besaran skalar:\n$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\\mathbf{u}| |\\mathbf{v}| \\cos\\theta$$\n\n**Kosinus Sudut Antara Dua Vektor:**\n$$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{|\\mathbf{u}| |\\mathbf{v}|}$$\n\n**Sifat Ortogonal (Tegak Lurus):**\nDua vektor saling tegak lurus ($\\theta = 90^\\circ$) jika dan hanya jika dot product keduanya sama dengan **nol**:\n$$\\mathbf{u} \\perp \\mathbf{v} \\iff \\mathbf{u} \\cdot \\mathbf{v} = 0$$",
        "quickTip": "⚡ **Trik Tegak Lurus Dot Product:** Setiap melihat soal 'kedua vektor saling tegak lurus', langsung buat persamaan $\\mathbf{u} \\cdot \\mathbf{v} = 0$ untuk mencari variabel yang belum diketahui!",
        "exampleProblem": "**Soal:** Diketahui $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix}$ dan $\\mathbf{b} = \\begin{pmatrix} 2 \\\\ x \\\\ 4 \\end{pmatrix}$. Jika vektor $\\mathbf{a}$ tegak lurus dengan vektor $\\mathbf{b}$, tentukan nilai $x$!\n\n**Langkah Pembahasan:**\n1. **Gunakan Syarat Tegak Lurus $\\mathbf{a} \\cdot \\mathbf{b} = 0$:**\n   $$(3)(2) + (-1)(x) + (2)(4) = 0$$\n2. **Hitung Aljabar:**\n   $$6 - x + 8 = 0 \\implies 14 - x = 0 \\implies x = 14$$\n\n**Jawaban:** Nilai $x$ adalah 14."
      }
    ]
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
        "exampleProblem": "**Soal:** Pada segitiga siku-siku $ABC$ di titik $B$, diketahui $\\sin A = \\frac{5}{13}$. Tentukan nilai dari $\\cos A$ dan $\\tan A$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Sisi Berdasarkan $\\sin A = \\frac{\\text{Depan}}{\\text{Miring}} = \\frac{5}{13}$:**\n   - Sisi depan = 5\n   - Sisi miring = 13\n2. **Cari Sisi Samping Menggunakan Pythagoras:**\n   $$\\text{Samping} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$\n3. **Hitung $\\cos A$ dan $\\tan A$:**\n   $$\\cos A = \\frac{\\text{Samping}}{\\text{Miring}} = \\frac{12}{13}$$\n   $$\\tan A = \\frac{\\text{Depan}}{\\text{Samping}} = \\frac{5}{12}$$\n\n**Jawaban:** $\\cos A = \\frac{12}{13}$ dan $\\tan A = \\frac{5}{12}$."
      },
      {
        "title": "2. Sudut Berelasi di 4 Kuadran (Mantra ASTC)",
        "concept": "Tanda nilai trigonometri pada 4 kuadran ditentukan oleh posisi koordinat $(x, y)$:\n- **Kuadran I ($0^\\circ - 90^\\circ$):** **A**ll positif (Sin, Cos, Tan semuanya $+ $).\n- **Kuadran II ($90^\\circ - 180^\\circ$):** Hanya **S**inus dan Csc yang bernilai $+ $.\n- **Kuadran III ($180^\\circ - 270^\\circ$):** Hanya **T**angen dan Cot yang bernilai $+ $.\n- **Kuadran IV ($270^\\circ - 360^\\circ$):** Hanya **C**osinus dan Sec yang bernilai $+ $.\n\n**Formula Relasi Sudut Genap ($180^\\circ \\pm \\alpha$ dan $360^\\circ - \\alpha$):**\nNama fungsi TETAP (Sin tetap Sin, Cos tetap Cos), tanda disesuaikan dengan kuadran!\n- $\\sin(180^\\circ - \\alpha) = +\\sin\\alpha$\n- $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$\n- $\\tan(180^\\circ + \\alpha) = +\\tan\\alpha$",
        "quickTip": "⚡ **Mantra ASTC:** Hafalkan frase: **A**ku **S**uka **T**ahu **C**ampur (All, Sin, Tan, Cos) searah putaran kuadran I $\\to$ II $\\to$ III $\\to$ IV!",
        "exampleProblem": "**Soal:** Hitunglah nilai pasti dari $\\cos 150^\\circ + \\sin 300^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Ubah Sudut Menggunakan Sudut Berelasi:**\n   - $150^\\circ$ berada di **Kuadran II** (Cosinus bernilai negatif):\n     $$\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n   - $300^\\circ$ berada di **Kuadran IV** (Sinus bernilai negatif):\n     $$\\sin 300^\\circ = \\sin(360^\\circ - 60^\\circ) = -\\sin 60^\\circ = -\\frac{1}{2}\\sqrt{3}$$\n2. **Jumlahkan Keduanya:**\n   $$-\\frac{1}{2}\\sqrt{3} + \\left(-\\frac{1}{2}\\sqrt{3}\\right) = -\\sqrt{3}$$\n\n**Hasil Akhir:** $-\\sqrt{3}$."
      }
    ]
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
        "exampleProblem": "**Soal:** Pada segitiga $ABC$, diketahui panjang $b = 6 \\text{ cm}$, $c = 10 \\text{ cm}$, dan besar sudut $\\angle A = 60^\\circ$. Tentukan panjang sisi $a$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Kasus Sisi-Sudut-Sisi:** Gunakan Aturan Cosinus.\n   $$a^2 = b^2 + c^2 - 2bc\\cos A$$\n2. **Substitusi Nilai:**\n   $$a^2 = 6^2 + 10^2 - 2(6)(10)\\cos 60^\\circ$$\n   $$a^2 = 36 + 100 - 120\\left(\\frac{1}{2}\\right) = 136 - 60 = 76$$\n3. **Tarik Akar:**\n   $$a = \\sqrt{76} = \\sqrt{4 \\times 19} = 2\\sqrt{19} \\text{ cm}$$\n\n**Jawaban:** Panjang sisi $a$ adalah $2\\sqrt{19}$ cm."
      },
      {
        "title": "2. Luas Segitiga Trigonometri & Navigasi Jurusan 3 Angka",
        "concept": "1. **Luas Segitiga dengan Sudut Apit:**\n   $$L = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B$$\n2. **Jurusan Tiga Angka (Bearing):**\n   Arah diukur searah jarum jam mulai dari arah **Utara ($000^\\circ$)**. Contoh: Timur $= 090^\\circ$, Selatan $= 180^\\circ$, Barat Daya $= 225^\\circ$.",
        "quickTip": "💡 **Aplikasi Navigasi Kapal:** Pergerakan kapal dari pelabuhan $A$ ke $B$ lalu berbelok ke $C$ selalu membentuk segitiga di permukaan laut. Sudut segitiga di titik belok dihitung dari selisih azimuth utara!",
        "exampleProblem": "**Soal:** Hitunglah luas sebuah segitiga yang memiliki panjang dua sisi berturut-turut 8 cm dan 12 cm serta membentuk sudut apit $30^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Terapkan Rumus Luas Segitiga Trigonometri:**\n   $$L = \\frac{1}{2} \\times 8 \\times 12 \\times \\sin 30^\\circ$$\n2. **Hitung Nilai:**\n   $$L = 48 \\times \\frac{1}{2} = 24 \\text{ cm}^2$$\n\n**Jawaban:** Luas segitiga tersebut adalah $24 \\text{ cm}^2$."
      }
    ]
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
        "exampleProblem": "**Soal:** Tentukan nilai $x + y + z$ dari SPLTV berikut:\n$$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$$\n\n**Langkah Pembahasan:**\n1. **Eliminasi $z$ dari Persamaan (1) dan (3) (Jumlahkan langsung):**\n   $$(x + y + z) + (x + 2y - z) = 6 + 2 \\implies 2x + 3y = 8 \\quad \\dots (4)$$\n2. **Eliminasi $z$ dari Persamaan (2) dan (3) (Jumlahkan langsung):**\n   $$(2x - y + z) + (x + 2y - z) = 3 + 2 \\implies 3x + y = 5 \\implies y = 5 - 3x \\quad \\dots (5)$$\n3. **Substitusi (5) ke (4):**\n   $$2x + 3(5 - 3x) = 8 \\implies 2x + 15 - 9x = 8 \\implies -7x = -7 \\implies x = 1$$\n4. **Cari $y$ dan $z$:**\n   $$y = 5 - 3(1) = 2$$\n   $$x + y + z = 6 \\implies 1 + 2 + z = 6 \\implies z = 3$$\n5. **Hitung Nilai $x + y + z$:**\n   $$1 + 2 + 3 = 6$$\n\n**Jawaban:** Nilai $x + y + z = 6$."
      },
      {
        "title": "2. Daerah Himpunan Penyelesaian (DHP) SPtLDV",
        "concept": "Pertidaksamaan linear $ax + by \\le c$ membagi bidang koordinat menjadi dua belahan oleh garis batas $ax + by = c$.\n\n**Langkah Menentukan DHP:**\n1. Gambar garis batas dengan mencari titik potong sumbu-$X$ ($y=0$) dan sumbu-$Y$ ($x=0$).\n   - Garis utuh jika tanda $\\le$ atau $\\ge$.\n   - Garis putus-putus jika tanda $<$ atau $>$.\n2. Uji titik selidik (paling mudah titik asal $O(0, 0)$):\n   - Jika pernyataan bernilai benar, arsirlah daerah yang memuat $(0, 0)$.\n   - Jika salah, arsirlah daerah sebaliknya.",
        "quickTip": "⚡ **Trik Cepat Tanda Koefisien $y$ Positif:** Jika koefisien $y > 0$, maka tanda $\\ge$ selalu berada di **sebelah atas kurva garis**, dan tanda $\\le$ selalu berada di **sebelah bawah kurva garis**!",
        "exampleProblem": "**Soal:** Tentukan titik potong sumbu-$X$ dan sumbu-$Y$ dari garis pembatas pertidaksamaan $3x + 4y \\le 24$ dan tentukan apakah titik $(2, 3)$ berada di dalam daerah penyelesaian!\n\n**Langkah Pembahasan:**\n1. **Titik Potong Garis $3x + 4y = 24$:**\n   - Jika $x = 0 \\implies 4y = 24 \\implies y = 6 \\implies (0, 6)$.\n   - Jika $y = 0 \\implies 3x = 24 \\implies x = 8 \\implies (8, 0)$.\n2. **Uji Titik $(2, 3)$:**\n   $$3(2) + 4(3) = 6 + 12 = 18$$\n   Karena $18 \\le 24$ bernilai **BENAR**, maka titik $(2, 3)$ berada di dalam DHP.\n\n**Jawaban:** Titik potongnya adalah $(0, 6)$ dan $(8, 0)$, serta titik $(2, 3)$ termasuk ke dalam DHP."
      }
    ]
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
        "exampleProblem": "**Soal:** Diketahui kelas modus adalah interval $51 - 60$ dengan frekuensi 14. Frekuensi kelas sebelumnya adalah 10 dan kelas sesudahnya adalah 8. Jika panjang kelas adalah 10, tentukan modus data tersebut!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   - $T_b = 51 - 0{,}5 = 50{,}5$\n   - $d_1 = 14 - 10 = 4$\n   - $d_2 = 14 - 8 = 6$\n   - $c = 10$\n2. **Terapkan Rumus Modus:**\n   $$Mo = 50{,}5 + \\left(\\frac{4}{4 + 6}\\right) \\times 10 = 50{,}5 + \\left(\\frac{4}{10}\\right) \\times 10 = 50{,}5 + 4 = 54{,}5$$\n\n**Jawaban:** Modus data kelompok adalah 54,5."
      },
      {
        "title": "2. Varians (Ragam) & Simpangan Baku (Standar Deviasi)",
        "concept": "Ukuran penyebaran mengukur seberapa jauh data tersebar dari nilai rata-ratanya:\n1. **Varians (Ragam $\\sigma^2$):**\n   $$S^2 = \\frac{\\sum f_i (x_i - \\bar{x})^2}{n}$$\n2. **Simpangan Baku (Standar Deviasi $S$):**\n   $$S = \\sqrt{S^2} = \\sqrt{\\frac{\\sum f_i (x_i - \\bar{x})^2}{n}}$$",
        "quickTip": "💡 **Makna Fisis Simpangan Baku:** Semakin kecil simpangan baku, semakin seragam/homogen nilai siswa di kelas tersebut. Semakin besar simpangan baku, kemampuan siswa semakin timpang (heterogen)!",
        "exampleProblem": "**Soal:** Tentukan simpangan baku dari data sampel tunggal: 2, 4, 6, 8, 10!\n\n**Langkah Pembahasan:**\n1. **Hitung Rata-rata ($\\bar{x}$):**\n   $$\\bar{x} = \\frac{2 + 4 + 6 + 8 + 10}{5} = \\frac{30}{5} = 6$$\n2. **Hitung Kuadrat Selisih $(x_i - \\bar{x})^2$:**\n   - $(2 - 6)^2 = (-4)^2 = 16$\n   - $(4 - 6)^2 = (-2)^2 = 4$\n   - $(6 - 6)^2 = 0^2 = 0$\n   - $(8 - 6)^2 = 2^2 = 4$\n   - $(10 - 6)^2 = 4^2 = 16$\n3. **Jumlahkan dan Bagi $n$:**\n   $$\\text{Varians } S^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$$\n4. **Simpangan Baku:**\n   $$S = \\sqrt{8} = 2\\sqrt{2}$$\n\n**Jawaban:** Simpangan baku data tersebut adalah $2\\sqrt{2}$."
      }
    ]
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
        "exampleProblem": "**Soal:** Dari 8 orang calon pengurus organisasi, akan dipilih 3 orang untuk menjadi Ketua, Sekretaris, dan Bendahara. Berapa banyak susunan pengurus yang mungkin terbentuk?\n\n**Langkah Pembahasan:**\n1. **Analisis Masalah:** Karena jabatan memiliki struktur (Ketua $\\ne$ Sekretaris), **urutan diperhatikan** $\\implies$ gunakan **Permutasi** $P(8, 3)$.\n2. **Hitung:**\n   $$P(8, 3) = \\frac{8!}{(8 - 3)!} = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336 \\text{ cara}$$\n\n**Jawaban:** Terdapat 336 cara susunan pengurus yang mungkin."
      },
      {
        "title": "2. Peluang Kejadian Majemuk (Saling Lepas & Saling Bebas)",
        "concept": "1. **Kejadian Saling Lepas (Tidak Mungkin Terjadi Bersamaan):**\n   $$P(A \\cup B) = P(A) + P(B)$$\n2. **Kejadian Tidak Saling Lepas (Memiliki Irisan):**\n   $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n3. **Kejadian Saling Bebas (Kejadian $A$ Tidak Mempengaruhi Peluang $B$):**\n   $$P(A \\cap B) = P(A) \\times P(B)$$\n4. **Peluang Bersyarat (Peluang $B$ dengan Syarat $A$ Telah Terjadi):**\n   $$P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$$",
        "quickTip": "💡 **Kata Kunci Logika:** Kata **'ATAU'** berarti operasi **Penjumlahan ($\\cup$)**, sedangkan kata **'DAN'** berarti operasi **Perkalian ($\\cap$)**!",
        "exampleProblem": "**Soal:** Dua buah dadu dilempar bersamaan. Tentukan peluang muncul mata dadu berjumlah 5 atau berjumlah 10!\n\n**Langkah Pembahasan:**\n1. **Ruang Sampel:** $n(S) = 36$.\n2. **Kejadian $A$ (Jumlah 5):** $\\{(1,4), (2,3), (3,2), (4,1)\\} \\implies n(A) = 4 \\implies P(A) = \\frac{4}{36}$.\n3. **Kejadian $B$ (Jumlah 10):** $\\{(4,6), (5,5), (6,4)\\} \\implies n(B) = 3 \\implies P(B) = \\frac{3}{36}$.\n4. **Kedua Kejadian Saling Lepas (Tidak ada dadu berjumlah 5 sekaligus 10):**\n   $$P(A \\cup B) = \\frac{4}{36} + \\frac{3}{36} = \\frac{7}{36}$$\n\n**Jawaban:** Peluangnya adalah $\\frac{7}{36}$."
      }
    ]
  }
];
