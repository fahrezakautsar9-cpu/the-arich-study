/**
 * ============================================================================
 * THE ARICH STUDY PLATFORM - ADAPTIVE LEARNING & GAMIFICATION SUITE
 * File: the_arich_study/features_adaptive_learning.js
 * 
 * Features Implemented:
 * 1. Daily Study Streak (🔥) Tracker:
 *    - Tracks consecutive days of active study using localStorage ('the_arich_daily_streak').
 *    - Intelligent day-transition logic:
 *      * If user studies today and studied yesterday -> increment streak.
 *      * If today is the same day -> preserve current streak.
 *      * If more than 1 day missed -> reset streak to 1.
 *    - Ambient flaming badges in Top Header and Dashboard with warm pulse glow.
 *    - Milestone accolades modal & tooltips (1 Hari, 3 Hari, 7 Hari, 14 Hari, 21 Hari, 30 Hari).
 * 
 * 2. Smart Spaced Repetition Analytics:
 *    - Evaluates student submission database ('the_arich_submissions_db').
 *    - Identifies weak concepts (< 80% score) and forgetting curve decay (> 2 days unreviewed).
 *    - Graceful fallback: defaults to the first chapter of the student's grade if no tests taken.
 * 
 * 3. "Misi Harian Tantangan Retensi" Dashboard Card:
 *    - Prominent hero mission card on view-dashboard.
 *    - Canonical badge: "🔥 MISI HARIAN SPATIAL REPETITION"
 *    - Canonical prompt: "Pertajam Ingatan: Bab [Nama Bab] ([Mata Pelajaran])"
 *    - Canonical reason: "Berdasarkan evaluasi belajarmu, materi ini perlu disegarkan agar melekat kuat di memori jangka panjang."
 *    - Canonical CTA button: "⚡ Mulai Misi 3 Soal Kilat (+50 XP)" (#btn-start-daily-mission).
 *    - Launches a focused 3-question rapid exam on the specific weak chapter.
 *    - Upon completion: awards +50 XP bonus, triggers fiery streak celebration animation & toast!
 * ============================================================================
 */

(function (window, document) {
  'use strict';

  // ==========================================================================
  // 0. CONSTANTS & STORAGE KEYS
  // ==========================================================================
  const STORAGE_KEYS = {
    DAILY_STREAK: 'the_arich_daily_streak',
    SUBMISSIONS_DB: 'the_arich_submissions_db',
    DAILY_MISSION_STATUS: 'the_arich_daily_mission_status',
    USER_SESSION: 'the_arich_user_session',
    USER_XP: 'the_arich_user_xp'
  };

  const STREAK_MILESTONES = [
    { days: 1, title: 'Langkah Pertama', badge: '🌱', desc: 'Memulai perjalanan kebiasaan belajar harianmu!' },
    { days: 3, title: 'Perintis Disiplin', badge: '🔥', desc: '3 Hari berturut-turut! Fondasi kebiasaan mulai terbentuk kuat.' },
    { days: 7, title: 'Pejuang Konsisten', badge: '⚡', desc: '1 Minggu penuh semangat! Retensi ingatan meningkat drastis.' },
    { days: 14, title: 'Master Retensi', badge: '🏆', desc: '2 Minggu tanpa jeda! Masuk ke 5% siswa paling konsisten.' },
    { days: 21, title: 'Penakluk Kebiasaan', badge: '🌟', desc: '21 Hari habit loop terpatri permanen di otak!' },
    { days: 30, title: 'Legenda Ketekunan', badge: '👑', desc: '1 Bulan dedikasi emas! Ketuntasan belajar tingkat master.' }
  ];

  // Cached state
  let cachedMissionEvaluation = null;
  let isDailyMissionActive = false;
  let sharedAudioCtx = null;
  const handledRecordIds = new Set();

  // ==========================================================================
  // 1. DATE UTILITIES & AUDIO SYNTHESIZER
  // ==========================================================================
  function getLocalDateString(d = new Date()) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return getLocalDateString(d);
  }

  function getDaysBetween(dateStrA, dateStrB) {
    if (!dateStrA || !dateStrB) return 999;
    try {
      const [y1, m1, d1] = dateStrA.split('-').map(Number);
      const [y2, m2, d2] = dateStrB.split('-').map(Number);
      const utc1 = Date.UTC(y1, m1 - 1, d1);
      const utc2 = Date.UTC(y2, m2 - 1, d2);
      return Math.round(Math.abs(utc2 - utc1) / (1000 * 60 * 60 * 24));
    } catch (e) {
      return 999;
    }
  }

  function getAudioContext() {
    try {
      if (!sharedAudioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) sharedAudioCtx = new AudioContextClass();
      }
      if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
        sharedAudioCtx.resume().catch(() => {});
      }
      return sharedAudioCtx;
    } catch (e) {
      return null;
    }
  }

  function playTriumphantStreakAudio() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // 4-note ascending triumphant major fanfare: C5 -> E5 -> G5 -> C6
      const notes = [
        { freq: 523.25, time: 0.00, dur: 0.14 },
        { freq: 659.25, time: 0.12, dur: 0.14 },
        { freq: 783.99, time: 0.24, dur: 0.16 },
        { freq: 1046.50, time: 0.38, dur: 0.50 }
      ];

      notes.forEach(({ freq, time, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0.001, now + time);
        gain.gain.exponentialRampToValueAtTime(0.12, now + time + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + time);
        osc.stop(now + time + dur);
      });
    } catch (e) {}
  }

  // ==========================================================================
  // 2. DAILY STUDY STREAK (🔥) ENGINE
  // ==========================================================================
  function getStreakData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DAILY_STREAK);
      if (!raw) {
        return { count: 0, lastDate: null, bestStreak: 0, history: [] };
      }
      // Handle legacy raw integer storage
      if (!isNaN(raw) && !raw.trim().startsWith('{')) {
        const count = parseInt(raw, 10) || 0;
        return { count, lastDate: null, bestStreak: count, history: [] };
      }
      const parsed = JSON.parse(raw);
      if (typeof parsed === 'number') {
        return { count: parsed, lastDate: null, bestStreak: parsed, history: [] };
      }
      return {
        count: typeof parsed.count === 'number' ? parsed.count : 0,
        lastDate: parsed.lastDate || null,
        bestStreak: typeof parsed.bestStreak === 'number' ? parsed.bestStreak : (parsed.count || 0),
        history: Array.isArray(parsed.history) ? parsed.history : [],
        lastStudiedAt: parsed.lastStudiedAt || null
      };
    } catch (e) {
      return { count: 0, lastDate: null, bestStreak: 0, history: [] };
    }
  }

  function saveStreakData(data) {
    try {
      localStorage.setItem(STORAGE_KEYS.DAILY_STREAK, JSON.stringify(data));
    } catch (e) {
      console.warn('[AdaptiveLearning] Error saving streak data:', e);
    }
  }

  /**
   * Inspect current streak status without modifying state.
   */
  function getStreakDisplayInfo() {
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();
    const data = getStreakData();

    if (!data.lastDate) {
      return {
        count: 0,
        bestStreak: 0,
        activeToday: false,
        streakAlive: false,
        status: 'unstarted',
        milestone: STREAK_MILESTONES[0],
        nextMilestone: STREAK_MILESTONES[1]
      };
    }

    if (data.lastDate === today) {
      const count = Math.max(1, data.count);
      return {
        count: count,
        bestStreak: Math.max(count, data.bestStreak || count),
        activeToday: true,
        streakAlive: true,
        status: 'completed_today',
        milestone: getMilestoneForDays(count),
        nextMilestone: getNextMilestoneForDays(count)
      };
    }

    if (data.lastDate === yesterday) {
      // Streak is active from yesterday, awaiting today's study activity!
      const count = Math.max(1, data.count);
      return {
        count: count,
        bestStreak: Math.max(count, data.bestStreak || count),
        activeToday: false,
        streakAlive: true,
        status: 'pending_today',
        milestone: getMilestoneForDays(count),
        nextMilestone: getNextMilestoneForDays(count)
      };
    }

    // Missed more than 1 day: streak has broken, resets to 0 until next study
    return {
      count: 0,
      previousCount: data.count,
      bestStreak: data.bestStreak || data.count,
      activeToday: false,
      streakAlive: false,
      status: 'broken',
      milestone: STREAK_MILESTONES[0],
      nextMilestone: STREAK_MILESTONES[1]
    };
  }

  /**
   * Core logic per requirements:
   * "If user studies today and studied yesterday, increment streak;
   *  if today is the same day, preserve streak;
   *  if more than 1 day missed, reset to 1."
   */
  function recordStudyActivity(isMission = false) {
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();
    const current = getStreakData();

    let newCount = current.count || 0;
    let isNewIncrement = false;
    let isTodayFirstStudy = false;

    if (!current.lastDate) {
      // First time studying on this device
      newCount = 1;
      isNewIncrement = true;
      isTodayFirstStudy = true;
    } else if (current.lastDate === today) {
      // Today is the same day -> preserve streak
      newCount = Math.max(1, current.count);
      isNewIncrement = false;
      isTodayFirstStudy = false;
    } else if (current.lastDate === yesterday) {
      // Studied today and studied yesterday -> increment streak
      newCount = (current.count || 0) + 1;
      isNewIncrement = true;
      isTodayFirstStudy = true;
    } else {
      // More than 1 day missed -> reset to 1
      newCount = 1;
      isNewIncrement = true;
      isTodayFirstStudy = true;
    }

    const historySet = new Set(current.history || []);
    historySet.add(today);

    const updatedData = {
      count: newCount,
      lastDate: today,
      lastStudiedAt: Date.now(),
      bestStreak: Math.max(newCount, current.bestStreak || 0),
      history: Array.from(historySet)
    };

    saveStreakData(updatedData);
    updateStreakBadgesUI();

    return {
      updatedData,
      isNewIncrement,
      isTodayFirstStudy,
      count: newCount
    };
  }

  function getMilestoneForDays(days) {
    let current = STREAK_MILESTONES[0];
    for (const m of STREAK_MILESTONES) {
      if (days >= m.days) current = m;
    }
    return current;
  }

  function getNextMilestoneForDays(days) {
    for (const m of STREAK_MILESTONES) {
      if (days < m.days) return m;
    }
    return STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  }

  // ==========================================================================
  // 3. SPACED REPETITION & WEAK CONCEPT ANALYTICS
  // ==========================================================================
  /**
   * Cleans chapter titles so "Bab 1: Komposisi Fungsi" -> "Komposisi Fungsi"
   */
  function cleanChapterName(title) {
    if (!title) return 'Materi Pilihan';
    return title
      .replace(/^Fisika\s+Bab\s+\d+:\s*/i, '')
      .replace(/^Bab\s+\d+:\s*/i, '')
      .replace(/^Bab\s+\d+\s*-\s*/i, '')
      .trim();
  }

  /**
   * Identifies subject name (Matematika / Fisika / etc.)
   */
  function detectSubject(chapter) {
    if (chapter && chapter.subject) return chapter.subject;
    const id = (chapter && chapter.id) ? chapter.id.toLowerCase() : '';
    const title = (chapter && chapter.title) ? chapter.title.toLowerCase() : '';
    if (id.includes('fisika') || title.includes('fisika')) return 'Fisika';
    if (id.includes('kimia') || title.includes('kimia')) return 'Kimia';
    if (id.includes('biologi') || title.includes('biologi')) return 'Biologi';
    return 'Matematika';
  }

  /**
   * Spaced Repetition Analytics:
   * Evaluates student submission database ('the_arich_submissions_db'):
   * - Finds the chapter with the lowest score (< 80%), OR the chapter that has not been reviewed for the longest time (> 2 days).
   * - If no previous test, defaults to the first chapter of the student's grade.
   */
  function evaluateSpacedRepetitionMission() {
    const student = window.currentStudent || null;
    const studentGrade = (student && student.grade) ? String(student.grade) : '11';
    const studentName = (student && student.name) ? student.name.trim().toLowerCase() : '';

    // Lookup grade curriculum data
    const gradeData = (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA[studentGrade])
      || window.currentGradeData
      || (window.ALL_GRADES_DATA && window.ALL_GRADES_DATA['11'])
      || null;

    const chapters = (gradeData && Array.isArray(gradeData.chapters)) ? gradeData.chapters : [];
    const defaultChapter = chapters[0] || {
      id: 'k11-bab1-default',
      title: 'Bab 1: Komposisi Fungsi dan Invers',
      number: '01',
      subject: 'Matematika'
    };

    // Load submissions database
    let submissions = [];
    try {
      submissions = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBMISSIONS_DB) || '[]');
    } catch (e) {
      submissions = [];
    }

    // Filter submissions for current student and grade (excluding unassociated 'general' submissions)
    const studentSubmissions = submissions.filter(r => {
      if (!r || !r.chapterId || r.chapterId === 'general') return false;
      const matchName = !studentName || (r.studentName && r.studentName.trim().toLowerCase() === studentName);
      const matchGrade = !r.gradeCode || String(r.gradeCode) === studentGrade;
      return matchName && matchGrade;
    });

    // Case 1: No previous test taken -> defaults to the first chapter of student's grade
    if (studentSubmissions.length === 0) {
      const subj = detectSubject(defaultChapter);
      const cleanName = cleanChapterName(defaultChapter.title);
      return {
        chapter: defaultChapter,
        chapterId: defaultChapter.id,
        chapterTitle: defaultChapter.title,
        cleanName: cleanName,
        subject: subj,
        prompt: `Pertajam Ingatan: Bab ${cleanName} (${subj})`,
        reason: 'Berdasarkan evaluasi belajarmu, materi ini perlu disegarkan agar melekat kuat di memori jangka panjang.',
        triggerType: 'default_starter',
        lowestScore: null,
        daysSinceReview: null,
        isDefault: true
      };
    }

    // Aggregate submissions by chapterId
    const now = Date.now();
    const chapterStatsMap = {};

    studentSubmissions.forEach(sub => {
      const chId = sub.chapterId;
      if (!chId || chId === 'general') return;

      const subTime = typeof sub.id === 'number' && sub.id > 1000000000000
        ? sub.id
        : (new Date(sub.timestamp).getTime() || now);

      if (!chapterStatsMap[chId]) {
        chapterStatsMap[chId] = {
          chapterId: chId,
          attempts: [],
          lowestScore: sub.score,
          latestScore: sub.score,
          latestTimestamp: subTime,
          title: sub.chapterTitle || sub.displaySubject || chId
        };
      }

      chapterStatsMap[chId].attempts.push(sub);
      if (typeof sub.score === 'number' && sub.score < chapterStatsMap[chId].lowestScore) {
        chapterStatsMap[chId].lowestScore = sub.score;
      }
      if (subTime > chapterStatsMap[chId].latestTimestamp) {
        chapterStatsMap[chId].latestTimestamp = subTime;
        chapterStatsMap[chId].latestScore = sub.score;
      }
    });

    const analyzedTestedChapters = Object.values(chapterStatsMap).map(stat => {
      const elapsedDays = (now - stat.latestTimestamp) / (1000 * 60 * 60 * 24);
      // Find matching curriculum chapter object
      const chObj = chapters.find(c => c.id === stat.chapterId) || {
        id: stat.chapterId,
        title: stat.title,
        subject: detectSubject({ id: stat.chapterId, title: stat.title })
      };
      return {
        ...stat,
        chapter: chObj,
        elapsedDays,
        hasLowScore: typeof stat.lowestScore === 'number' && stat.lowestScore < 80,
        hasLapsed: elapsedDays > 2
      };
    });

    // 1. Check for chapter with the lowest score (< 80%)
    const weakCandidates = analyzedTestedChapters.filter(c => c.hasLowScore);
    weakCandidates.sort((a, b) => {
      // Lowest score first; if tied, longest time without review
      if (a.lowestScore !== b.lowestScore) return a.lowestScore - b.lowestScore;
      return b.elapsedDays - a.elapsedDays;
    });

    // 2. Check for chapter not reviewed for the longest time (> 2 days)
    const decayedCandidates = analyzedTestedChapters.filter(c => c.hasLapsed);
    decayedCandidates.sort((a, b) => b.elapsedDays - a.elapsedDays); // Longest time first

    let selectedCandidate = null;
    let triggerType = 'default';

    if (weakCandidates.length > 0) {
      // Priority A: Weak concept remediation (< 80%)
      selectedCandidate = weakCandidates[0];
      triggerType = 'weak_concept';
    } else if (decayedCandidates.length > 0) {
      // Priority B: Memory decay refreshing (> 2 days)
      selectedCandidate = decayedCandidates[0];
      triggerType = 'memory_decay';
    } else {
      // All tested chapters are >= 80% and reviewed within 2 days!
      // Look for any untested chapter in the grade curriculum
      const testedIds = new Set(analyzedTestedChapters.map(c => c.chapterId));
      const untestedChapter = chapters.find(c => !testedIds.has(c.id));
      if (untestedChapter) {
        selectedCandidate = {
          chapter: untestedChapter,
          chapterId: untestedChapter.id,
          title: untestedChapter.title,
          lowestScore: null,
          elapsedDays: null
        };
        triggerType = 'untested_advance';
      } else {
        // All chapters tested and fresh; pick chapter reviewed longest ago
        analyzedTestedChapters.sort((a, b) => b.elapsedDays - a.elapsedDays);
        selectedCandidate = analyzedTestedChapters[0] || { chapter: defaultChapter, chapterId: defaultChapter.id };
        triggerType = 'maintenance_review';
      }
    }

    const ch = selectedCandidate.chapter || defaultChapter;
    const subj = detectSubject(ch);
    const cleanName = cleanChapterName(ch.title);

    return {
      chapter: ch,
      chapterId: ch.id,
      chapterTitle: ch.title,
      cleanName: cleanName,
      subject: subj,
      prompt: `Pertajam Ingatan: Bab ${cleanName} (${subj})`,
      reason: 'Berdasarkan evaluasi belajarmu, materi ini perlu disegarkan agar melekat kuat di memori jangka panjang.',
      triggerType: triggerType,
      lowestScore: selectedCandidate.lowestScore !== undefined ? selectedCandidate.lowestScore : null,
      daysSinceReview: selectedCandidate.elapsedDays !== undefined ? Math.floor(selectedCandidate.elapsedDays) : null,
      isDefault: false
    };
  }

  // ==========================================================================
  // 4. DAILY MISSION EXAM LAUNCHER (3 SOAL KILAT)
  // ==========================================================================
  /**
   * Starts a focused 3-question rapid exam on the specific target chapter.
   */
  function startDailyMission(chapterId) {
    let evaluation = cachedMissionEvaluation;
    if (!evaluation || (chapterId && evaluation.chapterId !== chapterId)) {
      evaluation = evaluateSpacedRepetitionMission();
    }

    const targetChapter = evaluation.chapter;
    const targetChapterId = targetChapter.id;

    // Retrieve questions for this chapter
    let rawQuestions = [];
    if (targetChapter.allQuestions && targetChapter.allQuestions.length > 0) {
      rawQuestions = targetChapter.allQuestions;
    } else if (targetChapter.questions && targetChapter.questions.length > 0) {
      rawQuestions = targetChapter.questions;
    } else if (window.SOAL_BANK_PER_BAB && window.SOAL_BANK_PER_BAB[targetChapterId]) {
      rawQuestions = window.SOAL_BANK_PER_BAB[targetChapterId];
    } else {
      // Search all question bank keys for closest match
      if (window.SOAL_BANK_PER_BAB) {
        const matchingKey = Object.keys(window.SOAL_BANK_PER_BAB).find(k => targetChapterId.includes(k) || k.includes(targetChapterId));
        if (matchingKey) rawQuestions = window.SOAL_BANK_PER_BAB[matchingKey];
      }
    }

    if (!rawQuestions || rawQuestions.length === 0) {
      // Fallback: Grade 11 'fungsi' questions if unavailable
      if (window.SOAL_BANK_PER_BAB && window.SOAL_BANK_PER_BAB['fungsi']) {
        rawQuestions = window.SOAL_BANK_PER_BAB['fungsi'];
      } else {
        alert('Soal kilat untuk bab ini sedang disiapkan. Silakan coba bab lain terlebih dahulu.');
        return;
      }
    }

    // Preserve original questions
    if (!targetChapter.allQuestions) {
      targetChapter.allQuestions = rawQuestions;
    }

    // Pick 3 focused questions for rapid spaced repetition
    let missionQuestions = rawQuestions.slice(0, 3).map((q, idx) => ({
      ...q,
      dailyMissionIndex: idx + 1
    }));

    // Safeguard: Ensure missionQuestions ALWAYS has at least 3 questions
    if (missionQuestions.length < 3 && rawQuestions.length > 0) {
      let padIdx = 0;
      while (missionQuestions.length < 3) {
        const cloneQ = { ...rawQuestions[padIdx % rawQuestions.length] };
        cloneQ.id = (rawQuestions.length + missionQuestions.length + 1);
        cloneQ.dailyMissionIndex = missionQuestions.length + 1;
        missionQuestions.push(cloneQ);
        padIdx++;
      }
    }

    targetChapter.questions = missionQuestions;
    targetChapter.isDailyMission = true;
    isDailyMissionActive = true;

    // Call native startChapterExam so all lexical variables in index.html are correctly initialized
    if (typeof window.startChapterExam === 'function') {
      window.startChapterExam(targetChapterId);
    } else {
      window.currentExamChapter = targetChapter;
      window.activeQuestions = missionQuestions;
      window.userAnswers = new Array(missionQuestions.length).fill(null);
      window.userDoubts = new Array(missionQuestions.length).fill(false);
      window.currentQIdx = 0;
      if (typeof window.switchView === 'function') window.switchView('exam');
      if (typeof window.renderExamMatrix === 'function') window.renderExamMatrix();
      if (typeof window.renderCurrentExamQuestion === 'function') window.renderCurrentExamQuestion(0, 'none');
    }

    // Set 10-minute rapid timer
    window.examSecondsLeft = 10 * 60;

    // Update Exam Top Badge
    const badgeGradeEl = document.getElementById('exam-badge-grade');
    if (badgeGradeEl) {
      badgeGradeEl.innerHTML = `<span class="text-orange-400 font-black animate-pulse">🔥 MISI HARIAN KILAT (3 SOAL)</span> • Bab ${evaluation.cleanName}`;
    }

    if (typeof window.triggerLatex === 'function') window.triggerLatex();

    // Show quick countdown toast
    showToastNotification('⚡ Misi 3 Soal Kilat Dimulai!', 'Kerjakan 3 soal ini dengan teliti untuk bonus +50 XP & perpanjangan streak 🔥');
  }

  // ==========================================================================
  // 5. DAILY MISSION COMPLETION & REWARDS HANDLER
  // ==========================================================================
  function isDailyMissionCompletedToday() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DAILY_MISSION_STATUS);
      if (!raw) return false;
      const data = JSON.parse(raw);
      const today = getLocalDateString();
      return data && data.date === today && data.completed === true;
    } catch (e) {
      return false;
    }
  }

  function markDailyMissionCompleted(record) {
    try {
      const today = getLocalDateString();
      const payload = {
        date: today,
        completed: true,
        completedAt: Date.now(),
        score: (record && typeof record.score === 'number' && !isNaN(record.score)) ? record.score : 100,
        chapterId: record ? record.chapterId : '',
        chapterTitle: record ? record.chapterTitle : ''
      };
      localStorage.setItem(STORAGE_KEYS.DAILY_MISSION_STATUS, JSON.stringify(payload));
    } catch (e) {}
  }

  /**
   * Upon completion: awards +50 XP bonus, triggers streak fire animation and celebration toast!
   */
  function onDailyMissionCompleted(record) {
    if (record && record.id && handledRecordIds.has(record.id)) {
      return; // Prevent duplicate handling
    }
    if (record && record.id) {
      handledRecordIds.add(record.id);
    }

    // 1. Record completed status for today
    markDailyMissionCompleted(record);
    isDailyMissionActive = false;

    // Restore full questions to chapter
    try {
      if (window.currentExamChapter && window.currentExamChapter.allQuestions) {
        window.currentExamChapter.questions = window.currentExamChapter.allQuestions;
        window.currentExamChapter.isDailyMission = false;
      }
    } catch (e) {}

    // 2. Award +50 XP bonus
    if (typeof window.addStudentXP === 'function') {
      window.addStudentXP(50, 'Bonus Misi Harian Spaced Repetition 🔥');
    }

    // 3. Update Daily Study Streak (increment or preserve)
    const streakResult = recordStudyActivity(true);

    // 4. Trigger fiery confetti & triumph audio
    triggerFieryStreakConfetti();
    playTriumphantStreakAudio();

    // 5. Trigger high-priority Celebration Toast
    const newStreakCount = streakResult.count;
    const scoreVal = (record && typeof record.score === 'number' && !isNaN(record.score)) ? record.score : 100;
    showDailyMissionCelebrationToast(newStreakCount, 50, scoreVal);

    // 6. Refresh UI components
    updateStreakBadgesUI();
    renderDailyMissionCard();
  }

  /**
   * Fiery Particle Confetti (Red, Orange, Amber, Gold, Ruby)
   */
  function triggerFieryStreakConfetti() {
    if (typeof window.confetti === 'function') {
      const fieryColors = ['#f97316', '#ef4444', '#f59e0b', '#fb923c', '#ea580c', '#fde047'];
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: fieryColors
      });

      // Second burst for ambient flame feel
      setTimeout(() => {
        window.confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0.2, y: 0.7 },
          colors: fieryColors
        });
        window.confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 0.8, y: 0.7 },
          colors: fieryColors
        });
      }, 250);
    }
  }

  function showDailyMissionCelebrationToast(streakDays, bonusXP, score) {
    let toast = document.getElementById('streak-celebration-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'streak-celebration-toast';
      toast.className = 'fixed top-18 right-4 z-50 max-w-sm w-full p-4 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white shadow-2xl border border-white/30 transform -translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto flex items-start gap-3.5';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="w-12 h-12 rounded-xl bg-black/25 flex items-center justify-center shrink-0 border border-white/20 relative overflow-hidden">
        <span class="text-2xl animate-bounce">🔥</span>
        <div class="absolute inset-0 bg-yellow-400/20 blur-xs rounded-full"></div>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[10px] font-black uppercase tracking-wider text-amber-200">Misi Harian Tuntas!</span>
          <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">+${bonusXP} XP</span>
        </div>
        <h4 class="text-sm font-extrabold text-white mt-0.5 leading-snug">
          🔥 Streak Menyala: ${streakDays} Hari!
        </h4>
        <p class="text-xs text-orange-100 mt-1 leading-relaxed">
          Skor kuis kilat: <strong>${score}/100</strong>. Memori jangka panjangmu berhasil diperkuat hari ini!
        </p>
      </div>
      <button onclick="document.getElementById('streak-celebration-toast').classList.add('-translate-y-4', 'opacity-0')" class="text-white/80 hover:text-white p-1 rounded-lg">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `;

    toast.classList.remove('-translate-y-4', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('-translate-y-4', 'opacity-0');
    }, 6000);
  }

  function showToastNotification(title, message) {
    let toast = document.getElementById('adaptive-quick-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'adaptive-quick-toast';
      toast.className = 'fixed bottom-6 right-4 z-50 bg-dark-900 border border-orange-500/40 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-none max-w-sm';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="text-lg">🔥</span>
      <div>
        <p class="font-bold text-orange-400">${title}</p>
        <p class="text-slate-300 text-[11px]">${message}</p>
      </div>
    `;
    toast.classList.remove('translate-y-2', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('translate-y-2', 'opacity-0');
    }, 3500);
  }

  // ==========================================================================
  // 6. UI RENDERERS & TEMPLATES
  // ==========================================================================

  /**
   * Injects or updates the Flaming Streak Badge in Header and Dashboard
   */
  function updateStreakBadgesUI() {
    const info = getStreakDisplayInfo();
    const streakDays = info.count;
    const isCompletedToday = info.activeToday;

    // 1. Top Header Streak Badge
    let topStreakBadge = document.getElementById('top-streak-badge');
    if (!topStreakBadge) {
      // Progressive self-healing insertion into Header
      const headerActions = document.querySelector('header .flex.items-center.space-x-2');
      const xpBadge = document.getElementById('top-xp-badge');
      if (headerActions && xpBadge) {
        topStreakBadge = document.createElement('div');
        topStreakBadge.id = 'top-streak-badge';
        headerActions.insertBefore(topStreakBadge, xpBadge);
      }
    }

    if (topStreakBadge) {
      topStreakBadge.className = `cursor-pointer px-2 sm:px-2.5 py-1 rounded-xl bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-red-500/15 border ${
        isCompletedToday ? 'border-orange-500/50 shadow-orange-500/20' : 'border-orange-500/30'
      } hover:border-orange-400 text-orange-400 text-xs font-bold flex items-center gap-1.5 shadow-sm transition relative group streak-flame-pulse`;
      topStreakBadge.onclick = () => showStreakModal();
      topStreakBadge.title = `🔥 ${streakDays} Hari Streak! Klik untuk melihat milestone & jadwal retensi`;

      topStreakBadge.innerHTML = `
        <span class="inline-flex items-center justify-center relative">
          <span class="text-sm sm:text-base select-none transform group-hover:scale-125 transition-transform duration-200">🔥</span>
          <span class="absolute inset-0 bg-orange-500/35 blur-xs rounded-full animate-ping pointer-events-none opacity-40"></span>
        </span>
        <span id="top-streak-text" class="text-[11px] font-black tracking-wide text-orange-300">
          <span class="hidden sm:inline">${streakDays} Hari Streak</span>
          <span class="sm:hidden">${streakDays} Hari</span>
        </span>
      `;
    }

    // 2. Update Welcome Card Streak Pill if present
    const dashWelcomePill = document.getElementById('dash-streak-welcome-pill');
    if (dashWelcomePill) {
      dashWelcomePill.innerHTML = `🔥 <span class="font-bold">${streakDays} Hari Streak</span>`;
    }
  }

  /**
   * Renders the "Misi Harian Tantangan Retensi" Dashboard Card on view-dashboard
   */
  function renderDailyMissionCard() {
    const dashView = document.getElementById('view-dashboard');
    if (!dashView) return;

    let missionContainer = document.getElementById('card-daily-retention-mission');
    if (!missionContainer) {
      missionContainer = document.createElement('div');
      missionContainer.id = 'card-daily-retention-mission';

      // Insert between Welcome card and #dash-stats-card
      const statsCard = document.getElementById('dash-stats-card');
      if (statsCard) {
        dashView.insertBefore(missionContainer, statsCard);
      } else {
        dashView.appendChild(missionContainer);
      }
    }

    const evaluation = evaluateSpacedRepetitionMission();
    cachedMissionEvaluation = evaluation;

    const streakInfo = getStreakDisplayInfo();
    const streakDays = streakInfo.count;
    const isCompleted = isDailyMissionCompletedToday();

    let statusBadgeText = '🔴 Butuh Penyegaran';
    let statusBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';

    if (evaluation.triggerType === 'weak_concept') {
      statusBadgeText = `📉 Skor Terendah (${evaluation.lowestScore}%)`;
      statusBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    } else if (evaluation.triggerType === 'memory_decay') {
      statusBadgeText = `⏳ ${evaluation.daysSinceReview} Hari Tak Diulang`;
      statusBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    } else if (evaluation.triggerType === 'default_starter') {
      statusBadgeText = '🚀 Fondasi Bab Pertama';
      statusBadgeClass = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
    }

    if (isCompleted) {
      // Completed state for today
      missionContainer.innerHTML = `
        <div class="clean-card rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-emerald-950/60 via-dark-850 to-dark-900 border border-emerald-500/40 relative overflow-hidden shadow-xl mb-4 group transition">
          <div class="absolute -right-8 -top-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div class="flex items-start sm:items-center gap-3.5">
              <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-inner">
                <i data-lucide="check-circle-2" class="w-6 h-6 text-emerald-400"></i>
              </div>
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <i data-lucide="shield-check" class="w-3 h-3"></i>
                    ✅ MISI HARI INI TUNTAS!
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30 flex items-center gap-1">
                    🔥 ${streakDays} Hari Streak Aktif
                  </span>
                  <span class="text-[10px] font-semibold text-emerald-300/80 bg-dark-900 border border-emerald-500/20 px-2 py-0.5 rounded">
                    +50 XP Bonus Dikreditkan
                  </span>
                </div>
                <h3 class="text-sm sm:text-base font-extrabold text-white leading-snug">
                  🎉 Target Retensi Harian Berhasil Dicapai!
                </h3>
                <p class="text-xs text-slate-300 leading-relaxed max-w-xl">
                  Hebat! Daya ingatmu pada <strong>Bab ${evaluation.cleanName} (${evaluation.subject})</strong> telah disegarkan. Kembali besok untuk misi spaced-repetition selanjutnya agar pemahamanmu melekat permanen!
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button onclick="window.TheArichAdaptiveLearning.startDailyMission('${evaluation.chapterId}')" class="px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 border border-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition">
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-amber-400"></i>
                <span>Latihan Ulang</span>
              </button>
              <button onclick="window.TheArichAdaptiveLearning.showStreakModal()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-orange-500/20 transition">
                <span>🔥 Lihat Streak</span>
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      // Active mission state (canonical requirements)
      missionContainer.innerHTML = `
        <div class="clean-card rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-orange-950/70 via-dark-850 to-slate-900 border-2 border-orange-500/50 hover:border-orange-400/80 relative overflow-hidden shadow-2xl mb-4 group transition flame-ambient-glow">
          <!-- Ambient Blurring Light -->
          <div class="absolute -right-12 -top-12 w-44 h-44 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
            <!-- Left Info Block -->
            <div class="flex items-start gap-4">
              <div class="w-13 h-13 rounded-2xl bg-gradient-to-br from-orange-500/25 to-red-500/25 text-orange-400 border border-orange-500/40 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20 relative group-hover:scale-105 transition-transform duration-300">
                <span class="text-2xl select-none animate-pulse">🔥</span>
                <div class="absolute inset-0 bg-orange-400/20 blur-xs rounded-2xl"></div>
              </div>

              <div class="space-y-1.5">
                <!-- Badges Row -->
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-orange-500/25 to-red-500/25 text-orange-300 border border-orange-500/40 shadow-xs flex items-center gap-1.5">
                    <span class="animate-pulse">🔥</span> MISI HARIAN SPATIAL REPETITION
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadgeClass}">
                    ${statusBadgeText}
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <i data-lucide="zap" class="w-3 h-3 text-amber-400"></i> +50 XP
                  </span>
                  <span class="text-[11px] text-orange-300/80 font-bold hidden sm:inline">
                    🔥 ${streakDays} Hari Streak
                  </span>
                </div>

                <!-- Mission Prompt (Canonical) -->
                <h3 class="text-base sm:text-lg font-black text-white leading-snug group-hover:text-orange-200 transition-colors">
                  ${evaluation.prompt}
                </h3>

                <!-- Reason (Canonical) -->
                <p class="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  ${evaluation.reason}
                </p>

                <!-- Micro Meta Info -->
                <div class="flex items-center gap-4 pt-1 text-[11px] text-slate-400 flex-wrap">
                  <span class="flex items-center gap-1 text-slate-300 font-medium">
                    <i data-lucide="check-square" class="w-3.5 h-3.5 text-orange-400"></i>
                    3 Soal Kilat Terfokus
                  </span>
                  <span class="flex items-center gap-1 text-slate-300 font-medium">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-400"></i>
                    Estimasi 5-8 Menit
                  </span>
                  <span class="flex items-center gap-1 text-slate-300 font-medium">
                    <i data-lucide="flame" class="w-3.5 h-3.5 text-red-400"></i>
                    Perpanjang Streak Harian
                  </span>
                </div>
              </div>
            </div>

            <!-- Right CTA Action Block -->
            <div class="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 shrink-0 pt-2 lg:pt-0">
              <button id="btn-start-daily-mission" onclick="window.TheArichAdaptiveLearning.startDailyMission('${evaluation.chapterId}')" class="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 transition transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer border border-white/20">
                <span class="text-sm">⚡</span>
                <span>Mulai Misi 3 Soal Kilat (+50 XP)</span>
              </button>
              
              <button onclick="window.TheArichAdaptiveLearning.showStreakModal()" class="px-3.5 py-2 rounded-xl bg-dark-900/80 hover:bg-dark-800 border border-slate-700/80 hover:border-orange-500/40 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition">
                <i data-lucide="flame" class="w-3.5 h-3.5 text-orange-400"></i>
                <span>Status Streak 🔥</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // 7. STREAK & MILESTONE ACCOLADES MODAL
  // ==========================================================================
  function ensureStreakModalDOM() {
    let modal = document.getElementById('modal-streak-accolades');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'modal-streak-accolades';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm hidden';
    modal.innerHTML = `
      <div class="clean-card rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-orange-500/40 relative overflow-hidden bg-gradient-to-b from-dark-900 via-dark-850 to-dark-900 animate-scale-up">
        <!-- Background Ambient Flame Glow -->
        <div class="absolute -top-16 -right-16 w-56 h-56 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-16 -left-16 w-56 h-56 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
              🔥
            </div>
            <div>
              <h3 class="text-base font-extrabold text-white flex items-center gap-1.5">
                Daily Study Streak & Milestones
              </h3>
              <p class="text-xs text-orange-300 font-medium">Jaga api semangat belajarmu setiap hari!</p>
            </div>
          </div>
          <button onclick="window.TheArichAdaptiveLearning.closeStreakModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-dark-800 transition">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Streak Hero Stat -->
        <div class="py-5 text-center relative z-10">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-orange-600/30 via-amber-500/30 to-red-600/30 border-2 border-orange-500/50 shadow-xl shadow-orange-500/20 mb-3 relative group">
            <span class="text-4xl animate-bounce select-none">🔥</span>
            <div class="absolute inset-0 bg-orange-500/30 blur-md rounded-full animate-pulse"></div>
          </div>
          <h2 id="modal-streak-days" class="text-3xl font-black text-white tracking-tight">
            0 Hari
          </h2>
          <p id="modal-streak-status-text" class="text-xs text-orange-300 font-semibold mt-1">
            Status: Belajar hari ini untuk memulai streak baru!
          </p>
          <div class="inline-block mt-2 px-3 py-1 rounded-full text-[11px] font-bold bg-dark-900 border border-slate-800 text-slate-300" id="modal-streak-best-text">
            Rekor Terbaik: 0 Hari
          </div>
        </div>

        <!-- 7-Day Activity Calendar Dots -->
        <div class="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800 mb-5 relative z-10">
          <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
            <span>Aktivitas 7 Hari Terakhir</span>
            <span class="text-orange-400 text-[10px]" id="modal-streak-week-summary">1 Hari Aktif</span>
          </p>
          <div class="grid grid-cols-7 gap-2" id="modal-streak-calendar-dots">
            <!-- Injected dynamically -->
          </div>
        </div>

        <!-- Milestone Accolades Roadmap -->
        <div class="space-y-2 mb-5 relative z-10">
          <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <i data-lucide="award" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>Pencapaian Milestone Konsistensi</span>
          </p>
          <div class="space-y-2 max-h-48 overflow-y-auto pr-1" id="modal-streak-milestones-list">
            <!-- Injected dynamically -->
          </div>
        </div>

        <!-- Spaced Repetition Theory Insight -->
        <div class="p-3 rounded-xl bg-orange-950/30 border border-orange-500/30 text-[11px] text-orange-200 flex items-start gap-2.5 relative z-10">
          <i data-lucide="brain" class="w-4 h-4 text-orange-400 shrink-0 mt-0.5"></i>
          <span>
            <strong>Riset Kurva Lupa Ebbinghaus:</strong> Belajar 10 menit setiap hari jauh lebih efektif untuk retensi memori jangka panjang dibanding belajar sistem kebut semalam.
          </span>
        </div>

        <!-- Modal Footer -->
        <div class="pt-4 border-t border-slate-800 flex justify-end relative z-10 mt-4">
          <button onclick="window.TheArichAdaptiveLearning.closeStreakModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 border border-slate-700 text-slate-300 font-semibold text-xs transition">
            Tutup
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    return modal;
  }

  function showStreakModal() {
    const modal = ensureStreakModalDOM();
    const info = getStreakDisplayInfo();
    const data = getStreakData();
    const streakDays = info.count;

    // Update text elements
    const daysEl = document.getElementById('modal-streak-days');
    const statusEl = document.getElementById('modal-streak-status-text');
    const bestEl = document.getElementById('modal-streak-best-text');
    if (daysEl) daysEl.textContent = `${streakDays} Hari Streak 🔥`;
    if (bestEl) bestEl.textContent = `Rekor Terbaik: ${info.bestStreak || streakDays} Hari`;

    if (statusEl) {
      if (info.activeToday) {
        statusEl.innerHTML = '<span class="text-emerald-400 font-bold">✓ Streak aktif hari ini! Kamu sudah belajar hari ini.</span>';
      } else if (info.streakAlive) {
        statusEl.innerHTML = '<span class="text-amber-400 font-bold">⚡ Selesaikan Misi Harian hari ini untuk perpanjang streak!</span>';
      } else {
        statusEl.innerHTML = '<span class="text-slate-400">Mulai belajar hari ini untuk menyalakan kembali apimu!</span>';
      }
    }

    // Render 7-day dots
    const dotsContainer = document.getElementById('modal-streak-calendar-dots');
    if (dotsContainer) {
      const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
      const today = new Date();
      let dotsHTML = '';
      let activeDaysCount = 0;

      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(today.getDate() - i);
        const dStr = getLocalDateString(d);
        const hasStudied = Array.isArray(data.history) && data.history.includes(dStr);
        if (hasStudied) activeDaysCount++;
        const isCurrentDay = i === 0;

        dotsHTML += `
          <div class="flex flex-col items-center gap-1">
            <span class="text-[9px] text-slate-400 font-bold">${dayNames[d.getDay()]}</span>
            <div class="w-8 h-8 rounded-xl ${
              hasStudied
                ? 'bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/30'
                : 'bg-dark-900 border border-slate-800 text-slate-600'
            } ${isCurrentDay ? 'ring-2 ring-orange-400' : ''} flex items-center justify-center text-xs font-bold transition">
              ${hasStudied ? '🔥' : '•'}
            </div>
          </div>
        `;
      }
      dotsContainer.innerHTML = dotsHTML;
      const summaryEl = document.getElementById('modal-streak-week-summary');
      if (summaryEl) summaryEl.textContent = `${activeDaysCount} dari 7 Hari Aktif`;
    }

    // Render Milestones
    const listEl = document.getElementById('modal-streak-milestones-list');
    if (listEl) {
      listEl.innerHTML = STREAK_MILESTONES.map(m => {
        const isUnlocked = streakDays >= m.days;
        return `
          <div class="p-2.5 rounded-xl border ${
            isUnlocked
              ? 'bg-orange-950/30 border-orange-500/40 text-orange-200'
              : 'bg-dark-900/60 border-slate-800 text-slate-500'
          } flex items-center justify-between gap-3 transition">
            <div class="flex items-center gap-2.5">
              <span class="text-xl ${isUnlocked ? 'scale-110' : 'grayscale opacity-40'} transition-transform">${m.badge}</span>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="text-xs font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}">${m.days} Hari: ${m.title}</h4>
                  ${isUnlocked ? '<span class="text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded">Tercapai ✓</span>' : ''}
                </div>
                <p class="text-[10px] ${isUnlocked ? 'text-orange-200/80' : 'text-slate-500'}">${m.desc}</p>
              </div>
            </div>
            <span class="text-xs font-mono font-bold ${isUnlocked ? 'text-orange-400' : 'text-slate-600'}">
              ${Math.min(streakDays, m.days)}/${m.days}
            </span>
          </div>
        `;
      }).join('');
    }

    modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  function closeStreakModal() {
    const modal = document.getElementById('modal-streak-accolades');
    if (modal) modal.classList.add('hidden');
  }

  // ==========================================================================
  // 8. STYLESHEET INJECTION
  // ==========================================================================
  function injectAdaptiveStyles() {
    if (document.getElementById('adaptive-learning-custom-styles')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'adaptive-learning-custom-styles';
    styleEl.textContent = `
      @keyframes flamePulse {
        0%, 100% {
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.25), inset 0 0 6px rgba(245, 158, 11, 0.15);
        }
        50% {
          box-shadow: 0 0 18px rgba(239, 68, 68, 0.45), inset 0 0 10px rgba(245, 158, 11, 0.3);
        }
      }

      .streak-flame-pulse {
        animation: flamePulse 3s infinite ease-in-out;
      }

      .flame-ambient-glow {
        box-shadow: 0 10px 30px -5px rgba(234, 88, 12, 0.2), 0 0 0 1px rgba(249, 115, 22, 0.2);
      }

      /* Daylight Light Paper Theme Adaptations */
      html.light #card-daily-retention-mission .clean-card,
      html:not(.dark) #card-daily-retention-mission .clean-card {
        background: linear-gradient(135deg, #fff7ed 0%, #ffffff 100%) !important;
        border-color: rgba(249, 115, 22, 0.4) !important;
        box-shadow: 0 8px 24px -4px rgba(234, 88, 12, 0.15) !important;
      }

      html.light #card-daily-retention-mission h3,
      html:not(.dark) #card-daily-retention-mission h3 {
        color: #1e293b !important;
      }

      html.light #card-daily-retention-mission p,
      html:not(.dark) #card-daily-retention-mission p {
        color: #475569 !important;
      }

      html.light #top-streak-badge,
      html:not(.dark) #top-streak-badge {
        background: #fff7ed !important;
        border-color: rgba(249, 115, 22, 0.4) !important;
      }

      html.light #top-streak-text,
      html:not(.dark) #top-streak-text {
        color: #c2410c !important;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // ==========================================================================
  // 9. INTEGRATION HOOKS & LIFECYCLE
  // ==========================================================================
  function initializeHooks() {
    injectAdaptiveStyles();

    // 1. Hook into window.renderDashboardStats
    if (typeof window.renderDashboardStats === 'function') {
      const originalRenderDashboardStats = window.renderDashboardStats;
      window.renderDashboardStats = function () {
        originalRenderDashboardStats.apply(this, arguments);
        try {
          renderDailyMissionCard();
          updateStreakBadgesUI();
        } catch (e) {
          console.error('[AdaptiveLearning] Error in renderDashboardStats hook:', e);
        }
      };
    }

    // 2. Hook into window.renderDashboardChapters
    if (typeof window.renderDashboardChapters === 'function') {
      const originalRenderDashboardChapters = window.renderDashboardChapters;
      window.renderDashboardChapters = function () {
        originalRenderDashboardChapters.apply(this, arguments);
        try {
          renderDailyMissionCard();
          updateStreakBadgesUI();
        } catch (e) {
          console.error('[AdaptiveLearning] Error in renderDashboardChapters hook:', e);
        }
      };
    }

    // 3. Hook into window.switchView
    if (typeof window.switchView === 'function') {
      const originalSwitchView = window.switchView;
      window.switchView = function (viewName) {
        originalSwitchView.apply(this, arguments);
        try {
          if (viewName === 'dashboard') {
            renderDailyMissionCard();
          }
          updateStreakBadgesUI();
        } catch (e) {
          console.error('[AdaptiveLearning] Error in switchView hook:', e);
        }
      };
    }

    // 4. Hook into window.executeFinalExamSubmit
    if (typeof window.executeFinalExamSubmit === 'function') {
      const originalExecuteFinalExamSubmit = window.executeFinalExamSubmit;
      window.executeFinalExamSubmit = function () {
        const wasMission = isDailyMissionActive || (window.currentExamChapter && window.currentExamChapter.isDailyMission);
        originalExecuteFinalExamSubmit.apply(this, arguments);

        try {
          // Read the newly created submission record from the top of DB
          const db = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBMISSIONS_DB) || '[]');
          const latestRecord = db[0] || null;

          if (wasMission) {
            onDailyMissionCompleted(latestRecord);
          } else {
            // Regular exam also counts as an active study activity!
            recordStudyActivity(false);
          }
        } catch (e) {
          console.error('[AdaptiveLearning] Error processing exam submission hook:', e);
        }
      };
    }

    // 5. Dual-layer safeguard hook on featuresAssessment.onExamCompleted
    if (window.featuresAssessment && typeof window.featuresAssessment.onExamCompleted === 'function') {
      const originalAssessmentCompleted = window.featuresAssessment.onExamCompleted;
      window.featuresAssessment.onExamCompleted = function (record, questions, answers, chapter) {
        originalAssessmentCompleted.apply(this, arguments);
        try {
          const wasMission = isDailyMissionActive || (chapter && chapter.isDailyMission);
          if (wasMission && record && !handledRecordIds.has(record.id)) {
            onDailyMissionCompleted(record);
          }
        } catch (e) {
          console.error('[AdaptiveLearning] Error in featuresAssessment hook:', e);
        }
      };
    }

    // Initial pass when DOM is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => {
        updateStreakBadgesUI();
        renderDailyMissionCard();
      }, 250);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        updateStreakBadgesUI();
        renderDailyMissionCard();
      });
    }
  }

  // ==========================================================================
  // 10. PUBLIC API EXPOSURE
  // ==========================================================================
  window.TheArichAdaptiveLearning = {
    // Streak API
    getStreakData,
    getStreakDisplayInfo,
    recordStudyActivity,
    showStreakModal,
    closeStreakModal,
    updateStreakBadgesUI,

    // Spaced Repetition Analytics
    evaluateSpacedRepetitionMission,

    // Daily Mission
    startDailyMission,
    onDailyMissionCompleted,
    renderDailyMissionCard,
    isDailyMissionCompletedToday,

    // Audio & Particles
    playTriumphantStreakAudio,
    triggerFieryStreakConfetti,

    // Init
    init: initializeHooks
  };

  // Launch initial hooks
  initializeHooks();

})(window, document);
