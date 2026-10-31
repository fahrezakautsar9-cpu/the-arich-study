/**
 * ==============================================================================
 * THE ARICH STUDY — ASSESSMENT & CERTIFICATION SUITE
 * File: features_assessment.js
 * 
 * Features Included:
 * 1. Post-Exam Question Review Sheet (`view-exam-review`)
 *    - Full review sheet with sticky banner (Score, Back button, Benar/Salah/Kosong, Print).
 *    - Instant quick filters ("Semua Soal", "Hanya yang Salah", "Hanya yang Benar").
 *    - Question cards with KaTeX formatted prompts & options.
 *    - Explicit badging: "Pilihan Kamu" (Green/Red) and "Kunci Jawaban Benar" (Emerald).
 *    - Unlocked In-depth Step-by-Step Pembahasan Box with "Trik Rumus Cepat".
 * 
 * 2. Diagnostic Topic Analytics (Analisis Diagnostik Penguasaan Materi)
 *    - Subtopic concept breakdown with % Penguasaan.
 *    - Color-coded indicators: Green (>= 75%), Amber (50-74%), Rose (< 50%).
 *    - Smart Action Recommendation with clickable "Buka Materi Ini" navigation.
 * 
 * 3. E-Sertifikat Kelulusan Bab (Certificate of Academic Excellence)
 *    - Achievement banner on score >= 70.
 *    - Luxury vector Certificate Modal with Guilloche Rosette, Gold/Cyan styling,
 *      algorithmic verification ID (CERT-ARICH-K{Grade}-{Year}-{Hash}), signatures & seals.
 *    - Dedicated Landscape Print & PDF generation mode.
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  // State Store
  const AssessmentState = {
    lastExamData: null,
    activeReviewFilter: 'all', // 'all' | 'wrong' | 'correct' | 'empty'
    isPrintingCertificate: false,
    isPrintingReview: false
  };

  // ============================================================================
  // 1. STYLES & PRINT STYLESHEET INJECTION
  // ============================================================================
  function injectAssessmentStyles() {
    if (document.getElementById('assessment-custom-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'assessment-custom-styles';
    styleEl.textContent = `
      /* Certificate Aesthetic & Typography */
      .cert-gold-gradient {
        background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #b45309 100%);
      }
      .cert-gold-text {
        background: linear-gradient(135deg, #b45309 0%, #d97706 50%, #92400e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .cert-frame-outer {
        border: 4px double #b45309;
        box-shadow: 0 0 0 2px #fef3c7, 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      }
      .cert-frame-inner {
        border: 1.5px solid rgba(180, 83, 9, 0.45);
      }

      /* Options Badging in Review Sheet */
      .review-opt-correct-user {
        border-color: rgba(16, 185, 129, 0.8) !important;
        background-color: rgba(16, 185, 129, 0.12) !important;
        box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.3);
      }
      .review-opt-wrong-user {
        border-color: rgba(244, 63, 94, 0.8) !important;
        background-color: rgba(244, 63, 94, 0.12) !important;
        box-shadow: 0 0 0 1px rgba(244, 63, 94, 0.3);
      }
      .review-opt-correct-key {
        border-color: rgba(16, 185, 129, 0.6) !important;
        background-color: rgba(16, 185, 129, 0.08) !important;
      }

      /* Review Sheet Transition */
      .review-question-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .review-question-card:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.3);
      }

      /* ==================================================================== */
      /* PRINT STYLESHEET: REVIEW SHEET & CERTIFICATE ISOLATION               */
      /* ==================================================================== */
      @media print {
        /* Generic print resets */
        body {
          background: #ffffff !important;
          color: #0f172a !important;
        }

        /* 1. PRINTING THE CERTIFICATE EXCLUSIVELY (LANDSCAPE) */
        body.printing-certificate {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
        }
        body.printing-certificate * {
          visibility: hidden !important;
        }
        body.printing-certificate #certificate-print-wrapper,
        body.printing-certificate #certificate-print-wrapper * {
          visibility: visible !important;
        }
        body.printing-certificate #certificate-print-wrapper {
          position: fixed !important;
          left: 0 !important;
          top: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          margin: 0 !important;
          padding: 2.2cm 2.5cm !important;
          box-shadow: none !important;
          border: 4px double #b45309 !important;
          background: #fdfcf8 !important;
          color: #0f172a !important;
          box-sizing: border-box !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          page-break-after: avoid !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        @page {
          size: landscape;
          margin: 0;
        }

        /* 2. PRINTING THE REVIEW SHEET (PORTRAIT) */
        body.printing-review nav,
        body.printing-review aside,
        body.printing-review header,
        body.printing-review footer,
        body.printing-review #sidebar-drawer,
        body.printing-review .no-print,
        body.printing-review #review-filter-bar,
        body.printing-review .review-action-btn {
          display: none !important;
        }
        body.printing-review #view-exam-review {
          display: block !important;
          max-width: 100% !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          color: #0f172a !important;
        }
        body.printing-review #review-top-banner {
          position: static !important;
          background: #f8fafc !important;
          border: 1px solid #cbd5e1 !important;
          color: #0f172a !important;
          box-shadow: none !important;
          margin-bottom: 24px !important;
        }
        body.printing-review #review-top-banner * {
          color: #0f172a !important;
        }
        body.printing-review .review-question-card {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          color: #0f172a !important;
          box-shadow: none !important;
          margin-bottom: 24px !important;
        }
        body.printing-review .review-question-card * {
          color: #0f172a !important;
        }
        body.printing-review .katex {
          color: #0f172a !important;
        }
        body.printing-review .review-pembahasan-box {
          background: #f1f5f9 !important;
          border: 1px solid #cbd5e1 !important;
        }
        body.printing-review .review-rumus-cepat-box {
          background: #fefce8 !important;
          border: 1px solid #fef08a !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ============================================================================
  // 2. DIAGNOSTIC TOPIC ANALYTICS ALGORITHM
  // ============================================================================
  /**
   * Intelligently categorizes questions into chapter subtopics/concepts
   * and computes percentage mastery per concept.
   */
  function analyzeExamDiagnostics(questions, userAnswers, chapter) {
    if (!questions || questions.length === 0) return [];

    let subtopicsList = [];
    if (chapter && Array.isArray(chapter.subtopics) && chapter.subtopics.length > 0) {
      subtopicsList = chapter.subtopics.map((st, idx) => ({
        index: idx,
        title: st.title || `Subtopik ${idx + 1}`,
        concept: st.concept || '',
        quickTip: st.quickTip || '',
        questionIndices: []
      }));
    } else {
      // Fallback topics if chapter doesn't have explicit subtopics
      subtopicsList = [
        {
          index: 0,
          title: chapter ? chapter.title : 'Penguasaan Konsep Inti',
          concept: 'Pemahaman konsep dasar, definisi, dan formula matematika.',
          quickTip: 'Pelajari kembali rangkuman rumus pada modul materi.',
          questionIndices: []
        }
      ];
    }

    // Helper: keyword matching
    function extractKeywords(text) {
      if (!text) return [];
      return text
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length >= 4 && !['dari', 'pada', 'yang', 'untuk', 'dengan', 'adalah', 'maka', 'dalam', 'serta', 'jika'].includes(w));
    }

    const subtopicKeywords = subtopicsList.map(st => extractKeywords(st.title + ' ' + st.concept));

    // Map each question to the most relevant subtopic
    questions.forEach((q, qIdx) => {
      // Direct property check if available
      if (q.subtopicIndex !== undefined && subtopicsList[q.subtopicIndex]) {
        subtopicsList[q.subtopicIndex].questionIndices.push(qIdx);
        return;
      }

      if (q.subtopic) {
        const found = subtopicsList.find(st => st.title.toLowerCase().includes(q.subtopic.toLowerCase()));
        if (found) {
          found.questionIndices.push(qIdx);
          return;
        }
      }

      // Keyword matching against prompt, hint, explanation
      const fullQText = ((q.prompt || '') + ' ' + (q.explanation || '') + ' ' + (q.hint || '')).toLowerCase();
      let bestIdx = 0;
      let highestMatch = -1;

      subtopicKeywords.forEach((kwList, sIdx) => {
        let score = 0;
        kwList.forEach(kw => {
          if (fullQText.includes(kw)) score++;
        });
        if (score > highestMatch) {
          highestMatch = score;
          bestIdx = sIdx;
        }
      });

      // If no strong match found, use round-robin mapping across subtopics
      if (highestMatch <= 0) {
        bestIdx = qIdx % subtopicsList.length;
      }

      subtopicsList[bestIdx].questionIndices.push(qIdx);
    });

    // Compute metrics for each subtopic
    const results = subtopicsList
      .filter(st => st.questionIndices.length > 0)
      .map(st => {
        const total = st.questionIndices.length;
        const correct = st.questionIndices.filter(qIdx => userAnswers[qIdx] === questions[qIdx].correct).length;
        const percentage = Math.round((correct / total) * 100);

        let status = 'mastered'; // >= 75
        let statusLabel = 'Tuntas / Sangat Menguasai';
        let statusBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
        let barColor = 'from-emerald-500 to-teal-400';

        if (percentage < 50) {
          status = 'critical';
          statusLabel = 'Perlu Pendalaman';
          statusBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
          barColor = 'from-rose-500 to-red-400';
        } else if (percentage < 75) {
          status = 'developing';
          statusLabel = 'Cukup Menguasai';
          statusBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
          barColor = 'from-amber-500 to-yellow-400';
        }

        return {
          ...st,
          total,
          correct,
          percentage,
          status,
          statusLabel,
          statusBadgeClass,
          barColor
        };
      });

    return results;
  }

  // ============================================================================
  // 3. CERTIFICATE VERIFICATION ALGORITHM & DATA GENERATOR
  // ============================================================================
  function generateCertificateData(student, chapter, gradeData, score, timestamp) {
    const studentName = student ? student.name : 'Murid Teladan';
    const schoolName = student ? (student.school || 'Sekolah Penggerak') : 'Sekolah Penggerak';
    const gradeName = gradeData ? gradeData.gradeName : 'SMA / SMP';
    const gradeShort = gradeData ? gradeData.gradeShort : 'K11';
    const chapterTitle = chapter ? chapter.title : 'Matematika Terapan';
    const chapterId = chapter ? chapter.id : 'math';

    // Unique Verification Hash (High Entropy & Deterministic)
    const seed = `${studentName}|${gradeShort}|${chapterId}|${score}|${timestamp || Date.now()}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }
    const cleanGrade = (gradeShort.replace(/\D/g, '') || '11');
    const hexHash = Math.abs(hash).toString(16).toUpperCase().padStart(4, '0').slice(-4);
    const certYear = new Date().getFullYear();
    const verificationId = `CERT-ARICH-K${cleanGrade}-${certYear}-${hexHash}`;

    // Predikat determination
    let predicate = 'Cum Laude (Sangat Memuaskan)';
    if (score === 100) {
      predicate = 'Summa Cum Laude (Dengan Pujian Tertinggi)';
    } else if (score >= 90) {
      predicate = 'Magna Cum Laude (Dengan Pujian Besar)';
    } else if (score >= 80) {
      predicate = 'Cum Laude (Sangat Memuaskan)';
    } else {
      predicate = 'Memuaskan (Kompetensi Tercapai)';
    }

    const issueDateStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      verificationId,
      studentName,
      schoolName,
      gradeName,
      gradeShort,
      chapterTitle,
      chapterId,
      score,
      predicate,
      issueDateStr,
      isPassed: score >= 70
    };
  }

  // ============================================================================
  // 4. GUILLOCHE ROSETTE & VECTOR CERTIFICATE ASSETS (INLINE SVG)
  // ============================================================================
  function getGuillocheRosetteSvg() {
    return `
      <svg viewBox="0 0 160 160" class="w-16 h-16 sm:w-20 sm:h-20 mx-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#b45309"/>
            <stop offset="50%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#06b6d4"/>
          </linearGradient>
        </defs>
        <!-- Rosette Outer Rings -->
        <circle cx="80" cy="80" r="76" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-dasharray="2,3"/>
        <circle cx="80" cy="80" r="72" fill="none" stroke="url(#goldGrad)" stroke-width="0.8"/>
        <circle cx="80" cy="80" r="66" fill="none" stroke="url(#cyanGrad)" stroke-width="1"/>

        <!-- Complex Spirograph / Hypocycloid Petals -->
        <g stroke="url(#goldGrad)" fill="none" stroke-width="0.75" opacity="0.85">
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(0 80 80)"/>
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(15 80 80)"/>
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(30 80 80)"/>
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(45 80 80)"/>
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(60 80 80)"/>
          <path d="M80,18 C115,20 142,47 142,80 C142,113 115,142 80,142 C45,142 18,115 18,80 C18,45 45,18 80,18 Z" transform="rotate(75 80 80)"/>
        </g>
        
        <!-- Inner Star Crest -->
        <circle cx="80" cy="80" r="32" fill="#0f172a" stroke="url(#goldGrad)" stroke-width="2"/>
        <path d="M80,54 L86,72 L106,72 L90,84 L96,104 L80,92 L64,104 L70,84 L54,72 L74,72 Z" fill="url(#goldGrad)"/>
      </svg>
    `;
  }

  function getCornerFlourishSvg(positionClass) {
    return `
      <svg viewBox="0 0 60 60" class="w-10 h-10 sm:w-14 sm:h-14 absolute ${positionClass} pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5,5 L45,5 C45,25 25,45 5,45 L5,5 Z" fill="none" stroke="#b45309" stroke-width="1.5"/>
        <path d="M10,10 L35,10 C35,22 22,35 10,35 L10,10 Z" fill="none" stroke="#d97706" stroke-width="1"/>
        <circle cx="16" cy="16" r="3" fill="#f59e0b"/>
      </svg>
    `;
  }

  function getOfficialEmbossedSealSvg() {
    return `
      <svg viewBox="0 0 120 120" class="w-20 h-20 sm:w-24 sm:h-24 mx-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="50%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#sealGold)" stroke="#d97706" stroke-width="2"/>
        <circle cx="60" cy="60" r="50" fill="none" stroke="#fef3c7" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="60" cy="60" r="42" fill="none" stroke="#fef3c7" stroke-width="1"/>
        
        <!-- Text Arc Simulation / Embellishment -->
        <g fill="#fef3c7" font-size="6.5" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif" text-anchor="middle">
          <text x="60" y="32" letter-spacing="1.5">★ THE ARICH STUDY ★</text>
          <text x="60" y="94" letter-spacing="1">OFFICIAL SEAL</text>
        </g>
        <!-- Center Emblem -->
        <path d="M60,42 L64,52 L75,52 L66,59 L70,70 L60,63 L50,70 L54,59 L45,52 L56,52 Z" fill="#fef3c7"/>
      </svg>
    `;
  }

  // ============================================================================
  // 5. DOM TEMPLATE INJECTION: MODAL & VIEWS
  // ============================================================================
  function ensureAssessmentDomElements() {
    // 1. Insert view-exam-review if not present
    if (!document.getElementById('view-exam-review')) {
      const reviewViewHtml = `
        <!-- ==================================================== -->
        <!-- VIEW 6B: LEMBAR REVIEW SOAL & PEMBAHASAN LENGKAP     -->
        <!-- ==================================================== -->
        <div id="view-exam-review" class="hidden max-w-4xl mx-auto w-full py-4 space-y-6">
          
          <!-- Sticky Top Banner -->
          <div id="review-top-banner" class="sticky top-2 z-30 clean-card rounded-2xl p-4 sm:p-5 border-indigo-500/40 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex items-center gap-3 min-w-0">
              <button onclick="backToExamResult()" class="review-action-btn shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span class="hidden sm:inline">Kembali ke</span> Hasil Nilai
              </button>
              <div class="min-w-0">
                <span class="text-[10px] uppercase font-extrabold tracking-wider text-indigo-400 block">Lembar Review Ujian</span>
                <h3 id="review-chapter-title" class="text-sm sm:text-base font-extrabold text-white truncate">-</h3>
              </div>
            </div>

            <!-- Score Pill & Benar/Salah/Kosong Counters -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
              <div id="review-score-pill" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                Skor: 0/100
              </div>
              <div class="flex items-center gap-1.5 text-xs font-bold">
                <span id="review-count-correct" class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> <span class="val font-mono">0</span> Benar
                </span>
                <span id="review-count-wrong" class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                  <i data-lucide="x" class="w-3.5 h-3.5"></i> <span class="val font-mono">0</span> Salah
                </span>
                <span id="review-count-empty" class="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1">
                  <i data-lucide="minus" class="w-3.5 h-3.5"></i> <span class="val font-mono">0</span> Kosong
                </span>
              </div>
              <button onclick="printExamReview()" class="review-action-btn ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-bold transition cursor-pointer">
                <i data-lucide="printer" class="w-4 h-4"></i>
                <span class="hidden sm:inline">Cetak Lembar Review</span>
              </button>
            </div>
          </div>

          <!-- Quick Filter Buttons -->
          <div id="review-filter-bar" class="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-dark-900 border border-slate-800">
            <span class="text-xs font-bold text-slate-400 px-2 flex items-center gap-1">
              <i data-lucide="filter" class="w-3.5 h-3.5"></i> Filter Soal:
            </span>
            <button id="btn-filter-all" onclick="filterExamReview('all')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white transition cursor-pointer">
              Semua Soal (<span id="filter-cnt-all">0</span>)
            </button>
            <button id="btn-filter-wrong" onclick="filterExamReview('wrong')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-dark-850 hover:bg-dark-800 text-rose-300 border border-slate-700/80 transition cursor-pointer">
              Hanya yang Salah (<span id="filter-cnt-wrong">0</span>)
            </button>
            <button id="btn-filter-correct" onclick="filterExamReview('correct')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-dark-850 hover:bg-dark-800 text-emerald-300 border border-slate-700/80 transition cursor-pointer">
              Hanya yang Benar (<span id="filter-cnt-correct">0</span>)
            </button>
          </div>

          <!-- Question Cards Container -->
          <div id="review-questions-container" class="space-y-6">
            <!-- Dynamically Rendered by renderReviewCards() -->
          </div>

          <!-- Bottom Footer Navigation -->
          <div class="text-center pt-4 pb-8">
            <button onclick="backToExamResult()" class="review-action-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition cursor-pointer">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
              <span>Kembali ke Ringkasan Nilai & Sertifikat</span>
            </button>
          </div>

        </div>
      `;

      // Insert adjacent to view-exam-result or main content
      const resultView = document.getElementById('view-exam-result');
      if (resultView && resultView.parentNode) {
        resultView.insertAdjacentHTML('afterend', reviewViewHtml);
      } else {
        const main = document.querySelector('main');
        if (main) main.insertAdjacentHTML('beforeend', reviewViewHtml);
      }
    }

    // 2. Insert Certificate Modal if not present
    if (!document.getElementById('modal-mastery-certificate')) {
      const certModalHtml = `
        <!-- ======================================================== -->
        <!-- MODAL: E-SERTIFIKAT KELULUSAN BAB (LUXURY ACADEMIC)      -->
        <!-- ======================================================== -->
        <div id="modal-mastery-certificate" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md hidden flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div class="relative w-full max-w-4xl bg-dark-900 border border-amber-500/40 rounded-3xl shadow-2xl p-4 sm:p-6 my-auto text-center space-y-4">
            
            <!-- Top Controls -->
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <i data-lucide="award" class="w-4 h-4"></i>
                <span>E-Sertifikat Kelulusan Resmi • The Arich Study</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="printCertificate()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition cursor-pointer">
                  <i data-lucide="printer" class="w-4 h-4"></i>
                  <span>Cetak / Unduh PDF</span>
                </button>
                <button onclick="closeCertificateModal()" class="p-1.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-400 hover:text-white transition cursor-pointer">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              </div>
            </div>

            <!-- SCROLLABLE CERTIFICATE CANVAS WRAPPER (FOR MOBILE & PRINT) -->
            <div class="overflow-x-auto py-2">
              <div id="certificate-print-wrapper" class="relative bg-[#fcfbf7] text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border-4 border-[#b45309] font-sans min-w-[680px] max-w-[850px] mx-auto overflow-hidden">
                
                <!-- Ornate Corner Flourishes -->
                ${getCornerFlourishSvg('top-2 left-2')}
                ${getCornerFlourishSvg('top-2 right-2 rotate-90')}
                ${getCornerFlourishSvg('bottom-2 right-2 rotate-180')}
                ${getCornerFlourishSvg('bottom-2 left-2 -rotate-90')}

                <!-- Inner Thin Frame -->
                <div class="border border-[#b45309]/50 rounded-xl p-6 sm:p-8 relative">
                  
                  <!-- Top Center Guilloche Security Rosette -->
                  <div class="mb-3">
                    ${getGuillocheRosetteSvg()}
                  </div>

                  <!-- Header Organization -->
                  <div class="space-y-0.5 mb-4">
                    <span class="text-[10px] sm:text-xs font-extrabold tracking-[0.25em] text-[#b45309] uppercase block">
                      LEMBAGA PENDIDIKAN & RISET SAINS
                    </span>
                    <h2 class="text-xl sm:text-2xl font-black tracking-wide text-slate-950 uppercase font-serif">
                      THE ARICH STUDY
                    </h2>
                    <p class="text-[10px] text-slate-600 tracking-wider">
                      Center of Advanced Mathematics, Physics & STEM Excellence
                    </p>
                  </div>

                  <!-- Certificate Title -->
                  <div class="my-4 py-2 border-y border-[#b45309]/30">
                    <h1 class="text-base sm:text-lg md:text-xl font-extrabold tracking-wider text-slate-900 uppercase">
                      CERTIFICATE OF MASTERY & ACADEMIC EXCELLENCE
                    </h1>
                    <p class="text-xs italic text-[#b45309] font-serif mt-0.5">
                      Sertifikat Kelulusan & Penguasaan Kompetensi Modul
                    </p>
                  </div>

                  <!-- Recipient Presentation -->
                  <div class="my-4 space-y-1">
                    <p class="text-xs text-slate-600">Sertifikat ini dengan penuh kehormatan dan kebanggaan dianugerahkan kepada:</p>
                    <div id="cert-recipient-name" class="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-wide text-slate-950 capitalize py-1">
                      -
                    </div>
                    <div id="cert-recipient-meta" class="text-xs font-semibold text-slate-700">
                      -
                    </div>
                  </div>

                  <!-- Achievement Description -->
                  <div class="my-4 max-w-xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
                    <p>
                      Telah menunjukkan kompetensi dan penguasaan materi yang luar biasa pada modul
                      <strong id="cert-chapter-name" class="text-slate-950 font-extrabold">-</strong>
                      (<span id="cert-subject-grade" class="font-semibold text-indigo-950">-</span>)
                      dengan nilai akhir evaluasi
                      <span id="cert-score-number" class="font-black text-emerald-800 font-mono text-base">-</span>/100
                    </p>
                    <div class="inline-block mt-1 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-900 font-bold text-xs">
                      Predikat: <span id="cert-predicate-text" class="font-extrabold">-</span>
                    </div>
                  </div>

                  <!-- Bottom Grid: Signatures & Seal -->
                  <div class="mt-8 pt-4 border-t border-[#b45309]/20 grid grid-cols-3 items-end gap-2 text-center">
                    
                    <!-- Lead Academic Director -->
                    <div class="space-y-1">
                      <div class="h-12 flex items-center justify-center">
                        <!-- Digital Signature Flourish -->
                        <svg viewBox="0 0 140 45" class="w-28 h-10 text-indigo-950 stroke-current fill-none stroke-[1.8]" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10,35 C30,5 45,45 60,15 C75,35 90,10 110,25 C125,35 130,15 135,20 M35,28 C55,28 75,28 105,28"/>
                        </svg>
                      </div>
                      <div class="border-t border-slate-700 pt-1">
                        <p class="text-xs font-black text-slate-900">Dr. Fahr Arich, M.Sc.</p>
                        <p class="text-[9px] text-slate-600 uppercase font-bold tracking-wider">Lead Academic Director</p>
                        <p class="text-[8px] text-slate-500">The Arich Study</p>
                      </div>
                    </div>

                    <!-- Official Embossed Center Seal -->
                    <div class="space-y-1 flex flex-col items-center justify-center">
                      ${getOfficialEmbossedSealSvg()}
                      <div class="mt-1">
                        <p id="cert-verification-id" class="font-mono text-[9px] font-black text-slate-800 tracking-wider">
                          CERT-ARICH-K11-2026-XXXX
                        </p>
                        <p id="cert-issue-date" class="text-[8px] text-slate-600">
                          Diterbitkan: -
                        </p>
                      </div>
                    </div>

                    <!-- Head of STEM Assessment -->
                    <div class="space-y-1">
                      <div class="h-12 flex items-center justify-center">
                        <!-- Digital Signature Flourish -->
                        <svg viewBox="0 0 140 45" class="w-28 h-10 text-indigo-950 stroke-current fill-none stroke-[1.8]" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15,20 C35,40 50,10 70,30 C85,15 100,35 125,18 C115,35 130,25 138,22 M25,32 C65,30 95,30 120,30"/>
                        </svg>
                      </div>
                      <div class="border-t border-slate-700 pt-1">
                        <p class="text-xs font-black text-slate-900">Prof. Kautsar Wardana, Ph.D.</p>
                        <p class="text-[9px] text-slate-600 uppercase font-bold tracking-wider">Head of STEM Assessment</p>
                        <p class="text-[8px] text-slate-500">Curriculum & Certification</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <!-- Bottom Modal Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
              <span class="flex items-center gap-1.5">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
                E-Sertifikat terverifikasi resmi dan sah sebagai bukti ketuntasan belajar bab.
              </span>
              <div class="flex items-center gap-2 w-full sm:w-auto">
                <button onclick="printCertificate()" class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition cursor-pointer">
                  <i data-lucide="printer" class="w-4 h-4"></i>
                  <span>🖨️ Cetak / Unduh PDF Sertifikat</span>
                </button>
                <button onclick="closeCertificateModal()" class="px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 border border-slate-700 text-slate-300 font-semibold text-xs transition cursor-pointer">
                  Tutup
                </button>
              </div>
            </div>

          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', certModalHtml);
    }

    // 3. Inject Assessment Elements into view-exam-result if missing
    injectResultViewElements();
  }

  function injectResultViewElements() {
    const resView = document.getElementById('view-exam-result');
    if (!resView) return;

    // Adjust width for better readability of diagnostics
    const isHidden = resView.classList.contains('hidden');
    resView.className = (isHidden ? 'hidden ' : '') + 'max-w-2xl mx-auto w-full py-6 space-y-4';

    // 1. Prominent Primary Review Button
    if (!document.getElementById('btn-open-exam-review')) {
      const reviewBtnHtml = `
        <div class="mt-4 mb-2">
          <button id="btn-open-exam-review" onclick="openExamReview()" class="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            <i data-lucide="file-search" class="w-5 h-5"></i>
            <span>🔍 Review Lembar Jawaban & Pembahasan Lengkap</span>
          </button>
        </div>
      `;

      // Insert inside clean-card before secondary buttons or at top
      const card = resView.querySelector('.clean-card');
      if (card) {
        const spaceDiv = card.querySelector('.space-y-2');
        if (spaceDiv) {
          spaceDiv.insertAdjacentHTML('beforebegin', reviewBtnHtml);
        } else {
          card.insertAdjacentHTML('beforeend', reviewBtnHtml);
        }
      }
    }

    // 2. Certificate Achievement Banner
    if (!document.getElementById('res-certificate-banner')) {
      const bannerHtml = `
        <div id="res-certificate-banner" class="hidden clean-card rounded-2xl p-4 sm:p-5 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-dark-850 to-amber-900/10 text-left space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/20">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <div class="text-left flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-0.5">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  E-Sertifikat Tersedia
                </span>
                <span id="banner-cert-predicate" class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Cum Laude
                </span>
              </div>
              <h4 class="text-sm sm:text-base font-extrabold text-white truncate">Sertifikat Kelulusan Bab & Keunggulan Akademik</h4>
              <p class="text-xs text-slate-300">Selamat! Nilaimu melampaui batas kelulusan (KKM: 70). Klaim e-sertifikat resmimu sekarang.</p>
            </div>
          </div>
          <button onclick="openCertificateModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5 cursor-pointer">
            <i data-lucide="graduation-cap" class="w-4 h-4"></i>
            <span>🎓 Unduh / Cetak E-Sertifikat Kelulusan</span>
          </button>
        </div>
      `;
      resView.insertAdjacentHTML('beforeend', bannerHtml);
    }

    // 3. Diagnostic Topic Analytics Card
    if (!document.getElementById('res-diagnostic-card')) {
      const diagHtml = `
        <div id="res-diagnostic-card" class="clean-card rounded-2xl p-5 border-indigo-500/30 text-left space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-sm font-extrabold text-white">Analisis Diagnostik Penguasaan Materi</h4>
                <p class="text-[11px] text-slate-400">Pemetaan kekuatan & kelemahanmu berdasarkan subtopik bab ini</p>
              </div>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              Evaluasi Mandiri
            </span>
          </div>

          <!-- Subtopics Progress List -->
          <div id="diag-subtopics-list" class="space-y-3">
            <!-- Rendered by renderDiagnosticCard() -->
          </div>

          <!-- Smart Action Recommendation Box -->
          <div id="diag-recommendation-box" class="pt-2">
            <!-- Rendered dynamically -->
          </div>
        </div>
      `;
      resView.insertAdjacentHTML('beforeend', diagHtml);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 6. RENDER DIAGNOSTIC ANALYTICS IN RESULTS VIEW
  // ============================================================================
  function renderDiagnosticCard(diagnostics, chapter) {
    const listContainer = document.getElementById('diag-subtopics-list');
    const recContainer = document.getElementById('diag-recommendation-box');
    if (!listContainer || !recContainer) return;

    if (!diagnostics || diagnostics.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-4 text-xs text-slate-400">
          Data diagnostik subtopik tidak tersedia untuk latihan ini.
        </div>
      `;
      recContainer.innerHTML = '';
      return;
    }

    // Render Subtopic Progress Bars
    listContainer.innerHTML = diagnostics.map(st => `
      <div class="p-3 rounded-xl bg-dark-900 border border-slate-800/80 space-y-1.5">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-slate-200">${st.title}</span>
          <div class="flex items-center gap-2">
            <span class="font-mono text-[11px] text-slate-400">${st.correct}/${st.total} Benar</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${st.statusBadgeClass}">
              ${st.percentage}%
            </span>
          </div>
        </div>
        <div class="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
          <div class="h-full bg-gradient-to-r ${st.barColor} rounded-full transition-all duration-700" style="width: ${st.percentage}%"></div>
        </div>
      </div>
    `).join('');

    // Determine Weakest Concept for Smart Action Recommendation
    const sortedByScore = [...diagnostics].sort((a, b) => a.percentage - b.percentage);
    const weakest = sortedByScore[0];
    const chapterId = chapter ? chapter.id : '';

    if (weakest && weakest.percentage < 75) {
      recContainer.innerHTML = `
        <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-dark-900 to-indigo-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <i data-lucide="lightbulb" class="w-4 h-4"></i>
              <span>Rekomendasi Belajar Personal</span>
            </div>
            <p class="text-xs text-slate-200">
              Kamu disarankan membaca ulang Subtopik <strong>"${weakest.title}"</strong> (Penguasaan: <span class="text-rose-400 font-bold">${weakest.percentage}%</span>) untuk memperkuat konsep dasar dan pemecahan masalah.
            </p>
          </div>
          <button onclick="featuresAssessment.navigateToChapterMateri('${chapterId}')" class="shrink-0 w-full sm:w-auto px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30 transition cursor-pointer">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Buka Materi Ini</span>
          </button>
        </div>
      `;
    } else {
      recContainer.innerHTML = `
        <div class="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-dark-900 to-teal-950/20 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <i data-lucide="check-check" class="w-4 h-4"></i>
              <span>Penguasaan Materi Sempurna</span>
            </div>
            <p class="text-xs text-slate-200">
              Luar biasa! Seluruh subtopik bab ini telah kamu kuasai dengan sangat baik (&ge; 75%). Pertahankan performamu dan lanjutkan ke tantangan berikutnya!
            </p>
          </div>
          <button onclick="switchView('exam-catalog')" class="shrink-0 w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition cursor-pointer">
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            <span>Lanjut Bab Lainnya</span>
          </button>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 7. RENDER POST-EXAM REVIEW SHEET (`view-exam-review`)
  // ============================================================================
  function renderExamReview(examData) {
    if (!examData) return;

    const { questions, userAnswers, chapter, score, correctCount, wrongCount, emptyCount, gradeData } = examData;

    // 1. Update Sticky Banner
    const chTitle = chapter ? chapter.title : 'Review Latihan Soal';
    const badge = chapter ? (chapter.number ? `Bab ${chapter.number}: ` : '') : '';
    const chEl = document.getElementById('review-chapter-title');
    if (chEl) chEl.textContent = `${badge}${chTitle}`;

    const scorePill = document.getElementById('review-score-pill');
    if (scorePill) {
      scorePill.textContent = `Skor: ${score}/100`;
      scorePill.className = `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black font-mono ${
        score >= 70 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
      }`;
    }

    const cCorrect = document.querySelector('#review-count-correct .val');
    if (cCorrect) cCorrect.textContent = correctCount;
    const cWrong = document.querySelector('#review-count-wrong .val');
    if (cWrong) cWrong.textContent = wrongCount;
    const cEmpty = document.querySelector('#review-count-empty .val');
    if (cEmpty) cEmpty.textContent = emptyCount;

    // Filter counts
    const fAll = document.getElementById('filter-cnt-all');
    if (fAll) fAll.textContent = questions.length;
    const fWrong = document.getElementById('filter-cnt-wrong');
    if (fWrong) fWrong.textContent = wrongCount;
    const fCorrect = document.getElementById('filter-cnt-correct');
    if (fCorrect) fCorrect.textContent = correctCount;

    // 2. Render Cards based on current active filter
    renderReviewCards();
  }

  function renderReviewCards() {
    const examData = AssessmentState.lastExamData;
    if (!examData) return;

    const container = document.getElementById('review-questions-container');
    if (!container) return;

    const { questions, userAnswers, chapter } = examData;
    const filter = AssessmentState.activeReviewFilter;

    // Map questions with status
    const questionItems = questions.map((q, idx) => {
      const uAns = userAnswers[idx];
      const isCorrect = uAns === q.correct;
      const isEmpty = uAns === null || uAns === undefined;
      const isWrong = !isCorrect && !isEmpty;

      let status = 'wrong';
      if (isCorrect) status = 'correct';
      else if (isEmpty) status = 'empty';

      return {
        q,
        idx,
        uAns,
        isCorrect,
        isEmpty,
        isWrong,
        status
      };
    });

    // Apply Filter
    const filtered = questionItems.filter(item => {
      if (filter === 'wrong') return item.isWrong || item.isEmpty;
      if (filter === 'correct') return item.isCorrect;
      return true; // 'all'
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="clean-card rounded-2xl p-10 text-center space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
            <i data-lucide="check-circle-2" class="w-6 h-6"></i>
          </div>
          <h4 class="text-base font-bold text-white">Tidak Ada Soal untuk Filter Ini</h4>
          <p class="text-xs text-slate-400">Semua soal pada kategori ini telah dijawab sesuai kriteria filter.</p>
          <button onclick="filterExamReview('all')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition cursor-pointer">
            Tampilkan Semua Soal
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // Build Cards HTML
    container.innerHTML = filtered.map(item => {
      const { q, idx, uAns, isCorrect, isEmpty, isWrong } = item;

      // Badging for question status
      let badgeHtml = '';
      let cardBorder = 'border-slate-800';

      if (isCorrect) {
        badgeHtml = `
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
            <i data-lucide="check" class="w-3.5 h-3.5"></i> Jawaban Benar
          </span>
        `;
        cardBorder = 'border-emerald-500/30';
      } else if (isEmpty) {
        badgeHtml = `
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
            <i data-lucide="minus" class="w-3.5 h-3.5"></i> Tidak Dijawab
          </span>
        `;
        cardBorder = 'border-amber-500/30';
      } else {
        badgeHtml = `
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
            <i data-lucide="x" class="w-3.5 h-3.5"></i> Jawaban Salah
          </span>
        `;
        cardBorder = 'border-rose-500/30';
      }

      // Options List HTML
      const optionsHtml = (q.options || []).map((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        const isUserChoice = (uAns === optIdx);
        const isCorrectKey = (q.correct === optIdx);

        let optClass = 'border-slate-800 bg-dark-900/60 text-slate-300';
        let badgeOpt = '';

        if (isUserChoice && isCorrectKey) {
          optClass = 'review-opt-correct-user border-emerald-500 bg-emerald-500/10 text-emerald-100 font-semibold';
          badgeOpt = `
            <span class="shrink-0 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 flex items-center gap-1">
              <i data-lucide="check" class="w-3 h-3"></i> Pilihan Kamu & Kunci Benar
            </span>
          `;
        } else if (isUserChoice && !isCorrectKey) {
          optClass = 'review-opt-wrong-user border-rose-500 bg-rose-500/10 text-rose-100 font-semibold';
          badgeOpt = `
            <span class="shrink-0 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/50 flex items-center gap-1">
              <i data-lucide="x" class="w-3 h-3"></i> Pilihan Kamu (Salah)
            </span>
          `;
        } else if (isCorrectKey) {
          optClass = 'review-opt-correct-key border-emerald-500/60 bg-emerald-500/10 text-emerald-200 font-semibold';
          badgeOpt = `
            <span class="shrink-0 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <i data-lucide="check-circle" class="w-3 h-3"></i> Kunci Jawaban Benar
            </span>
          `;
        }

        return `
          <div class="p-3 sm:p-3.5 rounded-xl border ${optClass} flex items-center justify-between gap-3 text-xs sm:text-sm">
            <div class="flex items-center gap-3 min-w-0">
              <span class="w-6 h-6 rounded-lg bg-dark-800 border border-slate-700 font-mono font-bold flex items-center justify-center shrink-0 text-slate-300 text-xs">
                ${letter}
              </span>
              <span class="truncate-math leading-relaxed">${opt}</span>
            </div>
            ${badgeOpt}
          </div>
        `;
      }).join('');

      // Quick Tip / Rumus Cepat
      const quickTipText = q.hint || (chapter && chapter.subtopics && chapter.subtopics[0] ? chapter.subtopics[0].quickTip : '');
      const quickTipHtml = quickTipText ? `
        <div class="review-rumus-cepat-box p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
          <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40 mt-0.5">
            <i data-lucide="zap" class="w-4 h-4 fill-current"></i>
          </div>
          <div class="space-y-0.5 min-w-0">
            <span class="text-[11px] font-black uppercase tracking-wider text-amber-300 block">Trik Rumus Cepat & Cara Kilat:</span>
            <div class="text-xs text-amber-100 leading-relaxed">${quickTipText}</div>
          </div>
        </div>
      ` : '';

      return `
        <div class="review-question-card clean-card rounded-2xl p-5 sm:p-6 border ${cardBorder} space-y-4">
          <!-- Card Header -->
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/30">
                Soal #${idx + 1}
              </span>
              <span class="text-xs text-slate-400">
                ${q.chapter || (chapter ? chapter.title : 'Matematika')}
              </span>
            </div>
            ${badgeHtml}
          </div>

          <!-- Problem Text -->
          <div class="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal py-1">
            ${q.prompt}
          </div>

          <!-- Options List -->
          <div class="space-y-2">
            ${optionsHtml}
          </div>

          <!-- Step-by-Step Pembahasan Box (KaTeX Formatted) -->
          <div class="review-pembahasan-box mt-4 p-4 sm:p-5 rounded-2xl bg-indigo-950/25 border border-indigo-500/30 space-y-3">
            <div class="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
              <i data-lucide="book-open-check" class="w-4 h-4 text-indigo-400"></i>
              <span>Pembahasan Langkah demi Langkah & Konsep Dasar</span>
            </div>
            
            <div class="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
              ${q.explanation || 'Pembahasan terstruktur sedang disiapkan.'}
            </div>

            ${quickTipHtml}
          </div>

        </div>
      `;
    }).join('');

    // Trigger KaTeX rendering & Lucide icons
    renderKaTeX(container);
    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 8. HELPER: KATEX MATHEMATICAL FORMULA RENDERING
  // ============================================================================
  function renderKaTeX(container) {
    if (!container) return;

    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX rendering notice:', e);
      }
    } else if (typeof window.triggerLatex === 'function') {
      window.triggerLatex(container);
    }
  }

  // ============================================================================
  // 9. PUBLIC API & EVENT ACTIONS
  // ============================================================================
  function onExamCompleted(customRecord, customQuestions, customAnswers, customChapter) {
    // Gather state from passed params or global application
    const questions = customQuestions || window.activeQuestions || [];
    const answers = customAnswers || window.userAnswers || [];
    const chapter = customChapter || window.currentExamChapter || null;
    const gradeData = window.currentGradeData || null;
    const student = window.currentStudent || null;

    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) correct++;
    });
    const total = questions.length || 1;
    const score = Math.round((correct / total) * 100);
    const wrong = answers.filter((a, idx) => a !== null && a !== questions[idx].correct).length;
    const empty = questions.length - (correct + wrong);

    const diagnostics = analyzeExamDiagnostics(questions, answers, chapter);
    const certData = generateCertificateData(student, chapter, gradeData, score, Date.now());

    // Save into state
    AssessmentState.lastExamData = {
      questions,
      userAnswers: answers,
      chapter,
      gradeData,
      student,
      score,
      correctCount: correct,
      wrongCount: wrong,
      emptyCount: empty,
      diagnostics,
      certData
    };

    // Ensure DOM exists
    ensureAssessmentDomElements();

    // 1. Render Diagnostic Analytics Card in view-exam-result
    renderDiagnosticCard(diagnostics, chapter);

    // 2. Render or Toggle Certificate Banner in view-exam-result
    const certBanner = document.getElementById('res-certificate-banner');
    if (certBanner) {
      if (score >= 70) {
        certBanner.classList.remove('hidden');
        const predBadge = document.getElementById('banner-cert-predicate');
        if (predBadge) predBadge.textContent = certData.predicate.split(' ')[0] + ' ' + (certData.predicate.split(' ')[1] || '');
      } else {
        certBanner.classList.add('hidden');
      }
    }

    // 3. Populate Certificate Modal content
    populateCertificateModal(certData);
  }

  function populateCertificateModal(certData) {
    if (!certData) return;

    const nameEl = document.getElementById('cert-recipient-name');
    if (nameEl) nameEl.textContent = certData.studentName;

    const metaEl = document.getElementById('cert-recipient-meta');
    if (metaEl) metaEl.textContent = `${certData.schoolName} • ${certData.gradeName}`;

    const chNameEl = document.getElementById('cert-chapter-name');
    if (chNameEl) chNameEl.textContent = certData.chapterTitle;

    const subjGradeEl = document.getElementById('cert-subject-grade');
    if (subjGradeEl) subjGradeEl.textContent = `Matematika - ${certData.gradeName}`;

    const scoreEl = document.getElementById('cert-score-number');
    if (scoreEl) scoreEl.textContent = certData.score;

    const predEl = document.getElementById('cert-predicate-text');
    if (predEl) predEl.textContent = certData.predicate;

    const idEl = document.getElementById('cert-verification-id');
    if (idEl) idEl.textContent = certData.verificationId;

    const dateEl = document.getElementById('cert-issue-date');
    if (dateEl) dateEl.textContent = `Diterbitkan: ${certData.issueDateStr}`;
  }

  function openExamReview() {
    ensureAssessmentDomElements();
    if (!AssessmentState.lastExamData) {
      // Reconstruct from global if missing
      onExamCompleted();
    }

    renderExamReview(AssessmentState.lastExamData);

    if (typeof window.switchView === 'function') {
      window.switchView('exam-review');
    } else {
      document.querySelectorAll('[id^="view-"]').forEach(el => el.classList.add('hidden'));
      const reviewEl = document.getElementById('view-exam-review');
      if (reviewEl) reviewEl.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToExamResult() {
    if (typeof window.switchView === 'function') {
      window.switchView('exam-result');
    } else {
      const reviewEl = document.getElementById('view-exam-review');
      if (reviewEl) reviewEl.classList.add('hidden');
      const resEl = document.getElementById('view-exam-result');
      if (resEl) resEl.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterExamReview(filterType) {
    AssessmentState.activeReviewFilter = filterType;

    // Update active filter button styling
    const btns = {
      all: document.getElementById('btn-filter-all'),
      wrong: document.getElementById('btn-filter-wrong'),
      correct: document.getElementById('btn-filter-correct')
    };

    Object.keys(btns).forEach(key => {
      const btn = btns[key];
      if (!btn) return;
      if (key === filterType) {
        btn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white transition cursor-pointer shadow-md shadow-indigo-600/30';
      } else {
        btn.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-dark-850 hover:bg-dark-800 text-slate-300 border border-slate-700/80 transition cursor-pointer';
      }
    });

    renderReviewCards();
  }

  function openCertificateModal() {
    ensureAssessmentDomElements();
    if (AssessmentState.lastExamData && AssessmentState.lastExamData.certData) {
      populateCertificateModal(AssessmentState.lastExamData.certData);
    }
    const modal = document.getElementById('modal-mastery-certificate');
    if (modal) modal.classList.remove('hidden');
  }

  function closeCertificateModal() {
    const modal = document.getElementById('modal-mastery-certificate');
    if (modal) modal.classList.add('hidden');
  }

  function printCertificate() {
    document.body.classList.add('printing-certificate');
    document.body.classList.remove('printing-review');

    window.print();

    setTimeout(() => {
      document.body.classList.remove('printing-certificate');
    }, 1200);
  }

  function printExamReview() {
    document.body.classList.add('printing-review');
    document.body.classList.remove('printing-certificate');

    window.print();

    setTimeout(() => {
      document.body.classList.remove('printing-review');
    }, 1200);
  }

  function navigateToChapterMateri(chapterId) {
    if (typeof window.openChapterDetail === 'function') {
      window.openChapterDetail(chapterId);
    } else {
      if (typeof window.switchView === 'function') window.switchView('materi-catalog');
    }
  }

  // ============================================================================
  // 10. SYSTEM HOOKS & LIFECYCLE ATTACHMENT
  // ============================================================================
  function installHooks() {
    // 1. Hook switchView to support 'exam-review'
    if (typeof window.switchView === 'function') {
      const originalSwitchView = window.switchView;
      window.switchView = function (viewName) {
        const reviewEl = document.getElementById('view-exam-review');
        if (reviewEl && viewName !== 'exam-review') {
          reviewEl.classList.add('hidden');
        }
        originalSwitchView.apply(this, arguments);
        if (viewName === 'exam-review') {
          if (reviewEl) reviewEl.classList.remove('hidden');
        }
      };
    }

    // 2. Hook executeFinalExamSubmit to automatically invoke assessment features
    if (typeof window.executeFinalExamSubmit === 'function') {
      const originalFinalSubmit = window.executeFinalExamSubmit;
      window.executeFinalExamSubmit = function () {
        originalFinalSubmit.apply(this, arguments);
        try {
          onExamCompleted();
        } catch (e) {
          console.error('Error during featuresAssessment.onExamCompleted:', e);
        }
      };
    }
  }

  // Self Initialization on DOM Ready
  function init() {
    injectAssessmentStyles();
    ensureAssessmentDomElements();
    installHooks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export to Global Scope
  window.featuresAssessment = {
    init,
    onExamCompleted,
    openExamReview,
    backToExamResult,
    filterExamReview,
    printExamReview,
    openCertificateModal,
    closeCertificateModal,
    printCertificate,
    renderDiagnosticCard,
    renderExamReview,
    analyzeExamDiagnostics,
    generateCertificateData,
    navigateToChapterMateri
  };

  // Expose handy root functions
  window.openExamReview = openExamReview;
  window.backToExamResult = backToExamResult;
  window.filterExamReview = filterExamReview;
  window.printExamReview = printExamReview;
  window.openCertificateModal = openCertificateModal;
  window.closeCertificateModal = closeCertificateModal;
  window.printCertificate = printCertificate;

})(window, document);
