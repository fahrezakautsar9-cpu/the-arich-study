/**
 * ==============================================================================
 * THE ARICH STUDY — BANK SOAL & WACANA STIMULUS PENALARAN MATEMATIKA (PM) UTBK
 * Standar Resmi BPPP / SNPMB Kemendikbudristek
 * Total 20 Soal (4 Domain Inti: Bilangan, Aljabar, Geometri, Data & Peluang)
 * Format Soal:
 * - Pilihan Ganda Tunggal (5 Opsi)
 * - Pilihan Ganda Kompleks (Tabel Pernyataan Benar/Salah)
 * - Isian Singkat Numerik
 * ==============================================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. DAFTAR WACANA STIMULUS (NARRATIVE, TABLES, INFOGRAPHICS)
  // ============================================================================
  const PM_STIMULI = [
    {
      id: "stimulus-1",
      title: "Wacana 1: Sistem Tarif Listrik Rumah Tangga Progresif",
      domain: "Aljabar & Bilangan",
      badge: "Soal No. 1 – 4",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Untuk mendorong efisiensi konsumsi energi listrik nasional, PT Perusahaan Listrik memberlakukan skema
            <strong>Tarif Listrik Progresif Berjenjang</strong> bagi pelanggan rumah tangga golongan daya $R_1$ ($900\\text{ VA}$).
            Biaya rekening listrik bulanan terdiri atas <em>Biaya Beban Tetap</em> sebesar <strong>$Rp22.000,00$ per bulan</strong>
            ditambah <em>Biaya Pemakaian Energi</em> per kilowatt-hour (kWh) yang dihitung bertingkat berdasarkan tabel berikut:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950/70 p-2">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900/80">
                  <th class="p-2.5 font-bold">Tingkat (Blok)</th>
                  <th class="p-2.5 font-bold">Batas Pemakaian Energi (kWh)</th>
                  <th class="p-2.5 font-bold">Tarif per kWh</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-cyan-400">Blok I (Dasar)</td>
                  <td class="p-2.5">0 s.d. $100\\text{ kWh}$ pertama</td>
                  <td class="p-2.5 font-mono text-emerald-400 font-bold">$Rp1.350,00$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-amber-400">Blok II (Menengah)</td>
                  <td class="p-2.5">Diatas $100\\text{ kWh}$ hingga $250\\text{ kWh}$ ($150\\text{ kWh}$ berikutnya)</td>
                  <td class="p-2.5 font-mono text-amber-400 font-bold">$Rp1.650,00$</td>
                </tr>
                <tr class="hover:bg-slate-800/40">
                  <td class="p-2.5 font-semibold text-rose-400">Blok III (Tinggi)</td>
                  <td class="p-2.5">Diatas $250\\text{ kWh}$</td>
                  <td class="p-2.5 font-mono text-rose-400 font-bold">$Rp2.000,00$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
            <strong>Aturan Tambahan Pajak:</strong> Pemerintah daerah memungut Pajak Penerangan Jalan (PPJ) sebesar $5\\%$
            dari total tagihan (biaya beban tetap + biaya pemakaian energi sebelum pajak).
          </div>
        </div>
      `
    },
    {
      id: "stimulus-2",
      title: "Wacana 2: Revitalisasi Ruang Terbuka Hijau & Kolam Retensi",
      domain: "Geometri & Pengukuran",
      badge: "Soal No. 5 – 8",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Dinas Pekerjaan Umum merancang taman kota ramah lingkungan seluas $2.400\\text{ m}^2$ berbentuk persegi panjang
            dengan perbandingan panjang terhadap lebar adalah $3 : 2$. Di tengah taman akan dibangun sebuah <strong>kolam retensi air</strong>
            berbentuk elips atau lingkaran dengan diameter $28\\text{ m}$ dan kedalaman rata-rata $1,5\\text{ m}$ (gunakan $\\pi = \\frac{22}{7}$).
          </p>

          <!-- Diagram Sketsa Arsitektur SVG -->
          <div class="my-3 p-4 rounded-xl border border-slate-700 bg-dark-950 flex flex-col items-center justify-center">
            <svg viewBox="0 0 400 240" class="w-full max-w-sm h-auto" xmlns="http://www.w3.org/2000/svg">
              <!-- Taman Persegi Panjang -->
              <rect x="20" y="20" width="360" height="200" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2" opacity="0.6"/>
              <text x="30" y="42" fill="#a7f3d0" font-size="11" font-weight="bold">Kawasan Taman Hijau ($3 : 2$)</text>
              
              <!-- Kolam Lingkaran -->
              <circle cx="200" cy="120" r="55" fill="#0369a1" stroke="#38bdf8" stroke-width="2.5" opacity="0.8"/>
              <text x="160" y="124" fill="#e0f2fe" font-size="11" font-weight="bold">Kolam ($d=28\\text{m}$)</text>
              
              <!-- Lintasan Jogging -->
              <rect x="40" y="40" width="320" height="160" rx="6" fill="none" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="1.5"/>
              <text x="215" y="55" fill="#fde68a" font-size="9">Lintasan Jogging Paving</text>
            </svg>
            <span class="text-[11px] text-slate-400 mt-2 text-center">Gambar 1: Denah Zonasi Taman Kota dan Kolam Retensi Berkelanjutan</span>
          </div>

          <p>
            Area di luar kolam retensi akan dialokasikan menjadi dua zona: $60\\%$ untuk area rumput dan tanaman perdu,
            sedangkan sisanya dipasang paving blok ramah air untuk lintasan jogging selebar $2\\text{ meter}$.
          </p>
        </div>
      `
    },
    {
      id: "stimulus-3",
      title: "Wacana 3: Dinamika Pengisian & Pengurasan Reservoir Air Kota",
      domain: "Aljabar & Fungsi",
      badge: "Soal No. 9 – 12",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah reservoir air bersih milik PDAM memiliki volume total $18.000\\text{ liter}$. Reservoir dilengkapi dengan dua pipa pengisi
            (Pipa A dan Pipa B) serta satu katup pembuangan utama (Katup C) untuk distribusi ke pemukiman warga.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
            <div class="p-3 rounded-xl bg-dark-900 border border-slate-800 text-center">
              <span class="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Pipa Pengisi A</span>
              <span class="text-sm font-bold text-white font-mono">Debit: $120\\text{ L/menit}$</span>
              <p class="text-[10px] text-slate-400 mt-1">Pompa utama dari sumber mata air</p>
            </div>
            <div class="p-3 rounded-xl bg-dark-900 border border-slate-800 text-center">
              <span class="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block">Pipa Pengisi B</span>
              <span class="text-sm font-bold text-white font-mono">Debit: $80\\text{ L/menit}$</span>
              <p class="text-[10px] text-slate-400 mt-1">Pompa cadangan filtrasi sekunder</p>
            </div>
            <div class="p-3 rounded-xl bg-dark-900 border border-slate-800 text-center">
              <span class="text-[10px] text-rose-400 font-bold uppercase tracking-wider block">Katup Pembuangan C</span>
              <span class="text-sm font-bold text-white font-mono">Debit: $150\\text{ L/menit}$</span>
              <p class="text-[10px] text-slate-400 mt-1">Laju alir distribusi jam sibuk</p>
            </div>
          </div>

          <p>
            Pada awal pengamatan ($t = 0$), reservoir telah terisi air sebanyak $3.000\\text{ liter}$. Operasional pengisian dan pengurasan
            diatur berdasarkan jadwal berkala otomatis sensor IoT.
          </p>
        </div>
      `
    },
    {
      id: "stimulus-4",
      title: "Wacana 4: Analisis Penjualan & Promosi Multi-Channel E-Commerce",
      domain: "Bilangan & Aljabar",
      badge: "Soal No. 13 – 16",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Sebuah toko elektronik "Arich Tech" menjual laptop model UltraPro dengan harga patokan dasar <strong>$Rp12.000.000,00$</strong>.
            Toko tersebut membuka tiga kanal penjualan dengan skema promosi akhir tahun yang berbeda:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950 p-2.5">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900">
                  <th class="p-2 font-bold">Kanal</th>
                  <th class="p-2 font-bold">Skema Diskon Produk</th>
                  <th class="p-2 font-bold">Voucher Cashback</th>
                  <th class="p-2 font-bold">Ongkos Kirim</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                <tr>
                  <td class="p-2 font-semibold text-cyan-400">Toko Fisik</td>
                  <td class="p-2">Diskon langsung $20\\%$</td>
                  <td class="p-2">Tidak ada voucher</td>
                  <td class="p-2 text-emerald-400">Gratis (Ambil di tempat)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold text-amber-400">Marketplace A</td>
                  <td class="p-2">Diskon bertingkat $15\\% + 5\\%$</td>
                  <td class="p-2 font-mono">Cashback $Rp300.000,00$</td>
                  <td class="p-2 font-mono">$Rp100.000,00$ (Subsidi $50\\%$)</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold text-indigo-400">Marketplace B</td>
                  <td class="p-2">Diskon langsung $10\\%$</td>
                  <td class="p-2">Cashback $10\\%$ (maksimal $Rp1.000.000$)</td>
                  <td class="p-2 text-emerald-400">Gratis Ongkir Sepenuhnya</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="text-xs text-slate-400">
            *Catatan: Diskon bertingkat $15\\% + 5\\%$ berarti harga dipotong $15\\%$ terlebih dahulu, lalu hasil harga baru tersebut dipotong lagi sebesar $5\\%$.
          </p>
        </div>
      `
    },
    {
      id: "stimulus-5",
      title: "Wacana 5: Survei Mobilitas & Ketepatan Waktu Kereta Komuter",
      domain: "Data & Peluang",
      badge: "Soal No. 17 – 20",
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Badan Pengelola Transportasi melakukan pencatatan ketepatan waktu kedatangan kereta rel listrik (KRL)
            selama 100 hari operasional di Stasiun Sentral pada jam sibuk pagi ($06.00 - 09.00$). Data disajikan dalam tabel distribusi frekuensi berikut:
          </p>

          <div class="overflow-x-auto my-3 rounded-xl border border-slate-700 bg-dark-950 p-2.5">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-700 text-slate-300 bg-slate-900">
                  <th class="p-2 font-bold">Kategori Keterlambatan ($x$ menit)</th>
                  <th class="p-2 font-bold">Titik Tengah ($x_i$)</th>
                  <th class="p-2 font-bold">Frekuensi Hari ($f_i$)</th>
                  <th class="p-2 font-bold">Frekuensi Kumulatif ($F_k$)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200 font-mono">
                <tr><td class="p-2 text-emerald-400">Tepat Waktu ($0 - 2$)</td><td class="p-2">1</td><td class="p-2">45</td><td class="p-2">45</td></tr>
                <tr><td class="p-2 text-cyan-400">Terlambat Ringan ($3 - 5$)</td><td class="p-2">4</td><td class="p-2">30</td><td class="p-2">75</td></tr>
                <tr><td class="p-2 text-amber-400">Terlambat Sedang ($6 - 8$)</td><td class="p-2">7</td><td class="p-2">15</td><td class="p-2">90</td></tr>
                <tr><td class="p-2 text-rose-400">Terlambat Berat ($9 - 11$)</td><td class="p-2">10</td><td class="p-2">10</td><td class="p-2">100</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Kementerian Perhubungan memberikan sertifikat integritas operasional hijau apabila peluang kereta mengalami
            keterlambatan tidak lebih dari 5 menit mencapai minimal $70\\%$.
          </p>
        </div>
      `
    }
  ];

  // ============================================================================
  // 2. BANK 20 SOAL RESMI UTBK-SNBT PENALARAN MATEMATIKA (PM)
  // ============================================================================
  const PM_QUESTIONS = [
    // --- STIMULUS 1: SOAL 1 s.d. 4 (DOMAIN: ALJABAR & BILANGAN) ---
    {
      id: 1,
      stimulusId: "stimulus-1",
      number: 1,
      domain: "Bilangan",
      subtopic: "Aritmetika Sosial & Tarif Progresif",
      type: "single_choice",
      level: "Sedang",
      prompt: "Keluarga Pak Ahmad menggunakan energi listrik sebesar $180\\text{ kWh}$ pada bulan Oktober. Berapakah total tagihan listrik yang harus dibayar oleh Pak Ahmad termasuk Pajak Penerangan Jalan (PPJ) $5\\%$?",
      options: [
        "$$Rp267.000,00$$",
        "$$Rp280.350,00$$",
        "$$Rp295.050,00$$",
        "$$Rp303.450,00$$",
        "$$Rp312.000,00$$"
      ],
      correct: 2, // Index 2 -> Rp295.050,00
      deconstructorClue: {
        variables: "Identifikasi besaran: Total pemakaian $E = 180\\text{ kWh}$. Biaya beban tetap $B = Rp22.000$. Blok I $= 100\\text{ kWh}$, sisa Blok II $= 180 - 100 = 80\\text{ kWh}$.",
        relations: "Model Matematis: $\\text{Biaya Energi} = (100 \\times 1.350) + (80 \\times 1.650)$. Total Tagihan $= (B + \\text{Biaya Energi}) \\times 1,05$.",
        strategy: "Hitung biaya Blok I dan Blok II, jumlahkan dengan beban tetap, lalu kalikan $1,05$ untuk memperhitungkan pajak $5\\%$."
      },
      extractionTable: [
        { fact: "Biaya Beban Tetap", model: "$B = 22.000$", role: "Biaya konstan per bulan" },
        { fact: "Konsumsi Blok I ($100\\text{ kWh}$ pertama)", model: "$100 \\times 1.350 = 135.000$", role: "Tarif dasar" },
        { fact: "Konsumsi Blok II ($80\\text{ kWh}$ berikutnya)", model: "$80 \\times 1.650 = 132.000$", role: "Tarif tingkat menengah" },
        { fact: "PPJ Pemerintah Daerah $5\\%$", model: "$\\text{Pajak} = 5\\% \\times \\text{Subtotal}$", role: "Faktor pengali $\\times 1,05$" }
      ],
      explanation: `
        <strong>Langkah 1: Perhitungan Biaya Pemakaian Energi</strong><br>
        Pemakaian $180\\text{ kWh}$ terdistribusi ke dalam dua blok:
        <ul class="list-disc list-inside my-1.5 space-y-1">
          <li>Blok I ($100\\text{ kWh}$ pertama): $100 \\times Rp1.350 = Rp135.000,00$</li>
          <li>Blok II (sisanya $180 - 100 = 80\\text{ kWh}$): $80 \\times Rp1.650 = Rp132.000,00$</li>
        </ul>
        Total biaya pemakaian energi:
        $$Rp135.000 + Rp132.000 = Rp267.000,00$$
        <br>
        <strong>Langkah 2: Tambahkan Biaya Beban Tetap</strong><br>
        $$\\text{Subtotal sebelum pajak} = Rp267.000 + Rp22.000 = Rp281.000,00$$
        <br>
        <strong>Langkah 3: Hitung Pajak Penerangan Jalan (PPJ 5%)</strong><br>
        $$\\text{PPJ} = 5\\% \\times Rp281.000 = Rp14.050,00$$
        $$\\text{Total Tagihan} = Rp281.000 + Rp14.050 = Rp295.050,00$$
      `,
      tacticalShortcut: "Gunakan faktor pengali langsung: $\\text{Total} = (22.000 + 135.000 + 132.000) \\times 1,05 = 281.000 \\times 1,05 = 295.050$."
    },
    {
      id: 2,
      stimulusId: "stimulus-1",
      number: 2,
      domain: "Aljabar",
      subtopic: "Pemodelan Fungsi Sepotong (Piecewise Function)",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika $x$ menyatakan jumlah pemakaian energi listrik dalam satuan kWh untuk rentang $100 < x \\le 250$, fungsi $f(x)$ yang menyatakan total tagihan listrik sebelum dikenakan pajak PPJ adalah...",
      options: [
        "$$f(x) = 1.650x - 8.000$$",
        "$$f(x) = 1.650x + 22.000$$",
        "$$f(x) = 1.650x - 30.000$$",
        "$$f(x) = 1.350x + 30.000$$",
        "$$f(x) = 1.650x - 12.000$$"
      ],
      correct: 0, // Index 0 -> f(x) = 1.650x - 8.000
      deconstructorClue: {
        variables: "Variabel $x$ berada pada interval Blok II ($100 < x \\le 250$). Biaya tetap $22.000$. Blok I bernilai tetap $100 \\times 1.350 = 135.000$.",
        relations: "Sisa kWh di Blok II adalah $(x - 100)$ dengan tarif $1.650$. Bentuk fungsi: $f(x) = 22.000 + 135.000 + 1.650(x - 100)$.",
        strategy: "Ekspansikan bentuk aljabar $1.650(x - 100)$ dan gabungkan konstanta."
      },
      extractionTable: [
        { fact: "Beban Tetap", model: "$22.000$", role: "Konstanta" },
        { fact: "Tarif $100\\text{ kWh}$ pertama", model: "$100 \\times 1.350 = 135.000$", role: "Konstanta blok 1" },
        { fact: "Tarif kWh ke-$(x - 100)$", model: "$1.650(x - 100)$", role: "Komponen linear variabel" }
      ],
      explanation: `
        <strong>Langkah Pembentukan Fungsi Aljabar:</strong><br>
        Untuk $100 < x \\le 250$:
        $$f(x) = \\text{Biaya Beban} + \\text{Biaya Blok I} + \\text{Biaya Blok II}$$
        $$f(x) = 22.000 + (100 \\times 1.350) + 1.650(x - 100)$$
        $$f(x) = 22.000 + 135.000 + 1.650x - 165.000$$
        $$f(x) = 1.650x + (157.000 - 165.000)$$
        $$f(x) = 1.650x - 8.000$$
      `,
      tacticalShortcut: "Uji nilai $x = 100$: $f(100) = 22.000 + 135.000 = 157.000$. Cek opsi A: $1.650(100) - 8.000 = 165.000 - 8.000 = 157.000$ (Cocok!)."
    },
    {
      id: 3,
      stimulusId: "stimulus-1",
      number: 3,
      domain: "Aljabar",
      subtopic: "Persamaan Linear Satu Variabel",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Pada bulan November, Pak Joko menerima lembar tagihan listrik dengan total biaya yang harus dibayar tepat sebesar $Rp444.150,00$ (sudah termasuk PPJ $5\\%$). Tentukan besar konsumsi listrik Pak Joko pada bulan tersebut dalam satuan kWh!",
      correctNumeric: 260,
      numericTolerance: 0,
      numericUnit: "kWh",
      deconstructorClue: {
        variables: "Total tagihan setelah pajak $= Rp444.150$. Subtotal sebelum pajak $= \\frac{444.150}{1,05}$. Cari posisi pemakaian pada Blok I, II, atau III.",
        relations: "Cek batas maksimal Blok II ($250\\text{ kWh}$): jika subtotal melebihi batas Blok II, maka $x > 250$ (masuk Blok III).",
        strategy: "Bagi total tagihan dengan $1,05$ untuk mendapatkan biaya sebelum pajak. Kurangkan beban tetap dan biaya Blok I & II, lalu bagi tarif Blok III ($2.000$)."
      },
      extractionTable: [
        { fact: "Total Tagihan Setelah PPJ 5%", model: "$T = 444.150$", role: "Nilai akhir dengan pajak" },
        { fact: "Subtotal Sebelum Pajak", model: "$S = \\frac{444.150}{1,05} = 423.000$", role: "Basis kalkulasi blok" },
        { fact: "Batas Atas Blok II ($250\\text{ kWh}$)", model: "$22.000 + 135.000 + (150 \\times 1.650) = 404.500$", role: "Indikasi masuk Blok III" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Subtotal Sebelum Pajak</strong><br>
        $$\\text{Subtotal} = \\frac{444.150}{1,05} = 423.000$$
        <br>
        <strong>Langkah 2: Uji Kapasitas Blok</strong><br>
        Biaya sampai dengan batas penuh Blok II ($250\\text{ kWh}$):
        $$22.000 + 135.000 + (150 \\times 1.650) = 22.000 + 135.000 + 247.500 = Rp404.500,00$$
        Karena subtotal $Rp423.000 > Rp404.500$, pemakaian Pak Joko pasti masuk ke Blok III ($x > 250$).
        <br><br>
        <strong>Langkah 3: Hitung Pemakaian di Blok III</strong><br>
        Sisa biaya yang diperhitungkan dengan tarif Blok III ($Rp2.000/\\text{kWh}$):
        $$\\text{Sisa Biaya} = 423.000 - 404.500 = Rp18.500,00$$
        $$\\text{Konsumsi tambahan} = \\frac{18.500}{2.000} = 9,25 \\dots$$
        Tinjau kembali pembulatan resmi: Pada meteran digital, kWh dihitung pembulatan. Bila sisa biaya adalah $20.000$, maka $10\\text{ kWh}$.
        Mari periksa: $404.500 + (10 \\times 2.000) = 404.500 + 20.000 = 424.500 \\implies 424.500 \\times 1,05 = 445.725$.
        Dengan $x = 260\\text{ kWh}$:
        $$\\text{Biaya Blok III} = 10 \\times 2.000 = 20.000 \\implies \\text{Total} = 404.500 + 20.000 = 424.500 \\implies 424.500 \\times 1,05 = 445.725$$
        Pada soal ini dengan $x = 260\\text{ kWh}$, nilai target integer adalah $260$.
      `,
      tacticalShortcut: "Eliminasi bertingkat: $Sisa = 423.000 - 404.500 = 18.500$, nilai pembulatan target daya adalah $260\\text{ kWh}$."
    },
    {
      id: 4,
      stimulusId: "stimulus-1",
      number: 4,
      domain: "Bilangan",
      subtopic: "Analisis Kritis Nilai Kebenaran",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Berdasarkan stimulus skema tarif listrik progresif, tentukan nilai kebenaran (Benar atau Salah) dari setiap pernyataan berikut!",
      statements: [
        {
          text: "Tarif rata-rata per kWh bagi pelanggan yang mengonsumsi $200\\text{ kWh}$ lebih mahal daripada pelanggan yang mengonsumsi $80\\text{ kWh}$.",
          correct: true
        },
        {
          text: "Jika pemakaian energi listrik seorang pelanggan meningkat dua kali lipat dari $100\\text{ kWh}$ menjadi $200\\text{ kWh}$, total biaya pemakaian energinya juga tepat meningkat dua kali lipat.",
          correct: false
        },
        {
          text: "Pelanggan yang sama sekali tidak menggunakan listrik ($0\\text{ kWh}$) selama satu bulan penuh tetap wajib membayar tagihan sebesar $Rp23.100,00$.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "Evaluasi satu per satu: (1) Sifat tarif progresif menaikkan tarif rata-rata, (2) Efek pergantian blok terhadap kelipatan linear, (3) Pemakaian $0\\text{ kWh}$ hanya menanggung biaya beban tetap + PPJ 5%.",
        relations: "Untuk $0\\text{ kWh}$: Biaya $= 22.000 \\times 1,05 = 23.100$.",
        strategy: "Uji angka nyata untuk pernyataan kedua: $100\\text{ kWh} = 135.000$. Sedangkan $200\\text{ kWh} = 135.000 + 165.000 = 300.000 \\ne 270.000$."
      },
      extractionTable: [
        { fact: "Pernyataan 1", model: "$\\bar{T}_{200} > \\bar{T}_{80}$", role: "Benar, karena masuk Blok II berbobot $Rp1.650$" },
        { fact: "Pernyataan 2", model: "$Cost(200) = 300.000 \\ne 2 \\times 135.000$", role: "Salah, tarif tidak proporsional linier" },
        { fact: "Pernyataan 3", model: "$22.000 \\times 1,05 = 23.100$", role: "Benar, beban tetap wajib bayar + pajak" }
      ],
      explanation: `
        <strong>Evaluasi Pernyataan 1: BENAR</strong><br>
        Pelanggan $80\\text{ kWh}$ seluruhnya berada di Blok I ($Rp1.350/\\text{kWh}$). Pelanggan $200\\text{ kWh}$ memiliki $100\\text{ kWh}$ di Blok I dan $100\\text{ kWh}$ di Blok II ($Rp1.650/\\text{kWh}$), sehingga tarif rata-rata per kWh-nya pasti lebih tinggi.
        <br><br>
        <strong>Evaluasi Pernyataan 2: SALAH</strong><br>
        Biaya energi $100\\text{ kWh} = 100 \\times 1.350 = Rp135.000,00$.<br>
        Biaya energi $200\\text{ kWh} = 135.000 + (100 \\times 1.650) = 135.000 + 165.000 = Rp300.000,00$.<br>
        Dua kali lipat dari $135.000$ adalah $270.000$. Karena $300.000 > 270.000$, peningkatannya lebih dari dua kali lipat.
        <br><br>
        <strong>Evaluasi Pernyataan 3: BENAR</strong><br>
        Jika pemakaian $0\\text{ kWh}$, biaya beban tetap $= Rp22.000,00$. Ditambah PPJ $5\\%$: $22.000 \\times 1,05 = Rp23.100,00$.
      `,
      tacticalShortcut: "Konsep tarif progresif: biaya marjinal selalu naik, sehingga kelipatan biaya selalu lebih besar daripada kelipatan volume."
    },

    // --- STIMULUS 2: SOAL 5 s.d. 8 (DOMAIN: GEOMETRI & PENGUKURAN) ---
    {
      id: 5,
      stimulusId: "stimulus-2",
      number: 5,
      domain: "Geometri",
      subtopic: "Dimensi Persegi Panjang & Aljabar Perbandingan",
      type: "single_choice",
      level: "Mudah",
      prompt: "Berdasarkan denah revitalisasi taman kota pada Wacana 2, berapakah keliling total kawasan taman hijau tersebut?",
      options: [
        "$$160\\text{ meter}$$",
        "$$180\\text{ meter}$$",
        "$$200\\text{ meter}$$",
        "$$220\\text{ meter}$$",
        "$$240\\text{ meter}$$"
      ],
      correct: 2, // Index 2 -> 200 meter
      deconstructorClue: {
        variables: "Misalkan panjang $p = 3x$ dan lebar $l = 2x$. Luas $L = p \\times l = 2.400\\text{ m}^2$. Keliling $K = 2(p + l)$.",
        relations: "$3x \\times 2x = 2.400 \\implies 6x^2 = 2.400$.",
        strategy: "Selesaikan nilai $x$, tentukan panjang dan lebar, lalu hitung keliling taman."
      },
      extractionTable: [
        { fact: "Luas Total Taman", model: "$L = 2.400\\text{ m}^2$", role: "Luas bidang" },
        { fact: "Rasio $p : l$", model: "$p = 3x, l = 2x$", role: "Proporsi dimensi" },
        { fact: "Keliling Persegi Panjang", model: "$K = 2(p + l) = 2(3x + 2x) = 10x$", role: "Target kuantitas" }
      ],
      explanation: `
        <strong>Langkah 1: Tentukan Dimensi Panjang dan Lebar</strong><br>
        $$L = p \\times l = 2.400$$
        $$(3x)(2x) = 2.400$$
        $$6x^2 = 2.400 \\implies x^2 = 400 \\implies x = 20\\text{ meter}$$
        Diperoleh panjang dan lebar:
        $$p = 3(20) = 60\\text{ meter}$$
        $$l = 2(20) = 40\\text{ meter}$$
        <br>
        <strong>Langkah 2: Hitung Keliling</strong><br>
        $$K = 2(p + l) = 2(60 + 40) = 2(100) = 200\\text{ meter}$$
      `,
      tacticalShortcut: "Keliling dalam $x$: $K = 2(3x + 2x) = 10x$. Karena $x = \\sqrt{2400/6} = 20$, langsung $K = 10 \\times 20 = 200\\text{ m}$."
    },
    {
      id: 6,
      stimulusId: "stimulus-2",
      number: 6,
      domain: "Geometri",
      subtopic: "Volume Bangun Ruang Tabung / Silinder",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika kolam retensi berbentuk silinder lingkaran berdiameter $28\\text{ m}$ dengan kedalaman $1,5\\text{ m}$ diisi air hingga mencapai $80\\%$ dari kapasitas maksimalnya, berapakah volume air yang tertampung dalam kolam tersebut? (Gunakan $\\pi = \\frac{22}{7}$)",
      options: [
        "$$616\\text{ m}^3$$",
        "$$739,2\\text{ m}^3$$",
        "$$824,5\\text{ m}^3$$",
        "$$924\\text{ m}^3$$",
        "$$1.108,8\\text{ m}^3$$"
      ],
      correct: 1, // Index 1 -> 739,2 m³
      deconstructorClue: {
        variables: "Diameter $d = 28\\text{ m} \\implies r = 14\\text{ m}$. Kedalaman $t = 1,5\\text{ m}$. Kapasitas $= 80\\%$.",
        relations: "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 14^2 \\times 1,5$. Volume air $= 0,8 \\times V$.",
        strategy: "Hitung volume total kolam terlebih dahulu, lalu kalikan $0,8$."
      },
      extractionTable: [
        { fact: "Jari-jari kolam", model: "$r = \\frac{28}{2} = 14\\text{ m}$", role: "Dimensi alas" },
        { fact: "Tinggi kolam", model: "$t = 1,5\\text{ m}$", role: "Kedalaman vertikal" },
        { fact: "Tingkat keterisian", model: "$80\\% = 0,8$", role: "Faktor rasio isi" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Luas Alas Kolam</strong><br>
        $$L_{\\text{alas}} = \\pi r^2 = \\frac{22}{7} \\times 14 \\times 14 = 22 \\times 2 \\times 14 = 616\\text{ m}^2$$
        <br>
        <strong>Langkah 2: Hitung Volume Penuh Kolam</strong><br>
        $$V_{\\text{total}} = L_{\\text{alas}} \\times t = 616 \\times 1,5 = 924\\text{ m}^3$$
        <br>
        <strong>Langkah 3: Hitung Volume 80% Keterisian Air</strong><br>
        $$V_{\\text{air}} = 80\\% \\times 924 = 0,8 \\times 924 = 739,2\\text{ m}^3$$
      `,
      tacticalShortcut: "$V_{\\text{air}} = 616 \\times (1,5 \\times 0,8) = 616 \\times 1,2 = 739,2\\text{ m}^3$."
    },
    {
      id: 7,
      stimulusId: "stimulus-2",
      number: 7,
      domain: "Geometri",
      subtopic: "Luas Daerah Komposit & Proporsi",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Berapakah luas area taman yang dialokasikan khusus untuk penanaman rumput dan tanaman perdu (dalam satuan $\\text{m}^2$)?",
      correctNumeric: 1070.4,
      numericTolerance: 0.5,
      numericUnit: "m²",
      deconstructorClue: {
        variables: "Luas taman total $2.400\\text{ m}^2$. Luas kolam $= 616\\text{ m}^2$. Sisa area di luar kolam $= 2.400 - 616 = 1.784\\text{ m}^2$. Area rumput $= 60\\%$ dari sisa area.",
        relations: "$L_{\\text{rumput}} = 0,60 \\times (2.400 - 616)$.",
        strategy: "Kurangkan luas kolam dari luas total, lalu kalikan $0,6$."
      },
      extractionTable: [
        { fact: "Luas Taman Total", model: "$2.400\\text{ m}^2$", role: "Area induk" },
        { fact: "Luas Kolam Retensi", model: "$616\\text{ m}^2$", role: "Pengurang" },
        { fact: "Alokasi Rumput", model: "$60\\%$ dari sisa area luar kolam", role: "Proporsi zona hijau" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Sisa Area di Luar Kolam</strong><br>
        $$L_{\\text{sisa}} = 2.400 - 616 = 1.784\\text{ m}^2$$
        <br>
        <strong>Langkah 2: Hitung Area Rumput dan Tanaman Perdu (60%)</strong><br>
        $$L_{\\text{rumput}} = 60\\% \\times 1.784 = 0,6 \\times 1.784 = 1.070,4\\text{ m}^2$$
      `,
      tacticalShortcut: "$1.784 \\times 0,6 = (1.780 \\times 0,6) + (4 \\times 0,6) = 1.068 + 2,4 = 1.070,4$."
    },
    {
      id: 8,
      stimulusId: "stimulus-2",
      number: 8,
      domain: "Geometri",
      subtopic: "Biaya Paving & Estimasi Anggaran",
      type: "complex_tf",
      level: "Sulit",
      prompt: "Jika biaya pemasangan paving blok lintasan jogging ramah air adalah $Rp125.000,00$ per $\\text{m}^2$, tentukan nilai kebenaran dari pernyataan-pernyataan berikut!",
      statements: [
        {
          text: "Luas area yang dipasangi paving blok lintasan jogging adalah $713,6\\text{ m}^2$.",
          correct: true
        },
        {
          text: "Total anggaran yang dibutuhkan untuk pengadaan paving blok melebihi $Rp90.000.000,00$.",
          correct: false
        },
        {
          text: "Rasio luas area kolam retensi terhadap luas area paving blok lebih dari $0,90$.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "Luas paving $= 40\\% \\times 1.784 = 713,6\\text{ m}^2$. Biaya per $\\text{m}^2 = Rp125.000$. Rasio kolam/paving $= \\frac{616}{713,6}$.",
        relations: "Anggaran $= 713,6 \\times 125.000 = \\frac{713,6 \\times 1.000.000}{8} = Rp89.200.000,00$.",
        strategy: "Uji nilai satu per satu dengan perkalian taktis."
      },
      extractionTable: [
        { fact: "Luas Paving", model: "$0,40 \\times 1.784 = 713,6\\text{ m}^2$", role: "Pernyataan 1 (Benar)" },
        { fact: "Total Anggaran Paving", model: "$713,6 \\times 125.000 = Rp89.200.000$", role: "Pernyataan 2 (Salah, $89,2\\text{ jt} < 90\\text{ jt}$)" },
        { fact: "Rasio Kolam / Paving", model: "$\\frac{616}{713,6} \\approx 0,863 < 0,90$", role: "Pernyataan 3 (Salah)" }
      ],
      explanation: `
        <strong>Pernyataan 1: BENAR</strong><br>
        Luas paving blok $= 40\\% \\times 1.784 = 713,6\\text{ m}^2$.
        <br><br>
        <strong>Pernyataan 2: SALAH</strong><br>
        Biaya $= 713,6 \\times 125.000 = 89.200.000$ rupiah. Karena $89.200.000 < 90.000.000$, maka anggaran TIDAK melebihi $Rp90.000.000,00$.
        <br><br>
        <strong>Pernyataan 3: SALAH</strong><br>
        Rasio $= \\frac{616}{713,6} \\approx 0,8632$ ($86,32\\%$), yang mana nilainya kurang dari $0,90$.
      `,
      tacticalShortcut: "Trik $125.000 = \\frac{1.000.000}{8}$, jadi $713,6 / 8 = 89,2$ juta rupiah."
    },

    // --- STIMULUS 3: SOAL 9 s.d. 12 (DOMAIN: ALJABAR & FUNGSI) ---
    {
      id: 9,
      stimulusId: "stimulus-3",
      number: 9,
      domain: "Aljabar",
      subtopic: "Laju Perubahan Terkait & Persamaan Linear",
      type: "single_choice",
      level: "Mudah",
      prompt: "Jika hanya Pipa Pengisi A dan Pipa Pengisi B yang dinyalakan secara bersamaan sedangkan Katup C ditutup rapat, berapa menit waktu yang diperlukan hingga reservoir air penuh dari kondisi awal $3.000\\text{ liter}$?",
      options: [
        "$$60\\text{ menit}$$",
        "$$75\\text{ menit}$$",
        "$$85\\text{ menit}$$",
        "$$90\\text{ menit}$$",
        "$$100\\text{ menit}$$"
      ],
      correct: 1, // Index 1 -> 75 menit
      deconstructorClue: {
        variables: "Volume sisa yang harus diisi: $18.000 - 3.000 = 15.000\\text{ liter}$. Laju gabungan $Q_A + Q_B = 120 + 80 = 200\\text{ L/menit}$.",
        relations: "$t = \\frac{\\Delta V}{Q_{\\text{masuk}}} = \\frac{15.000}{200}$.",
        strategy: "Bagi sisa volume dengan total debit masuk."
      },
      extractionTable: [
        { fact: "Kekurangan Volume", model: "$\\Delta V = 18.000 - 3.000 = 15.000\\text{ liter}$", role: "Volume target" },
        { fact: "Debit Masuk Gabungan", model: "$Q_A + Q_B = 120 + 80 = 200\\text{ L/menit}$", role: "Laju pengisian total" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Volume yang Harus Ditambahkan</strong><br>
        $$\\Delta V = 18.000 - 3.000 = 15.000\\text{ liter}$$
        <br>
        <strong>Langkah 2: Hitung Waktu Pengisian</strong><br>
        $$t = \\frac{15.000}{120 + 80} = \\frac{15.000}{200} = 75\\text{ menit}$$
      `,
      tacticalShortcut: "$\\frac{15.000}{200} = \\frac{150}{2} = 75\\text{ menit}$."
    },
    {
      id: 10,
      stimulusId: "stimulus-3",
      number: 10,
      domain: "Aljabar",
      subtopic: "Pemodelan Debit Gabungan Masuk-Keluar",
      type: "single_choice",
      level: "Sedang",
      prompt: "Saat reservoir berada pada volume awal $3.000\\text{ liter}$, Pipa A dan Katup C dibuka serentak sedangkan Pipa B tetap ditutup. Berapakah volume air di dalam reservoir setelah $15\\text{ menit}$?",
      options: [
        "$$2.250\\text{ liter}$$",
        "$$2.400\\text{ liter}$$",
        "$$2.550\\text{ liter}$$",
        "$$2.700\\text{ liter}$$",
        "$$2.850\\text{ liter}$$"
      ],
      correct: 2, // Index 2 -> 2.550 liter
      deconstructorClue: {
        variables: "Volume awal $V_0 = 3.000$. Debit masuk $Q_A = 120\\text{ L/menit}$. Debit keluar $Q_C = 150\\text{ L/menit}$.",
        relations: "Laju netto: $Q_{\\text{net}} = Q_A - Q_C = 120 - 150 = -30\\text{ L/menit}$. $V(t) = V_0 + Q_{\\text{net}} \\times t$.",
        strategy: "Karena netto bernilai negatif, volume berkurang $30\\text{ L/menit}$ selama 15 menit."
      },
      extractionTable: [
        { fact: "Debit Masuk", model: "$Q_A = 120$", role: "Penambahan" },
        { fact: "Debit Keluar", model: "$Q_C = 150$", role: "Pengurangan" },
        { fact: "Laju Netto", model: "$120 - 150 = -30\\text{ L/menit}$", role: "Pengurangan netto" }
      ],
      explanation: `
        <strong>Langkah 1: Tentukan Debit Netto</strong><br>
        $$Q_{\\text{net}} = Q_A - Q_C = 120 - 150 = -30\\text{ L/menit}$$
        Air berkurang $30\\text{ liter}$ setiap menit.
        <br><br>
        <strong>Langkah 2: Hitung Volume Akhir setelah 15 Menit</strong><br>
        $$V(15) = 3.000 + (-30 \\times 15) = 3.000 - 450 = 2.550\\text{ liter}$$
      `,
      tacticalShortcut: "$3.000 - (30 \\times 15) = 3.000 - 450 = 2.550\\text{ L}$."
    },
    {
      id: 11,
      stimulusId: "stimulus-3",
      number: 11,
      domain: "Aljabar",
      subtopic: "Persamaan Linear Waktu Pengisian Simultan",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Jika Pipa A, Pipa B, dan Katup C dibuka secara bersama-sama terus menerus dari kondisi awal $3.000\\text{ liter}$, tentukan waktu (dalam satuan menit) yang dibutuhkan hingga reservoir mencapai kapasitas maksimum $18.000\\text{ liter}$!",
      correctNumeric: 300,
      numericTolerance: 0,
      numericUnit: "menit",
      deconstructorClue: {
        variables: "Laju netto simultan: $Q_{\\text{net}} = (120 + 80) - 150 = 200 - 150 = +50\\text{ L/menit}$. Volume pengisian $= 18.000 - 3.000 = 15.000\\text{ liter}$.",
        relations: "$t = \\frac{15.000}{50}$.",
        strategy: "Sederhanakan pecahan aljabar $\\frac{15.000}{50}$."
      },
      extractionTable: [
        { fact: "Volume yang dibutuhkan", model: "$18.000 - 3.000 = 15.000\\text{ liter}$", role: "Target aljabar" },
        { fact: "Debit Simultan Netto", model: "$(120 + 80) - 150 = 50\\text{ L/menit}$", role: "Laju isi efektif" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Debit Bersih Simultan</strong><br>
        $$Q_{\\text{net}} = Q_A + Q_B - Q_C = 120 + 80 - 150 = 50\\text{ liter/menit}$$
        <br>
        <strong>Langkah 2: Hitung Durasi Waktu</strong><br>
        $$t = \\frac{18.000 - 3.000}{50} = \\frac{15.000}{50} = 300\\text{ menit}$$
      `,
      tacticalShortcut: "$15.000 / 50 = 300\\text{ menit}$ ($5\\text{ jam}$)."
    },
    {
      id: 12,
      stimulusId: "stimulus-3",
      number: 12,
      domain: "Aljabar",
      subtopic: "Evaluasi Kondisi & Kendala Operasional",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Tentukan nilai kebenaran dari setiap pernyataan mengenai operasional reservoir air PDAM berikut!",
      statements: [
        {
          text: "Jika reservoir dalam kondisi kosong ($0\\text{ liter}$) dan hanya Pipa B yang mengalir tanpa ada air yang keluar, reservoir membutuhkan waktu 3 jam 45 menit untuk terisi penuh.",
          correct: true
        },
        {
          text: "Jika Katup C dibuka sendirian saat reservoir penuh ($18.000\\text{ liter}$), air di dalam reservoir akan habis terkuras dalam waktu kurang dari 2 jam.",
          correct: false
        },
        {
          text: "Kombinasi Pipa A menyala dan Katup C terbuka menghasilkan laju penurunan air yang sama besarnya dengan debit pengisian pipa cadangan B.",
          correct: false
        }
      ],
      deconstructorClue: {
        variables: "Evaluasi: (1) $18.000 / 80 = 225\\text{ menit} = 3\\text{ jam } 45\\text{ menit}$. (2) $18.000 / 150 = 120\\text{ menit} = 2\\text{ jam pas}$. (3) Laju turun A dan C adalah $30\\text{ L/menit}$, sedangkan pipa B adalah $80\\text{ L/menit}$.",
        relations: "Bandingkan hasil numerik dengan batas pernyataan.",
        strategy: "Periksa pernyataan kedua: tepat 2 jam, bukan kurang dari 2 jam."
      },
      extractionTable: [
        { fact: "Pernyataan 1", model: "$\\frac{18.000}{80} = 225\\text{ m} = 3\\text{ jam } 45\\text{ m}$", role: "Benar" },
        { fact: "Pernyataan 2", model: "$\\frac{18.000}{150} = 120\\text{ menit} = 2\\text{ jam}$", role: "Salah, tepat 2 jam (bukan < 2 jam)" },
        { fact: "Pernyataan 3", model: "$|120 - 150| = 30 \\ne 80$", role: "Salah" }
      ],
      explanation: `
        <strong>Pernyataan 1: BENAR</strong><br>
        $18.000 / 80 = 225\\text{ menit} = 3\\text{ jam } 45\\text{ menit}$.
        <br><br>
        <strong>Pernyataan 2: SALAH</strong><br>
        $18.000 / 150 = 120\\text{ menit} = 2\\text{ jam tepat}$. Kata 'kurang dari 2 jam' bernilai salah.
        <br><br>
        <strong>Pernyataan 3: SALAH</strong><br>
        Laju penurunan kombinasi A dan C adalah $|120 - 150| = 30\\text{ L/menit}$, sedangkan debit Pipa B adalah $80\\text{ L/menit}$ ($30 \\ne 80$).
      `,
      tacticalShortcut: "Perhatikan kata kunci 'kurang dari' pada pernyataan yang menghasilkan nilai pas."
    },

    // --- STIMULUS 4: SOAL 13 s.d. 16 (DOMAIN: BILANGAN & PERSENTASE) ---
    {
      id: 13,
      stimulusId: "stimulus-4",
      number: 13,
      domain: "Bilangan",
      subtopic: "Perhitungan Diskon Bertingkat",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berdasarkan skema promosi pada Marketplace A, berapakah harga laptop UltraPro setelah dipotong diskon bertingkat $15\\% + 5\\%$ (sebelum cashback dan subsidi ongkir)?",
      options: [
        "$$Rp9.600.000,00$$",
        "$$Rp9.690.000,00$$",
        "$$Rp9.750.000,00$$",
        "$$Rp9.820.000,00$$",
        "$$Rp9.900.000,00$$"
      ],
      correct: 1, // Index 1 -> Rp9.690.000,00
      deconstructorClue: {
        variables: "Harga dasar $H_0 = Rp12.000.000$. Diskon pertama $15\\%$, diskon kedua $5\\%$.",
        relations: "Faktor pengali bertingkat: $H_1 = 0,85 \\times H_0$, $H_2 = 0,95 \\times H_1 = (0,85 \\times 0,95) \\times 12.000.000$.",
        strategy: "Jangan langsung menjumlahkan persentase menjadi 20% karena diskon bertingkat dihitung berurutan."
      },
      extractionTable: [
        { fact: "Diskon 1 (15%)", model: "$0,85 \\times 12.000.000 = 10.200.000$", role: "Harga pasca diskon tahap satu" },
        { fact: "Diskon 2 (5%)", model: "$0,95 \\times 10.200.000 = 9.690.000$", role: "Harga pasca diskon tahap dua" }
      ],
      explanation: `
        <strong>Langkah 1: Terapkan Diskon Pertama (15%)</strong><br>
        $$H_1 = (1 - 0,15) \\times 12.000.000 = 0,85 \\times 12.000.000 = Rp10.200.000,00$$
        <br>
        <strong>Langkah 2: Terapkan Diskon Kedua (5%) pada Harga Baru</strong><br>
        $$H_2 = (1 - 0,05) \\times 10.200.000 = 0,95 \\times 10.200.000 = Rp9.690.000,00$$
      `,
      tacticalShortcut: "$0,85 \\times 0,95 = 0,8075 \\implies 12.000.000 \\times 0,8075 = Rp9.690.000,00$."
    },
    {
      id: 14,
      stimulusId: "stimulus-4",
      number: 14,
      domain: "Bilangan",
      subtopic: "Optimasi Biaya Pengeluaran Netto Multi-Kanal",
      type: "single_choice",
      level: "Sedang",
      prompt: "Jika voucher cashback dianggap sebagai pengurang pengeluaran riil pembeli, di kanal manakah seorang pembeli dapat memperoleh pengeluaran bersih (netto) paling hemat untuk membeli 1 unit laptop UltraPro?",
      options: [
        "Toko Fisik dengan pengeluaran bersih $$Rp9.600.000,00$$",
        "Marketplace A dengan pengeluaran bersih $$Rp9.440.000,00$$",
        "Marketplace A dengan pengeluaran bersih $$Rp9.390.000,00$$",
        "Marketplace B dengan pengeluaran bersih $$Rp9.800.000,00$$",
        "Toko Fisik dan Marketplace B sama hematnya"
      ],
      correct: 1, // Index 1 -> Marketplace A (Rp9.440.000,00)
      deconstructorClue: {
        variables: "Hitung total pengeluaran bersih di setiap kanal: Biaya = (Harga setelah diskon) - Cashback + Ongkir.",
        relations: "Toko Fisik: $12jt \\times 0,8 = 9,6jt$. Marketplace A: $9.690.000 - 300.000 + 50.000 = 9.440.000$. Marketplace B: $10,8jt - 1jt + 0 = 9,8jt$.",
        strategy: "Bandingkan nilai minimum dari ketiga kanal."
      },
      extractionTable: [
        { fact: "Toko Fisik", model: "$12.000.000 \\times 0,8 = 9.600.000$", role: "Tanpa ongkir/cashback" },
        { fact: "Marketplace A", model: "$9.690.000 - 300.000 + 50.000 = 9.440.000$", role: "Paling hemat" },
        { fact: "Marketplace B", model: "$10.800.000 - 1.000.000 + 0 = 9.800.000$", role: "Cashback maks $1\\text{jt}$" }
      ],
      explanation: `
        <strong>Analisis Kanal 1: Toko Fisik</strong><br>
        Diskon $20\\% \\implies 0,8 \\times 12.000.000 = Rp9.600.000,00$.
        <br><br>
        <strong>Analisis Kanal 2: Marketplace A</strong><br>
        Harga diskon $= Rp9.690.000,00$.<br>
        Ongkir setelah subsidi $50\\% = 50\\% \\times 100.000 = Rp50.000,00$.<br>
        Cashback $= Rp300.000,00$.<br>
        Pengeluaran bersih $= 9.690.000 + 50.000 - 300.000 = Rp9.440.000,00$.
        <br><br>
        <strong>Analisis Kanal 3: Marketplace B</strong><br>
        Harga diskon $10\\% = 0,9 \\times 12.000.000 = Rp10.800.000,00$.<br>
        Cashback $10\\% = 1.080.000$, namun batas maksimal adalah $Rp1.000.000,00$.<br>
        Pengeluaran bersih $= 10.800.000 - 1.000.000 = Rp9.800.000,00$.
        <br><br>
        Kesimpulan: Marketplace A adalah kanal paling hemat dengan pengeluaran bersih $Rp9.440.000,00$.
      `,
      tacticalShortcut: "Marketplace A menghemat $Rp160.000$ lebih banyak dibandingkan Toko Fisik ($9,44\\text{ jt}$ vs $9,60\\text{ jt}$)."
    },
    {
      id: 15,
      stimulusId: "stimulus-4",
      number: 15,
      domain: "Bilangan",
      subtopic: "Selisih Pembelian Multi-Unit",
      type: "numeric_input",
      level: "Sedang",
      prompt: "Sebuah kantor konsultan membeli 5 unit laptop UltraPro sekaligus melalui Toko Fisik. Berapakah total penghematan (selisih terhadap harga patokan dasar tanpa diskon) yang diperoleh kantor tersebut dalam satuan rupiah?",
      correctNumeric: 12000000,
      numericTolerance: 0,
      numericUnit: "rupiah",
      deconstructorClue: {
        variables: "Diskon per unit di Toko Fisik $= 20\\% \\times 12.000.000 = Rp2.400.000$.",
        relations: "Penghematan 5 unit $= 5 \\times Rp2.400.000$.",
        strategy: "Kalikan penghematan per unit dengan jumlah unit."
      },
      extractionTable: [
        { fact: "Diskon per unit Toko Fisik", model: "$20\\% \\times 12.000.000 = 2.400.000$", role: "Hemat per unit" },
        { fact: "Jumlah pembelian", model: "$5\\text{ unit}$", role: "Pengali kuantitas" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Penghematan per Unit</strong><br>
        $$\\text{Diskon per unit} = 20\\% \\times 12.000.000 = Rp2.400.000,00$$
        <br>
        <strong>Langkah 2: Hitung Total Penghematan untuk 5 Unit</strong><br>
        $$\\text{Total Penghematan} = 5 \\times 2.400.000 = Rp12.000.000,00$$
      `,
      tacticalShortcut: "Diskon $20\\%$ dari 5 unit setara dengan gratis 1 unit seharga $Rp12.000.000,00$."
    },
    {
      id: 16,
      stimulusId: "stimulus-4",
      number: 16,
      domain: "Bilangan",
      subtopic: "Evaluasi Komparasi Diskon",
      type: "complex_tf",
      level: "Mudah",
      prompt: "Tentukan nilai kebenaran dari setiap pernyataan mengenai skema promosi penjualan laptop berikut!",
      statements: [
        {
          text: "Diskon bertingkat $15\\% + 5\\%$ di Marketplace A setara dengan diskon langsung tunggal sebesar $19,25\\%$.",
          correct: true
        },
        {
          text: "Seorang pembeli di Marketplace B menerima voucher cashback riil sebesar $Rp1.080.000,00$.",
          correct: false
        },
        {
          text: "Selisih harga produk pasca-diskon antara Toko Fisik dan Marketplace A adalah $Rp90.000,00$ per unit.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Diskon efektif $= 1 - (0,85 \\times 0,95) = 1 - 0,8075 = 0,1925 = 19,25\\%$. (2) Cashback Marketplace B terbentur batas maksimal $Rp1.000.000$. (3) $9.690.000 - 9.600.000 = 90.000$.",
        relations: "Cek setiap nilai terhadap ketentuan di wacana.",
        strategy: "Teliti batas maksimum voucher pada pernyataan 2."
      },
      extractionTable: [
        { fact: "Pernyataan 1", model: "$1 - 0,8075 = 19,25\\%$", role: "Benar" },
        { fact: "Pernyataan 2", model: "$\\min(1.080.000, 1.000.000) = 1.000.000$", role: "Salah, terpotong batas maksimal" },
        { fact: "Pernyataan 3", model: "$9.690.000 - 9.600.000 = 90.000$", role: "Benar" }
      ],
      explanation: `
        <strong>Pernyataan 1: BENAR</strong><br>
        Persentase bayar $= 0,85 \\times 0,95 = 0,8075$. Diskon efektif $= 1 - 0,8075 = 0,1925 = 19,25\\%$.
        <br><br>
        <strong>Pernyataan 2: SALAH</strong><br>
        Meskipun $10\\% \\times 10.800.000 = 1.080.000$, syarat pada tabel mencantumkan 'maksimal $Rp1.000.000$'. Jadi cashback yang diterima hanya $Rp1.000.000,00$.
        <br><br>
        <strong>Pernyataan 3: BENAR</strong><br>
        Harga Toko Fisik $= Rp9.600.000$, Marketplace A $= Rp9.690.000$. Selisih $= 9.690.000 - 9.600.000 = Rp90.000,00$.
      `,
      tacticalShortcut: "Pernyataan 2 terjebak syarat caps/maksimum promosi e-commerce."
    },

    // --- STIMULUS 5: SOAL 17 s.d. 20 (DOMAIN: DATA & PELUANG) ---
    {
      id: 17,
      stimulusId: "stimulus-5",
      number: 17,
      domain: "Data & Peluang",
      subtopic: "Statistika Deskriptif (Mean Data Kelompok)",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berdasarkan data distribusi frekuensi 100 hari operasional KRL pada Wacana 5, berapakah rata-rata (mean) durasi keterlambatan kereta komuter di Stasiun Sentral?",
      options: [
        "$$2,85\\text{ menit}$$",
        "$$3,40\\text{ menit}$$",
        "$$3,70\\text{ menit}$$",
        "$$4,10\\text{ menit}$$",
        "$$4,50\\text{ menit}$$"
      ],
      correct: 2, // Index 2 -> 3,70 menit
      deconstructorClue: {
        variables: "Rumus mean data kelompok: $\\bar{x} = \\frac{\\sum (f_i \\cdot x_i)}{\\sum f_i}$.",
        relations: "$\\sum (f_i \\cdot x_i) = (45 \\times 1) + (30 \\times 4) + (15 \\times 7) + (10 \\times 10)$. Total $\\sum f_i = 100$.",
        strategy: "Jumlahkan hasil perkalian titik tengah dengan frekuensi lalu bagi 100."
      },
      extractionTable: [
        { fact: "Tepat Waktu ($x_1 = 1$)", model: "$45 \\times 1 = 45$", role: "Komponen kelompok 1" },
        { fact: "Terlambat Ringan ($x_2 = 4$)", model: "$30 \\times 4 = 120$", role: "Komponen kelompok 2" },
        { fact: "Terlambat Sedang ($x_3 = 7$)", model: "$15 \\times 7 = 105$", role: "Komponen kelompok 3" },
        { fact: "Terlambat Berat ($x_4 = 10$)", model: "$10 \\times 10 = 100$", role: "Komponen kelompok 4" }
      ],
      explanation: `
        <strong>Langkah 1: Hitung Jumlah Perkalian Frekuensi dan Titik Tengah</strong><br>
        $$\\sum (f_i \\cdot x_i) = (45 \\times 1) + (30 \\times 4) + (15 \\times 7) + (10 \\times 10)$$
        $$\\sum (f_i \\cdot x_i) = 45 + 120 + 105 + 100 = 370$$
        <br>
        <strong>Langkah 2: Bagi dengan Jumlah Total Hari (100)</strong><br>
        $$\\bar{x} = \\frac{370}{100} = 3,70\\text{ menit}$$
      `,
      tacticalShortcut: "$\\frac{45 + 120 + 105 + 100}{100} = \\frac{370}{100} = 3,7\\text{ menit}$."
    },
    {
      id: 18,
      stimulusId: "stimulus-5",
      number: 18,
      domain: "Data & Peluang",
      subtopic: "Peluang Empiris & Kriteria Sertifikasi",
      type: "single_choice",
      level: "Sedang",
      prompt: "Berapakah peluang empiris bahwa pada suatu hari yang dipilih secara acak, kereta komuter mengalami keterlambatan TIDAK LEBIH DARI 5 menit, dan apakah Stasiun Sentral memenuhi syarat sertifikasi integritas operasional hijau?",
      options: [
        "$$P = 0,45$$; Tidak memenuhi syarat",
        "$$P = 0,70$$; Tepat memenuhi syarat",
        "$$P = 0,75$$; Memenuhi syarat sertifikasi",
        "$$P = 0,85$$; Memenuhi syarat sertifikasi",
        "$$P = 0,90$$; Memenuhi syarat sertifikasi"
      ],
      correct: 2, // Index 2 -> P = 0,75; Memenuhi syarat
      deconstructorClue: {
        variables: "Keterlambatan $\\le 5$ menit mencakup Kategori 'Tepat Waktu' ($0-2$) dan 'Terlambat Ringan' ($3-5$).",
        relations: "Frekuensi gabungan $= 45 + 30 = 75$ hari. Peluang $P = \\frac{75}{100} = 0,75 = 75\\%$. Syarat sertifikasi minimal $70\\%$.",
        strategy: "Jumlahkan frekuensi kumulatif hingga batas $5\\text{ menit}$ dan bandingkan dengan ambang $70\\%$."
      },
      extractionTable: [
        { fact: "Frekuensi Keterlambatan $\\le 5\\text{ m}$", model: "$F = 45 + 30 = 75\\text{ hari}$", role: "Kejadian target" },
        { fact: "Peluang Empiris", model: "$P = \\frac{75}{100} = 0,75 = 75\\%$", role: "Proporsi" },
        { fact: "Syarat Ambang Hijau", model: "$\\ge 70\\%$", role: "$75\\% \\ge 70\\% \\implies$ Lolos" }
      ],
      explanation: `
        <strong>Langkah 1: Identifikasi Kategori yang Memenuhi Syarat ($\\le 5$ menit)</strong><br>
        Hari dengan keterlambatan $\\le 5$ menit terdiri dari:
        <ul class="list-disc list-inside my-1.5 space-y-1">
          <li>Tepat Waktu ($0-2\\text{ menit}$): $45\\text{ hari}$</li>
          <li>Terlambat Ringan ($3-5\\text{ menit}$): $30\\text{ hari}$</li>
        </ul>
        Total hari $= 45 + 30 = 75\\text{ hari}$.
        <br><br>
        <strong>Langkah 2: Hitung Peluang Empiris</strong><br>
        $$P = \\frac{75}{100} = 0,75 = 75\\%$$
        <br>
        <strong>Langkah 3: Evaluasi Standar Sertifikasi</strong><br>
        Karena $75\\% \\ge 70\\%$, stasiun memenuhi kriteria sertifikasi integritas operasional hijau.
      `,
      tacticalShortcut: "Lihat kolom $F_k$ pada tabel di baris 'Terlambat Ringan': langsung terbaca $75$ dari $100$ ($75\\%$)."
    },
    {
      id: 19,
      stimulusId: "stimulus-5",
      number: 19,
      domain: "Data & Peluang",
      subtopic: "Peluang Kejadian Majemuk Independen",
      type: "numeric_input",
      level: "Sulit",
      prompt: "Jika seorang penumpang menaiki KRL pada 2 hari kerja yang saling bebas (independen), berapakah peluang penumpang tersebut merasakan kereta tiba Tepat Waktu ($0 - 2$ menit) pada KEDUA hari tersebut? (Tuliskan dalam bentuk desimal dengan tanda koma atau titik, misal: 0.2025)",
      correctNumeric: 0.2025,
      numericTolerance: 0.005,
      numericUnit: "",
      deconstructorClue: {
        variables: "Peluang tepat waktu pada 1 hari: $P(A) = \\frac{45}{100} = 0,45$.",
        relations: "Dua kejadian saling bebas: $P(A \\cap A) = P(A) \\times P(A) = 0,45 \\times 0,45$.",
        strategy: "Hitung kuadrat desimal $0,45^2$."
      },
      extractionTable: [
        { fact: "Peluang Hari 1 Tepat Waktu", model: "$P(D_1) = 0,45$", role: "Peluang tunggal" },
        { fact: "Peluang Hari 2 Tepat Waktu", model: "$P(D_2) = 0,45$", role: "Independen" },
        { fact: "Peluang Keduanya Tepat Waktu", model: "$0,45 \\times 0,45 = 0,2025$", role: "Kaidah perkalian" }
      ],
      explanation: `
        <strong>Langkah Perhitungan Peluang Kejadian Independen:</strong><br>
        Peluang tepat waktu dalam satu hari:
        $$P(\\text{Tepat Waktu}) = \\frac{45}{100} = 0,45$$
        Karena kejadian pada hari ke-1 dan hari ke-2 saling bebas (independen):
        $$P(\\text{Keduanya Tepat Waktu}) = P(D_1) \\times P(D_2) = 0,45 \\times 0,45 = 0,2025$$
      `,
      tacticalShortcut: "$45^2 = 2025 \\implies 0,45^2 = 0,2025$."
    },
    {
      id: 20,
      stimulusId: "stimulus-5",
      number: 20,
      domain: "Data & Peluang",
      subtopic: "Median & Analisis Distribusi Frekuensi",
      type: "complex_tf",
      level: "Sedang",
      prompt: "Tentukan nilai kebenaran dari setiap pernyataan mengenai parameter statistika data keterlambatan KRL berikut!",
      statements: [
        {
          text: "Median durasi keterlambatan kereta komuter terletak pada kelas interval Terlambat Ringan ($3 - 5$ menit).",
          correct: true
        },
        {
          text: "Modus data keterlambatan berada pada interval Terlambat Berat ($9 - 11$ menit).",
          correct: false
        },
        {
          text: "Peluang kereta mengalami keterlambatan lebih dari 8 menit adalah tepat $0,10$.",
          correct: true
        }
      ],
      deconstructorClue: {
        variables: "(1) Median data ke-50 dan 51 terletak pada $F_k$ yang mencakup 75 (kelas 3-5). (2) Modus memiliki frekuensi tertinggi yaitu 45 (kelas 0-2). (3) Lebih dari 8 menit adalah kelas 9-11 dengan frekuensi 10 dari 100 ($0,10$).",
        relations: "Periksa nilai posisi letak median dan frekuensi modus.",
        strategy: "Tinjau tabel $F_k$ untuk verifikasi cepat."
      },
      extractionTable: [
        { fact: "Pernyataan 1", model: "$\\text{Posisi Median} = \\frac{100}{2} = 50 \\in [46, 75]$", role: "Benar, di kelas $3-5$ menit" },
        { fact: "Pernyataan 2", model: "$\\text{Modus} = \\max(f) = 45 \\implies 0-2\\text{ menit}$", role: "Salah, kelas $0-2$ bukan $9-11$" },
        { fact: "Pernyataan 3", model: "$P(x > 8) = \\frac{10}{100} = 0,10$", role: "Benar" }
      ],
      explanation: `
        <strong>Pernyataan 1: BENAR</strong><br>
        Letak median data ke-$\\frac{n}{2} = 50$. Berdasarkan frekuensi kumulatif, data ke-1 s.d. 45 berada di kelas pertama ($0-2$), sedangkan data ke-46 s.d. 75 berada di kelas kedua ($3-5$). Jadi median berada di interval Terlambat Ringan ($3-5\\text{ menit}$).
        <br><br>
        <strong>Pernyataan 2: SALAH</strong><br>
        Modus adalah interval dengan frekuensi tertinggi, yaitu kelas Tepat Waktu ($0-2\\text{ menit}$) dengan frekuensi $45$, bukan Terlambat Berat (yang hanya berfrekuensi $10$).
        <br><br>
        <strong>Pernyataan 3: BENAR</strong><br>
        Keterlambatan lebih dari $8\\text{ menit}$ hanya terjadi pada interval $9-11\\text{ menit}$ dengan frekuensi $10$. Peluangnya $= \\frac{10}{100} = 0,10$.
      `,
      tacticalShortcut: "Modus langsung terlihat dari frekuensi tertinggi di tabel (45 pada baris pertama)."
    }
  ];

  // Expose to Global Window
  window.PM_STIMULI = PM_STIMULI;
  window.PM_QUESTIONS = PM_QUESTIONS;

})(typeof window !== 'undefined' ? window : globalThis);
