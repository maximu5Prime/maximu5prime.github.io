/* plot.js — gemeinsame Canvas-Primitive für die interaktiven Applets.
   Globales Plot-Objekt (kein Modul). Seiten-spezifische draw*()-Logik
   (Sekanten, Tangenten, Scheitel, …) bleibt auf der jeweiligen Seite.

   WICHTIG: Farben immer ZUR ZEICHENZEIT über Plot.colors() lesen und
   niemals cachen — sonst bleiben nach einem Theme-Wechsel alte Farben
   auf dem Canvas stehen. */
window.Plot = (function () {
  'use strict';

  /* Liest die Plot-Tokens aus theme.css (zur Zeichenzeit!). */
  function colors() {
    var cs = getComputedStyle(document.documentElement);
    function v(name) { return cs.getPropertyValue(name).trim(); }
    return {
      bg:     v('--surface'),
      grid:   v('--plot-grid'),
      axis:   v('--plot-axis'),
      label:  v('--plot-label'),
      curve:  v('--plot-curve'),
      curve2: v('--plot-curve-2'),
      curve3: v('--plot-curve-3'),
      accent: v('--accent'),
      text:   v('--text')
    };
  }

  /* DPR-skaliertes Canvas im Wrapper aufziehen → {ctx, w, h} */
  function setup(canvasId, wrapId) {
    var canvas = document.getElementById(canvasId);
    var wrap = document.getElementById(wrapId);
    var dpr = window.devicePixelRatio || 1;
    var w = wrap.clientWidth, h = wrap.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx: ctx, w: w, h: h };
  }

  /* Hintergrund, Raster, Achsen, Labels. view = {xMin,xMax,yMin,yMax}.
     Rückgabe: Koordinaten-Mapping {toX, toY}. */
  function grid(ctx, w, h, view, opts) {
    opts = opts || {};
    var c = colors();
    var xMin = view.xMin, xMax = view.xMax, yMin = view.yMin, yMax = view.yMax;
    var toX = function (x) { return (x - xMin) / (xMax - xMin) * w; };
    var toY = function (y) { return h - (y - yMin) / (yMax - yMin) * h; };
    var gx, gy;

    ctx.fillStyle = c.bg;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = c.grid;
    ctx.lineWidth = 1;
    for (gx = Math.ceil(xMin); gx <= xMax; gx++) {
      ctx.beginPath(); ctx.moveTo(toX(gx), 0); ctx.lineTo(toX(gx), h); ctx.stroke();
    }
    for (gy = Math.ceil(yMin); gy <= yMax; gy++) {
      ctx.beginPath(); ctx.moveTo(0, toY(gy)); ctx.lineTo(w, toY(gy)); ctx.stroke();
    }

    ctx.strokeStyle = c.axis;
    ctx.lineWidth = 1.5;
    if (yMin <= 0 && 0 <= yMax) { ctx.beginPath(); ctx.moveTo(0, toY(0)); ctx.lineTo(w, toY(0)); ctx.stroke(); }
    if (xMin <= 0 && 0 <= xMax) { ctx.beginPath(); ctx.moveTo(toX(0), 0); ctx.lineTo(toX(0), h); ctx.stroke(); }

    if (opts.labels !== false) {
      ctx.fillStyle = c.label;
      ctx.font = '10px "DM Mono", monospace';
      for (gx = Math.ceil(xMin); gx <= xMax; gx++) {
        if (gx === 0) continue;
        ctx.fillText(gx, toX(gx) + 2, toY(0) + 12);
      }
      for (gy = Math.ceil(yMin); gy <= yMax; gy++) {
        if (gy === 0) continue;
        ctx.fillText(gy, toX(0) + 3, toY(gy) - 2);
      }
    }
    return { toX: toX, toY: toY };
  }

  /* Funktionsgraph zeichnen. opts: {color, width, dash, samples} */
  function curve(ctx, fn, map, view, opts) {
    opts = opts || {};
    var n = opts.samples || 800;
    ctx.strokeStyle = opts.color || colors().curve;
    ctx.lineWidth = opts.width || 2.5;
    ctx.setLineDash(opts.dash || []);
    ctx.beginPath();
    var first = true;
    for (var i = 0; i <= n; i++) {
      var x = view.xMin + (view.xMax - view.xMin) * i / n;
      var y;
      try { y = fn(x); } catch (e) { first = true; continue; }
      if (!isFinite(y) || Math.abs(y) > 1e4) { first = true; continue; }
      if (first) { ctx.moveTo(map.toX(x), map.toY(y)); first = false; }
      else { ctx.lineTo(map.toX(x), map.toY(y)); }
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  /* Markierungspunkt, optional mit Label. opts: {color, r, label} */
  function dot(ctx, map, x, y, opts) {
    opts = opts || {};
    var color = opts.color || colors().curve2;
    ctx.beginPath();
    ctx.arc(map.toX(x), map.toY(y), opts.r || 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    if (opts.label) {
      ctx.font = 'bold 12px "DM Mono", monospace';
      ctx.fillStyle = color;
      ctx.fillText(opts.label, map.toX(x) + 7, map.toY(y) - 6);
    }
  }

  /* Redraw-Registry: window.resize (debounced), themechange, beforeprint. */
  var redrawFns = [];
  var resizeTimer = null;
  function runRedraw() {
    for (var i = 0; i < redrawFns.length; i++) redrawFns[i]();
  }
  function onRedraw(fn) { redrawFns.push(fn); }

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(runRedraw, 120);
  });
  window.addEventListener('themechange', runRedraw);
  window.addEventListener('beforeprint', runRedraw);

  return {
    setup: setup,
    grid: grid,
    curve: curve,
    dot: dot,
    colors: colors,
    onRedraw: onRedraw,
    redraw: runRedraw
  };
})();
