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
    { id:"GE", short:"Grd. & Ebene",   label:"Geraden & Ebenen",            desc:"Kl. 12 (alt+neu): Parameterform, Koordinatenform, Ebene aus drei Punkten, Spurpunkte" },
    { id:"LB", short:"Lagebezieh.",    label:"Lagebeziehungen",             desc:"Kl. 12 (alt+neu): parallel, Schnitt, windschief – Gerade-Gerade, Gerade-Ebene, Ebene-Ebene" },
    { id:"AB", short:"Abstand",        label:"Abstände",                    desc:"Kl. 12 (alt+neu): Lotfußpunkt, Abstandsberechnung per Kreuzprodukt/Formeln" },
    { id:"SW", short:"Schnittwinkel",  label:"Schnittwinkel",               desc:"Kl. 12 (alt+neu): Winkel zwischen zwei Ebenen, Winkel Gerade–Ebene" },
    { id:"KO", short:"Körper",         label:"Körper / Sachkontext",        desc:"Kl. 12 (alt+neu): Pyramide, Spat, Quader, Prisma – Volumen, Fläche, Abstände im Kontext" }
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
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis 2024 3 Gegeben ist die Funktion pa:X }—>(1fa)\'x2 +2x mit der Definitionsmenge Dpa= IR und mit reellem Parameter ae ]1;%[. Bestimmen Sie denjenigen Wert für a, für den der Graph von p an der Stelle xg =2 eine Tangente mit der Steigung mg =-2 besitzt. Die Tour de France ist das weltweit berühmteste Straßenradrennen, das meist in 20 Tagesetappen gefahren wird. Das Streckenprofil eines Teilabschnitts einer bestimmten Tagesetappe wird näherungsweise durch die ganzrationale Funktion f:xn—>f(x) mit der Definitionsmenge Df= [O; 10] beschrieben. Dabei entspricht x der in horizontaler Richtung zurückgelegten Strecke in der Einheit Kilometer. f(x) gibt die Höhe in der Einheit Meter über dem Meeresspiegel an. Von der Funktion f sind folgende vier Eigenschaften |, II, IIl und IV bekannt: )) f/(x)>0 für xe]0;1[ ) Der Graph von f hat zusätzlich zu den Randextrempunkten nur bei x1 =1 und bei x> =5 weitere relative Extrempunkte. l) X0 =2,3 ist die einzige Nullstelle der zweiten Ableitungsfunktion f// von der Funktion f. Dabei wechselt / (X) bei xg =2,3 das Vorzeichen. f(10)-f(5) IV} _ ) 10-5 — =0,007 Beschreiben Sie den Streckenverlauf entlang des betrachteten Teilabschnitts anhand der obigen vier Eigenschaften im Sachkontext. 13 3.0 Gegeben ist die reelle Funktion h:x—>-3X +x? +2x+3 mit der Definitionsmenge 3.1 3.2 3.3 2 Dp= [O;oo[. Ihr Graph wird mit Gp bezeichnet. Zeigen Sie, dass für die 1. Ableitung von h gilt: h/(x)=f%\'(x+%jr(xfz). Ermitteln Sie jeweils die Art und die Koordinaten aller relativen Extrempunkte des Graphen Gy von h. Begründen Sie, ohne die Gleichung h(x):o zu lösen, z. B. mithilfe der bisherigen Ergebnisse, wie viele Nullstellen die Funktion h besitzt. Fortsetzung siehe nächste Seite',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis 2024 3 Gegeben ist die Funktion pa:X }—>(1fa)\'x2 +2x mit der Definitionsmenge Dpa= IR und mit reellem Parameter ae ]1;%[. Bestimmen Sie denjenigen Wert für a, für den der Graph von p an der Stelle xg =2 eine Tangente mit der Steigung mg =-2 besitzt. Die Tour de France ist das weltweit berühmteste Straßenradrennen, das meist in 20 Tagesetappen gefahren wird. Das Streckenprofil eines Teilabschnitts einer bestimmten Tagesetappe wird näherungsweise durch die ganzrationale Funktion f:xn—>f(x) mit der Definitionsmenge Df= [O; 10] beschrieben. Dabei entspricht x der in horizontaler Richtung zurückgelegten Strecke in der Einheit Kilometer. f(x) gibt die Höhe in der Einheit Meter über dem Meeresspiegel an. Von der Funktion f sind folgende vier Eigenschaften |, II, IIl und IV bekannt: )) f/(x)>0 für xe]0;1[ ) Der Graph von f hat zusätzlich zu den Randextrempunkten nur bei x1 =1 und bei x> =5 weitere relative Extrempunkte. l) X0 =2,3 ist die einzige Nullstelle der zweiten Ableitungsfunktion f// von der Funktion f. Dabei wechselt / (X) bei xg =2,3 das Vorzeichen. f(10)-f(5) IV} _ ) 10-5 — =0,007 Beschreiben Sie den Streckenverlauf entlang des betrachteten Teilabschnitts anhand der obigen vier Eigenschaften im Sachkontext. 13 3.0 Gegeben ist die reelle Funktion h:x—>-3X +x? +2x+3 mit der Definitionsmenge 3.1 3.2 3.3 2 Dp= [O;oo[. Ihr Graph wird mit Gp bezeichnet. Zeigen Sie, dass für die 1. Ableitung von h gilt: h/(x)=f%\'(x+%jr(xfz). Ermitteln Sie jeweils die Art und die Koordinaten aller relativen Extrempunkte des Graphen Gy von h. Begründen Sie, ohne die Gleichung h(x):o zu lösen, z. B. mithilfe der bisherigen Ergebnisse, wie viele Nullstellen die Funktion h besitzt. Fortsetzung siehe nächste Seite',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis 2024 3 Gegeben ist die Funktion pa:X }—>(1fa)\'x2 +2x mit der Definitionsmenge Dpa= IR und mit reellem Parameter ae ]1;%[. Bestimmen Sie denjenigen Wert für a, für den der Graph von p an der Stelle xg =2 eine Tangente mit der Steigung mg =-2 besitzt. Die Tour de France ist das weltweit berühmteste Straßenradrennen, das meist in 20 Tagesetappen gefahren wird. Das Streckenprofil eines Teilabschnitts einer bestimmten Tagesetappe wird näherungsweise durch die ganzrationale Funktion f:xn—>f(x) mit der Definitionsmenge Df= [O; 10] beschrieben. Dabei entspricht x der in horizontaler Richtung zurückgelegten Strecke in der Einheit Kilometer. f(x) gibt die Höhe in der Einheit Meter über dem Meeresspiegel an. Von der Funktion f sind folgende vier Eigenschaften |, II, IIl und IV bekannt: )) f/(x)>0 für xe]0;1[ ) Der Graph von f hat zusätzlich zu den Randextrempunkten nur bei x1 =1 und bei x> =5 weitere relative Extrempunkte. l) X0 =2,3 ist die einzige Nullstelle der zweiten Ableitungsfunktion f// von der Funktion f. Dabei wechselt / (X) bei xg =2,3 das Vorzeichen. f(10)-f(5) IV} _ ) 10-5 — =0,007 Beschreiben Sie den Streckenverlauf entlang des betrachteten Teilabschnitts anhand der obigen vier Eigenschaften im Sachkontext. 13 3.0 Gegeben ist die reelle Funktion h:x—>-3X +x? +2x+3 mit der Definitionsmenge 3.1 3.2 3.3 2 Dp= [O;oo[. Ihr Graph wird mit Gp bezeichnet. Zeigen Sie, dass für die 1. Ableitung von h gilt: h/(x)=f%\'(x+%jr(xfz). Ermitteln Sie jeweils die Art und die Koordinaten aller relativen Extrempunkte des Graphen Gy von h. Begründen Sie, ohne die Gleichung h(x):o zu lösen, z. B. mithilfe der bisherigen Ergebnisse, wie viele Nullstellen die Funktion h besitzt. Fortsetzung siehe nächste Seite',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis (Fortsetzung) 2024 3 22 4 In der nachfolgenden Abbildung (unten links) sind Ausschnitte der Graphen GA,Gg,Gc von in ganz IR _definierten Exponentialfunktionen dargestellt. Zudem sind Zuordnungsvorschriften von sechs Funktionen f} bis fg angegeben. Zu jedem der drei Graphen Ga ,Gg und Gc gehört genau eine der sechs Funktionen f} bis fg. Ordnen Sie in der untenstehenden Tabelle die Graphen GA,Gg und Gc der jeweils passenden Funktion zu. Hinweis: Eine richtige Zuordnung geht mit +1 BE, eine falsche Zuordnung mit —1 BEund eine fehlende Zuordnung mit 0 BE in die Wertung ein. Im ungünstigsten Fall wird die Aufgabe mit 0 BE bewertet. Funktion Graph 1:x>—>3f3x x 3-e7* 3:X}—)4>ex_2 4:X‚_>‚(ex‚5) 5 :XxH37X+3 f 1 Xx > 0,25-2%1 Gegeben ist die Funktion g:x — %e°‘sx_1 mit der Definitionsmenge Dg =IR. 2 Berechnen Sie das bestimmte Integral Jg(x) dx. 0 Lineare Algebra und analytische Geometrie: siehe folgende Seite',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen und Geradenscharen waren Kl. 11. Neu LP (26/27): Geraden und Ebenen im Raum sind Kl. 12 (Band 2, Kap. 5).",
      tags: ["Ebene","Spurpunkte","Lage","Spat","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2024_T1_Geo.png"],
      text: 'T12 - Teil 1: ohne Hilfsmittel - Lineare Algebra und analytische Geometrie 2024 1.0 1.1 1.2 1.3 In einem kartesischen Koordinatensystem des IR3 sind die Ebene E: X1 +2Xx2 -x3 =4 und —3 —2 die Geradenschar g :X=| 4 |+r:. -k-2 | mit r,k eIR gegeben. 1 k Bestimmen Sie die Schnittpunkte der Ebene E mit den Koordinatenachsen und veranschaulichen Sie die Lage der Ebene E in dem nachfolgend abgebildeten Koordinatensystem. A x Überprüfen Sie, ob ein Wert für k existiert, so dass die Gerade gx die Ebene E senkrecht schneidet. Die Ebene F beinhaltet die x3 -Achse und steht senkrecht auf der Ebene E. Geben Sie eine Gleichung der Ebene F in Parameterform an. Für die linear unabhängigen Vektoren ä, 5 und € im R3 gelten zugleich die folgenden drei Bedingungen (1), (2) und (3): (3) Die drei Vektoren ä, b und € spannen einen Spat auf. Dabei spannen die Vektoren ä und b die Grundfläche des Spats auf. Beschreiben Sie die Form des Spats und legen Sie nachvollziehbar dar, wie Sie zu Ihren Aussagen kommen.',
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
      text: '1.0 1.1 1.2 1.3 Gegeben ist die reelle Funktion fx mit der Funktionsgleichung fk(x)=kxz+xf2f4k mit k IR und der Definitionsmenge DA=IR. Der Graph wird mit Gfk bezeichnet. Geben Sie mit kurzer Begründung an, für welche Werte von k der Graph Gfk genau einen Extrempunkt besitzt. Bestimmen Sie in Abhängigkeit von k die Anzahl der Nullstellen von f . Es gibt zwei Punkte A und B, die unabhängig vom Wert des Parameters k immer auf Gfk liegen. Bestimmen Sie die Koordinaten von A und B. Für die weiteren Teilaufgaben gilt k=0,25. Die Abbildung zeigt einen Ausschnitt von Gfo 25° 1.4 1.5 3 Berechnen Sie _[f0’25(x)dx und interpretieren Sie das Ergebnis geometrisch. Markieren —3 Sie dazu geeignete Flächenstücke in der Abbildung. Die Funktion F ist eine Stammfunktion von fo„5 mit Df=IR, ihr Graph wird mit Gf bezeichnet. Geben Sie die Wendestelle von Gr an und begründen Sie die Existenz der Wendestelle anhand des Graphen Gfo 25 in der vorliegenden Abbildung. Fortsetzung siehe nächste Seite',
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
      text: '2.0 2.1 2.2 Die Abbildung zeigt eine Karte des Rundkurses einer Rennstrecke. In die Karte wurde ein kartesisches Koordinatensystem so gelegt, dass die x-Achse von Westen nach Osten und die y-Achse von Süden nach Norden verläuft. Alle Koordinaten sind Längenangaben in der Einheit Kilometer. Während einer Runde passiert ein Rennwagen nacheinander die Punkte P, Q und R. Bestimmte achsenparallele Abstände zwischen diesen Punkten sind auf der Karte eingezeichnet, wobei diese Angaben ebenfalls in der Einheit Kilometer sind. Auf das Mitführen von Einheiten kann bei den Berechnungen verzichtet werden. —— Start/Ziel Erläutern Sie kurz, warum es nicht möglich ist, den kompletten Rundkurs nur mithilfe einer einzigen Funktion h zu beschreiben. Im Punkt Q wechselt der Straßenverlauf von einer Rechts- in eine Linkskurve, außerdem ist R der südlichste Punkt des Rundkurses. Im vorgegebenen Koordinatensystem lässt sich der Streckenabschnitt von P über Q bis R durch den Graphen einer Funktion h beschreiben. Die Funktion h:xt—>ax?+bx? +cx+d mit a,b,c,delR ist eine ganzrationale Funktion dritten Grades mit der Definitionsmenge Dy =[f4;14]‚ Geben Sie ein lineares Gleichungssystem mit vier Gleichungen mit den Unbekannten a, b, c und d an, mit dessen Hilfe Sie eine Funktionsgleichung von h eindeutig ermitteln können. Hinweis: Das Gleichungssystem muss nicht gelöst werden. Fortsetzung siehe nächste Seite',
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
      text: '43| 3.0 3.1 3.2 Die Hersteller X und Y stellen jeweils ein Medikament mit demselben Hauptwirkstoff her. In einer Vergleichsstudie wird Probanden zum Zeitpunkt t=0 eine bestimmte Menge des Medikaments von X oder Y injiziert. Die Konzentration des Medikaments im Blutplasma eines Probanden in Abhängigkeit von der Zeit t kann modellhaft durch die Funktion 2 m:ti>7.e*t ‚mit k,telR, k<0 und t>0 beschrieben werden. Dabei wird die Konzentration m(t) des Medikaments zum Zeitpunkt t in Mikrogramm pro Milliliter (ä—%) und die seit der Injektion verstrichenen Zeit t in Stunden (h) seit der Injektion gemessen. Weil die Hersteller jeweils andere Zusatzstoffe beimengen, werden die zwei Medikamente unterschiedlich schnell abgebaut, was sich in verschiedenen Werten für k niederschlägt. Jedes Medikament wird aber nach langer Zeit nahezu vollständig abgebaut sein. Der Zeitraum, in dem sich die Konzentration des Medikaments im Blutplasma halbiert, heißt Plasmahalbwertszeit. Ergebnisse sind sinnvoll zu runden. Auf das Mitführen der Einheiten kann während den Berechnungen verzichtet werden. Bestimmen Sie die Konzentration des Medikaments im Blutplasma unmittelbar nach der Injektion des Medikaments (zum Zeitpunkt t=0). Untersuchen Sie weiterhin, ob die verwendete Modellfunktion den Abbau des Medikaments nach langer Zeit richtig beschreibt. Bei dem Medikament des Herstellers X hat die Konzentration genau fünf Stunden nach der Injektion noch den Wert 1,5 rtng/ Ermitteln Sie für dieses Medikament den Wert von k. Für die folgenden Teilaufgaben wird das Medikament des Herstellers Y betrachtet, für das k=-0,08 gilt. Es ist also: m(t)=7- 3.3 3.4 2 e4],08 n Ermitteln Sie für dieses Medikament die Plasmahalbwertszeit in Minuten. Zeigen Sie, dass die Konzentration fortlaufend abnimmt, und bestimmen Sie den Betrag der maximalen Abnahmegeschwindigkeit der Konzentration des Medikaments im Blutplasma. . 2 [ Mögliches Teilergebnis: m(t)=f1,12\'t-efo‘og’t ]',
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
      text: '1.0 1.1 1.2 Gegeben ist die reelle Funktion fx:x }—>(xfk)2 \'(x2 fk) mit k eIR und Df, EIR. Begründen Sie die folgenden Aussagen: a) Für k < 0 berührt der Graph von fr die x-Achse in genau einem Punkt. b) Für kelR\\{0} ist der Graph der Funktion fx weder punktsymmetrisch zum Ursprung noch achsensymmetrisch zur y-Achse. Bestimmen Sie in Abhängigkeit des Parameters k für k>0 alle Nullstellen von fx und geben Sie jeweils die Vielfachheit der Nullstelle an. In den weiteren Teilaufgaben wird die Funktion f} :x }—>(xfl)2 -(x2 ‚1) betrachtet. Es gilt: f}(x)=x* -2x? +2x-1. 1.3 1.4 1.5 2.0 2.1 Untersuchen Sie das Monotonieverhalten des Graphen G£ der Funktion f} und ermitteln Sie die Koordinaten und die Art des relativen Extrempunktes von Gf1 . Zeichnen Sie unter Verwendung der bisherigen Ergebnisse und geeigneter weiterer Funktionswerte den Graphen Gg im Bereich —-1<x<2 in ein kartesisches Koordinatensystem. Maßstab auf beiden Achsen: 1LE=2 cm. Betrachtet wird nun eine weitere Funktion p:x|—)x2fl mit der Definitionsmenge Dp=IR. Ihr Graph Gp und der Graph Gf1 schließen im I. und IV. Quadranten je ein endliches Flächenstück ein. Zeichnen Sie zunächst Gp in das vorhandene Koordinatensystem aus Aufgabe 1.4 ein und berechnen Sie anschließend die Maßzahl des gesamten Flächeninhalts der beiden Flächenstücke. Die Integrationsgrenzen dürfen aus der Zeichnung abgelesen werden. Um die Entwicklung der Anzahl der zugelassenen E-Autos in Deutschland ab 2014 genauer zu untersuchen, wird folgendes Modell angesetzt: N(t)= Ng -e“* mit No,k, teIR und t>0 Hierbei ist t die Zeit in Jahren, wobei t=0 dem Beginn des Jahres 2014 entspricht und N(t) die Gesamtanzahl der in Deutschland zugelassenen E-Autos in Tausend zur Zeit t ist. Das Umweltbundesamt ermittelte jeweils zu Jahresbeginn die Anzahl an zugelassenen E-Autos in Tausend: Jahr 2014 | 2015 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 Anzahl 12 19 26 34 54 83 137 | 309 | 618 | 1013 (Quelle: Bundesministerium für Digitales und Verke',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln - Analysis II (Fortsetzung) 2024 3 \\423| 2.2 3.0 3.1 3.2 3.3 Nun gilt: N(t)= 12:e%>t, Die Bundesregierung hat sich als Ziel gesetzt, dass im Jahr 2030 insgesamt 15 Millionen E-Autos zugelassen sind. Bestimmen Sie, in welchem Kalenderjahr nach diesem Modell die 15 Millionen Marke erreicht werden würde. Für eine Lippenstiftmarke soll ein passendes Werbelogo designt werden. Die zugrundeliegende Kontur der Lippenform lässt sich durch die Graphen G# bzw. Gg zweier ganzrationaler Funktionen f bzw. g mit f(x)=fäx4 +%x2+ 2 bzw. g(x)=%x2 —2 auf dem Intervall Df =Dg =[‚ 4; 4] beschreiben. Es soll nun ein achsenparalleles rechteckiges Textfeld für den Werbetext platziert werden. Die Eckpunkte des Rechtecks liegen auf den Graphen von f bzw. g. Das Rechteck soll dabei an keiner Stelle außerhalb der Lippenkontur liegen. Koordinaten sind Längenangaben in der Einheit Dezimeter. Die Distanz a mit aelR und a>0 ist wie in der Abbildung gezeigt festgelegt. Zeigen Sie zunächst, dass sich die Maßzahl A(a) des Flächeninhalts des Textfeldes in Abhängigkeit von a durch A(a)=- ?lee\\5 +8a darstellen lässt. Weisen Sie nach, dass DA=[\\/5; 4[ als maximale Definitionsmenge der Funktion A: at>A(a) anzunehmen ist. Bestimmen Sie den Wert für a so, dass die Fläche des Textfeldes einen maximalen Inhalt annimmt. Berechnen Sie für diesen Fall die Abmessungen des Rechtecks. Runden Sie auf Zentimeter genau.',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln - Analysis II (Fortsetzung) 2024 3 \\423| 2.2 3.0 3.1 3.2 3.3 Nun gilt: N(t)= 12:e%>t, Die Bundesregierung hat sich als Ziel gesetzt, dass im Jahr 2030 insgesamt 15 Millionen E-Autos zugelassen sind. Bestimmen Sie, in welchem Kalenderjahr nach diesem Modell die 15 Millionen Marke erreicht werden würde. Für eine Lippenstiftmarke soll ein passendes Werbelogo designt werden. Die zugrundeliegende Kontur der Lippenform lässt sich durch die Graphen G# bzw. Gg zweier ganzrationaler Funktionen f bzw. g mit f(x)=fäx4 +%x2+ 2 bzw. g(x)=%x2 —2 auf dem Intervall Df =Dg =[‚ 4; 4] beschreiben. Es soll nun ein achsenparalleles rechteckiges Textfeld für den Werbetext platziert werden. Die Eckpunkte des Rechtecks liegen auf den Graphen von f bzw. g. Das Rechteck soll dabei an keiner Stelle außerhalb der Lippenkontur liegen. Koordinaten sind Längenangaben in der Einheit Dezimeter. Die Distanz a mit aelR und a>0 ist wie in der Abbildung gezeigt festgelegt. Zeigen Sie zunächst, dass sich die Maßzahl A(a) des Flächeninhalts des Textfeldes in Abhängigkeit von a durch A(a)=- ?lee\\5 +8a darstellen lässt. Weisen Sie nach, dass DA=[\\/5; 4[ als maximale Definitionsmenge der Funktion A: at>A(a) anzunehmen ist. Bestimmen Sie den Wert für a so, dass die Fläche des Textfeldes einen maximalen Inhalt annimmt. Berechnen Sie für diesen Fall die Abmessungen des Rechtecks. Runden Sie auf Zentimeter genau.',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Lotgerade, Lotfußpunkt, Schnittwinkel waren Kl. 11. Neu LP (26/27): Geraden und Ebenen im Raum (Band 2) = Kl. 12.",
      tags: ["Ebene","Lotgerade","Lotfußpunkt","Schnittwinkel","Abstand"],
      imgs: ["fap-aufgaben/2024_T2_GI_1.png","fap-aufgaben/2024_T2_GI_2.png"],
      text: '1.0 Für die Bühnenbeleuchtung einer Theateraufführung an einer Beruflichen Oberschule wird ein Scheinwerfer (siehe Bild 1) installiert. Die Position des Scheinwerfers und der von ihm ausgeleuchtete Raum auf der Bühne wird modellhaft in einem kartesischen Koordinatensystem des IR? beschrieben. Die wird durch den X1-X2-Ebene des Koordinatensystems Bühnenboden festgelegt. Die rechteckige Glasfläche des Scheinwerfers hat die Ecken A(2/031), B(-1|2/30) , C(-2[0]29) und D(1k2‘30)‚ ®S Die Vollausleuchtung mit dem Scheinwerfer ohne Berück- sichtigung des Halbschattens kann in guter Näherung durch den Körper PQRTABCD (siehe Bild 2) beschrieben werden. @äo)‚ 3 |3 a(6,5/24,5/0), R(-2|5,8/0) und T(23,5/-9,5/0) sind die Die Punkte P[ Eckpunkte der ausgeleuchte- ten Fläche PQRT auf dem Bühnenboden. Die Koordi- naten sind Längenangaben in der Einheit Dezimeter (dm). Auf die Mitführung von Einheiten während der Rechnungen kann verzichtet werden. Die Ergebnisse sind sinnvoll zu runden. 1.1 Die Gerade 8ggg verläuft durch die Punkte Q und B. Die Gerade gprc verläuft durch die Punkte R und C. Die Geraden ggg und grc schneiden sich im Punkt S. Berechnen Sie die Koordinaten des Punktes S. [ Ergebnis: S(-2|-1]34) ] Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I (Fortsetzung) 2024 8| 1.2 Stellen Sie eine Gleichung der Lotgeraden ( zur Ebene E, in der sich die Glasfläche ABCD befindet, durch den Punkt S auf und bestimmen Sie den Abstand des Punktes S zur Ebene E. 0 —2 [ Mögliches Teilergebnis: (:X=| 0 |+t| —1 ‚telR] 30 4 4 1.3 Die Diagonalen des Vierecks PQRT schneiden sich im Punkt M(15|7,5/0) (Nachweis nicht erforderlich). Zeigen Sie, dass der Punkt M auf der Geraden ( liegt. Berechnen Sie die Größe des Schnittwinkels der Geraden / mit der x1-x2z-Koordinatenebene. 5| 1.4 Der Scheinwerfer besitzt einen Flügelbegrenzer (siehe Bild 3). Der einzustellende Winkel soll für den rechten rechter Flügel Flügel berechnet werden. Vereinfac',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Pyramidenvolumen, Abstände und Schnittwinkel waren Kl. 11. Neu LP (26/27): Abstandsberechnungen und Schnittwinkel in Band 2 (Kl. 12).",
      tags: ["Pyramide","Volumen","Abstand","Schnittwinkel","Trapez","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2024_T2_GII.png"],
      text: '23| 1.0 Für einen chen plant ein Veranstalter ein Zelt, das in einem kartesischen Koordinatensystem des IR (vgl. Abbildung) modellhaft durch eine Pyramide OABCS Stand auf der , nächsten Reisemesse in Mün- S(5/5/9,3) 3 mit quadratischer Grundfläche Karssssnnnfennnnn X dargestellt wird. Die Zeltwand OAS liegt in der Ebene D(10/3,5|0) E(10|6,5/0) B(10|10|0) H:—93x> +50x3 =0. Die Koor- xı dinaten der Punkte sind Längenangaben in der Einheit Meter. Auf die Mitführung von Einheiten kann bei den Rechnungen verzichtet werden. Runden Sie Ihre Ergebnisse gegebenenfalls auf zwei Nachkommastellen. 1.1 Auch nach der Corona-Pandemie wird in den Zelten auf der Reisemesse auf eine Beschrän ung d er Anzahl der sich gleichzeitig im Zelt aufhaltenden Personen geachtet. Die Kenndaten der eingebauten Lüftungsanlage geben für das hier betrachtete Zelt eine Obergren Personen ze von sich g 0,2 Personen pro Kubikmeter Raumvolumen vor. Ermitteln Sie, wie viele eichzeitig im betrachteten Zelt aufhalten dürfen. 1.2.0 Die Zeltwände dienen als Projektionsflächen für Beamer, die außerhalb des Zelts montiert sind. Auf die Ze twand, an der sich der Zelteingang befindet, wird nicht projiziert. 1.2.1 Damit die Projektionen gut sichtbar sind, werden die drei Zeltwände vollständig mit einer speziellen Folie die hierfül r anfa| beklebt. Ein Quadratmeter dieser Folie kostet 15,30 Euro. Ermitteln Sie lenden Materialkosten. 1.2.2 Das Objektiv des Beamers, welcher auf die Zeltwand OAS projiziert, befindet sich im Punkt P(5‘0‘4). Laut Herstellerangabe soll zwischen dem Objektiv des Beamers und der Projektionsfläche ein Mindestabstand von 1,8 Meter eingehalten werden. Überprüfen Sie rechnerisch, ob diese Vorgabe hier erfüllt ist. 1.3 Jeweils zwei benachbarte Zeltwände schließen im Inneren des Zelts einen stumpfen Winkel ein. Ermitteln Sie die Größe dieses Winkels. 1.4 Der Zelteingang DEFG hat eine Durchgangshöhe von 2,79 m. Der Punkt G liegt auf der Strecke DS und der Punkt F(8,5‘6‚05| 2,79) auf der Strecke E',
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
      text: 'Der Graph Gp der quadratischen Funktion p mit der Definitionsmenge Dp= IR ist zur y - Achse symmetrisch und besitzt bei x; =-2 die Tangente mit der Gleichung y=x+3. Bestimmen Sie einen möglichen Funktionsterm vonp. Eine ganzrationale Funktion g mit der Definitionsmenge Dg = IR hat die Wertemenge Wg =[1‚\'oo[ und ihr Graph besitzt genau zwei Tiefpunkte. Geben Sie einen möglichen Funktionsterm von g an. Die Funktion hé ZXI—>X2*(a+Z)-X+Za mit der Definitionsmenge Dh/ =R ist die erste a Ableitungsfunktion einer Funktion h, mit der Definitionsmenge Dha=lR und aelR. Bestimmen Sie die Anzahl der Extrempunkte des Graphen von h; in Abhängigkeit von a. Die folgende Abbildung zeigt einen Ausschnitt des Graphen G; der reellen Funktion . 1 j:x> R»2bx +C mit der Definitionsmenge Di= IR sowie die Asymptote des Graphen GJ- , wobei n, b, ceIN;n#0. Ermitteln Sie mithilfe der Abbildung die Werte für die Parameter n, b und c. Die Koordinaten der Punkte P und Q können der Abbildung entnommen werden. Asymptote 0,5 +>x -2,5 -2 -15| -1 -0,5|0 05 1 1,5 Fortsetzung siehe nächste Seite T12 - Teil 1: ohne Hilfsmittel - Analysis (Fortsetzung) 2025 4 5 Die nachfolgende Abbildung zeigt einen Ausschnitt des Graphen Gf/ der ersten Ableitungsfunktion f/ einer Funktion f. Die Definitionsmengen sind Df =Df/ =IR. Beurteilen Sie, ob die folgenden Aussagen jeweils wahr oder falsch sind. 1 A: If/(x)dx >1 —1 B: f//(0) >0 4| 6 Gegeben ist die Funktion q:x>—>(3xf2)-efzx mit der Definitionsmenge Dg =IR. Berechnen Sie die Stelle x+, an der gilt: q(xt)=q/ (xt) 22 Lineare Algebra und analytische Geometrie: siehe folgende Seite',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Parameterform aus 3 Punkten + Kreuzprodukt waren Kl. 11. Neu LP (26/27): Ebenengleichungen sind Kl. 12.",
      tags: ["Parameterform","Fläche","Orthogonalität","Kreuzprodukt","Pyramide"],
      imgs: ["fap-aufgaben/2025_T1_Geo.png"],
      text: '12 1.0 1.1 1.2 1.3 2.0 2.1 2.2 Die nebenstehende Abbildung zeigt modellhaft ein rechteckiges Solarmodul BADC in einem kar- C(20 | 5 | 12) tesischen Koordinatensystem des X3 IR?. Das Solarmodul ist auf dem Flachdach eines Hauses aufge- stellt. Das Flachdach liegt in der X1-X2-Koordinatenebene. Gegeben sind die Endpunkte P(15|2|0) und Q(15|81|2,5) einer Strebe, die das Modul stützt. Die Koordinaten der Punkte sind Längenangaben in der Einheit Dezimeter. Auf die Mit- führung von Einheiten bei den Rechnungen kann verzichtet werden. A(10 | 10 [ 0) B(20 | 10 | 0) X1 Geben Sie die Koordinaten des Punktes D an und bestimmen Sie nachvollziehbar eine Gleichung der Ebene E, in der das Solarmodul liegt, in Parameterform. 10 10 0 [ mögliches Teilergebnis: E:X=/| 10 |+s- 0 |+t-|-5 |mits,telR ] 0 0 12 Berechnen Sie die Maßzahl des Flächeninhalts des Solarmoduls. Zeigen Sie, dass die Strebe ﬁ senkrecht auf der Ebene E (mit E aus Teilaufgabe 1.1) steht. Im IR? ist die vierseitige Pyramide ABCDS mit der rechteckigen Grundfläche ABCD gegeben (siehe Abbildung). Ferner sind die Vektoren ü=ﬁ, V=AD und W=AS gegeben. Für den Punkt P gilt: AP=10+1w. Benennen Sie die besondere Eigenschaft des Punktes P bezüglich des Dreiecks ABS. Der Punkt M ist der Schnittpunkt der Diagonalen der Grundfläche ABCD. Geben Sie den Vektor MS als Linearkombination der Vektoren ü, V und w an.',
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
      text: '1.0 1.1 1.2 1.3 1.4 2.0 2.1 2.2 2 „ 02-0,25x Gegeben ist die Funktion k:x —x mit der Definitionsmenge Dx=IR). Der zugehörige Graph wird mit Gx bezeichnet. Runden Sie gegebenenfalls Ihre Ergebnisse auf zwei Dezimalen. Bestimmen Sie nachvollziehbar das Verhalten von k(x) für x > + . Bestimmen Sie jeweils die Art und die Koordinaten aller relativen Extrempunkte des Graphen von k. [ Mögliches Teilergebnis: k/(x) = (2xf0‚25x2)>e2*0\'25)‘ ] Bestimmen Sie die Stelle, an der Gx das stärkste Gefälle aufweist. Zeichnen Sie Gx unter Verwendung aller bisherigen Ergebnisse und weiterer geeigneter Funktionswerte im Bereich 0<x=<2O0 in ein kartesisches Koordinatensystem. Maßstäbe: x-Achse: 2 LE = 1cm ; Yy-Achse: 10 LE = 1cm 1 Gegeben ist die Funktion f :>(|—>%4)<>(>(fa)2 mit der Definitionsmenge Dfa = IR und aelR. Der zugehörige Graph wird mit Gfa bezeichnet. Bestimmen Sie in Abhängigkeit von a die Nullstellen von f2 mit ihren Vielfachheiten. Geben Sie die Anzahl und die Art der relativen Extrempunkte des Graphen von fz in Abhängigkeit von a an. Fortsetzung siehe nächste Seite',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln — Analysis I (Fortsetzung) 2025 2.3.0 Nun sei a=18. Die zugehörige Funktion wird mit f, der entsprechende Graph mit Gf 1 bezeichnet. Somit gilt: f(x):%-(x3 —36x? +324x) mit Df= IR. In einer unebenen Landschaft soll eine neue Straße gebaut werden. Im Zuge der Vorplanungen wird das Gelände im Querschnitt betrachtet. Dabei soll für weitere Betrachtungen der Graph der Funktion f für 0<x=<26 die obere Begrenzungslinie des Geländes im Querschnitt beschreiben. x und f(x) sind Längenangaben in der Einheit Meter. Der Wert von f(x) gibt die Höhe über einem festgelegten Bezugsniveau an. Ein Ausschnitt dieses Geländeprofils ist unten abgebildet. Runden Sie die Ergebnisse sinnvoll. | S » 0 lZ34567891011121314151617181?2D2122Z3242526)( 2.3.1 Das auf einer Länge von 100 m gleichbleibende Geländeprofil wird für den Bau des Straßenbetts bis zu einer Höhe von 1m über dem Bezugsniveau aufgefüllt (siehe schraffierte Fläche in Zeichnung von 2.3.0). Berechnen Sie das Volumen des dafür erforderlichen Füllmaterials. Die Ränder des Straßenbetts entnehmen Sie näherungsweise der Zeichnung. 2.3.2 Im Bereich x <0 befindet sich eine Schule (nicht in der Abbildung dargestellt). Zwischen der Schule und der Straße soll eine vertikale Lärmschutzwand errichtet werden. Damit diese Wand einen effektiven Lärmschutz sicherstellt, muss die Wand laut Berechnungen von Ingenieuren mindestens bis zu einer Höhe von 4,5 m über dem Bezugsniveau reichen. Um Material und Baukosten zu sparen, soll das vorhandene Geländeprofil genutzt werden. Ermitteln Sie die Koordinaten des höchsten Punktes des Geländes zwischen Schule und Straßentrasse und berechnen Sie die minimal notwendige Höhe der Lärmschutzwand. 2.3.3 Im Bereich für x>26 soll das Geländeprofil rechts des Straßenbetts einen geradlinigen Verlauf erhalten. Das Geländeprofil wird für diesen Bereich durch die Tangente an den Graphen von f an der Stelle x=26 beschrieben. Bestimmen Sie eine Gleichung dieser Tangente. Beurteilen Sie au',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln — Analysis I (Fortsetzung) 2025 2.3.0 Nun sei a=18. Die zugehörige Funktion wird mit f, der entsprechende Graph mit Gf 1 bezeichnet. Somit gilt: f(x):%-(x3 —36x? +324x) mit Df= IR. In einer unebenen Landschaft soll eine neue Straße gebaut werden. Im Zuge der Vorplanungen wird das Gelände im Querschnitt betrachtet. Dabei soll für weitere Betrachtungen der Graph der Funktion f für 0<x=<26 die obere Begrenzungslinie des Geländes im Querschnitt beschreiben. x und f(x) sind Längenangaben in der Einheit Meter. Der Wert von f(x) gibt die Höhe über einem festgelegten Bezugsniveau an. Ein Ausschnitt dieses Geländeprofils ist unten abgebildet. Runden Sie die Ergebnisse sinnvoll. | S » 0 lZ34567891011121314151617181?2D2122Z3242526)( 2.3.1 Das auf einer Länge von 100 m gleichbleibende Geländeprofil wird für den Bau des Straßenbetts bis zu einer Höhe von 1m über dem Bezugsniveau aufgefüllt (siehe schraffierte Fläche in Zeichnung von 2.3.0). Berechnen Sie das Volumen des dafür erforderlichen Füllmaterials. Die Ränder des Straßenbetts entnehmen Sie näherungsweise der Zeichnung. 2.3.2 Im Bereich x <0 befindet sich eine Schule (nicht in der Abbildung dargestellt). Zwischen der Schule und der Straße soll eine vertikale Lärmschutzwand errichtet werden. Damit diese Wand einen effektiven Lärmschutz sicherstellt, muss die Wand laut Berechnungen von Ingenieuren mindestens bis zu einer Höhe von 4,5 m über dem Bezugsniveau reichen. Um Material und Baukosten zu sparen, soll das vorhandene Geländeprofil genutzt werden. Ermitteln Sie die Koordinaten des höchsten Punktes des Geländes zwischen Schule und Straßentrasse und berechnen Sie die minimal notwendige Höhe der Lärmschutzwand. 2.3.3 Im Bereich für x>26 soll das Geländeprofil rechts des Straßenbetts einen geradlinigen Verlauf erhalten. Das Geländeprofil wird für diesen Bereich durch die Tangente an den Graphen von f an der Stelle x=26 beschrieben. Bestimmen Sie eine Gleichung dieser Tangente. Beurteilen Sie au',
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
      text: '3 1.0 Gegeben ist die ganzrationale Funktion fa:x»—>f%(x fax2f9x+7) mit der Definitionsmenge D“ = IR und aelR* . Ihr Graph wird mit Gg bezeichnet. 1 1.1 _ Zeigen Sie, dass x :äa die einzige und von a abhängige Wendestelle von f, ist. 1.2 _ Berechnen Sie a so, dass die Steigung der Wendetangente m. =3 beträgt. Nun sei a=3. Die zugehörige Funktion wird mit f, der entsprechende Graph mit G£ 1 bezeichnet. Somit gilt: f:x »—>fz(x3 —3x? f9x+7) mit der Definitionsmenge Df= IR. 1.3 Bestimmen Sie jeweils die Art und die Koordinaten aller relativen Extrempunkte von G+£ . 1.4 Zeichnen Sie unter Verwendung der bisherigen Ergebnisse und geeigneter weiterer Funktionswerte den Graphen G£ im Bereich -3<x<5 in ein kartesisches Koordinatensystem. Maßstab auf beiden Achsen: 1LE=1 cm. 1.5 _ Des Weiteren ist die Parabel G, gegeben, die den Graphen G£ im Punkt H(3‘ 5) berührt und bei T(f1‘ ‚3) schneidet. Bestimmen Sie eine mögliche Funktionsgleichung von p. 1 [ mögliches Ergebnis: p(x):fi(x2 f6xfl) ] 1.6 Zeichnen Sie die Parabel G, für —1<x=<5 in die Zeichnung aus Teilaufgabe 1.4 ein. 1.7 Die Parabel G, und der Graph G+ schließen gemeinsam ein endliches Flächenstück ein. Berechnen Sie die Maßzahl des Flächeninhalts dieses Flächenstücks. 2.0 Um die Wasserqualität in einem See zu überprüfen, wird die Konzentration an Mikroalgen in Wasserproben in verschiedenen Testreihen jeweils über 14 Tage hinweg regelmäßig untersucht. Die Ausbreitung der Algen in den Gewässern Königsee und Kaisersee soll dabei in Abhängigkeit von der Zeit näherungsweise durch geeignete reelle Modellfunktionen beschrieben werden. Dabei gibt telR mit 0<t<14 die seit Beobachtungsbeginn verstrichene Zeit in Tagen und der Funktionswert die Anzahl der Mikroalgen in Millionen pro Liter Wasser an. Runden Sie die Ergebnisse gegebenenfalls sinnvoll. Bei den Berechnungen kann auf das Mitführen von Einheiten verzichtet werden. Fortsetzung siehe nächste Seite',
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
      text: 'n 2.1 In einer ersten Testreihe wurde 14 Tage lang je ein Liter Wasser aus dem Königsee entnommen und die Anzahl enthaltener Mikroalgen ermittelt. Nachfolgende grafische Abbildung basiert auf den gewonnenen Messdaten. Anzahl der Mikroalgen in Mio. pro Liter —55 50 45 —35 30 25 20 15 M,(2 / 14,46) 10 ln t in Tagen 0 1.2.3.4. 5 6 7 8 9 10 141 122 13 )f(c-t)+1‚2) Bestimmen Sie c und d so, dass die Funktion Nı :t—>d-50-e mit c,delR* eine geeignete Modellfunktion ist. Werte sind dem Diagramm zu entnehmen. N (14) - N1 (0) Ermitteln Sie anschließend näherungsweise den Wert von 140 und geben Sie die Bedeutung dieses Wertes im Sachzusammenhang an. 2.2.0 In einer zeitgleich gestarteten zweiten Testreihe aus dem Kaisersee konnte die Anzahl der Mikroalgen in Millionen pro Liter Wasser (Algenkonzentration) in Abhängigkeit von der Zeit t mit telR und 0O<t<14 _näherungsweise durch die Funktion N:t—>15 >(t2 f1)-e*0\'5" +20 modelliert werden. 2.2.1 Berechnen Sie nach diesem Modell die maximale Algenkonzentration im Kaisersee während des gesamten Beobachtungszeitraums der zweiten Testreihe. [ mögliches Teilergebnis: N‘2 (t) :f7‚5»(t2 —4t f1)re*0\'5\'t ] 2.2.2 Zeichnen Sie unter Verwendung der bisherigen Ergebnisse sowie weiterer geeigneter Funktionswerte den Graphen der zweiten Testreihe für 0<t<14 in das vorhandene Koordinatensystem in 2.1 ein. Entnehmen Sie der Zeichnung näherungsweise, an welchem Tag sich bei den beiden Testreihen die Mikroalgenkonzentration in den beiden Seen maximal unterscheidet.',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP: Lineare Abhängigkeit, Kreuzprodukt, Lotfußpunkt, Schnittwinkel waren Kl. 11. Neu LP (26/27): Abstände und Schnittwinkel sind in Band 2 (Kl. 12).",
      tags: ["Lineare Abhängigkeit","Fläche","Lotfußpunkt","Schnittwinkel","Kreuzprodukt"],
      imgs: ["fap-aufgaben/2025_T2_GI_1.png","fap-aufgaben/2025_T2_GI_2.png"],
      text: '1.0 1.1 1.2 1.3 2.0 2.1 2.2 In einem kartesischen Koordinatensystem des IR} sind die Punkte A(12‘2|5)‚ B(10‘8‘3)‚ C(2‘6‘9) und D(4‘20‘7) gegeben. Runden Sie Ihre Endergebnisse gegebenenfalls auf eine Nachkommastelle. Bestimmen Sie die Lösungsmenge der Gleichung r-AB+s-AC+t-AD=0 mit r,s,t eIR und interpretieren Sie Ihr Ergebnis geometrisch. Berechnen Sie die Maßzahl des Flächeninhalts des Dreiecks BCD. Die Gerade gAßp verläuft durch die Punkte A und B. Es gilt: Cg gAg . (Nachweis nicht erforderlich!) Berechnen Sie den Abstand der Geraden gAg zum Punkt C. Die Abbildung zeigt einen Ausschnitt einer Kletterwand. Ein kartesisches Koordinaten- system des IR3ist zur modellhaften Be- schreibung der Kletterwand wie folgt ge- wählt: Der Boden der Kletterhalle liegt in der X1-X2-Koordinatenebene und der Überhang ABCD in der Ebene F:-3x)+2xz3 -4=0. Der Überhang DCE liegt in der Ebene H:-3x> +4x3 -15=0. Die Strecke AB liegt in der x1-x3-Koordinatenebene und verläuft parallel zur x4 -Achse. Die Koordinaten der Punkte sind Längenangaben in der Einheit Meter. Auf die Mitführung von Einheiten bei den Rechnungen kann verzichtet werden. Ermitteln Sie, auf welcher Höhe h (siehe Abbildung) der Überhang ABCD beginnt. Eine Person klettert vom Boden bis zum Punkt E. Auf der Höhe von fünf Metern über dem Hallenboden ist von einem Überhang zu einem anderen Überhang zu klettern. Die Überhänge schließen einen stumpfen Winkel ein. Berechnen Sie das Maß dieses stumpfen Winkels auf eine Nachkommastelle gerundet. Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I (Fortsetzung) 2025 4 2.3 Die senkrechte Projektion des Überhanges DCE in die x1-x2-Koordinatenebene ist das Dreieck C,D,Ej. Im Bereich des Dreiecks soll die Bodenfläche komplett mit drei rechteckigen Matten ausgelegt werden, die eine Breite von 2 m und eine Länge von 3 m besitzen. Bestimmen Sie die Maßzahl des Flächeninhaltes des Dreiecks C,D4E41. Zeichnen Sie das Dreieck C,DjE; so',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP: Koordinatenform aus 3 Punkten, Lotfußpunkt, LGS waren Kl. 11. Neu LP (26/27): Ebenengleichungen + Abstände in Band 2 (Kl. 12).",
      tags: ["Ebene","Koordinatenform","Lotfußpunkt","Schwerpunkt","LGS"],
      imgs: ["fap-aufgaben/2025_T2_GII.png"],
      text: '23 1.0 Die Abbildung zeigt modell- A xz haft einen Ausschnitt einer Berglandschaft einer Modell- eisenbahn in einem kartesi- schen Koordinatensystem des IR3.Der Boden der Mo- delleisenbahn liegt in der X1-X2-Ebene. Die Punkte B(60|30J0), C(10|36|4) und F(40|70J58) legen eine Flanke der Berglandschaft fest. Das Dreieck CBF liegt in der Ebene E. Die Koordinaten der Punkte sind Längenan- gaben in _ der Einheit Zentimeter. Auf die Mitführung von Einheiten kann bei den Rechnungen verzichtet werden. Runden Sie Ihre Ergebnisse auf zwei Nachkommastellen. X1 B 1.1 _ Ermitteln Sie eine Gleichung der Ebene E in Koordinatenform. [ Mögliches Ergebnis: E: x +15x» -10x3 =510 ] 1.2.0 Eine Stromleitung z der Modelleisenbahn verläuft näherungsweise geradlinig durch die Punkte L(40|44/27) und P(36|49,6/27) . Es gilt: PSE. 1.2.1 Die Stromleitung z soll mit einem Mast @, der senkrecht zur x1-xz-Koordinatenebene verläuft, gehalten werden. Ermitteln Sie die Koordinaten des Verankerungspunktes KeE und die Höhe ‘Ü(‘ des Mastes. 1.2.2 Im Schwerpunkt S des Dreiecks CBF soll eine Halterung für die Berglandschaft angebracht werden. Der Verankerungspunkt S soll vom Punkt P einen Mindestabstand von 6 cm haben. Überprüfen Sie, ob diese Vorgabe eingehalten wird. 1.3 Die Punkte A, B und C legen eine Ebene G fest, in der sich die Flanke eines weiteren Berges befindet. Die Ebenen E und G schneiden sich senkrecht. Ermitteln Sie eine Gleichung der Ebene G in Koordinatenform. Berechnen Sie auch das Maß des Neigungswinkels der Ebene G zur x1-x2-Koordinatenebene. [ Mögliches Teilergebnis: G:30x; +124x) +189xz -5520=0 ] 2 Berechnen Sie die Lösungsmenge des linearen Gleichungssystems. Es gilt: a,b,ceIR. ) — 6a-2b-3c=-20 I) —-a+6b-c=10 1 —2b+3c=80',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis 2023 1.0 1.1 1.2 2.0 2.1 2.2 2.3 Von einer in D{j= IR definierten ganzrationalen Funktion f ist die Funktionsgleichung der zweiten Ableitungsfunktion f bekannt: f”(x) =3x? —3, Der Graph von f hat den Wendepunkt W(1‘yw), die Gleichung der zugehörigen Wendetangente lautet y=2. Begründen Sie, warum es sich bei dem Wendepunkt W um einen Terrassenpunkt handelt. Ermitteln Sie eine Funktionsgleichung von f. Die nebenstehende Abbildung zeigt einen y Ausschnitt des CGraphen Gh/ der ersten /‘\\3 Ableitungsfunktion h/ einer ganzrationalen 2R G Funktion h. Für die Definitionsmengen gilt: Dp=D /=IR. h=Di/ h/ isteine ganzrationale Funktion dritten Grades. Die Graphen von h/ und h besitzen an der Stelle Xo =0 einen gemeinsamen Punkt. Der Graph von h wird mit Gp bezeichnet. Gegeben sind die folgenden Aussagen zum Graphen der Funktion h. Kreuzen Sie für jede Aussage an, ob diese richtig oder falsch ist, oder ob aufgrund der vorliegenden Informationen keine Angabe über den Wahrheitsgehalt der Aussage möglich ist (nicht entscheidbar). Hinweis zur Bewertung: Mehr als ein gesetztes Kreuz pro Aussage führt zu 0 BE als Bewertung für die entsprechende Aussage. Für ein korrekt gesetztes Kreuz erhält man +1 BE, für ein falsch gesetztes Kreuz erhält man 0,5 BE Abzug. Im ungünstigsten Fall wird die gesamte Teilaufgabe mit 0 BE bewertet. nicht Aussagen richtig | falsch |yscheidbar Gp besitzt einen Hochpunkt. Gp besitzt genau einen absoluten Extrempunkt. Ghp ist in [-0,5; 0,5] rechtsgekrümmt. Begründen Sie für die beiden folgenden Aussagen jeweils, ob die Aussage wahr oder falsch ist oder ob eine Angabe über den Wahrheitsgehalt der Aussage aufgrund der vorliegenden Informationen nicht möglich ist. Aussage 1: „Gp verläuft für x>0 vollständig im 1. Quadranten des Koordinatensystems.“ Aussage2: „Der Graph der 2. Ableitungsfunktion H/ istin ganz IR linksgekrümmt.“ Ermitteln Sie eine Funktionsgleichung der Tangente an Gy an der Stelle xg =0. Fortsetzung siehe',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel - Lineare Algebra und analytische Geometrie 2023 1.0 In einem kartesischen Koordinatensystem des R2 ist je ein Repräsentant der Vektoren 1.1 1.2 1.3 2.0 2.1 2.2 aund b gegeben. X2 Dl T! 0 1 2 3 xı Der Winkel c zwischen den beiden Vektoren a und b kann mit der Gleichung cos(a) = berechnet werden. In einer der drei nachfolgenden Gleichungen ist der alb aob Term H°m richtig berechnet. Entscheiden Sie begründet, welche der untenstehenden al- Gleichungen die richtige ist. - 3E I) cos(o:| 1l) cos(o:) Il) cos(a) = — - FE Zeichnen Sie einen Repräsentanten des Vektors C=b-a in das Koordinatensystem von 1.0 ein. Zeigen Sie rechnerisch, dass die Vektoren a und b linear unabhängig sind. In einem kartesischen Koordinatensystem des IR? sind die drei Punkte A(2|0‘0), B(S‘O‘O) und C(4‘1}1) gegeben. Zeigen Sie, dass der Winkel an der Ecke C im Dreieck ABC ein rechter Winkel ist. Berechnen Sie die Maßzahl des Flächeninhalts des Dreiecks ABC .',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln - Analysis I 2023 1.0 1.1 1.2 1.3 1.4.0 1.4.1 1.4.2 1 Gegeben ist die ganzrationale Funktion f:x — ﬁ(x4 —14x? +60x2 f104x+64) mit der Definitionsmenge D+{= IR . Ihr Graph G£ in einem kartesischen Koordinatensystem besitzt bei x=2 einen Terrassenpunkt. Nur im Bereich 2<x=<8 beschreibt der Graph G£ dabei den Boden eines Teichbeckens im Querschnitt. Das Teichbecken ist bis zur x-Achse vollständig mit Wasser gefüllt. Die Koordinaten sind Längenangaben in der Einheit Meter. Auf das Mitführen der Einheiten kann während der Berechnungen verzichtet werden. Berechnen Sie die maximale Wassertiefe des Teichbeckens auf cm genau. Ermitteln Sie die Stelle, an welcher der Boden des Teichbeckens im Bereich ]2;6,5[ das stärkste Gefälle aufweist. Geben Sie das Gefälle an dieser Stelle an. Das Teichbecken hat eine konstante y Breite b von 4,0m (siehe Grafik). 2 Berechnen Sie das Volumen V des ı Wassers im Teichbecken, wenn das Teichbecken vollständig mit Wasser gefüllt ist. Damit das Teichwasser keimfrei bleibt, soll eine Chlormischung zugesetzt werden, die in zylinderförmigen Dosen aus Blech verkauft ° wird. Der Hersteller dieser Dosen möchte pro Dose nicht mehr als 600 cm? h Blech verbrauchen. Der Dosenradius soll dabei nicht kleiner als 1 cm und nicht größer als 9 cm sein. Stellen Sie eine Gleichung der Funktion V auf, welche das Dosenvolumen V(r) in Abhängigkeit vom Dosenradius r angibt, wenn pro Dose inklusive Boden und Deckel genau 600 cm? Blech verwendet werden. [mögliches Ergebnis: V(r)= — xr} +300r ] Bestimmen Sie auf mm genau den Radius r, bei dem das Dosenvolumen aus 1.4.1 maximal wird. Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln —- Analysis I (Fortsetzung) 2023 2.0 Die Zugabe von Chlor in das Beckenwasser eines Schwimmbads soll die Vermehrung von Bakterien hemmen. Für eine genauere Untersuchung, ab welchem Zeitpunkt die Zugabe von Chlor notwendig ist, wird etwas Beckenwasser entnommen und im Labor untersucht. Dort wurde für',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln —- Analysis II 2023 1.0 1.1 1.2 2.0 2.1 2.2 Die Funktion fz mit der Definitionsmenge De= !R und aelR besitzt die erste Ableitungsfunktion fa/ mit der Funktionsgleichung fa/ (x):%x(x2 fa) . Ihr Graph in einem kartesischen Koordinatensystem wird mit G; bezeichnet. Begründen Sie, dass für alle aeIR der Graph von fz achsensymmetrisch zur y-Achse verläuft. Bestimmen Sie in Abhängigkeit von a€eIR die Anzahl der Stellen, an denen der Graph von fz eine waagrechte Tangente besitzt. In unmittelbarer Nähe eines Flusses wurde zum Schutz der Anwohner vor Hochwasser ein Damm auf einem ebenen Gelände errichtet. Von der Vogelperspektive aus betrachtet verläuft der Damm geradlinig und hat eine Länge von 800 Meter. Im Querschnitt hat der Damm das unten abgebildete Profil, welches durch den zur y-Achse symmetrischen 1 1 Graphen der Funktion h:x}—>ﬁx4fgxz+4 mit der Definitionsmenge Dp=[-8;8] beschrieben werden kann. Die x-Koordinaten stehen für Längenangaben in der Einheit Meter. Die Funktionswerte von h geben die Höhe des Damms gegenüber dem ebenen Gelände in der Einheit Meter an. Bei den Berechnungen kann auf das Mitführen von Einheiten verzichtet werden. Runden Sie die Ergebnisse gegebenenfalls sinnvoll. h(x) in m Der Bau des Dammes hat 2,5 Millionen Euro gekostet. Berechnen Sie das Volumen sowie die durchschnittlichen Kosten in Euro pro Kubikmeter des Dammes. Hierzu benötigte Werte dürfen obiger Abbildung entnommen werden. Aus bautechnischen Gründen darf das Profil des Dammes im Querschnitt um maximal 40° gegenüber dem planen Grundstück geneigt sein. Berechnen Sie die maximale Steigung des Profils und überprüfen Sie damit, ob diese Bauvorgabe eingehalten wurde. Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln - Analysis II (Fortsetzung) 2023 6 5 ] 2.3 3.0 3.1 3.2.0 Im Folgenden wird vereinfachend angenommen: N(t):820f660>e Nach verschiedenen Hochwasserfreilegungen legt das zuständige Wasserwirtschaftsamt fest, dass eine Dammhöhe von 3,75',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen, Abstände waren Kl.11. Neu LP (26/27): Ebenen und Abstände in Band 2 (Kl.12).",
      tags: ["Ebene","Koordinatenform","Neigungswinkel","Schnittgerade","Abstand","Kletterhalle"],
      imgs: ["fap-aufgaben/2023_T2_GI_1.png","fap-aufgaben/2023_T2_GI_2.png"],
      text: 'T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I 1.0 1.1 1.2 1.3 1.4 In einer Kletterhalle für Kinder soll eine Wand mit Überhang gebaut werden, welche modellhaft in einem geeignet gewählten kartesischen Koordinatensystem des IR} betrachtet wird. Der Boden der Kletterhalle liegt in der x1-xz-Koordinatenebene. Die Ebene G, die den Überhang bildet, ist durch die Punkte E(15|0|5), C(12|9|12)und D(-1|9|12) festgelegt. Zudem sind die Punkte A(15[0|25), B(-11|0|25) und F(-2]0|5) gegeben. Die Koordinaten der Punkte sind Längenangaben in der Einheit Dezimeter. Auf die Mitführung von Einheiten während der Rechnung kann verzichtet werden. Ergebnisse sind gegebenenfalls auf eine Nachkommastelle zu runden. Bestimmen Sie eine Gleichung der Ebene G in besondere Lage von G im Koordinatensystem. [ Mögliches Ergebnis: G: 7x) -9x3 +45=0 ] Berechnen Sie den Neigungswinkel der Ebene G zum Boden. Berechnen Sie die Maßzahl des Flächeninhalts des dreieckigen Seitenteils AEC. 2023 Koordinatenform und beschreiben Sie die Die Decke der Halle, an der eine Überwachungskamera angebracht werden soll, liegt in der Ebene H:xz -26=0. Um alle Bereiche der Kletterwand zu erfassen, muss die Kamera weit genug von der Rückwand AE41FB entfernt sein. Bestimmen Sie eine Gleichung der Schnittgeraden s der Ebene G und der Ebene H. Der Abstand dieser Schnittgeraden s zur X1-X3-Koordinatenebene entspricht dem Mindestabstand der Kamera von der Rückwand AE;FB in Dezimeter. Geben Sie diesen Abstand an. Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I (Fortsetzung) 2023 4 N w 1.5 1.6 Der Punkt K ist der Schnittpunkt der beiden Diagonalen des Vierecks ACDB. Zur Stabilisierung wird innerhalb der Kletterwand ein Stahlträger am Punkt K angebracht, der senkrecht zur Kletterfläche ACDB steht. Beschreiben Sie, wie der Montagepunkt des Stahlträgers an der Rückwand AE41FB ermittelt werden kann, ohne die Rechnung durchzuführen. Der Körpe',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen und Abstände in Kl.11. Neu LP (26/27): Ebenen + Lagebeziehungen in Band 2 (Kl.12).",
      tags: ["Hausdach","Ebene","Koordinatenform","Neigungswinkel","Parameterebene","Glasdach"],
      imgs: ["fap-aufgaben/2023_T2_GII.png"],
      text: 'T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie II 2023 1.0 Das Dach eines Hauses liegt in einer R EbeneH. In einem kartesischen Koordinatensystem des IR} ist die Ebene H durch die drei Punkte P(5/0|8), Q(5|-7,2|10) und R(10|-10,8|11) festgelegt. Die Koordinaten der Punkte sind Längenangaben in der Einheit Meter. Auf die Mitführung von Einheiten während der Rech- nungen kann verzichtet werden. K 6| 1.1 Ermitteln Sie jeweils eine Gleichung der Ebene H in Parameter- und Koordinatenform und beschreiben Sie deren besondere Lage im Koordinatensystem. [ mögliches Teilergebnis: H:5x> +18xz3 =144 ] 3|1.2 Die Größe des Neigungswinkels des Daches H gegen die Horizontale muss gemäß einer örtlichen Bauvorschrift mindestens 15° betragen. Zeigen Sie rechnerisch, dass die örtliche Bauvorschrift eingehalten wird. Zur Überdachung der Terrasse KLMN, die in der x1-xz-Koordinatenebene liegt, wird ein rechteckiges Glasdach AEFD , dessen Neigungswinkel verstellbar ist, aufgebaut. Das Glasdach liegt in der Ebene G.: (—1,8a+9,9)x; +(36 — 6a)x> +10,8xz +14,4a=119,16 mit dem Parameter a€lR. 3| 1.3 Die Ebenen H und G; sollen parallel zueinander liegen. Ermitteln Sie hieraus den Wert des zugehörigen Parameters a. [ Ergebnis: a=5,5 ] 2| 1.4 Zeigen Sie, dass die Punkte A(8|0|3,7) und B(8|3,42|2,75) in der Ebene Gs,5 liegen. Für die folgenden Teilaufgaben gilt: D(2|0[|3,7) und K(8|0|0). 3| 1.5 Das Glasdach AEFD ist festgelegt durch die Punkte A, E und D. Aus statischen Gründen darf die Glasüberdachung nur um maximal 20 % der Länge von AB über den Punkt B hinausragen. Bestimmen Sie die Koordinaten des Punktes E, wenn die maximal zulässige Länge vollständig ausgenutzt wird. |-22 8 Hinweis: 6| 1.6 Als Windschutz sollen die drei Seitenflächen AKLB, BLMC und DNMC verglast werden. Der umbaute Raum besitzt die Form eines geraden trapezförmigen Prismas. Geben Sie die Koordinaten des Punktes L an. Berechnen Sie die Materialkosten für die drei Seitenflächen, wenn der Preis 200 € ',
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
      text: 'T12 - Teil 1: ohne Hilfsmittel - Analysis 2022 4 2.0 2.1 2.2 4 Gegeben sind die lineare Funktion g:X —> fäx+8 und eine quadratische Funktion p mit den Definitionsmengen Dg =Dp="!R. Die beiden Schnittpunkte der Geraden Gg mit den Achsen des Koordinatensystems liegen auf der Parabel Gp. Einer dieser Punkte ist zugleich der Scheitelpunkt der Parabel Gp. Bestimmen Sie eine mögliche Funktionsgleichung der quadratischen Funktion p. Die ganzrationale Funktion f mit der y Definitionsmenge Df=IR hat den Grad drei. s Nebenstehende Abbildung zeigt Gy einen Ausschnitt des Graphen G£ + / von f. Zusätzlich ist die 3 Wendetangente G von G 2 / dargestellt. Ganzzahlige Koordinaten können * x der Abbildung entnommen werden. - 123 5 6 7 ; c Es gilt: |f(x)dx=6. f Die erste Ableitungsfunktion von f 3 \\ wird mit f bezeichnet. F ist eine Stammfunktion von f in der Definitionsmenge Df=!R. Entscheiden Sie jeweils mit kurzer Begründung, ob die Aussage wahr oder falsch ist. a) f/ besitzt die Wertemenge Wi/ =[-3;[. b) Der Graph von F besitzt genau zwei Wendepunkte. Der Graph der Funktion f, die Wendetangente G, und die y-Achse begrenzen ein endliches Flächenstück. Markieren Sie dieses Flächenstück in der Abbildung aus 2.0 und ermitteln Sie die Maßzahl seines Flächeninhalts. Fortsetzung siehe nächste Seite T12 - Teil 1: ohne Hilfsmittel — Analysis (Fortsetzung) 3.0 Gegeben ist die Funktion j:x}—)a>e“f2 aelR\\{0} und celR. Bedingung für a und c an, damit diese Nullstelle existiert. 2022 +Cc mit der Definitionsmenge D;=!R, wobei 3| 3.1 Ermitteln Sie die Nullstelle von j in Abhängigkeit von a und c. Geben Sie auch eine 3| 3.2 Nebenstehende Abbildung zeigt einen Ausschnitt des Graphen GJ- der Funktion j, welcher durch den Punkt P(2‘ 1) verläuft. Zudem ist die Asymptote von Gj gestrichelt dargestellt. Ermitteln Sie die für die nebenstehende Zeichnung verwendeten Werte von a und c. th=lR und k elR. Nullstelle besitzt. N N 2 140 4.0 Gegeben ist die reelle Funktion hk:>(|—>(xf2)r(xsz) mit der Definiti',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Ebenengleichungen, Gerade-Ebene-Beziehungen in Kl.11. Neu LP (26/27): Geraden und Ebenen im Raum in Kl.12.",
      tags: ["Ebene","Koordinatenform","Geradenschar","Parallelität","Pyramide","Lotgerade"],
      imgs: ["fap-aufgaben/2022_T1_Geo.png"],
      text: 'T12 - Teil 1: ohne Hilfsmittel - Lineare Algebra und analytische Geometrie 1.0 1.1 1.2 2.0 2.1 2022 In einem kartesischen Koordinatensystem des IR} sind die Ebene E:3x1 —5x2 —2x3 =10 sowie die Punkte P(6|2|4) und Q(-6|22|12) gegeben. Ermitteln Sie eine Gleichung der Geraden g, die die Punkte P und Q enthält, und zeigen Sie, dass die Gerade g die Ebene E senkrecht schneidet. Die Ebene F enthält den Punkt P und liegt parallel zur Ebene E. Bestimmen Sie eine Gleichung der Ebene F. In einem kartesischen Koordinatensystem des IR? sind die Punkte A(2|2|0), B(2|51|0), C(-3|2|0) und D(1|3|4) Eckpunkte der Pyramide ABCD mit der dreieckigen Grundfläche ABC. Zeichnen Sie die Pyramide ABCD in das unten abgebildete Koordinatensystem ein. + — -3 -2 + — - 2.2 _ Die Geraden ( steht senkrecht auf der Grundfläche ABC der Pyramide, verläuft durch den Punkt D und schneidet die Grundfläche ABC im Punkt L. Geben Sie die Gleichung der Geraden ( sowie die Koordinaten des Schnittpunktes L an.',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln - Analysis I 2022 1.0 1.1 1.2 1.3 1.4 1.5 2.0 Das Brennen von Keramik erfolgt oft bei Temperaturen über 800 °C. Die Temperatur im Ofen im Laufe des Brennvorgangs wird durch die sogenannte „Brennkurve“ beschrieben. Die folgende Funktionsgleichung beschreibt in guter Näherung eine solche „Brennkurve“ für einen Brennvorgang, der insgesamt 23 Stunden dauert: At)= 0,04—(t‘l —47t? +528t? +576t +500) mit Dg=[0;23] Die verstrichene Brenndauer t wird dabei in Stunden ab Beginn des Brennvorgangs zum Zeitpunkt t=0 angegeben, die Temperatur im Ofen S(t) in Grad Celsius (°C). Auf das Mitführen von Einheiten während der Berechnungen kann verzichtet werden. Endergebnisse sind samt Einheit zu notieren. Zeitpunkte sind in Stunden auf zwei Nachkommastellen und Temperaturwerte in Grad Celsius ganzzahlig zu runden. Dem Datenblatt des Brennofens ist zu entnehmen, dass bei der ausgewählten Brennkurve die momentane Änderungsrate der Temperatur im Ofen in Abhängigkeit von t durch folgende Funktionsgleichung beschrieben werden kann. é(c):o,o4-(4c2 415p24)«(t ‚24) Weisen Sie nach, dass diese Angabe im Datenblatt korrekt ist. Bei Temperaturen im Brennofen von 1400 °C und mehr müssen besonders hitzebeständige Tragegestelle für die Keramikteile verwendet werden. Bestimmen Sie den Zeitraum der Aufheizphase, in der die Temperatur im Brennofen ansteigt. Entscheiden Sie mithilfe einer Rechnung, ob ein besonders hitzebeständiges Tragegestell verwendet werden muss. Damit das Brenngut keinen Schaden nimmt, darf während der Aufheizphase die momentane Änderungsrate der Temperatur höchstens 115°C pro Stunde betragen. Untersuchen Sie, ob diese Bedingung erfüllt wird. Zeichnen Sie den Graphen von 3 für 0<t<23 in ein kartesisches Koordinatensystem. Maßstab: t-Achse: 2 Stunden 2& 1cm und Mt)-Achse: 100°C41cm Für besonders gute Brennergebnisse soll ab dem Zeitpunkt t=10 für vier Stunden die durchschnittliche Temperatur im Ofen mindestens 900 °C betragen. Berechnen Sie den tatsäc',
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
      text: 'T12 - Teil 2: mit Hilfsmitteln —- Analysis II 2022 1.0 1.1 1.2 1.3 2.0 2.1 2.2 2.3 1 Gegeben ist die dquadratische Funktion fazx}—>;—(fxz+a-x+3a) mit der Definitionsmenge D“ = IR und aelR\\{0}. Ihr Graph wird mit G< bezeichnet. Untersuchen Sie rechnerisch, ob es einen Wert für a gibt, sodass die Parabel Gfa den Scheitelpunkt E(3‘ 4,5) hat. Bestimmen Sie den Wert für a, für welche die Funktion f, genau eine doppelte Nullstelle besitzt. 2 Y Für a=-—12 ergibt sich f_17 :X}—>ﬁ«(x+6) Der Graph G7 _,, Schließt im II. Quadranten zusammen mit den beiden Koordinatenachsen f ein Flächenstück ein (siehe Skizze rechts). mwm | } Berechnen Sie die Maßzahl seines Flächen- > m] 5 inhaltes. ] 7 ] Lydia möchte ein quaderförmiges Gewächshaus für Tomaten z mit quadratischer Grundfläche bauen. Sie verwendet für den Rahmen Holzlatten, die 1,20 Euro pro Meter kosten. Ein grober Bauplan ist in der nebenstehenden, nicht maßstabsgetreuen Skizze gezeigt. h Lydia will für den Rahmen Holzlatten kaufen und dafür genau 30 Euro ausgeben. Die Breite der Latten wird bei den Berechnungen vernachlässigt. Bei den Berechnungen kann auf das Mitführen — von Einheiten verzichtet werden. Runden Sie die Ergebnisse gegebenenfalls sinnvoll. a Lydia möchte wissen, wie das Volumen des Gewächshauses von der Seitenlänge a abhängt. Stellen Sie eine Funktionsgleichung für das Volumen V des Gewächshauses in Abhängigkeit von der Seitenlänge a auf und geben Sie eine im Sachzusammenhang möglichst große Definitionsmenge an. 25 [mögliches Teilergebnis: V(a)= z 2 a? _ 3a3 ] Ermitteln Sie die Seitenlänge a der Grundfläche so, dass sich ein möglichst großes Volumen des Gewächshauses ergibt, und berechnen Sie das maximale Volumen. Lydia entscheidet sich für eine Seitenlänge von a=1,4 Meter und kauft für 30 Euro Holzlatten in der passenden Länge. Nach dem Bau des Gewächshauses möchte Lydia die Deckfläche und die Seitenflächen mit Folie bespannen und kauft deswegen eine Folie mit der Breite 1,4 Meter. Bestimmen Sie die Mindestl',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Geraden, Ebenen, Lagebeziehungen in Kl.11. Neu LP (26/27): Abstände und Lagebeziehungen in Kl.12.",
      tags: ["Geradenschar","Ebene","Lagebeziehung","Klettergerüst","Normalenvektor","Dreiecksfläche"],
      imgs: ["fap-aufgaben/2022_T2_GI_1.png","fap-aufgaben/2022_T2_GI_2.png"],
      text: 'T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I 2022 1.0 1.1 1.2 1.3 In einem kartesischen Koordinatensystem des IR} sind der Punkt A(2|-1|-4) sowie die 4 2 4,5 k Geraden g:X=| 0 |+A|1 und hy:X=| 4 |+4W|-2| mit A,w,kelR gegeben. —3 2 —1 2 Es gilt Agg . Somit legen der Punkt A und die Gerade g eine Ebene E fest. Ermitteln Sie je eine Gleichung der Ebene E in Parameter- und Koordinatenform. [ Mögliches Teilergebnis: E:x; —2x) -4=0 ] Bestimmen Sie den Wert von k so, dass sich die Geraden g und hx in einem Punkt S schneiden und berechnen Sie die Koordinaten dieses Schnittpunktes S. 4,5\\ (-4 Für k=—4 ergibt sich die Gerade h_4 :X= 4 |+W| -2 . —1 2 Zeigen Sie, dass die Gerade h_4 echt parallel zur Ebene E verläuft. Fertigen Sie ohne Verwendung eines Koordinatensystems eine aussagekräftige Skizze an, aus der die gegenseitige Lage von E sowie der beiden Geraden h_4 und g klar hervorgeht. Formulieren Sie die Lagebeziehung zwischen h_4 und g zusätzlich in Worten. Fortsetzung siehe nächste Seite T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie I (Fortsetzung) 2022 2.0 Die Abbildung zeigt modellhaft einen Teil eines Klettergerüsts auf einem Spielplatz, das in einem kartesischen Koordinatensystem des IR3 beschrieben wird. Die Fußpunkte der Stützen des Klettergerüsts liegen in der x1x2z-Ebene und dazu parallel die rechteckige Plattform P1P2P3Pa. Über ein dreieckiges Netz, das an den Punkten Nı, N2z und N; fixiert ist, können die Kinder auf die Plattform P1P2P3Pa klettern. Folgende Punkte sind gegeben: P:(1,8|1,2|1,5), P2(0|1,2|1,5), P3(0|0|1,5) und N3(0,9|3,6|0). Die Koordinaten der Punkte sind Längenangaben in der Einheit Meter. Auf die Mitführung der Einheiten kann verzichtet werden. Runden Sie Ihre Ergebnisse sinnvoll. Stütze 777777 Stütze 277777 2| 2.1 Geben Sie die Koordinaten des Punktes Pa an. 4| 2.2 Das Netz ist in den Punkten N1; und Nz; befestigt, die jeweils 10 cm senkrecht unter den Punkten Pı und P, liegen. Bere',
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
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Alt LP (17/18): Gesamtvolumen, Geraden-Lagebeziehung, Schnittebene in Kl.11. Neu LP (26/27): Abstände und Schnittgeraden in Kl.12.",
      tags: ["Quader","Prisma","Volumen","Dachneigung","Grundstücksgerade","Zwischendecke"],
      imgs: ["fap-aufgaben/2022_T2_GII.png"],
      text: 'T12 - Teil 2: mit Hilfsmitteln - Lineare Algebra und analytische Geometrie II 2022 1.0 Eine Architektin plant den Bau eines _ einstöckigen Hauses. Dazu stellt sie das Haus modellhaft in einem kartesischen Koordinaten- system des IR} dar. Im Modell wird das Haus aus einem Quader und einem dreiseitigen, geraden Prisma zusammengesetzt. Gegeben sind die Punkte A(2|2[0), B(10|10/|0), C(4|16|0) und J(-1|5|7). Die Koordinaten der Punkte sind Längenangaben in der Einheit Meter. Die Deckenhöhe im Erdgeschoss beträgt 3 m. Bei den Rechnungen kann auf das Mitführen der Einheiten verzichtet werden. Runden Sie Ihre Ergebnisse sinnvoll. 4| 1.1 Zeigen Sie, dass der Punkt D die Koordinaten (-4|8|0) besitzt. Überprüfen Sie rechnerisch, ob die Grundfläche ABCD des geplanten Hauses im Punkt B rechtwinklig ist. 3| 1.2 Eine Grundstücksgrenze des Baugrundstückes verläuft entlang der Geraden —4 —1 g:X=| 1 |+s| 1 |mit s elR. Die Punkte A und D liegen auf der Geraden h. Untersuchen 0 0 Sie die gegenseitige Lage der Geraden g und h. 4| 1.3 Ermitteln Sie die Maßzahl des Gesamtvolumens des Hauses. 3| 1.4 Für den Dachneigungswinkel o& (siehe 1.0) gilt gemäß der örtlichen Bauvorschrift 30° < a <45° . Zeigen Sie, dass der Dachneigungswinkel die Bauvorschrift erfüllt. 5| 1.5 Im Dachgeschoss soll eine Zwischendecke eingezogen werden, die parallel zur Grundfläche und einen Meter tiefer als der First JK ist. Diese Zwischendecke liegt in der Ebene Z. Bestimmen Sie eine Gleichung der Schnittgeraden der Ebene Z mit der durch EFKJ gegebenen Ebene. 4| 1.6 Zur Bewässerung des Gartens soll Regenwasser, das auf das Hausdach trifft, in einer Zisterne gesammelt werden. Gemäß statistischer Daten der letzten Jahrzehnte ist die L m2 durchschnittliche gesamte Niederschlagsmenge im sonnenreichen Juli 101 Zur Bewässerung des 113 m? großen Gartens sind zusätzlich täglich 2,5i2 notwendig. m Entscheiden Sie mithilfe einer Rechnung, ob die Bewässerung im Monat Juli gemäß der statistischen Daten durchgeführt werden kann. ',
      tipps: [
        "Gesamtvolumen: $V=V_{Quader}+V_{Prisma}=l\\cdot b\\cdot h_{Quader}+\\tfrac{1}{2}\\cdot G_{Dreieck}\\cdot l$.",
        "Dachneigungswinkel: $\\cos\\alpha=\\dfrac{|\\vec{n}_D\\cdot\\vec{n}_{Boden}|}{|\\vec{n}_D|\\cdot 1}$.",
        "Schnittgerade $Z\\cap G$: LGS aus beiden Ebenengleichungen, Parameter wählen."
      ]
    },

    // ── FABI 2013–2021 ──────────────────────────────────────────────────
    {
      id: "2013_T2_AI",
      year: 2013, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Für den Flächeninhalt A (in m ) der Fläche, die Algen an der Oberfläche eines 50 m2 großen Klärbeckens …",
      typen: ["TG", "PB", "IN", "EF"],
      afb: [1, 2, 3], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Aufstellen", "Berechnen", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2013_T2_AI_1.png", "fap-aufgaben/2013_T2_AI_2.png"],
      text: 'BE 11 1.2 13 1.4 1a1l 152 1.5.4 Aufgabengruppe A: Analysis AI ‘nd di i ax2+2x-1 , Gegeben sind die reellen Funktionen fz:x —> aı B der vom Parameter X+ aeIR\\ {0} unabhängigen Definitionsmenge D = IR \\ {4} g Der Graph einer solchen Funktion wird mit G, bezeichnet. Bestimmen Sie den Parameterwert a so, dass die zugehörige Funktion f, eine stetig behebbare Definitionslücke besitzt. Stellen Sie für diesen Fall die Funktionsgleichung in vereinfachter Form dar und zeichnen Sie den zugehörigen Graphen. Ermitteln Sie Anzahl und Lage der Nullstellen von f, in Abhängigkeit von a. Berechnen Sie die Parameterwerte a so, dass der Graph G, genau zwei Punkte mit waagrechter Tangente besitzt. ax? +2ax+3 [ Mögliches Teilergebnis: fa/(x) = 7 (x+1) Geben Sie den Grenzwert der Ableitungsfunktion für x —>:+£o an. Lösen Sie außerdem die Gleichung fa/(x) =a in Abhängigkeit von a und interpretieren Sie jeweils das Ergebnis. Für die folgenden Teilaufgaben hat a den Wert 1,25. Ermitteln Sie die Gleichungen aller Asymptoten des Graphen G,5 und stellen Sie eine Gleichung der Tangente t an den Graphen Gj25 an der Stelle x=-—2 auf. Untersuchen Sie das Steigungs- und Krümmungsverhalten des Graphen G125- Geben Sie die Nullstellen von fj,s an und zeichnen Sie für -4<x<2 den Graphen G,5 mit seinen Asymptoten und der Tangente t in ein kartesisches Koordinatensystem (Maßstab: 1 LE = 1 cm). Der Graph G5 begrenzt mit den beiden Koordinatenachsen ein endliches Flächenstück im IV. Quadranten. Kennzeichnen Sie dieses Flächenstück im Schaubild der Aufgabe 1.5.3 und berechnen Sie die Maßzahl seines Flächeninhalts. Fortsetzung siehe nächste Seite BE Fortsetzung A I: 2.0 Z1 2.2.0 2.2.1 2.2.2 223 2.2.4 Für den Flächeninhalt A (in m2) der Fläche, die Algen an der Oberfläche eines 50 m* großen Klärbeckens bedecken, gilt in Abhängigkeit von der Zeit t (in Wochen) näherungsweise die Formel A(t)=i mit t>0 und ceIR Ac>0. 1+24.e7°* Auf das Mitführen der Einheiten bei den Berechnungen kann verzichtet werden. Berechne',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Bestimmen Sie den Parameterwert a so, dass die zugehörige Funktion fa eine stetig behebbare Definitionslücke besitzt. St.",
        "Berechnen Sie die Parameterwerte a so, dass der Graph Ga genau zwei Punkte mit waagrechter Tangente besitzt. [."
      ]
    },
    {
      id: "2013_T2_AII",
      year: 2013, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Die Geschwindigkeit v (in —) eines Fallschirmspringers bei ungeöffnetem Fall- s t e3-l schirm kann …",
      typen: ["KD", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Begruenden", "Berechnen", "Beschreiben", "Erlaeutern"],
      imgs: ["fap-aufgaben/2013_T2_AII_1.png", "fap-aufgaben/2013_T2_AII_2.png"],
      text: 'BE n 1.0 M 1.2 1.3 13 16 1,8 Aufgabengruppe A: Analysis A Gegeben ist die reelle Funktion f:x — x? -In(0,25-x) mit der Definitionsmenge Df = ] 0; %o [ . Berechnen Sie die Nullstelle von f und untersuchen Sie das Verhalten der Funktionswerte f(x) an den Rändern der Definitionsmenge. Berechnen Sie die Art und die exakten Koordinaten des Extrempunktes des Graphen von f. [ Mögliches Teilergebnis: f/(x) = X‘[l +2-1n(0,25- x)] ] Untersuchen Sie das Krümmungsverhalten des Graphen von f und berechnen Sie die exakten Koordinaten des Wendepunktes. Lösen Sie die Gleichung f(x)=2,5 mithilfe des Newtonschen Verfahrens, benutzen Sie xg=4,5 als Startwert, führen Sie einen Näherungsschritt durch und runden Sie das Ergebnis auf zwei Nachkommastellen. Berechnen Sie den rechtsseitigen Grenzwert der Ableitungsfunktion f\' an der Stelle x=0 und beschreiben Sie die Bedeutung des Ergebnisses für den Verlauf des Graphen von f. Zeichnen Sie mithilfe bisheriger Ergebnisse und geeigneter Funktionswerte den Graphen von f für 0<x=<5 in ein kartesisches Koordinatensystem (Maßstab: 1 LE = 1 cm). Gegeben ist nun die Funktion F:x — %x3 -[ln(0‚25 :x) —%i| mit der Definitions- menge Dr =D+r. Zeigen Sie, dass F eine Stammfunktion von f ist. Der Graph von f, die x-Achse und die Gerade mit der Gleichung x = 0,1 schließen rechts der Geraden ein Flächenstück A ein. Kennzeichnen Sie dieses Flächenstück im Schaubild aus Aufgabe 1.6 und berechnen Sie die Maßzahl seines Flächeninhalts. Runden Sie das Ergebnis auf zwei Nachkommastellen. Fortsetzung siehe nächste Seite BE Fortsetzung A II 2.0 2.1 61 23 2.4 25 2.6 Die Geschwindigkeit v (in _n_1) eines Fallschirmspringers bei ungeöffnetem Fall- s t 3 schirm kann näherungsweise durch die Funktion v:t+— 60—‘Z—1 mit t>0 e3+1 beschrieben werden. Dabei bezeichnet t die Zeit (in Sekunden) nach dem Ab- sprung. Auf das Mitführen der Einheiten bei den Berechnungen kann verzichtet werden. Ergebnisse sind gegebenenfalls auf eine Nachkommastelle zu runden. Berechnen Sie, wel',
      tipps: [
        "Integral: Stammfunktion $F(x)$ bilden, $[F(x)]_a^b = F(b)-F(a)$ auswerten.",
        "Berechnen Sie die Nullstelle von f und untersuchen Sie das Verhalten der Funktionswerte f(x) an den Rändern der Definiti.",
        "Untersuchen Sie das Krümmungsverhalten des Graphen von f und berechnen Sie die exakten Koordinaten des Wendepu."
      ]
    },
    {
      id: "2013_T2_GI",
      year: 2013, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie",
      titel: "Bestimmen Sie eine Gleichung der Ebene F in Koordinatenform, auf der alle Punkte C^ m liegen. [ …",
      typen: ["GE", "LB", "AB", "SW", "KO"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie. Seiten 6–7.",
      tags: ["Aufstellen", "Berechnen", "Beschreiben", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2013_T2_GI_1.png", "fap-aufgaben/2013_T2_GI_2.png"],
      text: 'BE 1.0 11 12 1.4 15 f Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI In einem kartesischen Koordinatensystem des 1R3 ist die Menge der Ebenen 2 — a Ez:X=[0/+4A:| 1 |+yw:| a mit A,p,a IR gegeben, außerdem die Menge 1 0 a+1 der Punkte Cr m (2k-3m-1|m—-3|-k+m+4) mit k, meR. Bestimmen Sie eine Gleichung der Ebene F in Koordinatenform, auf der alle Punkte Cy m liegen. [ Mögliches Ergebnis: F: xj+x)+2x3-4=0 ] Zeigen Sie, dass die Ebene F auch in der Menge der Ebenen E, enthalten ist. Die Ebene F\'schneidet die x -Achse im Punkt S, und die x>-Achse im Punkt S, . Diese Punkte bilden mit dem Koordinatenursprung und dem Punkt P(1|1/1) eine dreiseitige Pyramide, Berechnen Sie die Volumenmaßzahl dieser Pyramide. Es gibt zwei verschiedene Ebenen Eal und EaZ , die mit der Ebene F jeweils einen Winkel von 45° einschließen. Bestimmen Sie die zugehörigen Werte ay und a auf zwei Nachkommastellen gerundet. -1 1 Zeigen Sie, dass die Gerade g mit der Gleichung Xx =[ 3 ]+v[4]‚ mitvelRR, 1 0 in allen Ebenen E, enthalten ist, und berechnen Sie den Abstand des Koordinatenursprungs von dieser Geraden g mithilfe des Lotfußpunktes L. In einem kartesischen Koordinatensystem des IR3 sind in Abhängigkeit von reR die Ebenen G,, H, und K, gegeben: G,: Xp+17-x2 —r x3 +19=0 ‚: Xı +(r—6) X22 x3+7=0 K,: —2 xı -14:x2+rx3-22=0 Ermitteln Sie die Werte für r, für welche die Ebenen G,, H, und K, keinen Schnittpunkt, genau einen Schnittpunkt bzw. unendlich viele Schnittpunkte haben. BE 230 1.0 1.1 1.2.0 121 122 1.2.3 1.2.4 fn Aufgabengruppe B: Lineare Algebra und analytische Geometrie BII Die folgenden Informationen beziehen sich auf ein kartesisches Koordinatensystem des IR3. Für die Einheiten auf den Koordinaten- achsen gilt jeweils 1 LE = 1 m. Auf das Mitführen der Einheiten bei den Berech- nungen kann verzichtet werden. Ergebnisse sind gegebenenfalls auf eine Nachkomma- stelle zu runden. An einem Hang soll eine Scheune errichtet werden mit den Eckpunkten A(0/0[0), B(8|0|0,4), C(8|8|0,8) u',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Bestimmen Sie eine Gleichung der Ebene F in Koordinatenform, auf der alle Punkte C^ m liegen. [ Mögliches Ergebnis: F: x.",
        "Die Ebene F schneidet die X] -Achse im Punkt Sj und die x 2 -Achse im Punkt S 2 . Diese Punkte bilden mit dem ."
      ]
    },
    {
      id: "2014_T2_AI",
      year: 2014, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "In einem Fluss nimmt das Wasser beim Fließen Sauerstoff aus der Luft auf. Außer- dem wird im Wasser …",
      typen: ["KD", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Markieren", "Zeichnen"],
      imgs: ["fap-aufgaben/2014_T2_AI_1.png", "fap-aufgaben/2014_T2_AI_2.png"],
      text: 'BE Aufgabengruppe A: Analysis 1.0 11 12 13 1.4 1.5 1.6 13 1,8.0 1.8.1 1.8.2 1,8.3 AI x?_4x+4 2 mit der maximalen Defini- x“ +4x+4 Gegeben ist die reelle Funktion f :x — %ln[ tionsmenge D£ . Der Graph von f wird mit G£ bezeichnet. Zeigen Sie, dass gilt: Dr = R \\ {f2;2}‚ Berechnen Sie die Nullstelle von f . Zeigen Sie, dass G£ punktsymmetrisch zum Ursprung verläuft. Bestimmen Sie das Verhalten von f(x) bei Annäherung von x an die Definitionslü- cken sowie für | x |—> 0 und geben Sie die Gleichungen aller Asymptoten von G£ an. Bestimmen Sie die maximalen Monotonieintervalle von f . [ mögliches Teilergebnis: £’(x)= Bestimmen Sie die maximalen Krümmungsintervalle von f und die Koordinaten des Wendepunktes von G+ . Zeichnen Sie unter Verwendung der bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen von f zusammen mit seinen Asymptoten für -5<xs<5 in ein kartesisches Koordinatensystem. Maßstab: 1 LE = 1 cm Im vierten Quadranten schließt G£ zusammen mit der x-Achse und der senkrechten Geraden g mit der Gleichung x =1 ein endliches Flächenstück ein. Ergänzen Sie in der Zeichnung aus 1.7 die Gerade g und markieren Sie das beschrie- bene Flächenstück. x2—4x+4] s —— | mit Gegeben ist die Funktion F:x — -In(2—-x)-In(2+x)+x A, In A 4 |x“+4x+4 Dr =[0; 2[. Zeigen Sie, dass F für x « Dp eine Stammfunktion von f ist. Berechnen Sie die Flächenmaßzahl A des Flächenstücks aus 1.8.0 und geben Sie das Ergebnis auf drei Nachkommastellen gerundet an. Fortsetzung siehe nächste Seite BE Fortsetzung A I: 2.0 Z1 A 23 In einem Fluss nimmt das Wasser beim Fließen Sauerstoff aus der Luft auf. Außer- dem wird im Wasser Sauerstoff durch bestimmte Arten von Algen in Abhängigkeit von der Sonnenlichteinstrahlung produziert. Gleichzeitig wird während des ganzen Tages Sauerstoff von allen Organismen im Wasser verbraucht. An einer bestimmten Messstelle ändert sich die Sauerstoffkonzentration k(t) in % des Flusswassers im Verlauf eines Tages sinusförmig mit der Periodendauer T = 24 h',
      tipps: [
        "Integral: Stammfunktion $F(x)$ bilden, $[F(x)]_a^b = F(b)-F(a)$ auswerten.",
        "Zeigen Sie, dass gilt: Df =IR\\ {-2;2}.",
        "Zeigen Sie, dass Gr punktsymmetrisch zum Ursprung verläuft."
      ]
    },
    {
      id: "2014_T2_AII",
      year: 2014, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Der Verlauf einer Hochspannungsleitung Q y zwischen den Punkten Q und R wird für x E [ -11 0; 11 0] …",
      typen: ["KD", "TG", "IN", "EF"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Begruenden", "Berechnen", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2014_T2_AII_1.png", "fap-aufgaben/2014_T2_AII_2.png"],
      text: 'BE 10 1.0 12 13 1.4.0 1.4.1 1.4.2 1.4.3 1.4.4 q Aufgabengruppe A: Analysis AI (l—a)\'x+a2 x2+(1fa)-x Gegeben sind mit aeJR die reellen Funktionen fz:x—>1— in der jeweils größtmöglichen Definitionsmenge D£. = 1R \\{0;a-1}. fa (x+a):(x-—a) Zeigen Sie, dass gilt: f„(x)= * S il 10 X-(X+1-a) Begründen Sie, warum der Graph von f für a € JR \\ {1} nicht symmetrisch zum Ko- ordinatensystem sein kann, und untersuchen Sie für a = 1 den Graphen von f auf Symmetrie zum Koordinatensystem. Bestimmen Sie Lage und Art der Definitionslücken von f in Abhängigkeit von a. Für a = 3 erhält man die Funktion f3 , die im Folgenden mit f bezeichnet wird, d.h. 2 x“ —9 f(x)=f3(x)= R 3 x?_2x Bestimmen Sie das Verhalten der Funktionswerte f(x) für [x\\ — und in der Nähe der Definitionslücken von f. Geben Sie auch die Gleichungen der Asymptoten des Graphen von f an. Untersuchen Sie das Monotonieverhalten der Funktion f und ermitteln Sie damit Art und Lage der Extrempunkte des Graphen von f . Runden Sie dabei die Ergebnisse auf‘ zwei Nachkommastellen. —2x2+18x-18 [ mögliches Teilergebnis: g (x)= 5 a (x“ —2x) Geben Sie die Nullstellen von f an und zeichnen Sie mit Hilfe Ihrer bisherigen Ergeb- nisse und geeigneter, zusätzlich berechneter Funktionswerte den Graphen der Funkti- on f mit seinen Asymptoten für -5<x=<10 in ein kartesisches Koordinatensystem. Maßstab: 1 LE = 1 cm Zeigen Sie, dass für x < 0 die Funktion F:x —> x-—2,5-In(2-x)+4,5-In(-x) mit Dr =]-%3;0[ eine Stammfunktion der Funktion f ist. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A II: 1.4.5 | Der Graph von f schneidet die Winkelhalbierende des I. und III. Quadranten im Punkt P. Bestimmen Sie mit Hilfe des Newton-Verfahrens näherungsweise die Koordinaten des Punktes P. Beginnen Sie mit dem Startwert xg =-1,5 und führen Sie zwei Nähe- rungsschritte durch. Runden Sie das Ergebnis auf drei Nachkommastellen, [ Ergebnis: P(—1,426 | -1,426) ] 1.4.6 | Der Graph der Funktion f, die Winkelhalbierende des I. und III. Quadranten und die x-',
      tipps: [
        "Integral: Stammfunktion $F(x)$ bilden, $[F(x)]_a^b = F(b)-F(a)$ auswerten.",
        "Zeigen Sie, dass gilt: fa (x) = (x + a) · (x -a). x·(x+1-a).",
        "Bestimmen Sie Lage und Alt der Definitionslücken von fa in Abhängigkeit von a."
      ]
    },
    {
      id: "2014_T2_GI",
      year: 2014, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Ein Fluglotse beobachtet zwei Flugzeuge gleichzeitig, deren jeweilige Positionen F 1 bzw. F2 sich in …",
      typen: ["GE", "LB", "AB", "KO"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie I. Seiten 6–7.",
      tags: ["Bestimmen", "Ermitteln", "Nachweisen", "Zeigen"],
      imgs: ["fap-aufgaben/2014_T2_GI.png"],
      text: 'BE 1.0 1.1 12 13 1.4 2.0 2.1 vAr „K- Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI In einem kartesischen Koordinatensystem des R} mit dem Ursprung O sind der Punkt P(7|-2|8) und die Ebenen E, F und Gx mit keIR gegeben: E: -4xj-X)+x3+18=0 ; F: 2xj+x2-12=0; G;: Xx2+x3+k=0. Ermitteln Sie eine Gleichung der Schnittgeraden s der Ebenen E und F. 3 aS [ Mögliches Ergebnis: s:X= [6]+)„ [ -1 ], AeR ] 0 1 Bestimmen Sie die Koordinaten des Punktes R, der durch Spiegelung des Ursprungs O an der Geraden s hervorgeht. Bestimmen Sie alle Werte von k, für die die drei Ebenen E, F und Gx jeweils keinen gemeinsamen Punkt haben. 9 gegeben. Bestimmen Sie die Koordinaten der Punkte S, und S, auf der Geraden h so, dass das Volumen der jeweiligen Pyramide OPQS, bzw. OPQS„, die Maßzahl 27 hat. 3 4 Zusätzlich sind die Gerade h:x= [4]+p [ 1 ] mit jı e IR und der Punkt Q(4|412) Ein Fluglotse beobachtet zwei Flugzeuge gleichzeitig, deren jeweilige Positionen Fı bzw. F, sich in einem geeignet gewählten kartesischen Koordinatensystem des R} in einem bestimmten Zeitraum durch folgende Gleichungen beschreiben lassen: / 284 [08), 4e10301; 05=| 08 J+t[6.1), ıe 10:301 OF =| -5,8 |+t1-| 0,8 ), tj e [0; ; OR =| 0,8 |+t>:| 0,1 |, t2 € [0; 1 } 1 02 1 2 40 2 Ö A Die Koordinaten von OF, und OF> haben die Einheit km, die Parameter tj und t> beschreiben jeweils die nach dem gleichzeitigen Beobachtungsbeginn verstrichene Zeit in Minuten. Auf das Mitführen der Einheiten bei den Berechnungen kann ver- zichtet werden. Zeigen Sie, dass sich die Flugbahnen schneiden, es aber zu keiner Kollision kommt. Weisen Sie nach, dass zum Zeitpunkt t ab Beobachtungsbeginn für den Abstand d(t) zwischen beiden Flugzeugen gilt: d(t)= 0,57t2 —9,24t+53,24 . Bestimmen Sie außerdem den Zeitpunkt t;n (gerundet auf eine Nachkommastelle), zu dem der qua- drierte Abstand (also d(t)2) am geringsten ist.',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Ermitteln Sie eine Gleichung der Schnittgeraden s der Ebenen E und F. [ Mögliches Ergebnis: s: X~ [ n+ A. { ;i} A. e IR .",
        "Bestimmen Sie alle Werte von k, für die die drei Ebenen E, Fund Gk jeweils keinen gemeinsamen Punkt haben."
      ]
    },
    {
      id: "2014_T2_GII",
      year: 2014, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Die Ebene E schneidet die Koordinatenachsen in den Punkten X, Y und Z. Bestim- men Sie das Volumen der …",
      typen: ["VL", "GE", "LB", "SW", "KO"],
      afb: [2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie II. Seiten 6–7.",
      tags: ["Berechnen", "Bestimmen", "Untersuchen"],
      imgs: ["fap-aufgaben/2014_T2_GII.png"],
      text: 'BE 1.0 11 1.2 1.3 1.4.0 1.4.1 1.4.2 1.4.3 F Aufgabengruppe B: Lineare Algebra und analytische Geometrie BII In einem kartesischen Koordinatensystem des R?} mit dem Ursprung O sind die Punkte A(1|3|-2), By(k|0|1) mit keRR und C(-1/6|0) sowie die Ebene E: 5x, +2x2 +2x3 =4 gegeben. Die Ebene E schneidet die Koordinatenachsen in den Punkten X, Y und Z. Bestim- men Sie das Volumen der Pyramide OXYZ. Bestimmen Sie den Wert für k so, dass die Vektoren ABy und AC orthogonal zu- einander sind. Berechnen Sie den Wert des Parameters k so, dass der Flächeninhalt F(k) des Drei- ecks AByC minimal wird. Hinweis: Es genügt, den Term unter der Wurzel zu be- trachten. [ Mögliches Teilergebnis: F(k) = %\\ 13k? —38k+322 ] Die Ebene Hy enthält das Dreieck AB;C und wird beschrieben durch die Gleichung Hy :-15xı —(2k+4)x> +(3k -9)x3 =-12k-9 (Nachweis nicht erforderlich). Untersuchen Sie, für welche Werte von k sich die Ebenen E und Hy in einer gemein- samen Geraden schneiden. Berechnen Sie für k = 3 eine Gleichung der Schnittgeraden von E und H3 sowie den Schnittwinkel zwischen Eund H3 auf eine Nachkommastelle gerundet. Bestimmen Sie den Wert für k so, dass Hy den Ursprung enthält. Untersuchen Sie anschließend, ob in diesem Fall der Ursprung O im Inneren des Dreiecks ABıC liegt. [ Teilergebnis: k= —0,75 ]',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "Die Ebene E schneidet die Koordinatenachsen in den Punkten X, Y und Z. Bestim- men Sie das Volumen der Pyramide OXYZ.",
        "Berechnen Sie den Wert des Parameters k so, dass der Flächeninhalt F(k) des Drei- ecks ABkC minimal wird. Hinw."
      ]
    },
    {
      id: "2015_T2_AI",
      year: 2015, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Gegeben sind nun die reellen Funktionen g mit g : x  ln  2 +  und f mit  3 f : x  g(x) − g(− x) …",
      typen: ["KD", "PB", "IN", "EF"],
      afb: [1, 2], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Nachweisen"],
      imgs: ["fap-aufgaben/2015_T2_AI_1.png", "fap-aufgaben/2015_T2_AI_2.png"],
      text: 'BE 1.0 11 1.2 1.3 1.4 2.0 2.1 2.2 2.3 2.4 2.5 -2- Aufgabengruppe A: Analysis AI 1 Gegeben ist die reelle Funktion g/:x>—>6 mit der Definitionsmenge +X Dg” =]-6;6[. Sie ist die Ableitungsfunktion der reellen Funktion g, welche die Definitionsmenge Dg = Dg/ besitzt. Bestimmen Sie das Verhalten von g/ (x) an den Rändern der Definitionsmenge. Bestimmen Sie das Monotonieverhalten von g. Geben Sie mit Hilfe der Ergebnisse aus yA 1.1. und 1.2 für jeden der abgebildeten 4 Graphen G;i, G2 und G3 eine kurze 3 Gz Begründung an, ob der jeweilige Graph der Graph der Funktion g sein kann. 4 z 12 3 4 M G, Ermitteln Sie einen Funktionsterm g(x) für den Fall, dass die Funktion g eine Nullstelle bei x =-—3 hat. Gegeben sind nun die reellen Funktionen g mit g:x—> 1n 2+%) und f mit f:x—> g(x)-g(-x) und der Definitionsmenge D£;=]-6;6[ sowie dem zugehörigen Graphen Gf. Weisen Sie nach, dass für den Funktionsterm von f gilt: f(x)= ln[g+ X) . Berechnen Sie die Nullstelle von f und zeigen Sie, dass der Graph von f punktsymmetrisch zum Ursprung ist. Untersuchen Sie das Monotonieverhalten von f. [ Mögliches Teilergebnis: f/(x) 2L2 ] 36-x Zeichnen Sie mit Hilfe bisheriger Ergebnisse und geeigneter Funktionswerte den Gra- phen von f für x e D+£ in ein kartesisches Koordinatensystem. Maßstab: 1 LE = 1cm. Gegeben ist die Funktion F:x —> x»Ln[2+ X )+ 6-In (36 - x2) mit der Definitions- —X menge Dr =D<+. Zeigen Sie, dass F eine Stammfunktion von f ist. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A I: 2.6.0 2.6.1 2.6.2 3.0 3.1 3.2 3.3 Die x-Achse, der Graph G£ und die Gerade mit der Gleichung x = k mit 0<k<6 schließen ein endliches Flächenstück mit der von k abhängigen Maßzahl A(k) des Flächeninhalts ein. Kennzeichnen Sie dieses Flächenstück für k = 4 in Ihrem Schaubild aus 2.4 und zeigen Sie, dass für A(k) gilt: A(k)=(k+6)-In(k+6)+(6-k)-In(6-k)-121n(6) .. Weisen Sie mit Hilfe einer der l’Hospitalschen Regeln nach, dass für den linksseitigen Grenzwert gilt: lim [(6-k)-In(6-k)]=0. k—>67 Berechn',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Bestimmen Sie das Verhalten von g / (x) an den Rändern der Definitionsmenge.",
        "Geben Sie mit Hilfe der Ergebnisse aus 1.1. und 1.2 für jeden der abgebildeten Graphen G1 , G 2 und G 3 eine k."
      ]
    },
    {
      id: "2015_T2_AII",
      year: 2015, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Gegeben ist die reelle Funktion g : x  ln ( f (x) ) mit der Funktion f aus 1.4.0 und der maximalen …",
      typen: ["KD", "IN", "EF"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Begruenden", "Berechnen", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2015_T2_AII_1.png", "fap-aufgaben/2015_T2_AII_2.png"],
      text: 'BE 1.0 11 1.2 1.3 1.4.0 1.4.1 1.4.2 1.4.3 2.0 2.1 -4- Aufgabengruppe A: Analysis AI 2 . . : X“ —2Xx+a . a ; Gegeben sind die reellen Funktionen f :x —> DE mit der jeweils maximalen X- Definitionsmenge D“ < R und aeR. Geben Sie die maximale Definitionsmenge D; an und bestimmen Sie die Art der a Definitionslücke von f„ in Abhängigkeit von a. Bestimmen Sie in Abhängigkeit von a die Lage und die Vielfachheiten der Nullstellen von f,. Ermitteln Sie für a > 0 die Art und die Abszisse aller relativen Extrempunkte des Graphen von f, . —4x-a+4 ] x?_4x+4 [ Mögliches Teilergebnis: fa/(x): Für a = 1 erhält man die Funktion f;, die im Folgenden mit f bezeichnet wird, d. h. x?_2x+1 f60=f00)=" —7 Bestimmen Sie die Gleichungen aller Asymptoten des Graphen von f. Geben Sie auch die Koordinaten der Extrempunkte des Graphen von f an. Zeichnen Sie unter der Verwendung der bisherigen Ergebnisse und geeigneter Funktionswerte den Graphen von f sowie sämtliche Asymptoten für -2 <x=<6 in ein kartesisches Koordinatensystem. Maßstab: 1LE = 1cm. Der Graph von f und die Winkelhalbierende des I. Quadranten schließen mit den senkrechten Geraden mit den Gleichungen x = 3 und x = b mit beRund b > 3 ein Flächenstück ein. Kennzeichnen Sie dieses Flächenstück in Ihrer Zeichnung aus 1.4.2 für b = 4. Bestimmen Sie anschließend den Wert von b so, dass der Flächeninhalt dieses Flächenstücks die Maßzahl 2 hat. Gegeben ist die reelle Funktion g:x —> ln(f(x)) mit der Funktion f aus 1.4.0 und der maximalen Definitionsmenge Dg c R. Begründen Sie ohne weitere Rechnung, dass für die Definitionsmenge Dg gilt: Dg =]2;0[. Untersuchen Sie außerdem das Verhalten der Funktionswerte g(x) an den Rändern der Definitionsmenge Dg. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A II: 2.2 2.3 3.0 3.1 3.2 3.3 3.4 Bestimmen Sie die Art und die Koordinaten des relativen Extrempunkts des Graphen der Funktion g. X-3 [ Mögliches Teilergebnis: g/ (x)= — X“ —3xX+2 Begründen Sie ohne Verwendung der 2. Ableitung von g, dass der Gra',
      tipps: [
        "Kurvendiskussion: $f'(x)$ berechnen, Extrempunkte bei $f'(x_0)=0$ mit $f''(x_0)\\neq 0$.",
        "Geben Sie die maximale Definitionsmenge Dfa an und bestimmen Sie die Art der Definitionslücke von f a in Abhängigkeit vo.",
        "Ermitteln Sie für a > 0 die Art und die Abszisse aller relativen Extrempunkte des Graphen von f a . / x 2 − 4x."
      ]
    },
    {
      id: "2015_T2_GI",
      year: 2015, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Beim Bau einer neuen Zahnradbahn ist ein Bergmassiv zu untertunneln (siehe Schnittskizze – nicht …",
      typen: ["GE", "LB", "SW"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie I. Seiten 6–7.",
      tags: ["Aufstellen", "Ermitteln", "Nachweisen", "Untersuchen"],
      imgs: ["fap-aufgaben/2015_T2_GI_1.png", "fap-aufgaben/2015_T2_GI_2.png"],
      text: 'BE 30 1.0 11 1.2 1.3 1.4 2.0 2.1 2.2 -6- Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI In einem kartesischen Koordinatensystem des IR} sind die Ebenen E, und F sowie die Gerade h gegeben. Dabei gilt: „ (3 2 Ea:2a:x, -(a-1):xz3+2=0 mit a e R und h:x:[4]+)„[ 1 ] AeR. —1 Die Ebene F enthält die Gerade h und verläuft parallel zur x>-Achse. Stellen Sie eine Gleichung der Ebene F in Koordinatenform auf. [ Mögliches Teilergebnis: F:x;+2xz-1=0 ] Untersuchen Sie die gegenseitige Lage von h und E, in Abhängigkeit von a. Untersuchen Sie, ob sich die Ebenen E, und F senkrecht schneiden können, und für welchen Wert von a die Ebenen E, und F parallel sind. Ermitteln Sie alle Werte von a, für die sich die Ebenen E, und F unter einem Winkel von 45° schneiden. Beim Bau einer neuen Zahnradbahn ist X3 ein Bergmassiv zu untertunneln (siehe Schnittskizze — nicht maßstäblich). Um die Bauzeit des Tunnels zu verkürzen, wird von den Punkten A und B aus gleichzeitig je eine zylinderförmige Tunnelröhre mit einem Radius von 2 m gebohrt. Für die Berechnungen wird ein kartesisches Koordinatensystem des R} verwendet, dessen x1x>-Ebene waagrecht verläuft. In diesem Koordinatensystem gilt A(2|100[0) und B(1002|350|254) . Die Mittelachsen der Tunnelröhren liegen auf . (4 den Geraden gj bzw. g,. Vom Punkt A aus wird in Richtung u:[l] und vom 1 Punkt B aus in die Gegenrichtung gebohrt. Alle Koordinaten sind in Meter angegeben. Auf das Mitführen der Einheiten kann bei den Berechnungen verzichtet werden. Weisen Sie nach, dass der Punkt B genau 4 m oberhalb (in x3-Richtung) von g; liegt. Untersuchen Sie, ob bei diesen Verhältnissen die Tunnelröhren wenigstens teilweise aufeinander treffen. BE 30 1.0 11 1.2 1.3 1.4 2.0 2.1 2.2 2.3 „7- Aufgabengruppe B: Lineare Algebra und analytische Geometrie B II In einem kartesischen Koordinatensystem des R*sind die Geraden £1, £2 und die Ebene F _ gegeben: „ 2 1 „ (2 1 g1:x=|2|+A|-2|, AeR; g2:x=|2|+4| 5 |, neR; 0 1 0 3 F:2xi) +5x> +8x3 -11=0. Begründe',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "Stellen Sie eine Gleichung der Ebene F in Koordinatenform auf. [ Mögliches Teilergebnis: F : x1 + 2x 3 − 1 =0 ].",
        "Untersuchen Sie, ob sich die Ebenen E a und F senkrecht schneiden können, und für welchen Wert von a die Ebene."
      ]
    },
    {
      id: "2016_T2_AI",
      year: 2016, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Seit Beginn des 20. Jahrhunderts führt der vom Menschen verursachte zusätzliche Ausstoß von …",
      typen: ["KD", "TG", "PB", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Untersuchen"],
      imgs: ["fap-aufgaben/2016_T2_AI_1.png", "fap-aufgaben/2016_T2_AI_2.png"],
      text: 'BE 10 1.0 1.1 1.2 1.3.0 1.3.1 1.3.2 1.3.3 1.3.4 -2- Aufgabengruppe A: Analysis AI (x+2a)-(x-a) x-5 a €RR unabhängigen Definitionsmenge Dr = !R \\{5}. Gegeben sind die reellen Funktionen fa : Xx —> in der vom Parameter Bestimmen Sie in Abhängigkeit von a die Anzahl der Nullstellen von f . Berechnen Sie sämtliche Werte von a, für welche die Steigung des Graphen von fa an der Stelle x = 4 den Wert —6 besitzt. Für die nun folgenden Aufgaben wird die Funktion g mit maximaler Definitions- menge Dg < R und der Funktionsgleichung g(x)=ln(f‚g(x)) betrachtet, d.h. es gilt g(x)=ln[%). Zeigen Sie, dass für den maximalen Definitionsbereich Dy der Funktion g gilt: Dg R und Dy =}2;4[u]5;o0[. Untersuchen Sie das Verhalten der Funktionswerte g(x) an den Rändern des Definitionsbereiches und geben Sie die Gleichungen aller senkrechten Asymptoten des Graphen von g an. Bestimmen Sie die maximalen Monotonieintervalle von g und ermitteln Sie mithilfe dieser Monotonieintervalle die Art und Koordinaten der relativen Extrempunkte des Graphen von g. Verwenden Sie dabei, dass für x € Dg gilt: (x+2)-(x-4)-(x-5)>0 Runden Sie die Ergebnisse auf eine Nachkommastelle. x2 _10x+18 [ Mögliches Teilergebnis: g/(x)=w ] Die Funktion g besitzt näherungsweise die beiden Nullstellen x4 = -0,8 und x> = 3,8 (Nachweis nicht erforderlich). Zeichnen Sie unter Verwendung aller bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen von g für -2<x<9 zusammen mit seinen senkrechten Asymptoten in ein kartesisches Koordinatensystem. Maßstab: 1 LE * 1 cm. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A I: 2.0 2.1 2.2.0 2.2.1 2.2.2 2.2.3 2.2.4 2.2.5 Seit Beginn des 20. Jahrhunderts führt der vom Menschen verursachte zusätzliche Ausstoß von Kohlenstoffdioxid (CO,>) zu einer Verstärkung des Treibhauseffektes, das heißt zu einem globalen Temperaturanstieg mit weitreichenden Folgen. Nach einem mathematischen Modell soll die Entwicklung der weltweiten CO»- Emissionen abgeschätzt werden. Dieses Modell lä',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Bestimmen Sie in Abhängigkeit von a die Anzahl der Nullstellen von fa .",
        "Seit Beginn des 20. Jahrhunderts führt der vom Menschen verursachte zusätzliche Ausstoß von Kohlenstoffdioxid ."
      ]
    },
    {
      id: "2016_T2_AII",
      year: 2016, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "In einer Box werden Mehlwürmer als Futter für Schildkröten gezüchtet. Der Bestand der Mehlwürmer in …",
      typen: ["KD", "TG", "PB", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Berechnen", "Beschreiben", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2016_T2_AII_1.png", "fap-aufgaben/2016_T2_AII_2.png"],
      text: 'BE 11 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8.0 1.8.1 1.8.2 -4- Aufgabengruppe A: Analysis Al Gegeben ist die reelle Funktion f:x>—>% mit der maximalen )<-(1—In(x))2 Definitionsmenge D; < R. Der Graph von f wird mit G£ bezeichnet und besitzt die y- Achse als Asymptote. Bestimmen Sie die maximale Definitionsmenge D+;. Geben Sie die Definitionslücke von f und ihre Art genau an. Untersuchen Sie das Verhalten der Funktionswerte f(x) für x—>% und für x—>e. Geben Sie die Art und die Gleichungen der daraus folgenden Asymptoten des Graphen von f an. Bestimmen Sie die maximalen Monotonieintervalle von f und ermitteln Sie mithilfe dieser Monotonieintervalle die Art und Koordinaten des relativen Extrempunktes des Graphen von f. 1+In(x) x2 -(1—In(x))3 Zeichnen Sie mithilfe der bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen der Funktion f für 0<x<66 sowie mit Farbe sämtliche Asymptoten von G+; in ein kartesisches Koordinatensystem. Maßstab: 1 LE * 2 cm. [ Mögliches Teilergebnis: f’(x)= Bestimmen Sie eine Gleichung der Tangente t an G+{, die durch den Ursprung verläuft. Zeichnen Sie die Tangente t in das Koordinatensystem von Teilaufgabe 1.4 ein. [ Teilergebnis: t(x)=x ] Die Tangente t schneidet G£ im Punkt S(xslf(xs )) Berechnen Sie mithilfe des Newton-Verfahrens einen Näherungswert für die Schnittstelle x<. Verwenden Sie dazu den Startwert xg =3,5, führen Sie zwei Näherungsschritte durch und runden Sie das Ergebnis auf drei Nachkommastellen. Gegeben ist die reelle Funktion F: x —> mit der Definitionsmenge Dr =D+#. 1 1-In(x) Zeigen Sie, dass F eine Stammfunktion von f in DF ist. Der Graph von f, die Tangente t und die Gerade ka mit der Gleichung x=a mit aeR 10<a<1 schließen rechts von ka ein endliches Flächenstück mit der von a abhängigen Maßzahl A(a) des Flächeninhalts ein. Kennzeichnen Sie dieses Flächenstück für a=0,25 in Ihrem Schaubild aus 1.4 und 1 1-In(a) Ermitteln Sie den rechtsseitigen Grenzwert von A(a) für a >0*, zeigen Sie, dass für A(a) gilt: A',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Bestimmen Sie die maximale Definitionsmenge Df . Geben Sie die Definitionslücke von f und ihre Art genau an.",
        "Bestimmen Sie die maximalen Monotonieintervalle von f und ermitteln Sie mithilfe dieser Monotonieintervalle di."
      ]
    },
    {
      id: "2016_T2_GI",
      year: 2016, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Bestimmen Sie eine Gleichung der Ebene E in Normalenform.",
      typen: ["VL", "GE", "AB", "KO"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie I. Seiten 6–7.",
      tags: ["Berechnen", "Bestimmen", "Ermitteln", "Untersuchen"],
      imgs: ["fap-aufgaben/2016_T2_GI_1.png", "fap-aufgaben/2016_T2_GI_2.png"],
      text: 'BE 30 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 -6- Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI In einem kartesischen Koordinatensystem des R3 sind die Punkte A(8|5[6), B(411|-1), Pa(2Ja|-1) und Qp(-2b|b|b+1) mit a, belR sowie die Geraden h4 und h2 gegeben: N 2 1 „ ( —1 hpix=| 3 |+A-|-1],AeR; ha:!x=|-1/+H-| 1 |,H€ER. —1 0 3 0 Die Geraden h4 und h> spannen die Ebene E auf. Bestimmen Sie eine Gleichung der Ebene E in Normalenform. Die Ebene E:4x4+4x> +7xz3 -13=0 schneidet die x4-xg-Ebene in der Geraden s. Ermitteln Sie eine Gleichung von s. Die Gerade g geht durch den Punkt A und schneidet die Ebene E im Punkt P3a. Ermitteln Sie eine Gleichung von g. Berechnen Sie den Abstand des Punktes A von der Ebene E sowie die Koordinaten des Spiegelpunktes A\', der durch Spiegelung des Punktes A an der Ebene E entsteht. Prüfen Sie, ob es einen Wert für den Parameter b gibt, sodass die Vektoren BA und BÖ; orthogonal sind. Berechnen Sie die Maßzahl des Volumens der dreiseitigen Pyramide ABQ2P3. Gegeben ist zusätzlich die Geradenschar fc: „ (6 c-15 fo:!X=|5|+K- c2 mit k,ceR. 4 0 6 7 mit veRR mit einer Geraden aus der Geradenschar fe schneidet. „ (8 6 Untersuchen Sie, für welche Werte von c sich die Gerade g: x = [5} +U- [2] BE 30 1.0 1.1 1.2.0 1.2.1 1.2.2 1.2.3 1.3.0 1.3.1 1.3.2 „7- Aufgabengruppe B: Lineare Algebra und analytische Geometrie BIl Ein Meeresgebiet ist festgelegt durch die Koordinaten eines ruhenden Forschungsschiffes F( 6000 | 1000 | 0), den Fußpunkt eines Leuchtturms L( 200 | 5000 | 0) sowie eines zunächst an der Wasseroberfläche fahrenden Unterseeboots mit Ur ( 40—2k | —20 | 0) mit kEIlR. Die angegebenen Koordinaten stellen Punkte in einem dreidimensionalen kartesischen Koordinatensystem dar. Seegang, Drift und Wind sowie die Erdkrümmung bleiben bei den Berechnungen unberücksichtigt. Die Koordinaten sind alle in Metern angegeben, auf das Mitführen der Einheit Meter kann bei den Berechnungen verzichtet werden. Zeigen Sie, dass sich das U-Boot geradlinig auf',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Bestimmen Sie eine Gleichung der Ebene E in Normalenform.",
        "Die Gerade g geht durch den Punkt A und schneidet die Ebene E im Punkt Pa. Ermitteln Sie eine Gleichung von g."
      ]
    },
    {
      id: "2017_T2_AI",
      year: 2017, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Gegeben sind nun die reellen Funktionen fa : x   4 in der vom 1  0,25  x 2 Parameter a  IR …",
      typen: ["TG", "PB", "IN", "EF", "GL"],
      afb: [1, 2, 3], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Markieren"],
      imgs: ["fap-aufgaben/2017_T2_AI_1.png", "fap-aufgaben/2017_T2_AI_2.png"],
      text: 'BE 10 1.0 1.1 1.2 1.3 1.4 1.5 1.6 2.0 2.1 2.2 2.3 2.4 -2- Aufgabengruppe A: Analysis AI (x-2)” 1+0,25.x? Definitionsmenge D# ="IR . Der Graph der Funktion wird mit G£ bezeichnet. Gegeben ist die reelle Funktion f:x—> in ihrer maximalen Ermitteln Sie das Verhalten der Funktionswerte f(x) an den Rändern der Definitionsmenge und geben Sie Art und Gleichung der Asymptote von G+ an. Berechnen Sie die Koordinaten des Schnittpunkts von G£ mit seiner Asymptote. Bestimmen Sie die maximalen Krümmungsintervalle von Gg . 2 [ Mögliches Teilergebnis: f/(x)= x —4 (1+0‚25-x2)2 Geben Sie die Nullstelle von f sowie deren Vielfachheit an und zeichnen Sie unter Verwendung bisheriger Ergebnisse und weiterer geeigneter Funktionswerte den Graphen von f sowie dessen Asymptote für -6<x<6 in ein kartesisches Koordinatensystem. Berücksichtigen Sie dabei, dass der Graph von f den Hochpunkt H(-21|8) besitzt, ein Nachweis ist nicht erforderlich. Maßstab: 1 LE £ 1cm. Zeigen Sie, dass die Funktion F:x>—>—8»ln(x2+4)+4-x mit Dr =R eine Stammfunktion von f ist. Der Graph G+£ schließt zusammen mit den Koordinatenachsen im 1. Quadranten ein endliches Flächenstück ein. Markieren Sie dieses Flächenstück in Ihrer Zeichnung aus 1.4 und zeigen Sie, dass die Maßzahl seines Flächeninhaltes A =8-(1—|n(2)) beträgt. —4.(a-1):x 1+0,25.x2 Parameter aelR unabhängigen Definitionsmenge Dfa =|R. Der Graph einer Gegeben sind nun die reellen Funktionen fa:x —> +4 in der vom solchen Funktion wird mit Gfa bezeichnet. Überprüfen Sie, ob die Funktion f aus Aufgabe 1.0 zur Funktionenschar fa gehört. Bestimmen Sie alle Werte von a, für welche f genau zwei einfache Nullstellen besitzt. Untersuchen Sie, ob es einen Wert von a gibt, sodass Gfa symmetrisch zur y-Achse ist. Ermitteln Sie alle Werte von a, für welche die Tangente an der Stelle x = 0 an den Graphen Gfa einen Steigungswert von m <-4 aufweist. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A I: 3.0 3.1 3.2 3.3 3.4 Zur Gewinnung von Energieholz eignen sich schnell w',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Ermitteln Sie das Verhalten der Funktionswerte f(x) an den Rändern der Definitionsmenge und geben Sie Art und Gleichung .",
        "Bestimmen Sie die maximalen Krümmungsintervalle von Gf . x2  4 [ Mögliches Teilergebnis: f / (x)  ]   1  ."
      ]
    },
    {
      id: "2017_T2_AII",
      year: 2017, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Unter der Tageslänge versteht man die Dauer von Sonnenaufgang bis Sonnenuntergang. Sie ist von der …",
      typen: ["KD", "TG", "PB", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Untersuchen"],
      imgs: ["fap-aufgaben/2017_T2_AII_1.png", "fap-aufgaben/2017_T2_AII_2.png"],
      text: 'BE 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7.0 1.7.1 1.7.2 „4- Aufgabengruppe A: Analysis Al X e e2X 14 Gegeben ist die reelle Funktion f:x —> mit der maximalen Definitionsmenge Df=R. Bestimmen Sie das Verhalten der Funktionswerte von f für ‘x‘ —. Geben Sie Art und Gleichung der Asymptote des Graphen von f an. Untersuchen Sie den Graph von f auf Symmetrie zum Koordinatensystem. Untersuchen Sie das Monotonieverhalten der Funktion f und ermitteln Sie damit Koordinaten und Art des Extrempunkts des Graphen von f. -2 [ Mögliches Teilergebnis: f/(x)=(öex —693X)-(e2)‘ +1) ] Zeigen Sie, dass der Ansatz f”(x) =0 auf die Gleichung e _ 6e2* +1=0 führt. Der Graph von f besitzt im 1. Quadranten genau einen Wendepunkt W4. Ermitteln Sie die Koordinaten des Punktes W4 auf zwei Nachkommastellen gerundet. Zeichnen Sie unter der Verwendung der bisherigen Ergebnisse und geeigneter Funktionswerte den Graphen von f sowie mit Farbe seine Asymptote für - 4 <x<4 in ein kartesisches Koordinatensystem. Maßstab: 1 LE * 1cm „a2x Gegeben sind zudem die reellen Funktionen h: x —> 22x; und H:x —> In(ea\'x +b) e“ +1 mit den Definitionsmengen Dp =Dy =R und a,beR. Die Koeffizienten a und b sind dadurch festgelegt, dass der Graph von H die y-Achse im Punkt T(O‘ In(2)) schneidet und die Tangente an den Graphen von H im Punkt T parallel zur Winkelhalbierenden des 1. und 3. Quadranten verläuft. Berechnen Sie mithilfe dieser Angaben die Koeffizienten a und b. Zeigen Sie danach, dass die Funktion H eine Stammfunktion der Funktion h in Dy ist. [ Teilergebnis: a=2; b=1 ] Der Graph von h und die x-Achse schließen mit den senkrechten Geraden mit den Gleichungen x=xg und x=u mit uelR und u>xg im 1. Quadranten ein Flächenstück ein. Dabei ist xg die Schnittstelle der Graphen von f und h. 2u Zeigen Sie, dass für die Maßzahl A(u) des Flächeninhalts gilt: A(u) = In[e 10+1] . Bestimmen Sie anschließend den Wert von u so, dass die Flächenmaßzahl A(u) den Wert In(5) annimmt. Fortsetzung siehe nächste Seite BE 70 Fortsetzung A Il',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Bestimmen Sie das Verhalten der Funktionswerte von f für x  ¥ . Geben Sie Art und Gleichung der Asymptote des Graphen v.",
        "Untersuchen Sie das Monotonieverhalten der Funktion f und ermitteln Sie damit Koordinaten und Art des Extrempu."
      ]
    },
    {
      id: "2017_T2_GI",
      year: 2017, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Im IR 3 sind die Geraden gq und h gegeben:  0  3q  1   1 1 gq : x   1   λ   2q  mit q, …",
      typen: ["VL", "GE", "LB", "AB", "SW"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie I. Seiten 6–7.",
      tags: ["Berechnen", "Bestimmen", "Ermitteln", "Untersuchen"],
      imgs: ["fap-aufgaben/2017_T2_GI_1.png", "fap-aufgaben/2017_T2_GI_2.png"],
      text: 'BE 10 30 1.0 1.1 1.2 2.0 2.1 2.2.0 2.2.1 2.2.2 -6- Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI Im R3 sind die folgenden Vektoren gegeben: . 1 „ (4)\\ — p+4 . (5 a=| 2 |,b=|0 ‚Cp= 2p mit peRR und d=| 2 |. —3 2 3-4p 3 Bestimmen Sie den Wert des Parameters p, für den die Vektoren a, b und cp eine Basis des R3 bilden. Drücken Sie den Vektor d durch eine Linearkombination der Vektoren a,bund 6;5 (d.h. für p=-2) aus. Im R3 sind die Geraden 9q und h gegeben: „ (0 3q-1 „ (1 1 9q:X= 1|+A-| 2q |mitg, AelRR; h:x=|2/|+W-| 0 |mit HER. q q+1 0 ] Untersuchen Sie die gegenseitige Lage der zwei Geraden 9q und h in Abhängigkeit von q. Setzen Sie nun q=-1. Ermitteln Sie den Schnittwinkel der Geraden g_4 und h auf eine Nachkommastelle gerundet. Die Geraden g_4 und h legen eine Ebene E fest. Bestimmen Sie je eine Gleichung der Ebene E in Parameterform und in Normalenform. Die Kirchturmspitze eines Dorfes sei der Punkt K( —2‘ 9‘ 32). Ein neugieriger Mensch steuert in dem Dorf eine Drohne entlang einer Geraden durch den Punkt „ ( P( 2| 9 1‚5) in Richtung des Vektors v = [ 2 } 6 Bei der Betrachtung wird ein kartesisches Koordinatensystem zugrunde gelegt. Die Koordinaten sind alle in Metern angegeben, auf das Mitführen der Einheit Meter kann bei den Berechnungen verzichtet werden. Berechnen Sie die kürzeste Entfernung der Drohne von der Kirchturmspitze. BE 30 1.0 1.1 1.2 1.3 1.4 1.5.0 1.5.1 1.5.2 1.6 Aufgabengruppe B: Lineare Algebra und analytische Geometrie BIl Die Abbildung zeigt einen Wintergarten, dessen Boden in der x4-x>-Ebene eines kartesischen Koordinatensystems liegt. Das rechteckige Glasdach ABCD ist von einer Markise bedeckt. Dabei wird der Abstand zwischen Glasdach und Markise vernachlässigt. Die Ebene, in der die Markise liegt, wird mit M bezeichnet. Folgende Punkte des Wintergartens sind gegeben: A( 5| 0| 5), B( 5| 4| 2), D( 0| 0] 5) und E( 5| 4| 0). Alle Koordinaten sind in Metern angegeben. Auf das Mitführen der Einheiten bei den X Berechnungen kann verzi',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Bestimmen Sie den Wert des Parameters p, für den die Vektoren a, b und cp eine Basis des IR 3 bilden.    .",
        "Im IR 3 sind die Geraden gq und h gegeben:  0  3q  1   1 1 gq : x   1   λ   2q  mit q, λ  I."
      ]
    },
    {
      id: "2018_T2_AI",
      year: 2018, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Ein Tierarzt verabreicht einer Kuh ein Medikament, dessen Wirkstoff über das Blut auch in die Milch …",
      typen: ["KD", "TG", "IN", "EF"],
      afb: [1, 2], be: 25,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis I. Seiten 2–3.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Markieren"],
      imgs: ["fap-aufgaben/2018_T2_AI_1.png", "fap-aufgaben/2018_T2_AI_2.png"],
      text: 'BE 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7.0 1.7.1 1.7.2 Aufgabengruppe A: Analysis AI 2 3 in ihrer maximalen Definitionsmenge Gegeben ist die reelle Funktion f:x —> X x e De=R. Untersuchen Sie das Verhalten der Funktionswerte von f an den Rändern der Definitionsmenge. Geben Sie Art und Gleichung der Asymptote des Graphen von f für x—> > an. Bestimmen Sie die maximalen Monotonieintervalle des Graphen der Funktion f und ermitteln Sie damit die Art und die exakten Koordinaten der Extrempunkte des Graphen von f. 7—x2+2x+3 eX [ Mögliches Teilergebnis: f/(x) ] Geben Sie die Nullstellen von f an und zeichnen Sie mithilfe der bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen von f für -2<X<£<6 in ein kartesisches Koordinatensystem. Maßstab: 1 LE £ 1 cm. Zeigen Sie, dass die Gerade t mit der Gleichung t(x):—%-x+%? die Tangente e e an den Graphen von f an der Stelle x=4 ist. Zeichnen Sie außerdem diese Tangente in Ihre Zeichnung aus 1.3 ein. Bestimmen Sie die Koeffizienten a, b und d so, dass F eine Stammfunktion von f ist: 2 F(><)=w mit a,b,de Rund DF =D4g. e _x2_ [ Ergebnis: F(x):xix2x\'*\'1 ] e Im I. Quadranten wird von beiden Koordinatenachsen, dem Graphen von f und der Tangente t ein Flächenstück eingeschlossen. Markieren Sie dieses Flächenstück in Ihrer Zeichnung von 1.3 und berechnen Sie die Maßzahl seines Flächeninhalts. Runden Sie das Ergebnis auf zwei Nachkommastellen. (Hinweis: Die Graphen von t und f haben dabei in ] 0; 4 [ keine gemeinsamen Punkte.) Betrachtet wird nun die Funktion h:x+>In(f(x)) in ihrer maximalen Definitionsmenge Dy < R. Ermitteln Sie mithilfe Ihrer bisherigen Ergebnisse Dp. Zeigen Sie mithilfe Ihrer bisherigen Ergebnisse, dass die Funktion h genau eine Nullstelle besitzt, und geben Sie ein Intervall der Länge kleiner als 1 an, in dem diese Nullstelle liegt. Fortsetzung siehe nächste Seite BE Fortsetzung A I: 70 1.7.3 2.0 2.1 2.2.0 2.2.1 2.2.2 2.2.3 2.2.4 Es gilt: h’(x) = f(i) f/(x) (Nachweis nicht erforderlich). X Ermitteln Sie ',
      tipps: [
        "Integral: Stammfunktion $F(x)$ bilden, $[F(x)]_a^b = F(b)-F(a)$ auswerten.",
        "Untersuchen Sie das Verhalten der Funktionswerte von f an den Rändern der Definitionsmenge. Geben Sie Art und Gleichung .",
        "Geben Sie die Nullstellen von f an und zeichnen Sie mithilfe der bisherigen Ergebnisse und weiterer geeigneter."
      ]
    },
    {
      id: "2018_T2_AII",
      year: 2018, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Gegeben ist die Schar der Funktionen fk durch fk : x ֏ ⋅ mit k ∈ IR in 2 x+k ihrem maximalen …",
      typen: ["KD", "TG", "PB", "IN", "EF", "GL"],
      afb: [1, 2], be: 25,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Analysis II. Seiten 4–5.",
      tags: ["Angeben", "Begruenden", "Berechnen", "Bestimmen", "Entscheiden"],
      imgs: ["fap-aufgaben/2018_T2_AII_1.png", "fap-aufgaben/2018_T2_AII_2.png"],
      text: 'BE 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 2.0 2.1 Aufgabengruppe A: Analysis AI 2 Gegeben ist die reelle Funktion f:x>—>%-Lx1+1 in ihrer maximalen X+ Definitionsmenge D{ = IR \\{-1}. Der Graph von f wird mit G; bezeichnet. Untersuchen Sie f auf Nullstellen und bestimmen Sie die Gleichungen aller Asymptoten von G# . Bestimmen Sie die maximalen Monotonieintervalle von G{ und ermitteln Sie damit die Art und die Koordinaten der relativen Extrempunkte von Gg . _ 2x2 +4x (2x +2)2 F ist eine Stammfunktion von f mit Df =]-1;>[. Ihr Graph sei Gf und verläuft durch [ Mögliches Teilergebnis: \' (x) den Ursprung. Bestimmen Sie eine Funktionsgleichung von F durch Integration. 2 [ Mögliches Ergebnis: F(x) :%x +%In(x +1)] Zeichnen Sie mithilfe der bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen G; sowie seine Asymptoten in Farbe für -4<x=<4 in ein kartesisches Koordinatensystem ein. Zeichnen Sie dann den Graphen GE von F für -1<x<4 in das Koordinatensystem ein. Maßstab: 1LE * 1cm. Die Graphen G“ und Gp schneiden sich genau einmal im I. Quadranten. Bestimmen Sie mithilfe des Newton-Verfahrens einen Näherungswert für die Abszisse dieses Schnittpunktes auf zwei Nachkommastellen gerundet. Beginnen Sie mit dem Startwert xg =1,5 und führen Sie einen Näherungsschritt durch. [ Ergebnis: x4 =1,37] Zeigen Sie, dass die Funktion H:x»—>%x3—%x+%(x+1)-ln(x+1) mit DyH =DF eine Stammfunktion von F ist. Die Graphen G+ und GE schließen im |. Quadranten zusammen mit der y-Achse ein endliches Flächenstück ein. Markieren Sie dieses Flächenstück in Ihrer Zeichnung. Berechnen Sie anschließend die Maßzahl des zugehörigen Flächeninhaltes auf zwei Nachkommastellen gerundet. 2 . Gegeben ist die Schar der Funktionen fx durch fx :x»—>%.%;+k mit keR in X+ ihrem maximalen Definitionsbereich Dj c< |R. Die Graphen werden mit G bezeichnet. Geben Sie den maximalen Definitionsbereich Dj an und bestimmen Sie die Art der Definitionslücke in Abhängigkeit von k. Fortsetzung siehe nächste Seite BE Forts',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Untersuchen Sie f auf Nullstellen und bestimmen Sie die Gleichungen aller Asymptoten von Gf .",
        "F ist eine Stammfunktion von f mit DF = ]−1; ∞[ . Ihr Graph sei GF und verläuft durch den Ursprung. Bestimmen ."
      ]
    },
    {
      id: "2018_T2_GI",
      year: 2018, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Ein Speichenreflektor für ein Fahrrad beruht auf dem Prinzip eines Tripelspiegels. Dieser reflektiert …",
      typen: ["VL", "GE", "AB", "SW", "KO"],
      afb: [2], be: 50,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "Älteres LP 17/18, T2 – Geometrie I. Seiten 6–7.",
      tags: ["Angeben", "Berechnen", "Ermitteln", "Zeigen"],
      imgs: ["fap-aufgaben/2018_T2_GI_1.png", "fap-aufgaben/2018_T2_GI_2.png"],
      text: 'BE 30 1.0 1.1 1.2 1.3 1.4 1.5 2.0 2.1 2.2 2.3 2.4 Aufgabengruppe B: Lineare Algebra und analytische Geometrie BI Im R3 sind die drei linear unabhängigen Vektoren a, 6 und G gegeben. Entscheiden und begründen Sie, welche der folgenden Aussagen stets richtig, möglich oder immer falsch sind. ‘äxb‘>o acb=0 [(4>x5)>6 =|äx&)-6 Es existiert eine Ebene, in der alle drei Vektoren a, 5 und c liegen. Es gibt einen Vektor im R} , der sich nicht als Linearkombination der Vektoren a, 5 und € bilden lässt. Ein Speichenreflektor für ein Fahrrad beruht auf dem Prinzip eines Tripelspiegels. Dieser reflektiert einfallende Strahlung unabhängig von seiner Ausrichtung weitgehend zurück zur Strahlungsquelle. Erreicht wird dieser Effekt durch drei ebene Spiegel, die aufeinander senkrecht stehen. Die drei Koordinatenebenen des R3 mit den Gleichungen in Koordinatenform Ep3: x4=0, E413: x2=0 und E42: x3=0 bilden zusammen einen derartigen Tripelspiegel. . ( Ein vom Punkt A(7| 12‘ 2) in Richtung v:[—2] ausgehender Lichtstrahl trifft im Punkt S auf die Ebene E412. Geben Sie eine Gleichung für die Gerade gg an, auf welcher der Lichtstrahl verläuft. Zeigen Sie, dass gilt: S(5| 8] 0). Ermitteln Sie eine Gleichung der Geraden g4, auf der der an der Ebene E42 reflektierte Strahl verläuft. . (3 —2 [ Mögliches Ergebnis: g4 :X :[4}+0-[—4} mit oE R ] 2 2 Zeigen Sie rechnerisch, dass bei der Reflexion des Lichtstrahls an E42 der Einfallswinkel gleich dem Ausfallswinkel ist. Berechnen Sie den Abstand von g41 zur Ecke des Tripelspiegels, die sich im Ursprung des Koordinatensystems befindet. BE 30 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 Aufgabengruppe B: Lineare Algebra und analytische Geometrie BIl Ein Hotel wurde in Form einer vierseitigen Pyramide mit gleich großen gläsernen Seitenflächen gebaut. In einem kartesischen Koordinatensystem des IR3 stellen die Punkte A(2|1|3), B(2/31/3), C(-28|31|3) und D(-28|1|3) die Eckpunkte der Grundfläche und der Punkt S(-13|16|30) die Spitze der Pyramide dar. In der Nähe des Hot',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Es gibt einen Vektor im IR 3 , der sich nicht als Linearkombination der Vektoren a , b und c bilden lässt."
      ]
    },
    {
      id: "2019_T1_Ana",
      year: 2019, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Die ganzrationale Funktion 4. Grades p und die lineare Funktion h sind auf Dp = Dh = IR definiert. In …",
      typen: ["TG", "EF", "GL"],
      afb: [1, 2], be: 20,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T1 – T1 – Analysis. Klasse 11.",
      tags: ["Angeben", "Begruenden", "Bestimmen", "Ermitteln", "Nennen"],
      imgs: ["fap-aufgaben/2019_T1_Ana_1.png", "fap-aufgaben/2019_T1_Ana_2.png"],
      text: 'T12 - Teil 1 - Analysis 2019 5 2.0 2.1 2.2 Die Funktion fÄ:x}—)(xfa)zr(x+3) mit der Definitionsmenge D_j="R ist die erste a Ableitungsfunktion der Funktion fa mit Df = IR und aelR. Bestimmen Sie sämtliche Werte für a, sodass der Graph der zugehörigen Funktion fz mehr als einen Punkt mit waagrechter Tangente besitzt. Begründen Sie, von welcher Art diese Punkte dann jeweils sind. Die ganzrationale Funktion 4. Grades p und die lineare Funktion h sind auf Dy =Dp= IR definiert. In der nachfolgenden Abbildung sind Ausschnitte der Graphen von p und h dargestellt. Hinweis: Ganzzahlige Werte können der Abbildung entnommen werden. Y n Geben Sie p(h(3)) an. Begründen Sie ohne Rechnung, wie viele reelle Lösungen die Gleichung h(p(x)):0 besitzt. Ein Becher, der zum Zeitpunkt tg =0 mit 60 °C heißer Trinkschokolade gefüllt ist, steht in einem Raum, in dem eine konstante Umgebungstemperatur von 20 °C herrscht. Alle 27 Minuten halbiert sich die Temperaturdifferenz zwischen der Trinkschokolade und der Umgebungstemperatur. Die Funktion T beschreibt die Temperatur der Trinkschokolade in Abhängigkeit von der Zeit t in Minuten. Geben Sie für die Funktion T einen möglichen Funktionsterm T(t) an. Auf das Mitführen der Einheiten kann verzichtet werden. Fortsetzung siehe nächste Seite T12 - Teil 1 - Analysis (Fortsetzung) 2019 3 4.1 4.2 5.0 5.1 5.2 Nennen Sie jeweils eine mögliche Bedeutung der folgenden Aussagen für den Verlauf des Graphen einer beliebigen ganzrationalen Funktion k:>(|—>k(x) mit Dk= IR. 1 (a) k/(-1)<0 (b) k(-1)>0 (c) J\'k(x)dx<o —1 Die nachfolgend dargestellten Schaubilder (A) bis (D) zeigen Ausschnitte der Graphen von ganzrationalen Funktionen vom Grad n>3. \\ v y 112 / 2 Ü \\\\ l // \\A 7 ] 21 A - 7 2 (j 2 2 ]1 t1J 12 / 2 an \\\\ y [} y 2 2 \\ \' x / . \\ x 2\\_-1 0 4 2\\ ” ı A0 1 }\\ \\ i ” | Geben Sie für alle Aussagen (a), (b) und (c) aus 4.1 an, welche der dargestellten Graphen (A) bis (D) die jeweilige Aussage erfüllen. Gegeben sind folgende Funktionen mit ihrer jewe',
      tipps: [
        "Tangente: $t(x) = f'(x_0)\\,(x-x_0)+f(x_0)$. Steigung = Wert der Ableitung an der Stelle.",
        "Die ganzrationale Funktion 4. Grades p und die lineare Funktion h sind auf Dp = Dh = IR definiert. In der nachfolgenden .",
        "Begründen Sie ohne Rechnung, wie viele reelle Lösungen die Gleichung h(p ( x ) ) = 0 besitzt."
      ]
    },
    {
      id: "2019_T1_Geo",
      year: 2019, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Schwerpunkt im Dreieck · Punkte $A(1|3|-2)$, $B_k(k|2|k-1)$, $C_k(4|k+2|-1)$ – Geradenlage, Ebene",
      typen: ["VL", "GE"],
      afb: [1, 2], be: 20,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T1 – Geometrie. VL (Kl. 11) + GE (Kl. 12).",
      tags: ["Bestimmen", "Zeichnen"],
      imgs: ["fap-aufgaben/2019_T1_Geo.png"],
      text: 'T12 - Teil 1 - Lineare Algebra und analytische Geometrie 2019 3 1 2 3.0 3.1 3.2 Zeichnen Sie in das rechts abgebildete 4, 20 Koordinatensystem des IR2 je einen Repräsentanten der Vektoren ä und b ein, welche die drei folgenden — Bedingungen (1), (2) und (3) zugleich _7 erfüllen: Das Dreieck ABC hat den Schwerpunkt S, somit gilt: @=%-W. M ist dabei der Mittelpunkt der Strecke AB. Das Dreieck ABC dient als Grundfläche des abgebildeten Prismas. F DA Gegeben sind die Vektoren ä=rß‚ b=AD und t=BF. Stellen Sie den Vektor MS als Linearkombination von 3, b und € dar. In einem kartesischen Koordinatensystem des IR3 sind die Punkte A(1|3|f2), Br (k|2kl) und Cx (4|k+2|-1) mit keIR gegeben. Prüfen Sie, ob es Werte für k gibt, sodass die Punkte A, Br und Cyx auf einer Geraden liegen. Bestimmen Sie für k=1 eine Gleichung der Ebene E in Koordinatenform, in der die Punkte A, B1 und C; liegen.',
      tipps: [
        "Geradengleichung: $\\vec{x}=\\vec{p}+t\\cdot\\vec{v}$. Ebene: Normalenvektor bestimmen und Punktprobe.",
        "In einem kartesischen Koordinatensystem des IR 3 sind die Punkte A (1 3 − 2 ) , Bk (k 2 − 1) und Ck ( 4 k + 2 − 1) mit k.",
        "Bestimmen Sie für k = 1 eine Gleichung der Ebene E in Koordinatenform, in der die Punkte A , B1 und C1 liegen."
      ]
    },
    {
      id: "2019_T2_AI",
      year: 2019, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Der Graph Gf einer auf Df = IR definierten Funktion f : x ax 4 + bx3 + c mit a,b, c IR und a  0 …",
      typen: ["KD", "PB", "IN", "EF", "GL"],
      afb: [1, 2, 3], be: 17,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T2 – Analysis I. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Beurteilen", "Ermitteln", "Zeichnen"],
      imgs: ["fap-aufgaben/2019_T2_AI_1.png", "fap-aufgaben/2019_T2_AI_2.png"],
      text: 'T12 - Teil 2 - Analysis I 2019 1.0 1.1 1.2 1.3 1.4 2.0 2.1 2.2 3.0 Der Graph G£ einer auf D£=IR definierten Funktion f:x H ax* +bx? +c mit a‚b,celR und a 0 besitzt die beiden Wendepunkte W1(0|1) und W (2k3)‚ Ermitteln Sie den Funktionsterm von f . —1;c =l] Bestimmen Sie die Art und Koordinaten des relativen Extrempunktes von G£. 1 [Teilergebnis: a=z; Zeichnen Sie unter Berücksichtigung aller bisherigen Ergebnisse sowie weiterer geeigneter Funktionswerte den Graphen G£ im Bereich -1,5<x<4,25 in ein kartesisches Koordinatensystem ein. Maßstab: x-Achse: 1LE =2cm; y-Achse: 1LE=1cm Gegeben ist weiterhin die Funktion g mit der Funktionsgleichung g(x):2)w7 auf Dg=lR. Der Graph Gg dieser Funktion schließt mit dem Graphen G# ein endliches Flächenstück ein. Zeichnen Sie den Graphen von g in das Koordinatensystem von Teilaufgabe 1.3 ein, kennzeichnen Sie dieses Flächenstück und berechnen Sie die Maßzahl seines Flächeninhalts. Die ganzzahligen Koordinaten der Schnittpunkte der Graphen von f und g können aus der Zeichnung von 1.3 entnommen werden. Gegeben ist die reelle Funktion hy:x + 2x? +4kx? +8x mit kelR und th: IR. Beurteilen Sie, ob die folgende Aussage richtig ist. „Der Graph der Funktion hy ist weder achsensymmetrisch zur y-Achse noch punktsymmetrisch zum Ursprung.“ Ermitteln Sie, für welche Werte für k die Funktion hx genau eine Nullstelle besitzt. Die Anzahl bestimmter für den Menschen schädlicher Bakterien in einem Badesee ist nach einer langen Hitzeperiode zu hoch. Zur Bekämpfung der Bakterien wird deshalb mehrmals eine Substanz in den Badesee eingeleitet, welche die Bakterien abtöten soll. Aus den bisherigen seltenen Anwendungen der Substanz in den Vorjahren konnte ermittelt werden, dass sich die Bakterienanzahl im Wasser des Sees in Abhängigkeit von der Zeit t nach der letztmaligen Einleitung in recht guter Näherung mittels der 1 1 1) -7t+a Funktionsgleichung B(t):3+(f—tz+—]-e 4 mit aeIlR und telR6 vorhersagen lässt. Dabei beschreibt B(t) die Anzahl der Bakterien i',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Der Graph Gf einer auf Df = IR definierten Funktion f : x ax 4 + bx3 + c mit a,b, c IR und a  0 besitzt die beiden Wen.",
        "Bestimmen Sie die Art und Koordinaten des relativen Extrempunktes von G f ."
      ]
    },
    {
      id: "2019_T2_AII",
      year: 2019, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Gegeben ist die Funktion fa : x mit ihrer Definitionsmenge   Dfa = IR und a IR .",
      typen: ["TG", "IN", "EF"],
      afb: [1, 2, 3], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Analysis II. Klasse 12.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Interpretieren"],
      imgs: ["fap-aufgaben/2019_T2_AII_1.png", "fap-aufgaben/2019_T2_AII_2.png"],
      text: 'T12 - Teil 2 - Analysis II 2019 1.0 7|1.1 6| 1.2 1 Gegeben ist die Funktion fa:x>—>(xfa)[xzfza) mit ihrer Definitionsmenge De = IR undaelR. a Bestimmen Sie die Nullstellen von f, mit deren Vielfachheiten in Abhängigkeit von a. Bestimmen Sie diejenigen Werte für a, für die der Graph der Funktion fz eine 3 Wendetangente mit der Steigung 73 besitzt. 1.3.0 Im Folgenden sei a=4. Somit ist fa (x)=(x ‚4)(,8 ‚]_)_ 3 1.3.1 Skizzieren Sie den Verlauf des Graphen von fa im Bereich von -2<x=<5 unter Berück- sichtigung aller bisherigen Ergebnisse. 4 5| 1.3.2 Berechnen Sie das bestimmte Integral Jf4(x) dx und interpretieren Sie den Wert —- geometrisch in Bezug auf den Graphen von fg. 2.0 Bei einem Wasserkraftwerk wird durch eine Staumauer Wasser eines Flusses in einem Stauraum aufgestaut. Der Pegelstand des vor der Staumauer im Stauraum aufgestauten Wassers wird bezüglich des Bodens des Stauraums in Metern gemessen. Ab dem Zeitpunkt tg =0 stieg der Pegelstand infolge von einsetzender Schneeschmelze und Starkregen zunächst an. Daher wurde ab dem Zeitpunkt tg=0 der Pegelstand kontinuierlich in Abhängigkeit von der Zeit t in Tagen aufgezeichnet. h(t). — /{ s 0 1 2 3 4 5 6 7 8 9 10 11 12 13 Fortsetzung siehe nächste Seite T12 - Teil 2 - Analysis II (Fortsetzung) 2019 Die Abbildung zeigt einen Ausschnitt des Graphen Gp der Funktion hıtma-tZ.et 41 mit telR6, aelR* und belR\\{0}. Durch Gp wird der Pegelstand näherungsweise beschrieben. Die Ergebnisse sind auf eine Dezimalstelle zu runden. Auf das Mitführen von Einheiten kann bei den Berechnungen verzichtet werden. 1| 2.1 CGeben Sie die Bedeutung des Wertes h(o) im vorliegenden Sachzusammenhang an. 5| 2.2 Bestimmen Sie mithilfe der Abbildung aus 2.0 die Werte von a und b. 2| 2.3 Entnehmen Sie der Abbildung aus 2.0 die Zeitpunkte, zu denen der Pegelstand doppelt so hoch wie zu Beginn des Anstiegs ist. 1 1 5r 2.4.0 Im Folgenden gilt a=3 und b=fi. Die Funktion H:tt—>-—6-e 2 >(t2 +4t+8)+t mit telR$ ist eine Stammfunktion von h. 8| 2.4.1 Ermi',
      tipps: [
        "Integral: Stammfunktion $F(x)$ bilden, $[F(x)]_a^b = F(b)-F(a)$ auswerten.",
        "Gegeben ist die Funktion fa : x mit ihrer Definitionsmenge   Dfa = IR und a IR .",
        "Bestimmen Sie diejenigen Werte für a , für die der Graph der Funktion fa eine Wendetangente mit der Steigung −."
      ]
    },
    {
      id: "2019_T2_GI",
      year: 2019, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Familie Brunner besitzt ein Grundstück mit einer Rasenfläche in Hanglage. Um sich aufgrund seines …",
      typen: ["GE", "LB"],
      afb: [2], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie I. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Ermitteln", "Erstellen"],
      imgs: ["fap-aufgaben/2019_T2_GI.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie I 2019 1.0 Familie Brunner besitzt ein Grundstück mit einer Rasenfläche in Hanglage. Um sich aufgrund seines fortgeschrittenen Alters das Rasenmähen zu erleichtern, plant Herr Brunner den Kauf eines Rasenmähroboters. Für die Auswahl eines geeigneten Mähroboters möchte er vorab einige Kriterien überprüfen, um anhand von Datenblättern ein passendes Gerät auszuwählen. Hierfür legt Herr Brunner ein dreidimensionales kartesisches Koordinatensystem des R3 fest, in dem sich die ebene, viereckige Rasenfläche durch die Eckpunkte A(30|1|2), B(0|0|0), C(1|-15|5) und D(31|-1417) beschreiben lässt. Herr Brunner wählt dabei die x3-Achse so, dass die x3-Koordinate die Höhe eines Ortes auf der Rasenfläche gegenüber der horizontalen x1-x>-Ebene angibt. Die Koordinaten der Punkte sind Längenangaben in der Einheit Meter. Auf das Mitführen von Einheiten kann bei der Berechnung verzichtet werden. 5|1.1 Die Rasenfläche muss mit einem Begrenzungsdraht umfasst werden. Prüfen Sie, ob es sich bei der Rasenfläche um ein Rechteck handelt, und berechnen Sie die Mindestlänge des Begrenzungsdrahtes. Runden Sie Ihr Ergebnis auf ganze Meter. 6| 1.2 Dem Datenblatt eines Mähroboters des Modells Steinbock entnimmt Herr Brunner, dass die korrekte Funktionsweise dieses Modells für Steigungen am Hang bis zu 35 % gewährleistet ist. Prüfen Sie, ob das gewünschte Modell demnach zum Mähen der beschriebenen Rasenfläche geeignet ist. 4| 1.3 Der Mähroboter aus 1.2 schafft es, mit einer Akkuladung eine Rasenfläche mit 120 m? Flächeninhalt in zwei Stunden zu mähen. Die anschließende Ladezeit für einen Ladezyklus beträgt 1,5 Stunden. Ermitteln Sie die Zeitdauer bis die gesamte Rasenfläche gemäht ist, wenn der Mähroboter zu Beginn vollständig geladen ist, und etwaige Zeitverluste, z. B. durch das Zurückfahren des Mähroboters zur Ladestation, unberücksichtigt bleiben. Runden Sie sinnvoll. 8| 1.4 Die Ladestation für den Mähroboter soll so auf dem Rand der Rasen',
      tipps: [
        "Geradengleichung: $\\vec{x}=\\vec{p}+t\\cdot\\vec{v}$. Ebene: Normalenvektor bestimmen und Punktprobe.",
        "Familie Brunner besitzt ein Grundstück mit einer Rasenfläche in Hanglage. Um sich aufgrund seines fortgeschrittenen Alte.",
        "Dem Datenblatt eines Mähroboters des Modells Steinbock entnimmt Herr Brunner, dass die korrekte Funktionsweise."
      ]
    },
    {
      id: "2019_T2_GII",
      year: 2019, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "In einem kartesischen Koordinatensystem des IR3 sind die Ebenen E und F mit E: x1 + 2x2 − x3 = 2 und F: …",
      typen: ["GE", "SW"],
      afb: [2], be: 15,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie II. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2019_T2_GII.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie II 2019 1.0 In einem kartesischen Koordinatensystem des IR? sind die Ebenen E und F mit E: X; +2x) —-x3 =2 und F: 3x; +4x) +x3 =4 gegeben. 4| 1.1 Der Ursprung des Koordinatensystems wird an der Ebene E gespiegelt. Bestimmen Sie die Koordinaten des Bildpunktes P . 5/| 1.2 Ermitteln Sie eine Gleichung der Geraden S, in der sich die Ebenen E und F schneiden. 2.0 Über einer Haustüre soll ein nach unten geneigtes, rechteckiges Vordach angebracht werden. Zur geometrischen Beschreibung des Vordaches wird ein kartesisches Koordinatensystem derart festgelegt, dass die ebene Grundfläche des Hauses in der X1-Xz2-Ebene des Koordinatensystems liegt und die vordere linke vertikale Kante des quaderförmigen Hauses entlang der x3-Achse verläuft (siehe Skizze). Die Befestigung des Vordachs am Haus erfolgt an den Punkten A(0|2,5|3) und B(0‘1‘3) sowie durch zwei Drahtseile (gepunktete Linien). Diese werden an den Punkten C(1,5/1|2,5) und D(1,5\\2,5\\2,5) des Vordaches angebracht und jeweils im Punkt S der Hauswand verankert. Der Punkt S ist von den Punkten A und B gleich weit entfernt. X3 Vernachlässigen Sie für die Bearbeitung der folgenden Aufgaben die Dicke der Platte, aus der das Vordach besteht, sowie den Durchmesser der Drahtseile. 2 Die Koordinaten der Punkte sind Längenangaben in 1 der Einheit Meter. Auf die Verwendung von Einheiten kann bei den Berechnungen verzichtet werden. 3| 2.1 Bestimmen Sie alle möglichen Koordinaten des Punktes S, wenn die Hauswand vom Boden aus gemessen die Höhe 5 Meter aufweist. 2.2.0 Der Anker für die beiden Drahtseile wird schließlich im Punkt S(0|1,75|4) gesetzt. 3 2.2.1 Ermitteln Sie, wie viele Meter Drahtseil zur Aufhängung des Vordachs mindestens bestellt werden müssen, wenn insgesamt ein halber Meter Reserve für die Befestigungen eingeplant wird. 4| 2.2.2 Berechnen Sie den Winkel, den ein Drahtseilstück mit dem Vordach einschließt. Runden Sie das Ergebnis auf zwei Nachkommastellen. 4| 2.2',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "In einem kartesischen Koordinatensystem des IR3 sind die Ebenen E und F mit E: x1 + 2x2 − x3 = 2 und F: 3x1 + 4x2 + x3 =.",
        "Ermitteln Sie eine Gleichung der Geraden s , in der sich die Ebenen E und F schneiden."
      ]
    },
    {
      id: "2020_T1_Ana",
      year: 2020, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Die Abbildung rechts zeigt einen Ausschnitt des Graphen G H einer ganzrationalen Funktion H vierten …",
      typen: ["KD", "PB", "IN", "EF"],
      afb: [1, 2], be: 20,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T1 – T1 – Analysis. Klasse 11.",
      tags: ["Angeben", "Begruenden", "Bestimmen", "Ermitteln", "Nachweisen"],
      imgs: ["fap-aufgaben/2020_T1_Ana.png"],
      text: 'T12 - Teil 1 - Analysis 2020 1.0 Die Abbildung rechts zeigt einen y Ausschnitt des Graphen Gy einer $ ganzrationalen Funktion H vierten —7 — Grades. H ist eine Stammfunktion der —6 ; Funktion h:x+ h(x) mit Dp= Dy=IR. L s P } P(4| H(4)) ist ein Wendepunkt von Gy. —a Z L | / 2 12 3 4 5 ] L I I 2| 1.1 Geben Sie mithilfe der Abbildung aus 1.0 näherungsweise H/(4) und H”(O) an. ° 4| 1.2 Begründen Sie, ob die folgenden Aussagen jeweils wahr oder falsch sind. (a) Für die Wertemenge Wy der Funktion h gilt: Wp= IR. (b) Für alle xe ]0;4[ gilt: h/(x)>0. 4| 1.3 Begründen Sie ohne Rechnung, weshalb das Flächenstück, welches der Graph der Funktion h mit der x-Achse und den Geraden mit den Gleichungen x=6 und x=8 einschließt, vollständig im IV. Quadranten des Koordinatensystems liegt. Bestimmen Sie weiterhin die Maßzahl des Flächeninhalts dieses Flächenstücks. Hinweis: Ganzzahlige Werte können der Abbildung entnommen werden. 2.0 Gegeben ist die reelle Funktion fa:)<>—>(‚\'=1><2—1)ve1_2X mit aeIR\\{0} und der Definitionsmenge Df = IR. 4| 2.1 Ermitteln Sie die Anzahl und die Lage der Nullstellen von f in Abhängigkeit vom Wert des Parameters a. 2.2.0 Für a=-4 ergibt sich f_4 (>()=—(4><2 +1).el_zx. 2| 2.2.1 Bestimmen Sie das Verhalten der Funktionswerte von f_4 für x —+ . 6| 2.2.2 Weisen Sie die folgende Behauptung nach oder widerlegen Sie diese: „Der Graph der Funktion f_4 besitzt keinen relativen Extrempunkt.“ N N',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Die Abbildung rechts zeigt einen Ausschnitt des Graphen G H einer ganzrationalen Funktion H vierten Grades. H ist eine S.",
        "Begründen Sie, ob die folgenden Aussagen jeweils wahr oder falsch sind. (a) Für die Wertemenge Wh der Funktion."
      ]
    },
    {
      id: "2020_T1_Geo",
      year: 2020, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Kreuzprodukt $\\vec{a}_k$, lin. Abhängigkeit · Ebene $E{:}\\,x_1+3x_3=0$, Gerade $g$ – Lage, Abstand · Prisma",
      typen: ["VL", "GE", "LB", "AB", "KO"],
      afb: [1, 2], be: 20,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T1 – Geometrie. VL (Kl. 11) + GE/LB/AB/KO (Kl. 12).",
      tags: ["Angeben", "Begruenden", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2020_T1_Geo.png"],
      text: 'T12 - Teil 1 - Lineare Algebra und analytische Geometrie 2020 1.0 2|1.1 2|1.2 2.0 2|2.1 2| 2.2 3.0 2/3.1 2 3.2 12 Für die Vektoren äk‚ b und €& mit keIR im IR3 gilt: —1 1 ä,=| 0 und bxE=| 2 2k —2 Bestimmen Sie die Maßzahl des Flächeninhalts des von den Vektoren b und € aufgespannten Dreiecks. Ermitteln Sie, für welchen Wert für k die Vektoren aı b und € linear abhängig sind. In einem kartesischen Koordinatensystem des IR} sind die Ebene E: x1+3x3=0 und —1 2 die Gerade g: X=| 0 |+XA-/1 | mit AeIR gegeben. 1 0 Geben Sie jeweils die besondere Lage von g und E im Koordinatensystem an. Ermitteln Sie die Koordinaten eines Punktes D, der von der Ebene E den Abstand d=JE LE besitzt. Die Abbildung zeigt ein Prisma, bei dem die beiden parallelen und M G deckungsgleichen Trapeze ABFE und DCGH senkrecht auf der Grundfläche E ABCD stehen. A B Nehmen Sie Stellung zu folgender Aussage: „Das Volumen des Prismas berechnet sich mittels der Formel V= E)O(A_EXA—B) ‚ Begründen Sie anhand des beschriebenen Prismas, wie viele Lösungen die Gleichung A, AB+A2 AD+A3-HG=0 mit den Unbekannten A4, A, A3€IR besitzt.',
      tipps: [
        "Abstand Punkt–Ebene: $d = \\frac{|ax_1+bx_2+cx_3-d|}{|\\vec{n}|}$ (Hessische Normalform).",
        "Für die Vektoren ak , b und c mit k ∈IR im IR 3 gilt:  −1  1     ak =  0  und b× c =  2   2k   −2    .",
        "Ermitteln Sie, für welchen Wert für k die Vektoren ak , b und c linear abhängig sind."
      ]
    },
    {
      id: "2020_T2_AI",
      year: 2020, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Gegeben ist die reelle Funktion fk : x ֏ ( x + 3) ( x − 3)( x − 2k ) mit k ∈ IR und x ∈ IR. Der …",
      typen: ["KD", "TG", "PB", "IN", "EF"],
      afb: [1, 2, 3], be: 17,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T2 – Analysis I. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Ermitteln", "Interpretieren", "Zeichnen"],
      imgs: ["fap-aufgaben/2020_T2_AI_1.png", "fap-aufgaben/2020_T2_AI_2.png"],
      text: 'T12 - Teil 2 - Analysis I 2020 6 1 Der Graph Gg einer auf Dg= IR definierten ganzrationalen Funktion g dritten Grades berührt die X-Achse an der Stelle x=4 und hat im Punkt P(0|-4) einen relativen Extrempunkt. Ermitteln Sie die Gleichung dieser Funktion g. 1 2.0 Gegeben ist die reelle Funktion fk:x>—>ﬁ(x+3)z(xf3)(xf2k) mit ke IR und xe IR. Der zugehörige Graph wird mit Gfk bezeichnet. 2.1 Bestimmen Sie die Nullstellen von fx mit deren Vielfachheiten in Abhängigkeit vom Wert des Parameters k . 2.2.0 Für alle weiteren Teilaufgaben sei k=0,5. Ohne Nachweis kann verwendet werden: 1 fo,5: X> E(x4 +2x3 — 12x? 48x+27) 2.2.1 Ermitteln Sie jeweils die Art und die Koordinaten sämtlicher relativer Extrempunkte des Graphen Gfo 5* Runden Sie die Koordinaten gegebenenfalls auf zwei Nachkommastellen. 2.2.2 Zeichnen Sie den Graphen Gfo 5 im Bereich —4 <x=<23,5 mithilfe bisheriger Ergebnisse und weiterer geeigneter Funktionswerte in ein kartesisches Koordinatensystem ein (1LE=1cm). 2.2.3 Gegeben ist die Funktion wW:x+—>2,2x+5,9 mit Dw=IR. Ihr Graph ist die Wendetangente des Graphen Gf05 an der Wendestelle x =-—-2 (Nachweis nicht erforderlich). Im Il. Quadranten des Koordinatensystems schließen diese Wendetangente, die y - Achse und der Graph Gfo 5 für x>-—2 ein Flächenstück ein. Zeichnen Sie den Graphen von w in das Koordinatensystem von Teilaufgabe 2.2.2 ein, kennzeichnen Sie darin das beschriebene Flächenstück und berechnen Sie die exakte Maßzahl seines Flächeninhaltes. Fortsetzung siehe nächste Seite T12 - Teil 2 - Analysis I (Fortsetzung) 2020 3.0 Auf einer Plantage mit Ölpalmen ist ein Pilzbefall ausgebrochen, welcher zur Blattwelke der befallenen Ölpalmen führt. Durch Spritzen eines Gegenmittels können Ölpalmen von der Blattwelke geheilt werden. Die Anzahl der Ölpalmen mit Blattwelke soll in den ersten 180 Tagen ab dem ersten Auftreten der Blattwelke modellhaft durch eine Funktion p beschrieben werden. Der jeweilige Funktionswert von p soll die Anzahl der Ölpalmen, die zu eine',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Gegeben ist die reelle Funktion fk : x ֏ ( x + 3) ( x − 3)( x − 2k ) mit k ∈ IR und x ∈ IR. Der zugehörige Graph wird mi.",
        "Auf einer Plantage mit Ölpalmen ist ein Pilzbefall ausgebrochen, welcher zur Blattwelke der befallenen Ölpalme."
      ]
    },
    {
      id: "2020_T2_AII",
      year: 2020, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "( ) Der Graph der reellen Funktion h: x ֏ ⋅ −x3 + 3x 2 +9x + 5 mit der Definitionsmenge  7  Dh =  − ; …",
      typen: ["PB", "IN", "EF", "GL"],
      afb: [1, 2, 3], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Analysis II. Klasse 12.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln", "Interpretieren"],
      imgs: ["fap-aufgaben/2020_T2_AII_1.png", "fap-aufgaben/2020_T2_AII_2.png"],
      text: 'T12 - Teil 2 - Analysis II 2020 10 1.0 1.1 1.2 1.3 1 Der Graph der reellen Funktion h:x — g.(fx3 +3x2+9x+5) mit der Definitionsmenge 7 Dp z[—E;S}CIR beschreibt modellhaft das Höhenprofil eines bestimmten Gelände- querschnitts in einem Koordinatensystem nach Wahl eines geeigneten Maßstabs. Durch die Funktionswerte von h wird die Höhe gegenüber dem Meeresspiegel an jeder Stelle des Geländequerschnitts in Abhängigkeit von der Ortskoordinate x angegeben. Die Funktionswerte von h und x sind dabei Längenangaben als Vielfache von 100 Meter. Bei den Berechnungen kann auf das Mitführen der Einheiten verzichtet werden. Bestimmen Sie rechnerisch die maximale Höhe gegenüber dem Meeresspiegel auf ganze Meter gerundet für den betrachteten Geländequerschnitt. Die Funktion h besitzt an der Stelle x; =—-1 eine doppelte Nullstelle. Zeichnen Sie mithilfe dieser Information, der bisherigen Ergebnisse und weiterer geeigneter Funktionswerte den Graphen von h auf der maximalen Definitionsmenge von h in ein kartesisches Koordinatensystem (1LE =1cm). Trotz Bürgerproteste soll das Tal in der Umgebung von x; =-—1 für einen Stausee geflutet und deswegen eine Staumauer errichtet werden. Die obere Begrenzungslinie des Querschnitts der Staumauer soll parallel zur x-Achse verlaufen und sich in einer Höhe von 200 Metern gegenüber dem Meeresspiegel befinden. Markieren Sie in Ihrer Zeichnung von Teilaufgabe 1.2 die Staumauer und berechnen Sie deren Flächeninhalt in der Einheit m? exakt. 1 Gegeben sind die reellen Funktionen fz :X|—>ix3+4arxz+l und ga:x—>1—4a-x mit den Definitionsmengen D“ = D,_ =IR und dem Parameter a€ IR\\{0}. Bestimmen Sie sämtliche Werte für a, für welche die Differenzfunktion da: X> f (x)-ga(x) mit Dg„=!R, eine doppelte Nullstelle xg besitzt. Geben Sie anschließend die Bedeutung dieser doppelten Nullstelle xg für die gegenseitigen Lage der Graphen von f, und g., an. Fortsetzung siehe nächste Seite T12 - Teil 2 - Analysis II (Fortsetzung) 2020 3.0 Um für ihr neues Musik-Album zu w',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "( ) Der Graph der reellen Funktion h: x ֏ ⋅ −x3 + 3x 2 +9x + 5 mit der Definitionsmenge  7  Dh =  − ; 5 ⊂ IR beschre.",
        "Die Funktion h besitzt an der Stelle x1 = −1 eine doppelte Nullstelle. Zeichnen Sie mithilfe dieser Informatio."
      ]
    },
    {
      id: "2020_T2_GI",
      year: 2020, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Das Zelt eines Jugendzirkus weist die Form eines regelmäßigen Prismas mit aufgesetzter Pyramide auf und …",
      typen: ["GE", "LB", "SW", "KO"],
      afb: [1, 2], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie I. Klasse 11.",
      tags: ["Angeben", "Berechnen", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2020_T2_GI_1.png", "fap-aufgaben/2020_T2_GI_2.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie I 2020 1.0 Das Zelt eines Jugendzirkus weist die Form eines regelmäßigen Prismas mit aufgesetzter Pyramide auf und wird modellhaft in einem kartesischen Koordinatensystem des IR? betrachtet. Die Grundfläche des Zeltes liegt in der x1-x2-Koordinatenebene und ist ein regelmäßiges Sechseck OABCDE mit dem Mittelpunkt M(3‘3ﬁ‘0). Die Seiten des Sechsecks sind jeweils 6 m lang. Der Punkt O liegt im Koordinatenursprung, A hat die Koordinaten (6/0[0) und Aı die Koordinaten (6|0/4) . Das Dach des Zeltes wird durch eine regelmäßige sechseckige Pyramide gebildet. Die Spitze S des Zeltes liegt senkrecht über M in einer Höhe von 6 m. Die Koordinaten sind Längenangaben in der Einheit Meter. Auf die Mitführung von Einheiten während der Rechnungen kann verzichtet werden. Die Ergebnisse sind sinnvall zu runden. Zusätzlich zeigt die folgende Zeichnung den Grundriss des Zeltes in der x1-x2-Ebene. E X2 Fortsetzung siehe nächste Seite T12 - Teil 2 - Lineare Algebra und analytische Geometrie I (Fortsetzung) 2020 3| 1.1 Ermitteln Sie die Koordinaten der Eckpunkte B, C und C:. 4| 1.2 Für das Zelt und die Zirkuswagen wird eine Stellfläche benötigt, die 2,5-mal so groß ist wie die Grundfläche des Zirkuszeltes. Ein Landwirt stellt dem Zirkus eine Wiese mit einer Fläche von 240 m? zur Verfügung. Prüfen Sie, ob diese Fläche groß genug ist. [ Teilergebnis: A, =93,5m* ] 3| 1.3 Bestimmen Sie eine Gleichung der Ebene F in Koordinatenform, welche durch die Punkte 01(0‘0‘4), E‚(f3l3\\/5‘4) und S(3‘3\\/ä‘6) festgelegt wird. [ Mögliches Ergebnis: F:x, +éx2 +3x, =-12 ] 3| 1.4 Berechnen Sie den Neigungswinkel der Ebene F aus Teilaufgabe 1.3 gegenüber der Grundfläche des Zeltes. 5| 1.5 Vom Schwerpunkt SP des Dreiecks O1SE: soll senkrecht zur Ebene F ein Drahtseil bis zum Boden gespannt werden. Berechnen Sie die Länge dieses Seils. 5 1.6 Zur Abendvorstellung soll ein Lichtstrahl auf die Seitenfläche OAA,‚O, , in der sich auch der Eingang befindet, tre',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "Das Zelt eines Jugendzirkus weist die Form eines regelmäßigen Prismas mit aufgesetzter Pyramide auf und wird modellhaft .",
        "Für das Zelt und die Zirkuswagen wird eine Stellfläche benötigt, die 2,5-mal so groß ist wie die Grundfläche d."
      ]
    },
    {
      id: "2020_T2_GII",
      year: 2020, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Auf der südlichen Dachfläche ist ein Sonnenkollektor angebracht, der durch das Rechteck IJPN dargestellt …",
      typen: ["VL", "GE", "LB"],
      afb: [2], be: 15,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie II. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Erlaeutern", "Ermitteln", "Untersuchen"],
      imgs: ["fap-aufgaben/2020_T2_GII.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie II 2020 Ein Haus hat die Form eines Quaders mit oben aufgesetzter Pyramide. Das Haus wird modellhaft in einem kartesischen Koordinatensystem des IR} betrachtet. Der Punkt O liegt im Koordinatenursprung und die Punkte A und C liegen auf den Koordinatenachsen. Die Spitze S liegt senkrecht über dem Mittelpunkt der durch die Punkte O, A, B und C festgelegten X quadratischen Grundfläche des Hauses. Die südliche Dachfläche wird durch die Punkte F(12|12‘5)‚ G(0‘12|5) und S(6‘6|13) begrenzt. Die Koordinaten sind Längenangaben in der Einheit Meter. Auf die Mitführung von Einheiten während der Rechnungen kann verzichtet werden. 5/1 Der Bauherr geht davon aus, dass bei einer Dachflächenneigung von mindestens 50° gegenüber der Grundfläche Schnee problemlos von der Dachfläche abrutschen kann. Untersuchen Sie, ob die Dachneigung des Hauses hierfür ausreicht. 2.0 Auf der südlichen Dachfläche ist ein Sonnenkollektor angebracht, der durch das Rechteck IJPN dargestellt wird. Die Kante U verläuft parallel zur Kante FG. Ferner gilt: 1(9/11,7/5,4), J(3/11,7/5,4) und \\m TJ‘=3‚5 m. 6| 2.1 Der Punkt Mü ist der Mittelpunkt der Kante ä Erläutern Sie, dass der Vektor ON mit Hilfe der Gleichung ON=01+ :MpgS berechnet werden kann und bestimmen Sie die Koordinaten von N. [ Ergebnis: N(9|9,6/8,2) ] 5| 2.2 Berechnen Sie den prozentualen Anteil der südlichen Dachfläche, die vom Sonnenkollektor bedeckt ist. 7| 2.3 Die Position einer Satellitenanlage auf dem Dach eines Nachbarhauses lässt sich stark vereinfacht durch den Punkt Z(15‘27|17) beschreiben. Die Einstrahlrichtung der Sonne wird zum Zeitpunkt des vermuteten Leistungsmaximums des Sonnenkollektors durch den —5 Vektor v=| —9 | beschrieben. Untersuchen Sie durch Rechnung, ob der Schattenwurf der —4 Satellitenanlage zum Zeitpunkt des vermuteten Leistungsmaximums innerhalb der Sonnenkollektorfläche liegt. Ermitteln Sie hierfür zunächst eine Gleichung der durch die südliche Dachfläche festge',
      tipps: [
        "Geradengleichung: $\\vec{x}=\\vec{p}+t\\cdot\\vec{v}$. Ebene: Normalenvektor bestimmen und Punktprobe.",
        "Auf der südlichen Dachfläche ist ein Sonnenkollektor angebracht, der durch das Rechteck IJPN dargestellt wird. Die Kante.",
        "Berechnen Sie den prozentualen Anteil der südlichen Dachfläche, die vom Sonnenkollektor bedeckt ist."
      ]
    },
    {
      id: "2021_T1_Ana",
      year: 2021, teil: 1,
      fach: "Analysis", gruppe: "T1 – Analysis",
      titel: "Die ganzrationale Funktion f mit ihrer Definitionsmenge Df  IR hat den Grad drei. Nebenstehende …",
      typen: ["EF", "GL"],
      afb: [1, 2], be: 20,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T1 – T1 – Analysis. Klasse 11.",
      tags: ["Angeben", "Begruenden", "Bestimmen", "Ermitteln"],
      imgs: ["fap-aufgaben/2021_T1_Ana_1.png", "fap-aufgaben/2021_T1_Ana_2.png"],
      text: 'T12 - Teil 1: ohne Hilfsmittel — Analysis 2021 3 2.0 2.1 2.2 Für eine ganzrationale Funktion g vierten Grades mit ihrer Definitionsmenge Dg= IR gelten die beiden folgenden wahren Aussagen: (a) g/(3)=0 (b) g(-x)-g(x)=0 für alle xeDg Formulieren Sie für (a) und (b) jeweils eine sich mit Sicherheit aus der jeweiligen Aussage ergebende Eigenschaft des Graphen von g in Worten. Die ganzrationale Funktion f mit y ]] ihrer Definitionsmenge D{f=!R hat 3 den Grad drei. 2 Nebenstehende Abbildung zeigt 1 Gr einen Ausschnitt des Graphen —p - von f. Auf G£ liegen die Punkte 4 *]E*-2*-1*0\' 1}2 | 4 P(xp| Yp) und Q(XQ‘VQ). N / \\ / al _3 Q Geben Sie jeweils an, ob f/(Xp), f//(xP), f/(xQ) und f//(xQ) größer, kleiner oder gleich Null ist. Bestimmen Sie eine Funktionsgleichung von f . Hinweis: Ganzzahlige Werte können der Abbildung in 2.0 entnommen werden. Zur Bestimmung des Alters kohlenstoffhaltiger Fossilien wird die C-14 Methode eingesetzt. Diese nutzt aus, dass das Verhältnis von C-14-Atomen zu den C-12-Atomen in lebenden Organismen annähernd konstant ist. Nach dem Absterben des Organismus halbiert sich die Anzahl der C-14-Atome ca. alle 5730 Jahre. Die Anzahl der C-12-Atome bleibt konstant. Für die Anzahl N(t) der C-14-Atome in einem abgestorbenen Organismus gilt somit nachfolgender Zusammenhang, wobei t die Zeit in Jahren nach Absterben des Organismus und Ng die Anzahl der C-14-Atome zum Zeitpunkt t=0 beschreibt: 1 57130.t N(t)=Ng (E] Das Analyselabor Yeti 3.0 kann mit dieser Methode eine Altersbestimmung durchführen, wenn noch mindestens 3,8 % vom anfänglichen Wert Ng vorhanden sind. ; telR$ Begründen Sie, ob Yeti 3.0 kohlenstoffhaltige Fossilien bis zu einem Alter von 60000 Jahren auf ihr Alter hin untersuchen kann. Ermitteln Sie dazu überschlagsmäßig, wie viel Prozent der ursprünglichen C-14-Atome nach 57300 Jahren noch vorhanden sind. Fortsetzung siehe nächste Seite T12 - Teil 1: ohne Hilfsmittel — Analysis (Fortsetzung) 2021 4 N N 6 Bestimmen Sie rechnerisch die Lösung der',
      tipps: [
        "Kurvendiskussion: $f'(x)$ berechnen, Extrempunkte bei $f'(x_0)=0$ mit $f''(x_0)\\neq 0$.",
        "Die ganzrationale Funktion f mit ihrer Definitionsmenge Df  IR hat den Grad drei. Nebenstehende Abbildung zeigt einen A.",
        "Bestimmen Sie eine Funktionsgleichung von f . Hinweis: Ganzzahlige Werte können der Abbildung in 2.0 entnommen."
      ]
    },
    {
      id: "2021_T1_Geo",
      year: 2021, teil: 1,
      fach: "Geometrie", gruppe: "T1 – Geometrie",
      titel: "Ebene $E{:}\\,{-x_2+x_3=5}$, Punkt $P(4|-2|4)$ – Lotgerade, Schnittpunkt $L$, Spiegelpunkt · Kreuzprodukt",
      typen: ["VL", "GE", "LB"],
      afb: [2], be: 20,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T1 – Geometrie. VL (Kl. 11) + GE/LB (Kl. 12).",
      tags: ["Angeben", "Begruenden", "Berechnen", "Bestimmen", "Ueberpruefen"],
      imgs: ["fap-aufgaben/2021_T1_Geo.png"],
      text: 'T12 - Teil 1: ohne Hilfsmittel - Lineare Algebra und analytische Geometrie 2021 1.0 In einem kartesischen Koordinatensystem des IR? sind die Ebene E: —x,+X,=5 und der Punkt P(4|-2|4) gegeben. 5/| 1.1 Zeigen Sie, dass der Punkt P nicht in der Ebene E liegt. Geben Sie eine Gleichung der Geraden g durch den Punkt P an, die zur Ebene E senkrecht steht, und bestimmen Sie den Schnittpunkt L von g und E. [ Teilergebnis: L(4|-1,5|3,5) ] 3| 1.2 Für den Punkt Q gilt: OQ=OP+2-PL Berechnen Sie die Koordinaten des Punktes Q. Fertigen Sie ohne Verwendung eines Koordinatensystems eine Skizze an, aus der die gegenseitige Lage der Punkte P, Q und der Ebene E hervorgeht. 2 1 4| 2 Im IR? sind die beiden Vektoren ä=| —1 | und 5=/| 5 | gegeben. 4 ( Bestimmen Sie einen Vektor C, der senkrecht zu ä und b steht, und begründen Sie ohne Rechnung, ob die Vektoren ä, b und € eine Basis des IR} bilden. Überprüfen Sie auch, ob die Vektoren ä und b senkrecht aufeinander stehen.',
      tipps: [
        "Geradengleichung: $\\vec{x}=\\vec{p}+t\\cdot\\vec{v}$. Ebene: Normalenvektor bestimmen und Punktprobe.",
        "In einem kartesischen Koordinatensystem des IR³ sind die Ebene E:  x2  x3  5 und der Punkt P(4|2|4) gegeben.",
        "Für den Punkt Q gilt: OQ  OP  2  PL Berechnen Sie die Koordinaten des Punktes Q. Fertigen Sie ohne Verwendu."
      ]
    },
    {
      id: "2021_T2_AI",
      year: 2021, teil: 2,
      fach: "Analysis", gruppe: "Analysis I",
      titel: "Ein Architekt plant in eine dreieckige Grundstücksfläche eine rechteckige Fläche BCDE zur Bebauung. Die …",
      typen: ["KD", "PB", "IN", "EF"],
      afb: [2, 3], be: 17,
      klasse: { alt: "11", neu: "11" },
      k_hinweis: "LP 17/18, T2 – Analysis I. Klasse 11.",
      tags: ["Begruenden", "Berechnen", "Bestimmen", "Ermitteln", "Interpretieren"],
      imgs: ["fap-aufgaben/2021_T2_AI_1.png", "fap-aufgaben/2021_T2_AI_2.png"],
      text: 'T12 - Teil 2 - Analysis I 2021 1.0 1.1 1.2 1.3 Ein Architekt plant in eine dreieckige Grundstücksfläche eine rechteckige Fläche BCDE zur Bebauung. Die Grundstücksfläche wird von der y-Achse und den Graphen Gg und G; zweier linearer Funktionen g und s mit der gemeinsamen Definitionsmenge Dg =Ds =[0;60] begrenzt. Die Funktionsgleichung von s lautet s(x)=0,5:x. Die Eckpunkte B und E sollen dabei dieselbe Abszisse haben (siehe nachfolgende Abbildung). Der Abstand von der rechten Grundstücksecke R zur Strecke BE wird mit a bezeichnet. / GA ]] I f 1 \' L 1 1 1 L 1 \' F f ( o a e n d X > 10 5 10 15 20 25 30 _35 | 40 45 50 | 55 60 Die Koordinaten der angegebenen Punkte stellen Längenangaben mit der Einheit Meter dar. Bei den Berechnungen kann auf das Mitführen der Einheiten verzichtet werden. Ermitteln Sie mithilfe der Zeichnung aus 1.0 die Gleichung der Funktion g. Hierzu können der Zeichnung ganzzahlige Werte entnommen werden. Bestimmen Sie die Maßzahl A(a) des Flächeninhalts der Bebauungsfläche in Abhängigkeit des Abstands a. [Mögliches Ergebnis: A(a)=40a f%az} Aus architektonischen Gründen soll für a gelten: 10 <a<40. Ermitteln Sie den Wert von a so, dass sich eine möglichst große Bebauungsfläche ergibt. Fortsetzung siehe nächste Seite T12 - Teil 2 - Analysis I (Fortsetzung) 2021 1 2.0 Gegeben ist die reelle Funktion ga:x}—>fix3f(afl)xz+(af4)x mit x,aelR. Der Graph von g3; wird mit Gga bezeichnet. 2| 2.1 Begründen Sie, ob Gga für einen Wert von a achsensymmetrisch zur y-Achse ist. 6| 2.2 Bestimmen Sie sämtliche Werte des Parameters a, für die die Funktion ga genau eine Nullstelle besitzt. Diese eine Nullstelle soll dabei eine einfache Nullstelle sein. . . 13 2 2.3.0 Nun gilt a=4 und damit g4(x):fix —3x“ mit Dg4 =|R. 7| 2.3.1 Ermitteln Sie die maximalen Monotonieintervalle von Gg4 und bestimmen Sie die jeweilige Art und die Koordinaten der relativen Extrempunkte von Gg4 . 5 2.3.2 Berechnen Sie die Nullstellen von g4 und zeichnen Sie mithilfe der bisherigen Ergebnisse sow',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Ein Architekt plant in eine dreieckige Grundstücksfläche eine rechteckige Fläche BCDE zur Bebauung. Die Grundstücksfläch.",
        "Bestimmen Sie die Maßzahl A(a) des Flächeninhalts der Bebauungsfläche in Abhängigkeit des Abstands a.  2 2 ."
      ]
    },
    {
      id: "2021_T2_AII",
      year: 2021, teil: 2,
      fach: "Analysis", gruppe: "Analysis II",
      titel: "Gegeben ist die Funktion f : x  1 3 4  x  4x2  4x mit ihrer Definitionsmenge Df  IR .",
      typen: ["KD", "TG", "PB", "IN", "EF"],
      afb: [1, 2], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Analysis II. Klasse 12.",
      tags: ["Begruenden", "Berechnen", "Bestimmen", "Ermitteln", "Zeichnen"],
      imgs: ["fap-aufgaben/2021_T2_AII_1.png", "fap-aufgaben/2021_T2_AII_2.png"],
      text: 'T12 - Teil 2 - Analysis II 2021 1.0 1.1 1.2 1.3 2.0 2.1 2.2 1 Gegeben ist die Funktion f:x|—>z(x3 +4x2 f4x) mit ihrer Definitionsmenge Df= IR. Berechnen Sie die Koordinaten der relativen Extrempunkte des Graphen von f _ auf zwei Nachkommastellen gerundet. Die Funktion f besitzt die Nullstellen x; =0, x>=-2V2-2 und x3=2V2-2. Zeichnen Sie mithilfe dieser Information und unter Berücksichtigung der Ergebnisse aus Teilaufgabe 1.1 sowie weiterer geeigneter Funktionswerte den Graphen der Funktion f im Bereich -5<x=<2 in ein kartesisches Koordinatensystem ein. Maßstab auf beiden Achsen: 1LE=1cm. Der Graph der Funktion g mit der Gleichung g(x):a( und der Graph von f schließen zusammen im Il. Quadranten des Koordinatensystems ein endliches Flächenstück ein. Zeichnen Sie den Graphen von g in das Koordinatensystem von Teilaufgabe 1.2 ein, kennzeichnen Sie dieses Flächenstück und berechnen Sie die Maßzahl seines Flächeninhalts. Die ganzzahligen Koordinaten der gemeinsamen Punkte der Graphen von f und g können der Zeichnung entnommen werden. 1 Gegeben ist die Funktion fk:x}—>z(x3 ka2+kx) mit ihrer Definitionsmenge ka: IR und keRR. Ermitteln Sie alle Werte des Parameters k so, dass der Graph der Funktion fx an zwei Stellen waagrechte Tangenten besitzt. Bestimmen Sie die maximalen Krümmungsintervalle des Graphen der Funktion fx in Abhängigkeit vom Wert des Parameters k. Fortsetzung siehe nächste Seite T12 - Teil 2 - Analysis II (Fortsetzung) 2021 4 5 ] 3 4.0 4.1 4.2 4.3 Die nebenstehende Abbildung zeigt einen Ausschnitt [ y. des Graphen Gyp einer Funktion h mit der 4 Definitionsmenge Dp= IR. 3- Begründen Sie mithilfe der Abbildung, ob folgende G / Aussagen jeweils wahr oder falsch sind. 2 M Hinweis: 1 \\/ Antworten mit falscher oder fehlender Begründung werden mit 0 BE bewertet. a) h(x)+3>0 für alle xeIR 1 b) Ih(x)dx <o o c) Jede Stammfunktion H von h hat genau zwei Extremstellen. d) h/(3)<h(0) Auf der Internetseite der Welthungerhilfe war am 12.05.2020 über eine schwere Heuschreck',
      tipps: [
        "Schar: Parameter durch Ableitungsbedingung bestimmen – $f'(x_0)=m$ nach $a$ auflösen.",
        "Gegeben ist die Funktion f : x  1 3 4  x  4x2  4x mit ihrer Definitionsmenge Df  IR .",
        "Die Funktion f besitzt die Nullstellen x1  0, x2  2 2  2 und x3  2 2  2 . Zeichnen Sie mithilfe dieser I."
      ]
    },
    {
      id: "2021_T2_GI",
      year: 2021, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie I",
      titel: "Lesen Sie die Koordinaten der Punkte A, B und C aus der Zeichnung ab. Ermitteln Sie rechnerisch die …",
      typen: ["GE", "LB", "SW"],
      afb: [2], be: 16,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie I. Klasse 11.",
      tags: ["Berechnen", "Erlaeutern", "Ermitteln"],
      imgs: ["fap-aufgaben/2021_T2_GI.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie I 2021 1.0 Ein Holzklotz in Form eines Spats ABCDEFGH mit quadratischer Xg Grundfläche soll bearbeitet werden. Er ist in einem kartesischen Koordinatensystem H des IR} modellhaft so dargestellt, dass die Seiten DA sowie DC auf der x1- bzw. x7-Achse liegen und D im Koordinatenursprung l ! j [ liegt. Die Seite AE wird halbiert / ; / / vom Punkt P(5‘1‘3). [ Der Diagonalenschnittpunkt der Grundfläche ABCD ist Q(2]2/0). Die Koordinaten der Punkte sind Längenangaben in der Einheit Dezimeter. Auf die Mitführung al von Einheiten während der Rechnungen kann verzichtet X4 werden. 4| 1.1 _ Lesen Sie die Koordinaten der Punkte A, B und C aus der Zeichnung ab. Ermitteln Sie rechnerisch die Koordinaten des Punktes E. 6| 1.2 Die Punkte P, Q und F(G‘G‘6) legen die Ebene K fest. Ermitteln Sie jeweils eine Gleichung von K in Parameter- und Koordinatenform. [ Mögliches Ergebnis: K:9x; +3x>) —8xz3 —24 =0 ] 4/| 1.3 Berechnen Sie den Winkel, unter dem die Gerade DF auf die Ebene K trifft. Runden Sie Ihr Ergebnis auf zwei Nachkommastellen. 5| 1.4 Der Holzklotz wird entlang der Ebene K durchtrennt und H der vordere Teil weggenommen. Dadurch ergibt E G sich in der Grundfläche ABCD eine Schnittkante, die die Kante DA im Punkt R sowie die Kante CB im Punkt S schneidet. Die Schnittfläche wird durch die Punkte P, R, S und F P, begrenzt (siehe Skizze). Berechnen Sie die Koordinaten der Punkte R und S. R — —“ Q S 4| 1.5 Erläutern Sie, wie Sie den Inhalt der Fläche PRSF berechnen können, ohne diese Rechnung konkret durchzuführen. N w',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "Lesen Sie die Koordinaten der Punkte A, B und C aus der Zeichnung ab. Ermitteln Sie rechnerisch die Koordinaten des Punk.",
        "Berechnen Sie den Winkel, unter dem die Gerade DF auf die Ebene K trifft. Runden Sie Ihr Ergebnis auf zwei Nac."
      ]
    },
    {
      id: "2021_T2_GII",
      year: 2021, teil: 2,
      fach: "Geometrie", gruppe: "Geometrie II",
      titel: "Eine Skulptur aus Leichtmetall in einer Kunsthalle hat die Form eines nicht symmetrischen Trapezes ABCD, …",
      typen: ["GE", "LB", "SW"],
      afb: [2], be: 15,
      klasse: { alt: "12", neu: "12" },
      k_hinweis: "LP 17/18, T2 – Geometrie II. Klasse 11.",
      tags: ["Berechnen", "Bestimmen", "Erlaeutern", "Ermitteln"],
      imgs: ["fap-aufgaben/2021_T2_GII.png"],
      text: 'T12 - Teil 2 - Lineare Algebra und analytische Geometrie II 2021 1.0 Eine Skulptur aus Leichtmetall in einer Kunsthalle hat die Form eines nicht symmetrischen Trapezes ABCD, aus dem ein Dreieck EFG ausgeschnitten wurde. Das Trapez wird modellhaft in einem kartesischen Koordinatensystem des IR betrachtet. Der Hallenboden liegt in der x1-x2z-Koordinatenebene und der Punkt O im Koordinatenursprung. Die Punkte A(7|7]2), B(3]10/2), C(1]4/5) und D(3|2,5/5) bilden die Eckpunkte des Trapezes. Die Koordinaten der Punkte sind Längenangaben in der Einheit Dezimeter. Auf die Mitführung von Einheiten während der Rechnungen kann verzichtet werden. X3 6/| 1.1 Die Punkte A, Bund C legen die Ebene K fest. Ermitteln Sie jeweils eine Gleichung von K in Parameter- und Koordinatenform. [ Mögliches Teilergebnis: K:3x4; +4x> +10x3 =69 ] 3| 1.2 Berechnen Sie den Neigungswinkel der Trapezfläche ABCD gegenüber dem Hallenboden. Runden Sie Ihr Ergebnis auf zwei Nachkommastellen. 4| 1.3 Erläutern Sie, wie Sie den Inhalt der Trapezfläche ABCD berechnen können, ohne diese Rechnung konkret durchzuführen. Hinweis: Die ausgeschnittene Dreiecksfläche EFG ist bei der Erläuterung nicht zu berücksichtigen. 5| 1.4 Der Punkt E ist der Schnittpunkt der beiden Diagonalen AC D c und BD (siehe nebenstehende Skizze). Bestimmen Sie die Koordinaten des Punktes E. [ Mögliches Ergebnis: E(3]5/4) ] A B 5| 1.5 Für den Punkt F des Dreiecks EFG gilt: F(4,4|5,2/3,5). Berechnen Sie die Maßzahl der Länge der Dreiecksseite EF und die Koordinaten des Punktes G, wenn die Dreiecksseite FG parallel zu AB ist und ‘E‘=‘RS‘ gilt. N w',
      tipps: [
        "Schnittwinkel: $\\cos\\varphi = \\frac{|\\vec{n}_1\\cdot\\vec{n}_2|}{|\\vec{n}_1|\\cdot|\\vec{n}_2|}$.",
        "Eine Skulptur aus Leichtmetall in einer Kunsthalle hat die Form eines nicht symmetrischen Trapezes ABCD, aus dem ein Dre.",
        "Berechnen Sie den Neigungswinkel der Trapezfläche ABCD gegenüber dem Hallenboden. Runden Sie Ihr Ergebnis auf ."
      ]
    },
  ]
};
