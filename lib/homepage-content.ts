export type HomepageLink = {
  label: string;
  href: string;
};

export type HomepagePromise = {
  title: string;
  copy: string;
};

export type HomepageUseCase = {
  headline: string;
  copy: string;
  suitedFor: string;
};

export type HomepageProcessStep = {
  step: string;
  headline: string;
  copy: string;
};

export type HomepageIndustry = {
  title: string;
  copy: string;
};

export type HomepageFaq = {
  question: string;
  answer: string;
};

export const homepageContent = {
  metadata: {
    title: "Sebotics | Roboter + Integration für Unternehmen",
    description:
      "Sebotics unterstützt Unternehmen bei Auswahl, Integration und Inbetriebnahme von Robotern für Service-, Transport-, Reinigungs- und Routineprozesse.",
  },
  thesis:
    "Der Roboter allein löst kein Problem. Erst die Integration in den echten Betriebsprozess schafft Wert.",
  hero: {
    headline: "Roboter, die im echten Betrieb funktionieren.",
    subheadline:
      "Sebotics unterstützt Unternehmen bei der Auswahl, Integration und Inbetriebnahme von Service-, Transport- und Reinigungsrobotern — von der ersten Use-Case-Prüfung bis zum produktiven Einsatz.",
    supportingCopy:
      "Wir liefern nicht nur Roboter. Wir prüfen, welcher Prozess geeignet ist, welche Lösung passt und wie der Roboter zuverlässig in Ihre bestehenden Abläufe integriert wird.",
    primaryCta: { label: "Use Case besprechen", href: "/kontakt/" },
    secondaryCta: { label: "Robotik-Potenzial prüfen", href: "/konfigurator/" },
    trustLine:
      "Für Unternehmen mit wiederkehrenden Service-, Transport-, Reinigungs- und Routineprozessen.",
  },
  problem: {
    headline: "Viele Robotikprojekte scheitern nicht an der Hardware.",
    subheadline:
      "Sie scheitern daran, dass Prozess, Umgebung, Team und Betrieb nicht sauber zusammengeführt werden.",
    paragraphs: [
      "Unternehmen sehen das Potenzial von Robotik: weniger Laufwege, weniger Routineaufgaben, mehr Entlastung für Teams und stabilere Abläufe.",
      "In der Praxis reicht es aber nicht, einfach einen Roboter zu kaufen.",
      "Entscheidend ist, ob der richtige Prozess ausgewählt wird, ob die Umgebung geeignet ist, ob Mitarbeitende eingebunden werden und ob der Roboter dauerhaft in den Betrieb passt.",
    ],
    questions: [
      "Welcher Prozess eignet sich überhaupt für Robotik?",
      "Welcher Roboter passt zur Aufgabe?",
      "Wie wird die Lösung in bestehende Abläufe integriert?",
      "Was muss technisch und organisatorisch vorbereitet werden?",
      "Wie wird aus einem Test ein stabiler Betrieb?",
      "Wann lohnt sich der Einsatz wirtschaftlich?",
    ],
  },
  solution: {
    headline: "Sebotics bringt Roboter produktiv in Ihre Prozesse.",
    subheadline:
      "Von der Use-Case-Prüfung über die passende Roboterlösung bis zur Integration in den laufenden Betrieb.",
    paragraphs: [
      "Sebotics begleitet Unternehmen bei der Einführung einsatzfähiger Robotiklösungen.",
      "Wir analysieren den konkreten Prozess, prüfen die technische und operative Machbarkeit, wählen die passende Roboterlösung aus und begleiten Integration, Inbetriebnahme und Betrieb.",
      "So wird aus Robotik kein Experiment, sondern ein strukturiertes Automatisierungsprojekt.",
    ],
    promises: [
      {
        title: "Prozess zuerst",
        copy:
          "Wir starten nicht beim Robotermodell, sondern beim konkreten Ablauf, der entlastet werden soll.",
      },
      {
        title: "Integration statt Hardwareverkauf",
        copy:
          "Wir sorgen dafür, dass Roboter in Standort, Team und Betriebsablauf passen.",
      },
      {
        title: "Betrieb im Fokus",
        copy:
          "Wir denken über die Inbetriebnahme hinaus: Nutzung, Schulung, Akzeptanz und Weiterentwicklung.",
      },
    ] satisfies HomepagePromise[],
  },
  useCases: {
    headline: "Für welche Prozesse eignen sich Roboter?",
    subheadline:
      "Robotik wird dann wirtschaftlich interessant, wenn wiederkehrende Aufgaben regelmäßig Zeit, Personal und Aufmerksamkeit binden.",
    intro:
      "Sebotics prüft mit Ihnen, welche Prozesse sich für den Einsatz von Robotern eignen — und integriert die passende Lösung in Ihren laufenden Betrieb.",
    cards: [
      {
        headline: "Interne Transporte automatisieren",
        copy:
          "Roboter übernehmen wiederkehrende Wege für Material, Wäsche, Dokumente, Proben, Medikamente oder Verbrauchsmaterial.",
        suitedFor:
          "Kliniken, Pflegeeinrichtungen, Hotels, Industrie, Labore, Campus-Standorte",
      },
      {
        headline: "Große Flächen autonom reinigen",
        copy:
          "Reinigungsroboter entlasten Teams bei planbaren, wiederkehrenden Reinigungsaufgaben auf großen oder stark genutzten Flächen.",
        suitedFor:
          "Industrie, Handel, Kliniken, Pflege, Hotels, Schulen, öffentliche Einrichtungen",
      },
      {
        headline: "Bring- und Holprozesse entlasten",
        copy:
          "Service-Roboter unterstützen bei wiederkehrenden Liefer-, Bring- und Holaufgaben in Serviceumgebungen.",
        suitedFor: "Hotels, Gastronomie, Pflege, Kliniken, Office, Hospitality",
      },
      {
        headline: "Materialflüsse unterstützen",
        copy:
          "Mobile Robotik kann interne Materialbewegungen, Laufwege und einfache Unterstützungsprozesse in produktionsnahen Umgebungen reduzieren.",
        suitedFor: "Produktion, Lager, Maschinenbau, Industrie, Logistik",
      },
      {
        headline: "Orientierung und Information verbessern",
        copy:
          "Roboter können Besucher begrüßen, informieren und in großen Gebäuden Orientierung bieten.",
        suitedFor:
          "Kliniken, Hotels, Messen, Behörden, Unternehmenszentralen",
      },
    ] satisfies HomepageUseCase[],
  },
  process: {
    headline: "Von der Idee zum produktiven Robotereinsatz.",
    subheadline:
      "Sebotics führt Robotikprojekte strukturiert von der ersten Einschätzung bis zur Integration in den Betrieb.",
    cta: { label: "Robotikprojekt prüfen lassen", href: "/kontakt/" },
    steps: [
      {
        step: "1",
        headline: "Use Case verstehen",
        copy:
          "Wir klären, welcher Prozess automatisiert oder unterstützt werden soll und warum dieser Prozess relevant ist.",
      },
      {
        step: "2",
        headline: "Machbarkeit prüfen",
        copy:
          "Wir bewerten Prozess, Umgebung, Technik, Wirtschaftlichkeit und Integrationsrisiken.",
      },
      {
        step: "3",
        headline: "Lösung auswählen",
        copy:
          "Wir definieren, welche Roboterlösung zum Use Case und Standort passt.",
      },
      {
        step: "4",
        headline: "Pilot umsetzen",
        copy:
          "Wir testen die Lösung in einem klar abgegrenzten Einsatzbereich mit messbaren Erfolgskriterien.",
      },
      {
        step: "5",
        headline: "Integration realisieren",
        copy:
          "Wir begleiten Konfiguration, Inbetriebnahme, Schulung und Einbindung in den Ablauf.",
      },
      {
        step: "6",
        headline: "Betrieb stabilisieren",
        copy:
          "Wir unterstützen bei Nutzung, Optimierung und möglicher Erweiterung auf weitere Bereiche.",
      },
    ] satisfies HomepageProcessStep[],
  },
  industries: {
    headline: "Robotik für Unternehmen mit wiederkehrenden operativen Abläufen.",
    subheadline:
      "Sebotics unterstützt Organisationen, bei denen Personal, Zeit und Prozessstabilität entscheidend sind.",
    cards: [
      {
        title: "Kliniken & Reha",
        copy:
          "Entlastung bei Transport-, Service- und Stationslogistikprozessen.",
      },
      {
        title: "Pflegeeinrichtungen",
        copy:
          "Unterstützung bei nicht-medizinischen Routineaufgaben, Bringdiensten und interner Logistik.",
      },
      {
        title: "Hotels & Hospitality",
        copy:
          "Automatisierung von Service-, Delivery-, Reinigungs- und Housekeeping-nahen Aufgaben.",
      },
      {
        title: "Industrie & Produktion",
        copy:
          "Unterstützung interner Materialflüsse, Laufwege und produktionsnaher Routineprozesse.",
      },
      {
        title: "Facility & Reinigung",
        copy:
          "Autonome Reinigung großer Flächen und strukturierter Einsatzbereiche.",
      },
      {
        title: "Öffentliche Einrichtungen & Campus",
        copy:
          "Orientierung, Transport, Reinigung und Serviceprozesse in größeren Gebäuden oder Standorten.",
      },
    ] satisfies HomepageIndustry[],
  },
  whySebotics: {
    headline: "Warum Sebotics?",
    subheadline:
      "Weil erfolgreiche Robotik nicht beim Kauf endet, sondern bei der Integration beginnt.",
    points: [
      {
        title: "Integrator statt Händler",
        copy:
          "Sebotics betrachtet nicht nur den Roboter, sondern den gesamten Einsatzkontext: Prozess, Umgebung, Team und Betrieb.",
      },
      {
        title: "Use-Case-zentriert",
        copy:
          "Wir starten bei der operativen Aufgabe, nicht beim Produktkatalog.",
      },
      {
        title: "Machbarkeit vor Angebot",
        copy:
          "Wir prüfen früh, ob ein Use Case technisch und wirtschaftlich sinnvoll ist.",
      },
      {
        title: "Pilotfähig",
        copy:
          "Wir schaffen einen kontrollierten Einstieg, bevor größere Rollouts entschieden werden.",
      },
      {
        title: "Betriebsorientiert",
        copy:
          "Wir berücksichtigen Schulung, Nutzung, Akzeptanz und laufende Optimierung.",
      },
    ] satisfies HomepagePromise[],
    closing:
      "Der Unterschied liegt nicht darin, ob ein Roboter fahren, reinigen oder liefern kann. Entscheidend ist, ob er in Ihrem konkreten Alltag zuverlässig eingesetzt werden kann. Genau hier setzt Sebotics an.",
  },
  evaluation: {
    headline: "Starten Sie mit einer Use-Case-Prüfung.",
    subheadline:
      "Nicht jeder Prozess eignet sich für Robotik. Deshalb beginnt ein sinnvolles Projekt mit einer strukturierten Einschätzung.",
    copy:
      "In einer ersten Prüfung klären wir gemeinsam, welche Aufgaben in Ihrem Unternehmen regelmäßig Personal binden, wie diese Prozesse heute funktionieren und ob eine Robotiklösung technisch, organisatorisch und wirtschaftlich sinnvoll sein kann.",
    cta: { label: "Use Case prüfen lassen", href: "/kontakt/" },
    fields: [
      {
        title: "Prozess",
        copy: "Welche Aufgabe soll unterstützt werden?",
      },
      {
        title: "Frequenz",
        copy: "Wie regelmäßig passiert der Ablauf?",
      },
      {
        title: "Aufwand",
        copy: "Wie viel Zeit und Personal wird gebunden?",
      },
      {
        title: "Umgebung",
        copy: "Wo soll der Roboter eingesetzt werden?",
      },
      {
        title: "Technik",
        copy: "Welche Anforderungen bestehen?",
      },
      {
        title: "Wirtschaftlichkeit",
        copy: "Welcher Nutzen ist realistisch?",
      },
    ] satisfies HomepagePromise[],
  },
  faqs: [
    {
      question: "Verkauft Sebotics nur Roboter?",
      answer:
        "Nein. Sebotics verkauft einsatzfähige Robotiklösungen. Dazu gehören die passende Roboterlösung, die Integration in den Prozess, Inbetriebnahme, Schulung und operative Begleitung.",
    },
    {
      question: "Muss ich schon genau wissen, welchen Roboter ich brauche?",
      answer:
        "Nein. Sinnvoller ist es, mit dem Prozess zu starten. Wir prüfen gemeinsam, welche Aufgabe automatisiert oder unterstützt werden soll und welche Roboterlösung dafür geeignet ist.",
    },
    {
      question: "Welche Prozesse eignen sich besonders gut?",
      answer:
        "Gut geeignet sind wiederkehrende, standardisierbare Aufgaben mit klarem Ablauf — zum Beispiel interne Transporte, Reinigungsaufgaben, Bringdienste, Materialbewegungen oder Orientierung in größeren Gebäuden.",
    },
    {
      question: "Ist Robotik sofort wirtschaftlich?",
      answer:
        "Das hängt vom Use Case ab. Entscheidend sind Frequenz, heutiger Aufwand, Personalkosten, Integrationskomplexität und erwarteter Nutzen. Deshalb prüft Sebotics die Wirtschaftlichkeit use-case-basiert.",
    },
    {
      question: "Kann ein Roboter Mitarbeitende ersetzen?",
      answer:
        "Sebotics positioniert Robotik vor allem als Entlastung für wiederkehrende Routineaufgaben. Ziel ist, Teams von Laufwegen, Transporten, Reinigungsroutinen oder einfachen Serviceaufgaben zu entlasten.",
    },
    {
      question: "Wie läuft ein Projekt typischerweise ab?",
      answer:
        "Typischerweise beginnt ein Projekt mit einer Use-Case-Prüfung. Danach folgen Machbarkeitsbewertung, Lösungsauswahl, Pilot, Integration, Schulung und Betriebsbegleitung.",
    },
    {
      question: "Welche Branchen unterstützt Sebotics?",
      answer:
        "Sebotics unterstützt unter anderem Kliniken, Pflegeeinrichtungen, Hotels, Industrieunternehmen, Facility-Organisationen, öffentliche Einrichtungen und größere Standorte mit wiederkehrenden operativen Abläufen.",
    },
  ] satisfies HomepageFaq[],
  finalCta: {
    headline:
      "Welcher Prozess in Ihrem Betrieb könnte durch Robotik entlastet werden?",
    subheadline:
      "Lassen Sie uns prüfen, ob Ihr Use Case für Roboter + Integration geeignet ist.",
    primaryCta: { label: "Use Case besprechen", href: "/kontakt/" },
    secondaryCta: { label: "Kontakt aufnehmen", href: "/kontakt/" },
  },
} as const;
