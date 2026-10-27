/**
 * THE ARICH STUDY — BANK SOAL CBT UTBK-SNBT MATEMATIKA KELAS 11 SMA
 * Standar Kurikulum Merdeka & UTBK-SNBT Terkini
 * Total 15 Soal High-Quality (5 Opsi: A, B, C, D, E), Terverifikasi 100% Akurat
 */

if (typeof window === 'undefined') {
  globalThis.window = globalThis;
}

window.UTBK_SOAL_BANK = [
  {
    id: 1,
    chapter: "Fungsi Komposisi & Invers",
    level: "Sedang",
    prompt: "Daerah asal alami (domain) $D_f$ dari fungsi irasional-pecahan $$f(x) = \\sqrt{\\frac{2x - 6}{x + 4}}$$ agar terdefinisi pada himpunan bilangan real $\\mathbb{R}$ adalah...",
    options: [
      "$$D_f = \\{x \\mid -4 < x \\le 3, x \\in \\mathbb{R}\\}$$",
      "$$D_f = \\{x \\mid x < -4 \\text{ atau } x \\ge 3, x \\in \\mathbb{R}\\}$$",
      "$$D_f = \\{x \\mid x \\le -4 \\text{ atau } x \\ge 3, x \\in \\mathbb{R}\\}$$",
      "$$D_f = \\{x \\mid x < -4 \\text{ atau } x > 3, x \\in \\mathbb{R}\\}$$",
      "$$D_f = \\{x \\mid x \\ge 3, x \\in \\mathbb{R}\\}$$"
    ],
    correct: 1,
    hint: "Ada dua syarat mutlak: (1) Bentuk di dalam akar genap harus tak negatif ($\\ge 0$), dan (2) Penyebut pecahan tidak boleh bernilai nol ($\\ne 0$).",
    explanation: `
      <strong>Langkah 1: Tentukan syarat terdefinisi fungsi</strong><br>
      Fungsi $f(x) = \\sqrt{\\frac{2x - 6}{x + 4}}$ memuat bentuk akar dan pecahan. Agar terdefinisi pada bilangan real $\\mathbb{R}$, syaratnya:
      <ol class="list-decimal list-inside my-2 space-y-1">
        <li>Bentuk di dalam akar harus tak-negatif: $\\frac{2x - 6}{x + 4} \\ge 0$</li>
        <li>Penyebut pecahan tidak boleh bernilai nol: $x + 4 \\ne 0 \\implies x \\ne -4$</li>
      </ol>
      <strong>Langkah 2: Tentukan pembuat nol pembilang dan penyebut</strong><br>
      • Pembilang: $2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$<br>
      • Penyebut: $x + 4 = 0 \\implies x = -4$<br><br>
      <strong>Langkah 3: Uji tanda pada garis bilangan</strong><br>
      Garis bilangan terbagi menjadi 3 interval dengan batas $x = -4$ (terbuka karena penyebut $\\ne 0$) dan $x = 3$ (tertutup karena $\\ge 0$):
      <ul class="list-disc list-inside my-1 space-y-1">
        <li>Untuk $x > 3$ (misal $x = 4$): $\\frac{2(4) - 6}{4 + 4} = \\frac{2}{8} > 0$ $(+)$</li>
        <li>Untuk $-4 < x < 3$ (misal $x = 0$): $\\frac{2(0) - 6}{0 + 4} = \\frac{-6}{4} < 0$ $(-)$</li>
        <li>Untuk $x < -4$ (misal $x = -5$): $\\frac{2(-5) - 6}{-5 + 4} = \\frac{-16}{-1} = 16 > 0$ $(+)$</li>
      </ul>
      Karena pertidaksamaan bertanda $\\ge 0$, ambil interval bertanda positif $(+)$:
      $$D_f = \\{x \\mid x < -4 \\text{ atau } x \\ge 3, x \\in \\mathbb{R}\\}$$
    `
  },
  {
    id: 2,
    chapter: "Fungsi Komposisi & Invers",
    level: "Mudah",
    prompt: "Diketahui fungsi $f(x) = 2x^2 - 3x + 1$ dan $g(x) = x - 2$. Jika nilai $(f \\circ g)(a) = 6$, maka jumlah semua nilai $a$ yang memenuhi persamaan tersebut adalah...",
    options: [
      "$$\\frac{7}{2}$$",
      "$$4$$",
      "$$\\frac{9}{2}$$",
      "$$5$$",
      "$$\\frac{11}{2}$$"
    ],
    correct: 4,
    hint: "Tentukan rumus $(f \\circ g)(a) = f(g(a))$. Gunakan rumus jumlah akar-akar persamaan kuadrat $a_1 + a_2 = -\\frac{b}{a}$.",
    explanation: `
      <strong>Langkah 1: Tentukan fungsi komposisi $(f \\circ g)(a)$</strong><br>
      Diketahui $g(a) = a - 2$. Substitusikan ke dalam fungsi $f(x)$:
      $$(f \\circ g)(a) = f(g(a)) = f(a - 2)$$
      $$f(a - 2) = 2(a - 2)^2 - 3(a - 2) + 1$$
      $$f(a - 2) = 2(a^2 - 4a + 4) - 3a + 6 + 1$$
      $$f(a - 2) = 2a^2 - 8a + 8 - 3a + 7$$
      $$(f \\circ g)(a) = 2a^2 - 11a + 15$$
      <br>
      <strong>Langkah 2: Selesaikan persamaan $(f \\circ g)(a) = 6$</strong><br>
      $$2a^2 - 11a + 15 = 6$$
      $$2a^2 - 11a + 9 = 0$$
      Periksa diskriminan persamaan kuadrat:
      $$D = (-11)^2 - 4(2)(9) = 121 - 72 = 49 > 0 \\quad (\\text{memiliki dua akar real berbeda})$$
      <br>
      <strong>Langkah 3: Hitung jumlah seluruh nilai $a$</strong><br>
      Berdasarkan Teorema Vieta pada persamaan kuadrat $2a^2 - 11a + 9 = 0$:
      $$a_1 + a_2 = -\\frac{b}{a} = -\\frac{-11}{2} = \\frac{11}{2}$$
      <em>(Verifikasi pemfaktoran: $(2a - 9)(a - 1) = 0 \\implies a_1 = \\frac{9}{2}, a_2 = 1 \\implies \\frac{9}{2} + 1 = \\frac{11}{2})$</em>.
    `
  },
  {
    id: 3,
    chapter: "Fungsi Komposisi & Invers",
    level: "Sedang",
    prompt: "Fungsi $f(x)$ didefinisikan sebagai pecahan aljabar linear $$f(x) = \\frac{3x - 5}{2x + 7}, \\quad x \\ne -\\frac{7}{2}$$ Jika $f^{-1}(x)$ menyatakan fungsi invers dari $f(x)$, maka nilai dari $f^{-1}(2)$ adalah...",
    options: [
      "$$-23$$",
      "$$-19$$",
      "$$-15$$",
      "$$7$$",
      "$$19$$"
    ],
    correct: 1,
    hint: "Ingat sifat mendasar fungsi invers: $f^{-1}(b) = a \\iff f(a) = b$. Anda tidak harus mencari rumus inversnya terlebih dahulu!",
    explanation: `
      <strong>Metode 1: Definisi Dasar Fungsi Invers (Trik Tercepat UTBK)</strong><br>
      Misalkan $f^{-1}(2) = k$, maka sesuai definisi invers berlaku:
      $$f(k) = 2$$
      Substitusikan nilai $k$ ke dalam rumus $f(x)$:
      $$\\frac{3k - 5}{2k + 7} = 2$$
      Kalikan silang penyebut:
      $$3k - 5 = 2(2k + 7)$$
      $$3k - 5 = 4k + 14$$
      $$3k - 4k = 14 + 5$$
      $$-k = 19 \\implies k = -19$$
      <br>
      <strong>Metode 2: Menggunakan Rumus Cepat Invers Pecahan Linear</strong><br>
      Untuk fungsi berbentuk $f(x) = \\frac{ax + b}{cx + d}$, rumus inversnya adalah:
      $$f^{-1}(x) = \\frac{-dx + b}{cx - a}$$
      Dari $f(x) = \\frac{3x - 5}{2x + 7}$ diperoleh $a = 3, b = -5, c = 2, d = 7$:
      $$f^{-1}(x) = \\frac{-7x - 5}{2x - 3}$$
      Substitusi $x = 2$:
      $$f^{-1}(2) = \\frac{-7(2) - 5}{2(2) - 3} = \\frac{-14 - 5}{4 - 3} = \\frac{-19}{1} = -19$$
    `
  },
  {
    id: 4,
    chapter: "Fungsi Komposisi & Invers",
    level: "Sedang",
    prompt: "Diketahui rumus fungsi komposisi $(f \\circ g)(x) = 4x^2 + 12x + 5$ dan fungsi $g(x) = 2x + 1$. Rumus fungsi $f(x)$ yang memenuhi adalah...",
    options: [
      "$$f(x) = x^2 + 2x - 1$$",
      "$$f(x) = x^2 + 2x$$",
      "$$f(x) = x^2 + 4x - 2$$",
      "$$f(x) = x^2 + 4x$$",
      "$$f(x) = 2x^2 + 4x$$"
    ],
    correct: 3,
    hint: "Gunakan metode pemisalan $u = g(x) = 2x + 1$, lalu nyatakan $x$ dalam variabel $u$ dan substitusikan ke $(f \\circ g)(x)$.",
    explanation: `
      <strong>Langkah 1: Hubungan fungsi komposisi</strong><br>
      $$(f \\circ g)(x) = f(g(x)) = 4x^2 + 12x + 5$$
      $$f(2x + 1) = 4x^2 + 12x + 5$$
      <br>
      <strong>Langkah 2: Metode Substitusi Aljabar</strong><br>
      Misalkan $u = 2x + 1$, maka:
      $$2x = u - 1 \\implies x = \\frac{u - 1}{2}$$
      Substitusikan nilai $x$ ke dalam fungsi:
      $$f(u) = 4\\left(\\frac{u - 1}{2}\\right)^2 + 12\\left(\\frac{u - 1}{2}\\right) + 5$$
      $$f(u) = 4\\left(\\frac{u^2 - 2u + 1}{4}\\right) + 6(u - 1) + 5$$
      $$f(u) = (u^2 - 2u + 1) + (6u - 6) + 5$$
      $$f(u) = u^2 + (-2u + 6u) + (1 - 6 + 5)$$
      $$f(u) = u^2 + 4u$$
      <br>
      <strong>Langkah 3: Kembalikan ke variabel $x$</strong><br>
      $$f(x) = x^2 + 4x$$
      <em>(Verifikasi: $f(2x + 1) = (2x + 1)^2 + 4(2x + 1) = 4x^2 + 4x + 1 + 8x + 4 = 4x^2 + 12x + 5$, tepat terbukti!)</em>
    `
  },
  {
    id: 5,
    chapter: "Fungsi Komposisi & Invers",
    level: "HOTS / UTBK",
    prompt: "Diberikan dua fungsi $f(x) = \\frac{2x + 1}{x - 3}$ untuk $x \\ne 3$ dan $g(x) = 3x - 2$. Jika diketahui persamaan $(f \\circ g)^{-1}(k) = 2$, maka nilai dari ekspresi $k^2 + 2k$ adalah...",
    options: [
      "$$63$$",
      "$$80$$",
      "$$99$$",
      "$$120$$",
      "$$143$$"
    ],
    correct: 2,
    hint: "Sifat invers: jika $H^{-1}(k) = 2$, maka $H(2) = k$. Dengan $H = f \\circ g$, carilah nilai $k$ dengan menghitung $f(g(2))$.",
    explanation: `
      <strong>Langkah 1: Sifat Invers Pemetaan</strong><br>
      Berdasarkan relasi fundamental invers fungsi:
      $$(f \\circ g)^{-1}(k) = 2 \\iff (f \\circ g)(2) = k$$
      Artinya, nilai $k$ diperoleh langsung dari evaluasi $(f \\circ g)(2)$ tanpa perlu mencari rumus inversnya secara eksplisit.<br><br>
      <strong>Langkah 2: Menghitung nilai $k$</strong><br>
      Hitung $g(2)$ terlebih dahulu:
      $$g(2) = 3(2) - 2 = 6 - 2 = 4$$
      Masukkan nilai $g(2) = 4$ ke fungsi $f$:
      $$k = f(g(2)) = f(4)$$
      $$f(4) = \\frac{2(4) + 1}{4 - 3} = \\frac{8 + 1}{1} = 9$$
      Sehingga diperoleh nilai $k = 9$.<br><br>
      <strong>Langkah 3: Evaluasi ekspresi $k^2 + 2k$</strong><br>
      $$k^2 + 2k = (9)^2 + 2(9) = 81 + 18 = 99$$
    `
  },
  {
    id: 6,
    chapter: "Matriks",
    level: "Mudah",
    prompt: "Diketahui perkalian matriks ordo $2 \\times 2$ berikut: $$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix} \\begin{pmatrix} -1 & 2 \\\\ 5 & 0 \\end{pmatrix} = \\begin{pmatrix} 3 & 4 \\\\ 11 & p \\end{pmatrix}$$ Nilai konstanta $p$ yang memenuhi kesamaan matriks tersebut adalah...",
    options: [
      "$$4$$",
      "$$6$$",
      "$$7$$",
      "$$10$$",
      "$$8$$"
    ],
    correct: 4,
    hint: "Lakukan perkalian matriks baris ke-2 dengan kolom ke-2 untuk langsung menemukan nilai elemen baris ke-2 kolom ke-2.",
    explanation: `
      <strong>Langkah 1: Aturan Perkalian Matriks</strong><br>
      Kalikan matriks baris demi kolom di ruas kiri:
      $$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix} \\begin{pmatrix} -1 & 2 \\\\ 5 & 0 \\end{pmatrix} = \\begin{pmatrix} 2(-1) + 1(5) & 2(2) + 1(0) \\\\ 4(-1) + 3(5) & 4(2) + 3(0) \\end{pmatrix}$$
      <br>
      <strong>Langkah 2: Hitung nilai setiap elemen</strong><br>
      • Baris 1 Kolom 1: $-2 + 5 = 3$<br>
      • Baris 1 Kolom 2: $4 + 0 = 4$<br>
      • Baris 2 Kolom 1: $-4 + 15 = 11$<br>
      • Baris 2 Kolom 2: $8 + 0 = 8$<br>
      Matriks ruas kiri bernilai:
      $$\\begin{pmatrix} 3 & 4 \\\\ 11 & 8 \\end{pmatrix}$$
      <br>
      <strong>Langkah 3: Kesamaan Matriks</strong><br>
      $$\\begin{pmatrix} 3 & 4 \\\\ 11 & 8 \\end{pmatrix} = \\begin{pmatrix} 3 & 4 \\\\ 11 & p \\end{pmatrix}$$
      Dengan membandingkan elemen pada baris kedua kolom kedua:
      $$p = 8$$
    `
  },
  {
    id: 7,
    chapter: "Matriks",
    level: "Sedang",
    prompt: "Diberikan matriks berordo $3 \\times 3$ sebagai berikut: $$M = \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & x & 1 \\\\ 1 & 4 & 2 \\end{pmatrix}$$ Jika matriks $M$ merupakan <strong>matriks singular</strong> (tidak memiliki invers), maka nilai $x$ adalah...",
    options: [
      "$$\\frac{7}{4}$$",
      "$$\\frac{9}{4}$$",
      "$$\\frac{11}{4}$$",
      "$$\\frac{13}{4}$$",
      "$$\\frac{15}{4}$$"
    ],
    correct: 3,
    hint: "Suatu matriks tidak memiliki invers (singular) jika dan hanya jika nilai determinannya sama dengan nol: $\\det(M) = 0$.",
    explanation: `
      <strong>Langkah 1: Konsep Matriks Singular</strong><br>
      Matriks $M$ singular $\\iff \\det(M) = 0$.<br><br>
      <strong>Langkah 2: Menghitung Determinan Matriks $3 \\times 3$</strong><br>
      Gunakan ekspansi kofaktor sepanjang baris pertama (terdapat elemen 0):
      $$\\det(M) = 2 \\cdot \\begin{vmatrix} x & 1 \\\\ 4 & 2 \\end{vmatrix} - 1 \\cdot \\begin{vmatrix} 3 & 1 \\\\ 1 & 2 \\end{vmatrix} + 0 \\cdot \\begin{vmatrix} 3 & x \\\\ 1 & 4 \\end{vmatrix}$$
      Hitung determinan masing-masing minor $2 \\times 2$:
      $$\\begin{vmatrix} x & 1 \\\\ 4 & 2 \\end{vmatrix} = (x)(2) - (1)(4) = 2x - 4$$
      $$\\begin{vmatrix} 3 & 1 \\\\ 1 & 2 \\end{vmatrix} = (3)(2) - (1)(1) = 6 - 1 = 5$$
      Maka nilai determinan total:
      $$\\det(M) = 2(2x - 4) - 1(5) = 4x - 8 - 5 = 4x - 13$$
      <br>
      <em>(Verifikasi metode Sarrus: $\\det(M) = (2\\cdot x\\cdot 2 + 1\\cdot 1\\cdot 1 + 0\\cdot 3\\cdot 4) - (0\\cdot x\\cdot 1 + 2\\cdot 1\\cdot 4 + 1\\cdot 3\\cdot 2) = (4x + 1) - (14) = 4x - 13$)</em>.<br><br>
      <strong>Langkah 3: Tentukan nilai $x$</strong><br>
      Syarat matriks singular: $\\det(M) = 0$:
      $$4x - 13 = 0 \\implies 4x = 13 \\implies x = \\frac{13}{4}$$
    `
  },
  {
    id: 8,
    chapter: "Matriks",
    level: "HOTS / UTBK",
    prompt: "Diketahui dua matriks persegi berordo $2 \\times 2$ yaitu $A = \\begin{pmatrix} 4 & 3 \\\\ 2 & 2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$. Jika matriks $X$ memenuhi persamaan matriks $A \\cdot X = B^{-1}$, maka nilai dari determinan matriks $(2X)$ adalah...",
    options: [
      "$$-4$$",
      "$$-2$$",
      "$$-\\frac{1}{2}$$",
      "$$2$$",
      "$$4$$"
    ],
    correct: 1,
    hint: "Gunakan sifat determinan: $\\det(A \\cdot X) = \\det(A) \\cdot \\det(X)$, $\\det(B^{-1}) = \\frac{1}{\\det(B)}$, dan untuk matriks $2 \\times 2$, $\\det(kM) = k^2 \\det(M)$.",
    explanation: `
      <strong>Langkah 1: Menghitung determinan matriks $A$ dan $B$</strong><br>
      $$\\det(A) = (4)(2) - (3)(2) = 8 - 6 = 2$$
      $$\\det(B) = (1)(5) - (2)(3) = 5 - 6 = -1$$
      <br>
      <strong>Langkah 2: Menentukan $\\det(X)$ menggunakan sifat determinan</strong><br>
      Diberikan persamaan matriks $A \\cdot X = B^{-1}$. Ambil determinan kedua ruas:
      $$\\det(A \\cdot X) = \\det(B^{-1})$$
      Berdasarkan sifat determinan perkalian dan invers:
      $$\\det(A) \\cdot \\det(X) = \\frac{1}{\\det(B)}$$
      $$2 \\cdot \\det(X) = \\frac{1}{-1} = -1$$
      $$\\det(X) = -\\frac{1}{2}$$
      <br>
      <strong>Langkah 3: Menghitung $\\det(2X)$</strong><br>
      Karena matriks $X$ berordo $2 \\times 2$ ($n = 2$), berlaku sifat skalar determinan $\\det(k \\cdot M) = k^n \\cdot \\det(M)$:
      $$\\det(2X) = 2^2 \\cdot \\det(X) = 4 \\cdot \\left(-\\frac{1}{2}\\right) = -2$$
    `
  },
  {
    id: 9,
    chapter: "Lingkaran",
    level: "Sedang",
    prompt: "Persamaan lingkaran yang berpusat di titik $P(2, -3)$ dan menyinggung garis lurus $3x - 4y + 7 = 0$ adalah...",
    options: [
      "$$x^2 + y^2 - 4x + 6y - 12 = 0$$",
      "$$x^2 + y^2 - 4x + 6y + 12 = 0$$",
      "$$x^2 + y^2 + 4x - 6y - 12 = 0$$",
      "$$x^2 + y^2 - 4x - 6y - 25 = 0$$",
      "$$x^2 + y^2 + 4x + 6y - 25 = 0$$"
    ],
    correct: 0,
    hint: "Jari-jari lingkaran $r$ sama dengan jarak titik pusat $(x_1, y_1)$ ke garis singgung $Ax + By + C = 0$, yaitu $r = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$.",
    explanation: `
      <strong>Langkah 1: Menghitung panjang jari-jari $r$</strong><br>
      Jari-jari lingkaran adalah jarak tegak lurus dari titik pusat $P(2, -3)$ ke garis $3x - 4y + 7 = 0$:
      $$r = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$$
      $$r = \\frac{|3(2) - 4(-3) + 7|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 + 12 + 7|}{\\sqrt{9 + 16}} = \\frac{|25|}{\\sqrt{25}} = \\frac{25}{5} = 5$$
      Diperoleh kuadrat jari-jari: $r^2 = 5^2 = 25$.<br><br>
      <strong>Langkah 2: Menyusun persamaan baku lingkaran</strong><br>
      Dengan pusat $(a, b) = (2, -3)$ dan $r = 5$:
      $$(x - a)^2 + (y - b)^2 = r^2$$
      $$(x - 2)^2 + (y - (-3))^2 = 25$$
      $$(x - 2)^2 + (y + 3)^2 = 25$$
      <br>
      <strong>Langkah 3: Jabarkan ke bentuk umum</strong><br>
      $$(x^2 - 4x + 4) + (y^2 + 6y + 9) = 25$$
      $$x^2 + y^2 - 4x + 6y + 13 - 25 = 0$$
      $$x^2 + y^2 - 4x + 6y - 12 = 0$$
    `
  },
  {
    id: 10,
    chapter: "Lingkaran",
    level: "HOTS / UTBK",
    prompt: "Salah satu persamaan garis singgung pada lingkaran $x^2 + y^2 - 6x + 4y - 12 = 0$ yang <strong>tegak lurus</strong> dengan garis $4x - 3y + 9 = 0$ adalah...",
    options: [
      "$$3x + 4y - 26 = 0$$",
      "$$3x - 4y + 24 = 0$$",
      "$$4x + 3y - 26 = 0$$",
      "$$4x - 3y + 24 = 0$$",
      "$$3x + 4y + 12 = 0$$"
    ],
    correct: 0,
    hint: "Ubah persamaan lingkaran ke bentuk $(x-a)^2 + (y-b)^2 = r^2$. Garis tegak lurus memiliki gradien $m_1 \\cdot m = -1$. Gunakan rumus garis singgung gradien: $y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$.",
    explanation: `
      <strong>Langkah 1: Menentukan titik pusat dan jari-jari lingkaran</strong><br>
      Sempurnakan bentuk kuadrat pada persamaan lingkaran:
      $$x^2 - 6x + y^2 + 4y = 12$$
      $$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$
      $$(x - 3)^2 + (y + 2)^2 = 25$$
      Diperoleh titik pusat $(a, b) = (3, -2)$ dan jari-jari $r = \\sqrt{25} = 5$.<br><br>
      <strong>Langkah 2: Menentukan gradien garis singgung ($m$)</strong><br>
      Garis yang diketahui: $4x - 3y + 9 = 0 \\implies 3y = 4x + 9 \\implies y = \\frac{4}{3}x + 3$.<br>
      Gradien garis tersebut adalah $m_1 = \\frac{4}{3}$.<br>
      Karena garis singgung tegak lurus ($m \\cdot m_1 = -1$):
      $$m = -\\frac{1}{m_1} = -\\frac{3}{4}$$
      <br>
      <strong>Langkah 3: Rumus persamaan garis singgung lingkaran</strong><br>
      $$y - b = m(x - a) \\pm r\\sqrt{1 + m^2}$$
      $$y - (-2) = -\\frac{3}{4}(x - 3) \\pm 5\\sqrt{1 + \\left(-\\frac{3}{4}\\right)^2}$$
      $$y + 2 = -\\frac{3}{4}(x - 3) \\pm 5\\sqrt{1 + \\frac{9}{16}} = -\\frac{3}{4}(x - 3) \\pm 5\\left(\\frac{5}{4}\\right)$$
      $$y + 2 = -\\frac{3}{4}(x - 3) \\pm \\frac{25}{4}$$
      Kalikan kedua ruas dengan 4:
      $$4(y + 2) = -3(x - 3) \\pm 25$$
      $$4y + 8 = -3x + 9 \\pm 25$$
      $$3x + 4y - 1 \\pm 25 = 0$$
      Dua kemungkinan persamaan garis singgung:
      <ol class="list-decimal list-inside my-1 space-y-1">
        <li>Dengan $+25$: $3x + 4y - 1 + 25 = 0 \\implies 3x + 4y + 24 = 0$</li>
        <li>Dengan $-25$: $3x + 4y - 1 - 25 = 0 \\implies 3x + 4y - 26 = 0$</li>
      </ol>
      Dari kedua kemungkinan tersebut, pilihan yang tercantum adalah $3x + 4y - 26 = 0$.
    `
  },
  {
    id: 11,
    chapter: "Barisan & Deret",
    level: "Sedang",
    prompt: "Jumlah $n$ suku pertama dari suatu deret aritmatika dirumuskan dengan persamaan $$S_n = 3n^2 - 5n$$ Nilai dari suku ke-$12$ ($U_{12}$) pada deret tersebut adalah...",
    options: [
      "$$58$$",
      "$$62$$",
      "$$64$$",
      "$$68$$",
      "$$72$$"
    ],
    correct: 2,
    hint: "Gunakan relasi dasar deret: $U_n = S_n - S_{n-1}$, atau turunkan rumus $U_n$ dari rumus $S_n$.",
    explanation: `
      <strong>Metode 1: Menggunakan Relasi Fundamental $U_n = S_n - S_{n-1}$</strong><br>
      Untuk menentukan suku ke-12 ($U_{12}$):
      $$U_{12} = S_{12} - S_{11}$$
      Hitung $S_{12}$:
      $$S_{12} = 3(12)^2 - 5(12) = 3(144) - 60 = 432 - 60 = 372$$
      Hitung $S_{11}$:
      $$S_{11} = 3(11)^2 - 5(11) = 3(121) - 55 = 363 - 55 = 308$$
      Maka nilai suku ke-12 adalah:
      $$U_{12} = 372 - 308 = 64$$
      <br>
      <strong>Metode 2: Menurunkan Rumus Umum Suku ke-$n$</strong><br>
      Bila $S_n = An^2 + Bn$, maka beda $b = 2A$ dan suku pertama $a = S_1 = A + B$:
      • $A = 3 \\implies b = 2(3) = 6$<br>
      • $a = S_1 = 3(1)^2 - 5(1) = 3 - 5 = -2$<br>
      Rumus suku ke-$n$:
      $$U_n = a + (n - 1)b = -2 + (n - 1)(6) = 6n - 8$$
      Substitusikan $n = 12$:
      $$U_{12} = 6(12) - 8 = 72 - 8 = 64$$
    `
  },
  {
    id: 12,
    chapter: "Barisan & Deret",
    level: "HOTS / UTBK",
    prompt: "Sebuah bola tenis dijatuhkan vertikal dari atas gedung dengan ketinggian $12\\text{ meter}$. Setiap kali memantul di lantai, bola mencapai ketinggian $\\frac{3}{5}$ dari tinggi sebelumnya. Panjang seluruh lintasan yang ditempuh bola tersebut hingga akhirnya berhenti adalah...",
    options: [
      "$$36\\text{ meter}$$",
      "$$42\\text{ meter}$$",
      "$$48\\text{ meter}$$",
      "$$54\\text{ meter}$$",
      "$$60\\text{ meter}$$"
    ],
    correct: 2,
    hint: "Lintasan terdiri dari jatuh awal, pantulan naik, dan pantulan turun. Gunakan rumus deret geometri tak hingga $S_\\infty = \\frac{a}{1 - r}$ atau rumus praktis: $S = h \\cdot \\frac{b + a}{b - a}$.",
    explanation: `
      <strong>Metode 1: Deret Geometri Tak Hingga Terpisah (Konsep Formal)</strong><br>
      Gerak bola terdiri dari lintasan turun dan lintasan naik:
      <ol class="list-decimal list-inside my-2 space-y-1">
        <li><strong>Lintasan Turun:</strong><br>
        Dimulai dari jatuh awal setinggi $12\\text{ m}$, lalu pantulan kedua turun, dst.<br>
        Suku pertama $a_{\\text{turun}} = 12$, rasio $r = \\frac{3}{5}$:<br>
        $$S_{\\text{turun}} = \\frac{a_{\\text{turun}}}{1 - r} = \\frac{12}{1 - \\frac{3}{5}} = \\frac{12}{\\frac{2}{5}} = 12 \\cdot \\frac{5}{2} = 30\\text{ m}$$
        </li>
        <li><strong>Lintasan Naik:</strong><br>
        Bola mulai naik setelah menyentuh tanah pertama kali: $a_{\\text{naik}} = 12 \\cdot \\frac{3}{5} = \\frac{36}{5}\\text{ m}$, rasio $r = \\frac{3}{5}$:<br>
        $$S_{\\text{naik}} = \\frac{a_{\\text{naik}}}{1 - r} = \\frac{\\frac{36}{5}}{1 - \\frac{3}{5}} = \\frac{\\frac{36}{5}}{\\frac{2}{5}} = \\frac{36}{2} = 18\\text{ m}$$
        </li>
      </ol>
      Total panjang seluruh lintasan:
      $$S_{\\text{total}} = S_{\\text{turun}} + S_{\\text{naik}} = 30 + 18 = 48\\text{ meter}$$
      <br>
      <strong>Metode 2: Rumus Praktis Pantulan Bola UTBK</strong><br>
      Jika bola dijatuhkan dari ketinggian $h$ dengan rasio pantul $r = \\frac{a}{b}$:
      $$S_{\\text{total}} = h \\cdot \\left(\\frac{b + a}{b - a}\\right)$$
      Dengan $h = 12\\text{ m}$, $a = 3$, dan $b = 5$:
      $$S_{\\text{total}} = 12 \\cdot \\left(\\frac{5 + 3}{5 - 3}\\right) = 12 \\cdot \\left(\\frac{8}{2}\\right) = 12 \\cdot 4 = 48\\text{ meter}$$
    `
  },
  {
    id: 13,
    chapter: "Transformasi Geometri",
    level: "Sedang",
    prompt: "Titik koordinat $A(-2, 5)$ ditransformasikan melalui refleksi terhadap garis $y = x$, kemudian dilanjutkan dengan rotasi sebesar $90^\\circ$ berlawanan arah jarum jam dengan pusat $O(0, 0)$. Koordinat bayangan akhir dari titik $A$ adalah...",
    options: [
      "$$(-5, -2)$$",
      "$$(-2, -5)$$",
      "$$(2, -5)$$",
      "$$(2, 5)$$",
      "$$(5, 2)$$"
    ],
    correct: 3,
    hint: "Refleksi terhadap garis $y = x$ menukar koordinat: $(x, y) \\to (y, x)$. Rotasi $[O, 90^\\circ]$ mengubah $(x', y') \\to (-y', x')$.",
    explanation: `
      <strong>Langkah 1: Refleksi terhadap garis $y = x$</strong><br>
      Aturan refleksi terhadap sumbu $y = x$ adalah $(x, y) \\to (y, x)$.<br>
      Untuk titik $A(-2, 5)$:
      $$A(-2, 5) \\xrightarrow{R_{y=x}} A'(5, -2)$$
      <br>
      <strong>Langkah 2: Rotasi $[O, +90^\\circ]$ (berlawanan jarum jam)</strong><br>
      Aturan rotasi sejauh $+90^\\circ$ berpusat di titik asal $O(0, 0)$ adalah $(x', y') \\to (-y', x')$.<br>
      Untuk titik $A'(5, -2)$:
      $$x'' = -y' = -(-2) = 2$$
      $$y'' = x' = 5$$
      Sehingga diperoleh bayangan akhir $A''(2, 5)$.<br><br>
      <strong>Verifikasi Komposisi Matriks:</strong><br>
      $$M_{\\text{ref}} = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad M_{\\text{rot}} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$
      $$M_{\\text{total}} = M_{\\text{rot}} \\cdot M_{\\text{ref}} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$
      $$\\begin{pmatrix} x'' \\\\ y'' \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$$
    `
  },
  {
    id: 14,
    chapter: "Transformasi Geometri",
    level: "HOTS / UTBK",
    prompt: "Persamaan bayangan dari garis lurus $2x - 3y + 6 = 0$ oleh transformasi yang bersesuaian dengan matriks $M = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ kemudian dilanjutkan dengan refleksi terhadap sumbu-$X$ adalah...",
    options: [
      "$$2x - 7y + 6 = 0$$",
      "$$2x + 7y + 6 = 0$$",
      "$$2x + y + 6 = 0$$",
      "$$2x - y - 6 = 0$$",
      "$$7x + 2y + 6 = 0$$"
    ],
    correct: 1,
    hint: "Tentukan matriks transformasi total $T = M_2 \\cdot M_1$. Cari relasi variabel mula-mula dengan variabel bayangan menggunakan invers $T^{-1}$, lalu substitusikan ke persamaan garis.",
    explanation: `
      <strong>Langkah 1: Menentukan matriks komposisi transformasi $T$</strong><br>
      • Transformasi pertama: $M_1 = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$<br>
      • Transformasi kedua (refleksi sumbu-$X$): $M_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$<br>
      Matriks komposisi $T = M_2 \\cdot M_1$:
      $$T = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} (1)(1)+0 & (1)(2)+0 \\\\ 0-0 & 0+(-1)(1) \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix}$$
      <br>
      <strong>Langkah 2: Menentukan Invers Matriks Transformasi</strong><br>
      Hubungan koordinat mula-mula $(x, y)$ dan koordinat bayangan $(x', y')$:
      $$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = T \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\implies \\begin{pmatrix} x \\\\ y \\end{pmatrix} = T^{-1} \\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$$
      Hitung determinan matriks $T$:
      $$\\det(T) = (1)(-1) - (2)(0) = -1$$
      Maka invers matriks $T$:
      $$T^{-1} = \\frac{1}{-1} \\begin{pmatrix} -1 & -2 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix}$$
      Sehingga:
      $$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x' + 2y' \\\\ -y' \\end{pmatrix}$$
      Diperoleh hubungan:
      $$x = x' + 2y'$$
      $$y = -y'$$
      <br>
      <strong>Langkah 3: Substitusi ke persamaan garis semula</strong><br>
      Garis awal: $2x - 3y + 6 = 0$:
      $$2(x' + 2y') - 3(-y') + 6 = 0$$
      $$2x' + 4y' + 3y' + 6 = 0$$
      $$2x' + 7y' + 6 = 0$$
      Jadi, persamaan bayangan garis adalah $2x + 7y + 6 = 0$.
    `
  },
  {
    id: 15,
    chapter: "Polinomial",
    level: "HOTS / UTBK",
    prompt: "Suatu suku banyak (polinomial) $P(x)$ jika dibagi oleh $(x - 2)$ bersisa $11$, dan jika dibagi oleh $(x + 1)$ bersisa $-1$. Apabila polinomial $P(x)$ tersebut dibagi oleh $(x^2 - x - 2)$, maka sisa pembagiannya adalah...",
    options: [
      "$$2x + 7$$",
      "$$3x + 5$$",
      "$$3x - 1$$",
      "$$4x - 5$$",
      "$$4x + 3$$"
    ],
    correct: 4,
    hint: "Berdasarkan Teorema Sisa, pembagi derajat dua $D(x) = (x - 2)(x + 1)$ menghasilkan sisa derajat satu berbentuk $S(x) = ax + b$. Masukkan nilai $P(2)$ dan $P(-1)$.",
    explanation: `
      <strong>Langkah 1: Konsep Algoritma Pembagian & Teorema Sisa</strong><br>
      Berdasarkan algoritma pembagian polinomial:
      $$P(x) = D(x) \\cdot H(x) + S(x)$$
      Pembagi merupakan fungsi kuadrat $D(x) = x^2 - x - 2 = (x - 2)(x + 1)$, sehingga sisa pembagian $S(x)$ berderajat paling tinggi satu:
      $$S(x) = ax + b$$
      Maka persamaan pembagian dapat dituliskan:
      $$P(x) = (x - 2)(x + 1) \\cdot H(x) + (ax + b)$$
      <br>
      <strong>Langkah 2: Membentuk Sistem Persamaan Linear (SPLDV)</strong><br>
      <ol class="list-decimal list-inside my-1 space-y-1">
        <li>Dibagi $(x - 2)$ bersisa $11$:
        $$P(2) = 11 \\implies a(2) + b = 11 \\implies 2a + b = 11 \\quad \\text{--- (Persamaan 1)}$$
        </li>
        <li>Dibagi $(x + 1)$ bersisa $-1$:
        $$P(-1) = -1 \\implies a(-1) + b = -1 \\implies -a + b = -1 \\quad \\text{--- (Persamaan 2)}$$
        </li>
      </ol>
      <br>
      <strong>Langkah 3: Eliminasi dan Substitusi</strong><br>
      Kurangkan Persamaan 1 dengan Persamaan 2:
      $$(2a + b) - (-a + b) = 11 - (-1)$$
      $$3a = 12 \\implies a = 4$$
      Substitusikan nilai $a = 4$ ke Persamaan 2:
      $$-(4) + b = -1 \\implies b = 4 - 1 = 3$$
      <br>
      <strong>Langkah 4: Tentukan Sisa Pembagian</strong><br>
      $$S(x) = ax + b = 4x + 3$$
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.UTBK_SOAL_BANK;
}
