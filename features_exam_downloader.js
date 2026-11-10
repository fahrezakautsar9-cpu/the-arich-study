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
 * - Clean A4 Vector PDF Generation via Hidden Iframe (Zero Blank Pages)
 * - Standalone Offline .HTML Export & Live Paper Preview
 * ============================================================================
 */

(function (window, document) {
  'use strict';

  // State
  const DownloaderState = {
    isOpen: false,
    currentSource: null, // { type, id, title, subtitle, duration, questions, stimuli }
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

  function normalizeChapterData(chapterId, optionalGrade) {
    let ch = null;
    let gradeData = window.currentGradeData;

    if (optionalGrade && window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[optionalGrade]) {
      gradeData = window.ALL_GRADES_DATA[optionalGrade];
    }

    if (gradeData && gradeData.chapters) {
      ch = gradeData.chapters.find(c => c.id === chapterId);
    }

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

    let qs = [];
    if (ch && ch.questions && ch.questions.length > 0) {
      qs = ch.questions;
    } else if (typeof window.resolveChapterQuestions === 'function') {
      qs = window.resolveChapterQuestions(chapterId) || [];
    } else if (window.SOAL_BANK_PER_BAB && window.SOAL_BANK_PER_BAB[chapterId]) {
      qs = window.SOAL_BANK_PER_BAB[chapterId];
    }

    const gradeTitle = gradeData ? gradeData.gradeName : 'Matematika SMA';
    const isPhysics = ch && ch.subject === 'Fisika';
    const subject = isPhysics ? 'Fisika' : 'Matematika';

    // Format clean title without redundant duplicated badges
    let rawTitle = ch ? ch.title : 'Latihan Soal Terstandar';
    let cleanTitle = rawTitle.trim();
    
    // Construct clean grade and curriculum level
    let gradeLevel = gradeTitle;
    if (ch && ch.badge) {
      if (!gradeLevel.toLowerCase().includes(ch.badge.toLowerCase())) {
        gradeLevel += ` (${ch.badge})`;
      }
    }

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
      summary: ch ? (ch.summary || '') : '',
      subtopics: (ch && Array.isArray(ch.subtopics)) ? ch.subtopics : [],
      id: chapterId,
      subject: subject,
      title: cleanTitle,
      gradeLevel: gradeLevel,
      subtitle: `${gradeLevel} • Kurikulum Merdeka`,
      duration: '30 Menit',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: []
    };
  }

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
      gradeLevel: 'Latihan mandiri Penalaran Matematika',
      subtitle: 'Soal orisinal, bukan butir UTBK resmi • Acuan format: kerangka SNPMB 2026',
      duration: '42 menit 30 detik',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: pkg.stimuli || []
    };
  }

  function normalizeCurrentCBTExam() {
    const ch = window.currentExamChapter;
    const qs = window.activeQuestions || [];
    const gradeData = window.currentGradeData;

    const gradeTitle = gradeData ? gradeData.gradeName : 'Matematika SMA';
    const chTitle = ch ? ch.title : 'Latihan Soal CBT';
    const isPhysics = ch && ch.subject === 'Fisika';
    const subject = isPhysics ? 'Fisika' : 'Matematika';

    let cleanTitle = chTitle.trim();
    let gradeLevel = gradeTitle;
    if (ch && ch.badge) {
      if (!gradeLevel.toLowerCase().includes(ch.badge.toLowerCase())) {
        gradeLevel += ` (${ch.badge})`;
      }
    }

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
      summary: ch ? (ch.summary || '') : '',
      subtopics: (ch && Array.isArray(ch.subtopics)) ? ch.subtopics : [],
      id: ch ? ch.id : 'current-cbt',
      subject: subject,
      title: cleanTitle,
      gradeLevel: gradeLevel,
      subtitle: `${gradeLevel} • Kurikulum Merdeka`,
      duration: '30 Menit',
      questionCount: normalizedQuestions.length,
      questions: normalizedQuestions,
      stimuli: []
    };
  }

  function normalizeCurrentPMExam() {
    if (window.featuresPMEngine && typeof window.featuresPMEngine.getState === 'function') {
      const state = window.featuresPMEngine.getState();
      if (state && state.currentPackageId) {
        return normalizePMPackage(state.currentPackageId);
      }
    }
    return normalizePMPackage('paket-1');
  }

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
  // 2. DOCUMENT BODY HTML GENERATOR
  // ============================================================================

  function formatPrintMarkdown(text) {
    if (!text) return '';
    return String(text)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .split(/\n\n+/)
      .map(p => `<p style="margin: 4px 0;">${p.trim().replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  function renderPrintableSubtopicsHTML(source) {
    if (!source || !Array.isArray(source.subtopics) || source.subtopics.length === 0) return '';
    let html = `
      <div class="exam-print-section-divider"><span>RINGKASAN MATERI &amp; VISUALISASI KONSEP</span></div>
      <div class="exam-print-materi-container">
    `;
    source.subtopics.forEach((sub, idx) => {
      const hasVisual = Boolean(sub.visual && sub.visual.image);
      const vTitle = hasVisual ? (sub.visual.title || sub.title || `Diagram ${idx + 1}`) : '';
      const vCaption = hasVisual ? (sub.visual.caption || '') : '';
      const vGuide = (hasVisual && Array.isArray(sub.visual.guide)) ? sub.visual.guide : [];

      const visualFigureHtml = hasVisual ? `
        <figure class="print-materi-figure">
          <div class="print-materi-figure-head">Visualisasi &amp; Bedah Konsep: ${vTitle}</div>
          <img src="${sub.visual.image}" alt="${vTitle}" />
          ${vCaption ? `<figcaption><strong>Keterangan Gambar:</strong> ${vCaption.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</figcaption>` : ''}
          ${vGuide.length > 0 ? `
            <div class="print-materi-guide">
              <div class="print-materi-guide-title">Panduan Membaca Gambar (Fokus Visual):</div>
              <ol class="print-materi-guide-list">
                ${vGuide.map(g => `<li>${String(g).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}
              </ol>
            </div>
          ` : ''}
        </figure>
      ` : '';

      const quickTipText = sub.quickTip || '';
      const exampleText = sub.exampleProblem || sub.example || '';

      html += `
        <div class="print-materi-subtopic-card">
          <div class="print-materi-subtopic-title">${idx + 1}. ${sub.title}</div>
          <div class="print-materi-subtopic-body">${formatPrintMarkdown(sub.concept)}</div>
          ${visualFigureHtml}
          ${quickTipText ? `<div class="print-materi-tip-box"><strong>⚡ Trik Kilat &amp; Rumus Kunci:</strong> ${formatPrintMarkdown(quickTipText)}</div>` : ''}
          ${exampleText ? `<div class="print-materi-example-box"><strong>💡 Contoh Soal Terbimbing:</strong> ${formatPrintMarkdown(exampleText)}</div>` : ''}
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  function generateExamSheetHTML(source, config) {
    if (!source || ((!source.questions || source.questions.length === 0) && (!source.subtopics || source.subtopics.length === 0))) {
      return '<div style="padding: 24px; text-align: center; color: #64748b;">Belum ada butir soal yang dapat dicetak.</div>';
    }

    const { contentMode, columns, includeHeader, includeInstructions, includeLJK, includeScratchpad, includeMateriSummary } = config;
    const isTwoCol = (columns === '2col');

    let html = '';

    // A. Official Header
    if (includeHeader) {
      html += `
        <div class="exam-print-kop">
          <!-- TOP ROW: KOP LOGO & NILAI RUBRIC BOX -->
          <div class="kop-header-row">
            <div class="kop-brand">
              <div class="kop-logo-title">THE ARICH STUDY</div>
              <div class="kop-logo-sub">Platform Asesmen & Pembelajaran Matematika Terstandar</div>
              <div class="kop-logo-curriculum">${source.subtitle}</div>
            </div>
            <div class="kop-score-box">
              <table class="score-rubric-table">
                <thead>
                  <tr>
                    <th>NILAI AKHIR</th>
                    <th>PARAF GURU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="score-cell">&nbsp;</td>
                    <td class="sign-cell">&nbsp;</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">Rentang Skor: 0 – 100</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <!-- FORMAL DOUBLE LINE DIVIDER -->
          <div class="kop-divider-double"></div>

          <!-- DOCUMENT TITLE -->
          <div class="kop-doc-title">
            LEMBAR NASKAH SOAL UJIAN & ASESMEN MATEMATIKA
          </div>

          <!-- 2-COLUMN METADATA TABLE -->
          <table class="kop-meta-table">
            <tr>
              <!-- LEFT COLUMN: DETAIL UJIAN (50%) -->
              <td class="meta-col-left">
                <table class="meta-subtable">
                  <tr>
                    <td class="meta-lbl">Mata Pelajaran</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-val"><strong>${source.subject}</strong></td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">Materi / Bab</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-val"><strong>${source.title}</strong></td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">Tingkat / Fase</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-val">${source.gradeLevel || source.subtitle}</td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">Alokasi Waktu</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-val">${source.duration} &bull; ${source.questionCount} Butir Soal</td>
                  </tr>
                </table>
              </td>

              <!-- CENTER GAP -->
              <td class="meta-col-divider"></td>

              <!-- RIGHT COLUMN: IDENTITAS SISWA (50%) -->
              <td class="meta-col-right">
                <table class="meta-subtable">
                  <tr>
                    <td class="meta-lbl">Nama Siswa</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-line-cell"><div class="print-fill-line"></div></td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">No. Peserta / NIS</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-line-cell"><div class="print-fill-line"></div></td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">Kelas / Ruang</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-line-cell"><div class="print-fill-line"></div></td>
                  </tr>
                  <tr>
                    <td class="meta-lbl">Tanggal Ujian</td>
                    <td class="meta-sep">:</td>
                    <td class="meta-line-cell"><div class="print-fill-line"></div></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `;
    }

    // B. General Instructions
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
            <li>Periksalah kembali seluruh lembar jawaban Anda sebelum naskah dikumpulkan kepada pengawas.</li>
          </ol>
        </div>
      `;
    }

    // B2. Illustrated Study Module / Materi Summary
    if ((includeMateriSummary || contentMode === 'materi_only') && Array.isArray(source.subtopics) && source.subtopics.length > 0) {
      html += renderPrintableSubtopicsHTML(source);
    }

    // C. Questions Body
    if (contentMode === 'soal_only' || contentMode === 'soal_solution') {
      html += `<div class="exam-print-section-divider"><span>BAGIAN I: NASKAH SOAL UJIAN</span></div>`;
      html += `<div class="exam-print-questions-container ${isTwoCol ? 'exam-body-2col' : 'exam-body-1col'}">`;

      let currentStimulusId = null;

      source.questions.forEach((q, idx) => {
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

        html += `
          <div class="exam-print-question-card" id="print-q-${q.number}">
            <div class="q-card-head">
              <span class="q-card-num">${q.number}.</span>
              <div class="q-card-prompt">${q.prompt}</div>
            </div>
        `;

        const isComplex = (q.type === 'complex' || q.type === 'complex_tf' || (q.statements && q.statements.length > 0));
        const isNumeric = (q.type === 'numeric' || q.type === 'numeric_input' || typeof q.correctNumeric !== 'undefined');

        if (isComplex && q.statements && q.statements.length > 0) {
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
          html += `
            <div class="exam-print-numeric-wrapper">
              <span class="numeric-label">Kotak Isian Jawaban Numerik:</span>
              <div class="numeric-box-slot">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</div>
            </div>
          `;
        } else {
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

        html += `</div>`;
      });

      html += `</div>`;
    }

    // D. Printable Student Answer Sheet (LJK)
    if (includeLJK && contentMode !== 'solution_only') {
      html += `
        <div class="exam-print-page-break"></div>
        <div class="exam-print-ljk-container">
          <div class="ljk-header">
            <div class="ljk-title">LEMBAR JAWABAN SISWA (LJK MANDIRI)</div>
            <div class="ljk-subtitle">${source.title} • ${source.subtitle}</div>
          </div>

          <table class="ljk-student-table">
            <tr>
              <td class="ljk-lbl">Nama Lengkap</td>
              <td class="ljk-sep">:</td>
              <td class="ljk-val"><div class="print-fill-line"></div></td>
              <td style="width: 25px;"></td>
              <td class="ljk-lbl">No. Peserta</td>
              <td class="ljk-sep">:</td>
              <td class="ljk-val"><div class="print-fill-line"></div></td>
            </tr>
            <tr>
              <td class="ljk-lbl">Kelas / Sekolah</td>
              <td class="ljk-sep">:</td>
              <td class="ljk-val"><div class="print-fill-line"></div></td>
              <td style="width: 25px;"></td>
              <td class="ljk-lbl">Tanda Tangan</td>
              <td class="ljk-sep">:</td>
              <td class="ljk-val"><div class="print-fill-line"></div></td>
            </tr>
          </table>

          <div class="ljk-petunjuk">
            Petunjuk: Silang (X) atau hitamkan penuh bulatan pilihan jawaban Anda:
          </div>

          <div class="ljk-grid-container">
            ${renderLJKGrid(source.questions)}
          </div>
        </div>
      `;
    }

    // E. Solutions & Explanations
    if (contentMode === 'soal_solution' || contentMode === 'solution_only') {
      html += `
        <div class="exam-print-page-break"></div>
        <div class="exam-print-solutions-container">
          <div class="sol-doc-header">
            <div class="sol-doc-title">KUNCI JAWABAN & PEMBAHASAN LENGKAP</div>
            <div class="sol-doc-subtitle">${source.title} • ${source.subtitle}</div>
          </div>

          <div class="sol-quick-table-section">
            <div class="quick-table-title">TABEL KUNCI JAWABAN CEPAT:</div>
            ${renderQuickKeyTable(source.questions)}
          </div>

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

    // F. Scratchpad
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

    // G. Footer
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
  // 3. FULL DOCUMENT HTML WITH INLINE STYLES (FOR IFRAME & OFFLINE)
  // ============================================================================

  function buildFullPrintableDocumentHTML(source, config) {
    const bodyContent = generateExamSheetHTML(source, config);

    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${source.title} — The Arich Study</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap">
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 14mm 14mm 14mm;
    }
    html, body {
      background: #ffffff !important;
      color: #090d16 !important;
      font-size: 10pt;
      line-height: 1.55;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    * { box-sizing: border-box; }
    
    /* Kop Surat */
    .exam-print-kop { padding-bottom: 4px; margin-bottom: 8px; page-break-inside: avoid; }
    .kop-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
    .kop-brand { flex: 1; padding-right: 15px; }
    .kop-logo-title { font-size: 15pt; font-weight: 900; color: #3730a3; letter-spacing: 0.8px; line-height: 1.1; }
    .kop-logo-sub { font-size: 8.5pt; color: #1e293b; font-weight: 700; margin-top: 2px; line-height: 1.2; }
    .kop-logo-curriculum { font-size: 8pt; color: #64748b; font-weight: 500; margin-top: 1px; }

    /* Score Rubric Box */
    .kop-score-box { width: 135px; border: 1.5px solid #0f172a; border-radius: 6px; background: #ffffff; overflow: hidden; margin-top: 1px; }
    .score-rubric-table { width: 100%; border-collapse: collapse; font-size: 7pt; text-align: center; margin: 0; padding: 0; }
    .score-rubric-table thead tr th { background: #f1f5f9; color: #0f172a; font-weight: 800; padding: 3px 2px; border-bottom: 1.5px solid #0f172a; font-size: 6.5pt; letter-spacing: 0.3px; }
    .score-rubric-table thead tr th:first-child { border-right: 1px solid #cbd5e1; width: 50%; }
    .score-rubric-table tbody tr td { height: 25px; background: #ffffff; vertical-align: middle; }
    .score-rubric-table tbody tr td:first-child { border-right: 1px solid #cbd5e1; }
    .score-rubric-table tfoot tr td { background: #f8fafc; color: #64748b; font-size: 5.5pt; font-weight: 600; border-top: 1px solid #e2e8f0; padding: 1.5px 0; }

    /* Formal Double Line */
    .kop-divider-double { border-top: 2.5px solid #0f172a; border-bottom: 0.75px solid #0f172a; height: 3px; margin: 5px 0 7px 0; }

    /* Document Title */
    .kop-doc-title { font-size: 9.5pt; font-weight: 800; text-align: center; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 3.5px 8px; margin-bottom: 7px; letter-spacing: 0.8px; color: #0f172a; text-transform: uppercase; }

    /* 2-Column Metadata Table */
    .kop-meta-table { width: 100%; border-collapse: collapse; margin-bottom: 4px; table-layout: fixed; }
    .meta-col-left { width: 48.5%; vertical-align: top; padding: 0; }
    .meta-col-divider { width: 3%; }
    .meta-col-right { width: 48.5%; vertical-align: top; padding: 0; }
    .meta-subtable { width: 100%; border-collapse: collapse; font-size: 8.5pt; line-height: 1.35; }
    .meta-subtable tr td { padding: 2px 0; vertical-align: top; }
    .meta-lbl { width: 102px; min-width: 102px; font-weight: 600; color: #475569; white-space: nowrap; }
    .meta-sep { width: 12px; min-width: 12px; text-align: center; color: #64748b; font-weight: bold; }
    .meta-val { color: #0f172a; word-break: normal; }
    .meta-line-cell { width: 100%; vertical-align: bottom; padding-bottom: 3px; }
    .print-fill-line { border-bottom: 1.5px dotted #64748b; height: 13px; width: 100%; display: block; }

    /* Instructions */
    .exam-print-instructions { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 12px; margin-bottom: 10px; font-size: 7.5pt; page-break-inside: avoid; }
    .instructions-title { font-weight: 800; margin-bottom: 2px; color: #0f172a; letter-spacing: 0.3px; }
    .instructions-list { margin: 0; padding-left: 16px; color: #334155; line-height: 1.4; }
    .instructions-list li { margin-bottom: 1.5px; }

    /* Divider */
    .exam-print-section-divider { text-align: center; margin: 10px 0 14px; border-bottom: 1px solid #cbd5e1; line-height: 0.1em; page-break-inside: avoid; }
    .exam-print-section-divider span { background: #ffffff; padding: 0 10px; font-weight: 800; font-size: 8.5pt; color: #3730a3; letter-spacing: 1px; }

    /* Column Layouts */
    .exam-body-2col { column-count: 2; column-gap: 8mm; column-rule: 1px solid #e2e8f0; }
    .exam-body-1col { column-count: 1; }

    /* Stimulus Card */
    .exam-print-stimulus-card { background: #f8fafc; border: 1.5px solid #334155; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; }
    .stimulus-card-badge { display: inline-block; font-size: 7pt; font-weight: 800; background: #312e81; color: #ffffff; padding: 2px 6px; border-radius: 3px; margin-bottom: 4px; }
    .stimulus-card-title { font-size: 9.5pt; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    .stimulus-card-text { font-size: 8.5pt; color: #1e293b; line-height: 1.5; margin-bottom: 6px; }
    .exam-print-stimulus-table { width: 100%; border-collapse: collapse; font-size: 7.5pt; margin: 6px 0; }
    .exam-print-stimulus-table th, .exam-print-stimulus-table td { border: 1px solid #94a3b8; padding: 4px 6px; text-align: left; }
    .exam-print-stimulus-table th { background: #e2e8f0; font-weight: 800; color: #0f172a; }
    .exam-print-formula-callout { background: #ffffff; border: 1px dashed #64748b; padding: 4px 8px; font-size: 8pt; border-radius: 4px; margin: 4px 0; color: #0f172a; }

    /* Questions */
    .exam-print-question-card { margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; border-bottom: 1px dotted #cbd5e1; padding-bottom: 10px; }
    .q-card-head { display: flex; align-items: flex-start; gap: 6px; margin-bottom: 6px; }
    .q-card-num { font-weight: 800; font-size: 9.5pt; min-width: 20px; color: #0f172a; }
    .q-card-prompt { font-size: 9pt; color: #0f172a; line-height: 1.5; flex: 1; }
    .exam-print-options-list { margin-left: 20px; display: flex; flex-direction: column; gap: 4px; }
    .exam-print-opt-item { display: flex; align-items: flex-start; gap: 6px; font-size: 8.5pt; }
    .opt-mark-bubble { font-weight: 700; color: #1e293b; min-width: 24px; }
    .opt-text { flex: 1; color: #1e293b; }
    .exam-print-complex-table { width: calc(100% - 20px); margin-left: 20px; border-collapse: collapse; font-size: 8pt; margin-top: 6px; }
    .exam-print-complex-table th, .exam-print-complex-table td { border: 1px solid #94a3b8; padding: 4px 6px; }
    .exam-print-complex-table th { background: #f1f5f9; font-weight: 800; color: #0f172a; }
    .print-chk-circle { display: inline-block; width: 13px; height: 13px; border: 1.5px solid #475569; border-radius: 50%; }
    .exam-print-numeric-wrapper { margin-left: 20px; font-size: 8.5pt; margin-top: 6px; }
    .numeric-box-slot { font-weight: 800; color: #475569; letter-spacing: 2px; }

    /* Page Break */
    .exam-print-page-break { page-break-before: always; break-before: page; margin-top: 16px; }

    /* LJK */
    .exam-print-ljk-container { border: 2px solid #0f172a; border-radius: 8px; padding: 14px; page-break-inside: avoid; }
    .ljk-header { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 10px; }
    .ljk-title { font-size: 13pt; font-weight: 900; color: #0f172a; letter-spacing: 0.5px; }
    .ljk-subtitle { font-size: 8.5pt; color: #475569; }
    .ljk-student-table { width: 100%; border-collapse: collapse; font-size: 8pt; margin-bottom: 8px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 4px; }
    .ljk-student-table td { padding: 2.5px 0; vertical-align: middle; }
    .ljk-lbl { font-weight: 600; color: #334155; white-space: nowrap; width: 85px; }
    .ljk-sep { width: 12px; text-align: center; font-weight: bold; color: #64748b; }
    .ljk-petunjuk { font-size: 8pt; font-weight: 700; color: #475569; margin-bottom: 8px; }
    .ljk-columns-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ljk-col { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px; }
    .ljk-row { display: flex; align-items: center; justify-content: space-between; padding: 3px 0; border-bottom: 1px dotted #e2e8f0; font-size: 8.5pt; font-family: 'JetBrains Mono', monospace; }
    .ljk-q-num { font-weight: 800; min-width: 25px; color: #0f172a; }

    /* Solutions */
    .exam-print-solutions-container { page-break-inside: avoid; }
    .sol-doc-header { border-bottom: 2px solid #3730a3; padding-bottom: 6px; margin-bottom: 14px; }
    .sol-doc-title { font-size: 13pt; font-weight: 900; color: #3730a3; }
    .sol-doc-subtitle { font-size: 8.5pt; color: #64748b; }
    .sol-quick-table-section { margin-bottom: 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; page-break-inside: avoid; }
    .quick-table-title { font-weight: 800; font-size: 8.5pt; margin-bottom: 6px; color: #0f172a; }
    .sol-quick-table { width: 100%; border-collapse: collapse; font-size: 8pt; }
    .sol-quick-table th, .sol-quick-table td { border: 1px solid #94a3b8; padding: 4px 6px; text-align: center; }
    .sol-quick-table th { background: #e2e8f0; font-weight: 800; color: #0f172a; }
    .sol-item-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin-bottom: 10px; page-break-inside: avoid; }
    .sol-item-head { display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
    .sol-item-num { font-weight: 800; font-size: 9pt; color: #3730a3; }
    .sol-item-key { font-size: 8.5pt; color: #059669; }
    .sol-item-body { font-size: 8.5pt; color: #1e293b; line-height: 1.5; }
    .sol-shortcut-box { background: #eff6ff; border-left: 3px solid #3b82f6; padding: 4px 8px; margin-top: 6px; font-size: 8pt; border-radius: 0 4px 4px 0; }
    .shortcut-tag { font-weight: 800; color: #1d4ed8; }

    /* Scratchpad */
    .scratchpad-title { font-size: 13pt; font-weight: 900; text-align: center; margin-bottom: 4px; color: #0f172a; }
    .scratchpad-subtitle { font-size: 8.5pt; text-align: center; color: #64748b; margin-bottom: 16px; }
    .scratchpad-grid-lines { height: 720px; border: 1px solid #cbd5e1; background-image: linear-gradient(#e2e8f0 1px, transparent 1px); background-size: 100% 24px; border-radius: 6px; }

    /* Illustrated Study Module / Materi Figures */
    .exam-print-materi-container { margin-bottom: 14px; }
    .print-materi-subtopic-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; background: #ffffff; }
    .print-materi-subtopic-title { font-size: 10pt; font-weight: 800; color: #3730a3; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
    .print-materi-subtopic-body { font-size: 8.8pt; color: #0f172a; line-height: 1.55; margin-bottom: 8px; }
    .print-materi-figure { page-break-inside: avoid !important; break-inside: avoid !important; max-width: 100% !important; margin: 8px 0 10px 0; border: 1.5px solid #334155; border-radius: 6px; overflow: hidden; background: #0f172a; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .print-materi-figure-head { background: #1e293b; color: #f8fafc; font-size: 8pt; font-weight: 800; padding: 5px 10px; border-bottom: 1px solid #334155; letter-spacing: 0.3px; }
    .print-materi-figure img { display: block; width: 100%; max-width: 100% !important; max-height: 360px; height: auto; object-fit: contain; margin: 0 auto; background: #0f172a; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .print-materi-figure figcaption { background: #f8fafc; color: #1e293b; font-size: 8pt; line-height: 1.45; padding: 6px 10px; border-top: 1px solid #cbd5e1; }
    .print-materi-guide { background: #f0fdfa; color: #0f172a; font-size: 7.8pt; padding: 6px 10px; border-top: 1px dashed #99f6e4; }
    .print-materi-guide-title { font-weight: 800; color: #0f766e; margin-bottom: 3px; }
    .print-materi-guide-list { margin: 0; padding-left: 16px; line-height: 1.45; }
    .print-materi-tip-box { background: #fffbeb; border-left: 3px solid #f59e0b; padding: 5px 8px; font-size: 8.2pt; margin-top: 6px; border-radius: 0 4px 4px 0; color: #78350f; page-break-inside: avoid; }
    .print-materi-example-box { background: #f8fafc; border-left: 3px solid #4f46e5; padding: 5px 8px; font-size: 8.2pt; margin-top: 6px; border-radius: 0 4px 4px 0; color: #1e293b; page-break-inside: avoid; }

    /* Footer */
    .exam-print-footer { text-align: center; font-size: 7.5pt; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 6px; margin-top: 16px; display: flex; justify-content: space-between; }
    .katex { font-size: 1.05em !important; color: #000000 !important; }
  </style>
</head>
<body style="padding: 10mm 12mm;">
  <div id="print-content-wrapper">
    ${bodyContent}
  </div>

  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
  <script>
    if (window.renderMathInElement) {
      renderMathInElement(document.getElementById('print-content-wrapper'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  </script>
</body>
</html>`;
  }

  // ============================================================================
  // 4. BULLETPROOF IFRAME PRINT ENGINE (ZERO BLANK PAGES)
  // ============================================================================

  function triggerPrintExecution(source, config) {
    const fullHtml = buildFullPrintableDocumentHTML(source, config);

    // Remove any previous print iframe
    const oldIframe = document.getElementById('arich-print-iframe');
    if (oldIframe) oldIframe.remove();

    const iframe = document.createElement('iframe');
    iframe.id = 'arich-print-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(fullHtml);
    doc.close();

    const doPrint = () => {
      try {
        if (iframe.contentWindow.renderMathInElement) {
          iframe.contentWindow.renderMathInElement(doc.body, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        }
      } catch (e) {
        console.warn('Iframe KaTeX warning:', e);
      }

      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (iframe && iframe.parentNode) iframe.remove();
        }, 30000);
      }, 500);
    };

    if (doc.readyState === 'complete') {
      doPrint();
    } else {
      iframe.onload = doPrint;
    }
  }

  // ============================================================================
  // 5. OFFLINE STANDALONE HTML EXPORTER
  // ============================================================================

  function exportStandaloneHTML(source, config) {
    const fullHtml = buildFullPrintableDocumentHTML(source, config);
    const cleanFileName = `Naskah_Soal_${(source.title || 'Ujian').replace(/[^a-zA-Z0-9]/g, '_')}.html`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
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
  // 6. LIVE ON-SCREEN PAPER PREVIEW MODAL
  // ============================================================================

  function openPreviewModal() {
    if (!DownloaderState.currentSource) return;
    const cfg = readModalConfig();
    const fullHtml = buildFullPrintableDocumentHTML(DownloaderState.currentSource, cfg);

    const previewModalMarkup = `
      <div id="modal-exam-live-preview" class="fixed inset-0 z-[130] flex flex-col bg-black/90 backdrop-blur-md animate-in fade-in">
        <!-- Top Toolbar -->
        <div class="h-14 bg-dark-900 border-b border-slate-800 px-4 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">Pratinjau Lembar A4: ${DownloaderState.currentSource.title}</h4>
              <p class="text-[11px] text-slate-400">Pastikan seluruh format dan rumus matematika sudah tampil rapi sebelum dicetak.</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.TheArichExamDownloader.triggerPrint()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-lg shadow-indigo-600/30 cursor-pointer">
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>Cetak / Simpan PDF</span>
            </button>
            <button onclick="document.getElementById('modal-exam-live-preview').remove()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800 transition">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- Paper Body Container -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-slate-950/80">
          <div class="w-full max-w-4xl bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 overflow-x-hidden min-h-[900px]" id="preview-paper-sheet">
            <!-- Injected via Iframe or innerHTML -->
            ${generateExamSheetHTML(DownloaderState.currentSource, cfg)}
          </div>
        </div>
      </div>
    `;

    const old = document.getElementById('modal-exam-live-preview');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', previewModalMarkup);

    const sheet = document.getElementById('preview-paper-sheet');
    if (sheet && window.renderMathInElement) {
      window.renderMathInElement(sheet, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 7. MODAL UI CONTROLLER & OPTIONS
  // ============================================================================

  function ensureModalExists() {
    let modal = document.getElementById('modal-exam-download');
    if (modal) return modal;

    const modalMarkup = `
      <div id="modal-exam-download" class="hidden fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
        <div class="clean-card rounded-2xl max-w-2xl w-full bg-dark-950 border border-slate-700/80 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
          
          <!-- Modal Header -->
          <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-dark-900/80">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-11 h-11 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="printer" class="w-6 h-6"></i>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-black text-white truncate" id="med-title">
                  Cetak & Unduh Naskah Soal (PDF)
                </h3>
                <p class="text-xs sm:text-sm text-indigo-300 font-medium truncate" id="med-subtitle">
                  Pilih konfigurasi naskah soal cetak standar A4
                </p>
              </div>
            </div>
            <button type="button" onclick="window.TheArichExamDownloader.closeModal()" class="w-9 h-9 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition cursor-pointer">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- Modal Body / Form Options -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">

            <!-- Section 1: Content Mode -->
            <div class="space-y-2.5">
              <label class="block font-black text-slate-100 uppercase tracking-wider text-xs">
                1. Pilih Isi Dokumen Naskah:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label class="clean-card p-3.5 rounded-xl border border-slate-800 hover:border-slate-600 bg-slate-900/90 flex flex-col justify-between cursor-pointer group transition">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-extrabold text-white text-sm">Naskah Soal Saja</span>
                    <input type="radio" name="med-content-mode" value="soal_only" checked class="w-4 h-4 accent-indigo-500">
                  </div>
                  <span class="text-xs text-slate-300 leading-relaxed">Siap uji untuk siswa. Tanpa spoiler kunci jawaban.</span>
                </label>

                <label id="med-lbl-solution" onclick="window.TheArichExamDownloader.handleSolutionOptionClick(event)" class="clean-card p-3.5 rounded-xl border ${window.isTeacherUnlocked ? 'border-indigo-500/40 bg-indigo-950/20 hover:border-indigo-400' : 'border-slate-800/80 bg-slate-900/40 opacity-70'} flex flex-col justify-between cursor-pointer group transition">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-extrabold ${window.isTeacherUnlocked ? 'text-indigo-200' : 'text-slate-400'} text-sm">Soal + Kunci &amp; Solusi</span>
                    ${window.isTeacherUnlocked ? '<input type="radio" name="med-content-mode" value="soal_solution" class="w-4 h-4 accent-indigo-500">' : '<span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold flex items-center gap-1"><i data-lucide="lock" class="w-3 h-3"></i> Mode Guru</span>'}
                  </div>
                  <span class="text-xs ${window.isTeacherUnlocked ? 'text-slate-300' : 'text-slate-400'} leading-relaxed">${window.isTeacherUnlocked ? 'Naskah lengkap + pembahasan KaTeX di halaman lampiran.' : 'Hanya ada di Mode Guru. Memerlukan PIN Guru.'}</span>
                </label>

                <label id="med-lbl-keyonly" onclick="window.TheArichExamDownloader.handleSolutionOptionClick(event)" class="clean-card p-3.5 rounded-xl border ${window.isTeacherUnlocked ? 'border-slate-800 hover:border-slate-600 bg-slate-900/90' : 'border-slate-800/80 bg-slate-900/40 opacity-70'} flex flex-col justify-between cursor-pointer group transition">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-extrabold ${window.isTeacherUnlocked ? 'text-white' : 'text-slate-400'} text-sm">Kunci &amp; Pembahasan</span>
                    ${window.isTeacherUnlocked ? '<input type="radio" name="med-content-mode" value="solution_only" class="w-4 h-4 accent-indigo-500">' : '<span class="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold flex items-center gap-1"><i data-lucide="lock" class="w-3 h-3"></i> Mode Guru</span>'}
                  </div>
                  <span class="text-xs ${window.isTeacherUnlocked ? 'text-slate-300' : 'text-slate-400'} leading-relaxed">${window.isTeacherUnlocked ? 'Panduan pengajar & kunci jawaban cepat untuk koreksi.' : 'Hanya ada di Mode Guru. Memerlukan PIN Guru.'}</span>
                </label>
              </div>
            </div>

            <!-- Section 2: Layout Column -->
            <div class="space-y-2.5">
              <label class="block font-black text-slate-100 uppercase tracking-wider text-xs">
                2. Format Tata Letak (Layout Halaman A4):
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <label class="clean-card p-3.5 rounded-xl border border-slate-800 hover:border-slate-600 bg-slate-900/90 flex items-center justify-between cursor-pointer transition">
                  <div>
                    <div class="font-bold text-white text-sm">2 Kolom (Format Standar UTBK/UN)</div>
                    <div class="text-xs text-slate-300 mt-0.5">Hemat 40% kertas, tata letak padat, profesional & rapi.</div>
                  </div>
                  <input type="radio" name="med-columns" value="2col" checked class="w-4 h-4 accent-indigo-500 ml-3">
                </label>

                <label class="clean-card p-3.5 rounded-xl border border-slate-800 hover:border-slate-600 bg-slate-900/90 flex items-center justify-between cursor-pointer transition">
                  <div>
                    <div class="font-bold text-white text-sm">1 Kolom (Vertikal Luas)</div>
                    <div class="text-xs text-slate-300 mt-0.5">Format renggang dan lega untuk tulisan panjang.</div>
                  </div>
                  <input type="radio" name="med-columns" value="1col" class="w-4 h-4 accent-indigo-500 ml-3">
                </label>
              </div>
            </div>

            <!-- Section 3: Extra Features -->
            <div class="space-y-2.5">
              <label class="block font-black text-slate-100 uppercase tracking-wider text-xs">
                3. Kelengkapan Tambahan:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-slate-200 hover:text-white transition">
                  <input type="checkbox" id="med-chk-header" checked class="w-4 h-4 accent-indigo-500 rounded">
                  <span class="text-xs font-semibold">Kop Surat & Kolom Identitas Siswa</span>
                </label>
                <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-slate-200 hover:text-white transition">
                  <input type="checkbox" id="med-chk-instructions" checked class="w-4 h-4 accent-indigo-500 rounded">
                  <span class="text-xs font-semibold">Petunjuk Umum Pengerjaan Ujian</span>
                </label>
                <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-slate-200 hover:text-white transition">
                  <input type="checkbox" id="med-chk-ljk" checked class="w-4 h-4 accent-indigo-500 rounded">
                  <span class="text-xs font-semibold">Lembar Jawaban Siswa (LJK Kertas)</span>
                </label>
                <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-slate-200 hover:text-white transition">
                  <input type="checkbox" id="med-chk-scratchpad" class="w-4 h-4 accent-indigo-500 rounded">
                  <span class="text-xs font-semibold">Lembar Buram / Coretan Hitung (Grid)</span>
                </label>
                <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-slate-200 hover:text-white transition sm:col-span-2">
                  <input type="checkbox" id="med-chk-materi" class="w-4 h-4 accent-indigo-500 rounded">
                  <span class="text-xs font-semibold">Sertakan Ringkasan Materi &amp; Diagram Visual Bab (Ilustrasi Buku Cetak)</span>

                </label>
              </div>
            </div>

            <!-- Guarantee Callout -->
            <div class="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm flex items-start gap-3">
              <i data-lucide="check-circle" class="w-5 h-5 shrink-0 text-emerald-400 mt-0.5"></i>
              <div class="leading-relaxed">
                Naskah diproses dengan <strong>Clean Vector Printing Engine</strong> (anti-halaman kosong). Pada dialog cetak, pilih <em>"Destination: Save as PDF"</em> untuk mengunduh file PDF beresolusi tinggi.
              </div>
            </div>

          </div>

          <!-- Modal Footer Actions -->
          <div class="p-4 sm:p-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0 bg-dark-900/90">
            <button type="button" onclick="window.TheArichExamDownloader.closeModal()" class="px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition cursor-pointer">
              Tutup
            </button>

            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="window.TheArichExamDownloader.openPreviewModal()" class="px-3.5 py-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer" title="Lihat Tampilan Dokumen di Layar">
                <i data-lucide="eye" class="w-4 h-4 text-indigo-400"></i>
                <span>Pratinjau Layar</span>
              </button>

              <button type="button" onclick="window.TheArichExamDownloader.triggerOfflineDownload()" class="px-3.5 py-2.5 rounded-xl bg-dark-850 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer" title="Simpan File HTML Mandiri">
                <i data-lucide="download" class="w-4 h-4 text-emerald-400"></i>
                <span class="hidden sm:inline">Unduh</span> .HTML
              </button>

              <button type="button" onclick="window.TheArichExamDownloader.triggerPrint()" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-lg shadow-indigo-600/30 cursor-pointer">
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
    const chkMateri = document.getElementById('med-chk-materi');

    return {
      contentMode: contentModeEl ? contentModeEl.value : 'soal_only',
      columns: columnsEl ? columnsEl.value : '2col',
      includeHeader: chkHeader ? chkHeader.checked : true,
      includeInstructions: chkInstructions ? chkInstructions.checked : true,
      includeLJK: chkLJK ? chkLJK.checked : true,
      includeScratchpad: chkScratchpad ? chkScratchpad.checked : false,
      includeMateriSummary: chkMateri ? chkMateri.checked : false
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
  // 8. PUBLIC API METHODS
  // ============================================================================

  function openForChapter(chapterId, optionalGrade) {
    const src = normalizeChapterData(chapterId, optionalGrade);
    if (!src || src.questions.length === 0) {
      alert('Soal untuk bab ini sedang disiapkan.');
      return;
    }
    openModalWithSource(src);
  }

  function printMateriChapter(chapterId, optionalGrade) {
    const targetId = chapterId || (window.currentDetailChapter && window.currentDetailChapter.id);
    const targetGrade = optionalGrade || window.currentDetailGrade;
    if (!targetId) return;
    const src = normalizeChapterData(targetId, targetGrade);
    if (!src) return;
    triggerPrintExecution(src, {
      contentMode: 'materi_only',
      columns: '1col',
      includeHeader: true,
      includeInstructions: false,
      includeLJK: false,
      includeScratchpad: false,
      includeMateriSummary: true
    });
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

  function openForCurrentPMStudy() {
    const pkgId = (window.featuresPMEngine && window.featuresPMEngine.getStudyState)
      ? window.featuresPMEngine.getStudyState().currentPackageId
      : 'paket-1';
    openForPMPackage(pkgId);
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
    const livePrev = document.getElementById('modal-exam-live-preview');
    if (livePrev) livePrev.remove();
    triggerPrintExecution(DownloaderState.currentSource, cfg);
  }

  function triggerOfflineDownload() {
    if (!DownloaderState.currentSource) return;
    const cfg = readModalConfig();
    exportStandaloneHTML(DownloaderState.currentSource, cfg);
  }

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
        <div class="clean-card rounded-2xl max-w-lg w-full bg-dark-950 p-6 border border-slate-700/80 space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-extrabold text-white text-base flex items-center gap-2">
              <i data-lucide="printer" class="w-5 h-5 text-indigo-400"></i>
              Pilih Naskah Soal untuk Diunduh / Dicetak
            </h4>
            <button onclick="document.getElementById('modal-bulk-exam-picker').remove()" class="text-slate-400 hover:text-white">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pilih bab materi kurikulum atau paket simulasi Penalaran Matematika yang ingin dicetak:
          </p>
          <div>
            <select id="bulk-exam-select" class="w-full p-3 rounded-xl bg-dark-900 border border-slate-700 text-white text-xs sm:text-sm font-medium">
              ${pmOptions}
              ${gradeOptions}
            </select>
          </div>
          <div class="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
            <button onclick="document.getElementById('modal-bulk-exam-picker').remove()" class="px-4 py-2 rounded-xl bg-dark-850 text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition">Batal</button>
            <button onclick="window.TheArichExamDownloader.submitBulkPicker()" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-md transition">Lanjutkan</button>
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
    function handleSolutionOptionClick(e) {
    if (!window.isTeacherUnlocked) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (confirm("Kunci Jawaban & Pembahasan hanya ada di Mode Guru.\n\nApakah Anda ingin memasukkan PIN Guru sekarang?")) {
        if (window.promptTeacherPinForDownloader) {
          window.promptTeacherPinForDownloader();
        } else if (window.promptTeacherPin) {
          window.promptTeacherPin();
        }
      }
    }
  }

// 9. PUBLIC REGISTRATION
  // ============================================================================

  window.TheArichExamDownloader = {
    openForChapter,
    printMateriChapter,
    renderPrintableSubtopicsHTML,
    openForCurrentMateri,
    openForCurrentExam,
    openForCurrentExamReview,
    openForPMPackage,
    openForCurrentPM,
    openForCurrentPMStudy,
    openForCurrentPMReview,
    openForErrorBank,
    openBulkPicker,
    submitBulkPicker,
    openPreviewModal,
    triggerPrint,
    triggerOfflineDownload,
    closeModal,
    handleSolutionOptionClick,
    onTeacherModeChange: function() {
      const modal = document.getElementById('modal-exam-download');
      if (modal) {
        modal.remove();
        ensureModalExists();
        if (DownloaderState.currentSource) {
          openModalWithSource(DownloaderState.currentSource);
        }
      }
    },
    generateExamSheetHTML,
    buildFullPrintableDocumentHTML,
    getState: () => DownloaderState
  };

  // Expose root shortcut
  window.downloadExamPDF = openForChapter;
  window.printMateriChapter = printMateriChapter;
  window.downloadPMPDF = openForPMPackage;

})(window, document);
