#!/usr/bin/env python3
"""
fap-crop.py – FAP-Aufgaben Crop-Tool
Trennt ein PNG-Bild mit mehreren Aufgaben in einzelne Aufgaben-Bilder.

Verwendung (aus dem Repo-Root aufrufen):
  python tools/fap-crop.py INPUT.png AUSGABE_PREFIX [--n-tasks 2] [--thresh 245] [--min-gap 30] [--pad 30]

Beispiele:
  python tools/fap-crop.py uebungen/mathematik/fap-aufgaben/2025_T2_AI_p7.png uebungen/mathematik/fap-aufgaben/2025_T2_AI_2 --n-tasks 2
  python tools/fap-crop.py uebungen/mathematik/fap-aufgaben/2024_T2_AI_page.png uebungen/mathematik/fap-aufgaben/2024_T2_AI --n-tasks 3

Ausgabe:
  AUSGABE_PREFIX_1.png, AUSGABE_PREFIX_2.png, …
"""
import argparse
import subprocess
import sys
import re
import tempfile
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError:
    sys.exit("Fehler: Pillow und numpy werden benötigt. → pip install pillow numpy")


def find_white_bands(gray: np.ndarray, thresh: int = 245, min_gap: int = 30) -> list[dict]:
    """Findet zusammenhängende weiße Zeilen-Läufe im Bild."""
    row_min = gray.min(axis=1)
    is_white = row_min >= thresh

    bands = []
    in_band = False
    start = 0
    for y, w in enumerate(is_white):
        if w and not in_band:
            start = y
            in_band = True
        elif not w and in_band:
            width = y - start
            if width >= min_gap:
                bands.append({"start": start, "end": y, "width": width, "mid": (start + y) // 2})
            in_band = False
    if in_band:
        width = len(is_white) - start
        if width >= min_gap:
            bands.append({"start": start, "end": len(is_white), "width": width, "mid": (start + len(is_white)) // 2})
    return bands


def ocr_confidence(gray: np.ndarray, y_from: int, y_to: int, context_px: int = 80) -> float:
    """
    OCR-Score: Prüft ob direkt unter dem Band eine neue Aufgabennummer erscheint.
    Gibt Confidence 0.0–1.0 zurück (0 falls tesseract nicht verfügbar).
    """
    strip_start = max(0, y_to)
    strip_end = min(gray.shape[0], y_to + context_px)
    if strip_end <= strip_start:
        return 0.0

    strip = gray[strip_start:strip_end, :]
    img = Image.fromarray(strip)

    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tf:
        tmp_path = tf.name
    img.save(tmp_path)

    try:
        result = subprocess.run(
            ["tesseract", tmp_path, "stdout", "-l", "deu", "--psm", "6"],
            capture_output=True, text=True, timeout=5
        )
        text = result.stdout
        # Aufgabennummer-Muster: "1.0", "2.1", "3.", "1)", "(2" etc.
        patterns = [r"\b\d+\.\d+\b", r"\b\d+\)\s", r"^\s*\d+\s*$"]
        score = 0.0
        for pat in patterns:
            if re.search(pat, text, re.MULTILINE):
                score += 0.4
        return min(score, 1.0)
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return 0.0
    finally:
        Path(tmp_path).unlink(missing_ok=True)


def brightness_crop_bottom(gray: np.ndarray, thresh: int = 245, pad: int = 30) -> int:
    """Gibt die untere Crop-Zeile zurück (letztes non-white row + pad)."""
    row_min = gray.min(axis=1)
    non_white = np.where(row_min < thresh)[0]
    if len(non_white) == 0:
        return gray.shape[0]
    return min(int(non_white[-1]) + pad, gray.shape[0])


def crop_image(img: Image.Image, y_start: int, y_end: int, pad: int = 30) -> Image.Image:
    """Schneidet einen Streifen aus und croppt unten per Brightness."""
    arr = np.array(img.convert("L"))
    strip_arr = arr[y_start:y_end, :]
    bottom = brightness_crop_bottom(strip_arr, pad=pad)
    strip = img.crop((0, y_start, img.width, y_start + bottom))
    return strip


def main():
    parser = argparse.ArgumentParser(description="FAP-Aufgaben Crop-Tool")
    parser.add_argument("input", help="Eingabe-PNG-Datei")
    parser.add_argument("prefix", help="Ausgabe-Prefix (z. B. uebungen/mathematik/fap-aufgaben/2025_T2_AI_2)")
    parser.add_argument("--n-tasks", "-n", type=int, default=2, help="Anzahl Aufgaben im Bild (Default: 2)")
    parser.add_argument("--thresh", type=int, default=245, help="Weiß-Schwellwert 0–255 (Default: 245)")
    parser.add_argument("--min-gap", type=int, default=30, help="Minimale Bandbreite in px (Default: 30)")
    parser.add_argument("--pad", type=int, default=30, help="Padding unten nach Brightness-Crop (Default: 30)")
    parser.add_argument("--split-at", type=int, nargs="+", metavar="Y",
                        help="Manuelle Split-Koordinaten in px (überschreibt Auto-Detection)")
    parser.add_argument("--no-ocr", action="store_true", help="OCR-Validierung überspringen")
    parser.add_argument("--dry-run", action="store_true", help="Nur Split-Punkte ausgeben, nicht speichern")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        sys.exit(f"Fehler: Datei nicht gefunden: {args.input}")

    img = Image.open(input_path)
    gray = np.array(img.convert("L"))
    h, w = gray.shape
    print(f"Bild: {w} × {h} px")

    n_splits = args.n_tasks - 1
    if n_splits <= 0:
        print("--n-tasks 1: Nur Brightness-Crop von unten.")
        if not args.dry_run:
            out = crop_image(img, 0, h, pad=args.pad)
            out_path = Path(f"{args.prefix}_1.png")
            out.save(out_path)
            print(f"→ {out_path}")
        return

    # Manuelle Koordinaten haben Vorrang
    if args.split_at:
        split_ys = sorted(args.split_at)
        print(f"Manuelle Split-Punkte: {split_ys}")
    else:
        bands = find_white_bands(gray, thresh=args.thresh, min_gap=args.min_gap)
        print(f"Gefundene Weißbänder: {len(bands)}")

        if not bands:
            sys.exit("Keine Weißbänder gefunden. Versuche --thresh, --min-gap oder --split-at Y.")

        # Score: Bandbreite + OCR-Bonus
        for b in bands:
            ocr_score = 0.0 if args.no_ocr else ocr_confidence(gray, b["start"], b["end"])
            b["score"] = b["width"] + ocr_score * 200  # OCR-Bonus gewichtet
            print(f"  Band y={b['start']}–{b['end']} (Breite={b['width']}px, OCR={ocr_score:.2f}, Score={b['score']:.1f})")

        # Beste n_splits Bänder auswählen
        best = sorted(bands, key=lambda b: b["score"], reverse=True)[:n_splits]
        split_ys = sorted([b["mid"] for b in best])
        print(f"Auto-Split-Punkte: {split_ys}")
        if len(split_ys) < n_splits:
            print(f"Warnung: Nur {len(split_ys)} von {n_splits} Split-Punkten gefunden.")
            print("Tipp: --min-gap kleiner setzen oder --split-at Y verwenden.")

    if args.dry_run:
        print("Dry-run: keine Dateien gespeichert.")
        return

    # Aufgaben ausschneiden
    boundaries = [0] + split_ys + [h]
    prefix = Path(args.prefix)
    prefix.parent.mkdir(parents=True, exist_ok=True)

    for i, (y0, y1) in enumerate(zip(boundaries[:-1], boundaries[1:]), start=1):
        crop = crop_image(img, y0, y1, pad=args.pad)
        out_path = Path(f"{prefix}_{i}.png")
        crop.save(out_path)
        print(f"→ {out_path}  ({crop.width} × {crop.height} px)")

    print(f"\n{args.n_tasks} Aufgaben-Bilder gespeichert.")


if __name__ == "__main__":
    main()
