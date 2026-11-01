# ⌛ Zeitreise – Geschichte Abi Sachsen

Interaktive Lern-Web-App für **Geschichte am Gymnasium in Sachsen, Klasse 10 bis Abitur**. Läuft im Browser, lässt sich auf iPhone und Android auf den Homebildschirm legen und funktioniert offline.

## Was drin ist

- **Startseite mit orientierendem Zeitstrahl** (1789 bis heute) – Epochen führen direkt zu den Themen
- **10 Hauptthemen mit eigenem Reiter**, orientiert am Lehrplan Gymnasium Geschichte Sachsen (2019):
  - Klasse 10: USA und UdSSR (Kalter Krieg) · Ost-West-Konflikt und Deutschland · Europa und Einheit
  - Grundkurs 11/12: Industrialisierung & Soziale Frage · Liberalismus, Nationalismus, Kaiserreich · Weimarer Republik · NS-Diktatur · Demokratie und Diktatur nach 1945 · Herausforderung „Frieden" · Geschichtskultur (Wahlbereich)
- Pro Thema: **Fließtext + Stichpunkte**, **Fließschemata** (Abläufe, Ursache–Folge, Vergleichstabellen), **Zeitleiste**, **Begriffe**, **Karteikarten**, **Abschluss-Quiz**
- **Methoden & Urteilen**: Operatoren/AFB, Textquellen, **Karikaturen**, **Bildquellen**, Statistiken, **Sach- und Werturteil**, Abi-Klausur – jeweils mit Anleitung, Musterbeispiel und Übung
- **27 Persönlichkeiten** mit Steckbrief (Lebensdaten, Ideologie, Ziele, Stationen, Bedeutung)
- **8 Aufgabentypen**: Multiple Choice, Wahr/Falsch, Zeitstrahl sortieren, Ablauf ordnen, Zuordnen, Lückentext, Einsortieren, offene Fragen mit **KI-Korrektur** (mit Offline-Ersatz)
- **Abi-Training**: Mix-Quiz, Zeitstrahl-Profi, offene Abi-Fragen, alle Karteikarten
- **Hell-/Dunkelmodus**, **Vorlesefunktion**, Suche, Lernfortschritt (lokal im Browser)
- **QR-Code-Seite** zum Weitergeben: `/qr`

## Schnellstart

➡️ **Schritt-für-Schritt-Anleitung (ohne Programmierkenntnisse): [ANLEITUNG.md](ANLEITUNG.md)**
➡️ **Inhalte ändern und ergänzen: [CONTRIBUTING.md](CONTRIBUTING.md)**

Lokal ansehen (optional):

```bash
python3 -m http.server 8000   # dann http://localhost:8000 öffnen
node scripts/validate.js       # Inhalte prüfen
```

## Technik

Reines HTML/CSS/JavaScript ohne Build-Schritt. Inhalte in `data/`, Logik in `js/`. Hosting über Netlify, KI-Korrektur als Netlify Function (`netlify/functions/korrektur.mjs`). Jede Änderung läuft über einen Pull Request mit automatischer Prüfung (GitHub Action) und Netlify-Vorschau.

## Hinweis

Die Inhalte wurden sorgfältig erstellt, ersetzen aber nicht den Unterricht. Fehler gefunden? Gern als Issue oder Pull Request melden.
