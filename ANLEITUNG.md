# Anleitung: Zeitreise online stellen und pflegen

Diese Anleitung ist für dich, auch wenn du noch nie programmiert hast. Du brauchst etwa **30 Minuten** und zwei kostenlose Konten: **GitHub** (speichert den Code) und **Netlify** (stellt die App ins Internet).

---

## Schritt 1 · GitHub-Konto und Repository

1. Gehe auf <https://github.com> und erstelle ein kostenloses Konto.
2. Klicke oben rechts auf **+ → New repository**.
3. Name: z. B. `geschichte-abi`. Sichtbarkeit: **Public** oder **Private** (beides funktioniert mit Netlify).
4. **Kein** README, keine .gitignore, keine Lizenz anhaken – das Repository muss leer sein. → **Create repository**.

### Dateien hochladen – Variante A (am einfachsten, im Browser)

1. Entpacke die ZIP-Datei `geschichte-abi.zip` auf deinem Computer.
2. Auf der Seite deines neuen, leeren Repositorys auf **„uploading an existing file"** klicken.
3. **Den Inhalt** des entpackten Ordners (nicht den Ordner selbst) in das Browserfenster ziehen. Wichtig: Auch die Ordner `.github`, `css`, `data`, `icons`, `js`, `netlify`, `scripts` müssen mit.
   - Tipp Mac: Versteckte Ordner wie `.github` im Finder mit **Cmd + Shift + .** sichtbar machen.
4. Unten **Commit changes** klicken.

### Variante B (mit GitHub Desktop, empfohlen für später)

1. [GitHub Desktop](https://desktop.github.com) installieren und anmelden.
2. **File → Add local repository** → den entpackten Ordner wählen (er enthält schon eine Git-Historie).
3. **Publish repository** klicken – fertig.

---

## Schritt 2 · Mit Netlify veröffentlichen

1. Gehe auf <https://app.netlify.com> und melde dich **mit deinem GitHub-Konto** an.
2. **Add new site → Import an existing project → GitHub** → dein Repository `geschichte-abi` auswählen.
3. Die Einstellungen werden automatisch aus `netlify.toml` gelesen. Einfach **Deploy** klicken.
4. Nach ca. einer Minute ist die App online, z. B. unter `https://zufaelliger-name-123.netlify.app`.
5. Schöneren Namen wählen: **Site configuration → Change site name** → z. B. `zeitreise-geschichte` → Adresse wird `https://zeitreise-geschichte.netlify.app`.

**Jeder mit dem Link kann die App jetzt nutzen** – ohne Anmeldung.

---

## Schritt 3 · Link und QR-Code zum Weitergeben

Öffne in deiner App: **`https://DEIN-NAME.netlify.app/qr`**

Dort findest du ein fertiges Blatt mit:
- großem **QR-Code** (als PNG speicherbar),
- dem **Link** zum Kopieren,
- der **Anleitung für den Homebildschirm** (iPhone und Android).

Über **„Drucken / als PDF speichern"** bekommst du eine PDF-Datei, die du per Mail, Messenger oder ausgedruckt weitergeben kannst. Der QR-Code erzeugt sich automatisch mit der richtigen Adresse – auch wenn du den Namen der Seite später änderst.

---

## Schritt 4 · KI-Korrektur einschalten (optional)

Die offenen Fragen werden auch **ohne KI** korrigiert (über Schlüsselbegriffe und Musterlösung). Für eine echte KI-Rückmeldung:

1. Konto auf <https://console.anthropic.com> anlegen und unter **API Keys** einen Schlüssel erstellen. Ein kleines Guthaben aufladen und im Konto ein **monatliches Ausgabenlimit** setzen.
2. In Netlify: **Site configuration → Environment variables → Add a variable**
   - Key: `ANTHROPIC_API_KEY`
   - Value: dein Schlüssel
3. Optional `AI_MODEL` setzen (Standard: `claude-haiku-5-5`, schnell und günstig).
4. **Deploys → Trigger deploy → Deploy site**.

Der Schlüssel liegt nur bei Netlify und ist für niemanden in der App sichtbar. Die Funktion begrenzt Anfragen pro Gerät, damit niemand dein Guthaben leer klickt.

> **Datenschutz-Hinweis:** Antworten der Schüler:innen werden zur Korrektur an den KI-Anbieter übermittelt. Die App sammelt keine Namen und speichert keinen Lernstand auf dem Server (nur lokal im Browser). Wenn du die App offiziell in der Schule einsetzt, kläre die Nutzung der KI-Korrektur vorher mit der Schulleitung bzw. dem Datenschutzbeauftragten.

---

## Schritt 5 · Änderungen über Pull Requests

So änderst du Inhalte, ohne die laufende App zu gefährden:

1. Im Repository auf GitHub die Datei öffnen, z. B. `data/themen/06-weimar.js`.
2. Auf den **Stift ✏️ (Edit)** klicken und den Text ändern.
3. Unten **„Commit changes…"** → **„Create a new branch for this commit and start a pull request"** wählen → **Propose changes** → **Create pull request**.
4. Jetzt passiert automatisch:
   - Eine **Prüfung** (GitHub Action „Inhalte prüfen") testet, ob alles korrekt formatiert ist. ✅ oder ❌ erscheint im Pull Request.
   - Netlify baut eine **Vorschau (Deploy Preview)** mit eigenem Link – dort siehst du die Änderung, bevor sie live geht.
5. Passt alles: **Merge pull request** → nach ca. einer Minute ist die Änderung für alle sichtbar.

### Den Hauptzweig schützen (empfohlen)

Damit Änderungen **nur** über Pull Requests möglich sind:
**Settings → Branches → Add branch ruleset** (bzw. „Add rule") → Branch `main` → **Require a pull request before merging** und **Require status checks to pass** (Check „Inhalte prüfen" auswählen) aktivieren → speichern.

---

## Häufige Fragen

**Die App zeigt nach einem Update noch alte Inhalte.** – Die App speichert sich für den Offline-Betrieb. Einmal neu laden (bzw. App schließen und wieder öffnen) genügt.

**Kostet das etwas?** – GitHub und Netlify sind für dieses Projekt kostenlos. Nur die optionale KI-Korrektur verursacht geringe Kosten pro Antwort.

**Ich möchte meine eigenen Notizen einbauen.** – Jedes Thema hat das Feld `notizen` (siehe `CONTRIBUTING.md`). Oder schick sie an Claude und lass dir einen Pull Request vorbereiten.
