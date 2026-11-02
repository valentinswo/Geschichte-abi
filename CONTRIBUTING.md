# Inhalte bearbeiten und ergänzen

Alle Lerninhalte liegen als einfache JavaScript-Dateien im Ordner `data/`. Du musst nicht programmieren können – es sind im Grunde beschriftete Textfelder. Wichtig ist nur: **Anführungszeichen und Kommas** müssen stimmen. Bei jedem Pull Request prüft eine automatische Kontrolle (`scripts/validate.js`), ob alles korrekt ist.

## Ordnerstruktur

```
data/
  registry.js            ← nicht ändern
  zeitstrahl.js          ← Epochen und Ereignisse des Zeitstrahls
  themen-uebersicht.js   ← Kurz-Zusammenfassung + Leitfrage je Thema (Seite „Themen“)
  personen.js            ← Steckbriefe
  themen/01-….js         ← ein Hauptthema pro Datei (= ein Reiter)
  themen/_vorlage.js     ← Vorlage für neue Themen
  methoden/methoden.js   ← Karikaturen, Bildquellen, Urteilen usw.
  hefter/*.js            ← Ergänzungen aus dem eigenen Hefter (mit „📓 Hefter"-Markierung)
  hefter/pruefung.js     ← Prüfungs-Checkliste im Abi-Training
```

## Text formatieren

- `**fett**` → **fett**, `*kursiv*` → *kursiv*
- Texte stehen in einfachen Anführungszeichen `'…'`. Ein Apostroph im Text wird mit `’` (typografisch) geschrieben oder mit `\'` maskiert.
- Deutsche Anführungszeichen „…" kannst du ganz normal verwenden.

## Eigene Notizen ergänzen (Hefter)

Statt die Themen-Dateien zu ändern, kannst du Ergänzungen in `data/hefter/` ablegen:

```js
ZR.ergaenze('weimar', {
  kapitel: [{ titel: 'Mein neues Kapitel', nach: 'Krisenjahre 1919–1923', punkte: ['…'] }],
  zeitleiste: [{ jahr: '1923', text: '…' }],
  quiz: [{ typ: 'wf', aussage: '…', richtig: true }]
});
```

`nach`/`vor` geben an, hinter bzw. vor welchem Kapitel (Titel) eingefügt wird. Neue Dateien in `index.html` im Block „Ergänzungen aus dem eigenen Hefter" eintragen. Alles daraus erscheint in der App mit „📓 Hefter".

## Ein neues Thema anlegen

1. `data/themen/_vorlage.js` kopieren, z. B. als `data/themen/11-mein-thema.js`.
2. Felder ausfüllen (`id` klein und ohne Leerzeichen, z. B. `imperialismus`).
3. In `index.html` bei den anderen Themen eine Zeile ergänzen:
   `<script src="data/themen/11-mein-thema.js"></script>`
4. Pull Request erstellen. Der neue Reiter erscheint automatisch.

## Aufbau eines Themas

| Feld | Bedeutung |
|---|---|
| `einleitung` | Überblick als Fließtext (Liste von Absätzen) |
| `kapitel` | Abschnitte mit `titel`, optional `text` (Absätze), `punkte` (Stichpunkte), `merke` |
| `schemata` | Fließschemata: `typ: 'kette'` (Ablauf), `'ursache'` (Ursachen → Ereignis → Folgen), `'vergleich'` (Tabelle) |
| `zeitleiste` | `{ jahr: '1919', text: '…' }` |
| `begriffe` | `{ begriff: '…', erklaerung: '…' }` – werden automatisch zu Karteikarten |
| `personen` | IDs aus `personen.js` |
| `abi` | Abi-Tipps |
| `notizen` | Eigene Ergänzungen aus dem Unterricht (erscheinen als Kasten „Aus dem Unterricht") |
| `quiz` | Abschlussquiz (siehe unten) |
| `teile` | Optional: Thema in eigene Reiter trennen (z. B. Weltkriege). Kapitel, Schemata, Begriffe bekommen dann `teil: '…'`; die Zeitleiste wird über `von`/`bis` (Jahre) aufgeteilt. |

## Quiz-Aufgabentypen

```js
{ typ: 'mc', frage: '…', optionen: ['A', 'B', 'C'], richtig: 0, erklaerung: '…' }        // eine richtige
{ typ: 'mc', frage: '…', optionen: ['A', 'B', 'C'], richtig: [0, 2] }                    // mehrere richtige
{ typ: 'wf', aussage: '…', richtig: true, erklaerung: '…' }                              // wahr/falsch
{ typ: 'zeitstrahl', frage: '…', items: [{ text: 'Mauerbau', jahr: 1961 }, …] }           // chronologisch ordnen
{ typ: 'reihenfolge', frage: '…', schritte: ['erst', 'dann', 'danach'] }                 // in richtiger Reihenfolge eintragen
{ typ: 'zuordnen', frage: '…', paare: [['Begriff', 'Erklärung'], …] }
{ typ: 'lueckentext', frage: '…', text: 'Die Mauer fiel {1989|1990|1961}.' }             // erste Option = richtig
{ typ: 'kategorien', frage: '…', kategorien: { 'BRD': ['…'], 'DDR': ['…'] } }
{ typ: 'freitext', frage: '…', operator: 'erläutern', afb: 'II', punkte: 4,
  erwartung: [{ punkt: 'Was erwartet wird', schluessel: ['stichwort1', 'stichwort2'] }],
  musterloesung: '…' }                                                                   // KI-Korrektur
```

Jede Aufgabe kann zusätzlich `material: '…'` haben (z. B. ein Quellenauszug oder eine Karikaturbeschreibung).

## Urheberrecht

Bitte nur **selbst formulierte Texte** oder **gemeinfreie Quellen** (z. B. Reden von vor 1950, deren Autor:innen vor mehr als 70 Jahren gestorben sind) einfügen. Keine Schulbuchseiten abtippen und keine fremden Bilder hochladen – stattdessen Bilder in eigenen Worten beschreiben und auf die Originalquelle verlinken.
