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
<fach>/klasse<nr>/lb<n>-<thema>/index.html            ← LB-Übersicht
<fach>/klasse<nr>/lb<n>-<thema>/praesentation.html    ← Folien-Einstieg (Pilot, s.u.)
<fach>/klasse<nr>/lb<n>-<thema>/<thema-slug>.html     ← einzelnes Wiki-Theorie-Thema (kein UE-Zeitraster)
<fach>/klasse<nr>/lb<n>-<thema>/uebungen.html          ← Interaktive Übungsaufgaben zum LB
<fach>/index.html                                      ← Fach-Landingpage: Tabs "Nach Jahrgangsstufe" /
                                                           "Nach Thema" (Vorbild: mathematik/index.html)
```

### Präsentation + Wiki-Theorie (Pilot: `mathematik/klasse11/lb1-ganzrationale-funktionen/`)

Die Website ist Begleitmaterial zum Unterricht vor Ort, kein eigenständiges Skript. Neues,
bislang nur an einem LB pilotiertes Muster:

- **`praesentation.html`** — Vollbild-Folien-Deck (`static/slides.css`/`static/slides.js`), das die LK
  zu Stundenbeginn projiziert: Kontext → Beobachtung → Hauptproblem der Stunde → Übergang in den
  gemeinsamen Unterricht. Kein `.site-header`, reine Bühne. `.slide`-Sichtbarkeit läuft über
  Opacity/Pointer-Events, NIE über `display:none` — sonst messen Canvas-Applets (`Plot.setup()`) beim
  Setup 0×0 (gleicher Grund wie bei `reveal.js`s Ausschluss von `.tab-panel`). Kann Text+Bild nebeneinander
  zeigen (`.slide--split` + `.slide-photo`); ohne vorhandenes Foto reused `.slide-photo.empty` (bestehende
  Platzhalter-Komponente) statt eines kaputten `<img>`.
- **`<thema-slug>.html`** — flache, themenbezogene Dateinamen (kein `ue<n>`-Präfix — bewusst **kein**
  Lesson-/Zeitraster-Bezug), je ein kleinschrittiges Thema pro Seite mit `.wiki-entry`-Layout: Text
  (`.wiki-entry-text`, max. 62ch) neben Grafik/Interaktivem (`.wiki-entry-visual`), volle `container`-Breite
  (1100px) statt `container--narrow`. Herleitung passiert live in der Präsentation, die Seite dient danach
  zum Nachschlagen. Jeder Eintrag: `.related`-Box (Querverlinkung, "Siehe auch") PLUS inline Textlinks im
  Fließtext zu verwandten Themen. `.wiki-entry` kollabiert erst bei 900px auf eine Spalte — bewusste
  Ausnahme vom sonst einheitlichen 640px-Breakpoint (§16 theme.css), da 62ch-Text + ≥260px-Grafik
  kombiniert mehr Raum brauchen.
- **`uebungen.html`** bleibt unverändert (eigene Quiz-Engine, nicht Teil dieses Musters) — Wiki-Seiten
  verweisen nur per Fließtext darauf (Kapitel sind dort rein JS-geschaltet, nicht per Hash verlinkbar).
  **Bekannter Folge-Task:** `uebungen.html` für LB1 enthält noch Kurvendiskussion/Extremstellen-Aufgaben,
  die laut Lehrplan (s.u.) nicht zu diesem LB gehören — noch nicht behoben.

**Fachliche Korrektheit vor Inhalt schreiben prüfen:** Vor dem Schreiben von Theorie-Inhalten den
Lehrplan-Umfang verifizieren, nicht raten oder von Nachbar-LBs übernehmen. Kurvendiskussion/
Extremstellen/Wendepunkte gehören NICHT zu „Ganzrationale Funktionen" (LB1), sondern zum separaten,
späteren LB „Differenzialrechnung" (`lb2-differenzialrechnung/`). Lehrplan-Digests (T/NT, alt/neu) liegen
in `../01_Materialien/01_Mathematik/01_Kontext/m11-*-lb*-*.md` — dort nachschlagen, bevor eine
Kompetenzliste angenommen wird.

Noch nicht auf andere Lernbereiche übertragen — vor einer Migration bestehender LBs (andere
Strukturmuster: Theorie direkt im LB-Index, oder Theorie in UE-Seiten inkl. eigener Übungen-Tab) erst
den Piloten mit echtem Unterrichtseinsatz validieren.

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
  `static/plot.js` (gemeinsame Canvas-Primitive für Applets: `Plot.setup/grid/curve/dot/colors/onRedraw` —
  Farben immer zur Zeichenzeit über `Plot.colors()` lesen, nie cachen, sonst bleiben nach Theme-Wechsel
  alte Farben stehen; `grid()` akzeptiert `opts.stepX`/`opts.stepY` (Default 1) für große Wertebereiche —
  ohne Schrittweite zeichnet `grid()` eine Linie pro Ganzzahl-Einheit, was bei z.B. `yMax=200` zu
  hunderten überlappenden Gitterlinien führt) · `static/reveal.js` (IntersectionObserver-Scroll-Reveal für `.card`/`.row-card`/
  `.task`, respektiert `prefers-reduced-motion`; beobachtet bewusst KEINE Elemente innerhalb von
  `.tab-panel` — sonst Flackern beim Tab-Wechsel, da `display:none`-Elemente den Observer verzögert
  feuern lassen) · `static/slides.css`/`static/slides.js` (Vollbild-Präsentations-Deck für den
  Stundeneinstieg, s. Pilot unten — Tastatur-Navigation, `.slide`-Sichtbarkeit über Opacity statt
  `display:none`).
- **Fonts:** DM Sans, DM Mono, DM Serif Display (lokal unter `static/`)
- **Accent-Farben:** Mathe `#e8c547` (dark) / `#a07d08` (light) | Physik `#1d4ed8` | KIT `#047857`
- **Komponenten:** `.site-header`, `.breadcrumb`, `.card`/`.card-grid`, `.row-list`/`.row-card`,
  `.tag`/`.tag-row`, `.tabs`/`.tab-btn`/`.tab-panel`, `.task`, `.solution`, `.hint`, `.formula`,
  `.related`/`.related-list` (Querverlinkung zwischen Wiki-Theorie-Einträgen, "Siehe auch"),
  `.wiki-entry`/`.wiki-entry-text`/`.wiki-entry-visual` (Text+Grafik-Zweispalter für Wiki-Theorie-Seiten,
  kollabiert bei 900px statt des einheitlichen 640px-Breakpoints),
  `.canvas-wrap` (für `Plot.setup()`; `.canvas-wrap--tall` als höherer Modifier für Vollbild-Kontexte;
  eigenständig positionierte Canvases nutzen stattdessen `.plot-wrap`), `.site-footer` — siehe
  `_templates/` für Beispiele.
- **Canvas-Applets:** selbst gebaut, kein GeoGebra
- **Dark-Mode-Kontrast-Fallstricke:** Theme-Tokens, die zwischen Hell/Dunkel invertieren (`--accent`,
  `--ok`, `--plot-curve` etc.), NICHT als Flächenfarbe mit fest-weißem Text kombinieren — bricht im
  Dark Mode. Bei „invertierten Balken" (`background:var(--text); color:var(--bg)`) brauchen Akzenttexte
  eine feste Hex-Farbe statt eines Theme-Tokens, sonst geht der Kontrast im Dark Mode verloren.
