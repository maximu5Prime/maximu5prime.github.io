/* reveal.js — Scroll-Reveal (progressive enhancement).
   Blendet .card/.row-card/.task beim Eintritt in den Viewport sanft ein
   (Fade-up, analog zur bestehenden .tab-panel-Animation in theme.css).
   Respektiert prefers-reduced-motion zusätzlich per JS-Check: dort werden
   Elemente sofort ohne Bewegung sichtbar, statt nur auf die globale
   CSS-Transition-Verkürzung zu vertrauen. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.card, .row-card, .task');
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
