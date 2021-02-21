const CACHE_NAME = "version-1";
const urlToCache = ["index.html", "offline.html"];

//INSTALL SERVICEWORKER
const self = this;
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Cached open");
        return cache.addAll(urlToCache);
      })
      .catch((err) => console.log(`Error: ${err}`))
  );
});
//LISTEN FOR REQUESTS
self.addEventListener("fetch", (e) => {});

//ACTIVE SERVICE WORKER

self.addEventListener("activate", (e) => {});
