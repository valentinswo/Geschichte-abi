# ⌛ Zeitreise – Geschichte Abi Sachsen

Interaktive Lern-Web-App für **Geschichte am Gymnasium in Sachsen, Klasse 10 bis Abitur**. Läuft im Browser, lässt sich auf iPhone und Android auf den Homebildschirm legen und funktioniert offline.

## Was drin ist

- **Startseite mit orientierendem Zeitstrahl** (1789 bis heute) – Epochen führen direkt zu den Themen
- **13 Hauptthemen mit eigenem Reiter**, oben sichtbar gruppiert nach **Klasse 10** und **Klasse 11/12**, orientiert am Lehrplan Gymnasium Geschichte Sachsen (2019):
  - Klasse 10: USA und UdSSR (Kalter Krieg) · Ost-West-Konflikt und Deutschland · Europa und Einheit
  - Grundkurs 11/12: Industrialisierung & Soziale Frage · Vormärz und Revolution 1848/49 · Kaiserreich · Erster Weltkrieg · Weimarer Republik · NS-Diktatur · Zweiter Weltkrieg · Demokratie und Diktatur nach 1945 (DDR, MfS, Mauerbau, APO, RAF, Ostpolitik) · Herausforderung „Frieden" · Geschichtskultur (Wahlbereich)
- Pro Thema: **Fließtext + Stichpunkte**, **Fließschemata** (Abläufe, Ursache–Folge, Vergleichstabellen), **Zeitleiste**, **Begriffe**, **Karteikarten**, **Abschluss-Quiz**
- **Methoden & Urteilen**: Operatoren/AFB, Textquellen, **Karikaturen**, **Bildquellen**, Statistiken, **Sach- und Werturteil**, Abi-Klausur – jeweils mit Anleitung, Musterbeispiel und Übung
- **41 Persönlichkeiten** mit Steckbrief (Lebensdaten, Ideologie, Ziele, Stationen, Bedeutung)
- **Quiz mit großem Fragenpool:** jede Runde 12 zufällige Aufgaben (viele Multiple Choice), am Ende ein Überblick aller Aufgaben mit Lösung
- **8 Aufgabentypen**: Multiple Choice, Wahr/Falsch, Zeitstrahl sortieren, Ablauf ordnen, Zuordnen, Lückentext, Einsortieren, offene Fragen mit **KI-Korrektur** (mit Offline-Ersatz)
- **Inhalte aus dem eigenen Hefter** eingearbeitet (`data/hefter/`, in der App mit „📓 Hefter" markiert)
- **Abi-Training**: Prüfungs-Checkliste, Mix-Quiz, Zeitstrahl-Profi, offene Abi-Fragen, alle Karteikarten
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
