/* Vorlesefunktion über die Web Speech API (läuft offline im Browser, keine Kosten). */
(function () {
  const synth = window.speechSynthesis;
  const bar = () => document.getElementById('ttsBar');
  let currentBtn = null;
  let queue = [];
  let paused = false;

  function pickVoice() {
    if (!synth) return null;
    const voices = synth.getVoices();
    return voices.find(v => /de(-|_)DE/i.test(v.lang) && /Google|Anna|Helena|Katja|Premium|Enhanced/i.test(v.name))
      || voices.find(v => /^de/i.test(v.lang)) || null;
  }

  function chunk(text) {
    // Lange Texte in Sätze zerlegen – manche Browser brechen sonst nach ~15 s ab.
    const parts = text.replace(/\s+/g, ' ').match(/[^.!?;:]+[.!?;:]*\s*/g) || [text];
    const out = []; let buf = '';
    parts.forEach(p => { if ((buf + p).length > 220) { if (buf) out.push(buf); buf = p; } else buf += p; });
    if (buf.trim()) out.push(buf);
    return out;
  }

  function stop() {
    queue = [];
    if (synth) synth.cancel();
    paused = false;
    if (currentBtn) { currentBtn.classList.remove('playing'); currentBtn.textContent = '🔊 Vorlesen'; }
    currentBtn = null;
    if (bar()) bar().hidden = true;
  }

  function next() {
    if (!queue.length) { stop(); return; }
    const u = new SpeechSynthesisUtterance(queue.shift());
    u.lang = 'de-DE';
    const v = pickVoice(); if (v) u.voice = v;
    u.rate = parseFloat(document.getElementById('ttsRate').value) || 1;
    u.onend = () => { if (!paused) next(); };
    u.onerror = () => next();
    synth.speak(u);
  }

  function speak(text, label, btn) {
    if (!synth) { window.App && App.toast('Vorlesen wird von diesem Browser nicht unterstützt.'); return; }
    const wasSame = currentBtn && currentBtn === btn;
    stop();
    if (wasSame) return; // zweiter Klick = stoppen
    currentBtn = btn || null;
    if (btn) { btn.classList.add('playing'); btn.textContent = '■ Stopp'; }
    queue = chunk(text);
    const b = bar(); b.hidden = false;
    document.getElementById('ttsLabel').textContent = label || 'Vorlesen';
    document.getElementById('ttsPause').textContent = '❚❚';
    next();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ttsStop').addEventListener('click', stop);
    document.getElementById('ttsPause').addEventListener('click', e => {
      if (!synth) return;
      if (paused) { paused = false; synth.resume(); e.currentTarget.textContent = '❚❚'; }
      else { paused = true; synth.pause(); e.currentTarget.textContent = '▶'; }
    });
    if (synth && synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};
  });
  window.addEventListener('hashchange', stop);

  window.TTS = { speak, stop, supported: !!synth };
})();
