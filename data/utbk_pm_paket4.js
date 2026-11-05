/**
 * ==============================================================================
 * THE ARICH STUDY — PAKET D (PAKET 4) PENALARAN MATEMATIKA (PM) UTBK-SNBT
 * Latihan Penalaran Matematika bergaya UTBK-SNBT & Kurikulum Merdeka
 * Total 20 soal latihan (4 ranah: Bilangan, Aljabar, Geometri, Data & Peluang)
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. DAFTAR WACANA STIMULUS PAKET D
  // ============================================================================
  const PM_PAKET4_STIMULI = [
    {
      id: "stimulus-p4-1",
      title: "Wacana 1: Jejak Emisi Karbon Komuter Kereta Listrik vs Kendaraan Pribadi",
      domain: "Bilangan",
      badge: "Soal No. 1 – 4",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Rian adalah seorang pekerja komuter yang tinggal di kawasan suburban dan bekerja di pusat kota.
            Jarak tempuh satu kali jalan dari rumah ke kantor adalah <strong>$25\\text{ km}$</strong> (jarak pulang-pergi <strong>$50\\text{ km}$ per hari</strong>).
            Dalam satu bulan kalender standar, Rian bekerja selama <strong>$22\\text{ hari kerja}$</strong> di kantor.
          </p>
          <p>
            Dinas Lingkungan Hidup merilis tabel perbandingan jejak emisi gas rumah kaca ($CO_2$) dan biaya operasional komuter:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Moda Transportasi</th>
                  <th class="p-2.5 font-bold">Faktor Emisi $CO_2$</th>
                  <th class="p-2.5 font-bold">Biaya Satuan Transportasi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Mobil Pribadi Bensin</td>
                  <td class="p-2.5 font-mono">$180\\text{ g } CO_2\\text{ / km}$</td>
                  <td class="p-2.5">BBM $\\text{Rp}14.000\\text{/liter}$ ($1\\text{ liter}/10\\text{ km}$) + Tol $\\text{Rp}20.000\\text{/hari}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Sepeda Motor Bensin</td>
                  <td class="p-2.5 font-mono">$90\\text{ g } CO_2\\text{ / km}$</td>
                  <td class="p-2.5">BBM $\\text{Rp}10.000\\text{/liter}$ ($1\\text{ liter}/35\\text{ km}$) tanpa tol</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kereta Rel Listrik (KRL)</td>
                  <td class="p-2.5 font-mono">$30\\text{ g } CO_2\\text{ / penumpang-km}$</td>
                  <td class="p-2.5">Tarif tiket flat $\\text{Rp}3.000,00\\text{ sekali jalan}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p4-2",
      title: "Wacana 2: Sistem Radar Bandara & Sudut Elevasi Pendaratan Pesawat (Glide Slope)",
      domain: "Geometri",
      badge: "Soal No. 5 – 8",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Pesawat komersial Airbus A320 bersiap melakukan pendaratan instrumen (Instrument Landing System / ILS) di Bandara Internasional.
            Sesuai regulasi penerbangan sipil ICAO, jalur sudut luncur (glide slope) baku pendaratan membentuk sudut 
            <strong>$\\alpha = 3^\\circ$</strong> terhadap garis permukaan horizontal tanah.
          </p>
          <p>
            Berdasarkan nilai perbandingan trigonometri sudut $3^\\circ$:
            $$\\tan 3^\\circ \\approx 0{,}0524$$
            Artinya, untuk setiap jarak horizontal <strong>$1.000\\text{ meter}$</strong>, ketinggian pesawat berkurang sebesar <strong>$52{,}4\\text{ meter}$</strong>.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Titik Cek Radar Navigasi</th>
                  <th class="p-2.5 font-bold">Jarak Horizontal ke Runway ($x$)</th>
                  <th class="p-2.5 font-bold">Status Prosedur Navigasi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Way Point ALPHA</td>
                  <td class="p-2.5 font-mono">$10\\text{ km} = 10.000\\text{ m}$</td>
                  <td class="p-2.5">Intersepsi awal sinyal glide path</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Way Point BRAVO</td>
                  <td class="p-2.5 font-mono">$5\\text{ km} = 5.000\\text{ m}$</td>
                  <td class="p-2.5">Pemeriksaan final roda pendarat (landing gear)</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kecepatan Jelajah Akhir</td>
                  <td class="p-2.5 font-mono">$252\\text{ km/jam} = 70\\text{ m/s}$</td>
                  <td class="p-2.5">Kecepatan sepanjang garis hipotenusa pendekatan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p4-3",
      title: "Wacana 3: Peluruhan Farmakokinetika Obat dalam Darah & Waktu Paruh",
      domain: "Aljabar",
      badge: "Soal No. 9 – 12",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Seorang pasien rawat inap menerima infus dosis tunggal obat antibiotik berspektrum luas.
            Segera setelah infus selesai ($t = 0\\text{ jam}$), kadar konsentrasi obat dalam plasma darah pasien mencapai nilai puncak awal 
            <strong>$C_0 = 80\\text{ mg/L}$</strong>.
          </p>
          <p>
            Tubuh manusia mengeliminasi obat tersebut melalui proses metabolisme hati dan ekskresi ginjal dengan model peluruhan eksponensial orde satu:
            $$C(t) = C_0 \\times \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}}$$
            dengan $t$ adalah waktu pasca-pemberian (jam), dan <strong>$T_{1/2} = 4\\text{ jam}$</strong> adalah waktu paruh eliminasi obat.
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Parameter Klinis</th>
                  <th class="p-2.5 font-bold">Nilai Ambang</th>
                  <th class="p-2.5 font-bold">Implikasi Medis</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Konsentrasi Efektif Minimum (MEC)</td>
                  <td class="p-2.5 font-mono">$10\\text{ mg/L}$</td>
                  <td class="p-2.5">Batas bawah antibiotik mampu membunuh bakteri patogen</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Batas Toksisitas Minimum (MTC)</td>
                  <td class="p-2.5 font-mono">$120\\text{ mg/L}$</td>
                  <td class="p-2.5">Batas atas konsentrasi yang memicu efek samping racun</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p4-4",
      title: "Wacana 4: Portofolio Investasi Saham, Obligasi & Ekspektasi Imbal Hasil",
      domain: "Aljabar",
      badge: "Soal No. 13 – 16",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Seorang investor muda mengalokasikan total dana modal tabungan sebesar <strong>$\\text{Rp}100.000.000,00$</strong>
            ke dalam 3 instrumen keuangan dengan diversifikasi risiko:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Instrumen Investasi</th>
                  <th class="p-2.5 font-bold">Bobot Portofolio ($w_i$)</th>
                  <th class="p-2.5 font-bold">Alokasi Modal (Rupiah)</th>
                  <th class="p-2.5 font-bold">Ekspektasi Imbal Hasil ($r_i$)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Deposito Perbankan</td>
                  <td class="p-2.5 font-mono">$20\\% = 0{,}20$</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}20.000.000,00$</td>
                  <td class="p-2.5 font-mono">$4\\%\\text{ per tahun}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Surat Berharga Negara (SBN)</td>
                  <td class="p-2.5 font-mono">$50\\% = 0{,}50$</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}50.000.000,00$</td>
                  <td class="p-2.5 font-mono">$7\\%\\text{ per tahun}$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Reksa Dana Saham Indeks</td>
                  <td class="p-2.5 font-mono">$30\\% = 0{,}30$</td>
                  <td class="p-2.5 font-mono">$\\text{Rp}30.000.000,00$</td>
                  <td class="p-2.5 font-mono">$12\\%\\text{ per tahun}$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
            <strong>Formula Imbal Hasil Portofolio Tertimbang:</strong>
            $$E(R_p) = \\sum_{i=1}^{3} (w_i \\times r_i)$$
          </div>
        </div>
      `
    },
    {
      id: "stimulus-p4-5",
      title: "Wacana 5: Skor Asesmen Kompetensi & Analisis Regresi Linear Sederhana",
      domain: "Data & Peluang",
      badge: "Soal No. 17 – 20",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah lembaga bimbingan belajar menganalisis korelasi antara <strong>durasi waktu belajar mandiri per minggu ($X$, dalam satuan jam)</strong>
            dengan <strong>skor tes asesmen penalaran kuantitatif ($Y$, skala 0 s.d. 100)</strong> pada 100 orang siswa.
          </p>
          <p>
            Berdasarkan analisis metode kuadrat terkecil (<em>Ordinary Least Squares</em>), diperoleh persamaan garis regresi linear terbaik:
            $$\\hat{Y} = 40 + 3{,}5X$$
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Koefisien Model Regresi</th>
                  <th class="p-2.5 font-bold">Nilai Parameter</th>
                  <th class="p-2.5 font-bold">Interpretasi Statistik</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Intersep ($a$)</td>
                  <td class="p-2.5 font-mono">$40$</td>
                  <td class="p-2.5">Estimasi rata-rata skor jika siswa tidak belajar mandiri sama sekali ($X = 0$)</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Kemiringan / Slope ($b$)</td>
                  <td class="p-2.5 font-mono">$+3{,}5$</td>
                  <td class="p-2.5">Taksiran kenaikan skor untuk setiap penambahan 1 jam belajar mandiri</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-slate-100">Koefisien Determinasi ($R^2$)</td>
                  <td class="p-2.5 font-mono">$0{,}64$</td>
                  <td class="p-2.5">$64\\%$ variasi skor tes dapat dijelaskan oleh durasi belajar mandiri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ];

  // ============================================================================
  // 2. DAFTAR SOAL PAKET D (SOAL 1 - 20)
  // ============================================================================
  const PM_PAKET4_QUESTIONS = [
    // Soal 1
    {
      id: 401,
      stimulusId: "stimulus-p4-1",
      number: 1,
      domain: "Bilangan",
      subtopic: "Jejak Emisi Karbon Transportasi",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapa kilogram total emisi gas $CO_2$ yang dihasilkan oleh Rian selama satu bulan kerja (22 hari kerja pulang-pergi) jika ia menggunakan Kereta Rel Listrik (KRL)?",
      options: [
        "$$22\\text{ kg } CO_2$$",
        "$$33\\text{ kg } CO_2$$",
        "$$44\\text{ kg } CO_2$$",
        "$$55\\text{ kg } CO_2$$",
        "$$66\\text{ kg } CO_2$$"
      ],
      correct: 1,
      deconstructorClue: {
        variables: "Jarak harian $= 50\\text{ km}$, Hari kerja $= 22\\text{ hari}$. Total jarak $= 50 \\times 22 = 1.100\\text{ km}$. Faktor emisi KRL $= 30\\text{ g/km}$.",
        relations: "$\\text{Emisi} = 1.100 \\times 30\\text{ g} = 33.000\\text{ g} = 33\\text{ kg}$.",
        strategy: "Kalikan jarak bulanan dengan emisi per km, lalu ubah gram ke kilogram."
      },
      extractionTable: [
        { fact: "Total Jarak Bulanan", model: "$50 \\times 22 = 1.100\\text{ km}$", role: "Jarak tempuh total" },
        { fact: "Faktor Emisi KRL", model: "$30\\text{ g/km} = 0{,}03\\text{ kg/km}$", role: "Rasio emisi per km" }
      ],
      explanation: `
        $$\\text{Total Jarak} = 50\\text{ km/hari} \\times 22\\text{ hari} = 1.100\\text{ km}$$
        $$\\text{Emisi Total} = 1.100\\text{ km} \\times 30\\text{ g/km} = 33.000\\text{ g} = 33\\text{ kg } CO_2$$
      `,
      tacticalShortcut: "1.100 × 0,03 = 33 kg CO2."
    },
    // Soal 2
    {
      id: 402,
      stimulusId: "stimulus-p4-1",
      number: 2,
      domain: "Bilangan",
      subtopic: "Pengurangan Emisi Komparatif",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapa kilogram emisi gas $CO_2$ yang berhasil dihemat (dikurangi) setiap bulannya jika Rian beralih dari mengendarai mobil pribadi ke moda transportasi KRL?",
      options: [
        "$$132\\text{ kg } CO_2$$",
        "$$145\\text{ kg } CO_2$$",
        "$$165\\text{ kg } CO_2$$",
        "$$180\\text{ kg } CO_2$$",
        "$$198\\text{ kg } CO_2$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Total jarak $= 1.100\\text{ km}$. Emisi mobil $= 180\\text{ g/km} = 0{,}18\\text{ kg/km}$. Emisi KRL $= 30\\text{ g/km} = 0{,}03\\text{ kg/km}$.",
        relations: "$\\text{Selisih Emisi} = 1.100 \\times (0{,}18 - 0{,}03) = 1.100 \\times 0{,}15 = 165\\text{ kg}$.",
        strategy: "Kurangkan faktor emisi mobil dengan KRL lalu kalikan jarak total."
      },
      extractionTable: [
        { fact: "Emisi Mobil Bulanan", model: "$1.100 \\times 0{,}18 = 198\\text{ kg}$", role: "Emisi baseline mobil" },
        { fact: "Emisi KRL Bulanan", model: "$1.100 \\times 0{,}03 = 33\\text{ kg}$", role: "Emisi ramah lingkungan" }
      ],
      explanation: `
        $$\\text{Emisi Mobil} = 1.100 \\times 180\\text{ g} = 198.000\\text{ g} = 198\\text{ kg}$$
        $$\\text{Emisi KRL} = 1.100 \\times 30\\text{ g} = 33.000\\text{ g} = 33\\text{ kg}$$
        $$\\text{Penghematan Emisi} = 198 - 33 = 165\\text{ kg } CO_2$$
      `,
      tacticalShortcut: "1.100 × (180 - 30) = 1.100 × 150 g = 165 kg."
    },
    // Soal 3
    {
      id: 403,
      stimulusId: "stimulus-p4-1",
      number: 3,
      domain: "Bilangan",
      subtopic: "Penghematan Biaya Finansial Transportasi",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Dalam satu bulan (22 hari kerja PP), berapakah total biaya tiket KRL yang dikeluarkan oleh Rian (tuliskan nilainya dalam satuan RIBU RUPIAH, misalnya jika Rp150.000 tulis 150)?",
      correctNumeric: 132,
      numericTolerance: 0,
      numericUnit: "ribu rupiah",
      deconstructorClue: {
        variables: "Tarif KRL $= \\text{Rp}3.000\\text{ per sekali jalan}$. Dalam 1 hari PP $= 2 \\times 3.000 = \\text{Rp}6.000$. Hari kerja $= 22\\text{ hari}$.",
        relations: "$\\text{Total Biaya} = 22 \\times 6.000 = \\text{Rp}132.000,00$.",
        strategy: "Kalikan hari kerja dengan tarif pulang-pergi."
      },
      extractionTable: [
        { fact: "Biaya Harian PP KRL", model: "$2 \\times 3.000 = 6.000$", role: "Pengeluaran harian" },
        { fact: "Total Hari Kerja", model: "$22\\text{ hari}$", role: "Jumlah hari aktif" }
      ],
      explanation: `
        Biaya per hari $= 2 \\times \\text{Rp}3.000 = \\text{Rp}6.000,00$.
        Total biaya sebulan:
        $$\\text{Biaya} = 22 \\times \\text{Rp}6.000 = \\text{Rp}132.000,00$$
        Dalam ribuan rupiah, nilainya adalah <strong>132</strong>.
      `,
      tacticalShortcut: "22 × 6 = 132 ribu rupiah."
    },
    // Soal 4
    {
      id: 404,
      stimulusId: "stimulus-p4-1",
      number: 4,
      domain: "Bilangan",
      subtopic: "Analisis Kelayakan Finansial & Lingkungan",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus perbandingan moda transportasi komuter Rian, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Total biaya operasional mobil pribadi (bensin + tol) untuk 22 hari kerja mencapai lebih dari Rp1.800.000,00 per bulan.",
          correct: true
        },
        {
          text: "Penggunaan sepeda motor menghasilkan emisi gas karbon CO2 yang tepat 3 kali lebih banyak dibandingkan penggunaan KRL untuk jarak yang sama.",
          correct: true
        },
        {
          text: "Dengan beralih dari mobil ke KRL, Rian mengurangi jejak karbon bulanannya hingga lebih dari 90%.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Bensin mobil: $1.100 / 10 = 110\\text{ L} \\times 14.000 = 1.540.000$. Tol: $22 \\times 20.000 = 440.000$. Total $= 1.980.000 > 1.800.000$ (Benar). (2) Rasio motor vs KRL: $90 / 30 = 3\\text{ kali}$ (Benar). (3) Penurunan mobil ke KRL: $165 / 198 \\approx 83{,}3\\% < 90\\%$ (Salah).",
        relations: "Kalkulasi pengeluaran riil dan persentase reduksi emisi.",
        strategy: "Uji angka pada masing-masing pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Biaya Mobil", model: "$1.540.000 + 440.000 = \\text{Rp}1.980.000 > 1.800.000$", role: "Benar" },
        { fact: "Pernyataan 2: Rasio Motor/KRL", model: "$90 / 30 = 3\\text{ kali}$", role: "Benar" },
        { fact: "Pernyataan 3: Persentase Reduksi", model: "$165 / 198 = 83{,}33\\% < 90\\%$", role: "Salah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        BBM Mobil $= \\frac{1.100}{10} \\times \\text{Rp}14.000 = 110 \\times 14.000 = \\text{Rp}1.540.000,00$.
        Biaya Tol $= 22 \\times \\text{Rp}20.000 = \\text{Rp}440.000,00$.
        Total biaya mobil $= \\text{Rp}1.540.000 + \\text{Rp}440.000 = \\text{Rp}1.980.000,00 > \\text{Rp}1.800.000,00$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Faktor emisi motor $= 90\\text{ g/km}$, sedangkan KRL $= 30\\text{ g/km}$. Rasionya adalah $\\frac{90}{30} = 3\\text{ kali lipat}$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Persentase penurunan emisi adalah $\\frac{198 - 33}{198} \\times 100\\% = \\frac{165}{198} \\approx 83{,}3\\%$, tidak mencapai di atas $90\\%$.
      `,
      tacticalShortcut: "P1: 1,54 jt + 0,44 jt = 1,98 jt > 1,8 jt (B). P2: 90 / 30 = 3 kali (B). P3: 165/198 = 83,3% (S)."
    },

    // Soal 5
    {
      id: 405,
      stimulusId: "stimulus-p4-2",
      number: 5,
      domain: "Geometri",
      subtopic: "Trigonometri Sudut Depresi / Elevasi",
      type: "single_choice",
      level: "Mudah",
      prompt: "Saat melintasi titik cek Way Point ALPHA pada jarak horizontal 10 km ($10.000\\text{ meter}$) dari ujung landasan pacu, berapakah ketinggian ideal pesawat dari atas permukaan tanah sesuai glide path $3^\\circ$?",
      options: [
        "$$420\\text{ meter}$$",
        "$$480\\text{ meter}$$",
        "$$524\\text{ meter}$$",
        "$$560\\text{ meter}$$",
        "$$600\\text{ meter}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Jarak horizontal $x = 10.000\\text{ m}$, $\\tan 3^\\circ = 0{,}0524$.",
        relations: "$h = x \\times \\tan 3^\\circ = 10.000 \\times 0{,}0524$.",
        strategy: "Kalikan jarak horizontal dengan nilai tangen sudut luncur."
      },
      extractionTable: [
        { fact: "Jarak Horizontal", model: "$x = 10.000\\text{ m}$", role: "Sisi samping segitiga" },
        { fact: "Tangen Sudut Luncur", model: "$\\tan 3^\\circ = 0{,}0524$", role: "Perbandingan sisi depan/samping" }
      ],
      explanation: `
        Berdasarkan definisi perbandingan tangen pada segitiga siku-siku:
        $$\\tan 3^\\circ = \\frac{h}{x} \\implies h = x \\cdot \\tan 3^\\circ$$
        $$h = 10.000\\text{ m} \\times 0{,}0524 = 524\\text{ meter}$$
      `,
      tacticalShortcut: "10.000 × 0,0524 = 524 meter."
    },
    // Soal 6
    {
      id: 406,
      stimulusId: "stimulus-p4-2",
      number: 6,
      domain: "Geometri",
      subtopic: "Proporsi Segitiga Sebangun Pendaratan",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah ketinggian ideal pesawat saat berada di Way Point BRAVO pada jarak horizontal 5 km dari ujung runway?",
      options: [
        "$$212\\text{ meter}$$",
        "$$240\\text{ meter}$$",
        "$$262\\text{ meter}$$",
        "$$280\\text{ meter}$$",
        "$$312\\text{ meter}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Jarak BRAVO $= 5.000\\text{ m}$, yaitu separuh dari jarak ALPHA ($10.000\\text{ m}$).",
        relations: "Karena sebangun linear, $h_{\\text{BRAVO}} = \\frac{524}{2} = 262\\text{ meter}$.",
        strategy: "Bagi ketinggian di titik ALPHA dengan dua."
      },
      extractionTable: [
        { fact: "Jarak BRAVO", model: "$x = 5.000\\text{ m} = \\frac{1}{2} x_{\\text{ALPHA}}$", role: "Separuh jarak" },
        { fact: "Ketinggian BRAVO", model: "$h = 5.000 \\times 0{,}0524 = 262\\text{ m}$", role: "Hasil separuh ketinggian" }
      ],
      explanation: `
        $$h = 5.000\\text{ m} \\times 0{,}0524 = 262\\text{ meter}$$
        Atau karena lintasan glide path merupakan garis lurus (kesebangunan), jika jarak berkurang menjadi separuhnya, maka ketinggian juga menjadi tepat separuhnya ($524 / 2 = 262\\text{ m}$).
      `,
      tacticalShortcut: "524 / 2 = 262 meter."
    },
    // Soal 7
    {
      id: 407,
      stimulusId: "stimulus-p4-2",
      number: 7,
      domain: "Geometri",
      subtopic: "Laju Penurunan Vertikal (Descent Rate)",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Dengan kecepatan mendekat sepanjang lintasan sebesar $v = 70\\text{ m/s}$, laju penurunan ketinggian vertikal pesawat per detik adalah $v_y = v \\times \\sin 3^\\circ$. Mengingat untuk sudut kecil berlaku $\\sin 3^\\circ \\approx \\tan 3^\\circ \\approx 0{,}0524$, berapakah penurunan ketinggian pesawat selama 100 detik terbang (pembulatan ke bilangan bulat terdekat dalam meter)?",
      correctNumeric: 367,
      numericTolerance: 1,
      numericUnit: "meter",
      deconstructorClue: {
        variables: "$v = 70\\text{ m/s}$, $\\sin 3^\\circ \\approx 0{,}0524$, $t = 100\\text{ detik}$.",
        relations: "$\\Delta h = v_y \\times t = (70 \\times 0{,}0524) \\times 100 = 3{,}668 \\times 100 = 366{,}8 \\approx 367\\text{ meter}$.",
        strategy: "Kalikan kecepatan vertikal dengan durasi 100 detik."
      },
      extractionTable: [
        { fact: "Laju Vertikal", model: "$v_y = 70 \\times 0{,}0524 = 3{,}668\\text{ m/s}$", role: "Kecepatan turun per detik" },
        { fact: "Waktu Terbang", model: "$t = 100\\text{ detik}$", role: "Durasi gerak" }
      ],
      explanation: `
        Laju penurunan vertikal per detik:
        $$v_y = 70\\text{ m/s} \\times 0{,}0524 = 3{,}668\\text{ m/s}$$
        Penurunan ketinggian dalam 100 detik:
        $$\\Delta h = 3{,}668\\text{ m/s} \\times 100\\text{ s} = 366{,}8\\text{ meter} \\approx 367\\text{ meter}$$
      `,
      tacticalShortcut: "70 × 0,0524 × 100 = 366,8 -> dibulatkan 367 m."
    },
    // Soal 8
    {
      id: 408,
      stimulusId: "stimulus-p4-2",
      number: 8,
      domain: "Geometri",
      subtopic: "Karakteristik Jalur Pendekatan Pendaratan",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus navigasi pendaratan pesawat udara di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Jika radar mendeteksi pesawat berada pada jarak horizontal 10 km dengan ketinggian 700 meter, maka pesawat berada di atas jalur ideal glide path (terlalu tinggi).",
          correct: true
        },
        {
          text: "Panjang lintasan miring hipotenusa yang ditempuh pesawat dari Way Point ALPHA ke titik touchdown di runway adalah tepat sama dengan 10.000 meter.",
          correct: false
        },
        {
          text: "Waktu yang dibutuhkan pesawat untuk menempuh jarak horizontal 10 km dengan kecepatan 252 km/jam adalah kurang dari 2,5 menit.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Ketinggian ideal di 10 km adalah 524 m. Karena $700\\text{ m} > 524\\text{ m}$, pesawat terlalu tinggi (Benar). (2) Hipotenusa segitiga siku-siku selalu lebih panjang dari sisi horizontalnya: $\\frac{10.000}{\\cos 3^\\circ} > 10.000$ (Salah). (3) $t = \\frac{10}{252}\\text{ jam} = \\frac{10}{252} \\times 60 = 2{,}38\\text{ menit} < 2{,}5\\text{ menit}$ (Benar).",
        relations: "Sifat geometri segitiga siku-siku dan kinematika gerak lurus beraturan.",
        strategy: "Uji logika dan perbandingan matematis tiap pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Posisi 700 m", model: "$700\\text{ m} > 524\\text{ m}$", role: "Benar, terlalu tinggi" },
        { fact: "Pernyataan 2: Hipotenusa", model: "$c = \\sqrt{10.000^2 + 524^2} > 10.000$", role: "Salah, hipotenusa selalu terpanjang" },
        { fact: "Pernyataan 3: Durasi Waktu", model: "$t = 10 / 252 \\times 60 = 2{,}38\\text{ m} < 2{,}5\\text{ m}$", role: "Benar" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Ketinggian ideal di titik 10 km adalah $524\\text{ meter}$. Ketinggian aktual $700\\text{ meter}$ berarti pesawat berada di atas jalur luncur normal sehingga pilot harus meningkatkan laju penurunan.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Panjang lintasan miring adalah sisi miring (hipotenusa) dari segitiga siku-siku:
        $$d = \\sqrt{10.000^2 + 524^2} \\approx 10.013{,}7\\text{ meter} > 10.000\\text{ meter}$$
        Sisi miring pasti selalu lebih panjang dari sisi horizontal.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        $$t = \\frac{10\\text{ km}}{252\\text{ km/jam}} \\times 60\\text{ menit/jam} = \\frac{600}{252} \\approx 2{,}38\\text{ menit}$$
        Karena $2{,}38 < 2{,}5$, durasi terbang kurang dari 2,5 menit.
      `,
      tacticalShortcut: "P1: 700 > 524 (B). P2: Hipotenusa selalu > sisi mendatar (S). P3: 600 / 252 = 2,38 menit < 2,5 menit (B)."
    },

    // Soal 9
    {
      id: 409,
      stimulusId: "stimulus-p4-3",
      number: 9,
      domain: "Aljabar",
      subtopic: "Fungsi Eksponensial Peluruhan",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah konsentrasi antibiotik dalam darah pasien setelah 8 jam pasca-pemberian infus ($t = 8\\text{ jam}$)?",
      options: [
        "$$10\\text{ mg/L}$$",
        "$$15\\text{ mg/L}$$",
        "$$20\\text{ mg/L}$$",
        "$$30\\text{ mg/L}$$",
        "$$40\\text{ mg/L}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$C_0 = 80\\text{ mg/L}$, $t = 8\\text{ jam}$, $T_{1/2} = 4\\text{ jam}$.",
        relations: "$C(8) = 80 \\times (0{,}5)^{8/4} = 80 \\times (0{,}5)^2$.",
        strategy: "Hitung faktor pengali $(0{,}5)^2 = 0{,}25$, lalu kalikan 80."
      },
      extractionTable: [
        { fact: "Jumlah Siklus Paruh", model: "$n = \\frac{8}{4} = 2\\text{ siklus}$", role: "Pangkat eksponensial" },
        { fact: "Konsentrasi Akhir", model: "$80 \\times \\frac{1}{4} = 20\\text{ mg/L}$", role: "Kadar obat pada t=8" }
      ],
      explanation: `
        $$C(8) = 80 \\times \\left(\\frac{1}{2}\\right)^{\\frac{8}{4}} = 80 \\times \\left(\\frac{1}{2}\\right)^2 = 80 \\times \\frac{1}{4} = 20\\text{ mg/L}$$
      `,
      tacticalShortcut: "Setelah 4 jam jadi 40 mg/L, setelah 8 jam jadi 20 mg/L."
    },
    // Soal 10
    {
      id: 410,
      stimulusId: "stimulus-p4-3",
      number: 10,
      domain: "Aljabar",
      subtopic: "Persamaan Eksponensial Batas Efektivitas",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapa jam setelah infus diberikan konsentrasi antibiotik dalam darah pasien tepat menyentuh batas Konsentrasi Efektif Minimum (MEC = 10 mg/L)?",
      options: [
        "$$8\\text{ jam}$$",
        "$$10\\text{ jam}$$",
        "$$12\\text{ jam}$$",
        "$$14\\text{ jam}$$",
        "$$16\\text{ jam}$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$C(t) = 10\\text{ mg/L}$, $C_0 = 80\\text{ mg/L}$.",
        relations: "$80 \\times (0{,}5)^{t/4} = 10 \\implies (0{,}5)^{t/4} = \\frac{1}{8} = (0{,}5)^3$.",
        strategy: "Samakan basis eksponen: $t/4 = 3 \\implies t = 12$."
      },
      extractionTable: [
        { fact: "Rasio Konsentrasi", model: "$\\frac{10}{80} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$", role: "Eksponen 3 waktu paruh" },
        { fact: "Durasi Waktu", model: "$t = 3 \\times 4 = 12\\text{ jam}$", role: "Waktu MEC tercapai" }
      ],
      explanation: `
        $$80 \\times \\left(\\frac{1}{2}\\right)^{\\frac{t}{4}} = 10$$
        $$\\left(\\frac{1}{2}\\right)^{\\frac{t}{4}} = \\frac{10}{80} = \\frac{1}{8}$$
        Karena $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$, maka:
        $$\\frac{t}{4} = 3 \\implies t = 12\\text{ jam}$$
      `,
      tacticalShortcut: "80 -> 40 (4 jam) -> 20 (8 jam) -> 10 (12 jam)."
    },
    // Soal 11
    {
      id: 411,
      stimulusId: "stimulus-p4-3",
      number: 11,
      domain: "Aljabar",
      subtopic: "Dosis Tambahan Redosing Interval",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Dokter menjadwalkan pemberian dosis infus berikutnya saat konsentrasi mencapai MEC ($10\\text{ mg/L}$). Jika pada saat itu diberikan suntikan booster seketika yang menambah konsentrasi sebesar $+40\\text{ mg/L}$, berapakah konsentrasi obat baru dalam darah pasien tepat setelah penyuntikan tersebut (tuliskan angka konsentrasinya dalam mg/L)?",
      correctNumeric: 50,
      numericTolerance: 0,
      numericUnit: "mg/L",
      deconstructorClue: {
        variables: "Konsentrasi sisa pada $t = 12$ adalah $10\\text{ mg/L}$. Dosis tambahan menambah $+40\\text{ mg/L}$.",
        relations: "$C_{\\text{baru}} = 10 + 40 = 50\\text{ mg/L}$.",
        strategy: "Jumlahkan konsentrasi sisa dengan dosis baru."
      },
      extractionTable: [
        { fact: "Konsentrasi Sisa", model: "$C_{\\text{sisa}} = 10\\text{ mg/L}$", role: "Kadar residu obat" },
        { fact: "Konsentrasi Tambahan", model: "$\\Delta C = +40\\text{ mg/L}$", role: "Injeksi booster" }
      ],
      explanation: `
        $$C_{\\text{baru}} = C_{\\text{sisa}} + \\Delta C = 10\\text{ mg/L} + 40\\text{ mg/L} = 50\\text{ mg/L}$$
      `,
      tacticalShortcut: "10 + 40 = 50 mg/L."
    },
    // Soal 12
    {
      id: 412,
      stimulusId: "stimulus-p4-3",
      number: 12,
      domain: "Aljabar",
      subtopic: "Evaluasi Toksisitas & Rentang Terapi Obat",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus model eliminasi antibiotik di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Konsentrasi awal obat sebesar 80 mg/L berada di bawah batas toksisitas racun (MTC 120 mg/L), sehingga obat aman digunakan.",
          correct: true
        },
        {
          text: "Dalam 4 jam pertama, jumlah obat yang tereliminasi dari dalam darah adalah tepat sama dengan jumlah obat yang tereliminasi pada interval 4 jam kedua.",
          correct: false
        },
        {
          text: "Setelah 16 jam sejak infus pertama tanpa pemberian dosis tambahan, konsentrasi obat dalam darah masih bernilai di atas 5 mg/L.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) $C_0 = 80 < 120\\text{ (MTC)}$ (Benar). (2) 4 jam pertama hilang $80 - 40 = 40\\text{ mg/L}$. 4 jam kedua hilang $40 - 20 = 20\\text{ mg/L}$. Karena $40 \\ne 20$, pernyataan salah (Salah). (3) Pada $t = 16\\text{ jam}$: $C = 80 \\times (1/2)^4 = 80 / 16 = 5{,}0\\text{ mg/L}$, tepat sama dengan 5, tidak di atas 5 (Salah).",
        relations: "Sifat laju eliminasi non-linear pada fungsi peluruhan eksponensial.",
        strategy: "Periksa nilai numerik pada tiap pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Keamanan", model: "$80 < 120\\text{ mg/L}$", role: "Benar, berada di bawah batas racun" },
        { fact: "Pernyataan 2: Laju Eliminasi", model: "$\\Delta C_1 = 40 \\ne \\Delta C_2 = 20$", role: "Salah, peluruhan eksponensial tidak linear" },
        { fact: "Pernyataan 3: Nilai di t=16", model: "$C(16) = 5{,}0\\text{ mg/L} \\not> 5$", role: "Salah" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Konsentrasi puncak $80\\text{ mg/L}$ berada di bawah batas toksisitas minimum (MTC $120\\text{ mg/L}$), sehingga berada dalam jendela terapi yang aman.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Pada 4 jam pertama ($t = 0$ ke $4$), obat berkurang dari $80$ ke $40$ (berkurang $40\\text{ mg/L}$). Pada 4 jam kedua ($t = 4$ ke $8$), obat berkurang dari $40$ ke $20$ (berkurang $20\\text{ mg/L}$). Jumlah obat yang tereliminasi tidak sama karena proses peluruhan bersifat eksponensial, bukan linear.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pada $t = 16\\text{ jam}$:
        $$C(16) = 80 \\times \\left(\\frac{1}{2}\\right)^4 = \\frac{80}{16} = 5{,}0\\text{ mg/L}$$
        Nilainya tepat sama dengan $5\\text{ mg/L}$, bukan di atas $5\\text{ mg/L}$.
      `,
      tacticalShortcut: "P1: 80 < 120 (B). P2: 40 mg vs 20 mg (S). P3: C(16) = 5,0 persis (S)."
    },

    // Soal 13
    {
      id: 413,
      stimulusId: "stimulus-p4-4",
      number: 13,
      domain: "Aljabar",
      subtopic: "Ekspektasi Imbal Hasil Portofolio Tertimbang",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapakah rata-rata tertimbang ekspektasi imbal hasil (expected return) tahunan dari seluruh portofolio investasi tersebut?",
      options: [
        "$$6{,}5\\%$$",
        "$$7{,}2\\%$$",
        "$$7{,}9\\%$$",
        "$$8{,}4\\%$$",
        "$$9{,}0\\%$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$w_1 = 0{,}20, r_1 = 4\\%$; $w_2 = 0{,}50, r_2 = 7\\%$; $w_3 = 0{,}30, r_3 = 12\\%$.",
        relations: "$E(R) = (0{,}20 \\times 4\\%) + (0{,}50 \\times 7\\%) + (0{,}30 \\times 12\\%)$.",
        strategy: "Jumlahkan hasil kali bobot dengan imbal hasil."
      },
      extractionTable: [
        { fact: "Kontribusi Deposito", model: "$0{,}20 \\times 4\\% = 0{,}8\\%$", role: "Porsi risiko rendah" },
        { fact: "Kontribusi SBN", model: "$0{,}50 \\times 7\\% = 3{,}5\\%$", role: "Porsi pendapatan tetap" },
        { fact: "Kontribusi Saham", model: "$0{,}30 \\times 12\\% = 3{,}6\\%$", role: "Porsi pertumbuhan modal" }
      ],
      explanation: `
        $$E(R_p) = (0{,}20 \\times 4\\%) + (0{,}50 \\times 7\\%) + (0{,}30 \\times 12\\%)$$
        $$E(R_p) = 0{,}8\\% + 3{,}5\\% + 3{,}6\\% = 7{,}9\\%$$
      `,
      tacticalShortcut: "0,8% + 3,5% + 3,6% = 7,9%."
    },
    // Soal 14
    {
      id: 414,
      stimulusId: "stimulus-p4-4",
      number: 14,
      domain: "Aljabar",
      subtopic: "Total Pendapatan Investasi Nominal",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berapakah total proyeksi nominal keuntungan (imbal hasil) kotor yang diperoleh investor muda tersebut pada akhir tahun pertama?",
      options: [
        "$$\\text{Rp}6.800.000,00$$",
        "$$\\text{Rp}7.200.000,00$$",
        "$$\\text{Rp}7.900.000,00$$",
        "$$\\text{Rp}8.400.000,00$$",
        "$$\\text{Rp}9.100.000,00$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Total modal $= \\text{Rp}100.000.000,00$, Imbal hasil $= 7{,}9\\%$.",
        relations: "$\\text{Keuntungan} = 100.000.000 \\times 7{,}9\\%$.",
        strategy: "Kalikan total modal dengan persentase imbal hasil portofolio."
      },
      extractionTable: [
        { fact: "Modal Total", model: "$\\text{Rp}100.000.000,00$", role: "Dasar investasi" },
        { fact: "Tingkat Return", model: "$7{,}9\\% = 0{,}079$", role: "Faktor keuntungan" }
      ],
      explanation: `
        $$\\text{Total Keuntungan} = \\text{Rp}100.000.000,00 \\times 7{,}9\\% = \\text{Rp}7.900.000,00$$
      `,
      tacticalShortcut: "100 juta × 7,9% = Rp7.900.000,00."
    },
    // Soal 15
    {
      id: 415,
      stimulusId: "stimulus-p4-4",
      number: 15,
      domain: "Aljabar",
      subtopic: "Rekayasa Bobot Target Imbal Hasil",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Jika investor ingin menaikkan rata-rata imbal hasil portofolionya menjadi tepat 9,0% per tahun dengan tetap mempertahankan alokasi deposito sebesar 20% (return 4%), berapakah persentase alokasi reksa dana saham (return 12%) yang harus dipasang, dengan sisa modal dialokasikan ke SBN (return 7%)? Tuliskan angka persentasenya saja!",
      correctNumeric: 52,
      numericTolerance: 0,
      numericUnit: "%",
      deconstructorClue: {
        variables: "Deposito $= 20\\%$. Sisa modal untuk SBN dan Saham $= 80\\% = 0{,}80$. Misalkan bobot saham $= x$, maka bobot SBN $= 0{,}80 - x$. Target return $= 9{,}0\\% = 0{,}09$.",
        relations: "$(0{,}20 \\times 0{,}04) + (0{,}80 - x)(0{,}07) + x(0{,}12) = 0{,}09$.",
        strategy: "Selesaikan persamaan: $0{,}008 + 0{,}056 - 0{,}07x + 0{,}12x = 0{,}09 \\implies 0{,}05x = 0{,}026 \\implies x = 0{,}52 = 52\\%$."
      },
      extractionTable: [
        { fact: "Kontribusi Tetap Deposito", model: "$0{,}20 \\times 4\\% = 0{,}8\\%$", role: "Nilai konstan" },
        { fact: "Target Sisa", model: "$9{,}0\\% - 0{,}8\\% = 8{,}2\\%$", role: "Target dari SBN + Saham" }
      ],
      explanation: `
        Misalkan bobot reksa dana saham adalah $x$, maka bobot SBN adalah $(0{,}80 - x)$.
        $$0{,}008 + (0{,}80 - x)(0{,}07) + 0{,}12x = 0{,}09$$
        $$0{,}008 + 0{,}056 - 0{,}07x + 0{,}12x = 0{,}09$$
        $$0{,}064 + 0{,}05x = 0{,}09$$
        $$0{,}05x = 0{,}026 \\implies x = \\frac{0{,}026}{0{,}05} = 0{,}52 = 52\\%$$
        Jadi, alokasi saham harus ditingkatkan menjadi <strong>52%</strong>.
      `,
      tacticalShortcut: "0,05x = 0,09 - 0,064 = 0,026 -> x = 0,026 / 0,05 = 52%."
    },
    // Soal 16
    {
      id: 416,
      stimulusId: "stimulus-p4-4",
      number: 16,
      domain: "Aljabar",
      subtopic: "Analisis Diversifikasi & Risiko Portofolio",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus struktur portofolio investasi di atas, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Meskipun Reksa Dana Saham hanya menyumbang 30% dari total modal, nominal keuntungan yang dihasilkannya lebih besar daripada keuntungan dari Deposito Perbankan.",
          correct: true
        },
        {
          text: "Nominal keuntungan kotor tahunan yang dihasilkan dari instrumen SBN adalah tepat Rp3.500.000,00.",
          correct: true
        },
        {
          text: "Jika pasar saham anjlok sehingga return reksa dana saham menjadi 0%, portofolio secara keseluruhan akan mengalami kerugian modal (total return bernilai negatif).",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) Laba Saham: $30\\text{ jt} \\times 12\\% = 3{,}6\\text{ jt}$. Laba Deposito: $20\\text{ jt} \\times 4\\% = 0{,}8\\text{ jt}$. $3{,}6 > 0{,}8$ (Benar). (2) Laba SBN: $50\\text{ jt} \\times 7\\% = 3{,}5\\text{ jt}$ (Benar). (3) Jika saham $0\\%$, return masih positif dari Deposito ($0{,}8\\%$) dan SBN ($3{,}5\\%$) total $+4{,}3\\%$ (Salah).",
        relations: "Sifat jaring pengaman portofolio multi-aset.",
        strategy: "Cek hitungan laba riil tiap instrumen."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Saham vs Deposito", model: "$3{,}6\\text{ jt} > 0{,}8\\text{ jt}$", role: "Benar" },
        { fact: "Pernyataan 2: Nominal SBN", model: "$50\\text{ jt} \\times 7\\% = 3{,}5\\text{ jt}$", role: "Benar" },
        { fact: "Pernyataan 3: Jaring Pengaman", model: "$0{,}8\\% + 3{,}5\\% + 0 = +4{,}3\\% > 0$", role: "Salah, tetap profit" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Keuntungan saham $= \\text{Rp}30.000.000 \\times 12\\% = \\text{Rp}3.600.000,00$.
        Keuntungan deposito $= \\text{Rp}20.000.000 \\times 4\\% = \\text{Rp}800.000,00$.
        Karena $\\text{Rp}3.600.000 > \\text{Rp}800.000$, pernyataan benar.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Keuntungan SBN $= \\text{Rp}50.000.000 \\times 7\\% = \\text{Rp}3.500.000,00$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Jika return saham menjadi $0\\%$, portofolio masih memperoleh return dari Deposito ($0{,}8\\%$) dan SBN ($3{,}5\\%$) sebesar total $+4{,}3\\%$ (laba $\\text{Rp}4.300.000,00$), sehingga tidak merugi.
      `,
      tacticalShortcut: "P1: 3,6 jt > 0,8 jt (B). P2: 50 jt × 7% = 3,5 jt (B). P3: Masih ada 4,3 jt profit dari SBN+deposito (S)."
    },

    // Soal 17
    {
      id: 417,
      stimulusId: "stimulus-p4-5",
      number: 17,
      domain: "Data & Peluang",
      subtopic: "Prediksi Model Regresi Linear",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berdasarkan persamaan garis regresi $\\hat{Y} = 40 + 3{,}5X$, berapakah taksiran skor tes asesmen penalaran kuantitatif untuk seorang siswa yang belajar mandiri selama 12 jam per minggu?",
      options: [
        "$$76$$",
        "$$78$$",
        "$$82$$",
        "$$85$$",
        "$$88$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "$X = 12\\text{ jam}$, Model: $\\hat{Y} = 40 + 3{,}5X$.",
        relations: "$\\hat{Y} = 40 + 3{,}5(12) = 40 + 42 = 82$.",
        strategy: "Substitusikan nilai $X = 12$ ke persamaan garis regresi."
      },
      extractionTable: [
        { fact: "Durasi Belajar", model: "$X = 12\\text{ jam}$", role: "Variabel prediktor" },
        { fact: "Skor Prediksi", model: "$\\hat{Y} = 40 + 42 = 82$", role: "Estimasi nilai" }
      ],
      explanation: `
        $$\\hat{Y} = 40 + 3{,}5(12) = 40 + 42 = 82$$
      `,
      tacticalShortcut: "40 + 3,5 × 12 = 40 + 42 = 82."
    },
    // Soal 18
    {
      id: 418,
      stimulusId: "stimulus-p4-5",
      number: 18,
      domain: "Data & Peluang",
      subtopic: "Interpretasi Koefisien Determinasi",
      type: "single_choice",
      level: "Sedang",
      prompt: "Nilai koefisien determinasi model adalah $R^2 = 0{,}64$. Berapakah persentase variasi skor asesmen siswa yang dipengaruhi oleh faktor-faktor LAIN di luar durasi belajar mandiri?",
      options: [
        "$$26\\%$$",
        "$$32\\%$$",
        "$$36\\%$$",
        "$$48\\%$$",
        "$$64\\%$$"
      ],
      correct: 2,
      deconstructorClue: {
        variables: "Koefisien determinasi $R^2 = 0{,}64 = 64\\%$. Faktor lain $= 1 - R^2$.",
        relations: "$\\text{Faktor Luar} = 100\\% - 64\\% = 36\\%$.",
        strategy: "Kurangkan 100% dengan nilai R-squared."
      },
      extractionTable: [
        { fact: "Variasi Terjelaskan ($R^2$)", model: "$64\\%$", role: "Pengaruh variabel X" },
        { fact: "Variasi Tak Terjelaskan", model: "$100\\% - 64\\% = 36\\%$", role: "Pengaruh residual/faktor lain" }
      ],
      explanation: `
        $$\\text{Variasi Faktor Lain} = (1 - R^2) \\times 100\\% = (1 - 0{,}64) \\times 100\\% = 0{,}36 \\times 100\\% = 36\\%$$
      `,
      tacticalShortcut: "100% - 64% = 36%."
    },
    // Soal 19
    {
      id: 419,
      stimulusId: "stimulus-p4-5",
      number: 19,
      domain: "Data & Peluang",
      subtopic: "Analisis Nilai Residual / Galat Regresi",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Seorang siswa bernama Doni belajar mandiri selama 10 jam per minggu ($X = 10$) dan memperoleh skor tes asesmen aktual sebesar 80 ($Y = 80$). Berapakah nilai residual galat ($e = Y - \\hat{Y}$) dari skor Doni terhadap garis regresi (tuliskan angkanya saja)?",
      correctNumeric: 5,
      numericTolerance: 0,
      numericUnit: "poin",
      deconstructorClue: {
        variables: "$X = 10$, Nilai aktual $Y = 80$. Nilai prediksi $\\hat{Y} = 40 + 3{,}5(10) = 75$.",
        relations: "$e = Y - \\hat{Y} = 80 - 75 = 5$.",
        strategy: "Kurangkan skor aktual dengan skor taksiran regresi."
      },
      extractionTable: [
        { fact: "Nilai Prediksi $\\hat{Y}$", model: "$\\hat{Y} = 40 + 3{,}5(10) = 75$", role: "Ekspektasi garis tren" },
        { fact: "Nilai Aktual $Y$", model: "$Y = 80$", role: "Pencapaian nyata siswa" }
      ],
      explanation: `
        $$\\hat{Y} = 40 + 3{,}5(10) = 40 + 35 = 75$$
        $$\\text{Residual } e = Y - \\hat{Y} = 80 - 75 = +5$$
      `,
      tacticalShortcut: "80 - (40 + 35) = 80 - 75 = 5."
    },
    // Soal 20
    {
      id: 420,
      stimulusId: "stimulus-p4-5",
      number: 20,
      domain: "Data & Peluang",
      subtopic: "Evaluasi Properti Garis Regresi Linear",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus model regresi linear durasi belajar terhadap skor tes, tentukan nilai kebenaran dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Untuk menaikkan taksiran skor asesmen sebesar 7 poin, seorang siswa diproyeksikan perlu menambah waktu belajar mandiri sebanyak 2 jam per minggu.",
          correct: true
        },
        {
          text: "Nilai koefisien korelasi Pearson (r) antara waktu belajar dan skor asesmen bernilai positif sebesar r = +0,80.",
          correct: true
        },
        {
          text: "Berdasarkan model tersebut, siswa yang belajar mandiri selama 20 jam per minggu diproyeksikan memperoleh skor 115 poin pada tes asesmen yang berskala 0-100.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "(1) $\\Delta Y = 3{,}5 \\times \\Delta X = 3{,}5 \\times 2 = 7\\text{ poin}$ (Benar). (2) $r = \\sqrt{R^2} = \\sqrt{0{,}64} = 0{,}80$ bertanda positif karena slope bertanda positif (Benar). (3) Skala tes dibatasi maksimum 100, sehingga model linier mengalami ekstrapolasi tidak realistis pada nilai > 100 (Salah).",
        relations: "Sifat slope regresi, koefisien korelasi, dan batas domain model.",
        strategy: "Uji konsep statistik regresi pada tiap butir pernyataan."
      },
      extractionTable: [
        { fact: "Pernyataan 1: Delta Skor", model: "$3{,}5 \\times 2 = 7\\text{ poin}$", role: "Benar" },
        { fact: "Pernyataan 2: Korelasi r", model: "$r = \\sqrt{0{,}64} = +0{,}80$", role: "Benar" },
        { fact: "Pernyataan 3: Ekstrapolasi > 100", model: "$40 + 3{,}5(20) = 110 \\ne 115$", role: "Salah, hitungan salah dan melebihi skala maksimum 100" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Kemiringan garis regresi adalah $b = 3{,}5$. Kenaikan waktu $\\Delta X = 2\\text{ jam}$ memicu kenaikan skor $\\Delta Y = 3{,}5 \\times 2 = 7\\text{ poin}$.
        <br><br>
        <strong>Evaluasi Pernyataan 2: BENAR</strong><br>
        Koefisien korelasi $r = \\sqrt{R^2} = \\sqrt{0{,}64} = 0{,}80$. Karena arah kemiringan positif ($b > 0$), nilai korelasi bernilai $+0{,}80$.
        <br><br>
        <strong>Evaluasi Pernyataan 3: SALAH</strong><br>
        Pertama, perhitungannya: $40 + 3{,}5(20) = 40 + 70 = 110$, bukan $115$. Kedua, skala tes maksimum adalah $100$, sehingga tidak mungkin diperoleh skor $115$.
      `,
      tacticalShortcut: "P1: 3,5 × 2 = 7 (B). P2: akar(0,64) = +0,8 (B). P3: 40 + 70 = 110 bukan 115 dan batas tes 100 (S)."
    }
  ];

  // ============================================================================
  // 3. REGISTRASI KE GLOBAL WINDOW
  // ============================================================================
  window.PM_PAKET4_STIMULI = PM_PAKET4_STIMULI;
  window.PM_PAKET4_QUESTIONS = PM_PAKET4_QUESTIONS;

  window.PM_PACKAGES = window.PM_PACKAGES || {};
  window.PM_PACKAGES['paket-4'] = {
    id: 'paket-4',
    code: 'Paket D',
    title: 'Paket D — Mobilitas Urban, Aviasi & Farmakokinetika',
    description: 'Jejak Karbon Komuter KRL vs Mobil, Radar Glide Slope Pesawat, Peluruhan Konsentrasi Antibiotik, Portofolio Investasi, dan Regresi Asesmen Numerasi.',
    durationMinutes: 42.5,
    provenance: { kind: 'original_practice', creator: 'The Arich Study', isOfficialItem: false, alignedTo: 'SNPMB UTBK 2026 framework' },
    stimuli: PM_PAKET4_STIMULI,
    questions: PM_PAKET4_QUESTIONS
  };

})(typeof window !== 'undefined' ? window : globalThis);
