self.addEventListener("install", function(e) {
  return e.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(e) {
  return e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function() {});
