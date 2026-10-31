/**
 * ==============================================================================
 * THE ARICH STUDY - SMART ERROR BANK & REMEDIAL LEARNING SUITE
 * ==============================================================================
 * File: the_arich_study/features_smart_error_bank.js
 * 
 * FITUR UTAMA:
 * 1. Perekaman Kesalahan Otomatis dari Latihan Bab & Penalaran Matematika UTBK.
 * 2. Penyimpanan Permanen Terikat Akun Siswa (Dual-Storage: LocalStorage + Cloud Sync Google Sheets).
 * 3. Halaman "Buku Catatan Salah": Filter Jenjang, Status (Perlu Diulang vs Tuntas), dan Pencarian.
 * 4. Mode "Latih Ulang Interaktif (Remedial Practice)": Siswa mencoba ulang soal yang salah
 *    dengan umpan balik langsung, perayaan XP (+25 XP), dan perubahan status menjadi 'TUNTAS'.
 * 5. Ekspor / Cetak Lembar Remedial Pribadi (PDF Print-Ready).
 * 6. Cloud Restore: Saat login di perangkat baru atau setelah bersihkan cache, seluruh histori
 *    dan bank salah ditarik kembali secara otomatis dari Cloud Akun.
 * ==============================================================================
 */

(function () {
  'use strict';

  const STORAGE_PREFIX = 'the_arich_error_bank_';
  const QUEUE_PREFIX = 'the_arich_error_queue_';

  function getCleanStudentName(student) {
    if (!student || !student.name) return 'guest_student';
    return String(student.name).trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
  }

  function getStorageKey(student) {
    return STORAGE_PREFIX + getCleanStudentName(student);
  }

  function getQueueKey(student) {
    return QUEUE_PREFIX + getCleanStudentName(student);
  }

  // State Manager
  const TheArichErrorBank = {
    activeFilterGrade: 'all',
    activeFilterStatus: 'all', // 'all', 'PERLU_DIULANG', 'TUNTAS'
    searchQuery: '',
    currentRemedialItem: null,
    isSyncing: false,

    // ============================================================================
    // 1. DATA ACCESS & STORAGE HELPERS
    // ============================================================================
    getMistakes(student) {
      const activeStudent = student || window.currentStudent;
      if (!activeStudent) return [];
      try {
        const raw = localStorage.getItem(getStorageKey(activeStudent));
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.warn('[ErrorBank] Gagal membaca data kesalahan lokal:', e);
        return [];
      }
    },

    saveMistakes(mistakes, student) {
      const activeStudent = student || window.currentStudent;
      if (!activeStudent) return;
      try {
        localStorage.setItem(getStorageKey(activeStudent), JSON.stringify(mistakes));
        this.updateBadgeCounter(activeStudent);
        this.updateDashboardWidget(activeStudent);
      } catch (e) {
        console.warn('[ErrorBank] Gagal menyimpan data kesalahan:', e);
      }
    },

    getStats(student) {
      const list = this.getMistakes(student);
      const needReview = list.filter(m => m.status === 'PERLU_DIULANG').length;
      const mastered = list.filter(m => m.status === 'TUNTAS').length;
      const total = list.length;
      const masteryRate = total > 0 ? Math.round((mastered / total) * 100) : 100;
      return { total, needReview, mastered, masteryRate };
    },

    // ============================================================================
    // 2. RECORDING HOOKS (DARI UJIAN BAB & PM UTBK)
    // ============================================================================
    recordFromExam(examRecord, questions, userAnswers) {
      if (!questions || !Array.isArray(questions) || !examRecord) return;
      const activeStudent = window.currentStudent;
      if (!activeStudent) return;

      const currentList = this.getMistakes(activeStudent);
      let newMistakesAdded = 0;
      const toSync = [];

      questions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const isCorrect = (userAns === q.correct);

        if (!isCorrect) {
          const qId = q.id || `${examRecord.chapterId || 'ch'}_q${idx + 1}`;
          const existingIdx = currentList.findIndex(m => m.questionId === qId);

          const qOptions = Array.isArray(q.options) ? q.options : [];
          const userAnsText = (userAns !== undefined && userAns !== null && qOptions[userAns]) 
            ? `${String.fromCharCode(65 + userAns)}. ${qOptions[userAns]}`
            : (userAns !== undefined && userAns !== null ? String(userAns) : 'Tidak Dijawab');
            
          const correctAnsText = (q.correct !== undefined && q.correct !== null && qOptions[q.correct])
            ? `${String.fromCharCode(65 + q.correct)}. ${qOptions[q.correct]}`
            : String(q.correct);

          const mistakeItem = {
            id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            studentName: activeStudent.name,
            timestamp: new Date().toLocaleString('id-ID'),
            source: 'bab_exam',
            gradeCode: examRecord.gradeCode || activeStudent.grade || '11',
            gradeName: examRecord.studentClass || `Kelas ${activeStudent.grade}`,
            chapterId: examRecord.chapterId || 'general',
            chapterTitle: examRecord.chapterTitle || 'Latihan Bab',
            questionId: qId,
            questionText: q.q || q.question || '',
            options: qOptions,
            userAnswer: userAns,
            userAnswerText: userAnsText,
            correctAnswer: q.correct,
            correctAnswerText: correctAnsText,
            explanation: q.explanation || 'Pembahasan belum tersedia.',
            quickTip: q.tips || '',
            status: 'PERLU_DIULANG',
            attempts: 1,
            lastAttemptAt: new Date().toLocaleString('id-ID')
          };

          if (existingIdx >= 0) {
            // Update percobaan & tandai perlu diulang kembali
            currentList[existingIdx].attempts = (currentList[existingIdx].attempts || 1) + 1;
            currentList[existingIdx].userAnswer = userAns;
            currentList[existingIdx].userAnswerText = userAnsText;
            currentList[existingIdx].status = 'PERLU_DIULANG';
            currentList[existingIdx].lastAttemptAt = mistakeItem.lastAttemptAt;
            toSync.push(currentList[existingIdx]);
          } else {
            currentList.unshift(mistakeItem);
            newMistakesAdded++;
            toSync.push(mistakeItem);
          }
        }
      });

      this.saveMistakes(currentList, activeStudent);

      if (toSync.length > 0) {
        this.syncMistakesToCloud(toSync, activeStudent);
      }

      console.log(`[ErrorBank] Rekap ujian selesai: ${toSync.length} kesalahan dicatat (${newMistakesAdded} baru).`);
    },

    recordFromPM(itemResults, PMState) {
      if (!itemResults || !Array.isArray(itemResults)) return;
      const activeStudent = window.currentStudent;
      if (!activeStudent) return;

      const currentList = this.getMistakes(activeStudent);
      const toSync = [];

      itemResults.forEach((item, idx) => {
        if (!item.isCorrect) {
          const q = item.question;
          const userAns = item.userAnswer;
          const qId = q.id || `pm_q_${idx + 1}`;
          const existingIdx = currentList.findIndex(m => m.questionId === qId);

          let userAnsText = 'Tidak Dijawab';
          let correctAnsText = '-';

          if (q.type === 'single_choice') {
            userAnsText = (userAns !== null && q.options && q.options[userAns]) 
              ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}` 
              : String(userAns || 'Kosong');
            correctAnsText = (q.correct !== null && q.options && q.options[q.correct]) 
              ? `${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}` 
              : String(q.correct);
          } else if (q.type === 'numeric_input') {
            userAnsText = userAns !== null ? String(userAns) : 'Kosong';
            correctAnsText = String(q.correctNumeric);
          } else if (q.type === 'complex_tf') {
            userAnsText = Array.isArray(userAns) ? userAns.map(v => v ? 'B' : 'S').join(', ') : 'Kosong';
            correctAnsText = Array.isArray(q.statements) ? q.statements.map(s => s.correct ? 'B' : 'S').join(', ') : '-';
          }

          const stimulusSnippet = q.stimulusTitle ? `[Stimulus: ${q.stimulusTitle}] ` : '';

          const mistakeItem = {
            id: `err_pm_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            studentName: activeStudent.name,
            timestamp: new Date().toLocaleString('id-ID'),
            source: 'pm_utbk',
            gradeCode: 'UTBK',
            gradeName: 'Penalaran Matematika UTBK',
            chapterId: 'utbk_pm',
            chapterTitle: `PM UTBK • ${q.domain || 'Penalaran'}`,
            questionId: qId,
            questionText: stimulusSnippet + (q.question || ''),
            options: q.options || [],
            type: q.type || 'single_choice',
            correctNumeric: q.correctNumeric,
            numericTolerance: q.numericTolerance || 0,
            numericUnit: q.numericUnit || '',
            statements: q.statements || [],
            userAnswer: userAns,
            userAnswerText: userAnsText,
            correctAnswer: q.correct,
            correctAnswerText: correctAnsText,
            explanation: q.explanation || 'Pembahasan analitis belum tersedia.',
            quickTip: q.quickTip || '',
            status: 'PERLU_DIULANG',
            attempts: 1,
            lastAttemptAt: new Date().toLocaleString('id-ID')
          };

          if (existingIdx >= 0) {
            currentList[existingIdx].attempts = (currentList[existingIdx].attempts || 1) + 1;
            currentList[existingIdx].userAnswer = userAns;
            currentList[existingIdx].userAnswerText = userAnsText;
            currentList[existingIdx].status = 'PERLU_DIULANG';
            currentList[existingIdx].lastAttemptAt = mistakeItem.lastAttemptAt;
            toSync.push(currentList[existingIdx]);
          } else {
            currentList.unshift(mistakeItem);
            toSync.push(mistakeItem);
          }
        }
      });

      this.saveMistakes(currentList, activeStudent);

      if (toSync.length > 0) {
        this.syncMistakesToCloud(toSync, activeStudent);
      }

      console.log(`[ErrorBank] Rekap PM UTBK selesai: ${toSync.length} kesalahan dicatat.`);
    },

    // ============================================================================
    // 3. CLOUD SYNCHRONIZATION & MULTI-DEVICE RESTORE
    // ============================================================================
    getWebhookUrl() {
      return (window.THE_ARICH_CONFIG && window.THE_ARICH_CONFIG.cloudWebhookUrl)
        || localStorage.getItem('the_arich_cloud_webhook')
        || '';
    },

    syncMistakesToCloud(mistakesToSync, student) {
      const webhook = this.getWebhookUrl();
      const activeStudent = student || window.currentStudent;
      if (!webhook || !activeStudent || !mistakesToSync || mistakesToSync.length === 0) return;

      const payload = {
        action: 'sync_mistakes',
        studentName: activeStudent.name,
        mistakes: mistakesToSync
      };

      try {
        fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        }).then(r => r.json()).then(res => {
          if (res && res.status === 'success') {
            console.log('[ErrorBank] Berhasil sinkron ke Google Sheet Cloud:', res);
          }
        }).catch(err => {
          console.warn('[ErrorBank] Cloud sync tertunda (offline/timeout):', err);
        });
      } catch (e) {
        console.warn('[ErrorBank] Gagal mengirim sync payload:', e);
      }
    },

    syncStudentAccount(studentName) {
      const webhook = this.getWebhookUrl();
      const name = studentName || (window.currentStudent ? window.currentStudent.name : '');
      if (!webhook || !name) return;

      this.isSyncing = true;
      this.updateSyncIndicator(true);

      const payload = {
        action: 'get_student_data',
        name: name,
        studentName: name
      };

      fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => {
        this.isSyncing = false;
        this.updateSyncIndicator(false);

        if (data && data.status === 'success') {
          console.log('[ErrorBank] Cloud account data pulled successfully:', data);

          // 1. Merge Submissions History
          if (Array.isArray(data.submissions) && data.submissions.length > 0) {
            try {
              const localDb = JSON.parse(localStorage.getItem('the_arich_submissions_db') || '[]');
              const existingIds = new Set(localDb.map(r => r.timestamp + '_' + r.displaySubject));
              let addedSubmissions = 0;

              data.submissions.forEach(sub => {
                const subKey = sub.timestamp + '_' + sub.displaySubject;
                if (!existingIds.has(subKey)) {
                  localDb.push({
                    id: Date.now() + Math.random(),
                    timestamp: sub.timestamp,
                    studentName: sub.studentName,
                    studentClass: sub.studentClass,
                    displaySubject: sub.displaySubject,
                    chapterTitle: sub.displaySubject,
                    correctCount: sub.correctCount,
                    totalQuestions: sub.totalQuestions,
                    score: sub.score,
                    passed: sub.passed,
                    syncedToCloud: true
                  });
                  addedSubmissions++;
                }
              });

              if (addedSubmissions > 0) {
                localStorage.setItem('the_arich_submissions_db', JSON.stringify(localDb));
              }
            } catch (e) {
              console.warn('[ErrorBank] Gagal merge riwayat latihan:', e);
            }
          }

          // 2. Merge Mistakes Bank
          if (Array.isArray(data.mistakes) && data.mistakes.length > 0) {
            const localMistakes = this.getMistakes({ name: name });
            const existingQIds = new Map();
            localMistakes.forEach((m, idx) => existingQIds.set(m.questionId, idx));

            data.mistakes.forEach(cloudM => {
              if (existingQIds.has(cloudM.questionId)) {
                // Sinkronkan status tuntas dari cloud jika ada pembaruan
                const idx = existingQIds.get(cloudM.questionId);
                if (cloudM.status === 'TUNTAS' && localMistakes[idx].status !== 'TUNTAS') {
                  localMistakes[idx].status = 'TUNTAS';
                }
              } else {
                localMistakes.push({
                  id: `err_cloud_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
                  studentName: cloudM.studentName,
                  timestamp: cloudM.timestamp || new Date().toLocaleString('id-ID'),
                  source: 'cloud_sync',
                  gradeCode: cloudM.gradeName || '11',
                  gradeName: cloudM.gradeName || 'Latihan',
                  chapterId: 'cloud_ch',
                  chapterTitle: cloudM.chapterTitle || 'Bab Belajar',
                  questionId: cloudM.questionId,
                  questionText: cloudM.questionText || '',
                  options: [],
                  userAnswer: cloudM.userAnswer,
                  userAnswerText: cloudM.userAnswer,
                  correctAnswer: cloudM.correctAnswer,
                  correctAnswerText: cloudM.correctAnswer,
                  explanation: cloudM.explanation || 'Pembahasan dari Cloud.',
                  quickTip: '',
                  status: cloudM.status || 'PERLU_DIULANG',
                  attempts: cloudM.attempts || 1,
                  lastAttemptAt: cloudM.lastAttemptAt || cloudM.timestamp
                });
              }
            });

            this.saveMistakes(localMistakes, { name: name });
          }

          // 3. Re-render View jika sedang terbuka
          const viewEl = document.getElementById('view-error-bank');
          if (viewEl && !viewEl.classList.contains('hidden')) {
            this.renderErrorBankView();
          }
        }
      })
      .catch(err => {
        this.isSyncing = false;
        this.updateSyncIndicator(false);
        console.warn('[ErrorBank] Cloud account pull timeout/error:', err);
      });
    },

    updateSyncIndicator(syncing) {
      const syncBtn = document.getElementById('btn-error-bank-sync');
      if (!syncBtn) return;
      if (syncing) {
        syncBtn.innerHTML = `
          <svg class="animate-spin w-3.5 h-3.5 text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span class="text-xs font-semibold text-rose-300">Menyinkronkan Akun...</span>
        `;
      } else {
        syncBtn.innerHTML = `
          <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-400 transition"></i>
          <span class="text-xs font-semibold text-slate-300 group-hover:text-white transition">Sinkron Cloud Akun</span>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    },

    // ============================================================================
    // 4. UI BADGE & DASHBOARD WIDGET
    // ============================================================================
    updateBadgeCounter(student) {
      const stats = this.getStats(student);
      const sbBadge = document.getElementById('sb-error-bank-badge');
      if (sbBadge) {
        if (stats.needReview > 0) {
          sbBadge.textContent = stats.needReview;
          sbBadge.classList.remove('hidden');
        } else {
          sbBadge.classList.add('hidden');
        }
      }

      const mobBadge = document.getElementById('mob-error-bank-badge');
      if (mobBadge) {
        if (stats.needReview > 0) {
          mobBadge.textContent = stats.needReview;
          mobBadge.classList.remove('hidden');
        } else {
          mobBadge.classList.add('hidden');
        }
      }
    },

    updateDashboardWidget(student) {
      const container = document.getElementById('dash-error-bank-widget');
      if (!container) return;

      const stats = this.getStats(student);
      if (stats.total === 0) {
        container.innerHTML = `
          <div class="clean-card rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
            <div class="flex items-center space-x-3.5">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <i data-lucide="shield-check" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white">Buku Catatan Salah Bersih!</h4>
                <p class="text-xs text-slate-400">Belum ada soal yang keliru atau semua remedial telah tuntas 100%.</p>
              </div>
            </div>
            <button onclick="window.TheArichErrorBank.openView()" class="px-3.5 py-1.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition">
              Buka Catatan
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="clean-card rounded-2xl p-5 border border-rose-500/30 bg-rose-950/10 hover:border-rose-500/50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center space-x-3.5">
              <div class="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400 flex items-center justify-center font-black text-sm shrink-0">
                ${stats.needReview}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="text-sm font-bold text-white">Buku Catatan Salah & Remedial</h4>
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    ${stats.needReview} Perlu Diulang
                  </span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5">
                  Tingkat Ketuntasan Remedial: <span class="font-bold text-emerald-400">${stats.masteryRate}%</span> (${stats.mastered} dari ${stats.total} soal telah dikuasai).
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="window.TheArichErrorBank.openView()" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/20 transition cursor-pointer">
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                <span>Latih Ulang Sekarang</span>
              </button>
            </div>
          </div>
        `;
      }
      if (window.lucide) window.lucide.createIcons();
    },

    // ============================================================================
    // 5. VIEW CONTROLLER & RENDERING (#view-error-bank)
    // ============================================================================
    openView() {
      if (window.switchView) {
        window.switchView('error-bank');
      } else {
        const viewEl = document.getElementById('view-error-bank');
        if (viewEl) {
          document.querySelectorAll('[id^="view-"]').forEach(v => v.classList.add('hidden'));
          viewEl.classList.remove('hidden');
          this.renderErrorBankView();
        }
      }
    },

    renderErrorBankView() {
      const container = document.getElementById('error-bank-cards-container');
      const stats = this.getStats();
      const activeStudent = window.currentStudent || { name: 'Siswa' };

      // Update KPI Header
      const elTotal = document.getElementById('eb-stat-total');
      const elNeed = document.getElementById('eb-stat-need-review');
      const elMastered = document.getElementById('eb-stat-mastered');
      const elRate = document.getElementById('eb-stat-rate');
      const elProgressBar = document.getElementById('eb-stat-progress-bar');
      const elStudentName = document.getElementById('eb-student-name-header');

      if (elTotal) elTotal.textContent = stats.total;
      if (elNeed) elNeed.textContent = stats.needReview;
      if (elMastered) elMastered.textContent = stats.mastered;
      if (elRate) elRate.textContent = `${stats.masteryRate}%`;
      if (elProgressBar) elProgressBar.style.width = `${stats.masteryRate}%`;
      if (elStudentName) elStudentName.textContent = activeStudent.name;

      if (!container) return;

      let allMistakes = this.getMistakes();

      // Apply Grade Filter
      if (this.activeFilterGrade !== 'all') {
        allMistakes = allMistakes.filter(m => {
          if (this.activeFilterGrade === 'smp') return ['7', '8', '9'].includes(String(m.gradeCode));
          if (this.activeFilterGrade === 'sma') return ['10', '11', '12'].includes(String(m.gradeCode));
          if (this.activeFilterGrade === 'utbk') return m.source === 'pm_utbk' || String(m.gradeCode).includes('UTBK');
          return String(m.gradeCode) === this.activeFilterGrade;
        });
      }

      // Apply Status Filter
      if (this.activeFilterStatus !== 'all') {
        allMistakes = allMistakes.filter(m => m.status === this.activeFilterStatus);
      }

      // Apply Search Query
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        allMistakes = allMistakes.filter(m => 
          (m.questionText && m.questionText.toLowerCase().includes(q)) ||
          (m.chapterTitle && m.chapterTitle.toLowerCase().includes(q)) ||
          (m.gradeName && m.gradeName.toLowerCase().includes(q))
        );
      }

      if (allMistakes.length === 0) {
        container.innerHTML = `
          <div class="clean-card rounded-2xl p-12 text-center border border-slate-800 space-y-3">
            <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto text-xl font-bold">
              <i data-lucide="check-circle" class="w-7 h-7"></i>
            </div>
            <h3 class="text-base font-bold text-white">Tidak Ada Catatan Salah yang Sesuai</h3>
            <p class="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              ${stats.total === 0 
                ? 'Luar biasa! Kamu belum melakukan kesalahan atau belum mengerjakan latihan. Terus tingkatkan prestasimu!'
                : 'Tidak ada soal yang cocok dengan filter atau kata kunci yang dipilih. Coba ganti filter di atas.'}
            </p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
      }

      container.innerHTML = allMistakes.map((m, idx) => {
        const isMastered = (m.status === 'TUNTAS');
        const badgeBorder = isMastered ? 'border-emerald-500/40' : 'border-rose-500/40';
        const badgeBg = isMastered ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300';
        const cardGlow = isMastered ? 'hover:border-emerald-500/50' : 'hover:border-rose-500/50';

        return `
          <div class="clean-card rounded-2xl p-5 sm:p-6 border border-slate-800 ${cardGlow} transition space-y-4 shadow-xl">
            <!-- Header Card -->
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-2.5 py-1 rounded-xl text-xs font-black ${badgeBg} border ${badgeBorder}">
                  ${isMastered ? '✅ TUNTAS / DIKUASAI' : '⚠️ PERLU DIULANG'}
                </span>
                <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-dark-850 text-indigo-300 border border-indigo-500/30">
                  ${m.chapterTitle || 'Latihan Bab'}
                </span>
                <span class="text-[11px] text-slate-500">
                  Dicatat: ${m.timestamp}
                </span>
              </div>
              <div class="text-[11px] font-semibold text-slate-400">
                Percobaan: <span class="text-white font-bold">${m.attempts || 1}x</span>
              </div>
            </div>

            <!-- Teks Soal -->
            <div class="text-sm sm:text-base text-slate-100 font-medium leading-relaxed overflow-x-auto eb-question-body">
              ${m.questionText}
            </div>

            <!-- Rekap Jawaban Siswa vs Kunci -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-dark-900/90 border border-slate-800/90 text-xs">
              <div class="space-y-1">
                <div class="text-rose-400 font-bold flex items-center gap-1.5">
                  <i data-lucide="x-circle" class="w-3.5 h-3.5"></i>
                  <span>Jawaban Terakhir Siswa:</span>
                </div>
                <div class="text-slate-300 pl-5 font-mono break-words">
                  ${m.userAnswerText || 'Tidak Dijawab'}
                </div>
              </div>
              <div class="space-y-1">
                <div class="text-emerald-400 font-bold flex items-center gap-1.5">
                  <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                  <span>Kunci & Petunjuk:</span>
                </div>
                <div class="text-slate-300 pl-5 font-mono break-words">
                  ${isMastered ? (m.correctAnswerText || 'Terselesaikan') : 'Terkunci (Coba Latih Ulang)'}
                </div>
              </div>
            </div>

            <!-- Accordion Pembahasan (Bisa Dibuka Tutup) -->
            <details class="group rounded-xl bg-dark-900/50 border border-slate-800 text-xs overflow-hidden">
              <summary class="px-4 py-2.5 cursor-pointer font-bold text-indigo-300 hover:text-white flex items-center justify-between transition select-none">
                <span class="flex items-center gap-2">
                  <i data-lucide="lightbulb" class="w-4 h-4 text-amber-400"></i>
                  <span>Lihat Trik & Pembahasan Detail</span>
                </span>
                <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div class="px-4 py-3 border-t border-slate-800 text-slate-300 leading-relaxed space-y-2">
                ${m.quickTip ? `
                  <div class="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs font-medium">
                    ⚡ <strong>Trik Cepat:</strong> ${m.quickTip}
                  </div>
                ` : ''}
                <div class="text-xs eb-explanation-body">
                  ${m.explanation || 'Pembahasan bertahap tersedia saat melatih ulang.'}
                </div>
              </div>
            </details>

            <!-- Action Buttons -->
            <div class="flex items-center justify-end gap-2.5 pt-2">
              <button onclick="window.TheArichErrorBank.startRemedial('${m.questionId}')" class="px-4 py-2 rounded-xl bg-gradient-to-r ${isMastered ? 'from-slate-700 to-slate-800 text-slate-200' : 'from-rose-600 via-red-600 to-orange-600 text-white shadow-lg shadow-rose-600/20'} font-bold text-xs flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer">
                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                <span>${isMastered ? 'Latih Ulang Lagi' : '🎯 Latih Ulang Soal Ini'}</span>
              </button>
            </div>
          </div>
        `;
      }).join('');

      if (window.lucide) window.lucide.createIcons();
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
          console.warn('[ErrorBank] KaTeX rendering error:', e);
        }
      }
    },

    setFilterGrade(grade) {
      this.activeFilterGrade = grade;
      document.querySelectorAll('.eb-filter-grade-btn').forEach(b => {
        if (b.dataset.grade === grade) {
          b.className = 'eb-filter-grade-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-md transition';
        } else {
          b.className = 'eb-filter-grade-btn px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-dark-900 border border-slate-800 hover:text-white transition';
        }
      });
      this.renderErrorBankView();
    },

    setFilterStatus(status) {
      this.activeFilterStatus = status;
      document.querySelectorAll('.eb-filter-status-btn').forEach(b => {
        if (b.dataset.status === status) {
          b.className = 'eb-filter-status-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white shadow-md transition';
        } else {
          b.className = 'eb-filter-status-btn px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-dark-900 border border-slate-800 hover:text-white transition';
        }
      });
      this.renderErrorBankView();
    },

    handleSearch(val) {
      this.searchQuery = val;
      this.renderErrorBankView();
    },

    // ============================================================================
    // 6. INTERACTIVE REMEDIAL MODAL (RE-TEST FLOW)
    // ============================================================================
    startRemedial(questionId) {
      const list = this.getMistakes();
      const item = list.find(m => m.questionId === questionId);
      if (!item) return;

      this.currentRemedialItem = item;
      const modal = document.getElementById('modal-remedial-practice');
      if (!modal) return;

      // Populate Modal Content
      document.getElementById('rem-modal-chapter').textContent = item.chapterTitle || 'Latihan Soal';
      document.getElementById('rem-modal-question').innerHTML = item.questionText;
      
      const optContainer = document.getElementById('rem-modal-options-container');
      const feedbackEl = document.getElementById('rem-modal-feedback');
      feedbackEl.classList.add('hidden');
      feedbackEl.innerHTML = '';

      // Check format (single choice vs numeric input)
      if (item.options && item.options.length > 0) {
        optContainer.innerHTML = `
          <div class="space-y-2.5">
            ${item.options.map((opt, idx) => `
              <label class="clean-card rounded-xl p-3 border border-slate-800 hover:border-indigo-500/60 cursor-pointer flex items-center gap-3 group transition">
                <input type="radio" name="rem-selected-option" value="${idx}" class="w-4 h-4 text-indigo-600 focus:ring-0">
                <span class="w-6 h-6 rounded-lg bg-dark-850 group-hover:bg-indigo-600 group-hover:text-white text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 transition">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <span class="text-xs sm:text-sm text-slate-200 font-medium">${opt}</span>
              </label>
            `).join('')}
          </div>
        `;
      } else {
        // Numeric input fallback
        optContainer.innerHTML = `
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-400">Ketik jawaban akhir Anda:</label>
            <input type="text" id="rem-numeric-input" placeholder="Misal: 42" class="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-indigo-500">
          </div>
        `;
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
      if (window.renderMathInElement) {
        try {
          window.renderMathInElement(document.getElementById('rem-modal-question'), {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
          window.renderMathInElement(optContainer, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        } catch (e) {}
      }
    },

    closeRemedialModal() {
      const modal = document.getElementById('modal-remedial-practice');
      if (modal) modal.classList.add('hidden');
      this.currentRemedialItem = null;
    },

    submitRemedialAnswer() {
      if (!this.currentRemedialItem) return;
      const item = this.currentRemedialItem;
      const feedbackEl = document.getElementById('rem-modal-feedback');
      let isCorrect = false;

      if (item.options && item.options.length > 0) {
        const checked = document.querySelector('input[name="rem-selected-option"]:checked');
        if (!checked) {
          alert('Silakan pilih salah satu opsi jawaban terlebih dahulu.');
          return;
        }
        const userChoice = parseInt(checked.value, 10);
        isCorrect = (userChoice === item.correctAnswer);
      } else {
        const numInput = document.getElementById('rem-numeric-input');
        if (!numInput || !numInput.value.trim()) {
          alert('Silakan ketik jawaban terlebih dahulu.');
          return;
        }
        const val = parseFloat(numInput.value.trim().replace(',', '.'));
        const correctVal = parseFloat(item.correctAnswer);
        isCorrect = Math.abs(val - correctVal) <= (item.numericTolerance || 0.05);
      }

      const activeStudent = window.currentStudent || { name: 'Siswa' };
      const currentList = this.getMistakes(activeStudent);
      const targetIdx = currentList.findIndex(m => m.questionId === item.questionId);

      if (isCorrect) {
        // PERAYAAN BENAR!
        if (targetIdx >= 0) {
          currentList[targetIdx].status = 'TUNTAS';
          currentList[targetIdx].attempts = (currentList[targetIdx].attempts || 1) + 1;
          currentList[targetIdx].lastAttemptAt = new Date().toLocaleString('id-ID');
        }
        this.saveMistakes(currentList, activeStudent);
        this.syncMistakesToCloud([currentList[targetIdx]], activeStudent);

        // Tambah XP
        if (window.addStudentXP) {
          window.addStudentXP(25, `Remedial Tuntas: ${item.chapterTitle}`);
        }

        // Confetti
        if (window.confetti) {
          window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }

        feedbackEl.className = 'p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-semibold space-y-2';
        feedbackEl.innerHTML = `
          <div class="flex items-center gap-2 text-emerald-300 font-extrabold text-sm">
            <i data-lucide="award" class="w-5 h-5 text-emerald-400"></i>
            <span>Luar Biasa, Jawaban Anda Benar! (+25 XP)</span>
          </div>
          <p class="text-xs text-slate-300 font-normal leading-relaxed">
            Status soal ini telah diperbarui menjadi <strong class="text-emerald-400">TUNTAS</strong> dan otomatis tersinkronkan ke Cloud Akun Anda.
          </p>
          <div class="pt-2 flex justify-end">
            <button onclick="window.TheArichErrorBank.closeRemedialModal(); window.TheArichErrorBank.renderErrorBankView();" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition">
              Selesai & Tutup
            </button>
          </div>
        `;
        feedbackEl.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();

      } else {
        // JAWABAN MASIH BELUM TEPAT (TIDAK MENGHAKIMI)
        if (targetIdx >= 0) {
          currentList[targetIdx].attempts = (currentList[targetIdx].attempts || 1) + 1;
          currentList[targetIdx].lastAttemptAt = new Date().toLocaleString('id-ID');
        }
        this.saveMistakes(currentList, activeStudent);

        feedbackEl.className = 'p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-semibold space-y-2';
        feedbackEl.innerHTML = `
          <div class="flex items-center gap-2 text-rose-300 font-extrabold text-sm">
            <i data-lucide="alert-circle" class="w-5 h-5 text-rose-400"></i>
            <span>Jawaban Masih Belum Tepat</span>
          </div>
          <p class="text-xs text-slate-300 font-normal leading-relaxed">
            Jangan menyerah! Coba baca petunjuk di bawah ini dan teliti kembali langkah hitungan Anda:
          </p>
          <div class="p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-amber-300 text-xs font-mono">
            💡 ${item.quickTip || item.explanation ? (item.quickTip || 'Periksa kembali tanda minus atau langkah penyederhanaan aljabar.') : 'Periksa kembali konsep dasarnya.'}
          </div>
        `;
        feedbackEl.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    },

    // ============================================================================
    // 7. PRINT / PDF EXPORT WORKSHEET
    // ============================================================================
    printWorksheet() {
      const activeStudent = window.currentStudent || { name: 'Siswa' };
      const allMistakes = this.getMistakes().filter(m => m.status === 'PERLU_DIULANG');

      if (allMistakes.length === 0) {
        alert('Semua soal dalam catatan salah Anda sudah tuntas! Tidak ada soal yang perlu dicetak.');
        return;
      }

      window.print();
    },

    // ============================================================================
    // 8. INITIALIZATION
    // ============================================================================
    init() {
      console.log('[TheArichErrorBank] Initialized successfully.');
      if (window.currentStudent) {
        this.updateBadgeCounter(window.currentStudent);
        this.updateDashboardWidget(window.currentStudent);
        // Otomatis sinkronkan histori akun dari Cloud
        this.syncStudentAccount(window.currentStudent.name);
      }
    }
  };

  // Expose to window
  window.TheArichErrorBank = TheArichErrorBank;

  // Auto-init on DOMContentLoaded or immediate if already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TheArichErrorBank.init());
  } else {
    TheArichErrorBank.init();
  }

})();
