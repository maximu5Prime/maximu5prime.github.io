/* site.js — Theme-Toggle (progressive enhancement).
   Wird auf jeder Seite mit `defer` geladen. Injiziert den Toggle-Button,
   schreibt den Override nach localStorage und feuert 'themechange'
   (Canvas-Applets zeichnen darauf neu). Ohne JS folgt die Seite via
   prefers-color-scheme dem System — der FOUC-Einzeiler im <head>
   setzt nur einen ggf. gespeicherten Override. */
(function () {
  'use strict';
  var root = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    return root.dataset.theme || (mq.matches ? 'dark' : 'light');
  }
  function dispatch() {
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: effective() } }));
  }

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Farbschema wechseln');
  btn.title = 'Farbschema wechseln';

  function icon() { btn.textContent = effective() === 'dark' ? '☾' : '☀'; }
  icon();

  btn.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    icon();
    dispatch();
  });
  document.body.appendChild(btn);

  /* Systemwechsel ohne gespeicherten Override → Tokens ändern sich
     per Media-Query, also ebenfalls themechange (für Canvas-Redraw). */
  function onSystemChange() {
    if (!root.dataset.theme) { icon(); dispatch(); }
  }
  if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);
})();
