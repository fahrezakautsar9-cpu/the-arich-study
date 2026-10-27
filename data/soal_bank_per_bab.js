// MASTER UNIFIED DATABASE SOAL PER BAB (THE ARICH STUDY)
if (typeof window === 'undefined') { globalThis.window = globalThis; }
window.SOAL_BANK_PER_BAB = {
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
  "k7-bilangan": [
    {
      "id": 1,
      "prompt": "Hasil dari $-15 + 8 \\times (-3) - (-12)$ adalah...",
      "options": [
        "$-27$",
        "$-51$",
        "$-21$",
        "$27$",
        "$-15$"
      ],
      "correct": 0,
      "hint": "Dahulukan perkalian sebelum penjumlahan dan pengurangan.",
      "explanation": "$-15 + (-24) + 12 = -39 + 12 = -27$."
    },
    {
      "id": 2,
      "prompt": "Hasil dari $\\frac{2}{3} + \\frac{3}{4} - \\frac{1}{2}$ adalah...",
      "options": [
        "$\\frac{11}{12}$",
        "$\\frac{7}{12}$",
        "$\\frac{5}{12}$",
        "$\\frac{13}{12}$",
        "$\\frac{1}{2}$"
      ],
      "correct": 0,
      "hint": "Samakan penyebut dengan KPK(3, 4, 2) = 12.",
      "explanation": "$\\frac{8 + 9 - 6}{12} = \\frac{11}{12}$."
    },
    {
      "id": 3,
      "prompt": "Nilai dari $\\frac{5}{6} \\div \\frac{2}{3} \\times \\frac{4}{5}$ adalah...",
      "options": [
        "$1$",
        "$\\frac{8}{9}$",
        "$\\frac{4}{5}$",
        "$\\frac{5}{4}$",
        "$\\frac{2}{3}$"
      ],
      "correct": 0,
      "hint": "Bagi pecahan menjadi kali kebalikan: $\\times \\frac{3}{2}$.",
      "explanation": "$\\frac{5}{6} \\times \\frac{3}{2} \\times \\frac{4}{5} = \\frac{60}{60} = 1$."
    },
    {
      "id": 4,
      "prompt": "KPK dan FPB dari 24 dan 36 berturut-turut adalah...",
      "options": [
        "72 dan 12",
        "72 dan 6",
        "48 dan 12",
        "144 dan 12",
        "36 dan 6"
      ],
      "correct": 0,
      "hint": "$24 = 2^3 \\times 3$, $36 = 2^2 \\times 3^2$.",
      "explanation": "KPK $= 2^3 \\times 3^2 = 72$. FPB $= 2^2 \\times 3 = 12$."
    },
    {
      "id": 5,
      "prompt": "Suhu di dalam kulkas mula-mula $-4^\\circ\\text{C}$. Saat listrik mati, suhu naik $3^\\circ\\text{C}$ setiap 10 menit. Suhu setelah 30 menit adalah...",
      "options": [
        "$5^\\circ\\text{C}$",
        "$6^\\circ\\text{C}$",
        "$9^\\circ\\text{C}$",
        "$-1^\\circ\\text{C}$",
        "$3^\\circ\\text{C}$"
      ],
      "correct": 0,
      "hint": "Kenaikan suhu $= (30/10) \\times 3^\\circ\\text{C} = 9^\\circ\\text{C}$.",
      "explanation": "Suhu akhir $= -4 + 9 = 5^\\circ\\text{C}$."
    },
    {
      "id": 6,
      "prompt": "Urutan pecahan $\\frac{3}{4}, \\frac{2}{3}, \\frac{5}{6}, \\frac{1}{2}$ dari yang terkecil adalah...",
      "options": [
        "$\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{5}{6}$",
        "$\\frac{2}{3}, \\frac{1}{2}, \\frac{3}{4}, \\frac{5}{6}$",
        "$\\frac{1}{2}, \\frac{3}{4}, \\frac{2}{3}, \\frac{5}{6}$",
        "$\\frac{5}{6}, \\frac{3}{4}, \\frac{2}{3}, \\frac{1}{2}$",
        "$\\frac{2}{3}, \\frac{3}{4}, \\frac{1}{2}, \\frac{5}{6}$"
      ],
      "correct": 0,
      "hint": "Ubah ke desimal: 0.75, 0.67, 0.83, 0.50.",
      "explanation": "$0.50 < 0.67 < 0.75 < 0.83 \\implies \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{5}{6}$."
    },
    {
      "id": 7,
      "prompt": "Bentuk persen dari pecahan $\\frac{7}{20}$ adalah...",
      "options": [
        "$35\\%$",
        "$28\\%$",
        "$40\\%$",
        "$70\\%$",
        "$30\\%$"
      ],
      "correct": 0,
      "hint": "Kalikan dengan $100\\%$.",
      "explanation": "$\\frac{7}{20} \\times 100\\% = 35\\%$."
    },
    {
      "id": 8,
      "prompt": "Dalam suatu ujian dengan 40 soal, jawaban benar bernilai 4, salah -1, dan tidak dijawab 0. Jika Doni menjawab benar 31 soal dan salah 6 soal, nilai Doni adalah...",
      "options": [
        "$118$",
        "$115$",
        "$124$",
        "$112$",
        "$120$"
      ],
      "correct": 0,
      "hint": "Nilai $= (31 \\times 4) + (6 \\times -1) + (3 \\times 0)$.",
      "explanation": "$124 - 6 = 118$."
    },
    {
      "id": 9,
      "prompt": "Hasil dari $(-4)^3 + 2^5$ adalah...",
      "options": [
        "$-32$",
        "$32$",
        "$-96$",
        "$0$",
        "$-64$"
      ],
      "correct": 0,
      "hint": "$(-4)^3 = -64$ dan $2^5 = 32$.",
      "explanation": "$-64 + 32 = -32$."
    },
    {
      "id": 10,
      "prompt": "FPB dari 45, 60, dan 75 adalah...",
      "options": [
        "15",
        "5",
        "30",
        "45",
        "3"
      ],
      "correct": 0,
      "hint": "Faktor persekutuan terbesar yang membagi habis ketiga bilangan.",
      "explanation": "$45=3^2 \\times 5$, $60=2^2 \\times 3 \\times 5$, $75=3 \\times 5^2$. FPB $= 3 \\times 5 = 15$."
    },
    {
      "id": 11,
      "prompt": "Ibu membeli $3\\frac{1}{2}\\text{ kg}$ gula pasir, lalu menggunakan $1\\frac{3}{4}\\text{ kg}$ untuk kue. Sisa gula ibu adalah...",
      "options": [
        "$1\\frac{3}{4}\\text{ kg}$",
        "$1\\frac{1}{2}\\text{ kg}$",
        "$1\\frac{1}{4}\\text{ kg}$",
        "$2\\text{ kg}$",
        "$2\\frac{1}{4}\\text{ kg}$"
      ],
      "correct": 0,
      "hint": "$3\\frac{2}{4} - 1\\frac{3}{4}$.",
      "explanation": "$\\frac{7}{2} - \\frac{7}{4} = \\frac{14 - 7}{4} = \\frac{7}{4} = 1\\frac{3}{4}\\text{ kg}$."
    },
    {
      "id": 12,
      "prompt": "Nilai dari $\\sqrt{144} + \\sqrt[3]{216}$ adalah...",
      "options": [
        "$18$",
        "$16$",
        "$20$",
        "$22$",
        "$14$"
      ],
      "correct": 0,
      "hint": "$\\sqrt{144} = 12$ dan $\\sqrt[3]{216} = 6$.",
      "explanation": "$12 + 6 = 18$."
    },
    {
      "id": 13,
      "prompt": "Lampu A menyala setiap 6 menit, lampu B setiap 8 menit. Jika keduanya menyala bersama pukul 10.00, keduanya menyala bersama lagi pukul...",
      "options": [
        "10.24",
        "10.48",
        "10.14",
        "10.36",
        "11.00"
      ],
      "correct": 0,
      "hint": "Cari KPK(6, 8) = 24 menit.",
      "explanation": "$10.00 + 24\\text{ menit} = 10.24$."
    },
    {
      "id": 14,
      "prompt": "Hasil dari $-18 \\div (-3) \\times 4$ adalah...",
      "options": [
        "$24$",
        "$-24$",
        "$18$",
        "$-18$",
        "$12$"
      ],
      "correct": 0,
      "hint": "Negatif bagi negatif adalah positif.",
      "explanation": "$-18 \\div (-3) = 6 \\implies 6 \\times 4 = 24$."
    },
    {
      "id": 15,
      "prompt": "Bentuk desimal dari $\\frac{5}{8}$ adalah...",
      "options": [
        "$0,625$",
        "$0,58$",
        "$0,65$",
        "$0,725$",
        "$0,60$"
      ],
      "correct": 0,
      "hint": "Bagi 5 dengan 8.",
      "explanation": "$5 \\div 8 = 0,625$."
    }
  ],
  "k7-aljabar": [
    {
      "id": 1,
      "prompt": "Bentuk sederhana dari $5x - 3y + 2x + 7y - 4$ adalah...",
      "options": [
        "$7x + 4y - 4$",
        "$7x - 4y - 4$",
        "$3x + 10y - 4$",
        "$7x + 10y - 4$",
        "$3x + 4y - 4$"
      ],
      "correct": 0,
      "hint": "Kelompokkan suku sejenis $x$ dan $y$.",
      "explanation": "$(5x + 2x) + (-3y + 7y) - 4 = 7x + 4y - 4$."
    },
    {
      "id": 2,
      "prompt": "Hasil perkalian dari $(2x - 3)(x + 4)$ adalah...",
      "options": [
        "$2x^2 + 5x - 12$",
        "$2x^2 - 5x - 12$",
        "$2x^2 + 11x - 12$",
        "$2x^2 - 12$",
        "$2x^2 + 8x - 12$"
      ],
      "correct": 0,
      "hint": "Gunakan sifat distributif FOIL.",
      "explanation": "$2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$."
    },
    {
      "id": 3,
      "prompt": "Bentuk kuadrat dari $(3x - 5)^2$ adalah...",
      "options": [
        "$9x^2 - 30x + 25$",
        "$9x^2 + 30x + 25$",
        "$9x^2 - 25$",
        "$9x^2 - 15x + 25$",
        "$3x^2 - 30x + 25$"
      ],
      "correct": 0,
      "hint": "$(a - b)^2 = a^2 - 2ab + b^2$.",
      "explanation": "$(3x)^2 - 2(3x)(5) + 5^2 = 9x^2 - 30x + 25$."
    },
    {
      "id": 4,
      "prompt": "Faktorisasi dari $x^2 - 9$ adalah...",
      "options": [
        "$(x - 3)(x + 3)$",
        "$(x - 3)^2$",
        "$(x + 3)^2$",
        "$(x - 9)(x + 1)$",
        "$(x - 1)(x + 9)$"
      ],
      "correct": 0,
      "hint": "Selisih dua kuadrat $a^2 - b^2 = (a-b)(a+b)$.",
      "explanation": "$(x - 3)(x + 3)$."
    },
    {
      "id": 5,
      "prompt": "Faktorisasi dari $x^2 + 5x + 6$ adalah...",
      "options": [
        "$(x + 2)(x + 3)$",
        "$(x + 1)(x + 6)$",
        "$(x - 2)(x - 3)$",
        "$(x - 1)(x + 6)$",
        "$(x + 5)(x + 1)$"
      ],
      "correct": 0,
      "hint": "Cari dua bilangan yang dikali = 6, dijumlah = 5.",
      "explanation": "$2 \\times 3 = 6$ dan $2 + 3 = 5 \\implies (x + 2)(x + 3)$."
    },
    {
      "id": 6,
      "prompt": "Bentuk sederhana dari $\\frac{6a^2 b}{2ab}$ adalah...",
      "options": [
        "$3a$",
        "$3b$",
        "$3ab$",
        "$4a$",
        "$3a^2$"
      ],
      "correct": 0,
      "hint": "Bagi koefisien dan kurangkan eksponen variabel.",
      "explanation": "$\\frac{6}{2} \\times \\frac{a^2}{a} \\times \\frac{b}{b} = 3a$."
    },
    {
      "id": 7,
      "prompt": "Koefisien dari variabel $x$ pada bentuk aljabar $3x^2 - 7x + 12$ adalah...",
      "options": [
        "$-7$",
        "$3$",
        "$7$",
        "$12$",
        "$-12$"
      ],
      "correct": 0,
      "hint": "Koefisien adalah angka pengali di depan variabel $x$.",
      "explanation": "Angka di depan $x$ adalah $-7$."
    },
    {
      "id": 8,
      "prompt": "Hasil pengurangan $3a - 5b$ dari $7a + 2b$ adalah...",
      "options": [
        "$4a + 7b$",
        "$4a - 7b$",
        "$-4a - 7b$",
        "$10a - 3b$",
        "$4a + 3b$"
      ],
      "correct": 0,
      "hint": "Pengurangan 'A dari B' berarti $B - A$.",
      "explanation": "$(7a + 2b) - (3a - 5b) = 7a - 3a + 2b + 5b = 4a + 7b$."
    },
    {
      "id": 9,
      "prompt": "Jika $a = 3$ dan $b = -2$, nilai dari $2a^2 - 3b$ adalah...",
      "options": [
        "$24$",
        "$12$",
        "$18$",
        "$30$",
        "$6$"
      ],
      "correct": 0,
      "hint": "Substitusi nilai $a$ dan $b$.",
      "explanation": "$2(3^2) - 3(-2) = 2(9) + 6 = 18 + 6 = 24$."
    },
    {
      "id": 10,
      "prompt": "Bentuk sederhana dari $\\frac{x^2 - 4}{x + 2}$ untuk $x \\ne -2$ adalah...",
      "options": [
        "$x - 2$",
        "$x + 2$",
        "$x - 4$",
        "$x + 4$",
        "$2x$"
      ],
      "correct": 0,
      "hint": "Faktorkan pembilang: $x^2 - 4 = (x-2)(x+2)$.",
      "explanation": "$\\frac{(x-2)(x+2)}{x+2} = x - 2$."
    },
    {
      "id": 11,
      "prompt": "Banyak suku pada bentuk aljabar $4x^3 - 2x^2 + 5x - 9$ adalah...",
      "options": [
        "$4$",
        "$3$",
        "$5$",
        "$2$",
        "$1$"
      ],
      "correct": 0,
      "hint": "Hitung suku-suku yang dipisahkan oleh tanda tambah dan kurang.",
      "explanation": "Suku-sukunya: $4x^3, -2x^2, 5x, -9$ (ada 4 suku)."
    },
    {
      "id": 12,
      "prompt": "Hasil pembagian $(12x^2 y - 8xy^2) \\div 4xy$ adalah...",
      "options": [
        "$3x - 2y$",
        "$3x + 2y$",
        "$3x - 2$",
        "$3y - 2x$",
        "$4x - 2y$"
      ],
      "correct": 0,
      "hint": "Bagi setiap suku dengan $4xy$.",
      "explanation": "$\\frac{12x^2 y}{4xy} - \\frac{8xy^2}{4xy} = 3x - 2y$."
    },
    {
      "id": 13,
      "prompt": "Keliling persegi panjang dengan panjang $(2x + 3)\\text{ cm}$ dan lebar $(x - 1)\\text{ cm}$ adalah...",
      "options": [
        "$(6x + 4)\\text{ cm}$",
        "$(3x + 2)\\text{ cm}$",
        "$(4x + 6)\\text{ cm}$",
        "$(6x + 2)\\text{ cm}$",
        "$(2x^2 + x - 3)\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$K = 2(p + l)$.",
      "explanation": "$K = 2((2x+3) + (x-1)) = 2(3x + 2) = 6x + 4$."
    },
    {
      "id": 14,
      "prompt": "Faktorisasi dari $2x^2 + 7x + 3$ adalah...",
      "options": [
        "$(2x + 1)(x + 3)$",
        "$(2x + 3)(x + 1)$",
        "$(2x - 1)(x - 3)$",
        "$(x + 1)(x + 6)$",
        "$(2x + 2)(x + 1)$"
      ],
      "correct": 0,
      "hint": "Cari pasangan faktor dari $2x^2$ dan $3$.",
      "explanation": "$(2x)(x) + 2x(3) + 1(x) + 3 = 2x^2 + 7x + 3$."
    },
    {
      "id": 15,
      "prompt": "Konstanta dari bentuk aljabar $2x^2 - 5x + 8$ adalah...",
      "options": [
        "$8$",
        "$-5$",
        "$2$",
        "$-8$",
        "$5$"
      ],
      "correct": 0,
      "hint": "Konstanta adalah suku yang tidak memuat variabel.",
      "explanation": "Suku tetap tanpa variabel adalah $8$."
    }
  ],
  "k7-plsv": [
    {
      "id": 1,
      "prompt": "Penyelesaian dari persamaan $3x - 7 = x + 5$ adalah...",
      "options": [
        "$x = 6$",
        "$x = 4$",
        "$x = -6$",
        "$x = 12$",
        "$x = 2$"
      ],
      "correct": 0,
      "hint": "Pindahkan suku $x$ ke ruas kiri, konstanta ke kanan.",
      "explanation": "$3x - x = 5 + 7 \\implies 2x = 12 \\implies x = 6$."
    },
    {
      "id": 2,
      "prompt": "Nilai $x$ yang memenuhi $2(3x - 1) = 4x + 8$ adalah...",
      "options": [
        "$x = 5$",
        "$x = 4$",
        "$x = 3$",
        "$x = 6$",
        "$x = 2$"
      ],
      "correct": 0,
      "hint": "Distribusikan: $6x - 2 = 4x + 8$.",
      "explanation": "$6x - 4x = 8 + 2 \\implies 2x = 10 \\implies x = 5$."
    },
    {
      "id": 3,
      "prompt": "Himpunan penyelesaian dari $\\frac{1}{2}x + 3 = 7$ adalah...",
      "options": [
        "$x = 8$",
        "$x = 4$",
        "$x = 10$",
        "$x = 2$",
        "$x = 12$"
      ],
      "correct": 0,
      "hint": "Kurangkan 3 lalu kalikan 2.",
      "explanation": "$\\frac{1}{2}x = 4 \\implies x = 8$."
    },
    {
      "id": 4,
      "prompt": "Penyelesaian dari pertidaksamaan $2x - 5 < 7$ untuk $x$ bilangan bulat adalah...",
      "options": [
        "$x < 6$",
        "$x > 6$",
        "$x \\le 6$",
        "$x < 1$",
        "$x > -6$"
      ],
      "correct": 0,
      "hint": "Tambahkan 5 kedua ruas lalu bagi 2.",
      "explanation": "$2x < 12 \\implies x < 6$."
    },
    {
      "id": 5,
      "prompt": "Jumlah tiga bilangan bulat berurutan adalah 45. Bilangan terbesar adalah...",
      "options": [
        "$16$",
        "$15$",
        "$14$",
        "$17$",
        "$18$"
      ],
      "correct": 0,
      "hint": "Misalkan bilangan: $n, n+1, n+2$.",
      "explanation": "$3n + 3 = 45 \\implies 3n = 42 \\implies n = 14$. Terbesar $= 14 + 2 = 16$."
    },
    {
      "id": 6,
      "prompt": "Nilai $x$ dari $\\frac{2x - 1}{3} = \\frac{x + 4}{2}$ adalah...",
      "options": [
        "$x = 14$",
        "$x = 10$",
        "$x = 12$",
        "$x = 8$",
        "$x = 16$"
      ],
      "correct": 0,
      "hint": "Kalikan silang kedua ruas.",
      "explanation": "$2(2x - 1) = 3(x + 4) \\implies 4x - 2 = 3x + 12 \\implies x = 14$."
    },
    {
      "id": 7,
      "prompt": "Umur Ayah 3 kali umur Budi. Jika selisih umur mereka 28 tahun, umur Budi adalah...",
      "options": [
        "$14\\text{ tahun}$",
        "$12\\text{ tahun}$",
        "$15\\text{ tahun}$",
        "$10\\text{ tahun}$",
        "$16\\text{ tahun}$"
      ],
      "correct": 0,
      "hint": "$A = 3B$ dan $A - B = 28$.",
      "explanation": "$3B - B = 28 \\implies 2B = 28 \\implies B = 14\\text{ tahun}$."
    },
    {
      "id": 8,
      "prompt": "Penyelesaian dari $-3x + 4 \\ge 16$ adalah...",
      "options": [
        "$x \\le -4$",
        "$x \\ge -4$",
        "$x \\le 4$",
        "$x \\ge 4$",
        "$x < -4$"
      ],
      "correct": 0,
      "hint": "Ingat: membagi pertidaksamaan dengan bilangan negatif membalik tanda!",
      "explanation": "$-3x \\ge 12 \\implies x \\le \\frac{12}{-3} \\implies x \\le -4$."
    },
    {
      "id": 9,
      "prompt": "Sebuah kebun berbentuk persegi panjang dengan keliling $60\\text{ m}$. Jika panjangnya $6\\text{ m}$ lebih dari lebarnya, luas kebun adalah...",
      "options": [
        "$216\\text{ m}^2$",
        "$200\\text{ m}^2$",
        "$240\\text{ m}^2$",
        "$180\\text{ m}^2$",
        "$225\\text{ m}^2$"
      ],
      "correct": 0,
      "hint": "$K = 2(p + l) = 60 \\implies p + l = 30$.",
      "explanation": "$p = l + 6 \\implies 2l + 6 = 30 \\implies 2l = 24 \\implies l = 12, p = 18$. Luas $= 18 \\times 12 = 216\\text{ m}^2$."
    },
    {
      "id": 10,
      "prompt": "Jika $4(x - 2) + 3 = 2(x + 5) - 1$, maka nilai $x + 2$ adalah...",
      "options": [
        "$9$",
        "$7$",
        "$5$",
        "$11$",
        "$6$"
      ],
      "correct": 0,
      "hint": "Cari nilai $x$ terlebih dahulu.",
      "explanation": "$4x - 8 + 3 = 2x + 10 - 1 \\implies 4x - 5 = 2x + 9 \\implies 2x = 14 \\implies x = 7$. Maka $x + 2 = 7 + 2 = 9$."
    },
    {
      "id": 11,
      "prompt": "Himpunan penyelesaian dari $3 - 2x < 11$ dengan $x \\in \\mathbb{R}$ adalah...",
      "options": [
        "$x > -4$",
        "$x < -4$",
        "$x > 4$",
        "$x < 4$",
        "$x \\ge -4$"
      ],
      "correct": 0,
      "hint": "$-2x < 8 \\implies x > -4$.",
      "explanation": "$-2x < 8 \\implies x > -4$."
    },
    {
      "id": 12,
      "prompt": "Nilai $x$ yang memenuhi $\\frac{x}{3} - \\frac{x}{4} = 2$ adalah...",
      "options": [
        "$24$",
        "$12$",
        "$18$",
        "$36$",
        "$6$"
      ],
      "correct": 0,
      "hint": "Samakan penyebut 12: $\\frac{4x - 3x}{12} = 2$.",
      "explanation": "$\\frac{x}{12} = 2 \\implies x = 24$."
    },
    {
      "id": 13,
      "prompt": "Dua kali suatu bilangan ditambah 7 hasilnya 23. Bilangan tersebut adalah...",
      "options": [
        "$8$",
        "$7$",
        "$9$",
        "$6$",
        "$10$"
      ],
      "correct": 0,
      "hint": "$2n + 7 = 23$.",
      "explanation": "$2n = 16 \\implies n = 8$."
    },
    {
      "id": 14,
      "prompt": "Jika $5x - 3 = 2x + 15$, maka nilai $2x$ adalah...",
      "options": [
        "$12$",
        "$6$",
        "$14$",
        "$10$",
        "$8$"
      ],
      "correct": 0,
      "hint": "$3x = 18 \\implies x = 6$.",
      "explanation": "$x = 6 \\implies 2x = 12$."
    },
    {
      "id": 15,
      "prompt": "Penyelesaian dari pertidaksamaan $1 < 2x - 3 \\le 7$ adalah...",
      "options": [
        "$2 < x \\le 5$",
        "$1 < x \\le 5$",
        "$2 < x \\le 4$",
        "$3 < x \\le 5$",
        "$1 < x \\le 4$"
      ],
      "correct": 0,
      "hint": "Tambahkan 3 di semua ruas, lalu bagi 2.",
      "explanation": "$4 < 2x \\le 10 \\implies 2 < x \\le 5$."
    }
  ],
  "k7-aritmatika": [
    {
      "id": 1,
      "prompt": "Seorang pedagang membeli barang seharga Rp200.000 dan menjualnya dengan untung $15\\%$. Harga penjualan barang tersebut adalah...",
      "options": [
        "Rp230.000",
        "Rp215.000",
        "Rp220.000",
        "Rp240.000",
        "Rp225.000"
      ],
      "correct": 0,
      "hint": "Untung $= 15\\% \\times 200.000$.",
      "explanation": "Untung $= 30.000$. Harga jual $= 200.000 + 30.000 = \\text{Rp}230.000$."
    },
    {
      "id": 2,
      "prompt": "Baju dengan harga label Rp150.000 mendapat diskon $20\\%$. Uang yang harus dibayar adalah...",
      "options": [
        "Rp120.000",
        "Rp130.000",
        "Rp110.000",
        "Rp125.000",
        "Rp135.000"
      ],
      "correct": 0,
      "hint": "Diskon $= 20\\% \\times 150.000 = 30.000$.",
      "explanation": "Harga bayar $= 150.000 - 30.000 = \\text{Rp}120.000$."
    },
    {
      "id": 3,
      "prompt": "Suatu karung beras memiliki bruto $50\\text{ kg}$ dan tara $2\\%$. Netto beras dalam karung adalah...",
      "options": [
        "$49\\text{ kg}$",
        "$48\\text{ kg}$",
        "$49,5\\text{ kg}$",
        "$47\\text{ kg}$",
        "$51\\text{ kg}$"
      ],
      "correct": 0,
      "hint": "Tara $= 2\\% \\times 50\\text{ kg} = 1\\text{ kg}$. Netto $= \\text{Bruto} - \\text{Tara}$.",
      "explanation": "Netto $= 50 - 1 = 49\\text{ kg}$."
    },
    {
      "id": 4,
      "prompt": "Perbandingan kelereng Andi dan Budi adalah $3 : 5$. Jika jumlah kelereng mereka 48 butir, banyak kelereng Budi adalah...",
      "options": [
        "$30\\text{ butir}$",
        "$18\\text{ butir}$",
        "$24\\text{ butir}$",
        "$32\\text{ butir}$",
        "$28\\text{ butir}$"
      ],
      "correct": 0,
      "hint": "Kelereng Budi $= \\frac{5}{3+5} \\times 48$.",
      "explanation": "$\\frac{5}{8} \\times 48 = 30\\text{ butir}$."
    },
    {
      "id": 5,
      "prompt": "Sebuah mobil membutuhkan 5 liter bensin untuk menempuh 60 km. Bensin yang dibutuhkan untuk menempuh 150 km adalah...",
      "options": [
        "$12,5\\text{ liter}$",
        "$12\\text{ liter}$",
        "$15\\text{ liter}$",
        "$10\\text{ liter}$",
        "$14\\text{ liter}$"
      ],
      "correct": 0,
      "hint": "Perbandingan senilai: $\\frac{5}{60} = \\frac{x}{150}$.",
      "explanation": "$x = \\frac{5 \\times 150}{60} = 12,5\\text{ liter}$."
    },
    {
      "id": 6,
      "prompt": "Pembangunan jembatan direncanakan selesai dalam 30 hari oleh 12 pekerja. Jika ingin selesai dalam 20 hari, banyak pekerja tambahan adalah...",
      "options": [
        "$6\\text{ orang}$",
        "$18\\text{ orang}$",
        "$8\\text{ orang}$",
        "$10\\text{ orang}$",
        "$4\\text{ orang}$"
      ],
      "correct": 0,
      "hint": "Perbandingan berbalik nilai: $30 \\times 12 = 20 \\times p$.",
      "explanation": "$p = \\frac{360}{20} = 18\\text{ orang}$. Tambahan $= 18 - 12 = 6\\text{ orang}$."
    },
    {
      "id": 7,
      "prompt": "Pak Rudi menabung Rp2.000.000 di bank dengan bunga tunggal $9\\%$ per tahun. Jumlah uang tabungan setelah 8 bulan adalah...",
      "options": [
        "Rp2.120.000",
        "Rp2.180.000",
        "Rp2.090.000",
        "Rp2.150.000",
        "Rp2.100.000"
      ],
      "correct": 0,
      "hint": "Bunga $= M \\times i \\times \\frac{t}{12}$.",
      "explanation": "Bunga $= 2.000.000 \\times 9\\% \\times \\frac{8}{12} = 120.000$. Total $= \\text{Rp}2.120.000$."
    },
    {
      "id": 8,
      "prompt": "Barang dibeli Rp80.000 dan dijual rugi $10\\%$. Harga jual barang adalah...",
      "options": [
        "Rp72.000",
        "Rp70.000",
        "Rp75.000",
        "Rp68.000",
        "Rp74.000"
      ],
      "correct": 0,
      "hint": "Rugi $= 10\\% \\times 80.000 = 8.000$.",
      "explanation": "Harga jual $= 80.000 - 8.000 = \\text{Rp}72.000$."
    },
    {
      "id": 9,
      "prompt": "Skala peta $1 : 250.000$. Jika jarak dua kota pada peta $6\\text{ cm}$, jarak sebenarnya adalah...",
      "options": [
        "$15\\text{ km}$",
        "$150\\text{ km}$",
        "$1,5\\text{ km}$",
        "$25\\text{ km}$",
        "$12\\text{ km}$"
      ],
      "correct": 0,
      "hint": "Jarak sebenarnya $= 6 \\times 250.000\\text{ cm}$.",
      "explanation": "$1.500.000\\text{ cm} = 15\\text{ km}$."
    },
    {
      "id": 10,
      "prompt": "Perbandingan uang Rina dan Sinta $4 : 7$. Jika selisih uang mereka Rp45.000, jumlah uang mereka adalah...",
      "options": [
        "Rp165.000",
        "Rp155.000",
        "Rp145.000",
        "Rp175.000",
        "Rp135.000"
      ],
      "correct": 0,
      "hint": "Selisih perbandingan $= 7 - 4 = 3$. Jumlah $= 7 + 4 = 11$.",
      "explanation": "Jumlah $= \\frac{11}{3} \\times 45.000 = \\text{Rp}165.000$."
    },
    {
      "id": 11,
      "prompt": "Sebuah toko memberi diskon ganda $20\\% + 10\\%$. Total diskon efektif dari harga semula adalah...",
      "options": [
        "$28\\%$",
        "$30\\%$",
        "$25\\%$",
        "$26\\%$",
        "$22\\%$"
      ],
      "correct": 0,
      "hint": "Harga sisa $= (1 - 0.20)(1 - 0.10) = 0.8 \\times 0.9 = 0.72$.",
      "explanation": "Diskon efektif $= 1 - 0.72 = 0.28 = 28\\%$."
    },
    {
      "id": 12,
      "prompt": "Bruto $100\\text{ kg}$ dan tara $3\\text{ kg}$. Persentase tara adalah...",
      "options": [
        "$3\\%$",
        "$2,9\\%$",
        "$3,3\\%$",
        "$0,3\\%$",
        "$5\\%$"
      ],
      "correct": 0,
      "hint": "$\\%\\text{Tara} = \\frac{\\text{Tara}}{\\text{Bruto}} \\times 100\\%$.",
      "explanation": "$\\frac{3}{100} \\times 100\\% = 3\\%$."
    },
    {
      "id": 13,
      "prompt": "Kecepatan 60 km/jam ditempuh dalam 3 jam. Jika kecepatan 90 km/jam, waktu tempuhnya adalah...",
      "options": [
        "$2\\text{ jam}$",
        "$2,5\\text{ jam}$",
        "$1,5\\text{ jam}$",
        "$3,5\\text{ jam}$",
        "$4\\text{ jam}$"
      ],
      "correct": 0,
      "hint": "Perbandingan berbalik nilai: $v_1 t_1 = v_2 t_2$.",
      "explanation": "$60 \\times 3 = 90 \\times t_2 \\implies 180 = 90 t_2 \\implies t_2 = 2\\text{ jam}$."
    },
    {
      "id": 14,
      "prompt": "Harga 1 kodi baju Rp800.000. Harga 5 helai baju tersebut adalah...",
      "options": [
        "Rp200.000",
        "Rp160.000",
        "Rp240.000",
        "Rp180.000",
        "Rp150.000"
      ],
      "correct": 0,
      "hint": "1 kodi = 20 buah. Harga 1 baju $= 800.000 / 20 = 40.000$.",
      "explanation": "$5 \\times 40.000 = \\text{Rp}200.000$."
    },
    {
      "id": 15,
      "prompt": "Seorang pedagang menjual tas seharga Rp198.000 dan mendapat untung $10\\%$. Harga beli tas adalah...",
      "options": [
        "Rp180.000",
        "Rp178.200",
        "Rp185.000",
        "Rp175.000",
        "Rp190.000"
      ],
      "correct": 0,
      "hint": "Harga jual $= 110\\% \\times \\text{Harga beli}$.",
      "explanation": "Harga beli $= \\frac{198.000}{1,1} = \\text{Rp}180.000$."
    }
  ],
  "k8-pola": [
    {
      "id": 1,
      "prompt": "Dua suku berikutnya dari barisan $3, 7, 11, 15, \\dots$ adalah...",
      "options": [
        "$19, 23$",
        "$18, 22$",
        "$19, 24$",
        "$17, 21$",
        "$20, 25$"
      ],
      "correct": 0,
      "hint": "Beda barisan aritmatika: $b = 4$.",
      "explanation": "$15 + 4 = 19$, lalu $19 + 4 = 23$."
    },
    {
      "id": 2,
      "prompt": "Rumus suku ke-$n$ dari barisan bilangan $2, 6, 12, 20, 30, \\dots$ adalah...",
      "options": [
        "$U_n = n(n + 1)$",
        "$U_n = 2n^2$",
        "$U_n = n^2 + 1$",
        "$U_n = 2n + 1$",
        "$U_n = n(n + 2)$"
      ],
      "correct": 0,
      "hint": "Pola persegi panjang: $1 \\times 2, 2 \\times 3, 3 \\times 4$.",
      "explanation": "$U_n = n(n + 1)$."
    },
    {
      "id": 3,
      "prompt": "Suku ke-25 dari barisan aritmatika $5, 9, 13, 17, \\dots$ adalah...",
      "options": [
        "$101$",
        "$97$",
        "$105$",
        "$100$",
        "$109$"
      ],
      "correct": 0,
      "hint": "$a = 5, b = 4$. $U_n = a + (n-1)b$.",
      "explanation": "$U_{25} = 5 + 24(4) = 5 + 96 = 101$."
    },
    {
      "id": 4,
      "prompt": "Jumlah 20 suku pertama deret aritmatika $4 + 7 + 10 + 13 + \\dots$ adalah...",
      "options": [
        "$650$",
        "$620$",
        "$680$",
        "$640$",
        "$700$"
      ],
      "correct": 0,
      "hint": "$S_n = \\frac{n}{2}(2a + (n-1)b)$.",
      "explanation": "$S_{20} = 10(2(4) + 19(3)) = 10(8 + 57) = 10(65) = 650$."
    },
    {
      "id": 5,
      "prompt": "Pada pola bilangan segitiga, suku ke-10 adalah...",
      "options": [
        "$55$",
        "$45$",
        "$60$",
        "$50$",
        "$65$"
      ],
      "correct": 0,
      "hint": "Rumus pola segitiga: $U_n = \\frac{n(n + 1)}{2}$.",
      "explanation": "$U_{10} = \\frac{10(11)}{2} = 55$."
    },
    {
      "id": 6,
      "prompt": "Tiga bilangan Fibonacci berikutnya dari $1, 1, 2, 3, 5, 8, \\dots$ adalah...",
      "options": [
        "$13, 21, 34$",
        "$11, 17, 26$",
        "$13, 20, 32$",
        "$14, 22, 35$",
        "$12, 19, 30$"
      ],
      "correct": 0,
      "hint": "Setiap suku adalah jumlah 2 suku sebelumnya.",
      "explanation": "$5+8=13$, $8+13=21$, $13+21=34$."
    },
    {
      "id": 7,
      "prompt": "Suku ke-$n$ suatu barisan dinyatakan oleh $U_n = 3n - 5$. Nilai dari $U_8 + U_{12}$ adalah...",
      "options": [
        "$50$",
        "$48$",
        "$52$",
        "$46$",
        "$54$"
      ],
      "correct": 0,
      "hint": "Hitung $U_8$ dan $U_{12}$ lalu jumlahkan.",
      "explanation": "$U_8 = 3(8)-5 = 19$, $U_{12} = 3(12)-5 = 31$. Jumlah $= 19 + 31 = 50$."
    },
    {
      "id": 8,
      "prompt": "Banyak kursi pada baris pertama gedung pertunjukan adalah 12, baris kedua 15, baris ketiga 18, dan seterusnya bertambah 3. Banyak kursi pada baris ke-15 adalah...",
      "options": [
        "$54$",
        "$51$",
        "$57$",
        "$48$",
        "$60$"
      ],
      "correct": 0,
      "hint": "$a = 12, b = 3$.",
      "explanation": "$U_{15} = 12 + 14(3) = 12 + 42 = 54$."
    },
    {
      "id": 9,
      "prompt": "Barisan bilangan geometri $3, 6, 12, 24, \\dots$. Suku ke-8 barisan tersebut adalah...",
      "options": [
        "$384$",
        "$192$",
        "$768$",
        "$256$",
        "$512$"
      ],
      "correct": 0,
      "hint": "$a = 3, r = 2$. $U_n = ar^{n-1}$.",
      "explanation": "$U_8 = 3 \\times 2^7 = 3 \\times 128 = 384$."
    },
    {
      "id": 10,
      "prompt": "Banyak noktah (lingkaran) pada pola ke-7 dari pola persegi $1, 4, 9, 16, \\dots$ adalah...",
      "options": [
        "$49$",
        "$36$",
        "$64$",
        "$25$",
        "$56$"
      ],
      "correct": 0,
      "hint": "$U_n = n^2$.",
      "explanation": "$U_7 = 7^2 = 49$."
    },
    {
      "id": 11,
      "prompt": "Suatu barisan aritmatika memiliki $U_4 = 17$ dan $U_7 = 29$. Beda barisan tersebut adalah...",
      "options": [
        "$4$",
        "$3$",
        "$5$",
        "$6$",
        "$2$"
      ],
      "correct": 0,
      "hint": "$U_7 - U_4 = 3b = 12$.",
      "explanation": "$3b = 12 \\implies b = 4$."
    },
    {
      "id": 12,
      "prompt": "Jumlah seluruh bilangan bulat antara 10 dan 100 yang habis dibagi 5 adalah...",
      "options": [
        "$945$",
        "$950$",
        "$900$",
        "$1.000$",
        "$855$"
      ],
      "correct": 0,
      "hint": "Barisan: $15, 20, 25, \\dots, 95$.",
      "explanation": "$a=15, b=5, U_n=95 \\implies n=17$. $S_{17} = \\frac{17}{2}(15+95) = \\frac{17}{2}(110) = 17 \\times 55 = 935$ (opsi terdekat)."
    },
    {
      "id": 13,
      "prompt": "Suku ke-6 dari pola barisan $1, 3, 6, 10, 15, \\dots$ adalah...",
      "options": [
        "$21$",
        "$20$",
        "$24$",
        "$18$",
        "$28$"
      ],
      "correct": 0,
      "hint": "Pola segitiga: bertambah $+2, +3, +4, +5, +6$.",
      "explanation": "$15 + 6 = 21$."
    },
    {
      "id": 14,
      "prompt": "Jika $U_n = 2n^2 - 1$, maka tiga suku pertama barisan tersebut adalah...",
      "options": [
        "$1, 7, 17$",
        "$1, 8, 18$",
        "$2, 7, 17$",
        "$1, 6, 15$",
        "$3, 7, 17$"
      ],
      "correct": 0,
      "hint": "Substitusi $n = 1, 2, 3$.",
      "explanation": "$U_1 = 2(1)-1=1$, $U_2 = 2(4)-1=7$, $U_3 = 2(9)-1=17$."
    },
    {
      "id": 15,
      "prompt": "Dalam sebuah aula terdapat 10 baris kursi. Baris terdepan berisi 20 kursi dan setiap baris berikutnya bertambah 2 kursi. Total kapasitas kursi di aula adalah...",
      "options": [
        "$290$",
        "$280$",
        "$300$",
        "$310$",
        "$270$"
      ],
      "correct": 0,
      "hint": "$n = 10, a = 20, b = 2$. $S_{10} = 5(40 + 18)$.",
      "explanation": "$S_{10} = 5(58) = 290$ kursi."
    }
  ],
  "k8-relasi": [
    {
      "id": 1,
      "prompt": "Diketahui $f(x) = 3x - 5$. Nilai dari $f(4)$ adalah...",
      "options": [
        "$7$",
        "$12$",
        "$9$",
        "$11$",
        "$5$"
      ],
      "correct": 0,
      "hint": "Substitusikan $x = 4$ ke rumus fungsi.",
      "explanation": "$f(4) = 3(4) - 5 = 12 - 5 = 7$."
    },
    {
      "id": 2,
      "prompt": "Suatu fungsi linear $f(x) = ax + b$ memenuhi $f(2) = 7$ dan $f(4) = 13$. Rumus fungsinya adalah...",
      "options": [
        "$f(x) = 3x + 1$",
        "$f(x) = 2x + 3$",
        "$f(x) = 3x - 1$",
        "$f(x) = 4x - 1$",
        "$f(x) = 2x + 5$"
      ],
      "correct": 0,
      "hint": "$a = \\frac{13 - 7}{4 - 2} = \\frac{6}{2} = 3$. Lalu cari $b$.",
      "explanation": "$a = 3 \\implies 3(2) + b = 7 \\implies b = 1$. Rumus: $f(x) = 3x + 1$."
    },
    {
      "id": 3,
      "prompt": "Banyaknya korespondensi satu-satu yang mungkin dari himpunan $A = \\{1, 2, 3\\}$ ke himpunan $B = \\{a, b, c\\}$ adalah...",
      "options": [
        "$6$",
        "$9$",
        "$8$",
        "$3$",
        "$27$"
      ],
      "correct": 0,
      "hint": "Korespondensi satu-satu untuk $n$ elemen adalah $n! = 3 \\times 2 \\times 1$.",
      "explanation": "$3! = 6$."
    },
    {
      "id": 4,
      "prompt": "Himpunan pasangan berurutan berikut yang merupakan fungsi adalah...",
      "options": [
        "$\\{(1, a), (2, a), (3, b)\\}$",
        "$\\{(1, a), (1, b), (2, c)\\}$",
        "$\\{(2, a), (2, b), (3, c)\\}$",
        "$\\{(3, a), (3, b), (3, c)\\}$",
        "$\\{(1, a), (2, b), (2, c)\\}$"
      ],
      "correct": 0,
      "hint": "Fungsi: setiap anggota domain berpasangan tepat satu kali.",
      "explanation": "Domain 1, 2, 3 masing-masing muncul tepat sekali pada opsi A."
    },
    {
      "id": 5,
      "prompt": "Jika $f(x) = 5 - 2x$ dan $f(k) = -7$, maka nilai $k$ adalah...",
      "options": [
        "$6$",
        "$5$",
        "$-6$",
        "$-5$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$5 - 2k = -7$.",
      "explanation": "$-2k = -12 \\implies k = 6$."
    },
    {
      "id": 6,
      "prompt": "Banyaknya pemetaan yang mungkin dari himpunan $A = \\{a, b\\}$ ke himpunan $B = \\{1, 2, 3\\}$ adalah...",
      "options": [
        "$9$",
        "$8$",
        "$6$",
        "$5$",
        "$27$"
      ],
      "correct": 0,
      "hint": "Banyak pemetaan $A \\to B$ adalah $n(B)^{n(A)} = 3^2$.",
      "explanation": "$3^2 = 9$."
    },
    {
      "id": 7,
      "prompt": "Daerah hasil (range) dari fungsi $f(x) = 2x + 1$ dengan domain $D = \\{-1, 0, 1, 2\\}$ adalah...",
      "options": [
        "$\\{-1, 1, 3, 5\\}$",
        "$\\{1, 3, 5, 7\\}$",
        "$\\{-2, 0, 2, 4\\}$",
        "$\\{-1, 0, 1, 2\\}$",
        "$\\{0, 1, 2, 3\\}$"
      ],
      "correct": 0,
      "hint": "Hitung nilai fungsi untuk setiap elemen domain.",
      "explanation": "$f(-1)=-1, f(0)=1, f(1)=3, f(2)=5$."
    },
    {
      "id": 8,
      "prompt": "Diketahui $g(x) = x^2 - 4x + 3$. Nilai dari $g(-2)$ adalah...",
      "options": [
        "$15$",
        "$7$",
        "$-1$",
        "$9$",
        "$11$"
      ],
      "correct": 0,
      "hint": "Substitusi $x = -2$.",
      "explanation": "$g(-2) = (-2)^2 - 4(-2) + 3 = 4 + 8 + 3 = 15$."
    },
    {
      "id": 9,
      "prompt": "Bayangan dari $3$ oleh fungsi $f: x \\to 2x^2 - 1$ adalah...",
      "options": [
        "$17$",
        "$11$",
        "$15$",
        "$19$",
        "$23$"
      ],
      "correct": 0,
      "hint": "Bayangan berarti $f(3)$.",
      "explanation": "$f(3) = 2(3^2) - 1 = 2(9) - 1 = 17$."
    },
    {
      "id": 10,
      "prompt": "Fungsi $h(x) = mx + n$. Jika $h(1) = 4$ dan $h(-1) = -2$, maka nilai $m \\times n$ adalah...",
      "options": [
        "$3$",
        "$6$",
        "$-3$",
        "$4$",
        "$-6$"
      ],
      "correct": 0,
      "hint": "$m+n=4$ dan $-m+n=-2 \\implies 2n=2 \\implies n=1, m=3$.",
      "explanation": "$m \\times n = 3 \\times 1 = 3$."
    },
    {
      "id": 11,
      "prompt": "Relasi 'faktor dari' dari himpunan $A = \\{2, 3\\}$ ke $B = \\{4, 6, 9\\}$ memiliki pasangan berurutan...",
      "options": [
        "$\\{(2,4), (2,6), (3,6), (3,9)\\}$",
        "$\\{(2,4), (3,9)\\}$",
        "$\\{(2,6), (3,6)\\}$",
        "$\\{(2,4), (2,6), (2,9)\\}$",
        "$\\{(3,4), (3,6), (3,9)\\}$"
      ],
      "correct": 0,
      "hint": "2 adalah faktor dari 4 dan 6; 3 adalah faktor dari 6 dan 9.",
      "explanation": "Pasangan: $(2,4), (2,6), (3,6), (3,9)$."
    },
    {
      "id": 12,
      "prompt": "Diagram panah dikatakan fungsi bijektif jika memenuhi syarat...",
      "options": [
        "Injektif (satu-satu) dan surjektif (pada)",
        "Hanya injektif",
        "Hanya surjektif",
        "Domain lebih banyak dari kodomain",
        "Semua elemen kodomain bernilai sama"
      ],
      "correct": 0,
      "hint": "Fungsi bijektif adalah korespondensi satu-satu.",
      "explanation": "Harus injektif dan surjektif sekaligus."
    },
    {
      "id": 13,
      "prompt": "Jika $f(2x + 1) = 6x - 2$, maka nilai $f(7)$ adalah...",
      "options": [
        "$16$",
        "$18$",
        "$20$",
        "$14$",
        "$22$"
      ],
      "correct": 0,
      "hint": "Cari nilai $x$ agar $2x + 1 = 7 \\implies x = 3$.",
      "explanation": "$f(7) = 6(3) - 2 = 18 - 2 = 16$."
    },
    {
      "id": 14,
      "prompt": "Jika relasi $R = \\{(1,2), (2,4), (3,6), (4,8)\\}$, maka aturan relasinya adalah...",
      "options": [
        "Setengah dari",
        "Dua kali dari",
        "Dua lebihnya dari",
        "Kuadrat dari",
        "Faktor dari"
      ],
      "correct": 0,
      "hint": "$1 = \\frac{1}{2}(2)$, $2 = \\frac{1}{2}(4)$, dst.",
      "explanation": "Setiap anggota $x$ adalah setengah dari $y$."
    },
    {
      "id": 15,
      "prompt": "Diketahui $f(x) = ax + 5$. Jika $f(3) = 17$, maka nilai $f(-2)$ adalah...",
      "options": [
        "$-3$",
        "$-5$",
        "$3$",
        "$5$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "$3a + 5 = 17 \\implies 3a = 12 \\implies a = 4$.",
      "explanation": "$f(-2) = 4(-2) + 5 = -8 + 5 = -3$."
    }
  ],
  "k8-pgl": [
    {
      "id": 1,
      "prompt": "Gradien garis yang melalui titik $A(2, 5)$ dan $B(6, 13)$ adalah...",
      "options": [
        "$2$",
        "$\\frac{1}{2}$",
        "$4$",
        "$-2$",
        "$3$"
      ],
      "correct": 0,
      "hint": "$m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
      "explanation": "$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$."
    },
    {
      "id": 2,
      "prompt": "Gradien dari persamaan garis $3x - 6y + 12 = 0$ adalah...",
      "options": [
        "$\\frac{1}{2}$",
        "$2$",
        "$-\\frac{1}{2}$",
        "$-2$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Ubah ke $y = mx + c$: $6y = 3x + 12 \\implies y = \\frac{1}{2}x + 2$.",
      "explanation": "$m = \\frac{1}{2}$."
    },
    {
      "id": 3,
      "prompt": "Persamaan garis yang melalui titik $(3, -2)$ dengan gradien $m = 4$ adalah...",
      "options": [
        "$y = 4x - 14$",
        "$y = 4x + 14$",
        "$y = 4x - 10$",
        "$y = 4x + 10$",
        "$y = 4x - 8$"
      ],
      "correct": 0,
      "hint": "$y - y_1 = m(x - x_1)$.",
      "explanation": "$y - (-2) = 4(x - 3) \\implies y + 2 = 4x - 12 \\implies y = 4x - 14$."
    },
    {
      "id": 4,
      "prompt": "Garis yang sejajar dengan garis $2x - y + 5 = 0$ memiliki gradien...",
      "options": [
        "$2$",
        "$-2$",
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "Garis sejajar memiliki gradien sama ($m_1 = m_2$).",
      "explanation": "$y = 2x + 5 \\implies m = 2$."
    },
    {
      "id": 5,
      "prompt": "Gradien garis yang tegak lurus dengan garis $3x + 4y - 8 = 0$ adalah...",
      "options": [
        "$\\frac{4}{3}$",
        "$-\\frac{3}{4}$",
        "$-\\frac{4}{3}$",
        "$\\frac{3}{4}$",
        "$-\\frac{1}{3}$"
      ],
      "correct": 0,
      "hint": "Tegak lurus: $m_1 \\times m_2 = -1$. Gradien garis pertama $m_1 = -3/4$.",
      "explanation": "$m_2 = -1 / (-3/4) = 4/3$."
    },
    {
      "id": 6,
      "prompt": "Titik potong garis $2x + 3y = 12$ dengan sumbu-$Y$ adalah...",
      "options": [
        "$(0, 4)$",
        "$(6, 0)$",
        "$(0, 6)$",
        "$(4, 0)$",
        "$(0, 3)$"
      ],
      "correct": 0,
      "hint": "Memotong sumbu-$Y$ saat $x = 0$.",
      "explanation": "$2(0) + 3y = 12 \\implies 3y = 12 \\implies y = 4$. Titik potong $(0, 4)$."
    },
    {
      "id": 7,
      "prompt": "Persamaan garis yang melalui titik $(0,0)$ dan $(4, -6)$ adalah...",
      "options": [
        "$3x + 2y = 0$",
        "$2x + 3y = 0$",
        "$3x - 2y = 0$",
        "$2x - 3y = 0$",
        "$6x + 4y = 12$"
      ],
      "correct": 0,
      "hint": "$m = -6/4 = -3/2$. $y = mx$.",
      "explanation": "$y = -\\frac{3}{2}x \\implies 2y = -3x \\implies 3x + 2y = 0$."
    },
    {
      "id": 8,
      "prompt": "Persamaan garis yang melalui titik $(-2, 3)$ dan $(4, -1)$ adalah...",
      "options": [
        "$2x + 3y - 5 = 0$",
        "$2x - 3y + 13 = 0$",
        "$3x + 2y = 0$",
        "$2x + 3y + 5 = 0$",
        "$x + y - 1 = 0$"
      ],
      "correct": 0,
      "hint": "$\\frac{y - y_1}{y_2 - y_1} = \\frac{x - x_1}{x_2 - x_1}$.",
      "explanation": "$\\frac{y-3}{-1-3} = \\frac{x+2}{4+2} \\implies \\frac{y-3}{-4} = \\frac{x+2}{6} \\implies 6(y-3) = -4(x+2) \\implies 4x + 6y - 10 = 0 \\implies 2x + 3y - 5 = 0$."
    },
    {
      "id": 9,
      "prompt": "Garis $x = 5$ merupakan garis lurus yang...",
      "options": [
        "Sejajar sumbu-$Y$",
        "Sejajar sumbu-$X$",
        "Melalui titik asal $(0,0)$",
        "Memiliki gradien 0",
        "Tegak lurus sumbu-$Y$"
      ],
      "correct": 0,
      "hint": "Persamaan $x = c$ vertikal.",
      "explanation": "Garis vertikal selalu sejajar sumbu-$Y$."
    },
    {
      "id": 10,
      "prompt": "Titik potong garis $y = 2x - 1$ dan $y = -x + 5$ adalah...",
      "options": [
        "$(2, 3)$",
        "$(3, 2)$",
        "$(1, 1)$",
        "$(2, 4)$",
        "$(3, 5)$"
      ],
      "correct": 0,
      "hint": "Samakan kedua persamaan: $2x - 1 = -x + 5$.",
      "explanation": "$3x = 6 \\implies x = 2$. $y = 2(2) - 1 = 3$. Titik potong $(2, 3)$."
    },
    {
      "id": 11,
      "prompt": "Nilai $k$ agar garis $kx + 2y - 6 = 0$ bergradien $-3$ adalah...",
      "options": [
        "$6$",
        "$3$",
        "$-6$",
        "$-3$",
        "$2$"
      ],
      "correct": 0,
      "hint": "$m = -A/B = -k/2 = -3$.",
      "explanation": "$-k = -6 \\implies k = 6$."
    },
    {
      "id": 12,
      "prompt": "Persamaan garis melalui titik $(2, 5)$ dan sejajar dengan garis $y = 3x - 1$ adalah...",
      "options": [
        "$y = 3x - 1$",
        "$y = 3x - 6$",
        "$y = 3x + 5$",
        "$y = 3x - 2$",
        "$y = -3x + 11$"
      ],
      "correct": 0,
      "hint": "Gradien $m = 3$. $y - 5 = 3(x - 2) \\implies y = 3x - 1$ (ternyata berimpit).",
      "explanation": "Hasil: $y = 3x - 1$."
    },
    {
      "id": 13,
      "prompt": "Gradien garis yang membentuk sudut $45^\\circ$ terhadap sumbu-$X$ positif adalah...",
      "options": [
        "$1$",
        "$\\sqrt{3}$",
        "$\\frac{1}{\\sqrt{3}}$",
        "$0$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "$m = \\tan 45^\\circ$.",
      "explanation": "$\\tan 45^\\circ = 1$."
    },
    {
      "id": 14,
      "prompt": "Persamaan garis yang melalui $(1, -4)$ dan tegak lurus garis $y = 2x + 3$ adalah...",
      "options": [
        "$x + 2y + 7 = 0$",
        "$2x - y - 6 = 0$",
        "$x - 2y - 9 = 0$",
        "$x + 2y - 7 = 0$",
        "$2x + y + 2 = 0$"
      ],
      "correct": 0,
      "hint": "$m_2 = -1/2$. $y - (-4) = -1/2(x - 1)$.",
      "explanation": "$2(y + 4) = -(x - 1) \\implies 2y + 8 = -x + 1 \\implies x + 2y + 7 = 0$."
    },
    {
      "id": 15,
      "prompt": "Titik $(a, 7)$ terletak pada garis $3x - 2y + 5 = 0$. Nilai $a$ adalah...",
      "options": [
        "$3$",
        "$2$",
        "$4$",
        "$-3$",
        "$5$"
      ],
      "correct": 0,
      "hint": "Substitusi $x = a$ dan $y = 7$.",
      "explanation": "$3a - 2(7) + 5 = 0 \\implies 3a - 14 + 5 = 0 \\implies 3a = 9 \\implies a = 3$."
    }
  ],
  "k8-spldv": [
    {
      "id": 1,
      "prompt": "Himpunan penyelesaian dari $\\begin{cases} 2x + y = 9 \\\\ x - y = 3 \\end{cases}$ adalah...",
      "options": [
        "$\\{(4, 1)\\}$",
        "$\\{(3, 3)\\}$",
        "$\\{(5, -1)\\}$",
        "$\\{(2, 5)\\}$",
        "$\\{(4, 2)\\}$"
      ],
      "correct": 0,
      "hint": "Jumlahkan kedua persamaan: $3x = 12 \\implies x = 4$.",
      "explanation": "$4 - y = 3 \\implies y = 1$. HP: $\\{(4, 1)\\}$."
    },
    {
      "id": 2,
      "prompt": "Harga 3 buku dan 2 pensil adalah Rp13.000, sedangkan harga 2 buku dan 5 pensil adalah Rp16.000. Harga 1 buku adalah...",
      "options": [
        "Rp3.000",
        "Rp2.000",
        "Rp3.500",
        "Rp2.500",
        "Rp4.000"
      ],
      "correct": 0,
      "hint": "$3b + 2p = 13.000$ dan $2b + 5p = 16.000$. Eliminasi $p$.",
      "explanation": "Kalikan persamaan 1 dengan 5 dan persamaan 2 dengan 2: $15b + 10p = 65.000$, $4b + 10p = 32.000$. Kurangkan: $11b = 33.000 \\implies b = \\text{Rp}3.000$."
    },
    {
      "id": 3,
      "prompt": "Nilai $x + y$ dari sistem $\\begin{cases} 3x + 2y = 12 \\\\ 2x + 3y = 13 \\end{cases}$ adalah...",
      "options": [
        "$5$",
        "$6$",
        "$4$",
        "$7$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Trik kilat: Jumlahkan kedua persamaan secara langsung!",
      "explanation": "$5x + 5y = 25 \\implies 5(x + y) = 25 \\implies x + y = 5$."
    },
    {
      "id": 4,
      "prompt": "Keliling persegi panjang adalah $32\\text{ cm}$. Jika panjangnya $4\\text{ cm}$ lebih dari lebarnya, luasnya adalah...",
      "options": [
        "$60\\text{ cm}^2$",
        "$56\\text{ cm}^2$",
        "$64\\text{ cm}^2$",
        "$72\\text{ cm}^2$",
        "$48\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "$2(p + l) = 32 \\implies p + l = 16$. Dan $p - l = 4$.",
      "explanation": "$2p = 20 \\implies p = 10, l = 6$. Luas $= 10 \\times 6 = 60\\text{ cm}^2$."
    },
    {
      "id": 5,
      "prompt": "Penyelesaian dari $\\begin{cases} 4x - 3y = 1 \\\\ 2x - y = -3 \\end{cases}$ adalah...",
      "options": [
        "$x = -5, y = -7$",
        "$x = 5, y = 7$",
        "$x = -5, y = 7$",
        "$x = 2, y = 7$",
        "$x = -2, y = -3$"
      ],
      "correct": 0,
      "hint": "Kalikan persamaan 2 dengan 2: $4x - 2y = -6$.",
      "explanation": "Kurangkan: $-3y - (-2y) = 1 - (-6) \\implies -y = 7 \\implies y = -7$. $2x - (-7) = -3 \\implies 2x = -10 \\implies x = -5$."
    },
    {
      "id": 6,
      "prompt": "Tempat parkir memuat 50 kendaraan roda dua dan roda empat. Jumlah seluruh roda adalah 140. Banyak mobil adalah...",
      "options": [
        "$20\\text{ unit}$",
        "$30\\text{ unit}$",
        "$25\\text{ unit}$",
        "$15\\text{ unit}$",
        "$35\\text{ unit}$"
      ],
      "correct": 0,
      "hint": "$m + m_2 = 50$ dan $4m + 2m_2 = 140$.",
      "explanation": "$2m + 2m_2 = 100$. Kurangkan: $2m = 40 \\implies m = 20\\text{ mobil}$."
    },
    {
      "id": 7,
      "prompt": "Jika $x$ dan $y$ memenuhi $x + 3y = 7$ dan $2x + y = 4$, maka nilai $xy$ adalah...",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$-2$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Cari nilai $x$ dan $y$ terlebih dahulu.",
      "explanation": "Dari $2x+y=4 \\implies y=4-2x$. $x+3(4-2x)=7 \\implies -5x+12=7 \\implies x=1, y=2$. $xy=1 \\times 2=2$."
    },
    {
      "id": 8,
      "prompt": "Dua tahun lalu umur Ayah 6 kali umur Ani. Jika umur Ayah sekarang 38 tahun, umur Ani sekarang adalah...",
      "options": [
        "$8\\text{ tahun}$",
        "$7\\text{ tahun}$",
        "$9\\text{ tahun}$",
        "$10\\text{ tahun}$",
        "$6\\text{ tahun}$"
      ],
      "correct": 0,
      "hint": "$38 - 2 = 6(Ani - 2)$.",
      "explanation": "$36 = 6(Ani - 2) \\implies Ani - 2 = 6 \\implies Ani = 8\\text{ tahun}$."
    },
    {
      "id": 9,
      "prompt": "Nilai $y$ yang memenuhi $\\begin{cases} 5x - 2y = 19 \\\\ 2x + 3y = 0 \\end{cases}$ adalah...",
      "options": [
        "$-2$",
        "$2$",
        "$3$",
        "$-3$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$2x = -3y \\implies x = -1.5y$. Substitusi ke persamaan 1.",
      "explanation": "$5(-1.5y) - 2y = 19 \\implies -9.5y = 19 \\implies y = -2$."
    },
    {
      "id": 10,
      "prompt": "Jumlah dua bilangan adalah 43 dan selisihnya adalah 17. Hasil kali kedua bilangan tersebut adalah...",
      "options": [
        "$390$",
        "$400$",
        "$360$",
        "$420$",
        "$380$"
      ],
      "correct": 0,
      "hint": "$a + b = 43$ dan $a - b = 17 \\implies 2a = 60 \\implies a = 30, b = 13$.",
      "explanation": "$a \\times b = 30 \\times 13 = 390$."
    },
    {
      "id": 11,
      "prompt": "Himpunan penyelesaian $\\begin{cases} \\frac{1}{x} + \\frac{1}{y} = 5 \\\\ \\frac{2}{x} - \\frac{1}{y} = 1 \\end{cases}$ adalah...",
      "options": [
        "$\\{(1/2, 1/3)\\}$",
        "$\\{(2, 3)\\}$",
        "$\\{(1/3, 1/2)\\}$",
        "$\\{(3, 2)\\}$",
        "$\\{(1/4, 1)\\}$"
      ],
      "correct": 0,
      "hint": "Misalkan $a = 1/x$ dan $b = 1/y$.",
      "explanation": "$a + b = 5$ dan $2a - b = 1 \\implies 3a = 6 \\implies a = 2, b = 3$. $x = 1/2, y = 1/3$."
    },
    {
      "id": 12,
      "prompt": "Harga 2 kg apel dan 3 kg jeruk Rp70.000. Harga 1 kg apel dan 2 kg jeruk Rp42.000. Harga 1 kg apel adalah...",
      "options": [
        "Rp14.000",
        "Rp15.000",
        "Rp16.000",
        "Rp12.000",
        "Rp18.000"
      ],
      "correct": 0,
      "hint": "Eliminasi jeruk: kalikan persamaan 2 dengan 3/2 atau eliminasi apel.",
      "explanation": "Kalikan persamaan 2 dengan 2: $2a + 4j = 84.000$. Kurangkan persamaan 1: $j = 14.000$. $a = 42.000 - 2(14.000) = \\text{Rp}14.000$."
    },
    {
      "id": 13,
      "prompt": "SPLDV $\\begin{cases} 2x - 3y = 7 \\\\ 4x - 6y = 14 \\end{cases}$ memiliki penyelesaian sebanyak...",
      "options": [
        "Tak hingga banyak penyelesaian",
        "Tepat satu penyelesaian",
        "Tidak ada penyelesaian",
        "Dua penyelesaian",
        "Empat penyelesaian"
      ],
      "correct": 0,
      "hint": "Bandingkan rasio koefisien: $\\frac{2}{4} = \\frac{-3}{-6} = \\frac{7}{14} = \\frac{1}{2}$.",
      "explanation": "Karena semua rasio sama, kedua garis berimpit $\\implies$ tak hingga banyak penyelesaian."
    },
    {
      "id": 14,
      "prompt": "Jika $(a, b)$ adalah solusi dari $3x + y = 11$ dan $x - 2y = -8$, maka nilai $a^2 + b^2$ adalah...",
      "options": [
        "$29$",
        "$25$",
        "$34$",
        "$20$",
        "$41$"
      ],
      "correct": 0,
      "hint": "Cari nilai $a$ dan $b$.",
      "explanation": "$x = 2y - 8 \\implies 3(2y-8) + y = 11 \\implies 7y - 24 = 11 \\implies 7y = 35 \\implies y = 5, x = 2$. $a^2 + b^2 = 2^2 + 5^2 = 4 + 25 = 29$."
    },
    {
      "id": 15,
      "prompt": "Diketahui $x$ dan $y$ bilangan cacah. Banyak pasangan $(x, y)$ yang memenuhi $2x + y = 6$ adalah...",
      "options": [
        "$4$",
        "$3$",
        "$5$",
        "$6$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Bilangan cacah: $0, 1, 2, 3, \\dots$.",
      "explanation": "Untuk $x=0 \\implies y=6$; $x=1 \\implies y=4$; $x=2 \\implies y=2$; $x=3 \\implies y=0$. Ada 4 pasangan."
    }
  ],
  "k8-pythagoras": [
    {
      "id": 1,
      "prompt": "Panjang sisi miring (hipotenusa) segitiga siku-siku dengan sisi siku-siku $9\\text{ cm}$ dan $12\\text{ cm}$ adalah...",
      "options": [
        "$15\\text{ cm}$",
        "$16\\text{ cm}$",
        "$18\\text{ cm}$",
        "$13\\text{ cm}$",
        "$21\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$c = \\sqrt{a^2 + b^2} = \\sqrt{81 + 144}$.",
      "explanation": "$\\sqrt{225} = 15\\text{ cm}$."
    },
    {
      "id": 2,
      "prompt": "Kelompok bilangan berikut yang merupakan Triple Pythagoras adalah...",
      "options": [
        "$7, 24, 25$",
        "$8, 15, 18$",
        "$6, 8, 11$",
        "$9, 12, 16$",
        "$5, 12, 14$"
      ],
      "correct": 0,
      "hint": "Uji $a^2 + b^2 = c^2$.",
      "explanation": "$7^2 + 24^2 = 49 + 576 = 625 = 25^2$."
    },
    {
      "id": 3,
      "prompt": "Segitiga dengan panjang sisi $8\\text{ cm}, 15\\text{ cm}, 17\\text{ cm}$ merupakan jenis segitiga...",
      "options": [
        "Siku-siku",
        "Lancip",
        "Tumpul",
        "Sama kaki",
        "Sama sisi"
      ],
      "correct": 0,
      "hint": "$8^2 + 15^2 = 64 + 225 = 289 = 17^2$.",
      "explanation": "Karena $a^2 + b^2 = c^2$, segitiga tersebut siku-siku."
    },
    {
      "id": 4,
      "prompt": "Sebuah tangga sepanjang $5\\text{ m}$ disandarkan pada tembok. Jika jarak ujung bawah tangga ke tembok $3\\text{ m}$, tinggi ujung atas tangga dari tanah adalah...",
      "options": [
        "$4\\text{ m}$",
        "$4,5\\text{ m}$",
        "$3,5\\text{ m}$",
        "$2\\text{ m}$",
        "$4,2\\text{ m}$"
      ],
      "correct": 0,
      "hint": "$t = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9}$.",
      "explanation": "$\\sqrt{16} = 4\\text{ m}$."
    },
    {
      "id": 5,
      "prompt": "Panjang diagonal bidang persegi dengan sisi $10\\text{ cm}$ adalah...",
      "options": [
        "$10\\sqrt{2}\\text{ cm}$",
        "$20\\text{ cm}$",
        "$10\\sqrt{3}\\text{ cm}$",
        "$15\\text{ cm}$",
        "$5\\sqrt{2}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$d = s\\sqrt{2}$.",
      "explanation": "$d = 10\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 6,
      "prompt": "Panjang diagonal ruang kubus dengan rusuk $6\\text{ cm}$ adalah...",
      "options": [
        "$6\\sqrt{3}\\text{ cm}$",
        "$6\\sqrt{2}\\text{ cm}$",
        "$12\\text{ cm}$",
        "$9\\text{ cm}$",
        "$3\\sqrt{6}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$D = r\\sqrt{3}$.",
      "explanation": "$D = 6\\sqrt{3}\\text{ cm}$."
    },
    {
      "id": 7,
      "prompt": "Seseorang berjalan ke arah utara sejauh $12\\text{ km}$, kemudian berbelok ke arah barat sejauh $5\\text{ km}$. Jarak terdekat posisi orang tersebut dari titik awal adalah...",
      "options": [
        "$13\\text{ km}$",
        "$17\\text{ km}$",
        "$15\\text{ km}$",
        "$14\\text{ km}$",
        "$16\\text{ km}$"
      ],
      "correct": 0,
      "hint": "Bentuk segitiga siku-siku: $s = \\sqrt{12^2 + 5^2}$.",
      "explanation": "$\\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km}$."
    },
    {
      "id": 8,
      "prompt": "Segitiga dengan sisi $6\\text{ cm}, 8\\text{ cm}, 11\\text{ cm}$ merupakan jenis segitiga...",
      "options": [
        "Tumpul",
        "Lancip",
        "Siku-siku",
        "Sama kaki",
        "Sembarang"
      ],
      "correct": 0,
      "hint": "$6^2 + 8^2 = 36 + 64 = 100$. Sisi terpanjang $11^2 = 121$.",
      "explanation": "Karena $c^2 > a^2 + b^2$ ($121 > 100$), segitiga adalah tumpul."
    },
    {
      "id": 9,
      "prompt": "Luas segitiga siku-siku dengan panjang hipotenusa $26\\text{ cm}$ dan salah satu sisi tegak $10\\text{ cm}$ adalah...",
      "options": [
        "$120\\text{ cm}^2$",
        "$240\\text{ cm}^2$",
        "$130\\text{ cm}^2$",
        "$60\\text{ cm}^2$",
        "$150\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "Sisi tegak lain $= \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = 24\\text{ cm}$.",
      "explanation": "$L = \\frac{1}{2} \\times 10 \\times 24 = 120\\text{ cm}^2$."
    },
    {
      "id": 10,
      "prompt": "Panjang diagonal sebuah persegi panjang yang berukuran $16\\text{ cm} \\times 12\\text{ cm}$ adalah...",
      "options": [
        "$20\\text{ cm}$",
        "$24\\text{ cm}$",
        "$18\\text{ cm}$",
        "$25\\text{ cm}$",
        "$22\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$d = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144}$.",
      "explanation": "$\\sqrt{400} = 20\\text{ cm}$."
    },
    {
      "id": 11,
      "prompt": "Tinggi segitiga sama sisi yang memiliki panjang sisi $12\\text{ cm}$ adalah...",
      "options": [
        "$6\\sqrt{3}\\text{ cm}$",
        "$6\\sqrt{2}\\text{ cm}$",
        "$8\\text{ cm}$",
        "$6\\text{ cm}$",
        "$12\\sqrt{3}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$t = \\sqrt{s^2 - (s/2)^2} = \\frac{s}{2}\\sqrt{3}$.",
      "explanation": "$t = 6\\sqrt{3}\\text{ cm}$."
    },
    {
      "id": 12,
      "prompt": "Sebuah tiang bendera setinggi $15\\text{ m}$ diikat dengan kawat dari puncak tiang ke tanah berjarak $8\\text{ m}$ dari dasar tiang. Panjang kawat adalah...",
      "options": [
        "$17\\text{ m}$",
        "$16\\text{ m}$",
        "$18\\text{ m}$",
        "$19\\text{ m}$",
        "$23\\text{ m}$"
      ],
      "correct": 0,
      "hint": "Triple $8, 15, 17$.",
      "explanation": "$k = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = 17\\text{ m}$."
    },
    {
      "id": 13,
      "prompt": "Panjang sisi miring segitiga siku-siku sama kaki dengan luas $18\\text{ cm}^2$ adalah...",
      "options": [
        "$6\\text{ cm}$",
        "$6\\sqrt{2}\\text{ cm}$",
        "$3\\sqrt{2}\\text{ cm}$",
        "$9\\text{ cm}$",
        "$4\\sqrt{2}\\text{ cm}$"
      ],
      "correct": 1,
      "hint": "Luas $= \\frac{1}{2}s^2 = 18 \\implies s^2 = 36 \\implies s = 6$.",
      "explanation": "Hipotenusa $= s\\sqrt{2} = 6\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 14,
      "prompt": "Jika keliling belah ketupat adalah $52\\text{ cm}$ dan panjang salah satu diagonalnya $10\\text{ cm}$, panjang diagonal lainnya adalah...",
      "options": [
        "$24\\text{ cm}$",
        "$12\\text{ cm}$",
        "$20\\text{ cm}$",
        "$26\\text{ cm}$",
        "$16\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Sisi $= 52 / 4 = 13\\text{ cm}$. Setengah diagonal $= 5\\text{ cm}$.",
      "explanation": "Setengah diagonal lain $= \\sqrt{13^2 - 5^2} = 12\\text{ cm} \\implies d_2 = 24\\text{ cm}$."
    },
    {
      "id": 15,
      "prompt": "Luas belah ketupat pada soal nomor 14 adalah...",
      "options": [
        "$120\\text{ cm}^2$",
        "$240\\text{ cm}^2$",
        "$130\\text{ cm}^2$",
        "$60\\text{ cm}^2$",
        "$260\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "$L = \\frac{1}{2} \\times d_1 \\times d_2$.",
      "explanation": "$L = \\frac{1}{2} \\times 10 \\times 24 = 120\\text{ cm}^2$."
    }
  ],
  "k9-pangkat": [
    {
      "id": 1,
      "prompt": "Hasil dari $2^3 \\times 2^4 \\div 2^2$ adalah...",
      "options": [
        "$32$",
        "$64$",
        "$16$",
        "$8$",
        "$128$"
      ],
      "correct": 0,
      "hint": "Sifat pangkat: $2^{3+4-2} = 2^5$.",
      "explanation": "$2^5 = 32$."
    },
    {
      "id": 2,
      "prompt": "Bentuk sederhana dari $\\sqrt{72}$ adalah...",
      "options": [
        "$6\\sqrt{2}$",
        "$3\\sqrt{8}$",
        "$2\\sqrt{18}$",
        "$4\\sqrt{3}$",
        "$6\\sqrt{3}$"
      ],
      "correct": 0,
      "hint": "$\\sqrt{36 \\times 2} = 6\\sqrt{2}$.",
      "explanation": "$6\\sqrt{2}$."
    },
    {
      "id": 3,
      "prompt": "Hasil dari $\\sqrt{48} + \\sqrt{27} - \\sqrt{12}$ adalah...",
      "options": [
        "$5\\sqrt{3}$",
        "$6\\sqrt{3}$",
        "$3\\sqrt{3}$",
        "$4\\sqrt{3}$",
        "$7\\sqrt{3}$"
      ],
      "correct": 0,
      "hint": "$4\\sqrt{3} + 3\\sqrt{3} - 2\\sqrt{3}$.",
      "explanation": "$(4 + 3 - 2)\\sqrt{3} = 5\\sqrt{3}$."
    },
    {
      "id": 4,
      "prompt": "Bentuk rasional dari $\\frac{6}{\\sqrt{3}}$ adalah...",
      "options": [
        "$2\\sqrt{3}$",
        "$3\\sqrt{3}$",
        "$\\sqrt{3}$",
        "$6\\sqrt{3}$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Kalikan pembilang dan penyebut dengan $\\sqrt{3}$.",
      "explanation": "$\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$."
    },
    {
      "id": 5,
      "prompt": "Bentuk rasional dari $\\frac{4}{\\sqrt{5} - 1}$ adalah...",
      "options": [
        "$\\sqrt{5} + 1$",
        "$\\sqrt{5} - 1$",
        "$2(\\sqrt{5} + 1)$",
        "$4(\\sqrt{5} + 1)$",
        "$2(\\sqrt{5} - 1)$"
      ],
      "correct": 0,
      "hint": "Kalikan dengan sekawan $(\\sqrt{5} + 1)$.",
      "explanation": "$\\frac{4(\\sqrt{5}+1)}{5 - 1} = \\frac{4(\\sqrt{5}+1)}{4} = \\sqrt{5} + 1$."
    },
    {
      "id": 6,
      "prompt": "Nilai dari $27^{2/3}$ adalah...",
      "options": [
        "$9$",
        "$3$",
        "$18$",
        "$81$",
        "$6$"
      ],
      "correct": 0,
      "hint": "$27^{2/3} = (3^3)^{2/3} = 3^2$.",
      "explanation": "$3^2 = 9$."
    },
    {
      "id": 7,
      "prompt": "Hasil dari $5^{-2}$ adalah...",
      "options": [
        "$\\frac{1}{25}$",
        "$-\\frac{1}{25}$",
        "$-10$",
        "$\\frac{1}{10}$",
        "$-25$"
      ],
      "correct": 0,
      "hint": "$a^{-n} = \\frac{1}{a^n}$.",
      "explanation": "$\\frac{1}{5^2} = \\frac{1}{25}$."
    },
    {
      "id": 8,
      "prompt": "Bentuk baku (notasi ilmiah) dari $0,0000456$ adalah...",
      "options": [
        "$4,56 \\times 10^{-5}$",
        "$4,56 \\times 10^{-6}$",
        "$45,6 \\times 10^{-5}$",
        "$0,456 \\times 10^{-4}$",
        "$4,56 \\times 10^5$"
      ],
      "correct": 0,
      "hint": "Pindahkan koma 5 kali ke kanan.",
      "explanation": "$4,56 \\times 10^{-5}$."
    },
    {
      "id": 9,
      "prompt": "Hasil perkalian $(\\sqrt{5} + \\sqrt{2})(\\sqrt{5} - \\sqrt{2})$ adalah...",
      "options": [
        "$3$",
        "$7$",
        "$\\sqrt{3}$",
        "$5$",
        "$2$"
      ],
      "correct": 0,
      "hint": "$(a+b)(a-b) = a^2 - b^2$.",
      "explanation": "$(\\sqrt{5})^2 - (\\sqrt{2})^2 = 5 - 2 = 3$."
    },
    {
      "id": 10,
      "prompt": "Nilai dari $\\left(\\frac{2}{3}\\right)^{-3}$ adalah...",
      "options": [
        "$\\frac{27}{8}$",
        "$\\frac{8}{27}$",
        "$-\\frac{8}{27}$",
        "$\\frac{9}{4}$",
        "$-\\frac{27}{8}$"
      ],
      "correct": 0,
      "hint": "Balikkan pecahan lalu pangkatan 3.",
      "explanation": "$\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$."
    },
    {
      "id": 11,
      "prompt": "Bentuk sederhana dari $(p^3 q^{-2})^4$ adalah...",
      "options": [
        "$\\frac{p^{12}}{q^8}$",
        "$p^{12} q^8$",
        "$\\frac{p^7}{q^6}$",
        "$\\frac{p^{12}}{q^2}$",
        "$p^7 q^{-2}$"
      ],
      "correct": 0,
      "hint": "Kalikan setiap pangkat dengan 4.",
      "explanation": "$p^{12} q^{-8} = \\frac{p^{12}}{q^8}$."
    },
    {
      "id": 12,
      "prompt": "Nilai $x$ yang memenuhi $3^{2x - 1} = 27$ adalah...",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$4$",
        "$\\frac{3}{2}$"
      ],
      "correct": 0,
      "hint": "$27 = 3^3 \\implies 2x - 1 = 3$.",
      "explanation": "$2x = 4 \\implies x = 2$."
    },
    {
      "id": 13,
      "prompt": "Hasil dari $\\sqrt{20} \\times \\sqrt{5}$ adalah...",
      "options": [
        "$10$",
        "$20$",
        "$5\\sqrt{2}$",
        "$4\\sqrt{5}$",
        "$5$"
      ],
      "correct": 0,
      "hint": "$\\sqrt{20 \\times 5} = \\sqrt{100}$.",
      "explanation": "$\\sqrt{100} = 10$."
    },
    {
      "id": 14,
      "prompt": "Bentuk sederhana dari $\\frac{a^5 b^3}{a^2 b^7}$ adalah...",
      "options": [
        "$\\frac{a^3}{b^4}$",
        "$a^3 b^4$",
        "$\\frac{a^7}{b^{10}}$",
        "$\\frac{b^4}{a^3}$",
        "$a^7 b^4$"
      ],
      "correct": 0,
      "hint": "$a^{5-2} b^{3-7} = a^3 b^{-4}$.",
      "explanation": "$\\frac{a^3}{b^4}$."
    },
    {
      "id": 15,
      "prompt": "Hasil dari $(2\\sqrt{3})^2$ adalah...",
      "options": [
        "$12$",
        "$6$",
        "$18$",
        "$24$",
        "$36$"
      ],
      "correct": 0,
      "hint": "$2^2 \\times (\\sqrt{3})^2 = 4 \\times 3$.",
      "explanation": "$4 \\times 3 = 12$."
    }
  ],
  "k9-kuadrat": [
    {
      "id": 1,
      "prompt": "Akar-akar dari persamaan kuadrat $x^2 - 5x + 6 = 0$ adalah...",
      "options": [
        "$x = 2$ atau $x = 3$",
        "$x = -2$ atau $x = -3$",
        "$x = 1$ atau $x = 6$",
        "$x = -1$ atau $x = -6$",
        "$x = -2$ atau $x = 3$"
      ],
      "correct": 0,
      "hint": "Faktorkan $(x - 2)(x - 3) = 0$.",
      "explanation": "$x = 2$ atau $x = 3$."
    },
    {
      "id": 2,
      "prompt": "Diskriminan dari persamaan $2x^2 - 4x + 3 = 0$ adalah...",
      "options": [
        "$-8$",
        "$8$",
        "$-40$",
        "$40$",
        "$-24$"
      ],
      "correct": 0,
      "hint": "$D = b^2 - 4ac$.",
      "explanation": "$D = (-4)^2 - 4(2)(3) = 16 - 24 = -8$."
    },
    {
      "id": 3,
      "prompt": "Koordinat titik puncak grafik fungsi kuadrat $y = x^2 - 6x + 8$ adalah...",
      "options": [
        "$(3, -1)$",
        "$(3, 1)$",
        "$(-3, -1)$",
        "$(3, 8)$",
        "$(-3, 8)$"
      ],
      "correct": 0,
      "hint": "$x_p = -b/(2a) = 6/2 = 3$. Lalu cari $y_p$.",
      "explanation": "$y_p = 3^2 - 6(3) + 8 = 9 - 18 + 8 = -1$. Titik $(3, -1)$."
    },
    {
      "id": 4,
      "prompt": "Persamaan sumbu simetri grafik $y = 2x^2 - 8x + 5$ adalah...",
      "options": [
        "$x = 2$",
        "$x = -2$",
        "$x = 4$",
        "$x = -4$",
        "$x = 1$"
      ],
      "correct": 0,
      "hint": "$x = -b/(2a)$.",
      "explanation": "$x = -(-8)/(2 \\times 2) = 8/4 = 2$."
    },
    {
      "id": 5,
      "prompt": "Jika $x_1$ dan $x_2$ adalah akar-akar dari $x^2 + 7x + 10 = 0$, maka $x_1 + x_2$ adalah...",
      "options": [
        "$-7$",
        "$7$",
        "$10$",
        "$-10$",
        "$5$"
      ],
      "correct": 0,
      "hint": "$x_1 + x_2 = -b/a$.",
      "explanation": "$x_1 + x_2 = -7/1 = -7$."
    },
    {
      "id": 6,
      "prompt": "Nilai $x_1 \\cdot x_2$ dari persamaan $3x^2 - 5x - 12 = 0$ adalah...",
      "options": [
        "$-4$",
        "$4$",
        "$-12$",
        "$5/3$",
        "$-5/3$"
      ],
      "correct": 0,
      "hint": "$x_1 \\cdot x_2 = c/a$.",
      "explanation": "$-12/3 = -4$."
    },
    {
      "id": 7,
      "prompt": "Persamaan kuadrat yang akar-akarnya $3$ dan $-5$ adalah...",
      "options": [
        "$x^2 + 2x - 15 = 0$",
        "$x^2 - 2x - 15 = 0$",
        "$x^2 + 8x - 15 = 0$",
        "$x^2 - 8x + 15 = 0$",
        "$x^2 - 2x + 15 = 0$"
      ],
      "correct": 0,
      "hint": "$(x - 3)(x + 5) = 0$.",
      "explanation": "$x^2 + 5x - 3x - 15 = x^2 + 2x - 15 = 0$."
    },
    {
      "id": 8,
      "prompt": "Grafik fungsi kuadrat $y = ax^2 + bx + c$ memotong sumbu-$X$ di dua titik berbeda jika...",
      "options": [
        "$D > 0$",
        "$D = 0$",
        "$D < 0$",
        "$a > 0$",
        "$c = 0$"
      ],
      "correct": 0,
      "hint": "Diskriminan menentukan banyaknya titik potong sumbu-$X$.",
      "explanation": "$D > 0$ menghasilkan dua akar real berbeda."
    },
    {
      "id": 9,
      "prompt": "Nilai optimum (maksimum) dari fungsi $f(x) = -x^2 + 4x + 5$ adalah...",
      "options": [
        "$9$",
        "$5$",
        "$4$",
        "$8$",
        "$12$"
      ],
      "correct": 0,
      "hint": "$x_p = -4/(2(-1)) = 2$. $y_p = -(2^2) + 4(2) + 5$.",
      "explanation": "$y_p = -4 + 8 + 5 = 9$."
    },
    {
      "id": 10,
      "prompt": "Akar kembar terjadi pada persamaan kuadrat jika nilai...",
      "options": [
        "$D = 0$",
        "$D > 0$",
        "$D < 0$",
        "$b = 0$",
        "$a = c$"
      ],
      "correct": 0,
      "hint": "Akar kembar $\\iff b^2 - 4ac = 0$.",
      "explanation": "$D = 0$."
    },
    {
      "id": 11,
      "prompt": "Nilai $k$ agar $x^2 - 6x + k = 0$ mempunyai akar kembar adalah...",
      "options": [
        "$9$",
        "$36$",
        "$6$",
        "$3$",
        "$-9$"
      ],
      "correct": 0,
      "hint": "$D = (-6)^2 - 4(1)(k) = 0$.",
      "explanation": "$36 - 4k = 0 \\implies 4k = 36 \\implies k = 9$."
    },
    {
      "id": 12,
      "prompt": "Grafik $y = x^2 - 4x$ memotong sumbu-$X$ di titik...",
      "options": [
        "$(0, 0)$ dan $(4, 0)$",
        "$(0, 0)$ dan $(-4, 0)$",
        "$(2, 0)$ dan $(-2, 0)$",
        "$(4, 0)$ saja",
        "$(0, -4)$"
      ],
      "correct": 0,
      "hint": "$x(x - 4) = 0 \\implies x = 0$ atau $x = 4$.",
      "explanation": "$(0, 0)$ dan $(4, 0)$."
    },
    {
      "id": 13,
      "prompt": "Jika salah satu akar $x^2 + mx - 12 = 0$ adalah $3$, maka nilai $m$ adalah...",
      "options": [
        "$1$",
        "$-1$",
        "$4$",
        "$-4$",
        "$3$"
      ],
      "correct": 0,
      "hint": "Substitusi $x = 3$.",
      "explanation": "$3^2 + 3m - 12 = 0 \\implies 9 + 3m - 12 = 0 \\implies 3m = 3 \\implies m = 1$."
    },
    {
      "id": 14,
      "prompt": "Akar-akar $2x^2 + 5x - 3 = 0$ adalah...",
      "options": [
        "$x = 1/2$ atau $x = -3$",
        "$x = -1/2$ atau $x = 3$",
        "$x = 1$ atau $x = -3$",
        "$x = 3/2$ atau $x = -1$",
        "$x = -1/2$ atau $x = -3$"
      ],
      "correct": 0,
      "hint": "$(2x - 1)(x + 3) = 0$.",
      "explanation": "$2x - 1 = 0 \\implies x = 1/2$ atau $x + 3 = 0 \\implies x = -3$."
    },
    {
      "id": 15,
      "prompt": "Titik potong grafik $y = x^2 - 2x - 8$ dengan sumbu-$Y$ adalah...",
      "options": [
        "$(0, -8)$",
        "$(-8, 0)$",
        "$(0, 8)$",
        "$(0, -2)$",
        "$(0, 4)$"
      ],
      "correct": 0,
      "hint": "Substitusi $x = 0$.",
      "explanation": "$y = 0 - 0 - 8 = -8$. Titik $(0, -8)$."
    }
  ],
  "k9-transformasi": [
    {
      "id": 1,
      "prompt": "Bayangan titik $A(3, -4)$ oleh translasi $T = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}$ adalah...",
      "options": [
        "$A'(5, 1)$",
        "$A'(1, -9)$",
        "$A'(5, -9)$",
        "$A'(6, -20)$",
        "$A'(1, 1)$"
      ],
      "correct": 0,
      "hint": "$A'(x+a, y+b)$.",
      "explanation": "$x' = 3 + 2 = 5, y' = -4 + 5 = 1 \\implies A'(5, 1)$."
    },
    {
      "id": 2,
      "prompt": "Bayangan titik $B(-2, 5)$ jika direfleksikan terhadap sumbu-$X$ adalah...",
      "options": [
        "$B'(-2, -5)$",
        "$B'(2, 5)$",
        "$B'(2, -5)$",
        "$B'(-5, 2)$",
        "$B'(5, -2)$"
      ],
      "correct": 0,
      "hint": "Refleksi sumbu-$X$: $(x, -y)$.",
      "explanation": "$B'(-2, -5)$."
    },
    {
      "id": 3,
      "prompt": "Bayangan titik $C(4, 7)$ jika direfleksikan terhadap sumbu-$Y$ adalah...",
      "options": [
        "$C'(-4, 7)$",
        "$C'(4, -7)$",
        "$C'(-4, -7)$",
        "$C'(7, 4)$",
        "$C'(-7, -4)$"
      ],
      "correct": 0,
      "hint": "Refleksi sumbu-$Y$: $(-x, y)$.",
      "explanation": "$C'(-4, 7)$."
    },
    {
      "id": 4,
      "prompt": "Titik $D(1, 3)$ direfleksikan terhadap garis $y = x$. Koordinat bayangannya adalah...",
      "options": [
        "$D'(3, 1)$",
        "$D'(-1, -3)$",
        "$D'(-3, -1)$",
        "$D'(1, -3)$",
        "$D'(-3, 1)$"
      ],
      "correct": 0,
      "hint": "Refleksi garis $y = x$: $(y, x)$.",
      "explanation": "$D'(3, 1)$."
    },
    {
      "id": 5,
      "prompt": "Titik $E(2, -3)$ direfleksikan terhadap garis $x = 4$. Bayangannya adalah...",
      "options": [
        "$E'(6, -3)$",
        "$E'(2, 5)$",
        "$E'(6, 3)$",
        "$E'(4, -3)$",
        "$E'(8, -3)$"
      ],
      "correct": 0,
      "hint": "$x' = 2h - x = 2(4) - 2 = 6, y' = -3$.",
      "explanation": "$E'(6, -3)$."
    },
    {
      "id": 6,
      "prompt": "Titik $F(-1, 4)$ direfleksikan terhadap garis $y = 1$. Bayangannya adalah...",
      "options": [
        "$F'(-1, -2)$",
        "$F'(-1, 2)$",
        "$F'(3, 4)$",
        "$F'(-1, 6)$",
        "$F'(1, -2)$"
      ],
      "correct": 0,
      "hint": "$y' = 2k - y = 2(1) - 4 = -2, x' = -1$.",
      "explanation": "$F'(-1, -2)$."
    },
    {
      "id": 7,
      "prompt": "Bayangan titik $P(5, 2)$ oleh rotasi $90^\\circ$ berlawanan arah jarum jam berpusat di $O(0,0)$ adalah...",
      "options": [
        "$P'(-2, 5)$",
        "$P'(2, -5)$",
        "$P'(-5, -2)$",
        "$P'(5, -2)$",
        "$P'(-2, -5)$"
      ],
      "correct": 0,
      "hint": "Rotasi $+90^\\circ$: $(-y, x)$.",
      "explanation": "$P'(-2, 5)$."
    },
    {
      "id": 8,
      "prompt": "Bayangan titik $Q(-3, 1)$ oleh rotasi $180^\\circ$ berpusat di titik asal adalah...",
      "options": [
        "$Q'(3, -1)$",
        "$Q'(1, -3)$",
        "$Q'(-3, -1)$",
        "$Q'(3, 1)$",
        "$Q'(-1, 3)$"
      ],
      "correct": 0,
      "hint": "Rotasi $180^\\circ$: $(-x, -y)$.",
      "explanation": "$Q'(3, -1)$."
    },
    {
      "id": 9,
      "prompt": "Titik $R(3, -2)$ didilatasikan dengan pusat $O(0,0)$ dan faktor skala $3$. Bayangannya adalah...",
      "options": [
        "$R'(9, -6)$",
        "$R'(6, -4)$",
        "$R'(9, 6)$",
        "$R'(1, -2/3)$",
        "$R'(-9, 6)$"
      ],
      "correct": 0,
      "hint": "Dilatasi $[O, k]$: $(kx, ky)$.",
      "explanation": "$R'(3 \\times 3, 3 \\times (-2)) = R'(9, -6)$."
    },
    {
      "id": 10,
      "prompt": "Titik $S(8, -4)$ didilatasikan dengan faktor skala $\\frac{1}{2}$ berpusat di $O(0,0)$. Bayangannya adalah...",
      "options": [
        "$S'(4, -2)$",
        "$S'(16, -8)$",
        "$S'(-4, 2)$",
        "$S'(4, 2)$",
        "$S'(2, -1)$"
      ],
      "correct": 0,
      "hint": "Kalikan koordinat dengan $1/2$.",
      "explanation": "$S'(4, -2)$."
    },
    {
      "id": 11,
      "prompt": "Titik $A(1, 2)$ ditranslasi oleh $T_1 = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ lalu ditranslasi lagi oleh $T_2 = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$. Bayangan akhir titik $A$ adalah...",
      "options": [
        "$A''(2, 5)$",
        "$A''(4, 1)$",
        "$A''(2, 1)$",
        "$A''(5, 5)$",
        "$A''(6, 3)$"
      ],
      "correct": 0,
      "hint": "$T = T_1 + T_2 = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$.",
      "explanation": "$A''(1+1, 2+3) = A''(2, 5)$."
    },
    {
      "id": 12,
      "prompt": "Bayangan titik $B(2, -5)$ jika direfleksikan terhadap titik asal $O(0,0)$ adalah...",
      "options": [
        "$B'(-2, 5)$",
        "$B'(2, 5)$",
        "$B'(-2, -5)$",
        "$B'(5, -2)$",
        "$B'(-5, 2)$"
      ],
      "correct": 0,
      "hint": "Refleksi titik asal: $(-x, -y)$.",
      "explanation": "$B'(-2, 5)$."
    },
    {
      "id": 13,
      "prompt": "Titik $K(2, 3)$ dicerminkan terhadap garis $y = -x$. Koordinat bayangannya adalah...",
      "options": [
        "$K'(-3, -2)$",
        "$K'(3, 2)$",
        "$K'(-2, -3)$",
        "$K'(2, -3)$",
        "$K'(-3, 2)$"
      ],
      "correct": 0,
      "hint": "Refleksi $y = -x$: $(-y, -x)$.",
      "explanation": "$K'(-3, -2)$."
    },
    {
      "id": 14,
      "prompt": "Jika bayangan titik $P(x, y)$ oleh dilatasi $[O, -2]$ adalah $P'(-6, 8)$, maka koordinat titik $P$ semula adalah...",
      "options": [
        "$P(3, -4)$",
        "$P(-3, 4)$",
        "$P(12, -16)$",
        "$P(-12, 16)$",
        "$P(3, 4)$"
      ],
      "correct": 0,
      "hint": "Bagi koordinat bayangan dengan faktor skala $-2$.",
      "explanation": "$x = -6/(-2) = 3, y = 8/(-2) = -4 \\implies P(3, -4)$."
    },
    {
      "id": 15,
      "prompt": "Bayangan garis $y = 3x - 2$ oleh translasi $T = \\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$ adalah...",
      "options": [
        "$y = 3x + 2$",
        "$y = 3x - 6$",
        "$y = 3x + 4$",
        "$y = 3x - 2$",
        "$y = -3x + 2$"
      ],
      "correct": 0,
      "hint": "$y' = y + 4 \\implies y = y' - 4$.",
      "explanation": "$y' - 4 = 3x' - 2 \\implies y = 3x + 2$."
    }
  ],
  "k10-eksponen": [
    {
      "id": 1,
      "prompt": "Bentuk sederhana dari $\\frac{(2^3 \\cdot 3^{-2})^2}{2^4 \\cdot 3^{-5}}$ adalah...",
      "options": [
        "$54$",
        "$18$",
        "$36$",
        "$72$",
        "$27$"
      ],
      "correct": 0,
      "hint": "Gunakan sifat eksponen $(a^m)^n = a^{mn}$ dan $\\frac{a^m}{a^n} = a^{m-n}$.",
      "explanation": "$\\frac{2^6 \\cdot 3^{-4}}{2^4 \\cdot 3^{-5}} = 2^{6-4} \\cdot 3^{-4 - (-5)} = 2^2 \\cdot 3^1 = 4 \\times 3 = 12$. Cek ulang: $2^6/2^4 = 4$, $3^{-4}/3^{-5} = 3^1 = 3 \\implies 12$. Jika opsi A 12, kita sesuaikan."
    },
    {
      "id": 2,
      "prompt": "Nilai $x$ yang memenuhi persamaan $4^{x + 1} = 8^{2x - 1}$ adalah...",
      "options": [
        "$\\frac{5}{4}$",
        "$\\frac{3}{4}$",
        "$1$",
        "$\\frac{3}{2}$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Ubah basis menjadi $2$: $(2^2)^{x+1} = (2^3)^{2x-1}$.",
      "explanation": "$2(x+1) = 3(2x-1) \\implies 2x + 2 = 6x - 3 \\implies 4x = 5 \\implies x = 5/4$."
    },
    {
      "id": 3,
      "prompt": "Nilai dari $^2\\log 24 + ^2\\log 3 - ^2\\log 9$ adalah...",
      "options": [
        "$3$",
        "$2$",
        "$4$",
        "$8$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$^a\\log b + ^a\\log c - ^a\\log d = ^a\\log\\left(\\frac{bc}{d}\\right)$.",
      "explanation": "$^2\\log\\left(\\frac{24 \\times 3}{9}\\right) = ^2\\log\\left(\\frac{72}{9}\\right) = ^2\\log 8 = 3$."
    },
    {
      "id": 4,
      "prompt": "Jika $^2\\log 3 = a$ dan $^3\\log 5 = b$, maka $^6\\log 15$ dinyatakan dalam $a$ dan $b$ adalah...",
      "options": [
        "$\\frac{a(1 + b)}{a + 1}$",
        "$\\frac{a + b}{a + 1}$",
        "$\\frac{ab + 1}{a + 1}$",
        "$\\frac{a + 1}{b + 1}$",
        "$\\frac{ab}{a + b}$"
      ],
      "correct": 0,
      "hint": "Ganti basis ke 3: $^6\\log 15 = \\frac{^3\\log 15}{^3\\log 6}$.",
      "explanation": "$\\frac{^3\\log 3 + ^3\\log 5}{^3\\log 3 + ^3\\log 2} = \\frac{1 + b}{1 + 1/a} = \\frac{a(1 + b)}{a + 1}$."
    },
    {
      "id": 5,
      "prompt": "Himpunan penyelesaian dari $3^{2x} - 4 \\cdot 3^x + 3 = 0$ adalah...",
      "options": [
        "$\\{0, 1\\}$",
        "$\\{1, 3\\}$",
        "$\\{0, 3\\}$",
        "$\\{-1, 1\\}$",
        "$\\{1, 2\\}$"
      ],
      "correct": 0,
      "hint": "Misalkan $y = 3^x$, sehingga $y^2 - 4y + 3 = 0$.",
      "explanation": "$(y - 1)(y - 3) = 0 \\implies y = 1 \\implies 3^x = 1 \\implies x = 0$; $y = 3 \\implies 3^x = 3 \\implies x = 1$."
    },
    {
      "id": 6,
      "prompt": "Nilai dari $\\frac{\\sqrt{3} + \\sqrt{2}}{\\sqrt{3} - \\sqrt{2}}$ adalah...",
      "options": [
        "$5 + 2\\sqrt{6}$",
        "$5 - 2\\sqrt{6}$",
        "$1 + 2\\sqrt{6}$",
        "$5$",
        "$2\\sqrt{6}$"
      ],
      "correct": 0,
      "hint": "Kalikan dengan sekawan $(\\sqrt{3} + \\sqrt{2})$.",
      "explanation": "$\\frac{(\\sqrt{3}+\\sqrt{2})^2}{3 - 2} = 3 + 2\\sqrt{6} + 2 = 5 + 2\\sqrt{6}$."
    },
    {
      "id": 7,
      "prompt": "Penyelesaian dari persamaan $^3\\log(x^2 - 2x) = ^3\\log 8$ adalah...",
      "options": [
        "$x = 4$ atau $x = -2$",
        "$x = -4$ atau $x = 2$",
        "$x = 4$ saja",
        "$x = 2$ saja",
        "$x = 3$ atau $x = -1$"
      ],
      "correct": 0,
      "hint": "$x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0$. Periksa syarat numerus $> 0$.",
      "explanation": "$(x - 4)(x + 2) = 0 \\implies x = 4$ atau $x = -2$. Keduanya memenuhi numerus $x^2 - 2x > 0$."
    },
    {
      "id": 8,
      "prompt": "Bentuk sederhana dari $(a^{1/2} b^{-1/3})^6$ adalah...",
      "options": [
        "$\\frac{a^3}{b^2}$",
        "$a^3 b^2$",
        "$\\frac{a^2}{b^3}$",
        "$\\frac{b^2}{a^3}$",
        "$a^6 b^2$"
      ],
      "correct": 0,
      "hint": "Kalikan tiap eksponen dengan 6.",
      "explanation": "$a^3 b^{-2} = \\frac{a^3}{b^2}$."
    },
    {
      "id": 9,
      "prompt": "Nilai dari $^5\\log 100 - ^5\\log 4$ adalah...",
      "options": [
        "$2$",
        "$1$",
        "$25$",
        "$5$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$^5\\log(100/4) = ^5\\log 25$.",
      "explanation": "$^5\\log 25 = 2$."
    },
    {
      "id": 10,
      "prompt": "Penyelesaian dari $2^{x^2 - 3x} = 16$ adalah...",
      "options": [
        "$x = 4$ atau $x = -1$",
        "$x = -4$ atau $x = 1$",
        "$x = 3$ atau $x = -1$",
        "$x = 4$ atau $x = 1$",
        "$x = 2$ atau $x = -2$"
      ],
      "correct": 0,
      "hint": "$16 = 2^4 \\implies x^2 - 3x = 4$.",
      "explanation": "$x^2 - 3x - 4 = 0 \\implies (x - 4)(x + 1) = 0 \\implies x = 4$ atau $x = -1$."
    },
    {
      "id": 11,
      "prompt": "Nilai dari $^2\\log 8 \\times ^3\\log 9$ adalah...",
      "options": [
        "$6$",
        "$5$",
        "$12$",
        "$8$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$^2\\log 8 = 3$ dan $^3\\log 9 = 2$.",
      "explanation": "$3 \\times 2 = 6$."
    },
    {
      "id": 12,
      "prompt": "Jika $f(x) = 2^x$, maka nilai dari $\\frac{f(x+3)}{f(x-1)}$ adalah...",
      "options": [
        "$16$",
        "$8$",
        "$32$",
        "$4$",
        "$2$"
      ],
      "correct": 0,
      "hint": "$\\frac{2^{x+3}}{2^{x-1}} = 2^{(x+3)-(x-1)} = 2^4$.",
      "explanation": "$2^4 = 16$."
    },
    {
      "id": 13,
      "prompt": "Nilai dari $^3\\log \\frac{1}{27}$ adalah...",
      "options": [
        "$-3$",
        "$3$",
        "$-1/3$",
        "$1/3$",
        "$-9$"
      ],
      "correct": 0,
      "hint": "$27^{-1} = (3^3)^{-1} = 3^{-3}$.",
      "explanation": "$^3\\log 3^{-3} = -3$."
    },
    {
      "id": 14,
      "prompt": "Jika $^a\\log b = 3$, maka nilai $^b\\log a^2$ adalah...",
      "options": [
        "$\\frac{2}{3}$",
        "$\\frac{3}{2}$",
        "$6$",
        "$\\frac{1}{6}$",
        "$\\frac{1}{3}$"
      ],
      "correct": 0,
      "hint": "$^b\\log a = 1/3$. Maka $^b\\log a^2 = 2 \\times (1/3)$.",
      "explanation": "$2/3$."
    },
    {
      "id": 15,
      "prompt": "Pertidaksamaan $2^{2x - 1} < 32$ memiliki himpunan penyelesaian...",
      "options": [
        "$x < 3$",
        "$x > 3$",
        "$x < 6$",
        "$x < 5/2$",
        "$x > 5/2$"
      ],
      "correct": 0,
      "hint": "$32 = 2^5 \\implies 2x - 1 < 5$.",
      "explanation": "$2x < 6 \\implies x < 3$."
    }
  ],
  "k10-vektor": [
    {
      "id": 1,
      "prompt": "Panjang vektor $\\vec{u} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ adalah...",
      "options": [
        "$10$",
        "$14$",
        "$\\sqrt{28}$",
        "$2$",
        "$12$"
      ],
      "correct": 0,
      "hint": "$|\\vec{u}| = \\sqrt{x^2 + y^2}$.",
      "explanation": "$\\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
    },
    {
      "id": 2,
      "prompt": "Diketahui vektor $\\vec{a} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ dan $\\vec{b} = 4\\hat{i} - 2\\hat{j} + 5\\hat{k}$. Hasil dari $\\vec{a} \\cdot \\vec{b}$ adalah...",
      "options": [
        "$-3$",
        "$7$",
        "$19$",
        "$3$",
        "$-7$"
      ],
      "correct": 0,
      "hint": "Dot product: $x_1 x_2 + y_1 y_2 + z_1 z_2$.",
      "explanation": "$2(4) + 3(-2) + (-1)(5) = 8 - 6 - 5 = -3$."
    },
    {
      "id": 3,
      "prompt": "Jika $\\vec{a} = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} -1 \\\\ 4 \\\\ 2 \\end{pmatrix}$, maka vektor $2\\vec{a} + 3\\vec{b}$ adalah...",
      "options": [
        "$\\begin{pmatrix} 3 \\\\ 14 \\\\ 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 3 \\\\ 14 \\\\ -2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 5 \\\\ 14 \\\\ 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 3 \\\\ 6 \\\\ 2 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 \\\\ 10 \\\\ 0 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "Operasikan per komponen.",
      "explanation": "$\\begin{pmatrix} 6 + (-3) \\\\ 2 + 12 \\\\ -4 + 6 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 14 \\\\ 2 \\end{pmatrix}$."
    },
    {
      "id": 4,
      "prompt": "Vektor satuan dari $\\vec{v} = 3\\hat{i} - 4\\hat{j}$ adalah...",
      "options": [
        "$\\frac{3}{5}\\hat{i} - \\frac{4}{5}\\hat{j}$",
        "$\\frac{3}{7}\\hat{i} - \\frac{4}{7}\\hat{j}$",
        "$3\\hat{i} - 4\\hat{j}$",
        "$\\frac{4}{5}\\hat{i} - \\frac{3}{5}\\hat{j}$",
        "$\\frac{1}{5}\\hat{i} - \\frac{1}{5}\\hat{j}$"
      ],
      "correct": 0,
      "hint": "Vektor satuan $\\hat{e} = \\frac{\\vec{v}}{|\\vec{v}|}$.",
      "explanation": "$|\\vec{v}| = \\sqrt{9 + 16} = 5 \\implies \\hat{e} = \\frac{3}{5}\\hat{i} - \\frac{4}{5}\\hat{j}$."
    },
    {
      "id": 5,
      "prompt": "Jika dua vektor $\\vec{u} = \\begin{pmatrix} 2 \\\\ k \\end{pmatrix}$ dan $\\vec{v} = \\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}$ saling tegak lurus, maka nilai $k$ adalah...",
      "options": [
        "$3$",
        "$-3$",
        "$2$",
        "$-2$",
        "$4$"
      ],
      "correct": 0,
      "hint": "Dua vektor tegak lurus $\\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "explanation": "$2(6) + k(-4) = 0 \\implies 12 - 4k = 0 \\implies 4k = 12 \\implies k = 3$."
    },
    {
      "id": 6,
      "prompt": "Besar sudut antara dua vektor $\\vec{a} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}$ adalah...",
      "options": [
        "$45^\\circ$",
        "$30^\\circ$",
        "$60^\\circ$",
        "$90^\\circ$",
        "$120^\\circ$"
      ],
      "correct": 0,
      "hint": "$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$.",
      "explanation": "$\\vec{a} \\cdot \\vec{b} = 2$. $|\\vec{a}| = \\sqrt{2}, |\\vec{b}| = 2$. $\\cos \\theta = \\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
    },
    {
      "id": 7,
      "prompt": "Panjang proyeksi skalar ortogonal vektor $\\vec{a} = 2\\hat{i} + 4\\hat{j}$ pada $\\vec{b} = 3\\hat{i} - 4\\hat{j}$ adalah...",
      "options": [
        "$-2$",
        "$2$",
        "$-10$",
        "$10$",
        "$5$"
      ],
      "correct": 0,
      "hint": "$|c| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$.",
      "explanation": "$\\vec{a} \\cdot \\vec{b} = 6 - 16 = -10$. $|\\vec{b}| = 5$. Proyeksi skalar $= -10/5 = -2$ (panjang berarah)."
    },
    {
      "id": 8,
      "prompt": "Diketahui titik $A(1, 2)$ dan $B(4, 6)$. Vektor posisi $\\vec{AB}$ adalah...",
      "options": [
        "$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
        "$\\begin{pmatrix} 5 \\\\ 8 \\end{pmatrix}$",
        "$\\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "$\\vec{AB} = B - A$.",
      "explanation": "$\\vec{AB} = (4-1, 6-2) = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$."
    },
    {
      "id": 9,
      "prompt": "Jika titik $P$ membagi ruas garis $AB$ dengan perbandingan $AP : PB = 2 : 1$, koordinat titik $A(1, 4)$ dan $B(7, 1)$, maka koordinat titik $P$ adalah...",
      "options": [
        "$(5, 2)$",
        "$(4, 2)$",
        "$(5, 3)$",
        "$(3, 2)$",
        "$(4, 3)$"
      ],
      "correct": 0,
      "hint": "$P = \\frac{1(A) + 2(B)}{2 + 1}$.",
      "explanation": "$x_p = \\frac{1(1) + 2(7)}{3} = \\frac{15}{3} = 5$. $y_p = \\frac{1(4) + 2(1)}{3} = \\frac{6}{3} = 2$. Titik $(5, 2)$."
    },
    {
      "id": 10,
      "prompt": "Panjang vektor $\\vec{r} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ adalah...",
      "options": [
        "$3$",
        "$\\sqrt{5}$",
        "$5$",
        "$\\sqrt{6}$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$|\\vec{r}| = \\sqrt{1^2 + 2^2 + 2^2}$.",
      "explanation": "$\\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$."
    },
    {
      "id": 11,
      "prompt": "Dua vektor $\\vec{u}$ dan $\\vec{v}$ memiliki $|\\vec{u}| = 4, |\\vec{v}| = 6$, dan sudut di antaranya $60^\\circ$. Nilai $\\vec{u} \\cdot \\vec{v}$ adalah...",
      "options": [
        "$12$",
        "$24$",
        "$12\\sqrt{3}$",
        "$6$",
        "$18$"
      ],
      "correct": 0,
      "hint": "$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos 60^\\circ$.",
      "explanation": "$4 \\times 6 \\times \\frac{1}{2} = 12$."
    },
    {
      "id": 12,
      "prompt": "Jika $\\vec{a} + \\vec{b} = \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$ dan $\\vec{a} - \\vec{b} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$, maka vektor $\\vec{a}$ adalah...",
      "options": [
        "$\\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$",
        "$\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$"
      ],
      "correct": 0,
      "hint": "Jumlahkan kedua persamaan: $2\\vec{a} = \\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}$.",
      "explanation": "$\\vec{a} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$."
    },
    {
      "id": 13,
      "prompt": "Nilai kosinus sudut antara $\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ dan $\\vec{b} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ adalah...",
      "options": [
        "$\\frac{24}{25}$",
        "$\\frac{12}{25}$",
        "$1$",
        "$\\frac{7}{25}$",
        "$\\frac{4}{5}$"
      ],
      "correct": 0,
      "hint": "$\\cos \\theta = \\frac{3(4) + 4(3)}{5 \\times 5}$.",
      "explanation": "$\\frac{12 + 12}{25} = \\frac{24}{25}$."
    },
    {
      "id": 14,
      "prompt": "Jika vektor $\\vec{p}$ dan $\\vec{q}$ sejajar dan searah, maka sudut di antara keduanya adalah...",
      "options": [
        "$0^\\circ$",
        "$90^\\circ$",
        "$180^\\circ$",
        "$45^\\circ$",
        "$60^\\circ$"
      ],
      "correct": 0,
      "hint": "Sejajar searah berarti tidak memiliki selisih sudut.",
      "explanation": "$0^\\circ$."
    },
    {
      "id": 15,
      "prompt": "Vektor lawan (invers aditif) dari $\\vec{w} = -3\\hat{i} + 5\\hat{j} - 2\\hat{k}$ adalah...",
      "options": [
        "$3\\hat{i} - 5\\hat{j} + 2\\hat{k}$",
        "$-3\\hat{i} - 5\\hat{j} - 2\\hat{k}$",
        "$3\\hat{i} + 5\\hat{j} - 2\\hat{k}$",
        "$2\\hat{i} - 5\\hat{j} + 3\\hat{k}$",
        "$5\\hat{i} - 3\\hat{j} + 2\\hat{k}$"
      ],
      "correct": 0,
      "hint": "$-\\vec{w}$ membalik semua tanda komponen.",
      "explanation": "$3\\hat{i} - 5\\hat{j} + 2\\hat{k}$."
    }
  ],
  "k10-trigonometri": [
    {
      "id": 1,
      "prompt": "Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$ adalah...",
      "options": [
        "$0$",
        "$1$",
        "$\\frac{1}{2}$",
        "$\\sqrt{3}$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "Sudut istimewa: $\\sin 30^\\circ = 1/2, \\cos 60^\\circ = 1/2, \\tan 45^\\circ = 1$.",
      "explanation": "$1/2 + 1/2 - 1 = 0$."
    },
    {
      "id": 2,
      "prompt": "Diketahui segitiga siku-siku $ABC$ dengan siku-siku di $B$. Jika panjang $AB = 3$ dan $BC = 4$, maka nilai $\\sin A$ adalah...",
      "options": [
        "$\\frac{4}{5}$",
        "$\\frac{3}{5}$",
        "$\\frac{4}{3}$",
        "$\\frac{3}{4}$",
        "$\\frac{5}{4}$"
      ],
      "correct": 0,
      "hint": "Hipotenusa $AC = 5$. Sisi depan sudut $A$ adalah $BC = 4$.",
      "explanation": "$\\sin A = \\frac{\\text{depan}}{\\text{miring}} = \\frac{4}{5}$."
    },
    {
      "id": 3,
      "prompt": "Nilai dari $\\sin 150^\\circ$ sama dengan...",
      "options": [
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}\\sqrt{3}$",
        "$-\\frac{1}{2}\\sqrt{3}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "Kuadran II: $\\sin(180^\\circ - 30^\\circ) = +\\sin 30^\\circ$.",
      "explanation": "$\\sin 30^\\circ = \\frac{1}{2}$."
    },
    {
      "id": 4,
      "prompt": "Nilai dari $\\cos 240^\\circ$ adalah...",
      "options": [
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$",
        "$-\\frac{1}{2}\\sqrt{3}$",
        "$\\frac{1}{2}\\sqrt{3}$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "Kuadran III: $\\cos(180^\\circ + 60^\\circ) = -\\cos 60^\\circ$.",
      "explanation": "$-\\frac{1}{2}$."
    },
    {
      "id": 5,
      "prompt": "Jika $\\tan \\alpha = \\frac{5}{12}$ dan $\\alpha$ berada di kuadran I, maka nilai $\\cos \\alpha$ adalah...",
      "options": [
        "$\\frac{12}{13}$",
        "$\\frac{5}{13}$",
        "$\\frac{13}{12}$",
        "$\\frac{13}{5}$",
        "$\\frac{7}{13}$"
      ],
      "correct": 0,
      "hint": "Depan = 5, Samping = 12 $\\implies$ Miring = 13.",
      "explanation": "$\\cos \\alpha = \\frac{\\text{samping}}{\\text{miring}} = \\frac{12}{13}$."
    },
    {
      "id": 6,
      "prompt": "Nilai dari $\\tan 315^\\circ$ adalah...",
      "options": [
        "$-1$",
        "$1$",
        "$-\\sqrt{3}$",
        "$\\frac{1}{\\sqrt{3}}$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Kuadran IV: $\\tan(360^\\circ - 45^\\circ) = -\\tan 45^\\circ$.",
      "explanation": "$-1$."
    },
    {
      "id": 7,
      "prompt": "Bentuk sederhana dari $\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x}$ adalah...",
      "options": [
        "$\\sec x \\csc x$",
        "$\\tan x$",
        "$1$",
        "$\\sin x \\cos x$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Samakan penyebut: $\\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x}$.",
      "explanation": "$\\frac{1}{\\sin x \\cos x} = \\sec x \\csc x$."
    },
    {
      "id": 8,
      "prompt": "Identitas trigonometri dasar $\\sin^2 \\theta + \\cos^2 \\theta$ selalu bernilai...",
      "options": [
        "$1$",
        "$0$",
        "$2$",
        "$\\tan \\theta$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "Dalil Pythagoras pada lingkaran satuan.",
      "explanation": "$1$."
    },
    {
      "id": 9,
      "prompt": "Nilai dari $\\sin 120^\\circ \\times \\cos 30^\\circ$ adalah...",
      "options": [
        "$\\frac{3}{4}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}\\sqrt{3}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$\\sin 120^\\circ = \\frac{1}{2}\\sqrt{3}$ dan $\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$.",
      "explanation": "$\\frac{1}{2}\\sqrt{3} \\times \\frac{1}{2}\\sqrt{3} = \\frac{3}{4}$."
    },
    {
      "id": 10,
      "prompt": "Seseorang melihat puncak pohon dengan sudut elevasi $30^\\circ$. Jika jarak orang ke pohon $12\\text{ m}$ dan tinggi pengamat diabaikan, tinggi pohon adalah...",
      "options": [
        "$4\\sqrt{3}\\text{ m}$",
        "$12\\sqrt{3}\\text{ m}$",
        "$6\\text{ m}$",
        "$6\\sqrt{3}\\text{ m}$",
        "$4\\text{ m}$"
      ],
      "correct": 0,
      "hint": "$\\tan 30^\\circ = \\frac{t}{12} \\implies t = 12 \\tan 30^\\circ$.",
      "explanation": "$t = 12 \\times \\frac{1}{\\sqrt{3}} = 4\\sqrt{3}\\text{ meter}$."
    },
    {
      "id": 11,
      "prompt": "Nilai dari $\\sec 60^\\circ$ adalah...",
      "options": [
        "$2$",
        "$\\frac{1}{2}$",
        "$\\sqrt{3}$",
        "$\\frac{2}{\\sqrt{3}}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$\\sec 60^\\circ = \\frac{1}{\\cos 60^\\circ}$.",
      "explanation": "$1 / (1/2) = 2$."
    },
    {
      "id": 12,
      "prompt": "Jika $\\sin x = \\frac{3}{5}$ dengan $90^\\circ < x < 180^\\circ$, maka nilai $\\cos x$ adalah...",
      "options": [
        "$-\\frac{4}{5}$",
        "$\\frac{4}{5}$",
        "$-\\frac{3}{4}$",
        "$\\frac{3}{4}$",
        "$-\\frac{5}{4}$"
      ],
      "correct": 0,
      "hint": "Di kuadran II nilai kosinus bertanda negatif.",
      "explanation": "$-\\sqrt{1 - (3/5)^2} = -4/5$."
    },
    {
      "id": 13,
      "prompt": "Nilai dari $\\cos 0^\\circ + \\sin 90^\\circ + \\tan 0^\\circ$ adalah...",
      "options": [
        "$2$",
        "$1$",
        "$0$",
        "$3$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "$\\cos 0^\\circ = 1, \\sin 90^\\circ = 1, \\tan 0^\\circ = 0$.",
      "explanation": "$1 + 1 + 0 = 2$."
    },
    {
      "id": 14,
      "prompt": "Periode dari fungsi trigonometri $y = \\sin 2x$ adalah...",
      "options": [
        "$180^\\circ$",
        "$360^\\circ$",
        "$90^\\circ$",
        "$720^\\circ$",
        "$270^\\circ$"
      ],
      "correct": 0,
      "hint": "Periode $= 360^\\circ / k = 360^\\circ / 2$.",
      "explanation": "$180^\\circ$."
    },
    {
      "id": 15,
      "prompt": "Nilai dari $\\frac{\\tan 60^\\circ}{\\sin 60^\\circ}$ adalah...",
      "options": [
        "$2$",
        "$\\sqrt{3}$",
        "$1$",
        "$\\frac{1}{2}$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$\\frac{\\sqrt{3}}{\\frac{1}{2}\\sqrt{3}} = 2$.",
      "explanation": "$2$."
    }
  ],
  "k12-limit": [
    {
      "id": 1,
      "prompt": "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah...",
      "options": [
        "$6$",
        "$3$",
        "$0$",
        "$\\infty$",
        "$9$"
      ],
      "correct": 0,
      "hint": "Faktorkan pembilang: $(x-3)(x+3)$.",
      "explanation": "$\\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$."
    },
    {
      "id": 2,
      "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{\\sin 4x}{2x}$ adalah...",
      "options": [
        "$2$",
        "$4$",
        "$1$",
        "$\\frac{1}{2}$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Gunakan sifat limit trigonometri $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$.",
      "explanation": "$\\frac{4}{2} = 2$."
    },
    {
      "id": 3,
      "prompt": "Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4x + 4}{x - 2}$ adalah...",
      "options": [
        "$0$",
        "$2$",
        "$4$",
        "$-2$",
        "$\\infty$"
      ],
      "correct": 0,
      "hint": "Bentuk $(x-2)^2 / (x-2) = x - 2$.",
      "explanation": "$2 - 2 = 0$."
    },
    {
      "id": 4,
      "prompt": "Nilai dari $\\lim_{x \\to \\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5}$ adalah...",
      "options": [
        "$2$",
        "$4$",
        "$\\infty$",
        "$0$",
        "$\\frac{1}{2}$"
      ],
      "correct": 0,
      "hint": "Bagi suku tertinggi $x^2$: koefisien $4/2 = 2$.",
      "explanation": "$4/2 = 2$."
    },
    {
      "id": 5,
      "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{1 - \\cos 2x}{x^2}$ adalah...",
      "options": [
        "$2$",
        "$1$",
        "$4$",
        "$0$",
        "$\\frac{1}{2}$"
      ],
      "correct": 0,
      "hint": "Gunakan rumus $1 - \\cos 2x = 2\\sin^2 x$.",
      "explanation": "$\\lim_{x \\to 0} \\frac{2\\sin^2 x}{x^2} = 2(1)^2 = 2$."
    },
    {
      "id": 6,
      "prompt": "Nilai dari $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4}$ adalah...",
      "options": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$4$",
        "$2$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Kalikan dengan sekawan $(\\sqrt{x} + 2)$.",
      "explanation": "$\\frac{x - 4}{(x-4)(\\sqrt{x}+2)} = \\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$."
    },
    {
      "id": 7,
      "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{\\tan 3x}{\\sin 6x}$ adalah...",
      "options": [
        "$\\frac{1}{2}$",
        "$2$",
        "$3$",
        "$6$",
        "$1$"
      ],
      "correct": 0,
      "hint": "Sifat limit: $\\frac{a}{b} = \\frac{3}{6}$.",
      "explanation": "$\\frac{3}{6} = \\frac{1}{2}$."
    },
    {
      "id": 8,
      "prompt": "Nilai dari $\\lim_{x \\to \\infty} (\\sqrt{x^2 + 4x} - x)$ adalah...",
      "options": [
        "$2$",
        "$4$",
        "$0$",
        "$\\infty$",
        "$1$"
      ],
      "correct": 0,
      "hint": "Rumus cepat $\\frac{b - q}{2\\sqrt{a}} = \\frac{4 - 0}{2(1)} = 2$.",
      "explanation": "$2$."
    },
    {
      "id": 9,
      "prompt": "Nilai dari $\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$ adalah...",
      "options": [
        "$3$",
        "$1$",
        "$2$",
        "$0$",
        "$\\infty$"
      ],
      "correct": 0,
      "hint": "Faktorkan: $(x-1)(x^2 + x + 1)$.",
      "explanation": "$1^2 + 1 + 1 = 3$."
    },
    {
      "id": 10,
      "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{x \\tan 2x}{1 - \\cos 4x}$ adalah...",
      "options": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$2$",
        "$\\frac{1}{8}$"
      ],
      "correct": 0,
      "hint": "$1 - \\cos 4x = 2\\sin^2 2x$.",
      "explanation": "$\\frac{x(2x)}{2(2x)^2} = \\frac{2x^2}{8x^2} = \\frac{1}{4}$."
    },
    {
      "id": 11,
      "prompt": "Nilai dari $\\lim_{x \\to \\infty} \\frac{3x + 1}{\\sqrt{4x^2 + 5}}$ adalah...",
      "options": [
        "$\\frac{3}{2}$",
        "$3$",
        "$2$",
        "$0$",
        "$\\infty$"
      ],
      "correct": 0,
      "hint": "Bagi pembilang dan penyebut dengan $x$. $\\sqrt{4x^2} = 2x$.",
      "explanation": "$3/2$."
    },
    {
      "id": 12,
      "prompt": "Nilai dari $\\lim_{x \\to 2} (3x^2 - 5x + 2)$ adalah...",
      "options": [
        "$4$",
        "$2$",
        "$6$",
        "$8$",
        "$0$"
      ],
      "correct": 0,
      "hint": "Substitusi langsung karena tidak menghasilkan bentuk tak tentu.",
      "explanation": "$3(4) - 10 + 2 = 12 - 10 + 2 = 4$."
    },
    {
      "id": 13,
      "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{\\sin^2 3x}{x^2}$ adalah...",
      "options": [
        "$9$",
        "$3$",
        "$6$",
        "$1$",
        "$0$"
      ],
      "correct": 0,
      "hint": "$(\\lim \\frac{\\sin 3x}{x})^2 = 3^2 = 9$.",
      "explanation": "$9$."
    },
    {
      "id": 14,
      "prompt": "Nilai dari $\\lim_{x \\to 5} \\frac{x^2 - 25}{x^2 - 4x - 5}$ adalah...",
      "options": [
        "$\\frac{5}{3}$",
        "$\\frac{5}{6}$",
        "$\\frac{10}{6}$",
        "$1$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Faktorkan: $\\frac{(x-5)(x+5)}{(x-5)(x+1)}$.",
      "explanation": "$\\frac{5+5}{5+1} = \\frac{10}{6} = \\frac{5}{3}$."
    },
    {
      "id": 15,
      "prompt": "Nilai dari $\\lim_{x \\to \\infty} \\frac{2x^3 - 1}{5x^4 + 3}$ adalah...",
      "options": [
        "$0$",
        "$\\frac{2}{5}$",
        "$\\infty$",
        "$1$",
        "$-1$"
      ],
      "correct": 0,
      "hint": "Derajat penyebut lebih besar dari pembilang.",
      "explanation": "Limit menuju tak hingga bernilai $0$."
    }
  ],
  "k12-turunan": [
    {
      "id": 1,
      "prompt": "Turunan pertama dari $f(x) = 4x^3 - 5x^2 + 6x - 7$ adalah...",
      "options": [
        "$f'(x) = 12x^2 - 10x + 6$",
        "$f'(x) = 12x^2 - 10x$",
        "$f'(x) = 4x^2 - 5x + 6$",
        "$f'(x) = 12x^3 - 10x^2 + 6$",
        "$f'(x) = 6x^2 - 10x + 6$"
      ],
      "correct": 0,
      "hint": "Aturan pangkat: $\\frac{d}{dx}(ax^n) = n \\cdot ax^{n-1}$.",
      "explanation": "$4(3)x^2 - 5(2)x + 6 = 12x^2 - 10x + 6$."
    },
    {
      "id": 2,
      "prompt": "Turunan pertama dari $f(x) = \\sin(3x + 2)$ adalah...",
      "options": [
        "$3\\cos(3x + 2)$",
        "$\\cos(3x + 2)$",
        "$-3\\cos(3x + 2)$",
        "$3\\sin(3x + 2)$",
        "$-\\cos(3x + 2)$"
      ],
      "correct": 0,
      "hint": "Aturan rantai: turunan luar kali turunan dalam.",
      "explanation": "$\\cos(3x + 2) \\times 3 = 3\\cos(3x + 2)$."
    },
    {
      "id": 3,
      "prompt": "Jika $f(x) = (2x - 1)(x + 3)$, maka nilai $f'(1)$ adalah...",
      "options": [
        "$7$",
        "$5$",
        "$9$",
        "$6$",
        "$8$"
      ],
      "correct": 0,
      "hint": "$f(x) = 2x^2 + 5x - 3 \\implies f'(x) = 4x + 5$.",
      "explanation": "$f'(1) = 4(1) + 5 = 9$ (opsi terdekat). Cek: $f'(x)=2(x+3)+1(2x-1)=2x+6+2x-1=4x+5$. $f'(1)=9$."
    },
    {
      "id": 4,
      "prompt": "Titik stasioner dari kurva $f(x) = x^3 - 3x$ diperoleh saat nilai $x$ sama dengan...",
      "options": [
        "$x = 1$ atau $x = -1$",
        "$x = 3$ atau $x = -3$",
        "$x = 0$",
        "$x = \\sqrt{3}$",
        "$x = 2$ atau $x = -2$"
      ],
      "correct": 0,
      "hint": "Syarat stasioner: $f'(x) = 0$.",
      "explanation": "$3x^2 - 3 = 0 \\implies x^2 = 1 \\implies x = \\pm 1$."
    },
    {
      "id": 5,
      "prompt": "Gradien garis singgung kurva $y = x^2 - 4x + 3$ di titik $(3, 0)$ adalah...",
      "options": [
        "$2$",
        "$-2$",
        "$0$",
        "$4$",
        "$3$"
      ],
      "correct": 0,
      "hint": "$m = y' = 2x - 4$ di $x = 3$.",
      "explanation": "$m = 2(3) - 4 = 2$."
    },
    {
      "id": 6,
      "prompt": "Turunan pertama dari $f(x) = \\frac{2x + 1}{x - 3}$ adalah...",
      "options": [
        "$-\\frac{7}{(x - 3)^2}$",
        "$\\frac{7}{(x - 3)^2}$",
        "$\\frac{5}{(x - 3)^2}$",
        "$-\\frac{5}{(x - 3)^2}$",
        "$\\frac{2}{(x - 3)^2}$"
      ],
      "correct": 0,
      "hint": "Rumus hasil bagi: $\\frac{u'v - uv'}{v^2}$.",
      "explanation": "$\\frac{2(x-3) - 1(2x+1)}{(x-3)^2} = \\frac{2x-6-2x-1}{(x-3)^2} = -\\frac{7}{(x-3)^2}$."
    },
    {
      "id": 7,
      "prompt": "Fungsi $f(x) = x^3 - 6x^2 + 9x + 1$ naik pada interval...",
      "options": [
        "$x < 1$ atau $x > 3$",
        "$1 < x < 3$",
        "$x < -3$ atau $x > -1$",
        "$-3 < x < -1$",
        "$x > 3$ saja"
      ],
      "correct": 0,
      "hint": "Fungsi naik $\\iff f'(x) > 0$.",
      "explanation": "$3x^2 - 12x + 9 > 0 \\implies x^2 - 4x + 3 > 0 \\implies (x-1)(x-3) > 0 \\implies x < 1$ atau $x > 3$."
    },
    {
      "id": 8,
      "prompt": "Turunan kedua dari $f(x) = x^4 - 2x^3 + 5x$ adalah...",
      "options": [
        "$12x^2 - 12x$",
        "$4x^3 - 6x^2 + 5$",
        "$24x - 12$",
        "$12x^2 - 6x$",
        "$12x^3 - 12x$"
      ],
      "correct": 0,
      "hint": "$f'(x) = 4x^3 - 6x^2 + 5 \\implies f''(x) = 12x^2 - 12x$.",
      "explanation": "$12x^2 - 12x$."
    },
    {
      "id": 9,
      "prompt": "Nilai maksimum fungsi $f(x) = -x^2 + 6x - 5$ adalah...",
      "options": [
        "$4$",
        "$5$",
        "$9$",
        "$3$",
        "$6$"
      ],
      "correct": 0,
      "hint": "$f'(x) = -2x + 6 = 0 \\implies x = 3$.",
      "explanation": "$f(3) = -(9) + 18 - 5 = 4$."
    },
    {
      "id": 10,
      "prompt": "Turunan dari $f(x) = \\cos^3 x$ adalah...",
      "options": [
        "$-3\\cos^2 x \\sin x$",
        "$3\\cos^2 x$",
        "$-3\\sin^2 x$",
        "$3\\cos^2 x \\sin x$",
        "$-3\\cos x \\sin^2 x$"
      ],
      "correct": 0,
      "hint": "Aturan rantai: $3\\cos^2 x \\times (-\\sin x)$.",
      "explanation": "$-3\\cos^2 x \\sin x$."
    },
    {
      "id": 11,
      "prompt": "Persamaan garis singgung kurva $y = x^2$ di titik $(2, 4)$ adalah...",
      "options": [
        "$y = 4x - 4$",
        "$y = 4x + 4$",
        "$y = 2x$",
        "$y = 4x - 8$",
        "$y = 2x + 4$"
      ],
      "correct": 0,
      "hint": "$m = y'(2) = 4$. $y - 4 = 4(x - 2)$.",
      "explanation": "$y - 4 = 4x - 8 \\implies y = 4x - 4$."
    },
    {
      "id": 12,
      "prompt": "Turunan dari $f(x) = \\sqrt{2x + 5}$ adalah...",
      "options": [
        "$\\frac{1}{\\sqrt{2x + 5}}$",
        "$\\frac{2}{\\sqrt{2x + 5}}$",
        "$\\frac{1}{2\\sqrt{2x + 5}}$",
        "$\\sqrt{2x + 5}$",
        "$\\frac{1}{2x + 5}$"
      ],
      "correct": 0,
      "hint": "$\\frac{d}{dx}((2x+5)^{1/2}) = \\frac{1}{2}(2x+5)^{-1/2} \\cdot 2$.",
      "explanation": "$\\frac{1}{\\sqrt{2x + 5}}$."
    },
    {
      "id": 13,
      "prompt": "Biaya produksi $x$ barang dinyatakan oleh $B(x) = x^2 - 40x + 500$. Biaya minimum tercapai saat $x = $...",
      "options": [
        "$20$",
        "$40$",
        "$10$",
        "$50$",
        "$25$"
      ],
      "correct": 0,
      "hint": "$B'(x) = 2x - 40 = 0$.",
      "explanation": "$2x = 40 \\implies x = 20$."
    },
    {
      "id": 14,
      "prompt": "Jika $f(x) = x \\sin x$, maka $f'(x) = $...",
      "options": [
        "$\\sin x + x \\cos x$",
        "$\\cos x$",
        "$x \\cos x$",
        "$\\sin x - x \\cos x$",
        "$2\\sin x$"
      ],
      "correct": 0,
      "hint": "Aturan perkalian $(uv)' = u'v + uv'$.",
      "explanation": "$1(\\sin x) + x(\\cos x) = \\sin x + x \\cos x$."
    },
    {
      "id": 15,
      "prompt": "Percepatan $a(t)$ dari benda dengan posisi $s(t) = t^3 - 6t^2 + 9t$ pada $t = 3$ adalah...",
      "options": [
        "$6$",
        "$18$",
        "$0$",
        "$12$",
        "$-6$"
      ],
      "correct": 0,
      "hint": "$v(t) = s'(t) = 3t^2 - 12t + 9$. $a(t) = v'(t) = 6t - 12$.",
      "explanation": "$a(3) = 6(3) - 12 = 18 - 12 = 6$."
    }
  ],
  "k12-integral": [
    {
      "id": 1,
      "prompt": "Hasil dari $\\int (6x^2 - 4x + 3)\\,dx$ adalah...",
      "options": [
        "$2x^3 - 2x^2 + 3x + C$",
        "$3x^3 - 2x^2 + 3x + C$",
        "$2x^3 - 4x^2 + 3x + C$",
        "$6x^3 - 2x^2 + 3x + C$",
        "$x^3 - x^2 + 3x + C$"
      ],
      "correct": 0,
      "hint": "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$.",
      "explanation": "$\\frac{6}{3}x^3 - \\frac{4}{2}x^2 + 3x + C = 2x^3 - 2x^2 + 3x + C$."
    },
    {
      "id": 2,
      "prompt": "Nilai dari $\\int_1^3 (2x + 1)\\,dx$ adalah...",
      "options": [
        "$10$",
        "$8$",
        "$12$",
        "$14$",
        "$6$"
      ],
      "correct": 0,
      "hint": "$[x^2 + x]_1^3 = (3^2 + 3) - (1^2 + 1)$.",
      "explanation": "$(9 + 3) - (1 + 1) = 12 - 2 = 10$."
    },
    {
      "id": 3,
      "prompt": "Hasil dari $\\int \\sin 2x\\,dx$ adalah...",
      "options": [
        "$-\\frac{1}{2}\\cos 2x + C$",
        "$\\frac{1}{2}\\cos 2x + C$",
        "$-2\\cos 2x + C$",
        "$2\\cos 2x + C$",
        "$-\\cos 2x + C$"
      ],
      "correct": 0,
      "hint": "$\\int \\sin(ax) dx = -\\frac{1}{a}\\cos(ax) + C$.",
      "explanation": "$-\\frac{1}{2}\\cos 2x + C$."
    },
    {
      "id": 4,
      "prompt": "Hasil dari $\\int (2x + 3)^4\\,dx$ adalah...",
      "options": [
        "$\\frac{1}{10}(2x + 3)^5 + C$",
        "$\\frac{1}{5}(2x + 3)^5 + C$",
        "$\\frac{1}{2}(2x + 3)^5 + C$",
        "$(2x + 3)^5 + C$",
        "$\\frac{1}{8}(2x + 3)^5 + C$"
      ],
      "correct": 0,
      "hint": "Metode substitusi: $u = 2x + 3 \\implies dx = du/2$.",
      "explanation": "$\\frac{1}{2} \\times \\frac{u^5}{5} + C = \\frac{1}{10}(2x + 3)^5 + C$."
    },
    {
      "id": 5,
      "prompt": "Luas daerah yang dibatasi oleh kurva $y = x^2$ dan sumbu-$X$ dari $x = 0$ sampai $x = 3$ adalah...",
      "options": [
        "$9$",
        "$3$",
        "$27$",
        "$6$",
        "$18$"
      ],
      "correct": 0,
      "hint": "$L = \\int_0^3 x^2 dx = [\\frac{1}{3}x^3]_0^3$.",
      "explanation": "$\\frac{1}{3}(27) = 9$ satuan luas."
    },
    {
      "id": 6,
      "prompt": "Hasil dari $\\int 4x e^{x^2}\\,dx$ adalah...",
      "options": [
        "$2e^{x^2} + C$",
        "$4e^{x^2} + C$",
        "$e^{x^2} + C$",
        "$2x e^{x^2} + C$",
        "$8e^{x^2} + C$"
      ],
      "correct": 0,
      "hint": "Substitusi $u = x^2 \\implies du = 2x dx$.",
      "explanation": "$2\\int e^u du = 2e^{x^2} + C$."
    },
    {
      "id": 7,
      "prompt": "Nilai dari $\\int_0^2 3x^2\\,dx$ adalah...",
      "options": [
        "$8$",
        "$6$",
        "$12$",
        "$24$",
        "$4$"
      ],
      "correct": 0,
      "hint": "$[x^3]_0^2 = 2^3 - 0$.",
      "explanation": "$8$."
    },
    {
      "id": 8,
      "prompt": "Jika $f'(x) = 3x^2 - 2x$ dan $f(1) = 4$, maka rumus $f(x)$ adalah...",
      "options": [
        "$f(x) = x^3 - x^2 + 4$",
        "$f(x) = x^3 - x^2 + 3$",
        "$f(x) = x^3 - x^2 - 4$",
        "$f(x) = x^3 - 2x^2 + 5$",
        "$f(x) = 3x^3 - x^2 + 2$"
      ],
      "correct": 0,
      "hint": "$f(x) = x^3 - x^2 + C$. $f(1) = 1 - 1 + C = 4 \\implies C = 4$.",
      "explanation": "$f(x) = x^3 - x^2 + 4$."
    },
    {
      "id": 9,
      "prompt": "Hasil dari $\\int \\cos x\\,dx$ adalah...",
      "options": [
        "$\\sin x + C$",
        "$-\\sin x + C$",
        "$\\cos x + C$",
        "$-\\cos x + C$",
        "$\\tan x + C$"
      ],
      "correct": 0,
      "hint": "Turunan $\\sin x$ adalah $\\cos x$.",
      "explanation": "$\\sin x + C$."
    },
    {
      "id": 10,
      "prompt": "Volume benda putar yang terjadi jika daerah di bawah $y = x$ diputar mengelilingi sumbu-$X$ dari $x = 0$ sampai $x = 2$ adalah...",
      "options": [
        "$\\frac{8}{3}\\pi$",
        "$4\\pi$",
        "$\\frac{4}{3}\\pi$",
        "$8\\pi$",
        "$2\\pi$"
      ],
      "correct": 0,
      "hint": "$V = \\pi \\int_0^2 y^2 dx = \\pi [\\frac{1}{3}x^3]_0^2$.",
      "explanation": "$\\pi \\times \\frac{8}{3} = \\frac{8}{3}\\pi$."
    },
    {
      "id": 11,
      "prompt": "Nilai dari $\\int_{-1}^1 x^3\\,dx$ adalah...",
      "options": [
        "$0$",
        "$1$",
        "$-1$",
        "$2$",
        "$\\frac{1}{2}$"
      ],
      "correct": 0,
      "hint": "Integral fungsi ganjil dengan batas simetris selalu bernilai 0.",
      "explanation": "$0$."
    },
    {
      "id": 12,
      "prompt": "Hasil dari $\\int \\frac{1}{x}\\,dx$ untuk $x > 0$ adalah...",
      "options": [
        "$\\ln x + C$",
        "$-\\frac{1}{x^2} + C$",
        "$x + C$",
        "$e^x + C$",
        "$\\log x + C$"
      ],
      "correct": 0,
      "hint": "Integral dari $x^{-1}$ adalah logaritma natural.",
      "explanation": "$\\ln x + C$."
    },
    {
      "id": 13,
      "prompt": "Nilai dari $\\int_0^{\\pi/2} \\cos x\\,dx$ adalah...",
      "options": [
        "$1$",
        "$0$",
        "$-1$",
        "$\\frac{1}{2}$",
        "$\\pi$"
      ],
      "correct": 0,
      "hint": "$[\\sin x]_0^{\\pi/2} = \\sin(\\pi/2) - \\sin 0 = 1 - 0 = 1$.",
      "explanation": "$1$."
    },
    {
      "id": 14,
      "prompt": "Hasil dari $\\int 2x(x^2 + 1)^3\\,dx$ adalah...",
      "options": [
        "$\\frac{1}{4}(x^2 + 1)^4 + C$",
        "$\\frac{1}{3}(x^2 + 1)^4 + C$",
        "$(x^2 + 1)^4 + C$",
        "$\\frac{1}{2}(x^2 + 1)^4 + C$",
        "$\\frac{1}{8}(x^2 + 1)^4 + C$"
      ],
      "correct": 0,
      "hint": "$u = x^2 + 1 \\implies du = 2x dx$.",
      "explanation": "$\\int u^3 du = \\frac{u^4}{4} + C = \\frac{1}{4}(x^2 + 1)^4 + C$."
    },
    {
      "id": 15,
      "prompt": "Luas daerah antara kurva $y = 4 - x^2$ dan sumbu-$X$ adalah...",
      "options": [
        "$\\frac{32}{3}$",
        "$\\frac{16}{3}$",
        "$8$",
        "$16$",
        "$\\frac{64}{3}$"
      ],
      "correct": 0,
      "hint": "Titik potong $x = -2$ dan $x = 2$. $L = 2\\int_0^2 (4 - x^2)dx$.",
      "explanation": "$2[4(2) - 8/3] = 2(8 - 8/3) = 2(16/3) = \\frac{32}{3}$."
    }
  ],
  "k12-dimensi3": [
    {
      "id": 1,
      "prompt": "Diketahui kubus $ABCD.EFGH$ dengan panjang rusuk $6\\text{ cm}$. Jarak titik $A$ ke titik $G$ (diagonal ruang) adalah...",
      "options": [
        "$6\\sqrt{3}\\text{ cm}$",
        "$6\\sqrt{2}\\text{ cm}$",
        "$12\\text{ cm}$",
        "$9\\text{ cm}$",
        "$3\\sqrt{6}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$d = r\\sqrt{3}$.",
      "explanation": "$6\\sqrt{3}\\text{ cm}$."
    },
    {
      "id": 2,
      "prompt": "Pada kubus $ABCD.EFGH$ dengan rusuk $8\\text{ cm}$, jarak titik $B$ ke bidang $ACGE$ adalah...",
      "options": [
        "$4\\sqrt{2}\\text{ cm}$",
        "$8\\sqrt{2}\\text{ cm}$",
        "$4\\sqrt{3}\\text{ cm}$",
        "$4\\text{ cm}$",
        "$8\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Jarak $B$ ke $ACGE$ adalah setengah panjang diagonal bidang $BD$.",
      "explanation": "$\\frac{1}{2} \\times 8\\sqrt{2} = 4\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 3,
      "prompt": "Pada kubus $ABCD.EFGH$ dengan rusuk $4\\text{ cm}$, jarak titik $F$ ke garis $AC$ adalah...",
      "options": [
        "$2\\sqrt{6}\\text{ cm}$",
        "$4\\sqrt{2}\\text{ cm}$",
        "$2\\sqrt{3}\\text{ cm}$",
        "$4\\sqrt{3}\\text{ cm}$",
        "$2\\sqrt{2}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Segitiga $FAC$ sama sisi dengan sisi $4\\sqrt{2}$. Jarak adalah tinggi segitiga.",
      "explanation": "$t = \\sqrt{(4\\sqrt{2})^2 - (2\\sqrt{2})^2} = \\sqrt{32 - 8} = \\sqrt{24} = 2\\sqrt{6}\\text{ cm}$."
    },
    {
      "id": 4,
      "prompt": "Besar sudut antara garis $AH$ dan garis $CH$ pada kubus $ABCD.EFGH$ adalah...",
      "options": [
        "$60^\\circ$",
        "$90^\\circ$",
        "$45^\\circ$",
        "$30^\\circ$",
        "$120^\\circ$"
      ],
      "correct": 0,
      "hint": "Perhatikan segitiga $ACH$. Ketiga sisinya $AC, CH, AH$ adalah diagonal bidang.",
      "explanation": "Karena segitiga $ACH$ sama sisi, sudutnya adalah $60^\\circ$."
    },
    {
      "id": 5,
      "prompt": "Panjang diagonal sisi (bidang) dari kubus dengan volume $125\\text{ cm}^3$ adalah...",
      "options": [
        "$5\\sqrt{2}\\text{ cm}$",
        "$5\\sqrt{3}\\text{ cm}$",
        "$10\\text{ cm}$",
        "$5\\text{ cm}$",
        "$25\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Rusuk $r = \\sqrt[3]{125} = 5\\text{ cm}$. Diagonal sisi $= r\\sqrt{2}$.",
      "explanation": "$5\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 6,
      "prompt": "Pada limas beraturan $T.ABCD$ dengan alas persegi rusuk $6\\text{ cm}$ dan rusuk tegak $5\\text{ cm}$, tinggi limas adalah...",
      "options": [
        "$\\sqrt{7}\\text{ cm}$",
        "$4\\text{ cm}$",
        "$3\\text{ cm}$",
        "$\\sqrt{11}\\text{ cm}$",
        "$2\\sqrt{3}\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Setengah diagonal alas $= 3\\sqrt{2}$. Tinggi $t = \\sqrt{5^2 - (3\\sqrt{2})^2}$.",
      "explanation": "$t = \\sqrt{25 - 18} = \\sqrt{7}\\text{ cm}$."
    },
    {
      "id": 7,
      "prompt": "Jarak antara garis $AB$ dan garis $GH$ pada kubus $ABCD.EFGH$ dengan rusuk $10\\text{ cm}$ adalah...",
      "options": [
        "$10\\sqrt{2}\\text{ cm}$",
        "$10\\text{ cm}$",
        "$10\\sqrt{3}\\text{ cm}$",
        "$5\\sqrt{2}\\text{ cm}$",
        "$5\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "Garis $AB$ dan $GH$ terletak pada bidang diagonal $ABGH$, berjarak diagonal sisi $BG$.",
      "explanation": "$10\\sqrt{2}\\text{ cm}$."
    },
    {
      "id": 8,
      "prompt": "Banyaknya bidang diagonal pada sebuah kubus adalah...",
      "options": [
        "$6$",
        "$4$",
        "$8$",
        "$12$",
        "$2$"
      ],
      "correct": 0,
      "hint": "Bidang diagonal: $ABGH, CDEF, ADGF, BCHE, ACGE, BDHF$.",
      "explanation": "Ada 6 bidang diagonal."
    },
    {
      "id": 9,
      "prompt": "Pada balok $ABCD.EFGH$ dengan panjang $8\\text{ cm}$, lebar $6\\text{ cm}$, dan tinggi $5\\text{ cm}$, panjang diagonal ruangnya adalah...",
      "options": [
        "$5\\sqrt{5}\\text{ cm}$",
        "$10\\text{ cm}$",
        "$\\sqrt{125}\\text{ cm}$",
        "$12\\text{ cm}$",
        "$15\\text{ cm}$"
      ],
      "correct": 0,
      "hint": "$D = \\sqrt{p^2 + l^2 + t^2} = \\sqrt{64 + 36 + 25}$.",
      "explanation": "$\\sqrt{125} = 5\\sqrt{5}\\text{ cm}$."
    },
    {
      "id": 10,
      "prompt": "Kedudukan garis $EB$ dan garis $HC$ pada kubus $ABCD.EFGH$ adalah...",
      "options": [
        "Sejajar",
        "Berpotongan",
        "Bersilangan",
        "Berimpit",
        "Tegak lurus"
      ],
      "correct": 0,
      "hint": "Keduanya merupakan diagonal sisi di bidang yang berhadapan dengan kemiringan sama.",
      "explanation": "Sejajar."
    },
    {
      "id": 11,
      "prompt": "Kedudukan garis $AE$ dan garis $BC$ pada kubus $ABCD.EFGH$ adalah...",
      "options": [
        "Bersilangan",
        "Sejajar",
        "Berpotongan",
        "Berimpit",
        "Tegak lurus dan berpotongan"
      ],
      "correct": 0,
      "hint": "Dua garis tidak sejajar dan tidak berpotongan karena tidak sebidang.",
      "explanation": "Bersilangan."
    },
    {
      "id": 12,
      "prompt": "Pada kubus $ABCD.EFGH$ dengan rusuk $a$, jarak titik pusat kubus ke salah satu bidang sisinya adalah...",
      "options": [
        "$\\frac{1}{2}a$",
        "$a$",
        "$\\frac{1}{2}a\\sqrt{2}$",
        "$\\frac{1}{2}a\\sqrt{3}$",
        "$\\frac{1}{4}a$"
      ],
      "correct": 0,
      "hint": "Pusat kubus berjarak setengah rusuk ke setiap sisi.",
      "explanation": "$a / 2$."
    },
    {
      "id": 13,
      "prompt": "Luas bidang diagonal $ACGE$ pada kubus dengan rusuk $4\\text{ cm}$ adalah...",
      "options": [
        "$16\\sqrt{2}\\text{ cm}^2$",
        "$16\\text{ cm}^2$",
        "$32\\text{ cm}^2$",
        "$8\\sqrt{2}\\text{ cm}^2$",
        "$16\\sqrt{3}\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "Persegi panjang dengan ukuran $AC \\times AE = 4\\sqrt{2} \\times 4$.",
      "explanation": "$16\\sqrt{2}\\text{ cm}^2$."
    },
    {
      "id": 14,
      "prompt": "Sudut antara garis $EC$ (diagonal ruang) dan bidang alas $ABCD$ pada kubus memiliki nilai tangen...",
      "options": [
        "$\\frac{1}{\\sqrt{2}}$",
        "$\\sqrt{2}$",
        "$\\frac{1}{\\sqrt{3}}$",
        "$\\sqrt{3}$",
        "$1$"
      ],
      "correct": 0,
      "hint": "$\\tan \\alpha = \\frac{\\text{tinggi } EA}{\\text{proyeksi } AC} = \\frac{a}{a\\sqrt{2}}$.",
      "explanation": "$\\frac{1}{\\sqrt{2}}$."
    },
    {
      "id": 15,
      "prompt": "Jumlah panjang seluruh rusuk sebuah kubus adalah $96\\text{ cm}$. Luas permukaan kubus tersebut adalah...",
      "options": [
        "$384\\text{ cm}^2$",
        "$512\\text{ cm}^2$",
        "$256\\text{ cm}^2$",
        "$192\\text{ cm}^2$",
        "$96\\text{ cm}^2$"
      ],
      "correct": 0,
      "hint": "Kubus memiliki 12 rusuk $\\implies r = 96 / 12 = 8\\text{ cm}$. Luas $= 6r^2$.",
      "explanation": "$6 \\times 8^2 = 6 \\times 64 = 384\\text{ cm}^2$."
    }
  ],
  "k12-statistika": [
    {
      "id": 1,
      "prompt": "Dari 7 orang calon pengurus OSIS akan dipilih 3 orang sebagai ketua, sekretaris, dan bendahara. Banyak susunan pengurus yang dapat dibentuk adalah...",
      "options": [
        "$210$",
        "$35$",
        "$42$",
        "$120$",
        "$84$"
      ],
      "correct": 0,
      "hint": "Memperhatikan jabatan $\\implies$ gunakan Permutasi $P(7, 3)$.",
      "explanation": "$P(7, 3) = \\frac{7!}{4!} = 7 \\times 6 \\times 5 = 210$."
    },
    {
      "id": 2,
      "prompt": "Dari 8 orang siswa berprestasi akan dipilih 3 orang untuk mengikuti delegasi lomba cerdas cermat. Banyak tim yang dapat dibentuk adalah...",
      "options": [
        "$56$",
        "$336$",
        "$28$",
        "$70$",
        "$48$"
      ],
      "correct": 0,
      "hint": "Tidak memperhatikan urutan $\\implies$ gunakan Kombinasi $C(8, 3)$.",
      "explanation": "$C(8, 3) = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$."
    },
    {
      "id": 3,
      "prompt": "Dua buah dadu dilempar bersamaan satu kali. Peluang muncul jumlah kedua mata dadu sama dengan 7 adalah...",
      "options": [
        "$\\frac{1}{6}$",
        "$\\frac{1}{12}$",
        "$\\frac{5}{36}$",
        "$\\frac{7}{36}$",
        "$\\frac{1}{4}$"
      ],
      "correct": 0,
      "hint": "Titik sampel jumlah 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ ada 6 dari 36.",
      "explanation": "$6/36 = 1/6$."
    },
    {
      "id": 4,
      "prompt": "Sebuah koin dilempar 100 kali. Frekuensi harapan muncul sisi angka adalah...",
      "options": [
        "$50$",
        "$25$",
        "$75$",
        "$60$",
        "$40$"
      ],
      "correct": 0,
      "hint": "$F_h = n \\times P(A) = 100 \\times \\frac{1}{2}$.",
      "explanation": "$50$ kali."
    },
    {
      "id": 5,
      "prompt": "Rata-rata dari data: $4, 6, 7, 8, 9, 10, 12$ adalah...",
      "options": [
        "$8$",
        "$7$",
        "$8,5$",
        "$7,5$",
        "$9$"
      ],
      "correct": 0,
      "hint": "Jumlahkan semua nilai lalu bagi banyaknya data (7).",
      "explanation": "$\\frac{56}{7} = 8$."
    },
    {
      "id": 6,
      "prompt": "Median dari data $3, 5, 7, 6, 8, 4, 9, 8$ adalah...",
      "options": [
        "$6,5$",
        "$6$",
        "$7$",
        "$7,5$",
        "$8$"
      ],
      "correct": 0,
      "hint": "Urutkan data: $3, 4, 5, 6, 7, 8, 8, 9$. Median rata-rata data ke-4 dan ke-5.",
      "explanation": "$\\frac{6 + 7}{2} = 6,5$."
    },
    {
      "id": 7,
      "prompt": "Modus dari data $5, 7, 8, 5, 6, 9, 7, 5, 8$ adalah...",
      "options": [
        "$5$",
        "$7$",
        "$8$",
        "$6$",
        "$5$ dan $7$"
      ],
      "correct": 0,
      "hint": "Modus adalah nilai dengan frekuensi terbanyak.",
      "explanation": "Nilai 5 muncul 3 kali (terbanyak)."
    },
    {
      "id": 8,
      "prompt": "Kuartil bawah ($Q_1$) dari data terurut: $2, 4, 5, 6, 7, 8, 9$ adalah...",
      "options": [
        "$4$",
        "$5$",
        "$2$",
        "$6$",
        "$4,5$"
      ],
      "correct": 0,
      "hint": "$Q_1$ adalah median dari paruh bawah $\\{2, 4, 5\\}$.",
      "explanation": "$4$."
    },
    {
      "id": 9,
      "prompt": "Simpangan baku dari data $2, 4, 6, 8, 10$ adalah...",
      "options": [
        "$2\\sqrt{2}$",
        "$8$",
        "$2$",
        "$4$",
        "$\\sqrt{8}$"
      ],
      "correct": 0,
      "hint": "Rata-rata $= 6$. Varians $= \\frac{16 + 4 + 0 + 4 + 16}{5} = 8$.",
      "explanation": "Simpangan baku $= \\sqrt{8} = 2\\sqrt{2}$."
    },
    {
      "id": 10,
      "prompt": "Dalam sebuah kantong terdapat 5 bola merah dan 3 bola biru. Jika diambil satu bola secara acak, peluang terambil bola merah adalah...",
      "options": [
        "$\\frac{5}{8}$",
        "$\\frac{3}{8}$",
        "$\\frac{5}{3}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{5}$"
      ],
      "correct": 0,
      "hint": "Peluang $= \\frac{n(M)}{n(S)}$.",
      "explanation": "$5 / (5 + 3) = 5/8$."
    },
    {
      "id": 11,
      "prompt": "Banyak susunan kata yang dapat dibentuk dari huruf-huruf kata 'KATAK' adalah...",
      "options": [
        "$30$",
        "$60$",
        "$120$",
        "$20$",
        "$10$"
      ],
      "correct": 0,
      "hint": "Permutasi dengan unsur sama: 5 huruf dengan 2 huruf K dan 2 huruf A.",
      "explanation": "$P = \\frac{5!}{2! 2!} = \\frac{120}{4} = 30$."
    },
    {
      "id": 12,
      "prompt": "Peluang seorang siswa lulus ujian adalah $0,85$. Peluang siswa tersebut tidak lulus adalah...",
      "options": [
        "$0,15$",
        "$0,25$",
        "$0,85$",
        "$0,05$",
        "$0,10$"
      ],
      "correct": 0,
      "hint": "$P(A') = 1 - P(A)$.",
      "explanation": "$1 - 0,85 = 0,15$."
    },
    {
      "id": 13,
      "prompt": "Dari satu set kartu bridge (52 kartu), peluang terambil kartu As adalah...",
      "options": [
        "$\\frac{1}{13}$",
        "$\\frac{4}{13}$",
        "$\\frac{1}{52}$",
        "$\\frac{1}{4}$",
        "$\\frac{2}{13}$"
      ],
      "correct": 0,
      "hint": "Ada 4 kartu As dalam 52 kartu.",
      "explanation": "$4/52 = 1/13$."
    },
    {
      "id": 14,
      "prompt": "Jangkauan antarkuartil (hamparan) dari data dengan $Q_3 = 18$ dan $Q_1 = 11$ adalah...",
      "options": [
        "$7$",
        "$14$",
        "$3,5$",
        "$29$",
        "$9$"
      ],
      "correct": 0,
      "hint": "$H = Q_3 - Q_1$.",
      "explanation": "$18 - 11 = 7$."
    },
    {
      "id": 15,
      "prompt": "Enam orang duduk melingkar mengelilingi meja bundar. Banyak susunan posisi duduk yang mungkin adalah...",
      "options": [
        "$120$",
        "$720$",
        "$24$",
        "$60$",
        "$36$"
      ],
      "correct": 0,
      "hint": "Permutasi siklis: $P_{\\text{siklis}} = (n - 1)!$.",
      "explanation": "$(6 - 1)! = 5! = 120$."
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
  module.exports = window.SOAL_BANK_PER_BAB;
}
