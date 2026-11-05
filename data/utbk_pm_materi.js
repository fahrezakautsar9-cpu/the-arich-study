/*
 * The Arich Study — PM learning path.
 * All explanations and worked examples here are original teaching material.
 */
(function () {
  window.UTBK_PM_MATERI = [
    {
      id: 'cara-berpikir-pm', number: '01', area: 'Fondasi', time: '8 menit',
      title: 'Cara berpikir Penalaran Matematika',
      summary: 'Ubah cerita menjadi model, hitung dengan satuan yang benar, lalu cek apakah hasilnya masuk akal.',
      concepts: ['Membaca informasi relevan', 'Memilih variabel dan model', 'Memeriksa batas serta satuan'],
      conceptHtml: `
        <p>PM menguji hubungan antara <strong>situasi, model matematika, dan keputusan</strong>. Biasanya hitungannya tidak sulit setelah kita tahu apa yang ditanyakan dan hubungan mana yang berlaku.</p>
        <ol><li><strong>Tandai target:</strong> apa yang harus dicari, termasuk satuannya.</li><li><strong>Pilah data:</strong> pisahkan informasi yang dipakai, batasan, dan konteks yang hanya menjelaskan cerita.</li><li><strong>Bangun model:</strong> gambar, tabel, diagram, persamaan, atau peluang—pilih yang paling membantu.</li><li><strong>Hitung dan tafsirkan:</strong> kembalikan hasil ke kalimat soal.</li><li><strong>Cek kewajaran:</strong> tanda, besaran, satuan, dan syarat konteks.</li></ol>
        <p>Kalau cerita panjang, jangan langsung menghafal rumus. Tulis dulu “diketahui — ditanya — hubungan”. Satu tabel kecil sering lebih berguna daripada membaca paragraf yang sama berkali-kali.</p>`,
      formulaHtml: `<p>Tidak ada satu rumus untuk semua soal PM. Pakai kerangka model berikut:</p><div class="pm-learning-math">$$\\text{data} \\longrightarrow \\text{hubungan} \\longrightarrow \\text{hasil} \\longrightarrow \\text{makna}$$</div><p><strong>Cek satuan:</strong> operasi hanya boleh menggabungkan besaran yang sesuai. Contoh: jarak (km) ÷ waktu (jam) menghasilkan kecepatan (km/jam).</p>`,
      shortcutHtml: `<p><strong>Urutan cepat 4 langkah:</strong> target → model → hitung → cek. Untuk setiap angka, tanya “angka ini mewakili apa dan satuannya apa?”</p><p><strong>Batasnya:</strong> jangan membuang angka hanya karena tampak tidak penting. Uji dulu apakah angka itu menentukan batas, kondisi awal, atau satuan.</p>`,
      example: {
        title: 'Contoh — memilih paket air minum',
        prompt: 'Sebuah kegiatan membutuhkan sedikitnya 95 gelas air. Satu paket berisi 12 gelas. Berapa paket minimum yang harus dibeli?',
        steps: ['Targetnya jumlah paket, sedangkan kebutuhan 95 gelas adalah batas minimum.', 'Hitung 95 ÷ 12 = 7 sisa 11. Tujuh paket hanya berisi 84 gelas, belum cukup.', 'Naikkan ke bilangan bulat berikutnya: perlu 8 paket. Cek: 8 × 12 = 96 gelas.']
      },
      pitfalls: ['Menggunakan pembulatan ke bawah saat jumlah barang harus memenuhi batas minimum.', 'Menjawab angka hitungan tanpa menuliskan arti dan satuannya.', 'Mencampur menit dengan jam atau cm dengan meter sebelum membuat model.'],
      practice: { prompt: 'Sebuah bus menempuh 150 km dalam 2,5 jam. Model mana yang memberi kecepatan rata-rata?', options: ['150 + 2,5', '150 ÷ 2,5', '2,5 ÷ 150', '150 × 2,5'], answer: 1, solution: 'Kecepatan = jarak ÷ waktu = 150 km ÷ 2,5 jam = 60 km/jam. Satuannya membantu memilih operasi.' }
    },
    {
      id: 'rasio-persentase', number: '02', area: 'Kuantitas', time: '10 menit',
      advancedHtml: `<p><strong>Perubahan berturut-turut:</strong> naik $p\\%$ lalu turun $q\\%$ memakai faktor $(1+p)(1-q)$ (p dan q dalam desimal). Naik 10% lalu turun 10% memberi $1{,}1\\times0{,}9=0{,}99$, sehingga hasil akhirnya 1% di bawah nilai awal.</p><p><strong>Poin persentase:</strong> perubahan tingkat dari 20% ke 25% adalah 5 poin persentase, tetapi kenaikan relatifnya $5/20=25\\%$. Sebutkan acuan agar dua ukuran ini tidak tertukar.</p><p><strong>Uji perbandingan:</strong> senilai berarti rasio $y/x$ tetap; berbalik nilai berarti hasil kali $xy$ tetap. Cocokkan aturan dengan tabel atau konteks, bukan hanya kata “lebih banyak”.</p>`,
      title: 'Rasio, persentase, dan perbandingan',
      summary: 'Bandingkan bagian dan keseluruhan, perubahan bertahap, skala, serta hubungan senilai atau berbalik nilai.',
      concepts: ['Rasio dan proporsi', 'Persentase dan perubahan', 'Hubungan senilai/berbalik nilai'],
      conceptHtml: `
        <p><strong>Rasio</strong> membandingkan dua besaran. Rasio 3 : 5 berarti setiap 3 bagian besaran pertama berpasangan dengan 5 bagian besaran kedua. Jika totalnya diketahui, jumlah bagian memberi “harga” satu bagian.</p>
        <p><strong>Senilai:</strong> jika satu besaran dikali faktor (k), besaran lain juga dikali (k). <strong>Berbalik nilai:</strong> ketika satu besaran dikali (k), besaran lain dibagi (k), dengan kondisi total kerja tetap.</p>
        <p>Persen selalu memiliki acuan. “Naik 20%” berarti 20% dari nilai awal; “turun 20%” setelah kenaikan dihitung dari nilai yang sudah berubah. Karena acuannya berubah, naik 20% lalu turun 20% tidak kembali ke nilai awal.</p>`,
      formulaHtml: `<ul><li>Jika rasio $a:b$ memiliki total $T$, maka bagian pertama $=\\frac{a}{a+b}T$.</li><li>Perubahan persen $=\\frac{\\text{nilai baru}-\\text{nilai awal}}{\\text{nilai awal}}\\times100\\%$.</li><li>Senilai: $y=kx$. Berbalik nilai: $xy=k$.</li><li>Diskon bertingkat $p\\%$ lalu $q\\%$: sisa $(1-p)(1-q)$ dari harga awal (ubah persen ke desimal).</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> jadikan nilai awal 100 bagian atau gunakan faktor pengali. Diskon 15% berarti membayar 0,85 kali harga; dua diskon 15% berarti 0,85 × 0,85, bukan potongan 30%.</p><p><strong>Batasnya:</strong> rumus senilai/berbalik nilai hanya berlaku jika kondisi lain tetap. Untuk pekerja, misalnya, jumlah pekerjaan dan produktivitas per orang harus sama.</p>`,
      example: {
        title: 'Contoh — perbandingan bahan minuman',
        prompt: 'Sirup dan air dicampur dengan rasio 2 : 7. Jika campuran yang dibuat 1,8 liter, berapa mililiter sirupnya?',
        steps: ['Jumlah bagian = 2 + 7 = 9. Satu bagian = 1,8 ÷ 9 = 0,2 liter.', 'Sirup = 2 bagian = 0,4 liter.', 'Ubah satuan: 0,4 liter = 400 mL.']
      },
      pitfalls: ['Menghitung persen dari nilai yang salah setelah perubahan bertingkat.', 'Menyederhanakan rasio tanpa menjaga urutan besaran.', 'Menganggap semua masalah “lebih banyak” sebagai senilai tanpa memeriksa kondisi tetap.'],
      practice: { prompt: 'Harga awal sebuah barang Rp240.000. Setelah diskon 25%, berapa harga yang dibayar?', options: ['Rp60.000', 'Rp180.000', 'Rp200.000', 'Rp215.000'], answer: 1, solution: 'Bagian yang dibayar adalah 100% − 25% = 75%. Jadi 0,75 × Rp240.000 = Rp180.000.' }
    },
    {
      id: 'aljabar-model', number: '03', area: 'Aljabar', time: '12 menit',
      title: 'Aljabar, fungsi, dan sistem persamaan',
      summary: 'Representasikan harga, jumlah, tarif, laju, dan aturan bertahap dengan variabel yang jelas.',
      concepts: ['Persamaan linear', 'Sistem dua variabel', 'Fungsi dan aturan bertahap'],
      conceptHtml: `
        <p>Variabel adalah nama untuk besaran yang belum diketahui. Definisikan variabel dengan satuan, misalnya (x=) harga satu buku dalam ribu rupiah. Setelah itu, ubah setiap informasi menjadi persamaan.</p>
        <p><strong>Sistem persamaan</strong> cocok ketika dua atau lebih total berasal dari kombinasi barang/variabel yang sama. <strong>Fungsi bertahap</strong> dipakai ketika aturan berubah pada ambang tertentu, seperti tarif dasar lalu tarif tambahan.</p>
        <p>Model yang baik mencantumkan domain: jumlah barang tidak negatif dan biasanya bilangan bulat; waktu bisa kontinu; tarif berlaku hanya pada rentang tertentu. Periksa solusi pada semua persamaan awal, bukan hanya satu.</p>`,
      formulaHtml: `<ul><li>Linear: $y=mx+b$, dengan $m$ sebagai perubahan per satu unit.</li><li>Sistem dua variabel: $ax+by=c$ dan $dx+ey=f$.</li><li>Tarif bertahap: total biaya = biaya tiap rentang + biaya tetap, sesuai aturan stimulus.</li><li>Jika dua besaran berubah dengan laju tetap, selisih $\\Delta y/\\Delta x$ konstan.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> buat tabel “variabel — arti — satuan — batas”. Untuk dua persamaan sederhana, eliminasi biasanya lebih singkat daripada mencari satu variabel dulu lewat substitusi.</p><p><strong>Batasnya:</strong> jangan mengalikan persamaan secara sembarang jika ada batas tarif atau jumlah minimum. Fungsi bertahap harus ditulis per rentang.</p>`,
      example: {
        title: 'Contoh — harga dua jenis tiket',
        prompt: 'Dua tiket dewasa dan satu tiket pelajar berharga Rp95.000. Satu tiket dewasa dan dua tiket pelajar berharga Rp70.000. Tentukan harga masing-masing.',
        steps: ['Misalkan (d) dan (p) dalam ribu rupiah. Modelnya: 2d + p = 95 dan d + 2p = 70.', 'Kalikan persamaan kedua dengan 2: 2d + 4p = 140. Kurangi persamaan pertama: 3p = 45, jadi p = 15.', 'Substitusi: 2d + 15 = 95, sehingga d = 40. Cek persamaan kedua: 40 + 2(15) = 70.']
      },
      pitfalls: ['Lupa mendefinisikan variabel atau satuannya.', 'Memasukkan harga per unit ke total dengan jumlah unit yang keliru.', 'Memakai satu aturan tarif untuk jumlah yang berada di rentang lain.'],
      practice: { prompt: 'Pola biaya adalah Rp8.000 biaya awal ditambah Rp3.000 untuk setiap jam. Berapa biaya untuk 5 jam?', options: ['Rp15.000', 'Rp23.000', 'Rp40.000', 'Rp55.000'], answer: 1, solution: 'Biaya total = 8.000 + 3.000 × 5 = Rp23.000. Biaya awal ditambahkan sekali, bukan untuk setiap jam.' }
    },
    {
      id: 'kesebangunan', number: '04', area: 'Geometri', time: '18 menit',
      title: 'Kesebangunan: rasio sisi, bayangan, dan skala',
      summary: 'Kenali segitiga sebangun, pasangkan sisinya dengan benar, lalu pilih cara tercepat untuk mencari panjang atau luas.',
      concepts: ['Syarat AA, SAS, dan SSS', 'Pasangan sisi yang bersesuaian', 'Skala panjang, luas, dan volume'],
      conceptHtml: `
        <p><strong>Kesebangunan itu “bentuk sama, ukuran boleh berbeda”.</strong> Seperti foto yang diperbesar: sudut-sudutnya tetap, sedangkan setiap panjang berubah dengan faktor pengali yang sama. Faktor ini disebut <em>skala panjang</em> atau $k$. Kalau ukurannya juga sama persis ($k=1$), namanya kongruen.</p>
        <p><strong>Cara mengenali dua segitiga sebangun:</strong> (1) <strong>AA:</strong> dua pasang sudut sama besar; sudut ketiga otomatis sama karena jumlah sudut segitiga $180^\\circ$. (2) <strong>SAS:</strong> dua pasang sisi memiliki rasio sama dan sudut apitnya sama. (3) <strong>SSS:</strong> ketiga pasang sisi memiliki rasio sama. Dalam banyak soal, AA adalah cara tercepat.</p>
        <figure class="pm-learning-diagram">
          <svg viewBox="0 0 360 225" role="img" aria-labelledby="pm-similarity-title pm-similarity-desc">
            <title id="pm-similarity-title">Segitiga kecil di dalam segitiga besar</title>
            <desc id="pm-similarity-desc">Pada segitiga ABC, titik D berada di AB dan E di AC. Garis DE sejajar BC, sehingga segitiga ADE sebangun dengan segitiga ABC.</desc>
            <path class="pm-diagram-line" d="M180 22 L42 200 L318 200 Z" />
            <path class="pm-diagram-highlight" d="M118 102 L242 102" />
            <path class="pm-diagram-dash" d="M42 200 L318 200" />
            <text class="pm-diagram-label" x="174" y="17">A</text>
            <text class="pm-diagram-label" x="25" y="216">B</text>
            <text class="pm-diagram-label" x="321" y="216">C</text>
            <text class="pm-diagram-label" x="103" y="101">D</text>
            <text class="pm-diagram-label" x="245" y="101">E</text>
            <text class="pm-diagram-note" x="152" y="91">DE ∥ BC</text>
          </svg>
          <figcaption>Karena $DE \\parallel BC$, sudut-sudut bersesuaian sama. Jadi $\\triangle ADE \\sim \\triangle ABC$ dan pasangannya adalah $AD\\leftrightarrow AB$, $AE\\leftrightarrow AC$, serta $DE\\leftrightarrow BC$.</figcaption>
        </figure>
        <figure class="pm-learning-diagram">
          <svg viewBox="0 0 390 225" role="img" aria-labelledby="pm-similarity-scale-title pm-similarity-scale-desc">
            <title id="pm-similarity-scale-title">Segitiga sebangun tetap sebangun saat diputar</title>
            <desc id="pm-similarity-scale-desc">Segitiga siku-siku dengan sisi tiga, empat, lima dibandingkan dengan segitiga yang lebih besar dan diputar dengan sisi enam, delapan, sepuluh.</desc>
            <path class="pm-diagram-line" d="M38 190 L98 190 L98 110 Z" />
            <path class="pm-diagram-highlight" d="M245 35 L365 35 L245 195 Z" />
            <path class="pm-diagram-mark" d="M88 190 L88 180 L98 180 M245 45 L255 45 L255 35" />
            <text class="pm-diagram-label" x="25" y="209">A</text><text class="pm-diagram-label" x="96" y="209">B</text><text class="pm-diagram-label" x="101" y="108">C</text>
            <text class="pm-diagram-label" x="231" y="32">P</text><text class="pm-diagram-label" x="366" y="32">Q</text><text class="pm-diagram-label" x="231" y="210">R</text>
            <text class="pm-diagram-note" x="54" y="207">3</text><text class="pm-diagram-note" x="103" y="154">4</text><text class="pm-diagram-note" x="61" y="140">5</text>
            <text class="pm-diagram-note" x="294" y="28">6</text><text class="pm-diagram-note" x="225" y="116">8</text><text class="pm-diagram-note" x="316" y="125">10</text>
          </svg>
          <figcaption>Segitiga boleh berbeda ukuran, diputar, atau dicerminkan. Pasangkan sudut siku-siku dulu: $B\\leftrightarrow P$. Lalu $AB\\leftrightarrow PQ$, $BC\\leftrightarrow PR$, dan $AC\\leftrightarrow QR$. Rasio sisinya tetap $3/6=4/8=5/10=1/2$.</figcaption>
        </figure>
        <figure class="pm-learning-diagram">
          <svg viewBox="0 0 390 235" role="img" aria-labelledby="pm-shadow-title pm-shadow-desc">
            <title id="pm-shadow-title">Mengukur tinggi dengan kesebangunan bayangan</title>
            <desc id="pm-shadow-desc">Dua benda tegak di tanah datar terkena sinar matahari sejajar; tinggi dan panjang bayangannya membentuk dua segitiga sebangun.</desc>
            <path class="pm-diagram-line" d="M25 205 L365 205" />
            <path class="pm-diagram-highlight" d="M65 205 L65 145 L135 205 Z M220 205 L220 85 L360 205 Z" />
            <path class="pm-diagram-dash" d="M65 145 L135 205 M220 85 L360 205" />
            <path class="pm-diagram-sunray" d="M20 80 L90 140 M150 30 L220 90 M280 10 L350 70" />
            <text class="pm-diagram-label" x="48" y="139">h₁</text><text class="pm-diagram-label" x="90" y="222">b₁</text>
            <text class="pm-diagram-label" x="201" y="78">h₂</text><text class="pm-diagram-label" x="284" y="222">b₂</text>
            <text class="pm-diagram-note" x="239" y="30">sinar sejajar</text>
          </svg>
          <figcaption>Karena sudut sinar sama dan kedua benda tegak lurus tanah, segitiganya sebangun. Maka $h_1/b_1=h_2/b_2$. Tinggi dibandingkan dengan bayangan pada urutan yang sama.</figcaption>
        </figure>
        <figure class="pm-learning-diagram">
          <svg viewBox="0 0 390 235" role="img" aria-labelledby="pm-mirror-title pm-mirror-desc">
            <title id="pm-mirror-title">Mengukur tinggi objek memakai cermin di lantai</title>
            <desc id="pm-mirror-desc">Objek tinggi dan pengamat melihat bayangannya pada cermin datar kecil di tanah. Sinar pantul membentuk dua segitiga yang sebangun.</desc>
            <path class="pm-diagram-line" d="M25 205 L365 205" />
            <path class="pm-diagram-highlight" d="M58 205 L58 95 L188 205 M188 205 L253 150 L253 205" />
            <path class="pm-diagram-mark" d="M179 205 L188 196 L197 205" />
            <path class="pm-diagram-line" d="M188 205 L188 214" />
            <text class="pm-diagram-label" x="37" y="91">objek</text><text class="pm-diagram-label" x="241" y="147">mata</text>
            <text class="pm-diagram-note" x="29" y="153">hₒ</text><text class="pm-diagram-note" x="258" y="184">hₘ</text>
            <text class="pm-diagram-note" x="104" y="222">dₒ</text><text class="pm-diagram-note" x="205" y="222">dₘ</text>
            <text class="pm-diagram-note" x="164" y="194">cermin</text>
          </svg>
          <figcaption>Pantulan membuat sudut di cermin sama, sedangkan kedua segitiga sama-sama siku-siku. Jadi $h_o/d_o=h_m/d_m$. Pastikan jarak $d_o$ dan $d_m$ diukur dari cermin.</figcaption>
        </figure>
        <figure class="pm-learning-diagram">
          <svg viewBox="0 0 360 230" role="img" aria-labelledby="pm-altitude-title pm-altitude-desc">
            <title id="pm-altitude-title">Tinggi pada hipotenusa membentuk tiga segitiga sebangun</title>
            <desc id="pm-altitude-desc">Segitiga ABC siku-siku di B. Tinggi dari B jatuh di H pada hipotenusa AC dan membaginya menjadi AH sama dengan m serta HC sama dengan n.</desc>
            <path class="pm-diagram-line" d="M38 195 L158 195 L158 105 Z" />
            <path class="pm-diagram-highlight" d="M158 195 L115 137" />
            <path class="pm-diagram-mark" d="M148 195 L148 185 L158 185 M119 140 L125 136 L129 142" />
            <text class="pm-diagram-label" x="24" y="211">A</text><text class="pm-diagram-label" x="160" y="212">B</text><text class="pm-diagram-label" x="161" y="103">C</text><text class="pm-diagram-label" x="105" y="133">H</text>
            <text class="pm-diagram-note" x="72" y="214">m</text><text class="pm-diagram-note" x="135" y="214">n</text><text class="pm-diagram-note" x="164" y="159">h</text>
          </svg>
          <figcaption>Segitiga kecil dan besar semuanya sebangun. Jika $AH=m$, $HC=n$, dan $BH=h$, maka $h^2=mn$. Ini cara cepat khusus untuk tinggi yang jatuh tepat pada hipotenusa.</figcaption>
        </figure>
        <p><strong>Urutan nama itu penting.</strong> Jika ditulis $\\triangle ADE \\sim \\triangle ABC$, huruf pertama berpasangan dengan pertama, kedua dengan kedua, dan ketiga dengan ketiga. Dari sini kita tahu sisi mana yang boleh dibandingkan.</p>
        <p><strong>Di soal cerita:</strong> sinar matahari yang dianggap sejajar membentuk segitiga-segitiga sebangun pada benda dan bayangannya. Cermin datar di lantai membentuk dua segitiga dengan sudut pantul yang sama. Keduanya bisa dipakai untuk mengukur tinggi tanpa mengukurnya langsung.</p>`,
      formulaHtml: `<div class="pm-learning-formula-grid">
        <section class="pm-learning-formula-card"><h4>1. Satu faktor skala untuk semua sisi</h4><div class="pm-learning-math">$$k=\\frac{s_2}{s_1}$$</div><p>$s_1$ adalah sisi pada bangun asal; $s_2$ adalah sisi pasangannya pada bangun tujuan. Kalau $k=\\frac{3}{2}$, semua panjang bangun tujuan menjadi $\\frac{3}{2}$ kali.</p></section>
        <section class="pm-learning-formula-card"><h4>2. Segitiga kecil dan besar</h4><div class="pm-learning-math">$$\\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC}$$</div><p>Rasio kiri-ke-kanan harus konsisten: semua sisi segitiga kecil di atas, sisi pasangannya pada segitiga besar di bawah. Untuk membandingkan potongan, gunakan $AD/DB=AE/EC$.</p></section>
        <section class="pm-learning-formula-card"><h4>3. Panjang, luas, dan volume</h4><div class="pm-learning-math">$$\\frac{P_2}{P_1}=k,\\qquad \\frac{L_2}{L_1}=k^2,\\qquad \\frac{V_2}{V_1}=k^3$$</div><p>$P$ adalah keliling, $L$ luas, dan $V$ volume. Rumus luas berlaku untuk bangun datar sebangun; rumus volume berlaku untuk bangun ruang sebangun.</p></section>
        <section class="pm-learning-formula-card"><h4>4. Bayangan: matahari, lampu, dan cermin</h4><div class="pm-learning-math">$$\\frac{h_1}{b_1}=\\frac{h_2}{b_2}$$</div><p>$h$ = tinggi benda dan $b$ = panjang bayangan. Untuk matahari, benda dan pembanding harus diukur pada waktu yang sama di tanah datar.</p><div class="pm-learning-math">$$\\frac{h_s}{h_o}=\\frac{d_{LS}}{d_{LO}}$$</div><p>$h_s$ = tinggi bayangan, $h_o$ = tinggi benda, $d_{LS}$ = jarak lampu ke layar, $d_{LO}$ = jarak lampu ke benda. Rumus ini khusus lampu titik, dengan benda di antara lampu dan layar.</p><div class="pm-learning-math">$$\\frac{h_m}{d_m}=\\frac{h_o}{d_o}$$</div><p>Untuk cermin kecil di lantai datar, $h_m$ = tinggi mata, $d_m$ = jarak orang ke cermin, $h_o$ = tinggi objek, dan $d_o$ = jarak objek ke cermin.</p></section>
        <section class="pm-learning-formula-card"><h4>5. Garis tinggi pada sisi miring</h4><div class="pm-learning-math">$$h^2=mn,\\qquad AC^2=(m+n)m,\\qquad BC^2=(m+n)n$$</div><p>$\\triangle ABC$ siku-siku di $C$. Garis tinggi $CH=h$ jatuh di hipotenusa $AB$ dan membaginya menjadi $AH=m$ serta $HB=n$. Gunakan hanya jika bentuk ini benar-benar ada.</p></section>
      </div>
      <p><strong>Mengapa rumus terakhir cepat?</strong> Ketiga segitiga yang terbentuk memiliki pasangan sudut sama, jadi sebangun. Dari perbandingan sisi diperoleh hubungan tinggi dan proyeksi di atas—bukan rumus yang boleh dipakai pada sembarang segitiga.</p>`,
      shortcutHtml: `<ol>
        <li><strong>Kenali dulu — jangan langsung masukkan angka.</strong> Tandai dua sudut yang sama. Jika ada dua pasang sudut sama, segitiganya pasti sebangun (AA).</li>
        <li><strong>Pasangkan titik, baru pasangkan sisi.</strong> Tulis nama segitiga dalam urutan korespondensi, misalnya $\\triangle ADE \\sim \\triangle ABC$. Ini mencegah rasio terbalik.</li>
        <li><strong>Pilih satu dari dua hitungan cepat.</strong> Jika diketahui sisi bersesuaian, cari $k$ lalu kalikan atau bagi. Jika ada satu panjang yang hilang, tulis satu proporsi dan kalikan silang. Keduanya cara yang sama; gunakan yang angkanya paling sederhana.</li>
        <li><strong>Untuk luas, kuadratkan faktor panjang.</strong> Sisi berubah $k$ kali, luas berubah $k^2$ kali. Contoh: panjang diperbesar 3 kali berarti luas menjadi 9 kali.</li>
        <li><strong>Untuk bayangan, buat perbandingan tinggi : bayangan.</strong> Benda dan pembanding harus terkena sinar matahari pada waktu yang sama di permukaan datar. Untuk cermin, bandingkan tinggi mata dengan jarak orang-ke-cermin, lalu tinggi objek dengan jarak objek-ke-cermin.</li>
        <li><strong>Trik khusus segitiga siku-siku:</strong> jika ada garis tinggi ke sisi miring, gunakan $h^2=mn$ sebelum memakai Pythagoras berulang. Ini cepat, tetapi syarat siku-siku dan posisi tinggi wajib terpenuhi.</li>
      </ol>
      <p><strong>Pemeriksaan 5 detik:</strong> sisi yang lebih panjang harus tetap lebih panjang setelah skala; jika bangun tujuan lebih besar, $k>1$. Satuan panjang harus sama sebelum membandingkan.</p>`,
      example: {
        title: 'Contoh — garis sejajar membagi dua sisi',
        prompt: 'Pada segitiga ABC, DE sejajar BC. D berada pada AB dengan AD = 6 cm dan DB = 4 cm; E berada pada AC. Jika AE = 9 cm, tentukan EC.',
        steps: ['Karena DE sejajar BC, sudut A sama pada kedua segitiga dan sudut-sudut di D dan B juga sama. Jadi segitiga ADE sebangun dengan ABC.', 'Hitung sisi penuh AB = AD + DB = 6 + 4 = 10 cm. Pasangkan AD dengan AB dan AE dengan AC.', 'Misalkan EC = x, sehingga AC = 9 + x. Tulis 6/10 = 9/(9+x), lalu kalikan silang: 6(9+x) = 90.', 'Maka 54 + 6x = 90, jadi x = 6 cm. Cek: AE/AC = 9/15 = 3/5 dan AD/AB = 6/10 = 3/5.']
      },
      pitfalls: ['Menganggap gambar yang tampak mirip pasti sebangun—harus ada alasan sudut atau rasio sisi yang cukup.', 'Membandingkan sisi yang tidak bersesuaian atau menaruh bangun kecil di atas pada satu rasio, tetapi di bawah pada rasio lain.', 'Lupa bahwa AB berarti seluruh sisi: jika AD dan DB diketahui, AB = AD + DB.', 'Menggunakan rasio panjang langsung untuk luas; luas memakai kuadrat faktor skala.', 'Menggunakan rumus bayangan matahari pada lampu titik tanpa menggambar posisi lampu, benda, dan layar.'],
      advancedHtml: `<p><strong>Teorema Thales untuk garis sejajar.</strong> Jika $DE\\parallel BC$, garis itu membagi dua sisi lain secara sebanding: $AD/DB=AE/EC$. Gunakan bentuk ini saat soal memberi dua potongan kecil; gunakan $AD/AB=AE/AC$ saat yang diketahui adalah sisi penuh.</p><p><strong>Jangan campur faktor panjang dan luas.</strong> Jika sisi segitiga kecil : besar $=2:5$, maka kelilingnya $2:5$, tetapi luasnya $4:25$. Untuk dua bangun ruang sebangun, perbandingan luas permukaan $k^2$ dan volume $k^3$.</p><p><strong>Versi koordinat/transformasi:</strong> memindahkan, memutar, atau mencerminkan bangun tidak mengubah panjang maupun sudut; dilatasi mengalikan semua panjang dengan $k$. Karena itu, bentuk tetap sebangun setelah kombinasi transformasi tersebut.</p><p><strong>Strategi saat diagram rumit:</strong> gambar ulang tiap segitiga secara terpisah, tulis tiga huruf dalam urutan korespondensi, lalu sejajarkan sisi yang sama-sama menghubungkan pasangan sudut. Ini lebih aman daripada menebak dari kemiringan gambar.</p>`,
      practice: { prompt: 'Pada peta berskala 1 : 25.000, jarak dua titik adalah 4 cm. Berapa jarak sebenarnya?', options: ['100 m', '250 m', '1 km', '10 km'], answer: 2, solution: 'Jarak sebenarnya = 4 × 25.000 cm = 100.000 cm = 1.000 m = 1 km.' }
    },
    {
      id: 'rasio-trapesium', number: '05', area: 'Geometri', time: '9 menit',
      title: 'Trapesium, diagonal, dan rasio luas',
      summary: 'Gunakan kesebangunan di dalam trapesium untuk membaca titik potong diagonal dan membandingkan luas.',
      concepts: ['Rasio diagonal', 'Segitiga sebangun', 'Perbandingan luas'],
      conceptHtml: `<p>Misalkan $AB$ dan $CD$ adalah sisi sejajar trapesium, sedangkan diagonal $AC$ dan $BD$ berpotongan di $P$. Sudut berhadapan di $P$ sama besar; sudut-sudut lain sama karena $AB\\parallel CD$. Maka $\\triangle APB\\sim\\triangle CPD$.</p><figure class="pm-learning-diagram"><svg viewBox="0 0 360 235" role="img" aria-labelledby="pm-trapezoid-title pm-trapezoid-desc"><title id="pm-trapezoid-title">Diagonal trapesium membentuk dua segitiga sebangun</title><desc id="pm-trapezoid-desc">Trapesium ABCD memiliki AB sejajar CD. Diagonal AC dan BD berpotongan di P, membentuk segitiga APB dan CPD yang sebangun.</desc><path class="pm-diagram-line" d="M55 195 L305 195 L250 55 L110 55 Z"/><path class="pm-diagram-highlight" d="M55 195 L250 55 M305 195 L110 55"/><circle class="pm-diagram-dot" cx="180" cy="105" r="4"/><text class="pm-diagram-label" x="39" y="213">A</text><text class="pm-diagram-label" x="307" y="213">B</text><text class="pm-diagram-label" x="252" y="51">C</text><text class="pm-diagram-label" x="94" y="51">D</text><text class="pm-diagram-label" x="184" y="103">P</text><text class="pm-diagram-note" x="145" y="222">AB ∥ CD</text></svg><figcaption>Dua segitiga yang menghadap sisi sejajar sebangun. Rasio alas $AB:CD$ sama dengan rasio ruas diagonal $AP:PC$ dan $BP:PD$.</figcaption></figure><p>Sketsa membantu memasangkan sisi. Sifat ini berlaku untuk trapesium apa pun selama kedua alas memang sejajar; tidak perlu sama kaki.</p>`,
      formulaHtml: '<ul><li>Jika $AB\\parallel CD$ dan diagonal berpotongan di $P$: $\\frac{AP}{PC}=\\frac{BP}{PD}=\\frac{AB}{CD}$. Pasangan segitiga yang sebangun adalah $\\triangle APB\\sim\\triangle CPD$.</li><li>Rasio luasnya: $\\frac{L_{APB}}{L_{CPD}}=\\left(\\frac{AB}{CD}\\right)^2$.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> begitu melihat trapesium dengan dua alas sejajar dan diagonal berpotongan, pasangkan alas besar dengan ruas diagonal yang berhadapan. Contoh: $AB:CD=15:9=5:3$, maka $AP:PC=5:3$.</p><p><strong>Untuk luas</strong>, kuadratkan rasio yang sama: $25:9$. <strong>Batasnya:</strong> sifat ini perlu $AB\\parallel CD$ dan pasangan segitiga tepat; bentuknya tidak harus sama kaki.</p>',
      example: {
        title: 'Contoh — rangka trapesium',
        prompt: 'Dua sisi sejajar sebuah trapesium panjangnya 15 cm dan 9 cm. Diagonalnya berpotongan di P. Tentukan AP : PC dan perbandingan luas segitiga APB dengan CPD.',
        steps: ['Rasio alas = 15 : 9 = 5 : 3.', 'Karena diagonal terbagi sebanding dengan alas, AP : PC = 5 : 3.', 'Rasio luas segitiga yang sebangun adalah kuadrat rasio sisi: 5² : 3² = 25 : 9.']
      },
      pitfalls: ['Memakai rasio luas sebagai rasio panjang tanpa dikuadratkan.', 'Tertukar memasangkan titik potong dan sisi sejajar.', 'Menganggap trapesium harus sama kaki agar sifat diagonal berlaku.'],
      practice: { prompt: 'Alas sejajar trapesium panjangnya 18 cm dan 12 cm. Diagonal bertemu di P. Berapa rasio AP : PC?', options: ['2 : 3', '3 : 2', '3 : 4', '9 : 4'], answer: 1, solution: 'Rasio AP : PC sama dengan rasio alas AB : CD = 18 : 12 = 3 : 2.' }
    },
    {
      id: 'geometri-trigonometri', number: '06', area: 'Geometri', time: '14 menit',
      advancedHtml: `<p><strong>Segitiga sembarang:</strong> aturan sinus $a/\\sin A=b/\\sin B=c/\\sin C$ memasangkan sisi dengan sudut di depannya. Aturan cosinus $c^2=a^2+b^2-2ab\\cos C$ berguna jika dua sisi dan sudut apit diketahui, atau ketiga sisi diketahui.</p><p><strong>Luas dengan sudut apit:</strong> $L=\\frac12 ab\\sin C$, dengan $C$ sudut di antara sisi $a$ dan $b$. Rumus ini menghindari pencarian tinggi tegak secara terpisah.</p><p><strong>Elevasi/depresi:</strong> gambar garis pandang dan garis horizontal, lalu bentuk segitiga siku-siku. Gunakan tangen untuk menghubungkan tinggi dengan jarak mendatar; perhitungkan tinggi mata pengamat bila ada.</p><p><strong>Sudut lingkaran:</strong> rumus juring derajat memakai $\\theta/360^\\circ$; rumus radian memakai $s=r\\theta$ dan $L=\\frac12r^2\\theta$. Jangan mencampur satuan sudut.</p>`,
      title: 'Segitiga, lingkaran, dan trigonometri',
      summary: 'Pilih relasi geometri yang sesuai: Pythagoras, luas, keliling, sudut, atau proyeksi.',
      concepts: ['Pythagoras dan jarak', 'Luas/keliling lingkaran', 'Sinus, cosinus, dan tangen'],
      conceptHtml: `
        <p>Mulai dari gambar. Segitiga siku-siku memberi hubungan panjang; lingkaran memberi hubungan jari-jari, diameter, busur, dan sektor. Pecah bangun gabungan menjadi bentuk yang rumusnya sudah dikenal.</p>
        <p>Pada segitiga siku-siku, sinus membandingkan sisi depan dengan hipotenusa, cosinus sisi samping dengan hipotenusa, dan tangen sisi depan dengan sisi samping. “Depan” dan “samping” bergantung pada sudut yang sedang dipakai.</p>
        <p>Proyeksi panjang pada suatu arah menggunakan cosinus sudut antara vektor dan arah itu. Selalu periksa dari gambar: apakah yang dicari komponen mendatar, tegak, atau panjang miring?</p>`,
      formulaHtml: `<ul><li>Pythagoras: $a^2+b^2=c^2$, dengan $c$ sisi miring.</li><li>Lingkaran: $d=2r$, $K=2\\pi r$, $L=\\pi r^2$.</li><li>Busur sudut pusat $\\theta$: $s=\\frac{\\theta}{360^\\circ}2\\pi r$; sektor: $L_s=\\frac{\\theta}{360^\\circ}\\pi r^2$.</li><li>$\\sin\\theta=\\frac{\\text{depan}}{\\text{miring}}$, $\\cos\\theta=\\frac{\\text{samping}}{\\text{miring}}$, $\\tan\\theta=\\frac{\\text{depan}}{\\text{samping}}$.</li><li>Komponen sejajar arah: $v_{\\parallel}=v\\cos\\theta$.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> hafalkan pasangan segitiga khusus 3:4:5, 5:12:13, dan sudut 30°, 45°, 60° bila nilai eksak dibutuhkan. Tetapi gambar segitiga dulu agar tidak salah menentukan sisi depan/samping.</p><p><strong>Batasnya:</strong> rasio segitiga khusus hanya berlaku jika bentuknya benar-benar sebangun dengan segitiga tersebut. Pastikan kalkulator memakai derajat jika sudut ditulis dalam derajat.</p>`,
      example: {
        title: 'Contoh — kabel penyangga',
        prompt: 'Kabel sepanjang 13 m menghubungkan tanah ke ujung tiang. Titik ikat di tanah berjarak mendatar 5 m dari tiang. Berapa tinggi titik ikat pada tiang?',
        steps: ['Gambar segitiga siku-siku: kabel adalah sisi miring 13 m, jarak tanah 5 m.', 'Tinggi kuadrat = 13² − 5² = 169 − 25 = 144.', 'Tinggi = 12 m. Cek: 5² + 12² = 13².']
      },
      pitfalls: ['Menggunakan diameter ketika rumus memerlukan jari-jari.', 'Lupa bahwa luas berubah dengan kuadrat panjang.', 'Menetapkan sisi depan/samping terhadap sudut yang berbeda.'],
      practice: { prompt: 'Sebuah lingkaran berjari-jari 7 cm. Berapa kelilingnya jika pi = 22/7?', options: ['22 cm', '44 cm', '154 cm', '308 cm'], answer: 1, solution: 'Keliling = 2πr = 2 × 22/7 × 7 = 44 cm.' }
    },
    {
      id: 'peluang-kombinatorika', number: '07', area: 'Peluang', time: '14 menit',
      title: 'Peluang dan pencacahan',
      summary: 'Hitung hasil yang mungkin dengan aturan slot, lalu bandingkan kasus yang memenuhi dengan seluruh kasus.',
      concepts: ['Aturan perkalian dan penjumlahan', 'Permutasi/kombinasi', 'Peluang bersyarat dan independen'],
      formulaExtraHtml: '<p><strong>Permutasi</strong> (urutan penting): $P(n,r)=\\frac{n!}{(n-r)!}$. <strong>Kombinasi</strong> (urutan tidak penting): $\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$.</p><p><strong>Peluang total:</strong> $P(B)=\\sum_i P(A_i)P(B\\mid A_i)$. <strong>Bayes:</strong> $P(A\\mid B)=\\frac{P(A)P(B\\mid A)}{P(B)}$. Gunakan jika kejadian $A_i$ membagi semua sumber yang mungkin dan informasinya lengkap.</p>',
      conceptHtml: `
        <p>Ruang sampel adalah semua hasil yang mungkin. Jika setiap hasil sama mungkin, peluang = banyak hasil yang memenuhi ÷ banyak seluruh hasil. Kalau peluang tiap hasil tidak sama, gunakan peluang masing-masing hasil, bukan sekadar menghitung kasus.</p>
        <p><strong>Aturan perkalian</strong> dipakai untuk rangkaian pilihan tahap demi tahap. <strong>Aturan penjumlahan</strong> dipakai untuk kasus yang saling lepas (“A atau B”). Untuk memilih beberapa objek, tanyakan apakah urutan penting: jika penting gunakan permutasi; jika tidak, kombinasi.</p>
        <p>Kejadian independen tidak mengubah peluang satu sama lain. Tanpa pengembalian, pilihan berikutnya berubah karena isi kelompok berubah. Peluang bersyarat selalu menyatakan kelompok acuan baru.</p>`,
      formulaHtml: `<ul><li>Peluang: $P(A)=\\frac{n(A)}{n(S)}$ bila hasil sama mungkin.</li><li>Komplemen: $P(A^c)=1-P(A)$.</li><li>Gabungan: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.</li><li>Independen: $P(A\\cap B)=P(A)P(B)$.</li><li>Bersyarat: $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$.</li><li>Kombinasi: $\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$; urutan tidak diperhatikan.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> untuk soal “setidaknya satu”, sering lebih mudah menghitung 1 − P(tidak ada). Untuk pilihan berurutan tanpa pengulangan, tulis jumlah pilihan di tiap slot lalu kalikan.</p><p><strong>Batasnya:</strong> jangan mengalikan peluang jika kejadian tidak independen. Tanpa pengembalian, penyebut dan pembilang berubah setelah pengambilan pertama.</p>`,
      example: {
        title: 'Contoh — mengambil dua kartu warna',
        prompt: 'Dalam kantong ada 4 kartu merah dan 3 kartu biru. Dua kartu diambil satu per satu tanpa dikembalikan. Berapa peluang keduanya berbeda warna?',
        steps: ['Kasus merah lalu biru: (4/7)(3/6) = 2/7.', 'Kasus biru lalu merah: (3/7)(4/6) = 2/7.', 'Kedua urutan saling lepas, jadi peluang total = 2/7 + 2/7 = 4/7.']
      },
      pitfalls: ['Menganggap peluang pengambilan tanpa pengembalian tetap sama.', 'Lupa bahwa “A atau B” bisa memiliki irisan.', 'Memakai kombinasi saat urutan sebenarnya penting, atau sebaliknya.'],
      practice: { prompt: 'Sebuah dadu fair dilempar sekali. Peluang mendapat bilangan genap atau lebih dari 4 adalah …', options: ['1/3', '1/2', '2/3', '5/6'], answer: 2, solution: 'Genap = {2,4,6}; lebih dari 4 = {5,6}; irisan = {6}. Banyak gabungan = 3 + 2 − 1 = 4 dari 6, jadi 2/3.' }
    },
    {
      id: 'barisan-pola', number: '08', area: 'Pola & perubahan', time: '10 menit',
      advancedHtml: `<p><strong>Deret geometri tak hingga:</strong> jumlah $a+ar+ar^2+\\cdots$ berhingga hanya jika $|r|<1$, dengan $S_\\infty=a/(1-r)$. Jika $|r|\\ge1$, suku tidak menuju nol sehingga jumlahnya tidak konvergen.</p><p><strong>Aturan rekursif:</strong> suku berikutnya dapat ditentukan dari suku sebelumnya, misalnya $U_{n+1}=U_n+d$ atau $U_{n+1}=rU_n$. Tulis beberapa langkah untuk memastikan indeks awal dan jumlah perpindahan.</p><p><strong>Pola lain:</strong> jika selisih dan rasio sama-sama berubah, jangan memaksakan rumus aritmetika/geometri. Gunakan informasi hubungan atau tabel perubahan yang diberikan.</p>`,
      title: 'Barisan, deret, dan pola bertahap',
      summary: 'Kenali perubahan tetap, faktor pengali, pola berulang, atau kondisi berhenti dari tabel dan cerita.',
      concepts: ['Barisan aritmetika', 'Barisan geometri', 'Jumlah dan model bertahap'],
      conceptHtml: `
        <p>Tulis beberapa suku pertama dan hitung <strong>selisih</strong> antar suku. Selisih tetap mengarah ke barisan aritmetika. Jika rasio antar suku tetap, periksa barisan geometri. Beberapa konteks memiliki batas: pertumbuhan berhenti setelah ambang tercapai atau aturan berubah.</p>
        <p>Perhatikan apakah pertanyaan meminta nilai pada periode tertentu (suku ke-(n)) atau akumulasi seluruh periode (jumlah deret). Mulai dari indeks yang benar: “minggu pertama” biasanya (n=1), tetapi model dapat menetapkan (n=0).</p>
        <p>Tabel periode–nilai sering menjadi cara aman untuk menangani jadwal libur, kondisi “maksimum”, atau aturan bertahap. Jangan meneruskan pola setelah konteks menyatakan prosesnya berhenti.</p>`,
      formulaHtml: `<ul><li>Aritmetika: $U_n=a+(n-1)d$.</li><li>Jumlah aritmetika: $S_n=\\frac{n}{2}[2a+(n-1)d]=\\frac{n}{2}(a+U_n)$.</li><li>Geometri: $U_n=ar^{n-1}$.</li><li>Jumlah geometri ($r\\ne1$): $S_n=a\\frac{r^n-1}{r-1}$.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> bila kenaikan tiap periode sama, suku ke-(n) dapat dihitung dari suku awal + (banyak langkah × kenaikan). Banyak langkah dari periode 1 ke periode (n) adalah (n-1).</p><p><strong>Batasnya:</strong> jangan gunakan rumus deret tak berhingga untuk jumlah periode terbatas. Jangan lanjut menambah jika stimulus menyebut jarak/produksi sudah mencapai batas.</p>`,
      example: {
        title: 'Contoh — target latihan',
        prompt: 'Jarak latihan hari pertama 2 km dan bertambah 0,5 km setiap hari selama 6 hari. Berapa total jarak selama enam hari?',
        steps: ['Nilai harian membentuk barisan aritmetika: a = 2, d = 0,5, n = 6.', 'Hari keenam: U₆ = 2 + 5(0,5) = 4,5 km.', 'Jumlah: S₆ = 6/2 × (2 + 4,5) = 19,5 km.']
      },
      pitfalls: ['Menggunakan (n) kenaikan, padahal dari suku pertama ke suku ke-(n) ada (n-1) langkah.', 'Menghitung nilai akhir padahal yang diminta total akumulasi.', 'Mengabaikan kondisi batas atau hari saat kegiatan tidak berlangsung.'],
      practice: { prompt: 'Barisan dimulai 7, 11, 15, … Berapa suku ke-12?', options: ['47', '48', '51', '55'], answer: 2, solution: 'Selisihnya 4. U₁₂ = 7 + (12 − 1) × 4 = 7 + 44 = 51.' }
    },
    {
      id: 'statistika-data', number: '09', area: 'Data', time: '14 menit',
      title: 'Statistika dan data berkelompok',
      summary: 'Baca tabel/frekuensi, hitung ukuran pemusatan, dan pahami efek perubahan nilai pada ringkasan data.',
      concepts: ['Mean, median, modus', 'Data berkelompok', 'Perubahan dan perbandingan data'],
      formulaExtraHtml: '<p><strong>Median berkelompok (perkiraan):</strong> $Me\\approx L+\\left(\\frac{N/2-F}{f}\\right)w$. $L$ adalah batas bawah kelas median, $N$ total frekuensi, $F$ frekuensi kumulatif sebelum kelas median, $f$ frekuensi kelas median, dan $w$ lebar kelas.</p><p><strong>Modus berkelompok (perkiraan):</strong> $Mo\\approx L+\\left(\\frac{d_1}{d_1+d_2}\\right)w$. $d_1$ adalah frekuensi kelas modus dikurangi kelas sebelumnya; $d_2$ frekuensi kelas modus dikurangi kelas sesudahnya. Ini perkiraan dari data berkelompok, bukan nilai eksak data mentah.</p>',
      conceptHtml: `
        <p>Mean merangkum total dibagi banyak data; median adalah nilai tengah setelah diurutkan; modus adalah nilai yang paling sering muncul. Ukuran yang tepat bergantung pada pertanyaan dan bentuk distribusi.</p>
        <p>Untuk tabel frekuensi, setiap nilai mewakili sejumlah pengamatan. Kalikan nilai dengan frekuensinya sebelum menjumlahkan. Untuk data dalam interval kelas, titik tengah memberi <strong>perkiraan</strong> mean karena nilai rinci di dalam kelas tidak diketahui.</p>
        <p>Jika semua data ditambah c, mean dan median bertambah c; rentang tetap. Jika semua data dikali a, ukuran panjang seperti mean, median, dan rentang dikali nilai mutlak a. Tabel atau grafik tetap harus dibaca dengan skala sumbu yang benar.</p><p>Untuk median berkelompok, cari kelas yang memuat posisi tengah dari frekuensi kumulatif. Rumus interpolasi memberi perkiraan posisi median di dalam kelas; hasilnya bukan nilai persis karena data mentahnya tidak terlihat.</p>`,
      formulaHtml: `<ul><li>Mean data tunggal: $\\bar{x}=\\frac{\\sum x_i}{n}$.</li><li>Mean tabel frekuensi: $\\bar{x}=\\frac{\\sum f_i x_i}{\\sum f_i}$.</li><li>Mean perkiraan data berkelompok: $\\bar{x}\\approx\\frac{\\sum f_i m_i}{\\sum f_i}$, dengan $m_i$ titik tengah kelas.</li><li>Rentang = nilai maksimum − nilai minimum.</li><li>Median data berkelompok adalah perkiraan dalam kelas median, bukan nilai persis data mentah.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> untuk frekuensi, buat kolom (f), (x), dan (fx); jumlahkan (fx), lalu bagi total frekuensi. Untuk median, cari posisi tengah dari frekuensi kumulatif, bukan memilih kelas dengan frekuensi terbesar.</p><p><strong>Batasnya:</strong> titik tengah menghasilkan estimasi untuk data berkelompok. Jangan menyebutnya nilai pasti jika data individual tidak tersedia.</p>`,
      example: {
        title: 'Contoh — rata-rata perkiraan',
        prompt: 'Nilai 0–10 memiliki frekuensi 2, nilai 10–20 frekuensi 3, dan nilai 20–30 frekuensi 5. Perkirakan mean.',
        steps: ['Titik tengah tiap kelas: 5, 15, dan 25.', 'Jumlah tertimbang = 2×5 + 3×15 + 5×25 = 180. Total data = 2+3+5 = 10.', 'Mean perkiraan = 180 ÷ 10 = 18. Ini perkiraan karena nilai dalam tiap interval tidak diketahui.']
      },
      pitfalls: ['Membagi jumlah nilai dengan banyak kelas, bukan total frekuensi.', 'Mengurutkan data dengan frekuensi lalu salah mengambil posisi median.', 'Menyamakan mean perkiraan data interval dengan mean data mentah yang persis.'],
      practice: { prompt: 'Data 4, 6, 6, 10 memiliki mean …', options: ['6', '6,5', '7', '8'], answer: 1, solution: 'Jumlah data = 26 dan banyaknya 4, sehingga mean = 26 ÷ 4 = 6,5.' }
    },
    {
      id: 'bangun-ruang-satuan', number: '10', area: 'Pengukuran', time: '12 menit',
      title: 'Pengukuran, luas, dan bangun ruang',
      summary: 'Pilih rumus berdasarkan bentuk, pecah bangun gabungan, dan jaga konversi satuan panjang, luas, serta volume.',
      concepts: ['Keliling dan luas', 'Volume dan luas permukaan', 'Konversi satuan dan estimasi'],
      conceptHtml: `
        <p>Gambar ulang bentuk dan beri label ukuran. Bangun gabungan dapat dipecah menjadi persegi panjang, segitiga, lingkaran, atau bangun ruang sederhana. Untuk lubang atau bagian yang dipotong, kurangi luas/volume yang tidak ada.</p>
        <p>Satuan panjang bertingkat sepuluh: 1 m = 100 cm. Satuan luas bertingkat seratus dan volume bertingkat seribu: 1 m² = 10.000 cm², 1 m³ = 1.000.000 cm³.</p>
        <p>Volume menjawab kapasitas ruang; luas permukaan menjawab bahan pelapis. Tabung terbuka, kotak tanpa tutup, atau permukaan yang menempel memerlukan luas sisi yang benar-benar terlihat saja.</p>`,
      formulaHtml: `<ul><li>Persegi panjang: $L=pl$. Segitiga: $L=\\frac12 at$. Trapesium: $L=\\frac12(a+b)t$.</li><li>Prisma: $V=L_{alas}\\times t$.</li><li>Tabung: $V=\\pi r^2t$; luas selimut $=2\\pi rt$.</li><li>Skala panjang $k$ memberi faktor luas $k^2$ dan faktor volume $k^3$.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> tulis satuan di setiap baris hitung. Sebelum mengalikan, konversi semua ukuran ke satuan yang sama. Periksa apakah hasilnya harus berupa satuan persegi, kubik, atau satuan biasa.</p><p><strong>Batasnya:</strong> rumus luas permukaan penuh tidak cocok untuk wadah terbuka atau bagian yang menempel. Gambar jaring-jaring atau tandai sisi yang benar-benar dilapisi.</p>`,
      example: {
        title: 'Contoh — kapasitas kotak penyimpanan',
        prompt: 'Kotak berbentuk balok berukuran 40 cm × 25 cm × 30 cm. Berapa volumenya dalam liter?',
        steps: ['Volume = 40 × 25 × 30 = 30.000 cm³.', 'Setiap 1.000 cm³ = 1 liter.', 'Kapasitas = 30 liter.']
      },
      pitfalls: ['Mencampur cm dan meter pada perkalian luas/volume.', 'Memakai luas permukaan saat pertanyaan meminta kapasitas.', 'Menganggap faktor skala luas sama dengan faktor skala panjang.'],
      practice: { prompt: 'Sebuah persegi memiliki sisi 8 cm. Jika panjang sisinya menjadi dua kali, luas barunya adalah …', options: ['16 cm²', '64 cm²', '128 cm²', '256 cm²'], answer: 3, solution: 'Sisi baru 16 cm, maka luas = 16² = 256 cm². Luas berubah 2² = 4 kali dari luas awal 64 cm².' }
    },
    {
      id: 'bilangan-satuan', number: '12', area: 'Fondasi kuantitatif', time: '12 menit',
      title: 'Bilangan, pecahan, pangkat, dan satuan',
      summary: 'Rapikan hitungan dasar, pecahan, pangkat, akar, estimasi, dan konversi sebelum membangun model.',
      concepts: ['Operasi bilangan dan pecahan', 'Pangkat dan akar', 'Estimasi dan satuan'],
      conceptHtml: `
        <p>Soal konteks sering gagal bukan karena rumusnya, tetapi karena operasi pecahan, tanda negatif, pembulatan, atau konversi satuan. Kerjakan operasi sesuai prioritas: kurung, pangkat/akar, perkalian/pembagian, lalu penjumlahan/pengurangan.</p>
        <p>Untuk menjumlahkan pecahan, samakan penyebut. Untuk perkalian pecahan, kalikan pembilang dan penyebut; sederhanakan sebelum mengalikan bilangan besar. Pisahkan satuan dari angka agar hasil akhirnya tetap bermakna.</p>
        <p>Estimasi memberi pemeriksaan cepat. Jika jarak sekitar 100 km dan waktu sekitar 2 jam, hasil kecepatan harus sekitar 50 km/jam, bukan 5 atau 500.</p>`,
      formulaHtml: `<div class="pm-learning-formula-grid">
        <section class="pm-learning-formula-card"><h4>Tambah atau kurangi pecahan</h4><div class="pm-learning-math">$$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd},\\qquad b,d\\ne0$$</div><p>Samakan penyebut terlebih dahulu. Cara yang biasanya lebih ringkas adalah memakai KPK penyebut, bukan langsung mengalikan kedua penyebut.</p><div class="pm-learning-math">$$\\frac{3}{4}+\\frac{2}{3}=\\frac{9}{12}+\\frac{8}{12}=\\frac{17}{12}=1\\frac{5}{12}$$</div></section>
        <section class="pm-learning-formula-card"><h4>Kali atau bagi pecahan</h4><div class="pm-learning-math">$$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd},\\qquad \\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}$$</div><p>Saat membagi, balik pecahan <strong>yang dibagi</strong> (pecahan kedua), lalu kalikan. Coret faktor yang sama secara diagonal sebelum mengalikan.</p><div class="pm-learning-math">$$\\frac{6}{35}\\times\\frac{14}{9}=\\frac{2}{5}\\times\\frac{2}{3}=\\frac{4}{15}$$</div></section>
        <section class="pm-learning-formula-card"><h4>Pangkat dan akar</h4><div class="pm-learning-math">$$a^m a^n=a^{m+n},\\qquad (a^m)^n=a^{mn},\\qquad \\sqrt{a^2}=|a|$$</div><p>Pangkat dijumlahkan hanya saat <strong>basisnya sama</strong> dan operasinya perkalian. Akar kuadrat utama selalu tidak negatif, jadi $\\sqrt{(-5)^2}=5$, bukan $-5$.</p></section>
        <section class="pm-learning-formula-card"><h4>Konversi satuan</h4><div class="pm-learning-math">$$1\\,\\text{km}=1{,}000\\,\\text{m},\\qquad 1\\,\\text{jam}=60\\,\\text{menit}$$</div><p>Untuk luas dan volume, faktor konversi ikut dikuadratkan atau dipangkatkan tiga.</p><div class="pm-learning-math">$$1\\,\\text{m}^2=10{,}000\\,\\text{cm}^2,\\qquad 1\\,\\text{m}^3=1{,}000{,}000\\,\\text{cm}^3$$</div></section>
      </div>`,
      shortcutHtml: `<ol><li><strong>Tambah pecahan:</strong> cari KPK penyebut, samakan penyebut, baru jumlahkan pembilang. Jangan menjumlahkan penyebut.</li><li><strong>Kali pecahan:</strong> coret faktor yang sama secara silang sebelum mengalikan. Contoh $\\frac{6}{35}\\times\\frac{14}{9}$ menjadi $\\frac{2}{5}\\times\\frac{2}{3}=\\frac{4}{15}$.</li><li><strong>Bagi pecahan:</strong> pertahankan pecahan pertama, balik pecahan kedua, lalu kalikan.</li><li><strong>Cek pangkat:</strong> lihat apakah basisnya benar-benar sama. $2^3+2^2$ tidak menjadi $2^5$; aturan penjumlahan pangkat hanya untuk perkalian.</li><li><strong>Cek satuan:</strong> tulis faktor konversi sebagai pecahan agar satuan yang tidak diperlukan saling habis. Untuk m ke cm, luas memakai $100^2$ dan volume $100^3$.</li></ol><p><strong>Batasnya:</strong> $\\sqrt{a^2}=|a|$, bukan selalu $a$. Pembulatan dilakukan di langkah terakhir jika soal meminta hasil pendekatan.</p>`,
      example: {
        title: 'Contoh — mengatur takaran resep',
        prompt: 'Sebuah resep memakai 3/4 kg tepung untuk 6 loyang. Berapa tepung untuk 10 loyang dengan ukuran yang sama?',
        steps: ['Kebutuhan per loyang = 3/4 ÷ 6 = 1/8 kg.', 'Untuk 10 loyang: 10 × 1/8 = 10/8 = 1,25 kg.', 'Estimasi masuk akal: 10 loyang lebih banyak daripada 6, jadi tepung juga lebih dari 0,75 kg.']
      },
      pitfalls: ['Menerapkan urutan operasi secara keliru.', 'Mengubah satuan hanya pada angka, bukan pada hubungan luas/volume.', 'Membulatkan terlalu dini hingga mengubah keputusan batas.'],
      practice: { prompt: 'Nilai 3/4 + 2/3 adalah …', options: ['1 1/12', '1 5/12', '1 7/12', '2 1/12'], answer: 1, solution: 'Samakan penyebut menjadi 12: 3/4 = 9/12 dan 2/3 = 8/12. Jumlahnya 17/12 = 1 5/12.' }
    },
    {
      id: 'spltv', number: '13', area: 'Aljabar', time: '13 menit',
      advancedHtml: `<p><strong>Klasifikasi solusi:</strong> setelah eliminasi, baris $0=5$ berarti sistem tidak konsisten; baris $0=0$ menunjukkan ada persamaan yang tidak menambah informasi. Bergantung pada persamaan yang tersisa, sistem dapat punya satu solusi atau tak terhingga banyaknya.</p><p><strong>Eliminasi Gauss:</strong> susun koefisien dan konstanta dalam matriks augmented. Menukar baris, mengalikan baris dengan bilangan bukan nol, atau menambah kelipatan baris lain mempertahankan himpunan solusi.</p><p><strong>Model konteks:</strong> solusi aljabar perlu memenuhi syarat seperti harga tidak negatif, jumlah barang bulat, dan satuan yang cocok. Solusi persamaan belum otomatis menjadi jawaban yang masuk akal.</p>`,
      title: 'Sistem persamaan linear tiga variabel',
      summary: 'Bangun tiga persamaan dari tiga besaran yang belum diketahui, lalu eliminasi secara teratur.',
      concepts: ['Mendefinisikan tiga variabel', 'Menyusun SPLTV dari konteks', 'Eliminasi dan substitusi'],
      conceptHtml: `
        <p>SPLTV dipakai ketika ada tiga besaran tak diketahui dan tiga informasi independen. Nyatakan variabel beserta satuannya terlebih dahulu, misalnya x, y, z sebagai harga tiga jenis barang dalam ribu rupiah.</p>
        <p>Eliminasi satu variabel dari sepasang persamaan, lakukan lagi pada pasangan lain, lalu selesaikan sistem dua variabel. Substitusikan kembali untuk menemukan variabel ketiga dan cek pada seluruh persamaan awal.</p>
        <p>Persamaan yang saling kelipatan tidak menambah informasi baru. Jika soal meminta jumlah barang, solusi pecahan mungkin menandakan model atau interpretasi jumlahnya perlu dicek.</p>`,
      formulaHtml: '<ul><li>Bentuk umum: $a_1x+b_1y+c_1z=d_1$, disertai dua persamaan independen lainnya.</li><li>Eliminasi: kalikan persamaan agar koefisien salah satu variabel sama, lalu jumlahkan atau kurangkan.</li><li>Solusi akhir harus memenuhi ketiga persamaan sekaligus.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> cari dua persamaan dengan koefisien yang mudah disamakan; eliminasi variabel yang paling sederhana lebih dahulu.</p><p><strong>Batasnya:</strong> jangan berhenti setelah memperoleh dua variabel. Cek solusi akhir pada semua informasi konteks.</p>',
      example: {
        title: 'Contoh — tiga harga bahan',
        prompt: 'Harga tiga bahan x, y, z (ribu rupiah) memenuhi 2x+y+z=16, x+2y+z=15, dan x+y+2z=17. Tentukan ketiganya.',
        steps: ['Kurangkan persamaan pertama dari kedua: −x+y=−1, jadi y=x−1.', 'Kurangkan persamaan pertama dari ketiga: −x+z=1, jadi z=x+1.', 'Masukkan ke persamaan pertama: 2x+(x−1)+(x+1)=16, maka x=4, y=3, z=5. Cek: ketiga persamaan terpenuhi.']
      },
      pitfalls: ['Salah tanda ketika mengurangkan persamaan.', 'Menyamakan total belanja dengan harga satu barang.', 'Tidak mengecek konsistensi solusi di persamaan ketiga.'],
      practice: { prompt: 'Jika x+y+z=9, 2x+y+z=11, dan x+2y+z=12, berapa nilai z?', options: ['2', '3', '4', '5'], answer: 2, solution: 'Persamaan kedua dikurangi pertama memberi x=2. Persamaan ketiga dikurangi pertama memberi y=3. Maka z=9−2−3=4.' }
    },
    {
      id: 'fungsi-model', number: '14', area: 'Aljabar', time: '13 menit',
      advancedHtml: `<p><strong>Domain dan range:</strong> domain adalah input yang diperbolehkan; range adalah output yang mungkin. Konteks dapat membatasi waktu, kapasitas, atau jumlah menjadi bilangan bulat, jadi tidak semua titik grafik boleh dipakai.</p><p><strong>Fungsi bertahap:</strong> tulis interval aturan tanpa tumpang tindih, misalnya $0\\le x\\le5$ dan $x>5$. Uji tepat pada ambang untuk memastikan tarif yang berlaku.</p><p><strong>Pertidaksamaan kuadrat:</strong> akar membagi garis bilangan menjadi interval. Uji satu nilai dalam setiap interval; pada akar berulang, tanda tidak berubah. Setelah itu, potong jawaban dengan domain konteks.</p>`,
      title: 'Fungsi, grafik, kuadrat, dan pertidaksamaan',
      summary: 'Baca aturan perubahan, tarif bertahap, titik potong, dan batas nilai dari persamaan maupun grafik.',
      concepts: ['Fungsi linear dan kuadrat', 'Fungsi bertahap', 'Pertidaksamaan dan titik batas'],
      conceptHtml: `
        <p>Fungsi memetakan input ke output. Pada fungsi linear, gradien menyatakan perubahan output untuk setiap satu unit input, sedangkan konstanta adalah nilai awal. Grafik membantu melihat titik potong, kenaikan, dan kapan dua skenario sama.</p>
        <p>Fungsi kuadrat dapat dipahami lewat akar, sumbu simetri, dan puncak. Fungsi bertahap berganti aturan pada ambang tertentu, misalnya tarif dasar lalu biaya tambahan. Tulis rentang berlakunya agar nilai di batas tidak dihitung dua kali.</p>
        <p>Pertidaksamaan memodelkan batas seperti anggaran, kapasitas, atau target minimum. Tanda “kurang dari” berbeda dari “kurang dari atau sama dengan”; untuk jumlah benda, solusi biasanya bilangan bulat.</p>`,
      formulaHtml: '<ul><li>Linear: $f(x)=mx+b$; $m$ adalah laju perubahan dan $b=f(0)$.</li><li>Kuadrat: $ax^2+bx+c=0$ dengan $a\\ne0$. Untuk faktorisasi, cari akar yang jumlahnya $-b/a$ dan hasil kalinya $c/a$.</li><li>Titik potong dua grafik ditemukan dengan menyamakan nilai kedua fungsi.</li><li>Untuk pertidaksamaan, uji nilai batas dan satu nilai di setiap interval.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> untuk titik impas dua tarif, samakan biaya keduanya; untuk batas anggaran, tulis “total biaya ≤ anggaran” sebelum menyelesaikan.</p><p><strong>Batasnya:</strong> akar persamaan kuadrat bukan selalu solusi konteks; waktu, panjang, dan jumlah tidak boleh negatif jika konteks melarangnya.</p>',
      example: {
        title: 'Contoh — tarif perjalanan bertahap',
        prompt: 'Biaya kendaraan Rp6.000 ditambah Rp2.000 per km untuk 5 km pertama, lalu Rp1.500 per km setelahnya. Berapa biaya perjalanan 8 km?',
        steps: ['Bagian awal: Rp6.000 + 5 × Rp2.000 = Rp16.000.', 'Jarak tambahan = 8 − 5 = 3 km, biayanya 3 × Rp1.500 = Rp4.500.', 'Total biaya = Rp16.000 + Rp4.500 = Rp20.500.']
      },
      pitfalls: ['Menggunakan satu aturan tarif untuk seluruh rentang.', 'Membalik tanda pertidaksamaan saat mengalikan dengan bilangan negatif.', 'Mengabaikan makna gradien dan titik potong dalam konteks.'],
      practice: { prompt: 'Akar persamaan x² − 5x + 6 = 0 adalah …', options: ['1 dan 6', '2 dan 3', '−2 dan −3', '1 dan 5'], answer: 1, solution: 'Faktorkan x²−5x+6 menjadi (x−2)(x−3)=0. Jadi akarnya x=2 dan x=3.' }
    },
    {
      id: 'laju-kerja-campuran', number: '15', area: 'Pemodelan', time: '12 menit',
      advancedHtml: `<p><strong>Kecepatan rata-rata:</strong> total jarak dibagi total waktu. Untuk dua ruas dengan jarak sama dan laju $v_1,v_2$, rata-rata umumnya bukan $(v_1+v_2)/2$; jumlahkan waktunya dahulu.</p><p><strong>Kerja bersama:</strong> jika A menuntaskan pekerjaan dalam $a$ jam, lajunya $1/a$ pekerjaan per jam. Laju bersama A dan B adalah $1/a+1/b$, selama pekerjaan dan produktivitasnya sebanding.</p><p><strong>Campuran:</strong> lacak jumlah zat murni. Jika volume aditif, konsentrasi akhir $=(c_1V_1+c_2V_2)/(V_1+V_2)$. Samakan satuan volume dan tulis konsentrasi sebagai desimal saat mengalikan.</p>`,
      title: 'Laju, waktu, kerja, dan campuran',
      summary: 'Hubungkan jarak-waktu, produktivitas, debit, dan rasio campuran tanpa tertukar senilai atau berbalik nilai.',
      concepts: ['Jarak, waktu, dan kecepatan', 'Laju kerja dan debit', 'Campuran serta rasio'],
      conceptHtml: `
        <p>Untuk gerak berkecepatan tetap, jarak bertambah sebanding dengan waktu. Untuk pekerjaan tetap, makin banyak pekerja biasanya makin singkat waktunya jika produktivitas tiap orang sama dan mereka bekerja serentak.</p>
        <p>Laju menyatakan perubahan per satuan waktu, misalnya liter per menit atau kilometer per jam. Saat laju berubah, bagi perjalanan/pekerjaan menjadi beberapa tahap dan hitung setiap tahap terpisah.</p>
        <p>Campuran harus dihitung berdasarkan banyak bahan, bukan hanya perbandingan nama. Persentase konsentrasi = jumlah zat tertentu ÷ total campuran.</p>`,
      formulaHtml: '<ul><li>Gerak dengan laju tetap: $s=vt$, sehingga $v=\\frac{s}{t}$ dan $t=\\frac{s}{v}$.</li><li>Kerja: $W=rt$; jika beberapa pekerja bekerja bersamaan dengan laju tetap, $r_{\\text{total}}=r_1+r_2+\\cdots$.</li><li>Konsentrasi volume: $\\frac{V_{\\text{zat}}}{V_{\\text{campuran}}}\\times100\\%$, dengan satuan volume yang sama.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> ubah semua waktu ke satuan yang sama, lalu tulis laju sebagai “per 1 satuan”. Untuk pekerja identik, jumlah pekerja × waktu tetap sebanding dengan pekerjaan.</p><p><strong>Batasnya:</strong> hubungan berbalik nilai hanya berlaku jika total pekerjaan tetap dan produktivitas setiap pekerja sama.</p>',
      example: {
        title: 'Contoh — dua mesin pengisi',
        prompt: 'Mesin A mengisi 18 botol per menit dan mesin B 12 botol per menit. Berapa lama keduanya mengisi 450 botol jika bekerja bersama?',
        steps: ['Laju gabungan = 18 + 12 = 30 botol per menit.', 'Waktu = 450 ÷ 30 = 15 menit.', 'Cek: 30 botol/menit × 15 menit = 450 botol.']
      },
      pitfalls: ['Menjumlahkan waktu, padahal yang bisa dijumlahkan adalah laju kerja.', 'Mencampur km/jam dengan m/detik.', 'Menganggap dua alat/pekerja selalu punya laju sama tanpa dinyatakan.'],
      practice: { prompt: 'Empat pekerja menyelesaikan pekerjaan dalam 5 jam. Dengan laju sama, berapa jam yang diperlukan 8 pekerja?', options: ['1,25 jam', '2,5 jam', '4 jam', '10 jam'], answer: 1, solution: 'Beban kerja = 4 × 5 = 20 pekerja-jam. Waktu untuk 8 pekerja = 20 ÷ 8 = 2,5 jam.' }
    },
    {
      id: 'geometri-koordinat', number: '16', area: 'Geometri', time: '12 menit',
      advancedHtml: `<p><strong>Persamaan garis:</strong> bentuk $y=mx+c$ menunjukkan gradien dan titik potong sumbu-y. Garis sejajar memiliki gradien sama; garis tak vertikal yang tegak lurus memenuhi $m_1m_2=-1$.</p><p><strong>Luas dari koordinat:</strong> untuk tiga titik, $L=\\frac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$. Nilai mutlak penting karena urutan titik dapat membuat hasil bertanda negatif.</p><p><strong>Jarak terpendek:</strong> jika garis ditulis $Ax+By+C=0$, jarak titik $(x_0,y_0)$ adalah $|Ax_0+By_0+C|/\\sqrt{A^2+B^2}$. Ini mengukur jarak tegak lurus, bukan jarak ke sembarang titik pada garis.</p>`,
      title: 'Geometri koordinat dan jarak',
      summary: 'Gunakan bidang koordinat untuk menghitung jarak, titik tengah, gradien, dan luas sederhana.',
      concepts: ['Koordinat titik', 'Jarak dan titik tengah', 'Gradien dan garis'],
      conceptHtml: `
        <p>Bidang koordinat mengubah posisi menjadi pasangan (x,y). Selisih horizontal dan vertikal membentuk segitiga siku-siku, sehingga jarak dua titik dapat dihitung dengan Pythagoras.</p>
        <p>Titik tengah mengambil rata-rata koordinat x dan rata-rata koordinat y. Gradien mengukur perubahan vertikal per perubahan horizontal. Gradien positif naik ke kanan; gradien negatif turun ke kanan.</p>
        <p>Jika gambar tidak berskala, jangan mengukur dengan mata. Gunakan angka koordinat dan tanda sumbu.</p>`,
      formulaHtml: '<ul><li>Jarak $A(x_1,y_1)$ ke $B(x_2,y_2)$: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.</li><li>Titik tengah: $M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$.</li><li>Gradien: $m=\\frac{y_2-y_1}{x_2-x_1}$, jika $x_2\\ne x_1$.</li><li>Luas segitiga: $L=\\frac{1}{2}\\times\\text{alas}\\times\\text{tinggi}$.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> untuk jarak dengan selisih kecil, kenali tripel Pythagoras seperti 3-4-5. Titik tengah dapat dihitung per koordinat, bukan dengan menggambar.</p><p><strong>Batasnya:</strong> garis vertikal memiliki gradien tak terdefinisi karena pembaginya nol.</p>',
      example: {
        title: 'Contoh — jarak dua halte di peta koordinat',
        prompt: 'Halte A berada di (2,1) dan halte B di (8,9). Berapa jarak lurusnya dalam satuan grid?',
        steps: ['Selisih x = 8−2 = 6; selisih y = 9−1 = 8.', 'Jarak = √(6²+8²) = √100.', 'Jarak lurus = 10 satuan grid.']
      },
      pitfalls: ['Menukar koordinat x dan y.', 'Menghitung jarak dengan menjumlah selisih tanpa mempertimbangkan diagonal.', 'Membagi dengan nol untuk garis vertikal.'],
      practice: { prompt: 'Titik tengah dari A(−1,4) dan B(5,0) adalah …', options: ['(2,2)', '(3,2)', '(2,4)', '(−3,2)'], answer: 0, solution: 'Rata-rata koordinat x = (−1+5)/2 = 2; rata-rata y = (4+0)/2 = 2. Titik tengahnya (2,2).' }
    },
    {
      id: 'membaca-data', number: '17', area: 'Data', time: '11 menit',
      advancedHtml: `<p><strong>Indeks:</strong> tetapkan periode dasar bernilai 100, lalu $I_t=(nilai_t/nilai_{dasar})\\times100$. Indeks 125 berarti nilainya 25% di atas periode dasar, bukan naik 125%.</p><p><strong>Grafik yang menyesatkan:</strong> periksa apakah sumbu dipotong, intervalnya seragam, satuannya berubah, atau gambar memakai luas/volume untuk menunjukkan nilai. Bandingkan angka dan selisih sebenarnya sebelum menilai kesan visual.</p><p><strong>Rata-rata persentase:</strong> bobotnya harus sesuai sasaran—misalnya jumlah orang, volume, atau durasi. Dua persentase kelompok tidak dapat dirata-ratakan biasa jika ukuran kelompok berbeda.</p>`,
      title: 'Membaca tabel, grafik, dan ringkasan data',
      summary: 'Ambil informasi dari tabel/grafik, hitung proporsi dan rata-rata tertimbang, lalu bandingkan dengan acuan yang benar.',
      concepts: ['Tabel dan grafik', 'Rata-rata tertimbang', 'Persentase dan perubahan'],
      conceptHtml: `
        <p>Baca judul, label sumbu, satuan, periode, dan sumber data sebelum menghitung. Periksa skala sumbu: grafik yang dimulai dari nilai bukan nol dapat membuat perubahan tampak jauh lebih besar.</p>
        <p>Rata-rata beberapa kelompok harus dibobot dengan jumlah anggota tiap kelompok. Rata-rata dari dua rata-rata hanya tepat jika ukuran kelompoknya sama.</p>
        <p>Persentase perubahan memerlukan nilai acuan. Jika membandingkan kontribusi suatu kategori terhadap total, pembaginya adalah total keseluruhan pada kategori/periode yang sama.</p>`,
      formulaHtml: '<ul><li>Rata-rata tertimbang: $\\bar{x}=\\frac{\\sum_i w_ix_i}{\\sum_i w_i}$.</li><li>Persentase bagian: $\\frac{\\text{bagian}}{\\text{total}}\\times100\\%$.</li><li>Perubahan relatif: $\\frac{\\text{nilai baru}-\\text{nilai awal}}{\\text{nilai awal}}\\times100\\%$.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> buat kolom nilai, frekuensi/bobot, dan hasil kali. Untuk grafik, tulis angka yang dibaca beserta satuannya sebelum membandingkan.</p><p><strong>Batasnya:</strong> korelasi atau kenaikan bersamaan belum membuktikan bahwa satu faktor menyebabkan faktor lain.</p>',
      example: {
        title: 'Contoh — rata-rata tertimbang kelas',
        prompt: 'Kelompok pertama memiliki 20 siswa dengan rata-rata 70. Kelompok kedua 30 siswa dengan rata-rata 80. Berapa rata-rata gabungan?',
        steps: ['Jumlah nilai kelompok pertama = 20 × 70 = 1.400.', 'Jumlah nilai kelompok kedua = 30 × 80 = 2.400.', 'Rata-rata gabungan = (1.400+2.400)/(20+30) = 76.']
      },
      pitfalls: ['Merata-ratakan mean kelompok tanpa memperhatikan ukuran kelompok.', 'Salah membaca satuan dan rentang sumbu.', 'Menggunakan nilai awal yang salah sebagai pembagi persen.'],
      practice: { prompt: 'Nilai 60 diperoleh 2 siswa dan nilai 80 diperoleh 3 siswa. Rata-rata gabungan adalah …', options: ['68', '70', '72', '76'], answer: 2, solution: '(2×60 + 3×80)/(2+3) = 360/5 = 72.' }
    },
    {
      id: 'peluang-bersyarat', number: '18', area: 'Peluang', time: '13 menit',
      advancedHtml: `<p><strong>Peluang total:</strong> jika $A_1,\\ldots,A_k$ membagi seluruh sumber secara saling lepas, maka $P(B)=\\sum_iP(A_i)P(B\\mid A_i)$. Nilai ini sering menjadi penyebut dalam Bayes.</p><p><strong>Bayes memperbarui peluang awal:</strong> peluang posterior bergantung pada prevalensi awal dan seberapa sering bukti muncul jika suatu kondisi benar. Bukti yang sama bisa memberi posterior berbeda pada populasi dengan tingkat dasar berbeda.</p><p><strong>Frekuensi alami:</strong> ubah peluang ke jumlah dari 1.000 orang, lalu hitung jalur yang memenuhi. Ini membantu membandingkan kasus benar positif, positif palsu, dan total hasil positif.</p>`,
      title: 'Peluang bersyarat, pohon, dan Bayes',
      summary: 'Perbarui ruang sampel setelah informasi baru; bedakan kejadian independen dari pengambilan tanpa pengembalian.',
      concepts: ['Peluang bersyarat', 'Diagram pohon dan peluang total', 'Bayes dan interpretasi informasi'],
      conceptHtml: `
        <p>Peluang bersyarat menjawab peluang A setelah diketahui B terjadi. Setelah kondisi B diketahui, ruang sampel menyempit ke hasil yang memenuhi B.</p>
        <p>Diagram pohon membantu menghitung rangkaian kejadian: kalikan peluang sepanjang satu jalur, lalu jumlahkan jalur yang memenuhi. Tanpa pengembalian, peluang pada langkah berikutnya berubah.</p>
        <p>Teorema Bayes membalik arah informasi: dari peluang melihat bukti jika sumber tertentu diketahui, kita mencari peluang sumber tersebut setelah bukti terlihat. Gunakan frekuensi hipotetis (misalnya 1.000 kasus) untuk memeriksa hasilnya.</p>`,
      formulaHtml: '<ul><li>Peluang bersyarat: $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$, dengan $P(B)>0$.</li><li>Untuk satu jalur berurutan: $P(A\\cap B)=P(A)P(B\\mid A)$.</li><li>Bayes: $P(A\\mid B)=\\frac{P(A)P(B\\mid A)}{P(B)}$.</li><li>Independen berarti $P(A\\mid B)=P(A)$; pengambilan tanpa pengembalian biasanya mengubah peluang berikutnya.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> gambar pohon kecil dan tulis peluang baru di setiap cabang. Untuk Bayes, bayangkan 1.000 kejadian agar pembilang dan totalnya terlihat.</p><p><strong>Batasnya:</strong> jangan menyamakan P(A|B) dengan P(B|A); umumnya nilainya berbeda.</p>',
      example: {
        title: 'Contoh — kartu tanpa pengembalian',
        prompt: 'Sebuah kotak berisi 4 kartu merah dan 2 kartu biru. Dua kartu diambil tanpa pengembalian. Jika kartu pertama biru, berapa peluang kartu kedua merah?',
        steps: ['Setelah kartu biru diambil, tersisa 4 merah dan 1 biru, total 5 kartu.', 'Informasi “pertama biru” memperbarui ruang sampel untuk pengambilan kedua.', 'Peluang kartu kedua merah = 4/5.']
      },
      pitfalls: ['Membalik kondisi pada peluang bersyarat.', 'Menggunakan jumlah kartu awal setelah ada pengambilan tanpa pengembalian.', 'Menjumlah peluang jalur yang tumpang tindih tanpa aturan gabungan.'],
      practice: { prompt: 'Jika kartu pertama biru, peluang kartu kedua merah pada contoh adalah …', options: ['1/5', '2/3', '4/5', '4/6'], answer: 2, solution: 'Setelah satu kartu biru keluar, tersisa 4 kartu merah dari total 5 kartu. Jadi peluangnya 4/5.' }
    },
    {
      id: 'optimasi-keputusan', number: '19', area: 'Pemodelan', time: '12 menit',
      advancedHtml: `<p><strong>Optimasi linear dua variabel:</strong> gambar garis batas, tentukan setengah bidang yang memenuhi tiap kendala, lalu ambil irisannya sebagai daerah layak. Untuk daerah poligon tertutup dan tujuan linear, nilai optimum terjadi di salah satu titik sudut.</p><p><strong>Solusi integer:</strong> jumlah paket atau orang biasanya bulat. Jika titik optimum kontinu pecahan, uji kandidat bulat yang memenuhi semua kendala di sekitarnya; pembulatan biasa dapat melanggar batas.</p><p><strong>Trade-off:</strong> jika keputusan terbaik bergantung pada biaya, waktu, dan manfaat, nyatakan kriteria yang diprioritaskan. “Optimal” selalu berarti terbaik menurut fungsi tujuan tertentu.</p>`,
      title: 'Kendala, optimasi, dan keputusan',
      summary: 'Ubah batas anggaran, kapasitas, atau target menjadi pertidaksamaan, lalu pilih keputusan yang layak dan terbaik.',
      concepts: ['Variabel keputusan', 'Kendala dan daerah layak', 'Nilai maksimum/minimum dan batas bulat'],
      conceptHtml: `
        <p>Masalah optimasi memiliki sesuatu yang ingin diperbesar/diperkecil (tujuan) dan aturan yang harus dipatuhi (kendala). Definisikan variabel keputusan, tulis kendala, lalu tentukan nilai yang dibandingkan.</p>
        <p>Untuk variabel bilangan bulat seperti jumlah paket, pecahkan batas lalu bulatkan ke arah yang tetap memenuhi semua syarat. Uji kandidat di sekitar batas.</p>
        <p>Jika grafik beberapa kendala digunakan, daerah layak adalah irisan semua daerah yang memenuhi. Untuk fungsi tujuan linear pada daerah poligon, kandidat optimum berada di titik sudut; hitung nilai tujuan pada tiap titik kandidat.</p>`,
      formulaHtml: '<ul><li>Model: maksimalkan atau minimalkan $Z=ax+by$ dengan kendala, misalnya $px+qy\\le B$.</li><li>Jumlah objek: $x\\ge0$ dan sering kali $x\\in\\mathbb{Z}$.</li><li>Periksa setiap kandidat terhadap semua kendala, bukan hanya satu.</li></ul>',
      shortcutHtml: '<p><strong>Cara cepat:</strong> untuk satu batas anggaran dan tujuan memaksimalkan jumlah barang, ambil pilihan minimum yang diwajibkan, lalu gunakan sisa anggaran untuk barang tujuan.</p><p><strong>Batasnya:</strong> pembulatan biasa tidak selalu menjaga kendala. Untuk jumlah barang, cek bilangan bulat di sekitar hasil.</p>',
      example: {
        title: 'Contoh — belanja dengan batas anggaran',
        prompt: 'Anggaran Rp50.000 dipakai membeli buku seharga Rp8.000 dan pena Rp3.000. Harus membeli sedikitnya 4 pena. Berapa buku terbanyak yang dapat dibeli?',
        steps: ['Misalkan b buku dan p pena. Kendala biaya: 8.000b + 3.000p ≤ 50.000; p ≥ 4.', 'Agar buku maksimal, pilih jumlah pena minimum p=4. Biayanya Rp12.000.', 'Sisa Rp38.000, jadi buku terbanyak floor(38.000/8.000)=4. Cek: total Rp44.000; 5 buku akan membuat total Rp52.000.']
      },
      pitfalls: ['Mengabaikan syarat minimum saat memaksimalkan barang lain.', 'Menerima solusi pecahan untuk benda yang harus dihitung satuan.', 'Memilih nilai terbaik yang ternyata melanggar kendala lain.'],
      practice: { prompt: 'Dengan anggaran Rp100.000, paket A Rp12.000 dan paket B Rp5.000. Harus membeli sedikitnya 6 paket B. Paket A terbanyak yang bisa dibeli adalah …', options: ['4', '5', '6', '7'], answer: 1, solution: 'Enam paket B menghabiskan Rp30.000, sisa Rp70.000. floor(70.000/12.000)=5 paket A.' }
    },
    {
      id: 'membaca-klaim-data', number: '20', area: 'Penalaran', time: '9 menit',
      title: 'Membaca klaim dan mengecek keputusan',
      summary: 'Uji setiap pernyataan dengan data yang relevan, aturan yang tepat, dan kondisi batas.',
      concepts: ['Benar/salah per pernyataan', 'Membandingkan skenario', 'Mengecek asumsi dan batas'],
      conceptHtml: `
        <p>Untuk soal beberapa pernyataan, nilai setiap klaim satu per satu. Lingkari kata pembatas seperti “selalu”, “paling sedikit”, “tepat”, “lebih dari”, atau “setelah”. Satu kata dapat mengubah benar-salahnya klaim.</p>
        <p>Untuk membandingkan dua skenario, hitung ukuran yang sama pada keduanya: total biaya, rasio, waktu, atau risiko. Jangan membandingkan harga sebelum biaya tambahan dengan harga akhir yang sudah termasuk ongkir.</p>
        <p>Jika klaim memuat nilai ekstrem, batas minimum/maksimum, atau “setidaknya satu”, uji kasus tepi. Contoh: ambang 10 mungkin termasuk atau tidak, bergantung pada tandanya: ≤, <, ≥, atau >.</p>`,
      formulaHtml: `<ul><li>Selisih relatif terhadap acuan: $\\frac{A-B}{B}\\times100\\%$, jika $B$ adalah pembanding yang dimaksud.</li><li>“Setidaknya satu” sering lebih mudah diuji lewat $1-P(\\text{tidak ada})$.</li><li>Bandingkan total akhir dengan komponen yang sama dan satuan yang sama.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> buat checklist klaim: data yang dipakai → operasi → hasil → batas → keputusan. Tandai pernyataan “salah” segera setelah menemukan satu kontracontoh yang memenuhi kondisi soal.</p><p><strong>Batasnya:</strong> satu contoh dapat membantah klaim universal (“selalu”), tetapi tidak cukup membuktikan klaim universal. Untuk membuktikan “selalu”, gunakan aturan yang mencakup semua kasus.</p>`,
      example: {
        title: 'Contoh — memilih tarif perjalanan',
        prompt: 'Tarif A Rp4.000 per km tanpa biaya tetap. Tarif B Rp2.500 per km ditambah Rp9.000 biaya awal. Kapan Tarif B lebih murah?',
        steps: ['Misalkan jarak x km. Biaya A = 4.000x; biaya B = 2.500x + 9.000.', 'B lebih murah jika 2.500x + 9.000 < 4.000x.', 'Maka 9.000 < 1.500x, jadi x > 6. Pada tepat 6 km biayanya sama; B lebih murah hanya di atas 6 km.']
      },
      pitfalls: ['Menyamakan “lebih besar dari” dengan “lebih besar atau sama dengan”.', 'Menggunakan persen tanpa menyebut nilai acuannya.', 'Menganggap kecenderungan dari beberapa data sebagai hukum pasti.'],
      practice: { prompt: 'Pernyataan: “Tarif B selalu lebih murah.” Dari contoh, kesimpulan paling tepat adalah …', options: ['Benar untuk semua jarak', 'Benar jika jarak lebih dari 6 km', 'Benar jika jarak kurang dari 6 km', 'Tidak pernah benar'], answer: 1, solution: 'Tarif B lebih murah hanya saat x > 6 km. Pada 6 km sama, dan di bawah 6 km Tarif A lebih murah.' }
    },
    {
      id: 'simulasi-integratif', number: '21', area: 'Evaluasi akhir', time: '25 menit',
      title: 'Evaluasi akhir — PM terpadu',
      summary: 'Rangkai model, hitung, dan interpretasi lintas topik. Semua kasus pada evaluasi ini dibuat khusus untuk latihan.',
      concepts: ['Memilih model dari konteks', 'Menggabungkan beberapa konsep', 'Menafsirkan hasil dan batas'],
      conceptHtml: `
        <p>Uji akhir ini bukan kumpulan rumus terpisah. Untuk setiap konteks, tandai target, data, batas, serta satuan. Pilih model yang paling sederhana dan cek kembali hasilnya pada cerita.</p>
        <p>Kerjakan tanpa membuka pembahasan terlebih dahulu. Jika salah, catat apakah sumbernya membaca konteks, memilih model, melakukan hitungan, atau menafsirkan hasil.</p>
        <p>Nilai yang tersimpan adalah hasil latihan lokal, bukan nilai resmi atau prediksi skor UTBK.</p>`,
      formulaHtml: '<ul><li>Alur kerja: konteks $\\rightarrow$ model $\\rightarrow$ hitung $\\rightarrow$ cek batas dan satuan $\\rightarrow$ simpulan.</li><li>Gunakan rasio, persamaan, geometri, data, atau peluang sesuai struktur masalah—tidak perlu memaksakan semua rumus ke setiap soal.</li></ul>',
      shortcutHtml: '<p><strong>Strategi waktu:</strong> lewati sementara satu langkah yang macet, tandai informasi kunci, lalu kembali setelah mengerjakan bagian yang lebih mudah.</p><p><strong>Batasnya:</strong> cara cepat membantu hitungan, tetapi tidak menggantikan pembacaan kondisi dan satuan.</p>',
      example: {
        title: 'Contoh — memilih layanan perjalanan',
        prompt: 'Layanan A mengenakan Rp5.000 biaya awal dan Rp4.000 per km. Layanan B Rp14.000 biaya awal dan Rp2.500 per km. Bandingkan biaya untuk perjalanan 8 km.',
        steps: ['A: 5.000 + 8×4.000 = Rp37.000.', 'B: 14.000 + 8×2.500 = Rp34.000.', 'B lebih murah Rp3.000 untuk 8 km. Kesimpulan hanya berlaku untuk jarak yang dibandingkan; titik impas perlu dihitung jika ditanya untuk semua jarak.']
      },
      pitfalls: ['Terburu-buru memilih rumus sebelum mengenali hubungan.', 'Mengabaikan kata “setidaknya”, “tepat”, atau “lebih dari”.', 'Menganggap skor evaluasi ini sebagai skala resmi UTBK.'],
      practice: { prompt: 'Sebuah harga Rp150.000 mendapat potongan 20%. Harga setelah diskon adalah …', options: ['Rp30.000', 'Rp120.000', 'Rp130.000', 'Rp180.000'], answer: 1, solution: 'Yang dibayar 80% × Rp150.000 = Rp120.000.' },
      practiceSet: [
        { prompt: 'Sebuah harga Rp150.000 mendapat potongan 20%. Harga setelah diskon adalah …', options: ['Rp30.000', 'Rp120.000', 'Rp130.000', 'Rp180.000'], answer: 1, solution: 'Yang dibayar 80% × Rp150.000 = Rp120.000.' },
        { prompt: 'Sebuah wadah memuat 3/5 dari kapasitas 20 liter. Isinya adalah …', options: ['8 liter', '10 liter', '12 liter', '15 liter'], answer: 2, solution: '3/5 × 20 = 12 liter.' },
        { prompt: 'Persamaan biaya 2x + 3y = 11, x + 2y = 7 memiliki solusi …', options: ['x=1, y=3', 'x=2, y=2', 'x=3, y=1', 'x=4, y=1'], answer: 0, solution: 'Dari persamaan pertama dikurangi dua kali persamaan kedua, −y=−3 sehingga y=3. Lalu x+6=7, jadi x=1.' },
        { prompt: 'Dua segitiga sebangun memiliki rasio sisi kecil : besar = 2 : 3. Jika sisi kecil 8 cm, sisi bersesuaian pada segitiga besar adalah …', options: ['10 cm', '12 cm', '14 cm', '16 cm'], answer: 1, solution: 'Faktor skala = 3/2, jadi 8×3/2 = 12 cm.' },
        { prompt: 'Luas seperempat lingkaran berjari-jari 4 cm adalah …', options: ['4π cm²', '8π cm²', '12π cm²', '16π cm²'], answer: 0, solution: 'Luas penuh = π×4² = 16π. Seperempatnya 4π cm².' },
        { prompt: 'Barisan 2; 2,5; 3; … memiliki suku ke-6 …', options: ['4', '4,5', '5', '5,5'], answer: 1, solution: 'Ada lima kenaikan dari suku pertama: 2 + 5×0,5 = 4,5.' },
        { prompt: 'Dalam kantong ada 3 kartu merah dan 2 biru. Peluang mengambil tepat satu kartu biru dalam dua pengambilan tanpa pengembalian adalah …', options: ['2/5', '1/2', '3/5', '4/5'], answer: 2, solution: 'Merah lalu biru: 3/5×2/4=3/10. Biru lalu merah: 2/5×3/4=3/10. Total 3/5.' },
        { prompt: 'Nilai 60 diperoleh 2 orang dan nilai 80 diperoleh 3 orang. Rata-rata kelompok adalah …', options: ['68', '70', '72', '76'], answer: 2, solution: '(2×60+3×80)/(2+3)=360/5=72.' },
        { prompt: 'Titik A(1,2) dan B(4,6) berjarak … satuan.', options: ['4', '5', '6', '7'], answer: 1, solution: 'Selisih koordinatnya 3 dan 4; jarak = √(3²+4²)=5.' },
        { prompt: 'Anggaran Rp100.000. Paket A Rp12.000 dan paket B Rp5.000; harus membeli sedikitnya 6 paket B. Banyak paket A maksimum adalah …', options: ['4', '5', '6', '7'], answer: 1, solution: 'Enam paket B memakai Rp30.000, sisa Rp70.000. Maksimum paket A = floor(70.000/12.000)=5.' }
      ]
    },
    {
      id: 'kuadrat-optimasi', number: '22', area: 'Aljabar SMA', time: '16 menit', level: 'Pendalaman SMA',
      title: 'Fungsi kuadrat: grafik, titik puncak, dan optimasi',
      summary: 'Baca akar, arah grafik, dan nilai maksimum/minimum dari model kuadrat dalam konteks biaya atau keuntungan.',
      concepts: ['Akar dan diskriminan', 'Titik puncak parabola', 'Domain konteks dan nilai optimum'],
      conceptHtml: `<p>Fungsi kuadrat berbentuk $f(x)=ax^2+bx+c$. Grafiknya parabola: jika $a>0$ terbuka ke atas dan punya nilai minimum; jika $a<0$ terbuka ke bawah dan punya nilai maksimum. Nilai puncak hanya bermakna jika nilai $x$ itu diizinkan oleh konteks.</p><figure class="pm-learning-diagram"><svg viewBox="0 0 360 210" role="img" aria-labelledby="pm-quad-title pm-quad-desc"><title id="pm-quad-title">Parabola dengan titik puncak dan dua akar</title><desc id="pm-quad-desc">Grafik parabola terbuka ke bawah, memotong sumbu x di dua akar dan mencapai maksimum di titik puncak.</desc><path class="pm-diagram-axis" d="M35 165 H330 M70 190 V25"/><path class="pm-diagram-highlight" d="M80 145 Q190 5 300 145"/><circle class="pm-diagram-dot" cx="190" cy="75" r="5"/><circle class="pm-diagram-dot" cx="111" cy="165" r="4"/><circle class="pm-diagram-dot" cx="269" cy="165" r="4"/><text class="pm-diagram-label" x="194" y="65">puncak</text><text class="pm-diagram-label" x="105" y="184">akar</text><text class="pm-diagram-label" x="265" y="184">akar</text></svg><figcaption>Akar menunjukkan saat nilai fungsi nol; titik puncak menunjukkan nilai ekstrem parabola.</figcaption></figure><p>Ada tiga pertanyaan berbeda yang sering tercampur: kapan $f(x)=0$ (akar), berapa $f(x)$ pada input tertentu (nilai fungsi), dan input mana yang membuat nilai terbesar/terkecil (optimasi).</p>`,
      formulaHtml: `<ul><li>Diskriminan: $D=b^2-4ac$. Jika $D>0$ ada dua akar real, $D=0$ satu akar kembar, dan $D<0$ tidak ada akar real.</li><li>Sumbu simetri: $x_p=-\frac{b}{2a}$. Titik puncak: $(x_p,f(x_p))$.</li><li>Bentuk puncak: $f(x)=a(x-h)^2+k$; puncaknya $(h,k)$.</li><li>Jika $a<0$, maksimum global pada parabola terjadi di puncak; jika $a>0$, minimum global di puncak.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat untuk model $ax^2+bx+c$:</strong> hitung $-b/(2a)$ untuk kandidat input optimum, lalu substitusikan kembali ke fungsi. Ini lebih langsung daripada mencoba banyak nilai.</p><p><strong>Periksa batas konteks:</strong> jumlah barang mungkin hanya bilangan bulat dan tidak boleh negatif. Jika domain dibatasi, bandingkan titik puncak dengan kedua ujung interval yang diizinkan.</p>`,
      example: { title: 'Contoh — memilih jumlah produksi', prompt: 'Keuntungan sebuah produk (dalam ribuan rupiah) dimodelkan $P(q)=-2q^2+120q-1.000$, dengan $q$ jumlah puluhan unit. Berapa keuntungan maksimum menurut model, dan pada nilai $q$ berapa?', steps: ['Koefisien $a=-2<0$, jadi parabola terbuka ke bawah dan puncaknya memberi maksimum.', 'Input puncak $q=-120/[2(-2)]=30$.', 'Substitusi: $P(30)=-2(900)+120(30)-1.000=800$. Jadi keuntungan model maksimum Rp800.000 pada $q=30$ (yakni 300 unit jika q memang satuan puluhan).', 'Maknai satuan variabel sebelum menyimpulkan jumlah barang; bila q dibatasi atau harus integer, cek domainnya.'] },
      pitfalls: ['Mengambil nilai $x$ puncak sebagai nilai maksimum fungsi; keduanya berbeda.', 'Menganggap puncak selalu dapat dipakai tanpa mengecek domain atau batas produksi.', 'Melaporkan hasil model tanpa mengembalikan satuan ribuan/puluhan ke konteks.'],
      advancedHtml: `<p><strong>Hubungan akar dan puncak:</strong> untuk dua akar $r_1,r_2$, sumbu simetri berada di tengahnya, $x_p=(r_1+r_2)/2$. Jika akar mudah ditemukan, sifat simetri ini memberi cek cepat untuk jawaban puncak.</p><p><strong>Mengapa rumus puncak bekerja?</strong> Lengkapi kuadrat: $ax^2+bx+c=a(x+\frac{b}{2a})^2+c-\frac{b^2}{4a}$. Suku kuadrat mencapai nilai terkecil 0; arah tanda $a$ menentukan apakah itu minimum atau maksimum.</p><p><strong>Untuk model potongan:</strong> jika biaya atau tarif berubah setelah ambang, tiap rentang punya fungsi sendiri. Cari kandidat optimum di titik puncak dalam rentang tersebut dan di batas-batas rentangnya.</p>`,
      practiceSet: [
        { prompt: 'Untuk $f(x)=x^2-6x+11$, nilai minimum fungsi adalah …', options: ['1', '2', '3', '11'], answer: 1, solution: 'Titik puncak memiliki $x=-(-6)/(2)=3$. Nilainya $f(3)=9-18+11=2$. Karena $a>0$, ini nilai minimum.' },
        { prompt: 'Fungsi $g(x)=-x^2+8x-12$ mencapai maksimum saat …', options: ['$x=2$', '$x=4$', '$x=6$', '$x=8$'], answer: 1, solution: '$x_p=-b/(2a)=-8/(-2)=4$. Karena koefisien $x^2$ negatif, puncak merupakan maksimum.' },
        { prompt: 'Diskriminan persamaan $2x^2+4x+5=0$ adalah …', options: ['$-24$, tidak ada akar real', '$0$, satu akar kembar', '$24$, dua akar real', '$36$, dua akar real'], answer: 0, solution: '$D=4^2-4(2)(5)=16-40=-24<0$, sehingga tidak ada akar real.' },
        { prompt: 'Model pendapatan $R(x)=-3x^2+36x$ berlaku hanya untuk $0\le x\le 8$. Nilai maksimum pada domain itu adalah …', options: ['$96 pada x=6$', '$108 pada x=6$', '$108 pada x=8$', '$144 pada x=8$'], answer: 1, solution: 'Puncak $x=-36/[2(-3)]=6$ berada di dalam domain. $R(6)=-108+216=108$, lebih besar daripada nilai di batas $x=0$ dan $x=8$.' }
      ]
    },
    {
      id: 'eksponen-logaritma', number: '23', area: 'Aljabar SMA', time: '15 menit', level: 'Pendalaman SMA',
      title: 'Eksponen, pertumbuhan, dan logaritma',
      summary: 'Modelkan pertumbuhan atau penyusutan berulang dengan faktor pengali, lalu pahami logaritma sebagai pencari waktu/pangkat.',
      concepts: ['Pangkat dan faktor perubahan', 'Bunga majemuk dan peluruhan', 'Logaritma sebagai invers eksponen'],
      conceptHtml: `<p>Jika perubahan terjadi dengan persentase yang sama setiap periode, besaran dikalikan faktor yang sama berulang kali. Inilah model eksponensial: jumlah bertambah dengan faktor $1+r$ untuk pertumbuhan, atau dikali $1-r$ untuk penurunan, jika $r$ ditulis sebagai desimal.</p><p>Logaritma menjawab pertanyaan “pangkat berapa yang diperlukan?” Jika $a^t=N$ dengan $a>0$ dan $a\ne1$, maka $t=\log_a N$. Dalam konteks, $t$ sering berarti banyak periode.</p>`,
      formulaHtml: `<ul><li>Aturan pangkat: $a^m a^n=a^{m+n}$; $a^m/a^n=a^{m-n}$; $(a^m)^n=a^{mn}$; $a^{-n}=1/a^n$.</li><li>Pertumbuhan: $N_t=N_0(1+r)^t$. Peluruhan: $N_t=N_0(1-r)^t$.</li><li>Bunga majemuk $m$ kali per tahun: $A=P(1+\frac{i}{m})^{mt}$.</li><li>Logaritma: $\log_a(xy)=\log_a x+\log_a y$ dan $\log_a(x^n)=n\log_a x$, dengan argumen positif.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> ubah persentase menjadi faktor sekali pakai—naik 5% berarti $\times1{,}05$, turun 5% berarti $\times0{,}95$. Untuk beberapa periode, pangkatkan faktornya.</p><p><strong>Jangan tambah persen periode demi periode</strong> pada pertumbuhan majemuk. Kenaikan kedua berlaku pada nilai yang sudah berubah. Periksa juga apakah periode pada rumus sama dengan periode suku bunga.</p>`,
      example: { title: 'Contoh — tabungan tumbuh majemuk', prompt: 'Saldo Rp2.000.000 tumbuh 5% setiap tahun. Berapa saldo setelah 3 tahun jika tidak ada setoran atau penarikan?', steps: ['Faktor tahunan adalah $1+0{,}05=1{,}05$.', 'Tiga periode: $A=2.000.000(1{,}05)^3$.', 'Karena $1{,}05^3=1{,}157625$, saldo menjadi Rp2.315.250.', 'Kenaikan totalnya Rp315.250 atau 15,7625% dari saldo awal, bukan tepat 15%.'] },
      pitfalls: ['Mengalikan jumlah awal dengan $1+rt$ untuk bunga majemuk; bentuk itu adalah model bunga sederhana.', 'Mencampur tahun dengan bulan pada eksponen.', 'Mengambil logaritma bilangan nol atau negatif tanpa mengecek bahwa argumennya harus positif.'],
      advancedHtml: `<p><strong>Menaksir waktu tanpa kalkulator:</strong> gunakan pangkat yang mudah dikenali. Jika jumlah menjadi dua kali lipat setiap 4 tahun, maka setelah 12 tahun jumlahnya dikali $2^3=8$.</p><p><strong>Persentase efektif:</strong> kenaikan $r$ selama $n$ periode menghasilkan perubahan total $(1+r)^n-1$. Contoh 10% dua kali memberi $1{,}1^2-1=21\%$.</p><p><strong>Persamaan logaritma:</strong> ubah ke bentuk eksponen setelah memastikan basis valid dan ruas yang menjadi argumen log positif. Setelah menemukan solusi, substitusikan kembali karena manipulasi log dapat menghasilkan kandidat yang tidak memenuhi domain.</p>`,
      practiceSet: [
        { prompt: 'Nilai $3^2\times3^4$ sama dengan …', options: ['$3^6$', '$9^8$', '$3^8$', '$6^6$'], answer: 0, solution: 'Basisnya sama, maka pangkat dijumlahkan: $3^{2+4}=3^6$.' },
        { prompt: 'Populasi 800 bertambah 10% per periode. Setelah dua periode nilainya …', options: ['880', '960', '968', '1.000'], answer: 2, solution: '$800(1{,}1)^2=800(1{,}21)=968$.' },
        { prompt: 'Nilai $\log_2 32$ adalah …', options: ['4', '5', '8', '16'], answer: 1, solution: 'Karena $2^5=32$, maka $\log_2 32=5$.' },
        { prompt: 'Harga turun 20% selama dua periode berturut-turut. Faktor harga akhir terhadap harga awal adalah …', options: ['0,40', '0,60', '0,64', '0,80'], answer: 2, solution: 'Setiap periode faktor sisanya 0,8, jadi setelah dua periode $0{,}8^2=0{,}64$.' }
      ]
    },
    {
      id: 'lingkaran-busur-juring', number: '24', area: 'Geometri SMA', time: '14 menit', level: 'Pendalaman SMA',
      title: 'Lingkaran: busur, juring, tali busur, dan garis singgung',
      summary: 'Hubungkan sudut pusat dengan panjang busur dan luas juring, lalu terapkan sifat sudut serta garis singgung.',
      concepts: ['Bagian lingkaran sebagai proporsi putaran', 'Sudut pusat dan sudut keliling', 'Tali busur dan garis singgung'],
      conceptHtml: `<p>Satu putaran penuh memiliki $360^\circ$. Busur dan juring hanyalah bagian dari keliling dan luas lingkaran dengan proporsi yang sama terhadap sudut pusat. Karena itu, bandingkan $\theta$ terhadap $360^\circ$ terlebih dahulu.</p><figure class="pm-learning-diagram"><svg viewBox="0 0 360 220" role="img" aria-labelledby="pm-circle-title pm-circle-desc"><title id="pm-circle-title">Juring lingkaran dengan sudut pusat</title><desc id="pm-circle-desc">Lingkaran dengan dua jari-jari membatasi juring berwarna dan sudut pusat theta.</desc><circle class="pm-diagram-line" cx="150" cy="112" r="78" fill="none"/><path class="pm-diagram-highlight" d="M150 112 L228 112 A78 78 0 0 0 189 44 Z"/><path class="pm-diagram-line" d="M150 112 L228 112 M150 112 L189 44"/><path class="pm-diagram-mark" d="M174 112 A24 24 0 0 0 162 91"/><text class="pm-diagram-label" x="170" y="103">θ</text><text class="pm-diagram-label" x="187" y="126">r</text><text class="pm-diagram-label" x="159" y="66">r</text><text class="pm-diagram-note" x="245" y="100">panjang busur s</text><text class="pm-diagram-note" x="245" y="123">luas juring L</text></svg><figcaption>Sudut pusat menentukan proporsi busur dan juring dari lingkaran penuh.</figcaption></figure><p>Sudut keliling yang menghadap busur yang sama besarnya setengah sudut pusat. Garis singgung tegak lurus jari-jari pada titik singgung. Dua garis singgung dari satu titik luar memiliki panjang yang sama.</p>`,
      formulaHtml: `<ul><li>Keliling $K=2\pi r$; luas $L=\pi r^2$.</li><li>Panjang busur: $s=\frac{\theta}{360^\circ}\,2\pi r$.</li><li>Luas juring: $L_j=\frac{\theta}{360^\circ}\,\pi r^2$.</li><li>Jika $\theta$ dalam radian: $s=r\theta$ dan $L_j=\frac12r^2\theta$.</li><li>Sudut keliling pada busur yang sama $=\frac12$ sudut pusat; jari-jari tegak lurus garis singgung.</li></ul>`,
      shortcutHtml: `<p><strong>Cara cepat:</strong> cari dulu fraksi putaran $\theta/360^\circ$. Busur = fraksi × keliling; juring = fraksi × luas. Jika luas juring dan busurnya diketahui, rasio $L_j/s=r/2$.</p><p><strong>Untuk gabungan bangun:</strong> hitung hanya busur yang benar-benar menjadi batas luar; garis jari-jari di dalam bangun tidak selalu termasuk keliling yang dicari.</p>`,
      example: { title: 'Contoh — seperempat lingkaran', prompt: 'Sebuah juring memiliki jari-jari 14 cm dan sudut pusat 90°. Tentukan panjang busur serta luas juring. Gunakan $\pi=22/7$.', steps: ['Fraksi putaran adalah $90/360=1/4$.', 'Panjang busur $=\frac14(2\pi\cdot14)=7\pi=22$ cm.', 'Luas juring $=\frac14(\pi\cdot14^2)=49\pi=154$ cm².', 'Satuan berbeda: busur memakai satuan panjang, juring memakai satuan luas.'] },
      pitfalls: ['Memakai sudut dalam derajat pada rumus radian $s=r\theta$.', 'Lupa bahwa luas bertumbuh dengan kuadrat jari-jari.', 'Mengira sudut keliling sama dengan sudut pusat yang menghadap busur sama.'],
      advancedHtml: `<p><strong>Busur minor dan mayor:</strong> bila sudut pusat yang dipakai lebih dari $180^\circ$, ia membatasi busur mayor. Untuk busur kecil, gunakan sudut refleks atau kurangi dari $360^\circ$ sesuai busur yang diminta.</p><p><strong>Tali busur:</strong> garis dari pusat yang tegak lurus tali busur membagi tali busur itu menjadi dua sama panjang. Jika jari-jari $r$ dan jarak pusat ke tali busur $d$, setengah tali busur $=\sqrt{r^2-d^2}$ dari Pythagoras.</p><p><strong>Juring dan segitiga:</strong> luas tembereng dapat diperoleh dari luas juring dikurangi luas segitiga yang dibentuk dua jari-jari dan tali busur. Pastikan sudut segitiganya sama dengan sudut pusat juring.</p>`,
      practiceSet: [
        { prompt: 'Panjang busur dengan $r=6$ cm dan sudut pusat $60^\circ$ adalah …', options: ['$\pi$ cm', '$2\pi$ cm', '$4\pi$ cm', '$6\pi$ cm'], answer: 1, solution: '$s=(60/360)(2\pi\cdot6)=2\pi$ cm.' },
        { prompt: 'Luas juring $r=10$ cm dengan sudut $72^\circ$ adalah …', options: ['$10\pi$ cm²', '$20\pi$ cm²', '$25\pi$ cm²', '$40\pi$ cm²'], answer: 1, solution: 'Fraksi putaran $72/360=1/5$. Luasnya $\frac15\pi(10)^2=20\pi$ cm².' },
        { prompt: 'Sudut pusat menghadap busur yang sama dengan sudut keliling $38^\circ$. Sudut pusatnya adalah …', options: ['$19^\circ$', '$38^\circ$', '$76^\circ$', '$142^\circ$'], answer: 2, solution: 'Sudut keliling setengah sudut pusat, jadi sudut pusat $=2(38^\circ)=76^\circ$.' },
        { prompt: 'Jari-jari lingkaran tegak lurus garis singgung pada …', options: ['titik pusat', 'titik singgung', 'ujung diameter yang berlawanan', 'semua titik di garis singgung'], answer: 1, solution: 'Jari-jari yang ditarik ke titik singgung membentuk sudut $90^\circ$ terhadap garis singgung.' }
      ]
    },
    {
      id: 'statistika-penyebaran', number: '25', area: 'Data SMA', time: '16 menit', level: 'Pendalaman SMA',
      title: 'Sebaran data: kuartil, varians, simpangan baku, dan z-score',
      summary: 'Bandingkan pusat dan keragaman data, baca pengaruh pencilan, serta ukur posisi nilai relatif terhadap kelompok.',
      concepts: ['Rentang antarkuartil', 'Varians dan simpangan baku', 'Skor baku dan transformasi data'],
      conceptHtml: `<p>Rata-rata dan median menceritakan pusat, tetapi tidak menunjukkan seberapa berjauhan nilai-nilainya. Sebaran kecil berarti data berkelompok dekat pusat; sebaran besar berarti lebih bervariasi. Rentang peka terhadap dua nilai ekstrem, sedangkan rentang antarkuartil (IQR) merangkum 50% data tengah dan lebih tahan terhadap pencilan.</p><p>Varians adalah rata-rata kuadrat jarak nilai dari rata-rata. Simpangan baku adalah akar varians sehingga kembali ke satuan data. Skor baku membandingkan posisi sebuah nilai dengan pusat dan sebaran kelompoknya.</p>`,
      formulaHtml: `<ul><li>Rentang $=x_{maks}-x_{min}$; rentang antarkuartil $IQR=Q_3-Q_1$.</li><li>Varians populasi $\sigma^2=\frac{\sum(x_i-\mu)^2}{N}$; simpangan baku populasi $\sigma=\sqrt{\sigma^2}$.</li><li>Varians sampel tak bias $s^2=\frac{\sum(x_i-\bar{x})^2}{n-1}$; perhatikan apakah soal menyebut sampel atau seluruh populasi.</li><li>Skor baku: $z=\frac{x-\mu}{\sigma}$.</li></ul>`,
      shortcutHtml: `<p><strong>Cara hitung varians yang rapi:</strong> cari rata-rata, buat kolom $x_i-\bar{x}$, kuadratkan setiap selisih, jumlahkan, lalu bagi dengan $N$ (populasi) atau $n-1$ (estimasi sampel).</p><p><strong>Cek interpretasi:</strong> $z=2$ artinya nilai dua simpangan baku di atas rata-rata; bukan berarti nilainya dua kali rata-rata. Jika semua nilai ditambah konstanta, pusat bergeser tetapi sebaran tidak berubah.</p>`,
      example: { title: 'Contoh — membandingkan variasi nilai', prompt: 'Data seluruh anggota sebuah kelompok adalah 2, 4, 4, 6, 9. Hitung rata-rata dan simpangan baku populasi. Untuk kuartil, gunakan median dari separuh bawah dan separuh atas tanpa memasukkan median keseluruhan.', steps: ['Rata-rata $=(2+4+4+6+9)/5=5$.', 'Selisih dari rata-rata: −3, −1, −1, 1, 4. Jumlah kuadrat selisih $=9+1+1+1+16=28$.', 'Varians populasi $=28/5=5{,}6$; simpangan baku $=\sqrt{5{,}6}\approx2{,}37$.', 'Median keseluruhan 4. Kuartil bawah median {2,4}=3; kuartil atas median {6,9}=7,5. Jadi IQR=4,5 dengan konvensi yang dinyatakan.'] },
      pitfalls: ['Mengambil akar sebelum membagi jumlah kuadrat selisih.', 'Memakai penyebut $n$ saat soal meminta estimator varians sampel dengan penyebut $n-1$.', 'Menghitung kuartil dengan konvensi berbeda tanpa membaca atau menyatakan aturan yang digunakan.'],
      advancedHtml: `<p><strong>Efek transformasi:</strong> jika semua data menjadi $y=a x+b$, maka rata-rata berubah menjadi $a\bar{x}+b$, sedangkan simpangan baku berubah menjadi $|a|s$. Penambahan $b$ tidak mengubah sebaran; pengalian dengan $a$ mengubah satuan dan skala.</p><p><strong>Pencilan:</strong> nilai ekstrem dapat menarik rata-rata dan memperbesar simpangan baku. Bandingkan median dan IQR ketika ringkasan harus tahan terhadap pencilan.</p><p><strong>Skor-z:</strong> nilai $z=0$ tepat di rata-rata; $z<0$ di bawah rata-rata. Skor-z memungkinkan membandingkan posisi relatif pada dua tes dengan satuan dan skala berbeda, selama ringkasannya layak dibandingkan.</p>`,
      practiceSet: [
        { prompt: 'Jika $Q_1=12$ dan $Q_3=20$, nilai IQR adalah …', options: ['8', '12', '20', '32'], answer: 0, solution: '$IQR=Q_3-Q_1=20-12=8$.' },
        { prompt: 'Semua nilai data ditambah 7. Apa yang terjadi pada simpangan baku?', options: ['Bertambah 7', 'Berkali 7', 'Tetap', 'Menjadi nol'], answer: 2, solution: 'Menambah konstanta menggeser semua data dan rata-rata sama besar; selisih dari rata-rata tetap, jadi simpangan baku tetap.' },
        { prompt: 'Rata-rata nilai 70 dan simpangan baku 5. Skor-z untuk nilai 80 adalah …', options: ['−2', '−1', '1', '2'], answer: 3, solution: '$z=(80-70)/5=2$, artinya dua simpangan baku di atas rata-rata.' },
        { prompt: 'Untuk data lengkap berukuran 10, varians populasinya membagi jumlah kuadrat selisih dengan …', options: ['9', '10', '11', '$\sqrt{10}$'], answer: 1, solution: 'Untuk populasi lengkap digunakan pembagi $N=10$. Pembagi $n-1$ dipakai pada estimator varians sampel.' }
      ]
    },
    {
      id: 'kombinatorika-lanjutan', number: '26', area: 'Peluang SMA', time: '16 menit', level: 'Pendalaman SMA',
      title: 'Kombinatorika lanjutan: susunan, syarat, dan pengulangan',
      summary: 'Pilih aturan pencacahan yang tepat untuk urutan, benda identik, batasan posisi, dan peluang banyak keberhasilan.',
      concepts: ['Permutasi dan kombinasi', 'Susunan dengan unsur sama', 'Model binomial'],
      conceptHtml: `<p>Sebelum memakai rumus, jawab dua pertanyaan: apakah urutan membuat hasil berbeda, dan apakah benda/hasil boleh berulang? Kode PIN 123 berbeda dari 321, tetapi memilih tiga anggota tim yang sama tidak membentuk tim baru hanya karena urutan namanya berubah.</p><p>Jika beberapa benda identik disusun, permutasi biasa menghitung susunan yang sebenarnya sama berulang kali. Jika percobaan independen memiliki peluang sukses tetap $p$, banyak sukses dalam $n$ percobaan mengikuti model binomial.</p>`,
      formulaHtml: `<ul><li>Permutasi $r$ dari $n$: $P(n,r)=\frac{n!}{(n-r)!}$.</li><li>Kombinasi: $\binom{n}{r}=\frac{n!}{r!(n-r)!}$.</li><li>Susunan $n$ benda dengan kelompok identik sebanyak $a,b,\ldots$: $\frac{n!}{a!b!\cdots}$.</li><li>Binomial tepat $k$ sukses: $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$.</li></ul>`,
      shortcutHtml: `<p><strong>Uji dengan contoh kecil:</strong> untuk memilih 2 dari 3 orang, pasangan A-B sama dengan B-A, jadi kombinasi. Untuk podium juara 1 dan 2, A-B berbeda dari B-A, jadi permutasi.</p><p><strong>Untuk syarat posisi:</strong> tempatkan dulu objek yang wajib berdampingan sebagai satu blok, atau tetapkan posisi yang dibatasi. Baru hitung susunan sisanya; cek apakah objek dalam blok dapat bertukar urutan.</p>`,
      example: { title: 'Contoh — memilih dan menyusun panitia', prompt: 'Dari 7 siswa dipilih ketua dan wakil ketua. Berapa pasangan jabatan yang mungkin jika satu siswa tidak boleh merangkap?', steps: ['Jabatan berbeda, jadi urutan penting: ketua dan wakil tidak dapat dipertukarkan.', 'Pilih ketua dalam 7 cara, lalu wakil dalam 6 cara.', 'Total $7\times6=42$ susunan jabatan, sama dengan $P(7,2)$.', 'Jika hanya memilih dua anggota tanpa jabatan, jawabannya akan $\binom{7}{2}=21$.'] },
      pitfalls: ['Memakai kombinasi ketika jabatan atau posisi membuat urutan penting.', 'Menganggap pengambilan tanpa pengembalian sebagai percobaan independen.', 'Memakai model binomial ketika peluang berubah dari percobaan ke percobaan.'],
      advancedHtml: `<p><strong>Prinsip komplemen:</strong> untuk syarat “minimal satu” atau “tidak semua”, hitung seluruh kemungkinan dikurangi kasus yang lebih mudah (misalnya tidak ada sukses atau semuanya sukses).</p><p><strong>Syarat berdampingan:</strong> jika A dan B harus bersebelahan dalam deretan $n$ orang, anggap AB sebagai satu blok. Banyak susunan menjadi $2(n-1)!$ untuk A dan B yang dapat bertukar posisi.</p><p><strong>Model binomial memerlukan:</strong> jumlah percobaan tetap, dua hasil tiap percobaan, peluang sukses tetap, dan percobaan independen. Jika salah satu syarat tidak terpenuhi—misalnya mengambil kartu tanpa pengembalian—model binomial tidak tepat.</p>`,
      practiceSet: [
        { prompt: 'Banyak cara memilih 3 wakil dari 8 orang tanpa jabatan adalah …', options: ['56', '112', '336', '512'], answer: 0, solution: 'Urutan tidak penting, jadi $\binom{8}{3}=8\cdot7\cdot6/(3\cdot2\cdot1)=56$.' },
        { prompt: 'Banyak susunan huruf berbeda dari kata MAMA adalah …', options: ['4', '6', '12', '24'], answer: 1, solution: 'Ada 4 huruf, dengan M dua dan A dua identik: $4!/(2!2!)=6$.' },
        { prompt: 'Koin seimbang dilempar 4 kali. Peluang tepat 3 kali muncul gambar adalah …', options: ['$1/16$', '$1/4$', '$3/8$', '$1/2$'], answer: 1, solution: '$\binom{4}{3}(1/2)^3(1/2)=4/16=1/4$.' },
        { prompt: 'Dari 6 orang dipilih juara 1, 2, dan 3 tanpa peringkat yang sama. Banyak susunannya adalah …', options: ['20', '56', '120', '216'], answer: 2, solution: 'Peringkat membuat urutan penting: $6\cdot5\cdot4=120$.' }
      ]
    },
    {
      id: 'sampling-regresi', number: '27', area: 'Data SMA', time: '16 menit', level: 'Pendalaman SMA',
      title: 'Sampel, bias, korelasi, dan regresi linear',
      summary: 'Nilai apakah survei mewakili populasi, baca hubungan dua variabel, dan tafsirkan garis prediksi dengan hati-hati.',
      concepts: ['Populasi dan teknik sampel', 'Korelasi bukan sebab-akibat', 'Garis regresi dan residual'],
      conceptHtml: `<p>Populasi adalah kelompok yang ingin dipahami; sampel adalah bagian yang benar-benar diamati. Sampel besar belum tentu mewakili populasi jika cara memilihnya bias. Responden sukarela, misalnya, bisa terlalu banyak memuat orang yang punya pendapat kuat.</p><p>Diagram pencar membantu melihat arah dan kekuatan hubungan. Korelasi positif berarti kedua variabel cenderung naik bersama; negatif berarti satu naik ketika yang lain cenderung turun. Hubungan ini sendiri tidak membuktikan bahwa satu variabel menyebabkan yang lain.</p><figure class="pm-learning-diagram"><svg viewBox="0 0 360 220" role="img" aria-labelledby="pm-reg-title pm-reg-desc"><title id="pm-reg-title">Diagram pencar dan garis tren</title><desc id="pm-reg-desc">Titik-titik data cenderung naik dari kiri ke kanan di sekitar sebuah garis prediksi.</desc><path class="pm-diagram-axis" d="M48 180 H324 M48 180 V30"/><path class="pm-diagram-highlight" d="M62 165 L310 52"/><circle class="pm-diagram-dot" cx="78" cy="154" r="4"/><circle class="pm-diagram-dot" cx="105" cy="151" r="4"/><circle class="pm-diagram-dot" cx="136" cy="122" r="4"/><circle class="pm-diagram-dot" cx="175" cy="123" r="4"/><circle class="pm-diagram-dot" cx="204" cy="96" r="4"/><circle class="pm-diagram-dot" cx="246" cy="83" r="4"/><circle class="pm-diagram-dot" cx="281" cy="63" r="4"/><text class="pm-diagram-label" x="300" y="199">x</text><text class="pm-diagram-label" x="30" y="39">y</text><text class="pm-diagram-note" x="154" y="62">garis tren</text></svg><figcaption>Garis regresi merangkum kecenderungan; jarak vertikal titik ke garis adalah residual.</figcaption></figure>`,
      formulaHtml: `<ul><li>Model linear: $\hat{y}=a+bx$; $b$ adalah perubahan prediksi $y$ untuk kenaikan satu unit $x$.</li><li>Residual: $e=y-\hat{y}$ (nilai teramati dikurangi prediksi).</li><li>Sampel acak sederhana memberi kesempatan yang sama kepada setiap anggota populasi.</li><li>Pengambilan berstrata mengambil bagian dari tiap kelompok penting; ini berguna jika kelompok populasi berbeda.</li></ul>`,
      shortcutHtml: `<p><strong>Cek klaim survei:</strong> siapa populasinya, siapa yang masuk sampel, bagaimana mereka dipilih, siapa yang tidak merespons, dan kapan pengukuran dilakukan? Ukuran sampel saja tidak menjawab pertanyaan keterwakilan.</p><p><strong>Baca kemiringan garis:</strong> satuan $b$ adalah satuan $y$ per satuan $x$. Jangan menafsirkan $b$ sebagai persen kecuali model dan satuannya memang menyatakan perubahan persentase.</p>`,
      example: { title: 'Contoh — membaca model prediksi', prompt: 'Hubungan jam latihan $x$ dan skor latihan $y$ diringkas oleh $\hat{y}=32+6x$. Tafsirkan kemiringannya dan prediksi skor untuk 5 jam latihan.', steps: ['Kemiringan 6 berarti model memprediksi skor bertambah rata-rata 6 poin per tambahan satu jam latihan dalam rentang data yang relevan.', 'Untuk $x=5$, $\hat{y}=32+6(5)=62$.', 'Angka 62 adalah prediksi model, bukan jaminan skor setiap siswa.', 'Jika 5 jam jauh di luar data yang diamati, prediksi merupakan ekstrapolasi dan lebih berisiko keliru.'] },
      pitfalls: ['Menyimpulkan sebab-akibat hanya dari korelasi.', 'Menganggap survei besar pasti bebas bias.', 'Menggunakan garis regresi jauh di luar rentang pengamatan tanpa menyebut ekstrapolasi.'],
      advancedHtml: `<p><strong>Residual positif</strong> berarti hasil teramati di atas prediksi; residual negatif berarti di bawah prediksi. Pola melengkung pada residual bisa menandakan bahwa model linear tidak cocok, walaupun korelasi terlihat kuat.</p><p><strong>Perancu:</strong> variabel ketiga dapat memengaruhi keduanya. Contohnya, penjualan es krim dan penggunaan kipas dapat berkorelasi karena suhu panas memengaruhi keduanya; korelasi itu tidak menunjukkan es krim menyebabkan orang menyalakan kipas.</p><p><strong>Intersep:</strong> $a$ adalah prediksi saat $x=0$. Tafsirkan hanya jika nilai nol masuk akal dalam konteks dan berada cukup dekat dengan rentang data.</p>`,
      practiceSet: [
        { prompt: 'Dalam model $\hat y=10+3x$, arti kemiringan 3 adalah …', options: ['Prediksi $y$ saat $x=0$ adalah 3', 'Prediksi $y$ naik 3 untuk setiap kenaikan satu unit $x$', 'Nilai $x$ selalu naik 3%', 'Semua data tepat di garis'], answer: 1, solution: 'Koefisien $x$ adalah kemiringan: kenaikan satu unit pada $x$ mengubah prediksi $y$ sebesar 3 unit.' },
        { prompt: 'Jika nilai teramati $y=18$ dan prediksi $\hat y=21$, residualnya …', options: ['−3', '3', '18', '39'], answer: 0, solution: '$e=y-\hat y=18-21=-3$, jadi observasi berada tiga unit di bawah prediksi.' },
        { prompt: 'Cara yang paling mengurangi risiko bias sukarela pada survei pendapat siswa adalah …', options: ['Menerima siapa saja yang mengisi tautan terbuka', 'Memilih siswa secara acak dari daftar seluruh siswa', 'Hanya bertanya kepada pengurus OSIS', 'Memperbesar jumlah pengisi tautan sukarela'], answer: 1, solution: 'Pemilihan acak dari kerangka sampel populasi mengurangi bias seleksi sukarela; jumlah besar saja tidak memperbaiki cara pilih yang bias.' },
        { prompt: 'Jika data latihan hanya mencakup 0–4 jam, prediksi untuk 12 jam menggunakan garis yang sama disebut …', options: ['Interpolasi', 'Ekstrapolasi', 'Sensus', 'Residual'], answer: 1, solution: 'Nilai 12 jam berada di luar rentang pengamatan 0–4 jam, jadi itu ekstrapolasi dan perlu kehati-hatian.' }
      ]
    }
  ];

  window.UTBK_PM_LATIHAN_TAMBAHAN = {
    'cara-berpikir-pm': [
      { prompt: 'Sebuah kegiatan membutuhkan 73 botol. Satu dus berisi 8 botol. Berapa dus minimum?', options: ['8', '9', '10', '11'], answer: 2, solution: 'Sembilan dus berisi 72 botol, masih kurang satu. Jadi perlu 10 dus.' }
    ],
    'bilangan-satuan': [
      { prompt: 'Tiga perempat dari 2,4 kg adalah …', options: ['1,2 kg', '1,6 kg', '1,8 kg', '2,1 kg'], answer: 2, solution: '3/4 × 2,4 = 1,8 kg.' }
    ],
    'rasio-persentase': [
      { prompt: 'Rasio merah : biru = 3 : 5. Jika totalnya 64 benda, berapa benda merah?', options: ['16', '24', '32', '40'], answer: 1, solution: 'Total bagian 8, satu bagian 64/8=8. Bagian merah 3×8=24.' }
    ],
    'aljabar-model': [
      { prompt: 'Jika 3x+2y=16 dan x+y=6, pasangan (x,y) adalah …', options: ['(2,4)', '(4,2)', '(5,1)', '(6,0)'], answer: 1, solution: 'Dari x+y=6, 2x+2y=12. Kurangkan dari persamaan pertama: x=4, sehingga y=2.' }
    ],
    'spltv': [
      { prompt: 'Jika x+y+z=9, 2x+y+z=11, dan x+2y+z=12, nilai z adalah …', options: ['2', '3', '4', '5'], answer: 2, solution: 'Dua pengurangan memberi x=2 dan y=3. Maka z=9−2−3=4.' }
    ],
    'fungsi-model': [
      { prompt: 'Tarif A = 4.000x dan Tarif B = 8.000 + 2.000x. Kapan Tarif B lebih murah?', options: ['x<4 km', 'x=4 km', 'x>4 km', 'untuk semua x'], answer: 2, solution: '8.000+2.000x < 4.000x berarti 8.000 < 2.000x, jadi x>4 km.' }
    ],
    'laju-kerja-campuran': [
      { prompt: 'Dua pekerja identik menyelesaikan 12 unit dalam 3 jam. Berapa lama empat pekerja menyelesaikan 24 unit?', options: ['1,5 jam', '2 jam', '3 jam', '6 jam'], answer: 2, solution: 'Laju per pekerja = 12/(2×3)=2 unit/jam. Empat pekerja menghasilkan 8 unit/jam, jadi 24 unit perlu 3 jam.' }
    ],
    'barisan-pola': [
      { prompt: 'Barisan 5, 8, 11, … memiliki suku ke-10 …', options: ['29', '30', '32', '35'], answer: 2, solution: 'U10=5+(10−1)×3=32.' }
    ],
    'kesebangunan': [
      { prompt: 'Segitiga pertama memiliki sudut 40° dan 65°. Segitiga kedua memiliki sudut 40° dan 65°. Apa kesimpulan yang pasti?', options: ['Keduanya sebangun karena AA', 'Keduanya kongruen', 'Keduanya sama luas', 'Belum cukup informasi untuk kesebangunan'], answer: 0, solution: 'Dua pasang sudut bersesuaian sama sudah cukup untuk kesebangunan (AA). Sudut ketiga pada kedua segitiga sama-sama 75°, tetapi panjang sisinya masih bisa berbeda.' },
      { prompt: 'Pada segitiga ABC, DE ∥ BC. Jika AD = 4 cm, DB = 2 cm, dan AE = 8 cm, berapa EC?', options: ['2 cm', '3 cm', '4 cm', '6 cm'], answer: 2, solution: 'Segitiga ADE sebangun dengan ABC. $AD/AB=AE/AC$ memberi $4/6=8/(8+x)$, sehingga $x=4$ cm.' },
      { prompt: 'Rasio sisi segitiga kecil : besar adalah 3 : 5. Jika luas segitiga kecil 27 cm², berapa luas segitiga besar?', options: ['45 cm²', '60 cm²', '75 cm²', '90 cm²'], answer: 2, solution: 'Faktor panjangnya $5/3$, jadi faktor luasnya $(5/3)^2=25/9$. Luas besar $=27×25/9=75$ cm².' },
      { prompt: 'Tongkat setinggi 1,8 m memiliki bayangan 2,4 m. Pada saat yang sama, bayangan gedung 16 m. Berapa tinggi gedung?', options: ['10 m', '12 m', '14 m', '16 m'], answer: 1, solution: 'Sinar matahari dianggap sejajar, maka tinggi : bayangan sama. $h/16=1,8/2,4=3/4$, jadi tinggi gedung $h=12$ m.' },
      { prompt: 'Mata pengamat setinggi 1,5 m dari lantai. Jarak pengamat ke cermin kecil di lantai 2,5 m; jarak cermin ke pohon 20 m. Berapa tinggi pohon?', options: ['8 m', '10 m', '12 m', '15 m'], answer: 2, solution: 'Dua segitiga dari pantulan sebangun: $1,5/2,5=h/20$. Maka $h=20×1,5/2,5=12$ m.' },
      { prompt: 'Garis tinggi pada segitiga siku-siku membagi sisi miring menjadi 9 cm dan 16 cm. Berapa panjang garis tingginya?', options: ['10 cm', '12 cm', '15 cm', '20 cm'], answer: 1, solution: 'Dari kesebangunan segitiga kecil dan besar, $h^2=mn=9×16=144$, jadi $h=12$ cm.' },
      { prompt: 'Dua segitiga memiliki satu pasang sisi bersesuaian dengan rasio 2 : 3, tetapi tidak ada informasi lain. Apakah itu cukup untuk membuktikan keduanya sebangun?', options: ['Ya, selalu', 'Ya, jika sisi itu terpanjang', 'Tidak; perlu sudut atau rasio sisi lain', 'Hanya jika luasnya sama'], answer: 2, solution: 'Satu rasio sisi saja belum menentukan bentuk. Perlu, misalnya, dua sudut sama (AA), dua rasio sisi dan sudut apit sama (SAS), atau tiga rasio sisi sama (SSS).' }
    ],
    'rasio-trapesium': [
      { prompt: 'Alas sejajar trapesium panjangnya 21 cm dan 14 cm. Rasio bagian diagonal AP : PC adalah …', options: ['2 : 3', '3 : 2', '5 : 2', '7 : 5'], answer: 1, solution: 'Rasio potongan diagonal sama dengan rasio alas: 21:14=3:2.' }
    ],
    'geometri-trigonometri': [
      { prompt: 'Segitiga siku-siku memiliki sisi 5, 12, dan 13. Untuk sudut yang berdekatan dengan sisi 12, nilai cosinusnya …', options: ['5/13', '12/13', '5/12', '12/5'], answer: 1, solution: 'Cosinus = sisi samping/hipotenusa = 12/13.' }
    ],
    'geometri-koordinat': [
      { prompt: 'Gradien garis melalui (2,3) dan (6,11) adalah …', options: ['1/2', '2', '4', '8'], answer: 1, solution: 'Gradien = (11−3)/(6−2)=8/4=2.' }
    ],
    'bangun-ruang-satuan': [
      { prompt: 'Volume tabung berjari-jari 3 cm dan tinggi 5 cm adalah …', options: ['15π cm³', '30π cm³', '45π cm³', '90π cm³'], answer: 2, solution: 'V=πr²t=π×9×5=45π cm³.' }
    ],
    'membaca-data': [
      { prompt: 'Tiga kategori berjumlah 12, 15, dan 9. Persentase kategori kedua dari total adalah …', options: ['5/12', '5/9', '3/5', '15/21'], answer: 0, solution: 'Totalnya 36. Bagian kategori kedua = 15/36 = 5/12.' }
    ],
    'statistika-data': [
      { prompt: 'Median data terurut 2, 4, 9, 11, 14 adalah …', options: ['4', '8', '9', '11'], answer: 2, solution: 'Ada lima nilai, jadi median adalah nilai ketiga, yaitu 9.' }
    ],
    'peluang-kombinatorika': [
      { prompt: 'Berapa kode tiga digit berbeda yang dapat dibuat dari lima digit jika urutan penting?', options: ['10', '20', '60', '125'], answer: 2, solution: 'Pilihan slot: 5×4×3=60 kode.' }
    ],
    'peluang-bersyarat': [
      { prompt: 'Mesin A membuat 60% barang dengan cacat 2%; mesin B membuat 40% dengan cacat 5%. Jika barang yang diperiksa cacat, peluang barang itu dari B adalah …', options: ['1/4', '1/2', '5/8', '4/5'], answer: 2, solution: 'Dalam 1.000 barang: cacat dari A=12 dan dari B=20. Dari 32 barang cacat, 20 dari B, jadi 20/32=5/8.' }
    ],
    'optimasi-keputusan': [
      { prompt: 'Tiket dewasa Rp15.000 dan pelajar Rp9.000. Anggaran Rp90.000 dan harus membeli sedikitnya 4 tiket pelajar. Tiket dewasa maksimum yang dapat dibeli adalah …', options: ['2', '3', '4', '5'], answer: 1, solution: 'Empat tiket pelajar berharga Rp36.000, sisa Rp54.000. Maksimum tiket dewasa = floor(54.000/15.000)=3.' }
    ],
    'membaca-klaim-data': [
      { prompt: 'Harga Rp100 naik 10%, lalu turun 10% dari harga baru. Harga akhirnya …', options: ['Rp90', 'Rp99', 'Rp100', 'Rp101'], answer: 1, solution: 'Setelah naik menjadi Rp110. Penurunan 10% dari 110 adalah 11, jadi akhir Rp99.' }
    ]
  };
})();
