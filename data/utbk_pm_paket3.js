/**
 * ==============================================================================
 * THE ARICH STUDY — PAKET C (PAKET 3) PENALARAN MATEMATIKA (PM) UTBK-SNBT
 * Standar Resmi BPPP / SNPMB Kemendikbudristek & Kurikulum Merdeka
 * Total 20 Soal HOTS (4 Domain Inti: Bilangan, Aljabar, Geometri, Data & Peluang)
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. DAFTAR WACANA STIMULUS PAKET C
  // ============================================================================
  const PM_PAKET3_STIMULI = [
    {
      id: "stimulus-p3-1",
      title: "Wacana 1: Sistem Radar Kecepatan Jalan Tol (ETLE) & Deteksi Pelanggaran",
      domain: "Bilangan",
      badge: "Soal No. 1 – 4",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Korps Lalu Lintas menerapkan sistem pengawasan tilang elektronik (ETLE) berbasis kamera pengukur rata-rata kecepatan
            (<em>point-to-point average speed camera</em>) pada ruas Jalan Tol Trans-Pulau sepanjang <strong>$30\\text{ km}$</strong>
            antara Gerbang Masuk Tol Karanganyar (Titik A) dan Gerbang Keluar Tol Gemolong (Titik B).
          </p>
          <p>
            Berdasarkan Peraturan Pemerintah tentang Manajemen Rekayasa Lalu Lintas Jalan Bebas Hambatan:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Aturan Kecepatan</th>
                  <th class="p-2.5 font-bold">Batas Kecepatan</th>
                  <th class="p-2.5 font-bold">Konsekuensi Hukum / Sanksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Batas Kecepatan Minimum</td>
                  <td class="p-2.5 font-mono">$60\\text{ km/jam}$</td>
                  <td class="p-2.5">Denda tilang administratif kelambatan $\\text{Rp}250.000,00$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Batas Kecepatan Maksimum</td>
                  <td class="p-2.5 font-mono">$100\\text{ km/jam}$</td>
                  <td class="p-2.5">Sanksi pelanggaran overspeed bertingkat</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Overspeed Ringan ($1 - 20\\text{ km/jam}$)</td>
                  <td class="p-2.5 font-mono">$101 - 120\\text{ km/jam}$</td>
                  <td class="p-2.5">Denda tilang elektronik $\\text{Rp}250.000,00$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Overspeed Berat ($> 40\\text{ km/jam}$)</td>
                  <td class="p-2.5 font-mono">$> 140\\text{ km/jam}$</td>
                  <td class="p-2.5">Denda tilang elektronik maksimal $\\text{Rp}750.000,00$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p3-2",
      title: "Wacana 2: Kapasitas Waduk Retensi Trapesium & Pengendalian Banjir",
      domain: "Geometri",
      badge: "Soal No. 5 – 8",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Dinas Pekerjaan Umum membangun waduk retensi pengendali banjir dengan saluran penampang melintang berbentuk 
            <strong>trapesium sama kaki</strong> simetris sepanjang <strong>$200\\text{ meter}$</strong>.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Dimensi Waduk</th>
                  <th class="p-2.5 font-bold">Ukuran Teknis</th>
                  <th class="p-2.5 font-bold">Keterangan Geometri</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Lebar Dasar Bawah ($a$)</td>
                  <td class="p-2.5 font-mono">$20\\text{ meter}$</td>
                  <td class="p-2.5">Sisi sejajar bagian dasar kolam</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Lebar Permukaan Atas ($b$)</td>
                  <td class="p-2.5 font-mono">$40\\text{ meter}$</td>
                  <td class="p-2.5">Sisi sejajar permukaan air saat kapasitas penuh</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kedalaman Maksimum ($h$)</td>
                  <td class="p-2.5 font-mono">$6\\text{ meter}$</td>
                  <td class="p-2.5">Tinggi tegak lurus penampang trapesium</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Panjang Kolam Waduk ($L$)</td>
                  <td class="p-2.5 font-mono">$200\\text{ meter}$</td>
                  <td class="p-2.5">Prisma lurus dengan alas trapesium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
            <strong>Sistem Pompa Pembuangan:</strong> Dilengkapi dengan $4\\text{ unit pompa air}$ berkapasitas buang 
            masing-masing <strong>$500\\text{ liter/detik}$ ($0{,}5\\text{ m}^3/\\text{s}$)</strong>.
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p3-3",
      title: "Wacana 3: Optimasi Pemrograman Linear Pabrik Daur Ulang Plastik",
      domain: "Aljabar",
      badge: "Soal No. 9 – 12",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Pabrik daur ulang memproduksi dua varian pelet plastik polipropilena ramah lingkungan:
            <strong>Grade Super ($x$ karung)</strong> dan <strong>Grade Standar ($y$ karung)</strong> setiap harinya.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Faktor Produksi Harian</th>
                  <th class="p-2.5 font-bold">Kebutuhan Grade Super ($x$)</th>
                  <th class="p-2.5 font-bold">Kebutuhan Grade Standar ($y$)</th>
                  <th class="p-2.5 font-bold">Kapasitas Maksimum Pabrik</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Bahan Baku Cacahan Murni</td>
                  <td class="p-2.5 font-mono">$4\\text{ kg/karung}$</td>
                  <td class="p-2.5 font-mono">$2\\text{ kg/karung}$</td>
                  <td class="p-2.5 font-mono">$\\le 120\\text{ kg/hari}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Waktu Mesin Ekstrusi</td>
                  <td class="p-2.5 font-mono">$1\\text{ jam/karung}$</td>
                  <td class="p-2.5 font-mono">$2\\text{ jam/karung}$</td>
                  <td class="p-2.5 font-mono">$\\le 60\\text{ jam/hari}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Keuntungan Bersih</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}50.000,00$</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}40.000,00$</td>
                  <td class="p-2.5">Fungsi Tujuan: $Z = 50.000x + 40.000y$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p3-4",
      title: "Wacana 4: Indeks Harga Konsumen (IHK) & Analisis Inflasi Pangan",
      domain: "Bilangan",
      badge: "Soal No. 13 – 16",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Badan Pusat Statistik (BPS) merilis data perkembangan Indeks Harga Konsumen (IHK) kelompok pengeluaran bahan makanan
            di Kota Metropolitan selama Triwulan I tahun berjalan (Tahun Dasar $2022 = 100$).
          </p>
          <p>
            Laju inflasi antarperiode waktu dihitung menggunakan rumus:
            $$\\text{Laju Inflasi}_{t} = \\frac{\\text{IHK}_{t} - \\text{IHK}_{t-1}}{\\text{IHK}_{t-1}} \\times 100\\%$$
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Bulan Pencatatan</th>
                  <th class="p-2.5 font-bold">Angka IHK Bahan Makanan</th>
                  <th class="p-2.5 font-bold">Keterangan Situasi Pasar</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Desember (Tahun Lalu)</td>
                  <td class="p-2.5 font-mono">$110{,}0$</td>
                  <td class="p-2.5">Tutup tahun kalender</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Januari</td>
                  <td class="p-2.5 font-mono">$110{,}0$</td>
                  <td class="p-2.5">Harga relatif stabil</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Februari</td>
                  <td class="p-2.5 font-mono">$112{,}2$</td>
                  <td class="p-2.5">Kenaikan harga hortikultura akibat curah hujan tinggi</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Maret</td>
                  <td class="p-2.5 font-mono">$115{,}5$</td>
                  <td class="p-2.5">Peningkatan permintaan jelang bulan Ramadhan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p3-5",
      title: "Wacana 5: Quality Control (QC) Chip Semikonduktor & Peluang Cacat Bersyarat",
      domain: "Data & Peluang",
      badge: "Soal No. 17 – 20",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah pabrik fabrikasi semikonduktor memproduksi mikrokontroler menggunakan dua lini perakitan: 
            <strong>Lini Mesin 1</strong> dan <strong>Lini Mesin 2</strong>.
            Lini Mesin 1 memproduksi <strong>$60\\%$</strong> dari total pasokan chip, sedangkan Lini Mesin 2 memproduksi <strong>$40\\%$</strong> sisanya.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Lini Produksi</th>
                  <th class="p-2.5 font-bold">Pangsa Produksi ($P(M_i)$)</th>
                  <th class="p-2.5 font-bold">Tingkat Cacat Cacat Produk ($P(D \\mid M_i)$)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Lini Mesin 1</td>
                  <td class="p-2.5 font-mono">$60\\% = 0{,}60$</td>
                  <td class="p-2.5 font-mono">$2\\% = 0{,}02$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Lini Mesin 2</td>
                  <td class="p-2.5 font-mono">$40\\% = 0{,}40$</td>
                  <td class="p-2.5 font-mono">$5\\% = 0{,}05$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];

  // ============================================================================
  // 2. DAFTAR SOAL PAKET C (SOAL 1 - 20)
  // ============================================================================
  const PM_PAKET3_QUESTIONS = [
    // Soal 1
    {
      id: 301,
      stimulusId: "stimulus-p3-1",
      number: 1,
      domain: "Bilangan",
      subtopic: "Kinematika Rata-rata & Waktu Tempuh Minimal",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapa menit waktu tempuh tercepat yang diizinkan bagi sebuah kendaraan untuk melintasi ruas tol 30 km tersebut tanpa melanggar batas kecepatan maksimum $100\\text{ km/jam}$?",
      options: [
        "$$15\\text{ menit}$$",
        "$$18\\text{ menit}$$",
        "$$20\\text{ menit}$$",
        "$$24\\text{ menit}$$",
        "$$30\\text{ menit}$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Jarak $s = 30\\text{ km}$, Kecepatan maksimum $v = 100\\text{ km/jam}$.",
        relations: "$t = \\frac{s}{v} = \\frac{30}{100}\\text{ jam}$.",
        strategy: "Kalikan waktu dalam jam dengan 60 menit."
      },
      extractionTable: [
        { fact: "Jarak Ruas Tol", model: "$s = 30\\text{ km}$", role: "Panjang lintasan" },
        { fact: "Batas Kecepatan Maksimum", model: "$v = 100\\text{ km/jam}$", role: "Kecepatan ambang batas" }
      ],
      explanation: `
        $$t = \\frac{s}{v} = \\frac{30\\text{ km}}{100\\text{ km/jam}} = 0{,}3\\text{ jam}$$
        Ubah ke dalam satuan menit:
        $$t = 0{,}3 \\times 60\\text{ menit} = 18\\text{ menit}$$
      `,
      tacticalShortcut: "30 / 100 × 60 = 18 menit."
    },
    // Soal 2
    {
      id: 302,
      stimulusId: "stimulus-p3-1",
      number: 2,
      domain: "Bilangan",
      subtopic: "Deteksi Kecepatan & Klasifikasi Sanksi ETLE",
      type: "single_choice",
      level: "Sedang",
      prompt: "Sebuah mobil sedan melintasi Gerbang A pukul $10.00$ dan tercatat melewati Gerbang B pada pukul $10.12$. Berdasarkan data kamera ETLE, mobil tersebut dikategorikan ...",
      options: [
        "Tidak melanggar karena kecepatan rata-rata $90\\text{ km/jam}$",
        "Melanggar batas minimum dengan kecepatan $50\\text{ km/jam}$",
        "Melanggar batas overspeed ringan ($101 - 120\\text{ km/jam}$)",
        "Melanggar batas overspeed berat ($> 140\\text{ km/jam}$) dengan rata-rata $150\\text{ km/jam}$",
        "Melanggar batas kecepatan dengan rata-rata tepat $130\\text{ km/jam}$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "Waktu tempuh $= 10.12 - 10.00 = 12\\text{ menit} = \\frac{12}{60} = 0{,}2\\text{ jam}$. Jarak $= 30\\text{ km}$.",
        relations: "$v = \\frac{s}{t} = \\frac{30}{0{,}2} = 150\\text{ km/jam}$.",
        strategy: "Hitung kecepatan mobil, lalu cocokkan dengan tabel kategori sanksi."
      },
      extractionTable: [
        { fact: "Durasi Perjalanan", model: "$t = 12\\text{ menit} = 0{,}2\\text{ jam}$", role: "Waktu tempuh aktual" },
        { fact: "Kecepatan Rata-rata", model: "$v = 30 / 0{,}2 = 150\\text{ km/jam}$", role: "Status overspeed berat" }
      ],
      explanation: `
        $$t = 12\\text{ menit} = \\frac{12}{60}\\text{ jam} = 0{,}2\\text{ jam}$$
        $$v_{\\text{rata-rata}} = \\frac{30\\text{ km}}{0{,}2\\text{ jam}} = 150\\text{ km/jam}$$
        Karena $150\\text{ km/jam} > 140\\text{ km/jam}$, pengendara melakukan pelanggaran kategori <strong>Overspeed Berat</strong> dengan denda maksimal $\\text{Rp}750.000,00$.
      `,
      tacticalShortcut: "30 / 0,2 = 150 km/jam -> Kategori overspeed berat (>140)."
    },
    // Soal 3
    {
      id: 303,
      stimulusId: "stimulus-p3-1",
      number: 3,
      domain: "Bilangan",
      subtopic: "Waktu Tempuh Maksimum Batas Lambat",
      type: "numeric_input",
      level: "Mudah",
      prompt: "Berapa menit waktu tempuh paling lama yang diperbolehkan untuk melintasi ruas tol 30 km tersebut agar pengemudi tidak terkena sanksi tilang batas kecepatan minimum $60\\text{ km/jam}$?",
      correctNumeric: 30,
      numericTolerance: 0,
      numericUnit: "menit",
      deconstructorClue: {
        variables: "$s = 30\\text{ km}$, Batas minimum $v = 60\\text{ km/jam}$.",
        relations: "$t = \\frac{30}{60}\\text{ jam} = 0{,}5\\text{ jam} = 30\\text{ menit}$.",
        strategy: "Bagi jarak dengan kecepatan minimum, lalu ubah ke menit."
      },
      extractionTable: [
        { fact: "Jarak", model: "$s = 30\\text{ km}$", role: "Jarak tempuh" },
        { fact: "Kecepatan Minimum", model: "$v_{\\min} = 60\\text{ km/jam}$", role: "Ambang batas bawah" }
      ],
      explanation: `
        $$t_{\\max} = \\frac{30\\text{ km}}{60\\text{ km/jam}} = 0{,}5\\text{ jam} = 30\\text{ menit}$$
      `,
      tacticalShortcut: "30 / 60 × 60 = 30 menit."
    },
    // Soal 4
    {
      id: 304,
      stimulusId: "stimulus-p3-1",
      number: 4,
      domain: "Bilangan",
      subtopic: "Analisis Logika Kebenaran Kinematika Tol",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus sistem ETLE jalan tol di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Mobil yang melintasi ruas tol tersebut dalam waktu tepat 20 menit tidak akan terkena sanksi tilang apa pun.",
          correct: true
        },
        {
          text: "Jika mobil menempuh ruas tol selama 15 menit, kecepatan rata-ratanya adalah tepat 110 km/jam.",
          correct: false
        },
        {
          text: "Sistem kamera point-to-point ini mengukur kecepatan rata-rata di sepanjang lintasan 30 km, bukan kecepatan sesaat di satu titik.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Durasi 20 menit berada di antara 18 menit dan 30 menit, sehingga kecepatan $v = 30 / (20/60) = 90\\text{ km/jam}$ (Aman / Benar). (2) Untuk 15 menit ($0{,}25\\text{ jam}$), $v = 30 / 0{,}25 = 120\\text{ km/jam}$, bukan 110 (Salah). (3) Definisi kamera average speed (Benar).",
        relations: "Evaluasi interval waktu aman $[18, 30]$ menit.",
        strategy: "Cek hitungan kecepatan masing-masing pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: 20 Menit", model: "$v = 30 / (1/3) = 90\\text{ km/jam}$", role: "Benar, berada di range $60 - 100$" },
        { fact: "Pernyataan 2: 15 Menit", model: "$v = 30 / 0{,}25 = 120\\text{ km/jam}$", role: "Salah, 120 bukan 110" },
        { fact: "Pernyataan 3: Prinsip Kerja", model: "$v_{\\text{rata-rata}} = \\Delta s / \\Delta t$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Waktu 20 menit menghasilkan kecepatan rata-rata $v = \\frac{30}{20/60} = 90\\text{ km/jam}$. Karena $60 \\le 90 \\le 100$, mobil bebas tilang.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Waktu 15 menit $= 0{,}25\\text{ jam}$. Kecepatannya adalah $v = \\frac{30}{0{,}25} = 120\\text{ km/jam}$, bukan $110\\text{ km/jam}$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Kamera average speed merekam waktu masuk dan waktu keluar, lalu membagi jarak total dengan waktu tempuh untuk memperoleh kecepatan rata-rata.
      `,
      tacticalShortcut: "P1: 90 km/jam masuk batas aman (B). P2: 30 / 0,25 = 120 (S). P3: Sifat rata-rata point-to-point (B)."
    },

    // Soal 5
    {
      id: 305,
      stimulusId: "stimulus-p3-2",
      number: 5,
      domain: "Geometri",
      subtopic: "Luas Penampang Trapesium",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah luas penampang melintang saluran trapesium waduk retensi tersebut saat terisi air penuh hingga permukaan atas?",
      options: [
        "$$120\\text{ m}^2$$",
        "$$150\\text{ m}^2$$",
        "$$180\\text{ m}^2$$",
        "$$210\\text{ m}^2$$",
        "$$240\\text{ m}^2$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Alas bawah $a = 20\\text{ m}$, Atas $b = 40\\text{ m}$, Tinggi $h = 6\\text{ m}$.",
        relations: "$L = \\frac{a + b}{2} \\times h$.",
        strategy: "Jumlahkan sisi sejajar, bagi dua, kalikan tinggi trapesium."
      },
      extractionTable: [
        { fact: "Sisi Sejajar", model: "$a = 20\\text{ m}, b = 40\\text{ m}$", role: "Panjang basis trapesium" },
        { fact: "Tinggi Tegak", model: "$h = 6\\text{ m}$", role: "Kedalaman waduk" }
      ],
      explanation: `
        $$L = \\frac{a + b}{2} \\times h = \\frac{20 + 40}{2} \\times 6 = 30 \\times 6 = 180\\text{ m}^2$$
      `,
      tacticalShortcut: "(20 + 40)/2 × 6 = 30 × 6 = 180 m2."
    },
    // Soal 6
    {
      id: 306,
      stimulusId: "stimulus-p3-2",
      number: 6,
      domain: "Geometri",
      subtopic: "Volume Prisma Waduk Retensi",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapa kapasitas volume tampung maksimum total air di dalam waduk retensi tersebut saat air mencapai level bibir waduk teratas?",
      options: [
        "$$24.000\\text{ m}^3$$",
        "$$30.000\\text{ m}^3$$",
        "$$36.000\\text{ m}^3$$",
        "$$42.000\\text{ m}^3$$",
        "$$48.000\\text{ m}^3$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Luas penampang alas trapesium $= 180\\text{ m}^2$, Panjang waduk $L = 200\\text{ m}$.",
        relations: "$V = L_{\\text{alas}} \\times L = 180 \\times 200$.",
        strategy: "Kalikan luas penampang dengan panjang waduk."
      },
      extractionTable: [
        { fact: "Luas Penampang", model: "$L_{\\text{penampang}} = 180\\text{ m}^2$", role: "Luas irisan melintang" },
        { fact: "Panjang Waduk", model: "$L = 200\\text{ m}$", role: "Dimensi memanjang prisma" }
      ],
      explanation: `
        $$V = \\text{Luas Penampang} \\times \\text{Panjang Waduk} = 180\\text{ m}^2 \\times 200\\text{ m} = 36.000\\text{ m}^3$$
      `,
      tacticalShortcut: "180 × 200 = 36.000 m3."
    },
    // Soal 7
    {
      id: 307,
      stimulusId: "stimulus-p3-2",
      number: 7,
      domain: "Geometri",
      subtopic: "Laju Aliran Pompa & Kapasitas Pembuangan",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Bila seluruh 4 unit pompa penyedot dinyalakan bersamaan, berapakah total debit pembuangan air waduk dalam satuan meter kubik per detik ($\\text{m}^3/\\text{detik}$)?",
      correctNumeric: 2,
      numericTolerance: 0,
      numericUnit: "m3/s",
      deconstructorClue: {
        variables: "4 unit pompa, masing-masing debit $500\\text{ liter/s} = 0{,}5\\text{ m}^3/\\text{s}$.",
        relations: "$Q_{\\text{total}} = 4 \\times 0{,}5 = 2{,}0\\text{ m}^3/\\text{s}$.",
        strategy: "Kalikan kapasitas 1 pompa dengan jumlah 4 unit."
      },
      extractionTable: [
        { fact: "Debit per Pompa", model: "$0{,}5\\text{ m}^3/\\text{s}$", role: "Daya sedot satu pompa" },
        { fact: "Jumlah Pompa", model: "$n = 4\\text{ unit}$", role: "Pengali pompa paralel" }
      ],
      explanation: `
        Kapasitas 1 pompa $= 500\\text{ liter/s} = \\frac{500}{1.000}\\text{ m}^3/\\text{s} = 0{,}5\\text{ m}^3/\\text{s}$.
        Total 4 pompa:
        $$Q_{\\text{pompa}} = 4 \\times 0{,}5\\text{ m}^3/\\text{s} = 2\\text{ m}^3/\\text{s}$$
      `,
      tacticalShortcut: "4 × 0,5 = 2 m3/s."
    },
    // Soal 8
    {
      id: 308,
      stimulusId: "stimulus-p3-2",
      number: 8,
      domain: "Geometri",
      subtopic: "Keseimbangan Debit Aliran & Waktu Pengisian",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Berdasarkan stimulus teknis waduk retensi banjir, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Jika air hujan masuk ke waduk dengan debit $3{,}5\\text{ m}^3/\\text{detik}$ dan seluruh 4 pompa bekerja optimal, maka volume air di dalam waduk bertambah dengan laju bersih $1{,}5\\text{ m}^3/\\text{detik}$.",
          correct: true
        },
        {
          text: "Dengan laju penambahan volume bersih $1{,}5\\text{ m}^3/\\text{detik}$, waduk yang semula kosong akan penuh dalam waktu kurang dari 5 jam.",
          correct: false
        },
        {
          text: "Jika kedalaman air terisi separuh ($h = 3\\text{ meter}$), maka volume air di waduk tepat separuh ($18.000\\text{ m}^3$) dari kapasitas maksimumnya.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Laju bersih $= 3{,}5 - 2{,}0 = 1{,}5\\text{ m}^3/\\text{s}$ (Benar). (2) Waktu penuh $= 36.000 / 1{,}5 = 24.000\\text{ detik} = 6{,}67\\text{ jam} > 5\\text{ jam}$ (Salah). (3) Karena dinding trapesium melebar ke atas, separuh kedalaman menampung kurang dari separuh volume total (Salah).",
        relations: "Analisis laju akumulasi volumetrik dan non-linearitas penampang trapesium.",
        strategy: "Uji angka nyata pada tiap pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Laju Bersih", model: "$3{,}5 - 2{,}0 = 1{,}5\\text{ m}^3/\\text{s}$", role: "Benar" },
        { fact: "Pernyataan 2: Waktu Pengisian", model: "$36.000 / 1{,}5 = 24.000\\text{ s} = 6{,}67\\text{ jam} > 5$", role: "Salah" },
        { fact: "Pernyataan 3: Volume Separuh Kedalaman", model: "$V_{h=3} < 18.000\\text{ m}^3$", role: "Salah, dinding trapesium mengembang" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        $$\\text{Laju akumulasi} = Q_{\\text{masuk}} - Q_{\\text{keluar}} = 3{,}5 - 2{,}0 = 1{,}5\\text{ m}^3/\\text{s}$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Waktu yang dibutuhkan untuk mengisi volume penuh $36.000\\text{ m}^3$:
        $$t = \\frac{36.000}{1{,}5} = 24.000\\text{ detik} = \\frac{24.000}{3.600} \\approx 6{,}67\\text{ jam}$$
        Karena $6{,}67\\text{ jam} > 5\\text{ jam}$, pernyataan 'kurang dari 5 jam' adalah salah.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pada saluran trapesium yang melebar ke atas, penampang bagian bawah lebih sempit daripada bagian atas. Akibatnya, pada kedalaman $3\\text{ meter}$ (separuh tinggi), volume air yang tertampung adalah $(20 + 30)/2 \\times 3 \\times 200 = 15.000\\text{ m}^3$, yang jauh lebih kecil dari separuh kapasitas ($18.000\\text{ m}^3$).
      `,
      tacticalShortcut: "P1: 3,5 - 2 = 1,5 (B). P2: 36.000/1,5 = 24.000 s = 6,67 jam (S). P3: Sifat trapesium mengembang ke atas (S)."
    },

    // Soal 9
    {
      id: 309,
      stimulusId: "stimulus-p3-3",
      number: 9,
      domain: "Aljabar",
      subtopic: "Sistem Pertidaksamaan Linear Pemodelan",
      type: "single_choice",
      level: "Mudah",
      prompt: "Bentuk sistem pertidaksamaan linear yang membatasi ketersediaan bahan baku cacahan plastik dan waktu mesin ekstrusi adalah ...",
      options: [
        "$$2x + y \\le 60,\\quad x + 2y \\le 60,\\quad x \\ge 0,\\quad y \\ge 0$$",
        "$$4x + y \\le 60,\\quad 2x + 2y \\le 60,\\quad x \\ge 0,\\quad y \\ge 0$$",
        "$$x + 2y \\le 120,\\quad 2x + y \\le 60,\\quad x \\ge 0,\\quad y \\ge 0$$",
        "$$2x + y \\le 120,\\quad x + 2y \\le 120,\\quad x \\ge 0,\\quad y \\ge 0$$",
        "$$x + y \\le 60,\\quad 4x + 2y \\le 60,\\quad x \\ge 0,\\quad y \\ge 0$$"
      ],
      correct: 0,
      deconstructorClue: {
        variables: "Bahan: $4x + 2y \\le 120 \\iff 2x + y \\le 60$. Mesin: $x + 2y \\le 60$. Syarat non-negatif: $x \\ge 0, y \\ge 0$.",
        relations: "Sederhanakan pertidaksamaan bahan dengan membagi 2 kedua ruas.",
        strategy: "Bandingkan bentuk paling sederhana dengan opsi yang ada."
      },
      extractionTable: [
        { fact: "Kendala Bahan Baku", model: "$4x + 2y \\le 120 \\implies 2x + y \\le 60$", role: "Batasan stok bahan" },
        { fact: "Kendala Jam Mesin", model: "$x + 2y \\le 60$", role: "Batasan jam kerja" }
      ],
      explanation: `
        Kendala 1 (Bahan Baku):
        $$4x + 2y \\le 120 \\iff 2x + y \\le 60$$
        Kendala 2 (Waktu Mesin):
        $$x + 2y \\le 60$$
        Kendala Non-Negatif:
        $$x \\ge 0, \\quad y \\ge 0$$
      `,
      tacticalShortcut: "4x + 2y <= 120 disederhanakan jadi 2x + y <= 60."
    },
    // Soal 10
    {
      id: 310,
      stimulusId: "stimulus-p3-3",
      number: 10,
      domain: "Aljabar",
      subtopic: "Titik Potong Garis Kendala",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapa banyak karung pelet Grade Super ($x$) dan Grade Standar ($y$) yang diproduksi pada titik perpotongan kedua garis batas kendala tersebut?",
      options: [
        "$$x = 15,\\quad y = 25$$",
        "$$x = 20,\\quad y = 20$$",
        "$$x = 25,\\quad y = 15$$",
        "$$x = 10,\\quad y = 30$$",
        "$$x = 30,\\quad y = 10$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Persamaan (1): $2x + y = 60$, Persamaan (2): $x + 2y = 60$.",
        relations: "Eliminasi atau substitusi sistem dua variabel.",
        strategy: "Kurangkan (1) × 2 dengan (2): $4x + 2y - (x + 2y) = 120 - 60 \\implies 3x = 60 \\implies x = 20$."
      },
      extractionTable: [
        { fact: "Garis 1", model: "$2x + y = 60$", role: "Batas bahan murni" },
        { fact: "Garis 2", model: "$x + 2y = 60$", role: "Batas waktu mesin" }
      ],
      explanation: `
        Dari persamaan (1): $y = 60 - 2x$.
        Substitusikan ke persamaan (2):
        $$x + 2(60 - 2x) = 60$$
        $$x + 120 - 4x = 60$$
        $$-3x = -60 \\implies x = 20$$
        Maka:
        $$y = 60 - 2(20) = 20$$
        Titik perpotongannya adalah $(20, 20)$.
      `,
      tacticalShortcut: "Karena koefisien simetris (2 dan 1), maka x = y = 60 / (2+1) = 20."
    },
    // Soal 11
    {
      id: 311,
      stimulusId: "stimulus-p3-3",
      number: 11,
      domain: "Aljabar",
      subtopic: "Nilai Optimum Fungsi Objektif",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Berapakah keuntungan maksimum harian yang dapat diraih oleh pabrik daur ulang plastik tersebut (tuliskan nilai dalam satuan RIBU RUPIAH, misalnya jika Rp1.500.000 tulis 1500)?",
      correctNumeric: 1800,
      numericTolerance: 0,
      numericUnit: "ribu rupiah",
      deconstructorClue: {
        variables: "Titik pojok daerah penyelesaian: $(0, 0)$, $(30, 0)$, $(0, 30)$, $(20, 20)$. Fungsi laba: $Z = 50.000x + 40.000y$.",
        relations: "Uji nilai $Z$ pada titik $(20, 20)$: $50.000(20) + 40.000(20) = 1.000.000 + 800.000 = 1.800.000$.",
        strategy: "Bandingkan dengan titik $(30, 0) = 1.500.000$ dan $(0, 30) = 1.200.000$."
      },
      extractionTable: [
        { fact: "Titik Pojok $(30, 0)$", model: "$Z = 50.000(30) = 1.500.000$", role: "Produksi murni Grade Super" },
        { fact: "Titik Pojok $(0, 30)$", model: "$Z = 40.000(30) = 1.200.000$", role: "Produksi murni Grade Standar" },
        { fact: "Titik Pojok $(20, 20)$", model: "$Z = 50.000(20) + 40.000(20) = 1.800.000$", role: "Nilai laba maksimum" }
      ],
      explanation: `
        Uji seluruh titik pojok daerah feasible:
        <ul class="list-disc list-inside my-1.5 space-y-1">
          <li>$(0, 30) \\implies Z = 40.000(30) = \\text{Rp}1.200.000,00$</li>
          <li>$(30, 0) \\implies Z = 50.000(30) = \\text{Rp}1.500.000,00$</li>
          <li>$(20, 20) \\implies Z = 50.000(20) + 40.000(20) = 1.000.000 + 800.000 = \\text{Rp}1.800.000,00$</li>
        </ul>
        Keuntungan maksimum harian adalah $\\text{Rp}1.800.000,00$. Dalam ribuan rupiah, nilainya adalah <strong>1800</strong>.
      `,
      tacticalShortcut: "20 × 50rb + 20 × 40rb = 1.800 ribu rupiah."
    },
    // Soal 12
    {
      id: 312,
      stimulusId: "stimulus-p3-3",
      number: 12,
      domain: "Aljabar",
      subtopic: "Analisis Batasan Produksi & Utilisasi Kapasitas",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus optimasi produksi pabrik daur ulang plastik, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Pada kondisi produksi optimal (20 karung Super dan 20 karung Standar), seluruh stok bahan baku cacahan plastik (120 kg) habis terpakai tanpa sisa.",
          correct: true
        },
        {
          text: "Pada kondisi produksi optimal, mesin ekstrusi masih memiliki sisa waktu menganggur (idle time) selama 10 jam.",
          correct: false
        },
        {
          text: "Jika pabrik hanya memproduksi Grade Super saja secara maksimal, keuntungan yang diperoleh lebih besar daripada solusi kombinasi optimal (20, 20).",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Pemakaian bahan: $4(20) + 2(20) = 80 + 40 = 120\\text{ kg}$ (Habis pas / Benar). (2) Waktu mesin: $1(20) + 2(20) = 20 + 40 = 60\\text{ jam}$ (Habis pas, sisa idle 0 jam / Salah). (3) Produksi murni Super laba Rp1.500.000 < Rp1.800.000 (Salah).",
        relations: "Pemeriksaan utilisasi sumber daya pada titik optimum.",
        strategy: "Substitusikan nilai $(20, 20)$ ke masing-masing kendala."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Bahan Baku", model: "$4(20) + 2(20) = 120\\text{ kg}$", role: "Benar, sisa 0 kg" },
        { fact: "Pernyataan 2: Jam Mesin", model: "$1(20) + 2(20) = 60\\text{ jam}$", role: "Salah, sisa 0 jam" },
        { fact: "Pernyataan 3: Super Saja", model: "$1.500.000 < 1.800.000$", role: "Salah, lebih kecil" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Penggunaan bahan baku $= 4(20) + 2(20) = 80 + 40 = 120\\text{ kg}$. Tepat sama dengan kapasitas maksimum, tidak bersisa.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Waktu mesin yang digunakan $= 1(20) + 2(20) = 20 + 40 = 60\\text{ jam}$. Waktu terpakai penuh $100\\%$, tidak ada sisa waktu menganggur ($0\\text{ jam}$).
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Jika hanya memproduksi Grade Super ($x = 30$), labanya adalah $\\text{Rp}1.500.000,00$, yang lebih kecil dari solusi optimal $\\text{Rp}1.800.000,00$.
      `,
      tacticalShortcut: "P1: 4(20)+2(20) = 120 (B). P2: 20+40 = 60 jam (habis, idle 0) (S). P3: 1,5 jt < 1,8 jt (S)."
    },

    // Soal 13
    {
      id: 313,
      stimulusId: "stimulus-p3-4",
      number: 13,
      domain: "Bilangan",
      subtopic: "Laju Inflasi Bulanan (Month-to-Month)",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah laju inflasi bulanan kelompok bahan makanan pada bulan Februari terhadap bulan Januari di Kota Metropolitan tersebut?",
      options: [
        "$$1{,}5\\%$$",
        "$$1{,}8\\%$$",
        "$$2{,}0\\%$$",
        "$$2{,}2\\%$$",
        "$$2{,}5\\%$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$\\text{IHK}_{\\text{Jan}} = 110{,}0$, $\\text{IHK}_{\\text{Feb}} = 112{,}2$.",
        relations: "$\\text{Inflasi} = \\frac{112{,}2 - 110{,}0}{110{,}0} \\times 100\\%$.",
        strategy: "Hitung selisih 2,2 lalu bagi dengan 110."
      },
      extractionTable: [
        { fact: "IHK Januari", model: "$110{,}0$", role: "Nilai dasar" },
        { fact: "IHK Februari", model: "$112{,}2$", role: "Nilai pembanding" }
      ],
      explanation: `
        $$\\text{Inflasi}_{\\text{Feb}} = \\frac{112{,}2 - 110{,}0}{110{,}0} \\times 100\\% = \\frac{2{,}2}{110{,}0} \\times 100\\% = 2{,}0\\%$$
      `,
      tacticalShortcut: "2,2 / 110 = 0,02 = 2%."
    },
    // Soal 14
    {
      id: 314,
      stimulusId: "stimulus-p3-4",
      number: 14,
      domain: "Bilangan",
      subtopic: "Inflasi Kumulatif Periode Triwulan",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapakah laju inflasi kumulatif bahan makanan selama Triwulan I penuh (posisi bulan Maret dibandingkan posisi akhir tahun lalu pada bulan Desember)?",
      options: [
        "$$4{,}2\\%$$",
        "$$4{,}8\\%$$",
        "$$5{,}0\\%$$",
        "$$5{,}5\\%$$",
        "$$6{,}0\\%$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$\\text{IHK}_{\\text{Desember}} = 110{,}0$, $\\text{IHK}_{\\text{Maret}} = 115{,}5$.",
        relations: "$\\text{Inflasi Kumulatif} = \\frac{115{,}5 - 110{,}0}{110{,}0} \\times 100\\%$.",
        strategy: "Hitung selisih 5,5 dibagi 110 dikali 100%."
      },
      extractionTable: [
        { fact: "IHK Awal Triwulan (Des)", model: "$110{,}0$", role: "Basis awal" },
        { fact: "IHK Akhir Triwulan (Mar)", model: "$115{,}5$", role: "Pencapaian akhir" }
      ],
      explanation: `
        $$\\text{Inflasi Kumulatif} = \\frac{115{,}5 - 110{,}0}{110{,}0} \\times 100\\% = \\frac{5{,}5}{110{,}0} \\times 100\\% = 0{,}05 \\times 100\\% = 5{,}0\\%$$
      `,
      tacticalShortcut: "5,5 / 110 = 0,05 = 5%."
    },
    // Soal 15
    {
      id: 315,
      stimulusId: "stimulus-p3-4",
      number: 15,
      domain: "Bilangan",
      subtopic: "Dampak Inflasi terhadap Keranjang Belanja Riil",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Jika sekeranjang bahan pangan pokok keluarga dibeli pada bulan Januari dengan total biaya tepat $\\text{Rp}1.000.000,00$, berapakah biaya yang harus dikeluarkan keluarga tersebut untuk membeli isi keranjang belanja yang sama persis pada bulan Maret berdasarkan kenaikan IHK (tuliskan nilai dalam satuan RIBU RUPIAH, misalnya jika Rp1.050.000 tulis 1050)?",
      correctNumeric: 1050,
      numericTolerance: 0,
      numericUnit: "ribu rupiah",
      deconstructorClue: {
        variables: "Biaya Jan $= \\text{Rp}1.000.000,00$, Kenaikan IHK dari Jan ($110{,}0$) ke Mar ($115{,}5$) adalah inflasi kumulatif $5\\%$.",
        relations: "$\\text{Biaya Mar} = 1.000.000 \\times (1 + 0{,}05) = \\text{Rp}1.050.000,00$.",
        strategy: "Kalikan biaya belanja awal dengan faktor inflasi $1{,}05$."
      },
      extractionTable: [
        { fact: "Biaya Awal Januari", model: "$\\text{Rp}1.000.000,00$", role: "Anggaran dasar" },
        { fact: "Faktor Inflasi Kumulatif", model: "$1 + 5\\% = 1{,}05$", role: "Pengali harga barang" }
      ],
      explanation: `
        Inflasi kumulatif dari Januari ke Maret adalah $5{,}0\\%$.
        $$\\text{Biaya Maret} = \\text{Rp}1.000.000,00 \\times 1{,}05 = \\text{Rp}1.050.000,00$$
        Dalam ribuan rupiah, nilainya adalah <strong>1050</strong>.
      `,
      tacticalShortcut: "1.000.000 × 1,05 = 1.050 ribu rupiah."
    },
    // Soal 16
    {
      id: 316,
      stimulusId: "stimulus-p3-4",
      number: 16,
      domain: "Bilangan",
      subtopic: "Evaluasi Tren Inflasi & Daya Beli",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus data IHK bahan makanan Kota Metropolitan, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Pada bulan Januari terjadi deflasi karena angka IHK tidak mengalami perubahan dari bulan Desember.",
          correct: false
        },
        {
          text: "Laju inflasi bulanan pada bulan Maret (terhadap Februari) lebih tinggi daripada laju inflasi bulanan pada bulan Februari (terhadap Januari).",
          correct: true
        },
        {
          text: "Jika pendapatan seorang pekerja naik 3% pada Triwulan I, daya beli riil pekerja tersebut terhadap bahan makanan mengalami penurunan.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Angka IHK tetap berarti inflasi $0\\%$, bukan deflasi (Salah). (2) Inflasi Mar $= (115{,}5 - 112{,}2)/112{,}2 \\approx 2{,}94\\% > 2{,}0\\%$ (Benar). (3) Inflasi bahan makanan $5\\% >$ kenaikan upah $3\\%$ sehingga daya beli riil menurun (Benar).",
        relations: "Analisis konsep inflasi riil vs inflasi nominal.",
        strategy: "Uji konsep ekonomi dasar dan rasio matematis."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Nol Inflasi", model: "$\\Delta = 0 \\implies \\text{Inflasi } 0\\% \\ne \\text{deflasi}$", role: "Salah" },
        { fact: "Pernyataan 2: Inflasi Mar vs Feb", model: "$2{,}94\\% > 2{,}00\\%$", role: "Benar" },
        { fact: "Pernyataan 3: Upah Riil", model: "$3\\% < 5\\% \\implies \\text{Penurunan daya beli}$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: SALAH</strong><br>
        Jika angka IHK tetap dari $110{,}0$ ke $110{,}0$, laju inflasinya adalah tepat $0\\%$ (stabilitas harga), bukan deflasi (deflasi terjadi jika IHK menurun).
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Inflasi Februari $= 2{,}0\\%$.
        Inflasi Maret $= \\frac{115{,}5 - 112{,}2}{112{,}2} \\times 100\\% = \\frac{3{,}3}{112{,}2} \\times 100\\% \\approx 2{,}94\\%$.
        Karena $2{,}94\\% > 2{,}0\\%$, laju inflasi Maret lebih tinggi.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Kenaikan harga barang pokok ($5\\%$) lebih tinggi dibandingkan kenaikan upah ($3\\%$), sehingga upah riil dan daya beli riil masyarakat mengalami penurunan sebesar sekitar $2\\%$.
      `,
      tacticalShortcut: "P1: IHK sama = inflasi 0%, bukan deflasi (S). P2: 2,94% > 2,0% (B). P3: Kenaikan gaji 3% < inflasi 5% (B)."
    },

    // Soal 17
    {
      id: 317,
      stimulusId: "stimulus-p3-5",
      number: 17,
      domain: "Data & Peluang",
      subtopic: "Peluang Total Kejadian Bersama",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika sebuah chip mikroprosesor diambil secara acak dari total produksi pabrik, berapakah peluang chip yang terambil tersebut mengalami kerusakan/cacat ($P(D)$)?",
      options: [
        "$$2{,}5\\%$$",
        "$$3{,}2\\%$$",
        "$$3{,}5\\%$$",
        "$$4{,}0\\%$$",
        "$$4{,}8\\%$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "$P(M_1) = 0{,}60$, $P(D \\mid M_1) = 0{,}02$, $P(M_2) = 0{,}40$, $P(D \\mid M_2) = 0{,}05$.",
        relations: "$P(D) = P(M_1)P(D \\mid M_1) + P(M_2)P(D \\mid M_2)$.",
        strategy: "Jumlahkan kontribusi cacat dari kedua lini mesin."
      },
      extractionTable: [
        { fact: "Kontribusi Cacat Lini 1", model: "$0{,}60 \\times 0{,}02 = 0{,}012$", role: "Peluang cacat dari Mesin 1" },
        { fact: "Kontribusi Cacat Lini 2", model: "$0{,}40 \\times 0{,}05 = 0{,}020$", role: "Peluang cacat dari Mesin 2" }
      ],
      explanation: `
        Hukum Peluang Total:
        $$P(D) = P(M_1) \\cdot P(D \\mid M_1) + P(M_2) \\cdot P(D \\mid M_2)$$
        $$P(D) = (0{,}60 \\times 0{,}02) + (0{,}40 \\times 0{,}05) = 0{,}012 + 0{,}020 = 0{,}032 = 3{,}2\\%$$
      `,
      tacticalShortcut: "0,6 × 2% + 0,4 × 5% = 1,2% + 2% = 3,2%."
    },
    // Soal 18
    {
      id: 318,
      stimulusId: "stimulus-p3-5",
      number: 18,
      domain: "Data & Peluang",
      subtopic: "Teorema Bayes & Peluang Bersyarat",
      type: "single_choice",
      level: "Sulit",
      prompt: "Dalam inspeksi acak, seorang teknisi menemukan sebuah chip yang rusak/cacat. Berapakah probabilitas bahwa chip cacat tersebut berasal dari produksi Lini Mesin 2?",
      options: [
        "$$40{,}0\\%$$",
        "$$50{,}0\\%$$",
        "$$57{,}5\\%$$",
        "$$62{,}5\\%$$",
        "$$68{,}0\\%$$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "$P(M_2 \\cap D) = 0{,}020$, $P(D) = 0{,}032$.",
        relations: "$P(M_2 \\mid D) = \\frac{P(M_2 \\cap D)}{P(D)} = \\frac{0{,}020}{0{,}032}$.",
        strategy: "Bagi kontribusi cacat Lini 2 dengan total peluang cacat."
      },
      extractionTable: [
        { fact: "Peluang Cacat Lini 2", model: "$P(M_2 \\cap D) = 0{,}020$", role: "Pembilang Bayes" },
        { fact: "Peluang Total Cacat", model: "$P(D) = 0{,}032$", role: "Penyebut Bayes" }
      ],
      explanation: `
        Berdasarkan Teorema Bayes:
        $$P(M_2 \\mid D) = \\frac{P(M_2 \\cap D)}{P(D)} = \\frac{0{,}020}{0{,}032} = \\frac{20}{32} = \\frac{5}{8} = 0{,}625 = 62{,}5\\%$$
      `,
      tacticalShortcut: "20 / (12 + 20) = 20 / 32 = 5/8 = 62,5%."
    },
    // Soal 19
    {
      id: 319,
      stimulusId: "stimulus-p3-5",
      number: 19,
      domain: "Data & Peluang",
      subtopic: "Frekuensi Harapan Produk Sempurna",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Dari satu batch produksi harian sebanyak 10.000 chip, berapakah estimasi jumlah chip yang lolos uji kualitas dalam kondisi BAIK / TIDAK CACAT (tuliskan angkanya saja)?",
      correctNumeric: 9680,
      numericTolerance: 0,
      numericUnit: "chip",
      deconstructorClue: {
        variables: "Total produksi $N = 10.000$, Peluang cacat $P(D) = 3{,}2\\%$, Peluang baik $P(\\text{Baik}) = 100\\% - 3{,}2\\% = 96{,}8\\%$.",
        relations: "$\\text{Jumlah Baik} = 10.000 \\times 0{,}968 = 9.680$.",
        strategy: "Kalikan populasi dengan peluang produk tidak cacat."
      },
      extractionTable: [
        { fact: "Peluang Produk Baik", model: "$1 - 0{,}032 = 0{,}968 = 96{,}8\\%$", role: "Komplemen peluang" },
        { fact: "Populasi Batch", model: "$N = 10.000\\text{ unit}$", role: "Ukuran produksi" }
      ],
      explanation: `
        Peluang chip dalam kondisi baik:
        $$P(D') = 1 - P(D) = 1 - 0{,}032 = 0{,}968 = 96{,}8\\%$$
        Estimasi chip yang baik dari $10.000$ unit:
        $$\\text{Banyak Chip Baik} = 10.000 \\times 0{,}968 = 9.680\\text{ unit}$$
      `,
      tacticalShortcut: "10.000 - (10.000 × 3,2%) = 10.000 - 320 = 9.680 chip."
    },
    // Soal 20
    {
      id: 320,
      stimulusId: "stimulus-p3-5",
      number: 20,
      domain: "Data & Peluang",
      subtopic: "Analisis Logika Kebenaran Probabilitas Bersyarat",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Berdasarkan stimulus data kendali mutu fabrikasi semikonduktor, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Meskipun Lini Mesin 1 memproduksi volume chip lebih banyak, kontribusi jumlah chip cacat paling banyak berasal dari Lini Mesin 2.",
          correct: true
        },
        {
          text: "Peluang bahwa sebuah chip yang diambil acak berasal dari Lini Mesin 1 DAN dalam kondisi cacat adalah tepat 0,012.",
          correct: true
        },
        {
          text: "Jika sebuah chip ditemukan dalam kondisi baik (tidak cacat), peluang chip tersebut diproduksi oleh Lini Mesin 1 adalah kurang dari 50%.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Kontribusi cacat: Lini 1 $= 0{,}012$, Lini 2 $= 0{,}020$. Karena $0{,}020 > 0{,}012$, mayoritas cacat berasal dari Lini 2 (Benar). (2) $P(M_1 \\cap D) = 0{,}60 \\times 0{,}02 = 0{,}012$ (Benar). (3) Chip baik Lini 1 $= 0{,}60 \\times 0{,}98 = 0{,}588$. Chip baik Lini 2 $= 0{,}40 \\times 0{,}95 = 0{,}380$. $P(M_1 \\mid \\text{Baik}) = 0{,}588 / 0{,}968 \\approx 60{,}7\\% > 50\\%$ (Salah).",
        relations: "Sifat peluang gabungan dan peluang bersyarat.",
        strategy: "Uji nilai numerik pada ketiga pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Sumber Cacat", model: "$0{,}020 > 0{,}012$", role: "Benar, Lini 2 penyumbang cacat terbesar" },
        { fact: "Pernyataan 2: Irisan Lini 1 & Cacat", model: "$0{,}60 \\times 0{,}02 = 0{,}012$", role: "Benar" },
        { fact: "Pernyataan 3: Asal Chip Baik", model: "$0{,}588 / 0{,}968 \\approx 60{,}7\\% > 50\\%$", role: "Salah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Jumlah proporsi cacat Lini 1 adalah $0{,}012$, sedangkan Lini 2 adalah $0{,}020$. Jadi sebagian besar chip cacat disumbang oleh Lini Mesin 2 ($62{,}5\\%$).
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        $$P(M_1 \\cap D) = P(M_1) \\times P(D \\mid M_1) = 0{,}60 \\times 0{,}02 = 0{,}012$$
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Peluang chip baik dari Lini 1 adalah $0{,}60 \\times 0{,}98 = 0{,}588$.
        Peluang chip baik dari Lini 2 adalah $0{,}40 \\times 0{,}95 = 0{,}380$.
        $$P(M_1 \\mid \\text{Baik}) = \\frac{0{,}588}{0{,}588 + 0{,}380} = \\frac{0{,}588}{0{,}968} \\approx 60{,}7\\%$$
        Karena $60{,}7\\% > 50\\%$, pernyataan 'kurang dari 50%' adalah salah.
      `,
      tacticalShortcut: "P1: 20 > 12 (B). P2: 0,6 × 0,02 = 0,012 (B). P3: Lini 1 dominan 60% produksi (S)."
    }
  ];

  // ============================================================================
  // 3. REGISTRASI KE GLOBAL WINDOW
  // ============================================================================
  window.PM_PAKET3_STIMULI = PM_PAKET3_STIMULI;
  window.PM_PAKET3_QUESTIONS = PM_PAKET3_QUESTIONS;

  window.PM_PACKAGES = window.PM_PACKAGES || {};
  window.PM_PACKAGES['paket-3'] = {
    id: 'paket-3',
    code: 'Paket C',
    title: 'Paket C — Smart Mobility, Industri & Ekologi',
    description: 'Radar Kecepatan ETLE Jalan Tol, Waduk Retensi Banjir, Pemrograman Linear Daur Ulang, IHK Inflasi Pangan, dan Quality Control Semikonduktor.',
    durationMinutes: 42.5,
    stimuli: PM_PAKET3_STIMULI,
    questions: PM_PAKET3_QUESTIONS
  };

})(typeof window !== 'undefined' ? window : globalThis);
