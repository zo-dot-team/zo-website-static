!function(){"use strict";const e=["client/modal.524009d4.js","client/about.b5b305f2.js","client/[slug].91de097d.js","client/index.365713a4.js","client/index.f24003ee.js","client/index.71af20ab.js","client/client.d5004e6f.js"].concat(["service-worker-index.html","arrow.png","farmer.png","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo.png","logo.svg","mailbox.png","manifest.json","pencil.png","points.png","potion.png","union.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1570953399084").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1570953399084"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1570953399084").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
