/*
 * Quiz-Engine. Aufgabentypen:
 *   mc           – Multiple Choice (eine oder mehrere richtige Antworten)
 *   wf           – Wahr oder falsch
 *   zeitstrahl   – Ereignisse chronologisch ordnen
 *   reihenfolge  – Ursache-Folge-Kette / Ablauf ordnen
 *   zuordnen     – Paare bilden (z. B. Person ↔ Zitat)
 *   lueckentext  – Lücken per Auswahl füllen  {richtig|falsch1|falsch2}
 *   kategorien   – Begriffe Gruppen zuordnen (z. B. BRD / DDR)
 *   freitext     – offene Antwort, Korrektur durch KI (Fallback: Schlüsselbegriffe)
 * Optional bei jeder Aufgabe: material (Quelle/Karikaturbeschreibung), erklaerung.
 */
(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const TYPE_LABEL = { mc: 'Multiple Choice', wf: 'Wahr oder falsch?', zeitstrahl: 'Zeitstrahl ordnen', reihenfolge: 'Ablauf ordnen', zuordnen: 'Zuordnen', lueckentext: 'Lückentext', kategorien: 'Einsortieren', freitext: 'Offene Frage · KI-Korrektur' };
  const PAIR_COLORS = ['#e4572e', '#17707f', '#7b5ea7', '#d4a017', '#2e7d4f', '#c2185b', '#5d6d7e', '#8d6e63'];

  /* ---------- Fortschritt ---------- */
  const Progress = {
    all() { try { return JSON.parse(localStorage.getItem('zr-progress') || '{}'); } catch (e) { return {}; } },
    get(id) { return this.all()[id]; },
    save(id, pct) {
      const all = this.all(); const prev = all[id] || {};
      all[id] = { best: Math.max(prev.best || 0, pct), last: pct, tries: (prev.tries || 0) + 1, date: new Date().toISOString() };
      try { localStorage.setItem('zr-progress', JSON.stringify(all)); } catch (e) {}
    }
  };

  /* ---------- Sortierliste (Zeitstrahl / Reihenfolge) ---------- */
  function sortable(list) {
    let drag = null, startY = 0;
    list.addEventListener('pointerdown', e => {
      const grip = e.target.closest('.grip'); if (!grip || list.dataset.locked) return;
      drag = grip.closest('.order-item'); startY = e.clientY; drag.classList.add('dragging');
      drag.setPointerCapture(e.pointerId); e.preventDefault();
    });
    list.addEventListener('pointermove', e => {
      if (!drag) return;
      const items = [...list.children];
      const idx = items.indexOf(drag);
      const dy = e.clientY - startY;
      const prev = items[idx - 1], next = items[idx + 1];
      if (dy < 0 && prev && e.clientY < prev.getBoundingClientRect().top + prev.offsetHeight / 2) { list.insertBefore(drag, prev); startY = e.clientY; }
      if (dy > 0 && next && e.clientY > next.getBoundingClientRect().top + next.offsetHeight / 2) { list.insertBefore(next, drag); startY = e.clientY; }
    });
    const end = () => { if (drag) drag.classList.remove('dragging'); drag = null; };
    list.addEventListener('pointerup', end); list.addEventListener('pointercancel', end);
    list.addEventListener('click', e => {
      const b = e.target.closest('button[data-mv]'); if (!b || list.dataset.locked) return;
      const it = b.closest('.order-item');
      if (b.dataset.mv === 'up' && it.previousElementSibling) list.insertBefore(it, it.previousElementSibling);
      if (b.dataset.mv === 'down' && it.nextElementSibling) list.insertBefore(it.nextElementSibling, it);
      b.focus();
    });
  }

  /* ---------- Lokale Ersatzkorrektur für Freitext ---------- */
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss'); }
  function localGrade(q, answer) {
    const a = norm(answer);
    const krit = (q.erwartung || []).map(e => {
      const keys = e.schluessel || [];
      const hit = keys.some(k => a.includes(norm(k)));
      return { punkt: e.punkt, erfuellt: hit };
    });
    const hits = krit.filter(k => k.erfuellt).length;
    const pct = krit.length ? hits / krit.length : 0;
    const words = answer.trim().split(/\s+/).length;
    let feedback = pct >= .75 ? 'Stark! Die wichtigsten Aspekte sind enthalten.' : pct >= .4 ? 'Ein guter Anfang – einige zentrale Aspekte fehlen noch.' : 'Hier fehlen noch wesentliche Inhalte. Schau dir die Musterlösung genau an.';
    if (words < 25) feedback += ' Tipp: Im Abitur wird ausführlicher und in ganzen Sätzen argumentiert.';
    return { punkte: Math.round(pct * (q.punkte || 4)), max: q.punkte || 4, kriterien: krit, feedback, quelle: 'lokal' };
  }

  async function aiGrade(q, answer) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 30000);
    try {
      const res = await fetch('/.netlify/functions/korrektur', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: ctrl.signal,
        body: JSON.stringify({ frage: q.frage, material: q.material || '', operator: q.operator || '', erwartung: (q.erwartung || []).map(e => e.punkt), musterloesung: q.musterloesung || '', punkte: q.punkte || 4, antwort: answer })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (typeof data.punkte !== 'number') throw new Error('Antwort unvollständig');
      data.quelle = 'ki';
      return data;
    } finally { clearTimeout(t); }
  }

  /* ---------- Renderer je Typ: gibt { check(): score 0..1, el } ---------- */
  const R = {
    mc(q, box) {
      const multi = Array.isArray(q.richtig);
      const correct = multi ? q.richtig : [q.richtig];
      const opts = shuffle(q.optionen.map((t, i) => ({ t, i })));
      box.innerHTML = `${multi ? '<p class="muted small">Mehrere Antworten können richtig sein.</p>' : ''}<div class="options">${opts.map((o, k) => `<button class="option" data-i="${o.i}"><span class="key">${'ABCDEFG'[k]}</span><span>${md(o.t)}</span></button>`).join('')}</div>`;
      box.querySelectorAll('.option').forEach(b => b.addEventListener('click', () => {
        if (!multi) box.querySelectorAll('.option').forEach(x => x.classList.remove('selected'));
        b.classList.toggle('selected');
      }));
      return {
        ready: () => !!box.querySelector('.option.selected'),
        check() {
          let ok = 0, wrong = 0;
          box.querySelectorAll('.option').forEach(b => {
            const i = +b.dataset.i, sel = b.classList.contains('selected'), isC = correct.includes(i);
            b.disabled = true;
            if (isC) b.classList.add('correct');
            if (sel && !isC) { b.classList.add('wrong'); wrong++; }
            if (sel && isC) ok++;
          });
          return Math.max(0, (ok - wrong) / correct.length);
        }
      };
    },
    wf(q, box) {
      box.innerHTML = `<div class="options" style="grid-template-columns:1fr 1fr"><button class="option" data-v="1"><span class="key">✓</span><span>Wahr</span></button><button class="option" data-v="0"><span class="key">✗</span><span>Falsch</span></button></div>`;
      box.querySelectorAll('.option').forEach(b => b.addEventListener('click', () => { box.querySelectorAll('.option').forEach(x => x.classList.remove('selected')); b.classList.add('selected'); }));
      return {
        ready: () => !!box.querySelector('.selected'),
        check() {
          const sel = box.querySelector('.selected'); const val = sel.dataset.v === '1';
          box.querySelectorAll('.option').forEach(b => { b.disabled = true; if ((b.dataset.v === '1') === q.richtig) b.classList.add('correct'); });
          if (val !== q.richtig) sel.classList.add('wrong');
          return val === q.richtig ? 1 : 0;
        }
      };
    },
    zeitstrahl(q, box) { return R._order(box, q.items.map((it, i) => ({ text: it.text, label: it.label || String(it.jahr), key: it.jahr, i })).sort((a, b) => a.key - b.key), true); },
    reihenfolge(q, box) { return R._order(box, q.schritte.map((t, i) => ({ text: t, i })), false); },
    _order(box, correctOrder, showYears) {
      let items = shuffle(correctOrder);
      if (items.every((x, k) => x === correctOrder[k])) items = items.reverse();
      box.innerHTML = `<div class="order-axis"><span>${showYears ? '⬆ früher' : '⬆ zuerst'}</span><span class="muted">ziehen (⠿) oder Pfeile nutzen</span></div>
        <ol class="order-list">${items.map(it => `<li class="order-item" data-i="${it.i}"><span class="grip" aria-hidden="true">⠿</span><span class="txt">${md(it.text)}</span><span class="yr" hidden>${esc(it.label || '')}</span><span class="order-btns"><button data-mv="up" aria-label="nach oben">▲</button><button data-mv="down" aria-label="nach unten">▼</button></span></li>`).join('')}</ol>
        <div class="order-axis"><span>${showYears ? '⬇ später' : '⬇ zuletzt'}</span></div>`;
      const list = $('.order-list', box); sortable(list);
      return {
        ready: () => true,
        check() {
          list.dataset.locked = '1';
          const els = [...list.children]; let ok = 0;
          els.forEach((el, k) => {
            const good = +el.dataset.i === correctOrder[k].i;
            el.classList.add(good ? 'correct' : 'wrong'); if (good) ok++;
            if (showYears) el.querySelector('.yr').hidden = false;
            el.querySelector('.order-btns').style.visibility = 'hidden';
          });
          if (ok < els.length) {
            const sol = document.createElement('p'); sol.className = 'small muted';
            sol.innerHTML = '<b>Richtige Reihenfolge:</b> ' + correctOrder.map(c => esc(c.text) + (showYears ? ` (${esc(c.label)})` : '')).join(' → ');
            box.appendChild(sol);
          }
          return ok / els.length;
        }
      };
    },
    zuordnen(q, box) {
      const left = q.paare.map((p, i) => ({ t: p[0], i })), right = shuffle(q.paare.map((p, i) => ({ t: p[1], i })));
      box.innerHTML = `<p class="muted small">Tippe links ein Element an und dann rechts das passende Gegenstück.</p>
        <div class="match-grid"><div class="match-col">${left.map(l => `<button class="match-item" data-side="l" data-i="${l.i}">${md(l.t)}</button>`).join('')}</div>
        <div class="match-col">${right.map(r => `<button class="match-item" data-side="r" data-i="${r.i}">${md(r.t)}</button>`).join('')}</div></div>`;
      const pairs = new Map(); let sel = null, colorIdx = 0;
      const repaint = () => {
        box.querySelectorAll('.match-item').forEach(b => { b.classList.remove('paired'); b.style.removeProperty('--c'); });
        [...pairs.entries()].forEach(([l, r], k) => {
          const c = PAIR_COLORS[k % PAIR_COLORS.length];
          [box.querySelector(`[data-side=l][data-i="${l}"]`), box.querySelector(`[data-side=r][data-i="${r}"]`)].forEach(b => { b.classList.add('paired'); b.style.setProperty('--c', c); });
        });
      };
      box.querySelectorAll('.match-item').forEach(b => b.addEventListener('click', () => {
        if (box.dataset.locked) return;
        const side = b.dataset.side, i = +b.dataset.i;
        if (!sel || sel.side === side) {
          box.querySelectorAll('.match-item.selected').forEach(x => x.classList.remove('selected'));
          // Paar lösen, wenn bereits gepaart
          if (side === 'l' && pairs.has(i)) pairs.delete(i);
          if (side === 'r') [...pairs].forEach(([l, r]) => { if (r === i) pairs.delete(l); });
          sel = { side, i }; b.classList.add('selected'); repaint(); return;
        }
        const l = side === 'l' ? i : sel.i, r = side === 'r' ? i : sel.i;
        [...pairs].forEach(([pl, pr]) => { if (pr === r || pl === l) pairs.delete(pl); });
        pairs.set(l, r); sel = null; colorIdx++;
        box.querySelectorAll('.match-item.selected').forEach(x => x.classList.remove('selected'));
        repaint();
      }));
      return {
        ready: () => pairs.size === q.paare.length,
        check() {
          box.dataset.locked = '1'; let ok = 0;
          left.forEach(l => {
            const r = pairs.get(l.i); const good = r === l.i; if (good) ok++;
            const lb = box.querySelector(`[data-side=l][data-i="${l.i}"]`);
            lb.classList.add(good ? 'correct' : 'wrong');
            if (r !== undefined) box.querySelector(`[data-side=r][data-i="${r}"]`).classList.add(good ? 'correct' : 'wrong');
          });
          if (ok < left.length) {
            const sol = document.createElement('p'); sol.className = 'small muted';
            sol.innerHTML = '<b>Lösung:</b> ' + q.paare.map(p => `${esc(p[0])} → ${esc(p[1])}`).join(' · ');
            box.appendChild(sol);
          }
          return ok / left.length;
        }
      };
    },
    lueckentext(q, box) {
      const gaps = [];
      const html = esc(q.text).replace(/\{([^}]+)\}/g, (_, inner) => {
        const opts = inner.split('|'); gaps.push(opts[0]);
        return `<select data-g="${gaps.length - 1}"><option value="">…</option>${shuffle(opts).map(o => `<option>${o}</option>`).join('')}</select>`;
      });
      box.innerHTML = `<p class="gap-text">${html}</p>`;
      return {
        ready: () => [...box.querySelectorAll('select')].every(s => s.value),
        check() {
          let ok = 0;
          box.querySelectorAll('select').forEach(s => {
            const good = s.value === esc(gaps[+s.dataset.g]) || s.value === gaps[+s.dataset.g];
            s.classList.add(good ? 'correct' : 'wrong'); s.disabled = true; if (good) ok++;
            if (!good) s.insertAdjacentHTML('afterend', ` <small class="muted">(${esc(gaps[+s.dataset.g])})</small>`);
          });
          return ok / gaps.length;
        }
      };
    },
    kategorien(q, box) {
      const cats = Object.keys(q.kategorien);
      const tokens = shuffle(cats.flatMap(c => q.kategorien[c].map(t => ({ t, c }))));
      box.innerHTML = `<p class="muted small">Tippe einen Begriff an und dann die passende Gruppe.</p>
        <div class="cat-pool">${tokens.map((tk, i) => `<button class="token" data-i="${i}">${md(tk.t)}</button>`).join('')}</div>
        <div class="cat-bins">${cats.map((c, k) => `<div class="cat-bin" data-c="${k}" role="button" tabindex="0"><h4>${esc(c)}</h4><div class="bin-items"></div></div>`).join('')}</div>`;
      let sel = null; const pool = $('.cat-pool', box);
      box.addEventListener('click', e => {
        if (box.dataset.locked) return;
        const tok = e.target.closest('.token'); const bin = e.target.closest('.cat-bin');
        if (tok) {
          if (tok.closest('.cat-bin')) { pool.appendChild(tok); sel = null; box.querySelectorAll('.token.selected').forEach(x => x.classList.remove('selected')); return; }
          box.querySelectorAll('.token.selected').forEach(x => x.classList.remove('selected'));
          sel = tok; tok.classList.add('selected');
          box.querySelectorAll('.cat-bin').forEach(b => b.classList.add('target'));
          return;
        }
        if (bin && sel) {
          bin.querySelector('.bin-items').appendChild(sel); sel.classList.remove('selected'); sel = null;
          box.querySelectorAll('.cat-bin').forEach(b => b.classList.remove('target'));
        }
      });
      return {
        ready: () => !pool.querySelector('.token'),
        check() {
          box.dataset.locked = '1'; let ok = 0;
          box.querySelectorAll('.cat-bin').forEach(bin => bin.querySelectorAll('.token').forEach(tk => {
            const good = tokens[+tk.dataset.i].c === cats[+bin.dataset.c];
            tk.classList.add(good ? 'correct' : 'wrong'); if (good) ok++;
            if (!good) tk.title = 'Gehört zu: ' + tokens[+tk.dataset.i].c;
          }));
          if (ok < tokens.length) {
            const sol = document.createElement('p'); sol.className = 'small muted';
            sol.innerHTML = '<b>Lösung:</b> ' + cats.map(c => `<b>${esc(c)}:</b> ${q.kategorien[c].map(esc).join(', ')}`).join(' · ');
            box.appendChild(sol);
          }
          return ok / tokens.length;
        }
      };
    },
    freitext(q, box) {
      box.innerHTML = `${q.operator ? `<p class="small"><span class="pill teal">${esc(q.operator)}</span> ${q.afb ? `<span class="pill">AFB ${esc(q.afb)}</span>` : ''} <span class="pill">${q.punkte || 4} Punkte</span></p>` : ''}
        <textarea class="answer" placeholder="Deine Antwort in ganzen Sätzen …" aria-label="Antwort"></textarea>
        <p class="small muted">Deine Antwort wird zur Korrektur an eine KI geschickt (ohne Namen oder persönliche Daten). Gib keine persönlichen Informationen ein.</p>`;
      const ta = $('textarea', box);
      try { const d = sessionStorage.getItem('draft-' + q.frage); if (d) ta.value = d; } catch (e) {}
      ta.addEventListener('input', () => { try { sessionStorage.setItem('draft-' + q.frage, ta.value); } catch (e) {} });
      return {
        ready: () => ta.value.trim().length > 10,
        async: true,
        async check() {
          ta.disabled = true;
          const out = document.createElement('div'); out.className = 'ai-result feedback info'; out.innerHTML = '<p>⏳ Die KI liest deine Antwort …</p>'; box.appendChild(out);
          let r;
          try { r = await aiGrade(q, ta.value); }
          catch (e) { r = localGrade(q, ta.value); }
          const pct = r.max ? r.punkte / r.max : 0;
          out.className = 'ai-result feedback ' + (pct >= .6 ? 'ok' : pct >= .3 ? 'info' : 'no');
          out.innerHTML = `<div class="score">${r.punkte} / ${r.max} Punkte</div>
            <p>${md(r.feedback || '')}</p>
            ${r.kriterien && r.kriterien.length ? `<ul class="kriterien">${r.kriterien.map(k => `<li class="${k.erfuellt ? 'hit' : 'miss'}"><span class="mk">${k.erfuellt ? '✓' : '✗'}</span><span>${md(k.punkt)}${k.kommentar ? ` <span class="muted">– ${md(k.kommentar)}</span>` : ''}</span></li>`).join('')}</ul>` : ''}
            ${r.tipp ? `<p><b>Tipp:</b> ${md(r.tipp)}</p>` : ''}
            ${q.musterloesung ? `<details><summary><b>Musterlösung anzeigen</b></summary><p>${md(q.musterloesung)}</p></details>` : ''}
            <p class="small muted">${r.quelle === 'ki' ? '🤖 Bewertet durch KI – das ist eine Einschätzung, keine Note. Im Zweifel mit Lehrkraft besprechen.' : '📋 Offline-Korrektur über Schlüsselbegriffe (KI gerade nicht erreichbar). Vergleiche zusätzlich mit der Musterlösung.'}</p>`;
          try { sessionStorage.removeItem('draft-' + q.frage); } catch (e) {}
          return pct;
        }
      };
    }
  };

  /* ---------- Ablauf ---------- */
  function run(container, questions, opts = {}) {
    const qs = opts.shuffle ? shuffle(questions) : questions.slice();
    let idx = 0, total = 0;
    const results = [];
    function show() {
      if (idx >= qs.length) return finish();
      const q = qs[idx];
      container.innerHTML = `<div class="card">
        <div class="quiz-head"><span class="small muted">Aufgabe ${idx + 1} von ${qs.length}</span><div class="quiz-progress"><i style="width:${(idx / qs.length) * 100}%"></i></div></div>
        <div class="q-type">${TYPE_LABEL[q.typ] || ''}</div>
        <div class="q-text">${md(q.frage || q.aussage || '')}</div>
        ${q.material ? `<blockquote class="example-box"><div class="label">Material</div>${md(q.material).replace(/\n/g, '<br>')}</blockquote>` : ''}
        <div class="q-body"></div>
        <div class="q-fb"></div>
        <div class="q-actions"><button class="btn ghost" data-act="skip">Überspringen</button><button class="btn primary" data-act="check">Prüfen</button></div>
      </div>`;
      const body = $('.q-body', container);
      const r = (R[q.typ] || R.mc)(q, body);
      const checkBtn = $('[data-act=check]', container), skipBtn = $('[data-act=skip]', container);
      skipBtn.addEventListener('click', () => { results.push({ q, score: 0, skipped: true }); idx++; show(); });
      checkBtn.addEventListener('click', async () => {
        if (checkBtn.dataset.next) { idx++; show(); return; }
        if (!r.ready()) { window.App && App.toast(q.typ === 'freitext' ? 'Schreib erst eine Antwort.' : 'Bitte die Aufgabe vollständig bearbeiten.'); return; }
        checkBtn.disabled = true; skipBtn.hidden = true;
        const score = await r.check();
        total += score; results.push({ q, score });
        if (q.typ !== 'freitext') {
          const good = score >= .999, part = score > 0 && !good;
          $('.q-fb', container).innerHTML = `<div class="feedback ${good ? 'ok' : part ? 'info' : 'no'}"><h4>${good ? '✓ Richtig!' : part ? '≈ Teilweise richtig' : '✗ Leider falsch'}</h4>${q.erklaerung ? `<p style="margin:0">${md(q.erklaerung)}</p>` : ''}</div>`;
        }
        checkBtn.disabled = false; checkBtn.dataset.next = '1';
        checkBtn.textContent = idx === qs.length - 1 ? 'Auswertung' : 'Weiter →';
        checkBtn.focus();
      });
    }
    function finish() {
      const pct = qs.length ? Math.round((total / qs.length) * 100) : 0;
      if (opts.id) Progress.save(opts.id, pct);
      const msg = pct >= 90 ? 'Hervorragend – abiturreif! 🎓' : pct >= 70 ? 'Sehr gut! Nur noch Feinschliff.' : pct >= 50 ? 'Solide Basis. Wiederhole die markierten Punkte.' : 'Noch nicht sicher – lies das Thema nochmal und versuch es erneut.';
      const weak = results.filter(r => r.score < .7);
      container.innerHTML = `<div class="card result-card"><div class="big">${pct}%</div><p><b>${msg}</b></p>
        ${weak.length ? `<div style="text-align:left"><h3>Das solltest du wiederholen</h3><ul class="points">${weak.map(w => `<li>${md(w.q.frage || w.q.aussage)}</li>`).join('')}</ul></div>` : ''}
        <div class="row" style="justify-content:center"><button class="btn primary" data-act="again">Nochmal (neu gemischt)</button>${opts.backHref ? `<a class="btn" href="${opts.backHref}">Zurück zum Thema</a>` : ''}</div></div>`;
      $('[data-act=again]', container).addEventListener('click', () => run(container, questions, Object.assign({}, opts, { shuffle: true })));
      if (opts.onFinish) opts.onFinish(pct);
    }
    show();
  }

  /* ---------- Karteikarten ---------- */
  function flashcards(container, cards, title) {
    let deck = shuffle(cards), i = 0, known = 0;
    function show() {
      if (i >= deck.length) {
        container.innerHTML = `<div class="card result-card"><div class="big">${known}/${cards.length}</div><p>Karten gewusst${deck.length > cards.length ? ` – ${deck.length - cards.length} Wiederholungen nötig` : ''}.</p><button class="btn primary">Neu mischen</button></div>`;
        $('button', container).onclick = () => { deck = shuffle(cards); i = 0; known = 0; show(); };
        return;
      }
      const c = deck[i];
      container.innerHTML = `<p class="small muted">${esc(title || 'Karteikarten')} · Karte ${i + 1} von ${deck.length} · antippen zum Umdrehen</p>
        <div class="flashcard" tabindex="0" role="button" aria-label="Karte umdrehen"><div class="flashcard-inner">
        <div class="flashcard-face"><div class="big">${md(c.vorne)}</div></div>
        <div class="flashcard-face back"><div>${md(c.hinten)}</div></div></div></div>
        <div class="q-actions"><button class="btn" data-k="0">Nochmal üben</button><button class="btn primary" data-k="1">Gewusst ✓</button></div>`;
      const fc = $('.flashcard', container);
      const flip = () => fc.classList.toggle('flipped');
      fc.addEventListener('click', flip); fc.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
      container.querySelectorAll('[data-k]').forEach(b => b.addEventListener('click', () => {
        if (b.dataset.k === '1') known++; else deck.push(c);
        i++; show();
      }));
    }
    show();
  }

  window.Quiz = { run, flashcards, Progress, md, esc, shuffle };
})();
