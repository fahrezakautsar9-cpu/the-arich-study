/**
 * ============================================================================
 * THE ARICH STUDY PLATFORM — ADVANCED INTERACTIVE LABS MODULE
 * File: the_arich_study/features_advanced_labs.js
 * 
 * Implemented Tools for Laboratorium Interaktif (view-mathlab):
 * 1. Projectile Motion Sandbox (ml-panel-projectile)
 *    - HTML5 Canvas 60 FPS realistic 2D projectile physics simulation
 *    - Angle (0-90°), Initial Velocity (5-80 m/s), Gravitational acceleration presets (Bumi, Bulan, Mars, Jupiter)
 *    - Realistic cannon with angle elevation, recoil, muzzle blast, particle smoke trail, glowing tracer path
 *    - Live telemetry: Peak Height Hmax, Flight Time t, Range Xmax, current (x, y, vx, vy)
 *    - Gamified Target Challenge with random distance D, +/- 2m hit tolerance, Web Audio API victory fanfare & Canvas Confetti!
 * 
 * 2. Step-by-Step Math & Calculus Solver (ml-panel-solver)
 *    - Persamaan Kuadrat (ax² + bx + c = 0): D = b² - 4ac, ABC quadratic formula, factoring form, vertex (xp, yp), axis of symmetry
 *    - SPLDV (Sistem Persamaan Linear Dua Variabel): Elimination-substitution steps, Cramer determinant method (D, Dx, Dy), final (x, y)
 *    - Turunan Polinomial: f(x) = ax³ + bx² + cx + d, f'(x), f''(x), critical/stationary points with 2nd derivative test, tangent line at x0
 *    - All steps formatted in high-contrast KaTeX math cards with pedagogical explanations
 * 
 * 3. Interactive Function Plotter (ml-panel-plotter)
 *    - Safe, robust mathematical expression parser (sin, cos, tan, sqrt, abs, exp, ln, powers, implicit multiplication)
 *    - HTML5 Canvas plotting engine with dynamic Cartesian grid, smooth curve rendering & asymptote detection
 *    - Drag to pan, scroll wheel & button zoom, reset view
 *    - Real-time crosshair cursor snapping to curve with (x, f(x), f'(x)) HUD readout
 *    - Automated key point detection: Y-intercept, numerical roots (x-intercepts), and local extrema (min/max)
 * ============================================================================
 */

(function (window, document) {
  'use strict';

  // ==========================================================================
  // SHARED UTILITIES & AUDIO SYNTHESIZER
  // ==========================================================================
  const ArichAudio = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          this.ctx = new AudioContextClass();
        } catch (e) {
          console.warn('Web Audio API not supported', e);
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    },
    // Celebratory Fanfare (C5 -> E5 -> G5 -> C6) for Gamified Target Hit
    playCelebrationFanfare() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [
          { f: 523.25, start: 0.00, dur: 0.12 }, // C5
          { f: 659.25, start: 0.12, dur: 0.12 }, // E5
          { f: 783.99, start: 0.24, dur: 0.15 }, // G5
          { f: 1046.50, start: 0.38, dur: 0.40 } // C6
        ];

        notes.forEach(n => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(n.f, now + n.start);

          gain.gain.setValueAtTime(0.001, now + n.start);
          gain.gain.exponentialRampToValueAtTime(0.25, now + n.start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + n.start);
          osc.stop(now + n.start + n.dur);
        });
      } catch (err) {
        console.warn('Audio playback error', err);
      }
    },
    // Cannon Blast Launch Sound
    playCannonBoom() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        // White noise buffer for explosion crack
        const bufferSize = this.ctx.sampleRate * 0.25;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(60, now + 0.22);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
      } catch (err) {
        // Safe fallback
      }
    },
    // Gentle Impact Thud on ground
    playImpactThud() {
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } catch (err) {
        // Safe fallback
      }
    }
  };

  // Safe KaTeX renderer helper
  function renderKaTeX(latex, isBlock = false) {
    if (typeof window.katex !== 'undefined') {
      try {
        return window.katex.renderToString(latex, {
          displayMode: isBlock,
          throwOnError: false
        });
      } catch (e) {
        return `<span class="font-mono text-indigo-400">${latex}</span>`;
      }
    }
    return `<span class="font-mono text-indigo-400">${latex}</span>`;
  }

  // ==========================================================================
  // TOOL 1: PROJECTILE MOTION CANNON SANDBOX
  // ==========================================================================
  const ProjectileLab = {
    canvas: null,
    ctx: null,
    animId: null,

    // Parameters
    angle: 45,       // degrees
    v0: 35,          // m/s
    gravity: 9.8,    // m/s^2 (Bumi)
    planet: 'earth',

    // Simulation State
    isFiring: false,
    startTime: 0,
    flightT: 0,
    historyPoints: [], // Trajectory trail coordinates in meters {x, y}
    particles: [],     // Spark / smoke particles {x, y, vx, vy, life, maxLife, color}
    muzzleFlash: 0,    // Muzzle blast counter
    recoil: 0,         // Cannon barrel recoil distance in px

    // Gamified Target Challenge
    targetDistance: 110.0, // meters
    hitTolerance: 2.0,     // +/- 2 meters
    hitStatus: 'idle',     // 'idle', 'hit', 'miss'
    streakCount: 0,
    score: 0,
    bestRecord: 0,
    lastLandingX: 0,

    init() {
      this.canvas = document.getElementById('canvas-projectile');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      // Initialize target based on current parameters
      if (this.targetDistance === 110.0) {
        this.generateNewTarget();
      }

      this.updateTelemetry();
      this.resizeCanvas();
      this.render();

      window.addEventListener('resize', () => {
        if (this.canvas) {
          this.resizeCanvas();
          if (!this.isFiring) this.render();
        }
      });
    },

    resizeCanvas() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = (rect.height || 420) * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    setAngle(val) {
      this.angle = Math.max(0, Math.min(90, parseFloat(val) || 0));
      const s = document.getElementById('pm-slider-angle');
      const n = document.getElementById('pm-input-angle');
      if (s) s.value = this.angle;
      if (n) n.value = this.angle;
      this.updateTelemetry();
      if (!this.isFiring) this.render();
    },

    setVelocity(val) {
      this.v0 = Math.max(5, Math.min(80, parseFloat(val) || 5));
      const s = document.getElementById('pm-slider-v0');
      const n = document.getElementById('pm-input-v0');
      if (s) s.value = this.v0;
      if (n) n.value = this.v0;
      this.updateTelemetry();
      if (!this.isFiring) this.render();
    },

    setGravity(preset, gVal) {
      this.planet = preset;
      this.gravity = parseFloat(gVal) || 9.8;

      // Update button active state styling
      ['earth', 'moon', 'mars', 'jupiter'].forEach(p => {
        const btn = document.getElementById(`pm-grav-${p}`);
        if (btn) {
          if (p === preset) {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400 transition';
          } else {
            btn.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-300 border border-slate-700 transition';
          }
        }
      });

      // Update badge
      const gravBadge = document.getElementById('pm-gravity-badge');
      if (gravBadge) {
        gravBadge.textContent = `g = ${this.gravity.toFixed(1)} m/s²`;
      }

      this.updateTelemetry();
      this.generateNewTarget(false); // Sensibly re-scale target for new gravity
      if (!this.isFiring) this.render();
    },

    generateNewTarget(resetStreak = true) {
      // Calculate realistic reachable distance for current g and v0 range
      const thetaRad = (45 * Math.PI) / 180;
      const theoreticalMax = (80 * 80 * Math.sin(2 * thetaRad)) / this.gravity;
      const minD = Math.max(15, theoreticalMax * 0.15);
      const maxD = Math.min(theoreticalMax * 0.92, 360);

      // Random target distance rounded to 1 decimal
      this.targetDistance = Math.round((minD + Math.random() * (maxD - minD)) * 10) / 10;
      this.hitStatus = 'idle';

      if (resetStreak && this.hitStatus === 'miss') {
        this.streakCount = 0;
      }

      this.updateTargetUI();
      if (!this.isFiring) this.render();
    },

    updateTargetUI() {
      const elDist = document.getElementById('pm-target-distance');
      const elStatus = document.getElementById('pm-target-status');
      const elStreak = document.getElementById('pm-streak-count');

      if (elDist) elDist.textContent = `${this.targetDistance.toFixed(1)} m`;
      if (elStreak) elStreak.textContent = `${this.streakCount}`;

      if (elStatus) {
        if (this.hitStatus === 'hit') {
          elStatus.innerHTML = `<span class="inline-flex items-center gap-1 text-emerald-400 font-bold animate-pulse"><i data-lucide="trophy" class="w-3.5 h-3.5"></i> TARGET HIT! TEPAT SASARAN!</span>`;
        } else if (this.hitStatus === 'miss') {
          const diff = this.lastLandingX - this.targetDistance;
          const label = diff > 0 ? `Kelebihan +${diff.toFixed(1)} m` : `Kurang ${Math.abs(diff).toFixed(1)} m`;
          elStatus.innerHTML = `<span class="text-rose-400 font-medium">Meleset (${label})</span>`;
        } else {
          elStatus.innerHTML = `<span class="text-slate-400 font-normal">Arahkan meriam ke target ± 2 m</span>`;
        }
        if (window.lucide) window.lucide.createIcons();
      }
    },

    updateTelemetry() {
      const rad = (this.angle * Math.PI) / 180;
      const v0x = this.v0 * Math.cos(rad);
      const v0y = this.v0 * Math.sin(rad);

      const tTotal = (2 * v0y) / this.gravity;
      const hMax = (v0y * v0y) / (2 * this.gravity);
      const xMax = (this.v0 * this.v0 * Math.sin(2 * rad)) / this.gravity;

      const elHmax = document.getElementById('pm-telemetry-hmax');
      const elTtotal = document.getElementById('pm-telemetry-ttotal');
      const elXmax = document.getElementById('pm-telemetry-xmax');
      const elVx = document.getElementById('pm-telemetry-vx');
      const elVy = document.getElementById('pm-telemetry-vy');

      if (elHmax) elHmax.textContent = `${hMax.toFixed(2)} m`;
      if (elTtotal) elTtotal.textContent = `${tTotal.toFixed(2)} s`;
      if (elXmax) elXmax.textContent = `${xMax.toFixed(2)} m`;
      if (elVx) elVx.textContent = `${v0x.toFixed(2)} m/s`;
      if (elVy) elVy.textContent = `${v0y.toFixed(2)} m/s`;
    },

    fire() {
      if (this.isFiring) return;
      ArichAudio.playCannonBoom();

      this.isFiring = true;
      this.startTime = performance.now();
      this.flightT = 0;
      this.historyPoints = [];
      this.particles = [];
      this.muzzleFlash = 6;
      this.recoil = 12;
      this.hitStatus = 'idle';
      this.updateTargetUI();

      const rad = (this.angle * Math.PI) / 180;
      const v0y = this.v0 * Math.sin(rad);
      const tTotal = (2 * v0y) / this.gravity;

      const fireBtn = document.getElementById('pm-btn-fire');
      if (fireBtn) {
        fireBtn.disabled = true;
        fireBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }

      const animate = (timestamp) => {
        const elapsedSec = (timestamp - this.startTime) / 1000;
        this.flightT = elapsedSec;

        // Current physics position
        const curX = this.v0 * Math.cos(rad) * this.flightT;
        const curY = this.v0 * Math.sin(rad) * this.flightT - 0.5 * this.gravity * this.flightT * this.flightT;

        if (curY >= 0 && this.flightT <= tTotal + 0.05) {
          this.historyPoints.push({ x: curX, y: Math.max(0, curY) });

          // Spawn smoke & spark particles
          if (Math.random() < 0.8) {
            this.particles.push({
              x: curX,
              y: curY,
              vx: (Math.random() - 0.5) * 3,
              vy: (Math.random() - 0.5) * 3,
              life: 1.0,
              maxLife: 0.5 + Math.random() * 0.4,
              color: Math.random() > 0.4 ? '#f59e0b' : '#38bdf8'
            });
          }

          // Live telemetry readouts
          const curVx = this.v0 * Math.cos(rad);
          const curVy = this.v0 * Math.sin(rad) - this.gravity * this.flightT;
          const curSpeed = Math.sqrt(curVx * curVx + curVy * curVy);

          const livePos = document.getElementById('pm-live-pos');
          if (livePos) {
            livePos.textContent = `(x: ${curX.toFixed(1)}m, y: ${curY.toFixed(1)}m | v: ${curSpeed.toFixed(1)}m/s)`;
          }

          this.render(curX, curY, curVx, curVy);
          this.animId = requestAnimationFrame(animate);
        } else {
          // Landing occurred!
          const landingX = (this.v0 * this.v0 * Math.sin(2 * rad)) / this.gravity;
          this.historyPoints.push({ x: landingX, y: 0 });
          this.lastLandingX = landingX;
          this.isFiring = false;

          // Check hit
          const dev = Math.abs(landingX - this.targetDistance);
          if (dev <= this.hitTolerance) {
            this.hitStatus = 'hit';
            this.streakCount++;
            this.score += Math.max(10, Math.round(100 - dev * 30));
            if (this.streakCount > this.bestRecord) {
              this.bestRecord = this.streakCount;
            }
            ArichAudio.playCelebrationFanfare();

            // Trigger Confetti!
            if (typeof window.confetti === 'function') {
              window.confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
              });
            }
          } else {
            this.hitStatus = 'miss';
            this.streakCount = 0;
            ArichAudio.playImpactThud();
          }

          this.updateTargetUI();
          this.render();

          if (fireBtn) {
            fireBtn.disabled = false;
            fireBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          }
        }
      };

      this.animId = requestAnimationFrame(animate);
    },

    reset() {
      if (this.animId) cancelAnimationFrame(this.animId);
      this.isFiring = false;
      this.historyPoints = [];
      this.particles = [];
      this.hitStatus = 'idle';
      this.updateTargetUI();
      const fireBtn = document.getElementById('pm-btn-fire');
      if (fireBtn) {
        fireBtn.disabled = false;
        fireBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      this.render();
    },

    render(projectileX = null, projectileY = null, vx = 0, vy = 0) {
      if (!this.canvas || !this.ctx) return;
      const ctx = this.ctx;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || 420;

      // Coordinate scaling: Map physics meters (x: 0 to maxX, y: 0 to maxY) to canvas pixels
      const rad = (this.angle * Math.PI) / 180;
      const predXmax = (this.v0 * this.v0 * Math.sin(2 * rad)) / this.gravity;
      const predHmax = (this.v0 * Math.sin(rad)) ** 2 / (2 * this.gravity);

      const maxMetersX = Math.max(this.targetDistance + 25, predXmax + 20, 80);
      const maxMetersY = Math.max(predHmax * 1.35, 30);

      const padLeft = 45;
      const padRight = 35;
      const padBottom = 40;
      const padTop = 30;

      const scaleX = (w - padLeft - padRight) / maxMetersX;
      const scaleY = (h - padBottom - padTop) / maxMetersY;

      // Transform helper: meters to canvas coords
      const toCanvasX = (mx) => padLeft + mx * scaleX;
      const toCanvasY = (my) => (h - padBottom) - my * scaleY;

      // 1. CLEAR & BACKGROUND THEME (Differentiated by Planet!)
      ctx.clearRect(0, 0, w, h);

      if (this.planet === 'moon') {
        // Moon: Starfield & dark space
        const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#030712');
        skyGrad.addColorStop(1, '#0f172a');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, h);

        // Subtle stars
        ctx.fillStyle = '#ffffff';
        [
          [0.1, 0.15], [0.25, 0.08], [0.4, 0.22], [0.65, 0.12], [0.85, 0.2], [0.92, 0.09], [0.5, 0.05]
        ].forEach(([rx, ry]) => {
          ctx.beginPath();
          ctx.arc(rx * w, ry * h, 1.2, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (this.planet === 'mars') {
        // Mars: Dusty red sky
        const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#2b1010');
        skyGrad.addColorStop(1, '#180a0a');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, h);
      } else if (this.planet === 'jupiter') {
        // Jupiter: Amber gas bands
        const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#2e1c0c');
        skyGrad.addColorStop(1, '#150d05');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, h);
      } else {
        // Earth: Midnight gradient
        const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#0b1120');
        skyGrad.addColorStop(1, '#020617');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // 2. GRID LINES & DISTANCE TICKS (Every 20m or 50m)
      const tickStep = maxMetersX > 200 ? 50 : 20;
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);

      for (let mx = tickStep; mx < maxMetersX; mx += tickStep) {
        const cx = toCanvasX(mx);
        ctx.beginPath();
        ctx.moveTo(cx, padTop);
        ctx.lineTo(cx, h - padBottom);
        ctx.stroke();

        // Label
        ctx.fillStyle = '#64748b';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${mx}m`, cx, h - padBottom + 16);
      }

      const tickStepY = maxMetersY > 60 ? 20 : 10;
      for (let my = tickStepY; my < maxMetersY; my += tickStepY) {
        const cy = toCanvasY(my);
        ctx.beginPath();
        ctx.moveTo(padLeft, cy);
        ctx.lineTo(w - padRight, cy);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '10px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${my}m`, padLeft - 6, cy + 3);
      }
      ctx.setLineDash([]); // Reset line dash

      // 3. GROUND PLATFORM & TERRAIN
      const groundY = toCanvasY(0);
      let groundColor = '#10b981'; // Green for earth
      let groundBedColor = '#064e3b';
      if (this.planet === 'moon') {
        groundColor = '#94a3b8';
        groundBedColor = '#334155';
      } else if (this.planet === 'mars') {
        groundColor = '#f97316';
        groundBedColor = '#7c2d12';
      } else if (this.planet === 'jupiter') {
        groundColor = '#f59e0b';
        groundBedColor = '#78350f';
      }

      // Ground bedrock
      ctx.fillStyle = groundBedColor;
      ctx.fillRect(0, groundY, w, h - groundY);

      // Top ground line
      ctx.strokeStyle = groundColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(w, groundY);
      ctx.stroke();

      // 4. PREDICTED TRAJECTORY GHOST LINE (Dotted Cyan/Yellow)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.4)';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 4]);

      const ghostSteps = 60;
      for (let i = 0; i <= ghostSteps; i++) {
        const gx = (i / ghostSteps) * predXmax;
        const gy = gx * Math.tan(rad) - (this.gravity * gx * gx) / (2 * this.v0 * this.v0 * Math.cos(rad) * Math.cos(rad));
        const cx = toCanvasX(gx);
        const cy = toCanvasY(Math.max(0, gy));
        if (i === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Predicted Peak point marker (Hmax)
      const peakX = predXmax / 2;
      const peakY = predHmax;
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(toCanvasX(peakX), toCanvasY(peakY), 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`Hmax = ${peakY.toFixed(1)}m`, toCanvasX(peakX), toCanvasY(peakY) - 8);

      // 5. GAMIFIED TARGET CHALLENGE BASKET & FLAG (At distance D)
      const targetCanvasX = toCanvasX(this.targetDistance);
      const tolPixel = this.hitTolerance * scaleX;

      // Target hit zone glow
      const isTargetHit = this.hitStatus === 'hit';
      ctx.fillStyle = isTargetHit ? 'rgba(34, 197, 94, 0.35)' : 'rgba(244, 63, 94, 0.2)';
      ctx.fillRect(targetCanvasX - tolPixel, groundY - 6, tolPixel * 2, 8);

      // Target basket rim
      ctx.strokeStyle = isTargetHit ? '#22c55e' : '#f43f5e';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(targetCanvasX - tolPixel, groundY - 6, tolPixel * 2, 8);

      // Target Flag Pole & Pennant
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(targetCanvasX, groundY);
      ctx.lineTo(targetCanvasX, groundY - 36);
      ctx.stroke();

      // Flag pennant
      ctx.fillStyle = isTargetHit ? '#22c55e' : '#f43f5e';
      ctx.beginPath();
      ctx.moveTo(targetCanvasX, groundY - 36);
      ctx.lineTo(targetCanvasX + 16, groundY - 28);
      ctx.lineTo(targetCanvasX, groundY - 20);
      ctx.closePath();
      ctx.fill();

      // Distance tag
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`TARGET: ${this.targetDistance.toFixed(1)}m`, targetCanvasX, groundY - 42);

      // 6. HISTORICAL TRAJECTORY TRACER (Glowing Neon Stroke)
      if (this.historyPoints.length > 1) {
        ctx.save();
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < this.historyPoints.length; i++) {
          const pt = this.historyPoints[i];
          const cx = toCanvasX(pt.x);
          const cy = toCanvasY(pt.y);
          if (i === 0) ctx.moveTo(cx, cy);
          else ctx.lineTo(cx, cy);
        }
        ctx.stroke();
        ctx.restore();
      }

      // 7. PARTICLES UPDATE & DRAW
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.life -= 0.025;
        p.x += p.vx * 0.1;
        p.y += p.vy * 0.1;
        if (p.life <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        const pcx = toCanvasX(p.x);
        const pcy = toCanvasY(p.y);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(pcx, pcy, 2.5 * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 8. CANNON BASE & BARREL
      const cannonBaseX = toCanvasX(0);
      const cannonBaseY = toCanvasY(0);

      ctx.save();
      ctx.translate(cannonBaseX, cannonBaseY - 6);

      // Recoil kickback
      if (this.recoil > 0) this.recoil -= 1;
      const recoilOffset = -this.recoil;

      // Barrel rotation
      ctx.save();
      ctx.rotate(-rad);
      ctx.translate(recoilOffset, 0);

      // Cannon barrel
      const barrelGrad = ctx.createLinearGradient(0, -6, 0, 6);
      barrelGrad.addColorStop(0, '#64748b');
      barrelGrad.addColorStop(0.5, '#334155');
      barrelGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = barrelGrad;
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.roundRect(0, -6, 32, 12, 3);
      ctx.fill();
      ctx.stroke();

      // Barrel muzzle ring
      ctx.fillStyle = '#475569';
      ctx.fillRect(29, -7, 4, 14);

      // Muzzle flash burst
      if (this.muzzleFlash > 0) {
        this.muzzleFlash--;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(38, 0, 10 + Math.random() * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(38, 0, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Cannon carriage / wheel
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Spoke
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(6, 0);
      ctx.moveTo(0, -6);
      ctx.lineTo(0, 6);
      ctx.stroke();

      ctx.restore();

      // 9. ACTIVE FLYING PROJECTILE (if firing)
      if (projectileX !== null && projectileY !== null) {
        const pcx = toCanvasX(projectileX);
        const pcy = toCanvasY(projectileY);

        ctx.save();
        ctx.shadowColor = '#f43f5e';
        ctx.shadowBlur = 12;

        // Outer glow ball
        const ballGrad = ctx.createRadialGradient(pcx, pcy, 1, pcx, pcy, 7);
        ballGrad.addColorStop(0, '#ffffff');
        ballGrad.addColorStop(0.4, '#fb7185');
        ballGrad.addColorStop(1, '#e11d48');

        ctx.fillStyle = ballGrad;
        ctx.beginPath();
        ctx.arc(pcx, pcy, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Velocity vector arrow
        const vScale = 0.5;
        const arrowEndX = pcx + vx * vScale;
        const arrowEndY = pcy - vy * vScale;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pcx, pcy);
        ctx.lineTo(arrowEndX, arrowEndY);
        ctx.stroke();
      }
    }
  };

  // ==========================================================================
  // TOOL 2: STEP-BY-STEP MATH & CALCULUS SOLVER
  // ==========================================================================
  const SolverLab = {
    currentMode: 'quadratic', // 'quadratic', 'spldv', 'calculus'

    init() {
      this.switchMode('quadratic');
      this.solveQuadratic();
    },

    switchMode(mode) {
      this.currentMode = mode;
      ['quadratic', 'spldv', 'calculus'].forEach(m => {
        const btn = document.getElementById(`sl-tab-${m}`);
        const sec = document.getElementById(`sl-section-${m}`);
        if (btn) {
          if (m === mode) {
            btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition';
          } else {
            btn.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition';
          }
        }
        if (sec) {
          sec.classList.toggle('hidden', m !== mode);
        }
      });

      if (mode === 'quadratic') this.solveQuadratic();
      if (mode === 'spldv') this.solveSPLDV();
      if (mode === 'calculus') this.solveCalculus();
    },

    setPreset(mode, key) {
      if (mode === 'quadratic') {
        const presets = {
          'real_distinct': { a: 1, b: -5, c: 6 },
          'fraction_roots': { a: 2, b: 5, c: -3 },
          'twin_roots': { a: 1, b: -6, c: 9 },
          'complex_roots': { a: 1, b: 2, c: 5 }
        };
        const p = presets[key];
        if (p) {
          document.getElementById('sl-quad-a').value = p.a;
          document.getElementById('sl-quad-b').value = p.b;
          document.getElementById('sl-quad-c').value = p.c;
          this.solveQuadratic();
        }
      } else if (mode === 'spldv') {
        const presets = {
          'integers': { a1: 2, b1: 1, c1: 8, a2: 1, b2: -1, c2: 1 },
          'cramer_nice': { a1: 3, b1: 2, c1: 12, a2: 2, b2: 3, c2: 13 },
          'decimals': { a1: 4, b1: -3, c1: 11, a2: 2, b2: 5, c2: 12 },
          'parallel': { a1: 2, b1: 4, c1: 8, a2: 1, b2: 2, c2: 4 }
        };
        const p = presets[key];
        if (p) {
          document.getElementById('sl-spldv-a1').value = p.a1;
          document.getElementById('sl-spldv-b1').value = p.b1;
          document.getElementById('sl-spldv-c1').value = p.c1;
          document.getElementById('sl-spldv-a2').value = p.a2;
          document.getElementById('sl-spldv-b2').value = p.b2;
          document.getElementById('sl-spldv-c2').value = p.c2;
          this.solveSPLDV();
        }
      } else if (mode === 'calculus') {
        const presets = {
          'cubic_standard': { a: 1, b: -3, c: -9, d: 5, x0: 2 },
          'cubic_simple': { a: 2, b: 0, c: -6, d: 4, x0: 1 },
          'quadratic_poly': { a: 0, b: 1, c: -4, d: 3, x0: 3 },
          'inflection': { a: 1, b: 0, c: 0, d: 2, x0: 0 }
        };
        const p = presets[key];
        if (p) {
          document.getElementById('sl-calc-a').value = p.a;
          document.getElementById('sl-calc-b').value = p.b;
          document.getElementById('sl-calc-c').value = p.c;
          document.getElementById('sl-calc-d').value = p.d;
          document.getElementById('sl-calc-x0').value = p.x0;
          this.solveCalculus();
        }
      }
    },

    // ------------------------------------------------------------------------
    // SUBMODE 1: PERSAMAAN KUADRAT
    // ------------------------------------------------------------------------
    solveQuadratic() {
      const a = parseFloat(document.getElementById('sl-quad-a')?.value) || 0;
      const b = parseFloat(document.getElementById('sl-quad-b')?.value) || 0;
      const c = parseFloat(document.getElementById('sl-quad-c')?.value) || 0;

      const container = document.getElementById('sl-output-quadratic');
      if (!container) return;

      if (a === 0) {
        container.innerHTML = `
          <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            ⚠️ Nilai <strong>a tidak boleh 0</strong> untuk persamaan kuadrat (jika a = 0, ini merupakan persamaan linear bx + c = 0).
          </div>`;
        return;
      }

      // 1. Discriminant D = b^2 - 4ac
      const D = b * b - 4 * a * c;
      const xp = -b / (2 * a);
      const yp = -D / (4 * a);

      let rootNature = '';
      let rootsLatex = '';
      let factorLatex = '';

      if (D > 0) {
        const sqrtD = Math.sqrt(D);
        const x1 = (-b + sqrtD) / (2 * a);
        const x2 = (-b - sqrtD) / (2 * a);

        rootNature = `Karena nilai diskriminan $D > 0$ ($D = ${D}$), maka persamaan memiliki <strong>dua akar real berlainan</strong> ($x_1 \\neq x_2$).`;
        rootsLatex = `
          x_1 = \\frac{${-b} + \\sqrt{${D}}}{${2 * a}} = \\mathbf{${Number(x1.toFixed(4))}}, \\quad 
          x_2 = \\frac{${-b} - \\sqrt{${D}}}{${2 * a}} = \\mathbf{${Number(x2.toFixed(4))}}
        `;

        // Factoring string
        const f1 = x1 >= 0 ? `- ${x1.toFixed(2)}` : `+ ${Math.abs(x1).toFixed(2)}`;
        const f2 = x2 >= 0 ? `- ${x2.toFixed(2)}` : `+ ${Math.abs(x2).toFixed(2)}`;
        factorLatex = a === 1 
          ? `(x ${f1})(x ${f2}) = 0` 
          : `${a}(x ${f1})(x ${f2}) = 0`;

      } else if (D === 0) {
        const x1 = -b / (2 * a);
        rootNature = `Karena nilai diskriminan $D = 0$, maka persamaan memiliki <strong>dua akar real kembar (tunggal)</strong> ($x_1 = x_2$).`;
        rootsLatex = `x_1 = x_2 = -\\frac{b}{2a} = \\frac{${-b}}{${2 * a}} = \\mathbf{${Number(x1.toFixed(4))}}`;
        const f1 = x1 >= 0 ? `- ${x1.toFixed(2)}` : `+ ${Math.abs(x1).toFixed(2)}`;
        factorLatex = a === 1 ? `(x ${f1})^2 = 0` : `${a}(x ${f1})^2 = 0`;

      } else {
        const realPart = (-b / (2 * a)).toFixed(3);
        const imagPart = (Math.sqrt(-D) / (2 * Math.abs(a))).toFixed(3);
        rootNature = `Karena nilai diskriminan $D < 0$ ($D = ${D}$), maka persamaan <strong>tidak memiliki akar real</strong> (memiliki sepasang akar konjugat kompleks imajiner $\\mathbb{C}$).`;
        rootsLatex = `x_{1,2} = ${realPart} \\pm ${imagPart}i`;
        factorLatex = `a(x - (${realPart} + ${imagPart}i))(x - (${realPart} - ${imagPart}i)) = 0`;
      }

      // Parabola vertex & direction
      const dirText = a > 0 ? 'Terbuka ke atas (Memiliki Titik Minimum)' : 'Terbuka ke bawah (Memiliki Titik Maksimum)';

      container.innerHTML = `
        <div class="space-y-4">
          <!-- Step 1: Equation & Coefficients -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Langkah 1: Identifikasi Persamaan & Koefisien</span>
            <div class="text-sm font-mono text-slate-200">
              ${renderKaTeX(`${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0`, true)}
            </div>
            <div class="text-xs text-slate-300">
              Koefisien teridentifikasi: $a = ${a}$, $b = ${b}$, $c = ${c}$.
            </div>
          </div>

          <!-- Step 2: Discriminant -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Langkah 2: Menghitung Nilai Diskriminan (D)</span>
            <div class="text-sm text-slate-200">
              ${renderKaTeX(`D = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = \\mathbf{${D}}`, true)}
            </div>
            <div class="text-xs text-slate-300 leading-relaxed">
              ${rootNature}
            </div>
          </div>

          <!-- Step 3: ABC Formula -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Langkah 3: Perhitungan Rumus Kuadratik ABC</span>
            <div class="text-xs text-slate-300">
              ${renderKaTeX(`x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-(${b}) \\pm \\sqrt{${D}}}{2(${a})}`, true)}
            </div>
            <div class="p-3 rounded-lg bg-dark-950 border border-amber-500/30 text-amber-300 font-bold text-center text-sm">
              ${renderKaTeX(rootsLatex, true)}
            </div>
          </div>

          <!-- Step 4: Factoring Form & Vertex -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-1.5">
              <span class="text-[11px] font-bold text-slate-400 uppercase block">Bentuk Faktorisasi Aljabar:</span>
              <div class="text-xs font-mono text-indigo-300">
                ${renderKaTeX(factorLatex, true)}
              </div>
            </div>
            <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-1.5">
              <span class="text-[11px] font-bold text-slate-400 uppercase block">Titik Puncak & Sumbu Simetri:</span>
              <div class="text-xs text-slate-200">
                ${renderKaTeX(`(x_p, y_p) = \\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right) = (${Number(xp.toFixed(3))}, ${Number(yp.toFixed(3))})`, true)}
              </div>
              <div class="text-[11px] text-slate-400">
                Sumbu Simetri $x = ${Number(xp.toFixed(3))}$ &bull; ${dirText}
              </div>
            </div>
          </div>
        </div>
      `;
      if (typeof window.triggerLatex === 'function') {
        window.triggerLatex(container);
      } else if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    },

    // ------------------------------------------------------------------------
    // SUBMODE 2: SPLDV (ELIMINASI-SUBSTITUSI & METODE CRAMER)
    // ------------------------------------------------------------------------
    solveSPLDV() {
      const a1 = parseFloat(document.getElementById('sl-spldv-a1')?.value) || 0;
      const b1 = parseFloat(document.getElementById('sl-spldv-b1')?.value) || 0;
      const c1 = parseFloat(document.getElementById('sl-spldv-c1')?.value) || 0;

      const a2 = parseFloat(document.getElementById('sl-spldv-a2')?.value) || 0;
      const b2 = parseFloat(document.getElementById('sl-spldv-b2')?.value) || 0;
      const c2 = parseFloat(document.getElementById('sl-spldv-c2')?.value) || 0;

      const container = document.getElementById('sl-output-spldv');
      if (!container) return;

      // Cramer Determinants:
      // D = a1*b2 - a2*b1
      // Dx = c1*b2 - c2*b1
      // Dy = a1*c2 - a2*c1
      const D = a1 * b2 - a2 * b1;
      const Dx = c1 * b2 - c2 * b1;
      const Dy = a1 * c2 - a2 * c1;

      if (D === 0) {
        const isDependent = (Dx === 0 && Dy === 0);
        container.innerHTML = `
          <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-2">
            <span class="font-bold block">⚠️ Determinan Utama D = 0 (${D})!</span>
            <p>
              ${isDependent 
                ? 'Kedua garis berimpit ($D = 0, D_x = 0, D_y = 0$). Sistem ini memiliki <strong>tak hingga banyak penyelesaian</strong>.' 
                : 'Kedua garis sejajar ($D = 0$ dan $D_x \\neq 0$). Sistem ini <strong>tidak memiliki penyelesaian</strong> (Himpunan Kosong $\\emptyset$).'}
            </p>
          </div>
        `;
        return;
      }

      const solX = Dx / D;
      const solY = Dy / D;

      // Elimination calculation narrative
      const mult1 = Math.abs(b2);
      const mult2 = Math.abs(b1);

      container.innerHTML = `
        <div class="space-y-4">
          <!-- Step 1: System Definition -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">Bentuk Sistem Persamaan:</span>
            <div class="text-sm font-mono text-slate-200">
              ${renderKaTeX(`\\begin{cases} (${a1})x + (${b1})y = ${c1} & \\text{(1)} \\\\ (${a2})x + (${b2})y = ${c2} & \\text{(2)} \\end{cases}`, true)}
            </div>
          </div>

          <!-- Step 2: Elimination Method -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2.5">
            <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">Metode 1: Eliminasi & Substitusi</span>
            <p class="text-xs text-slate-300 leading-relaxed">
              Untuk mengeliminasi variabel $y$, kalikan persamaan (1) dengan pengali $b_2 = ${b2}$ dan persamaan (2) dengan $b_1 = ${b1}$:
            </p>
            <div class="p-2.5 bg-dark-950 rounded-lg text-xs font-mono text-slate-300 space-y-1">
              <div>(1) &times; ${b2} &implies; ${a1 * b2}x + ${b1 * b2}y = ${c1 * b2}</div>
              <div>(2) &times; ${b1} &implies; ${a2 * b1}x + ${b1 * b2}y = ${c2 * b1}</div>
              <div class="border-t border-slate-700 pt-1 text-cyan-400">
                Pengurangan: (${a1 * b2 - a2 * b1})x = ${c1 * b2 - c2 * b1} &implies; <strong>x = ${Number(solX.toFixed(4))}</strong>
              </div>
            </div>
            <p class="text-xs text-slate-300">
              Substitusikan nilai $x = ${Number(solX.toFixed(4))}$ ke persamaan (1):
            </p>
            <div class="p-2.5 bg-dark-950 rounded-lg text-xs font-mono text-slate-300">
              ${a1}(${Number(solX.toFixed(4))}) + ${b1}y = ${c1} &implies; ${b1}y = ${c1 - a1 * solX} &implies; <strong>y = ${Number(solY.toFixed(4))}</strong>
            </div>
          </div>

          <!-- Step 3: Cramer's Rule -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-3">
            <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">Metode 2: Aturan Determinan Matriks (Metode Cramer)</span>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3 rounded-lg bg-dark-950 border border-slate-800 text-center">
                <span class="text-slate-400 block mb-1">Determinan Utama D:</span>
                ${renderKaTeX(`D = \\begin{vmatrix} ${a1} & ${b1} \\\\ ${a2} & ${b2} \\end{vmatrix} = \\mathbf{${D}}`, true)}
              </div>
              <div class="p-3 rounded-lg bg-dark-950 border border-slate-800 text-center">
                <span class="text-slate-400 block mb-1">Determinan D_x:</span>
                ${renderKaTeX(`D_x = \\begin{vmatrix} ${c1} & ${b1} \\\\ ${c2} & ${b2} \\end{vmatrix} = \\mathbf{${Dx}}`, true)}
              </div>
              <div class="p-3 rounded-lg bg-dark-950 border border-slate-800 text-center">
                <span class="text-slate-400 block mb-1">Determinan D_y:</span>
                ${renderKaTeX(`D_y = \\begin{vmatrix} ${a1} & ${c1} \\\\ ${a2} & ${c2} \\end{vmatrix} = \\mathbf{${Dy}}`, true)}
              </div>
            </div>
            <div class="text-xs text-slate-300 text-center">
              ${renderKaTeX(`x = \\frac{D_x}{D} = \\frac{${Dx}}{${D}} = \\mathbf{${Number(solX.toFixed(4))}}, \\quad y = \\frac{D_y}{D} = \\frac{${Dy}}{${D}} = \\mathbf{${Number(solY.toFixed(4))}}`, true)}
            </div>
          </div>

          <!-- Final Answer Highlight -->
          <div class="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/20 via-dark-900 to-indigo-500/20 border border-emerald-500/30 text-center">
            <span class="text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">Himpunan Penyelesaian (HP):</span>
            <span class="text-base font-extrabold text-emerald-400 font-mono">
              HP = { (${Number(solX.toFixed(4))}, ${Number(solY.toFixed(4))}) }
            </span>
          </div>
        </div>
      `;
      if (typeof window.triggerLatex === 'function') {
        window.triggerLatex(container);
      } else if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    },

    // ------------------------------------------------------------------------
    // SUBMODE 3: TURUNAN POLINOMIAL
    // ------------------------------------------------------------------------
    solveCalculus() {
      const a = parseFloat(document.getElementById('sl-calc-a')?.value) || 0;
      const b = parseFloat(document.getElementById('sl-calc-b')?.value) || 0;
      const c = parseFloat(document.getElementById('sl-calc-c')?.value) || 0;
      const d = parseFloat(document.getElementById('sl-calc-d')?.value) || 0;
      const x0 = parseFloat(document.getElementById('sl-calc-x0')?.value) || 0;

      const container = document.getElementById('sl-output-calculus');
      if (!container) return;

      // Original function string
      const fExpr = `${a !== 0 ? `${a}x^3 ` : ''}${b !== 0 ? `${b > 0 && a !== 0 ? '+' : ''}${b}x^2 ` : ''}${c !== 0 ? `${c > 0 && (a !== 0 || b !== 0) ? '+' : ''}${c}x ` : ''}${d !== 0 ? `${d > 0 && (a !== 0 || b !== 0 || c !== 0) ? '+' : ''}${d}` : ''}`.trim() || '0';

      // 1st Derivative: f'(x) = 3ax^2 + 2bx + c
      const da = 3 * a;
      const db = 2 * b;
      const dc = c;
      const fPrimeExpr = `${da !== 0 ? `${da}x^2 ` : ''}${db !== 0 ? `${db > 0 && da !== 0 ? '+' : ''}${db}x ` : ''}${dc !== 0 ? `${dc > 0 && (da !== 0 || db !== 0) ? '+' : ''}${dc}` : ''}`.trim() || '0';

      // 2nd Derivative: f''(x) = 6ax + 2b
      const dda = 6 * a;
      const ddb = 2 * b;
      const fDoublePrimeExpr = `${dda !== 0 ? `${dda}x ` : ''}${ddb !== 0 ? `${ddb > 0 && dda !== 0 ? '+' : ''}${ddb}` : ''}`.trim() || '0';

      // Tangent line at x0:
      // y0 = f(x0)
      const y0 = a * x0 * x0 * x0 + b * x0 * x0 + c * x0 + d;
      // slope m = f'(x0)
      const m = da * x0 * x0 + db * x0 + dc;
      // y - y0 = m(x - x0) => y = mx + (y0 - m*x0)
      const cLine = y0 - m * x0;
      const tangentExpr = `y = ${Number(m.toFixed(3))}x ${cLine >= 0 ? '+' : ''} ${Number(cLine.toFixed(3))}`;

      // Stationary Points: solve f'(x) = 0 => da*x^2 + db*x + dc = 0
      let stationaryHtml = '';
      if (da !== 0) {
        const Dp = db * db - 4 * da * dc;
        if (Dp > 0) {
          const s1 = (-db + Math.sqrt(Dp)) / (2 * da);
          const s2 = (-db - Math.sqrt(Dp)) / (2 * da);
          const ys1 = a * s1 ** 3 + b * s1 ** 2 + c * s1 + d;
          const ys2 = a * s2 ** 3 + b * s2 ** 2 + c * s2 + d;
          const fdd1 = dda * s1 + ddb;
          const fdd2 = dda * s2 + ddb;

          const type1 = fdd1 < 0 ? 'Maksimum Lokal (f\'\' < 0)' : (fdd1 > 0 ? 'Minimum Lokal (f\'\' > 0)' : 'Titik Belok');
          const type2 = fdd2 < 0 ? 'Maksimum Lokal (f\'\' < 0)' : (fdd2 > 0 ? 'Minimum Lokal (f\'\' > 0)' : 'Titik Belok');

          stationaryHtml = `
            <div class="space-y-1.5 text-xs text-slate-300">
              <div class="flex items-center justify-between p-2 rounded bg-dark-950 border border-slate-800">
                <span>Titik 1: <strong>(${Number(s1.toFixed(3))}, ${Number(ys1.toFixed(3))})</strong></span>
                <span class="text-amber-400 font-semibold">${type1}</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded bg-dark-950 border border-slate-800">
                <span>Titik 2: <strong>(${Number(s2.toFixed(3))}, ${Number(ys2.toFixed(3))})</strong></span>
                <span class="text-emerald-400 font-semibold">${type2}</span>
              </div>
            </div>
          `;
        } else if (Dp === 0) {
          const s1 = -db / (2 * da);
          const ys1 = a * s1 ** 3 + b * s1 ** 2 + c * s1 + d;
          stationaryHtml = `
            <div class="text-xs text-slate-300 p-2 rounded bg-dark-950 border border-slate-800">
              Titik Stasioner Tunggal: <strong>(${Number(s1.toFixed(3))}, ${Number(ys1.toFixed(3))})</strong> (Titik Belok Stasioner)
            </div>
          `;
        } else {
          stationaryHtml = `<div class="text-xs text-slate-400">Tidak ada titik stasioner real (f'(x) selalu monoton naik/turun).</div>`;
        }
      } else if (db !== 0) {
        // Linear f'(x) = db*x + dc = 0
        const s1 = -dc / db;
        const ys1 = b * s1 ** 2 + c * s1 + d;
        const type = b > 0 ? 'Minimum Lokal' : 'Maksimum Lokal';
        stationaryHtml = `
          <div class="text-xs text-slate-300 p-2 rounded bg-dark-950 border border-slate-800">
            Titik Puncak Parabola: <strong>(${Number(s1.toFixed(3))}, ${Number(ys1.toFixed(3))})</strong> (${type})
          </div>
        `;
      } else {
        stationaryHtml = `<div class="text-xs text-slate-400">Turunan pertama konstan, tidak ada titik belok stasioner.</div>`;
      }

      container.innerHTML = `
        <div class="space-y-4">
          <!-- Step 1: Function & Derivatives -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">Fungsi & Aturan Turunan Pangkat:</span>
            <div class="text-sm font-mono text-slate-200">
              ${renderKaTeX(`f(x) = ${fExpr}`, true)}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div class="p-3 rounded-lg bg-dark-950 border border-slate-800">
                <span class="text-[11px] text-slate-400 block mb-1">Turunan Pertama f'(x):</span>
                ${renderKaTeX(`f'(x) = ${fPrimeExpr}`, true)}
              </div>
              <div class="p-3 rounded-lg bg-dark-950 border border-slate-800">
                <span class="text-[11px] text-slate-400 block mb-1">Turunan Kedua f''(x):</span>
                ${renderKaTeX(`f''(x) = ${fDoublePrimeExpr}`, true)}
              </div>
            </div>
          </div>

          <!-- Step 2: Stationary Points & 2nd Derivative Test -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">Titik Stasioner & Uji Turunan Kedua (f'(x) = 0):</span>
            ${stationaryHtml}
          </div>

          <!-- Step 3: Tangent Line at x0 -->
          <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 space-y-2">
            <span class="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">Persamaan Garis Singgung di Titik x₀ = ${x0}:</span>
            <div class="text-xs text-slate-300 leading-relaxed space-y-1">
              <div>&bull; Nilai Ordinat $y_0 = f(${x0}) = \\mathbf{${Number(y0.toFixed(3))}}$</div>
              <div>&bull; Gradien Garis Singgung $m = f'(${x0}) = \\mathbf{${Number(m.toFixed(3))}}$</div>
              <div>&bull; Rumus: $y - y_0 = m(x - x_0) \\implies y - (${Number(y0.toFixed(3))}) = ${Number(m.toFixed(3))}(x - (${x0}))$</div>
            </div>
            <div class="p-3 rounded-lg bg-dark-950 border border-purple-500/30 text-purple-300 font-bold text-center text-sm font-mono mt-2">
              ${tangentExpr}
            </div>
          </div>
        </div>
      `;
      if (typeof window.triggerLatex === 'function') {
        window.triggerLatex(container);
      } else if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      }
    }
  };

  // ==========================================================================
  // TOOL 3: INTERACTIVE FUNCTION PLOTTER
  // ==========================================================================
  const PlotterLab = {
    canvas: null,
    ctx: null,

    // Mathematical Expression
    rawExpr: 'x^2 - 4',
    evalFn: null,

    // Viewport coordinates
    xMin: -10,
    xMax: 10,
    yMin: -7,
    yMax: 7,

    // Mouse / Touch Interaction State
    isPanning: false,
    panStartX: 0,
    panStartY: 0,
    lastMouseX: null,
    lastMouseY: null,

    // Key points
    yIntercept: null,
    roots: [],
    extrema: [],

    init() {
      this.canvas = document.getElementById('canvas-func-plotter');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.compileExpression(this.rawExpr);
      this.resizeCanvas();
      this.bindEvents();
      this.analyzeKeyPoints();
      this.render();

      window.addEventListener('resize', () => {
        if (this.canvas) {
          this.resizeCanvas();
          this.render();
        }
      });
    },

    resizeCanvas() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = (rect.height || 420) * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    },

    bindEvents() {
      const cv = this.canvas;
      if (!cv) return;

      // Mouse Drag to Pan
      cv.addEventListener('mousedown', (e) => {
        this.isPanning = true;
        this.panStartX = e.clientX;
        this.panStartY = e.clientY;
        cv.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        const rect = cv.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (this.isPanning) {
          const dxPx = e.clientX - this.panStartX;
          const dyPx = e.clientY - this.panStartY;
          this.panStartX = e.clientX;
          this.panStartY = e.clientY;

          const dxMath = (dxPx / rect.width) * (this.xMax - this.xMin);
          const dyMath = (dyPx / rect.height) * (this.yMax - this.yMin);

          this.xMin -= dxMath;
          this.xMax -= dxMath;
          this.yMin += dyMath;
          this.yMax += dyMath;

          this.render();
        } else if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
          this.lastMouseX = mouseX;
          this.lastMouseY = mouseY;
          this.render();
        } else {
          if (this.lastMouseX !== null) {
            this.lastMouseX = null;
            this.lastMouseY = null;
            this.render();
          }
        }
      });

      window.addEventListener('mouseup', () => {
        if (this.isPanning) {
          this.isPanning = false;
          if (this.canvas) this.canvas.style.cursor = 'crosshair';
          this.analyzeKeyPoints();
        }
      });

      // Mouse Wheel to Zoom
      cv.addEventListener('wheel', (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.85 : 1.15;
        this.zoom(factor, e.clientX, e.clientY);
      }, { passive: false });

      // Touch Events for Mobile
      let touchStartX = 0;
      let touchStartY = 0;
      cv.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          this.isPanning = true;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      cv.addEventListener('touchmove', (e) => {
        if (this.isPanning && e.touches.length === 1) {
          const rect = cv.getBoundingClientRect();
          const dxPx = e.touches[0].clientX - touchStartX;
          const dyPx = e.touches[0].clientY - touchStartY;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;

          const dxMath = (dxPx / rect.width) * (this.xMax - this.xMin);
          const dyMath = (dyPx / rect.height) * (this.yMax - this.yMin);

          this.xMin -= dxMath;
          this.xMax -= dxMath;
          this.yMin += dyMath;
          this.yMax += dyMath;

          this.render();
        }
      }, { passive: true });

      cv.addEventListener('touchend', () => {
        this.isPanning = false;
        this.analyzeKeyPoints();
      });
    },

    zoom(factor, clientX = null, clientY = null) {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      let centerX = (this.xMin + this.xMax) / 2;
      let centerY = (this.yMin + this.yMax) / 2;

      if (clientX !== null && clientY !== null) {
        const mouseNormX = (clientX - rect.left) / rect.width;
        const mouseNormY = (clientY - rect.top) / rect.height;
        centerX = this.xMin + mouseNormX * (this.xMax - this.xMin);
        centerY = this.yMax - mouseNormY * (this.yMax - this.yMin);
      }

      const newWidth = (this.xMax - this.xMin) * factor;
      const newHeight = (this.yMax - this.yMin) * factor;

      this.xMin = centerX - (centerX - this.xMin) * factor;
      this.xMax = this.xMin + newWidth;
      this.yMin = centerY - (centerY - this.yMin) * factor;
      this.yMax = this.yMin + newHeight;

      this.analyzeKeyPoints();
      this.render();
    },

    resetView() {
      this.xMin = -10;
      this.xMax = 10;
      this.yMin = -7;
      this.yMax = 7;
      this.analyzeKeyPoints();
      this.render();
    },

    setPreset(expr) {
      const input = document.getElementById('fp-input-expr');
      if (input) input.value = expr;
      this.plot(expr);
    },

    plot(expr) {
      this.rawExpr = expr || 'x^2 - 4';
      this.compileExpression(this.rawExpr);
      this.analyzeKeyPoints();
      this.render();
    },

    // ------------------------------------------------------------------------
    // MATHEMATICAL EXPRESSION PARSER & EVALUATOR (Safe, no arbitrary eval)
    // ------------------------------------------------------------------------
    compileExpression(exprStr) {
      const errBox = document.getElementById('fp-error-msg');
      if (errBox) errBox.classList.add('hidden');

      try {
        let clean = exprStr.toLowerCase().replace(/\s+/g, '');
        // Replace pi and e
        clean = clean.replace(/π/g, 'pi');

        // Insert explicit multiplication for implicit patterns
        // e.g. 2x -> 2*x, 3(x+1) -> 3*(x+1), x(x-1) -> x*(x-1), 2sin(x) -> 2*sin(x)
        clean = clean.replace(/(\d)([a-z\(])/g, '$1*$2');
        clean = clean.replace(/(\))([0-9a-z\(])/g, '$1*$2');
        clean = clean.replace(/(x)([a-z\(])/g, '$1*$2');

        // Supported functions mapping to Math.*
        const funcMap = {
          'sin': 'Math.sin',
          'cos': 'Math.cos',
          'tan': 'Math.tan',
          'asin': 'Math.asin',
          'acos': 'Math.acos',
          'atan': 'Math.atan',
          'sqrt': 'Math.sqrt',
          'cbrt': 'Math.cbrt',
          'abs': 'Math.abs',
          'exp': 'Math.exp',
          'ln': 'Math.log',
          'log': 'Math.log10',
          'pi': 'Math.PI',
          'e': 'Math.E'
        };

        // Convert powers x^2 -> Math.pow(x, 2) safely using regex or recursion
        // Handles x^2, (x+1)^3, sin(x)^2
        const convertPowers = (s) => {
          let res = s;
          const powerRegex = /([a-z0-9_\.]+|\([^\(\)]+\))\^([a-z0-9_\.]+|\([^\(\)]+\))/;
          while (powerRegex.test(res)) {
            res = res.replace(powerRegex, 'Math.pow($1,$2)');
          }
          return res;
        };

        clean = convertPowers(clean);

        // Replace known math tokens with Math.* equivalents
        Object.keys(funcMap).forEach(key => {
          const reg = new RegExp(`\\b${key}\\b`, 'g');
          clean = clean.replace(reg, funcMap[key]);
        });

        // Verify only allowed identifiers exist (airtight security whitelist)
        const identifiers = clean.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || [];
        const allowed = new Set([
          'x', 'Math', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
          'sqrt', 'cbrt', 'abs', 'exp', 'log', 'pow', 'PI', 'E'
        ]);
        for (const id of identifiers) {
          if (!allowed.has(id)) {
            throw new Error(`Token "${id}" tidak diizinkan`);
          }
        }

        // Validate strictly allowed characters only
        if (!/^[0-9a-zA-Z_\+\-\*\/\(\)\.,]+$/.test(clean)) {
          throw new Error('Karakter tidak diizinkan');
        }

        // Construct safe function closure
        /* eslint-disable no-new-func */
        const fn = new Function('x', `"use strict"; try { return (${clean}); } catch(e) { return NaN; }`);
        // Test evaluate at x = 1
        const testVal = fn(1);
        if (typeof testVal !== 'number') {
          throw new Error('Hasil evaluasi fungsi bukan angka');
        }

        this.evalFn = fn;
      } catch (err) {
        if (errBox) {
          errBox.textContent = `⚠️ Format belum valid: "${exprStr}" (Contoh: x^2 - 4 atau sin(x))`;
          errBox.classList.remove('hidden');
        }
        this.evalFn = (x) => x; // Fallback
      }
    },

    // ------------------------------------------------------------------------
    // NUMERICAL ANALYSIS: Y-Intercept, Roots, and Local Extrema
    // ------------------------------------------------------------------------
    analyzeKeyPoints() {
      if (!this.evalFn) return;
      const fn = this.evalFn;

      // 1. Y-Intercept: f(0)
      const y0 = fn(0);
      this.yIntercept = (Number.isFinite(y0)) ? { x: 0, y: y0 } : null;

      // 2. Roots (X-Intercepts): f(x) = 0 across visible or [-10, 10]
      const scanMin = Math.max(-100, this.xMin);
      const scanMax = Math.min(100, this.xMax);
      const steps = 300;
      const dx = (scanMax - scanMin) / steps;
      const foundRoots = [];

      for (let i = 0; i < steps; i++) {
        const x1 = scanMin + i * dx;
        const x2 = x1 + dx;
        const y1 = fn(x1);
        const y2 = fn(x2);

        if (Number.isFinite(y1) && Number.isFinite(y2)) {
          if (Math.abs(y1) < 1e-6) {
            foundRoots.push(x1);
          } else if (y1 * y2 < 0 && Math.abs(y2 - y1) < 50) {
            // Bisection refinement
            let low = x1;
            let high = x2;
            for (let b = 0; b < 24; b++) {
              const mid = (low + high) / 2;
              const yMid = fn(mid);
              if (Math.abs(yMid) < 1e-7) {
                low = mid;
                break;
              }
              if (y1 * yMid <= 0) high = mid;
              else low = mid;
            }
            const rootCandidate = (low + high) / 2;
            // Prevent duplicates
            if (!foundRoots.some(r => Math.abs(r - rootCandidate) < 0.05)) {
              foundRoots.push(rootCandidate);
            }
          }
        }
      }
      this.roots = foundRoots.slice(0, 6);

      // 3. Local Extrema: zero crossings of numerical derivative f'(x)
      const h = 1e-4;
      const df = (x) => (fn(x + h) - fn(x - h)) / (2 * h);
      const d2f = (x) => (fn(x + h) - 2 * fn(x) + fn(x - h)) / (h * h);

      const foundExtrema = [];
      for (let i = 0; i < steps; i++) {
        const x1 = scanMin + i * dx;
        const x2 = x1 + dx;
        const dy1 = df(x1);
        const dy2 = df(x2);

        if (Number.isFinite(dy1) && Number.isFinite(dy2) && dy1 * dy2 < 0 && Math.abs(dy2 - dy1) < 50) {
          const xc = (x1 + x2) / 2;
          const yc = fn(xc);
          const secondDeriv = d2f(xc);
          if (Number.isFinite(yc) && Number.isFinite(secondDeriv) && Math.abs(secondDeriv) > 1e-4) {
            const type = secondDeriv > 0 ? 'min' : 'max';
            if (!foundExtrema.some(e => Math.abs(e.x - xc) < 0.1)) {
              foundExtrema.push({ x: xc, y: yc, type });
            }
          }
        }
      }
      this.extrema = foundExtrema.slice(0, 4);

      // Update Key Points UI Table
      const container = document.getElementById('fp-key-points-body');
      if (!container) return;

      let html = '';
      if (this.yIntercept) {
        html += `
          <tr class="border-b border-slate-800/60">
            <td class="py-1.5 text-slate-300 font-semibold">Titik Potong Sumbu-Y</td>
            <td class="py-1.5 font-mono text-cyan-400 text-right">(0, ${this.yIntercept.y.toFixed(3)})</td>
          </tr>
        `;
      }

      if (this.roots.length > 0) {
        const rootsStr = this.roots.map(r => `x = ${r.toFixed(3)}`).join(', ');
        html += `
          <tr class="border-b border-slate-800/60">
            <td class="py-1.5 text-slate-300 font-semibold">Akar-Akar (Sumbu-X)</td>
            <td class="py-1.5 font-mono text-emerald-400 text-right">${rootsStr}</td>
          </tr>
        `;
      } else {
        html += `
          <tr class="border-b border-slate-800/60">
            <td class="py-1.5 text-slate-300 font-semibold">Akar-Akar (Sumbu-X)</td>
            <td class="py-1.5 text-slate-500 text-right italic">Tidak ada akar real di rentang ini</td>
          </tr>
        `;
      }

      if (this.extrema.length > 0) {
        const extStr = this.extrema.map(e => `${e.type.toUpperCase()}: (${e.x.toFixed(2)}, ${e.y.toFixed(2)})`).join('<br>');
        html += `
          <tr>
            <td class="py-1.5 text-slate-300 font-semibold">Ekstremum Lokal</td>
            <td class="py-1.5 font-mono text-amber-400 text-right">${extStr}</td>
          </tr>
        `;
      } else {
        html += `
          <tr>
            <td class="py-1.5 text-slate-300 font-semibold">Ekstremum Lokal</td>
            <td class="py-1.5 text-slate-500 text-right italic">Fungsi monoton</td>
          </tr>
        `;
      }

      container.innerHTML = html;
    },

    // ------------------------------------------------------------------------
    // CANVAS RENDERING ENGINE
    // ------------------------------------------------------------------------
    render() {
      if (!this.canvas || !this.ctx || !this.evalFn) return;
      const ctx = this.ctx;
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || 420;

      // Coordinate transforms
      const toScreenX = (x) => ((x - this.xMin) / (this.xMax - this.xMin)) * w;
      const toScreenY = (y) => h - ((y - this.yMin) / (this.yMax - this.yMin)) * h;
      const toMathX = (px) => this.xMin + (px / w) * (this.xMax - this.xMin);
      const toMathY = (py) => this.yMax - (py / h) * (this.yMax - this.yMin);

      // 1. Clear background
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, w, h);

      // 2. Dynamic Grid & Ticks (Adaptive interval)
      const rangeX = this.xMax - this.xMin;
      let tickStep = 1;
      if (rangeX > 80) tickStep = 20;
      else if (rangeX > 40) tickStep = 10;
      else if (rangeX > 20) tickStep = 5;
      else if (rangeX > 10) tickStep = 2;
      else if (rangeX > 4) tickStep = 1;
      else tickStep = 0.5;

      const firstTickX = Math.floor(this.xMin / tickStep) * tickStep;
      ctx.strokeStyle = '#151e32';
      ctx.lineWidth = 1;
      ctx.font = '10px monospace';
      ctx.fillStyle = '#475569';

      for (let x = firstTickX; x <= this.xMax; x += tickStep) {
        const sx = toScreenX(x);
        ctx.beginPath();
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx, h);
        ctx.stroke();

        // Label near x-axis
        if (Math.abs(x) > 1e-6) {
          const labelY = Math.min(Math.max(toScreenY(0) + 14, 15), h - 8);
          ctx.textAlign = 'center';
          ctx.fillText(Number(x.toFixed(2)), sx, labelY);
        }
      }

      const rangeY = this.yMax - this.yMin;
      let tickStepY = tickStep;
      const firstTickY = Math.floor(this.yMin / tickStepY) * tickStepY;

      for (let y = firstTickY; y <= this.yMax; y += tickStepY) {
        const sy = toScreenY(y);
        ctx.beginPath();
        ctx.moveTo(0, sy);
        ctx.lineTo(w, sy);
        ctx.stroke();

        if (Math.abs(y) > 1e-6) {
          const labelX = Math.min(Math.max(toScreenX(0) - 6, 25), w - 10);
          ctx.textAlign = 'right';
          ctx.fillText(Number(y.toFixed(2)), labelX, sy + 3);
        }
      }

      // 3. Main Axes (X & Y)
      const axisX = toScreenX(0);
      const axisY = toScreenY(0);

      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.8;

      // X-Axis
      if (axisY >= 0 && axisY <= h) {
        ctx.beginPath();
        ctx.moveTo(0, axisY);
        ctx.lineTo(w, axisY);
        ctx.stroke();
      }
      // Y-Axis
      if (axisX >= 0 && axisX <= w) {
        ctx.beginPath();
        ctx.moveTo(axisX, 0);
        ctx.lineTo(axisX, h);
        ctx.stroke();
      }

      // Origin (0,0) label
      if (axisX >= 0 && axisX <= w && axisY >= 0 && axisY <= h) {
        ctx.fillText('0', axisX - 6, axisY + 14);
      }

      // 4. Plot Function Curve f(x)
      ctx.save();
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#6366f1';
      ctx.shadowBlur = 8;
      ctx.beginPath();

      let isDrawing = false;
      let prevY = 0;

      // Sample every screen pixel
      for (let px = 0; px <= w; px += 1.5) {
        const mathX = toMathX(px);
        const mathY = this.evalFn(mathX);

        if (!Number.isFinite(mathY)) {
          isDrawing = false;
          continue;
        }

        const py = toScreenY(mathY);

        // Detect vertical asymptote jump (e.g. tan(x), 1/x)
        if (isDrawing && Math.abs(py - prevY) > h * 0.8 && (py * prevY < 0 || Math.sign(py - h / 2) !== Math.sign(prevY - h / 2))) {
          isDrawing = false;
        }

        if (!isDrawing) {
          ctx.moveTo(px, py);
          isDrawing = true;
        } else {
          ctx.lineTo(px, py);
        }
        prevY = py;
      }
      ctx.stroke();
      ctx.restore();

      // 5. Draw Key Points (Roots & Extrema Markers)
      // Roots (X-Intercepts)
      this.roots.forEach(r => {
        const rx = toScreenX(r);
        const ry = toScreenY(0);
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(rx, ry, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#6ee7b7';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`(${r.toFixed(2)}, 0)`, rx, ry - 8);
      });

      // Extrema Markers
      this.extrema.forEach(e => {
        const ex = toScreenX(e.x);
        const ey = toScreenY(e.y);
        ctx.fillStyle = e.type === 'min' ? '#f59e0b' : '#a855f7';
        ctx.beginPath();
        ctx.arc(ex, ey, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = e.type === 'min' ? '#fcd34d' : '#d8b4fe';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${e.type.toUpperCase()}`, ex, ey - 9);
      });

      // 6. Crosshair Cursor Tracking & Dynamic HUD
      if (this.lastMouseX !== null && this.lastMouseY !== null) {
        const curMathX = toMathX(this.lastMouseX);
        const curMathY = this.evalFn(curMathX);
        const snapPy = toScreenY(curMathY);

        // Dashed Crosshairs
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.45)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);

        ctx.beginPath();
        ctx.moveTo(this.lastMouseX, 0);
        ctx.lineTo(this.lastMouseX, h);
        ctx.stroke();

        if (Number.isFinite(snapPy)) {
          ctx.beginPath();
          ctx.moveTo(0, snapPy);
          ctx.lineTo(w, snapPy);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // Curve Point Snap Dot
        if (Number.isFinite(snapPy)) {
          ctx.fillStyle = '#f43f5e';
          ctx.beginPath();
          ctx.arc(this.lastMouseX, snapPy, 5.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Live Coordinate HUD in Top Right
        const hudEl = document.getElementById('fp-live-hud');
        if (hudEl) {
          hudEl.innerHTML = `
            <span class="text-slate-400">x:</span> <span class="text-indigo-400 font-bold">${curMathX.toFixed(3)}</span> | 
            <span class="text-slate-400">f(x):</span> <span class="text-emerald-400 font-bold">${Number.isFinite(curMathY) ? curMathY.toFixed(3) : 'undefined'}</span>
          `;
        }
      }
    }
  };

  // ==========================================================================
  // GLOBAL WINDOW EXPORTS & EXTENSIONS
  // ==========================================================================
  window.ArichAudio = ArichAudio;
  window.ProjectileLab = ProjectileLab;
  window.SolverLab = SolverLab;
  window.PlotterLab = PlotterLab;

  // Global functions called by HTML onclick & oninput
  window.initProjectileLab = function () {
    ProjectileLab.init();
  };

  window.initSolverLab = function () {
    SolverLab.init();
  };

  window.initPlotterLab = function () {
    PlotterLab.init();
  };

  window.fireProjectile = function () {
    ProjectileLab.fire();
  };

  window.resetProjectileLab = function () {
    ProjectileLab.reset();
  };

  window.setProjectileGravity = function (preset, g) {
    ProjectileLab.setGravity(preset, g);
  };

  window.generateNewProjectileTarget = function () {
    ProjectileLab.generateNewTarget();
  };

  window.switchSolverMode = function (mode) {
    SolverLab.switchMode(mode);
  };

  window.setSolverPreset = function (mode, key) {
    SolverLab.setPreset(mode, key);
  };

  window.solveQuadratic = function () {
    SolverLab.solveQuadratic();
  };

  window.solveSPLDV = function () {
    SolverLab.solveSPLDV();
  };

  window.solveCalculus = function () {
    SolverLab.solveCalculus();
  };

  window.plotUserFunction = function (expr) {
    PlotterLab.plot(expr);
  };

  window.zoomPlotter = function (factor) {
    PlotterLab.zoom(factor);
  };

  window.resetPlotterView = function () {
    PlotterLab.resetView();
  };

  window.setPlotterPreset = function (expr) {
    PlotterLab.setPreset(expr);
  };

  // Auto-init on DOMContentLoaded if already in view-mathlab
  document.addEventListener('DOMContentLoaded', () => {
    // Check if view-mathlab is already open or initialized
    const labView = document.getElementById('view-mathlab');
    if (labView && !labView.classList.contains('hidden')) {
      ProjectileLab.init();
      SolverLab.init();
      PlotterLab.init();
    }
  });

})(window, document);
