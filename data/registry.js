/*
 * Zentrale Ablage aller Lerninhalte.
 * Jede Inhaltsdatei ruft ZR.thema({...}), ZR.methode({...}) oder ZR.person({...}) auf.
 * Ergänzungen aus dem eigenen Hefter: ZR.ergaenze('themen-id', {...}) – siehe data/hefter/
 * Aufbau eines Themas: siehe CONTRIBUTING.md und data/themen/_vorlage.js
 */
window.ZR = {
  themen: [],
  methoden: [],
  personen: [],
  fehler: [],
  zeitstrahl: { epochen: [], ereignisse: [] },
  thema(t) { this.themen.push(t); },
  methode(m) { this.methoden.push(m); },
  person(p) { this.personen.push(p); },

  /*
   * Ergänzt ein bestehendes Thema (oder eine Methode) um weitere Inhalte.
   * Alles, was so hinzukommt, wird in der App mit „📓 Hefter" markiert.
   *   kapitel / schemata / bloecke: Liste; pro Eintrag optional nach: 'Titel' oder vor: 'Titel' oder anfang: true
   *   zeitleiste, begriffe, quiz, uebung, abi, formulierungen, fehler, personen: werden angehängt
   *   notizen: ersetzt den Kasten „Aus dem Unterricht"
   *   entferneKapitel / entferneSchemata: Titel, die herausgenommen werden (z. B. weil sie in ein anderes Thema umgezogen sind)
   *   hefter: false  → kein Abzeichen (für reine Recherche-Ergänzungen)
   */
  ergaenze(id, e) {
    const t = this.themen.find(x => x.id === id) || this.methoden.find(x => x.id === id);
    if (!t) { this.fehler.push(`ZR.ergaenze: Thema/Methode "${id}" gibt es nicht.`); return; }
    const badge = e.hefter !== false;
    const mark = o => (o && typeof o === 'object' && !Array.isArray(o) && badge) ? Object.assign({ hefter: true }, o) : o;
    if (e.entferneKapitel) t.kapitel = (t.kapitel || []).filter(k => !e.entferneKapitel.includes(k.titel));
    if (e.entferneSchemata) t.schemata = (t.schemata || []).filter(k => !e.entferneSchemata.includes(k.titel));
    const insert = (arr, items, key) => items.forEach(it => {
      const m = mark(it);
      const anchor = it.nach || it.vor;
      if (anchor) {
        let i = arr.findIndex(x => x.titel === anchor);
        if (i < 0) { this.fehler.push(`ZR.ergaenze(${id}): "${anchor}" nicht gefunden (${key}).`); arr.push(m); return; }
        if (it.nach) { while (arr[i + 1] && arr[i + 1].nach === it.nach) i++; arr.splice(i + 1, 0, m); }
        else arr.splice(i, 0, m);
        return;
      }
      if (it.anfang) { arr.unshift(m); return; }
      arr.push(m);
    });
    ['kapitel', 'schemata', 'bloecke'].forEach(k => { if (e[k]) { t[k] = t[k] || []; insert(t[k], e[k], k); } });
    ['quiz', 'uebung', 'abi', 'formulierungen', 'fehler'].forEach(k => { if (e[k]) t[k] = (t[k] || []).concat(e[k].map(mark)); });
    if (e.begriffe) {
      t.begriffe = t.begriffe || [];
      e.begriffe.forEach(b => {
        const i = t.begriffe.findIndex(x => x.begriff.toLowerCase() === b.begriff.toLowerCase());
        if (i >= 0) t.begriffe[i] = mark(b); else t.begriffe.push(mark(b));
      });
    }
    if (e.zeitleiste) {
      const all = (t.zeitleiste || []).concat(e.zeitleiste.map(mark));
      const seen = new Set();
      t.zeitleiste = all.filter(z => { const k = z.jahr + '|' + z.text; if (seen.has(k)) return false; seen.add(k); return true; })
        .sort((a, b) => this.datumswert(a.jahr) - this.datumswert(b.jahr));
    }
    if (e.personen) t.personen = Array.from(new Set((t.personen || []).concat(e.personen)));
    if ('notizen' in e) t.notizen = e.notizen;
    if (e.einleitungErgaenzung) t.einleitung = (t.einleitung || []).concat(e.einleitungErgaenzung);
  },

  // '1948', '1948/49', 'März 1933', '28.2.1933' → sortierbare Zahl
  datumswert(j) {
    const s = String(j);
    const y = +(s.match(/\d{4}/) || [0])[0];
    const d = s.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*\d{4}/);
    if (d) return y + (+d[2] - 1) / 12 + (+d[1]) / 400;
    const MON = ['jan', 'feb', 'mär', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'];
    const m = MON.findIndex(n => s.toLowerCase().includes(n));
    return y + (m >= 0 ? m / 12 : 0);
  }
};
