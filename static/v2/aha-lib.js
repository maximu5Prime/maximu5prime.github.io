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

  window.addEventListener('load', function () {
    initTheme();
    var b = $('ahaBtn'); if (b) b.addEventListener('click', function () { showAha(false); });
    window.addEventListener('resize', redrawAll);
    if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', redrawAll);
  });

  window.Aha = {
    $: $, css: css, de: de, dt: dt, tex: tex, colors: colors, Plot: Plot, mission: mission, showAha: showAha,
    onRedraw: function (f) { redrawFns.push(f); f(); }
  };
})();
