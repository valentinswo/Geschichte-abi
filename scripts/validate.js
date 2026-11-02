#!/usr/bin/env node
/*
 * Prüft alle Inhaltsdateien auf Fehler, bevor Netlify veröffentlicht.
 * Läuft automatisch bei jedem Pull Request (GitHub Action) und bei jedem Netlify-Deploy.
 * Lokal: node scripts/validate.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
const errors = [];
const warn = [];

const ctx = { window: {}, console };
ctx.window = ctx;
vm.createContext(ctx);
for (const s of scripts) {
  const file = path.join(root, s);
  if (!fs.existsSync(file)) { errors.push(`index.html bindet ${s} ein, aber die Datei fehlt.`); continue; }
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: s }); }
  catch (e) { errors.push(`${s}: Syntaxfehler – ${e.message}`); }
}

// Nicht eingebundene Themen-Dateien finden
for (const dir of ['data/themen', 'data/methoden', 'data/hefter']) {
  for (const f of fs.readdirSync(path.join(root, dir))) {
    if (f.endsWith('.js') && !f.startsWith('_') && !scripts.includes(`${dir}/${f}`)) errors.push(`${dir}/${f} ist nicht in index.html eingebunden.`);
  }
}

const ZR = ctx.ZR;
if (!ZR) { console.error('ZR nicht gefunden – registry.js fehlt?'); process.exit(1); }
(ZR.fehler || []).forEach(f => errors.push(f));
const personIds = new Set();
ZR.personen.forEach(p => {
  ['id', 'name', 'lebensdaten', 'geboren', 'rolle', 'ideologie', 'ziele', 'bedeutung'].forEach(k => { if (!p[k]) errors.push(`Person ${p.id || p.name}: Feld "${k}" fehlt.`); });
  if (personIds.has(p.id)) errors.push(`Person-ID doppelt: ${p.id}`);
  personIds.add(p.id);
});

function checkQuiz(where, quiz) {
  (quiz || []).forEach((q, i) => {
    const w = `${where}, Aufgabe ${i + 1} (${q.typ})`;
    switch (q.typ) {
      case 'mc':
        if (!Array.isArray(q.optionen) || q.optionen.length < 2) errors.push(`${w}: mindestens 2 Optionen nötig.`);
        [].concat(q.richtig).forEach(r => { if (!(r >= 0 && r < (q.optionen || []).length)) errors.push(`${w}: "richtig" verweist auf keine Option.`); });
        break;
      case 'wf': if (typeof q.richtig !== 'boolean') errors.push(`${w}: "richtig" muss true oder false sein.`); break;
      case 'zeitstrahl': (q.items || []).forEach(it => { if (typeof it.jahr !== 'number') errors.push(`${w}: "jahr" muss eine Zahl sein.`); }); if ((q.items || []).length < 3) errors.push(`${w}: mindestens 3 Ereignisse.`); break;
      case 'reihenfolge': if ((q.schritte || []).length < 3) errors.push(`${w}: mindestens 3 Schritte.`); break;
      case 'zuordnen': if ((q.paare || []).some(p => p.length !== 2)) errors.push(`${w}: jedes Paar braucht genau 2 Einträge.`); break;
      case 'lueckentext': if (!/\{[^}]+\|[^}]+\}/.test(q.text || '')) errors.push(`${w}: keine Lücke im Format {richtig|falsch} gefunden.`); break;
      case 'kategorien': if (Object.keys(q.kategorien || {}).length < 2) errors.push(`${w}: mindestens 2 Kategorien.`); break;
      case 'freitext': if (!(q.erwartung || []).length) errors.push(`${w}: "erwartung" (Erwartungshorizont) fehlt.`); if (!q.musterloesung) warn.push(`${w}: keine Musterlösung.`); break;
      default: errors.push(`${w}: unbekannter Aufgabentyp.`);
    }
    if (!q.frage && !q.aussage) errors.push(`${w}: "frage" bzw. "aussage" fehlt.`);
  });
}

const themaIds = new Set();
ZR.themen.forEach(t => {
  ['id', 'titel', 'kurz', 'untertitel', 'stufe', 'lehrplan', 'farbe', 'einleitung'].forEach(k => { if (!t[k]) errors.push(`Thema ${t.id}: Feld "${k}" fehlt.`); });
  if (themaIds.has(t.id)) errors.push(`Thema-ID doppelt: ${t.id}`);
  themaIds.add(t.id);
  (t.personen || []).forEach(pid => { if (!personIds.has(pid)) errors.push(`Thema ${t.id}: Person "${pid}" gibt es nicht in personen.js.`); });
  if (!(t.quiz || []).length) warn.push(`Thema ${t.id}: noch kein Quiz.`);
  checkQuiz(`Thema ${t.id}`, t.quiz);
});
Object.keys(ZR.uebersicht || {}).forEach(id => { if (!themaIds.has(id)) errors.push(`themen-uebersicht.js: Thema "${id}" existiert nicht.`); });
ZR.themen.forEach(t => { if (!(ZR.uebersicht || {})[t.id]) warn.push(`Thema ${t.id}: keine Zusammenfassung in data/themen-uebersicht.js.`); });
ZR.themen.filter(t => t.teile).forEach(t => {
  const ids = new Set(t.teile.map(x => x.id));
  [].concat(t.kapitel || [], t.schemata || [], t.begriffe || []).forEach(o => { if (o.teil && !ids.has(o.teil)) errors.push(`Thema ${t.id}: teil "${o.teil}" ist in "teile" nicht definiert.`); });
  t.teile.forEach(x => { if (!(x.von < x.bis)) errors.push(`Thema ${t.id}, Teil ${x.id}: "von" und "bis" (Jahre) fehlen.`); });
});
ZR.methoden.forEach(m => checkQuiz(`Methode ${m.id}`, m.uebung));
ZR.personen.forEach(p => (p.themen || []).forEach(tid => { if (!themaIds.has(tid)) errors.push(`Person ${p.id}: Thema "${tid}" existiert nicht.`); }));
ZR.zeitstrahl.epochen.concat(ZR.zeitstrahl.ereignisse).forEach(e => { if (e.thema && !themaIds.has(e.thema)) errors.push(`Zeitstrahl: Thema "${e.thema}" existiert nicht.`); });

const nQuiz = ZR.themen.reduce((s, t) => s + (t.quiz || []).length, 0) + ZR.methoden.reduce((s, m) => s + (m.uebung || []).length, 0);
console.log(`✓ ${ZR.themen.length} Themen · ${ZR.methoden.length} Methoden · ${ZR.personen.length} Personen · ${nQuiz} Aufgaben`);
warn.forEach(w => console.log('⚠ ' + w));
if (errors.length) { errors.forEach(e => console.error('✗ ' + e)); console.error(`\n${errors.length} Fehler gefunden – bitte korrigieren.`); process.exit(1); }
console.log('Alles in Ordnung.');
