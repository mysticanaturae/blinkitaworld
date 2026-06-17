const CACHE_NAME = "blinkita-world-v2";

/* samo kritični core + shell */
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./offline.html",
  "./manifest.json",
  "./css/style.css",
  "./js/main.js",
  "./js/tzolkin-engine.js",
  "./js/tzolkin-data.js",
  "./js/ui-engine.js"
];

/* INSTALL */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );

  self.skipWaiting();
});

/* ACTIVATE */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* FETCH STRATEGY (SAFE NETWORK-FIRST) */
self.addEventListener("fetch", event => {
  const req = event.request;

  event.respondWith(
    fetch(req)
      .then(networkRes => {
        return networkRes;
      })
      .catch(() => {
        return caches.match(req).then(cacheRes => {
          return cacheRes || caches.match("./offline.html");
        });
      })
  );
});