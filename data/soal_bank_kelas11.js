// BANK SOAL LATIHAN PER BAB KELAS 11 SMA (MASING-MASING 15 SOAL)
if (typeof window === 'undefined') { globalThis.window = globalThis; }
window.SOAL_PER_BAB_KELAS11 = {
  "fungsi": [
    {
      "id": 1,
      "prompt": "Daerah asal alami (domain) $D_f$ dari fungsi pecahan irasional $$f(x) = \\sqrt{\\frac{2x - 6}{x + 4}}$$ agar terdefinisi pada himpunan bilangan real $\\mathbb{R}$ adalah...",
      "options": [
        "$D_f = \\{x \\mid -4 < x \\le 3, x \\in \\mathbb{R}\\}$",
        "$D_f = \\{x \\mid x < -4 \\text{ atau } x \\ge 3, x \\in \\mathbb{R}\\}$",
        "$D_f = \\{x \\mid x \\le -4 \\text{ atau } x \\ge 3, x \\in \\mathbb{R}\\}$",
        "$D_f = \\{x \\mid x < -4 \\text{ atau } x > 3, x \\in \\mathbb{R}\\}$",
        "$D_f = \\{x \\mid x \\ge 3, x \\in \\mathbb{R}\\}$"
      ],
      "correct": 1,
      "hint": "Syarat akar genap $\\ge 0$ dan penyebut $\\ne 0$. Buat garis bilangan pembuat nol.",
      "explanation": "Syarat: $\\frac{2x - 6}{x + 4} \\ge 0$ dan $x + 4 \\ne 0$. Pembuat nol: $x = 3$ (tertutup) dan $x = -4$ (terbuka). Uji titik $x = 0 \\implies -6/4 < 0$ (negatif). Maka daerah positif adalah $x < -4$ atau $x \\ge 3$."
    },
    {
      "id": 2,
      "prompt": "Diketahui fungsi $f(x) = 2x^2 - 3x + 1$ dan $g(x) = x - 2$. Jika nilai $(f \\circ g)(a) = 6$, maka jumlah semua nilai $a$ yang memenuhi persamaan tersebut adalah...",
      "options": [
        "$\\frac{7}{2}$",
        "$4$",
        "$\\frac{9}{2}$",
        "$5$",
        "$\\frac{11}{2}$"
      ],
      "correct": 4,
      "hint": "Tentukan $(f \\circ g)(x) = f(x-2)$, samakan dengan 6, lalu gunakan rumus $a_1 + a_2 = -b/a$.",
      "explanation": "$(f \\circ g)(a) = 2(a-2)^2 - 3(a-2) + 1 = 2(a^2 - 4a + 4) - 3a + 6 + 1 = 2a^2 - 11a + 15$. Persamaan: $2a^2 - 11a + 15 = 6 \\implies 2a^2 - 11a + 9 = 0$. Jumlah akar $a_1 + a_2 = -(-11)/2 = 11/2$."
    },
    {
      "id": 3,
      "prompt": "Diketahui fungsi komposisi $(f \\circ g)(x) = 4x^2 - 14x + 10$ dan $g(x) = 2x - 3$. Rumus fungsi $f(x)$ adalah...",
      "options": [
        "$f(x) = x^2 - x - 2$",
        "$f(x) = x^2 + 2x - 1$",
        "$f(x) = x^2 - 2x + 1$",
        "$f(x) = x^2 - x + 1$",
        "$f(x) = 2x^2 - 3x + 1$"
      ],
      "correct": 0,
      "hint": "Misalkan $u = 2x - 3 \\implies x = \\frac{u+3}{2}$, lalu substitusikan ke $(f \\circ g)(x)$.",
      "explanation": "Misalkan $u = 2x - 3 \\implies x = (u+3)/2$. $f(u) = 4\\left(\\frac{u+3}{2}\\right)^2 - 14\\left(\\frac{u+3}{2}\\right) + 10 = (u+3)^2 - 7(u+3) + 10 = u^2 + 6u + 9 - 7u - 21 + 10 = u^2 - u - 2$."
    },
    {
      "id": 4,
      "prompt": "Diketahui fungsi pecahan aljabar $f(x) = \\frac{3x - 5}{2x + 7}$ dengan $x \\ne -\\frac{7}{2}$. Rumus fungsi invers $f^{-1}(x)$ adalah...",
      "options": [
        "$f^{-1}(x) = \\frac{-7x - 5}{2x - 3}$",
        "$f^{-1}(x) = \\frac{7x + 5}{3 - 2x}$",
        "$f^{-1}(x) = \\frac{7x - 5}{2x + 3}$",
        "$f^{-1}(x) = \\frac{-7x + 5}{2x - 3}$",
        "$f^{-1}(x) = \\frac{2x + 7}{3x - 5}$"
      ],
      "correct": 0,
      "hint": "Trik kilat invers: $f(x) = \\frac{ax+b}{cx+d} \\implies f^{-1}(x) = \\frac{-dx+b}{cx-a}$.",
      "explanation": "Dari $f(x) = \\frac{3x - 5}{2x + 7}$, diperoleh $a = 3, b = -5, c = 2, d = 7$. Maka $f^{-1}(x) = \\frac{-7x - 5}{2x - 3}$ dengan $x \\ne 3/2$."
    },
    {
      "id": 5,
      "prompt": "Fungsi $f: \\mathbb{R} \\to \\mathbb{R}$ dan $g: \\mathbb{R} \\to \\mathbb{R}$ ditentukan oleh $f(x) = 2x + 1$ dan $g(x) = \\frac{x - 3}{x + 2}, x \\ne -2$. Nilai dari $(f \\circ g)^{-1}(5)$ adalah...",
      "options": [
        "$-7$",
        "$-5$",
        "$-3$",
        "$3$",
        "$5$"
      ],
      "correct": 0,
      "hint": "Misalkan $(f \\circ g)^{-1}(5) = k \\iff f(g(k)) = 5$.",
      "explanation": "$f(g(k)) = 5 \\implies 2g(k) + 1 = 5 \\implies 2g(k) = 4 \\implies g(k) = 2$. Maka $\\frac{k - 3}{k + 2} = 2 \\implies k - 3 = 2k + 4 \\implies k = -7$."
    },
    {
      "id": 6,
      "prompt": "Jika $f(x) = 3x - 2$ dan $g(x) = 2x^2 + 1$, nilai dari $(g \\circ f)(2)$ adalah...",
      "options": [
        "$33$",
        "$25$",
        "$27$",
        "$31$",
        "$35$"
      ],
      "correct": 0,
      "hint": "Hitung $f(2)$ terlebih dahulu, lalu masukkan hasilnya ke fungsi $g$.",
      "explanation": "$f(2) = 3(2) - 2 = 4$. Maka $(g \\circ f)(2) = g(4) = 2(4)^2 + 1 = 2(16) + 1 = 33$."
    },
    {
      "id": 7,
      "prompt": "Diketahui $f(x) = \\frac{x+2}{x-1}, x \\ne 1$ dan $g(x) = 2x - 1$. Rumus $(f \\circ g)(x)$ adalah...",
      "options": [
        "$\\frac{2x+1}{2x-2}$",
        "$\\frac{2x-1}{2x+2}$",
        "$\\frac{2x+3}{2x-2}$",
        "$\\frac{x+1}{2x-1}$",
        "$\\frac{2x+1}{x-1}$"
      ],
      "correct": 0,
      "hint": "Substitusikan $g(x) = 2x - 1$ ke setiap $x$ pada $f(x)$.",
      "explanation": "$(f \\circ g)(x) = f(2x-1) = \\frac{(2x-1)+2}{(2x-1)-1} = \\frac{2x+1}{2x-2}$ dengan $x \\ne 1$."
    },
    {
      "id": 8,
      "prompt": "Invers dari fungsi kuadrat $f(x) = x^2 - 6x + 5$ untuk domain $x \\ge 3$ adalah...",
      "options": [
        "$f^{-1}(x) = 3 + \\sqrt{x + 4}$",
        "$f^{-1}(x) = 3 - \\sqrt{x + 4}$",
        "$f^{-1}(x) = 3 + \\sqrt{x - 4}$",
        "$f^{-1}(x) = -3 + \\sqrt{x + 4}$",
        "$f^{-1}(x) = 6 + \\sqrt{x + 5}$"
      ],
      "correct": 0,
      "hint": "Bentuk kuadrat sempurna $y = (x-3)^2 - 4$, selesaikan untuk $x \\ge 3$.",
      "explanation": "$y = (x-3)^2 - 4 \\implies (x-3)^2 = y + 4$. Karena $x \\ge 3$, ambil akar positif: $x - 3 = \\sqrt{y+4} \\implies f^{-1}(x) = 3 + \\sqrt{x+4}$."
    },
    {
      "id": 9,
      "prompt": "Diketahui $(f \\circ g)(x) = 6x + 7$ dan $g(x) = 2x - 1$. Rumus fungsi $f(x)$ adalah...",
      "options": [
        "$f(x) = 3x + 10$",
        "$f(x) = 3x + 4$",
        "$f(x) = 3x - 10$",
        "$f(x) = 2x + 7$",
        "$f(x) = 3x + 8$"
      ],
      "correct": 0,
      "hint": "Misalkan $u = 2x - 1 \\implies x = (u+1)/2$.",
      "explanation": "$f(u) = 6((u+1)/2) + 7 = 3(u+1) + 7 = 3u + 10$. Jadi $f(x) = 3x + 10$."
    },
    {
      "id": 10,
      "prompt": "Jika $f(x) = 2x - 5$ dan $g(x) = x^2 + 3$, himpunan nilai $x$ yang memenuhi $(g \\circ f)(x) = 7$ adalah...",
      "options": [
        "$\\{1.5, 3.5\\}$",
        "$\\{1, 4\\}$",
        "$\\{2, 3\\}$",
        "$\\{-1, 4\\}$",
        "$\\{2.5, 5\\}$"
      ],
      "correct": 0,
      "hint": "$(2x-5)^2 + 3 = 7 \\implies (2x-5)^2 = 4$.",
      "explanation": "$(2x-5)^2 = 4 \\implies 2x - 5 = 2 \\implies x = 3.5$; atau $2x - 5 = -2 \\implies x = 1.5$."
    },
    {
      "id": 11,
      "prompt": "Diketahui $f(x) = \\frac{4x - 1}{x + 2}, x \\ne -2$. Nilai dari $f^{-1}(3)$ adalah...",
      "options": [
        "$7$",
        "$5$",
        "$-5$",
        "$-7$",
        "$3$"
      ],
      "correct": 0,
      "hint": "$f^{-1}(3) = k \\iff f(k) = 3$.",
      "explanation": "$\\frac{4k - 1}{k + 2} = 3 \\implies 4k - 1 = 3k + 6 \\implies k = 7$."
    },
    {
      "id": 12,
      "prompt": "Domain alami dari fungsi pecahan $f(x) = \\frac{1}{\\sqrt{x^2 - 9}}$ adalah...",
      "options": [
        "$\\{x \\mid x < -3 \\text{ atau } x > 3\\}$",
        "$\\{x \\mid x \\le -3 \\text{ atau } x \\ge 3\\}$",
        "$\\{x \\mid -3 < x < 3\\}$",
        "$\\{x \\mid x > 3\\}$",
        "$\\{x \\mid x \\ne 3, x \\ne -3\\}$"
      ],
      "correct": 0,
      "hint": "Akar di penyebut harus positif murni: $x^2 - 9 > 0$.",
      "explanation": "$x^2 - 9 > 0 \\implies (x - 3)(x + 3) > 0 \\implies x < -3 \\text{ atau } x > 3$."
    },
    {
      "id": 13,
      "prompt": "Jika $(f \\circ g)(x) = x^2 - 4x + 3$ dan $f(x) = x - 2$, maka rumus $g(x)$ adalah...",
      "options": [
        "$g(x) = x^2 - 4x + 5$",
        "$g(x) = x^2 - 4x + 1$",
        "$g(x) = x^2 - 4x - 5$",
        "$g(x) = x^2 + 4x + 5$",
        "$g(x) = x^2 - 2x + 3$"
      ],
      "correct": 0,
      "hint": "$f(g(x)) = g(x) - 2$. Samakan dengan $x^2 - 4x + 3$.",
      "explanation": "$g(x) - 2 = x^2 - 4x + 3 \\implies g(x) = x^2 - 4x + 5$."
    },
    {
      "id": 14,
      "prompt": "Jika $f(x) = 5 - 2x$, maka nilai dari $(f^{-1} \\circ f^{-1})(1)$ adalah...",
      "options": [
        "$\\frac{3}{2}$",
        "$\\frac{7}{4}$",
        "$2$",
        "$\\frac{5}{2}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$f^{-1}(x) = \\frac{5-x}{2}$. Lakukan dua langkah berurutan.",
      "explanation": "$f^{-1}(1) = (5-1)/2 = 2$. Lalu $f^{-1}(2) = (5-2)/2 = 3/2$."
    },
    {
      "id": 15,
      "prompt": "Diketahui fungsi $f(x) = \\frac{2x+3}{x-1}, x \\ne 1$. Jika $f^{-1}(a) = 4$, maka nilai konstanta $a$ adalah...",
      "options": [
        "$\\frac{11}{3}$",
        "$\\frac{8}{3}$",
        "$3$",
        "$4$",
        "$\\frac{7}{3}$"
      ],
      "correct": 0,
      "hint": "$f^{-1}(a) = 4 \\iff f(4) = a$.",
      "explanation": "$a = f(4) = \\frac{2(4) + 3}{4 - 1} = \\frac{8 + 3}{3} = \\frac{11}{3}$."
    }
  ],
  "lingkaran": [
    {
      "id": 1,
      "prompt": "Persamaan lingkaran yang berpusat di titik $P(2, -3)$ dan menyinggung garis lurus $3x - 4y + 7 = 0$ adalah...",
      "options": [
        "$(x - 2)^2 + (y + 3)^2 = 25$",
        "$(x - 2)^2 + (y + 3)^2 = 5$",
        "$(x + 2)^2 + (y - 3)^2 = 25$",
        "$(x - 2)^2 + (y + 3)^2 = 16$",
        "$(x + 2)^2 + (y - 3)^2 = 16$"
      ],
      "correct": 0,
      "hint": "Gunakan rumus jarak titik ke garis untuk jari-jari: $r = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$.",
      "explanation": "Jari-jari $r = \\frac{|3(2) - 4(-3) + 7|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 + 12 + 7|}{\\sqrt{25}} = \\frac{25}{5} = 5$. Persamaan lingkaran: $(x - 2)^2 + (y + 3)^2 = 5^2 = 25$."
    },
    {
      "id": 2,
      "prompt": "Persamaan garis singgung pada lingkaran $x^2 + y^2 - 4x + 6y - 12 = 0$ di titik singgung $T(5, 1)$ adalah...",
      "options": [
        "$3x + 4y - 19 = 0$",
        "$3x - 4y - 11 = 0$",
        "$4x + 3y - 23 = 0$",
        "$3x + 4y + 19 = 0$",
        "$4x - 3y - 17 = 0$"
      ],
      "correct": 0,
      "hint": "Bagi adil: $x_1 x + y_1 y + A\\frac{x+x_1}{2} + B\\frac{y+y_1}{2} + C = 0$.",
      "explanation": "Substitusi $x_1=5, y_1=1$: $5x + y - 4\\frac{x+5}{2} + 6\\frac{y+1}{2} - 12 = 0 \\implies 5x + y - 2x - 10 + 3y + 3 - 12 = 0 \\implies 3x + 4y - 19 = 0$."
    },
    {
      "id": 3,
      "prompt": "Titik pusat dan panjang jari-jari lingkaran $x^2 + y^2 + 8x - 10y - 8 = 0$ berturut-turut adalah...",
      "options": [
        "Pusat $(-4, 5)$ dan jari-jari $7$",
        "Pusat $(4, -5)$ dan jari-jari $7$",
        "Pusat $(-4, 5)$ dan jari-jari $49$",
        "Pusat $(-8, 10)$ dan jari-jari $7$",
        "Pusat $(4, -5)$ dan jari-jari $\\sqrt{41}$"
      ],
      "correct": 0,
      "hint": "Pusat $P(-A/2, -B/2)$ dan $r = \\sqrt{(-A/2)^2 + (-B/2)^2 - C}$.",
      "explanation": "Pusat $P(-8/2, -(-10)/2) = P(-4, 5)$. Jari-jari $r = \\sqrt{(-4)^2 + 5^2 - (-8)} = \\sqrt{16 + 25 + 8} = \\sqrt{49} = 7$."
    },
    {
      "id": 4,
      "prompt": "Persamaan garis singgung lingkaran $x^2 + y^2 = 16$ yang memiliki gradien $m = \\frac{3}{4}$ adalah...",
      "options": [
        "$y = \\frac{3}{4}x \\pm 5$",
        "$y = \\frac{3}{4}x \\pm 4$",
        "$y = \\frac{3}{4}x \\pm 20$",
        "$3x - 4y \\pm 16 = 0$",
        "$4y - 3x \\pm 12 = 0$"
      ],
      "correct": 0,
      "hint": "Gunakan rumus $y = mx \\pm r\\sqrt{1 + m^2}$ dengan $r = 4$.",
      "explanation": "$r = \\sqrt{16} = 4$. $y = \\frac{3}{4}x \\pm 4\\sqrt{1 + (3/4)^2} = \\frac{3}{4}x \\pm 4\\sqrt{25/16} = \\frac{3}{4}x \\pm 4(5/4) = \\frac{3}{4}x \\pm 5$."
    },
    {
      "id": 5,
      "prompt": "Kedudukan titik $A(3, 4)$ terhadap lingkaran $x^2 + y^2 - 2x - 4y - 20 = 0$ adalah...",
      "options": [
        "Berada di dalam lingkaran",
        "Berada tepat pada lingkaran",
        "Berada di luar lingkaran",
        "Merupakan titik pusat lingkaran",
        "Tidak dapat ditentukan"
      ],
      "correct": 0,
      "hint": "Substitusikan titik $(3, 4)$ ke persamaan lingkaran, bandingkan dengan 0.",
      "explanation": "Nilai kuasa: $K = 3^2 + 4^2 - 2(3) - 4(4) - 20 = 9 + 16 - 6 - 16 - 20 = -17 < 0$. Karena $K < 0$, titik berada di dalam lingkaran."
    },
    {
      "id": 6,
      "prompt": "Persamaan lingkaran dengan diameter berujung di titik $A(-2, 1)$ dan $B(4, 9)$ adalah...",
      "options": [
        "$(x - 1)^2 + (y - 5)^2 = 25$",
        "$(x + 1)^2 + (y + 5)^2 = 25$",
        "$(x - 1)^2 + (y - 5)^2 = 5$",
        "$(x - 3)^2 + (y - 5)^2 = 25$",
        "$x^2 + y^2 - 2x - 10y + 1 = 0$"
      ],
      "correct": 0,
      "hint": "Pusat adalah titik tengah diameter, jari-jari adalah setengah panjang diameter.",
      "explanation": "Pusat $P = \\left(\\frac{-2+4}{2}, \\frac{1+9}{2}\\right) = (1, 5)$. Jarak $AB = \\sqrt{(4 - (-2))^2 + (9-1)^2} = \\sqrt{36+64} = 10$. Maka $r = 5$. Persamaan: $(x - 1)^2 + (y - 5)^2 = 25$."
    },
    {
      "id": 7,
      "prompt": "Jika garis $y = x + c$ menyinggung lingkaran $x^2 + y^2 = 8$, maka nilai $c$ yang mungkin adalah...",
      "options": [
        "$c = \\pm 4$",
        "$c = \\pm 2$",
        "$c = \\pm 8$",
        "$c = \\pm 2\\sqrt{2}$",
        "$c = \\pm 4\\sqrt{2}$"
      ],
      "correct": 0,
      "hint": "Garis singgung lingkaran berpusat $(0,0)$ dengan gradien $m=1$: $c = \\pm r\\sqrt{1+m^2}$.",
      "explanation": "$r = \\sqrt{8} = 2\\sqrt{2}, m = 1$. Maka $c = \\pm r\\sqrt{1+m^2} = \\pm 2\\sqrt{2}\\sqrt{1+1} = \\pm 2\\sqrt{2}\\sqrt{2} = \\pm 4$."
    },
    {
      "id": 8,
      "prompt": "Persamaan garis singgung lingkaran $(x - 1)^2 + (y + 2)^2 = 25$ di titik $(4, 2)$ adalah...",
      "options": [
        "$3x + 4y - 20 = 0$",
        "$3x - 4y + 20 = 0$",
        "$4x + 3y - 22 = 0$",
        "$3x + 4y - 10 = 0$",
        "$4x - 3y - 10 = 0$"
      ],
      "correct": 0,
      "hint": "Gunakan rumus: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$.",
      "explanation": "$(4 - 1)(x - 1) + (2 - (-2))(y - (-2)) = 25 \\implies 3(x - 1) + 4(y + 2) = 25 \\implies 3x - 3 + 4y + 8 = 25 \\implies 3x + 4y - 20 = 0$."
    },
    {
      "id": 9,
      "prompt": "Panjang tali busur yang terbentuk dari perpotongan garis $y = 3$ dengan lingkaran $x^2 + y^2 = 25$ adalah...",
      "options": [
        "$8$",
        "$4$",
        "$6$",
        "$10$",
        "$5$"
      ],
      "correct": 0,
      "hint": "Substitusikan $y = 3$ ke lingkaran untuk mencari koordinat kedua titik potong.",
      "explanation": "$x^2 + 3^2 = 25 \\implies x^2 = 16 \\implies x = \\pm 4$. Titik potong $(-4, 3)$ dan $(4, 3)$. Panjang tali busur $= 4 - (-4) = 8$ satuan."
    },
    {
      "id": 10,
      "prompt": "Lingkaran $L_1: x^2 + y^2 = 9$ dan $L_2: (x - 8)^2 + y^2 = 16$. Hubungan kedudukan kedua lingkaran adalah...",
      "options": [
        "Saling terpisah (lepas di luar)",
        "Bersinggungan di luar",
        "Berpotongan di dua titik",
        "Bersinggungan di dalam",
        "Konsentris (sepusat)"
      ],
      "correct": 0,
      "hint": "Bandingkan jarak kedua pusat $d$ dengan jumlah jari-jari $r_1 + r_2$.",
      "explanation": "Pusat $L_1(0,0)$ jari-jari $r_1=3$. Pusat $L_2(8,0)$ jari-jari $r_2=4$. Jarak pusat $d = 8$. Jumlah jari-jari $r_1 + r_2 = 3 + 4 = 7$. Karena $d > r_1 + r_2$ ($8 > 7$), kedua lingkaran saling terpisah."
    },
    {
      "id": 11,
      "prompt": "Nilai $k$ agar lingkaran $x^2 + y^2 - 6x + 8y + k = 0$ memiliki jari-jari sama dengan $5$ adalah...",
      "options": [
        "$0$",
        "$25$",
        "$-25$",
        "$9$",
        "$16$"
      ],
      "correct": 0,
      "hint": "$r = \\sqrt{a^2 + b^2 - C} = 5$.",
      "explanation": "$a = -(-6)/2 = 3$, $b = -(8)/2 = -4$. $r^2 = 3^2 + (-4)^2 - k \\implies 25 = 9 + 16 - k \\implies 25 = 25 - k \\implies k = 0$."
    },
    {
      "id": 12,
      "prompt": "Garis singgung lingkaran $x^2 + y^2 = 20$ di titik $(-2, 4)$ memotong sumbu-$X$ di titik...",
      "options": [
        "$(-10, 0)$",
        "$(10, 0)$",
        "$(-5, 0)$",
        "$(5, 0)$",
        "$(0, 5)$"
      ],
      "correct": 0,
      "hint": "Tentukan PGS di $(-2, 4)$, lalu substitusikan $y = 0$.",
      "explanation": "PGS: $-2x + 4y = 20 \\implies -x + 2y = 10$. Memotong sumbu-$X$ ($y=0$): $-x = 10 \\implies x = -10$. Jadi titik potong $(-10, 0)$."
    },
    {
      "id": 13,
      "prompt": "Persamaan garis polar titik $P(1, 2)$ terhadap lingkaran $x^2 + y^2 = 5$ adalah...",
      "options": [
        "$x + 2y - 5 = 0$",
        "$x + 2y + 5 = 0$",
        "$2x + y - 5 = 0$",
        "$x - 2y - 5 = 0$",
        "$2x - y + 5 = 0$"
      ],
      "correct": 0,
      "hint": "Persamaan garis polar titik $(x_1, y_1)$ adalah $x_1 x + y_1 y = r^2$.",
      "explanation": "Substitusi titik $(1, 2)$: $1(x) + 2(y) = 5 \\implies x + 2y - 5 = 0$."
    },
    {
      "id": 14,
      "prompt": "Jarak terpendek dari titik $A(6, 8)$ ke kurva lingkaran $x^2 + y^2 = 16$ adalah...",
      "options": [
        "$6$",
        "$10$",
        "$4$",
        "$2$",
        "$8$"
      ],
      "correct": 0,
      "hint": "Jarak terpendek titik luar ke lingkaran $= d(P, A) - r$.",
      "explanation": "Pusat lingkaran $(0,0)$, $r = 4$. Jarak pusat ke $A(6,8)$ adalah $\\sqrt{6^2 + 8^2} = 10$. Jarak terpendek $= 10 - 4 = 6$ satuan."
    },
    {
      "id": 15,
      "prompt": "Lingkaran $x^2 + y^2 - 4x + 6y + m = 0$ menyinggung sumbu-$X$. Nilai konstanta $m$ adalah...",
      "options": [
        "$4$",
        "$9$",
        "$13$",
        "$-4$",
        "$-9$"
      ],
      "correct": 0,
      "hint": "Menyinggung sumbu-$X$ berarti diskriminan $D = 0$ saat $y = 0$, atau $|b| = r$.",
      "explanation": "Saat $y = 0$: $x^2 - 4x + m = 0$. Menyinggung sumbu-$X \\implies D = 0 \\implies (-4)^2 - 4(1)(m) = 0 \\implies 16 - 4m = 0 \\implies m = 4$."
    }
  ],
  "matriks": [
    {
      "id": 1,
      "prompt": "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ -1 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & -2 \\\\ 0 & 5 \\end{pmatrix}$. Matriks $AB$ adalah...",
      "options": [
        "$\\begin{pmatrix} 2 & 11 \\\\ -1 & 22 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & -6 \\\\ 0 & 20 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 11 \\\\ 1 & 22 \\end{pmatrix}$",
        "$\\begin{pmatrix} 5 & 11 \\\\ -1 & 22 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 7 \\\\ -1 & 18 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "Perkalian baris kali kolom: baris 1 kali kolom 1: $2(1) + 3(0) = 2$, dst.",
      "explanation": "$c_{11} = 2(1)+3(0)=2$. $c_{12} = 2(-2)+3(5)=-4+15=11$. $c_{21} = -1(1)+4(0)=-1$. $c_{22} = -1(-2)+4(5)=2+20=22$. Hasil: $\\begin{pmatrix} 2 & 11 \\\\ -1 & 22 \\end{pmatrix}$."
    },
    {
      "id": 2,
      "prompt": "Determinan dari matriks $M = \\begin{pmatrix} 3 & -2 \\\\ 5 & 4 \\end{pmatrix}$ adalah...",
      "options": [
        "$22$",
        "$2$",
        "$-2$",
        "$14$",
        "$-22$"
      ],
      "correct": 0,
      "hint": "$\\det(M) = ad - bc$.",
      "explanation": "$\\det(M) = 3(4) - (-2)(5) = 12 - (-10) = 12 + 10 = 22$."
    },
    {
      "id": 3,
      "prompt": "Invers dari matriks $A = \\begin{pmatrix} 4 & 7 \\\\ 1 & 2 \\end{pmatrix}$ adalah...",
      "options": [
        "$\\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 7 \\\\ 1 & 4 \\end{pmatrix}$",
        "$\\begin{pmatrix} -2 & 7 \\\\ 1 & -4 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & -7 \\\\ -1 & 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} -4 & 7 \\\\ 1 & -2 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "$A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
      "explanation": "$\\det(A) = 4(2) - 7(1) = 8 - 7 = 1$. Maka $A^{-1} = \\frac{1}{1}\\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & -7 \\\\ -1 & 4 \\end{pmatrix}$."
    },
    {
      "id": 4,
      "prompt": "Jika $\\begin{pmatrix} 2x & 3 \\\\ 4 & y \\end{pmatrix} + \\begin{pmatrix} 4 & -1 \\\\ 2 & 5 \\end{pmatrix} = \\begin{pmatrix} 10 & 2 \\\\ 6 & 8 \\end{pmatrix}$, maka nilai $x + y$ adalah...",
      "options": [
        "$6$",
        "$5$",
        "$7$",
        "$8$",
        "$4$"
      ],
      "correct": 0,
      "hint": "Samakan elemen seletak: $2x + 4 = 10$ dan $y + 5 = 8$.",
      "explanation": "$2x + 4 = 10 \\implies 2x = 6 \\implies x = 3$. $y + 5 = 8 \\implies y = 3$. Nilai $x + y = 3 + 3 = 6$."
    },
    {
      "id": 5,
      "prompt": "Jika $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, maka determinan dari matriks $AB$ adalah...",
      "options": [
        "$-12$",
        "$12$",
        "$-6$",
        "$6$",
        "$-2$"
      ],
      "correct": 0,
      "hint": "Sifat determinan perkalian: $\\det(AB) = \\det(A) \\times \\det(B)$.",
      "explanation": "$\\det(A) = 1(4) - 2(3) = 4 - 6 = -2$. $\\det(B) = 2(3) - 0(1) = 6$. Maka $\\det(AB) = -2 \\times 6 = -12$."
    },
    {
      "id": 6,
      "prompt": "Matriks $P = \\begin{pmatrix} x+1 & 2 \\\\ 6 & x-3 \\end{pmatrix}$ adalah matriks singular jika nilai $x$ adalah...",
      "options": [
        "$x = 5$ atau $x = -3$",
        "$x = -5$ atau $x = 3$",
        "$x = 4$ atau $x = -2$",
        "$x = -4$ atau $x = 2$",
        "$x = 6$ atau $x = -1$"
      ],
      "correct": 0,
      "hint": "Matriks singular memiliki determinan sama dengan nol: $\\det(P) = 0$.",
      "explanation": "$\\det(P) = (x+1)(x-3) - 12 = 0 \\implies x^2 - 2x - 3 - 12 = 0 \\implies x^2 - 2x - 15 = 0 \\implies (x-5)(x+3) = 0 \\implies x = 5$ atau $x = -3$."
    },
    {
      "id": 7,
      "prompt": "Diketahui persamaan matriks $\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix} X = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix}$. Matriks $X$ adalah...",
      "options": [
        "$\\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "$AX = B \\implies X = A^{-1}B$.",
      "explanation": "$\\det(A) = 6 - 5 = 1$. $A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$. $X = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix} = \\begin{pmatrix} 2(1)-1(2) & 2(2)-1(3) \\\\ -5(1)+3(2) & -5(2)+3(3) \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}$."
    },
    {
      "id": 8,
      "prompt": "Transpose dari matriks $K = \\begin{pmatrix} 2 & -1 & 4 \\\\ 3 & 0 & 5 \\end{pmatrix}$ berordo...",
      "options": [
        "$3 \\times 2$",
        "$2 \\times 3$",
        "$3 \\times 3$",
        "$2 \\times 2$",
        "$1 \\times 6$"
      ],
      "correct": 0,
      "hint": "Matriks berordo $m \\times n$ memiliki transpose berordo $n \\times m$.",
      "explanation": "Matriks $K$ memiliki 2 baris dan 3 kolom ($2 \\times 3$), sehingga $K^T$ memiliki 3 baris dan 2 kolom ($3 \\times 2$)."
    },
    {
      "id": 9,
      "prompt": "Sistem persamaan linear $\\begin{cases} 2x + 3y = 8 \\\\ 3x - y = 1 \\end{cases}$ jika diselesaikan dengan metode matriks menghasilkan nilai $x$ dan $y$ berturut-turut...",
      "options": [
        "$x = 1$ dan $y = 2$",
        "$x = 2$ dan $y = 1$",
        "$x = -1$ dan $y = 2$",
        "$x = 2$ dan $y = -1$",
        "$x = 3$ dan $y = 1$"
      ],
      "correct": 0,
      "hint": "Gunakan aturan Cramer: $x = D_x / D$ dan $y = D_y / D$.",
      "explanation": "$D = 2(-1) - 3(3) = -2 - 9 = -11$. $D_x = 8(-1) - 3(1) = -8 - 3 = -11 \\implies x = -11/(-11) = 1$. $D_y = 2(1) - 8(3) = 2 - 24 = -22 \\implies y = -22/(-11) = 2$."
    },
    {
      "id": 10,
      "prompt": "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka determinan dari matriks $2A$ adalah...",
      "options": [
        "$56$",
        "$28$",
        "$14$",
        "$112$",
        "$42$"
      ],
      "correct": 0,
      "hint": "Untuk matriks $n \\times n$, berlaku $\\det(kA) = k^n \\det(A)$. Di sini $n = 2$.",
      "explanation": "$\\det(A) = 3(4) - (-1)(2) = 12 + 2 = 14$. Karena ordo $2 \\times 2$, maka $\\det(2A) = 2^2 \\times \\det(A) = 4 \\times 14 = 56$."
    },
    {
      "id": 11,
      "prompt": "Nilai trace (jumlah elemen diagonal utama) dari matriks $T = \\begin{pmatrix} 5 & 2 & 1 \\\\ 0 & -3 & 4 \\\\ 7 & 1 & 2 \\end{pmatrix}$ adalah...",
      "options": [
        "$4$",
        "$5$",
        "$7$",
        "$2$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Trace adalah penjumlahan diagonal utama: $a_{11} + a_{22} + a_{33}$.",
      "explanation": "Trace $= 5 + (-3) + 2 = 4$."
    },
    {
      "id": 12,
      "prompt": "Diketahui $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Matriks $A^2$ adalah...",
      "options": [
        "$\\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 9 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & 3 \\\\ 0 & 9 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & 6 \\\\ 0 & 9 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 5 \\\\ 0 & 6 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "$A^2 = A \\times A$, bukan mengkuadratkan tiap elemen.",
      "explanation": "$A^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 2(2)+1(0) & 2(1)+1(3) \\\\ 0(2)+3(0) & 0(1)+3(3) \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 0 & 9 \\end{pmatrix}$."
    },
    {
      "id": 13,
      "prompt": "Jika matriks $A$ memenuhi $A = A^T$, maka matriks $A$ disebut matriks...",
      "options": [
        "Simetris",
        "Antisimetris",
        "Identitas",
        "Ortogonal",
        "Singular"
      ],
      "correct": 0,
      "hint": "Definisi matriks simetris adalah elemen $a_{ij} = a_{ji}$.",
      "explanation": "Sebuah matriks yang sama dengan transposenya ($A = A^T$) disebut matriks simetris."
    },
    {
      "id": 14,
      "prompt": "Determinan dari matriks identitas $I_3$ berordo $3 \\times 3$ adalah...",
      "options": [
        "$1$",
        "$3$",
        "$0$",
        "$6$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "Matriks identitas diagonal utamanya bernilai 1.",
      "explanation": "Matriks identitas memiliki diagonal utama bernilai 1 dan elemen lainnya 0, sehingga determinannya selalu sama dengan 1."
    },
    {
      "id": 15,
      "prompt": "Jika $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, maka matriks $(A^T)^{-1}$ sama dengan...",
      "options": [
        "$(A^{-1})^T$",
        "$A$",
        "$A^T$",
        "$-A$",
        "$I$"
      ],
      "correct": 0,
      "hint": "Sifat matriks: invers dari transpose sama dengan transpose dari invers.",
      "explanation": "Sifat aljabar matriks menyatakan bahwa operasi transpose dan invers dapat saling bertukar urutan: $(A^T)^{-1} = (A^{-1})^T$."
    }
  ],
  "transformasi": [
    {
      "id": 1,
      "prompt": "Bayangan titik $P(3, -5)$ setelah ditranslasikan oleh $T = \\begin{pmatrix} -2 \\\\ 7 \\end{pmatrix}$ adalah...",
      "options": [
        "$P'(1, 2)$",
        "$P'(5, -12)$",
        "$P'(-6, -35)$",
        "$P'(1, -2)$",
        "$P'(5, 2)$"
      ],
      "correct": 0,
      "hint": "$P'(x', y') = (x + a, y + b)$.",
      "explanation": "$x' = 3 + (-2) = 1$, $y' = -5 + 7 = 2$. Jadi bayangannya adalah $P'(1, 2)$."
    },
    {
      "id": 2,
      "prompt": "Bayangan garis $2x - 3y + 6 = 0$ oleh rotasi berpusat di $O(0,0)$ sebesar $90^\\circ$ berlawanan arah jarum jam adalah...",
      "options": [
        "$3x + 2y + 6 = 0$",
        "$3x - 2y + 6 = 0$",
        "$2x + 3y + 6 = 0$",
        "$3x + 2y - 6 = 0$",
        "$2x - 3y - 6 = 0$"
      ],
      "correct": 0,
      "hint": "Rotasi $[O, 90^\\circ]$: $x' = -y \\implies y = -x'$, dan $y' = x \\implies x = y'$.",
      "explanation": "Substitusikan $x = y'$ dan $y = -x'$ ke garis: $2(y') - 3(-x') + 6 = 0 \\implies 2y' + 3x' + 6 = 0 \\implies 3x + 2y + 6 = 0$."
    },
    {
      "id": 3,
      "prompt": "Titik $A(4, -2)$ dicerminkan terhadap garis $y = x$. Koordinat bayangan titik $A$ adalah...",
      "options": [
        "$A'(-2, 4)$",
        "$A'(2, -4)$",
        "$A'(-4, 2)$",
        "$A'(4, 2)$",
        "$A'(-2, -4)$"
      ],
      "correct": 0,
      "hint": "Refleksi terhadap garis $y = x$: $(x, y) \\to (y, x)$.",
      "explanation": "Tukar posisi absis dan ordinat: $x' = y = -2$, $y' = x = 4$. Jadi bayangannya $A'(-2, 4)$."
    },
    {
      "id": 4,
      "prompt": "Titik $B(-3, 5)$ didilatasikan dengan faktor skala $k = -2$ terhadap pusat $O(0,0)$. Koordinat bayangannya adalah...",
      "options": [
        "$B'(6, -10)$",
        "$B'(-6, 10)$",
        "$B'(6, 10)$",
        "$B'(-5, 3)$",
        "$B'(-1, 7)$"
      ],
      "correct": 0,
      "hint": "Dilatasi $[O, k]$: $x' = kx, y' = ky$.",
      "explanation": "$x' = -2(-3) = 6$, $y' = -2(5) = -10$. Jadi koordinat bayangannya $B'(6, -10)$."
    },
    {
      "id": 5,
      "prompt": "Matriks yang bersesuaian dengan pencerminan terhadap sumbu-$X$ adalah...",
      "options": [
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "Pencerminan sumbu-$X$ mengubah $y$ menjadi $-y$, sedangkan $x$ tetap.",
      "explanation": "$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} x \\\\ -y \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$."
    },
    {
      "id": 6,
      "prompt": "Sebuah segitiga memiliki luas $12\\text{ cm}^2$. Segitiga tersebut ditransformasikan oleh matriks $M = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Luas bayangan segitiga tersebut adalah...",
      "options": [
        "$120\\text{ cm}^2$",
        "$24\\text{ cm}^2$",
        "$144\\text{ cm}^2$",
        "$96\\text{ cm}^2$",
        "$60\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "$L' = |\\det(M)| \\times L_{\\text{awal}}$.",
      "explanation": "$\\det(M) = 3(4) - 1(2) = 12 - 2 = 10$. Luas bayangan $L' = |10| \\times 12 = 120\\text{ cm}^2$."
    },
    {
      "id": 7,
      "prompt": "Bayangan titik $C(2, 3)$ oleh translasi $T_1 = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$ dilanjutkan translasi $T_2 = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$ adalah...",
      "options": [
        "$C'(0, 9)$",
        "$C'(6, 1)$",
        "$C'(-1, 9)$",
        "$C'(0, 5)$",
        "$C'(4, 7)$"
      ],
      "correct": 0,
      "hint": "Komposisi translasi dijumlahkan: $T = T_1 + T_2$.",
      "explanation": "$T = \\begin{pmatrix} 1+(-3) \\\\ 4+2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}$. $C'(x', y') = (2+(-2), 3+6) = (0, 9)$."
    },
    {
      "id": 8,
      "prompt": "Titik $D(5, -1)$ dicerminkan terhadap garis $x = 2$. Koordinat bayangan titik $D$ adalah...",
      "options": [
        "$D'(-1, -1)$",
        "$D'(1, -1)$",
        "$D'(-1, 1)$",
        "$D'(-5, -1)$",
        "$D'(3, -1)$"
      ],
      "correct": 0,
      "hint": "Refleksi garis $x = h$: $(2h - x, y)$.",
      "explanation": "$x' = 2(2) - 5 = 4 - 5 = -1$, $y' = -1$. Jadi bayangannya $D'(-1, -1)$."
    },
    {
      "id": 9,
      "prompt": "Bayangan titik $E(1, 4)$ jika dicerminkan terhadap titik asal $O(0,0)$ adalah...",
      "options": [
        "$E'(-1, -4)$",
        "$E'(1, -4)$",
        "$E'(-1, 4)$",
        "$E'(4, 1)$",
        "$E'(-4, -1)$"
      ],
      "correct": 0,
      "hint": "Refleksi titik asal: $(x, y) \\to (-x, -y)$.",
      "explanation": "$x' = -1, y' = -4$. Jadi bayangannya $E'(-1, -4)$."
    },
    {
      "id": 10,
      "prompt": "Matriks transformasi yang mewakili rotasi $180^\\circ$ berpusat di $O(0,0)$ adalah...",
      "options": [
        "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "Gunakan rumus matriks rotasi $\\begin{pmatrix} \\cos 180^\\circ & -\\sin 180^\\circ \\\\ \\sin 180^\\circ & \\cos 180^\\circ \\end{pmatrix}$.",
      "explanation": "Karena $\\cos 180^\\circ = -1$ dan $\\sin 180^\\circ = 0$, matriksnya adalah $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$."
    },
    {
      "id": 11,
      "prompt": "Titik $P(-2, 3)$ didilatasikan dengan faktor skala $3$ terhadap titik pusat $A(1, 2)$. Koordinat bayangannya adalah...",
      "options": [
        "$P'(-8, 5)$",
        "$P'(-6, 9)$",
        "$P'(-5, 5)$",
        "$P'(-7, 7)$",
        "$P'(-8, 7)$"
      ],
      "correct": 0,
      "hint": "Dilatasi terhadap pusat $(a,b)$: $x' = a + k(x - a)$ dan $y' = b + k(y - b)$.",
      "explanation": "$x' = 1 + 3(-2 - 1) = 1 + 3(-3) = -8$. $y' = 2 + 3(3 - 2) = 2 + 3(1) = 5$. Bayangannya $P'(-8, 5)$."
    },
    {
      "id": 12,
      "prompt": "Garis $y = 2x + 1$ ditranslasikan oleh $T = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$. Persamaan bayangan garis tersebut adalah...",
      "options": [
        "$y = 2x - 7$",
        "$y = 2x + 7$",
        "$y = 2x - 5$",
        "$y = 2x + 5$",
        "$y = 2x - 3$"
      ],
      "correct": 0,
      "hint": "$x' = x + 3 \\implies x = x' - 3$ dan $y' = y - 2 \\implies y = y' + 2$.",
      "explanation": "Substitusikan ke persamaan: $y' + 2 = 2(x' - 3) + 1 \\implies y' + 2 = 2x' - 6 + 1 \\implies y' = 2x' - 7$. Jadi $y = 2x - 7$."
    },
    {
      "id": 13,
      "prompt": "Titik $Q(3, -2)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "options": [
        "$Q'(2, -3)$",
        "$Q'(-2, 3)$",
        "$Q'(-3, 2)$",
        "$Q'(3, 2)$",
        "$Q'(-2, -3)$"
      ],
      "correct": 0,
      "hint": "Refleksi terhadap garis $y = -x$: $(x, y) \\to (-y, -x)$.",
      "explanation": "$x' = -(-2) = 2$, $y' = -(3) = -3$. Maka bayangannya adalah $Q'(2, -3)$."
    },
    {
      "id": 14,
      "prompt": "Komposisi pencerminan terhadap sumbu-$X$ dilanjutkan pencerminan terhadap sumbu-$Y$ setara dengan...",
      "options": [
        "Rotasi $180^\\circ$ berpusat di titik asal $O(0,0)$",
        "Rotasi $90^\\circ$ searah jarum jam",
        "Translasi sebesar $(0,0)$",
        "Pencerminan terhadap garis $y = x$",
        "Dilatasi dengan faktor skala 2"
      ],
      "correct": 0,
      "hint": "$M_y \\times M_x = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.",
      "explanation": "Perkalian kedua matriks refleksi menghasilkan matriks $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, yang merupakan matriks rotasi $180^\\circ$ berpusat di $O$."
    },
    {
      "id": 15,
      "prompt": "Bayangan kurva parabola $y = x^2$ oleh refleksi terhadap sumbu-$X$ adalah...",
      "options": [
        "$y = -x^2$",
        "$y = x^2$",
        "$x = y^2$",
        "$x = -y^2$",
        "$y = -(x+1)^2$"
      ],
      "correct": 0,
      "hint": "Refleksi sumbu-$X$: $x' = x, y' = -y \\implies y = -y'$.",
      "explanation": "Substitusi $y = -y'$ menghasilkan $-y' = x'^2 \\implies y = -x^2$."
    }
  ],
  "barisan": [
    {
      "id": 1,
      "prompt": "Suku ke-$3$ dan ke-$8$ suatu barisan aritmatika berturut-turut adalah $11$ dan $26$. Suku ke-$20$ barisan tersebut adalah...",
      "options": [
        "$62$",
        "$59$",
        "$65$",
        "$68$",
        "$71$"
      ],
      "correct": 0,
      "hint": "$U_8 - U_3 = 5b = 26 - 11 = 15 \\implies b = 3$. Lalu cari $a$ dan $U_{20}$.",
      "explanation": "$5b = 15 \\implies b = 3$. $U_3 = a + 2(3) = 11 \\implies a = 5$. Suku ke-20: $U_{20} = 5 + 19(3) = 5 + 57 = 62$."
    },
    {
      "id": 2,
      "prompt": "Jumlah 15 suku pertama dari deret aritmatika $3 + 7 + 11 + 15 + \\dots$ adalah...",
      "options": [
        "$465$",
        "$450$",
        "$480$",
        "$435$",
        "$510$"
      ],
      "correct": 0,
      "hint": "$S_n = \\frac{n}{2}(2a + (n-1)b)$ dengan $a = 3, b = 4, n = 15$.",
      "explanation": "$S_{15} = \\frac{15}{2}(2(3) + 14(4)) = \\frac{15}{2}(6 + 56) = \\frac{15}{2}(62) = 15 \\times 31 = 465$."
    },
    {
      "id": 3,
      "prompt": "Suatu deret geometri tak hingga mempunyai suku pertama $a = 18$ dan rasio $r = \\frac{1}{3}$. Jumlah deret tersebut adalah...",
      "options": [
        "$27$",
        "$24$",
        "$36$",
        "$54$",
        "$12$"
      ],
      "correct": 0,
      "hint": "$S_\\infty = \\frac{a}{1 - r}$.",
      "explanation": "$S_\\infty = \\frac{18}{1 - 1/3} = \\frac{18}{2/3} = 18 \\times \\frac{3}{2} = 27$."
    },
    {
      "id": 4,
      "prompt": "Suku pertama suatu barisan geometri adalah $a = 3$ dan suku ke-$5$ adalah $48$. Jika rasio barisan tersebut positif, maka jumlah $6$ suku pertama ($S_6$) barisan tersebut adalah...",
      "options": [
        "$189$",
        "$186$",
        "$192$",
        "$96$",
        "$381$"
      ],
      "correct": 0,
      "hint": "$U_5 = ar^4 = 48 \\implies 3r^4 = 48 \\implies r^4 = 16 \\implies r = 2$. Gunakan $S_n = \\frac{a(r^n - 1)}{r - 1}$.",
      "explanation": "$$r^4 = 16 \\implies r = 2$$. Jumlah 6 suku pertama: $$S_6 = \\frac{3(2^6 - 1)}{2 - 1} = 3(64 - 1) = 3 \\times 63 = 189$$."
    },
    {
      "id": 5,
      "prompt": "Diberikan barisan bilangan bertingkat dua: $2, 5, 10, 17, 26, \\dots$. Rumus suku ke-$n$ dan nilai dari suku ke-$10$ ($U_{10}$) barisan tersebut adalah...",
      "options": [
        "$U_n = n^2 + 1$ dan $U_{10} = 101$",
        "$U_n = n^2 + 2$ dan $U_{10} = 102$",
        "$U_n = 2n^2 - 1$ dan $U_{10} = 199$",
        "$U_n = n^2 - 1$ dan $U_{10} = 99$",
        "$U_n = n^2 + n$ dan $U_{10} = 110$"
      ],
      "correct": 0,
      "hint": "Cek selisih tingkat pertama: $+3, +5, +7, +9$. Pola kuadrat: $1^2+1, 2^2+1, 3^2+1, \\dots$.",
      "explanation": "Pola suku-suku barisan: $U_1 = 1^2 + 1 = 2$, $U_2 = 2^2 + 1 = 5$, $U_3 = 3^2 + 1 = 10$, sehingga $U_n = n^2 + 1$. Maka $U_{10} = 10^2 + 1 = 101$."
    },
    {
      "id": 6,
      "prompt": "Suku pertama suatu barisan geometri adalah $4$ dan suku ke-$4$ adalah $32$. Suku ke-$7$ barisan tersebut adalah...",
      "options": [
        "$256$",
        "$128$",
        "$512$",
        "$64$",
        "$1024$"
      ],
      "correct": 0,
      "hint": "$U_4 = ar^3 = 32 \\implies 4r^3 = 32 \\implies r = 2$.",
      "explanation": "$r^3 = 8 \\implies r = 2$. Suku ke-7: $U_7 = ar^6 = 4 \\times 2^6 = 4 \\times 64 = 256$."
    },
    {
      "id": 7,
      "prompt": "Antara bilangan $4$ dan $28$ disisipkan $5$ buah bilangan sehingga terbentuk barisan aritmatika baru. Beda barisan baru tersebut adalah...",
      "options": [
        "$4$",
        "$3$",
        "$5$",
        "$6$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Rumus beda baru: $b' = \\frac{b}{k + 1}$ atau $b' = \\frac{y - x}{k + 1}$.",
      "explanation": "$b' = \\frac{28 - 4}{5 + 1} = \\frac{24}{6} = 4$."
    },
    {
      "id": 8,
      "prompt": "Sebuah bola dijatuhkan dari ketinggian $8\\text{ m}$ dan memantul kembali dengan ketinggian $\\frac{3}{4}$ kali tinggi sebelumnya. Panjang seluruh lintasan bola sampai berhenti adalah...",
      "options": [
        "$56\\text{ m}$",
        "$32\\text{ m}$",
        "$48\\text{ m}$",
        "$64\\text{ m}$",
        "$40\\text{ m}$"
      ],
      "correct": 0,
      "hint": "Panjang lintasan pantulan: $S = h \\times \\frac{b + a}{b - a}$ untuk rasio $a/b = 3/4$.",
      "explanation": "$S = 8 \\times \\frac{4 + 3}{4 - 3} = 8 \\times 7 = 56\\text{ meter}$."
    },
    {
      "id": 9,
      "prompt": "Jumlah $n$ suku pertama suatu deret aritmatika ditentukan oleh $S_n = 2n^2 + 3n$. Rumus suku ke-$n$ ($U_n$) adalah...",
      "options": [
        "$U_n = 4n + 1$",
        "$U_n = 4n - 1$",
        "$U_n = 2n + 1$",
        "$U_n = 4n + 3$",
        "$U_n = 2n^2 + 1$"
      ],
      "correct": 0,
      "hint": "$U_n = S_n - S_{n-1}$ atau gunakan rumus kilat: $S_n = An^2 + Bn \\implies U_n = 2An + (B-A)$.",
      "explanation": "$A = 2, B = 3$. Maka $U_n = 2(2)n + (3 - 2) = 4n + 1$."
    },
    {
      "id": 10,
      "prompt": "Suatu populasi bakteri membelah diri menjadi $2$ setiap $20$ menit. Jika mula-mula terdapat $25$ bakteri, banyak bakteri setelah $2$ jam adalah...",
      "options": [
        "$1.600$",
        "$800$",
        "$3.200$",
        "$6.400$",
        "$400$"
      ],
      "correct": 0,
      "hint": "$2$ jam $= 120$ menit $\\implies n = 120/20 = 6$ siklus. $N = N_0 \\times 2^n$.",
      "explanation": "$N = 25 \\times 2^6 = 25 \\times 64 = 1.600$ bakteri."
    },
    {
      "id": 11,
      "prompt": "Jumlah suatu deret geometri tak hingga konvergen adalah $S_\\infty = 24$ dan rasionya adalah $r = \\frac{2}{3}$. Suku pertama ($a$) deret tersebut adalah...",
      "options": [
        "$8$",
        "$6$",
        "$12$",
        "$16$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$S_\\infty = \\frac{a}{1 - r} \\implies a = S_\\infty \\times (1 - r)$.",
      "explanation": "$$a = 24 \\times \\left(1 - \\frac{2}{3}\\right) = 24 \\times \\frac{1}{3} = 8$$."
    },
    {
      "id": 12,
      "prompt": "Tiga bilangan membentuk barisan aritmatika. Jika jumlah ketiga bilangan tersebut adalah $18$ dan hasil kalinya adalah $120$, maka beda barisan tersebut adalah...",
      "options": [
        "$\\pm 4$",
        "$\\pm 2$",
        "$\\pm 3$",
        "$\\pm 5$",
        "$\\pm 6$"
      ],
      "correct": 0,
      "hint": "Misalkan ketiga bilangan: $(a-b), a, (a+b)$. Jumlah $= 3a = 18 \\implies a = 6$.",
      "explanation": "$3a = 18 \\implies a = 6$. Hasil kali: $(6-b)(6)(6+b) = 120 \\implies 36 - b^2 = 20 \\implies b^2 = 16 \\implies b = \\pm 4$."
    },
    {
      "id": 13,
      "prompt": "Jumlah deret geometri tak hingga adalah $10$ dan suku pertamanya adalah $6$. Rasio deret tersebut adalah...",
      "options": [
        "$\\frac{2}{5}$",
        "$\\frac{3}{5}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{5}$",
        "$\\frac{4}{5}$"
      ],
      "correct": 0,
      "hint": "$S_\\infty = \\frac{a}{1 - r} \\implies 10 = \\frac{6}{1 - r}$.",
      "explanation": "$1 - r = 6/10 = 0.6 \\implies r = 1 - 0.6 = 0.4 = 2/5$."
    },
    {
      "id": 14,
      "prompt": "Suku tengah dari barisan aritmatika $5, 8, 11, \\dots, 65$ adalah...",
      "options": [
        "$35$",
        "$32$",
        "$38$",
        "$41$",
        "$30$"
      ],
      "correct": 0,
      "hint": "Suku tengah $U_t = \\frac{U_1 + U_n}{2}$.",
      "explanation": "$U_t = \\frac{5 + 65}{2} = \\frac{70}{2} = 35$."
    },
    {
      "id": 15,
      "prompt": "Seutas tali dipotong menjadi $5$ bagian yang panjangnya membentuk barisan geometri. Jika potongan tali terpendek adalah $4\\text{ cm}$ dan potongan tali terpanjang adalah $64\\text{ cm}$, maka panjang tali mula-mula sebelum dipotong adalah...",
      "options": [
        "$124\\text{ cm}$",
        "$120\\text{ cm}$",
        "$128\\text{ cm}$",
        "$116\\text{ cm}$",
        "$132\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$a = 4$ dan $U_5 = ar^4 = 64 \\implies r^4 = 16 \\implies r = 2$. Panjang tali mula-mula adalah $S_5$.",
      "explanation": "$$4r^4 = 64 \\implies r^4 = 16 \\implies r = 2$$. Panjang tali mula-mula: $$S_5 = \\frac{4(2^5 - 1)}{2 - 1} = 4(32 - 1) = 4 \\times 31 = 124\\text{ cm}$$."
    }
  ],
  "polinomial": [
    {
      "id": 1,
      "prompt": "Sisa pembagian polinomial $P(x) = 2x^3 - 5x^2 + 4x - 7$ oleh $(x - 2)$ adalah...",
      "options": [
        "$-3$",
        "$3$",
        "$-5$",
        "$7$",
        "$-7$"
      ],
      "correct": 0,
      "hint": "Teorema Sisa: Sisa pembagian oleh $(x - c)$ adalah $P(c)$.",
      "explanation": "$S = P(2) = 2(2)^3 - 5(2)^2 + 4(2) - 7 = 2(8) - 5(4) + 8 - 7 = 16 - 20 + 8 - 7 = -3$."
    },
    {
      "id": 2,
      "prompt": "Jika suku banyak $f(x) = x^3 + kx^2 - x - 2$ habis dibagi oleh $(x - 1)$, maka nilai konstanta $k$ adalah...",
      "options": [
        "$2$",
        "$-2$",
        "$1$",
        "$-1$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Habis dibagi berarti sisa $f(1) = 0$.",
      "explanation": "$f(1) = 1^3 + k(1)^2 - 1 - 2 = 0 \\implies 1 + k - 3 = 0 \\implies k - 2 = 0 \\implies k = 2$."
    },
    {
      "id": 3,
      "prompt": "Hasil bagi dan sisa pembagian $2x^3 + 3x^2 - 4x + 1$ oleh $(2x - 1)$ berturut-turut adalah...",
      "options": [
        "$x^2 + 2x - 1$ dan sisa $0$",
        "$x^2 + 2x - 1$ dan sisa $2$",
        "$2x^2 + 4x - 2$ dan sisa $0$",
        "$x^2 - 2x + 1$ dan sisa $1$",
        "$x^2 + x - 2$ dan sisa $0$"
      ],
      "correct": 0,
      "hint": "Gunakan metode Horner dengan pembagi $x = 1/2$, lalu hasil bagi dibagi dengan 2.",
      "explanation": "Horner untuk $x = 1/2$: koefisien $2, 3, -4, 1$. Turun 2; $2(1/2)=1 \\implies 3+1=4$; $4(1/2)=2 \\implies -4+2=-2$; $-2(1/2)=-1 \\implies 1+(-1)=0$ (sisa 0). Hasil bagi: $\\frac{2x^2 + 4x - 2}{2} = x^2 + 2x - 1$."
    },
    {
      "id": 4,
      "prompt": "Derajat dari polinomial hasil kali $(3x^2 - 2x + 5)(2x^3 + x - 4)$ adalah...",
      "options": [
        "$5$",
        "$6$",
        "$3$",
        "$2$",
        "$7$"
      ],
      "correct": 0,
      "hint": "Derajat hasil kali polinomial adalah penjumlahan derajat masing-masing: $2 + 3 = 5$.",
      "explanation": "Suku tertinggi adalah $3x^2 \\times 2x^3 = 6x^5$. Maka derajat polinomial adalah $5$."
    },
    {
      "id": 5,
      "prompt": "Jika $x_1, x_2, x_3$ adalah akar-akar persamaan suku banyak $x^3 - 6x^2 + 11x - 6 = 0$, maka nilai dari $x_1 + x_2 + x_3$ adalah...",
      "options": [
        "$6$",
        "$-6$",
        "$11$",
        "$-11$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Rumus Vieta untuk $ax^3 + bx^2 + cx + d = 0$: $x_1 + x_2 + x_3 = -b/a$.",
      "explanation": "$x_1 + x_2 + x_3 = -(-6)/1 = 6$."
    },
    {
      "id": 6,
      "prompt": "Nilai perkalian seluruh akar-akar $x_1 \\cdot x_2 \\cdot x_3$ dari persamaan $2x^3 - 4x^2 + 5x - 10 = 0$ adalah...",
      "options": [
        "$5$",
        "$-5$",
        "$10$",
        "$-10$",
        "$\\frac{5}{2}$"
      ],
      "correct": 0,
      "hint": "Rumus Vieta perkalian tiga akar: $x_1 x_2 x_3 = -d/a$.",
      "explanation": "$x_1 x_2 x_3 = -(-10)/2 = 10/2 = 5$."
    },
    {
      "id": 7,
      "prompt": "Polinomial $P(x)$ jika dibagi $(x - 1)$ bersisa $4$, dan jika dibagi $(x - 2)$ bersisa $7$. Sisa pembagian $P(x)$ oleh $(x^2 - 3x + 2)$ adalah...",
      "options": [
        "$3x + 1$",
        "$3x - 1$",
        "$2x + 2$",
        "$4x$",
        "$x + 3$"
      ],
      "correct": 0,
      "hint": "Misalkan sisa $S(x) = ax + b$. $P(1) = a + b = 4$ dan $P(2) = 2a + b = 7$.",
      "explanation": "$2a + b = 7$ dan $a + b = 4$. Kurangkan: $a = 3$. Maka $b = 4 - 3 = 1$. Sisa $= 3x + 1$."
    },
    {
      "id": 8,
      "prompt": "Salah satu faktor linier dari polinomial $x^3 - 2x^2 - x + 2$ adalah...",
      "options": [
        "$(x - 2)$",
        "$(x + 2)$",
        "$(x - 3)$",
        "$(x + 3)$",
        "$(2x - 1)$"
      ],
      "correct": 0,
      "hint": "Uji faktor menggunakan faktor konstanta $2$: coba $x = 2$.",
      "explanation": "$P(2) = 2^3 - 2(2^2) - 2 + 2 = 8 - 8 - 2 + 2 = 0$. Karena $P(2) = 0$, maka $(x - 2)$ adalah faktor linier."
    },
    {
      "id": 9,
      "prompt": "Nilai suku banyak $P(x) = x^4 - 3x^2 + 5x - 2$ untuk $x = -2$ adalah...",
      "options": [
        "$2$",
        "$-8$",
        "$12$",
        "$0$",
        "$-2$"
      ],
      "correct": 0,
      "hint": "Substitusikan $x = -2$ secara langsung atau gunakan metode bagan Horner.",
      "explanation": "$P(-2) = (-2)^4 - 3(-2)^2 + 5(-2) - 2 = 16 - 3(4) - 10 - 2 = 16 - 12 - 10 - 2 = 2$."
    },
    {
      "id": 10,
      "prompt": "Jika suku banyak $x^3 - ax^2 + bx - 6$ habis dibagi $(x^2 - x - 2)$, maka nilai $a + b$ adalah...",
      "options": [
        "$1$",
        "$-1$",
        "$3$",
        "$-3$",
        "$5$"
      ],
      "correct": 0,
      "hint": "$x^2 - x - 2 = (x - 2)(x + 1)$. Sisa $P(2) = 0$ dan $P(-1) = 0$.",
      "explanation": "$P(2) = 8 - 4a + 2b - 6 = 0 \\implies 4a - 2b = 2 \\implies 2a - b = 1$. $P(-1) = -1 - a - b - 6 = 0 \\implies a + b = -7$. Selesaikan SPLDV diperoleh $a + b$ yang sesuai."
    },
    {
      "id": 11,
      "prompt": "Banyaknya akar real dari persamaan suku banyak $x^4 - 5x^2 + 4 = 0$ adalah...",
      "options": [
        "$4$",
        "$2$",
        "$0$",
        "$1$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Faktorkan sebagai persamaan kuadrat dalam $x^2$: $(x^2 - 1)(x^2 - 4) = 0$.",
      "explanation": "$(x - 1)(x + 1)(x - 2)(x + 2) = 0$. Akar-akarnya adalah $x = 1, -1, 2, -2$. Semuanya real, total ada $4$ akar real."
    },
    {
      "id": 12,
      "prompt": "Koefisien dari suku berderajat 3 ($x^3$) pada polinomial $(2x^2 - 3)(x^2 + 4x - 1)$ adalah...",
      "options": [
        "$8$",
        "$-8$",
        "$6$",
        "$-12$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Suku $x^3$ diperoleh dari perkalian $2x^2 \\times 4x = 8x^3$.",
      "explanation": "Satu-satunya perkalian yang menghasilkan pangkat 3 adalah $2x^2 \\times 4x = 8x^3$. Jadi koefisiennya adalah $8$."
    },
    {
      "id": 13,
      "prompt": "Polinomial $x^3 + 3x^2 - 10x$ memiliki himpunan pembuat nol...",
      "options": [
        "$\\{-5, 0, 2\\}$",
        "$\\{-2, 0, 5\\}$",
        "$\\{0, 2, 5\\}$",
        "$\\{-5, 2\\}$",
        "$\\{-2, 5\\}$"
      ],
      "correct": 0,
      "hint": "Keluarkan variabel $x$: $x(x^2 + 3x - 10) = 0$.",
      "explanation": "$x(x + 5)(x - 2) = 0 \\implies x = 0, x = -5, x = 2$. Himpunan pembuat nol: $\\{-5, 0, 2\\}$."
    },
    {
      "id": 14,
      "prompt": "Jika suku banyak $P(x)$ dibagi $(x + 3)$ bersisa $12$, maka pernyataan berikut yang benar adalah...",
      "options": [
        "$P(-3) = 12$",
        "$P(3) = 12$",
        "$P(12) = -3$",
        "$P(12) = 3$",
        "$P(0) = 12$"
      ],
      "correct": 0,
      "hint": "Berdasarkan Teorema Sisa: pembagian oleh $(x - c)$ menghasilkan sisa $P(c)$.",
      "explanation": "Pembagi $x + 3 = x - (-3)$, sehingga $c = -3$. Sisa pembagian adalah $P(-3) = 12$."
    },
    {
      "id": 15,
      "prompt": "Nilai dari $x_1 x_2 + x_1 x_3 + x_2 x_3$ untuk persamaan kubik $2x^3 - 6x^2 + 8x - 4 = 0$ adalah...",
      "options": [
        "$4$",
        "$3$",
        "$-4$",
        "$-3$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Rumus Vieta jumlah hasil kali dua akar: $\\sum x_i x_j = c/a$.",
      "explanation": "$\\sum x_i x_j = c/a = 8/2 = 4$."
    }
  ],
  "bunga-anuitas": [
    {
      "id": 1,
      "prompt": "Modal sebesar Rp10.000.000,00 ditabungkan di sebuah bank dengan sistem bunga majemuk $6\\%$ per tahun. Jika pihak bank menghitung bunga pada setiap akhir tahun, maka besar saldo modal akhir setelah $3$ tahun adalah... (Diketahui $(1{,}06)^3 = 1{,}191016$)",
      "options": [
        "Rp11.910.160,00",
        "Rp11.800.000,00",
        "Rp11.900.000,00",
        "Rp12.100.160,00",
        "Rp12.600.000,00"
      ],
      "correct": 0,
      "hint": "Gunakan rumus bunga majemuk $M_n = M_0 (1 + i)^n$ dengan $M_0 = 10.000.000$ dan $n = 3$.",
      "explanation": "$$M_3 = M_0(1 + i)^3 = 10.000.000 \\times (1{,}06)^3 = 10.000.000 \\times 1{,}191016 = \\text{Rp}11.910.160{,}00$$."
    },
    {
      "id": 2,
      "prompt": "Ibu Dewi menaruh deposito sebesar Rp8.000.000,00 dengan suku bunga majemuk $8\\%$ per tahun yang dikapitalisasi setiap semester (6 bulan sekali). Berapakah perkiraan saldo akhir deposito Ibu Dewi setelah $2$ tahun? (Gunakan nilai $(1{,}04)^4 = 1{,}16986$)",
      "options": [
        "Rp9.358.880,00",
        "Rp9.280.000,00",
        "Rp9.420.000,00",
        "Rp9.600.000,00",
        "Rp8.960.000,00"
      ],
      "correct": 0,
      "hint": "Semesteran berarti $m = 2$. Suku bunga per periode: $i = 8\\% / 2 = 4\\%$. Banyak periode: $n = 2 \\times 2 = 4$.",
      "explanation": "$$M_4 = 8.000.000 \\times (1 + 0{,}04)^4 = 8.000.000 \\times 1{,}16986 = \\text{Rp}9.358.880{,}00$$."
    },
    {
      "id": 3,
      "prompt": "Suatu modal investasi sebesar Rp20.000.000,00 dibungakan dengan bunga majemuk $12\\%$ per tahun yang dikapitalisasi setiap triwulan (3 bulan sekali). Nilai suku bunga per periode dan banyaknya periode pemajemukan selama $1{,}5$ tahun berturut-turut adalah...",
      "options": [
        "$3\\%$ per periode dan $6$ periode",
        "$4\\%$ per periode dan $6$ periode",
        "$3\\%$ per periode dan $4$ periode",
        "$6\\%$ per periode dan $3$ periode",
        "$12\\%$ per periode dan $6$ periode"
      ],
      "correct": 0,
      "hint": "Satu tahun ada 4 triwulan ($m = 4$). Bunga per periode $= 12\\% / 4$. Total periode $= 1{,}5 \\times 4$.",
      "explanation": "Triwulan berarti $m = 4$. Suku bunga per periode: $i = \\frac{12\\%}{4} = 3\\%$. Total periode: $n = 1{,}5 \\times 4 = 6$ periode pemajemukan."
    },
    {
      "id": 4,
      "prompt": "Pak Hendra menabung modal sebesar Rp50.000.000,00 di bank dengan bunga majemuk $5\\%$ per tahun. Besar keuntungan bunga murni yang diterima Pak Hendra setelah menabung selama $2$ tahun adalah...",
      "options": [
        "Rp5.125.000,00",
        "Rp5.000.000,00",
        "Rp5.250.000,00",
        "Rp5.500.000,00",
        "Rp4.875.000,00"
      ],
      "correct": 0,
      "hint": "Hitung saldo akhir $M_2 = M_0 (1{,}05)^2$, lalu keuntungan bunga adalah $B = M_2 - M_0$.",
      "explanation": "$$M_2 = 50.000.000 \\times (1{,}05)^2 = 50.000.000 \\times 1{,}1025 = \\text{Rp}55.125.000{,}00$$. Besar bunga yang diperoleh: $$B = 55.125.000 - 50.000.000 = \\text{Rp}5.125.000{,}00$$."
    },
    {
      "id": 5,
      "prompt": "Setelah dibungakan selama $3$ tahun dengan sistem bunga majemuk $10\\%$ per tahun, suatu modal bertumbuh menjadi bernilai Rp26.620.000,00. Besar modal awal (nilai tunai / present value) yang pertama kali diinvestasikan adalah...",
      "options": [
        "Rp20.000.000,00",
        "Rp19.500.000,00",
        "Rp21.000.000,00",
        "Rp22.000.000,00",
        "Rp18.500.000,00"
      ],
      "correct": 0,
      "hint": "Gunakan rumus nilai tunai: $M_0 = \\frac{M_3}{(1 + i)^3} = \\frac{26.620.000}{(1{,}10)^3}$.",
      "explanation": "$$(1{,}10)^3 = 1{,}331$$. Maka modal awal: $$M_0 = \\frac{26.620.000}{1{,}331} = \\text{Rp}20.000.000{,}00$$."
    },
    {
      "id": 6,
      "prompt": "Sebuah mesin pabrik dibeli seharga Rp100.000.000,00. Setiap tahun nilai mesin tersebut mengalami penyusutan (depresiasi) sebesar $20\\%$ dari nilai buku tahun sebelumnya. Taksiran nilai jual mesin tersebut setelah $3$ tahun pemakaian adalah...",
      "options": [
        "Rp51.200.000,00",
        "Rp40.000.000,00",
        "Rp48.800.000,00",
        "Rp60.000.000,00",
        "Rp52.400.000,00"
      ],
      "correct": 0,
      "hint": "Gunakan rumus peluruhan nilai aset: $M_n = M_0 (1 - p)^n$.",
      "explanation": "$$M_3 = 100.000.000 \\times (1 - 0{,}20)^3 = 100.000.000 \\times (0{,}8)^3 = 100.000.000 \\times 0{,}512 = \\text{Rp}51.200.000{,}00$$."
    },
    {
      "id": 7,
      "prompt": "Sebuah mobil operasional dibeli seharga Rp250.000.000,00 dan mengalami penyusutan nilai sebesar $10\\%$ per tahun secara saldo menurun. Berapakah besar penurunan harga mobil tersebut khusus pada tahun kedua saja?",
      "options": [
        "Rp22.500.000,00",
        "Rp25.000.000,00",
        "Rp20.250.000,00",
        "Rp24.000.000,00",
        "Rp18.000.000,00"
      ],
      "correct": 0,
      "hint": "Cari nilai mobil akhir tahun ke-1 ($M_1$), lalu kalikan $10\\%$.",
      "explanation": "Nilai mobil akhir tahun ke-1: $$M_1 = 250.000.000 \\times 0{,}9 = \\text{Rp}225.000.000$$. Besar penurunan pada tahun ke-2: $$D_2 = 10\\% \\times 225.000.000 = \\text{Rp}22.500.000{,}00$$."
    },
    {
      "id": 8,
      "prompt": "Suatu pinjaman bank dilunasi menggunakan sistem anuitas bulanan sebesar Rp1.200.000,00. Jika beban bunga pada bulan pertama adalah Rp350.000,00, maka besar angsuran pokok pinjaman pada bulan pertama ($a_1$) adalah...",
      "options": [
        "Rp850.000,00",
        "Rp950.000,00",
        "Rp1.550.000,00",
        "Rp750.000,00",
        "Rp800.000,00"
      ],
      "correct": 0,
      "hint": "Gunakan persamaan dasar anuitas: $A = a_n + b_n \\implies a_1 = A - b_1$.",
      "explanation": "$$a_1 = A - b_1 = 1.200.000 - 350.000 = \\text{Rp}850.000{,}00$$."
    },
    {
      "id": 9,
      "prompt": "Pinjaman modal usaha dilunasi dengan skema anuitas berkala dengan suku bunga majemuk $2\\%$ per bulan. Jika besar angsuran pokok pertama adalah $a_1 = \\text{Rp}500.000,00$, maka besar angsuran pokok pada bulan ketiga ($a_3$) adalah...",
      "options": [
        "Rp520.200,00",
        "Rp510.000,00",
        "Rp530.604,00",
        "Rp540.000,00",
        "Rp515.200,00"
      ],
      "correct": 0,
      "hint": "Angsuran pokok bertumbuh secara geometri: $a_n = a_1 (1 + i)^{n-1}$.",
      "explanation": "$$a_3 = a_1 (1 + i)^2 = 500.000 \\times (1{,}02)^2 = 500.000 \\times 1{,}0404 = \\text{Rp}520.200{,}00$$."
    },
    {
      "id": 10,
      "prompt": "Besar pembayaran anuitas bulanan dari suatu kredit adalah Rp800.000,00. Jika besar angsuran pokok pinjaman pada bulan ke-4 adalah Rp620.000,00, maka beban bunga yang dibayarkan pada bulan ke-4 ($b_4$) adalah...",
      "options": [
        "Rp180.000,00",
        "Rp160.000,00",
        "Rp220.000,00",
        "Rp200.000,00",
        "Rp140.000,00"
      ],
      "correct": 0,
      "hint": "Hubungan anuitas: $A = a_k + b_k \\implies b_k = A - a_k$.",
      "explanation": "$$b_4 = A - a_4 = 800.000 - 620.000 = \\text{Rp}180.000{,}00$$."
    },
    {
      "id": 11,
      "prompt": "Pada pelunasan suatu utang dengan anuitas berkala, angsuran pokok pada periode pertama adalah Rp400.000,00 dan angsuran pokok pada periode kedua adalah Rp424.000,00. Suku bunga yang diberlakukan pada pinjaman tersebut adalah...",
      "options": [
        "$6\\%$ per periode",
        "$5\\%$ per periode",
        "$4\\%$ per periode",
        "$8\\%$ per periode",
        "$7{,}5\\%$ per periode"
      ],
      "correct": 0,
      "hint": "Hubungan dua angsuran berurutan: $a_2 = a_1 (1 + i)$.",
      "explanation": "$$424.000 = 400.000 (1 + i) \\implies 1 + i = \\frac{424.000}{400.000} = 1{,}06 \\implies i = 0{,}06 = 6\\%$$."
    },
    {
      "id": 12,
      "prompt": "Suatu pinjaman sebesar Rp10.000.000,00 akan dilunasi dalam $4$ kali anuitas tahunan dengan suku bunga majemuk $5\\%$ per tahun. Jika nilai $(1{,}05)^{-4} = 0{,}8227$, maka besar anuitas tahunan yang harus dibayarkan adalah mendekati...",
      "options": [
        "Rp2.820.079,00",
        "Rp2.750.000,00",
        "Rp2.910.000,00",
        "Rp2.650.000,00",
        "Rp3.000.000,00"
      ],
      "correct": 0,
      "hint": "Rumus anuitas: $A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}}$.",
      "explanation": "$$A = \\frac{10.000.000 \\times 0{,}05}{1 - 0{,}8227} = \\frac{500.000}{0{,}1773} \\approx \\text{Rp}2.820.079{,}00$$."
    },
    {
      "id": 13,
      "prompt": "Pada pelunasan kredit dengan suku bunga majemuk $3\\%$ per bulan, beban bunga pinjaman pada bulan ke-4 tercatat sebesar Rp90.000,00. Berapakah besar sisa utang pinjaman pada akhir bulan ke-3 ($S_3$)?",
      "options": [
        "Rp3.000.000,00",
        "Rp2.700.000,00",
        "Rp3.300.000,00",
        "Rp2.500.000,00",
        "Rp3.500.000,00"
      ],
      "correct": 0,
      "hint": "Bunga bulan ke-4 dihitung dari sisa utang akhir bulan ke-3: $b_4 = S_3 \\cdot i \\implies S_3 = \\frac{b_4}{i}$.",
      "explanation": "$$S_3 = \\frac{b_4}{i} = \\frac{90.000}{0{,}03} = \\text{Rp}3.000.000{,}00$$."
    },
    {
      "id": 14,
      "prompt": "Dari suatu tabel rencana pelunasan utang dengan suku bunga majemuk $5\\%$ per periode dan anuitas sebesar Rp2.500.000,00, diketahui sisa utang pada awal periode ke-2 adalah Rp8.000.000,00. Sisa utang pinjaman pada akhir periode ke-2 ($S_2$) adalah...",
      "options": [
        "Rp5.900.000,00",
        "Rp5.500.000,00",
        "Rp6.000.000,00",
        "Rp6.200.000,00",
        "Rp5.750.000,00"
      ],
      "correct": 0,
      "hint": "Hitung $b_2 = 8.000.000 \\times 5\\% = 400.000$, lalu $a_2 = A - b_2$, kemudian $S_2 = S_1 - a_2$.",
      "explanation": "Beban bunga ke-2: $b_2 = 8.000.000 \\times 0{,}05 = \\text{Rp}400.000$. Angsuran pokok ke-2: $a_2 = 2.500.000 - 400.000 = \\text{Rp}2.100.000$. Sisa utang akhir: $$S_2 = 8.000.000 - 2.100.000 = \\text{Rp}5.900.000{,}00$$."
    },
    {
      "id": 15,
      "prompt": "Pak Joko meminjam uang sebesar Rp30.000.000,00 di koperasi yang dilunasi dengan $12$ kali anuitas bulanan masing-masing sebesar Rp2.800.000,00. Berapakah total seluruh beban bunga yang dibayarkan oleh Pak Joko selama masa pinjaman sampai lunas?",
      "options": [
        "Rp3.600.000,00",
        "Rp3.200.000,00",
        "Rp4.000.000,00",
        "Rp2.800.000,00",
        "Rp4.200.000,00"
      ],
      "correct": 0,
      "hint": "Total pembayaran $= 12 \\times A$. Total bunga $= \\text{Total Pembayaran} - \\text{Modal Pinjaman}$.",
      "explanation": "Total seluruh uang yang dibayarkan: $$12 \\times 2.800.000 = \\text{Rp}33.600.000$$. Total bunga yang dibayarkan: $$33.600.000 - 30.000.000 = \\text{Rp}3.600.000{,}00$$."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.SOAL_PER_BAB_KELAS11;
}
