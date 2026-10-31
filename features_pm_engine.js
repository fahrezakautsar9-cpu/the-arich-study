/**
 * ==============================================================================
 * THE ARICH STUDY — PENALARAN MATEMATIKA (PM) UTBK-SNBT CBT ENGINE
 * File: the_arich_study/features_pm_engine.js
 * 
 * Architectural Components:
 * 1. Adaptive Split-Screen Layout Controller
 *    - Desktop/Tablet Landscape: Dual synchronized scrollable panes (48% Left / 52% Right).
 *    - Mobile/Tablet Portrait: Segmented Tab Bar + Sticky Bottom Peek Drawer.
 *    - Left: Stimulus Reader (Rich text, Responsive Data Tables, SVG diagrams, KaTeX).
 *    - Right: Multi-Format Question Sheet (Single Choice, Complex True/False, Numeric Input).
 * 
 * 2. Student Support & Interaction Tooling
 *    - Option Eliminator: Toggleable strikethrough tool to eliminate distractor options.
 *    - Scratchpad Drawer: Integrated HTML5 Canvas overlay/drawer with Ghost Mode (65% translucent).
 *    - Deconstructor Clue: 3-tier mathematical modeling scaffolding (Variables, Relations, Strategy).
 *    - CAT Simulation Mode: 42.5 minutes (2550s) countdown timer + 20-number state matrix.
 * 
 * 3. Post-Exam Diagnostic Analytics
 *    - 4-Domain Breakdown: Bilangan, Aljabar, Geometri, Data & Peluang.
 *    - UTBK Scaled Score (200 - 800+), Domain Mastery Radars, Speed vs Benchmark (127.5s/q).
 *    - Review Sheet with Stimulus Fact Extraction Table & Pure KaTeX Formatting.
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  // ============================================================================
  // 1. CONFIGURATION & STATE REPOSITORY
  // ============================================================================
  const PM_CONFIG = {
    TOTAL_QUESTIONS: 20,
    TOTAL_SECONDS: 2550, // 42.5 minutes (42 * 60 + 30)
    BENCHMARK_SECONDS_PER_Q: 127.5,
    DOMAINS: {
      BILANGAN: "Bilangan",
      ALJABAR: "Aljabar",
      GEOMETRI: "Geometri",
      DATA_PELUANG: "Data & Peluang"
    },
    STORAGE_KEY: "the_arich_pm_exam_state_v1"
  };

  const PMState = {
    // Mode: 'drill' (latihan mandiri dengan petunjuk) | 'cat' (simulasi resmi 42.5m)
    examMode: 'cat',
    isActive: false,
    currentQuestionIndex: 0,
    
    // Timer state
    timeRemaining: PM_CONFIG.TOTAL_SECONDS,
    timerInterval: null,
    timerStartTime: null,
    questionTimeLogs: new Array(20).fill(0),
    questionEnteredTimestamp: null,

    // Questions & Stimuli references
    questions: [],
    stimuliMap: {},

    // User answers:
    // For single_choice: integer (0-4) or null
    // For complex_tf: array of booleans [true, false, true] or null
    // For numeric_input: number or string or null
    answers: new Array(20).fill(null),

    // Doubt flags
    doubts: new Array(20).fill(false),

    // Option eliminator: array of Sets containing eliminated option indices per question
    eliminatedOptions: Array.from({ length: 20 }, () => new Set()),

    // Mobile layout active tab: 'stimulus' | 'question'
    mobileActiveTab: 'question',

    // Text zoom level in stimulus reader (100%, 115%, 130%)
    stimulusZoomLevel: 100,

    // Exam completion results cache
    diagnosticResult: null
  };

  // DOM Elements Cache
  let DOM = {};

  // ============================================================================
  // 2. STYLESHEET INJECTION (TAILWIND + GLASSMORPHISM + RESPONSIVE SPLIT)
  // ============================================================================
  function injectPMStyles() {
    if (document.getElementById('pm-engine-custom-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'pm-engine-custom-styles';
    styleEl.textContent = `
      /* Split Screen Layout Variables & Animation */
      .pm-split-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        height: calc(100vh - 120px);
        min-height: 580px;
      }
      @media (min-width: 1024px) {
        .pm-split-container {
          grid-template-columns: minmax(360px, 48%) minmax(400px, 52%);
          height: calc(100vh - 110px);
        }
      }

      /* Custom High-Contrast Scrollbars for Stimulus & Questions */
      .pm-custom-scroll::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      .pm-custom-scroll::-webkit-scrollbar-track {
        background: rgba(15, 23, 42, 0.6);
        border-radius: 9999px;
      }
      .pm-custom-scroll::-webkit-scrollbar-thumb {
        background: rgba(71, 85, 105, 0.7);
        border-radius: 9999px;
      }
      .pm-custom-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(6, 182, 212, 0.8);
      }

      /* Option Eliminator Strikethrough Effects */
      .pm-option-eliminated {
        opacity: 0.38 !important;
        background-color: rgba(15, 23, 42, 0.4) !important;
        border-color: rgba(71, 85, 105, 0.4) !important;
        position: relative;
        filter: grayscale(80%);
      }
      .pm-option-eliminated .pm-option-text {
        text-decoration: line-through;
        text-decoration-color: #f43f5e;
        text-decoration-thickness: 2.5px;
        color: #94a3b8 !important;
      }

      /* Timer Warning Pulse Animations */
      @keyframes timer-warning-pulse {
        0%, 100% { transform: scale(1); border-color: rgba(244, 63, 94, 0.5); }
        50% { transform: scale(1.03); border-color: rgba(244, 63, 94, 1); box-shadow: 0 0 15px rgba(244, 63, 94, 0.5); }
      }
      .pm-timer-urgent {
        animation: timer-warning-pulse 1.2s infinite ease-in-out;
        color: #f43f5e !important;
        background-color: rgba(244, 63, 94, 0.15) !important;
      }

      /* Complex Question Table Styling */
      .pm-tf-table tr:hover td {
        background-color: rgba(30, 41, 59, 0.4);
      }

      /* Deconstructor Clue Step Badge */
      .pm-clue-step-card {
        transition: all 0.2s ease;
      }
      .pm-clue-step-card:hover {
        border-color: rgba(6, 182, 212, 0.5);
        box-shadow: 0 4px 20px -2px rgba(6, 182, 212, 0.15);
      }

      /* Fact Extraction Table Review */
      .pm-extraction-table th {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .pm-extraction-table td {
        vertical-align: top;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ============================================================================
  // 3. UI GENERATION & INJECTION (#view-pm-exam & #view-pm-review)
  // ============================================================================
  function injectPMMarkup() {
    if (document.getElementById('view-pm-exam')) {
      cacheDOMElements();
      return;
    }

    const mainContainer = document.querySelector('main') || document.body;

    const pmExamMarkup = `
      <!-- ==================================================== -->
      <!-- VIEW: MODUL PENALARAN MATEMATIKA (PM) UTBK-SNBT      -->
      <!-- ==================================================== -->
      <div id="view-pm-exam" class="hidden flex-1 flex flex-col space-y-3 pb-8 select-none">
        
        <!-- 1. Top Control Bar (Timer, Stats, Scratchpad, Submit) -->
        <div class="clean-card rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs border border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-16 z-30 shadow-lg">
          
          <!-- Left: Module Title & Info -->
          <div class="flex items-center gap-2.5">
            <button onclick="window.featuresPMEngine.confirmExitExam()" class="px-2.5 py-1.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white font-semibold flex items-center gap-1 transition" title="Keluar dari Modul PM">
              <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
              <span class="hidden sm:inline">Keluar</span>
            </button>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-[11px] tracking-wide">
                UTBK PM
              </span>
              <span class="font-bold text-white text-xs hidden md:inline" id="pm-mode-badge-label">
                Simulasi CAT Resmi
              </span>
            </div>
            <span class="text-slate-600 hidden sm:inline">•</span>
            <span class="text-slate-400 font-mono text-[11px]" id="pm-stat-answered">0/20 Terjawab</span>
          </div>

          <!-- Center: Segmented Mobile Tab Switcher (< lg) -->
          <div class="flex lg:hidden items-center p-0.5 rounded-xl bg-dark-950 border border-slate-800 text-[11px] font-semibold">
            <button type="button" onclick="window.featuresPMEngine.switchMobileTab('stimulus')" id="pm-tab-btn-stimulus" class="px-3 py-1 rounded-lg text-slate-400 hover:text-white transition">
              📜 Wacana
            </button>
            <button type="button" onclick="window.featuresPMEngine.switchMobileTab('question')" id="pm-tab-btn-question" class="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold transition">
              📝 Soal & Jawab
            </button>
          </div>

          <!-- Right: Tools, Timer & Submit -->
          <div class="flex items-center gap-2 ml-auto">
            
            <!-- In-Exam Scratchpad Trigger -->
            <button onclick="window.toggleExamScratchpad()" id="btn-pm-scratchpad" title="Buka Papan Coretan Digital Canvas" class="px-2.5 py-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs">
              <span>✏️</span>
              <span class="hidden sm:inline">Coretan</span>
              <span id="pm-scratchpad-dot" class="hidden w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            </button>

            <!-- Deconstructor Clue (Drill Mode only) -->
            <button onclick="window.featuresPMEngine.openDeconstructorModal()" id="btn-pm-deconstructor" title="Lihat Petunjuk Pemodelan (Mode Belajar)" class="hidden px-2.5 py-1.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 text-xs font-semibold items-center gap-1.5 transition cursor-pointer">
              <span>💡</span>
              <span class="hidden md:inline">Petunjuk</span>
            </button>

            <!-- CAT Timer 42.5 Minutes -->
            <div id="pm-timer-badge" class="flex items-center gap-1.5 font-mono font-bold text-amber-400 px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-800 shadow-inner">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i>
              <span id="pm-timer-display" class="tracking-wider">42:30</span>
            </div>

            <!-- Number Matrix Drawer Button (Mobile) -->
            <button onclick="window.featuresPMEngine.toggleMobileMatrixDrawer()" class="lg:hidden p-1.5 rounded-xl bg-dark-850 border border-slate-700 text-slate-300 hover:text-white" title="Buka Matriks Nomor Soal">
              <i data-lucide="grid" class="w-4 h-4"></i>
            </button>

            <!-- Submit Exam Button -->
            <button onclick="window.featuresPMEngine.confirmSubmitExam()" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md shadow-emerald-900/30">
              Selesai Ujian
            </button>
          </div>

        </div>

        <!-- 2. Adaptive Split-Screen Layout (Left: Stimulus Pane | Right: Question Pane) -->
        <div class="pm-split-container">
          
          <!-- ============================================== -->
          <!-- PANEL KIRI: WACANA STIMULUS DOKUMEN & GRAFIK   -->
          <!-- ============================================== -->
          <div id="pm-pane-stimulus" class="clean-card rounded-2xl p-4 sm:p-5 flex flex-col border border-slate-800 bg-dark-900/90 overflow-hidden relative">
            
            <!-- Stimulus Header Bar -->
            <div class="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 gap-2 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-xs border border-cyan-500/30">
                  📜
                </span>
                <span id="pm-stimulus-badge" class="px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-[11px] font-bold">
                  Wacana 1 (Soal 1 – 4)
                </span>
                <span id="pm-stimulus-domain-tag" class="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]">
                  Aljabar & Bilangan
                </span>
              </div>

              <!-- Zoom Controls for Stimulus Reader -->
              <div class="flex items-center gap-1 text-slate-400">
                <button onclick="window.featuresPMEngine.adjustStimulusZoom(-15)" class="px-2 py-1 rounded bg-dark-950 hover:bg-slate-800 text-[11px] border border-slate-800 font-mono" title="Perkecil Ukuran Teks">
                  A-
                </button>
                <button onclick="window.featuresPMEngine.adjustStimulusZoom(+15)" class="px-2 py-1 rounded bg-dark-950 hover:bg-slate-800 text-[11px] border border-slate-800 font-mono" title="Perbesar Ukuran Teks">
                  A+
                </button>
              </div>
            </div>

            <!-- Stimulus Title -->
            <h3 id="pm-stimulus-title" class="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
              Wacana 1: Sistem Tarif Listrik Rumah Tangga Berjenjang
            </h3>

            <!-- Stimulus Scrollable Body (Independent scroll) -->
            <div id="pm-stimulus-content-body" class="flex-1 overflow-y-auto pr-1.5 pm-custom-scroll space-y-3">
              <!-- Rendered via JS -->
            </div>

            <!-- Bottom Sticky Notice for Multi-Question Reference -->
            <div class="pt-2.5 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Wacana ini digunakan untuk menjawab <strong>Soal 1 s.d. 4</strong></span>
              </span>
              <span class="text-slate-500 hidden sm:inline">Scroll untuk membaca tabel & diagram</span>
            </div>

          </div>

          <!-- ============================================== -->
          <!-- PANEL KANAN: LEMBAR PERTANYAAN & JAWABAN       -->
          <!-- ============================================== -->
          <div id="pm-pane-question" class="flex flex-col space-y-3 overflow-hidden">
            
            <!-- Question Card Workspace -->
            <div class="clean-card rounded-2xl p-5 sm:p-6 flex-1 flex flex-col border border-slate-800 bg-dark-900/90 overflow-hidden relative">
              
              <!-- Question Header -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 gap-2 flex-wrap">
                <div class="flex items-center gap-2">
                  <span id="pm-q-num-pill" class="px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white font-bold text-xs">
                    Soal No. 1 dari 20
                  </span>
                  <span id="pm-q-type-pill" class="px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300 text-[11px] font-semibold border border-indigo-500/20">
                    Pilihan Ganda
                  </span>
                  <span id="pm-q-domain-pill" class="px-2 py-0.5 rounded-md bg-dark-950 text-slate-400 text-[10px] hidden sm:inline">
                    Bilangan
                  </span>
                </div>

                <div class="flex items-center gap-2">
                  <!-- Ragu-ragu (Doubt) Flag -->
                  <button onclick="window.featuresPMEngine.toggleCurrentDoubt()" id="pm-btn-doubt" class="px-2.5 py-1 rounded-lg border border-slate-700 text-slate-400 hover:text-amber-300 text-xs flex items-center gap-1.5 transition cursor-pointer">
                    <i data-lucide="flag" class="w-3.5 h-3.5"></i>
                    <span id="pm-doubt-label">Tandai Ragu</span>
                  </button>
                </div>
              </div>

              <!-- Question Scrollable Body -->
              <div class="flex-1 overflow-y-auto pr-1 pm-custom-scroll space-y-4">
                
                <!-- Prompt (KaTeX) -->
                <div id="pm-question-prompt" class="text-sm sm:text-base font-medium text-white leading-relaxed">
                  <!-- Prompt text & formulas -->
                </div>

                <!-- Answer Formatter Container (Single Choice / Complex Table / Numeric) -->
                <div id="pm-answer-container" class="space-y-2.5 pt-2">
                  <!-- Rendered via JS -->
                </div>

              </div>

              <!-- Question Navigation Footer -->
              <div class="flex items-center justify-between pt-4 border-t border-slate-800 mt-3 gap-2">
                <button onclick="window.featuresPMEngine.navigateQuestion(-1)" id="pm-btn-prev" class="px-4 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition">
                  <i data-lucide="chevron-left" class="w-4 h-4"></i>
                  <span>Sebelumnya</span>
                </button>

                <div class="flex items-center gap-2">
                  <!-- Mobile Matrix Button Quick Peek -->
                  <button onclick="window.featuresPMEngine.toggleMobileMatrixDrawer()" class="px-3 py-2 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 border border-slate-700">
                    <i data-lucide="grid" class="w-3.5 h-3.5"></i>
                    <span>Daftar Soal</span>
                  </button>
                </div>

                <button onclick="window.featuresPMEngine.navigateQuestion(+1)" id="pm-btn-next" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition">
                  <span>Selanjutnya</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- ==================================================== -->
      <!-- MODAL / DRAWER: 20-QUESTION MATRIX PALETTE           -->
      <!-- ==================================================== -->
      <div id="modal-pm-matrix" class="hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="clean-card rounded-2xl p-5 max-w-md w-full border border-slate-700 bg-slate-900 shadow-2xl space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <i data-lucide="grid" class="w-4 h-4 text-cyan-400"></i>
              <span>Navigasi Soal Penalaran Matematika (20 Nomor)</span>
            </h3>
            <button onclick="window.featuresPMEngine.toggleMobileMatrixDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-white">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- 20-Number Grid Palette -->
          <div class="grid grid-cols-5 gap-2" id="pm-matrix-grid">
            <!-- 1 to 20 numbered buttons -->
          </div>

          <!-- Legend -->
          <div class="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-md bg-emerald-600"></span>
              <span>Sudah Dijawab</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-md bg-amber-500"></span>
              <span>Ragu-ragu</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-md bg-dark-950 border border-slate-700"></span>
              <span>Belum Dijawab</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span>Ada Coretan Scratchpad</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================================================== -->
      <!-- MODAL: DECONSTRUCTOR CLUE (PETUNJUK PEMODELAN)       -->
      <!-- ==================================================== -->
      <div id="modal-pm-deconstructor" class="hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="clean-card rounded-2xl p-5 max-w-lg w-full border border-amber-500/40 bg-slate-900 shadow-2xl space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-amber-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-sm font-bold">
                💡
              </span>
              <div>
                <h3 class="text-sm font-bold text-white">Petunjuk Pemodelan Matematika</h3>
                <span class="text-[10px] text-slate-400">Mode Belajar Mandiri (Scaffolding Cognitive Hints)</span>
              </div>
            </div>
            <button onclick="window.featuresPMEngine.closeDeconstructorModal()" class="p-1 rounded-lg text-slate-400 hover:text-white">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- 3-Tier Scaffolding Cards -->
          <div class="space-y-2.5 text-xs text-slate-300">
            <!-- Stage 1: Variables -->
            <div class="p-3 rounded-xl bg-dark-950 border border-slate-800 pm-clue-step-card space-y-1">
              <span class="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                Tahap 1: Ekstraksi Besaran & Variabel
              </span>
              <div id="pm-clue-variables" class="leading-relaxed"></div>
            </div>

            <!-- Stage 2: Relations / Formula -->
            <div class="p-3 rounded-xl bg-dark-950 border border-slate-800 pm-clue-step-card space-y-1">
              <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Tahap 2: Pembentukan Relasi Matematis
              </span>
              <div id="pm-clue-relations" class="leading-relaxed"></div>
            </div>

            <!-- Stage 3: Solution Strategy -->
            <div class="p-3 rounded-xl bg-dark-950 border border-slate-800 pm-clue-step-card space-y-1">
              <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                Tahap 3: Rekomendasi Algoritma Solusi
              </span>
              <div id="pm-clue-strategy" class="leading-relaxed"></div>
            </div>
          </div>

          <div class="pt-2 text-center">
            <button onclick="window.featuresPMEngine.closeDeconstructorModal()" class="w-full py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition">
              Saya Paham, Lanjut Hitung Sendiri
            </button>
          </div>
        </div>
      </div>

      <!-- ==================================================== -->
      <!-- VIEW: POST-EXAM DIAGNOSTIC ANALYTICS & REVIEW SHEET  -->
      <!-- ==================================================== -->
      <div id="view-pm-review" class="hidden flex-1 flex flex-col space-y-5 pb-16">
        
        <!-- Header Banner: Diagnostic Summary -->
        <div class="clean-card rounded-2xl p-5 sm:p-6 border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 relative overflow-hidden shadow-xl">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-xs border border-indigo-500/30">
                  Hasil Diagnostik Pasca Ujian
                </span>
                <span class="text-xs text-slate-400 font-mono" id="pm-review-date"></span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                Analisis Kemampuan Penalaran Matematika UTBK
              </h2>
              <p class="text-xs text-slate-300 mt-1 max-w-xl">
                Laporan komprehensif penguasaan 4 domain materi, kecepatan pengerjaan, dan review soal dengan tabel dekonstruksi fakta stimulus.
              </p>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <div class="text-center px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700">
                <span class="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Skor Skala UTBK</span>
                <span class="text-2xl font-black text-emerald-400 font-mono" id="pm-review-scaled-score">720</span>
                <span class="text-[10px] text-slate-500 block">Skala 200 - 800+</span>
              </div>

              <div class="text-center px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-700">
                <span class="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">Akurasi Soal</span>
                <span class="text-2xl font-black text-white font-mono" id="pm-review-accuracy">16 / 20</span>
                <span class="text-[10px] text-slate-400 block" id="pm-review-percent">80% Benar</span>
              </div>
            </div>
          </div>

          <!-- 4-Domain Breakdown Grid Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-800" id="pm-review-domains-grid">
            <!-- Rendered via JS -->
          </div>
        </div>

        <!-- Review Controls & Filters -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800">
            <button onclick="window.featuresPMEngine.filterReviewSheet('all')" id="pm-flt-all" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold transition">
              Semua (20)
            </button>
            <button onclick="window.featuresPMEngine.filterReviewSheet('wrong')" id="pm-flt-wrong" class="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition">
              Salah (0)
            </button>
            <button onclick="window.featuresPMEngine.filterReviewSheet('correct')" id="pm-flt-correct" class="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition">
              Benar (0)
            </button>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.featuresPMEngine.startNewPMExam('cat')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
              <span>Ulangi Simulasi</span>
            </button>
          </div>
        </div>

        <!-- Review Cards Container -->
        <div id="pm-review-cards-list" class="space-y-5">
          <!-- Rendered via JS -->
        </div>

      </div>
    `;

    mainContainer.insertAdjacentHTML('beforeend', pmExamMarkup);
    cacheDOMElements();
  }

  // ============================================================================
  // 4. DOM ELEMENT CACHING
  // ============================================================================
  function cacheDOMElements() {
    DOM = {
      viewPmExam: document.getElementById('view-pm-exam'),
      viewPmReview: document.getElementById('view-pm-review'),
      
      // Top bar
      timerDisplay: document.getElementById('pm-timer-display'),
      timerBadge: document.getElementById('pm-timer-badge'),
      statAnswered: document.getElementById('pm-stat-answered'),
      modeBadgeLabel: document.getElementById('pm-mode-badge-label'),
      btnScratchpadDot: document.getElementById('pm-scratchpad-dot'),
      btnDeconstructor: document.getElementById('btn-pm-deconstructor'),
      
      // Panes
      paneStimulus: document.getElementById('pm-pane-stimulus'),
      paneQuestion: document.getElementById('pm-pane-question'),
      tabBtnStimulus: document.getElementById('pm-tab-btn-stimulus'),
      tabBtnQuestion: document.getElementById('pm-tab-btn-question'),
      
      // Stimulus Reader
      stimulusBadge: document.getElementById('pm-stimulus-badge'),
      stimulusDomainTag: document.getElementById('pm-stimulus-domain-tag'),
      stimulusTitle: document.getElementById('pm-stimulus-title'),
      stimulusContentBody: document.getElementById('pm-stimulus-content-body'),
      
      // Question Workspace
      qNumPill: document.getElementById('pm-q-num-pill'),
      qTypePill: document.getElementById('pm-q-type-pill'),
      qDomainPill: document.getElementById('pm-q-domain-pill'),
      questionPrompt: document.getElementById('pm-question-prompt'),
      answerContainer: document.getElementById('pm-answer-container'),
      btnDoubt: document.getElementById('pm-btn-doubt'),
      doubtLabel: document.getElementById('pm-doubt-label'),
      btnPrev: document.getElementById('pm-btn-prev'),
      btnNext: document.getElementById('pm-btn-next'),
      
      // Matrix Modal
      modalMatrix: document.getElementById('modal-pm-matrix'),
      matrixGrid: document.getElementById('pm-matrix-grid'),
      
      // Deconstructor Modal
      modalDeconstructor: document.getElementById('modal-pm-deconstructor'),
      clueVariables: document.getElementById('pm-clue-variables'),
      clueRelations: document.getElementById('pm-clue-relations'),
      clueStrategy: document.getElementById('pm-clue-strategy'),

      // Review Sheet
      reviewDate: document.getElementById('pm-review-date'),
      reviewScaledScore: document.getElementById('pm-review-scaled-score'),
      reviewAccuracy: document.getElementById('pm-review-accuracy'),
      reviewPercent: document.getElementById('pm-review-percent'),
      reviewDomainsGrid: document.getElementById('pm-review-domains-grid'),
      reviewCardsList: document.getElementById('pm-review-cards-list')
    };
  }

  // ============================================================================
  // 5. LIFECYCLE & START EXAMINATION
  // ============================================================================
  function startPMExam(mode = 'cat') {
    PMState.examMode = mode;
    PMState.isActive = true;
    PMState.currentQuestionIndex = 0;
    PMState.timeRemaining = PM_CONFIG.TOTAL_SECONDS;
    PMState.answers = new Array(PM_CONFIG.TOTAL_QUESTIONS).fill(null);
    PMState.doubts = new Array(PM_CONFIG.TOTAL_QUESTIONS).fill(false);
    PMState.eliminatedOptions = Array.from({ length: PM_CONFIG.TOTAL_QUESTIONS }, () => new Set());
    PMState.questionTimeLogs = new Array(PM_CONFIG.TOTAL_QUESTIONS).fill(0);
    PMState.questionEnteredTimestamp = Date.now();
    PMState.mobileActiveTab = 'question';

    // Clear drawings repo for new exam if requested
    window.userDrawings = window.userDrawings || {};

    // Load authentic stimuli & question bank
    if (window.PM_QUESTIONS && window.PM_STIMULI) {
      PMState.questions = window.PM_QUESTIONS;
      PMState.stimuliMap = {};
      window.PM_STIMULI.forEach(s => {
        PMState.stimuliMap[s.id] = s;
      });
    }

    // Switch view
    hideAllViews();
    DOM.viewPmExam.classList.remove('hidden');

    // Configure mode
    if (mode === 'drill') {
      DOM.modeBadgeLabel.textContent = "Mode Drill Mandiri";
      DOM.btnDeconstructor.classList.remove('hidden');
      DOM.btnDeconstructor.classList.add('flex');
    } else {
      DOM.modeBadgeLabel.textContent = "Simulasi CAT UTBK (42,5 Menit)";
      DOM.btnDeconstructor.classList.add('hidden');
      DOM.btnDeconstructor.classList.remove('flex');
    }

    // Start Timer
    startTimer();

    // Render Question 0
    renderQuestion(0);
    updateMatrixPalette();
    updateAnsweredStat();

    // Lucide Icons
    if (window.lucide) window.lucide.createIcons();
  }

  function hideAllViews() {
    const views = [
      'view-materi-catalog', 'view-materi-detail', 'view-cheatsheet',
      'view-exam-catalog', 'view-exam', 'view-exam-review',
      'view-pm-exam', 'view-pm-review'
    ];
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
  }

  // ============================================================================
  // 6. CAT COUNTDOWN TIMER (42.5 MENIT / 2550 DETIK)
  // ============================================================================
  function startTimer() {
    if (PMState.timerInterval) clearInterval(PMState.timerInterval);

    PMState.timerStartTime = Date.now();
    const targetEndTime = PMState.timerStartTime + (PMState.timeRemaining * 1000);

    PMState.timerInterval = setInterval(() => {
      const now = Date.now();
      const diffMs = targetEndTime - now;
      PMState.timeRemaining = Math.max(0, Math.round(diffMs / 1000));

      renderTimerDisplay();

      if (PMState.timeRemaining <= 0) {
        clearInterval(PMState.timerInterval);
        onTimerExpired();
      }
    }, 1000);

    renderTimerDisplay();
  }

  function renderTimerDisplay() {
    const mins = Math.floor(PMState.timeRemaining / 60);
    const secs = PMState.timeRemaining % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    DOM.timerDisplay.textContent = formatted;

    // Color coding & urgency pulse
    if (PMState.timeRemaining <= 180) { // < 3 minutes
      DOM.timerBadge.className = "flex items-center gap-1.5 font-mono font-bold px-3 py-1.5 rounded-xl border pm-timer-urgent";
    } else if (PMState.timeRemaining <= 600) { // < 10 minutes
      DOM.timerBadge.className = "flex items-center gap-1.5 font-mono font-bold text-amber-400 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30";
    } else {
      DOM.timerBadge.className = "flex items-center gap-1.5 font-mono font-bold text-cyan-400 px-3 py-1.5 rounded-xl bg-dark-950 border border-slate-800 shadow-inner";
    }
  }

  function onTimerExpired() {
    alert("WAKTU HABIS! Waktu pengerjaan Penalaran Matematika (42,5 menit) telah berakhir. Jawaban Anda akan otomatis dikumpulkan.");
    submitPMExam();
  }

  // ============================================================================
  // 7. QUESTION & STIMULUS RENDERING
  // ============================================================================
  function renderQuestion(index) {
    if (index < 0 || index >= PMState.questions.length) return;

    // Log time spent on previous question
    if (PMState.questionEnteredTimestamp) {
      const elapsedSec = Math.round((Date.now() - PMState.questionEnteredTimestamp) / 1000);
      PMState.questionTimeLogs[PMState.currentQuestionIndex] += elapsedSec;
    }
    PMState.questionEnteredTimestamp = Date.now();

    PMState.currentQuestionIndex = index;
    const q = PMState.questions[index];
    const stimulus = PMState.stimuliMap[q.stimulusId];

    // 1. Render Left Pane: Stimulus
    if (stimulus) {
      DOM.stimulusBadge.textContent = stimulus.badge || `Wacana Soal No. ${q.number}`;
      DOM.stimulusDomainTag.textContent = stimulus.domain || q.domain;
      DOM.stimulusTitle.textContent = stimulus.title;
      DOM.stimulusContentBody.innerHTML = stimulus.contentHtml;
      DOM.stimulusContentBody.style.fontSize = `${PMState.stimulusZoomLevel}%`;
    }

    // 2. Render Right Pane: Question Header & Prompt
    DOM.qNumPill.textContent = `Soal No. ${q.number} dari ${PM_CONFIG.TOTAL_QUESTIONS}`;
    
    // Type Pill
    if (q.type === 'single_choice') {
      DOM.qTypePill.textContent = "Pilihan Ganda (5 Opsi)";
      DOM.qTypePill.className = "px-2 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 text-[11px] font-semibold border border-indigo-500/30";
    } else if (q.type === 'complex_tf') {
      DOM.qTypePill.textContent = "PG Kompleks (Benar / Salah)";
      DOM.qTypePill.className = "px-2 py-0.5 rounded-md bg-purple-950/60 text-purple-300 text-[11px] font-semibold border border-purple-500/30";
    } else if (q.type === 'numeric_input') {
      DOM.qTypePill.textContent = "Isian Singkat Numerik";
      DOM.qTypePill.className = "px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 text-[11px] font-semibold border border-amber-500/30";
    }

    DOM.qDomainPill.textContent = `${q.domain} • ${q.subtopic || ''}`;
    DOM.questionPrompt.innerHTML = q.prompt;

    // Doubt Button State
    const isDoubt = PMState.doubts[index];
    if (isDoubt) {
      DOM.btnDoubt.className = "px-2.5 py-1 rounded-lg border border-amber-400 bg-amber-500/20 text-amber-300 text-xs flex items-center gap-1.5 transition";
      DOM.doubtLabel.textContent = "Ragu-ragu";
    } else {
      DOM.btnDoubt.className = "px-2.5 py-1 rounded-lg border border-slate-700 text-slate-400 hover:border-amber-400 hover:text-amber-300 text-xs flex items-center gap-1.5 transition";
      DOM.doubtLabel.textContent = "Tandai Ragu";
    }

    // 3. Render Answer Input Types
    renderAnswerInputs(q, index);

    // Prev / Next button state
    DOM.btnPrev.disabled = (index === 0);
    DOM.btnPrev.style.opacity = (index === 0) ? '0.35' : '1';
    
    if (index === PM_CONFIG.TOTAL_QUESTIONS - 1) {
      DOM.btnNext.innerHTML = `<span>Ringkasan Soal</span> <i data-lucide="grid" class="w-4 h-4"></i>`;
    } else {
      DOM.btnNext.innerHTML = `<span>Selanjutnya</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
    }

    // Check if drawing exists for current question
    const hasDrawing = window.userDrawings && window.userDrawings[index] && window.userDrawings[index].length > 0;
    if (hasDrawing) {
      DOM.btnScratchpadDot.classList.remove('hidden');
    } else {
      DOM.btnScratchpadDot.classList.add('hidden');
    }

    // Trigger KaTeX & Lucide
    triggerLatexRendering();
    if (window.lucide) window.lucide.createIcons();
    updateAnsweredStat();
  }

  // ============================================================================
  // 8. ANSWER INPUT RENDERERS (SINGLE CHOICE, COMPLEX T/F, NUMERIC)
  // ============================================================================
  function renderAnswerInputs(q, qIdx) {
    const container = DOM.answerContainer;
    container.innerHTML = '';

    // TYPE 1: SINGLE CHOICE WITH OPTION ELIMINATOR
    if (q.type === 'single_choice') {
      const selectedOption = PMState.answers[qIdx];
      const eliminatedSet = PMState.eliminatedOptions[qIdx];

      const html = q.options.map((opt, oIdx) => {
        const isSelected = selectedOption === oIdx;
        const isEliminated = eliminatedSet.has(oIdx);

        let cardCls = isSelected 
          ? 'p-3 rounded-xl bg-indigo-950/50 border-2 border-indigo-500 text-white flex items-center justify-between transition cursor-pointer shadow-md shadow-indigo-900/20'
          : 'p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-slate-300 hover:border-slate-700 flex items-center justify-between transition cursor-pointer';

        if (isEliminated) {
          cardCls += ' pm-option-eliminated';
        }

        const letterBadgeCls = isSelected
          ? 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400'
          : 'bg-slate-800 text-slate-400 font-semibold';

        return `
          <div class="${cardCls}" onclick="window.featuresPMEngine.handleOptionSelect(${qIdx}, ${oIdx})">
            <!-- Left: Option Letter & Text -->
            <div class="flex items-center space-x-3 min-w-0 pr-2">
              <span class="w-6 h-6 rounded-lg text-xs flex items-center justify-center shrink-0 ${letterBadgeCls}">
                ${String.fromCharCode(65 + oIdx)}
              </span>
              <div class="pm-option-text text-xs sm:text-sm font-medium leading-relaxed">${opt}</div>
            </div>

            <!-- Right: Eliminator Tool & Selection Indicator -->
            <div class="flex items-center gap-2 shrink-0" onclick="event.stopPropagation()">
              ${isEliminated ? '<span class="text-[10px] text-rose-400 font-bold bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">Dicoret</span>' : ''}
              
              <!-- Option Eliminator Strikethrough Button -->
              <button type="button" 
                      onclick="window.featuresPMEngine.toggleOptionEliminate(${qIdx}, ${oIdx})" 
                      title="${isEliminated ? 'Pulihkan opsi ini' : 'Coret opsi yang mustahil (Option Eliminator)'}"
                      class="p-1.5 rounded-lg border transition ${isEliminated ? 'border-rose-500/40 bg-rose-500/20 text-rose-300' : 'border-slate-800 hover:border-slate-600 text-slate-500 hover:text-slate-300'}">
                <i data-lucide="${isEliminated ? 'rotate-ccw' : 'strikethrough'}" class="w-3.5 h-3.5"></i>
              </button>

              <span class="${isSelected ? 'text-indigo-400 font-bold text-sm' : 'text-transparent'}">✓</span>
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = html;
    }

    // TYPE 2: COMPLEX QUESTION (TABLE PERNYATAAN BENAR / SALAH)
    else if (q.type === 'complex_tf') {
      const currentAns = PMState.answers[qIdx] || new Array(q.statements.length).fill(null);

      let tableHtml = `
        <div class="overflow-x-auto rounded-xl border border-slate-700 bg-dark-950/80">
          <table class="w-full text-xs text-left border-collapse pm-tf-table">
            <thead>
              <tr class="border-b border-slate-700 bg-slate-900/90 text-slate-300">
                <th class="p-3 font-bold">Pernyataan Konseptual</th>
                <th class="p-3 text-center w-28 font-bold text-emerald-400">Benar</th>
                <th class="p-3 text-center w-28 font-bold text-rose-400">Salah</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
      `;

      q.statements.forEach((stmt, sIdx) => {
        const val = currentAns[sIdx];
        const isTrueSelected = val === true;
        const isFalseSelected = val === false;

        tableHtml += `
          <tr class="hover:bg-slate-900/40 transition">
            <td class="p-3 text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
              ${stmt.text}
            </td>
            
            <!-- Radio Benar -->
            <td class="p-2 text-center align-middle">
              <button type="button" 
                      onclick="window.featuresPMEngine.handleComplexSelect(${qIdx}, ${sIdx}, true)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 mx-auto ${isTrueSelected ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40 ring-2 ring-emerald-400' : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'}">
                <span>Benar</span>
                ${isTrueSelected ? '<span>✓</span>' : ''}
              </button>
            </td>

            <!-- Radio Salah -->
            <td class="p-2 text-center align-middle">
              <button type="button" 
                      onclick="window.featuresPMEngine.handleComplexSelect(${qIdx}, ${sIdx}, false)"
                      class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 mx-auto ${isFalseSelected ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40 ring-2 ring-rose-400' : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'}">
                <span>Salah</span>
                ${isFalseSelected ? '<span>✓</span>' : ''}
              </button>
            </td>
          </tr>
        `;
      });

      tableHtml += `
            </tbody>
          </table>
        </div>
        <p class="text-[11px] text-slate-400 italic">Pilihlah salah satu opsi (Benar atau Salah) pada setiap baris pernyataan.</p>
      `;

      container.innerHTML = tableHtml;
    }

    // TYPE 3: NUMERIC / SHORT MATH INPUT
    else if (q.type === 'numeric_input') {
      const val = PMState.answers[qIdx] !== null ? PMState.answers[qIdx] : '';

      container.innerHTML = `
        <div class="p-4 rounded-xl border border-slate-700 bg-dark-950/80 space-y-3">
          <label class="block text-xs font-bold text-slate-300">
            Tuliskan Nilai Jawaban Akhir Anda:
          </label>
          <div class="flex items-center gap-3">
            <div class="relative flex-1 max-w-xs">
              <input type="text" 
                     id="pm-numeric-field" 
                     value="${val}" 
                     placeholder="Contoh: 75 atau 0.25" 
                     oninput="window.featuresPMEngine.handleNumericInput(${qIdx}, this.value)"
                     class="w-full px-4 py-2.5 rounded-xl bg-dark-900 border-2 border-indigo-500/50 focus:border-indigo-400 text-white font-mono text-base font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition">
            </div>
            ${q.numericUnit ? `<span class="text-xs font-bold text-cyan-400 bg-cyan-950/50 px-2.5 py-1.5 rounded-lg border border-cyan-500/30 font-mono">${q.numericUnit}</span>` : ''}
          </div>
          <p class="text-[11px] text-slate-400 leading-normal">
            Masukkan angka rasional murni tanpa tanda kurung atau simbol mata uang. Gunakan tanda titik atau koma untuk bilangan desimal.
          </p>
        </div>
      `;
    }
  }

  // ============================================================================
  // 9. STUDENT ACTIONS & INTERACTION LOGIC
  // ============================================================================
  function handleOptionSelect(qIdx, oIdx) {
    const eliminatedSet = PMState.eliminatedOptions[qIdx];
    if (eliminatedSet.has(oIdx)) {
      // If student clicks an eliminated option, un-eliminate it first
      eliminatedSet.delete(oIdx);
    }
    PMState.answers[qIdx] = oIdx;
    renderQuestion(qIdx);
  }

  function toggleOptionEliminate(qIdx, oIdx) {
    const eliminatedSet = PMState.eliminatedOptions[qIdx];
    if (eliminatedSet.has(oIdx)) {
      eliminatedSet.delete(oIdx);
    } else {
      eliminatedSet.add(oIdx);
      // If student eliminates currently selected option, reset answer
      if (PMState.answers[qIdx] === oIdx) {
        PMState.answers[qIdx] = null;
      }
    }
    renderQuestion(qIdx);
  }

  function handleComplexSelect(qIdx, sIdx, booleanValue) {
    const q = PMState.questions[qIdx];
    let currentAns = PMState.answers[qIdx];
    if (!Array.isArray(currentAns)) {
      currentAns = new Array(q.statements.length).fill(null);
    }
    currentAns[sIdx] = booleanValue;
    PMState.answers[qIdx] = currentAns;
    renderQuestion(qIdx);
  }

  function handleNumericInput(qIdx, rawValue) {
    const cleaned = rawValue.trim().replace(',', '.');
    if (cleaned === '') {
      PMState.answers[qIdx] = null;
    } else {
      const num = parseFloat(cleaned);
      PMState.answers[qIdx] = isNaN(num) ? cleaned : num;
    }
    updateAnsweredStat();
  }

  function toggleCurrentDoubt() {
    const idx = PMState.currentQuestionIndex;
    PMState.doubts[idx] = !PMState.doubts[idx];
    renderQuestion(idx);
    updateMatrixPalette();
  }

  function navigateQuestion(step) {
    const nextIdx = PMState.currentQuestionIndex + step;
    if (nextIdx >= 0 && nextIdx < PM_CONFIG.TOTAL_QUESTIONS) {
      renderQuestion(nextIdx);
    } else if (nextIdx >= PM_CONFIG.TOTAL_QUESTIONS) {
      toggleMobileMatrixDrawer();
    }
  }

  function jumpToQuestion(idx) {
    if (idx >= 0 && idx < PM_CONFIG.TOTAL_QUESTIONS) {
      renderQuestion(idx);
      DOM.modalMatrix.classList.add('hidden');
    }
  }

  function switchMobileTab(tab) {
    PMState.mobileActiveTab = tab;
    if (tab === 'stimulus') {
      DOM.paneStimulus.classList.remove('hidden');
      DOM.paneQuestion.classList.add('hidden');
      DOM.tabBtnStimulus.className = "px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold transition";
      DOM.tabBtnQuestion.className = "px-3 py-1 rounded-lg text-slate-400 hover:text-white transition";
    } else {
      DOM.paneStimulus.classList.add('hidden');
      DOM.paneQuestion.classList.remove('hidden');
      DOM.tabBtnStimulus.className = "px-3 py-1 rounded-lg text-slate-400 hover:text-white transition";
      DOM.tabBtnQuestion.className = "px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold transition";
    }
  }

  function adjustStimulusZoom(delta) {
    PMState.stimulusZoomLevel = Math.min(140, Math.max(85, PMState.stimulusZoomLevel + delta));
    DOM.stimulusContentBody.style.fontSize = `${PMState.stimulusZoomLevel}%`;
  }

  // ============================================================================
  // 10. MATRIX PALETTE & PROGRESS COUNTERS
  // ============================================================================
  function updateAnsweredStat() {
    let count = 0;
    PMState.answers.forEach((ans, idx) => {
      const q = PMState.questions[idx];
      if (!q) return;
      if (q.type === 'single_choice' && ans !== null) count++;
      else if (q.type === 'numeric_input' && ans !== null && ans !== '') count++;
      else if (q.type === 'complex_tf' && Array.isArray(ans) && ans.every(v => v !== null)) count++;
    });

    DOM.statAnswered.textContent = `${count}/${PM_CONFIG.TOTAL_QUESTIONS} Terjawab`;
  }

  function updateMatrixPalette() {
    const grid = DOM.matrixGrid;
    grid.innerHTML = '';

    for (let i = 0; i < PM_CONFIG.TOTAL_QUESTIONS; i++) {
      const q = PMState.questions[i];
      const ans = PMState.answers[i];
      const isDoubt = PMState.doubts[i];
      const isActive = i === PMState.currentQuestionIndex;

      let isAnswered = false;
      if (q) {
        if (q.type === 'single_choice' && ans !== null) isAnswered = true;
        else if (q.type === 'numeric_input' && ans !== null && ans !== '') isAnswered = true;
        else if (q.type === 'complex_tf' && Array.isArray(ans) && ans.every(v => v !== null)) isAnswered = true;
      }

      let btnCls = 'h-10 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center relative cursor-pointer ';

      if (isActive) {
        btnCls += 'ring-2 ring-cyan-400 shadow-md shadow-cyan-500/20 ';
      }

      if (isDoubt) {
        btnCls += 'bg-amber-500 text-white ';
      } else if (isAnswered) {
        btnCls += 'bg-emerald-600 text-white ';
      } else {
        btnCls += 'bg-dark-950 text-slate-300 border border-slate-700 hover:border-slate-500 ';
      }

      // Scratchpad indicator
      const hasDrawing = window.userDrawings && window.userDrawings[i] && window.userDrawings[i].length > 0;

      grid.innerHTML += `
        <button type="button" onclick="window.featuresPMEngine.jumpToQuestion(${i})" class="${btnCls}">
          <span>${i + 1}</span>
          ${hasDrawing ? '<span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400"></span>' : ''}
        </button>
      `;
    }
  }

  function toggleMobileMatrixDrawer() {
    updateMatrixPalette();
    DOM.modalMatrix.classList.toggle('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 11. DECONSTRUCTOR CLUE (PETUNJUK PEMODELAN MATEMATIKA)
  // ============================================================================
  function openDeconstructorModal() {
    const q = PMState.questions[PMState.currentQuestionIndex];
    if (!q || !q.deconstructorClue) return;

    DOM.clueVariables.innerHTML = q.deconstructorClue.variables || 'Identifikasi variabel dari kalimat konteks wacana.';
    DOM.clueRelations.innerHTML = q.deconstructorClue.relations || 'Hubungkan besaran yang diketahui dengan persamaan matematika.';
    DOM.clueStrategy.innerHTML = q.deconstructorClue.strategy || 'Terapkan metode substitusi atau eliminasi aljabar.';

    DOM.modalDeconstructor.classList.remove('hidden');
    triggerLatexRendering(DOM.modalDeconstructor);
    if (window.lucide) window.lucide.createIcons();
  }

  function closeDeconstructorModal() {
    DOM.modalDeconstructor.classList.add('hidden');
  }

  // ============================================================================
  // 12. EXAM SUBMISSION & 4-DOMAIN DIAGNOSTIC COMPUTATION
  // ============================================================================
  function confirmSubmitExam() {
    let answeredCount = 0;
    PMState.answers.forEach((ans, idx) => {
      const q = PMState.questions[idx];
      if (q.type === 'single_choice' && ans !== null) answeredCount++;
      else if (q.type === 'numeric_input' && ans !== null && ans !== '') answeredCount++;
      else if (q.type === 'complex_tf' && Array.isArray(ans) && ans.every(v => v !== null)) answeredCount++;
    });

    const unanswered = PM_CONFIG.TOTAL_QUESTIONS - answeredCount;
    let msg = `Apakah Anda yakin ingin menyelesaikan Ujian Penalaran Matematika ini?\n\n• Terjawab: ${answeredCount} soal\n• Belum Terjawab: ${unanswered} soal`;
    if (unanswered > 0) {
      msg += `\n\nPerhatian: Soal yang belum dijawab tidak akan mendapatkan poin.`;
    }

    if (confirm(msg)) {
      submitPMExam();
    }
  }

  function confirmExitExam() {
    if (confirm("Ujian sedang berlangsung. Apakah Anda yakin ingin keluar? Progress jawaban simulasi saat ini akan hilang.")) {
      if (PMState.timerInterval) clearInterval(PMState.timerInterval);
      PMState.isActive = false;
      DOM.viewPmExam.classList.add('hidden');
      if (window.switchView) window.switchView('exam-catalog');
    }
  }

  function submitPMExam() {
    if (PMState.timerInterval) clearInterval(PMState.timerInterval);
    PMState.isActive = false;

    // Log final question time
    if (PMState.questionEnteredTimestamp) {
      PMState.questionTimeLogs[PMState.currentQuestionIndex] += Math.round((Date.now() - PMState.questionEnteredTimestamp) / 1000);
    }

    // 1. Compute Question Correctness
    let correctCount = 0;
    const itemResults = PMState.questions.map((q, idx) => {
      const userAns = PMState.answers[idx];
      let isCorrect = false;

      if (q.type === 'single_choice') {
        isCorrect = (userAns === q.correct);
      } else if (q.type === 'numeric_input') {
        if (userAns !== null && userAns !== '') {
          const userNum = parseFloat(userAns);
          const diff = Math.abs(userNum - q.correctNumeric);
          const tol = q.numericTolerance || 0;
          isCorrect = diff <= tol;
        }
      } else if (q.type === 'complex_tf') {
        if (Array.isArray(userAns) && userAns.length === q.statements.length) {
          isCorrect = userAns.every((val, sIdx) => val === q.statements[sIdx].correct);
        }
      }

      if (isCorrect) correctCount++;

      return {
        question: q,
        userAnswer: userAns,
        isCorrect,
        timeSpent: PMState.questionTimeLogs[idx] || 0
      };
    });

    // 2. Compute 4-Domain Breakdown
    const domainStats = {
      [PM_CONFIG.DOMAINS.BILANGAN]: { total: 0, correct: 0, timeTotal: 0 },
      [PM_CONFIG.DOMAINS.ALJABAR]: { total: 0, correct: 0, timeTotal: 0 },
      [PM_CONFIG.DOMAINS.GEOMETRI]: { total: 0, correct: 0, timeTotal: 0 },
      [PM_CONFIG.DOMAINS.DATA_PELUANG]: { total: 0, correct: 0, timeTotal: 0 }
    };

    itemResults.forEach(r => {
      const dom = r.question.domain;
      if (domainStats[dom]) {
        domainStats[dom].total++;
        if (r.isCorrect) domainStats[dom].correct++;
        domainStats[dom].timeTotal += r.timeSpent;
      }
    });

    // 3. Compute Simulated UTBK Scaled Score (200 - 800+)
    // Base 200 + Weighted Accuracy (Mudah 1.0, Sedang 1.4, Sulit 2.0)
    let totalWeight = 0;
    let earnedWeight = 0;
    itemResults.forEach(r => {
      const w = r.question.level === 'Sulit' ? 2.0 : (r.question.level === 'Sedang' ? 1.4 : 1.0);
      totalWeight += w;
      if (r.isCorrect) earnedWeight += w;
    });

    const scaledScore = Math.round(200 + (earnedWeight / totalWeight) * 600);

    // Save Result
    PMState.diagnosticResult = {
      itemResults,
      correctCount,
      totalQuestions: PM_CONFIG.TOTAL_QUESTIONS,
      accuracyPercent: Math.round((correctCount / PM_CONFIG.TOTAL_QUESTIONS) * 100),
      scaledScore,
      domainStats,
      submittedAt: new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' })
    };

    // Render Review View
    renderDiagnosticReviewSheet();
  }

  // ============================================================================
  // 13. POST-EXAM REVIEW SHEET WITH FACT EXTRACTION TABLES & PURE KATEX
  // ============================================================================
  function renderDiagnosticReviewSheet() {
    const res = PMState.diagnosticResult;
    if (!res) return;

    hideAllViews();
    DOM.viewPmReview.classList.remove('hidden');

    DOM.reviewDate.textContent = res.submittedAt;
    DOM.reviewScaledScore.textContent = res.scaledScore;
    DOM.reviewAccuracy.textContent = `${res.correctCount} / ${res.totalQuestions}`;
    DOM.reviewPercent.textContent = `${res.accuracyPercent}% Akurasi`;

    // 1. Render 4-Domain Grid
    const domainKeys = [
      PM_CONFIG.DOMAINS.BILANGAN,
      PM_CONFIG.DOMAINS.ALJABAR,
      PM_CONFIG.DOMAINS.GEOMETRI,
      PM_CONFIG.DOMAINS.DATA_PELUANG
    ];

    DOM.reviewDomainsGrid.innerHTML = domainKeys.map(dKey => {
      const d = res.domainStats[dKey];
      const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
      
      let badgeCls = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      let statusLabel = 'Sangat Mahir';
      if (pct < 60) {
        badgeCls = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
        statusLabel = 'Perlu Remedial';
      } else if (pct < 80) {
        badgeCls = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
        statusLabel = 'Cukup Berkembang';
      }

      return `
        <div class="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white">${dKey}</span>
            <span class="text-[10px] px-2 py-0.5 rounded font-semibold border ${badgeCls}">${statusLabel}</span>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-xl font-black font-mono text-white">${pct}%</span>
            <span class="text-xs text-slate-400 font-mono">${d.correct} / ${d.total} Soal</span>
          </div>
          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="h-full ${pct >= 75 ? 'bg-emerald-500' : (pct >= 50 ? 'bg-amber-500' : 'bg-rose-500')}" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');

    // 2. Render Review Question Cards
    renderReviewCards('all');

    if (window.lucide) window.lucide.createIcons();
  }

  function filterReviewSheet(filter) {
    // Update button styling
    ['all', 'wrong', 'correct'].forEach(f => {
      const btn = document.getElementById(`pm-flt-${f}`);
      if (btn) {
        if (f === filter) {
          btn.className = "px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold transition";
        } else {
          btn.className = "px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition";
        }
      }
    });

    renderReviewCards(filter);
  }

  function renderReviewCards(filter = 'all') {
    const res = PMState.diagnosticResult;
    if (!res) return;

    const list = DOM.reviewCardsList;
    list.innerHTML = '';

    res.itemResults.forEach((item, idx) => {
      if (filter === 'wrong' && item.isCorrect) return;
      if (filter === 'correct' && !item.isCorrect) return;

      const q = item.question;
      const stimulus = PMState.stimuliMap[q.stimulusId];

      const statusBadge = item.isCorrect 
        ? '<span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">✓ Jawaban Benar</span>'
        : '<span class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1">✕ Jawaban Salah</span>';

      // Fact extraction table markup
      let extractionTableHtml = '';
      if (q.extractionTable && q.extractionTable.length > 0) {
        extractionTableHtml = `
          <div class="mt-4 p-3 rounded-xl bg-dark-950/80 border border-slate-800 space-y-2">
            <div class="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <span>🔍 Tabel Ekstraksi Fakta Wacana (Mathematical Deconstruction)</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse pm-extraction-table">
                <thead>
                  <tr class="border-b border-slate-700 text-slate-400">
                    <th class="p-2">Fakta Teks Wacana</th>
                    <th class="p-2">Model Matematis</th>
                    <th class="p-2">Peran dalam Solusi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800 text-slate-200">
                  ${q.extractionTable.map(row => `
                    <tr>
                      <td class="p-2 text-slate-300">${row.fact}</td>
                      <td class="p-2 font-mono text-cyan-300 font-bold">${row.model}</td>
                      <td class="p-2 text-slate-400">${row.role}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      // Check if scratchpad drawing exists for this question
      const hasDrawing = window.userDrawings && window.userDrawings[idx] && window.userDrawings[idx].length > 0;

      list.innerHTML += `
        <div class="clean-card rounded-2xl p-5 sm:p-6 border border-slate-800 bg-dark-900/90 space-y-4">
          <!-- Card Header -->
          <div class="flex items-center justify-between pb-3 border-b border-slate-800 gap-2 flex-wrap">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-lg bg-indigo-600 text-white font-bold text-xs">
                Soal No. ${q.number}
              </span>
              <span class="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px]">
                ${q.domain} • ${q.subtopic || ''}
              </span>
            </div>
            <div class="flex items-center gap-2">
              ${statusBadge}
              ${hasDrawing ? `
                <button type="button" onclick="window.featuresPMEngine.viewStudentScratchpad(${idx})" class="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1 transition">
                  <span>✏️</span> <span>Coretan Siswa</span>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Stimulus Collapsible Peek -->
          ${stimulus ? `
            <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400">
              <div class="flex items-center justify-between font-bold text-slate-300 mb-1">
                <span>Wacana Acuan: ${stimulus.title}</span>
                <span class="text-[10px] text-cyan-400">${stimulus.badge}</span>
              </div>
            </div>
          ` : ''}

          <!-- Prompt -->
          <div class="text-sm font-medium text-white leading-relaxed">
            ${q.prompt}
          </div>

          <!-- Answer Comparison Box -->
          <div class="p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-2 text-xs">
            ${renderReviewAnswerDetail(q, item)}
          </div>

          <!-- Fact Extraction Table -->
          ${extractionTableHtml}

          <!-- Official Step-by-Step KaTeX Pembahasan -->
          <div class="p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 space-y-2 text-xs">
            <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">
              Pembahasan KaTeX Lengkap & Langkah Terstruktur:
            </span>
            <div class="text-slate-200 leading-relaxed space-y-1.5">
              ${q.explanation}
            </div>
            ${q.tacticalShortcut ? `
              <div class="mt-3 pt-2.5 border-t border-indigo-500/20 text-emerald-300 flex items-start gap-1.5">
                <span class="font-bold shrink-0">⚡ Trik Cepat UTBK:</span>
                <span>${q.tacticalShortcut}</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    triggerLatexRendering(list);
    if (window.lucide) window.lucide.createIcons();
  }

  function renderReviewAnswerDetail(q, item) {
    if (q.type === 'single_choice') {
      const userLetter = item.userAnswer !== null ? String.fromCharCode(65 + item.userAnswer) : '(Kosong)';
      const correctLetter = String.fromCharCode(65 + q.correct);

      return `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Pilihan Anda:</span>
            <span class="font-bold font-mono px-2 py-0.5 rounded ${item.isCorrect ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}">${userLetter}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Kunci Jawaban Benar:</span>
            <span class="font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${correctLetter}</span>
          </div>
        </div>
      `;
    } else if (q.type === 'numeric_input') {
      const userVal = item.userAnswer !== null ? item.userAnswer : '(Kosong)';
      return `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Isian Anda:</span>
            <span class="font-bold font-mono text-white">${userVal}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Kunci Numerik:</span>
            <span class="font-bold font-mono text-emerald-400">${q.correctNumeric} ${q.numericUnit || ''}</span>
          </div>
        </div>
      `;
    } else if (q.type === 'complex_tf') {
      return `
        <div class="space-y-1.5">
          <span class="text-[10px] font-bold text-slate-400 uppercase">Evaluasi Baris Pernyataan:</span>
          ${q.statements.map((stmt, sIdx) => {
            const userChoice = Array.isArray(item.userAnswer) ? item.userAnswer[sIdx] : null;
            const isRowCorrect = userChoice === stmt.correct;
            return `
              <div class="flex items-center justify-between py-1 border-b border-slate-800 text-[11px]">
                <span class="text-slate-300">${stmt.text}</span>
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">Anda: <strong class="${isRowCorrect ? 'text-emerald-400' : 'text-rose-400'}">${userChoice === true ? 'Benar' : (userChoice === false ? 'Salah' : '-')}</strong></span>
                  <span class="text-slate-500">• Kunci: <strong class="text-emerald-400">${stmt.correct ? 'Benar' : 'Salah'}</strong></span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }
    return '';
  }

  function viewStudentScratchpad(qIdx) {
    if (window.openExamScratchpad) {
      window.openExamScratchpad();
      if (window.TheArichExamScratchpad && window.TheArichExamScratchpad.controller) {
        window.TheArichExamScratchpad.controller.onQuestionChanged(qIdx);
      }
    }
  }

  // ============================================================================
  // 14. HELPER: KATEX TRIGGER
  // ============================================================================
  function triggerLatexRendering(container) {
    if (!window.renderMathInElement) return;
    const target = container || DOM.viewPmExam;
    if (!target) return;

    try {
      window.renderMathInElement(target, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn("KaTeX render error in PM engine:", err);
    }
  }

  // ============================================================================
  // 15. INITIALIZATION & GLOBAL EXPORT
  // ============================================================================
  function init() {
    injectPMStyles();
    injectPMMarkup();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.featuresPMEngine = {
    init,
    startPMExam,
    renderQuestion,
    handleOptionSelect,
    toggleOptionEliminate,
    handleComplexSelect,
    handleNumericInput,
    toggleCurrentDoubt,
    navigateQuestion,
    jumpToQuestion,
    switchMobileTab,
    adjustStimulusZoom,
    toggleMobileMatrixDrawer,
    openDeconstructorModal,
    closeDeconstructorModal,
    confirmSubmitExam,
    confirmExitExam,
    submitPMExam,
    filterReviewSheet,
    viewStudentScratchpad,
    getState: () => PMState
  };

  // Expose root shortcut
  window.startPMExam = startPMExam;

})(window, document);
