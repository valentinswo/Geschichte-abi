/*
 * VORLAGE für ein neues Thema.
 * 1. Datei kopieren und umbenennen (z. B. 11-imperialismus.js)
 * 2. Felder ausfüllen
 * 3. In index.html einbinden: <script src="data/themen/11-imperialismus.js"></script>
 * Dateien, die mit _ beginnen, werden nicht geladen.
 */
ZR.thema({
  id: 'mein-thema',
  titel: 'Ausführlicher Titel',
  kurz: 'Kurzname für den Reiter',
  untertitel: 'Ein Satz, worum es geht',
  stufe: 'Grundkurs 11/12',          // oder 'Klasse 10'
  lehrplan: 'Gk 11/12, LB x',
  farbe: '#17707f',                  // Farbe des Themas
  einleitung: [
    'Erster Absatz des Überblicks. **Wichtiges fett.**',
    'Zweiter Absatz.'
  ],
  kapitel: [
    {
      titel: 'Erstes Kapitel',
      text: ['Optionaler Fließtext.'],
      punkte: ['Stichpunkt eins', 'Stichpunkt zwei'],
      merke: 'Optionaler Merksatz.'
    }
  ],
  schemata: [
    { typ: 'kette', titel: 'Ablauf', schritte: [{ t: 'Schritt 1', d: 'Erklärung' }, { t: 'Schritt 2', d: 'Erklärung', hl: true }] },
    { typ: 'ursache', titel: 'Ursachen und Folgen', ursachen: ['…'], ereignis: 'Ereignis', folgen: ['…'] },
    { typ: 'vergleich', titel: 'Vergleich', spalten: ['Kriterium', 'A', 'B'], zeilen: [['Merkmal', '…', '…']] }
  ],
  zeitleiste: [{ jahr: '1900', text: 'Ereignis' }],
  begriffe: [{ begriff: 'Begriff', erklaerung: 'Erklärung' }],
  personen: [],
  abi: ['Abi-Tipp'],
  notizen: ['Ergänzungen aus dem eigenen Hefter.'],
  quiz: [
    { typ: 'wf', aussage: 'Eine Aussage.', richtig: true, erklaerung: 'Warum.' }
  ]
});
