/* video-quiz.js – Videos, die anhalten und fragen (23.11.2026, aus dem MINT-Labor-Player #116 übernommen und vereinfacht)
 *
 *   <div class="vq" id="vq"></div>
 *   VideoQuiz.mount('vq', { videos: [ { id: 'formen', titel: 'Formen umwandeln', src: 'X.mp4', vtt: 'X.vtt', poster: 'X.jpg',
 *       stopps: [ { vor: 'Satzanfang …', typ: 'wahl'|'zahl'|'info', frage, optionen, richtig, toleranz, erklaerung,
 *                   zurueck: 'Satzanfang …' } ] } ] });
 *
 * Haltepunkte hängen am SATZ, nicht an der Sekunde: „vor“ = Anfang eines Untertitels (VTT). Das Video hält kurz vor diesem Satz an.
 * Spricht die Lehrkraft die Sätze neu ein, verschieben sich die Zeiten – die Stopps stimmen trotzdem.
 * „zurueck“ (Satzanfang) = Sprungziel für „Stelle noch einmal ansehen“. Typ „info“ = Zusatzinfo ohne Frage (Knopf „Weiter“).
 * Mehrere Videos → Chips; Sprungmarke #<id> öffnet das Video. Fortschritt nur im Speicher der Seite (kein localStorage nötig).
 * Formeln in Frage/Optionen/Erklärung mit $…$ (KaTeX auto-render der Seite).
 */
(function () {
  'use strict';
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var norm = function (s) { return String(s || '').replace(/\s+/g, ' ').trim().toLowerCase(); };
  var zahl = function (s) { return parseFloat(String(s).trim().replace(/\s/g, '').replace(',', '.')); };
  var fmt = function (t) { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); };
  function katex(el) {
    if (window.renderMathInElement) {
      try { window.renderMathInElement(el, { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false }); } catch (e) { /* ohne Formelsatz weiter */ }
    }
  }

  function parseVTT(text) {
    var cues = [], bl = String(text).replace(/\r/g, '').split(/\n\n+/);
    bl.forEach(function (b) {
      var z = b.split('\n'), i = z.findIndex(function (l) { return l.indexOf('-->') >= 0; });
      if (i < 0) return;
      var m = z[i].split('-->').map(function (s) { return s.trim().split(' ')[0]; });
      var sek = function (s) { var p = s.split(':').map(Number); return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p[0] * 60 + p[1]; };
      cues.push({ start: sek(m[0]), end: sek(m[1]), text: z.slice(i + 1).join(' ') });
    });
    return cues;
  }

  function mount(elId, cfg) {
    var root = document.getElementById(elId);
    if (!root) return;
    var videos = cfg.videos || [];
    root.classList.add('vq');
    root.innerHTML =
      (videos.length > 1 ? '<div class="vq-chips" role="tablist"></div>' : '') +
      '<div class="vq-buehne"><video controls playsinline preload="metadata"></video></div>' +
      '<div class="vq-leiste"><span class="vq-stand"></span><span class="vq-punkte"></span></div>' +
      '<div class="vq-karte" hidden aria-live="polite"></div>';
    var chips = root.querySelector('.vq-chips'), video = root.querySelector('video'), karte = root.querySelector('.vq-karte');
    var stand = root.querySelector('.vq-stand'), punkte = root.querySelector('.vq-punkte');
    var aktiv = null, stopps = [], cues = [], lastT = 0, inFrage = false, gesehen = {};

    function zeitVon(prefix, ende) {
      if (prefix == null) return null;
      var p = norm(prefix), c = cues.find(function (c) { return norm(c.text).indexOf(p) === 0; });
      if (!c) { console.warn('video-quiz: Satz nicht gefunden:', prefix); return null; }
      return ende ? c.end : Math.max(0, c.start - 0.08);
    }

    function zeigePunkte() {
      var fragen = stopps.filter(function (s) { return s.typ !== 'info'; });
      var ok = fragen.filter(function (s) { return s.status === 'ok'; }).length;
      punkte.textContent = fragen.length ? ok + ' von ' + fragen.length + ' Fragen beim ersten Versuch' : '';
      var naechste = stopps.find(function (s) { return s.t != null && !s.status && s.t > video.currentTime; });
      stand.textContent = naechste ? (naechste.typ === 'info' ? 'ℹ Zusatzinfo' : '❓ Frage') + ' bei ' + fmt(naechste.t) : '';
    }

    function laden(v, autoplay) {
      aktiv = v; inFrage = false; karte.hidden = true;
      if (chips) chips.querySelectorAll('button').forEach(function (b) { b.classList.toggle('aktiv', b.dataset.id === v.id); b.setAttribute('aria-selected', b.dataset.id === v.id); });
      video.innerHTML = '';
      video.poster = v.poster || '';
      video.src = v.src;
      var tr = document.createElement('track');
      tr.kind = 'subtitles'; tr.srclang = 'de'; tr.label = 'Deutsch'; tr.src = v.vtt; tr.default = true;
      video.appendChild(tr);
      stopps = (v.stopps || []).map(function (s, i) { return Object.assign({}, s, { nr: i + 1, status: null, versuche: 0, t: null }); });
      cues = [];
      fetch(v.vtt).then(function (r) { return r.text(); }).then(function (t) {
        cues = parseVTT(t);
        stopps.forEach(function (s) { s.t = zeitVon(s.vor); s.tz = zeitVon(s.zurueck); });
        stopps.sort(function (a, b) { return (a.t || 0) - (b.t || 0); });
        zeigePunkte();
      }).catch(function () { stand.textContent = 'Untertitel fehlen – das Video läuft ohne Fragen.'; });
      lastT = 0;
      if (autoplay) video.play().catch(function () {});
    }

    if (chips) {
      chips.innerHTML = videos.map(function (v) { return '<button type="button" role="tab" data-id="' + esc(v.id) + '">' + esc(v.titel) + '</button>'; }).join('');
      chips.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () {
          laden(videos.find(function (v) { return v.id === b.dataset.id; }), false);
          try { history.replaceState(null, '', '#' + b.dataset.id); } catch (e) { /* egal */ }
        });
      });
    }

    function weiter() { karte.hidden = true; inFrage = false; lastT = video.currentTime + 0.01; zeigePunkte(); video.play().catch(function () {}); }

    function frage(s) {
      inFrage = true;
      if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) { /* egal */ } }
      if (video.webkitDisplayingFullscreen) { try { video.webkitExitFullscreen(); } catch (e) { /* egal */ } }
      var kopf = s.typ === 'info' ? '<div class="vq-nr">ℹ Zusatzinfo</div>' : '<div class="vq-nr">Frage ' + stopps.filter(function (x) { return x.typ !== 'info' && x.t <= s.t; }).length + '</div>';
      var koerper;
      if (s.typ === 'info') koerper = '<div class="vq-info">' + s.text + '</div>';
      else if (s.typ === 'zahl') koerper = '<form class="vq-zahl"><input inputmode="decimal" autocomplete="off" aria-label="Antwort" placeholder="Zahl eingeben"><button class="vq-btn haupt" type="submit">Prüfen</button></form>';
      else koerper = '<div class="vq-opts">' + s.optionen.map(function (o, i) { return '<button type="button" class="vq-opt" data-i="' + i + '">' + o + '</button>'; }).join('') + '</div>';
      karte.innerHTML = kopf + (s.frage ? '<h3>' + s.frage + '</h3>' : '') + koerper + '<div class="vq-fb"></div><div class="vq-akt">' +
        (s.typ === 'info' ? '<button type="button" class="vq-btn haupt vq-go">Weiter ▸</button>' : '<button type="button" class="vq-leise vq-skip">Überspringen</button>') + '</div>';
      karte.hidden = false;
      katex(karte);
      karte.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      var go = karte.querySelector('.vq-go');
      if (go) { go.addEventListener('click', function () { s.status = 'gesehen'; weiter(); }); go.focus(); }
      var skip = karte.querySelector('.vq-skip');
      if (skip) skip.addEventListener('click', function () { if (!s.status) s.status = 'bad'; weiter(); });
      if (s.typ === 'zahl') {
        var form = karte.querySelector('form'), inp = form.querySelector('input');
        setTimeout(function () { inp.focus(); }, 60);
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var v = zahl(inp.value); if (!isFinite(v)) { inp.focus(); return; }
          antwort(s, Math.abs(v - s.richtig) <= (s.toleranz == null ? 1e-9 : s.toleranz), inp);
        });
      } else if (s.typ !== 'info') {
        karte.querySelectorAll('.vq-opt').forEach(function (b) { b.addEventListener('click', function () { antwort(s, +b.dataset.i === s.richtig, b); }); });
      }
    }

    function antwort(s, ok, el) {
      s.versuche++;
      if (!s.status) s.status = ok ? 'ok' : 'bad';
      var fb = karte.querySelector('.vq-fb'), akt = karte.querySelector('.vq-akt');
      fb.className = 'vq-fb an ' + (ok ? 'ok' : 'nein');
      if (ok) {
        karte.querySelectorAll('.vq-opt, input').forEach(function (b) { b.disabled = true; });
        if (el.classList.contains('vq-opt')) el.classList.add('richtig');
        fb.innerHTML = '<b>Richtig!</b> ' + (s.erklaerung || '');
        akt.innerHTML = '<button type="button" class="vq-btn haupt vq-go">Weiter ▸</button>';
        akt.querySelector('.vq-go').addEventListener('click', weiter);
        akt.querySelector('.vq-go').focus();
      } else {
        if (el.classList.contains('vq-opt')) { el.classList.add('falsch'); el.disabled = true; }
        fb.innerHTML = '<b>Noch nicht.</b> ' + (s.versuche >= 2 && s.erklaerung ? s.erklaerung : 'Versuchen Sie es noch einmal – oder sehen Sie sich die Stelle noch einmal an.');
        akt.innerHTML = '<button type="button" class="vq-leise vq-skip">Überspringen</button>' +
          (s.tz != null ? '<button type="button" class="vq-btn vq-back">↺ Stelle noch einmal ansehen</button>' : '');
        akt.querySelector('.vq-skip').addEventListener('click', weiter);
        var bk = akt.querySelector('.vq-back');
        if (bk) bk.addEventListener('click', function () { karte.hidden = true; inFrage = false; video.currentTime = s.tz; lastT = s.tz; video.play().catch(function () {}); });
      }
      katex(fb);
      zeigePunkte();
    }

    function wache() {
      if (!video.paused && !inFrage && aktiv) {
        var t = video.currentTime;
        if (t > lastT && t - lastT < 1.5) {
          var s = stopps.find(function (s) { return s.t != null && s.t > lastT && s.t <= t; });
          if (s) { video.pause(); video.currentTime = s.t; frage(s); }
        }
        lastT = t;
      }
      requestAnimationFrame(wache);
    }
    requestAnimationFrame(wache);
    video.addEventListener('seeked', function () { if (!inFrage) lastT = video.currentTime; zeigePunkte(); });
    video.addEventListener('play', function () { if (inFrage) video.pause(); });
    video.addEventListener('ended', function () {
      gesehen[aktiv.id] = true;
      if (chips) chips.querySelector('[data-id="' + aktiv.id + '"]').classList.add('fertig');
      root.dispatchEvent(new CustomEvent('vq-ende', { detail: { id: aktiv.id, alle: videos.every(function (v) { return gesehen[v.id]; }) } }));
    });

    var start = videos.find(function (v) { return '#' + v.id === location.hash; }) || videos[0];
    if (start) laden(start, false);
    window.addEventListener('hashchange', function () {
      var v = videos.find(function (v) { return '#' + v.id === location.hash; });
      if (v && v !== aktiv) { laden(v, false); root.scrollIntoView({ behavior: 'smooth' }); }
    });
  }

  window.VideoQuiz = { mount: mount, parseVTT: parseVTT };
})();
