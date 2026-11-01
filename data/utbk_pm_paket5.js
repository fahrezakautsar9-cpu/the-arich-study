/**
 * ==============================================================================
 * THE ARICH STUDY — PAKET E (PAKET 5) PENALARAN MATEMATIKA (PM) UTBK-SNBT
 * Standar Resmi BPPP / SNPMB Kemendikbudristek & Kurikulum Merdeka
 * Total 20 Soal HOTS (4 Domain Inti: Bilangan, Aljabar, Geometri, Data & Peluang)
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. DAFTAR WACANA STIMULUS PAKET E
  // ============================================================================
  const PM_PAKET5_STIMULI = [
    {
      id: "stimulus-p5-1",
      title: "Wacana 1: Armada Drone Kurir Otonom & Efisiensi Jalur Multi-Drop",
      domain: "Bilangan",
      badge: "Soal No. 1 – 4",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah perusahaan logistik mengoperasikan drone kurir otonom untuk pengantaran obat-obatan darurat.
            Pusat pergudangan (Hub) berlokasi di titik koordinat kartesius <strong>$(0, 0)$</strong> dengan skala $1\\text{ unit} = 1\\text{ kilometer}$.
          </p>
          <p>
            Drone dijadwalkan mengantar paket ke tiga lokasi klinik pemesan dalam satu kali misi penerbangan:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Titik Tujuan</th>
                  <th class="p-2.5 font-bold">Koordinat Grid ($x, y$)</th>
                  <th class="p-2.5 font-bold">Jarak Euclidean dari Hub ($d = \\sqrt{x^2 + y^2}$)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Klinik A</td>
                  <td class="p-2.5 font-mono">$(3, 4)$</td>
                  <td class="p-2.5 font-mono">$\\sqrt{3^2 + 4^2} = 5\\text{ km}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Klinik B</td>
                  <td class="p-2.5 font-mono">$(0, 6)$</td>
                  <td class="p-2.5 font-mono">$\\sqrt{0^2 + 6^2} = 6\\text{ km}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Klinik C</td>
                  <td class="p-2.5 font-mono">$(-3, 4)$</td>
                  <td class="p-2.5 font-mono">$\\sqrt{(-3)^2 + 4^2} = 5\\text{ km}$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
            <strong>Keterangan Rute:</strong> Jarak antar-klinik: Jarak A ke B $= \\sqrt{(3-0)^2 + (4-6)^2} = \\sqrt{9 + 4} = \\sqrt{13} \\approx 3{,}6\\text{ km}$.
            Jarak B ke C $= \\sqrt{(0 - (-3))^2 + (6-4)^2} = \\sqrt{9 + 4} = \\sqrt{13} \\approx 3{,}6\\text{ km}$.
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p5-2",
      title: "Wacana 2: Penampang Terowongan Parabola Jalan Tol & Batas Muatan Truk",
      domain: "Geometri",
      badge: "Soal No. 5 – 8",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah terowongan jalan tol menembus perbukitan dengan penampang melintang berbentuk kurva <strong>parabola simetris</strong>.
            Lebar dasar permukaan jalan raya terowongan adalah <strong>$W = 12\\text{ meter}$</strong> (membentang dari $x = -6$ hingga $x = +6$),
            dan tinggi puncak lengkungan tepat di tengah jalan adalah <strong>$H = 6\\text{ meter}$</strong> di titik $(0, 6)$.
          </p>
          <p>
            Persamaan profil parabola penampang terowongan tersebut memenuhi persamaan:
            $$y = 6 - \\frac{1}{6}x^2$$
            dengan $x$ adalah jarak horizontal dari garis tengah jalan raya (meter), dan $y$ adalah ketinggian langit-langit terowongan (meter).
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Kategori Kendaraan</th>
                  <th class="p-2.5 font-bold">Dimensi Lebar ($w$)</th>
                  <th class="p-2.5 font-bold">Dimensi Tinggi ($h$)</th>
                  <th class="p-2.5 font-bold">Posisi Lintasan Kendaraan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Truk Kontainer Standar</td>
                  <td class="p-2.5 font-mono">$3\\text{ meter}$</td>
                  <td class="p-2.5 font-mono">$4\\text{ meter}$</td>
                  <td class="p-2.5">Melaju tepat di tengah jalan ($-1{,}5 \\le x \\le +1{,}5$)</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Truk Tronton Khusus</td>
                  <td class="p-2.5 font-mono">$4\\text{ meter}$</td>
                  <td class="p-2.5 font-mono">$4{,}5\\text{ meter}$</td>
                  <td class="p-2.5">Melaju tepat di tengah jalan ($-2{,}0 \\le x \\le +2{,}0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p5-3",
      title: "Wacana 3: Skema Komisi & Bonus Berjenjang Tim Pemasaran Startup Edutech",
      domain: "Aljabar",
      badge: "Soal No. 9 – 12",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah perusahaan startup edutech memberikan skema remunerasi berbasis kinerja berjenjang (tiered commission)
            kepada petugas hubungan kemitraan sekolah. Setiap staf menerima <strong>gaji pokok tetap sebesar $\\text{Rp}4.000.000,00$ per bulan</strong>,
            ditambah komisi per paket langganan premium yang berhasil terjual dalam bulan tersebut:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Tingkat Penjualan</th>
                  <th class="p-2.5 font-bold">Volume Penjualan ($n$ paket)</th>
                  <th class="p-2.5 font-bold">Besar Komisi per Paket Terjual</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tingkat I (Dasar)</td>
                  <td class="p-2.5">Paket ke-$1$ s.d. paket ke-$20$ ($20$ paket pertama)</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}150.000,00\\text{ / paket}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tingkat II (Menengah)</td>
                  <td class="p-2.5">Paket ke-$21$ s.d. paket ke-$50$ ($30$ paket berikutnya)</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}250.000,00\\text{ / paket}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tingkat III (Tinggi)</td>
                  <td class="p-2.5">Paket ke-$51$ dan seterusnya</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}400.000,00\\text{ / paket}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p5-4",
      title: "Wacana 4: Model Kapasitas & Kompresi Data Server Cloud",
      domain: "Aljabar",
      badge: "Soal No. 13 – 16",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Volume penyimpanan data pengguna sebuah aplikasi mobile bertumbuh secara eksponensial setiap tahunnya.
            Pada awal peluncuran (tahun ke-$0$), volume data tersimpan adalah <strong>$D_0 = 50\\text{ Terabyte}$ (TB)</strong>.
            Laju pertumbuhan data per tahun diperkirakan konstan sebesar <strong>$20\\%$ per tahun</strong> ($r = 0{,}20$).
          </p>
          <p>
            Model volume data tanpa kompresi pada tahun ke-$t$ dirumuskan sebagai:
            $$D(t) = D_0 \\times (1 + r)^t = 50 \\times (1{,}2)^t$$
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Metode Pengelolaan Data</th>
                  <th class="p-2.5 font-bold">Rasio Efisiensi Ruang</th>
                  <th class="p-2.5 font-bold">Biaya Sewa Server Cloud Bulanan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tanpa Kompresi (Mentah)</td>
                  <td class="p-2.5 font-mono">$100\\%$ (beban penuh)</td>
                  <td class="p-2.5">$\\$5{,}00\\text{ per TB per bulan}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kompresi Algoritma Baru</td>
                  <td class="p-2.5 font-mono">$70\\%$ (menghemat $30\\%$)</td>
                  <td class="p-2.5">$\\$5{,}00\\text{ per TB per bulan}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p5-5",
      title: "Wacana 5: Teorema Bayes dalam Akurasi Skrining Tes Cepat Medis",
      domain: "Data & Peluang",
      badge: "Soal No. 17 – 20",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah perangkat uji tes cepat (rapid test) antigen dikembangkan untuk mendeteksi penyakit infeksi langka pada suatu populasi.
            Berdasarkan survei epidemiologi, prevalensi penyakit tersebut di masyarakat adalah <strong>$1$ dari $1.000$ orang</strong>
            ($P(\\text{Sakit}) = 0{,}001 = 0{,}1\\%$). Dengan demikian, peluang orang sehat adalah <strong>$P(\\text{Sehat}) = 0{,}999 = 99{,}9\\%$</strong>.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Karakteristik Alat Uji</th>
                  <th class="p-2.5 font-bold">Probabilitas Bersyarat</th>
                  <th class="p-2.5 font-bold">Makna Klinis</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Sensitivitas Alat (True Positive Rate)</td>
                  <td class="p-2.5 font-mono">$P(+ \\mid \\text{Sakit}) = 0{,}98$ ($98\\%$)</td>
                  <td class="p-2.5">Peluang tes positif jika pasien benar-benar sakit</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Spesifisitas Alat (True Negative Rate)</td>
                  <td class="p-2.5 font-mono">$P(- \\mid \\text{Sehat}) = 0{,}95$ ($95\\%$)</td>
                  <td class="p-2.5">Peluang tes negatif jika pasien benar-benar sehat</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Positif Palsu (False Positive Rate)</td>
                  <td class="p-2.5 font-mono">$P(+ \\mid \\text{Sehat}) = 0{,}05$ ($5\\%$)</td>
                  <td class="p-2.5">Peluang tes salah menyatakan positif pada orang sehat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];

  // ============================================================================
  // 2. DAFTAR SOAL PAKET E (SOAL 1 - 20)
  // ============================================================================
  const PM_PAKET5_QUESTIONS = [
    // Soal 1
    {
      id: 501,
      stimulusId: "stimulus-p5-1",
      number: 1,
      domain: "Bilangan",
      subtopic: "Jarak Euclidean & Rute Pengantaran Multi-Drop",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika drone terbang berurutan menempuh rute siklus sirkular: Hub $\\rightarrow$ Klinik A $\\rightarrow$ Klinik B $\\rightarrow$ Klinik C $\\rightarrow$ Hub, berapakah taksiran total jarak tempuh seluruh penerbangan misi tersebut?",
      options: [
        "$$15{,}4\\text{ km}$$",
        "$$17{,}2\\text{ km}$$",
        "$$19{,}0\\text{ km}$$",
        "$$21{,}5\\text{ km}$$",
        "$$24{,}0\\text{ km}$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Hub ke A $= 5\\text{ km}$, A ke B $= 3{,}61\\text{ km}$, B ke C $= 3{,}61\\text{ km}$, C ke Hub $= 5\\text{ km}$.",
        relations: "$\\text{Total Jarak} = 5 + 3{,}61 + 3{,}61 + 5 = 17{,}22\\text{ km}$.",
        strategy: "Jumlahkan keempat segmen jarak perjalanan drone."
      },
      extractionTable: [
        { fact: "Hub ke A", model: "$d_1 = 5\\text{ km}$", role: "Segmen awal" },
        { fact: "A ke B & B ke C", model: "$d_2 + d_3 = 3{,}61 + 3{,}61 = 7{,}22\\text{ km}$", role: "Segmen antar-klinik" },
        { fact: "C ke Hub", model: "$d_4 = 5\\text{ km}$", role: "Segmen kepulangan" }
      ],
      explanation: `
        $$\\text{Total Jarak} = d(\\text{Hub}, A) + d(A, B) + d(B, C) + d(C, \\text{Hub})$$
        $$\\text{Total Jarak} = 5 + 3{,}61 + 3{,}61 + 5 = 17{,}22\\text{ km} \\approx 17{,}2\\text{ km}$$
      `,
      tacticalShortcut: "5 + 3,6 + 3,6 + 5 = 17,2 km."
    },
    // Soal 2
    {
      id: 502,
      stimulusId: "stimulus-p5-1",
      number: 2,
      domain: "Bilangan",
      subtopic: "Analisis Efisiensi Rute Radial vs Sirkular",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika drone menggunakan skema radial (harus kembali ke Hub setiap selesai mengantar satu klinik, yaitu Hub-A-Hub, Hub-B-Hub, dan Hub-C-Hub), total jarak yang ditempuh adalah 32 km. Berapa kilometer jarak yang dihemat jika drone beralih ke skema sirkular multi-drop (17,2 km)?",
      options: [
        "$$10{,}8\\text{ km}$$",
        "$$12{,}4\\text{ km}$$",
        "$$14{,}8\\text{ km}$$",
        "$$16{,}2\\text{ km}$$",
        "$$18{,}0\\text{ km}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Jarak radial $= 32\\text{ km}$, Jarak sirkular $= 17{,}2\\text{ km}$.",
        relations: "$\\text{Penghematan} = 32 - 17{,}2 = 14{,}8\\text{ km}$.",
        strategy: "Kurangkan jarak tempuh radial dengan jarak tempuh sirkular."
      },
      extractionTable: [
        { fact: "Jarak Skema Radial", model: "$2(5 + 6 + 5) = 32\\text{ km}$", role: "Jarak rute terpisah" },
        { fact: "Jarak Skema Sirkular", model: "$17{,}2\\text{ km}$", role: "Jarak rute gabungan" }
      ],
      explanation: `
        $$\\text{Penghematan Jarak} = 32\\text{ km} - 17{,}2\\text{ km} = 14{,}8\\text{ km}$$
      `,
      tacticalShortcut: "32 - 17,2 = 14,8 km."
    },
    // Soal 3
    {
      id: 503,
      stimulusId: "stimulus-p5-1",
      number: 3,
      domain: "Bilangan",
      subtopic: "Kinematika Kecepatan Rata-rata Drone",
      type: "numeric_input",
      level: "Mudah",
      prompt: "Jika kecepatan jelajah konstan drone adalah $45\\text{ km/jam}$ dan drone menempuh rute radial Hub-B-Hub dengan total jarak 12 km (tanpa menghitung waktu bongkar muat), berapakah durasi penerbangan bolak-balik tersebut dalam satuan MENIT?",
      correctNumeric: 16,
      numericTolerance: 0,
      numericUnit: "menit",
      deconstructorClue: {
        variables: "Jarak $s = 12\\text{ km}$, Kecepatan $v = 45\\text{ km/jam}$.",
        relations: "$t = \\frac{12}{45}\\text{ jam} = \\frac{12}{45} \\times 60\\text{ menit}$.",
        strategy: "Bagi jarak dengan kecepatan lalu kalikan 60."
      },
      extractionTable: [
        { fact: "Jarak Bolak-Balik Hub-B", model: "$2 \\times 6 = 12\\text{ km}$", role: "Panjang lintasan" },
        { fact: "Kecepatan Drone", model: "$45\\text{ km/jam}$", role: "Kelajuan konstan" }
      ],
      explanation: `
        $$t = \\frac{12\\text{ km}}{45\\text{ km/jam}} \\times 60\\text{ menit} = \\frac{12 \\times 4}{3} = 4 \\times 4 = 16\\text{ menit}$$
      `,
      tacticalShortcut: "12 / 45 × 60 = 16 menit."
    },
    // Soal 4
    {
      id: 504,
      stimulusId: "stimulus-p5-1",
      number: 4,
      domain: "Bilangan",
      subtopic: "Analisis Logika Operasional Drone Logistik",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus misi pengantaran armada drone otonom di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Jarak lurus antara Klinik A dan Klinik C diukur secara horizontal adalah tepat 6 km.",
          correct: true
        },
        {
          text: "Dengan kapasitas baterai maksimum yang mampu menempuh jarak jelajah 25 km, drone mampu menyelesaikan seluruh misi rute sirkular multi-drop dalam sekali pengisian baterai.",
          correct: true
        },
        {
          text: "Titik Klinik B terletak lebih dekat ke Hub dibandingkan Klinik A.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Jarak A $(3, 4)$ ke C $(-3, 4)$: ordinat sama $y = 4$, jarak $= 3 - (-3) = 6\\text{ km}$ (Benar). (2) Jarak sirkular $17{,}2\\text{ km} < 25\\text{ km}$ kapasitas baterai (Benar). (3) Jarak B ke Hub $= 6\\text{ km}$, sedangkan A ke Hub $= 5\\text{ km}$. Karena $6 > 5$, B lebih jauh, bukan lebih dekat (Salah).",
        relations: "Geometri analitis titik koordinat dan evaluasi jangkauan jelajah.",
        strategy: "Cek jarak tiap titik koordinat secara langsung."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Jarak A ke C", model: "$|3 - (-3)| = 6\\text{ km}$", role: "Benar" },
        { fact: "Pernyataan 2: Kapasitas Baterai", model: "$17{,}2\\text{ km} < 25\\text{ km}$", role: "Benar" },
        { fact: "Pernyataan 3: Jarak ke Hub", model: "$d_B = 6 > d_A = 5$", role: "Salah, B lebih jauh" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Koordinat Klinik A adalah $(3, 4)$ dan Klinik C adalah $(-3, 4)$. Karena nilai ordinatnya sama ($y = 4$), jaraknya adalah selisih absisnya: $3 - (-3) = 6\\text{ km}$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Total rute sirkular adalah sekitar $17{,}2\\text{ km}$, yang masih jauh di bawah batas maksimal kapasitas baterai $25\\text{ km}$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Jarak Klinik B ke Hub adalah $6\\text{ km}$, sedangkan Klinik A ke Hub adalah $5\\text{ km}$. Jadi Klinik B lebih jauh dari Hub dibandingkan Klinik A.
      `,
      tacticalShortcut: "P1: 3 - (-3) = 6 km (B). P2: 17,2 < 25 km (B). P3: 6 km > 5 km (S)."
    },

    // Soal 5
    {
      id: 505,
      stimulusId: "stimulus-p5-2",
      number: 5,
      domain: "Geometri",
      subtopic: "Tinggi Langit-langit Terowongan pada Tepi Truk",
      type: "single_choice",
      level: "Sedang",
      prompt: "Sebuah truk kontainer dengan lebar 3 meter melintas tepat di tengah jalan raya terowongan (sehingga tepi terluar truk berada pada $x = +1{,}5\\text{ meter}$ dan $x = -1{,}5\\text{ meter}$). Berapakah ketinggian langit-langit terowongan tepat di atas tepi terluar truk kontainer tersebut?",
      options: [
        "$$5{,}250\\text{ meter}$$",
        "$$5{,}500\\text{ meter}$$",
        "$$5{,}625\\text{ meter}$$",
        "$$5{,}750\\text{ meter}$$",
        "$$5{,}875\\text{ meter}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Fungsi: $y = 6 - \\frac{1}{6}x^2$, Posisi tepi truk: $x = 1{,}5 = \\frac{3}{2}$.",
        relations: "$y(1{,}5) = 6 - \\frac{1}{6}(1{,}5)^2 = 6 - \\frac{2{,}25}{6} = 6 - 0{,}375 = 5{,}625\\text{ m}$.",
        strategy: "Substitusikan $x = 1{,}5$ ke fungsi parabola terowongan."
      },
      extractionTable: [
        { fact: "Posisi Absis Tepi Truk", model: "$x = 1{,}5\\text{ meter}$", role: "Titik evaluasi" },
        { fact: "Tinggi Langit-langit", model: "$y = 6 - \\frac{2{,}25}{6} = 5{,}625\\text{ m}$", role: "Batas ruang atas" }
      ],
      explanation: `
        $$y = 6 - \\frac{1}{6}(1{,}5)^2 = 6 - \\frac{2{,}25}{6} = 6 - 0{,}375 = 5{,}625\\text{ meter}$$
      `,
      tacticalShortcut: "6 - 2,25 / 6 = 6 - 0,375 = 5,625 meter."
    },
    // Soal 6
    {
      id: 506,
      stimulusId: "stimulus-p5-2",
      number: 6,
      domain: "Geometri",
      subtopic: "Jarak Bebas Vertikal (Vertical Clearance)",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah jarak bebas vertikal (clearance) antara atap truk kontainer setinggi 4 meter dengan langit-langit terowongan pada bagian tepinya?",
      options: [
        "$$1{,}250\\text{ meter}$$",
        "$$1{,}375\\text{ meter}$$",
        "$$1{,}500\\text{ meter}$$",
        "$$1{,}625\\text{ meter}$$",
        "$$1{,}750\\text{ meter}$$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "Tinggi langit-langit $= 5{,}625\\text{ m}$, Tinggi truk $= 4{,}000\\text{ m}$.",
        relations: "$\\text{Clearance} = 5{,}625 - 4{,}000 = 1{,}625\\text{ m}$.",
        strategy: "Kurangkan tinggi terowongan pada tepi truk dengan tinggi truk."
      },
      extractionTable: [
        { fact: "Tinggi Langit-langit di Tepi", model: "$5{,}625\\text{ meter}$", role: "Atap terowongan" },
        { fact: "Tinggi Muatan Truk", model: "$4{,}000\\text{ meter}$", role: "Atap fisik truk" }
      ],
      explanation: `
        $$\\text{Jarak Bebas Vertikal} = 5{,}625\\text{ m} - 4{,}000\\text{ m} = 1{,}625\\text{ meter} = 162{,}5\\text{ cm}$$
      `,
      tacticalShortcut: "5,625 - 4 = 1,625 meter."
    },
    // Soal 7
    {
      id: 507,
      stimulusId: "stimulus-p5-2",
      number: 7,
      domain: "Geometri",
      subtopic: "Batas Lebar Maksimum Muatan Truk",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Sebuah truk pengangkut alat berat memiliki tinggi muatan 4,5 meter. Berdasarkan persamaan terowongan $y = 6 - \\frac{1}{6}x^2$, berapakah LEBAR MAKSIMUM truk tersebut agar atap tepinya tepat menyentuh langit-langit terowongan (tuliskan nilai lebarnya dalam satuan meter)?",
      correctNumeric: 6,
      numericTolerance: 0,
      numericUnit: "meter",
      deconstructorClue: {
        variables: "Tinggi $y = 4{,}5\\text{ meter}$. Cari lebar $W = 2x$.",
        relations: "$4{,}5 = 6 - \\frac{1}{6}x^2 \\implies \\frac{1}{6}x^2 = 1{,}5 \\implies x^2 = 9 \\implies x = 3$. Lebar $= 2x = 6\\text{ meter}$.",
        strategy: "Cari nilai $x$, lalu kalikan dua untuk mendapatkan lebar total simetris."
      },
      extractionTable: [
        { fact: "Ketinggian Target", model: "$y = 4{,}5\\text{ m}$", role: "Tinggi kendaraan" },
        { fact: "Jarak Horizontal dari Pusat", model: "$x^2 = 6 \\times 1{,}5 = 9 \\implies x = 3\\text{ m}$", role: "Separuh lebar maksimal" }
      ],
      explanation: `
        $$4{,}5 = 6 - \\frac{1}{6}x^2$$
        $$\\frac{1}{6}x^2 = 6 - 4{,}5 = 1{,}5$$
        $$x^2 = 1{,}5 \\times 6 = 9 \\implies x = 3\\text{ meter}$$
        Karena kurva terowongan simetris di kedua sisi jalan, lebar maksimum total adalah:
        $$\\text{Lebar} = 2x = 2 \\times 3 = 6\\text{ meter}$$
      `,
      tacticalShortcut: "1/6 x^2 = 1,5 -> x^2 = 9 -> x = 3 -> Lebar = 2 × 3 = 6 meter."
    },
    // Soal 8
    {
      id: 508,
      stimulusId: "stimulus-p5-2",
      number: 8,
      domain: "Geometri",
      subtopic: "Karakteristik Kurva Parabola Terowongan",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus geometri penampang terowongan jalan tol di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Tepat di tepi terluar jalan raya (x = 6 meter dari sumbu tengah), tinggi langit-langit terowongan tepat menyentuh permukaan jalan (y = 0 meter).",
          correct: true
        },
        {
          text: "Luas penampang terowongan parabola tersebut dapat dihitung dengan rumus Archimedes yaitu 2/3 × Alas × Tinggi = 48 meter persegi.",
          correct: true
        },
        {
          text: "Jika sebuah truk kontainer melaju di lajur paling pinggir dekat dinding terowongan (x = 5 meter), truk setinggi 4 meter tersebut masih dapat melintas tanpa menabrak atap terowongan.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Pada $x = 6$: $y = 6 - \\frac{1}{6}(36) = 6 - 6 = 0\\text{ m}$ (Benar). (2) Rumus luas segmen parabola Archimedes: $L = \\frac{2}{3} \\times \\text{Alas} \\times \\text{Tinggi} = \\frac{2}{3} \\times 12 \\times 6 = 48\\text{ m}^2$ (Benar). (3) Pada $x = 5$: $y = 6 - \\frac{25}{6} = 6 - 4{,}17 = 1{,}83\\text{ m}$. Karena tinggi truk $4\\text{ m} > 1{,}83\\text{ m}$, truk pasti menabrak (Salah).",
        relations: "Sifat titik potong sumbu, kalkulus luas parabola, dan batas fisik lajur tepi.",
        strategy: "Uji nilai fungsi parabola pada tiap kondisi pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Titik Nol Tepi", model: "$y(6) = 6 - 6 = 0$", role: "Benar" },
        { fact: "Pernyataan 2: Luas Parabola", model: "$L = \\frac{2}{3}(12)(6) = 48\\text{ m}^2$", role: "Benar" },
        { fact: "Pernyataan 3: Lajur Pinggir x=5", model: "$y(5) = 1{,}83\\text{ m} < 4\\text{ m}$", role: "Salah, truk akan menabrak" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        $$y(6) = 6 - \\frac{1}{6}(6^2) = 6 - 6 = 0\\text{ meter}$$
        Langit-langit menyentuh tanah tepat di tepi dasar jalan $x = 6\\text{ m}$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Berdasarkan teorema geometri Archimedes, luas daerah di bawah kurva parabola adalah:
        $$\\text{Luas} = \\frac{2}{3} \\times \\text{Alas} \\times \\text{Tinggi} = \\frac{2}{3} \\times 12 \\times 6 = 48\\text{ m}^2$$
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pada $x = 5\\text{ meter}$, tinggi langit-langit terowongan adalah:
        $$y(5) = 6 - \\frac{5^2}{6} = 6 - 4{,}17 = 1{,}83\\text{ meter}$$
        Truk setinggi $4\\text{ meter}$ jelas akan menabrak langit-langit terowongan.
      `,
      tacticalShortcut: "P1: 6 - 36/6 = 0 (B). P2: 2/3 × 12 × 6 = 48 (B). P3: y(5) = 1,83 m < 4 m tabrakan (S)."
    },

    // Soal 9
    {
      id: 509,
      stimulusId: "stimulus-p5-3",
      number: 9,
      domain: "Aljabar",
      subtopic: "Aritmetika Sosial & Komisi Berjenjang",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah total komisi penjualan yang diterima staf jika berhasil menjual tepat 20 paket langganan premium dalam satu bulan?",
      options: [
        "$$\\text{Rp}2.500.000,00$$",
        "$$\\text{Rp}3.000.000,00$$",
        "$$\\text{Rp}3.500.000,00$$",
        "$$\\text{Rp}4.000.000,00$$",
        "$$\\text{Rp}5.000.000,00$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Penjualan $= 20\\text{ paket}$, seluruhnya berada di Tingkat I dengan komisi $\\text{Rp}150.000\\text{ / paket}$.",
        relations: "$\\text{Komisi} = 20 \\times 150.000$.",
        strategy: "Kalikan jumlah paket dengan tarif komisi Tingkat I."
      },
      extractionTable: [
        { fact: "Paket Tingkat I", model: "$20\\text{ paket}$", role: "Volume penjualan" },
        { fact: "Komisi Satuan", model: "$\\text{Rp}150.000,00$", role: "Tarif komisi" }
      ],
      explanation: `
        $$\\text{Komisi} = 20 \\times \\text{Rp}150.000,00 = \\text{Rp}3.000.000,00$$
      `,
      tacticalShortcut: "20 × 150.000 = Rp3.000.000,00."
    },
    // Soal 10
    {
      id: 510,
      stimulusId: "stimulus-p5-3",
      number: 10,
      domain: "Aljabar",
      subtopic: "Komisi Berjenjang Multi-Tingkat",
      type: "single_choice",
      level: "Sedang",
      prompt: "Seorang staf bernama Dimas berhasil menjual 60 paket langganan dalam satu bulan. Berapakah total komisi penjualan murni yang diperoleh Dimas?",
      options: [
        "$$\\text{Rp}11.500.000,00$$",
        "$$\\text{Rp}13.000.000,00$$",
        "$$\\text{Rp}14.500.000,00$$",
        "$$\\text{Rp}16.000.000,00$$",
        "$$\\text{Rp}18.500.000,00$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Total 60 paket: Tingkat I (20 paket @ 150.000), Tingkat II (30 paket @ 250.000), Tingkat III (10 paket @ 400.000).",
        relations: "$\\text{Komisi} = (20 \\times 150.000) + (30 \\times 250.000) + (10 \\times 400.000)$.",
        strategy: "Hitung komisi per tingkat lalu jumlahkan."
      },
      extractionTable: [
        { fact: "Tingkat I (20 paket)", model: "$20 \\times 150.000 = 3.000.000$", role: "Komisi blok 1" },
        { fact: "Tingkat II (30 paket)", model: "$30 \\times 250.000 = 7.500.000$", role: "Komisi blok 2" },
        { fact: "Tingkat III (10 paket)", model: "$10 \\times 400.000 = 4.000.000$", role: "Komisi blok 3" }
      ],
      explanation: `
        $$\\text{Komisi Tingkat I} = 20 \\times \\text{Rp}150.000 = \\text{Rp}3.000.000,00$$
        $$\\text{Komisi Tingkat II} = 30 \\times \\text{Rp}250.000 = \\text{Rp}7.500.000,00$$
        $$\\text{Komisi Tingkat III} = 10 \\times \\text{Rp}400.000 = \\text{Rp}4.000.000,00$$
        $$\\text{Total Komisi} = 3.000.000 + 7.500.000 + 4.000.000 = \\text{Rp}14.500.000,00$$
      `,
      tacticalShortcut: "3 jt + 7,5 jt + 4 jt = Rp14.500.000,00."
    },
    // Soal 11
    {
      id: 511,
      stimulusId: "stimulus-p5-3",
      number: 11,
      domain: "Aljabar",
      subtopic: "Total Take Home Pay (Gaji Pokok + Komisi)",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Jika staf berhasil menjual 60 paket dalam satu bulan, berapakah total penghasilan kotor (take home pay = gaji pokok + komisi) yang diterima staf tersebut dalam satuan JUTA RUPIAH (tuliskan angka desimalnya menggunakan koma atau titik, misalnya jika 15,5 juta tulis 18.5)?",
      correctNumeric: 18.5,
      numericTolerance: 0.1,
      numericUnit: "juta rupiah",
      deconstructorClue: {
        variables: "Gaji pokok $= \\text{Rp}4.000.000,00 = 4\\text{ juta}$, Total komisi 60 paket $= \\text{Rp}14.500.000,00 = 14{,}5\\text{ juta}$.",
        relations: "$\\text{Take Home Pay} = 4 + 14{,}5 = 18{,}5\\text{ juta rupiah}$.",
        strategy: "Jumlahkan gaji pokok dengan total komisi penjualan."
      },
      extractionTable: [
        { fact: "Gaji Pokok", model: "$4\\text{ juta rupiah}$", role: "Penghasilan tetap" },
        { fact: "Komisi 60 Paket", model: "$14{,}5\\text{ juta rupiah}$", role: "Insentif penjualan" }
      ],
      explanation: `
        $$\\text{Take Home Pay} = \\text{Gaji Pokok} + \\text{Total Komisi}$$
        $$\\text{Take Home Pay} = \\text{Rp}4.000.000 + \\text{Rp}14.500.000 = \\text{Rp}18.500.000,00 = 18{,}5\\text{ juta rupiah}$$
      `,
      tacticalShortcut: "4 + 14,5 = 18,5 juta rupiah."
    },
    // Soal 12
    {
      id: 512,
      stimulusId: "stimulus-p5-3",
      number: 12,
      domain: "Aljabar",
      subtopic: "Analisis Kritis Fungsi Tangga Penghasilan",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus skema remunerasi komisi bertingkat startup di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Untuk memperoleh komisi tepat sebesar Rp10.500.000,00, seorang staf harus menjual sebanyak tepat 50 paket.",
          correct: true
        },
        {
          text: "Rata-rata komisi per paket yang diterima oleh staf yang menjual 20 paket bernilai sama persis dengan staf yang menjual 40 paket.",
          correct: false
        },
        {
          text: "Staf yang tidak berhasil menjual satu paket pun ($0\\text{ paket}$) tetap membawa pulang penghasilan sebesar Rp4.000.000,00.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Untuk 50 paket: $20 \\times 150.000 + 30 \\times 250.000 = 3.000.000 + 7.500.000 = 10.500.000$ (Benar). (2) 20 paket rata-rata Rp150.000/paket. 40 paket: $(3 jt + 20 \\times 250 rb)/40 = 8 jt / 40 = 200 rb/paket \\ne 150 rb$ (Salah). (3) Gaji pokok tetap dibayarkan meski penjualan 0 (Benar).",
        relations: "Sifat tarif marjinal berjenjang vs tarif rata-rata.",
        strategy: "Uji angka komisi pada tiap pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Komisi 50 Paket", model: "$3\\text{ jt} + 7{,}5\\text{ jt} = 10{,}5\\text{ jt}$", role: "Benar" },
        { fact: "Pernyataan 2: Rata-rata Komisi", model: "$150.000 \\ne 200.000$", role: "Salah, rata-rata meningkat" },
        { fact: "Pernyataan 3: Gaji Pokok", model: "$\\text{Gaji Pokok} = 4.000.000$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Komisi 50 paket $= (20 \\times 150.000) + (30 \\times 250.000) = 3.000.000 + 7.500.000 = \\text{Rp}10.500.000,00$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Staf 20 paket menerima rata-rata $\\text{Rp}150.000,00$ per paket.
        Staf 40 paket menerima total $3.000.000 + (20 \\times 250.000) = 8.000.000$, dengan rata-rata $\\frac{8.000.000}{40} = \\text{Rp}200.000,00$ per paket. Nilainya tidak sama.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Gaji pokok bersifat tetap tanpa dipengaruhi pencapaian kuota penjualan, sehingga staf tetap memperoleh $\\text{Rp}4.000.000,00$.
      `,
      tacticalShortcut: "P1: 3 + 7,5 = 10,5 jt (B). P2: 150rb vs 200rb (S). P3: Hak gaji pokok tetap (B)."
    },

    // Soal 13
    {
      id: 513,
      stimulusId: "stimulus-p5-4",
      number: 13,
      domain: "Aljabar",
      subtopic: "Pertumbuhan Eksponensial Data Server",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berdasarkan fungsi pertumbuhan data $D(t) = 50 \\times (1{,}2)^t$, berapakah volume data mentah (tanpa kompresi) pada tahun ke-3?",
      options: [
        "$$72{,}0\\text{ TB}$$",
        "$$80{,}0\\text{ TB}$$",
        "$$86{,}4\\text{ TB}$$",
        "$$92{,}8\\text{ TB}$$",
        "$$100{,}0\\text{ TB}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$D_0 = 50$, $t = 3$, $(1{,}2)^3 = 1{,}728$.",
        relations: "$D(3) = 50 \\times 1{,}728 = 86{,}4\\text{ TB}$.",
        strategy: "Hitung pangkat tiga dari 1,2 lalu kalikan dengan 50."
      },
      extractionTable: [
        { fact: "Faktor Pengali 3 Tahun", model: "$(1{,}2)^3 = 1{,}728$", role: "Pertumbuhan majemuk 20%" },
        { fact: "Volume Awal", model: "$50\\text{ TB}$", role: "Kapasitas dasar" }
      ],
      explanation: `
        $$D(3) = 50 \\times (1{,}2)^3 = 50 \\times 1{,}728 = 86{,}4\\text{ TB}$$
      `,
      tacticalShortcut: "50 × 1,728 = 86,4 TB."
    },
    // Soal 14
    {
      id: 514,
      stimulusId: "stimulus-p5-4",
      number: 14,
      domain: "Aljabar",
      subtopic: "Efisiensi Kompresi & Penghematan Ruang",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika pada tahun ke-3 volume data mentah mencapai 86,4 TB dan perusahaan menerapkan algoritma kompresi data yang menghemat 30% ruang (sehingga ukuran menjadi 70%), berapakah volume data yang harus disimpan di server?",
      options: [
        "$$56{,}24\\text{ TB}$$",
        "$$60{,}48\\text{ TB}$$",
        "$$64{,}12\\text{ TB}$$",
        "$$68{,}30\\text{ TB}$$",
        "$$72{,}00\\text{ TB}$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Volume mentah $= 86{,}4\\text{ TB}$, Rasio terkompresi $= 70\\% = 0{,}70$.",
        relations: "$D_{\\text{kompres}} = 86{,}4 \\times 0{,}70$.",
        strategy: "Kalikan 86,4 dengan 0,7."
      },
      extractionTable: [
        { fact: "Ukuran Mentah", model: "$86{,}4\\text{ TB}$", role: "Ukuran awal" },
        { fact: "Faktor Ukuran Terkompresi", model: "$0{,}70$", role: "Sisa ruang setelah hemat 30%" }
      ],
      explanation: `
        $$D_{\\text{kompres}} = 86{,}4\\text{ TB} \\times 0{,}70 = 60{,}48\\text{ TB}$$
      `,
      tacticalShortcut: "86,4 × 0,7 = 60,48 TB."
    },
    // Soal 15
    {
      id: 515,
      stimulusId: "stimulus-p5-4",
      number: 15,
      domain: "Aljabar",
      subtopic: "Penghematan Biaya Sewa Server Cloud",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Dengan biaya sewa server $\\$5{,}00\\text{ per TB per bulan}$, berapakah penghematan biaya sewa cloud yang diperoleh perusahaan dalam SATU BULAN pada tahun ke-3 berkat kompresi data yang menghemat 25,92 TB (tuliskan nilai penghematan dalam DOLLAR AMERIKA)?",
      correctNumeric: 129.6,
      numericTolerance: 0.1,
      numericUnit: "USD",
      deconstructorClue: {
        variables: "Kapasitas dihemat $= 86{,}4 - 60{,}48 = 25{,}92\\text{ TB}$. Tarif $= \\$5{,}00\\text{ / TB / bulan}$.",
        relations: "$\\text{Penghematan} = 25{,}92 \\times 5 = 129{,}6\\text{ USD}$.",
        strategy: "Kalikan selisih TB dengan tarif sewa per TB."
      },
      extractionTable: [
        { fact: "Selisih TB Dihemat", model: "$86{,}4 \\times 0{,}30 = 25{,}92\\text{ TB}$", role: "Volume hemat" },
        { fact: "Tarif Sewa per TB", model: "$\\$5{,}00$", role: "Biaya satuan bulanan" }
      ],
      explanation: `
        $$\\text{Selisih TB} = 86{,}4\\text{ TB} \\times 30\\% = 25{,}92\\text{ TB}$$
        $$\\text{Penghematan Bulanan} = 25{,}92 \\times \\$5{,}00 = \\$129{,}60$$
      `,
      tacticalShortcut: "25,92 × 5 = 129,6 USD."
    },
    // Soal 16
    {
      id: 516,
      stimulusId: "stimulus-p5-4",
      number: 16,
      domain: "Aljabar",
      subtopic: "Analisis Pelipatgandaan Volume Data (Doubling Time)",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus model pertumbuhan data dan kompresi server di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Volume data mentah pada tahun ke-1 adalah tepat 60 TB.",
          correct: true
        },
        {
          text: "Dengan laju pertumbuhan 20% per tahun, volume data mentah akan berlipat ganda menjadi dua kali lipat (100 TB) dalam waktu kurang dari 3 tahun.",
          correct: false
        },
        {
          text: "Algoritma kompresi 30% berhasil membuat volume data terkompresi pada tahun ke-2 (43,2 TB) bernilai lebih kecil daripada volume data mentah di tahun ke-0 (50 TB).",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Tahun 1: $50 \\times 1{,}2 = 60\\text{ TB}$ (Benar). (2) Pada tahun 3 volume baru $86{,}4\\text{ TB} < 100\\text{ TB}$. Diperlukan sekitar 3,8 tahun untuk mencapai 100 TB, bukan kurang dari 3 tahun (Salah). (3) Tahun 2 mentah $= 50 \\times 1{,}44 = 72\\text{ TB}$. Terkompresi $= 72 \\times 0{,}7 = 50{,}4\\text{ TB} \\approx 50{,}4 > 50$ atau periksa: $72 \\times 0{,}7 = 50{,}4$. Evaluasi pernyataan: $50{,}4$ tidak lebih kecil dari $50$.",
        relations: "Kalkulasi tahun ke-1, waktu penggandaan (rule of 72), dan ukuran terkompresi tahun 2.",
        strategy: "Periksa nilai numerik pada ketiga pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Tahun ke-1", model: "$50 \\times 1{,}2 = 60\\text{ TB}$", role: "Benar" },
        { fact: "Pernyataan 2: Doubling Time", model: "$D(3) = 86{,}4 < 100\\text{ TB}$", role: "Salah, butuh > 3 tahun" },
        { fact: "Pernyataan 3: Tahun ke-2", model: "$50{,}4 > 50$", role: "Salah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        $$D(1) = 50 \\times 1{,}2 = 60\\text{ TB}$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Pada tahun ke-3 volume mentah baru mencapai $86{,}4\\text{ TB}$, belum mencapai $100\\text{ TB}$. Berdasarkan aturan penggandaan $\\log(2) / \\log(1{,}2) \\approx 3{,}8\\text{ tahun}$, dibutuhkan hampir 4 tahun.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Volume mentah tahun ke-2 adalah $50 \\times 1{,}44 = 72\\text{ TB}$.
        Setelah dikompresi: $72 \\times 0{,}70 = 50{,}4\\text{ TB}$. Karena $50{,}4 > 50$, nilainya masih lebih besar dari data tahun ke-0.
      `,
      tacticalShortcut: "P1: 50 × 1,2 = 60 (B). P2: Tahun 3 baru 86,4 TB < 100 (S). P3: 72 × 0,7 = 50,4 > 50 (S)."
    },

    // Soal 17
    {
      id: 517,
      stimulusId: "stimulus-p5-5",
      number: 17,
      domain: "Data & Peluang",
      subtopic: "Peluang Bersama Kasus True Positive",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapakah probabilitas bahwa seseorang yang dipilih secara acak dari populasi adalah orang yang SAKIT DAN sekaligus memperoleh hasil tes POSITIF ($P(\\text{Sakit} \\cap +)$)?",
      options: [
        "$$0{,}00049$$",
        "$$0{,}00098$$",
        "$$0{,}00100$$",
        "$$0{,}00490$$",
        "$$0{,}00980$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "$P(\\text{Sakit}) = 0{,}001$, $P(+ \\mid \\text{Sakit}) = 0{,}98$.",
        relations: "$P(\\text{Sakit} \\cap +) = P(\\text{Sakit}) \\times P(+ \\mid \\text{Sakit}) = 0{,}001 \\times 0{,}98$.",
        strategy: "Kalikan prevalensi penyakit dengan sensitivitas tes."
      },
      extractionTable: [
        { fact: "Prevalensi Penyakit", model: "$0{,}001$", role: "Peluang prior sakit" },
        { fact: "Sensitivitas Tes", model: "$0{,}98$", role: "Akurasi positif pada orang sakit" }
      ],
      explanation: `
        $$P(\\text{Sakit} \\cap +) = P(\\text{Sakit}) \\times P(+ \\mid \\text{Sakit}) = 0{,}001 \\times 0{,}98 = 0{,}00098$$
      `,
      tacticalShortcut: "0,001 × 0,98 = 0,00098."
    },
    // Soal 18
    {
      id: 518,
      stimulusId: "stimulus-p5-5",
      number: 18,
      domain: "Data & Peluang",
      subtopic: "Peluang Total Hasil Tes Positif",
      type: "single_choice",
      level: "Sulit",
      prompt: "Berapakah total probabilitas seseorang dari populasi tersebut akan memperoleh hasil tes POSITIF, baik dari kasus positif benar maupun positif palsu ($P(+)$)?",
      options: [
        "$$0{,}01098$$",
        "$$0{,}02545$$",
        "$$0{,}03500$$",
        "$$0{,}05093$$",
        "$$0{,}06250$$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "Positif dari orang sakit: $0{,}001 \\times 0{,}98 = 0{,}00098$. Positif dari orang sehat (false positive): $0{,}999 \\times 0{,}05 = 0{,}04995$.",
        relations: "$P(+) = 0{,}00098 + 0{,}04995 = 0{,}05093$.",
        strategy: "Gunakan hukum probabilitas total."
      },
      extractionTable: [
        { fact: "True Positive", model: "$0{,}00098$", role: "Positif benar" },
        { fact: "False Positive", model: "$0{,}999 \\times 0{,}05 = 0{,}04995$", role: "Positif keliru" }
      ],
      explanation: `
        Hukum Probabilitas Total:
        $$P(+) = [P(\\text{Sakit}) \\cdot P(+ \\mid \\text{Sakit})] + [P(\\text{Sehat}) \\cdot P(+ \\mid \\text{Sehat})]$$
        $$P(+) = (0{,}001 \\times 0{,}98) + (0{,}999 \\times 0{,}05) = 0{,}00098 + 0{,}04995 = 0{,}05093 \\approx 5{,}09\\%$$
      `,
      tacticalShortcut: "0,00098 + 0,04995 = 0,05093."
    },
    // Soal 19
    {
      id: 519,
      stimulusId: "stimulus-p5-5",
      number: 19,
      domain: "Data & Peluang",
      subtopic: "Teorema Bayes & Positive Predictive Value (PPV)",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Jika seorang warga dinyatakan berstatus POSITIF dari hasil tes cepat tersebut, berapakah probabilitas bahwa ia SEBENARNYA BENAR-BENAR MENDERITA PENYAKIT tersebut (Positive Predictive Value: $P(\\text{Sakit} \\mid +)$)? Tuliskan persentasenya dibulatkan ke dua angka desimal di belakang koma (misalnya 1.92)! Ganti koma dengan titik bila perlu.",
      correctNumeric: 1.92,
      numericTolerance: 0.05,
      numericUnit: "%",
      deconstructorClue: {
        variables: "$P(\\text{Sakit} \\cap +) = 0{,}00098$, $P(+) = 0{,}05093$.",
        relations: "$P(\\text{Sakit} \\mid +) = \\frac{0{,}00098}{0{,}05093} \\times 100\\%$.",
        strategy: "Bagi peluang true positive dengan total peluang positif."
      },
      extractionTable: [
        { fact: "Pembilang Bayes", model: "$0{,}00098$", role: "Peluang sakit dan positif" },
        { fact: "Penyebut Bayes", model: "$0{,}05093$", role: "Peluang seluruh hasil positif" }
      ],
      explanation: `
        Berdasarkan Teorema Bayes:
        $$P(\\text{Sakit} \\mid +) = \\frac{P(\\text{Sakit} \\cap +)}{P(+)} = \\frac{0{,}00098}{0{,}05093} \\approx 0{,}01924 = 1{,}92\\%$$
        Meskipun akurasi tes sangat tinggi ($95\\% - 98\\%$), karena prevalensi penyakit sangat langka ($0{,}1\\%$), orang yang dinyatakan positif ternyata peluang benar-benar sakitnya hanya sekitar <strong>1,92%</strong> (sebagian besar adalah positif palsu).
      `,
      tacticalShortcut: "0,00098 / 0,05093 = 0,0192 = 1,92%."
    },
    // Soal 20
    {
      id: 520,
      stimulusId: "stimulus-p5-5",
      number: 20,
      domain: "Data & Peluang",
      subtopic: "Analisis Logika Epidemiologi & Tes Diagnostik",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Berdasarkan stimulus penerapan Teorema Bayes pada tes diagnostik medis di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Dari 100.000 orang di populasi tersebut, diperkirakan terdapat sekitar 4.995 orang sehat yang keliru mendapatkan hasil tes positif (kasus false positive).",
          correct: true
        },
        {
          text: "Jumlah orang yang memperoleh hasil tes positif palsu (false positive) jauh lebih banyak daripada jumlah orang yang memperoleh hasil tes positif benar (true positive).",
          correct: true
        },
        {
          text: "Jika seseorang memperoleh hasil tes negatif, peluang bahwa ia sebenarnya sakit (false negative rate) adalah lebih dari 10%.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Dari 100.000 orang: Sehat $= 99{,}9\\% = 99.900$. False positive $= 99.900 \\times 0{,}05 = 4.995\\text{ orang}$ (Benar). (2) True positive $= 100 \\times 0{,}98 = 98\\text{ orang}$. Karena $4.995 \\gg 98$, positif palsu jauh lebih banyak (Benar). (3) Orang sakit dan tes negatif $= 100 \\times 0{,}02 = 2\\text{ orang}$ dari sekitar $95.000$ tes negatif ($P(\\text{Sakit} \\mid -) \\approx 0{,}002\\% \\ll 10\\%$) (Salah).",
        relations: "Sifat tabel kontingensi diagnostik populasi 100.000 orang.",
        strategy: "Simulasikan dengan angka bulat populasi 100.000 orang."
      },
      extractionTable: [
        { fact: "Pernyataan 1: False Positive", model: "$99.900 \\times 5\\% = 4.995\\text{ orang}$", role: "Benar" },
        { fact: "Pernyataan 2: Rasio FP vs TP", model: "$4.995 \\gg 98$", role: "Benar, positif palsu mendominasi" },
        { fact: "Pernyataan 3: Negatif Palsu", model: "$P(\\text{Sakit} \\mid -) \\approx 0{,}002\\% < 10\\%$", role: "Salah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Dari $100.000$ orang, jumlah orang sehat adalah $99{,}9\\% \\times 100.000 = 99.900$ orang. Tingkat false positive adalah $5\\%$.
        $$\\text{Kasus Positif Palsu} = 99.900 \\times 0{,}05 = 4.995\\text{ orang}$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Jumlah orang yang sakit adalah $0{,}1\\% \\times 100.000 = 100$ orang, dan yang terdeteksi positif benar (true positive) adalah $100 \\times 0{,}98 = 98$ orang. Jumlah positif palsu ($4.995$) jauh lebih banyak daripada positif benar ($98$).
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Peluang seseorang sakit jika hasil tesnya negatif sangat mendekati nol ($0{,}002\\%$) karena sensitivitas alat tinggi dan populasi sakit sangat sedikit.
      `,
      tacticalShortcut: "P1: 99.900 × 5% = 4.995 (B). P2: 4.995 FP vs 98 TP (B). P3: Hasil negatif sangat dapat dipercaya (S)."
    }
  ];

  // ============================================================================
  // 3. REGISTRASI KE GLOBAL WINDOW
  // ============================================================================
  window.PM_PAKET5_STIMULI = PM_PAKET5_STIMULI;
  window.PM_PAKET5_QUESTIONS = PM_PAKET5_QUESTIONS;

  window.PM_PACKAGES = window.PM_PACKAGES || {};
  window.PM_PACKAGES['paket-5'] = {
    id: 'paket-5',
    code: 'Paket E',
    title: 'Paket E — Logistik Otomasi, Struktur Parabolik & Bayes',
    description: 'Armada Drone Kurir Otonom, Penampang Terowongan Parabola, Bonus Berjenjang Tim Sales, Server Cloud Storage, dan Teorema Bayes Tes Antigen.',
    durationMinutes: 42.5,
    stimuli: PM_PAKET5_STIMULI,
    questions: PM_PAKET5_QUESTIONS
  };

})(typeof window !== 'undefined' ? window : globalThis);
