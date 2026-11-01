/* Ergänzungen aus dem Hefter: Methoden (Umgang mit Karikaturen und Texten, Stellungnahmen, Prüfungsformat) */
ZR.ergaenze('karikatur', {
  bloecke: [
    {
      anfang: true,
      titel: 'Umgang mit Karikaturen – so steht es in deinem Hefter',
      schema: {
        typ: 'kette', titel: 'Umgang mit Karikaturen (Unterrichtsschema)', hefter: true,
        schritte: [
          { t: '1a · Analyse: formale Einordnung', d: 'Zeichner bzw. Auftraggeber und Informationen über ihn; zeitliche und örtliche Einordnung; Titel und Zusatzkommentar (Thema); Adressat; Quellenart: Bildquelle – Karikatur; historischer Kontext: Was geschah, als die Karikatur gezeichnet/veröffentlicht wurde?' },
          { t: '1b · Analyse: inhaltliche Erschließung', d: 'Welche Bildelemente sind zu erkennen (Personen, Orte, Gegenstände, Details, Schrift) und wie sind sie dargestellt (Mimik, Gestik, Kleidung, Symbole)? Was ist übertrieben, was weicht von der Realität ab? Welche Darstellungsmittel (Zitate, Personifizierung, Hyperbeln)?' },
          { t: '2 · Interpretation im historischen Kontext', d: 'Gestaltungsmittel deuten (wofür stehen Symbole, Text, Personen, Übertreibungen?); Zusammenhang zum Kontext herstellen; Widersprüche? Bedeutung des Titels; politisch-ideologischer Standpunkt und Position des Autors; Aussage/Botschaft → eigene Deutung formulieren', hl: true },
          { t: '3 · Abschließende Einordnung', d: '**Sachurteil:** Ist die Karikatur aus damaliger Sicht nachvollziehbar – passt sie in die Zeit? **Werturteil:** Ist sie aus heutiger Sicht nachvollziehbar? Erkennt man die Kritik, und wie ist sie heute einzuordnen?', hl: true }
        ]
      }
    }
  ]
});

ZR.ergaenze('textquelle', {
  bloecke: [
    {
      anfang: true,
      titel: 'Umgang mit Texten – so steht es in deinem Hefter',
      schema: {
        typ: 'kette', titel: 'Umgang mit Texten (Unterrichtsschema)', hefter: true,
        schritte: [
          { t: '1a · Analyse: formale Einordnung', d: 'Quelle oder Darstellung? Textart (Rede, Gesetz, Tagebuch, Vertrag, Urkunde, Biografie, Zeitungsartikel, Brief, Memoiren, Chronik, Akte); Verfasser mit allen Informationen; Adressat; Thema; historischer Kontext (Epoche, Ereignis, Zeitpunkt der Entstehung bzw. Veröffentlichung)' },
          { t: '1b · Analyse: inhaltliche Erschließung', d: 'Zentrale Aspekte wertungsfrei benennen (Kernaussage); Aussageabsicht, falls genannt; Schlüsselbegriffe benennen und erläutern; rhetorische Mittel (Metaphern, Anaphern …); Art der Sprache (sachlich, umgangssprachlich, emotional, informativ, argumentativ, appellativ)' },
          { t: '2 · Interpretation im historischen Kontext', d: 'Welche Rolle spielen Entstehungszeit und Autor? Welche Bedeutung haben Sprache und rhetorische Mittel? Welche Funktion hat der Text (aufklärend, sozial, rechtlich, religiös, propagandistisch)? Intention des Verfassers und historischen Kontext zusammenbringen → eigene Deutung', hl: true },
          { t: '3 · Abschließende Einordnung / Beurteilung des Aussagegehalts', d: 'Ist der Text authentisch, kann man ihm trauen (woran erkennbar)? Glaubwürdigkeit des Verfassers (Standpunkt, Absicht, Hintergrund), Problematisierung der Quelle (glaubwürdig oder widersprüchlich?), Adressat (Wirkung, Rezeption). **Sachurteil:** aus damaliger Sicht gerechtfertigt? **Werturteil:** aus heutiger Sicht angemessen?', hl: true }
        ]
      }
    }
  ]
});

ZR.ergaenze('urteilen', {
  bloecke: [
    {
      nach: 'Fallen beim Urteilen',
      titel: 'Aufbau einer Stellungnahme – nach dem Muster eurer Kursarbeiten',
      schema: {
        typ: 'kette', titel: 'So sind eure Stellungnahmen (APO, Mauerbau, MfS) aufgebaut', hefter: true,
        text: 'In deinem Hefter findest du drei ausgearbeitete Stellungnahmen. Sie folgen alle diesem bewährten Muster – nutze es als Vorlage.',
        schritte: [
          { t: 'Einleitung', d: 'Ereignis kurz einordnen (Wann? Was? Bedeutung) und die Leitfrage formulieren, z. B. „War der Mauerbau eine sinnvolle Maßnahme?"' },
          { t: 'Damalige Sicht – Perspektive 1', d: 'z. B. SED-Führung bzw. Staat: Ziele, Motive, kurzfristige Erfolge mit Belegen (Fluchtzahlen …)' },
          { t: 'Damalige Sicht – Perspektive 2', d: 'z. B. DDR-Bürger bzw. Protestierende: Erfahrungen, Nachteile, Empörung', hl: true },
          { t: 'Heutige Sicht', d: 'Langfristige Folgen; Maßstäbe Menschenrechte, Freiheit, Demokratie; ggf. Gegenwartsbezug (z. B. heutiger Umgang mit Protesten)', hl: true },
          { t: 'Eigene Meinung / Fazit', d: 'Klare Position, Argumente gewichten, Perspektiven zusammenführen: „Zusammenfassend …"' }
        ]
      }
    }
  ]
});

ZR.ergaenze('klausur', {
  bloecke: [
    {
      anfang: true,
      titel: 'Prüfungsformat aus deinen Notizen',
      text: ['So hast du dir die Prüfung notiert (typisch für die mündliche Prüfung bzw. die Kursprüfung):'],
      punkte: [
        '**20 Minuten Einlese- und Vorbereitungszeit.**',
        '**A-Teil (ca. 15 Minuten):** ein Text mit rund 30 Zeilen; Aufgaben mit den Operatoren beschreiben, interpretieren, erklären/erläutern, vergleichen, Stellung nehmen. **Zeilenangaben** nicht vergessen!',
        '**B-Teil (ca. 15 Minuten):** ein Bild oder eine Karikatur – formale Analyse, Kontext, beschreiben, deuten.',
        '**Struktur jeder Darstellung:** Auslöser – Ursachen – Verlauf – Ende – Folgen.',
        '**Immer an die Perspektive denken:** „aus damaliger Sicht" (Sichtweisen der Zeitgenossen!) und aus heutiger Sicht.',
        '👉 Die Liste deiner Prüfungsthemen findest du als **abhakbare Checkliste** im Reiter „Abi-Training".'
      ]
    }
  ]
});
