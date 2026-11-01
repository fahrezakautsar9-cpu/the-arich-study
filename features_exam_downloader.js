/**
 * ============================================================================
 * The Arich Study — Universal Exam Sheet Downloader & Print Engine
 * File: the_arich_study/features_exam_downloader.js
 * 
 * Supports:
 * - All Curriculum Chapters (Kurikulum Merdeka 7-12 SMP & SMA, 71 Bab)
 * - All UTBK-SNBT Penalaran Matematika Packages (5 Packages, 100 HOTS Questions)
 * - Active CBT Exam Session (view-exam) & Review Session (view-exam-review)
 * - Active PM Exam Session (view-pm-exam) & Review Session (view-pm-review)
 * - Smart Error Bank Remedial Worksheets
 * - Clean A4 Vector PDF Generation via Window.print & Offline .HTML Export
 * ============================================================================
 */

(function (window, document) {
  'use strict';

  // State
  const DownloaderState = {
    isOpen: false,
    currentSource: null, // { type: 'chapter'|'pm'|'cbt'|'error_bank', id, title, subtitle, duration, questions, stimuli }
    config: {
      contentMode: 'soal_only', // 'soal_only' | 'soal_solution' | 'solution_only'
      columns: '2col', // '2col' | '1col'
      includeHeader: true,
      includeInstructions: true,
      includeLJK: true,
      includeScratchpad: false
    }
  };

  // ============================================================================
  // 1. DATA ADAPTERS & NORMALIZERS
  // ============================================================================

  /**
   * Normalizes a chapter from Kurikulum Merdeka (SOAL_BANK_PER_BAB / currentGradeData)
   */
  function normalizeChapterData(chapterId, optionalGrade) {
    let ch = null;
    let gradeData = window.currentGradeData;

    if (optionalGrade && window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[optionalGrade]) {
      gradeData = window.ALL_GRADES_DATA[optionalGrade];
    }

    if (gradeData && gradeData.chapters) {
      ch = gradeData.chapters.find(c => c.id === chapterId);
    }

    // Fallback: search all grades
    if (!ch && window.ALL_GRADES_DATA) {
      for (const g of Object.keys(window.ALL_GRADES_DATA)) {
        const found = window.ALL_GRADES_DATA[g].chapters.find(c => c.id === chapterId);
        if (found) {
          ch = found;
          gradeData = window.ALL_GRADES_DATA[g];
          break;
        }
      }
    }

    // Resolve questions
    let qs = [];
    if (ch && ch.questions && ch.questions.length > 0) {
      qs = ch.questions;
    } else if (typeof window.resolveChapterQuestions === 'function') {
      qs = window.resolveChapterQuestions(chapterId) || [];
    } else if (window.SOAL_BANK_PER_BAB && window.SOAL_BANK_PER_BAB[chapterId]) {
      qs = window.SOAL_BANK_PER_BAB[chapterId];
    }

    const gradeTitle = gradeData ? gradeData.gradeName : 'Matematika SMA/SMP';
    const chTitle = ch ? ch.title : 'Latihan Soal Terstandar';
    const chBadge = ch ? (ch.number ? `Bab ${ch.number}` : (ch.badge || 'Bab')) : 'Bab';
    const isPhysics = ch && ch.subject === 'Fisika';
    const subject = isPhysics ? 'Fisika' : 'Matematika';

    const normalizedQuestions = qs.map((q, idx) => ({
      id: q.id || (idx + 1),
      number: idx + 1,
      type: 'single_choice',
      prompt: q.prompt || '',
      options: q.options || [],
      correct: (typeof q.correct === 'number') ? q.correct : 0,
      hint: q.hint || '',
      explanation: q.explanation || '',
      shortcut: q.tacticalShortcut || q.shortcut || ''
    }));

    return {
      type: 'chapter',
      id: chapterId,
      subject: subject,
      title: `${chBadge}: ${chTitle}`,
      subtitle: `${gradeTitle} • Kurikulum Merdeka (Standar Asesmen Nasional)`,
      duration: '30 Menit',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: []
    };
  }

  /**
   * Normalizes a UTBK PM Package (window.PM_PACKAGES)
   */
  function normalizePMPackage(packageId = 'paket-1') {
    const pkgs = window.PM_PACKAGES || {};
    const pkg = pkgs[packageId] || pkgs['paket-1'];
    if (!pkg) return null;

    const stimuliMap = {};
    if (pkg.stimuli) {
      pkg.stimuli.forEach(s => { stimuliMap[s.id] = s; });
    }

    const normalizedQuestions = (pkg.questions || []).map((q, idx) => ({
      id: q.id || (idx + 1),
      number: q.number || (idx + 1),
      domain: q.domain || 'Penalaran Matematika',
      subtopic: q.subtopic || '',
      type: q.type || 'single_choice',
      stimulusId: q.stimulusId || null,
      stimulus: q.stimulusId ? stimuliMap[q.stimulusId] : null,
      prompt: q.prompt || q.question || '',
      options: q.options || [],
      statements: q.statements || [],
      correct: q.correct,
      correctNumeric: q.correctNumeric,
      hint: q.hint || (q.deconstructorClue ? q.deconstructorClue.strategy : ''),
      explanation: q.explanation || '',
      shortcut: q.tacticalShortcut || ''
    }));

    return {
      type: 'pm',
      id: packageId,
      subject: 'Penalaran Matematika (PM)',
      title: `${pkg.code}: ${pkg.title}`,
      subtitle: `Simulasi Terstandar BPPP Kemendikbudristek • Seleksi Nasional Berdasarkan Tes (SNBT)`,
      duration: '42,5 Menit (Standar CAT Resmi)',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: pkg.stimuli || []
    };
  }

  /**
   * Normalizes current active CBT exam
   */
  function normalizeCurrentCBTExam() {
    const ch = window.currentExamChapter;
    const qs = window.activeQuestions || [];
    const gradeData = window.currentGradeData;

    const gradeTitle = gradeData ? gradeData.gradeName : 'Matematika';
    const chTitle = ch ? ch.title : 'Latihan Soal CBT';
    const chBadge = ch ? (ch.number ? `Bab ${ch.number}` : (ch.badge || 'Bab')) : 'Bab';
    const isPhysics = ch && ch.subject === 'Fisika';
    const subject = isPhysics ? 'Fisika' : 'Matematika';

    const normalizedQuestions = qs.map((q, idx) => ({
      id: q.id || (idx + 1),
      number: idx + 1,
      type: 'single_choice',
      prompt: q.prompt || '',
      options: q.options || [],
      correct: (typeof q.correct === 'number') ? q.correct : 0,
      hint: q.hint || '',
      explanation: q.explanation || '',
      shortcut: q.tacticalShortcut || q.shortcut || ''
    }));

    return {
      type: 'cbt',
      id: ch ? ch.id : 'current-cbt',
      subject: subject,
      title: `${chBadge}: ${chTitle}`,
      subtitle: `${gradeTitle} • Lembar Ujian CBT (The Arich Study)`,
      duration: '30 Menit',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: []
    };
  }

  /**
   * Normalizes current active UTBK PM exam
   */
  function normalizeCurrentPMExam() {
    if (window.featuresPMEngine && typeof window.featuresPMEngine.getState === 'function') {
      const state = window.featuresPMEngine.getState();
      if (state && state.currentPackageId) {
        return normalizePMPackage(state.currentPackageId);
      }
    }
    return normalizePMPackage('paket-1');
  }

  /**
   * Normalizes Smart Error Bank mistakes
   */
  function normalizeErrorBankData() {
    if (!window.TheArichErrorBank) return null;
    const mistakes = window.TheArichErrorBank.getMistakes() || [];
    if (mistakes.length === 0) return null;

    const normalizedQuestions = mistakes.map((m, idx) => ({
      id: m.id || (idx + 1),
      number: idx + 1,
      domain: m.domain || 'Remedial Materi',
      subtopic: m.chapterTitle || '',
      type: m.type || (m.options && m.options.length > 0 ? 'single_choice' : (m.statements ? 'complex_tf' : 'numeric_input')),
      prompt: m.prompt || m.questionText || m.question || '',
      options: m.options || [],
      statements: m.statements || [],
      correct: m.correct,
      correctNumeric: m.correctNumeric || m.correctAnswer,
      hint: m.hint || m.hintText || '',
      explanation: m.explanation || m.explanationHtml || '',
      shortcut: m.shortcut || m.tacticalShortcut || ''
    }));

    const studentName = (window.currentStudent && window.currentStudent.name) ? window.currentStudent.name : 'Siswa';

    return {
      type: 'error_bank',
      id: 'error-bank-remedial',
      subject: 'Matematika & Penalaran',
      title: 'Lembar Kerja Remedial Mandiri',
      subtitle: `Daftar Evaluasi Butir Soal Salah • Akun Siswa: ${studentName}`,
      duration: `${Math.round(normalizedQuestions.length * 2)} Menit`,
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: []
    };
  }

  // ============================================================================
  // 2. HTML & KATEX EXAM SHEET GENERATOR (PRINT READY)
  // ============================================================================

  function generateExamSheetHTML(source, config) {
    if (!source || !source.questions || source.questions.length === 0) {
      return '<div style="padding: 24px; text-align: center; color: #64748b;">Belum ada butir soal yang dapat dicetak.</div>';
    }

    const { contentMode, columns, includeHeader, includeInstructions, includeLJK, includeScratchpad } = config;
    const isTwoCol = (columns === '2col');

    let html = '';

    // A. Official Header (KOP SURAT RESMI)
    if (includeHeader) {
      html += `
        <div class="exam-print-kop">
          <div class="kop-header-row">
            <div class="kop-brand">
              <div class="kop-logo-title">THE ARICH STUDY</div>
              <div class="kop-logo-sub">Platform Asesmen & Pembelajaran Matematika Terstandar</div>
              <div class="kop-logo-curriculum">${source.subtitle}</div>
            </div>
            <div class="kop-score-box">
              <div class="score-box-title">NILAI / PARAF</div>
              <div class="score-box-val">&nbsp;</div>
              <div class="score-box-denom">Rentang 0 - 100</div>
            </div>
          </div>

          <div class="kop-doc-title">
            LEMBAR NASKAH SOAL UJIAN & ASESMEN MATEMATIKA
          </div>

          <div class="kop-meta-grid">
            <div class="meta-row">
              <span class="meta-label">Mata Pelajaran:</span>
              <span class="meta-val"><strong>${source.subject}</strong></span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Nama Siswa:</span>
              <span class="meta-line">........................................................................</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Paket / Bab:</span>
              <span class="meta-val"><strong>${source.title}</strong></span>
            </div>
            <div class="meta-row">
              <span class="meta-label">No. Peserta / NIS:</span>
              <span class="meta-line">........................................................................</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Alokasi Waktu:</span>
              <span class="meta-val">${source.duration}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Kelas / Sekolah:</span>
              <span class="meta-line">........................................................................</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Jumlah Soal:</span>
              <span class="meta-val">${source.questionCount} Butir Soal</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">Tanggal Ujian:</span>
              <span class="meta-line">........................................................................</span>
            </div>
          </div>
        </div>
      `;
    }

    // B. General Instructions (Petunjuk Umum)
    if (includeInstructions && contentMode !== 'solution_only') {
      html += `
        <div class="exam-print-instructions">
          <div class="instructions-title">PETUNJUK UMUM PENGERJAAN:</div>
          <ol class="instructions-list">
            <li>Tulislah nama, nomor peserta, dan identitas Anda secara lengkap dan rapi pada kolom identitas yang telah disediakan.</li>
            <li>Periksa dan bacalah setiap butir naskah soal dengan saksama sebelum Anda mulai memberikan jawaban.</li>
            <li>Untuk soal <strong>Pilihan Ganda</strong>, pilihlah satu jawaban yang paling tepat dengan memberikan tanda silang (X) atau menghitamkan bulatan pada huruf A, B, C, D, atau E.</li>
            <li>Untuk soal <strong>Pilihan Ganda Kompleks</strong>, beri tanda centang (✓) pada kolom Benar atau Salah untuk tiap butir pernyataan.</li>
            <li>Dahulukan menjawab butir-butir soal yang Anda anggap lebih mudah. Gunakan ruang kosong pada lembar ini untuk coretan hitung.</li>
          </ol>
        </div>
      `;
    }

    // C. Questions Body (If contentMode includes questions)
    if (contentMode === 'soal_only' || contentMode === 'soal_solution') {
      html += `<div class="exam-print-section-divider"><span>BAGIAN I: NASKAH SOAL UJIAN</span></div>`;
      html += `<div class="exam-print-questions-container ${isTwoCol ? 'exam-body-2col' : 'exam-body-1col'}">`;

      let currentStimulusId = null;

      source.questions.forEach((q, idx) => {
        // If UTBK PM with a stimulus that hasn't been rendered yet
        if (q.stimulus && q.stimulus.id !== currentStimulusId) {
          currentStimulusId = q.stimulus.id;
          const stim = q.stimulus;

          let stimTableHtml = '';
          if (stim.table && stim.table.headers && stim.table.rows) {
            stimTableHtml = `
              <table class="exam-print-stimulus-table">
                <thead>
                  <tr>
                    ${stim.table.headers.map(h => `<th>${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${stim.table.rows.map(row => `
                    <tr>
                      ${row.map(cell => `<td>${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `;
          }

          let stimFormulaHtml = '';
          if (stim.formula) {
            stimFormulaHtml = `<div class="exam-print-formula-callout font-mono">${stim.formula}</div>`;
          }

          html += `
            <div class="exam-print-stimulus-card">
              <div class="stimulus-card-badge">WACANA STIMULUS ${stim.number || ''}</div>
              <div class="stimulus-card-title">${stim.title}</div>
              <div class="stimulus-card-text">${stim.text || ''}</div>
              ${stimTableHtml}
              ${stimFormulaHtml}
            </div>
          `;
        }

        // Render question card
        html += `
          <div class="exam-print-question-card" id="print-q-${q.number}">
            <div class="q-card-head">
              <span class="q-card-num">${q.number}.</span>
              <div class="q-card-prompt">${q.prompt}</div>
            </div>
        `;

        // Render options based on question type
        const isComplex = (q.type === 'complex' || q.type === 'complex_tf' || (q.statements && q.statements.length > 0));
        const isNumeric = (q.type === 'numeric' || q.type === 'numeric_input' || typeof q.correctNumeric !== 'undefined');

        if (isComplex && q.statements && q.statements.length > 0) {
          // Complex Table (Benar / Salah)
          html += `
            <table class="exam-print-complex-table">
              <thead>
                <tr>
                  <th style="width: 28px; text-align: center;">No</th>
                  <th>Pernyataan Analisis</th>
                  <th style="width: 55px; text-align: center;">Benar</th>
                  <th style="width: 55px; text-align: center;">Salah</th>
                </tr>
              </thead>
              <tbody>
                ${q.statements.map((st, sIdx) => `
                  <tr>
                    <td style="text-align: center; font-weight: bold;">${sIdx + 1}</td>
                    <td>${st.statement || st.text || ''}</td>
                    <td style="text-align: center;"><span class="print-chk-circle"></span></td>
                    <td style="text-align: center;"><span class="print-chk-circle"></span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `;
        } else if (isNumeric) {
          // Numeric Fill-in
          html += `
            <div class="exam-print-numeric-wrapper">
              <span class="numeric-label">Kotak Isian Jawaban Numerik:</span>
              <div class="numeric-box-slot">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</div>
            </div>
          `;
        } else {
          // Standard Single Choice (A, B, C, D, E)
          const optLetters = ['A', 'B', 'C', 'D', 'E'];
          html += `<div class="exam-print-options-list">`;
          (q.options || []).forEach((opt, oIdx) => {
            const letter = optLetters[oIdx] || String.fromCharCode(65 + oIdx);
            html += `
              <div class="exam-print-opt-item">
                <span class="opt-mark-bubble">○ ${letter}.</span>
                <div class="opt-text">${opt}</div>
              </div>
            `;
          });
          html += `</div>`;
        }

        html += `</div>`; // end question-card
      });

      html += `</div>`; // end questions-container
    }

    // D. Printable Student Answer Sheet / LJK Kertas (Optional)
    if (includeLJK && contentMode !== 'solution_only') {
      html += `
        <div class="exam-print-page-break"></div>
        <div class="exam-print-ljk-container">
          <div class="ljk-header">
            <div class="ljk-title">LEMBAR JAWABAN SISWA (LJK MANDIRI)</div>
            <div class="ljk-subtitle">${source.title} • ${source.subtitle}</div>
          </div>

          <div class="ljk-student-info-box">
            <div class="ljk-info-row"><span>Nama Lengkap : ................................................................</span> <span>No. Peserta : ..............................</span></div>
            <div class="ljk-info-row"><span>Kelas / Sekolah : ................................................................</span> <span>Tanda Tangan : ..............................</span></div>
          </div>

          <div class="ljk-petunjuk">
            Petunjuk: Silang (X) atau hitamkan penuh bulatan pilihan jawaban Anda:
          </div>

          <div class="ljk-grid-container">
            ${renderLJKGrid(source.questions)}
          </div>
        </div>
      `;
    }

    // E. Answer Key Sheet & Detailed Step-by-Step Solutions (Optional)
    if (contentMode === 'soal_solution' || contentMode === 'solution_only') {
      html += `
        <div class="exam-print-page-break"></div>
        <div class="exam-print-solutions-container">
          <div class="sol-doc-header">
            <div class="sol-doc-title">KUNCI JAWABAN & PEMBAHASAN LENGKAP</div>
            <div class="sol-doc-subtitle">${source.title} • ${source.subtitle}</div>
          </div>

          <!-- Quick Key Table for Fast Grading -->
          <div class="sol-quick-table-section">
            <div class="quick-table-title">TABEL KUNCI JAWABAN CEPAT:</div>
            ${renderQuickKeyTable(source.questions)}
          </div>

          <!-- Step-by-step Detailed Solutions -->
          <div class="sol-detailed-list space-y-4">
            <div class="detailed-title">PEMBAHASAN RINCI LANGKAH DEMI LANGKAH:</div>
            ${source.questions.map((q, idx) => {
              let keyDisplay = '';
              const isComp = (q.type === 'complex' || q.type === 'complex_tf');
              const isNum = (q.type === 'numeric' || q.type === 'numeric_input');
              if (isComp) {
                keyDisplay = (q.statements || []).map((st, i) => `(${i + 1}) ${st.correct ? 'BENAR' : 'SALAH'}`).join(', ');
              } else if (isNum) {
                keyDisplay = `Nilai: ${q.correctNumeric}`;
              } else {
                const letter = String.fromCharCode(65 + q.correct);
                keyDisplay = `Pilihan ${letter}`;
              }

              let shortcutHtml = '';
              if (q.shortcut) {
                shortcutHtml = `
                  <div class="sol-shortcut-box">
                    <span class="shortcut-tag">⚡ Arich Shortcut (Trik Taktis):</span>
                    <div class="shortcut-body">${q.shortcut}</div>
                  </div>
                `;
              }

              return `
                <div class="sol-item-card">
                  <div class="sol-item-head">
                    <span class="sol-item-num">Nomor ${q.number}</span>
                    <span class="sol-item-key">Kunci: <strong>${keyDisplay}</strong></span>
                  </div>
                  <div class="sol-item-body">
                    ${q.explanation || '<p class="text-slate-500 italic">Pembahasan terperinci mengacu pada konsep dasar materi terkait.</p>'}
                  </div>
                  ${shortcutHtml}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // F. Scratchpad / Lembar Buram (Optional)
    if (includeScratchpad) {
      html += `
        <div class="exam-print-page-break"></div>
        <div class="exam-print-scratchpad-container">
          <div class="scratchpad-title">LEMBAR CORETAN / BURAM SISWA</div>
          <div class="scratchpad-subtitle">Gunakan ruang ini untuk perhitungan manual, sketsa grafik, dan coretan rumus.</div>
          <div class="scratchpad-grid-lines"></div>
        </div>
      `;
    }

    // G. Running Footer
    html += `
      <div class="exam-print-footer">
        <span>The Arich Study — Platform Pembelajaran & Asesmen Terstandar</span>
        <span>Dokumen Resmi Pembelajaran Siswa</span>
      </div>
    `;

    return html;
  }

  function renderLJKGrid(questions) {
    const total = questions.length;
    let html = '<div class="ljk-columns-wrapper">';
    
    // Divide into 2 columns (e.g. 1-10, 11-20)
    const mid = Math.ceil(total / 2);
    const col1 = questions.slice(0, mid);
    const col2 = questions.slice(mid);

    [col1, col2].forEach(col => {
      html += '<div class="ljk-col">';
      col.forEach(q => {
        const isComp = (q.type === 'complex' || q.type === 'complex_tf');
        const isNum = (q.type === 'numeric' || q.type === 'numeric_input');
        if (isComp) {
          html += `
            <div class="ljk-row">
              <span class="ljk-q-num">${q.number}.</span>
              <span class="ljk-note-complex">[Tabel B/S]</span>
            </div>
          `;
        } else if (isNum) {
          html += `
            <div class="ljk-row">
              <span class="ljk-q-num">${q.number}.</span>
              <span class="ljk-slot-box">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
            </div>
          `;
        } else {
          html += `
            <div class="ljk-row">
              <span class="ljk-q-num">${q.number}.</span>
              <span class="ljk-bubbles">( A ) &nbsp; ( B ) &nbsp; ( C ) &nbsp; ( D ) &nbsp; ( E )</span>
            </div>
          `;
        }
      });
      html += '</div>';
    });

    html += '</div>';
    return html;
  }

  function renderQuickKeyTable(questions) {
    const total = questions.length;
    let html = '<table class="sol-quick-table"><thead><tr>';
    for (let i = 1; i <= Math.min(total, 10); i++) {
      html += `<th>No. ${i}</th>`;
    }
    html += '</tr></thead><tbody><tr>';
    for (let i = 0; i < Math.min(total, 10); i++) {
      const q = questions[i];
      const isComp = (q.type === 'complex' || q.type === 'complex_tf');
      const isNum = (q.type === 'numeric' || q.type === 'numeric_input');
      let k = isComp ? 'B/S' : (isNum ? q.correctNumeric : String.fromCharCode(65 + q.correct));
      html += `<td style="font-weight: bold; text-align: center;">${k}</td>`;
    }
    html += '</tr></tbody>';

    if (total > 10) {
      html += '<thead><tr>';
      for (let i = 11; i <= total; i++) {
        html += `<th>No. ${i}</th>`;
      }
      html += '</tr></thead><tbody><tr>';
      for (let i = 10; i < total; i++) {
        const q = questions[i];
        const isComp = (q.type === 'complex' || q.type === 'complex_tf');
        const isNum = (q.type === 'numeric' || q.type === 'numeric_input');
        let k = isComp ? 'B/S' : (isNum ? q.correctNumeric : String.fromCharCode(65 + q.correct));
        html += `<td style="font-weight: bold; text-align: center;">${k}</td>`;
      }
      html += '</tr></tbody>';
    }

    html += '</table>';
    return html;
  }

  // ============================================================================
  // 3. PRINT ENGINE & DOM INJECTION
  // ============================================================================

  function triggerPrintExecution(source, config) {
    let container = document.getElementById('the-arich-print-sheet');
    if (!container) {
      container = document.createElement('div');
      container.id = 'the-arich-print-sheet';
      document.body.appendChild(container);
    }

    // Generate HTML
    container.innerHTML = generateExamSheetHTML(source, config);

    // Trigger KaTeX math rendering inside container
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false,
          strict: false
        });
      } catch (e) {
        console.warn('[ExamDownloader] KaTeX render error:', e);
      }
    }

    // Set printing class
    document.body.classList.add('printing-exam');

    // Trigger native browser print dialog
    setTimeout(() => {
      window.print();

      // Cleanup
      const cleanup = () => {
        document.body.classList.remove('printing-exam');
        window.removeEventListener('afterprint', cleanup);
      };
      window.addEventListener('afterprint', cleanup);

      // Fallback cleanup
      setTimeout(() => {
        document.body.classList.remove('printing-exam');
      }, 2000);
    }, 250);
  }

  // ============================================================================
  // 4. OFFLINE STANDALONE HTML EXPORTER
  // ============================================================================

  function exportStandaloneHTML(source, config) {
    const bodyHtml = generateExamSheetHTML(source, config);
    const cleanFileName = `Naskah_Soal_${(source.title || 'Ujian').replace(/[^a-zA-Z0-9]/g, '_')}.html`;

    const fullDocument = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${source.title} — The Arich Study</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap">
  <style>
    /* Injected Print & Document Styles */
    @page { size: A4 portrait; margin: 12mm 14mm 14mm 14mm; }
    html, body {
      background: #ffffff;
      color: #090d16;
      font-size: 10pt;
      line-height: 1.55;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
    }
    .offline-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      background: #0f172a;
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: sans-serif;
      font-size: 13px;
      z-index: 99999;
    }
    .offline-toolbar button {
      background: #4f46e5;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 13px;
    }
    .offline-toolbar button:hover { background: #4338ca; }
    @media print {
      .offline-toolbar { display: none !important; }
    }
    /* Core Exam Styles */
    .exam-print-kop { border-bottom: 3px double #0f172a; padding-bottom: 10px; margin-bottom: 14px; }
    .kop-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
    .kop-logo-title { font-size: 14pt; font-weight: 900; color: #3730a3; letter-spacing: 0.5px; }
    .kop-logo-sub { font-size: 8.5pt; color: #475569; font-weight: 600; }
    .kop-logo-curriculum { font-size: 8pt; color: #64748b; }
    .kop-score-box { border: 1.5px solid #0f172a; border-radius: 6px; width: 110px; text-align: center; padding: 4px; }
    .score-box-title { font-size: 7.5pt; font-weight: 800; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; }
    .score-box-val { font-size: 14pt; font-weight: 900; height: 26px; }
    .score-box-denom { font-size: 6.5pt; color: #64748b; }
    .kop-doc-title { font-size: 11pt; font-weight: 800; text-align: center; background: #f1f5f9; border-top: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1; padding: 4px; margin-bottom: 8px; letter-spacing: 0.5px; }
    .kop-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 20px; font-size: 8.5pt; }
    .meta-row { display: flex; justify-content: space-between; align-items: center; }
    .meta-label { color: #475569; min-width: 105px; font-weight: 600; }
    .meta-val { color: #0f172a; flex: 1; text-align: left; }
    .meta-line { flex: 1; color: #94a3b8; font-family: monospace; letter-spacing: 1px; }
    .exam-print-instructions { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin-bottom: 14px; font-size: 8pt; page-break-inside: avoid; }
    .instructions-title { font-weight: 800; margin-bottom: 4px; color: #0f172a; }
    .instructions-list { margin: 0; padding-left: 18px; color: #334155; line-height: 1.45; }
    .exam-print-section-divider { text-align: center; margin: 12px 0 16px; border-bottom: 1px solid #cbd5e1; line-height: 0.1em; }
    .exam-print-section-divider span { background: #ffffff; padding: 0 10px; font-weight: 800; font-size: 8.5pt; color: #4338ca; letter-spacing: 1px; }
    .exam-body-2col { column-count: 2; column-gap: 8mm; column-rule: 1px solid #e2e8f0; }
    .exam-body-1col { column-count: 1; }
    .exam-print-stimulus-card { background: #f8fafc; border: 1.5px solid #334155; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; }
    .stimulus-card-badge { display: inline-block; font-size: 7.5pt; font-weight: 800; background: #312e81; color: #ffffff; padding: 2px 6px; border-radius: 4px; margin-bottom: 4px; }
    .stimulus-card-title { font-size: 9.5pt; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    .stimulus-card-text { font-size: 8.5pt; color: #1e293b; line-height: 1.5; margin-bottom: 6px; }
    .exam-print-stimulus-table { width: 100%; border-collapse: collapse; font-size: 8pt; margin: 6px 0; }
    .exam-print-stimulus-table th, .exam-print-stimulus-table td { border: 1px solid #94a3b8; padding: 4px 6px; text-align: left; }
    .exam-print-stimulus-table th { background: #e2e8f0; font-weight: 800; }
    .exam-print-formula-callout { background: #ffffff; border: 1px dashed #64748b; padding: 4px 8px; font-size: 8pt; border-radius: 4px; margin: 4px 0; }
    .exam-print-question-card { margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; border-bottom: 1px dotted #cbd5e1; padding-bottom: 10px; }
    .q-card-head { display: flex; align-items: flex-start; gap: 6px; margin-bottom: 6px; }
    .q-card-num { font-weight: 800; font-size: 9pt; min-width: 20px; color: #0f172a; }
    .q-card-prompt { font-size: 9pt; color: #0f172a; line-height: 1.5; flex: 1; }
    .exam-print-options-list { margin-left: 20px; display: flex; flex-direction: column; gap: 4px; }
    .exam-print-opt-item { display: flex; align-items: flex-start; gap: 6px; font-size: 8.5pt; }
    .opt-mark-bubble { font-weight: 700; color: #1e293b; min-width: 24px; }
    .opt-text { flex: 1; color: #1e293b; }
    .exam-print-complex-table { width: calc(100% - 20px); margin-left: 20px; border-collapse: collapse; font-size: 8pt; margin-top: 6px; }
    .exam-print-complex-table th, .exam-print-complex-table td { border: 1px solid #94a3b8; padding: 4px 6px; }
    .exam-print-complex-table th { background: #f1f5f9; font-weight: 800; }
    .print-chk-circle { display: inline-block; width: 13px; height: 13px; border: 1.5px solid #475569; border-radius: 50%; }
    .exam-print-numeric-wrapper { margin-left: 20px; font-size: 8.5pt; margin-top: 6px; }
    .numeric-box-slot { font-weight: 800; color: #475569; letter-spacing: 2px; }
    .exam-print-page-break { page-break-before: always; break-before: page; margin-top: 20px; }
    .exam-print-ljk-container { border: 2px solid #0f172a; border-radius: 8px; padding: 14px; page-break-inside: avoid; }
    .ljk-header { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 10px; }
    .ljk-title { font-size: 13pt; font-weight: 900; color: #0f172a; letter-spacing: 0.5px; }
    .ljk-subtitle { font-size: 8.5pt; color: #475569; }
    .ljk-student-info-box { font-size: 8.5pt; margin-bottom: 10px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 6px; }
    .ljk-info-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
    .ljk-petunjuk { font-size: 8pt; font-weight: 700; color: #475569; margin-bottom: 8px; }
    .ljk-columns-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ljk-col { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px; }
    .ljk-row { display: flex; align-items: center; justify-content: space-between; padding: 3px 0; border-bottom: 1px dotted #e2e8f0; font-size: 8.5pt; font-family: 'JetBrains Mono', monospace; }
    .ljk-q-num { font-weight: 800; min-width: 25px; }
    .exam-print-solutions-container { page-break-inside: avoid; }
    .sol-doc-header { border-bottom: 2px solid #3730a3; padding-bottom: 6px; margin-bottom: 14px; }
    .sol-doc-title { font-size: 13pt; font-weight: 900; color: #3730a3; }
    .sol-doc-subtitle { font-size: 8.5pt; color: #64748b; }
    .sol-quick-table-section { margin-bottom: 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; }
    .quick-table-title { font-weight: 800; font-size: 8.5pt; margin-bottom: 6px; color: #0f172a; }
    .sol-quick-table { width: 100%; border-collapse: collapse; font-size: 8pt; }
    .sol-quick-table th, .sol-quick-table td { border: 1px solid #94a3b8; padding: 4px 6px; text-align: center; }
    .sol-quick-table th { background: #e2e8f0; font-weight: 800; }
    .sol-item-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin-bottom: 10px; page-break-inside: avoid; }
    .sol-item-head { display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
    .sol-item-num { font-weight: 800; font-size: 9pt; color: #3730a3; }
    .sol-item-key { font-size: 8.5pt; color: #059669; }
    .sol-item-body { font-size: 8.5pt; color: #1e293b; line-height: 1.5; }
    .sol-shortcut-box { background: #eff6ff; border-left: 3px solid #3b82f6; padding: 4px 8px; margin-top: 6px; font-size: 8pt; border-radius: 0 4px 4px 0; }
    .shortcut-tag { font-weight: 800; color: #1d4ed8; }
    .scratchpad-title { font-size: 13pt; font-weight: 900; text-align: center; margin-bottom: 4px; }
    .scratchpad-subtitle { font-size: 8.5pt; text-align: center; color: #64748b; margin-bottom: 20px; }
    .scratchpad-grid-lines { height: 750px; border: 1px solid #cbd5e1; background-image: linear-gradient(#e2e8f0 1px, transparent 1px); background-size: 100% 24px; border-radius: 6px; }
    .exam-print-footer { text-align: center; font-size: 7.5pt; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; margin-top: 20px; display: flex; justify-content: space-between; }
    .katex { font-size: 1.05em !important; color: #000000 !important; }
  </style>
</head>
<body style="padding: 16mm;">

  <!-- Standalone Floating Toolbar -->
  <div class="offline-toolbar">
    <span>Dokumen Siap Cetak • <strong>The Arich Study</strong></span>
    <button onclick="window.print()">🖨️ Cetak / Simpan PDF (A4)</button>
  </div>

  <div id="offline-print-wrapper">
    ${bodyHtml}
  </div>

  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('offline-print-wrapper'), {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    });
  </script>
</body>
</html>`;

    const blob = new Blob([fullDocument], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = cleanFileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  }

  // ============================================================================
  // 5. MODAL UI CONTROLLER & PREVIEW
  // ============================================================================

  function ensureModalExists() {
    let modal = document.getElementById('modal-exam-download');
    if (modal) return modal;

    const modalMarkup = `
      <div id="modal-exam-download" class="hidden fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
        <div class="clean-card rounded-2xl max-w-xl w-full bg-dark-950/95 border border-slate-700/80 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
          
          <!-- Modal Header -->
          <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-dark-900/60">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="printer" class="w-5 h-5"></i>
              </div>
              <div class="min-w-0">
                <h3 class="text-sm sm:text-base font-bold text-white truncate" id="med-title">
                  Cetak & Unduh Naskah Soal (PDF)
                </h3>
                <p class="text-xs text-indigo-300 font-medium truncate" id="med-subtitle">
                  Pilih konfigurasi naskah soal cetak standar A4
                </p>
              </div>
            </div>
            <button type="button" onclick="window.TheArichExamDownloader.closeModal()" class="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition cursor-pointer">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Modal Body / Form Options -->
          <div class="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs">

            <!-- Section 1: Content Mode -->
            <div class="space-y-2">
              <label class="block font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                1. Pilih Isi Dokumen Naskah:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label class="clean-card p-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 flex flex-col justify-between cursor-pointer group">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-white text-xs">Naskah Soal</span>
                    <input type="radio" name="med-content-mode" value="soal_only" checked class="accent-indigo-500">
                  </div>
                  <span class="text-[11px] text-slate-400 leading-snug">Siap uji untuk siswa. Tanpa spoiler kunci jawaban.</span>
                </label>

                <label class="clean-card p-3 rounded-xl border border-indigo-500/40 bg-indigo-950/20 hover:border-indigo-500 flex flex-col justify-between cursor-pointer group">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-indigo-200 text-xs">Soal + Kunci</span>
                    <input type="radio" name="med-content-mode" value="soal_solution" class="accent-indigo-500">
                  </div>
                  <span class="text-[11px] text-slate-400 leading-snug">Naskah lengkap + pembahasan rinci KaTeX di halaman lampiran.</span>
                </label>

                <label class="clean-card p-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 flex flex-col justify-between cursor-pointer group">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-white text-xs">Kunci Saja</span>
                    <input type="radio" name="med-content-mode" value="solution_only" class="accent-indigo-500">
                  </div>
                  <span class="text-[11px] text-slate-400 leading-snug">Panduan pengajar & kunci jawaban cepat untuk koreksi.</span>
                </label>
              </div>
            </div>

            <!-- Section 2: Layout Column -->
            <div class="space-y-2">
              <label class="block font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                2. Format Tata Letak (Layout Halaman A4):
              </label>
              <div class="grid grid-cols-2 gap-2">
                <label class="clean-card p-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 flex items-center justify-between cursor-pointer">
                  <div>
                    <div class="font-bold text-white text-xs">2 Kolom (Format Standar UTBK)</div>
                    <div class="text-[11px] text-slate-400">Hemat 40% kertas, tata letak padat & rapi.</div>
                  </div>
                  <input type="radio" name="med-columns" value="2col" checked class="accent-indigo-500 ml-2">
                </label>

                <label class="clean-card p-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 flex items-center justify-between cursor-pointer">
                  <div>
                    <div class="font-bold text-white text-xs">1 Kolom (Vertikal Luas)</div>
                    <div class="text-[11px] text-slate-400">Format renggang dan lega untuk tulisan panjang.</div>
                  </div>
                  <input type="radio" name="med-columns" value="1col" class="accent-indigo-500 ml-2">
                </label>
              </div>
            </div>

            <!-- Section 3: Extra Features -->
            <div class="space-y-2">
              <label class="block font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                3. Kelengkapan Tambahan:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 cursor-pointer text-slate-300 hover:text-white">
                  <input type="checkbox" id="med-chk-header" checked class="accent-indigo-500 rounded">
                  <span>Kop Surat & Kolom Identitas Siswa</span>
                </label>
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 cursor-pointer text-slate-300 hover:text-white">
                  <input type="checkbox" id="med-chk-instructions" checked class="accent-indigo-500 rounded">
                  <span>Petunjuk Umum Pengerjaan Soal</span>
                </label>
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 cursor-pointer text-slate-300 hover:text-white">
                  <input type="checkbox" id="med-chk-ljk" checked class="accent-indigo-500 rounded">
                  <span>Lembar Jawaban Siswa (LJK Kertas)</span>
                </label>
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 cursor-pointer text-slate-300 hover:text-white">
                  <input type="checkbox" id="med-chk-scratchpad" class="accent-indigo-500 rounded">
                  <span>Lembar Buram / Coretan Hitung</span>
                </label>
              </div>
            </div>

            <!-- Summary callout -->
            <div class="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 text-xs flex items-center gap-2.5">
              <i data-lucide="info" class="w-4 h-4 shrink-0 text-indigo-400"></i>
              <span>Dokumen siap cetak dengan formula matematika <strong>KaTeX murni</strong>. Di dialog print, pilih <em>"Destination: Save as PDF"</em> untuk menyimpan file PDF berkualitas tinggi.</span>
            </div>

          </div>

          <!-- Modal Footer Actions -->
          <div class="p-4 sm:p-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5 shrink-0 bg-dark-900/80">
            <button type="button" onclick="window.TheArichExamDownloader.closeModal()" class="px-3.5 py-2 rounded-xl bg-dark-850 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold transition cursor-pointer">
              Tutup
            </button>

            <div class="flex items-center gap-2">
              <button type="button" onclick="window.TheArichExamDownloader.triggerOfflineDownload()" class="px-3.5 py-2 rounded-xl bg-dark-850 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer" title="Unduh File HTML Mandiri untuk Dibuka Kapan Saja">
                <i data-lucide="download" class="w-4 h-4 text-emerald-400"></i>
                <span class="hidden sm:inline">Unduh</span> File Offline (.html)
              </button>

              <button type="button" onclick="window.TheArichExamDownloader.triggerPrint()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-lg shadow-indigo-600/30 cursor-pointer">
                <i data-lucide="printer" class="w-4 h-4"></i>
                <span>Cetak / Simpan PDF (A4)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalMarkup);
    if (window.lucide) window.lucide.createIcons();
    return document.getElementById('modal-exam-download');
  }

  function readModalConfig() {
    const contentModeEl = document.querySelector('input[name="med-content-mode"]:checked');
    const columnsEl = document.querySelector('input[name="med-columns"]:checked');
    const chkHeader = document.getElementById('med-chk-header');
    const chkInstructions = document.getElementById('med-chk-instructions');
    const chkLJK = document.getElementById('med-chk-ljk');
    const chkScratchpad = document.getElementById('med-chk-scratchpad');

    return {
      contentMode: contentModeEl ? contentModeEl.value : 'soal_only',
      columns: columnsEl ? columnsEl.value : '2col',
      includeHeader: chkHeader ? chkHeader.checked : true,
      includeInstructions: chkInstructions ? chkInstructions.checked : true,
      includeLJK: chkLJK ? chkLJK.checked : true,
      includeScratchpad: chkScratchpad ? chkScratchpad.checked : false
    };
  }

  function openModalWithSource(source) {
    if (!source) return;
    DownloaderState.currentSource = source;

    const modal = ensureModalExists();
    const titleEl = document.getElementById('med-title');
    const subEl = document.getElementById('med-subtitle');

    if (titleEl) titleEl.textContent = `Cetak & Unduh: ${source.title}`;
    if (subEl) subEl.textContent = `${source.subtitle} • ${source.questionCount} Butir Soal`;

    modal.classList.remove('hidden');
    DownloaderState.isOpen = true;
    if (window.lucide) window.lucide.createIcons();
  }

  function closeModal() {
    const modal = document.getElementById('modal-exam-download');
    if (modal) modal.classList.add('hidden');
    DownloaderState.isOpen = false;
  }

  // ============================================================================
  // 6. PUBLIC INTERACTION METHODS
  // ============================================================================

  function openForChapter(chapterId, optionalGrade) {
    const src = normalizeChapterData(chapterId, optionalGrade);
    if (!src || src.questions.length === 0) {
      alert('Soal untuk bab ini sedang disiapkan.');
      return;
    }
    openModalWithSource(src);
  }

  function openForCurrentMateri() {
    if (window.currentDetailChapter) {
      openForChapter(window.currentDetailChapter.id, window.currentDetailGrade);
      return;
    }
    const titleEl = document.getElementById('detail-chapter-title');
    if (titleEl && titleEl.textContent) {
      const title = titleEl.textContent.trim();
      if (window.currentGradeData && window.currentGradeData.chapters) {
        const found = window.currentGradeData.chapters.find(c => c.title === title);
        if (found) {
          openForChapter(found.id);
          return;
        }
      }
    }
    openBulkPicker();
  }

  function openForCurrentExam() {
    const src = normalizeCurrentCBTExam();
    if (!src || src.questions.length === 0) {
      alert('Tidak ada soal yang sedang aktif.');
      return;
    }
    openModalWithSource(src);
  }

  function openForCurrentExamReview() {
    const src = normalizeCurrentCBTExam();
    if (!src) return;
    // Default to including solutions
    openModalWithSource(src);
    setTimeout(() => {
      const solRadio = document.querySelector('input[name="med-content-mode"][value="soal_solution"]');
      if (solRadio) solRadio.checked = true;
    }, 50);
  }

  function openForPMPackage(packageId = 'paket-1') {
    const src = normalizePMPackage(packageId);
    if (!src) {
      alert('Paket Penalaran Matematika tidak ditemukan.');
      return;
    }
    openModalWithSource(src);
  }

  function openForCurrentPM() {
    const src = normalizeCurrentPMExam();
    if (!src) return;
    openModalWithSource(src);
  }

  function openForCurrentPMReview() {
    const src = normalizeCurrentPMExam();
    if (!src) return;
    openModalWithSource(src);
    setTimeout(() => {
      const solRadio = document.querySelector('input[name="med-content-mode"][value="soal_solution"]');
      if (solRadio) solRadio.checked = true;
    }, 50);
  }

  function openForErrorBank() {
    const src = normalizeErrorBankData();
    if (!src || src.questions.length === 0) {
      alert('Belum ada soal di Buku Catatan Salah untuk dicetak.');
      return;
    }
    openModalWithSource(src);
  }

  function triggerPrint() {
    if (!DownloaderState.currentSource) return;
    const cfg = readModalConfig();
    closeModal();
    triggerPrintExecution(DownloaderState.currentSource, cfg);
  }

  function triggerOfflineDownload() {
    if (!DownloaderState.currentSource) return;
    const cfg = readModalConfig();
    exportStandaloneHTML(DownloaderState.currentSource, cfg);
  }

  // Bulk Picker Modal: lets user choose any chapter or UTBK package to download
  function openBulkPicker() {
    const grades = window.ALL_GRADES_DATA || {};
    const pkgs = window.PM_PACKAGES || {};

    let gradeOptions = '';
    Object.keys(grades).forEach(g => {
      const data = grades[g];
      gradeOptions += `<optgroup label="${data.gradeName}">`;
      (data.chapters || []).forEach(ch => {
        gradeOptions += `<option value="ch:${ch.id}:${g}">[${data.gradeShort}] ${ch.number ? 'Bab ' + ch.number + ': ' : ''}${ch.title}</option>`;
      });
      gradeOptions += `</optgroup>`;
    });

    let pmOptions = '<optgroup label="Simulasi UTBK-SNBT (Penalaran Matematika)">';
    Object.keys(pkgs).forEach(pId => {
      const p = pkgs[pId];
      pmOptions += `<option value="pm:${pId}">[UTBK-PM] ${p.code}: ${p.title}</option>`;
    });
    pmOptions += '</optgroup>';

    const promptHtml = `
      <div id="modal-bulk-exam-picker" class="fixed inset-0 z-[125] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="clean-card rounded-2xl max-w-md w-full bg-dark-950 p-5 border border-slate-700/80 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-white text-sm flex items-center gap-2">
              <i data-lucide="printer" class="w-4 h-4 text-indigo-400"></i>
              Pilih Naskah Soal untuk Diunduh / Dicetak
            </h4>
            <button onclick="document.getElementById('modal-bulk-exam-picker').remove()" class="text-slate-400 hover:text-white">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
          <p class="text-xs text-slate-400">
            Pilih bab dari kurikulum SMP/SMA atau salah satu dari 5 paket resmi UTBK-SNBT:
          </p>
          <div>
            <select id="bulk-exam-select" class="w-full p-2.5 rounded-xl bg-dark-900 border border-slate-700 text-white text-xs">
              ${pmOptions}
              ${gradeOptions}
            </select>
          </div>
          <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
            <button onclick="document.getElementById('modal-bulk-exam-picker').remove()" class="px-3 py-1.5 rounded-lg bg-dark-850 text-slate-300 text-xs font-semibold">Batal</button>
            <button onclick="window.TheArichExamDownloader.submitBulkPicker()" class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold">Lanjutkan</button>
          </div>
        </div>
      </div>
    `;

    const old = document.getElementById('modal-bulk-exam-picker');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', promptHtml);
    if (window.lucide) window.lucide.createIcons();
  }

  function submitBulkPicker() {
    const sel = document.getElementById('bulk-exam-select');
    if (!sel) return;
    const val = sel.value;
    const pickerModal = document.getElementById('modal-bulk-exam-picker');
    if (pickerModal) pickerModal.remove();

    if (val.startsWith('ch:')) {
      const parts = val.split(':');
      openForChapter(parts[1], parts[2]);
    } else if (val.startsWith('pm:')) {
      const parts = val.split(':');
      openForPMPackage(parts[1]);
    }
  }

  // ============================================================================
  // 7. PUBLIC REGISTRATION
  // ============================================================================

  window.TheArichExamDownloader = {
    openForChapter,
    openForCurrentMateri,
    openForCurrentExam,
    openForCurrentExamReview,
    openForPMPackage,
    openForCurrentPM,
    openForCurrentPMReview,
    openForErrorBank,
    openBulkPicker,
    submitBulkPicker,
    triggerPrint,
    triggerOfflineDownload,
    closeModal,
    generateExamSheetHTML,
    getState: () => DownloaderState
  };

  // Expose root shortcut
  window.downloadExamPDF = openForChapter;
  window.downloadPMPDF = openForPMPackage;

})(window, document);
