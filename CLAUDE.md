# CLAUDE.md — 02_Website

GitHub Pages — FOS Nürnberg Lehrwebsite. Details → [WEBSITE.md](WEBSITE.md) (gitignored).

## Eckdaten

- **Remote:** `https://github.com/maximu5Prime/maximu5prime.github.io.git`
- **Live:** `https://maximu5prime.github.io`
- **Deploy:** `git push` aus diesem Verzeichnis (kein Build-Schritt, Jekyll deaktiviert)
- **PDFs nicht einchecken** — liegen in `../01_Materialien/`

## Struktur

```
02_Website/
├── index.html, impressum.html, datenschutz.html
├── static/              ← theme.css, site.js, plot.js, reveal.js, slides.css/slides.js, fonts,
│                            KaTeX v0.16.47 (lokal)
├── mathematik/           ← index.html (Fach-Landingpage), vorklasse/, klasse10–13/
├── physik/klasse11–12/
├── kit/klasse11–12/
├── uebungen/            ← nur noch Physik/KIT-Platzhalter (Mathe ist dezentralisiert, s.u.)
├── projekte/
├── tools/                ← Offline-Hilfsskripte, nicht Teil der deployten Seite (z.B. fap-crop.py)
└── _templates/          ← HTML-Seitenvorlagen
    ├── fach-uebersicht.html
    ├── interaktives-arbeitsblatt.html
    └── arbeitsblatt-template.html
```

**Übungen liegen bei ihrem Lernbereich, nicht zentral:** jede LB-Seite verlinkt ihre Übung direkt
(`.../lb<n>-<thema>/uebungen.html`), es gibt keinen fachübergreifenden Mindmap-/Hub-Einstieg mehr.
`uebungen/` als Top-Level-Ordner dient nur noch als Platzhalter-Hub für Physik/KIT, solange die dort
keine eigene Struktur haben.

## Pfad-Schema

```
<fach>/klasse<nr>/lb<n>-<thema>/index.html                  ← LB-Übersicht (Hub, nach UE-Bögen gegliedert)
<fach>/klasse<nr>/lb<n>-<thema>/praesentation-<slug>.html   ← ein Folien-Deck pro Unterrichtseinheit (Pilot, s.u.)
<fach>/klasse<nr>/lb<n>-<thema>/<thema-slug>.html           ← einzelnes Wiki-Theorie-Thema (kein UE-Zeitraster)
<fach>/klasse<nr>/lb<n>-<thema>/uebungen.html                ← zentrale Quiz-Seite (Altmuster; im Piloten
                                                                 aufgelöst — Übungen liegen dort inline im Wiki)
<fach>/index.html                                            ← Fach-Landingpage: Tabs "Nach Jahrgangsstufe" /
                                                                 "Nach Thema" (Vorbild: mathematik/index.html)
```

**LB-Ordnernummerierung folgt teils altem, teils neuem Lehrplan:** `klasse11/lb3-zufallsexperiment/`
und `lb4-wahrscheinlichkeit/` tragen noch die Nummerierung des Lehrplans 2017/18; `lb6-kombinatorik/`
(vormals `lb5-kombinatorik/`) wurde auf die Nummerierung des neuen Lehrplans 2026/27 umgestellt, weil
Kombinatorik dort LB6 statt LB5 ist. Vor Anlegen eines neuen LB-Ordners im passenden Lehrplan-Digest
(`../01_Materialien/01_Mathematik/01_Kontext/m11-*-lb*-*.md`) prüfen, welche Nummerierung (alt/neu)
für die Zielklasse gerade gilt — eine flächendeckende Umbenennung aller Bestandsordner ist NICHT
automatisch Teil einzelner LB-Aufgaben.

### Präsentationen + Wiki-Theorie (Pilot: `mathematik/klasse11/lb1-ganzrationale-funktionen/`)

Die Website ist Begleitmaterial zum Unterricht vor Ort, kein eigenständiges Skript. Muster
(Präsentations-Decks bislang nur an LB1 umgesetzt; das Wiki-Pattern selbst — ohne Decks — zusätzlich
an `lb6-kombinatorik/` als **deckloser Variante**, s.u.):

- **`praesentation-<slug>.html`** — pro Unterrichtseinheit EIN Vollbild-Folien-Deck
  (`static/slides.css`/`static/slides.js`) mit einer UE-umspannenden **Leitaufgabe** (Sachkontext):
  Kontext → Beobachtung → Hauptproblem → **Werkzeugkasten-Folie** (verlinkt die Teilmenge der
  Wiki-Themen, die zur Lösung nötig sind). LB1 hat 5 Decks (achterbahn, hochwasser, brueckenbogen,
  erloes-kosten, gewinn-und-verlust). Kein `.site-header`, reine Bühne. `.slide`-Sichtbarkeit läuft
  über Opacity/Pointer-Events, NIE über `display:none` — sonst messen Canvas-Applets (`Plot.setup()`)
  beim Setup 0×0 (gleicher Grund wie bei `reveal.js`s Ausschluss von `.tab-panel`). Text+Bild
  nebeneinander via `.slide--split` + `.slide-photo`; ohne vorhandenes Foto `.slide-photo.empty`
  (Platzhalter-Komponente) statt eines kaputten `<img>`.
- **`<thema-slug>.html`** — flache, themenbezogene Dateinamen (kein `ue<n>`-Präfix — bewusst **kein**
  Lesson-/Zeitraster-Bezug; die UE-Zuordnung lebt nur im Hub `index.html`). Verbindliche
  **4-Zonen-Anatomie**, max. 4 Textzonen, einfache Sprache, `container--wide` (1360px):
  1. Header: Breadcrumb + Titel + **Kernidee** als `.site-sub` (1–2 Sätze; kein `.kicker`, keine
     „Merksatz:/Beispiel:"-Bold-Labels)
  2. `.wiki-entry` (KEIN `.card`-Wrapper): `.wiki-entry-text` (max. 68ch, Inline-Links) neben
     `.wiki-entry-visual` (**interaktives** Applet: Slider oder `Plot.draggable`, `.formula--dyn`-Zeile)
  3. `section.wiki-section` „Rechenbeispiel": `.formula--step`-Kette (jeder Schritt eine Zeile mit
     kurzem Kommentar) + `.result-box`-Abschluss
  4. `section.wiki-section` „Selbst üben": 2–3 deklarative `[data-quiz]`-Tasks (`static/quiz.js`)
  Danach: kompakte `.related`-Box + `.pager` (Prev/Next-Klickstrecke durch alle Themen des LB, 1–15).
  `.wiki-entry` kollabiert erst bei 1000px auf eine Spalte — bewusste Ausnahme vom einheitlichen
  640px-Breakpoint (§16 theme.css), da 68ch-Text + ≥320px-Grafik mehr Raum brauchen.
- **Übungen liegen inline im Wiki** (`quiz.js`, s. Design-System) — es gibt im Piloten KEINE zentrale
  `uebungen.html` mehr. Die alte LB1-Quiz-Engine (Kurvendiskussion, ableitungsbasiert) ist als Ganzes
  nach `lb2-differenzialrechnung/uebungen.html` geparkt (fachlich dort korrekt, Label „Baustelle";
  wird beim LB2-Ausbau ins neue Muster überführt).
- **Hub `index.html`** — gliedert nach UE-Bögen: je `.section-label` („UE 1 · Grundlagen · ~6 Std.")
  → Deck-`.card` → `.row-list` der zugehörigen Wiki-row-cards (durchlaufende Nummerierung, keine
  `.row-id`-Zeilen).
- **Deckloser Hub (`lb6-kombinatorik/index.html`)** — für LBs ohne Präsentations-Decks: kein
  `.section-label`-pro-UE + Deck-`.card`, sondern EIN `.section-label` („Themen") direkt über einer
  flachen `.row-list` aller Wiki-Themen (Reihenfolge = fachliche Reihenfolge, kein UE-Zeitraster).
  Vorbild für die Grundstruktur ist der decklose LB-Übersichts-Hub `mathematik/klasse11/index.html`,
  nicht der Deck-Hub von LB1.
- **Applets ohne Funktionsgraph** (`lb6-kombinatorik/*.html`: Konfigurator, Läufer-Swap, Podium,
  Passwortknacker, Urnenmodell) — brauchen `Plot.grid`/`Plot.curve` nicht, nutzen aber weiterhin
  `Plot.setup()` (DPR-Skalierung) und `Plot.colors()` (Theme-Farben) und zeichnen mit eigenen
  `ctx.fillRect`/`ctx.arc`-Routinen. Klick- statt Drag-Interaktion: eigener
  `canvas.addEventListener('click', …)`-Handler + `Plot.nearest(pts, mx, my, r)` als Hit-Test (kein
  `Plot.draggable`, da diskrete Auswahl statt kontinuierliches Ziehen). Dynamische `.formula--dyn`-
  Zeilen mit echtem LaTeX brauchen nach jedem Redraw ein manuelles `renderMathInElement(el, {...})`
  (gleiche Optionen wie der initiale `auto-render`-Aufruf im `<head>`) — Auto-Render läuft nur einmal
  beim Seitenladen und erfasst später eingefügten Text nicht.

**Fachliche Korrektheit vor Inhalt schreiben prüfen:** Vor dem Schreiben von Theorie-Inhalten den
Lehrplan-Umfang verifizieren, nicht raten oder von Nachbar-LBs übernehmen. Kurvendiskussion/
Extremstellen/Wendepunkte gehören NICHT zu „Ganzrationale Funktionen" (LB1), sondern zum separaten,
späteren LB „Differenzialrechnung" (`lb2-differenzialrechnung/`). Lehrplan-Digests (T/NT, alt/neu) liegen
in `../01_Materialien/01_Mathematik/01_Kontext/m11-*-lb*-*.md` — dort nachschlagen, bevor eine
Kompetenzliste angenommen wird.

Präsentations-Decks noch nicht auf andere Lernbereiche übertragen — vor einer Migration bestehender
LBs (andere Strukturmuster: Theorie direkt im LB-Index, oder Theorie in UE-Seiten inkl. eigener
Übungen-Tab) erst den Piloten mit echtem Unterrichtseinsatz validieren. Das Wiki-Pattern OHNE Decks
(4-Zonen-Themenseiten + flacher Hub) wurde dagegen bereits ein zweites Mal angewendet
(`lb6-kombinatorik/`, greenfield — kein bestehender Content, also keine Migrationsfrage) und ist der
Standard für neue, noch leere LBs.

Umlaute: ä→ae, ö→oe, ü→ue, ß→ss. Leerzeichen→`-`. Alles Kleinschreibung.

**Asset-Pfade sind root-absolut**, nicht relativ (`/static/theme.css`, nicht `../../static/theme.css`) —
die Seite läuft immer unter der Domain-Root (GitHub User-Page). Das erspart das Zählen der Pfadtiefe
beim Anlegen neuer Seiten, bedeutet aber: **lokal testen geht nur über einen HTTP-Server, nicht per
`file://`** (root-absolute Pfade lösen sonst nicht auf):

```
python -m http.server 8000   # aus dem Repo-Root starten
```

## Neue Seite anlegen

1. HTML unter korrektem Pfad anlegen (Template aus `_templates/`)
2. `<html data-subject="…">` setzen (`mathematik` | `physik` | `kit`) — steuert die Akzentfarbe
3. `index.html` des übergeordneten LB-Ordners ergänzen
4. Lokal testen (`python -m http.server`) → `git add` → `git commit` → `git push`

## Design-System (Kurzreferenz)

- **CSS:** `static/theme.css` — ein Design-System mit Tokens (Farben, Typo, Spacing, `--shadow-sm/md/lg`,
  `--ease-out`), Dark/Light-Mode via `data-theme` auf `<html>`, Default folgt `prefers-color-scheme`
  (kein gespeicherter Override).
- **JS:** `static/site.js` (Theme-Toggle mit SVG-Icon-Crossfade, feuert `themechange`-Event) ·
  `static/plot.js` (gemeinsame Canvas-Primitive für Applets: `Plot.setup/grid/mapper/curve/dot/colors/
  nearest/draggable/onRedraw` — Farben immer zur Zeichenzeit über `Plot.colors()` lesen, nie cachen,
  sonst bleiben nach Theme-Wechsel alte Farben stehen; `grid()` akzeptiert `opts.stepX`/`opts.stepY`
  (Default 1) für große Wertebereiche — ohne Schrittweite zeichnet `grid()` eine Linie pro
  Ganzzahl-Einheit, was bei z.B. `yMax=200` zu hunderten überlappenden Gitterlinien führt; das von
  `grid()`/`Plot.mapper()` gelieferte Mapping enthält auch `fromX/fromY` (px→Mathe) für Drag-Applets;
  `Plot.draggable(canvas, {hitTest, onDrag, map})` verdrahtet Pointer-Drag inkl. `touch-action:none`
  nur auf dem Canvas; `Plot.nearest(pts, mx, my, r)` ist der gemeinsame Hit-Test; Inline-Skripte
  IMMER in `window.addEventListener('load', …)` starten — plot.js lädt `defer`, zur Parse-Zeit
  existiert `Plot` noch nicht) ·
  `static/quiz.js` (deklarative Mini-Übungen: scannt `[data-quiz]` mit Typen `mcq` (`.quiz-opts` >
  `.quiz-opt`, `data-ans` = 0-basierter Index), `ankreuz` (`.ankreuz`-Tabelle, `data-ans="W,F,…"`,
  Radios injiziert quiz.js), `fill` (`<input data-ans data-tol>`, Komma→Punkt); injiziert
  Prüfen/Zurücksetzen/Tipp-Buttons + `.feedback` und rendert KaTeX im Feedback nach; bewusst ohne
  Score-/Fortschritts-Chrome; optionaler Tipp als `<div class="hint" data-quiz-hint>`) ·
  `static/reveal.js` (IntersectionObserver-Scroll-Reveal für `.card`/`.row-card`/`.task`/
  `.wiki-entry-text`/`.wiki-entry-visual`/`.wiki-section`, respektiert `prefers-reduced-motion`;
  beobachtet bewusst KEINE Elemente innerhalb von `.tab-panel` — sonst Flackern beim Tab-Wechsel, da
  `display:none`-Elemente den Observer verzögert feuern lassen) · `static/slides.css`/`static/slides.js`
  (Vollbild-Präsentations-Deck für den Stundeneinstieg, s. Pilot — Tastatur-Navigation,
  `.slide`-Sichtbarkeit über Opacity statt `display:none`; Folienzahl wird dynamisch gezählt).
- **Fonts:** DM Sans, DM Mono, DM Serif Display (lokal unter `static/`). **Mono-Diät:** DM Mono ist
  bewusst auf `.num`, `.kicker`, `.tag`/`.pill`, `.value-badge`, `.slider-value` und `.deck-chrome`
  beschränkt — Meta-/UI-Texte (Breadcrumb, Labels, Buttons, Tabellen, Tabs, Footer …) laufen in
  DM Sans (Uppercase-Varianten mit `letter-spacing ≤ .06em`). Sub-Body-Größen nur über die drei
  Tokens `--fs-body`/`--fs-small`/`--fs-tag`, keine neuen Hardcodes.
- **Accent-Farben:** Mathe `#e8c547` (dark) / `#a07d08` (light) | Physik `#1d4ed8` | KIT `#047857`
- **Komponenten:** `.site-header`, `.breadcrumb`, `.card`/`.card-grid`, `.row-list`/`.row-card`,
  `.tag`/`.tag-row`, `.tabs`/`.tab-btn`/`.tab-panel`, `.task`, `.solution`, `.hint`, `.formula`
  (`--step` für Rechenschritt-Ketten, `--dyn` für JS-befüllte Ergebniszeilen), `.result-box`,
  `.related`/`.related-list` (Querverlinkung zwischen Wiki-Theorie-Einträgen, "Siehe auch"),
  `.wiki-entry`/`.wiki-entry-text`/`.wiki-entry-visual` (Text+Grafik-Zweispalter für Wiki-Theorie-Seiten,
  kollabiert bei 1000px statt des einheitlichen 640px-Breakpoints), `.wiki-section` (volle-Breite-
  Abschnitt im `.wiki-entry`-Grid: Rechenbeispiel, Selbst üben), `.pager`/`.pager-prev`/`.pager-next`/
  `.pager-label` (Prev/Next-Klickstrecke am Wiki-Seitenende, im Print ausgeblendet),
  `.quiz-task`/`.quiz-q`/`.quiz-input`/`.ankreuz`/`.btn-row` (Mini-Übungen, s. quiz.js),
  `.canvas-wrap` (für `Plot.setup()`; `.canvas-wrap--tall` als höherer Modifier für Vollbild-Kontexte;
  eigenständig positionierte Canvases nutzen stattdessen `.plot-wrap`), `.site-footer` — siehe
  `_templates/` für Beispiele. Container: `--container` 1100px, `--container-narrow` 880px,
  `--container-wide` 1360px (Wiki-Seiten).
- **Canvas-Applets:** selbst gebaut, kein GeoGebra
- **Dark-Mode-Kontrast-Fallstricke:** Theme-Tokens, die zwischen Hell/Dunkel invertieren (`--accent`,
  `--ok`, `--plot-curve` etc.), NICHT als Flächenfarbe mit fest-weißem Text kombinieren — bricht im
  Dark Mode. Bei „invertierten Balken" (`background:var(--text); color:var(--bg)`) brauchen Akzenttexte
  eine feste Hex-Farbe statt eines Theme-Tokens, sonst geht der Kontrast im Dark Mode verloren.
