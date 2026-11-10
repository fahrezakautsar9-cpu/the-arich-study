/**
 * KURIKULUM MERDEKA MATEMATIKA KELAS 7 (FASE D)
 * Dilengkapi Visualisasi Konsep & Bedah Diagram Multi-Panel
 */

const KURMER_KELAS7_DATA = [
  {
    "id": "k7-bilangan",
    "number": "01",
    "title": "Bab 1: Bilangan Bulat dan Bilangan Rasional",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "hash",
    "summary": "Pondasi utama aritmetika modern: pahami konsep bilangan positif, nol, dan negatif melalui model garis bilangan dan lift vertikal, kuasai aturan urutan operasi hitung (KABATAKU/PEMDAS), serta transformasi fleksibel antara pecahan, desimal, persen, dan aplikasi FPB-KPK dalam kehidupan nyata.",
    "subtopics": [
      {
        "title": "1. Operasi Campuran Bilangan Bulat & Aturan Prioritas (PEMDAS)",
        "concept": "Bilangan bulat terdiri dari bilangan bulat positif $\\{1, 2, 3, \\dots\\}$, nol $\\{0\\}$, dan bilangan bulat negatif $\\{-1, -2, -3, \\dots\\}$.\n\n**Hirarki Operasi Hitung Campuran (Urutan Wajib):**\n1. **P** (*Parentheses* / Tanda Kurung): Selesaikan operasi di dalam kurung terdalam terlebih dahulu.\n2. **E** (*Exponents* / Pangkat & Akar): Hitung pemangkatan dan penarikan akar.\n3. **MD** (*Multiplication & Division* / Kali & Bagi): Setara, kerjakan urut dari kiri ke kanan.\n4. **AS** (*Addition & Subtraction* / Tambah & Kurang): Setara, kerjakan urut dari kiri ke kanan.\n\n**Hukum Perkalian dan Pembagian Tanda:**\n- $(+) \\times (+) = (+)$ dan $(-) \\times (-) = (+)$ *(Tanda sama menghasilkan positif)*\n- $(+) \\times (-) = (-)$ dan $(-) \\times (+) = (-)$ *(Tanda beda menghasilkan negatif)*",
        "quickTip": "💡 **Analogi Lift Gedung Bertingkat:** Bayangkan lantai dasar adalah $0$, lantai atas adalah positif ($+1, +2, +3$), dan lantai parkir bawah tanah (*basement*) adalah negatif ($-1, -2, -3$). Mengurangkan bilangan negatif $(-(-5))$ sama artinya dengan 'membuang beban muatan ke bawah', sehingga lift justru terdorong naik $+5$ lantai!",
        "exampleProblem": "**Soal:** Hitunglah hasil dari operasi hitung campuran berikut:\n$$-15 + 8 \\times (-4) - (-20) \\div 5$$\n\n**Langkah Pembahasan:**\n1. **Identifikasi Operasi Perkalian & Pembagian Terlebih Dahulu:**\n   - Perkalian: $8 \\times (-4) = -32$\n   - Pembagian: $(-20) \\div 5 = -4$\n2. **Susun Kembali Persamaan:**\n   $$-15 + (-32) - (-4)$$\n3. **Sederhanakan Tanda:**\n   $$-15 - 32 + 4$$\n4. **Kerjakan dari Kiri ke Kanan:**\n   $$-15 - 32 = -47$$\n   $$-47 + 4 = -43$$\n\n**Hasil Akhir:** $-43$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-bilangan_0.svg",
          "title": "Garis Bilangan Operasi Bulat & Hirarki Prioritas PEMDAS",
          "caption": "Visualisasi lompatan garis bilangan untuk pengurangan bilangan negatif serta tahapan evaluasi operasi campuran.",
          "guide": [
            "Panel kiri memperlihatkan bagaimana mengurangi bilangan negatif -(-2) ekuivalen dengan melompat maju ke kanan (+2).",
            "Kotak bawah merangkum hukum perkalian dan pembagian tanda: tanda sama menghasilkan positif, tanda berbeda menghasilkan negatif.",
            "Panel kanan membedah urutan baku PEMDAS (Kurung -> Pangkat -> Kali/Bagi -> Tambah/Kurang) pada soal -15 + 8x(-4) - (-20):5 = -43."
          ]
        }
      },
      {
        "title": "2. Pecahan Biasa, Campuran, Desimal & Persen",
        "concept": "Pecahan $\\frac{a}{b}$ menyatakan rasio antara pembilang $a$ dan penyebut $b$ ($b \\ne 0$).\n\n**Aturan Operasi Pecahan:**\n1. **Penjumlahan & Pengurangan:** Wajib menyamakan penyebut menggunakan KPK:\n   $$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot d \\pm b \\cdot c}{b \\cdot d}$$\n2. **Perkalian:** Kalikan pembilang dengan pembilang, penyebut dengan penyebut:\n   $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n3. **Pembagian:** Ubah menjadi perkalian dengan membalik pecahan kedua (*reciprocal*):\n   $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}$$\n\n**Konversi Desimal ke Pecahan:**\nDesimal berulang seperti $x = 0{,}333\\dots$ dapat diubah dengan aljabar: $10x = 3{,}333\\dots \\implies 9x = 3 \\implies x = \\frac{3}{9} = \\frac{1}{3}$.",
        "quickTip": "⚡ **Trik Kali Silang (Butterfly Method):** Untuk menjumlahkan atau membandingkan dua pecahan tanpa mencari KPK panjang:\n$$\\frac{3}{7} + \\frac{2}{5} = \\frac{3 \\times 5 + 7 \\times 2}{7 \\times 5} = \\frac{15 + 14}{35} = \\frac{29}{35}$$\nCepat, akurat, dan minim risiko salah hitung!",
        "exampleProblem": "**Soal:** Tentukan hasil dari $2\\frac{1}{4} - \\frac{2}{3} \\div 1\\frac{1}{6}$ dalam bentuk pecahan paling sederhana!\n\n**Langkah Pembahasan:**\n1. **Ubah Semua Pecahan Campuran Menjadi Pecahan Biasa:**\n   $$2\\frac{1}{4} = \\frac{9}{4}, \\quad 1\\frac{1}{6} = \\frac{7}{6}$$\n2. **Kerjakan Operasi Pembagian Dahulu:**\n   $$\\frac{2}{3} \\div \\frac{7}{6} = \\frac{2}{3} \\times \\frac{6}{7} = \\frac{2 \\times 2}{1 \\times 7} = \\frac{4}{7}$$\n3. **Lakukan Pengurangan:**\n   $$\\frac{9}{4} - \\frac{4}{7}$$\n   Samakan penyebut ke KPK$(4, 7) = 28$:\n   $$\\frac{9 \\times 7}{28} - \\frac{4 \\times 4}{28} = \\frac{63 - 16}{28} = \\frac{47}{28} = 1\\frac{19}{28}$$\n\n**Hasil Akhir:** $1\\frac{19}{28}$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-bilangan_1.svg",
          "title": "Visualisasi Batang Pecahan Senilai & Metode Kali Silang",
          "caption": "Perbandingan proporsi visual pecahan-desimal-persen serta algoritma cepat penjumlahan dan pembagian pecahan.",
          "guide": [
            "Panel kiri membandingkan luas batang pecahan senilai (1/2 = 2/4 = 50%) serta konversi pecahan ke desimal dan persen.",
            "Panel kanan atas menampilkan metode kali silang (Butterfly Method) untuk menjumlahkan pecahan berbeda penyebut secara kilat.",
            "Panel kanan bawah menguraikan aturan wajib pembagian pecahan: ubah tanda bagi menjadi kali dengan membalik pecahan pembagi (reciprocal)."
          ]
        }
      },
      {
        "title": "3. FPB, KPK & Aplikasi Faktorisasi Prima",
        "concept": "Faktor Persekutuan Terbesar (FPB) dan Kelipatan Persekutuan Terkecil (KPK) dapat ditentukan dengan pohon faktor atau metode tabel pembagian bersusun.\n\n**Prinsip Faktorisasi Prima:**\n- **FPB:** Kalikan faktor prima yang sama (*sekutu*) dengan **pangkat terkecil**.\n- **KPK:** Kalikan seluruh faktor prima yang muncul, jika ada yang sama ambil **pangkat terbesar**.\n\n**Ciri Khas Soal Cerita Nyata:**\n- **Soal Bertipe FPB:** Mengandung kata kunci *'membagi sama rata'*, *'jumlah bungkusan terbanyak'*, *'kategori paket sama banyak'*.\n- **Soal Bertipe KPK:** Mengandung kata kunci *'bersamaan kembali'*, *'bertemu setiap n hari'*, *'lampu berkedip serentak'*.",
        "quickTip": "💡 **Hubungan Emas Dua Bilangan:** Untuk dua bilangan bulat positif $A$ dan $B$, berlaku hubungan mutlak:\n$$A \\times B = \\text{FPB}(A, B) \\times \\text{KPK}(A, B)$$\nRumus ini sangat ampuh menyelesaikan soal kompetisi di mana nilai salah satu bilangan atau nilai KPK-nya tidak diketahui secara eksplisit!",
        "exampleProblem": "**Soal:** Lampu merah menyala setiap 12 detik, lampu kuning setiap 15 detik, dan lampu hijau setiap 20 detik. Jika ketiga lampu menyala bersamaan pada pukul 19.30, pada pukul berapa ketiga lampu akan menyala bersamaan untuk kedua kalinya?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Jenis Soal:** Kata kunci *'menyala bersamaan'* $\\implies$ gunakan **KPK**.\n2. **Faktorisasi Prima Tiap Bilangan:**\n   - $12 = 2^2 \\times 3$\n   - $15 = 3 \\times 5$\n   - $20 = 2^2 \\times 5$\n3. **Hitung KPK:**\n   $$\\text{KPK} = 2^2 \\times 3 \\times 5 = 4 \\times 3 \\times 5 = 60 \\text{ detik}$$\n4. **Konversi Waktu:**\n   $60 \\text{ detik} = 1 \\text{ menit}$.\n5. **Waktu Berikutnya:**\n   $$19.30 + 1 \\text{ menit} = 19.31$$\n\n**Jawaban:** Ketiga lampu menyala bersamaan kembali pada pukul 19.31.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-bilangan_2.svg",
          "title": "Faktorisasi Prima FPB-KPK & Garis Waktu Siklus Lampu Serentak",
          "caption": "Perbandingan faktorisasi prima 12, 15, dan 20 serta visualisasi titik temu kelipatan waktu pada detik ke-60.",
          "guide": [
            "Panel kiri menunjukkan dekomposisi faktor prima dari 12, 15, dan 20 beserta aturan pangkat terkecil (FPB) vs pangkat terbesar (KPK).",
            "Rumus emas A x B = FPB x KPK menjadi senjata utama ketika salah satu bilangan belum diketahui.",
            "Panel kanan memvisualisasikan kelipatan nyala lampu merah (12s), kuning (15s), dan hijau (20s) yang berhimpit kembali tepat di KPK = 60 detik."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-aljabar",
    "number": "02",
    "title": "Bab 2: Bentuk Aljabar & Pemodelan Simbolik",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "variable",
    "summary": "Transisi dari aritmetika angka konkret menuju aljabar simbolik: kenali struktur suku, variabel, koefisien, konstanta, kuasai hukum suku sejenis, serta teknik perkalian aljabar distributif (FOIL) yang menjadi kunci kalkulus di masa depan.",
    "subtopics": [
      {
        "title": "1. Struktur Aljabar & Hukum Suku Sejenis",
        "concept": "Bentuk aljabar adalah representasi matematika yang memuat huruf sebagai simbol nilai yang belum diketahui (*variabel*).\n\nPada bentuk $5x^2 - 7x + 12$:\n- $x$ dinamakan **variabel** (peubah).\n- $5$ adalah **koefisien** dari $x^2$, dan $-7$ adalah **koefisien** dari $x$.\n- $12$ adalah **konstanta** (nilai tetap tanpa variabel).\n\n**Hukum Suku Sejenis:**\nDua suku atau lebih dikatakan **sejenis** jika dan hanya jika memiliki **variabel yang sama persis dengan pangkat yang sama persis**. Hanya suku sejenis yang dapat dijumlahkan atau dikurangkan!",
        "quickTip": "💡 **Analogi Keranjang Buah:** Bayangkan $a$ adalah apel dan $b$ adalah belimbing. Bentuk $3a + 5b + 2a - b$ berarti 3 apel + 5 belimbing + 2 apel - 1 belimbing. Kita hanya bisa menggabungkan apel dengan apel ($(3+2)a = 5a$) dan belimbing dengan belimbing ($(5-1)b = 4b$), menghasilkan $5a + 4b$. Jangan pernah mencampurnya menjadi $9ab$!",
        "exampleProblem": "**Soal:** Sederhanakan bentuk aljabar berikut:\n$$4(2x - 3y) - 3(x - 5y + 2)$$\n\n**Langkah Pembahasan:**\n1. **Gunakan Sifat Distributif Perkalian:**\n   $$4(2x) - 4(3y) - 3(x) - 3(-5y) - 3(2)$$\n   $$= 8x - 12y - 3x + 15y - 6$$\n2. **Kumpulkan Suku-Suku Sejenis:**\n   $$= (8x - 3x) + (-12y + 15y) - 6$$\n3. **Operasikan Koefisiennya:**\n   $$= 5x + 3y - 6$$\n\n**Hasil Akhir:** $5x + 3y - 6$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-aljabar_0.svg",
          "title": "Ubin Aljabar (Algebra Tiles) & Pengelompokan Suku Sejenis",
          "caption": "Visualisasi geometris perbedaan suku x^2, x, dan konstanta 1 beserta alur penyederhanaan suku sejenis.",
          "guide": [
            "Panel kiri memvisualisasikan mengapa x^2 (persegi), x (batang), dan 1 (satuan) tidak sejenis karena mewakili dimensi luas yang berbeda.",
            "Panel kanan mendemonstrasikan sifat distributif perkalian masuk diikuti pengelompokan suku bervariabel sama.",
            "Perhatikan perubahan tanda saat mengalikan bilangan negatif ke dalam kurung: -3(-5y) berubah menjadi +15y."
          ]
        }
      },
      {
        "title": "2. Perkalian Aljabar & Metode FOIL",
        "concept": "Perkalian bentuk aljabar memanfaatkan sifat distributif secara sistematis.\n\n**Perkalian Dua Suku Binomial $(ax + b)(cx + d)$ dengan Kaidah FOIL:**\n- **F** (*First* / Suku Depan): $(ax) \\times (cx) = acx^2$\n- **O** (*Outer* / Suku Luar): $(ax) \\times d = adx$\n- **I** (*Inner* / Suku Dalam): $b \\times (cx) = bcx$\n- **L** (*Last* / Suku Belakang): $b \\times d = bd$\n\nSehingga:\n$$(ax + b)(cx + d) = acx^2 + (ad + bc)x + bd$$\n\n**Bentuk Kuadrat Istimewa:**\n1. $(a + b)^2 = a^2 + 2ab + b^2$\n2. $(a - b)^2 = a^2 - 2ab + b^2$\n3. $(a + b)(a - b) = a^2 - b^2$ *(Selisih Dua Kuadrat)*",
        "quickTip": "⚡ **Trik Kuadrat Cepat Selisih:** Bentuk $(a+b)(a-b) = a^2 - b^2$ tidak memiliki suku tengah! Trik ini sangat berguna untuk menghitung kuadrat angka besar secara kilat, misal $42 \\times 38 = (40 + 2)(40 - 2) = 40^2 - 2^2 = 1600 - 4 = 1596$!",
        "exampleProblem": "**Soal:** Tentukan hasil perkalian aljabar dari $(3x - 4)(2x + 5)$!\n\n**Langkah Pembahasan:**\n1. **Kalikan Suku Depan (First):** $3x \\times 2x = 6x^2$\n2. **Kalikan Suku Luar (Outer):** $3x \\times 5 = +15x$\n3. **Kalikan Suku Dalam (Inner):** $-4 \\times 2x = -8x$\n4. **Kalikan Suku Belakang (Last):** $-4 \\times 5 = -20$\n5. **Gabungkan dan Sederhanakan Suku Tengah:**\n   $$6x^2 + (15x - 8x) - 20 = 6x^2 + 7x - 20$$\n\n**Hasil Akhir:** $6x^2 + 7x - 20$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-aljabar_1.svg",
          "title": "Model Luas Petak Aljabar & Kaidah Perkalian FOIL",
          "caption": "Representasi geometri perkalian dua suku binomial sebagai luas 4 petak persegi panjang dan identitas kuadrat istimewa.",
          "guide": [
            "Panel kiri memetakan perkalian binomial menjadi 4 petak luas persegi panjang: First (6x^2), Outer (15x), Inner (8x), dan Last (20).",
            "Dua petak diagonal (Outer dan Inner) merupakan suku sejenis bervariabel x sehingga selalu dapat dijumlahkan.",
            "Panel kanan merangkum contoh bertanda negatif serta 3 rumus kuadrat istimewa termasuk selisih dua kuadrat (a+b)(a-b) = a^2 - b^2."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-plsv",
    "number": "03",
    "title": "Bab 3: Persamaan & Pertidaksamaan Linear Satu Variabel (PLSV & PtLSV)",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "scale",
    "summary": "Kuasai seni menjaga keseimbangan neraca timbangan matematika: pelajari prinsip kesetaraan ruas, transformasi suku aljabar, kehati-hatian membalik tanda pertidaksamaan saat membagi bilangan negatif, serta strategi memecahkan soal cerita kehidupan sehari-hari.",
    "subtopics": [
      {
        "title": "1. Prinsip Kesetaraan Neraca & Penyelesaian PLSV",
        "concept": "Persamaan Linear Satu Variabel (PLSV) adalah kalimat terbuka yang dihubungkan tanda sama dengan ($=$) dan variabelnya berpangkat satu. Bentuk umum:\n$$ax + b = c, \\quad a \\ne 0$$\n\n**Prinsip Dasar Neraca Seimbang:**\nNilai persamaan tidak akan berubah jika kedua ruas:\n1. Ditambah atau dikurangi dengan bilangan yang sama.\n2. Dikalikan atau dibagi dengan bilangan yang sama (selain nol).\n\n**Tujuan Utama:** Mengisolasi variabel $x$ di salah satu ruas sehingga diperoleh $x = \\text{nilai}$.",
        "quickTip": "💡 **Trik 'Pindah Ruas' yang Benar:** Sebenarnya istilah 'pindah ruas' adalah penyingkatan dari prinsip kesetaraan: operasi penjumlahan berubah menjadi pengurangan saat menyeberang tanda sama dengan, dan perkalian berubah menjadi pembagian!",
        "exampleProblem": "**Soal:** Tentukan penyelesaian dari persamaan:\n$$5x - 7 = 2x + 11$$\n\n**Langkah Pembahasan:**\n1. **Kumpulkan Suku Bervariabel ke Ruas Kiri:**\n   $$5x - 2x - 7 = 11 \\implies 3x - 7 = 11$$\n2. **Kumpulkan Suku Konstanta ke Ruas Kanan:**\n   $$3x = 11 + 7 \\implies 3x = 18$$\n3. **Bagi Kedua Ruas dengan Koefisien $x$ ($3$):**\n   $$x = \\frac{18}{3} = 6$$\n\n**Himpunan Penyelesaian:** $\\{6\\}$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-plsv_0.svg",
          "title": "Model Kesetaraan Neraca Timbangan & Alur Penyelesaian PLSV",
          "caption": "Ilustrasi keseimbangan dua lengan neraca pada persamaan linear satu variabel serta tahapan isolasi variabel x.",
          "guide": [
            "Panel kiri menggambarkan persamaan 2x + 3 = 11 sebagai neraca setimbang: mengambil 3 satuan dari kedua lengan menjaga neraca tetap datar.",
            "Panel kanan membedah alur penyelesaian 5x - 7 = 2x + 11 hingga diperoleh himpunan penyelesaian tunggal x = 6.",
            "Biasakan melakukan substitusi balik (uji nilai x = 6 ke ruas kiri dan kanan) untuk memastikan tidak ada salah hitung tanda."
          ]
        }
      },
      {
        "title": "2. Pertidaksamaan Linear (PtLSV) & Aturan Balik Tanda",
        "concept": "Pertidaksamaan linear menggunakan lambang $<, \\le, >, \\ge$.\n\n**Aturan Keramat PtLSV:**\nJika kedua ruas dikalikan atau dibagi dengan **bilangan negatif**, maka arah tanda pertidaksamaan **WAJIB DIBALIK**!\n- Contoh: $-2x < 8 \\implies x > \\frac{8}{-2} \\implies x > -4$.\n\nJika dikalikan/dibagi bilangan positif, tanda pertidaksamaan tetap tidak berubah.",
        "quickTip": "⚡ **Uji Logika Balik Tanda:** Mengapa tanda harus berbalik? Ingat bahwa $2 < 5$. Jika kita kalikan kedua ruas dengan $-1$, maka apakah $-2 < -5$? Tentu salah, karena $-2$ terletak di sebelah kanan $-5$ pada garis bilangan, sehingga $-2 > -5$! Tanda terbalik terbukti mutlak secara logika!",
        "exampleProblem": "**Soal:** Tentukan himpunan penyelesaian dari pertidaksamaan:\n$$3(x - 2) \\le 5x + 8, \\quad x \\in \\mathbb{R}$$\n\n**Langkah Pembahasan:**\n1. **Uraikan Tanda Kurung:**\n   $$3x - 6 \\le 5x + 8$$\n2. **Pindahkan Variabel ke Ruas Kiri:**\n   $$3x - 5x \\le 8 + 6 \\implies -2x \\le 14$$\n3. **Bagi Kedua Ruas dengan $-2$ (Tanda Berbalik!):**\n   $$x \\ge \\frac{14}{-2} \\implies x \\ge -7$$\n\n**Himpunan Penyelesaian:** $\\{x \\mid x \\ge -7, x \\in \\mathbb{R}\\}$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-plsv_1.svg",
          "title": "Garis Bilangan PtLSV & Pembuktian Aturan Balik Tanda",
          "caption": "Representasi interval penyelesaian pada garis bilangan serta bukti geometris pembalikan tanda saat dikali negatif.",
          "guide": [
            "Panel kiri membedakan batas bulatan kosong untuk pertidaksamaan tegas (<, >) dan bulatan penuh untuk batas inklusif (<=, >=).",
            "Panel kanan menunjukkan bahwa mengalikan dengan -1 mencerminkan posisi angka terhadap titik 0: karena 2 < 5, maka bayangannya -2 berada di kanan -5 sehingga -2 > -5.",
            "Waspadai langkah terakhir saat koefisien x bernilai negatif (seperti -2x <= 14): begitu dibagi -2, tanda <= wajib dibalik menjadi >=."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-perbandingan",
    "number": "04",
    "title": "Bab 4: Perbandingan Senilai & Berbalik Nilai",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "shuffle",
    "summary": "Analisis hubungan sebab-akibat antar dua besaran: pelajari dinamika perbandingan senilai (jumlah bensin vs jarak tempuh), perbandingan berbalik nilai (kecepatan vs waktu tempuh, jumlah pekerja vs hari penyelesaian proyek), serta konversi skala denah arsitektur.",
    "subtopics": [
      {
        "title": "1. Perbandingan Senilai (Direct Proportion)",
        "concept": "Dua besaran $x$ dan $y$ dikatakan **berbanding senilai** jika kenaikan nilai $x$ menyebabkan nilai $y$ naik secara proporsional dengan rasio tetap $\\frac{y}{x} = k$.\n\n**Rumus Perkalian Silang Perbandingan Senilai:**\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\iff a_1 \\times b_2 = a_2 \\times b_1$$\n\n**Contoh Fenomena Senilai:**\n- Jumlah barang vs total harga belanjaan.\n- Jarak tempuh kendaraan vs volume bensin yang dikonsumsi.\n- Skala peta vs jarak sesungguhnya di lapangan.",
        "quickTip": "💡 **Analogi 'Makin Banyak, Makin Banyak':** Jika 1 mangkok bakso Rp15.000, maka 4 mangkok bakso pasti butuh uang lebih banyak ($4 \\times 15.000 = 60.000$). Jika kedua besaran bergerak searah (keduanya naik atau keduanya turun), itu adalah perbandingan senilai!",
        "exampleProblem": "**Soal:** Sebuah mobil menempuh jarak 120 km menggunakan 8 liter bensin. Berapa liter bensin yang dibutuhkan mobil tersebut untuk menempuh jarak 300 km dengan kecepatan rata-rata yang sama?\n\n**Langkah Pembahasan:**\n1. **Susun Tabel Perbandingan:**\n   - Kondisi 1: $120 \\text{ km} \\to 8 \\text{ liter}$\n   - Kondisi 2: $300 \\text{ km} \\to x \\text{ liter}$\n2. **Terapkan Rumus Perbandingan Senilai:**\n   $$\\frac{120}{300} = \\frac{8}{x}$$\n3. **Sederhanakan Rasio Kiri:**\n   $$\\frac{12}{30} = \\frac{2}{5} \\implies \\frac{2}{5} = \\frac{8}{x}$$\n4. **Kalikan Silang:**\n   $$2x = 5 \\times 8 = 40 \\implies x = \\frac{40}{2} = 20 \\text{ liter}$$\n\n**Jawaban:** Diperlukan 20 liter bensin.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-perbandingan_0.svg",
          "title": "Kurva Linear Perbandingan Senilai & Konversi Skala Denah",
          "caption": "Grafik proporsi linear jarak terhadap konsumsi bensin serta transformasi ukuran denah ke ukuran lapangan.",
          "guide": [
            "Panel kiri menunjukkan ciri khas perbandingan senilai: grafik berupa garis lurus yang melewati titik asal (0,0) dengan gradien rasio tetap y/x = k.",
            "Ketika jarak tempuh naik 2,5 kali lipat (120 km ke 300 km), kebutuhan bensin ikut naik 2,5 kali lipat (8 L ke 20 L).",
            "Panel kanan mengilustrasikan skala 1 : 200 di mana setiap 1 cm pada denah mewakili 200 cm (2 meter) ukuran sebenarnya."
          ]
        }
      },
      {
        "title": "2. Perbandingan Berbalik Nilai (Inverse Proportion)",
        "concept": "Dua besaran dikatakan **berbanding berbalik nilai** jika kenaikan nilai besaran pertama menyebabkan besaran kedua berkurang sedemikian rupa sehingga hasil kali kedua besaran konstan:\n$$x \\times y = k \\quad (\\text{Tetap})$$\n\n**Rumus Perbandingan Berbalik Nilai:**\n$$\\frac{a_1}{a_2} = \\frac{b_2}{b_1} \\iff a_1 \\times b_1 = a_2 \\times b_2$$\n\n**Kasus Populer: Proyek Pembangunan yang Terhenti:**\nJika proyek sudah berjalan $h_1$ hari oleh $p_1$ pekerja, lalu terhenti $h_{\\text{henti}}$ hari, maka tambahan pekerja $p_{\\text{tambah}}$ yang dibutuhkan agar proyek selesai tepat waktu adalah:\n$$p_{\\text{tambah}} = \\frac{h_{\\text{henti}} \\times p_{\\text{awal}}}{h_{\\text{sisa}}}$$",
        "quickTip": "⚡ **Trik 'Beban Kerja Tetap' (Man-Days):** Beban kerja suatu proyek adalah hasil kali orang $\\times$ hari. Jika 10 orang bekerja 30 hari, total beban = 300 orang-hari. Jika ingin selesai dalam 15 hari, cukup bagi total beban: $300 \\div 15 = 20$ orang!",
        "exampleProblem": "**Soal:** Suatu pekerjaan dapat diselesaikan oleh 15 orang dalam waktu 24 hari. Setelah dikerjakan selama 8 hari, pekerjaan terhenti selama 4 hari karena hujan lebat. Agar pekerjaan dapat selesai tepat waktu sesuai jadwal semula, berapa orang pekerja tambahan yang diperlukan?\n\n**Langkah Pembahasan:**\n1. **Analisis Sisa Waktu dan Pekerja Normal:**\n   - Waktu rencana total = 24 hari.\n   - Sudah berjalan = 8 hari $\\implies$ sisa hari normal = $24 - 8 = 16$ hari.\n   - Sisa beban kerja normal = $16 \\text{ hari} \\times 15 \\text{ orang} = 240 \\text{ orang-hari}$.\n2. **Hitung Sisa Hari Riil Setelah Terhenti:**\n   - Terhenti = 4 hari.\n   - Sisa hari yang tersedia = $16 - 4 = 12$ hari.\n3. **Hitung Kebutuhan Total Pekerja Sekarang:**\n   $$\\text{Total Pekerja} = \\frac{240 \\text{ orang-hari}}{12 \\text{ hari}} = 20 \\text{ orang}$$\n4. **Hitung Tambahan Pekerja:**\n   $$\\text{Tambahan} = 20 - 15 = 5 \\text{ orang}$$\n\n**Jawaban:** Diperlukan tambahan 5 orang pekerja.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-perbandingan_1.svg",
          "title": "Kurva Hiperbola Berbalik Nilai & Linimasa Proyek Terhenti",
          "caption": "Grafik hasil kali konstan x.y = k serta bedah visual kasus proyek konstruksi yang terhenti sementara.",
          "guide": [
            "Panel kiri menampilkan kurva perbandingan berbalik nilai di mana perkalian jumlah pekerja dan waktu selalu konstan (360 orang-hari).",
            "Panel kanan membedah linimasa proyek 24 hari: setelah berjalan 8 hari dan libur 4 hari, sisa beban 240 orang-hari harus diselesaikan dalam 12 hari.",
            "Gunakan rumus cepat Pekerja Tambahan = (Hari Henti x Pekerja Awal) / Sisa Hari = (4 x 15) / 12 = 5 orang pekerja tambahan."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-aritmatika",
    "number": "05",
    "title": "Bab 5: Aritmatika Sosial & Literasi Finansial",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "wallet",
    "summary": "Penerapan matematika langsung pada transaksi ekonomi: hitung persentase laba-rugi perdagangan, diskon harga, potongan pajak, bruto-tara-netto kemasan, serta sistem bunga tunggal perbankan.",
    "subtopics": [
      {
        "title": "1. Untung, Rugi & Persentase Perdagangan",
        "concept": "- **Untung (Laba):** Terjadi jika Harga Jual ($HJ$) $>$ Harga Beli ($HB$):\n  $$U = HJ - HB, \\quad \\%U = \\frac{U}{HB} \\times 100\\%$$\n- **Rugi:** Terjadi jika Harga Jual ($HJ$) $<$ Harga Beli ($HB$):\n  $$R = HB - HJ, \\quad \\%R = \\frac{R}{HB} \\times 100\\%$$\n\n**Menentukan Harga Jual Langsung:**\n- Jika Untung $p\\%$: $HJ = \\frac{100 + p}{100} \\times HB$\n- Jika Rugi $p\\%$: $HJ = \\frac{100 - p}{100} \\times HB$",
        "quickTip": "💡 **Penting:** Persentase untung atau rugi SELALU dihitung berdasarkan **Harga Beli (Modal Awal)**, BUKAN harga jual!",
        "exampleProblem": "**Soal:** Seorang pedagang membeli sebuah sepeda seharga Rp1.200.000. Sepeda tersebut diperbaiki dengan biaya Rp300.000. Jika pedagang ingin memperoleh keuntungan sebesar 20%, berapakah sepeda tersebut harus dijual?\n\n**Langkah Pembahasan:**\n1. **Hitung Total Modal (Harga Beli Bersih):**\n   $$HB_{\\text{total}} = 1.200.000 + 300.000 = \\text{Rp1.500.000}$$\n2. **Hitung Besar Untung yang Diharapkan:**\n   $$U = 20\\% \\times 1.500.000 = \\frac{20}{100} \\times 1.500.000 = \\text{Rp300.000}$$\n3. **Hitung Harga Jual:**\n   $$HJ = HB_{\\text{total}} + U = 1.500.000 + 300.000 = \\text{Rp1.800.000}$$\n\n**Jawaban:** Sepeda harus dijual dengan harga Rp1.800.000.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-aritmatika_0.svg",
          "title": "Perbandingan Harga Beli-Jual, Diskon & Pajak Perdagangan",
          "caption": "Visualisasi persentase keuntungan/kerugian terhadap modal bersih serta mekanisme diskon bertingkat dan pajak.",
          "guide": [
            "Panel kiri menegaskan bahwa 100% acuan selalu berupa Modal Bersih (Harga Beli + Biaya Perbaikan = Rp1,5 juta).",
            "Keuntungan 20% menaikkan harga jual menjadi 120% x Rp1,5 juta = Rp1,8 juta.",
            "Panel kanan membedakan diskon (mengurangi harga label) dan pajak PPN (menambah tagihan), serta membongkar jebakan diskon bertingkat 50% + 20%."
          ]
        }
      },
      {
        "title": "2. Bruto, Tara, Netto & Bunga Tunggal Bank",
        "concept": "- **Bruto:** Berat kotor (isi + kemasan).\n- **Netto:** Berat bersih (isi saja).\n- **Tara:** Berat kemasan atau pembungkus.\n$${\\text{Bruto}} = {\\text{Netto}} + {\\text{Tara}}, \\quad {\\text{Tara}} = \\%{\\text{Tara}} \\times {\\text{Bruto}}$$\n\n**Bunga Tunggal Tabungan/Pinjaman Bank:**\nJika modal awal $M$ disimpan di bank dengan suku bunga tunggal $b\\%$ per tahun selama $n$ bulan:\n$$B = M \\times \\frac{b}{100} \\times \\frac{n}{12}$$\nTotal uang akhir $T = M + B$.",
        "quickTip": "⚡ **Trik Satuan Bunga:** Selalu perhatikan satuan waktu bunga! Jika bunga dinyatakan 'per tahun', tetapi tabungan dalam hitungan 'bulan', wajib membaginya dengan 12 (karena 1 tahun = 12 bulan)!",
        "exampleProblem": "**Soal:** Ibu menabung uang di bank sebesar Rp6.000.000 dengan bunga tunggal 8% per tahun. Berapakah jumlah tabungan Ibu setelah 9 bulan?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $M = 6.000.000$, $b = 8\\%$, $n = 9 \\text{ bulan}$.\n2. **Hitung Besar Bunga ($B$):**\n   $$B = 6.000.000 \\times \\frac{8}{100} \\times \\frac{9}{12}$$\n   $$B = 60.000 \\times 8 \\times \\frac{3}{4} = 480.000 \\times \\frac{3}{4} = 360.000$$\n3. **Hitung Tabungan Total:**\n   $$\\text{Total} = 6.000.000 + 360.000 = \\text{Rp6.360.000}$$\n\n**Jawaban:** Jumlah tabungan Ibu setelah 9 bulan adalah Rp6.360.000.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-aritmatika_1.svg",
          "title": "Dekomposisi Bruto-Netto-Tara & Pertumbuhan Bunga Tunggal Bank",
          "caption": "Ilustrasi anatomi berat kotor/bersih kemasan produk dan grafik akumulasi bunga tunggal perbankan terhadap waktu.",
          "guide": [
            "Panel kiri membedakan Bruto (berat total isi + wadah), Netto (berat isi murni), dan Tara (berat bungkus = %Tara x Bruto).",
            "Panel kanan menampilkan pertumbuhan linear saldo tabungan Rp6.000.000 dengan bunga tunggal 8% per tahun.",
            "Pada bulan ke-9 (9/12 tahun = 3/4 tahun), bunga yang diperoleh adalah 3/4 x Rp480.000 = Rp360.000 sehingga saldo menjadi Rp6.360.000."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-garis-sudut",
    "number": "06",
    "title": "Bab 6: Garis dan Hubungan Sudut Geometri",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "compass",
    "summary": "Kuasai hubungan geometris garis lurus dan sudut: pelajari sifat sudut berpenyiku ($90^\\circ$), berpelurus ($180^\\circ$), bertolak belakang, serta pola pasangan sudut sehadap dan berseberangan ketika dua garis sejajar dipotong transversal.",
    "subtopics": [
      {
        "title": "1. Pasangan Sudut Berpenyiku, Berpelurus & Bertolak Belakang",
        "concept": "1. **Sudut Berpenyiku (Komplemen):** Dua sudut yang jumlah besarnya tepat $90^\\circ$:\n   $$\\angle A + \\angle B = 90^\\circ$$\n2. **Sudut Berpelurus (Suplemen):** Dua sudut bersebelahan pada satu garis lurus yang jumlahnya tepat $180^\\circ$:\n   $$\\angle A + \\angle B = 180^\\circ$$\n3. **Sudut Bertolak Belakang:** Dua sudut yang saling membelakangi akibat perpotongan dua garis lurus memiliki besar yang **persis sama**:\n   $$\\angle 1 = \\angle 3, \\quad \\angle 2 = \\angle 4$$",
        "quickTip": "💡 **Jembatan Keledai Huruf:** Sudut ber**P**enyiku membentuk siku-siku (tegak lurus, **$90^\\circ$**). Sudut ber**L**urus membentuk garis lurus datar (**$180^\\circ$**)!",
        "exampleProblem": "**Soal:** Besar pelurus dari suatu sudut $\\angle A$ adalah empat kali besar penyikunya. Tentukan besar sudut $\\angle A$ tersebut!\n\n**Langkah Pembahasan:**\n1. **Rumuskan Hubungan Aljabar:**\n   - Penyiku sudut $A = (90^\\circ - A)$\n   - Pelurus sudut $A = (180^\\circ - A)$\n2. **Susun Persamaan Sesuai Soal:**\n   $$180^\\circ - A = 4(90^\\circ - A)$$\n3. **Selesaikan Persamaan Linear:**\n   $$180^\\circ - A = 360^\\circ - 4A$$\n   $$-A + 4A = 360^\\circ - 180^\\circ$$\n   $$3A = 180^\\circ \\implies A = \\frac{180^\\circ}{3} = 60^\\circ$$\n\n**Jawaban:** Besar sudut $A$ adalah $60^\\circ$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-garis-sudut_0.svg",
          "title": "Geometri Sudut Berpenyiku, Berpelurus & Bertolak Belakang",
          "caption": "Visualisasi busur sudut penyiku (90 derajat), pelurus (180 derajat), serta kesamaan sudut bertolak belakang.",
          "guide": [
            "Panel kiri membandingkan sudut berpenyiku (membentuk siku-siku 90 derajat) dan sudut berpelurus (membentuk garis lurus 180 derajat).",
            "Pada soal aljabar sudut, ubah kata 'penyiku A' menjadi (90 - A) dan 'pelurus A' menjadi (180 - A).",
            "Panel kanan memperlihatkan dua garis lurus berpotongan: pasangan sudut bertolak belakang memiliki besar yang identik (<1 = <3 dan <2 = <4)."
          ]
        }
      },
      {
        "title": "2. Sudut pada Garis Sejajar Dipotong Garis Transversal",
        "concept": "Jika dua garis sejajar dipotong oleh satu garis transversal, terbentuk 8 sudut dengan hubungan istimewa:\n1. **Sudut Sehadap (Sama Besar):** Menghadap ke arah kompas yang sama (misal $\\angle 1 = \\angle 5$).\n2. **Sudut Berseberangan Dalam & Luar (Sama Besar):** Berseberangan posisi terhadap garis transversal (misal $\\angle 3 = \\angle 5$ dan $\\angle 1 = \\angle 7$).\n3. **Sudut Sepihak Dalam & Luar (Berjumlah $180^\\circ$):** Berada di sisi yang sama terhadap transversal (misal $\\angle 4 + \\angle 5 = 180^\\circ$).",
        "quickTip": "⚡ **Trik Huruf Z dan F:** Pasangan sudut berseberangan selalu membentuk **huruf Z** (sudut di ketiak Z besarnya sama). Pasangan sudut sehadap selalu membentuk **huruf F**!",
        "exampleProblem": "**Soal:** Dua garis sejajar dipotong garis transversal. Sudut dalam sepihak masing-masing besarnya $(3x + 15)^\\circ$ dan $(2x + 25)^\\circ$. Tentukan nilai $x$ dan besar sudut yang terkecil!\n\n**Langkah Pembahasan:**\n1. **Gunakan Sifat Sudut Sepihak (Jumlahnya $180^\\circ$):**\n   $$(3x + 15) + (2x + 25) = 180$$\n   $$5x + 40 = 180 \\implies 5x = 140 \\implies x = 28$$\n2. **Hitung Kedua Sudut:**\n   - Sudut 1: $3(28) + 15 = 84 + 15 = 99^\\circ$\n   - Sudut 2: $2(28) + 25 = 56 + 25 = 81^\\circ$\n\n**Jawaban:** Nilai $x = 28$ dan sudut terkecilnya adalah $81^\\circ$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-garis-sudut_1.svg",
          "title": "Peta 8 Sudut Transversal & Pola Huruf F-Z-C",
          "caption": "Kode warna kesamaan sudut lancip dan tumpul pada garis sejajar dipotong transversal beserta rumus sehadap, berseberangan, dan sepihak.",
          "guide": [
            "Panel kiri menunjukkan bahwa dari 8 sudut yang terbentuk, sebenarnya hanya ada 2 ukuran sudut: kelompok lancip (hijau, 81 derajat) dan kelompok tumpul (merah, 99 derajat).",
            "Gunakan jembatan keledai visual: huruf F untuk sudut Sehadap (sama besar), huruf Z untuk Dalam Berseberangan (sama besar), dan huruf C untuk Dalam Sepihak (jumlah 180 derajat).",
            "Panel kanan bawah menyelesaikan soal sudut dalam sepihak (3x+15) + (2x+25) = 180 hingga diperoleh x = 28 dan sudut terkecil 81 derajat."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-bangun-datar",
    "number": "07",
    "title": "Bab 7: Bangun Datar Segi Empat dan Segitiga",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "square",
    "summary": "Eksplorasi geometri dimensi dua: hitung keliling dan luas persegi, persegi panjang, trapesium, jajar genjang, belah ketupat, dan layang-layang, serta pahami teorema kekekalan jumlah sudut segitiga tepat 180 derajat.",
    "subtopics": [
      {
        "title": "1. Sifat, Keliling & Luas Aneka Segi Empat",
        "concept": "- **Persegi:** Keliling $K = 4s$, Luas $L = s^2$.\n- **Persegi Panjang:** Keliling $K = 2(p + l)$, Luas $L = p \\times l$.\n- **Jajar Genjang:** Luas $L = a \\times t$ *(alas tegak lurus tinggi)*.\n- **Belah Ketupat & Layang-Layang:** Diagonal berpotongan tegak lurus, Luas $L = \\frac{1}{2} \\times d_1 \\times d_2$.\n- **Trapesium:** Luas $L = \\frac{a + b}{2} \\times t$ *(jumlah sisi sejajar dikali tinggi dibagi dua)*.",
        "quickTip": "💡 **Awas Jebakan Tinggi Jajar Genjang:** Sisi miring jajar genjang BUKAN tinggi! Tinggi harus selalu berupa garis yang tegak lurus terhadap garis alas!",
        "exampleProblem": "**Soal:** Sebuah belah ketupat memiliki keliling 52 cm. Jika panjang salah satu diagonalnya adalah 10 cm, tentukan luas belah ketupat tersebut!\n\n**Langkah Pembahasan:**\n1. **Cari Panjang Sisi Belah Ketupat:**\n   $$s = \\frac{K}{4} = \\frac{52}{4} = 13 \\text{ cm}$$\n2. **Gunakan Teorema Pythagoras untuk Mencari Setengah Diagonal Kedua:**\n   Diagonal saling membagi dua tegak lurus: setengah diagonal pertama = $\\frac{10}{2} = 5 \\text{ cm}$.\n   $$(\\frac{1}{2}d_2)^2 = 13^2 - 5^2 = 169 - 25 = 144$$\n   $$\\frac{1}{2}d_2 = \\sqrt{144} = 12 \\implies d_2 = 24 \\text{ cm}$$\n3. **Hitung Luas:**\n   $$L = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 10 \\times 24 = 120 \\text{ cm}^2$$\n\n**Jawaban:** Luas belah ketupat adalah $120 \\text{ cm}^2$.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-bangun-datar_0.svg",
          "title": "Geometri Belah Ketupat & Peta Rumus 6 Keluarga Segi Empat",
          "caption": "Penerapan teorema Pythagoras pada perpotongan tegak lurus diagonal belah ketupat serta ringkasan rumus luas segi empat.",
          "guide": [
            "Panel kiri memvisualisasikan sifat diagonal belah ketupat yang saling membagi dua sama panjang dan tegak lurus, membentuk 4 segitiga siku-siku (5-12-13).",
            "Dari keliling 52 cm diperoleh sisi s = 13 cm, setengah diagonal kedua = 12 cm (d2 = 24 cm), sehingga luas L = 1/2 x 10 x 24 = 120 cm^2.",
            "Panel kanan merangkum rumus luas dan keliling keenam bangun segi empat beserta peringatan agar tidak menyamakan sisi miring dengan tinggi."
          ]
        }
      },
      {
        "title": "2. Teorema Sudut Segitiga & Luas Alas-Tinggi",
        "concept": "1. **Jumlah Sudut Segitiga:** Jumlah ketiga sudut dalam segitiga manapun di bidang datar SELALU tepat $180^\\circ$:\n   $$\\angle A + \\angle B + \\angle C = 180^\\circ$$\n2. **Teorema Sudut Luar Segitiga:** Besar sudut luar segitiga sama dengan jumlah dua sudut dalam yang tidak bersebelahan dengannya.\n3. **Luas Segitiga:** $L = \\frac{1}{2} \\times a \\times t$.",
        "quickTip": "⚡ **Trik Segitiga Sembarang:** Jika diketahui koordinat titik sudut atau tiga sisinya tanpa tinggi, dapat digunakan rumus Heron $L = \\sqrt{s(s-a)(s-b)(s-c)}$ dengan semi-perimeter $s = \\frac{a+b+c}{2}$!",
        "exampleProblem": "**Soal:** Pada segitiga $ABC$, besar $\\angle A = (2x + 10)^\\circ$, $\\angle B = (3x - 5)^\\circ$, dan $\\angle C = (x + 25)^\\circ$. Tentukan nilai $x$ dan jenis segitiga tersebut!\n\n**Langkah Pembahasan:**\n1. **Gunakan Teorema Jumlah Sudut Segitiga = $180^\\circ$:**\n   $$(2x + 10) + (3x - 5) + (x + 25) = 180$$\n   $$6x + 30 = 180 \\implies 6x = 150 \\implies x = 25$$\n2. **Hitung Ketiga Sudut:**\n   - $\\angle A = 2(25) + 10 = 60^\\circ$\n   - $\\angle B = 3(25) - 5 = 70^\\circ$\n   - $\\angle C = 25 + 25 = 50^\\circ$\n3. **Identifikasi Jenis Segitiga:**\n   Karena semua sudut $< 90^\\circ$ dan berbeda, ini adalah **Segitiga Lancip Sembarang**.\n\n**Jawaban:** Nilai $x = 25$, segitiga berjenis segitiga lancip.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-bangun-datar_1.svg",
          "title": "Teorema Sudut Segitiga 180 Derajat & Posisi Garis Tinggi",
          "caption": "Visualisasi jumlah sudut dalam segitiga, teorema sudut luar, serta letak garis tinggi pada segitiga lancip dan tumpul.",
          "guide": [
            "Panel kiri membuktikan bahwa jumlah ketiga sudut dalam segitiga selalu 180 derajat, dan sudut luar (<BCD = 130 derajat) sama dengan jumlah dua sudut dalam di seberangnya (60 + 70 derajat).",
            "Panel kanan memperlihatkan bahwa pada segitiga tumpul, garis tinggi (t) jatuh tegak lurus pada perpanjangan garis alas di luar segitiga.",
            "Namun rumus luas segitiga tetap berlaku universal: L = 1/2 x alas x tinggi (panjang alas hanya diukur pada sisi segitiga, tidak termasuk garis perpanjangannya)."
          ]
        }
      }
    ]
  },
  {
    "id": "k7-statistika",
    "number": "08",
    "title": "Bab 8: Statistika & Penyajian Data",
    "badge": "Fase D • SMP Kelas 7",
    "icon": "bar-chart-2",
    "summary": "Dasar literasi data abad ke-21: pelajari teknik pengumpulan data, membaca tabel distribusi frekuensi, mengonstruksi diagram batang dan garis, hingga menghitung proporsi sudut derajat dan persentase diagram lingkaran.",
    "subtopics": [
      {
        "title": "1. Konstruksi Tabel Frekuensi & Diagram Batang-Garis",
        "concept": "- **Data Diskrit:** Data hasil membilang (jumlah anak, jumlah motor).\n- **Data Kontinu:** Data hasil pengukuran (tinggi badan, berat badan, waktu).\n- **Diagram Batang:** Cocok menyajikan data kategori terpisah.\n- **Diagram Garis:** Ideal menyajikan data berkala (*time series*) yang menunjukkan tren perubahan dari waktu ke waktu (misal kenaikan suhu tiap jam).",
        "quickTip": "💡 **Prinsip Membaca Grafik:** Selalu perhatikan skala pada sumbu vertikal ($Y$). Apakah skala dimulai dari 0 atau terpotong? Skala yang terpotong sering menimbulkan ilusi visual bahwa perbedaan data tampak sangat drastis!",
        "exampleProblem": "**Soal:** Data nilai ulangan harian matematika sekelompok siswa: 70, 80, 80, 90, 70, 100, 80, 70, 90, 80. Berapakah frekuensi siswa yang mendapat nilai di atas 75?\n\n**Langkah Pembahasan:**\n1. **Susun Tabel Frekuensi:**\n   - Nilai 70: 3 siswa\n   - Nilai 80: 4 siswa\n   - Nilai 90: 2 siswa\n   - Nilai 100: 1 siswa\n2. **Hitung Frekuensi Nilai di Atas 75 (yaitu nilai 80, 90, 100):**\n   $$\\text{Banyak Siswa} = 4 + 2 + 1 = 7 \\text{ siswa}$$\n\n**Jawaban:** Ada 7 siswa yang mendapat nilai di atas 75.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-statistika_0.svg",
          "title": "Distribusi Frekuensi Diagram Batang & Tren Waktu Diagram Garis",
          "caption": "Penyajian data kategori nilai ulangan dengan diagram batang serta tren pertumbuhan berkala dengan diagram garis.",
          "guide": [
            "Panel kiri mengubah data mentah 10 nilai ulangan menjadi diagram batang terurut: siswa bernilai di atas 75 mencakup nilai 80 (4), 90 (2), dan 100 (1) = 7 siswa.",
            "Diagram batang sangat ideal untuk membandingkan frekuensi antar kategori diskrit yang terpisah.",
            "Panel kanan menunjukkan fungsi utama diagram garis: melacak tren perubahan data dari waktu ke waktu (time series) beserta kemiringan lonjakan tertinggi."
          ]
        }
      },
      {
        "title": "2. Diagram Lingkaran: Sudut Derajat & Persentase",
        "concept": "Diagram lingkaran membagi satu lingkaran utuh menjadi beberapa sektor juring proporsional.\n\n**Rumus Konversi Juring Lingkaran:**\n- **Dalam Bentuk Sudut ($360^\\circ$):**\n  $$\\text{Sudut Juring} = \\frac{\\text{Frekuensi Kategori}}{\\text{Total Data}} \\times 360^\\circ$$\n- **Dalam Bentuk Persentase ($100\\%$):**\n  $$\\text{Persentase} = \\frac{\\text{Frekuensi Kategori}}{\\text{Total Data}} \\times 100\\%$$\n- **Mencari Jumlah Data dari Sudut:**\n  $$\\text{Frekuensi} = \\frac{\\text{Sudut}}{360^\\circ} \\times \\text{Total Data}$$",
        "quickTip": "⚡ **Trik Cepat Sudut Siku-Siku:** Sudut siku-siku $90^\\circ$ pada diagram lingkaran selalu setara dengan tepat seperempat lingkaran ($25\\%$ atau $\\frac{1}{4}$ dari total data)!",
        "exampleProblem": "**Soal:** Suatu sekolah memiliki 360 siswa yang mengikuti ekstrakurikuler. Diagram lingkaran menunjukkan: Futsal $120^\\circ$, Basket $90^\\circ$, Musik $60^\\circ$, dan sisanya Robotik. Berapa banyak siswa yang mengikuti ekstrakurikuler Robotik?\n\n**Langkah Pembahasan:**\n1. **Hitung Sudut Juring Robotik:**\n   $$\\text{Sudut Robotik} = 360^\\circ - (120^\\circ + 90^\\circ + 60^\\circ) = 360^\\circ - 270^\\circ = 90^\\circ$$\n2. **Hitung Jumlah Siswa Robotik:**\n   $$\\text{Jumlah Siswa} = \\frac{90^\\circ}{360^\\circ} \\times 360 = \\frac{1}{4} \\times 360 = 90 \\text{ siswa}$$\n\n**Jawaban:** Banyak siswa yang mengikuti ekstrakurikuler Robotik adalah 90 siswa.",
        "visual": {
          "image": "assets/materi/mat_smp/k7-statistika_1.svg",
          "title": "Proporsi Juring Diagram Lingkaran: Sudut 360 Derajat & Persentase 100%",
          "caption": "Pembagian juring proporsional diagram lingkaran ekstrakurikuler serta rumus konversi antara sudut derajat, persen, dan jumlah orang.",
          "guide": [
            "Panel kiri memvisualisasikan satu lingkaran utuh sebagai 360 derajat atau 100% populasi (360 siswa).",
            "Perhatikan tanda siku-siku pada juring Basket dan Robotik: sudut 90 derajat selalu mewakili tepat 1/4 lingkaran atau 25% dari total data.",
            "Panel kanan merangkum langkah mencari porsi kategori yang belum diketahui dengan mengurangkan total sudut dari 360 derajat."
          ]
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.KURMER_KELAS7_DATA = KURMER_KELAS7_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KURMER_KELAS7_DATA;
}
