/* Shared, lightweight study helpers for equations and visual reading. */
(function () {
  'use strict';

  const escapeHTML = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const GUIDE_STEPS = [
    { title: 'Amati bagian penting', prompt: 'Cari label, angka, arah, atau bentuk yang disebut pada gambar.' },
    { title: 'Hubungkan petunjuknya', prompt: 'Cocokkan bagian yang dibandingkan; perhatikan mana yang sama dan mana yang berubah.' },
    { title: 'Ceritakan kesimpulannya', prompt: 'Ucapkan hubungan yang kamu temukan dengan kata-katamu sendiri, lalu cocokkan dengan rumus.' }
  ];

  function renderVisualGuideHTML(guide, formatText) {
    if (!Array.isArray(guide) || !guide.length) return '';
    const format = typeof formatText === 'function' ? formatText : escapeHTML;
    return guide.map((step, index) => {
      const scaffold = GUIDE_STEPS[Math.min(index, GUIDE_STEPS.length - 1)];
      return `<div class="materi-visual-guide-item">
        <span class="materi-visual-guide-badge">${index + 1}</span>
        <div class="materi-visual-guide-body">
          <strong class="materi-visual-guide-step-title">${scaffold.title}</strong>
          <p class="materi-visual-guide-prompt">${scaffold.prompt}</p>
          <div class="materi-visual-guide-text">${format(step)}</div>
        </div>
      </div>`;
    }).join('');
  }

  function extractMath(source) {
    const matches = [];
    const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/g;
    let match;
    while ((match = re.exec(String(source || '')))) {
      const expression = (match[1] || match[2] || match[3] || match[4] || '').trim();
      if (expression) matches.push(expression);
    }
    return matches;
  }

  function isEquation(expression) {
    return /(?:=|<|>|\\(?:leq?|geq?|neq|approx|sim|cong|propto|equiv|iff|implies|longrightarrow|to|perp|parallel))/.test(expression);
  }

  function normalizeEquation(expression) {
    return expression.replace(/\\(?:left|right|displaystyle)\b/g, '').replace(/\s+/g, '').toLowerCase();
  }

  function groupAt(source, start) {
    if (source[start] !== '{') return { value: source[start] || '', end: start + 1 };
    let depth = 0;
    for (let index = start; index < source.length; index += 1) {
      if (source[index] === '{') depth += 1;
      if (source[index] === '}') depth -= 1;
      if (depth === 0) return { value: source.slice(start + 1, index), end: index + 1 };
    }
    return { value: source.slice(start + 1), end: source.length };
  }

  function readTex(source) {
    let out = '';
    for (let index = 0; index < source.length;) {
      const char = source[index];
      if (char === '\\') {
        if (source[index + 1] === '\\') { out += '; '; index += 2; continue; }
        const commandMatch = source.slice(index + 1).match(/^[A-Za-z]+/);
        if (!commandMatch) { out += source[index + 1] || ''; index += 2; continue; }
        const command = commandMatch[0];
        index += command.length + 1;
        if (command === 'frac' || command === 'dfrac' || command === 'tfrac') {
          const numerator = groupAt(source, index); index = numerator.end;
          const denominator = groupAt(source, index); index = denominator.end;
          out += ` (${readTex(numerator.value)}) dibagi (${readTex(denominator.value)}) `;
          continue;
        }
        if (command === 'sqrt') {
          let power = '';
          if (source[index] === '[') {
            const close = source.indexOf(']', index);
            if (close >= 0) { power = readTex(source.slice(index + 1, close)); index = close + 1; }
          }
          const radicand = groupAt(source, index); index = radicand.end;
          out += `${power ? `akar pangkat ${power} dari` : 'akar dari'} (${readTex(radicand.value)}) `;
          continue;
        }
        if (command === 'text' || command === 'mathrm' || command === 'operatorname' || command === 'mathbf' || command === 'boldsymbol' || command === 'mathit' || command === 'mathsf' || command === 'overline' || command === 'vec' || command === 'hat' || command === 'bar') {
          const contents = groupAt(source, index); index = contents.end; out += ` ${readTex(contents.value)} `; continue;
        }
        const words = {
          times: 'dikali', cdot: 'dikali', div: 'dibagi', pm: 'plus atau minus', le: 'kurang dari atau sama dengan', leq: 'kurang dari atau sama dengan', ge: 'lebih dari atau sama dengan', geq: 'lebih dari atau sama dengan', neq: 'tidak sama dengan', approx: 'kira-kira sama dengan', pi: 'pi', theta: 'teta', alpha: 'alfa', beta: 'beta', gamma: 'gamma', mu: 'mu', sigma: 'sigma', delta: 'delta', Delta: 'perubahan', lambda: 'lambda', rho: 'rho', omega: 'omega', sin: 'sinus', cos: 'kosinus', tan: 'tangen', log: 'logaritma', ln: 'logaritma natural', max: 'nilai terbesar', min: 'nilai terkecil', sum: 'jumlah', prod: 'hasil kali', binom: 'kombinasi', infty: 'tak hingga', iff: 'jika dan hanya jika', implies: 'mengakibatkan', to: 'menuju', perp: 'tegak lurus', parallel: 'sejajar', triangle: 'segitiga', angle: 'sudut', leftrightarrow: 'berkorespondensi dengan', longleftrightarrow: 'berkorespondensi dengan', rightarrow: 'mengakibatkan', therefore: 'maka', because: 'karena', circ: 'derajat'
        };
        if (['begin', 'end'].includes(command)) {
          const environment = groupAt(source, index); index = environment.end; continue;
        }
        out += ` ${words[command] || command} `;
        continue;
      }
      if (char === '{' || char === '}') { index += 1; continue; }
      if (char === '^' || char === '_') {
        index += 1;
        const value = groupAt(source, index); index = value.end;
        out += char === '^' ? ` pangkat ${readTex(value.value)} ` : ` indeks ${readTex(value.value)} `;
        continue;
      }
      const operators = { '=': ' sama dengan ', '+': ' tambah ', '−': ' dikurangi ', '-': ' dikurangi ', '*': ' dikali ', '/': ' dibagi ', '<': ' kurang dari ', '>': ' lebih dari ', '(': ' kurung buka ', ')': ' kurung tutup ', ',': ', ' };
      out += operators[char] || char;
      index += 1;
    }
    return out.replace(/\s+/g, ' ').replace(/\s+([,;])/g, '$1').trim();
  }

  function extractSymbols(expression, context) {
    const values = [];
    const text = expression
      .replace(/\\(?:text|mathrm|operatorname)\s*\{[^{}]*\}/g, ' ')
      .replace(/\\mathbb\s*\{[A-Z]\}/g, ' ')
      .replace(/\\(?:mathbf|boldsymbol|mathit|mathsf|overline|vec|hat|bar|tilde)\s*\{([^{}]*)\}/g, '$1')
      .replace(/\\(?:left|right|begin|end)\b\s*(?:\{[^}]*\})?/g, ' ');
    const ignored = new Set(['frac', 'dfrac', 'tfrac', 'sqrt', 'cdot', 'times', 'div', 'pm', 'mp', 'le', 'leq', 'ge', 'geq', 'neq', 'approx', 'sim', 'cong', 'propto', 'equiv', 'iff', 'implies', 'longrightarrow', 'rightarrow', 'leftrightarrow', 'longleftrightarrow', 'to', 'perp', 'parallel', 'triangle', 'angle', 'therefore', 'because', 'circ', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'log', 'ln', 'lim', 'max', 'min', 'sum', 'prod', 'int', 'binom', 'infty', 'text', 'mathrm', 'operatorname', 'begin', 'end', 'left', 'right', 'displaystyle', 'quad', 'qquad', 'times', 'cdot', 'overline', 'vec', 'hat', 'bar', 'mathbb']);
    const re = /\\([A-Za-z]+)|([A-Za-z])(?:_\{([^{}]+)\}|_([A-Za-z0-9]+))?/g;
    let match;
    while ((match = re.exec(text))) {
      if (match[1]) {
        if (!ignored.has(match[1]) && /^[A-Za-z]+$/.test(match[1])) values.push(`\\${match[1]}`);
      } else {
        const base = match[2];
        const subscript = match[3] || match[4];
        values.push(subscript ? `${base}_{${subscript}}` : base);
      }
    }
    const decoratedSymbols = expression.match(/\\(?:bar|hat|vec|overline)\s*\{[A-Za-z]\}/g) || [];
    values.push(...decoratedSymbols);
    const geometry = /sebangun|kongru|geometri|segitiga|lingkaran|trigonometri|bangun|bayangan/i.test(context);
    if (geometry) {
      const segments = text.match(/\b(?:AB|AC|AD|AE|AH|BC|BD|BE|BH|CD|CE|CH|DE|EF|FG|GH|OA|OB|OC)\b/g) || [];
      for (let index = values.length - 1; index >= 0; index -= 1) {
        if (/^[A-Z]$/.test(values[index])) values.splice(index, 1);
      }
      values.push(...segments);
    }
    const unique = [];
    values.forEach((symbol) => { if (!unique.includes(symbol)) unique.push(symbol); });
    return unique.filter((symbol) => symbol !== '\\infty');
  }

  function directMeaning(symbol, source) {
    const escaped = symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\$${escaped}\\$\\s*(?:adalah|berarti|menyatakan|merupakan|melambangkan|=)\\s*([^\\n.;]{3,130})`, 'i');
    const match = String(source || '').match(re);
    return match ? match[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  }

  function describeSymbol(symbol, context, source) {
    const explicit = directMeaning(symbol, source);
    if (explicit) return explicit;
    const isPhysics = /fisika|kinematika|dinamika|gaya|gerak|energi|momentum|gelombang|listrik|fluida|suhu|kalor|optik|gravitasi/i.test(context);
    const isGeometry = /sebangun|kongru|geometri|segitiga|lingkaran|trigonometri|bangun|bayangan/i.test(context);
    const isSequence = /barisan|deret|pola|rekursif/i.test(context);
    const isAlgebra = /fungsi|linear|persamaan|aljabar|kuadrat|model/i.test(context);
    const isStats = /statistik|data|sebaran|mean|median|sampel|regresi/i.test(context);
    const isProbability = /peluang|probabilitas|kombinatorika|kejadian|sampel ruang/i.test(context);
    const greek = {
      '\\pi': 'konstanta pi, kira-kira 3,14', '\\theta': 'besar sudut yang sedang dibahas', '\\alpha': 'sudut atau parameter alfa; maknanya mengikuti definisi soal', '\\beta': 'parameter beta yang ditentukan oleh konteks soal', '\\gamma': 'sudut atau parameter gamma yang ditentukan oleh konteks soal', '\\mu': isStats ? 'rata-rata populasi' : 'parameter mu yang ditentukan oleh konteks soal', '\\sigma': isStats ? 'simpangan baku populasi' : 'parameter sigma yang ditentukan oleh konteks soal', '\\rho': isPhysics ? 'massa jenis atau parameter rho sesuai konteks' : 'parameter rho yang ditentukan oleh konteks soal', '\\Delta': 'perubahan antara nilai akhir dan nilai awal'
    };
    if (symbol === '\\bar{x}' && isStats) return 'rata-rata data';
    if (greek[symbol]) return greek[symbol];
    if (/^[A-Z]{2}$/.test(symbol) && isGeometry) return `panjang ruas garis ${symbol}`;
    const base = symbol.split('_')[0];
    const subscript = symbol.includes('_') ? symbol.slice(symbol.indexOf('_') + 1).replace(/[{}]/g, '') : '';
    if (isProbability) {
      const meanings = { P: 'peluang', n: 'banyaknya anggota atau hasil', S: 'ruang sampel, yaitu semua hasil yang mungkin', A: 'kejadian A', B: 'kejadian B', r: 'banyak objek yang dipilih', k: 'banyak susunan yang dicari' };
      if (meanings[base]) return meanings[base] + (subscript ? ` pada indeks ${subscript}` : '');
    }
    if (isStats) {
      const meanings = { x: 'nilai data', f: 'frekuensi atau banyak kemunculan data', n: 'banyak data', '\\bar{x}': 'rata-rata data', m: 'titik tengah kelas', s: 'simpangan baku sampel', P: 'persentil yang ditentukan' };
      if (meanings[symbol] || meanings[base]) return meanings[symbol] || meanings[base] + (subscript ? ` ke-${subscript}` : '');
    }
    if (isSequence) {
      const meanings = { U: 'suku barisan', S: 'jumlah suku', a: 'suku pertama', d: 'beda tetap antar-suku', r: 'rasio pengali antar-suku', n: 'nomor urutan suku' };
      if (meanings[base]) return meanings[base] + (subscript ? ` ke-${subscript}` : '');
    }
    if (isAlgebra) {
      const meanings = { m: 'gradien, yaitu perubahan nilai y untuk setiap kenaikan satu satuan x', b: 'titik potong grafik dengan sumbu-y atau konstanta', a: 'koefisien atau nilai awal yang ditentukan pada model', c: 'konstanta pada persamaan', x: 'masukan atau nilai yang dicari', y: 'keluaran atau hasil model' };
      if (meanings[base]) return meanings[base] + (subscript ? ` dengan indeks ${subscript}` : '');
    }
    if (isGeometry) {
      const meanings = { k: 'faktor skala, yaitu pengali untuk membandingkan dua bangun', a: 'panjang sisi atau besaran yang ditentukan pada gambar', b: 'panjang sisi atau besaran yang ditentukan pada gambar', c: 'panjang sisi atau besaran yang ditentukan pada gambar', h: 'tinggi bangun', t: 'tinggi bangun', r: 'jari-jari lingkaran', d: 'diameter lingkaran', s: 'panjang sisi atau garis pelukis sesuai gambar', P: 'keliling bangun', L: 'luas bangun', V: 'volume bangun', T: 'tinggi yang dicari atau diketahui', x: 'panjang atau nilai yang dicari', y: 'panjang atau nilai yang dicari', m: 'panjang ruas atau gradien sesuai konteks', n: 'panjang ruas atau indeks sesuai konteks' };
      if (meanings[base]) return meanings[base] + (subscript ? ` ke-${subscript}` : '');
      if (/^[A-Z]$/.test(symbol)) return `label titik ${symbol}; jika ditulis berpasangan (misalnya AB), itu menunjukkan ruas AB`;
    }
    if (isPhysics) {
      const meanings = { x: 'posisi atau perpindahan pada sumbu x', y: 'posisi atau perpindahan pada sumbu y', s: 'jarak atau perpindahan', t: 'waktu', v: 'kecepatan', a: 'percepatan', m: 'massa', F: 'gaya', g: 'percepatan gravitasi', W: 'usaha atau berat, sesuai konteks', E: 'energi', P: 'daya atau tekanan, sesuai konteks', p: 'momentum atau tekanan, sesuai konteks', Q: 'kalor atau muatan listrik, sesuai konteks', I: 'kuat arus listrik', R: 'hambatan listrik', V: 'beda potensial atau volume, sesuai konteks', T: 'suhu atau periode, sesuai konteks', f: 'frekuensi', q: 'muatan listrik', r: 'jarak dari pusat atau jari-jari' };
      if (meanings[base]) return meanings[base] + (subscript ? ` dengan indeks ${subscript}` : '');
    }
    const generic = { x: 'nilai yang belum diketahui atau masukan model', y: 'hasil atau nilai yang bergantung pada masukan', n: 'banyaknya unsur atau nomor urutan', a: 'nilai awal atau koefisien', b: 'koefisien atau nilai tetap', c: 'konstanta atau nilai tetap', k: 'konstanta pengali', t: 'waktu atau indeks, sesuai konteks', r: 'rasio atau ukuran yang ditentukan soal', m: 'koefisien atau banyaknya unsur', p: 'peluang atau parameter yang ditentukan soal', q: 'peluang atau parameter yang ditentukan soal' };
    if (generic[base]) return generic[base] + (subscript ? ` (indeks ${subscript})` : '');
    if (/^\\[A-Za-z]+$/.test(symbol)) return `${symbol.slice(1)}: lambang khusus; artinya perlu dicocokkan dengan keterangan pada soal`;
    return `besaran yang didefinisikan oleh konteks dan satuan pada soal` + (subscript ? ` (indeks ${subscript})` : '');
  }

  function splitRelation(expression) {
    const relation = /(?:=|<|>|\\(?:leq?|geq?|neq|approx|sim|cong|propto|equiv|iff|implies|longrightarrow|to|perp|parallel))/g;
    const match = relation.exec(expression);
    if (!match) return null;
    return { left: expression.slice(0, match.index).trim(), right: expression.slice(match.index + match[0].length).trim(), sign: match[0] };
  }

  function buildFormulaStudyGuide(sources, contextText, explicitSymbols) {
    const source = (Array.isArray(sources) ? sources : [sources]).filter(Boolean).join('\n');
    const context = String(contextText || '');
    const explicit = explicitSymbols && typeof explicitSymbols === 'object' ? explicitSymbols : {};
    const equations = [];
    const seen = new Set();
    extractMath(source).forEach((expression) => {
      if (!isEquation(expression)) return;
      const key = normalizeEquation(expression);
      if (!key || seen.has(key)) return;
      seen.add(key);
      equations.push(expression);
    });
    if (!equations.length) return '';
    const rows = equations.map((expression, index) => {
      const relation = splitRelation(expression);
      const symbols = extractSymbols(expression, context);
      const symbolRows = symbols.map((symbol) => {
        const label = explicit[symbol] || explicit[symbol.replace(/\\/g, '')] || describeSymbol(symbol, context, source);
        return `<div class="materi-symbol-item"><span class="materi-symbol-name">$${escapeHTML(symbol)}$</span><span class="materi-symbol-meaning">${escapeHTML(label)}</span></div>`;
      }).join('');
      const leftText = relation ? readTex(relation.left) : '';
      const rightText = relation ? readTex(relation.right) : readTex(expression);
      const leftSpeech = relation ? `<p><strong>Ruas kiri</strong> menyatakan ${escapeHTML(leftText || 'hasil yang dibandingkan')}.</p>` : '';
      const rightSpeech = `<p><strong>Ruas kanan</strong> dibaca: ${escapeHTML(rightText || 'ikuti urutan operasi pada rumus')}.</p>`;
      const notationNote = `${expression.includes('|') ? ' Tanda |x| berarti nilai mutlak x.' : ''}${expression.includes('!') ? ' Tanda ! berarti faktorial: kalikan bilangan bulat positif dari angka itu turun sampai 1.' : ''}${expression.includes('\\Delta') ? ' Tanda Δ menunjukkan perubahan, yaitu nilai akhir dikurangi nilai awal.' : ''}`;
      const multiplicationNote = /sebangun|kongru|geometri|segitiga|lingkaran|bayangan/i.test(context)
        ? ' Pada geometri, dua huruf kapital berpasangan seperti AB biasanya menamai panjang ruas AB, bukan perkalian A × B. Tanda × di dalam rumus menunjukkan perkalian.'
        : ' Dua simbol besaran yang menempel, seperti ma, berarti m dikali a.';
      return `<details class="materi-formula-item">
        <summary><span>Persamaan ${index + 1}</span><span class="materi-formula-open-label">Lihat arti simbol &amp; cara hitung</span></summary>
        <div class="materi-formula-body">
          <div class="materi-formula-display">$$${escapeHTML(expression)}$$</div>
          <div class="materi-formula-reading">${leftSpeech}${rightSpeech}<p>Kerjakan isi kurung lebih dulu, lalu pangkat atau akar, kali atau bagi, dan terakhir tambah atau kurang.${multiplicationNote}${notationNote}</p></div>
          ${symbolRows ? `<div class="materi-symbol-grid" aria-label="Arti setiap simbol">${symbolRows}</div>` : '<p class="materi-formula-reading">Cari arti lambang dari keterangan besaran dan satuan pada soal.</p>'}
        </div>
      </details>`;
    }).join('');
    const count = equations.length;
    return `<section class="materi-equation-coach" aria-label="Panduan membaca persamaan">
      <details class="materi-equation-coach-details">
        <summary><span class="materi-equation-coach-icon" aria-hidden="true">ƒx</span><span><strong>Jangan hafalkan rumusnya saja</strong><small>${count} persamaan dibedah: arti simbol, operasi, dan cara membacanya</small></span><span class="materi-equation-coach-chevron" aria-hidden="true">⌄</span></summary>
        <div class="materi-equation-coach-content"><p class="materi-equation-coach-intro">Tanda sama dengan berarti kedua ruas bernilai sama. Perhatikan simbol yang diketahui, besaran yang dicari, lalu ikuti operasi di ruas kanan.</p>${rows}</div>
      </details>
    </section>`;
  }

  window.renderMateriVisualGuideHTML = renderVisualGuideHTML;
  window.buildFormulaStudyGuide = buildFormulaStudyGuide;
})();
