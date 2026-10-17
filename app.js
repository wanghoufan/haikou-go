/* 海口去哪玩 — user-facing guide.
   Reads exactly one input: ./data/daily_guide.json. Nothing internal ships here. */
(function () {
  'use strict';

  var I18N = {
    zh: {
      'offline': '这是最近一次更新的数据',
      'loading': '正在加载今日日报…',
      'error': '日报暂时加载不出来，请稍后刷新。',
      'empty': '这一档暂时没有已确认的内容，换个筛选看看。',
      'nav.today': '全部', 'nav.tonight': '今晚', 'nav.weekend': '本周末',
      'nav.explore': '分类探索', 'nav.community': '社群', 'nav.new': '拍照打卡',
      'block.top3': '今天最值得去 TOP3', 'block.timeline': '今天时间线',
      'block.communities': '值得长期加入的社群',
      'pins.block': '我的关注', 'pins.pin': '固定', 'pins.pinned': '已固定',
      'pins.remove': '取消这个关注', 'pins.note': '点「固定」把该类型加到首页的「我的关注」。',
      'pins.note.cat': '点「固定」把该分类加到首页快捷筛选，方便一键筛选。',
      'pins.nonematches': '今天这个类型暂无匹配条目，去「筛选 → 类型」换一个固定，或点 ✕ 取消。',
      'filter.open': '筛选', 'filter.title': '筛选', 'filter.clear': '清除', 'filter.apply': '查看结果',
      'filter.time': '时间', 'filter.category': '分类', 'filter.type': '类型', 'filter.attr': '属性',
      'time.today': '今天', 'time.tonight': '今晚', 'time.weekend': '本周末', 'time.next7': '未来7天',
      'attr.beginner': '新手友好', 'attr.solo': '一个人可去', 'attr.free': '免费',
      'attr.need_booking': '需报名', 'attr.walk_in': '可直接到店', 'attr.group': '有群聊',
      'attr.english': '英语友好', 'attr.international': '明确国际参与', 'attr.indoor': '室内', 'attr.outdoor': '户外',
      'foot.source': '每条内容都保留原始来源链接，点开卡片可查看。',
      'foot.updated': '数据更新于', 'foot.offlineok': '离线时可继续浏览上一次的内容',
      'settings.title': '显示设置', 'settings.theme': '主题', 'settings.lang': '语言',
      'settings.system': '跟随系统', 'settings.light': '浅色', 'settings.dark': '深色', 'settings.follow': '跟随系统',
      'detail.when': '什么时候', 'detail.where': '在哪里', 'detail.price': '多少钱',
      'detail.who': '适合谁', 'detail.why': '为什么推荐', 'detail.next': '下一步做什么',
      'detail.know': '出发前要知道', 'detail.contact': '怎么联系', 'detail.deadline': '报名截止',
      'detail.source': '来源', 'detail.solo': '一个人去', 'detail.beginner': '新手友好',
      'detail.photos': '实拍照片',
      'detail.notime': '时间待确认', 'share.copied': '链接已复制，去粘贴给朋友吧。',
      'yes': '合适', 'no': '一般', 'unknown': '未标注', 'detail.view': '查看详情',
      'detail.novenue': '地点待确认',
      'results': '个结果', 'running': '长期组织',
    },
    en: {
      'offline': 'Showing the last downloaded data',
      'loading': 'Loading today’s guide…',
      'error': 'The guide could not load. Please refresh.',
      'empty': 'Nothing confirmed for this filter yet — try another.',
      'nav.today': 'All', 'nav.tonight': 'Tonight', 'nav.weekend': 'Weekend',
      'nav.explore': 'Explore', 'nav.community': 'Communities', 'nav.new': 'Photo spots',
      'block.top3': 'Top 3 for today', 'block.timeline': 'Today’s timeline',
      'block.communities': 'Communities worth joining',
      'pins.block': 'My picks', 'pins.pin': 'Pin', 'pins.pinned': 'Pinned',
      'pins.remove': 'Remove this pick', 'pins.note': 'Tap Pin to keep a type in “My picks” on the home page.',
      'pins.note.cat': 'Tap Pin to keep a category in the home quick filters.',
      'pins.nonematches': 'Nothing matches this type today — try another under Filter → Type, or tap ✕ to remove.',
      'filter.open': 'Filter', 'filter.title': 'Filter', 'filter.clear': 'Clear', 'filter.apply': 'Show results',
      'filter.time': 'When', 'filter.category': 'Category', 'filter.type': 'Type', 'filter.attr': 'Traits',
      'time.today': 'Today', 'time.tonight': 'Tonight', 'time.weekend': 'This weekend', 'time.next7': 'Next 7 days',
      'attr.beginner': 'Beginner friendly', 'attr.solo': 'Good solo', 'attr.free': 'Free',
      'attr.need_booking': 'Sign-up needed', 'attr.walk_in': 'Just turn up', 'attr.group': 'Has a group chat',
      'attr.english': 'English friendly', 'attr.international': 'International', 'attr.indoor': 'Indoor', 'attr.outdoor': 'Outdoor',
      'foot.source': 'Every entry keeps its original source link — open a card to see it.',
      'foot.updated': 'Data updated', 'foot.offlineok': 'Works offline with the last download',
      'settings.title': 'Display', 'settings.theme': 'Theme', 'settings.lang': 'Language',
      'settings.system': 'System', 'settings.light': 'Light', 'settings.dark': 'Dark', 'settings.follow': 'System',
      'detail.when': 'When', 'detail.where': 'Where', 'detail.price': 'Price',
      'detail.who': 'Who it suits', 'detail.why': 'Why we picked it', 'detail.next': 'What to do next',
      'detail.know': 'Before you go', 'detail.contact': 'Contact', 'detail.deadline': 'Sign-up deadline',
      'detail.source': 'Source', 'detail.solo': 'Solo friendly', 'detail.beginner': 'Beginner friendly',
      'detail.photos': 'Real photos',
      'detail.notime': 'Time TBC', 'share.copied': 'Link copied — paste it to a friend.',
      'yes': 'Yes', 'no': 'Not really', 'unknown': 'Not stated', 'detail.view': 'Details',
      'detail.novenue': 'Venue TBC',
      'results': 'results', 'running': 'Ongoing',
    },
  };

  var ACTION_TEXT = {
    // 「查看详情」是打开卡片详情的按钮文案（detail.view），与 action_type 文案**不能同名**，
    // 否则一张卡上会并排出现两个「查看详情」（用户 2026-10-16 截图投诉）。
    zh: { BOOK: '立即报名', BUY_TICKET: '立即购票', DM_ORGANIZER: '私信主办方', JOIN_GROUP: '加入群聊', WALK_IN: '直接到店', CALL_CONFIRM: '先确认', SAVE_FOR_LATER: '查看原帖' },
    en: { BOOK: 'Sign up', BUY_TICKET: 'Buy tickets', DM_ORGANIZER: 'Message organizer', JOIN_GROUP: 'Join group', WALK_IN: 'Just turn up', CALL_CONFIRM: 'Confirm first', SAVE_FOR_LATER: 'Open post' },
  };

  var PLACEHOLDER = { international_social: '🌍', sport_social: '🎾', live_music: '🎸', nightlife: '🍸', culture: '🎨', checkin: '📸', outdoor: '🌴', community: '🤝' };
  var ATTRS = ['beginner', 'solo', 'free', 'need_booking', 'walk_in', 'group', 'english', 'international', 'indoor', 'outdoor'];
  var TIMES = ['today', 'tonight', 'weekend', 'next7'];

  // The payload ships items once and references them by id from top3 /
  // timeline / sections, so resolve the references once on load.
  function resolveGuide(g) {
    var byId = {};
    g.items.forEach(function (it) { byId[it.id] = it; });
    g.top3 = g.top3.map(function (id) { return byId[id]; }).filter(Boolean);
    g.timeline = g.timeline.map(function (id) { return byId[id]; }).filter(Boolean);
    g.sections.forEach(function (sec) {
      sec.items = (sec.item_ids || []).map(function (id) { return byId[id]; }).filter(Boolean);
      sec.count = sec.items.length;
    });
    return g;
  }

  var state = {
    guide: null,
    view: 'today',
    filters: { cats: [], types: [], time: null, attrs: [] },
    sheetDraft: null,
    offline: false,
  };

  var $ = function (id) { return document.getElementById(id); };
  var lang = function () { return document.documentElement.lang === 'en' ? 'en' : 'zh'; };
  var t = function (k) { return (I18N[lang()] || I18N.zh)[k] || k; };
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pick(obj) { return obj ? (obj[lang()] || obj.zh || '') : ''; }

  /* ------------------------------------------------------------- saved prefs */

  function pref(k, fallback) {
    try { return localStorage.getItem('hk.' + k) || fallback; } catch (e) { return fallback; }
  }
  function setPref(k, v) {
    try { localStorage.setItem('hk.' + k, v); } catch (e) { /* private mode */ }
  }
  // 用户 2026-10-15 令：喜欢的类型要能「固定到首页」。纯前端能力——只存在本机，
  // 刷新与离线都要保住，因此存 localStorage 而不是烘进 daily_guide.json。
  function pinsList() {
    try {
      var raw = localStorage.getItem('hk.pins');
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(function (x) { return typeof x === 'string' && x; }) : [];
    } catch (e) { return []; }
  }
  function setPins(arr) {
    try { localStorage.setItem('hk.pins', JSON.stringify(arr)); } catch (e) { /* private mode */ }
  }
  function togglePin(type) {
    var p = pinsList();
    var i = p.indexOf(type);
    if (i === -1) p.push(type); else p.splice(i, 1);
    setPins(p);
  }
  // 用户 2026-10-15 令：常用的「分类」也要能固定到首页，方便一键筛选。
  // 与「类型固定」（hk.pins → 首页「我的关注」卡片块）是两套独立机制：
  // 分类固定成首页的常驻快捷筛选按钮，点一下应用/取消该分类筛选。
  // 存的是稳定 key（如 live_music），不是会随语言变的文案，否则切语言就失效。
  function pinCatsList() {
    try {
      var raw = localStorage.getItem('hk.pinCats');
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(function (x) { return typeof x === 'string' && x; }) : [];
    } catch (e) { return []; }
  }
  function setPinCats(arr) {
    try { localStorage.setItem('hk.pinCats', JSON.stringify(arr)); } catch (e) { /* private mode */ }
  }
  function togglePinCat(key) {
    var p = pinCatsList();
    var i = p.indexOf(key);
    if (i === -1) p.push(key); else p.splice(i, 1);
    setPinCats(p);
  }
  function resolveLang(v) {
    if (v === 'FOLLOW_SYSTEM') {
      var l = (navigator.languages && navigator.languages[0]) || navigator.language || 'zh-CN';
      return String(l).toLowerCase().indexOf('zh') === 0 ? 'zh-CN' : 'en';
    }
    return v;
  }
  function applyTheme() {
    var v = pref('theme', 'SYSTEM');
    var dark = v === 'DARK' || (v === 'SYSTEM' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }
  function applyLang() {
    var v = pref('lang', 'FOLLOW_SYSTEM');
    var resolved = resolveLang(v);
    document.documentElement.lang = resolved === 'en' ? 'en' : 'zh-CN';
    document.documentElement.dataset.lang = document.documentElement.lang;
  }

  /* --------------------------------------------------------------- helpers */

  function dateAdd(dateKey, days) {
    var ms = Date.parse(dateKey + 'T00:00:00+08:00') + days * 86400000;
    var d = new Date(ms + 8 * 3600000);
    return d.toISOString().slice(0, 10);
  }
  // The date is fixed to +08:00, so shift before reading the UTC weekday —
  // otherwise every weekday is one day behind and "本周"放 weekend wrong.
  function weekday(dateKey) { return new Date(Date.parse(dateKey + 'T00:00:00+08:00') + 8 * 3600000).getUTCDay(); }
  function dayLabel(dateKey) {
    var d = new Date(Date.parse(dateKey + 'T00:00:00+08:00') + 8 * 3600000);
    return lang() === 'en' ? d.toISOString().slice(0, 10) : (d.getUTCMonth() + 1) + '月' + d.getUTCDate() + '日';
  }
  function weekendKeys(dateKey) {
    var wd = weekday(dateKey);
    var satOffset = ((6 - wd + 7) % 7) || 7;
    var sat = dateAdd(dateKey, satOffset);
    return [sat, dateAdd(sat, 1)];
  }
  function isTonight(it) {
    var d = state.guide.date;
    var today = it.time.start_date === d || it.time.next_session_date === d;
    var evening = !it.time.clock || it.time.clock >= '17:00';
    var spot = it.kind === 'spot' && (it.category === 'nightlife' || it.category === 'live_music');
    return (it.kind === 'event' && today && evening) || spot;
  }
  var TIME_PREDICATE = {
    today: function (it) {
      var d = state.guide.date;
      return it.time.start_date === d || it.time.next_session_date === d;
    },
    tonight: isTonight,
    weekend: function (it) {
      var w = weekendKeys(state.guide.date);
      var d = it.time.start_date;
      return d === w[0] || d === w[1];
    },
    next7: function (it) {
      var d = it.time.start_date;
      if (!d) return false;
      var limit = dateAdd(state.guide.date, 7);
      return d >= state.guide.date && d <= limit;
    },
  };

  function matches(it, f, skip) {
    if (skip !== 'cats' && f.cats.length && f.cats.indexOf(it.category) === -1) return false;
    if (skip !== 'types' && f.types.length && !f.types.some(function (x) { return it.types.indexOf(x) !== -1; })) return false;
    if (skip !== 'time' && f.time && !TIME_PREDICATE[f.time](it)) return false;
    for (var i = 0; i < f.attrs.length; i++) {
      if (skip === 'attr:' + f.attrs[i]) continue;
      if (!it.attrs[f.attrs[i]]) return false;
    }
    return true;
  }
  function countFor(dim, value) {
    var f = state.filters;
    var n = 0;
    for (var i = 0; i < state.guide.items.length; i++) {
      var it = state.guide.items[i];
      if (!matches(it, f, dim)) continue;
      if (dim === 'cats' && it.category !== value) continue;
      if (dim === 'types' && it.types.indexOf(value) === -1) continue;
      if (dim === 'time' && !TIME_PREDICATE[value](it)) continue;
      if (dim.indexOf('attr:') === 0 && !it.attrs[value]) continue;
      n++;
    }
    return n;
  }
  function anyFilter() {
    var f = state.filters;
    return f.cats.length || f.types.length || f.time || f.attrs.length;
  }
  function visibleItems() {
    return state.guide.items.filter(function (it) { return matches(it, state.filters); });
  }

  /* ----------------------------------------------------------------- cards */

  function attrYes(v) { return v === true ? t('yes') : v === false ? t('no') : t('unknown'); }

  // Solo / beginner / free already live in the fact row; repeating them as tags
  // is what made the first cards read as a wall of identical badges.
  function tagsFor(it) {
    var out = [];
    if (it.attrs.international) out.push(['明确国际参与', 'hot']);
    else if (it.attrs.english) out.push(['英语友好', 'hot']);
    if (it.attrs.group) out.push(['有群聊', '']);
    if (it.attrs.need_booking) out.push(['需报名', 'warn']);
    else if (it.attrs.walk_in) out.push(['可直接到店', '']);
    it.types.forEach(function (ty) { if (out.length < 5) out.push([ty, '']); });
    return out.slice(0, 5);
  }

  // Only claim a trait when the source supports it — silence beats "未标注".
  // 时间放在事实行第一位（用户 2026-10-15 令：卡上必须一眼看到时间/日期），
  // 只放在图片角标上会在滚动/裁切时丢失。
  function factRow(it) {
    var f = [];
    var when = it.time && pick(it.time.display);
    // 常设地点/长期社群的 precision 是 unknown，它们的「常设·随时可去」已经在角标上，
    // 不再在事实行重复；只有真正带档期的活动才把时间放进卡身。
    if (when && it.time.precision !== 'unknown') f.push('🕘 ' + esc(when));
    // 地点是「去哪玩」的核心信息，不能因为来源没写就整行消失（用户 2026-10-16 投诉
    // 「根本没说是哪个地点…最主要的核心信息点都丢了」）。没有就如实标「地点待确认」。
    var where = it.venue || it.address;
    f.push(where ? '📍 ' + esc(where) : '📍 ' + esc(t('detail.novenue')));
    if (it.price) f.push('💰 ' + esc(it.price));
    if (it.attrs.solo === true) f.push('👤 ' + (lang() === 'en' ? 'Good solo' : '一个人可去'));
    if (it.attrs.beginner === true) f.push('🌱 ' + (lang() === 'en' ? 'Beginner ok' : '新手友好'));
    return f;
  }

  function mediaHtml(it, cls) {
    if (it.image) {
      return '<img class="' + cls + '" src="./' + esc(it.image.file) + '" alt="' + esc(it.title) + '" loading="lazy" decoding="async">';
    }
    return '<div class="card-ph" aria-hidden="true">' + (PLACEHOLDER[it.category] || '📍') + '</div>';
  }

  function ctaHtml(it) {
    var label = (ACTION_TEXT[lang()] || ACTION_TEXT.zh)[it.action_type] || t('detail.view');
    if (it.action_url) {
      return '<a class="cta" href="' + esc(it.action_url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + '</a>';
    }
    return '<button class="cta" type="button" data-detail="' + esc(it.id) + '">' + esc(label) + '</button>';
  }

  function cardHtml(it) {
    var when = pick(it.time.display) || t('detail.notime');
    var tags = tagsFor(it).map(function (x) {
      return '<span class="tag ' + x[1] + '">' + esc(x[0]) + '</span>';
    }).join('');
    var facts = factRow(it);
    var note = it.action_text
      ? '<div class="action-note' + (it.actionability === 'CHECK_FIRST' ? ' warn' : '') + '">' + esc(it.action_text) + '</div>'
      : '';
    var src = it.sources && it.sources.length
      ? '<div class="card-src">' + t('detail.source') + '：<a href="' + esc(it.sources[0].url) + '" target="_blank" rel="noopener noreferrer">' + esc(it.sources[0].label || '来源') + '</a></div>'
      : '';
    return '<article class="card" data-id="' + esc(it.id) + '">' +
      '<div class="card-media">' + mediaHtml(it, '') +
      // 角标只留日期本身（去掉「· 具体时间待确认」尾巴），否则多天区间会把角标撑成两行、盖住海报；
      // 完整时间在卡片事实行里（🕘）再说一遍，两处各司其职：角标扫图、事实行细读。
      '<span class="card-badge' + (it.actionability === 'CHECK_FIRST' ? ' warn' : '') + '">' + esc(when.replace(/\s*·\s*(具体时间待确认|time TBC)$/, '')) + '</span></div>' +
      '<div class="card-body">' +
      '<h3 class="card-title">' + esc(it.title) + '</h3>' +
      // 副标题与标题/时间完全一样时是纯重复（用户 2026-10-16 截图投诉「标题下面又重复一遍」），此时不渲染。
      (it.one_liner && it.one_liner !== it.title && it.one_liner !== when ? '<p class="card-oneline">' + esc(it.one_liner) + '</p>' : '') +
      (facts.length ? '<div class="card-facts"><span>' + facts.join('</span><span>') + '</span></div>' : '') +
      (tags ? '<div class="tags">' + tags + '</div>' : '') +
      note +
      '<div class="card-cta">' + ctaHtml(it) +
      // The primary button already opens details when there is no link to follow.
      (it.action_url ? '<button class="cta ghost" type="button" data-detail="' + esc(it.id) + '">' + t('detail.view') + '</button>' : '') +
      '</div>' +
      src +
      '</div></article>';
  }

  function sectionHtml(sec) {
    var grid = sec.items.map(cardHtml).join('');
    // data-sec 供滚动联动高亮识别「当前占据视口顶部的区块」（见 applyTabHighlight）。
    return '<section class="block" data-sec="' + esc(sec.key) + '"><div class="section-head"><h2 class="block-title">' + esc(pick({ zh: sec.title, en: sec.title_en || sec.title })) +
      '</h2><span class="count">' + sec.count + ' ' + esc(t('results')) + '</span></div>' +
      '<div class="section-grid">' + grid + '</div></section>';
  }

  function communityHtml(c) {
    var desc = c.category === 'community' ? '' : '';
    return '<div class="community">' +
      '<h3>' + esc(c.name) + '</h3>' +
      (c.description ? '<p>' + esc(c.description) + '</p>' : '') +
      (c.types && c.types.length ? '<div class="tags">' + c.types.map(function (x) { return '<span class="tag">' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
      (c.profile_url
        ? '<div class="card-cta"><a class="cta" href="' + esc(c.profile_url) + '" target="_blank" rel="noopener noreferrer">' + esc(t('attr.walk_in') === '直接到店' ? '关注这个账号' : 'Follow') + '</a></div>'
        : '') +
      '</div>';
  }

  /* ---------------------------------------------------------------- render */

  function renderHeader() {
    var g = state.guide;
    $('todayLine').textContent = dayLabel(g.date) + ' ' + pick(g.weekday);
    if (g.weather && g.weather.temp != null) {
      var w = $('weather');
      var range = g.weather.high != null && g.weather.low != null ? ' ' + g.weather.low + '~' + g.weather.high + '°' : '';
      w.textContent = pick(g.weather.text) + ' ' + g.weather.temp + '°' + range;
      w.hidden = false;
    }
    $('updatedAt').textContent = new Date(g.generated_at).toLocaleString(lang() === 'en' ? 'en-GB' : 'zh-CN', {
      month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });
    $('offlineStamp').textContent = ' · ' + $('updatedAt').textContent;
  }

  function renderTop3() {
    var box = $('blockTop3');
    if (!state.guide.top3.length) { box.hidden = true; return; }
    $('top3').innerHTML = state.guide.top3.map(cardHtml).join('');
    box.hidden = false;
  }

  // 「我的关注」：只出现在今日首页、TOP3 之后，按已固定类型分组列出命中条目，
  // 组头带 ✕ 可直接取消。已固定内容存在 localStorage，刷新/切语言/换主题都保住。
  function renderPins() {
    var box = $('blockPins');
    var pins = pinsList();
    if (!pins.length) { box.hidden = true; return; }
    var g = state.guide;
    var html = '';
    pins.forEach(function (ty) {
      var items = g.items.filter(function (it) { return it.types.indexOf(ty) !== -1; });
      html += '<section class="pin-group"><div class="pin-head"><h3 class="pin-title">' + esc(ty) + '</h3>' +
        '<button class="icon-btn pin-x" type="button" data-unpin="' + esc(ty) + '" aria-label="' + esc(t('pins.remove')) + '" title="' + esc(t('pins.remove')) + '">✕</button></div>' +
        (items.length
          ? '<div class="section-grid">' + items.map(cardHtml).join('') + '</div>'
          : '<p class="pins-empty">' + esc(t('pins.nonematches')) + '</p>') +
        '</section>';
    });
    $('pins').innerHTML = html;
    box.hidden = false;
  }

  function renderTimeline() {
    var box = $('blockTimeline');
    var rows = state.guide.timeline;
    if (!rows.length) { box.hidden = true; return; }
    $('timeline').innerHTML = rows.map(function (it) {
      return '<li><span class="t">' + esc(it.time.clock || '—') + '</span>' +
        '<span><span class="what">' + esc(it.title) + '</span>' +
        (it.venue ? '<br><span class="where">📍 ' + esc(it.venue) + '</span>' : '') + '</span></li>';
    }).join('');
    box.hidden = false;
  }

  function renderQuickChips() {
    var f = state.filters;
    // 固定的分类排在最前：用户自己挑的常用分类＝首页常驻快捷筛选，一键应用/取消该筛选。
    // 只显示当前日报里仍存在的分类 key——旧分类从数据里消失时安静隐藏，不报错。
    var catByKey = {};
    state.guide.filters.categories.forEach(function (c) { catByKey[c.key] = c; });
    var pinnedCats = pinCatsList().filter(function (k) { return catByKey[k]; });
    var html = pinnedCats.map(function (k) {
      return '<button type="button" class="chip pin-cat' + (f.cats.indexOf(k) !== -1 ? ' on' : '') + '" data-quick-cat="' + esc(k) + '">' +
        esc(pick(catByKey[k].label)) + ' <b>' + countFor('cats', k) + '</b></button>';
    }).join('');
    html += TIMES.map(function (k) {
      return '<button type="button" class="chip' + (f.time === k ? ' on' : '') + '" data-quick-time="' + k + '">' +
        esc(t('time.' + k)) + ' <b>' + countFor('time', k) + '</b></button>';
    }).join('');
    var topAttrs = ['beginner', 'solo', 'free', 'english'];
    html += topAttrs.map(function (k) {
      return '<button type="button" class="chip' + (f.attrs.indexOf(k) !== -1 ? ' on' : '') + '" data-quick-attr="' + k + '">' +
        esc(t('attr.' + k)) + ' <b>' + countFor('attr:' + k, k) + '</b></button>';
    }).join('');
    html += '<button type="button" class="chip more-chip" id="moreFilters">' + esc(t('filter.open')) + ' +</button>';
    $('quickChips').innerHTML = html;

    var act = $('activeFilters');
    var chips = [];
    f.cats.forEach(function (c) {
      var label = (state.guide.filters.categories.filter(function (x) { return x.key === c; })[0] || {}).label;
      chips.push('<span class="chip on" data-remove-cat="' + esc(c) + '">' + esc(pick(label) || c) + ' ✕</span>');
    });
    f.types.forEach(function (c) { chips.push('<span class="chip on" data-remove-type="' + esc(c) + '">' + esc(c) + ' ✕</span>'); });
    f.attrs.forEach(function (c) { chips.push('<span class="chip on" data-remove-attr="' + esc(c) + '">' + esc(t('attr.' + c)) + ' ✕</span>'); });
    if (f.time) chips.push('<span class="chip on" data-remove-time="1">' + esc(t('time.' + f.time)) + ' ✕</span>');
    act.innerHTML = chips.join('');
    act.hidden = chips.length === 0;
  }

  function renderResults() {
    var out = [];
    var g = state.guide;
    var empty = $('emptyState');

    if (state.view === 'community') {
      $('results').innerHTML = '';
      $('blockCommunities').hidden = false;
      empty.hidden = g.communities.length !== 0;
      return;
    }
    $('blockCommunities').hidden = true;

    if (anyFilter() || state.view === 'explore') {
      var items = state.view === 'explore' && !anyFilter() ? g.items : visibleItems();
      if (!items.length) { out.push(''); empty.hidden = false; } else { empty.hidden = true; }
      if (items.length) {
        out.push('<section class="block"><div class="section-head"><h2 class="block-title">' + esc(t('filter.title')) +
          '</h2><span class="count">' + items.length + ' ' + esc(t('results')) + '</span></div>' +
          '<div class="section-grid">' + items.map(cardHtml).join('') + '</div></section>');
      }
      $('results').innerHTML = out.join('');
      return;
    }
    empty.hidden = true;

    var keys = state.view === 'tonight' ? ['tonight']
      : state.view === 'weekend' ? ['weekend']
        : state.view === 'new' ? ['checkin', 'outdoor']
          : null;

    if (keys) {
      keys.forEach(function (k) {
        var sec = g.sections.filter(function (x) { return x.key === k; })[0];
        if (sec) out.push(sectionHtml(sec));
      });
      if (!out.length) empty.hidden = false;
    } else {
      ['tonight', 'weekend', 'international', 'sport', 'music', 'nightlife', 'culture', 'checkin', 'outdoor'].forEach(function (k) {
        var sec = g.sections.filter(function (x) { return x.key === k; })[0];
        if (sec) out.push(sectionHtml(sec));
      });
    }
    $('results').innerHTML = out.join('');
  }

  function render() {
    renderHeader();
    var today = state.view === 'today';
    $('blockTop3').hidden = !today;
    if (today) renderTop3();
    $('blockPins').hidden = !today;
    if (today) renderPins();
    $('blockTimeline').hidden = !today;
    if (today) renderTimeline();
    $('filterbar').hidden = state.view === 'community';
    $('viewTitle').textContent = t('nav.' + state.view);
    renderQuickChips();
    renderResults();
    applyTabHighlight();
    if (state.view === 'community') renderCommunities();
  }

  /* 顶栏标签原本只跟 state.view 走，与滚动无关：在「全部」长页里往下翻到本属
     「今晚／本周末／拍照打卡」的区块，或翻到装了未来档期（如 10月23–25日）的
     「音乐现场／文化体验」区块时，标签仍亮着「全部」，用户会误以为眼前的内容
     就是当天（2026-10-15 用户投诉：翻到 10 月 23–25 号还亮「今日」，产生误导）。
     修法：滚动时让「占据视口顶部的那个区块」驱动高亮——有独立标签的区块亮该标签
     （今晚／本周末／拍照打卡）；没有独立标签的内容型区块（音乐/文化/夜生活/国际/
     运动）与页面顶部的 TOP3/时间线一并归到「全部」，因为「全部」是唯一诚实的说法
     （它确实装着这些内容），不会再谎称「今天」。滚动只改高亮，不动 state.view、
     也不写 URL，避免把用户顶回页首或污染历史。 */
  var SEC_TAB = { tonight: 'tonight', weekend: 'weekend', checkin: 'new', outdoor: 'new' };

  function applyTabHighlight() {
    var want = state.view === 'today' ? spyTab() : state.view;
    var links = document.querySelectorAll('#tabs a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('active', links[i].dataset.view === want);
    }
  }
  function spyTab() {
    var top = document.querySelector('.top');
    var line = (top ? top.getBoundingClientRect().bottom : 0) + 8;
    var secs = document.querySelectorAll('#results section[data-sec]');
    var key = '';
    // 区块按 DOM 顺序：最后一个「顶端已越过触发线」的区块，就是此刻占据视口顶部的那个。
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].getBoundingClientRect().top > line) break;
      key = secs[i].getAttribute('data-sec');
    }
    return SEC_TAB[key] || 'today';
  }

  function renderCommunities() {
    $('communities').innerHTML = state.guide.communities.map(communityHtml).join('');
  }

  /* ------------------------------------------------------------- filtering */

  function setView(v) {
    state.view = v;
    render();
  }
  function toggle(arr, v) {
    var i = arr.indexOf(v);
    if (i === -1) arr.push(v); else arr.splice(i, 1);
    return arr;
  }

  /* ---------------------------------------------------------------- detail */

  function openDetail(id) {
    var it = state.guide.items.filter(function (x) { return x.id === id; })[0];
    if (!it) return;
    var rows = [];
    if (it.time.display) rows.push([t('detail.when'), pick(it.time.display)]);
    if (it.venue) rows.push([t('detail.where'), it.venue]);
    if (it.address && it.address !== it.venue) rows.push([t('detail.where'), it.address]);
    if (it.price) rows.push([t('detail.price'), it.price]);
    rows.push([t('detail.solo'), attrYes(it.attrs.solo)]);
    rows.push([t('detail.beginner'), attrYes(it.attrs.beginner)]);
    if (it.contact_method) rows.push([t('detail.contact'), it.contact_method]);
    if (it.booking_deadline) rows.push([t('detail.deadline'), it.booking_deadline]);

    var html = '';
    if (it.image) html += '<img class="detail-hero" src="./' + esc(it.image.file) + '" alt="">';
    html += '<h3>' + esc(it.title) + '</h3>';
    html += '<div class="detail-time">' + esc(pick(it.time.display)) + '</div>';
    if (it.one_liner && it.one_liner !== it.title && it.one_liner !== pick(it.time.display)) html += '<p>' + esc(it.one_liner) + '</p>';
    html += '<dl class="detail-grid">';
    rows.forEach(function (r) { html += '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>'; });
    html += '</dl>';
    if (it.why_go) html += '<div class="detail-section"><h4>' + t('detail.why') + '</h4><p>' + esc(it.why_go) + '</p></div>';
    if (it.who_for) html += '<div class="detail-section"><h4>' + t('detail.who') + '</h4><p>' + esc(it.who_for) + '</p></div>';
    if (it.action_text) html += '<div class="action-note' + (it.actionability === 'CHECK_FIRST' ? ' warn' : '') + '"><strong>' + t('detail.next') + '</strong><br>' + esc(it.action_text) + '</div>';
    if (it.things_to_know) html += '<div class="detail-section"><h4>' + t('detail.know') + '</h4><p>' + esc(it.things_to_know) + '</p></div>';
    // 策展打卡条目：封面之外的真实照片横滑条（每张带图注与来源）。
    if (it.photos && it.photos.length > 1) {
      var rest = it.photos.slice(1);
      if (rest.length) {
        html += '<div class="detail-section"><h4>' + t('detail.photos') + '</h4><div class="photo-strip">' +
          rest.map(function (ph) {
            var cap = [ph.caption, ph.credit].filter(Boolean).join(' · ');
            var body = '<img src="./' + esc(ph.file) + '" alt="" loading="lazy" decoding="async">';
            if (ph.source_url) body = '<a href="' + esc(ph.source_url) + '" target="_blank" rel="noopener noreferrer">' + body + '</a>';
            return '<figure class="photo-item">' + body + (cap ? '<figcaption>' + esc(cap) + '</figcaption>' : '') + '</figure>';
          }).join('') + '</div></div>';
      }
    }
    if (it.image_credit) html += '<div class="detail-section"><h4>' + t('detail.source') + '</h4><p>' + esc(it.image_credit) + '</p></div>';
    if (it.sources && it.sources.length) {
      html += '<div class="detail-section"><h4>' + t('detail.source') + '</h4><p>' +
        it.sources.map(function (s) {
          return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label || s.url) + '</a>';
        }).join(' · ') + '</p></div>';
    }
    html += '<div class="card-cta">' + ctaHtml(it) + '</div>';

    $('modalBody').innerHTML = html;
    $('modal').hidden = false;
    document.body.style.overflow = 'hidden';
  }

  /* ----------------------------------------------------------------- sheet */

  function openSheet() {
    state.sheetDraft = { cats: state.filters.cats.slice(), types: state.filters.types.slice(), time: state.filters.time, attrs: state.filters.attrs.slice() };
    renderSheet();
    $('sheet').hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function renderSheet() {
    var f = state.sheetDraft;
    var g = state.guide;
    var html = '';
    html += '<div class="filter-group"><h4>' + t('filter.time') + '</h4><div class="chip-wrap">';
    TIMES.forEach(function (k) {
      var on = f.time === k;
      html += '<button type="button" class="chip' + (on ? ' on' : '') + '" data-d-time="' + k + '">' + esc(t('time.' + k)) + ' <b>' + sheetCount('time', k) + '</b></button>';
    });
    html += '</div></div>';

    html += '<div class="filter-group"><h4>' + t('filter.category') + '</h4>';
    html += '<p class="filter-note">' + esc(t('pins.note.cat')) + '</p><div class="chip-wrap">';
    var pinCatKeys = pinCatsList();
    g.filters.categories.forEach(function (c) {
      var on = f.cats.indexOf(c.key) !== -1;
      var pin = pinCatKeys.indexOf(c.key) !== -1;
      html += '<span class="pin-pair">' +
        '<button type="button" class="chip' + (on ? ' on' : '') + '" data-d-cat="' + esc(c.key) + '">' + esc(pick(c.label)) + ' <b>' + sheetCount('cats', c.key) + '</b></button>' +
        '<button type="button" class="pin-toggle' + (pin ? ' on' : '') + '" data-pin-cat="' + esc(c.key) + '" aria-pressed="' + (pin ? 'true' : 'false') + '">' + esc(pin ? t('pins.pinned') : t('pins.pin')) + '</button>' +
        '</span>';
    });
    html += '</div></div>';

    html += '<div class="filter-group"><h4>' + t('filter.type') + '</h4>';
    html += '<p class="filter-note">' + esc(t('pins.note')) + '</p><div class="chip-wrap">';
    var pins = pinsList();
    g.filters.types.forEach(function (ty) {
      var on = f.types.indexOf(ty.key) !== -1;
      var pin = pins.indexOf(ty.key) !== -1;
      // 显式的「固定」开关，不用长按这类隐藏手势。
      html += '<span class="pin-pair">' +
        '<button type="button" class="chip' + (on ? ' on' : '') + '" data-d-type="' + esc(ty.key) + '">' + esc(ty.label) + ' <b>' + sheetCount('types', ty.key) + '</b></button>' +
        '<button type="button" class="pin-toggle' + (pin ? ' on' : '') + '" data-pin-type="' + esc(ty.key) + '" aria-pressed="' + (pin ? 'true' : 'false') + '">' + esc(pin ? t('pins.pinned') : t('pins.pin')) + '</button>' +
        '</span>';
    });
    html += '</div></div>';

    html += '<div class="filter-group"><h4>' + t('filter.attr') + '</h4><div class="chip-wrap">';
    ATTRS.forEach(function (k) {
      var on = f.attrs.indexOf(k) !== -1;
      html += '<button type="button" class="chip' + (on ? ' on' : '') + '" data-d-attr="' + k + '">' + esc(t('attr.' + k)) + ' <b>' + sheetCount('attr:' + k, k) + '</b></button>';
    });
    html += '</div></div>';

    $('sheetBody').innerHTML = html;
  }
  function sheetCount(dim, value) {
    var saved = state.filters;
    state.filters = state.sheetDraft;
    var n = countFor(dim, value);
    state.filters = saved;
    return n;
  }

  /* ------------------------------------------------------------------ misc */

  function boot() {
    var v = location.hash.replace('#', '');
    state.view = ['today', 'tonight', 'weekend', 'explore', 'community', 'new'].indexOf(v) !== -1 ? v : 'today';

    fetch('./data/daily_guide.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        if (r.headers.get('X-From-Cache')) setOffline(true);
        return r.json();
      })
      .then(function (g) {
        if (g.schema !== 'haikou-daily-guide/1') throw new Error('schema ' + g.schema);
        state.guide = resolveGuide(g);
        $('loading').hidden = true;
        document.title = g.share.title;
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', g.share.description);
        var ogt = document.querySelector('meta[property="og:title"]');
        if (ogt) ogt.setAttribute('content', g.share.title);
        var ogd = document.querySelector('meta[property="og:description"]');
        if (ogd) ogd.setAttribute('content', g.share.description);
        render();
      })
      .catch(function (e) {
        $('loading').hidden = true;
        var el = $('error');
        el.hidden = false;
        el.textContent = t('error') + ' (' + e.message + ')';
      });
  }

  /* --------------------------------------------------------------- events */

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-detail],[data-quick-time],[data-quick-attr],[data-quick-cat],[data-remove-cat],[data-remove-type],[data-remove-attr],[data-remove-time],[data-d-cat],[data-d-type],[data-d-attr],[data-d-time],[data-pin-type],[data-pin-cat],[data-unpin],#moreFilters,#tab') : null;
    if (!el) return;
    var f = state.filters;

    if (el.dataset.detail) { openDetail(el.dataset.detail); return; }
    // 固定/取消固定：改本机偏好后同时刷新「我的关注」块与筛选面板上的开关状态。
    if (el.dataset.pinType) { togglePin(el.dataset.pinType); renderSheet(); render(); return; }
    if (el.dataset.pinCat) { togglePinCat(el.dataset.pinCat); renderSheet(); render(); return; }
    if (el.dataset.unpin) { togglePin(el.dataset.unpin); render(); return; }
    if (el.dataset.quickTime) { f.time = f.time === el.dataset.quickTime ? null : el.dataset.quickTime; render(); return; }
    if (el.dataset.quickCat) { toggle(f.cats, el.dataset.quickCat); render(); return; }
    if (el.dataset.quickAttr) { toggle(f.attrs, el.dataset.quickAttr); render(); return; }
    if (el.dataset.removeCat) { toggle(f.cats, el.dataset.removeCat); render(); return; }
    if (el.dataset.removeType) { toggle(f.types, el.dataset.removeType); render(); return; }
    if (el.dataset.removeAttr) { toggle(f.attrs, el.dataset.removeAttr); render(); return; }
    if (el.dataset.removeTime) { f.time = null; render(); return; }
    if (el.id === 'moreFilters') { openSheet(); return; }

    var d = state.sheetDraft;
    if (!d) return;
    if (el.dataset.dCat) { toggle(d.cats, el.dataset.dCat); renderSheet(); return; }
    if (el.dataset.dType) { toggle(d.types, el.dataset.dType); renderSheet(); return; }
    if (el.dataset.dAttr) { toggle(d.attrs, el.dataset.dAttr); renderSheet(); return; }
    if (el.dataset.dTime) { d.time = d.time === el.dataset.dTime ? null : el.dataset.dTime; renderSheet(); return; }
  });

  $('tabs').addEventListener('click', function (e) {
    var a = e.target.closest('a[data-view]');
    if (!a) return;
    e.preventDefault();
    history.replaceState(null, '', '#' + a.dataset.view);
    setView(a.dataset.view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $('openFilters').addEventListener('click', openSheet);
  $('closeSheet').addEventListener('click', function () { $('sheet').hidden = true; document.body.style.overflow = ''; });
  $('clearFilters').addEventListener('click', function () {
    state.sheetDraft = { cats: [], types: [], time: null, attrs: [] };
    renderSheet();
  });
  $('applyFilters').addEventListener('click', function () {
    state.filters = state.sheetDraft;
    $('sheet').hidden = true;
    document.body.style.overflow = '';
    render();
  });
  $('sheet').addEventListener('click', function (e) { if (e.target === $('sheet')) { $('sheet').hidden = true; document.body.style.overflow = ''; } });

  $('closeModal').addEventListener('click', function () { $('modal').hidden = true; document.body.style.overflow = ''; });
  $('modal').addEventListener('click', function (e) { if (e.target === $('modal')) { $('modal').hidden = true; document.body.style.overflow = ''; } });

  $('shareBtn').addEventListener('click', function () {
    var g = state.guide;
    var payload = g
      ? { title: g.share.title, text: g.share.description, url: location.href }
      : { title: document.title, url: location.href };
    if (navigator.share) {
      navigator.share(payload).catch(function () { /* user cancelled */ });
      return;
    }
    var text = payload.title + '\n' + (payload.text || '') + '\n' + payload.url;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () { toast(t('share.copied')); }, function () { toast(text); });
    } else {
      toast(text);
    }
  });

  function toast(msg) {
    var el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = 'position:fixed;left:50%;bottom:calc(28px + env(safe-area-inset-bottom));transform:translateX(-50%);background:var(--text);color:var(--bg);padding:10px 16px;border-radius:10px;z-index:99;font-size:14px;max-width:86vw;text-align:center;';
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 2600);
  }

  $('settingsBtn').addEventListener('click', function () {
    $('settings').hidden = false;
    syncSettings();
  });
  $('closeSettings').addEventListener('click', function () { $('settings').hidden = true; });
  $('settings').addEventListener('click', function (e) { if (e.target === $('settings')) $('settings').hidden = true; });

  function syncSettings() {
    var th = pref('theme', 'SYSTEM');
    var lg = pref('lang', 'FOLLOW_SYSTEM');
    document.querySelectorAll('#themeSeg button').forEach(function (b) { b.classList.toggle('on', b.dataset.themeVal === th); });
    document.querySelectorAll('#langSeg button').forEach(function (b) { b.classList.toggle('on', b.dataset.langVal === lg); });
  }
  $('themeSeg').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    setPref('theme', b.dataset.themeVal);
    applyTheme();
    syncSettings();
  });
  $('langSeg').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    setPref('lang', b.dataset.langVal);
    applyLang();
    syncSettings();
    if (state.guide) render();
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.dataset.i18n); });
  });

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { applyTheme(); });
  window.addEventListener('languagechange', function () {
    if (pref('lang', 'FOLLOW_SYSTEM') === 'FOLLOW_SYSTEM') { applyLang(); if (state.guide) render(); }
  });
  window.addEventListener('hashchange', function () {
    var v = location.hash.replace('#', '');
    if (['today', 'tonight', 'weekend', 'explore', 'community', 'new'].indexOf(v) !== -1 && v !== state.view) setView(v);
  });

  // 滚动联动高亮：只改标签的 active 类，不动 state.view，也不写 URL/history。
  // rAF 合帧，避免滚动时每帧都量一次 DOM。
  var spyRaf = 0;
  function onSpyScroll() {
    if (spyRaf) return;
    spyRaf = requestAnimationFrame(function () { spyRaf = 0; applyTabHighlight(); });
  }
  window.addEventListener('scroll', onSpyScroll, { passive: true });
  window.addEventListener('resize', onSpyScroll);

  /* ------------------------------------------------------------------- pwa */

  function setOffline(on) {
    state.offline = on;
    $('offlineBar').hidden = !on;
  }
  window.addEventListener('online', function () { setOffline(false); });
  window.addEventListener('offline', function () { setOffline(true); });
  setOffline(!navigator.onLine);

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js').catch(function () { /* offline shell unavailable */ });
  }

  applyTheme();
  applyLang();
  document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.dataset.i18n); });
  boot();
})();
