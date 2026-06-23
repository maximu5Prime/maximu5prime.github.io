// FAP Aufgabendaten – FOS Nürnberg Mathematik Technik
// Titel und Tipps: $...$ für KaTeX-Rendering
// Version 2.1 – 2026-06
window.FAP_DATA = {
  version: "2.1",

  typenAnalysis: [
    { id:"KD", short:"Kurvendisk.",    label:"Kurvendiskussion / Steckbrief",    desc:"Vollständige Kurvendiskussion eines Polynoms: Nullstellen, Extrempunkte, Wendepunkte, Monotonie, Skizze" },
    { id:"PB", short:"Schar/Param.",   label:"Parameterbestimmung / Schar",      desc:"Funktionsscharen: Extrempunkte/Nullstellen in Abhängigkeit vom Parameter bestimmen, Ortskurven" },
    { id:"MP", short:"Modellierung",   label:"Modellierung Polynom",             desc:"Sachkontext mit ganzrationaler Funktion: LGS aufstellen, Funktionsgleichung rekonstruieren" },
    { id:"GL", short:"Graph lesen",    label:"Graph lesen / Interpretieren",     desc:"Eigenschaften aus gegebenem Graphen ablesen: Monotonie, Extrem-/Wendepunkte im Sachkontext beschreiben" },
    { id:"TG", short:"Tangente",       label:"Tangente / Ableitungswert",        desc:"Tangentengleichung aufstellen, Neigungswinkel berechnen, Ableitungswert interpretieren" },
    { id:"EF", short:"e-Funktion",     label:"e-Funktion / Wachstum–Zerfall",   desc:"[Kl. 12] Exponentielles Wachstum/Zerfall mit e, ln, Halbwertszeit, Parameterbestimmung aus Messdaten" },
    { id:"EX", short:"Optimierung",    label:"Extremwert / Optimierung",         desc:"[Kl. 12] Extremwertaufgabe mit Nebenbedingung: Zielfunktion aufstellen und maximieren/minimieren" },
    { id:"IN", short:"Integral",       label:"Integralrechnung / Flächeninhalt", desc:"[Kl. 12] Stammfunktion, bestimmtes Integral, Fläche zwischen Graph und x-Achse, Fläche zwischen Graphen" }
  ],

  typenGeometrie: [
    { id:"VL", short:"Vektoren/LGS",   label:"Vektoren / LGS",              desc:"Kl. 11 (alt+neu): Linearkombination, Kollinearität, Komplanarität, Gauß-Verfahren" },
    { id:"SK", short:"Skalarprodukt",  label:"Skalarprodukt / Winkel",      desc:"Kl. 11 (alt+neu): Winkel zwischen Vektoren, Orthogonalitätsnachweis" },
    { id:"KP", short:"Kreuzprodukt",   label:"Kreuzprodukt / Fläche",       desc:"Kl. 11 (alt+neu): Normalenvektor, Dreieck-/Parallelogrammfläche, Spat-/Pyramidenvolumen" },
    { id:"GE", short:"Grd. & Ebene",   label:"Geraden & Ebenen",            desc:"Kl. 11 alt / Kl. 12 neu: Parameterform, Koordinatenform, Ebene aus drei Punkten, Spurpunkte" },
    { id:"LB", short:"Lagebezieh.",    label:"Lagebeziehungen",             desc:"Kl. 11 alt / Kl. 12 neu: parallel, Schnitt, windschief – Gerade-Gerade, Gerade-Ebene, Ebene-Ebene" },
    { id:"AB", short:"Abstand",        label:"Abstände",                    desc:"Kl. 11 alt / Kl. 12 neu: Lotfußpunkt, Abstandsberechnung per Kreuzprodukt/Formeln" },
    { id:"SW", short:"Schnittwinkel",  label:"Schnittwinkel",               desc:"Kl. 11 alt / Kl. 12 neu: Winkel zwischen zwei Ebenen, Winkel Gerade–Ebene" },
    { id:"KO", short:"Körper",         label:"Körper / Sachkontext",        desc:"Kl. 11 alt / Kl. 12 neu: Pyramide, Spat, Quader, Prisma – Volumen, Fläche, Abstände im Kontext" }
  ],

  tasks: [
    {
      id: "2024_T1_Ana_1",
      year: 2024, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Funktionenschar $p_a$ – Tangente mit Steigung $m = -2$ bei $x_0 = 2$ bestimmen",
      typen: ["PB","TG"],
      afb: [2], be: 3,
      klasse: { alt: "11+12", neu: "11" },
      k_hinweis: "Alt LP: Tangentengleichung nicht explizit in Kl. 11 (17/18). Neu LP: Parameteraufgabe + Tangentensteigung = explizit Kl. 11 (26/27).",
      tags: ["Schar","Tangente","Ableitung","Polynom"],
      imgs: ["fap-aufgaben/2024_T1_Ana_1.png"],
      tipps: [
        "Leite ab: $p_a'(x) = 2(1-a)x + 2$",
        "Setze $x_0 = 2$ ein und löse $p_a'(2) = -2$ nach $a$ auf."
      ]
    },
    {
      id: "2024_T1_Ana_2",
      year: 2024, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Tour de France – Streckenprofil anhand von Eigenschaften beschreiben",
      typen: ["GL"],
      afb: [2,3], be: 5,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Reine Interpretationsaufgabe: Monotonie, Extrempunkte und Wendepunkte im Sachkontext ablesen – in beiden Lehrplänen Kl. 11.",
      tags: ["Beschreiben","Monotonie","Sachkontext","Wendepunkt"],
      imgs: ["fap-aufgaben/2024_T1_Ana_2.png"],
      tipps: [
        "Monoton steigend $\\Leftrightarrow f'(x) > 0$ (Strecke wird steiler/flacher beschreiben).",
        "Extrempunkt = Gipfel oder Tal (höchster/tiefster Punkt der Strecke).",
        "Wendepunkt = stärkste Steigung oder stärkstes Gefälle (Änderung der Krümmung)."
      ]
    },
    {
      id: "2024_T1_Ana_3",
      year: 2024, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "$h(x) = \\tfrac{1}{2}x^3 - x^2 + 2x + 3$ – Ableitung zeigen, Extrempunkte, Nullstellen begründen",
      typen: ["KD"],
      afb: [1,2,3], be: 9,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Klassische Kurvendiskussion eines Polynoms 3. Grades – in beiden Lehrplänen vollständig Kl. 11.",
      tags: ["Kubisch","Extrempunkte","Nullstellen","Nachweis","Ableitung"],
      imgs: ["fap-aufgaben/2024_T1_Ana_3.png"],
      tipps: [
        "Ableitung: $h'(x) = \\tfrac{3}{2}x^2 - 2x + 2$. Zeige $h'(x) > 0$ für alle $x \\in \\mathbb{R}$ (Diskriminante $< 0$).",
        "Da $h$ streng monoton wächst, gibt es genau eine reelle Nullstelle."
      ]
    },
    {
      id: "2024_T1_Ana_4",
      year: 2024, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Graphen von Exponentialfunktionen $f_1$–$f_6$ zuordnen + Integral berechnen",
      typen: ["EF","IN"],
      afb: [1,2], be: 5,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "e-Funktion und bestimmtes Integral sind in beiden Lehrplänen erst Klasse 12.",
      tags: ["e-Funktion","Exponential","Zuordnung","Integral"],
      imgs: ["fap-aufgaben/2024_T1_Ana_4.png"],
      tipps: [
        "Wachstum ($a > 0$) vs. Zerfall ($a < 0$) am Vorzeichen im Exponenten erkennen.",
        "$\\int_0^1 e^x\\,dx = [e^x]_0^1 = e - 1 \\approx 1{,}72$"
      ]
    },
    {
      id: "2024_T1_Geo",
      year: 2024, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Ebene $E$, Geradenschar $g_k$ – Schnittpunkte, Senkrecht prüfen, Spat beschreiben",
      typen: ["GE","LB","KP","KO"],
      afb: [1,2,3], be: 12,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen und Geradenscharen waren Kl. 11. Neu LP (26/27): Geraden und Ebenen im Raum sind Kl. 12 (Band 2, Kap. 5).",
      tags: ["Ebene","Spurpunkte","Lage","Spat","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2024_T1_Geo.png"],
      tipps: [
        "Schnittpunkt $g_k \\cap E$: Gerade in Parameterform in Ebenengleichung einsetzen, $\\lambda$ bestimmen.",
        "Senkrecht prüfen: Richtungsvektor $\\cdot$ Normalenvektor $= 0$?",
        "Spatvolumen: $V = |\\,(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}\\,|$"
      ]
    },
    {
      id: "2024_T2_AI_1",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "$f_k(x) = kx^2 + x + 2 - 4k$ – Extrempunkte, Nullstellen in Abh. von $k$; Integral; Stammfunktion",
      typen: ["KD","PB","IN"],
      afb: [1,2,3], be: 19,
      klasse: { alt: "11+12", neu: "11+12" },
      k_hinweis: "Kl. 11 lösbar: Extrempunkt + Diskriminante/Nullstellen + Büschelpunkt (ca. 12 BE). Integral und Stammfunktion (7 BE) erst Kl. 12.",
      tags: ["Schar","Parabel","Nullstellen","Diskriminante","Integral","Büschelpunkt"],
      imgs: ["fap-aufgaben/2024_T2_AI_1.png"],
      tipps: [
        "Extrempunkt: $f_k'(x) = 2kx + 1 = 0 \\Rightarrow x = -\\tfrac{1}{2k}$. Dann $f_k(x)$ einsetzen.",
        "Diskriminante: $D = 1 + 4k(4k-2)$ für Nullstellen. $D = 0$ gibt den Grenzfall.",
        "Büschelpunkt: $k$ herausfaktorisieren – alle Parabeln schneiden sich in einem festen Punkt.",
        "Integral (Kl. 12): $\\int f_k(x)\\,dx$ mit Potenzregel."
      ]
    },
    {
      id: "2024_T2_AI_2",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Rennkurs – Polynom 3. Grades $h$ aus geometrischen Bedingungen aufstellen (LGS)",
      typen: ["MP","KD"],
      afb: [2,3], be: 7,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Steckbrief ohne Ableitungsbedingungen: LGS aus Punktbedingungen aufstellen. In beiden Lehrplänen Kl. 11.",
      tags: ["Polynom","LGS","Tangente","Sachkontext","Wendepunkt"],
      imgs: ["fap-aufgaben/2024_T2_AI_2.png"],
      tipps: [
        "$h(x) = ax^3 + bx^2 + cx + d$ hat 4 Parameter → 4 Bedingungen nötig (Punkte, Steigung, Wendestelle).",
        "Jede Bedingung ergibt eine Gleichung – LGS aufstellen, Lösen nicht gefordert!"
      ]
    },
    {
      id: "2024_T2_AI_3",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Medikament $m(t) = 7\\,e^{kt^2}$ – Startkonzentration, Parameter $k$, Halbwertszeit, max. Abnahme",
      typen: ["EF"],
      afb: [2,3], be: 17,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "e-Funktion mit zusammengesetztem Exponent, ln zur Parameterbestimmung, Produkt- und Kettenregel – ausschließlich Kl. 12.",
      tags: ["e-Funktion","Parameter","Halbwertszeit","Kettenregel","Modellierung"],
      imgs: ["fap-aufgaben/2024_T2_AI_3.png"],
      tipps: [
        "Startkonzentration: $m(0) = 7 \\cdot e^0 = 7$",
        "Parameter $k$: Messwert einsetzen, nach $k$ auflösen mit $\\ln$.",
        "Max. Abnahme = Wendepunkt von $m(t)$: $m''(t) = 0$ (Produkt- + Kettenregel)."
      ]
    },
    {
      id: "2024_T2_AII_1",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "$f_k(x) = (x-k)^2(x-k^2)$ – Nullstellen, Symmetrie, Extrempunkt; Skizze $f_1$; Flächeninhalt",
      typen: ["KD","PB","IN"],
      afb: [1,2,3], be: 23,
      klasse: { alt: "11+12", neu: "11+12" },
      k_hinweis: "Kl. 11 lösbar: Nullstellen/Vielfachheit + Monotonie + Extrempunkt + Skizze (ca. 18 BE). Flächeninhalt (Integral, 5 BE) erst Kl. 12.",
      tags: ["Schar","Nullstellen","Vielfachheit","Monotonie","Skizze","Integral"],
      imgs: ["fap-aufgaben/2024_T2_AII_1.png"],
      tipps: [
        "Nullstellen: $x = k$ (Vielfachheit 2, Berührpunkt) und $x = k^2$.",
        "Extrempunkt: $f_k'(x) = 0$, dann VZW-Kriterium.",
        "Integral (Kl. 12): $\\int |f_k(x)|\\,dx$ zwischen den Nullstellen."
      ]
    },
    {
      id: "2024_T2_AII_2",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "E-Autos $N(t) = N_0 \\cdot e^{kt}$ – Parameter aus Messdaten, Prognose 2030",
      typen: ["EF"],
      afb: [2,3], be: 8,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Parameterbestimmung mit ln, e-Funktion: in beiden Lehrplänen erst Klasse 12.",
      tags: ["e-Funktion","ln","Parameter","Messdaten","Wachstum"],
      imgs: ["fap-aufgaben/2024_T2_AII_2.png"],
      tipps: [
        "Startwert $N_0$ direkt aus den Daten ablesen ($t = 0$).",
        "$k$ bestimmen: $k = \\dfrac{\\ln(N(t_1)/N_0)}{t_1}$",
        "Prognose: $N(2030) = N_0 \\cdot e^{k \\cdot (2030 - \\text{Startjahr})}$"
      ]
    },
    {
      id: "2024_T2_AII_3",
      year: 2024, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Lippenstift-Logo – Textfeld-Fläche $A(a)$ aufstellen und maximieren",
      typen: ["EX"],
      afb: [2,3], be: 12,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Extremwertaufgabe mit Nebenbedingung: Zielfunktion aus geometrischen Bedingungen aufstellen und maximieren – in beiden Lehrplänen erst Klasse 12.",
      tags: ["Optimierung","Extremwert","Zielfunktion","Nebenbedingung","Fläche"],
      imgs: ["fap-aufgaben/2024_T2_AII_3.png"],
      tipps: [
        "Nebenbedingung aus der Geometrie aufstellen (z. B. feste Gesamtfläche oder Umfang).",
        "Zielfunktion $A(a)$ in Abhängigkeit von einem Parameter formulieren.",
        "Maximum: $A'(a) = 0$ lösen und mit $A''(a) < 0$ oder VZW-Kriterium bestätigen."
      ]
    },
    {
      id: "2024_T2_GI",
      year: 2024, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Scheinwerfer $ABCD$ – Schnittpunkt, Lotgerade zu Ebene $E$, Schnittwinkel",
      typen: ["GE","AB","SW","LB"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Lotgerade, Lotfußpunkt, Schnittwinkel waren Kl. 11. Neu LP (26/27): Geraden und Ebenen im Raum (Band 2) = Kl. 12.",
      tags: ["Ebene","Lotgerade","Lotfußpunkt","Schnittwinkel","Abstand"],
      imgs: ["fap-aufgaben/2024_T2_GI_1.png","fap-aufgaben/2024_T2_GI_2.png"],
      tipps: [
        "Lotgerade zu $E$ durch Punkt $P$: Richtungsvektor = Normalenvektor von $E$.",
        "Lotfußpunkt $F$: Gerade in Ebene einsetzen, $\\lambda$ bestimmen, $F = P + \\lambda\\,\\vec{n}$.",
        "Schnittwinkel zweier Ebenen: $\\cos\\varphi = \\dfrac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1|\\,|\\vec{n}_2|}$"
      ]
    },
    {
      id: "2024_T2_GII",
      year: 2024, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Messezelt (Pyramide $OABCS$) – Volumen, Folienkosten, Abstand, Schnittwinkel, Trapez",
      typen: ["KO","KP","AB","SW"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Pyramidenvolumen, Abstände und Schnittwinkel waren Kl. 11. Neu LP (26/27): Abstandsberechnungen und Schnittwinkel in Band 2 (Kl. 12).",
      tags: ["Pyramide","Volumen","Abstand","Schnittwinkel","Trapez","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2024_T2_GII.png"],
      tipps: [
        "Pyramidenvolumen: $V = \\tfrac{1}{3} \\cdot G \\cdot h$",
        "Seitenfläche Dreieck: $A = \\tfrac{1}{2}|\\vec{u} \\times \\vec{v}|$",
        "Abstand Punkt–Ebene: $d = \\dfrac{|\\vec{n} \\cdot (P - P_0)|}{|\\vec{n}|}$"
      ]
    },
    {
      id: "2025_T1_Ana",
      year: 2025, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "6 Kurzaufgaben: Parabel, Wertemenge, Schar $h_a'$, Exponential, Graph $f'$, e-Funktion",
      typen: ["KD","PB","GL","TG","EF"],
      afb: [1,2,3], be: 22,
      klasse: { alt: "11+12", neu: "11+12" },
      k_hinweis: "Mix: Parabel+Tangente, Wertemenge, Schar-Extrempunkte, Graph $f'$ → Kl. 11. Exponential $2^{bx+c}$, e-Funktion → Kl. 12.",
      tags: ["Parabel","Schar","Wertemenge","Exponential","e-Funktion","Kurzaufgabe"],
      imgs: ["fap-aufgaben/2025_T1_Ana_1.png","fap-aufgaben/2025_T1_Ana_2.png"],
      tipps: [
        "Tangente: $t(x) = f(x_0) + f'(x_0)\\cdot(x - x_0)$",
        "Scharparameter: Ableitung nach $x$, dann Extrembedingung nach $a$ auflösen.",
        "Graph von $f'$: $f' > 0 \\Rightarrow f$ steigt; Nullstellen von $f'$ = Extrempunkte von $f$.",
        "Aufg. 6 (Kl. 12): Produktregel auf $q(x)\\cdot e^{-2x}$ anwenden."
      ]
    },
    {
      id: "2025_T1_Geo",
      year: 2025, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Solarmodul $BADC$ – Ebene in Parameterform, Flächeninhalt, Strebe senkrecht nachweisen",
      typen: ["GE","KP","SK","KO"],
      afb: [1,2,3], be: 12,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Parameterform aus 3 Punkten + Kreuzprodukt waren Kl. 11. Neu LP (26/27): Ebenengleichungen sind Kl. 12.",
      tags: ["Parameterform","Fläche","Orthogonalität","Kreuzprodukt","Pyramide"],
      imgs: ["fap-aufgaben/2025_T1_Geo.png"],
      tipps: [
        "Parameterform: $E: P + s\\cdot(Q-P) + t\\cdot(R-P)$ mit zwei Richtungsvektoren.",
        "Fläche Parallelogramm: $A = |\\vec{u} \\times \\vec{v}|$, Dreieck: $A = \\tfrac{1}{2}|\\vec{u} \\times \\vec{v}|$",
        "Orthogonalität: Richtungsvektor der Strebe $\\cdot$ Normalenvektor der Ebene $= 0$?"
      ]
    },
    {
      id: "2025_T2_AI_1",
      year: 2025, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "$k(x) = x^2 \\cdot e^{-\\frac{1}{4}x^2}$ – Grenzwert, Extrempunkte, stärkstes Gefälle (Wendepunkt), Skizze",
      typen: ["EF","KD"],
      afb: [1,2,3], be: 21,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "e-Funktion mit zusammengesetztem Exponent, Produkt- und Kettenregel für $k'(x)$: ausschließlich Kl. 12.",
      tags: ["e-Funktion","Extrempunkte","Wendepunkt","Kettenregel","Skizze"],
      imgs: ["fap-aufgaben/2025_T2_AI_1.png"],
      tipps: [
        "Produktregel: $k'(x) = x \\cdot e^{-\\frac{1}{4}x^2} \\cdot \\left(2 - \\tfrac{1}{2}x^2\\right)$",
        "Grenzwert: $\\lim_{x \\to \\pm\\infty} x^2 \\cdot e^{-\\frac{1}{4}x^2} = 0$ (Exponential dominiert).",
        "Stärkstes Gefälle = Wendepunkt von $k$: $k''(x) = 0$ lösen."
      ]
    },
    {
      id: "2025_T2_AI_2a",
      year: 2025, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Funktionenschar $f_a(x)$ – Nullstellen und Extrempunkte in Abhängigkeit von $a$",
      typen: ["KD","PB"],
      afb: [1,2], be: 6,
      klasse: { alt: "11+12", neu: "11" },
      k_hinweis: "Alt LP: Parameteraufgaben in Differenzialrechnung nicht explizit → grenzwertig Kl. 11. Neu LP (26/27): Parameteraufgaben sind explizit Kl. 11-Kompetenz.",
      tags: ["Schar","Nullstellen","Extrempunkte","Polynom"],
      imgs: ["fap-aufgaben/2025_T2_AI_p7.png"],
      tipps: [
        "Nullstellen: $f_a(x) = 0$ faktorisieren oder Lösungsformel.",
        "Extrempunkte: $f_a'(x) = 0$ nach $x$ auflösen (abhängig von $a$).",
        "Anzahl der Extrempunkte: Diskriminante untersuchen – für welche $a \\in \\mathbb{R}$?"
      ]
    },
    {
      id: "2025_T2_AI_2b",
      year: 2025, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Straßenbau ($a = 18$): Füllvolumen, Lärmschutzwand, Tangente und Neigungswinkel",
      typen: ["MP","TG","IN"],
      afb: [2,3], be: 16,
      klasse: { alt: "11+12", neu: "11+12" },
      k_hinweis: "Kl. 11 lösbar: Extrempunkt + Tangente + Neigungswinkel (ca. 10 BE). Füllvolumen per Integral (6 BE) erst Kl. 12.",
      tags: ["Polynom","Integral","Tangente","Extrempunkt","Sachkontext"],
      imgs: ["fap-aufgaben/2025_T2_AI_p7.png"],
      tipps: [
        "Höchster Punkt = globaler Extrempunkt von $f_a$ auf dem Definitionsbereich.",
        "Neigungswinkel: $\\alpha = \\arctan(|f'(x_0)|)$",
        "Füllvolumen (Kl. 12): $\\int_a^b f(x)\\,dx$ mit $a = 18$ einsetzen."
      ]
    },
    {
      id: "2025_T2_AII_1",
      year: 2025, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "$f_a(x) = \\tfrac{1}{4}x^3 - ax^2 - 9x + 7$ – Wendestelle, $a$ aus Wendetangente, Extrempunkte, Parabel, Fläche",
      typen: ["KD","PB","MP","IN"],
      afb: [1,2,3], be: 27,
      klasse: { alt: "11+12", neu: "11+12" },
      k_hinweis: "Kl. 11 lösbar: Wendestelle + Parameter $a$ + Extrempunkte + Skizze + Parabelgleichung (ca. 22 BE). Flächeninhalt per Integral (4 BE) erst Kl. 12.",
      tags: ["Kubisch","Wendestelle","Parameterbestimmung","Parabel","Integral","Skizze"],
      imgs: ["fap-aufgaben/2025_T2_AII_1.png"],
      tipps: [
        "Wendestelle: $f_a''(x) = 0 \\Rightarrow x_W = \\tfrac{4a}{3}$",
        "$a$ aus Wendetangente: Steigung $f_a'(x_W) =$ vorgegebener Wert $\\Rightarrow a$ ausrechnen.",
        "Parabelgleichung $g(x) = px^2 + qx + r$ aus 3 Bedingungen (LGS).",
        "Fläche (Kl. 12): $\\int |f_a - g|\\,dx$ zwischen Schnittpunkten."
      ]
    },
    {
      id: "2025_T2_AII_2",
      year: 2025, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Mikroalgen Königssee / Kaisersee – Parameter $c$, $d$ aus Diagramm; Maximum $N_2$; graph. Vergleich",
      typen: ["EF"],
      afb: [2,3], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "e-Funktion für Parameterbestimmung und Extremwertberechnung mit Produkt-/Kettenregel: in beiden Lehrplänen erst Klasse 12.",
      tags: ["e-Funktion","Parameter","Maximum","Vergleich","Wachstum"],
      imgs: ["fap-aufgaben/2025_T2_AII_2.png"],
      tipps: [
        "Parameter aus Diagramm: $N(0)$ ablesen, dann $k = \\ln(N(t_1)/N_0)/t_1$.",
        "Maximum von $N_2$: $N_2'(t) = 0$ (Produkt- + Kettenregel), dann $N_2'' < 0$ prüfen."
      ]
    },
    {
      id: "2025_T2_GI",
      year: 2025, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Punkte $ABCD$ – lin. Abhängigkeit; Kletterwand: Flächeninhalt, Abstand Punkt–Gerade, Winkel",
      typen: ["VL","KP","AB","SW"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP: Lineare Abhängigkeit, Kreuzprodukt, Lotfußpunkt, Schnittwinkel waren Kl. 11. Neu LP (26/27): Abstände und Schnittwinkel sind in Band 2 (Kl. 12).",
      tags: ["Lineare Abhängigkeit","Fläche","Lotfußpunkt","Schnittwinkel","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2025_T2_GI_1.png","fap-aufgaben/2025_T2_GI_2.png"],
      tipps: [
        "Lin. Abhängigkeit: LGS aufstellen ($\\lambda\\,\\vec{a} + \\mu\\,\\vec{b} = \\vec{c}$), lösen, prüfen.",
        "Dreiecksfläche: $A = \\tfrac{1}{2}|\\vec{u} \\times \\vec{v}|$",
        "Abstand Punkt $P$ zur Geraden $g$: $d = \\dfrac{|\\overrightarrow{PQ} \\times \\vec{u}|}{|\\vec{u}|}$, wobei $Q$ auf $g$ liegt."
      ]
    },
    {
      id: "2025_T2_GII",
      year: 2025, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Berglandschaft – Ebene $E$, Mast (Lotfußpunkt), Abstand Schwerpunkt–Punkt, Ebene $G$, LGS",
      typen: ["GE","AB","VL","LB"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP: Koordinatenform aus 3 Punkten, Lotfußpunkt, LGS waren Kl. 11. Neu LP (26/27): Ebenengleichungen + Abstände in Band 2 (Kl. 12).",
      tags: ["Ebene","Koordinatenform","Lotfußpunkt","Schwerpunkt","LGS"],
      imgs: ["fap-aufgaben/2025_T2_GII.png"],
      tipps: [
        "Koordinatenform aus 3 Punkten: $\\vec{n} = (Q-P) \\times (R-P)$, dann $\\vec{n} \\cdot (X-P) = 0$.",
        "Lotfußpunkt $F$: Lotgerade (Richtung $= \\vec{n}$) in Ebene einsetzen.",
        "Schwerpunkt: $S = \\tfrac{1}{3}(A + B + C)$"
      ]
    },

    // ── 2023 ────────────────────────────────────────────────────────────────
    {
      id: "2023_T1_Ana",
      year: 2023, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Ganzrationale $f$ mit Terrassenpunkt · Ableitungsgraph $h'$ bewerten · Legehennen-Exponential $f$, $g$",
      typen: ["KD","TG","GL","EF"],
      afb: [1,2,3], be: 22,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1–2: Kurvendiskussion, Wendepunkt/Terrassenpunkt, Graph von h' → Kl. 11. Aufg. 3: Exponentialfunktionen (Ableitung) → Kl. 12.",
      tags: ["Wendepunkt","Terrassenpunkt","Ableitungsgraph","Exponential","Legehennen"],
      imgs: ["fap-aufgaben/2023_T1_Ana_1.png","fap-aufgaben/2023_T1_Ana_2.png"],
      tipps: [
        "Terrassenpunkt: $f'(x_T)=0$ ohne Vorzeichenwechsel von $f'$ – kein Extrempunkt.",
        "Aufg. 2: Aussagen über $h$ aus dem Graphen von $h'$ ableiten – $h'' < 0 \\Leftrightarrow h'$ ist fallend.",
        "Aufg. 3 (Kl. 12): Momentane Änderungsrate = Ableitung der Exponentialfunktion auswerten."
      ]
    },
    {
      id: "2023_T1_Geo",
      year: 2023, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Vektoren in $\\mathbb{R}^2$ – Winkel, Linearkombination · Dreieck $ABC$ in $\\mathbb{R}^3$ – rechter Winkel, Fläche",
      typen: ["SK","VL","KP"],
      afb: [1,2,3], be: 12,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Skalarprodukt, Linearkombination und Kreuzprodukt für Dreiecksfläche sind in beiden Lehrplänen Klasse 11.",
      tags: ["Skalarprodukt","Winkel","Linearkombination","Dreieck","Fläche"],
      imgs: ["fap-aufgaben/2023_T1_Geo.png"],
      tipps: [
        "Winkel: $\\cos(\\alpha) = \\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}$",
        "Rechter Winkel an $C$: $\\overrightarrow{CA}\\cdot\\overrightarrow{CB}=0$ nachweisen.",
        "Dreiecksfläche: $A = \\tfrac{1}{2}|\\overrightarrow{CA}\\times\\overrightarrow{CB}|$"
      ]
    },
    {
      id: "2023_T2_AI",
      year: 2023, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Teichbecken $f(x)=\\tfrac{1}{32}(x^4-14x^3+60x^2-104x+64)$ – Terrassenpunkt, Volumen, Dosenoptimierung · Bakterien $B(t)$",
      typen: ["KD","EX","IN","EF"],
      afb: [1,2,3], be: 43,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1: Terrassenpunkt, Gefälle (Kl.11); Volumen per Integral + Dosenoptimierung (Kl.12). Aufg. 2: e-Funktion B(t) mit ln → Kl.12.",
      tags: ["Terrassenpunkt","Volumen","Integral","Optimierung","Chlor","Bakterien","e-Funktion"],
      imgs: ["fap-aufgaben/2023_T2_AI_1.png","fap-aufgaben/2023_T2_AI_2.png"],
      tipps: [
        "Terrassenpunkt: $f'(x_T)=0$ aber kein VZW von $f'$ → kein Extrempunkt.",
        "Dosenvolumen $V(r)=-\\pi r^3+300r$ maximieren: $V'(r)=0$, dann $r$ bestimmen.",
        "Aufg. 2: $B(t)=200+(B_0-200)\\cdot e^{-kt}$; Konstante $k$ aus Messwert $(t=2{,}75; B=30)$ bestimmen."
      ]
    },
    {
      id: "2023_T2_AII",
      year: 2023, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Schar $f_a$ – Achsensymmetrie, Tangenten · Hochwasserdamm $h(x)$ – Volumen, Optimierung · Borkenkäfer $N(t)$",
      typen: ["KD","PB","EX","IN","EF"],
      afb: [1,2,3], be: 43,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1: f_a Achsensymmetrie + Tangentenanzahl (Kl.11+12). Aufg. 2: Integral + Optimierung (Kl.12). Aufg. 3: e-Funktion N(t) → Kl.12.",
      tags: ["Funktionenschar","Achsensymmetrie","Tangente","Integral","Optimierung","Borkenkäfer"],
      imgs: ["fap-aufgaben/2023_T2_AII_1.png","fap-aufgaben/2023_T2_AII_2.png"],
      tipps: [
        "Achsensymmetrie: $f_a(-x)=f_a(x)$ für alle $x$ nachweisen.",
        "Aufg. 2 – Volumen (Kl.12): $V=b\\cdot\\int_{-8}^{8}h(x)\\,dx$ mit gegebener Breite $b$.",
        "Aufg. 3: $N(t)=d-660\\cdot e^{-ct}$; Parameter aus $N(0)$ und Wachstumsbedingung bestimmen."
      ]
    },
    {
      id: "2023_T2_GI",
      year: 2023, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Kletterhalle $ABCDEF$ – Ebene $G$ (Koordinatenform), Neigungswinkel, Schnittgerade, Kameraabstand",
      typen: ["GE","LB","AB","KO","SK"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen, Abstände waren Kl.11. Neu LP (26/27): Ebenen und Abstände in Band 2 (Kl.12).",
      tags: ["Ebene","Koordinatenform","Neigungswinkel","Schnittgerade","Abstand","Kletterhalle"],
      imgs: ["fap-aufgaben/2023_T2_GI_1.png","fap-aufgaben/2023_T2_GI_2.png"],
      tipps: [
        "Koordinatenform aus 3 Punkten: $\\vec{n}=(Q-P)\\times(R-P)$, dann $\\vec{n}\\cdot(X-P)=0$.",
        "Neigungswinkel Ebene–Boden: $\\sin\\varphi=\\dfrac{|n_3|}{|\\vec{n}|}$ ($n_3$ = dritte Koordinate von $\\vec{n}$).",
        "Schnittgerade zweier Ebenen: Aus LGS eine Variable als Parameter wählen, Gerade in Parameterform."
      ]
    },
    {
      id: "2023_T2_GII",
      year: 2023, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Hausdach – Ebene $H$ (Koordinatenform, Neigung) · Glasdach $AEFD$ in Parameterebene $G_a$",
      typen: ["GE","LB","AB","KO"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen und Abstände in Kl.11. Neu LP (26/27): Ebenen + Lagebeziehungen in Band 2 (Kl.12).",
      tags: ["Hausdach","Ebene","Koordinatenform","Neigungswinkel","Parameterebene","Glasdach"],
      imgs: ["fap-aufgaben/2023_T2_GII.png"],
      tipps: [
        "Parameter $a$: Bedingung (Parallelität oder gemeinsamer Punkt) liefert Gleichung für $a$.",
        "Neigungswinkel Dach $H$: $\\sin\\varphi=\\dfrac{|n_3|}{|\\vec{n}_H|}$ – Winkel zur Horizontalen.",
        "Punkt $E$: $E=A+1{,}2\\cdot\\dfrac{\\overrightarrow{AB}}{|\\overrightarrow{AB}|}\\cdot|\\overrightarrow{AB}|$ – Einheitsvektor skalieren."
      ]
    },

    // ── 2022 ────────────────────────────────────────────────────────────────
    {
      id: "2022_T1_Ana",
      year: 2022, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Lineare+quadratische Funktion · Ganzrationale $f$ mit Integral · Exponential $j(x)=a{\\cdot}e^{x-2}+c$ · Schar $h_k$",
      typen: ["MP","PB","KD","GL","EF","IN"],
      afb: [1,2,3], be: 22,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1+2+4: Polynom, Schar, Graph, Integral → Kl.11+12. Aufg. 3: e-Funktion j mit Parameter a,c → Kl.12.",
      tags: ["Schnittpunkte","Scheitelpunkt","Integral","e-Funktion","Parameter","Schar"],
      imgs: ["fap-aufgaben/2022_T1_Ana_1.png","fap-aufgaben/2022_T1_Ana_2.png"],
      tipps: [
        "Aufg. 1: Parabel $p$ hat Scheitelpunkt auf $g: y=-\\tfrac{4}{3}x+8$ – zwei Bedingungen aufstellen.",
        "Aufg. 2 (Kl.12): Integral $\\int_0^4 f(x)\\,dx = 6$ als gegeben nutzen.",
        "Aufg. 3: Nullstelle von $j$: $j(x_0)=0 \\Rightarrow a\\cdot e^{x_0-2}=-c$ – mit $\\ln$ auflösen.",
        "Aufg. 4.2: Extrempunkte von $h_k$: Diskriminante von $h_k'(x)=0$ untersuchen."
      ]
    },
    {
      id: "2022_T1_Geo",
      year: 2022, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Ebene $E$ und Geradenschar $h_k$ – Schnittpunkte, Parallelität · Pyramide $ABCD$ – Lotgerade, Schnittpunkt $L$",
      typen: ["GE","LB","KP"],
      afb: [1,2,3], be: 12,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen, Gerade-Ebene-Beziehungen in Kl.11. Neu LP (26/27): Geraden und Ebenen im Raum in Kl.12.",
      tags: ["Ebene","Koordinatenform","Geradenschar","Parallelität","Pyramide","Lotgerade"],
      imgs: ["fap-aufgaben/2022_T1_Geo.png"],
      tipps: [
        "Schnittpunkt $g\\cap E$: Geradenparameter in Ebenengleichung $3x_1-5x_2-2x_3=10$ einsetzen.",
        "Parallelität $h_{-4}$ zu $E$: $\\vec{n}_E\\cdot\\vec{u}_{h_{-4}}=0$ nachweisen, dann Punkt prüfen.",
        "Lotgerade durch $D$ zur Grundfläche: Richtungsvektor = Normalenvektor von Ebene $ABC$."
      ]
    },
    {
      id: "2022_T2_AI",
      year: 2022, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Brennkurve $\\vartheta(t)=0{,}04(t^4{-}47t^3{+}528t^2{+}576t{+}500)$ · Transformation von $e^x$ · Parabel $f$, Fläche $A(k)$",
      typen: ["KD","EF","IN","EX"],
      afb: [1,2,3], be: 43,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1: Ableitung nachweisen (Kl.11), Integral + Flächenoptimierung (Kl.12). Aufg. 2: e-Funktion Transformation → Kl.12. Aufg. 3: Flächeninhalt Viereck PQCD optimieren → Kl.12.",
      tags: ["Brennkurve","Polynom","Ableitung","Integral","e-Funktion","Flächeninhalt","Optimierung"],
      imgs: ["fap-aufgaben/2022_T2_AI_1.png","fap-aufgaben/2022_T2_AI_2.png"],
      tipps: [
        "Aufg. 1.1: Ableitung $\\dot{\\vartheta}(t)=0{,}04(4t^3-141t^2+1056t+576)=0{,}04(4t^2-45t-24)(t-24)$ – nachweisen.",
        "Aufg. 1.5: Mittelwert $\\bar{\\vartheta}=\\tfrac{1}{b-a}\\int_a^b\\vartheta(t)\\,dt$.",
        "Aufg. 3 (Kl.12): $A(k)=\\int_k^{2k}f(x)\\,dx$ mit $f(x)=-\\tfrac{1}{4}x^2+x+3$."
      ]
    },
    {
      id: "2022_T2_AII",
      year: 2022, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Parabel $f_a$ – Scheitelpunkt, doppelte Nullstelle, Fläche · Gewächshaus-Optimierung $V(a)$ · Kletterrose $h(t)$ · Buffalowürmer $m(t)=10\\cdot 5^t$",
      typen: ["KD","PB","EX","EF"],
      afb: [1,2,3], be: 43,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Aufg. 1: Parabel-Scheitelpunkt (Kl.11), Flächeninhalt per Integral (Kl.12). Aufg. 2: Volumenoptimierung (Kl.12). Aufg. 3+4: e-Funktion / allg. Exponential → Kl.12.",
      tags: ["Parabel","Scheitelpunkt","Optimierung","Volumen","Kletterrose","Buffalowürmer","Exponential"],
      imgs: ["fap-aufgaben/2022_T2_AII_1.png","fap-aufgaben/2022_T2_AII_2.png"],
      tipps: [
        "Aufg. 1.1: Scheitelpunkt $E(3|4{,}5)$ gegeben → Scheitelpunktform $f_a(x)=\\tfrac{1}{a}(x-3)^2+4{,}5$.",
        "Aufg. 2 (Kl.12): $V(a)=\\tfrac{25}{4}a^2-3a^3$; Maximum via $V'(a)=0$.",
        "Aufg. 3: $h(t)=0{,}4+0{,}071\\cdot e^{ct}$, Punkt $P(2|1)$ einsetzen → $c$ bestimmen.",
        "Aufg. 4: $\\Delta m(t)=m(t)-m(t-1)=10\\cdot 5^t-10\\cdot 5^{t-1}=10\\cdot 5^{t-1}\\cdot 4=8\\cdot 5^t$."
      ]
    },
    {
      id: "2022_T2_GI",
      year: 2022, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Geradenschar $h_k$ und Ebene $E$ – Schnittpunkt $S$, Lagebeziehung · Klettergerüst-Plattform $P_1P_2P_3P_4$",
      typen: ["GE","LB","KP","KO"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Geraden, Ebenen, Lagebeziehungen in Kl.11. Neu LP (26/27): Abstände und Lagebeziehungen in Kl.12.",
      tags: ["Geradenschar","Ebene","Lagebeziehung","Klettergerüst","Normalenvektor","Dreiecksfläche"],
      imgs: ["fap-aufgaben/2022_T2_GI_1.png","fap-aufgaben/2022_T2_GI_2.png"],
      tipps: [
        "Schnittpunkt $g\\cap h_k$: beide Parametrisierungen gleichsetzen, LGS lösen.",
        "Lage $h_{-4}$ zur Ebene $E$: $\\vec{n}_E\\cdot\\vec{u}_{h_{-4}}=0$ (parallel), dann Punkt prüfen → echte Parallele.",
        "Netz-Flächeninhalt (Aufg. 2.2): $A=\\tfrac{1}{2}|\\vec{u}\\times\\vec{v}|$ für Dreieck $N_1N_2N_3$."
      ]
    },
    {
      id: "2022_T2_GII",
      year: 2022, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Architektin-Haus (Quader + Prisma) – Volumen, Dachneigung $\\alpha$, Grundstücksgerade $g$, Zwischendecke Ebene $Z$",
      typen: ["GE","LB","AB","SW","KO"],
      afb: [2,3], be: 23,
      klasse: { alt: "11", neu: "12" },
      k_hinweis: "Alt LP (17/18): Gesamtvolumen, Geraden-Lagebeziehung, Schnittebene in Kl.11. Neu LP (26/27): Abstände und Schnittgeraden in Kl.12.",
      tags: ["Quader","Prisma","Volumen","Dachneigung","Grundstücksgerade","Zwischendecke"],
      imgs: ["fap-aufgaben/2022_T2_GII.png"],
      tipps: [
        "Gesamtvolumen: $V=V_{Quader}+V_{Prisma}=l\\cdot b\\cdot h_{Quader}+\\tfrac{1}{2}\\cdot G_{Dreieck}\\cdot l$.",
        "Dachneigungswinkel: $\\cos\\alpha=\\dfrac{|\\vec{n}_D\\cdot\\vec{n}_{Boden}|}{|\\vec{n}_D|\\cdot 1}$.",
        "Schnittgerade $Z\\cap G$: LGS aus beiden Ebenengleichungen, Parameter wählen."
      ]
    }
  ]
};
