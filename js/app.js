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
  function renderTabs(route) {
    const items = [
      ['#/', 'Start'], ['#/zeitstrahl', 'Zeitstrahl'], 'sep',
      ...T().map(t => [`#/thema/${t.id}`, t.kurz || t.titel]), 'sep',
      ['#/methoden', 'Methoden & Urteilen'], ['#/personen', 'Persönlichkeiten'], ['#/abi', 'Abi-Training'], ['#/installieren', 'App installieren']
    ];
    const nav = document.getElementById('tabs');
    nav.innerHTML = items.map(it => it === 'sep' ? '<span class="tab-sep" aria-hidden="true"></span>' :
      `<a class="tab" href="${it[0]}" ${isActive(it[0], route) ? 'aria-current="page"' : ''}>${esc(it[1])}</a>`).join('');
    const act = nav.querySelector('[aria-current]');
    if (act) act.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
  function isActive(href, route) {
    const r = '#/' + route.join('/');
    if (href === '#/') return route[0] === '' || route.length === 0;
    if (href === '#/methoden') return route[0] === 'methoden' || route[0] === 'methode';
    if (href === '#/personen') return route[0] === 'personen' || route[0] === 'person';
    return r === href || r.startsWith(href + '/');
  }

  /* ---------- Startseite ---------- */
  function pageStart() {
    const prog = Quiz.Progress.all();
    const done = T().filter(t => prog['thema-' + t.id]).length;
    const avg = done ? Math.round(T().reduce((s, t) => s + (prog['thema-' + t.id]?.best || 0), 0) / T().length) : 0;
    const groups = {};
    T().forEach(t => { (groups[t.stufe] = groups[t.stufe] || []).push(t); });
    return `
      <section class="hero">
        <div class="kicker">Geschichte · Klasse 10 bis Abitur · Sachsen</div>
        <h1>Geschichte verstehen – nicht nur auswendig lernen.</h1>
        <p class="lead">Diese App führt dich vom Kalten Krieg in Klasse 10 durch alle Themen der Oberstufe bis zur Abiturprüfung. Jedes Thema hat einen eigenen Reiter mit Fließtext, Stichpunkten, Fließschemata, Zeitleiste, Begriffen und einem abschließenden Quiz.</p>
        <div class="row"><a class="btn primary" href="#/zeitstrahl">Zeitstrahl erkunden</a><a class="btn" href="#/methoden">Methoden & Urteilen</a><a class="btn ghost" href="#/abi">Abi-Training</a></div>
      </section>

      <div class="stats">
        <div class="stat"><b>${T().length}</b><span>Hauptthemen</span></div>
        <div class="stat"><b>${ZR.methoden.length}</b><span>Methoden-Trainings</span></div>
        <div class="stat"><b>${ZR.personen.length}</b><span>Persönlichkeiten</span></div>
        <div class="stat"><b>${done}/${T().length}</b><span>Quizze gemacht · Ø ${avg}%</span></div>
      </div>

      <h2>Orientierung: 1800 bis heute</h2>
      <p class="muted">Wische über den Zeitstrahl. Die farbigen Epochen führen direkt zum passenden Thema, die Punkte zeigen Schlüsselereignisse.</p>
      ${timelineHTML()}

      <h2>So lernst du mit der App</h2>
      <div class="grid">
        <div class="card"><h3>1 · Verstehen</h3><p class="muted small">Lies den Überblick als Fließtext oder lass ihn dir vorlesen. Die Stichpunkte fassen das Wichtigste zusammen.</p></div>
        <div class="card"><h3>2 · Zusammenhänge sehen</h3><p class="muted small">Fließschemata zeigen Ursachen, Abläufe und Folgen. Genau diese Zusammenhänge verlangt das Abitur.</p></div>
        <div class="card"><h3>3 · Methoden können</h3><p class="muted small">Karikaturen, Bildquellen, Textquellen und vor allem das Urteilen (Sach- und Werturteil) trainierst du im Reiter „Methoden".</p></div>
        <div class="card"><h3>4 · Prüfen</h3><p class="muted small">Jedes Thema endet mit einem Quiz: Zeitstrahl sortieren, zuordnen, Lückentext und offene Fragen mit KI-Korrektur.</p></div>
      </div>

      ${Object.entries(groups).map(([stufe, list]) => `
        <h2>${esc(stufe)}</h2>
        <div class="grid">${list.map(themeCard).join('')}</div>`).join('')}

      <h2>Das Abitur in Sachsen – kurz erklärt</h2>
      <div class="card prose">
        ${paras(ABI_INFO)}
        <p class="small muted">Stand: Lehrplan Gymnasium Geschichte Sachsen (überarbeitete Fassung 2019). Prüfungstermine und Details legt jedes Jahr die „VwV Abiturprüfung" des Kultusministeriums fest – frag im Zweifel deine Lehrkraft.</p>
      </div>
      ${footer()}`;
  }
  const ABI_INFO = [
    'In der Oberstufe (Jahrgangsstufen 11/12) wird Geschichte als **Grundkurs** oder **Leistungskurs** unterrichtet. Der Grundkurs umfasst vier Lernbereiche: die Grundlegung der modernen Gesellschaft (Industrialisierung, Liberalismus/Nationalismus, Kaiserreich), Demokratie und Diktatur in der ersten und in der zweiten Hälfte des 20. Jahrhunderts sowie die „Herausforderung Frieden". Dazu kommt ein Wahlbereich, meist zur Geschichtskultur.',
    'Klasse 10 ist die Vorbereitungsphase: Der Ost-West-Konflikt, die doppelte deutsche Staatsgründung und die Friedliche Revolution sind Grundlagen, auf die die Oberstufe direkt aufbaut.',
    'Im Abitur bekommst du **Materialien** (Textquellen, Karikaturen, Bilder, Statistiken, Darstellungen) und Aufgaben mit **Operatoren** aus drei Anforderungsbereichen: **AFB I** Wiedergeben (nennen, beschreiben, zusammenfassen), **AFB II** Erklären und Analysieren (erläutern, analysieren, vergleichen, einordnen) und **AFB III** Urteilen (beurteilen, bewerten, erörtern, sich positionieren). Ohne sichere Methoden und begründete Urteile gibt es keine Spitzenpunkte – darum hat dieser Bereich einen eigenen Reiter.'
  ];
  function themeCard(t) {
    const p = Quiz.Progress.get('thema-' + t.id);
    return `<a class="card theme-card" href="#/thema/${t.id}" style="--c:${t.farbe}">
      <span class="pill">${esc(t.lehrplan)}</span><h3>${esc(t.titel)}</h3><p>${esc(t.untertitel)}</p>
      <div class="progress" title="Bestes Quiz-Ergebnis"><i style="width:${p ? p.best : 0}%"></i></div>
      <span class="small muted">${p ? `Quiz: bestes Ergebnis ${p.best}%` : 'Quiz noch offen'}</span></a>`;
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
    evs.sort((a, b) => parseFloat(a.jahr) - parseFloat(b.jahr));
    return `<h1>Zeitstrahl</h1>
      <p class="muted">Oben der Überblick mit allen Epochen, darunter jedes Ereignis aus allen Themen in chronologischer Reihenfolge.</p>
      ${timelineHTML()}
      <div class="row" style="margin:.5rem 0 1rem"><a class="btn sm" href="#/abi/zeitstrahl">🎯 Zeitstrahl-Training starten</a></div>
      <h2>Alle Ereignisse</h2>
      <div class="filter-row" id="tlFilter"><button class="chip" aria-pressed="true" data-f="">Alle</button>${all.map(t => `<button class="chip" aria-pressed="false" data-f="${t.id}">${esc(t.kurz)}</button>`).join('')}</div>
      <ul class="mini-tl" id="tlList">${evs.map(e => `<li data-t="${e.t.id}" style="--c:${e.t.farbe}"><span class="y">${esc(e.jahr)}</span><span>${md(e.text)} <a class="small" href="#/thema/${e.t.id}">${esc(e.t.kurz)}</a></span></li>`).join('')}</ul>
      ${footer()}`;
  }

  /* ---------- Themenseite ---------- */
  const THEMA_TABS = [['lernen', 'Lernen'], ['schema', 'Fließschemata'], ['zeitleiste', 'Zeitleiste'], ['begriffe', 'Begriffe'], ['personen', 'Personen'], ['karten', 'Karteikarten'], ['quiz', 'Quiz ✓']];
  function pageThema(id, tab = 'lernen') {
    const t = findThema(id); if (!t) return notFound();
    const tabs = THEMA_TABS.filter(([k]) => k !== 'personen' || (t.personen || []).length);
    return `<div class="theme-head" style="--c:${t.farbe}">
        <div class="row"><span class="pill">${esc(t.stufe)}</span><span class="pill teal">Lehrplan: ${esc(t.lehrplan)}</span></div>
        <h1 style="margin-top:.5rem">${esc(t.titel)}</h1><p class="muted" style="margin:0">${esc(t.untertitel)}</p>
      </div>
      <div class="subtabs" role="tablist">${tabs.map(([k, l]) => `<a class="subtab" role="tab" href="#/thema/${t.id}/${k}" aria-selected="${k === tab}">${l}</a>`).join('')}</div>
      <div id="tabBody">${themaTab(t, tab)}</div>
      ${footer()}`;
  }
  function themaTab(t, tab) {
    switch (tab) {
      case 'lernen': return `
        <section class="prose" data-readable="Überblick: ${esc(t.titel)}"><div class="section-title"><h2 style="margin-top:0">Überblick</h2>${readBtn('Überblick: ' + t.titel)}</div>${paras(t.einleitung)}</section>
        ${(t.kapitel || []).map(k => `<section class="prose" data-readable="${esc(k.titel)}"><div class="section-title"><h2>${esc(k.titel)}${HB(k)}</h2>${readBtn(k.titel)}</div>
          ${paras(k.text)}${k.punkte ? `<ul class="points">${k.punkte.map(p => `<li>${md(p)}</li>`).join('')}</ul>` : ''}
          ${k.merke ? `<div class="callout"><h3>Merke</h3>${md(k.merke)}</div>` : ''}</section>`).join('')}
        ${t.abi ? `<div class="callout abi"><h3>🎓 Abi-Tipps zu diesem Thema</h3><ul>${t.abi.map(a => `<li>${md(a)}</li>`).join('')}</ul></div>` : ''}
        ${t.notizen ? `<div class="callout"><h3>📓 Aus dem Unterricht</h3>${paras(t.notizen)}</div>` : ''}
        <div class="row" style="margin-top:1.5rem"><a class="btn" href="#/thema/${t.id}/schema">Weiter zu den Fließschemata →</a><a class="btn primary" href="#/thema/${t.id}/quiz">Zum Quiz</a></div>`;
      case 'schema': return (t.schemata || []).map(schemaHTML).join('') || '<p class="muted">Noch keine Schemata.</p>';
      case 'zeitleiste': return `<ul class="mini-tl" style="--c:${t.farbe}">${(t.zeitleiste || []).map(e => `<li><span class="y">${esc(e.jahr)}</span><span>${md(e.text)}${e.hefter ? ' <small title="Aus deinem Hefter">📓</small>' : ''}</span></li>`).join('')}</ul>`;
      case 'begriffe': return `<p class="muted">Tippe einen Begriff an, um die Erklärung zu sehen. Alle Begriffe gibt es auch als Karteikarten.</p>
        <div class="terms">${(t.begriffe || []).map(b => `<details class="term"><summary>${esc(b.begriff)}${b.hefter ? ' 📓' : ''}</summary><p>${md(b.erklaerung)}</p></details>`).join('')}</div>`;
      case 'personen': return `<div class="grid">${(t.personen || []).map(findPerson).filter(Boolean).map(personCard).join('')}</div>`;
      case 'karten': return `<div id="fcBox"></div>`;
      case 'quiz': return `<p class="muted">Abschluss-Quiz mit ${(t.quiz || []).length} Aufgaben. Dein bestes Ergebnis wird auf diesem Gerät gespeichert.</p><div id="quizBox"></div>`;
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
      Quiz.flashcards(document.getElementById('fcBox'), cards, t.titel);
    }
  }

  /* ---------- Personen ---------- */
  function initials(n) { return n.split(/\s+/).filter(w => /^[A-ZÄÖÜ]/.test(w)).map(w => w[0]).slice(0, 2).join(''); }
  function personCard(p) {
    const th = findThema((p.themen || [])[0]);
    return `<a class="card person-card" href="#/person/${p.id}" style="--c:${th ? th.farbe : 'var(--teal)'}">
      <div class="avatar">${esc(initials(p.name))}</div><h3 style="margin:.3rem 0 0;font-family:var(--font-display)">${esc(p.name)}</h3>
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
      <div class="subtabs">${tabs.map(([k, l]) => `<a class="subtab" href="#/methode/${m.id}/${k}" aria-selected="${k === tab}">${l}</a>`).join('')}</div>${body}${footer()}`;
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
      case 'zeitstrahl': html = pageZeitstrahl(); break;
      case 'thema': html = pageThema(r[1], r[2]); break;
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
    if (r[0] === 'thema') { const t = findThema(r[1]); if (t) afterThema(t, r[2] || 'lernen'); }
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
    document.getElementById('menuBtn').addEventListener('click', e => {
      const n = document.getElementById('tabs'); n.classList.toggle('open');
      e.currentTarget.setAttribute('aria-expanded', n.classList.contains('open'));
    });
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
    window.addEventListener('hashchange', () => { document.getElementById('tabs').classList.remove('open'); route(); });
    route();
    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  });
})();
