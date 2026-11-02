/*
 * Service Worker: macht die App offline nutzbar.
 * Strategie: Netzwerk zuerst (damit neue Inhalte aus Pull Requests sofort ankommen),
 * bei fehlender Verbindung Antwort aus dem Cache.
 */
const CACHE = 'zeitreise-v3';
const CORE = [
  './', './index.html', './css/style.css', './js/app.js', './js/quiz.js', './js/tts.js',
  './data/registry.js', './data/zeitstrahl.js', './data/themen-uebersicht.js', './data/personen.js', './data/methoden/methoden.js',
  './manifest.webmanifest', './icons/icon-192.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.startsWith('/.netlify/')) return; // KI-Korrektur nie cachen
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && (url.origin === location.origin || url.hostname.includes('fonts.g'))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
