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
  btn.innerHTML =
    '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6"/></svg>' +
    '<svg class="i-moon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>';

  function icon() { btn.dataset.icon = effective(); }
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
