# 02_Website — GitHub Pages

Unterrichtswebsite von maximu5prime @FOSII_Nürnberg, gehostet über GitHub Pages.

## Hosting

- **Remote:** `https://github.com/maximu5Prime/maximu5prime.github.io.git`
- **Live-URL:** `https://maximu5prime.github.io`
- **Veröffentlichung:** `git add … && git commit && git push` — kein Build-Schritt, sofort live
- **Branch:** `main` (GitHub Pages serviert direkt aus Root)

## Was ins Repo gehört / nicht gehört

| gehört rein | gehört NICHT rein |
|---|---|
| `.html`-Seiten | `.pdf`-Dateien (zu groß, gehören nach `01_Materialien/`) |
| `static/` (Fonts, CSS) | temporäre Dateien (`*.tmp`, `*.bak`) |
| `index.html` pro Ordner | Editor-Backup-Dateien (`*~`, `*.orig`) |
| Bilder/SVGs die auf der Seite eingebettet sind | große Binärdateien |

## Ordnerstruktur

```
02_Website/
├── index.html                          ← Startseite
├── impressum.html
├── datenschutz.html
├── static/                             ← Gemeinsame Assets
│   ├── theme.css                       ← Design-System (Dark/Light-Mode, Farben)
│   └── fonts.css + *.woff2            ← Lokale Fonts (DM Sans, DM Mono, Playfair)
├── mathematik/
│   ├── klasse10/
│   ├── klasse11/
│   │   ├── index.html                  ← LB-Übersicht Klasse 11
│   │   ├── lb1-ganzrationale-funktionen/
│   │   ├── lb2-differenzialrechnung/
│   │   │   ├── index.html              ← UE-Übersicht des LB
│   │   │   ├── ue1-differenzenquotient.html
│   │   │   └── ue2-ableitungsregeln.html
│   │   └── lb3–lb5-…/
│   └── klasse12/
├── physik/klasse11/, klasse12/
├── kit/klasse11/, klasse12/
├── uebungen/mathematik/, physik/, kit/ ← Fachübergreifende Übungen
└── projekte/                           ← Sonstige Projekte
```

## Pfad-Schema für neue Seiten

```
<fach>/klasse<nr>/lb<n>-<thema>/index.html        ← LB-Übersicht
<fach>/klasse<nr>/lb<n>-<thema>/ue<n>-<thema>.html ← Einzelne UE
```

**Fach-Mapping:** `mathematik` | `physik` | `kit`  
**LB-Ordner:** Kleinschreibung, Leerzeichen → `-`, Umlaute: `ä→ae` `ö→oe` `ü→ue` `ß→ss`

## Design-System

Alle Seiten nutzen `static/theme.css` und `static/fonts.css` (relativ einbinden).

- **Fonts:** DM Sans (Fließtext), DM Mono (Code/Formeln), DM Serif Display (Überschriften)
- **Dark/Light-Mode:** via CSS-Variable + `data-theme`-Attribut, Toggle per JS
- **KaTeX:** CDN-Einbindung für Mathe-Formeln (kein lokales Bundle)
- **Canvas-Applets:** selbst gebaut (kein GeoGebra-Embed auf der Website)

## Typischer Commit-Workflow

```bash
cd 02_Website
git add mathematik/klasse11/lb2-differenzialrechnung/ue3-neue-seite.html
git commit -m "add UE3 Kurvendiskussion lb2 klasse11"
git push
```
