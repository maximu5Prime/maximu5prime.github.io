# FAP-Browser – Technische Notizen

**Dateien:** `uebungen/mathematik/fap-aufgaben.html` · `uebungen/mathematik/fap-data.js` · `uebungen/mathematik/fap-aufgaben/` (PNG-Bilder) — dieses Dokument und `fap-crop.py` liegen in `tools/`

---

## Datenstruktur (`fap-data.js`)

```js
window.FAP_DATA = {
  tasks: [...],          // 71 Aufgaben, 2013–2025
  typenAnalysis: [...],  // Typ-Definitionen (id, short, label, desc)
  typenGeometrie: [...]
}
```

### Task-Felder

| Feld | Typ | Beispiel |
|---|---|---|
| `id` | string | `"2024_T1_Ana_1"` |
| `year`, `teil` | number | `2024`, `1` |
| `fach` | string | `"Analysis"` \| `"Geometrie"` |
| `gruppe` | string | `"T1 – Analysis"` / `"Analysis I"` |
| `titel` | string | LaTeX mit `$...$` (ab 2022), OCR-Text (2013–2021) |
| `typen` | string[] | `["PB","TG"]` |
| `afb` | number[] | `[1,2]` = AFB I+II |
| `be` | number | Bewertungseinheiten |
| `klasse` | `{alt, neu}` | `{alt:"12", neu:"12"}` |
| `k_hinweis` | string | Lehrplan-Hinweis für Overlay-Sidebar |
| `tags` | string[] | Operator-Wörter |
| `imgs` | string[] | `["fap-aufgaben/2024_T1_Ana_1.png"]` |
| `tipps` | string[] | Lösungshinweise (LaTeX) – Fallback wenn kein `subs` |
| `subs` | `{label,tipps[]}[]` | Gestaffelte Tipps je Unteraufgabe (optional) |
| `text` | string | OCR-Volltext (Tesseract, Deutsch) – für Volltextsuche |

### `subs`-Feld (gestaffelte Tipps)

Optional. Fehlt `subs`, generiert die HTML zur Laufzeit automatisch aus `tipps[]`:
```js
// Auto-Konvertierung in fillOv():
const effectiveSubs = t.subs?.length > 0
  ? t.subs
  : (t.tipps||[]).map((tip,i) => ({label:`Hinweis ${i+1}`, tipps:[tip]}));
```

Manuelle `subs` erlauben präzise Unteraufgaben-Labels:
```js
subs: [
  { label: "1.1 – Extrempunkte",  tipps: ["Leite $f_k'$ ab …"] },
  { label: "1.2 – Nullstellen",   tipps: ["Diskriminante: $D = …$"] },
]
```

### Aufgabentypen

**Analysis:** KD, PB, TG, GL, IN, EF, EX  
**Geometrie:** VL, SK, KP, GE, LB, AB, SW, KO

### Klassen-Zuordnung (nach Lehrplan)

| Typen | LP alt 17/18 | LP neu 26/27 |
|---|---|---|
| VL, SK, KP | Kl. 11 | Kl. 11 |
| GE, LB, AB, SW, KO | **Kl. 12** | **Kl. 12** |
| KD, PB, GL (poly) | Kl. 11 | Kl. 11 |
| EF, EX, IN, TG | Kl. 12 | Kl. 11 oder 12 je nach Aufgabe |

---

## Hilfsfunktionen (JS)

```js
effKl(t)          // → "11" | "11+12" | "12", LP-abhängig
grpLabel(t)       // → "T2 – Analysis I" (normalisiert)
afbLabel(afb)     // → "AFB I–III" / "AFB I+II" etc.
afbChip(afb, be)  // → HTML-Span mit Farbe (cafb1/2/3)
typLabel(id)      // → Label aus typenAnalysis/Geometrie
```

---

## Filter-State

```js
F = { fach, kl, teil, afb, jahre:Set, typen:Set, q, lp:{alt,neu} }
```

- **kl-Slider:** 3 Positionen → `F.kl = "11" | "" | "12"` (Alle = leer)
- **LP-Buttons:** `F.lp.alt / F.lp.neu` – beeinflusst `effKl()`
- **Suche `q`:** durchsucht titel + tags + tipps + k_hinweis + **text** (OCR)

---

## BE-Fortschrittsbalken

Zeigt pro Filteransicht: wie viele BE können mit Kl.-11-Wissen gelöst werden.

```js
kl11BE = sichtbare Tasks mit effKl === "11" → Summe t.be
totalBE = alle sichtbaren Tasks → Summe t.be
```

---

## Bilder (`fap-aufgaben/`)

- Format: PNG, 150 DPI, volle A4-Breite (~1241 px), vertikaler Brightness-Crop
- Namensschema: `{JAHR}_{T1|T2}_{Gruppe}[_{Nr}].png`
- Extraktion: `pdftoppm -r 150` + PIL Brightness-Crop (von unten)
- PDFs: `00_Quellen/FAP_FOSBOS_MT_{Jahr}_Aufg.pdf`

### Invariante: 1 Bild = 1 Aufgabe

Jedes Bild zeigt **genau eine Aufgabe** — keine benachbarten Aufgaben sichtbar.
Bilder ohne Nummer im Namen (`2020_T1_Ana.png`, `2022_T1_Geo.png` etc.) bilden die
gesamte T1-Sektion als einzelne Aufgabe ab; Unteraufgaben darin sind korrekt.

**Crop-Tool:** `fap-crop.py` im gleichen Ordner.
```
python fap-crop.py INPUT.png PREFIX --n-tasks 2          # Whitespace-Auto-Split
python fap-crop.py INPUT.png PREFIX --split-at 1222      # manueller Split
```

**Aufgaben-Grenzen per TSV-OCR finden** (bei mehrteiligen Seiten):
```bash
TESSDATA_PREFIX=~/.tessdata tesseract PAGE.png stdout -l deu --psm 1 tsv \
  | awk -F'\t' '$7 < 300 && $12 ~ /^[1-9]\.[0-9]+$/ {print $8, $12}'
# → Y-Koordinaten der N.0 Header (T2-Struktur)
```

---

## Aufgaben hinzufügen (neues Jahr)

1. PDFs rendern: `pdftoppm -r 150 -f PAGE -l PAGE PDF out.ppm`
2. Prüfen ob Seite mehrere Aufgaben enthält: TSV-OCR nach `N.0`-Mustern suchen (s.o.)
3. Falls mehrteilig: `fap-crop.py` mit `--split-at Y` oder `--n-tasks N`
4. OCR Volltext: `TESSDATA_PREFIX=~/.tessdata tesseract img.png stdout -l deu`
5. Task-Objekt in `fap-data.js` eintragen (nach bestehendem Schema)
6. `typen`, `klasse.alt`, `klasse.neu` anhand Lehrplan setzen
7. Verifikation: TSV-OCR auf fertigem Bild — darf nur eine `N.0`-Markierung links enthalten

---

## UI – Overlay-Sidebar

Öffnet per Klick auf eine Kachel. Enthält:
- **`▶ Info` / `◀ Info`** Toggle-Button → blendet das Info-Panel ein/aus (initial collapsed)
- **≡ Zusammenfassung** (kollabierbar): Klasse, Aufgabentypen, AFB/BE, Lehrplan-Hinweis
- **💡 Tipps** (kollabierbar): gestaffelt per Unteraufgabe (Akkordeon) oder flache Liste

KaTeX wird lazy beim Öffnen einer Sektion gerendert.

## UI – Kachelansicht

Unter dem Aufgabentitel erscheint eine Kurzversion der `desc` des ersten Aufgabentyps
(max. 80 Zeichen, `.ctypdesc`-Klasse).

---

## Bekannte Entscheidungen / Fixes

- **GE/LB/AB/SW/KO:** alle auf `{alt:"12", neu:"12"}` gesetzt (war fälschlich alt:"11")
- **OCR-Titel 2013–2021:** garbled; ab 2022 manuell als LaTeX geschrieben
- **2019/2020/2021 T1 Geo:** Titel korrigiert, k_hinweis bereinigt (kein "T1–T1–" mehr)
- **Kl. 12 bei aktivem Doppel-LP:** konservativ – gilt sobald *eine* LP "12" sagt
- **Print:** `#printarea` wird vor Print per JS ans DOM-Start prepended (leere 1. Seite fix)
- **Crop-Fix 2026-06:** 51 Bilder 2013–2025 per TSV-Crop repariert; alle zeigen jetzt genau eine Aufgabe. Tool: `fap-crop.py`. Methode: `N.0`-Boundaries via Tesseract TSV (`--psm 1`), Crop + Brightness-Trim. Backups: `*.bak` in `fap-aufgaben/` (nach Sichtkontrolle löschbar).

---

## Deployment

Website-Repo: `02_Website/` → `git push` (SSH Port 443, Port 22 geblockt)  
Pfad: `uebungen/mathematik/fap-aufgaben.html`
