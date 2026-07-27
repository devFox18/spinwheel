const CACHE = "spinwheel-v3";
const APP_SHELL = ["/", "/random-name-picker/", "/random-team-generator/", "/yes-no-wheel/", "/raffle-picker/", "/privacy/", "/terms/", "/disclaimer/", "/cookie-policy/", "/manifest.webmanifest", "/icon.svg", "/og.png"];
self.addEventListener("install", (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL))));
self.addEventListener("activate", (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("/"))));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => {
    const fresh = fetch(event.request).then((response) => {
      if (response.ok) caches.open(CACHE).then((cache) => cache.put(event.request, response.clone()));
      return response;
    });
    return cached || fresh;
  }));
});

