/* reveal.js — Scroll-Reveal (progressive enhancement).
   Blendet .card/.row-card/.task sowie die Wiki-Bausteine
   (.wiki-entry-text/-visual, .wiki-section) beim Eintritt in den Viewport
   sanft ein (Fade-up, analog zur bestehenden .tab-panel-Animation in
   theme.css). Opacity statt display:none — Canvas-Applets in
   .wiki-entry-visual messen beim Setup dadurch echte Größen.
   Respektiert prefers-reduced-motion zusätzlich per JS-Check: dort werden
   Elemente sofort ohne Bewegung sichtbar, statt nur auf die globale
   CSS-Transition-Verkürzung zu vertrauen.

   Elemente innerhalb eines .tab-panel werden ausgenommen: die sind beim
   Laden per display:none unsichtbar (kein Layout, IntersectionObserver
   feuert daher erst verzögert nach dem Tab-Wechsel) und ihr Erscheinen
   ist ohnehin schon durch die bestehende .tab-panel.active-Animation
   (fade-up, theme.css) abgedeckt — sonst blitzen sie beim Tab-Wechsel
   kurz unsichtbar auf, bevor der Observer reagiert. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = Array.prototype.filter.call(
    document.querySelectorAll('.card, .row-card, .task, .wiki-entry-text, .wiki-entry-visual, .wiki-section'),
    function (el) { return !el.closest('.tab-panel'); }
  );
  if (!els.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('reveal-visible'); });
    return;
  }

  els.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });

  els.forEach(function (el) { io.observe(el); });
})();
