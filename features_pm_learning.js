/* The Arich Study — self-paced, offline-first PM learning path. */
(function () {
  'use strict';

  const COURSE_ORDER = [
    'cara-berpikir-pm', 'bilangan-satuan', 'rasio-persentase',
    'aljabar-model', 'spltv', 'fungsi-model', 'kuadrat-optimasi', 'eksponen-logaritma', 'laju-kerja-campuran', 'barisan-pola',
    'kesebangunan', 'rasio-trapesium', 'geometri-trigonometri', 'lingkaran-busur-juring', 'geometri-koordinat', 'bangun-ruang-satuan',
    'membaca-data', 'statistika-data', 'statistika-penyebaran', 'peluang-kombinatorika', 'kombinatorika-lanjutan', 'peluang-bersyarat', 'sampling-regresi',
    'optimasi-keputusan', 'membaca-klaim-data', 'simulasi-integratif'
  ];
  const PHASES = [
    { title: '1. Fondasi kuantitatif', description: 'Bangun ketelitian membaca konteks, rasio, satuan, dan operasi bilangan.', ids: ['cara-berpikir-pm', 'bilangan-satuan', 'rasio-persentase'] },
    { title: '2. Aljabar, fungsi, dan perubahan', description: 'Modelkan persamaan, grafik, pertumbuhan, laju, dan pola sampai tingkat SMA.', ids: ['aljabar-model', 'spltv', 'fungsi-model', 'kuadrat-optimasi', 'eksponen-logaritma', 'laju-kerja-campuran', 'barisan-pola'] },
    { title: '3. Geometri dan pengukuran', description: 'Hubungkan gambar, sudut, skala, koordinat, trigonometri, dan ukuran bangun.', ids: ['kesebangunan', 'rasio-trapesium', 'geometri-trigonometri', 'lingkaran-busur-juring', 'geometri-koordinat', 'bangun-ruang-satuan'] },
    { title: '4. Data dan ketidakpastian', description: 'Baca grafik, rangkum sebaran, hitung peluang, dan nilai mutu sampel.', ids: ['membaca-data', 'statistika-data', 'statistika-penyebaran', 'peluang-kombinatorika', 'kombinatorika-lanjutan', 'peluang-bersyarat', 'sampling-regresi'] },
    { title: '5. Optimasi dan penalaran terpadu', description: 'Uji kendala, bandingkan argumen, lalu terapkan semuanya pada evaluasi akhir.', ids: ['optimasi-keputusan', 'membaca-klaim-data', 'simulasi-integratif'] }
  ];
  const MODULES = (Array.isArray(window.UTBK_PM_MATERI) ? window.UTBK_PM_MATERI : []).slice().sort((a, b) => {
    const ai = COURSE_ORDER.indexOf(a.id);
    const bi = COURSE_ORDER.indexOf(b.id);
    return (ai < 0 ? Number.MAX_SAFE_INTEGER : ai) - (bi < 0 ? Number.MAX_SAFE_INTEGER : bi);
  });
  const FOUNDATION_MODULES = new Set(['cara-berpikir-pm', 'bilangan-satuan', 'rasio-persentase']);
  MODULES.forEach((item, index) => {
    item.number = String(index + 1).padStart(2, '0');
    item.level = item.level || (FOUNDATION_MODULES.has(item.id) ? 'Fondasi SMA' : 'Inti SMA');
  });
  const STORAGE_KEY = 'the_arich_pm_learning_v1';
  const state = { currentId: null, practiceStates: Object.create(null) };

  function getPracticeItems(item) {
    if (Array.isArray(item.practiceSet) && item.practiceSet.length) return item.practiceSet;
    const extras = window.UTBK_PM_LATIHAN_TAMBAHAN && window.UTBK_PM_LATIHAN_TAMBAHAN[item.id];
    return [item.practice, ...(Array.isArray(extras) ? extras : [])].filter(Boolean);
  }

  function getPracticeState(item) {
    if (!state.practiceStates[item.id]) state.practiceStates[item.id] = { index: 0, answers: [], finished: false };
    return state.practiceStates[item.id];
  }

  function readProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        completed: Array.isArray(value.completed) ? value.completed : [],
        lastModuleId: typeof value.lastModuleId === 'string' ? value.lastModuleId : '',
        quizScores: value.quizScores && typeof value.quizScores === 'object' ? value.quizScores : {}
      };
    } catch (error) {
      return { completed: [], lastModuleId: '', quizScores: {} };
    }
  }

  function saveProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (error) { /* Private browsing may block storage. */ }
  }

  function escapeHTML(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
  }

  function getModule(id) {
    return MODULES.find((item) => item.id === id) || null;
  }

  function renderProgress() {
    const progress = readProgress();
    const count = MODULES.filter((item) => progress.completed.includes(item.id)).length;
    const label = document.getElementById('pm-learning-progress-label');
    const detailBadge = document.getElementById('pm-learning-progress-label-detail');
    const bar = document.getElementById('pm-learning-progress-bar');
    const detailLabel = document.getElementById('pm-learning-progress-detail-text');
    const detailBar = document.getElementById('pm-learning-progress-detail-bar');
    const totalLabel = document.getElementById('pm-learning-total-label');
    const value = `${count} dari ${MODULES.length} materi selesai`;
    const width = `${MODULES.length ? Math.round((count / MODULES.length) * 100) : 0}%`;
    if (label) label.textContent = value;
    if (detailBadge) detailBadge.textContent = `Progres ${count}/${MODULES.length}`;
    if (detailLabel) detailLabel.textContent = value;
    if (totalLabel) totalLabel.textContent = `01–${String(MODULES.length).padStart(2, '0')}`;
    if (bar) bar.style.width = width;
    if (detailBar) detailBar.style.width = width;
    return progress;
  }

  function renderCatalog(query = '') {
    const container = document.getElementById('pm-learning-grid');
    if (!container) return;
    const progress = renderProgress();
    const normalized = String(query).trim().toLocaleLowerCase('id-ID');
    const visible = MODULES.filter((item) => {
      const haystack = [item.title, item.summary, item.area, ...(item.concepts || [])].join(' ').toLocaleLowerCase('id-ID');
      return !normalized || haystack.includes(normalized);
    });

    const renderCard = (item) => {
      const done = progress.completed.includes(item.id);
      const score = progress.quizScores[item.id];
      const scoreLabel = score ? `Cek ${score.score}/${score.total}` : `${getPracticeItems(item).length} cek`;
      return `
        <article class="pm-learning-card ${done ? 'is-complete' : ''}">
          <div class="pm-learning-card-top"><div class="pm-learning-card-ident"><span class="pm-learning-number">${escapeHTML(item.number)}</span><span class="pm-learning-level">${escapeHTML(item.level)}</span></div><span class="pm-learning-area">${escapeHTML(item.area)}</span></div>
          <h4>${escapeHTML(item.title)}</h4>
          <p>${escapeHTML(item.summary)}</p>
          <div class="pm-learning-card-footer"><span>${escapeHTML(item.time)}</span><span>${done ? '✓ Tuntas' : escapeHTML(scoreLabel)}</span></div>
          <button type="button" class="pm-learning-card-action" onclick="window.featuresPMLearning.open('${escapeHTML(item.id)}')">${done ? 'Ulangi materi' : 'Mulai materi'} <span aria-hidden="true">→</span></button>
        </article>`;
    };

    container.innerHTML = visible.length ? PHASES.map((phase) => {
      const phaseModules = visible.filter((item) => phase.ids.includes(item.id));
      if (!phaseModules.length) return '';
      return `<section class="pm-learning-phase"><div class="pm-learning-phase-head"><div><h4>${escapeHTML(phase.title)}</h4><p>${escapeHTML(phase.description)}</p></div><span>${phaseModules.length} materi</span></div><div class="pm-learning-phase-cards">${phaseModules.map(renderCard).join('')}</div></section>`;
    }).join('') : '<p class="pm-learning-empty">Tidak ada materi yang cocok. Coba kata kunci lain seperti peluang, sebangun, data, atau barisan.</p>';

    const count = document.getElementById('pm-learning-result-count');
    if (count) count.textContent = `${visible.length} dari ${MODULES.length} materi`;
    if (window.lucide) window.lucide.createIcons();
  }

  function openModule(id) {
    const item = getModule(id);
    if (!item) return;
    state.currentId = item.id;
    const progress = readProgress();
    progress.lastModuleId = item.id;
    saveProgress(progress);
    if (typeof window.switchView === 'function') window.switchView('pm-learning');
    else renderModule();
  }

  function renderModule() {
    const id = state.currentId || readProgress().lastModuleId || MODULES[0]?.id;
    const item = getModule(id);
    const nav = document.getElementById('pm-learning-module-nav');
    const content = document.getElementById('pm-learning-lesson-content');
    if (!item || !content) return;
    state.currentId = item.id;
    const progress = readProgress();
    const activeIndex = MODULES.findIndex((module) => module.id === item.id);

    if (nav) {
      nav.innerHTML = MODULES.map((module) => {
        const isActive = module.id === item.id;
        const isDone = progress.completed.includes(module.id);
        return `<button type="button" class="pm-learning-nav-item ${isActive ? 'is-active' : ''} ${isDone ? 'is-complete' : ''}" aria-current="${isActive ? 'page' : 'false'}" onclick="window.featuresPMLearning.open('${escapeHTML(module.id)}')"><span class="pm-learning-nav-number">${isDone ? '✓' : escapeHTML(module.number)}</span><span>${escapeHTML(module.title)}</span></button>`;
      }).join('');
    }

    const done = progress.completed.includes(item.id);
    const chips = (item.concepts || []).map((text) => `<span class="pm-learning-concept-chip">${escapeHTML(text)}</span>`).join('');
    const steps = (item.example.steps || []).map((step, index) => `<li><span class="pm-learning-step-number">${index + 1}</span><div>${escapeHTML(step)}</div></li>`).join('');
    const pitfalls = (item.pitfalls || []).map((text) => `<li>${escapeHTML(text)}</li>`).join('');
    const prev = MODULES[activeIndex - 1];
    const next = MODULES[activeIndex + 1];

    content.innerHTML = `
      <div class="pm-learning-lesson-head">
        <div><p class="pm-eyebrow">${escapeHTML(item.area)} <span aria-hidden="true">·</span> ${escapeHTML(item.time)}</p><h2>${escapeHTML(item.title)}</h2><p class="pm-learning-lesson-summary">${escapeHTML(item.summary)}</p></div>
        <button type="button" class="pm-learning-complete ${done ? 'is-complete' : ''}" onclick="window.featuresPMLearning.toggleComplete()">${done ? '✓ Materi selesai' : 'Tandai selesai'}</button>
      </div>
      <div class="pm-learning-concepts">${chips}</div>

      <section class="pm-learning-section"><div class="pm-learning-section-label"><span>01</span><h3>Pahami idenya</h3></div><div class="pm-learning-richtext">${item.conceptHtml}</div></section>
      <section class="pm-learning-section"><div class="pm-learning-section-label"><span>02</span><h3>Rumus yang perlu dikenal</h3></div><div class="pm-learning-richtext">${item.formulaHtml}${item.formulaExtraHtml || ''}</div></section>
      <section class="pm-learning-section pm-learning-quick"><div class="pm-learning-section-label"><span>03</span><h3>Cara cepat, dengan alasannya</h3></div><div class="pm-learning-richtext">${item.shortcutHtml}</div></section>
      <section class="pm-learning-example"><p class="pm-eyebrow">Contoh mandiri</p><h3>${escapeHTML(item.example.title)}</h3><p class="pm-learning-example-prompt">${escapeHTML(item.example.prompt)}</p><ol class="pm-learning-steps">${steps}</ol></section>
      <section class="pm-learning-section pm-learning-pitfalls"><div class="pm-learning-section-label"><span>04</span><h3>Kesalahan yang sering terjadi</h3></div><ul class="pm-learning-pitfall-list">${pitfalls}</ul></section>
      ${item.advancedHtml ? `<section class="pm-learning-section pm-learning-advanced"><div class="pm-learning-section-label"><span>05</span><h3>${escapeHTML(item.advancedTitle || 'Pendalaman SMA')}</h3></div><div class="pm-learning-richtext">${item.advancedHtml}</div></section>` : ''}
      <section class="pm-learning-practice" aria-labelledby="pm-learning-practice-title"><div class="pm-learning-practice-head"><div><p class="pm-eyebrow">Latihan bertingkat</p><h3 id="pm-learning-practice-title"></h3></div><span id="pm-practice-counter" class="pm-learning-result-count"></span></div><div id="pm-practice-choices" class="pm-practice-choices"></div><div id="pm-practice-feedback" class="pm-practice-feedback" aria-live="polite"></div><div class="pm-practice-actions"><button id="pm-practice-next" type="button" class="pm-primary-cta" onclick="window.featuresPMLearning.nextPractice()" hidden>Soal berikutnya →</button><button id="pm-practice-restart" type="button" class="pm-subtle-action" onclick="window.featuresPMLearning.restartPractice()" hidden>Ulangi kuis</button></div></section>
      <nav class="pm-learning-page-nav" aria-label="Navigasi materi">${prev ? `<button type="button" class="pm-subtle-action" onclick="window.featuresPMLearning.open('${escapeHTML(prev.id)}')">← ${escapeHTML(prev.title)}</button>` : '<span></span>'}${next ? `<button type="button" class="pm-primary-cta" onclick="window.featuresPMLearning.open('${escapeHTML(next.id)}')">Materi berikutnya →</button>` : '<button type="button" class="pm-primary-cta" onclick="switchView(\'pm-catalog\')">Kembali ke latihan →</button>'}</nav>`;

    renderProgress();
    renderPractice(item);
    if (window.lucide) window.lucide.createIcons();
    if (typeof window.triggerLatex === 'function') window.triggerLatex(content);
    else if (typeof window.renderMathInElement === 'function') window.renderMathInElement(content);
  }

  function renderPractice(item) {
    const items = getPracticeItems(item);
    const entry = getPracticeState(item);
    const prompt = document.getElementById('pm-learning-practice-title');
    const counter = document.getElementById('pm-practice-counter');
    const choices = document.getElementById('pm-practice-choices');
    const feedback = document.getElementById('pm-practice-feedback');
    const next = document.getElementById('pm-practice-next');
    const restart = document.getElementById('pm-practice-restart');
    if (!prompt || !counter || !choices || !feedback || !next || !restart || !items.length) return;

    if (entry.finished || entry.index >= items.length) {
      if (!entry.finished) {
        entry.score = entry.answers.filter((result) => result && result.isCorrect).length;
        entry.passed = entry.score >= Math.ceil(items.length * 0.7);
        entry.finished = true;
        const progress = readProgress();
        progress.quizScores[item.id] = { score: entry.score, total: items.length, passed: entry.passed };
        if (entry.passed && !progress.completed.includes(item.id)) progress.completed.push(item.id);
        saveProgress(progress);
      }
      prompt.textContent = 'Hasil cek pemahaman';
      counter.textContent = entry.passed ? 'Tuntas' : 'Belum tuntas';
      choices.innerHTML = '';
      feedback.className = `pm-practice-feedback is-visible ${entry.passed ? 'is-correct' : 'is-wrong'}`;
      feedback.innerHTML = `<strong>${entry.passed ? 'Materi dikuasai.' : 'Perlu satu putaran lagi.'}</strong> Skor percobaan pertama ${entry.score}/${items.length}. Ambang tuntas: ${Math.ceil(items.length * 0.7)}/${items.length}. Jawaban dan pembahasan sudah muncul saat setiap soal dikerjakan.`;
      next.hidden = true;
      restart.hidden = false;
      renderProgress();
      renderCatalog(document.getElementById('pm-learning-search')?.value || '');
      return;
    }

    const question = items[entry.index];
    prompt.textContent = question.prompt;
    counter.textContent = `Soal ${entry.index + 1} dari ${items.length}`;
    choices.innerHTML = question.options.map((option, index) => `<button type="button" class="pm-practice-option" data-option="${index}" onclick="window.featuresPMLearning.answer(${index})"><span class="pm-practice-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`).join('');
    feedback.className = 'pm-practice-feedback';
    feedback.textContent = '';
    next.hidden = true;
    restart.hidden = true;
    if (entry.answers[entry.index]) showPracticeAnswer(item, question, entry.answers[entry.index]);
    if (window.lucide) window.lucide.createIcons();
    if (typeof window.triggerLatex === 'function') window.triggerLatex(document.getElementById('pm-learning-lesson-content'));
  }

  function showPracticeAnswer(item, question, result) {
    const feedback = document.getElementById('pm-practice-feedback');
    const next = document.getElementById('pm-practice-next');
    if (!feedback || !next) return;
    document.querySelectorAll('.pm-practice-option').forEach((button) => {
      const optionIndex = Number(button.dataset.option);
      button.disabled = true;
      button.classList.toggle('is-selected', optionIndex === result.selected);
      button.classList.toggle('is-correct', optionIndex === question.answer);
      button.classList.toggle('is-wrong', optionIndex === result.selected && !result.isCorrect);
    });
    feedback.className = `pm-practice-feedback is-visible ${result.isCorrect ? 'is-correct' : 'is-wrong'}`;
    feedback.innerHTML = `<strong>${result.isCorrect ? 'Tepat.' : 'Belum tepat.'}</strong> ${escapeHTML(question.solution)}`;
    next.textContent = result.last ? 'Lihat hasil →' : 'Soal berikutnya →';
    next.hidden = false;
  }

  function answer(index) {
    const item = getModule(state.currentId);
    if (!item) return;
    const items = getPracticeItems(item);
    const entry = getPracticeState(item);
    const question = items[entry.index];
    if (!question || entry.answers[entry.index]) return;
    const result = { selected: index, isCorrect: index === question.answer, last: entry.index === items.length - 1 };
    entry.answers[entry.index] = result;
    showPracticeAnswer(item, question, result);
    if (typeof window.triggerLatex === 'function') window.triggerLatex(document.getElementById('pm-learning-lesson-content'));
  }

  function nextPractice() {
    const item = getModule(state.currentId);
    if (!item) return;
    const items = getPracticeItems(item);
    const entry = getPracticeState(item);
    if (!entry.answers[entry.index]) return;
    entry.index += 1;
    renderPractice(item);
  }

  function restartPractice() {
    const item = getModule(state.currentId);
    if (!item) return;
    state.practiceStates[item.id] = { index: 0, answers: [], finished: false };
    renderPractice(item);
  }

  function toggleComplete() {
    const item = getModule(state.currentId);
    if (!item) return;
    const progress = readProgress();
    const completed = new Set(progress.completed);
    if (completed.has(item.id)) completed.delete(item.id);
    else completed.add(item.id);
    progress.completed = Array.from(completed);
    progress.lastModuleId = item.id;
    saveProgress(progress);
    renderModule();
  }

  function init() {
    const lastModuleId = readProgress().lastModuleId;
    if (!state.currentId && getModule(lastModuleId)) state.currentId = lastModuleId;
    renderCatalog(document.getElementById('pm-learning-search')?.value || '');
    renderModule();
  }

  window.featuresPMLearning = {
    init,
    renderCatalog,
    open: openModule,
    answer,
    nextPractice,
    restartPractice,
    toggleComplete
  };

  window.filterPMLearningModules = function (value) { renderCatalog(value); };
})();
