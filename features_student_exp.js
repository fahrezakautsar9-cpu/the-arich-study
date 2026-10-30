/**
 * ============================================================================
 * THE ARICH STUDY PLATFORM - STUDENT EXPERIENCE & LMS WORKFLOW EXTENSION
 * File: the_arich_study/features_student_exp.js
 * 
 * Features Implemented:
 * 1. Subtopic Completion Checklist & Real-Time Progress Tracker
 *    - Interactive "Tandai Paham / Selesai Dibaca" checklist per subtopic
 *    - Gentle audio chime SFX via Web Audio API
 *    - Visual state (emerald border, badge "Sudah Dipelajari", active state)
 *    - Persisted in localStorage ('the_arich_subtopic_progress')
 *    - Animated gradient Chapter Progress Meter in view-materi-detail
 *    - Progress pills & mini bars propagated to Dashboard & Catalog chapter cards
 * 
 * 2. "Lanjutkan Belajar" (Continue Reading) Dashboard Ambient Widget
 *    - Auto-saves reading state on chapter open ('the_arich_recent_reading')
 *    - Ambient glowing widget in Dashboard with instant "Lanjut Baca >" resume
 *    - Displays elapsed time and subtopic completion percentage
 * 
 * 3. Student Personal Scratchpad / Notes per Bab
 *    - Clean collapsible drawer in view-materi-detail: "📝 Catatan Pribadiku di Bab Ini"
 *    - Auto-saves debounced by 500ms to 'the_arich_student_notes_${studentName}_${chapterId}'
 *    - Real-time status indicator: "Tersimpan otomatis ✓"
 *    - Quick formula insert bar, character/word counter, copy & clear actions
 * 
 * 4. Official Student Report Card (Rapor Capaian Belajar Siswa) in Mode Guru
 *    - Dedicated "Cetak Rapor" action button in student rows & top bar
 *    - Professional A4 Modal with authentic Kurikulum Merdeka report card layout
 *    - Official The Arich Study Crest/Logo, student bio, KKM 70 analysis
 *    - CBT Performance Table, summary metrics, qualitative predicates (A/B/C)
 *    - Editable teacher evaluation narrative & recommendations
 *    - Legal sign-off block with dual signatures & official seal
 *    - Dedicated @media print CSS for crisp, high-fidelity A4 printing & PDF export
 * ============================================================================
 */

(function (window, document) {
  'use strict';

  // ==========================================================================
  // 0. CONSTANTS & CONFIGURATION
  // ==========================================================================
  const STORAGE_KEYS = {
    SUBTOPIC_PROGRESS: 'the_arich_subtopic_progress',
    RECENT_READING: 'the_arich_recent_reading',
    NOTES_PREFIX: 'the_arich_student_notes_',
    SUBMISSIONS_DB: 'the_arich_submissions_db',
    REGISTERED_STUDENTS: 'the_arich_registered_students',
    USER_SESSION: 'the_arich_user_session'
  };

  const KKM_SCORE = 70;

  // Cached state
  let cachedStudentsList = [];
  let cachedSubmissionsList = [];
  let notesSaveTimeout = null;
  let currentActiveChapter = null;
  let currentActiveGrade = null;

  // ==========================================================================
  // 1. AUDIO SYNTHESIZER (Gentle Web Audio SFX)
  // ==========================================================================
  let sharedAudioCtx = null;

  function getAudioContext() {
    try {
      if (!sharedAudioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          sharedAudioCtx = new AudioContextClass();
        }
      }
      if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
        sharedAudioCtx.resume().catch(() => {});
      }
      return sharedAudioCtx;
    } catch (e) {
      return null;
    }
  }

  function playGentleAudio(isCompleted = true) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (isCompleted) {
        // Dual-tone soothing crystal chime: C5 (523.25Hz) -> G5 (783.99Hz) -> C6 harmonic
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, now);
        osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
        gain1.gain.setValueAtTime(0.08, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.35);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(783.99, now + 0.08);
        osc2.frequency.exponentialRampToValueAtTime(1046.50, now + 0.22);
        gain2.gain.setValueAtTime(0.05, now + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.45);
      } else {
        // Soft uncheck tap: subtle low-frequency pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(340, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.1);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      // Audio playback fails gracefully if blocked by browser policy
    }
  }

  // ==========================================================================
  // 2. HELPER UTILITIES
  // ==========================================================================
  function getStudentNameSlug() {
    if (window.currentStudent && window.currentStudent.name) {
      return String(window.currentStudent.name).trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
    }
    return 'guest';
  }

  function getSubtopicProgressMap() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBTOPIC_PROGRESS) || '{}');
    } catch (e) {
      return {};
    }
  }

  function setSubtopicProgressMap(map) {
    try {
      localStorage.setItem(STORAGE_KEYS.SUBTOPIC_PROGRESS, JSON.stringify(map));
    } catch (e) {}
  }

  function getChapterProgress(chapterId, totalSubtopics) {
    const map = getSubtopicProgressMap();
    const completedList = Array.isArray(map[chapterId]) ? map[chapterId] : [];
    const validCount = completedList.filter(idx => idx >= 0 && idx < totalSubtopics).length;
    const percentage = totalSubtopics > 0 ? Math.round((validCount / totalSubtopics) * 100) : 0;
    return {
      completedList,
      completedCount: validCount,
      totalCount: totalSubtopics,
      percentage: Math.min(percentage, 100),
      isCompleted: totalSubtopics > 0 && validCount >= totalSubtopics
    };
  }

  function formatRelativeTime(timestamp) {
    if (!timestamp) return 'Baru saja';
    const diffMs = Date.now() - Number(timestamp);
    const diffSec = Math.floor(diffMs / 1000);
    if (diffSec < 60) return 'Baru saja';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin} menit yang lalu`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr} jam yang lalu`;
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay === 1) return 'Kemarin';
    return `${diffDay} hari yang lalu`;
  }

  // ==========================================================================
  // 3. FEATURE 1: SUBTOPIC CHECKLIST & PROGRESS TRACKER
  // ==========================================================================

  /**
   * Toggles completion of a subtopic in a chapter.
   */
  function toggleSubtopic(chapterId, subIndex) {
    subIndex = Number(subIndex);
    const map = getSubtopicProgressMap();
    let list = Array.isArray(map[chapterId]) ? [...map[chapterId]] : [];

    const isCurrentlyDone = list.includes(subIndex);
    if (isCurrentlyDone) {
      list = list.filter(i => i !== subIndex);
      playGentleAudio(false);
    } else {
      list.push(subIndex);
      list.sort((a, b) => a - b);
      playGentleAudio(true);

      // Award micro-gamification XP if available
      if (typeof window.showXPToast === 'function') {
        window.showXPToast(10, 'Subtopik Selesai Dipelajari');
      }
      if (typeof window.addStudentXP === 'function') {
        window.addStudentXP(10, 'Selesai Membaca Subtopik');
      }
    }

    map[chapterId] = list;
    setSubtopicProgressMap(map);

    // Update current reader UI
    updateSubtopicCardUI(chapterId, subIndex, !isCurrentlyDone);
    updateChapterProgressMeter(chapterId);

    // Update any chapter cards currently rendered in dashboard/catalog
    updateAllChapterCardBadges();
  }

  /**
   * Marks all subtopics in the current chapter as completed or resets them.
   */
  function markAllSubtopics(chapterId, markAsDone = true) {
    if (!currentActiveChapter || currentActiveChapter.id !== chapterId) return;
    const total = currentActiveChapter.subtopics ? currentActiveChapter.subtopics.length : 0;
    if (total === 0) return;

    const map = getSubtopicProgressMap();
    if (markAsDone) {
      map[chapterId] = Array.from({ length: total }, (_, i) => i);
      playGentleAudio(true);
      if (typeof window.confetti === 'function') {
        window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
      if (typeof window.showXPToast === 'function') {
        window.showXPToast(25, 'Semua Subtopik Selesai!');
      }
    } else {
      delete map[chapterId];
      playGentleAudio(false);
    }
    setSubtopicProgressMap(map);

    // Re-render UI
    enhanceSubtopicsContainer(currentActiveChapter);
    updateChapterProgressMeter(chapterId);
    updateAllChapterCardBadges();
  }

  /**
   * Updates an individual subtopic card's visual state in the DOM.
   */
  function updateSubtopicCardUI(chapterId, subIndex, isDone) {
    const card = document.getElementById(`subtopic-card-${chapterId}-${subIndex}`);
    if (!card) return;

    const btn = card.querySelector('.subtopic-toggle-btn');
    const badgeContainer = card.querySelector('.subtopic-status-badge');

    if (isDone) {
      card.classList.add('subtopic-completed-card');
      card.classList.remove('border-slate-800');
      card.classList.add('border-emerald-500/50', 'bg-emerald-950/10', 'ring-1', 'ring-emerald-500/30');

      if (btn) {
        btn.className = 'subtopic-toggle-btn px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 shadow-sm';
        btn.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i><span>✓ Selesai Dipelajari</span>`;
        btn.setAttribute('title', 'Klik untuk batalkan tanda selesai');
      }

      if (badgeContainer) {
        badgeContainer.innerHTML = `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-xs"><i data-lucide="check" class="w-3 h-3"></i> Sudah Dipelajari</span>`;
      }
    } else {
      card.classList.remove('subtopic-completed-card');
      card.classList.remove('border-emerald-500/50', 'bg-emerald-950/10', 'ring-1', 'ring-emerald-500/30');
      card.classList.add('border-slate-800');

      if (btn) {
        btn.className = 'subtopic-toggle-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-600 shadow-sm';
        btn.innerHTML = `<i data-lucide="circle" class="w-4 h-4 text-slate-400"></i><span>Tandai Paham / Selesai Dibaca</span>`;
        btn.setAttribute('title', 'Tandai bahwa kamu sudah memahami subtopik ini');
      }

      if (badgeContainer) {
        badgeContainer.innerHTML = `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-dark-900 text-slate-400 border border-slate-800 flex items-center gap-1"><i data-lucide="circle-dashed" class="w-3 h-3 text-slate-500"></i> Belum Selesai</span>`;
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Injects/updates the Real-Time Chapter Progress Meter at the top of view-materi-detail.
   */
  function updateChapterProgressMeter(chapterId) {
    if (!currentActiveChapter || currentActiveChapter.id !== chapterId) return;
    const total = currentActiveChapter.subtopics ? currentActiveChapter.subtopics.length : 0;
    const progress = getChapterProgress(chapterId, total);

    let meterContainer = document.getElementById('chapter-realtime-progress-meter');
    if (!meterContainer) {
      // Find insertion anchor: right above detail-subtopics-container or below the chapter banner card
      const detailContainer = document.getElementById('view-materi-detail');
      const subContainer = document.getElementById('detail-subtopics-container');
      if (!detailContainer || !subContainer) return;

      meterContainer = document.createElement('div');
      meterContainer.id = 'chapter-realtime-progress-meter';
      meterContainer.className = 'transition-all duration-300';
      subContainer.parentNode.insertBefore(meterContainer, subContainer);
    }

    const isAllDone = progress.isCompleted;

    meterContainer.innerHTML = `
      <div class="clean-card rounded-2xl p-4 sm:p-5 bg-gradient-to-r ${isAllDone ? 'from-emerald-950/40 via-dark-850 to-teal-950/30 border-emerald-500/40' : 'from-slate-900 via-indigo-950/30 to-dark-850 border-indigo-500/30'} border space-y-3 shadow-xl relative overflow-hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl ${isAllDone ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'} border flex items-center justify-center text-sm font-bold shrink-0 shadow-inner">
              <i data-lucide="${isAllDone ? 'check-check' : 'book-open'}" class="w-4 h-4"></i>
            </span>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-bold text-white uppercase tracking-wider">Progres Belajar Bab Ini</span>
                ${isAllDone ? `
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shadow-sm animate-pulse">
                    <i data-lucide="sparkles" class="w-3 h-3"></i> Tuntas Dipelajari!
                  </span>
                ` : ''}
              </div>
              <p class="text-[11px] text-slate-300 mt-0.5" id="ch-progress-desc">
                ${isAllDone ? 'Hebat! Kamu telah menyelesaikan seluruh subtopik di bab ini.' : `Telah mempelajari <strong class="text-white">${progress.completedCount}</strong> dari <strong class="text-white">${progress.totalCount}</strong> subtopik.`}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2 self-start sm:self-center shrink-0">
            <span class="px-3 py-1 rounded-xl text-xs font-mono font-bold ${isAllDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'} border">
              ${progress.percentage}% Selesai
            </span>
            <div class="flex items-center gap-1">
              ${!isAllDone ? `
                <button onclick="window.TheArichStudentExp.markAllSubtopics('${chapterId}', true)" class="px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-semibold transition" title="Tandai semua subtopik selesai">
                  Tandai Semua Selesai
                </button>
              ` : `
                <button onclick="window.TheArichStudentExp.markAllSubtopics('${chapterId}', false)" class="px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-rose-300 text-[11px] font-medium transition" title="Reset progres bab ini">
                  Reset Progres
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- Animated Gradient Progress Bar -->
        <div class="space-y-1">
          <div class="w-full h-3 rounded-full bg-dark-900 border border-slate-800 overflow-hidden p-0.5">
            <div class="h-full rounded-full bg-gradient-to-r ${isAllDone ? 'from-emerald-500 via-teal-400 to-green-300' : 'from-indigo-600 via-purple-500 to-emerald-400'} transition-all duration-500 ease-out shadow-sm" style="width: ${progress.percentage}%;"></div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-slate-400 font-medium px-0.5">
            <span>0 Subtopik</span>
            <span>${progress.completedCount} / ${progress.totalCount} Selesai (${progress.percentage}%)</span>
            <span>Target Tuntas (100%)</span>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Trigger celebratory confetti once if just reached 100%
    if (isAllDone && typeof window.confetti === 'function') {
      window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.5 } });
    }
  }

  /**
   * Enhances rendered subtopic cards inside #detail-subtopics-container.
   */
  function enhanceSubtopicsContainer(chapter) {
    if (!chapter || !chapter.subtopics) return;
    const container = document.getElementById('detail-subtopics-container');
    if (!container) return;

    const cards = container.children;
    const progress = getChapterProgress(chapter.id, chapter.subtopics.length);

    Array.from(cards).forEach((card, idx) => {
      // Avoid re-enhancing or duplicating controls
      card.id = `subtopic-card-${chapter.id}-${idx}`;
      const isDone = progress.completedList.includes(idx);

      // Check if controls already injected
      if (card.querySelector('.subtopic-exp-footer')) {
        updateSubtopicCardUI(chapter.id, idx, isDone);
        return;
      }

      // Add badge placeholder in card header if not present
      const header = card.querySelector('.flex.items-start.justify-between') || card.firstElementChild;
      if (header) {
        let badgeEl = header.querySelector('.subtopic-status-badge');
        if (!badgeEl) {
          badgeEl = document.createElement('div');
          badgeEl.className = 'subtopic-status-badge ml-auto mr-2 shrink-0';
          // Insert before audio button
          const ttsBtn = header.querySelector('button');
          if (ttsBtn) {
            header.insertBefore(badgeEl, ttsBtn);
          } else {
            header.appendChild(badgeEl);
          }
        }
      }

      // Add Footer with interactive toggle button
      const footer = document.createElement('div');
      footer.className = 'subtopic-exp-footer pt-3 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5';
      footer.innerHTML = `
        <div class="flex items-center gap-2 text-xs text-slate-400">
          <i data-lucide="info" class="w-3.5 h-3.5 text-indigo-400"></i>
          <span>Tandai checklist ini jika kamu sudah memahami materi & contoh soal di atas.</span>
        </div>
        <button type="button" onclick="window.TheArichStudentExp.toggleSubtopic('${chapter.id}', ${idx})"
                class="subtopic-toggle-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition">
          <!-- Injected via updateSubtopicCardUI -->
        </button>
      `;

      card.appendChild(footer);
      updateSubtopicCardUI(chapter.id, idx, isDone);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Propagates subtopic progress pills to all chapter cards rendered on Dashboard & Catalog.
   */
  function updateAllChapterCardBadges() {
    // 1. Dashboard chapters overview
    enhanceChapterCardsInContainer('dash-chapters-overview');
    // 2. Materi catalog grid
    enhanceChapterCardsInContainer('materi-catalog-grid');
  }

  function enhanceChapterCardsInContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cards = container.querySelectorAll('.clean-card');
    cards.forEach(card => {
      // Find chapter ID from onclick attribute e.g. openChapterDetail('k11-mat-matriks')
      const onclickAttr = card.getAttribute('onclick') || '';
      const match = onclickAttr.match(/openChapterDetail\(['"]([^'"]+)['"]/);
      if (!match) return;

      const chapterId = match[1];
      const chData = findChapterDataById(chapterId);
      if (!chData || !chData.subtopics) return;

      const total = chData.subtopics.length;
      const progress = getChapterProgress(chapterId, total);

      // Check if progress badge already injected
      let badge = card.querySelector('.ch-card-progress-pill');
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'ch-card-progress-pill';

        // Find footer area inside card
        const footerArea = card.querySelector('.border-t') || card.lastElementChild;
        if (footerArea) {
          footerArea.parentNode.insertBefore(badge, footerArea);
        } else {
          card.appendChild(badge);
        }
      }

      const isAllDone = progress.isCompleted;
      const isStarted = progress.completedCount > 0;

      badge.innerHTML = `
        <div class="my-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
          <div class="flex items-center gap-1.5">
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-bold text-[10px] ${
              isAllDone
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : isStarted
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'bg-dark-900 text-slate-400 border border-slate-800'
            }">
              <i data-lucide="${isAllDone ? 'check-circle' : isStarted ? 'book-open' : 'circle-dashed'}" class="w-3 h-3 ${isAllDone ? 'text-emerald-400' : isStarted ? 'text-indigo-400' : 'text-slate-500'}"></i>
              <span>${isAllDone ? '100% Paham' : `${progress.completedCount}/${progress.totalCount} Subtopik`}</span>
            </span>
            <span class="text-slate-400 font-mono text-[10px]">${progress.percentage}%</span>
          </div>
          <div class="w-16 h-1.5 bg-dark-900 rounded-full border border-slate-800 overflow-hidden">
            <div class="h-full bg-gradient-to-r ${isAllDone ? 'from-emerald-500 to-teal-400' : 'from-indigo-500 to-sky-400'}" style="width: ${progress.percentage}%;"></div>
          </div>
        </div>
      `;
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function findChapterDataById(chapterId) {
    // 1. Search in currentGradeData
    if (window.currentGradeData && window.currentGradeData.chapters) {
      const found = window.currentGradeData.chapters.find(c => c.id === chapterId);
      if (found) return found;
    }
    // 2. Search in ALL_GRADES_DATA
    if (window.ALL_GRADES_DATA) {
      for (const gradeKey in window.ALL_GRADES_DATA) {
        const gradeObj = window.ALL_GRADES_DATA[gradeKey];
        if (gradeObj && gradeObj.chapters) {
          const ch = gradeObj.chapters.find(c => c.id === chapterId);
          if (ch) return ch;
        }
      }
    }
    return null;
  }

  // ==========================================================================
  // 4. FEATURE 2: "LANJUTKAN BELAJAR" DASHBOARD WIDGET
  // ==========================================================================

  /**
   * Saves student reading state on chapter open.
   */
  function saveRecentReading(chapter, grade) {
    if (!chapter || !chapter.id) return;
    try {
      const subject = chapter.subject || (chapter.id.includes('fisika') ? 'Fisika' : 'Matematika');
      const payload = {
        chapterId: chapter.id,
        grade: String(grade || (window.currentStudent ? window.currentStudent.grade : '11')),
        title: chapter.title || 'Materi Bab',
        subject: subject,
        summary: chapter.summary || '',
        subtopicsCount: chapter.subtopics ? chapter.subtopics.length : 0,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEYS.RECENT_READING, JSON.stringify(payload));
    } catch (e) {}
  }

  /**
   * Resumes reading the recent chapter.
   */
  function resumeRecentReading() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RECENT_READING);
      if (!stored) return;
      const data = JSON.parse(stored);
      if (data && data.chapterId) {
        if (typeof window.openChapterDetail === 'function') {
          window.openChapterDetail(data.chapterId, data.grade);
        }
      }
    } catch (e) {}
  }

  /**
   * Dismisses or clears the recent reading widget.
   */
  function dismissRecentReading() {
    try {
      localStorage.removeItem(STORAGE_KEYS.RECENT_READING);
      const widget = document.getElementById('widget-continue-reading');
      if (widget) {
        widget.style.transition = 'all 0.3s ease-out';
        widget.style.opacity = '0';
        widget.style.transform = 'translateY(-8px)';
        setTimeout(() => widget.remove(), 300);
      }
    } catch (e) {}
  }

  /**
   * Renders the ambient "Lanjutkan Belajar" widget in the Dashboard view.
   */
  function renderContinueReadingWidget() {
    const dashView = document.getElementById('view-dashboard');
    if (!dashView) return;

    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT_READING) || 'null');
    } catch (e) {
      stored = null;
    }

    let existingWidget = document.getElementById('widget-continue-reading');

    if (!stored || !stored.chapterId) {
      if (existingWidget) existingWidget.remove();
      return;
    }

    const chData = findChapterDataById(stored.chapterId);
    const title = chData ? chData.title : stored.title;
    const totalSub = chData && chData.subtopics ? chData.subtopics.length : (stored.subtopicsCount || 3);
    const progress = getChapterProgress(stored.chapterId, totalSub);
    const subject = stored.subject || 'Matematika';
    const isPhysics = subject === 'Fisika';
    const timeAgo = formatRelativeTime(stored.timestamp);

    const widgetHTML = `
      <div id="widget-continue-reading" class="clean-card rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-indigo-950/70 via-dark-850 to-slate-900 border border-indigo-500/40 relative overflow-hidden shadow-xl mb-4 group hover:border-indigo-500/60 transition">
        <div class="absolute -right-10 -top-10 w-36 h-36 ${isPhysics ? 'bg-sky-500/10' : 'bg-indigo-500/10'} rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div class="flex items-start sm:items-center gap-3.5">
            <div class="w-11 h-11 rounded-2xl ${isPhysics ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' : 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'} border flex items-center justify-center shrink-0 shadow-inner">
              <i data-lucide="book-marked" class="w-5 h-5 text-indigo-300 animate-pulse"></i>
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${isPhysics ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'} border">
                  Lanjutkan Belajar Terakhir
                </span>
                <span class="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                  <i data-lucide="clock" class="w-3 h-3 text-amber-400"></i> ${timeAgo}
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-dark-900 border border-slate-800 text-slate-300">
                  ${subject} • Kelas ${stored.grade}
                </span>
              </div>

              <h4 class="text-sm sm:text-base font-extrabold text-white leading-snug">
                📚 ${title}
              </h4>

              <div class="flex items-center gap-3 text-xs text-slate-400">
                <span>Progres: <strong class="text-white">${progress.completedCount}/${progress.totalCount} Subtopik (${progress.percentage}%)</strong></span>
                <div class="w-24 h-1.5 bg-dark-900 border border-slate-800 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r ${progress.isCompleted ? 'from-emerald-500 to-teal-400' : 'from-indigo-500 to-emerald-400'}" style="width: ${progress.percentage}%;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button onclick="window.TheArichStudentExp.resumeRecentReading()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 transition transform hover:scale-[1.02]">
              <span>Lanjut Baca</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="window.TheArichStudentExp.dismissRecentReading()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-900 border border-slate-800 transition" title="Sembunyikan Widget">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Anchor: insert right above the chapters overview section
    const overviewSection = dashView.querySelector('#dash-chapters-overview')?.parentNode;
    if (overviewSection) {
      if (existingWidget) {
        existingWidget.outerHTML = widgetHTML;
      } else {
        const temp = document.createElement('div');
        temp.innerHTML = widgetHTML;
        dashView.insertBefore(temp.firstElementChild, overviewSection);
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // 5. FEATURE 3: STUDENT PERSONAL SCRATCHPAD / NOTES PER BAB
  // ==========================================================================

  /**
   * Injects/updates the Personal Scratchpad Drawer inside view-materi-detail.
   */
  function enhancePersonalScratchpad(chapter) {
    if (!chapter || !chapter.id) return;
    const detailView = document.getElementById('view-materi-detail');
    if (!detailView) return;

    const studentSlug = getStudentNameSlug();
    const storageKey = `${STORAGE_KEYS.NOTES_PREFIX}${studentSlug}_${chapter.id}`;
    const savedNotes = localStorage.getItem(storageKey) || '';

    let scratchpadContainer = document.getElementById('student-personal-scratchpad');
    if (!scratchpadContainer) {
      scratchpadContainer = document.createElement('div');
      scratchpadContainer.id = 'student-personal-scratchpad';
      scratchpadContainer.className = 'mt-6 transition-all duration-300';

      // Insert right before the exam CTA card or at the bottom of the detail view
      const examCTA = document.getElementById('btn-materi-start-exam')?.closest('.clean-card');
      if (examCTA) {
        detailView.insertBefore(scratchpadContainer, examCTA);
      } else {
        detailView.appendChild(scratchpadContainer);
      }
    }

    scratchpadContainer.innerHTML = `
      <div class="clean-card rounded-2xl border border-slate-800 bg-dark-850/90 shadow-xl overflow-hidden transition">
        <!-- Collapsible Header -->
        <div onclick="window.TheArichStudentExp.toggleScratchpadCollapse()" class="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none bg-dark-900/60 hover:bg-dark-900 transition">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-xs font-bold shrink-0">
              <i data-lucide="edit-3" class="w-4 h-4 text-amber-400"></i>
            </span>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>📝 Catatan Pribadiku di Bab Ini</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-dark-800 border border-slate-700 text-slate-300 hidden sm:inline">Bab: ${chapter.title}</span>
              </h4>
              <p class="text-[11px] text-slate-400 mt-0.5">Tuliskan formula penting, jalan pintas, atau ringkasan pemahamanmu sendiri.</p>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <div id="scratchpad-save-status" class="text-[11px] text-slate-400">
              <span class="flex items-center gap-1 text-emerald-400 font-medium">
                <i data-lucide="check" class="w-3.5 h-3.5"></i>
                <span class="hidden sm:inline">Tersimpan otomatis ✓</span>
              </span>
            </div>
            <span id="scratchpad-chevron" class="p-1 rounded-lg text-slate-400 hover:text-white transition">
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300"></i>
            </span>
          </div>
        </div>

        <!-- Collapsible Content Body -->
        <div id="scratchpad-body" class="p-4 sm:p-5 pt-0 space-y-3">
          
          <!-- Quick Math Formula Insert Shortcuts -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-1 text-[11px] no-scrollbar">
            <span class="text-slate-500 shrink-0 text-[10px] uppercase font-bold tracking-wider mr-1">Sisip Cepat:</span>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('$$  $$')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0" title="Blok Rumus KaTeX">$$...$$</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\frac{a}{b}')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0" title="Pecahan a/b">\\frac{a}{b}</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('x^2')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">x²</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\sqrt{x}')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">√x</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\pm')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">±</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\pi')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">π</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\approx')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">≈</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\theta')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">θ</button>
            <button type="button" onclick="window.TheArichStudentExp.insertScratchFormula('\\\\Delta')" class="px-2 py-1 rounded-lg bg-dark-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-indigo-300 font-mono transition shrink-0">Δ</button>
          </div>

          <!-- Textarea Scratchpad -->
          <div class="relative">
            <textarea id="student-scratchpad-input"
                      rows="5"
                      oninput="window.TheArichStudentExp.onScratchpadInput('${chapter.id}')"
                      placeholder="Tuliskan poin penting, langkah penyelesaian, rumus kunci, atau catatan belajar untuk bab ${chapter.title}... Catatan tersimpan otomatis di perangkatmu."
                      class="w-full p-3.5 rounded-xl bg-dark-900/95 border border-slate-700/80 text-slate-100 text-xs sm:text-sm font-sans placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 leading-relaxed shadow-inner resize-y min-h-[120px]">${savedNotes}</textarea>
          </div>

          <!-- Footer Actions & Word Count -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-400">
            <div id="scratchpad-word-stats" class="font-mono">
              ${calculateWordStats(savedNotes)}
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="window.TheArichStudentExp.copyScratchpadNotes()" class="px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1">
                <i data-lucide="copy" class="w-3 h-3 text-indigo-400"></i>
                <span>Salin Catatan</span>
              </button>
              <button type="button" onclick="window.TheArichStudentExp.clearScratchpadNotes('${chapter.id}')" class="px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-500/40 text-slate-400 hover:text-rose-300 transition flex items-center gap-1">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
                <span>Hapus</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  function calculateWordStats(text) {
    if (!text || !text.trim()) return '0 kata • 0 karakter';
    const chars = text.length;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `${words} kata • ${chars} karakter`;
  }

  function toggleScratchpadCollapse() {
    const body = document.getElementById('scratchpad-body');
    const chevron = document.getElementById('scratchpad-chevron');
    if (!body) return;
    if (body.classList.contains('hidden')) {
      body.classList.remove('hidden');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    } else {
      body.classList.add('hidden');
      if (chevron) chevron.style.transform = 'rotate(-90deg)';
    }
  }

  function onScratchpadInput(chapterId) {
    const textarea = document.getElementById('student-scratchpad-input');
    const statusEl = document.getElementById('scratchpad-save-status');
    const statsEl = document.getElementById('scratchpad-word-stats');
    if (!textarea) return;

    const content = textarea.value;
    if (statsEl) {
      statsEl.textContent = calculateWordStats(content);
    }

    if (statusEl) {
      statusEl.innerHTML = `<span class="flex items-center gap-1 text-amber-400 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span><span>Menyimpan...</span></span>`;
    }

    clearTimeout(notesSaveTimeout);
    notesSaveTimeout = setTimeout(() => {
      const studentSlug = getStudentNameSlug();
      const storageKey = `${STORAGE_KEYS.NOTES_PREFIX}${studentSlug}_${chapterId}`;
      try {
        localStorage.setItem(storageKey, content);
        if (statusEl) {
          const nowStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
          statusEl.innerHTML = `<span class="flex items-center gap-1 text-emerald-400 font-medium"><i data-lucide="check" class="w-3.5 h-3.5"></i><span>Tersimpan otomatis ✓ <span class="text-slate-500 text-[10px]">(${nowStr})</span></span></span>`;
          if (window.lucide) window.lucide.createIcons();
        }
      } catch (e) {}
    }, 500);
  }

  function insertScratchFormula(latexCode) {
    const textarea = document.getElementById('student-scratchpad-input');
    if (!textarea) return;

    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);

    textarea.value = before + latexCode + after;
    textarea.selectionStart = textarea.selectionEnd = start + latexCode.length;
    textarea.focus();

    if (currentActiveChapter) {
      onScratchpadInput(currentActiveChapter.id);
    }
  }

  function copyScratchpadNotes() {
    const textarea = document.getElementById('student-scratchpad-input');
    if (!textarea || !textarea.value.trim()) return;

    navigator.clipboard.writeText(textarea.value).then(() => {
      if (typeof window.showXPToast === 'function') {
        window.showXPToast(5, 'Catatan Tersalin ke Clipboard');
      } else {
        alert('Catatan berhasil disalin!');
      }
    }).catch(() => {});
  }

  function clearScratchpadNotes(chapterId) {
    if (!confirm('Yakin ingin menghapus seluruh catatan pribadi pada bab ini?')) return;
    const textarea = document.getElementById('student-scratchpad-input');
    if (textarea) textarea.value = '';

    const studentSlug = getStudentNameSlug();
    const storageKey = `${STORAGE_KEYS.NOTES_PREFIX}${studentSlug}_${chapterId}`;
    try {
      localStorage.removeItem(storageKey);
      const statusEl = document.getElementById('scratchpad-save-status');
      const statsEl = document.getElementById('scratchpad-word-stats');
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-slate-500 font-medium">Catatan kosong</span>`;
      }
      if (statsEl) {
        statsEl.textContent = '0 kata • 0 karakter';
      }
    } catch (e) {}
  }

  // ==========================================================================
  // 6. FEATURE 4: OFFICIAL STUDENT REPORT CARD (RAPOR SISWA MODE GURU)
  // ==========================================================================

  /**
   * Caches latest student and submission lists from teacher dashboard.
   */
  function cacheTeacherData(studentsList, submissionsList) {
    if (Array.isArray(studentsList)) cachedStudentsList = [...studentsList];
    if (Array.isArray(submissionsList)) cachedSubmissionsList = [...submissionsList];
  }

  /**
   * Enhances teacher students table to include "Cetak Rapor" action.
   */
  function enhanceTeacherStudentsTable() {
    const table = document.querySelector('#teacher-tab-content-students table');
    const tbody = document.getElementById('teacher-students-tbody');
    if (!table || !tbody) return;

    // Check if thead has Aksi column
    const theadTr = table.querySelector('thead tr');
    if (theadTr && !theadTr.querySelector('.th-rapor-action')) {
      const th = document.createElement('th');
      th.className = 'th-rapor-action py-2.5 px-3 text-center';
      th.textContent = 'Rapor Siswa';
      theadTr.appendChild(th);
    }

    // Enhance each row in tbody
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
      // If it's the "empty" row with colspan
      const emptyTd = row.querySelector('td[colspan]');
      if (emptyTd) {
        emptyTd.setAttribute('colspan', '8');
        return;
      }

      if (row.querySelector('.td-rapor-action')) return;

      // Extract student name from the second column
      const nameTd = row.children[1];
      if (!nameTd) return;
      const studentName = nameTd.innerText.trim();

      const td = document.createElement('td');
      td.className = 'td-rapor-action py-2.5 px-3 text-center';
      td.innerHTML = `
        <button onclick="window.TheArichStudentExp.openReportModal('${encodeURIComponent(studentName)}')"
                class="px-2.5 py-1 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-[11px] font-bold flex items-center gap-1.5 transition mx-auto shadow-sm"
                title="Buka & Cetak Rapor Resmi Siswa">
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          <span>Cetak Rapor</span>
        </button>
      `;
      row.appendChild(td);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Injects top header "Cetak Rapor Siswa" button in view-teacher-dashboard.
   */
  function injectTeacherHeaderRaporButton() {
    const headerBtns = document.querySelector('#view-teacher-dashboard .flex.flex-wrap.items-center.gap-2');
    if (!headerBtns || headerBtns.querySelector('#btn-teacher-open-rapor')) return;

    const btn = document.createElement('button');
    btn.id = 'btn-teacher-open-rapor';
    btn.type = 'button';
    btn.onclick = () => openReportModal();
    btn.className = 'px-3 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-600/20 transition';
    btn.innerHTML = `<i data-lucide="file-text" class="w-3.5 h-3.5"></i><span>Cetak Rapor Siswa</span>`;
    headerBtns.appendChild(btn);

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Opens the Official Student Report Card Modal.
   */
  function openReportModal(studentNameQuery) {
    studentNameQuery = studentNameQuery ? decodeURIComponent(studentNameQuery).trim() : '';

    // Merge latest data from localStorage and cached state
    const localAccounts = JSON.parse(localStorage.getItem(STORAGE_KEYS.REGISTERED_STUDENTS) || '[]');
    const localDb = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBMISSIONS_DB) || '[]');

    let allStudents = [...cachedStudentsList];
    localAccounts.forEach(acc => {
      if (!allStudents.some(s => s.name.toLowerCase() === acc.name.toLowerCase())) {
        allStudents.push({
          name: acc.name,
          gradeName: (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[acc.grade]) ? window.ALL_GRADES_DATA[acc.grade].gradeName : `Kelas ${acc.grade}`,
          grade: acc.grade,
          school: acc.school || 'Sekolah Terdaftar',
          lastActive: acc.lastActive || acc.registeredAt || 'Lokal'
        });
      }
    });

    if (allStudents.length === 0) {
      // Fallback to active current student
      if (window.currentStudent) {
        allStudents.push({
          name: window.currentStudent.name,
          gradeName: (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[window.currentStudent.grade]) ? window.ALL_GRADES_DATA[window.currentStudent.grade].gradeName : `Kelas ${window.currentStudent.grade}`,
          grade: window.currentStudent.grade,
          school: window.currentStudent.school || 'Sekolah Siswa'
        });
      } else {
        allStudents.push({
          name: 'Siswa The Arich Study',
          gradeName: 'Kelas 11 SMA',
          grade: '11',
          school: 'SMA Negeri / Swasta'
        });
      }
    }

    // Determine target student
    let targetStudent = null;
    if (studentNameQuery) {
      targetStudent = allStudents.find(s => s.name.toLowerCase() === studentNameQuery.toLowerCase());
    }
    if (!targetStudent) {
      targetStudent = allStudents[0];
    }

    // Merge submissions
    let allSubmissions = [...cachedSubmissionsList];
    localDb.forEach(item => {
      if (!allSubmissions.some(s => s.id === item.id || (s.studentName === item.studentName && s.timestamp === item.timestamp))) {
        allSubmissions.push(item);
      }
    });

    renderReportModalContent(targetStudent, allStudents, allSubmissions);

    const modal = document.getElementById('modal-official-student-rapor');
    if (modal) {
      modal.classList.remove('hidden');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function closeReportModal() {
    const modal = document.getElementById('modal-official-student-rapor');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  /**
   * Renders the complete A4 printable report card inside the modal.
   */
  function renderReportModalContent(student, allStudents, allSubmissions) {
    let modal = document.getElementById('modal-official-student-rapor');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-official-student-rapor';
      modal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-xs hidden flex items-center justify-center p-2 sm:p-4 overflow-y-auto';
      document.body.appendChild(modal);
    }

    // Filter submissions for this student
    const studentSubs = allSubmissions.filter(s => s.studentName && s.studentName.toLowerCase() === student.name.toLowerCase());
    const totalExams = studentSubs.length;
    const avgScore = totalExams > 0 ? Math.round(studentSubs.reduce((a, b) => a + Number(b.score), 0) / totalExams) : 0;
    const passedCount = studentSubs.filter(s => s.passed || Number(s.score) >= KKM_SCORE).length;
    const passPercentage = totalExams > 0 ? Math.round((passedCount / totalExams) * 100) : 0;

    // Qualitative Predicate (Kurikulum Merdeka Standard)
    let predicate = 'C (Perlu Bimbingan)';
    let predicateBadge = 'text-rose-700 bg-rose-50 border-rose-300';
    let predicateDesc = 'Memerlukan pendampingan lebih lanjut dalam memahami konsep dasar dan formula.';
    if (avgScore >= 85) {
      predicate = 'A (Sangat Baik / Mahir)';
      predicateBadge = 'text-emerald-800 bg-emerald-50 border-emerald-300';
      predicateDesc = 'Menunjukkan penguasaan materi yang istimewa, mandiri, dan bernalar kritis tinggi.';
    } else if (avgScore >= KKM_SCORE) {
      predicate = 'B (Baik / Cakap)';
      predicateBadge = 'text-indigo-800 bg-indigo-50 border-indigo-300';
      predicateDesc = 'Telah mencapai kriteria ketuntasan minimal pembelajaran dengan pemahaman konsep yang kokoh.';
    }

    // Default Teacher Recommendation Narrative
    let defaultTeacherRemarks = '';
    if (avgScore >= 85) {
      defaultTeacherRemarks = `Ananda ${student.name} menunjukkan pemahaman konsep yang sangat solid dan konsisten dalam mata pelajaran Matematika dan Fisika. Seluruh latihan soal bab terselesaikan dengan hasil melampaui KKM (70). Disarankan untuk memperdalam soal bertipe HOTS dan persiapan seleksi perguruan tinggi / olimpiade sains.`;
    } else if (avgScore >= KKM_SCORE) {
      defaultTeacherRemarks = `Ananda ${student.name} telah mencapai ketuntasan kompetensi dengan baik. Penguasaan rumus dasar dan contoh soal bertahap sudah dikuasai secara sistematis. Direkomendasikan untuk meningkatkan ketelitian pengerjaan soal hitungan bercabang dan mempercepat manajemen waktu ujian.`;
    } else if (totalExams > 0) {
      defaultTeacherRemarks = `Ananda ${student.name} masih memerlukan penguatan pada beberapa topik bab spesifik yang berada di bawah KKM. Dianjurkan untuk membaca kembali rangkuman konsep, menyelesaikan checklist subtopik, serta berkonsultasi secara intensif dengan guru pendamping sebelum asesmen ulang.`;
    } else {
      defaultTeacherRemarks = `Ananda ${student.name} telah terdaftar aktif dalam portal LMS The Arich Study. Saat ini siswa sedang menyelesaikan tahapan membaca modul dan studi mandiri sebelum menempuh asesmen formal per bab.`;
    }

    // Date formatting in Indonesian
    const dateNow = new Date();
    const indonesianMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const formattedPrintDate = `${dateNow.getDate()} ${indonesianMonths[dateNow.getMonth()]} ${dateNow.getFullYear()}`;

    // Student Selector Options
    const studentOptions = allStudents.map(st => `
      <option value="${encodeURIComponent(st.name)}" ${st.name.toLowerCase() === student.name.toLowerCase() ? 'selected' : ''}>
        ${st.name} (${st.gradeName || 'Kelas ' + st.grade})
      </option>
    `).join('');

    // Generate Performance Table Rows
    let performanceRows = '';
    if (studentSubs.length > 0) {
      performanceRows = studentSubs.map((sub, i) => {
        const isPassed = sub.passed || Number(sub.score) >= KKM_SCORE;
        const subjName = sub.displaySubject || sub.chapterTitle || 'Latihan Bab';
        const dateStr = sub.timestamp || '-';
        const subjectCategory = subjName.toLowerCase().includes('fisika') ? 'Fisika' : 'Matematika';

        return `
          <tr class="border-b border-slate-200 text-xs text-slate-800">
            <td class="py-2.5 px-3 text-center font-bold text-slate-600">${i + 1}</td>
            <td class="py-2.5 px-3 font-semibold text-slate-800">${subjectCategory}</td>
            <td class="py-2.5 px-3 font-medium text-slate-900">${subjName}</td>
            <td class="py-2.5 px-3 text-center text-slate-600 font-mono text-[11px]">${dateStr}</td>
            <td class="py-2.5 px-3 text-center font-bold font-mono text-sm ${isPassed ? 'text-emerald-700' : 'text-rose-700'}">${sub.score}</td>
            <td class="py-2.5 px-3 text-center font-mono text-slate-600">${KKM_SCORE}</td>
            <td class="py-2.5 px-3 text-center">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${isPassed ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'}">
                ${isPassed ? 'TUNTAS' : 'REMEDIAL'}
              </span>
            </td>
          </tr>
        `;
      }).join('');
    } else {
      performanceRows = `
        <tr class="border-b border-slate-200 text-xs">
          <td colspan="7" class="py-6 text-center text-slate-500 italic">
            Belum ada rekapitulasi ujian CBT mandiri yang terselesaikan pada periode penilaian ini.
          </td>
        </tr>
      `;
    }

    modal.innerHTML = `
      <div class="clean-card rounded-2xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-slate-700 bg-slate-950 text-slate-100 space-y-4 max-h-[92vh] overflow-y-auto">
        
        <!-- Controls Bar (Screen Only - Hidden in Print) -->
        <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <i data-lucide="file-check-2" class="w-5 h-5"></i>
            </span>
            <div>
              <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Rapor Capaian Belajar Siswa (Pratinjau Cetak)</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Mode Guru</span>
              </h3>
              <p class="text-[11px] text-slate-400">Pilih siswa dan klik cetak untuk menghasilkan dokumen resmi format A4 PDF.</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <select onchange="window.TheArichStudentExp.openReportModal(this.value)" class="px-3 py-1.5 rounded-xl bg-dark-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-indigo-500">
              ${studentOptions}
            </select>
            <button onclick="window.TheArichStudentExp.printReportCard()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-600/30 transition">
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>Cetak / Simpan PDF Rapor</span>
            </button>
            <button onclick="window.TheArichStudentExp.closeReportModal()" class="px-3 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition">
              Tutup
            </button>
          </div>
        </div>

        <!-- ========================================================== -->
        <!-- PRINTABLE A4 REPORT SHEET CONTAINER                       -->
        <!-- ========================================================== -->
        <div id="rapor-printable-sheet" class="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl space-y-6 font-sans">
          
          <!-- OFFICIAL LETTERHEAD / KOP RESMI -->
          <div class="flex items-center justify-between gap-4 pb-4 border-b-2 border-slate-900">
            <!-- Crest / Logo -->
            <div class="flex items-center gap-3.5">
              <div class="w-16 h-16 rounded-2xl bg-indigo-900 text-amber-400 flex items-center justify-center border-2 border-amber-400/80 shadow-md shrink-0">
                <svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="#FBBF24" stroke="#1E1B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 21V33C10 33 16 38 24 38C32 38 38 33 38 33V21" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="24" cy="27" r="4" fill="#FFFFFF"/>
                  <path d="M20 27L28 27M24 23L24 31" stroke="#1E1B4B" stroke-width="1.5"/>
                </svg>
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-black tracking-tight text-indigo-950 uppercase">THE ARICH STUDY PLATFORM</h1>
                <p class="text-xs font-bold text-slate-700 uppercase tracking-wide">Pusat Asesmen & Pembelajaran Terstandar Kurikulum Merdeka</p>
                <p class="text-[10px] text-slate-500 mt-0.5">Sistem Pengukuran Capaian Kompetensi Belajar Siswa • Web: thearichstudy.edu.id</p>
              </div>
            </div>

            <!-- Doc Meta Code -->
            <div class="text-right text-[10px] text-slate-500 font-mono hidden sm:block">
              <span class="block font-bold text-slate-700">DOKUMEN RESMI RAPOR CBT</span>
              <span>NO: ARICH/RAPOR/${dateNow.getFullYear()}/${Math.floor(100000 + Math.random() * 900000)}</span>
              <span class="block text-emerald-700 font-semibold">STATUS: TERVERIFIKASI SISTEM ✓</span>
            </div>
          </div>

          <!-- REPORT TITLE -->
          <div class="text-center space-y-1">
            <h2 class="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-wider underline decoration-indigo-600 decoration-2 underline-offset-4">
              LAPORAN HASIL ASESMEN DAN CAPAIAN BELAJAR SISWA
            </h2>
            <p class="text-xs text-slate-600 font-medium">Rekapitulasi Evaluasi Capaian Pembelajaran & Asesmen Sumatif Per Bab</p>
          </div>

          <!-- STUDENT BIODATA GRID -->
          <div class="rounded-xl border border-slate-300 bg-slate-50/70 p-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs">
            <div class="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
              <span class="text-slate-500 font-medium">Nama Lengkap Siswa:</span>
              <span class="font-bold text-slate-900 text-sm uppercase">${student.name}</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
              <span class="text-slate-500 font-medium">Jenjang & Kelas:</span>
              <span class="font-bold text-indigo-900">${student.gradeName || 'Kelas ' + student.grade}</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
              <span class="text-slate-500 font-medium">Asal Sekolah:</span>
              <span class="font-semibold text-slate-800">${student.school || 'Sekolah Terdaftar'}</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
              <span class="text-slate-500 font-medium">Periode Akademik:</span>
              <span class="font-semibold text-slate-800">Tahun Ajaran ${dateNow.getFullYear()}/${dateNow.getFullYear() + 1}</span>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-slate-500 font-medium">Rata-rata Nilai CBT:</span>
              <span class="font-black text-sm font-mono text-indigo-700">${avgScore} / 100</span>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-slate-500 font-medium">Standar KKM Nasional:</span>
              <span class="font-bold text-slate-700 font-mono">${KKM_SCORE}</span>
            </div>
          </div>

          <!-- PERFORMANCE SUMMARY STATS PILLS -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 block">Total Latihan</span>
              <span class="text-xl font-black text-indigo-950 font-mono">${totalExams}</span>
              <span class="text-[10px] text-slate-400">Paket Bab</span>
            </div>
            <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 block">Rata-rata Skor</span>
              <span class="text-xl font-black text-amber-700 font-mono">${avgScore}</span>
              <span class="text-[10px] text-slate-400">Skala 100</span>
            </div>
            <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 block">Ketuntasan (≥70)</span>
              <span class="text-xl font-black text-emerald-700 font-mono">${passPercentage}%</span>
              <span class="text-[10px] text-slate-400">${passedCount} dari ${totalExams} Tuntas</span>
            </div>
            <div class="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 block">Predikat Kualitatif</span>
              <span class="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-black border ${predicateBadge}">
                ${predicate.split(' ')[0]}
              </span>
              <span class="text-[10px] text-slate-500 block mt-0.5">${predicate.split('(')[1]?.replace(')', '') || 'Cukup'}</span>
            </div>
          </div>

          <!-- PERFORMANCE TABLE -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span>A. Daftar Capaian Hasil Asesmen CBT Per Bab</span>
            </h3>
            <div class="overflow-x-auto rounded-xl border border-slate-300">
              <table class="w-full text-left border-collapse">
                <thead class="bg-slate-100 border-b border-slate-300 text-[10px] uppercase font-bold text-slate-700">
                  <tr>
                    <th class="py-2.5 px-3 text-center w-10">No</th>
                    <th class="py-2.5 px-3 w-28">Mata Pelajaran</th>
                    <th class="py-2.5 px-3">Judul Bab Latihan</th>
                    <th class="py-2.5 px-3 text-center w-32">Tanggal Pengerjaan</th>
                    <th class="py-2.5 px-3 text-center w-20">Skor CBT</th>
                    <th class="py-2.5 px-3 text-center w-16">KKM</th>
                    <th class="py-2.5 px-3 text-center w-24">Keterangan</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  ${performanceRows}
                </tbody>
              </table>
            </div>
          </div>

          <!-- EVALUATION & TEACHER RECOMMENDATIONS (EDITABLE IN SCREEN PREVIEW) -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">
                B. Catatan Evaluasi & Rekomendasi Guru Pembimbing
              </h3>
              <span class="no-print text-[10px] text-slate-400 italic">Dapat diedit langsung sebelum mencetak</span>
            </div>
            <div class="p-4 rounded-xl border border-slate-300 bg-slate-50 text-xs leading-relaxed text-slate-800 space-y-2">
              <div class="font-semibold text-indigo-950 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span>Predikat Kualitatif: ${predicate}</span>
              </div>
              <textarea id="rapor-editable-notes" rows="3" class="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs focus:outline-none focus:border-indigo-600 leading-relaxed font-sans shadow-2xs resize-y">${defaultTeacherRemarks}</textarea>
            </div>
          </div>

          <!-- LEGAL SIGN-OFF BLOCK -->
          <div class="pt-4 border-t border-slate-300 grid grid-cols-2 gap-8 text-xs text-slate-800">
            <!-- Left Signature: Divisi Akademik -->
            <div class="text-center space-y-1">
              <p class="text-slate-500">Mengetahui,</p>
              <p class="font-bold text-slate-900">Kepala Divisi Akademik & LMS</p>
              <div class="h-20 flex items-center justify-center my-1 relative">
                <!-- Digital Signature & Official Stamp SVG Illustration -->
                <div class="w-24 h-16 border-2 border-indigo-700/60 rounded-full flex flex-col items-center justify-center text-[8px] font-bold text-indigo-800 rotate-[-8deg] p-1 shadow-2xs select-none">
                  <span class="uppercase tracking-widest text-[7px] text-amber-600">★ RESMI ★</span>
                  <span class="leading-none text-[8px]">THE ARICH STUDY</span>
                  <span class="text-[7px] font-mono text-slate-500">PUSAT ASESMEN</span>
                </div>
              </div>
              <p class="font-bold text-slate-900 underline underline-offset-2">Dr. Fahreza Kautsar, M.Sc.</p>
              <p class="text-[10px] text-slate-500 font-mono">NIP. 19880415 201201 1 002</p>
            </div>

            <!-- Right Signature: Guru Pembimbing -->
            <div class="text-center space-y-1">
              <p class="text-slate-500">Dikeluarkan di: Jakarta</p>
              <p class="text-slate-500">Pada tanggal: <span class="font-semibold text-slate-900">${formattedPrintDate}</span></p>
              <p class="font-bold text-slate-900 mt-1">Guru Pembimbing / Wali Akademik</p>
              <div class="h-16 flex items-center justify-center my-1">
                <span class="font-serif italic text-lg text-indigo-900 select-none opacity-80">The Arich Academic Team</span>
              </div>
              <p class="font-bold text-slate-900 underline underline-offset-2">Tim Akademik The Arich Study</p>
              <p class="text-[10px] text-slate-500 font-mono">ID Fasilitator: ARICH-FAC-2026</p>
            </div>
          </div>

          <!-- FOOTER WATERMARK -->
          <div class="pt-3 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-400">
            <span>Dokumen ini diterbitkan secara resmi melalui Sistem Evaluasi LMS The Arich Study Platform.</span>
            <span>Halaman 1 dari 1 (Dokumen Sah)</span>
          </div>

        </div>

      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * Triggers browser print dialog for the official report card.
   */
  function printReportCard() {
    window.print();
  }

  // ==========================================================================
  // 7. INJECT PRINT & WORKFLOW CSS STYLES
  // ==========================================================================
  function injectStyles() {
    const styleId = 'the-arich-student-exp-styles';
    if (document.getElementById(styleId)) return;

    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = `
      /* Subtopic Completed Card Styling */
      .subtopic-completed-card {
        border-color: rgba(16, 185, 129, 0.45) !important;
        background: linear-gradient(180deg, rgba(6, 78, 59, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%) !important;
        box-shadow: 0 10px 25px -5px rgba(6, 78, 59, 0.2) !important;
      }

      /* Dedicated A4 Print Stylesheet */
      @media print {
        /* Hide all page layout elements */
        body * {
          visibility: hidden !important;
        }

        /* Show only the report card sheet */
        #rapor-printable-sheet,
        #rapor-printable-sheet * {
          visibility: visible !important;
        }

        #rapor-printable-sheet {
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 8mm 12mm !important;
          background: #ffffff !important;
          color: #0f172a !important;
          box-shadow: none !important;
          border: none !important;
          border-radius: 0 !important;
        }

        .no-print {
          display: none !important;
        }

        /* Reset modal overlay when printing */
        #modal-official-student-rapor {
          position: static !important;
          background: transparent !important;
          padding: 0 !important;
          overflow: visible !important;
        }

        /* Replace editable textarea with clean printed text */
        #rapor-editable-notes {
          border: none !important;
          padding: 0 !important;
          box-shadow: none !important;
          resize: none !important;
        }

        @page {
          size: A4 portrait;
          margin: 8mm 10mm;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ==========================================================================
  // 8. LIFECYCLE HOOKS & INTEGRATION DECORATORS
  // ==========================================================================

  /**
   * Called whenever a chapter is opened in view-materi-detail.
   */
  function onChapterOpened(chapterId, grade) {
    const ch = findChapterDataById(chapterId);
    if (!ch) return;

    currentActiveChapter = ch;
    currentActiveGrade = grade || (window.currentStudent ? window.currentStudent.grade : '11');

    // 1. Feature 2: Save to recent reading
    saveRecentReading(ch, currentActiveGrade);

    // 2. Feature 1: Enhance subtopics with checklists and progress meter
    enhanceSubtopicsContainer(ch);
    updateChapterProgressMeter(ch.id);

    // 3. Feature 3: Enhance personal scratchpad
    enhancePersonalScratchpad(ch);
  }

  /**
   * Automatically hooks into existing functions on window.
   */
  function initializeHooks() {
    injectStyles();

    // Hook: openChapterDetail
    if (typeof window.openChapterDetail === 'function') {
      const originalOpenChapterDetail = window.openChapterDetail;
      window.openChapterDetail = function (chapterId, optionalGradeId) {
        originalOpenChapterDetail.apply(this, arguments);
        try {
          onChapterOpened(chapterId, optionalGradeId);
        } catch (e) {
          console.error('[StudentExp] Error enhancing chapter detail:', e);
        }
      };
    }

    // Hook: renderDashboardChapters
    if (typeof window.renderDashboardChapters === 'function') {
      const originalRenderDashboardChapters = window.renderDashboardChapters;
      window.renderDashboardChapters = function () {
        originalRenderDashboardChapters.apply(this, arguments);
        try {
          renderContinueReadingWidget();
          enhanceChapterCardsInContainer('dash-chapters-overview');
        } catch (e) {
          console.error('[StudentExp] Error in renderDashboardChapters hook:', e);
        }
      };
    }

    // Hook: renderMateriCatalog
    if (typeof window.renderMateriCatalog === 'function') {
      const originalRenderMateriCatalog = window.renderMateriCatalog;
      window.renderMateriCatalog = function () {
        originalRenderMateriCatalog.apply(this, arguments);
        try {
          enhanceChapterCardsInContainer('materi-catalog-grid');
        } catch (e) {
          console.error('[StudentExp] Error in renderMateriCatalog hook:', e);
        }
      };
    }

    // Hook: renderTeacherStudentsTable
    if (typeof window.renderTeacherStudentsTable === 'function') {
      const originalRenderTeacherStudentsTable = window.renderTeacherStudentsTable;
      window.renderTeacherStudentsTable = function (studentsList, submissionsList) {
        cacheTeacherData(studentsList, submissionsList);
        originalRenderTeacherStudentsTable.apply(this, arguments);
        try {
          enhanceTeacherStudentsTable();
          injectTeacherHeaderRaporButton();
        } catch (e) {
          console.error('[StudentExp] Error enhancing teacher students table:', e);
        }
      };
    }

    // Initial pass if DOM already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => {
        renderContinueReadingWidget();
        updateAllChapterCardBadges();
        injectTeacherHeaderRaporButton();
      }, 300);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        renderContinueReadingWidget();
        updateAllChapterCardBadges();
        injectTeacherHeaderRaporButton();
      });
    }
  }

  // ==========================================================================
  // 9. PUBLIC API EXPOSURE
  // ==========================================================================
  window.TheArichStudentExp = {
    // Feature 1
    toggleSubtopic,
    markAllSubtopics,
    getChapterProgress,
    updateChapterProgressMeter,
    enhanceSubtopicsContainer,
    updateAllChapterCardBadges,

    // Feature 2
    saveRecentReading,
    resumeRecentReading,
    dismissRecentReading,
    renderContinueReadingWidget,

    // Feature 3
    enhancePersonalScratchpad,
    toggleScratchpadCollapse,
    onScratchpadInput,
    insertScratchFormula,
    copyScratchpadNotes,
    clearScratchpadNotes,

    // Feature 4
    openReportModal,
    closeReportModal,
    printReportCard,
    cacheTeacherData,
    enhanceTeacherStudentsTable,

    // Audio & Init
    playGentleAudio,
    init: initializeHooks
  };

  // Run initialization
  initializeHooks();

})(window, document);
