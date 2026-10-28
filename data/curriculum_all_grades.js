window.ALL_GRADES_DATA = {
  "7": {
    "gradeName": "Kelas 7 SMP",
    "gradeShort": "7 SMP",
    "chapters": [
      {
        "id": "k7-bilangan",
        "number": "01",
        "title": "Bilangan Bulat dan Pecahan",
        "summary": "Operasi hitung campuran bilangan bulat positif dan negatif, pecahan biasa, desimal, persen, serta penerapan KPK dan FPB.",
        "subtopics": [
          {
            "title": "Operasi Campuran Bilangan Bulat",
            "concept": "Aturan urutan pengerjaan operasi hitung: kurung terdahulu, lalu perkalian/pembagian dari kiri ke kanan, kemudian penjumlahan/pengurangan dari kiri ke kanan.",
            "quickTip": "Ingat rumus tanda perkalian: positif kali negatif menghasilkan negatif, negatif kali negatif menghasilkan positif!",
            "example": "Hitung: $-12 + 8 \\times (-3) - (-10)$.<br><strong>Solusi:</strong> $-12 + (-24) + 10 = -36 + 10 = -26$."
          },
          {
            "title": "Pecahan dan Persen",
            "concept": "Pecahan $\\frac{a}{b}$ menyatakan bagian dari keseluruhan. Untuk penjumlahan dan pengurangan pecahan, samakan penyebut terlebih dahulu menggunakan KPK.",
            "quickTip": "Untuk pembagian pecahan, balikkan pecahan kedua dan ubah tanda bagi menjadi kali: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$!",
            "example": "Hitung: $\\frac{2}{3} + \\frac{3}{4} \\times \\frac{2}{5}$.<br><strong>Solusi:</strong> $\\frac{2}{3} + \\frac{6}{20} = \\frac{2}{3} + \\frac{3}{10} = \\frac{20 + 9}{30} = \\frac{29}{30}$."
          }
        ]
      },
      {
        "id": "k7-aljabar",
        "number": "02",
        "title": "Bentuk Aljabar",
        "summary": "Pengenalan suku, variabel, koefisien, konstanta, serta operasi penjumlahan, pengurangan, dan perkalian suku aljabar.",
        "subtopics": [
          {
            "title": "Unsur Aljabar & Suku Sejenis",
            "concept": "Pada bentuk $3x^2 - 5x + 7$, $x$ adalah variabel, $3$ dan $-5$ adalah koefisien, dan $7$ adalah konstanta. Suku sejenis adalah suku dengan variabel dan pangkat yang persis sama.",
            "quickTip": "Hanya suku-suku sejenis yang boleh dijumlahkan atau dikurangkan!",
            "example": "Sederhanakan: $5a - 3b + 2a + 7b - 4$.<br><strong>Solusi:</strong> $(5a + 2a) + (-3b + 7b) - 4 = 7a + 4b - 4$."
          },
          {
            "title": "Perkalian Aljabar",
            "concept": "Gunakan sifat distributif untuk mengalikan suku: $a(b + c) = ab + ac$ dan $(x + p)(x + q) = x^2 + (p+q)x + pq$.",
            "quickTip": "Perhatikan perkalian tanda saat mengalikan dua suku aljabar!",
            "example": "Tentukan hasil dari $(2x - 3)(x + 4)$.<br><strong>Solusi:</strong> $2x(x) + 2x(4) - 3(x) - 3(4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$."
          }
        ]
      },
      {
        "id": "k7-plsv",
        "number": "03",
        "title": "Persamaan Linear Satu Variabel (PLSV)",
        "summary": "Menyelesaikan persamaan linear satu variabel dengan prinsip kesetaraan ruas dan penerapannya pada soal cerita.",
        "subtopics": [
          {
            "title": "Penyelesaian Persamaan Linear",
            "concept": "Persamaan berbentuk $ax + b = c$ dengan $a \\ne 0$. Lakukan operasi yang sama pada kedua ruas (tambah, kurang, kali, bagi) untuk mencari nilai $x$.",
            "quickTip": "Pindahkan semua suku yang memuat variabel ke ruas kiri dan semua konstanta ke ruas kanan!",
            "example": "Tentukan himpunan penyelesaian dari $3x - 7 = x + 5$.<br><strong>Solusi:</strong> $3x - x = 5 + 7 \\implies 2x = 12 \\implies x = 6$."
          }
        ]
      },
      {
        "id": "k7-aritmatika",
        "number": "04",
        "title": "Aritmatika Sosial & Perbandingan",
        "summary": "Perhitungan untung, rugi, persentase diskon, bunga tunggal tabungan, bruto, tara, netto, dan perbandingan senilai/berbalik nilai.",
        "subtopics": [
          {
            "title": "Untung, Rugi & Diskon",
            "concept": "Untung $=$ Harga Jual $-$ Harga Beli. Persentase Untung $= \\frac{\\text{Untung}}{\\text{Harga Beli}} \\times 100\\%$. Diskon adalah potongan harga langsung.",
            "quickTip": "Harga setelah diskon $D\\%$ adalah $(100 - D)\\% \\times$ Harga Awal!",
            "example": "Barang seharga Rp200.000 didiskon 15%. Berapa yang harus dibayar?<br><strong>Solusi:</strong> $(100 - 15)\\% \\times 200.000 = 85\\% \\times 200.000 = \\text{Rp170.000}$."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "chapter": "Bilangan Bulat",
        "prompt": "Hasil dari $-15 + 24 \\div (-6) \\times 3$ adalah...",
        "options": [
          "$-27$",
          "$-3$",
          "$27$",
          "$3$"
        ],
        "correct": 0,
        "explanation": "Kerjakan pembagian terlebih dahulu: $24 \\div (-6) = -4$. Kemudian kalikan: $-4 \\times 3 = -12$. Terakhir jumlahkan: $-15 + (-12) = -27$."
      },
      {
        "id": 2,
        "chapter": "Aljabar",
        "prompt": "Bentuk sederhana dari $4(2x - 3) - 3(x + 5)$ adalah...",
        "options": [
          "$5x - 27$",
          "$5x + 3$",
          "$5x - 3$",
          "$8x - 27$"
        ],
        "correct": 0,
        "explanation": "$4(2x - 3) - 3(x + 5) = 8x - 12 - 3x - 15 = (8x - 3x) + (-12 - 15) = 5x - 27$."
      },
      {
        "id": 3,
        "chapter": "PLSV",
        "prompt": "Nilai $x$ yang memenuhi persamaan $5x - 9 = 2x + 6$ adalah...",
        "options": [
          "$5$",
          "$3$",
          "$4$",
          "$-5$"
        ],
        "correct": 0,
        "explanation": "$5x - 2x = 6 + 9 \\implies 3x = 15 \\implies x = 5$."
      },
      {
        "id": 4,
        "chapter": "Aritmatika Sosial",
        "prompt": "Pedagang membeli sebuah baju seharga Rp80.000 dan menjualnya dengan keuntungan $25\\%$. Harga jual baju tersebut adalah...",
        "options": [
          "Rp100.000",
          "Rp95.000",
          "Rp105.000",
          "Rp90.000"
        ],
        "correct": 0,
        "explanation": "Keuntungan $= 25\\% \\times 80.000 = 20.000$. Harga jual $= 80.000 + 20.000 = \\text{Rp100.000}$."
      },
      {
        "id": 5,
        "chapter": "Perbandingan",
        "prompt": "Suatu pekerjaan dapat diselesaikan oleh 12 orang dalam 20 hari. Jika pekerjaan ingin selesai dalam 15 hari, banyak pekerja tambahan yang diperlukan adalah...",
        "options": [
          "$4 \\text{ orang}$",
          "$16 \\text{ orang}$",
          "$3 \\text{ orang}$",
          "$5 \\text{ orang}$"
        ],
        "correct": 0,
        "explanation": "Perbandingan berbalik nilai: $12 \\times 20 = x \\times 15 \\implies 240 = 15x \\implies x = 16$ orang. Pekerja tambahan $= 16 - 12 = 4$ orang."
      }
    ]
  },
  "8": {
    "gradeName": "Kelas 8 SMP",
    "gradeShort": "8 SMP",
    "chapters": [
      {
        "id": "k8-pola",
        "number": "01",
        "title": "Pola Bilangan & Barisan",
        "summary": "Pola barisan bilangan aritmatika, geometri, pola persegi, pola segitiga, dan bilangan Fibonacci.",
        "subtopics": [
          {
            "title": "Pola Barisan Aritmatika",
            "concept": "Barisan dengan selisih tetap (beda $b$). Rumus suku ke-n: $U_n = a + (n - 1)b$.",
            "quickTip": "Beda diperoleh dari pengurangan dua suku berurutan: $b = U_2 - U_1$.",
            "example": "Tentukan suku ke-15 dari barisan $3, 7, 11, 15, \\dots$<br><strong>Solusi:</strong> $a = 3, b = 4$. $U_{15} = 3 + (15 - 1)(4) = 3 + 56 = 59$."
          }
        ]
      },
      {
        "id": "k8-relasi",
        "number": "02",
        "title": "Relasi dan Fungsi",
        "summary": "Konsep relasi, pemetaan (fungsi), notasi rumus fungsi linear $f(x) = ax + b$, dan daerah hasil.",
        "subtopics": [
          {
            "title": "Rumus Fungsi Linear",
            "concept": "Fungsi linear dinyatakan sebagai $f(x) = ax + b$. Jika diketahui dua nilai fungsi, eliminasi untuk mencari nilai $a$ dan $b$.",
            "quickTip": "Nilai $a = \\frac{f(p) - f(q)}{p - q}$ dapat dihitung langsung dari selisih output dibagi selisih input!",
            "example": "Diketahui $f(x) = ax + b$, dengan $f(2) = 7$ dan $f(4) = 11$. Tentukan $f(5)$.<br><strong>Solusi:</strong> $a = \\frac{11 - 7}{4 - 2} = 2$. $b = 7 - 2(2) = 3$. Maka $f(5) = 2(5) + 3 = 13$."
          }
        ]
      },
      {
        "id": "k8-pgl",
        "number": "03",
        "title": "Persamaan Garis Lurus (PGL)",
        "summary": "Gradien kemiringan garis, persamaan garis melalui satu/dua titik, serta hubungan dua garis sejajar dan tegak lurus.",
        "subtopics": [
          {
            "title": "Gradien dan Persamaan Garis",
            "concept": "Gradien $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Garis sejajar memiliki gradien sama ($m_1 = m_2$). Garis tegak lurus: $m_1 \\times m_2 = -1$.",
            "quickTip": "Gradien garis bentuk $Ax + By + C = 0$ adalah $m = -\\frac{A}{B}$!",
            "example": "Tentukan gradien garis yang tegak lurus dengan $2x - 4y + 5 = 0$.<br><strong>Solusi:</strong> $m_1 = -\\frac{2}{-4} = \\frac{1}{2}$. Tegak lurus: $m_2 = -\\frac{1}{m_1} = -2$."
          }
        ]
      },
      {
        "id": "k8-spldv",
        "number": "04",
        "title": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
        "summary": "Menentukan himpunan penyelesaian dua persamaan linear dengan metode eliminasi, substitusi, dan gabungan.",
        "subtopics": [
          {
            "title": "Metode Eliminasi-Substitusi",
            "concept": "Samakan koefisien salah satu variabel untuk mengeliminasinya, lalu substitusikan nilai yang didapat ke persamaan lain.",
            "quickTip": "Pilihlah variabel dengan koefisien yang paling sederhana atau sudah sama untuk dieliminasi pertama kali!",
            "example": "Selesaikan $\\begin{cases} 2x + y = 8 \\\\ x - y = 1 \\end{cases}$.<br><strong>Solusi:</strong> Jumlahkan kedua persamaan: $3x = 9 \\implies x = 3$. $y = 3 - 1 = 2$."
          }
        ]
      },
      {
        "id": "k8-pythagoras",
        "number": "05",
        "title": "Teorema Pythagoras",
        "summary": "Kuadrat sisi miring sama dengan jumlah kuadrat sisi tegak ($c^2 = a^2 + b^2$), triple pythagoras, dan jenis segitiga.",
        "subtopics": [
          {
            "title": "Rumus Pythagoras & Triple",
            "concept": "Pada segitiga siku-siku dengan sisi miring $c$: $c = \\sqrt{a^2 + b^2}$. Triple populer: $(3,4,5), (5,12,13), (7,24,25), (8,15,17)$.",
            "quickTip": "Semua kelipatan dari triple pythagoras dasar juga membentuk segitiga siku-siku (misal: $6, 8, 10$)!",
            "example": "Sebuah segitiga siku-siku memiliki alas $12$ cm dan tinggi $9$ cm. Tentukan sisi miringnya.<br><strong>Solusi:</strong> $c = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15$ cm."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "chapter": "Pola Bilangan",
        "prompt": "Diberikan barisan bilangan $4, 7, 10, 13, \\dots$. Suku ke-25 dari barisan tersebut adalah...",
        "options": [
          "$76$",
          "$73$",
          "$79$",
          "$82$"
        ],
        "correct": 0,
        "explanation": "$a = 4, b = 3$. $U_{25} = 4 + (25 - 1)(3) = 4 + 72 = 76$."
      },
      {
        "id": 2,
        "chapter": "Relasi & Fungsi",
        "prompt": "Diketahui fungsi $f(x) = 3x - 4$. Nilai dari $f(7)$ adalah...",
        "options": [
          "$17$",
          "$15$",
          "$21$",
          "$19$"
        ],
        "correct": 0,
        "explanation": "$f(7) = 3(7) - 4 = 21 - 4 = 17$."
      },
      {
        "id": 3,
        "chapter": "Persamaan Garis",
        "prompt": "Gradien garis yang melalui titik $A(2, 3)$ dan titik $B(6, 11)$ adalah...",
        "options": [
          "$2$",
          "$4$",
          "$\\frac{1}{2}$",
          "$-2$"
        ],
        "correct": 0,
        "explanation": "$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$."
      },
      {
        "id": 4,
        "chapter": "SPLDV",
        "prompt": "Himpunan penyelesaian dari sistem persamaan $2x + 3y = 12$ dan $x - y = 1$ adalah...",
        "options": [
          "$(3, 2)$",
          "$(2, 3)$",
          "$(4, 1)$",
          "$(1, 4)$"
        ],
        "correct": 0,
        "explanation": "Dari $x - y = 1 \\implies x = y + 1$. Substitusi: $2(y + 1) + 3y = 12 \\implies 5y + 2 = 12 \\implies 5y = 10 \\implies y = 2$. $x = 2 + 1 = 3$."
      },
      {
        "id": 5,
        "chapter": "Pythagoras",
        "prompt": "Panjang hipotenusa (sisi miring) segitiga siku-siku adalah 13 cm. Jika salah satu sisi tegaknya 5 cm, maka panjang sisi tegak lainnya adalah...",
        "options": [
          "$12 \\text{ cm}$",
          "$10 \\text{ cm}$",
          "$8 \\text{ cm}$",
          "$11 \\text{ cm}$"
        ],
        "correct": 0,
        "explanation": "$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm."
      }
    ]
  },
  "9": {
    "gradeName": "Kelas 9 SMP",
    "gradeShort": "9 SMP",
    "chapters": [
      {
        "id": "k9-pangkat",
        "number": "01",
        "title": "Perpangkatan dan Bentuk Akar",
        "summary": "Sifat bilangan berpangkat bulat, menyederhanakan bentuk akar, dan merasionalkan pecahan berakar.",
        "subtopics": [
          {
            "title": "Sifat Pangkat & Bentuk Akar",
            "concept": "Sifat penting: $a^m \\times a^n = a^{m+n}$, $(a^m)^n = a^{m \\cdot n}$, dan $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$.",
            "quickTip": "Merasionalkan $\\frac{a}{\\sqrt{b}}$: kalikan pembilang dan penyebut dengan $\\sqrt{b}$!",
            "example": "Sederhanakan $\\sqrt{75} - \\sqrt{27} + \\sqrt{12}$.<br><strong>Solusi:</strong> $\\sqrt{25 \\cdot 3} - \\sqrt{9 \\cdot 3} + \\sqrt{4 \\cdot 3} = 5\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3} = 4\\sqrt{3}$."
          }
        ]
      },
      {
        "id": "k9-kuadrat",
        "number": "02",
        "title": "Persamaan dan Fungsi Kuadrat",
        "summary": "Faktorisasi kuadrat, rumus abc, diskriminan $D$, titik puncak parabola, dan sumbu simetri.",
        "subtopics": [
          {
            "title": "Akar Persamaan Kuadrat & Titik Puncak",
            "concept": "Bentuk $ax^2 + bx + c = 0$. Diskriminan $D = b^2 - 4ac$. Titik puncak grafik $f(x)$: $x_p = -\\frac{b}{2a}$, $y_p = -\\frac{D}{4a}$.",
            "quickTip": "Jika $a > 0$, parabola terbuka ke atas (punya nilai minimum). Jika $a < 0$, terbuka ke bawah (punya nilai maksimum)!",
            "example": "Tentukan sumbu simetri dari fungsi $f(x) = x^2 - 6x + 8$.<br><strong>Solusi:</strong> $x_p = -\\frac{-6}{2(1)} = 3$."
          }
        ]
      },
      {
        "id": "k9-transformasi",
        "number": "03",
        "title": "Transformasi Geometri",
        "summary": "Translasi (pergeseran), Refleksi (pencerminan), Rotasi (perputaran), dan Dilatasi (perbesaran skala).",
        "subtopics": [
          {
            "title": "Refleksi dan Translasi",
            "concept": "Titik $A(x,y)$ ditranslasikan oleh $T(a,b)$ menghasilkan $A'(x+a, y+b)$. Dicerminkan sumbu-X: $(x, -y)$. Dicerminkan sumbu-Y: $(-x, y)$.",
            "quickTip": "Cermin garis $y = x$ cukup tukar posisi: $(x,y) \\to (y,x)$!",
            "example": "Titik $A(4, -3)$ dicerminkan terhadap garis $y = x$.<br><strong>Solusi:</strong> Bayangannya adalah $A'(-3, 4)$."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "chapter": "Bentuk Akar",
        "prompt": "Bentuk sederhana dari $\\sqrt{48} + \\sqrt{27} - \\sqrt{12}$ adalah...",
        "options": [
          "$5\\sqrt{3}$",
          "$6\\sqrt{3}$",
          "$7\\sqrt{3}$",
          "$4\\sqrt{3}$"
        ],
        "correct": 0,
        "explanation": "$\\sqrt{48} = 4\\sqrt{3}$, $\\sqrt{27} = 3\\sqrt{3}$, $\\sqrt{12} = 2\\sqrt{3}$. Hasil: $4\\sqrt{3} + 3\\sqrt{3} - 2\\sqrt{3} = 5\\sqrt{3}$."
      },
      {
        "id": 2,
        "chapter": "Persamaan Kuadrat",
        "prompt": "Akar-akar dari persamaan kuadrat $x^2 - 5x + 6 = 0$ adalah...",
        "options": [
          "$x = 2$ atau $x = 3$",
          "$x = -2$ atau $x = -3$",
          "$x = 1$ atau $x = 6$",
          "$x = -1$ atau $x = -6$"
        ],
        "correct": 0,
        "explanation": "Faktorkan: $(x - 2)(x - 3) = 0 \\implies x = 2$ atau $x = 3$."
      },
      {
        "id": 3,
        "chapter": "Fungsi Kuadrat",
        "prompt": "Nilai optimum (minimum) dari fungsi kuadrat $f(x) = x^2 - 4x - 5$ adalah...",
        "options": [
          "$-9$",
          "$-8$",
          "$-5$",
          "$2$"
        ],
        "correct": 0,
        "explanation": "$x_p = -\\frac{-4}{2(1)} = 2$. Masukkan ke fungsi: $f(2) = 2^2 - 4(2) - 5 = 4 - 8 - 5 = -9$."
      },
      {
        "id": 4,
        "chapter": "Transformasi",
        "prompt": "Titik $B(3, -2)$ ditranslasikan oleh $T(-1, 5)$. Koordinat bayangan titik $B$ adalah...",
        "options": [
          "$(2, 3)$",
          "$(4, 3)$",
          "$(2, -7)$",
          "$(-3, -10)$"
        ],
        "correct": 0,
        "explanation": "$x' = 3 + (-1) = 2$ dan $y' = -2 + 5 = 3$. Bayangan: $(2, 3)$."
      },
      {
        "id": 5,
        "chapter": "Eksponen",
        "prompt": "Hasil dari $(2^3)^2 \\times 2^{-4}$ adalah...",
        "options": [
          "$4$",
          "$8$",
          "$16$",
          "$2$"
        ],
        "correct": 0,
        "explanation": "$(2^3)^2 = 2^6$. Maka $2^6 \\times 2^{-4} = 2^{6 + (-4)} = 2^2 = 4$."
      }
    ]
  },
  "10": {
    "gradeName": "Kelas 10 SMA",
    "gradeShort": "10 SMA",
    "chapters": [
      {
        "id": "k10-eksponen",
        "number": "01",
        "title": "Eksponen dan Logaritma",
        "summary": "Persamaan eksponen, fungsi eksponensial, sifat-sifat logaritma, dan penyelesaian persamaan logaritma.",
        "subtopics": [
          {
            "title": "Persamaan Eksponen",
            "concept": "Jika $a^{f(x)} = a^p$ dengan $a > 0$ dan $a \\ne 1$, maka $f(x) = p$. Jika $a^{f(x)} = b^{f(x)}$ dengan $a \\ne b$, maka $f(x) = 0$.",
            "quickTip": "Samakan basis bilangan berpangkat pada kedua ruas sebelum menyamakan eksponennya!",
            "example": "Tentukan nilai $x$ dari $3^{2x - 1} = 27$.<br><strong>Solusi:</strong> $3^{2x - 1} = 3^3 \\implies 2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$."
          },
          {
            "title": "Sifat-Sifat Logaritma",
            "concept": "$\\log(a \\cdot b) = \\log a + \\log b$, $\\log\\left(\\frac{a}{b}\\right) = \\log a - \\log b$, dan $\\log a^n = n \\cdot \\log a$.",
            "quickTip": "Basis identik: ${}^a\\log a = 1$ dan ${}^a\\log 1 = 0$!",
            "example": "Hitung: ${}^2\\log 12 + {}^2\\log 4 - {}^2\\log 6$.<br><strong>Solusi:</strong> ${}^2\\log\\left(\\frac{12 \\times 4}{6}\\right) = {}^2\\log 8 = 3$."
          }
        ]
      },
      {
        "id": "k10-vektor",
        "number": "02",
        "title": "Vektor pada Bidang & Ruang",
        "summary": "Komponen vektor, operasi aljabar vektor, panjang vektor, vektor satuan, dan perkalian skalar (dot product).",
        "subtopics": [
          {
            "title": "Panjang Vektor & Dot Product",
            "concept": "Panjang vektor $\\vec{u} = (x, y)$ adalah $|\\vec{u}| = \\sqrt{x^2 + y^2}$. Perkalian skalar $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = |\\vec{u}||\\vec{v}|\\cos\\theta$.",
            "quickTip": "Jika dua vektor saling tegak lurus (ortogonal), maka hasil dot productnya selalu nol: $\\vec{u} \\cdot \\vec{v} = 0$!",
            "example": "Jika $\\vec{a} = (3, 4)$ dan $\\vec{b} = (2, -1)$, tentukan $\\vec{a} \\cdot \\vec{b}$.<br><strong>Solusi:</strong> $\\vec{a} \\cdot \\vec{b} = (3)(2) + (4)(-1) = 6 - 4 = 2$."
          }
        ]
      },
      {
        "id": "k10-trigonometri",
        "number": "03",
        "title": "Trigonometri Dasar",
        "summary": "Perbandingan trigonometri sinus, kosinus, tangen segitiga siku-siku, sudut istimewa, dan tanda pada 4 kuadran.",
        "subtopics": [
          {
            "title": "Perbandingan Sudut Istimewa",
            "concept": "Pada segitiga siku-siku: $\\sin\\theta = \\frac{depan}{miring}$, $\\cos\\theta = \\frac{samping}{miring}$, $\\tan\\theta = \\frac{depan}{samping}$.",
            "quickTip": "Hafalkan 'Sindemi, Kossami, Tandesa' untuk memudahkan mengingat perbandingan sisi!",
            "example": "Hitung nilai dari $\\sin 30^\\circ + \\cos 60^\\circ - \\tan 45^\\circ$.<br><strong>Solusi:</strong> $\\frac{1}{2} + \\frac{1}{2} - 1 = 1 - 1 = 0$."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "chapter": "Eksponen",
        "prompt": "Nilai $x$ yang memenuhi persamaan $2^{3x - 5} = 16$ adalah...",
        "options": [
          "$3$",
          "$2$",
          "$4$",
          "$1$",
          "$5$"
        ],
        "correct": 0,
        "explanation": "$2^{3x - 5} = 2^4 \\implies 3x - 5 = 4 \\implies 3x = 9 \\implies x = 3$."
      },
      {
        "id": 2,
        "chapter": "Logaritma",
        "prompt": "Hasil dari ${}^3\\log 54 - {}^3\\log 2$ adalah...",
        "options": [
          "$3$",
          "$2$",
          "$4$",
          "$6$",
          "$9$"
        ],
        "correct": 0,
        "explanation": "${}^3\\log 54 - {}^3\\log 2 = {}^3\\log\\left(\\frac{54}{2}\\right) = {}^3\\log 27 = 3$."
      },
      {
        "id": 3,
        "chapter": "Vektor",
        "prompt": "Panjang dari vektor $\\vec{v} = (6, -8)$ adalah...",
        "options": [
          "$10$",
          "$14$",
          "$8$",
          "$12$",
          "$15$"
        ],
        "correct": 0,
        "explanation": "$|\\vec{v}| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
      },
      {
        "id": 4,
        "chapter": "Trigonometri",
        "prompt": "Nilai dari $\\sin 30^\\circ \\times \\cos 60^\\circ + \\cos 30^\\circ \\times \\sin 60^\\circ$ adalah...",
        "options": [
          "$1$",
          "$\\frac{1}{2}$",
          "$\\frac{1}{2}\\sqrt{3}$",
          "$0$",
          "$\\frac{1}{4}$"
        ],
        "correct": 0,
        "explanation": "Identitas: $\\sin(A + B) = \\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$."
      },
      {
        "id": 5,
        "chapter": "Barisan",
        "prompt": "Suku ke-10 dari barisan aritmatika $5, 8, 11, 14, \\dots$ adalah...",
        "options": [
          "$32$",
          "$35$",
          "$30$",
          "$29$",
          "$36$"
        ],
        "correct": 0,
        "explanation": "$a = 5, b = 3$. $U_{10} = 5 + (9)(3) = 5 + 27 = 32$."
      }
    ]
  },
  "11": {
    "gradeName": "Kelas 11 SMA",
    "gradeShort": "11 SMA",
    "chapters": [],
    "questions": []
  },
  "12": {
    "gradeName": "Kelas 12 SMA",
    "gradeShort": "12 SMA",
    "chapters": [
      {
        "id": "k12-limit",
        "number": "01",
        "title": "Limit Fungsi Aljabar dan Trigonometri",
        "summary": "Metode pemfaktoran, perkalian bentuk sekawan, sifat limit fungsi trigonometri dasar, dan limit menuju tak hingga.",
        "subtopics": [
          {
            "title": "Limit Aljabar Bentuk Tak Tentu $\\frac{0}{0}$",
            "concept": "Jika substitusi langsung menghasilkan $\\frac{0}{0}$, faktorkan pembilang dan penyebut untuk membatalkan pembuat nol, atau gunakan dalil L'Hopital.",
            "quickTip": "Dalil L'Hopital: Jika bentuknya $\\frac{0}{0}$, turunkan pembilang dan penyebut secara terpisah: $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$!",
            "example": "Hitung $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.<br><strong>Solusi:</strong> $\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$."
          },
          {
            "title": "Limit Fungsi Trigonometri Dasar",
            "concept": "Rumus utama: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$, $\\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}$, dan $\\lim_{x \\to 0} \\frac{\\tan ax}{\\sin bx} = \\frac{a}{b}$.",
            "quickTip": "Cukup ambil rasio koefisien sudutnya saat $x \\to 0$!",
            "example": "Hitung $\\lim_{x \\to 0} \\frac{\\sin 6x}{2x}$.<br><strong>Solusi:</strong> $\\frac{6}{2} = 3$."
          }
        ]
      },
      {
        "id": "k12-turunan",
        "number": "02",
        "title": "Turunan Fungsi (Diferensial)",
        "summary": "Rumus dasar turunan fungsi aljabar dan trigonometri, aturan rantai, persamaan garis singgung kurva, serta titik stasioner maksimum/minimum.",
        "subtopics": [
          {
            "title": "Aturan Turunan & Titik Stasioner",
            "concept": "Jika $f(x) = ax^n$, maka $f'(x) = n \\cdot ax^{n-1}$. Titik stasioner kurva tercapai saat $f'(x) = 0$.",
            "quickTip": "Jika $f''(x) < 0$ maka stasioner maksimum, jika $f''(x) > 0$ maka stasioner minimum!",
            "example": "Tentukan titik stasioner dari $f(x) = x^2 - 6x + 5$.<br><strong>Solusi:</strong> $f'(x) = 2x - 6 = 0 \\implies x = 3$. $y = 3^2 - 6(3) + 5 = -4$. Titik stasioner $(3, -4)$."
          }
        ]
      },
      {
        "id": "k12-integral",
        "number": "03",
        "title": "Integral Tak Tentu & Tentu",
        "summary": "Anti-turunan fungsi aljabar, teknik substitusi aljabar, dan integral tentu untuk menghitung luas daerah di bawah kurva.",
        "subtopics": [
          {
            "title": "Rumus Dasar Integral",
            "concept": "$\\int x^n dx = \\frac{1}{n+1} x^{n+1} + C$ untuk $n \\ne -1$. Integral tentu: $\\int_a^b f(x) dx = F(b) - F(a)$.",
            "quickTip": "Jangan lupa menambahkan konstanta $+ C$ pada hasil integral tak tentu!",
            "example": "Hitung $\\int_0^3 (3x^2 + 2x) dx$.<br><strong>Solusi:</strong> $[x^3 + x^2]_0^3 = (3^3 + 3^2) - 0 = 27 + 9 = 36$."
          }
        ]
      },
      {
        "id": "k12-dimensi3",
        "number": "04",
        "title": "Geometri Ruang (Dimensi Tiga)",
        "summary": "Jarak antar titik, jarak titik ke garis, dan jarak titik ke bidang pada bangun ruang kubus dan balok.",
        "subtopics": [
          {
            "title": "Jarak Titik ke Garis pada Kubus",
            "concept": "Pada kubus $ABCD.EFGH$ dengan panjang rusuk $s$: diagonal bidang $= s\\sqrt{2}$, diagonal ruang $= s\\sqrt{3}$.",
            "quickTip": "Gunakan perbandingan luas segitiga siku-siku untuk mencari tinggi jarak titik ke garis!",
            "example": "Pada kubus dengan rusuk 6 cm, tentukan jarak titik $A$ ke diagonal ruang $AG$.<br><strong>Solusi:</strong> Jarak $= \\frac{rusuk \\times diagonal bidang}{diagonal ruang} = \\frac{6 \\times 6\\sqrt{2}}{6\\sqrt{3}} = 2\\sqrt{6}$ cm."
          }
        ]
      },
      {
        "id": "k12-statistika",
        "number": "05",
        "title": "Statistika & Teori Peluang",
        "summary": "Kaidah pencacahan, aturan perkalian, permutasi, kombinasi, peluang kejadian majemuk, serta ukuran pemusatan data kelompok.",
        "subtopics": [
          {
            "title": "Permutasi dan Kombinasi",
            "concept": "Permutasi (urutan diperhatikan): $P(n, r) = \\frac{n!}{(n - r)!}$. Kombinasi (urutan tidak diperhatikan): $C(n, r) = \\frac{n!}{r!(n - r)!}$.",
            "quickTip": "Pilih kombinasi saat memilih tim, delegasi, atau warna cat; pilih permutasi untuk susunan pengurus, nomor juara, atau kata sandi!",
            "example": "Berapa banyak cara memilih 3 orang pengurus dari 5 calon?<br><strong>Solusi:</strong> $C(5, 3) = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$ cara."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "chapter": "Limit Fungsi",
        "prompt": "Nilai dari $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ adalah...",
        "options": [
          "$6$",
          "$3$",
          "$0$",
          "$9$",
          "$\\infty$"
        ],
        "correct": 0,
        "explanation": "Faktorkan: $\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 6$."
      },
      {
        "id": 2,
        "chapter": "Limit Trigonometri",
        "prompt": "Nilai dari $\\lim_{x \\to 0} \\frac{\\sin 4x}{\\tan 2x}$ adalah...",
        "options": [
          "$2$",
          "$4$",
          "$\\frac{1}{2}$",
          "$1$",
          "$8$"
        ],
        "correct": 0,
        "explanation": "Ambil rasio koefisien: $\\frac{4}{2} = 2$."
      },
      {
        "id": 3,
        "chapter": "Turunan Fungsi",
        "prompt": "Turunan pertama dari $f(x) = (2x + 1)^3$ adalah...",
        "options": [
          "$6(2x + 1)^2$",
          "$3(2x + 1)^2$",
          "$2(2x + 1)^2$",
          "$12(2x + 1)^2$",
          "$6(2x + 1)$"
        ],
        "correct": 0,
        "explanation": "Aturan rantai: $f'(x) = 3(2x + 1)^2 \\times 2 = 6(2x + 1)^2$."
      },
      {
        "id": 4,
        "chapter": "Integral",
        "prompt": "Hasil dari $\\int (6x^2 - 4x + 3) dx$ adalah...",
        "options": [
          "$2x^3 - 2x^2 + 3x + C$",
          "$3x^3 - 2x^2 + 3x + C$",
          "$2x^3 - 4x^2 + 3x + C$",
          "$6x^3 - 2x^2 + 3x + C$",
          "$x^3 - x^2 + 3x + C$"
        ],
        "correct": 0,
        "explanation": "$\\int 6x^2 dx = 2x^3$, $\\int -4x dx = -2x^2$, $\\int 3 dx = 3x$. Hasil: $2x^3 - 2x^2 + 3x + C$."
      },
      {
        "id": 5,
        "chapter": "Peluang & Kombinatorika",
        "prompt": "Dari 7 orang siswa akan dipilih 3 orang untuk menjadi tim cerdas cermat. Banyak susunan tim yang mungkin adalah...",
        "options": [
          "$35$",
          "$21$",
          "$42$",
          "$210$",
          "$70$"
        ],
        "correct": 0,
        "explanation": "$C(7, 3) = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ cara."
      }
    ]
  }
};

// Hook modul kurikulum mandiri untuk Kelas 7 - 12
if (typeof window.KURMER_KELAS7_DATA !== 'undefined' && window.ALL_GRADES_DATA['7']) {
  window.ALL_GRADES_DATA['7'].chapters = window.KURMER_KELAS7_DATA;
}
if (typeof window.KURMER_KELAS8_DATA !== 'undefined' && window.ALL_GRADES_DATA['8']) {
  window.ALL_GRADES_DATA['8'].chapters = window.KURMER_KELAS8_DATA;
}
if (typeof window.KURMER_KELAS9_DATA !== 'undefined' && window.ALL_GRADES_DATA['9']) {
  window.ALL_GRADES_DATA['9'].chapters = window.KURMER_KELAS9_DATA;
}
if (typeof window.KURMER_KELAS10_DATA !== 'undefined' && window.ALL_GRADES_DATA['10']) {
  window.ALL_GRADES_DATA['10'].chapters = window.KURMER_KELAS10_DATA;
}
if (typeof window.KURMER_KELAS11_DATA !== 'undefined' && window.ALL_GRADES_DATA['11']) {
  window.ALL_GRADES_DATA['11'].chapters = window.KURMER_KELAS11_DATA;
}
if (typeof window.KURMER_KELAS12_DATA !== 'undefined' && window.ALL_GRADES_DATA['12']) {
  window.ALL_GRADES_DATA['12'].chapters = window.KURMER_KELAS12_DATA;
}
if (typeof window.UTBK_SOAL_BANK !== 'undefined' && window.ALL_GRADES_DATA['11']) {
  window.ALL_GRADES_DATA['11'].questions = window.UTBK_SOAL_BANK;
}
