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

  /* Theme-Umschalter: data-theme auf <html>, Schlüssel 'theme' wie auf der alten Seite. Symbol (26.10.2026) als SVG,
     geometrisch auf die Kreismitte gesetzt: im hellen Modus Mond (→ dunkel), im dunklen Sonne (→ hell). */
  var MOND = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.6A8.5 8.5 0 1 1 9.4 4a6.6 6.6 0 0 0 10.6 10.6z" fill="currentColor"/></svg>';
  var SONNE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    [0, 45, 90, 135, 180, 225, 270, 315].map(function (w) { return '<line x1="12" y1="2.6" x2="12" y2="4.6" transform="rotate(' + w + ' 12 12)"/>'; }).join('') + '</g></svg>';
  function dunkel() {
    var t = document.documentElement.dataset.theme;
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function initTheme() {
    var b = $('themeBtn');
    if (!b) return;
    function symbol() {
      b.innerHTML = dunkel() ? SONNE : MOND;
      b.setAttribute('aria-label', dunkel() ? 'Hell schalten' : 'Dunkel schalten');
    }
    symbol();
    b.addEventListener('click', function () {
      var root = document.documentElement;
      root.dataset.theme = dunkel() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (err) {}
      symbol();
      redrawAll();
    });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', symbol);
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

  /* Trainer: Übungsaufgaben mit Zufallszahlen (Seitentyp „Trainer“, 26.09.2026, überarbeitet am selben Tag).
     Aha.Trainer({ el: 'trainer', stufen: ['Berechnen', 'Bestimmen', 'Beurteilen'], neu: function (stufe) { return {
       operator: 'Bestimmen Sie',            // steht im Aufgabenkopf (sonst der Name der Stufe)
       frage: 'HTML mit $…$', felder: [ … ], tipp: 'HTML', weg: 'HTML (Lösungsweg)' }; } })
     Die Stufen richten sich nach den Operatoren (AFB I/II/III) — und jeder Operator hat seine Antwortform:
       { typ: 'zahl', label, ans: 3, tol: 0.01, einheit }        Berechnen, Angeben (Komma und Bruch a/b erlaubt)
       { typ: 'term', label, ans: function (x) { … } }            Bestimmen (Term, jede gleichwertige Form zählt)
       { typ: 'wahl', label, optionen: [..], ans: 0, warum: [..] } Entscheiden, Beurteilen (warum[j] = Rückmeldung zur Wahl j)
       { typ: 'reihenfolge', label, schritte: [..richtige Reihenfolge..] }   Erläutern, Vorgehen beschreiben
       { typ: 'zeilen', label, zeilen: [..], ans: 2, warum }       Fehler finden (fehlerhafte Zeile antippen)
     Ohne typ: optionen → wahl, Funktion → term, Zahl → zahl, sonst Text. */
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
  /* Term in x lesen: + − · / ^, Klammern, Dezimalkomma, weggelassenes Malzeichen (3x, 2(x+1), x(x-1)).
     Ein Vorspann wie „f'(x) =“ oder „y =“ wird ignoriert. Liefert eine Funktion oder null. */
  function term(s) {
    s = String(s).toLowerCase().replace(/\s/g, '').replace(/−/g, '-').replace(/[·×]/g, '*').replace(/,/g, '.').replace(/²/g, '^2').replace(/³/g, '^3').replace(/⁴/g, '^4');
    s = s.replace(/^[a-z]+'*(_?[a-z0-9]+)?\(x\)=/, '').replace(/^y=/, '');
    if (!s || !/^[0-9x+\-*/^().]+$/.test(s)) return null;
    var i = 0;
    function peek() { return s[i]; }
    function expr() { var v = prod(); while (peek() === '+' || peek() === '-') { var op = s[i++], r = prod(); v = op === '+' ? add(v, r) : sub(v, r); } return v; }
    function prod() {
      var v = unary();
      for (;;) {
        var c = peek();
        if (c === '*' || c === '/') { i++; var r = unary(); v = c === '*' ? mul(v, r) : dvd(v, r); }
        else if (c === 'x' || c === '(' || (c && /[0-9.]/.test(c) && /[x)]/.test(s[i - 1]))) v = mul(v, pow());
        else return v;
      }
    }
    function unary() { if (peek() === '-') { i++; return neg(unary()); } if (peek() === '+') { i++; return unary(); } return pow(); }
    function pow() { var b = atom(); if (peek() === '^') { i++; var e = unary(); return pw(b, e); } return b; }
    function atom() {
      var c = peek();
      if (c === '(') { i++; var v = expr(); if (s[i++] !== ')') throw 0; return v; }
      if (c === 'x') { i++; return function (x) { return x; }; }
      var m = s.slice(i).match(/^\d*\.?\d+/); if (!m) throw 0;
      i += m[0].length; var n = +m[0]; return function () { return n; };
    }
    function add(f, g) { return function (x) { return f(x) + g(x); }; }
    function sub(f, g) { return function (x) { return f(x) - g(x); }; }
    function mul(f, g) { return function (x) { return f(x) * g(x); }; }
    function dvd(f, g) { return function (x) { return f(x) / g(x); }; }
    function neg(f) { return function (x) { return -f(x); }; }
    function pw(f, g) { return function (x) { return Math.pow(f(x), g(x)); }; }
    try { var f = expr(); return i === s.length ? f : null; } catch (e) { return null; }
  }
  function gleich(f, g) {
    return [-2.3, -1.1, 0.4, 1.7, 2.9].every(function (x) {
      var a = f(x), b = g(x); return isFinite(a) && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b));
    });
  }
  function mischen(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function typVon(f) { return f.typ || (f.optionen ? 'wahl' : typeof f.ans === 'function' ? 'term' : typeof f.ans === 'number' ? 'zahl' : 'text'); }

  function Trainer(o) {
    var box = typeof o.el === 'string' ? $(o.el) : o.el, stufe = o.start || 1, serie = 0, nr = 0, A, versuche, weggesehen,
      eingabe, hilfe;   // eingabe: Aufgabe hat Textfelder (sonst prüft Antippen sofort); hilfe: 0 nichts, 1 Tipp, 2 Lösungsweg gezeigt
    box.classList.add('trainer');
    var ops = Array.isArray(o.stufen) ? o.stufen : ['', '', ''], sterne = ['⭐', '⭐⭐', '⭐⭐⭐'];
    // Bedienung wie Aha.Stufen (13.10.2026): schmale Stufenleiste, EIN Hauptknopf (Prüfen bzw. nach richtiger Antwort Weiter),
    // Hilfe und Andere Aufgabe als leise Links.
    box.innerHTML =
      '<div class="tr-kopf">' + (o.stufen ? '<div class="st-leiste tr-stufen" role="group" aria-label="Stufe">' +
        sterne.map(function (st, i) { return '<button type="button" data-s="' + (i + 1) + '" title="' + (ops[i] || '') + '">' + st + '</button>'; }).join('') +
        '</div>' : '<span></span>') +
      '<span class="tr-serie"></span></div>' +
      '<div class="tr-nr"></div><div class="tr-frage"></div><div class="tr-felder"></div>' +
      '<div class="feedback"></div><div class="hint"></div><div class="tr-weg" hidden></div>' +
      '<div class="tr-aktion"><button type="button" class="btn tr-pruefen">Prüfen</button>' +
      '<button type="button" class="btn tr-weiter" hidden>Weiter →</button>' +
      '<button type="button" class="tr-link tr-hilfe">Hilfe</button>' +
      '<button type="button" class="tr-link tr-neu">Andere Aufgabe</button></div>';
    function q(c) { return box.querySelector(c); }
    function zeigeSerie() { q('.tr-serie').textContent = serie ? serie + ' richtig in Folge' + (serie >= 5 ? ' 🔥' : '') : ''; }
    function feld(f, i) {
      var t = typVon(f), kopf = f.label ? '<span class="tr-label">' + f.label + '</span>' : '';
      if (t === 'wahl') {
        // ab drei Optionen gemischt (sonst stünde die richtige oft vorne); Paare wie richtig/falsch bleiben; f.fest erzwingt Reihenfolge
        var idx = f.optionen.map(function (x, j) { return j; });
        if (f.optionen.length >= 3 && !f.fest) idx = mischen(idx);
        var lang = f.optionen.some(function (x) { return String(x).replace(/<[^>]*>|\$[^$]*\$/g, 'xx').length > 18; });
        return '<div class="tr-feld tr-block" data-i="' + i + '" data-typ="wahl">' + kopf +
          '<div class="wahl' + (lang ? ' liste' : '') + '">' + idx.map(function (j) { return '<button type="button" data-j="' + j + '">' + f.optionen[j] + '</button>'; }).join('') + '</div></div>';
      }
      if (t === 'reihenfolge') {
        f._mix = mischen(f.schritte.map(function (x, j) { return j; }));
        return '<div class="tr-feld tr-block" data-i="' + i + '" data-typ="reihenfolge">' + (kopf || '<span class="tr-label">Tippen Sie die Schritte in der richtigen Reihenfolge an.</span>') +
          '<div class="tr-reihe">' + f._mix.map(function (j) { return '<button type="button" data-j="' + j + '"><span class="tr-platz"></span><span class="tr-text">' + f.schritte[j] + '</span></button>'; }).join('') +
          '</div><button type="button" class="tr-zurueck">Reihenfolge löschen</button></div>';
      }
      if (t === 'zeilen') return '<div class="tr-feld tr-block" data-i="' + i + '" data-typ="zeilen">' + (kopf || '<span class="tr-label">Tippen Sie die Zeile mit dem Fehler an.</span>') +
        '<ol class="tr-zeilen">' + f.zeilen.map(function (x, j) { return '<li><button type="button" data-j="' + j + '"><span class="tr-text">' + x + '</span></button></li>'; }).join('') + '</ol></div>';
      return '<label class="tr-feld' + (t === 'term' ? ' tr-term' : '') + '">' + kopf + '<input class="input quiz-input" data-i="' + i +
        '" inputmode="' + (t === 'zahl' ? 'decimal' : 'text') + '" autocomplete="off" autocapitalize="off" spellcheck="false"' +
        (t === 'term' ? ' placeholder="z. B. 3x^2 - 6x"' : '') + '>' + (f.einheit ? '<span>' + f.einheit + '</span>' : '') + '</label>';
    }
    function neu() {
      A = o.neu(stufe); nr++; versuche = 0; weggesehen = false;
      q('.tr-nr').textContent = A.operator || ops[stufe - 1] || '';
      q('.tr-weiter').hidden = true; q('.tr-neu').hidden = false;
      q('.tr-frage').innerHTML = A.frage;
      q('.tr-felder').innerHTML = A.felder.map(feld).join('');
      q('.hint').innerHTML = A.tipp || ''; q('.hint').classList.remove('open');
      q('.tr-weg').innerHTML = A.weg || ''; q('.tr-weg').hidden = true;
      // Weniger Knöpfe (Lehrkraft, 12.10.2026, Handy): Auswahl prüft sich beim Antippen selbst, „Prüfen“ nur bei Eingabefeldern;
      // Tipp und Lösungsweg teilen sich einen Knopf „Hilfe“ (1. Druck Tipp, 2. Druck Lösungsweg).
      eingabe = A.felder.some(function (f) { var t = typVon(f); return t !== 'wahl' && t !== 'reihenfolge' && t !== 'zeilen'; });
      q('.tr-pruefen').hidden = !eingabe;
      hilfe = A.tipp ? 0 : 1;
      q('.tr-hilfe').textContent = A.tipp ? 'Hilfe' : 'Lösungsweg'; q('.tr-hilfe').hidden = !A.tipp && !A.weg;
      box.querySelectorAll('.tr-felder button, .tr-felder input').forEach(function (x) { x.disabled = false; });
      q('.feedback').className = 'feedback';
      mathe(box);
      var inp = box.querySelector('.tr-felder input'); if (inp && o.fokus !== false && nr > 1) inp.focus();
    }
    function pruefen() {
      var alle = true, hinweise = [];
      box.querySelectorAll('.tr-block').forEach(function (w) {
        var f = A.felder[+w.dataset.i], typ = w.dataset.typ, ok;
        if (typ === 'reihenfolge') {
          var folge = Array.prototype.map.call(w.querySelectorAll('.tr-reihe button.aktiv'), function (b) { return b; })
            .sort(function (a, b) { return a.dataset.n - b.dataset.n; }).map(function (b) { return +b.dataset.j; });
          ok = folge.length === f.schritte.length && folge.every(function (j, k) { return j === k; });
          w.querySelectorAll('.tr-reihe button').forEach(function (b) {
            b.classList.remove('ok', 'err');
            if (b.dataset.n) b.classList.add(+b.dataset.j === +b.dataset.n - 1 ? 'ok' : 'err');
          });
          if (!ok) hinweise.push(folge.length < f.schritte.length ? 'Ordnen Sie alle Schritte an.' : 'Grün steht schon richtig, rot noch nicht.');
        } else {
          var a = w.querySelector('button.aktiv');
          ok = !!a && +a.dataset.j === f.ans;
          w.querySelectorAll('button').forEach(function (b) { b.classList.remove('ok', 'err'); });
          if (a) a.classList.add(ok ? 'ok' : 'err');
          if (!a) hinweise.push('Treffen Sie eine Auswahl.');
          else if (!ok && Array.isArray(f.warum) && f.warum[+a.dataset.j]) hinweise.push(f.warum[+a.dataset.j]);
          else if (!ok && typeof f.warum === 'string') hinweise.push(f.warum);
        }
        if (!ok) alle = false;
      });
      box.querySelectorAll('.tr-felder input').forEach(function (inp) {
        var f = A.felder[+inp.dataset.i], t = typVon(f), ok;
        if (t === 'zahl') {
          var v = zahl(inp.value), tol = f.tol == null ? 0.01 : f.tol;
          ok = !isNaN(v) && Math.abs(v - f.ans) <= tol * Math.max(1, f.rel ? Math.abs(f.ans) : 1);
        } else if (t === 'term') {
          var g = term(inp.value);
          ok = !!g && gleich(g, f.ans);
          if (!g && inp.value.trim()) hinweise.push('Den Term „' + inp.value.trim() + '“ kann ich nicht lesen. Schreiben Sie z. B. 3x^2 - 6x + 2.');
        } else ok = inp.value.trim().toLowerCase().replace(/\s+/g, ' ') === String(f.ans).toLowerCase();
        inp.classList.toggle('ok', ok); inp.classList.toggle('err', !ok); if (!ok) alle = false;
      });
      versuche++;
      var fb = q('.feedback');
      fb.className = 'feedback show ' + (alle ? 'ok' : 'err');
      fb.innerHTML = alle ? (versuche === 1 && !weggesehen ? 'Richtig!' : 'Richtig — jetzt noch eine ohne Hilfe?')
        : (hinweise.length ? hinweise.join(' ') : 'Noch nicht. Prüfen Sie Ihre Rechnung oder holen Sie sich einen Tipp.');
      mathe(fb);
      if (alle) {   // gelöst: nur noch „Weiter →“
        q('.tr-pruefen').hidden = true; q('.tr-hilfe').hidden = true; q('.tr-neu').hidden = true;
        q('.tr-weiter').hidden = false; q('.tr-weiter').focus({ preventScroll: true });
        box.querySelectorAll('.tr-felder button, .tr-felder input').forEach(function (x) { x.disabled = true; });
      }
      if (alle && versuche === 1 && !weggesehen) serie++;
      else if (!alle) serie = 0;
      zeigeSerie();
    }
    box.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' && ev.target.tagName === 'INPUT') { if (!q('.tr-weiter').hidden) neu(); else pruefen(); }
    });
    q('.tr-pruefen').addEventListener('click', pruefen);
    q('.tr-hilfe').addEventListener('click', function () {
      if (hilfe === 0) { q('.hint').classList.add('open'); hilfe = 1; q('.tr-hilfe').textContent = 'Lösungsweg'; q('.tr-hilfe').hidden = !A.weg; return; }
      q('.tr-weg').hidden = false; weggesehen = true; serie = 0; zeigeSerie(); q('.tr-hilfe').hidden = true; hilfe = 2;
    });
    function vollstaendig() {   // alle Auswahl-Felder beantwortet?
      return Array.prototype.every.call(box.querySelectorAll('.tr-block'), function (w) {
        if (w.dataset.typ === 'reihenfolge') return !w.querySelector('.tr-reihe button:not(.aktiv)');
        return !!w.querySelector('button.aktiv');
      });
    }
    q('.tr-neu').addEventListener('click', neu);
    q('.tr-weiter').addEventListener('click', neu);
    q('.tr-felder').addEventListener('click', function (ev) {
      var w = ev.target.closest('.tr-block'); if (!w) return;
      if (w.dataset.typ === 'reihenfolge') {
        if (ev.target.closest('.tr-zurueck')) {
          w.querySelectorAll('.tr-reihe button').forEach(function (b) { b.classList.remove('aktiv', 'ok', 'err'); delete b.dataset.n; b.querySelector('.tr-platz').textContent = ''; });
          return;
        }
        var b = ev.target.closest('.tr-reihe button'); if (!b || b.classList.contains('aktiv')) return;
        var n = w.querySelectorAll('.tr-reihe button.aktiv').length + 1;
        b.classList.add('aktiv'); b.dataset.n = n; b.querySelector('.tr-platz').textContent = n;
        if (!eingabe && vollstaendig()) pruefen();
        return;
      }
      var c = ev.target.closest('button[data-j]'); if (!c) return;
      w.querySelectorAll('button[data-j]').forEach(function (x) { x.classList.toggle('aktiv', x === c); x.classList.remove('ok', 'err'); });
      if (!eingabe && vollstaendig()) pruefen();
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
  /* Üben in drei Stufen (Pilot 13.10.2026, /m11/funktionsbegriff/): EIN Aufgabentyp (Auswahl), Stufe 2 erscheint erst,
     wenn Stufe 1 gelöst ist. Antippen prüft sofort; falsche Wahl → Rückmeldung warum[j], nochmal tippen.
     Einziger Knopf: „Weiter“ nach richtiger Antwort. Je Stufe eine Liste von Varianten, gezogen wird zufällig.
     Aha.Stufen({ el: 'ueben', operatoren: ['Geben Sie an', 'Bestimmen Sie', 'Beurteilen Sie'],
       stufen: [ [ { frage, optionen: [..], ans: 0, warum: [..] }, … ], [ … ], [ … ] ] }) */
  function Stufen(o) {
    var box = typeof o.el === 'string' ? $(o.el) : o.el, sterne = ['⭐', '⭐⭐', '⭐⭐⭐'], s, A;
    box.classList.add('stufen');
    function q(c) { return box.querySelector(c); }
    function leiste() {
      return '<div class="st-leiste">' + sterne.map(function (st, i) {
        return '<span class="' + (i < s ? 'fertig' : i === s ? 'aktiv' : '') + '">' + (i < s ? '✓ ' : '') + st + '</span>';
      }).join('') + '</div>';
    }
    function zeige() {
      A = eins(o.stufen[s]);
      var mix = mischen(A.optionen.map(function (x, j) { return j; }));
      box.innerHTML = leiste() +
        '<p class="st-frage">' + (o.operatoren ? '<b>' + o.operatoren[s] + ':</b> ' : '') + A.frage + '</p>' +
        '<div class="st-opts">' + mix.map(function (j) { return '<button type="button" data-j="' + j + '">' + A.optionen[j] + '</button>'; }).join('') + '</div>' +
        '<p class="st-rm" aria-live="polite"></p>' +
        '<button type="button" class="btn st-weiter" hidden>' + (s < 2 ? 'Weiter zu ' + sterne[s + 1] + ' →' : 'Fertig ✓') + '</button>';
      mathe(box);
    }
    function ende() {
      s = 3;
      box.innerHTML = leiste() + '<p class="st-ende">Alle drei Stufen geschafft.</p>' +
        '<button type="button" class="st-nochmal">Noch eine Runde</button>';
    }
    box.addEventListener('click', function (ev) {
      if (ev.target.closest('.st-nochmal')) { s = 0; zeige(); return; }
      if (ev.target.closest('.st-weiter')) { if (s < 2) { s++; zeige(); } else ende(); return; }
      var b = ev.target.closest('.st-opts button'); if (!b || b.disabled) return;
      var j = +b.dataset.j, ok = j === A.ans, rm = q('.st-rm');
      b.classList.add(ok ? 'ok' : 'err'); b.disabled = true;
      if (ok) {
        box.querySelectorAll('.st-opts button').forEach(function (x) { x.disabled = true; });
        rm.className = 'st-rm ok'; rm.innerHTML = 'Richtig.' + (A.erklaerung ? ' ' + A.erklaerung : '');
        q('.st-weiter').hidden = false;
      } else {
        rm.className = 'st-rm err'; rm.innerHTML = (A.warum && A.warum[j]) || 'Noch nicht — versuchen Sie es noch einmal.';
      }
      mathe(rm);
    });
    s = 0; zeige();
  }

  /* Videos (13.10.2026): <div class="videos"><figure class="video" id="…" data-titel="Kurzname">…</figure>…</div>
     Mehrere Videos → EIN Player-Platz mit Kapitel-Chips darüber (Seite bleibt so hoch wie mit einem Video).
     Sprungmarke (#id, auch aus QR-Codes) öffnet das passende Kapitel. Gesehen (bis zum Ende) → ✓ am Chip;
     alle gesehen → Aha.mission(true). Läuft automatisch beim Laden für jedes .videos. */
  function Videos(box) {
    var figs = Array.prototype.slice.call(box.querySelectorAll('figure.video')), gesehen = figs.map(function () { return false; }), chips;
    function zeige(i) {
      figs.forEach(function (f, k) {
        if (k !== i) { var v = f.querySelector('video'); if (v && !v.paused) v.pause(); }
        f.hidden = k !== i;
      });
      if (chips) Array.prototype.forEach.call(chips.children, function (b, k) { b.classList.toggle('aktiv', k === i); });
    }
    if (figs.length > 1) {
      chips = document.createElement('div'); chips.className = 'wahl kapitel'; chips.setAttribute('role', 'tablist');
      figs.forEach(function (f, i) {
        var b = document.createElement('button'); b.type = 'button';
        b.textContent = (i + 1) + ' ' + (f.dataset.titel || 'Video');
        b.addEventListener('click', function () { zeige(i); });
        chips.appendChild(b);
      });
      box.insertBefore(chips, box.firstChild);
    }
    figs.forEach(function (f, i) {
      var v = f.querySelector('video'); if (!v) return;
      v.addEventListener('ended', function () {
        gesehen[i] = true;
        if (chips) chips.children[i].classList.add('ok');
        if (gesehen.every(Boolean)) mission(true);
      });
    });
    function ausHash() {
      var id = location.hash.slice(1), i = figs.findIndex(function (f) { return f.id === id; });
      if (i >= 0) { zeige(i); box.scrollIntoView(); return true; }
      return false;
    }
    if (!ausHash()) zeige(0);
    window.addEventListener('hashchange', ausHash);
  }

  /* Kacheln (Kanban #19, 26.10.2026): <div class="duo"> mit .stage (Applet) und .kachel-video. Damit beide in der
     Vorschau gleich groß sind, startet das Applet eingeklappt: nur Graph bzw. SVG-Bühne (16:9, wie das Video) und Auftrag, darüber
     „▶ Ausprobieren“. Antippen klappt es auf; offen nimmt es die ganze Breite, das Video rutscht darunter. */
  function Duo(duo) {
    var st = duo.querySelector(':scope > .stage'), plot = st && st.querySelector(':scope > .plot, :scope > svg.labor');
    if (!plot || !duo.querySelector(':scope > .kachel-video')) return;
    if (plot.tagName !== 'DIV') {                    // SVG-Bühne (KIT11 Kraft-Labor): Hülle für den Knopf
      var huelle = document.createElement('div');
      plot.parentNode.insertBefore(huelle, plot); huelle.appendChild(plot); plot = huelle;
    }
    plot.classList.add('vorschau');
    st.classList.add('zu');
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'vorschau-knopf'; b.innerHTML = '<span>▶ Ausprobieren</span>';
    plot.appendChild(b);
    b.addEventListener('click', function () {
      st.classList.remove('zu'); st.classList.add('offen'); b.remove();
      redrawAll();
      st.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }

  /* Zufallshilfen für Trainer: ganze Zahl in [a, b] (ohne die Werte in ohne), Element aus Liste */
  function zufall(a, b, ohne) { var z; do { z = a + Math.floor(Math.random() * (b - a + 1)); } while (ohne && ohne.indexOf(z) >= 0); return z; }
  function eins(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

  /* PWA (13.10.2026): Service Worker /sw.js anmelden — nicht bei lokaler Vorschau (sonst zeigt http.server alte
     Fassungen), außer localStorage 'pwa-test' = '1'. Videos speichert nur der Knopf „offline speichern“ unter jeder
     Video-Gruppe (.videos bzw. einzelnes figure.video) im Cache „videos“; sw.js spielt sie von dort ab. */
  function initPWA() {
    if (!('serviceWorker' in navigator) || !window.caches) return;
    var lokal = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
    try { if (localStorage.getItem('pwa-test') === '1') lokal = false; } catch (e) {}
    if (lokal) return;
    navigator.serviceWorker.register('/sw.js');
    var gruppen = Array.prototype.slice.call(document.querySelectorAll('.videos'));
    document.querySelectorAll('figure.video').forEach(function (f) { if (!f.closest('.videos')) gruppen.push(f); });
    gruppen.forEach(OfflineVideos);
  }
  function mb(n) { return de(n / 1048576, n < 10485760 ? 1 : 0) + ' MB'; }
  function OfflineVideos(gruppe) {
    var urls = [];
    gruppe.querySelectorAll('video source[src], video[src]').forEach(function (el) {
      var u = new URL(el.getAttribute('src'), location.href).href;
      if (/\.mp4$/.test(u) && urls.indexOf(u) < 0) urls.push(u);
    });
    if (!urls.length) return;
    var p = document.createElement('p'); p.className = 'offline-videos';
    var b = document.createElement('button'); b.type = 'button';
    var info = document.createElement('span');
    p.appendChild(b); p.appendChild(info);
    gruppe.parentNode.insertBefore(p, gruppe.nextSibling);
    var name = urls.length > 1 ? 'Videos' : 'Video', groessen = {}, laeuft = false;
    function cache() { return caches.open('videos'); }
    function zustand() {   // gespeichert? Fassung im Netz anders groß → neu speichern anbieten
      return cache().then(function (c) { return Promise.all(urls.map(function (u) { return c.match(u); })); }).then(function (rs) {
        var alle = rs.every(Boolean), summe = 0, alt = false;
        urls.forEach(function (u, i) {
          summe += groessen[u] || 0;
          if (rs[i] && groessen[u] && +rs[i].headers.get('Content-Length') !== groessen[u]) alt = true;
        });
        var gr = summe ? ' (' + mb(summe) + ')' : '';
        if (alle && !alt) { b.textContent = 'Entfernen'; info.textContent = '✓ ' + name + ' offline gespeichert · '; p.insertBefore(info, b); b.onclick = entfernen; }
        else { b.textContent = (alt ? 'Neue Fassung offline speichern' : name + ' offline speichern') + gr; info.textContent = ''; b.onclick = speichern; }
      });
    }
    function speichern() {
      if (laeuft) return; laeuft = true; b.disabled = true;
      if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
      var gesamt = urls.reduce(function (s, u) { return s + (groessen[u] || 0); }, 0), geladen = 0;
      function zeige() { b.textContent = 'Wird gespeichert … ' + (gesamt ? mb(geladen) + ' von ' + mb(gesamt) : mb(geladen)); }
      zeige();
      urls.reduce(function (kette, u) {
        return kette.then(function () {
          return fetch(u + '?neu=' + Date.now(), { cache: 'no-store' }).then(function (r) {   // ?neu → sw.js reicht durch
            if (!r.ok || !r.body) throw new Error(r.status);
            var teile = [], leser = r.body.getReader();
            function lies() {
              return leser.read().then(function (x) {
                if (x.done) return;
                teile.push(x.value); geladen += x.value.length; zeige(); return lies();
              });
            }
            return lies().then(function () {
              var blob = new Blob(teile, { type: 'video/mp4' });
              return cache().then(function (c) {
                return c.put(u, new Response(blob, { headers: { 'Content-Type': 'video/mp4', 'Content-Length': String(blob.size) } }));
              });
            });
          });
        });
      }, Promise.resolve()).then(function () { laeuft = false; b.disabled = false; return zustand(); }, function () {
        laeuft = false; b.disabled = false; b.textContent = name + ' offline speichern';
        info.textContent = ' — hat nicht geklappt (Verbindung oder Speicherplatz prüfen)';
      });
    }
    function entfernen() {
      cache().then(function (c) { return Promise.all(urls.map(function (u) { return c.delete(u); })); }).then(zustand);
    }
    Promise.all(urls.map(function (u) {
      return fetch(u, { method: 'HEAD', cache: 'no-store' }).then(function (r) {
        var n = +r.headers.get('Content-Length'); if (r.ok && n) groessen[u] = n;
      }).catch(function () {});
    })).then(zustand);
  }

  window.addEventListener('load', function () {
    initTheme();
    initPWA();
    var b = $('ahaBtn'); if (b) b.addEventListener('click', function () { showAha(false); });
    document.querySelectorAll('.duo').forEach(Duo);
    document.querySelectorAll('.videos').forEach(Videos);
    // Sprungmarke auf ein <details id> (Übungsseite #thema) klappt es auf
    var ziel = location.hash && document.getElementById(location.hash.slice(1));
    if (ziel && ziel.tagName === 'DETAILS') { ziel.open = true; ziel.scrollIntoView(); }
    window.addEventListener('resize', redrawAll);
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', redrawAll);
  });

  window.Aha = {
    $: $, css: css, de: de, dt: dt, tex: tex, colors: colors, Plot: Plot, mission: mission, showAha: showAha,
    Trainer: Trainer, Stufen: Stufen, zufall: zufall, eins: eins, zahl: zahl, term: term, mischen: mischen,
    onRedraw: function (f) { redrawFns.push(f); f(); }
  };
})();
