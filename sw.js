/* Service worker « À bicyclette » : garde la coque de l'appli disponible hors ligne.
   Les tuiles de carte et les données (eau, lieux, pistes) sont gérées à part, dans IndexedDB. */
const CACHE = 'abicyclette-v27';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdn.tailwindcss.com',
];
// Ressources de code mises en cache au fil de l'eau (police, moteur 3D…)
const RUNTIME_HOSTS = ['unpkg.com', 'cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(
        SHELL.map((url) =>
          fetch(url, { mode: url.startsWith('http') ? 'cors' : 'same-origin' })
            .then((res) => (res.ok || res.type === 'opaque' ? cache.put(url, res) : null))
            .catch(() => null)
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== 'abicyclette-partage').map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Fichier GPX « partagé vers » l'appli (Android) : on le garde, puis on ouvre l'appli qui le lira
  if (req.method === 'POST' && new URL(req.url).search.includes('partage-gpx')) {
    event.respondWith(
      (async () => {
        try {
          const form = await req.formData();
          const file = form.getAll('gpx').find((f) => f && f.size);
          const c = await caches.open('abicyclette-partage');
          if (file) await c.put('./partage.gpx', new Response(file, { headers: { 'X-Name': encodeURIComponent(file.name || 'trace.gpx') } }));
          else {
            const t = form.get('url') || form.get('text') || '';
            await c.put('./partage.txt', new Response(String(t)));
          }
        } catch (e) {}
        return Response.redirect('./?gpx=partage', 303);
      })()
    );
    return;
  }
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !RUNTIME_HOSTS.includes(url.hostname)) return; // API, tuiles : pas touché

  // Page : réseau d'abord (pour avoir la dernière version), cache si hors ligne
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Le reste : cache d'abord, mise à jour en arrière-plan
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res.ok || res.type === 'opaque') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
