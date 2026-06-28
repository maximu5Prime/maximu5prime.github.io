/* topics.js — Thementaxonomie Mathematik v1.1
   Datenbasis für Mindmap-Übersicht und geführte Lernpfade.
   Exportiert window.MATHE_TOPICS (synchron einbinden, kein defer). */

window.MATHE_TOPICS = {
  version: "1.1",

  levels: [
    { id: "vorklasse", label: "Vorklasse",  color: "#7c3aed", short: "VK" },
    { id: "kl10",      label: "Klasse 10",  color: "#2a6496", short: "10" },
    { id: "kl11",      label: "Klasse 11",  color: "#c8400a", short: "11" },
    { id: "kl12",      label: "Abitur",     color: "#2e7d4f", short: "Ab" }
  ],

  /* Node-Schema:
     Branch-Node: { id, label, exercise (optional), children[] }
     Leaf-Node:   { id, label, subtitle, levels[], status, exercise, topics[] }
     exercise: { url, chapter: string|null, isFap: bool, filter: {typen,fach}|null } */
  tree: {
    id: "root", label: "Mathematik",
    exercise: null,
    children: [

      {
        id: "funktionen", label: "Funktionen",
        exercise: { url: "mathe-vorklasse-uebungen.html", chapter: null, isFap: false, filter: null },
        children: [
          {
            id: "ganzrationale", label: "Ganzrationale Funktionen",
            exercise: { url: "mathe-vorklasse-uebungen.html", chapter: null, isFap: false, filter: null },
            children: [

              {
                id: "linear-zuordnungen",
                label: "Lineare Zuordnungen",
                subtitle: "Vorklasse",
                levels: ["vorklasse"],
                status: "available",
                exercise: { url: "mathe-vorklasse-uebungen.html", chapter: "k1", isFap: false, filter: null },
                topics: ["Zuordnungen", "Proportionalität", "Ankreuzaufgaben"]
              },
              {
                id: "lgs",
                label: "Lineare Gleichungssysteme",
                subtitle: "Vorklasse · Kl. 10",
                levels: ["vorklasse", "kl10"],
                status: "available",
                exercise: { url: "mathe-vorklasse-uebungen.html", chapter: "k2", isFap: false, filter: null },
                topics: ["LGS", "Gauß-Verfahren", "Gleichungssysteme"]
              },
              {
                id: "funktionenscharen-vk",
                label: "Funktionenscharen",
                subtitle: "Einführung Vorklasse",
                levels: ["vorklasse"],
                status: "available",
                exercise: { url: "mathe-vorklasse-uebungen.html", chapter: "k3", isFap: false, filter: null },
                topics: ["Scharen", "Parameter", "Graphen vergleichen"]
              },
              {
                id: "quadratisch-vk",
                label: "Quadratische Funktionen",
                subtitle: "Einführung Vorklasse",
                levels: ["vorklasse"],
                status: "available",
                exercise: { url: "mathe-vorklasse-uebungen.html", chapter: "k4", isFap: false, filter: null },
                topics: ["Parabel", "Scheitelpunkt", "Nullstellen"]
              },
              {
                id: "quadratisch-kl10",
                label: "Quadratische Funktionen",
                subtitle: "Klasse 10",
                levels: ["kl10"],
                status: "available",
                exercise: { url: "mathe-10-quadratische-funktionen.html", chapter: null, isFap: false, filter: null },
                topics: ["Scheitelpunktform", "Produktform", "Nullstellen", "Sachkontext"]
              },
              {
                id: "kurvendiskussion-kl11",
                label: "Kurvendiskussion",
                subtitle: "Klasse 11",
                levels: ["kl11"],
                status: "available",
                exercise: { url: "mathe-11-kurvendiskussion.html", chapter: null, isFap: false, filter: null },
                topics: ["Graph lesen", "Extremwerte", "Wendepunkte", "Funktionenscharen"]
              },
              {
                id: "differentialrechnung",
                label: "Differentialrechnung",
                subtitle: "Klasse 11",
                levels: ["kl11"],
                status: "coming-soon",
                exercise: null,
                topics: ["Ableitungsregeln", "Tangenten", "Extremwerte"]
              },
              {
                id: "kd-fap",
                label: "Kurvendisk. & Steckbrief",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["KD","GL","TG","PB"], fach: "Analysis" } },
                topics: ["vollst. KD", "Steckbrief", "Tangenten", "Graph interpretieren"]
              },
              {
                id: "expo-fap",
                label: "e-Funktion & Wachstum",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["EF"], fach: "Analysis" } },
                topics: ["e-Funktion", "Wachstum/Zerfall", "ln", "Halbwertszeit"]
              },
              {
                id: "optimierung-fap",
                label: "Optimierung",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["EX"], fach: "Analysis" } },
                topics: ["Zielfunktion", "Nebenbedingung", "Maxima / Minima"]
              },
              {
                id: "integral-fap",
                label: "Integralrechnung",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["IN"], fach: "Analysis" } },
                topics: ["Stammfunktion", "Bestimmtes Integral", "Flächeninhalt"]
              }

            ]
          }
        ]
      },

      {
        id: "geometrie", label: "Analytische Geometrie",
        exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: null },
        children: [

          {
            id: "vektoren", label: "Vektoren",
            exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["VL","SK","KP"], fach: "Geometrie" } },
            children: [
              {
                id: "vektoren-lgs",
                label: "Vektoren & LGS",
                subtitle: "Klasse 11 (FAP)",
                levels: ["kl11"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["VL"], fach: "Geometrie" } },
                topics: ["Linearkombination", "Kollinearität", "Gauß-Verfahren"]
              },
              {
                id: "skalarprodukt",
                label: "Skalarprodukt & Winkel",
                subtitle: "Klasse 11 (FAP)",
                levels: ["kl11"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["SK"], fach: "Geometrie" } },
                topics: ["Skalarprodukt", "Winkel", "Orthogonalität"]
              },
              {
                id: "kreuzprodukt",
                label: "Kreuzprodukt & Fläche",
                subtitle: "Klasse 11 (FAP)",
                levels: ["kl11"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["KP"], fach: "Geometrie" } },
                topics: ["Kreuzprodukt", "Normalenvektor", "Dreieck-/Parallelogrammfläche"]
              }
            ]
          },

          {
            id: "geraden-ebenen", label: "Geraden & Ebenen",
            exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["GE","LB","AB","SW","KO"], fach: "Geometrie" } },
            children: [
              {
                id: "geraden",
                label: "Geraden & Ebenen",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["GE"], fach: "Geometrie" } },
                topics: ["Parameterform", "Koordinatenform", "Spurpunkte"]
              },
              {
                id: "lagebeziehungen",
                label: "Lagebeziehungen",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["LB"], fach: "Geometrie" } },
                topics: ["parallel", "Schnitt", "windschief"]
              },
              {
                id: "abstaende",
                label: "Abstände & Schnittwinkel",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["AB","SW"], fach: "Geometrie" } },
                topics: ["Lotfußpunkt", "Abstand", "Schnittwinkel"]
              },
              {
                id: "koerper",
                label: "Körper & Sachkontext",
                subtitle: "Abitur (FAP)",
                levels: ["kl12"],
                status: "available",
                exercise: { url: "fap-aufgaben.html", chapter: null, isFap: true, filter: { typen: ["KO"], fach: "Geometrie" } },
                topics: ["Pyramide", "Spat", "Volumen"]
              }
            ]
          }

        ]
      }

    ]
  },

  /* Geführte Pfade: geordnete Sequenz von Leaf-Node-IDs.
     Nur available-Nodes; coming-soon werden beim Laden übersprungen. */
  paths: {
    vorklasse: ["linear-zuordnungen", "lgs", "funktionenscharen-vk", "quadratisch-vk"],
    kl10:      ["lgs", "quadratisch-kl10"],
    kl11:      ["kurvendiskussion-kl11", "vektoren-lgs", "skalarprodukt", "kreuzprodukt"],
    kl12:      ["kd-fap", "expo-fap", "optimierung-fap", "integral-fap",
                 "geraden", "lagebeziehungen", "abstaende", "koerper"]
  }
};
