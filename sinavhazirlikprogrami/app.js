(function () {
  "use strict";
  var D = window.SINAV;
  var KEY = "sinavhazirlik-bio10-v1";
  var MAX_HEARTS = 5;

  /* ───────── ikonlar ───────── */
  var I = {
    bolt: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2s5 4.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 1-3.5S9 11 10.5 11C10.5 7 12 2 12 2z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    path: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="5" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="19" r="2.5"/><path d="M8.5 5H14a4 4 0 0 1 0 7M15.5 12H10a4 4 0 0 0 0 7h-1.5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 21h8M9 17h6v4H9z"/></svg>',
    broken: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 7-3.7L9.5 10l3 2-1.5 4 3.5-5-3-2 1.2-2.4A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>'
  };

  /* ───────── kayıt ───────── */
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === "object") return s; } catch (e) {}
    return {};
  }
  var S = Object.assign({ name: "", xp: 0, streak: 0, lastDay: "", best: {}, mistakes: [], yazili: {}, sound: true, denemeBest: null }, load());
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* soru kimlikleri */
  var QMAP = {};
  D.units.forEach(function (u, ui) {
    u.qs.forEach(function (q, qi) { q.id = u.id + "-" + qi; q.unit = ui; QMAP[q.id] = q; });
  });
  D.yazili.forEach(function (q, i) { q.id = "y-" + i; QMAP[q.id] = q; });

  /* ───────── yardımcılar ───────── */
  var $app = document.getElementById("app");
  var $tabs = document.getElementById("tabs");
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function today() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function yesterday() { var d = new Date(Date.now() - 864e5); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function wrapTables(html) { return html.replace(/<table class='tbl'>/g, "<div class='tbl-wrap'><table class='tbl'>").replace(/<\/table>/g, "</table></div>"); }
  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  }
  function buzz(ms) { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} }

  var actx = null;
  function beep(ok) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var notes = ok ? [660, 880] : [220, 180];
      notes.forEach(function (f, i) {
        var o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + i * 0.09;
        o.type = ok ? "triangle" : "sawtooth"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(ok ? 0.18 : 0.08, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
        o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.18);
      });
    } catch (e) {}
  }

  function bumpStreak() {
    var t = today();
    if (S.lastDay === t) return;
    S.streak = S.lastDay === yesterday() ? S.streak + 1 : 1;
    S.lastDay = t;
  }
  function stars(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct > 0 ? 1 : 0; }
  function readiness() {
    var sum = 0; D.units.forEach(function (u) { sum += S.best[u.id] || 0; });
    var unitPart = sum / D.units.length;
    var yz = Object.keys(S.yazili).filter(function (k) { return S.yazili[k] === "ok"; }).length / D.yazili.length * 100;
    return Math.round(unitPart * 0.75 + yz * 0.25);
  }

  /* ───────── sekmeler ───────── */
  var tab = "yol";
  function renderTabs(show) {
    $tabs.hidden = !show;
    $app.classList.toggle("no-tabs", !show);
    if (!show) return;
    $tabs.innerHTML = '<div class="tabs-in">' +
      [["yol", "Yol", I.path], ["ozet", "Özet", I.book], ["ben", "Ben", I.user]].map(function (t) {
        return '<button class="tab' + (tab === t[0] ? " on" : "") + '" data-tab="' + t[0] + '">' + t[2] + t[1] + "</button>";
      }).join("") + "</div>";
    $tabs.querySelectorAll("[data-tab]").forEach(function (b) {
      b.onclick = function () { tab = b.dataset.tab; go(); window.scrollTo(0, 0); };
    });
  }
  function go() { if (tab === "yol") home(); else if (tab === "ozet") ozet(); else ben(); }

  function topbar() {
    return '<header class="top"><span class="brand">Biyo10 · Enerji</span><div class="stats">' +
      '<span class="chip c-sun" title="Seri (gün)">' + I.flame + S.streak + "</span>" +
      '<span class="chip c-leaf" title="XP">' + I.bolt + S.xp + "</span></div></header>";
  }

  /* ───────── ANA SAYFA ───────── */
  function home() {
    renderTabs(true);
    var r = readiness();
    var nextIdx = D.units.findIndex(function (u) { return !S.best[u.id]; });
    var hi = S.name ? "Selam " + esc(S.name) + "!" : "Yarınki yazılıya hazır mısın?";
    var h = topbar() +
      '<section class="hello"><h1>' + hi + "</h1><p>8 kısa ders, yazılı provası ve deneme sınavı. Sırayla git, her ders 3-4 dakika.</p></section>" +
      '<section class="exam"><span class="eyebrow">' + esc(D.sinav) + " · " + esc(D.senaryo) + "</span>" +
      "<h2>Sınavda 5 soru var</h2><ul>" +
      D.dagilim.map(function (d) { return "<li><b>" + d.soru + " soru</b><span>" + esc(d.konu) + "</span></li>"; }).join("") +
      '</ul><div class="meter"><div class="meter-row"><span>Hazırlık</span><span>%' + r + '</span></div><div class="bar"><i style="width:' + r + '%"></i></div></div></section>';

    var groups = [["BİY.10.1.1", "ATP ve enerji"], ["BİY.10.1.3", "Fotosentez"]];
    groups.forEach(function (g) {
      h += '<h2 class="section-h">' + g[1] + " · " + g[0] + '</h2><div class="path">';
      D.units.forEach(function (u, i) {
        if (u.kod !== g[0]) return;
        var b = S.best[u.id] || 0, st = stars(b);
        var cls = b ? "done" : i === nextIdx ? "next" : "";
        h += '<div class="node"><button class="bubble ' + cls + '" data-unit="' + i + '" aria-label="' + esc(u.title) + ' dersini başlat">' + (i + 1) + "</button>" +
          '<div class="node-txt">' + (i === nextIdx ? '<span class="tag">Sıradaki</span>' : "") + "<b>" + esc(u.title) + "</b>" +
          "<small>" + u.cards.length + " kart · " + u.qs.length + " soru" + (b ? ' · <span class="stars">' + "★".repeat(st) + "☆".repeat(3 - st) + "</span> %" + b : "") + "</small></div></div>";
      });
      h += "</div>";
    });

    var yOk = Object.keys(S.yazili).filter(function (k) { return S.yazili[k] === "ok"; }).length;
    h += '<h2 class="section-h">Sınav provası</h2><div class="path">' +
      '<div class="node"><button class="bubble special" data-go="yazili" aria-label="Yazılı provası">' + I.pen + '</button><div class="node-txt"><b>Yazılı provası</b><small>' + D.yazili.length + " açık uçlu soru, örnek cevaplı · " + yOk + " tam</small></div></div>" +
      '<div class="node"><button class="bubble special" data-go="deneme" aria-label="Deneme sınavı">' + I.flag + '</button><div class="node-txt"><b>Deneme sınavı</b><small>15 test + 3 yazılı, karışık' + (S.denemeBest != null ? " · en iyi " + S.denemeBest + " puan" : "") + "</small></div></div>" +
      (S.mistakes.length ? '<div class="node"><button class="bubble special" data-go="hata" aria-label="Hatalarımı tekrar et">' + I.redo + '</button><div class="node-txt"><b>Hatalarım</b><small>' + S.mistakes.length + " soru bekliyor</small></div></div>" : "") +
      "</div>";

    $app.innerHTML = h;
    $app.querySelectorAll("[data-unit]").forEach(function (b) { b.onclick = function () { startUnit(+b.dataset.unit); }; });
    $app.querySelectorAll("[data-go]").forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.go;
        if (k === "yazili") startYazili();
        else if (k === "deneme") startDeneme();
        else startMistakes();
      };
    });
  }

  /* ───────── DERS MOTORU ───────── */
  var L = null; // aktif ders

  function startUnit(i) {
    var u = D.units[i];
    L = { kind: "unit", unit: i, title: u.title, cards: u.cards, cardIdx: 0, queue: shuffle(u.qs), total: u.qs.length, done: 0,
      hearts: MAX_HEARTS, correctFirst: 0, seen: {}, wrongs: [], xp: 0 };
    lessonView();
  }
  function startMistakes() {
    var qs = S.mistakes.map(function (id) { return QMAP[id]; }).filter(Boolean);
    if (!qs.length) { toast("Hata listen boş"); return; }
    L = { kind: "hata", title: "Hatalarım", cards: [], cardIdx: 0, queue: shuffle(qs), total: qs.length, done: 0,
      hearts: Infinity, correctFirst: 0, seen: {}, wrongs: [], xp: 0 };
    lessonView();
  }
  function startYazili() {
    L = { kind: "yazili", title: "Yazılı provası", cards: [], cardIdx: 0, queue: D.yazili.slice(), total: D.yazili.length, done: 0,
      hearts: Infinity, correctFirst: 0, seen: {}, wrongs: [], xp: 0, noRequeue: true };
    lessonView();
  }
  function startDeneme() {
    var pool = [];
    D.units.forEach(function (u) { pool = pool.concat(u.qs); });
    var atp = shuffle(pool.filter(function (q) { return D.units[q.unit].kod === "BİY.10.1.1"; })).slice(0, 7);
    var fs = shuffle(pool.filter(function (q) { return D.units[q.unit].kod === "BİY.10.1.3"; })).slice(0, 8);
    var yz = shuffle(D.yazili.filter(function (q) { return q.kod === "BİY.10.1.1"; })).slice(0, 2)
      .concat(shuffle(D.yazili.filter(function (q) { return q.kod === "BİY.10.1.3"; })).slice(0, 1));
    L = { kind: "deneme", title: "Deneme sınavı", cards: [], cardIdx: 0, queue: shuffle(atp.concat(fs)).concat(yz), total: 18, done: 0,
      hearts: Infinity, correctFirst: 0, seen: {}, wrongs: [], xp: 0, noRequeue: true, score: 0 };
    lessonView();
  }

  function heartsHtml() {
    if (L.hearts === Infinity) return "";
    return '<span class="hearts" aria-label="' + L.hearts + ' can">' + I.heart + L.hearts + "</span>";
  }
  function lessonTop(pct) {
    return '<div class="l-top"><button class="x" id="quit" aria-label="Dersten çık">' + I.x + '</button><div class="prog" role="progressbar" aria-valuenow="' + Math.round(pct) + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></div>' + heartsHtml() + "</div>";
  }
  function bindQuit() {
    document.getElementById("quit").onclick = function () {
      var f = document.querySelector(".foot");
      if (f && f.dataset.confirm) return;
      if (L.done === 0 && L.cardIdx < 1) { L = null; go(); return; }
      if (!f) { L = null; go(); return; }
      f.dataset.confirm = "1";
      f.className = "foot no";
      f.innerHTML = '<div class="fb"><h3>Dersten çıkılsın mı?</h3><p>Bu dersteki ilerlemen kaydedilmez.</p></div><div class="btn-row"><button class="btn ghost" id="stay">Devam et</button><button class="btn red" id="leave">Çık</button></div>';
      document.getElementById("stay").onclick = function () { lessonView(); };
      document.getElementById("leave").onclick = function () { L = null; go(); };
    };
  }

  function lessonView() {
    renderTabs(false);
    window.scrollTo(0, 0);
    if (L.cardIdx < L.cards.length) return cardView();
    if (!L.queue.length) return finish();
    var q = L.queue[0];
    if (q.t === "open") return openView(q);
    questionView(q);
  }

  /* bilgi kartı */
  function cardView() {
    var c = L.cards[L.cardIdx], n = L.cards.length;
    var pct = (L.cardIdx / (n + L.total)) * 100;
    $app.innerHTML = '<div class="lesson">' + lessonTop(pct) +
      '<div class="l-body anim-in"><span class="kicker">Bilgi kartı ' + (L.cardIdx + 1) + " / " + n + "</span>" +
      '<article class="card"><h2>' + c.h + '</h2><div class="b">' + wrapTables(c.b) + "</div></article>" +
      '<div class="dots">' + L.cards.map(function (_, i) { return '<i class="' + (i === L.cardIdx ? "on" : "") + '"></i>'; }).join("") + "</div></div>" +
      '<div class="foot"><div class="btn-row">' + (L.cardIdx > 0 ? '<button class="btn ghost" id="prev">Geri</button>' : "") +
      '<button class="btn" id="next">' + (L.cardIdx === n - 1 ? "Sorulara geç" : "Anladım") + "</button></div></div></div>";
    bindQuit();
    var p = document.getElementById("prev"); if (p) p.onclick = function () { L.cardIdx--; lessonView(); };
    document.getElementById("next").onclick = function () { L.cardIdx++; lessonView(); };
  }

  function progressPct() {
    var n = L.cards.length;
    return ((n + L.done) / (n + L.total)) * 100;
  }

  /* çoktan seçmeli / doğru-yanlış */
  function questionView(q) {
    var opts;
    if (q.t === "tf") opts = [{ txt: "Doğru", val: true }, { txt: "Yanlış", val: false }];
    else opts = shuffle(q.o.map(function (o, i) { return { txt: o, val: i === q.a }; }));
    var sel = -1;
    var again = L.seen[q.id] ? '<span class="kicker" style="color:var(--bad)">Tekrar deneyelim</span>' : '<span class="kicker">' + (q.t === "tf" ? "Doğru mu, yanlış mı?" : "Doğru cevabı seç") + "</span>";
    $app.innerHTML = '<div class="lesson">' + lessonTop(progressPct()) +
      '<div class="l-body anim-in">' + again + '<p class="q">' + q.q + "</p>" +
      '<div class="opts' + (q.t === "tf" ? " tf" : "") + '">' +
      opts.map(function (o, i) { return '<button class="opt" data-i="' + i + '">' + (q.t === "tf" ? "" : '<span class="k">' + "ABCD"[i] + "</span>") + "<span>" + o.txt + "</span></button>"; }).join("") +
      "</div></div>" +
      '<div class="foot" id="foot"><div class="btn-row"><button class="btn" id="check" disabled>Kontrol et</button></div></div></div>';
    bindQuit();
    var btns = $app.querySelectorAll(".opt");
    var check = document.getElementById("check");
    btns.forEach(function (b) {
      b.onclick = function () {
        sel = +b.dataset.i;
        btns.forEach(function (x) { x.classList.toggle("sel", x === b); });
        check.disabled = false;
      };
    });
    check.onclick = function () {
      if (sel < 0) return;
      var ok = opts[sel].val;
      btns.forEach(function (x, i) {
        x.disabled = true; x.classList.remove("sel");
        if (opts[i].val) x.classList.add("right");
        else if (i === sel) x.classList.add("wrong");
      });
      answered(q, ok, opts.filter(function (o) { return o.val; })[0].txt);
    };
    keyHandler = function (e) {
      if (/^[1-4]$/.test(e.key) && btns[+e.key - 1] && !btns[0].disabled) btns[+e.key - 1].click();
      else if (e.key === "Enter") { var b = document.querySelector(".foot .btn:not([disabled])"); if (b) { e.preventDefault(); b.click(); } }
    };
  }

  function answered(q, ok, rightTxt) {
    var first = !L.seen[q.id];
    L.seen[q.id] = true;
    beep(ok); buzz(ok ? 15 : [40, 40, 40]);
    if (ok) {
      if (first) L.correctFirst++;
      L.xp += first ? 10 : 5;
      var mi = S.mistakes.indexOf(q.id);
      if (mi >= 0 && (L.kind === "hata" || first)) S.mistakes.splice(mi, 1);
      L.done++;
      L.queue.shift();
    } else {
      if (L.hearts !== Infinity) L.hearts--;
      if (S.mistakes.indexOf(q.id) < 0) S.mistakes.push(q.id);
      if (L.wrongs.indexOf(q) < 0) L.wrongs.push(q);
      L.queue.shift();
      if (L.noRequeue) L.done++;
      else L.queue.push(q);
    }
    save();
    if (L.kind === "deneme" && ok) L.score++;
    var foot = document.getElementById("foot");
    foot.className = "foot " + (ok ? "ok" : "no");
    var msg = ok ? ["Harika!", "Doğru!", "Süper!", "Aynen öyle!"][Math.floor(Math.random() * 4)] : "Doğru cevap: " + rightTxt;
    foot.innerHTML = '<div class="fb"><h3>' + msg + "</h3><p>" + q.e + '</p></div><div class="btn-row"><button class="btn' + (ok ? "" : " red") + '" id="cont">Devam</button></div>';
    if (!ok) { var q2 = $app.querySelector(".opt.wrong"); if (q2) q2.classList.add("shake"); }
    var hearts = $app.querySelector(".hearts"); if (hearts && !ok) hearts.innerHTML = I.heart + L.hearts;
    $app.querySelector(".prog > i").style.width = progressPct() + "%";
    document.getElementById("cont").onclick = function () {
      if (L.hearts !== Infinity && L.hearts <= 0) return failView();
      lessonView();
    };
    document.getElementById("cont").focus({ preventScroll: true });
  }

  /* yazılı (açık uçlu) */
  function openView(q) {
    var draft = "";
    $app.innerHTML = '<div class="lesson">' + lessonTop(progressPct()) +
      '<div class="l-body anim-in"><span class="kicker">Yazılı sorusu · ' + q.kod + '</span><p class="q">' + q.q + "</p>" +
      '<label class="kicker" for="ans" style="color:var(--muted)">Cevabını yaz (ya da kafanda kur, sonra kontrol et)</label>' +
      '<textarea id="ans" placeholder="Cevabını buraya yaz..."></textarea><div id="reveal"></div></div>' +
      '<div class="foot" id="foot"><div class="btn-row"><button class="btn sun" id="show">Örnek cevabı göster</button></div></div></div>';
    bindQuit();
    var ta = document.getElementById("ans");
    ta.oninput = function () { draft = ta.value; };
    document.getElementById("show").onclick = function () {
      var low = draft.toLocaleLowerCase("tr");
      var hit = 0;
      var keys = q.k.map(function (k) {
        var h = low && low.indexOf(k.toLocaleLowerCase("tr")) >= 0; if (h) hit++;
        return '<span class="' + (h ? "hit" : "") + '">' + esc(k) + "</span>";
      }).join("");
      document.getElementById("reveal").innerHTML =
        '<div class="model anim-in"><h3>Örnek tam puan cevabı</h3>' + esc(q.a) + "</div>" +
        '<span class="kicker" style="color:var(--muted)">Cevapta olması gereken anahtar kavramlar' + (draft ? " · " + hit + "/" + q.k.length + " yakaladın" : "") + "</span>" +
        '<div class="keys">' + keys + "</div>";
      var foot = document.getElementById("foot");
      foot.innerHTML = '<div class="fb"><h3>Kendini puanla</h3><p>Örnek cevaptaki anahtar kavramların çoğunu yazdıysan tam say.</p></div>' +
        '<div class="btn-row"><button class="btn red" id="bad">Eksik</button><button class="btn" id="good">Tam yazdım</button></div>';
      document.getElementById("reveal").scrollIntoView({ behavior: "smooth", block: "start" });
      function done(ok) {
        S.yazili[q.id] = ok ? "ok" : "no";
        if (ok) { L.xp += 15; L.correctFirst++; if (L.kind === "deneme") L.score++; var mi = S.mistakes.indexOf(q.id); if (mi >= 0) S.mistakes.splice(mi, 1); }
        else { if (S.mistakes.indexOf(q.id) < 0) S.mistakes.push(q.id); L.wrongs.push(q); }
        beep(ok); save();
        L.done++; L.queue.shift(); lessonView();
      }
      document.getElementById("good").onclick = function () { done(true); };
      document.getElementById("bad").onclick = function () { done(false); };
    };
    keyHandler = null;
  }

  function failView() {
    keyHandler = null;
    $app.innerHTML = '<div class="result fail anim-in"><div class="big-icon">' + I.broken + "</div><h1>Canların bitti</h1>" +
      "<p>Sorun değil, hatalar öğrenmenin parçası. Kartlara bir daha göz at ve yeniden dene.</p>" +
      '<div class="btn-row" style="width:100%"><button class="btn ghost" id="home">Ana sayfa</button><button class="btn" id="retry">Tekrar dene</button></div></div>';
    var i = L.unit;
    document.getElementById("home").onclick = function () { L = null; go(); };
    document.getElementById("retry").onclick = function () { startUnit(i); };
  }

  function finish() {
    keyHandler = null;
    var acc = Math.round((L.correctFirst / L.total) * 100);
    var bonus = 20 + (acc === 100 ? 10 : 0);
    L.xp += bonus;
    S.xp += L.xp;
    bumpStreak();
    var title = "Ders tamam!", sub = "";
    if (L.kind === "unit") {
      var id = D.units[L.unit].id;
      S.best[id] = Math.max(S.best[id] || 0, acc);
      sub = acc === 100 ? "Hiç hata yapmadın. Bu konu sende." : acc >= 70 ? "Güzel gidiyor. Yanlışların 'Hatalarım' bölümünde seni bekliyor." : "Kartlara tekrar göz atıp bu dersi bir kez daha yapman iyi olur.";
    } else if (L.kind === "deneme") {
      var puan = Math.round((L.score / L.total) * 100);
      S.denemeBest = Math.max(S.denemeBest || 0, puan);
      title = "Deneme puanın: " + puan;
      sub = puan >= 85 ? "Yazılıya hazırsın." : puan >= 60 ? "İyi! Yanlış yaptığın konuların kartlarına bir göz at." : "Önce dersleri bitir, sonra denemeyi tekrar çöz.";
    } else if (L.kind === "yazili") {
      title = "Yazılı provası bitti"; sub = "Eksik dediğin sorular 'Hatalarım' bölümüne eklendi. Yazılıdan önce onları bir kez daha oku.";
    } else { title = "Hatalar temizlendi"; sub = S.mistakes.length ? "Hâlâ " + S.mistakes.length + " soru kaldı." : "Hata listen boş. Harika!"; }
    save();
    var wl = L.wrongs.length ? '<div class="wrong-list"><span class="kicker" style="color:var(--bad)">Gözden geçir</span>' + L.wrongs.slice(0, 8).map(function (q) {
      var ans = q.t === "tf" ? (q.a ? "Doğru" : "Yanlış") : q.t === "open" ? "Örnek cevaba bak" : q.o[q.a];
      return "<div>" + q.q + "<br><b>→ " + esc(ans) + "</b></div>";
    }).join("") + "</div>" : "";
    $app.innerHTML = '<div class="result anim-in"><div class="big-icon">' + I.trophy + "</div><h1>" + title + "</h1><p>" + sub + "</p>" +
      '<div class="tiles"><div class="tile t-sun"><small>XP</small><b>+' + L.xp + '</b></div><div class="tile t-leaf"><small>İlk seferde</small><b>%' + acc + '</b></div><div class="tile t-ink"><small>Seri</small><b>' + S.streak + "</b></div></div>" +
      wl + '<div class="btn-row" style="width:100%"><button class="btn" id="home">Devam</button></div></div>';
    beep(true);
    document.getElementById("home").onclick = function () { L = null; tab = "yol"; go(); };
  }

  /* ───────── ÖZET (son tekrar) ───────── */
  function ozet() {
    renderTabs(true);
    var h = topbar() + '<h1 class="page-h">Son tekrar özeti</h1><p class="page-p">Sınavdan önceki son 10 dakika için: bütün bilgi kartları tek yerde.</p><div class="sum">';
    D.units.forEach(function (u, i) {
      h += '<details class="sum-u"' + (i === 0 ? " open" : "") + "><summary><span>" + (i + 1) + ". " + esc(u.title) + '</span></summary><div class="sum-body">' +
        u.cards.map(function (c) { return "<div><h3>" + c.h + '</h3><div class="b">' + wrapTables(c.b) + "</div></div>"; }).join("") + "</div></details>";
    });
    h += '<details class="sum-u"><summary><span>Yazılı soruları ve cevapları</span></summary><div class="sum-body">' +
      D.yazili.map(function (q, i) { return "<div><h3>" + (i + 1) + ". " + q.q + '</h3><div class="b" style="white-space:pre-line">' + esc(q.a) + "</div></div>"; }).join("") + "</div></details>";
    h += "</div>";
    $app.innerHTML = h;
  }

  /* ───────── BEN (profil) ───────── */
  function ben() {
    renderTabs(true);
    var url = location.href.split("#")[0];
    var tot = 0; D.units.forEach(function (u) { tot += u.qs.length; });
    $app.innerHTML = topbar() + '<h1 class="page-h">Ben</h1>' +
      '<div class="form">' +
      '<div class="panel"><div class="field"><label for="nm">Adın (ana sayfada seni selamlar)</label><input id="nm" maxlength="24" autocomplete="off" value="' + esc(S.name) + '" placeholder="Adını yaz"></div></div>' +
      '<div class="panel"><h2>İlerlemen</h2><p>' + S.xp + " XP · " + S.streak + " günlük seri · " + Object.keys(S.best).length + "/" + D.units.length + " ders bitti · " + tot + " test + " + D.yazili.length + " yazılı soru · hatalarım: " + S.mistakes.length + "</p></div>" +
      '<div class="panel"><h2>Arkadaşlarınla paylaş</h2><p>Herkesin ilerlemesi kendi telefonunda saklanır, giriş gerekmez.</p><div class="linkbox" id="lnk">' + esc(url) + '</div><button class="btn" id="share">Linki paylaş</button></div>' +
      '<div class="panel"><h2>Ses</h2><p>Doğru/yanlış seslerini aç veya kapat.</p><button class="btn ghost" id="snd">' + (S.sound ? "Sesi kapat" : "Sesi aç") + "</button></div>" +
      '<div class="panel"><h2>Sıfırla</h2><p>Bütün XP, yıldız ve hata listesi silinir.</p><button class="btn red" id="rst">İlerlemeyi sıfırla</button></div>' +
      "</div>";
    var nm = document.getElementById("nm");
    nm.oninput = function () { S.name = nm.value.trim(); save(); };
    document.getElementById("snd").onclick = function () { S.sound = !S.sound; save(); ben(); };
    document.getElementById("share").onclick = function () {
      var data = { title: "10. Sınıf Biyoloji Yazılı Hazırlık", text: "Yarınki biyoloji yazılısına buradan çalış:", url: url };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { toast("Link kopyalandı"); }, function () { selectLink(); });
      else selectLink();
    };
    function selectLink() { var r = document.createRange(); r.selectNodeContents(document.getElementById("lnk")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); toast("Linki seçtim, kopyalayabilirsin"); }
    var armed = false;
    document.getElementById("rst").onclick = function () {
      if (!armed) { armed = true; this.textContent = "Emin misin? Tekrar dokun"; return; }
      var keepName = S.name;
      S = { name: keepName, xp: 0, streak: 0, lastDay: "", best: {}, mistakes: [], yazili: {}, sound: S.sound, denemeBest: null };
      save(); toast("Sıfırlandı"); tab = "yol"; go();
    };
  }

  var keyHandler = null;
  document.addEventListener("keydown", function (e) { if (keyHandler && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "INPUT") keyHandler(e); });

  go();
})();
