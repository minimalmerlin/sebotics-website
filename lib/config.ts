// Zentrale Konfigurationsdatei – alle Daten aus BRANCHE.md
// Nie hardcoden: Branchen, Lösungen, Robotertypen, FAQs, CTAs kommen von hier

export const brand = {
  name: "Sebotics",
  role: "Robotics Solution Partner",
  category: "B2B Service Robotics, Cleaning Robotics, Transport Robotics, RaaS",
  mission: "Unternehmen dabei helfen, operative Engpässe mit den richtigen Robotiklösungen messbar zu entlasten.",
  vision: "Die führende Entscheidungs- und Implementierungsplattform für professionelle Robotik im deutschsprachigen Raum werden.",
  primaryClaim: "Robotik, die operative Engpässe messbar entlastet.",
  secondaryClaims: [
    "Der schnellste Weg vom Use Case zum passenden Robotersystem.",
    "Beratung, Konfiguration, Einführung und Betrieb aus einer Hand.",
    "Nicht irgendein Roboter, sondern die richtige Lösung für Ihre Umgebung.",
    "Robotik ohne unnötiges Investitionsrisiko.",
  ],
  positioningStatement:
    "Sebotics verbindet Beratung, Konfiguration, Pilot, Integration und Betrieb zu einem klaren Einstiegssystem für professionelle Robotik.",
  website: "https://sebotics.com",
  primaryLanguage: "de",
  regionFocus: ["DACH", "Europa"],
};

export const ctaConfig = {
  primary: { label: "Konfigurator starten", href: "/konfigurator/" },
  secondary: { label: "Demo anfragen", href: "/kontakt/" },
  tertiary: { label: "Pilotprojekt besprechen", href: "/pilotprojekt/" },
  roi: { label: "ROI einschätzen", href: "/roi/" },
  cleaning: { label: "Reinigungsroboter-Konfigurator", href: "/reinigungsroboter-konfigurator-kostenlos/" },
};

export type Industry = {
  slug: string;
  title: string;
  headline: string;
  subline: string;
  pains: string[];
  desiredOutcomes: string[];
  relevantSolutions: string[];
  primaryCta: string;
  primaryCtaHref: string;
  faqs: { question: string; answer: string }[];
};

export const industries: Industry[] = [
  {
    slug: "gastronomie",
    title: "Robotik für Gastronomie",
    headline: "Entlasten Sie Ihr Service-Team — ohne Qualitätsverlust.",
    subline: "Serviceroboter übernehmen Laufwege, Tischservice und Transportaufgaben — damit sich Ihr Personal auf Gäste konzentrieren kann.",
    pains: [
      "Personalmangel im Service",
      "Stoßzeiten und inkonsistente Servicequalität",
      "Hohe Belastung des Teams durch Laufwege",
    ],
    desiredOutcomes: [
      "Schnellerer Tischservice",
      "Entlastung des Personals",
      "Mehr Konstanz im Gästebetrieb",
    ],
    relevantSolutions: ["serviceroboter", "transportroboter", "reinigungsroboter", "raas"],
    primaryCta: "Serviceroboter konfigurieren",
    primaryCtaHref: "/konfigurator/",
    faqs: [
      {
        question: "Welche Roboter eignen sich für die Gastronomie?",
        answer: "Serviceroboter wie der BellaBot und Mars eignen sich für Tischservice und Speisenauslieferung. Reinigungsroboter übernehmen Boden- und Flächenreinigung nach Betriebszeiten.",
      },
      {
        question: "Was kostet ein Serviceroboter für ein Restaurant?",
        answer: "Der Einstieg via RaaS beginnt typischerweise bei monatlichen Raten ab ca. 500–900 €/Monat inkl. Wartung und Support. Der Kaufpreis liegt je nach Modell zwischen 10.000 und 30.000 €.",
      },
      {
        question: "Funktioniert Robotik auch in engen Gastro-Räumen?",
        answer: "Moderne Serviceroboter navigieren autonomes auf Flächen ab ca. 50 m² mit Durchgangsbreiten ab 80 cm. Eine kurze Vorabprüfung Ihres Grundrisses gibt Klarheit.",
      },
    ],
  },
  {
    slug: "hotellerie",
    title: "Robotik für Hotellerie",
    headline: "Skalierbarer Gästeservice — ohne Personalengpässe.",
    subline: "Hotelroboter übernehmen Room-Service, Auslieferungen und repetitive Transportwege — rund um die Uhr, zuverlässig.",
    pains: [
      "Room-Service und repetitive Transportwege",
      "Personalknappheit im operativen Tagesgeschäft",
      "Druck auf Servicequalität und Reaktionsgeschwindigkeit",
    ],
    desiredOutcomes: [
      "Entlastung bei Standardprozessen",
      "Bessere Gästeerfahrung",
      "Skalierbarer Servicebetrieb",
    ],
    relevantSolutions: ["hotelroboter", "transportroboter", "reinigungsroboter", "raas"],
    primaryCta: "Hotelrobotik anfragen",
    primaryCtaHref: "/kontakt/",
    faqs: [
      {
        question: "Welche Aufgaben übernimmt ein Hotelroboter?",
        answer: "Hotelroboter liefern Handtücher, Amenities, Bestellungen und Pakete autonom auf Zimmer, kommunizieren per Lift mit mehreren Etagen und geben per Display oder Lautsprecher Bescheid.",
      },
      {
        question: "Wie sicher sind Hotelroboter im Gästebetrieb?",
        answer: "Die Systeme sind CE-zertifiziert, fahren mit ≤5 km/h und weichen Personen und Hindernissen sicher aus. Sie kommunizieren aktiv ihren Weg.",
      },
      {
        question: "Kann ein Hotelroboter Aufzüge nutzen?",
        answer: "Ja — mit API-Integration in gängige Liftsteuerungen oder optionalen IoT-Bridges. Wir klären die technischen Voraussetzungen Ihrer Anlage im Erstgespräch.",
      },
    ],
  },
  {
    slug: "industrie",
    title: "Robotik für Industrie",
    headline: "Intralogistik automatisieren — ohne Produktionsstopp.",
    subline: "Transportroboter und Reinigungsroboter entlasten Ihr Personal von repetitiven Nebenprozessen und schaffen Kapazität für produktionsnahe Aufgaben.",
    pains: [
      "Interne Materialtransporte binden Personal",
      "Reinigungs- und Kontrollprozesse sind teuer und repetitiv",
      "Produktionsnahe Prozesse brauchen hohe Verfügbarkeit",
    ],
    desiredOutcomes: [
      "Stabilere Intralogistik",
      "Weniger manuelle Nebenprozesse",
      "Höhere Verfügbarkeit und Transparenz",
    ],
    relevantSolutions: ["transportroboter", "reinigungsroboter", "sicherheitsroboter", "raas"],
    primaryCta: "Use Case prüfen",
    primaryCtaHref: "/konfigurator/",
    faqs: [
      {
        question: "Welche Lasten können Industrietransportroboter bewegen?",
        answer: "Je nach Modell zwischen 50 kg (JunoBot) und mehreren Tonnen (JunoBot Lift Heavy, Pollux F2000). Wir dimensionieren nach Ihren konkreten Transportanforderungen.",
      },
      {
        question: "Wie wird der Transportroboter in meine Produktionsumgebung integriert?",
        answer: "Über WLAN-Navigation mit Kartierung der Produktionsfläche. Die Integration erfolgt ohne Schienensysteme oder Bodenmarkierungen. Typische Inbetriebnahme: 2–5 Tage.",
      },
    ],
  },
  {
    slug: "logistik",
    title: "Robotik für Logistik",
    headline: "Materialflüsse automatisieren — planbar und skalierbar.",
    subline: "Transportroboter übernehmen innerbetriebliche Wege, reduzieren Leerlaufkosten und gleichen Lastspitzen aus — ohne zusätzliches Personal.",
    pains: [
      "Zeitverlust im innerbetrieblichen Transport",
      "Skalierungsspitzen bei Personal und Volumen",
      "Hohe Fehler- und Leerlaufkosten",
    ],
    desiredOutcomes: [
      "Automatisierte Materialflüsse",
      "Skalierbare Lastverteilung",
      "Planbarere Prozesse",
    ],
    relevantSolutions: ["transportroboter", "raas"],
    primaryCta: "Transportrobotik konfigurieren",
    primaryCtaHref: "/konfigurator/",
    faqs: [
      {
        question: "Ab welcher Fläche lohnt sich ein Transportroboter in der Logistik?",
        answer: "Typischerweise ab Lagerflächen von 500 m² mit wiederkehrenden Transportrouten. Bei klar definierten Fahrwegen und mehr als 20 Fahrten/Tag ist der ROI oft unter 18 Monaten.",
      },
    ],
  },
  {
    slug: "gesundheitswesen",
    title: "Robotik für Gesundheitswesen",
    headline: "Fachkräfte entlasten — Standards sichern.",
    subline: "Transportroboter übernehmen sichere Standardtransporte und entlasten klinische Teams von Routinewegen — für mehr Zeit am Patienten.",
    pains: [
      "Fachkräfte werden mit Nebenaufgaben belastet",
      "Interne Transporte und Routinewege kosten Zeit",
      "Hohe Anforderungen an Hygiene und Verfügbarkeit",
    ],
    desiredOutcomes: [
      "Entlastung klinischer und pflegerischer Teams",
      "Sichere Standardtransporte",
      "Bessere Ressourcennutzung",
    ],
    relevantSolutions: ["transportroboter", "serviceroboter", "reinigungsroboter", "raas"],
    primaryCta: "Healthcare-Use-Case prüfen",
    primaryCtaHref: "/konfigurator/",
    faqs: [
      {
        question: "Sind Roboter im Krankenhaus hygienisch unbedenklich?",
        answer: "Ja — die eingesetzten Systeme sind glattflächig, ohne schwer zugängliche Fugen und mit zertifizierten Desinfektionsmitteln abwischbar. Reinigungsroboter sind speziell für medizinische Umgebungen ausgelegt.",
      },
    ],
  },
  {
    slug: "facility-management",
    title: "Robotik für Facility Management",
    headline: "Mehr Fläche reinigen — mit weniger Personal.",
    subline: "Reinigungsroboter arbeiten autonom, liefern Betriebsdaten und ermöglichen planbare Servicequalität — auch bei Kostendruck.",
    pains: [
      "Reinigung großer Flächen ist personalintensiv",
      "Schwankende Servicequalität",
      "Hoher Kostendruck bei Standardleistungen",
    ],
    desiredOutcomes: [
      "Planbare Flächenreinigung",
      "Bessere Marge durch Automatisierung",
      "Messbare Betriebsdaten",
    ],
    relevantSolutions: ["reinigungsroboter", "sicherheitsroboter", "raas"],
    primaryCta: "Reinigungsrobotik anfragen",
    primaryCtaHref: "/konfigurator/",
    faqs: [
      {
        question: "Wie viel Fläche reinigt ein Reinigungsroboter pro Stunde?",
        answer: "Je nach Modell zwischen 800 und 4.000 m²/h. Der TN70 schafft bis zu 4.000 m²/h auf offenen Flächen. Die tatsächliche Leistung hängt vom Grundriss und Hindernisdichte ab.",
      },
      {
        question: "Können Reinigungsroboter mit bestehendem Personal zusammenarbeiten?",
        answer: "Ja — die Systeme sind auf Mischbetrieb ausgelegt. Sie übernehmen planbare Basisreinigung, das Personal fokussiert auf Sonderaufgaben, Qualitätskontrolle und Kundenkontakt.",
      },
    ],
  },
];

export type Solution = {
  slug: string;
  title: string;
  intent: string;
  summary: string;
  directAnswer: string;
  suitedFor: string[];
  notSuitedFor: string[];
  typicalTasks: string[];
  advantages: string[];
  limits: string[];
  prerequisites: string[];
  useCases: string[];
  comparisonTargets: string[];
  faqs: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "serviceroboter",
    title: "Serviceroboter",
    intent: "definition + branche + kaufentscheidung",
    summary: "Serviceroboter entlasten Teams bei Service-, Transport- und Interaktionsaufgaben in Gastronomie, Hotellerie, Pflege und weiteren Dienstleistungsumgebungen.",
    directAnswer: "Ein Serviceroboter ist ein autonomes oder teilautonomes Robotersystem, das Unternehmen bei wiederkehrenden Service- und Transportaufgaben unterstützt. Er eignet sich vor allem für Gastronomie, Hotellerie, Pflege und andere serviceintensive Umgebungen mit standardisierbaren Laufwegen.",
    suitedFor: [
      "Restaurants und Cafés mit Flächen ab 50 m²",
      "Hotels mit definierten Servicerouten",
      "Pflegeeinrichtungen mit standardisierten Transportaufgaben",
      "Umgebungen mit mehr als 30 Serviceläufen/Tag",
    ],
    notSuitedFor: [
      "Räume mit weniger als 80 cm Durchgangsbreite",
      "Umgebungen mit häufig wechselnden Hindernissen",
      "Betriebe mit weniger als 10 Serviceläufen/Tag",
    ],
    typicalTasks: ["Speisen- und Getränkeauslieferung", "Tellertransport", "Room-Service", "Empfangsunterstützung"],
    advantages: [
      "Entlastung des Servicepersonals bei Routineaufgaben",
      "Konstante Servicequalität ohne Ermüdung",
      "24/7 Betriebsfähigkeit",
      "Gesprächsöffner und Gästemagnet",
    ],
    limits: [
      "Kein Ersatz für vollständige Kundeninteraktion",
      "Erfordert regelmäßiges WLAN und Kartenaktualisierung",
      "Nicht für sehr enge oder stark frequentierte Wege",
    ],
    prerequisites: [
      "Stabiles WLAN (5 GHz empfohlen)",
      "Glatter, hindernisarmer Bodenbelag",
      "Durchgangsbreiten ≥80 cm",
      "Ladeplatz (ca. 1 m²)",
    ],
    useCases: ["tischservice", "room-service", "empfang", "interner-transport"],
    comparisonTargets: ["transportroboter", "hotelroboter"],
    faqs: [
      {
        question: "Was kostet ein Serviceroboter?",
        answer: "Kaufpreise liegen je nach Modell zwischen 10.000 und 30.000 €. Via RaaS ab ca. 500–900 €/Monat inkl. Wartung, Support und Updates.",
      },
      {
        question: "Wie lange dauert die Einrichtung?",
        answer: "Typischerweise 1–2 Tage: Kartierung der Fläche, Einrichten der Zielpunkte, Schulung des Teams. Danach ist der Roboter einsatzbereit.",
      },
      {
        question: "Wie sicher sind Serviceroboter im Gastro-Betrieb?",
        answer: "CE-zertifiziert, mit Ultraschallsensoren und Kameras ausgestattet. Erkennen Hindernisse und Personen zuverlässig und stoppen oder weichen aus.",
      },
    ],
  },
  {
    slug: "reinigungsroboter",
    title: "Reinigungsroboter",
    intent: "definition + wirtschaftlichkeit + einsatzbereiche",
    summary: "Reinigungsroboter automatisieren wiederkehrende Boden- und Flächenreinigung und eignen sich besonders für große, regelmäßig gereinigte Umgebungen.",
    directAnswer: "Ein Reinigungsroboter ist eine autonome Maschine, die Boden- und Flächenreinigung selbstständig durchführt. Er eignet sich besonders für Flächen ab 200 m² mit wiederkehrenden Reinigungszyklen in Industrie, Logistik, Facility Management, Gesundheitswesen und Handel.",
    suitedFor: [
      "Hallenflächen ab 200 m²",
      "Regelmäßige Reinigungszyklen (täglich oder mehrmals pro Woche)",
      "Umgebungen mit niedrigem Personalaufwand gewünscht",
      "Facility-Management-Dienstleister mit Margendruck",
    ],
    notSuitedFor: [
      "Treppenreiche Umgebungen (keine Treppenfähigkeit)",
      "Sehr kleine oder verwinkelte Flächen",
      "Unstrukturierte Außenbereiche",
    ],
    typicalTasks: ["Automatische Bodenreinigung großer Flächen", "Nass- und Trockenreinigung", "Planbare Reinigungszyklen", "Reinigungsdokumentation per App"],
    advantages: [
      "Planbare Betriebskosten",
      "Messbare Reinigungsleistung und Flächenabdeckung",
      "Entlastung des Reinigungspersonals",
      "Datentransparenz über Reinigungsstatus",
    ],
    limits: [
      "Keine Reinigung von Treppen oder Stufen",
      "Erfordert Kartierung der Fläche",
      "Spezialflächen (z.B. Teppich) erfordern spezifische Modelle",
    ],
    prerequisites: [
      "Stufenloser Bodenbelag oder Rampen bis 5° Neigung",
      "WLAN-Verbindung für Monitoring",
      "Lagerplatz für Frischwasser-/Schmutzwassertank",
    ],
    useCases: ["flaechenreinigung", "produktionsflaechen", "buero-reinigung"],
    comparisonTargets: ["manuelle-reinigung"],
    faqs: [
      {
        question: "Lohnt sich ein Reinigungsroboter für mein Unternehmen?",
        answer: "Bei Flächen ab 500 m² mit täglicher Reinigung ist der ROI typischerweise unter 24 Monaten. Unser Kostenrechner gibt eine Ersteinschätzung für Ihre Situation.",
      },
      {
        question: "Welche Fläche schafft ein Reinigungsroboter pro Stunde?",
        answer: "Je nach Modell 800–4.000 m²/h. Der TN70 erreicht auf offenen Hallenflächen bis zu 4.000 m²/h.",
      },
    ],
  },
  {
    slug: "transportroboter",
    title: "Transportroboter",
    intent: "prozess + intralogistik + use-case-fit",
    summary: "Transportroboter automatisieren interne Wege, Materialbewegungen und Standardtransporte.",
    directAnswer: "Ein Transportroboter ist ein autonomes Fahrzeug, das innerbetriebliche Transporte selbstständig durchführt. Er eignet sich für Industrie, Logistik, Gesundheitswesen und jede Umgebung, in der wiederholte Materialbewegungen Personal binden.",
    suitedFor: [
      "Produktionsbetriebe mit definierten Transportrouten",
      "Lager und Logistikzentren",
      "Kliniken und Pflegeeinrichtungen mit Standardtransporten",
      "Hotels mit mehrstöckigem Servicebetrieb",
    ],
    notSuitedFor: [
      "Sehr enge Gänge unter 80 cm Breite",
      "Unstrukturierte Außentransporte",
      "Lasten über dem Modell-Maximum",
    ],
    typicalTasks: ["Materialtransport zwischen Produktionsstationen", "Lagerfahrten", "Auslieferungen im Gebäude", "Abfalltransporte"],
    advantages: [
      "Entlastung von repetitiven Transportwegen",
      "Höhere Planbarkeit der Materialflüsse",
      "Reduktion von Wartezeiten und Leerlaufkosten",
    ],
    limits: [
      "Erfordert Kartierung und WLAN",
      "Liftintegration benötigt technische Vorbereitung",
      "Nicht für unstrukturierte oder häufig wechselnde Routen",
    ],
    prerequisites: [
      "Glatter Boden, stufenlos oder mit Rampen",
      "WLAN-Abdeckung auf Fahrtroute",
      "Ladeplatz (ca. 1–2 m²)",
    ],
    useCases: ["materialtransport", "interner-transport", "room-service", "lagerbewegung"],
    comparisonTargets: ["serviceroboter", "manueller-transport"],
    faqs: [
      {
        question: "Welche Nutzlast können Transportroboter bewegen?",
        answer: "Von 50 kg (JunoBot) bis mehrere Tonnen (JunoBot Lift Heavy, Pollux F2000). Wir dimensionieren nach Ihren Transportanforderungen.",
      },
    ],
  },
  {
    slug: "hotelroboter",
    title: "Hotelroboter",
    intent: "guest-experience + serviceentlastung",
    summary: "Hotelroboter unterstützen im Gäste- und Room-Service, bei Auslieferungen und repetitiven Servicewegen.",
    directAnswer: "Ein Hotelroboter ist ein autonomes Servicesystem, das Auslieferungen, Room-Service und Gästeservice in Hotels übernimmt. Er kommuniziert per Fahrstuhl mit verschiedenen Etagen und entlastet das Servicepersonal von repetitiven Transportwegen.",
    suitedFor: [
      "Hotels mit mehr als 30 Zimmern",
      "Betriebe mit regelmäßigem Room-Service",
      "Häuser mit hohem Lieferaufkommen (Amenities, Wäsche, F&B)",
    ],
    notSuitedFor: [
      "Boutique-Hotels ohne standardisierte Servicerouten",
      "Häuser ohne API-fähige Aufzugsteuerung (alternatives: IoT-Bridge)",
    ],
    typicalTasks: ["Room-Service-Auslieferung", "Amenity-Lieferung", "Handtuch- und Wäschetransport", "Bestellungsabholung"],
    advantages: [
      "Rund-um-die-Uhr-Servicefähigkeit",
      "Gästeerlebnis durch Novelty-Effekt",
      "Entlastung des Nachtdienstes",
    ],
    limits: [
      "Liftintegration erfordert Vorbereitung",
      "Gästeinteraktion bleibt beim Personal",
    ],
    prerequisites: ["Liftintegration oder IoT-Bridge", "WLAN auf allen Etagen", "Ladeplatz im Back-of-House"],
    useCases: ["room-service", "gaesteservice", "transport-im-hotel"],
    comparisonTargets: ["serviceroboter", "transportroboter"],
    faqs: [
      {
        question: "Kann ein Hotelroboter Aufzüge selbstständig nutzen?",
        answer: "Ja — über API-Integration in die Liftsteuerung oder IoT-Bridges. Die technischen Voraussetzungen klären wir im Erstgespräch.",
      },
    ],
  },
  {
    slug: "sicherheitsroboter",
    title: "Sicherheits- und Überwachungsroboter",
    intent: "sicherheit + monitoring + einsatzvoraussetzungen",
    summary: "Sicherheitsroboter unterstützen bei Überwachung, Rundgängen und Statuskontrollen in definierten Umgebungen.",
    directAnswer: "Ein Sicherheitsroboter ist ein autonomes Überwachungs- und Kontrollsystem, das in definierten Umgebungen Rundgänge durchführt, Anomalien erkennt und Sicherheitsdaten liefert.",
    suitedFor: ["Industriegelände", "Parkflächen und Außenbereiche", "Lagerhallen", "Facility-Management-Umgebungen"],
    notSuitedFor: ["Umgebungen, die vollständige Reaktionsfähigkeit bei Zwischenfällen erfordern"],
    typicalTasks: ["Autonome Rundgänge", "Videoüberwachung", "Anomalie-Erkennung", "Statusmeldungen"],
    advantages: ["Lückenlose Monitoring-Fähigkeit", "Datenlage für Sicherheitsbericht", "Entlastung des Sicherheitspersonals"],
    limits: ["Kein Ersatz für Interventionskräfte", "Begrenzt auf definierte Umgebungen"],
    prerequisites: ["Kartierung des Geländes", "Netzwerkanbindung", "Definierte Rundgangsrouten"],
    useCases: ["anlagenueberwachung", "rundgaenge", "sicherheitsmonitoring"],
    comparisonTargets: ["manueller-wachdienst"],
    faqs: [],
  },
  {
    slug: "raas",
    title: "Robotics as a Service",
    intent: "kostenmodell + risikoreduktion + einstieg",
    summary: "RaaS reduziert Einstiegshürden durch planbare monatliche Kosten, Services, Support und flexible Skalierung.",
    directAnswer: "Robotics as a Service (RaaS) ist ein Nutzungsmodell, bei dem Unternehmen Robotersysteme nicht kaufen, sondern gegen eine monatliche Gebühr betreiben. Inkludiert sind Setup, Wartung, Support und Updates. RaaS eignet sich besonders für Unternehmen, die Robotik erst testen oder Kapitalbindung minimieren wollen.",
    suitedFor: [
      "Unternehmen, die mit einem Pilot einsteigen wollen",
      "Betriebe mit saisonalen Schwankungen",
      "Unternehmen mit strikter Budgetplanung",
    ],
    notSuitedFor: [
      "Unternehmen mit sehr langen Nutzungszeiträumen (10+ Jahre) — dort meist Kauf günstiger",
    ],
    typicalTasks: ["Pilot-to-Scale", "Managed Service", "Subscription-Betrieb", "Hybrid-Modelle"],
    advantages: [
      "Keine hohe Anfangsinvestition",
      "Planbare monatliche Kosten",
      "Setup, Wartung, Monitoring und Support inklusive",
      "Flexibel skalierbar",
    ],
    limits: [
      "Langfristig teurer als Kauf",
      "Abhängigkeit vom Anbieter",
    ],
    prerequisites: ["Mindestlaufzeit je nach Paket (typisch: 12–36 Monate)"],
    useCases: ["pilot-to-scale", "managed-service", "subscription"],
    comparisonTargets: ["kauf", "miete"],
    faqs: [
      {
        question: "Was ist Robotics as a Service (RaaS)?",
        answer: "RaaS ist ein Nutzungsmodell, bei dem Sie Roboter gegen eine monatliche Gebühr nutzen — inklusive Setup, Wartung, Support und Updates. Kein Kapitalkauf, planbare Kosten.",
      },
      {
        question: "Was ist in einem RaaS-Paket enthalten?",
        answer: "Setup, Schulung, Wartung, Monitoring, Austausch-/Backup-Einheit, Optimierung, SLA und Reaktionszeit. Je nach Paket variiert der Leistungsumfang.",
      },
    ],
  },
];

export type UseCase = {
  slug: string;
  title: string;
  linkedIndustries: string[];
  linkedSolutions: string[];
};

export const useCases: UseCase[] = [
  { slug: "tischservice", title: "Tischservice automatisieren", linkedIndustries: ["gastronomie"], linkedSolutions: ["serviceroboter"] },
  { slug: "room-service", title: "Room-Service automatisieren", linkedIndustries: ["hotellerie"], linkedSolutions: ["hotelroboter", "transportroboter"] },
  { slug: "materialtransport", title: "Materialtransport automatisieren", linkedIndustries: ["industrie", "logistik", "gesundheitswesen"], linkedSolutions: ["transportroboter"] },
  { slug: "flaechenreinigung", title: "Große Flächen automatisiert reinigen", linkedIndustries: ["facility-management", "industrie", "logistik"], linkedSolutions: ["reinigungsroboter"] },
  { slug: "anlagenueberwachung", title: "Anlagen und Flächen überwachen", linkedIndustries: ["industrie", "facility-management"], linkedSolutions: ["sicherheitsroboter"] },
];

export const proofAssets = {
  partners: [],
  references: ["Raiffeisen", "ASSA ABLOY", "Ovomaltine", "AWO", "Roche", "Schweizer Armee"],
  kpis: [
    { label: "Branchen bedient", value: "6+" },
    { label: "Robotertypen", value: "20+" },
    { label: "Deployments", value: "50+" },
    { label: "Support SLA", value: "24h" },
  ],
};

export const raasPackageComponents = [
  "Setup & Inbetriebnahme",
  "Schulung Ihres Teams",
  "Wartung & Inspektion",
  "Remote-Monitoring",
  "Austausch-/Backup-Einheit",
  "Performance-Optimierung",
  "SLA & definierte Reaktionszeit",
];

export const integrationProcess = [
  { step: "01", title: "Use Case Assessment", description: "Analyse Ihrer Anforderungen, Flächen und Prozesse. Ergebnis: klare Empfehlung mit Robotertyp, Modell und Kostenmodell." },
  { step: "02", title: "Pilot-Konfiguration", description: "Setup des Robotersystems in Ihrer Umgebung. Kartierung, Schulung und erste Live-Testläufe." },
  { step: "03", title: "Go-Live & Optimierung", description: "Offizieller Betriebsstart mit Monitoring. Anpassung von Routen, Zeiten und Parametern nach ersten Betriebswochen." },
  { step: "04", title: "Betrieb & Support", description: "Laufende Wartung, Remote-Monitoring und Optimierung. SLA mit definierten Reaktionszeiten." },
  { step: "05", title: "Skalierung", description: "Ausweitung auf weitere Einheiten, Standorte oder Anwendungsfälle — auf Basis bewährter Konfiguration." },
];

export const globalFaqs = [
  {
    question: "Was ist ein Serviceroboter?",
    answer: "Ein Serviceroboter ist ein autonomes System, das Unternehmen bei wiederkehrenden Serviceaufgaben unterstützt — z.B. Tischservice, Auslieferung, Transport oder Empfang. Er entlastet Personal und sorgt für konstante Servicequalität.",
  },
  {
    question: "Sollte ich kaufen, mieten oder RaaS wählen?",
    answer: "Kauf ist langfristig günstiger, erfordert aber Kapital. Miete bietet Flexibilität ohne Eigentumsrisiko. RaaS ist am einfachsten einzusteigen: alles inklusive, monatliche Kosten, kein Kapitaleinsatz. Welches Modell passt, zeigt unser Vergleich.",
  },
  {
    question: "Wie läuft ein Pilotprojekt ab?",
    answer: "Ein Pilot läuft typischerweise 30–90 Tage. Er beginnt mit Use-Case-Assessment und Standortcheck, gefolgt von Setup und Schulung. Nach Go-Live messen wir klar definierte Erfolgskennzahlen und entscheiden gemeinsam über Scale-Up.",
  },
  {
    question: "Welche technischen Voraussetzungen brauche ich?",
    answer: "Grundsätzlich: stabiles WLAN (5 GHz), glatter Bodenbelag, Durchgangsbreiten ≥80 cm und ein Ladeplatz ca. 1 m². Spezifische Anforderungen je Robotertyp klären wir im Assessment.",
  },
  {
    question: "Wann lohnt sich Robotik wirtschaftlich?",
    answer: "Bei klaren, wiederholbaren Aufgaben mit hoher Häufigkeit. Typischer ROI: 12–24 Monate bei Servicerobotern, 18–36 Monate bei Reinigungsrobotern. Unser ROI-Check gibt eine fundierte Erstschätzung.",
  },
];
