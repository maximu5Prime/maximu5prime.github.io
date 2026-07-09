/* Präsentations-Deck: Tastatur-Navigation für .deck/.slide (siehe slides.css).
   Reiner UI-Zustand (aktive Folie, Zähler, Fortschrittsbalken) — keine
   Abhängigkeit von site.js/plot.js über deren öffentliche Events hinaus. */
(function () {
  var deck = document.querySelector('.deck');
  if (!deck) return;

  var slides = Array.prototype.slice.call(deck.querySelectorAll('.slide'));
  var current = Math.max(0, slides.findIndex(function (s) { return s.classList.contains('active'); }));
  if (current < 0) current = 0;

  var counterEl = document.getElementById('deckCurrent');
  var totalEl = document.getElementById('deckTotal');
  var progressBar = document.getElementById('deckProgressBar');

  if (totalEl) totalEl.textContent = slides.length;

  function render() {
    slides.forEach(function (s, i) { s.classList.toggle('active', i === current); });
    if (counterEl) counterEl.textContent = current + 1;
    if (progressBar) progressBar.style.width = ((current + 1) / slides.length * 100) + '%';
    deck.dispatchEvent(new CustomEvent('slidechange', { detail: { index: current } }));
  }

  function go(i) {
    current = Math.min(slides.length - 1, Math.max(0, i));
    render();
  }

  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        go(current + 1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        go(current - 1);
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(slides.length - 1);
        break;
    }
  });

  render();
})();
