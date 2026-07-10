/* quiz.js — deklarative Mini-Übungen für Wiki-Theorie-Seiten.
   Scannt beim Laden alle [data-quiz]-Elemente und verdrahtet sie ohne
   seitenspezifisches JS. Drei Typen:

   MCQ (eine richtige Antwort, 0-basierter Index in data-ans):
     <div class="quiz-task" data-quiz="mcq" data-ans="1">
       <p class="quiz-q">Frage …</p>
       <div class="quiz-opts">
         <button class="quiz-opt">A …</button>
         <button class="quiz-opt">B …</button>
       </div>
       <div class="hint" data-quiz-hint>Tipp …</div>   ← optional
     </div>

   Wahr/Falsch-Tabelle (W/F je Zeile, Reihenfolge = <tbody>-Zeilen):
     <div class="quiz-task" data-quiz="ankreuz" data-ans="W,F,W">
       <p class="quiz-q">…</p>
       <table class="ankreuz">
         <thead><tr><th>Aussage</th><th>wahr</th><th>falsch</th></tr></thead>
         <tbody><tr><td>Aussage …</td><td></td><td></td></tr>…</tbody>
       </table>
     </div>
     (Radios in Spalte 2/3 injiziert quiz.js selbst.)

   Zahleneingabe (jedes Input mit data-ans, optional data-tol):
     <div class="quiz-task" data-quiz="fill">
       <p class="quiz-q">…</p>
       <p>$x_1 =$ <input class="input quiz-input" data-ans="3" data-tol="0.01"></p>
     </div>

   Prüfen-/Zurücksetzen-Buttons und .feedback injiziert quiz.js in jede
   Task. KaTeX im Feedback wird gezielt nachgerendert. Kein Score, kein
   Fortschritts-Chrome — bewusst schlank (siehe CLAUDE.md). */
(function () {
  'use strict';

  var seq = 0;

  function renderMath(el) {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  function feedbackEl(task) { return task.querySelector('.feedback'); }

  function showFeedback(task, ok, msg) {
    var fb = feedbackEl(task);
    fb.className = 'feedback show ' + (ok ? 'ok' : 'err');
    fb.innerHTML = msg;
    renderMath(fb);
  }

  function hideFeedback(task) {
    var fb = feedbackEl(task);
    fb.className = 'feedback';
    fb.innerHTML = '';
  }

  /* Prüfen/Zurücksetzen + Feedback + optionalen Tipp-Toggle anhängen. */
  function chrome(task, onCheck, onReset) {
    var row = document.createElement('div');
    row.className = 'btn-row';

    var check = document.createElement('button');
    check.type = 'button';
    check.className = 'btn';
    check.textContent = 'Überprüfen';
    check.addEventListener('click', onCheck);
    row.appendChild(check);

    var reset = document.createElement('button');
    reset.type = 'button';
    reset.className = 'btn btn--ghost';
    reset.textContent = 'Zurücksetzen';
    reset.addEventListener('click', function () {
      hideFeedback(task);
      onReset();
    });
    row.appendChild(reset);

    var hint = task.querySelector('[data-quiz-hint]');
    if (hint) {
      var ht = document.createElement('button');
      ht.type = 'button';
      ht.className = 'btn btn--ghost';
      ht.textContent = 'Tipp';
      ht.addEventListener('click', function () { hint.classList.toggle('open'); });
      row.appendChild(ht);
    }

    var fb = document.createElement('div');
    fb.className = 'feedback';

    task.appendChild(row);
    task.appendChild(fb);
  }

  /* ── MCQ ── */
  function initMcq(task) {
    var ans = parseInt(task.dataset.ans, 10);
    var opts = task.querySelectorAll('.quiz-opt');
    var sel = null;
    Array.prototype.forEach.call(opts, function (btn, i) {
      btn.type = 'button';
      btn.addEventListener('click', function () {
        if (btn.disabled) return;
        sel = i;
        Array.prototype.forEach.call(opts, function (b) { b.classList.remove('correct', 'wrong'); });
        Array.prototype.forEach.call(opts, function (b) { b.style.borderColor = ''; });
        btn.style.borderColor = 'var(--accent)';
      });
    });
    chrome(task, function () {
      if (sel === null) {
        showFeedback(task, false, 'Wähle zuerst eine Antwort aus.');
        return;
      }
      Array.prototype.forEach.call(opts, function (b, i) {
        b.style.borderColor = '';
        b.disabled = true;
        if (i === ans) b.classList.add('correct');
        else if (i === sel) b.classList.add('wrong');
      });
      showFeedback(task, sel === ans,
        sel === ans ? 'Richtig!' : 'Leider falsch — die markierte Antwort ist die richtige.');
    }, function () {
      sel = null;
      Array.prototype.forEach.call(opts, function (b) {
        b.classList.remove('correct', 'wrong');
        b.style.borderColor = '';
        b.disabled = false;
      });
    });
  }

  /* ── Ankreuz (Wahr/Falsch-Tabelle) ── */
  function initAnkreuz(task) {
    var ans = task.dataset.ans.split(',').map(function (s) { return s.trim().toUpperCase(); });
    var rows = task.querySelectorAll('.ankreuz tbody tr');
    var group = 'quiz-ak-' + (++seq);

    Array.prototype.forEach.call(rows, function (tr, r) {
      var cells = tr.querySelectorAll('td');
      /* Radios in Spalte 2 (wahr) und 3 (falsch) injizieren */
      for (var cIdx = 1; cIdx <= 2 && cIdx < cells.length; cIdx++) {
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = group + '-' + r;
        radio.value = cIdx === 1 ? 'W' : 'F';
        cells[cIdx].appendChild(radio);
      }
    });

    chrome(task, function () {
      var all = true, correct = true;
      Array.prototype.forEach.call(rows, function (tr, r) {
        tr.classList.remove('ok-row', 'err-row');
        var sel = tr.querySelector('input:checked');
        if (!sel) { all = false; return; }
        if (sel.value === ans[r]) tr.classList.add('ok-row');
        else { tr.classList.add('err-row'); correct = false; }
      });
      if (!all) {
        Array.prototype.forEach.call(rows, function (tr) { tr.classList.remove('ok-row', 'err-row'); });
        showFeedback(task, false, 'Kreuze zuerst jede Zeile an.');
        return;
      }
      showFeedback(task, correct,
        correct ? 'Alles richtig!' : 'Nicht ganz — die markierten Zeilen stimmen noch nicht.');
    }, function () {
      Array.prototype.forEach.call(rows, function (tr) {
        tr.classList.remove('ok-row', 'err-row');
        Array.prototype.forEach.call(tr.querySelectorAll('input'), function (i) { i.checked = false; });
      });
    });
  }

  /* ── Fill (Zahleneingabe) ── */
  function parseNum(s) {
    s = s.trim().replace(',', '.');
    if (s === '') return NaN;
    return Number(s);
  }

  function initFill(task) {
    var inputs = task.querySelectorAll('input[data-ans]');
    Array.prototype.forEach.call(inputs, function (inp) {
      inp.setAttribute('inputmode', 'decimal');
      inp.setAttribute('autocomplete', 'off');
    });
    chrome(task, function () {
      var all = true, correct = true;
      Array.prototype.forEach.call(inputs, function (inp) {
        inp.classList.remove('ok', 'err');
        var val = parseNum(inp.value);
        if (isNaN(val)) { all = false; return; }
        var want = parseNum(inp.dataset.ans);
        var tol = inp.dataset.tol ? parseFloat(inp.dataset.tol) : 0.001;
        if (Math.abs(val - want) <= tol) inp.classList.add('ok');
        else { inp.classList.add('err'); correct = false; }
      });
      if (!all) {
        Array.prototype.forEach.call(inputs, function (i) { i.classList.remove('ok', 'err'); });
        showFeedback(task, false, 'Fülle zuerst alle Felder aus (Zahl, Komma oder Punkt).');
        return;
      }
      showFeedback(task, correct,
        correct ? 'Richtig gerechnet!' : 'Noch nicht ganz — prüfe die rot markierten Felder.');
    }, function () {
      Array.prototype.forEach.call(inputs, function (i) {
        i.classList.remove('ok', 'err');
        i.value = '';
      });
    });
  }

  function init() {
    var tasks = document.querySelectorAll('[data-quiz]');
    Array.prototype.forEach.call(tasks, function (task) {
      var type = task.dataset.quiz;
      if (type === 'mcq') initMcq(task);
      else if (type === 'ankreuz') initAnkreuz(task);
      else if (type === 'fill') initFill(task);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
