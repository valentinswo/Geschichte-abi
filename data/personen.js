/*
 * Persönlichkeiten mit Steckbrief.
 * Pflichtfelder: id, name, lebensdaten, geboren (JJJJ-MM-TT, zum Sortieren), rolle, ideologie, ziele, stationen, bedeutung, themen
 */
[
  {
    id: 'bismarck', name: 'Otto von Bismarck', lebensdaten: '1815–1898', geboren: '1815-04-01',
    geboren_text: '1. April 1815', geburtsort: 'Schönhausen (Altmark)', gestorben_text: '30. Juli 1898', sterbeort: 'Friedrichsruh',
    rolle: 'Preußischer Ministerpräsident (1862–1890), erster Reichskanzler (1871–1890)',
    ideologie: 'Konservativ, monarchistisch, preußischer Junker; pragmatische **Realpolitik** statt Prinzipientreue.',
    ziele: 'Stärkung der preußischen Monarchie, kleindeutsche Einigung unter Preußens Führung, Absicherung des Reiches durch ein Bündnissystem, Bekämpfung der „Reichsfeinde".',
    stationen: ['1862 Ministerpräsident im Verfassungskonflikt („Eisen und Blut")', 'Einigungskriege 1864, 1866, 1870/71', '1871 Reichsgründung', 'Kulturkampf und Sozialistengesetz (1878)', 'Sozialversicherung 1883–1889', '1890 Entlassung durch Wilhelm II.'],
    bedeutung: 'Schöpfer des deutschen Nationalstaats „von oben"; prägte den obrigkeitsstaatlichen Charakter des Kaiserreichs, legte aber auch den Grundstein des Sozialstaats.',
    zitat: '… nicht durch Reden und Majoritätsbeschlüsse werden die großen Fragen der Zeit entschieden …, sondern durch Eisen und Blut. (1862)',
    urteil: 'Klassische Urteilsfrage: Genialer Staatsmann des Friedens nach 1871 oder Totengräber liberaler Entwicklung in Deutschland?',
    themen: ['nation-kaiserreich', 'industrialisierung', 'geschichtskultur']
  },
  {
    id: 'marx', name: 'Karl Marx', lebensdaten: '1818–1883', geboren: '1818-05-05',
    geboren_text: '5. Mai 1818', geburtsort: 'Trier', gestorben_text: '14. März 1883', sterbeort: 'London',
    rolle: 'Philosoph, Ökonom, Begründer des wissenschaftlichen Sozialismus',
    ideologie: '**Historischer Materialismus:** Die Geschichte ist eine Geschichte von Klassenkämpfen; die wirtschaftlichen Verhältnisse bestimmen Politik und Bewusstsein.',
    ziele: 'Revolution des Proletariats, Abschaffung des Privateigentums an Produktionsmitteln, klassenlose kommunistische Gesellschaft.',
    stationen: ['Studium in Bonn und Berlin', '1848 *Kommunistisches Manifest* mit Friedrich Engels', 'Ab 1849 Exil in London', '1867 *Das Kapital*, Band 1', 'Mitbegründer der Internationalen Arbeiterassoziation (1864)'],
    bedeutung: 'Seine Theorie prägte die Arbeiterbewegung und wurde (in der Auslegung Lenins) Staatsideologie der Sowjetunion und der DDR.',
    urteil: 'Trenne Marx’ Analyse der Industriegesellschaft von der späteren Umsetzung in kommunistischen Diktaturen.',
    themen: ['industrialisierung']
  },
  {
    id: 'bebel', name: 'August Bebel', lebensdaten: '1840–1913', geboren: '1840-02-22',
    geboren_text: '22. Februar 1840', geburtsort: 'Deutz (heute Köln)', gestorben_text: '13. August 1913', sterbeort: 'Passugg (Schweiz)',
    rolle: 'Drechslermeister in Leipzig, Mitbegründer und langjähriger Vorsitzender der SPD',
    ideologie: 'Sozialist, Marxist; setzte sich auch für die Gleichberechtigung der Frau ein (*Die Frau und der Sozialismus*, 1879).',
    ziele: 'Politische und soziale Emanzipation der Arbeiter, Demokratisierung des Kaiserreichs.',
    stationen: ['1869 Mitgründer der SDAP in Eisenach (mit Wilhelm Liebknecht)', '1872 Leipziger Hochverratsprozess, Haft', 'Reichstagsabgeordneter, auch für sächsische Wahlkreise', 'Ab 1892 Parteivorsitzender der SPD'],
    bedeutung: 'Machte die SPD zur größten Partei im Reichstag (1912); verkörpert die starke Arbeiterbewegung in Sachsen.',
    themen: ['industrialisierung', 'nation-kaiserreich']
  },
  {
    id: 'wilhelm2', name: 'Wilhelm II.', lebensdaten: '1859–1941', geboren: '1859-01-27',
    geboren_text: '27. Januar 1859', geburtsort: 'Berlin', gestorben_text: '4. Juni 1941', sterbeort: 'Doorn (Niederlande)',
    rolle: 'Deutscher Kaiser und König von Preußen (1888–1918)',
    ideologie: 'Gottesgnadentum, Militarismus, Nationalismus; Begeisterung für Flotte und „Weltpolitik".',
    ziele: '„Persönliches Regiment", Weltmachtstellung Deutschlands („Platz an der Sonne"), Flottenbau.',
    stationen: ['1888 Thronbesteigung („Dreikaiserjahr")', '1890 Entlassung Bismarcks, Neuer Kurs', 'Flottenbau ab 1898', '1914 Kriegseintritt', '9. November 1918 Abdankung verkündet, Exil in den Niederlanden'],
    bedeutung: 'Symbolfigur des Wilhelminismus; seine Außenpolitik trug zur Isolation Deutschlands vor 1914 bei.',
    themen: ['erster-weltkrieg', 'nation-kaiserreich']
  },
  {
    id: 'wilson', name: 'Woodrow Wilson', lebensdaten: '1856–1924', geboren: '1856-12-28',
    geboren_text: '28. Dezember 1856', geburtsort: 'Staunton (Virginia, USA)', gestorben_text: '3. Februar 1924', sterbeort: 'Washington, D.C.',
    rolle: '28. Präsident der USA (1913–1921)',
    ideologie: 'Liberaler Internationalismus; Demokratie, Selbstbestimmungsrecht der Völker, kollektive Sicherheit.',
    ziele: 'Gerechter Frieden nach dem Ersten Weltkrieg (14 Punkte, Januar 1918), Gründung eines Völkerbunds.',
    stationen: ['1917 Kriegseintritt der USA', '1918 14-Punkte-Programm', '1919 Pariser Friedenskonferenz', 'US-Senat lehnt Versailler Vertrag und Völkerbund-Beitritt ab', '1919 Friedensnobelpreis'],
    bedeutung: 'Ideengeber einer neuen Weltordnung, scheiterte aber an Siegerinteressen und am eigenen Parlament.',
    themen: ['erster-weltkrieg', 'frieden']
  },
  {
    id: 'ebert', name: 'Friedrich Ebert', lebensdaten: '1871–1925', geboren: '1871-02-04',
    geboren_text: '4. Februar 1871', geburtsort: 'Heidelberg', gestorben_text: '28. Februar 1925', sterbeort: 'Berlin',
    rolle: 'SPD-Vorsitzender, Vorsitzender des Rats der Volksbeauftragten, erster Reichspräsident (1919–1925)',
    ideologie: 'Gemäßigter Sozialdemokrat, Reformer; parlamentarische Demokratie statt Rätesystem.',
    ziele: 'Ordnung und Stabilität nach Kriegsende, rasche Wahl einer Nationalversammlung, Verhinderung eines Bürgerkriegs.',
    stationen: ['9. November 1918 Reichskanzler (von Prinz Max übergeben)', 'Ebert-Groener-Pakt', 'Einsatz von Militär und Freikorps gegen Aufstände 1919', '1919 Wahl zum Reichspräsidenten', 'Angriffe und Verleumdungsprozesse von rechts'],
    bedeutung: 'Gründungsvater der ersten deutschen Demokratie; umstritten ist sein Bündnis mit den alten Eliten.',
    urteil: 'Urteilsfrage: Hat Ebert die Republik gerettet oder durch die Zusammenarbeit mit Militär und Freikorps von Beginn an geschwächt?',
    themen: ['weimar']
  },
  {
    id: 'luxemburg', name: 'Rosa Luxemburg', lebensdaten: '1871–1919', geboren: '1871-03-05',
    geboren_text: '5. März 1871', geburtsort: 'Zamość (damals Russisches Reich, heute Polen)', gestorben_text: '15. Januar 1919', sterbeort: 'Berlin (ermordet)',
    rolle: 'Sozialistische Theoretikerin, Mitbegründerin von Spartakusbund und KPD',
    ideologie: 'Revolutionäre Marxistin, Kriegsgegnerin; kritisierte aber auch die Diktatur der Bolschewiki („Freiheit ist immer Freiheit der Andersdenkenden").',
    ziele: 'Sozialistische Revolution durch die Masse der Arbeiter, Räterepublik.',
    stationen: ['Ablehnung der Kriegskredite 1914, Haft während des Krieges', '1918 Gründung der KPD', 'Januar 1919 Spartakusaufstand', '15. Januar 1919 Ermordung durch Freikorps-Offiziere'],
    bedeutung: 'Symbol der radikalen Linken; ihre Ermordung vertiefte die Spaltung der Arbeiterbewegung.',
    themen: ['weimar']
  },
  {
    id: 'stresemann', name: 'Gustav Stresemann', lebensdaten: '1878–1929', geboren: '1878-05-10',
    geboren_text: '10. Mai 1878', geburtsort: 'Berlin', gestorben_text: '3. Oktober 1929', sterbeort: 'Berlin',
    rolle: 'Reichskanzler (1923), Außenminister (1923–1929), DVP',
    ideologie: 'Nationalliberal; vom Monarchisten zum „Vernunftrepublikaner".',
    ziele: 'Revision von Versailles mit friedlichen Mitteln, Verständigung mit Frankreich, Rückkehr Deutschlands in die internationale Politik.',
    stationen: ['1923 Abbruch des passiven Widerstands, Währungsreform', '1924 Dawes-Plan', '1925 Locarno-Verträge', '1926 Völkerbund-Beitritt, Friedensnobelpreis (mit Briand)', '1929 Young-Plan'],
    bedeutung: 'Prägendes Gesicht der Stabilisierungsphase; sein früher Tod 1929 fiel mit dem Beginn der Krise zusammen.',
    themen: ['weimar']
  },
  {
    id: 'hindenburg', name: 'Paul von Hindenburg', lebensdaten: '1847–1934', geboren: '1847-10-02',
    geboren_text: '2. Oktober 1847', geburtsort: 'Posen', gestorben_text: '2. August 1934', sterbeort: 'Neudeck (Ostpreußen)',
    rolle: 'Generalfeldmarschall, Chef der Obersten Heeresleitung (1916–1919), Reichspräsident (1925–1934)',
    ideologie: 'Monarchist, konservativ, preußischer Militär; innerlich der Republik fern.',
    ziele: 'Autoritäre Regierung ohne Sozialdemokraten, Schutz von Reichswehr und Großagrariern, Wahrung seines Ansehens.',
    stationen: ['1914 Sieg bei Tannenberg – „Held" und Mythos', 'Mitverbreiter der Dolchstoßlegende (1919)', '1925 und 1932 Wahl zum Reichspräsidenten', 'Ab 1930 Präsidialkabinette', '30. Januar 1933 Ernennung Hitlers'],
    bedeutung: 'Schlüsselfigur beim Übergang von der Demokratie zur Diktatur.',
    themen: ['erster-weltkrieg', 'weimar']
  },
  {
    id: 'hitler', name: 'Adolf Hitler', lebensdaten: '1889–1945', geboren: '1889-04-20',
    geboren_text: '20. April 1889', geburtsort: 'Braunau am Inn (Österreich-Ungarn)', gestorben_text: '30. April 1945', sterbeort: 'Berlin (Suizid)',
    rolle: 'Vorsitzender der NSDAP, Reichskanzler ab 1933, „Führer und Reichskanzler" (1934–1945)',
    ideologie: 'Rassistischer Antisemitismus, Sozialdarwinismus, Antibolschewismus, „Volksgemeinschaft", Führerprinzip, Lebensraumideologie.',
    ziele: 'Errichtung einer rassisch definierten „Volksgemeinschaft", Vernichtung der Juden, Eroberung von „Lebensraum im Osten", Weltmachtstellung.',
    stationen: ['1923 gescheiterter Putsch in München, Haft, *Mein Kampf*', 'Ab 1930 Massenpartei NSDAP', '30. Januar 1933 Reichskanzler', '1939 Entfesselung des Zweiten Weltkriegs', 'Hauptverantwortlicher für Holocaust und Vernichtungskrieg'],
    bedeutung: 'Hauptverantwortlicher für die NS-Verbrechen; Diktator, unter dem Millionen Menschen ermordet wurden.',
    urteil: 'Achtung: Die Geschichte des NS lässt sich nicht allein mit Hitler erklären – Strukturen, Eliten und die Mitwirkung vieler gehören zur Analyse.',
    themen: ['zweiter-weltkrieg', 'ns-diktatur', 'weimar', 'frieden']
  },
  {
    id: 'goebbels', name: 'Joseph Goebbels', lebensdaten: '1897–1945', geboren: '1897-10-29',
    geboren_text: '29. Oktober 1897', geburtsort: 'Rheydt', gestorben_text: '1. Mai 1945', sterbeort: 'Berlin (Suizid)',
    rolle: 'Reichsminister für Volksaufklärung und Propaganda (1933–1945)',
    ideologie: 'Radikaler Antisemit, fanatischer Anhänger Hitlers.',
    ziele: 'Totale Kontrolle der öffentlichen Meinung, Mobilisierung für Regime und Krieg.',
    stationen: ['Ab 1926 Gauleiter von Berlin', '1933 Propagandaminister, Reichskulturkammer, Bücherverbrennung', 'Mitorganisator des Novemberpogroms 1938', '1943 Sportpalastrede („totaler Krieg")'],
    bedeutung: 'Architekt der NS-Propaganda und Medienlenkung.',
    themen: ['ns-diktatur']
  },
  {
    id: 'elser', name: 'Georg Elser', lebensdaten: '1903–1945', geboren: '1903-01-04',
    geboren_text: '4. Januar 1903', geburtsort: 'Hermaringen (Württemberg)', gestorben_text: '9. April 1945', sterbeort: 'KZ Dachau (ermordet)',
    rolle: 'Schreiner, Einzeltäter des Widerstands',
    ideologie: 'Sympathisant der Arbeiterbewegung, gläubiger Protestant, Gerechtigkeitssinn.',
    ziele: 'Einen Krieg verhindern bzw. beenden, indem er Hitler und die NS-Führung tötet.',
    stationen: ['Erkannte früh die Kriegsgefahr', 'Baute monatelang allein eine Bombe in eine Säule des Münchner Bürgerbräukellers', '8. November 1939: Bombe explodiert, Hitler hatte den Saal 13 Minuten zuvor verlassen', 'Jahrelange KZ-Haft, kurz vor Kriegsende ermordet'],
    bedeutung: 'Lange vergessen, heute als früher, mutiger Widerstand eines „einfachen Mannes" gewürdigt.',
    themen: ['ns-diktatur']
  },
  {
    id: 'sophie-scholl', name: 'Sophie Scholl', lebensdaten: '1921–1943', geboren: '1921-05-09',
    geboren_text: '9. Mai 1921', geburtsort: 'Forchtenberg', gestorben_text: '22. Februar 1943', sterbeort: 'München-Stadelheim (hingerichtet)',
    rolle: 'Studentin, Mitglied der Widerstandsgruppe „Weiße Rose"',
    ideologie: 'Christlich-humanistisch geprägt; anfangs Mitglied im BDM, dann wachsende Ablehnung des Regimes.',
    ziele: 'Aufklärung über NS-Verbrechen, Aufruf zum passiven Widerstand und zum Sturz des Regimes.',
    stationen: ['Studium in München ab 1942', 'Verteilung von Flugblättern der Weißen Rose', '18. Februar 1943 Verhaftung in der Universität', '22. Februar 1943 Todesurteil durch den Volksgerichtshof (Freisler), Hinrichtung am selben Tag'],
    bedeutung: 'Symbolfigur des Jugend- und Studentenwiderstands.',
    themen: ['ns-diktatur']
  },
  {
    id: 'stauffenberg', name: 'Claus Schenk Graf von Stauffenberg', lebensdaten: '1907–1944', geboren: '1907-11-15',
    geboren_text: '15. November 1907', geburtsort: 'Jettingen (Bayern)', gestorben_text: '21. Juli 1944', sterbeort: 'Berlin, Bendlerblock (erschossen)',
    rolle: 'Oberst der Wehrmacht, Attentäter des 20. Juli 1944',
    ideologie: 'Adelig-konservativ, katholisch; anfangs Zustimmung zu Teilen der NS-Politik, dann Abkehr angesichts der Verbrechen.',
    ziele: 'Hitler töten, NS-Regime stürzen („Operation Walküre"), Krieg beenden, Ehre Deutschlands retten.',
    stationen: ['Schwere Verwundung 1943', 'Kontakt zum militärischen Widerstand und Kreisauer Kreis', '20. Juli 1944 Bombenanschlag in der „Wolfsschanze"', 'Hitler überlebt; Stauffenberg noch in der Nacht erschossen'],
    bedeutung: 'Bekanntestes Gesicht des militärischen Widerstands; in der Bundesrepublik später zentraler Bezugspunkt der Erinnerung.',
    urteil: 'Urteilsfrage: Rechtfertigen späte Abkehr und nicht-demokratische Zukunftsvorstellungen Kritik – oder zählt allein die Tat?',
    themen: ['ns-diktatur']
  },
  {
    id: 'chamberlain', name: 'Neville Chamberlain', lebensdaten: '1869–1940', geboren: '1869-03-18',
    geboren_text: '18. März 1869', geburtsort: 'Birmingham', gestorben_text: '9. November 1940', sterbeort: 'Heckfield (England)',
    rolle: 'Britischer Premierminister (1937–1940), Konservative Partei',
    ideologie: 'Konservativ, pragmatisch; Überzeugung, dass Verhandlungen Kriege verhindern können.',
    ziele: 'Krieg vermeiden, Zeit zur Aufrüstung gewinnen, berechtigte Revisionswünsche Deutschlands befriedigen.',
    stationen: ['Hauptvertreter der Appeasement-Politik', 'September 1938 Münchner Abkommen („peace for our time")', 'März 1939 Garantieerklärung für Polen', '3. September 1939 Kriegserklärung an Deutschland', '1940 Rücktritt, Nachfolger Churchill'],
    bedeutung: 'Gesicht der Appeasement-Politik – lange verurteilt, heute differenzierter gesehen.',
    themen: ['zweiter-weltkrieg', 'frieden']
  },
  {
    id: 'stalin', name: 'Josef Stalin', lebensdaten: '1878–1953', geboren: '1878-12-18',
    geboren_text: '18. Dezember 1878 (offiziell 21. Dezember 1879)', geburtsort: 'Gori (Georgien)', gestorben_text: '5. März 1953', sterbeort: 'Kunzewo bei Moskau',
    rolle: 'Generalsekretär der KPdSU (ab 1922), Diktator der Sowjetunion',
    ideologie: 'Marxismus-Leninismus in eigener Ausprägung („Stalinismus"): „Sozialismus in einem Land", Personenkult.',
    ziele: 'Industrialisierung und Kollektivierung der UdSSR um jeden Preis, Sicherung der Macht, Ausdehnung des sowjetischen Einflusses.',
    stationen: ['Zwangskollektivierung und Hungersnöte (Holodomor in der Ukraine 1932/33)', '„Großer Terror" 1936–1938, GULag', '1939 Hitler-Stalin-Pakt', '1941–1945 Krieg gegen NS-Deutschland, Anti-Hitler-Koalition', 'Sowjetisierung Osteuropas, Berlin-Blockade'],
    bedeutung: 'Einer der verbrecherischsten Diktatoren des 20. Jahrhunderts; zugleich zentraler Akteur des Sieges über NS-Deutschland und des beginnenden Kalten Krieges.',
    themen: ['zweiter-weltkrieg', 'kalter-krieg']
  },
  {
    id: 'truman', name: 'Harry S. Truman', lebensdaten: '1884–1972', geboren: '1884-05-08',
    geboren_text: '8. Mai 1884', geburtsort: 'Lamar (Missouri, USA)', gestorben_text: '26. Dezember 1972', sterbeort: 'Kansas City',
    rolle: '33. Präsident der USA (1945–1953), Demokrat',
    ideologie: 'Liberale Demokratie, entschiedener Antikommunismus.',
    ziele: 'Eindämmung des Kommunismus, Wiederaufbau Westeuropas, Sicherung der Führungsrolle der USA.',
    stationen: ['1945 Potsdamer Konferenz, Einsatz der Atombombe gegen Japan', '1947 Truman-Doktrin, Marshall-Plan', '1948/49 Luftbrücke', '1949 NATO-Gründung', '1950 Koreakrieg'],
    bedeutung: 'Prägte mit der Containment-Politik die amerikanische Strategie im Kalten Krieg.',
    themen: ['kalter-krieg']
  },
  {
    id: 'kennedy', name: 'John F. Kennedy', lebensdaten: '1917–1963', geboren: '1917-05-29',
    geboren_text: '29. Mai 1917', geburtsort: 'Brookline (Massachusetts, USA)', gestorben_text: '22. November 1963', sterbeort: 'Dallas (ermordet)',
    rolle: '35. Präsident der USA (1961–1963), Demokrat',
    ideologie: 'Liberal, antikommunistisch; „New Frontier".',
    ziele: 'Stärke gegenüber der UdSSR, aber Vermeidung eines Atomkriegs; Bürgerrechte, Raumfahrt.',
    stationen: ['1961 Schweinebucht-Invasion scheitert, Mauerbau', 'Oktober 1962 Kubakrise', '1963 heißer Draht, Atomteststoppvertrag', '26. Juni 1963 Rede in West-Berlin („Ich bin ein Berliner")'],
    bedeutung: 'Hoffnungsträger einer Generation; sein Krisenmanagement 1962 gilt als Wendepunkt zur Entspannung.',
    zitat: 'Ich bin ein Berliner. (1963)',
    themen: ['kalter-krieg', 'frieden']
  },
  {
    id: 'chruschtschow', name: 'Nikita Chruschtschow', lebensdaten: '1894–1971', geboren: '1894-04-15',
    geboren_text: '15. April 1894', geburtsort: 'Kalinowka (Russland)', gestorben_text: '11. September 1971', sterbeort: 'Moskau',
    rolle: 'Erster Sekretär der KPdSU (1953–1964)',
    ideologie: 'Kommunist; Kritik an Stalins Verbrechen („Geheimrede" 1956), Konzept der friedlichen Koexistenz.',
    ziele: 'Entstalinisierung, Überholen des Westens im Systemwettbewerb, Stärkung der sowjetischen Weltmachtstellung.',
    stationen: ['1956 Geheimrede; Niederschlagung des Ungarn-Aufstands', '1958 Berlin-Ultimatum', '1961 Zustimmung zum Mauerbau', '1962 Raketen auf Kuba, Kubakrise', '1964 entmachtet'],
    bedeutung: 'Widersprüchlich: Tauwetter im Inneren, riskante Machtpolitik nach außen.',
    themen: ['kalter-krieg', 'frieden']
  },
  {
    id: 'reagan', name: 'Ronald Reagan', lebensdaten: '1911–2004', geboren: '1911-02-06',
    geboren_text: '6. Februar 1911', geburtsort: 'Tampico (Illinois, USA)', gestorben_text: '5. Juni 2004', sterbeort: 'Los Angeles',
    rolle: '40. Präsident der USA (1981–1989), Republikaner',
    ideologie: 'Konservativ, marktliberal, scharf antikommunistisch (UdSSR als „Reich des Bösen").',
    ziele: 'Politik der Stärke gegenüber der UdSSR, Aufrüstung (SDI), später Abrüstungsabkommen.',
    stationen: ['Massive Aufrüstung, Raketenabwehrprogramm SDI (1983)', 'Ab 1985 Gipfeltreffen mit Gorbatschow', '1987 INF-Vertrag; Rede am Brandenburger Tor („Tear down this wall!")'],
    bedeutung: 'Umstritten: Hat seine Politik der Stärke das Ende der UdSSR beschleunigt, oder war Gorbatschows Kurs entscheidend?',
    themen: ['kalter-krieg']
  },
  {
    id: 'gorbatschow', name: 'Michail Gorbatschow', lebensdaten: '1931–2022', geboren: '1931-03-02',
    geboren_text: '2. März 1931', geburtsort: 'Priwolnoje (Russland)', gestorben_text: '30. August 2022', sterbeort: 'Moskau',
    rolle: 'Generalsekretär der KPdSU (1985–1991), Präsident der Sowjetunion (1990–1991)',
    ideologie: 'Reformkommunist; „neues Denken" in der Außenpolitik.',
    ziele: 'Reform und Rettung des Sozialismus durch Glasnost und Perestroika, Abrüstung, Ende der Konfrontation.',
    stationen: ['1985 Generalsekretär', '1987 INF-Vertrag', '1989 keine Intervention in Osteuropa', '1990 Zustimmung zur deutschen Einheit, Friedensnobelpreis', 'Dezember 1991 Rücktritt, Ende der UdSSR'],
    bedeutung: 'Ermöglichte das friedliche Ende des Kalten Krieges und die deutsche Einheit; in Russland vielfach als Verantwortlicher für den Zerfall der UdSSR kritisiert.',
    urteil: 'Perspektiven vergleichen: In Deutschland hoch geachtet, in Russland oft negativ gesehen – warum?',
    themen: ['kalter-krieg', 'europa-einheit']
  },
  {
    id: 'adenauer', name: 'Konrad Adenauer', lebensdaten: '1876–1967', geboren: '1876-01-05',
    geboren_text: '5. Januar 1876', geburtsort: 'Köln', gestorben_text: '19. April 1967', sterbeort: 'Rhöndorf (Bad Honnef)',
    rolle: 'Erster Bundeskanzler der Bundesrepublik (1949–1963), CDU',
    ideologie: 'Christdemokratisch, katholisch, antikommunistisch, westorientiert.',
    ziele: 'Westintegration, Souveränität und Sicherheit der Bundesrepublik, deutsch-französische Aussöhnung, „Einheit in Freiheit".',
    stationen: ['1917–1933 Oberbürgermeister von Köln, von den Nazis abgesetzt', '1949 Bundeskanzler', '1955 NATO-Beitritt und Rückkehr der letzten Kriegsgefangenen aus der UdSSR', '1957 Römische Verträge', '1963 Élysée-Vertrag'],
    bedeutung: 'Prägte die Bundesrepublik als westliche Demokratie; Kritik an personellen NS-Kontinuitäten (Globke).',
    themen: ['deutschland-1945-1990', 'ddr-brd', 'frieden']
  },
  {
    id: 'ulbricht', name: 'Walter Ulbricht', lebensdaten: '1893–1973', geboren: '1893-06-30',
    geboren_text: '30. Juni 1893', geburtsort: 'Leipzig', gestorben_text: '1. August 1973', sterbeort: 'Groß Dölln (bei Templin)',
    rolle: 'Generalsekretär bzw. Erster Sekretär der SED (1950–1971), Staatsratsvorsitzender',
    ideologie: 'Marxist-Leninist, Stalinist; enge Bindung an Moskau.',
    ziele: 'Aufbau des Sozialismus in der DDR nach sowjetischem Vorbild, Sicherung der SED-Herrschaft.',
    stationen: ['Exil in Moskau während der NS-Zeit', 'April 1945 Rückkehr mit der „Gruppe Ulbricht"', '1952 „Aufbau des Sozialismus"', '1953 Volksaufstand', '1961 Mauerbau', '1971 von Honecker abgelöst'],
    bedeutung: 'Prägende Figur der frühen DDR und Verantwortlicher für den Mauerbau.',
    zitat: 'Niemand hat die Absicht, eine Mauer zu errichten! (15. Juni 1961)',
    themen: ['deutschland-1945-1990', 'ddr-brd']
  },
  {
    id: 'brandt', name: 'Willy Brandt', lebensdaten: '1913–1992', geboren: '1913-12-18',
    geboren_text: '18. Dezember 1913 (als Herbert Frahm)', geburtsort: 'Lübeck', gestorben_text: '8. Oktober 1992', sterbeort: 'Unkel',
    rolle: 'Regierender Bürgermeister von West-Berlin (1957–1966), Bundeskanzler (1969–1974), SPD',
    ideologie: 'Demokratischer Sozialist, Antifaschist (Exil in Norwegen und Schweden).',
    ziele: 'Entspannung und Aussöhnung mit dem Osten, „Wandel durch Annäherung", menschliche Erleichterungen, „Mehr Demokratie wagen".',
    stationen: ['1961 Mauerbau als Bürgermeister erlebt', '1970 Moskauer und Warschauer Vertrag, Kniefall in Warschau', '1971 Friedensnobelpreis', '1972 Grundlagenvertrag', '1974 Rücktritt nach der Guillaume-Affäre (DDR-Spion)'],
    bedeutung: 'Symbol der Neuen Ostpolitik und der Aussöhnung mit Polen.',
    zitat: 'Wir wollen mehr Demokratie wagen. (Regierungserklärung 1969)',
    themen: ['deutschland-1945-1990', 'ddr-brd', 'frieden', 'geschichtskultur']
  },
  {
    id: 'honecker', name: 'Erich Honecker', lebensdaten: '1912–1994', geboren: '1912-08-25',
    geboren_text: '25. August 1912', geburtsort: 'Neunkirchen (Saar)', gestorben_text: '29. Mai 1994', sterbeort: 'Santiago de Chile',
    rolle: 'Erster Sekretär/Generalsekretär der SED (1971–1989), Staatsratsvorsitzender',
    ideologie: 'Marxist-Leninist; lehnte Gorbatschows Reformen ab.',
    ziele: 'Stabilität durch Konsum („Einheit von Wirtschafts- und Sozialpolitik"), internationale Anerkennung der DDR, Abgrenzung vom Westen.',
    stationen: ['Im NS-Staat als Kommunist inhaftiert (Zuchthaus Brandenburg)', '1961 Organisator des Mauerbaus', '1971 Nachfolger Ulbrichts', '1987 Besuch in Bonn', '18. Oktober 1989 Rücktritt', 'Flucht nach Moskau, später Chile'],
    bedeutung: 'Verkörperte die erstarrte DDR der 1980er Jahre.',
    themen: ['deutschland-1945-1990', 'ddr-brd', 'europa-einheit']
  },
  {
    id: 'kohl', name: 'Helmut Kohl', lebensdaten: '1930–2017', geboren: '1930-04-03',
    geboren_text: '3. April 1930', geburtsort: 'Ludwigshafen am Rhein', gestorben_text: '16. Juni 2017', sterbeort: 'Ludwigshafen-Oggersheim',
    rolle: 'Bundeskanzler (1982–1998), CDU',
    ideologie: 'Christdemokratisch, überzeugter Europäer.',
    ziele: 'Deutsche Einheit in Frieden und Freiheit, europäische Integration (Euro).',
    stationen: ['1984 Versöhnungsgeste mit Mitterrand in Verdun', 'November 1989 Zehn-Punkte-Programm', '1990 Währungsunion, Zwei-plus-Vier-Vertrag, Einheit', '1992 Vertrag von Maastricht', 'Später CDU-Spendenaffäre'],
    bedeutung: '„Kanzler der Einheit"; zugleich wegen der Versprechen „blühender Landschaften" und der Spendenaffäre kritisiert.',
    themen: ['europa-einheit']
  },
  {
    id: 'schuman', name: 'Robert Schuman', lebensdaten: '1886–1963', geboren: '1886-06-29',
    geboren_text: '29. Juni 1886', geburtsort: 'Luxemburg', gestorben_text: '4. September 1963', sterbeort: 'Scy-Chazelles (Frankreich)',
    rolle: 'Französischer Außenminister (1948–1952), Gründervater der europäischen Einigung',
    ideologie: 'Christdemokrat, Grenzgänger zwischen deutscher und französischer Kultur (Lothringen).',
    ziele: 'Krieg zwischen Deutschland und Frankreich „nicht nur undenkbar, sondern materiell unmöglich" machen.',
    stationen: ['9. Mai 1950 Schuman-Erklärung', '1951 Gründung der EGKS', '1958–1960 erster Präsident des Europäischen Parlaments'],
    bedeutung: 'Der 9. Mai ist heute „Europatag".',
    themen: ['europa-einheit']
  },
  /* ---------- Ergänzt nach den Hefter-Themen ---------- */
  {
    id: 'metternich', name: 'Klemens von Metternich', lebensdaten: '1773–1859', geboren: '1773-05-15',
    geboren_text: '15. Mai 1773', geburtsort: 'Koblenz', gestorben_text: '11. Juni 1859', sterbeort: 'Wien',
    rolle: 'Österreichischer Außenminister und Staatskanzler (1809–1848), Organisator des Wiener Kongresses',
    ideologie: 'Konservativ, Verfechter der monarchischen Legitimität und des europäischen Gleichgewichts; Gegner von Liberalismus und Nationalismus.',
    ziele: 'Restauration der vorrevolutionären Ordnung, Unterdrückung revolutionärer und nationaler Bewegungen, Stabilität durch das „Konzert der Mächte".',
    stationen: ['1814/15 Leitung des Wiener Kongresses', '1819 Karlsbader Beschlüsse (Zensur, Verbot der Burschenschaften)', '1832 Verschärfung nach dem Hambacher Fest', '13. März 1848 Sturz in der Wiener Märzrevolution, Flucht nach England'],
    bedeutung: 'Symbolfigur der Restaurationszeit („System Metternich"); prägte Europa zwischen 1815 und 1848.',
    themen: ['revolution-1848']
  },
  {
    id: 'friedrich-wilhelm-4', name: 'Friedrich Wilhelm IV.', lebensdaten: '1795–1861', geboren: '1795-10-15',
    geboren_text: '15. Oktober 1795', geburtsort: 'Berlin', gestorben_text: '2. Januar 1861', sterbeort: 'Potsdam (Schloss Sanssouci)',
    rolle: 'König von Preußen (1840–1861)',
    ideologie: 'Romantisch-konservativ, überzeugt vom Gottesgnadentum; lehnte Volkssouveränität ab.',
    ziele: 'Bewahrung der monarchischen Ordnung; deutsche Einheit nur durch Einigung der Fürsten, nicht durch das Volk.',
    stationen: ['18./19. März 1848 Barrikadenkämpfe in Berlin; Verneigung vor den „Märzgefallenen"', 'Dezember 1848 oktroyierte (aufgezwungene) Verfassung für Preußen', '3. April 1849 Ablehnung der Kaiserkrone der Paulskirche („Reif aus Dreck und Letten")', '1849/50 Dreiklassenwahlrecht in Preußen', 'ab 1858 regiert sein Bruder Wilhelm als Regent'],
    bedeutung: 'Seine Ablehnung der Kaiserkrone besiegelte das Scheitern der Revolution von 1848/49.',
    themen: ['revolution-1848']
  },
  {
    id: 'blum', name: 'Robert Blum', lebensdaten: '1807–1848', geboren: '1807-11-10',
    geboren_text: '10. November 1807', geburtsort: 'Köln', gestorben_text: '9. November 1848', sterbeort: 'Wien (standrechtlich erschossen)',
    rolle: 'Leipziger Publizist, Verleger und Politiker; Abgeordneter der Frankfurter Nationalversammlung',
    ideologie: 'Demokrat und Republikaner; trat für Volkssouveränität, Grundrechte und religiöse Toleranz ein.',
    ziele: 'Ein freies, demokratisches und geeintes Deutschland.',
    stationen: ['Theatersekretär und Publizist in Leipzig, Gründer politischer Vereine', '1848 Führer der Linken in der Paulskirche', 'Oktober 1848 Reise ins aufständische Wien', '9. November 1848 trotz Abgeordnetenimmunität hingerichtet'],
    bedeutung: 'Märtyrer der Revolution und Symbol der Gegenrevolution – zugleich wichtiger Sachsen-Bezug für 1848/49.',
    zitat: 'Ich sterbe für die deutsche Freiheit, für die ich gekämpft habe.',
    themen: ['revolution-1848']
  },
  {
    id: 'wilhelm1', name: 'Wilhelm I.', lebensdaten: '1797–1888', geboren: '1797-03-22',
    geboren_text: '22. März 1797', geburtsort: 'Berlin', gestorben_text: '9. März 1888', sterbeort: 'Berlin',
    rolle: 'König von Preußen (1861–1888), erster Deutscher Kaiser (1871–1888)',
    ideologie: 'Konservativ, militärisch geprägt, Gottesgnadentum.',
    ziele: 'Stärkung der Armee (Heeresreform), Sicherung der monarchischen Macht gegen das Parlament.',
    stationen: ['1848 als „Kartätschenprinz" gegen die Revolution, kurzzeitig im Exil in England', '1858 Regent, 1861 König', '1862 Ernennung Bismarcks im Verfassungskonflikt', '18. Januar 1871 Kaiserproklamation in Versailles', '1878 zwei Attentate → Anlass für das Sozialistengesetz'],
    bedeutung: 'Überließ die Politik weitgehend Bismarck; Symbolfigur des Kaiserreichs.',
    themen: ['nation-kaiserreich']
  },
  {
    id: 'ludendorff', name: 'Erich Ludendorff', lebensdaten: '1865–1937', geboren: '1865-04-09',
    geboren_text: '9. April 1865', geburtsort: 'Kruszewnia bei Posen', gestorben_text: '20. Dezember 1937', sterbeort: 'Tutzing',
    rolle: 'General, Erster Generalquartiermeister der Obersten Heeresleitung (1916–1918)',
    ideologie: 'Militarist, völkisch-nationalistisch, später radikal antisemitisch.',
    ziele: 'Siegfrieden, totale Mobilisierung von Volk und Wirtschaft für den Krieg; nach 1918 Kampf gegen die Republik.',
    stationen: ['1914 mit Hindenburg Sieg bei Tannenberg', '1916–1918 faktische Militärdiktatur der 3. OHL', 'September 1918 Forderung nach Waffenstillstand', 'Mitverbreiter der Dolchstoßlegende', '1923 Teilnahme am Hitlerputsch'],
    bedeutung: 'Verkörperte den Anspruch des Militärs auf politische Führung und schob die Verantwortung für die Niederlage den Demokraten zu.',
    themen: ['erster-weltkrieg', 'weimar']
  },
  {
    id: 'scheidemann', name: 'Philipp Scheidemann', lebensdaten: '1865–1939', geboren: '1865-07-26',
    geboren_text: '26. Juli 1865', geburtsort: 'Kassel', gestorben_text: '29. November 1939', sterbeort: 'Kopenhagen (Exil)',
    rolle: 'SPD-Politiker, rief am 9. November 1918 die Republik aus; erster Reichsministerpräsident (1919)',
    ideologie: 'Gemäßigter Sozialdemokrat (MSPD), parlamentarische Demokratie.',
    ziele: 'Verhinderung einer Räterepublik, demokratische Republik, gerechter Frieden.',
    stationen: ['9. November 1918 Ausrufung der „Deutschen Republik" vom Reichstagsbalkon', 'Februar–Juni 1919 Reichsministerpräsident', 'Juni 1919 Rücktritt aus Protest gegen den Versailler Vertrag', '1922 Blausäure-Attentat von Rechtsextremen überlebt', '1933 Flucht ins Exil'],
    bedeutung: 'Gesicht der Republikgründung; seine Ablehnung von Versailles zeigt das Dilemma der Demokraten.',
    zitat: 'Welche Hand müsste nicht verdorren, die sich und uns in diese Fesseln legt? (über den Versailler Vertrag, 1919)',
    themen: ['weimar']
  },
  {
    id: 'liebknecht', name: 'Karl Liebknecht', lebensdaten: '1871–1919', geboren: '1871-08-13',
    geboren_text: '13. August 1871', geburtsort: 'Leipzig', gestorben_text: '15. Januar 1919', sterbeort: 'Berlin (ermordet)',
    rolle: 'Sozialistischer Politiker, Mitbegründer von Spartakusbund und KPD',
    ideologie: 'Revolutionärer Marxist, Antimilitarist.',
    ziele: 'Sozialistische Räterepublik, Ende des Krieges, Überwindung des Kapitalismus.',
    stationen: ['Sohn des SPD-Mitgründers Wilhelm Liebknecht', '2. Dezember 1914 als einziger Reichstagsabgeordneter gegen die Kriegskredite', '1916–1918 in Haft', '9. November 1918 Ausrufung der „freien sozialistischen Republik"', '15. Januar 1919 mit Rosa Luxemburg von Freikorpsoffizieren ermordet'],
    bedeutung: 'Symbol der radikalen Linken und der gespaltenen Arbeiterbewegung; gebürtiger Leipziger.',
    themen: ['weimar']
  },
  {
    id: 'bruening', name: 'Heinrich Brüning', lebensdaten: '1885–1970', geboren: '1885-11-26',
    geboren_text: '26. November 1885', geburtsort: 'Münster', gestorben_text: '30. März 1970', sterbeort: 'Norwich (Vermont, USA)',
    rolle: 'Zentrumspolitiker, Reichskanzler (März 1930 – Mai 1932) – erstes Präsidialkabinett',
    ideologie: 'Katholisch-konservativ, Haushaltsdisziplin; eher autoritäres Staatsverständnis.',
    ziele: 'Ausgeglichener Haushalt, Beendigung der Reparationen, Stärkung der Exportwirtschaft – notfalls ohne den Reichstag.',
    stationen: ['30. März 1930 Reichskanzler', 'Regieren mit Notverordnungen nach Art. 48, Deflationspolitik', 'April 1932 SA-Verbot', '30. Mai 1932 Entlassung durch Hindenburg', '1934 Emigration in die USA, Professor in Harvard'],
    bedeutung: 'Mit ihm begann die Zeit der Präsidialkabinette; seine Sparpolitik verschärfte die Krise.',
    urteil: 'Klassische Urteilsfrage: Totengräber der Republik oder Opfer der Umstände?',
    themen: ['weimar']
  },
  {
    id: 'papen', name: 'Franz von Papen', lebensdaten: '1879–1969', geboren: '1879-10-29',
    geboren_text: '29. Oktober 1879', geburtsort: 'Werl', gestorben_text: '2. Mai 1969', sterbeort: 'Obersasbach (Baden)',
    rolle: 'Reichskanzler (Juni – November 1932), Vizekanzler unter Hitler (1933/34)',
    ideologie: 'Katholisch-konservativ, monarchistisch, antiparlamentarisch.',
    ziele: 'Autoritärer „Neuer Staat" ohne Parteienherrschaft; „Einrahmung" und Nutzung Hitlers.',
    stationen: ['Offizier, im Ersten Weltkrieg Militärattaché und Stabsoffizier', 'Juni 1932 „Kabinett der Barone", Aufhebung des SA-Verbots', '20. Juli 1932 „Preußenschlag"', 'Januar 1933 Verhandlungen mit Hitler, Sturz Schleichers', '1933/34 Vizekanzler, dann Botschafter in Wien und Ankara; 1946 in Nürnberg freigesprochen'],
    bedeutung: 'Schlüsselfigur der Machtübertragung – er glaubte, Hitler kontrollieren zu können („Wir haben ihn uns engagiert").',
    themen: ['weimar']
  },
  {
    id: 'schleicher', name: 'Kurt von Schleicher', lebensdaten: '1882–1934', geboren: '1882-04-07',
    geboren_text: '7. April 1882', geburtsort: 'Brandenburg an der Havel', gestorben_text: '30. Juni 1934', sterbeort: 'Neubabelsberg (ermordet)',
    rolle: 'General, Reichswehrminister und letzter Reichskanzler der Weimarer Republik (Dezember 1932 – Januar 1933)',
    ideologie: 'Konservativ, autoritär; Politiker im Hintergrund der Reichswehr.',
    ziele: 'Stabile autoritäre Regierung mit Rückhalt der Reichswehr; Einbindung oder Spaltung der NSDAP.',
    stationen: ['Im Ersten Weltkrieg Mitglied der OHL, enger Mitarbeiter Groeners', 'Drahtzieher in der Kamarilla: beteiligt am Sturz Müllers (1930) und Brünings (1932), an der Ernennung Papens', 'Dezember 1932 Reichskanzler, „Querfront"-Pläne mit Gewerkschaften und Gregor Strasser', 'Januar 1933 Rücktritt, vergeblicher Versuch, Hitler zu verhindern', '30. Juni 1934 im „Röhm-Putsch" ermordet'],
    bedeutung: 'Verkörpert die Intrigen der Präsidialzeit, die Hitler den Weg ebneten.',
    themen: ['weimar']
  },
  {
    id: 'galen', name: 'Clemens August Graf von Galen', lebensdaten: '1878–1946', geboren: '1878-03-16',
    geboren_text: '16. März 1878', geburtsort: 'Dinklage (Oldenburger Land)', gestorben_text: '22. März 1946', sterbeort: 'Münster',
    rolle: 'Bischof von Münster (ab 1933), Kardinal (1946)',
    ideologie: 'Katholisch-konservativ, national gesinnt; kompromissloser Verteidiger kirchlicher Rechte und des Lebensrechts.',
    ziele: 'Schutz der Kirche, Verteidigung christlicher Werte und der Unantastbarkeit menschlichen Lebens.',
    stationen: ['1933 Bischof von Münster', 'Juli/August 1941 drei Predigten gegen Klosterbeschlagnahmungen und die „Euthanasie"-Morde (3. August 1941)', 'Die Predigten werden als Flugblätter verbreitet – Aktion T4 wird im August 1941 offiziell gestoppt', 'Wegen seiner Popularität nicht verhaftet („Löwe von Münster")', '2005 seliggesprochen'],
    bedeutung: 'Bekanntestes Beispiel kirchlichen Protests; zeigt, dass öffentlicher Widerspruch Wirkung haben konnte.',
    themen: ['ns-diktatur']
  },
  {
    id: 'mielke', name: 'Erich Mielke', lebensdaten: '1907–2000', geboren: '1907-12-28',
    geboren_text: '28. Dezember 1907', geburtsort: 'Berlin', gestorben_text: '21. Mai 2000', sterbeort: 'Berlin',
    rolle: 'Minister für Staatssicherheit der DDR (1957–1989)',
    ideologie: 'Überzeugter Kommunist (Marxismus-Leninismus), absolute Loyalität zur Partei.',
    ziele: 'Totale Kontrolle der Gesellschaft, Ausschaltung jeder Opposition, Sicherung der SED-Herrschaft.',
    stationen: ['1931 Beteiligung am Mord an zwei Berliner Polizisten, Flucht in die Sowjetunion', '1950 stellvertretender Minister, 1957 Minister für Staatssicherheit', 'Ausbau des MfS zum riesigen Überwachungsapparat', '1976 Mitglied des Politbüros', '13. November 1989 vor der Volkskammer: „Ich liebe doch alle – alle Menschen …"', '1993 wegen der Polizistenmorde von 1931 verurteilt'],
    bedeutung: 'Gesicht der Stasi und des Überwachungsstaats DDR.',
    themen: ['ddr-brd']
  },
  {
    id: 'dutschke', name: 'Rudi Dutschke', lebensdaten: '1940–1979', geboren: '1940-03-07',
    geboren_text: '7. März 1940', geburtsort: 'Schönefeld bei Luckenwalde (Brandenburg)', gestorben_text: '24. Dezember 1979', sterbeort: 'Aarhus (Dänemark)',
    rolle: 'Soziologiestudent, Wortführer des SDS und der Studentenbewegung',
    ideologie: 'Undogmatischer Sozialist („Neue Linke"), antiautoritär, christlich geprägt.',
    ziele: 'Demokratisierung von Hochschule und Gesellschaft, Kampf gegen Vietnamkrieg und Notstandsgesetze; „langer Marsch durch die Institutionen".',
    stationen: ['Aufgewachsen in der DDR, Verweigerung des Wehrdienstes, 1961 kurz vor dem Mauerbau Wechsel nach West-Berlin', 'Ab 1965 führende Figur im SDS', '11. April 1968 von einem Rechtsextremisten angeschossen → Osterunruhen', 'Lange Rehabilitation, Engagement für die Umweltbewegung (Gründung der Grünen)', 'Tod 1979 an den Spätfolgen des Attentats'],
    bedeutung: 'Symbolfigur der 68er-Bewegung.',
    themen: ['ddr-brd']
  },
  {
    id: 'meinhof', name: 'Ulrike Meinhof', lebensdaten: '1934–1976', geboren: '1934-10-07',
    geboren_text: '7. Oktober 1934', geburtsort: 'Oldenburg', gestorben_text: '9. Mai 1976', sterbeort: 'Stuttgart-Stammheim (Gefängnis, Suizid)',
    rolle: 'Journalistin (Kolumnistin der Zeitschrift „konkret"), Mitbegründerin der RAF',
    ideologie: 'Linksradikal, antiimperialistisch; ab 1970 Befürworterin des bewaffneten Kampfes.',
    ziele: 'Umsturz der Bundesrepublik durch „Stadtguerilla".',
    stationen: ['1959–1969 politische Journalistin', '14. Mai 1970 Beteiligung an der Befreiung Andreas Baaders – Weg in den Untergrund', '1972 Verhaftung', '1974 Verurteilung, ab 1975 Angeklagte im Stammheim-Prozess', '9. Mai 1976 Tod in der Zelle'],
    bedeutung: 'Symbol für die Radikalisierung eines Teils der Protestbewegung bis zum Terrorismus.',
    urteil: 'Achtung: Täterbiografien nie heroisieren – Opfer der RAF (34 Tote) mitdenken.',
    themen: ['ddr-brd']
  }
].forEach(p => ZR.person(p));
