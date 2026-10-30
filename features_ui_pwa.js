/**
 * ============================================================================
 * The Arich Study — UI Theme, Print Engine & PWA Architecture
 * File: the_arich_study/features_ui_pwa.js
 * ============================================================================
 * Features:
 * 1. Ergonomic Theme Switcher (Clean Paper Light vs Ambient Mesh Dark)
 *    - Persisted in localStorage ('the_arich_theme')
 *    - Web Audio melodic chime SFX
 *    - High-contrast KaTeX ink typography & soft elevated glassmorphic cards
 * 2. Professional Print Engine (@media print)
 *    - Direct A4 export with page-break avoidance
 *    - Interactive Certificate Modal (#certificate-modal)
 *    - Comprehensive Academic Report Card Modal (#report-card-modal)
 *    - Materi & Cheatsheet print triggers
 * 3. Progressive Web App (PWA) & Offline Shell
 *    - Service Worker registration (sw.js)
 *    - 'beforeinstallprompt' installation trigger & XP bonus reward
 *    - Online / Offline network status notifications
 * ============================================================================
 */

(function () {
  'use strict';

  // Constants
  const THEME_KEY = 'the_arich_theme';
  const PWA_INSTALLED_KEY = 'the_arich_pwa_installed';

  // State
  let deferredPrompt = null;
  let audioCtxInstance = null;

  // ==========================================================================
  // 1. ERGONOMIC THEME ENGINE (LIGHT PAPER vs DARK MESH)
  // ==========================================================================

  /**
   * Get the current active theme ('light' or 'dark').
   */
  function getCurrentTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}

    // Fallback: Default to dark mesh as the signature design
    return 'dark';
  }

  /**
   * Synthesize an ergonomic chime sound for theme toggling using Web Audio API.
   */
  function playThemeChime(targetTheme) {
    try {
      // Respect user's SFX toggle if present in window.isAudio
      if (window.isAudio === false) return;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxInstance) {
        audioCtxInstance = new AudioContext();
      }
      if (audioCtxInstance.state === 'suspended') {
        audioCtxInstance.resume();
      }

      const now = audioCtxInstance.currentTime;
      const osc = audioCtxInstance.createOscillator();
      const gain = audioCtxInstance.createGain();

      osc.type = 'sine';

      if (targetTheme === 'light') {
        // Ascending sunrise chime: E5 (659.25Hz) -> A5 (880Hz)
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      } else {
        // Descending sunset chime: A5 (880Hz) -> D5 (587.33Hz)
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.14);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      }

      osc.connect(gain);
      gain.connect(audioCtxInstance.destination);

      osc.start(now);
      osc.stop(now + 0.34);
    } catch (err) {
      // Audio autoplay restrictions or unsupported
    }
  }

  /**
   * Apply the theme to the document and persist in localStorage.
   */
  function applyTheme(theme, playSound = false) {
    const isLight = theme === 'light';
    const html = document.documentElement;

    if (isLight) {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
    }

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}

    // Update Meta theme-color for mobile browser frames
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = isLight ? '#f8fafc' : '#070a12';

    // Update all theme toggle buttons on page
    updateThemeToggleButtons(theme);

    // Audio chime
    if (playSound) {
      playThemeChime(theme);
    }

    // Gentle flash ripple animation
    document.body.classList.remove('theme-toggle-flash');
    void document.body.offsetWidth; // trigger reflow
    document.body.classList.add('theme-toggle-flash');

    // Dispatch event for any other components
    window.dispatchEvent(new CustomEvent('the_arich_theme_changed', { detail: { theme } }));
  }

  /**
   * Toggle between Dark Mesh and Light Paper.
   */
  function toggleTheme() {
    const current = getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);

    // Feedback Toast
    const label = next === 'light' ? 'Mode Ruang Belajar Terang (Paper)' : 'Mode Gelap Ambient Mesh';
    if (typeof window.showXPToast === 'function') {
      window.showXPToast(0, `Tema Diganti: ${label}`);
    }
  }

  /**
   * Synchronize all theme toggle button icons and tooltips.
   */
  function updateThemeToggleButtons(theme) {
    const isLight = theme === 'light';
    const buttons = document.querySelectorAll('.theme-toggle-btn');

    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', isLight ? 'Beralih ke Mode Gelap' : 'Beralih ke Mode Terang');
      btn.title = isLight ? 'Beralih ke Mode Gelap (Mesh Dark)' : 'Beralih ke Mode Terang (Clean Paper)';

      const labelSpan = btn.querySelector('.theme-btn-label');
      if (labelSpan) {
        labelSpan.textContent = isLight ? 'Terang' : 'Gelap';
      }

      const iconContainer = btn.querySelector('.theme-icon-container');
      if (iconContainer) {
        iconContainer.innerHTML = isLight
          ? `<i data-lucide="moon" class="w-3.5 h-3.5 text-indigo-500"></i>`
          : `<i data-lucide="sun" class="w-3.5 h-3.5 text-amber-400"></i>`;
      }
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  /**
   * Inject Theme Switcher Button into the Header Topbar and Mobile Drawer.
   */
  function setupThemeToggleButtons() {
    // 1. Header Topbar Mount
    const topbarRight = document.querySelector('header .flex.items-center.space-x-2');
    if (topbarRight && !document.getElementById('header-theme-toggle')) {
      const themeBtn = document.createElement('button');
      themeBtn.id = 'header-theme-toggle';
      themeBtn.className = 'theme-toggle-btn p-1.5 px-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition shadow-sm';
      themeBtn.onclick = toggleTheme;
      themeBtn.innerHTML = `
        <span class="theme-icon-container flex items-center justify-center">
          <i data-lucide="sun" class="w-3.5 h-3.5 text-amber-400"></i>
        </span>
        <span class="theme-btn-label hidden md:inline text-[11px] font-semibold">Mode</span>
      `;

      // Insert before SFX button if available
      const sfxBtn = document.getElementById('sfx-btn');
      if (sfxBtn) {
        topbarRight.insertBefore(themeBtn, sfxBtn);
      } else {
        topbarRight.appendChild(themeBtn);
      }
    }

    // 2. Sidebar Footer Mount (Desktop drawer)
    const sidebarFooter = document.querySelector('#sidebar-drawer .p-3.border-t');
    if (sidebarFooter && !document.getElementById('sidebar-theme-toggle')) {
      const sbThemeDiv = document.createElement('div');
      sbThemeDiv.id = 'sidebar-theme-toggle';
      sbThemeDiv.className = 'mb-2 flex items-center justify-between px-2 py-1.5 rounded-lg bg-dark-850 border border-slate-800 text-xs';
      sbThemeDiv.innerHTML = `
        <span class="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
          <i data-lucide="palette" class="w-3.5 h-3.5 text-indigo-400"></i>
          <span>Tema Tampilan</span>
        </span>
        <button onclick="window.TheArichUI.toggleTheme()" class="theme-toggle-btn px-2 py-0.5 rounded-md bg-dark-900 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center gap-1 transition">
          <span class="theme-icon-container">
            <i data-lucide="sun" class="w-3 h-3 text-amber-400"></i>
          </span>
          <span class="theme-btn-label">Ubah</span>
        </button>
      `;
      sidebarFooter.parentNode.insertBefore(sbThemeDiv, sidebarFooter);
    }

    // Refresh icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }


  // ==========================================================================
  // 2. PROGRESSIVE WEB APP (PWA) & SERVICE WORKER INTEGRATION
  // ==========================================================================

  function initPWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('./sw.js', { scope: './' })
          .then((registration) => {
            console.log('[The Arich PWA] Service Worker registered with scope:', registration.scope);

            // Handle updates
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[The Arich PWA] New update ready. Refresh to view changes.');
                  }
                };
              }
            };
          })
          .catch((err) => {
            console.warn('[The Arich PWA] Service Worker registration failed:', err);
          });
      });
    }

    // Handle 'beforeinstallprompt'
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      showPWAInstallTrigger();
    });

    // Handle 'appinstalled'
    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      hidePWAInstallTrigger();

      try {
        localStorage.setItem(PWA_INSTALLED_KEY, 'true');
      } catch (e) {}

      // Reward student with 50 XP
      if (typeof window.addStudentXP === 'function') {
        window.addStudentXP(50, 'Bonus: Aplikasi Terpasang (PWA Offline)');
      }

      if (window.confetti) {
        window.confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    });

    // Ensure install button is visible
    showPWAInstallTrigger();

    // Connectivity status listeners
    window.addEventListener('online', () => {
      if (typeof window.showXPToast === 'function') {
        window.showXPToast(0, 'Koneksi Pulih: Mode Online Aktif');
      }
    });

    window.addEventListener('offline', () => {
      if (typeof window.showXPToast === 'function') {
        window.showXPToast(0, 'Mode Offline Aktif (Semua Materi Tersimpan)');
      }
    });
  }

  function showPWAInstallTrigger() {
    // If already running in standalone mode (installed), don't show install button
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      return;
    }

    const topbarRight = document.querySelector('header .flex.items-center.space-x-2');
    if (!topbarRight || document.getElementById('btn-pwa-install')) return;

    const btn = document.createElement('button');
    btn.id = 'btn-pwa-install';
    btn.className = 'pwa-install-btn px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition cursor-pointer';
    btn.title = 'Pasang The Arich Study sebagai Aplikasi Layar Utama (PWA)';
    btn.onclick = promptPWAInstall;
    btn.innerHTML = `
      <i data-lucide="download" class="w-3.5 h-3.5"></i>
      <span class="text-[11px]">Pasang App</span>
    `;

    topbarRight.insertBefore(btn, topbarRight.firstChild);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function hidePWAInstallTrigger() {
    const btn = document.getElementById('btn-pwa-install');
    if (btn) btn.remove();
  }

  function promptPWAInstall() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('[The Arich PWA] User accepted the install prompt');
          hidePWAInstallTrigger();
        } else {
          console.log('[The Arich PWA] User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
      return;
    }

    // Fallback: If browser does not support auto-prompt (e.g. Safari iOS, Firefox, or in-app browser)
    openPWAInstallGuideModal();
  }

  function openPWAInstallGuideModal() {
    let modal = document.getElementById('modal-pwa-install-guide');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-pwa-install-guide';
      modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto';
      document.body.appendChild(modal);
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    modal.innerHTML = `
      <div class="relative w-full max-w-lg clean-card rounded-3xl p-6 sm:p-7 border border-indigo-500/40 shadow-2xl bg-dark-900 text-slate-100 space-y-5 animate-in fade-in zoom-in duration-200">
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="smartphone" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="text-sm sm:text-base font-extrabold text-white">Pasang Aplikasi The Arich Study</h3>
              <p class="text-[11px] text-slate-400">Gunakan layaknya aplikasi native tanpa URL bar, cepat & offline-ready</p>
            </div>
          </div>
          <button onclick="document.getElementById('modal-pwa-install-guide').classList.add('hidden')" class="p-1.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-400 hover:text-white transition cursor-pointer">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Instructions depending on Device -->
        <div class="space-y-4 text-xs sm:text-sm">
          ${isIOS ? `
            <div class="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
              <div class="flex items-center gap-2 font-bold text-indigo-300">
                <i data-lucide="apple" class="w-4 h-4"></i>
                <span>Panduan untuk iPhone & iPad (Safari):</span>
              </div>
              <ol class="list-decimal list-inside space-y-2 text-slate-300 text-xs leading-relaxed">
                <li>Ketuk tombol <strong class="text-white">Share</strong> (ikon kotak dengan panah ke atas <i data-lucide="share" class="w-3.5 h-3.5 inline text-indigo-400"></i>) di bilah bawah Safari.</li>
                <li>Gulir ke bawah dan ketuk <strong class="text-white">"Tambahkan ke Layar Utama" (Add to Home Screen)</strong>.</li>
                <li>Ketuk tombol <strong class="text-indigo-400">"Tambah" (Add)</strong> di pojok kanan atas.</li>
              </ol>
            </div>
          ` : isAndroid ? `
            <div class="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
              <div class="flex items-center gap-2 font-bold text-indigo-300">
                <i data-lucide="smartphone" class="w-4 h-4"></i>
                <span>Panduan untuk Android (Chrome):</span>
              </div>
              <ol class="list-decimal list-inside space-y-2 text-slate-300 text-xs leading-relaxed">
                <li>Ketuk menu <strong class="text-white">titik tiga (⋮)</strong> di pojok kanan atas browser Chrome.</li>
                <li>Pilih opsi <strong class="text-white">"Instal Aplikasi"</strong> atau <strong class="text-white">"Tambahkan ke Layar Utama"</strong>.</li>
                <li>Konfirmasi pemasangan, lalu aplikasi akan otomatis muncul di menu aplikasi HP Anda.</li>
              </ol>
            </div>
          ` : `
            <div class="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
              <div class="flex items-center gap-2 font-bold text-indigo-300">
                <i data-lucide="monitor" class="w-4 h-4"></i>
                <span>Panduan untuk Laptop / PC (Chrome / Edge):</span>
              </div>
              <ol class="list-decimal list-inside space-y-2 text-slate-300 text-xs leading-relaxed">
                <li>Lihat ke <strong class="text-white">Address Bar</strong> (bilah URL) di bagian kanan atas browser.</li>
                <li>Klik ikon <strong class="text-indigo-400">"Instal The Arich Study"</strong> (ikon layar komputer dengan panah bawah).</li>
                <li>Atau klik menu titik tiga (⋮) &gt; <strong class="text-white">"Simpan dan Bagikan"</strong> &gt; <strong class="text-white">"Instal Aplikasi"</strong>.</li>
              </ol>
            </div>
          `}

          <!-- Benefits Box -->
          <div class="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
            <div class="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800">
              <i data-lucide="wifi-off" class="w-4 h-4 mx-auto mb-1 text-emerald-400"></i>
              <span class="font-bold text-slate-200 block">Offline-Ready</span>
              <span class="text-[10px] text-slate-400">Buka tanpa kuota</span>
            </div>
            <div class="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800">
              <i data-lucide="zap" class="w-4 h-4 mx-auto mb-1 text-amber-400"></i>
              <span class="font-bold text-slate-200 block">Super Cepat</span>
              <span class="text-[10px] text-slate-400">Instan tanpa reload</span>
            </div>
            <div class="p-2.5 rounded-xl bg-dark-950/80 border border-slate-800">
              <i data-lucide="award" class="w-4 h-4 mx-auto mb-1 text-indigo-400"></i>
              <span class="font-bold text-slate-200 block">+50 XP Siswa</span>
              <span class="text-[10px] text-slate-400">Bonus pasang app</span>
            </div>
          </div>
        </div>

        <!-- Footer Action -->
        <div class="pt-2">
          <button onclick="document.getElementById('modal-pwa-install-guide').classList.add('hidden')" class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-lg shadow-indigo-600/30">
            Saya Paham &amp; Siap Pasang
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }


  // ==========================================================================
  // 3. CERTIFICATE MODAL & PRINT GENERATOR (#certificate-modal)
  // ==========================================================================

  function ensureCertificateModalDOM() {
    if (document.getElementById('certificate-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'certificate-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border-4 border-indigo-600/20">
        
        <!-- Action Toolbar (Hidden in print) -->
        <div class="no-print bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
              <i data-lucide="award" class="w-3.5 h-3.5"></i>
            </span>
            <span class="text-xs font-bold tracking-wide">Sertifikat Kelulusan & Prestasi Siswa</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.TheArichUI.printCertificate()" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition">
              <i data-lucide="printer" class="w-3.5 h-3.5"></i>
              <span>Cetak / PDF (A4)</span>
            </button>
            <button onclick="window.TheArichUI.closeCertificateModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Printable Certificate Canvas (#certificate-print-frame) -->
        <div id="certificate-print-frame" class="p-6 sm:p-10 bg-[#fcfdfa] relative text-center">
          
          <!-- Ornate Border Frame -->
          <div class="border-4 border-indigo-900/80 p-6 sm:p-8 rounded-xl relative">
            <div class="border border-indigo-400/40 p-4 rounded-lg relative">
              
              <!-- Subtle Watermark -->
              <div class="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                <svg width="280" height="280" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256,40 L160,380 L352,380 Z M256,120 L200,320 L312,320 Z"/>
                </svg>
              </div>

              <!-- Certificate Header -->
              <div class="mb-4">
                <div class="text-[10px] tracking-[0.25em] font-extrabold uppercase text-indigo-700">
                  THE ARICH STUDY &bull; PUSAT PEMBELAJARAN MATEMATIKA & FISIKA
                </div>
                <h1 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1 font-serif uppercase">
                  SERTIFIKAT KELULUSAN
                </h1>
                <div class="h-0.5 w-24 bg-gradient-to-r from-amber-400 to-indigo-600 mx-auto mt-2"></div>
              </div>

              <!-- Certificate Body Text -->
              <p class="text-xs text-slate-600 italic">Diberikan secara resmi kepada:</p>
              
              <div class="my-4">
                <h2 id="cert-student-name" class="text-xl sm:text-2xl font-black text-indigo-950 font-serif tracking-normal border-b-2 border-slate-300 pb-1.5 inline-block min-w-[280px]">
                  Fahreza Kautsar
                </h2>
                <p id="cert-student-grade" class="text-xs font-bold text-slate-700 mt-1">
                  Siswa Kelas 11 SMA &bull; SMAN 1
                </p>
              </div>

              <p class="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
                Telah berhasil menyelesaikan pembelajaran modul komprehensif dan evaluasi uji kompetensi pada materi:
              </p>

              <!-- Chapter Title Badge -->
              <div class="my-3">
                <span id="cert-chapter-title" class="inline-block px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 font-extrabold text-sm sm:text-base">
                  Program Linear & Sistem Pertidaksamaan
                </span>
              </div>

              <!-- Score & Predicate -->
              <div class="flex items-center justify-center gap-6 my-4 text-xs">
                <div>
                  <span class="text-slate-500 block text-[10px] uppercase font-bold">Skor Evaluasi:</span>
                  <span id="cert-score-value" class="text-xl font-black text-emerald-700 font-mono">100 / 100</span>
                </div>
                <div class="h-8 w-px bg-slate-300"></div>
                <div>
                  <span class="text-slate-500 block text-[10px] uppercase font-bold">Predikat:</span>
                  <span id="cert-predicate-value" class="text-base font-extrabold text-indigo-800">Sangat Memuaskan (A)</span>
                </div>
              </div>

              <!-- Certificate Footer Signatures -->
              <div class="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-slate-200 text-xs">
                <div>
                  <div id="cert-date" class="text-slate-600 text-[11px]">Jakarta, 30 Oktober 2026</div>
                  <div class="h-12 flex items-center justify-center">
                    <span class="text-indigo-600 font-serif italic text-sm font-bold tracking-wider">The Arich Academy</span>
                  </div>
                  <div class="font-bold text-slate-800 text-[11px] border-t border-slate-400 pt-1 inline-block min-w-[140px]">
                    Tim Kurikulum The Arich
                  </div>
                </div>

                <div>
                  <div class="text-slate-600 text-[11px]">Verifikasi Sistem Digital</div>
                  <div class="h-12 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-600 font-mono text-[9px] font-black uppercase">
                      VERIFIED
                    </div>
                  </div>
                  <div class="font-mono text-[10px] text-slate-500 border-t border-slate-400 pt-1 inline-block min-w-[140px]" id="cert-verify-id">
                    ID: ARICH-2026-9482
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function openCertificateModal(record) {
    ensureCertificateModalDOM();

    const student = window.currentStudent || {
      name: 'Siswa The Arich Study',
      grade: '11',
      school: 'Sekolah'
    };

    const chapterTitle = (record && record.chapter) || 'Evaluasi Kompetensi Mandiri';
    const score = (record && record.score !== undefined) ? record.score : 100;
    const gradeName = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[student.grade])
      ? window.ALL_GRADES_DATA[student.grade].gradeName
      : `Kelas ${student.grade}`;

    let predicate = 'Sangat Memuaskan (A)';
    if (score < 70) predicate = 'Cukup (Perlu Pemantapan)';
    else if (score < 85) predicate = 'Baik (B)';

    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const verifyCode = 'ARICH-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Populate data
    document.getElementById('cert-student-name').textContent = student.name;
    document.getElementById('cert-student-grade').textContent = `${gradeName} • ${student.school || 'Belajar Mandiri'}`;
    document.getElementById('cert-chapter-title').textContent = chapterTitle;
    document.getElementById('cert-score-value').textContent = `${score} / 100`;
    document.getElementById('cert-predicate-value').textContent = predicate;
    document.getElementById('cert-date').textContent = `Indonesia, ${todayStr}`;
    document.getElementById('cert-verify-id').textContent = `ID: ${verifyCode}`;

    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('hidden');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('printing-certificate');
  }

  function printCertificate() {
    document.body.classList.add('printing-certificate');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-certificate');
    }, 1000);
  }


  // ==========================================================================
  // 4. ACADEMIC REPORT CARD MODAL (#report-card-modal)
  // ==========================================================================

  function ensureReportCardModalDOM() {
    if (document.getElementById('report-card-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'report-card-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    modal.innerHTML = `
      <div class="relative w-full max-w-3xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-200">
        
        <!-- Action Toolbar (Hidden in print) -->
        <div class="no-print bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-xs">
              <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
            </span>
            <span class="text-xs font-bold tracking-wide">Rapor Belajar Siswa (Academic Report Card)</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.TheArichUI.printReportCard()" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition">
              <i data-lucide="printer" class="w-3.5 h-3.5"></i>
              <span>Cetak Rapor (A4 PDF)</span>
            </button>
            <button onclick="window.TheArichUI.closeReportCardModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Printable Report Card Frame (#report-card-print-frame) -->
        <div id="report-card-print-frame" class="p-6 sm:p-8 bg-white text-slate-900">
          
          <!-- Report Header -->
          <div class="border-b-2 border-slate-900 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-indigo-700 text-lg sm:text-xl tracking-tight">The Arich <span class="text-slate-900">Study</span></span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold uppercase">Rapor Akademik</span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5">Platform Pembelajaran Terstandar Kurikulum Merdeka Matematika & Fisika</p>
            </div>
            <div class="text-left sm:text-right text-xs text-slate-500 font-mono">
              <div id="rc-doc-num">NO: ARICH-RAPOR-2026/01</div>
              <div id="rc-print-date">Dicetak: 30 Oktober 2026</div>
            </div>
          </div>

          <!-- Student Profile Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-5">
            <div>
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Nama Lengkap</span>
              <strong id="rc-student-name" class="text-slate-900 text-sm">-</strong>
            </div>
            <div>
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Jenjang Belajar</span>
              <strong id="rc-student-grade" class="text-slate-900 text-sm">-</strong>
            </div>
            <div>
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Asal Sekolah</span>
              <strong id="rc-student-school" class="text-slate-900 text-sm">-</strong>
            </div>
            <div>
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Total XP / Level</span>
              <strong id="rc-student-xp" class="text-amber-700 text-sm font-mono">-</strong>
            </div>
          </div>

          <!-- Metrics KPI Row -->
          <div class="grid grid-cols-3 gap-3 text-center mb-5">
            <div class="p-3 rounded-xl border border-slate-200 bg-white">
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Rata-Rata Nilai</span>
              <div id="rc-avg-score" class="text-2xl font-black text-indigo-700 font-mono">0</div>
            </div>
            <div class="p-3 rounded-xl border border-slate-200 bg-white">
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Latihan Diselesaikan</span>
              <div id="rc-total-exams" class="text-2xl font-black text-slate-800 font-mono">0</div>
            </div>
            <div class="p-3 rounded-xl border border-slate-200 bg-white">
              <span class="text-slate-500 text-[10px] uppercase font-bold block">Status Kelulusan</span>
              <div id="rc-status-summary" class="text-base sm:text-lg font-black text-emerald-700 mt-1">Sangat Baik</div>
            </div>
          </div>

          <!-- Table of Submissions -->
          <div class="mb-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Riwayat Uji Kompetensi & Latihan Soal:</h4>
            <table class="w-full text-left text-xs border border-slate-200">
              <thead>
                <tr class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-[11px]">
                  <th class="p-2 border-r border-slate-200 w-8 text-center">No</th>
                  <th class="p-2 border-r border-slate-200">Tanggal & Waktu</th>
                  <th class="p-2 border-r border-slate-200">Bab / Pokok Bahasan</th>
                  <th class="p-2 border-r border-slate-200 text-center">Benar</th>
                  <th class="p-2 border-r border-slate-200 text-center">Skor</th>
                  <th class="p-2 text-center">Predikat</th>
                </tr>
              </thead>
              <tbody id="rc-table-body" class="divide-y divide-slate-200">
                <!-- Injected via JS -->
              </tbody>
            </table>
          </div>

          <!-- Notes & Evaluation -->
          <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs mb-6 space-y-1">
            <div class="font-bold text-slate-800">Catatan & Rekomendasi Guru:</div>
            <p id="rc-teacher-notes" class="text-slate-600 leading-relaxed">
              Siswa menunjukkan komitmen belajar yang luar biasa dalam mempelajari konsep dan menyelesaikan latihan soal mandiri. Tingkatkan pemahaman pada subtopik pemodelan dan variasi soal HOTS untuk persiapan UTBK SNBT.
            </p>
          </div>

          <!-- Signatures Section -->
          <div class="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200 text-xs text-center">
            <div>
              <div class="text-slate-500 text-[11px]">Mengetahui Orang Tua / Siswa:</div>
              <div class="h-16 flex items-end justify-center">
                <span class="border-b border-slate-400 pb-1 px-8 font-semibold text-slate-800" id="rc-sign-student">-</span>
              </div>
            </div>
            <div>
              <div class="text-slate-500 text-[11px]">Guru Pembimbing The Arich Study:</div>
              <div class="h-16 flex items-end justify-center">
                <span class="border-b border-slate-400 pb-1 px-8 font-semibold text-slate-800">Tim Kurikulum Akademik</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function openReportCardModal() {
    ensureReportCardModalDOM();

    const student = window.currentStudent || {
      name: 'Siswa The Arich Study',
      grade: '11',
      school: 'Belajar Mandiri'
    };

    const gradeName = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[student.grade])
      ? window.ALL_GRADES_DATA[student.grade].gradeName
      : `Kelas ${student.grade}`;

    // Read student's past exam submissions
    let db = [];
    try {
      db = JSON.parse(localStorage.getItem('the_arich_submissions_db') || '[]');
    } catch (e) {}

    // Filter submissions matching this student
    const studentRecords = db.filter((r) => r.studentName === student.name);

    // XP
    const xp = (typeof window.getStudentXP === 'function') ? window.getStudentXP() : 0;
    const lvl = (typeof window.getStudentLevel === 'function') ? window.getStudentLevel(xp) : { title: 'Pembelajar' };

    // Stats
    const totalExams = studentRecords.length;
    let avgScore = 0;
    if (totalExams > 0) {
      const sum = studentRecords.reduce((acc, curr) => acc + (parseInt(curr.score, 10) || 0), 0);
      avgScore = Math.round(sum / totalExams);
    }

    let statusSummary = 'Sangat Baik (A)';
    if (totalExams === 0) statusSummary = 'Belum Ada Latihan';
    else if (avgScore < 70) statusSummary = 'Perlu Pendampingan (C)';
    else if (avgScore < 85) statusSummary = 'Baik (B)';

    // Date
    const todayStr = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Populate Fields
    document.getElementById('rc-student-name').textContent = student.name;
    document.getElementById('rc-student-grade').textContent = gradeName;
    document.getElementById('rc-student-school').textContent = student.school || 'SMAN 1';
    document.getElementById('rc-student-xp').textContent = `${xp} XP (${lvl.title})`;
    document.getElementById('rc-doc-num').textContent = `NO: ARICH-RAPOR-${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById('rc-print-date').textContent = `Dicetak: ${todayStr}`;
    document.getElementById('rc-avg-score').textContent = avgScore.toString();
    document.getElementById('rc-total-exams').textContent = totalExams.toString();
    document.getElementById('rc-status-summary').textContent = statusSummary;
    document.getElementById('rc-sign-student').textContent = student.name;

    // Render Table Rows
    const tbody = document.getElementById('rc-table-body');
    if (studentRecords.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="p-4 text-center text-slate-500 italic">
            Belum ada riwayat latihan soal yang tercatat. Selesaikan minimal 1 latihan bab untuk menampilkan daftar nilai.
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = studentRecords.map((rec, idx) => {
        const sc = parseInt(rec.score, 10) || 0;
        let pred = 'Sangat Baik (A)';
        if (sc < 70) pred = 'Cukup (C)';
        else if (sc < 85) pred = 'Baik (B)';

        return `
          <tr class="hover:bg-slate-50">
            <td class="p-2 border-r border-slate-200 text-center font-mono">${idx + 1}</td>
            <td class="p-2 border-r border-slate-200 text-slate-600 text-[11px]">${rec.timestamp || '-'}</td>
            <td class="p-2 border-r border-slate-200 font-semibold text-slate-800">${rec.chapter || '-'}</td>
            <td class="p-2 border-r border-slate-200 text-center font-mono">${rec.correct || '0'} / 15</td>
            <td class="p-2 border-r border-slate-200 text-center font-black font-mono ${sc >= 80 ? 'text-emerald-700' : sc >= 70 ? 'text-indigo-700' : 'text-rose-600'}">${sc}</td>
            <td class="p-2 text-center font-medium">${pred}</td>
          </tr>
        `;
      }).join('');
    }

    const modal = document.getElementById('report-card-modal');
    modal.classList.remove('hidden');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function closeReportCardModal() {
    const modal = document.getElementById('report-card-modal');
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('printing-report-card');
  }

  function printReportCard() {
    document.body.classList.add('printing-report-card');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-report-card');
    }, 1000);
  }


  // ==========================================================================
  // 5. PRINT HELPERS (MATERI & CHEATSHEET)
  // ==========================================================================

  function printCurrentMateri() {
    // Add print header banner dynamically if not present
    const detailView = document.getElementById('view-materi-detail');
    if (!detailView) return;

    let printHeader = detailView.querySelector('.print-document-header');
    if (!printHeader) {
      printHeader = document.createElement('div');
      printHeader.className = 'print-document-header hidden';
      printHeader.innerHTML = `
        <div>
          <div class="brand-title">The Arich Study</div>
          <div class="brand-subtitle">Modul Pembelajaran Mandiri &bull; Matematika & Fisika Terstandar</div>
        </div>
        <div class="doc-meta">
          <div>Dokumen Cetak Digital (A4)</div>
          <div>${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
        </div>
      `;
      detailView.insertBefore(printHeader, detailView.firstChild);
    }

    window.print();
  }

  function printCheatsheet() {
    window.print();
  }


  // ==========================================================================
  // 6. UI ENHANCEMENT INJECTIONS (BUTTONS & ACTIONS)
  // ==========================================================================

  function injectMateriPrintButton() {
    // Inject "Cetak Modul (PDF)" into reader toolbar
    const readerToolbar = document.querySelector('#view-materi-detail .flex.items-center.gap-2');
    if (readerToolbar && !document.getElementById('btn-print-materi')) {
      const btn = document.createElement('button');
      btn.id = 'btn-print-materi';
      btn.className = 'p-1.5 px-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition';
      btn.title = 'Cetak Modul Pembelajaran Ini / Simpan PDF (A4)';
      btn.onclick = printCurrentMateri;
      btn.innerHTML = `
        <i data-lucide="printer" class="w-3.5 h-3.5 text-indigo-400"></i>
        <span class="hidden md:inline">Cetak PDF</span>
      `;
      readerToolbar.appendChild(btn);

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  }

  function injectHistoryReportButton() {
    // Inject "Cetak Rapor Siswa (PDF)" into #view-history
    const historyHeader = document.querySelector('#view-history > div:first-child');
    if (historyHeader && !document.getElementById('btn-history-report-card')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2';

      const btn = document.createElement('button');
      btn.id = 'btn-history-report-card';
      btn.className = 'px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-indigo-600/25 transition shrink-0';
      btn.onclick = openReportCardModal;
      btn.innerHTML = `
        <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
        <span>Cetak Rapor Hasil Belajar (PDF)</span>
      `;

      // Wrap existing history header content
      const textDiv = document.createElement('div');
      textDiv.appendChild(historyHeader.querySelector('h2'));
      textDiv.appendChild(historyHeader.querySelector('p'));

      wrapper.appendChild(textDiv);
      wrapper.appendChild(btn);
      historyHeader.appendChild(wrapper);

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  }

  function injectExamResultCertificateButton() {
    // Inject "Unduh Sertifikat" into #view-exam-result action buttons
    const resultActions = document.querySelector('#view-exam-result .space-y-2');
    if (resultActions && !document.getElementById('btn-res-cert')) {
      const btn = document.createElement('button');
      btn.id = 'btn-res-cert';
      btn.className = 'w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/20 transition';
      btn.onclick = () => {
        const studentName = document.getElementById('res-student-name')?.textContent || 'Siswa';
        const chapterTitle = document.getElementById('res-chapter-title')?.textContent || 'Latihan Bab';
        const score = parseInt(document.getElementById('res-score-number')?.textContent || '100', 10);
        openCertificateModal({ studentName, chapter: chapterTitle, score });
      };
      btn.innerHTML = `
        <i data-lucide="award" class="w-4 h-4"></i>
        <span>Unduh / Cetak Sertifikat Kelulusan Bab</span>
      `;

      // Insert at the top of actions
      resultActions.insertBefore(btn, resultActions.firstChild);

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
  }


  // ==========================================================================
  // 7. INITIALIZATION ON PAGE LOAD
  // ==========================================================================

  function initFeatures() {
    // 1. Theme initialization
    const theme = getCurrentTheme();
    applyTheme(theme, false);
    setupThemeToggleButtons();

    // 2. PWA setup
    initPWA();

    // 3. Print DOM elements & buttons
    ensureCertificateModalDOM();
    ensureReportCardModalDOM();
    injectMateriPrintButton();
    injectHistoryReportButton();
    injectExamResultCertificateButton();

    console.log('[The Arich Study] UI Theme, Print Engine & PWA Initialized.');
  }

  // Run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeatures);
  } else {
    initFeatures();
  }

  // Expose public API
  window.TheArichUI = {
    getCurrentTheme,
    applyTheme,
    toggleTheme,
    promptPWAInstall,
    openPWAInstallGuideModal,
    printCurrentMateri,
    printCheatsheet,
    openCertificateModal,
    closeCertificateModal,
    printCertificate,
    openReportCardModal,
    closeReportCardModal,
    printReportCard
  };

  // Aliases for global inline handlers
  window.toggleTheme = toggleTheme;
  window.openPWAInstallGuideModal = openPWAInstallGuideModal;
  window.showCertificate = openCertificateModal;
  window.showReportCard = openReportCardModal;
  window.printCertificate = printCertificate;
  window.printReportCard = printReportCard;
})();
