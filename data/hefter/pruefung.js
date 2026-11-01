/* Prüfungs-Checkliste aus deinen Notizen („Prüfung") – erscheint im Reiter „Abi-Training".
   thema = id des Themas, tab = optionaler Unterreiter (lernen, schema, zeitleiste, begriffe, quiz) */
ZR.pruefung = {
  intro: 'Diese Liste stammt aus deinen eigenen Prüfungsnotizen und entspricht den vier Lernbereichen des Grundkurses. Hake ab, was du **ohne Hilfe erklären** kannst – der Stand wird auf diesem Gerät gespeichert.',
  format: [
    '20 Minuten Einlese-/Vorbereitungszeit',
    'A-Teil (15 Minuten): Text mit ca. 30 Zeilen – beschreiben, interpretieren, erklären/erläutern, vergleichen, Stellung nehmen; Zeilenangaben!',
    'B-Teil (15 Minuten): Bild oder Karikatur – formale Analyse, Kontext, beschreiben, deuten',
    'Struktur: Auslöser – Ursachen – Verlauf – Ende – Folgen; immer „aus damaliger Sicht" mitdenken'
  ],
  bereiche: [
    {
      titel: 'LB 1 · Die Grundlegung einer modernen Gesellschaft',
      punkte: [
        { t: 'Industrialisierung (England, Rückständigkeit Deutschlands, Phasen)', thema: 'industrialisierung' },
        { t: 'Soziale Frage und Lösungsansätze', thema: 'industrialisierung', tab: 'schema' },
        { t: 'Revolution 1848/49 (Ursachen, Verlauf, Scheitern, Folgen)', thema: 'revolution-1848' },
        { t: 'Kaiserreich: Gründung 1871', thema: 'nation-kaiserreich' },
        { t: 'Kulturkampf', thema: 'nation-kaiserreich' },
        { t: 'Sozialistengesetz und Sozialgesetze', thema: 'nation-kaiserreich' }
      ]
    },
    {
      titel: 'LB 2 · Demokratie und Diktatur in der ersten Hälfte des 20. Jahrhunderts',
      punkte: [
        { t: 'Entstehung der Weimarer Republik / Novemberrevolution', thema: 'weimar' },
        { t: 'Weimarer Reichsverfassung', thema: 'weimar', tab: 'schema' },
        { t: 'Gründe für das Scheitern der Weimarer Republik', thema: 'weimar' },
        { t: 'Aufstieg der NSDAP und Stationen der Machtergreifung', thema: 'ns-diktatur' },
        { t: 'Anziehungskraft des NS: Wohlstand, Stärke (Nationalismus), Senkung der Arbeitslosigkeit', thema: 'ns-diktatur' },
        { t: 'Ideologie und Propaganda', thema: 'ns-diktatur' },
        { t: 'Widerstand (Stauffenberg, Sophie Scholl)', thema: 'ns-diktatur' }
      ]
    },
    {
      titel: 'LB 3 · Demokratie und Diktatur in der zweiten Hälfte des 20. Jahrhunderts',
      punkte: [
        { t: 'Ministerium für Staatssicherheit (MfS)', thema: 'ddr-brd' },
        { t: 'Mauerbau 13.08.1961', thema: 'ddr-brd' },
        { t: 'Volksaufstand 17.06.1953', thema: 'ddr-brd' },
        { t: 'APO / 68er-Bewegung (und RAF)', thema: 'ddr-brd' },
        { t: 'Vergleich: Umgang mit Andersdenkenden in DDR und BRD', thema: 'ddr-brd', tab: 'schema' }
      ]
    },
    {
      titel: 'LB 4 · Herausforderung „Frieden"',
      punkte: [
        { t: '1. und 2. Weltkrieg: Ursachen', thema: 'weltkriege' },
        { t: '1. und 2. Weltkrieg: Charakter', thema: 'weltkriege' },
        { t: 'Versailler Vertrag – „Diktatfrieden", Gebietsabtretungen', thema: 'frieden' },
        { t: 'Potsdamer Konferenz – „Besatzungsfrieden"', thema: 'deutschland-1945-1990' },
        { t: 'Vergleich Versailles ↔ Potsdam', thema: 'deutschland-1945-1990', tab: 'schema' },
        { t: 'Neue Ostpolitik', thema: 'ddr-brd' }
      ]
    },
    {
      titel: 'Methoden',
      punkte: [
        { t: 'Textquelle formal analysieren und interpretieren (mit Zeilenangaben)' },
        { t: 'Karikatur bzw. Bild analysieren und deuten' },
        { t: 'Sachurteil und Werturteil unterscheiden – Stellung nehmen' }
      ]
    }
  ]
};
