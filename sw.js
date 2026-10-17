/* Offline shell for 海口去哪玩.
   Data is network-first so a fresh guide wins; everything else is cache-first
   so the last download keeps working on a bad connection. */
var VERSION = 'hk-v13';
var SHELL = VERSION + '-shell';
var RUNTIME = VERSION + '-runtime';
var SHELL_FILES = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icons/favicon.svg'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    // 装壳时强制回源下载（cache:'reload'），别把 HTTP 缓存里 10 分钟前的旧文件装进离线壳。
    caches.open(SHELL).then(function (c) {
      return c.addAll(SHELL_FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k.indexOf(VERSION) === 0 ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* The guide changes every day, so anything that can change is network-first and
   only falls back to cache. Media and icons keep hashed filenames and never
   change under the same name, so those stay cache-first. */
function isFresh(url) {
  var p = url.pathname;
  return (
    p.indexOf('/data/') !== -1 ||
    /\.(html|css|js|json|webmanifest)$/.test(p) ||
    p.endsWith('/')
  );
}

// A cache fallback is by definition stale, so it is tagged on the way out and
// the page can say "this is the last download" without guessing at navigator.onLine.
function fromCache(hit) {
  var headers = new Headers(hit.headers);
  headers.set('X-From-Cache', '1');
  return hit.blob().then(function (body) {
    return new Response(body, { status: hit.status, statusText: hit.statusText, headers: headers });
  });
}

function networkFirst(req, fallback) {
  // no-cache = 走网络并强制校验（带 ETag 就是 304），否则浏览器 HTTP 缓存会给旧 app.js：
  // GitHub Pages 的 max-age 是 10 分钟，用户会「数据是新的、卡片却是旧模板」。
  return fetch(req, { cache: 'no-cache' })
    .then(function (res) {
      if (res && res.status === 200) {
        var copy = res.clone();
        caches.open(RUNTIME).then(function (c) { c.put(req, copy); });
      }
      return res;
    })
    .catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return fromCache(hit);
        return typeof fallback === 'function' ? fallback() : fallback;
      });
    });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(networkFirst(req, function () {
      return caches.match('./index.html').then(fromCache);
    }));
    return;
  }

  if (isFresh(url)) {
    e.respondWith(
      networkFirst(req, function () {
        return new Response(JSON.stringify({ schema: 'offline' }), { headers: { 'Content-Type': 'application/json' } });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(RUNTIME).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
