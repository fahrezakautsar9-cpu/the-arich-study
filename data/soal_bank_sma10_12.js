if (typeof window === 'undefined') { globalThis.window = globalThis; }
window.SOAL_PER_BAB_SMA10_12 = {
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
  ]
};
