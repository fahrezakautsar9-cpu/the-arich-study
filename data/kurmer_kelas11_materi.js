/**
 * KURIKULUM MERDEKA MATEMATIKA & FISIKA KELAS 11 (FASE F)
 * Dilengkapi Visualisasi Konsep & Bedah Diagram Multi-Panel
 */

const KURMER_KELAS11_DATA = [
  {
    "id": "fungsi",
    "title": "Bab 1: Komposisi Fungsi dan Fungsi Invers",
    "badge": "Fase F • Wajib",
    "icon": "cpu",
    "summary": "Pelajari bagaimana dua mesin fungsi dapat digabungkan secara berantai dan bagaimana membalikkan operasi matematika secara presisi. Kuasai konsep daerah asal (domain alami), sifat komposisi non-komutatif, hingga trik kilat invers pecahan aljabar dalam hitungan detik!",
    "subtopics": [
      {
        "title": "1. Konsep & Syarat Komposisi Fungsi $(f \\circ g)(x)$",
        "concept": "Fungsi dalam matematika bekerja layaknya mesin komputasi: menerima input $x$, memprosesnya dengan formula tertentu, lalu mengeluarkan output $y = f(x)$. Ketika dua fungsi disambungkan secara seri sehingga luaran dari fungsi pertama $g(x)$ menjadi masukan bagi fungsi kedua $f(x)$, terbentuklah **fungsi komposisi**:\n\n$$(f \\circ g)(x) = f(g(x))$$\n\n**Syarat Eksistensi Komposisi:**\nOperasi komposisi $(f \\circ g)(x)$ hanya sah dan terdefinisi jika irisan antara daerah hasil (range) dari fungsi dalam $g(x)$ dan daerah asal (domain) dari fungsi luar $f(x)$ bukan himpunan kosong:\n$$R_g \\cap D_f \\ne \\emptyset$$\n\n**Sifat-sifat Penting Komposisi Fungsi:**\n1. **Tidak Bersifat Komutatif:** Urutan penggabungan sangat menentukan hasil akhir, sehingga secara umum:\n   $$(f \\circ g)(x) \\ne (g \\circ f)(x)$$\n2. **Bersifat Asosiatif:** Untuk tiga fungsi berurutan, pengelompokan tidak mengubah hasil:\n   $$((f \\circ g) \\circ h)(x) = (f \\circ (g \\circ h))(x)$$\n3. **Elemen Identitas:** Terdapat fungsi identitas $I(x) = x$ yang mempertahankan nilai asli fungsi:\n   $$(f \\circ I)(x) = (I \\circ f)(x) = f(x)$$",
        "quickTip": "💡 **Trik Kilat Mesin Berlapis (Kupas dari Dalam):** Selalu kerjakan fungsi dari lapisan terdalam! Tuliskan kerangka fungsi luar $f(\\dots)$, lalu ganti setiap variabel $x$ pada $f(x)$ dengan satu paket kurung utuh berisi seluruh rumus $g(x)$. Jangan mengalikan fungsi secara aljabar biasa karena komposisi adalah proses substitusi domain, bukan perkalian antar-fungsi!",
        "exampleProblem": "**Soal:** Diketahui fungsi $f(x) = 2x - 5$ dan $g(x) = x^2 + 3x - 4$. Tentukan:\na) Rumus fungsi komposisi $(f \\circ g)(x)$\nb) Rumus fungsi komposisi $(g \\circ f)(x)$\nc) Nilai dari $(f \\circ g)(3)$\n\n**Langkah Pembahasan:**\n1. **Menentukan $(f \\circ g)(x)$:**\n   $$(f \\circ g)(x) = f(g(x)) = f(x^2 + 3x - 4)$$\n   Substitusikan $(x^2 + 3x - 4)$ ke setiap variabel $x$ pada $f(x) = 2x - 5$:\n   $$(f \\circ g)(x) = 2(x^2 + 3x - 4) - 5 = 2x^2 + 6x - 8 - 5 = 2x^2 + 6x - 13$$\n\n2. **Menentukan $(g \\circ f)(x)$:**\n   $$(g \\circ f)(x) = g(f(x)) = g(2x - 5)$$\n   Substitusikan $(2x - 5)$ ke setiap variabel $x$ pada $g(x) = x^2 + 3x - 4$:\n   $$(g \\circ f)(x) = (2x - 5)^2 + 3(2x - 5) - 4$$\n   $$(g \\circ f)(x) = (4x^2 - 20x + 25) + (6x - 15) - 4 = 4x^2 - 14x + 6$$\n   *Perhatikan bahwa $(f \\circ g)(x) \\ne (g \\circ f)(x)$, membuktikan sifat non-komutatif!*\n\n3. **Menghitung Nilai $(f \\circ g)(3)$:**\n   Substitusikan langsung $x = 3$ ke dalam rumus hasil akhir $(f \\circ g)(x)$:\n   $$(f \\circ g)(3) = 2(3)^2 + 6(3) - 13 = 2(9) + 18 - 13 = 18 + 18 - 13 = 23$$\n   *(Alternatif dari dalam: $g(3) = 3^2 + 3(3) - 4 = 14 \\implies f(14) = 2(14) - 5 = 23$. Hasilnya identik!)*",
        "visual": {
          "image": "assets/materi/mat_sma/fungsi_0.svg",
          "title": "Alur Pemetaan Komposisi $(f \\circ g)(x)$ & Sifat Tidak Komutatif",
          "caption": "Diagram pemetaan berantai dari himpunan A ke B ke C serta perbandingan kurva (f o g)(x) dan (g o f)(x).",
          "guide": [
            "Pada Panel A, $(f \\circ g)(x) = f(g(x))$ berarti input $x$ diproses oleh fungsi $g$ terlebih dahulu, lalu hasilnya menjadi input bagi fungsi $f$.",
            "Syarat mutlak agar $(f \\circ g)$ terdefinisi adalah irisan daerah hasil $g$ dan daerah asal $f$ tidak kosong ($R_g \\cap D_f \\ne \\emptyset$).",
            "Pada Panel B, kurva hijau $(f \\circ g)(x) = (x+2)^2$ dan kurva merah $(g \\circ f)(x) = x^2+2$ berbeda jauh, membuktikan komposisi fungsi tidak komutatif."
          ]
        }
      },
      {
        "title": "2. Daerah Asal Alami (Domain) & Daerah Hasil (Range)",
        "concept": "Daerah asal alami (*natural domain*) dinotasikan $D_f$, yaitu himpunan seluruh bilangan real $x$ yang menyebabkan nilai fungsi $f(x)$ terdefinisi dan menghasilkan nilai riil yang valid.\n\nDalam ranah matematika aljabar sekolah menengah, terdapat **Dua Syarat Pantangan Keramat** yang wajib dipenuhi:\n1. **Syarat Pecahan Aljabar (Penyebut Tak Boleh Nol):**\n   $$f(x) = \\frac{u(x)}{v(x)} \\implies \\text{Syarat: } v(x) \\ne 0$$\n2. **Syarat Bentuk Akar Berpangkat Genap (Radikan Tak Boleh Negatif):**\n   $$f(x) = \\sqrt{h(x)} \\implies \\text{Syarat: } h(x) \\ge 0$$\n3. **Kombinasi Akar pada Posisi Penyebut:**\n   $$f(x) = \\frac{1}{\\sqrt{h(x)}} \\implies \\text{Syarat: } h(x) > 0$$\n\n**Domain Komposisi Fungsi:**\nDaerah asal dari komposisi $(f \\circ g)(x)$ adalah irisan dari domain $g$ dengan nilai $x$ yang memetakan output $g(x)$ masuk ke domain $f$:\n$$D_{f \\circ g} = \\{x \\in D_g \\mid g(x) \\in D_f\\}$$",
        "quickTip": "💡 **Trik Pantangan Radar:** Setiap melihat rumus fungsi apapun di lembar ujian, pasang radar hanya pada dua elemen: apakah ada **Pecahan**? dan apakah ada **Akar Genap**? Jika tidak ada pecahan dan tidak ada bentuk akar (misal suku banyak, fungsi linear, fungsi kuadrat biasa), daerah asalnya pasti seluruh bilangan real: $D_f = \\{x \\mid x \\in \\mathbb{R}\\}$!",
        "exampleProblem": "**Soal:** Tentukan daerah asal alami ($D_f$) dari fungsi rasional-irasional berikut:\n$$f(x) = \\sqrt{\\frac{2x - 6}{x + 5}}$$\n\n**Langkah Pembahasan:**\n1. **Analisis Syarat Keberadaan:**\n   Karena fungsi berada di bawah tanda akar genap $\\sqrt{\\dots}$, nilai di dalam akar harus tak-negatif:\n   $$\\frac{2x - 6}{x + 5} \\ge 0$$\n   Dengan syarat penyebut pecahan tidak boleh nol: $x + 5 \\ne 0 \\implies x \\ne -5$.\n\n2. **Menentukan Pembuat Nol (Titik Kritis):**\n   - Pembilang: $2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$ (bulatan penuh pada garis bilangan).\n   - Penyebut: $x + 5 = 0 \\implies x = -5$ (bulatan kosong pada garis bilangan karena penyebut $\\ne 0$).\n\n3. **Uji Tanda Interval pada Garis Bilangan:**\n   - Interval $x < -5$ (misal $x = -6$): $\\frac{2(-6)-6}{-6+5} = \\frac{-18}{-1} = +18 > 0$ **(Positif +)**\n   - Interval $-5 < x < 3$ (misal $x = 0$): $\\frac{2(0)-6}{0+5} = \\frac{-6}{5} < 0$ **(Negatif -)**\n   - Interval $x > 3$ (misal $x = 4$): $\\frac{2(4)-6}{4+5} = \\frac{2}{9} > 0$ **(Positif +)**\n\n4. **Menentukan Himpunan Penyelesaian:**\n   Karena pertidaksamaan mensyaratkan $\\ge 0$ (positif atau nol), maka interval penyelesaiannya adalah:\n   $$D_f = \\{x \\in \\mathbb{R} \\mid x < -5 \\text{ atau } x \\ge 3\\}$$",
        "visual": {
          "image": "assets/materi/mat_sma/fungsi_1.svg",
          "title": "Batas Domain Fungsi Irasional (Akar) & Asimtot Fungsi Rasional (Pecahan)",
          "caption": "Visualisasi daerah asal dan hasil pada fungsi akar kuadrat serta garis asimtot tegak dan datar pada fungsi pecahan linear.",
          "guide": [
            "Pada Panel A, ekspresi di dalam akar pangkat genap wajib bernilai non-negatif ($x - 2 \\ge 0 \\implies x \\ge 2$), menghasilkan titik ujung $(2, 1)$.",
            "Pada Panel B, fungsi rasional $f(x) = (ax+b)/(cx+d)$ memiliki asimtot tegak di pembuat nol penyebut ($x = -d/c = 3$) dan asimtot datar di rasio koefisien $x$ ($y = a/c = 2$)."
          ]
        }
      },
      {
        "title": "3. Fungsi Invers & Trik Kilat Pecahan Linear",
        "concept": "Fungsi invers $f^{-1}$ adalah fungsi kebalikan yang membalikkan pemetaan: jika $f$ memetakan $x$ ke $y$, maka $f^{-1}$ memetakan nilai $y$ kembali persis ke nilai $x$ semula:\n\n$$f(x) = y \\iff f^{-1}(y) = x$$\n\n**Syarat Mutlak Fungsi Memiliki Invers:**\nFungsi $f$ harus berupa **fungsi bijektif** (korespondensi satu-satu sekaligus pada):\n1. **Injektif (Satu-satu):** Setiap nilai $y$ hanya berasal dari satu nilai $x$. Memenuhi uji garis horizontal (*Horizontal Line Test*): tidak ada garis mendatar yang memotong grafik di lebih dari 1 titik.\n2. **Surjektif (Pada):** Seluruh elemen pada kodomain terpetakan oleh domain ($R_f = \\text{Kodomain}$).\n\n**Sifat Dasar Hubungan Invers:**\n$$(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x$$\nSecara geometri, grafik fungsi invers $y = f^{-1}(x)$ merupakan hasil pencerminan (*refleksi*) grafik $y = f(x)$ terhadap garis diagonal cermin $y = x$.",
        "quickTip": "⚡ **Rumus Sakti Invers Pecahan Linear:**\\nJika $f(x) = \\frac{ax + b}{cx + d}$, maka rumus inversnya dapat dicari dalam 1 detik dengan menukar posisi diagonal utama ($a$ dan $d$) lalu mengalikan keduanya dengan tanda minus $(-)$:\\n\\n$$f^{-1}(x) = \\frac{-dx + b}{cx - a}, \\quad x \\ne \\frac{a}{c}$$\\n\\n*Contoh instan:* $f(x) = \\frac{4x - 1}{2x + 7} \\implies f^{-1}(x) = \\frac{-7x - 1}{2x - 4}$.",
        "exampleProblem": "**Soal:** Tentukan fungsi invers dari $f(x) = \\frac{3x + 2}{2x - 5}$ untuk $x \\ne \\frac{5}{2}$, kemudian hitung nilai dari $f^{-1}(4)$!\n\n**Langkah Pembahasan:**\n1. **Penurunan Formal (Metode Aljabar Murni):**\n   Misalkan $y = f(x)$:\n   $$y = \\frac{3x + 2}{2x - 5}$$\n   Kalikan silang kedua ruas:\n   $$y(2x - 5) = 3x + 2 \\implies 2xy - 5y = 3x + 2$$\n   Kumpulkan semua suku yang mengandung variabel $x$ ke ruas kiri:\n   $$2xy - 3x = 5y + 2 \\implies x(2y - 3) = 5y + 2$$\n   Isolasi variabel $x$:\n   $$x = \\frac{5y + 2}{2y - 3}$$\n   Ganti variabel $x$ dengan $f^{-1}(x)$ dan $y$ menjadi $x$:\n   $$f^{-1}(x) = \\frac{5x + 2}{2x - 3}, \\quad x \\ne \\frac{3}{2}$$\n\n2. **Verifikasi Menggunakan Rumus Sakti:**\n   Identifikasi: $a = 3, b = 2, c = 2, d = -5$.\n   $$f^{-1}(x) = \\frac{-(-5)x + 2}{2x - 3} = \\frac{5x + 2}{2x - 3} \\quad \\text{(Sangat cepat dan akurat!)}$$\n\n3. **Menghitung Nilai $f^{-1}(4)$:**\n   Substitusikan $x = 4$:\n   $$f^{-1}(4) = \\frac{5(4) + 2}{2(4) - 3} = \\frac{20 + 2}{8 - 3} = \\frac{22}{5} = 4{,}4$$",
        "visual": {
          "image": "assets/materi/mat_sma/fungsi_2.svg",
          "title": "Simetri Pencerminan Fungsi Invers & Rumus Cepat Pecahan Linear",
          "caption": "Pertukaran koordinat (x,y) menjadi (y,x) terhadap cermin garis y = x serta skema pertukaran diagonal a dan d pada fungsi pecahan.",
          "guide": [
            "Pada Panel A, menginverskan fungsi secara geometris berarti mencerminkan kurva terhadap garis $y = x$, sehingga titik $(2, 5)$ pada $f$ berpindah ke $(5, 2)$ pada $f^{-1}$.",
            "Pada Panel B, untuk bentuk pecahan linear $f(x) = (ax+b)/(cx+d)$, cukup tukar posisi $a$ dan $d$ lalu kalikan keduanya dengan tanda negatif sedangkan $b$ dan $c$ tetap diam."
          ]
        }
      },
      {
        "title": "4. Invers Komposisi & Rekonstruksi Aljabar Fungsi",
        "concept": "Saat membalikkan gabungan beberapa operasi fungsi berurutan, urutan pelepasan fungsinya harus dibalik dari yang paling luar ke yang paling dalam:\n\n$$(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$$\n$$(g \\circ f)^{-1}(x) = (f^{-1} \\circ g^{-1})(x)$$\n\n**Rekonstruksi Aljabar Fungsi (Menemukan Fungsi Pembentuk):**\nTerdapat dua tipe utama pencarian fungsi pembentuk:\n1. **Menentukan Fungsi Luar $f(x)$ jika $(f \\circ g)(x)$ dan $g(x)$ diketahui:**\n   Lakukan teknik substitusi variabel boneka (*dummy variable*) dengan memisalkan $u = g(x)$, lalu cari invers aljabarnya $x = g^{-1}(u)$ dan masukkan ke persamaan.\n2. **Menentukan Fungsi Dalam $g(x)$ jika $(f \\circ g)(x)$ dan $f(x)$ diketahui:**\n   Masukkan bentuk $g(x)$ utuh langsung ke dalam formula luar $f(\\dots)$ lalu selesaikan persamaannya secara aljabar.",
        "quickTip": "💡 **Trik Invers Ruas (Pindah Sisi):**\\nUntuk memindahkan fungsi dari satu sisi tanda sama dengan ke sisi lainnya, gunakan operasi invers:\\n$$f(g(x)) = h(x) \\implies g(x) = f^{-1}(h(x))$$\\nJika di soal ulangan ditanyakan $f(5)$ sementara persamaannya $f(2x - 1) = x^2 + 7$, jangan repot mencari rumus umum $f(x)$! Cukup samakan bagian dalam kurung: $2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$. Lalu langsung masukkan $x = 3$: $f(5) = 3^2 + 7 = 16$!",
        "exampleProblem": "**Soal:** Diketahui rumus fungsi $g(x) = 2x - 1$ dan fungsi komposisi $(f \\circ g)(x) = 4x^2 - 10x + 9$.\na) Tentukan rumus fungsi tunggal $f(x)$\nb) Tentukan nilai dari $f(5)$\n\n**Langkah Pembahasan:**\n1. **Langkah Pemisalan Variabel Boneka:**\n   Misalkan $u = g(x) = 2x - 1$.\n   Nyatakan $x$ dalam fungsi variabel $u$:\n   $$u + 1 = 2x \\implies x = \\frac{u + 1}{2}$$\n\n2. **Substitusi ke Komposisi $(f \\circ g)(x)$:**\n   $$f(g(x)) = 4x^2 - 10x + 9$$\n   $$f(u) = 4\\left(\\frac{u + 1}{2}\\right)^2 - 10\\left(\\frac{u + 1}{2}\\right) + 9$$\n   Sederhanakan kuadrat pecahan:\n   $$f(u) = 4 \\cdot \\frac{u^2 + 2u + 1}{4} - 5(u + 1) + 9$$\n   $$f(u) = (u^2 + 2u + 1) - 5u - 5 + 9$$\n   $$f(u) = u^2 - 3u + 5$$\n\n3. **Ganti Kembali Variabel $u$ Menjadi $x$:**\n   $$f(x) = x^2 - 3x + 5$$\n\n4. **Menghitung Nilai $f(5)$:**\n   Substitusikan $x = 5$:\n   $$f(5) = 5^2 - 3(5) + 5 = 25 - 15 + 5 = 15$$",
        "visual": {
          "image": "assets/materi/mat_sma/fungsi_3.svg",
          "title": "Alur Balik Invers Komposisi & Dua Strategi Rekonstruksi Fungsi",
          "caption": "Analogi pembukaan urutan fungsi dari belakang ke depan pada (f o g)^(-1) = g^(-1) o f^(-1) serta panduan mencari fungsi pembentuk.",
          "guide": [
            "Pada Panel A, membalikkan komposisi $(f \\circ g)$ mengharuskan kita membalik urutan operasinya: $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$.",
            "Pada Panel B, jika fungsi di dalam kurung $g(x)$ diketahui dan kita mencari $f(x)$, gunakan permisalan $u = g(x)$ (substitusi invers)."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "lingkaran",
    "title": "Bab 2: Geometri Analitik Lingkaran & Garis Singgung",
    "badge": "Fase F • Tingkat Lanjut",
    "icon": "circle",
    "summary": "Eksplorasi geometri analitik kurva lingkaran dari bentuk standar hingga persamaan umum berderajat dua. Kuasai posisi titik & garis terhadap lingkaran, serta rumus sakti garis singgung dengan gradien maupun titik singgung!",
    "subtopics": [
      {
        "title": "1. Persamaan Lingkaran Pusat $(0,0)$ dan $(a,b)$",
        "concept": "Lingkaran secara geometri analitik didefinisikan sebagai tempat kedudukan (*lokus*) seluruh titik $(x, y)$ pada bidang Cartesius yang berjarak sama konstan (jari-jari $r$) terhadap satu titik acuan tetap (titik pusat).\n\nBerdasarkan formulasi jarak Euclidean (Teorema Pythagoras):\n1. **Lingkaran Berpusat di Titik Asal $O(0,0)$:**\n   $$x^2 + y^2 = r^2$$\n2. **Bentuk Baku (Kanonik) Pusat di $P(a,b)$:**\n   $$(x - a)^2 + (y - b)^2 = r^2$$\n3. **Bentuk Umum Lingkaran Berderajat Dua:**\n   $$x^2 + y^2 + Ax + By + C = 0$$\n   Hubungan antara koefisien bentuk umum dengan parameter geometrisnya:\n   - **Titik Pusat:** $P(a, b) = \\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$\n   - **Jari-jari:** $r = \\sqrt{\\left(-\\frac{A}{2}\\right)^2 + \\left(-\\frac{B}{2}\\right)^2 - C} = \\sqrt{a^2 + b^2 - C}$\n   - Kondisi Realitas: jika $a^2 + b^2 - C > 0$ (lingkaran nyata), jika $= 0$ (lingkaran titik berjarak nol), jika $< 0$ (lingkaran imajiner).",
        "quickTip": "⚡ **Trik 'Bagi Minus Dua' Pusat & Jari-jari:**\\nJika menjumpai persamaan umum $x^2 + y^2 + Ax + By + C = 0$:\\n1. Pusat langsung: $(-A/2, -B/2)$.\\n2. Kuadratkan masing-masing koordinat pusat itu, jumlahkan, lalu kurangkan dengan konstanta bebas $C$, kemudian tarik akar untuk mendapatkan $r$:\\n$$r = \\sqrt{a^2 + b^2 - C}$$",
        "exampleProblem": "**Soal:** Diketahui persamaan lingkaran $L \\equiv x^2 + y^2 - 8x + 6y - 11 = 0$.\na) Tentukan koordinat titik pusat dan panjang jari-jari lingkaran tersebut!\nb) Selidiki kedudukan titik $K(7, -2)$ terhadap lingkaran $L$!\n\n**Langkah Pembahasan:**\n1. **Menentukan Pusat dan Jari-jari:**\n   Dari $x^2 + y^2 - 8x + 6y - 11 = 0$, diperoleh $A = -8$, $B = 6$, $C = -11$.\n   - Koordinat Pusat $P(a, b)$:\n     $$a = -\\frac{-8}{2} = 4, \\quad b = -\\frac{6}{2} = -3 \\implies P(4, -3)$$\n   - Jari-jari $r$:\n     $$r = \\sqrt{4^2 + (-3)^2 - (-11)} = \\sqrt{16 + 9 + 11} = \\sqrt{36} = 6$$\n\n2. **Menyelidiki Kedudukan Titik $K(7, -2)$:**\n   Substitusikan koordinat titik $(7, -2)$ ke dalam ekspresi persamaan lingkaran (Nilai Kuasa Titik $K$):\n   $$K = (7)^2 + (-2)^2 - 8(7) + 6(-2) - 11$$\n   $$K = 49 + 4 - 56 - 12 - 11 = 53 - 79 = -26$$\n   - Karena $K = -26 < 0$ (negatif), maka titik $K(7, -2)$ berada **di dalam lingkaran**.\n   *(Catatan: jika $K = 0$ titik pada lingkaran, jika $K > 0$ titik di luar lingkaran).*",
        "visual": {
          "image": "assets/materi/mat_sma/lingkaran_0.svg",
          "title": "Persamaan Lingkaran Berpusat di P(a,b) & Uji Kuasa Titik",
          "caption": "Penurunan persamaan lingkaran dari teorema Pythagoras jarak titik ke pusat serta klasifikasi posisi titik di dalam, pada, atau di luar lingkaran.",
          "guide": [
            "Pada Panel A, lingkaran adalah tempat kedudukan titik $(x,y)$ yang berjarak konstan $r$ dari pusat $P(a,b)$, sehingga menurut Pythagoras berlaku $(x-a)^2 + (y-b)^2 = r^2$.",
            "Pada Panel B, substitusikan titik $(x_1, y_1)$ ke persamaan lingkaran: hasil $< r^2$ berarti di dalam, $= r^2$ tepat pada keliling, dan $> r^2$ di luar lingkaran."
          ]
        }
      },
      {
        "title": "2. Kedudukan Garis terhadap Lingkaran & Jarak Tegak Lurus",
        "concept": "Secara geometri analitik, hubungan posisi antara sebuah garis lurus $g$ dan lingkaran $L$ dapat ditentukan melalui dua pendekatan: nilai diskriminan $D$ atau perbandingan jarak tegak lurus $d$ dari pusat lingkaran ke garis terhadap jari-jari $r$.\n\n**Kriteria Kedudukan Garis:**\n1. **Memotong Lingkaran di Dua Titik Berbeda:** $d < r \\iff D > 0$\n2. **Menyinggung Lingkaran di Tepat Satu Titik:** $d = r \\iff D = 0$\n3. **Saling Lepas (Tidak Memotong & Tidak Menyinggung):** $d > r \\iff D < 0$\n\n**Rumus Jarak Tegak Lurus Titik Pusat $P(x_0, y_0)$ ke Garis $Ax + By + C = 0$:**\n$$d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$$\nPendekatan menggunakan jarak $d$ jauh lebih singkat dan terhindar dari pemfaktoran persamaan kuadrat yang rumit.",
        "quickTip": "💡 **Trik 'Hindari Diskriminan Rumit':** Menggunakan rumus jarak titik pusat ke garis $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$ terbukti 3 kali lebih cepat dan meminimalkan kesalahan hitung aljabar dibandingkan dengan metode substitusi $y = mx + c$ lalu menghitung $D = b^2 - 4ac$!",
        "exampleProblem": "**Soal:** Selidiki kedudukan garis lurus $g \\equiv 3x + 4y - 12 = 0$ terhadap lingkaran $L \\equiv x^2 + y^2 = 9$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data Lingkaran:**\n   Lingkaran $x^2 + y^2 = 9$ berpusat di titik asal $O(0, 0)$ dan memiliki jari-jari $r = \\sqrt{9} = 3$.\n\n2. **Menghitung Jarak Pusat $(0,0)$ ke Garis $3x + 4y - 12 = 0$:**\n   Gunakan rumus jarak titik ke garis dengan $A = 3$, $B = 4$, $C = -12$, $x_0 = 0$, $y_0 = 0$:\n   $$d = \\frac{|3(0) + 4(0) - 12|}{\\sqrt{3^2 + 4^2}} = \\frac{|-12|}{\\sqrt{9 + 16}} = \\frac{12}{\\sqrt{25}} = \\frac{12}{5} = 2{,}4$$\n\n3. **Bandingkan Jarak $d$ dengan Jari-jari $r$:**\n   Diperoleh $d = 2{,}4$ dan $r = 3$.\n   Karena $d < r$ ($2{,}4 < 3$), maka garis $3x + 4y - 12 = 0$ **memotong lingkaran di dua titik berlainan**.",
        "visual": {
          "image": "assets/materi/mat_sma/lingkaran_1.svg",
          "title": "Kedudukan Garis terhadap Lingkaran & Rumus Panjang Tali Busur",
          "caption": "Klasifikasi garis memotong, menyinggung, atau lepas berdasarkan jarak tegak lurus d terhadap jari-jari r serta segitiga siku-siku tali busur.",
          "guide": [
            "Pada Panel A, garis menyinggung lingkaran tepat di satu titik jika dan hanya jika diskriminan persamaan gabungan $D = 0$ atau jarak pusat ke garis sama dengan jari-jari ($d = r$).",
            "Pada Panel B, jarak tegak lurus $d$, setengah tali busur, dan jari-jari $r$ membentuk segitiga siku-siku sehingga panjang tali busur $AB = 2\\sqrt{r^2 - d^2}$."
          ]
        }
      },
      {
        "title": "3. Garis Singgung Melalui Titik pada Lingkaran (Metode Bagi Adil)",
        "concept": "Garis singgung lingkaran adalah garis lurus yang menyentuh lingkaran tepat di satu titik persekutuan dan posisinya selalu tegak lurus sempurna terhadap jari-jari yang menuju titik singgung tersebut.\n\nJika titik $T(x_1, y_1)$ terletak **pada keliling lingkaran**, persamaan garis singgung dapat dibentuk dengan **Kaidah Bagi Adil (*Split Form / Kaidah Joachimsthal*)**:\n- Ubah suku $x^2$ menjadi $x_1 \\cdot x$\n- Ubah suku $y^2$ menjadi $y_1 \\cdot y$\n- Ubah suku derajat satu $x$ menjadi $\\frac{x + x_1}{2}$\n- Ubah suku derajat satu $y$ menjadi $\\frac{y + y_1}{2}$\n\n**Formulasi Garis Singgung di Titik $(x_1, y_1)$:**\n1. **Pada Lingkaran $x^2 + y^2 = r^2$:**\n   $$x_1 x + y_1 y = r^2$$\n2. **Pada Lingkaran $(x - a)^2 + (y - b)^2 = r^2$:**\n   $$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$\n3. **Pada Lingkaran $x^2 + y^2 + Ax + By + C = 0$:**\n   $$x_1 x + y_1 y + \\frac{A}{2}(x + x_1) + \\frac{B}{2}(y + y_1) + C = 0$$",
        "quickTip": "⚡ **Trik Metode Bagi Adil Tanpa Menjabarkan:** Jangan pernah menjabarkan bentuk kurung kuadrat $(x - a)^2$! Tuliskan saja menjadi dua faktor kembar $(x_1 - a)(x - a)$, lalu ganti salah satu nilai $(x_1, y_1)$ dengan koordinat titik singgung. Persamaan garis singgung akan langsung terurai rapi dalam 2 baris!",
        "exampleProblem": "**Soal:** Tentukan persamaan garis singgung pada lingkaran $(x - 3)^2 + (y + 2)^2 = 25$ di titik $T(7, 1)$!\n\n**Langkah Pembahasan:**\n1. **Uji Validitas Letak Titik $T(7, 1)$:**\n   Substitusi titik ke ruas kiri persamaan:\n   $$(7 - 3)^2 + (1 + 2)^2 = 4^2 + 3^2 = 16 + 9 = 25$$\n   Karena hasilnya tepat sama dengan $r^2 = 25$, titik $T$ sah terletak **pada lingkaran**.\n\n2. **Terapkan Kaidah Bagi Adil Bentuk Kanonik:**\n   $$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$\n   Masukkan $x_1 = 7, y_1 = 1, a = 3, b = -2, r^2 = 25$:\n   $$(7 - 3)(x - 3) + (1 - (-2))(y - (-2)) = 25$$\n   $$4(x - 3) + 3(y + 2) = 25$$\n   $$4x - 12 + 3y + 6 = 25$$\n   $$4x + 3y - 6 = 25 \\implies 4x + 3y - 31 = 0$$\n   Jadi, persamaan garis singgungnya adalah $4x + 3y - 31 = 0$.",
        "visual": {
          "image": "assets/materi/mat_sma/lingkaran_2.svg",
          "title": "Metode Bagi Adil Garis Singgung & Layang-Layang Titik Luar",
          "caption": "Konstruksi garis singgung tepat di titik pada lingkaran yang tegak lurus jari-jari serta sepasang garis singgung dari titik di luar lingkaran.",
          "guide": [
            "Pada Panel A, jika titik $(x_1, y_1)$ sudah terletak PADA lingkaran, langsung gunakan aturan Bagi Adil: ganti $x^2$ menjadi $x_1 x$ dan $y^2$ menjadi $y_1 y$.",
            "Pada Panel B, jika titik $Q(x_1, y_1)$ berada DI LUAR lingkaran, rumus Bagi Adil menghasilkan Garis Polar (tali busur penghubung dua titik singgung $T_1$ dan $T_2$)."
          ]
        }
      },
      {
        "title": "4. Garis Singgung dengan Kemiringan Tertentu (Gradien $m$)",
        "concept": "Ketika persoalan menuntut garis singgung yang sejajar atau tegak lurus dengan suatu garis referensi, nilai gradien kemiringan garis singgung ($m$) dapat ditentukan terlebih dahulu.\n\n**Hubungan Gradien Garis:**\n- **Sejajar:** $m_1 = m_2$\n- **Tegak Lurus:** $m_1 \\cdot m_2 = -1 \\implies m_1 = -\\frac{1}{m_2}$\n\n**Rumus Garis Singgung Bergradien $m$:**\n1. **Pusat di Titik Asal $O(0,0)$:**\n   $$y = mx \\pm r\\sqrt{1 + m^2}$$\n2. **Pusat di Titik Sembarang $P(a,b)$:**\n   $$y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$$\nTanda plus-minus $(\\pm)$ menunjukkan bahwa untuk setiap gradien kemiringan tertentu, selalu terdapat **dua garis singgung kembar sejajar** yang mengapit lingkaran di sisi berlawanan.",
        "quickTip": "💡 **Trik 'Dua Garis Kembar Sejajar':** Ingat bahwa jawaban akhir dari soal gradien lingkaran selalu menghasilkan DUA garis singgung yang dipisahkan oleh tanda $\\pm r\\sqrt{1+m^2}$. Jika Anda hanya menuliskan satu garis, jawaban Anda baru bernilai separuh!",
        "exampleProblem": "**Soal:** Tentukan persamaan garis singgung pada lingkaran $x^2 + y^2 = 20$ yang tegak lurus terhadap garis $2x - y + 5 = 0$!\n\n**Langkah Pembahasan:**\n1. **Mencari Gradien Garis Singgung ($m$):**\n   Persamaan garis: $2x - y + 5 = 0 \\implies y = 2x + 5$, sehingga gradiennya $m_{\\text{garis}} = 2$.\n   Karena garis singgung tegak lurus terhadap garis ini:\n   $$m \\cdot m_{\\text{garis}} = -1 \\implies m \\cdot 2 = -1 \\implies m = -\\frac{1}{2}$$\n\n2. **Identifikasi Data Lingkaran:**\n   Pusat di $(0,0)$ dan $r^2 = 20 \\implies r = \\sqrt{20} = 2\\sqrt{5}$.\n\n3. **Substitusi ke Rumus Garis Singgung Gradien $m$:**\n   $$y = mx \\pm r\\sqrt{1 + m^2}$$\n   $$y = -\\frac{1}{2}x \\pm 2\\sqrt{5}\\sqrt{1 + \\left(-\\frac{1}{2}\\right)^2}$$\n   $$y = -\\frac{1}{2}x \\pm 2\\sqrt{5}\\sqrt{1 + \\frac{1}{4}} = -\\frac{1}{2}x \\pm 2\\sqrt{5}\\sqrt{\\frac{5}{4}}$$\n   $$y = -\\frac{1}{2}x \\pm 2\\sqrt{5} \\cdot \\frac{\\sqrt{5}}{2} = -\\frac{1}{2}x \\pm 5$$\n\n4. **Kalikan Seluruh Ruas dengan 2:**\n   $$2y = -x \\pm 10 \\implies x + 2y \\pm 10 = 0$$\n   Diperoleh dua persamaan garis singgung:\n   $$g_1 \\equiv x + 2y + 10 = 0 \\quad \\text{dan} \\quad g_2 \\equiv x + 2y - 10 = 0$$",
        "visual": {
          "image": "assets/materi/mat_sma/lingkaran_3.svg",
          "title": "Sepasang Garis Singgung Bergradien m & Relasi Sejajar/Tegak Lurus",
          "caption": "Geometri dua garis singgung sejajar yang mengapit lingkaran pada gradien m yang sama beserta rangkuman penentuan gradien.",
          "guide": [
            "Pada Panel A, untuk setiap nilai kemiringan $m$ yang diberikan, selalu terdapat sepasang garis singgung sejajar di sisi atas dan bawah lingkaran (tanda $\\pm r\\sqrt{1+m^2}$).",
            "Pada Panel B, perhatikan kata kunci soal: 'sejajar' berarti gradien sama ($m_1 = m_2$), sedangkan 'tegak lurus' berarti gradien dibalik dan dikali minus ($m_2 = -1/m_1$)."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "matriks",
    "title": "Bab 3: Aljabar Matriks & Sistem Persamaan",
    "badge": "Fase F • Wajib",
    "icon": "grid",
    "summary": "Pelajari aljabar matriks mulai dari operasi dasar, perkalian baris kali kolom, determinan ekspansi kofaktor, hingga invers matriks 2x2 dan 3x3. Terapkan aturan Cramer dan matriks invers untuk memecahkan Sistem Persamaan Linear Tiga Variabel (SPLTV)!",
    "subtopics": [
      {
        "title": "1. Operasi Aljabar & Perkalian Matriks (Baris $\\times$ Kolom)",
        "concept": "Matriks adalah susunan skalar berbentuk persegi panjang yang diatur dalam baris-baris horizontal dan kolom-kolom vertikal. Ukuran matriks dinyatakan dengan ordo $m \\times n$ ($m$ baris dan $n$ kolom).\n\n**Penjumlahan dan Pengurangan Matriks:**\nHanya dapat dilakukan jika dan hanya jika kedua matriks memiliki **ordo yang identik**. Operasi dilakukan dengan menjumlahkan elemen-elemen yang berposisi seletak.\n\n**Perkalian Skalar:**\n$$k \\cdot \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix}$$\n\n**Perkalian Dua Matriks ($A \\cdot B$):**\nDua matriks $A_{m \\times p}$ dan $B_{p \\times n}$ dapat dikalikan menghasilkan matriks baru $C_{m \\times n}$ jika **jumlah kolom matriks pertama sama dengan jumlah baris matriks kedua**.\nElemen baris ke-$i$ dan kolom ke-$j$ dihitung dengan perkalian titik (*dot product*) elemen baris terhadap kolom:\n$$C_{ij} = \\sum_{k=1}^p A_{ik} B_{kj}$$\n\n**Sifat-sifat Utama Aljabar Matriks:**\n1. **TIDAK Komutatif:** Pada umumnya $AB \\ne BA$.\n2. **Asosiatif:** $(AB)C = A(BC)$.\n3. **Distributif:** $A(B + C) = AB + AC$.\n4. **Matriks Identitas:** $AI = IA = A$.\n5. **Transpose:** $(AB)^T = B^T A^T$ (urutan dibalik!).",
        "quickTip": "💡 **Trik Jembatan Ordo Matriks:**\\nTuliskan ukuran kedua matriks berdampingan: $(m \\times \\mathbf{p}) \\cdot (\\mathbf{p} \\times n)$.\\n1. Angka dalam $(\\mathbf{p})$ harus SAMA PERSIS agar perkalian bisa dilakukan.\\n2. Angka luar $(m \\times n)$ langsung memberitahu ordo hasil akhirnya!\\nContoh: $(2 \\times 3) \\cdot (3 \\times 4) \\implies$ valid, hasilnya matriks $(2 \\times 4)$.",
        "exampleProblem": "**Soal:** Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 5 \\\\ -2 & 0 \\end{pmatrix}$. Tentukan matriks hasil dari:\na) $2A - 3B$\nb) Perkalian $A \\cdot B$\n\n**Langkah Pembahasan:**\n1. **Menghitung $2A - 3B$:**\n   $$2A = 2\\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 4 & -2 \\\\ 6 & 8 \\end{pmatrix}$$\n   $$3B = 3\\begin{pmatrix} 1 & 5 \\\\ -2 & 0 \\end{pmatrix} = \\begin{pmatrix} 3 & 15 \\\\ -6 & 0 \\end{pmatrix}$$\n   $$2A - 3B = \\begin{pmatrix} 4 - 3 & -2 - 15 \\\\ 6 - (-6) & 8 - 0 \\end{pmatrix} = \\begin{pmatrix} 1 & -17 \\\\ 12 & 8 \\end{pmatrix}$$\n\n2. **Menghitung Perkalian $A \\cdot B$ (Baris $\\times$ Kolom):**\n   $$A \\cdot B = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 1 & 5 \\\\ -2 & 0 \\end{pmatrix}$$\n   - Baris 1 $\\times$ Kolom 1: $(2)(1) + (-1)(-2) = 2 + 2 = 4$\n   - Baris 1 $\\times$ Kolom 2: $(2)(5) + (-1)(0) = 10 + 0 = 10$\n   - Baris 2 $\\times$ Kolom 1: $(3)(1) + (4)(-2) = 3 - 8 = -5$\n   - Baris 2 $\\times$ Kolom 2: $(3)(5) + (4)(0) = 15 + 0 = 15$\n   $$A \\cdot B = \\begin{pmatrix} 4 & 10 \\\\ -5 & 15 \\end{pmatrix}$$",
        "visual": {
          "image": "assets/materi/mat_sma/matriks_0.svg",
          "title": "Skema Perkalian Matriks Baris x Kolom & Syarat Ordo",
          "caption": "Ilustrasi perkalian elemen baris matriks pertama dengan kolom matriks kedua serta pencocokan ukuran ordo dalam.",
          "guide": [
            "Pada Panel A, elemen $c_{ij}$ pada matriks hasil diperoleh dengan mengalikan elemen-elemen Baris ke-$i$ matriks kiri dengan Kolom ke-$j$ matriks kanan lalu menjumlahkannya.",
            "Pada Panel B, dua matriks hanya dapat dikalikan jika banyak kolom matriks kiri sama dengan banyak baris matriks kanan ($A_{m\\times n} \\cdot B_{n\\times p} = C_{m\\times p}$)."
          ]
        }
      },
      {
        "title": "2. Determinan Matriks $2 \\times 2$ & $3 \\times 3$ (Metode Sarrus & Kofaktor)",
        "concept": "Determinan adalah nilai skalar karakteristik yang dihitung dari entri-entri matriks bujursangkar. Determinan mengindikasikan faktor pengali volume/luas dan menjadi syarat mutlak keberadaan invers.\n\n**Determinan Matriks Ordo $2 \\times 2$:**\n$$\\det(A) = |A| = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$\n\n**Determinan Matriks Ordo $3 \\times 3$:**\n1. **Aturan Sarrus (Metode Silang):** Tuliskan kembali dua kolom pertama di sebelah kanan garis matriks, lalu jumlahkan hasil kali diagonal utama dan kurangkan dengan hasil kali diagonal samping.\n2. **Metode Ekspansi Laplace (Kofaktor):**\n   Ekspansi sepanjang baris ke-$i$:\n   $$\\det(A) = \\sum_{j=1}^n (-1)^{i+j} a_{ij} M_{ij}$$\n   (di mana $M_{ij}$ adalah determinan minor sub-matriks setelah baris $i$ dan kolom $j$ dihapus).\n\n**Sifat-sifat Vital Determinan:**\n- $\\det(A^T) = \\det(A)$\n- $\\det(AB) = \\det(A) \\cdot \\det(B)$\n- $\\det(A^{-1}) = \\frac{1}{\\det(A)}$\n- $\\det(k \\cdot A_{n \\times n}) = k^n \\det(A)$ (pangkat $n$ adalah dimensi matriks persegi!).\n- Jika $\\det(A) = 0$, matriks disebut **Matriks Singular** (tidak memiliki invers).",
        "quickTip": "⚡ **Trik Kofaktor 'Baris Nol Terbanyak':** Saat menghitung determinan matriks $3 \\times 3$, pilihlah baris atau kolom yang memuat angka 0 paling banyak! Setiap elemen 0 akan otomatis melenyapkan minornya menjadi 0, sehingga Anda hanya perlu menghitung sedikit perkalian!",
        "exampleProblem": "**Soal:** Hitung nilai determinan matriks $M = \\begin{pmatrix} 3 & 2 & -1 \\\\ 0 & 4 & 5 \\\\ 2 & 1 & 0 \\end{pmatrix}$ menggunakan ekspansi kofaktor sepanjang baris ke-2!\n\n**Langkah Pembahasan:**\n1. **Pola Tanda Baris ke-2:**\n   Tanda posisi kofaktor baris ke-2 adalah: $(-), (+), (-)$.\n   Elemen baris 2: $a_{21} = 0$, $a_{22} = 4$, $a_{23} = 5$.\n\n2. **Ekspansi Kofaktor:**\n   $$\\det(M) = -a_{21}M_{21} + a_{22}M_{22} - a_{23}M_{23}$$\n   - Suku pertama bernilai 0 karena $a_{21} = 0$.\n   - Minor $M_{22}$ (tutup baris 2, kolom 2):\n     $$M_{22} = \\begin{vmatrix} 3 & -1 \\\\ 2 & 0 \\end{vmatrix} = (3)(0) - (-1)(2) = 0 - (-2) = 2$$\n   - Minor $M_{23}$ (tutup baris 2, kolom 3):\n     $$M_{23} = \\begin{vmatrix} 3 & 2 \\\\ 2 & 1 \\end{vmatrix} = (3)(1) - (2)(2) = 3 - 4 = -1$$\n\n3. **Kalkulasi Akhir:**\n   $$\\det(M) = 0 + 4(2) - 5(-1) = 8 + 5 = 13$$",
        "visual": {
          "image": "assets/materi/mat_sma/matriks_1.svg",
          "title": "Makna Geometris Determinan 2x2 & Skema Diagonal Sarrus 3x3",
          "caption": "Determinan matriks 2x2 sebagai luas jajargenjang vektor kolom serta diagram 6 diagonal pada aturan Sarrus 3x3.",
          "guide": [
            "Pada Panel A, determinan $|A| = ad - bc$ mengukur faktor perbesaran luas bangun oleh transformasi matriks $A$.",
            "Pada Panel B, salin dua kolom pertama ke sebelah kanan matriks $3\\times 3$, lalu jumlahkan hasil kali 3 diagonal turun ke kanan ($+$) dikurangi 3 diagonal naik ke kanan ($-$)."
          ]
        }
      },
      {
        "title": "3. Invers Matriks & Pemecahan Persamaan Matriks",
        "concept": "Invers dari matriks persegi $A$ adalah matriks $A^{-1}$ sedemikian sehingga berlaku hubungan:\n$$A \\cdot A^{-1} = A^{-1} \\cdot A = I$$\nSuatu matriks memiliki invers jika dan hanya jika bersifat non-singular, yaitu $\\det(A) \\ne 0$.\n\n**Invers Matriks Berordo $2 \\times 2$:**\nJika $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, maka inversnya dirumuskan:\n$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$\n\n**Menyelesaikan Persamaan Matriks Berbentuk Aljabar:**\nKarena perkalian matriks tidak komutatif ($AB \\ne BA$), posisi perkalian invers harus sangat diperhatikan:\n1. Jika $A \\cdot X = B \\implies X = A^{-1} \\cdot B$ (kalikan $A^{-1}$ dari **kiri**)\n2. Jika $X \\cdot A = B \\implies X = B \\cdot A^{-1}$ (kalikan $A^{-1}$ dari **kanan**)\n\n**Sifat-sifat Aljabar Invers:**\n- $(A^{-1})^{-1} = A$\n- $(AB)^{-1} = B^{-1} A^{-1}$\n- $(A^T)^{-1} = (A^{-1})^T$",
        "quickTip": "⚡ **Trik 'Tukar Posisi & Lawan Tanda':**\\nUntuk membuat adjoin matriks $2 \\times 2$:\\n1. Diagonal Utama ($a$ dan $d$): **Tukar Tempat**.\\n2. Diagonal Samping ($b$ dan $c$): **Tetap di Tempat, Ganti Tanda** (kalikan $-1$).\\nLalu bagi seluruh entri dengan determinan $(ad - bc)$!",
        "exampleProblem": "**Soal:** Tentukan matriks $X$ yang memenuhi persamaan matriks berikut:\n$$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} \\cdot X = \\begin{pmatrix} 2 & -1 \\\\ 4 & 3 \\end{pmatrix}$$\n\n**Langkah Pembahasan:**\n1. **Identifikasi Pola Persamaan:**\n   Persamaan memiliki format $A \\cdot X = B$, sehingga penyelesaiannya adalah $X = A^{-1} \\cdot B$.\n\n2. **Menghitung Invers Matriks $A$:**\n   $$A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$$\n   $$\\det(A) = (3)(2) - (1)(5) = 6 - 5 = 1$$\n   Karena $\\det(A) = 1$, invers matriksnya:\n   $$A^{-1} = \\frac{1}{1}\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$$\n\n3. **Menghitung $X = A^{-1} \\cdot B$:**\n   $$X = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 4 & 3 \\end{pmatrix}$$\n   - Baris 1 $\\times$ Kolom 1: $(2)(2) + (-1)(4) = 4 - 4 = 0$\n   - Baris 1 $\\times$ Kolom 2: $(2)(-1) + (-1)(3) = -2 - 3 = -5$\n   - Baris 2 $\\times$ Kolom 1: $(-5)(2) + (3)(4) = -10 + 12 = 2$\n   - Baris 2 $\\times$ Kolom 2: $(-5)(-1) + (3)(3) = 5 + 9 = 14$\n   $$X = \\begin{pmatrix} 0 & -5 \\\\ 2 & 14 \\end{pmatrix}$$",
        "visual": {
          "image": "assets/materi/mat_sma/matriks_2.svg",
          "title": "Rumus Invers Matriks 2x2 & Posisi Pengali pada Persamaan AX=B vs XA=B",
          "caption": "Transformasi adjoin pada invers matriks 2x2 serta aturan perkalian invers dari kiri atau dari kanan pada persamaan matriks.",
          "guide": [
            "Pada Panel A, matriks disebut singular jika determinannya bernilai nol ($ad - bc = 0$), yang berarti matriks tersebut tidak memiliki invers.",
            "Pada Panel B, karena perkalian matriks tidak komutatif, posisi $A^{-1}$ wajib mengikuti posisi asal $A$: kiri tetap di kiri ($X = A^{-1}B$), kanan tetap di kanan ($X = BA^{-1}$)."
          ]
        }
      },
      {
        "title": "4. Sistem Persamaan Linear (SPLTV) dengan Aturan Cramer",
        "concept": "Sistem Persamaan Linear Tiga Variabel (SPLTV) dapat dituliskan dalam bentuk persamaan matriks kompak $A \\mathbf{x} = \\mathbf{b}$:\n\n$$\\begin{pmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} d_1 \\\\ d_2 \\\\ d_3 \\end{pmatrix}$$\n\n**Teorema Aturan Cramer (Gabriel Cramer):**\nJika determinan matriks koefisien utama $D = \\det(A) \\ne 0$, sistem persamaan memiliki tepat satu himpunan solusi unik yang dihitung dengan rasio determinan:\n\n$$x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}, \\quad z = \\frac{D_z}{D}$$\n\nDi mana:\n- $D$ adalah determinan matriks koefisien asli $A$.\n- $D_x$ adalah determinan matriks $A$ setelah kolom ke-1 diganti dengan vektor konstanta $\\mathbf{b}$.\n- $D_y$ adalah determinan matriks $A$ setelah kolom ke-2 diganti dengan vektor konstanta $\\mathbf{b}$.\n- $D_z$ adalah determinan matriks $A$ setelah kolom ke-3 diganti dengan vektor konstanta $\\mathbf{b}$.",
        "quickTip": "💡 **Trik 'Cari yang Ditanya Saja':** Keunggulan utama Aturan Cramer dibanding eliminasi bertingkat adalah: jika soal ujian hanya menanyakan nilai SATU variabel (misalnya hanya $z$), Anda tidak perlu mencari $x$ dan $y$ sama sekali! Cukup hitung $D$ dan $D_z$, lalu langsung bagi $z = \\frac{D_z}{D}$. Menghemat 60% waktu ujian!",
        "exampleProblem": "**Soal:** Tentukan nilai $z$ dari sistem persamaan linear berikut menggunakan Aturan Cramer:\n$$\\begin{cases} x + 2y - z = 2 \\\\ 2x - y + z = 7 \\\\ 3x + y + 2z = 13 \\end{cases}$$\n\n**Langkah Pembahasan:**\n1. **Menghitung Determinan Utama $D$:**\n   $$D = \\begin{vmatrix} 1 & 2 & -1 \\\\ 2 & -1 & 1 \\\\ 3 & 1 & 2 \\end{vmatrix}$$\n   Gunakan aturan Sarrus:\n   $$\\text{Jumlah Silang Kanan} = (1)(-1)(2) + (2)(1)(3) + (-1)(2)(1) = -2 + 6 - 2 = 2$$\n   $$\\text{Jumlah Silang Kiri} = (3)(-1)(-1) + (1)(1)(1) + (2)(2)(2) = 3 + 1 + 8 = 12$$\n   $$D = 2 - 12 = -10$$\n\n2. **Menghitung Determinan $D_z$ (Ganti Kolom $z$ dengan Konstanta $\\begin{pmatrix} 2 \\\\ 7 \\\\ 13 \\end{pmatrix}$):**\n   $$D_z = \\begin{vmatrix} 1 & 2 & 2 \\\\ 2 & -1 & 7 \\\\ 3 & 1 & 13 \\end{vmatrix}$$\n   Gunakan aturan Sarrus:\n   $$\\text{Jumlah Silang Kanan} = (1)(-1)(13) + (2)(7)(3) + (2)(2)(1) = -13 + 42 + 4 = 33$$\n   $$\\text{Jumlah Silang Kiri} = (3)(-1)(2) + (1)(7)(1) + (13)(2)(2) = -6 + 7 + 52 = 53$$\n   $$D_z = 33 - 53 = -20$$\n\n3. **Hitung Nilai $z$:**\n   $$z = \\frac{D_z}{D} = \\frac{-20}{-10} = 2$$",
        "visual": {
          "image": "assets/materi/mat_sma/matriks_3.svg",
          "title": "Skema Kolom Determinan Aturan Cramer & Uji Eksistensi Solusi",
          "caption": "Penggantian kolom koefisien dengan kolom konstanta hasil untuk menghitung Dx dan Dy serta interpretasi geometris determinan D.",
          "guide": [
            "Pada Panel A, determinan $D_x$ dibentuk dengan mengganti kolom koefisien $x$ menggunakan kolom konstanta ruas kanan $c$, sedangkan kolom lainnya tetap.",
            "Pada Panel B, sistem persamaan linear memiliki tepat satu titik potong (solusi tunggal) jika dan hanya jika determinan utama $D \\ne 0$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "transformasi",
    "title": "Bab 4: Transformasi Geometri Berbasis Matriks",
    "badge": "Fase F • Tingkat Lanjut",
    "icon": "move",
    "summary": "Pahami transformasi geometri secara elegan menggunakan representasi matriks 2x2 untuk translasi, refleksi, rotasi, dan dilatasi. Kuasai komposisi transformasi berurutan dan transformasi luas bangun geometri dengan determinan!",
    "subtopics": [
      {
        "title": "1. Translasi (Pergeseran) & Dilatasi (Penskalaan)",
        "concept": "Transformasi geometri adalah pemetaan satu-satu dari himpunan titik pada bidang ke himpunan titik lain pada bidang yang sama.\n\n**1. Translasi oleh Vektor $T = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$:**\nMemindahkan setiap titik sejauh $a$ satuan horizontal dan $b$ satuan vertikal tanpa mengubah bentuk atau ukuran:\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix} \\implies x' = x + a, \\quad y' = y + b$$\nUntuk mencari bayangan garis atau kurva, substitusikan $x = x' - a$ dan $y = y' - b$ ke persamaan semula.\n\n**2. Dilatasi (Penskalaan Ukuran):**\n- **Pusat Titik Asal $O(0,0)$ dengan Faktor Skala $k$:**\n  $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\implies x' = kx, \\quad y' = ky$$\n- **Pusat Titik Sembarang $P(p, q)$ dengan Faktor Skala $k$:**\n  $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = k \\begin{pmatrix} x - p \\\\ y - q \\end{pmatrix} + \\begin{pmatrix} p \\\\ q \\end{pmatrix}$$",
        "quickTip": "⚡ **Trik Cepat Dilatasi Garis dari Pusat $O(0,0)$:**\\nJika garis $Ax + By = C$ didilatasi berpusat di $O(0,0)$ dengan faktor skala $k$, maka persamaan garis bayangannya cukup mengalikan konstanta $C$ di ruas kanan dengan $k$:\\n$$Ax + By = k \\cdot C$$\\nGradien garis tidak pernah berubah!",
        "exampleProblem": "**Soal:** Garis lurus $3x - 2y + 12 = 0$ ditranslasikan oleh $T = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$, kemudian dilanjutkan dengan dilatasi berpusat di $O(0,0)$ dengan faktor skala $k = 3$. Tentukan persamaan garis bayangan akhirnya!\n\n**Langkah Pembahasan:**\n1. **Tahap 1: Translasi oleh $T = \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix}$:**\n   $$x_1 = x + 2 \\implies x = x_1 - 2$$\n   $$y_1 = y - 4 \\implies y = y_1 + 4$$\n   Substitusikan ke garis $3x - 2y + 12 = 0$:\n   $$3(x_1 - 2) - 2(y_1 + 4) + 12 = 0$$\n   $$3x_1 - 6 - 2y_1 - 8 + 12 = 0 \\implies 3x_1 - 2y_1 - 2 = 0 \\iff 3x_1 - 2y_1 = 2$$\n\n2. **Tahap 2: Dilatasi $[O, 3]$:**\n   Gunakan rumus praktis dilatasi pusat $(0,0)$ faktor $k = 3$:\n   $$3x' - 2y' = 3 \\cdot (2) \\implies 3x' - 2y' = 6$$\n   Dalam bentuk implisit:\n   $$3x - 2y - 6 = 0$$",
        "visual": {
          "image": "assets/materi/mat_sma/transformasi_0.svg",
          "title": "Geometri Translasi Vektor Geser & Dilatasi Faktor Skala k",
          "caption": "Pergeseran bangun datar secara kongruen oleh vektor translasi serta perbesaran bangun dari titik pusat dilatasi.",
          "guide": [
            "Pada Panel A, translasi menggeser setiap titik sudut dengan vektor yang sama $(x', y') = (x+a, y+b)$ tanpa mengubah bentuk maupun ukuran bangun.",
            "Pada Panel B, dilatasi dengan faktor skala $k=2$ menggandakan jarak setiap titik dari pusat dilatasi dan memperbesar luas bangun menjadi $k^2 = 4$ kali lipat."
          ]
        }
      },
      {
        "title": "2. Refleksi (Pencerminan) terhadap Berbagai Sumbu & Garis",
        "concept": "Pencerminan adalah transformasi yang memindahkan setiap titik dengan memanfaatkan sifat cermin datar: jarak titik ke cermin sama dengan jarak bayangan ke cermin, dan garis hubung keduanya tegak lurus terhadap cermin.\n\n**Matriks Transformasi Refleksi Standar:**\n1. **Terhadap Sumbu $X$ ($y = 0$):**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} x \\\\ -y \\end{pmatrix}$$\n2. **Terhadap Sumbu $Y$ ($x = 0$):**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -x \\\\ y \\end{pmatrix}$$\n3. **Terhadap Titik Asal $O(0,0)$:**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -x \\\\ -y \\end{pmatrix}$$\n4. **Terhadap Garis $y = x$:**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ x \\end{pmatrix}$$\n5. **Terhadap Garis $y = -x$:**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -y \\\\ -x \\end{pmatrix}$$\n6. **Terhadap Garis Vertikal $x = h$:** $x' = 2h - x, \\quad y' = y$\n7. **Terhadap Garis Horisontal $y = k$:** $x' = x, \\quad y' = 2k - y$",
        "quickTip": "💡 **Trik 'Huruf yang Jadi Cermin Tetap':**\\n- Cermin sumbu $X$ $\\implies$ koordinat $x$ TETAP ($x' = x, y' = -y$).\\n- Cermin sumbu $Y$ $\\implies$ koordinat $y$ TETAP ($x' = -x, y' = y$).\\n- Cermin garis $y = x$ $\\implies$ koordinat bertukar posisi: $(x, y) \\to (y, x)$.\\n- Cermin garis $y = -x$ $\\implies$ tukar posisi dan ganti tanda: $(x, y) \\to (-y, -x)$!",
        "exampleProblem": "**Soal:** Titik $P(-3, 5)$ dicerminkan terhadap garis $y = -x$, kemudian dilanjutkan pencerminan terhadap garis vertikal $x = 4$. Tentukan koordinat titik bayangan akhir $P''$!\n\n**Langkah Pembahasan:**\n1. **Refleksi 1 terhadap Garis $y = -x$:**\n   Rumus bayangan: $(x, y) \\to (-y, -x)$.\n   $$x_1 = -(5) = -5, \\quad y_1 = -(-3) = 3 \\implies P'(-5, 3)$$\n\n2. **Refleksi 2 terhadap Garis $x = 4$ ($h = 4$):**\n   Rumus bayangan cermin vertikal $x = h$:\n   $$x' = 2h - x_1 = 2(4) - (-5) = 8 + 5 = 13$$\n   $$y' = y_1 = 3$$\n   Maka koordinat bayangan akhirnya adalah $P''(13, 3)$.",
        "visual": {
          "image": "assets/materi/mat_sma/transformasi_1.svg",
          "title": "Pencerminan Empat Kuadran & Cermin Garis x = h / y = k",
          "caption": "Pencerminan segitiga terhadap sumbu-X, sumbu-Y, dan garis y = x serta konstruksi jarak sama ke garis cermin x = h.",
          "guide": [
            "Pada Panel A, pencerminan terhadap sumbu-$X$ mengubah tanda $y$, pencerminan terhadap sumbu-$Y$ mengubah tanda $x$, dan pencerminan terhadap $y=x$ menukar posisi $(x,y) \\to (y,x)$.",
            "Pada Panel B, jarak benda ke cermin sama dengan jarak cermin ke bayangan, sehingga cermin $x = h$ memetakan $x$ ke $x' = h + (h - x) = 2h - x$."
          ]
        }
      },
      {
        "title": "3. Rotasi (Perputaran) dengan Matriks Trigonometri",
        "concept": "Rotasi adalah transformasi yang memutar setiap titik dengan sudut $\\theta$ terhadap suatu titik pusat tertentu.\n\n**Konvensi Arah Sudut Trigonometri:**\n- **Sudut Positif $(+\\theta)$:** Putaran **berlawanan arah jarum jam** (*counter-clockwise*).\n- **Sudut Negatif $(-\\theta)$:** Putaran **searah jarum jam** (*clockwise*).\n\n**1. Rotasi Berpusat di Titik Asal $O(0,0)$:**\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$\n\nMatriks untuk sudut-sudut istimewa:\n- **Rotasi $+90^\\circ$:** $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\implies (x', y') = (-y, x)$\n- **Rotasi $+180^\\circ$:** $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\implies (x', y') = (-x, -y)$\n- **Rotasi $+270^\\circ$ (atau $-90^\\circ$):** $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} \\implies (x', y') = (y, -x)$\n\n**2. Rotasi Berpusat di Titik Sembarang $P(a,b)$:**\n$$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x - a \\\\ y - b \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}$$",
        "quickTip": "⚡ **Trik Letak Tanda Minus Rotasi:** Dalam matriks rotasi standar $R_\\theta$, elemen diagonal utama selalu diisi fungsi $\\cos\\theta$, dan diagonal samping diisi $\\sin\\theta$. Ingat: tanda **MINUS** selalu berada di posisi baris 1 kolom 2: $-\\sin\\theta$!",
        "exampleProblem": "**Soal:** Tentukan koordinat bayangan titik $Q(5, -1)$ setelah dirotasikan sejauh $90^\\circ$ berlawanan arah jarum jam dengan pusat rotasi $P(2, 3)$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   $x = 5$, $y = -1$, pusat rotasi $a = 2$, $b = 3$, dan sudut $\\theta = 90^\\circ$.\n   Matriks rotasi $R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.\n\n2. **Substitusi ke Rumus Rotasi Pusat $(a, b)$:**\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 5 - 2 \\\\ -1 - 3 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$$\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$$\n\n3. **Perkalian Matriks & Penjumlahan Vektor:**\n   $$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} (0)(3) + (-1)(-4) \\\\ (1)(3) + (0)(-4) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$$\n   $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}$$\n   Koordinat bayangan akhir adalah $Q'(6, 6)$.",
        "visual": {
          "image": "assets/materi/mat_sma/transformasi_2.svg",
          "title": "Geometri Busur Rotasi & Matriks Trigonometri R(P, theta)",
          "caption": "Perputaran titik sebesar +90 derajat berlawanan arah jarum jam pada lintasan melingkar serta matriks rotasi umum.",
          "guide": [
            "Pada Panel A, rotasi sebesar $+90^\\circ$ (berlawanan arah jarum jam) memutar vektor posisi sejauh sudut siku-siku sehingga $(x, y)$ berubah menjadi $(-y, x)$.",
            "Pada Panel B, jika pusat rotasi berada di $P(a,b)$, kurangkan $(a,b)$ terlebih dahulu sebelum mengalikan matriks rotasi, lalu tambahkan kembali $(a,b)$."
          ]
        }
      },
      {
        "title": "4. Komposisi Transformasi & Transformasi Luas Bangun",
        "concept": "**1. Komposisi Matriks Transformasi:**\nJika suatu bangun ditransformasikan mula-mula oleh matriks $M_1$ kemudian dilanjutkan oleh matriks $M_2$, maka matriks gabungan ekuivalennya adalah perkalian matriks dari urutan belakang:\n$$M_{\\text{total}} = M_2 \\cdot M_1$$\n\n**2. Efek Transformasi terhadap Luas Bangun Geometri:**\nJika suatu bangun datar memiliki luas mula-mula $L_{\\text{awal}}$ dan ditransformasikan oleh matriks $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, maka luas bangun bayangan $L'$ dihitung dengan nilai mutlak dari determinan matriks tersebut:\n$$L' = |\\det(M)| \\times L_{\\text{awal}}$$\n\n**Klasifikasi Luas Berdasarkan Jenis Transformasi:**\n- **Isometri (Translasi, Refleksi, Rotasi):** Nilai $|\\det(M)| = 1$, sehingga luas bangun tidak berubah sama sekali ($L' = L_{\\text{awal}}$).\n- **Dilatasi Skala $k$:** Matriks $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\implies |\\det(M)| = k^2$, luas membesar sebanyak $k^2$ kali lipat.",
        "quickTip": "💡 **Trik 'Luas Cukup Kalikan Determinan':** Jika soal menanyakan luas segitiga bayangan setelah transformasi matriks, JANGAN MENCARI titik sudut bayangannya satu per satu! Cukup hitung luas segitiga mula-mula, lalu kalikan langsung dengan $|\\det(M)|$. Sangat cepat dan presisi!",
        "exampleProblem": "**Soal:** Sebuah segitiga memiliki luas awal $24\\text{ cm}^2$. Segitiga tersebut ditransformasikan oleh matriks $M_1 = \\begin{pmatrix} 2 & 1 \\\\ 4 & 5 \\end{pmatrix}$, lalu dilanjutkan dengan transformasi oleh matriks $M_2 = \\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$. Tentukan luas segitiga bayangan akhir!\n\n**Langkah Pembahasan:**\n1. **Menghitung Determinan Matriks Pertama ($M_1$):**\n   $$\\det(M_1) = (2)(5) - (1)(4) = 10 - 4 = 6$$\n\n2. **Menghitung Determinan Matriks Kedua ($M_2$):**\n   $$\\det(M_2) = (3)(2) - (-1)(1) = 6 - (-1) = 7$$\n\n3. **Menghitung Determinan Matriks Komposisi $M = M_2 \\cdot M_1$:**\n   Berdasarkan sifat determinan:\n   $$\\det(M) = \\det(M_2) \\cdot \\det(M_1) = 7 \\cdot 6 = 42$$\n\n4. **Menghitung Luas Bayangan Akhir:**\n   $$L' = |\\det(M)| \\times L_{\\text{awal}} = |42| \\times 24 = 1.008\\text{ cm}^2$$",
        "visual": {
          "image": "assets/materi/mat_sma/transformasi_3.svg",
          "title": "Urutan Matriks Komposisi (T2 o T1) & Faktor Skala Luas Determinan",
          "caption": "Alur perkalian matriks transformasi berurutan dari kanan ke kiri serta perubahan luas bangun datar sebesar nilai mutlak determinan matriks.",
          "guide": [
            "Pada Panel A, jika transformasi $T_1$ dilanjutkan oleh $T_2$, maka matriks komposisinya adalah $M_{\\text{total}} = M_2 \\cdot M_1$ (matriks kedua ditulis di sebelah kiri).",
            "Pada Panel B, tidak perlu mencari koordinat bayangan semua titik sudut untuk menghitung luas bayangan: cukup kalikan luas awal dengan $|\\det M|$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "barisan",
    "title": "Bab 5: Barisan dan Deret Aritmetika & Geometri",
    "badge": "Fase F • Wajib",
    "icon": "trending-up",
    "summary": "Kuasai pola pertumbuhan linier dan eksponensial lewat barisan & deret aritmetika dan geometri. Terapkan rumus suku ke-n, jumlah deret hingga suku ke-n, suku tengah, sisipan barisan, barisan bertingkat dua, serta deret geometri tak hingga konvergen pada fenomena sains dan teknologi!",
    "subtopics": [
      {
        "title": "1. Barisan & Deret Aritmetika (Pertumbuhan Linier)",
        "concept": "Barisan aritmetika adalah barisan bilangan dengan selisih atau beda ($b$) yang konstan di antara dua suku yang berurutan.\n\n**Formulasi Utama Barisan Aritmetika:**\n1. **Beda Antar-Suku ($b$):**\n   $$b = U_n - U_{n-1}$$\n2. **Suku ke-$n$ ($U_n$):**\n   $$U_n = a + (n - 1)b$$\n   (dengan $a = U_1$ sebagai suku awal dan $n$ sebagai nomor urut suku).\n3. **Jumlah $n$ Suku Pertama Deret ($S_n$):**\n   $$S_n = \\frac{n}{2}(a + U_n) = \\frac{n}{2}\\big(2a + (n - 1)b\\big)$$\n4. **Hubungan Fundamental Antara $U_n$ dan $S_n$:**\n   $$U_n = S_n - S_{n-1}$$\n5. **Suku Tengah Barisan (untuk $n$ ganjil):**\n   $$U_t = \\frac{a + U_n}{2}, \\quad t = \\frac{n + 1}{2}$$\n6. **Sisipan Bilangan pada Barisan Aritmetika:**\n   Jika di antara dua bilangan $x$ dan $y$ disisipkan $k$ buah bilangan sehingga terbentuk barisan aritmetika baru, maka beda barisan baru ($b'$) adalah:\n   $$b' = \\frac{y - x}{k + 1}$$",
        "quickTip": "⚡ **Trik Turunan Deret Kuadrat $S_n$:**\nJika diketahui rumus jumlah deret berbentuk kuadrat $S_n = An^2 + Bn$:\n1. Beda selalu bernilai dua kali koefisien kuadrat: $b = 2A$.\n2. Suku pertama: $a = A + B$.\n3. Suku ke-$n$ langsung: $U_n = 2An + (B - A)$.\nContoh: $S_n = 3n^2 - 5n \\implies b = 2(3) = 6$ dan $U_n = 6n - 8$!",
        "exampleProblem": "**Soal:** Dalam suatu gedung pertunjukan, terdapat 15 baris kursi penonton. Baris terdepan terdiri atas 20 kursi, baris kedua 24 kursi, baris ketiga 28 kursi, dan seterusnya bertambah tetap.\na) Berapakah kapasitas kursi pada baris paling belakang (baris ke-15)?\nb) Berapakah kapasitas total penonton di dalam gedung pertunjukan tersebut?\n\n**Langkah Pembahasan:**\n1. **Identifikasi Data:**\n   Barisan aritmetika dengan suku pertama $a = 20$, beda $b = 24 - 20 = 4$, dan banyak suku $n = 15$.\n\n2. **Kapasitas Kursi Baris ke-15 ($U_{15}$):**\n   $$U_{15} = a + (15 - 1)b = 20 + 14(4) = 20 + 56 = 76\\text{ kursi}$$\n\n3. **Kapasitas Total Gedung ($S_{15}$):**\n   $$S_{15} = \\frac{n}{2}(a + U_{15}) = \\frac{15}{2}(20 + 76) = \\frac{15}{2}(96) = 15 \\times 48 = 720\\text{ kursi}$$",
        "visual": {
          "image": "assets/materi/mat_sma/barisan_0.svg",
          "title": "Tangga Pertumbuhan Linier Aritmetika & Persegi Panjang Gauss",
          "caption": "Kenaikan suku aritmetika dengan beda tetap +b serta penggabungan barisan asli dan terbalik membentuk persegi panjang setinggi (U1 + Un).",
          "guide": [
            "Pada Panel A, barisan aritmetika selalu membentuk garis lurus dengan kemiringan sebesar beda $b = (U_p - U_q)/(p - q)$.",
            "Pada Panel B, jika deret dijumlahkan dengan dirinya sendiri secara terbalik, setiap pasang suku berjumlah tetap $(U_1 + U_n)$, sehingga $S_n = \\frac{n}{2}(U_1 + U_n)$."
          ]
        }
      },
      {
        "title": "2. Barisan & Deret Geometri (Pertumbuhan Eksponensial)",
        "concept": "Barisan geometri adalah barisan bilangan di mana perbandingan (rasio $r$) antara dua suku yang berurutan selalu bernilai tetap konstan.\n\n**Formulasi Utama Barisan Geometri:**\n1. **Rasio Barisan ($r$):**\n   $$r = \\frac{U_n}{U_{n-1}}$$\n2. **Suku ke-$n$ ($U_n$):**\n   $$U_n = a \\cdot r^{n-1}$$\n3. **Jumlah $n$ Suku Pertama Deret ($S_n$):**\n   $$S_n = \\frac{a(1 - r^n)}{1 - r} \\quad (|r| < 1) \\quad \\text{atau} \\quad S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (|r| > 1)$$\n4. **Suku Tengah Barisan Geometri (untuk $n$ ganjil):**\n   $$U_t = \\sqrt{a \\cdot U_n}$$",
        "quickTip": "💡 **Trik Rasio Cepat Dua Suku Sembarang:**\nJika diketahui dua suku sembarang $U_p$ dan $U_q$ ($p > q$):\n$$r^{p - q} = \\frac{U_p}{U_q}$$\n*Contoh instan:* $U_7 = 192$ dan $U_4 = 24 \\implies r^{7 - 4} = r^3 = \\frac{192}{24} = 8 \\implies r = 2$!",
        "exampleProblem": "**Soal:** Suku ke-2 dari suatu barisan geometri adalah 6 dan suku ke-5 adalah 48. Tentukan suku pertama ($a$), rasio ($r$), dan jumlah 6 suku pertama ($S_6$)!\n\n**Langkah Pembahasan:**\n1. **Menghitung Rasio ($r$):**\n   $$\\frac{U_5}{U_2} = \\frac{a \\cdot r^4}{a \\cdot r^1} = r^3$$\n   $$r^3 = \\frac{48}{6} = 8 \\implies r = 2$$\n\n2. **Menghitung Suku Pertama ($a$):**\n   $$U_2 = a \\cdot r = 6 \\implies a \\cdot 2 = 6 \\implies a = 3$$\n\n3. **Menghitung Jumlah 6 Suku Pertama ($S_6$):**\n   $$S_6 = \\frac{a(r^6 - 1)}{r - 1} = \\frac{3(2^6 - 1)}{2 - 1} = 3(64 - 1) = 3(63) = 189$$",
        "visual": {
          "image": "assets/materi/mat_sma/barisan_1.svg",
          "title": "Suku Tengah Geometri vs Aritmetika & Mekanisme Suku Sisipan",
          "caption": "Perbandingan nilai tengah rata-rata ukur (akar hasil kali) pada barisan geometri serta pembagian langkah pada penyisipan k suku.",
          "guide": [
            "Pada Panel A, suku tengah barisan geometri adalah akar kuadrat dari hasil kali suku ujung-ujungnya: $U_t = \\sqrt{U_1 \\cdot U_n}$.",
            "Pada Panel B, menyisipkan $k$ buah bilangan di antara dua suku memecah 1 lompatan menjadi $(k+1)$ lompatan kecil sehingga $r' = \\sqrt[k+1]{r}$."
          ]
        }
      },
      {
        "title": "3. Deret Geometri Tak Hingga Konvergen & Aplikasi Pantulan Bola",
        "concept": "Jika suatu deret geometri memiliki banyak suku tak terhingga ($n \\to \\infty$) dengan interval rasio terbuka $-1 < r < 1$ ($|r| < 1$), maka deret tersebut memiliki jumlah limit tertentu yang **konvergen** (menuju suatu bilangan terhingga):\n$$S_\\infty = \\lim_{n \\to \\infty} S_n = \\frac{a}{1 - r}$$\nJika $|r| \\ge 1$, deret bersifat divergen ($S_\\infty = \\pm\\infty$).\n\n**Aplikasi Gerak Pantulan Bola Jatuh Bebas:**\nJika sebuah bola dijatuhkan dari ketinggian awal $H$ dan memantul berulang kali dengan rasio ketinggian pantulan $\\frac{p}{q}$ ($p < q$) hingga bola berhenti, maka panjang seluruh lintasan gerak bola (lintasan turun + lintasan naik) adalah:\n$$S_{\\text{lintasan}} = H \\times \\frac{q + p}{q - p}$$",
        "quickTip": "⚡ **Trik Kilat Pantulan Bola:**\nCukup jumlahkan pembilang dan penyebut rasio pantulan $(q + p)$, lalu bagi dengan selisihnya $(q - p)$, kemudian kalikan langsung dengan tinggi awal $H$!",
        "exampleProblem": "**Soal:** Sebuah bola tenis dijatuhkan dari ketinggian 12 meter ke lantai. Setiap kali memantul, bola mencapai ketinggian $\\frac{2}{3}$ dari tinggi sebelumnya hingga akhirnya berhenti. Hitunglah total panjang lintasan yang ditempuh bola tersebut!\n\n**Langkah Pembahasan:**\n1. **Menggunakan Rumus Kilat:**\n   $H = 12\\text{ m}$, rasio $\\frac{p}{q} = \\frac{2}{3} \\implies p = 2, q = 3$.\n   $$S = H \\times \\frac{q + p}{q - p} = 12 \\times \\frac{3 + 2}{3 - 2} = 12 \\times \\frac{5}{1} = 60\\text{ meter}$$\n\n2. **Pembuktian Konseptual Deret Geometri Tak Hingga:**\n   - Lintasan Turun: $12 + 8 + \\frac{16}{3} + \\dots \\implies a = 12, r = 2/3$\n     $$S_{\\text{turun}} = \\frac{12}{1 - 2/3} = \\frac{12}{1/3} = 36\\text{ m}$$\n   - Lintasan Naik: $8 + \\frac{16}{3} + \\dots \\implies a = 8, r = 2/3$\n     $$S_{\\text{naik}} = \\frac{8}{1 - 2/3} = \\frac{8}{1/3} = 24\\text{ m}$$\n   - Total Panjang Lintasan: $S = 36 + 24 = 60\\text{ meter}$.",
        "visual": {
          "image": "assets/materi/mat_sma/barisan_2.svg",
          "title": "Dekomposisi Suku Ganjil-Genap Deret Tak Hingga & Dua Kasus Bola Memantul",
          "caption": "Hubungan rasio r = S_genap / S_ganjil pada deret geometri tak hingga serta perbedaan rumus bola dijatuhkan vs dilempar ke atas.",
          "guide": [
            "Pada Panel A, membagi jumlah suku bernomor genap dengan jumlah suku bernomor ganjil langsung menghasilkan nilai rasio: $r = S_{\\text{genap}} / S_{\\text{ganjil}}$.",
            "Pada Panel B, perhatikan kalimat soal: jika bola dilempar vertikal dari lantai ke atas, lintasan pertamanya ditempuh dua kali (naik dan turun) sehingga $S_{\\text{total}} = 2 S_\\infty$."
          ]
        }
      },
      {
        "title": "4. Barisan Aritmetika Bertingkat Dua & Pola Bilangan",
        "concept": "Barisan aritmetika bertingkat dua adalah barisan bilangan di mana selisih tetap (konstan) baru ditemukan pada tingkat kedua (beda kedua bernilai $2a$):\n$$U_n = an^2 + bn + c$$\n\n**Hubungan Pola Nilai Barisan:**\n- Suku pertama barisan asli: $U_1 = a + b + c$\n- Beda pertama antara suku ke-1 dan ke-2: $b_1 = 3a + b$\n- Beda konstan pada tingkat kedua: $c_2 = 2a$\n\nLangkah menemukan rumus suku ke-$n$:\n1. Samakan beda tingkat kedua dengan $2a$ untuk memperoleh nilai $a$.\n2. Samakan beda pertama dengan $3a + b$ untuk memperoleh nilai $b$.\n3. Samakan suku pertama dengan $a + b + c$ untuk memperoleh konstanta $c$.",
        "quickTip": "⚡ **Trik Pola Kuadrat Instan:**\nJika suku-suku barisan adalah $2, 5, 10, 17, 26, \\dots$, perhatikan bahwa nilainya adalah $1^2+1, 2^2+1, 3^2+1, 4^2+1$. Maka rumusnya langsung $U_n = n^2 + 1$!",
        "exampleProblem": "**Soal:** Tentukan rumus suku ke-$n$ dari barisan bilangan bertingkat: $3, 8, 15, 24, 35, \\dots$ dan hitunglah nilai dari suku ke-$12$ ($U_{12}$)!\n\n**Langkah Pembahasan:**\n1. **Analisis Selisih:**\n   - Barisan asli: $3, \\quad 8, \\quad 15, \\quad 24, \\quad 35$\n   - Selisih tingkat 1: $+5, \\quad +7, \\quad +9, \\quad +11$\n   - Selisih tingkat 2: $+2, \\quad +2, \\quad +2$ (Konstan tetap 2!)\n\n2. **Menentukan Koefisien $a, b, c$:**\n   - $2a = 2 \\implies a = 1$\n   - $3a + b = 5 \\implies 3(1) + b = 5 \\implies b = 2$\n   - $a + b + c = 3 \\implies 1 + 2 + c = 3 \\implies c = 0$\n\n3. **Rumus Suku ke-$n$ dan $U_{12}$:**\n   $$U_n = 1n^2 + 2n + 0 = n^2 + 2n = n(n + 2)$$\n   Untuk $n = 12$:\n   $$U_{12} = 12^2 + 2(12) = 144 + 24 = 168$$",
        "visual": {
          "image": "assets/materi/mat_sma/barisan_3.svg",
          "title": "Pohon Selisih Barisan Bertingkat Dua & Pola Bilangan Kuadratik",
          "caption": "Ekstraksi koefisien a, b, c dari tepi kiri pohon selisih bertingkat dua serta pertumbuhan kuadratik bilangan segitiga.",
          "guide": [
            "Pada Panel A, ketika selisih baru konstan pada tingkat kedua, barisan tersebut pasti berbentuk kuadrat $U_n = an^2 + bn + c$.",
            "Gunakan tiga angka di tepi paling kiri pohon dari bawah ke atas: $2a = \\Delta_2$, lalu $3a+b = \\Delta_1$, dan $a+b+c = U_1$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "bunga-anuitas",
    "title": "Bab 6: Bunga Majemuk dan Anuitas (Matematika Keuangan)",
    "badge": "Fase F • Wajib",
    "icon": "calculator",
    "summary": "Kuasai pemodelan matematika keuangan dunia perbankan & investasi modern. Pahami perbedaan mendasar bunga tunggal dan bunga majemuk, periode kapitalisasi majemuk, penyusutan aset (depresiasi), sistem pembayaran anuitas, dinamika angsuran pokok vs beban bunga, hingga analisis tabel amortisasi utang!",
    "subtopics": [
      {
        "title": "1. Bunga Tunggal vs Bunga Majemuk & Periode Pemajemukan",
        "concept": "Dalam aktivitas ekonomi dan perbankan, modal yang disimpan atau dipinjamkan menghasilkan imbalan jasa berupa bunga dengan persentase suku bunga $i$ per periode.\n\n**1. Bunga Tunggal (Simple Interest):**\nBunga dihitung hanya dari modal pokok awal ($M_0$) yang nilainya tetap sepanjang waktu:\n$$B = M_0 \\cdot i \\cdot n$$\n$$M_n = M_0 (1 + n \\cdot i)$$\n- $M_0$ = Modal awal / pokok simpanan\n- $M_n$ = Saldo akhir pada periode ke-$n$\n- $i$ = Suku bunga per periode (desimal)\n- $n$ = Banyaknya periode pembungaan\n\n**2. Bunga Majemuk (Compound Interest - Bunga Berbunga):**\nBunga dihitung berdasarkan akumulasi modal pokok ditambah seluruh bunga yang diperoleh pada periode-periode sebelumnya (pertumbuhan eksponensial):\n$$M_n = M_0 (1 + i)^n$$\nBesar bunga kumulatif setelah $n$ periode:\n$$B_n = M_n - M_0 = M_0 \\big[(1 + i)^n - 1\\big]$$\n\n**3. Periode Kapitalisasi Majemuk ($m$ kali per tahun):**\nJika bunga majemuk tahunan sebesar $i$ dikapitalisasi sebanyak $m$ kali dalam setahun selama $t$ tahun:\n- Semesteran (setengah tahun): $m = 2$\n- Caturwulan (4 bulan sekali): $m = 3$\n- Triwulan (3 bulan sekali): $m = 4$\n- Bulanan: $m = 12$\nMaka rumusnya menjadi:\n$$M = M_0 \\left(1 + \\frac{i}{m}\\right)^{m \\cdot t}$$",
        "quickTip": "💡 **Trik 'Aturan 72' (The Rule of 72):**\nUntuk mengetahui secara cepat dalam berapa tahun modal investasi akan berlipat ganda menjadi $2\\times$ lipat pada sistem bunga majemuk dengan suku bunga tahunan $r\\%$, cukup bagi angka 72 dengan persentase suku bunga:\n$$t \\approx \\frac{72}{r}$$\n*Contoh instan:* Jika suku bunga majemuk $9\\%$ per tahun, maka modal akan berlipat ganda dalam waktu sekitar $\\frac{72}{9} = 8$ tahun!",
        "exampleProblem": "**Soal:**\nPak Rahmat menaruh dana deposito sebesar Rp40.000.000,00 di bank dengan suku bunga majemuk $8\\%$ per tahun yang dikapitalisasi setiap semester (6 bulan sekali). Tentukan saldo akhir deposito Pak Rahmat setelah 3 tahun! (Gunakan $(1{,}04)^6 \\approx 1{,}2653$).\n\n**Langkah Pembahasan:**\n1. **Identifikasi Parameter:**\n   - Modal awal: $M_0 = \\text{Rp}40.000.000$\n   - Suku bunga tahunan: $i = 8\\% = 0{,}08$\n   - Frekuensi per tahun: $m = 2$ (semesteran)\n   - Jangka waktu: $t = 3\\text{ tahun}$\n\n2. **Hitung Suku Bunga per Periode & Banyak Periode:**\n   - Suku bunga per semester: $i_{\\text{semester}} = \\frac{0{,}08}{2} = 0{,}04$ ($4\\%$)\n   - Total periode pemajemukan: $n = m \\cdot t = 2 \\times 3 = 6\\text{ semester}$\n\n3. **Hitung Saldo Akhir ($M_6$):**\n   $$M_6 = M_0 (1 + 0{,}04)^6 = 40.000.000 \\times (1{,}04)^6$$\n   $$M_6 = 40.000.000 \\times 1{,}2653 = \\text{Rp}50.612.000{,}00$$\n   Total bunga yang diperoleh adalah Rp10.612.000,00.",
        "visual": {
          "image": "assets/materi/mat_sma/bunga-anuitas_0.svg",
          "title": "Perbandingan Kurva Bunga Tunggal vs Bunga Majemuk & Frekuensi Pemajemukan",
          "caption": "Divergensi eksponensial modal bunga majemuk terhadap garis lurus bunga tunggal serta pengaruh frekuensi pemajemukan per tahun.",
          "guide": [
            "Pada Panel A, bunga tunggal hanya menghitung bunga dari modal awal sehingga grafiknya linier, sedangkan bunga majemuk menginvestasikan kembali bunga periode sebelumnya.",
            "Pada Panel B, jika bunga dimajemukkan $m$ kali dalam setahun, suku bunga tiap periode dibagi $m$ ($i/m$) dan banyak periode dikali $m$ ($m \\cdot t$)."
          ]
        }
      },
      {
        "title": "2. Nilai Tunai (Present Value) & Penyusutan Aset (Depresiasi)",
        "concept": "**1. Nilai Tunai / Present Value ($M_0$):**\nNilai modal awal masa kini yang harus diinvestasikan agar di masa mendatang (setelah $n$ periode) bernilai sebesar $M_n$ dengan suku bunga majemuk $i$:\n$$M_0 = \\frac{M_n}{(1 + i)^n} = M_n (1 + i)^{-n}$$\n\n**2. Penyusutan / Depresiasi Aset (Peluruhan Eksponensial):**\nDalam akuntansi dan matematika terapan, nilai barang modal (mesin pabrik, kendaraan, komputer, properti tertentu) mengalami penurunan nilai seiring berjalannya waktu dan pemakaian.\n\n**Metode Persentase Saldo Menurun:**\nNilai aset menyusut sebesar persentase tetap $p$ dari nilai buku pada akhir periode sebelumnya:\n$$M_n = M_0 (1 - p)^n$$\n- $M_0$ = Harga beli / nilai awal aset\n- $M_n$ = Nilai sisa / nilai buku aset pada tahun ke-$n$\n- $p$ = Tingkat persentase penyusutan per periode\n- Besar penyusutan pada tahun ke-$k$ saja:\n  $$D_k = M_{k-1} \\cdot p = M_0 \\cdot p \\cdot (1 - p)^{k-1}$$",
        "quickTip": "⚡ **Trik 'Faktor Pengurang Pengali':**\nJika suatu aset menyusut sebesar $p\\%$, nilai aset pada akhir periode adalah $(100 - p)\\%$ dari nilai periode sebelumnya!\nContoh: Menyusut $15\\%$ per tahun $\\implies$ nilai aset menjadi $85\\% = 0{,}85$ kali semula. Setelah 2 tahun nilainya menjadi $M_0 \\times (0{,}85)^2$!",
        "exampleProblem": "**Soal:**\nSebuah mobil operasional dibeli perusahaan seharga Rp180.000.000,00. Setiap tahun nilai jual mobil tersebut mengalami penyusutan sebesar $10\\%$ dari harga tahun sebelumnya.\na) Tentukan taksiran nilai jual mobil tersebut setelah 3 tahun pemakaian!\nb) Berapakah besar penurunan harga mobil khusus pada tahun ke-2 saja?\n\n**Langkah Pembahasan:**\n1. **Menghitung Nilai Jual Setelah 3 Tahun ($M_3$):**\n   - Nilai awal $M_0 = 180.000.000$\n   - Persentase penyusutan $p = 10\\% = 0{,}10$\n   - Faktor pengali nilai sisa: $(1 - 0{,}10) = 0{,}90$\n   $$M_3 = M_0 (1 - p)^3 = 180.000.000 \\times (0{,}9)^3$$\n   $$(0{,}9)^3 = 0{,}729$$\n   $$M_3 = 180.000.000 \\times 0{,}729 = \\text{Rp}131.220.000{,}00$$\n\n2. **Menghitung Besar Penyusutan Khusus Tahun ke-2 ($D_2$):**\n   - Nilai mobil akhir tahun ke-1 ($M_1$):\n     $$M_1 = 180.000.000 \\times 0{,}9 = \\text{Rp}162.000.000{,}00$$\n   - Penurunan harga di tahun ke-2 ($D_2$):\n     $$D_2 = 10\\% \\times M_1 = 0{,}10 \\times 162.000.000 = \\text{Rp}16.200.000{,}00$$",
        "visual": {
          "image": "assets/materi/mat_sma/bunga-anuitas_1.svg",
          "title": "Mekanisme Diskonto Nilai Tunai (Present Value) & Kurva Penyusutan Aset",
          "caption": "Hubungan timbal balik antara nilai tunai sekarang dan nilai masa depan serta perbandingan penyusutan aset metode saldo menurun vs garis lurus.",
          "guide": [
            "Pada Panel A, Nilai Tunai ($NT$) adalah modal yang harus disetor hari ini agar berkembang menjadi $M_n$ di masa depan: $NT = M_n / (1+i)^n$.",
            "Pada Panel B, penyusutan saldo menurun adalah kebalikan bunga majemuk dengan tanda minus: $S_n = M(1 - p)^n$."
          ]
        }
      },
      {
        "title": "3. Konsep Sistem Anuitas & Hubungan Komponen $A = a_n + b_n$",
        "concept": "**Anuitas ($A$)** adalah suatu skema pembayaran berkala dalam jumlah nominal uang yang **tetap sama** pada setiap interval waktu tertentu untuk melunasi pinjaman modal beserta akumulasi bunganya.\n\n**Komponen Pokok Pembayaran Anuitas:**\nSetiap anuitas yang dibayarkan pada periode ke-$n$ selalu terbagi menjadi dua bagian:\n$$A = a_n + b_n$$\n- $a_n$ = **Angsuran Pokok Pinjaman** periode ke-$n$ (bagian yang langsung memotong sisa utang pokok)\n- $b_n$ = **Beban Bunga Pinjaman** periode ke-$n$ (ongkos sewa modal yang dihitung dari sisa utang periode sebelumnya)\n\n**Dinamika Amortisasi Pinjaman (Prinsip Terpenting):**\n1. Karena setiap periode ada angsuran pokok yang dibayar, maka **Sisa Utang Semakin Mengecil**.\n2. Akibat sisa utang mengecil, maka **Beban Bunga ($b_n$) Semakin Menurun**:\n   $$b_n = S_{n-1} \\cdot i$$\n3. Karena besaran total anuitas $A$ nilainya konstan tetap, maka **Angsuran Pokok ($a_n$) Semakin Membesar**!\n4. **Pertumbuhan Angsuran Pokok:**\n   Angsuran pokok membentuk barisan geometri dengan rasio $(1 + i)$:\n   $$a_n = a_1 (1 + i)^{n-1}$$\n   Atau hubungan antar-dua angsuran sembarang:\n   $$a_k = a_m (1 + i)^{k-m}$$",
        "quickTip": "⚡ **Trik 'Kunci Pintu Pertama' ($b_1$ dan $a_1$):**\n1. Bunga pertama selalu dihitung dari seluruh total pinjaman mula-mula: $b_1 = M \\cdot i$.\n2. Angsuran pokok pertama langsung: $a_1 = A - b_1$.\n3. Setelah $a_1$ diperoleh, angsuran ke-$n$ langsung dicari dengan mengalikan faktor $(1 + i)^{n-1}$ tanpa perlu membuat tabel panjang!",
        "exampleProblem": "**Soal:**\nSuatu pinjaman modal usaha sebesar Rp15.000.000,00 akan dilunasi dengan anuitas tahunan sebesar Rp4.200.000,00 dengan suku bunga majemuk $10\\%$ per tahun.\na) Tentukan besar bunga dan angsuran pokok pada tahun pertama ($b_1$ dan $a_1$)!\nb) Tentukan besar angsuran pokok dan beban bunga pada tahun ketiga ($a_3$ dan $b_3$)!\n\n**Langkah Pembahasan:**\n1. **Menghitung Komponen Tahun ke-1:**\n   - Utang awal: $M = 15.000.000$, bunga $i = 10\\% = 0{,}10$, anuitas $A = 4.200.000$.\n   - Bunga tahun ke-1 ($b_1$):\n     $$b_1 = M \\cdot i = 15.000.000 \\times 0{,}10 = \\text{Rp}1.500.000{,}00$$\n   - Angsuran pokok tahun ke-1 ($a_1$):\n     $$a_1 = A - b_1 = 4.200.000 - 1.500.000 = \\text{Rp}2.700.000{,}00$$\n\n2. **Menghitung Angsuran Pokok Tahun ke-3 ($a_3$):**\n   Gunakan sifat pertumbuhan angsuran: $a_3 = a_1 (1 + i)^2$.\n   $$a_3 = 2.700.000 \\times (1 + 0{,}10)^2 = 2.700.000 \\times 1{,}21 = \\text{Rp}3.267.000{,}00$$\n\n3. **Menghitung Beban Bunga Tahun ke-3 ($b_3$):**\n   Karena $A = a_3 + b_3$:\n   $$b_3 = A - a_3 = 4.200.000 - 3.267.000 = \\text{Rp}933.000{,}00$$\n   *(Beban bunga turun drastis dari Rp1.500.000 menjadi Rp933.000, membuktikan teori amortisasi!).*",
        "visual": {
          "image": "assets/materi/mat_sma/bunga-anuitas_2.svg",
          "title": "Dekomposisi Batang Anuitas (A = an + bn) & Barisan Geometri Angsuran",
          "caption": "Stabilitas total cicilan anuitas A di mana porsi bunga terus menyusut seiring berkurangnya pokok utang dan porsi angsuran pokok tumbuh eksponensial.",
          "guide": [
            "Pada Panel A, jumlah setoran anuitas $A$ yang dibayar setiap bulan selalu tetap, tetapi di dalamnya porsi bunga $b_n$ makin kecil dan angsuran pokok $a_n$ makin besar.",
            "Pada Panel B, angsuran pokok antar periode memenuhi barisan geometri dengan rasio $(1+i)$: $a_n = a_1(1+i)^{n-1}$."
          ]
        }
      },
      {
        "title": "4. Formulasi Nilai Anuitas, Sisa Pinjaman & Tabel Amortisasi",
        "concept": "**1. Rumus Menentukan Besar Anuitas ($A$):**\nBesar anuitas berkala yang diperlukan untuk melunasi pinjaman sebesar $M$ dalam $n$ periode dengan suku bunga majemuk $i$ per periode:\n$$A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}} = \\frac{M \\cdot i \\cdot (1 + i)^n}{(1 + i)^n - 1}$$\n\n**2. Perhitungan Sisa Pinjaman ($S_k$):**\nSisa utang pinjaman setelah pembayaran anuitas ke-$k$ dapat dihitung dengan 3 metode:\n- **Metode Rekursif Sederhana:**\n  $$S_k = S_{k-1} - a_k$$\n- **Metode Hubungan Bunga Periode Berikutnya:**\n  Karena beban bunga periode $(k+1)$ dihitung dari sisa utang periode $k$, maka:\n  $$b_{k+1} = S_k \\cdot i \\implies S_k = \\frac{b_{k+1}}{i}$$\n- **Metode Akumulasi Angsuran:**\n  $$S_k = M - (a_1 + a_2 + \\dots + a_k)$$\n\n**3. Struktur Standar Tabel Amortisasi Pelunasan:**\n| Periode ($k$) | Sisa Utang Awal ($S_{k-1}$) | Anuitas ($A$) | Bunga ($b_k = S_{k-1} \\cdot i$) | Angsuran ($a_k = A - b_k$) | Sisa Utang Akhir ($S_k = S_{k-1} - a_k$) |\n|---|---|---|---|---|---|\n| 1 | $M$ | $A$ | $M \\cdot i$ | $A - b_1$ | $M - a_1$ |\n| 2 | $S_1$ | $A$ | $S_1 \\cdot i$ | $A - b_2$ | $S_1 - a_2$ |\n| $\\dots$ | $\\dots$ | $A$ | $\\dots$ | $\\dots$ | $\\dots$ |\n| $n$ | $S_{n-1}$ | $A$ | $S_{n-1} \\cdot i$ | $A - b_n = S_{n-1}$ | **$0$ (Lunas)** |",
        "quickTip": "⚡ **Trik Kilat Mencari Sisa Utang:**\nJika pada soal ujian ditanyakan sisa pinjaman pada akhir tahun ke-3 ($S_3$) dan diketahui beban bunga tahun ke-4 adalah $b_4$, JANGAN MENGHITUNG tabel dari awal! Cukup bagi beban bunga ke-4 dengan suku bunga $i$:\n$$S_3 = \\frac{b_4}{i}$$",
        "exampleProblem": "**Soal:**\nSuatu pinjaman sebesar Rp10.000.000,00 dengan suku bunga majemuk $4\\%$ per periode dilunasi menggunakan anuitas sebesar Rp2.754.900,00 selama 4 periode. Buatlah analisis tabel amortisasi untuk periode ke-1 dan ke-2!\n\n**Langkah Pembahasan:**\n1. **Analisis Periode ke-1:**\n   - Sisa Utang Awal $S_0 = \\text{Rp}10.000.000$\n   - Bunga ke-1: $b_1 = 10.000.000 \\times 4\\% = \\text{Rp}400.000$\n   - Angsuran ke-1: $a_1 = 2.754.900 - 400.000 = \\text{Rp}2.354.900$\n   - Sisa Utang Akhir $S_1 = 10.000.000 - 2.354.900 = \\text{Rp}7.645.100$\n\n2. **Analisis Periode ke-2:**\n   - Sisa Utang Awal $S_1 = \\text{Rp}7.645.100$\n   - Bunga ke-2: $b_2 = 7.645.100 \\times 4\\% = \\text{Rp}305.804$\n   - Angsuran ke-2: $a_2 = 2.754.900 - 305.804 = \\text{Rp}2.449.096$\n     *(Atau cek: $a_2 = a_1 \\times 1{,}04 = 2.354.900 \\times 1{,}04 = 2.449.096$)*\n   - Sisa Utang Akhir $S_2 = 7.645.100 - 2.449.096 = \\text{Rp}5.196.004$",
        "visual": {
          "image": "assets/materi/mat_sma/bunga-anuitas_3.svg",
          "title": "Kurva Pelunasan Sisa Pinjaman & Algoritma Tabel Amortisasi",
          "caption": "Penurunan non-linier sisa pokok pinjaman sepanjang masa kredit serta alur perhitungan bunga, angsuran pokok, dan sisa utang tiap periode.",
          "guide": [
            "Pada Panel A, kurva sisa pinjaman melandai di tahun-tahun awal dan baru turun curam mendekati akhir tenor karena angsuran pokok membesar di akhir.",
            "Pada Panel B, ingat bahwa sisa utang hanya dikurangi oleh angsuran pokok ($S_k = S_{k-1} - a_k$), bukan dikurangi oleh total anuitas $A$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "polinomial",
    "title": "Bab 7: Teori Polinomial & Persamaan Aljabar",
    "badge": "Fase F • Tingkat Lanjut",
    "icon": "layers",
    "summary": "Pelajari struktur aljabar polinomial berderajat tinggi dari algoritma pembagian bersusun hingga metode Horner yang super efisien. Terapkan Teorema Sisa, Teorema Faktor, dan Teorema Vieta untuk membongkar akar-akar suku banyak!",
    "subtopics": [
      {
        "title": "1. Struktur Polinomial & Skema Horner Nilai Fungsi",
        "concept": "Polinomial (suku banyak) dalam variabel $x$ berderajat $n$ adalah bentuk aljabar yang tersusun dari penjumlahan suku-suku dengan pangkat bilangan bulat tak-negatif:\n\n$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$$\n\n- $n \\in \\{0, 1, 2, 3, \\dots\\}$ adalah **derajat polinomial** (pangkat tertinggi).\n- $a_n \\ne 0$ adalah **koefisien utama**.\n- $a_0$ adalah **suku konstan / suku tetap**.\n\n**Metode Menghitung Nilai Polinomial $P(k)$:**\n1. **Metode Substitusi Langsung:** Menggantikan setiap nilai $x$ dengan bilangan $k$. Kurang efisien dan rawan keliru pada pangkat bilangan besar.\n2. **Metode Skema Bagan Horner (Metode Sintetik):**\n   Tuliskan seluruh koefisien secara berurutan dari pangkat tertinggi hingga terendah. (Suku yang hilang wajib ditulis berkoefisien 0!).\n   Aturan bagan: **Angka vertikal dijumlahkan ke bawah, lalu dikalikan dengan $k$ saat bergeser ke kolom kanan**. Angka terakhir di pojok kanan bawah adalah nilai $P(k)$.",
        "quickTip": "⚠️ **Trik 'Waspada Koefisien Suku Nol':** Kesalahan nomor satu siswa pada bagan Horner adalah lupa menulis koefisien 0 untuk suku yang tidak muncul! Jika suatu suku banyak berderajat 4 tidak memiliki suku $x^2$, maka kolom $x^2$ WAJIB diisi angka 0. Jika terlewat, seluruh kalkulasi akan rusak total!",
        "exampleProblem": "**Soal:** Diberikan suku banyak $P(x) = 3x^4 - 2x^3 + 5x - 7$. Hitunglah nilai dari $P(2)$ menggunakan skema Horner!\n\n**Langkah Pembahasan:**\n1. **Urutkan Koefisien Sesuai Pangkat (Lengkap):**\n   - Koefisien $x^4$: $3$\n   - Koefisien $x^3$: $-2$\n   - Koefisien $x^2$: $0$ *(Wajib ditulis 0 karena suku $x^2$ tidak ada!)*\n   - Koefisien $x^1$: $5$\n   - Konstanta $x^0$: $-7$\n   Daftar baris koefisien: $[3, -2, 0, 5, -7]$ dengan nilai evaluasi $k = 2$.\n\n2. **Eksekusi Bagan Horner:**\n   - Turunkan koefisien pertama: $3$\n   - Kalikan: $2 \\times 3 = 6 \\implies -2 + 6 = 4$\n   - Kalikan: $2 \\times 4 = 8 \\implies 0 + 8 = 8$\n   - Kalikan: $2 \\times 8 = 16 \\implies 5 + 16 = 21$\n   - Kalikan: $2 \\times 21 = 42 \\implies -7 + 42 = 35$\n\n3. **Kesimpulan:**\n   Angka di kolom terakhir adalah nilai fungsi:\n   $$P(2) = 35$$",
        "visual": {
          "image": "assets/materi/mat_sma/polinomial_0.svg",
          "title": "Perilaku Kurva Polinomial Berderajat n & Bagan Sintetik Horner",
          "caption": "Perbandingan jumlah titik balik maksimum pada polinomial derajat 2, 3, dan 4 serta alur kali-jumlah pada skema Horner.",
          "guide": [
            "Pada Panel A, polinomial berderajat $n$ memiliki paling banyak $n$ titik potong sumbu-$X$ dan paling banyak $(n-1)$ titik balik ekstrem.",
            "Pada Panel B, sebelum menyusun baris atas skema Horner, pastikan koefisien diurutkan dari pangkat tertinggi ke konstanta dan isi angka $0$ untuk suku yang hilang."
          ]
        }
      },
      {
        "title": "2. Algoritma Pembagian Polinomial & Skema Horner",
        "concept": "Berdasarkan Algoritma Pembagian Euklides, pembagian suku banyak $P(x)$ oleh pembagi $Q(x)$ menghasilkan hasil bagi $H(x)$ dan sisa pembagian $S(x)$:\n\n$$P(x) = Q(x) \\cdot H(x) + S(x)$$\n\n**Ketentuan Derajat Sisa:**\nDerajat sisa pembagian $S(x)$ selalu lebih rendah setidaknya 1 derajat dibandingkan derajat pembagi $Q(x)$:\n$$\\text{derajat } S(x) \\le \\text{derajat } Q(x) - 1$$\n\n**Metode Pembagian Berdasarkan Jenis Pembagi:**\n1. **Pembagi Linear $(x - k)$:**\n   Sisa $S$ berupa konstanta bilangan. Baris koefisien hasil Horner langsung menjadi koefisien hasil bagi $H(x)$.\n2. **Pembagi Linear $(ax + b)$:**\n   Akar pembagi adalah $x = -\\frac{b}{a}$.\n   **Perhatian Khusus:** Baris koefisien Horner hasil bagi **WAJIB dibagi dengan $a$** untuk memperoleh $H(x)$ yang sebenarnya:\n   $$H(x) = \\frac{\\text{Koefisien Baris Horner}}{a}, \\quad \\text{Sisa } S = \\text{Angka Ujung}$$\n3. **Pembagi Kuadrat $(ax^2 + bx + c)$:**\n   Dapat diselesaikan dengan pembagian bersusun panjang (*porogapit*) atau metode bagan Horner-Kino (dua baris pembagi).",
        "quickTip": "⚡ **Trik 'Bagi dengan Nilai $a$':** Ketika membagi polinomial dengan pembagi berbentuk $(ax + b)$, ingatlah bahwa angka sisa $S$ di ujung kanan TIDAK PERLU dibagi $a$, tetapi koefisien hasil bagi $H(x)$ HARUS dibagi dengan $a$!",
        "exampleProblem": "**Soal:** Tentukan hasil bagi $H(x)$ dan sisa pembagian $S(x)$ dari pembagian suku banyak $P(x) = 4x^3 - 6x^2 + 8x - 5$ oleh $(2x - 1)$!\n\n**Langkah Pembahasan:**\n1. **Menentukan Titik Pembuat Nol Pembagi:**\n   $$2x - 1 = 0 \\implies x = \\frac{1}{2} \\quad (\\text{dengan koefisien } a = 2)$$\n\n2. **Eksekusi Bagan Horner untuk $k = \\frac{1}{2}$:**\n   Koefisien $P(x)$: $[4, -6, 8, -5]$\n   - Turunkan $4$\n   - $\\frac{1}{2} \\times 4 = 2 \\implies -6 + 2 = -4$\n   - $\\frac{1}{2} \\times (-4) = -2 \\implies 8 + (-2) = 6$\n   - $\\frac{1}{2} \\times 6 = 3 \\implies -5 + 3 = -2$ (Angka Sisa)\n\n3. **Membentuk Hasil Bagi Sebenarnya:**\n   Baris koefisien sementara: $4x^2 - 4x + 6$.\n   Bagi seluruh baris ini dengan nilai $a = 2$:\n   $$H(x) = \\frac{4x^2 - 4x + 6}{2} = 2x^2 - 2x + 3$$\n   Dan sisa pembagiannya adalah:\n   $$S(x) = -2$$",
        "visual": {
          "image": "assets/materi/mat_sma/polinomial_1.svg",
          "title": "Aturan Derajat Pembagian Polinomial & Koreksi Koefisien Pembagi (ax+b)",
          "caption": "Hubungan derajat antara polinomial yang dibagi, pembagi, hasil bagi, dan sisa serta aturan pembagian koefisien hasil bagi dengan a.",
          "guide": [
            "Pada Panel A, derajat sisa pembagian $S(x)$ selalu minimal satu tingkat lebih rendah daripada derajat pembagi $Q(x)$ ($\\deg S \\le \\deg Q - 1$).",
            "Pada Panel B, saat menggunakan skema Horner untuk pembagi $(ax+b)$, barisan koefisien hasil bagi harus dibagi dengan $a$, sedangkan nilai sisa $S$ tidak berubah."
          ]
        }
      },
      {
        "title": "3. Teorema Sisa (Remainder Theorem) & Sisa Derajat Kuadrat",
        "concept": "Teorema Sisa adalah alat aljabar yang sangat cepat untuk menentukan nilai sisa pembagian tanpa perlu melakukan pembagian polinomial secara lengkap.\n\n**Kaidah Teorema Sisa:**\n1. Jika $P(x)$ dibagi oleh $(x - k)$, maka sisanya adalah:\n   $$S = P(k)$$\n2. Jika $P(x)$ dibagi oleh $(ax + b)$, maka sisanya adalah:\n   $$S = P\\left(-\\frac{b}{a}\\right)$$\n3. **Sisa Pembagian oleh Polinomial Kuadrat:**\n   Jika pembagi berbentuk kuadrat $Q(x) = (x - x_1)(x - x_2)$, maka sisa pembagiannya memiliki derajat maksimum 1 (berbentuk linear):\n   $$S(x) = px + q$$\n   Sesuai Teorema Sisa:\n   $$S(x_1) = P(x_1) \\implies px_1 + q = P(x_1)$$\n   $$S(x_2) = P(x_2) \\implies px_2 + q = P(x_2)$$\n   Selesaikan sistem linear ini untuk mendapatkan nilai parameter $p$ dan $q$.",
        "quickTip": "⚡ **Trik Gradien Sisa Kuadrat:**\\nKoefisien kemiringan $p$ pada sisa $S(x) = px + q$ dapat dihitung seketika layaknya rumus gradien:\\n$$p = \\frac{P(x_1) - P(x_2)}{x_1 - x_2}$$\\nSetelah $p$ didapat, substitusikan ke salah satu persamaan untuk mendapatkan konstanta $q$ dalam hitungan detik!",
        "exampleProblem": "**Soal:** Suatu suku banyak $P(x)$ jika dibagi oleh $(x - 1)$ menghasilkan sisa 5, dan jika dibagi oleh $(x + 2)$ menghasilkan sisa $-4$. Tentukan sisa pembagian suku banyak $P(x)$ jika dibagi oleh $(x^2 + x - 2)$!\n\n**Langkah Pembahasan:**\n1. **Faktorkan Pembagi Kuadrat:**\n   $$x^2 + x - 2 = (x - 1)(x + 2)$$\n   Pembuat nol pembagi adalah $x_1 = 1$ dan $x_2 = -2$.\n\n2. **Interpretasi Teorema Sisa:**\n   - Dibagi $(x - 1)$ sisa $5 \\implies P(1) = 5$\n   - Dibagi $(x + 2)$ sisa $-4 \\implies P(-2) = -4$\n\n3. **Mencari Nilai $p$ dan $q$ pada $S(x) = px + q$:**\n   Gunakan Trik Gradien Sisa:\n   $$p = \\frac{P(1) - P(-2)}{1 - (-2)} = \\frac{5 - (-4)}{1 + 2} = \\frac{9}{3} = 3$$\n   Mencari nilai $q$:\n   $$S(1) = p(1) + q = 5 \\implies 3(1) + q = 5 \\implies q = 5 - 3 = 2$$\n\n4. **Kesimpulan Sisa Pembagian:**\n   Sisa pembagian suku banyak tersebut adalah:\n   $$S(x) = 3x + 2$$",
        "visual": {
          "image": "assets/materi/mat_sma/polinomial_2.svg",
          "title": "Visualisasi Grafis Teorema Sisa & Garis Potong Sisa Pembagi Kuadrat",
          "caption": "Interpretasi sisa pembagian P(k) sebagai koordinat y pada kurva serta pembentukan garis lurus sisa S(x) = px + q melalui dua titik uji.",
          "guide": [
            "Pada Panel A, Teorema Sisa menyatakan bahwa sisa pembagian $P(x)$ oleh $(x-k)$ sama persis dengan nilai fungsi $P(k)$.",
            "Pada Panel B, karena $P(x) = (x-x_1)(x-x_2)H(x) + (px+q)$, di titik $x=x_1$ dan $x=x_2$ kurva $P(x)$ berpotongan tepat dengan garis sisa $S(x) = px+q$."
          ]
        }
      },
      {
        "title": "4. Teorema Faktor & Teorema Vieta (Akar-Akar Polinomial)",
        "concept": "**1. Teorema Faktor:**\nBentuk linear $(x - k)$ merupakan **faktor** dari suku banyak $P(x)$ jika dan hanya jika sisa pembagiannya bernilai nol:\n$$P(k) = 0 \\iff (x - k) \\text{ adalah faktor dari } P(x)$$\nDalam kondisi ini, bilangan real $k$ disebut sebagai **akar / pembuat nol** dari persamaan $P(x) = 0$.\n\n**2. Teorema Akar Rasional:**\nUntuk persamaan suku banyak berkoefisien bulat $a_n x^n + \\dots + a_0 = 0$, seluruh kemungkinan akar rasional $\\frac{p}{q}$ harus memenuhi:\n- $p$ adalah faktor pembagi dari konstanta $a_0$.\n- $q$ adalah faktor pembagi dari koefisien utama $a_n$.\n\n**3. Teorema Vieta untuk Persamaan Kubik ($ax^3 + bx^2 + cx + d = 0$):**\nJika persamaan memiliki akar-akar $x_1, x_2, x_3$, maka berlaku hubungan simetris:\n$$x_1 + x_2 + x_3 = -\\frac{b}{a}$$\n$$x_1 x_2 + x_1 x_3 + x_2 x_3 = \\frac{c}{a}$$\n$$x_1 x_2 x_3 = -\\frac{d}{a}$$\n\n**Rumus Penjumlahan Kuadrat Akar-Akar:**\n$$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1 x_2 + x_1 x_3 + x_2 x_3)$$",
        "quickTip": "💡 **Trik 'Irama Tanda Selang-Seling Vieta':**\\nTanda rumus Vieta selalu bergantian secara berirama dimulai dari MINUS, PLUS, MINUS, PLUS:\\n$$-\\frac{b}{a}, \\quad +\\frac{c}{a}, \\quad -\\frac{d}{a}, \\quad +\\frac{e}{a}, \\dots$$\\nSemua rumus di atas selalu membagi koefisien dengan koefisien utama $a$!",
        "exampleProblem": "**Soal:** Diketahui persamaan polinomial kubik $x^3 - 6x^2 + 11x - 6 = 0$ memiliki akar-akar $x_1, x_2$, dan $x_3$.\na) Tentukan jumlah seluruh akar ($x_1 + x_2 + x_3$) dan hasil kali seluruh akar ($x_1 x_2 x_3$)!\nb) Hitung nilai dari $x_1^2 + x_2^2 + x_3^2$!\nc) Tentukan ketiga nilai akar tersebut melalui faktorisasi!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:**\n   $a = 1, b = -6, c = 11, d = -6$.\n\n2. **Menghitung Nilai dengan Teorema Vieta:**\n   - Jumlah seluruh akar:\n     $$x_1 + x_2 + x_3 = -\\frac{b}{a} = -\\frac{-6}{1} = 6$$\n   - Jumlah hasil kali dua akar:\n     $$x_1 x_2 + x_1 x_3 + x_2 x_3 = \\frac{c}{a} = \\frac{11}{1} = 11$$\n   - Hasil kali seluruh akar:\n     $$x_1 x_2 x_3 = -\\frac{d}{a} = -\\frac{-6}{1} = 6$$\n\n3. **Menghitung Jumlah Kuadrat Akar-Akar:**\n   $$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1 x_2 + x_1 x_3 + x_2 x_3)$$\n   $$= (6)^2 - 2(11) = 36 - 22 = 14$$\n\n4. **Faktorisasi Persamaan:**\n   Uji calon akar dari faktor konstanta $-6$ (yakni $\\pm 1, \\pm 2, \\pm 3, \\pm 6$):\n   - Uji $x = 1$: $1^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$ (Cocok, $x = 1$ adalah akar).\n   - Bagi $x^3 - 6x^2 + 11x - 6$ dengan $(x - 1)$ via Horner menghasilkan faktor kuadrat $x^2 - 5x + 6$.\n   - Faktorkan kuadrat: $x^2 - 5x + 6 = (x - 2)(x - 3)$.\n   Faktorisasi lengkap:\n   $$(x - 1)(x - 2)(x - 3) = 0$$\n   Sehingga ketiga akar-akarnya berturut-turut adalah $x_1 = 1$, $x_2 = 2$, dan $x_3 = 3$.",
        "visual": {
          "image": "assets/materi/mat_sma/polinomial_3.svg",
          "title": "Titik Potong Sumbu-X Teorema Faktor & Rumus Akar Simetris Vieta",
          "caption": "Faktor linear (x - x_i) sebagai pembuat nol kurva polinomial di sumbu-X serta pola tanda bergantian (-b/a, +c/a, -d/a) pada Teorema Vieta.",
          "guide": [
            "Pada Panel A, $(x - k)$ adalah faktor dari $P(x)$ jika dan hanya jika sisa pembagiannya nol ($P(k) = 0$), yaitu kurva memotong sumbu-$X$ di $x = k$.",
            "Pada Panel B, Teorema Vieta selalu memiliki pola tanda berselang-seling dimulai dari negatif: $-b/a$, lalu $+c/a$, lalu $-d/a$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "persamaan-trigonometri",
    "title": "Bab 8: Persamaan Trigonometri Sederhana",
    "badge": "Fase F • Tingkat Lanjut",
    "icon": "compass",
    "summary": "Kuasai teknik penyelesaian persamaan trigonometri dasar dalam derajat dan radian, persamaan sudut majemuk berperiode, bentuk kuadrat pemfaktoran, hingga bentuk linier a cos x + b sin x = c secara sistematis dan terstandar UTBK!",
    "subtopics": [
      {
        "title": "1. Persamaan Trigonometri Dasar (Sinus, Kosinus, Tangen)",
        "concept": "Fungsi trigonometri memiliki sifat periodik, sehingga persamaan trigonometri umumnya memiliki lebih dari satu penyelesaian pada interval tertentu. Berdasarkan kuadran dan simetri grafiknya, rumus umum penyelesaian trigonometri dasar terbagi menjadi:\n\n**1. Persamaan Sinus (Kuadran I & II):**\n$$\\sin x = \\sin \\alpha$$\n- Cabang 1: $x = \\alpha + k \\cdot 360^\\circ$ atau $x = \\alpha + 2k\\pi$\n- Cabang 2: $x = (180^\\circ - \\alpha) + k \\cdot 360^\\circ$ atau $x = (\\pi - \\alpha) + 2k\\pi$\n\n**2. Persamaan Kosinus (Kuadran I & IV):**\n$$\\cos x = \\cos \\alpha$$\n- Cabang 1: $x = \\alpha + k \\cdot 360^\\circ$ atau $x = \\alpha + 2k\\pi$\n- Cabang 2: $x = -\\alpha + k \\cdot 360^\\circ$ atau $x = -\\alpha + 2k\\pi$\n\n**3. Persamaan Tangen (Kuadran I & III, Periode $180^\\circ$):**\n$$\\tan x = \\tan \\alpha$$\n- $x = \\alpha + k \\cdot 180^\\circ$ atau $x = \\alpha + k\\pi$\n\n*Catatan: Parameter $k$ adalah bilangan bulat sembarang ($k \\in \\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$) yang dipilih agar nilai $x$ berada di dalam interval yang diminta soal.*",
        "quickTip": "💡 **Trik 'Tangen Hanya Punya 1 Rumus':** Jangan gunakan dua cabang rumus untuk tangen! Periode fungsi tangen adalah $180^\\circ$ (bukan $360^\\circ$), sehingga rumusnya cukup SATU saja yaitu $x = \\alpha + k \\cdot 180^\\circ$. Cepat dan anti-keliru!",
        "exampleProblem": "**Soal:** Tentukan himpunan penyelesaian dari persamaan $\\sin x = \\frac{1}{2}$ untuk interval $0^\\circ \\le x \\le 360^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Ubah Nilai ke Sudut Acuan Pokok:**\n   Nilai $\\frac{1}{2} = \\sin 30^\\circ$, sehingga persamaannya menjadi $\\sin x = \\sin 30^\\circ$ (dengan $\\alpha = 30^\\circ$).\n\n2. **Uji Cabang 1 ($x = 30^\\circ + k \\cdot 360^\\circ$):**\n   - Untuk $k = 0 \\implies x = 30^\\circ + 0 = 30^\\circ$ (Memenuhi)\n   - Untuk $k = 1 \\implies x = 30^\\circ + 360^\\circ = 390^\\circ$ (Di luar interval)\n\n3. **Uji Cabang 2 ($x = (180^\\circ - 30^\\circ) + k \\cdot 360^\\circ = 150^\\circ + k \\cdot 360^\\circ$):**\n   - Untuk $k = 0 \\implies x = 150^\\circ + 0 = 150^\\circ$ (Memenuhi)\n   - Untuk $k = 1 \\implies x = 150^\\circ + 360^\\circ = 510^\\circ$ (Di luar interval)\n\n4. **Kesimpulan:**\n   $$HP = \\{30^\\circ, 150^\\circ\\}$$",
        "visual": {
          "image": "assets/materi/mat_sma/persamaan-trigonometri_0.svg",
          "title": "Perpotongan Grafis Persamaan Sinus & Kosinus pada Satu Periode",
          "caption": "Penentuan dua cabang solusi persamaan sin x = sin alpha (Kuadran I dan II) serta cos x = cos alpha (Kuadran I dan IV).",
          "guide": [
            "Pada Panel A, garis horizontal $y = 1/2$ memotong gelombang $\\sin x$ di dua titik dalam satu periode, yaitu $\\alpha = 30^\\circ$ (KW I) dan $180^\\circ - \\alpha = 150^\\circ$ (KW II).",
            "Pada Panel B, karena kurva $\\cos x$ simetris terhadap sumbu vertikal, cabangnya terletak di $+\\alpha = 60^\\circ$ (KW I) dan $-\\alpha \\equiv 360^\\circ - 60^\\circ = 300^\\circ$ (KW IV)."
          ]
        }
      },
      {
        "title": "2. Persamaan Sudut Majemuk & Pergeseran Fasa",
        "concept": "Persamaan yang memuat kelipatan sudut atau pergeseran fasa berbentuk:\n$$\\sin(ax + b) = c, \\quad \\cos(ax + b) = c, \\quad \\tan(ax + b) = c$$\n\n**Langkah Penyelesaian Sistematis:**\n1. Ubah ruas kanan $c$ menjadi perbandingan trigonometri dari sudut acuan $\\alpha$.\n2. Perlakukan paket kurung $(ax + b)$ sebagai satu kesatuan sudut utuh.\n3. Terapkan rumus periodisitas untuk $(ax + b)$.\n4. Pindahkan konstanta $b$ ke ruas kanan, lalu bagi seluruh persamaan dengan koefisien $a$.\n5. Substitusikan nilai $k \\in \\mathbb{Z}$ untuk menyaring nilai $x$ yang sah di dalam batas interval.",
        "quickTip": "⚠️ **Trik 'Jangan Buru-Buru Bagi $a$':** Jangan pernah membagi nilai sudut di dalam kurung dengan $a$ sebelum menambahkan faktor $+ k \\cdot 360^\\circ$! Faktor periode $k \\cdot 360^\\circ$ WAJIB ikut terbagi oleh koefisien $a$, sehingga periodenya mengecil menjadi $\\frac{360^\\circ}{a}$!",
        "exampleProblem": "**Soal:** Tentukan himpunan penyelesaian dari $\\cos(2x - 10^\\circ) = \\frac{1}{2}\\sqrt{3}$ untuk interval $0^\\circ \\le x \\le 180^\\circ$!\n\n**Langkah Pembahasan:**\n1. Sudut acuan: $\\frac{1}{2}\\sqrt{3} = \\cos 30^\\circ$, maka $\\cos(2x - 10^\\circ) = \\cos 30^\\circ$.\n\n2. **Cabang Positif ($2x - 10^\\circ = 30^\\circ + k \\cdot 360^\\circ$):**\n   $$2x = 40^\\circ + k \\cdot 360^\\circ \\implies x = 20^\\circ + k \\cdot 180^\\circ$$\n   - $k = 0 \\implies x = 20^\\circ$ (Memenuhi)\n   - $k = 1 \\implies x = 200^\\circ$ (Tidak memenuhi)\n\n3. **Cabang Negatif ($2x - 10^\\circ = -30^\\circ + k \\cdot 360^\\circ$):**\n   $$2x = -20^\\circ + k \\cdot 360^\\circ \\implies x = -10^\\circ + k \\cdot 180^\\circ$$\n   - $k = 0 \\implies x = -10^\\circ$ (Tidak memenuhi)\n   - $k = 1 \\implies x = -10^\\circ + 180^\\circ = 170^\\circ$ (Memenuhi)\n\n4. **Kesimpulan:**\n   $$HP = \\{20^\\circ, 170^\\circ\\}$$",
        "visual": {
          "image": "assets/materi/mat_sma/persamaan-trigonometri_1.svg",
          "title": "Efek Sudut Rangkap sin(2x) & Pergeseran Fasa Horizontal (x - phi)",
          "caption": "Pelipatgandaan jumlah akar akibat pemampatan periode pada sin(2x) serta pergeseran gelombang pada argumen (x - 45 derajat).",
          "guide": [
            "Pada Panel A, fungsi $\\sin(nx)$ memiliki periode $360^\\circ/n$, sehingga untuk $n=2$ terdapat dua gelombang penuh dan 4 titik potong dalam interval $[0^\\circ, 360^\\circ]$.",
            "Pada Panel B, selalu tuliskan bentuk umum $+ k\\cdot 360^\\circ$ terlebih dahulu sebelum memindahkan pergeseran fasa dan membagi koefisien $x$."
          ]
        }
      },
      {
        "title": "3. Persamaan Trigonometri Bentuk Kuadrat",
        "concept": "Persamaan trigonometri berbentuk persamaan aljabar kuadrat dapat diselesaikan menggunakan pemisalan variabel:\n\n$$A \\sin^2 x + B \\sin x + C = 0 \\quad \\text{atau} \\quad A \\cos^2 x + B \\cos x + C = 0$$\n\n**Langkah Kerja:**\n1. **Pemisalan:** Misalkan $u = \\sin x$ atau $u = \\cos x$.\n2. **Faktorisasi:** Selesaikan persamaan kuadrat $A u^2 + B u + C = 0$ untuk menemukan nilai-nilai akar $u_1$ dan $u_2$.\n3. **Uji Nilai Realistis (Rentang Domain):**\n   Ingat bahwa nilai sinus dan kosinus bilangan real selalu berada dalam rentang terikat:\n   $$-1 \\le \\sin x \\le 1 \\quad \\text{dan} \\quad -1 \\le \\cos x \\le 1$$\n   Jika didapat akar $u > 1$ atau $u < -1$, nilai tersebut **tidak memiliki solusi (tidak memenuhi)**.\n4. **Identitas Pengubah:** Jika dalam satu persamaan terdapat campuran $\\sin^2 x$ dan $\\cos x$, gunakan identitas Pythagoras dasar:\n   $$\\sin^2 x = 1 - \\cos^2 x \\quad \\text{atau} \\quad \\cos^2 x = 1 - \\sin^2 x$$",
        "quickTip": "⚡ **Trik 'Eliminasi Akar Palsu':** Jika hasil pemfaktoran menghasilkan $\\sin x = 2$ atau $\\cos x = -1.5$, langsung coret dan abaikan! Gelombang sinus dan kosinus tidak akan pernah melebihi puncak $+1$ atau lembah $-1$.",
        "exampleProblem": "**Soal:** Tentukan seluruh nilai $x$ yang memenuhi $2\\cos^2 x - 5\\cos x + 2 = 0$ pada interval $0^\\circ \\le x \\le 360^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Misalkan $u = \\cos x$:**\n   $$2u^2 - 5u + 2 = 0$$\n   Faktorkan: $(2u - 1)(u - 2) = 0$.\n   Diperoleh dua kemungkinan akar: $u = \\frac{1}{2}$ atau $u = 2$.\n\n2. **Evaluasi Syarat Nilai:**\n   - Untuk $u = 2 \\implies \\cos x = 2$ *(Tidak Memenuhi karena melebihi batas $+1$)*.\n   - Untuk $u = \\frac{1}{2} \\implies \\cos x = \\frac{1}{2} = \\cos 60^\\circ$ *(Memenuhi)*.\n\n3. **Selesaikan $\\cos x = \\cos 60^\\circ$ pada $[0^\\circ, 360^\\circ]$:**\n   - Cabang 1: $x = 60^\\circ + k \\cdot 360^\\circ \\implies x = 60^\\circ$\n   - Cabang 2: $x = -60^\\circ + k \\cdot 360^\\circ \\implies x = 300^\\circ$ (saat $k = 1$)\n\n4. **Kesimpulan:**\n   $$HP = \\{60^\\circ, 300^\\circ\\}$$",
        "visual": {
          "image": "assets/materi/mat_sma/persamaan-trigonometri_2.svg",
          "title": "Filter Kelayakan Substitusi Kuadrat (-1 <= p <= 1) & Identitas Penyeragam",
          "caption": "Penyaringan akar persamaan kuadrat dalam p = sin x terhadap batas nilai [-1, 1] sebelum diselesaikan ke sudut x.",
          "guide": [
            "Pada Panel A, setelah memfaktorkan persamaan kuadrat dalam $p = \\sin x$ atau $p = \\cos x$, segera coret akar yang berada di luar rentang $[-1, 1]$.",
            "Pada Panel B, jika persamaan memuat $\\cos^2 x$ dan $\\sin x$, ubah $\\cos^2 x$ menjadi $1 - \\sin^2 x$ agar seluruh suku seragam dalam satu jenis fungsi."
          ]
        }
      },
      {
        "title": "4. Persamaan Linier Bentuk $a \\cos x + b \\sin x = c$",
        "concept": "Kombinasi linear antara sinus dan kosinus dengan frekuensi sudut yang sama dapat disederhanakan menjadi satu suku kosinus tunggal:\n\n$$a \\cos x + b \\sin x = k \\cos(x - \\alpha)$$\n\nDi mana:\n1. **Konstanta Amplitudo $k$:**\n   $$k = \\sqrt{a^2 + b^2} \\quad (k > 0)$$\n2. **Sudut Fase $\\alpha$:**\n   $$\\tan \\alpha = \\frac{b}{a}$$\n   *Perhatikan tanda koordinat $(a, b)$ untuk menentukan letak kuadran $\\alpha$ layaknya koordinat Kartesius $(x, y)$!*\n   - Jika $a > 0, b > 0 \\implies$ Kuadran I\n   - Jika $a < 0, b > 0 \\implies$ Kuadran II\n   - Jika $a < 0, b < 0 \\implies$ Kuadran III\n   - Jika $a > 0, b < 0 \\implies$ Kuadran IV\n\n3. **Syarat Eksistensi Penyelesaian:**\n   Persamaan $k \\cos(x - \\alpha) = c \\implies \\cos(x - \\alpha) = \\frac{c}{k}$ hanya memiliki solusi real jika:\n   $$\\left|\\frac{c}{k}\\right| \\le 1 \\iff c^2 \\le a^2 + b^2$$\n   Jika $c^2 > a^2 + b^2$, persamaan dipastikan tidak memiliki solusi real ($HP = \\emptyset$).",
        "quickTip": "💡 **Trik 'Cek Kuadran dari Titik $(a, b)$':** Ingatlah selalu bahwa koefisien kosinus adalah koordinat absis $x$ ($a$), dan koefisien sinus adalah ordinat $y$ ($b$). Jadi letak kuadran sudut $\\alpha$ ditentukan oleh titik $(a, b)$!",
        "exampleProblem": "**Soal:** Tentukan himpunan penyelesaian dari $\\cos x + \\sqrt{3}\\sin x = 1$ untuk interval $0^\\circ \\le x \\le 360^\\circ$!\n\n**Langkah Pembahasan:**\n1. **Identifikasi Koefisien:**\n   $a = 1, b = \\sqrt{3}, c = 1$.\n\n2. **Hitung Nilai $k$ dan $\\alpha$:**\n   - $k = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$.\n   - $\\tan \\alpha = \\frac{b}{a} = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$. Karena $a > 0$ dan $b > 0$, maka $\\alpha$ berada di Kuadran I $\\implies \\alpha = 60^\\circ$.\n\n3. **Ubah Persamaan:**\n   $$2 \\cos(x - 60^\\circ) = 1 \\implies \\cos(x - 60^\\circ) = \\frac{1}{2} = \\cos 60^\\circ$$\n\n4. **Selesaikan Nilai $x$:**\n   - Cabang 1: $x - 60^\\circ = 60^\\circ + k \\cdot 360^\\circ \\implies x = 120^\\circ + k \\cdot 360^\\circ \\implies x = 120^\\circ$\n   - Cabang 2: $x - 60^\\circ = -60^\\circ + k \\cdot 360^\\circ \\implies x = 0^\\circ + k \\cdot 360^\\circ \\implies x = 0^\\circ \\text{ atau } 360^\\circ$\n\n5. **Kesimpulan:**\n   $$HP = \\{0^\\circ, 120^\\circ, 360^\\circ\\}$$",
        "visual": {
          "image": "assets/materi/mat_sma/persamaan-trigonometri_3.svg",
          "title": "Superposisi Gelombang Harmonik k cos(x - alpha) & Segitiga Fasor",
          "caption": "Penggabungan gelombang a cos x + b sin x menjadi gelombang tunggal beramplitudo k = sqrt(a^2+b^2) dan sudut fasa tan alpha = b/a.",
          "guide": [
            "Pada Panel A, penjumlahan $a\\cos x + b\\sin x$ menghasilkan gelombang kosinus baru dengan amplitudo maksimum $k = \\sqrt{a^2+b^2}$ yang bergeser sejauh sudut $\\alpha$.",
            "Pada Panel B, kuadran sudut $\\alpha$ ditentukan oleh tanda $(a, b)$ di mana $\\cos\\alpha = a/k$ dan $\\sin\\alpha = b/k$; persamaan hanya memiliki solusi real jika $|c| \\le k$."
          ]
        }
      }
    ],
    "subject": "Matematika"
  },
  {
    "id": "k11-fisika-kinematika",
    "title": "Fisika Bab 1: Kinematika Vektor Gerak Lurus, Parabola & Melingkar",
    "badge": "Fase F • Semester 1",
    "subject": "Fisika",
    "icon": "compass",
    "summary": "Kuasai kinematika analitis berbasis kalkulus, bedah kasus peluru ditembakkan dari tebing h dan sudut komplementer, serta percepatan total GMBB dan transmisi roda seporos vs sabuk.",
    "subtopics": [
      {
        "title": "1. Kinematika Vektor Berbasis Kalkulus (Diferensial & Integral)",
        "concept": "Di kelas 10, gerak hanya dianalisis dengan percepatan konstan ($a = \\text{konstan}$). Di kelas 11, posisi, kecepatan, dan percepatan dinyatakan sebagai **fungsi waktu kontinu** dalam notasi vektor satu dan dua dimensi menggunakan kalkulus dasar.\n\n---\n\n**1. Diferensiasi (Mencari Laju Perubahan Sesaat):**\n- **Vektor Posisi:**\n  $$\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}$$\n- **Vektor Kecepatan Sesaat:** Turunan pertama posisi terhadap waktu:\n  $$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\left(\\frac{dx}{dt}\\right)\\hat{i} + \\left(\\frac{dy}{dt}\\right)\\hat{j} = v_x(t)\\hat{i} + v_y(t)\\hat{j}$$\n  Besar kelajuan sesaat: $|\\vec{v}(t)| = \\sqrt{v_x^2 + v_y^2}$. Arah kecepatan: $\\tan\\theta = \\frac{v_y}{v_x}$.\n- **Vektor Percepatan Sesaat:** Turunan kedua posisi atau turunan pertama kecepatan:\n  $$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2} = a_x(t)\\hat{i} + a_y(t)\\hat{j}$$\n\n---\n\n**2. Integrasi Mundur (Mencari Posisi dari Percepatan Non-Konstan):**\nJika percepatan bervariasi terhadap waktu $a(t)$:\n$$\\vec{v}(t) = \\vec{v}_0 + \\int_0^t \\vec{a}(t') dt'$$\n$$\\vec{r}(t) = \\vec{r}_0 + \\int_0^t \\vec{v}(t') dt'$$\n\n---\n\n**🔬 Bedah Kasus Klasik Ujian SMA:**\n- **Kasus Menentukan Posisi dari Fungsi $a(t) = 6t - 4$:**\n  Jika partikel bergerak dengan percepatan $a(t) = 6t - 4$, kecepatan awal $v(0) = 2\\text{ m/s}$, dan posisi awal $x(0) = 5\\text{ m}$:\n  1. Integralkan untuk kecepatan:\n     $$v(t) = 2 + \\int_0^t (6t' - 4) dt' = 2 + 3t^2 - 4t = 3t^2 - 4t + 2$$\n  2. Integralkan untuk posisi:\n     $$x(t) = 5 + \\int_0^t (3t'^2 - 4t' + 2) dt' = 5 + t^3 - 2t^2 + 2t = t^3 - 2t^2 + 2t + 5$$\n  Persamaan ini berlaku untuk menghitung posisi di detik mana pun secara eksak.\n\n---\n\n**⚠️ Waspada Miskonsepsi & Jebakan Ujian:**\nJangan pernah mengalikan $v = a \\times t$ jika percepatan mengandung variabel $t$! Rumus GLBB $v_t = v_0 + at$ HANYA sah jika percepatannya angka tetap (konstan). Jika $a$ fungsi waktu, WAJIB menggunakan integral $\\int a \\, dt$.",
        "quickTip": "Alur mudah diingat: Dari Posisi ke Percepatan = DITURUNKAN ($r \\xrightarrow{d/dt} v \\xrightarrow{d/dt} a$). Dari Percepatan ke Posisi = DIINTEGRALKAN ($a \\xrightarrow{\\int dt} v \\xrightarrow{\\int dt} r$).",
        "exampleProblem": "**Soal Kasus Terbimbing (Ujian Harian SMA):**\nSebuah partikel bergerak pada bidang $XY$ dengan persamaan posisi $\\vec{r}(t) = (3t^2 - 2t)\\hat{i} + (4t)\\hat{j}$ dalam satuan meter dan sekon.\nTentukan:\na) Vektor kecepatan sesaat $\\vec{v}(t)$ dan vektor percepatan $\\vec{a}(t)$.\nb) Besar kecepatan dan percepatan partikel saat $t = 2\\text{ sekon}$.\n\n**Solusi Bertahap:**\n1. **Menentukan Vektor Kecepatan $\\vec{v}(t)$:**\n   $$v_x(t) = \\frac{d}{dt}(3t^2 - 2t) = 6t - 2$$\n   $$v_y(t) = \\frac{d}{dt}(4t) = 4$$\n   $$\\vec{v}(t) = (6t - 2)\\hat{i} + 4\\hat{j}\\text{ m/s}$$\n2. **Menentukan Vektor Percepatan $\\vec{a}(t)$:**\n   $$a_x(t) = \\frac{d}{dt}(6t - 2) = 6$$\n   $$a_y(t) = \\frac{d}{dt}(4) = 0$$\n   $$\\vec{a}(t) = 6\\hat{i}\\text{ m/s}^2 \\quad (\\text{konstan searah sumbu } X)$$\n3. **Perhitungan saat $t = 2\\text{ sekon}$:**\n   - Komponen kecepatan: $v_x(2) = 6(2) - 2 = 10\\text{ m/s}$ dan $v_y(2) = 4\\text{ m/s}$.\n   - Besar kecepatan: $|\\vec{v}| = \\sqrt{10^2 + 4^2} = \\sqrt{100 + 16} = \\sqrt{116} = 2\\sqrt{29} \\approx 10{,}77\\text{ m/s}$.\n   - Besar percepatan: $|\\vec{a}| = 6\\text{ m/s}^2$.",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-kinematika_0.svg",
          "title": "Transformasi Kalkulus Kinematika: Posisi x(t), Kecepatan v(t), dan Percepatan a(t)",
          "caption": "Hubungan diferensial (kemiringan garis singgung) dan integral (luas daerah berarsir di bawah kurva) pada gerak dengan percepatan fungsi waktu a(t) = 6t - 4.",
          "guide": [
            "Perhatikan Panel A: kemiringan garis singgung kurva posisi x(t) pada saat t = 2 s memberikan kecepatan sesaat v(2) = dx/dt = 6 m/s.",
            "Perhatikan Panel B: titik ekstrem minimum kecepatan terjadi saat t = 2/3 s (ketika percepatan a = 0), dan luas arsir di bawah kurva v(t) adalah perpindahan Δx = 4 m.",
            "Perhatikan Panel C: luas bersih di bawah grafik percepatan a(t) = 6t - 4 (luas positif dikurangi luas negatif) merupakan perubahan kecepatan Δv = +4 m/s."
          ]
        }
      },
      {
        "title": "2. Gerak Parabola Komprehensif (Gerak Peluru 2D) & Sudut Komplementer",
        "concept": "Gerak parabola adalah perpaduan dua gerak yang saling bebas (*Galileo's Principle of Independence of Motions*):\n- **Sumbu Horizontal ($X$):** Tidak ada percepatan ($a_x = 0$), bergerak Lurus Beraturan (GLB):\n  $$v_x = v_0 \\cos\\theta = \\text{konstan}, \\quad x(t) = (v_0 \\cos\\theta) t$$\n- **Sumbu Vertikal ($Y$):** Dipengaruhi gravitasi bumi ($a_y = -g$), bergerak Lurus Berubah Beraturan (GLBB):\n  $$v_y(t) = v_0 \\sin\\theta - gt, \\quad y(t) = (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2$$\n\n---\n\n**1. Titik Tertinggi (Puncak):**\nPada titik puncak, kelajuan vertikal sesaat bernilai nol ($v_y = 0$):\n$$0 = v_0 \\sin\\theta - g t_p \\implies t_p = \\frac{v_0 \\sin\\theta}{g}$$\n$$H_{\\max} = y(t_p) = \\frac{v_0^2 \\sin^2\\theta}{2g}$$\n\n---\n\n**2. Titik Terjauh (Jangkauan di Bidang Datar):**\nWaktu melayang total adalah dua kali waktu ke puncak ($t_{tot} = 2 t_p = \\frac{2v_0 \\sin\\theta}{g}$):\n$$X_{\\max} = x(t_{tot}) = (v_0 \\cos\\theta) \\left(\\frac{2v_0 \\sin\\theta}{g}\\right) = \\frac{v_0^2 (2\\sin\\theta \\cos\\theta)}{g} = \\frac{v_0^2 \\sin 2\\theta}{g}$$\n\n---\n\n**🔬 Bedah Kasus Klasik Ujian SMA:**\n- **Kasus 1: Peluru Ditembakkan dari Tebing Setinggi $h$:**\n  Jika penembakan dimulai dari ketinggian $h$, persamaan posisi vertikal menjadi:\n  $$y(t) = h + (v_0 \\sin\\theta) t - \\frac{1}{2}gt^2$$\n  Saat menghantam tanah ($y = 0$):\n  $$\\frac{1}{2}gt^2 - (v_0\\sin\\theta)t - h = 0$$\n  Selesaikan dengan rumus kuadrat untuk mencari $t_{jatuh}$, lalu hitung jarak horizontal $X = (v_0\\cos\\theta) t_{jatuh}$, dan kelajuan akhir saat menghantam tanah $v_{akhir} = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + 2gh}$ (berdasarkan kekekalan energi!).\n- **Kasus 2: Sudut Komplementer ($\\theta$ vs $90^\\circ - \\theta$):**\n  Jika dua peluru ditembakkan dengan kelajuan sama tetapi sudut berbeda yang berjumlah $90^\\circ$ (misalnya $30^\\circ$ dan $60^\\circ$, atau $15^\\circ$ dan $75^\\circ$):\n  $$\\sin(2(90^\\circ - \\theta)) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$$\n  Jangkauan terjauhnya ($X_{\\max}$) **persis sama**, tetapi peluru dengan sudut lebih besar akan melambung lebih tinggi dan berada di udara lebih lama.\n\n---\n\n**⚠️ Waspada Miskonsepsi & Jebakan Ujian:**\nDi titik tertinggi, kelajuan peluru **BUKAN NOL**! Yang nol hanyalah komponen vertikal ($v_y = 0$), sedangkan komponen horizontal ($v_x = v_0\\cos\\theta$) tetap aktif penuh.",
        "quickTip": "Jangkauan terjauh maksimum selalu tercapai pada sudut elevasi $\\theta = 45^\\circ$ (karena $\\sin 90^\\circ = 1$). Hubungan sakti pada $45^\\circ$: $X_{\\max} = 4 H_{\\max}$.",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe PTS/PAS):**\nSebuah meriam di atas tebing setinggi $h = 60\\text{ meter}$ menembakkan peluru dengan kelajuan $v_0 = 50\\text{ m/s}$ pada sudut elevasi $\\theta = 37^\\circ$ (diketahui $\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$, $g = 10\\text{ m/s}^2$).\nTentukan:\na) Waktu yang dibutuhkan peluru untuk mencapai tanah.\nb) Jarak horizontal dari kaki tebing ke titik jatuh peluru.\nc) Kelajuan peluru sesaat sebelum menghantam tanah.\n\n**Solusi Bertahap:**\n1. **Kecepatan Awal Komponen:**\n   $$v_{0x} = 50 \\times 0{,}8 = 40\\text{ m/s}$$\n   $$v_{0y} = 50 \\times 0{,}6 = 30\\text{ m/s}$$\n2. **Waktu Jatuh ke Tanah ($y = 0$):**\n   $$y(t) = 60 + 30t - \\frac{1}{2}(10)t^2 = 60 + 30t - 5t^2$$\n   $$0 = -5t^2 + 30t + 60 \\implies t^2 - 6t - 12 = 0$$\n   Gunakan rumus kuadrat:\n   $$t = \\frac{6 \\pm \\sqrt{(-6)^2 - 4(1)(-12)}}{2} = \\frac{6 \\pm \\sqrt{36 + 48}}{2} = \\frac{6 + \\sqrt{84}}{2} \\approx \\frac{6 + 9{,}165}{2} \\approx 7{,}58\\text{ sekon}$$\n3. **Jarak Horizontal ($X$):**\n   $$X = v_{0x} \\times t = 40 \\times 7{,}58 \\approx 303{,}2\\text{ meter}$$\n4. **Kelajuan Akhir Sebelum Menyentuh Tanah:**\n   Berdasarkan Hukum Kekekalan Energi:\n   $$v_{akhir} = \\sqrt{v_0^2 + 2gh} = \\sqrt{50^2 + 2(10)(60)} = \\sqrt{2500 + 1200} = \\sqrt{3700} \\approx 60{,}83\\text{ m/s}$$",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-kinematika_1.svg",
          "title": "Analisis Gerak Parabola dari Tebing & Perbandingan Sudut Komplementer",
          "caption": "Kiri: Lintasan peluru dari atas tebing h = 60 m beserta komponen kecepatan (vx konstan, vy berubah). Kanan: Pasangan sudut komplementer (30° & 60°) menghasilkan titik jatuh yang sama.",
          "guide": [
            "Pada titik tertinggi (puncak), kecepatan peluru TIDAK NOL karena komponen horizontal vx = v0 cos θ = 40 m/s selalu konstan sepanjang lintasan.",
            "Saat ditembakkan dari tebing setinggi h, kelajuan saat menghantam tanah dapat dihitung cepat dengan kekekalan energi: v_akhir = √(v0² + 2gh).",
            "Dua sudut elevasi yang berjumlah 90° (seperti 30° dan 60°) memiliki nilai sin(2θ) yang identik sehingga mendarat di jarak X_max yang sama persis."
          ]
        }
      },
      {
        "title": "3. Kinematika Gerak Melingkar Berubah Beraturan (GMBB) & Hubungan Roda-Roda",
        "concept": "Pada gerak melingkar, kecepatan linear selalu menyinggung lintasan (tangensial). Arahnya terus berbelok, yang berarti selalu ada percepatan ke pusat lingkaran.\n\n---\n\n**1. Analogi Besaran Translasi vs Rotasi:**\n- Perpindahan: $s = \\theta \\cdot R$ ($s$ dalam meter, $\\theta$ dalam radian).\n- Kelajuan: $v = \\omega \\cdot R$ ($\\omega$ dalam rad/s).\n- Percepatan tangensial: $a_t = \\alpha \\cdot R$ ($\\alpha$ dalam rad/s$^2$).\n\n---\n\n**2. Percepatan Sentripetal ($a_s$) vs Percepatan Tangensial ($a_t$):**\n- **Percepatan Sentripetal ($a_s$):** Bertanggung jawab **mengubah arah** vektor kecepatan, selalu mengarah tegak lurus menuju pusat lingkaran:\n  $$a_s = \\frac{v^2}{R} = \\omega^2 R$$\n- **Percepatan Tangensial ($a_t$):** Bertanggung jawab **mengubah besar** kelajuan benda, menyinggung lingkaran:\n  $$a_t = \\frac{dv}{dt} = \\alpha R$$\n- **Percepatan Total Partikel:** Karena $\\vec{a}_s \\perp \\vec{a}_t$:\n  $$a_{tot} = \\sqrt{a_s^2 + a_t^2}$$\n\n---\n\n**🔬 Bedah Kasus Klasik Ujian SMA (Transmisi 3 Model Roda):**\n1. **Roda Seporos (Satu Poros As):**\n   Diputar bersama-sama, sehingga kecepatan sudutnya sama:\n   $$\\omega_A = \\omega_B \\implies \\frac{v_A}{R_A} = \\frac{v_B}{R_B}$$\n2. **Roda Bersinggungan Luar:**\n   Gigi-gigi roda saling mengunci, kelajuan linearnya sama, arah putar berlawanan:\n   $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n3. **Roda Dihubungkan Rantai/Sabuk (Sepeda/Motor):**\n   Rantai menghubungkan tepi luar, kelajuan linearnya sama, arah putar searah:\n   $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n   *Rasio putaran:* $\\frac{\\omega_B}{\\omega_A} = \\frac{R_A}{R_B}$. Roda kecil berputar lebih cepat dibanding roda besar!",
        "quickTip": "Hafal aturan roda: Kalau SEPOROS $\\implies \\omega$ SAMA. Kalau TERSAMBUNG (rantai/singgung) $\\implies v$ SAMA.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nTiga buah roda $A$, $B$, dan $C$ memiliki jari-jari berturut-turut $R_A = 25\\text{ cm}$, $R_B = 10\\text{ cm}$, dan $R_C = 40\\text{ cm}$. Roda $A$ dihubungkan dengan rantai ke roda $B$. Roda $B$ dipasang seporos dengan roda $C$. Jika roda $A$ berputar dengan kecepatan sudut $\\omega_A = 20\\text{ rad/s}$, hitung kelajuan linear tepi roda $C$.\n\n**Solusi Bertahap:**\n1. **Hubungan Roda $A$ dan Roda $B$ (Dihubungkan Rantai):**\n   $$v_A = v_B \\implies \\omega_A R_A = \\omega_B R_B$$\n   $$20 \\times 25 = \\omega_B \\times 10 \\implies \\omega_B = \\frac{500}{10} = 50\\text{ rad/s}$$\n2. **Hubungan Roda $B$ dan Roda $C$ (Seporos):**\n   $$\\omega_C = \\omega_B = 50\\text{ rad/s}$$\n3. **Kelajuan Linear Roda $C$ ($v_C$):**\n   $$v_C = \\omega_C \\times R_C = 50\\text{ rad/s} \\times 0{,}4\\text{ m} = 20\\text{ m/s}$$\n   *Jadi, kelajuan tepi roda $C$ adalah $20\\text{ m/s}$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-kinematika_2.svg",
          "title": "Vektor Percepatan Total GMBB & Tiga Hukum Transmisi Roda",
          "caption": "Kiri: Ortogonalitas percepatan sentripetal (menuju pusat) dan percepatan tangensial (menyinggung lintasan). Kanan: Perbandingan roda seporos (ω sama) vs bersinggungan/rantai (v sama).",
          "guide": [
            "Percepatan sentripetal (a_s = v²/R) berfungsi membelokkan arah kecepatan, sedangkan percepatan tangensial (a_t = αR) mengubah besar kelajuan linear.",
            "Karena a_s dan a_t selalu saling tegak lurus (90°), percepatan total dihitung dengan Pythagoras: a_tot = √(a_s² + a_t²).",
            "Pada sistem roda: jika menyatu dalam satu poros maka kecepatan sudut ω sama; jika dihubungkan rantai atau bersinggungan tepi maka kelajuan linear v sama."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-dinamika-newton",
    "title": "Fisika Bab 2: Dinamika Gerak Partikel & Aplikasi Hukum Newton",
    "badge": "Fase F • Semester 1",
    "subject": "Fisika",
    "icon": "zap",
    "summary": "Kuasai FBD gaya kontak dan 4 kondisi orang di lift, bidang miring kasar & sudut kritis tan theta = mu_s, pesawat Atwood meja terhubung, serta tikungan miring dan ayunan konis.",
    "subtopics": [
      {
        "title": "1. Diagram Bebas Gaya (FBD) & 4 Skenario Orang di Dalam Lift",
        "concept": "Dinamika menjawab *mengapa* benda bergerak: interaksi gaya menghasilkan percepatan ($\\Sigma \\vec{F} = m\\vec{a}$). Gaya Normal ($N$) adalah gaya kontak penahan tegak lurus permukaan yang dirasakan sebagai sensasi berat semu (*apparent weight*).\n\n---\n\n**🔬 Bedah Kasus Klasik: Timbangan Seseorang di Dalam Lift**\nSeseorang bermassa $m$ berdiri di atas timbangan badan di lantai lift ($g = \\text{gravitasi}$):\n\n1. **Kasus 1: Lift Diam atau Bergerak dengan Kecepatan Konstan ($a = 0$):**\n   $$\\Sigma F_y = 0 \\implies N - mg = 0 \\implies N = mg$$\n   *Jarum timbangan menunjukkan berat normal sesungguhnya.*\n2. **Kasus 2: Lift Bergerak Naik Dipercepat ($a \\uparrow$) atau Turun Diperlambat:**\n   $$\\Sigma F_y = m \\cdot a \\implies N - mg = m a \\implies N = m(g + a)$$\n   *Gaya desak kaki membesar ($N > mg$), badan terasa lebih berat ditekan ke lantai.*\n3. **Kasus 3: Lift Bergerak Turun Dipercepat ($a \\downarrow$) atau Naik Diperlambat:**\n   $$\\Sigma F_y = m \\cdot a \\implies mg - N = m a \\implies N = m(g - a)$$\n   *Gaya desak kaki mengecil ($N < mg$), badan terasa lebih ringan melayang.*\n4. **Kasus 4: Tali Penggantung Lift Putus (Jatuh Bebas, $a = g \\downarrow$):**\n   $$N = m(g - g) = 0$$\n   *Kondisi tanpa bobot (weightlessness), orang melayang tidak menekan lantai lift sama sekali!*",
        "quickTip": "Trik tanda rumus lift: Jika arah gerak DIPERCEPAT ke atas $\\implies N = m(g + a)$. Jika DIPERCEPAT ke bawah $\\implies N = m(g - a)$.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSeorang siswa bermassa $m = 50\\text{ kg}$ menaiki lift di gedung bertingkat. Saat lift mulai bergerak turun menuju lantai dasar, lift mengalami percepatan ke bawah sebesar $a = 2\\text{ m/s}^2$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, hitung angka berat semu yang terbaca pada timbangan.\n\n**Solusi Bertahap:**\n1. **Analisis Diagram Benda Bebas (FBD):**\n   Gaya yang bekerja pada siswa: Gaya Normal ($N$) ke atas dan Gaya Berat ($W = mg = 50 \\times 10 = 500\\text{ N}$) ke bawah.\n2. **Terapkan Hukum II Newton Sumbu Vertikal:**\n   Karena lift bergerak turun dipercepat ($a$ ke bawah):\n   $$\\Sigma F_y = m a \\implies W - N = m a$$\n   $$500 - N = 50 \\times 2$$\n   $$500 - N = 100 \\implies N = 500 - 100 = 400\\text{ Newton}$$\n3. **Massa yang Terbaca:** $m' = \\frac{N}{g} = \\frac{400}{10} = 40\\text{ kg}$ (terasa 10 kg lebih ringan).",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-newton_0.svg",
          "title": "Empat Skenario Berat Semu (Gaya Normal N) Seseorang di Dalam Lift",
          "caption": "Perbandingan panjang vektor Gaya Normal N (hijau) terhadap Gaya Berat mg = 500 N (merah) pada empat kondisi percepatan lift.",
          "guide": [
            "Timbangan badan tidak mengukur massa maupun berat mg secara langsung, melainkan mengukur besar Gaya Normal (N) tekan telapak kaki.",
            "Saat lift dipercepat ke atas (Skenario 2), lantai harus mendorong lebih kuat sehingga N = m(g + a) = 600 N (terasa lebih berat).",
            "Saat lift dipercepat ke bawah (Skenario 3), N = m(g - a) = 400 N; dan jika tali putus (a = g), N = 0 N sehingga terjadi kondisi tanpa bobot."
          ]
        }
      },
      {
        "title": "2. Bidang Miring Kasar, Gaya Gesek & Sudut Kritis Kemiringan",
        "concept": "Pada bidang miring dengan sudut $\\theta$ terhadap horizontal, gaya berat diuraikan terhadap bidang kontak:\n- Komponen sejajar bidang (penarik meluncur ke bawah): $W_x = mg \\sin\\theta$.\n- Komponen tegak lurus bidang (penekan permukaan): $W_y = mg \\cos\\theta$.\n- Gaya normal penyangga: $N = W_y = mg \\cos\\theta$.\n\n---\n\n**1. Gaya Gesek Statis vs Kinetis:**\n- **Gaya Gesek Statis Maksimum:** Nilai ambang batas sebelum benda bergerak:\n  $$f_{s,\\max} = \\mu_s N = \\mu_s mg \\cos\\theta$$\n- **Gaya Gesek Kinetis:** Bekerja saat benda sudah meluncur:\n  $$f_k = \\mu_k N = \\mu_k mg \\cos\\theta$$\n\n---\n\n**🔬 Bedah Kasus Klasik Ujian: Sudut Kritis Kemiringan ($\\tan\\theta_c = \\mu_s$)**\nBayangkan balok berada di papan miring yang sudutnya perlahan dinaikkan:\n- Syarat tepat akan meluncur adalah gaya penarik sama dengan gesekan statis maksimum:\n  $$mg \\sin\\theta_c = f_{s,\\max} = \\mu_s mg \\cos\\theta_c$$\n- Bagi kedua ruas dengan $mg \\cos\\theta_c$:\n  $$\\frac{\\sin\\theta_c}{\\cos\\theta_c} = \\mu_s \\implies \\tan\\theta_c = \\mu_s$$\n*Kesimpulan Fisis Emas:* Sudut kritis murni ditentukan oleh koefisien gesekan bahan, **sama sekali tidak bergantung pada massa benda**! Balok kayu $1\\text{ kg}$ dan balok kayu $100\\text{ kg}$ akan mulai meluncur pada sudut kemiringan yang sama persis.\n\n---\n\n**Kasus Meluncur Dipercepat:**\nJika $\\theta > \\theta_c$, percepatan ke bawah bidang adalah:\n$$a = \\frac{W_x - f_k}{m} = \\frac{mg\\sin\\theta - \\mu_k mg\\cos\\theta}{m} = g(\\sin\\theta - \\mu_k \\cos\\theta)$$",
        "quickTip": "Jika $\\tan\\theta \\le \\mu_s \\implies$ Benda DIAM. Gaya gesek yang bekerja BUKAN $\\mu_s N$, melainkan tepat sebesar gaya penariknya: $f_s = mg\\sin\\theta$.",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe Ulangan Harian):**\nSebuah balok bermassa $m = 4\\text{ kg}$ diletakkan pada bidang miring dengan sudut $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$, $\\cos 37^\\circ = 0{,}8$). Koefisien gesekan antara balok dan bidang adalah $\\mu_s = 0{,}8$ dan $\\mu_k = 0{,}5$. Ambil $g = 10\\text{ m/s}^2$.\nUjilah apakah balok diam atau meluncur, lalu tentukan gaya gesek dan percepatannya!\n\n**Solusi Bertahap:**\n1. **Hitung Gaya Penggerak dan Gaya Gesek Statis Maksimum:**\n   - Gaya penarik ke bawah bidang: $W_x = mg \\sin 37^\\circ = 4 \\times 10 \\times 0{,}6 = 24\\text{ N}$.\n   - Gaya normal: $N = mg \\cos 37^\\circ = 4 \\times 10 \\times 0{,}8 = 32\\text{ N}$.\n   - Gaya gesek statis maksimum: $f_{s,\\max} = \\mu_s N = 0{,}8 \\times 32 = 25{,}6\\text{ N}$.\n2. **Uji Keadaan Gerak:**\n   Bandingkan $W_x$ dengan $f_{s,\\max}$:\n   $$W_x (24\\text{ N}) < f_{s,\\max} (25{,}6\\text{ N})$$\n   Karena gaya penarik lebih kecil dari gaya penahan maksimum, **balok TETAP DIAM**!\n3. **Besar Gaya Gesek dan Percepatan:**\n   - Karena balok diam, gaya gesek yang bekerja adalah gaya gesek statis riil: $f_s = W_x = 24\\text{ Newton}$ (bukan 25,6 N!).\n   - Percepatan balok: $a = 0\\text{ m/s}^2$.",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-newton_1.svg",
          "title": "Uraian Gaya pada Bidang Miring Kasar & Kurva Transisi Gesekan Statis-Kinetis",
          "caption": "Kiri: Penguraian gaya berat mg menjadi komponen penggerak mg sin θ dan penekan mg cos θ. Kanan: Kurva gaya gesek terhadap gaya tarik yang menunjukkan ambang statis maksimum fs,max.",
          "guide": [
            "Pada bidang miring, Gaya Normal N TIDAK SAMA dengan mg, melainkan mengimbangi komponen tegak lurus bidang: N = mg cos θ.",
            "Selama gaya penarik mg sin θ belum melampaui batas maksimum fs,max = μs N, balok tetap diam dan besar gaya gesek sama persis dengan gaya penariknya (fs = mg sin θ).",
            "Sudut kritis kemiringan saat balok tepat akan meluncur memenuhi tan θc = μs dan tidak bergantung pada massa balok."
          ]
        }
      },
      {
        "title": "3. Sistem Katrol Terhubung (Pesawat Atwood) & Balok Gandeng",
        "concept": "Pada sistem banyak benda yang dihubungkan tali tak bermassa melalui katrol licin, percepatan seluruh benda besarnya sama ($a$), tetapi arahnya mengikuti lintasan tali.\n\n---\n\n**🔬 Bedah Kasus 1: Pesawat Atwood Dua Beban Menggantung ($m_2 > m_1$)**\n- Gaya penggerak adalah selisih berat: $\\Sigma F_{eksternal} = m_2 g - m_1 g$.\n- Massa total yang digerakkan: $m_{tot} = m_1 + m_2$.\n- Percepatan sistem:\n  $$a = \\frac{m_2 - m_1}{m_1 + m_2} g$$\n- Tegangan tali penghubung $T$ (tinjau benda 1 yang bergerak naik: $T - m_1 g = m_1 a$):\n  $$T = \\frac{2 m_1 m_2}{m_1 + m_2} g$$\n\n---\n\n**🔬 Bedah Kasus 2: Katrol Meja Datar (Massa di Meja + Beban Menggantung)**\nBalok $m_1$ berada di meja datar kasar (koefisien $\\mu_k$) dihubungkan ke beban $m_2$ yang menggantung bebas:\n- Gaya penarik sistem: $W_2 = m_2 g$.\n- Gaya penghambat sistem: $f_k = \\mu_k m_1 g$.\n- Percepatan sistem:\n  $$a = \\frac{m_2 g - \\mu_k m_1 g}{m_1 + m_2} = \\frac{m_2 - \\mu_k m_1}{m_1 + m_2} g$$\n- Tegangan tali penghubung: $T = m_2(g - a)$.",
        "quickTip": "Metode Cepat 'Satu Sistem': $a = \\frac{\\text{Gaya Penarik Netto}}{\\text{Massa Total Sistem}}$. Tidak perlu mengeliminasi $T$ berulang kali!",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nBalok $A$ bermassa $3\\text{ kg}$ berada di atas meja datar kasar dengan koefisien gesek kinetis $\\mu_k = 0{,}2$. Balok $A$ dihubungkan dengan tali ringan melalui katrol licin ke balok $B$ bermassa $2\\text{ kg}$ yang tergantung bebas vertikal ($g = 10\\text{ m/s}^2$).\nTentukan percepatan gerak kedua balok dan besar tegangan tali penghubung!\n\n**Solusi Bertahap:**\n1. **Identifikasi Gaya:**\n   - Penarik: $W_B = m_B g = 2 \\times 10 = 20\\text{ N}$.\n   - Penghambat meja: $f_k = \\mu_k m_A g = 0{,}2 \\times (3 \\times 10) = 6\\text{ N}$.\n   - Massa total: $m_{tot} = m_A + m_B = 3 + 2 = 5\\text{ kg}$.\n2. **Hitung Percepatan Sistem ($a$):**\n   $$a = \\frac{W_B - f_k}{m_A + m_B} = \\frac{20 - 6}{5} = \\frac{14}{5} = 2{,}8\\text{ m/s}^2$$\n3. **Hitung Tegangan Tali ($T$):**\nTinjau balok $B$ yang bergerak turun:\n   $$m_B g - T = m_B a \\implies T = m_B (g - a) = 2(10 - 2{,}8) = 2(7{,}2) = 14{,}4\\text{ Newton}$$.\n*(Nilai $T$ ini persis sama jika ditinjau dari balok $A$: $T - f_k = m_A a \\implies T = 6 + 3(2{,}8) = 14{,}4\\text{ N}$)*.",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-newton_2.svg",
          "title": "Sistem Katrol Pesawat Atwood & Balok Terhubung di Meja Kasar",
          "caption": "Kiri: Pesawat Atwood dengan dua beban menggantung vertikal. Kanan: Sistem balok di atas meja kasar yang ditarik oleh beban menggantung melalui katrol licin.",
          "guide": [
            "Gunakan Metode Sistem Utuh untuk mencari percepatan secara instan: a = (Gaya Penggerak - Gaya Penghambat) / Massa Total.",
            "Pada sistem meja kasar (Panel B), penggeraknya adalah berat balok menggantung WB = 20 N dan penghambatnya adalah gesekan meja fk = 6 N.",
            "Setelah percepatan a = 2,8 m/s² diperoleh, tinjau salah satu benda saja (misal balok B: WB - T = mB·a) untuk mendapatkan tegangan tali T = 14,4 N."
          ]
        }
      },
      {
        "title": "4. Dinamika Gerak Melingkar: Tikungan Jalan Miring & Ayunan Konis",
        "concept": "Gaya sentripetal ($F_s = m \\frac{v^2}{R}$) bukanlah gaya baru yang misterius, melainkan **nama peran** yang dimainkan oleh gaya-gaya riil (seperti gesekan, komponen gaya normal, atau tegangan tali) yang mengarah ke pusat lingkaran.\n\n---\n\n**🔬 Bedah Kasus 1: Tikungan Jalan Datar Kasar**\nMobil berbelok pada jalan datar berjari-jari $R$. Gaya sentripetal murni disediakan oleh gaya gesek statis ban:\n$$f_s = m \\frac{v^2}{R} \\le \\mu_s mg \\implies v_{\\max} = \\sqrt{\\mu_s g R}$$\nJika kelajuan mobil melebihi $v_{\\max}$, mobil pasti selip tergelincir ke luar lintasan.\n\n---\n\n**🔬 Bedah Kasus 2: Tikungan Jalan Miring Licin (Banked Road)**\nAgar mobil dapat berbelok aman saat jalanan licin basah ($\\mu = 0$), jalan tol dibuat miring dengan sudut $\\theta$ terhadap horizontal:\n- Komponen normal vertikal menahan berat mobil: $N \\cos\\theta = mg \\implies N = \\frac{mg}{\\cos\\theta}$.\n- Komponen normal horizontal bertindak sebagai gaya sentripetal: $N \\sin\\theta = m \\frac{v^2}{R}$.\n- Bagi kedua persamaan:\n  $$\\frac{N \\sin\\theta}{N \\cos\\theta} = \\frac{m v^2 / R}{mg} \\implies \\tan\\theta = \\frac{v^2}{g R} \\implies v_{\\text{ideal}} = \\sqrt{g R \\tan\\theta}$$\nPada kelajuan $v_{\\text{ideal}}$, mobil dapat berbelok tanpa membutuhkan gaya gesekan sama sekali!\n\n---\n\n**🔬 Bedah Kasus 3: Ayunan Konis (Conical Pendulum)**\nBenda bermassa $m$ digantung tali panjang $L$, berputar mendatar membentuk kerucut bersudut $\\theta$ terhadap garis vertikal:\n- Jari-jari lingkaran: $R = L \\sin\\theta$.\n- Tegangan tali vertikal: $T \\cos\\theta = mg$, horizontal: $T \\sin\\theta = m \\omega^2 R$.\n- Periode putaran:\n  $$T_{\\text{periode}} = 2\\pi \\sqrt{\\frac{L \\cos\\theta}{g}}$$",
        "quickTip": "Rumus emas tikungan miring & ayunan konis selalu sama: $\\tan\\theta = \\frac{v^2}{g R}$.",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe UTBK/SNBT):**\nSebuah mobil balap melintasi tikungan jalan sirkuit beradius $R = 45\\text{ meter}$ yang dimiringkan sebesar sudut $\\theta = 37^\\circ$ terhadap horizontal ($\\tan 37^\\circ = 0{,}75$). Jika jalanan sangat licin karena tumpahan minyak (gesekan diabaikan, $g = 10\\text{ m/s}^2$), berapakah kelajuan mobil balap yang paling aman agar tidak tergelincir ke atas maupun ke bawah tanjakan?\n\n**Solusi Bertahap:**\n1. **Gunakan Hubungan Tikungan Miring Licin:**\n   $$\\tan\\theta = \\frac{v^2}{g R}$$\n2. **Substitusikan Nilai:**\n   $$0{,}75 = \\frac{v^2}{10 \\times 45} = \\frac{v^2}{450}$$\n   $$v^2 = 0{,}75 \\times 450 = 337{,}5$$\n   $$v = \\sqrt{337{,}5} \\approx 18{,}37\\text{ m/s} \\approx 66{,}1\\text{ km/jam}$$\n*Jika pengemudi memacu mobil tepat pada kelajuan ini, mobil berbelok sempurna tanpa gaya gesekan ban!*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-newton_3.svg",
          "title": "Dinamika Sentripetal: Tikungan Jalan Miring (Banked Road) & Ayunan Konis",
          "caption": "Kiri: Komponen horizontal gaya normal N sin θ menyediakan gaya sentripetal pada tikungan miring. Kanan: Komponen horizontal tegangan tali T sin θ memutar beban pada ayunan konis.",
          "guide": [
            "Gaya sentripetal bukanlah gaya baru, melainkan dipasok oleh komponen horizontal Gaya Normal (N sin θ) pada jalan miring atau Tegangan Tali (T sin θ) pada ayunan konis.",
            "Komponen vertikal (N cos θ atau T cos θ) bertugas menahan berat benda mg agar setimbang secara vertikal (ΣFy = 0).",
            "Membagi persamaan horizontal dengan vertikal menghasilkan rumus kembar yang identik: tan θ = v² / (gR)."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-usaha-energi-momentum",
    "title": "Fisika Bab 3: Usaha, Teorema Energi Mekanik, Impuls & Tumbukan",
    "badge": "Fase F • Semester 1",
    "subject": "Fisika",
    "icon": "activity",
    "summary": "Kuasai Teorema Usaha-Energi Kinetik grafis F-x, bukti ketinggian kritis loop roller coaster h = 2.5R, ayunan balistik peluru, dan pantulan bola berulang h_n = e^(2n) h_0.",
    "subtopics": [
      {
        "title": "1. Usaha oleh Gaya Variabel & Teorema Usaha-Energi Kinetik",
        "concept": "Usaha ($W$) adalah proses transfer energi melalui penerapan gaya sepanjang perpindahan. Jika gaya searah perpindahan membentuk sudut $\\alpha$:\n$$W = \\vec{F} \\cdot \\vec{s} = F s \\cos\\alpha$$\n\n---\n\n**1. Gaya Variabel (Integral Grafis $F - x$):**\nJika besar gaya berubah-ubah terhadap posisi $F(x)$, usaha dihitung melalui integral:\n$$W = \\int_{x_1}^{x_2} F(x) dx = \\text{Luas daerah di bawah kurva grafik } F-x$$\n\n---\n\n**2. Teorema Usaha-Energi Kinetik (Work-Energy Theorem):**\nUsaha total yang dilakukan oleh seluruh resultan gaya yang bekerja pada benda selalu sama persis dengan perubahan energi kinetik benda tersebut:\n$$W_{\\text{net}} = \\Delta E_k = \\frac{1}{2}m v_2^2 - \\frac{1}{2}m v_1^2$$\nTeorema ini sangat sakti karena dapat menyelesaikan soal gerak rumit tanpa perlu mencari percepatan $a(t)$ terlebih dahulu!",
        "quickTip": "Jika melihat grafik $F$ terhadap $x$: Usaha di atas sumbu $x$ bernilai POSITIF, usaha di bawah sumbu $x$ bernilai NEGATIF.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah balok bermassa $m = 2\\text{ kg}$ mula-mula diam di atas lantai licin ($v_1 = 0$). Balok kemudian ditarik oleh gaya mendatar yang besarnya berubah terhadap posisi menurut fungsi $F(x) = (4 + 6x)\\text{ N}$ dari posisi $x = 0$ hingga $x = 3\\text{ meter}$. Tentukan kelajuan balok di posisi $x = 3\\text{ meter}$.\n\n**Solusi Bertahap:**\n1. **Hitung Usaha Total via Integral:**\n   $$W = \\int_0^3 (4 + 6x) dx = \\left[ 4x + 3x^2 \\right]_0^3 = (4(3) + 3(3^2)) - 0 = 12 + 27 = 39\\text{ Joule}$$\n2. **Terapkan Teorema Usaha-Energi:**\n   $$W = \\Delta E_k = \\frac{1}{2}m v_2^2 - \\frac{1}{2}m v_1^2$$\n   $$39 = \\frac{1}{2}(2) v_2^2 - 0 \\implies v_2^2 = 39 \\implies v_2 = \\sqrt{39} \\approx 6{,}24\\text{ m/s}$$\n*Kelajuan balok di posisi 3 meter adalah $\\sqrt{39}\\text{ m/s}$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-usaha-energi-momentum_0.svg",
          "title": "Teorema Usaha-Energi Kinetik & Perhitungan Usaha melalui Luas Grafik F-x",
          "caption": "Kiri: Hanya komponen gaya yang sejajar perpindahan (F cos α) yang melakukan usaha mekanik. Kanan: Usaha oleh gaya variabel F(x) = 4 + 6x sama dengan luas trapesium di bawah kurva.",
          "guide": [
            "Gaya yang tegak lurus arah gerak (seperti F sin α, Gaya Normal, atau Gaya Sentripetal) tidak melakukan usaha sama sekali (W = 0).",
            "Jika gaya berubah terhadap posisi F(x), jangan mengalikan F × x biasa; hitunglah integral atau luas daerah di bawah grafik F terhadap x.",
            "Berdasarkan Teorema Usaha-Energi Kinetik, luas grafik W = 39 J langsung sama dengan pertambahan energi kinetik ΔEk benda."
          ]
        }
      },
      {
        "title": "2. Hukum Kekekalan Energi Mekanik & Loop Kritis Roller Coaster",
        "concept": "Jika pada sistem hanya bekerja gaya-gaya konservatif (seperti gravitasi dan gaya pegas), maka **Energi Mekanik Total Kekal**:\n$$E_{m1} = E_{m2} \\implies E_{k1} + E_{p1} = E_{k2} + E_{p2}$$\nJika ada gaya non-konservatif (seperti gesekan $f_k$), maka energi mekanik berkurang:\n$$W_{\\text{gesek}} = \\Delta E_m = -f_k s$$\n\n---\n\n**🔬 Bedah Kasus Klasik: Ketinggian Kritis Loop Roller Coaster ($h_{\\min} = 2{,}5 R$)**\nKereta roller coaster bermassa $m$ meluncur dari ketinggian $h$ menuju rel melingkar vertikal berjari-jari $R$:\n1. **Syarat Kereta Tidak Jatuh di Puncak Loop:**\n   Di titik tertinggi lingkaran (ketinggian $2R$), gaya yang bekerja adalah berat $mg$ dan gaya normal rel $N$ yang keduanya mengarah ke bawah:\n   $$\\Sigma F_r = N + mg = m \\frac{v_{\\text{top}}^2}{R}$$\n   Agar roda tidak terlepas dari rel, gaya kontak normal tidak boleh negatif ($N \\ge 0$):\n   $$mg \\le m \\frac{v_{\\text{top}}^2}{R} \\implies v_{\\text{top},\\min} = \\sqrt{g R}$$\n2. **Kekekalan Energi dari Puncak Peluncuran ke Puncak Loop:**\n   $$E_{m,\\text{awal}} = E_{m,\\text{puncak}}$$\n   $$mgh_{\\min} = mg(2R) + \\frac{1}{2} m v_{\\text{top}}^2 = 2mgR + \\frac{1}{2}m(gR) = 2{,}5 mgR$$\n   $$h_{\\min} = 2{,}5 R$$\n*Inilah alasan mengapa bukit peluncuran roller coaster selalu dibuat minimal 2,5 kali lebih tinggi dibanding radius lingkarannya!*",
        "quickTip": "Rumus cepat loop vertikal licin: Tinggi minimum pelepasan $h_{\\min} = 2{,}5 R$, kelajuan di titik terendah dasar loop $v_{\\text{dasar}} = \\sqrt{5 g R}$.",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe Ujian Sekolah):**\nKereta luncur bermassa $m = 400\\text{ kg}$ dilepas dari keadaan diam pada lintasan rel licin dari ketinggian $h = 30\\text{ meter}$. Kereta kemudian memasuki loop lingkaran vertikal berjari-jari $R = 10\\text{ meter}$. Hitung gaya normal yang dikerjakan rel pada kereta saat berada di titik tertinggi lingkaran ($g = 10\\text{ m/s}^2$).\n\n**Solusi Bertahap:**\n1. **Kekekalan Energi untuk Kelajuan di Puncak Loop ($h_2 = 2R = 20\\text{ m}$):**\n   $$mgh = mgh_2 + \\frac{1}{2}m v_{\\text{top}}^2$$\n   $$g(30) = g(20) + \\frac{1}{2} v_{\\text{top}}^2 \\implies 10(30 - 20) = \\frac{1}{2} v_{\\text{top}}^2$$\n   $$100 = \\frac{1}{2} v_{\\text{top}}^2 \\implies v_{\\text{top}}^2 = 200\\text{ (m/s)}^2$$\n2. **Dinamika Melingkar di Puncak:**\n   $$N + mg = m \\frac{v_{\\text{top}}^2}{R}$$\n   $$N + 400(10) = 400 \\times \\frac{200}{10}$$\n   $$N + 4000 = 400 \\times 20 = 8000$$\n   $$N = 8000 - 4000 = 4000\\text{ Newton}$$\n*Kereta menekan rel dengan gaya 4000 N ke atas (sangat aman dari risiko jatuh).* ",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-usaha-energi-momentum_1.svg",
          "title": "Kekekalan Energi Mekanik & Bukti Ketinggian Minimum Loop Roller Coaster (h = 2,5 R)",
          "caption": "Kiri: Kereta dilepas dari bukit h_min = 2,5 R agar memiliki kelajuan kritis v_top = √(gR) di puncak loop. Kanan: Diagram batang konversi Ep dan Ek dengan jumlah Em yang selalu konstan.",
          "guide": [
            "Melepas kereta dari ketinggian h = 2R TIDAK CUKUP untuk melewati loop berjari-jari R, karena di puncak loop kereta wajib masih memiliki kelajuan minimum v_top = √(gR).",
            "Di titik puncak C (h = 2R), energi potensial bernilai 2 mgR dan energi kinetik minimum bernilai 0,5 mgR, sehingga energi mekanik total wajib minimal 2,5 mgR (h_min = 2,5 R).",
            "Di titik terendah B (h = 0), seluruh energi mekanik berubah menjadi energi kinetik dengan kelajuan maksimum v_B = √(5gR)."
          ]
        }
      },
      {
        "title": "3. Impuls, Tumbukan, Ayunan Balistik & Pantulan Bola Berulang",
        "concept": "Hukum Kekekalan Momentum Linear berlaku untuk semua jenis tumbukan asalkan tidak ada gaya luar netto yang bekerja pada sistem ($\\Sigma \\vec{F}_{ext} = 0$):\n$$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'$$\n\n---\n\n**1. Koefisien Restitusi ($e$):**\n$$e = -\\frac{v_1' - v_2'}{v_1 - v_2}$$\n- $e = 1$: Tumbukan Lenting Sempurna (Energi Kinetik Kekal).\n- $0 < e < 1$: Tumbukan Lenting Sebagian (Energi Kinetik berkurang jadi panas).\n- $e = 0$: Tumbukan Tidak Lenting Sama Sekali (Benda menempel dan bergerak bersama, $\\vec{v}_1' = \\vec{v}_2'$).\n\n---\n\n**🔬 Bedah Kasus 1: Ayunan Balistik (Ballistic Pendulum)**\nPeluru $m$ berkecepatan $v_0$ menembus balok kayu $M$ yang tergantung tali dan bersarang di dalamnya:\n1. **Tahap Tumbukan (Tidak Lenting, Momentum Kekal):**\n   $$m v_0 = (m + M) V' \\implies V' = \\frac{m}{m + M} v_0$$\n2. **Tahap Ayunan Naik (Energi Mekanik Kekal):**\n   $$\\frac{1}{2}(m + M)(V')^2 = (m + M)gh \\implies V' = \\sqrt{2gh}$$\n3. **Hubungkan Kedua Tahap:**\n   $$v_0 = \\left(\\frac{m + M}{m}\\right) \\sqrt{2gh}$$\n\n---\n\n**🔬 Bedah Kasus 2: Pantulan Bola Berulang di Lantai**\nBola dijatuhkan bebas dari tinggi $h_0$ dan memantul berturut-turut setinggi $h_1, h_2, \\dots, h_n$:\n$$e = \\sqrt{\\frac{h_1}{h_0}} = \\sqrt{\\frac{h_2}{h_1}} = \\dots = \\sqrt{\\frac{h_n}{h_{n-1}}} \\implies h_n = e^{2n} h_0$$",
        "quickTip": "Jika dua benda bermassa sama ($m_1 = m_2$) bertumbukan lenting sempurna ($e = 1$) searah garis lurus, keduanya saling bertukar kecepatan: $v_1' = v_2$ dan $v_2' = v_1$!",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah peluru bermassa $m = 20\\text{ gram}$ ($0{,}02\\text{ kg}$) ditembakkan horizontal ke dalam balok kayu bermassa $M = 1{,}98\\text{ kg}$ yang tergantung pada seutas tali ringan. Peluru bersarang di dalam balok dan keduanya berayun bersama hingga mencapai ketinggian maksimum $h = 20\\text{ cm}$ ($0{,}2\\text{ m}$). Tentukan kelajuan awal peluru sebelum menumbuk balok ($g = 10\\text{ m/s}^2$).\n\n**Solusi Bertahap:**\n1. **Kelajuan Balok dan Peluru Sesaat Setelah Tumbukan ($V'$):**\n   $$V' = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 0{,}2} = \\sqrt{4} = 2\\text{ m/s}$$\n2. **Terapkan Kekekalan Momentum Saat Tumbukan:**\n   $$m v_0 = (m + M) V'$$\n   $$0{,}02 \\times v_0 = (0{,}02 + 1{,}98) \\times 2$$\n   $$0{,}02 \\times v_0 = 2{,}00 \\times 2 = 4$$\n   $$v_0 = \\frac{4}{0{,}02} = 200\\text{ m/s}$$\n*Kelajuan awal peluru adalah $200\\text{ m/s}$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-usaha-energi-momentum_2.svg",
          "title": "Mekanisme Dua Tahap Ayunan Balistik & Deret Geometri Pantulan Bola",
          "caption": "Kiri: Pemisahan tahap tumbukan tak lenting (kekekalan momentum) dan tahap ayunan naik (kekekalan energi mekanik). Kanan: Peluruhan tinggi pantulan bola mengikuti rasio kuadrat koefisien restitusi (e²).",
          "guide": [
            "Pada ayunan balistik, Energi Mekanik TIDAK KEKAL saat peluru menancap di balok (sebagian besar berubah jadi panas), sehingga tahap 1 WAJIB menggunakan Kekekalan Momentum.",
            "Setelah peluru bersarang dan bergerak bersama dengan kelajuan V', barulah berlaku Kekekalan Energi Mekanik V' = √(2gh) hingga mencapai tinggi puncak h.",
            "Pada bola yang memantul di lantai diam, rasio tinggi pantulan berurutan membentuk barisan geometri dengan rasio r = e²: h_n = e^(2n) · h0."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-dinamika-rotasi",
    "title": "Fisika Bab 4: Dinamika Rotasi & Kesetimbangan Benda Tegar",
    "badge": "Fase F • Semester 1",
    "subject": "Fisika",
    "icon": "refresh-cw",
    "summary": "Analisis lengkap balapan menggelinding murni di bidang miring v = sqrt(2gh/(1+k)), tangga bersandar tan theta = 1/(2 mu_s), katrol masif bermassa, dan titik berat benda berlubang.",
    "subtopics": [
      {
        "title": "1. Momen Gaya (Torsi), Momen Inersia ($I$) & Teorema Sumbu Sejajar",
        "concept": "Jika gaya ($F$) menyebabkan gerak translasi, maka **Momen Gaya atau Torsi ($\\vec{\\tau}$)** adalah besaran yang menyebabkan benda berotasi memutari poros.\n\n---\n\n**1. Formulasi Torsi:**\n$$\\vec{\\tau} = \\vec{r} \\times \\vec{F} \\implies \\tau = r F \\sin\\theta = F \\cdot d$$\n- $d = r\\sin\\theta$: lengan momen (jarak tegak lurus poros ke garis kerja gaya).\n- Satuan: $\\text{N}\\cdot\\text{m}$.\n- Aturan tanda: Berlawanan arah jarum jam (CCW) bertanda positif ($+$), searah jarum jam (CW) bertanda negatif ($-$).\n\n---\n\n**2. Hukum II Newton untuk Rotasi:**\n$$\\Sigma \\tau = I \\cdot \\alpha$$\nDi mana $I$ adalah Momen Inersia (kelembaman rotasi):\n- Partikel diskrit: $I = \\Sigma m_i r_i^2$.\n- Batang homogen diputar di pusat massa (tengah): $I_{pm} = \\frac{1}{12}ML^2$.\n- Batang homogen diputar di ujung: $I_{ujung} = \\frac{1}{3}ML^2$.\n- Silinder pejal / cakram: $I = \\frac{1}{2}MR^2$.\n- Bola pejal: $I = \\frac{2}{5}MR^2$.\n- Bola berongga / cangkang bola: $I = \\frac{2}{3}MR^2$.\n- Silinder tipis berongga / cincin: $I = MR^2$.\n\n---\n\n**3. Teorema Sumbu Sejajar (Parallel-Axis Theorem):**\nJika poros dipindahkan sejauh $d$ sejajar dengan sumbu pusat massa:\n$$I = I_{pm} + M d^2$$\n*Contoh:* Batang $L$ dari tengah ($d = L/2$) ke ujung: $I = \\frac{1}{12}ML^2 + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2$.",
        "quickTip": "Faktor inersia $k = I/(MR^2)$: Bola Pejal ($0{,}4$) < Silinder Pejal ($0{,}5$) < Bola Berongga ($0{,}67$) < Cincin ($1{,}0$). Semakin kecil $k$, semakin mudah benda diputar!",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah batang homogen bermassa $M = 6\\text{ kg}$ dan panjang $L = 2\\text{ meter}$ dapat berotasi bebas tanpa gesekan terhadap poros di salah satu ujungnya. Batang mula-mula ditahan mendatar horizontal lalu dilepaskan sehingga berayun ke bawah akibat gravitasi ($g = 10\\text{ m/s}^2$).\nTentukan percepatan sudut awal batang sesaat setelah dilepaskan.\n\n**Solusi Bertahap:**\n1. **Tentukan Momen Inersia Poros di Ujung Batang:**\n   $$I = \\frac{1}{3} M L^2 = \\frac{1}{3} (6)(2^2) = \\frac{1}{3} \\times 24 = 8\\text{ kg}\\cdot\\text{m}^2$$\n2. **Tentukan Torsi Gravitasi terhadap Poros Ujung:**\nGaya gravitasi bekerja di pusat massa batang ($d = L/2 = 1\\text{ m}$ dari poros):\n   $$\\tau = W \\cdot \\left(\\frac{L}{2}\\right) = (M g) \\left(\\frac{L}{2}\\right) = (6 \\times 10) \\times 1 = 60\\text{ N}\\cdot\\text{m}$$\n3. **Terapkan Hukum II Newton Rotasi:**\n   $$\\tau = I \\alpha \\implies 60 = 8 \\alpha \\implies \\alpha = \\frac{60}{8} = 7{,}5\\text{ rad/s}^2$$\n*Percepatan sudut awal batang adalah $7{,}5\\text{ rad/s}^2$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-rotasi_0.svg",
          "title": "Geometri Momen Gaya (Torsi) & Perbandingan Momen Inersia Benda Tegar",
          "caption": "Kiri: Kesetaraan menghitung torsi menggunakan lengan momen tegak lurus (d = r sin θ) maupun komponen gaya tegak lurus (F sin θ). Kanan: Urutan konstanta inersia k berbagai benda tegar.",
          "guide": [
            "Gaya yang garis kerjanya menembus tepat di poros putar (θ = 0° atau 180°) memiliki lengan momen d = 0 sehingga tidak menghasilkan torsi (τ = 0).",
            "Semakin jauh distribusi massa benda dari poros putarnya (seperti cincin tipis k = 1,0), semakin besar Momen Inersia I dan semakin sulit benda tersebut diputar.",
            "Jika poros batang digeser dari tengah (k = 1/12) ke ujung batang (d = L/2), gunakan Teorema Sumbu Sejajar: I_ujung = (1/12 + 1/4)ML² = 1/3 ML²."
          ]
        }
      },
      {
        "title": "2. Dinamika Menggelinding Murni & Katrol Bermassa Masif",
        "concept": "Gerak menggelinding murni adalah kombinasi harmonis antara gerak translasi pusat massa dan gerak rotasi mengitari pusat massa tanpa selip ($v = \\omega R$ dan $a = \\alpha R$).\n\n---\n\n**1. Energi Kinetik Menggelinding:**\n$$E_k = E_{k,\\text{translasi}} + E_{k,\\text{rotasi}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}(k m R^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}mv^2(1 + k)$$\n\n---\n\n**🔬 Bedah Kasus 1: Balapan Menggelinding di Bidang Miring**\nBenda dilepas dari puncak bidang miring setinggi $h$ kemiringan $\\theta$:\n- Berdasarkan kekekalan energi:\n  $$mgh = \\frac{1}{2}mv^2(1 + k) \\implies v = \\sqrt{\\frac{2gh}{1 + k}}$$\n- Percepatan linear meluncur turun:\n  $$a = \\frac{g \\sin\\theta}{1 + k}$$\n- **Urutan Pemenang Sampai di Dasar Paling Cepat:**\n  1. **Bola Pejal** ($k = 0{,}4 \\implies a = 0{,}71 g\\sin\\theta$)\n  2. **Silinder Pejal** ($k = 0{,}5 \\implies a = 0{,}67 g\\sin\\theta$)\n  3. **Bola Berongga** ($k = 0{,}67 \\implies a = 0{,}60 g\\sin\\theta$)\n  4. **Cincin / Silinder Tipis** ($k = 1{,}0 \\implies a = 0{,}50 g\\sin\\theta$)\n*Perhatikan bahwa massa $M$ dan jari-jari $R$ saling mencoret! Bola kelereng kecil dan bola boling raksasa akan tiba di dasar bersamaan jika keduanya bola pejal.*\n\n---\n\n**🔬 Bedah Kasus 2: Katrol Bermassa Masif ($M_k \\ne 0$)**\nJika katrol adalah silinder pejal bermassa $M_k$ beradius $R$, tegangan tali kiri dan kanan **tidak sama** ($T_1 \\ne T_2$):\n$$(T_1 - T_2) R = I \\alpha = \\left(\\frac{1}{2} M_k R^2\\right) \\left(\\frac{a}{R}\\right) \\implies T_1 - T_2 = \\frac{1}{2} M_k a$$\nPercepatan sistem pesawat Atwood dengan inersia katrol:\n$$a = \\frac{m_2 - m_1}{m_1 + m_2 + \\frac{1}{2}M_k} g$$",
        "quickTip": "Rumus cepat balapan menggelinding: $a = \\frac{g\\sin\\theta}{1 + k}$ dan $v = \\sqrt{\\frac{2gh}{1 + k}}$. Benda dengan inersia terkecil ($k$ terkecil) selalu menang!",
        "exampleProblem": "**Soal Kasus Terbimbing (Ujian Semester SMA):**\nSebuah bola pejal bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 10\\text{ cm}$ menggelinding murni menuruni bidang miring setinggi $h = 7\\text{ meter}$ tanpa selip ($g = 10\\text{ m/s}^2$).\nTentukan kelajuan linear bola saat tiba di dasar bidang miring dan buktikan bahwa kelajuan tersebut lebih lambat dibanding balok licin yang meluncur bebas!\n\n**Solusi Bertahap:**\n1. **Untuk Bola Pejal ($k = 2/5 = 0{,}4$):**\n   $$v = \\sqrt{\\frac{2gh}{1 + k}} = \\sqrt{\\frac{2(10)(7)}{1 + 0{,}4}} = \\sqrt{\\frac{140}{1{,}4}} = \\sqrt{100} = 10\\text{ m/s}$$\n2. **Bandingkan dengan Balok Licin Meluncur ($k = 0$):**\n   $$v_{\\text{balok}} = \\sqrt{2gh} = \\sqrt{2(10)(7)} = \\sqrt{140} \\approx 11{,}83\\text{ m/s}$$\n*Kesimpulan Fisis:* Bola pejal lebih lambat karena sebagian energi potensial gravitasi ($mgh$) harus diubah menjadi energi kinetik rotasi agar bola dapat berputar menggelinding.",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-rotasi_1.svg",
          "title": "Balapan Menggelinding di Bidang Miring & Dinamika Katrol Bermassa Masif",
          "caption": "Kiri: Urutan pemenang benda menggelinding ditentukan murni oleh konstanta inersia k. Kanan: Pada katrol bermassa Mk, tegangan tali sisi beban berat lebih besar daripada sisi beban ringan (T2 > T1).",
          "guide": [
            "Pada gerak menggelinding murni, energi potensial mgh terbagi menjadi Ek translasi dan Ek rotasi: mgh = ½mv²(1 + k).",
            "Bola pejal (k = 0,4) selalu mengalahkan silinder pejal (k = 0,5) dan cincin (k = 1,0) tanpa memedulikan berapa pun massa M atau jari-jari R benda tersebut.",
            "Jika katrol memiliki massa Mk (tidak licin), tegangan tali kiri dan kanan TIDAK SAMA karena selisihnya (T2 - T1)R dibutuhkan untuk menghasilkan torsi pemutar katrol."
          ]
        }
      },
      {
        "title": "3. Kesetimbangan Benda Tegar, Tangga Bersandar & Titik Berat",
        "concept": "Sebuah benda tegar dikatakan berada dalam **kesetimbangan statis sempurna** jika dan hanya jika memenuhi 3 syarat simultan:\n$$\\Sigma F_x = 0, \\quad \\Sigma F_y = 0, \\quad \\Sigma \\vec{\\tau} = 0$$\n\n---\n\n**🔬 Bedah Kasus Klasik: Tangga Bersandar pada Dinding Licin & Lantai Kasar**\nTangga homogen panjang $L$ massa $M$ bersandar membentuk sudut kemiringan $\\theta$ terhadap lantai horizontal. Dinding vertikal licin (hanya ada gaya normal dinding $N_d$), sedangkan lantai kasar (ada gaya normal $N_l$ dan gaya gesek statis $f_s$):\n1. **Kesetimbangan Translasi Vertikal:**\n   $$\\Sigma F_y = 0 \\implies N_l - Mg = 0 \\implies N_l = Mg$$\n2. **Kesetimbangan Translasi Horizontal:**\n   $$\\Sigma F_x = 0 \\implies f_s - N_d = 0 \\implies N_d = f_s \\le \\mu_s N_l = \\mu_s Mg$$\n3. **Kesetimbangan Torsi terhadap Poros di Titik Kontak Lantai ($\\Sigma \\tau_l = 0$):**\n   $$N_d (L \\sin\\theta) - Mg \\left(\\frac{L}{2} \\cos\\theta\\right) = 0$$\n   $$N_d \\sin\\theta = \\frac{1}{2} Mg \\cos\\theta$$\n4. **Substitusikan $N_d = \\mu_s Mg$ saat tepat akan tergelincir:**\n   $$\\mu_s Mg \\sin\\theta = \\frac{1}{2} Mg \\cos\\theta \\implies \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1}{2\\mu_s} \\implies \\tan\\theta_{\\min} = \\frac{1}{2\\mu_s}$$\n\n---\n\n**🔬 Bedah Kasus: Titik Berat Benda Berlubang (Metode Luas Negatif)**\nJika suatu bidang memiliki rongga/lubang:\n$$x_0 = \\frac{A_1 x_1 - A_2 x_2}{A_1 - A_2}, \\quad y_0 = \\frac{A_1 y_1 - A_2 y_2}{A_1 - A_2}$$",
        "quickTip": "Rumus cepat sudut kemiringan tangga tepat akan terpeleset: $\\tan\\theta = \\frac{1}{2\\mu_s}$. Jika ada orang dengan berat sama di puncak tangga, rumusnya menjadi $\\tan\\theta = \\frac{1}{\\mu_s}$.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nTangga homogen dengan panjang $L = 5\\text{ m}$ dan berat $W = 300\\text{ N}$ disandarkan pada dinding licin dan lantai kasar dengan koefisien gesekan statis $\\mu_s = 0{,}5$.\nTentukan sudut kemiringan minimum $\\theta$ antara tangga dan lantai agar tangga tidak tergelincir.\n\n**Solusi Bertahap:**\n1. **Gunakan Rumus Kesetimbangan Tangga:**\n   $$\\tan\\theta_{\\min} = \\frac{1}{2\\mu_s}$$\n2. **Hitung Sudut:**\n   $$\\tan\\theta_{\\min} = \\frac{1}{2(0{,}5)} = \\frac{1}{1} = 1$$\n   $$\\theta_{\\min} = \\arctan(1) = 45^\\circ$$\n*Agar tangga tidak tergelincir, sudut tangga terhadap lantai tidak boleh kurang dari $45^\\circ$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-dinamika-rotasi_2.svg",
          "title": "Kesetimbangan Benda Tegar Tangga Bersandar & Titik Berat Benda Berlubang",
          "caption": "Kiri: Tiga syarat kesetimbangan statis tangga pada dinding licin dan lantai kasar menghasilkan sudut kritis tan θ_min = 1/(2μs). Kanan: Metode pengurangan luas untuk mencari titik berat bidang berongga.",
          "guide": [
            "Pilih titik tumpu lantai sebagai poros torsi (Στ_lantai = 0) karena langsung mengeliminasi dua gaya sekaligus (Nl dan fs).",
            "Dari kesetimbangan torsi Nd(L sin θ) = Mg(½L cos θ) dan batas gesekan Nd = fs,max = μs Mg, diperoleh rumus sakti tan θ_min = 1 / (2μs).",
            "Pada benda yang dilubangi, perlakukan lubang sebagai keping bernilai luas negatif (-A2); titik berat gabungan Z0 selalu bergeser menjauhi posisi lubang."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-fluida",
    "title": "Fisika Bab 5: Mekanika Fluida Statis & Dinamis",
    "badge": "Fase F • Semester 1",
    "subject": "Fisika",
    "icon": "droplet",
    "summary": "Pelajari bejana berhubungan pipa U, Archimedes persentase terapung & kecepatan terminal Stokes, teorema tangki bocor Torricelli X = 2 sqrt(h1 h2), dan venturimeter.",
    "subtopics": [
      {
        "title": "1. Fluida Statis: Tekanan Hidrostatis, Hukum Pascal & Bejana Pipa U",
        "concept": "Fluida statis adalah zat alir (cair/gas) yang berada dalam keadaan diam.\n\n---\n\n**1. Tekanan Hidrostatis ($P_h$):**\nTekanan akibat berat kolom zat cair di atasnya pada kedalaman $h$:\n$$P_h = \\rho g h$$\nTekanan mutlak (total): $P = P_0 + \\rho g h$ ($P_0 \\approx 10^5\\text{ Pa} = 1\\text{ atm}$). Paradoks hidrostatis menyatakan bahwa tekanan hidrostatis murni tergantung pada kedalaman vertikal $h$, sama sekali tidak dipengaruhi bentuk wadah bejana.\n\n---\n\n**2. Hukum Pascal (Dongkrak Hidrolik):**\nTekanan yang diberikan pada fluida tertutup diteruskan ke segala arah sama besar:\n$$\\Delta P_1 = \\Delta P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\left(\\frac{d_2}{d_1}\\right)^2$$\n\n---\n\n**🔬 Bedah Kasus Klasik: Pipa U Bejana Berhubungan (Multi-Zat Cair)**\nJika dua cairan tidak bercampur (misalnya air dan minyak) dituangkan ke pipa U, tekanan pada bidang batas mendatar adalah sama:\n$$P_{\\text{kiri}} = P_{\\text{kanan}} \\implies \\rho_1 g h_1 = \\rho_2 g h_2 \\implies \\rho_1 h_1 = \\rho_2 h_2$$",
        "quickTip": "Pipa U: Garis acuan horizontal selalu ditarik pada batas perbatasan zat cair terbawah. Ketinggian diukur ke atas dari garis tersebut.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah pipa U mula-mula diisi air dengan massa jenis $\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$. Pada kaki kanan dituangkan minyak setinggi $h_{\\text{minyak}} = 15\\text{ cm}$. Jika selisih permukaan air di kaki kiri dan kaki kanan adalah $12\\text{ cm}$, hitung massa jenis minyak tersebut.\n\n**Solusi Bertahap:**\n1. **Gunakan Prinsip Kesetimbangan Bidang Batas:**\n   $$\\rho_{\\text{air}} \\cdot h_{\\text{air}} = \\rho_{\\text{minyak}} \\cdot h_{\\text{minyak}}$$\n2. **Substitusi Nilai:**\n   $$1000 \\times 12 = \\rho_{\\text{minyak}} \\times 15$$\n   $$\\rho_{\\text{minyak}} = \\frac{12000}{15} = 800\\text{ kg/m}^3$$\n*Massa jenis minyak adalah $800\\text{ kg/m}^3$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-fluida_0.svg",
          "title": "Tekanan Hidrostatis, Dongkrak Hidrolik Pascal & Kesetimbangan Pipa U",
          "caption": "Kiri: Tekanan hidrostatis bertambah linier terhadap kedalaman h dan prinsip melipatgandakan gaya pada dongkrak hidrolik. Kanan: Penentuan garis batas acuan pada pipa U dua zat cair.",
          "guide": [
            "Tekanan hidrostatis Ph = ρgh hanya bergantung pada kedalaman vertikal h dari permukaan zat cair, bukan pada lebar wadahnya.",
            "Pada dongkrak hidrolik Pascal, tekanan diteruskan sama besar ke segala arah sehingga gaya angkat berbanding lurus dengan rasio luas penampang (F2/F1 = A2/A1).",
            "Pada pipa U multi-cairan, tarik garis horizontal tepat pada perbatasan cairan terbawah: cairan yang massa jenisnya lebih kecil (minyak) selalu memiliki kolom ketinggian h yang lebih tinggi."
          ]
        }
      },
      {
        "title": "2. Hukum Archimedes, Kerapatan & Syarat Apung-Tenggelam",
        "concept": "Gaya Apung / Gaya Ke Atas ($F_A$) timbul akibat perbedaan tekanan hidrostatis antara permukaan bawah dan permukaan atas benda:\n$$F_A = \\rho_f \\cdot g \\cdot V_{\\text{celup}}$$\nBerat benda di dalam zat cair terasa lebih ringan (berat semu):\n$$w' = w - F_A = mg - \\rho_f g V_{\\text{celup}}$$\n\n---\n\n**🔬 Bedah Kasus 1: Persentase Terapung vs Tenggelam**\nSaat benda terapung seimbang ($\\Sigma F_y = 0 \\implies F_A = w$):\n$$\\rho_f g V_{\\text{celup}} = \\rho_b g V_{\\text{total}} \\implies \\frac{\\rho_b}{\\rho_f} = \\frac{V_{\\text{celup}}}{V_{\\text{total}}}$$\n*Contoh nyata:* Jika gunung es terapung di laut dengan $90\\%$ volumenya berada di bawah air, maka massa jenis es pasti tepat $0{,}9$ kali massa jenis air laut!\n\n---\n\n**🔬 Bedah Kasus 2: Kecepatan Terminal Kelereng dalam Fluida Kental (Hukum Stokes)**\nKelereng radius $r$ jatuh dalam oli kental (viskositas $\\eta$). Saat gaya berat diimbangi oleh gaya apung dan gaya gesek viskos ($w = F_A + F_s$):\n$$v_T = \\frac{2 r^2 g (\\rho_b - \\rho_f)}{9 \\eta}$$",
        "quickTip": "Fraksi tercelup = $\\frac{\\rho_b}{\\rho_f}$. Fraksi yang muncul di atas permukaan = $1 - \\frac{\\rho_b}{\\rho_f}$.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah balok kayu bervolume total $V = 0{,}05\\text{ m}^3$ memiliki massa jenis $\\rho_b = 600\\text{ kg/m}^3$. Balok tersebut diapungkan ke dalam kolam air ($\\rho_{\\text{air}} = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$).\nTentukan volume balok yang tercelup ke dalam air dan volume balok yang menyembul di atas permukaan air.\n\n**Solusi Bertahap:**\n1. **Gunakan Hubungan Fraksi Terapung:**\n   $$\\frac{V_{\\text{celup}}}{V_{\\text{total}}} = \\frac{\\rho_b}{\\rho_f} = \\frac{600}{1000} = 0{,}6$$\n2. **Hitung Volume:**\n   - Volume tercelup: $V_{\\text{celup}} = 0{,}6 \\times 0{,}05 = 0{,}03\\text{ m}^3$ (atau $60\\%$).\n   - Volume menyembul: $V_{\\text{sembul}} = V_{\\text{total}} - V_{\\text{celup}} = 0{,}05 - 0{,}03 = 0{,}02\\text{ m}^3$ (atau $40\\%$).",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-fluida_1.svg",
          "title": "Hukum Archimedes (Terapung, Melayang, Tenggelam) & Kecepatan Terminal Stokes",
          "caption": "Kiri: Keseimbangan gaya apung FA dan berat w pada tiga kondisi massa jenis. Kanan: Kelereng yang jatuh dalam fluida kental mencapai kelajuan konstan (vT) saat gaya berat diimbangi FA + Fs.",
          "guide": [
            "Pada benda terapung, fraksi volume yang tercelup di bawah permukaan cairan sama persis dengan rasio massa jenis benda terhadap fluida: V_celup / V_tot = ρb / ρf.",
            "Pada benda tenggelam di dasar wadah, terdapat tiga gaya vertikal yang bekerja: w ke bawah, serta FA dan Gaya Normal dasar wadah N ke atas.",
            "Kelereng yang jatuh di dalam oli kental mengalami gaya gesek Stokes (Fs = 6πηrv) yang membesar seiring laju hingga resultan gaya bernilai nol dan bergerak GLB dengan kecepatan terminal vT."
          ]
        }
      },
      {
        "title": "3. Fluida Dinamis: Kontinuitas, Teorema Torricelli & Venturimeter",
        "concept": "Fluida ideal memiliki sifat: inkompresibel (massa jenis konstan), non-viskos (tanpa gesekan internal), dan aliran tunak/laminer (*steady flow*).\n\n---\n\n**1. Persamaan Kontinuitas:**\nDebit aliran konstan ($Q = A v = \\text{konstan}$):\n$$A_1 v_1 = A_2 v_2 \\implies v_2 = \\left(\\frac{A_1}{A_2}\\right) v_1$$\n\n---\n\n**2. Persamaan Bernoulli:**\n$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 = \\text{konstan}$$\n\n---\n\n**🔬 Bedah Kasus 1: Tangki Bocor (Teorema Torricelli)**\nTangki besar dengan permukaan luas dibuka ke udara, ada lubang bocor kecil pada kedalaman $h_1$ dari permukaan air, dan ketinggian lubang dari tanah adalah $h_2$:\n1. **Kelajuan Pancaran Air:** Diturunkan dari Bernoulli ($v_{\\text{permukaan}} \\approx 0$):\n   $$v = \\sqrt{2g h_1}$$\n2. **Waktu Jatuh ke Tanah:** Gerak jatuh bebas dari ketinggian $h_2$:\n   $$t = \\sqrt{\\frac{2h_2}{g}}$$\n3. **Jangkauan Pancaran Horizontal ($X$):**\n   $$X = v \\cdot t = \\sqrt{2gh_1} \\cdot \\sqrt{\\frac{2h_2}{g}} = 2\\sqrt{h_1 h_2}$$\n*Sifat Simetri Torricelli:* Jika dua lubang berada pada kedalaman $h_1$ dan $h_2$ yang saling bertukar nilai, pancaran air keduanya akan jatuh di titik tanah yang sama persis!\n\n---\n\n**🔬 Bedah Kasus 2: Venturimeter Tanpa Manometer**\nTabung penyempitan mendatar dengan kolom vertikal setinggi $\\Delta h$:\n$$v_1 = \\sqrt{\\frac{2g \\Delta h}{\\left(\\frac{A_1}{A_2}\\right)^2 - 1}}$$\n\n---\n\n**🔬 Bedah Kasus 3: Gaya Angkat Sayap Pesawat Terbang**\nBentuk airfoil membuat kelajuan udara di atas sayap lebih cepat dibanding di bawah sayap ($v_a > v_b$), sehingga tekanan di atas lebih rendah ($P_a < P_b$):\n$$F_{\\text{angkat}} = (P_b - P_a) A = \\frac{1}{2}\\rho (v_a^2 - v_b^2) A$$",
        "quickTip": "Jarak pancaran tangki bocor: $X = 2\\sqrt{h_1 h_2}$. Nilai $X$ maksimal jika lubang dibuat tepat di tengah tinggi air ($h_1 = h_2$).",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSebuah tangki air memiliki lubang kebocoran kecil pada kedalaman $h_1 = 3{,}2\\text{ meter}$ di bawah permukaan air. Lubang tersebut berada pada ketinggian $h_2 = 1{,}8\\text{ meter}$ di atas permukaan lantai ($g = 10\\text{ m/s}^2$).\nTentukan:\na) Kelajuan air yang menyembur keluar dari lubang bocor.\nb) Waktu yang dibutuhkan air untuk mencapai lantai.\nc) Jarak mendatar jatuhnya air dari dasar tangki.\n\n**Solusi Bertahap:**\n1. **Kelajuan Semburan ($v$):**\n   $$v = \\sqrt{2g h_1} = \\sqrt{2 \\times 10 \\times 3{,}2} = \\sqrt{64} = 8\\text{ m/s}$$\n2. **Waktu Jatuh Air ($t$):**\n   $$t = \\sqrt{\\frac{2h_2}{g}} = \\sqrt{\\frac{2 \\times 1{,}8}{10}} = \\sqrt{\\frac{3{,}6}{10}} = \\sqrt{0{,}36} = 0{,}6\\text{ sekon}$$\n3. **Jangkauan Mendatar ($X$):**\n   $$X = v \\times t = 8 \\times 0{,}6 = 4{,}8\\text{ meter}$$\n   *(Bisa juga via rumus cepat: $X = 2\\sqrt{h_1 h_2} = 2\\sqrt{3{,}2 \\times 1{,}8} = 2\\sqrt{5{,}76} = 2 \\times 2{,}4 = 4{,}8\\text{ m}$)*.",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-fluida_2.svg",
          "title": "Fluida Dinamis: Tangki Bocor Torricelli, Venturimeter & Gaya Angkat Pesawat",
          "caption": "Kiri: Pancaran parabola dari lubang tangki bocor beserta sifat simetri h1 dan h2. Kanan: Hukum Bernoulli pada pipa penyempitan Venturimeter dan gaya angkat sayap pesawat.",
          "guide": [
            "Kelajuan semburan air dari lubang bocor pada kedalaman h1 di bawah permukaan air sama persis dengan kelajuan jatuh bebas: v = √(2gh1).",
            "Jarak mendatar jatuhnya air di lantai adalah X = 2√(h1·h2); dua lubang dengan kedalaman h1 dan h2 yang saling bertukar posisi akan mendarat di titik X yang sama.",
            "Prinsip Emas Bernoulli: Di mana kelajuan aliran fluida tinggi (pipa menyempit atau di atas sayap pesawat), tekanan statis fluidanya justru RENDAH."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-gelombang-bunyi-cahaya",
    "title": "Fisika Bab 6: Gelombang Mekanik, Bunyi & Optika Gelombang Cahaya",
    "badge": "Fase F • Semester 2",
    "subject": "Fisika",
    "icon": "radio",
    "summary": "Analisis parameter gelombang berjalan y = A sin(omega t - kx), resonansi pipa organa terbuka vs tertutup, efek Doppler komprehensif, dan taraf intensitas desibel.",
    "subtopics": [
      {
        "title": "1. Karakteristik & Persamaan Matematis Gelombang Berjalan Harmonik",
        "concept": "Gelombang memindahkan energi tanpa memindahkan mediumnya.\n\n---\n\n**1. Persamaan Umum Gelombang Berjalan Sinusoidal:**\n$$y(x, t) = \\pm A \\sin(\\omega t \\mp kx + \\phi_0)$$\n- $A$: Amplitudo ($+$ jika getaran pertama ke atas, $-$ jika ke bawah).\n- $\\omega = 2\\pi f = \\frac{2\\pi}{T}$: Frekuensi sudut (rad/s).\n- $k = \\frac{2\\pi}{\\lambda}$: Bilangan gelombang (rad/m).\n- Tanda di depan $kx$: Tanda minus ($-$) berarti merambat ke arah sumbu $X$ positif (ke kanan). Tanda plus ($+$) berarti merambat ke kiri.\n- Cepat rambat gelombang: $v = \\lambda f = \\frac{\\omega}{k}$.\n\n---\n\n**2. Kecepatan & Percepatan Getar Partikel:**\n- Kecepatan partikel: $v_y = \\frac{\\partial y}{\\partial t} = \\omega A \\cos(\\omega t - kx)$. Kelajuan maksimum: $v_{y,\\max} = \\omega A$.\n- Percepatan partikel: $a_y = \\frac{\\partial^2 y}{\\partial t^2} = -\\omega^2 y$. Percepatan maksimum: $a_{y,\\max} = \\omega^2 A$.\n\n---\n\n**3. Beda Fase Antara Dua Titik Berjarak $\\Delta x$:**\n$$\\Delta \\phi = \\frac{\\Delta x}{\\lambda}$$\n- Dua titik sefase jika $\\Delta \\phi = 0, 1, 2, \\dots$\n- Dua titik berlawanan fase jika $\\Delta \\phi = \\frac{1}{2}, \\frac{3}{2}, \\frac{5}{2}, \\dots$",
        "quickTip": "Cepat rambat gelombang langsung dari koefisien: $v = \\frac{\\text{koefisien } t}{\\text{koefisien } x} = \\frac{\\omega}{k}$.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nPersamaan gelombang berjalan pada tali adalah $y = 0{,}05 \\sin(10\\pi t - 2\\pi x)$ dengan $x, y$ dalam meter dan $t$ dalam sekon.\nTentukan arah rambat, amplitudo, frekuensi, panjang gelombang, cepat rambat gelombang, dan kelajuan getar partikel maksimum.\n\n**Solusi Bertahap:**\n1. **Identifikasi Koefisien:**\n   - Amplitudo: $A = 0{,}05\\text{ m}$.\n   - $\\omega = 10\\pi\\text{ rad/s} \\implies f = \\frac{\\omega}{2\\pi} = \\frac{10\\pi}{2\\pi} = 5\\text{ Hz}$.\n   - $k = 2\\pi\\text{ rad/m} \\implies \\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{2\\pi} = 1\\text{ m}$.\n   - Tanda sebelum $kx$ adalah minus ($-$), artinya gelombang merambat ke kanan ($+X$).\n2. **Cepat Rambat Gelombang ($v$):**\n   $$v = \\lambda f = 1 \\times 5 = 5\\text{ m/s}$$\n3. **Kelajuan Getar Maksimum ($v_{y,\\max}$):**\n   $$v_{y,\\max} = \\omega A = (10\\pi) \\times 0{,}05 = 0{,}5\\pi\\text{ m/s} \\approx 1{,}57\\text{ m/s}$$",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-gelombang-bunyi-cahaya_0.svg",
          "title": "Gelombang Berjalan Sinusoidal & Hubungan Fase Kecepatan-Percepatan Getar",
          "caption": "Kiri: Anatomi panjang gelombang λ, amplitudo A, dan arah rambat gelombang. Kanan: Perbedaan fase antara simpangan y(t), kecepatan getar partikel vy(t), dan percepatan ay(t).",
          "guide": [
            "Jangan tertukar antara Cepat Rambat Gelombang (v = λf = ω/k, konstan) dengan Kecepatan Getar Partikel (vy = dy/dt, berubah harmonik dengan nilai maksimum ωA).",
            "Pada persamaan y = A sin(ωt ± kx), jika tanda ωt dan kx BERBEDA (misal +ωt dan -kx) gelombang merambat ke KANAN (+X); jika bertanda sama merambat ke KIRI (-X).",
            "Saat partikel melewati titik setimbang (y = 0), kelajuan getarnya bernilai maksimum (vy,max = ωA), sedangkan di puncak gelombang percepatannya yang maksimum (ay,max = ω²A)."
          ]
        }
      },
      {
        "title": "2. Gelombang Bunyi: Pipa Organa, Efek Doppler & Taraf Intensitas (TI)",
        "concept": "Gelombang bunyi adalah gelombang mekanik longitudinal yang merambat melalui kompresi dan raregasi medium.\n\n---\n\n**1. Resonansi Pipa Organa Terbuka vs Tertutup:**\n- **Pipa Organa Terbuka (POB):** Kedua ujung berupa perut getar.\n  $$f_n = (n + 1) \\frac{v}{2L} \\quad (n = 0, 1, 2, \\dots)$$\n  *Rasio nada harmonik lengkap:* $f_0 : f_1 : f_2 = 1 : 2 : 3$.\n- **Pipa Organa Tertutup (POT):** Satu ujung simpul, satu ujung perut.\n  $$f_n = (2n + 1) \\frac{v}{4L} \\quad (n = 0, 1, 2, \\dots)$$\n  *Rasio hanya harmonik ganjil:* $f_0 : f_1 : f_2 = 1 : 3 : 5$.\n\n---\n\n**2. Efek Doppler Menyeluruh:**\nPerubahan frekuensi akibat gerak relatif sumber dan pendengar:\n$$f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$$\n- Pendengar mendekati sumber $\\implies v_p (+)$, menjauhi $\\implies v_p (-)$.\n- Sumber mendekati pendengar $\\implies v_s (-)$, menjauhi $\\implies v_s (+)$.\n\n---\n\n**3. Intensitas & Taraf Intensitas Bunyi ($TI$):**\n- Skala logaritmik decibel: $TI = 10 \\log\\left(\\frac{I}{I_0}\\right)$ dengan ambang pendengaran $I_0 = 10^{-12}\\text{ W/m}^2$.\n- **Jika Ada $n$ Sumber Identik:**\n  $$TI_n = TI_1 + 10 \\log n$$\n- **Jika Jarak Pengamat Bergeser dari $r_1$ ke $r_2$:**\n  $$TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$$",
        "quickTip": "Jarak menjauh 10 kali lipat $\\implies$ TI turun $20\\text{ dB}$. Jumlah sumber naik 10 kali lipat $\\implies$ TI naik $10\\text{ dB}$.",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe UN/UTBK):**\nSebuah sirine pabrik menghasilkan taraf intensitas $80\\text{ dB}$ pada jarak $3\\text{ meter}$.\na) Tentukan taraf intensitas bunyi pada jarak $30\\text{ meter}$ dari pabrik.\nb) Berapakah taraf intensitas jika terdapat 100 sirine pabrik sejenis dibunyikan bersamaan pada jarak $3\\text{ meter}$?\n\n**Solusi Bertahap:**\n1. **Perubahan Jarak dari $r_1 = 3\\text{ m}$ ke $r_2 = 30\\text{ m}$:**\n   $$TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right) = 80 - 20 \\log\\left(\\frac{30}{3}\\right) = 80 - 20 \\log(10) = 80 - 20(1) = 60\\text{ dB}$$\n2. **Peningkatan Jumlah Sumber Menjadi $n = 100$ Mesin:**\n   $$TI_{100} = TI_1 + 10 \\log(100) = 80 + 10(2) = 80 + 20 = 100\\text{ dB}$$",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-gelombang-bunyi-cahaya_1.svg",
          "title": "Harmonik Pipa Organa, Efek Doppler & Logaritma Taraf Intensitas (dB)",
          "caption": "Kiri: Perbandingan gelombang stasioner pada Pipa Organa Terbuka (semua harmonik 1:2:3) vs Tertutup (hanya harmonik ganjil 1:3:5). Kanan: Pemampatan muka gelombang Doppler dan hukum peluruhan desibel.",
          "guide": [
            "Ujung pipa terbuka selalu menjadi Perut simpangan (P), sedangkan ujung pipa tertutup selalu terkunci menjadi Simpul simpangan (S).",
            "Pada Efek Doppler, jika sumber bunyi mendekati pendengar maka muka gelombang di depannya termampatkan (λ mengecil), sehingga gunakan tanda minus di penyebut (-vs) agar fp membesar.",
            "Setiap jarak menjauh 10 kali lipat, Taraf Intensitas berkurang 20 dB; setiap jumlah mesin identik bertambah 10 kali lipat, Taraf Intensitas bertambah 10 dB."
          ]
        }
      },
      {
        "title": "3. Optika Gelombang: Interferensi Celah Ganda Young & Difraksi Kisi",
        "concept": "Cahaya menunjukkan sifat gelombang melalui peristiwa pelenturan (difraksi) dan perpaduan (interferensi).\n\n---\n\n**1. Celah Ganda Young:**\nDua celah sempit berjarak $d$ disinari cahaya koheren panjang gelombang $\\lambda$. Layar diletakkan sejauh $L$:\n- Pola Terang (Interferensi Konstruktif): $d \\sin\\theta = n \\lambda \\implies d \\frac{y}{L} = n \\lambda$ ($n = 0, 1, 2, \\dots$).\n- Pola Gelap (Interferensi Destruktif): $d \\frac{y}{L} = \\left(n - \\frac{1}{2}\\right) \\lambda$.\n- Jarak antara dua garis terang bertetangga: $\\Delta y = \\frac{\\lambda L}{d}$.\n\n---\n\n**2. Difraksi Kisi:**\nKisi memiliki $N$ goresan per cm, tetapan kisi $d = \\frac{1}{N}\\text{ cm}$:\n$$d \\sin\\theta = n \\lambda$$",
        "quickTip": "Pola terang celah ganda: $\\frac{d \\cdot y}{L} = n \\lambda$. Pastikan semua satuan dikonversi ke meter ($1\\text{ nm} = 10^{-9}\\text{ m}$, $1\\text{ \\AA} = 10^{-10}\\text{ m}$).",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nSeberkas cahaya dengan panjang gelombang $\\lambda = 600\\text{ nm}$ ($6 \\times 10^{-7}\\text{ m}$) dijatuhkan pada kisi difraksi dengan $500\\text{ garis/mm}$. Tentukan sudut deviasi garis terang orde kedua ($n = 2$).\n\n**Solusi Bertahap:**\n1. **Tentukan Tetapan Kisi ($d$):**\n   $$d = \\frac{1}{N} = \\frac{1}{500\\text{ garis/mm}} = 2 \\times 10^{-3}\\text{ mm} = 2 \\times 10^{-6}\\text{ meter}$$\n2. **Terapkan Rumus Difraksi Kisi:**\n   $$d \\sin\\theta = n \\lambda$$\n   $$(2 \\times 10^{-6}) \\sin\\theta = 2 \\times (6 \\times 10^{-7}) = 12 \\times 10^{-7}$$\n   $$\\sin\\theta = \\frac{12 \\times 10^{-7}}{2 \\times 10^{-6}} = \\frac{1{,}2 \\times 10^{-6}}{2 \\times 10^{-6}} = 0{,}6$$\n   $$\\theta = \\arcsin(0{,}6) \\approx 37^\\circ$$\n*Sudut deviasi terang orde kedua adalah $37^\\circ$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-gelombang-bunyi-cahaya_2.svg",
          "title": "Interferensi Celah Ganda Young & Pola Puncak Tajam Difraksi Kisi",
          "caption": "Kiri: Beda lintasan optik dua celah menghasilkan pita terang-gelap berjarak sama Δy = λL/d. Kanan: Kisi difraksi dengan ribuan goresan per cm menghasilkan puncak interferensi yang sangat tajam pada sudut sin θ = nλ/d.",
          "guide": [
            "Interferensi maksimum (Garis Terang) terjadi saat selisih lintasan kedua berkas merupakan kelipatan bulat panjang gelombang: ΔS = d sin θ = nλ.",
            "Interferensi minimum (Garis Gelap) terjadi saat selisih lintasan merupakan kelipatan ganjil setengah panjang gelombang: d sin θ = (n - ½)λ.",
            "Pada kisi difraksi, ubah dulu jumlah goresan N menjadi jarak antar-celah d = 1/N; karena sudut deviasi kisi biasanya besar, gunakan d sin θ = nλ (jangan didekati tan θ)."
          ]
        }
      }
    ]
  },
  {
    "id": "k11-fisika-termodinamika",
    "title": "Fisika Bab 7: Suhu, Teori Kinetik Gas & Hukum Termodinamika",
    "badge": "Fase F • Semester 2",
    "subject": "Fisika",
    "icon": "flame",
    "summary": "Asas Black uji kalor lebur es-air, derajat kebebasan ekuipartisi gas diatomik, usaha netto siklus grafik P-V, dan analisis perubahan efisiensi mesin Carnot.",
    "subtopics": [
      {
        "title": "1. Kalor, Asas Black & Uji Kalor Lebur Campuran Es-Air",
        "concept": "Kalor adalah energi yang berpindah akibat perbedaan suhu. Asas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah: $Q_{\\text{lepas}} = Q_{\\text{terima}}$.\n\n---\n\n**🔬 Bedah Kasus Klasik: Campuran Es dan Air (Jebakan Wujud Akhir)**\nBanyak siswa salah mengira bahwa es yang dimasukkan ke air panas selalu mencair seluruhnya dan suhunya berada di antara $0^\\circ\\text{C}$ dan $100^\\circ\\text{C}$. Padahal, kalor peleburan es ($L = 80\\text{ kal/g}$) sangat besar!\n\n**Uji Tahapan Asas Black:**\n1. Hitung kalor untuk menaikkan es ke $0^\\circ\\text{C}$: $Q_1 = m_{\\text{es}} c_{\\text{es}} (0 - T_{\\text{es}})$.\n2. Hitung kalor untuk melebur seluruh es: $Q_2 = m_{\\text{es}} L_{\\text{es}}$.\n3. Hitung kalor maksimum yang dapat dilepas air saat suhunya turun hingga $0^\\circ\\text{C}$: $Q_{\\text{lepas},\\max} = m_{\\text{air}} c_{\\text{air}} (T_{\\text{air}} - 0)$.\n- **Jika $Q_{\\text{lepas},\\max} < Q_1 + Q_2$:** Kalor air TIDAK CUKUP melebur seluruh es. Suhu akhir campuran **pasti tepat $0^\\circ\\text{C}$**, dan wujud akhirnya adalah air bercampur sisa es!\n- **Jika $Q_{\\text{lepas},\\max} > Q_1 + Q_2$:** Seluruh es mencair dan suhu akhir $T_c > 0^\\circ\\text{C}$.",
        "quickTip": "Jangan langsung tulis $Q_{\\text{lepas}} = Q_{\\text{terima}}$ dengan variabel $T_c$ jika ada es! Selalu uji apakah kalor yang tersedia cukup untuk meleburkan es.",
        "exampleProblem": "**Soal Kasus Terbimbing (Ujian Harian SMA):**\nSebanyak $100\\text{ gram}$ es bersuhu $0^\\circ\\text{C}$ dicampurkan dengan $100\\text{ gram}$ air bersuhu $40^\\circ\\text{C}$ di dalam bejana terisolasi ($c_{\\text{air}} = 1\\text{ kal/g}^\\circ\\text{C}$, $L_{\\text{es}} = 80\\text{ kal/g}$). Tentukan suhu akhir campuran dan massa es yang tersisa.\n\n**Solusi Bertahap:**\n1. **Hitung Kalor yang Dibutuhkan untuk Melebur Seluruh Es:**\n   $$Q_{\\text{butuh}} = m_{\\text{es}} L_{\\text{es}} = 100 \\times 80 = 8000\\text{ kalori}$$\n2. **Hitung Kalor Maksimum yang Dilepas Air hingga $0^\\circ\\text{C}$:**\n   $$Q_{\\text{lepas}} = m_{\\text{air}} c_{\\text{air}} \\Delta T = 100 \\times 1 \\times (40 - 0) = 4000\\text{ kalori}$$\n3. **Analisis Keadaan:**\n   Air hanya sanggup melepas $4000\\text{ kal}$, sedangkan untuk mencairkan seluruh es butuh $8000\\text{ kal}$.\n   Karena $Q_{\\text{lepas}} < Q_{\\text{butuh}}$, maka **suhu akhir campuran pasti tepat $0^\\circ\\text{C}$**!\n4. **Hitung Massa Es yang Berhasil Mencair ($m_{\\text{lebur}}$):**\n   $$m_{\\text{lebur}} = \\frac{Q_{\\text{lepas}}}{L_{\\text{es}}} = \\frac{4000}{80} = 50\\text{ gram}$$\n5. **Massa Es yang Tersisa:**\n   $$m_{\\text{sisa}} = 100 - 50 = 50\\text{ gram}$$\n*Wujud akhir adalah campuran 150 gram air dan 50 gram es bersuhu $0^\\circ\\text{C}$.*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-termodinamika_0.svg",
          "title": "Kurva Perubahan Wujud Kalor-Suhu & Uji Kalor Lebur Asas Black Campuran Es-Air",
          "caption": "Kiri: Lebarnya dataran peleburan es pada 0°C karena tingginya kalor lebur L = 80 kal/g. Kanan: Bukti mengapa 100 g air 40°C hanya mampu mencairkan separuh dari 100 g es 0°C.",
          "guide": [
            "Selama proses perubahan wujud (melebur pada 0°C atau mendidih pada 100°C), seluruh kalor yang diserap digunakan untuk memutus ikatan antar-molekul sehingga suhu zat TIDAK BERUBAH.",
            "Waspada Jebakan Asas Black: Jangan langsung menyamakan m_es·L + m_es·c·(Tc - 0) = m_air·c·(40 - Tc) sebelum menguji apakah kalor air cukup untuk meleburkan seluruh es!",
            "Karena 100 g air 40°C hanya punya tabungan kalor 4000 kal (sedangkan melebur 100 g es butuh 8000 kal), proses berhenti tepat di 0°C dengan 50 g es berhasil mencair dan 50 g es masih membeku."
          ]
        }
      },
      {
        "title": "2. Teori Kinetik Gas Ideal & Derajat Kebebasan Ekuipartisi",
        "concept": "Persamaan Keadaan Gas Ideal: $PV = nRT = N k_B T$.\n\n---\n\n**1. Tekanan & Energi Kinetik Gas:**\nTekanan gas timbul akibat tumbukan molekul-molekul gas pada dinding wadah:\n$$P = \\frac{1}{3} \\frac{N m}{V} v_{\\text{rms}}^2 \\implies E_k = \\frac{3}{2} k_B T$$\nKelajuan efektif (*root-mean-square*):\n$$v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}$$\n\n---\n\n**2. Teorema Ekuipartisi Energi & Derajat Kebebasan ($f$):**\nSetiap derajat kebebasan menyumbangkan energi sebesar $\\frac{1}{2} k_B T$ per molekul:\n$$E_k = \\frac{f}{2} k_B T, \\quad U = N \\left(\\frac{f}{2} k_B T\\right)$$\n- **Gas Monoatomik (He, Ne, Ar):** $f = 3$ (3 translasi) pada semua suhu.\n- **Gas Diatomik ($O_2, N_2, H_2$):**\n  - Suhu rendah ($T \\approx 250\\text{ K}$): $f = 3$ (hanya translasi).\n  - Suhu sedang / suhu ruang ($T \\approx 500\\text{ K}$): $f = 5$ (3 translasi + 2 rotasi).\n  - Suhu tinggi ($T \\ge 1000\\text{ K}$): $f = 7$ (3 translasi + 2 rotasi + 2 vibrasi).",
        "quickTip": "Energi dalam gas ideal HANYA bergantung pada suhu mutlak ($T$). Jika suhu konstan (isotermal), perubahan energi dalam $\\Delta U = 0$.",
        "exampleProblem": "**Soal Kasus Terbimbing:**\nGas oksigen ($O_2$, diatomik, $M_r = 32\\text{ g/mol}$) berada dalam wadah tertutup pada suhu ruang $T = 300\\text{ K}$. Hitung energi kinetik rata-rata sebuah molekul gas oksigen dan kelajuan efektifnya ($k_B = 1{,}38 \\times 10^{-23}\\text{ J/K}$, $R = 8{,}314\\text{ J/mol}\\cdot\\text{K}$).\n\n**Solusi Bertahap:**\n1. **Energi Kinetik pada Suhu Ruang ($f = 5$):**\n   $$E_k = \\frac{5}{2} k_B T = 2{,}5 \\times (1{,}38 \\times 10^{-23}) \\times 300 = 1{,}035 \\times 10^{-20}\\text{ Joule}$$\n2. **Kelajuan Efektif ($v_{\\text{rms}}$):**\n   $$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3 \\times 8{,}314 \\times 300}{32 \\times 10^{-3}}} = \\sqrt{\\frac{7482{,}6}{0{,}032}} = \\sqrt{233831} \\approx 483{,}5\\text{ m/s}$$\n*Molekul oksigen di sekitar kita melesat dengan kecepatan sekitar 483,5 m/s (lebih cepat dari kecepatan suara).* ",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-termodinamika_1.svg",
          "title": "Distribusi Kelajuan Efektif Maxwell-Boltzmann & Tangga Derajat Kebebasan Gas Diatomik",
          "caption": "Kiri: Kenaikan suhu mutlak T menggeser kurva distribusi molekul ke kanan dan memperbesar v_rms = √(3RT/M). Kanan: Aktivasi bertahap mode gerak translasi (f=3), rotasi (f=5), dan vibrasi (f=7) pada gas diatomik.",
          "guide": [
            "Kelajuan efektif v_rms berbanding lurus dengan akar suhu mutlak √T dan berbanding terbalik dengan akar massa molar √M (molekul ringan bergerak jauh lebih cepat).",
            "Gas monoatomik (He, Ne, Ar) hanya bisa bergerak translasi 3 sumbu (x, y, z) sehingga derajat kebebasannya selalu f = 3 pada suhu berapa pun.",
            "Gas diatomik (O2, N2, H2) memiliki f = 3 pada suhu rendah, meningkat menjadi f = 5 pada suhu ruang (aktif berotasi), dan mencapai f = 7 pada suhu tinggi (ikatan bergetar/vibrasi)."
          ]
        }
      },
      {
        "title": "3. Hukum Termodinamika, Usaha Siklus P-V & Mesin Carnot",
        "concept": "Hukum I Termodinamika (Kekekalan Energi):\n$$\\Delta U = Q - W$$\n- $Q$: Kalor masuk ($+$) atau kalor keluar ($-$).\n- $W$: Usaha dilakukan sistem ($+$) atau usaha dilakukan pada sistem ($-$).\n- $\\Delta U$: Perubahan energi dalam ($n C_v \\Delta T$).\n\n---\n\n**1. Empat Proses Termodinamika Utama:**\n- **Isobarik ($P = \\text{konstan}$):** $W = P(V_2 - V_1) = nR\\Delta T$.\n- **Isokhorik ($V = \\text{konstan}$):** $W = 0 \\implies Q = \\Delta U$.\n- **Isotermal ($T = \\text{konstan}$):** $\\Delta U = 0 \\implies Q = W = nRT \\ln(V_2 / V_1)$.\n- **Adiabatik ($Q = 0$):** $W = -\\Delta U$.\n\n---\n\n**2. Usaha Netto Siklus P-V:**\nPada grafik tekanan vs volume ($P-V$), usaha netto satu siklus tertutup adalah **luas area di dalam kurva siklus**:\n- Putaran searah jarum jam $\\implies W > 0$ (Mesin Kalor).\n- Putaran berlawanan jarum jam $\\implies W < 0$ (Mesin Pendingin).\n\n---\n\n**3. Siklus Mesin Carnot & Efisiensi Maksimum:**\n$$\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H}$$\n- $T_H$: Suhu mutlak reservoir panas (Kelvin).\n- $T_C$: Suhu mutlak reservoir dingin (Kelvin).\n- $W$: Usaha mekanik yang dihasilkan per siklus.",
        "quickTip": "Suhu pada rumus efisiensi Carnot WAJIB dalam skala Kelvin: $T(\\text{K}) = t(^\\circ\\text{C}) + 273$!",
        "exampleProblem": "**Soal Kasus Terbimbing (Tipe UTBK):**\nSebuah mesin kalor Carnot beroperasi di antara reservoir panas bersuhu $500\\text{ K}$ dan reservoir dingin bersuhu $350\\text{ K}$.\na) Tentukan efisiensi mula-mula mesin tersebut.\nb) Jika suhu reservoir dingin tetap $350\\text{ K}$, berapakah suhu reservoir panas harus dinaikkan agar efisiensinya meningkat menjadi $50\\%$?\n\n**Solusi Bertahap:**\n1. **Efisiensi Awal:**\n   $$\\eta_1 = 1 - \\frac{T_C}{T_{H1}} = 1 - \\frac{350}{500} = 1 - 0{,}70 = 0{,}30 = 30\\%$$\n2. **Menentukan Suhu Reservoir Panas Baru ($T_{H2}$) untuk $\\eta_2 = 50\\% = 0{,}5$:**\n   $$\\eta_2 = 1 - \\frac{T_C}{T_{H2}}$$\n   $$0{,}5 = 1 - \\frac{350}{T_{H2}} \\implies \\frac{350}{T_{H2}} = 0{,}5$$\n   $$T_{H2} = \\frac{350}{0{,}5} = 700\\text{ Kelvin}$$\n3. **Peningkatan Suhu yang Dibutuhkan:**\n   $$\\Delta T_H = T_{H2} - T_{H1} = 700 - 500 = 200\\text{ Kelvin}$$\n*Suhu reservoir panas harus dinaikkan sebesar $200\\text{ K}$ (menjadi $700\\text{ K}$).*",
        "visual": {
          "image": "assets/materi/fisika_k11/k11-fisika-termodinamika_2.svg",
          "title": "Empat Proses Termodinamika pada Diagram P-V & Siklus Mesin Kalor Carnot",
          "caption": "Kiri: Perbandingan kemiringan kurva Isobarik, Isotermal, Adiabatik, dan Isokhorik. Kanan: Siklus tertutup Carnot (2 proses isotermal + 2 proses adiabatik) di mana luas di dalam loop adalah usaha bersih W.",
          "guide": [
            "Luas di bawah kurva P terhadap V adalah Usaha (W): proses Isokhorik (tegak vertikal) memiliki ΔV = 0 sehingga tidak melakukan usaha sama sekali (W = 0).",
            "Kurva Adiabatik (PV^γ = C) selalu lebih curam dibandingkan kurva Isotermal (PV = C) karena pada ekspansi adiabatik tidak ada kalor yang masuk (Q = 0) sehingga suhu gas ikut turun.",
            "Pada Siklus Carnot, efisiensi maksimum hanya ditentukan oleh rasio suhu mutlak reservoir dingin dan panas: η = 1 - (TC / TH) dengan suhu WAJIB dalam satuan Kelvin."
          ]
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.KURMER_KELAS11_DATA = KURMER_KELAS11_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KURMER_KELAS11_DATA;
}
