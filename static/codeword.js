/* codeword.js — Codewort-Logik für die Kombinatorik-Team-Challenge
   (lb6-kombinatorik/team-challenge.html + codewort.html + ueberraschung.html).

   Jedes Gerät/Team erhält beim ersten Aufruf zufällig eines von 5 gültigen
   Codewörtern (localStorage, einmalig persistiert) — verhindert simples
   Weitersagen der einen Lösung durch die Klasse. Fortschritt (welche der
   5 Themen-Blöcke bereits gelöst sind) wird getrennt davon gespeichert,
   einweg/idempotent: einmal freigeschaltete Buchstaben bleiben es auch
   nach erneutem Lösen/Zurücksetzen einzelner Quiz-Aufgaben.

   Da die Website rein statisch ist (kein Backend, kein geräteübergreifender
   Zustand), erzwingt die Sammelseite die Zusammenarbeit der Klasse nicht
   über einen Server, sondern indem sie ALLE 5 gültigen Wörter verlangt,
   bevor sie freischaltet — die Teams müssen sich ihr jeweils gefundenes
   Wort also gegenseitig verraten (mündlich im Unterricht) und gemeinsam
   auf einem Gerät (oder jede*r auf dem eigenen) alle 5 eintragen.

   Alle Storage-Zugriffe try/catch-gekapselt (Private Mode/deaktiviertes
   Storage darf nichts zum Absturz bringen — gleiches Muster wie site.js). */
window.Codeword = (function () {
  'use strict';

  var WORDS = ['LOTTO', 'BINGO', 'BINOM', 'URNEN', 'JOKER'];
  var SECTIONS = ['zaehlprinzip', 'permutation', 'variation-ohne', 'variation-mit', 'kombination-ohne'];

  var WORD_KEY = 'kombi_codeword_word';
  var PROGRESS_KEY = 'kombi_codeword_progress';
  var COLLECTED_KEY = 'kombi_codeword_collected';
  var UNLOCK_KEY = 'kombi_codeword_unlocked';

  var memWord = null;
  var memProgress = null;
  var memCollected = null;

  function readLS(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function writeLS(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  function getWord() {
    if (memWord) return memWord;
    var w = readLS(WORD_KEY);
    if (WORDS.indexOf(w) === -1) {
      w = WORDS[Math.floor(Math.random() * WORDS.length)];
      writeLS(WORD_KEY, w);
    }
    memWord = w;
    return w;
  }

  function getProgress() {
    if (memProgress) return memProgress;
    var p = {};
    try { p = JSON.parse(readLS(PROGRESS_KEY)) || {}; } catch (e) { p = {}; }
    SECTIONS.forEach(function (id) { if (typeof p[id] !== 'boolean') p[id] = false; });
    memProgress = p;
    return p;
  }

  function saveProgress(p) {
    memProgress = p;
    writeLS(PROGRESS_KEY, JSON.stringify(p));
  }

  function markSolved(id) {
    var p = getProgress();
    if (SECTIONS.indexOf(id) !== -1) { p[id] = true; saveProgress(p); }
    return p;
  }

  function countSolved() {
    var p = getProgress();
    return SECTIONS.filter(function (id) { return p[id]; }).length;
  }

  function getLetter(id) {
    var i = SECTIONS.indexOf(id);
    return i === -1 ? '' : getWord().charAt(i);
  }

  function getCollected() {
    if (memCollected) return memCollected;
    var c = [];
    try { c = JSON.parse(readLS(COLLECTED_KEY)) || []; } catch (e) { c = []; }
    c = c.filter(function (w) { return WORDS.indexOf(w) !== -1; });
    memCollected = c;
    return c;
  }

  function allCollected() {
    return getCollected().length >= WORDS.length;
  }

  /* Trägt ein Wort in die Sammlung dieses Geräts ein. Gibt den Status
     zurück, damit die UI gezielt reagieren kann:
     'invalid'   — kein gültiges Codewort
     'duplicate' — gültig, aber schon eingetragen
     'added'     — neu eingetragen, Sammlung noch unvollständig
     'complete'  — neu eingetragen, jetzt alle 5 beisammen */
  function collectWord(input) {
    var w = (input || '').trim().toUpperCase();
    if (WORDS.indexOf(w) === -1) return 'invalid';
    var c = getCollected();
    if (c.indexOf(w) !== -1) return 'duplicate';
    c.push(w);
    memCollected = c;
    writeLS(COLLECTED_KEY, JSON.stringify(c));
    return c.length >= WORDS.length ? 'complete' : 'added';
  }

  function setUnlockedFlag() {
    try { sessionStorage.setItem(UNLOCK_KEY, '1'); } catch (e) {}
  }

  function isUnlocked() {
    try { return sessionStorage.getItem(UNLOCK_KEY) === '1'; } catch (e) { return false; }
  }

  return {
    WORDS: WORDS,
    SECTIONS: SECTIONS,
    getWord: getWord,
    getProgress: getProgress,
    markSolved: markSolved,
    countSolved: countSolved,
    getLetter: getLetter,
    getCollected: getCollected,
    allCollected: allCollected,
    collectWord: collectWord,
    setUnlockedFlag: setUnlockedFlag,
    isUnlocked: isUnlocked
  };
})();
