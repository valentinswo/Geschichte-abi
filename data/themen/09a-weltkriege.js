ZR.thema({
  id: 'weltkriege',
  titel: 'Die Weltkriege',
  kurz: 'Weltkriege',
  untertitel: 'Ursachen, Charakter und Folgen des Ersten und Zweiten Weltkriegs',
  stufe: 'Grundkurs 11/12',
  lehrplan: 'Gk 11/12, LB 4',
  farbe: '#6d4c41',
  einleitung: [
    'Zweimal innerhalb von 25 Jahren stürzte Europa – und mit ihm die Welt – in einen Krieg, wie es ihn vorher nicht gegeben hatte. Der **Erste Weltkrieg (1914–1918)** gilt als „Urkatastrophe des 20. Jahrhunderts": der erste industrialisierte Massenkrieg mit rund 17 Millionen Toten. Er zerstörte die alten Monarchien, brachte in Deutschland die erste Demokratie hervor – und hinterließ mit dem Versailler Vertrag eine schwere Hypothek.',
    'Der **Zweite Weltkrieg (1939–1945)** war von Anfang an ein von Deutschland geplanter Eroberungs- und im Osten ein ideologischer **Vernichtungskrieg**. Mit 60 bis 65 Millionen Toten, dem Holocaust und den Atombomben übertraf er den Ersten Weltkrieg in jeder Hinsicht.',
    'Für das Abitur (LB 4) musst du **Ursachen** und **Charakter** beider Kriege kennen und vergleichen können. Die Friedensregelungen danach – Versailles, Potsdam, Zwei-plus-Vier – findest du im Reiter „Frieden".'
  ],
  // Teile: Das Thema wird in der App in zwei eigene Reiter getrennt.
  // Kapitel, Schemata und Begriffe mit "teil" erscheinen nur dort; ohne "teil" in beiden.
  // Die Zeitleiste wird über die Jahre (von/bis) aufgeteilt.
  teile: [
    { id: 'erster', titel: 'Erster Weltkrieg', jahre: '1914–1918', von: 1870, bis: 1929,
      einleitung: ['Der **Erste Weltkrieg (1914–1918)** gilt als „Urkatastrophe des 20. Jahrhunderts": der erste industrialisierte Massenkrieg mit rund 17 Millionen Toten. Er zerstörte die alten Monarchien, brachte in Deutschland die erste Demokratie hervor – und hinterließ mit dem Versailler Vertrag eine schwere Hypothek.', 'Für das Abitur musst du die **langfristigen Ursachen**, den Ablauf der **Julikrise**, die Debatte um die **Kriegsschuld** und den **Charakter** des Krieges kennen.'] },
    { id: 'zweiter', titel: 'Zweiter Weltkrieg', jahre: '1939–1945', von: 1930, bis: 1950,
      einleitung: ['Der **Zweite Weltkrieg (1939–1945)** war von Anfang an ein von Deutschland geplanter Eroberungs- und im Osten ein ideologischer **Vernichtungskrieg**. Mit 60 bis 65 Millionen Toten, dem Holocaust und den Atombomben übertraf er den Ersten Weltkrieg in jeder Hinsicht.', 'Für das Abitur musst du die **Ursachen**, den **Verlauf im Überblick** und den **Charakter** dieses Krieges kennen – und ihn mit dem Ersten Weltkrieg vergleichen können. Die Friedensregelungen danach findest du im Thema „Frieden".'] }
  ],
  kapitel: [
    {
      titel: 'Ursachen des Ersten Weltkriegs', teil: 'erster',
      hefter: true,
      punkte: [
        '**Imperialismus:** Besetzung, Kontrolle und Ausbeutung schwächerer Gebiete; in Europa imperiale Rivalität zwischen den Großmächten, Machtkampf um Territorien (D–GB, D–F, Österreich-Ungarn–Russland).',
        '**Militarismus:** militärisches Denken in Politik, Wirtschaft und Gesellschaft; **Wettrüsten** (deutscher Schlachtschiffbau, Heeresverstärkung; Frankreich: dreijährige Dienstpflicht 1913) sorgt für Verunsicherung und Vernachlässigung der Diplomatie.',
        '**Nationalismus:** Identifizierung aller Bürger mit „ihrer" Nation; Verbreitung von Stolz, Überlegenheitsdenken und Rühmen der eigenen Kultur und Sprache; aggressive Nationalbewegungen.',
        '**Psychologische Kriegsbereitschaft:** Bewunderung der Soldaten, Glorifizierung des Krieges, Unterschätzung seines Ausmaßes, Propaganda.',
        '**Bündnispolitik:** Wilhelm II. vernachlässigt die Bündnisse, v. a. mit Russland → zwei feindliche **Bündnisblöcke** (Dreibund ↔ Triple Entente); Gefühl der „Einkreisung", drohender Zweifrontenkrieg.',
        '**„Pulverfass Balkan":** Unabhängigkeitskriege, viele kleine Staaten; Österreich-Ungarn und Russland mit Interesse an Einfluss und strategischen Positionen; **Nationalitätenprobleme in Österreich-Ungarn** (Autonomiebestrebungen von Tschechen und Südslawen, „Großserbien").'
      ]
    },
    {
      titel: 'Die Julikrise 1914', teil: 'erster',
      hefter: true,
      punkte: [
        '**28. Juni 1914:** Ermordung des österreichischen Thronfolgerpaares Franz Ferdinand und Sophie in **Sarajevo** durch serbische Nationalisten (Geheimorganisation „Schwarze Hand").',
        '**5./6. Juli:** Deutscher **„Blankoscheck"**: bedingungslose Unterstützung Österreich-Ungarns – über den Zweibund hinaus wird aus einem Defensiv- ein Offensivbündnis.',
        '**23. Juli:** scharf formuliertes **Ultimatum** Österreich-Ungarns an Serbien; **28. Juli** Kriegserklärung an Serbien.',
        '**Russland** als Schutzmacht Serbiens macht mobil, gedeckt durch die Bündnistreue Frankreichs.',
        '**1. August** deutsche Kriegserklärung an Russland, **3. August** an Frankreich; **4. August** Kriegseintritt Großbritanniens wegen des deutschen Einmarsches in das neutrale **Belgien**.',
        '**Schlieffenplan:** rasche Niederwerfung Frankreichs durch einen Vormarsch über Belgien, dann Wendung gegen Russland – die Logik der offensiven Operationspläne beschleunigte die Eskalation.',
        '**Verhängnisvolle Automatik:** Bündnisverpflichtungen → Politik der Ultimaten und Mobilmachungen → Kriegserklärungen.'
      ]
    },
    {
      titel: 'Die Kriegsschuldfrage', teil: 'erster',
      hefter: true,
      text: ['Welche Ziele verfolgte die deutsche Führung im Juli 1914? Die Forschung diskutiert bis heute zwei Deutungen.'],
      punkte: [
        '**These 1 (Fritz Fischer, 1961 „Griff nach der Weltmacht"):** Deutschland wollte seine Machtbasis in Mitteleuropa mit einem siegreichen Krieg erweitern und die Führungsposition der alten Eliten (Monarchie, Militär, Adel, Großunternehmer) stabilisieren – Beleg: das **„Septemberprogramm"** 1914 mit weitreichenden Kriegszielen.',
        '**These 2:** Deutschland wollte mit einem begrenzten, lokalen Krieg auf dem Balkan Russland ausmanövrieren, die Stellung Österreich-Ungarns festigen und evtl. die Entente sprengen – ein **kalkuliertes Risiko**, das außer Kontrolle geriet.',
        '**Christopher Clark („Die Schlafwandler", 2012):** Alle Großmächte trugen Verantwortung; sie „schlafwandelten" in den Krieg.',
        '**Versailles 1919, Art. 231:** Deutschland und seine Verbündeten als alleinige Urheber – politisch gesetzt, wissenschaftlich so nicht haltbar.'
      ]
    },
    {
      titel: 'Charakter des Ersten Weltkriegs', teil: 'erster',
      hefter: true,
      punkte: [
        '**Totaler Krieg:** Krieg wird zentrales Thema in Politik, Gesellschaft und Wirtschaft; Propaganda; Mobilisierung aller Ressourcen (Kriegswirtschaft, Frauenarbeit) → Massensterben und Leid.',
        '**Abnutzungskrieg:** monatelange Kämpfe, tagelanger Artilleriebeschuss, **Materialschlachten** (Verdun und Somme 1916).',
        '**Stellungskrieg:** Schützengräben im Westen, kaum Raumgewinn; Ratten, Schlamm und hygienische Mängel.',
        '**Industrieller Krieg:** maximierte Waffenproduktion, Quantität entscheidet.',
        '**Moderner Krieg:** Giftgas (ab 1915), Artillerie, Panzer (ab 1916), Maschinengewehre; Krieg zu Land, in der Luft und auf/unter See (uneingeschränkter U-Boot-Krieg 1917 → Kriegseintritt der USA).',
        '**Rücksichtslos und menschenverachtend:** Offensiven ohne Rücksicht auf Verluste, Soldaten als Objekt, Gegner „ausbluten" lassen (Verdun), Hunger in der Heimat (Steckrübenwinter 1916/17).'
      ]
    },
    {
      titel: 'Kriegsende und Folgen des Ersten Weltkriegs', teil: 'erster',
      hefter: true,
      punkte: [
        '**Kriegsende:** Nach dem Scheitern der Frühjahrsoffensive 1918 fordert die OHL im September Waffenstillstandsverhandlungen; **11. November 1918** Waffenstillstand von Compiègne. (Zur Novemberrevolution siehe Reiter „Weimar".)',
        '**Politische Folgen:** Ende der Monarchien in Deutschland, Österreich-Ungarn und Russland; **Versailler Vertrag (28.6.1919)** – Entmilitarisierung, Reparationen, Gebietsabtretungen, „Alleinschuld" (Art. 231); Entstehung der **Weimarer Republik**, der ersten Demokratie in Deutschland; neue Staaten in Ostmitteleuropa; Völkerbund.',
        '**Wirtschaftliche Folgen:** schwierige Umstellung auf Friedenswirtschaft, Belastung durch Reparationen, Inflation bis zum Zusammenbruch 1923; 1924 Währungsreform und Dawes-Plan.',
        '**Gesellschaftliche Folgen:** rund 17 Millionen Tote (davon etwa 2 Millionen deutsche Soldaten), rund 20 Millionen Verwundete und Traumatisierte; Armut, Obdachlosigkeit, Hunger, Arbeitslosigkeit, psychische Folgeschäden („Kriegszitterer"); **Dolchstoßlegende** → Kritik an den Demokraten, Zuspruch für das rechte Lager; Brutalisierung der politischen Kultur.'
      ]
    },
    {
      titel: 'Ursachen des Zweiten Weltkriegs', teil: 'zweiter',
      hefter: true,
      punkte: [
        '**Versailler Vertrag und Folgen des Ersten Weltkriegs:** Verletzung des Nationalstolzes, Schuldzuweisung, Unzufriedenheit → **revanchistischer Geist** (Wunsch nach Rückgewinnung und Rache).',
        '**Aufstieg der NSDAP:** Ideologie von „Lebensraum im Osten" und Rassismus als Rechtfertigung; aggressive **Expansionspolitik**, territoriales Wachstum, Streben nach regionaler Dominanz; militärische Aufrüstung.',
        '**Appeasement-Politik:** Zugeständnisse der Westmächte, kein Eingreifen gegen deutsche Vertragsbrüche, Hoffnung auf Frieden durch Zugeständnisse („Naivität"), Vermeidung von Konfrontation.',
        '**Fehlen effektiver internationaler Institutionen:** Der Völkerbund (ohne USA, ab 1933 ohne Deutschland und Japan) konnte Konflikte nicht lösen.',
        '**Hitler-Stalin-Pakt (23. August 1939):** Nichtangriffspakt mit geheimem Zusatzprotokoll zur Aufteilung Ostmitteleuropas – ermöglichte den Überfall auf Polen ohne Zweifrontenkrieg.',
        'Der Weg in den Krieg im Einzelnen: siehe Reiter „NS-Diktatur" → Fließschemata → „Der Weg in den Zweiten Weltkrieg".'
      ]
    },
    {
      titel: 'Verlauf des Zweiten Weltkriegs im Überblick', teil: 'zweiter',
      punkte: [
        '**1939–1941 „Blitzkriege":** Polen (Sept. 1939), Dänemark/Norwegen, Benelux und Frankreich (Mai/Juni 1940); Luftschlacht um England scheitert.',
        '**22. Juni 1941: Überfall auf die Sowjetunion** („Unternehmen Barbarossa") – Beginn des Vernichtungskrieges; Dezember 1941: Angriff Japans auf Pearl Harbor, Kriegseintritt der USA – der Krieg wird zum Weltkrieg.',
        '**Wende 1942/43:** Stalingrad (Kapitulation Februar 1943), El Alamein, Midway; Goebbels ruft den „totalen Krieg" aus (Februar 1943).',
        '**1944/45:** Landung der Alliierten in der Normandie (6. Juni 1944), sowjetische Offensiven, Bombenkrieg gegen deutsche Städte (Dresden 13./14. Februar 1945).',
        '**Kriegsende:** bedingungslose Kapitulation Deutschlands am **8. Mai 1945**; nach den Atombomben auf Hiroshima und Nagasaki (6./9. August) Kapitulation Japans am 2. September 1945.'
      ]
    },
    {
      titel: 'Charakter des Zweiten Weltkriegs', teil: 'zweiter',
      hefter: true,
      punkte: [
        '**Totaler Krieg:** zentrales Thema in Gesellschaft, Wirtschaft und Politik; **ideologischer Konflikt**; Propaganda.',
        '**Große Allianzen:** Alliierte (Großbritannien, Frankreich, USA, Sowjetunion u. a.) gegen die „Achsenmächte" Deutschland, Italien, Japan; viele Fronten auf der ganzen Welt.',
        '**Vernichtungskrieg und Verbrechen gegen die Menschlichkeit:** Holocaust – Deportation, Vergasung, Massenerschießungen, Massaker an Jüdinnen und Juden; Hungerpolitik und Massenmord an sowjetischen Kriegsgefangenen; Zwangsarbeit.',
        '**Technologischer Fortschritt:** Einsatz von Panzern, U-Booten, Flugzeugen, Raketen (V2); Massenproduktion; zuletzt Atombomben.',
        '**Luftkrieg und Bombardierungen:** Städte massiv bombardiert (Warschau, Rotterdam, Coventry, Hamburg, Dresden) → Ruinen und Trümmerlandschaften; Angriffe auf Industrieanlagen und Zivilbevölkerung.',
        '**Zerstörung und Verluste:** 60–65 Millionen Tote (mehr Zivilisten als Soldaten), zerstörte Städte, Millionen Obdachlose, Flucht und Vertreibung.'
      ]
    }
  ],
  schemata: [
    {
      typ: 'ursache', teil: 'erster', titel: 'Der Ausbruch des Ersten Weltkriegs', hefter: true,
      ursachen: ['a) Machtpolitische Gegensätze und imperialistische Interessen (D–GB, D–F, Ö-U–R)', 'b) Rüstungswettlauf der Großmächte', 'c) Feindliche Bündnissysteme, allgemeine Kriegsbereitschaft, aggressive Nationalbewegungen', 'd) Nationalitätenprobleme in Österreich-Ungarn'],
      ereignis: 'Julikrise und Kriegserklärungen Anfang August 1914',
      folgen: ['Automatik der Bündnisverpflichtungen', 'Politik der Ultimaten und Mobilmachungen', 'Schlieffenplan: Angriff über das neutrale Belgien', 'Kriegseintritt Großbritanniens (4.8.)', 'Vierjähriger Weltkrieg']
    },
    {
      typ: 'kette', teil: 'erster', titel: 'Die Julikrise Tag für Tag', hefter: true,
      schritte: [
        { t: '28. Juni', d: 'Attentat von Sarajevo' },
        { t: '5./6. Juli', d: 'Deutscher „Blankoscheck" für Österreich-Ungarn', hl: true },
        { t: '23. Juli', d: 'Ultimatum an Serbien' },
        { t: '28. Juli', d: 'Kriegserklärung Österreich-Ungarns an Serbien' },
        { t: '30./31. Juli', d: 'Russische Generalmobilmachung' },
        { t: '1. und 3. August', d: 'Deutsche Kriegserklärungen an Russland und Frankreich' },
        { t: '4. August', d: 'Einmarsch in Belgien → Kriegseintritt Großbritanniens', hl: true }
      ]
    },
    {
      typ: 'vergleich', titel: 'Die beiden Weltkriege im Vergleich', hefter: true,
      spalten: ['Kriterium', 'Erster Weltkrieg', 'Zweiter Weltkrieg'],
      zeilen: [
        ['Ursachen', 'Imperialismus, Nationalismus, Militarismus, Bündnissysteme, Julikrise', 'NS-Ideologie (Lebensraum, Rassismus), Expansion, Revanchismus nach Versailles, Appeasement, schwacher Völkerbund'],
        ['Kriegsbeginn', 'Eskalation einer Krise – Verantwortung mehrerer Mächte', 'Gezielt geplanter Angriffskrieg Deutschlands'],
        ['Kriegsführung', 'Stellungs- und Abnutzungskrieg, Materialschlachten, Giftgas', '„Blitzkriege", Luftkrieg, im Osten Vernichtungskrieg'],
        ['Zivilbevölkerung', 'Hunger und Kriegswirtschaft in der Heimat', 'Bombenkrieg, Besatzungsterror, Holocaust, Vertreibung – mehr zivile als militärische Opfer'],
        ['Tote', 'ca. 17 Millionen', 'ca. 60–65 Millionen'],
        ['Kriegsende', 'Waffenstillstand 11.11.1918, Revolution', 'Bedingungslose Kapitulation 8.5.1945, Besetzung'],
        ['Friedensregelung', 'Versailler Vertrag – Machtfrieden', 'Kein Friedensvertrag; Potsdamer Abkommen, Teilung, erst 1990 Zwei-plus-Vier']
      ]
    }
  ],
  zeitleiste: [
    { jahr: '28.6.1914', text: 'Attentat von **Sarajevo**' },
    { jahr: '5.7.1914', text: 'Deutscher „Blankoscheck"' },
    { jahr: '28.7.1914', text: 'Kriegserklärung Österreich-Ungarns an Serbien' },
    { jahr: '1.8.1914', text: 'Deutsche Kriegserklärung an Russland – **Beginn des Ersten Weltkriegs**' },
    { jahr: '4.8.1914', text: 'Kriegseintritt Großbritanniens' },
    { jahr: '1915', text: 'Erster großer Giftgaseinsatz bei Ypern' },
    { jahr: '1916', text: 'Materialschlachten bei **Verdun** und an der Somme' },
    { jahr: '1917', text: 'Uneingeschränkter U-Boot-Krieg, Kriegseintritt der USA; Oktoberrevolution in Russland' },
    { jahr: '1918', text: 'Frieden von Brest-Litowsk (März); **11. November Waffenstillstand**' },
    { jahr: '28.6.1919', text: '**Versailler Vertrag**' },
    { jahr: '23.8.1939', text: '**Hitler-Stalin-Pakt**' },
    { jahr: '1.9.1939', text: 'Überfall auf Polen – **Beginn des Zweiten Weltkriegs**' },
    { jahr: '1940', text: 'Westfeldzug, Niederlage Frankreichs' },
    { jahr: '22.6.1941', text: 'Überfall auf die Sowjetunion – Vernichtungskrieg' },
    { jahr: 'Dez. 1941', text: 'Pearl Harbor, Kriegseintritt der USA' },
    { jahr: 'Feb. 1943', text: 'Kapitulation in **Stalingrad**; Goebbels’ Sportpalastrede („totaler Krieg")' },
    { jahr: '6.6.1944', text: 'Landung der Alliierten in der Normandie' },
    { jahr: '13.2.1945', text: 'Luftangriffe auf **Dresden**' },
    { jahr: '8.5.1945', text: '**Bedingungslose Kapitulation** Deutschlands' },
    { jahr: 'Aug. 1945', text: 'Atombomben auf Hiroshima und Nagasaki; Kapitulation Japans am 2. September' }
  ],
  begriffe: [
    { teil: 'erster', begriff: 'Imperialismus', erklaerung: 'Streben eines Staates nach Herrschaft über andere Gebiete und Völker (Besetzung, Kontrolle, Ausbeutung), v. a. durch Kolonien (Hochphase 1880–1914).' },
    { teil: 'erster', begriff: 'Militarismus', erklaerung: 'Vorherrschaft militärischen Denkens in Politik, Wirtschaft und Gesellschaft.' },
    { teil: 'erster', begriff: 'Blankoscheck', erklaerung: 'Bedingungslose Unterstützungszusage Deutschlands an Österreich-Ungarn im Juli 1914.' },
    { teil: 'erster', begriff: 'Julikrise', erklaerung: 'Diplomatische Krise nach dem Attentat von Sarajevo, die durch Ultimaten, Bündnisverpflichtungen und Mobilmachungen in den Ersten Weltkrieg führte.' },
    { teil: 'erster', begriff: 'Schlieffenplan', erklaerung: 'Deutscher Aufmarschplan: schnelle Niederwerfung Frankreichs über das neutrale Belgien, danach Krieg gegen Russland.' },
    { teil: 'erster', begriff: 'Septemberprogramm', erklaerung: 'Denkschrift von Reichskanzler Bethmann Hollweg (September 1914) mit weitreichenden deutschen Kriegszielen – zentraler Beleg der Fischer-These.' },
    { teil: 'erster', begriff: 'Stellungskrieg', erklaerung: 'Kriegsführung aus festen Gräben heraus, bei der sich die Front kaum bewegt.' },
    { teil: 'erster', begriff: 'Materialschlacht', erklaerung: 'Schlacht, in der die Masse an Munition und Waffen entscheiden soll (Verdun, Somme).' },
    { begriff: 'Totaler Krieg', erklaerung: 'Krieg, in dem alle gesellschaftlichen und wirtschaftlichen Ressourcen mobilisiert werden und die Grenze zwischen Front und Heimat verschwindet.' },
    { teil: 'erster', begriff: 'Revanchismus', erklaerung: 'Politik, die verlorene Gebiete zurückgewinnen bzw. eine Niederlage „rächen" will.' },
    { teil: 'zweiter', begriff: 'Blitzkrieg', erklaerung: 'Propagandabegriff für schnelle Feldzüge mit Panzern und Luftwaffe (1939–1941).' },
    { teil: 'zweiter', begriff: 'Vernichtungskrieg', erklaerung: 'Ideologisch begründete Kriegsführung im Osten ab 1941 mit dem Ziel, Juden, Eliten und Teile der Zivilbevölkerung zu vernichten und das Land auszubeuten.' }
  ],
  personen: ['wilhelm2', 'ludendorff', 'hindenburg', 'wilson', 'hitler', 'stalin', 'chamberlain'],
  abi: [
    'Unterscheide **Ursachen** (langfristig) und **Anlass/Auslöser** (Sarajevo) – ein Klassiker in jeder Prüfung.',
    'Zur Kriegsschuldfrage brauchst du mindestens zwei Forschungspositionen (Fischer ↔ Clark) und ein eigenes begründetes Urteil.',
    'Der Vergleich der beiden Weltkriege nach Kriterien (Ursachen, Kriegsführung, Zivilbevölkerung, Folgen) ist eine typische AFB-III-Aufgabe.',
    'Für den Charakter des Krieges gilt: Begriff nennen → erklären → konkretes Beispiel (z. B. Materialschlacht → Verdun 1916).'
  ],
  quiz: [
    { typ: 'reihenfolge', frage: 'Bringe die Julikrise in die richtige Reihenfolge.', schritte: ['Attentat von Sarajevo', 'Deutscher „Blankoscheck"', 'Ultimatum an Serbien', 'Kriegserklärung Österreich-Ungarns an Serbien', 'Deutsche Kriegserklärung an Russland', 'Kriegseintritt Großbritanniens'] },
    { typ: 'kategorien', frage: 'Langfristige Ursache oder Anlass des Ersten Weltkriegs?', kategorien: { 'Langfristige Ursache': ['Imperialismus', 'Flottenwettrüsten', 'Bündnisblöcke', 'Nationalismus'], 'Anlass / Auslöser': ['Attentat von Sarajevo'] } },
    { typ: 'zuordnen', frage: 'Ordne die Merkmale des Ersten Weltkriegs zu.', paare: [['Stellungskrieg', 'Schützengräben, kaum Raumgewinn'], ['Materialschlacht', 'Verdun 1916'], ['Moderner Krieg', 'Giftgas, Panzer, Maschinengewehr'], ['Totaler Krieg', 'Mobilisierung aller Ressourcen, Propaganda']] },
    { typ: 'kategorien', frage: 'Erster oder Zweiter Weltkrieg?', kategorien: { 'Erster Weltkrieg': ['Schlieffenplan', 'Verdun', 'Steckrübenwinter', 'Blankoscheck'], 'Zweiter Weltkrieg': ['Hitler-Stalin-Pakt', 'Stalingrad', 'Vernichtungskrieg', 'Atombomben'] } },
    { typ: 'zeitstrahl', frage: 'Ordne die Ereignisse beider Weltkriege.', items: [{ text: 'Attentat von Sarajevo', jahr: 1914 }, { text: 'Kriegseintritt der USA (1. WK)', jahr: 1917 }, { text: 'Versailler Vertrag', jahr: 1919 }, { text: 'Überfall auf Polen', jahr: 1939 }, { text: 'Überfall auf die Sowjetunion', jahr: 1941 }, { text: 'Kapitulation in Stalingrad', jahr: 1943 }] },
    { typ: 'mc', frage: 'Was besagt die Fischer-These?', optionen: ['Deutschland strebte 1914 gezielt nach Erweiterung seiner Machtbasis und trägt die Hauptverantwortung', 'Alle Mächte schlitterten ohne Absicht in den Krieg', 'Russland allein war verantwortlich', 'Der Krieg brach wegen der Weltwirtschaftskrise aus'], richtig: 0, erklaerung: 'Fritz Fischer stützte sich v. a. auf das Septemberprogramm. Christopher Clark betont dagegen die gemeinsame Verantwortung („Schlafwandler").' },
    { typ: 'wf', aussage: 'Im Zweiten Weltkrieg starben mehr Zivilisten als Soldaten.', richtig: true, erklaerung: 'Durch Vernichtungskrieg, Holocaust, Bombenkrieg, Hunger und Vertreibung waren zivile Opfer in der Mehrheit.' },
    { typ: 'freitext', frage: 'Vergleiche den Charakter des Ersten und des Zweiten Weltkriegs.', operator: 'vergleichen', afb: 'II', punkte: 6,
      erwartung: [
        { punkt: 'Kriterienorientiertes Vorgehen', schluessel: ['kriteri', 'hinsichtlich', 'im hinblick', 'bezüglich', 'im vergleich'] },
        { punkt: 'Gemeinsamkeit: totaler, industrialisierter Krieg mit moderner Technik und Propaganda', schluessel: ['total', 'industri', 'propaganda', 'technik', 'modern'] },
        { punkt: 'Unterschied Kriegsführung: Stellungs-/Abnutzungskrieg vs. Blitzkrieg/Luftkrieg', schluessel: ['stellungskrieg', 'abnutzung', 'blitzkrieg', 'luftkrieg', 'bombard'] },
        { punkt: 'Unterschied: ideologischer Vernichtungskrieg, Holocaust im Zweiten Weltkrieg', schluessel: ['vernichtung', 'holocaust', 'ideolog', 'rasse'] },
        { punkt: 'Unterschied Opferzahlen und Betroffenheit der Zivilbevölkerung', schluessel: ['zivil', '17', '60', 'millionen', 'opfer'] },
        { punkt: 'Fazit / Gewichtung', schluessel: ['insgesamt', 'fazit', 'zusammenfassend', 'deutlich', 'neue dimension'] }
      ],
      musterloesung: 'Beide Weltkriege waren totale, industrialisierte Kriege: Die gesamte Wirtschaft wurde auf den Krieg ausgerichtet, Propaganda mobilisierte die Bevölkerung, und moderne Technik bestimmte die Kriegsführung. Hinsichtlich der Kriegsführung unterscheiden sie sich jedoch deutlich: Der Erste Weltkrieg war im Westen ein Stellungs- und Abnutzungskrieg mit Materialschlachten wie Verdun, der Zweite begann mit schnellen Feldzügen („Blitzkriegen") und war stark vom Luftkrieg geprägt. Der wichtigste Unterschied liegt im ideologischen Charakter: Im Osten führte Deutschland ab 1941 einen rassistischen Vernichtungskrieg, verbunden mit dem Holocaust. Entsprechend waren die Opferzahlen mit 60 bis 65 Millionen gegenüber etwa 17 Millionen weit höher, und erstmals starben mehr Zivilisten als Soldaten. Insgesamt war der Zweite Weltkrieg nicht nur größer, sondern erreichte durch Ideologie und Völkermord eine neue Dimension.' }
  ]
});
