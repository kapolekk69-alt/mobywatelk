{
  "name": "mObywatel",
  "short_name": "mObywatel",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
:white_check_mark:
Kliknij, aby zareagować
:cold_face:
Kliknij, aby zareagować
:x:
Kliknij, aby zareagować
Dodaj reakcję
Odpowiedz
Przekaż dalej
Więcej
[5:34 PM]Saturday, February 21, 2026 5:34 PM
const CACHE_NAME = "app-final-v1"; // zmieniaj przy każdej większej aktualizacji

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./dowodnowy.html",
        "./all.min.css",
        "./dowodnowy.css",
        "./main.css",
        "./sw.js.pobrane",
        "./timenev.js.pobrane",
        "./rozwijka.js.pobrane",
        "./icon.png",
        "./card.png",
        "./checkbo.png",
        "./checkmark.svg",
        "./dowodnowybg.png",
        "./flag.gif",
        "./godlo.gif",
        "./kosz.png",
        "./1.jpg",
        "./ab001_home.svg",
        "./ab010_more.svg",
        "./ac001_services.svg",
        "./ai001_scanner_qr.svg",
        "./arrow.svg",
        "./b002_framed_person.svg",
        "./madziamojakotka123.svg",
        "./normal_u391.svg",
        "./normal_u393.svg",
        "./normal_u394.svg",
        "./normal_u408.svg",
        "./pozdro.svg",
        "./css/" // cache całego folderu css, jeśli masz dodatkowe pliki w nim
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
:white_check_mark:
Kliknij, aby zareagować
:cold_face:
Kliknij, aby zareagować
:x:
Kliknij, aby zareagować
Dodaj reakcję
Odpowiedz
Przekaż dalej
Więcej

