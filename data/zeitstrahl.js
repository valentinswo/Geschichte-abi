/*
 * Orientierender Zeitstrahl auf der Startseite.
 * epochen: farbige Balken (reihe 0 = obere, 1 = untere Reihe), thema = id des verlinkten Themas
 * ereignisse: Schlüsselereignisse mit kurzer Erklärung (detail)
 */
ZR.zeitstrahl.epochen = [
  { von: 1789, bis: 1815, titel: 'Revolution & Napoleon', thema: 'nation-kaiserreich', farbe: '#9e9d24', reihe: 0 },
  { von: 1815, bis: 1849, titel: 'Vormärz & Revolution', thema: 'nation-kaiserreich', reihe: 0 },
  { von: 1835, bis: 1914, titel: 'Industrialisierung', thema: 'industrialisierung', reihe: 1 },
  { von: 1871, bis: 1914, titel: 'Deutsches Kaiserreich', thema: 'nation-kaiserreich', reihe: 0 },
  { von: 1914, bis: 1918, titel: '1. Weltkrieg', thema: 'frieden', reihe: 0 },
  { von: 1918, bis: 1933, titel: 'Weimarer Republik', thema: 'weimar', reihe: 1 },
  { von: 1933, bis: 1945, titel: 'NS-Diktatur', thema: 'ns-diktatur', reihe: 1 },
  { von: 1945, bis: 1949, titel: 'Besatzung', thema: 'deutschland-1945-1990', reihe: 0 },
  { von: 1947, bis: 1991, titel: 'Kalter Krieg', thema: 'kalter-krieg', reihe: 1 },
  { von: 1949, bis: 1990, titel: 'BRD & DDR', thema: 'ddr-brd', reihe: 0 },
  { von: 1990, bis: 2025, titel: 'Vereintes Deutschland in Europa', thema: 'europa-einheit', reihe: 0 }
];

ZR.zeitstrahl.ereignisse = [
  { jahr: 1789, text: 'Französische Revolution', thema: 'nation-kaiserreich', detail: 'Ideen von **Freiheit, Gleichheit, Volkssouveränität** und Menschenrechten verbreiten sich in Europa.' },
  { jahr: 1815, text: 'Wiener Kongress', thema: 'frieden', detail: 'Neuordnung Europas nach Napoleon: Restauration, Deutscher Bund, Gleichgewicht der Großmächte (Pentarchie).' },
  { jahr: 1834, text: 'Deutscher Zollverein', thema: 'industrialisierung', detail: 'Wirtschaftliche Einigung vor der politischen – wichtige Voraussetzung der Industrialisierung in Deutschland.' },
  { jahr: 1848, label: '1848/49', text: 'Revolution', thema: 'nation-kaiserreich', detail: 'Bürgertum fordert **Einheit und Freiheit**; Paulskirchenverfassung – die Revolution scheitert 1849.' },
  { jahr: 1871, text: 'Reichsgründung', thema: 'nation-kaiserreich', detail: 'Kaiserproklamation in Versailles: Einigung „von oben" unter preußischer Führung, Bismarck wird Reichskanzler.' },
  { jahr: 1883, label: '1883–89', text: 'Sozialversicherung', thema: 'industrialisierung', detail: 'Bismarcks Kranken-, Unfall- und Rentenversicherung – „Zuckerbrot" neben der „Peitsche" des Sozialistengesetzes.' },
  { jahr: 1914, text: 'Beginn 1. Weltkrieg', thema: 'frieden', detail: 'Julikrise nach dem Attentat von Sarajevo – erster industrialisierter, „totaler" Krieg.' },
  { jahr: 1917, text: 'Oktoberrevolution', thema: 'kalter-krieg', detail: 'Bolschewiki unter Lenin übernehmen in Russland die Macht – Beginn des Systemgegensatzes zu den USA.' },
  { jahr: 1918, text: 'Novemberrevolution', thema: 'weimar', detail: 'Kaiser dankt ab, Scheidemann ruft die Republik aus. Waffenstillstand am 11. November.' },
  { jahr: 1919, text: 'Versailler Vertrag', thema: 'frieden', detail: 'Friedensvertrag mit Deutschland: Gebietsverluste, Reparationen, Kriegsschuldartikel 231 – „Diktatfrieden" in der deutschen Wahrnehmung.' },
  { jahr: 1923, text: 'Krisenjahr', thema: 'weimar', detail: 'Ruhrbesetzung, Hyperinflation, Hitlerputsch, Reichsexekution gegen Sachsen.' },
  { jahr: 1929, text: 'Weltwirtschaftskrise', thema: 'weimar', detail: 'Börsenkrach in New York; Massenarbeitslosigkeit radikalisiert die Wählerschaft.' },
  { jahr: 1933, text: '„Machtergreifung"', thema: 'ns-diktatur', detail: '30. Januar: Hitler wird Reichskanzler. Reichstagsbrandverordnung und Ermächtigungsgesetz zerstören die Demokratie.' },
  { jahr: 1938, text: 'Novemberpogrom', thema: 'ns-diktatur', detail: '9./10. November: staatlich organisierte Gewalt gegen Juden, Synagogen brennen.' },
  { jahr: 1939, text: 'Beginn 2. Weltkrieg', thema: 'frieden', detail: '1. September: Überfall auf Polen. Ende des Appeasements.' },
  { jahr: 1942, text: 'Wannseekonferenz', thema: 'ns-diktatur', detail: 'Organisation der „Endlösung der Judenfrage" – der Holocaust wird bürokratisch koordiniert.' },
  { jahr: 1945, text: 'Kriegsende · Potsdam', thema: 'deutschland-1945-1990', detail: '8. Mai bedingungslose Kapitulation; Potsdamer Konferenz: Besatzungszonen, 4 D (Demilitarisierung, Denazifizierung, Demokratisierung, Dezentralisierung).' },
  { jahr: 1948, label: '1948/49', text: 'Berlin-Blockade', thema: 'kalter-krieg', detail: 'Sowjetische Blockade West-Berlins nach der Währungsreform; die Westmächte versorgen die Stadt über die Luftbrücke.' },
  { jahr: 1949, text: 'Doppelte Staatsgründung', thema: 'ddr-brd', detail: '23. Mai Grundgesetz (BRD), 7. Oktober Gründung der DDR.' },
  { jahr: 1953, text: '17. Juni', thema: 'ddr-brd', detail: 'Volksaufstand in der DDR wird von sowjetischen Panzern niedergeschlagen.' },
  { jahr: 1957, text: 'Römische Verträge', thema: 'europa-einheit', detail: 'Gründung der EWG – Kern der heutigen EU.' },
  { jahr: 1961, text: 'Mauerbau', thema: 'ddr-brd', detail: '13. August: Abriegelung West-Berlins, „antifaschistischer Schutzwall" in der SED-Propaganda.' },
  { jahr: 1962, text: 'Kubakrise', thema: 'kalter-krieg', detail: '13 Tage am Rand des Atomkriegs – danach Heißer Draht und Entspannung.' },
  { jahr: 1970, text: 'Neue Ostpolitik', thema: 'frieden', detail: 'Moskauer und Warschauer Vertrag, Brandts Kniefall in Warschau – „Wandel durch Annäherung".' },
  { jahr: 1975, text: 'KSZE-Schlussakte', thema: 'europa-einheit', detail: 'Helsinki: Unverletzlichkeit der Grenzen, aber auch Menschenrechte – Berufungsgrundlage für Bürgerrechtler im Osten.' },
  { jahr: 1989, text: 'Friedliche Revolution', thema: 'europa-einheit', detail: 'Montagsdemonstrationen (9. Oktober Leipzig), Mauerfall am 9. November.' },
  { jahr: 1990, text: 'Deutsche Einheit', thema: 'europa-einheit', detail: 'Zwei-plus-Vier-Vertrag (12.9.) und Beitritt der DDR zur Bundesrepublik am 3. Oktober.' },
  { jahr: 1991, text: 'Ende der UdSSR', thema: 'kalter-krieg', detail: 'Die Sowjetunion löst sich auf – Ende des Kalten Krieges.' },
  { jahr: 1993, text: 'Vertrag von Maastricht', thema: 'europa-einheit', detail: 'Aus der EG wird die Europäische Union (in Kraft 1993).' },
  { jahr: 2022, text: 'Russischer Angriff auf Ukraine', thema: 'frieden', detail: 'Rückkehr des großen Krieges nach Europa – die Friedensordnung nach 1990 wird infrage gestellt.' }
];
