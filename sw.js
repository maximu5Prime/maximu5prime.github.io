/* Service Worker (PWA, 13.10.2026): alle neuen Seiten offline, Videos nur auf Knopfdruck (Aha-Bibliothek, Cache „videos“).
   Seiten: Netz zuerst (Änderungen kommen sofort an), ohne Netz oder nach 3 s Warten die gespeicherte Fassung;
   CSS/JS/Schriften aus der Liste sofort aus dem Speicher.
   STAND = Pfad → Prüfsumme; beim Update lädt die Installation nur geänderte Dateien. Die Liste schreibt
   tools/pwa.py (nach jeder Änderung an Seiten/Assets laufen lassen, sonst bleibt die Offline-Fassung alt). */
var SEITEN = 'seiten', VIDEOS = 'videos', WARTEN = 3000;
// STAND-ANFANG (tools/pwa.py)
var STAND = {
  "/apple-touch-icon.png": "4b341c50e2",
  "/datenschutz.html": "0af4ae0a56",
  "/favicon.svg": "ee6cbb0738",
  "/impressum.html": "a469694687",
  "/": "2a482bb5c2",
  "/kit11/beanspruchung/KIT11_UE01_VID_Beanspruchung.jpg": "d80be1690f",
  "/kit11/beanspruchung/KIT11_UE01_VID_Beanspruchung.vtt": "eeacca77e8",
  "/kit11/beanspruchung/": "98fa69a7b6",
  "/kit11/": "0d57a83f5b",
  "/kit11/ki-fails/": "7342d83141",
  "/kit11/prompt-baukasten/": "3e5b7b11a5",
  "/kit11/ueben-ki/": "dad17eca8f",
  "/kit11/ueben-maschinenbau/": "ec0435ef7d",
  "/m11/funktionsbegriff/": "6cbd74c606",
  "/m11/": "a6bb33431b",
  "/m11/lineare-funktionen/": "658a633257",
  "/m11/nullstellen/MT11_VID_Schneiden_Beruehren.jpg": "00a04c0e9a",
  "/m11/nullstellen/MT11_VID_Schneiden_Beruehren.vtt": "e5d8edc56e",
  "/m11/nullstellen/": "8eb80066aa",
  "/m11/parabel/MT11_VID_Parabel_verschieben.jpg": "2c6b648936",
  "/m11/parabel/MT11_VID_Parabel_verschieben.vtt": "c2ad82ff91",
  "/m11/parabel/": "0a1a296111",
  "/m11/schnittpunkte/": "ff8f0aae79",
  "/m11/ueben-funktionen/": "64dc8597c2",
  "/m11/ungleichungen/MT11_VID_Zeichen_kippt.jpg": "0e18af6fe4",
  "/m11/ungleichungen/MT11_VID_Zeichen_kippt.vtt": "bcf27c5970",
  "/m11/ungleichungen/": "7afcc853ed",
  "/m12/ableitungsgraph/MT12_VID_Ableitungsgraph.jpg": "20eabff89f",
  "/m12/ableitungsgraph/MT12_VID_Ableitungsgraph.vtt": "cc769b2291",
  "/m12/ableitungsgraph/MT12_VID_Graph_f_aus_Ableitung.jpg": "2f3b121fb8",
  "/m12/ableitungsgraph/MT12_VID_Graph_f_aus_Ableitung.vtt": "1e8c7d6f5f",
  "/m12/ableitungsgraph/": "19d3437d5c",
  "/m12/aenderungsrate/MT12_VID_Schnellster_Anstieg.jpg": "f6616878b2",
  "/m12/aenderungsrate/MT12_VID_Schnellster_Anstieg.vtt": "ef0dd78521",
  "/m12/aenderungsrate/": "a51e1c21b8",
  "/m12/graphen-domino/": "401ccd3c07",
  "/m12/": "210421c5e1",
  "/m12/kurvendiskussion/": "2060875f64",
  "/m12/steckbrief/": "87e7785e08",
  "/m12/ueben-differenzialrechnung/": "8d3320f64a",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Bogenmass.jpg": "f0cce6c3b5",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Bogenmass.vtt": "a2a200abf1",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Einheitskreis.jpg": "16c0ef38c6",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Einheitskreis.vtt": "a94d7164e4",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Pythagoras.jpg": "7a56690e49",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Pythagoras.vtt": "62eafbe15d",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Tangens.jpg": "22d99b96f3",
  "/m12add/einheitskreis/MT12Add_LB02_VID_Tangens.vtt": "53967662bd",
  "/m12add/einheitskreis/": "e0d05d1371",
  "/m12add/": "dae6a6f02d",
  "/m12add/sinus-parameter/": "f644ed3c11",
  "/m12add/ueben-trigonometrie/": "d0f25f0b79",
  "/manifest.webmanifest": "038816e85d",
  "/offline.html": "c4cf5c8960",
  "/ph11/bewegung/": "73d07b4a9a",
  "/ph11/einheiten/": "11eb4b2d16",
  "/ph11/einholen/": "16cb609d44",
  "/ph11/": "3e5e4e28ee",
  "/ph11/ort-geschwindigkeit/PH11_UE01_VID_Nullpunkt.jpg": "7551d49ce7",
  "/ph11/ort-geschwindigkeit/PH11_UE01_VID_Nullpunkt.vtt": "b8007f45f8",
  "/ph11/ort-geschwindigkeit/": "8edd6311f0",
  "/ph11/t-x-diagramm/": "5a2c77acb8",
  "/ph11/ueben-bewegungen/": "e70524d214",
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
  "/static/v2/aha-lib.js": "8cd3265bf9",
  "/static/v2/base.css": "502bf0432d",
  "/static/v2/farben.css": "24d3b5c3ef",
  "/static/v2/icons/icon-192.png": "1eb1ed140b",
  "/static/v2/icons/icon-512.png": "ad691cd9c3",
  "/static/v2/icons/maskable-512.png": "f3c0c05929"
};
// STAND-ENDE

/* Robust bei schlechtem Netz (26.10.2026, Kanban #19): Jede Datei einzeln — scheitert eine, bleibt der Rest gespeichert
   und die Installation gilt trotzdem; Fehlendes holt auffuellen() beim nächsten Seitenaufruf nach. In __stand steht
   nur, was wirklich im Speicher liegt. */
function auffuellen() {
  return caches.open(SEITEN).then(function (c) {
    return c.match('/__stand').then(function (r) { return r ? r.json() : {}; }).catch(function () { return {}; }).then(function (alt) {
      var da = {};
      return Promise.all(Object.keys(STAND).map(function (u) {
        return c.match(u).then(function (g) {
          if (g && alt[u] === STAND[u]) { da[u] = STAND[u]; return; }
          return fetch(u, { cache: 'reload' }).then(function (r) {
            if (!r.ok) throw new Error(u + ': ' + r.status);
            return sauber(r).then(function (s) { return c.put(u, s); }).then(function () { da[u] = STAND[u]; });
          }).catch(function () { if (g) da[u] = alt[u]; });   // alte Fassung behalten, später neu versuchen
        });
      })).then(function () {
        Object.keys(alt).forEach(function (u) { if (!(u in STAND)) c.delete(u); });
        return c.put('/__stand', new Response(JSON.stringify(da))).then(function () {
          return Object.keys(STAND).every(function (u) { return da[u] === STAND[u]; });
        });
      });
    });
  });
}
var vollstaendig = false, zuletzt = 0;

self.addEventListener('install', function (e) {
  e.waitUntil(auffuellen().catch(function () {}).then(function (ok) { vollstaendig = ok === true; return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== SEITEN && k !== VIDEOS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (/\.mp4$/.test(url.pathname)) { if (!url.searchParams.has('neu')) e.respondWith(video(req)); return; }
  var seite = req.mode === 'navigate';
  e.respondWith(seite || !(url.pathname in STAND) ? netzZuerst(req, seite) : speicherZuerst(req));
  // Unvollständige Offline-Liste: beim Seitenaufruf nachholen (höchstens einmal pro Minute)
  if (seite && !vollstaendig && Date.now() - zuletzt > 60000) {
    zuletzt = Date.now();
    e.waitUntil(auffuellen().then(function (ok) { vollstaendig = ok; }).catch(function () {}));
  }
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

/* Seiten: Netz zuerst (Änderungen kommen sofort an), nach WARTEN oder bei Fehler/Fehlerseite die gespeicherte Fassung */
function netzZuerst(req, seite) {
  return caches.open(SEITEN).then(function (c) {
    var key = seite ? schluessel(req.url) : req;
    var gespeichert = c.match(key);
    var netz = fetch(req).then(function (r) {
      if (!r.ok && r.status !== 404) return gespeichert.then(function (g) { return g || r; });  // 5xx, WLAN-Anmeldeseite …
      // ganz lesen, bevor geantwortet wird: Reißt die Übertragung mittendrin ab, gilt das als Netzfehler (→ gespeicherte
      // Fassung) statt einer halb geladenen, hängenden Seite; zählt auch gegen WARTEN (Langsam-Netz-Test 26.10.2026)
      return r.blob().then(function (b) {
        var s = new Response(b, { status: r.status, statusText: r.statusText, headers: r.headers });
        if (r.ok && r.type === 'basic') c.put(key, s.clone());
        return s;
      });
    });
    var notfall = new Promise(function (ok) { setTimeout(ok, WARTEN); }).then(function () {
      return gespeichert.then(function (g) { return g || netz; });
    });
    return Promise.race([netz, notfall]).catch(function () {
      return gespeichert.then(function (g) { return g || (seite ? c.match('/offline.html') : Response.error()); });
    });
  });
}

/* CSS, JS, Schriften, Bilder aus der Offline-Liste: sofort aus dem Speicher — neue Fassungen holt die Installation
   (Prüfsumme in STAND). Kein Warten pro Datei bei schlechtem Netz. */
function speicherZuerst(req) {
  return caches.open(SEITEN).then(function (c) {
    return c.match(new URL(req.url).pathname).then(function (g) { return g || netzZuerst(req, false); });
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
