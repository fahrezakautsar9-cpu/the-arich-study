/**
 * The Arich Study — Progressive Web App Service Worker (sw.js)
 * High-performance offline caching for core app shell, local curricula, and CDN dependencies.
 */

const CACHE_NAME = 'the-arich-study-v1.8.7';
const CDN_CACHE_NAME = 'the-arich-study-cdn-v2';

// Static Shell & Curricula to pre-cache immediately
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './app.css',
  './app.js',
  './print.css',
  './theme.css?v=pm-course-complete-20261105-2',
  './features_student_exp.js',
  './features_assessment.js',
  './features_adaptive_learning.js',
  './features_advanced_labs.js',
  './features_exam_scratchpad.js',
  './features_ui_pwa.js',
  './features_pm_engine.js',
  './features_pm_learning.js?v=pm-course-complete-20261105-2',
  './features_smart_error_bank.js',
  './features_exam_downloader.js',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/icon-maskable.svg',
  './data/kurmer_kelas7_materi.js',
  './data/kurmer_kelas8_materi.js',
  './data/kurmer_kelas9_materi.js',
  './data/kurmer_kelas10_materi.js',
  './data/kurmer_kelas11_materi.js',
  './data/kurmer_kelas12_materi.js',
  './data/utbk_soal_bank.js',
  './data/utbk_pm_soal_bank.js',
  './data/utbk_pm_paket2.js',
  './data/utbk_pm_paket3.js',
  './data/utbk_pm_paket4.js',
  './data/utbk_pm_paket5.js',
  './data/utbk_pm_materi.js?v=pm-course-complete-20261105-2',
  './data/utbk_penalaran_matematika.js',
  './data/curriculum_all_grades.js',
  './data/soal_bank_per_bab.js'
];

// Essential Third-Party CDN Scripts & Styles to cache
const CDN_URLS = [
  'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
];

// 1. INSTALL EVENT
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Pre-cache local assets resiliently (don't fail entire install if one fails)
      await Promise.allSettled(
        PRECACHE_ASSETS.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'no-cache' });
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (err) {
            console.warn('[SW] Precache failed for:', url, err);
          }
        })
      );

      // Pre-cache CDN assets in CDN cache
      const cdnCache = await caches.open(CDN_CACHE_NAME);
      await Promise.allSettled(
        CDN_URLS.map(async (url) => {
          try {
            const response = await fetch(url, { mode: 'cors' });
            if (response.ok) {
              await cdnCache.put(url, response);
            }
          } catch (err) {
            console.warn('[SW] CDN Precache skipped for:', url, err);
          }
        })
      );

      // Force this SW to become active right away
      return self.skipWaiting();
    })()
  );
});

// 2. ACTIVATE EVENT
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Clean up old caches if version changed
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map((key) => {
          if (key !== CACHE_NAME && key !== CDN_CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
      // Take control of all clients immediately
      return self.clients.claim();
    })()
  );
});

// 3. FETCH EVENT — Smart Offline Strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore non-GET requests. The static app does not send student data to a server.
  if (req.method !== 'GET') {
    return;
  }

  // A. Navigation requests (HTML page): Network-first with cached index.html fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(req);
          if (networkResponse && networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(req, networkResponse.clone());
            return networkResponse;
          }
        } catch (err) {
          // Network failed, fall back to cached shell
        }
        const cached = await caches.match('./index.html') || await caches.match('./');
        if (cached) return cached;
        return new Response('Ruang belajar offline siap. Silakan muat ulang saat koneksi tersedia.', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })()
    );
    return;
  }

  // B. CDN Assets (KaTeX, Google Fonts, and pinned Lucide)
  if (
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('unpkg.com') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      (async () => {
        // Cache-First with Network Fallback
        const cdnCache = await caches.open(CDN_CACHE_NAME);
        const cached = await cdnCache.match(req);
        if (cached) {
          // Return cached and optionally refresh in background
          fetch(req).then((netRes) => {
            if (netRes && netRes.ok) cdnCache.put(req, netRes);
          }).catch(() => {});
          return cached;
        }

        try {
          const netRes = await fetch(req);
          if (netRes && (netRes.ok || netRes.type === 'opaque')) {
            cdnCache.put(req, netRes.clone());
          }
          return netRes;
        } catch (err) {
          // If totally offline and not cached yet, try generic cache match
          const fallback = await caches.match(req);
          if (fallback) return fallback;
          throw err;
        }
      })()
    );
    return;
  }

  // C. Local App Files & Curricula (Network-First to always deliver freshest updates)
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        
        try {
          const netRes = await fetch(req);
          if (netRes && netRes.ok) {
            await cache.put(req, netRes.clone());
            return netRes;
          }
        } catch (err) {
          // Offline or network error: fallback to cache
        }

        const cached = await cache.match(req) || await cache.match(url.pathname);
        if (cached) return cached;

        return new Response('Aset offline tidak ditemukan.', { status: 404 });
      })()
    );
    return;
  }

  // Default fetch fallback
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
