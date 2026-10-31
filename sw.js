/**
 * The Arich Study — Progressive Web App Service Worker (sw.js)
 * High-performance offline caching for core app shell, local curricula, and CDN dependencies.
 */

const CACHE_NAME = 'the-arich-study-v1.1.0';
const CDN_CACHE_NAME = 'the-arich-study-cdn-v1';

// Static Shell & Curricula to pre-cache immediately
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './features_ui_pwa.js',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/icon-maskable.svg',
  './data/cloud_config.js',
  './data/kurmer_kelas7_materi.js',
  './data/kurmer_kelas8_materi.js',
  './data/kurmer_kelas9_materi.js',
  './data/kurmer_kelas10_materi.js',
  './data/kurmer_kelas11_materi.js',
  './data/kurmer_kelas12_materi.js',
  './data/utbk_soal_bank.js',
  './data/curriculum_all_grades.js',
  './data/soal_bank_per_bab.js'
];

// Essential Third-Party CDN Scripts & Styles to cache
const CDN_URLS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
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

  // Ignore non-GET requests (e.g. POST sync to Google Sheets)
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

  // B. CDN Assets (KaTeX, Tailwind, Google Fonts, Lucide, Unpkg)
  if (
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('unpkg.com') ||
    url.hostname.includes('cdn.tailwindcss.com') ||
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

  // C. Local App Files & Curricula (Stale-While-Revalidate)
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        
        // Strip query params like ?v=1793288294 for matching if not exact
        const cached = (await cache.match(req)) || (await cache.match(url.pathname));
        
        const fetchPromise = fetch(req).then(async (netRes) => {
          if (netRes && netRes.ok) {
            await cache.put(req, netRes.clone());
            // Also store under clean pathname
            await cache.put(url.pathname, netRes.clone());
          }
          return netRes;
        }).catch(() => null);

        // If we have cached version, return it immediately for instant loads
        if (cached) {
          return cached;
        }

        // Otherwise wait for network
        const netRes = await fetchPromise;
        if (netRes) return netRes;

        // If completely offline and not found
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
