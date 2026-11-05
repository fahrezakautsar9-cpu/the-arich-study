/**
 * ==============================================================================
 * THE ARICH STUDY — PAKET B (PAKET 2) PENALARAN MATEMATIKA (PM) UTBK-SNBT
 * Latihan Penalaran Matematika bergaya UTBK-SNBT & Kurikulum Merdeka
 * Total 20 soal latihan (4 ranah: Bilangan, Aljabar, Geometri, Data & Peluang)
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. DAFTAR WACANA STIMULUS PAKET B
  // ============================================================================
  const PM_PAKET2_STIMULI = [
    {
      id: "stimulus-p2-1",
      title: "Wacana 1: Efisiensi Pembangkit Listrik Tenaga Surya (PLTS) Rooftop & Degradasi Panel",
      domain: "Bilangan",
      badge: "Soal No. 1 – 4",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Keluarga Dr. Hendra memasang sistem Pembangkit Listrik Tenaga Surya (PLTS) atap dengan total kapasitas daya terpasang sebesar <strong>$3.000\\text{ Wp}$ ($3\\text{ kWp}$)</strong> on-grid.
            Di wilayah tempat tinggalnya, rata-rata penyinaran matahari efektif yang dapat diserap panel adalah <strong>$4{,}5\\text{ jam}$ beban puncak (peak sun hours) per hari</strong>.
          </p>
          <p>
            Sistem PLTS tersebut memiliki tingkat efisiensi sistem keseluruhan (meliputi rugi-rugi kabel, debu pada panel, dan efisiensi inverter) sebesar <strong>$90\\%$ ($0{,}90$)</strong>.
            Produksi energi harian ($E_{\\text{harian}}$) dihitung dengan formula:
            $$E_{\\text{harian}} = \\text{Kapasitas (kWp)} \\times \\text{Jam Puncak} \\times \\text{Efisiensi}$$
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Parameter Sistem</th>
                  <th class="p-2.5 font-bold">Nilai Spesifikasi</th>
                  <th class="p-2.5 font-bold">Keterangan Operasional</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kapasitas Panel Surya</td>
                  <td class="p-2.5 font-mono">$3.000\\text{ Wp} = 3\\text{ kWp}$</td>
                  <td class="p-2.5">Monocrystalline silicon panel</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tarif Dasar Listrik PLN</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}1.500,00\\text{ per kWh}$</td>
                  <td class="p-2.5">Ekspor surplus listrik ke PLN dihargai $100\\%$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Laju Degradasi Panel</td>
                  <td class="p-2.5 font-mono">$0{,}8\\%\\text{ per tahun}$</td>
                  <td class="p-2.5">Penurunan efisiensi secara linear mulai tahun ke-2</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Total Biaya Investasi</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}36.000.000,00$</td>
                  <td class="p-2.5">Termasuk inverter, panel, mounting, dan sertifikat SLO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
            <strong>Catatan Tambahan:</strong> Diasumsikan 1 bulan standar terdiri atas <strong>30 hari kalender</strong>, dan 1 tahun terdiri atas <strong>365 hari</strong>.
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p2-2",
      title: "Wacana 2: Struktur Kubah Geodesik & Akustik Ruang Teater Mini",
      domain: "Geometri",
      badge: "Soal No. 5 – 8",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah pusat sains dan seni modern merancang gedung bioskop kubah (dome theatre) setengah bola (hemisfer)
            dengan diameter dasar berukuran <strong>$14\\text{ meter}$</strong> (sehingga jari-jari $r = 7\\text{ meter}$).
            Gunakan pendekatan $\\pi = \\frac{22}{7}$.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Komponen Ruang Kubah</th>
                  <th class="p-2.5 font-bold">Rumus / Dimensi Dasar</th>
                  <th class="p-2.5 font-bold">Ketentuan Desain</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Luas Selimut Setengah Bola</td>
                  <td class="p-2.5 font-mono">$L = 2\\pi r^2$</td>
                  <td class="p-2.5">Permukaan kubah lengkung bagian dalam</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Bukaan Pintu & Panggung</td>
                  <td class="p-2.5 font-mono">$23\\text{ m}^2$</td>
                  <td class="p-2.5">Area yang tidak dipasang panel peredam akustik</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Panel Akustik Heksagonal</td>
                  <td class="p-2.5 font-mono">$0{,}75\\text{ m}^2\\text{ per panel}$</td>
                  <td class="p-2.5">Harga: $\\text{Rp}65.000,00\\text{ per unit}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Volume Udara Kubah</td>
                  <td class="p-2.5 font-mono">$V = \\frac{2}{3}\\pi r^3$</td>
                  <td class="p-2.5">Dasar penentuan beban pendingin ruangan (AC)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p2-3",
      title: "Wacana 3: Skema Pembiayaan Kredit Usaha Rakyat (KUR) & Anuitas UMKM",
      domain: "Aljabar",
      badge: "Soal No. 9 – 12",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Pak Budi mengajukan pinjaman program Kredit Usaha Rakyat (KUR) mikro untuk pengembangan usaha kedai kopi sebesar 
            <strong>$\\text{Rp}60.000.000,00$</strong> dengan jangka waktu pinjaman (tenor) <strong>$2\\text{ tahun}$ ($24\\text{ bulan}$)</strong>.
            Suku bunga yang dikenakan adalah <strong>suku bunga tetap (flat) sebesar $6\\%$ per tahun</strong> dari pokok awal pinjaman.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Komponen Pembayaran</th>
                  <th class="p-2.5 font-bold">Rumus Perhitungan</th>
                  <th class="p-2.5 font-bold">Keterangan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Pokok Pinjaman ($P$)</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}60.000.000,00$</td>
                  <td class="p-2.5">Dicairkan utuh tanpa potongan provisi</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Total Bunga Flat</td>
                  <td class="p-2.5 font-mono">$I = P \\times i \\times t$</td>
                  <td class="p-2.5">$i = 6\\% = 0{,}06$, $t = 2\\text{ tahun}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Angsuran Bulanan ($A$)</td>
                  <td class="p-2.5 font-mono">$A = \\frac{P + I}{24}$</td>
                  <td class="p-2.5">Dibayarkan tiap akhir bulan selama 24 bulan</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Laba Bersih Kedai Kopi</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}7.000.000,00\\text{ / bulan}$</td>
                  <td class="p-2.5">Batas aman Debt Service Ratio (DSR) $\\le 35\\%$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p2-4",
      title: "Wacana 4: Laju Aliran Pipa Venturi & Debit Air Bendungan Irigasi",
      domain: "Aljabar",
      badge: "Soal No. 13 – 16",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Petugas pengairan bendungan mengatur pasokan air ke lahan persawahan menggunakan saluran tertutup berpipa Venturi horizontal.
            Luas penampang pipa masuk bagian lebar adalah <strong>$A_1 = 0{,}08\\text{ m}^2$</strong>, dan menyempit menjadi 
            <strong>$A_2 = 0{,}02\\text{ m}^2$</strong> pada bagian leher leher venturi.
          </p>
          <p>
            Berdasarkan persamaan kontinuitas fluida inkompresibel:
            $$Q = A_1 v_1 = A_2 v_2$$
            dengan $Q$ adalah debit air ($\\text{m}^3/\\text{s}$), $v_1$ kecepatan aliran pada pipa masuk, dan $v_2$ kecepatan aliran pada bagian leher.
            Sensor kecepatan mendeteksi aliran pada bagian masuk memiliki kecepatan konstan <strong>$v_1 = 2{,}0\\text{ m/s}$</strong>.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Parameter Irigasi</th>
                  <th class="p-2.5 font-bold">Besaran / Nilai</th>
                  <th class="p-2.5 font-bold">Konversi Teknis</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Debit Aliran ($Q$)</td>
                  <td class="p-2.5 font-mono">$A_1 \\times v_1$</td>
                  <td class="p-2.5">$1\\text{ m}^3 = 1.000\\text{ liter}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Luas Petak Sawah Target</td>
                  <td class="p-2.5 font-mono">$2\\text{ hektar}$</td>
                  <td class="p-2.5">$1\\text{ hektar} = 10.000\\text{ m}^2$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Tinggi Genangan yang Diperlukan</td>
                  <td class="p-2.5 font-mono">$5\\text{ cm}$</td>
                  <td class="p-2.5">$5\\text{ cm} = 0{,}05\\text{ meter}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p2-5",
      title: "Wacana 5: Uji Klinis Terapi Antihipertensi & Distribusi Normal Sampel",
      domain: "Data & Peluang",
      badge: "Soal No. 17 – 20",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah tim peneliti kedokteran mengevaluasi data awal dari <strong>$400\\text{ pasien}$</strong> penderita hipertensi dalam uji klinis.
            Tekanan darah sistolik awal pasien berdistribusi normal dengan rata-rata <strong>$\\mu = 160\\text{ mmHg}$</strong> dan 
            simpangan baku (standar deviasi) <strong>$\\sigma = 12\\text{ mmHg}$</strong>.
          </p>
          <p>
            Distribusi normal memenuhi aturan empiris proporsi baku:
            $$z = \\frac{X - \\mu}{\\sigma}$$
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Rentang Nilai ($X$)</th>
                  <th class="p-2.5 font-bold">Rentang Skor Baku ($z$)</th>
                  <th class="p-2.5 font-bold">Persentase Teoretis Distribusi Normal</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">$\\mu \\pm \\sigma$ ($148\\text{ s.d. } 172\\text{ mmHg}$)</td>
                  <td class="p-2.5 font-mono">$-1 \\le z \\le +1$</td>
                  <td class="p-2.5">Sekitar $68\\%$ dari total pasien</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">$\\mu \\pm 2\\sigma$ ($136\\text{ s.d. } 184\\text{ mmHg}$)</td>
                  <td class="p-2.5 font-mono">$-2 \\le z \\le +2$</td>
                  <td class="p-2.5">Sekitar $95\\%$ dari total pasien</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Hipertensi Sangat Tinggi ($> 184\\text{ mmHg}$)</td>
                  <td class="p-2.5 font-mono">$z > +2$</td>
                  <td class="p-2.5">Sekitar $2{,}5\\%$ dari total pasien</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];

  // ============================================================================
  // 2. DAFTAR SOAL PAKET B (SOAL 1 - 20)
  // ============================================================================
  const PM_PAKET2_QUESTIONS = [
    // Soal 1
    {
      id: 201,
      stimulusId: "stimulus-p2-1",
      number: 1,
      domain: "Bilangan",
      subtopic: "Aritmetika Sosial & Energi",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapa total energi listrik yang mampu diproduksi oleh sistem PLTS keluarga Dr. Hendra dalam satu bulan standar (30 hari) pada tahun pertama pemakaian?",
      options: [
        "$$324{,}0\\text{ kWh}$$",
        "$$345{,}0\\text{ kWh}$$",
        "$$364{,}5\\text{ kWh}$$",
        "$$385{,}2\\text{ kWh}$$",
        "$$405{,}0\\text{ kWh}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Kapasitas $= 3\\text{ kWp}$, Jam efektif harian $= 4{,}5\\text{ jam}$, Efisiensi $= 0{,}90$, Waktu $= 30\\text{ hari}$.",
        relations: "$E_{\\text{bulan}} = 3 \\times 4{,}5 \\times 0{,}90 \\times 30$.",
        strategy: "Hitung energi harian terlebih dahulu ($12{,}15\\text{ kWh}$), kemudian kalikan dengan 30 hari."
      },
      extractionTable: [
        { fact: "Produksi Energi Harian", model: "$E_{\\text{hari}} = 3 \\times 4{,}5 \\times 0{,}90 = 12{,}15\\text{ kWh}$", role: "Basis produksi harian" },
        { fact: "Jumlah Hari dalam 1 Bulan", model: "$n = 30\\text{ hari}$", role: "Faktor pengali waktu" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung produksi energi harian</strong><br>
        $$E_{\\text{harian}} = 3\\text{ kWp} \\times 4{,}5\\text{ jam} \\times 0{,}90 = 12{,}15\\text{ kWh/hari}$$
        <br>
        <strong>Langkah 2: Kalikan dengan jumlah hari sebulan (30 hari)</strong><br>
        $$E_{\\text{bulanan}} = 12{,}15\\text{ kWh} \\times 30 = 364{,}5\\text{ kWh}$$
      `,
      tacticalShortcut: "3 kWp × 4,5 jam × 0,9 × 30 = 13,5 × 27 = 364,5 kWh."
    },
    // Soal 2
    {
      id: 202,
      stimulusId: "stimulus-p2-1",
      number: 2,
      domain: "Bilangan",
      subtopic: "Aritmetika Sosial & Penghematan Finansial",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika seluruh listrik yang dihasilkan PLTS digunakan sendiri atau diekspor ke jaringan PLN dengan tarif $\\text{Rp}1.500,00\\text{ per kWh}$, berapakah taksiran total nilai penghematan tagihan listrik keluarga Dr. Hendra selama satu tahun penuh (365 hari)?",
      options: [
        "$$\\text{Rp}5.832.000,00$$",
        "$$\\text{Rp}6.210.000,00$$",
        "$$\\text{Rp}6.561.000,00$$",
        "$$\\text{Rp}6.652.125,00$$",
        "$$\\text{Rp}7.125.000,00$$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "Produksi harian $= 12{,}15\\text{ kWh}$, Hari dalam setahun $= 365$, Tarif per kWh $= \\text{Rp}1.500,00$.",
        relations: "$\\text{Penghematan} = 12{,}15 \\times 365 \\times 1.500$.",
        strategy: "Kalikan produksi tahunan dengan tarif listrik PLN."
      },
      extractionTable: [
        { fact: "Total Energi Tahunan", model: "$E_{\\text{tahun}} = 12{,}15 \\times 365 = 4.434{,}75\\text{ kWh}$", role: "Volume kWh tahunan" },
        { fact: "Tarif per kWh", model: "$\\text{Tarif} = \\text{Rp}1.500,00$", role: "Harga satuan penghematan" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung produksi energi tahunan</strong><br>
        $$E_{\\text{tahun}} = 12{,}15\\text{ kWh/hari} \\times 365\\text{ hari} = 4.434{,}75\\text{ kWh}$$
        <br>
        <strong>Langkah 2: Kalikan dengan tarif PLN</strong><br>
        $$\\text{Nilai Penghematan} = 4.434{,}75 \\times \\text{Rp}1.500,00 = \\text{Rp}6.652.125,00$$
      `,
      tacticalShortcut: "12,15 × 365 × 1.500 = 12,15 × 547.500 = Rp6.652.125,00."
    },
    // Soal 3
    {
      id: 203,
      stimulusId: "stimulus-p2-1",
      number: 3,
      domain: "Bilangan",
      subtopic: "Persentase & Laju Degradasi",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Panel surya mengalami degradasi efisiensi sebesar $0{,}8\\%\\text{ per tahun}$ yang dihitung secara linear mulai tahun ke-2 (berarti pada akhir tahun ke-1 belum ada degradasi). Berapakah persentase total degradasi efisiensi panel surya pada tahun ke-6 dibandingkan efisiensi awal tahun pertama (tuliskan angka persentasenya saja)?",
      correctNumeric: 4,
      numericTolerance: 0,
      numericUnit: "%",
      deconstructorClue: {
        variables: "Tahun ke-6 berarti telah terjadi degradasi selama $(6 - 1) = 5\\text{ periode tahun}$. Laju degradasi $= 0{,}8\\%\\text{ per tahun}$.",
        relations: "$\\text{Total Degradasi} = 5 \\times 0{,}8\\% = 4\\%$.",
        strategy: "Hitung selisih tahun dari awal degradasi, lalu kalikan laju tahunan."
      },
      extractionTable: [
        { fact: "Lama Degradasi Berjalan", model: "$t = 6 - 1 = 5\\text{ tahun}$", role: "Durasi akumulasi degradasi" },
        { fact: "Laju per Tahun", model: "$r = 0{,}8\\%$", role: "Laju penyusutan linear" }
      ],
      explanation: `
        Degradasi dimulai setelah tahun ke-1 berakhir. Pada tahun ke-6, degradasi telah berlangsung selama:
        $$n = 6 - 1 = 5\\text{ tahun}$$
        Total persentase degradasi efisiensi:
        $$\\text{Persentase} = 5 \\times 0{,}8\\% = 4\\%$$
      `,
      tacticalShortcut: "(6 - 1) × 0,8 = 4%."
    },
    // Soal 4
    {
      id: 204,
      stimulusId: "stimulus-p2-1",
      number: 4,
      domain: "Bilangan",
      subtopic: "Analisis Logika Kebenaran Finansial & Teknis",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Berdasarkan stimulus sistem PLTS atap keluarga Dr. Hendra, tentukan nilai kebenaran (Benar atau Salah) dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Penghematan pada tahun pertama cukup untuk menutup modal investasi awal sebesar $\\text{Rp}36.000.000,00$ dalam waktu kurang dari 6 tahun.",
          correct: true
        },
        {
          text: "Jika pada suatu hari terjadi hujan mendung seharian sehingga jam puncak matahari efektif berkurang separuh menjadi $2{,}25\\text{ jam}$, maka produksi energi listrik harian yang dihasilkan adalah tepat $6{,}075\\text{ kWh}$.",
          correct: true
        },
        {
          text: "Karena laju degradasi $0{,}8\\%$ per tahun, kapasitas produksi energi pada tahun ke-26 akan tersisa tepat $70\\%$ dari kapasitas tahun pertama.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Payback period $= 36.000.000 / 6.652.125 \\approx 5{,}41\\text{ tahun} < 6$. (2) Proporsi linear jam matahari: $12{,}15 / 2 = 6{,}075$. (3) Penurunan 25 tahun: $25 \\times 0{,}8\\% = 20\\%$, sehingga tersisa $80\\%$, bukan $70\\%$.",
        relations: "Analisis masing-masing rasio finansial dan teknis.",
        strategy: "Uji angka nyata pada tiap pernyataan secara berurutan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Payback", model: "$\\frac{36.000.000}{6.652.125} \\approx 5{,}41\\text{ tahun}$", role: "Benar, $< 6\\text{ tahun}$" },
        { fact: "Pernyataan 2: Mendung", model: "$3 \\times 2{,}25 \\times 0{,}9 = 6{,}075\\text{ kWh}$", role: "Benar, tepat separuhnya" },
        { fact: "Pernyataan 3: Tahun ke-26", model: "$100\\% - (25 \\times 0{,}8\\%) = 80\\%$", role: "Salah, tersisa $80\\%$" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        $$\\text{Payback Period} = \\frac{\\text{Rp}36.000.000}{\\text{Rp}6.652.125} \\approx 5{,}41\\text{ tahun}$$
        Karena $5{,}41 < 6$, modal investasi akan impas dalam kurun waktu kurang dari 6 tahun.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        $$E_{\\text{mendung}} = 3\\text{ kWp} \\times 2{,}25\\text{ jam} \\times 0{,}90 = 6{,}075\\text{ kWh}$$
        Hasil ini tepat separuh dari produksi normal ($12{,}15 / 2 = 6{,}075$).
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pada tahun ke-26, degradasi berlangsung selama $26 - 1 = 25\\text{ tahun}$.
        Penurunan efisiensi $= 25 \\times 0{,}8\\% = 20\\%$.
        Kapasitas yang tersisa adalah $100\\% - 20\\% = 80\\%$, bukan $70\\%$.
      `,
      tacticalShortcut: "P1: 36/6,6 = 5,45 (Benar). P2: linearitas jam matahari (Benar). P3: 25 × 0,8 = 20% turun -> sisa 80% (Salah)."
    },

    // Soal 5
    {
      id: 205,
      stimulusId: "stimulus-p2-2",
      number: 5,
      domain: "Geometri",
      subtopic: "Luas Permukaan Lengkung & Pembagian Panel",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapa banyak panel peredam akustik heksagonal yang harus dipasang untuk melapisi seluruh dinding lengkung kubah setengah bola tersebut (setelah dikurangi bukaan pintu dan panggung)?",
      options: [
        "$$340\\text{ panel}$$",
        "$$360\\text{ panel}$$",
        "$$380\\text{ panel}$$",
        "$$400\\text{ panel}$$",
        "$$420\\text{ panel}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Jari-jari $r = 7\\text{ m}$, Luas kubah hemisfer $= 2\\pi r^2$, Area bukaan $= 23\\text{ m}^2$, Luas per panel $= 0{,}75\\text{ m}^2$.",
        relations: "$L_{\\text{selimut}} = 2 \\times \\frac{22}{7} \\times 49 = 308\\text{ m}^2$. Luas efektif $= 308 - 23 = 285\\text{ m}^2$.",
        strategy: "Bagi luas efektif dengan luas satu panel ($285 / 0{,}75$)."
      },
      extractionTable: [
        { fact: "Luas Selimut Setengah Bola", model: "$L = 2 \\times \\frac{22}{7} \\times 7^2 = 308\\text{ m}^2$", role: "Luas total kubah" },
        { fact: "Luas Bersih Dilapisi", model: "$L_{\\text{bersih}} = 308 - 23 = 285\\text{ m}^2$", role: "Area sasaran pemasangan" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung luas selimut setengah bola</strong><br>
        $$L = 2 \\pi r^2 = 2 \\times \\frac{22}{7} \\times 7^2 = 2 \\times 22 \\times 7 = 308\\text{ m}^2$$
        <br>
        <strong>Langkah 2: Kurangkan dengan area pintu dan panggung</strong><br>
        $$L_{\\text{bersih}} = 308\\text{ m}^2 - 23\\text{ m}^2 = 285\\text{ m}^2$$
        <br>
        <strong>Langkah 3: Hitung jumlah panel yang diperlukan</strong><br>
        $$\\text{Banyak panel} = \\frac{285}{0{,}75} = \\frac{285}{3/4} = 285 \\times \\frac{4}{3} = 95 \\times 4 = 380\\text{ panel}$$
      `,
      tacticalShortcut: "285 / 0,75 = 285 × 4 / 3 = 95 × 4 = 380 panel."
    },
    // Soal 6
    {
      id: 206,
      stimulusId: "stimulus-p2-2",
      number: 6,
      domain: "Geometri",
      subtopic: "Aritmetika Biaya Material Bangunan",
      type: "single_choice",
      level: "Mudah",
      prompt: "Jika harga satuan panel akustik heksagonal adalah $\\text{Rp}65.000,00$, berapakah total biaya yang harus dianggarkan untuk membeli seluruh panel akustik yang dibutuhkan tersebut?",
      options: [
        "$$\\text{Rp}22.100.000,00$$",
        "$$\\text{Rp}23.400.000,00$$",
        "$$\\text{Rp}24.700.000,00$$",
        "$$\\text{Rp}26.000.000,00$$",
        "$$\\text{Rp}27.300.000,00$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Jumlah panel $= 380\\text{ unit}$, Harga per unit $= \\text{Rp}65.000,00$.",
        relations: "$\\text{Biaya} = 380 \\times 65.000$.",
        strategy: "Kalikan jumlah panel dengan harga satuan."
      },
      extractionTable: [
        { fact: "Jumlah Panel Terpasang", model: "$N = 380\\text{ unit}$", role: "Volume barang" },
        { fact: "Harga Satuan", model: "$P = \\text{Rp}65.000,00$", role: "Tarif barang" }
      ],
      explanation: `
        $$\\text{Total Biaya} = 380 \\times \\text{Rp}65.000,00 = \\text{Rp}24.700.000,00$$
      `,
      tacticalShortcut: "380 × 65.000 = 38 × 650.000 = Rp24.700.000,00."
    },
    // Soal 7
    {
      id: 207,
      stimulusId: "stimulus-p2-2",
      number: 7,
      domain: "Geometri",
      subtopic: "Volume Bangun Ruang Lengkung & Kapasitas AC",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Berdasarkan standar tata udara bioskop, 1 unit Air Conditioner (AC) berkapasitas 2 PK mampu mengondisikan volume ruangan maksimal sebesar $80\\text{ m}^3$. Mengingat volume kubah setengah bola berdiameter 14 meter adalah $V = \\frac{2}{3}\\pi r^3$, berapakah unit AC 2 PK minimum yang wajib dipasang agar mampu mendinginkan seluruh volume kubah tersebut (bulatkan ke atas ke bilangan bulat terdekat)?",
      correctNumeric: 9,
      numericTolerance: 0,
      numericUnit: "unit",
      deconstructorClue: {
        variables: "$r = 7\\text{ m}$, $V = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = \\frac{2156}{3} \\approx 718{,}67\\text{ m}^3$. Kapasitas AC per unit $= 80\\text{ m}^3$.",
        relations: "$\\text{Jumlah Unit} = \\lceil \\frac{718{,}67}{80} \\rceil$.",
        strategy: "Hitung volume ruang, bagi dengan 80, lalu bulatkan ke atas."
      },
      extractionTable: [
        { fact: "Volume Udara Hemisfer", model: "$V = \\frac{2}{3} \\times \\frac{22}{7} \\times 343 = 718{,}67\\text{ m}^3$", role: "Beban volume udara" },
        { fact: "Kapasitas Pendinginan AC", model: "$C = 80\\text{ m}^3\\text{ / unit}$", role: "Daya pendingin satuan" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung volume udara di dalam kubah</strong><br>
        $$V = \\frac{2}{3} \\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{2}{3} \\times 22 \\times 49 = \\frac{2.156}{3} \\approx 718{,}67\\text{ m}^3$$
        <br>
        <strong>Langkah 2: Hitung kebutuhan unit AC</strong><br>
        $$\\text{Unit AC} = \\frac{718{,}67}{80} \\approx 8{,}98\\text{ unit}$$
        Karena pendinginan harus mencakup seluruh ruangan, jumlah unit harus dibulatkan ke atas menjadi <strong>9 unit</strong>.
      `,
      tacticalShortcut: "2.156 / (3 × 80) = 2.156 / 240 = 8,98 -> dibulatkan ke atas = 9 unit."
    },
    // Soal 8
    {
      id: 208,
      stimulusId: "stimulus-p2-2",
      number: 8,
      domain: "Geometri",
      subtopic: "Karakteristik Bangun Ruang Hemisfer",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus rancangan kubah gedung teater setengah bola, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Luas bidang lantai melingkar di dasar kubah tepat sebesar $154\\text{ m}^2$.",
          correct: true
        },
        {
          text: "Volume kubah setengah bola ini tepat separuh dari volume tabung dengan jari-jari alas dan tinggi yang sama ($r = 7\\text{ m}$, $t = 7\\text{ m}$).",
          correct: false
        },
        {
          text: "Jika diameter kubah diperbesar menjadi dua kali lipat ($28\\text{ meter}$), maka luas permukaan selimutnya akan meningkat menjadi empat kali lipat dari luas semula.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Luas lingkaran alas $= \\pi r^2 = \\frac{22}{7} \\times 49 = 154\\text{ m}^2$. (2) Volume tabung $= \\pi r^2 t = \\pi r^3$. Setengah bola $= \\frac{2}{3}\\pi r^3$, rasio $= \\frac{2}{3}$, bukan separuh ($1/2$). (3) Luas berbanding lurus dengan kuadrat faktor skala ($2^2 = 4$).",
        relations: "Rumus geometri lingkaran, tabung, dan perbesaran skala.",
        strategy: "Periksa formula baku secara analitis."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Luas Alas", model: "$L_{\\text{alas}} = \\frac{22}{7} \\times 7^2 = 154\\text{ m}^2$", role: "Benar" },
        { fact: "Pernyataan 2: Rasio Tabung", model: "$\\frac{V_{\\text{kubah}}}{V_{\\text{tabung}}} = \\frac{2/3 \\pi r^3}{\\pi r^3} = \\frac{2}{3} \\ne \\frac{1}{2}$", role: "Salah" },
        { fact: "Pernyataan 3: Skala Luas", model: "$k = 2 \\implies k^2 = 4$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Luas bidang lantai melingkar $= \\pi r^2 = \\frac{22}{7} \\times 7^2 = 154\\text{ m}^2$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Volume tabung dengan jari-jari $r$ dan tinggi $t = r$ adalah $V_{\\text{tabung}} = \\pi r^2(r) = \\pi r^3$.
        Volume setengah bola adalah $V_{\\text{kubah}} = \\frac{2}{3}\\pi r^3$.
        Rasionya adalah $\\frac{2}{3}$, bukan $\\frac{1}{2}$ (separuh).
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Luas permukaan bangun ruang berdimensi dua berskala kuadratik: jika dimensi linear (diameter) diperbesar $2$ kali, maka luas permukaannya meningkat $2^2 = 4$ kali lipat.
      `,
      tacticalShortcut: "P1: 22/7 × 49 = 154 (B). P2: 2/3 vs 1/2 (S). P3: rasio luas = k^2 = 4 (B)."
    },

    // Soal 9
    {
      id: 209,
      stimulusId: "stimulus-p2-3",
      number: 9,
      domain: "Aljabar",
      subtopic: "Aritmetika Sosial & Bunga Flat Pinjaman",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah porsi angsuran pokok murni yang dibayarkan oleh Pak Budi setiap bulannya (di luar komponen bunga pinjaman)?",
      options: [
        "$$\\text{Rp}2.000.000,00$$",
        "$$\\text{Rp}2.500.000,00$$",
        "$$\\text{Rp}2.800.000,00$$",
        "$$\\text{Rp}3.000.000,00$$",
        "$$\\text{Rp}3.200.000,00$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Pokok pinjaman $P = \\text{Rp}60.000.000,00$, Tenor $= 24\\text{ bulan}$.",
        relations: "$\\text{Pokok Bulanan} = \\frac{P}{24}$.",
        strategy: "Bagi pokok utang dengan total bulan angsuran."
      },
      extractionTable: [
        { fact: "Total Pokok", model: "$P = 60.000.000$", role: "Jumlah modal awal" },
        { fact: "Tenor", model: "$n = 24\\text{ bulan}$", role: "Jangka waktu" }
      ],
      explanation: `
        $$\\text{Pokok Bulanan} = \\frac{\\text{Rp}60.000.000,00}{24} = \\text{Rp}2.500.000,00$$
      `,
      tacticalShortcut: "60 juta / 24 = 2,5 juta."
    },
    // Soal 10
    {
      id: 210,
      stimulusId: "stimulus-p2-3",
      number: 10,
      domain: "Aljabar",
      subtopic: "Rasio Keuangan & Debt Service Ratio (DSR)",
      type: "single_choice",
      level: "Sedang",
      prompt: "Total cicilan bulanan yang harus dibayar Pak Budi (pokok + bunga) adalah $\\text{Rp}2.800.000,00$. Berapakah rasio cicilan tersebut terhadap laba bersih bulanan kedai kopi Pak Budi (Debt Service Ratio)?",
      options: [
        "$$32\\%$$",
        "$$35\\%$$",
        "$$38\\%$$",
        "$$40\\%$$",
        "$$45\\%$$"
      ],
      correct: 3,
      deconstructorClue: {
        variables: "Cicilan bulanan $= \\text{Rp}2.800.000,00$, Laba bersih $= \\text{Rp}7.000.000,00$.",
        relations: "$\\text{DSR} = \\frac{2.800.000}{7.000.000} \\times 100\\%$.",
        strategy: "Bagi cicilan dengan laba bersih lalu jadikan persentase."
      },
      extractionTable: [
        { fact: "Cicilan Bulanan Total", model: "$C = 2.800.000$", role: "Beban utang bulanan" },
        { fact: "Laba Bersih Bulanan", model: "$L = 7.000.000$", role: "Penghasilan usaha" }
      ],
      explanation: `
        $$\\text{DSR} = \\frac{\\text{Rp}2.800.000,00}{\\text{Rp}7.000.000,00} \\times 100\\% = \\frac{28}{70} \\times 100\\% = \\frac{4}{10} \\times 100\\% = 40\\%$$
      `,
      tacticalShortcut: "2,8 / 7 = 0,4 = 40%."
    },
    // Soal 11
    {
      id: 211,
      stimulusId: "stimulus-p2-3",
      number: 11,
      domain: "Aljabar",
      subtopic: "Pelunasan Sisa Pokok Pinjaman",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Setelah tertib membayar angsuran selama tepat 12 bulan pertama, Pak Budi mendapatkan suntikan modal dari investor dan memutuskan melunasi seluruh sisa pokok pinjamannya sekaligus tanpa denda penalti bunga. Berapakah sisa pokok pinjaman yang harus dibayarkan oleh Pak Budi (tuliskan nilai dalam satuan JUTA RUPIAH, misalnya jika 25 juta tulis 25)?",
      correctNumeric: 30,
      numericTolerance: 0,
      numericUnit: "juta rupiah",
      deconstructorClue: {
        variables: "Tenor $= 24\\text{ bulan}$, Sudah bayar $= 12\\text{ bulan}$, Sisa tenor $= 12\\text{ bulan}$. Pokok bulanan $= \\text{Rp}2.500.000,00$.",
        relations: "$\\text{Sisa Pokok} = 12 \\times 2.500.000 = \\text{Rp}30.000.000,00 = 30\\text{ juta}$.",
        strategy: "Kalikan sisa bulan dengan besaran pokok bulanan."
      },
      extractionTable: [
        { fact: "Sisa Bulan Angsuran", model: "$24 - 12 = 12\\text{ bulan}$", role: "Durasi sisa tenor" },
        { fact: "Pokok per Bulan", model: "$2{,}5\\text{ juta rupiah}$", role: "Pelunasan pokok per bulan" }
      ],
      explanation: `
        Karena angsuran pokok flat setiap bulannya adalah $\\text{Rp}2.500.000,00$, maka setelah membayar 12 bulan, sisa bulan angsuran adalah:
        $$24 - 12 = 12\\text{ bulan}$$
        Total sisa pokok pinjaman yang harus dilunasi:
        $$12 \\times \\text{Rp}2.500.000,00 = \\text{Rp}30.000.000,00$$
        Dalam satuan juta rupiah, nilainya adalah <strong>30</strong>.
      `,
      tacticalShortcut: "12 × 2,5 = 30 juta rupiah."
    },
    // Soal 12
    {
      id: 212,
      stimulusId: "stimulus-p2-3",
      number: 12,
      domain: "Aljabar",
      subtopic: "Analisis Kelayakan Finansial Perbankan",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus skema pinjaman modal usaha Pak Budi, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Total seluruh bunga pinjaman yang harus dibayarkan selama 2 tahun pada skema flat 6% ini adalah tepat $\\text{Rp}7.200.000,00$.",
          correct: true
        },
        {
          text: "Rasio cicilan hutang Pak Budi (DSR 40%) berada dalam batas aman standar perbankan (DSR $\\le 35\\%$).",
          correct: false
        },
        {
          text: "Besar porsi bunga bulanan yang dibayarkan Pak Budi selalu menurun setiap bulannya dari bulan ke-1 hingga bulan ke-24.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Bunga $= 60.000.000 \\times 0{,}06 \\times 2 = 7.200.000$ (Benar). (2) DSR $40\\% > 35\\%$ sehingga melebihi batas aman (Salah). (3) Pada skema FLAT, porsi bunga bernilai tetap tiap bulan (Rp300.000), tidak menurun (Salah).",
        relations: "Karakteristik suku bunga flat vs bunga efektif/anuitas.",
        strategy: "Cek definisi suku bunga flat."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Total Bunga", model: "$60\\text{ juta} \\times 6\\% \\times 2 = 7{,}2\\text{ juta}$", role: "Benar" },
        { fact: "Pernyataan 2: Batas DSR", model: "$40\\% > 35\\%$", role: "Salah, melebihi batas aman" },
        { fact: "Pernyataan 3: Sifat Bunga Flat", model: "$\\text{Bunga} = \\text{konstan} = 300.000$", role: "Salah, bunga flat selalu tetap" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        $$I = P \\times i \\times t = \\text{Rp}60.000.000 \\times 0{,}06 \\times 2 = \\text{Rp}7.200.000,00$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        DSR Pak Budi adalah $40\\%$, sedangkan batas aman perbankan adalah maksimal $35\\%$. Berarti cicilan tersebut melampaui batas aman.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pada sistem suku bunga flat, porsi bunga bulanan dihitung dari pokok awal sehingga nilainya konstan sebesar $\\text{Rp}300.000,00$ setiap bulan (tidak menurun seperti sistem anuitas efektif).
      `,
      tacticalShortcut: "P1: 6% × 2 × 60 = 7,2 jt (B). P2: 40% > 35% (S). P3: Flat artinya selalu sama tiap bulan (S)."
    },

    // Soal 13
    {
      id: 213,
      stimulusId: "stimulus-p2-4",
      number: 13,
      domain: "Aljabar",
      subtopic: "Persamaan Kontinuitas Fluida",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berdasarkan prinsip kontinuitas aliran fluida inkompresibel, berapakah kecepatan aliran air saat melintasi bagian leher sempit pipa venturi ($v_2$)?",
      options: [
        "$$4{,}0\\text{ m/s}$$",
        "$$6{,}0\\text{ m/s}$$",
        "$$8{,}0\\text{ m/s}$$",
        "$$10{,}0\\text{ m/s}$$",
        "$$12{,}0\\text{ m/s}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$A_1 = 0{,}08\\text{ m}^2$, $v_1 = 2{,}0\\text{ m/s}$, $A_2 = 0{,}02\\text{ m}^2$.",
        relations: "$A_1 v_1 = A_2 v_2 \\implies v_2 = \\frac{A_1}{A_2} v_1$.",
        strategy: "Rasio luas $0{,}08 / 0{,}02 = 4$, maka kecepatan menjadi 4 kali lipat."
      },
      extractionTable: [
        { fact: "Rasio Penampang", model: "$\\frac{A_1}{A_2} = \\frac{0{,}08}{0{,}02} = 4$", role: "Faktor pelipatan kecepatan" },
        { fact: "Kecepatan Masuk", model: "$v_1 = 2{,}0\\text{ m/s}$", role: "Kecepatan dasar" }
      ],
      explanation: `
        $$A_1 v_1 = A_2 v_2$$
        $$v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0{,}08 \\times 2{,}0}{0{,}02} = 4 \\times 2{,}0 = 8{,}0\\text{ m/s}$$
      `,
      tacticalShortcut: "A mengecil 4 kali -> v melonjak 4 kali -> 2 × 4 = 8 m/s."
    },
    // Soal 14
    {
      id: 214,
      stimulusId: "stimulus-p2-4",
      number: 14,
      domain: "Aljabar",
      subtopic: "Debit & Konversi Satuan Volume Waktu",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah debit aliran air yang disalurkan oleh sistem irigasi tersebut dalam satuan liter per detik?",
      options: [
        "$$80\\text{ liter/detik}$$",
        "$$120\\text{ liter/detik}$$",
        "$$160\\text{ liter/detik}$$",
        "$$200\\text{ liter/detik}$$",
        "$$240\\text{ liter/detik}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$Q = A_1 v_1 = 0{,}08 \\times 2 = 0{,}16\\text{ m}^3/\\text{s}$. Konversi: $1\\text{ m}^3 = 1.000\\text{ liter}$.",
        relations: "$Q = 0{,}16 \\times 1.000 = 160\\text{ liter/s}$.",
        strategy: "Hitung debit dalam m3/detik lalu kalikan 1.000."
      },
      extractionTable: [
        { fact: "Debit dalam m3/s", model: "$Q = 0{,}08 \\times 2 = 0{,}16\\text{ m}^3/\\text{s}$", role: "Debit volumetrik SI" },
        { fact: "Faktor Konversi Liter", model: "$1\\text{ m}^3 = 1.000\\text{ liter}$", role: "Pengali desimal" }
      ],
      explanation: `
        $$Q = A_1 \\times v_1 = 0{,}08\\text{ m}^2 \\times 2{,}0\\text{ m/s} = 0{,}16\\text{ m}^3/\\text{s}$$
        Dalam liter per detik:
        $$Q = 0{,}16 \\times 1.000 = 160\\text{ liter/detik}$$
      `,
      tacticalShortcut: "0,08 × 2 = 0,16 m3/s = 160 liter/s."
    },
    // Soal 15
    {
      id: 215,
      stimulusId: "stimulus-p2-4",
      number: 15,
      domain: "Aljabar",
      subtopic: "Energi Kinetik Fluida & Rasio Kuadratis",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Tekanan dinamis fluida berbanding lurus dengan kuadrat kecepatannya ($\\frac{1}{2}\\rho v^2$). Berapakah perbandingan (kelipatan) nilai tekanan dinamis pada leher sempit venturi ($v_2$) dibandingkan dengan pipa masuk ($v_1$)?",
      correctNumeric: 16,
      numericTolerance: 0,
      numericUnit: "kali",
      deconstructorClue: {
        variables: "$v_1 = 2\\text{ m/s}$, $v_2 = 8\\text{ m/s}$. Rasio kecepatan $= 8/2 = 4$.",
        relations: "$\\text{Rasio Tekanan Dinamis} = \\left(\\frac{v_2}{v_1}\\right)^2 = 4^2 = 16$.",
        strategy: "Kuadratkan rasio kecepatannya."
      },
      extractionTable: [
        { fact: "Rasio Kecepatan", model: "$\\frac{v_2}{v_1} = \\frac{8}{2} = 4$", role: "Perbandingan linear" },
        { fact: "Kuadrat Rasio", model: "$4^2 = 16$", role: "Rasio energi kinetik" }
      ],
      explanation: `
        $$\\text{Rasio} = \\frac{\\frac{1}{2}\\rho v_2^2}{\\frac{1}{2}\\rho v_1^2} = \\left(\\frac{v_2}{v_1}\\right)^2 = \\left(\\frac{8}{2}\\right)^2 = 4^2 = 16\\text{ kali}$$
      `,
      tacticalShortcut: "(8 / 2)^2 = 4^2 = 16."
    },
    // Soal 16
    {
      id: 216,
      stimulusId: "stimulus-p2-4",
      number: 16,
      domain: "Aljabar",
      subtopic: "Pengukuran Volume Air & Durasi Irigasi",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus teknis irigasi sawah dengan saluran venturi, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Total volume air irigasi yang dibutuhkan untuk mengairi petak sawah seluas 2 hektar dengan ketinggian genangan 5 cm adalah tepat $1.000\\text{ m}^3$.",
          correct: true
        },
        {
          text: "Dengan debit aliran $0{,}16\\text{ m}^3/\\text{detik}$, waktu pengairan penuh sawah tersebut dapat diselesaikan dalam waktu kurang dari 1,5 jam.",
          correct: false
        },
        {
          text: "Menurut hukum Bernoulli, tekanan statis air pada leher sempit pipa venturi lebih rendah daripada tekanan statis air pada pipa masuk.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) $V = 20.000\\text{ m}^2 \\times 0{,}05\\text{ m} = 1.000\\text{ m}^3$ (Benar). (2) Waktu $= 1.000 / 0{,}16 = 6.250\\text{ detik} = 104{,}17\\text{ menit} \\approx 1\\text{ jam } 44\\text{ menit} > 1{,}5\\text{ jam}$ (Salah). (3) Efek Venturi: kelajuan naik -> tekanan statis turun (Benar).",
        relations: "Volume prisma segiempat dan konversi waktu detik ke jam.",
        strategy: "Uji hitungan volume dan waktu secara sistematis."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Volume Sawah", model: "$20.000 \\times 0{,}05 = 1.000\\text{ m}^3$", role: "Benar" },
        { fact: "Pernyataan 2: Durasi Waktu", model: "$\\frac{1.000}{0{,}16} = 6.250\\text{ s} = 1{,}736\\text{ jam} > 1{,}5\\text{ jam}$", role: "Salah" },
        { fact: "Pernyataan 3: Efek Bernoulli", model: "$v_2 > v_1 \\implies P_2 < P_1$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Luas 2 hektar $= 20.000\\text{ m}^2$. Ketinggian genangan $5\\text{ cm} = 0{,}05\\text{ m}$.
        $$V = 20.000\\text{ m}^2 \\times 0{,}05\\text{ m} = 1.000\\text{ m}^3$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Waktu pengairan:
        $$t = \\frac{1.000\\text{ m}^3}{0{,}16\\text{ m}^3/\\text{s}} = 6.250\\text{ detik} = 104\\text{ menit } 10\\text{ detik} \\approx 1{,}74\\text{ jam}$$
        Karena $1{,}74\\text{ jam} > 1{,}5\\text{ jam}$, pengairan membutuhkan waktu lebih dari 1,5 jam.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Berdasarkan asas Bernoulli, pada saluran horizontal, ketika laju aliran fluida meningkat pada penyempitan, energi kinetik bertambah sehingga tekanan statisnya justru menurun.
      `,
      tacticalShortcut: "P1: 20.000 × 0,05 = 1.000 (B). P2: 6.250 detik = 1 jam 44 menit > 1,5 jam (S). P3: Asas Bernoulli venturi (B)."
    },

    // Soal 17
    {
      id: 217,
      stimulusId: "stimulus-p2-5",
      number: 17,
      domain: "Data & Peluang",
      subtopic: "Distribusi Normal & Skor Baku (z-score)",
      type: "single_choice",
      level: "Mudah",
      prompt: "Seorang pasien dalam uji klinis tersebut memiliki tekanan darah sistolik sebesar $178\\text{ mmHg}$. Berapakah nilai skor baku ($z$-score) dari tekanan darah pasien tersebut?",
      options: [
        "$$1{,}00$$",
        "$$1{,}25$$",
        "$$1{,}50$$",
        "$$1{,}75$$",
        "$$2{,}00$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$X = 178\\text{ mmHg}$, $\\mu = 160\\text{ mmHg}$, $\\sigma = 12\\text{ mmHg}$.",
        relations: "$z = \\frac{X - \\mu}{\\sigma} = \\frac{178 - 160}{12}$.",
        strategy: "Kurangkan nilai dengan rata-rata, lalu bagi dengan standar deviasi."
      },
      extractionTable: [
        { fact: "Selisih terhadap Rata-rata", model: "$178 - 160 = 18\\text{ mmHg}$", role: "Deviasi absolut" },
        { fact: "Standar Deviasi", model: "$\\sigma = 12\\text{ mmHg}$", role: "Skala pembagi baku" }
      ],
      explanation: `
        $$z = \\frac{X - \\mu}{\\sigma} = \\frac{178 - 160}{12} = \\frac{18}{12} = 1{,}50$$
      `,
      tacticalShortcut: "(178 - 160) / 12 = 18 / 12 = 1,5."
    },
    // Soal 18
    {
      id: 218,
      stimulusId: "stimulus-p2-5",
      number: 18,
      domain: "Data & Peluang",
      subtopic: "Frekuensi Harapan Populasi Berdistribusi Normal",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berdasarkan tabel proporsi distribusi normal empiris, estimasi banyaknya pasien dengan kondisi hipertensi sangat tinggi (tekanan sistolik di atas $184\\text{ mmHg}$) sebelum terapi dimulai adalah sekitar ...",
      options: [
        "$$5\\text{ pasien}$$",
        "$$10\\text{ pasien}$$",
        "$$16\\text{ pasien}$$",
        "$$22\\text{ pasien}$$",
        "$$30\\text{ pasien}$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Total pasien $N = 400$. Persentase $z > +2$ ($> 184\\text{ mmHg}$) $= 2{,}5\\% = 0{,}025$.",
        relations: "$\\text{Banyak Pasien} = 400 \\times 0{,}025 = 10$.",
        strategy: "Kalikan total populasi sampel dengan persentase di atas 2 sigma."
      },
      extractionTable: [
        { fact: "Total Sampel Pasien", model: "$N = 400\\text{ orang}$", role: "Ukuran sampel" },
        { fact: "Proporsi $z > +2$", model: "$P = 2{,}5\\% = 0{,}025$", role: "Peluang teoretis" }
      ],
      explanation: `
        Kondisi $X > 184\\text{ mmHg}$ setara dengan skor $z > +2$.
        Berdasarkan tabel, proporsinya adalah $2{,}5\\%$.
        $$\\text{Estimasi Pasien} = 400 \\times 2{,}5\\% = 400 \\times 0{,}025 = 10\\text{ pasien}$$
      `,
      tacticalShortcut: "400 × 2,5% = 10 pasien."
    },
    // Soal 19
    {
      id: 219,
      stimulusId: "stimulus-p2-5",
      number: 19,
      domain: "Data & Peluang",
      subtopic: "Simetri Distribusi Normal & Peluang Tengah",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Setelah 30 hari menjalani terapi uji klinis, rata-rata tekanan darah sistolik seluruh pasien berhasil turun menjadi $\\mu_{\\text{baru}} = 142\\text{ mmHg}$ dengan sebaran data tetap berdistribusi normal simetris. Mengingat sifat kesimetrian kurva normal, berapakah persentase pasien yang memiliki tekanan darah sistolik di bawah nilai rata-rata baru $142\\text{ mmHg}$ tersebut (tuliskan angka persentasenya saja)?",
      correctNumeric: 50,
      numericTolerance: 0,
      numericUnit: "%",
      deconstructorClue: {
        variables: "Kurva distribusi normal berbentuk lonceng simetris sempurna di sekitar nilai rata-rata $\\mu$.",
        relations: "$P(X < \\mu) = P(X > \\mu) = 0{,}50 = 50\\%$.",
        strategy: "Gunakan sifat fundamental simetri kurva Gauss."
      },
      extractionTable: [
        { fact: "Sifat Simetri Kurva Normal", model: "$P(X < \\mu) = 50\\%$", role: "Peluang setengah kurva" },
        { fact: "Posisi Titik Tengah", model: "$\\mu = 142\\text{ mmHg}$", role: "Garis simetri distribusi" }
      ],
      explanation: `
        Distribusi normal adalah distribusi probabilitas kontinu yang simetris sempurna terhadap nilai rata-ratanya ($\\mu$).
        Area di sebelah kiri nilai rata-rata ($\\mu$) tepat mencakup $50\\%$ dari seluruh populasi data:
        $$P(X < \\mu) = 0{,}50 = 50\\%$$
      `,
      tacticalShortcut: "Peluang di bawah rata-rata pada kurva normal selalu tepat 50%."
    },
    // Soal 20
    {
      id: 220,
      stimulusId: "stimulus-p2-5",
      number: 20,
      domain: "Data & Peluang",
      subtopic: "Evaluasi Analisis Statistika Inferensial",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Berdasarkan stimulus data uji klinis tekanan darah sistolik 400 pasien, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Sebelum terapi dimulai, diperkirakan terdapat sekitar 272 pasien yang memiliki tekanan darah sistolik di antara 148 mmHg dan 172 mmHg.",
          correct: true
        },
        {
          text: "Median distribusi teoretis tekanan darah sistolik awal sama dengan nilai rata-ratanya, yaitu 160 mmHg.",
          correct: true
        },
        {
          text: "Jika tekanan darah seluruh pasien dikurangi 18 mmHg setelah terapi, maka nilai simpangan baku populasi pasien tersebut akan berkurang menjadi kurang dari 12 mmHg.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Interval $\\mu \\pm \\sigma$ ($148 - 172$) mencakup $68\\%$. $400 \\times 0{,}68 = 272\\text{ pasien}$ (Benar). (2) Pada distribusi normal simetris, Mean = Median = Modus $= 160$ (Benar). (3) Operasi pengurangan konstanta pada seluruh data TIDAK mengubah simpangan baku ($\\sigma$ tetap 12) (Salah).",
        relations: "Sifat parameter tendensi sentral dan ukuran penyebaran data.",
        strategy: "Cek pengaruh transformasi linear $Y = X - c$ terhadap varians/simpangan baku."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Frekuensi $\\pm 1\\sigma$", model: "$400 \\times 68\\% = 272\\text{ pasien}$", role: "Benar" },
        { fact: "Pernyataan 2: Mean = Median", model: "$\\text{Median} = \\mu = 160\\text{ mmHg}$", role: "Benar, simetri normal" },
        { fact: "Pernyataan 3: Simpangan Baku", model: "$\\text{SD}(X - c) = \\text{SD}(X) = 12$", role: "Salah, SD tidak berubah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Interval $148 - 172\\text{ mmHg}$ adalah rentang $\\mu \\pm \\sigma$ (skor $-1 \\le z \\le +1$) yang mencakup $68\\%$ dari populasi.
        $$\\text{Estimasi} = 400 \\times 0{,}68 = 272\\text{ pasien}$$
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Salah satu karakteristik utama dari distribusi normal teoretis adalah nilainya yang simetris sempurna, sehingga $\\text{Mean} = \\text{Median} = \\text{Modus} = 160\\text{ mmHg}$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Sifat dasar statistika ukuran penyebaran: jika setiap nilai dalam data dikurangi atau ditambah suatu konstanta tetap ($c = 18$), jarak relatif antar data tidak berubah sama sekali. Oleh karena itu, simpangan baku ($\\sigma$) tetap bernilai $12\\text{ mmHg}$, bukan berkurang.
      `,
      tacticalShortcut: "P1: 400 × 0,68 = 272 (B). P2: Normal -> Mean = Median = 160 (B). P3: Pengurangan konstanta tidak ubah simpangan baku (S)."
    }
  ];

  // ============================================================================
  // 3. REGISTRASI KE GLOBAL WINDOW
  // ============================================================================
  window.PM_PAKET2_STIMULI = PM_PAKET2_STIMULI;
  window.PM_PAKET2_QUESTIONS = PM_PAKET2_QUESTIONS;

  window.PM_PACKAGES = window.PM_PACKAGES || {};
  window.PM_PACKAGES['paket-2'] = {
    id: 'paket-2',
    code: 'Paket B',
    title: 'Paket B — Infrastruktur, Energi & Finansial',
    description: 'Efisiensi PLTS Atap, Desain Kubah Geodesik, Skema Kredit KUR UMKM, Laju Aliran Venturi, dan Uji Klinis Terapi Hipertensi.',
    durationMinutes: 42.5,
    provenance: { kind: 'original_practice', creator: 'The Arich Study', isOfficialItem: false, alignedTo: 'SNPMB UTBK 2026 framework' },
    stimuli: PM_PAKET2_STIMULI,
    questions: PM_PAKET2_QUESTIONS
  };

})(typeof window !== 'undefined' ? window : globalThis);
