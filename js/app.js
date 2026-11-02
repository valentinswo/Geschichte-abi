/* Zeitreise – App-Logik: Navigation, Seiten, Suche, Theme. */
(function () {
  const { md, esc } = Quiz;
  const $ = (s, el = document) => el.querySelector(s);
  const main = () => document.getElementById('main');
  const T = () => ZR.themen;
  const findThema = id => ZR.themen.find(t => t.id === id);
  const findPerson = id => ZR.personen.find(p => p.id === id);
  const findMethode = id => ZR.methoden.find(m => m.id === id);
  const paras = arr => (arr || []).map(p => `<p>${md(p)}</p>`).join('');
  const HB = o => o && o.hefter ? ' <span class="pill hefter" title="Aus deinem Hefter">📓 Hefter</span>' : '';
  const readBtn = label => TTS.supported ? `<button class="read-btn" data-read="${esc(label)}">🔊 Vorlesen</button>` : '';

  const App = {
    toast(msg) {
      const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
      clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
    }
  };
  window.App = App;

  /* ---------- Theme hell/dunkel ---------- */
  function currentTheme() {
    return document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    App.toast(next === 'dark' ? 'Dunkler Modus' : 'Heller Modus');
  }

  /* ---------- Reiterleiste ---------- */
  const NAV = [['#/', 'Start'], ['#/themen', 'Themen'], ['#/zeitstrahl', 'Zeitstrahl'], ['#/methoden', 'Methoden'], ['#/personen', 'Personen'], ['#/abi', 'Abi-Training']];
  function renderTabs(route) {
    const nav = document.getElementById('tabs');
    nav.innerHTML = NAV.map(it => `<a class="tab" href="${it[0]}" ${isActive(it[0], route) ? 'aria-current="page"' : ''}>${esc(it[1])}</a>`).join('');
    const act = nav.querySelector('[aria-current]');
    if (act) act.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
  function isActive(href, route) {
    const r = '#/' + route.join('/');
    if (href === '#/') return route[0] === '' || route.length === 0 || route[0] === 'installieren';
    if (href === '#/themen') return route[0] === 'themen' || route[0] === 'thema';
    if (href === '#/methoden') return route[0] === 'methoden' || route[0] === 'methode';
    if (href === '#/personen') return route[0] === 'personen' || route[0] === 'person';
    return r === href || r.startsWith(href + '/');
  }

  /* ---------- Startseite: ruhig, erklärend ---------- */
  function pageStart() {
    return `
      <section class="intro">
        <p class="kicker">Geschichte · Klasse 10 bis Abitur · Sachsen</p>
        <h1>Willkommen bei Zeitreise</h1>
        <p class="lead">Diese App begleitet dich durch den Geschichtsstoff von Klasse 10 bis zur Abiturprüfung – nach dem sächsischen Lehrplan und ergänzt um die Aufzeichnungen aus deinem Hefter. Du kannst in deinem Tempo lernen, wiederholen und dich selbst prüfen.</p>
      </section>

      <section class="prose calm">
        <h2>Was dich erwartet</h2>
        <dl class="explain">
          <dt>Themen</dt><dd>Alle zwölf Lehrplanthemen, geordnet nach Klasse 10 und den Lernbereichen der Oberstufe. Jedes Thema beginnt mit einer kurzen Zusammenfassung und hat dieselben Bereiche: <i>Lernen</i>, <i>Schemata</i>, <i>Zeitleiste</i>, <i>Begriffe</i> und <i>Quiz</i>.</dd>
          <dt>Zeitstrahl</dt><dd>Der große Überblick von 1789 bis heute. Hilfreich, um Ereignisse einzuordnen und Zusammenhänge zwischen den Themen zu sehen.</dd>
          <dt>Methoden</dt><dd>Wie du Textquellen, Karikaturen, Bildquellen und Statistiken bearbeitest – und wie ein begründetes Sach- und Werturteil aufgebaut ist.</dd>
          <dt>Personen</dt><dd>Steckbriefe der wichtigsten Persönlichkeiten mit Lebensdaten, Überzeugungen, Zielen und Bedeutung.</dd>
          <dt>Abi-Training</dt><dd>Gemischte Aufgaben aus allen Themen und eine Checkliste, mit der du vor der Prüfung abhakst, was du sicher kannst.</dd>
        </dl>
      </section>

      <section class="prose calm">
        <h2>So lernst du mit der App</h2>
        <ol class="calm-steps">
          <li><b>Ein Thema auswählen.</b> Oben unter <i>Themen</i> findest du alle Themen mit einer kurzen Zusammenfassung. Nimm dir immer nur eines vor.</li>
          <li><b>Verstehen.</b> Lies im Bereich <i>Lernen</i> zuerst den Überblick, danach die Kapitel. Mit „Vorlesen" kannst du dir die Texte auch anhören.</li>
          <li><b>Zusammenhänge sehen.</b> Die <i>Schemata</i> zeigen Ursachen, Abläufe und Folgen, die <i>Zeitleiste</i> die wichtigsten Daten.</li>
          <li><b>Begriffe festigen.</b> Unter <i>Begriffe</i> wiederholst du die Fachwörter – auch als Karteikarten.</li>
          <li><b>Dich prüfen.</b> Das <i>Quiz</i> am Ende zeigt dir, was schon sitzt. Offene Fragen werden von einer KI korrigiert.</li>
          <li><b>Vor der Prüfung.</b> Übe parallel die <i>Methoden</i> und nutze das <i>Abi-Training</i>, um alles zu verknüpfen.</li>
        </ol>
      </section>

      <section class="prose calm">
        <h2>Gut zu wissen</h2>
        <ul class="points">
          <li>Mit dem Mond-Symbol oben rechts wechselst du zwischen hellem und dunklem Modus, mit der Lupe suchst du nach Begriffen, Personen oder Jahreszahlen.</li>
          <li>Inhalte aus deinem eigenen Hefter sind mit <span class="pill hefter">📓 Hefter</span> markiert.</li>
          <li>Dein Fortschritt wird nur auf diesem Gerät gespeichert – es gibt kein Konto.</li>
          <li>Du kannst die App wie eine normale App auf den Homebildschirm legen: <a href="#/installieren">so geht's</a>.</li>
        </ul>
        <details class="quiet"><summary>Das Abitur in Sachsen – kurz erklärt</summary>${paras(ABI_INFO)}
          <p class="small muted">Stand: Lehrplan Gymnasium Geschichte Sachsen (2019). Termine und Details regelt jedes Jahr die „VwV Abiturprüfung" – frag im Zweifel deine Lehrkraft.</p></details>
      </section>

      <div class="start-cta"><a class="btn primary" href="#/themen">Zu den Themen</a></div>
      ${footer()}`;
  }
  const ABI_INFO = [
    'In der Oberstufe (Jahrgangsstufen 11/12) wird Geschichte als **Grundkurs** oder **Leistungskurs** unterrichtet. Der Grundkurs umfasst vier Lernbereiche: die Grundlegung der modernen Gesellschaft (Industrialisierung, Liberalismus/Nationalismus, Kaiserreich), Demokratie und Diktatur in der ersten und in der zweiten Hälfte des 20. Jahrhunderts sowie die „Herausforderung Frieden". Dazu kommt ein Wahlbereich, meist zur Geschichtskultur.',
    'Klasse 10 ist die Vorbereitungsphase: Der Ost-West-Konflikt, die doppelte deutsche Staatsgründung und die Friedliche Revolution sind Grundlagen, auf die die Oberstufe direkt aufbaut.',
    'Im Abitur bekommst du **Materialien** (Textquellen, Karikaturen, Bilder, Statistiken, Darstellungen) und Aufgaben mit **Operatoren** aus drei Anforderungsbereichen: **AFB I** Wiedergeben, **AFB II** Erklären und Analysieren, **AFB III** Urteilen. Ohne sichere Methoden und begründete Urteile gibt es keine Spitzenpunkte.'
  ];

  /* ---------- Themen-Übersicht mit Zusammenfassungen ---------- */
  const GRUPPEN = [
    ['Klasse 10', 'Vorbereitung auf die Oberstufe', t => t.stufe === 'Klasse 10'],
    ['Lernbereich 1', 'Die Grundlegung der modernen Gesellschaft', t => /LB 1\b/.test(t.lehrplan) && t.stufe !== 'Klasse 10'],
    ['Lernbereich 2', 'Demokratie und Diktatur in der ersten Hälfte des 20. Jahrhunderts', t => /LB 2\b/.test(t.lehrplan) && t.stufe !== 'Klasse 10'],
    ['Lernbereich 3', 'Demokratie und Diktatur in der zweiten Hälfte des 20. Jahrhunderts', t => /LB 3\b/.test(t.lehrplan) && t.stufe !== 'Klasse 10'],
    ['Lernbereich 4', 'Herausforderung „Frieden"', t => /LB 4\b/.test(t.lehrplan) && t.stufe !== 'Klasse 10'],
    ['Wahlbereich', 'Geschichtskultur', t => /Wahl/.test(t.lehrplan)]
  ];
  function pageThemen() {
    const used = new Set();
    const groups = GRUPPEN.map(([k, titel, f]) => { const list = T().filter(t => !used.has(t.id) && f(t)); list.forEach(t => used.add(t.id)); return [k, titel, list]; });
    const rest = T().filter(t => !used.has(t.id));
    if (rest.length) groups.push(['Weitere Themen', '', rest]);
    return `<h1>Themen</h1>
      <p class="lead muted">Hier siehst du alle Themen mit einer kurzen Zusammenfassung. Wähle eines aus und arbeite es in Ruhe von oben nach unten durch.</p>
      ${groups.filter(g => g[2].length).map(([k, titel, list]) => `
        <section class="topic-group">
          <h2><span class="group-kicker">${esc(k)}${list[0].stufe !== 'Klasse 10' ? ' · Grundkurs 11/12' : ''}</span>${esc(titel)}</h2>
          ${list.map(topicRow).join('')}
        </section>`).join('')}
      ${footer()}`;
  }
  function topicRow(t) {
    const u = (ZR.uebersicht || {})[t.id] || {};
    const p = Quiz.Progress.get('thema-' + t.id);
    return `<article class="topic" style="--c:${t.farbe}">
      <h3><a href="#/thema/${t.id}">${esc(t.titel)}</a></h3>
      <p>${md(u.kern || t.untertitel)}</p>
      ${t.teile ? `<p class="topic-parts">${t.teile.map(p => `<a href="#/thema/${t.id}/lernen/${p.id}">${esc(p.titel)} <span class="muted">${esc(p.jahre || '')}</span></a>`).join('')}</p>` : ''}
      ${u.leitfrage ? `<p class="leitfrage"><span>Leitfrage</span> ${md(u.leitfrage)}</p>` : ''}
      <p class="topic-meta">${p ? `Quiz: bestes Ergebnis ${p.best} %` : 'Quiz noch offen'} · <a href="#/thema/${t.id}">Thema öffnen →</a></p>
    </article>`;
  }

  /* ---------- Orientierender Zeitstrahl ---------- */
  // Nicht-linearer Maßstab: 19. Jh. gestaucht, 20. Jh. gedehnt (dort passiert im Lehrplan am meisten)
  const TL_PAD = 70, TL_START = 1789, TL_MID = 1900, TL_END = 2025, PX_EARLY = 5.5, PX_LATE = 21;
  const x = y => TL_PAD + (y <= TL_MID ? (y - TL_START) * PX_EARLY : (TL_MID - TL_START) * PX_EARLY + (y - TL_MID) * PX_LATE);
  const TL_W = x(TL_END) + TL_PAD;
  function timelineHTML(filter) {
    const ep = ZR.zeitstrahl.epochen;
    const sorted = ZR.zeitstrahl.ereignisse.filter(e => !filter || e.thema === filter).slice().sort((a, b) => a.jahr - b.jahr);
    const years = []; for (let y = 1800; y < 1900; y += 20) years.push(y); for (let y = 1900; y <= 2020; y += 10) years.push(y);
    // Ebenen: 0 = oben nah, 1 = unten nah, 2 = oben fern, 3 = unten fern
    const last = [-1e9, -1e9, -1e9, -1e9], GAP = 116;
    const evHTML = sorted.map((e, i) => {
      const t = findThema(e.thema), px = x(e.jahr), c = t ? t.farbe : 'var(--accent)';
      let lvl = [0, 1, 2, 3].find(l => px - last[l] >= GAP);
      if (lvl === undefined) lvl = last.indexOf(Math.min(...last));
      last[lvl] = px;
      const up = lvl % 2 === 0;
      const stemTop = up ? (lvl === 0 ? 152 : 88) : 168, stemH = up ? 160 - stemTop : (lvl === 1 ? 77 : 140);
      return `<div class="tl-stem" style="left:${px}px;top:${stemTop}px;height:${stemH}px"></div><div class="tl-pin" style="left:${px}px;--c:${c}"></div>
        <div class="tl-ev ${up ? 'up' : 'down'} l${lvl}" style="left:${px}px;--c:${c}"><button data-ev="${i}" aria-label="${esc(e.jahr + ': ' + e.text)}"><span class="yr">${esc(e.label || e.jahr)}</span>${esc(e.text)}</button></div>`;
    }).join('');
    const epHTML = ep.map((e, i) => {
      const t = findThema(e.thema), row = e.reihe ?? i % 2;
      return `<a class="tl-epoch" href="${t ? '#/thema/' + t.id : '#/'}" title="${esc(e.titel)} (${e.von}–${e.bis})" style="left:${x(e.von)}px;width:${Math.max(x(e.bis) - x(e.von) - 3, 30)}px;--c:${e.farbe || (t && t.farbe)};top:${row ? 194 : 168}px">${esc(e.titel)}</a>`;
    }).join('');
    setTimeout(() => {
      document.querySelectorAll('.timeline:not([data-bound])').forEach(tl => {
        tl.dataset.bound = '1';
        tl.addEventListener('click', e => {
          const b = e.target.closest('[data-ev]');
          tl.querySelectorAll('.tl-pop').forEach(p => p.remove());
          if (!b) return;
          const ev = sorted[+b.dataset.ev]; const th = findThema(ev.thema);
          const pop = document.createElement('div'); pop.className = 'tl-pop';
          pop.style.left = Math.min(Math.max(x(ev.jahr) - 125, 4), TL_W - 254) + 'px';
          pop.style.top = b.closest('.tl-ev').classList.contains('up') ? '200px' : '20px';
          pop.innerHTML = `<b>${esc(ev.label || ev.jahr)} · ${esc(ev.text)}</b><p style="margin:.3rem 0">${md(ev.detail || '')}</p>${th ? `<a href="#/thema/${th.id}">→ ${esc(th.titel)}</a>` : ''}`;
          tl.appendChild(pop);
        });
      });
      // Auf mobilen Geräten zur Zeit ab 1900 scrollen
      document.querySelectorAll('.timeline-wrap:not([data-scrolled])').forEach(w => { w.dataset.scrolled = '1'; if (w.clientWidth < 700) w.scrollLeft = x(1912); });
    });
    return `<div class="timeline-wrap"><div class="timeline" role="region" aria-label="Zeitstrahl 1789 bis heute" style="width:${TL_W}px">
      <div class="tl-axis"></div>${years.map(y => `<div class="tl-tick" style="left:${x(y)}px"></div><div class="tl-year" style="left:${x(y)}px">${y}</div>`).join('')}
      ${epHTML}${evHTML}</div></div>
      <p class="small muted">Hinweis: Das 19. Jahrhundert ist gestaucht dargestellt, damit das 20. Jahrhundert genug Platz hat. Tippe auf ein Ereignis für Details.</p>`;
  }
  function pageZeitstrahl() {
    const all = T();
    const evs = all.flatMap(t => (t.zeitleiste || []).map(e => ({ ...e, t })));
    evs.sort((a, b) => ZR.datumswert(a.jahr) - ZR.datumswert(b.jahr));
    return `<h1>Zeitstrahl</h1>
      <p class="muted">Oben der Überblick mit allen Epochen, darunter alle Ereignisse aus allen Themen in zeitlicher Reihenfolge.</p>
      ${timelineHTML()}
      <div class="row" style="margin:.5rem 0 1rem"><a class="btn sm" href="#/abi/zeitstrahl">🎯 Zeitstrahl-Training starten</a></div>
      <h2>Alle Ereignisse</h2>
      <div class="filter-row" id="tlFilter"><button class="chip" aria-pressed="true" data-f="">Alle</button>${all.map(t => `<button class="chip" aria-pressed="false" data-f="${t.id}">${esc(t.kurz)}</button>`).join('')}</div>
      <ul class="mini-tl" id="tlList">${evs.map(e => `<li data-t="${e.t.id}" style="--c:${e.t.farbe}"><span class="y">${esc(e.jahr)}</span><span>${md(e.text)} <a class="small" href="#/thema/${e.t.id}">${esc(e.t.kurz)}</a></span></li>`).join('')}</ul>
      ${footer()}`;
  }

  /* ---------- Themenseite ---------- */
  const THEMA_TABS = [['lernen', 'Lernen'], ['schema', 'Schemata'], ['zeitleiste', 'Zeitleiste'], ['begriffe', 'Begriffe'], ['quiz', 'Quiz']];
  // Themen mit "teile" (z. B. Weltkriege) werden in eigene Reiter getrennt
  function teilAnsicht(t, teilId) {
    const teil = (t.teile || []).find(x => x.id === teilId) || (t.teile || [])[0];
    if (!teil) return t;
    const passt = o => !o.teil || o.teil === teil.id;
    const imZeitraum = e => { const y = ZR.datumswert(e.jahr); return y >= teil.von && y < teil.bis + 1; };
    return { ...t, _teil: teil, einleitung: teil.einleitung || t.einleitung,
      kapitel: (t.kapitel || []).filter(passt), schemata: (t.schemata || []).filter(passt),
      begriffe: (t.begriffe || []).filter(passt), zeitleiste: (t.zeitleiste || []).filter(imZeitraum) };
  }
  function pageThema(id, tab = 'lernen', teilId) {
    let t = findThema(id); if (!t) return notFound();
    const i = T().indexOf(t), prev = T()[i - 1], next = T()[i + 1];
    const activeTab = tab === 'karten' ? 'begriffe' : tab;
    const sfx = t.teile && teilId && tab !== 'quiz' ? '/' + teilId : '';
    const tv = t.teile && tab !== 'quiz' ? teilAnsicht(t, teilId) : t;
    return `<a href="#/themen" class="small back">← Alle Themen</a>
      <div class="theme-head" style="--c:${t.farbe}">
        <p class="theme-meta">${esc(t.stufe)} · Lehrplan ${esc(t.lehrplan)}</p>
        <h1>${esc(t.titel)}</h1><p class="muted" style="margin:0">${esc(t.untertitel)}</p>
      </div>
      ${t.teile ? `<nav class="parts" aria-label="Teile des Themas">${t.teile.map((p, n) => `<a href="#/thema/${t.id}/${tab === 'quiz' || tab === 'karten' ? 'lernen' : tab}/${p.id}" ${tab !== 'quiz' && (teilId === p.id || (!teilId && n === 0)) ? 'aria-current="page"' : ''}><b>${esc(p.titel)}</b><span>${esc(p.jahre || '')}</span></a>`).join('')}</nav>` : ''}
      <nav class="subtabs" aria-label="Bereiche des Themas">${THEMA_TABS.map(([k, l]) => `<a class="subtab" href="#/thema/${t.id}/${k}${sfx}" ${k === activeTab ? 'aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
      <div id="tabBody">${themaTab(tv, tab, sfx)}</div>
      <nav class="pager" aria-label="Weitere Themen">
        ${prev ? `<a href="#/thema/${prev.id}"><span>← Vorheriges Thema</span>${esc(prev.titel)}</a>` : '<span></span>'}
        ${next ? `<a class="next" href="#/thema/${next.id}"><span>Nächstes Thema →</span>${esc(next.titel)}</a>` : ''}
      </nav>
      ${footer()}`;
  }
  function nextStep(t, tab, sfx = '') {
    const i = THEMA_TABS.findIndex(([k]) => k === tab), n = THEMA_TABS[i + 1];
    if (!n) return '';
    if (n[0] === 'quiz' && t._teil) {
      const nt = t.teile[t.teile.indexOf(t._teil) + 1];
      if (nt) return `<div class="next-step"><a class="btn" href="#/thema/${t.id}/lernen/${nt.id}">Weiter: ${esc(nt.titel)} →</a></div>`;
      sfx = '';
    }
    return `<div class="next-step"><a class="btn" href="#/thema/${t.id}/${n[0]}${n[0] === 'quiz' ? '' : sfx}">Weiter: ${n[1]} →</a></div>`;
  }
  function themaTab(t, tab, sfx = '') {
    switch (tab) {
      case 'lernen': {
        const pers = (t.personen || []).map(findPerson).filter(Boolean);
        return `
        <section class="prose" data-readable="Überblick: ${esc(t.titel)}"><div class="section-title"><h2 style="margin-top:0">Überblick</h2>${readBtn('Überblick: ' + t.titel)}</div>${paras(t.einleitung)}</section>
        <h2>Kapitel</h2>
        <p class="muted small">Tippe ein Kapitel an, um es aufzuklappen.</p>
        <div class="chapters">${(t.kapitel || []).map((k, n) => `<details class="chapter">
          <summary><span class="num">${n + 1}</span><span>${esc(k.titel)}${HB(k)}</span></summary>
          <div class="chapter-body prose" data-readable="${esc(k.titel)}"><div class="section-title"><span></span>${readBtn(k.titel)}</div>
          ${paras(k.text)}${k.punkte ? `<ul class="points">${k.punkte.map(p => `<li>${md(p)}</li>`).join('')}</ul>` : ''}
          ${k.merke ? `<div class="callout"><h3>Merke</h3>${md(k.merke)}</div>` : ''}</div></details>`).join('')}</div>
        ${t.abi ? `<div class="callout abi"><h3>Abi-Tipps zu diesem Thema</h3><ul>${t.abi.map(a => `<li>${md(a)}</li>`).join('')}</ul></div>` : ''}
        ${t.notizen ? `<div class="callout"><h3>📓 Aus dem Unterricht</h3>${paras(t.notizen)}</div>` : ''}
        ${pers.length ? `<h2>Wichtige Personen</h2><ul class="person-list">${pers.map(p => `<li><a href="#/person/${p.id}">${esc(p.name)}</a> <span class="muted small">${esc(p.lebensdaten)} · ${esc(p.rolle)}</span></li>`).join('')}</ul>` : ''}
        ${nextStep(t, 'lernen', sfx)}`;
      }
      case 'schema': return ((t.schemata || []).map(schemaHTML).join('') || '<p class="muted">Noch keine Schemata.</p>') + nextStep(t, 'schema', sfx);
      case 'zeitleiste': return `<ul class="mini-tl" style="--c:${t.farbe}">${(t.zeitleiste || []).map(e => `<li><span class="y">${esc(e.jahr)}</span><span>${md(e.text)}${e.hefter ? ' <small title="Aus deinem Hefter">📓</small>' : ''}</span></li>`).join('')}</ul>` + nextStep(t, 'zeitleiste', sfx);
      case 'begriffe': return `<div class="row between"><p class="muted" style="margin:0">Tippe einen Begriff an, um die Erklärung zu sehen.</p><a class="btn sm" href="#/thema/${t.id}/karten${sfx}">Als Karteikarten üben</a></div>
        <div class="terms">${(t.begriffe || []).map(b => `<details class="term"><summary>${esc(b.begriff)}${b.hefter ? ' 📓' : ''}</summary><p>${md(b.erklaerung)}</p></details>`).join('')}</div>` + nextStep(t, 'begriffe', sfx);
      case 'karten': return `<p><a class="small" href="#/thema/${t.id}/begriffe${sfx}">← zurück zur Begriffsliste</a></p><div id="fcBox"></div>`;
      case 'quiz': return `<p class="muted">${t.teile ? 'Gemeinsames ' : ''}Abschluss-Quiz mit ${(t.quiz || []).length} Aufgaben. Dein bestes Ergebnis wird auf diesem Gerät gespeichert.</p><div id="quizBox"></div>`;
      case 'personen': return themaTab(t, 'lernen', sfx);
    }
    return '';
  }
  function schemaHTML(s) {
    const H = `<h2>${esc(s.titel)}${HB(s)}</h2>`;
    if (s.typ === 'ursache') return `${H}${s.text ? `<p class="muted">${md(s.text)}</p>` : ''}
      <div class="causal"><div class="col"><h3>Ursachen / Voraussetzungen</h3>${s.ursachen.map(u => `<div class="box">${md(u)}</div>`).join('')}</div>
      <div class="arrow">➜</div><div class="event">${md(s.ereignis)}</div><div class="arrow">➜</div>
      <div class="col"><h3>Folgen</h3>${s.folgen.map(u => `<div class="box">${md(u)}</div>`).join('')}</div></div>`;
    if (s.typ === 'vergleich') return `${H}${s.text ? `<p class="muted">${md(s.text)}</p>` : ''}
      <div class="table-scroll"><table class="compare"><thead><tr>${s.spalten.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
      <tbody>${s.zeilen.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th>${md(c)}</th>` : `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return `${H}${s.text ? `<p class="muted">${md(s.text)}</p>` : ''}
      <div class="flow ${s.horizontal ? 'h' : ''}">${s.schritte.map((st, i) => `${i ? '<div class="flow-arrow" aria-hidden="true">↓</div>' : ''}<div class="flow-step ${st.hl ? 'hl' : ''}"><b>${md(st.t)}</b>${st.d ? `<span>${md(st.d)}</span>` : ''}</div>`).join('')}</div>`;
  }
  function afterThema(t, tab) {
    if (tab === 'quiz') Quiz.run(document.getElementById('quizBox'), t.quiz || [], { id: 'thema-' + t.id, backHref: `#/thema/${t.id}` });
    if (tab === 'karten') {
      const cards = (t.begriffe || []).map(b => ({ vorne: b.begriff, hinten: b.erklaerung }))
        .concat((t.zeitleiste || []).filter(e => e.karte !== false).slice(0, 12).map(e => ({ vorne: e.jahr, hinten: e.text })));
      Quiz.flashcards(document.getElementById('fcBox'), cards, t._teil ? t._teil.titel : t.titel);
    }
  }

  /* ---------- Personen ---------- */
  function initials(n) { return n.split(/\s+/).filter(w => /^[A-ZÄÖÜ]/.test(w)).map(w => w[0]).slice(0, 2).join(''); }
  function personCard(p) {
    const th = findThema((p.themen || [])[0]);
    return `<a class="card person-card" href="#/person/${p.id}" style="--c:${th ? th.farbe : 'var(--teal)'}">
      <div class="avatar">${esc(initials(p.name))}</div><h3 style="margin:.3rem 0 0">${esc(p.name)}</h3>
      <span class="small muted">${esc(p.lebensdaten)}</span><span class="small">${esc(p.rolle)}</span></a>`;
  }
  function pagePersonen() {
    return `<h1>Persönlichkeiten</h1><p class="muted">Steckbriefe mit Lebensdaten, Überzeugungen, Zielen und Bedeutung. Filter nach Thema:</p>
      <div class="filter-row" id="pFilter"><button class="chip" aria-pressed="true" data-f="">Alle</button>${T().filter(t => ZR.personen.some(p => (p.themen || []).includes(t.id))).map(t => `<button class="chip" aria-pressed="false" data-f="${t.id}">${esc(t.kurz)}</button>`).join('')}</div>
      <div class="grid" id="pGrid">${ZR.personen.slice().sort((a, b) => a.geboren.localeCompare(b.geboren)).map(p => personCard(p).replace('<a ', `<a data-t="${(p.themen || []).join(' ')}" `)).join('')}</div>
      <div class="row" style="margin-top:1rem"><a class="btn" href="#/abi/personen">🃏 Personen-Karteikarten</a></div>${footer()}`;
  }
  function pagePerson(id) {
    const p = findPerson(id); if (!p) return notFound();
    const th = (p.themen || []).map(findThema).filter(Boolean);
    return `<a href="#/personen" class="small">← alle Persönlichkeiten</a>
      <div class="card steckbrief" style="margin-top:.6rem;--c:${th[0] ? th[0].farbe : 'var(--teal)'}" data-readable="${esc(p.name)}">
        <div class="row"><div class="avatar" style="width:72px;height:72px;font-size:1.6rem">${esc(initials(p.name))}</div>
        <div><h1 style="margin:0">${esc(p.name)}</h1><div class="muted">${esc(p.rolle)}</div></div><span style="margin-left:auto">${readBtn(p.name)}</span></div>
        <dl>
          <dt>Geboren</dt><dd>${esc(p.geboren_text || p.geboren)}${p.geburtsort ? ' in ' + esc(p.geburtsort) : ''}</dd>
          <dt>Gestorben</dt><dd>${esc(p.gestorben_text || p.gestorben || '–')}${p.sterbeort ? ' in ' + esc(p.sterbeort) : ''}</dd>
          <dt>Ideologie / Überzeugungen</dt><dd>${md(p.ideologie)}</dd>
          <dt>Persönliche Ziele</dt><dd>${md(p.ziele)}</dd>
          <dt>Wichtige Stationen</dt><dd><ul class="points" style="margin:0">${(p.stationen || []).map(s => `<li>${md(s)}</li>`).join('')}</ul></dd>
          <dt>Bedeutung</dt><dd>${md(p.bedeutung)}</dd>
          ${p.zitat ? `<dt>Zitat</dt><dd><em>„${esc(p.zitat)}"</em></dd>` : ''}
          ${p.urteil ? `<dt>Zum Urteilen</dt><dd>${md(p.urteil)}</dd>` : ''}
        </dl>
        ${th.length ? `<div class="row">${th.map(t => `<a class="btn sm" href="#/thema/${t.id}">→ ${esc(t.titel)}</a>`).join('')}</div>` : ''}
      </div>${footer()}`;
  }

  /* ---------- Methoden ---------- */
  function pageMethoden() {
    return `<h1>Methoden & Urteilen</h1>
      <p class="lead muted">Im Abitur zählt nicht nur, was du weißt, sondern wie du mit Materialien arbeitest und ob du begründet urteilen kannst. Hier lernst du die Schritte – mit Beispielen und Übungen.</p>
      <div class="grid">${ZR.methoden.map(m => `<a class="card theme-card" href="#/methode/${m.id}" style="--c:${m.farbe || 'var(--teal)'}"><span class="pill teal">${esc(m.kategorie)}</span><h3>${esc(m.titel)}</h3><p>${esc(m.untertitel)}</p>
        <span class="small muted">${Quiz.Progress.get('methode-' + m.id) ? 'Übung: ' + Quiz.Progress.get('methode-' + m.id).best + '%' : 'Übung offen'}</span></a>`).join('')}</div>${footer()}`;
  }
  function pageMethode(id, tab = 'anleitung') {
    const m = findMethode(id); if (!m) return notFound();
    const tabs = [['anleitung', 'Anleitung'], ['beispiel', 'Beispiel'], ['uebung', 'Übung ✓']].filter(([k]) => k !== 'beispiel' || m.beispiel);
    let body = '';
    if (tab === 'anleitung') body = `
      <section class="prose" data-readable="${esc(m.titel)}"><div class="section-title"><h2 style="margin-top:0">Worum geht's?</h2>${readBtn(m.titel)}</div>${paras(m.einleitung)}</section>
      ${m.schritte ? `<h2>Schritt für Schritt</h2><ol class="steps">${m.schritte.map(s => `<li><b>${md(s.t)}</b><span>${md(s.d)}</span></li>`).join('')}</ol>` : ''}
      ${(m.bloecke || []).map(b => b.tabelle ? `<h2>${esc(b.titel)}</h2>${b.text ? `<p>${md(b.text)}</p>` : ''}<div class="table-scroll"><table class="compare op-table"><thead><tr>${b.tabelle.kopf.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.tabelle.zeilen.map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
        : b.schema ? schemaHTML(b.schema)
        : `<section class="prose"><h2>${esc(b.titel)}${HB(b)}</h2>${paras(b.text)}${b.punkte ? `<ul class="points">${b.punkte.map(p => `<li>${md(p)}</li>`).join('')}</ul>` : ''}</section>`).join('')}
      ${m.formulierungen ? `<div class="callout"><h3>✍️ Formulierungshilfen</h3><ul>${m.formulierungen.map(f => `<li>${md(f)}</li>`).join('')}</ul></div>` : ''}
      ${m.fehler ? `<div class="callout abi"><h3>⚠️ Typische Fehler</h3><ul>${m.fehler.map(f => `<li>${md(f)}</li>`).join('')}</ul></div>` : ''}`;
    if (tab === 'beispiel' && m.beispiel) body = `<div class="example-box"><div class="label">Material</div><p><b>${md(m.beispiel.titel)}</b></p>${paras(m.beispiel.material)}${m.beispiel.link ? `<p class="small"><a href="${esc(m.beispiel.link)}" target="_blank" rel="noopener">→ Original ansehen (externer Link)</a></p>` : ''}</div>
      <h2>Musterbearbeitung</h2>${m.beispiel.loesung.map(l => `<div class="card" style="margin-bottom:.7rem"><h3>${esc(l.t)}</h3>${paras(l.d)}</div>`).join('')}`;
    if (tab === 'uebung') body = `<div id="quizBox"></div>`;
    return `<a href="#/methoden" class="small">← alle Methoden</a>
      <div class="theme-head" style="--c:${m.farbe || 'var(--teal)'};margin-top:.6rem"><span class="pill teal">${esc(m.kategorie)}</span><h1 style="margin-top:.4rem">${esc(m.titel)}</h1><p class="muted" style="margin:0">${esc(m.untertitel)}</p></div>
      <div class="subtabs">${tabs.map(([k, l]) => `<a class="subtab" href="#/methode/${m.id}/${k}" ${k === tab ? 'aria-current="page"' : ''}>${l}</a>`).join('')}</div>${body}${footer()}`;
  }

  /* ---------- Abi-Training ---------- */
  function pageAbi(mode) {
    if (!mode) return `<h1>Abi-Training</h1><p class="lead muted">Gemischte Aufgaben aus allen Themen – so wie im Ernstfall, wo du Wissen verknüpfen musst.</p>
      <div class="grid">
        <a class="card theme-card" href="#/abi/mix" style="--c:var(--accent)"><h3>🎲 Mix-Quiz</h3><p>15 zufällige Aufgaben aus allen Themen.</p></a>
        <a class="card theme-card" href="#/abi/zeitstrahl" style="--c:#17707f"><h3>📅 Zeitstrahl-Profi</h3><p>Ereignisse aus allen Epochen in die richtige Reihenfolge bringen.</p></a>
        <a class="card theme-card" href="#/abi/offen" style="--c:#7b5ea7"><h3>✍️ Offene Abi-Fragen</h3><p>Nur Freitext-Aufgaben mit KI-Korrektur – Erläutern, Beurteilen, Erörtern.</p></a>
        <a class="card theme-card" href="#/abi/begriffe" style="--c:#d4a017"><h3>🃏 Alle Begriffe</h3><p>Karteikarten aus allen Themen.</p></a>
        <a class="card theme-card" href="#/abi/personen" style="--c:#2e7d4f"><h3>👤 Personen-Karten</h3><p>Wer war wer? Lebensdaten und Bedeutung.</p></a>
      </div>${checklistHTML()}${footer()}`;
    return `<a href="#/abi" class="small">← Abi-Training</a><h1>${{ mix: 'Mix-Quiz', zeitstrahl: 'Zeitstrahl-Profi', offen: 'Offene Abi-Fragen', begriffe: 'Alle Begriffe', personen: 'Personen-Karten' }[mode] || 'Training'}</h1><div id="quizBox"></div>${footer()}`;
  }
  /* Prüfungs-Checkliste (Inhalte aus data/hefter/pruefung.js) */
  function checklistHTML() {
    const P = ZR.pruefung; if (!P) return '';
    let done = {}; try { done = JSON.parse(localStorage.getItem('zr-check') || '{}'); } catch (e) {}
    const total = P.bereiche.reduce((n, b) => n + b.punkte.length, 0);
    const ok = Object.values(done).filter(Boolean).length;
    return `<h2>📋 Prüfungs-Checkliste${HB({ hefter: true })}</h2>
      <div class="card"><p class="muted" style="margin-top:0">${md(P.intro)}</p>
      ${P.format ? `<div class="callout"><h3>Ablauf der Prüfung (aus deinen Notizen)</h3><ul>${P.format.map(f => `<li>${md(f)}</li>`).join('')}</ul></div>` : ''}
      <p><b id="chkCount">${ok}/${total}</b> Themen abgehakt – hake ab, was du sicher erklären kannst.</p>
      ${P.bereiche.map(b => `<h3>${esc(b.titel)}</h3><ul class="checklist">${b.punkte.map(pt => {
        const key = b.titel + '|' + pt.t;
        return `<li><label><input type="checkbox" data-key="${esc(key)}" ${done[key] ? 'checked' : ''}> ${md(pt.t)}</label>${pt.thema ? ` <a class="small" href="#/thema/${pt.thema}${pt.tab ? '/' + pt.tab : ''}">ansehen →</a>` : ''}</li>`;
      }).join('')}</ul>`).join('')}</div>`;
  }
  document.addEventListener('change', e => {
    const c = e.target.closest('.checklist input[type=checkbox]'); if (!c) return;
    let done = {}; try { done = JSON.parse(localStorage.getItem('zr-check') || '{}'); } catch (er) {}
    done[c.dataset.key] = c.checked;
    try { localStorage.setItem('zr-check', JSON.stringify(done)); } catch (er) {}
    const el = document.getElementById('chkCount');
    if (el) el.textContent = Object.values(done).filter(Boolean).length + '/' + document.querySelectorAll('.checklist input').length;
  });

  function afterAbi(mode) {
    const box = document.getElementById('quizBox'); if (!box) return;
    const all = T().flatMap(t => t.quiz || []);
    if (mode === 'mix') Quiz.run(box, Quiz.shuffle(all.filter(q => q.typ !== 'freitext')).slice(0, 13).concat(Quiz.shuffle(all.filter(q => q.typ === 'freitext')).slice(0, 2)), { id: 'abi-mix', shuffle: true });
    if (mode === 'offen') Quiz.run(box, Quiz.shuffle(all.filter(q => q.typ === 'freitext').concat(ZR.methoden.flatMap(m => (m.uebung || []).filter(q => q.typ === 'freitext')))).slice(0, 5), { id: 'abi-offen' });
    if (mode === 'zeitstrahl') {
      const evs = Quiz.shuffle(T().flatMap(t => (t.zeitleiste || []).filter(e => /^\d{4}$/.test(String(e.jahr).trim()))));
      const rounds = [];
      for (let r = 0; r < 5; r++) {
        const pick = []; const used = new Set();
        for (const e of evs) { if (pick.length >= 6) break; if (!used.has(e.jahr) && !e._used) { used.add(e.jahr); e._used = true; pick.push({ text: e.text.replace(/\*\*/g, ''), jahr: +e.jahr }); } }
        if (pick.length >= 4) rounds.push({ typ: 'zeitstrahl', frage: `Runde ${r + 1}: Bringe die Ereignisse in die richtige Reihenfolge.`, items: pick });
      }
      evs.forEach(e => delete e._used);
      Quiz.run(box, rounds, { id: 'abi-zeitstrahl' });
    }
    if (mode === 'begriffe') Quiz.flashcards(box, T().flatMap(t => (t.begriffe || []).map(b => ({ vorne: b.begriff, hinten: b.erklaerung + `<br><small class="muted">${esc(t.kurz)}</small>` }))), 'Alle Begriffe');
    if (mode === 'personen') Quiz.flashcards(box, ZR.personen.map(p => ({ vorne: p.name, hinten: `<b>${esc(p.lebensdaten)}</b><br>${esc(p.rolle)}<br><small>${md(p.bedeutung)}</small>` })), 'Persönlichkeiten');
  }

  /* ---------- Installieren ---------- */
  function pageInstall() {
    const url = location.origin + location.pathname.replace(/index\.html$/, '');
    return `<h1>App auf dem Homebildschirm</h1>
      <p class="lead muted">Die App läuft im Browser – du kannst sie aber wie eine normale App auf deinen Homebildschirm legen. Dann öffnet sie sich im Vollbild und funktioniert nach dem ersten Besuch auch offline (außer der KI-Korrektur).</p>
      <div class="install-steps">
        <div class="card"><h3>🍎 iPhone / iPad (iOS)</h3><ol class="points">
          <li>Öffne <b>${esc(url)}</b> in <b>Safari</b> (in iOS 16.4+ geht es auch in Chrome).</li>
          <li>Tippe unten (iPad: oben) auf <b>Teilen</b> – das Quadrat mit dem Pfeil nach oben.</li>
          <li>Scrolle nach unten und tippe auf <b>„Zum Home-Bildschirm"</b>.</li>
          <li>Namen prüfen („Zeitreise") und oben rechts auf <b>Hinzufügen</b> tippen.</li></ol></div>
        <div class="card"><h3>🤖 Android</h3><ol class="points">
          <li>Öffne <b>${esc(url)}</b> in <b>Chrome</b>.</li>
          <li>Tippe oben rechts auf das <b>Drei-Punkte-Menü ⋮</b>.</li>
          <li>Wähle <b>„Zum Startbildschirm hinzufügen"</b> bzw. <b>„App installieren"</b>.</li>
          <li>Mit <b>Installieren/Hinzufügen</b> bestätigen.</li></ol>
          <p class="small muted">Samsung Internet: Menü ☰ → „Seite hinzufügen zu" → „Startbildschirm".</p>
          <button class="btn primary" id="installBtn" hidden>Jetzt installieren</button></div>
        <div class="card"><h3>💻 Laptop / PC</h3><ol class="points"><li>In Chrome oder Edge rechts in der Adressleiste auf das <b>Installieren-Symbol</b> klicken.</li><li>Oder einfach als Lesezeichen speichern.</li></ol></div>
      </div>
      <h2>Weitergeben</h2>
      <div class="card row"><div style="flex:1;min-width:220px"><p style="margin:0 0 .5rem">Link und QR-Code zum Ausdrucken oder Teilen findest du auf einer eigenen Seite – inklusive dieser Anleitung als druckbares Blatt.</p>
        <div class="row"><a class="btn primary" href="qr.html" target="_blank" rel="noopener">QR-Code & Link öffnen</a><button class="btn" id="copyLink">Link kopieren</button>${navigator.share ? '<button class="btn" id="shareLink">Teilen …</button>' : ''}</div></div></div>
      ${footer()}`;
  }
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; const b = document.getElementById('installBtn'); if (b) b.hidden = false; });
  function afterInstall() {
    const url = location.origin + location.pathname.replace(/index\.html$/, '');
    const b = document.getElementById('installBtn');
    if (b && deferredPrompt) { b.hidden = false; b.onclick = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; b.hidden = true; }; }
    const c = document.getElementById('copyLink'); if (c) c.onclick = () => navigator.clipboard.writeText(url).then(() => App.toast('Link kopiert'));
    const s = document.getElementById('shareLink'); if (s) s.onclick = () => navigator.share({ title: 'Zeitreise – Geschichte Abi', text: 'Lern-App Geschichte für Klasse 10–12', url });
  }

  function notFound() { return `<h1>Nicht gefunden</h1><p><a href="#/">Zur Startseite</a></p>`; }
  function footer() {
    return `<div class="footer">Zeitreise · Lern-App Geschichte für Gymnasien in Sachsen · Inhalte orientiert am Lehrplan Gymnasium Geschichte (Sachsen, Fassung 2019). Keine Gewähr – im Zweifel gilt der Unterricht. · <a href="#/installieren">App installieren</a></div>`;
  }

  /* ---------- Suche ---------- */
  let index = null;
  function buildIndex() {
    index = [];
    T().forEach(t => {
      index.push({ t: t.titel, s: t.untertitel, h: `#/thema/${t.id}` });
      (t.begriffe || []).forEach(b => index.push({ t: b.begriff, s: 'Begriff · ' + t.kurz, h: `#/thema/${t.id}/begriffe`, x: b.erklaerung }));
      (t.zeitleiste || []).forEach(e => index.push({ t: `${e.jahr}: ${e.text.replace(/\*\*/g, '')}`, s: 'Zeitleiste · ' + t.kurz, h: `#/thema/${t.id}/zeitleiste` }));
      (t.kapitel || []).forEach(k => index.push({ t: k.titel, s: 'Kapitel · ' + t.kurz, h: `#/thema/${t.id}`, x: (k.text || []).join(' ') + (k.punkte || []).join(' ') }));
    });
    ZR.personen.forEach(p => index.push({ t: p.name, s: 'Person · ' + p.lebensdaten, h: `#/person/${p.id}`, x: p.rolle }));
    ZR.methoden.forEach(m => index.push({ t: m.titel, s: 'Methode', h: `#/methode/${m.id}` }));
  }
  function search(q) {
    if (!index) buildIndex();
    const n = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const qq = n(q.trim()); if (qq.length < 2) return [];
    return index.map(i => ({ i, sc: n(i.t).includes(qq) ? (n(i.t).startsWith(qq) ? 3 : 2) : (i.x && n(i.x).includes(qq) ? 1 : 0) }))
      .filter(r => r.sc).sort((a, b) => b.sc - a.sc).slice(0, 12).map(r => r.i);
  }

  /* ---------- Router ---------- */
  function route() {
    const r = (location.hash.replace(/^#\/?/, '') || '').split('/');
    renderTabs(r);
    let html;
    switch (r[0]) {
      case '': html = pageStart(); break;
      case 'themen': html = pageThemen(); break;
      case 'zeitstrahl': html = pageZeitstrahl(); break;
      case 'thema': html = pageThema(r[1], r[2], r[3]); break;
      case 'methoden': html = pageMethoden(); break;
      case 'methode': html = pageMethode(r[1], r[2]); break;
      case 'personen': html = pagePersonen(); break;
      case 'person': html = pagePerson(r[1]); break;
      case 'abi': html = pageAbi(r[1]); break;
      case 'installieren': html = pageInstall(); break;
      default: html = notFound();
    }
    const m = main(); m.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    document.title = (m.querySelector('h1')?.textContent || 'Start') + ' · Zeitreise';
    if (r[0] === 'thema') { const t = findThema(r[1]); if (t) afterThema(t.teile && r[2] !== 'quiz' ? teilAnsicht(t, r[3]) : t, r[2] || 'lernen'); }
    if (r[0] === 'methode' && (r[2] === 'uebung')) { const md_ = findMethode(r[1]); if (md_) Quiz.run(document.getElementById('quizBox'), md_.uebung || [], { id: 'methode-' + md_.id, backHref: `#/methode/${md_.id}` }); }
    if (r[0] === 'abi') afterAbi(r[1]);
    if (r[0] === 'installieren') afterInstall();
    bindFilters();
  }
  function bindFilters() {
    [['tlFilter', '#tlList li'], ['pFilter', '#pGrid > a']].forEach(([fid, sel]) => {
      const f = document.getElementById(fid); if (!f) return;
      f.addEventListener('click', e => {
        const b = e.target.closest('[data-f]'); if (!b) return;
        f.querySelectorAll('[data-f]').forEach(x => x.setAttribute('aria-pressed', x === b));
        document.querySelectorAll(sel).forEach(el => { el.hidden = b.dataset.f && !(el.dataset.t || '').split(' ').includes(b.dataset.f); });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    const sp = document.getElementById('searchPanel'), si = document.getElementById('searchInput'), sr = document.getElementById('searchResults');
    document.getElementById('searchBtn').addEventListener('click', () => { sp.hidden = !sp.hidden; if (!sp.hidden) si.focus(); });
    si.addEventListener('input', () => {
      const res = search(si.value);
      sr.innerHTML = res.length ? res.map(r => `<a href="${r.h}">${esc(r.t)}<span>${esc(r.s)}</span></a>`).join('') : (si.value.length > 1 ? '<p class="muted small">Nichts gefunden.</p>' : '');
    });
    sr.addEventListener('click', e => { if (e.target.closest('a')) { sp.hidden = true; si.value = ''; sr.innerHTML = ''; } });
    main().addEventListener('click', e => {
      const b = e.target.closest('[data-read]'); if (!b) return;
      const sec = b.closest('[data-readable]');
      const clone = sec.cloneNode(true); clone.querySelectorAll('.read-btn').forEach(x => x.remove());
      TTS.speak(clone.innerText, b.dataset.read, b);
    });
    window.addEventListener('hashchange', route);
    route();
    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  });
})();
