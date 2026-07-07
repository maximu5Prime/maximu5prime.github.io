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

## Neue Seite anlegen

1. HTML unter korrektem Pfad anlegen (Template aus `_templates/`)
2. KaTeX-Pfadtiefe prüfen (Ebenen ab Repo-Root zählen)
3. `index.html` des übergeordneten LB-Ordners ergänzen
4. Lokal testen → `git add` → `git commit` → `git push`

## Design-System (Kurzreferenz)

- **CSS:** `static/theme.css` — Dark/Light-Mode via `data-theme` auf `<html>`
- **Fonts:** DM Sans, DM Mono, DM Serif Display (lokal unter `static/`)
- **Accent-Farben:** Mathe `#e8c547` (dark) / `#a07d08` (light) | Physik `#1d4ed8` | KIT `#047857`
- **Canvas-Applets:** selbst gebaut, kein GeoGebra
