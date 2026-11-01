/*
 * Methoden-Trainings: Operatoren, Quellenarbeit, Karikaturen, Bildquellen, Statistiken, Urteilen, Klausur.
 * Aufbau: einleitung, schritte, bloecke (Text, Tabelle oder Schema), formulierungen, fehler, beispiel, uebung (Quiz)
 */
[
  {
    id: 'operatoren', kategorie: 'Grundlagen', farbe: '#17707f',
    titel: 'Operatoren & Anforderungsbereiche',
    untertitel: 'Was eine Aufgabe genau von dir verlangt',
    einleitung: [
      'Jede Abituraufgabe beginnt mit einem **Operator** – einem Verb wie „nennen", „erläutern" oder „beurteilen". Er legt fest, was du tun sollst und wie viel. Wer den Operator überliest, schreibt oft am Thema vorbei und verschenkt Punkte, selbst wenn das Wissen stimmt.',
      'Die Operatoren sind drei **Anforderungsbereichen (AFB)** zugeordnet: **AFB I – Reproduktion** (Wissen wiedergeben, Material erfassen), **AFB II – Reorganisation und Transfer** (erklären, analysieren, Zusammenhänge herstellen) und **AFB III – Reflexion und Problemlösung** (urteilen, bewerten, erörtern). In Abiturklausuren steigen die Teilaufgaben meist von AFB I zu AFB III an – und AFB III bringt die meisten Punkte.'
    ],
    bloecke: [
      { titel: 'Die wichtigsten Operatoren', tabelle: { kopf: ['Operator', 'AFB', 'Was du tun sollst'], zeilen: [
        ['nennen', 'I', 'Informationen ohne Erläuterung knapp aufzählen'],
        ['beschreiben', 'I', 'Sachverhalte strukturiert und fachsprachlich wiedergeben – ohne Deutung'],
        ['zusammenfassen', 'I', 'Wesentliches eines Materials mit eigenen Worten verkürzt wiedergeben'],
        ['skizzieren / erarbeiten', 'I', 'Einen Sachverhalt in Grundzügen darstellen; Aussagen aus Material herausziehen (in Sachsen gebräuchlich)'],
        ['erläutern', 'II', 'Sachverhalte erklären UND mit Beispielen/Belegen veranschaulichen'],
        ['erklären', 'II', 'Ursachen, Gründe, Zusammenhänge herleiten („weil", „deshalb")'],
        ['analysieren', 'II', 'Material kriterienorientiert untersuchen (Inhalt, Form, Intention, Kontext)'],
        ['einordnen', 'II', 'Einen Sachverhalt in einen historischen Zusammenhang stellen'],
        ['vergleichen', 'II', 'Gemeinsamkeiten und Unterschiede nach Kriterien herausarbeiten'],
        ['charakterisieren / herausarbeiten', 'II', 'Typische Merkmale bzw. nicht offen genannte Aussagen erschließen'],
        ['interpretieren', 'II–III', 'Material analysieren, einordnen und begründet deuten'],
        ['beurteilen', 'III', 'Zu einem Sachverhalt ein begründetes **Sachurteil** fällen – ohne persönliche Wertung'],
        ['bewerten / Stellung nehmen', 'III', 'Ein begründetes **Werturteil** mit offengelegten (demokratischen) Wertmaßstäben fällen'],
        ['erörtern', 'III', 'Pro und Contra abwägen und zu einem begründeten Urteil kommen'],
        ['sich auseinandersetzen / überprüfen', 'III', 'Eine These oder Deutung kritisch prüfen und Stellung nehmen'],
        ['entwickeln', 'III', 'Eigene Lösungen, Gegenpositionen oder Perspektiven begründet ausarbeiten']
      ] } },
      { titel: 'So knackst du jede Aufgabe', punkte: [
        'Operator **markieren** und den AFB bestimmen.',
        'Den **Gegenstand** markieren: Worauf genau bezieht sich die Aufgabe (Zeitraum, Akteur, Material)?',
        'Bei Teilaufgaben auf **Mehrfachoperatoren** achten („analysiere und beurteile") – beides muss erkennbar erledigt werden.',
        'Bei AFB I nicht schon deuten, bei AFB III nicht nur beschreiben.'
      ] }
    ],
    fehler: ['„Erläutern" wie „nennen" behandeln – ohne Beispiel fehlt die Hälfte.', 'Bei „beurteilen" die eigene Meinung schreiben statt eines begründeten Sachurteils.', 'Bei „vergleichen" beide Seiten nacheinander beschreiben, aber nie direkt gegenüberstellen.'],
    uebung: [
      { typ: 'kategorien', frage: 'Ordne die Operatoren dem Anforderungsbereich zu.', kategorien: { 'AFB I': ['nennen', 'beschreiben', 'zusammenfassen'], 'AFB II': ['erläutern', 'analysieren', 'vergleichen', 'einordnen'], 'AFB III': ['beurteilen', 'bewerten', 'erörtern'] } },
      { typ: 'zuordnen', frage: 'Was verlangt der Operator?', paare: [['erläutern', 'Erklären und mit Beispielen veranschaulichen'], ['beurteilen', 'Begründetes Sachurteil'], ['bewerten', 'Werturteil mit offengelegten Maßstäben'], ['einordnen', 'In den historischen Zusammenhang stellen'], ['nennen', 'Knapp aufzählen']] },
      { typ: 'mc', frage: '„Vergleiche die Verfassungen von 1871 und 1919." – Was ist die beste Vorgehensweise?', optionen: ['Kriterien festlegen und Gemeinsamkeiten/Unterschiede direkt gegenüberstellen', 'Zuerst 1871 komplett beschreiben, dann 1919 komplett beschreiben', 'Die bessere Verfassung auswählen und begründen', 'Nur die Unterschiede aufzählen'], richtig: 0, erklaerung: 'Ein Vergleich braucht Kriterien (z. B. Staatsoberhaupt, Wahlrecht, Grundrechte) und eine direkte Gegenüberstellung.' },
      { typ: 'wf', aussage: 'Bei einer Aufgabe mit dem Operator „beschreiben" sollst du die Absicht des Autors deuten.', richtig: false, erklaerung: 'Beschreiben ist AFB I – Deutung kommt erst bei Analyse/Interpretation (AFB II).' }
    ]
  },
  {
    id: 'textquelle', kategorie: 'Quellenarbeit', farbe: '#3b6ea5',
    titel: 'Schriftliche Quellen analysieren',
    untertitel: 'Reden, Briefe, Gesetze, Zeitungsartikel – Schritt für Schritt',
    einleitung: [
      'Historiker unterscheiden **Quellen** (Material aus der untersuchten Zeit: Reden, Gesetze, Briefe, Tagebücher, Plakate) und **Darstellungen** (spätere Deutungen: Schulbuchtexte, Fachliteratur, Dokumentationen). Quellen sind nie objektiv: Jede wurde von jemandem, zu einem Zeitpunkt, für bestimmte Adressaten und mit einer Absicht verfasst.',
      'Die Quellenanalyse folgt deshalb einem festen Ablauf: erst die **äußeren Merkmale** klären, dann den **Inhalt** erfassen, ihn in den **historischen Kontext** einordnen, die **Intention** herausarbeiten und schließlich die Quelle **beurteilen**.'
    ],
    schritte: [
      { t: 'Einleitung: die W-Fragen', d: 'Wer (Autor, Funktion)? Was (Quellenart)? Wann und wo? An wen (Adressaten)? Worüber (Thema)? Mit welchem Anlass?' },
      { t: 'Inhalt wiedergeben', d: 'Gedankengang strukturiert in eigenen Worten zusammenfassen; indirekte Rede (Konjunktiv) und Zeilenangaben nutzen.' },
      { t: 'Sprache und Form untersuchen', d: 'Wortwahl, Schlüsselbegriffe, rhetorische Mittel, Feindbilder, Pathos, Argumentationsstruktur.' },
      { t: 'Historischen Kontext herstellen', d: 'Welche Situation, welche Ereignisse davor/danach? Eigenes Wissen gezielt einbringen.' },
      { t: 'Intention und Wirkung', d: 'Was will der Autor erreichen? Bei wem? Wie wurde die Quelle aufgenommen?' },
      { t: 'Beurteilen', d: 'Aussagewert, Glaubwürdigkeit, Perspektive (Standortgebundenheit); evtl. Werturteil nach demokratischen Maßstäben.' }
    ],
    bloecke: [
      { titel: 'Quellenarten unterscheiden', punkte: ['**Traditionsquellen:** bewusst für die Nachwelt geschaffen (Chroniken, Memoiren, Denkmäler) – besonders kritisch prüfen.', '**Überrestquellen:** unbeabsichtigt überliefert (Akten, Gesetze, Rechnungen, Alltagsgegenstände).', '**Primärquelle** (aus der Zeit) vs. **Sekundärliteratur/Darstellung** (spätere Bearbeitung).'] }
    ],
    formulierungen: ['Bei der vorliegenden Quelle handelt es sich um eine Rede des … , die am … in … vor … gehalten wurde.', 'Der Autor kritisiert / fordert / rechtfertigt …', 'Die Wortwahl „…" (Z. x) verdeutlicht …', 'Die Quelle ist im Kontext … zu sehen, als …', 'Da der Verfasser als … spricht, ist seine Darstellung parteiisch / einseitig …'],
    fehler: ['Inhaltsangabe nacherzählt, aber keine Analyse.', 'Kontextwissen fehlt oder wird ohne Bezug zur Quelle „abgeladen".', 'Zitate ohne Zeilenangabe oder Zitieren statt Paraphrasieren.', 'Die Perspektive des Autors wird nicht hinterfragt.'],
    beispiel: {
      titel: 'Otto Wels (SPD), Rede gegen das Ermächtigungsgesetz, Reichstag (Krolloper Berlin), 23. März 1933 – Auszug',
      material: ['„Freiheit und Leben kann man uns nehmen, die Ehre nicht. … Kein Ermächtigungsgesetz gibt Ihnen die Macht, Ideen, die ewig und unzerstörbar sind, zu vernichten. … Wir grüßen die Verfolgten und Bedrängten. Wir grüßen unsere Freunde im Reich. Ihre Standhaftigkeit und Treue verdienen Bewunderung."', '(Die Rede wurde vor SA- und SS-Männern im Saal gehalten; die KPD-Abgeordneten waren bereits verhaftet oder geflohen.)'],
      loesung: [
        { t: '1 · Einleitung', d: ['Die Quelle ist ein Auszug aus der Rede des SPD-Vorsitzenden Otto Wels vom 23. März 1933 im Reichstag, der in der Krolloper tagte. Adressaten waren die Abgeordneten, besonders die NSDAP-Fraktion und Hitler, aber auch die Öffentlichkeit und die verfolgten Parteimitglieder. Anlass war die Abstimmung über das Ermächtigungsgesetz.'] },
        { t: '2 · Inhalt', d: ['Wels erklärt, dass die Nationalsozialisten der SPD zwar Freiheit und Leben nehmen könnten, nicht aber ihre Ehre. Kein Gesetz könne die Ideen der Sozialdemokratie vernichten. Er grüßt die bereits Verfolgten und lobt ihre Standhaftigkeit.'] },
        { t: '3 · Sprache und Kontext', d: ['Die Rede ist von Pathos geprägt („ewig und unzerstörbar"); die Antithese „Freiheit und Leben … die Ehre nicht" betont moralische Überlegenheit trotz politischer Ohnmacht. Kontext: Nach der Reichstagsbrandverordnung waren Grundrechte aufgehoben, Kommunisten und viele Sozialdemokraten verhaftet; SA und SS standen im Saal. Das Gesetz erhielt die nötige Zweidrittelmehrheit, weil Zentrum und bürgerliche Parteien zustimmten.'] },
        { t: '4 · Intention und Beurteilung', d: ['Wels wollte die Ablehnung der SPD öffentlich begründen, den Verfolgten Mut machen und die Würde der Demokratie bewahren. Die Rede ist ein bedeutendes Zeugnis demokratischen Widerstands unter Lebensgefahr. Ihr Aussagewert ist hoch für die Haltung der SPD, sie zeigt aber zugleich die Ohnmacht der Demokraten im März 1933. Aus heutiger demokratischer Sicht ist sie ein Beispiel für Zivilcourage.'] }
      ]
    },
    uebung: [
      { typ: 'reihenfolge', frage: 'Bringe die Schritte der Quellenanalyse in die richtige Reihenfolge.', schritte: ['W-Fragen klären (Autor, Zeit, Adressat, Anlass)', 'Inhalt strukturiert wiedergeben', 'Sprache und Argumentation untersuchen', 'In den historischen Kontext einordnen', 'Intention und Wirkung herausarbeiten', 'Quelle beurteilen'] },
      { typ: 'kategorien', frage: 'Quelle oder Darstellung?', kategorien: { 'Quelle': ['Rede Otto Wels 1933', 'Text des Versailler Vertrags', 'Feldpostbrief von 1916', 'Wahlplakat der NSDAP 1932'], 'Darstellung': ['Schulbuchtext über Weimar', 'Fachbuch eines Historikers (2015)', 'TV-Dokumentation über den Mauerbau'] } },
      { typ: 'wf', aussage: 'Eine Quelle aus der untersuchten Zeit ist automatisch objektiv, weil sie „dabei war".', richtig: false, erklaerung: 'Jede Quelle ist standortgebunden – Autor, Absicht und Adressat prägen ihre Aussage.' },
      { typ: 'freitext', frage: 'Analysiere die Absicht (Intention) von Otto Wels in seiner Rede vom 23. März 1933.', material: '„Freiheit und Leben kann man uns nehmen, die Ehre nicht. … Kein Ermächtigungsgesetz gibt Ihnen die Macht, Ideen, die ewig und unzerstörbar sind, zu vernichten. … Wir grüßen die Verfolgten und Bedrängten." (Otto Wels, SPD, Reichstag, 23.3.1933)', operator: 'analysieren', afb: 'II', punkte: 4,
        erwartung: [
          { punkt: 'Begründung der Ablehnung des Ermächtigungsgesetzes / Bekenntnis zur Demokratie', schluessel: ['ermächtigungsgesetz', 'ablehn', 'demokrat', 'nein'] },
          { punkt: 'Mut machen / Solidarität mit den Verfolgten', schluessel: ['verfolgt', 'mut', 'solidar', 'grüß', 'standhaft'] },
          { punkt: 'Moralische Überlegenheit/Würde trotz Ohnmacht (Ehre, Ideen unzerstörbar)', schluessel: ['ehre', 'moral', 'würde', 'ideen', 'überlegen'] },
          { punkt: 'Bezug zum Kontext (Terror, SA im Saal, Verhaftungen, Reichstagsbrandverordnung)', schluessel: ['sa', 'terror', 'verhaft', 'reichstagsbrand', 'kpd'] }
        ],
        musterloesung: 'Wels wollte mit seiner Rede öffentlich begründen, warum die SPD als einzige Fraktion gegen das Ermächtigungsgesetz stimmte, und sich damit zur Demokratie bekennen. Gleichzeitig richtete er sich an die bereits verfolgten Sozialdemokraten, denen er Solidarität ausdrückte und Mut machen wollte. Mit der Antithese „Freiheit und Leben … die Ehre nicht" betonte er die moralische Überlegenheit der Demokraten, obwohl sie politisch machtlos waren. Das ist vor dem Hintergrund zu sehen, dass nach der Reichstagsbrandverordnung Grundrechte aufgehoben, Kommunisten verhaftet waren und SA-Männer im Saal standen.' }
    ]
  },
  {
    id: 'karikatur', kategorie: 'Quellenarbeit', farbe: '#e4572e',
    titel: 'Karikaturen interpretieren',
    untertitel: 'Bilder, die übertreiben, um zu kritisieren',
    einleitung: [
      'Eine **Karikatur** ist eine gezeichnete, oft satirische Darstellung, die politische oder gesellschaftliche Zustände **überspitzt** und **kommentiert**. Sie ist damit eine Quelle für die Meinung des Zeichners (und seines Publikums) – nicht für die Ereignisse selbst.',
      'Karikaturen arbeiten mit **Übertreibung**, **Symbolen** (Bär für Russland, Michel mit Zipfelmütze für Deutschland, Marianne für Frankreich), **Personifikationen**, **Metaphern** und **Textelementen** (Titel, Sprechblasen). Deine Aufgabe: zuerst genau beschreiben, dann die Bildsprache entschlüsseln, historisch einordnen und schließlich die Aussage beurteilen.'
    ],
    schritte: [
      { t: 'Formale Angaben', d: 'Zeichner, Titel, Entstehungszeit, Ort der Veröffentlichung (Zeitung/Zeitschrift), Anlass.' },
      { t: 'Beschreiben', d: 'Personen, Gegenstände, Handlung, Gestik/Mimik, Bildaufbau (Vorder-/Hintergrund, Größenverhältnisse), Text. Noch keine Deutung!' },
      { t: 'Deuten', d: 'Symbole, Personifikationen und Übertreibungen entschlüsseln: Wofür steht was?' },
      { t: 'Historisch einordnen', d: 'Auf welche Situation bezieht sich die Karikatur? Kontextwissen gezielt einsetzen.' },
      { t: 'Aussage formulieren', d: 'Die Kernaussage (Kritik, Botschaft) in einem Satz bündeln.' },
      { t: 'Beurteilen', d: 'Ist die Darstellung zutreffend, einseitig, überzogen? Welche Perspektive hat der Zeichner? Was blendet er aus?' }
    ],
    bloecke: [
      { titel: 'Häufige Symbole', tabelle: { kopf: ['Symbol', 'Bedeutung'], zeilen: [
        ['Deutscher Michel (Zipfelmütze)', 'Der (oft schläfrige, gutmütige) Deutsche'],
        ['Bär', 'Russland / Sowjetunion'],
        ['Uncle Sam, Adler', 'USA'],
        ['Marianne (phrygische Mütze)', 'Frankreich, Republik'],
        ['John Bull, Löwe', 'Großbritannien'],
        ['Pickelhaube', 'Preußen, Militarismus'],
        ['Taube, Ölzweig', 'Frieden'],
        ['Hammer und Sichel', 'Kommunismus'],
        ['Fesseln, Ketten', 'Unfreiheit, Unterdrückung'],
        ['Waage', 'Gerechtigkeit, Gleichgewicht'],
        ['Schiff, Lotse', 'Staat und seine Führung']
      ] } }
    ],
    formulierungen: ['Im Vordergrund / Zentrum der Karikatur ist … zu sehen.', 'Die Figur … ist überdimensional groß dargestellt, was … symbolisiert.', 'Der Zeichner kritisiert damit …', 'Die Karikatur bezieht sich auf …, als …', 'Die Darstellung ist insofern einseitig, als …'],
    fehler: ['Beschreiben und Deuten vermischen.', 'Symbole falsch oder gar nicht entschlüsseln.', 'Die Karikatur als „Foto der Wirklichkeit" behandeln statt als Meinung.', 'Das Urteil vergessen.'],
    beispiel: {
      titel: '„Dropping the Pilot" („Der Lotse geht von Bord") – John Tenniel, Punch (London), 29. März 1890',
      link: 'https://commons.wikimedia.org/w/index.php?search=Dropping+the+Pilot+Tenniel',
      material: ['**Bildbeschreibung (eigene Worte):** Ein großes Schiff liegt an der Bordwand. Über eine Strickleiter steigt ein älterer, kräftiger Mann in Lotsenuniform mit ernstem Gesicht und Schirmmütze nach unten zu einem kleinen Boot. Seine Gesichtszüge erinnern an Otto von Bismarck. Oben an der Reling lehnt ein junger Mann mit Krone und Schnurrbart (erkennbar als Kaiser Wilhelm II.) und schaut ihm hinterher, den Arm lässig aufgestützt. Titel: „Dropping the Pilot".'],
      loesung: [
        { t: '1 · Formale Angaben', d: ['Die Karikatur stammt von John Tenniel und erschien am 29. März 1890 in der britischen Satirezeitschrift *Punch*. Anlass war die Entlassung Bismarcks als Reichskanzler im März 1890.'] },
        { t: '2 · Deutung', d: ['Das Schiff steht für das Deutsche Reich, der Lotse für Bismarck, der das Schiff jahrzehntelang sicher durch gefährliche Gewässer gesteuert hat. Wilhelm II. als junger, selbstbewusster Kapitän schaut zu, wie der erfahrene Lotse von Bord geht – er will nun selbst steuern („persönliches Regiment").'] },
        { t: '3 · Einordnung und Aussage', d: ['Nach dem Dreikaiserjahr 1888 kam es zu Konflikten zwischen dem jungen Kaiser und Bismarck, u. a. um das Sozialistengesetz und die Außenpolitik. Die Karikatur drückt die britische Sorge aus, dass das Reich ohne den erfahrenen, auf Gleichgewicht bedachten Bismarck unberechenbarer wird.'] },
        { t: '4 · Beurteilung', d: ['Aus der Rückschau erscheint die Karikatur weitsichtig: Mit dem „Neuen Kurs" wurde der Rückversicherungsvertrag mit Russland nicht verlängert, die Weltpolitik führte zur Isolation Deutschlands. Allerdings idealisiert sie Bismarck, dessen Bündnissystem auch schon vor 1890 an Grenzen stieß, und zeigt eine britische Perspektive.'] }
      ]
    },
    uebung: [
      { typ: 'zuordnen', frage: 'Ordne die Symbole zu.', paare: [['Bär', 'Russland / Sowjetunion'], ['Deutscher Michel', 'Deutschland'], ['Marianne', 'Frankreich'], ['Uncle Sam', 'USA'], ['Taube mit Ölzweig', 'Frieden']] },
      { typ: 'reihenfolge', frage: 'Bringe die Schritte der Karikaturinterpretation in die richtige Reihenfolge.', schritte: ['Formale Angaben (Zeichner, Zeit, Ort)', 'Bildelemente beschreiben', 'Symbole deuten', 'Historisch einordnen', 'Aussage formulieren', 'Beurteilen'] },
      { typ: 'mc', frage: 'Welche Aussage über Karikaturen ist richtig?', optionen: ['Sie sind eine Quelle für die Meinung des Zeichners und seiner Zeit', 'Sie zeigen Ereignisse realistisch wie ein Foto', 'Sie dürfen im Abitur nur beschrieben werden', 'Sie enthalten nie Text'], richtig: 0 },
      { typ: 'freitext', frage: 'Interpretiere die beschriebene Karikatur (Deutung und Aussage).', material: 'Karikatur (Beschreibung): Zwei Männer sitzen sich gegenüber und drücken sich gegenseitig an den Armen bis zum Zerreißen gespannt – jeder sitzt auf einer riesigen Atombombe, die Finger jeweils über einem großen roten Knopf. Der eine trägt einen Sternenhut, der andere eine Pelzmütze mit rotem Stern. Beide schwitzen. Datierung: Oktober 1962.', operator: 'interpretieren', afb: 'II–III', punkte: 5,
        erwartung: [
          { punkt: 'Figuren gedeutet: USA (Kennedy) und UdSSR (Chruschtschow)', schluessel: ['usa', 'kennedy', 'udssr', 'sowjet', 'chruschtschow'] },
          { punkt: 'Atombomben/Knopf als Symbol für atomare Bedrohung bzw. Gleichgewicht des Schreckens', schluessel: ['atom', 'gleichgewicht', 'abschreck', 'vernichtung'] },
          { punkt: 'Einordnung: Kubakrise 1962', schluessel: ['kuba'] },
          { punkt: 'Aussage: Beide Seiten gleichermaßen verantwortlich, gefährliches Kräftemessen, Kompromiss nötig', schluessel: ['beide', 'gleich', 'kräftemessen', 'patt', 'kompromiss', 'verantwort'] },
          { punkt: 'Beurteilung (z. B. zutreffend, da Einigung nur durch beiderseitiges Nachgeben)', schluessel: ['zutreffend', 'treffend', 'einseitig', 'beurteil', 'insgesamt'] }
        ],
        musterloesung: 'Die beiden Männer stehen für die Supermächte: der Mann mit Sternenhut für die USA (Präsident Kennedy), der mit Pelzmütze und rotem Stern für die Sowjetunion (Chruschtschow). Die Atombomben, auf denen sie sitzen, und die roten Knöpfe symbolisieren das atomare Vernichtungspotenzial und das Gleichgewicht des Schreckens. Das Armdrücken zeigt ein gefährliches Kräftemessen, bei dem keiner nachgeben will; der Schweiß drückt die Angst aus. Die Karikatur bezieht sich auf die Kubakrise im Oktober 1962. Ihre Aussage: Beide Seiten tragen gleichermaßen Verantwortung, und ein einziger Fehler könnte die Welt vernichten – nur ein Kompromiss kann die Lage entschärfen. Die Darstellung trifft zu, denn tatsächlich wurde die Krise durch beiderseitiges Nachgeben (Raketenabzug aus Kuba und geheim aus der Türkei) beendet.' }
    ]
  },
  {
    id: 'bildquelle', kategorie: 'Quellenarbeit', farbe: '#7b5ea7',
    titel: 'Bildquellen: Fotos, Gemälde, Plakate',
    untertitel: 'Bilder sind nie neutral – sie sind gemacht',
    einleitung: [
      'Bildquellen wirken unmittelbar und scheinen „die Wahrheit" zu zeigen. Doch auch Fotos werden ausgewählt, inszeniert, beschnitten oder retuschiert, und Gemälde oder Plakate sind ohnehin gestaltet, um eine Wirkung zu erzielen. Bei jeder Bildquelle fragst du daher: **Wer hat das Bild wann, für wen und mit welcher Absicht geschaffen?**',
      'Unterscheide: **Historienbilder/Gemälde** (oft im Auftrag, idealisierend), **Fotografien** (Momentaufnahme, Auswahl, Perspektive, ggf. gestellt), **politische Plakate** (Propaganda/Werbung: Botschaft, Zielgruppe, Bild-Text-Verhältnis, Farben, Schlagworte).'
    ],
    schritte: [
      { t: 'Formale Angaben', d: 'Urheber, Auftraggeber, Entstehungszeit, Bildart, Veröffentlichungsort, Adressaten.' },
      { t: 'Beschreiben', d: 'Bildaufbau, Personen, Gestik, Kleidung, Farben, Licht, Perspektive, Texte/Slogans.' },
      { t: 'Gestaltungsmittel analysieren', d: 'Was steht im Zentrum? Wie wird gelenkt (Blickachsen, Kontraste, Größe)? Was fehlt?' },
      { t: 'Kontext und Entstehung', d: 'Situation der Entstehung; bei Fotos: gestellt oder spontan? Retusche?' },
      { t: 'Intention und Wirkung', d: 'Was soll der Betrachter denken oder fühlen? Wen spricht es an?' },
      { t: 'Beurteilen', d: 'Aussagewert für das Ereignis vs. für die Sichtweise des Urhebers.' }
    ],
    bloecke: [
      { titel: 'Besonders bei Propagandaplakaten', punkte: ['**Zielgruppe:** Arbeiter, Frauen, Bauern, Jugend, Veteranen?', '**Feindbild:** Wer wird wie dargestellt (Tiere, Fratzen, Schatten)?', '**Farben:** Rot (Kampf, Sozialismus), Schwarz-Weiß-Rot (Kaiserreich, Nationalisten), Schwarz-Rot-Gold (Republik).', '**Slogan:** Imperativ, Ausrufe, einfache Gegensätze.', '**Versprechen:** Arbeit, Brot, Ordnung, Gemeinschaft, Frieden.'] }
    ],
    formulierungen: ['Das Gemälde entstand im Auftrag von …', 'Durch die Lichtführung wird … hervorgehoben.', 'Das Plakat richtet sich an …', 'Es fällt auf, dass … nicht dargestellt wird.'],
    fehler: ['Bild als neutrale Abbildung der Wirklichkeit behandeln.', 'Entstehungszeit mit dem dargestellten Ereignis verwechseln (z. B. Werners Kaiserproklamation: Fassung von 1885 zeigt Bismarck in weißer Uniform, die er 1871 nicht trug).'],
    beispiel: {
      titel: 'Anton von Werner: „Die Proklamierung des Deutschen Kaiserreiches" (Fassung 1885, sog. Friedrichsruher Fassung)',
      link: 'https://commons.wikimedia.org/w/index.php?search=Anton+von+Werner+Proklamierung+Kaiserreich',
      material: ['**Bildbeschreibung (eigene Worte):** Ein prunkvoller Saal mit Spiegeln und Kronleuchtern. Links auf einem Podest steht König Wilhelm I., umgeben von Fürsten. Im Saal drängen sich Offiziere in Uniform, die Säbel und Helme jubelnd erheben. In der Bildmitte, hervorgehoben durch eine leuchtend weiße Uniform, steht Bismarck, daneben Generalstabschef Moltke. Zivilisten oder Abgeordnete sind nicht zu sehen.'],
      loesung: [
        { t: '1 · Formale Angaben', d: ['Anton von Werner war bei der Proklamation am 18. Januar 1871 in Versailles anwesend und malte mehrere Fassungen. Die Fassung von 1885 war ein Geschenk der Hohenzollernfamilie zu Bismarcks 70. Geburtstag.'] },
        { t: '2 · Analyse', d: ['Bismarck steht durch die weiße Uniform im Zentrum – obwohl er 1871 eine blaue Uniform trug. Der Kaiser ist erhöht, das Militär dominiert, Vertreter des Volkes fehlen. Der Spiegelsaal von Versailles steht für den Triumph über Frankreich.'] },
        { t: '3 · Intention', d: ['Das Bild feiert Bismarck als Reichsgründer und zeigt die Reichsgründung als Werk von Fürsten und Militär – eine Einigung „von oben". Es diente der Selbstinszenierung des Kaiserreichs.'] },
        { t: '4 · Beurteilung', d: ['Als Quelle für den Ablauf des 18. Januar 1871 ist das Bild nur eingeschränkt aussagekräftig (nachträgliche Veränderungen). Als Quelle für das Selbstverständnis des Kaiserreichs 1885 ist es dagegen sehr wertvoll.'] }
      ]
    },
    uebung: [
      { typ: 'mc', frage: 'Warum ist Anton von Werners Gemälde von 1885 als Quelle für den genauen Ablauf des 18. Januar 1871 nur eingeschränkt brauchbar? (mehrere richtig)', optionen: ['Bismarck trägt eine weiße Uniform, die er 1871 nicht trug', 'Das Bild entstand 14 Jahre später als Geschenk für Bismarck', 'Es ist ein Foto und deshalb ungenau', 'Es inszeniert die Reichsgründung im Sinne des Kaiserreichs'], richtig: [0, 1, 3] },
      { typ: 'kategorien', frage: 'Was gehört zur Beschreibung, was zur Deutung?', kategorien: { 'Beschreibung': ['Im Zentrum steht ein Mann in weißer Uniform', 'Offiziere heben Säbel', 'Es sind keine Zivilisten zu sehen'], 'Deutung': ['Bismarck wird als eigentlicher Reichsgründer inszeniert', 'Die Einigung erscheint als Werk des Militärs', 'Das Volk war an der Reichsgründung nicht beteiligt'] } },
      { typ: 'wf', aussage: 'Fotografien sind immer objektive Abbildungen der Wirklichkeit.', richtig: false, erklaerung: 'Auch Fotos werden ausgewählt, beschnitten, inszeniert oder retuschiert (bekannt: Retuschen unter Stalin).' }
    ]
  },
  {
    id: 'statistik', kategorie: 'Quellenarbeit', farbe: '#2e7d4f',
    titel: 'Statistiken und Diagramme auswerten',
    untertitel: 'Zahlen lesen, Entwicklungen erkennen, Grenzen sehen',
    einleitung: [
      'Statistiken (Tabellen, Diagramme, Schaubilder) gelten als **Darstellungen**: Jemand hat Daten gesammelt, ausgewählt und aufbereitet. Sie machen Entwicklungen sichtbar – etwa Wahlergebnisse, Arbeitslosenzahlen, Bevölkerungswachstum oder Industrieproduktion.',
      'Wichtig: Zahlen sprechen nicht für sich. Du musst sie **beschreiben** (Werte, Trends, Auffälligkeiten), **erklären** (historische Ursachen) und ihre **Aussagekraft** prüfen (Quelle, Bezugsgrößen, absolute vs. relative Zahlen, fehlende Werte, Darstellungstricks wie gestauchte Achsen).'
    ],
    schritte: [
      { t: 'Formale Angaben', d: 'Thema, Quelle/Herausgeber, Zeitraum, Raum, Einheiten (absolut, Prozent, Index), Darstellungsform.' },
      { t: 'Beschreiben', d: 'Höchst- und Tiefstwerte, Entwicklung (Anstieg, Rückgang, Stagnation), Brüche und Zäsuren.' },
      { t: 'Zusammenhänge herstellen', d: 'Werte miteinander vergleichen; Korrelationen erkennen.' },
      { t: 'Erklären', d: 'Mit historischem Wissen deuten: Warum steigt/fällt der Wert?' },
      { t: 'Kritisch prüfen', d: 'Was zeigt die Statistik nicht? Wer hat sie erstellt? Sind Achsen oder Zeiträume verzerrt?' }
    ],
    bloecke: [
      { titel: 'Beispieldaten: Reichstagswahlen und Arbeitslosigkeit', tabelle: { kopf: ['Wahl', 'NSDAP', 'KPD', 'SPD', 'Arbeitslose (ca., Jahresdurchschnitt)'], zeilen: [
        ['Mai 1928', '2,6 %', '10,6 %', '29,8 %', '1,4 Mio. (1928)'],
        ['Sept. 1930', '18,3 %', '13,1 %', '24,5 %', '3,1 Mio. (1930)'],
        ['Juli 1932', '37,3 %', '14,3 %', '21,6 %', '5,6 Mio. (1932)'],
        ['Nov. 1932', '33,1 %', '16,9 %', '20,4 %', '5,6 Mio. (1932)'],
        ['März 1933', '43,9 %', '12,3 %', '18,3 %', '4,8 Mio. (1933)']
      ] } }
    ],
    formulierungen: ['Die Statistik zeigt die Entwicklung von … im Zeitraum von … bis …', 'Auffällig ist der sprunghafte Anstieg zwischen … und …', 'Dies lässt sich durch … erklären.', 'Zu beachten ist, dass die Statistik keine Aussage über … trifft.'],
    fehler: ['Jeden einzelnen Wert vorlesen statt Trends zu benennen.', 'Korrelation mit Ursache verwechseln.', 'Prozent und Prozentpunkte verwechseln.'],
    uebung: [
      { typ: 'mc', frage: 'Die NSDAP stieg von 18,3 % (1930) auf 37,3 % (Juli 1932). Wie beschreibst du das korrekt?', optionen: ['Anstieg um 19 Prozentpunkte – etwa eine Verdopplung', 'Anstieg um 19 Prozent', 'Anstieg um 37 Prozentpunkte', 'Leichter Zuwachs'], richtig: 0, erklaerung: 'Die Differenz zweier Prozentwerte wird in Prozentpunkten angegeben.' },
      { typ: 'wf', aussage: 'Aus der Tabelle folgt zwingend, dass jeder Arbeitslose NSDAP wählte.', richtig: false, erklaerung: 'Gleichzeitige Entwicklung (Korrelation) beweist keinen individuellen Zusammenhang. Arbeitslose wählten überdurchschnittlich KPD; die NSDAP gewann v. a. im Mittelstand, bei Protestanten und Erstwählern.' },
      { typ: 'freitext', frage: 'Werte die Statistik zu Reichstagswahlen und Arbeitslosigkeit 1928–1933 aus.', material: 'NSDAP: 2,6 % (1928) – 18,3 % (1930) – 37,3 % (Juli 1932) – 33,1 % (Nov. 1932) – 43,9 % (März 1933). KPD: 10,6 % – 13,1 % – 14,3 % – 16,9 % – 12,3 %. Arbeitslose: 1,4 Mio. (1928) – 3,1 Mio. (1930) – 5,6 Mio. (1932) – 4,8 Mio. (1933).', operator: 'auswerten / erklären', afb: 'II', punkte: 5,
        erwartung: [
          { punkt: 'Beschreibung des Trends: starker Anstieg der NSDAP, Rückgang im November 1932', schluessel: ['anstieg', 'steigt', 'rückgang', 'november', 'verlust'] },
          { punkt: 'Paralleler Anstieg der Arbeitslosigkeit und Zuwachs der KPD (Radikalisierung)', schluessel: ['arbeitslos', 'kpd', 'radikal'] },
          { punkt: 'Erklärung: Weltwirtschaftskrise, Vertrauensverlust in Demokratie', schluessel: ['weltwirtschaftskrise', 'krise', 'vertrauen'] },
          { punkt: 'Besonderheit März 1933: Wahl unter Terror, keine freie Wahl mehr', schluessel: ['terror', 'unfrei', 'reichstagsbrand', 'nicht frei', '1933'] },
          { punkt: 'Kritische Grenze: Korrelation ≠ Kausalität / Statistik zeigt nicht, wer wen wählte', schluessel: ['korrelation', 'kausal', 'nicht zwingend', 'grenze', 'nicht zeigen'] }
        ],
        musterloesung: 'Die Statistik zeigt einen dramatischen Aufstieg der NSDAP von 2,6 % (1928) auf 37,3 % im Juli 1932 – also um rund 35 Prozentpunkte. Im November 1932 verlor sie erstmals Stimmen (33,1 %). Gleichzeitig stieg die Zahl der Arbeitslosen von 1,4 auf 5,6 Millionen, auch die KPD legte zu. Das verweist auf eine Radikalisierung der Wählerschaft infolge der Weltwirtschaftskrise und des Vertrauensverlusts in die demokratischen Parteien. Das Ergebnis vom März 1933 (43,9 %) muss gesondert betrachtet werden, denn die Wahl fand nach der Reichstagsbrandverordnung unter Terror statt. Einschränkend gilt: Die Statistik zeigt nur eine zeitliche Parallele; sie beweist nicht, dass die Arbeitslosen selbst NSDAP wählten – tatsächlich wählten sie eher KPD.' }
    ]
  },
  {
    id: 'urteilen', kategorie: 'Urteilen', farbe: '#d4a017',
    titel: 'Urteilen: Sachurteil und Werturteil',
    untertitel: 'Die wichtigste Kompetenz im Geschichtsabitur',
    einleitung: [
      'Der sächsische Lehrplan beschreibt historisches Lernen in drei Stufen: Zuerst wird ein Sachverhalt **analysiert**. Dann wird auf der Ebene des **Sachurteils** die damalige Wirklichkeit verstanden. Schließlich orientiert sich das **Werturteil** an den Maßstäben der freiheitlich-demokratischen Gesellschaft. Wer diese Stufen sauber trennt, kann jede AFB-III-Aufgabe strukturiert lösen.',
      'Ein **Sachurteil** beurteilt einen historischen Sachverhalt **aus seiner Zeit heraus** – nach Kriterien wie Ursachen, Folgen, Handlungsspielräume, Ziele und Wirksamkeit. Es fragt: War die Entscheidung angesichts der damaligen Bedingungen nachvollziehbar, erfolgreich, folgerichtig? Ein **Werturteil** bewertet denselben Sachverhalt **aus heutiger Sicht** mit offengelegten Wertmaßstäben: Menschenwürde, Freiheit, Demokratie, Gerechtigkeit, Frieden. Beides ist legitim – aber man muss kennzeichnen, welches Urteil man gerade fällt.'
    ],
    schritte: [
      { t: 'Frage klären', d: 'Worüber soll geurteilt werden? Ist ein Sachurteil (beurteilen) oder ein Werturteil (bewerten, Stellung nehmen) verlangt – oder beides?' },
      { t: 'Kriterien festlegen', d: 'Für Sachurteile z. B.: Ziele erreicht? Alternativen vorhanden? Kurz-/langfristige Folgen? Für Werturteile: Welche Werte lege ich an (Menschenrechte, Demokratie, Frieden)?' },
      { t: 'Argumente sammeln und gewichten', d: 'Pro und Contra, mit Belegen aus Material und Wissen. Das stärkste Argument kommt zuletzt.' },
      { t: 'Perspektiven berücksichtigen', d: 'Wie sahen Zeitgenossen (verschiedene Gruppen) die Sache? Wie sieht sie die Forschung?' },
      { t: 'Urteil formulieren', d: 'Klare, begründete Position – differenziert („zwar … aber"), nicht schwammig.' },
      { t: 'Reflektieren', d: 'Grenzen des Urteils benennen: Rückschaufehler, unsichere Quellenlage, eigene Standortgebundenheit.' }
    ],
    bloecke: [
      { schema: { typ: 'kette', titel: 'Drei Stufen historischen Urteilens', schritte: [
        { t: 'Sachanalyse', d: 'Was war? Fakten, Ursachen, Zusammenhänge klären (AFB I–II)' },
        { t: 'Sachurteil', d: 'Aus der damaligen Zeit heraus beurteilen: Bedingungen, Spielräume, Wirksamkeit (AFB III)', hl: true },
        { t: 'Werturteil', d: 'Mit heutigen, offengelegten Wertmaßstäben bewerten: Menschenwürde, Freiheit, Demokratie (AFB III)', hl: true }
      ] } },
      { titel: 'Sachurteil oder Werturteil? Beispiele', tabelle: { kopf: ['Aussage', 'Art'], zeilen: [
        ['„Das Münchner Abkommen wurde am 30. September 1938 unterzeichnet."', 'Sachaussage (Faktum)'],
        ['„Chamberlains Appeasement war angesichts der britischen Rüstungsschwäche 1938 nachvollziehbar, verfehlte aber sein Ziel, Hitler dauerhaft einzubinden."', 'Sachurteil'],
        ['„Das Münchner Abkommen war moralisch verwerflich, weil über das Schicksal der Tschechoslowakei ohne sie entschieden wurde."', 'Werturteil (Maßstab: Selbstbestimmung)'],
        ['„Die Reichstagsbrandverordnung war entscheidend für die Errichtung der Diktatur, weil sie den Terror legalisierte."', 'Sachurteil'],
        ['„Die Aufhebung der Grundrechte 1933 widerspricht fundamental der Menschenwürde."', 'Werturteil']
      ] } },
      { titel: 'Fallen beim Urteilen', punkte: ['**Rückschaufehler (Hindsight Bias):** Zeitgenossen wussten nicht, was wir heute wissen (z. B. Holocaust, Kriegsausgang).', '**Präsentismus:** Vergangenheit nur mit heutigen Maßstäben messen, ohne die damaligen Bedingungen zu verstehen – gehört ins Werturteil, nicht ins Sachurteil.', '**Moralisieren statt Begründen:** „Das war schlimm" ist kein Urteil ohne Kriterien und Belege.', '**Unentschiedenheit:** „Es gibt Argumente für beide Seiten" reicht nicht – du musst gewichten.', '**Monokausalität:** Historische Ereignisse haben fast immer mehrere Ursachen.'] }
    ],
    formulierungen: ['Aus der Perspektive der Zeitgenossen war … nachvollziehbar, weil …', 'Gemessen an seinen eigenen Zielen war … (nicht) erfolgreich, da …', 'Für die These spricht …, dagegen lässt sich einwenden …', 'Schwerer wiegt jedoch …', 'Legt man die Maßstäbe der Menschenrechte an, so ist … zu verurteilen / zu würdigen, weil …', 'Einschränkend muss berücksichtigt werden, dass …', 'Insgesamt komme ich zu dem Urteil, dass …'],
    fehler: ['Sach- und Werturteil nicht gekennzeichnet oder vermischt.', 'Keine Kriterien genannt.', 'Nur eine Seite betrachtet.', 'Urteil steht nicht am Ende oder ist widersprüchlich zur Argumentation.'],
    beispiel: {
      titel: 'Aufgabe: „Beurteile und bewerte die Entscheidung Friedrich Eberts für das Bündnis mit der Obersten Heeresleitung (Ebert-Groener-Pakt, 10. November 1918)."',
      material: ['Hintergrund: Ebert wollte Ordnung sichern, die Rückführung der Truppen organisieren und einen Bürgerkrieg wie in Russland verhindern. Die OHL sicherte Unterstützung zu, im Gegenzug blieb das kaiserliche Offizierskorps unangetastet. Später setzte die Regierung Militär und Freikorps gegen linke Aufstände ein.'],
      loesung: [
        { t: 'Sachurteil (aus der Zeit heraus)', d: ['Kriterien: Ziele Eberts, Handlungsspielräume, Folgen. Aus Eberts Sicht war das Bündnis nachvollziehbar: Er hatte keine eigenen Truppen, Millionen Soldaten mussten heimgeführt werden, die Versorgungslage war katastrophal und er fürchtete eine Räterevolution nach russischem Vorbild. Kurzfristig erreichte er seine Ziele – Wahlen zur Nationalversammlung fanden statt. Allerdings hatte er Alternativen: Viele Soldatenräte waren gemäßigt und hätten eine Demokratisierung des Heeres mitgetragen. Langfristig sicherte das Bündnis antidemokratischen Eliten ihre Macht, die der Republik später schadeten (Kapp-Putsch, „Staat im Staate").'] },
        { t: 'Werturteil (aus heutiger Sicht)', d: ['Legt man die Maßstäbe einer wehrhaften Demokratie an, ist das Bündnis kritisch zu bewerten: Die Gewalt der Freikorps 1919 (u. a. Morde an Luxemburg und Liebknecht) wurde in Kauf genommen und die Verantwortlichen kaum bestraft. Zugleich ist anzuerkennen, dass Ebert die parlamentarische Demokratie gegen eine Diktatur von links durchsetzen wollte.'] },
        { t: 'Fazit', d: ['Insgesamt war die Entscheidung aus der Lage heraus verständlich und kurzfristig erfolgreich, sie belastete die Republik aber langfristig schwer, weil die alten Eliten nicht demokratisiert wurden. Einschränkend gilt: Die späteren Folgen konnte Ebert 1918 nicht vollständig absehen (Rückschaufehler).'] }
      ]
    },
    uebung: [
      { typ: 'kategorien', frage: 'Sachaussage, Sachurteil oder Werturteil?', kategorien: {
        'Sachaussage': ['Die Mauer wurde am 13. August 1961 gebaut.', 'Hitler wurde am 30. Januar 1933 Reichskanzler.'],
        'Sachurteil': ['Der Mauerbau stabilisierte die DDR kurzfristig, weil er die Abwanderung von Fachkräften stoppte.', 'Die Weltwirtschaftskrise war ein wesentlicher Faktor für den Aufstieg der NSDAP.'],
        'Werturteil': ['Der Schießbefehl an der Mauer war ein Verbrechen gegen das Recht auf Leben.', 'Die Gleichschaltung 1933 war ein Angriff auf die Freiheit jedes Einzelnen.'] } },
      { typ: 'mc', frage: 'Was beschreibt den „Rückschaufehler"?', optionen: ['Man beurteilt Entscheidungen mit Wissen, das die Zeitgenossen noch nicht hatten', 'Man liest eine Quelle von hinten nach vorne', 'Man vergisst, das Fazit am Ende zu schreiben', 'Man urteilt zu positiv über die Vergangenheit'], richtig: 0 },
      { typ: 'reihenfolge', frage: 'Ordne die Stufen historischen Lernens laut sächsischem Lehrplan.', schritte: ['Sachverhalt analysieren', 'Sachurteil: damalige Wirklichkeit verstehen', 'Werturteil: nach Maßstäben der freiheitlich-demokratischen Gesellschaft'] },
      { typ: 'wf', aussage: 'Ein Werturteil braucht offengelegte Wertmaßstäbe, z. B. Menschenwürde oder Demokratie.', richtig: true },
      { typ: 'freitext', frage: 'Formuliere zur Neuen Ostpolitik Willy Brandts je ein Sachurteil und ein Werturteil und kennzeichne beide.', operator: 'beurteilen / bewerten', afb: 'III', punkte: 6,
        erwartung: [
          { punkt: 'Sachurteil erkennbar gekennzeichnet und aus der Zeit heraus begründet (Ziele, Wirkung: Entspannung, Verträge, menschliche Erleichterungen)', schluessel: ['sachurteil', 'damals', 'aus der zeit', 'ziel', 'erfolgreich', 'wirkung'] },
          { punkt: 'Konkrete Belege: Moskauer/Warschauer Vertrag, Grundlagenvertrag, Kniefall, Gewaltverzicht', schluessel: ['moskauer', 'warschauer', 'grundlagenvertrag', 'kniefall', 'gewaltverzicht'] },
          { punkt: 'Gegenposition der Zeit berücksichtigt (Kritik der CDU/CSU: Anerkennung der Teilung, Verzicht auf Ostgebiete)', schluessel: ['kritik', 'opposition', 'cdu', 'verzicht', 'anerkennung', 'teilung'] },
          { punkt: 'Werturteil gekennzeichnet mit offengelegtem Maßstab (Frieden, Versöhnung, Menschenrechte)', schluessel: ['werturteil', 'maßstab', 'frieden', 'versöhnung', 'menschenrecht'] },
          { punkt: 'Reflexion/Gewichtung (z. B. Stabilisierung der DDR als Kehrseite, Rückschau auf 1989/90)', schluessel: ['stabilisier', 'kehrseite', 'einschränk', 'rückblick', 'jedoch', '1989', '1990'] }
        ],
        musterloesung: 'Sachurteil: Gemessen an ihren Zielen war die Neue Ostpolitik erfolgreich. Mit dem Moskauer und dem Warschauer Vertrag (1970) und dem Grundlagenvertrag (1972) erreichte die Regierung Brandt Gewaltverzicht, Entspannung und menschliche Erleichterungen wie Besuchsmöglichkeiten. Zeitgenössische Kritiker aus CDU/CSU warfen ihr vor, die Teilung und den Verlust der Ostgebiete faktisch anzuerkennen und die DDR aufzuwerten – das war aus ihrer Sicht nachvollziehbar, da die DDR tatsächlich international anerkannt wurde. Werturteil: Legt man die Maßstäbe Frieden und Versöhnung an, ist die Ostpolitik positiv zu bewerten, besonders symbolisiert durch Brandts Kniefall in Warschau als Eingeständnis deutscher Schuld. Einschränkend ist zu bedenken, dass sie die SED-Herrschaft zunächst stabilisierte; aus heutiger Sicht schuf sie aber Vertrauen, das 1990 die Zustimmung der Nachbarn zur Einheit erleichterte.' }
    ]
  },
  {
    id: 'klausur', kategorie: 'Abitur', farbe: '#8e2b2b',
    titel: 'Die Abi-Klausur schreiben',
    untertitel: 'Zeitplan, Aufbau, Erörterung – so holst du die Punkte',
    einleitung: [
      'In der schriftlichen Abiturprüfung bekommst du Materialien und mehrere Teilaufgaben, die von AFB I bis AFB III ansteigen. Die Bearbeitungszeit ist lang, aber sie vergeht schnell. Eine gute Strategie ist genauso wichtig wie dein Wissen.',
      'Die Erörterung bzw. Beurteilung am Ende ist die Königsdisziplin. Hier zeigst du, dass du Wissen verknüpfen, Positionen abwägen und begründet urteilen kannst. Tipp: Lies die letzte Aufgabe zuerst – dann liest du das Material schon mit Blick auf das Urteil.'
    ],
    schritte: [
      { t: 'Lesen und planen (ca. 10–15 %)', d: 'Alle Aufgaben lesen, Operatoren markieren, Material gründlich lesen und annotieren, Stichpunkt-Gliederung pro Aufgabe.' },
      { t: 'AFB I zügig (ca. 15–20 %)', d: 'Präzise, knapp, ohne Wertung; Zeilenangaben bei Materialbezug.' },
      { t: 'AFB II gründlich (ca. 30 %)', d: 'Analyse und Einordnung – Material und Wissen verknüpfen.' },
      { t: 'AFB III mit Zeitpuffer (ca. 35 %)', d: 'Einleitung mit Problemfrage, Argumente pro/contra gewichtet, begründetes Urteil, Fazit.' },
      { t: 'Korrektur (ca. 5–10 %)', d: 'Rechtschreibung, Fachbegriffe, Daten prüfen; Operatoren abhaken.' }
    ],
    bloecke: [
      { titel: 'Aufbau einer Erörterung / Beurteilung', schema: { typ: 'kette', titel: 'Aufbau einer Erörterung', schritte: [
        { t: 'Einleitung', d: 'Hinführung zum Thema, Problemfrage bzw. These aufgreifen, Vorgehen kurz ankündigen' },
        { t: 'Kriterien', d: 'Woran misst du dein Urteil? (Ziele, Folgen, Alternativen, Maßstäbe)' },
        { t: 'Argumente für die These', d: 'Behauptung → Begründung → Beleg/Beispiel' },
        { t: 'Argumente gegen die These', d: 'ebenso; ggf. dialektisch im Wechsel' },
        { t: 'Abwägung und Urteil', d: 'Gewichtung, eindeutige Position, Sach- und Werturteil getrennt', hl: true },
        { t: 'Fazit / Ausblick', d: 'Kurze Zusammenfassung, ggf. Gegenwartsbezug' }
      ] } },
      { titel: 'Das Argument nach dem BBB-Prinzip', punkte: ['**Behauptung:** „Die Verfassung begünstigte das Scheitern der Republik."', '**Begründung:** „… weil Art. 48 dem Präsidenten ermöglichte, ohne Parlament zu regieren."', '**Beleg/Beispiel:** „Ab 1930 regierte Brüning fast nur noch mit Notverordnungen (1932: 66 Notverordnungen, nur 5 Gesetze)."'] }
    ],
    formulierungen: ['Im Folgenden soll geprüft werden, inwiefern …', 'Ein zentrales Argument für die These ist …', 'Dem lässt sich entgegenhalten, dass …', 'Wägt man die Argumente ab, so überwiegt …', 'Abschließend lässt sich festhalten, dass …'],
    fehler: ['Zu viel Zeit für AFB I, keine Zeit fürs Urteil.', 'Kein klares Urteil am Ende.', 'Wissen „abladen" ohne Bezug zur Aufgabe.', 'Material nicht genutzt bzw. nicht zitiert.'],
    uebung: [
      { typ: 'reihenfolge', frage: 'Ordne den Aufbau einer Erörterung.', schritte: ['Einleitung mit Problemfrage', 'Kriterien festlegen', 'Argumente für die These', 'Argumente gegen die These', 'Abwägung und begründetes Urteil', 'Fazit / Ausblick'] },
      { typ: 'zuordnen', frage: 'Ordne die Teile des BBB-Arguments zu.', paare: [['Behauptung', '„Das Appeasement scheiterte."'], ['Begründung', '„… weil Hitler Nachgiebigkeit als Schwäche deutete."'], ['Beleg', '„Im März 1939 zerschlug er die Tschechoslowakei."']] },
      { typ: 'mc', frage: 'Welche Zeiteinteilung ist sinnvoll?', optionen: ['Für die AFB-III-Aufgabe den größten Zeitanteil einplanen', 'Alle Aufgaben gleich lang bearbeiten', 'Die meiste Zeit für die erste Aufgabe verwenden', 'Ohne Planung sofort losschreiben'], richtig: 0 }
    ]
  }
].forEach(m => ZR.methode(m));
