
    const USER_KEY = 'the_arich_user_session';
    const DB_KEY = 'the_arich_submissions_db';
    const ACCOUNTS_KEY = 'the_arich_registered_students';
    const TEACHER_PIN = '010822';
    const ANSWER_KEY_PIN = '090305';

    function escapeHtml(value) {
      return String(value == null ? '' : value).replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      })[char]);
    }
    window.escapeHtml = escapeHtml;

    function sanitizeRichHtml(value) {
      const allowedTags = new Set(['P', 'BR', 'STRONG', 'EM', 'B', 'I', 'U', 'SUP', 'SUB', 'SPAN', 'DIV', 'UL', 'OL', 'LI', 'BLOCKQUOTE', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HR', 'CODE', 'PRE']);
      const source = new DOMParser().parseFromString(String(value == null ? '' : value), 'text/html');
      const cleanNode = node => {
        if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.nodeValue || '');
        if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();
        if (!allowedTags.has(node.tagName)) return document.createTextNode(node.textContent || '');
        const clean = document.createElement(node.tagName.toLowerCase());
        const className = node.getAttribute('class');
        if (className) clean.setAttribute('class', className.split(/\s+/).map(token => token.replace(/[^a-zA-Z0-9_:./%\[\]-]/g, '')).filter(Boolean).join(' '));
        if (node.tagName === 'TD' || node.tagName === 'TH') {
          for (const attr of ['colspan', 'rowspan']) {
            const value = Number(node.getAttribute(attr));
            if (Number.isInteger(value) && value > 0 && value <= 20) clean.setAttribute(attr, String(value));
          }
        }
        node.childNodes.forEach(child => clean.appendChild(cleanNode(child)));
        return clean;
      };
      const result = document.createElement('div');
      source.body.childNodes.forEach(child => result.appendChild(cleanNode(child)));
      return result.innerHTML;
    }
    window.sanitizeRichHtml = sanitizeRichHtml;

    let currentStudent = null;
    let currentGradeData = null;
    let currentView = 'dashboard';
    window.currentView = 'dashboard';
    let isTeacherUnlocked = false;
    window.isTeacherUnlocked = false;
    let isAnswerKeyUnlocked = false;
    let isSolutionVisible = false;
    let isAudio = true;
    let audioCtx = null;

    let activeTeacherTab = 'students';

    // Exam State
    let currentExamChapter = null;
    let activeQuestions = [];
    let currentQIdx = 0;
    let userAnswers = [];
    let userDoubts = [];
    let examTimerInterval = null;
    let examSecondsLeft = 30 * 60;

    // ----------------------------------------------------
    // STARTUP / SESSION & ACCOUNT PERSISTENCE
    // ----------------------------------------------------
    // Student profiles and progress stay on this device. No personal data is sent to a server.
    function saveRegisteredStudent(student) {
      if (!student || !student.name || student.isGuest) return;
      try {
        const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
        const idx = accounts.findIndex(a => String(a.name || '').toLowerCase() === student.name.toLowerCase());
        const now = new Date().toLocaleString('id-ID');
        if (idx >= 0) accounts[idx] = { ...accounts[idx], ...student, lastLogin: Date.now(), lastActive: now };
        else accounts.unshift({ ...student, registeredAt: now, lastLogin: Date.now(), lastActive: now });
        localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      } catch (error) {
        console.warn('[TheArichStudy] Profil lokal tidak dapat disimpan:', error);
      }
    }

    function renderSavedAccounts() {
      const container = document.getElementById('gate-saved-accounts-list');
      const section = document.getElementById('gate-saved-accounts-section');
      if (!container || !section) return;
      let accounts = [];
      let db = [];
      try {
        accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
        db = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      } catch (error) {
        console.warn('[TheArichStudy] Profil tersimpan tidak dapat dibaca:', error);
      }
      accounts = Array.isArray(accounts) ? accounts.filter(acc => acc && typeof acc === 'object' && typeof acc.name === 'string') : [];
      db = Array.isArray(db) ? db.filter(row => row && typeof row === 'object') : [];
      if (!Array.isArray(accounts) || accounts.length === 0) {
        section.classList.add('hidden');
        container.replaceChildren();
        return;
      }
      section.classList.remove('hidden');
      container.innerHTML = accounts.map((acc, index) => {
        const safeName = escapeHtml(acc.name || 'Siswa');
        const gradeName = escapeHtml((window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[acc.grade])
          ? window.ALL_GRADES_DATA[acc.grade].gradeName
          : 'Kelas ' + (acc.grade || '-'));
        const count = Array.isArray(db) ? db.filter(r => String(r.studentName || '').toLowerCase() === String(acc.name || '').toLowerCase()).length : 0;
        return '<button type="button" data-profile-index="' + index + '" class="w-full text-left p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-indigo-500 hover:bg-dark-850 cursor-pointer flex items-center justify-between group transition">' +
          '<span class="flex items-center space-x-2.5 min-w-0"><span class="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 font-bold flex items-center justify-center text-xs group-hover:bg-indigo-600 group-hover:text-white transition shrink-0">' + escapeHtml((acc.name || 'S').charAt(0).toUpperCase()) + '</span>' +
          '<span class="min-w-0"><span class="block text-xs font-bold text-white group-hover:text-indigo-300 transition truncate">' + safeName + '</span><span class="block text-[10px] text-slate-400">' + gradeName + '</span></span></span>' +
          '<span class="text-right shrink-0"><span class="text-[10px] px-2 py-0.5 rounded bg-dark-800 text-slate-300 border border-slate-700">' + count + ' Riwayat Latihan</span></span></button>';
      }).join('');
      container.querySelectorAll('[data-profile-index]').forEach(button => {
        button.addEventListener('click', () => loginSavedAccountByIndex(Number(button.dataset.profileIndex)));
      });
      lucide.createIcons();
    }

    function loginSavedAccountByIndex(index) {
      const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
      const acc = Array.isArray(accounts) ? accounts[index] : null;
      if (!acc) return;
      currentStudent = { name: String(acc.name || 'Siswa').slice(0, 32), grade: String(acc.grade || '11'), school: '' };
      window.currentStudent = currentStudent;
      localStorage.setItem(USER_KEY, JSON.stringify(currentStudent));
      saveRegisteredStudent(currentStudent);
      loadGradeCurriculum(currentStudent.grade);
      updateHeaderProfile();
      if (window.TheArichErrorBank) window.TheArichErrorBank.updateBadgeCounter(currentStudent);
      switchView('dashboard');
    }

    function deleteLocalStudentData() {
      if (!confirm('Hapus profil, nilai, catatan, dan progres belajar dari browser ini? Tindakan ini tidak bisa dibatalkan.')) return;
      const preserve = new Set(['the_arich_theme', 'the_arich_pwa_installed', 'THE_ARICH_CACHE_VER', 'arich_font_size']);
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && !preserve.has(key) && (key.startsWith('the_arich_') || key.startsWith('arich_'))) localStorage.removeItem(key);
      }
      currentStudent = null;
      currentGradeData = null;
      window.currentStudent = null;
      window.currentGradeData = null;
      renderSavedAccounts();
      updateHeaderProfile();
      switchView('student-gate');
    }

    function initApp() {
      const APP_CACHE_VERSION = '1793288295';
      if (localStorage.getItem('THE_ARICH_CACHE_VER') !== APP_CACHE_VERSION) {
        localStorage.setItem('THE_ARICH_CACHE_VER', APP_CACHE_VERSION);
      }
      localStorage.removeItem('the_arich_gsheet_webhook');
      localStorage.removeItem('the_arich_cloud_webhook');
      updateXPDisplay();
      const stored = localStorage.getItem(USER_KEY);
      if (stored) {
        try {
          currentStudent = JSON.parse(stored);
          window.currentStudent = currentStudent;
          loadGradeCurriculum(currentStudent.grade);
          updateHeaderProfile();
          switchView('dashboard');
          return;
        } catch (error) {
          localStorage.removeItem(USER_KEY);
        }
      }
      renderSavedAccounts();
      switchView('student-gate');
    }

    function handleStudentLogin(event) {
      event.preventDefault();
      const name = String(document.getElementById('reg-name').value || '').trim().slice(0, 32);
      const grade = String(document.getElementById('reg-grade').value || '11');
      const isGuest = !name;
      currentStudent = { name: name || 'Tamu', grade: grade, school: '', isGuest: isGuest };
      window.currentStudent = currentStudent;
      if (isGuest) localStorage.removeItem(USER_KEY);
      else {
        localStorage.setItem(USER_KEY, JSON.stringify(currentStudent));
        saveRegisteredStudent(currentStudent);
      }
      loadGradeCurriculum(grade);
      updateHeaderProfile();
      switchView('dashboard');
    }

    function resolveChapterQuestions(chId) {
      if (!window.SOAL_BANK_PER_BAB || !chId) return null;
      if (window.SOAL_BANK_PER_BAB[chId] && window.SOAL_BANK_PER_BAB[chId].length > 0) {
        return window.SOAL_BANK_PER_BAB[chId];
      }
      const cleanId = chId.toLowerCase().replace(/[^a-z0-9]/g, '');
      for (const [k, qList] of Object.entries(window.SOAL_BANK_PER_BAB)) {
        const cleanK = k.toLowerCase().replace(/[^a-z0-9]/g, '');
        if ((cleanId.includes(cleanK) || cleanK.includes(cleanId)) && qList.length > 0) {
          return qList;
        }
      }
      return null;
    }

    function loadGradeCurriculum(gradeStr) {
      if (!window.ALL_GRADES_DATA) return;
      currentGradeData = window.ALL_GRADES_DATA[gradeStr];
      if (!currentGradeData) {
        currentGradeData = window.ALL_GRADES_DATA['11']; // fallback
      }
      window.currentGradeData = currentGradeData;
      // Bind dedicated questions per chapter from window.SOAL_BANK_PER_BAB
      if (currentGradeData && currentGradeData.chapters && window.SOAL_BANK_PER_BAB) {
        currentGradeData.chapters.forEach(ch => {
          const qs = resolveChapterQuestions(ch.id);
          if (qs && qs.length > 0) {
            ch.questions = qs;
          }
        });
      }
    }

    function updateHeaderProfile() {
      if (!currentStudent || !currentGradeData) {
        document.getElementById('sb-profile-box').classList.add('hidden');
        document.getElementById('top-bar-grade-badge').textContent = 'Kelas -';
        return;
      }

      document.getElementById('sb-profile-box').classList.remove('hidden');
      document.getElementById('sb-user-name').textContent = currentStudent.name;
      document.getElementById('sb-user-initial').textContent = currentStudent.name.charAt(0).toUpperCase();
      document.getElementById('sb-user-grade').textContent = currentGradeData.gradeName;

      document.getElementById('top-bar-grade-badge').textContent = currentGradeData.gradeShort;
      document.getElementById('dash-grade-badge').textContent = currentGradeData.gradeName;
      document.getElementById('dash-student-name').textContent = currentStudent.name;
    }

    function promptChangeAccount() {
      if (confirm('Ingin berganti akun / kelas? Riwayat latihanmu tetap tersimpan aman di perangkat ini.')) {
        localStorage.removeItem(USER_KEY);
        currentStudent = null;
        currentGradeData = null;
        updateHeaderProfile();
        renderSavedAccounts();
        switchView('student-gate');
      }
    }

    // ----------------------------------------------------
    // NAVIGATION CONTROLLER
    // ----------------------------------------------------

    function openPDFDownloadsModal() {
      const modal = document.getElementById('modal-direct-pdf-downloads');
      if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    }
    window.openPDFDownloadsModal = openPDFDownloadsModal;

    function switchView(viewName) {
      currentView = viewName;
      window.currentView = viewName;
      const isStudentGate = viewName === 'student-gate';
      document.body.classList.toggle('student-gate', isStudentGate);
      // Close mobile drawer if open
      const drawer = document.getElementById('sidebar-drawer');
      if (!drawer.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
        toggleMobileSidebar();
      }

      const views = ['student-gate', 'dashboard', 'materi-catalog', 'materi-detail', 'exam-catalog', 'exam', 'exam-result', 'exam-review', 'history', 'teacher-dashboard', 'mathlab', 'cheatsheet', 'pm-exam', 'pm-review', 'error-bank', 'pm-catalog', 'pm-study', 'pm-learning'];
      views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.add('hidden');
      });

      // Update sidebar active buttons
      document.querySelectorAll('.sb-nav-item').forEach(b => {
        b.className = 'sb-nav-item w-full px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-dark-850 flex items-center gap-2.5 transition';
      });
      let activeNavId = `sb-nav-${viewName}`;
      if (viewName === 'exam-catalog' || viewName === 'exam' || viewName === 'exam-review') activeNavId = 'sb-nav-exam';
      else if (viewName === 'pm-catalog' || viewName === 'pm-study' || viewName === 'pm-exam' || viewName === 'pm-review' || viewName === 'pm-learning') activeNavId = 'sb-nav-pm-exam';
      else if (viewName === 'error-bank') activeNavId = 'sb-nav-error-bank';
      const navBtn = document.getElementById(activeNavId);
      if (navBtn) {
        navBtn.className = 'sb-nav-item active w-full px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white flex items-center gap-2.5 transition';
      }
      const secondaryToolViews = ['mathlab', 'cheatsheet', 'history', 'error-bank'];
      const moreToolsMenu = document.getElementById('sb-more-tools');
      if (moreToolsMenu) moreToolsMenu.open = secondaryToolViews.includes(viewName);

      // Update bottom mobile active icons
      document.querySelectorAll('nav button').forEach(b => {
        if (b.id && b.id.startsWith('mob-nav-')) {
          b.className = 'flex flex-col items-center py-1 px-3 text-slate-400 hover:text-white';
        }
      });
      const activeMobId = (viewName === 'exam-catalog' || viewName === 'exam' || viewName === 'pm-catalog' || viewName === 'pm-study' || viewName === 'pm-learning' || viewName === 'pm-exam' || viewName === 'pm-review') ? 'mob-nav-exam' : `mob-nav-${viewName}`;
      const mobBtn = document.getElementById(activeMobId);
      if (mobBtn) {
        mobBtn.className = 'flex flex-col items-center py-1 px-3 text-indigo-400 font-bold';
      }

      const targetEl = document.getElementById(`view-${viewName}`);
      if (targetEl) targetEl.classList.remove('hidden');

      // Specific initializations
      if (isStudentGate) {
        document.getElementById('top-bar-title').textContent = 'The Arich Study';
      } else if (viewName === 'mathlab') {
        document.getElementById('top-bar-title').textContent = 'Laboratorium Interaktif';
        initMathLab();
      } else if (viewName === 'cheatsheet') {
        document.getElementById('top-bar-title').textContent = 'Lembar Rumus Sakti';
        renderCheatSheets();
      } else if (viewName === 'dashboard') {
        activeReadingGrade = null;
        document.getElementById('top-bar-title').textContent = 'Dashboard';
        renderDashboardChapters();
        renderDashboardStats();
      } else if (viewName === 'materi-catalog') {
        activeReadingGrade = null;
        document.getElementById('top-bar-title').textContent = 'Katalog Materi';
        renderMateriCatalog();
      } else if (viewName === 'materi-detail') {
        document.getElementById('top-bar-title').textContent = 'Detail Modul Pembelajaran';
      } else if (viewName === 'exam-catalog') {
        document.getElementById('top-bar-title').textContent = 'Pilih Bab Latihan';
        renderExamCatalog();
      } else if (viewName === 'exam') {
        document.getElementById('top-bar-title').textContent = 'Latihan Soal CBT';
      } else if (viewName === 'exam-result') {
        document.getElementById('top-bar-title').textContent = 'Hasil Latihan Soal';
      } else if (viewName === 'history') {
        document.getElementById('top-bar-title').textContent = 'Riwayat Nilai';
        renderHistoryTable();
      } else if (viewName === 'teacher-dashboard') {
        document.getElementById('top-bar-title').textContent = 'Portal Pengajar';
        renderTeacherDashboard();
      } else if (viewName === 'error-bank') {
        document.getElementById('top-bar-title').textContent = 'Buku Catatan Salah';
        if (window.TheArichErrorBank) window.TheArichErrorBank.renderErrorBankView();
      } else if (viewName === 'pm-catalog') {
        document.getElementById('top-bar-title').textContent = 'Katalog UTBK Penalaran Matematika';
        if (window.featuresPMEngine && window.featuresPMEngine.renderPMPackageCatalog) {
          window.featuresPMEngine.renderPMPackageCatalog();
        }
        if (window.featuresPMLearning && window.featuresPMLearning.renderCatalog) {
          window.featuresPMLearning.renderCatalog(document.getElementById('pm-learning-search')?.value || '');
        }
      } else if (viewName === 'pm-study') {
        document.getElementById('top-bar-title').textContent = 'Bedah Soal & Kunci Pembahasan PM';
      } else if (viewName === 'pm-learning') {
        document.getElementById('top-bar-title').textContent = 'Materi Penalaran Matematika';
        if (window.featuresPMLearning && window.featuresPMLearning.init) {
          window.featuresPMLearning.init();
        }
      }

      lucide.createIcons();
      triggerLatex();
    }

    function toggleMobileSidebar() {
      const drawer = document.getElementById('sidebar-drawer');
      const backdrop = document.getElementById('mobile-sidebar-backdrop');
      drawer.classList.toggle('-translate-x-full');
      backdrop.classList.toggle('hidden');
      const expanded = !drawer.classList.contains('-translate-x-full');
      document.querySelectorAll('button[aria-label$="menu navigasi"]').forEach(button => button.setAttribute('aria-expanded', String(expanded)));
    }

    // ----------------------------------------------------
    // DASHBOARD & MATERI CATALOG
    // ----------------------------------------------------
    function renderDashboardStats() {
      const descEl = document.getElementById('dash-stats-desc');
      const pillsEl = document.getElementById('dash-stats-pills');
      if (!descEl || !pillsEl) return;

      const db = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      const myName = currentStudent ? String(currentStudent.name || '').toLowerCase() : '';
      const list = db.filter(r => !myName || String(r.studentName || '').toLowerCase() === myName);

      if (list.length === 0) {
        descEl.innerHTML = "Belum ada latihan yang diselesaikan. Mulai latihan untuk mengukur kemampuanmu!";
        pillsEl.innerHTML = `
          <button onclick="switchView('exam-catalog')" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition">
            <span>Mulai Tes</span> <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        `;
      } else {
        const totalTests = list.length;
        const avgScore = Math.round(list.reduce((acc, cur) => acc + cur.score, 0) / totalTests);
        const latest = list[0];

        descEl.innerHTML = `Kamu telah menyelesaikan <strong class="text-white">${Number(totalTests)} set latihan</strong>. Skor terbaru: <strong class="text-emerald-400 font-mono">${Number(latest.score)}/100</strong> pada ${escapeHtml(latest.timestamp)}.`;
        pillsEl.innerHTML = `
          <div class="px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-800 text-[11px] text-slate-300">
            Rata-rata: <span class="font-bold text-amber-400 font-mono">${avgScore}</span>
          </div>
          <button onclick="switchView('history')" class="px-3 py-1.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-white font-semibold text-xs flex items-center gap-1 transition">
            <span>Riwayat Nilai</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        `;
      }
      lucide.createIcons();
    }

    // ----------------------------------------------------
    // SUBJECT FILTER & CHAPTER RENDERING
    // ----------------------------------------------------
    let currentSubjectFilter = 'all';

    function setSubjectFilter(sub) {
      currentSubjectFilter = sub;
      renderDashboardChapters();
      renderMateriCatalog();
      renderExamCatalog();
      lucide.createIcons();
    }

    function getSubjectFilterBarHTML(chapters) {
      if (!chapters) return '';
      const getSub = c => c.subject || (c.id && c.id.toLowerCase().includes('fisik') ? 'Fisika' : 'Matematika');
      const hasPhysics = chapters.some(c => getSub(c) === 'Fisika');
      if (!hasPhysics) return '';

      const totalAll = chapters.length;
      const totalMath = chapters.filter(c => getSub(c) === 'Matematika').length;
      const totalPhys = chapters.filter(c => getSub(c) === 'Fisika').length;

      const activeAll = currentSubjectFilter === 'all';
      const activeMath = currentSubjectFilter === 'Matematika';
      const activePhys = currentSubjectFilter === 'Fisika';

      const btnAll = activeAll
        ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30 font-semibold'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 font-medium';
      const btnMath = activeMath
        ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30 font-semibold'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 font-medium';
      const btnPhys = activePhys
        ? 'bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-md shadow-cyan-600/30 font-semibold'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 font-medium';

      return `
        <div class="col-span-full mb-4">
          <div class="inline-flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md gap-1 shadow-inner">
            <button onclick="setSubjectFilter('all')" class="px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-2 transition ${btnAll}">
              <span>Semua Mata Pelajaran</span>
              <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-black/25 font-mono">${totalAll}</span>
            </button>
            <button onclick="setSubjectFilter('Matematika')" class="px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition ${btnMath}">
              <span class="w-1.5 h-1.5 rounded-full ${activeMath ? 'bg-white' : 'bg-indigo-400'}"></span>
              <span>Matematika</span>
              <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-black/25 font-mono">${totalMath}</span>
            </button>
            <button onclick="setSubjectFilter('Fisika')" class="px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition ${btnPhys}">
              <span class="w-1.5 h-1.5 rounded-full ${activePhys ? 'bg-white' : 'bg-sky-400'}"></span>
              <span>Fisika</span>
              <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-black/25 font-mono">${totalPhys}</span>
            </button>
          </div>
        </div>
      `;
    }

    function renderDashboardChapters() {
      if (window.TheArichStudentExp && typeof window.TheArichStudentExp.renderContinueReadingWidget === 'function') {
        window.TheArichStudentExp.renderContinueReadingWidget();
      }
      const container = document.getElementById('dash-chapters-overview');
      if (!container || !currentGradeData || !currentGradeData.chapters) return;

      const filterBar = getSubjectFilterBarHTML(currentGradeData.chapters);
      const getSub = ch => ch.subject || (ch.id && ch.id.toLowerCase().includes('fisik') ? 'Fisika' : 'Matematika');
      const filtered = currentGradeData.chapters.filter(ch => {
        if (currentSubjectFilter === 'all') return true;
        return getSub(ch) === currentSubjectFilter;
      });

      const cardsHtml = filtered.map((ch, idx) => {
        const isPhysics = getSub(ch) === 'Fisika';
        const badge = ch.number ? `Bab ${ch.number}` : (ch.badge || `Bab 0${idx+1}`);
        const badgeText = isPhysics ? `Fisika • ${badge}` : `Matematika • ${badge}`;
        const badgeStyle = isPhysics ? 'text-sky-300 bg-sky-500/10 border-sky-500/25' : 'text-indigo-300 bg-indigo-500/10 border-indigo-500/25';
        const borderHover = isPhysics ? 'hover:border-sky-500/50 hover:shadow-sky-500/10' : 'hover:border-indigo-500/50 hover:shadow-indigo-500/10';
        const textHover = isPhysics ? 'group-hover:text-sky-300' : 'group-hover:text-indigo-300';
        const topGlow = isPhysics ? 'from-sky-500/40 to-cyan-400/10' : 'from-indigo-500/40 to-purple-400/10';

        const currentGradeCode = currentStudent ? String(currentStudent.grade) : '11';
        return `
        <div onclick="openChapterDetail('${ch.id}', '${currentGradeCode}')" class="clean-card rounded-2xl p-5 cursor-pointer ${borderHover} hover:shadow-xl transition group relative overflow-hidden flex flex-col justify-between">
          <div class="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${topGlow} opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-lg border ${badgeStyle} mb-2.5">${badgeText}</div>
            <h4 class="text-xs sm:text-sm font-bold text-white ${textHover} transition mb-1.5 leading-snug">${ch.title}</h4>
            <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${ch.summary}</p>
          </div>
          <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
            <span>${ch.subtopics ? ch.subtopics.length : 0} Subtopik</span>
            <span class="flex items-center gap-1 ${isPhysics ? 'text-sky-400' : 'text-indigo-400'} group-hover:translate-x-1 transition-transform">Buka Materi <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></span>
          </div>
        </div>
      `}).join('');

      container.innerHTML = filterBar + cardsHtml;
      lucide.createIcons();
    }

    function renderMateriCatalog() {
      const container = document.getElementById('materi-catalog-grid');
      if (!container || !currentGradeData || !currentGradeData.chapters) return;

      const filterBar = getSubjectFilterBarHTML(currentGradeData.chapters);
      const getSub = ch => ch.subject || (ch.id && ch.id.toLowerCase().includes('fisik') ? 'Fisika' : 'Matematika');
      const filtered = currentGradeData.chapters.filter(ch => {
        if (currentSubjectFilter === 'all') return true;
        return getSub(ch) === currentSubjectFilter;
      });

      const cardsHtml = filtered.map((ch, idx) => {
        const isPhysics = getSub(ch) === 'Fisika';
        const badge = ch.number ? `Bab ${ch.number}` : (ch.badge || `Bab 0${idx+1}`);
        const badgeText = isPhysics ? `Fisika • ${badge}` : `Matematika • ${badge}`;
        const badgeStyle = isPhysics ? 'text-sky-300 bg-sky-500/10 border-sky-500/25' : 'text-indigo-300 bg-indigo-500/10 border-indigo-500/25';
        const borderHover = isPhysics ? 'hover:border-sky-500/50 hover:shadow-sky-500/10' : 'hover:border-indigo-500/50 hover:shadow-indigo-500/10';
        const textHover = isPhysics ? 'group-hover:text-sky-300' : 'group-hover:text-indigo-300';
        const btnColor = isPhysics ? 'text-sky-400' : 'text-indigo-400';
        const topGlow = isPhysics ? 'from-sky-500/40 to-cyan-400/10' : 'from-indigo-500/40 to-purple-400/10';

        const currentGradeCode = currentStudent ? String(currentStudent.grade) : '11';
        return `
        <div onclick="openChapterDetail('${ch.id}', '${currentGradeCode}')" class="clean-card rounded-2xl p-5 cursor-pointer ${borderHover} hover:shadow-xl transition group relative overflow-hidden flex flex-col justify-between">
          <div class="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${topGlow} opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div class="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-lg border ${badgeStyle} mb-2.5">${badgeText}</div>
            <h4 class="text-xs sm:text-sm font-bold text-white ${textHover} transition mb-1.5 leading-snug">${ch.title}</h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">${ch.summary}</p>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold ${btnColor}">
            <span>${ch.subtopics ? ch.subtopics.length : 0} Subtopik</span>
            <span class="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Buka Bab <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></span>
          </div>
        </div>
      `}).join('');

      container.innerHTML = filterBar + cardsHtml;
      lucide.createIcons();
    }

    // ----------------------------------------------------
    // BEAUTIFUL MARKDOWN FORMATTER FOR MATERI
    // ----------------------------------------------------
    function escapeVisualHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
    if (typeof window.escapeHtml !== 'function') {
      window.escapeHtml = escapeVisualHtml;
    }

    function formatInlineMateriText(text) {
      if (!text) return '';
      return String(text)
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\n/g, '<br>');
    }

    function renderMateriVisualCardHTML(visual, fallbackTitle) {
      if (!visual || !visual.image) return '';
      const vTitle = visual.title || fallbackTitle || 'Diagram & Ilustrasi Konsep';
      const vCaption = visual.caption || '';
      const vGuide = Array.isArray(visual.guide) ? visual.guide : [];

      const encImg = encodeURIComponent(visual.image);
      const encTitle = encodeURIComponent(vTitle);
      const encCap = encodeURIComponent(vCaption);
      const encGuide = encodeURIComponent(JSON.stringify(vGuide));
      const lightboxCall = `window.openMateriVisualLightbox('${encImg}', '${encTitle}', '${encCap}', '${encGuide}')`;

      const guideHtml = vGuide.length > 0 ? `
        <div class="materi-visual-guide">
          <div class="materi-visual-guide-header">
            <i data-lucide="compass" class="w-4 h-4 text-teal-400 shrink-0"></i>
            <span>Panduan Membaca Gambar (Fokus Visual)</span>
          </div>
          <div class="materi-visual-guide-list">
            ${vGuide.map((step, gIdx) => `
              <div class="materi-visual-guide-item">
                <span class="materi-visual-guide-badge">${gIdx + 1}</span>
                <div class="materi-visual-guide-text reader-text">${formatInlineMateriText(step)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      return `
        <div class="materi-visual-card">
          <div class="materi-visual-header">
            <div class="materi-visual-header-left">
              <span class="materi-visual-icon-box">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </span>
              <div class="min-w-0">
                <span class="materi-visual-badge">Visualisasi &amp; Bedah Konsep</span>
                <h5 class="materi-visual-title">${escapeVisualHtml(vTitle)}</h5>
              </div>
            </div>
            <button type="button" onclick="${lightboxCall}" class="materi-visual-zoom-btn no-print" title="Perbesar &amp; Geser Diagram">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
              <span>Perbesar Gambar (Zoom)</span>
            </button>
          </div>

          <figure class="materi-visual-figure print-materi-figure">
            <div class="materi-visual-viewport" onclick="${lightboxCall}" role="button" tabindex="0" aria-label="Perbesar gambar ${escapeVisualHtml(vTitle)}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${lightboxCall};}">
              <img src="${visual.image}" alt="${escapeVisualHtml(vTitle)}" loading="lazy" class="materi-visual-img" />
              <div class="materi-visual-zoom-hint no-print">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i>
                <span>Klik untuk Zoom Interaktif (hingga 300%)</span>
              </div>
            </div>
            ${vCaption ? `
              <figcaption class="materi-visual-caption reader-text">
                ${formatMateriMarkdown(vCaption)}
              </figcaption>
            ` : ''}
          </figure>

          ${guideHtml}
        </div>
      `;
    }

    // ----------------------------------------------------
    // INTERACTIVE FULL-SCREEN ZOOM & PAN LIGHTBOX MODAL
    // ----------------------------------------------------
    window.renderMateriVisualCardHTML = renderMateriVisualCardHTML;
    let _materiLightboxZoom = 100;
    let _materiLightboxDrawerOpen = true;
    let _materiLightboxKeyHandlerBound = false;

    function safeDecodeVisualParam(val) {
      if (typeof val !== 'string') return val;
      try {
        return val.includes('%') ? decodeURIComponent(val) : val;
      } catch (e) {
        return val;
      }
    }

    function ensureMateriVisualLightboxModal() {
      let modal = document.getElementById('materi-visual-lightbox-modal');
      if (modal) return modal;

      const html = `
        <div id="materi-visual-lightbox-modal" class="materi-lightbox-modal hidden no-print" role="dialog" aria-modal="true" aria-labelledby="materi-lightbox-title">
          <!-- Top Toolbar -->
          <div class="materi-lightbox-toolbar">
            <div class="materi-lightbox-toolbar-title-wrap">
              <span class="materi-lightbox-badge">Visualisasi Interaktif</span>
              <h4 id="materi-lightbox-title" class="materi-lightbox-title">Diagram Konsep</h4>
            </div>
            <div class="materi-lightbox-controls">
              <div class="materi-lightbox-zoom-group" role="group" aria-label="Kontrol Zoom">
                <button type="button" onclick="window.stepMateriLightboxZoom(-25)" class="materi-lightbox-ctrl-btn" title="Perkecil (-)">
                  <i data-lucide="zoom-out" class="w-4 h-4"></i>
                  <span class="sr-only">Zoom Out</span>
                </button>
                <button type="button" id="materi-lightbox-zoom-label" onclick="window.setMateriLightboxZoom(100)" class="materi-lightbox-zoom-readout" title="Reset Zoom (100%)">
                  100%
                </button>
                <button type="button" onclick="window.stepMateriLightboxZoom(25)" class="materi-lightbox-ctrl-btn" title="Perbesar hingga 300% (+)">
                  <i data-lucide="zoom-in" class="w-4 h-4"></i>
                  <span class="sr-only">Zoom In</span>
                </button>
              </div>
              <button type="button" id="materi-lightbox-drawer-btn" onclick="window.toggleMateriLightboxDrawer()" class="materi-lightbox-drawer-toggle is-active" title="Tampilkan / Sembunyikan Panduan Membaca Gambar">
                <i data-lucide="book-open" class="w-4 h-4"></i>
                <span class="hidden sm:inline">Panduan Gambar</span>
              </button>
              <button type="button" onclick="window.closeMateriVisualLightbox()" class="materi-lightbox-close-btn" title="Tutup (Esc)">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <!-- Main Interactive Viewport + Collapsible Guide Drawer -->
          <div class="materi-lightbox-body">
            <div id="materi-lightbox-viewport" class="materi-lightbox-viewport">
              <div id="materi-lightbox-stage" class="materi-lightbox-stage">
                <img id="materi-lightbox-img" src="" alt="" draggable="false" class="materi-lightbox-img" />
              </div>
            </div>

            <aside id="materi-lightbox-drawer" class="materi-lightbox-drawer">
              <div class="materi-lightbox-drawer-head">
                <div class="flex items-center gap-2 text-teal-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                  <i data-lucide="compass" class="w-4 h-4 text-teal-400"></i>
                  <span>Cara Membaca Gambar &amp; Inti Konsep</span>
                </div>
                <button type="button" onclick="window.toggleMateriLightboxDrawer()" class="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-1">
                  <span>Sembunyikan</span>
                  <i data-lucide="chevron-down" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="materi-lightbox-drawer-content">
                <div id="materi-lightbox-caption" class="materi-lightbox-caption reader-text"></div>
                <div id="materi-lightbox-guide" class="materi-lightbox-guide-list"></div>
              </div>
            </aside>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', html);
      modal = document.getElementById('materi-visual-lightbox-modal');

      // Backdrop click to close (when clicking directly on the empty viewport area around the stage)
      const viewport = document.getElementById('materi-lightbox-viewport');
      if (viewport) {
        let isDragging = false;
        let dragMoved = false;
        let startX = 0;
        let startY = 0;
        let scrollLeftStart = 0;
        let scrollTopStart = 0;

        viewport.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;
          isDragging = true;
          dragMoved = false;
          startX = e.clientX;
          startY = e.clientY;
          scrollLeftStart = viewport.scrollLeft;
          scrollTopStart = viewport.scrollTop;
          viewport.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            dragMoved = true;
          }
          viewport.scrollLeft = scrollLeftStart - dx;
          viewport.scrollTop = scrollTopStart - dy;
        });

        window.addEventListener('mouseup', (e) => {
          if (!isDragging) return;
          isDragging = false;
          viewport.classList.remove('is-dragging');
          if (!dragMoved && e.target === viewport) {
            window.closeMateriVisualLightbox();
          }
        });

        viewport.addEventListener('wheel', (e) => {
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY < 0 ? 25 : -25;
            window.stepMateriLightboxZoom(delta);
          }
        }, { passive: false });
      }

      if (!_materiLightboxKeyHandlerBound) {
        _materiLightboxKeyHandlerBound = true;
        document.addEventListener('keydown', (e) => {
          const activeModal = document.getElementById('materi-visual-lightbox-modal');
          if (!activeModal || activeModal.classList.contains('hidden')) return;
          if (e.key === 'Escape') {
            e.preventDefault();
            window.closeMateriVisualLightbox();
          } else if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            window.stepMateriLightboxZoom(25);
          } else if (e.key === '-') {
            e.preventDefault();
            window.stepMateriLightboxZoom(-25);
          } else if (e.key === '0') {
            e.preventDefault();
            window.setMateriLightboxZoom(100);
          }
        });
      }

      return modal;
    }

    window.setMateriLightboxZoom = function(zoomPercent) {
      const clamped = Math.max(50, Math.min(300, Math.round(Number(zoomPercent) || 100)));
      _materiLightboxZoom = clamped;
      const stage = document.getElementById('materi-lightbox-stage');
      const label = document.getElementById('materi-lightbox-zoom-label');
      if (stage) {
        stage.style.width = `${clamped}%`;
        stage.style.maxWidth = clamped > 100 ? 'none' : '1120px';
      }
      if (label) {
        label.textContent = `${clamped}%`;
      }
    };

    window.stepMateriLightboxZoom = function(delta) {
      window.setMateriLightboxZoom(_materiLightboxZoom + (Number(delta) || 0));
    };

    window.toggleMateriLightboxDrawer = function(forceState) {
      const drawer = document.getElementById('materi-lightbox-drawer');
      const btn = document.getElementById('materi-lightbox-drawer-btn');
      if (!drawer) return;
      _materiLightboxDrawerOpen = typeof forceState === 'boolean' ? forceState : !_materiLightboxDrawerOpen;
      if (_materiLightboxDrawerOpen) {
        drawer.classList.remove('is-collapsed');
        if (btn) btn.classList.add('is-active');
      } else {
        drawer.classList.add('is-collapsed');
        if (btn) btn.classList.remove('is-active');
      }
    };

    window.closeMateriVisualLightbox = function() {
      const modal = document.getElementById('materi-visual-lightbox-modal');
      if (modal) {
        modal.classList.add('hidden');
      }
      document.body.classList.remove('overflow-hidden');
    };

    window.openMateriVisualLightbox = function(encodedDataOrImgSrc, optTitle, optCaption, optGuideJson) {
      let imgSrc = '';
      let title = 'Visualisasi & Bedah Konsep';
      let caption = '';
      let guide = [];

      if (encodedDataOrImgSrc && typeof encodedDataOrImgSrc === 'object') {
        imgSrc = encodedDataOrImgSrc.image || '';
        title = encodedDataOrImgSrc.title || title;
        caption = encodedDataOrImgSrc.caption || '';
        guide = Array.isArray(encodedDataOrImgSrc.guide) ? encodedDataOrImgSrc.guide : [];
      } else if (typeof encodedDataOrImgSrc === 'string') {
        const decodedFirst = safeDecodeVisualParam(encodedDataOrImgSrc).trim();
        if (decodedFirst.startsWith('{')) {
          try {
            const parsed = JSON.parse(decodedFirst);
            imgSrc = parsed.image || '';
            title = parsed.title || title;
            caption = parsed.caption || '';
            guide = Array.isArray(parsed.guide) ? parsed.guide : [];
          } catch (e) {
            imgSrc = decodedFirst;
          }
        } else {
          imgSrc = decodedFirst;
          if (optTitle) title = safeDecodeVisualParam(optTitle);
          if (optCaption) caption = safeDecodeVisualParam(optCaption);
          if (Array.isArray(optGuideJson)) {
            guide = optGuideJson;
          } else if (typeof optGuideJson === 'string' && optGuideJson.trim()) {
            const decodedGuide = safeDecodeVisualParam(optGuideJson).trim();
            try {
              const parsedGuide = JSON.parse(decodedGuide);
              if (Array.isArray(parsedGuide)) guide = parsedGuide;
            } catch (e) {
              guide = [decodedGuide];
            }
          }
        }
      }

      if (!imgSrc) return;

      const modal = ensureMateriVisualLightboxModal();
      const imgEl = document.getElementById('materi-lightbox-img');
      const titleEl = document.getElementById('materi-lightbox-title');
      const captionEl = document.getElementById('materi-lightbox-caption');
      const guideEl = document.getElementById('materi-lightbox-guide');

      if (imgEl) {
        imgEl.src = imgSrc;
        imgEl.alt = title;
      }
      if (titleEl) {
        titleEl.textContent = title;
      }
      if (captionEl) {
        captionEl.innerHTML = caption ? formatMateriMarkdown(caption) : '';
        captionEl.style.display = caption ? 'block' : 'none';
      }
      if (guideEl) {
        if (Array.isArray(guide) && guide.length > 0) {
          guideEl.innerHTML = guide.map((step, idx) => `
            <div class="materi-visual-guide-item">
              <span class="materi-visual-guide-badge">${idx + 1}</span>
              <div class="materi-visual-guide-text reader-text">${formatInlineMateriText(step)}</div>
            </div>
          `).join('');
          guideEl.style.display = 'grid';
        } else {
          guideEl.innerHTML = '';
          guideEl.style.display = 'none';
        }
      }

      const hasDrawerContent = Boolean(caption || (Array.isArray(guide) && guide.length > 0));
      window.toggleMateriLightboxDrawer(hasDrawerContent);
      window.setMateriLightboxZoom(100);

      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');

      if (window.lucide) window.lucide.createIcons();
      if (typeof triggerLatex === 'function') triggerLatex(modal);
    };

    function formatMateriMarkdown(text) {
      if (!text) return '';
      let html = text;

      // 1. Convert double asterisks to bold text
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-bold">$1</strong>');

      // 2. Split into distinct paragraphs
      const paragraphs = html.split(/\n\n+/);
      return paragraphs.map(p => {
        p = p.trim();
        if (!p) return '';

        // Standalone KaTeX display math block $$...$$
        if (p.startsWith('$$') && p.endsWith('$$')) {
          return `<div class="reader-math-block font-mono text-indigo-300 text-base sm:text-lg">${p}</div>`;
        }

        // Numbered lists (1. 2. 3.)
        if (/^\d+\.\s/.test(p) || p.includes('\n1. ')) {
          const lines = p.split('\n');
          return `<div class="space-y-2.5 my-3">${lines.map(line => {
            line = line.trim();
            if (/^\d+\.\s/.test(line)) {
              const num = line.match(/^\d+/)[0];
              const rest = line.replace(/^\d+\.\s*/, '');
              return `<div class="flex items-start gap-3 text-slate-200">
                <span class="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">${num}</span>
                <div class="flex-1">${rest}</div>
              </div>`;
            } else if (line.startsWith('*') || line.startsWith('-')) {
              return `<div class="flex items-start gap-2.5 text-slate-200 pl-4">
                <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                <div class="flex-1">${line.replace(/^[\*\-]\s*/, '')}</div>
              </div>`;
            }
            return `<p class="leading-relaxed text-slate-200 pl-9">${line}</p>`;
          }).join('')}</div>`;
        }

        // Default comfortable paragraph
        return `<p class="leading-relaxed text-slate-200 my-2.5">${p.replace(/\n/g, '<br>')}</p>`;
      }).join('');
    }

    // Reader Font Size Controller
    function setReaderFontSize(size) {
      localStorage.setItem('arich_font_size', size);
      const container = document.getElementById('detail-subtopics-container');
      if (container) {
        container.className = `space-y-6 reader-size-${size}`;
      }
      updateReaderFontSizeButtons(size);
    }

    function updateReaderFontSizeButtons(activeSize) {
      ['sm', 'md', 'lg', 'xl'].forEach(s => {
        const btn = document.getElementById(`btn-font-${s}`);
        if (btn) {
          if (s === activeSize) {
            btn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-600 text-white transition';
          } else {
            btn.className = 'px-2.5 py-1 text-xs font-bold rounded-lg text-slate-400 hover:text-white transition';
          }
        }
      });
    }

    function readAloudChapter() {
      if (!('speechSynthesis' in window)) {
        alert('Browser Anda tidak mendukung fitur Text-to-Speech.');
        return;
      }
      window.speechSynthesis.cancel();
      const title = document.getElementById('detail-chapter-title').innerText;
      const text = document.getElementById('detail-subtopics-container').innerText;
      const utt = new SpeechSynthesisUtterance(title + '. ' + text);
      utt.lang = 'id-ID';
      utt.rate = 1.0;
      window.speechSynthesis.speak(utt);
    }

    function readAloudSubtopic(title, concept) {
      if (!('speechSynthesis' in window)) {
        alert('Browser Anda tidak mendukung fitur Text-to-Speech.');
        return;
      }
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(decodeURIComponent(title) + '. ' + decodeURIComponent(concept));
      utt.lang = 'id-ID';
      utt.rate = 1.0;
      window.speechSynthesis.speak(utt);
    }

    let activeReadingGrade = null; // Decoupled for cross-grade reading

    function openChapterDetail(chapterId, optionalGradeId) {
      if (!chapterId) return;

      const studentGrade = currentStudent ? String(currentStudent.grade) : '11';
      let ch = null;
      let targetGrade = optionalGradeId ? String(optionalGradeId) : null;

      // Level 1: If targetGrade is specified, search in that grade first
      if (targetGrade && window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[targetGrade] && window.ALL_GRADES_DATA[targetGrade].chapters) {
        ch = window.ALL_GRADES_DATA[targetGrade].chapters.find(c => c.id === chapterId);
      }

      // Level 2: Search in currentGradeData (active grade curriculum)
      if (!ch && currentGradeData && currentGradeData.chapters) {
        ch = currentGradeData.chapters.find(c => c.id === chapterId);
        if (ch) {
          targetGrade = studentGrade;
        }
      }

      // Level 3: Search in studentGrade in ALL_GRADES_DATA
      if (!ch && window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[studentGrade] && window.ALL_GRADES_DATA[studentGrade].chapters) {
        ch = window.ALL_GRADES_DATA[studentGrade].chapters.find(c => c.id === chapterId);
        if (ch) {
          targetGrade = studentGrade;
        }
      }

      // Level 4: Search across ALL grades in ALL_GRADES_DATA (exhaustive fallback)
      if (!ch && window.ALL_GRADES_DATA) {
        for (const [gKey, gData] of Object.entries(window.ALL_GRADES_DATA)) {
          if (gData && gData.chapters) {
            const found = gData.chapters.find(c => c.id === chapterId);
            if (found) {
              ch = found;
              targetGrade = gKey;
              break;
            }
          }
        }
      }

      if (!ch) {
        console.warn('[TheArichStudy] Chapter not found for ID:', chapterId);
        return;
      }

      targetGrade = targetGrade || studentGrade;
      activeReadingGrade = targetGrade;

      const sourceGradeData = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[targetGrade]) ? window.ALL_GRADES_DATA[targetGrade] : (currentGradeData || {});
      window.currentDetailChapter = ch;
      window.currentDetailGrade = targetGrade;

      // Handle Cross-Grade Banner
      const cgBanner = document.getElementById('cross-grade-notice-banner');
      if (cgBanner) {
        if (targetGrade !== studentGrade) {
          cgBanner.classList.remove('hidden');
          const myGradeName = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[studentGrade]) ? window.ALL_GRADES_DATA[studentGrade].gradeName : `Kelas ${studentGrade}`;
          const currentGradeName = sourceGradeData.gradeName || `Kelas ${targetGrade}`;
          document.getElementById('cg-banner-title').textContent = `Mode Baca Lintas Jenjang • ${currentGradeName}`;
          document.getElementById('cg-banner-registered').textContent = myGradeName;
        } else {
          cgBanner.classList.add('hidden');
        }
      }

      document.getElementById('detail-chapter-num').textContent = ch.number ? `Bab ${ch.number}` : (ch.badge || 'Modul Bab');
      document.getElementById('detail-chapter-title').textContent = ch.title;
      document.getElementById('detail-chapter-summary').textContent = ch.summary || '';
      const countEl = document.getElementById('detail-subtopics-count');
      const subtopicsList = Array.isArray(ch.subtopics) ? ch.subtopics : [];
      if (countEl) countEl.textContent = `${subtopicsList.length} Subtopik`;

      const subContainer = document.getElementById('detail-subtopics-container');
      const curSize = localStorage.getItem('arich_font_size') || 'md';
      subContainer.className = `space-y-6 reader-size-${curSize}`;
      const isChapterPhysics = (ch.subject === 'Fisika') || (ch.id && ch.id.includes('fisik')) || (ch.badge && ch.badge.includes('Fisika')) || (ch.title && ch.title.toLowerCase().includes('fisika'));

      subContainer.innerHTML = subtopicsList.map((sub, idx) => {
        const exampleText = sub.exampleProblem || sub.example;
        const quickTipText = sub.quickTip;
        const cleanConcept = (sub.concept || '').replace(/[$`"]/g, ' ');

        return `
        <div class="clean-card rounded-2xl p-5 sm:p-7 border border-slate-800 hover:border-slate-700/80 space-y-4 shadow-xl">
          <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
            <h4 class="text-base sm:text-xl font-bold text-white flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 flex items-center justify-center text-xs font-black shrink-0">${idx + 1}</span>
              <span>${sub.title}</span>
            </h4>
            <button onclick="readAloudSubtopic('${encodeURIComponent(sub.title)}', '${encodeURIComponent(cleanConcept)}')" class="p-2 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-amber-300 transition shrink-0" title="Dengarkan Subtopik Ini">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Concept body with comfortable typography -->
          <div class="reader-text leading-relaxed text-slate-200">
            ${formatMateriMarkdown(sub.concept)}
          </div>

          ${sub.visual ? renderMateriVisualCardHTML(sub.visual, sub.title) : ''}

          ${quickTipText ? `
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-100 shadow-sm space-y-1.5">
              <div class="flex items-center gap-2 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wide">
                <i data-lucide="zap" class="w-4 h-4 text-amber-400"></i>
                <span>${isChapterPhysics ? 'Trik Kilat & Rumus Sakti Fisika:' : 'Trik Kilat & Jalan Pintas Matematika:'}</span>
              </div>
              <div class="reader-text text-amber-200/90 leading-relaxed font-medium">
                ${formatMateriMarkdown(quickTipText)}
              </div>
            </div>
          ` : ''}

          ${exampleText ? `
            <div class="p-4 sm:p-6 rounded-2xl bg-dark-900/95 border border-indigo-500/25 text-slate-200 shadow-inner space-y-2.5">
              <div class="flex items-center gap-2 text-indigo-300 font-extrabold text-xs sm:text-sm tracking-wide">
                <i data-lucide="lightbulb" class="w-4 h-4 text-indigo-400"></i>
                <span>${isChapterPhysics ? 'Contoh Soal Terbimbing & Pembahasan Bertahap:' : 'Contoh Soal & Pembahasan Bertahap:'}</span>
              </div>
              <div class="reader-text text-slate-200 leading-relaxed">
                ${formatMateriMarkdown(exampleText)}
              </div>
            </div>
          ` : ''}
        </div>
        `;
      }).join('');

      const startExamBtn = document.getElementById('btn-materi-start-exam');
      if (startExamBtn) {
        startExamBtn.onclick = () => {
          if (targetGrade !== studentGrade) {
            const myGradeName = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[studentGrade]) ? window.ALL_GRADES_DATA[studentGrade].gradeName : `Kelas ${studentGrade}`;
            const targetGradeName = sourceGradeData.gradeName;
            if (confirm(`Bab ini adalah materi latihan ${targetGradeName}, sedangkan akun Anda terdaftar di ${myGradeName}.\n\nTetap mulai latihan ini sebagai uji kemampuan (tanpa mengubah jenjang kelas akun Anda)?`)) {
              startChapterExam(ch.id);
            }
          } else {
            startChapterExam(ch.id);
          }
        };
      }

      switchView('materi-detail');
      updateReaderFontSizeButtons(curSize);
      if (window.TheArichStudentExp) {
        try {
          window.TheArichStudentExp.saveRecentReading(ch, targetGrade);
          window.TheArichStudentExp.updateChapterProgressMeter(chapterId, ch.subtopics ? ch.subtopics.length : 3);
          window.TheArichStudentExp.enhanceSubtopicsContainer(ch);
          window.TheArichStudentExp.enhancePersonalScratchpad(ch);
        } catch (e) {
          console.warn('[TheArichStudentExp] update error:', e);
        }
      }
      lucide.createIcons();
      triggerLatex(subContainer);

      // Add Reading XP
      addStudentXP(25, `Membaca Bab: ${ch.title}`);
    }

    function returnToMyGradeView() {
      activeReadingGrade = null;
      if (currentStudent) {
        loadGradeCurriculum(currentStudent.grade);
      }
      switchView('dashboard');
    }

    function renderExamCatalog() {
      const container = document.getElementById('exam-catalog-grid');
      const badgeEl = document.getElementById('exam-catalog-grade-badge');
      const statsEl = document.getElementById('exam-catalog-total-stats');
      if (!container || !currentGradeData || !currentGradeData.chapters) return;

      if (badgeEl) badgeEl.textContent = currentGradeData.gradeName;
      const totalChapters = currentGradeData.chapters.length;
      const totalQuestions = currentGradeData.chapters.reduce((sum, ch) => sum + (ch.questions ? ch.questions.length : 15), 0);
      if (statsEl) statsEl.textContent = `${totalChapters} Bab • ${totalQuestions} Soal`;

      const db = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      const myName = currentStudent ? String(currentStudent.name || '').toLowerCase() : '';

      const filterBar = getSubjectFilterBarHTML(currentGradeData.chapters);
      const getSub = ch => ch.subject || (ch.id && ch.id.toLowerCase().includes('fisik') ? 'Fisika' : 'Matematika');
      const filtered = currentGradeData.chapters.filter(ch => {
        if (currentSubjectFilter === 'all') return true;
        return getSub(ch) === currentSubjectFilter;
      });

      const cardsHtml = filtered.map((ch, idx) => {
        const isPhysics = getSub(ch) === 'Fisika';
        const badge = ch.number ? `Bab ${ch.number}` : (ch.badge || `Bab 0${idx+1}`);
        const badgeText = isPhysics ? `Fisika • ${badge}` : `Matematika • ${badge}`;
        const badgeStyle = isPhysics ? 'text-sky-300 bg-sky-500/10 border-sky-500/25' : 'text-indigo-300 bg-indigo-500/10 border-indigo-500/25';
        const borderHover = isPhysics ? 'hover:border-sky-500/50 hover:shadow-sky-500/10' : 'hover:border-indigo-500/50 hover:shadow-indigo-500/10';
        const textHover = isPhysics ? 'group-hover:text-sky-300' : 'group-hover:text-indigo-300';
        const qCount = ch.questions ? ch.questions.length : 15;
        const topGlow = isPhysics ? 'from-sky-500/40 to-cyan-400/10' : 'from-indigo-500/40 to-purple-400/10';

        const historyList = db.filter(r =>
          (!myName || String(r.studentName || '').toLowerCase() === myName) &&
          (r.chapterId === ch.id || r.chapterTitle === ch.title)
        );
        let statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 border border-slate-800 text-slate-400">Belum Dikerjakan</span>`;
        if (historyList.length > 0) {
          const maxScore = Math.max(...historyList.map(h => h.score));
          const isPassed = maxScore >= 70;
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${isPassed ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}">Skor Tertinggi: ${maxScore}/100</span>`;
        }

        const startBtnClass = isPhysics
          ? 'bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white shadow-lg shadow-sky-600/25'
          : 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-600/25';
        const iconColor = isPhysics ? 'text-sky-400' : 'text-indigo-400';

        return `
          <div class="clean-card rounded-2xl p-5 border border-slate-800/80 ${borderHover} hover:shadow-xl transition flex flex-col justify-between group relative overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${topGlow} opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded-lg border ${badgeStyle}">${badgeText}</span>
                ${statusBadge}
              </div>
              <h4 class="text-sm sm:text-base font-bold text-white ${textHover} transition mb-1.5 leading-snug">${ch.title}</h4>
              <p class="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">${ch.summary}</p>
            </div>
            <div>
              <div class="flex items-center gap-3 text-slate-400 text-xs mb-3 font-mono">
                <span class="flex items-center gap-1"><i data-lucide="help-circle" class="w-3.5 h-3.5 ${iconColor}"></i> ${qCount} Soal</span>
                <span>•</span>
                <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5 ${iconColor}"></i> 30 Menit</span>
              </div>
              <div class="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-800/80">
                <button onclick="openChapterDetail('${ch.id}')" class="py-2 px-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition" title="Baca Rangkuman Materi">
                  <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Materi
                </button>
                <button onclick="window.TheArichExamDownloader ? window.TheArichExamDownloader.openForChapter('${ch.id}') : downloadExamPDF('${ch.id}')" class="py-2 px-1.5 rounded-xl bg-dark-950 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition group" title="Cetak / Unduh Naskah Soal (PDF)">
                  <i data-lucide="printer" class="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform"></i> Unduh PDF
                </button>
                <button onclick="startChapterExam('${ch.id}')" class="py-2 px-1.5 rounded-xl ${startBtnClass} text-[11px] font-semibold flex items-center justify-center gap-1 transition" title="Mulai Simulasi CBT">
                  <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i> Latihan
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = filterBar + cardsHtml;
      lucide.createIcons();
    }

    function startChapterExam(chapterId) {
      if (!chapterId) return;
      let ch = null;

      // 1. Try currentGradeData
      if (currentGradeData && currentGradeData.chapters) {
        ch = currentGradeData.chapters.find(c => c.id === chapterId);
      }
      // 2. Try window.currentDetailGrade
      if (!ch && window.currentDetailGrade && window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[window.currentDetailGrade]) {
        ch = window.ALL_GRADES_DATA[window.currentDetailGrade].chapters?.find(c => c.id === chapterId);
      }
      // 3. Try across all grades
      if (!ch && window.ALL_GRADES_DATA) {
        for (const gData of Object.values(window.ALL_GRADES_DATA)) {
          if (gData && gData.chapters) {
            const found = gData.chapters.find(c => c.id === chapterId);
            if (found) { ch = found; break; }
          }
        }
      }
      if (!ch && currentGradeData && currentGradeData.chapters) {
        ch = currentGradeData.chapters[0];
      }
      if (!ch) return;

      if (!ch.questions || ch.questions.length === 0) {
        const found = resolveChapterQuestions(ch.id);
        if (found && found.length > 0) {
          ch.questions = found;
        } else {
          alert('Soal untuk bab ini sedang disiapkan.');
          return;
        }
      }

      currentExamChapter = ch;
      activeQuestions = ch.questions;
      userAnswers = new Array(activeQuestions.length).fill(null);
      window.currentExamChapter = currentExamChapter;
      window.activeQuestions = activeQuestions;
      window.userAnswers = userAnswers;
      userDoubts = new Array(activeQuestions.length).fill(false);
      currentQIdx = 0;
      isSolutionVisible = false;

      const badge = ch.number ? `Bab ${ch.number}` : (ch.badge || 'Bab');
      const badgeGradeEl = document.getElementById('exam-badge-grade');
      if (badgeGradeEl) badgeGradeEl.textContent = `${badge}: ${ch.title}`;

      // Reset timer to 30 mins
      examSecondsLeft = 30 * 60;
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(updateExamTimer, 1000);

      switchView('exam');
      renderExamMatrix();
      renderCurrentExamQuestion(0, 'none');
    }

    function confirmExitExam() {
      const answered = userAnswers.filter(a => a !== null).length;
      if (answered > 0) {
        if (!confirm(`Kamu telah menjawab ${answered} dari ${activeQuestions.length} soal. Yakin ingin keluar ke daftar bab? Progres sesi ini tidak akan disimpan.`)) {
          return;
        }
      }
      clearInterval(examTimerInterval);
      switchView('exam-catalog');
    }

    function repeatCurrentExam() {
      if (currentExamChapter) {
        startChapterExam(currentExamChapter.id);
      } else {
        switchView('exam-catalog');
      }
    }

    function initGradeExam() {
      if (!currentGradeData || !currentGradeData.questions || currentGradeData.questions.length === 0) return;
      activeQuestions = currentGradeData.questions;
      userAnswers = new Array(activeQuestions.length).fill(null);
      userDoubts = new Array(activeQuestions.length).fill(false);
      currentQIdx = 0;

      document.getElementById('exam-badge-grade').textContent = `Latihan: ${currentGradeData.gradeShort}`;

      // Reset timer
      examSecondsLeft = 30 * 60;
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = setInterval(updateExamTimer, 1000);

      renderExamMatrix();
      renderCurrentExamQuestion(0, 'none');
    }

    function updateExamTimer() {
      if (examSecondsLeft > 0) {
        examSecondsLeft--;
        const mins = String(Math.floor(examSecondsLeft / 60)).padStart(2, '0');
        const secs = String(examSecondsLeft % 60).padStart(2, '0');
        document.getElementById('exam-timer').textContent = `${mins}:${secs}`;
      } else {
        clearInterval(examTimerInterval);
        alert('Waktu ujian telah berakhir!');
        executeFinalExamSubmit();
      }
    }

    function renderExamMatrix() {
      const container = document.getElementById('exam-matrix-grid');
      container.innerHTML = activeQuestions.map((q, idx) => {
        let style = "bg-dark-900 border-slate-800 text-slate-400";
        if (userDoubts[idx]) {
          style = "bg-amber-500 text-slate-950 font-bold border-amber-400";
        } else if (userAnswers[idx] !== null) {
          style = "bg-emerald-600 text-white font-bold border-emerald-500";
        }

        const ring = (idx === currentQIdx) ? "ring-2 ring-indigo-400 font-bold" : "";
        return `
          <button onclick="jumpExamQuestion(${idx})" class="h-8 rounded-lg border text-xs transition flex items-center justify-center ${style} ${ring}">
            ${idx + 1}
          </button>
        `;
      }).join('');

      const answered = userAnswers.filter(a => a !== null).length;
      document.getElementById('exam-answered-stat').textContent = `${answered} / ${activeQuestions.length} Terjawab`;
    }

    function renderCurrentExamQuestion(idx, direction = 'right') {
      currentQIdx = idx;
      const q = activeQuestions[idx];

      const card = document.getElementById('exam-slide-card');
      card.classList.remove('slide-enter-left', 'slide-enter-right');
      if (direction === 'right') card.classList.add('slide-enter-right');
      else if (direction === 'left') card.classList.add('slide-enter-left');

      document.getElementById('exam-q-num-pill').textContent = `Soal No. ${idx + 1}`;
      document.getElementById('exam-prompt-body').innerHTML = q.prompt;

      // Doubt button
      const doubtBtn = document.getElementById('exam-doubt-btn');
      const doubtLabel = document.getElementById('exam-doubt-label');
      if (userDoubts[idx]) {
        doubtBtn.className = "px-2.5 py-1 rounded border border-amber-400 bg-amber-500/20 text-amber-300 text-xs flex items-center gap-1";
        doubtLabel.textContent = "Ragu-ragu";
      } else {
        doubtBtn.className = "px-2.5 py-1 rounded border border-slate-700 text-slate-400 text-xs flex items-center gap-1 hover:border-amber-400 hover:text-amber-300";
        doubtLabel.textContent = "Tandai Ragu";
      }

      // Options with Answer Key Highlighting (when unlocked by PIN 090305)
      const optContainer = document.getElementById('exam-options-body');
      optContainer.innerHTML = q.options.map((opt, oIdx) => {
        const isSelected = userAnswers[idx] === oIdx;
        const isKeyUnlocked = isAnswerKeyUnlocked && isSolutionVisible;
        const isCorrectKey = isKeyUnlocked && (oIdx === q.correct);

        let cls = isSelected
          ? 'p-3 rounded-xl bg-indigo-950/40 border-2 border-indigo-500 text-white cursor-pointer flex items-center justify-between transition'
          : 'p-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer flex items-center justify-between transition';

        let letterCls = isSelected ? 'bg-indigo-600 text-white font-bold' : 'bg-dark-800 text-slate-400';

        if (isCorrectKey) {
          cls += ' ring-2 ring-emerald-500 bg-emerald-950/30';
          letterCls = 'bg-emerald-600 text-white font-bold ring-1 ring-emerald-400';
        }

        return `
          <div onclick="selectExamOption(${idx}, ${oIdx})" class="${cls}">
            <div class="flex items-center space-x-2.5">
              <span class="w-6 h-6 rounded-lg text-xs flex items-center justify-center shrink-0 ${letterCls}">
                ${String.fromCharCode(65 + oIdx)}
              </span>
              <span class="text-xs sm:text-sm font-medium">${opt}</span>
            </div>
            <div class="flex items-center gap-1.5">
              ${isCorrectKey ? '<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Kunci Benar</span>' : ''}
              <span class="${isSelected ? 'text-indigo-400 text-xs font-bold' : 'text-transparent'}">✓</span>
            </div>
          </div>
        `;
      }).join('');

      // Prev button status
      const btnPrev = document.getElementById('btn-exam-prev');
      btnPrev.disabled = (idx === 0);
      btnPrev.style.opacity = (idx === 0) ? '0.3' : '1';

      renderSolutionBox();
      renderExamMatrix();
      lucide.createIcons();
      triggerLatex();
    }

    function selectExamOption(qIdx, oIdx) {
      userAnswers[qIdx] = oIdx;
      window.userAnswers = userAnswers;
      renderCurrentExamQuestion(qIdx, 'none');
    }

    function toggleCurrentDoubt() {
      userDoubts[currentQIdx] = !userDoubts[currentQIdx];
      renderCurrentExamQuestion(currentQIdx, 'none');
    }

    // ----------------------------------------------------
    // PROTECTED ANSWER KEY & EXPLANATION (SANDI: 090305)
    // ----------------------------------------------------
    function handleAnswerKeyClick() {
      if (!isAnswerKeyUnlocked) {
        document.getElementById('input-answer-key-pin').value = '';
        document.getElementById('answer-key-pin-error').classList.add('hidden');
        document.getElementById('modal-answer-key-pin').classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('input-answer-key-pin').focus();
        }, 100);
      } else {
        isSolutionVisible = !isSolutionVisible;
        renderSolutionBox();
      }
    }

    function handleAnswerKeyPinVerify(e) {
      e.preventDefault();
      const entered = document.getElementById('input-answer-key-pin').value.trim();
      if (entered === ANSWER_KEY_PIN) {
        isAnswerKeyUnlocked = true;
        isSolutionVisible = true;
        closeAnswerKeyPinModal();
        renderCurrentExamQuestion(currentQIdx, 'none');
        playBeep(660, 0.15);
      } else {
        document.getElementById('answer-key-pin-error').classList.remove('hidden');
        playBeep(220, 0.3);
      }
    }

    function closeAnswerKeyPinModal() {
      document.getElementById('modal-answer-key-pin').classList.add('hidden');
    }

    function toggleSolutionBox() {
      isSolutionVisible = !isSolutionVisible;
      renderCurrentExamQuestion(currentQIdx, 'none');
    }

    function lockAnswerKey() {
      isAnswerKeyUnlocked = false;
      isSolutionVisible = false;
      renderCurrentExamQuestion(currentQIdx, 'none');
    }

    function renderSolutionBox() {
      const box = document.getElementById('exam-solution-box');
      const keyBtn = document.getElementById('exam-key-btn');
      const keyLabel = document.getElementById('exam-key-label');

      if (!box || !keyBtn) return;

      if (isAnswerKeyUnlocked) {
        keyBtn.className = isSolutionVisible
          ? "px-2.5 py-1 rounded border border-amber-500 bg-amber-500/20 text-amber-300 text-xs flex items-center gap-1 transition shrink-0"
          : "px-2.5 py-1 rounded border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 text-xs flex items-center gap-1 transition shrink-0";
        keyLabel.textContent = isSolutionVisible ? "Tutup Pembahasan" : "Buka Pembahasan";
      } else {
        keyBtn.className = "px-2.5 py-1 rounded border border-slate-700 bg-dark-900 text-slate-400 text-xs flex items-center gap-1 hover:border-amber-500 hover:text-amber-300 transition shrink-0";
        keyLabel.textContent = "Kunci & Pembahasan";
      }

      if (isAnswerKeyUnlocked && isSolutionVisible && activeQuestions[currentQIdx]) {
        const q = activeQuestions[currentQIdx];
        const letter = String.fromCharCode(65 + q.correct);
        document.getElementById('sol-correct-badge').textContent = `Pilihan ${letter}`;

        const hintCard = document.getElementById('sol-hint-card');
        const hintText = document.getElementById('sol-hint-text');
        if (q.hint) {
          hintCard.classList.remove('hidden');
          hintText.innerHTML = q.hint;
        } else {
          hintCard.classList.add('hidden');
        }

        const explText = document.getElementById('sol-explanation-text');
        explText.innerHTML = q.explanation || "Pembahasan lengkap dibahas langsung bersama guru.";

        box.classList.remove('hidden');
        triggerLatex();
        lucide.createIcons();
      } else {
        box.classList.add('hidden');
      }
    }

    function slideExamPrev() {
      if (currentQIdx > 0) renderCurrentExamQuestion(currentQIdx - 1, 'left');
    }
    function slideExamNext() {
      if (currentQIdx < activeQuestions.length - 1) renderCurrentExamQuestion(currentQIdx + 1, 'right');
    }
    function jumpExamQuestion(idx) {
      const dir = idx > currentQIdx ? 'right' : 'left';
      renderCurrentExamQuestion(idx, dir);
    }

    function toggleMatrixPaletteMobile() {
      const p = document.getElementById('exam-matrix-panel');
      p.classList.toggle('hidden');
    }

    // ----------------------------------------------------
    // EXAM SUBMIT CONFIRMATION & RESULTS
    // ----------------------------------------------------
    function openExamSubmitConfirmation() {
      const answered = userAnswers.filter(a => a !== null).length;
      const doubt = userDoubts.filter((d, i) => d && userAnswers[i] !== null).length;
      const unanswered = activeQuestions.length - answered;

      document.getElementById('conf-answered-txt').textContent = `${answered} / ${activeQuestions.length} Soal`;
      document.getElementById('conf-doubt-txt').textContent = `${doubt} Soal`;
      document.getElementById('conf-unanswered-txt').textContent = `${unanswered} Soal`;

      document.getElementById('modal-submit-confirm').classList.remove('hidden');
    }

    function closeSubmitConfirmModal() {
      document.getElementById('modal-submit-confirm').classList.add('hidden');
    }

    function executeFinalExamSubmit() {
      closeSubmitConfirmModal();
      clearInterval(examTimerInterval);

      let correct = 0;
      activeQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) correct++;
      });
      const score = Math.round((correct / activeQuestions.length) * 100);

      const chTitle = currentExamChapter ? currentExamChapter.title : 'Latihan Mandiri';
      const chId = currentExamChapter ? currentExamChapter.id : 'general';
      const chBadge = currentExamChapter ? (currentExamChapter.number ? `Bab ${currentExamChapter.number}` : currentExamChapter.badge) : '';
      const displaySubj = currentGradeData ? `${currentGradeData.gradeShort} - ${chBadge ? chBadge + ': ' : ''}${chTitle}` : chTitle;

      const record = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('id-ID'),
        studentName: currentStudent ? currentStudent.name : 'Murid',
        studentClass: currentGradeData ? currentGradeData.gradeName : 'Kelas',
        gradeCode: currentStudent ? currentStudent.grade : '11',
        chapterId: chId,
        chapterTitle: chTitle,
        displaySubject: displaySubj,
        correctCount: correct,
        totalQuestions: activeQuestions.length,
        score: score,
        passed: score >= 70
      };

      // Save to local storage database
      try {
        const db = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
        db.unshift(record);
        localStorage.setItem(DB_KEY, JSON.stringify(db));
      } catch (e) {}


      // Show Results View
      document.getElementById('res-student-name').textContent = record.studentName;
      const resChEl = document.getElementById('res-chapter-title');
      if (resChEl) resChEl.textContent = displaySubj;
      document.getElementById('res-score-number').textContent = score;
      document.getElementById('res-score-detail').textContent = `${correct} Benar dari ${activeQuestions.length} Soal (${score}/100)`;

      if (score >= 70) {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }

      // Hook into Smart Error Bank
      if (window.TheArichErrorBank) {
        try {
          window.TheArichErrorBank.recordFromExam(record, activeQuestions, userAnswers);
          const wrongCount = activeQuestions.length - correct;
          const ebCallout = document.getElementById('res-error-bank-callout');
          const ebCountEl = document.getElementById('res-error-bank-count');
          if (ebCallout && ebCountEl && wrongCount > 0) {
            ebCountEl.textContent = wrongCount;
            ebCallout.classList.remove('hidden');
          } else if (ebCallout) {
            ebCallout.classList.add('hidden');
          }
        } catch (errEb) {
          console.warn('[TheArichErrorBank] error recording mistakes:', errEb);
        }
      }

      addStudentXP(50 + Math.round(score / 2), `Selesai Kuis ${score}/100`);
      switchView('exam-result');
      window.currentExamChapter = currentExamChapter;
      window.activeQuestions = activeQuestions;
      window.userAnswers = userAnswers;
      if (window.featuresAssessment) {
        try {
          window.featuresAssessment.onExamCompleted(record, activeQuestions, userAnswers, currentExamChapter);
        } catch (e) {
          console.error('Assessment features callback error:', e);
        }
      }
    }

    function shareScoreWhatsApp() {
      const name = currentStudent ? currentStudent.name : 'Murid';
      const grade = currentGradeData ? currentGradeData.gradeName : 'Kelas';
      const chTitle = currentExamChapter ? currentExamChapter.title : 'Latihan Soal';
      let correct = 0;
      activeQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) correct++;
      });
      const score = Math.round((correct / activeQuestions.length) * 100);

      const msg = `Halo Pak Guru, saya *${name}* (${grade}) telah menyelesaikan Latihan Soal Bab *${chTitle}* di *The Arich Study* dengan skor: *${score}/100* (${correct} Benar dari ${activeQuestions.length} Soal).`;
      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    }

    // ----------------------------------------------------
    // HISTORY TABLE (STUDENT VIEW)
    // ----------------------------------------------------
    function renderHistoryTable() {
      const tbody = document.getElementById('history-tbody');
      const db = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      const myName = currentStudent ? currentStudent.name.toLowerCase() : '';
      const list = db.filter(r => !myName || r.studentName.toLowerCase() === myName);

      if (list.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" class="py-8 text-center text-slate-500 space-y-2">
              <i data-lucide="clipboard-list" class="w-8 h-8 text-slate-600 mx-auto mb-1"></i>
              <p class="text-xs">Belum ada riwayat latihan untuk profil <strong>${escapeHtml(currentStudent ? currentStudent.name : 'ini')}</strong>.</p>
              <button onclick="switchView('exam-catalog')" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition">
                Mulai Latihan Sekarang <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </td>
          </tr>
        `;
        lucide.createIcons();
        return;
      }

      tbody.innerHTML = list.map(item => `
        <tr class="hover:bg-dark-900 transition">
          <td class="py-2.5 px-3 text-slate-400 font-mono text-[11px]">${escapeHtml(item.timestamp)}</td>
          <td class="py-2.5 px-3">
            <div class="font-semibold text-white text-xs">${escapeHtml(item.displaySubject || item.chapterTitle || item.studentClass)}</div>
            <div class="text-[10px] text-slate-500">${escapeHtml(item.studentClass)}</div>
          </td>
          <td class="py-2.5 px-3 text-center text-slate-300 font-bold">${item.correctCount} / ${item.totalQuestions}</td>
          <td class="py-2.5 px-3 text-center font-bold text-emerald-400 font-mono">${item.score}</td>
          <td class="py-2.5 px-3 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${item.passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
              ${item.passed ? 'Tuntas' : 'Remedial'}
            </span>
          </td>
        </tr>
      `).join('');
      lucide.createIcons();
    }

    // ----------------------------------------------------
    // TEACHER PIN & DASHBOARD (SANDI: 010822)
    // ----------------------------------------------------
    function promptTeacherPin() {
      if (isTeacherUnlocked) {
        switchView('teacher-dashboard');
      } else {
        document.getElementById('input-teacher-pin').value = '';
        document.getElementById('pin-error-alert').classList.add('hidden');
        document.getElementById('modal-teacher-pin').classList.remove('hidden');
      }
    }


    window.promptTeacherPinForStudy = function() {
      window._teacherPinSuccessCallback = function() {
        if (window.featuresPMEngine && window.featuresPMEngine.onTeacherModeChange) {
          window.featuresPMEngine.onTeacherModeChange();
        }
      };
      promptTeacherPin();
    };

    window.promptTeacherPinForDownloader = function() {
      window._teacherPinSuccessCallback = function() {
        if (window.TheArichExamDownloader && window.TheArichExamDownloader.onTeacherModeChange) {
          window.TheArichExamDownloader.onTeacherModeChange();
        }
      };
      promptTeacherPin();
    };
function closeTeacherPinModal() {
      document.getElementById('modal-teacher-pin').classList.add('hidden');
    }

    function handlePinVerify(e) {
      e.preventDefault();
      const pin = document.getElementById('input-teacher-pin').value.trim();
      if (pin === TEACHER_PIN || pin === ANSWER_KEY_PIN) {
        isTeacherUnlocked = true;
        window.isTeacherUnlocked = true;
        closeTeacherPinModal();
        document.getElementById('sb-teacher-label').textContent = 'Mode Guru (Aktif)';
        document.getElementById('sb-teacher-icon').setAttribute('data-lucide', 'unlock');
        if (window.lucide) lucide.createIcons();

        // Notifikasi ke seluruh modul aktif bahwa Mode Guru telah terbuka
        if (window.featuresPMEngine && window.featuresPMEngine.onTeacherModeChange) {
          window.featuresPMEngine.onTeacherModeChange();
        }
        if (window.TheArichExamDownloader && window.TheArichExamDownloader.onTeacherModeChange) {
          window.TheArichExamDownloader.onTeacherModeChange();
        }

        if (window._teacherPinSuccessCallback) {
          const cb = window._teacherPinSuccessCallback;
          window._teacherPinSuccessCallback = null;
          cb();
        } else {
          // Jika sedang di mode belajar PM atau detail materi, tetap di layar sekarang agar tidak terlempar
          const pmStudyEl = document.getElementById('view-pm-study');
          const isPMStudyOpen = pmStudyEl && !pmStudyEl.classList.contains('hidden');
          if (!isPMStudyOpen && currentView !== 'exam' && currentView !== 'materi-detail') {
            switchView('teacher-dashboard');
          }
        }
      } else {
        document.getElementById('pin-error-alert').classList.remove('hidden');
      }
    }

    // ----------------------------------------------------
    // TEACHER DASHBOARD (DUAL-TAB & REALTIME CLOUD SYNC)
    // ----------------------------------------------------
    function switchTeacherTab(tabName) {
      activeTeacherTab = tabName;
      const btnStudents = document.getElementById('tab-btn-students');
      const btnSubmissions = document.getElementById('tab-btn-submissions');
      const secStudents = document.getElementById('teacher-tab-content-students');
      const secSubmissions = document.getElementById('teacher-tab-content-submissions');

      if (!btnStudents || !btnSubmissions) return;

      if (tabName === 'students') {
        btnStudents.className = "px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white flex items-center gap-2 transition";
        btnSubmissions.className = "px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-dark-850 flex items-center gap-2 transition";
        secStudents.classList.remove('hidden');
        secSubmissions.classList.add('hidden');
      } else {
        btnStudents.className = "px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-dark-850 flex items-center gap-2 transition";
        btnSubmissions.className = "px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white flex items-center gap-2 transition";
        secStudents.classList.add('hidden');
        secSubmissions.classList.remove('hidden');
      }
      lucide.createIcons();
    }

    function refreshTeacherData() {
      renderTeacherDashboard();
    }

    function renderTeacherDashboard() {
      let localAccounts = [];
      let localDb = [];
      try { localAccounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]'); } catch (_) {}
      try { localDb = JSON.parse(localStorage.getItem(DB_KEY) || '[]'); } catch (_) {}
      const accounts = Array.isArray(localAccounts) ? localAccounts.filter(acc => acc && typeof acc === 'object' && typeof acc.name === 'string') : [];
      const submissions = Array.isArray(localDb) ? localDb.filter(row => row && typeof row === 'object') : [];
      const statusBadge = document.getElementById('teacher-local-status-badge');
      const syncNotice = document.getElementById('teacher-local-notice');
      if (statusBadge) statusBadge.textContent = 'Lokal di perangkat';
      if (syncNotice) syncNotice.textContent = 'Data ini hanya ada di browser yang sedang digunakan. Profil dan nilai tidak disinkronkan dan bukan bukti ujian terverifikasi.';
      const students = accounts.map(acc => ({
        name: String(acc.name || 'Siswa'),
        gradeName: (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[acc.grade]) ? window.ALL_GRADES_DATA[acc.grade].gradeName : 'Kelas ' + (acc.grade || '-'),
        grade: String(acc.grade || ''),
        school: '',
        lastActive: String(acc.lastActive || acc.registeredAt || 'Lokal')
      }));
      const totalStudents = students.length;
      const totalSubmissions = submissions.length;
      const avgScore = totalSubmissions > 0 ? Math.round(submissions.reduce((sum, row) => sum + (Number(row.score) || 0), 0) / totalSubmissions) : 0;
      const passRate = totalSubmissions > 0 ? Math.round((submissions.filter(row => row.passed || Number(row.score) >= 70).length / totalSubmissions) * 100) : 0;
      const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
      setText('teacher-stat-students', totalStudents);
      setText('teacher-stat-submissions', totalSubmissions);
      setText('teacher-stat-avg', avgScore);
      setText('teacher-stat-pass', passRate + '%');
      setText('tab-count-students', totalStudents);
      setText('tab-count-submissions', totalSubmissions);
      renderTeacherStudentsTable(students, submissions);
      renderTeacherSubmissionsTable(submissions);
      lucide.createIcons();
    }

    function renderTeacherStudentsTable(studentsList, submissionsList) {
      const tbody = document.getElementById('teacher-students-tbody');
      if (!tbody) return;

      if (!studentsList || studentsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-500">
          <i data-lucide="users" class="w-8 h-8 text-slate-600 mx-auto mb-1"></i>
          <p class="text-xs">Belum ada akun murid yang terdata.</p>
          <p class="text-[11px] text-slate-500 mt-0.5">Profil tersimpan lokal di browser ini. Tidak ada sinkronisasi antarperangkat.</p>
        </td></tr>`;
        lucide.createIcons();
        return;
      }

      tbody.innerHTML = studentsList.map((st, i) => {
        const mySubs = submissionsList.filter(s => String(s.studentName || '').toLowerCase() === String(st.name || '').toLowerCase());
        const testCount = mySubs.length;
        const avg = testCount > 0 ? Math.round(mySubs.reduce((a, b) => a + Number(b.score), 0) / testCount) : '-';

        return `
          <tr class="hover:bg-dark-900 transition">
            <td class="py-2.5 px-3 font-bold text-slate-500">${i + 1}</td>
            <td class="py-2.5 px-3 font-bold text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 font-bold flex items-center justify-center text-[10px]">
                ${escapeHtml(String(st.name || 'S').charAt(0).toUpperCase())}
              </span>
              <span>${escapeHtml(st.name)}</span>
            </td>
            <td class="py-2.5 px-3 text-indigo-300 font-semibold">${escapeHtml(st.gradeName)}</td>
            <td class="py-2.5 px-3 text-slate-400">${escapeHtml(st.school)}</td>
            <td class="py-2.5 px-3 text-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${testCount > 0 ? 'bg-indigo-600/20 text-indigo-300' : 'bg-dark-800 text-slate-500'}">
                ${testCount} Latihan
              </span>
            </td>
            <td class="py-2.5 px-3 text-center font-bold text-amber-400 font-mono">${avg}</td>
            <td class="py-2.5 px-3 text-slate-400 text-[11px] font-mono">${escapeHtml(st.lastActive)}</td>
          </tr>
        `;
      }).join('');
      lucide.createIcons();
    }

    function renderTeacherSubmissionsTable(submissionsList) {
      const tbody = document.getElementById('teacher-tbody');
      if (!tbody) return;

      if (!submissionsList || submissionsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-500">
          <i data-lucide="clipboard-list" class="w-8 h-8 text-slate-600 mx-auto mb-1"></i>
          <p class="text-xs">Belum ada murid yang mengumpulkan latihan soal.</p>
        </td></tr>`;
        lucide.createIcons();
        return;
      }

      tbody.innerHTML = submissionsList.map((item, i) => {
        const isPassed = item.passed || Number(item.score) >= 70;
        return `
          <tr class="hover:bg-dark-900 transition">
            <td class="py-2.5 px-3 font-bold text-slate-500">${i + 1}</td>
            <td class="py-2.5 px-3 text-slate-400 font-mono text-[11px]">${escapeHtml(item.timestamp)}</td>
            <td class="py-2.5 px-3 font-bold text-white">${escapeHtml(item.studentName)}</td>
            <td class="py-2.5 px-3">
              <div class="text-xs font-semibold text-slate-200">${escapeHtml(item.displaySubject || item.chapterTitle || item.studentClass)}</div>
              <div class="text-[10px] text-slate-500">${escapeHtml(item.studentClass)}</div>
            </td>
            <td class="py-2.5 px-3 text-center text-slate-300 font-semibold">${escapeHtml(Number(item.correctCount) || 0)} / ${escapeHtml(Number(item.totalQuestions) || 0)}</td>
            <td class="py-2.5 px-3 text-center font-bold text-emerald-400 font-mono text-sm">${escapeHtml(Number(item.score) || 0)}</td>
            <td class="py-2.5 px-3 text-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isPassed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
                ${isPassed ? 'Tuntas' : 'Remedial'}
              </span>
            </td>
          </tr>
        `;
      }).join('');
      lucide.createIcons();
    }

    function filterTeacherStudents() {
      const q = (document.getElementById('teacher-student-search').value || '').toLowerCase();
      const grade = document.getElementById('teacher-student-grade-filter').value;
      const rows = document.querySelectorAll('#teacher-students-tbody tr');

      rows.forEach(r => {
        const text = r.innerText.toLowerCase();
        const matchText = !q || text.includes(q);
        const matchGrade = (grade === 'ALL') || text.includes(`kelas ${grade}`);
        r.style.display = (matchText && matchGrade) ? '' : 'none';
      });
    }

    function exportTeacherCSV() {
      const submissions = JSON.parse(localStorage.getItem(DB_KEY) || '[]');
      if (!Array.isArray(submissions) || submissions.length === 0) return alert('Belum ada data nilai latihan yang dapat diekspor.');
      const csvCell = value => {
        let cell = String(value == null ? '' : value);
        if (/^[=+@-]/.test(cell)) cell = "'" + cell;
        return '"' + cell.replace(/"/g, '""') + '"';
      };
      const rows = [['No', 'Waktu', 'Nama Panggilan', 'Kelas', 'Materi Bab', 'Benar', 'Total Soal', 'Nilai', 'Status']];
      submissions.forEach((item, i) => rows.push([
        i + 1, item.timestamp, item.studentName, item.studentClass,
        item.displaySubject || item.chapterTitle || '', item.correctCount,
        item.totalQuestions, item.score, item.passed ? 'TUNTAS' : 'REMEDIAL'
      ]));
      const csv = rows.map(row => row.map(csvCell).join(',')).join('\r\n');
      const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Rekap_Nilai_TheArich_' + new Date().toISOString().slice(0, 10) + '.csv';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function clearDatabaseConfirm() {
      if (confirm('Hapus semua riwayat nilai latihan dari browser ini?')) {
        localStorage.removeItem(DB_KEY);
        renderTeacherDashboard();
      }
    }

    function isLearningBackupKey(key) {
      return (key.startsWith('the_arich_') && !/theme|pwa|cache_ver|webhook/i.test(key)) || key.startsWith('arich_student_');
    }

    function backupLocalLearningData() {
      const values = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && isLearningBackupKey(key)) values[key] = localStorage.getItem(key);
      }
      const backup = {
        format: 'the-arich-local-backup-v1',
        createdAt: new Date().toISOString(),
        values
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'TheArich-cadangan-' + new Date().toISOString().slice(0, 10) + '.json';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      alert('Cadangan berisi profil panggilan, nilai, catatan, dan progres. Simpan file ini secara pribadi.');
    }

    function restoreLocalLearningData(event) {
      const input = event.target;
      const file = input.files && input.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) {
        input.value = '';
        return alert('Ukuran cadangan terlalu besar (maksimal 10 MB).');
      }
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const backup = JSON.parse(String(reader.result || ''));
          if (!backup || backup.format !== 'the-arich-local-backup-v1' || !backup.values || typeof backup.values !== 'object' || Array.isArray(backup.values)) {
            throw new Error('Format cadangan tidak dikenal.');
          }
          const entries = Object.entries(backup.values).filter(([key, value]) => isLearningBackupKey(key) && typeof value === 'string' && value.length <= 2 * 1024 * 1024);
          if (entries.length === 0 || entries.length > 200) throw new Error('Isi cadangan tidak valid.');
          if (!confirm('Pulihkan ' + entries.length + ' bagian data? Nilai pada browser ini akan digabung dan bagian dengan kunci sama akan diganti.')) return;
          entries.forEach(([key, value]) => localStorage.setItem(key, value));
          localStorage.removeItem('the_arich_gsheet_webhook');
          localStorage.removeItem('the_arich_cloud_webhook');
          location.reload();
        } catch (error) {
          alert(error.message || 'File cadangan tidak dapat dipulihkan.');
        } finally {
          input.value = '';
        }
      };
      reader.onerror = () => {
        input.value = '';
        alert('File cadangan tidak dapat dibaca.');
      };
      reader.readAsText(file);
    }

    // ----------------------------------------------------
    // KATEX & AUDIO
    // ----------------------------------------------------
    function triggerLatex(el) {
      if (!window.renderMathInElement) return;
      let targets = [];
      if (el) {
        targets = [el];
      } else {
        const candidates = [
          document.getElementById('exam-slide-card'),
          document.getElementById('exam-solution-box'),
          document.getElementById('view-exam'),
          document.getElementById('view-materi-detail'),
          document.getElementById('view-cheatsheet'),
          document.getElementById('matrix-result-content'),
          document.getElementById('view-pm-study'),
          document.getElementById('view-pm-exam'),
          document.getElementById('view-pm-catalog'),
          document.getElementById('view-pm-learning')
        ];
        targets = candidates.filter(c => c && !c.classList.contains('hidden'));
        if (targets.length === 0) {
          const detail = document.getElementById('view-materi-detail');
          if (detail) targets.push(detail);
        }
      }

      targets.forEach(t => {
        try {
          renderMathInElement(t, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'svg'],
            throwOnError: false,
            strict: false
          });
        } catch (e) {
          console.warn('KaTeX render warning:', e);
        }
      });
    }

    function playBeep(freq = 440, duration = 0.1) {
      if (!isAudio) return;
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {}
    }

    function toggleAudioSFX() {
      isAudio = !isAudio;
      document.getElementById('sfx-label').textContent = isAudio ? 'SFX' : 'Mute';
      document.getElementById('sfx-icon').setAttribute('data-lucide', isAudio ? 'volume-2' : 'volume-x');
      document.getElementById('sfx-btn').setAttribute('aria-pressed', String(isAudio));
      document.getElementById('sfx-btn').setAttribute('aria-label', isAudio ? 'Nonaktifkan efek suara' : 'Aktifkan efek suara');
      lucide.createIcons();
    }

    // Touch swipe support for exam cards on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const examCard = document.getElementById('exam-slide-card');
    if (examCard) {
      examCard.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
      examCard.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) slideExamNext();
        if (touchEndX > touchStartX + 50) slideExamPrev();
      }, {passive: true});
    }

    // Initialize on page load
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      initApp();
    });

    // ========================================================
    // 6. SUITE FITUR UNIK & LABORATORIUM MATEMATIKA INTERAKTIF
    // ========================================================

    // ----------------------------------------------------
    // GAMIFIKASI XP & LEVEL BELAJAR
    // ----------------------------------------------------
    const XP_KEY = 'the_arich_user_xp';

    function getStudentXP() {
      try {
        return parseInt(localStorage.getItem(XP_KEY) || '0', 10);
      } catch (e) {
        return 0;
      }
    }

    function getStudentLevel(xp) {
      if (xp >= 2000) return { level: 6, title: 'Dewa Matematika', icon: 'crown', nextXP: 5000, prevXP: 2000 };
      if (xp >= 1000) return { level: 5, title: 'Master Kalkulus', icon: 'zap', nextXP: 2000, prevXP: 1000 };
      if (xp >= 500)  return { level: 4, title: 'Penakluk Geometri', icon: 'compass', nextXP: 1000, prevXP: 500 };
      if (xp >= 250)  return { level: 3, title: 'Ahli Aljabar', icon: 'sparkles', nextXP: 500, prevXP: 250 };
      if (xp >= 100)  return { level: 2, title: 'Pembelajar Tekun', icon: 'book-open', nextXP: 250, prevXP: 100 };
      return { level: 1, title: 'Penjelajah Pemula', icon: 'feather', nextXP: 100, prevXP: 0 };
    }

    function addStudentXP(amount, reason) {
      try {
        const cur = getStudentXP();
        const next = cur + amount;
        localStorage.setItem(XP_KEY, next.toString());
        updateXPDisplay();

        // Show toast
        showXPToast(amount, reason);

        // Check if level up
        const oldLvl = getStudentLevel(cur);
        const newLvl = getStudentLevel(next);
        if (newLvl.level > oldLvl.level) {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
        }
      } catch (e) {}
    }

    function showXPToast(amount, reason) {
      let toast = document.getElementById('xp-toast-notify');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'xp-toast-notify';
        toast.className = 'fixed bottom-20 right-4 z-50 bg-gradient-to-r from-amber-500 to-indigo-600 text-white font-bold text-xs px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-none border border-white/20';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<i data-lucide="award" class="w-4 h-4 text-amber-200"></i><span>+${Number(amount) || 0} XP (${escapeHtml(reason)})</span>`;
      lucide.createIcons();
      toast.classList.remove('translate-y-2', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
      }, 2500);
    }

    function updateXPDisplay() {
      const xp = getStudentXP();
      const lvl = getStudentLevel(xp);
      const badge = document.getElementById('top-xp-text');
      if (badge) {
        badge.textContent = `${xp} XP • Lv ${lvl.level}`;
      }
    }

    function showLevelDetailsModal() {
      const xp = getStudentXP();
      const lvl = getStudentLevel(xp);
      document.getElementById('modal-lvl-title').textContent = `Level ${lvl.level}: ${lvl.title}`;
      document.getElementById('modal-lvl-desc').textContent = `Total capaian belajarmu: ${xp} XP`;
      document.getElementById('modal-lvl-xp-text').textContent = `${xp} / ${lvl.nextXP} XP`;
      const pct = Math.min(100, Math.max(0, Math.round(((xp - lvl.prevXP) / (lvl.nextXP - lvl.prevXP)) * 100)));
      document.getElementById('modal-lvl-progress-bar').style.width = `${pct}%`;
      document.getElementById('modal-level-details').classList.remove('hidden');
    }

    function closeLevelDetailsModal() {
      document.getElementById('modal-level-details').classList.add('hidden');
    }

    // ----------------------------------------------------
    // GLOBAL SEARCH (CTRL + K)
    // ----------------------------------------------------
    let activeSearchCategory = 'all';

    function openGlobalSearchModal() {
      document.getElementById('modal-global-search').classList.remove('hidden');
      const input = document.getElementById('input-global-search');
      if (input) {
        input.value = '';
        input.focus();
        performGlobalSearch('');
      }
    }

    function closeGlobalSearchModal() {
      document.getElementById('modal-global-search').classList.add('hidden');
    }

    function filterSearchCategory(cat) {
      activeSearchCategory = cat;
      document.querySelectorAll('.search-cat-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
          btn.className = 'px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold shrink-0 search-cat-btn';
        } else {
          btn.className = 'px-2.5 py-1 rounded-lg bg-dark-900 text-slate-300 hover:text-white shrink-0 search-cat-btn';
        }
      });
      const query = document.getElementById('input-global-search').value;
      performGlobalSearch(query);
    }

    function performGlobalSearch(query) {
      const q = (query || '').toLowerCase().trim();
      const list = document.getElementById('search-results-list');
      if (!list || !window.ALL_GRADES_DATA) return;

      const results = [];
      const gradesToSearch = (activeSearchCategory === 'all')
        ? Object.keys(window.ALL_GRADES_DATA)
        : [activeSearchCategory];

      gradesToSearch.forEach(gId => {
        const gradeObj = window.ALL_GRADES_DATA[gId];
        if (!gradeObj || !gradeObj.chapters) return;

        gradeObj.chapters.forEach(ch => {
          let score = 0;
          let matchedSnippet = '';

          // Match chapter title & summary
          if (ch.title.toLowerCase().includes(q)) score += 10;
          if (ch.summary && ch.summary.toLowerCase().includes(q)) {
            score += 5;
            matchedSnippet = ch.summary.substring(0, 110) + '...';
          }

          // Match subtopics
          if (ch.subtopics) {
            ch.subtopics.forEach(sub => {
              if (sub.title.toLowerCase().includes(q)) score += 8;
              if (sub.quickTip && sub.quickTip.toLowerCase().includes(q)) {
                score += 4;
                if (!matchedSnippet) matchedSnippet = '💡 ' + sub.quickTip.substring(0, 100) + '...';
              }
              if (sub.concept && sub.concept.toLowerCase().includes(q)) {
                score += 3;
                if (!matchedSnippet) matchedSnippet = sub.concept.substring(0, 100) + '...';
              }
            });
          }

          if (q === '' || score > 0) {
            results.push({
              gradeId: gId,
              gradeName: gradeObj.gradeName,
              chapterId: ch.id,
              chapterNumber: ch.number || '01',
              title: ch.title,
              badge: ch.badge || gradeObj.gradeShort,
              snippet: matchedSnippet || ch.summary || 'Klik untuk membuka modul bab ini.',
              score
            });
          }
        });
      });

      // Sort by score
      results.sort((a, b) => b.score - a.score);

      if (results.length === 0) {
        list.innerHTML = `
          <div class="text-center py-8 text-slate-500 text-xs">
            Tidak ditemukan materi untuk kata kunci "${query}". Coba kata kunci lain (contoh: Pythagoras, Eksponen, Invers).
          </div>
        `;
        return;
      }

      list.innerHTML = results.slice(0, 12).map(r => `
        <div onclick="jumpToSearchTarget('${r.gradeId}', '${r.chapterId}')" class="p-3 rounded-xl bg-dark-900 border border-slate-800 hover:border-indigo-500 hover:bg-dark-850 cursor-pointer transition group">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-[10px] px-2 py-0.5 rounded font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">${r.gradeName}</span>
            <span class="text-[10px] text-slate-500 font-mono">Bab ${r.chapterNumber}</span>
          </div>
          <div class="text-xs font-bold text-white group-hover:text-indigo-300 transition">${r.title}</div>
          <div class="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">${r.snippet}</div>
        </div>
      `).join('');
    }

    function jumpToSearchTarget(gradeId, chapterId) {
      closeGlobalSearchModal();
      openChapterDetail(chapterId, gradeId);
      addStudentXP(10, 'Pencarian Cepat');
    }

// Keyboard shortcuts disabled for natural browser experience

    // ----------------------------------------------------
    // LABORATORIUM MATEMATIKA INTERAKTIF (MATH LAB)
    // ----------------------------------------------------
    function initMathLab() {
      switchMathLabTool('trig');
    }

    function switchMathLabTool(tool) {
      const tools = ['trig', 'parabola', 'matrix', 'pythagoras', 'vector', 'projectile', 'solver', 'plotter'];
      tools.forEach(t => {
        const panel = document.getElementById(`ml-panel-${t}`);
        const tab = document.getElementById(`ml-tab-${t}`);
        if (panel) panel.classList.toggle('hidden', t !== tool);
        if (tab) {
          if (t === tool) {
            tab.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white flex items-center gap-2 transition shrink-0 shadow-lg shadow-emerald-600/20';
          } else {
            tab.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-2 transition shrink-0';
          }
        }
      });
      lucide.createIcons();
      if (tool === 'matrix') initMatrixLab();
      if (tool === 'trig') updateUnitCircle(parseFloat(document.getElementById('uc-angle-input').value) || 45);
      if (tool === 'parabola') updateParabola();
      if (tool === 'pythagoras') updatePythagoras();
      if (tool === 'vector') updateVectorLab();
      if (tool === 'projectile' && window.initProjectileLab) window.initProjectileLab();
      if (tool === 'solver' && window.initSolverLab) window.initSolverLab();
      if (tool === 'plotter' && window.initPlotterLab) window.initPlotterLab();
    }

    // 1. TRIGONOMETRY UNIT CIRCLE
    function handleUCAngleInput(val) {
      const deg = parseFloat(val) || 0;
      const slider = document.getElementById('uc-angle-slider');
      if (slider) slider.value = Math.max(-360, Math.min(720, deg));
      updateUnitCircle(deg);
    }

    function handleUCSlider(val) {
      const deg = parseFloat(val) || 0;
      const input = document.getElementById('uc-angle-input');
      if (input) input.value = deg;
      updateUnitCircle(deg);
    }

    function stepUCAngle(delta) {
      const input = document.getElementById('uc-angle-input');
      const cur = parseFloat(input.value) || 0;
      const next = cur + delta;
      input.value = next;
      handleUCAngleInput(next);
    }

    function setUCAngle(deg) {
      const input = document.getElementById('uc-angle-input');
      if (input) {
        input.value = deg;
        handleUCAngleInput(deg);
      }
    }

    function updateUnitCircle(deg) {
      const rad = (deg * Math.PI) / 180;
      const cosVal = Math.cos(rad);
      const sinVal = Math.sin(rad);
      const tanVal = Math.abs(cosVal) < 0.00001 ? '&infin;' : Math.tan(rad).toFixed(4);

      const R = 100;
      const px = cosVal * R;
      const py = -sinVal * R; // SVG Y is inverted

      const pt = document.getElementById('uc-point');
      if (pt) { pt.setAttribute('cx', px); pt.setAttribute('cy', py); }

      const hyp = document.getElementById('uc-hyp-line');
      if (hyp) { hyp.setAttribute('x2', px); hyp.setAttribute('y2', py); }

      const cosLine = document.getElementById('uc-cos-line');
      if (cosLine) { cosLine.setAttribute('x2', px); }

      const sinLine = document.getElementById('uc-sin-line');
      if (sinLine) {
        sinLine.setAttribute('x1', px);
        sinLine.setAttribute('y1', 0);
        sinLine.setAttribute('x2', px);
        sinLine.setAttribute('y2', py);
      }

      const tri = document.getElementById('uc-triangle');
      if (tri) { tri.setAttribute('points', `0,0 ${px},0 ${px},${py}`); }

      // Update Arc
      const arc = document.getElementById('uc-angle-arc');
      if (arc) {
        const normDeg = ((deg % 360) + 360) % 360;
        const arcR = 30;
        const endX = Math.cos((normDeg * Math.PI) / 180) * arcR;
        const endY = -Math.sin((normDeg * Math.PI) / 180) * arcR;
        const largeArc = normDeg > 180 ? 1 : 0;
        arc.setAttribute('d', `M ${arcR} 0 A ${arcR} ${arcR} 0 ${largeArc} 0 ${endX} ${endY}`);
      }

      // Readouts
      const sinEl = document.getElementById('uc-sin-val');
      const cosEl = document.getElementById('uc-cos-val');
      const tanEl = document.getElementById('uc-tan-val');
      if (sinEl) sinEl.textContent = sinVal.toFixed(4);
      if (cosEl) cosEl.textContent = cosVal.toFixed(4);
      if (tanEl) tanEl.innerHTML = tanVal;

      // Quadrant Badge
      const normAngle = ((deg % 360) + 360) % 360;
      const badge = document.getElementById('uc-kuadran-badge');
      if (badge) {
        if (normAngle >= 0 && normAngle < 90) {
          badge.textContent = 'Kuadran I (Semua +)';
          badge.className = 'px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30';
        } else if (normAngle >= 90 && normAngle < 180) {
          badge.textContent = 'Kuadran II (Sin +, Lain -)';
          badge.className = 'px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold border border-rose-500/30';
        } else if (normAngle >= 180 && normAngle < 270) {
          badge.textContent = 'Kuadran III (Tan +, Lain -)';
          badge.className = 'px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-extrabold border border-amber-500/30';
        } else {
          badge.textContent = 'Kuadran IV (Cos +, Lain -)';
          badge.className = 'px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-500/30';
        }
      }
    }

    // 2. PARABOLA EXPLORER
    function syncParaSlider(param, val) {
      const slider = document.getElementById(`para-slider-${param}`);
      if (slider) slider.value = val;
      updateParabola();
    }

    function syncParaInput(param, val) {
      const input = document.getElementById(`para-input-${param}`);
      if (input) input.value = val;
      updateParabola();
    }

    function resetParabolaCoeffs() {
      document.getElementById('para-input-a').value = 1;
      document.getElementById('para-slider-a').value = 1;
      document.getElementById('para-input-b').value = 0;
      document.getElementById('para-slider-b').value = 0;
      document.getElementById('para-input-c').value = 0;
      document.getElementById('para-slider-c').value = 0;
      updateParabola();
    }

    function updateParabola() {
      const a = parseFloat(document.getElementById('para-input-a').value) || 0.001;
      const b = parseFloat(document.getElementById('para-input-b').value) || 0;
      const c = parseFloat(document.getElementById('para-input-c').value) || 0;

      // Update Formula Text
      const eqDisplay = document.getElementById('parabola-eq-display');
      if (eqDisplay) {
        const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        const signC = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
        eqDisplay.innerHTML = `y = ${a}x&sup2; ${signB}x ${signC}`;
      }

      // Vertex
      const xp = -b / (2 * a);
      const yp = a * xp * xp + b * xp + c;
      const D = b * b - 4 * a * c;

      const vEl = document.getElementById('para-res-vertex');
      const dEl = document.getElementById('para-res-d');
      const rEl = document.getElementById('para-res-roots');
      if (vEl) vEl.textContent = `(${xp.toFixed(2)}, ${yp.toFixed(2)})`;
      if (dEl) dEl.textContent = D.toFixed(2);
      if (rEl) {
        if (D > 0) rEl.textContent = '2 Akar Real Berbeda (Memotong 2 Titik)';
        else if (Math.abs(D) < 0.001) rEl.textContent = '1 Akar Kembar (Menyinggung Sumbu X)';
        else rEl.textContent = 'Akar Imajiner / Definit (Tidak Memotong X)';
      }

      // Draw SVG Path
      const scale = 12; // 1 unit = 12 pixels
      const points = [];
      for (let x = -14; x <= 14; x += 0.5) {
        const y = a * x * x + b * x + c;
        const svgX = x * scale;
        const svgY = -y * scale; // inverted SVG Y
        if (svgY >= -140 && svgY <= 140) {
          points.push(`${svgX.toFixed(1)},${svgY.toFixed(1)}`);
        }
      }

      const curve = document.getElementById('para-curve');
      if (curve && points.length > 1) {
        curve.setAttribute('d', `M ${points.join(' L ')}`);
      }

      // Vertex Dot & Axis Line
      const vDot = document.getElementById('para-vertex-dot');
      const axisLine = document.getElementById('para-axis-line');
      const svgVpX = xp * scale;
      const svgVpY = -yp * scale;
      if (vDot) { vDot.setAttribute('cx', svgVpX); vDot.setAttribute('cy', svgVpY); }
      if (axisLine) { axisLine.setAttribute('x1', svgVpX); axisLine.setAttribute('x2', svgVpX); }
    }

    // ==========================================
    // 3. MATRIX CALCULATOR (ORDO BEBAS M X N & INVERS KHUSUS M = N)
    // ==========================================
    let matrixState = {
      a: { rows: 2, cols: 2, data: [[4, 2], [1, 3]] },
      b: { rows: 2, cols: 2, data: [[1, -1], [2, 0]] }
    };

    function initMatrixLab() {
      const selAR = document.getElementById('sel-mat-a-rows');
      const selAC = document.getElementById('sel-mat-a-cols');
      const selBR = document.getElementById('sel-mat-b-rows');
      const selBC = document.getElementById('sel-mat-b-cols');
      if (selAR) selAR.value = matrixState.a.rows;
      if (selAC) selAC.value = matrixState.a.cols;
      if (selBR) selBR.value = matrixState.b.rows;
      if (selBC) selBC.value = matrixState.b.cols;

      renderMatrixInputs('a');
      renderMatrixInputs('b');
    }

    function renderMatrixInputs(target) {
      const state = matrixState[target];
      if (!state) return;
      const rows = state.rows;
      const cols = state.cols;
      const container = document.getElementById(`container-grid-${target}`);
      const dimLabel = document.getElementById(`mat-${target}-dim-label`);
      const badge = document.getElementById(`mat-${target}-badge`);

      if (dimLabel) dimLabel.textContent = `${rows} × ${cols}`;

      if (badge) {
        if (rows === cols) {
          badge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1';
          badge.innerHTML = '<i data-lucide="check-circle-2" class="w-3 h-3"></i> Matriks Persegi (m = n)';
        } else {
          badge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1';
          badge.innerHTML = '<i data-lucide="alert-triangle" class="w-3 h-3"></i> Bukan Persegi (m ≠ n)';
        }
      }

      if (!container) return;
      container.style.display = 'grid';
      container.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 72px))`;
      container.innerHTML = '';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const val = (state.data[r] && state.data[r][c] !== undefined) ? state.data[r][c] : 0;
          const input = document.createElement('input');
          input.type = 'number';
          input.id = `mat-${target}-${r}-${c}`;
          input.value = val;
          input.className = `w-14 sm:w-16 p-2 text-center rounded-lg bg-dark-850 border ${target === 'a' ? 'border-slate-700 text-indigo-200 focus:border-indigo-500' : 'border-slate-700 text-emerald-200 focus:border-emerald-500'} font-mono text-xs sm:text-sm font-bold focus:outline-none transition shadow-inner`;
          input.placeholder = `${target.toUpperCase()}${r+1}${c+1}`;
          input.oninput = (e) => saveMatrixCell(target, r, c, e.target.value);
          container.appendChild(input);
        }
      }
      if (window.lucide) lucide.createIcons();
    }

    function saveMatrixCell(target, r, c, val) {
      if (!matrixState[target].data[r]) matrixState[target].data[r] = [];
      matrixState[target].data[r][c] = parseFloat(val) || 0;
    }

    function changeMatrixDimension(target) {
      const selRows = document.getElementById(`sel-mat-${target}-rows`);
      const selCols = document.getElementById(`sel-mat-${target}-cols`);
      if (!selRows || !selCols) return;

      const newRows = parseInt(selRows.value) || 2;
      const newCols = parseInt(selCols.value) || 2;

      getMatrixValues(target);

      const oldData = matrixState[target].data || [];
      const newData = [];
      for (let r = 0; r < newRows; r++) {
        const row = [];
        for (let c = 0; c < newCols; c++) {
          if (oldData[r] && oldData[r][c] !== undefined) {
            row.push(oldData[r][c]);
          } else {
            row.push(r === c ? 1 : 0);
          }
        }
        newData.push(row);
      }
      matrixState[target].rows = newRows;
      matrixState[target].cols = newCols;
      matrixState[target].data = newData;

      renderMatrixInputs(target);
    }

    function setMatrixPreset(ra, ca, rb, cb) {
      matrixState.a.rows = ra;
      matrixState.a.cols = ca;
      matrixState.b.rows = rb;
      matrixState.b.cols = cb;

      const defaultA = [
        [4, 2, 1, 0],
        [1, 3, 0, 2],
        [2, 0, 1, 1],
        [0, 1, 2, 1]
      ];
      const defaultB = [
        [1, -1, 2, 1],
        [2, 0, 1, -2],
        [-1, 3, 0, 1],
        [2, 1, -1, 0]
      ];

      matrixState.a.data = [];
      for (let r = 0; r < ra; r++) {
        matrixState.a.data.push(defaultA[r].slice(0, ca));
      }
      matrixState.b.data = [];
      for (let r = 0; r < rb; r++) {
        matrixState.b.data.push(defaultB[r].slice(0, cb));
      }

      const selAR = document.getElementById('sel-mat-a-rows');
      const selAC = document.getElementById('sel-mat-a-cols');
      const selBR = document.getElementById('sel-mat-b-rows');
      const selBC = document.getElementById('sel-mat-b-cols');
      if (selAR) selAR.value = ra;
      if (selAC) selAC.value = ca;
      if (selBR) selBR.value = rb;
      if (selBC) selBC.value = cb;

      renderMatrixInputs('a');
      renderMatrixInputs('b');
    }

    function syncMatrixBWithA() {
      const ra = matrixState.a.rows;
      const ca = matrixState.a.cols;
      setMatrixPreset(ra, ca, ra, ca);
    }

    function randomizeMatrixValues() {
      ['a', 'b'].forEach(target => {
        const state = matrixState[target];
        for (let r = 0; r < state.rows; r++) {
          for (let c = 0; c < state.cols; c++) {
            state.data[r][c] = Math.floor(Math.random() * 9) - 3;
          }
        }
        renderMatrixInputs(target);
      });
    }

    function getMatrixValues(target) {
      const state = matrixState[target];
      const res = [];
      for (let r = 0; r < state.rows; r++) {
        const row = [];
        for (let c = 0; c < state.cols; c++) {
          const el = document.getElementById(`mat-${target}-${r}-${c}`);
          const val = el ? (parseFloat(el.value) || 0) : ((state.data[r] && state.data[r][c]) || 0);
          row.push(val);
        }
        res.push(row);
      }
      state.data = res;
      return res;
    }

    function formatMatrixLatex(mat) {
      const rowsStr = mat.map(row =>
        row.map(v => {
          if (typeof v === 'number') {
            return Number.isInteger(v) ? String(v) : Number(v.toFixed(3)).toString();
          }
          return String(v);
        }).join(' & ')
      ).join(' \\\\ ');
      return '\\begin{pmatrix} ' + rowsStr + ' \\end{pmatrix}';
    }

    function detNxN(M) {
      const n = M.length;
      if (n === 1) return M[0][0];
      if (n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
      if (n === 3) {
        return (
          M[0][0]*M[1][1]*M[2][2] +
          M[0][1]*M[1][2]*M[2][0] +
          M[0][2]*M[1][0]*M[2][1]
        ) - (
          M[0][2]*M[1][1]*M[2][0] +
          M[0][0]*M[1][2]*M[2][1] +
          M[0][1]*M[1][0]*M[2][2]
        );
      }
      let det = 0;
      for (let j = 0; j < n; j++) {
        const sub = [];
        for (let i = 1; i < n; i++) {
          const row = [];
          for (let k = 0; k < n; k++) {
            if (k !== j) row.push(M[i][k]);
          }
          sub.push(row);
        }
        const sign = (j % 2 === 0) ? 1 : -1;
        det += sign * M[0][j] * detNxN(sub);
      }
      return det;
    }

    function calcAdj3x3(a) {
      const c11 = +(a[1][1]*a[2][2] - a[1][2]*a[2][1]);
      const c12 = -(a[1][0]*a[2][2] - a[1][2]*a[2][0]);
      const c13 = +(a[1][0]*a[2][1] - a[1][1]*a[2][0]);

      const c21 = -(a[0][1]*a[2][2] - a[0][2]*a[2][1]);
      const c22 = +(a[0][0]*a[2][2] - a[0][2]*a[2][0]);
      const c23 = -(a[0][0]*a[2][1] - a[0][1]*a[2][0]);

      const c31 = +(a[0][1]*a[1][2] - a[0][2]*a[1][1]);
      const c32 = -(a[0][0]*a[1][2] - a[0][2]*a[1][0]);
      const c33 = +(a[0][0]*a[1][1] - a[0][1]*a[1][0]);

      return {
        cof: [[c11, c12, c13], [c21, c22, c23], [c31, c32, c33]],
        adj: [[c11, c21, c31], [c12, c22, c32], [c13, c23, c33]]
      };
    }

    function invertNxN(M) {
      const n = M.length;
      const A = M.map((row, i) => {
        const ext = new Array(n).fill(0);
        ext[i] = 1;
        return [...row, ...ext];
      });
      for (let i = 0; i < n; i++) {
        let pivot = i;
        for (let r = i + 1; r < n; r++) {
          if (Math.abs(A[r][i]) > Math.abs(A[pivot][i])) pivot = r;
        }
        if (Math.abs(A[pivot][i]) < 1e-12) return null;
        if (pivot !== i) {
          const tmp = A[i];
          A[i] = A[pivot];
          A[pivot] = tmp;
        }
        const div = A[i][i];
        for (let c = 0; c < 2 * n; c++) A[i][c] /= div;
        for (let r = 0; r < n; r++) {
          if (r !== i) {
            const factor = A[r][i];
            for (let c = 0; c < 2 * n; c++) A[r][c] -= factor * A[i][c];
          }
        }
      }
      return A.map(row => row.slice(n).map(v => Math.round(v * 1000) / 1000));
    }

    function calcMatrixAction(op) {
      const out = document.getElementById('matrix-result-content');
      if (!out) return;

      const A = getMatrixValues('a');
      const B = getMatrixValues('b');
      const mA = matrixState.a.rows;
      const nA = matrixState.a.cols;
      const mB = matrixState.b.rows;
      const nB = matrixState.b.cols;

      if (op === 'invA' || op === 'invB') {
        const target = (op === 'invA') ? 'a' : 'b';
        const labelName = (target === 'a') ? 'Matriks A' : 'Matriks B';
        const sym = (target === 'a') ? 'A' : 'B';
        const m = (target === 'a') ? mA : mB;
        const n = (target === 'a') ? nA : nB;
        const M = (target === 'a') ? A : B;

        if (m !== n) {
          out.innerHTML = `
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-3">
              <div class="flex items-center gap-2 font-bold text-amber-300 text-sm sm:text-base">
                <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-400"></i>
                <span>❌ Syarat Invers Tidak Terpenuhi: ${labelName} Bukan Matriks Persegi!</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ${labelName} yang kamu masukkan berordo <strong class="text-white font-mono font-bold">${m} &times; ${n}</strong> (${m} baris dan ${n} kolom).
                Dalam aljabar linear, <strong>invers matriks (${sym}⁻¹) HANYA terdefinisi jika dan hanya jika matriks berordo persegi (m = n)</strong>.
              </p>
              <div class="p-3.5 rounded-xl bg-dark-950/70 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div class="font-bold text-indigo-300 flex items-center gap-1.5">
                  <i data-lucide="lightbulb" class="w-4 h-4 text-amber-400"></i>
                  <span>Mengapa harus Matriks Persegi ($m = n$)?</span>
                </div>
                <p class="text-slate-400 leading-relaxed">
                  Definisi formal invers mengharuskan berlakunya sifat bolak-balik perkalian identitas:
                </p>
                <div class="text-center py-1">
                  $$${sym} \\cdot ${sym}^{-1} = ${sym}^{-1} \\cdot ${sym} = I_n$$
                </div>
                <p class="text-slate-400 leading-relaxed">
                  Jika matriks berukuran $${m} \\times ${n}$ (bukan persegi), maka perkalian dari kiri dan kanan akan menghasilkan ordo dimensi yang berbeda atau bahkan tidak terdefinisi secara aljabar, sehingga matriks identitas tunggal $I$ tidak mungkin terbentuk!
                </p>
              </div>
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <span class="text-xs text-emerald-400 font-semibold">Ubah ke Matriks Persegi:</span>
                <button onclick="setMatrixPreset(2, 2, 2, 2); calcMatrixAction('${op}')" class="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition">Ubah ke 2 &times; 2</button>
                <button onclick="setMatrixPreset(3, 3, 3, 3); calcMatrixAction('${op}')" class="px-2.5 py-1 rounded-lg bg-dark-850 hover:bg-dark-800 border border-slate-700 text-white text-xs font-bold transition">Ubah ke 3 &times; 3</button>
              </div>
            </div>
          `;
        } else {
          // SQUARE MATRIX: COMPUTE INVERSE
          const det = detNxN(M);
          if (Math.abs(det) < 1e-12) {
            out.innerHTML = `
              <div class="p-4 sm:p-5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 space-y-2">
                <div class="flex items-center gap-2 font-bold text-sm sm:text-base">
                  <i data-lucide="x-circle" class="w-5 h-5 text-rose-400"></i>
                  <span>Matriks Singular: Determinan \\det(${sym}) = 0</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Karena nilai determinan adalah 0, rumus invers mensyaratkan pembagian dengan determinan:
                </p>
                <div class="text-center py-1">
                  $${sym}^{-1} = \\frac{1}{\\det(${sym})} \\text{Adj}(${sym}) = \\frac{1}{0} \\text{Adj}(${sym})$
                </div>
                <p class="text-xs text-rose-400">
                  Pembagian dengan angka 0 tidak terdefinisi dalam matematika. Oleh karena itu, <strong>${labelName} TIDAK MEMILIKI INVERS</strong>.
                </p>
              </div>
            `;
          } else if (n === 1) {
            const invVal = Number((1 / M[0][0]).toFixed(3));
            out.innerHTML = `
              <div class="space-y-3">
                <div class="text-indigo-300 font-bold text-sm sm:text-base">Langkah Invers ${labelName} Ordo 1 &times; 1:</div>
                <div class="text-xs text-slate-300">1. Matriks Skalar Ordo 1x1: $$${sym} = \\begin{pmatrix} ${M[0][0]} \\end{pmatrix}$$</div>
                <div class="text-xs text-slate-300">2. Invers adalah kebalikan nilai skalar: $$${sym}^{-1} = \\begin{pmatrix} \\frac{1}{${M[0][0]}} \\end{pmatrix} = \\begin{pmatrix} ${invVal} \\end{pmatrix}$$</div>
              </div>
            `;
          } else if (n === 2) {
            const adj = [
              [M[1][1], -M[0][1]],
              [-M[1][0], M[0][0]]
            ];
            const inv = adj.map(row => row.map(v => Number((v / det).toFixed(3))));
            out.innerHTML = `
              <div class="space-y-3">
                <div class="text-indigo-300 font-bold text-sm sm:text-base">Langkah Lengkap Invers ${labelName} Ordo 2 &times; 2:</div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div class="font-bold text-slate-200">1. Hitung Determinan Matriks:</div>
                  <div>$$\\det(${sym}) = (a_{11} \\cdot a_{22}) - (a_{12} \\cdot a_{21})$$</div>
                  <div>$$\\det(${sym}) = (${M[0][0]} \\cdot ${M[1][1]}) - (${M[0][1]} \\cdot ${M[1][0]}) = ${M[0][0]*M[1][1]} - ${M[0][1]*M[1][0]} = \\mathbf{${det}}$$</div>
                </div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div class="font-bold text-slate-200">2. Tentukan Matriks Adjoin $\\text{Adj}(${sym})$:</div>
                  <div class="text-slate-400">Tukar elemen diagonal utama, lalu kalikan diagonal sekunder dengan -1:</div>
                  <div>$$\\text{Adj}(${sym}) = \\begin{pmatrix} d & -b \\ -c & a \\end{pmatrix} = ${formatMatrixLatex(adj)}$$</div>
                </div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div class="font-bold text-slate-200">3. Kalikan Skalar $\\frac{1}{\\det(${sym})}$:</div>
                  <div>$$${sym}^{-1} = \\frac{1}{\\det(${sym})} \\text{Adj}(${sym}) = \\frac{1}{${det}} ${formatMatrixLatex(adj)}$$</div>
                </div>
                <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
                  <div class="font-bold text-sm">Hasil Akhir Matriks Invers ${sym}&sup1;:</div>
                  <div class="text-sm">$$${sym}^{-1} = ${formatMatrixLatex(inv)}$$</div>
                </div>
              </div>
            `;
          } else if (n === 3) {
            const { cof, adj } = calcAdj3x3(M);
            const inv = adj.map(row => row.map(v => Number((v / det).toFixed(3))));
            out.innerHTML = `
              <div class="space-y-3">
                <div class="text-indigo-300 font-bold text-sm sm:text-base">Langkah Lengkap Invers ${labelName} Ordo 3 &times; 3:</div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div class="font-bold text-slate-200">1. Determinan Metode Sarrus:</div>
                  <div>$$\\det(${sym}) = \\mathbf{${det}}$$</div>
                </div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div class="font-bold text-slate-200">2. Matriks Kofaktor $\\text{Cof}(${sym})$ &amp; Matriks Adjoin $\\text{Adj}(${sym}) = \\text{Cof}(${sym})^T$:</div>
                  <div>$$\\text{Adj}(${sym}) = ${formatMatrixLatex(adj)}$$</div>
                </div>
                <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div class="font-bold text-slate-200">3. Rumus Invers $${sym}^{-1} = \\frac{1}{\\det(${sym})} \\text{Adj}(${sym})$:</div>
                  <div>$$${sym}^{-1} = \\frac{1}{${det}} ${formatMatrixLatex(adj)}$$</div>
                </div>
                <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
                  <div class="font-bold text-sm">Hasil Akhir Matriks Invers ${sym}&sup1;:</div>
                  <div class="text-sm">$$${sym}^{-1} = ${formatMatrixLatex(inv)}$$</div>
                </div>
              </div>
            `;
          } else {
            const inv = invertNxN(M);
            out.innerHTML = `
              <div class="space-y-3">
                <div class="text-indigo-300 font-bold text-sm sm:text-base">Invers ${labelName} Ordo ${n} &times; ${n} (Eliminasi Gauss-Jordan):</div>
                <div class="text-xs text-slate-300">Determinan: $$\\det(${sym}) = ${det}$$</div>
                <div class="text-xs sm:text-sm font-bold text-emerald-300">Hasil Akhir Matriks Invers:
                  $$${sym}^{-1} = ${formatMatrixLatex(inv)}$$
                </div>
              </div>
            `;
          }
        }
      } else if (op === 'detA' || op === 'detB') {
        const target = (op === 'detA') ? 'a' : 'b';
        const labelName = (target === 'a') ? 'Matriks A' : 'Matriks B';
        const sym = (target === 'a') ? 'A' : 'B';
        const m = (target === 'a') ? mA : mB;
        const n = (target === 'a') ? nA : nB;
        const M = (target === 'a') ? A : B;

        if (m !== n) {
          out.innerHTML = `
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
              <div class="font-bold text-amber-300 flex items-center gap-2">
                <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                <span>Syarat Determinan: ${labelName} Bukan Matriks Persegi (${m} &times; ${n})</span>
              </div>
              <p class="text-xs text-slate-300">
                Nilai determinan hanya terdefinisi untuk matriks persegi ($m = n$). Silakan sesuaikan jumlah baris dan kolom agar bernilai sama.
              </p>
            </div>
          `;
        } else {
          const det = detNxN(M);
          out.innerHTML = `
            <div class="space-y-3">
              <div class="text-indigo-300 font-bold text-sm sm:text-base">Perhitungan Determinan ${labelName} (${n} &times; ${n}):</div>
              ${n === 2 ? `
                <div class="text-xs text-slate-300">$$\\det(${sym}) = (a_{11} \\cdot a_{22}) - (a_{12} \\cdot a_{21})$$</div>
                <div class="text-xs text-slate-300">$$\\det(${sym}) = (${M[0][0]} \\cdot ${M[1][1]}) - (${M[0][1]} \\cdot ${M[1][0]}) = ${M[0][0]*M[1][1]} - ${M[0][1]*M[1][0]}$$</div>
              ` : ''}
              <div class="p-3 rounded-xl bg-dark-950/60 border border-slate-800 text-sm font-bold text-emerald-400">
                $$\\det(${sym}) = \\mathbf{${det}}$$
              </div>
            </div>
          `;
        }
      } else if (op === 'transA' || op === 'transB') {
        const target = (op === 'transA') ? 'a' : 'b';
        const labelName = (target === 'a') ? 'Matriks A' : 'Matriks B';
        const sym = (target === 'a') ? 'A' : 'B';
        const m = (target === 'a') ? mA : mB;
        const n = (target === 'a') ? nA : nB;
        const M = (target === 'a') ? A : B;

        const transposed = [];
        for (let c = 0; c < n; c++) {
          const row = [];
          for (let r = 0; r < m; r++) {
            row.push(M[r][c]);
          }
          transposed.push(row);
        }

        out.innerHTML = `
          <div class="space-y-3">
            <div class="text-indigo-300 font-bold text-sm sm:text-base">Transpose ${labelName} ($${sym}^T$):</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              Transpose menukar baris menjadi kolom. Ordo awal <strong class="text-white">${m} &times; ${n}</strong> berubah menjadi <strong class="text-emerald-400">${n} &times; ${m}</strong>.
            </p>
            <div class="text-xs sm:text-sm">
              $$${sym} = ${formatMatrixLatex(M)} \\quad \\implies \\quad ${sym}^T = ${formatMatrixLatex(transposed)}$$
            </div>
          </div>
        `;
      } else if (op === 'add' || op === 'sub') {
        const isAdd = (op === 'add');
        const opSym = isAdd ? '+' : '-';
        const opName = isAdd ? 'Penjumlahan' : 'Pengurangan';

        if (mA !== mB || nA !== nB) {
          out.innerHTML = `
            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 space-y-2">
              <div class="font-bold text-rose-300 flex items-center gap-2">
                <i data-lucide="alert-circle" class="w-4 h-4"></i>
                <span>Syarat ${opName} Tidak Terpenuhi: Ordo Tidak Sama!</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Penjumlahan dan pengurangan matriks mensyaratkan kedua matriks berordo <strong>sama persis ($m = p$ dan $n = q$)</strong>.
                Saat ini Matriks A berordo <strong class="text-white">${mA} &times; ${nA}</strong> sedangkan Matriks B berordo <strong class="text-white">${mB} &times; ${nB}</strong>.
              </p>
              <button onclick="syncMatrixBWithA(); calcMatrixAction('${op}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition">Samakan Ordo Matriks B ke A</button>
            </div>
          `;
        } else {
          const res = [];
          for (let r = 0; r < mA; r++) {
            const row = [];
            for (let c = 0; c < nA; c++) {
              row.push(isAdd ? (A[r][c] + B[r][c]) : (A[r][c] - B[r][c]));
            }
            res.push(row);
          }
          out.innerHTML = `
            <div class="space-y-3">
              <div class="text-emerald-300 font-bold text-sm sm:text-base">${opName} Matriks A ${opSym} B:</div>
              <div class="text-xs text-slate-300">
                Operasi dilakukan pada setiap elemen yang seletak:
              </div>
              <div>
                $$A ${opSym} B = ${formatMatrixLatex(A)} ${opSym} ${formatMatrixLatex(B)} = ${formatMatrixLatex(res)}$$
              </div>
            </div>
          `;
        }
      } else if (op === 'mult') {
        if (nA !== mB) {
          out.innerHTML = `
            <div class="p-4 sm:p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 space-y-3">
              <div class="flex items-center gap-2 font-bold text-rose-300 text-sm sm:text-base">
                <i data-lucide="x-circle" class="w-5 h-5 text-rose-400"></i>
                <span>❌ Syarat Perkalian Tidak Terpenuhi: Kolom A &ne; Baris B!</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Perkalian matriks $A_{m \\times n} \\times B_{p \\times q}$ hanya dapat dilakukan jika <strong>jumlah kolom matriks pertama ($n$) sama dengan jumlah baris matriks kedua ($p$)</strong>.
              </p>
              <div class="p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono">
                <div>Kolom Matriks A (n) = <span class="text-amber-400 font-bold">${nA}</span></div>
                <div>Baris Matriks B (p) = <span class="text-rose-400 font-bold">${mB}</span></div>
                <div class="text-slate-400">Karena ${nA} &ne; ${mB}, perkalian baris dengan kolom tidak memiliki pasangan yang cocok!</div>
              </div>
              <div class="flex items-center gap-2 pt-1">
                <button onclick="setMatrixPreset(2, 3, 3, 2); calcMatrixAction('mult')" class="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition">Uji Preset Cocok: 2&times;3 &amp; 3&times;2</button>
              </div>
            </div>
          `;
        } else {
          const res = [];
          for (let i = 0; i < mA; i++) {
            const row = [];
            for (let j = 0; j < nB; j++) {
              let sum = 0;
              for (let k = 0; k < nA; k++) {
                sum += A[i][k] * B[k][j];
              }
              row.push(sum);
            }
            res.push(row);
          }
          out.innerHTML = `
            <div class="space-y-3">
              <div class="text-amber-300 font-bold text-sm sm:text-base">Perkalian Matriks A &times; B (Dimensi Hasil: ${mA} &times; ${nB}):</div>
              <p class="text-xs text-slate-300">
                Setiap elemen diperoleh dari penjumlahan hasil kali elemen baris Matriks A dengan elemen kolom Matriks B:
              </p>
              <div class="overflow-x-auto py-1">
                $$A \\times B = ${formatMatrixLatex(A)} \\times ${formatMatrixLatex(B)} = ${formatMatrixLatex(res)}$$
              </div>
            </div>
          `;
        }
      }

      if (window.renderMathInElement) {
        renderMathInElement(out, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false,
          strict: false
        });
      }
      if (window.lucide) lucide.createIcons();
      if (typeof addStudentXP === 'function') addStudentXP(15, 'Eksplorasi Lab Matriks');
    }

    // 4. PYTHAGORAS VISUALIZER
    function syncPytSlider(param, val) {
      const slider = document.getElementById(`pyt-slider-${param}`);
      if (slider) slider.value = Math.min(100, Math.max(1, parseFloat(val) || 1));
      updatePythagoras();
    }

    function syncPytInput(param, val) {
      const input = document.getElementById(`pyt-input-${param}`);
      if (input) input.value = val;
      updatePythagoras();
    }


    window.syncPytSlider = syncPytSlider;
    window.syncPytInput = syncPytInput;
    window.updatePythagoras = updatePythagoras;
    window.syncVectorLab = syncVectorLab;
    window.updateVectorLab = updateVectorLab;

    function updatePythagoras() {
      const aInput = document.getElementById('pyt-input-a');
      const bInput = document.getElementById('pyt-input-b');
      if (!aInput || !bInput) return;

      const a = Math.max(1, parseFloat(aInput.value) || 6);
      const b = Math.max(1, parseFloat(bInput.value) || 8);
      const c = Math.sqrt(a * a + b * b);

      // SVG dimensions: width 340, height 280
      // Margin: left 70, bottom 230, available width 230, available height 180
      const maxW = 230;
      const maxH = 180;
      const scale = Math.min(maxH / a, maxW / b);
      const drawA = a * scale;
      const drawB = b * scale;

      const baseX = 70;
      const baseY = 230;
      const topX = baseX;
      const topY = baseY - drawA;
      const rightX = baseX + drawB;
      const rightY = baseY;

      // 1. Update Triangle Polygon
      const poly = document.getElementById('pyt-triangle');
      if (poly) poly.setAttribute('points', `${baseX},${baseY} ${rightX},${rightY} ${topX},${topY}`);

      // 2. Update Right-Angle Square Marker (siku-siku)
      const sq = Math.min(15, Math.max(7, Math.min(drawA, drawB) / 3));
      const rightAngle = document.getElementById('pyt-right-angle');
      if (rightAngle) {
        rightAngle.setAttribute('points', `${baseX},${baseY - sq} ${baseX + sq},${baseY - sq} ${baseX + sq},${baseY}`);
      }

      // 3. Update Vertex Circles & Labels
      const vC = document.getElementById('pyt-vertex-c');
      if (vC) { vC.setAttribute('cx', baseX); vC.setAttribute('cy', baseY); }
      const vCLbl = document.getElementById('pyt-vertex-c-lbl');
      if (vCLbl) { vCLbl.setAttribute('x', baseX - 16); vCLbl.setAttribute('y', baseY + 18); }

      const vA = document.getElementById('pyt-vertex-a');
      if (vA) { vA.setAttribute('cx', topX); vA.setAttribute('cy', topY); }
      const vALbl = document.getElementById('pyt-vertex-a-lbl');
      if (vALbl) { vALbl.setAttribute('x', topX - 16); vALbl.setAttribute('y', Math.max(16, topY - 8)); }

      const vB = document.getElementById('pyt-vertex-b');
      if (vB) { vB.setAttribute('cx', rightX); vB.setAttribute('cy', rightY); }
      const vBLbl = document.getElementById('pyt-vertex-b-lbl');
      if (vBLbl) { vBLbl.setAttribute('x', Math.min(320, rightX + 12)); vBLbl.setAttribute('y', rightY + 18); }

      // 4. Update Edge Badges (Positioned dynamically along each side)
      // Side a (Vertical AC: from topY to baseY)
      const midAY = (topY + baseY) / 2;
      const textAStr = `a = ${a}`;
      const badgeAWidth = Math.max(48, textAStr.length * 8 + 14);
      const badgeABg = document.getElementById('pyt-badge-a-bg');
      const labelA = document.getElementById('pyt-label-a');
      if (badgeABg) {
        badgeABg.setAttribute('x', baseX - badgeAWidth - 10);
        badgeABg.setAttribute('y', midAY - 11);
        badgeABg.setAttribute('width', badgeAWidth);
      }
      if (labelA) {
        labelA.setAttribute('x', baseX - (badgeAWidth / 2) - 10);
        labelA.setAttribute('y', midAY + 4);
        labelA.textContent = textAStr;
      }

      // Side b (Horizontal CB: from baseX to rightX)
      const midBX = (baseX + rightX) / 2;
      const textBStr = `b = ${b}`;
      const badgeBWidth = Math.max(48, textBStr.length * 8 + 14);
      const badgeBBg = document.getElementById('pyt-badge-b-bg');
      const labelB = document.getElementById('pyt-label-b');
      if (badgeBBg) {
        badgeBBg.setAttribute('x', midBX - (badgeBWidth / 2));
        badgeBBg.setAttribute('y', baseY + 8);
        badgeBBg.setAttribute('width', badgeBWidth);
      }
      if (labelB) {
        labelB.setAttribute('x', midBX);
        labelB.setAttribute('y', baseY + 23);
        labelB.textContent = textBStr;
      }

      // Side c (Hypotenuse AB: Midpoint offset perpendicularly outward)
      const midHypX = (topX + rightX) / 2;
      const midHypY = (topY + rightY) / 2;
      const hypLen = Math.sqrt(drawA * drawA + drawB * drawB);
      const normX = drawA / hypLen;
      const normY = -drawB / hypLen;
      const hypOffset = 24;
      const targetHypX = Math.min(300, Math.max(60, midHypX + normX * hypOffset));
      const targetHypY = Math.min(260, Math.max(20, midHypY + normY * hypOffset));

      const cDisplay = Number.isInteger(c) ? String(c) : c.toFixed(2);
      const textCStr = `c = ${cDisplay}`;
      const badgeCWidth = Math.max(54, textCStr.length * 8.5 + 16);
      const badgeCBg = document.getElementById('pyt-badge-c-bg');
      const labelC = document.getElementById('pyt-label-c');
      if (badgeCBg) {
        badgeCBg.setAttribute('x', targetHypX - (badgeCWidth / 2));
        badgeCBg.setAttribute('y', targetHypY - 12);
        badgeCBg.setAttribute('width', badgeCWidth);
      }
      if (labelC) {
        labelC.setAttribute('x', targetHypX);
        labelC.setAttribute('y', targetHypY + 4);
        labelC.textContent = textCStr;
      }

      // 5. Update Step-by-Step Calculation Box
      const calcEl = document.getElementById('pyt-calc-text');
      if (calcEl) {
        const a2 = a * a;
        const b2 = b * b;
        const sum = a2 + b2;
        const isInt = Number.isInteger(c);
        calcEl.innerHTML = `c = &radic;(${a}&sup2; + ${b}&sup2;) = &radic;(${a2} + ${b2}) = &radic;${sum} = <strong class="text-amber-400 font-bold">${isInt ? c : c.toFixed(3)}</strong>`;
      }

      // 6. Triple Pythagoras Badge
      const badge = document.getElementById('pyt-triple-badge');
      if (badge) {
        if (Number.isInteger(c)) {
          badge.classList.remove('hidden');
          badge.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0"></i><span>Tripel Pythagoras Sempurna (${a}, ${b}, ${c})!</span>`;
        } else {
          badge.classList.add('hidden');
        }
      }
      if (window.lucide) lucide.createIcons();
    }

    // 5. VECTOR & RESULTANT SIMULATOR (FISIKA FASE E & F)
    function syncVectorLab(vecId, type, val) {
      if (type === 'mag') {
        const input = document.getElementById(`vec-in-mag-${vecId}`);
        if (input) input.value = Math.max(1, parseFloat(val) || 1);
      } else if (type === 'deg') {
        const deg = parseFloat(val) || 0;
        const slider = document.getElementById(`vec-slide-deg-${vecId}`);
        if (slider) slider.value = ((deg % 360) + 360) % 360;
      } else if (type === 'deg_slide') {
        const input = document.getElementById(`vec-in-deg-${vecId}`);
        if (input) input.value = val;
      }
      updateVectorLab();
    }

    function updateVectorLab() {
      const f1Input = document.getElementById('vec-in-mag-a');
      const deg1Input = document.getElementById('vec-in-deg-a');
      const f2Input = document.getElementById('vec-in-mag-b');
      const deg2Input = document.getElementById('vec-in-deg-b');

      if (!f1Input || !deg1Input || !f2Input || !deg2Input) return;

      const f1 = Math.max(0.1, parseFloat(f1Input.value) || 10);
      const deg1 = parseFloat(deg1Input.value) || 0;
      const f2 = Math.max(0.1, parseFloat(f2Input.value) || 8);
      const deg2 = parseFloat(deg2Input.value) || 0;

      // Update control headers
      const valA = document.getElementById('vec-val-a');
      const valB = document.getElementById('vec-val-b');
      if (valA) valA.textContent = `${f1} N @ ${deg1}°`;
      if (valB) valB.textContent = `${f2} N @ ${deg2}°`;

      // Cartesian decomposition
      const rad1 = (deg1 * Math.PI) / 180;
      const rad2 = (deg2 * Math.PI) / 180;

      const f1x = f1 * Math.cos(rad1);
      const f1y = f1 * Math.sin(rad1);
      const f2x = f2 * Math.cos(rad2);
      const f2y = f2 * Math.sin(rad2);

      const rx = f1x + f2x;
      const ry = f1y + f2y;
      const r = Math.hypot(rx, ry);
      const degR = ((Math.atan2(ry, rx) * 180 / Math.PI) + 360) % 360;

      const deltaDeg = Math.abs(deg2 - deg1);
      const rCosinus = Math.sqrt(f1 * f1 + f2 * f2 + 2 * f1 * f2 * Math.cos((deltaDeg * Math.PI) / 180));

      // Scaling inside Cartesian grid (viewBox: -170 -170 340 340, radius max 135)
      const maxMag = Math.max(f1, f2, r, 5);
      const scale = 130 / maxMag;

      const p1x = f1x * scale;
      const p1y = -f1y * scale; // inverted Y for SVG
      const p2x = f2x * scale;
      const p2y = -f2y * scale;
      const prx = rx * scale;
      const pry = -ry * scale;

      // Update SVG Lines
      const lineA = document.getElementById('vec-line-a');
      if (lineA) { lineA.setAttribute('x2', p1x); lineA.setAttribute('y2', p1y); }

      const lineB = document.getElementById('vec-line-b');
      if (lineB) { lineB.setAttribute('x2', p2x); lineB.setAttribute('y2', p2y); }

      const lineR = document.getElementById('vec-line-r');
      if (lineR) { lineR.setAttribute('x2', prx); lineR.setAttribute('y2', pry); }

      // Update Parallelogram dotted lines
      const paraA = document.getElementById('vec-para-a');
      if (paraA) {
        paraA.setAttribute('x1', p1x); paraA.setAttribute('y1', p1y);
        paraA.setAttribute('x2', prx); paraA.setAttribute('y2', pry);
      }
      const paraB = document.getElementById('vec-para-b');
      if (paraB) {
        paraB.setAttribute('x1', p2x); paraB.setAttribute('y1', p2y);
        paraB.setAttribute('x2', prx); paraB.setAttribute('y2', pry);
      }

      // Update Vector Labels
      const textA = document.getElementById('vec-text-a');
      if (textA) {
        const offset = 14;
        textA.setAttribute('x', p1x + Math.cos(rad1) * offset);
        textA.setAttribute('y', p1y - Math.sin(rad1) * offset);
        textA.textContent = `F₁ = ${f1} N`;
      }
      const textB = document.getElementById('vec-text-b');
      if (textB) {
        const offset = 14;
        textB.setAttribute('x', p2x + Math.cos(rad2) * offset);
        textB.setAttribute('y', p2y - Math.sin(rad2) * offset);
        textB.textContent = `F₂ = ${f2} N`;
      }
      const textR = document.getElementById('vec-text-r');
      if (textR) {
        const radR = (degR * Math.PI) / 180;
        const offset = 16;
        textR.setAttribute('x', prx + Math.cos(radR) * offset);
        textR.setAttribute('y', pry - Math.sin(radR) * offset);
        textR.textContent = `R = ${r.toFixed(1)} N`;
      }

      // Update Telemetry Breakdown Box
      const telemetry = document.getElementById('vec-telemetry');
      if (telemetry) {
        telemetry.innerHTML = `
          <div class="space-y-2 text-xs">
            <div class="p-2 rounded-lg bg-dark-950/70 border border-slate-800 space-y-1">
              <span class="text-cyan-400 font-bold block">1. Uraian Komponen Vektor F₁:</span>
              <div class="pl-2 space-y-0.5 text-slate-300 font-mono text-[11px]">
                <div>F₁ₓ = F₁ · cos(θ₁) = ${f1} · cos(${deg1}°) = <strong>${f1x.toFixed(2)} N</strong></div>
                <div>F₁ᵧ = F₁ · sin(θ₁) = ${f1} · sin(${deg1}°) = <strong>${f1y.toFixed(2)} N</strong></div>
              </div>
            </div>

            <div class="p-2 rounded-lg bg-dark-950/70 border border-slate-800 space-y-1">
              <span class="text-amber-400 font-bold block">2. Uraian Komponen Vektor F₂:</span>
              <div class="pl-2 space-y-0.5 text-slate-300 font-mono text-[11px]">
                <div>F₂ₓ = F₂ · cos(θ₂) = ${f2} · cos(${deg2}°) = <strong>${f2x.toFixed(2)} N</strong></div>
                <div>F₂ᵧ = F₂ · sin(θ₂) = ${f2} · sin(${deg2}°) = <strong>${f2y.toFixed(2)} N</strong></div>
              </div>
            </div>

            <div class="p-2 rounded-lg bg-dark-950/70 border border-slate-800 space-y-1">
              <span class="text-indigo-300 font-bold block">3. Penjumlahan Komponen (ΣF):</span>
              <div class="pl-2 space-y-0.5 text-slate-300 font-mono text-[11px]">
                <div>ΣFₓ = F₁ₓ + F₂ₓ = ${f1x.toFixed(2)} + (${f2x.toFixed(2)}) = <strong>${rx.toFixed(2)} N</strong></div>
                <div>ΣFᵧ = F₁ᵧ + F₂ᵧ = ${f1y.toFixed(2)} + (${f2y.toFixed(2)}) = <strong>${ry.toFixed(2)} N</strong></div>
              </div>
            </div>

            <div class="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-1">
              <span class="text-emerald-400 font-extrabold block">4. Resultan & Arah:</span>
              <div class="pl-2 space-y-1 text-slate-200 font-mono text-xs">
                <div>R = √((ΣFₓ)² + (ΣFᵧ)²) = √(${rx.toFixed(2)}² + ${ry.toFixed(2)}²) = <strong class="text-emerald-300 text-sm">${r.toFixed(2)} N</strong></div>
                <div>Arah θ_R = arctan(ΣFᵧ / ΣFₓ) = <strong class="text-emerald-300">${degR.toFixed(1)}°</strong> terhadap sumbu +X</div>
                <div class="pt-1 text-[10px] text-slate-400 border-t border-emerald-500/20">
                  Cek Rumus Kosinus: R = √(F₁² + F₂² + 2F₁F₂ cos(Δθ)) = <span class="text-emerald-400 font-bold">${rCosinus.toFixed(2)} N</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }

    const CHEAT_SHEETS_DATA = [
      {
        title: "Fisika: Kinematika & Dinamika Gerak",
        category: "Fisika",
        badge: "Fase F (Kelas 11)",
        formulas: [
          { name: "Kecepatan & Percepatan Turunan", formula: "$$v(t) = \\frac{dr}{dt}, \\quad a(t) = \\frac{dv}{dt} = \\frac{d^2r}{dt^2}$$" },
          { name: "Jangkauan Terjauh Peluru", formula: "$$X_{\\max} = \\frac{v_0^2\\sin 2\\theta}{g}, \\quad H_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g}$$" },
          { name: "Hukum II Newton & Gaya Gesek", formula: "$$\\Sigma F = ma, \\quad f_s \\le \\mu_s N, \\quad f_k = \\mu_k N$$" },
          { name: "Percepatan Menggelinding Pejal", formula: "$$a = \\frac{g\\sin\\theta}{1 + k}, \\quad \\tau = I\\alpha$$" }
        ]
      },
      {
        title: "Fisika: Usaha, Fluida & Termodinamika",
        category: "Fisika",
        badge: "Fase F (Kelas 11)",
        formulas: [
          { name: "Teorema Usaha-Energi & Impuls", formula: "$$W = \\Delta E_k, \\quad I = F\\Delta t = \\Delta p$$" },
          { name: "Hukum Archimedes & Pascal", formula: "$$F_A = \\rho_f V_{\\text{celup}} g, \\quad \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$" },
          { name: "Persamaan Bernoulli", formula: "$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$$" },
          { name: "Efisiensi Mesin Kalor Carnot", formula: "$$\\eta = \\left(1 - \\frac{T_C}{T_H}\\right) \\times 100\\%$$" }
        ]
      },
      {
        title: "Fisika: Listrik Statis & Dinamis DC",
        category: "Fisika",
        badge: "Fase F Lanjut (Kelas 12)",
        formulas: [
          { name: "Hukum Coulomb & Medan Listrik", formula: "$$F = k\\frac{q_1 q_2}{r^2}, \\quad E = k\\frac{q}{r^2}, \\quad V = k\\frac{q}{r}$$" },
          { name: "Kapasitor Keping Sejajar", formula: "$$C = \\varepsilon_0 \\frac{A}{d}, \\quad W = \\frac{1}{2}CV^2$$" },
          { name: "Hambatan Kawat Tarikan", formula: "$$R = \\rho\\frac{L}{A}, \\quad R' = n^2 R$$" },
          { name: "Hukum II Kirchhoff", formula: "$$\\Sigma \\mathcal{E} + \\Sigma (IR) = 0$$" }
        ]
      },
      {
        title: "Fisika: Medan Magnet, Arus AC & Kuantum",
        category: "Fisika",
        badge: "Fase F Lanjut (Kelas 12)",
        formulas: [
          { name: "Gaya Lorentz Muatan & Kawat", formula: "$$F = qvB\\sin\\theta, \\quad F = BIL\\sin\\theta$$" },
          { name: "Induksi Faraday & Trafo", formula: "$$\\mathcal{E} = -N\\frac{d\\Phi}{dt}, \\quad \\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}$$" },
          { name: "Impedansi RLC Seri & Resonansi", formula: "$$Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$" },
          { name: "Efek Fotolistrik & Defek Massa", formula: "$$E_k = hf - W_0, \\quad E_b = \\Delta m \\times 931{,}5\\text{ MeV}$$" }
        ]
      },
      {
        title: 'Fisika: Pengukuran, Dimensi & Ketidakpastian',
        category: 'Fisika',
        badge: 'Fase E (Kelas 10)',
        formulas: [
          { name: 'Ketidakpastian Tunggal', formula: '$$\\Delta x = \\frac{1}{2} \\times \\text{NST}, \\quad x = (x_0 \\pm \\Delta x)$$' },
          { name: 'Ketidakpastian Relatif', formula: '$$\\text{KR} = \\frac{\\Delta x}{\\bar{x}} \\times 100\\%$$' },
          { name: 'Standar Deviasi Rata-rata', formula: '$$S_{\\bar{x}} = \\frac{1}{N}\\sqrt{\\frac{N\\sum x_i^2 - (\\sum x_i)^2}{N - 1}}$$' },
          { name: 'Perambatan Ketidakpastian Volume', formula: '$$V = s^3 \\implies \\frac{\\Delta V}{V} = 3 \\times \\frac{\\Delta s}{s}$$' }
        ]
      },
      {
        title: 'Fisika: Vektor, Komponen & Perkalian Vektor',
        category: 'Fisika',
        badge: 'Fase E (Kelas 10)',
        formulas: [
          { name: 'Resultan Kosinus Dua Vektor', formula: '$$R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}$$' },
          { name: 'Selisih Dua Vektor', formula: '$$|\\vec{F}_1 - \\vec{F}_2| = \\sqrt{F_1^2 + F_2^2 - 2F_1 F_2 \\cos\\theta}$$' },
          { name: 'Uraian Komponen Kartesius', formula: '$$F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta, \\quad R = \\sqrt{(\\Sigma F_x)^2 + (\\Sigma F_y)^2}$$' },
          { name: 'Dot Product & Cross Product', formula: '$$\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta, \\quad |\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$$' }
        ]
      },
      {
        title: 'Aljabar & Persamaan Kuadrat',
        category: 'Aljabar',
        badge: 'Fase D & E',
        formulas: [
          { name: 'Rumus ABC (Kuadratik)', formula: '$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$' },
          { name: 'Teorema Vieta Akar', formula: '$$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$$' },
          { name: 'Jumlah Kuadrat Akar', formula: '$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$$' },
          { name: 'Selisih Dua Kuadrat', formula: '$$a^2 - b^2 = (a + b)(a - b)$$' }
        ]
      },
      {
        title: 'Eksponen & Logaritma',
        category: 'Aljabar',
        badge: 'Fase E (Kelas 10)',
        formulas: [
          { name: 'Penjumlahan Pangkat', formula: '$$a^m \\times a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}$$' },
          { name: 'Pangkat Berantai', formula: '$$(a^m)^n = a^{mn}, \\quad a^{-n} = \\frac{1}{a^n}$$' },
          { name: 'Penjumlahan Logaritma', formula: '$${}^a\\log(b \\cdot c) = {}^a\\log b + {}^a\\log c$$' },
          { name: 'Pergantian Basis Log', formula: '$${}^a\\log b = \\frac{{}^c\\log b}{{}^c\\log a} = \\frac{1}{{}^b\\log a}$$' }
        ]
      },
      {
        title: 'Trigonometri Dasar & Relasi Kuadran',
        category: 'Trigonometri',
        badge: 'Fase E & F',
        formulas: [
          { name: 'Definisi Siku-Siku', formula: '$$\\sin = \\frac{\\text{De}}{\\text{Mi}}, \\quad \\cos = \\frac{\\text{Sa}}{\\text{Mi}}, \\quad \\tan = \\frac{\\text{De}}{\\text{Sa}}$$' },
          { name: 'Identitas Pythagoras Tri', formula: '$$\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta$$' },
          { name: 'Aturan Sinus', formula: '$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$' },
          { name: 'Aturan Cosinus', formula: '$$a^2 = b^2 + c^2 - 2bc\\cos A$$' }
        ]
      },
      {
        title: "Kalkulus: Turunan & Dalil L'Hopital",
        category: 'Kalkulus',
        badge: 'Fase F (Kelas 11-12)',
        formulas: [
          { name: 'Turunan Perkalian (u.v)', formula: "$$(u \\cdot v)' = u'v + uv'$$" },
          { name: 'Turunan Pembagian (u/v)', formula: "$$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$" },
          { name: 'Aturan Rantai', formula: "$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$" },
          { name: "Dalil L'Hopital (0/0)", formula: "$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$" }
        ]
      },
      {
        title: 'Kalkulus: Integral & Luas Parabola',
        category: 'Kalkulus',
        badge: 'Fase F (Kelas 12)',
        formulas: [
          { name: 'Integral Aljabar', formula: '$$\\int ax^n dx = \\frac{a}{n+1} x^{n+1} + C$$' },
          { name: 'Teorema Dasar Kalkulus', formula: '$$\\int_a^b f(x) dx = F(b) - F(a)$$' },
          { name: 'Integral Parsial Tanzalin', formula: '$$\\int u dv = uv - \\int v du$$' },
          { name: 'Luas Parabola-Garis Cepat', formula: '$$L = \\frac{D\\sqrt{D}}{6a^2}$$' }
        ]
      },
      {
        title: 'Matematika Keuangan: Majemuk & Anuitas',
        category: 'Keuangan',
        badge: 'Fase F (Kelas 11-12)',
        formulas: [
          { name: 'Bunga Majemuk Diskret', formula: '$$M_n = M_0 (1 + i)^n$$' },
          { name: 'Bunga Majemuk Kontinu', formula: '$$M(t) = M_0 \\cdot e^{r \\cdot t}$$' },
          { name: 'Anuitas Cicilan Bulanan', formula: '$$A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}}$$' },
          { name: 'Porsi Cicilan', formula: '$$A = a_n + b_n \\quad (\\text{Pokok} + \\text{Bunga})$$' }
        ]
      }
    ];

    function renderCheatSheets() {
      const container = document.getElementById('cheatsheet-grid');
      if (!container) return;

      container.innerHTML = CHEAT_SHEETS_DATA.map(card => `
        <div class="clean-card rounded-2xl p-5 border border-slate-800 space-y-3.5 hover:border-slate-700 transition">
          <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">${card.category}</span>
              <h3 class="text-sm font-bold text-white">${card.title}</h3>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded bg-dark-900 border border-slate-700 text-slate-300 font-semibold">${card.badge}</span>
          </div>

          <div class="space-y-2">
            ${card.formulas.map(f => `
              <div class="p-2.5 rounded-xl bg-dark-900 border border-slate-800/80 hover:border-slate-700 space-y-1">
                <div class="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>${f.name}</span>
                  <button onclick="copyCheatFormula('${encodeURIComponent(f.formula)}')" class="text-slate-500 hover:text-amber-400 transition" title="Salin Formula">
                    <i data-lucide="copy" class="w-3 h-3"></i>
                  </button>
                </div>
                <div class="formula-math overflow-x-auto text-slate-100 text-xs py-1">
                  ${f.formula}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      lucide.createIcons();
      if (window.renderMathInElement) {
        renderMathInElement(container, { delimiters: [{ left: '$$', right: '$$', display: true }] });
      }
    }

    function copyCheatFormula(encoded) {
      const raw = decodeURIComponent(encoded).replace(/\$\$/g, '');
      navigator.clipboard.writeText(raw).then(() => {
        showXPToast(5, 'Formula Tersalin ke Clipboard');
      });
    }
