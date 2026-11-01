/*
 * Zentrale Ablage aller Lerninhalte.
 * Jede Inhaltsdatei ruft ZR.thema({...}), ZR.methode({...}) oder ZR.person({...}) auf.
 * Aufbau eines Themas: siehe CONTRIBUTING.md und data/themen/_vorlage.js
 */
window.ZR = {
  themen: [],
  methoden: [],
  personen: [],
  zeitstrahl: { epochen: [], ereignisse: [] },
  thema(t) { this.themen.push(t); },
  methode(m) { this.methoden.push(m); },
  person(p) { this.personen.push(p); }
};
