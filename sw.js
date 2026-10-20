/* Service Worker (PWA, 13.10.2026): alle neuen Seiten offline, Videos nur auf Knopfdruck (Aha-Bibliothek, Cache „videos“).
   Netz zuerst (Änderungen kommen sofort an), ohne Netz oder nach 4 s Warten die gespeicherte Fassung.
   STAND = Pfad → Prüfsumme; beim Update lädt die Installation nur geänderte Dateien. Die Liste schreibt
   tools/pwa.py (nach jeder Änderung an Seiten/Assets laufen lassen, sonst bleibt die Offline-Fassung alt). */
var SEITEN = 'seiten', VIDEOS = 'videos', WARTEN = 4000;
// STAND-ANFANG (tools/pwa.py)
var STAND = {
  "/apple-touch-icon.png": "4b341c50e2",
  "/datenschutz.html": "0af4ae0a56",
  "/favicon.svg": "ee6cbb0738",
  "/impressum.html": "a469694687",
  "/": "2a482bb5c2",
  "/kit11/beanspruchung/KIT11_UE01_VID_Beanspruchung.jpg": "d80be1690f",
  "/kit11/beanspruchung/KIT11_UE01_VID_Beanspruchung.vtt": "eeacca77e8",
  "/kit11/beanspruchung/": "c3dda60dea",
  "/kit11/": "2dee13b2f6",
  "/kit11/ki-fails/": "6fcac5b1eb",
  "/kit11/prompt-baukasten/": "5949b3118f",
  "/m11/funktionsbegriff/": "a28124164b",
  "/m11/": "c406b81f3a",
  "/m11/lineare-funktionen/": "e0fc154d9e",
  "/m11/nullstellen/MT11_VID_Schneiden_Beruehren.jpg": "00a04c0e9a",
  "/m11/nullstellen/MT11_VID_Schneiden_Beruehren.vtt": "e5d8edc56e",
  "/m11/nullstellen/": "e31cf4bac4",
  "/m11/parabel/MT11_VID_Parabel_verschieben.jpg": "2c6b648936",
  "/m11/parabel/MT11_VID_Parabel_verschieben.vtt": "c2ad82ff91",
  "/m11/parabel/": "46eb104f56",
  "/m11/schnittpunkte/": "9d67e64302",
  "/m11/ungleichungen/MT11_VID_Zeichen_kippt.jpg": "0e18af6fe4",
  "/m11/ungleichungen/MT11_VID_Zeichen_kippt.vtt": "bcf27c5970",
  "/m11/ungleichungen/": "51bb416960",
  "/m12/ableitungsgraph/MT12_VID_Ableitungsgraph.jpg": "20eabff89f",
  "/m12/ableitungsgraph/MT12_VID_Ableitungsgraph.vtt": "cc769b2291",
  "/m12/ableitungsgraph/MT12_VID_Graph_f_aus_Ableitung.jpg": "2f3b121fb8",
  "/m12/ableitungsgraph/MT12_VID_Graph_f_aus_Ableitung.vtt": "1e8c7d6f5f",
  "/m12/ableitungsgraph/": "9648011125",
  "/m12/aenderungsrate/MT12_VID_Schnellster_Anstieg.jpg": "f6616878b2",
  "/m12/aenderungsrate/MT12_VID_Schnellster_Anstieg.vtt": "ef0dd78521",
  "/m12/aenderungsrate/": "2e06f234cc",
  "/m12/graphen-domino/": "150f83fe24",
  "/m12/": "f79af7c77a",
  "/m12/kurvendiskussion/": "2060875f64",
  "/m12/steckbrief/": "641ccfdaf5",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Bogenmass.jpg": "f0cce6c3b5",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Bogenmass.vtt": "a2a200abf1",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Einheitskreis.jpg": "16c0ef38c6",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Einheitskreis.vtt": "a94d7164e4",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Pythagoras.jpg": "7a56690e49",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Pythagoras.vtt": "62eafbe15d",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Tangens.jpg": "22d99b96f3",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Tangens.vtt": "53967662bd",
  "/m12add/einheitskreis/": "b0f0e60f5c",
  "/m12add/": "5506dc57c4",
  "/m12add/sinus-parameter/": "c1f477feb1",
  "/manifest.webmanifest": "038816e85d",
  "/offline.html": "c4cf5c8960",
  "/ph11/bewegung/": "c82aacdeab",
  "/ph11/einheiten/": "59bbad9981",
  "/ph11/": "65f993c4a7",
  "/ph11/ort-geschwindigkeit/PH11_UE01_VID_Nullpunkt.jpg": "7551d49ce7",
  "/ph11/ort-geschwindigkeit/PH11_UE01_VID_Nullpunkt.vtt": "b8007f45f8",
  "/ph11/ort-geschwindigkeit/": "cd1346119f",
  "/static/katex/contrib/auto-render.min.js": "82dca94048",
  "/static/katex/fonts/KaTeX_AMS-Regular.woff2": "3449474373",
  "/static/katex/fonts/KaTeX_Caligraphic-Bold.woff2": "5bfa49cac4",
  "/static/katex/fonts/KaTeX_Caligraphic-Regular.woff2": "9f8077e0b3",
  "/static/katex/fonts/KaTeX_Fraktur-Bold.woff2": "f98f89272e",
  "/static/katex/fonts/KaTeX_Fraktur-Regular.woff2": "a5764c6e27",
  "/static/katex/fonts/KaTeX_Main-Bold.woff2": "31050a1b1b",
  "/static/katex/fonts/KaTeX_Main-BoldItalic.woff2": "a4a4905b8b",
  "/static/katex/fonts/KaTeX_Main-Italic.woff2": "c9b2b5ffd2",
  "/static/katex/fonts/KaTeX_Main-Regular.woff2": "c884086c25",
  "/static/katex/fonts/KaTeX_Math-BoldItalic.woff2": "8fcb9d2de6",
  "/static/katex/fonts/KaTeX_Math-Italic.woff2": "db4883d0cf",
  "/static/katex/fonts/KaTeX_SansSerif-Bold.woff2": "886e61797a",
  "/static/katex/fonts/KaTeX_SansSerif-Italic.woff2": "3d5fa3cb30",
  "/static/katex/fonts/KaTeX_SansSerif-Regular.woff2": "e45d5f4f4a",
  "/static/katex/fonts/KaTeX_Script-Regular.woff2": "63b80959f1",
  "/static/katex/fonts/KaTeX_Size1-Regular.woff2": "57fa599974",
  "/static/katex/fonts/KaTeX_Size2-Regular.woff2": "ee18713634",
  "/static/katex/fonts/KaTeX_Size3-Regular.woff2": "19a7caadfb",
  "/static/katex/fonts/KaTeX_Size4-Regular.woff2": "9bed17fb92",
  "/static/katex/fonts/KaTeX_Typewriter-Regular.woff2": "7a08883fff",
  "/static/katex/katex.min.css": "2f624a3921",
  "/static/katex/katex.min.js": "6d481709e3",
  "/static/v2/DMSans-var.woff2": "c57593e0ad",
  "/static/v2/JetBrainsMono-var.woff2": "e7277e7145",
  "/static/v2/aha-lib.js": "cbf5e6f006",
  "/static/v2/base.css": "71001ac0a7",
  "/static/v2/farben.css": "f82ee11f33",
  "/static/v2/icons/icon-192.png": "1eb1ed140b",
  "/static/v2/icons/icon-512.png": "ad691cd9c3",
  "/static/v2/icons/maskable-512.png": "f3c0c05929"
};
// STAND-ENDE

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SEITEN).then(function (c) {
    return c.match('/__stand').then(function (r) { return r ? r.json() : {}; }).catch(function () { return {}; }).then(function (alt) {
      var holen = Object.keys(STAND).map(function (u) {
        return c.match(u).then(function (da) {
          if (da && alt[u] === STAND[u]) return;
          return fetch(u, { cache: 'reload' }).then(function (r) {
            if (!r.ok) throw new Error(u + ': ' + r.status);
            return sauber(r).then(function (s) { return c.put(u, s); });
          });
        });
      });
      return Promise.all(holen).then(function () {
        Object.keys(alt).forEach(function (u) { if (!(u in STAND)) c.delete(u); });
        return c.put('/__stand', new Response(JSON.stringify(STAND)));
      });
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== SEITEN && k !== VIDEOS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (/\.mp4$/.test(url.pathname)) { if (!url.searchParams.has('neu')) e.respondWith(video(req)); }
  else e.respondWith(netzZuerst(req, req.mode === 'navigate'));
});

/* Safari lehnt Antworten mit Weiterleitung für Seitenaufrufe ab → ohne redirected-Markierung ablegen */
function sauber(r) {
  if (!r.redirected) return Promise.resolve(r);
  return r.blob().then(function (b) { return new Response(b, { status: r.status, statusText: r.statusText, headers: r.headers }); });
}

/* Schlüssel für Seiten: ohne ?…, …/index.html → …/ (QR-Codes und Links nutzen beide Formen) */
function schluessel(u) {
  var x = new URL(u); x.search = ''; x.hash = '';
  x.pathname = x.pathname.replace(/\/index\.html$/, '/');
  return x.href;
}

function netzZuerst(req, seite) {
  return caches.open(SEITEN).then(function (c) {
    var key = seite ? schluessel(req.url) : req;
    var gespeichert = c.match(key);
    var netz = fetch(req).then(function (r) {
      if (r.ok && r.type === 'basic') sauber(r.clone()).then(function (s) { c.put(key, s); });
      return r;
    });
    var notfall = new Promise(function (ok) { setTimeout(ok, WARTEN); }).then(function () {
      return gespeichert.then(function (g) { return g || netz; });
    });
    return Promise.race([netz, notfall]).catch(function () {
      return gespeichert.then(function (g) { return g || (seite ? c.match('/offline.html') : Response.error()); });
    });
  });
}

/* Videos: gespeichert → Teilstück passend zum Range-Header (206), sonst normal aus dem Netz */
function video(req) {
  return caches.open(VIDEOS).then(function (c) { return c.match(req.url, { ignoreSearch: true }); }).then(function (r) {
    if (!r) return fetch(req).catch(function () { return new Response(null, { status: 503, statusText: 'Offline' }); });
    var range = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
    if (!range) return r;
    return r.blob().then(function (b) {
      var n = b.size, von, bis;
      if (range[1] === '') { von = Math.max(0, n - +range[2]); bis = n - 1; }
      else { von = +range[1]; bis = range[2] === '' ? n - 1 : Math.min(+range[2], n - 1); }
      if (von >= n || von > bis) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + n } });
      return new Response(b.slice(von, bis + 1), { status: 206, statusText: 'Partial Content', headers: {
        'Content-Type': 'video/mp4', 'Content-Length': String(bis - von + 1),
        'Content-Range': 'bytes ' + von + '-' + bis + '/' + n, 'Accept-Ranges': 'bytes' } });
    });
  });
}
