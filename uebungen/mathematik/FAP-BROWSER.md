# FAP-Browser – Technische Notizen

**Dateien:** `fap-aufgaben.html` · `fap-data.js` · `fap-aufgaben/` (PNG-Bilder)

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
| `k_hinweis` | string | Lehrplan-Hinweis für Overlay |
| `tags` | string[] | Operator-Wörter |
| `imgs` | string[] | `["fap-aufgaben/2024_T1_Ana_1.png"]` |
| `tipps` | string[] | Lösungshinweise (LaTeX) |
| `text` | string | OCR-Volltext (Tesseract, Deutsch) – für Volltextsuche |

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

- Format: PNG, 150 DPI, volle A4-Breite (~1241 px), vertikaler Whitespace-Crop
- Namensschema: `{JAHR}_{T1|T2}_{Gruppe}[_{Nr}].png`
- Extraktion: `pdftoppm -r 150` + PIL Brightness-Crop (von unten nach oben)
- PDFs: `00_Quellen/FAP_FOSBOS_MT_{Jahr}_Aufg.pdf`

---

## Aufgaben hinzufügen (neues Jahr)

1. PDFs rendern: `pdftoppm -r 150 -f PAGE -l PAGE PDF out.ppm`
2. Smart-Crop: Scan von unten, letztes non-white row + 30px Pad
3. OCR: `TESSDATA_PREFIX=~/.tessdata tesseract img.png stdout -l deu`
4. Task-Objekt in `fap-data.js` eintragen (nach bestehendem Schema)
5. `typen`, `klasse.alt`, `klasse.neu` anhand Lehrplan setzen

---

## Bekannte Entscheidungen / Fixes

- **GE/LB/AB/SW/KO:** alle auf `{alt:"12", neu:"12"}` gesetzt (war fälschlich alt:"11")
- **OCR-Titel 2013–2021:** garbled; ab 2022 manuell als LaTeX geschrieben
- **2019/2020/2021 T1 Geo:** Titel korrigiert, k_hinweis bereinigt (kein "T1–T1–" mehr)
- **Kl. 12 bei aktivem Doppel-LP:** konservativ – gilt sobald *eine* LP "12" sagt
- **Print:** `#printarea` wird vor Print per JS ans DOM-Start prepended (leere 1. Seite fix)
- **Overlay-Panel:** links, kollabierbar (◀/▶), theme-aware

---

## Deployment

Website-Repo: `02_Website/` → `git push` (SSH Port 443, Port 22 geblockt)  
Pfad: `uebungen/mathematik/fap-aufgaben.html`
