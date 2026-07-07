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
├── static/              ← theme.css, fonts, KaTeX v0.16.47 (lokal)
├── mathematik/klasse10–13/
├── physik/klasse11–12/
├── kit/klasse11–12/
├── uebungen/            ← mathematik/, physik/, kit/
├── projekte/
└── _templates/          ← HTML-Seitenvorlagen
    ├── fach-uebersicht.html
    ├── interaktives-arbeitsblatt.html
    └── arbeitsblatt-template.html
```

## Pfad-Schema

```
<fach>/klasse<nr>/lb<n>-<thema>/index.html          ← LB-Übersicht
<fach>/klasse<nr>/lb<n>-<thema>/ue<n>-<thema>.html  ← Einzelne UE
```

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

- **CSS:** `static/theme.css` — ein Design-System mit Tokens (Farben, Typo, Spacing), Dark/Light-Mode
  via `data-theme` auf `<html>`, Default folgt `prefers-color-scheme` (kein gespeicherter Override).
- **JS:** `static/site.js` (Theme-Toggle, feuert `themechange`-Event) · `static/plot.js` (gemeinsame
  Canvas-Primitive für Applets: `Plot.setup/grid/curve/dot/colors/onRedraw` — Farben immer zur
  Zeichenzeit über `Plot.colors()` lesen, nie cachen, sonst bleiben nach Theme-Wechsel alte Farben stehen).
- **Fonts:** DM Sans, DM Mono, DM Serif Display (lokal unter `static/`)
- **Accent-Farben:** Mathe `#e8c547` (dark) / `#a07d08` (light) | Physik `#1d4ed8` | KIT `#047857`
- **Komponenten:** `.site-header`, `.breadcrumb`, `.card`/`.card-grid`, `.row-list`/`.row-card`,
  `.tag`/`.tag-row`, `.tabs`/`.tab-btn`/`.tab-panel`, `.task`, `.solution`, `.hint`, `.formula`,
  `.canvas-wrap` (für `Plot.setup()`; eigenständig positionierte Canvases nutzen stattdessen
  `.plot-wrap`), `.site-footer` — siehe `_templates/` für Beispiele.
- **Canvas-Applets:** selbst gebaut, kein GeoGebra
