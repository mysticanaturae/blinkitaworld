const CACHE_NAME = "blinkita-world-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./offline.html",
  "./manifest.json",
  "./css/style.css"
];

/* INSTALL */
self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
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

/* FETCH */
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        if(response){
          return response;
        }

        return fetch(event.request)
          .catch(() => caches.match("./offline.html"));
      })

  );

});