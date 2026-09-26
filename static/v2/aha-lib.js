/* aha-lib.js — Baukasten für die neuen Aha-Seiten (Website-Umbau 2026).
   Stellt window.Aha bereit: Theme-Umschalter, KaTeX-Helfer, Canvas-Koordinatensystem
   (Achsen mit Größe/Einheit, Gitter, Graphen, Punkte, Flächen), Auftrag + Aha-Freischaltung.
   Farben immer zur Zeichenzeit aus CSS-Variablen lesen (Hell/Dunkel).
   Seiten-Skripte starten in window.addEventListener('load', …) und rufen Aha.onRedraw(fn). */
(function () {
  'use strict';

  var redrawFns = [];
  function $(id) { return document.getElementById(id); }
  function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  function de(n, d) {
    var s = n.toFixed(d === undefined ? 0 : d).replace('.', ',');
    return d ? s.replace(/,?0+$/, '') : s;             // 7,50 → 7,5 · 6,0 → 6
  }
  function dt(n, d) { return de(n, d).replace(',', '{,}'); }   // Dezimalkomma für KaTeX
  function tex(el, s, display) {
    if (typeof el === 'string') el = $(el);
    if (!el) return;
    if (window.katex) katex.render(s, el, { throwOnError: false, displayMode: !!display });
    else el.textContent = s;
  }
  function colors() {
    return {
      grid: css('--c-grid'), axis: css('--c-axis'), text: css('--c-muted'), bg: css('--c-bg'),
      accent: css('--c-accent'), k: css('--c-k'), e: css('--c-e'),
      gain: css('--c-gain'), loss: css('--c-loss'), gainFill: css('--c-gain-fill'), lossFill: css('--c-loss-fill'),
      body: css('--font-body'), mono: css('--font-mono')
    };
  }
  function redrawAll() { redrawFns.forEach(function (f) { f(); }); }

  /* Theme-Umschalter: data-theme auf <html>, Schlüssel 'theme' wie auf der alten Seite */
  function initTheme() {
    var b = $('themeBtn');
    if (!b) return;
    b.addEventListener('click', function () {
      var root = document.documentElement;
      var dark = root.dataset.theme ? root.dataset.theme === 'dark'
        : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (err) {}
      redrawAll();
    });
  }

  /* Koordinatensystem auf einem Canvas.
     opts: {canvas, wrap, view:{xMin,xMax,yMin,yMax}, step:{x,y}, label:{x,y}, xLabel, yLabel,
            ratio (Höhe/Breite), minH, maxH, fmtX, fmtY} */
  function Plot(opts) {
    this.o = opts;
    this.cv = typeof opts.canvas === 'string' ? $(opts.canvas) : opts.canvas;
    this.ctx = this.cv.getContext('2d');
    this.pad = { l: opts.padL || 54, r: 16, t: 34, b: 44 };
  }
  Plot.prototype.setup = function () {
    var wrap = typeof this.o.wrap === 'string' ? $(this.o.wrap) : this.o.wrap;
    var dpr = window.devicePixelRatio || 1;
    var W = wrap.clientWidth;
    var H = Math.round(W * (this.o.ratio || 0.56));
    H = Math.max(this.o.minH || 280, Math.min(this.o.maxH || 520, H));
    this.W = W; this.H = H;
    this.cv.width = W * dpr; this.cv.height = H * dpr;
    this.cv.style.width = W + 'px'; this.cv.style.height = H + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.C = colors();
    this.ctx.clearRect(0, 0, W, H);
    return this;
  };
  Plot.prototype.X = function (x) { var v = this.o.view; return this.pad.l + (x - v.xMin) / (v.xMax - v.xMin) * (this.W - this.pad.l - this.pad.r); };
  Plot.prototype.Y = function (y) { var v = this.o.view; return this.H - this.pad.b - (y - v.yMin) / (v.yMax - v.yMin) * (this.H - this.pad.t - this.pad.b); };
  Plot.prototype.fromX = function (px) { var v = this.o.view; return v.xMin + (px - this.pad.l) / (this.W - this.pad.l - this.pad.r) * (v.xMax - v.xMin); };
  Plot.prototype.fromY = function (py) { var v = this.o.view; return v.yMin + (this.H - this.pad.b - py) / (this.H - this.pad.t - this.pad.b) * (v.yMax - v.yMin); };

  Plot.prototype.grid = function () {
    var c = this.ctx, v = this.o.view, st = this.o.step, lb = this.o.label || st, C = this.C;
    var narrow = this.W < 520, fx = this.o.fmtX || function (n) { return de(n, 2); }, fy = this.o.fmtY || function (n) { return de(n, 2); };
    var near = function (a, b) { return Math.abs(a - b) < 1e-9; };
    c.font = '500 12px ' + C.mono; c.lineWidth = 1; c.strokeStyle = C.grid; c.fillStyle = C.text;
    var x, y;
    for (x = Math.ceil(v.xMin / st.x) * st.x; x <= v.xMax + 1e-9; x += st.x) {
      c.beginPath(); c.moveTo(this.X(x), this.Y(v.yMin)); c.lineTo(this.X(x), this.Y(v.yMax)); c.stroke();
    }
    for (y = Math.ceil(v.yMin / st.y) * st.y; y <= v.yMax + 1e-9; y += st.y) {
      c.beginPath(); c.moveTo(this.X(v.xMin), this.Y(y)); c.lineTo(this.X(v.xMax), this.Y(y)); c.stroke();
    }
    /* Achsen: x-Achse bei y=0 (bzw. unten), y-Achse bei x=0 (bzw. links) */
    var y0 = (v.yMin <= 0 && v.yMax >= 0) ? 0 : v.yMin, x0 = (v.xMin <= 0 && v.xMax >= 0) ? 0 : v.xMin;
    c.strokeStyle = C.axis; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(this.X(v.xMin), this.Y(y0)); c.lineTo(this.X(v.xMax), this.Y(y0)); c.stroke();
    c.beginPath(); c.moveTo(this.X(x0), this.Y(v.yMin)); c.lineTo(this.X(x0), this.Y(v.yMax)); c.stroke();
    var lx = narrow ? lb.x * 2 : lb.x;
    c.textAlign = 'center';
    for (x = Math.ceil(v.xMin / lx) * lx; x <= v.xMax + 1e-9; x += lx) {
      if (near(x, x0) && x0 !== v.xMin) continue;
      c.fillText(fx(x), this.X(x), this.Y(y0) + 17);
    }
    c.textAlign = 'right';
    var ly = (narrow && (v.yMax - v.yMin) / lb.y > 6) ? lb.y * 2 : lb.y;
    for (y = Math.ceil(v.yMin / ly) * ly; y <= v.yMax + 1e-9; y += ly) {
      if (near(y, y0) && y0 !== v.yMin) continue;
      c.fillText(fy(y), this.X(x0) - 7, this.Y(y) + 4);
    }
    if (x0 !== v.xMin || y0 !== v.yMin) { c.textAlign = 'right'; c.fillText('0', this.X(x0) - 6, this.Y(y0) + 16); }
    c.textAlign = 'right';
    if (y0 === v.yMin) c.fillText(this.o.xLabel || 'x', this.X(v.xMax), this.H - 5);        // Sachkontext: unter den Zahlen
    else c.fillText(this.o.xLabel || 'x', this.X(v.xMax) - 2, this.Y(y0) - 8);              // Achsenkreuz: an der Pfeilspitze
    c.textAlign = 'left'; c.fillText(this.o.yLabel || 'y', this.X(x0) + 8, this.pad.t - 14);
    return this;
  };

  /* Graph einer Funktion, am Rand abgeschnitten */
  Plot.prototype.curve = function (f, color, width, from, to) {
    var c = this.ctx, v = this.o.view, n = 240, a = from === undefined ? v.xMin : from, b = to === undefined ? v.xMax : to;
    c.save();
    c.beginPath(); c.rect(this.pad.l, this.pad.t - 6, this.W - this.pad.l - this.pad.r, this.H - this.pad.t - this.pad.b + 12); c.clip();
    c.strokeStyle = color; c.lineWidth = width || 4; c.lineCap = 'round'; c.lineJoin = 'round';
    c.beginPath();
    for (var i = 0; i <= n; i++) {
      var x = a + (b - a) * i / n, y = f(x);
      if (i === 0) c.moveTo(this.X(x), this.Y(y)); else c.lineTo(this.X(x), this.Y(y));
    }
    c.stroke(); c.restore();
    return this;
  };
  /* Fläche zwischen zwei Graphen f (oben/unten egal) von a bis b */
  Plot.prototype.between = function (f, g, a, b, fill) {
    if (b <= a) return this;
    var c = this.ctx, n = 80, i, x, v = this.o.view;
    var clip = function (y) { return Math.max(v.yMin, Math.min(v.yMax, y)); };
    c.fillStyle = fill; c.beginPath();
    for (i = 0; i <= n; i++) { x = a + (b - a) * i / n; c.lineTo(this.X(x), this.Y(clip(f(x)))); }
    for (i = n; i >= 0; i--) { x = a + (b - a) * i / n; c.lineTo(this.X(x), this.Y(clip(g(x)))); }
    c.closePath(); c.fill();
    return this;
  };
  Plot.prototype.dot = function (x, y, color, r, hollow) {
    var c = this.ctx;
    c.beginPath(); c.arc(this.X(x), this.Y(y), r || 7, 0, 2 * Math.PI);
    if (hollow) { c.fillStyle = this.C.bg; c.fill(); c.lineWidth = 3; c.strokeStyle = color; c.stroke(); }
    else { c.fillStyle = color; c.fill(); }
    return this;
  };
  Plot.prototype.text = function (s, x, y, color, align, dx, dy, weight) {
    var c = this.ctx;
    c.font = (weight || 700) + ' 15px ' + this.C.body; c.fillStyle = color; c.textAlign = align || 'left';
    c.fillText(s, this.X(x) + (dx || 0), this.Y(y) + (dy || 0));
    return this;
  };
  Plot.prototype.segment = function (x1, y1, x2, y2, color, width, dash) {
    var c = this.ctx;
    c.strokeStyle = color; c.lineWidth = width || 2; c.setLineDash(dash || []);
    c.beginPath(); c.moveTo(this.X(x1), this.Y(y1)); c.lineTo(this.X(x2), this.Y(y2)); c.stroke();
    c.setLineDash([]);
    return this;
  };
  /* Etikett oben im Diagramm (Lupe) */
  Plot.prototype.badge = function (s, x, color) {
    var c = this.ctx;
    c.font = '700 14px ' + this.C.body;
    var bw = c.measureText(s).width + 20, bx = Math.min(Math.max(this.X(x) - bw / 2, this.pad.l), this.W - this.pad.r - bw);
    c.fillStyle = color; c.beginPath();
    if (c.roundRect) c.roundRect(bx, 4, bw, 26, 8); else c.rect(bx, 4, bw, 26);
    c.fill(); c.fillStyle = '#fff'; c.textAlign = 'left'; c.fillText(s, bx + 10, 22);
    return this;
  };
  /* Zeiger/Touch: liefert Weltkoordinaten; onMove(x,y,ev), onLeave() */
  Plot.prototype.pointer = function (onMove, onLeave) {
    var self = this;
    function h(ev) {
      var r = self.cv.getBoundingClientRect();
      onMove(self.fromX(ev.clientX - r.left), self.fromY(ev.clientY - r.top), ev);
    }
    this.cv.addEventListener('pointerdown', function (ev) { self.cv.setPointerCapture && self.cv.setPointerCapture(ev.pointerId); h(ev); });
    this.cv.addEventListener('pointermove', function (ev) { if (ev.pointerType === 'mouse' || ev.buttons) h(ev); });
    this.cv.addEventListener('pointerleave', function () { if (onLeave) onLeave(); });
    return this;
  };

  /* Auftrag erledigt → Häkchen + Aha zeigen (einmalig) */
  var solved = false;
  function mission(ok) {
    if (!ok || solved) return;
    solved = true;
    var m = $('mission'); if (m) m.classList.add('done');
    showAha(true);
  }
  function showAha(verdient) {
    var box = $('aha'); if (!box) return;
    box.hidden = false;
    box.classList.toggle('verdient', !!verdient);
    requestAnimationFrame(function () { box.classList.add('sichtbar'); });
    var b = $('ahaBtn'); if (b) b.hidden = true;
  }

  /* Trainer: Übungsaufgaben mit Zufallszahlen (Seitentyp „Trainer“, 26.09.2026).
     Aha.Trainer({ el: 'trainer', stufen: ['Berechnen', 'Bestimmen', 'Beurteilen'], neu: function (stufe) { return {
       frage: 'HTML mit $…$', felder: [{ label: '$x =$', ans: 3, tol: 0.01, einheit: 'm' }],
       tipp: 'HTML', weg: 'HTML (Lösungsweg)' }; } })
     Stufen richten sich nach den Operatoren (Anforderungsbereich I/II/III): stufen = drei Operatoren (oder true = nur Sterne).
     Feld: ans als Zahl (Eingabe mit Komma, Bruch a/b erlaubt), als Text (Groß-/Kleinschreibung egal)
     oder Auswahl { label, optionen: ['ja', 'nein'], ans: 0 } — für Beurteilen/Entscheiden. */
  function mathe(el) {
    if (window.renderMathInElement) renderMathInElement(el, { delimiters: [{ left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }], throwOnError: false });
  }
  function zahl(s) {
    s = String(s).trim().replace(/\s/g, '').replace(/−/g, '-').replace(',', '.');
    var m = s.match(/^([+-]?[\d.]+)\/([+-]?[\d.]+)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    return s === '' || isNaN(+s) ? NaN : +s;
  }
  function Trainer(o) {
    var box = typeof o.el === 'string' ? $(o.el) : o.el, stufe = o.start || 1, serie = 0, nr = 0, A, versuche, weggesehen;
    box.classList.add('trainer');
    var ops = Array.isArray(o.stufen) ? o.stufen : ['', '', ''], sterne = ['⭐', '⭐⭐', '⭐⭐⭐'];
    box.innerHTML =
      '<div class="tr-kopf">' + (o.stufen ? '<div class="wahl tr-stufen" role="group" aria-label="Anforderung">' +
        sterne.map(function (st, i) { return '<button type="button" data-s="' + (i + 1) + '">' + st + (ops[i] ? ' ' + ops[i] : '') + '</button>'; }).join('') +
        '</div>' : '<span></span>') +
      '<span class="tr-serie"></span></div>' +
      '<div class="tr-nr"></div><div class="tr-frage"></div><div class="tr-felder"></div>' +
      '<div class="btn-row"><button type="button" class="btn tr-pruefen">Prüfen</button>' +
      '<button type="button" class="btn btn--ghost tr-tipp">Tipp</button>' +
      '<button type="button" class="btn btn--ghost tr-zeigen">Lösungsweg</button>' +
      '<button type="button" class="btn btn--ghost tr-neu">Neue Aufgabe →</button></div>' +
      '<div class="feedback"></div><div class="hint"></div><div class="tr-weg" hidden></div>';
    function q(c) { return box.querySelector(c); }
    function zeigeSerie() { q('.tr-serie').textContent = serie ? serie + ' richtig in Folge' + (serie >= 5 ? ' 🔥' : '') : ''; }
    function neu() {
      A = o.neu(stufe); nr++; versuche = 0; weggesehen = false;
      q('.tr-nr').textContent = 'Aufgabe ' + nr + (o.stufen ? ' · ' + sterne[stufe - 1] + (ops[stufe - 1] ? ' ' + ops[stufe - 1] : '') : '');
      q('.tr-frage').innerHTML = A.frage;
      q('.tr-felder').innerHTML = A.felder.map(function (f, i) {
        if (f.optionen) return '<div class="tr-feld tr-auswahl" data-i="' + i + '">' + (f.label ? '<span>' + f.label + '</span>' : '') +
          '<div class="wahl">' + f.optionen.map(function (t, j) { return '<button type="button" data-j="' + j + '">' + t + '</button>'; }).join('') + '</div></div>';
        return '<label class="tr-feld"><span>' + (f.label || '') + '</span><input class="input quiz-input" data-i="' + i +
          '" inputmode="' + (typeof f.ans === 'number' ? 'decimal' : 'text') + '" autocomplete="off">' +
          (f.einheit ? '<span>' + f.einheit + '</span>' : '') + '</label>';
      }).join('');
      q('.hint').innerHTML = A.tipp || ''; q('.hint').classList.remove('open'); q('.tr-tipp').hidden = !A.tipp;
      q('.tr-weg').innerHTML = A.weg || ''; q('.tr-weg').hidden = true; q('.tr-zeigen').hidden = !A.weg;
      q('.feedback').className = 'feedback';
      mathe(box);
      var inp = box.querySelector('.tr-felder input'); if (inp && o.fokus !== false && nr > 1) inp.focus();
    }
    function pruefen() {
      var alle = true;
      box.querySelectorAll('.tr-auswahl').forEach(function (w) {
        var f = A.felder[+w.dataset.i], a = w.querySelector('button.aktiv'), ok = !!a && +a.dataset.j === f.ans;
        w.querySelectorAll('button').forEach(function (b) { b.classList.remove('ok', 'err'); });
        if (a) a.classList.add(ok ? 'ok' : 'err');
        if (!ok) alle = false;
      });
      box.querySelectorAll('.tr-felder input').forEach(function (inp) {
        var f = A.felder[+inp.dataset.i], ok;
        if (typeof f.ans === 'number') {
          var v = zahl(inp.value), tol = f.tol == null ? 0.01 : f.tol;
          ok = !isNaN(v) && Math.abs(v - f.ans) <= tol * Math.max(1, f.rel ? Math.abs(f.ans) : 1);
        } else ok = inp.value.trim().toLowerCase().replace(/\s+/g, ' ') === String(f.ans).toLowerCase();
        inp.classList.toggle('ok', ok); inp.classList.toggle('err', !ok); if (!ok) alle = false;
      });
      versuche++;
      var fb = q('.feedback');
      fb.className = 'feedback show ' + (alle ? 'ok' : 'err');
      fb.textContent = alle ? (versuche === 1 && !weggesehen ? 'Richtig!' : 'Richtig — jetzt noch eine ohne Hilfe?') : 'Noch nicht. Prüfen Sie Ihre Rechnung oder holen Sie sich einen Tipp.';
      if (alle && versuche === 1 && !weggesehen) serie++;
      else if (!alle) serie = 0;
      zeigeSerie();
    }
    box.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && ev.target.tagName === 'INPUT') pruefen(); });
    q('.tr-pruefen').addEventListener('click', pruefen);
    q('.tr-tipp').addEventListener('click', function () { q('.hint').classList.add('open'); });
    q('.tr-zeigen').addEventListener('click', function () { q('.tr-weg').hidden = false; weggesehen = true; serie = 0; zeigeSerie(); });
    q('.tr-neu').addEventListener('click', neu);
    q('.tr-felder').addEventListener('click', function (ev) {
      var b = ev.target.closest('.tr-auswahl button'); if (!b) return;
      b.parentNode.querySelectorAll('button').forEach(function (c) { c.classList.toggle('aktiv', c === b); c.classList.remove('ok', 'err'); });
    });
    if (o.stufen) box.querySelectorAll('.tr-stufen button').forEach(function (b) {
      b.classList.toggle('aktiv', +b.dataset.s === stufe);
      b.addEventListener('click', function () {
        stufe = +b.dataset.s;
        box.querySelectorAll('.tr-stufen button').forEach(function (c) { c.classList.toggle('aktiv', c === b); });
        neu();
      });
    });
    zeigeSerie(); neu();
    return { neu: neu };
  }
  /* Zufallshilfen für Trainer: ganze Zahl in [a, b] (ohne die Werte in ohne), Element aus Liste */
  function zufall(a, b, ohne) { var z; do { z = a + Math.floor(Math.random() * (b - a + 1)); } while (ohne && ohne.indexOf(z) >= 0); return z; }
  function eins(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

  window.addEventListener('load', function () {
    initTheme();
    var b = $('ahaBtn'); if (b) b.addEventListener('click', function () { showAha(false); });
    window.addEventListener('resize', redrawAll);
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', redrawAll);
  });

  window.Aha = {
    $: $, css: css, de: de, dt: dt, tex: tex, colors: colors, Plot: Plot, mission: mission, showAha: showAha,
    Trainer: Trainer, zufall: zufall, eins: eins, zahl: zahl,
    onRedraw: function (f) { redrawFns.push(f); f(); }
  };
})();
