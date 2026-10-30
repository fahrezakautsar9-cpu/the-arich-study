/**
 * ==============================================================================
 * THE ARICH STUDY — IN-EXAM DIGITAL SCRATCHPAD CANVAS (PAPAN CORETAN DIGITAL)
 * File: the_arich_study/features_exam_scratchpad.js
 * 
 * CBT Exam Canvas Architecture:
 * 1. High-Performance HTML5 Canvas Vector Drawing Engine
 *    - Midpoint quadratic Bézier curve smoothing for silky, calligraphic strokes.
 *    - High-DPI screen support (window.devicePixelRatio hardware scaling).
 *    - Pressure sensitivity support for Apple Pencil, S-Pen, and modern styluses.
 *    - Comprehensive event handling: PointerEvents with Touch (touchstart, touchmove,
 *      touchend) and Mouse fallbacks. All with preventDefault() and touch-action: none
 *      to ensure 100% scroll-lock and gesture-free drawing on mobile/iPad/styluses.
 *    - Non-destructive vector stroke representation & base64 PNG export.
 *    - Step-by-step infinite Undo stack per question.
 *    - True eraser tool with destination-out composite mode.
 * 
 * 2. Floating & Resizable Draggable Overlay UI (#modal-exam-scratchpad)
 *    - Draggable window header with screen viewport bounds constraints.
 *    - Custom 2-axis corner resize handle with live canvas auto-refit.
 *    - Minimize to docked floating pill widget & Maximize to full whiteboard overlay.
 *    - Opacity Modes: Solid Dark (100%) vs Translucent Ghost Mode (65% transparent
 *      with backdrop-blur) allowing students to see questions & formulas underneath!
 *    - Color Palette: Neon Cyan (#06b6d4), Neon Amber (#f59e0b), Rose Pink (#f43f5e),
 *      Emerald (#10b981), and White (#ffffff).
 *    - Stroke Widths: Tipis (2px), Sedang (4px), Tebal (8px).
 * 
 * 3. Lifecycle & State Persistence
 *    - Persistent store: window.userDrawings[currentQIdx]
 *    - Auto-save current question drawings on question navigation (Prev, Next, Matrix)
 *    - Auto-load & replay question drawings on question switch
 *    - Clean reset on exam start, exit, or finish
 *    - Question Matrix dot/pencil indicator when scratchpad has drawings
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  // ============================================================================
  // 1. CONFIGURATION & STATE STORE
  // ============================================================================
  const CONFIG = {
    COLORS: {
      CYAN: '#06b6d4',
      AMBER: '#f59e0b',
      ROSE: '#f43f5e',
      EMERALD: '#10b981',
      WHITE: '#ffffff'
    },
    DEFAULT_COLOR: '#06b6d4',
    DEFAULT_WIDTH: 4,
    ERASER_MULTIPLIER: 3.0,
    STORAGE_KEY: 'the_arich_exam_scratchpad_v1'
  };

  // Global user drawings repository per question index
  window.userDrawings = window.userDrawings || {};

  const ScratchpadState = {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isGhostMode: false,
    activeTool: 'pen', // 'pen' | 'eraser'
    currentColor: CONFIG.DEFAULT_COLOR,
    currentWidth: CONFIG.DEFAULT_WIDTH,
    activeQuestionIndex: 0,
    currentStrokes: [],
    
    // Live drawing state
    isDrawing: false,
    activeStroke: null,
    strokePoints: [],
    
    // Window dragging & resizing state
    isDraggingWindow: false,
    dragStart: { x: 0, y: 0 },
    windowStartPos: { left: 0, top: 0 },
    isResizingWindow: false,
    resizeStart: { x: 0, y: 0, width: 0, height: 0 },
    savedWindowRect: null,
    
    // Cache for 1-step undo on accidental "Clear All"
    clearedStrokesCache: null
  };

  // DOM Elements cache
  let DOM = {};

  // ============================================================================
  // 2. STYLESHEET INJECTION
  // ============================================================================
  function injectScratchpadStyles() {
    if (document.getElementById('exam-scratchpad-custom-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'exam-scratchpad-custom-styles';
    styleEl.textContent = `
      /* In-Exam Scratchpad Canvas Animations & Glassmorphism */
      @keyframes scratchpad-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(0.92); }
      }
      .scratchpad-pulse {
        animation: scratchpad-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      /* Ghost Mode Translucency */
      .scratchpad-ghost-active {
        background-color: rgba(10, 15, 30, 0.42) !important;
        backdrop-filter: blur(2px) !important;
        -webkit-backdrop-filter: blur(2px) !important;
        border-color: rgba(6, 182, 212, 0.55) !important;
        box-shadow: 0 10px 40px -10px rgba(6, 182, 212, 0.25), 0 0 15px rgba(6, 182, 212, 0.2) !important;
      }
      .scratchpad-ghost-canvas {
        background-color: rgba(7, 11, 20, 0.20) !important;
      }

      /* Solid Dark Mode */
      .scratchpad-solid-active {
        background-color: #0f172a !important;
        backdrop-filter: none !important;
        border-color: rgba(51, 65, 85, 0.9) !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(15, 23, 42, 0.5) !important;
      }
      .scratchpad-solid-canvas {
        background-color: #070b14 !important;
      }

      /* Floating Pill Animation */
      @keyframes float-subtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .scratchpad-float-pill {
        animation: float-subtle 3s ease-in-out infinite;
      }

      /* Crosshair cursor for drawing */
      #exam-scratchpad-canvas {
        cursor: crosshair;
        touch-action: none;
        -webkit-user-select: none;
        user-select: none;
      }

      /* Active color ring */
      .scratchpad-color-btn.active-color {
        box-shadow: 0 0 0 2px #ffffff, 0 0 12px currentColor;
        transform: scale(1.15);
      }

      /* Question matrix coretan badge */
      .matrix-has-drawing {
        position: relative;
      }
      .matrix-has-drawing::after {
        content: '';
        position: absolute;
        top: 3px;
        right: 3px;
        width: 6px;
        height: 6px;
        border-radius: 9999px;
        background-color: #06b6d4;
        box-shadow: 0 0 6px #06b6d4;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ============================================================================
  // 3. UI GENERATION & INJECTION
  // ============================================================================
  function injectScratchpadMarkup() {
    if (document.getElementById('modal-exam-scratchpad')) {
      cacheDOMElements();
      return;
    }

    const markup = `
      <!-- ==================================================== -->
      <!-- MODAL EXAM SCRATCHPAD OVERLAY                        -->
      <!-- ==================================================== -->
      <div id="modal-exam-scratchpad" class="hidden fixed z-40 select-none transition-all duration-150" 
           style="bottom: 24px; right: 24px; width: 620px; max-width: calc(100vw - 28px); height: 490px; max-height: calc(100vh - 75px);">
        
        <!-- Scratchpad Window Frame Card -->
        <div id="exam-scratchpad-window-card" class="w-full h-full flex flex-col rounded-2xl border scratchpad-solid-active overflow-hidden relative transition-colors duration-200">
          
          <!-- 1. Window Header (Draggable Handle) -->
          <div id="exam-scratchpad-header" class="px-3.5 py-2.5 bg-slate-850/90 border-b border-slate-700/80 flex items-center justify-between gap-2 cursor-move select-none shrink-0">
            
            <!-- Left: Title & Live Indicators -->
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs shrink-0 font-bold">
                ✏️
              </span>
              <h3 id="exam-scratchpad-title" class="text-xs sm:text-sm font-bold text-white truncate tracking-tight">
                Papan Coretan — Soal No. 1
              </h3>
              <span id="exam-scratchpad-save-badge" class="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Autosave
              </span>
            </div>

            <!-- Right: Window Actions (Non-Draggable Area) -->
            <div class="flex items-center gap-1.5 shrink-0" onmousedown="event.stopPropagation()" ontouchstart="event.stopPropagation()">
              
              <!-- Opacity Ghost Toggle Button -->
              <button type="button" onclick="window.toggleScratchpadOpacity()" id="btn-scratchpad-ghost-toggle" 
                      title="Ubah Mode Transparansi (Solid 100% vs Ghost 65% Transparan)" 
                      class="px-2 py-1 rounded-lg text-[11px] font-semibold bg-dark-900 hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition cursor-pointer">
                <span id="scratchpad-opacity-icon" class="text-xs">⬛</span>
                <span id="scratchpad-opacity-label" class="hidden md:inline">Solid</span>
              </button>

              <!-- Minimize Toggle Button -->
              <button type="button" onclick="window.toggleScratchpadMinimize()" id="btn-scratchpad-minimize" 
                      title="Perkecil ke floating dock pill" 
                      class="p-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer">
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>

              <!-- Maximize / Restore Toggle Button -->
              <button type="button" onclick="window.toggleScratchpadMaximize()" id="btn-scratchpad-maximize" 
                      title="Perbesar Layar Penuh / Pulihkan Ukuran" 
                      class="p-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer">
                <i data-lucide="maximize-2" class="w-3.5 h-3.5" id="icon-scratchpad-maximize"></i>
              </button>

              <!-- Close Button -->
              <button type="button" onclick="window.closeExamScratchpad()" id="btn-scratchpad-close" 
                      title="Tutup Papan Coretan" 
                      class="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition cursor-pointer">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
              </button>
            </div>

          </div>

          <!-- 2. Drawing Toolbar Controls -->
          <div id="exam-scratchpad-toolbar" class="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto shrink-0 text-xs">
            
            <!-- Group A: Color Palette -->
            <div class="flex items-center gap-1.5 shrink-0" title="Pilih Warna Pena">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden lg:inline mr-0.5">Warna:</span>
              
              <!-- Neon Cyan (#06b6d4) -->
              <button type="button" onclick="window.setScratchpadColor('#06b6d4')" 
                      class="scratchpad-color-btn active-color w-6 h-6 rounded-full bg-[#06b6d4] transition cursor-pointer" 
                      data-color="#06b6d4" title="Neon Cyan (#06b6d4)"></button>

              <!-- Neon Amber (#f59e0b) -->
              <button type="button" onclick="window.setScratchpadColor('#f59e0b')" 
                      class="scratchpad-color-btn w-6 h-6 rounded-full bg-[#f59e0b] transition cursor-pointer" 
                      data-color="#f59e0b" title="Neon Amber (#f59e0b)"></button>

              <!-- Rose Pink (#f43f5e) -->
              <button type="button" onclick="window.setScratchpadColor('#f43f5e')" 
                      class="scratchpad-color-btn w-6 h-6 rounded-full bg-[#f43f5e] transition cursor-pointer" 
                      data-color="#f43f5e" title="Rose Pink (#f43f5e)"></button>

              <!-- Emerald (#10b981) -->
              <button type="button" onclick="window.setScratchpadColor('#10b981')" 
                      class="scratchpad-color-btn w-6 h-6 rounded-full bg-[#10b981] transition cursor-pointer" 
                      data-color="#10b981" title="Emerald (#10b981)"></button>

              <!-- White (#ffffff) -->
              <button type="button" onclick="window.setScratchpadColor('#ffffff')" 
                      class="scratchpad-color-btn w-6 h-6 rounded-full bg-[#ffffff] transition cursor-pointer" 
                      data-color="#ffffff" title="White (#ffffff)"></button>
            </div>

            <div class="h-4 w-px bg-slate-700/80 shrink-0"></div>

            <!-- Group B: Pen & Eraser Tool Selection -->
            <div class="flex items-center gap-1 shrink-0">
              <!-- Pen Tool -->
              <button type="button" onclick="window.activateScratchpadPen()" id="btn-scratchpad-pen" 
                      class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer" 
                      title="Pena Gambar (P)">
                <i data-lucide="edit-3" class="w-3 h-3"></i>
                <span>Pena</span>
              </button>

              <!-- Eraser Tool -->
              <button type="button" onclick="window.toggleScratchpadEraser()" id="btn-scratchpad-eraser" 
                      class="px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer" 
                      title="Penghapus Goresan (E)">
                <i data-lucide="eraser" class="w-3 h-3"></i>
                <span>Hapus</span>
              </button>
            </div>

            <div class="h-4 w-px bg-slate-700/80 shrink-0"></div>

            <!-- Group C: Stroke Width Presets (Tipis 2px, Sedang 4px, Tebal 8px) -->
            <div class="flex items-center gap-1 shrink-0" title="Tebal Garis">
              <button type="button" onclick="window.setScratchpadWidth(2)" class="scratchpad-width-btn px-2 py-1 rounded text-[11px] font-semibold bg-dark-850 text-slate-300 border border-slate-700 hover:text-white cursor-pointer" data-width="2" title="Tipis (2px)">
                2px
              </button>
              <button type="button" onclick="window.setScratchpadWidth(4)" class="scratchpad-width-btn px-2 py-1 rounded text-[11px] font-semibold bg-indigo-600 text-white border border-indigo-500 cursor-pointer" data-width="4" title="Sedang (4px)">
                4px
              </button>
              <button type="button" onclick="window.setScratchpadWidth(8)" class="scratchpad-width-btn px-2 py-1 rounded text-[11px] font-semibold bg-dark-850 text-slate-300 border border-slate-700 hover:text-white cursor-pointer" data-width="8" title="Tebal (8px)">
                8px
              </button>
            </div>

            <div class="h-4 w-px bg-slate-700/80 shrink-0"></div>

            <!-- Group D: History & Reset Actions (Undo & Clear All) -->
            <div class="flex items-center gap-1 shrink-0 ml-auto">
              <!-- Undo Button -->
              <button type="button" onclick="window.undoExamScratchpad()" id="btn-scratchpad-undo" disabled 
                      class="px-2.5 py-1 rounded-lg bg-dark-850 text-slate-500 border border-slate-800 text-[11px] font-semibold flex items-center gap-1 opacity-50 cursor-not-allowed transition" 
                      title="Batalkan goresan terakhir (Ctrl+Z)">
                <i data-lucide="undo-2" class="w-3 h-3"></i>
                <span class="hidden sm:inline">Undo</span>
              </button>

              <!-- Clear All Button -->
              <button type="button" onclick="window.confirmClearScratchpad()" id="btn-scratchpad-clear" 
                      class="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer" 
                      title="Bersihkan semua coretan di nomor ini">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
                <span class="hidden sm:inline">Bersihkan</span>
              </button>
            </div>

          </div>

          <!-- 3. Canvas Surface Container -->
          <div id="exam-scratchpad-canvas-container" class="relative flex-1 w-full h-full overflow-hidden scratchpad-solid-canvas touch-none">
            
            <!-- Ghost Mode Live Floating Watermark -->
            <div id="scratchpad-ghost-badge" class="hidden absolute top-2.5 right-3 pointer-events-none px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[10px] font-bold text-cyan-300 backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Ghost Mode (65% Transparan)</span>
            </div>

            <!-- Interactive HTML5 Drawing Canvas -->
            <canvas id="exam-scratchpad-canvas" class="w-full h-full block touch-none" style="touch-action: none;"></canvas>

            <!-- 2-Axis Resize Handle (Bottom-Right Corner) -->
            <div id="exam-scratchpad-resize-handle" 
                 class="absolute bottom-0 right-0 w-5 h-5 cursor-nwse-resize z-20 flex items-center justify-center text-slate-500 hover:text-cyan-400 transition" 
                 title="Tarik untuk mengubah ukuran papan">
              <svg class="w-3.5 h-3.5 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M22 22L13 22M22 16L16 22M22 10L10 22" />
              </svg>
            </div>

          </div>

        </div>

      </div>

      <!-- Minimized Floating Pill Dock (Appears when scratchpad is minimized) -->
      <div id="scratchpad-minimized-pill" class="hidden fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/95 border border-cyan-500/50 shadow-2xl rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 text-xs text-white backdrop-blur-md scratchpad-float-pill select-none">
        <span class="text-sm">✏️</span>
        <div class="cursor-pointer" onclick="window.restoreScratchpadFromMinimized()" title="Klik untuk membuka papan coretan">
          <div class="font-bold text-cyan-300 leading-tight" id="scratchpad-pill-title">Papan Coretan — Soal No. 1</div>
          <div class="text-[10px] text-slate-400 font-mono" id="scratchpad-pill-subtitle">0 goresan tersimpan</div>
        </div>
        <button type="button" onclick="window.restoreScratchpadFromMinimized()" class="p-1 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition text-xs cursor-pointer" title="Buka Kembali">
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
        </button>
        <button type="button" onclick="window.closeExamScratchpad()" class="p-1 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition text-xs cursor-pointer" title="Tutup">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.id = 'exam-scratchpad-root-wrapper';
    wrapper.innerHTML = markup;
    document.body.appendChild(wrapper);

    cacheDOMElements();
    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================================================
  // 4. CACHE DOM & ATTACH LISTENERS
  // ============================================================================
  function cacheDOMElements() {
    DOM.modal = document.getElementById('modal-exam-scratchpad');
    DOM.windowCard = document.getElementById('exam-scratchpad-window-card');
    DOM.header = document.getElementById('exam-scratchpad-header');
    DOM.title = document.getElementById('exam-scratchpad-title');
    DOM.saveBadge = document.getElementById('exam-scratchpad-save-badge');
    DOM.canvasContainer = document.getElementById('exam-scratchpad-canvas-container');
    DOM.canvas = document.getElementById('exam-scratchpad-canvas');
    DOM.resizeHandle = document.getElementById('exam-scratchpad-resize-handle');
    DOM.ghostBadge = document.getElementById('scratchpad-ghost-badge');
    
    DOM.btnGhostToggle = document.getElementById('btn-scratchpad-ghost-toggle');
    DOM.ghostIcon = document.getElementById('scratchpad-opacity-icon');
    DOM.ghostLabel = document.getElementById('scratchpad-opacity-label');
    
    DOM.btnPen = document.getElementById('btn-scratchpad-pen');
    DOM.btnEraser = document.getElementById('btn-scratchpad-eraser');
    DOM.btnUndo = document.getElementById('btn-scratchpad-undo');
    DOM.btnClear = document.getElementById('btn-scratchpad-clear');
    DOM.btnMaximize = document.getElementById('btn-scratchpad-maximize');
    DOM.iconMaximize = document.getElementById('icon-scratchpad-maximize');
    
    DOM.minimizedPill = document.getElementById('scratchpad-minimized-pill');
    DOM.pillTitle = document.getElementById('scratchpad-pill-title');
    DOM.pillSubtitle = document.getElementById('scratchpad-pill-subtitle');

    if (DOM.canvas) {
      ScratchpadEngine.initCanvas(DOM.canvas, DOM.canvasContainer);
    }
  }

  // ============================================================================
  // 5. CANVAS DRAWING ENGINE (HIGH-DPI & BÉZIER SMOOTHING)
  // ============================================================================
  const ScratchpadEngine = {
    canvas: null,
    ctx: null,
    container: null,
    dpr: 1,
    cssWidth: 0,
    cssHeight: 0,
    resizeObserver: null,

    initCanvas(canvasEl, containerEl) {
      this.canvas = canvasEl;
      this.container = containerEl;
      this.ctx = canvasEl.getContext('2d');
      this.dpr = Math.max(1, window.devicePixelRatio || 1);

      this.bindDrawingEvents();
      this.bindWindowDragEvents();
      this.bindWindowResizeEvents();
      this.setupResizeObserver();
    },

    setupResizeObserver() {
      if (window.ResizeObserver && this.container) {
        this.resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
              this.handleContainerResize();
            }
          }
        });
        this.resizeObserver.observe(this.container);
      }
    },

    handleContainerResize() {
      if (!this.container || !this.canvas) return;
      const rect = this.container.getBoundingClientRect();
      const newCssW = Math.floor(rect.width);
      const newCssH = Math.floor(rect.height);

      if (newCssW <= 0 || newCssH <= 0) return;
      if (newCssW === this.cssWidth && newCssH === this.cssHeight) return;

      this.cssWidth = newCssW;
      this.cssHeight = newCssH;
      this.dpr = Math.max(1, window.devicePixelRatio || 1);

      this.canvas.width = Math.floor(newCssW * this.dpr);
      this.canvas.height = Math.floor(newCssH * this.dpr);
      this.canvas.style.width = newCssW + 'px';
      this.canvas.style.height = newCssH + 'px';

      this.redrawAllStrokes();
    },

    getPointerPos(e) {
      const rect = this.canvas.getBoundingClientRect();
      let clientX, clientY, pressure = 0.5;

      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
        if (typeof e.pressure === 'number' && e.pressure > 0) {
          pressure = e.pressure;
        }
      }

      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
        pressure: pressure
      };
    },

    startStroke(pos) {
      ScratchpadState.isDrawing = true;
      ScratchpadState.strokePoints = [pos];

      const isEraser = ScratchpadState.activeTool === 'eraser';
      const baseWidth = ScratchpadState.currentWidth;
      const strokeWidth = isEraser ? (baseWidth * CONFIG.ERASER_MULTIPLIER) : baseWidth;

      ScratchpadState.activeStroke = {
        color: ScratchpadState.currentColor,
        width: strokeWidth,
        isEraser: isEraser,
        points: [{ x: pos.x, y: pos.y }]
      };

      // Draw initial tap point immediately
      const ctx = this.ctx;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(this.dpr, this.dpr);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
      ctx.fillStyle = isEraser ? '#000000' : ScratchpadState.currentColor;

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, strokeWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },

    continueStroke(pos) {
      if (!ScratchpadState.isDrawing || !ScratchpadState.activeStroke) return;

      const pts = ScratchpadState.strokePoints;
      const lastPt = pts[pts.length - 1];

      // Jitter filter: discard sub-pixel micro-movements
      const dx = pos.x - lastPt.x;
      const dy = pos.y - lastPt.y;
      if ((dx * dx + dy * dy) < 1.8) return;

      pts.push(pos);
      ScratchpadState.activeStroke.points.push({ x: pos.x, y: pos.y });

      const ctx = this.ctx;
      const isEraser = ScratchpadState.activeStroke.isEraser;
      const strokeWidth = ScratchpadState.activeStroke.width;

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(this.dpr, this.dpr);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
      ctx.strokeStyle = ScratchpadState.activeStroke.color;
      ctx.lineWidth = strokeWidth;

      if (pts.length === 2) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[1].x, pts[1].y);
        ctx.stroke();
      } else {
        // Midpoint quadratic Bézier smoothing
        const p0 = pts[pts.length - 3];
        const p1 = pts[pts.length - 2];
        const p2 = pts[pts.length - 1];

        const midPrev = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
        const midCurr = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };

        ctx.beginPath();
        ctx.moveTo(midPrev.x, midPrev.y);
        ctx.quadraticCurveTo(p1.x, p1.y, midCurr.x, midCurr.y);
        ctx.stroke();
      }
      ctx.restore();
    },

    endStroke(pos) {
      if (!ScratchpadState.isDrawing) return;
      ScratchpadState.isDrawing = false;

      if (ScratchpadState.activeStroke && ScratchpadState.activeStroke.points.length > 0) {
        const pts = ScratchpadState.strokePoints;
        if (pts.length > 2) {
          // Final segment stroke to last point
          const pPrev = pts[pts.length - 2];
          const pLast = pts[pts.length - 1];
          const midPrev = { x: (pts[pts.length - 3].x + pPrev.x) / 2, y: (pts[pts.length - 3].y + pPrev.y) / 2 };

          const ctx = this.ctx;
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.scale(this.dpr, this.dpr);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.globalCompositeOperation = ScratchpadState.activeStroke.isEraser ? 'destination-out' : 'source-over';
          ctx.strokeStyle = ScratchpadState.activeStroke.color;
          ctx.lineWidth = ScratchpadState.activeStroke.width;

          ctx.beginPath();
          ctx.moveTo(midPrev.x, midPrev.y);
          ctx.quadraticCurveTo(pPrev.x, pPrev.y, pLast.x, pLast.y);
          ctx.stroke();
          ctx.restore();
        }

        ScratchpadState.currentStrokes.push(ScratchpadState.activeStroke);
        ScratchpadState.activeStroke = null;
        ScratchpadState.strokePoints = [];

        // Auto-save & update controls
        ScratchpadController.saveCurrentQuestionDrawing();
        ScratchpadController.updateUndoButton();
      }
    },

    redrawAllStrokes() {
      if (!this.ctx || !this.canvas) return;

      const ctx = this.ctx;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.scale(this.dpr, this.dpr);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const strokes = ScratchpadState.currentStrokes || [];
      for (let s = 0; s < strokes.length; s++) {
        const st = strokes[s];
        const pts = st.points;
        if (!pts || pts.length === 0) continue;

        const isEraser = !!st.isEraser;
        const strokeW = st.width;

        ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
        ctx.strokeStyle = st.color;
        ctx.fillStyle = isEraser ? '#000000' : st.color;
        ctx.lineWidth = strokeW;

        if (pts.length === 1) {
          ctx.beginPath();
          ctx.arc(pts[0].x, pts[0].y, strokeW / 2, 0, Math.PI * 2);
          ctx.fill();
          continue;
        }

        if (pts.length === 2) {
          ctx.beginPath();
          ctx.moveTo(pts[0].x, pts[0].y);
          ctx.lineTo(pts[1].x, pts[1].y);
          ctx.stroke();
          continue;
        }

        // 3+ points: Quadratic Bézier Smoothing
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        let mid = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
        ctx.lineTo(mid.x, mid.y);

        for (let i = 1; i < pts.length - 1; i++) {
          const pNext = pts[i + 1];
          const nextMid = { x: (pts[i].x + pNext.x) / 2, y: (pts[i].y + pNext.y) / 2 };
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, nextMid.x, nextMid.y);
        }

        const lastPt = pts[pts.length - 1];
        ctx.lineTo(lastPt.x, lastPt.y);
        ctx.stroke();
      }

      ctx.restore();
    },

    bindDrawingEvents() {
      const c = this.canvas;
      if (!c) return;

      // Modern PointerEvents (Apple Pencil, S-Pen, Touch, Mouse)
      if (window.PointerEvent) {
        c.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          try { c.setPointerCapture(e.pointerId); } catch (err) {}
          const pos = this.getPointerPos(e);
          this.startStroke(pos);
        }, { passive: false });

        c.addEventListener('pointermove', (e) => {
          e.preventDefault();
          if (!ScratchpadState.isDrawing) return;
          const pos = this.getPointerPos(e);
          this.continueStroke(pos);
        }, { passive: false });

        const handlePointerEnd = (e) => {
          e.preventDefault();
          try {
            if (c.hasPointerCapture && c.hasPointerCapture(e.pointerId)) {
              c.releasePointerCapture(e.pointerId);
            }
          } catch (err) {}
          const pos = this.getPointerPos(e);
          this.endStroke(pos);
        };

        c.addEventListener('pointerup', handlePointerEnd, { passive: false });
        c.addEventListener('pointercancel', handlePointerEnd, { passive: false });
      } else {
        // Fallback Touch Events for older mobile browsers
        c.addEventListener('touchstart', (e) => {
          e.preventDefault();
          const pos = this.getPointerPos(e);
          this.startStroke(pos);
        }, { passive: false });

        c.addEventListener('touchmove', (e) => {
          e.preventDefault();
          if (!ScratchpadState.isDrawing) return;
          const pos = this.getPointerPos(e);
          this.continueStroke(pos);
        }, { passive: false });

        c.addEventListener('touchend', (e) => {
          e.preventDefault();
          const pos = this.getPointerPos(e);
          this.endStroke(pos);
        }, { passive: false });

        c.addEventListener('touchcancel', (e) => {
          e.preventDefault();
          this.endStroke();
        }, { passive: false });

        // Fallback Mouse Events for desktop
        c.addEventListener('mousedown', (e) => {
          const pos = this.getPointerPos(e);
          this.startStroke(pos);
        });

        window.addEventListener('mousemove', (e) => {
          if (!ScratchpadState.isDrawing) return;
          const pos = this.getPointerPos(e);
          this.continueStroke(pos);
        });

        window.addEventListener('mouseup', (e) => {
          if (ScratchpadState.isDrawing) {
            const pos = this.getPointerPos(e);
            this.endStroke(pos);
          }
        });
      }

      // Hard prevent page scrolling & gesture zoom on canvas
      ['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
        c.addEventListener(evt, (e) => e.preventDefault(), { passive: false });
      });
    },

    bindWindowDragEvents() {
      const header = DOM.header;
      const modal = DOM.modal;
      if (!header || !modal) return;

      const onDragStart = (e) => {
        if (ScratchpadState.isMaximized) return;
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('a')) return;

        ScratchpadState.isDraggingWindow = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        ScratchpadState.dragStart = { x: clientX, y: clientY };
        const rect = modal.getBoundingClientRect();
        ScratchpadState.windowStartPos = { left: rect.left, top: rect.top };

        document.body.style.userSelect = 'none';
      };

      const onDragMove = (e) => {
        if (!ScratchpadState.isDraggingWindow) return;
        if (e.cancelable) e.preventDefault();

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const deltaX = clientX - ScratchpadState.dragStart.x;
        const deltaY = clientY - ScratchpadState.dragStart.y;

        const w = modal.offsetWidth;
        const h = modal.offsetHeight;

        const maxLeft = Math.max(10, window.innerWidth - w - 10);
        const maxTop = Math.max(10, window.innerHeight - h - 10);

        const newLeft = Math.min(Math.max(10, ScratchpadState.windowStartPos.left + deltaX), maxLeft);
        const newTop = Math.min(Math.max(10, ScratchpadState.windowStartPos.top + deltaY), maxTop);

        modal.style.left = `${newLeft}px`;
        modal.style.top = `${newTop}px`;
        modal.style.right = 'auto';
        modal.style.bottom = 'auto';
      };

      const onDragEnd = () => {
        if (ScratchpadState.isDraggingWindow) {
          ScratchpadState.isDraggingWindow = false;
          document.body.style.userSelect = '';
        }
      };

      header.addEventListener('mousedown', onDragStart);
      header.addEventListener('touchstart', onDragStart, { passive: false });

      window.addEventListener('mousemove', onDragMove);
      window.addEventListener('touchmove', onDragMove, { passive: false });

      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('touchend', onDragEnd);
    },

    bindWindowResizeEvents() {
      const handle = DOM.resizeHandle;
      const modal = DOM.modal;
      if (!handle || !modal) return;

      const onResizeStart = (e) => {
        if (ScratchpadState.isMaximized) return;
        e.preventDefault();
        e.stopPropagation();

        ScratchpadState.isResizingWindow = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        ScratchpadState.resizeStart = {
          x: clientX,
          y: clientY,
          width: modal.offsetWidth,
          height: modal.offsetHeight
        };
        document.body.style.userSelect = 'none';
      };

      const onResizeMove = (e) => {
        if (!ScratchpadState.isResizingWindow) return;
        if (e.cancelable) e.preventDefault();

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const deltaX = clientX - ScratchpadState.resizeStart.x;
        const deltaY = clientY - ScratchpadState.resizeStart.y;

        const minW = 320;
        const minH = 260;
        const maxW = window.innerWidth - 20;
        const maxH = window.innerHeight - 20;

        const newW = Math.min(Math.max(minW, ScratchpadState.resizeStart.width + deltaX), maxW);
        const newH = Math.min(Math.max(minH, ScratchpadState.resizeStart.height + deltaY), maxH);

        modal.style.width = `${newW}px`;
        modal.style.height = `${newH}px`;

        ScratchpadEngine.handleContainerResize();
      };

      const onResizeEnd = () => {
        if (ScratchpadState.isResizingWindow) {
          ScratchpadState.isResizingWindow = false;
          document.body.style.userSelect = '';
          ScratchpadEngine.handleContainerResize();
        }
      };

      handle.addEventListener('mousedown', onResizeStart);
      handle.addEventListener('touchstart', onResizeStart, { passive: false });

      window.addEventListener('mousemove', onResizeMove);
      window.addEventListener('touchmove', onResizeMove, { passive: false });

      window.addEventListener('mouseup', onResizeEnd);
      window.addEventListener('touchend', onResizeEnd);
    }
  };

  // ============================================================================
  // 6. CONTROLLER & BUSINESS LOGIC
  // ============================================================================
  const ScratchpadController = {
    init() {
      injectScratchpadStyles();
      injectScratchpadMarkup();
      this.bindKeyboardShortcuts();
      this.installExamLifecycleHooks();
      this.ensureTriggerButtonInExamView();
    },

    openExamScratchpad() {
      if (!DOM.modal) cacheDOMElements();
      if (!DOM.modal) return;

      ScratchpadState.isOpen = true;
      ScratchpadState.isMinimized = false;

      if (DOM.minimizedPill) DOM.minimizedPill.classList.add('hidden');
      DOM.modal.classList.remove('hidden');

      // Sync active question index from platform
      if (typeof window.currentQIdx === 'number') {
        ScratchpadState.activeQuestionIndex = window.currentQIdx;
      }
      this.loadQuestionDrawing(ScratchpadState.activeQuestionIndex);

      // Trigger resize after modal becomes visible
      requestAnimationFrame(() => {
        ScratchpadEngine.handleContainerResize();
        ScratchpadEngine.redrawAllStrokes();
      });

      this.updateHeaderTitle(ScratchpadState.activeQuestionIndex);
      this.updateTriggerButtonState(true);
    },

    closeExamScratchpad() {
      if (!DOM.modal) cacheDOMElements();
      if (!DOM.modal) return;

      this.saveCurrentQuestionDrawing();

      ScratchpadState.isOpen = false;
      ScratchpadState.isMinimized = false;

      DOM.modal.classList.add('hidden');
      if (DOM.minimizedPill) DOM.minimizedPill.classList.add('hidden');

      this.updateTriggerButtonState(false);
    },

    toggleExamScratchpad() {
      if (ScratchpadState.isOpen) {
        this.closeExamScratchpad();
      } else {
        this.openExamScratchpad();
      }
    },

    toggleScratchpadMinimize() {
      if (!DOM.modal || !DOM.minimizedPill) cacheDOMElements();

      this.saveCurrentQuestionDrawing();

      if (ScratchpadState.isMinimized) {
        // Restore
        this.restoreScratchpadFromMinimized();
      } else {
        // Minimize to dock pill
        ScratchpadState.isMinimized = true;
        DOM.modal.classList.add('hidden');
        DOM.minimizedPill.classList.remove('hidden');

        const qNum = ScratchpadState.activeQuestionIndex + 1;
        const count = ScratchpadState.currentStrokes ? ScratchpadState.currentStrokes.length : 0;
        if (DOM.pillTitle) DOM.pillTitle.textContent = `Papan Coretan — Soal No. ${qNum}`;
        if (DOM.pillSubtitle) DOM.pillSubtitle.textContent = `${count} goresan tersimpan`;

        if (window.lucide) window.lucide.createIcons();
      }
    },

    restoreScratchpadFromMinimized() {
      if (!DOM.modal || !DOM.minimizedPill) cacheDOMElements();

      ScratchpadState.isMinimized = false;
      DOM.minimizedPill.classList.add('hidden');
      DOM.modal.classList.remove('hidden');

      requestAnimationFrame(() => {
        ScratchpadEngine.handleContainerResize();
        ScratchpadEngine.redrawAllStrokes();
      });
    },

    toggleScratchpadMaximize() {
      if (!DOM.modal) cacheDOMElements();
      const m = DOM.modal;
      const icon = DOM.iconMaximize;

      if (!ScratchpadState.isMaximized) {
        // Maximize
        ScratchpadState.isMaximized = true;
        ScratchpadState.savedWindowRect = {
          left: m.style.left,
          top: m.style.top,
          right: m.style.right,
          bottom: m.style.bottom,
          width: m.style.width,
          height: m.style.height
        };

        m.style.left = '10px';
        m.style.top = '10px';
        m.style.right = 'auto';
        m.style.bottom = 'auto';
        m.style.width = 'calc(100vw - 20px)';
        m.style.height = 'calc(100vh - 20px)';

        if (icon) icon.setAttribute('data-lucide', 'minimize-2');
      } else {
        // Restore
        ScratchpadState.isMaximized = false;
        if (ScratchpadState.savedWindowRect) {
          m.style.left = ScratchpadState.savedWindowRect.left || '';
          m.style.top = ScratchpadState.savedWindowRect.top || '';
          m.style.right = ScratchpadState.savedWindowRect.right || '24px';
          m.style.bottom = ScratchpadState.savedWindowRect.bottom || '24px';
          m.style.width = ScratchpadState.savedWindowRect.width || '620px';
          m.style.height = ScratchpadState.savedWindowRect.height || '490px';
        }

        if (icon) icon.setAttribute('data-lucide', 'maximize-2');
      }

      if (window.lucide) window.lucide.createIcons();
      requestAnimationFrame(() => {
        ScratchpadEngine.handleContainerResize();
        ScratchpadEngine.redrawAllStrokes();
      });
    },

    toggleScratchpadOpacity() {
      ScratchpadState.isGhostMode = !ScratchpadState.isGhostMode;
      const card = DOM.windowCard;
      const container = DOM.canvasContainer;
      const badge = DOM.ghostBadge;

      if (ScratchpadState.isGhostMode) {
        // Ghost Mode (65% Transparent with blur)
        if (card) {
          card.classList.remove('scratchpad-solid-active');
          card.classList.add('scratchpad-ghost-active');
        }
        if (container) {
          container.classList.remove('scratchpad-solid-canvas');
          container.classList.add('scratchpad-ghost-canvas');
        }
        if (badge) badge.classList.remove('hidden');
        if (DOM.ghostIcon) DOM.ghostIcon.textContent = '👁️';
        if (DOM.ghostLabel) DOM.ghostLabel.textContent = 'Ghost 65%';
        if (DOM.btnGhostToggle) {
          DOM.btnGhostToggle.className = 'px-2 py-1 rounded-lg text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition cursor-pointer';
        }
      } else {
        // Solid Dark Mode (100% Opaque)
        if (card) {
          card.classList.remove('scratchpad-ghost-active');
          card.classList.add('scratchpad-solid-active');
        }
        if (container) {
          container.classList.remove('scratchpad-ghost-canvas');
          container.classList.add('scratchpad-solid-canvas');
        }
        if (badge) badge.classList.add('hidden');
        if (DOM.ghostIcon) DOM.ghostIcon.textContent = '⬛';
        if (DOM.ghostLabel) DOM.ghostLabel.textContent = 'Solid 100%';
        if (DOM.btnGhostToggle) {
          DOM.btnGhostToggle.className = 'px-2 py-1 rounded-lg text-[11px] font-semibold bg-dark-900 hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition cursor-pointer';
        }
      }
    },

    setScratchpadColor(colorHex) {
      ScratchpadState.currentColor = colorHex;
      this.activateScratchpadPen();

      document.querySelectorAll('.scratchpad-color-btn').forEach(btn => {
        if (btn.getAttribute('data-color') === colorHex) {
          btn.classList.add('active-color');
        } else {
          btn.classList.remove('active-color');
        }
      });
    },

    setScratchpadWidth(widthPx) {
      ScratchpadState.currentWidth = widthPx;

      document.querySelectorAll('.scratchpad-width-btn').forEach(btn => {
        const w = parseInt(btn.getAttribute('data-width'), 10);
        if (w === widthPx) {
          btn.className = 'scratchpad-width-btn px-2 py-1 rounded text-[11px] font-semibold bg-indigo-600 text-white border border-indigo-500 cursor-pointer';
        } else {
          btn.className = 'scratchpad-width-btn px-2 py-1 rounded text-[11px] font-semibold bg-dark-850 text-slate-300 border border-slate-700 hover:text-white cursor-pointer';
        }
      });
    },

    activateScratchpadPen() {
      ScratchpadState.activeTool = 'pen';
      if (DOM.btnPen) {
        DOM.btnPen.className = 'px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer';
      }
      if (DOM.btnEraser) {
        DOM.btnEraser.className = 'px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer';
      }
    },

    toggleScratchpadEraser() {
      if (ScratchpadState.activeTool === 'eraser') {
        this.activateScratchpadPen();
      } else {
        ScratchpadState.activeTool = 'eraser';
        if (DOM.btnEraser) {
          DOM.btnEraser.className = 'px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 ring-2 ring-rose-500/50 border border-rose-500 font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer';
        }
        if (DOM.btnPen) {
          DOM.btnPen.className = 'px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-[11px] flex items-center gap-1.5 transition cursor-pointer';
        }
      }
    },

    undoExamScratchpad() {
      if (!ScratchpadState.currentStrokes || ScratchpadState.currentStrokes.length === 0) return;

      ScratchpadState.currentStrokes.pop();
      ScratchpadEngine.redrawAllStrokes();
      this.saveCurrentQuestionDrawing();
      this.updateUndoButton();
    },

    confirmClearScratchpad() {
      if (!ScratchpadState.currentStrokes || ScratchpadState.currentStrokes.length === 0) return;

      const qNum = ScratchpadState.activeQuestionIndex + 1;
      const ok = confirm(`Hapus semua coretan pada Soal No. ${qNum}?`);
      if (ok) {
        ScratchpadState.clearedStrokesCache = [...ScratchpadState.currentStrokes];
        ScratchpadState.currentStrokes = [];
        ScratchpadEngine.redrawAllStrokes();
        this.saveCurrentQuestionDrawing();
        this.updateUndoButton();
      }
    },

    updateUndoButton() {
      if (!DOM.btnUndo) cacheDOMElements();
      if (!DOM.btnUndo) return;

      const hasStrokes = ScratchpadState.currentStrokes && ScratchpadState.currentStrokes.length > 0;
      DOM.btnUndo.disabled = !hasStrokes;

      if (hasStrokes) {
        DOM.btnUndo.className = 'px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-semibold flex items-center gap-1 opacity-100 cursor-pointer transition';
      } else {
        DOM.btnUndo.className = 'px-2.5 py-1 rounded-lg bg-dark-850 text-slate-500 border border-slate-800 text-[11px] font-semibold flex items-center gap-1 opacity-50 cursor-not-allowed transition';
      }
    },

    updateHeaderTitle(idx) {
      if (!DOM.title) cacheDOMElements();
      if (DOM.title) {
        DOM.title.textContent = `Papan Coretan — Soal No. ${idx + 1}`;
      }
      if (DOM.pillTitle) {
        DOM.pillTitle.textContent = `Papan Coretan — Soal No. ${idx + 1}`;
      }
    },

    updateTriggerButtonState(isActive) {
      const btn = document.getElementById('btn-exam-scratchpad');
      if (!btn) return;

      if (isActive) {
        btn.classList.add('ring-2', 'ring-cyan-400', 'bg-cyan-500/25');
      } else {
        btn.classList.remove('ring-2', 'ring-cyan-400', 'bg-cyan-500/25');
      }

      this.updateQuestionIndicator(ScratchpadState.activeQuestionIndex);
    },

    updateQuestionIndicator(idx) {
      const indicator = document.getElementById('scratchpad-q-indicator');
      const hasDrawing = window.userDrawings[idx] && window.userDrawings[idx].hasContent;

      if (indicator) {
        if (hasDrawing) indicator.classList.remove('hidden');
        else indicator.classList.add('hidden');
      }
    },

    // ==========================================================================
    // 7. PERSISTENCE & QUESTION LIFECYCLE
    // ==========================================================================
    saveCurrentQuestionDrawing() {
      const idx = ScratchpadState.activeQuestionIndex;
      if (idx === null || idx === undefined || idx < 0) return;

      const hasContent = ScratchpadState.currentStrokes && ScratchpadState.currentStrokes.length > 0;
      let dataUrl = '';

      if (hasContent && ScratchpadEngine.canvas) {
        try {
          dataUrl = ScratchpadEngine.canvas.toDataURL('image/png');
        } catch (err) {}
      }

      // Store in memory & global map
      const record = {
        strokes: JSON.parse(JSON.stringify(ScratchpadState.currentStrokes || [])),
        dataUrl: dataUrl,
        hasContent: hasContent,
        strokeCount: ScratchpadState.currentStrokes ? ScratchpadState.currentStrokes.length : 0,
        cssWidth: ScratchpadEngine.cssWidth,
        cssHeight: ScratchpadEngine.cssHeight,
        updatedAt: Date.now(),
        toString: function () { return this.dataUrl; }
      };

      window.userDrawings[idx] = record;

      // Update question matrix dot badge
      this.updateMatrixBadges();
      this.updateQuestionIndicator(idx);

      // Brief flash autosave badge
      if (DOM.saveBadge && hasContent) {
        DOM.saveBadge.classList.remove('hidden');
        clearTimeout(this._saveBadgeTimer);
        this._saveBadgeTimer = setTimeout(() => {
          if (DOM.saveBadge) DOM.saveBadge.classList.add('hidden');
        }, 1500);
      }
    },

    loadQuestionDrawing(newQIdx) {
      ScratchpadState.activeQuestionIndex = newQIdx;
      this.updateHeaderTitle(newQIdx);

      const existing = window.userDrawings[newQIdx];
      if (existing && existing.strokes && existing.strokes.length > 0) {
        ScratchpadState.currentStrokes = JSON.parse(JSON.stringify(existing.strokes));
      } else {
        ScratchpadState.currentStrokes = [];
      }

      ScratchpadEngine.redrawAllStrokes();
      this.updateUndoButton();
      this.updateQuestionIndicator(newQIdx);

      if (DOM.pillSubtitle) {
        const count = ScratchpadState.currentStrokes.length;
        DOM.pillSubtitle.textContent = `${count} goresan tersimpan`;
      }
    },

    resetAllScratchpadState() {
      window.userDrawings = {};
      ScratchpadState.currentStrokes = [];
      ScratchpadState.activeQuestionIndex = 0;
      if (ScratchpadEngine.ctx) {
        ScratchpadEngine.redrawAllStrokes();
      }
      this.updateUndoButton();
      this.updateMatrixBadges();
      if (DOM.minimizedPill) DOM.minimizedPill.classList.add('hidden');
      if (DOM.modal) DOM.modal.classList.add('hidden');
    },

    updateMatrixBadges() {
      const container = document.getElementById('exam-matrix-grid');
      if (!container) return;

      const buttons = container.querySelectorAll('button');
      buttons.forEach((btn, idx) => {
        const has = window.userDrawings[idx] && window.userDrawings[idx].hasContent;
        if (has) {
          btn.classList.add('matrix-has-drawing');
          btn.setAttribute('title', `Soal ${idx + 1} (Ada Coretan)`);
        } else {
          btn.classList.remove('matrix-has-drawing');
        }
      });
    },

    // ==========================================================================
    // 8. LIFECYCLE HOOKS INTO CBT EXAM ENGINE
    // ==========================================================================
    installExamLifecycleHooks() {
      // 1. Hook renderCurrentExamQuestion
      if (typeof window.renderCurrentExamQuestion === 'function') {
        const originalRenderQuestion = window.renderCurrentExamQuestion;
        window.renderCurrentExamQuestion = function (idx, direction) {
          // If moving to a different question, auto-save previous question first
          if (ScratchpadState.activeQuestionIndex !== null && ScratchpadState.activeQuestionIndex !== idx) {
            ScratchpadController.saveCurrentQuestionDrawing();
          }

          const result = originalRenderQuestion.apply(this, arguments);

          // Restore drawing for new question index
          ScratchpadController.loadQuestionDrawing(idx);
          ScratchpadController.ensureTriggerButtonInExamView();
          ScratchpadController.updateMatrixBadges();

          return result;
        };
      }

      // 2. Hook startChapterExam
      if (typeof window.startChapterExam === 'function') {
        const originalStartExam = window.startChapterExam;
        window.startChapterExam = function () {
          ScratchpadController.resetAllScratchpadState();
          const result = originalStartExam.apply(this, arguments);
          ScratchpadController.loadQuestionDrawing(0);
          ScratchpadController.ensureTriggerButtonInExamView();
          return result;
        };
      }

      // 3. Hook confirmExitExam
      if (typeof window.confirmExitExam === 'function') {
        const originalConfirmExit = window.confirmExitExam;
        window.confirmExitExam = function () {
          ScratchpadController.closeExamScratchpad();
          return originalConfirmExit.apply(this, arguments);
        };
      }

      // 4. Hook executeFinalExamSubmit
      if (typeof window.executeFinalExamSubmit === 'function') {
        const originalFinalSubmit = window.executeFinalExamSubmit;
        window.executeFinalExamSubmit = function () {
          ScratchpadController.saveCurrentQuestionDrawing();
          ScratchpadController.closeExamScratchpad();
          return originalFinalSubmit.apply(this, arguments);
        };
      }

      // 5. Hook renderExamMatrix
      if (typeof window.renderExamMatrix === 'function') {
        const originalRenderMatrix = window.renderExamMatrix;
        window.renderExamMatrix = function () {
          const result = originalRenderMatrix.apply(this, arguments);
          ScratchpadController.updateMatrixBadges();
          return result;
        };
      }

      // 6. Hook switchView to close scratchpad if exiting exam view
      if (typeof window.switchView === 'function') {
        const originalSwitchView = window.switchView;
        window.switchView = function (viewName) {
          if (viewName !== 'exam') {
            ScratchpadController.closeExamScratchpad();
          }
          return originalSwitchView.apply(this, arguments);
        };
      }
    },

    ensureTriggerButtonInExamView() {
      let btn = document.getElementById('btn-exam-scratchpad');
      if (btn) return;

      // Find question header buttons container
      const doubtBtn = document.getElementById('exam-doubt-btn');
      if (!doubtBtn || !doubtBtn.parentElement) return;

      btn = document.createElement('button');
      btn.id = 'btn-exam-scratchpad';
      btn.type = 'button';
      btn.title = 'Buka Papan Coretan Digital';
      btn.className = 'px-2.5 py-1 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 text-xs font-semibold flex items-center gap-1.5 transition shadow-xs hover:shadow-cyan-500/20 shrink-0 cursor-pointer';
      btn.onclick = () => window.toggleExamScratchpad();
      btn.innerHTML = `
        <span class="text-xs">✏️</span>
        <span class="hidden sm:inline">Papan Coretan</span>
        <span class="sm:hidden">Coretan</span>
        <span id="scratchpad-q-indicator" class="hidden w-2 h-2 rounded-full bg-cyan-400 scratchpad-pulse" title="Ada coretan tersimpan di soal ini"></span>
      `;

      doubtBtn.parentElement.insertBefore(btn, doubtBtn);
      this.updateQuestionIndicator(ScratchpadState.activeQuestionIndex);
    },

    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        // Only if scratchpad is open
        if (!ScratchpadState.isOpen || ScratchpadState.isMinimized) return;

        // Ignore if user is typing in input or textarea
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag === 'input' || activeTag === 'textarea') return;

        // Ctrl+Z / Cmd+Z => Undo
        if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
          e.preventDefault();
          this.undoExamScratchpad();
          return;
        }

        // Escape => Close Scratchpad
        if (e.key === 'Escape') {
          e.preventDefault();
          this.closeExamScratchpad();
          return;
        }

        // 'e' / 'E' => Toggle Eraser
        if (e.key === 'e' || e.key === 'E') {
          e.preventDefault();
          this.toggleScratchpadEraser();
          return;
        }

        // 'p' / 'P' => Activate Pen
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          this.activateScratchpadPen();
          return;
        }

        // 'o' / 'O' => Toggle Ghost Opacity
        if (e.key === 'o' || e.key === 'O') {
          e.preventDefault();
          this.toggleScratchpadOpacity();
          return;
        }

        // 'm' / 'M' => Minimize
        if (e.key === 'm' || e.key === 'M') {
          e.preventDefault();
          this.toggleScratchpadMinimize();
          return;
        }
      });
    }
  };

  // ============================================================================
  // 9. PUBLIC API REGISTRATION
  // ============================================================================
  window.openExamScratchpad = () => ScratchpadController.openExamScratchpad();
  window.closeExamScratchpad = () => ScratchpadController.closeExamScratchpad();
  window.toggleExamScratchpad = () => ScratchpadController.toggleExamScratchpad();
  window.toggleScratchpadMinimize = () => ScratchpadController.toggleScratchpadMinimize();
  window.restoreScratchpadFromMinimized = () => ScratchpadController.restoreScratchpadFromMinimized();
  window.toggleScratchpadMaximize = () => ScratchpadController.toggleScratchpadMaximize();
  window.toggleScratchpadOpacity = () => ScratchpadController.toggleScratchpadOpacity();
  window.setScratchpadColor = (color) => ScratchpadController.setScratchpadColor(color);
  window.setScratchpadWidth = (width) => ScratchpadController.setScratchpadWidth(width);
  window.activateScratchpadPen = () => ScratchpadController.activateScratchpadPen();
  window.toggleScratchpadEraser = () => ScratchpadController.toggleScratchpadEraser();
  window.undoExamScratchpad = () => ScratchpadController.undoExamScratchpad();
  window.confirmClearScratchpad = () => ScratchpadController.confirmClearScratchpad();

  window.TheArichExamScratchpad = {
    state: ScratchpadState,
    engine: ScratchpadEngine,
    controller: ScratchpadController,
    version: '1.0.0'
  };

  // Auto-boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScratchpadController.init());
  } else {
    ScratchpadController.init();
  }

})(window, document);
